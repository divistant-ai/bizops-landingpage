'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { getAutoRecommendedAddons } from '@/utils/pricingUtils';
import {
  AssessmentStep,
  CheckoutStep,
  CustomizeStep,
  ExitIntentModal,
  MobileSummaryPanel,
  PricingIntro,
  RecommendationStep,
  ThankYouStep,
} from './pricing/components';
import { useExitIntent } from './pricing/hooks/useExitIntent';

import { PricingProvider, usePricingContext } from './pricing/PricingContext';
import { PricingErrorBoundary } from './pricing/PricingErrorBoundary';

// --- Main Inner Component ---

const PricingCalculatorContent: React.FC = () => {
  // Get all state and helpers from context
  const {
    isStarted,
    setIsStarted,
    currentStep,
    assessment,
    complexityScore,
    selectedAddOns,
    setSelectedAddOns,
    selectedPlanId,
    setSelectedPlanId,
    recommendedPlanId,
    assessmentStep,
    setContactInfo,
  } = usePricingContext();

  // URL params pre-fill for tier selection
  useEffect(() => {
    if (typeof window !== 'undefined' && !isStarted) {
      const params = new URLSearchParams(window.location.search);
      const tier = params.get('tier');
      const start = params.get('start');

      // Pre-fill tier if valid
      if (tier && ['business', 'growth', 'enterprise'].includes(tier)) {
        setSelectedPlanId(tier);
      }

      // Auto-start if param present
      if (start === 'true') {
        setIsStarted(true);
      }
    }
  }, [isStarted, setIsStarted, setSelectedPlanId]);

  // Exit intent for lead recovery
  const { showExitModal, closeModal } = useExitIntent({
    threshold: 20,
    maxDisplays: 3,
    cookieExpiry: 24 * 60 * 60 * 1000, // 24 hours
  });

  const [exitIntentSuccess, setExitIntentSuccess] = useState(false);

  const handleExitIntentSubmit = (email: string) => {
    setContactInfo(prev => ({ ...prev, email }));
    closeModal();
    setExitIntentSuccess(true);
    setTimeout(() => setExitIntentSuccess(false), 5000);
    if (typeof window !== 'undefined') {
      if ((window as any).posthog) {
        (window as any).posthog.capture('pricing_exit_intent_email_captured', {
          email,
          step: assessmentStep,
        });
      }
      if ((window as any).gtag) {
        (window as any).gtag('event', 'pricing_exit_intent_email_captured', {
          step: assessmentStep,
        });
      }
    }
  };

  // Auto-recommend addons when entering customize step
  useEffect(() => {
    if (currentStep === 'customize' && Object.keys(selectedAddOns).length === 0) {
      setSelectedAddOns(getAutoRecommendedAddons(assessment, complexityScore));
    }
  }, [currentStep, assessment, complexityScore, selectedAddOns, setSelectedAddOns]);

  // Auto-select recommended plan
  useEffect(() => {
    if (currentStep === 'recommendation' && !selectedPlanId) {
      setSelectedPlanId(recommendedPlanId);
    }
  }, [currentStep, recommendedPlanId, selectedPlanId, setSelectedPlanId]);

  return (
    <div className="selection:bg-primary-500/30 dark:bg-dark-bg flex min-h-screen flex-col overflow-hidden bg-slate-50 font-sans text-slate-900 dark:text-white">
      <AnimatePresence mode="wait">
        {!isStarted ? (
          <PricingIntro />
        ) : (
          <motion.div
            key="calculator"
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="dark:bg-dark-bg flex h-screen flex-col overflow-hidden bg-slate-50"
          >
            <div className="dark:bg-dark-bg/80 relative z-20 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md dark:border-white/5">
              {exitIntentSuccess && (
                <p className="absolute top-full left-1/2 z-30 mt-2 -translate-x-1/2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-lg">
                  Email tersimpan.
                </p>
              )}
              <button
                onClick={() => setIsStarted(false)}
                className="group flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                <span className="hidden sm:inline">Back to Intro</span>
              </button>

              <div className="flex items-center gap-4">
                <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-600 md:flex dark:border-white/5 dark:bg-white/5 dark:text-slate-500">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500"></div>
                  Live Estimation
                </div>
              </div>
            </div>

            <div className="relative grow overflow-hidden">
              <MobileSummaryPanel />
              <div className="selection:bg-primary-500/30 h-full font-sans text-slate-200">
                {currentStep === 'assessment' && <AssessmentStep />}
                {currentStep === 'recommendation' && <RecommendationStep />}
                {currentStep === 'customize' && <CustomizeStep />}
                {currentStep === 'checkout' && <CheckoutStep />}
                {currentStep === 'thankyou' && <ThankYouStep />}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exit Intent Modal for Lead Recovery */}
      <ExitIntentModal
        isOpen={showExitModal}
        onClose={closeModal}
        onSubmit={handleExitIntentSubmit}
        currentStep={assessmentStep}
      />
    </div>
  );
};

// Wrapped component with PricingProvider and ErrorBoundary
const PricingCalculator: React.FC = () => (
  <PricingErrorBoundary>
    <PricingProvider>
      <PricingCalculatorContent />
    </PricingProvider>
  </PricingErrorBoundary>
);

export default PricingCalculator;
