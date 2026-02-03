export type ViewState = 'intro' | 'lead-form' | 'assessment' | 'analyzing' | 'results';
export type CategoryKey = 'strategy' | 'customer' | 'operations' | 'technology' | 'people';

export type LeadForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
};

export type MaturityLevel = {
  level: string;
  title: string;
  description: string;
  color: string;
  minScore: number;
  maxScore: number;
};

export type AssessmentResult = {
  avgScore: number;
  categoryScores: Record<CategoryKey, { total: number; count: number }>;
  maturityLevel: MaturityLevel;
};
