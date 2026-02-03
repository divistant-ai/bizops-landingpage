'use client';

import type { AssessmentData } from '../types';

import { usePricingContext } from '../PricingContext';

type OptionType = {
  id: string;
  label: string;
  sub: string;
};

type OptionSelectorProps = {
  options: OptionType[];
  field: keyof AssessmentData;
  variant?: 'default' | 'filled';
};

export function OptionSelector({ options, field, variant = 'default' }: OptionSelectorProps) {
  const { assessment, updateAssessment } = usePricingContext();

  const baseClass = 'flex flex-1 flex-col items-center gap-1 rounded-lg border py-3 text-xs font-bold transition-all active:scale-95';

  const selectedClass = variant === 'filled'
    ? 'border-2 border-slate-900 bg-slate-900 text-white shadow-[0_0_0_3px_rgba(15,23,42,0.1)] dark:border-white dark:bg-white dark:text-slate-900 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]'
    : 'border-2 border-slate-900 bg-slate-100 text-slate-900 shadow-[0_0_0_3px_rgba(15,23,42,0.1)] dark:border-white dark:bg-slate-800 dark:text-white dark:shadow-[0_0_0_3px_rgba(255,255,255,0.1)]';

  const unselectedClass = 'border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100 hover:shadow-md dark:border-slate-600 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:border-slate-500';

  const selectedSubClass = variant === 'filled'
    ? 'text-white/90 dark:text-slate-900/90'
    : 'text-slate-800 dark:text-white/90';

  const unselectedSubClass = 'text-slate-500 dark:text-slate-500';

  return (
    <div className="flex gap-2">
      {options.map(opt => (
        <button
          key={opt.id}
          onClick={() => updateAssessment(field, opt.id)}
          className={`${baseClass} ${assessment[field] === opt.id ? selectedClass : unselectedClass}`}
        >
          <span>{opt.label}</span>
          <span
            className={`text-[9px] font-normal ${
              assessment[field] === opt.id ? selectedSubClass : unselectedSubClass
            }`}
          >
            {opt.sub}
          </span>
        </button>
      ))}
    </div>
  );
}
