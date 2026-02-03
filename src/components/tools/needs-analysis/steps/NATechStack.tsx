'use client';

import React from 'react';
import { techStackOptions } from '@/data/needsAnalysisData';
import { NAStepLayout } from '../components/NAStepLayout';
import { useNeedsAnalysis } from '../context/NeedsAnalysisContext';

export const NATechStack: React.FC<{
  displayStep: number;
  totalSteps: number;
}> = ({ displayStep, totalSteps }) => {
  const { contextData, setContextData, setStep, handleFinish } = useNeedsAnalysis();

  return (
    <NAStepLayout
      title="Tech Stack & Infrastruktur"
      desc="Bantu kami memahami kondisi teknologi Anda saat ini."
      prevStep="context"
      nextStep="operational-context"
      disableNext={false}
      setStep={setStep}
      displayStep={displayStep}
      totalSteps={totalSteps}
      handleFinish={handleFinish}
    >
      <div className="space-y-6">
        <div>
          <label className="mb-3 block text-sm font-bold text-slate-900 dark:text-white">
            Sistem yang Sedang Digunakan
          </label>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {techStackOptions.map(opt => (
              <button
                key={opt.id}
                onClick={() => setContextData({ ...contextData, techStack: opt.id })}
                aria-pressed={contextData.techStack === opt.id}
                className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-all ${
                  contextData.techStack === opt.id
                    ? 'border-blue-500 bg-blue-500/10 text-white ring-1 ring-blue-500 dark:text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10'
                }`}
              >
                <span className="text-xs font-medium">{opt.label}</span>
                {opt.desc && <span className="text-[10px] opacity-70">{opt.desc}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </NAStepLayout>
  );
};
