'use client';

import type { LucideIcon } from 'lucide-react';
import type { AssessmentData } from '../types';

import { usePricingContext } from '../PricingContext';

type ToggleSwitchProps = {
  field: keyof AssessmentData;
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ToggleSwitch({ field, icon: Icon, title, description }: ToggleSwitchProps) {
  const { assessment, updateAssessment } = usePricingContext();
  const isOn = !!assessment[field];

  return (
    <div
      onClick={() => updateAssessment(field, !isOn)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          updateAssessment(field, !isOn);
        }
      }}
      role="button"
      tabIndex={0}
      aria-pressed={isOn}
      className={`flex cursor-pointer items-center justify-between rounded-xl border px-5 py-4 transition-all active:scale-98 ${
        isOn
          ? 'border-2 border-slate-900 bg-slate-100 shadow-[0_0_0_3px_rgba(15,23,42,0.1)] dark:border-white dark:bg-slate-800 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]'
          : 'border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-slate-500 dark:hover:bg-slate-800'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon
          className={`h-5 w-5 transition-all ${
            isOn ? 'scale-110 text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'
          }`}
        />
        <div>
          <div
            className={`text-sm font-bold ${
              isOn ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
            }`}
          >
            {title}
          </div>
          <div className="text-[10px] text-slate-600 dark:text-slate-500">
            {description}
          </div>
        </div>
      </div>
      <div
        className={`h-5 w-9 rounded-full p-0.5 transition-colors ${
          isOn ? 'bg-slate-900 dark:bg-white' : 'bg-slate-300 dark:bg-slate-700'
        }`}
      >
        <div
          className={`h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
            isOn ? 'translate-x-4 dark:bg-slate-900' : ''
          }`}
        />
      </div>
    </div>
  );
}
