'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers, Play } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui';
import { getHomeSolutions } from '@/data/homeContent';
import { sectionPaddingHybrid } from '@/design-tokens';
import { cn } from '@/libs/utils';

export function HomeSolutionsSection() {
  const t = useTranslations('Homepage');
  const homeSolutions = getHomeSolutions(key => t(key.replace('Homepage.', '') as any));
  const [activeTab, setActiveTab] = useState(0);
  const activeSolution = homeSolutions[activeTab];

  if (!activeSolution) {
    return null;
  }

  return (
    <section
      id="solutions"
      className={cn(
        'relative flex min-h-screen w-full flex-col justify-center bg-slate-50 dark:bg-slate-950',
        sectionPaddingHybrid.default,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 text-center lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm dark:bg-slate-900"
          >
            <Layers className="text-primary-500 h-4 w-4" />
            <span className="text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
              BizOps Platform
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white"
          >
            {t('solutions_title')}
            <span className="text-primary-600 dark:text-primary-400">
              {t('solutions_highlight')}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-400"
          >
            {t('solutions_desc')}
          </motion.p>
        </div>

        {/* Modern Tab Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
            {homeSolutions.map((sol, idx) => {
              const Icon = sol.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    'group relative flex items-center gap-2 rounded-xl px-4 py-3 transition-all duration-300',
                    isActive
                      ? 'shadow-primary-500/25 text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700',
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="bg-primary-500 absolute inset-0 -z-10 rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <Icon
                    className={cn(
                      'h-5 w-5 transition-colors',
                      isActive ? 'text-white' : 'group-hover:text-primary-500 text-slate-500',
                    )}
                  />
                  <span className="relative z-10 text-sm font-semibold">{sol.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content - Clean Card Layout */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mx-auto max-w-5xl"
        >
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-900">
            {/* Top Bar */}
            <div className="border-b border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary-500 flex h-10 w-10 items-center justify-center rounded-lg">
                    <activeSolution.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {activeSolution.label}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 text-xs font-medium tracking-wide uppercase">
                      {activeSolution.category}
                    </p>
                  </div>
                </div>

                {activeSolution.metrics && (
                  <div className="hidden items-center gap-4 sm:flex">
                    {activeSolution.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="text-right">
                        <div className="text-primary-600 dark:text-primary-400 text-lg font-bold">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-500 uppercase dark:text-slate-400">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Content Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left - Info */}
              <div className="p-6 lg:p-8">
                <p className="mb-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {activeSolution.impact}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                    Fitur Utama
                  </h4>
                  <div className="space-y-2">
                    {activeSolution.modules.slice(0, 4).map((mod, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-lg bg-slate-50 p-3 dark:bg-slate-800/50"
                      >
                        <CheckCircle2 className="text-primary-500 h-4 w-4 shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                {activeSolution.industries && (
                  <div className="mb-6">
                    <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">Cocok untuk:</p>
                    <div className="flex flex-wrap gap-2">
                      {activeSolution.industries.slice(0, 3).map((industry, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        >
                          {industry.charAt(0).toUpperCase() + industry.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <div className="flex gap-3">
                  <Button asChild variant="primary" className="flex-1">
                    <Link
                      href={activeSolution.demoLink || '/demo'}
                      className="flex items-center justify-center gap-2"
                    >
                      <Play className="h-4 w-4" />
                      {t('solutions_watch_demo')}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-xl border-slate-200 px-6 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <Link href="/platform" className="flex items-center gap-2">
                      {t('solutions_cta')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right - Preview */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900 lg:aspect-auto">
                <img
                  src={`/images/solutions/${activeSolution.id}-dashboard.png`}
                  alt={`${activeSolution.label} Dashboard`}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/dashboard-mockup.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Link
                    href={activeSolution.demoLink || '/demo'}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-900 shadow-2xl transition-all hover:scale-110 hover:bg-white"
                  >
                    <Play className="h-6 w-6 fill-current" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
