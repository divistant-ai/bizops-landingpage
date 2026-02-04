import type { LucideIcon } from 'lucide-react';

export type ModuleFeature = {
  title: string;
  desc: string;
  icon?: LucideIcon;
  color?: 'blue' | 'green' | 'purple' | 'amber' | 'indigo' | 'cyan';
};

export type ModuleMetric = {
  value: string;
  label: string;
  icon?: LucideIcon;
};

export type ModuleProblem = {
  title: string;
  desc: string;
  icon?: LucideIcon;
};

export type ModuleMobileAdvantage = {
  title: string;
  desc: string;
};

export type ModuleConnection = {
  target: string;
  desc: string;
};

export type ModuleTestimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export type ModuleFAQ = {
  question: string;
  answer: string;
};

export type ModuleCTA = {
  text: string;
  buttonLabel: string;
};

export type ModuleData = {
  // Navigation fields (for menu/footer)
  navLabel: string;
  navDesc: string;
  // Page content fields
  title: string;
  subtitle: string;
  description: string;
  metaTitle?: string;
  metaDesc?: string;
  icon: LucideIcon;
  features: ModuleFeature[];
  metrics?: ModuleMetric[];
  problems?: ModuleProblem[];
  mobileAdvantage?: ModuleMobileAdvantage;
  connections?: ModuleConnection[];
  testimonial?: ModuleTestimonial;
  faqs?: ModuleFAQ[];
  cta?: ModuleCTA;
};

// --- Feature Page Types (for Analytics, AutomationAI, MultiCompany, Portals) ---

export type UseCase = {
  title: string;
  desc: string;
  result?: string;
  icon?: LucideIcon;
  tags?: string[];
};

export type FeaturePageCTA = {
  title: string;
  subtitle: string;
  badge: string;
  demoBtn: string;
  pricingBtn: string;
  demoLink?: string;
  trustText1?: string;
  trustText2?: string;
};

export type FeaturePageData = {
  id: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  description: string;
  icon: LucideIcon;
  heroVariant?: 'dark' | 'gradient';

  // Sections data
  features: ModuleFeature[];
  featuresBadge?: string;
  featuresTitle?: string;
  featuresSubtitle?: string;

  useCases?: UseCase[];
  useCasesBadge?: string;
  useCasesTitle?: string;
  useCasesSubtitle?: string;

  metrics?: ModuleMetric[];
  problems?: ModuleProblem[];
  connections?: ModuleConnection[];
  faqs?: ModuleFAQ[];

  cta: FeaturePageCTA;

  // Related modules
  relatedIds?: Array<{
    id: string;
    type: 'module' | 'capability' | 'feature';
  }>;

  // SEO
  metaTitle: string;
  metaDesc: string;
};
