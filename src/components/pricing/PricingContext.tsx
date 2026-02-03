'use client';

import React, { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { AssessmentData, Calculations, ContactInfo, Step } from './types';
import { defaultAssessment, defaultContactInfo } from './types';
import { addOns, pricingPlans } from '@/data/pricingData';

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
  selectedPlanData: typeof pricingPlans[0] | undefined;

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
};

const PricingContext = createContext<PricingContextType | null>(null);

export function usePricingContext() {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error('usePricingContext must be used within PricingProvider');
  }
  return context;
}

export function PricingProvider({ children }: { children: ReactNode }) {
  // Navigation state
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState<Step>('assessment');
  const [assessmentStep, setAssessmentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Assessment data
  const [assessment, setAssessment] = useState<AssessmentData>(defaultAssessment);

  // Plan selection
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [selectedAddOns, setSelectedAddOns] = useState<{ [key: string]: number }>({});

  // Contact & checkout
  const [contactInfo, setContactInfo] = useState<ContactInfo>(defaultContactInfo);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [quotationId, setQuotationId] = useState('');

  // Discount
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; percent: number } | null>(null);

  // Helper functions
  const formatIDR = (amount: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  const changeStep = (direction: 'next' | 'prev' | 'jump', target?: any) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (direction === 'next') {
        setAssessmentStep(prev => prev + 1);
      } else if (direction === 'prev') {
        setAssessmentStep(prev => prev - 1);
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

  const updateAssessment = (field: keyof AssessmentData, value: any) =>
    setAssessment(prev => ({ ...prev, [field]: value }));

  const handleAddOnChange = (addOnId: string, quantity: number) => {
    setSelectedAddOns((prev) => {
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
    if (discountCode.toUpperCase() === 'BIZOPS10') {
      setAppliedDiscount({ code: 'BIZOPS10', percent: 10 });
    } else if (discountCode.toUpperCase() === 'PARTNER20') {
      setAppliedDiscount({ code: 'PARTNER20', percent: 20 });
    } else {
      setAppliedDiscount(null);
    }
  };

  const validateCheckout = () => {
    const errors: { [key: string]: string } = {};
    if (!contactInfo.firstName) errors.firstName = 'Required';
    if (!contactInfo.email) errors.email = 'Required';
    if (!contactInfo.company) errors.company = 'Required';
    if (!contactInfo.phone) errors.phone = 'Required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRequestQuotation = () => {
    if (validateCheckout()) {
      setQuotationId(`QT-${new Date().getFullYear()}${Math.floor(1000 + Math.random() * 9000)}`);
      changeStep('jump', 'thankyou');
    }
  };

  const handlePrint = () => window.print();

  // Computed values
  const complexityScore = useMemo(() => {
    let score = 0;
    score += assessment.userCount * 0.5;
    score += assessment.branchCount * 5;
    if (assessment.hasMultiCompany) score += 30;
    if (assessment.needsManufacturing) score += 20;
    if (assessment.needsEcommerce) score += 15;
    if (assessment.needsAccounting) score += 5;
    if (assessment.needsHRM) score += 5;
    if (assessment.needsPOS) score += 10;
    if (assessment.needsBI) score += 15;
    if (assessment.hasLegacySystem) score += 15;
    if (assessment.dataVolume === 'high') score += 10;
    if (assessment.apiIntegrations > 0) score += assessment.apiIntegrations * 5;
    if (assessment.deployment === 'onprem') score += 25;
    return score;
  }, [assessment]);

  const recommendedPlanId = useMemo(() => {
    let score = 0;
    if (assessment.userCount > 300) score += 40;
    else if (assessment.userCount > 50) score += 15;
    if (assessment.hasMultiCompany) score += 40;
    if (assessment.branchCount > 5) score += 20;
    if (assessment.industry === 'manufacturing') score += 25;
    if (assessment.industry === 'healthcare') score += 15;
    if (assessment.deployment === 'onprem') score += 50;
    else if (assessment.deployment === 'dedicated') score += 25;
    if (complexityScore > 80) score += 30;
    else if (complexityScore > 40) score += 15;
    if (assessment.needsCustomModule) score += 35;

    if (score >= 60) return 'enterprise';
    if (score >= 25) return 'growth';
    return 'business';
  }, [assessment, complexityScore]);

  const selectedPlanData = pricingPlans.find(p => p.id === selectedPlanId);

  const calculations = useMemo(() => {
    if (!selectedPlanData) {
      return {
        basePrice: 0,
        monthlyRecurring: 0,
        oneTimeFees: 0,
        subtotal: 0,
        discountAmount: 0,
        totalFirstPayment: 0,
      };
    }
    const basePrice = billingCycle === 'yearly' ? selectedPlanData.priceYearly : selectedPlanData.priceMonthly;
    const recurringAddOnsTotal = Object.entries(selectedAddOns).reduce(
      (sum, [addOnId, quantity]) => {
        const addOn = addOns.find(a => a.id === addOnId);
        if (!addOn || addOn.unit.includes('one-time') || addOn.unit.includes('per')) return sum;
        return sum + addOn.price * quantity;
      },
      0,
    );
    const oneTimeFees = Object.entries(selectedAddOns).reduce((sum, [addOnId, quantity]) => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (addOn && (addOn.unit.includes('one-time') || addOn.unit.includes('per'))) {
        return sum + addOn.price * quantity;
      }
      return sum;
    }, 0);
    const monthlyRecurring = basePrice + recurringAddOnsTotal;
    const subtotal = billingCycle === 'yearly' ? monthlyRecurring * 12 + oneTimeFees : monthlyRecurring + oneTimeFees;
    const discountAmount = appliedDiscount ? (subtotal * appliedDiscount.percent) / 100 : 0;
    const totalFirstPayment = subtotal - discountAmount;
    return { basePrice, monthlyRecurring, oneTimeFees, subtotal, discountAmount, totalFirstPayment };
  }, [selectedPlanId, billingCycle, selectedAddOns, selectedPlanData, appliedDiscount]);

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
    setSelectedPlanId,
    billingCycle,
    setBillingCycle,
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
  };

  return <PricingContext.Provider value={value}>{children}</PricingContext.Provider>;
}
