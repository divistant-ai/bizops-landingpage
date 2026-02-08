'use client';

import { Check } from 'lucide-react';
import { usePricingContext } from '../PricingContext';

const STEP_KEYS = [
  'calculator_step_software',
  'calculator_step_profile',
  'calculator_step_tech',
  'calculator_step_modules',
  'calculator_step_integ',
  'calculator_step_time',
  'calculator_step_review',
] as const;

export function StepIndicator() {
  const { assessmentStep } = usePricingContext();

  return (
    <div className="mx-auto mb-8 w-full max-w-lg">
      <div className="relative z-10 flex items-center justify-between">
        {STEP_KEYS.map((key, idx) => {
          const stepNum = idx + 1;
          const isActive = assessmentStep === stepNum;
          const isPast = assessmentStep > stepNum;
          return (
            <div
              key={key}
              className={`flex flex-col items-center transition-all duration-300 ${isActive ? 'scale-110' : 'opacity-100'}`}
            >
              <div
                className={`relative flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold transition-all duration-500 ${
                  isActive
                    ? 'border-indigo-600 bg-indigo-600 text-white shadow-lg ring-4 shadow-indigo-600/30 ring-indigo-50 dark:ring-indigo-900/30'
                    : isPast
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-slate-200 bg-white text-slate-400 dark:border-slate-700 dark:bg-slate-800'
                }`}
              >
                {isPast ? <Check className="h-4 w-4" /> : stepNum}
              </div>
            </div>
          );
        })}
      </div>
      {/* Progress Bar background */}
      <div className="absolute top-4 z-0 w-full max-w-lg -translate-y-1/2 px-2">
        <div className="h-0.5 w-full bg-slate-200 dark:bg-slate-700" />
      </div>
      {/* Active Progress Bar */}
      <div className="absolute top-4 z-0 w-full max-w-lg -translate-y-1/2 px-2">
        <div
          className="h-0.5 bg-indigo-600 transition-all duration-500 ease-out"
          style={{ width: `${((assessmentStep - 1) / (STEP_KEYS.length - 1)) * 100}%` }}
        />
      </div>
    </div>
  );
}
