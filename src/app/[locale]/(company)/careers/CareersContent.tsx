'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Code,
  Coffee,
  GitMerge,
  Globe,
  Heart,
  Rocket,
  Zap,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import { ScrollToSectionButton } from '@/components/ScrollToSectionButton';
import { Badge, Button, CardSlider, OptimizedImage } from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  careersContentTranslations,
  jobsDataTranslations,
} from '@/data/companyContentTranslations';

export default function CareersContent() {
  const t = useTranslations('Careers');
  const locale = useLocale() as 'en' | 'id';

  const { culture, benefits } = careersContentTranslations[locale];
  const jobsData = jobsDataTranslations[locale];

  const cultureValues = [
    {
      icon: GitMerge,
      title: t('culture_value_1_title'),
      desc: t('culture_value_1_desc'),
      color: 'bg-indigo-100 text-indigo-700',
    },
    {
      icon: Zap,
      title: t('culture_value_2_title'),
      desc: t('culture_value_2_desc'),
      color: 'bg-purple-100 text-purple-700',
    },
    {
      icon: BookOpen,
      title: t('culture_value_3_title'),
      desc: t('culture_value_3_desc'),
      color: 'bg-emerald-100 text-emerald-700',
    },
  ];

  const cultureIcons = [Code, Globe, Rocket];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* HERO SECTION */}
      <div className="relative h-screen overflow-hidden bg-white pt-32 pb-24 text-center lg:pt-48 lg:pb-32 dark:bg-[#0F172A] dark:text-white">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-indigo-600/20 blur-[120px]"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-purple-600/20 blur-[100px]"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-300 bg-indigo-100 px-3 py-1 text-xs font-bold tracking-wider text-indigo-700 uppercase backdrop-blur-sm dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            <Globe className="h-3 w-3" /> {t('hero_badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white"
          >
            {t('hero_title_1')} <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              {t('hero_title_2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-slate-700 dark:text-slate-300"
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <ScrollToSectionButton
              sectionId="openings"
              size="lg"
              className="h-14 w-full rounded-full border-none bg-slate-900 px-10 text-lg font-bold text-white shadow-xl transition-all hover:bg-slate-800 hover:shadow-indigo-500/20 sm:w-auto dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              {t('hero_view_roles')} <ArrowRight className="ml-2 h-5 w-5" />
            </ScrollToSectionButton>
            <a href="https://divistant.com/career" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="h-14 w-full border-slate-300 px-10 font-medium text-slate-900 hover:bg-slate-200 sm:w-auto dark:border-slate-700 dark:text-white dark:hover:bg-white/10"
              >
                {t('hero_about_divistant')}
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* PHOTO GRID (CULTURE SNAPSHOT) */}
      <div className="overflow-hidden !bg-white pt-24 pb-24 dark:bg-[#0F172A]">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold">{t('culture_snapshot_title')}</h1>
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid h-64 grid-cols-2 gap-4 opacity-80 transition-opacity duration-500 hover:opacity-100 md:h-80 md:grid-cols-4">
            <div className="group relative overflow-hidden rounded-3xl bg-slate-300 dark:bg-slate-800">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration and brainstorming"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={400}
                height={320}
              />
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-slate-300 dark:bg-slate-800">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Modern office workspace"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={400}
                height={320}
              />
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-slate-300 dark:bg-slate-800">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                alt="Team meeting and discussion"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={400}
                height={320}
              />
            </div>
            <div className="group relative overflow-hidden rounded-3xl bg-slate-300 dark:bg-slate-800">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                alt="Developer working on code"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                width={400}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ENGINEERING CULTURE */}
      <Section className="border-b border-slate-200 !bg-white py-24 dark:border-slate-800 dark:!bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              {t('engineering_culture_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              {t('engineering_culture_subtitle')}
            </p>
          </div>

          {/* Mobile: CardSlider */}
          <div className="md:hidden">
            <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
              {cultureValues.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group h-full rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-colors hover:border-indigo-500/50 dark:border-slate-800 dark:bg-slate-950"
                  >
                    <div
                      className={`h-14 w-14 ${item.color} dark:bg-opacity-20 mb-6 flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </CardSlider>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden gap-8 md:grid md:grid-cols-3">
            {cultureValues.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group h-full rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-colors hover:border-indigo-500/50 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div
                    className={`h-14 w-14 ${item.color} dark:bg-opacity-20 mb-6 flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CULTURE VALUES (Original) */}
      <Section className="!bg-slate-50 dark:!bg-slate-950">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {culture.map((item, i) => {
              const Icon = cultureIcons[i] || Heart;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                    <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* BENEFITS GRID */}
      <Section className="bg-white dark:bg-slate-900 dark:text-white">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              {t('perks_title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">{t('perks_subtitle')}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <h3 className="text-primary-600 dark:text-primary-300 mb-2 text-lg font-bold">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* JOB OPENINGS */}
      <Section id="openings" className="scroll-mt-24 bg-white dark:bg-slate-900">
        <Container size="5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
            {t('openings_title')}
          </h2>

          {jobsData.length === 0 ? (
            <div className="py-20 text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <Heart className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                {t('no_positions_title')}
              </h3>
              <p className="mb-8 text-slate-600 dark:text-slate-400">{t('no_positions_desc')}</p>
              <Link href="mailto:careers@bizops.id">
                <Button variant="outline">{t('no_positions_button')}</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {jobsData.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:border-primary-300 dark:hover:border-primary-700 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:shadow-lg md:flex-row md:items-center md:p-8 dark:border-slate-800 dark:bg-slate-950"
                >
                  <div className="flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-3">
                      <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-xl font-bold text-slate-900 transition-colors dark:text-white">
                        {job.title}
                      </h3>
                      <Badge variant="outline" className="bg-white dark:bg-slate-900">
                        {job.dept}
                      </Badge>
                    </div>
                    <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Globe className="h-3 w-3" />
                        {job.loc}
                      </span>
                      <span className="flex items-center gap-1">
                        <Coffee className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                    <p className="max-w-2xl text-slate-600 dark:text-slate-400">{job.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-slate-200 px-2 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0">
                    <Link href={`mailto:careers@bizops.id?subject=Apply: ${job.title}`}>
                      <Button
                        variant="outline"
                        className="rounded-full border-slate-300 text-slate-900 transition-all hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-700 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
                      >
                        {t('job_apply_button')}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* CTA SECTION */}
      <Section className="bg-white dark:bg-gradient-to-br dark:from-indigo-900 dark:to-purple-900">
        <Container size="4xl" className="text-center">
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {t('cta_title')}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-slate-600 dark:text-indigo-200">
            {t('cta_subtitle')}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <ScrollToSectionButton
              sectionId="openings"
              size="lg"
              className="w-full bg-slate-900 text-white hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-indigo-900 dark:hover:bg-slate-100"
            >
              {t('cta_view_positions')} <ArrowRight className="ml-2 h-4 w-4" />
            </ScrollToSectionButton>
            <a href="https://divistant.com/career" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-slate-300 text-slate-900 hover:bg-slate-200 sm:w-auto dark:border-white/30 dark:text-white dark:hover:bg-white/10"
              >
                {t('cta_learn_divistant')}
              </Button>
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
}
