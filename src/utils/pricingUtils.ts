import type { AssessmentData } from '../components/pricing/types';

/**
 * Complexity Score Weights
 */
export const COMPLEXITY_WEIGHTS = {
  USER_COUNT: 0.5,
  BRANCH_COUNT: 5,
  MULTI_COMPANY: 30,
  MANUFACTURING: 20,
  ECOMMERCE: 15,
  ACCOUNTING: 5,
  HRM: 5,
  POS: 10,
  BI: 15,
  LEGACY_SYSTEM: 15,
  HIGH_DATA_VOLUME: 10,
  API_INTEGRATION_PER_UNIT: 5,
  ON_PREM_DEPLOYMENT: 25,
};

/**
 * Plan Recommendation Scoring Thresholds & Weights
 */
export const RECOMMENDATION_RULES = {
  ENTERPRISE_THRESHOLD: 60,
  GROWTH_THRESHOLD: 25,
  WEIGHTS: {
    USER_HIGH: 40, // > 300
    USER_MEDIUM: 15, // > 50
    MULTI_COMPANY: 40,
    BRANCH_HIGH: 20, // > 5
    MANUFACTURING: 25,
    HEALTHCARE: 15,
    ENTERPRISE: 50,
    BFSI: 40,
    LOGISTICS: 30,
    REAL_ESTATE: 30,
    CONSTRUCTION: 25,
    FNB: 20,
    RETAIL: 15,
    ON_PREM: 50,
    DEDICATED: 25,
    COMPLEXITY_HIGH: 30, // > 80
    COMPLEXITY_MED: 15, // > 40
    CUSTOM_MODULE: 35,
  },
};

/**
 * Calculates a complexity score based on assessment data.
 */
export const calculateComplexityScore = (assessment: AssessmentData): number => {
  let score = 0;
  score += assessment.userCount * COMPLEXITY_WEIGHTS.USER_COUNT;
  score += assessment.branchCount * COMPLEXITY_WEIGHTS.BRANCH_COUNT;

  if (assessment.hasMultiCompany) {
    score += COMPLEXITY_WEIGHTS.MULTI_COMPANY;
  }
  if (assessment.needsManufacturing) {
    score += COMPLEXITY_WEIGHTS.MANUFACTURING;
  }
  if (assessment.needsEcommerce) {
    score += COMPLEXITY_WEIGHTS.ECOMMERCE;
  }
  if (assessment.needsAccounting) {
    score += COMPLEXITY_WEIGHTS.ACCOUNTING;
  }
  if (assessment.needsHRM) {
    score += COMPLEXITY_WEIGHTS.HRM;
  }
  if (assessment.needsPOS) {
    score += COMPLEXITY_WEIGHTS.POS;
  }
  if (assessment.needsBI) {
    score += COMPLEXITY_WEIGHTS.BI;
  }
  if (assessment.hasLegacySystem) {
    score += COMPLEXITY_WEIGHTS.LEGACY_SYSTEM;
  }
  if (assessment.dataVolume === 'high') {
    score += COMPLEXITY_WEIGHTS.HIGH_DATA_VOLUME;
  }
  if (assessment.apiIntegrations > 0) {
    score += assessment.apiIntegrations * COMPLEXITY_WEIGHTS.API_INTEGRATION_PER_UNIT;
  }
  if (assessment.deployment === 'onprem') {
    score += COMPLEXITY_WEIGHTS.ON_PREM_DEPLOYMENT;
  }

  return score;
};

/**
 * Determines the recommended plan ID based on assessment and complexity score.
 */
