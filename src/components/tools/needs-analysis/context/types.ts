export type StepType
  = | 'intro'
  | 'context'
  | 'tech-stack'
  | 'operational-context'
  | 'pain-points'
  | 'goals'
  | 'expectations'
  | 'analyzing'
  | 'result';

export type ContextData = {
  name: string;
  company: string;
  email: string;
  phone: string;
  role: string;
  teamSize: string;
  industry: string;
  techStack: string;
};

export type NeedsAnalysisState = {
  step: StepType;
  selectedPainPoints: string[];
  selectedGoals: string[];
  selectedHolisticIssues: string[];
  selectedTimeline: string;
  selectedBudget: string;
  contextData: ContextData;
};

export type RecommendedModule = {
  id: string;
  title: string;
  desc: string;
  relevance: string[];
  matchScore: number;
  icon?: any;
};

export type RecommendedService = {
  id: string;
  title: string;
  desc: string;
  icon: any;
  relevance: string[];
  matchScore: number;
};
