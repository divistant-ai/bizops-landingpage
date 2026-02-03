'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import {
  AssessmentStep,
  CheckoutStep,
  CustomizeStep,
  PricingIntro,
  RecommendationStep,
  ThankYouStep,
} from './pricing/components';
import { PricingProvider, usePricingContext } from './pricing/PricingContext';

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
  } = usePricingContext();

  // Auto-recommend addons when entering customize step
  useEffect(() => {
    if (currentStep === 'customize' && Object.keys(selectedAddOns).length === 0) {
      const recommended: { [key: string]: number } = {};
      if (assessment.goLiveTimeline === 'urgent') {
        recommended['impl-express'] = 1;
      } else if (complexityScore > 60 || assessment.hasMultiCompany) {
        recommended['impl-pro'] = 1;
      } else {
        recommended['impl-standard'] = 1;
      }

      if (assessment.userCount > 100 || assessment.dataVolume === 'high') {
        recommended['dedicated-ip'] = 1;
        recommended['extra-storage'] = Math.ceil(assessment.userCount / 50);
      }
      if (assessment.hasLegacySystem) {
        recommended['data-migration'] = 1;
      }
      if (assessment.apiIntegrations > 0) {
        recommended['api-integration'] = assessment.apiIntegrations;
      }
      if (assessment.customReports > 0) {
        recommended['custom-report'] = assessment.customReports;
      }

      if (assessment.trainingPreference === 'onsite') {
        recommended['onsite-visit'] = 3;
      } else if (assessment.trainingPreference === 'hybrid') {
        recommended['onsite-visit'] = 1;
      }

      if (assessment.trainingPreference === 'onsite' || assessment.userCount > 50) {
        recommended['training-extra'] = Math.ceil(assessment.userCount / 20);
      }

      setSelectedAddOns(recommended);
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
        {!isStarted
          ? (
              <PricingIntro />
            )
          : (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="dark:bg-dark-bg flex h-screen flex-col overflow-hidden bg-slate-50"
              >
                <div className="dark:bg-dark-bg/80 z-20 flex h-16 shrink-0 items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md dark:border-white/5">
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
    </div>
  );
};

// Wrapped component with PricingProvider
const PricingCalculator: React.FC = () => (
  <PricingProvider>
    <PricingCalculatorContent />
  </PricingProvider>
);

export default PricingCalculator;
