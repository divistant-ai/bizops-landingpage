'use client';

import { ArrowRight, Rocket, Sparkles } from 'lucide-react';

import Button from '@/components/ui/Button';
import { usePricingContext } from '../PricingContext';
import { Tooltip } from './Tooltip';

export function SummaryPanel() {
  const { assessment, assessmentStep, changeStep, isTransitioning } = usePricingContext();

  return (
    <div className="flex h-full flex-col border-l border-slate-200 bg-slate-50 p-6 backdrop-blur-sm dark:border-white/5 dark:bg-white/5">
      <h3 className="mb-4 flex items-center gap-2 text-xs font-bold tracking-wider text-slate-600 uppercase dark:text-slate-400">
        <Sparkles className="h-3 w-3 text-amber-500 dark:text-amber-400" />
        {' '}
        Live Summary
      </h3>
      <div className="flex-1 space-y-5">
        <div>
          <div className="mb-1 flex items-center justify-between text-xs text-slate-600 dark:text-slate-500">
            <span>Estimated Users</span>
            <Tooltip text="Jumlah pengguna yang memiliki akses login ke sistem." />
          </div>
          <div className="text-xl font-bold text-slate-900 dark:text-white">
            {assessment.userCount}
            {' '}
            <span className="text-sm font-normal text-slate-500">accounts</span>
          </div>
        </div>
        <div>
          <div className="mb-1 text-xs text-slate-600 dark:text-slate-500">Industry</div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-900 capitalize dark:text-white">
            {assessment.industry
              ? (
                  assessment.industry
                )
              : (
                  <span className="text-slate-400 italic dark:text-slate-600">Not selected</span>
                )}
          </div>
        </div>
        <div>
          <div className="mb-1 text-xs text-slate-600 dark:text-slate-500">Modules</div>
          <div className="flex flex-wrap gap-1">
            {Object.keys(assessment).filter(
              k => k.startsWith('needs') && (assessment as any)[k] === true,
            ).length > 0
              ? (
                  <span className="text-sm font-medium text-slate-900 dark:text-white">
                    {
                      Object.keys(assessment).filter(
                        k => k.startsWith('needs') && (assessment as any)[k] === true,
                      ).length
                    }
                    {' '}
                    Selected
                  </span>
                )
              : (
                  <span className="text-xs text-slate-400 italic dark:text-slate-600">None</span>
                )}
          </div>
        </div>
      </div>

      <div className="grow"></div>

      <div className="mt-6 border-t border-slate-200 pt-6 dark:border-white/10">
        <div className="border-primary-200 from-primary-50 dark:border-primary-500/20 dark:from-primary-900/20 mb-4 rounded-xl border bg-linear-to-br to-blue-50 p-4 dark:to-blue-900/20">
          <div className="mb-1 text-xs font-bold text-slate-700 uppercase dark:text-slate-100">
            Current Status
          </div>
          <div className="flex items-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${assessmentStep === 6 ? 'bg-green-500' : 'bg-amber-500'} animate-pulse`}
            />
            <span className="text-sm font-medium text-slate-900 dark:text-white">
              {assessmentStep === 6 ? 'Ready to Calculate' : 'Gathering Requirements...'}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Actions */}
        <div className="hidden gap-3 lg:grid">
          {assessmentStep < 6
            ? (
                <Button
                  variant="primary"
                  onClick={() => changeStep('next')}
                  className="bg-primary-600 shadow-primary-500/20 hover:bg-primary-700 h-12 w-full rounded-xl text-sm font-bold text-slate-800 shadow-lg dark:text-white"
                >
                  Next Step
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )
            : (
                <Button
                  variant="primary"
                  onClick={() => changeStep('jump', 'recommendation')}
                  className="h-12 w-full rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500"
                >
                  Calculate Price
                  <Rocket className="ml-2 h-4 w-4" />
                </Button>
              )}
          <Button
            variant="ghost"
            onClick={() => changeStep('prev')}
            disabled={assessmentStep === 1 || isTransitioning}
            className="h-10 w-full text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            Back to Previous
          </Button>
        </div>
      </div>
    </div>
  );
}