export const getRecommendedPlanId = (assessment: AssessmentData, complexityScore: number): string => {
  let score = 0;
  const { WEIGHTS, ENTERPRISE_THRESHOLD, GROWTH_THRESHOLD } = RECOMMENDATION_RULES;

  if (assessment.userCount > 300) {
    score += WEIGHTS.USER_HIGH;
  } else if (assessment.userCount > 50) {
    score += WEIGHTS.USER_MEDIUM;
  }

  if (assessment.hasMultiCompany) {
    score += WEIGHTS.MULTI_COMPANY;
  }
  if (assessment.branchCount > 5) {
    score += WEIGHTS.BRANCH_HIGH;
  }

  // Industry specific scoring
  switch (assessment.industry) {
    case 'enterprise':
      score += WEIGHTS.ENTERPRISE;
      break;
    case 'bfsi':
      score += WEIGHTS.BFSI;
      break;
    case 'manufacturing':
      score += WEIGHTS.MANUFACTURING;
      break;
    case 'logistics':
      score += WEIGHTS.LOGISTICS;
      break;
    case 'realestate':
      score += WEIGHTS.REAL_ESTATE;
      break;
    case 'construction':
      score += WEIGHTS.CONSTRUCTION;
      break;
    case 'healthcare':
      score += WEIGHTS.HEALTHCARE;
      break;
    case 'fnb':
      score += WEIGHTS.FNB;
      break;
    case 'retail':
      score += WEIGHTS.RETAIL;
      break;
  }

  if (assessment.deployment === 'onprem') {
    score += WEIGHTS.ON_PREM;
  } else if (assessment.deployment === 'dedicated') {
    score += WEIGHTS.DEDICATED;
  }

  if (complexityScore > 80) {
    score += WEIGHTS.COMPLEXITY_HIGH;
  } else if (complexityScore > 40) {
    score += WEIGHTS.COMPLEXITY_MED;
  }

  if (assessment.needsCustomModule) {
    score += WEIGHTS.CUSTOM_MODULE;
  }

  if (score >= ENTERPRISE_THRESHOLD) {
    return 'enterprise';
  }
  if (score >= GROWTH_THRESHOLD) {
    return 'growth';
  }
  return 'business';
};

/**
 * Logic for auto-recommending add-ons during customization.
 */
export const getAutoRecommendedAddons = (assessment: AssessmentData, complexityScore: number): { [key: string]: number } => {
  const recommended: { [key: string]: number } = {};

  // Implementation Service logic
  if (assessment.goLiveTimeline === 'urgent') {
    recommended['impl-express'] = 1;
  } else if (complexityScore > 60 || assessment.hasMultiCompany) {
    recommended['impl-pro'] = 1;
  } else {
    recommended['impl-standard'] = 1;
  }

  // Infrastructure & Performance
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

  // Training & Support
  if (assessment.trainingPreference === 'onsite') {
    recommended['onsite-visit'] = 3;
  } else if (assessment.trainingPreference === 'hybrid') {
    recommended['onsite-visit'] = 1;
  }

  if (assessment.trainingPreference === 'onsite' || assessment.userCount > 50) {
    recommended['training-extra'] = Math.ceil(assessment.userCount / 20);
  }

  return recommended;
};

/**
 * Helper to calculate estimated price range
 */
export const calculatePriceEstimate = (assessment: AssessmentData) => {
  // Base prices per user tier
  let minPricePerUser = 75000; // Business plan
  let maxPricePerUser = 150000; // Growth plan

  // Adjust based on company size
  if (assessment.companySize === 'enterprise') {
    minPricePerUser = 100000;
    maxPricePerUser = 200000;
  } else if (assessment.companySize === 'startup') {
    minPricePerUser = 50000;
    maxPricePerUser = 100000;
  }

  // Count modules
  const moduleCount = Object.keys(assessment).filter(
    k => k.startsWith('needs') && (assessment as any)[k] === true,
  ).length;

  // Module factor
  const moduleFactor = 1 + moduleCount * 0.1;

  // Calculate monthly
  const minMonthly = assessment.userCount * minPricePerUser * moduleFactor;
  const maxMonthly = assessment.userCount * maxPricePerUser * moduleFactor;

  // One-time setup estimate
  const setupMin = 5000000 + moduleCount * 1000000;
  const setupMax = 15000000 + moduleCount * 3000000;

  return {
    monthlyMin: Math.round((minMonthly / 1000000) * 10) / 10, // Convert to jutaan
    monthlyMax: Math.round((maxMonthly / 1000000) * 10) / 10,
    setupMin: Math.round((setupMin / 1000000) * 10) / 10,
    setupMax: Math.round((setupMax / 1000000) * 10) / 10,
  };
};
