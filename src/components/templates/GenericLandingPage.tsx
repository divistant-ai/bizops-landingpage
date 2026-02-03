'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

// Import extracted sections
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ChallengesSection } from '@/components/sections/ChallengesSection';
import { ConnectionsSection } from '@/components/sections/ConnectionsSection';
import { DashboardPreview } from '@/components/sections/DashboardPreview';
import { DeliverablesSection } from '@/components/sections/DeliverablesSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { HeroSection } from '@/components/sections/HeroSection';
import { MethodologySection } from '@/components/sections/MethodologySection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { MobileAdvantageSection } from '@/components/sections/MobileAdvantageSection';
import { TableSection } from '@/components/sections/TableSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';

// Types (Keep original types for prop compatibility)
type Metric = {
  value: string;
  label: string;
};

type Feature = {
  title: string;
  desc: string; // or description
  description?: string; // alternate key
  icon?: React.ReactNode;
};

type Challenge = {
  title?: string;
  desc?: string;
  // Alternate structure for Roles data
  pain?: string;
  context?: string;
  gain?: string;
  gainDesc?: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

type MobileAdvantage = {
  title: string;
  desc: string;
};

type Connection = {
  target: string;
  desc: string;
};

type ExtraSection = {
  title: string;
  type: string; // 'table'
  headers: string[];
  rows: string[][];
};

type Methodology = {
  title: string;
  desc: string;
};

type Benefit = {
  title: string;
  desc: string;
};

export type GenericLandingPageProps = {
  title: string; // Page Title
  subtitle?: string;
  description?: string;

  // Hero variations
  heroHeadline?: string;
  heroSub?: string;
  cta?: { btn: string; head?: string } | string; // CTA can be object or string (in Services)

  icon?: React.ReactNode; // Hero icon (serialized)

  metrics?: Metric[];
  challenges?: Challenge[];
  solutions?: Feature[]; // Sometimes called 'features' or 'solutions'
  features?: Feature[]; // Alternate key
  faqs?: FAQ[];

  caseStudyTitle?: string;
  caseStudy?: string;
  testimonial?: Testimonial;

  // Dashboard specific (for Roles)
  dashboardInsight?: string;
  dashboardFeatures?: string[];

  // Advanced features (for Platform/Capabilities)
  mobileAdvantage?: MobileAdvantage;
  connections?: Connection[];
  extraSection?: ExtraSection;

  // Services Specific
  methodology?: Methodology[];
  benefits?: Benefit[];
  deliverables?: string[];

  // Breadcrumbs
  breadcrumbs?: Array<{ label: string; path: string }>;
};

const GenericLandingPage: React.FC<{ data: GenericLandingPageProps }> = ({ data }) => {
  const t = useTranslations('GenericLandingPage');

  // Normalize data
  const headline = data.heroHeadline || data.title;
  const subheadline = data.heroSub || data.description || data.subtitle;
  const featuresList = data.solutions || data.features || [];

  // Normalize CTA
  const ctaBtnText = typeof data.cta === 'string' ? data.cta : data.cta?.btn || t('schedule_demo');

  return (
    <div className="flex flex-col bg-slate-50 font-sans transition-colors dark:bg-slate-950">
      <HeroSection
        headline={headline}
        subheadline={subheadline}
        subtitle={data.subtitle}
        icon={data.icon}
        breadcrumbs={data.breadcrumbs}
        ctaBtnText={ctaBtnText}
      />

      {data.metrics && <MetricsSection metrics={data.metrics} />}

      {data.dashboardInsight && (
        <DashboardPreview insight={data.dashboardInsight} features={data.dashboardFeatures || []} />
      )}

      {data.methodology && <MethodologySection methodology={data.methodology} />}

      {/* Benefits Section */}
      {data.benefits && <BenefitsSection benefits={data.benefits} />}

      {/* Deliverables Section */}
      {data.deliverables && <DeliverablesSection deliverables={data.deliverables} />}

      {/* Challenges Section */}
      {data.challenges && <ChallengesSection challenges={data.challenges} />}

      {/* Solutions / Features Grid */}
      {featuresList.length > 0 && <FeatureGrid features={featuresList} />}

      {/* Mobile Advantage Section */}
      {data.mobileAdvantage && <MobileAdvantageSection mobileAdvantage={data.mobileAdvantage} />}

      {/* Connections / Integrations Section */}
      {data.connections && <ConnectionsSection connections={data.connections} />}

      {/* Table Section */}
      {data.extraSection && <TableSection extraSection={data.extraSection} />}

      {/* Testimonial / Case Study Section */}
      {(data.caseStudy || data.testimonial) && (
        <TestimonialSection
          caseStudyTitle={data.caseStudyTitle}
          caseStudy={data.caseStudy}
          testimonial={data.testimonial}
        />
      )}

      {/* FAQ Section */}
      {data.faqs && <FAQSection faqs={data.faqs} />}
    </div>
  );
};

export default GenericLandingPage;
