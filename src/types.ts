import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
  children?: Array<NavItem>;
  icon?: LucideIcon;
  description?: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: Array<string>;
  cta: string;
  popular?: boolean;
};

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Metric = {
  value: string;
  label: string;
};

export type Challenge = {
  title: string;
  desc: string;
};

export type Solution = {
  title: string;
  desc: string;
  icon?: LucideIcon;
};

export type AppModule = {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon | string; // Support string for transformContent
  features?: string[]; // New field for feature list
};

export type IndustryData = {
  title: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  icon: LucideIcon | string;
  challenges: Array<Challenge>;
  solutions: Array<Solution>;
  apps?: Array<AppModule>; // New field for Apps Overview
  metrics?: Array<{ value: string; label: string }>;
  faqs?: Array<{ question: string; answer: string }>;
  caseStudyTitle: string;
  caseStudy: string;
  testimonial?: TestimonialData;
};

export type ServiceMethodology = {
  title: string;
  desc: string;
};

export type ServiceData = {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  methodology: Array<ServiceMethodology>;
  benefits: Array<{ title: string; desc: string }>;
  deliverables: Array<string>;
  cta: string;
  ctaHeadline?: string; // Enhanced CTA copy
  metrics?: Array<{ value: string; label: string }>;
  testimonials?: Array<TestimonialData>;
  faq?: Array<{ question: string; answer: string }>;
};

export type RoleChallenge = {
  pain: string;
  context: string;
  gain: string;
  gainDesc: string;
};

export type RoleData = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDesc: string;
  heroHeadline: string;
  heroSub: string;
  cta?: {
    btn: string;
    head: string;
  };
  dashboardInsight?: string;
  dashboardFeatures?: Array<string>;

  // Enhanced fields for Premium Role Page
  metrics?: Array<{ value: string; label: string }>;
  apps?: Array<string>; // IDs of apps relevant to this role

  challenges?: Array<{
    // Union to support both old and new structure
    pain?: string;
    context?: string;
    gain?: string;
    gainDesc?: string;
    // New standard structure
    title?: string;
    desc?: string;
  }>;
};

export type ModuleFeature = {
  title: string;
  desc: string;
  icon?: LucideIcon;
};

export type ModuleConnection = {
  target: string;
  desc: string;
};

export type TestimonialData = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export type ModuleData = {
  title: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDesc: string;
  icon: LucideIcon;
  features: Array<ModuleFeature>;
  metrics?: Array<{ value: string; label: string }>;
  problems?: Array<{ title: string; desc: string; icon: LucideIcon }>;
  faqs?: Array<{ question: string; answer: string }>;
  testimonial?: TestimonialData;
  mobileAdvantage?: {
    title: string;
    desc: string;
  };
  connections?: Array<ModuleConnection>;
  cta?: {
    text: string;
    buttonLabel: string;
  };
};
