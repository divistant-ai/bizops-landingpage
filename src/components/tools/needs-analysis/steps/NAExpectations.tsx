'use client';

import { Clock, Wallet } from 'lucide-react';
import React from 'react';
import { budgets, timelines } from '@/data/needsAnalysisData';
import { useNeedsAnalysis } from '../context/NeedsAnalysisContext';
import { NAStepLayout } from '../components/NAStepLayout';

export const NAExpectations: React.FC<{
  displayStep: number;
  totalSteps: number;
}> = ({ displayStep, totalSteps }) => {
  const {
    selectedTimeline,
    setSelectedTimeline,
    selectedBudget,
    setSelectedBudget,
    setStep,
    handleFinish,
  } = useNeedsAnalysis();

  return (
    <NAStepLayout
      title="Timeline & Budget"
      desc="Kapan Anda ingin Go-Live dan berapa budget yang tersedia?"
      prevStep="goals"
      nextStep={handleFinish}
      disableNext={!selectedTimeline || !selectedBudget}
      setStep={setStep}
      displayStep={displayStep}
      totalSteps={totalSteps}
      handleFinish={handleFinish}
    >
      <div className="space-y-8">
        <div>
          <label className="mb-3 block text-sm font-bold text-slate-900 dark:text-white">
            Timeline Implementasi
          </label>
          <div className="grid gap-3 md:grid-cols-3">
            {timelines.map(t => (
              <button
                key={t.id}
                onClick={() => setSelectedTimeline(t.id)}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all ${
                  selectedTimeline === t.id
                    ? 'border-blue-500 bg-blue-500/10 text-white ring-1 ring-blue-500 dark:text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10'
                }`}
              >
                <Clock className="size-6" />
                <div className="text-sm font-bold">{t.label}</div>
                <div className="text-xs opacity-80">{t.desc}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-3 block text-sm font-bold text-slate-900 dark:text-white">
            Budget Range (Tahunan)
          </label>
          <div className="grid gap-3 md:grid-cols-3">
            {budgets.map(b => (
              <button
                key={b.id}
                onClick={() => setSelectedBudget(b.id)}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all ${
                  selectedBudget === b.id
                    ? 'border-emerald-500 bg-emerald-500/10 text-white ring-1 ring-emerald-500 dark:text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10'
                }`}
              >
                <Wallet className="size-6" />
                <div className="text-sm font-bold">{b.label}</div>
                <div className="text-xs opacity-80">{b.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </NAStepLayout>
  );
};
