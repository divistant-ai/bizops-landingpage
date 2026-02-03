'use client';

import type { CalculationError } from '@/utils/errorHandling';
import { AlertCircle, Calculator, DollarSign, Info, Loader2, TrendingUp } from 'lucide-react';
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

type CalculationMode = 'margin' | 'markup' | 'selling-price';

type Result = {
  cost: number;
  sellingPrice: number;
  profit: number;
  margin: number;
  markup: number;
};

export default function MarginMarkupCalculator() {
  const t = useTranslations('CustomerTools.MarginMarkup');

  const [mode, setMode] = useState<CalculationMode>('margin');
  const [cost, setCost] = useState<string>('100000');
  const [percentage, setPercentage] = useState<string>('30');
  const [sellingPrice, setSellingPrice] = useState<string>('150000');
  const [result, setResult] = useState<Result | null>(null);
  const [errors, setErrors] = useState<CalculationError[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculate = () => {
    setErrors([]);
    setIsCalculating(true);

    let validationErrors: (CalculationError | null)[] = [];

    if (mode === 'selling-price') {
      validationErrors = validateFields([
        () => validateNumber(cost, { min: 0, fieldName: t('cost_price') }),
        () => validateNumber(sellingPrice, { min: 0, fieldName: t('selling_price') }),
      ]);
    } else {
      validationErrors = validateFields([
        () => validateNumber(cost, { min: 0, fieldName: t('cost_price') }),
        () =>
          validateNumber(percentage, {
            min: 0,
            max: 1000,
            fieldName: mode === 'margin' ? t('margin_label') : t('markup_label'),
          }),
      ]);
    }

    const filteredErrors = validationErrors.filter((e): e is CalculationError => e !== null);
    if (filteredErrors.length > 0) {
      setErrors(filteredErrors);
      setIsCalculating(false);
      return;
    }

    setTimeout(() => {
      const calculatedResult = safeCalculate<Result>(
        () => {
          const costValue = Number.parseFloat(cost) || 0;
          const percentageValue = Number.parseFloat(percentage) || 0;
          const sellingPriceValue = Number.parseFloat(sellingPrice) || 0;

          let calculatedResult: Result;

          if (mode === 'margin') {
            const calculatedSellingPrice = safeDivide(
              costValue,
              1 - percentageValue / 100,
              costValue,
            );
            const profit = calculatedSellingPrice - costValue;
            const markup = safeDivide(profit * 100, costValue, 0);

            calculatedResult = {
              cost: costValue,
              sellingPrice: calculatedSellingPrice,
              profit,
              margin: percentageValue,
              markup,
            };
          } else if (mode === 'markup') {
            const profit = costValue * (percentageValue / 100);
            const calculatedSellingPrice = costValue + profit;
            const margin = safeDivide(profit * 100, calculatedSellingPrice, 0);

            calculatedResult = {
              cost: costValue,
              sellingPrice: calculatedSellingPrice,
              profit,
              margin,
              markup: percentageValue,
            };
          } else {
            const profit = sellingPriceValue - costValue;
            const margin = safeDivide(profit * 100, sellingPriceValue, 0);
            const markup = safeDivide(profit * 100, costValue, 0);

            calculatedResult = {
              cost: costValue,
              sellingPrice: sellingPriceValue,
              profit,
              margin,
              markup,
            };
          }

          return calculatedResult;
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

    const modeText
      = mode === 'margin'
        ? t('download_mode_margin')
        : mode === 'markup'
          ? t('download_mode_markup')
          : t('download_mode_selling');

    const content = formatResultAsText(
      t('download_title'),
      {
        [t('download_mode')]: modeText,
        [t('download_cost')]: formatCurrency(result.cost),
        ...(mode !== 'selling-price' ? { [t('download_percentage')]: `${percentage}%` } : {}),
        ...(mode === 'selling-price'
          ? { [t('download_selling_price')]: formatCurrency(result.sellingPrice) }
          : {}),
      },
      {
        [t('download_selling_price')]: formatCurrency(result.sellingPrice),
        [t('download_profit')]: formatCurrency(result.profit),
        [t('download_margin')]: `${result.margin.toFixed(2)}%`,
        [t('download_markup')]: `${result.markup.toFixed(2)}%`,
      },
    );

    const timestamp = Date.now();
    downloadAsText(content, `margin-markup-${timestamp}.txt`);
  };

  const handleShare = async () => {
    if (!result) {
      return;
    }

    const shareText = generateShareText(
      t('title'),
      `${t('share_selling_price')}: ${formatCurrency(result.sellingPrice)} | ${t('share_margin')}: ${result.margin.toFixed(1)}% | ${t('share_markup')}: ${result.markup.toFixed(1)}%`,
    );

    await shareResult(t('share_title'), shareText);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-white to-pink-50 py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-700">
            <Calculator className="h-4 w-4" />
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
              <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
                {t('calculation_mode_title')}
              </h2>

              <div className="mb-6 grid grid-cols-3 gap-2">
                <button
                  onClick={() => setMode('margin')}
                  className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                    mode === 'margin'
                      ? 'border-purple-600 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400 dark:text-white'
                  }`}
                  aria-pressed={mode === 'margin'}
                >
                  {t('mode_from_margin')}
                </button>
                <button
                  onClick={() => setMode('markup')}
                  className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                    mode === 'markup'
                      ? 'border-purple-600 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400 dark:text-white'
                  }`}
                  aria-pressed={mode === 'markup'}
                >
                  {t('mode_from_markup')}
                </button>
                <button
                  onClick={() => setMode('selling-price')}
                  className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
                    mode === 'selling-price'
                      ? 'border-purple-600 bg-purple-50 text-purple-700'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400 dark:text-white'
                  }`}
                  aria-pressed={mode === 'selling-price'}
                >
                  {t('mode_from_selling_price')}
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="cost"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                  >
                    {t('cost_price')}
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3 text-gray-500 dark:text-slate-500">
                      Rp
                    </span>
                    <input
                      id="cost"
                      type="text"
                      value={cost}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setCost(value);
                      }}
                      className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-12 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      placeholder="100000"
                      aria-describedby="cost-help"
                    />
                  </div>
                  <p id="cost-help" className="mt-1 text-xs text-gray-500 dark:text-slate-500">
                    {cost && formatCurrency(Number.parseFloat(cost) || 0)}
                  </p>
                </div>

                {mode !== 'selling-price'
                  ? (
                      <div>
                        <label
                          htmlFor="percentage"
                          className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                        >
                          {mode === 'margin' ? t('target_margin') : t('target_markup')}
                        </label>
                        <div className="relative">
                          <input
                            id="percentage"
                            type="text"
                            value={percentage}
                            onChange={(e) => {
                              const value = e.target.value.replace(/[^\d.]/g, '');
                              setPercentage(value);
                            }}
                            className="w-full rounded-lg border border-gray-300 py-2 pr-10 pl-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                            placeholder="30"
                          />
                          <span className="absolute top-3 right-3 text-gray-500 dark:text-slate-500">
                            %
                          </span>
                        </div>
                      </div>
                    )
                  : (
                      <div>
                        <label
                          htmlFor="selling-price"
                          className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
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
                            className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-12 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                            placeholder="150000"
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
                    )}

                <Button
                  onClick={calculate}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  size="lg"
                  disabled={isCalculating}
                  aria-label="Hitung margin dan markup"
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
                          <Calculator className="mr-2 h-5 w-5" />
                          {t('calculate_button')}
                        </>
                      )}
                </Button>
              </div>
            </Card>

            <Card className="border-l-4 border-purple-500 bg-purple-50 p-4 dark:border-purple-600 dark:bg-slate-900">
              <div className="flex gap-2">
                <Info className="h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />
                <div className="text-xs text-gray-700 dark:text-slate-300">
                  <p className="mb-2 font-semibold dark:text-white">{t('info_title')}</p>
                  <ul className="space-y-1">
                    <li>
                      <strong>
                        {t('info_margin')}
                        :
                      </strong>
                      {' '}
                      {t('info_margin_desc')}
                    </li>
                    <li>
                      <strong>
                        {t('info_markup')}
                        :
                      </strong>
                      {' '}
                      {t('info_markup_desc')}
                    </li>
                  </ul>
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
                    aria-label="Hasil perhitungan margin markup"
                    className="space-y-6"
                  >
                    <Card className="bg-linear-to-br from-purple-600 to-pink-600 p-6 text-white">
                      <h3 className="mb-4 text-lg font-semibold">{t('result_title')}</h3>
                      <div className="mb-4 text-center">
                        <p className="text-sm text-purple-100">{t('optimal_selling_price')}</p>
                        <p className="text-4xl font-bold">{formatCurrency(result.sellingPrice)}</p>
                      </div>
                      <div className="space-y-2 border-t border-white/20 pt-4">
                        <div className="flex justify-between">
                          <span className="text-purple-100">{t('cost_price_label')}</span>
                          <span className="font-medium">{formatCurrency(result.cost)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-100">{t('profit_label')}</span>
                          <span className="font-bold text-yellow-300">
                            {formatCurrency(result.profit)}
                          </span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white">
                        <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        {t('profit_analysis_title')}
                      </h3>

                      <div className="space-y-4">
                        <div className="rounded-lg bg-linear-to-r from-purple-50 to-pink-50 p-4 dark:from-purple-950/20 dark:to-pink-950/20">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                              {t('margin_label')}
                            </span>
                            <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                              {result.margin.toFixed(2)}
                              %
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-slate-400">
                            {t('margin_desc', { amount: result.margin.toFixed(0) })}
                          </p>
                        </div>

                        <div className="rounded-lg bg-linear-to-r from-pink-50 to-purple-50 p-4 dark:from-pink-950/20 dark:to-purple-950/20">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                              {t('markup_label')}
                            </span>
                            <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                              {result.markup.toFixed(2)}
                              %
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 dark:text-slate-400">
                            {t('markup_desc', { amount: result.markup.toFixed(0) })}
                          </p>
                        </div>

                        <div className="rounded-lg border-2 border-dashed border-gray-300 p-4 dark:border-slate-700 dark:bg-slate-800">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                              {t('profit_per_unit')}
                            </span>
                            <span className="text-xl font-bold text-green-600 dark:text-green-400">
                              {formatCurrency(result.profit)}
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
                      <h4 className="mb-3 flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                        <DollarSign className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        {t('sales_projection_title')}
                      </h4>
                      <div className="grid grid-cols-3 gap-3 text-center text-sm">
                        <div>
                          <p className="text-gray-600 dark:text-slate-400">
                            10
                            {t('units')}
                          </p>
                          <p className="font-bold text-gray-900 dark:text-white">
                            {formatCurrency(result.profit * 10)}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-slate-400">
                            100
                            {t('units')}
                          </p>
                          <p className="font-bold text-gray-900 dark:text-white">
                            {formatCurrency(result.profit * 100)}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-slate-400">
                            1000
                            {t('units')}
                          </p>
                          <p className="font-bold text-gray-900 dark:text-white">
                            {formatCurrency(result.profit * 1000)}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              : (
                  <Card className="flex h-full items-center justify-center p-12 text-center">
                    <div>
                      <Calculator className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                      <p className="text-gray-500 dark:text-slate-500">{t('empty_state')}</p>
                    </div>
                  </Card>
                )}
          </div>
        </div>

        {result && (
          <Card className="mt-8 border-2 border-purple-200 bg-linear-to-r from-purple-50 to-pink-50 p-6 dark:border-purple-800 dark:from-slate-900 dark:to-slate-800">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-950">
                <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {t('upsell_title')}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-slate-400">{t('upsell_desc')}</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
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

        <Card className="mt-8 border-l-4 border-purple-500 bg-purple-50 p-6 dark:border-purple-600 dark:bg-slate-900">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />
            <div className="text-sm text-gray-700 dark:text-slate-300">
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
