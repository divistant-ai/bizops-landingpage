'use client';

import {
  AppWindow,
  Check,
  FileText,
  Plug,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Tooltip } from '../../components';
import { OptionSelector } from '../../components/OptionSelector';
import { ToggleSwitch } from '../../components/ToggleSwitch';
import { usePricingContext } from '../../PricingContext';

const DATA_VOLUME_OPTIONS = [
  { id: 'low', label: 'Master Data Only', sub: 'Customer, Vendor, Item' },
  { id: 'medium', label: 'Active Transactions', sub: 'Open PO/SO/Invoice' },
  { id: 'high', label: 'Full History', sub: 'All Historical Data' },
];

export function IntegrationStep() {
  const t = useTranslations('Pricing');
  const { assessment, updateAssessment } = usePricingContext();

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <div className="text-center">
        <h2 className="bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-white dark:via-slate-200 dark:to-white">
          {t('calculator_step_integ')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Tentukan kompleksitas ekosistem IT dan kebutuhan integrasi sistem Anda.
        </p>
      </div>

      {/* Data Migration Scope */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          Data Migration Scope
          <Tooltip text="Volume data yang akan dipindahkan dari sistem lama. Selaras dengan layanan Data Migration di Platform/Technology." />
        </h4>
        <OptionSelector
          options={DATA_VOLUME_OPTIONS}
          field="dataVolume"
          variant="filled"
        />
        <div
          className="mt-4 border-t border-slate-200 pt-4 dark:border-white/5"
          onClick={() => updateAssessment('hasLegacySystem', !assessment.hasLegacySystem)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              updateAssessment('hasLegacySystem', !assessment.hasLegacySystem);
            }
          }}
          role="button"
          tabIndex={0}
          aria-pressed={assessment.hasLegacySystem}
        >
          <div className="flex cursor-pointer items-center gap-2">
            <div
              className={`flex h-4 w-4 items-center justify-center rounded border transition-all ${
                assessment.hasLegacySystem
                  ? 'border-slate-900 bg-slate-900 dark:border-white dark:bg-white'
                  : 'border-slate-400 dark:border-slate-500'
              }`}
            >
              {assessment.hasLegacySystem && (
                <Check className="h-3 w-3 text-white dark:text-slate-900" />
              )}
            </div>
            <span className="text-xs text-slate-700 dark:text-slate-300">
              Need Legacy System Cleansing Service?
            </span>
          </div>
        </div>
      </div>

      {/* API Integrations Slider */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
        <div className="mb-4 flex justify-between">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
            <Plug className="h-4 w-4 text-slate-900 dark:text-white" />
            API Integrations
            <Tooltip text="Koneksi ke sistem lain (Marketplace, Bank, Payment Gateway, Logistics). Selaras dengan Technology Integration di Platform." />
          </label>
          <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-bold text-slate-900 dark:bg-slate-700 dark:text-white">
            {assessment.apiIntegrations}
            {' '}
            connections
          </span>
        </div>
        <input
          type="range"
          max="10"
          value={assessment.apiIntegrations}
          onChange={e => updateAssessment('apiIntegrations', Number.parseInt(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-slate-900 dark:bg-slate-700 dark:accent-white"
        />
        <p className="mt-2 text-[10px] text-slate-500">
          Geser untuk estimasi jumlah sistem pihak ketiga yang akan dihubungkan.
        </p>
      </div>

      {/* Custom Reports Slider */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
        <div className="mb-4 flex justify-between">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
            <FileText className="h-4 w-4 text-slate-900 dark:text-white" />
            Custom Reports Dev
            <Tooltip text="Pembuatan laporan format khusus yang tidak tersedia di standar (misal: Laporan Pajak format spesifik)." />
          </label>
          <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-bold text-slate-900 dark:bg-slate-700 dark:text-white">
            {assessment.customReports}
            {' '}
            reports
          </span>
        </div>
        <input
          type="range"
          max="20"
          value={assessment.customReports}
          onChange={e => updateAssessment('customReports', Number.parseInt(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-slate-900 dark:bg-slate-700 dark:accent-white"
        />
      </div>

      {/* Custom Apps — aligned with Platform capability custom-apps */}
      <ToggleSwitch
        field="needsCustomModule"
        icon={AppWindow}
        title="Custom Apps / Custom Module"
        description="Alur bisnis unik yang membutuhkan aplikasi khusus. Selaras dengan capability Custom Apps di Platform."
      />
    </div>
  );
}
