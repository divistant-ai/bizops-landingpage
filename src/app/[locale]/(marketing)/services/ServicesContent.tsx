'use client';



import { Clock, Globe, Layers, Trophy, Users, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';

export default function ServicesContent() {
  const t = useTranslations('Services');

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
  ];

  const features = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: t('why_track_title'),
      desc: t('why_track_desc'),
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t('why_team_title'),
      desc: t('why_team_desc'),
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: t('why_agile_title'),
      desc: t('why_agile_desc'),
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: t('why_support_title'),
      desc: t('why_support_desc'),
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: t('why_industry_title'),
      desc: t('why_industry_desc'),
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('why_value_title'),
      desc: t('why_value_desc'),
    },
  ];

  return (
    <div className="selection:bg-primary-500/30 min-h-screen bg-slate-50 font-sans dark:bg-slate-950">
      {/* HERO SECTION */}
      <HeroSection
        headline={t('hero_title')}
        subheadline={t('hero_description')}
        subtitle={t('badge_text')}
        breadcrumbs={breadcrumbs}
        ctaBtnText={t('cta_consultation')}
        ctaBtnLink="/contact"
        secondaryBtnText={t('cta_demo')}
        secondaryBtnLink="/demo"
      />

      {/* SERVICES GRID */}
      <ServicesGridSection />

      {/* WHY CHOOSE US */}
      <FeatureGrid features={features} highlightFirstItem={false} />

      {/* FINAL CTA */}
      <CTABannerSection
        title={t('cta_title')}
        subtitle={t('cta_description')}
        badgeText={t('cta_badge')}
        demoBtnText={t('cta_contact')}
        demoBtnLink="/contact"
        pricingBtnText={t('cta_calculator')}
        pricingBtnLink="/tools/pricing-calculator"
        trustText1={t('cta_footer')} // Reusing footer text as a trust indicator or omit
        trustText2="" // Hiding others if not needed, or better pass undefined if optional? (Props required strings, need to verify optional)
        // Actually trustText props have defaults. Let's see if we can just omit.
        // But Typescript might complain if explicit undefined not allowed. They are optional in type def?
        // Checked: trustText1? string.
      />
    </div>
  );
}
