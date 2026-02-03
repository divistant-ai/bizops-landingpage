'use client';

import React from 'react';
import { MaturityAssessmentProvider, useMaturityAssessment } from './maturity-assessment/context/MaturityAssessmentContext';
import {
  MAAnalyzing,
  MAIntro,
  MALeadForm,
  MAQuestionStep,
  MAResults,
} from './maturity-assessment/steps';

const MaturityAssessmentContent: React.FC = () => {
  const { viewState } = useMaturityAssessment();

  switch (viewState) {
    case 'intro':
      return <MAIntro />;
    case 'lead-form':
      return <MALeadForm />;
    case 'assessment':
      return <MAQuestionStep />;
    case 'analyzing':
      return <MAAnalyzing />;
    case 'results':
      return <MAResults />;
    default:
      return <MAIntro />;
  }
};

export default function MaturityAssessment() {
  return (
    <MaturityAssessmentProvider>
      <MaturityAssessmentContent />
    </MaturityAssessmentProvider>
  );
}
