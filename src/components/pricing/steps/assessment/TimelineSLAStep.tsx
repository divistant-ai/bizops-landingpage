'use client';

import {
  Clock,
  CreditCard,
  Zap,
} from 'lucide-react';

import { SelectableCard, Tooltip } from '../../components';
import { OptionSelector } from '../../components/OptionSelector';
import { usePricingContext } from '../../PricingContext';

const TIMELINE_OPTIONS = [
  { id: 'urgent', title: 'Urgent', desc: '< 1 Month', icon: Zap, tooltip: 'Membutuhkan tim Fast-Track Deployment.' },
  { id: '1month', title: 'Standard', desc: '1-2 Months', icon: Clock, tooltip: 'Timeline implementasi standar.' },
  { id: '3months', title: 'Planned', desc: '3+ Months', icon: CreditCard, tooltip: 'Implementasi bertahap (Phased).' },
];

const TRAINING_OPTIONS = [
  { id: 'online', label: 'Online (Zoom)', sub: 'Flexible & Recorded' },
  { id: 'hybrid', label: 'Hybrid Mix', sub: 'Online + 1 Day Onsite' },
  { id: 'onsite', label: 'Full Onsite', sub: 'Intensive Face-to-Face' },
];

const SUPPORT_DESCRIPTIONS: Record<string, { title: string; desc: string }> = {
  standard: { title: 'Email Support Only', desc: '. Response time max 2x24 jam kerja. Cocok untuk tim IT mandiri.' },
  priority: { title: 'Chat & Email Support', desc: '. Response time max 12 jam kerja. Bantuan kendala teknis operasional.' },
  premium: { title: 'Dedicated Account Manager & 24/7 Hotline', desc: '. Response time < 2 jam. Prioritas penanganan isu kritis.' },
};

export function TimelineSLAStep() {
  const { assessment, updateAssessment } = usePricingContext();
  const supportInfo = (SUPPORT_DESCRIPTIONS[assessment.supportLevel] ?? SUPPORT_DESCRIPTIONS.standard)!;

  return (
    <div className="space-y-8">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
          Timeline & SLA
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Rencana Go-Live dan Tingkat Dukungan yang diharapkan.
        </p>
      </div>

      {/* Go-Live Timeline */}
      <div className="grid grid-cols-3 gap-4">
        {TIMELINE_OPTIONS.map(t => (
          <SelectableCard
            key={t.id}
            selected={assessment.goLiveTimeline === t.id}
            onClick={() => updateAssessment('goLiveTimeline', t.id)}
            {...t}
          />
        ))}
      </div>

      {/* Training Preference */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
        <h4 className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
          Training Preference
          <Tooltip text="Metode pelatihan user yang diinginkan." />
        </h4>
        <OptionSelector
          options={TRAINING_OPTIONS}
          field="trainingPreference"
          variant="filled"
        />
      </div>

      {/* Support SLA Level */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/5">
        <h4 className="mb-4 text-center text-sm font-bold text-slate-900 dark:text-white">
          Support SLA Level
        </h4>
        <div className="grid grid-cols-3 gap-2">
          {['standard', 'priority', 'premium'].map(lvl => (
            <button
              key={lvl}
              onClick={() => updateAssessment('supportLevel', lvl)}
              className={`rounded-xl border py-3 text-xs font-bold tracking-wider uppercase transition-all active:scale-95 ${
                assessment.supportLevel === lvl
                  ? 'border-2 border-slate-900 bg-slate-900 text-white shadow-[0_0_0_3px_rgba(15,23,42,0.1)] dark:border-white dark:bg-white dark:text-slate-900 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]'
                  : 'border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:border-slate-500 dark:hover:text-white'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-100 p-4 text-center dark:border-white/5 dark:bg-black/20">
          <div className="text-xs text-slate-600 dark:text-slate-400">
            <span className="font-bold text-slate-900 dark:text-white">
              {supportInfo.title}
            </span>
            {supportInfo.desc}
          </div>
        </div>
      </div>
    </div>
  );
}
