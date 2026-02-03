'use client';

import { Check } from 'lucide-react';

import { usePricingContext } from '../PricingContext';

export function StepIndicator() {
  const { assessmentStep } = usePricingContext();

  return (
    <div className="mx-auto mb-4 w-full max-w-2xl">
      <div className="relative z-10 flex items-center justify-between">
        {['Profile', 'Tech', 'Modules', 'Integ', 'Time', 'Review'].map((label, idx) => {
          const stepNum = idx + 1;
          const isActive = assessmentStep === stepNum;
          const isPast = assessmentStep > stepNum;
          return (
            <div
              key={label}
              className={`flex flex-col items-center transition-all duration-300 ${isActive ? 'scale-110 opacity-100' : 'opacity-40 hover:opacity-70'}`}
            >
              <div
                className={`mb-1 flex h-6 w-6 items-center justify-center rounded-full border text-[9px] font-bold transition-all ${
                  isActive
                    ? 'border-2 border-slate-900 bg-slate-900 text-white shadow-[0_0_0_3px_rgba(15,23,42,0.2)] dark:border-white dark:bg-white dark:text-slate-900 dark:shadow-[0_0_0_3px_rgba(255,255,255,0.2)]'
                    : isPast
                      ? 'border-slate-600 bg-slate-600 text-white dark:border-slate-400 dark:bg-slate-400 dark:text-slate-900'
                      : 'border-slate-300 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500'
                }`}
              >
                {isPast ? <Check className="h-3 w-3" /> : stepNum}
              </div>
              <span className="hidden text-[9px] font-bold tracking-wider text-slate-700 uppercase sm:block dark:text-slate-300">
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="absolute top-[0.6rem] right-0 left-0 z-0 mx-auto hidden h-px w-full max-w-2xl bg-slate-900 sm:block dark:bg-white" />
    </div>
  );
}
