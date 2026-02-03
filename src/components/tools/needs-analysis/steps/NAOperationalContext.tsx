'use client';

import React from 'react';
import { holisticIssues } from '@/data/needsAnalysisData';
import { NAStepLayout } from '../components/NAStepLayout';
import { useNeedsAnalysis } from '../context/NeedsAnalysisContext';

export const NAOperationalContext: React.FC<{
  displayStep: number;
  totalSteps: number;
}> = ({ displayStep, totalSteps }) => {
  const {
    contextData,
    selectedHolisticIssues,
    setSelectedHolisticIssues,
    toggleSelection,
    setStep,
    handleFinish,
  } = useNeedsAnalysis();

  return (
    <NAStepLayout
      title="Tantangan Operasional"
      desc="Pilih masalah holistik (People, Process, Technology) yang sedang dihadapi."
      prevStep="tech-stack"
      nextStep="pain-points"
      disableNext={selectedHolisticIssues.length === 0}
      setStep={setStep}
      displayStep={displayStep}
      totalSteps={totalSteps}
      handleFinish={handleFinish}
    >
      <div className="space-y-4">
        <div className="mb-2 text-sm text-slate-600 dark:text-slate-400">
          Pilih minimal 1, maksimal 5 masalah.
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            ...holisticIssues.people,
            ...holisticIssues.process,
            ...(contextData.techStack
              && holisticIssues.technology[
                contextData.techStack as keyof typeof holisticIssues.technology
              ]
              ? holisticIssues.technology[
                contextData.techStack as keyof typeof holisticIssues.technology
              ]
              : []),
          ].map((issue: any) => (
            <button
              key={issue.id}
              onClick={() => toggleSelection(selectedHolisticIssues, issue.id, setSelectedHolisticIssues, 5)}
              disabled={
                !selectedHolisticIssues.includes(issue.id) && selectedHolisticIssues.length >= 5
              }
              aria-pressed={selectedHolisticIssues.includes(issue.id)}
              className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                selectedHolisticIssues.includes(issue.id)
                  ? 'border-amber-500 bg-amber-500/10 text-white ring-1 ring-amber-500 dark:text-white'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/20 dark:hover:bg-white/10'
              }`}
            >
              {issue.icon && <issue.icon className="mt-1 size-5 shrink-0" />}
              <div>
                <div className="mb-1 text-sm font-bold">{issue.label}</div>
                {issue.desc && (
                  <div className="text-xs leading-relaxed opacity-80">{issue.desc}</div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </NAStepLayout>
  );
};
