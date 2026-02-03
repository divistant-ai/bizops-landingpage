'use client';

import type { CalculationError } from '@/utils/errorHandling';
import {
  AlertTriangle,
  CheckCircle2,
  FileCheck,
  Info,
  Loader2,
  TrendingUp,
  XCircle,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import ActionButtons from '@/components/tools/shared/ActionButtons';
import ErrorDisplay from '@/components/tools/shared/ErrorDisplay';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { safeCalculate } from '@/utils/errorHandling';
import {
  downloadAsText,
  formatResultAsText,
  generateShareText,
  shareResult,
} from '@/utils/exportTools';

type CheckItem = {
  id: string;
  label: string;
  status: 'valid' | 'invalid' | 'warning' | 'unchecked';
  message?: string;
};

type ValidationResult = {
  score: number;
  totalChecks: number;
  passedChecks: number;
  failedChecks: number;
  warningChecks: number;
  items: CheckItem[];
};

export default function InvoiceChecker() {
  const t = useTranslations('CustomerTools.InvoiceChecker');

  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [vendorName, setVendorName] = useState('');
  const [vendorTax, setVendorTax] = useState('');
  const [amount, setAmount] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [errors, setErrors] = useState<CalculationError[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const validateInvoice = () => {
    setErrors([]);
    setIsCalculating(true);

    setTimeout(() => {
      const calculatedResult = safeCalculate<ValidationResult>(
        () => {
          const checks: CheckItem[] = [];

          // Check invoice number
          if (invoiceNumber.trim()) {
            checks.push({
              id: 'invoice-number',
              label: t('check_invoice_number'),
              status: invoiceNumber.length >= 5 ? 'valid' : 'warning',
              message: invoiceNumber.length >= 5 ? t('status_valid_format') : t('status_too_short'),
            });
          } else {
            checks.push({
              id: 'invoice-number',
              label: t('check_invoice_number'),
              status: 'invalid',
              message: t('status_required'),
            });
          }

          // Check dates
          if (invoiceDate && dueDate) {
            const invDate = new Date(invoiceDate);
            const due = new Date(dueDate);
            const isValid = due >= invDate;
            checks.push({
              id: 'dates',
              label: t('check_dates'),
              status: isValid ? 'valid' : 'invalid',
              message: isValid ? t('status_valid_date') : t('status_invalid_date'),
            });
          } else {
            checks.push({
              id: 'dates',
              label: t('check_dates'),
              status: 'invalid',
              message: t('status_dates_required'),
            });
          }

          // Check vendor name
          if (vendorName.trim()) {
            checks.push({
              id: 'vendor-name',
              label: t('check_vendor_name'),
              status: 'valid',
              message: t('status_filled'),
            });
          } else {
            checks.push({
              id: 'vendor-name',
              label: t('check_vendor_name'),
              status: 'invalid',
              message: t('status_required'),
            });
          }

          // Check vendor tax (NPWP format: 15 digits)
          if (vendorTax.trim()) {
            const cleanTax = vendorTax.replace(/\D/g, '');
            checks.push({
              id: 'vendor-tax',
              label: t('check_vendor_tax'),
              status: cleanTax.length === 15 ? 'valid' : 'warning',
              message: cleanTax.length === 15 ? t('status_valid_npwp') : t('status_invalid_npwp'),
            });
          } else {
            checks.push({
              id: 'vendor-tax',
              label: t('check_vendor_tax'),
              status: 'warning',
              message: t('status_npwp_recommended'),
            });
          }

          // Check amount
          const amountValue = Number.parseFloat(amount) || 0;
          if (amountValue > 0) {
            checks.push({
              id: 'amount',
              label: t('check_amount'),
              status: 'valid',
              message: `Rp ${amountValue.toLocaleString('id-ID')}`,
            });
          } else {
            checks.push({
              id: 'amount',
              label: t('check_amount'),
              status: 'invalid',
              message: t('status_amount_required'),
            });
          }

          // Check tax amount (PPN 11%)
          const taxValue = Number.parseFloat(taxAmount) || 0;
          const expectedTax = amountValue * 0.11;
          const taxDiff = Math.abs(taxValue - expectedTax);
          const taxTolerance = expectedTax * 0.01; // 1% tolerance

          if (taxValue > 0) {
            checks.push({
              id: 'tax-amount',
              label: t('check_tax'),
              status: taxDiff <= taxTolerance ? 'valid' : 'warning',
              message:
                taxDiff <= taxTolerance
                  ? t('status_vat_valid', { amount: taxValue.toLocaleString('id-ID') })
                  : t('status_vat_mismatch', { amount: expectedTax.toLocaleString('id-ID') }),
            });
          } else {
            checks.push({
              id: 'tax-amount',
              label: t('check_tax'),
              status: 'warning',
              message: t('status_vat_missing'),
            });
          }

          const passedChecks = checks.filter(c => c.status === 'valid').length;
          const failedChecks = checks.filter(c => c.status === 'invalid').length;
          const warningChecks = checks.filter(c => c.status === 'warning').length;
          const totalChecks = checks.length;
          const score = Math.round((passedChecks / totalChecks) * 100);

          return {
            score,
            totalChecks,
            passedChecks,
            failedChecks,
            warningChecks,
            items: checks,
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

  const handleDownload = () => {
    if (!result) {
      return;
    }

    const content = formatResultAsText(
      t('download_title'),
      {
        [t('download_invoice_number')]: invoiceNumber,
        [t('download_invoice_date')]: invoiceDate,
        [t('download_due_date')]: dueDate,
        [t('download_vendor')]: vendorName,
        [t('download_npwp')]: vendorTax || '-',
        [t('download_amount')]: `Rp ${Number.parseFloat(amount).toLocaleString('id-ID')}`,
        [t('download_vat')]: taxAmount
          ? `Rp ${Number.parseFloat(taxAmount).toLocaleString('id-ID')}`
          : '-',
      },
      {
        [t('download_validation_score')]: `${result.score}%`,
        [t('download_passed_checks')]: `${result.passedChecks}/${result.totalChecks}`,
        [t('download_failed_checks')]: result.failedChecks.toString(),
        [t('download_warnings')]: result.warningChecks.toString(),
      },
    );

    const timestamp = Date.now();
    downloadAsText(content, `invoice-validation-${timestamp}.txt`);
  };

  const handleShare = async () => {
    if (!result) {
      return;
    }

    const shareText = generateShareText(
      t('title'),
      `${t('share_validation_score')}: ${result.score}% (${result.passedChecks}/${result.totalChecks} ${t('checks_passed')})`,
    );

    await shareResult(t('share_title'), shareText);
  };

  const getStatusIcon = (status: CheckItem['status']) => {
    switch (status) {
      case 'valid':
        return <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />;
      case 'invalid':
        return <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />;
      default:
        return (
          <div className="h-5 w-5 rounded-full border-2 border-gray-300 dark:border-slate-700" />
        );
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) {
      return 'from-green-600 to-emerald-600';
    }
    if (score >= 60) {
      return 'from-yellow-600 to-orange-600';
    }
    return 'from-red-600 to-pink-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50 py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700">
            <FileCheck className="h-4 w-4" />
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
                {t('data_title')}
              </h2>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="invoice-number"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t('invoice_number')}
                  </label>
                  <input
                    id="invoice-number"
                    type="text"
                    value={invoiceNumber}
                    onChange={e => setInvoiceNumber(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder={t('invoice_number_placeholder')}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="invoice-date"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t('invoice_date')}
                    </label>
                    <input
                      id="invoice-date"
                      type="date"
                      value={invoiceDate}
                      onChange={e => setInvoiceDate(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="due-date"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      {t('due_date')}
                    </label>
                    <input
                      id="due-date"
                      type="date"
                      value={dueDate}
                      onChange={e => setDueDate(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="vendor-name"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t('vendor_name')}
                  </label>
                  <input
                    id="vendor-name"
                    type="text"
                    value={vendorName}
                    onChange={e => setVendorName(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder={t('vendor_name_placeholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="vendor-tax"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t('vendor_tax')}
                  </label>
                  <input
                    id="vendor-tax"
                    type="text"
                    value={vendorTax}
                    onChange={e => setVendorTax(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                    placeholder={t('vendor_tax_placeholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="amount"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t('invoice_amount')}
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3 text-gray-500 dark:text-slate-500">
                      Rp
                    </span>
                    <input
                      id="amount"
                      type="text"
                      value={amount}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setAmount(value);
                      }}
                      className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      placeholder="10000000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="tax-amount"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    {t('tax_amount')}
                  </label>
                  <div className="relative">
                    <span className="absolute top-3 left-3 text-gray-500 dark:text-slate-500">
                      Rp
                    </span>
                    <input
                      id="tax-amount"
                      type="text"
                      value={taxAmount}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        setTaxAmount(value);
                      }}
                      className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-12 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 focus:outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                      placeholder="1100000"
                    />
                  </div>
                  {amount && (
                    <p className="mt-1 text-xs text-gray-500 dark:text-slate-500">
                      {t('expected_vat')}
                      : Rp
                      {' '}
                      {((Number.parseFloat(amount) || 0) * 0.11).toLocaleString('id-ID')}
                    </p>
                  )}
                </div>

                <Button
                  onClick={validateInvoice}
                  className="w-full bg-cyan-600 hover:bg-cyan-700"
                  size="lg"
                  disabled={isCalculating}
                  aria-label="Validasi invoice"
                >
                  {isCalculating
                    ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {t('validating')}
                        </>
                      )
                    : (
                        <>
                          <FileCheck className="mr-2 h-5 w-5" />
                          {t('validate_button')}
                        </>
                      )}
                </Button>
              </div>
            </Card>

            <Card className="border-l-4 border-cyan-500 bg-cyan-50 p-4 dark:border-cyan-600 dark:bg-slate-900">
              <div className="flex gap-2">
                <Info className="h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
                <div className="text-xs text-slate-700 dark:text-slate-300">
                  <p className="mb-1 font-semibold dark:text-white">{t('info_title')}</p>
                  <ul className="list-inside list-disc space-y-0.5">
                    <li>{t('info_required_data')}</li>
                    <li>{t('info_npwp_format')}</li>
                    <li>{t('info_date_validity')}</li>
                    <li>{t('info_vat_calculation')}</li>
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
                    aria-label="Hasil validasi invoice"
                    className="space-y-6"
                  >
                    <Card className={`bg-gradient-to-br ${getScoreColor(result.score)} p-6 text-white`}>
                      <h3 className="mb-4 text-lg font-semibold">{t('validation_score')}</h3>
                      <div className="mb-4 text-center">
                        <p className="text-6xl font-bold">
                          {result.score}
                          %
                        </p>
                        <p className="mt-2 text-sm opacity-90">
                          {result.passedChecks}
                          {' '}
                          dari
                          {result.totalChecks}
                          {' '}
                          {t('checks_passed')}
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-3 border-t border-white/20 pt-4 text-center text-sm">
                        <div>
                          <p className="opacity-80">{t('passed')}</p>
                          <p className="text-lg font-bold">{result.passedChecks}</p>
                        </div>
                        <div>
                          <p className="opacity-80">{t('failed')}</p>
                          <p className="text-lg font-bold">{result.failedChecks}</p>
                        </div>
                        <div>
                          <p className="opacity-80">{t('warnings')}</p>
                          <p className="text-lg font-bold">{result.warningChecks}</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                        {t('detail_validation')}
                      </h3>

                      <div className="space-y-3">
                        {result.items.map(item => (
                          <div
                            key={item.id}
                            className={`flex items-start gap-3 rounded-lg border p-3 ${
                              item.status === 'valid'
                                ? 'border-green-200 bg-green-50 dark:border-green-900 dark:bg-green-950/20'
                                : item.status === 'invalid'
                                  ? 'border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/20'
                                  : 'border-yellow-200 bg-yellow-50 dark:border-yellow-900 dark:bg-yellow-950/20'
                            }`}
                          >
                            {getStatusIcon(item.status)}
                            <div className="flex-1">
                              <p className="text-sm font-medium text-slate-900 dark:text-white">
                                {item.label}
                              </p>
                              <p className="text-xs text-slate-600 dark:text-slate-400">
                                {item.message}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <ActionButtons
                        onDownload={handleDownload}
                        onShare={handleShare}
                        disabled={!result}
                        className="mt-6"
                      />
                    </Card>

                    {result.failedChecks > 0 && (
                      <Card className="border-l-4 border-red-500 bg-red-50 p-4 dark:border-red-600 dark:bg-red-950/20">
                        <div className="flex gap-2">
                          <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400" />
                          <div className="text-sm text-slate-700 dark:text-slate-300">
                            <p className="font-semibold dark:text-white">{t('action_required')}</p>
                            <p>{t('fix_failed_items', { count: result.failedChecks })}</p>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>
                )
              : (
                  <Card className="flex h-full items-center justify-center p-12 text-center">
                    <div>
                      <FileCheck className="mx-auto mb-4 h-16 w-16 text-gray-300" />
                      <p className="text-gray-500 dark:text-slate-500">{t('empty_state')}</p>
                    </div>
                  </Card>
                )}
          </div>
        </div>

        {result && (
          <Card className="mt-8 border-2 border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-6 dark:border-cyan-800 dark:from-slate-900 dark:to-slate-800">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-cyan-100 p-3 dark:bg-cyan-950">
                <TrendingUp className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  {t('upsell_title')}
                </h3>
                <p className="mb-4 text-slate-600 dark:text-slate-400">{t('upsell_desc')}</p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
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

        <Card className="mt-8 border-l-4 border-cyan-500 bg-cyan-50 p-6 dark:border-cyan-600 dark:bg-slate-900">
          <div className="flex gap-3">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-cyan-600 dark:text-cyan-400" />
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
