'use client';

import { HelpCircle } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { ChallengesSection } from '@/components/sections/ChallengesSection';
import { ConnectionsSection } from '@/components/sections/ConnectionsSection';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { HeroSection } from '@/components/sections/HeroSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { RelatedModulesSection } from '@/components/sections/RelatedModulesSection';
import TestimonialsSection from '@/components/sections/shared/TestimonialsSection';
import { UseCasesSection } from '@/components/sections/UseCasesSection';
import { capabilitiesData, featuresData, modulesData } from '@/data/platformContent';
import { featuresPagesTranslations } from '@/data/platformContentTranslations';

type PlatformPageProps = {
  featureId: string;
  relatedModuleIds?: Array<{
    id: string;
    type: 'module' | 'capability' | 'feature';
  }>;
};

export default function PlatformPage({ featureId, relatedModuleIds = [] }: PlatformPageProps) {
  const t = useTranslations('ModulePage');
  const locale = useLocale() as 'en' | 'id';

  // Get base data
  const baseData = featuresData[featureId];
  if (!baseData) {
    return null;
  }

  // Get translation
  const translation = locale === 'id'
    ? (featuresPagesTranslations.id?.[featureId as keyof typeof featuresPagesTranslations.id] as any)
    : null;

  // Helper to merge arrays with translations while preserving icons
  const mergeArrayWithTranslations = <T extends { icon?: any }>(
    baseArray: T[] | undefined,
    translatedArray: Partial<T>[] | undefined,
  ): T[] => {
    if (!baseArray) {
      return [];
    }
    if (!translatedArray) {
      return baseArray;
    }

    return baseArray.map((item, index) => ({
      ...item,
      ...(translatedArray[index] || {}),
      icon: item.icon, // Always keep base icon
    }));
  };

  // Build merged data - prioritize translations for text, keep base for components
  const data = {
    ...baseData,
    ...(translation ? {
      title: translation.title || baseData.title,
      titleHighlight: translation.titleHighlight || baseData.titleHighlight,
      subtitle: translation.subtitle || baseData.subtitle,
      description: translation.description || baseData.description,
      featuresBadge: translation.featuresBadge || baseData.featuresBadge,
      featuresTitle: translation.featuresTitle || baseData.featuresTitle,
      featuresSubtitle: translation.featuresSubtitle || baseData.featuresSubtitle,
      useCasesBadge: translation.useCasesBadge || baseData.useCasesBadge,
      useCasesTitle: translation.useCasesTitle || baseData.useCasesTitle,
      useCasesSubtitle: translation.useCasesSubtitle || baseData.useCasesSubtitle,
      cta: translation.cta ? { ...baseData.cta, ...translation.cta } : baseData.cta,
    } : {}),
    // Properly merge arrays preserving icons
    features: mergeArrayWithTranslations(baseData.features, translation?.features as any),
    useCases: mergeArrayWithTranslations(baseData.useCases, translation?.useCases as any),
  };

  const Icon = data.icon || HelpCircle;

  // Build related modules data
  const relatedModules = relatedModuleIds
    .map((item) => {
      // Try to find data in all data sources
      // Note: modulesData and capabilitiesData keys might need adjustment if they don't match IDs exactly
      const sourceData
        = featuresData[item.id]
        || modulesData[item.id]
        || capabilitiesData[item.id];

      if (!sourceData) {
        return null;
      }

      // Determine href based on type
      let href = '#';
      if (item.type === 'feature') {
        href = `/platform/${item.id}`;
      } else if (item.type === 'module') {
        href = `/platform/modules/${item.id}`;
      } else if (item.type === 'capability') {
        href = `/platform/capabilities/${item.id}`;
      }

      return {
        id: sourceData.title, // using title as ID for key if needed, or keeping unique string
        title: sourceData.title,
        subtitle: sourceData.subtitle,
        icon: sourceData.icon,
        href,
        image: '/images/platform/module-preview-card.png', // Default generic image
      };
    })
    .filter((m): m is NonNullable<typeof m> => m !== null);

  const heroBreadcrumbs = [
    { label: t('breadcrumb_platform'), path: '/platform' },
    { label: data.title, path: '#' },
  ];

  // Build hero headline with highlight
  const heroHeadline = data.titleHighlight
    ? `${data.title} ${data.titleHighlight}`
    : data.title;

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <HeroSection
        headline={heroHeadline}
        subheadline={data.description}
        subtitle={data.subtitle}
        icon={<Icon className="h-10 w-10 text-white" />}
        breadcrumbs={heroBreadcrumbs}
        ctaBtnText={data.cta?.demoBtn || t('cta_demo')}
        layout="split"
        image="/images/platform/dashboard-hero.png"
      />

      {/* 2. METRICS */}
      {data.metrics && data.metrics.length > 0 && <MetricsSection metrics={data.metrics} blended />}

      {/* 3. FEATURES */}
      <FeatureGrid
        features={data.features || []}
        badge={data.featuresBadge}
        title={data.featuresTitle}
        subtitle={data.featuresSubtitle}
      />

      {/* 4. USE CASES / EXAMPLES */}
      {data.useCases && data.useCases.length > 0 && (
        <UseCasesSection
          useCases={data.useCases}
          badge={data.useCasesBadge}
          title={data.useCasesTitle}
          subtitle={data.useCasesSubtitle}
        />
      )}

      {/* 5. PROBLEMS / CHALLENGES */}
      {data.problems && data.problems.length > 0 && (
        <ChallengesSection
          challenges={data.problems.map(p => ({
            title: p.title,
            desc: p.desc,
          }))}
        />
      )}

      {/* 6. CONNECTIONS */}
      {data.connections && data.connections.length > 0 && (
        <ConnectionsSection
          connections={data.connections.map(c => ({
            target: c.target,
            desc: c.desc,
          }))}
        />
      )}

      {/* 7. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 8. FAQs */}
      {data.faqs && data.faqs.length > 0 && <FAQSection faqs={data.faqs} />}

      {/* 9. RELATED MODULES */}
      {relatedModules.length > 0 && (
        <RelatedModulesSection
          title={data.title}
          subtitle={t('related_subtitle')}
          badge={t('related_title')}
          modules={relatedModules}
          learnMoreText={t('learn_more')}
        />
      )}

      {/* 10. CTA */}
      <CTABannerSection
        title={data.cta?.title || t('final_cta_title')}
        subtitle={data.cta?.subtitle || t('final_cta_subtitle')}
        badgeText={data.cta?.badge || t('ready_to_start')}
        demoBtnText={data.cta?.demoBtn || t('cta_demo')}
        demoBtnLink={data.cta?.demoLink || '/demo'}
        pricingBtnText={data.cta?.pricingBtn || t('cta_calculate')}
        trustText1={data.cta?.trustText1 || t('trust_free_trial')}
        trustText2={data.cta?.trustText2 || t('trust_no_commitment')}
      />
    </div>
  );
}
