'use client';

import type { IndustryData, RoleData } from '@/types';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import { Badge, CardSlider, SpotlightCard, Stack } from '@/components/ui';
import { BouncyLink } from '@/components/ui/BouncyLink';
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggeredText } from '@/components/ui/motion-text';
import { industriesData, rolesData } from '@/data/solutionsContent';
import { industriesTranslations, rolesTranslations } from '@/data/solutionsContentTranslations';

export default function SolutionsContent() {
  const t = useTranslations('Solutions');
  const locale = useLocale() as 'en' | 'id';

  // Merge base data with translations
  const getIndustryData = (id: string): IndustryData => {
    const baseData = industriesData[id];
    const translationData = industriesTranslations[locale][id];
    return { ...baseData, ...translationData } as IndustryData;
  };

  const getRoleData = (id: string): RoleData => {
    const baseData = rolesData[id];
    const translationData = rolesTranslations[locale][id];
    return { ...baseData, ...translationData } as RoleData;
  };

  const industries = Object.keys(industriesData).map((key) => ({
    id: key,
    ...getIndustryData(key),
  }));

  const roles = Object.keys(rolesData).map((key) => ({
    id: key,
    ...getRoleData(key),
  }));

  // Color mapping for industries - Design System: Light backgrounds with dark text
  const getColor = (id: string) => {
    const map: Record<string, string> = {
      construction: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-400',
      retail: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400',
      outsourcing: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400',
      consulting: 'bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-400',
      manufacturing: 'bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-400',
      enterprise: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
    };
    return map[id] || 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300';
  };

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* 1. HERO */}
      <div className="relative overflow-hidden border-b border-slate-200 bg-slate-50 pt-24 pb-16 lg:pt-48 lg:pb-32 dark:border-slate-900 dark:bg-slate-950">
        {/* Abstract Background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="bg-primary-900/20 pointer-events-none absolute top-0 left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full blur-[120px]"></div>

        <Container size="7xl" className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Badge className="mb-8 border-slate-300 dark:border-white">
              <span className="text-slate-900 dark:text-white">{t('hero.badge')}</span>
            </Badge>
          </motion.div>

          <h1 className="mb-8 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 drop-shadow-sm md:text-6xl lg:text-7xl dark:text-white">
            <StaggeredText
              text={`${t('hero.title_part1')} `}
              className="mr-3 inline-flex flex-wrap justify-center"
              delay={0.2}
            />
            <span className="dark:from-primary-400 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent dark:to-blue-400">
              {t('hero.title_highlight')}
              {t('hero.title_part2')}
            </span>
          </h1>

          <FadeIn delay={0.3}>
            <p className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed font-light text-slate-600 md:text-xl dark:text-slate-400">
              {t('hero.subtitle')}
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <Stack direction="vertical" gap={4} className="mb-0 justify-center sm:flex-row">
              <BouncyLink
                href="/contact"
                className="bg-primary-600 hover:bg-primary-500 h-14 w-full border-none px-8 text-lg text-white shadow-[0_0_30px_rgba(14,165,233,0.3)] sm:w-auto"
              >
                {t('cta_primary')}
              </BouncyLink>
              <BouncyLink
                href="/demo"
                className="h-14 w-full bg-white px-8 text-lg text-slate-900 hover:bg-slate-100 sm:w-auto dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
              >
                <span className="text-slate-900 dark:text-white">{t('cta_secondary')}</span>
              </BouncyLink>
            </Stack>
          </FadeIn>
        </Container>
      </div>

      {/* 2. INDUSTRY SECTION */}
      <Section className="relative overflow-hidden bg-white py-16 md:py-24 dark:bg-slate-950">
        <Container size="7xl">
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('industry_section.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('industry_section.subtitle')}
            </p>
          </FadeIn>

          <div className="mb-16 md:mb-32">
            <CardSlider
              desktopClassName="md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              mobileItemWidth="w-[85vw] sm:w-[350px]"
            >
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                return (
                  <FadeIn key={ind.id} delay={idx * 0.1} className="h-full">
                    <Link href={`/solutions/${ind.id}`} className="group block h-full">
                      <SpotlightCard className="hover:shadow-primary-500/10 relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex h-full flex-col p-8">
                          <div
                            className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${getColor(ind.id)} mb-6 ring-1 ring-black/5 transition-transform group-hover:scale-110`}
                          >
                            <Icon className="h-7 w-7" />
                          </div>
                          <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3 text-2xl font-bold text-slate-900 transition-colors dark:text-white">
                            {ind.title}
                          </h3>
                          <p className="mb-6 line-clamp-3 flex-grow leading-relaxed text-slate-600 dark:text-slate-400">
                            {ind.description}
                          </p>
                          <div className="text-primary-600 dark:text-primary-400 mt-auto flex items-center text-sm font-semibold transition-transform group-hover:translate-x-2">
                            {t('explore_industry')} <ChevronRight className="ml-1 h-4 w-4" />
                          </div>
                        </div>
                      </SpotlightCard>
                    </Link>
                  </FadeIn>
                );
              })}
            </CardSlider>
          </div>

          {/* ROLE SECTION */}
          <FadeIn className="mx-auto mb-12 max-w-3xl text-center md:mb-20">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('role_section.title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('role_section.subtitle')}
            </p>
          </FadeIn>

          <CardSlider
            desktopClassName="md:grid md:grid-cols-3 lg:grid-cols-5 gap-6"
            mobileItemWidth="w-[75vw] sm:w-[280px]"
          >
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Link key={role.id} href={`/role/${role.id}`} className="group block h-full">
                  <div className="hover:border-primary-300 dark:hover:border-primary-700 relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                    <div className="bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 ring-primary-100 dark:ring-primary-800 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-all group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                      {role.title}
                    </h3>
                    <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
                      {role.subtitle}
                    </p>
                    <div className="text-primary-600 flex items-center justify-center text-sm font-medium">
                      <span className="dark:text-white">{t('explore_role')}</span>{' '}
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </CardSlider>
        </Container>
      </Section>

      {/* 3. FINAL CTA */}
      <Section className="relative overflow-hidden bg-slate-50 py-20 md:py-32 dark:bg-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]"></div>

        <Container size="4xl" className="relative z-10 text-center">
          <Badge
            variant="outline-white"
            className="mb-6 border-slate-300 text-slate-700 dark:border-white/20 dark:text-white"
          >
            {t('final_cta.badge')}
          </Badge>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {t('final_cta.title_part1')}{' '}
            <span className="text-primary-600 dark:text-primary-400">
              {t('final_cta.title_highlight')}
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
            {t('final_cta.subtitle')}
          </p>
          <Stack direction="vertical" gap={4} className="justify-center sm:flex-row">
            <BouncyLink
              href="/demo"
              className="bg-primary-600 hover:bg-primary-700 dark:text-primary-700 h-16 w-full px-10 text-xl font-bold text-white sm:w-auto dark:bg-white dark:hover:bg-slate-100"
            >
              <span className="text-white dark:text-slate-900">
                {t('final_cta.button_primary')}
              </span>
            </BouncyLink>
            <BouncyLink
              href="/tools/pricing-calculator"
              className="h-16 w-full border-2 border-slate-300 bg-white px-10 text-xl text-slate-900 hover:bg-slate-100 sm:w-auto dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white/10"
            >
              <span className="text-slate-900 dark:text-white">
                {t('final_cta.button_secondary')}
              </span>
            </BouncyLink>
          </Stack>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            {t('final_cta.fine_print')}
          </p>
        </Container>
      </Section>
    </div>
  );
}
