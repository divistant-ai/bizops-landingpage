'use client';

import type { AssessmentData } from '../../types';

import {
  AlertCircle,
  AlertTriangle,
  Building2,
  Calendar,
  CheckCircle2,
  Cpu,
  Info,
  LayoutGrid,
  Server,
  TrendingUp,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { OTHER_SOFTWARE_OPTIONS } from '@/data/assessmentSoftwareOptions';
import { usePricingContext } from '../../PricingContext';
import { validateAssessment } from '../../utils/validation';

const SERVICE_INTEREST_LABELS: Record<string, string> = {
  'implementation': 'Implementation',
  'data-migration': 'Data Migration',
  'training': 'Training',
  'support': 'Support',
  'consulting': 'Consulting',
  'integration': 'Integration',
  'custom-development': 'Custom Development',
  'managed-services': 'Managed Services',
};

export function ReviewDataStep() {
  const t = useTranslations('Pricing');
  const locale = useLocale();
  const { assessment } = usePricingContext();
  const otherSoftwareLabels = (assessment.otherSoftwareUsed ?? []).map(
    id => OTHER_SOFTWARE_OPTIONS.find(o => o.id === id)?.[locale === 'id' ? 'labelId' : 'labelEn'] ?? id,
  );

  const selectedModules = Object.keys(assessment)
    .filter(k => k.startsWith('needs') && assessment[k as keyof AssessmentData] === true)
    .map(k =>
      k
        .replace('needs', '')
        .replace(/([A-Z])/g, ' $1')
        .trim(),
    );

  const warnings = validateAssessment(assessment);

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'info':
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getSeverityClass = (severity: string) => {
    switch (severity) {
      case 'error':
        return 'border-red-100 bg-red-50 dark:border-red-500/20 dark:bg-red-500/10';
      case 'warning':
        return 'border-amber-100 bg-amber-50 dark:border-amber-500/20 dark:bg-amber-500/10';
      case 'info':
      default:
        return 'border-blue-100 bg-blue-50 dark:border-blue-500/20 dark:bg-blue-500/10';
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-10">
      <div className="text-center">
        <h2 className="bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-white dark:via-slate-200 dark:to-white">
          {t('calculator_step_review')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Pastikan spesifikasi kebutuhan Anda sudah lengkap & akurat sebelum melihat rekomendasi.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Current Software & Systems */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-slate-900">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
            <div className="bg-primary-50 text-primary-600 dark:bg-primary-900/20 dark:text-primary-400 rounded-lg p-2">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              {t('calculator_step_software')}
            </h4>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between gap-4">
              <span className="shrink-0 text-slate-500 dark:text-slate-400">ERP / Utama</span>
              <span className="text-right font-semibold text-slate-900 dark:text-white">
                {assessment.currentSoftware || '—'}
              </span>
            </div>
            {otherSoftwareLabels.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-slate-500 dark:text-slate-400">Software lain</span>
                <div className="flex flex-wrap gap-1.5">
                  {otherSoftwareLabels.map(label => (
                    <span
                      key={label}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Company Profile */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-slate-900">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
            <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400">
              <Building2 className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              {t('calculator_step_profile')}
            </h4>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Industry</span>
              <span className="font-semibold text-slate-900 capitalize dark:text-white">
                {assessment.industry || 'Not Set'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Size</span>
              <span className="font-semibold text-slate-900 capitalize dark:text-white">
                {assessment.companySize}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Estimated Users</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {assessment.userCount}
                {' '}
                <span className="text-xs font-normal text-slate-500">Accounts</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Branches</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {assessment.branchCount}
                {' '}
                <span className="text-xs font-normal text-slate-500">Locations</span>
              </span>
            </div>
          </div>
        </div>

        {/* Infrastructure & Deployment */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-slate-900">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
            <div className="rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <Server className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              {t('calculator_step_tech')}
            </h4>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Deployment</span>
              <span className="font-semibold text-slate-900 capitalize dark:text-white">
                {assessment.deployment === 'onprem'
                  ? 'On-Premise'
                  : assessment.deployment === 'dedicated'
                    ? 'Private Cloud'
                    : 'Shared Cloud'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Region</span>
              <span className="font-semibold text-slate-900 capitalize dark:text-white">
                {assessment.serverLocation}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Multi-Company</span>
              <span
                className={`font-semibold ${assessment.hasMultiCompany ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'}`}
              >
                {assessment.hasMultiCompany ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>

        {/* Business Modules */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md md:col-span-2 dark:border-white/10 dark:bg-slate-900">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400">
              <LayoutGrid className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              {t('calculator_step_modules')}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {selectedModules.length > 0 ? (
              selectedModules.map(m => (
                <span
                  key={m}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 capitalize dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
                >
                  {m}
                </span>
              ))
            ) : (
              <span className="text-sm text-slate-500 italic">No modules selected</span>
            )}
          </div>
        </div>

        {/* Integration & Customization */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-slate-900">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
            <div className="rounded-lg bg-purple-50 p-2 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
              <Cpu className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              {t('calculator_step_integ')}
            </h4>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Data Migration</span>
              <span className="font-semibold text-slate-900 capitalize dark:text-white">
                {assessment.dataVolume}
                {' '}
                Volume
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">API Integrations</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {assessment.apiIntegrations}
                {' '}
                Endpoints
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Custom Module</span>
              <span
                className={`font-semibold ${assessment.needsCustomModule ? 'text-purple-600 dark:text-purple-400' : 'text-slate-900 dark:text-white'}`}
              >
                {assessment.needsCustomModule ? 'Yes' : 'No'}
              </span>
            </div>
          </div>
        </div>

        {/* Timeline & SLA */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-white/10 dark:bg-slate-900">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5">
            <div className="rounded-lg bg-amber-50 p-2 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
              <Calendar className="h-5 w-5" />
            </div>
            <h4 className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              {t('calculator_step_time')}
            </h4>
          </div>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Go-Live Target</span>
              <span className="font-semibold text-slate-900 capitalize dark:text-white">
                {assessment.goLiveTimeline === 'urgent'
                  ? '< 1 Month'
                  : assessment.goLiveTimeline === '1month'
                    ? '1-2 Months'
                    : '3+ Months'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Training</span>
              <span className="font-semibold text-slate-900 capitalize dark:text-white">
                {assessment.trainingPreference}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500 dark:text-slate-400">Support Level</span>
              <span className="font-semibold text-slate-900 capitalize dark:text-white">
                {assessment.supportLevel}
                {' '}
                SLA
              </span>
            </div>
            {(assessment.servicesInterest?.length ?? 0) > 0 && (
              <div className="flex flex-col gap-2 border-t border-slate-100 pt-2 dark:border-white/5">
                <span className="text-slate-500 dark:text-slate-400">Layanan diminati</span>
                <div className="flex flex-wrap gap-1.5">
                  {(assessment.servicesInterest ?? []).map(id => (
                    <span
                      key={id}
                      className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800 dark:border-amber-600 dark:bg-amber-500/10 dark:text-amber-300"
                    >
                      {SERVICE_INTEREST_LABELS[id] ?? id}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Smart Validation Warnings */}
      {warnings.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Validasi & Perhatian
          </h3>
          {warnings.map((warning, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 rounded-xl border p-4 shadow-sm ${getSeverityClass(warning.severity)}`}
            >
              {getSeverityIcon(warning.severity)}
              <div className="flex-1">
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  {warning.message}
                </p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {warning.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Competitor Comparison */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md dark:border-slate-700 dark:bg-slate-800/50">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          Perbandingan dengan Solusi Lain
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          Lihat estimasi penghematan Anda dengan BizOps.
        </p>

        <div className="mt-6 space-y-4">
          {/* SAP */}
          <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="text-xs font-black tracking-widest">SAP</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  SAP Business One
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Est. Rp 1.5jt - 3jt/user/bulan
                </p>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block rounded-full bg-red-100 px-2.5 py-1 text-xs font-bold text-red-700 dark:bg-red-900/30 dark:text-red-400">
                80% Lebih Mahal
              </span>
            </div>
          </div>

          {/* BizOps */}
          <div className="relative flex items-center justify-between rounded-xl border-2 border-emerald-500 bg-emerald-50/50 p-4 shadow-sm dark:border-emerald-500/50 dark:bg-emerald-900/10">
            <div className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-3 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase shadow-sm">
              Your Choice
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">BizOps Enterprise</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  All-in-one, Local Support
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
                Hemat ~80%
              </p>
              <p className="text-xs text-emerald-600/80 dark:text-emerald-500/80">Biaya Tahunan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
