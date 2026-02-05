'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { getHomeSolutions } from '@/data/homeContent';

const TAB_COLORS = [
  { active: 'bg-blue-500', ring: 'ring-blue-500/20' },
  { active: 'bg-emerald-500', ring: 'ring-emerald-500/20' },
  { active: 'bg-amber-500', ring: 'ring-amber-500/20' },
  { active: 'bg-purple-500', ring: 'ring-purple-500/20' },
  { active: 'bg-rose-500', ring: 'ring-rose-500/20' },
];

const CONTENT_COLORS = [
  {
    iconBg: 'bg-blue-500',
    iconShadow: 'shadow-blue-500/25',
    label: 'text-blue-600 dark:text-blue-400',
    checkBg: 'bg-blue-100 dark:bg-blue-900/30',
    checkIcon: 'text-blue-600 dark:text-blue-400',
    hoverBorder: 'hover:border-blue-200 dark:hover:border-blue-800',
  },
  {
    iconBg: 'bg-emerald-500',
    iconShadow: 'shadow-emerald-500/25',
    label: 'text-emerald-600 dark:text-emerald-400',
    checkBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    checkIcon: 'text-emerald-600 dark:text-emerald-400',
    hoverBorder: 'hover:border-emerald-200 dark:hover:border-emerald-800',
  },
  {
    iconBg: 'bg-amber-500',
    iconShadow: 'shadow-amber-500/25',
    label: 'text-amber-600 dark:text-amber-400',
    checkBg: 'bg-amber-100 dark:bg-amber-900/30',
    checkIcon: 'text-amber-600 dark:text-amber-400',
    hoverBorder: 'hover:border-amber-200 dark:hover:border-amber-800',
  },
  {
    iconBg: 'bg-purple-500',
    iconShadow: 'shadow-purple-500/25',
    label: 'text-purple-600 dark:text-purple-400',
    checkBg: 'bg-purple-100 dark:bg-purple-900/30',
    checkIcon: 'text-purple-600 dark:text-purple-400',
    hoverBorder: 'hover:border-purple-200 dark:hover:border-purple-800',
  },
  {
    iconBg: 'bg-rose-500',
    iconShadow: 'shadow-rose-500/25',
    label: 'text-rose-600 dark:text-rose-400',
    checkBg: 'bg-rose-100 dark:bg-rose-900/30',
    checkIcon: 'text-rose-600 dark:text-rose-400',
    hoverBorder: 'hover:border-rose-200 dark:hover:border-rose-800',
  },
];

const DEMO_COLORS = [
  {
    bg: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
    border: 'border-blue-200 dark:border-blue-800/50',
    text: 'text-blue-600 dark:text-blue-400',
    button: 'bg-blue-500 hover:bg-blue-600',
    ping: 'bg-blue-400',
    dot: 'bg-blue-500',
    shadow: 'shadow-blue-500/25',
  },
  {
    bg: 'from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20',
    border: 'border-emerald-200 dark:border-emerald-800/50',
    text: 'text-emerald-600 dark:text-emerald-400',
    button: 'bg-emerald-500 hover:bg-emerald-600',
    ping: 'bg-emerald-400',
    dot: 'bg-emerald-500',
    shadow: 'shadow-emerald-500/25',
  },
  {
    bg: 'from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20',
    border: 'border-amber-200 dark:border-amber-800/50',
    text: 'text-amber-600 dark:text-amber-400',
    button: 'bg-amber-500 hover:bg-amber-600',
    ping: 'bg-amber-400',
    dot: 'bg-amber-500',
    shadow: 'shadow-amber-500/25',
  },
  {
    bg: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20',
    border: 'border-purple-200 dark:border-purple-800/50',
    text: 'text-purple-600 dark:text-purple-400',
    button: 'bg-purple-500 hover:bg-purple-600',
    ping: 'bg-purple-400',
    dot: 'bg-purple-500',
    shadow: 'shadow-purple-500/25',
  },
  {
    bg: 'from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20',
    border: 'border-rose-200 dark:border-rose-800/50',
    text: 'text-rose-600 dark:text-rose-400',
    button: 'bg-rose-500 hover:bg-rose-600',
    ping: 'bg-rose-400',
    dot: 'bg-rose-500',
    shadow: 'shadow-rose-500/25',
  },
];

