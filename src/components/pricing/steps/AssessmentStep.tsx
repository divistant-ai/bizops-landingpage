'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Rocket } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { Suspense, useState } from 'react';

import Button from '../../ui/Button';
import { EmailCaptureModal, StepIndicator, SummaryPanel } from '../components';
import { usePricingContext } from '../PricingContext';

// Dynamic imports untuk code splitting
const CurrentSoftwareStep = dynamic(
  () => import('./assessment/CurrentSoftwareStep').then(mod => mod.CurrentSoftwareStep),
  { loading: () => <StepSkeleton /> },
);

const CompanyProfileStep = dynamic(
  () => import('./assessment/CompanyProfileStep').then(mod => mod.CompanyProfileStep),
  { loading: () => <StepSkeleton /> },
);

const InfrastructureStep = dynamic(
  () => import('./assessment/InfrastructureStep').then(mod => mod.InfrastructureStep),
  { loading: () => <StepSkeleton /> },
);

const BusinessModulesStep = dynamic(
  () => import('./assessment/BusinessModulesStep').then(mod => mod.BusinessModulesStep),
  { loading: () => <StepSkeleton /> },
);

const IntegrationStep = dynamic(
  () => import('./assessment/IntegrationStep').then(mod => mod.IntegrationStep),
  { loading: () => <StepSkeleton /> },
);

const TimelineSLAStep = dynamic(
  () => import('./assessment/TimelineSLAStep').then(mod => mod.TimelineSLAStep),
  { loading: () => <StepSkeleton /> },
);

const ReviewDataStep = dynamic(
  () => import('./assessment/ReviewDataStep').then(mod => mod.ReviewDataStep),
  { loading: () => <StepSkeleton /> },
);

// Loading skeleton untuk dynamic imports
function StepSkeleton() {
  return (
    <div className="space-y-6 p-4">
      <div className="h-8 w-3/4 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-32 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
        <div className="h-32 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
      </div>
      <div className="h-24 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800" />
    </div>
  );
}

const AssessmentStep: React.FC = () => {
  const { assessmentStep, setAssessmentStep, isTransitioning, changeStep, setContactInfo }
    = usePricingContext();
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Handle next step with email capture logic
  const handleNextStep = () => {
    if (assessmentStep < 7) {
      setAssessmentStep(assessmentStep + 1);
    } else {
      changeStep('jump', 'recommendation');
    }
  };

  // Handle email submission
  const handleEmailSubmit = (email: string) => {
    setContactInfo(prev => ({ ...prev, email }));
    setShowEmailModal(false);

    // Track email capture
    if (typeof window !== 'undefined') {
      if ((window as any).posthog) {
        (window as any).posthog.capture('pricing_email_captured', {
          step: assessmentStep,
          source: 'step_1_to_2_modal',
        });
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'pricing_email_captured', {
          step: assessmentStep,
          source: 'step_1_to_2_modal',
        });
      }
    }

    // Continue to next step
    setAssessmentStep(assessmentStep + 1);
  };

  // Handle skip email capture
  const handleEmailSkip = () => {
    setShowEmailModal(false);

    // Track skip
    if (typeof window !== 'undefined') {
      if ((window as any).posthog) {
        (window as any).posthog.capture('pricing_email_skipped', {
          step: assessmentStep,
        });
      }
    }

    // Still continue to next step
    setAssessmentStep(assessmentStep + 1);
  };

  const renderStepContent = () => {
    switch (assessmentStep) {
      case 1:
        return <CurrentSoftwareStep />;
      case 2:
        return <CompanyProfileStep />;
      case 3:
        return <InfrastructureStep />;
      case 4:
        return <BusinessModulesStep />;
      case 5:
        return <IntegrationStep />;
      case 6:
        return <TimelineSLAStep />;
      case 7:
        return <ReviewDataStep />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-slate-50 pb-20 lg:pb-0 dark:bg-slate-950">
      <div className="shrink-0 pt-4 pb-2">
        <StepIndicator />
      </div>

      <div className="grid flex-1 gap-6 overflow-hidden lg:grid-cols-12 lg:gap-0">
        {/* Main Content Area */}
        <div className="relative flex flex-col overflow-hidden lg:col-span-9">
          <motion.div
            key={assessmentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isTransitioning ? 0 : 1, x: isTransitioning ? -20 : 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 overflow-y-auto px-6 py-4"
          >
            <Suspense fallback={<StepSkeleton />}>{renderStepContent()}</Suspense>
          </motion.div>
        </div>

        {/* Summary Panel - Desktop Only */}
        <div className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-0 h-full">
            <SummaryPanel />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="shrink-0 border-t border-slate-200 bg-white pt-4 pb-4 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
          <Button
            variant="ghost"
            onClick={() => changeStep('prev')}
            disabled={assessmentStep === 1}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Sebelumnya
          </Button>

          <Button
            onClick={handleNextStep}
            className="gap-2 bg-blue-600 text-white hover:bg-blue-700"
          >
            {assessmentStep === 7 ? (
              <>
                Lihat Rekomendasi
                <Rocket className="h-4 w-4" />
              </>
            ) : (
              <>
                Selanjutnya
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Email Capture Modal */}
      <EmailCaptureModal
        isOpen={showEmailModal}
        onClose={handleEmailSkip}
        onSubmit={handleEmailSubmit}
      />

      {/* Mobile Summary Panel */}
      <div className="fixed right-0 bottom-0 left-0 border-t border-slate-200 bg-white lg:hidden dark:border-slate-800 dark:bg-slate-950">
        <SummaryPanel />
      </div>
    </div>
  );
};

export default AssessmentStep;
