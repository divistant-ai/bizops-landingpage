'use client';

import type { AssessmentData } from '../types';
import { ArrowRight, Calculator, Rocket, Sparkles, TrendingDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';
import Button from '@/components/ui/Button';
import { calculatePriceEstimate } from '../../../utils/pricingUtils';
import { usePricingContext } from '../PricingContext';
import {
  calculateSavings,
  formatToIDR,
  getCompetitorDisplayName,
} from '../utils/savingsCalculator';
import { Tooltip } from './Tooltip';

// Savings Summary Component
function SavingsSummary({ assessment }: { assessment: AssessmentData }) {
  const savings = useMemo(() => calculateSavings(assessment), [assessment]);

  if (savings.savings.total3Year <= 0) {
    return null;
  }

  return (
    <div className="mb-4 rounded-xl border border-green-200 bg-linear-to-br from-green-50 to-emerald-50 p-4 dark:border-green-500/20 dark:from-green-900/20 dark:to-emerald-900/20">
      <div className="mb-2 flex items-center gap-2">
        <TrendingDown className="h-4 w-4 text-green-600 dark:text-green-400" />
        <span className="text-xs font-bold text-green-800 uppercase dark:text-green-200">
          Potensi Hemat
        </span>
      </div>
      <div className="space-y-2">
        <div>
          <div className="text-xs text-green-700 dark:text-green-300">
            vs
            {' '}
            {getCompetitorDisplayName(savings.currentSoftware)}
          </div>
          <div className="text-lg font-bold text-green-900 dark:text-green-100">
            {formatToIDR(savings.savings.total3Year)}
          </div>
          <div className="text-xs text-green-600 dark:text-green-400">
            Selama 3 tahun (
            {savings.savings.percentage}
            % lebih hemat)
          </div>
        </div>
        {savings.paybackPeriod > 0 && (
          <div className="border-t border-green-200 pt-2 dark:border-green-500/20">
            <div className="text-xs text-green-700 dark:text-green-300">ROI Terlihat Dalam</div>
            <div className="text-sm font-semibold text-green-900 dark:text-green-100">
              {savings.paybackPeriod}
              {' '}
              bulan
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function SummaryPanel() {
  const t = useTranslations('Pricing');
  const { assessment, assessmentStep, changeStep, isTransitioning } = usePricingContext();
  const priceEstimate = calculatePriceEstimate(assessment);

  return (
    <div className="flex h-full flex-col border-l border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <div className="mb-6 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide text-slate-900 uppercase dark:text-white">
            Live Summary
          </h3>
          <p className="text-[10px] font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">
            Real-time Estimation
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <div>
          <div className="mb-1 flex items-center justify-between text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
            <span>Estimated Users</span>
            <Tooltip text="Jumlah pengguna yang memiliki akses login ke sistem." />
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white">
            {assessment.userCount}
            {' '}
            <span className="text-sm font-medium text-slate-500">accounts</span>
          </div>
        </div>

        <div>
          <div className="mb-1 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">Industry</div>
          <div className="text-base font-bold text-slate-900 dark:text-white">
            {assessment.industry ? (
              assessment.industry
            ) : (
              <span className="text-sm font-normal text-slate-400 italic">Not selected</span>
            )}
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800"></div>

        {/* Modules Count */}
        <div>
          <div className="mb-2 text-xs font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">Selected Modules</div>
          <div className="flex flex-wrap gap-1">
            <div className="text-lg font-bold text-slate-900 dark:text-white">
              {Object.keys(assessment).filter(
                k => k.startsWith('needs') && (assessment as any)[k] === true,
              ).length}
              {' '}
              <span className="text-sm font-normal text-slate-500">Modules</span>
            </div>
          </div>
        </div>

        {/* Price Preview Widget */}
        <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 dark:border-slate-700 dark:bg-slate-800/50">
          <div className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-3 dark:border-slate-700">
            <div className="rounded bg-indigo-100 p-1 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
              <Calculator className="h-3.5 w-3.5" />
            </div>
            <span className="text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              Estimasi Biaya
            </span>
            <Tooltip text={t('calculator_estimate_disclaimer')} />
          </div>

          <div className="space-y-3">
            <div>
              <div className="text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">Biaya Bulanan</div>
              <div className="text-xl font-black text-slate-900 dark:text-white">
                Rp
                {' '}
                {priceEstimate.monthlyMin}
                -
                {priceEstimate.monthlyMax}
                {' '}
                <span className="text-sm font-medium text-slate-500">jt/bln</span>
              </div>
            </div>
            <div>
              <div className="text-xs font-medium tracking-wider text-slate-500 uppercase dark:text-slate-400">
                Setup & Implementasi
              </div>
              <div className="text-base font-bold text-slate-700 dark:text-slate-300">
                Rp
                {' '}
                {priceEstimate.setupMin}
                -
                {priceEstimate.setupMax}
                {' '}
                <span className="text-xs font-normal text-slate-500">jt (one-time)</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[10px] leading-tight text-slate-400 italic dark:text-slate-500">{t('calculator_estimate_disclaimer')}</p>
        </div>

        {/* Savings Calculator */}
        {assessment.currentSoftware && <SavingsSummary assessment={assessment} />}
      </div>

      <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-800">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`h-2.5 w-2.5 rounded-full ${assessmentStep === 7 ? 'bg-emerald-500' : 'bg-indigo-500'} animate-pulse`} />
            <span className="text-xs font-bold tracking-wider text-slate-600 uppercase dark:text-slate-400">
              {assessmentStep === 7 ? 'Ready' : 'In Progress'}
            </span>
          </div>
          <span className="text-xs font-medium text-slate-400">
            Step
            {assessmentStep}
            {' '}
            of 7
          </span>
        </div>

        {/* Desktop Navigation Actions */}
        <div className="hidden gap-3 lg:grid">
          {assessmentStep < 7 ? (
            <Button
              variant="primary"
              onClick={() => changeStep('next')}
              className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Next Step
                {' '}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={() => changeStep('jump', 'recommendation')}
              className="group relative flex h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-700 hover:shadow-emerald-500/40"
            >
              <span className="relative z-10 flex items-center gap-2">
                Calculate Price
                {' '}
                <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Button>
          )}
          <Button
            variant="ghost"
            onClick={() => changeStep('prev')}
            disabled={assessmentStep === 1 || isTransitioning}
            className="h-10 w-full text-xs font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-500 dark:hover:text-white"
          >
            Back to Previous
          </Button>
        </div>
      </div>
    </div>
  );
}
