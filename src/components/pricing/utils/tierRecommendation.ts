import type { AssessmentData } from '../types';

export type TierRecommendation = {
  tier: 'business' | 'growth' | 'enterprise';
  confidence: number;
  reasons: string[];
  estimatedPrice: {
    min: number;
    max: number;
    monthly: number;
  };
  recommendedAddons: string[];
};

export type CurrentSoftwareCost = {
  software: string;
  costPerMonth: number;
  implementationCost: number;
  annualTotal: number;
};

const SOFTWARE_COSTS: Record<string, CurrentSoftwareCost> = {
  sap: {
    software: 'SAP Business One',
    costPerMonth: 25000000, // Rp 25jt/month
    implementationCost: 500000000, // Rp 500jt
    annualTotal: 800000000,
  },
  oracle: {
    software: 'Oracle NetSuite',
    costPerMonth: 20000000, // Rp 20jt/month
    implementationCost: 400000000, // Rp 400jt
    annualTotal: 640000000,
  },
  odoo: {
    software: 'Odoo Enterprise',
    costPerMonth: 8000000, // Rp 8jt/month
    implementationCost: 150000000, // Rp 150jt
    annualTotal: 246000000,
  },
  accurate: {
    software: 'Accurate Online',
    costPerMonth: 1500000, // Rp 1.5jt/month
    implementationCost: 20000000, // Rp 20jt
    annualTotal: 38000000,
  },
  jurnal: {
    software: 'Jurnal.id',
    costPerMonth: 1200000, // Rp 1.2jt/month
    implementationCost: 15000000, // Rp 15jt
    annualTotal: 29400000,
  },
  excel: {
    software: 'Spreadsheet/Excel Manual',
    costPerMonth: 500000, // Rp 500k/month (labor cost)
    implementationCost: 0,
    annualTotal: 6000000,
  },
  custom: {
    software: 'Custom Development',
    costPerMonth: 15000000, // Rp 15jt/month maintenance
    implementationCost: 1000000000, // Rp 1M
    annualTotal: 1180000000,
  },
  others: {
    software: 'Software Lainnya',
    costPerMonth: 3000000, // Rp 3jt/month (average)
    implementationCost: 50000000, // Rp 50jt
    annualTotal: 86000000,
  },
};

export function getCurrentSoftwareCost(software: string): CurrentSoftwareCost {
  const cost = SOFTWARE_COSTS[software];
  if (!cost) {
    return SOFTWARE_COSTS.others!;
  }
  return cost;
}

export function calculateSavings(
  currentSoftware: string,
  bizopsEstimate: { min: number; max: number },
): {
  currentAnnual: number;
  bizopsAnnual: number;
  savingsAmount: number;
  savingsPercentage: number;
} {
  const current = getCurrentSoftwareCost(currentSoftware);
  const bizopsAnnual = ((bizopsEstimate.min + bizopsEstimate.max) / 2) * 12;
  const savingsAmount = current.annualTotal - bizopsAnnual;
  const savingsPercentage = Math.round((savingsAmount / current.annualTotal) * 100);

  return {
    currentAnnual: current.annualTotal,
    bizopsAnnual,
    savingsAmount: Math.max(0, savingsAmount),
    savingsPercentage: Math.max(0, savingsPercentage),
  };
}

