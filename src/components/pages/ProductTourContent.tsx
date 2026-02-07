'use client';

import type { ScenarioDef, ScenarioType } from './product-tour';
import {
  BarChart3,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Loader2,
  MapPin,
  MousePointer,
  Package,
  Plus,
  QrCode,
  RefreshCw,
  Send,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { useState } from 'react';
import { Container } from '@/components/layout';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import Button from '@/components/ui/Button';
import { DesktopFrame, MobileFrame } from './product-tour';

export default function ProductTourContent() {
  const t = useTranslations('ProductTour');

  const scenarios: ScenarioDef[] = [
    {
      id: 'sales',
      label: t('scenarios.sales.label'),
      role: t('scenarios.sales.role'),
      icon: Smartphone,
      device: 'mobile',
      title: t('scenarios.sales.title'),
      desc: t('scenarios.sales.desc'),
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      id: 'manager',
      label: t('scenarios.manager.label'),
      role: t('scenarios.manager.role'),
      icon: Briefcase,
      device: 'mobile',
      title: t('scenarios.manager.title'),
      desc: t('scenarios.manager.desc'),
      color: 'text-purple-600 dark:text-purple-400',
    },
    {
      id: 'finance',
      label: t('scenarios.finance.label'),
      role: t('scenarios.finance.role'),
      icon: DollarSign,
      device: 'desktop',
      title: t('scenarios.finance.title'),
      desc: t('scenarios.finance.desc'),
      color: 'text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 'employee',
      label: t('scenarios.employee.label'),
      role: t('scenarios.employee.role'),
      icon: UserCheck,
      device: 'mobile',
      title: t('scenarios.employee.title'),
      desc: t('scenarios.employee.desc'),
      color: 'text-pink-600 dark:text-pink-400',
    },
    {
      id: 'warehouse',
      label: t('scenarios.warehouse.label'),
      role: t('scenarios.warehouse.role'),
      icon: Package,
      device: 'mobile',
      title: t('scenarios.warehouse.title'),
      desc: t('scenarios.warehouse.desc'),
      color: 'text-amber-600 dark:text-amber-400',
    },
    {
      id: 'ceo',
      label: t('scenarios.ceo.label'),
      role: t('scenarios.ceo.role'),
      icon: BarChart3,
      device: 'mobile',
      title: t('scenarios.ceo.title'),
      desc: t('scenarios.ceo.desc'),
      color: 'text-indigo-600 dark:text-indigo-400',
    },
  ];

  const [activeId, setActiveId] = useState<ScenarioType>('sales');
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currentScenario = scenarios.find(s => s.id === activeId) || scenarios[0]!;

  const switchScenario = (id: ScenarioType) => {
    if (id === activeId) {
      return;
    }
    setIsLoading(true);
    setActiveId(id);
    setStep(0);
    setTimeout(() => setIsLoading(false), 800);
  };

  const nextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setStep(prev => Math.min(prev + 1, 3));
      setIsLoading(false);
    }, 600);
  };

  const resetScenario = () => {
    setStep(0);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-50 font-sans text-slate-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      {/* Enhanced Background Ambience */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[800px] w-[800px] animate-pulse rounded-full bg-indigo-200/40 blur-[120px] dark:bg-indigo-900/20"></div>
        <div className="absolute -right-[10%] -bottom-[10%] h-[800px] w-[800px] animate-pulse rounded-full bg-blue-200/40 blur-[120px] delay-1000 dark:bg-blue-900/20"></div>
        <div className="absolute top-[20%] right-[20%] h-[400px] w-[400px] rounded-full bg-emerald-200/30 blur-[100px] dark:bg-emerald-900/10"></div>
      </div>

      {/* Grid Pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[40px_40px] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>

      <Container
        size="7xl"
        className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col py-12 lg:py-20"
      >
        {/* Header Section - More Spacing */}
        <div className="mb-16 text-center lg:mb-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-50 px-4 py-1.5 text-xs font-bold tracking-wider uppercase shadow-lg shadow-indigo-500/10 backdrop-blur-md dark:bg-indigo-500/10 dark:shadow-indigo-500/20">
            <MousePointer className="h-4 w-4 animate-bounce text-indigo-600 dark:text-indigo-400" />
            <span className="text-indigo-700 dark:text-indigo-300">{t('badge')}</span>
          </div>
          <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 lg:text-6xl dark:text-white">
            {t('title_line1')}
            {' '}
            <br className="hidden md:block" />
            <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-400 dark:to-cyan-400">
              {t('title_line2')}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT PANEL: NAVIGATION - Better Visual Hierarchy */}
          <div className="flex flex-col gap-6 lg:col-span-4">
            <div className="mb-4 hidden lg:block">
              <h3 className="mb-4 px-2 text-sm font-bold tracking-widest text-slate-500 uppercase">
                {t('select_scenario')}
              </h3>
              <div className="space-y-3">
                {scenarios.map((sc) => {
                  const isActive = activeId === sc.id;
                  const Icon = sc.icon;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => switchScenario(sc.id)}
                      className={`group relative flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? 'scale-[1.02] border-indigo-500/50 bg-white shadow-lg shadow-indigo-500/10 dark:bg-slate-800 dark:shadow-indigo-900/20'
                          : 'border-slate-200 bg-white/50 hover:translate-x-1 hover:border-slate-300 hover:bg-white dark:border-white/5 dark:bg-white/5 dark:hover:border-white/10 dark:hover:bg-white/10'
                      }`}
                    >
                      <div
                        className={`rounded-xl p-2.5 transition-colors ${isActive ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-500 group-hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:text-white'}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div
                          className={`text-sm font-bold ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white'}`}
                        >
                          {sc.label}
                        </div>
                        <div className="text-[10px] font-medium tracking-wider text-slate-500 uppercase group-hover:text-slate-600 dark:group-hover:text-slate-400">
                          {sc.role}
                        </div>
                      </div>
                      {isActive && (
                        <ChevronRight className="h-5 w-5 animate-pulse text-indigo-600 dark:text-indigo-400" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Nav - Horizontal Scroll */}
            <div className="scrollbar-hide -mx-4 overflow-x-auto px-4 pb-4 lg:hidden">
              <div className="flex min-w-max gap-3">
                {scenarios.map((sc) => {
                  const isActive = activeId === sc.id;
                  const Icon = sc.icon;
                  return (
                    <button
                      key={sc.id}
                      onClick={() => switchScenario(sc.id)}
                      className={`flex min-w-[140px] flex-col gap-3 rounded-2xl border p-4 text-left transition-all ${
                        isActive
                          ? 'border-indigo-500/50 bg-white shadow-lg dark:bg-slate-800'
                          : 'border-slate-200 bg-white/50 text-slate-500 dark:border-white/10 dark:bg-slate-900/50 dark:text-slate-400'
                      }`}
                    >
                      <div
                        className={`w-fit rounded-lg p-2 ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div
                          className={`text-sm font-bold ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'}`}
                        >
                          {sc.label}
                        </div>
                        <div className="truncate text-[10px] tracking-wider text-slate-500 uppercase">
                          {sc.role}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Helper Card */}
            <div className="mt-4 hidden rounded-2xl border border-slate-200 bg-white/60 p-6 backdrop-blur-md lg:block dark:border-white/10 dark:bg-white/5">
              <div
                className={`mb-3 flex items-center gap-2 text-xs font-bold tracking-widest uppercase ${currentScenario.color}`}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-current shadow-[0_0_10px_currentColor]" />
                {t('current_mission')}
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                {currentScenario.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {currentScenario.desc}
              </p>
            </div>
          </div>

          {/* RIGHT PANEL: SIMULATION - Centered and Larger */}
          <div className="relative flex min-h-[650px] flex-col items-center lg:col-span-8">
            {/* Mobile Title Overlay */}
            <div className="mb-8 w-full px-4 text-center lg:hidden">
              <h2 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                {currentScenario.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">{currentScenario.desc}</p>
            </div>

            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-50 flex flex-col items-center justify-center rounded-3xl bg-slate-50/80 backdrop-blur-sm transition-all duration-300 dark:bg-slate-950/80">
                <Loader2 className="mb-4 h-12 w-12 animate-spin text-indigo-600 dark:text-indigo-500" />
                <span className="animate-pulse text-sm font-medium tracking-widest text-indigo-600 dark:text-indigo-400">
                  {t('loading')}
                  {' '}
                  {currentScenario.label.toUpperCase()}
                  ...
                </span>
              </div>
            )}

            {/* Device Container */}
            <div className="flex h-full w-full items-center justify-center transition-all duration-500">
              {currentScenario.device === 'mobile' ? (
                <div className="scale-[0.9] transform transition-all duration-500 sm:scale-100 lg:scale-[0.95] xl:scale-100">
                  <MobileFrame>
                    <ScenarioContent
                      id={activeId}
                      step={step}
                      onNext={nextStep}
                      onReset={resetScenario}
                    />
                  </MobileFrame>
                </div>
              ) : (
                <div className="-mt-8 w-full origin-top scale-[0.6] transform transition-all duration-500 sm:scale-[0.8] md:scale-95 lg:mt-0 lg:origin-center lg:scale-100">
                  <DesktopFrame role={currentScenario.role}>
                    <ScenarioContent
                      id={activeId}
                      step={step}
                      onNext={nextStep}
                      onReset={resetScenario}
                    />
                  </DesktopFrame>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>

      {/* BENEFITS SECTION */}
      <section className="relative border-t border-slate-200 bg-slate-100/50 py-24 dark:border-white/5 dark:bg-slate-900/50">
        <Container size="7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl dark:text-white">
              {t('benefits_title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t('benefits_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-500/30 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 ring-1 ring-blue-500/20 transition-colors group-hover:bg-blue-500/20 dark:bg-blue-500/10">
                <Zap className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {t('benefits.zero_setup.title')}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t('benefits.zero_setup.desc')}
              </p>
            </div>
            <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-purple-500/30 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 ring-1 ring-purple-500/20 transition-colors group-hover:bg-purple-500/20 dark:bg-purple-500/10">
                <ShieldCheck className="h-7 w-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {t('benefits.realistic.title')}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t('benefits.realistic.desc')}
              </p>
            </div>
            <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-emerald-500/30 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 ring-1 ring-emerald-500/20 transition-colors group-hover:bg-emerald-500/20 dark:bg-emerald-500/10">
                <Globe className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                {t('benefits.unified.title')}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {t('benefits.unified.desc')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA SECTION */}
      <CTABannerSection
        title={`${t('cta_title_part1')} ${t('cta_title_part2')}`}
        subtitle={t('cta_subtitle')}
        badgeText={t('cta_badge')}
        demoBtnText={t('start_trial')}
        demoBtnLink="/demo"
        pricingBtnText={t('check_pricing')}
        pricingBtnLink="/pricing"
        trustText1={t('trust_14_days') || '14 Days Free'}
        trustText2={t('trust_no_credit_card') || 'No Credit Card'}
      />
    </div>
  );
}

// ----------------------------------------------------------------------
// SCENARIO COMPONENTS
// ----------------------------------------------------------------------

const ScenarioContent: React.FC<{
  id: ScenarioType;
  step: number;
  onNext: () => void;
  onReset: () => void;
}> = ({ id, step, onNext, onReset }) => {
  const t = useTranslations('ProductTour.ui'); // Use nested translations for UI

  // SUCCESS / COMPLETION STATE
  if (step === 3) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50 p-8 text-center dark:bg-slate-900">
        <div className="mb-8 flex h-24 w-24 animate-bounce items-center justify-center rounded-full bg-emerald-100 ring-1 ring-emerald-500/30 dark:bg-emerald-500/10">
          <Check className="h-12 w-12 text-emerald-600 dark:text-emerald-500" />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
          {t('done')}
          !
        </h3>
        <p className="mx-auto mb-8 max-w-xs leading-relaxed text-slate-600 dark:text-slate-400">
          You've just experienced the efficiency of BizOps.
        </p>
        <div className="flex w-full max-w-xs flex-col gap-3">
          <Button
            fullWidth
            size="lg"
            className="w-full border-none bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500"
            asChild
          >
            <Link href="/demo">Start Free Trial</Link>
          </Button>
          <button
            onClick={onReset}
            className="flex items-center justify-center gap-2 py-3 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <RefreshCw className="h-4 w-4" />
            {' '}
            Replay Scenario
          </button>
        </div>
      </div>
    );
  }

  // --- SALES SCENARIO ---
  if (id === 'sales') {
    if (step === 0) {
      return (
        <div className="flex h-full flex-col bg-slate-50 font-sans dark:bg-slate-950">
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('quotations')}</h3>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700">
              <Plus className="h-5 w-5 text-indigo-500" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {/* Sales Target Card */}
            <div className="transform rounded-2xl bg-linear-to-br from-indigo-600 to-blue-700 p-5 text-white shadow-lg shadow-indigo-900/20 transition-transform duration-300 hover:scale-[1.02]">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <p className="mb-1 text-xs font-bold tracking-wider text-indigo-100 uppercase opacity-80">
                    {t('sales_target')}
                  </p>
                  <h4 className="text-3xl font-bold">85%</h4>
                </div>
                <div className="rounded-lg bg-white/20 p-2 backdrop-blur-sm">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="mb-2 h-2 w-full rounded-full bg-black/20">
                <div className="h-2 w-[85%] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              </div>
              <p className="text-right text-xs font-medium text-indigo-100/80">Rp 850jt / Rp 1M</p>
            </div>

            {/* List Header */}
            <div className="mt-2 flex items-center justify-between px-1">
              <span className="text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                {t('recent_drafts')}
              </span>
              <span className="cursor-pointer text-xs font-bold text-indigo-600 hover:underline dark:text-indigo-400">
                {t('view_all')}
              </span>
            </div>

            {/* List Items */}
            {[1, 2].map(i => (
              <div
                key={i}
                className="group flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-indigo-500/50 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500/50"
              >
                <div>
                  <h4 className="font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-500">
                    PT Sumber Makmur
                  </h4>
                  <p className="mt-1 text-xs font-medium text-slate-500">
                    QT-2024-00
                    {i}
                    {' '}
                    • Rp 25.000.000
                  </p>
                </div>
                <span className="rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-800">
                  {t('draft')}
                </span>
              </div>
            ))}
          </div>

          {/* Floater Action */}
          <div className="border-t border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <Button
              fullWidth
              className="h-12 rounded-xl bg-indigo-600 text-base font-bold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500"
              onClick={onNext}
            >
              <Plus className="mr-2 h-5 w-5" />
              {' '}
              {t('create_new_quotation')}
            </Button>
          </div>
        </div>
      );
    }
    // Step 1: Create Quotation Form
    if (step === 1) {
      return (
        <div className="flex h-full flex-col bg-slate-50 font-sans dark:bg-slate-950">
          <div className="flex-1 space-y-4 overflow-y-auto p-5">
            {/* Customer Select */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <label className="mb-3 block text-xs font-bold tracking-wider text-slate-500 uppercase">
                {t('customer')}
              </label>
              <div className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  PT Mitra Abadi Teknik
                </span>
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              </div>
            </div>

            {/* Items List */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-3 flex items-center justify-between">
                <label className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                  {t('items')}
                </label>
                <span className="cursor-pointer text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  + Add
                </span>
              </div>
              <div className="mb-2 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                <div>
                  <span className="block text-sm font-bold text-slate-900 dark:text-white">
                    MacBook Pro M3
                  </span>
                  <span className="text-xs text-slate-500">5 units</span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Rp 25jt/unit
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Sheet Summary */}
          <div className="rounded-t-3xl border-t border-slate-200 bg-white p-6 shadow-[0_-5px_30px_rgba(0,0,0,0.05)] dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-2 flex justify-between text-sm text-slate-500">
              <span>{t('subtotal')}</span>
              <span className="font-medium">Rp 125.000.000</span>
            </div>
            <div className="mb-4 flex justify-between text-sm text-slate-500">
              <span>{t('tax')}</span>
              <span className="font-medium">Rp 13.750.000</span>
            </div>
            <div className="my-3 border-t border-dashed border-slate-200 dark:border-slate-700"></div>
            <div className="mb-6 flex justify-between text-lg font-bold text-slate-900 dark:text-white">
              <span>{t('total')}</span>
              <span className="text-indigo-600 dark:text-indigo-400">Rp 138.750.000</span>
            </div>
            <Button
              fullWidth
              size="lg"
              className="rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 hover:bg-indigo-500"
              onClick={onNext}
            >
              {t('save_and_send')}
            </Button>
          </div>
        </div>
      );
    }
    // Step 2: Success
    if (step === 2) {
      return (
        <div className="flex h-full flex-col items-center justify-center bg-slate-50 p-6 text-center font-sans dark:bg-slate-950">
          <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-slate-100 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="absolute inset-0 animate-ping rounded-3xl bg-indigo-500/10 opacity-50"></div>
            <FileText className="relative z-10 h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            <div className="absolute -top-2 -right-2 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
              NEW
            </div>
          </div>
          <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
            {t('quotation_created')}
          </h3>
          <p className="mx-auto mb-10 max-w-[220px] text-sm leading-relaxed text-slate-500">
            {t('quotation_ready')}
          </p>

          <div className="w-full space-y-4">
            <button
              onClick={onNext}
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] py-3.5 font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-[#20bd5a] active:scale-95"
            >
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              {' '}
              {t('send_whatsapp')}
            </button>
            <button
              onClick={onNext}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3.5 font-bold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              <Users className="h-5 w-5" />
              {' '}
              {t('send_email')}
            </button>
          </div>
        </div>
      );
    }
  }

  // --- MANAGER SCENARIO ---
  if (id === 'manager') {
    if (step === 0) {
      return (
        <div className="flex h-full flex-col bg-slate-50 font-sans dark:bg-slate-950">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('approvals')}</h3>
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-bold text-white shadow-sm">
              3 Pending
            </span>
          </div>
          <div className="space-y-4 p-4">
            {/* Active Card */}
            <div
              className="cursor-pointer rounded-2xl border-l-4 border-indigo-500 bg-white p-5 shadow-sm transition-all hover:shadow-lg active:scale-[0.98] dark:bg-slate-900"
              role="button"
              tabIndex={0}
              onClick={onNext}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onNext()}
            >
              <div className="mb-3 flex justify-between">
                <span className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                  <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                  {t('purchase_request')}
                </span>
                <span className="text-xs font-medium text-slate-400">2m ago</span>
              </div>
              <p className="mb-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                New MacBook for Design Team
              </p>
              <div className="flex gap-2 text-xs">
                <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  IT Dept
                </span>
                <span className="rounded-md bg-indigo-50 px-2.5 py-1 font-bold text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                  Rp 25.000.000
                </span>
              </div>
            </div>

            {/* Inactive Card */}
            <div className="rounded-2xl border-l-4 border-slate-200 bg-white p-5 opacity-60 shadow-sm transition-opacity hover:opacity-100 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-3 flex justify-between">
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {t('leave')}
                </span>
                <span className="text-xs text-slate-500">1h ago</span>
              </div>
              <p className="mb-0 text-sm text-slate-500">Annual Leave - Budi Santoso</p>
            </div>
          </div>
        </div>
      );
    }
    if (step === 1) {
      return (
        <div className="flex h-full flex-col bg-slate-50 font-sans dark:bg-slate-950">
          <div className="z-10 bg-white p-6 shadow-sm dark:bg-slate-900">
            <h4 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
              Purchase Request #PR-102
            </h4>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-400">
                JD
              </div>
              <div>
                <span className="mb-0.5 block text-xs font-bold tracking-wider text-slate-500 uppercase">
                  {t('requested_by')}
                </span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">John Doe</span>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5 dark:border-indigo-500/20 dark:bg-indigo-900/10">
              <span className="mb-1 block text-xs font-bold tracking-wider text-indigo-500 uppercase">
                {t('total_amount')}
              </span>
              <span className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">
                Rp 25.000.000
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h5 className="mb-4 border-b border-slate-100 pb-2 text-sm font-bold text-slate-900 dark:border-slate-800 dark:text-white">
                {t('items')}
              </h5>
              <div className="flex justify-between py-1 text-sm">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  MacBook Pro M3 Pro
                </span>
                <span className="text-slate-500">1 unit</span>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50 p-4 text-xs text-amber-600 dark:border-amber-900/20 dark:bg-amber-900/10 dark:text-amber-400">
              <ShieldCheck className="h-5 w-5 shrink-0" />
              <span className="leading-relaxed font-medium">{t('exceeds_budget')}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-slate-200 bg-white p-5 pb-8 dark:border-slate-800 dark:bg-slate-900">
            <Button
              variant="outline"
              className="h-12 rounded-xl border-red-200 text-red-600 hover:border-red-300 hover:bg-red-50 dark:border-red-900/50 dark:text-red-400 dark:hover:bg-red-900/20"
              onClick={onNext}
            >
              {t('reject')}
            </Button>
            <Button
              className="h-12 rounded-xl bg-emerald-600 font-bold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-500"
              onClick={onNext}
            >
              {t('approve')}
            </Button>
          </div>
        </div>
      );
    }
    if (step === 2) {
      return <ScenarioContent id="sales" step={3} onNext={onNext} onReset={onReset} />;
    } // Reuse success
  }

  // --- FINANCE SCENARIO ---
  if (id === 'finance') {
    if (step === 0) {
      return (
        <div className="flex h-full flex-col bg-slate-50 p-6 font-sans lg:p-10 dark:bg-slate-950">
          <div className="mx-auto grid h-full w-full max-w-6xl grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="col-span-3 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center gap-3 px-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <DollarSign className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold text-slate-900 dark:text-white">Finance</span>
              </div>
              <nav className="space-y-1">
                <div className="flex items-center gap-3 rounded-xl border-l-4 border-indigo-500 bg-indigo-50 px-4 py-3 text-sm font-bold text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-400">
                  <TrendingUp className="h-4 w-4" />
                  {' '}
                  {t('overview')}
                </div>
                <div className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
                  <FileText className="h-4 w-4" />
                  {' '}
                  {t('invoices')}
                </div>
                <div className="flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
                  <Clock className="h-4 w-4" />
                  {' '}
                  {t('payables')}
                </div>
              </nav>
            </div>

            {/* Main Content */}
            <div className="col-span-9 space-y-8">
              <div className="grid grid-cols-3 gap-6">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <span className="relative z-10 text-xs font-bold tracking-wider text-slate-500 uppercase">
                    {t('cash_on_hand')}
                  </span>
                  <div className="relative z-10 mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
                    Rp 1.25 M
                  </div>
                  <span className="relative z-10 mt-2 inline-flex items-center gap-1 rounded-md bg-emerald-50 px-2 py-1 text-xs font-bold text-emerald-500 dark:bg-emerald-900/20">
                    +12% vs last month
                  </span>
                  <TrendingUp className="absolute -right-4 -bottom-4 z-0 h-24 w-24 text-slate-50 dark:text-slate-800" />
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <span className="text-xs font-bold tracking-wider text-slate-500 uppercase">
                    {t('payables')}
                  </span>
                  <div className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-white">
                    Rp 450 jt
                  </div>
                  <span className="mt-2 inline-block text-xs font-bold text-amber-500">
                    Due within 7 days
                  </span>
                </div>

                <div
                  className="group cursor-pointer rounded-2xl bg-linear-to-br from-indigo-600 to-violet-700 p-6 text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-2xl"
                  role="button"
                  tabIndex={0}
                  onClick={onNext}
                  onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onNext()}
                >
                  <div className="mb-4 flex items-start justify-between">
                    <span className="text-xs font-bold tracking-wider text-indigo-200 uppercase">
                      {t('action_needed')}
                    </span>
                    <div className="rounded-lg bg-white/20 p-1.5 transition-colors group-hover:bg-white/30">
                      <RefreshCw className="animate-spin-slow h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-2 mb-1 text-xl font-bold">{t('reconcile_bank')}</div>
                  <span className="rounded bg-white/10 px-2 py-1 text-xs text-indigo-100">
                    58 new transactions
                  </span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="flex h-80 flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-8 flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 dark:text-white">{t('cash_flow')}</h4>
                  <select className="cursor-pointer rounded-lg border-none bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600 outline-none dark:bg-slate-800 dark:text-slate-400">
                    <option>Last 12 Months</option>
                  </select>
                </div>
                <div className="flex flex-1 items-end justify-between gap-4">
                  {[35, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 70].map((h, i) => (
                    <div
                      key={i}
                      className="group relative flex h-full w-full items-end overflow-hidden rounded-t-xl bg-slate-100 dark:bg-slate-800"
                    >
                      <div
                        className="w-full rounded-t-xl bg-indigo-500 transition-all duration-500 group-hover:bg-indigo-400"
                        style={{ height: `${h}%` }}
                      >
                      </div>
                      {/* Tooltip on hover */}
                      <div className="absolute inset-x-0 top-0 -translate-y-full transform text-center text-[10px] font-bold text-slate-500 opacity-0 transition-opacity group-hover:opacity-100">
                        {h}
                        M
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (step === 1) {
      return (
        <div className="flex h-full items-center justify-center bg-slate-50 p-6 font-sans dark:bg-slate-950">
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-2xl dark:border-slate-800 dark:bg-slate-900">
            <div className="absolute top-0 left-0 h-1.5 w-full bg-indigo-100 dark:bg-slate-800">
              <div
                className="h-full animate-[width_2s_ease-in-out_forwards] bg-indigo-500"
                onAnimationEnd={onNext}
                style={{ width: '100%' }}
              >
              </div>
            </div>

            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 dark:bg-slate-800">
              <RefreshCw className="h-8 w-8 animate-spin text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              {t('reconciling_status')}
            </h3>
            <p className="mb-8 text-sm leading-relaxed font-medium text-slate-500">
              {t('matching_desc')}
            </p>

            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
              <span className="flex items-center justify-center gap-2 font-mono text-xs text-slate-400">
                <Zap className="h-3 w-3" />
                {' '}
                {t('ai_logic')}
              </span>
            </div>
          </div>
        </div>
      );
    }
    if (step === 2) {
      return <ScenarioContent id="sales" step={3} onNext={onNext} onReset={onReset} />;
    }
  }

  // --- HR SCENARIO ---
  if (id === 'employee') {
    if (step === 0) {
      return (
        <div className="relative flex h-full flex-col overflow-hidden bg-slate-50 font-sans dark:bg-slate-950">
          {/* Top Background */}
          <div className="absolute inset-x-0 top-0 z-0 h-[280px] rounded-b-[3rem] bg-indigo-600"></div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="p-8 pb-4 text-white">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/20 text-lg font-bold backdrop-blur-md">
                    BS
                  </div>
                  <div>
                    <div className="mb-1 text-xs font-bold tracking-wider uppercase opacity-80">
                      Good Morning
                    </div>
                    <div className="text-xl font-bold">Budi Santoso</div>
                  </div>
                </div>
                <div className="cursor-pointer rounded-full bg-white/20 p-2.5 backdrop-blur-md transition-colors hover:bg-white/30">
                  <Clock className="h-6 w-6" />
                </div>
              </div>
              <div className="mt-6 text-center">
                <div className="mb-2 text-5xl font-extrabold tracking-tight">08:58</div>
                <div className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium opacity-80">
                  Monday, 12 Oct 2024
                </div>
              </div>
            </div>

            <div className="-mt-4 mb-8 px-6">
              <div
                className="group cursor-pointer rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-xl transition-transform duration-300 hover:scale-[1.02] dark:border-slate-800 dark:bg-slate-900"
                role="button"
                tabIndex={0}
                onClick={onNext}
                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onNext()}
              >
                <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-50 ring-8 ring-indigo-50/50 transition-transform group-hover:scale-110 dark:bg-indigo-900/20 dark:ring-indigo-900/10">
                  <Zap className="h-10 w-10 fill-current text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">
                  {t('clock_in')}
                </h3>
                <p className="text-xs font-bold tracking-wide text-slate-500 uppercase">
                  {t('shift_time')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 px-6">
              <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 py-6 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800">
                <FileText className="h-8 w-8 text-orange-500" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('payslip')}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 py-6 shadow-sm transition-colors hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800">
                <Users className="h-8 w-8 text-purple-500" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {t('leave')}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (step === 1) {
      return (
        <div className="flex h-full flex-col items-center justify-center bg-emerald-500 p-8 text-center font-sans text-white">
          <div className="mb-8 flex h-28 w-28 animate-pulse items-center justify-center rounded-full bg-white/20 shadow-2xl backdrop-blur-md">
            <MapPin className="h-12 w-12 text-white" />
          </div>
          <h3 className="mb-3 text-3xl font-extrabold">{t('clocked_in_success')}</h3>
          <p className="mb-10 text-lg font-medium text-white/90">{t('location_verified')}</p>
          <Button
            className="h-14 w-full rounded-xl bg-white text-lg font-bold text-emerald-600 shadow-xl hover:bg-emerald-50"
            onClick={onNext}
          >
            {t('done')}
          </Button>
        </div>
      );
    }
    if (step === 2) {
      return <ScenarioContent id="sales" step={3} onNext={onNext} onReset={onReset} />;
    }
  }

  // --- WAREHOUSE SCENARIO ---
  if (id === 'warehouse') {
    if (step === 0) {
      return (
        <div className="flex h-full flex-col bg-slate-900 font-mono text-white">
          <div className="flex items-center justify-between border-b border-slate-800 p-5">
            <h3 className="text-lg font-bold tracking-wider">{t('scanner_v2')}</h3>
            <div className="h-3 w-3 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
          </div>
          <div className="relative flex flex-1 flex-col items-center justify-center p-8">
            <div
              className="group relative flex h-64 w-64 cursor-pointer items-center justify-center rounded-3xl border-2 border-white/20 transition-colors hover:border-white/40"
              role="button"
              tabIndex={0}
              onClick={onNext}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onNext()}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 animate-[scan_2s_infinite] bg-red-500 shadow-[0_0_15px_#ef4444]"></div>
              <div className="text-center transition-transform duration-300 group-hover:scale-110">
                <QrCode className="mx-auto mb-6 h-20 w-20 text-white/30" />
                <span className="text-sm font-bold tracking-[0.2em] text-white/50">
                  {t('tap_to_scan')}
                </span>
              </div>
              {/* Corner markers */}
              <div className="absolute top-0 left-0 h-8 w-8 rounded-tl-lg border-t-4 border-l-4 border-white"></div>
              <div className="absolute top-0 right-0 h-8 w-8 rounded-tr-lg border-t-4 border-r-4 border-white"></div>
              <div className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-lg border-b-4 border-l-4 border-white"></div>
              <div className="absolute right-0 bottom-0 h-8 w-8 rounded-br-lg border-r-4 border-b-4 border-white"></div>
            </div>
          </div>
          <div className="grid h-20 grid-cols-3 border-t border-slate-700 bg-slate-800">
            <div className="flex items-center justify-center border-r border-slate-700 bg-indigo-600 text-white">
              <Package className="h-7 w-7" />
            </div>
            <div className="flex items-center justify-center border-r border-slate-700 text-slate-400 hover:bg-slate-700/50">
              <RefreshCw className="h-7 w-7" />
            </div>
            <div className="flex items-center justify-center text-slate-400 hover:bg-slate-700/50">
              <Users className="h-7 w-7" />
            </div>
          </div>
        </div>
      );
    }
    if (step === 1) {
      return (
        <div className="flex h-full flex-col bg-slate-900 p-6 font-mono text-white">
          <div className="mb-8 flex items-start gap-5">
            <div className="h-28 w-28 shrink-0 rounded-xl bg-white p-3">
              <div className="h-full w-full animate-pulse rounded bg-slate-200"></div>
            </div>
            <div>
              <h3 className="mb-1 text-xl leading-tight font-bold">Nike Air Jordan 1 High OG</h3>
              <p className="mb-3 text-sm text-slate-400">SKU: AJ1-HIGH-OG-001</p>
              <span className="rounded border border-green-500/30 bg-green-500/20 px-2.5 py-1.5 text-xs font-bold tracking-wide text-green-400 uppercase">
                {t('stock_valid')}
              </span>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <label className="mb-1 block text-xs font-bold text-slate-500 uppercase">
                {t('current_stock')}
              </label>
              <div className="text-3xl font-bold">
                142
                <span className="text-sm font-medium text-slate-500">pairs</span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-5">
              <label className="mb-1 block text-xs font-bold text-slate-500 uppercase">
                {t('bin_location')}
              </label>
              <div className="text-2xl font-bold text-indigo-400">A-12-04</div>
            </div>
          </div>
          <Button
            fullWidth
            className="mt-auto h-14 bg-green-600 text-lg font-bold shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:bg-green-50"
            onClick={onNext}
          >
            {t('confirm_pick')}
          </Button>
        </div>
      );
    }
    if (step === 2) {
      return <ScenarioContent id="sales" step={3} onNext={onNext} onReset={onReset} />;
    }
  }

  // Fallback for CEO (reuse similar dashboard logic)
  return <ScenarioContent id="finance" step={0} onNext={onNext} onReset={onReset} />;
};
