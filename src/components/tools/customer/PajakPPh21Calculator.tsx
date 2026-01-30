'use client';

import type { CalculationError } from '@/utils/errorHandling';
import { AlertCircle, Calculator, Download, Loader2, Share2, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {
  formatErrorMessage,
  safeCalculate,
  validateFields,
  validateNumber,
} from '@/utils/errorHandling';
import {
  downloadAsText,
  formatResultAsText,
  generateShareText,
  shareResult,
} from '@/utils/exportTools';

type TaxResult = {
  grossSalary: number;
  ptkp: number;
  taxableIncome: number;
  annualTax: number;
  monthlyTax: number;
  netSalary: number;
  effectiveRate: number;
  breakdown: {
    bracket: number;
    rate: number;
    amount: number;
  }[];
};

const PTKP_RATES = {
  TK0: 54000000,
  TK1: 58500000,
  TK2: 63000000,
  TK3: 67500000,
  K0: 58500000,
  K1: 63000000,
  K2: 67500000,
  K3: 72000000,
};

const TAX_BRACKETS = [
  { limit: 60000000, rate: 0.05 },
  { limit: 250000000, rate: 0.15 },
  { limit: 500000000, rate: 0.25 },
  { limit: 5000000000, rate: 0.3 },
  { limit: Infinity, rate: 0.35 },
];

export default function PajakPPh21Calculator() {
  const t = useTranslations('CustomerTools.Tax');

  const [grossSalary, setGrossSalary] = useState<string>('10000000');
  const [maritalStatus, setMaritalStatus] = useState<string>('TK0');
  const [dependents, setDependents] = useState<number>(0);
  const [result, setResult] = useState<TaxResult | null>(null);
  const [showUpsell, setShowUpsell] = useState(false);
  const [errors, setErrors] = useState<CalculationError[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateTax = () => {
    setErrors([]);
    setIsCalculating(true);

    // Validate inputs
    const validationErrors = validateFields([
      () => validateNumber(grossSalary, { min: 0, max: 1000000000, fieldName: t('gross_salary') }),
    ]);

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      setIsCalculating(false);
      return;
    }

    // Safe calculation with error handling
    const calculatedResult = safeCalculate<TaxResult>(
      () => {
        const monthly = Number.parseFloat(grossSalary) || 0;
        const annual = monthly * 12;

        const ptkpKey = `${maritalStatus.charAt(0)}${dependents}` as keyof typeof PTKP_RATES;
        const ptkp = PTKP_RATES[ptkpKey] || PTKP_RATES.TK0;

        const taxableIncome = Math.max(0, annual - ptkp);

        let remainingIncome = taxableIncome;
        let totalTax = 0;
        const breakdown: TaxResult['breakdown'] = [];

        for (let i = 0; i < TAX_BRACKETS.length; i++) {
          const bracket = TAX_BRACKETS[i];
          if (!bracket) {
            continue;
          }
          const prevLimit = i === 0 ? 0 : TAX_BRACKETS[i - 1]?.limit || 0;
          const bracketSize = bracket.limit - prevLimit;
          const taxableInBracket = Math.min(remainingIncome, bracketSize);

          if (taxableInBracket > 0) {
            const taxAmount = taxableInBracket * bracket.rate;
            totalTax += taxAmount;
            breakdown.push({
              bracket: i + 1,
              rate: bracket.rate,
              amount: taxAmount,
            });
            remainingIncome -= taxableInBracket;
          }

          if (remainingIncome <= 0) {
            break;
          }
        }

        const monthlyTax = totalTax / 12;
        const netSalary = monthly - monthlyTax;
        const effectiveRate = annual > 0 ? (totalTax / annual) * 100 : 0;

        return {
          grossSalary: monthly,
          ptkp,
          taxableIncome,
          annualTax: totalTax,
          monthlyTax,
          netSalary,
          effectiveRate,
          breakdown,
        };
      },
      (error) => {
        setErrors([error]);
      },
    );

    if (calculatedResult) {
      setResult(calculatedResult);
      setShowUpsell(true);
    }

    setIsCalculating(false);
  };

  const handleDownload = () => {
    if (!result) {
      return;
    }

    const content = formatResultAsText(
      t('title'),
      {
        [t('gross_salary')]: formatCurrency(result.grossSalary),
        [t('marital_status')]: maritalStatus,
        [t('dependents')]: dependents.toString(),
      },
      {
        [t('ptkp_label')]: formatCurrency(result.ptkp),
        [t('taxable_income_label')]: formatCurrency(result.taxableIncome),
        [t('tax_month_label')]: formatCurrency(result.monthlyTax),
        [t('tax_year_label')]: formatCurrency(result.annualTax),
        [t('net_salary_month_label')]: formatCurrency(result.netSalary),
        [t('effective_tax_rate_label')]: `${result.effectiveRate.toFixed(2)}%`,
      },
    );

    downloadAsText(content, `pajak-pph21-${Date.now()}.txt`);
  };

  const handleShare = async () => {
    if (!result) {
      return;
    }

    const shareText = generateShareText(
      t('title'),
      `${t('share_net_salary')}: ${formatCurrency(result.netSalary)} (${t('share_tax')}: ${formatCurrency(result.monthlyTax)})`,
    );

    const success = await shareResult(t('share_title'), shareText);

    if (success) {
      // Success handled by shareResult
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <Calculator className="h-4 w-4" />
            Customer Tool
          </div>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">{t('title')}</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {t('subtitle')}
          </p>
        </div>

        {/* Error Display */}
        {errors.length > 0 && (
          <div className="mx-auto mb-6 max-w-4xl">
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-600" />
                <div>
                  <p className="font-semibold text-red-900">{t('error')}:</p>
                  <ul className="mt-1 list-inside list-disc text-sm text-red-700">
                    {errors.map((error, idx) => (
                      <li key={idx}>{formatErrorMessage(error)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Input Section */}
          <Card className="p-6">
            <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
              {t('input_section_title')}
            </h2>

            <div className="space-y-6">
              {/* Gross Salary */}
              <div>
                <label
                  htmlFor="gross-salary"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                >
                  {t('gross_salary')}
                </label>
                <div className="relative">
                  <span className="absolute top-3 left-3 text-gray-500 dark:text-slate-500">
                    Rp
                  </span>
                  <input
                    id="gross-salary"
                    type="text"
                    value={grossSalary}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      setGrossSalary(value);
                    }}
                    className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-12 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder="10000000"
                    aria-describedby="gross-salary-help"
                  />
                </div>
                <p
                  id="gross-salary-help"
                  className="mt-1 text-xs text-gray-500 dark:text-slate-500"
                >
                  {grossSalary && formatCurrency(Number.parseFloat(grossSalary) || 0)}
                </p>
              </div>

              {/* Marital Status */}
              <div>
                <label
                  htmlFor="marital-status"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                >
                  {t('marital_status')}
                </label>
                <select
                  id="marital-status"
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  aria-label="Pilih status pernikahan"
                >
                  <option value="TK">{t('unmarried')}</option>
                  <option value="K">{t('married')}</option>
                </select>
              </div>

              {/* Dependents */}
              <div>
                <label
                  htmlFor="dependents"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-slate-300"
                >
                  {t('dependents')}
                </label>
                <select
                  id="dependents"
                  value={dependents}
                  onChange={(e) => setDependents(Number.parseInt(e.target.value))}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  aria-label="Pilih jumlah tanggungan"
                >
                  <option value="0">0 {t('dependents')}</option>
                  <option value="1">1 {t('dependents')}</option>
                  <option value="2">2 {t('dependents')}</option>
                  <option value="3">3 {t('dependents')}</option>
                </select>
              </div>

              <Button
                onClick={calculateTax}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
                disabled={isCalculating}
                aria-label="Hitung pajak PPh 21"
              >
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t('calculating')}
                  </>
                ) : (
                  <>
                    <Calculator className="w-5text-white mr-2 h-5" />
                    <span className="text-white">{t('calculate_tax')}</span>
                  </>
                )}
              </Button>
            </div>
          </Card>

          {/* Result Section */}
          <div className="space-y-6">
            {result ? (
              <div
                role="region"
                aria-live="polite"
                aria-label="Hasil perhitungan pajak"
                className="space-y-6"
              >
                <Card className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                  <h3 className="mb-4 text-lg font-semibold">{t('result_title')}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/20 pb-2">
                      <span className="text-blue-100">{t('gross_salary_month')}</span>
                      <span className="font-bold">{formatCurrency(result.grossSalary)}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/20 pb-2">
                      <span className="text-blue-100">{t('tax_month')}</span>
                      <span className="font-bold text-yellow-300">
                        {formatCurrency(result.monthlyTax)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-semibold">{t('net_salary_month')}</span>
                      <span className="text-2xl font-bold">{formatCurrency(result.netSalary)}</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                    {t('detail_calculation')}
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-slate-400">
                        {t('ptkp')} ({maritalStatus}
                        {dependents})
                      </span>
                      <span className="font-medium">{formatCurrency(result.ptkp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-slate-400">
                        {t('taxable_income')}
                      </span>
                      <span className="font-medium">{formatCurrency(result.taxableIncome)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-slate-400">{t('annual_tax')}</span>
                      <span className="font-medium">{formatCurrency(result.annualTax)}</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 dark:border-slate-700">
                      <span className="text-gray-600 dark:text-slate-400">
                        {t('effective_tax_rate')}
                      </span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">
                        {result.effectiveRate.toFixed(2)}%
                      </span>
                    </div>
                  </div>

                  {result.breakdown.length > 0 && (
                    <div className="mt-6">
                      <h4 className="mb-3 text-sm font-semibold text-gray-700 dark:text-slate-300">
                        {t('breakdown_per_bracket')}
                      </h4>
                      <div className="space-y-2">
                        {result.breakdown.map((item) => (
                          <div
                            key={item.bracket}
                            className="flex items-center justify-between rounded bg-gray-50 px-3 py-2 text-xs dark:bg-slate-800"
                          >
                            <span className="text-gray-600 dark:text-slate-400">
                              {t('bracket')} {item.bracket} ({(item.rate * 100).toFixed(0)}
                              %)
                            </span>
                            <span className="font-medium dark:text-white">
                              {formatCurrency(item.amount)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={handleDownload}
                      aria-label="Download hasil perhitungan"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {t('download')}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={handleShare}
                      aria-label="Bagikan hasil perhitungan"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      {t('share')}
                    </Button>
                  </div>
                </Card>
              </div>
            ) : (
              <Card className="flex h-full items-center justify-center p-12 text-center">
                <div>
                  <Calculator className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                  <p className="text-gray-500 dark:text-slate-500">{t('empty_state')}</p>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Upsell Section */}
        {showUpsell && (
          <Card className="mt-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-6 dark:border-blue-800 dark:from-slate-900 dark:to-slate-800">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-950">
                <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {t('upsell_title')}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-slate-400">{t('upsell_desc')}</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
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

        {/* Info Section */}
        <Card className="mt-8 border-l-4 border-blue-500 bg-blue-50 p-6 dark:border-blue-600 dark:bg-slate-900">
          <div className="flex gap-3">
            <AlertCircle className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
            <div className="text-sm text-gray-700 dark:text-slate-300">
              <p className="mb-2 font-semibold dark:text-white">{t('info_title')}</p>
              <ul className="list-inside list-disc space-y-1">
                <li>{t('info_1')}</li>
                <li>{t('info_2')}</li>
                <li>{t('info_3')}</li>
                <li>{t('info_4')}</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
