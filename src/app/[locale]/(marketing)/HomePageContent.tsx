'use client';

import {
  ArrowRight,
  ArrowUpRight,
  Calculator,
  CheckCircle2,
  ChevronRight,
  Database,
  Lock,
  PlayCircle,
  Shield,
  X,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Container, Section } from '@/components/layout';
import {
  Badge,
  Button,
  ClayIcon,
  CTAGroup,
  FinalCTAGroup,
  FeatureCard,
  GlassCard,
  GlassPanel,
  Grid,
  HeroBackground,
  OptimizedImage,
  SectionHeader,
  Stack,
  ClayBadge,
} from '@/components/ui';
import { BackgroundDecoration } from '@/components/ui/BackgroundDecoration';
import { FadeIn } from '@/components/ui/FadeIn';
import {
  BarChart,
  CardSlider,
  InfiniteScrollLoop,
  SpotlightCard,
} from '@/components/ui/LazyComponents';
import { StaggeredText } from '@/components/ui/motion-text';
import TestimonialsSection from '@/components/TestimonialsSection';
import {
  cardHover,
  clay,
  glass,
  modularTypography,
  neumorph,
  sectionPaddingHybrid,
} from '@/design-tokens';
import {
  getHomeIndustriesData,
  getHomeProblems,
  getHomeProcess,
  getHomeRolesData,
  getHomeSolutions,
  getHomeUVP,
  homeIntegrations,
} from '@/data/homeContent';

