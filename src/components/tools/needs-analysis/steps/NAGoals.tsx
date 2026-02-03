'use client';

import React from 'react';
import { goals } from '@/data/needsAnalysisData';
import { NAStepLayout } from '../components/NAStepLayout';
import { useNeedsAnalysis } from '../context/NeedsAnalysisContext';

export const NAGoals: React.FC<{
  displayStep: number;
  totalSteps: number;
}> = ({ displayStep, totalSteps }) => {
  const {
    selectedGoals,
    setSelectedGoals,
    toggleSelection,
    setStep,
    handleFinish,
  } = useNeedsAnalysis();

  return (
    <NAStepLayout
      title="Tujuan Transformasi"
      desc="Apa yang ingin Anda capai dengan solusi baru?"
      prevStep="pain-points"
      nextStep="expectations"
      disableNext={selectedGoals.length === 0}
      setStep={setStep}
      displayStep={displayStep}
      totalSteps={totalSteps}
      handleFinish={handleFinish}
    >
      <div className="space-y-4">
        <div className="mb-2 text-sm text-slate-600 dark:text-slate-400">
          Pilih minimal 1, maksimal 5 goals.
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {goals.map(goal => (
            <button
              key={goal.id}
              onClick={() => toggleSelection(selectedGoals, goal.id, setSelectedGoals, 5)}
              disabled={!selectedGoals.includes(goal.id) && selectedGoals.length >= 5}
              aria-pressed={selectedGoals.includes(goal.id)}
              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                selectedGoals.includes(goal.id)
                  ? 'border-emerald-500 bg-emerald-500/10 text-white ring-1 ring-emerald-500 dark:text-white'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10'
              }`}
            >
              <goal.icon className="mt-1 size-5 shrink-0" />
              <div>
                <div className="mb-1 text-sm font-bold">{goal.label}</div>
                <div className="text-xs leading-relaxed opacity-80">{goal.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </NAStepLayout>
  );
};
