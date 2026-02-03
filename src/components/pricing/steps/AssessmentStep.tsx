'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Rocket } from 'lucide-react';
import React from 'react';

import Button from '../../ui/Button';
import { StepIndicator, SummaryPanel } from '../components';
import { usePricingContext } from '../PricingContext';
import {
  BusinessModulesStep,
  CompanyProfileStep,
  InfrastructureStep,
  IntegrationStep,
  ReviewDataStep,
  TimelineSLAStep,
} from './assessment';

const AssessmentStep: React.FC = () => {
  const {
    assessmentStep,
    isTransitioning,
    changeStep,
  } = usePricingContext();

  const renderStepContent = () => {
    switch (assessmentStep) {
      case 1:
        return <CompanyProfileStep />;
      case 2:
        return <InfrastructureStep />;
      case 3:
        return <BusinessModulesStep />;
      case 4:
        return <IntegrationStep />;
      case 5:
        return <TimelineSLAStep />;
      case 6:
        return <ReviewDataStep />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden pb-20 lg:pb-0">
      <div className="shrink-0 pt-4 pb-2">
        <StepIndicator />
      </div>

      <div className="flex grow overflow-hidden">
        {/* Left Panel: Interaction */}
        <motion.div
          key={assessmentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent flex-1 overflow-y-auto px-4 py-6"
        >
          <div className="mx-auto max-w-2xl">
            {renderStepContent()}
          </div>
        </motion.div>

        {/* Right Panel: Summary */}
        <div className="hidden w-[320px] shrink-0 lg:block">
          <SummaryPanel />
        </div>
      </div>

      {/* Footer Nav (Mobile Only) */}
      <div className="bg-dark-bg/80 fixed right-0 bottom-0 left-0 z-20 flex items-center justify-between border-t border-white/10 p-4 backdrop-blur-md lg:hidden">
        <Button
          variant="ghost"
          onClick={() => changeStep('prev')}
          disabled={assessmentStep === 1 || isTransitioning}
          className="h-10 px-4 text-sm font-medium text-slate-400 hover:text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        {assessmentStep < 6 ? (
          <Button
            variant="primary"
            onClick={() => changeStep('next')}
            className="shadow-primary-500/20 h-10 rounded-full bg-white px-6 text-sm font-bold text-slate-900 shadow-lg hover:bg-slate-200"
          >
            Next Step
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={() => changeStep('jump', 'recommendation')}
            className="h-10 rounded-full bg-emerald-500 px-8 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400"
          >
            Calculate Price
            <Rocket className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default AssessmentStep;
