'use client';

import type { RoleData } from '@/types';
import { useTranslations } from 'next-intl';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { DashboardPreview } from '@/components/sections/DashboardPreview'; // Unique to Roles
// import { FeatureGrid } from '@/components/sections/FeatureGrid'; // Mapping dashboardFeatures to this
import { HeroSection } from '@/components/sections/HeroSection';
import { AppsGridSection } from '@/components/sections/industry/AppsGridSection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import TestimonialsSection from '@/components/sections/shared/TestimonialsSection';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { modulesData } from '@/data/platformContent'; // To map app IDs to App Data

type RolePageProps = {
  data: RoleData;
};

export default function RolePage({ data }: RolePageProps) {
  const t = useTranslations('GenericLandingPage');

  // fallback translations
  const ctaTitle = t('cta_title');
  const ctaSubtitle = t('cta_subtitle');

  // Breadcrumbs
  const heroBreadcrumbs = [
    { label: 'Roles', path: '#' }, // Could point to a roles overview if it existed
    { label: data.title, path: '#' },
  ];

  // Map app IDs to actual App Data for AppsGridSection
  // Note: This relies on modulesData having the apps. If not found, we filter them out.
  const relevantApps = data.apps?.map((appId) => {
    // Basic mapping logic, assuming modulesData keys are the IDs
    // We might need a better mapping strategy if IDs don't match exactly
    // For now, let's try to find them in modulesData keys
    const foundModule = Object.entries(modulesData).find(([key]) => key === appId || key.includes(appId))?.[1];

    if (foundModule) {
      return {
        id: appId,
        title: foundModule.title,
        subtitle: foundModule.subtitle,
        icon: foundModule.icon,
      };
    }
    // Fallback or skip if not found
    return null;
  }).filter(Boolean) as any[];

  // Prepare Challenges for FeatureGrid or dedicated section
  // RoleData challenges have { pain, gain, etc. }
  // We can map this to the ChallengesSection format { title, desc }
  const challengesMapped = data.challenges?.map(c => ({
    title: c.pain || c.title || '',
    desc: c.context || c.desc || '',
    // You could also use c.gain as the positive flip
  })) || [];

  // Prepare Dashboard Features as Solutions
  // const solutionsMapped = data.dashboardFeatures?.map(f => ({
  //   title: f,
  //   desc: 'Key feature accessible directly from your command center.', // Generic desc as data doesn't have it
  //   icon: undefined
  // })) || [];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION - Split Layout */}
      <HeroSection
        headline={data.heroHeadline || data.title}
        subheadline={data.heroSub || data.subtitle}
        subtitle={data.subtitle}
        icon={<DynamicIcon name={typeof data.icon === 'string' ? data.icon : 'Layout'} className="h-10 w-10 text-white" />} // Default icon
        breadcrumbs={heroBreadcrumbs}
        ctaBtnText={data.cta?.btn || 'Schedule Demo'}
        layout="split"
        // Use a generic dashboard image if no specific one is provided in data
        image="/images/platform/dashboard-hero.png"
      />

      {/* 2. METRICS */}
      {data.metrics && data.metrics.length > 0 && (
        <MetricsSection metrics={data.metrics} blended />
      )}

      {/* 3. DASHBOARD PREVIEW (Unique to Roles) */}
      {data.dashboardInsight && (
        <DashboardPreview
          insight={data.dashboardInsight}
          features={data.dashboardFeatures || []}
        />
      )}

      {/* 4. APPS OVERVIEW */}
      {relevantApps && relevantApps.length > 0 && (
        <AppsGridSection
          apps={relevantApps}
          title="Recommended Apps"
          subtitle={`Essential tools for ${data.title}`}
          badge="Role Toolkit"
        />
      )}

      {/* 5. CHALLENGES (Pain Points) */}
      {challengesMapped.length > 0 && (
        <div className="bg-slate-50 py-12 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Pains</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Challenges we solve for you.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {data.challenges?.map((c, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-bold text-red-500">{c.pain}</h3>
                      <p className="mb-6 text-slate-600 dark:text-slate-400">{c.context}</p>

                      <div className="border-l-4 border-emerald-500 pl-4">
                        <h4 className="mb-1 text-lg font-bold text-emerald-600">{c.gain}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{c.gainDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 7. CTA */}
      <CTABannerSection
        title={data.cta?.head || ctaTitle}
        subtitle={ctaSubtitle}
        badgeText="Ready to Upgrade?"
        demoBtnText={data.cta?.btn || 'Get Started'}
        demoBtnLink="/demo"
        pricingBtnText="View Pricing"
        trustText1="Free Trial Available"
        trustText2="No Credit Card"
      />
    </div>
  );
}
