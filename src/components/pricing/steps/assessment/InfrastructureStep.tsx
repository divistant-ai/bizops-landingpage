'use client';

import {
  Cloud,
  Globe2,
  HardDrive,
  Server,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import { SelectableCard, Tooltip } from '../../components';
import { OptionSelector } from '../../components/OptionSelector';
import { ToggleSwitch } from '../../components/ToggleSwitch';
import { usePricingContext } from '../../PricingContext';

const DEPLOYMENT_OPTIONS = [
  { id: 'cloud', title: 'Shared Cloud', desc: 'Hemat Biaya, Fully Managed.', icon: Cloud },
  { id: 'dedicated', title: 'Private VPS', desc: 'High Performance & Security.', icon: Server },
  { id: 'onprem', title: 'On-Premise', desc: 'Self Hosted di kantor Anda.', icon: HardDrive },
];

const SERVER_REGIONS = [
  { id: 'jakarta', label: 'Jakarta (ID)', sub: 'Sesuai Regulasi UU PDP' },
  { id: 'singapore', label: 'Singapore (SG)', sub: 'Tier 3 Data Center' },
  { id: 'usa', label: 'Global (US)', sub: 'Hemat Biaya' },
];

export function InfrastructureStep() {
  const t = useTranslations('Pricing');
  const { assessment, updateAssessment } = usePricingContext();

  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <div className="text-center">
        <h2 className="bg-linear-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl dark:from-white dark:via-slate-200 dark:to-white">
          {t('calculator_step_tech')}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Pilih opsi hosting yang sesuai dengan kebijakan IT dan kebutuhan performa Anda.
        </p>
      </div>

      {/* Deployment Options */}
      <div className="grid grid-cols-3 gap-3">
        {DEPLOYMENT_OPTIONS.map(opt => (
          <SelectableCard
            key={opt.id}
            selected={assessment.deployment === opt.id}
            onClick={() => updateAssessment('deployment', opt.id)}
            {...opt}
          />
        ))}
      </div>

      {/* Server Region */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/5 dark:bg-white/5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          Server Region
          <Tooltip text="Lokasi penyimpanan data fisik." />
        </h4>
        <OptionSelector
          options={SERVER_REGIONS}
          field="serverLocation"
        />
      </div>

      {/* Multi-Company Management — aligned with Platform capability multi-company-management */}
      <ToggleSwitch
        field="hasMultiCompany"
        icon={Globe2}
        title="Multi-Company Management"
        description="Untuk holding dengan banyak anak perusahaan (PT/CV) dalam satu sistem—konsolidasi laporan real-time. Selaras dengan capability Platform."
      />
    </div>
  );
}
