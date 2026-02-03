'use client';


import { NeedsAnalysisProvider, useNeedsAnalysis } from './needs-analysis/context/NeedsAnalysisContext';
import { NAAnalyzing } from './needs-analysis/steps/NAAnalyzing';
import { NAContext } from './needs-analysis/steps/NAContext';
import { NAExpectations } from './needs-analysis/steps/NAExpectations';
import { NAGoals } from './needs-analysis/steps/NAGoals';
import { NAIntro } from './needs-analysis/steps/NAIntro';
import { NAOperationalContext } from './needs-analysis/steps/NAOperationalContext';
import { NAPainPoints } from './needs-analysis/steps/NAPainPoints';
import { NAResults } from './needs-analysis/steps/NAResults';
import { NATechStack } from './needs-analysis/steps/NATechStack';

const STEPS_ORDER = [
  'intro',
  'context',
  'tech-stack',
  'operational-context',
  'pain-points',
  'goals',
  'expectations',
  'result',
];

const NeedsAnalysisContent = () => {
  const { step } = useNeedsAnalysis();

  const currentStepIndex = STEPS_ORDER.indexOf(step);
  const totalSteps = STEPS_ORDER.length - 2; // Exclude intro and result from count
  const displayStep = currentStepIndex;

  switch (step) {
    case 'intro':
      return <NAIntro />;
    case 'context':
      return <NAContext displayStep={displayStep} totalSteps={totalSteps} />;
    case 'tech-stack':
      return <NATechStack displayStep={displayStep} totalSteps={totalSteps} />;
    case 'operational-context':
      return <NAOperationalContext displayStep={displayStep} totalSteps={totalSteps} />;
    case 'pain-points':
      return <NAPainPoints displayStep={displayStep} totalSteps={totalSteps} />;
    case 'goals':
      return <NAGoals displayStep={displayStep} totalSteps={totalSteps} />;
    case 'expectations':
      return <NAExpectations displayStep={displayStep} totalSteps={totalSteps} />;
    case 'analyzing':
      return <NAAnalyzing />;
    case 'result':
      return <NAResults />;
    default:
      return <NAIntro />;
  }
};

export default function NeedsAnalysis() {
  return (
    <NeedsAnalysisProvider>
      <NeedsAnalysisContent />
    </NeedsAnalysisProvider>
  );
}
