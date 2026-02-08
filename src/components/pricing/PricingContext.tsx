'use client';

import type { ReactNode } from 'react';
import type { AssessmentData, Calculations, ContactInfo, Step } from './types';
import React, { createContext, use, useEffect, useMemo, useRef, useState } from 'react';
import { addOns, pricingPlans } from '@/data/pricingData';
import {
  calculatePriceBreakdown,
  formatIDR,
  validateDiscountCode,
} from '@/utils/pricingCalculations';
import { calculateComplexityScore, getRecommendedPlanId } from '@/utils/pricingUtils';
import { useUTMTracking } from './hooks/useUTMTracking';
import { defaultAssessment, defaultContactInfo } from './types';

// Analytics utilities - with UTM tracking
const createTrackPricingEvent = (getUtmParams: () => Record<string, string>) => {
  return (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      const utmParams = getUtmParams();
      const enrichedProperties = {
        ...properties,
        ...utmParams,
      };

      // PostHog
      if ((window as any).posthog) {
        (window as any).posthog.capture(event, enrichedProperties);
      }
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', event, enrichedProperties);
      }
      // Console log for debugging
      console.log('[Analytics]', event, enrichedProperties);
    }
  };
};

const STORAGE_KEY = 'bizops_pricing_calculator_v1';
const STORAGE_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days

type SavedState = {
  isStarted: boolean;
  currentStep: Step;
  assessmentStep: number;
  assessment: AssessmentData;
  selectedPlanId: string;
  billingCycle: 'monthly' | 'yearly';
  selectedAddOns: { [key: string]: number };
  contactInfo: ContactInfo;
  discountCode: string;
  appliedDiscount: { code: string; percent: number } | null;
  timestamp: number;
  sessionId: string;
};

type PricingContextType = {
  // Navigation state
  isStarted: boolean;
  setIsStarted: (value: boolean) => void;
  currentStep: Step;
  setCurrentStep: (step: Step) => void;
  assessmentStep: number;
  setAssessmentStep: (step: number) => void;
  isTransitioning: boolean;
  setIsTransitioning: (value: boolean) => void;

  // Assessment data
  assessment: AssessmentData;
  updateAssessment: (field: keyof AssessmentData, value: any) => void;
  setAssessment: React.Dispatch<React.SetStateAction<AssessmentData>>;

  // Plan selection
  selectedPlanId: string;
  setSelectedPlanId: (id: string) => void;
  billingCycle: 'monthly' | 'yearly';
  setBillingCycle: (cycle: 'monthly' | 'yearly') => void;
  selectedAddOns: { [key: string]: number };
  setSelectedAddOns: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;

  // Contact & checkout
  contactInfo: ContactInfo;
  setContactInfo: React.Dispatch<React.SetStateAction<ContactInfo>>;
  formErrors: { [key: string]: string };
  setFormErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  quotationId: string;
  setQuotationId: (id: string) => void;

  // Discount
  discountCode: string;
  setDiscountCode: (code: string) => void;
  appliedDiscount: { code: string; percent: number } | null;
  setAppliedDiscount: (discount: { code: string; percent: number } | null) => void;

  // Computed values
  calculations: Calculations;
  complexityScore: number;
  recommendedPlanId: string;
  selectedPlanData: (typeof pricingPlans)[0] | undefined;

  // Helper functions
  formatIDR: (amount: number) => string;
  changeStep: (direction: 'next' | 'prev' | 'jump', target?: any) => void;
  handleAddOnChange: (addOnId: string, quantity: number) => void;
  handleToggleAddon: (addonId: string, isSelected: boolean) => void;
  handleQuantityChange: (addonId: string, delta: number) => void;
  handleApplyDiscount: () => void;
  validateCheckout: () => boolean;
  handleRequestQuotation: () => void;
  handlePrint: () => void;

  // Persistence
  hasSavedData: boolean;
  clearSavedData: () => void;
  sessionId: string;
};

const PricingContext = createContext<PricingContextType | null>(null);

export function usePricingContext() {
  const context = use(PricingContext);
  if (!context) {
    throw new Error('usePricingContext must be used within PricingProvider');
  }
  return context;
}

