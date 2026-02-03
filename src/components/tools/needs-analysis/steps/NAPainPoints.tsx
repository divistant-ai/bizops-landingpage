'use client';

import React from 'react';
import { painPoints } from '@/data/needsAnalysisData';
import { NAStepLayout } from '../components/NAStepLayout';
import { useNeedsAnalysis } from '../context/NeedsAnalysisContext';

export const NAPainPoints: React.FC<{
  displayStep: number;
  totalSteps: number;
}> = ({ displayStep, totalSteps }) => {
  const {
    selectedPainPoints,
    setSelectedPainPoints,
    toggleSelection,
    setStep,
    handleFinish,
  } = useNeedsAnalysis();

  return (
    <NAStepLayout
      title="Pain Points Spesifik"
      desc="Apa masalah teknis/operasional yang paling mengganggu?"
      prevStep="operational-context"
      nextStep="goals"
      disableNext={selectedPainPoints.length === 0}
      setStep={setStep}
      displayStep={displayStep}
      totalSteps={totalSteps}
      handleFinish={handleFinish}
    >
      <div className="space-y-4">
        <div className="mb-2 text-sm text-slate-600 dark:text-slate-400">
          Pilih minimal 1, maksimal 5 pain points.
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {painPoints.map(pain => (
            <button
              key={pain.id}
              onClick={() => toggleSelection(selectedPainPoints, pain.id, setSelectedPainPoints, 5)}
              disabled={!selectedPainPoints.includes(pain.id) && selectedPainPoints.length >= 5}
              aria-pressed={selectedPainPoints.includes(pain.id)}
              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                selectedPainPoints.includes(pain.id)
                  ? 'border-red-500 bg-red-500/10 text-white ring-1 ring-red-500 dark:text-white'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10'
              }`}
            >
              <pain.icon className="mt-1 size-5 shrink-0" />
              <div>
                <div className="mb-1 text-sm font-bold">{pain.label}</div>
                <div className="text-xs leading-relaxed opacity-80">{pain.desc}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </NAStepLayout>
  );
};
