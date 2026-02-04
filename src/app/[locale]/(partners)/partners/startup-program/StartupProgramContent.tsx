'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  DollarSign,
  FileText,
  Minus,
  Play,
  Plus,
  Rocket,
  Server,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { Button, CardSlider } from '@/components/ui';

export default function StartupProgramContent() {
  const t = useTranslations('StartupProgram');
  const locale = useLocale() as 'en' | 'id';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const perks = [
    {
      icon: DollarSign,
      titleKey: 'perk_1_title',
      descKey: 'perk_1_desc',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600',
    },
    {
      icon: Code,
      titleKey: 'perk_2_title',
      descKey: 'perk_2_desc',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600',
    },
    {
      icon: Users,
      titleKey: 'perk_3_title',
      descKey: 'perk_3_desc',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',
    },
    {
      icon: Server,
      titleKey: 'perk_4_title',
      descKey: 'perk_4_desc',
      color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600',
    },
    {
      icon: ShieldCheck,
      titleKey: 'perk_5_title',
      descKey: 'perk_5_desc',
      color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600',
    },
    {
      icon: TrendingUp,
      titleKey: 'perk_6_title',
      descKey: 'perk_6_desc',
      color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600',
    },
  ];

  return (
    <div className="flex flex-col bg-slate-50 font-sans transition-colors selection:bg-purple-500/30 dark:bg-slate-950">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white pt-32 pb-32 text-center lg:pb-40 dark:bg-slate-900 dark:text-white">
        {/* Modern Grid Background */}
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-size-[24px_24px]"></div>

        {/* Glow Effects */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-100 px-3 py-1 text-xs font-bold tracking-wider text-purple-700 uppercase shadow-lg backdrop-blur-md dark:border-purple-700/50 dark:bg-purple-900/30 dark:text-purple-300 dark:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
          >
            <Rocket className="h-3 w-3" />
            {' '}
            {t('hero_badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8 text-5xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-7xl lg:text-8xl dark:text-white"
          >
            {t('hero_title_1')}
            {' '}
            <br />
            <span className="bg-linear-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent dark:from-purple-400 dark:via-pink-400 dark:to-orange-400">
              {t('hero_title_2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-slate-700 md:text-2xl dark:text-slate-300"
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link href={`/${locale}/partners/apply`}>
              <Button
                size="lg"
                className="h-14 w-full transform border-none bg-slate-900 px-10 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-purple-500/20 sm:w-auto dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                {t('hero_button_apply')}
                {' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full border-slate-300 px-10 font-medium text-slate-900 hover:bg-slate-200 sm:w-auto dark:border-slate-700 dark:text-white dark:hover:bg-white/10"
            >
              <Play className="mr-2 h-4 w-4 fill-current" />
              {' '}
              {t('hero_button_watch')}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-sm font-medium text-slate-500 dark:text-slate-500"
          >
            {t('hero_trust')}
          </motion.p>
        </div>
      </section>

      {/* LOGO WALL (Social Proof) */}
      <section className="border-b border-slate-200 bg-slate-100 py-16 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl overflow-hidden px-4">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale transition-opacity duration-500 hover:opacity-70">
            {/* Placeholder Logos */}
            <div className="text-xl font-bold text-slate-900 dark:text-white">ACME Corp</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">Nebula AI</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">Quantum Leap</div>
            <div className="text-xl font-bold text-slate-900 dark:text-white">HyperGrowth</div>
            <div className="hidden text-xl font-bold text-slate-900 md:block dark:text-white">
              Stark Industries
            </div>
          </div>
        </div>
      </section>

      {/* THE PERKS (Bento Grid Style) */}
      <section className="relative z-20 bg-slate-50 py-24 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('perks_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              {t('perks_subtitle')}
            </p>
          </div>

          {/* Mobile: CardSlider */}
          <div className="md:hidden">
            <CardSlider mobileItemWidth="w-[85vw] sm:w-[350px]">
              {perks.map((perk, idx) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={idx}
                    className="group flex h-full flex-col rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                  >
                    <div
                      className={`h-14 w-14 ${perk.color} mb-8 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                      {t(perk.titleKey as any)}
                    </h3>
                    <p className="grow leading-relaxed text-slate-600 dark:text-slate-400">
                      {t(perk.descKey as any)}
                    </p>
                  </div>
                );
              })}
            </CardSlider>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden gap-8 md:grid md:grid-cols-3">
            {perks.map((perk, idx) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex h-full flex-col rounded-4xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div
                    className={`h-14 w-14 ${perk.color} mb-8 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    {t(perk.titleKey as any)}
                  </h3>
                  <p className="grow leading-relaxed text-slate-600 dark:text-slate-400">
                    {t(perk.descKey as any)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY CRITERIA */}
      <Section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <Container size="4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('eligibility_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              {t('eligibility_subtitle')}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12 dark:border-slate-800 dark:bg-slate-950">
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                    {t(`eligibility_${num}` as any)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* HOW TO APPLY */}
      <Section className="bg-slate-50 dark:bg-slate-950">
        <Container size="6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('apply_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              {t('apply_subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { step: '1', icon: FileText },
              { step: '2', icon: Users },
              { step: '3', icon: CheckCircle },
              { step: '4', icon: Rocket },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                    <div className="absolute -top-4 -left-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-lg font-bold text-white shadow-lg">
                      {item.step}
                    </div>
                    <div className="mt-2 mb-4">
                      <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                      {t(`apply_step_${item.step}_title` as any)}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {t(`apply_step_${item.step}_desc` as any)}
                    </p>
                  </div>
                  {idx < 3 && (
                    <div className="absolute top-1/2 -right-3 hidden -translate-y-1/2 transform md:block">
                      <ChevronRight className="h-6 w-6 text-slate-300 dark:text-slate-700" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href={`/${locale}/partners/apply`}>
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
                {t('apply_button')}
                {' '}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <Container size="4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('faq_title')}
            </h2>
          </div>

          <div className="space-y-4">
            {[1, 2, 3, 4].map((num, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <span className="pr-4 font-bold text-slate-900 dark:text-white">
                    {t(`faq_${num}_q` as any)}
                  </span>
                  {openFaq === idx
                    ? (
                        <Minus className="h-5 w-5 shrink-0 text-purple-600 dark:text-purple-400" />
                      )
                    : (
                        <Plus className="h-5 w-5 shrink-0 text-slate-400" />
                      )}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 leading-relaxed text-slate-600 dark:text-slate-400">
                        {t(`faq_${num}_a` as any)}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <CTABannerSection
        title={t('cta_title')}
        subtitle={t('cta_subtitle')}
        badgeText="Apply Now"
        demoBtnText={t('cta_button')}
        demoBtnLink={`/${locale}/partners/apply`}
        pricingBtnText="Contact Support"
        pricingBtnLink={`/${locale}/contact`}
        trustText1="Fast Review"
        trustText2="High Approval Rate"
      />
    </div>
  );
}
