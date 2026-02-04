'use client';

import type { IndustryData } from '@/types';
// import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ChallengesSection } from '@/components/sections/ChallengesSection';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { HeroSection } from '@/components/sections/HeroSection';
import { AppsGridSection } from '@/components/sections/industry/AppsGridSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import TestimonialsSection from '@/components/sections/shared/TestimonialsSection';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

type IndustryPageProps = {
  data: IndustryData;
};

export default function IndustryPage({ data }: IndustryPageProps) {
  console.log('IndustryPage Data:', JSON.stringify(data, null, 2));
  const t = useTranslations('GenericLandingPage');

  // Use specific translations if available, otherwise fallback to generic
  const ctaTitle = t('cta_title');
  const ctaSubtitle = t('cta_subtitle');

  // Icon can be a string (name) from transformContent or undefined
  // If undefined, default to HelpCircle
  const iconName = typeof data.icon === 'string' ? data.icon : 'HelpCircle';

  const heroBreadcrumbs = [
    { label: 'Solutions', path: '/solutions' },
    { label: data.title, path: '#' },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION - Split Layout & Premium Gradient */}
      <HeroSection
        headline={data.title}
        subheadline={data.description}
        subtitle={data.subtitle}
        icon={<DynamicIcon name={iconName} className="h-10 w-10 text-white" />}
        breadcrumbs={heroBreadcrumbs}
        ctaBtnText="Schedule Demo"
        layout="split"
        image="/images/platform/dashboard-hero.png"
      />

      {/* 2. METRICS - Blended Glassmorphism */}
      {data.metrics && data.metrics.length > 0 && (
        <MetricsSection metrics={data.metrics} blended />
      )}

      {/* 2.5. APPS OVERVIEW (New Premium Design) */}
      {data.apps && data.apps.length > 0 && (
        <AppsGridSection
          apps={data.apps as any[]}
          title="Apps Overview"
          subtitle="Fitur unggulan yang terintegrasi untuk operasional Anda."
          badge="BizOps Apps"
        />
      )}

      {/* 3. CHALLENGES - Warning Style (Problem First) */}
      {data.challenges && data.challenges.length > 0 && (
        <ChallengesSection
          challenges={data.challenges}
        />
      )}

      {/* 4. SOLUTIONS / FEATURES - Bento Grid (Solution Second) */}
      <FeatureGrid
        features={data.solutions || []}
        badge="Key Solutions"
        title="Tailored for Your Industry"
        subtitle="Specific tools designed to solve your unique operational challenges."
      />

      {/* 5. TESTIMONIALS & TRUST */}
      <TestimonialsSection />
      {/* Note: Ideally we would use data.testimonial if TestimonialsSection supported props,
          but for now standardizing on the shared section is safer for Phase 1.
          Future improvement: Pass specific testimonial prop. */}

      {/* 6. FAQs */}
      {data.faqs && data.faqs.length > 0 && <FAQSection faqs={data.faqs} />}

      {/* 7. CTA - Standardized Banner */}
      <CTABannerSection
        title={ctaTitle}
        subtitle={ctaSubtitle}
        badgeText="Ready to Transform?"
        demoBtnText="Schedule Demo"
        demoBtnLink="/demo"
        pricingBtnText="Calculate Pricing"
        trustText1="14-day free trial"
        trustText2="No credit card required"
      />
    </div>
  );
}
