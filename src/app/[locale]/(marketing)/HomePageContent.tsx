'use client';

import { useTranslations } from 'next-intl';
// import { useState } from 'react';
import { ChallengesSection } from '@/components/sections/ChallengesSection';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import {
  AssessmentPromoSection,
  HomeHeroSection,
  HomeIndustriesSection,
  HomeProcessSection,
  HomeSolutionsSection,
  HomeUVPSection,
  IntegrationsSection,
  PricingComparisonSection,
  SecuritySection,
} from '@/components/sections/home';

import TestimonialsSection from '@/components/sections/shared/TestimonialsSection';
import { getHomeProblems } from '@/data/homeContent';

export default function HomePageContent() {
  const t = useTranslations('Homepage');

  // Get translated data for problems section
  const homeProblems = getHomeProblems(key => t(key.replace('Homepage.', '') as any));
  // const homeSolutions = getHomeSolutions(key => t(key.replace('Homepage.', '') as any));
  // const [activeTab] = useState(homeSolutions[0]?.id || '');
  // const activeSolution = homeSolutions.find(s => s.id === activeTab) || homeSolutions[0];

  return (
    <>
      {/* 1. HERO SECTION */}
      <HomeHeroSection />

      {/* 2. PROBLEMS SECTION */}
      <ChallengesSection
        challenges={homeProblems.map(p => ({
          title: p.title,
          subtitle: p.subtitle,
          desc: p.desc,
          icon: p.icon,
        }))}
      />

      {/* 3. SOLUTIONS SECTION */}
      <HomeSolutionsSection />

      {/* 3.5 ASSESSMENT BANNER */}
      <AssessmentPromoSection />

      {/* 4. VALUE PROPOSITION (UVP) */}
      <HomeUVPSection />

      {/* 5. PRICING COMPARISON */}
      <PricingComparisonSection />

      {/* 6. PROCESS SECTION */}
      <HomeProcessSection />

      {/* 7. INDUSTRIES & ROLES */}
      <HomeIndustriesSection />

      {/* 8. INFRASTRUCTURE & SECURITY */}
      <SecuritySection />

      {/* 9. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 10. INTEGRATIONS */}
      <IntegrationsSection />

      {/* 11. CTA */}
      <CTABannerSection
        title={t('cta_title')}
        subtitle={t('cta_desc')}
        badgeText={t('cta_trial')}
        demoBtnText={t('cta_demo')}
        pricingBtnText={t('cta_contact')}
        pricingBtnLink="/contact"
        trustText1={t('trust_14_days' as any)}
        trustText2={t('trust_no_credit_card')}
        trustText3={t('trust_cancel_anytime' as any)}
      />

    </>
  );
}
