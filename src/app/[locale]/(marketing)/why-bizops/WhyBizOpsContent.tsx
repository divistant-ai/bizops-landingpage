'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle,
  Code,
  Layers,
  Leaf,
  Shield,
  Smartphone,
  X,
  Zap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/layout';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { CardSlider } from '@/components/ui';

export default function WhyBizOpsContent() {
  const t = useTranslations('WhyBizOps');

  const comparisonData = [
    { feature: t('feature_mobile'), bizops: true, legacy: false, saas: false },
    { feature: t('feature_workflow'), bizops: true, legacy: true, saas: false },
    { feature: t('feature_fast'), bizops: true, legacy: false, saas: true },
    { feature: t('feature_onpremise'), bizops: true, legacy: true, saas: false },
    { feature: t('feature_ux'), bizops: true, legacy: false, saas: true },
    { feature: t('feature_api'), bizops: true, legacy: false, saas: true },
    { feature: t('feature_bahasa'), bizops: true, legacy: false, saas: true },
    { feature: t('feature_support'), bizops: true, legacy: true, saas: false },
  ];

  const differentiators = [
    {
      icon: Smartphone,
      title: t('diff_mobile_title'),
      desc: t('diff_mobile_desc'),
      color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    },
    {
      icon: Shield,
      title: t('diff_sovereignty_title'),
      desc: t('diff_sovereignty_desc'),
      color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    },
    {
      icon: Layers,
      title: t('diff_unified_title'),
      desc: t('diff_unified_desc'),
      color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    },
    {
      icon: Zap,
      title: t('diff_fast_title'),
      desc: t('diff_fast_desc'),
      color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
    },
    {
      icon: Code,
      title: t('diff_api_title'),
      desc: t('diff_api_desc'),
      color: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
    },
    {
      icon: Leaf,
      title: t('diff_indonesia_title'),
      desc: t('diff_indonesia_desc'),
      color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400',
    },
  ];
  return (
    <div className="flex flex-col bg-slate-50 transition-colors dark:bg-slate-950">
      {/* HERO SECTION */}
      <section className="dark:bg-dark-bg relative overflow-hidden bg-slate-100 pt-32 pb-20 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="animate-pulse-slow pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-600/20"></div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[100px] dark:bg-indigo-600/10"></div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-300 bg-blue-100 px-4 py-1.5 text-xs font-bold tracking-wider text-blue-700 uppercase backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/50 dark:text-blue-300"
          >
            <Layers className="h-3 w-3" />
            {' '}
            {t('hero_badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mb-8 text-4xl leading-[1.1] font-extrabold tracking-tight text-slate-900 md:text-6xl lg:text-7xl dark:text-white"
          >
            {t('hero_title_1')}
            {' '}
            <br />
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              {t('hero_title_2')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-light text-slate-700 dark:text-slate-300"
          >
            {t('hero_subtitle')}
          </motion.p>
        </div>
      </section>

      {/* THE SWEET SPOT (Visual Comparison) */}
      <section className="border-b border-slate-100 bg-white py-24 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('sweetspot_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              {t('sweetspot_subtitle')}
            </p>
          </div>

          <div className="flex flex-col items-center gap-16 lg:flex-row">
            {/* Quadrant Chart */}
            <div className="relative mx-auto aspect-square w-full max-w-[500px] rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-inner lg:w-1/2 dark:border-slate-700 dark:bg-slate-800/50">
              {/* Axes */}
              <div className="absolute top-8 bottom-8 left-1/2 w-px -translate-x-1/2 transform border-l border-dashed border-slate-400 bg-slate-300 dark:border-slate-500 dark:bg-slate-600"></div>
              <div className="absolute top-1/2 right-8 left-8 h-px -translate-y-1/2 transform border-t border-dashed border-slate-400 bg-slate-300 dark:border-slate-500 dark:bg-slate-600"></div>

              {/* Labels */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-50 px-2 text-[10px] font-bold tracking-widest text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                {t('chart_high_flexibility')}
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-50 px-2 text-[10px] font-bold tracking-widest text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                {t('chart_low_flexibility')}
              </div>
              <div className="absolute top-1/2 left-0 origin-center -translate-y-1/2 -rotate-90 bg-slate-50 px-2 text-[10px] font-bold tracking-widest text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                {t('chart_hard_to_use')}
              </div>
              <div className="absolute top-1/2 right-0 origin-center -translate-y-1/2 rotate-90 bg-slate-50 px-2 text-[10px] font-bold tracking-widest text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                {t('chart_easy_to_use')}
              </div>

              {/* Competitors */}
              <div className="group absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 transform cursor-help text-center opacity-70">
                <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-slate-400 transition-transform group-hover:scale-125"></div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  {t('chart_legacy_erp')}
                  <br />
                  (SAP/Oracle)
                </span>
              </div>

              <div className="group absolute right-[25%] bottom-[25%] -translate-x-1/2 -translate-y-1/2 transform cursor-help text-center opacity-70">
                <div className="mx-auto mb-2 h-4 w-4 rounded-full bg-slate-400 transition-transform group-hover:scale-125"></div>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">
                  {t('chart_saas_local')}
                  <br />
                  (Accounting App)
                </span>
              </div>

              {/* BizOps Winner */}
              <div className="absolute top-[15%] right-[15%] z-10 -translate-x-1/2 -translate-y-1/2 transform text-center">
                <div className="relative">
                  <div className="bg-primary-500 absolute inset-0 animate-ping rounded-full opacity-20"></div>
                  <div className="from-primary-500 shadow-primary-500/30 mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-linear-to-br to-indigo-600 text-2xl font-bold text-white shadow-xl dark:border-slate-800">
                    B
                  </div>
                </div>
                <span className="text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 border-primary-100 dark:border-primary-800 rounded-full border px-3 py-1 text-sm font-bold">
                  {t('chart_bizops')}
                </span>
              </div>
            </div>

            {/* Explanation */}
            <div className="w-full space-y-6 lg:w-1/2">
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20">
                  <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-slate-900 dark:text-white">
                    {t('explain_legacy_title')}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t('explain_legacy_desc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-50 dark:bg-amber-900/20">
                  <X className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-slate-900 dark:text-white">
                    {t('explain_saas_title')}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t('explain_saas_desc')}
                  </p>
                </div>
              </div>

              <div className="from-primary-50 dark:from-primary-900/20 border-primary-200 dark:border-primary-800 flex items-start gap-4 rounded-2xl border bg-linear-to-br to-indigo-50 p-6 shadow-lg dark:to-indigo-900/20">
                <div className="bg-primary-500 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-800 dark:text-green-200" />
                </div>
                <div>
                  <h4 className="mb-2 font-bold text-slate-600 dark:text-slate-400">
                    {t('explain_bizops_title')}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t('explain_bizops_desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY DIFFERENTIATORS */}
      <Section className="bg-slate-50 dark:bg-slate-950">
        <Container size="7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('differentiators_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
              {t('differentiators_subtitle')}
            </p>
          </div>

          {/* Mobile: CardSlider */}
          <div className="md:hidden">
            <CardSlider>
              {differentiators.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="w-[300px]">
                    <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                      <div
                        className={`h-14 w-14 rounded-xl ${item.color} mb-4 flex items-center justify-center`}
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
                  </div>
                );
              })}
            </CardSlider>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                    <div
                      className={`h-14 w-14 rounded-xl ${item.color} mb-4 flex items-center justify-center transition-transform group-hover:scale-110`}
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
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* COMPARISON TABLE */}
      <Section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <Container size="6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('comparison_title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400">{t('comparison_subtitle')}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="p-4 text-left font-bold text-slate-900 dark:text-white">
                    {t('comparison_feature')}
                  </th>
                  <th className="text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 p-4 text-center font-bold">
                    {t('comparison_bizops')}
                  </th>
                  <th className="p-4 text-center font-bold text-slate-600 dark:text-slate-400">
                    {t('comparison_legacy')}
                  </th>
                  <th className="p-4 text-center font-bold text-slate-600 dark:text-slate-400">
                    {t('comparison_saas')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                  >
                    <td className="p-4 text-slate-700 dark:text-slate-300">{row.feature}</td>
                    <td className="bg-primary-50/50 dark:bg-primary-900/10 p-4 text-center">
                      {row.bizops
                        ? (
                            <CheckCircle className="mx-auto h-5 w-5 text-green-600 dark:text-green-400" />
                          )
                        : (
                            <X className="mx-auto h-5 w-5 text-slate-300 dark:text-slate-600" />
                          )}
                    </td>
                    <td className="p-4 text-center">
                      {row.legacy
                        ? (
                            <CheckCircle className="mx-auto h-5 w-5 text-green-600 dark:text-green-400" />
                          )
                        : (
                            <X className="mx-auto h-5 w-5 text-slate-300 dark:text-slate-600" />
                          )}
                    </td>
                    <td className="p-4 text-center">
                      {row.saas
                        ? (
                            <CheckCircle className="mx-auto h-5 w-5 text-green-600 dark:text-green-400" />
                          )
                        : (
                            <X className="mx-auto h-5 w-5 text-slate-300 dark:text-slate-600" />
                          )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* CTA SECTION */}
      <CTABannerSection
        title={t('cta_title')}
        subtitle={t('cta_subtitle')}
        badgeText={t('hero_badge')}
        demoBtnText={t('cta_demo')}
        demoBtnLink="/demo"
        pricingBtnText={t('cta_compare')}
        pricingBtnLink="/compare"
        trustText1={t('unified_platform')}
        trustText2={t('indonesia_first')}
      />
    </div>
  );
}