export function calculateTierRecommendation(assessment: AssessmentData): TierRecommendation {
  const {
    userCount,
    needsCRM,
    needsAccounting,
    needsInventory,
    needsHRM,
    needsProjectMgmt,
    needsManufacturing,
    needsProcurement,
    needsAssetMgmt,
    needsHelpdesk,
    needsPOS,
    needsEcommerce,
    needsQualityControl,
    needsFleet,
    needsDMS,
    needsBI,
    deployment,
    dataVolume,
    needsCustomModule,
    apiIntegrations,
    customReports,
    goLiveTimeline,
    hasMultiCompany,
  } = assessment;

  // Calculate complexity score
  let complexityScore = 0;
  let moduleCount = 0;

  // Core modules
  if (needsCRM) {
    complexityScore += 1;
    moduleCount++;
  }
  if (needsAccounting) {
    complexityScore += 2;
    moduleCount++;
  }
  if (needsInventory) {
    complexityScore += 2;
    moduleCount++;
  }
  if (needsHRM) {
    complexityScore += 2;
    moduleCount++;
  }
  if (needsProcurement) {
    complexityScore += 1;
    moduleCount++;
  }

  // Specialized modules
  if (needsProjectMgmt) {
    complexityScore += 2;
    moduleCount++;
  }
  if (needsAssetMgmt) {
    complexityScore += 1;
    moduleCount++;
  }
  if (needsHelpdesk) {
    complexityScore += 1;
    moduleCount++;
  }
  if (needsPOS) {
    complexityScore += 2;
    moduleCount++;
  }
  if (needsEcommerce) {
    complexityScore += 3;
    moduleCount++;
  }

  // Advanced modules
  if (needsManufacturing) {
    complexityScore += 4;
    moduleCount++;
  }
  if (needsQualityControl) {
    complexityScore += 2;
    moduleCount++;
  }
  if (needsFleet) {
    complexityScore += 2;
    moduleCount++;
  }
  if (needsDMS) {
    complexityScore += 2;
    moduleCount++;
  }
  if (needsBI) {
    complexityScore += 2;
    moduleCount++;
  }

  // Infrastructure complexity
  if (deployment === 'on-premise') {
    complexityScore += 3;
  }
  if (deployment === 'dedicated-cloud') {
    complexityScore += 2;
  }
  if (dataVolume === 'high') {
    complexityScore += 2;
  }

  // Integration complexity
  if (needsCustomModule) {
    complexityScore += 3;
  }
  if (apiIntegrations > 0) {
    complexityScore += Math.min(apiIntegrations, 3);
  }
  if (customReports > 5) {
    complexityScore += 1;
  }

  // Organization complexity
  if (hasMultiCompany) {
    complexityScore += 2;
  }

  // Timeline urgency
  if (goLiveTimeline === '1month') {
    complexityScore += 2;
  } else if (goLiveTimeline === '2months') {
    complexityScore += 1;
  }

  // User count factor
  if (userCount > 100) {
    complexityScore += 3;
  } else if (userCount > 50) {
    complexityScore += 2;
  } else if (userCount > 30) {
    complexityScore += 1;
  }

  // Determine tier
  let tier: 'business' | 'growth' | 'enterprise';
  let confidence: number;
  let reasons: string[] = [];

  if (complexityScore <= 8 && userCount <= 30 && moduleCount <= 4) {
    tier = 'business';
    confidence = 90;
    reasons = [
      'Kompleksitas bisnis standar dengan modul terbatas',
      'Tim berukuran kecil hingga menengah',
      'Cocok untuk 1-2 departemen utama',
    ];
  } else if (complexityScore <= 16 && userCount <= 100 && moduleCount <= 8) {
    tier = 'growth';
    confidence = 85;
    reasons = [
      'Kebutuhan modul yang komprehensif',
      'Multiple departemen terintegrasi',
      'Memerlukan workflow custom',
    ];
  } else {
    tier = 'enterprise';
    confidence = 80;
    reasons = [
      'Kompleksitas tinggi dengan banyak modul',
      'Tim besar dengan kebutuhan advance',
      'Memerlukan customization & integration ekstensif',
      'Multi-company atau infrastructure kompleks',
    ];
  }

  // Calculate price estimate
  const basePrice = {
    business: { min: 50000000, max: 100000000, monthly: 2500000 },
    growth: { min: 100000000, max: 300000000, monthly: 8000000 },
    enterprise: { min: 300000000, max: 1000000000, monthly: 20000000 },
  };

  // Adjust based on complexity
  const adjustment = complexityScore * 0.05;
  const base = basePrice[tier];

  const estimatedPrice = {
    min: Math.round(base.min * (1 + adjustment)),
    max: Math.round(base.max * (1 + adjustment)),
    monthly: Math.round(base.monthly * (1 + adjustment * 0.5)),
  };

  // Recommended addons
  const recommendedAddons: string[] = [];
  if (deployment === 'dedicated-cloud' || deployment === 'on-premise') {
    recommendedAddons.push('dedicated-server');
  }
  if (needsCustomModule || apiIntegrations > 2) {
    recommendedAddons.push('custom-integration');
  }
  if (dataVolume === 'high') {
    recommendedAddons.push('backup-disaster-recovery');
  }
  if (goLiveTimeline === '1month' || goLiveTimeline === '2months') {
    recommendedAddons.push('expedited-implementation');
  }
  if (customReports > 10) {
    recommendedAddons.push('advanced-reporting');
  }

  return {
    tier,
    confidence,
    reasons,
    estimatedPrice,
    recommendedAddons,
  };
}

export function formatPriceRange(min: number, max: number): string {
  const format = (n: number) => {
    if (n >= 1000000000) {
      return `${(n / 1000000000).toFixed(1)}M`;
    }
    if (n >= 1000000) {
      return `${(n / 1000000).toFixed(0)}jt`;
    }
    if (n >= 1000) {
      return `${(n / 1000).toFixed(0)}k`;
    }
    return n.toString();
  };

  return `Rp ${format(min)} - ${format(max)}`;
}

export function formatMonthlyPrice(price: number): string {
  if (price >= 1000000) {
    return `Rp ${(price / 1000000).toFixed(1)}jt/bulan`;
  }
  return `Rp ${(price / 1000).toFixed(0)}k/bulan`;
}

export function getTierName(tier: 'business' | 'growth' | 'enterprise'): string {
  const names = {
    business: 'Business',
    growth: 'Growth',
    enterprise: 'Enterprise',
  };
  return names[tier];
}

export function getTierDescription(tier: 'business' | 'growth' | 'enterprise'): string {
  const descriptions = {
    business: 'Solusi ERP lengkap untuk bisnis kecil-menengah dengan tim 5-30 user',
    growth: 'Platform scalable untuk bisnis berkembang dengan 30-100 user dan multi-departemen',
    enterprise:
      'Solusi enterprise-grade untuk korporasi besar dengan 100+ user dan kebutuhan kompleks',
  };
  return descriptions[tier];
}
