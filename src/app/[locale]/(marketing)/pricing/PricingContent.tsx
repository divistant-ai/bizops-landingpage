'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Calculator,
  Check,
  Lock,
  MessageSquare,
  Phone,
  RefreshCw,
  Server,
  Shield,
  Zap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import FAQAccordion from '@/components/FAQAccordion';
import { Container, Section } from '@/components/layout';
import PricingFeatureTable from '@/components/PricingFeatureTable';
import { Button, CardSlider } from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggeredText } from '@/components/ui/motion-text';

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const PricingContent = () => {
  const t = useTranslations('Pricing');
  const [annual, setAnnual] = useState(true);

  // Translated FAQ data
  const translatedFaqs = [
    { q: t('faq_1_q'), a: t('faq_1_a') },
    { q: t('faq_2_q'), a: t('faq_2_a') },
    { q: t('faq_3_q'), a: t('faq_3_a') },
    { q: t('faq_4_q'), a: t('faq_4_a') },
    { q: t('faq_5_q'), a: t('faq_5_a') },
  ];

  return (
    <div className="bg-white transition-colors duration-500 dark:bg-slate-950">
      {/* --- HERO SECTION --- */}
      <div className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">
        {/* Modern Grid Background */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-full max-w-7xl -translate-x-1/2">
          <div className="animate-pulse-slow absolute top-[-10%] left-[20%] h-72 w-72 rounded-full bg-blue-500/20 blur-[100px]" />
          <div className="animate-pulse-slow absolute top-[10%] right-[20%] h-72 w-72 rounded-full bg-purple-500/20 blur-[100px] delay-1000" />
        </div>

        <Container size="7xl" className="relative z-10 text-center">
          <FadeIn delay={0.1}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 dark:border-slate-800 dark:bg-slate-900">
              <span className="relative flex h-2 w-2 gap-4">
                <span className="absolute inline-flex h-full w-full animate-ping gap-4 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 gap-4 rounded-full bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                {t('hero_badge')}
              </span>
            </div>
          </FadeIn>

          <h1 className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white">
            <StaggeredText
              text={t('hero_title_1')}
              className="mb-2 flex w-full justify-center"
              delay={0.2}
            />
            <motion.span
              variants={FADE_UP_VARIANTS}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              {t('hero_title_2')}
            </motion.span>
          </h1>

          <FadeIn delay={0.3}>
            <p className="mx-auto mb-12 max-w-3xl text-xl text-slate-600 dark:text-slate-400">
              {t('hero_description')}
            </p>
          </FadeIn>

          {/* Enhanced Toggle */}
          <FadeIn delay={0.4}>
            <div className="mb-12 flex justify-center">
              <div className="relative inline-flex rounded-full border border-slate-200 bg-slate-100 p-1.5 dark:border-slate-700 dark:bg-slate-800">
                <div
                  className={`absolute top-1.5 bottom-1.5 left-[14px] rounded-full border border-slate-200 bg-white shadow-sm transition-all duration-300 ease-out dark:border-slate-600 dark:bg-slate-700 ${annual ? 'left-[40%] w-[calc(60%-6px)]' : 'left-50% w-[calc(50%-50px)]'}`}
                />
                <button
                  onClick={() => setAnnual(false)}
                  className={`relative z-10 rounded-full px-8 py-2.5 text-sm font-bold transition-colors duration-300 ${!annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
                >
                  {t('toggle_monthly')}
                </button>
                <button
                  onClick={() => setAnnual(true)}
                  className={`relative z-10 flex items-center gap-2 rounded-full py-2.5 pr-3 pl-6 text-sm font-bold transition-colors duration-300 ${annual ? 'text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'}`}
                >
                  {t('toggle_yearly')}
                  <span className="rounded-full border border-green-200 bg-green-100 px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-green-700 uppercase dark:border-green-800 dark:bg-green-950 dark:text-green-400">
                    {t('toggle_save')}
                  </span>
                </button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      <Section className="relative z-20 -mt-12 pt-0">
        <Container size="7xl">
          {/* --- PRICING CARDS --- */}
          <div className="mb-24">
            <CardSlider
              desktopClassName="md:grid md:grid-cols-3 md:gap-8 md:items-start"
              mobileItemWidth="w-[85vw] sm:w-[350px]"
              className="pb-12"
            >
              {/* Plan 1: Business */}
              <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t('plan_business_name')}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {t('plan_business_desc')}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {t('price_idr')}
                    </span>
                    <span className="text-5xl leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {annual ? '2.5' : '3'}
                    </span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                      {t('price_million')}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">
                      {t('price_per_month')}
                    </span>
                    {annual && (
                      <span className="rounded bg-green-50 px-2 py-0.5 font-medium text-green-600 dark:bg-green-950 dark:text-green-400">
                        {t('price_save_yearly', { amount: '6 Jt' })}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
                    {annual
                      ? t('price_billed_yearly', { amount: '30 Jt' })
                      : t('price_billed_monthly')}
                  </p>
                </div>

                <div className="mb-8">
                  <Link href="/demo?plan=business" className="block w-full">
                    <Button
                      size="md"
                      fullWidth
                      variant="outline"
                      className="h-12 w-full border-slate-300 font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
                    >
                      {t('plan_business_cta')}
                    </Button>
                  </Link>
                </div>

                <div className="flex-grow space-y-4 border-t border-slate-100 pt-8 dark:border-slate-800">
                  <p className="text-sm font-medium tracking-wider text-slate-400 dark:text-slate-500">
                    {t('features_heading')}
                  </p>
                  {[
                    t('plan_business_feature_1'),
                    t('plan_business_feature_2'),
                    t('plan_business_feature_3'),
                    t('plan_business_feature_4'),
                    t('plan_business_feature_5'),
                  ].map((f, i) => (
                    <div key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div className="mt-0.5 min-w-[18px]">
                        <Check className="h-4.5 w-4.5 text-slate-400 transition-colors group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400" />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan 2: Growth (Popular) */}
              <div className="relative z-10 flex h-full flex-col rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-2xl shadow-blue-900/10 md:origin-top md:scale-105 dark:border-blue-500 dark:bg-slate-900 dark:shadow-blue-500/20">
                <div className="absolute -top-5 right-0 left-0 flex justify-center">
                  <div className="flex items-center gap-1 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase shadow-lg dark:bg-blue-500">
                    <Zap className="h-3.5 w-3.5 fill-current" />
                    {t('plan_growth_badge')}
                  </div>
                </div>

                <div className="mt-2 mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t('plan_growth_name')}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {t('plan_growth_desc')}
                  </p>
                </div>

                <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {t('price_idr')}
                    </span>
                    <span className="text-5xl leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {annual ? '7.5' : '9'}
                    </span>
                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                      {t('price_million')}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-slate-500 dark:text-slate-400">
                      {t('price_per_month')}
                    </span>
                    {annual && (
                      <span className="rounded border border-blue-200 bg-blue-100 px-2 py-0.5 font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-400">
                        {t('price_save_yearly', { amount: '18 Jt' })}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-8">
                  <Link href="/demo?plan=growth" className="block w-full">
                    <Button
                      fullWidth
                      variant="primary"
                      size="lg"
                      className="w-full bg-blue-600 text-lg text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:shadow-blue-500/40 dark:bg-blue-500 dark:hover:bg-blue-600"
                    >
                      {t('plan_growth_cta')}
                    </Button>
                  </Link>
                </div>

                <div className="flex-grow space-y-4 border-t border-slate-100 pt-8 dark:border-slate-800">
                  <p className="text-sm font-medium tracking-wider text-blue-600 dark:text-blue-400">
                    {t('plan_growth_prefix')}
                  </p>
                  {[
                    t('plan_growth_feature_1'),
                    t('plan_growth_feature_2'),
                    t('plan_growth_feature_3'),
                    t('plan_growth_feature_4'),
                    t('plan_growth_feature_5'),
                    t('plan_growth_feature_6'),
                  ].map((f, i) => (
                    <div
                      key={i}
                      className="flex gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      <div className="mt-0.5 min-w-[18px]">
                        <div className="rounded-full bg-blue-100 p-0.5 dark:bg-blue-950">
                          <Check className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        </div>
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plan 3: Enterprise */}
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-amber-600/50">
                {/* Subtle Texture */}
                <div className="pointer-events-none absolute top-0 right-0 h-32 w-32 rounded-full bg-amber-500/10 blur-[60px] dark:bg-amber-500/20" />

                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {t('plan_enterprise_name')}
                    <span className="ml-2 rounded-full bg-amber-100 px-2 py-0.5 align-middle text-[10px] font-bold tracking-wider text-amber-700 uppercase dark:bg-amber-950 dark:text-amber-400">
                      {t('plan_enterprise_badge')}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    {t('plan_enterprise_desc')}
                  </p>
                </div>

                <div className="relative z-10 mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {t('plan_enterprise_price')}
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                    {t('plan_enterprise_price_desc')}
                  </div>
                  <p className="mt-2 text-sm text-slate-400 dark:text-slate-500">
                    {t('plan_enterprise_price_note')}
                  </p>
                </div>

                <div className="relative z-10 mb-8">
                  <Link href="/contact" className="block w-full">
                    <Button
                      size="md"
                      fullWidth
                      variant="outline"
                      className="h-12 w-full border-slate-300 font-bold text-slate-700 transition-all hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700 dark:border-slate-600 dark:text-slate-200 dark:hover:border-amber-600 dark:hover:bg-amber-950 dark:hover:text-amber-400"
                    >
                      {t('plan_enterprise_cta')}
                    </Button>
                  </Link>
                </div>

                <div className="relative z-10 flex-grow space-y-4 border-t border-slate-100 pt-8 dark:border-slate-800">
                  <p className="text-sm font-medium tracking-wider text-slate-500 dark:text-slate-400">
                    {t('plan_enterprise_prefix')}
                  </p>
                  {[
                    t('plan_enterprise_feature_1'),
                    t('plan_enterprise_feature_2'),
                    t('plan_enterprise_feature_3'),
                    t('plan_enterprise_feature_4'),
                    t('plan_enterprise_feature_5'),
                    t('plan_enterprise_feature_6'),
                  ].map((f, i) => (
                    <div key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                      <div className="mt-0.5 min-w-[18px]">
                        <Check className="h-4.5 w-4.5 text-amber-500 dark:text-amber-400" />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardSlider>
          </div>

          {/* --- CALCULATOR BANNER --- */}
          <div className="mb-24 md:mb-32">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl">
              {/* Background Effects */}
              <div className="absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/30 blur-[120px]" />
              <div className="absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

              <div className="relative z-10 flex flex-col items-center gap-8 p-8 md:p-16 lg:flex-row">
                <div className="flex-1 space-y-6 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                    <Calculator className="h-3.5 w-3.5" />
                    {t('calculator_badge')}
                  </div>
                  <h3 className="text-3xl leading-tight font-extrabold text-white md:text-4xl">
                    {t('calculator_title')}
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {t('calculator_subtitle')}
                    </span>
                  </h3>
                  <p className="text-lg leading-relaxed text-slate-300">
                    {t('calculator_description')}
                  </p>
                  <Link href="/pricing/calculator" className="inline-block w-full md:w-auto">
                    <Button
                      variant="white"
                      size="lg"
                      className="w-full bg-white px-8 text-lg font-bold text-slate-900 shadow-xl shadow-blue-900/50 transition-all duration-300 hover:scale-105 hover:bg-slate-50 hover:shadow-blue-900/70 md:w-auto"
                    >
                      {t('calculator_cta')} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                {/* Abstract Graphic */}
                <div className="flex w-full justify-center lg:w-1/3 lg:justify-end">
                  <div className="flex h-64 w-64 rotate-3 transform flex-col justify-center rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-transform duration-500 hover:rotate-0">
                    <div className="space-y-4 opacity-80">
                      <div className="h-4 w-3/4 rounded bg-white/20"></div>
                      <div className="h-4 w-full rounded bg-white/10"></div>
                      <div className="h-4 w-5/6 rounded bg-white/10"></div>
                      <div className="mt-4 h-12 w-full rounded-lg bg-blue-500/80"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- TRUST SIGNALS GRID --- */}
          <div className="mb-32">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                {t('security_heading')}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Shield,
                  title: t('security_1_title'),
                  desc: t('security_1_desc'),
                  color: 'text-green-500 dark:text-green-400',
                },
                {
                  icon: Lock,
                  title: t('security_2_title'),
                  desc: t('security_2_desc'),
                  color: 'text-blue-500 dark:text-blue-400',
                },
                {
                  icon: Server,
                  title: t('security_3_title'),
                  desc: t('security_3_desc'),
                  color: 'text-purple-500 dark:text-purple-400',
                },
                {
                  icon: RefreshCw,
                  title: t('security_4_title'),
                  desc: t('security_4_desc'),
                  color: 'text-amber-500 dark:text-amber-400',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-center transition-all duration-200 hover:border-slate-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600"
                >
                  <div
                    className={`mb-4 rounded-xl bg-slate-50 p-3 shadow-sm dark:bg-slate-800 ${item.color}`}
                  >
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- COMPARISON TABLE --- */}
          <div className="mb-32 scroll-mt-24" id="features">
            <PricingFeatureTable />
          </div>

          {/* --- FAQ & CONTACT --- */}
          <div className="mx-auto mb-24 grid max-w-7xl gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-6">
                <div>
                  <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
                    {t('faq_heading')}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    {t('faq_description')}
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-700 dark:bg-slate-900">
                  <h4 className="mb-1 text-xl font-bold text-slate-900 dark:text-white">
                    {t('faq_contact_heading')}
                  </h4>
                  <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
                    {t('faq_contact_description')}
                  </p>
                  <div className="space-y-3">
                    <a
                      href="mailto:sales@bizops.id"
                      className="flex items-center gap-3 text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                    >
                      <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <span className="font-medium">sales@bizops.id</span>
                    </a>
                    <a
                      href="tel:+622139702834"
                      className="flex items-center gap-3 text-slate-700 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                    >
                      <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-800">
                        <Phone className="h-5 w-5" />
                      </div>
                      <span className="font-medium">+62 21 39702834</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <FAQAccordion faqs={translatedFaqs} />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default PricingContent;
