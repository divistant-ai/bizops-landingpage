'use client';

import { ArrowRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import { ConnectionsSection } from '@/components/sections/ConnectionsSection';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { ModulesBentoGrid } from '@/components/sections/platform/ModulesBentoGrid';
import { PlatformHero } from '@/components/sections/platform/PlatformHero';
import { UnifiedArchitectureSection } from '@/components/sections/platform/UnifiedArchitectureSection';
import { Button } from '@/components/ui';
import {
  capabilitiesData,
  ecosystemData,
  modulesData,
} from '@/data/platformContent';
import {
  platformCapabilitiesTranslations,
  platformModulesTranslations,
} from '@/data/platformContentTranslations';

export default function PlatformContent() {
  const t = useTranslations('Platform');
  const locale = useLocale() as 'en' | 'id';

  // --- DATA PREPARATION ---
  const modules = Object.entries(modulesData).map(([key, val]) => ({
    id: key,
    ...val,
    ...(platformModulesTranslations[locale][key as keyof typeof platformModulesTranslations.en] || {}),
  }));

  const capabilities = Object.entries(capabilitiesData).map(([key, val]) => ({
    id: key,
    ...val,
    ...(platformCapabilitiesTranslations[locale][key as keyof typeof platformCapabilitiesTranslations.en] || {}),
  }));

  // Split capabilities to match mega menu structure (navHelpers.ts)
  // Capabilities Tab: automation-ai, multi-company, portals, analytics, mobile, low-code, collaboration
  const capabilitiesItems = capabilities.filter(cap =>
    ['automation-ai', 'multi-company', 'portals', 'analytics', 'mobile', 'low-code', 'collaboration'].includes(cap.id),
  );
  // Technology Tab: security, integration, self-hosted, architecture
  const technologyItems = capabilities.filter(cap =>
    ['security', 'integration', 'self-hosted', 'architecture'].includes(cap.id),
  );

  // Ecosystem integrations
  const ecosystem = ecosystemData.map(item => ({
    target: item.target,
    desc: t(item.descKey as any),
  }));

  // --- RENDER ---
  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION */}
      <PlatformHero />

      {/* 2. UNIFIED ARCHITECTURE (The "Why") */}
      <UnifiedArchitectureSection />

      {/* STORY BRIDGE 1: ARCHITECTURE -> MODULES */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 dark:from-slate-900 dark:to-slate-950">
        <Container size="4xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-16 w-px bg-gradient-to-b from-blue-500/50 to-blue-500 dark:from-blue-400/30 dark:to-blue-400" />
            <div className="rounded-2xl border border-blue-100 bg-blue-50/50 px-8 py-6 backdrop-blur-sm dark:border-blue-900/30 dark:bg-blue-950/30">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t('story_bridge_1_title')}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {t('story_bridge_1_desc')}
              </p>
            </div>
            <div className="mt-6 h-16 w-px bg-gradient-to-b from-blue-500 to-transparent dark:from-blue-400 dark:to-transparent" />
          </div>
        </Container>
      </div>

      {/* 3. MODULES BENTO GRID (The "What") */}
      <ModulesBentoGrid modules={modules} />

      {/* STORY BRIDGE 2: MODULES -> CAPABILITIES */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 dark:from-slate-950 dark:to-slate-900">
        <Container size="4xl">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 h-16 w-px bg-gradient-to-b from-transparent via-emerald-500 to-emerald-500 dark:via-emerald-400 dark:to-emerald-400" />
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 px-8 py-6 backdrop-blur-sm dark:border-emerald-900/30 dark:bg-emerald-950/30">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {t('story_bridge_2_title')}
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                {t('story_bridge_2_desc')}
              </p>
            </div>
            <div className="mt-6 h-16 w-px bg-gradient-to-b from-emerald-500 to-transparent dark:from-emerald-400 dark:to-transparent" />
          </div>
        </Container>
      </div>

      {/* 4. PLATFORM CAPABILITIES - Premium Card Grid */}
      <Section className="bg-white py-20 dark:bg-slate-900">
        <Container size="7xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-4 py-2 text-sm font-semibold text-blue-600 ring-1 ring-blue-500/20 dark:from-blue-500/20 dark:to-cyan-500/20 dark:text-blue-400 dark:ring-blue-400/30">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
              Platform Capabilities
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
              {t('capabilities_title')}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('capabilities_subtitle')}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {capabilitiesItems.map((capability, index) => {
              const Icon = capability.icon;
              const colors = [
                { bg: 'from-blue-500 to-cyan-500', ring: 'ring-blue-500/20', hover: 'group-hover:from-blue-600 group-hover:to-cyan-600' },
                { bg: 'from-violet-500 to-purple-500', ring: 'ring-violet-500/20', hover: 'group-hover:from-violet-600 group-hover:to-purple-600' },
                { bg: 'from-emerald-500 to-teal-500', ring: 'ring-emerald-500/20', hover: 'group-hover:from-emerald-600 group-hover:to-teal-600' },
                { bg: 'from-orange-500 to-amber-500', ring: 'ring-orange-500/20', hover: 'group-hover:from-orange-600 group-hover:to-amber-600' },
                { bg: 'from-pink-500 to-rose-500', ring: 'ring-pink-500/20', hover: 'group-hover:from-pink-600 group-hover:to-rose-600' },
                { bg: 'from-indigo-500 to-blue-500', ring: 'ring-indigo-500/20', hover: 'group-hover:from-indigo-600 group-hover:to-blue-600' },
                { bg: 'from-cyan-500 to-blue-500', ring: 'ring-cyan-500/20', hover: 'group-hover:from-cyan-600 group-hover:to-blue-600' },
              ];
              const colorScheme = colors[index % colors.length];

              return (
                <Link
                  key={capability.id}
                  href={`/platform/capabilities/${capability.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-700/50 dark:bg-slate-800/50 dark:hover:border-slate-600 dark:hover:shadow-2xl dark:hover:shadow-slate-900/50"
                >
                  {/* Gradient accent line */}
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colorScheme?.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />

                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorScheme?.bg} ${colorScheme?.hover} shadow-lg ring-4 ${colorScheme?.ring} transition-all duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-slate-700 dark:text-white dark:group-hover:text-slate-100">
                    {capability.title}
                  </h3>
                  <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {capability.subtitle}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:text-blue-400">
                    {locale === 'id' ? 'Pelajari' : 'Learn more'}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. TECHNOLOGY STACK - Dark Premium Section */}
      <Section className="relative overflow-hidden bg-slate-900 py-24 dark:bg-slate-950">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

        <Container size="6xl" className="relative">
          <div className="mb-16 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="text-center md:text-left">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400 ring-1 ring-indigo-500/30">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
                </span>
                Technology Stack
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {t('technology_title')}
              </h2>
              <p className="mt-4 max-w-xl text-lg text-slate-400">
                {t('technology_subtitle')}
              </p>
            </div>
            <Button variant="outline" size="lg" className="border-slate-700 bg-transparent text-white hover:bg-slate-800" asChild>
              <Link href="/platform/technology">
                {t('learn_more')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technologyItems.map((capability, index) => {
              const Icon = capability.icon;
              const gradients = [
                'from-violet-500 to-purple-600',
                'from-emerald-500 to-teal-600',
                'from-blue-500 to-indigo-600',
                'from-amber-500 to-orange-600',
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <Link
                  key={capability.id}
                  href={`/platform/technologies/${capability.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-indigo-900/20"
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${gradient} opacity-0 blur transition-opacity duration-300 group-hover:opacity-20`} />

                  <div className="relative">
                    <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-lg shadow-slate-900/50`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors">
                      {capability.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-slate-400">
                      {capability.subtitle || capability.description}
                    </p>
                    <div className="mt-5 flex items-center gap-1 text-sm font-medium text-indigo-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      {locale === 'id' ? 'Selengkapnya' : 'Explore'}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 6. ECOSYSTEM INTEGRATIONS */}
      <ConnectionsSection connections={ecosystem} />

      {/* 7. CTA SECTION */}
      <CTABannerSection
        badgeText={t('trusted_badge')}
        title={t('cta_title')}
        subtitle={t('cta_description')}
        demoBtnText={t('cta_request_demo')}
        demoBtnLink="/demo"
        pricingBtnText={t('cta_contact_sales')}
        pricingBtnLink="/contact"
        trustText1="Enterprise Support"
        trustText2="SLA Guarantee"
      />
    </div>
  );
}