export function PricingProvider({ children }: { children: ReactNode }) {
  // Generate unique session ID
  const sessionId = useMemo(
    () => `sess_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    [],
  );

  // UTM Tracking for campaign attribution
  const { utmParams, getStoredUtmParams } = useUTMTracking();

  // Create trackPricingEvent with UTM params
  const trackPricingEvent = useMemo(() => {
    return createTrackPricingEvent(() => getStoredUtmParams());
  }, [getStoredUtmParams]);

  // Track mount time for analytics
  const mountTimeRef = useRef(Date.now());
  const stepStartTimeRef = useRef(Date.now());

  // Load saved state from localStorage
  const loadSavedState = (): Partial<SavedState> | null => {
    if (typeof window === 'undefined') {
      return null;
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: SavedState = JSON.parse(saved);
        // Check if data is not expired
        if (Date.now() - parsed.timestamp < STORAGE_EXPIRY) {
          trackPricingEvent('pricing_calculator_resumed', {
            session_id: parsed.sessionId,
            hours_since_last_session: Math.round((Date.now() - parsed.timestamp) / 3600000),
          });
          return parsed;
        } else {
          // Clear expired data
          localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch (e) {
      console.error('Error loading saved state:', e);
    }
    return null;
  };

  const savedState = loadSavedState();
  const hasSavedData = !!savedState;

  // Navigation state
  const [isStarted, setIsStarted] = useState(savedState?.isStarted ?? false);
  const [currentStep, setCurrentStep] = useState<Step>(savedState?.currentStep ?? 'assessment');
  const [assessmentStep, setAssessmentStep] = useState(savedState?.assessmentStep ?? 1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Assessment data (merge with default so new fields like otherSoftwareUsed get defaults)
  const [assessment, setAssessment] = useState<AssessmentData>(() =>
    savedState?.assessment ? { ...defaultAssessment, ...savedState.assessment } : defaultAssessment,
  );

  // Plan selection
  const [selectedPlanId, setSelectedPlanId] = useState<string>(savedState?.selectedPlanId ?? '');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    savedState?.billingCycle ?? 'yearly',
  );
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: number }>(
    savedState?.selectedAddOns ?? {},
  );

  // Contact & checkout
  const [contactInfo, setContactInfo] = useState<ContactInfo>(
    savedState?.contactInfo ?? defaultContactInfo,
  );
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [quotationId, setQuotationId] = useState('');

  // Discount
  const [discountCode, setDiscountCode] = useState(savedState?.discountCode ?? '');
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percent: number } | null>(
    savedState?.appliedDiscount ?? null,
  );

  // Clear saved data function
  const clearSavedData = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    // Reset all state to defaults
    setIsStarted(false);
    setCurrentStep('assessment');
    setAssessmentStep(1);
    setIsTransitioning(false);
    setAssessment(defaultAssessment);
    setSelectedPlanId('');
    setBillingCycle('yearly');
    setSelectedAddOns({});
    setContactInfo(defaultContactInfo);
    setFormErrors({});
    setQuotationId('');
    setDiscountCode('');
    setAppliedDiscount(null);
  };

  // Auto-save to localStorage
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    // If we've reset to defaults (not started and assessment is default), clear storage logic
    // We use a simplified check: if not started and industry is empty (default), consider it invalid/empty session
    if (!isStarted && assessment.industry === '' && assessment.userCount === 20) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
      return;
    }

    const stateToSave: SavedState = {
      isStarted,
      currentStep,
      assessmentStep,
      assessment,
      selectedPlanId,
      billingCycle,
      selectedAddOns,
      contactInfo,
      discountCode,
      appliedDiscount,
      timestamp: Date.now(),
      sessionId,
    };

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch (e) {
      console.error('Error saving state:', e);
    }
  }, [
    isStarted,
    currentStep,
    assessmentStep,
    assessment,
    selectedPlanId,
    billingCycle,
    selectedAddOns,
    contactInfo,
    discountCode,
    appliedDiscount,
    sessionId,
  ]);

  // Track calculator start
  useEffect(() => {
    if (isStarted) {
      trackPricingEvent('pricing_calculator_started', { session_id: sessionId });
    }
  }, [isStarted, sessionId]);

  // Track UTM params on initial load
  useEffect(() => {
    if (utmParams && Object.keys(utmParams).length > 0) {
      trackPricingEvent('pricing_utm_detected', {
        session_id: sessionId,
        ...utmParams,
      });
    }
  }, []); // Only run once on mount

  // Track step changes
  useEffect(() => {
    if (isStarted && currentStep === 'assessment') {
      const timeSpent = Date.now() - stepStartTimeRef.current;
      trackPricingEvent('pricing_step_completed', {
        session_id: sessionId,
        step: assessmentStep,
        step_name: `assessment_${assessmentStep}`,
        time_spent_ms: timeSpent,
      });
      stepStartTimeRef.current = Date.now();
    }
  }, [assessmentStep, currentStep, isStarted, sessionId]);

  // Track page unload / abandonment
  useEffect(() => {
    const handleBeforeUnload = () => {
      const totalTimeSpent = Date.now() - mountTimeRef.current;
      trackPricingEvent('pricing_calculator_abandoned', {
        session_id: sessionId,
        current_step: currentStep,
        assessment_step: assessmentStep,
        total_time_spent_ms: totalTimeSpent,
        has_selected_plan: !!selectedPlanId,
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [currentStep, assessmentStep, selectedPlanId, sessionId]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      const totalTimeSpent = Date.now() - mountTimeRef.current;
      trackPricingEvent('pricing_calculator_unmount', {
        session_id: sessionId,
        total_time_spent_ms: totalTimeSpent,
      });
    };
  }, [sessionId]);

  // Helper functions
  const changeStep = (direction: 'next' | 'prev' | 'jump', target?: any) => {
    // Track step entry before transition
    let nextStep = assessmentStep;
    let nextMainStep = currentStep;

    if (direction === 'next') {
      nextStep = assessmentStep + 1;
    } else if (direction === 'prev') {
      nextStep = assessmentStep - 1;
    } else if (direction === 'jump' && target) {
      if (typeof target === 'number') {
        nextStep = target;
      } else {
        nextMainStep = target;
      }
    }

    // Track step entry
    trackPricingEvent('pricing_step_entered', {
      session_id: sessionId,
      from_step: currentStep === 'assessment' ? assessmentStep : currentStep,
      to_step: nextMainStep === 'assessment' ? nextStep : nextMainStep,
      direction,
    });

    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === 'next') {
        setAssessmentStep((prev) => {
          const next = prev + 1;
          return next;
        });
      } else if (direction === 'prev') {
        setAssessmentStep((prev) => {
          const next = prev - 1;
          return next;
        });
      } else if (direction === 'jump' && target) {
        if (typeof target === 'number') {
          setAssessmentStep(target);
        } else {
          setCurrentStep(target);
        }
      }
      setIsTransitioning(false);
    }, 200);
  };

  const updateAssessment = (field: keyof AssessmentData, value: any) => {
    setAssessment((prev) => {
      const newValue = { ...prev, [field]: value };

      // Track field changes for analytics
      trackPricingEvent('pricing_field_changed', {
        session_id: sessionId,
        field_name: field,
        field_value: typeof value === 'boolean' ? value : String(value).substring(0, 50),
        assessment_step: assessmentStep,
      });

      return newValue;
    });
  };

  const handleAddOnChange = (addOnId: string, quantity: number) => {
    setSelectedAddOns((prev) => {
      const wasSelected = (prev[addOnId] || 0) > 0;
      const isNowSelected = quantity > 0;

      // Track addon toggle
      if (wasSelected !== isNowSelected) {
        trackPricingEvent(isNowSelected ? 'pricing_addon_selected' : 'pricing_addon_deselected', {
          session_id: sessionId,
          addon_id: addOnId,
          quantity,
        });
      }

      if (quantity === 0) {
        const newAddOns = { ...prev };
        delete newAddOns[addOnId];
        return newAddOns;
      }
      return { ...prev, [addOnId]: quantity };
    });
  };

  const handleToggleAddon = (addonId: string, isSelected: boolean) => {
    if (addonId.includes('impl')) {
      const newAddOns = { ...selectedAddOns };
      Object.keys(newAddOns).forEach((k) => {
        if (k.includes('impl')) {
          delete newAddOns[k];
        }
      });
      if (!isSelected) {
        newAddOns[addonId] = 1;
      }
      setSelectedAddOns(newAddOns);
    } else {
      handleAddOnChange(addonId, isSelected ? 0 : 1);
    }
  };

  const handleQuantityChange = (addonId: string, delta: number) => {
    setSelectedAddOns((prev) => {
      const current = prev[addonId] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [addonId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [addonId]: next };
    });
  };

  const handleApplyDiscount = () => {
    const discount = validateDiscountCode(discountCode);
    setAppliedDiscount(discount);

    if (discount) {
      trackPricingEvent('pricing_discount_applied', {
        session_id: sessionId,
        code: discount.code,
        percent: discount.percent,
      });
    }
  };

  const validateCheckout = () => {
    const errors: { [key: string]: string } = {};
    if (!contactInfo.firstName) {
      errors.firstName = 'Required';
    }
    if (!contactInfo.email) {
      errors.email = 'Required';
    }
    if (!contactInfo.company) {
      errors.company = 'Required';
    }
    if (!contactInfo.phone) {
      errors.phone = 'Required';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRequestQuotation = () => {
    if (validateCheckout()) {
      const newQuotationId = `QT-${new Date().getFullYear()}${Math.floor(1000 + Math.random() * 9000)}`;
      setQuotationId(newQuotationId);

      trackPricingEvent('pricing_quotation_requested', {
        session_id: sessionId,
        quotation_id: newQuotationId,
        plan_id: selectedPlanId,
        billing_cycle: billingCycle,
        total_amount: calculations.totalFirstPayment,
        add_ons_count: Object.keys(selectedAddOns).length,
      });

      changeStep('jump', 'thankyou');
    }
  };

  const handlePrint = () => {
    trackPricingEvent('pricing_quotation_printed', {
      session_id: sessionId,
      quotation_id: quotationId,
    });
    window.print();
  };

  // Track plan selection
  const handleSetSelectedPlanId = (id: string) => {
    setSelectedPlanId(id);
    const plan = pricingPlans.find(p => p.id === id);
    if (plan) {
      trackPricingEvent('pricing_plan_selected', {
        session_id: sessionId,
        plan_id: id,
        plan_name: plan.name,
        price: billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly,
        billing_cycle: billingCycle,
      });
    }
  };

  // Track billing cycle change
  const handleSetBillingCycle = (cycle: 'monthly' | 'yearly') => {
    setBillingCycle(cycle);
    trackPricingEvent('pricing_billing_cycle_changed', {
      session_id: sessionId,
      billing_cycle: cycle,
    });
  };

  // Computed values
  const complexityScore = useMemo(() => calculateComplexityScore(assessment), [assessment]);

  const recommendedPlanId = useMemo(
    () => getRecommendedPlanId(assessment, complexityScore),
    [assessment, complexityScore],
  );

  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlanId);

  const calculations = useMemo(
    () =>
      calculatePriceBreakdown(
        selectedPlanData,
        selectedAddOns,
        addOns,
        billingCycle,
        appliedDiscount,
      ),
    [selectedPlanData, selectedAddOns, billingCycle, appliedDiscount],
  );

  const value: PricingContextType = {
    isStarted,
    setIsStarted,
    currentStep,
    setCurrentStep,
    assessmentStep,
    setAssessmentStep,
    isTransitioning,
    setIsTransitioning,
    assessment,
    updateAssessment,
    setAssessment,
    selectedPlanId,
    setSelectedPlanId: handleSetSelectedPlanId,
    billingCycle,
    setBillingCycle: handleSetBillingCycle,
    selectedAddOns,
    setSelectedAddOns,
    contactInfo,
    setContactInfo,
    formErrors,
    setFormErrors,
    quotationId,
    setQuotationId,
    discountCode,
    setDiscountCode,
    appliedDiscount,
    setAppliedDiscount,
    calculations,
    complexityScore,
    recommendedPlanId,
    selectedPlanData,
    formatIDR,
    changeStep,
    handleAddOnChange,
    handleToggleAddon,
    handleQuantityChange,
    handleApplyDiscount,
    validateCheckout,
    handleRequestQuotation,
    handlePrint,
    hasSavedData,
    clearSavedData,
    sessionId,
  };

  return <PricingContext value={value}>{children}</PricingContext>;
}
