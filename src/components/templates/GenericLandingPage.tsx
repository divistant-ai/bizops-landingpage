'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Quote,
  Share2,
  Smartphone,
  Table as TableIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import { Container, Section } from '@/components/layout';
import { Button, SectionHeader } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

// Accordion FAQ Component - Same as ModulePage
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

// Flexible types to accommodate different data structures (Industries vs Roles vs Services)
type Metric = {
  value: string;
  label: string;
};

type Feature = {
  title: string;
  desc: string; // or description
  description?: string; // alternate key
  icon?: React.ReactNode; // Changed from any to ReactNode for serialized icons
};

type Challenge = {
  title?: string;
  desc?: string;
  // Alternate structure for Roles data
  pain?: string;
  context?: string;
  gain?: string;
  gainDesc?: string;
};

type FAQ = {
  question: string;
  answer: string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

type MobileAdvantage = {
  title: string;
  desc: string;
};

type Connection = {
  target: string;
  desc: string;
};

type ExtraSection = {
  title: string;
  type: string; // 'table'
  headers: string[];
  rows: string[][];
};

type Methodology = {
  title: string;
  desc: string;
};

type Benefit = {
  title: string;
  desc: string;
};

export type GenericLandingPageProps = {
  title: string; // Page Title
  subtitle?: string;
  description?: string;

  // Hero variations
  heroHeadline?: string;
  heroSub?: string;
  cta?: { btn: string; head?: string } | string; // CTA can be object or string (in Services)

  icon?: React.ReactNode; // Hero icon (serialized)

  metrics?: Metric[];
  challenges?: Challenge[];
  solutions?: Feature[]; // Sometimes called 'features' or 'solutions'
  features?: Feature[]; // Alternate key
  faqs?: FAQ[];

  caseStudyTitle?: string;
  caseStudy?: string;
  testimonial?: Testimonial;

  // Dashboard specific (for Roles)
  dashboardInsight?: string;
  dashboardFeatures?: string[];

  // Advanced features (for Platform/Capabilities)
  mobileAdvantage?: MobileAdvantage;
  connections?: Connection[];
  extraSection?: ExtraSection;

  // Services Specific
  methodology?: Methodology[];
  benefits?: Benefit[];
  deliverables?: string[];

  // Breadcrumbs
  breadcrumbs?: Array<{ label: string; path: string }>;
};

const GenericLandingPage: React.FC<{ data: GenericLandingPageProps }> = ({ data }) => {
  const t = useTranslations('GenericLandingPage');

  // Normalize data
  const headline = data.heroHeadline || data.title;
  const subheadline = data.heroSub || data.description || data.subtitle;
  const featuresList = data.solutions || data.features || [];

  // Normalize CTA
  const ctaBtnText = typeof data.cta === 'string' ? data.cta : data.cta?.btn || t('schedule_demo');
  const ctaHeadText
    = typeof data.cta === 'string' ? t('ready_to_start') : data.cta?.head || t('ready_to_transform');

  return (
    <div className="flex flex-col bg-slate-50 font-sans transition-colors dark:bg-slate-950">
      {/* --- HERO SECTION --- */}
      <Section
        id="hero"
        className="relative flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden bg-slate-50 lg:min-h-[calc(100vh-7rem)] dark:bg-slate-950"
        noPadding
      >
        {/* Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5" />
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        <Container size="5xl" className="relative z-10 py-16">
          {data.breadcrumbs && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex items-center justify-center"
            >
              <Breadcrumbs items={data.breadcrumbs} />
            </motion.div>
          )}

          <div className="mx-auto max-w-3xl text-center">
            {/* Icon */}
            {data.icon && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="mb-8 inline-flex"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 opacity-40 blur-xl" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-2xl ring-4 shadow-blue-600/30 ring-white/50 dark:ring-slate-800/50">
                    <span className="text-white">{data.icon}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Badge */}
            {data.subtitle && (
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
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-3xl leading-tight font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-white"
            >
              {headline}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400"
            >
              {subheadline}
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
                <Link href="/demo">
                  {ctaBtnText}
                  {' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="h-14 border border-slate-200 px-8 text-base font-medium text-slate-600 hover:border-slate-300 dark:border-slate-700 dark:text-slate-400"
              >
                <Link href="/contact">{t('contact_us')}</Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* --- METRICS SECTION --- */}
      {data.metrics && data.metrics.length > 0 && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <Container size="7xl" className="relative z-10">
            <FadeInStagger faster>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {data.metrics.map((metric, idx) => {
                  const colorVariants = [
                    'from-blue-500 to-blue-600',
                    'from-emerald-500 to-emerald-600',
                    'from-purple-500 to-purple-600',
                  ];
                  const colorBg = colorVariants[idx % colorVariants.length];

                  return (
                    <FadeIn key={idx}>
                      <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                        <div
                          className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-r ${colorBg}`}
                        />
                        <div
                          className={`mb-2 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl ${colorBg}`}
                        >
                          {metric.value}
                        </div>
                        <div className="text-sm font-medium tracking-wide text-slate-500 uppercase dark:text-slate-400">
                          {metric.label}
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </FadeInStagger>
          </Container>
        </Section>
      )}

      {/* --- DASHBOARD HIGHLIGHTS (ROLES) --- */}
      {data.dashboardInsight && (
        <Section className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
          {/* Background Texture */}
          <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />

          <Container size="6xl">
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
              {/* Left Content */}
              <div>
                <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
                  {data.dashboardInsight}
                </h2>
                <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
                  {t('get_total_visibility')}
                </p>

                {/* Features List */}
                {data.dashboardFeatures && (
                  <div className="grid gap-4">
                    {data.dashboardFeatures.map((feat, i) => (
                      <FadeIn key={i} delay={i * 0.1}>
                        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                          <div className="bg-primary-600 shadow-primary-500/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-white shadow-lg">
                            <CheckCircle2 className="h-5 w-5 text-slate-600 dark:text-white" />
                          </div>
                          <span className="font-semibold text-slate-900 dark:text-white">
                            {feat}
                          </span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Visual Preview */}
              <div className="relative">
                <FadeIn delay={0.3}>
                  <div className="group relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 shadow-2xl transition-transform duration-500 hover:scale-[1.02] dark:border-slate-600 dark:from-slate-700 dark:to-slate-800">
                    {/* Hover Overlay */}
                    <div className="bg-primary-500/5 group-hover:bg-primary-500/10 absolute inset-0 transition-colors" />

                    {/* Center Text */}
                    <div className="relative z-10 font-mono text-sm text-slate-500 dark:text-slate-400">
                      Dashboard Visual Preview
                    </div>

                    {/* Mock UI Elements */}
                    <div className="absolute top-4 right-4 left-4 h-8 rounded border border-slate-300 bg-slate-200/80 dark:border-slate-600 dark:bg-slate-700/80" />
                    <div className="absolute top-16 bottom-4 left-4 w-1/3 rounded border border-slate-300 bg-slate-200/80 opacity-60 dark:border-slate-600 dark:bg-slate-700/80" />
                    <div className="absolute top-16 right-4 h-32 w-1/2 rounded border border-slate-300 bg-slate-200/80 opacity-60 dark:border-slate-600 dark:bg-slate-700/80" />
                    <div className="absolute right-4 bottom-4 h-20 w-1/2 rounded border border-slate-300 bg-slate-200/80 opacity-60 dark:border-slate-600 dark:bg-slate-700/80" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* --- METHODOLOGY (SERVICES) --- */}
      {data.methodology && (
        <Section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
          <Container size="6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                {t('our_methodology')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {t('structured_approach')}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {data.methodology.map((m, i) => (
                <FadeIn key={i} delay={i * 0.1} className="relative">
                  <div className="relative z-10 h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800">
                    <div className="absolute top-4 right-4 z-0 text-4xl font-black text-neutral-100">
                      {i + 1}
                    </div>
                    <div className="relative z-10">
                      <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                        {m.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                  {/* Connector Line (Desktop) */}
                  {i < data.methodology!.length - 1 && (
                    <div className="absolute top-1/2 -right-4 z-0 hidden h-0.5 w-8 -translate-y-1/2 transform bg-neutral-300 md:block"></div>
                  )}
                </FadeIn>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* --- BENEFITS (SERVICES) --- */}
      {data.benefits && (
        <Section className="bg-white dark:bg-slate-900">
          <Container size="6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                {t('value_added')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">{t('why_choose')}</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {data.benefits.map((b, i) => (
                <div key={i} className="bg-primary-50/50 border-primary-100 rounded-3xl border p-8">
                  <h3 className="text-primary-900 mb-3 text-xl font-bold">{b.title}</h3>
                  <p className="text-primary-800/80 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* --- DELIVERABLES (SERVICES) --- */}
      {data.deliverables && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <Container size="4xl">
            <SectionHeader
              title={t('what_you_get')}
              description={t('real_deliverables')}
              className="mb-12"
            />
            <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
              <div className="grid gap-4 md:grid-cols-2">
                {data.deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* --- PROBLEMS / CHALLENGES --- */}
      {data.challenges && data.challenges.length > 0 && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-red-500/5 blur-3xl dark:bg-red-500/10" />
            <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl dark:bg-orange-500/10" />
          </div>

          <Container size="7xl" className="relative z-10">
            <SectionHeader
              title={t('why_old_way_fails')}
              description={t('challenges_description')}
              className="mb-12"
            />

            <FadeInStagger faster>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {data.challenges.map((c, idx) => (
                  <FadeIn key={idx}>
                    <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                      {/* Number badge */}
                      <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 dark:text-slate-800">
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      <div className="relative z-10">
                        {/* Industry Style Challenge */}
                        {c.title && (
                          <>
                            <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                              {c.title}
                            </h3>
                            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                              {c.desc}
                            </p>
                          </>
                        )}

                        {/* Role Style Challenge (Pain vs Gain) */}
                        {c.pain && (
                          <>
                            <div className="mb-6">
                              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-bold tracking-wider text-red-600 uppercase dark:bg-red-500/20 dark:text-red-400">
                                {t('pain_point')}
                              </div>
                              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                                {c.pain}
                              </h3>
                              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {c.context}
                              </p>
                            </div>
                            <div className="border-t border-slate-200 pt-6 dark:border-slate-700">
                              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold tracking-wider text-emerald-600 uppercase dark:bg-emerald-500/20 dark:text-emerald-400">
                                {t('the_bizops_way')}
                              </div>
                              <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                                {c.gain}
                              </h3>
                              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                                {c.gainDesc}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeInStagger>
          </Container>
        </Section>
      )}

      {/* --- SOLUTIONS / FEATURES --- */}
      {featuresList.length > 0 && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl" />
          </div>

          <Container size="7xl" className="relative z-10">
            <SectionHeader
              title={t('bizops_solutions')}
              description={t('features_description')}
              className="mb-12"
            />

            <FadeInStagger faster>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featuresList.map((f, idx) => {
                  const isFirst = idx === 0;
                  return (
                    <FadeIn key={idx} className={isFirst ? 'sm:col-span-2 lg:col-span-1' : ''}>
                      <div
                        className={`group relative h-full overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                          isFirst
                            ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:border-blue-800 dark:from-blue-950/50 dark:to-indigo-950/50'
                            : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
                        }`}
                      >
                        <div
                          className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-r ${
                            isFirst
                              ? 'from-blue-500 to-indigo-500'
                              : 'from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600'
                          }`}
                        />
                        <div className="p-6">
                          <div
                            className={`mb-4 inline-flex rounded-xl p-3 ${
                              isFirst
                                ? 'bg-blue-100 dark:bg-blue-900/30'
                                : 'bg-slate-100 dark:bg-slate-800'
                            }`}
                          >
                            {f.icon
                              ? (
                                  <span
                                    className={
                                      isFirst
                                        ? 'text-blue-600 dark:text-blue-400'
                                        : 'text-slate-600 dark:text-slate-400'
                                    }
                                  >
                                    {f.icon}
                                  </span>
                                )
                              : (
                                  <CheckCircle2
                                    className={`h-6 w-6 ${isFirst ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400'}`}
                                  />
                                )}
                          </div>
                          <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                            {f.title || f.desc}
                          </h3>
                          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            {f.desc || f.description}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </FadeInStagger>
          </Container>
        </Section>
      )}

      {/* --- MOBILE ADVANTAGE --- */}
      {data.mobileAdvantage && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10" />
          <Container size="5xl" className="relative z-10 text-center">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
              <Smartphone className="h-8 w-8" />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {data.mobileAdvantage.title}
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
              {data.mobileAdvantage.desc}
            </p>
          </Container>
        </Section>
      )}

      {/* --- CONNECTIONS / INTEGRATIONS --- */}
      {data.connections && (
        <Section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
          <Container size="6xl">
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white">
                  <Share2 className="text-primary-600 h-6 w-6" />
                  {t('ecosystem_connections')}
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {t('ecosystem_description')}
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {data.connections.map((c, i) => (
                <div
                  key={i}
                  className="hover:border-primary-300 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-slate-800"
                >
                  <div className="text-primary-600 mb-2 text-xs font-bold tracking-wider uppercase">
                    {t('connected_to')}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                    {c.target}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* --- EXTRA SECTION (TABLES) --- */}
      {data.extraSection && data.extraSection.type === 'table' && (
        <Section className="bg-white dark:bg-slate-900">
          <Container size="5xl">
            <div className="mb-10 text-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-slate-600 dark:text-slate-400">
                <TableIcon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {data.extraSection.title}
              </h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm dark:border-slate-800">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold tracking-wider text-slate-900 uppercase dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                  <tr>
                    {data.extraSection.headers.map((h, i) => (
                      <th key={i} className="px-6 py-4">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 bg-white">
                  {data.extraSection.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="transition-colors hover:bg-slate-50 dark:bg-slate-950/50"
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="first:text-primary-600 px-6 py-4 font-medium whitespace-nowrap text-slate-600 first:font-bold dark:text-slate-400"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </Section>
      )}

      {/* --- CASE STUDY / TESTIMONIAL --- */}
      {(data.caseStudy || data.testimonial) && (
        <Section className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
          <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="bg-primary-600/10 absolute top-0 right-0 h-[600px] w-[600px] rounded-full blur-[120px]"></div>

          <Container size="6xl" className="relative z-10">
            <div className="grid items-center gap-16 md:grid-cols-2">
              <div>
                {data.caseStudyTitle && (
                  <div className="mb-6 inline-block rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-xs font-bold tracking-wider text-green-500 uppercase dark:text-green-300">
                    {t('impact_story')}
                  </div>
                )}
                <h2 className="mb-6 text-3xl leading-tight font-bold md:text-4xl">
                  {data.caseStudyTitle || t('real_results')}
                </h2>
                <p className="mb-8 text-xl leading-relaxed text-slate-900 dark:text-slate-400">
                  {data.caseStudy || t('see_transformation')}
                </p>
                <Button variant="white" className="rounded-full">
                  {t('read_full_case')}
                  {' '}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {data.testimonial && (
                <div className="relative rounded-3xl border border-white/10 bg-slate-50 p-8 backdrop-blur-md md:p-10 dark:bg-white/10">
                  <Quote className="text-primary-400 mb-6 h-10 w-10 opacity-50" />
                  <p className="mb-8 text-lg leading-relaxed font-medium text-slate-950 italic md:text-xl dark:text-white">
                    "
                    {data.testimonial.quote}
                    "
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="border-primary-500 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 bg-neutral-700 text-lg font-bold text-slate-800 dark:text-white">
                      {data.testimonial.avatar?.includes('http')
                        ? (
                            <img
                              src={data.testimonial.avatar}
                              alt={data.testimonial.author}
                              className="h-full w-full object-cover"
                            />
                          )
                        : (
                            data.testimonial.author.charAt(0)
                          )}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 dark:text-white">
                        {data.testimonial.author}
                      </div>
                      <div className="text-primary-300 text-sm">{data.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </Section>
      )}

      {/* --- FAQ SECTION --- */}
      {data.faqs && data.faqs.length > 0 && (
        <Section
          className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
          noPadding
          containerClassName={sectionPaddingHybrid.default}
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
          </div>

          <Container size="7xl" className="relative z-10">
            <SectionHeader
              title={t('common_questions')}
              description={t('faq_subtitle' as any)}
              className="mb-12"
            />

            <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900/50">
              {data.faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* --- FINAL CTA - Same style as ModulePage --- */}
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
                    {t('ready_to_start')}
                  </span>
                </div>

                <h2 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
                  {ctaHeadText}
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {t('final_cta_description')}
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-14 bg-white px-10 text-lg font-bold text-slate-900 shadow-xl shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-2xl"
                  >
                    <Link href="/demo">
                      {ctaBtnText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="h-14 border-2 border-white/30 px-10 text-lg font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                  >
                    <Link href="/contact">{t('schedule_free_consultation')}</Link>
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
};

export default GenericLandingPage;
