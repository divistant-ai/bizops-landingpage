'use client';

import type { LucideIcon } from 'lucide-react';
import type { AssessmentData } from '../types';
import { CheckCircle2 } from 'lucide-react';

import { calculatePriceEstimate } from '../../../utils/pricingUtils';
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
  const currentEst = calculatePriceEstimate(assessment);

  const getPriceImpact = (key: keyof AssessmentData) => {
    if (assessment[key]) {
      return null;
    }
    const nextEst = calculatePriceEstimate({ ...assessment, [key]: true });
    const diff = nextEst.monthlyMin - currentEst.monthlyMin;
    if (diff <= 0) {
      return null;
    }
    return `+ ${diff.toFixed(1)} jt`;
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {modules.map((m) => {
        const impact = getPriceImpact(m.key);
        return (
          <div
            key={m.key}
            onClick={() => updateAssessment(m.key, !assessment[m.key])}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                updateAssessment(m.key, !assessment[m.key]);
              }
            }}
            role="button"
            tabIndex={0}
            aria-pressed={!!assessment[m.key]}
            className={`group relative flex min-h-[80px] cursor-pointer flex-col justify-center gap-1 rounded-xl border p-3 transition-all active:scale-95 ${
              assessment[m.key]
                ? 'border-2 border-slate-900 bg-slate-100 shadow-[0_0_0_3px_rgba(15,23,42,0.1)] dark:border-white dark:bg-slate-800 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]'
                : 'border-slate-300 bg-slate-50 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-slate-600 dark:bg-slate-800/50 dark:hover:border-slate-500 dark:hover:bg-slate-800'
            }`}
          >
            {assessment[m.key] && (
              <div className="absolute top-2 right-2 text-slate-900 dark:text-white">
                <CheckCircle2 className="h-4 w-4" />
              </div>
            )}
            {!assessment[m.key] && impact && (
              <div className="absolute top-2 right-2 rounded bg-emerald-100 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-emerald-900/30 dark:text-emerald-400">
                {impact}
              </div>
            )}

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
        );
      })}
    </div>
  );
}
