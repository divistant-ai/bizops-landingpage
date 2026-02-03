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
import { capabilitiesData, modulesData } from '@/data/platformContent';
import {
  platformCapabilitiesTranslations,
  platformModulesTranslations,
} from '@/data/platformContentTranslations';

type ModulePageProps = {
  moduleId: string;
  relatedModuleIds?: Array<{
    id: string;
    type: 'module' | 'capability';
  }>;
};

export default function ModulePage({ moduleId, relatedModuleIds = [] }: ModulePageProps) {
  const t = useTranslations('ModulePage');
  const locale = useLocale() as 'en' | 'id';

  let data = modulesData[moduleId] || capabilitiesData[moduleId];
  if (!data) {
    return null;
  }

  const isModule = moduleId in modulesData;
  const isCapability = moduleId in capabilitiesData;

  let translation;
  if (isModule) {
    translation
      = platformModulesTranslations[locale]?.[
        moduleId as keyof typeof platformModulesTranslations.en
      ];
  } else if (isCapability) {
    translation
      = platformCapabilitiesTranslations[locale]?.[
        moduleId as keyof typeof platformCapabilitiesTranslations.en
      ];
  }

  if (translation) {
    data = { ...data, ...translation };
  }

  const Icon = data.icon || HelpCircle;

  const relatedModules = relatedModuleIds
    .map((item) => {
      const source = item.type === 'module' ? modulesData : capabilitiesData;
      let modData = source[item.id];
      if (!modData) {
        return null;
      }

      let modTranslation;
      if (item.type === 'module') {
        modTranslation
          = platformModulesTranslations[locale]?.[
            item.id as keyof typeof platformModulesTranslations.en
          ];
      } else {
        modTranslation
          = platformCapabilitiesTranslations[locale]?.[
            item.id as keyof typeof platformCapabilitiesTranslations.en
          ];
      }

      if (modTranslation) {
        modData = { ...modData, ...modTranslation };
      }

      return {
        id: item.id,
        title: modData?.title || '',
        subtitle: modData?.subtitle,
        icon: modData?.icon || HelpCircle,
        href:
          item.type === 'capability'
            ? `/platform/capabilities/${item.id}`
            : `/platform/modules/${item.id}`,
      };
    })
    .filter((m): m is NonNullable<typeof m> => m !== null && !!m.title);

  const heroBreadcrumbs = [
    { label: t('breadcrumb_platform'), path: '/platform' },
    { label: data.title, path: '#' },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <HeroSection
        headline={data.title}
        subheadline={data.description}
        subtitle={data.subtitle}
        icon={<Icon className="h-10 w-10 text-white" />}
        breadcrumbs={heroBreadcrumbs}
        ctaBtnText={data.cta?.buttonLabel || t('cta_demo')}
      />

      {/* 2. METRICS */}
      {data.metrics && data.metrics.length > 0 && <MetricsSection metrics={data.metrics} />}

      {/* 3. FEATURES */}
      <FeatureGrid features={data.features || []} />

      {/* 4. PROBLEMS / CHALLENGES */}
      {data.problems && data.problems.length > 0 && (
        <ChallengesSection
          challenges={data.problems.map((p: any) => ({
            title: p.title,
            desc: p.desc,
          }))}
        />
      )}

      {/* 5. CONNECTIONS */}
      {data.connections && data.connections.length > 0 && (
        <ConnectionsSection
          connections={data.connections.map((c: any) => ({
            target: c.target,
            desc: c.desc,
          }))}
        />
      )}

      {/* 6. TESTIMONIALS - Global Component */}
      <TestimonialsSection />

      {/* 7. FAQs */}
      {data.faqs && data.faqs.length > 0 && <FAQSection faqs={data.faqs} />}

      {/* 8. RELATED MODULES */}
      {relatedModules.length > 0 && (
        <RelatedModulesSection
          title={data.title}
          subtitle={t('related_subtitle')}
          badge={t('related_title')}
          modules={relatedModules}
          learnMoreText={t('learn_more')}
        />
      )}

      {/* 9. CTA */}
      <CTABannerSection
        title={data.cta?.text || t('final_cta_title')}
        subtitle={t('final_cta_subtitle')}
        badgeText={t('ready_to_start')}
        demoBtnText={data.cta?.buttonLabel || t('cta_demo')}
        pricingBtnText={t('cta_calculate')}
        trustText1={t('trust_free_trial')}
        trustText2={t('trust_no_commitment')}
      />
    </div>
  );
}
