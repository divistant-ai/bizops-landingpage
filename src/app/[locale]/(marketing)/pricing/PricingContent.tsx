'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import PricingFeatureTable from '@/components/PricingFeatureTable';
import {
  PricingHero,
  PricingCards,
  CalculatorBanner,
  SecuritySignals,
  FAQContactSection,
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
        </Container>
      </Section>
    </div>
  );
};

export default PricingContent;