export default function HomePageContent() {
  const t = useTranslations('Homepage');

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content (7 cols) */}
            <div className="text-center lg:text-left order-1 lg:col-span-7">
              {/* Announcement Pill - Glassmorphism */}
              <FadeIn delay={0.1} className="mb-6 inline-flex w-full justify-center lg:justify-start">
                <div
                  role="button"
                  tabIndex={0}
                  className={`group inline-flex cursor-pointer items-center gap-3 rounded-full px-5 py-2 transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${glass.light}`}
                  aria-label={t('announcement')}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 shadow-sm"></span>
                  </span>
                  <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-primary-700 dark:text-slate-300 dark:group-hover:text-primary-400">
                    {t('announcement')}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-primary-600 dark:text-slate-500 dark:group-hover:text-primary-400" />
                </div>
              </FadeIn>

              {/* Main Headline - Modular Typography - Fixed for Desktop */}
              <FadeIn delay={0.2}>
                <div className="mb-6">
                  <h1 className={`${modularTypography.hero} text-slate-900 dark:text-white leading-[1.1]`}>
                    <span className="block">{t('hero_title_prefix')}</span>
                    <span className="block text-blue-600 dark:text-blue-400">
                      {t('hero_title_highlight')}
                    </span>
                  </h1>
                </div>
              </FadeIn>

              {/* Subheadline */}
              <FadeIn delay={0.3}>
                <p className={`mb-8 max-w-xl mx-auto lg:mx-0 ${modularTypography.body} font-normal text-slate-600 dark:text-slate-400`}>
                  {t('hero_description')}
                </p>
              </FadeIn>

              {/* CTAs - Primary more prominent */}
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    variant="clay"
                    size="lg"
                    className="h-14 px-10 text-lg font-bold shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    <Link href="/demo">{t('cta_demo')}</Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="h-14 px-8 text-base font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                  >
                    <Link href="/pricing/calculator">
                      <Calculator className="mr-2 h-4 w-4" />
                      {t('cta_pricing')}
                    </Link>
                  </Button>
                </div>
              </FadeIn>

            </div>

            {/* Right Column - Dashboard Preview (5 cols) */}
            <div className="order-2 relative lg:col-span-5">
              <FadeIn delay={0.5}>
                <div className="group relative">
                  {/* Glass frame wrapper */}
                  <div className={`relative p-2 rounded-2xl ${glass.medium} transition-all duration-500 group-hover:shadow-[0_24px_48px_rgba(37,99,235,0.15)]`}>
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
                        <span className="font-mono font-medium text-slate-700 dark:text-slate-200">secure://bizops.id/dashboard</span>
                      </Stack>
                    </div>
                  </div>

                  {/* Floating Stats Card - Bottom Right - with pulse animation */}
                  <div className={`absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 p-4 rounded-xl ${glass.strong} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-float-slow`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{t('hero_savings_label') || 'Penghematan'}</p>
                        <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">85% Biaya</p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Users Card - Top Left - with pulse animation */}
                  <div className={`absolute -top-4 -left-4 md:-top-6 md:-left-6 p-3 rounded-xl ${glass.strong} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hidden sm:block animate-float-slow`} style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 ring-2 ring-white dark:ring-slate-900 flex items-center justify-center text-xs font-bold text-white shadow-lg">R</div>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 ring-2 ring-white dark:ring-slate-900 flex items-center justify-center text-xs font-bold text-white shadow-lg">B</div>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 ring-2 ring-white dark:ring-slate-900 flex items-center justify-center text-xs font-bold text-white shadow-lg">D</div>
                      </div>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{t('hero_companies_count') || '500+ Perusahaan'}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>

        {/* Social Proof - Full Width Slider */}
        <FadeIn delay={0.6}>
          <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
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
                    className="mx-3 cursor-default rounded-full px-6 py-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-100 rounded-full blur-3xl dark:bg-rose-900/20" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-100 rounded-full blur-3xl dark:bg-orange-900/20" />
        </div>

        <Container size="7xl" className="relative z-10">
          {/* Centered Header */}
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-5 py-2.5 text-sm font-bold text-rose-700 uppercase tracking-wider mb-6 dark:bg-rose-900/30 dark:text-rose-400">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                {t('problems_badge') || 'Masalah Umum'}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                {t('problems_title').replace(t('problems_stuck'), '')}{' '}
                <span className="text-rose-600 dark:text-rose-400">{t('problems_stuck')}</span>
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('problems_desc')}
              </p>
            </div>
          </FadeIn>

          {/* Cards Grid - 3 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {homeProblems.map((prob, idx) => {
              const Icon = prob.icon;
              const colors = [
                { bg: 'from-rose-500 to-red-600', shadow: 'shadow-rose-500/25', light: 'bg-rose-50 dark:bg-rose-900/20', text: 'text-rose-600 dark:text-rose-400' },
                { bg: 'from-orange-500 to-amber-600', shadow: 'shadow-orange-500/25', light: 'bg-orange-50 dark:bg-orange-900/20', text: 'text-orange-600 dark:text-orange-400' },
                { bg: 'from-red-500 to-rose-600', shadow: 'shadow-red-500/25', light: 'bg-red-50 dark:bg-red-900/20', text: 'text-red-600 dark:text-red-400' },
              ];
              const color = colors[idx % 3];
              
              return (
                <FadeIn key={idx} delay={0.1 + idx * 0.15}>
                  <div className="group relative h-full">
                    <div className={`relative h-full p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
                      {/* Top Gradient Line */}
                      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color.bg} rounded-t-2xl`} />
                      
                      {/* Number Badge */}
                      <div className={`absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color.bg} text-lg font-bold text-white shadow-lg ${color.shadow}`}>
                        {idx + 1}
                      </div>
                      
                      {/* Icon */}
                      <div className={`mt-4 mb-6 inline-flex p-4 rounded-2xl ${color.light}`}>
                        <Icon className={`h-8 w-8 ${color.text}`} strokeWidth={1.5} />
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {prob.title}
                      </h3>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wide mb-4 ${color.light} ${color.text}`}>
                        {prob.subtitle}
                      </span>
                      <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        {/* Header - Centered with strong visual hierarchy */}
        <div className="relative z-10 text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-2 text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            {t('solutions_badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('solutions_title').replace(t('solutions_highlight'), '')}
            <span className="text-primary-600 dark:text-primary-400">{t('solutions_highlight')}</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            {t('solutions_desc')}
          </p>
          <Button asChild size="md" variant="outline" className="group rounded-full h-11 px-6 text-sm border-2 border-primary-200 dark:border-primary-800 hover:bg-primary-50 dark:hover:bg-primary-900/20">
            <Link href="/platform">
              {t('solutions_cta')}{' '}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Horizontal scrollable tabs for mobile, grid for desktop */}
        <div className="relative z-10 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-5 lg:gap-3 lg:overflow-visible lg:pb-0" role="tablist" aria-label="Solution categories">
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
              const color = tabColors[idx % tabColors.length];
              
              return (
                <button
                  key={sol.id}
                  onClick={() => setActiveTab(sol.id)}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${sol.id}`}
                  id={`tab-${sol.id}`}
                  className={`group relative flex-shrink-0 flex flex-col items-center gap-2 rounded-2xl px-5 py-4 text-center transition-all duration-300 min-w-[120px] lg:min-w-0 ${
                    isActive
                      ? `bg-white dark:bg-slate-800 shadow-xl ring-4 ${color.ring} scale-105`
                      : 'bg-white/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg border border-slate-200/50 dark:border-slate-700/50'
                  }`}
                >
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${color.active} shadow-lg`} />
                  )}
                  
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive ? `${color.active} shadow-lg` : 'bg-slate-100 dark:bg-slate-700 group-hover:bg-slate-200 dark:group-hover:bg-slate-600'
                  }`}>
                    <Icon className={`h-6 w-6 transition-colors ${isActive ? 'text-white' : 'text-slate-600 dark:text-slate-300'}`} />
                  </div>
                  <div>
                    <div className={`text-sm font-semibold transition-colors ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}>
                      {sol.label}
                    </div>
                    <div className={`text-xs font-medium uppercase tracking-wide ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 dark:text-slate-500'}`}>
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
          <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className={`absolute top-0 right-0 w-1/2 h-full ${activeSolution.bg} opacity-5 pointer-events-none`} />
            
            <div className="relative p-6 sm:p-8 lg:p-10">
              {(() => {
                // Content panel color themes matching tab colors
                const contentColors = [
                  { iconBg: 'bg-blue-500', iconShadow: 'shadow-blue-500/25', label: 'text-blue-600 dark:text-blue-400', checkBg: 'bg-blue-100 dark:bg-blue-900/30', checkIcon: 'text-blue-600 dark:text-blue-400', hoverBorder: 'hover:border-blue-200 dark:hover:border-blue-800' },
                  { iconBg: 'bg-emerald-500', iconShadow: 'shadow-emerald-500/25', label: 'text-emerald-600 dark:text-emerald-400', checkBg: 'bg-emerald-100 dark:bg-emerald-900/30', checkIcon: 'text-emerald-600 dark:text-emerald-400', hoverBorder: 'hover:border-emerald-200 dark:hover:border-emerald-800' },
                  { iconBg: 'bg-amber-500', iconShadow: 'shadow-amber-500/25', label: 'text-amber-600 dark:text-amber-400', checkBg: 'bg-amber-100 dark:bg-amber-900/30', checkIcon: 'text-amber-600 dark:text-amber-400', hoverBorder: 'hover:border-amber-200 dark:hover:border-amber-800' },
                  { iconBg: 'bg-purple-500', iconShadow: 'shadow-purple-500/25', label: 'text-purple-600 dark:text-purple-400', checkBg: 'bg-purple-100 dark:bg-purple-900/30', checkIcon: 'text-purple-600 dark:text-purple-400', hoverBorder: 'hover:border-purple-200 dark:hover:border-purple-800' },
                  { iconBg: 'bg-rose-500', iconShadow: 'shadow-rose-500/25', label: 'text-rose-600 dark:text-rose-400', checkBg: 'bg-rose-100 dark:bg-rose-900/30', checkIcon: 'text-rose-600 dark:text-rose-400', hoverBorder: 'hover:border-rose-200 dark:hover:border-rose-800' },
                ];
                const contentColor = contentColors[activeTabIndex >= 0 ? activeTabIndex % contentColors.length : 0];
                
                return (
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left side - Module info */}
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${contentColor.iconBg} shadow-lg ${contentColor.iconShadow}`}>
                      <activeSolution.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {activeSolution.label}
                      </h3>
                      <p className={`text-sm font-medium ${contentColor.label} uppercase tracking-wide`}>
                        {activeSolution.category}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                    {activeSolution.impact}
                  </p>

                  <div>
                    <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                      {t('solutions_features')}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeSolution.modules.map((mod, modIdx) => (
                        <div key={modIdx} className={`flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 transition-all ${contentColor.hoverBorder} hover:shadow-md`}>
                          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${contentColor.checkBg}`}>
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
                      { bg: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20', border: 'border-blue-200 dark:border-blue-800/50', text: 'text-blue-600 dark:text-blue-400', button: 'bg-blue-500 hover:bg-blue-600', ping: 'bg-blue-400', dot: 'bg-blue-500', shadow: 'shadow-blue-500/25' },
                      { bg: 'from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20', border: 'border-emerald-200 dark:border-emerald-800/50', text: 'text-emerald-600 dark:text-emerald-400', button: 'bg-emerald-500 hover:bg-emerald-600', ping: 'bg-emerald-400', dot: 'bg-emerald-500', shadow: 'shadow-emerald-500/25' },
                      { bg: 'from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20', border: 'border-amber-200 dark:border-amber-800/50', text: 'text-amber-600 dark:text-amber-400', button: 'bg-amber-500 hover:bg-amber-600', ping: 'bg-amber-400', dot: 'bg-amber-500', shadow: 'shadow-amber-500/25' },
                      { bg: 'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20', border: 'border-purple-200 dark:border-purple-800/50', text: 'text-purple-600 dark:text-purple-400', button: 'bg-purple-500 hover:bg-purple-600', ping: 'bg-purple-400', dot: 'bg-purple-500', shadow: 'shadow-purple-500/25' },
                      { bg: 'from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20', border: 'border-rose-200 dark:border-rose-800/50', text: 'text-rose-600 dark:text-rose-400', button: 'bg-rose-500 hover:bg-rose-600', ping: 'bg-rose-400', dot: 'bg-rose-500', shadow: 'shadow-rose-500/25' },
                    ];
                    const demoColor = demoColors[activeTabIndex >= 0 ? activeTabIndex % demoColors.length : 0];
                    
                    return (
                      <div className={`h-full rounded-2xl bg-gradient-to-br ${demoColor.bg} border ${demoColor.border} p-5 flex flex-col`}>
                        {/* Video Thumbnail - Clickable to open modal */}
                        <button 
                          onClick={() => setIsVideoModalOpen(true)}
                          className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-slate-900 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          aria-label="Putar video demo"
                        >
                          {/* YouTube Thumbnail */}
                          <img 
                            src={`https://img.youtube.com/vi/${moduleVideoIds[activeSolution.id] || 'dQw4w9WgXcQ'}/maxresdefault.jpg`}
                            alt={`Demo video ${activeSolution.label}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          {/* Dark overlay */}
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                          {/* Play button overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className={`flex h-16 w-16 items-center justify-center rounded-full ${demoColor.button} text-white shadow-2xl ${demoColor.shadow} transition-transform group-hover:scale-110`}>
                              <PlayCircle className="h-8 w-8" />
                            </div>
                          </div>
                          {/* Duration badge */}
                          <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs font-medium">
                            2:00
                          </div>
                          {/* Live indicator */}
                          <div className="absolute top-2 left-2 flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${demoColor.ping} opacity-75`}></span>
                              <span className={`relative inline-flex h-2 w-2 rounded-full ${demoColor.dot}`}></span>
                            </span>
                            <span className="text-xs font-medium text-white bg-black/50 px-1.5 py-0.5 rounded">DEMO</span>
                          </div>
                        </button>
                        
                        {/* Text content */}
                        <div className="text-center flex-1 flex flex-col justify-center">
                          <h5 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                            {t('solutions_demo_title')}
                          </h5>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                            {t('solutions_demo_desc')}
                          </p>
                          <Button 
                            onClick={() => setIsVideoModalOpen(true)}
                            size="md" 
                            variant="default" 
                            className={`w-full rounded-xl h-11 text-sm font-semibold ${demoColor.button} text-white shadow-lg ${demoColor.shadow} border-0`}
                          >
                            <PlayCircle className="h-4 w-4 mr-2" />
                            {t('solutions_demo_cta')}
                          </Button>
                          <Link href="/platform" className={`mt-3 text-sm font-medium ${demoColor.text} hover:underline inline-flex items-center justify-center gap-1`}>
                            Lihat Harga
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-2 text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
            Keunggulan Kami
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('uvp_title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('uvp_desc')}
          </p>
        </div>

        {/* Bento Grid - Balanced 2x2 Layout */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
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
                accent: 'blue'
              },
              { 
                type: 'gradient',
                bg: 'from-purple-500 via-purple-600 to-pink-600',
                iconBg: 'bg-white/20',
                textColor: 'text-white',
                subtitleColor: 'text-purple-100',
                descColor: 'text-purple-50/90',
                accent: 'purple'
              },
              { 
                type: 'gradient',
                bg: 'from-emerald-500 via-emerald-600 to-teal-600',
                iconBg: 'bg-white/20',
                textColor: 'text-white',
                subtitleColor: 'text-emerald-100',
                descColor: 'text-emerald-50/90',
                accent: 'emerald'
              },
              { 
                type: 'gradient',
                bg: 'from-amber-500 via-orange-500 to-orange-600',
                iconBg: 'bg-white/20',
                textColor: 'text-white',
                subtitleColor: 'text-amber-100',
                descColor: 'text-amber-50/90',
                accent: 'amber'
              },
            ];

            return homeUVP.map((uvp, idx) => {
              const Icon = uvp.icon;
              const config = bentoConfigs[idx % bentoConfigs.length];

              return (
                <FadeIn key={idx} delay={0.1 + idx * 0.1}>
                  <div className="group h-full">
                    <div className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-gradient-to-br ${config.bg} p-6 sm:p-8 lg:p-10 min-h-[280px] sm:min-h-[300px]`}>
                      
                      {/* Background pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ 
                          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                          backgroundSize: '24px 24px'
                        }} />
                      </div>
                      
                      {/* Decorative blurs */}
                      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                      <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

                      {/* Floating icon decoration */}
                      <div className="absolute -bottom-6 -right-6 pointer-events-none">
                        <Icon 
                          className="h-32 w-32 sm:h-36 sm:w-36 text-white/10 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                          strokeWidth={0.5}
                        />
                      </div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon */}
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${config.iconBg} backdrop-blur-sm mb-5 shadow-lg`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                          <h3 className={`text-xl sm:text-2xl lg:text-2xl font-bold ${config.textColor} mb-2`}>
                            {uvp.title}
                          </h3>
                          <p className={`text-xs sm:text-sm font-bold tracking-wide uppercase ${config.subtitleColor} mb-3`}>
                            {uvp.subtitle}
                          </p>
                          <p className={`text-sm sm:text-base ${config.descColor} leading-relaxed line-clamp-3`}>
                            {uvp.desc}
                          </p>
                        </div>

                        {/* CTA */}
                        <div className="mt-5 pt-4 border-t border-white/20">
                          <button className="inline-flex items-center gap-2 text-white font-semibold text-sm group/btn hover:gap-3 transition-all duration-300">
                            Pelajari Lebih
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 px-4 py-2 text-sm font-bold uppercase tracking-wider mb-6 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-600 dark:text-slate-400">Perbandingan Nilai</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            {t('pricing_title')}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('pricing_desc')}
          </p>
        </div>

        {/* VS Comparison Cards */}
        <div className="relative z-10 grid gap-6 lg:gap-8 lg:grid-cols-2 items-stretch">
          {/* Problem Card - "Before" Style */}
          <div className="group relative">
            <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-red-500 via-red-600 to-rose-600 p-1">
              <div className="h-full rounded-[22px] bg-white dark:bg-slate-900 p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 dark:bg-red-900/30">
                      <X className="h-6 w-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {t('pricing_problem_title')}
                      </h3>
                      <p className="text-sm text-red-500 font-medium">Pendekatan Lama</p>
                    </div>
                  </div>
                </div>

                {/* Pain Points */}
                <ul className="space-y-4 mb-8">
                  {['pricing_problem_1', 'pricing_problem_2', 'pricing_problem_3', 'pricing_problem_4'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-red-50/50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/30">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50 mt-0.5">
                        <X className="h-3.5 w-3.5 text-red-600 dark:text-red-400" />
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300">{t(item as any)}</span>
                    </li>
                  ))}
                </ul>

                {/* Cost Footer */}
                <div className="mt-auto pt-6 border-t-2 border-dashed border-red-200 dark:border-red-900/50">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">
                        {t('pricing_hidden_cost')}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">15jt</span>
                        <span className="text-lg text-slate-500">++</span>
                        <span className="text-sm text-slate-400">/ {t('month')}</span>
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
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-primary-500 to-emerald-500 rounded-[28px] opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-500 via-primary-500 to-emerald-600 p-1">
              <div className="h-full rounded-[22px] bg-gradient-to-br from-white to-emerald-50/50 dark:from-slate-900 dark:to-emerald-950/20 p-6 sm:p-8">
                {/* Recommended Badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-primary-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-emerald-500/30">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                    </span>
                    {t('pricing_recommended')}
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-primary-500 shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {t('pricing_solution_title')}
                    </h3>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">BizOps Platform</p>
                  </div>
                </div>

                {/* Benefits */}
                <ul className="space-y-4 mb-8">
                  {['pricing_solution_1', 'pricing_solution_2', 'pricing_solution_3', 'pricing_solution_4'].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-md shadow-emerald-500/30 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{t(item as any)}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Footer */}
                <div className="mt-auto p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-primary-500/10 dark:from-emerald-500/20 dark:to-primary-500/20 border border-emerald-200/50 dark:border-emerald-800/50">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                        {t('pricing_starting_from')}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">299rb</span>
                        <span className="text-sm text-slate-500">/ {t('month')}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">{t('pricing_subtitle')}</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-primary-500 shadow-lg shadow-emerald-500/30">
                      <ArrowRight className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <Button
                    asChild
                    size="lg"
                    className="w-full h-12 text-base font-bold bg-gradient-to-r from-emerald-500 to-primary-500 hover:from-emerald-600 hover:to-primary-600 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 border-0"
                  >
                    <Link href="/pricing/calculator">{t('cta_view_pricing')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VS Badge - Center */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-2xl border-4 border-slate-100 dark:border-slate-700">
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-50 to-primary-50 dark:from-blue-900/20 dark:to-primary-900/20 px-5 py-2.5 text-sm font-bold uppercase tracking-wider mb-6 border border-blue-100 dark:border-blue-800">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-primary-600 text-sm font-bold text-white shadow-lg shadow-blue-500/30">30</span>
              <span className="text-blue-600 dark:text-blue-400">{t('process_days_badge') || 'Hari Go-Live'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t('process_title').replace(t('process_days'), '')}{' '}
              <span className="text-blue-600 dark:text-blue-400">{t('process_days')}</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
              {t('process_desc_1')} {t('process_desc_2')} {t('process_desc_3')}
            </p>
            <Button
              asChild
              size="md"
              variant="clay"
              className="rounded-xl h-12 px-8 text-sm font-semibold shadow-lg shadow-primary-500/20"
            >
              <Link href="/services">{t('process_cta')}</Link>
            </Button>
          </div>

          {/* Timeline Steps */}
          <div className="relative">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {homeProcess.map((step, idx) => {
                const weekLabels = [
                  t('process_week_1') || 'Minggu 1',
                  t('process_week_2') || 'Minggu 2', 
                  t('process_week_3') || 'Minggu 3',
                  t('process_week_4') || 'Minggu 4'
                ];
                const stepColors = [
                  { bg: 'bg-blue-600', bgLight: 'bg-blue-50 dark:bg-blue-900/20', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-100 dark:border-blue-900', hoverBorder: 'group-hover:border-blue-300 dark:group-hover:border-blue-700' },
                  { bg: 'bg-emerald-600', bgLight: 'bg-emerald-50 dark:bg-emerald-900/20', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-100 dark:border-emerald-900', hoverBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-700' },
                  { bg: 'bg-amber-500', bgLight: 'bg-amber-50 dark:bg-amber-900/20', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-100 dark:border-amber-900', hoverBorder: 'group-hover:border-amber-300 dark:group-hover:border-amber-700' },
                  { bg: 'bg-rose-600', bgLight: 'bg-rose-50 dark:bg-rose-900/20', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-100 dark:border-rose-900', hoverBorder: 'group-hover:border-rose-300 dark:group-hover:border-rose-700' },
                ];
                const color = stepColors[idx];
                const stepNumber = String(idx + 1).padStart(2, '0');
                
                return (
                  <FadeIn key={idx} delay={0.1 + idx * 0.1}>
                    <div className="group h-full">
                      <div className={`relative h-full bg-white dark:bg-slate-900 rounded-2xl border ${color.border} ${color.hoverBorder} p-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                        {/* Step Number Badge */}
                        <div className="flex items-center justify-between mb-5">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color.bg} text-xl font-bold text-white shadow-lg`}>
                            {stepNumber}
                          </div>
                          <span className={`text-xs font-semibold ${color.text} ${color.bgLight} px-3 py-1.5 rounded-full uppercase tracking-wide`}>
                            {weekLabels[idx]}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <h3 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10">
          {/* Industries Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-2 text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-6">
              {t('industries_title')}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              {t('industries_desc')}
            </h2>
          </div>

          {/* Industries - Infinity Slider (Story-style cards, 4 per screen) */}
          <div className="mb-20 -mx-5 sm:-mx-6 md:-mx-8 lg:-mx-12 pt-4 pb-8">
            <InfiniteScrollLoop speed={40} className="py-4">
              {industries.map((ind, idx) => {
                const Icon = ind.icon;
                const colorThemes = [
                  { bg: 'bg-blue-600', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-100 dark:border-blue-900', overlay: 'from-blue-900/60' },
                  { bg: 'bg-emerald-600', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-100 dark:border-emerald-900', overlay: 'from-emerald-900/60' },
                  { bg: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-100 dark:border-amber-900', overlay: 'from-amber-900/60' },
                  { bg: 'bg-purple-600', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-100 dark:border-purple-900', overlay: 'from-purple-900/60' },
                  { bg: 'bg-rose-600', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-100 dark:border-rose-900', overlay: 'from-rose-900/60' },
                  { bg: 'bg-cyan-600', text: 'text-cyan-600 dark:text-cyan-400', border: 'border-cyan-100 dark:border-cyan-900', overlay: 'from-cyan-900/60' },
                ];
                const theme = colorThemes[idx % colorThemes.length];
                
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
                    className="group block flex-shrink-0 w-[220px] sm:w-[250px] mx-2 py-2"
                  >
                    <div className={`relative overflow-visible rounded-2xl bg-white dark:bg-slate-900 border ${theme.border} transition-all duration-300 group-hover:-translate-y-3 group-hover:shadow-2xl shadow-lg`}>
                      {/* Top image banner - story style */}
                      <div className="h-44 relative overflow-hidden rounded-t-2xl">
                        <img 
                          src={industryImages[idx % industryImages.length]} 
                          alt={ind.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${theme.overlay} via-transparent to-transparent opacity-60`} />
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-slate-900 to-transparent" />
                      </div>
                      
                      {/* Icon - floating on banner */}
                      <div className="relative -mt-8 px-5">
                        <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl ${theme.bg} shadow-xl border-4 border-white dark:border-slate-900`}>
                          <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                        </div>
                      </div>
                      
                      {/* Content - compact */}
                      <div className="p-5 pt-3">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {ind.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3 line-clamp-2">
                          {ind.description}
                        </p>
                        
                        {/* CTA */}
                        <div className={`inline-flex items-center gap-2 text-sm font-semibold ${theme.text}`}>
                          <span>Pelajari Lebih</span>
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
          <div className="border-t border-slate-200 dark:border-slate-800 pt-14">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">{t('roles_title')}</h3>
              <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t('roles_desc')}</p>
            </div>

            {/* Roles Infinite Scroll - Right direction (opposite of industries) */}
            <div className="-mx-5 sm:-mx-6 md:-mx-8 lg:-mx-12 pb-4">
              <InfiniteScrollLoop speed={35} direction="right" className="py-2">
                {roles.map((role, idx) => {
                  const Icon = role.icon;
                  const roleColors = [
                    { bg: 'bg-blue-600', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-100 dark:border-blue-900', gradient: 'from-blue-500 to-blue-600' },
                    { bg: 'bg-emerald-600', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-100 dark:border-emerald-900', gradient: 'from-emerald-500 to-emerald-600' },
                    { bg: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', border: 'border-amber-100 dark:border-amber-900', gradient: 'from-amber-500 to-amber-600' },
                    { bg: 'bg-purple-600', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-100 dark:border-purple-900', gradient: 'from-purple-500 to-purple-600' },
                    { bg: 'bg-rose-600', text: 'text-rose-600 dark:text-rose-400', border: 'border-rose-100 dark:border-rose-900', gradient: 'from-rose-500 to-rose-600' },
                  ];
                  const theme = roleColors[idx % roleColors.length];
                  
                  return (
                    <Link 
                      key={role.id}
                      href={`/role/${role.id}`} 
                      className="group block mx-2 flex-shrink-0"
                    >
                      <div className={`relative w-[220px] sm:w-[260px] h-[140px] sm:h-[160px] rounded-2xl overflow-hidden border ${theme.border} bg-white dark:bg-slate-900 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl`}>
                        {/* Background gradient accent */}
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${theme.gradient} opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2`} />
                        
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-between p-5">
                          {/* Icon & Title */}
                          <div className="flex items-start gap-4">
                            <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${theme.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                              <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
                                {role.title}
                              </h4>
                              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">{role.subtitle}</p>
                            </div>
                          </div>
                          
                          {/* CTA */}
                          <div className="flex items-center justify-end">
                            <span className={`text-xs font-semibold ${theme.text} flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                              Lihat Detail
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
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[80px]" />

        <Grid cols={1} mdCols={2} lgCols={2} gap={10} className="relative z-10 items-center">
          {/* Left: Content */}
          <div className="order-2 md:order-1">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-4 py-1.5 mb-4">
                <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
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
                const IconComponent = icons[idx];
                const iconColors = [
                  'from-emerald-500 to-emerald-600',
                  'from-blue-500 to-blue-600',
                  'from-purple-500 to-purple-600',
                ];
                
                return (
                  <FadeIn key={idx} delay={0.15 + idx * 0.1}>
                    <li className="group flex gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-lg hover:border-primary-100 dark:hover:border-primary-900">
                      <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${iconColors[idx]} shadow-md transition-transform duration-300 group-hover:scale-110`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">
                          {t(`${item}_title` as any)}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
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
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg">
                        <Lock className="h-3.5 w-3.5 text-emerald-600" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">AES-256</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg">
                        <Shield className="h-3.5 w-3.5 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">SSL/TLS</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm shadow-lg">
                        <Database className="h-3.5 w-3.5 text-purple-600" />
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">ISO 27001</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Status Card */}
                <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:-right-8">
                  <GlassCard
                    variant="light"
                    rounded="xl"
                    padding="none"
                    className="p-4 shadow-xl border border-slate-200 dark:border-slate-700"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                        <span className="relative flex h-3 w-3">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Uptime SLA</p>
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
                className="group mx-2.5 flex cursor-default items-center gap-3 rounded-full px-5 py-3 whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700"
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-slate-100 dark:ring-slate-700 transition-transform duration-300 group-hover:scale-110 ${int.color}`}
                >
                  <int.icon className="h-5 w-5" />
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{int.name}</span>
              </div>
            ))}
          </InfiniteScrollLoop>
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            variant="glass"
            size="md"
            className="h-11 px-6 text-sm font-semibold"
          >
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-blue-700 p-8 sm:p-12 lg:p-16">
            {/* Decorative elements - Floating shapes */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-300/25 rounded-full blur-2xl translate-y-1/3 -translate-x-1/3" />
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/20 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-indigo-300/20 rounded-full blur-xl" />
            
            {/* Dot pattern overlay - more visible */}
            <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              {/* Badge */}
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                  </span>
                  <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">
                    {t('cta_trial')}
                  </span>
                </div>
              </FadeIn>
              
              {/* Title */}
              <FadeIn delay={0.1}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                  {t('cta_title')}
                </h2>
              </FadeIn>
              
              {/* Description */}
              <FadeIn delay={0.15}>
                <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  {t('cta_desc')}
                </p>
              </FadeIn>
              
              {/* Buttons */}
              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-bold bg-white text-primary-700 hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Link href="/demo">
                      Mulai Demo Gratis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  >
                    <Link href="/contact">{t('cta_contact')}</Link>
                  </Button>
                </div>
              </FadeIn>
              
              {/* Trust indicators */}
              <FadeIn delay={0.25}>
                <div className="mt-10 flex flex-wrap justify-center gap-6 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>14 hari gratis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Tanpa kartu kredit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Batalkan kapan saja</span>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsVideoModalOpen(false)}
        >
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 z-10 p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Tutup video"
            >
              <X className="h-8 w-8" />
            </button>
            
            {/* YouTube iframe */}
            <iframe
              src={`https://www.youtube.com/embed/${moduleVideoIds[activeSolution.id] || 'dQw4w9WgXcQ'}?autoplay=1&rel=0`}
              title={`Demo video ${activeSolution.label}`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
