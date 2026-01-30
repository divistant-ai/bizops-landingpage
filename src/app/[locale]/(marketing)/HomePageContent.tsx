'use client';

import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  CheckCircle2,
  Database,
  Lock,
  PlayCircle,
  Shield,
  X,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import TestimonialsSection from '@/components/TestimonialsSection';
import {
  Button,
  GlassCard,
  Grid,
  HeroBackground,
  OptimizedImage,
  SectionHeader,
  Stack,
} from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import { InfiniteScrollLoop } from '@/components/ui/LazyComponents';
import {
  getHomeIndustriesData,
  getHomeProblems,
  getHomeProcess,
  getHomeRolesData,
  getHomeSolutions,
  getHomeUVP,
  homeIntegrations,
} from '@/data/homeContent';
import { glass, modularTypography, sectionPaddingHybrid } from '@/design-tokens';

export default function HomePageContent() {
  const t = useTranslations('Homepage');
  const locale = useLocale();

  // Get translated data
  const homeProblems = getHomeProblems((key) => t(key.replace('Homepage.', '') as any));
  const homeUVP = getHomeUVP((key) => t(key.replace('Homepage.', '') as any));
  const homeSolutions = getHomeSolutions((key) => t(key.replace('Homepage.', '') as any));
  const homeProcess = getHomeProcess((key) => t(key.replace('Homepage.', '') as any));
  const homeIndustriesData = getHomeIndustriesData((key) => t(key.replace('Homepage.', '') as any));
  const homeRolesData = getHomeRolesData((key) => t(key.replace('Homepage.', '') as any));

  const [activeTab, setActiveTab] = useState(homeSolutions[0]?.id || '');
  const activeTabIndex = homeSolutions.findIndex((s) => s.id === activeTab);
  const activeSolution = homeSolutions.find((s) => s.id === activeTab) || homeSolutions[0];
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Sample YouTube video IDs for each module (demo/explainer videos)
  const moduleVideoIds: Record<string, string> = {
    hr: 'dQw4w9WgXcQ', // Sample: Rick Astley - will be replaced with actual demo
    finance: 'jNQXAC9IVRw', // Sample: Me at the zoo (first YouTube video)
    operations: 'kJQP7kiw5Fk', // Sample: Despacito
    sales: 'RgKAFK5djSk', // Sample: See You Again
    projects: '9bZkp7q19f0', // Sample: Gangnam Style
  };

  if (!activeSolution) {
    return null; // Early return if no solution found
  }

  // Helper to convert object to array for mapping
  const industries = Object.entries(homeIndustriesData).map(([key, val]) => ({
    id: key,
    ...val,
  }));
  const roles = Object.entries(homeRolesData).map(([key, val]) => ({ id: key, ...val }));

  return (
    <>
      {/* 1. HERO SECTION - Hybrid Design (Compact) */}
      <Section
        id="hero"
        className="relative overflow-hidden bg-slate-50 dark:bg-slate-950"
        noPadding
        containerClassName={sectionPaddingHybrid.hero}
      >
        {/* Background Elements */}
        <HeroBackground />

        <Container size="7xl" className="relative z-10">
          {/* Two-Column Layout: Text Left, Image Right */}
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Text Content (7 cols) */}
            <div className="order-1 text-center lg:col-span-7 lg:text-left">
              {/* Announcement Pill - Glassmorphism */}
              <FadeIn
                delay={0.1}
                className="mb-6 inline-flex w-full justify-center lg:justify-start"
              >
                <div
                  role="button"
                  tabIndex={0}
                  className={`group focus:ring-primary-500 inline-flex cursor-pointer items-center gap-3 rounded-full px-5 py-2 transition-all duration-300 hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:outline-none ${glass.light}`}
                  aria-label={t('announcement')}
                >
                  <span className="group-hover:text-primary-700 dark:group-hover:text-primary-400 text-sm font-semibold text-slate-700 transition-colors dark:text-slate-300">
                    {t('announcement')}
                  </span>
                  <ArrowRight className="group-hover:text-primary-600 dark:group-hover:text-primary-400 h-3.5 w-3.5 text-slate-400 transition-all group-hover:translate-x-0.5 dark:text-slate-500" />
                </div>
              </FadeIn>

              {/* Main Headline - Modular Typography - Fixed for Desktop */}
              <FadeIn delay={0.2}>
                <div className="mb-6">
                  <h1
                    className={`${modularTypography.hero} leading-[1.1] text-slate-900 dark:text-white`}
                  >
                    <span className="block">{t('hero_title_prefix')}</span>
                    <span className="block text-blue-600 dark:text-blue-400">
                      {t('hero_title_highlight')}
                    </span>
                  </h1>
                </div>
              </FadeIn>

              {/* Subheadline */}
              <FadeIn delay={0.3}>
                <p
                  className={`mx-auto mb-8 max-w-xl lg:mx-0 ${modularTypography.body} font-normal text-slate-600 dark:text-slate-400`}
                >
                  {t('hero_description')}
                </p>
              </FadeIn>

              {/* CTAs - Primary more prominent */}
              <FadeIn delay={0.4}>
                <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    variant="clay"
                    size="lg"
                    className="h-14 px-10 text-lg font-bold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40"
                  >
                    <Link href="/demo">{t('cta_demo')}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="h-14 border border-slate-200 px-8 text-base font-medium text-slate-600 hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-white"
                  >
                    <Link href="/tools/pricing-calculator">
                      <Calculator className="mr-2 h-4 w-4" />
                      {t('cta_pricing')}
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Dashboard Preview (5 cols) */}
            <div className="relative order-2 lg:col-span-5">
              <FadeIn delay={0.5}>
                <div className="group relative">
                  {/* Glass frame wrapper */}
                  <div
                    className={`relative rounded-2xl p-2 ${glass.medium} transition-all duration-500 group-hover:shadow-[0_24px_48px_rgba(37,99,235,0.15)]`}
                  >
                    <div className="relative aspect-[16/10] transform overflow-hidden rounded-xl bg-slate-900 shadow-inner">
                      <OptimizedImage
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                        alt="Preview dashboard BizOps ERP"
                        width={1920}
                        height={1080}
                        priority={true}
                        loading="eager"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="h-full w-full object-cover opacity-95 transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
                      />

                      {/* Overlay UI Badge - Glass */}
                      <Stack
                        direction="horizontal"
                        gap={2}
                        align="center"
                        className={`absolute top-3 left-3 z-30 rounded-full px-3 py-1.5 text-[10px] ${glass.strong}`}
                      >
                        <Lock className="h-3 w-3 text-emerald-500" />{' '}
                        <span className="font-mono font-medium text-slate-700 dark:text-slate-200">
                          secure://bizops.id/dashboard
                        </span>
                      </Stack>
                    </div>
                  </div>

                  {/* Floating Stats Card - Bottom Right - with pulse animation */}
                  <div
                    className={`absolute -right-4 -bottom-4 rounded-xl p-4 md:-right-6 md:-bottom-6 ${glass.strong} animate-float-slow shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {t('hero_savings_label') || 'Penghematan'}
                        </p>
                        <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                          85% {locale === 'id' ? 'Biaya' : 'Cost'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Users Card - Top Left - with pulse animation */}
                  <div
                    className={`absolute -top-4 -left-4 rounded-xl p-3 md:-top-6 md:-left-6 ${glass.strong} animate-float-slow hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:block`}
                    style={{ animationDelay: '1s' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-xs font-bold text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
                          R
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-xs font-bold text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
                          B
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-xs font-bold text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
                          D
                        </div>
                      </div>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                        {t('hero_companies_count') || '500+ Perusahaan'}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>

        {/* Social Proof - Full Width Slider */}
        <FadeIn delay={0.6}>
          <div className="mt-12 border-t border-slate-200/50 pt-8 dark:border-slate-800/50">
            <p className="mb-6 text-center text-sm font-semibold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              {t('trusted_by')}
            </p>
            <div className="w-full overflow-hidden">
              <InfiniteScrollLoop speed={30} direction="left">
                {[
                  'Divistant',
                  'Dikstra',
                  'Arena Rasa Nusantara',
                  'Aero Travel Indonesia',
                  'TechCorp',
                  'BuildCo',
                  'PT Maju Bersama',
                  'Distribusi Nusantara',
                  'Konstruksi Prima',
                  'Mitra Sejahtera',
                ].map((brand) => (
                  <div
                    key={brand}
                    className="mx-3 cursor-default rounded-full border border-slate-100 bg-white px-6 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                  >
                    <span className="text-sm font-semibold tracking-tight whitespace-nowrap text-slate-700 dark:text-slate-300">
                      {brand}
                    </span>
                  </div>
                ))}
              </InfiniteScrollLoop>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* 2. PROBLEMS SECTION - Modern Spacious Layout */}
      <Section
        id="problems"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        noPadding
        containerClassName={sectionPaddingHybrid.default}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-rose-100 blur-3xl dark:bg-rose-900/20" />
          <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl dark:bg-orange-900/20" />
        </div>

        <Container size="7xl" className="relative z-10">
          {/* Centered Header */}
          <FadeIn>
            <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-rose-100 px-5 py-2.5 text-sm font-bold tracking-wider text-rose-700 uppercase dark:bg-rose-900/30 dark:text-rose-400">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-rose-500"></span>
                {t('problems_badge') || 'Masalah Umum'}
              </div>
              <h2 className="mb-6 text-3xl leading-tight font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
                {t('problems_title').replace(t('problems_stuck'), '')}{' '}
                <span className="text-rose-600 dark:text-rose-400">{t('problems_stuck')}</span>
              </h2>
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl dark:text-slate-400">
                {t('problems_desc')}
              </p>
            </div>
          </FadeIn>

          {/* Cards Grid - 3 columns on desktop */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {homeProblems.map((prob, idx) => {
              const Icon = prob.icon;
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
                      {/* Top Gradient Line */}
                      <div
                        className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-r ${color.bg} rounded-t-2xl`}
                      />

                      {/* Number Badge */}
                      <div
                        className={`absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color.bg} text-lg font-bold text-white shadow-lg ${color.shadow}`}
                      >
                        {idx + 1}
                      </div>

                      {/* Icon */}
                      <div className={`mt-4 mb-6 inline-flex rounded-2xl p-4 ${color.light}`}>
                        <Icon className={`h-8 w-8 ${color.text}`} strokeWidth={1.5} />
                      </div>

                      {/* Content */}
                      <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                        {prob.title}
                      </h3>
                      <span
                        className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${color.light} ${color.text}`}
                      >
                        {prob.subtitle}
                      </span>
                      <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                        {prob.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. SOLUTIONS SECTION - Modern Bento-style Design */}
      <Section
        id="solutions"
        className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        noPadding
        containerClassName="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 lg:py-28"
      >
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-primary-500/5 absolute top-0 left-1/4 h-96 w-96 rounded-full blur-3xl" />
          <div className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        </div>

        {/* Header - Centered with strong visual hierarchy */}
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
              {t('solutions_cta')}{' '}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Horizontal scrollable tabs for mobile, grid for desktop */}
        <div className="relative z-10 mb-8">
          <div
            className="scrollbar-hide flex gap-2 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:gap-3 lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label="Solution categories"
          >
            {homeSolutions.map((sol, idx) => {
              const Icon = sol.icon;
              const isActive = activeTab === sol.id;
              const tabColors = [
                { active: 'bg-blue-500', ring: 'ring-blue-500/20' },
                { active: 'bg-emerald-500', ring: 'ring-emerald-500/20' },
                { active: 'bg-amber-500', ring: 'ring-amber-500/20' },
                { active: 'bg-purple-500', ring: 'ring-purple-500/20' },
                { active: 'bg-rose-500', ring: 'ring-rose-500/20' },
              ];
              const color = tabColors[idx % tabColors.length]!;

              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(sol.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${sol.id}`}
                  id={`tab-${sol.id}`}
                  className={`group relative flex min-w-[120px] flex-shrink-0 flex-col items-center gap-2 rounded-2xl px-5 py-4 text-center transition-all duration-300 lg:min-w-0 ${
                    isActive
                      ? `bg-white shadow-xl ring-4 dark:bg-slate-800 ${color.ring} scale-105`
                      : 'border border-slate-200/50 bg-white/60 hover:bg-white hover:shadow-lg dark:border-slate-700/50 dark:bg-slate-800/60 dark:hover:bg-slate-800'
                  }`}
                >
                  {/* Active indicator dot */}
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

        {/* Content Panel - Modern card design */}
        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            {/* Decorative gradient overlay */}
            <div
              className={`absolute top-0 right-0 h-full w-1/2 ${activeSolution.bg} pointer-events-none opacity-5`}
            />

            <div className="relative p-6 sm:p-8 lg:p-10">
              {(() => {
                // Content panel color themes matching tab colors
                const contentColors = [
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
                const contentColor =
                  contentColors[activeTabIndex >= 0 ? activeTabIndex % contentColors.length : 0]!;

                return (
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

                    {/* Right side - Demo CTA with Video Placeholder */}
                    <div className="lg:col-span-2">
                      {(() => {
                        // Color themes matching tab colors
                        const demoColors = [
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
                        const demoColor =
                          demoColors[activeTabIndex >= 0 ? activeTabIndex % demoColors.length : 0]!;

                        return (
                          <div
                            className={`h-full rounded-2xl bg-gradient-to-br ${demoColor.bg} border ${demoColor.border} flex flex-col p-5`}
                          >
                            {/* Video Thumbnail - Clickable to open modal */}
                            <button
                              onClick={() => setIsVideoModalOpen(true)}
                              className="group focus:ring-primary-500 relative mb-4 aspect-video w-full cursor-pointer overflow-hidden rounded-xl bg-slate-900 focus:ring-2 focus:ring-offset-2 focus:outline-none"
                              aria-label="Putar video demo"
                            >
                              {/* YouTube Thumbnail */}
                              <img
                                src={`https://img.youtube.com/vi/${moduleVideoIds[activeSolution.id] || 'dQw4w9WgXcQ'}/maxresdefault.jpg`}
                                alt={`Demo video ${activeSolution.label}`}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              {/* Dark overlay */}
                              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
                              {/* Play button overlay */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                  className={`flex h-16 w-16 items-center justify-center rounded-full ${demoColor.button} text-white shadow-2xl ${demoColor.shadow} transition-transform group-hover:scale-110`}
                                >
                                  <PlayCircle className="h-8 w-8" />
                                </div>
                              </div>
                              {/* Duration badge */}
                              <div className="absolute right-2 bottom-2 rounded bg-black/70 px-2 py-1 text-xs font-medium text-white">
                                2:00
                              </div>
                              {/* Live indicator */}
                              <div className="absolute top-2 left-2 flex items-center gap-1.5">
                                <span className="relative flex h-2 w-2">
                                  <span
                                    className={`absolute inline-flex h-full w-full animate-ping rounded-full ${demoColor.ping} opacity-75`}
                                  ></span>
                                  <span
                                    className={`relative inline-flex h-2 w-2 rounded-full ${demoColor.dot}`}
                                  ></span>
                                </span>
                                <span className="rounded bg-black/50 px-1.5 py-0.5 text-xs font-medium text-white">
                                  DEMO
                                </span>
                              </div>
                            </button>

                            {/* Text content */}
                            <div className="flex flex-1 flex-col justify-center text-center">
                              <h5 className="mb-1 text-base font-bold text-slate-900 dark:text-white">
                                {t('solutions_demo_title')}
                              </h5>
                              <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                                {t('solutions_demo_desc')}
                              </p>
                              <Button
                                onClick={() => setIsVideoModalOpen(true)}
                                size="md"
                                variant="primary"
                                className={`h-11 w-full rounded-xl text-sm font-semibold ${demoColor.button} text-white shadow-lg ${demoColor.shadow} border-0`}
                              >
                                <PlayCircle className="mr-2 h-4 w-4" />
                                {t('solutions_demo_cta')}
                              </Button>
                              <Link
                                href="/platform"
                                className={`mt-3 text-sm font-medium ${demoColor.text} inline-flex items-center justify-center gap-1 hover:underline`}
                              >
                                {t('view_pricing_link' as any)}
                                <ArrowRight className="h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        );
                      })()}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </Section>

      {/* 4. VALUE PROPOSITION (UVP) - Modern Bento Grid */}
      <Section
        id="uvp"
        className="relative overflow-hidden bg-slate-50 dark:bg-slate-950"
        noPadding
        containerClassName={sectionPaddingHybrid.default}
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 mb-12 text-center lg:mb-16">
          <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold tracking-wider uppercase">
            <span className="bg-primary-500 h-2 w-2 animate-pulse rounded-full" />
            Keunggulan Kami
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {t('uvp_title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {t('uvp_desc')}
          </p>
        </div>

        {/* Bento Grid - Balanced 2x2 Layout */}
        <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {(() => {
            // Bento card configurations - all same size, different colors
            const bentoConfigs = [
              {
                type: 'gradient',
                bg: 'from-blue-500 via-blue-600 to-indigo-600',
                iconBg: 'bg-white/20',
                textColor: 'text-white',
                subtitleColor: 'text-blue-100',
                descColor: 'text-blue-50/90',
                accent: 'blue',
              },
              {
                type: 'gradient',
                bg: 'from-purple-500 via-purple-600 to-pink-600',
                iconBg: 'bg-white/20',
                textColor: 'text-white',
                subtitleColor: 'text-purple-100',
                descColor: 'text-purple-50/90',
                accent: 'purple',
              },
              {
                type: 'gradient',
                bg: 'from-emerald-500 via-emerald-600 to-teal-600',
                iconBg: 'bg-white/20',
                textColor: 'text-white',
                subtitleColor: 'text-emerald-100',
                descColor: 'text-emerald-50/90',
                accent: 'emerald',
              },
              {
                type: 'gradient',
                bg: 'from-amber-500 via-orange-500 to-orange-600',
                iconBg: 'bg-white/20',
                textColor: 'text-white',
                subtitleColor: 'text-amber-100',
                descColor: 'text-amber-50/90',
                accent: 'amber',
              },
            ];

            return homeUVP.map((uvp, idx) => {
              const Icon = uvp.icon;
              const config = bentoConfigs[idx % bentoConfigs.length]!;

              return (
                <FadeIn key={idx} delay={0.1 + idx * 0.1}>
                  <div className="group h-full">
                    <div
                      className={`relative h-full overflow-hidden rounded-3xl bg-gradient-to-br transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${config.bg} min-h-[280px] p-6 sm:min-h-[300px] sm:p-8 lg:p-10`}
                    >
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div
                          className="absolute inset-0"
                          style={{
                            backgroundImage:
                              'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '24px 24px',
                          }}
                        />
                      </div>

                      {/* Decorative blurs */}
                      <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                      <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

                      {/* Floating icon decoration */}
                      <div className="pointer-events-none absolute -right-6 -bottom-6">
                        <Icon
                          className="h-32 w-32 transform text-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-36 sm:w-36"
                          strokeWidth={0.5}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex h-full flex-col">
                        {/* Icon */}
                        <div
                          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${config.iconBg} mb-5 shadow-lg backdrop-blur-sm`}
                        >
                          <Icon className="h-7 w-7 text-white" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <h3
                            className={`text-xl font-bold sm:text-2xl lg:text-2xl ${config.textColor} mb-2`}
                          >
                            {uvp.title}
                          </h3>
                          <p
                            className={`text-xs font-bold tracking-wide uppercase sm:text-sm ${config.subtitleColor} mb-3`}
                          >
                            {uvp.subtitle}
                          </p>
                          <p
                            className={`text-sm sm:text-base ${config.descColor} line-clamp-3 leading-relaxed`}
                          >
                            {uvp.desc}
                          </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-5 border-t border-white/20 pt-4">
                          <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-3">
                            {t('learn_more_short' as any)}
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            });
          })()}
        </div>
      </Section>

      {/* 5. PRICING COMPARISON - Modern Visual Comparison */}
      <Section
        id="pricing-comparison"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
        noPadding
        containerClassName={sectionPaddingHybrid.default}
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />
          <div className="absolute -right-32 bottom-1/3 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 mb-12 text-center lg:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-gradient-to-r from-slate-100 to-slate-50 px-4 py-2 text-sm font-bold tracking-wider uppercase dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
            <span className="text-slate-600 dark:text-slate-400">
              {t('pricing_comparison_badge' as any)}
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            {t('pricing_title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {t('pricing_desc')}
          </p>
        </div>

        {/* VS Comparison Cards */}
        <div className="relative z-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Problem Card - "Before" Style */}
          <div className="group relative">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-red-500 via-red-600 to-rose-600 p-1">
              <div className="h-full rounded-[22px] bg-white p-6 sm:p-8 dark:bg-slate-900">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                      <X className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {t('pricing_problem_title')}
                      </h3>
                      <p className="text-sm font-medium text-red-500">
                        {t('pricing_old_approach' as any)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pain Points */}
                <ul className="mb-8 space-y-4">
                  {[
                    'pricing_problem_1',
                    'pricing_problem_2',
                    'pricing_problem_3',
                    'pricing_problem_4',
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/50 p-3 dark:border-red-900/30 dark:bg-red-950/20"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                        <X className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">
                        {t(item as any)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Cost Footer */}
                <div className="mt-auto border-t-2 border-dashed border-red-200 pt-6 dark:border-red-900/50">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="mb-1 text-xs font-bold tracking-wider text-red-500 uppercase">
                        {t('pricing_hidden_cost')}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                          15jt
                        </span>
                        <span className="text-lg text-slate-500">++</span>
                        <span className="text-sm text-slate-400">/{t('month')}</span>
                      </div>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                      <ArrowUpRight className="h-6 w-6 text-red-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Card - "After" Style */}
          <div className="group relative">
            {/* Glow effect */}
            <div className="via-primary-500 absolute -inset-1 rounded-[28px] bg-gradient-to-r from-emerald-500 to-emerald-500 opacity-20 blur-lg transition-opacity duration-500 group-hover:opacity-30"></div>

            <div className="via-primary-500 relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 p-1">
              <div className="h-full rounded-[22px] bg-gradient-to-br from-white to-emerald-50/50 p-6 sm:p-8 dark:from-slate-900 dark:to-emerald-950/20">
                {/* Recommended Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div className="to-primary-500 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                    </span>
                    {t('pricing_recommended')}
                  </div>
                </div>

                {/* Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="to-primary-500 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {t('pricing_solution_title')}
                    </h3>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                      {t('bizops_platform' as any)}
                    </p>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="mb-8 space-y-4">
                  {[
                    'pricing_solution_1',
                    'pricing_solution_2',
                    'pricing_solution_3',
                    'pricing_solution_4',
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/70 p-3 dark:border-emerald-900/30 dark:bg-emerald-950/30"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-md shadow-emerald-500/30">
                        <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                        {t(item as any)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Footer */}
                <div className="to-primary-500/10 dark:to-primary-500/20 mt-auto rounded-2xl border border-emerald-200/50 bg-gradient-to-br from-emerald-500/10 p-5 dark:border-emerald-800/50 dark:from-emerald-500/20">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="mb-1 text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                        {t('pricing_starting_from')}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                          {t('pricing_amount' as any)}
                        </span>
                        <span className="text-sm text-slate-500">/{t('month')}</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-500">{t('pricing_subtitle')}</p>
                    </div>
                    <div className="to-primary-500 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 shadow-lg shadow-emerald-500/30">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="to-primary-500 hover:to-primary-600 h-12 w-full border-0 bg-gradient-to-r from-emerald-500 text-base font-bold text-white shadow-lg shadow-emerald-500/30 hover:from-emerald-600 hover:shadow-xl hover:shadow-emerald-500/40"
                  >
                    <Link href="/tools/pricing-calculator">{t('cta_view_pricing')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VS Badge - Center */}
        <div className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-100 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800">
            <span className="text-xl font-black text-slate-400">VS</span>
          </div>
        </div>
      </Section>

      {/* 6. PROCESS SECTION - Modern Timeline */}
      <Section
        id="process"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
        noPadding
        containerClassName={sectionPaddingHybrid.default}
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="bg-primary-500/5 absolute bottom-20 left-10 h-96 w-96 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Centered Header */}
          <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
            <div className="to-primary-50 dark:to-primary-900/20 mb-6 inline-flex items-center gap-3 rounded-full border border-blue-100 bg-gradient-to-r from-blue-50 px-5 py-2.5 text-sm font-bold tracking-wider uppercase dark:border-blue-800 dark:from-blue-900/20">
              <span className="to-primary-600 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 text-sm font-bold text-white shadow-lg shadow-blue-500/30">
                30
              </span>
              <span className="text-blue-600 dark:text-blue-400">
                {t('process_days_badge') || 'Hari Go-Live'}
              </span>
            </div>
            <h2 className="mb-6 text-3xl leading-tight font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              {t('process_title').replace(t('process_days'), '')}{' '}
              <span className="text-blue-600 dark:text-blue-400">{t('process_days')}</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {t('process_desc_1')} {t('process_desc_2')} {t('process_desc_3')}
            </p>
            <Button
              asChild
              size="md"
              variant="clay"
              className="shadow-primary-500/20 h-12 rounded-xl px-8 text-sm font-semibold shadow-lg"
            >
              <Link href="/services">{t('process_cta')}</Link>
            </Button>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {homeProcess.map((step, idx) => {
                const weekLabels = [
                  t('process_week_1') || 'Minggu 1',
                  t('process_week_2') || 'Minggu 2',
                  t('process_week_3') || 'Minggu 3',
                  t('process_week_4') || 'Minggu 4',
                ];
                const stepColors = [
                  {
                    bg: 'bg-blue-600',
                    bgLight: 'bg-blue-50 dark:bg-blue-900/20',
                    text: 'text-blue-600 dark:text-blue-400',
                    border: 'border-blue-100 dark:border-blue-900',
                    hoverBorder: 'group-hover:border-blue-300 dark:group-hover:border-blue-700',
                  },
                  {
                    bg: 'bg-emerald-600',
                    bgLight: 'bg-emerald-50 dark:bg-emerald-900/20',
                    text: 'text-emerald-600 dark:text-emerald-400',
                    border: 'border-emerald-100 dark:border-emerald-900',
                    hoverBorder:
                      'group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
                  },
                  {
                    bg: 'bg-amber-500',
                    bgLight: 'bg-amber-50 dark:bg-amber-900/20',
                    text: 'text-amber-600 dark:text-amber-400',
                    border: 'border-amber-100 dark:border-amber-900',
                    hoverBorder: 'group-hover:border-amber-300 dark:group-hover:border-amber-700',
                  },
                  {
                    bg: 'bg-rose-600',
                    bgLight: 'bg-rose-50 dark:bg-rose-900/20',
                    text: 'text-rose-600 dark:text-rose-400',
                    border: 'border-rose-100 dark:border-rose-900',
                    hoverBorder: 'group-hover:border-rose-300 dark:group-hover:border-rose-700',
                  },
                ];
                const color = stepColors[idx % stepColors.length]!;
                const stepNumber = String(idx + 1).padStart(2, '0');

                return (
                  <FadeIn key={idx} delay={0.1 + idx * 0.1}>
                    <div className="group h-full">
                      <div
                        className={`relative h-full rounded-2xl border bg-white dark:bg-slate-900 ${color.border} ${color.hoverBorder} p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}
                      >
                        {/* Step Number Badge */}
                        <div className="mb-5 flex items-center justify-between">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl ${color.bg} text-xl font-bold text-white shadow-lg`}
                          >
                            {stepNumber}
                          </div>
                          <span
                            className={`text-xs font-semibold ${color.text} ${color.bgLight} rounded-full px-3 py-1.5 tracking-wide uppercase`}
                          >
                            {weekLabels[idx]}
                          </span>
                        </div>

                        {/* Content */}
                        <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* 7. INDUSTRIES & ROLES - Vertical Cards with Auto Slider */}
      <Section
        id="industries"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
        noPadding
        containerClassName={sectionPaddingHybrid.default}
      >
        {/* Decorative blurs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
          <div className="bg-primary-500/5 absolute right-10 bottom-20 h-96 w-96 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Industries Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold tracking-wider uppercase">
              {t('industries_title')}
            </div>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
              {t('industries_desc')}
            </h2>
          </div>

          {/* Industries - Infinity Slider (Story-style cards, 4 per screen) */}
          <div className="-mx-5 mb-20 pt-4 pb-8 sm:-mx-6 md:-mx-8 lg:-mx-12">
            <InfiniteScrollLoop speed={40} className="py-4">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                const colorThemes = [
                  {
                    bg: 'bg-blue-600',
                    text: 'text-blue-600 dark:text-blue-400',
                    border: 'border-blue-100 dark:border-blue-900',
                    overlay: 'from-blue-900/60',
                  },
                  {
                    bg: 'bg-emerald-600',
                    text: 'text-emerald-600 dark:text-emerald-400',
                    border: 'border-emerald-100 dark:border-emerald-900',
                    overlay: 'from-emerald-900/60',
                  },
                  {
                    bg: 'bg-amber-500',
                    text: 'text-amber-600 dark:text-amber-400',
                    border: 'border-amber-100 dark:border-amber-900',
                    overlay: 'from-amber-900/60',
                  },
                  {
                    bg: 'bg-purple-600',
                    text: 'text-purple-600 dark:text-purple-400',
                    border: 'border-purple-100 dark:border-purple-900',
                    overlay: 'from-purple-900/60',
                  },
                  {
                    bg: 'bg-rose-600',
                    text: 'text-rose-600 dark:text-rose-400',
                    border: 'border-rose-100 dark:border-rose-900',
                    overlay: 'from-rose-900/60',
                  },
                  {
                    bg: 'bg-cyan-600',
                    text: 'text-cyan-600 dark:text-cyan-400',
                    border: 'border-cyan-100 dark:border-cyan-900',
                    overlay: 'from-cyan-900/60',
                  },
                ];
                const theme = colorThemes[idx % colorThemes.length]!;

                // Unsplash placeholder images for each industry
                const industryImages = [
                  'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&h=600&fit=crop', // Manufaktur - factory
                  'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=600&fit=crop', // Retail - store
                  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=600&fit=crop', // Jasa - office meeting
                  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=600&fit=crop', // Konstruksi - construction
                  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=600&fit=crop', // F&B - restaurant
                  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=600&fit=crop', // Kesehatan - hospital
                ];

                return (
                  <Link
                    key={ind.id}
                    href={`/solutions/${ind.id}`}
                    className="group mx-2 block w-[220px] flex-shrink-0 py-2 sm:w-[250px]"
                  >
                    <div
                      className={`relative overflow-visible rounded-2xl border bg-white dark:bg-slate-900 ${theme.border} shadow-lg transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl`}
                    >
                      {/* Top image banner - story style */}
                      <div className="relative h-44 overflow-hidden rounded-t-2xl">
                        <img
                          src={industryImages[idx % industryImages.length]}
                          alt={ind.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${theme.overlay} via-transparent to-transparent opacity-60`}
                        />
                        <div className="absolute right-0 bottom-0 left-0 h-20 bg-gradient-to-t from-white to-transparent dark:from-slate-900" />
                      </div>

                      {/* Icon - floating on banner */}
                      <div className="relative -mt-8 px-5">
                        <div
                          className={`inline-flex h-16 w-16 items-center justify-center rounded-xl ${theme.bg} border-4 border-white shadow-xl dark:border-slate-900`}
                        >
                          <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </div>
                      </div>

                      {/* Content - compact */}
                      <div className="p-5 pt-3">
                        <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-2 text-lg font-bold text-slate-900 transition-colors dark:text-white">
                          {ind.title}
                        </h3>
                        <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {ind.description}
                        </p>

                        {/* CTA */}
                        <div
                          className={`inline-flex items-center gap-2 text-sm font-semibold ${theme.text}`}
                        >
                          <span>{t('learn_more_short' as any)}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </InfiniteScrollLoop>
          </div>

          {/* Roles - Auto-scrolling slider (opposite direction from industries) */}
          <div className="border-t border-slate-200 pt-14 dark:border-slate-800">
            <div className="mb-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                {t('roles_title')}
              </h3>
              <p className="mx-auto max-w-2xl text-base text-slate-600 dark:text-slate-400">
                {t('roles_desc')}
              </p>
            </div>

            {/* Roles Infinite Scroll - Right direction (opposite of industries) */}
            <div className="-mx-5 pb-4 sm:-mx-6 md:-mx-8 lg:-mx-12">
              <InfiniteScrollLoop speed={35} direction="right" className="py-2">
                {roles.map((role, idx) => {
                  const Icon = role.icon;
                  const roleColors = [
                    {
                      bg: 'bg-blue-600',
                      text: 'text-blue-600 dark:text-blue-400',
                      border: 'border-blue-100 dark:border-blue-900',
                      gradient: 'from-blue-500 to-blue-600',
                    },
                    {
                      bg: 'bg-emerald-600',
                      text: 'text-emerald-600 dark:text-emerald-400',
                      border: 'border-emerald-100 dark:border-emerald-900',
                      gradient: 'from-emerald-500 to-emerald-600',
                    },
                    {
                      bg: 'bg-amber-500',
                      text: 'text-amber-600 dark:text-amber-400',
                      border: 'border-amber-100 dark:border-amber-900',
                      gradient: 'from-amber-500 to-amber-600',
                    },
                    {
                      bg: 'bg-purple-600',
                      text: 'text-purple-600 dark:text-purple-400',
                      border: 'border-purple-100 dark:border-purple-900',
                      gradient: 'from-purple-500 to-purple-600',
                    },
                    {
                      bg: 'bg-rose-600',
                      text: 'text-rose-600 dark:text-rose-400',
                      border: 'border-rose-100 dark:border-rose-900',
                      gradient: 'from-rose-500 to-rose-600',
                    },
                  ];
                  const theme = roleColors[idx % roleColors.length]!;

                  return (
                    <Link
                      key={role.id}
                      href={`/role/${role.id}`}
                      className="group mx-2 block flex-shrink-0"
                    >
                      <div
                        className={`relative h-[140px] w-[220px] overflow-hidden rounded-2xl border sm:h-[160px] sm:w-[260px] ${theme.border} bg-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl dark:bg-slate-900`}
                      >
                        {/* Background gradient accent */}
                        <div
                          className={`absolute top-0 right-0 h-24 w-24 bg-gradient-to-br ${theme.gradient} translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-2xl`}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex h-full flex-col justify-between p-5">
                          {/* Icon & Title */}
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${theme.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                            >
                              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 truncate text-base font-bold text-slate-900 transition-colors dark:text-white">
                                {role.title}
                              </h4>
                              <p className="mt-1 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                                {role.subtitle}
                              </p>
                            </div>
                          </div>

                          {/* CTA */}
                          <div className="flex items-center justify-end">
                            <span
                              className={`text-xs font-semibold ${theme.text} flex items-center gap-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                            >
                              {t('view_detail')}
                              <ArrowRight className="h-3 w-3" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </InfiniteScrollLoop>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. INFRASTRUCTURE & SECURITY - Modern with Illustration */}
      <Section
        id="security"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
        noPadding
        containerClassName={sectionPaddingHybrid.default}
      >
        {/* Background decorations */}
        <div className="pointer-events-none absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
        <div className="pointer-events-none absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[80px]" />

        <Grid cols={1} mdCols={2} lgCols={2} gap={10} className="relative z-10 items-center">
          {/* Left: Content */}
          <div className="order-2 md:order-1">
            <FadeIn delay={0.1}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 dark:bg-emerald-900/20">
                <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                  Enterprise Security
                </span>
              </div>
            </FadeIn>

            <SectionHeader
              title={t('security_title')}
              description={t('security_desc')}
              align="left"
              className="mb-8"
            />

            <ul className="space-y-4">
              {['security_1', 'security_2', 'security_3'].map((item, idx) => {
                const icons = [Lock, CheckCircle2, Database];
                const IconComponent = icons[idx]!;
                const iconColors = [
                  'from-emerald-500 to-emerald-600',
                  'from-blue-500 to-blue-600',
                  'from-purple-500 to-purple-600',
                ];

                return (
                  <FadeIn key={idx} delay={0.15 + idx * 0.1}>
                    <li className="group hover:border-primary-100 dark:hover:border-primary-900 flex gap-4 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                      <div
                        className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${iconColors[idx]} shadow-md transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="mb-0.5 text-base font-bold text-slate-900 dark:text-white">
                          {t(`${item}_title` as any)}
                        </h4>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                          {t(`${item}_desc` as any)}
                        </p>
                      </div>
                    </li>
                  </FadeIn>
                );
              })}
            </ul>
          </div>

          {/* Right: Illustration with Security Visual */}
          <div className="relative order-1 md:order-2">
            <FadeIn delay={0.2}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  {/* Security Illustration from Unsplash */}
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
                      alt="Security Infrastructure"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

                    {/* Floating Security Badges */}
                    <div className="absolute right-4 bottom-4 left-4 flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm dark:bg-slate-800/90">
                        <Lock className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          AES-256
                        </span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm dark:bg-slate-800/90">
                        <Shield className="h-3.5 w-3.5 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          SSL/TLS
                        </span>
                      </div>
                      <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm dark:bg-slate-800/90">
                        <Database className="h-3.5 w-3.5 text-purple-600" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                          ISO 27001
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Status Card */}
                <div className="absolute -right-4 -bottom-4 sm:-right-8 sm:bottom-4">
                  <GlassCard
                    variant="light"
                    rounded="xl"
                    padding="none"
                    className="border border-slate-200 p-4 shadow-xl dark:border-slate-700"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                        <span className="relative flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          Uptime SLA
                        </p>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">99.9%</p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-20 blur-xl" />
                <div className="absolute -bottom-6 left-1/3 h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-20 blur-xl" />
              </div>
            </FadeIn>
          </div>
        </Grid>
      </Section>

      {/* 9. TESTIMONIALS */}
      <TestimonialsSection />

      {/* 10. INTEGRATIONS - Glass Pills (Compact) */}
      <Section
        id="integrations"
        className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
        noPadding
        containerClassName={sectionPaddingHybrid.compact}
      >
        <SectionHeader
          title={t('integrations_title')}
          description={t('integrations_desc')}
          className="mb-8"
        />

        <div className="max-w-full overflow-hidden">
          <InfiniteScrollLoop speed={30} direction="right">
            {homeIntegrations.map((int, idx) => (
              <div
                key={idx}
                className="group mx-2.5 flex cursor-default items-center gap-3 rounded-full border border-slate-100 bg-white px-5 py-3 whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100 transition-transform duration-300 group-hover:scale-110 dark:ring-slate-700 ${int.color}`}
                >
                  <int.icon className="h-5 w-5" />
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{int.name}</span>
              </div>
            ))}
          </InfiniteScrollLoop>
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="glass" size="md" className="h-11 px-6 text-sm font-semibold">
            <Link href="/platform/technologies/integration">
              {t('integrations_view_more')}{' '}
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* 11. CTA / FOOTER PREVIEW - Modern Gradient Card */}
      <Section
        id="cta"
        className="relative overflow-hidden bg-white dark:bg-slate-950"
        noPadding
        containerClassName={sectionPaddingHybrid.default}
      >
        <Container size="5xl" className="relative z-10">
          {/* CTA Card with Gradient Background */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl shadow-slate-900/50 sm:p-12 lg:p-16 dark:from-indigo-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-black/50">
            {/* Decorative elements - Floating shapes */}
            <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 animate-pulse rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/20 blur-2xl" />
            <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl" />
            <div className="absolute right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-purple-500/20 blur-xl" />

            {/* Dot pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Inner glow border effect */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 ring-inset" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              {/* Badge */}
              <FadeIn>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 shadow-lg backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                  </span>
                  <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
                    {t('cta_trial')}
                  </span>
                </div>
              </FadeIn>

              {/* Title */}
              <FadeIn delay={0.1}>
                <h2 className="mb-4 text-2xl leading-tight font-bold text-white sm:text-3xl lg:text-4xl">
                  {t('cta_title')}
                </h2>
              </FadeIn>

              {/* Description */}
              <FadeIn delay={0.15}>
                <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                  {t('cta_desc')}
                </p>
              </FadeIn>

              {/* Buttons */}
              <FadeIn delay={0.2}>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 bg-white px-8 text-base font-bold text-slate-900 shadow-xl shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-2xl sm:h-14 sm:px-10 sm:text-lg"
                  >
                    <Link href="/demo">
                      {t('cta_demo')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="h-12 border-2 border-white/30 px-8 text-base font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10 sm:h-14 sm:px-10 sm:text-lg"
                  >
                    <Link href="/contact">{t('cta_contact')}</Link>
                  </Button>
                </div>
              </FadeIn>

              {/* Trust indicators */}
              <FadeIn delay={0.25}>
                <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>{t('trust_14_days' as any)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>{t('trust_no_credit_card')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>{t('trust_cancel_anytime' as any)}</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </Section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          {/* Modal Content */}
          <div
            className="animate-in zoom-in-95 relative aspect-video w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 z-10 p-2 text-white/80 transition-colors hover:text-white"
              aria-label="Tutup video"
            >
              <X className="h-8 w-8" />
            </button>

            {/* YouTube iframe */}
            <iframe
              src={`https://www.youtube.com/embed/${moduleVideoIds[activeSolution.id] || 'dQw4w9WgXcQ'}?autoplay=1&rel=0`}
              title={`Demo video ${activeSolution.label}`}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
