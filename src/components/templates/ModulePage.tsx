'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button, SectionHeader } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { CounterUp } from '@/components/ui/motion-scroll';
import { capabilitiesData, modulesData } from '@/data/platformContent';
import {
  platformCapabilitiesTranslations,
  platformModulesTranslations,
} from '@/data/platformContentTranslations';
import { sectionPaddingHybrid } from '@/design-tokens';

type ModulePageProps = {
  moduleId: string;
  relatedModuleIds?: Array<{
    id: string;
    type: 'module' | 'capability';
  }>;
};

// Accordion FAQ Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0 dark:border-slate-700">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-blue-600 dark:hover:text-blue-400"
      >
        <span className="pr-4 text-base font-semibold text-slate-900 dark:text-white">
          {question}
        </span>
        <ChevronRight
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 dark:text-slate-400 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="pr-8 leading-relaxed text-slate-600 dark:text-slate-400">{answer}</p>
      </div>
    </div>
  );
}

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
    translation =
      platformModulesTranslations[locale]?.[
        moduleId as keyof typeof platformModulesTranslations.en
      ];
  } else if (isCapability) {
    translation =
      platformCapabilitiesTranslations[locale]?.[
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
        modTranslation =
          platformModulesTranslations[locale]?.[
            item.id as keyof typeof platformModulesTranslations.en
          ];
      } else {
        modTranslation =
          platformCapabilitiesTranslations[locale]?.[
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
        type: item.type,
      };
    })
    .filter((m) => m?.title);

  return (
    <div className="flex flex-col">
      {/* 1. HERO SECTION - Same style as HomePageContent */}
      <Section
        id="hero"
        className="relative flex min-h-[calc(100vh-8rem)] items-center justify-center overflow-hidden bg-slate-50 lg:min-h-[calc(100vh-7rem)] dark:bg-slate-950"
        noPadding
      >
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5" />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        <Container size="5xl" className="relative z-10 py-16">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center justify-center gap-2 text-sm font-medium"
          >
            <Link
              href="/platform"
              className="text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400"
            >
              {t('breadcrumb_platform')}
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="text-blue-600 dark:text-blue-400">{data.title}</span>
          </motion.div>

          <div className="mx-auto max-w-3xl text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-8 inline-flex"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 opacity-40 blur-xl" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl ring-4 shadow-blue-600/30 ring-white/50 dark:ring-slate-800/50">
                  <Icon className="h-10 w-10 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                {data.subtitle}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-3xl leading-tight font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-white"
            >
              {data.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400"
            >
              {data.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Button
                asChild
                variant="clay"
                size="lg"
                className="h-14 px-10 text-lg font-bold shadow-xl shadow-blue-500/30"
              >
                <Link href="/demo">{data.cta?.buttonLabel || t('cta_demo')}</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-14 border border-slate-200 px-8 text-base font-medium text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400"
              >
                <Link href="/contact">{t('cta_contact_sales')}</Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* 2. METRICS - Same style as HomePageContent Problems */}
      {data.metrics && data.metrics.length > 0 && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <Container size="7xl" className="relative z-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {data.metrics.map((metric: { value: string; label: string }, idx: number) => {
                const colors = [
                  {
                    bg: 'from-blue-500 to-blue-600',
                    shadow: 'shadow-blue-500/25',
                    light: 'bg-blue-50 dark:bg-blue-900/20',
                    text: 'text-blue-600 dark:text-blue-400',
                  },
                  {
                    bg: 'from-emerald-500 to-emerald-600',
                    shadow: 'shadow-emerald-500/25',
                    light: 'bg-emerald-50 dark:bg-emerald-900/20',
                    text: 'text-emerald-600 dark:text-emerald-400',
                  },
                  {
                    bg: 'from-purple-500 to-purple-600',
                    shadow: 'shadow-purple-500/25',
                    light: 'bg-purple-50 dark:bg-purple-900/20',
                    text: 'text-purple-600 dark:text-purple-400',
                  },
                ];
                const color = colors[idx % 3]!;

                return (
                  <FadeIn key={idx} delay={0.1 + idx * 0.15}>
                    <div className="group relative h-full">
                      <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div
                          className={`absolute top-0 right-0 left-0 h-1 rounded-t-2xl bg-gradient-to-r ${color.bg}`}
                        />
                        <div
                          className={`absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color.bg} text-lg font-bold text-white shadow-lg ${color.shadow}`}
                        >
                          {idx + 1}
                        </div>
                        <div className={`mt-4 mb-4 inline-flex rounded-2xl p-4 ${color.light}`}>
                          <CheckCircle2 className={`h-8 w-8 ${color.text}`} />
                        </div>
                        <div className={`mb-2 text-4xl font-bold ${color.text}`}>
                          <CounterUp to={metric.value} label={metric.label} />
                        </div>
                        <p className="text-base text-slate-600 dark:text-slate-400">
                          {metric.label}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* 3. FEATURES - Same style as HomePageContent Solutions */}
      <Section
        className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        noPadding
        containerClassName={sectionPaddingHybrid.default}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
        </div>

        <Container size="7xl" className="relative z-10">
          <FadeIn>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold tracking-wider text-blue-700 uppercase dark:bg-blue-900/30 dark:text-blue-400">
                <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                {t('features_title')}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                {t('features_subtitle')}
              </h2>
            </div>
          </FadeIn>

          <FadeInStagger>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.features?.map(
                (
                  feature: {
                    title: string;
                    desc: string;
                    icon?: React.ComponentType<{ className?: string }>;
                  },
                  idx: number,
                ) => {
                  const FeatureIcon = feature.icon || Check;
                  const featureColors = [
                    {
                      bg: 'from-blue-500 to-blue-600',
                      light: 'bg-blue-50 dark:bg-blue-900/20',
                      text: 'text-blue-600 dark:text-blue-400',
                    },
                    {
                      bg: 'from-emerald-500 to-emerald-600',
                      light: 'bg-emerald-50 dark:bg-emerald-900/20',
                      text: 'text-emerald-600 dark:text-emerald-400',
                    },
                    {
                      bg: 'from-purple-500 to-purple-600',
                      light: 'bg-purple-50 dark:bg-purple-900/20',
                      text: 'text-purple-600 dark:text-purple-400',
                    },
                    {
                      bg: 'from-amber-500 to-amber-600',
                      light: 'bg-amber-50 dark:bg-amber-900/20',
                      text: 'text-amber-600 dark:text-amber-400',
                    },
                    {
                      bg: 'from-rose-500 to-rose-600',
                      light: 'bg-rose-50 dark:bg-rose-900/20',
                      text: 'text-rose-600 dark:text-rose-400',
                    },
                    {
                      bg: 'from-cyan-500 to-cyan-600',
                      light: 'bg-cyan-50 dark:bg-cyan-900/20',
                      text: 'text-cyan-600 dark:text-cyan-400',
                    },
                  ];
                  const color = featureColors[idx % featureColors.length]!;

                  return (
                    <FadeIn key={idx} className="h-full">
                      <div className="group relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div
                          className={`absolute top-0 right-0 left-0 h-1 rounded-t-2xl bg-gradient-to-r ${color.bg}`}
                        />
                        <div className={`mb-6 inline-flex rounded-2xl p-4 ${color.light}`}>
                          <FeatureIcon className={`h-7 w-7 ${color.text}`} />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                          {feature.desc}
                        </p>
                      </div>
                    </FadeIn>
                  );
                },
              )}
            </div>
          </FadeInStagger>
        </Container>
      </Section>

      {/* 4. PROBLEMS - Same style as HomePageContent */}
      {data.problems && data.problems.length > 0 && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-rose-100 blur-3xl dark:bg-rose-900/20" />
            <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl dark:bg-orange-900/20" />
          </div>

          <Container size="7xl" className="relative z-10">
            <FadeIn>
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-100 px-5 py-2.5 text-sm font-bold tracking-wider text-rose-700 uppercase dark:bg-rose-900/30 dark:text-rose-400">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-rose-500" />
                  {t('problems_title')}
                </div>
                <h2 className="mb-6 text-3xl leading-tight font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                  {t('problems_subtitle')}
                </h2>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {data.problems.map(
                (
                  problem: {
                    title: string;
                    desc: string;
                    icon?: React.ComponentType<{ className?: string }>;
                  },
                  idx: number,
                ) => {
                  const ProblemIcon = problem.icon || HelpCircle;
                  const colors = [
                    {
                      bg: 'from-rose-500 to-red-600',
                      shadow: 'shadow-rose-500/25',
                      light: 'bg-rose-50 dark:bg-rose-900/20',
                      text: 'text-rose-600 dark:text-rose-400',
                    },
                    {
                      bg: 'from-orange-500 to-amber-600',
                      shadow: 'shadow-orange-500/25',
                      light: 'bg-orange-50 dark:bg-orange-900/20',
                      text: 'text-orange-600 dark:text-orange-400',
                    },
                    {
                      bg: 'from-red-500 to-rose-600',
                      shadow: 'shadow-red-500/25',
                      light: 'bg-red-50 dark:bg-red-900/20',
                      text: 'text-red-600 dark:text-red-400',
                    },
                  ];
                  const color = colors[idx % 3]!;

                  return (
                    <FadeIn key={idx} delay={0.1 + idx * 0.15}>
                      <div className="group relative h-full">
                        <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                          <div
                            className={`absolute top-0 right-0 left-0 h-1 rounded-t-2xl bg-gradient-to-r ${color.bg}`}
                          />
                          <div
                            className={`absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color.bg} text-lg font-bold text-white shadow-lg ${color.shadow}`}
                          >
                            {idx + 1}
                          </div>
                          <div className={`mt-4 mb-6 inline-flex rounded-2xl p-4 ${color.light}`}>
                            <ProblemIcon className={`h-8 w-8 ${color.text}`} strokeWidth={1.5} />
                          </div>
                          <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                            {problem.title}
                          </h3>
                          <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                            {problem.desc}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                },
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* 5. CONNECTIONS - Same style as HomePageContent Process */}
      {data.connections && data.connections.length > 0 && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />
          </div>

          <Container size="7xl" className="relative z-10">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-5 py-2.5 text-sm font-bold tracking-wider uppercase dark:border-blue-800 dark:from-blue-900/20 dark:to-indigo-900/20">
                <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-blue-600 dark:text-blue-400">{t('integrations_title')}</span>
              </div>
              <h2 className="mb-6 text-3xl leading-tight font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                {t('integrations_subtitle')}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.connections.map((conn: { target: string; desc: string }, idx: number) => {
                const stepColors = [
                  {
                    bg: 'bg-blue-600',
                    bgLight: 'bg-blue-50 dark:bg-blue-900/20',
                    text: 'text-blue-600 dark:text-blue-400',
                    border: 'border-blue-100 dark:border-blue-900',
                  },
                  {
                    bg: 'bg-emerald-600',
                    bgLight: 'bg-emerald-50 dark:bg-emerald-900/20',
                    text: 'text-emerald-600 dark:text-emerald-400',
                    border: 'border-emerald-100 dark:border-emerald-900',
                  },
                  {
                    bg: 'bg-amber-500',
                    bgLight: 'bg-amber-50 dark:bg-amber-900/20',
                    text: 'text-amber-600 dark:text-amber-400',
                    border: 'border-amber-100 dark:border-amber-900',
                  },
                  {
                    bg: 'bg-rose-600',
                    bgLight: 'bg-rose-50 dark:bg-rose-900/20',
                    text: 'text-rose-600 dark:text-rose-400',
                    border: 'border-rose-100 dark:border-rose-900',
                  },
                ];
                const color = stepColors[idx % stepColors.length]!;

                return (
                  <FadeIn key={idx} delay={0.1 + idx * 0.1}>
                    <div className="group h-full">
                      <div
                        className={`relative h-full rounded-2xl border bg-white dark:bg-slate-900 ${color.border} p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}
                      >
                        <div className="mb-5 flex items-center justify-between">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl ${color.bg} text-xl font-bold text-white shadow-lg`}
                          >
                            {String(idx + 1).padStart(2, '0')}
                          </div>
                        </div>
                        <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                          {conn.target}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {conn.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </Section>
      )}

      {/* 6. TESTIMONIALS - Reusable Component from HomePageContent */}
      <TestimonialsSection />

      {/* 7. FAQs */}
      {data.faqs && data.faqs.length > 0 && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
          </div>

          <Container size="7xl" className="relative z-10">
            <SectionHeader
              title={t('faqs_title')}
              description={t('faqs_subtitle')}
              className="mb-12"
            />

            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900/50">
              {data.faqs.map((faq: { question: string; answer: string }, idx: number) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 8. RELATED MODULES */}
      {relatedModules.length > 0 && (
        <Section
          className="relative overflow-hidden bg-white dark:bg-slate-950"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
          </div>

          <Container size="7xl" className="relative z-10">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-bold tracking-wider text-indigo-700 uppercase dark:bg-indigo-900/30 dark:text-indigo-400">
                {t('related_title')}
              </div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                {t('related_subtitle')} {data.title}
              </h2>
            </div>

            <FadeInStagger>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedModules.map((module, idx) => {
                  if (!module) {
                    return null;
                  }

                  const ModuleIcon = module.icon || HelpCircle;
                  const linkPath =
                    module.type === 'capability'
                      ? `/platform/capabilities/${module.id}`
                      : `/platform/modules/${module.id}`;
                  const cardColors = [
                    {
                      bg: 'from-blue-500 to-blue-600',
                      light: 'bg-blue-50 dark:bg-blue-900/20',
                      text: 'text-blue-600 dark:text-blue-400',
                    },
                    {
                      bg: 'from-emerald-500 to-emerald-600',
                      light: 'bg-emerald-50 dark:bg-emerald-900/20',
                      text: 'text-emerald-600 dark:text-emerald-400',
                    },
                    {
                      bg: 'from-purple-500 to-purple-600',
                      light: 'bg-purple-50 dark:bg-purple-900/20',
                      text: 'text-purple-600 dark:text-purple-400',
                    },
                  ];
                  const color = cardColors[idx % cardColors.length]!;

                  return (
                    <FadeIn key={module.id} className="h-full">
                      <Link href={linkPath} className="group block h-full">
                        <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                          <div
                            className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-r ${color.bg}`}
                          />
                          <div className={`mb-4 inline-flex rounded-xl p-3 ${color.light}`}>
                            <ModuleIcon className={`h-6 w-6 ${color.text}`} />
                          </div>
                          <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                            {module.title}
                          </h3>
                          {module.subtitle && (
                            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                              {module.subtitle}
                            </p>
                          )}
                          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                            {t('learn_more' as any)}
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </Link>
                    </FadeIn>
                  );
                })}
              </div>
            </FadeInStagger>
          </Container>
        </Section>
      )}

      {/* 9. CTA - Same style as HomePageContent */}
      <Section
        className="relative overflow-hidden bg-white dark:bg-slate-950"
        noPadding
        containerClassName={sectionPaddingHybrid.default}
      >
        <Container size="5xl" className="relative z-10">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl shadow-slate-900/50 sm:p-12 lg:p-16 dark:from-indigo-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-black/50">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 animate-pulse rounded-full bg-indigo-500/30 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/20 blur-2xl" />
              <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl" />

              {/* Dot pattern */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Inner glow border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 ring-inset" />

              <div className="relative z-10 mx-auto max-w-3xl text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 shadow-lg backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
                    {t('ready_to_start' as any)}
                  </span>
                </div>

                <h2 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
                  {data.cta?.text || t('final_cta_title')}
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {t('final_cta_subtitle')}
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 bg-white px-10 text-lg font-bold text-slate-900 shadow-xl shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-2xl"
                  >
                    <Link href="/demo">
                      {data.cta?.buttonLabel || t('cta_demo')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="h-14 border-2 border-white/30 px-10 text-lg font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                  >
                    <Link href="/tools/pricing-calculator">{t('cta_calculate')}</Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>{t('trust_free_trial' as any)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>{t('trust_no_commitment' as any)}</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
