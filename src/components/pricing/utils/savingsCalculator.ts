import type { AssessmentData } from '../types';

// Competitor pricing data (monthly cost in IDR)
const COMPETITOR_PRICING: Record<
  string,
  { monthlyPerUser: number; setupCost: number; notes: string }
> = {
  sap: {
    monthlyPerUser: 2500000,
    setupCost: 500000000,
    notes: 'High implementation cost, complex setup',
  },
  oracle: {
    monthlyPerUser: 2000000,
    setupCost: 400000000,
    notes: 'Enterprise-grade, expensive licensing',
  },
  odoo: {
    monthlyPerUser: 150000,
    setupCost: 50000000,
    notes: 'Per-user pricing, additional modules extra',
  },
  accurate: {
    monthlyPerUser: 50000,
    setupCost: 5000000,
    notes: 'Local accounting focus, limited modules',
  },
  jurnal: {
    monthlyPerUser: 45000,
    setupCost: 3000000,
    notes: 'Basic accounting, not full ERP',
  },
  excel: {
    monthlyPerUser: 10000,
    setupCost: 0,
    notes: 'Manual work, no automation, error-prone',
  },
  custom: {
    monthlyPerUser: 300000,
    setupCost: 200000000,
    notes: 'High maintenance, vendor dependency',
  },
  other: {
    monthlyPerUser: 100000,
    setupCost: 25000000,
    notes: 'Generic ERP solution',
  },
};

// Calculate total cost for competitor
export function calculateCompetitorCost(
  software: string,
  userCount: number,
): { monthly: number; setup: number; yearly: number; total3Year: number } {
  const competitor = COMPETITOR_PRICING[software] ?? COMPETITOR_PRICING.other;

  const monthly = competitor!.monthlyPerUser * userCount;
  const setup = competitor!.setupCost;
  const yearly = monthly * 12;
  const total3Year = setup + monthly * 36;

  return { monthly, setup, yearly, total3Year };
}

// Calculate BizOps cost
export function calculateBizOpsCost(assessment: AssessmentData): {
  monthly: number;
  setup: number;
  yearly: number;
  total3Year: number;
} {
  // Base pricing per tier
  let baseMonthlyPerUser = 75000; // Business plan

  if (assessment.companySize === 'enterprise') {
    baseMonthlyPerUser = 150000; // Growth/Enterprise
  } else if (assessment.companySize === 'startup') {
    baseMonthlyPerUser = 50000; // Starter
  }

  // Count modules for complexity factor
  const moduleCount = [
    assessment.needsCRM,
    assessment.needsAccounting,
    assessment.needsInventory,
    assessment.needsProcurement,
    assessment.needsHRM,
    assessment.needsManufacturing,
    assessment.needsProjectMgmt,
    assessment.needsAssetMgmt,
    assessment.needsHelpdesk,
    assessment.needsPOS,
    assessment.needsEcommerce,
    assessment.needsQualityControl,
    assessment.needsFleet,
    assessment.needsDMS,
    assessment.needsBI,
  ].filter(Boolean).length;

  const moduleFactor = 1 + moduleCount * 0.15;

  // Calculate costs
  const monthly = Math.round(assessment.userCount * baseMonthlyPerUser * moduleFactor);
  const setup = Math.round(
    5000000 + moduleCount * 2000000 + (assessment.apiIntegrations || 0) * 5000000,
  );
  const yearly = monthly * 12;
  const total3Year = setup + monthly * 36;

  return { monthly, setup, yearly, total3Year };
}

// Calculate savings
export function calculateSavings(assessment: AssessmentData): {
  currentSoftware: string;
  currentCost: { monthly: number; setup: number; yearly: number; total3Year: number };
  bizOpsCost: { monthly: number; setup: number; yearly: number; total3Year: number };
  savings: { monthly: number; yearly: number; total3Year: number; percentage: number };
  paybackPeriod: number;
} {
  const currentSoftware = assessment.currentSoftware || 'other';
  const userCount = assessment.userCount || 10;

  const currentCost = calculateCompetitorCost(currentSoftware, userCount);
  const bizOpsCost = calculateBizOpsCost(assessment);

  const savings = {
    monthly: currentCost.monthly - bizOpsCost.monthly,
    yearly: currentCost.yearly - bizOpsCost.yearly,
    total3Year: currentCost.total3Year - bizOpsCost.total3Year,
    percentage: Math.round(
      ((currentCost.total3Year - bizOpsCost.total3Year) / currentCost.total3Year) * 100,
    ),
  };

  // Calculate payback period (if BizOps cheaper)
  const paybackPeriod = savings.monthly > 0 ? Math.ceil(bizOpsCost.setup / savings.monthly) : 0;

  return {
    currentSoftware,
    currentCost,
    bizOpsCost,
    savings,
    paybackPeriod,
  };
}

// Format currency to IDR
export function formatToIDR(amount: number): string {
  if (amount >= 1000000000) {
    return `Rp ${(amount / 1000000000).toFixed(1)} M`;
  } else if (amount >= 1000000) {
    return `Rp ${(amount / 1000000).toFixed(0)} jt`;
  } else {
    return `Rp ${amount.toLocaleString('id-ID')}`;
  }
}

// Get competitor display name
export function getCompetitorDisplayName(software: string): string {
  const names: Record<string, string> = {
    sap: 'SAP Business One',
    oracle: 'Oracle NetSuite',
    odoo: 'Odoo',
    accurate: 'Accurate Online',
    jurnal: 'Jurnal',
    excel: 'Excel/Manual',
    custom: 'Custom Development',
    other: 'Software Saat Ini',
  };
  return names[software] || 'Software Saat Ini';
}
