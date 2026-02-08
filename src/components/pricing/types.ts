'use client';

import type { PricingPlan, ServiceAddon } from '@/data/pricingData';

// Step type
export type Step = 'assessment' | 'recommendation' | 'customize' | 'checkout' | 'thankyou';

// Assessment data type
export type AssessmentData = {
  userCount: number;
  industry: string;
  companySize: string;
  branchCount: number;
  hasMultiCompany: boolean;
  deployment: string;
  serverLocation: string;
  hasLegacySystem: boolean;
  dataVolume: 'low' | 'medium' | 'high';
  // Core Modules
  needsCRM: boolean;
  needsAccounting: boolean;
  needsInventory: boolean;
  needsProcurement: boolean;
  needsHRM: boolean;
  // Specialized Modules
  needsManufacturing: boolean;
  needsProjectMgmt: boolean;
  needsAssetMgmt: boolean;
  needsHelpdesk: boolean;
  needsPOS: boolean;
  needsEcommerce: boolean;
  // Advanced Modules
  needsQualityControl: boolean;
  needsFleet: boolean;
  needsDMS: boolean;
  needsBI: boolean;

  apiIntegrations: number;
  customReports: number;
  needsCustomModule: boolean;
  supportLevel: string;
  goLiveTimeline: string;
  trainingPreference: 'online' | 'hybrid' | 'onsite';
  currentSoftware: string;
  currentPainPoints: string[];
  otherSoftwareUsed: string[];
  servicesInterest?: string[];
};

// Contact info type
export type ContactInfo = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  role: string;
};

// Calculations type
export type Calculations = {
  basePrice: number;
  monthlyRecurring: number;
  oneTimeFees: number;
  subtotal: number;
  discountAmount: number;
  totalFirstPayment: number;
};

// Default assessment state
export const defaultAssessment: AssessmentData = {
  userCount: 20,
  industry: '',
  companySize: '',
  branchCount: 1,
  hasMultiCompany: false,
  deployment: '',
  serverLocation: 'jakarta',
  hasLegacySystem: false,
  dataVolume: 'low',
  needsCRM: true,
  needsAccounting: true,
  needsInventory: true,
  needsProcurement: false,
  needsHRM: true,
  needsManufacturing: false,
  needsProjectMgmt: false,
  needsAssetMgmt: false,
  needsHelpdesk: false,
  needsPOS: false,
  needsEcommerce: false,
  needsQualityControl: false,
  needsFleet: false,
  needsDMS: false,
  needsBI: false,
  apiIntegrations: 0,
  customReports: 0,
  needsCustomModule: false,
  supportLevel: 'standard',
  goLiveTimeline: '3months',
  trainingPreference: 'online',
  currentSoftware: '',
  currentPainPoints: [],
  otherSoftwareUsed: [],
  servicesInterest: [],
};

// Default contact info
export const defaultContactInfo: ContactInfo = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  role: '',
};

// Re-export for convenience
export type { PricingPlan, ServiceAddon };
