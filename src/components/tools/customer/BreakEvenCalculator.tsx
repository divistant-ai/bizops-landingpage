'use client';

import type { CalculationError } from '@/utils/errorHandling';
import { AlertCircle, BarChart3, Info, Loader2, Target, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ActionButtons from '@/components/tools/shared/ActionButtons';
import ErrorDisplay from '@/components/tools/shared/ErrorDisplay';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { safeCalculate, safeDivide, validateFields, validateNumber } from '@/utils/errorHandling';
import {
  downloadAsText,
  formatResultAsText,
  generateShareText,
  shareResult,
} from '@/utils/exportTools';

type BEPResult = {
  fixedCosts: number;
  variableCostPerUnit: number;
  sellingPricePerUnit: number;
  contributionMargin: number;
  contributionMarginRatio: number;
  breakEvenUnits: number;
  breakEvenRevenue: number;
  monthsToBreakEven: number;
};

export default function BreakEvenCalculator() {
  const t = useTranslations('CustomerTools.BreakEvenPoint');

  const [fixedCosts, setFixedCosts] = useState<string>('50000000');
  const [variableCost, setVariableCost] = useState<string>('50000');
  const [sellingPrice, setSellingPrice] = useState<string>('100000');
  const [monthlySales, setMonthlySales] = useState<string>('500');
  const [result, setResult] = useState<BEPResult | null>(null);
  const [errors, setErrors] = useState<CalculationError[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateBEP = () => {
    setErrors([]);
    setIsCalculating(true);

    const validationErrors = validateFields([
      () => validateNumber(fixedCosts, { min: 0, fieldName: t('fixed_costs') }),
      () => validateNumber(variableCost, { min: 0, fieldName: t('variable_cost') }),
      () => validateNumber(sellingPrice, { min: 0, fieldName: t('selling_price') }),
      () =>
        validateNumber(monthlySales, {
          min: 0,
          required: false,
          fieldName: t('monthly_sales'),
        }),
    ]);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setIsCalculating(false);
      return;
    }

    setTimeout(() => {
      const calculatedResult = safeCalculate<BEPResult>(
        () => {
          const fixed = Number.parseFloat(fixedCosts) || 0;
          const variable = Number.parseFloat(variableCost) || 0;
          const price = Number.parseFloat(sellingPrice) || 0;
          const monthly = Number.parseFloat(monthlySales) || 0;

          const contributionMargin = price - variable;
          const contributionMarginRatio = safeDivide(contributionMargin * 100, price, 0);

          const breakEvenUnits = safeDivide(fixed, contributionMargin, 0);
          const breakEvenRevenue = breakEvenUnits * price;

          const monthsToBreakEven = monthly > 0 ? safeDivide(breakEvenUnits, monthly, 0) : 0;

          return {
            fixedCosts: fixed,
            variableCostPerUnit: variable,
            sellingPricePerUnit: price,
            contributionMargin,
            contributionMarginRatio,
            breakEvenUnits,
            breakEvenRevenue,
            monthsToBreakEven,
          };
        },
        (error) => {
          setErrors([error]);
        },
      );

      if (calculatedResult) {
        setResult(calculatedResult);
      }

      setIsCalculating(false);
    }, 100);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  const handleDownload = () => {
    if (!result) {
      return;
    }

    const content = formatResultAsText(
      t('download_title'),
      {
        [t('download_fixed_costs')]: formatCurrency(result.fixedCosts),
        [t('download_variable_cost')]: formatCurrency(result.variableCostPerUnit),
        [t('download_selling_price')]: formatCurrency(result.sellingPricePerUnit),
        [t('download_monthly_sales')]: `${monthlySales} ${t('unit')}`,
      },
      {
        [t('download_contribution_margin')]: formatCurrency(result.contributionMargin),
        [t('download_cm_ratio')]: `${result.contributionMarginRatio.toFixed(2)}%`,
        [t('download_bep_units')]:
          `${Math.ceil(result.breakEvenUnits).toLocaleString('id-ID')} ${t('unit')}`,
        [t('download_bep_revenue')]: formatCurrency(result.breakEvenRevenue),
        [t('download_time_to_bep')]: `${result.monthsToBreakEven.toFixed(1)} ${t('months')}`,
      },
    );

    const timestamp = Date.now();
    downloadAsText(content, `break-even-point-${timestamp}.txt`);
  };

  const handleShare = async () => {
    if (!result) {
      return;
    }

    const shareText = generateShareText(
      t('share_title'),
      `${t('share_bep')}: ${Math.ceil(result.breakEvenUnits).toLocaleString('id-ID')} ${t('unit')} ${t('share_or')} ${formatCurrency(result.breakEvenRevenue)} (${result.monthsToBreakEven.toFixed(1)} ${t('months')})`,
    );

    await shareResult(t('share_title'), shareText);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-red-50 py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            <Target className="h-4 w-4" />
            Customer Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">{t('title')}</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {t('subtitle')}
          </p>
        </div>

        <ErrorDisplay errors={errors} className="mx-auto mb-6 max-w-4xl" />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
                {t('input_title')}
              </h2>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="fixed-costs"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t('fixed_costs')}
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3 text-gray-500 dark:text-slate-500">
                      Rp
                    </span>
                    <input
                      id="fixed-costs"
                      type="text"
                      value={fixedCosts}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setFixedCosts(value);
                      }}
                      className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      placeholder="50000000"
                      aria-describedby="fixed-costs-help"
                    />
                  </div>
                  <p
                    id="fixed-costs-help"
                    className="mt-1 text-xs text-gray-500 dark:text-slate-500"
                  >
                    {t('fixed_costs_help')}
                    {' '}
                    {fixedCosts && formatCurrency(Number.parseFloat(fixedCosts) || 0)}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="variable-cost"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t('variable_cost')}
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3 text-gray-500 dark:text-slate-500">
                      Rp
                    </span>
                    <input
                      id="variable-cost"
                      type="text"
                      value={variableCost}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setVariableCost(value);
                      }}
                      className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      placeholder="50000"
                      aria-describedby="variable-cost-help"
                    />
                  </div>
                  <p
                    id="variable-cost-help"
                    className="mt-1 text-xs text-gray-500 dark:text-slate-500"
                  >
                    {t('variable_cost_help')}
                    {' '}
                    {variableCost && formatCurrency(Number.parseFloat(variableCost) || 0)}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="selling-price"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t('selling_price')}
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3 text-gray-500 dark:text-slate-500">
                      Rp
                    </span>
                    <input
                      id="selling-price"
                      type="text"
                      value={sellingPrice}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setSellingPrice(value);
                      }}
                      className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-12 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      placeholder="100000"
                      aria-describedby="selling-price-help"
                    />
                  </div>
                  <p
                    id="selling-price-help"
                    className="mt-1 text-xs text-gray-500 dark:text-slate-500"
                  >
                    {sellingPrice && formatCurrency(Number.parseFloat(sellingPrice) || 0)}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="monthly-sales"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t('monthly_sales')}
                  </label>
                  <input
                    id="monthly-sales"
                    type="text"
                    value={monthlySales}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setMonthlySales(value);
                    }}
                    className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-4 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="500"
                    aria-describedby="monthly-sales-help"
                  />
                  <p
                    id="monthly-sales-help"
                    className="mt-1 text-xs text-gray-500 dark:text-slate-500"
                  >
                    {t('monthly_sales_help')}
                  </p>
                </div>

                <Button
                  onClick={calculateBEP}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                  size="lg"
                  disabled={isCalculating}
                  aria-label="Hitung break even point"
                >
                  {isCalculating
                    ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {t('calculating')}
                        </>
                      )
                    : (
                        <>
                          <Target className="mr-2 h-5 w-5" />
                          {t('calculate_button')}
                        </>
                      )}
                </Button>
              </div>
            </Card>

            <Card className="border-l-4 border-orange-500 bg-orange-50 p-4 dark:border-orange-600 dark:bg-slate-900">
              <div className="flex gap-2">
                <Info className="h-5 w-5 shrink-0 text-orange-600 dark:text-orange-400" />
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  <p className="mb-1 font-semibold dark:text-white">{t('info_title')}</p>
                  <p>{t('info_desc')}</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            {result
              ? (
                  <div
                    role="region"
                    aria-live="polite"
                    aria-label="Hasil perhitungan break even point"
                    className="space-y-6"
                  >
                    <Card className="bg-linear-to-br from-orange-600 to-red-600 p-6 text-white">
                      <h3 className="mb-4 text-lg font-semibold">{t('bep_title')}</h3>
                      <div className="space-y-4">
                        <div className="text-center">
                          <p className="text-sm text-orange-100">{t('minimum_sales_units')}</p>
                          <p className="text-4xl font-bold">
                            {Math.ceil(result.breakEvenUnits).toLocaleString('id-ID')}
                          </p>
                          <p className="mt-1 text-sm text-orange-100">{t('units')}</p>
                        </div>
                        <div className="border-t border-white/20 pt-4 text-center">
                          <p className="text-sm text-orange-100">{t('minimum_revenue')}</p>
                          <p className="text-2xl font-bold">
                            {formatCurrency(result.breakEvenRevenue)}
                          </p>
                        </div>
                        {result.monthsToBreakEven > 0 && (
                          <div className="border-t border-white/20 pt-4 text-center">
                            <p className="text-sm text-orange-100">{t('time_to_bep')}</p>
                            <p className="text-2xl font-bold">
                              {result.monthsToBreakEven.toFixed(1)}
                              {' '}
                              {t('months')}
                            </p>
                          </div>
                        )}
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900 dark:text-white">
                        <BarChart3 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        {t('contribution_margin_title')}
                      </h3>

                      <div className="space-y-4">
                        <div className="rounded-lg bg-linear-to-r from-orange-50 to-red-50 p-4 dark:from-orange-950/20 dark:to-red-950/20">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {t('contribution_margin')}
                            </span>
                            <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                              {formatCurrency(result.contributionMargin)}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            {t('contribution_margin_desc')}
                          </p>
                        </div>

                        <div className="rounded-lg bg-linear-to-r from-red-50 to-orange-50 p-4 dark:from-red-950/20 dark:to-orange-950/20">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              {t('cm_ratio')}
                            </span>
                            <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                              {result.contributionMarginRatio.toFixed(2)}
                              %
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            {t('cm_ratio_desc')}
                          </p>
                        </div>

                        <div className="space-y-2 border-t pt-4 text-sm dark:border-slate-700">
                          <div className="flex justify-between">
                            <span className="text-slate-600 dark:text-slate-400">
                              {t('selling_price_label')}
                            </span>
                            <span className="font-medium dark:text-white">
                              {formatCurrency(result.sellingPricePerUnit)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-600 dark:text-slate-400">
                              {t('variable_cost_label')}
                            </span>
                            <span className="font-medium text-red-600 dark:text-red-400">
                              -
                              {formatCurrency(result.variableCostPerUnit)}
                            </span>
                          </div>
                          <div className="flex justify-between border-t pt-2 dark:border-slate-700">
                            <span className="font-medium text-slate-900 dark:text-white">
                              {t('contribution_margin')}
                            </span>
                            <span className="font-bold text-green-600 dark:text-green-400">
                              {formatCurrency(result.contributionMargin)}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ActionButtons
                        onDownload={handleDownload}
                        onShare={handleShare}
                        disabled={!result}
                        className="mt-6"
                      />
                    </Card>

                    <Card className="bg-linear-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-950/20 dark:to-indigo-950/20">
                      <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">
                        {t('profit_projection_title')}
                      </h4>
                      <div className="space-y-2 text-sm">
                        {[1.2, 1.5, 2].map((multiplier) => {
                          const units = Math.ceil(result.breakEvenUnits * multiplier);
                          const revenue = units * result.sellingPricePerUnit;
                          const totalCost = result.fixedCosts + units * result.variableCostPerUnit;
                          const profit = revenue - totalCost;

                          return (
                            <div
                              key={multiplier}
                              className="flex items-center justify-between rounded-lg bg-white p-3 dark:bg-slate-800"
                            >
                              <span className="text-slate-700 dark:text-slate-300">
                                {units.toLocaleString('id-ID')}
                                {' '}
                                {t('unit')}
                              </span>
                              <span className="font-bold text-green-600 dark:text-green-400">
                                +
                                {formatCurrency(profit)}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </Card>
                  </div>
                )
              : (
                  <Card className="flex h-full items-center justify-center p-12 text-center">
                    <div>
                      <Target className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                      <p className="text-gray-500 dark:text-slate-500">{t('empty_state')}</p>
                    </div>
                  </Card>
                )}
          </div>
        </div>

        {result && (
          <Card className="mt-8 border-2 border-orange-200 bg-linear-to-r from-orange-50 to-red-50 p-6 dark:border-orange-800 dark:from-slate-900 dark:to-slate-800">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-orange-100 p-3 dark:bg-orange-950">
                <TrendingUp className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {t('upsell_title')}
                </h3>
                <p className="mb-4 text-slate-600 dark:text-slate-400">{t('upsell_desc')}</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    {t('upsell_cta')}
                  </Button>
                  <Button variant="outline" size="lg">
                    {t('upsell_demo')}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        <Card className="mt-8 border-l-4 border-orange-500 bg-orange-50 p-6 dark:border-orange-600 dark:bg-slate-900">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 shrink-0 text-orange-600 dark:text-orange-400" />
            <div className="text-sm text-slate-700 dark:text-slate-300">
              <p className="mb-2 font-semibold dark:text-white">{t('tips_title')}</p>
              <ul className="list-inside list-disc space-y-1">
                <li>{t('tip_1')}</li>
                <li>{t('tip_2')}</li>
                <li>{t('tip_3')}</li>
                <li>{t('tip_4')}</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
