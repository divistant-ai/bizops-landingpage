'use client';

import type { LucideIcon } from 'lucide-react';
import type { AssessmentData } from '../types';

import { usePricingContext } from '../PricingContext';

type ModuleOption = {
  key: keyof AssessmentData;
  label: string;
  desc: string;
  icon: LucideIcon;
};

type ModuleSelectorProps = {
  modules: ModuleOption[];
};

export function ModuleSelector({ modules }: ModuleSelectorProps) {
  const { assessment, updateAssessment } = usePricingContext();

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {modules.map(m => (
        <div
          key={m.key}
          onClick={() =>
            updateAssessment(m.key, !assessment[m.key])}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              updateAssessment(m.key, !assessment[m.key]);
            }
          }}
          role="button"
          tabIndex={0}
          aria-pressed={!!assessment[m.key]}
          className={`flex min-h-[80px] cursor-pointer flex-col justify-center gap-1 rounded-xl border p-3 transition-all active:scale-95 ${
            assessment[m.key]
              ? 'border-2 border-slate-900 bg-slate-100 shadow-[0_0_0_3px_rgba(15,23,42,0.1)] dark:border-white dark:bg-slate-800 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]'
              : 'border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-slate-500 dark:hover:bg-slate-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <m.icon
              className={`h-4 w-4 transition-all ${
                assessment[m.key]
                  ? 'scale-110 text-slate-900 dark:text-white'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            />
            <span
              className={`text-sm font-medium ${
                assessment[m.key]
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-700 dark:text-slate-400'
              }`}
            >
              {m.label}
            </span>
          </div>
          <span className="pl-6 text-[10px] leading-tight text-slate-500">
            {m.desc}
          </span>
        </div>
      ))}
    </div>
  );
}
