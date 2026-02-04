'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import PricingFeatureTable from '@/components/PricingFeatureTable';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import {
  CalculatorBanner,
  FAQContactSection,
  PricingCards,
  PricingHero,
  SecuritySignals,
} from '@/components/sections/pricing';

const PricingContent = () => {
  const t = useTranslations('Pricing');
  const [annual, setAnnual] = useState(true);

  // Translated FAQ data
  const translatedFaqs = [
    { q: t('faq_1_q'), a: t('faq_1_a') },
    { q: t('faq_2_q'), a: t('faq_2_a') },
    { q: t('faq_3_q'), a: t('faq_3_a') },
    { q: t('faq_4_q'), a: t('faq_4_a') },
    { q: t('faq_5_q'), a: t('faq_5_a') },
  ];

  return (
    <div className="bg-white transition-colors duration-500 dark:bg-slate-950">
      {/* --- HERO SECTION --- */}
      <PricingHero annual={annual} setAnnual={setAnnual} />

      <Section className="relative z-20 -mt-12 pt-0">
        <Container size="7xl">
          {/* --- PRICING CARDS --- */}
          <PricingCards annual={annual} />

          {/* --- CALCULATOR BANNER --- */}
          <CalculatorBanner />

          {/* --- TRUST SIGNALS GRID --- */}
          <SecuritySignals />

          {/* --- COMPARISON TABLE --- */}
          <div className="mb-32 scroll-mt-24" id="features">
            <PricingFeatureTable />
          </div>

          {/* --- FAQ & CONTACT --- */}
          <FAQContactSection faqs={translatedFaqs} />

          {/* --- FINAL CTA --- */}
          <div className="pt-24 pb-24">
            <CTABannerSection
              badgeText={t('cta_badge' as any)}
              title={t('cta_title' as any)}
              subtitle={t('cta_desc' as any)}
              demoBtnText={t('cta_trial' as any)}
              demoBtnLink="/register"
              pricingBtnText={t('cta_contact' as any)}
              pricingBtnLink="/contact"
              trustText1="Free Trial"
              trustText2="No Credit Card"
            />
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default PricingContent;