export function HomeSolutionsSection() {
  const t = useTranslations('Homepage');
  const homeSolutions = getHomeSolutions(key => t(key.replace('Homepage.', '') as any));
  const [activeTab, setActiveTab] = useState(homeSolutions[0]?.id || '');
  const activeTabIndex = homeSolutions.findIndex(s => s.id === activeTab);
  const activeSolution = homeSolutions.find(s => s.id === activeTab) || homeSolutions[0];

  if (!activeSolution) {
    return null;
  }

  const contentColor = CONTENT_COLORS[activeTabIndex >= 0 ? activeTabIndex % CONTENT_COLORS.length : 0]!;
  const demoColor = DEMO_COLORS[activeTabIndex >= 0 ? activeTabIndex % DEMO_COLORS.length : 0]!;

  return (
    <Section
      id="solutions"
      className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      noPadding
      containerClassName="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 lg:py-28"
    >
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary-500/5 absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-12 text-center lg:mb-16">
        <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold tracking-wider uppercase">
          <span className="bg-primary-500 h-2 w-2 animate-pulse rounded-full" />
          {t('solutions_badge')}
        </div>
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          {t('solutions_title').replace(t('solutions_highlight'), '')}
          <span className="text-primary-600 dark:text-primary-400">
            {t('solutions_highlight')}
          </span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {t('solutions_desc')}
        </p>
        <Button
          asChild
          size="md"
          variant="outline"
          className="group border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 h-11 rounded-full border-2 px-6 text-sm"
        >
          <Link href="/platform">
            {t('solutions_cta')}
            {' '}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>

      {/* Tabs */}
      <div className="relative z-10 mb-8">
        <div
          className="scrollbar-hide flex gap-2 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:gap-3 lg:overflow-visible lg:pb-0"
          role="tablist"
          aria-label="Solution categories"
        >
          {homeSolutions.map((sol, idx) => {
            const Icon = sol.icon;
            const isActive = activeTab === sol.id;
            const color = TAB_COLORS[idx % TAB_COLORS.length]!;

            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${sol.id}`}
                id={`tab-${sol.id}`}
                className={`group relative flex min-w-[120px] shrink-0 flex-col items-center gap-2 rounded-2xl px-5 py-4 text-center transition-all duration-300 lg:min-w-0 ${
                  isActive
                    ? `bg-white shadow-xl ring-4 dark:bg-slate-800 ${color.ring} scale-105`
                    : 'border border-slate-200/50 bg-white/60 hover:bg-white hover:shadow-lg dark:border-slate-700/50 dark:bg-slate-800/60 dark:hover:bg-slate-800'
                }`}
              >
                {isActive && (
                  <div
                    className={`absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full ${color.active} shadow-lg`}
                  />
                )}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive
                      ? `${color.active} shadow-lg`
                      : 'bg-slate-100 group-hover:bg-slate-200 dark:bg-slate-700 dark:group-hover:bg-slate-600'
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-colors ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`}
                  />
                </div>
                <div>
                  <div
                    className={`text-sm font-semibold transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
                  >
                    {sol.label}
                  </div>
                  <div
                    className={`text-xs font-medium tracking-wide uppercase ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 dark:text-slate-500'}`}
                  >
                    {sol.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Panel */}
      <div className="relative z-10">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
          <div
            className={`absolute top-0 right-0 h-full w-1/2 ${activeSolution.bg} pointer-events-none opacity-5`}
          />

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
              {/* Left side - Module info */}
              <div className="lg:col-span-3">
                <div className="mb-6 flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${contentColor.iconBg} shadow-lg ${contentColor.iconShadow}`}
                  >
                    <activeSolution.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {activeSolution.label}
                    </h3>
                    <p
                      className={`text-sm font-medium ${contentColor.label} tracking-wide uppercase`}
                    >
                      {activeSolution.category}
                    </p>
                  </div>
                </div>

                <p className="mb-8 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  {activeSolution.impact}
                </p>

                <div>
                  <h4 className="mb-4 text-sm font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    {t('solutions_features')}
                  </h4>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {activeSolution.modules.map((mod, modIdx) => (
                      <div
                        key={modIdx}
                        className={`flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3 transition-all dark:border-slate-700/50 dark:bg-slate-800/50 ${contentColor.hoverBorder} hover:shadow-md`}
                      >
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-lg ${contentColor.checkBg}`}
                        >
                          <CheckCircle2 className={`h-4 w-4 ${contentColor.checkIcon}`} />
                        </div>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {mod}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side - Demo CTA */}
              <div className="lg:col-span-2">
                <div
                  className={`flex h-full flex-col rounded-2xl border bg-linear-to-br p-2 ${demoColor.bg} ${demoColor.border}`}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900 shadow-2xl">
                    <img
                      src="/images/dashboard-mockup.png"
                      alt={`${activeSolution.label} Dashboard Interface`}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Glass Overlay Effect */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
