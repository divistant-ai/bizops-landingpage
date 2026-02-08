'use client';

import type { AssessmentData } from '../types';

export type ValidationWarning = {
  field: string;
  message: string;
  severity: 'info' | 'warning' | 'error';
  recommendation?: string;
};

export function validateAssessment(assessment: AssessmentData): ValidationWarning[] {
  const warnings: ValidationWarning[] = [];

  // Check 1: Company size vs User count mismatch
  if (assessment.companySize === 'enterprise' && assessment.userCount < 50) {
    warnings.push({
      field: 'companySize',
      message: 'Perusahaan Enterprise biasanya memiliki lebih dari 50 pengguna',
      severity: 'warning',
      recommendation: 'Pertimbangkan untuk menaikkan jumlah user atau pilih kategori SME',
    });
  }

  if (assessment.companySize === 'startup' && assessment.userCount > 100) {
    warnings.push({
      field: 'companySize',
      message: 'Startup dengan lebih dari 100 pengguna mungkin perlu kategori SME',
      severity: 'info',
      recommendation: 'Pertimbangkan upgrade ke kategori SME untuk fitur yang lebih lengkap',
    });
  }

  // Check 2: Multi-company without enough branches
  if (assessment.hasMultiCompany && assessment.branchCount < 2) {
    warnings.push({
      field: 'hasMultiCompany',
      message: 'Multi-company memerlukan minimal 2 cabang',
      severity: 'warning',
      recommendation: 'Aktifkan fitur ini jika Anda memiliki 2 atau lebih entitas bisnis',
    });
  }

  // Check 3: On-premise with small user count (not cost effective)
  if (assessment.deployment === 'on-premise' && assessment.userCount < 30) {
    warnings.push({
      field: 'deployment',
      message: 'On-premise kurang cost-effective untuk user di bawah 30',
      severity: 'info',
      recommendation: 'Pertimbangkan cloud deployment untuk biaya yang lebih efisien',
    });
  }

  // Check 4: No modules selected
  const moduleCount = Object.keys(assessment).filter(
    k => k.startsWith('needs') && (assessment as any)[k] === true,
  ).length;

  if (moduleCount === 0) {
    warnings.push({
      field: 'modules',
      message: 'Minimal pilih 1 modul untuk melanjutkan',
      severity: 'error',
      recommendation: 'CRM, Accounting, dan Inventory adalah modul yang paling umum digunakan',
    });
  }

  // Check 5: High data volume without proper infrastructure
  if (assessment.dataVolume === 'high' && assessment.deployment === 'cloud-shared') {
    warnings.push({
      field: 'dataVolume',
      message: 'Data volume tinggi disarankan menggunakan dedicated server',
      severity: 'warning',
      recommendation: 'Pertimbangkan VPS atau On-premise untuk performa optimal',
    });
  }

  // Check 6: Many API integrations without proper support
  if (assessment.apiIntegrations > 5 && assessment.supportLevel === 'standard') {
    warnings.push({
      field: 'apiIntegrations',
      message: 'Integrasi API yang kompleks memerlukan support priority',
      severity: 'info',
      recommendation: 'Pertimbangkan upgrade ke Priority Support untuk bantuan teknis lebih cepat',
    });
  }

  // Check 7: Urgent timeline with complex requirements
  const isComplex
    = assessment.userCount > 100
    || moduleCount > 8
    || assessment.hasMultiCompany
    || assessment.needsCustomModule;

  if (assessment.goLiveTimeline === 'urgent' && isComplex) {
    warnings.push({
      field: 'goLiveTimeline',
      message: 'Timeline urgent mungkin tidak realistis untuk requirement kompleks',
      severity: 'warning',
      recommendation: 'Pertimbangkan timeline standar (1-2 bulan) untuk hasil optimal',
    });
  }

  return warnings;
}

export function getSmartRecommendations(assessment: AssessmentData): string[] {
  const recommendations: string[] = [];

  // Recommendation 1: Based on industry
  const industryModules: Record<string, string[]> = {
    manufacturing: ['Manufacturing', 'Quality Control', 'Inventory'],
    retail: ['POS', 'E-commerce', 'Inventory', 'Accounting'],
    fmcg: ['Fleet', 'Inventory', 'CRM', 'DMS'],
    bfsi: ['CRM', 'Accounting', 'DMS'],
    healthcare: ['CRM', 'HRM', 'DMS'],
  };

  const industryRecs = industryModules[assessment.industry];
  if (industryRecs) {
    recommendations.push(
      `Untuk industri ${assessment.industry}, modul yang direkomendasikan: ${industryRecs.join(', ')}`,
    );
  }

  // Recommendation 2: Based on company size
  if (assessment.companySize === 'enterprise') {
    recommendations.push(
      'Enterprise: Pertimbangkan modul BI untuk analitik bisnis yang komprehensif',
    );
  }

  // Recommendation 3: Based on user count
  if (assessment.userCount > 200) {
    recommendations.push(
      'Untuk 200+ users, disarankan menggunakan single sign-on (SSO) integration',
    );
  }

  // Recommendation 4: Based on timeline
  if (assessment.goLiveTimeline === 'standard' || assessment.goLiveTimeline === 'planned') {
    recommendations.push(
      'Timeline yang fleksibel memungkinkan training yang lebih mendalam untuk team Anda',
    );
  }

  return recommendations;
}
