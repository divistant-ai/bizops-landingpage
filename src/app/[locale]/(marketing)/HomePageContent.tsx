'use client';

import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { ChallengesSection } from '@/components/sections/ChallengesSection';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import {
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
import { getHomeProblems, getHomeSolutions } from '@/data/homeContent';

// Sample YouTube video IDs for each module
const MODULE_VIDEO_IDS: Record<string, string> = {
  hr: 'dQw4w9WgXcQ',
  finance: 'jNQXAC9IVRw',
  operations: 'kJQP7kiw5Fk',
  sales: 'RgKAFK5djSk',
  projects: '9bZkp7q19f0',
};

export default function HomePageContent() {
  const t = useTranslations('Homepage');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Get translated data for problems section
  const homeProblems = getHomeProblems(key => t(key.replace('Homepage.', '') as any));
  const homeSolutions = getHomeSolutions(key => t(key.replace('Homepage.', '') as any));
  const [activeTab] = useState(homeSolutions[0]?.id || '');
  const activeSolution = homeSolutions.find(s => s.id === activeTab) || homeSolutions[0];

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
      <HomeSolutionsSection onOpenVideoModal={() => setIsVideoModalOpen(true)} />

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

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="animate-in zoom-in-95 relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl duration-300"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 z-10 p-2 text-white/80 transition-colors hover:text-white"
              aria-label="Tutup video"
            >
              <X className="h-8 w-8" />
            </button>

            <iframe
              src={`https://www.youtube.com/embed/${MODULE_VIDEO_IDS[activeSolution?.id || 'hr'] || 'dQw4w9WgXcQ'}?autoplay=1&rel=0`}
              title={`Demo video ${activeSolution?.label}`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
