'use client';

import type { ScenarioDef, ScenarioType } from './product-tour';
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Check,
  ChevronRight,
  DollarSign,
  FileText,
  Globe,
  Loader2,
  MousePointer,
  Package,
  Plus,
  RefreshCw,
  Send,
  ShieldCheck,
  Smartphone,
  UserCheck,
  Users,
  Zap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { useState } from 'react';
import Container from '@/components/layout/Container';
import { CardSlider, Grid, Typography } from '@/components/ui';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

import Stack from '@/components/ui/Stack';
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
      color: 'text-blue-400',
    },
    {
      id: 'manager',
      label: t('scenarios.manager.label'),
      role: t('scenarios.manager.role'),
      icon: Briefcase,
      device: 'desktop',
      title: t('scenarios.manager.title'),
      desc: t('scenarios.manager.desc'),
      color: 'text-purple-400',
    },
    {
      id: 'warehouse',
      label: t('scenarios.warehouse.label'),
      role: t('scenarios.warehouse.role'),
      icon: Package,
      device: 'mobile',
      title: t('scenarios.warehouse.title'),
      desc: t('scenarios.warehouse.desc'),
      color: 'text-amber-400',
    },
    {
      id: 'employee',
      label: t('scenarios.employee.label'),
      role: t('scenarios.employee.role'),
      icon: UserCheck,
      device: 'mobile',
      title: t('scenarios.employee.title'),
      desc: t('scenarios.employee.desc'),
      color: 'text-pink-400',
    },
    {
      id: 'finance',
      label: t('scenarios.finance.label'),
      role: t('scenarios.finance.role'),
      icon: DollarSign,
      device: 'desktop',
      title: t('scenarios.finance.title'),
      desc: t('scenarios.finance.desc'),
      color: 'text-emerald-400',
    },
    {
      id: 'ceo',
      label: t('scenarios.ceo.label'),
      role: t('scenarios.ceo.role'),
      icon: BarChart3,
      device: 'mobile',
      title: t('scenarios.ceo.title'),
      desc: t('scenarios.ceo.desc'),
      color: 'text-indigo-400',
    },
  ];
  const [activeId, setActiveId] = useState<ScenarioType>('sales');
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const currentScenario = scenarios.find(s => s.id === activeId) || scenarios[0];

  const switchScenario = (id: ScenarioType) => {
    if (id === activeId) {
      return;
    }
    setIsLoading(true);
    setActiveId(id);
    setStep(0);
    setTimeout(() => setIsLoading(false), 600);
  };

  const nextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setStep(prev => Math.min(prev + 1, 3));
      setIsLoading(false);
    }, 800);
  };

  const resetScenario = () => {
    setStep(0);
  };

  return (
    <div className="dark:bg-dark-bg relative min-h-screen overflow-x-hidden bg-white pt-20 font-sans text-slate-900 dark:text-white">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="bg-primary-500/5 pointer-events-none absolute top-0 left-0 h-[600px] w-[600px] rounded-full blur-[120px]"></div>
      <div className="pointer-events-none absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-[120px]"></div>

      {/* MAIN INTERFACE CONTAINER */}
      <Container
        size="7xl"
        className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center py-8 lg:py-0"
      >
        <Grid cols={12} gap={12} className="items-center">
          {/* LEFT PANEL: CONTROLS */}
          <Stack direction="vertical" gap={8} className="lg:col-span-4">
            {/* Header Title */}
            <div>
              <div className="text-primary-300 mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-wider uppercase ring-1 ring-white/5 backdrop-blur-xl">
                <MousePointer className="h-3 w-3 animate-bounce" />
                {' '}
                {t('badge')}
              </div>
              <Typography
                variant="h1"
                as="h1"
                className="leading-tight font-extrabold tracking-tight"
              >
                <span className="text-slate-600 dark:text-slate-400">{t('title_line1')}</span>
                <br />
                <span className="text-slate-600 dark:text-slate-400">{t('title_line2')}</span>
              </Typography>
              <Typography
                variant="small"
                className="leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {t('subtitle')}
              </Typography>
            </div>

            {/* Mobile Scenario Selector */}
            <div className="scrollbar-hide -mx-4 w-full overflow-x-auto px-4 pb-4 lg:hidden">
              <div className="flex min-w-max gap-3">
                {scenarios.map(sc => (
                  <button
                    key={sc.id}
                    onClick={() => switchScenario(sc.id)}
                    className={`group relative flex min-w-[200px] items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                      activeId === sc.id
                        ? 'border-primary-500/50 shadow-primary-900/20 ring-primary-500/50 bg-slate-100 shadow-lg ring-1 dark:bg-white/10'
                        : 'border-transparent bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white'
                    }`}
                  >
                    <div
                      className={`shrink-0 rounded-lg p-2 transition-colors ${activeId === sc.id ? 'bg-primary-500 text-white shadow-md' : 'bg-slate-200 text-slate-600 group-hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:text-white'}`}
                    >
                      <sc.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div
                        className={`truncate text-sm font-bold ${activeId === sc.id ? 'text-slate-900 dark:text-white' : 'text-slate-700 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white'}`}
                      >
                        <span>{sc.label}</span>
                      </div>
                      <div className="truncate text-[10px] text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400">
                        <span>{sc.role}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop Vertical Scenario Menu */}
            <Stack direction="vertical" gap={2} className="hidden lg:flex">
              <Typography
                variant="small"
                className="mb-1 px-2 text-xs font-bold tracking-wider text-slate-600 uppercase dark:text-slate-500"
              >
                <span>{t('select_scenario')}</span>
              </Typography>
              {scenarios.map(sc => (
                <button
                  key={sc.id}
                  onClick={() => switchScenario(sc.id)}
                  className={`group relative flex items-center gap-4 rounded-xl border px-4 py-3 text-left transition-all duration-300 ${
                    activeId === sc.id
                      ? 'border-primary-500/50 shadow-primary-900/20 ring-primary-500/50 translate-x-2 bg-slate-100 shadow-lg ring-1 dark:bg-white/10'
                      : 'border-transparent bg-slate-50 text-slate-600 hover:translate-x-1 hover:border-slate-300 hover:bg-slate-100 dark:bg-white/5 dark:text-slate-400 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white'
                  }`}
                >
                  <div
                    className={`rounded-lg p-2 transition-colors ${activeId === sc.id ? 'dark:bg-primary-500 text-slate-600 shadow-md dark:text-white' : 'bg-slate-200 text-slate-600 group-hover:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:text-white'}`}
                  >
                    <sc.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`text-sm font-bold ${activeId === sc.id ? 'text-slate-900 dark:text-white' : 'text-slate-700 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white'}`}
                    >
                      <span>{sc.label}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400">
                      <span>{sc.role}</span>
                    </div>
                  </div>
                  {activeId === sc.id && (
                    <ChevronRight className="text-primary-400 h-4 w-4 animate-pulse" />
                  )}
                </button>
              ))}
            </Stack>

            {/* Active Scenario Info Card */}
            <div className="hidden rounded-2xl border border-slate-300 bg-slate-50/50 p-5 backdrop-blur-sm lg:block dark:border-slate-800 dark:bg-slate-900/50">
              <div
                className={`mb-2 text-xs font-bold tracking-widest uppercase ${currentScenario!.color} flex items-center gap-2`}
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-current"></span>
                <span>{t('current_mission')}</span>
              </div>
              <Typography variant="h3" as="h3" className="font-bold text-slate-900 dark:text-white">
                <span>{currentScenario!.title}</span>
              </Typography>
              <Typography
                variant="small"
                className="leading-relaxed text-slate-600 dark:text-slate-400"
              >
                {currentScenario!.desc}
              </Typography>
            </div>
          </Stack>

          {/* RIGHT PANEL: MAIN STAGE */}
          <div className="relative flex min-h-[600px] w-full flex-col items-center lg:col-span-8 lg:block lg:pt-8">
            {/* Mobile Info */}
            <div className="relative z-20 mb-4 block w-full px-4 text-center lg:hidden">
              <Typography
                variant="h2"
                as="h2"
                className="leading-tight font-bold text-slate-900 dark:text-white"
              >
                <span>{currentScenario!.title}</span>
              </Typography>
              <Typography
                variant="small"
                className="leading-snug text-slate-600 dark:text-slate-400"
              >
                {currentScenario!.desc}
              </Typography>
            </div>

            {/* Loading Overlay */}
            {isLoading && (
              <div className="dark:bg-dark-bg/90 absolute inset-0 z-50 flex flex-col items-center justify-center rounded-3xl bg-white/90 backdrop-blur-sm transition-opacity duration-300">
                <Loader2 className="text-primary-500 mb-4 h-12 w-12 animate-spin" />
                <span className="text-primary-600 dark:text-primary-200 animate-pulse text-sm font-medium tracking-wider">
                  <span>
                    {t('loading')}
                    {' '}
                    {currentScenario!.label.toUpperCase()}
                    ...
                  </span>
                </span>
              </div>
            )}

            {/* Device Frame */}
            <div className="flex w-full transform justify-center transition-all duration-500">
              {currentScenario!.device === 'mobile'
                ? (
                    <div className="origin-top scale-[0.85] transform sm:scale-95 md:origin-center md:scale-100 lg:scale-90 xl:scale-100">
                      <MobileFrame>
                        <ScenarioContent
                          id={activeId}
                          step={step}
                          onNext={nextStep}
                          onReset={resetScenario}
                        />
                      </MobileFrame>
                    </div>
                  )
                : (
                    <div className="-mt-4 w-full origin-top scale-[0.55] transform sm:scale-[0.75] md:-mt-0 md:origin-center md:scale-90 lg:scale-90 xl:scale-100">
                      <DesktopFrame role={currentScenario!.role}>
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
        </Grid>
      </Container>

      {/* SUPPORTING SECTIONS */}

      {/* Benefits */}
      <section className="relative mt-10 overflow-hidden border-t border-slate-200 bg-slate-50 py-16 md:py-24 dark:border-slate-900 dark:bg-slate-950/50">
        <Container size="7xl" className="relative z-10">
          <div className="mb-12 text-center md:mb-16">
            <Typography variant="h2" as="h2">
              <span>{t('benefits_title')}</span>
            </Typography>
            <Typography variant="body" className="text-slate-600 dark:text-slate-400">
              {t('benefits_subtitle')}
            </Typography>
          </div>

          <CardSlider
            desktopClassName="md:grid md:grid-cols-3 md:gap-8"
            mobileItemWidth="w-[85vw] sm:w-[350px]"
          >
            <div className="hover:border-primary-500/30 h-full rounded-2xl border border-slate-200 bg-white p-6 transition-colors dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-blue-500/30">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <Typography variant="h3" as="h3">
                <span>{t('benefits.zero_setup.title')}</span>
              </Typography>
              <Typography variant="small" className="text-slate-600 dark:text-slate-400">
                {t('benefits.zero_setup.desc')}
              </Typography>
            </div>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-purple-500/30 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 ring-1 ring-purple-500/30">
                <ShieldCheck className="h-6 w-6 text-purple-400" />
              </div>
              <Typography variant="h3" as="h3">
                <span>{t('benefits.realistic.title')}</span>
              </Typography>
              <Typography variant="small" className="text-slate-600 dark:text-slate-400">
                {t('benefits.realistic.desc')}
              </Typography>
            </div>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-emerald-500/30 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/30">
                <Globe className="h-6 w-6 text-emerald-400" />
              </div>
              <Typography variant="h3" as="h3">
                <span>{t('benefits.unified.title')}</span>
              </Typography>
              <Typography variant="small" className="text-slate-600 dark:text-slate-400">
                {t('benefits.unified.desc')}
              </Typography>
            </div>
          </CardSlider>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="relative overflow-hidden py-24">
        <div className="bg-primary-900/10 absolute inset-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20"></div>

        <Container size="7xl" className="relative z-10 text-center">
          <Badge
            variant="outline"
            className="border-primary-500/30 text-primary-300 bg-primary-500/10 mb-6"
          >
            {t('cta_badge')}
          </Badge>
          <Typography
            variant="h2"
            as="h2"
            className="font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            <span>{t('cta_title_part1')}</span>
            <span className="text-primary-600 dark:text-primary-400">{t('cta_title_part2')}</span>
          </Typography>
          <Typography variant="body" className="text-slate-600 dark:text-slate-400">
            {t('cta_subtitle')}
          </Typography>
          <Stack direction="vertical" gap={4} className="mt-8 justify-center">
            <Link href="/demo">
              <Button
                size="lg"
                className="bg-primary-600 hover:bg-primary-500 group border-none px-10 text-lg font-bold shadow-[0_0_40px_rgba(14,165,233,0.3)] sm:w-auto"
              >
                <span className="text-slate-600 dark:text-white">{t('start_trial')}</span>
                <ArrowRight className="ml-2 h-5 w-5 text-slate-600 transition-transform group-hover:translate-x-1 dark:text-white" />
              </Button>
            </Link>
            <Link href="/tools/pricing-calculator">
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 px-10 text-lg text-slate-900 hover:bg-slate-100 sm:w-auto dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
              >
                <span className="text-slate-600 dark:text-white">{t('check_pricing')}</span>
              </Button>
            </Link>
          </Stack>
        </Container>
      </section>
    </div>
  );
}

// Scenario Content Component (Simplified version with key scenarios)
const ScenarioContent: React.FC<{
  id: ScenarioType;
  step: number;
  onNext: () => void;
  onReset: () => void;
}> = ({ id, step, onNext, onReset }) => {
  const t = useTranslations('ProductTour');

  // Success screen (shared)
  if (step === 3) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
        <div className="animate-bounce-slow mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-green-400/20 to-emerald-600/20 ring-1 ring-green-500/30 md:h-24 md:w-24">
          <Check className="h-10 w-10 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)] md:h-12 md:w-12" />
        </div>
        <Typography variant="h3" as="h3">
          <span>{t('task_completed')}</span>
        </Typography>
        <Typography variant="small" className="leading-relaxed text-slate-600 dark:text-slate-400">
          <span>{t('efficiency_message')}</span>
        </Typography>
        <Stack direction="vertical" gap={3} className="mt-6 w-full max-w-xs">
          <Link href="/demo" className="w-full">
            <Button
              size="md"
              fullWidth
              className="shadow-primary-500/20 bg-primary-600 hover:bg-primary-500 h-12 border-none text-base shadow-xl"
            >
              <span className="text-white dark:text-slate-600">{t('start_trial')}</span>
            </Button>
          </Link>
          <button
            onClick={onReset}
            className="group flex items-center justify-center gap-2 py-2 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <RefreshCw className="h-3 w-3 transition-transform duration-500 group-hover:rotate-180" />
            {' '}
            <span>{t('repeat_simulation')}</span>
          </button>
        </Stack>
      </div>
    );
  }

  // SALES SCENARIO
  if (id === 'sales') {
    if (step === 0) {
      return (
        <div className="flex h-full flex-col bg-white dark:bg-slate-950">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
            <div className="text-lg font-bold text-slate-900 dark:text-white">
              <span>{t('ui.quotations')}</span>
            </div>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 transition-transform active:scale-90 dark:bg-slate-800">
              <Plus className="text-primary-500 h-5 w-5" />
            </div>
          </div>
          <Stack direction="vertical" gap={4} className="flex-1 overflow-y-auto p-4">
            <div className="relative mb-4 overflow-hidden rounded-2xl bg-linear-to-br from-blue-600 to-blue-800 p-5 text-white shadow-lg">
              <div className="mb-1 text-xs font-bold tracking-wider text-blue-200 uppercase">
                <span>{t('ui.sales_target')}</span>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">
                  <span>85%</span>
                </div>
                <div className="text-sm text-blue-100">
                  <span>IDR 850jt</span>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-black/20 backdrop-blur-sm">
                <div className="h-full w-[85%] rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
              </div>
            </div>
            <div className="mb-2 px-1 text-xs font-bold tracking-wider text-slate-600 uppercase dark:text-slate-500">
              <span>{t('ui.recent_drafts')}</span>
            </div>
            {[1, 2].map(i => (
              <div
                key={i}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-800"
              >
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-200">
                    <span>PT Sumber Makmur</span>
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    QT-2023-00
                    {i}
                    {' '}
                    • IDR 25.000.000
                  </div>
                </div>
                <Badge
                  variant="outline"
                  size="sm"
                  className="border-slate-400 text-slate-600 dark:border-slate-700 dark:text-slate-400"
                >
                  <span>{t('ui.draft')}</span>
                </Badge>
              </div>
            ))}
            <div className="fixed bottom-8 left-1/2 z-20 w-full max-w-[300px] -translate-x-1/2 px-4">
              <Button
                size="md"
                onClick={onNext}
                className="shadow-primary-500/30 bg-primary-600 hover:bg-primary-500 h-12 w-full animate-pulse rounded-xl border-none font-bold text-white shadow-xl"
              >
                <span className="text-slate-600 dark:text-white">
                  {t('ui.create_new_quotation')}
                </span>
              </Button>
            </div>
          </Stack>
        </div>
      );
    }
    if (step === 1) {
      return (
        <div className="flex h-full flex-col bg-white dark:bg-slate-950">
          <Stack direction="vertical" gap={5} className="flex-1 p-4">
            <Stack direction="vertical" gap={2}>
              <Typography
                variant="small"
                className="text-xs font-bold text-slate-600 uppercase dark:text-slate-500"
              >
                <span>{t('ui.customer')}</span>
              </Typography>
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-white">
                <span>PT Mitra Abadi Teknik</span>
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                  <Check className="h-3 w-3 text-green-500" />
                </div>
              </div>
            </Stack>
            <Stack direction="vertical" gap={2}>
              <Typography
                variant="small"
                className="text-xs font-bold text-slate-600 uppercase dark:text-slate-500"
              >
                <span>{t('ui.items')}</span>
              </Typography>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-1 flex justify-between text-sm font-medium text-slate-900 dark:text-white">
                  <span>MacBook Pro M3</span>
                  <span>x 5</span>
                </div>
                <div className="text-xs text-slate-500">
                  <span>Rp 25.000.000 / unit</span>
                </div>
              </div>
            </Stack>
            <div className="mt-auto">
              <div className="mb-4 rounded-xl border border-slate-200 bg-slate-100/50 p-5 dark:border-slate-800 dark:bg-slate-800/50">
                <div className="mb-2 flex justify-between text-sm text-slate-600 dark:text-slate-400">
                  <span>{t('ui.subtotal')}</span>
                  <span>Rp 125.000.000</span>
                </div>
                <div className="mb-4 flex justify-between text-sm text-slate-600 dark:text-slate-400">
                  <span>{t('ui.tax')}</span>
                  <span>Rp 13.750.000</span>
                </div>
                <div className="my-3 h-px bg-slate-300 dark:bg-slate-700"></div>
                <div className="flex justify-between text-lg font-bold text-slate-900 dark:text-white">
                  <span>{t('ui.total')}</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Rp 138.750.000</span>
                </div>
              </div>
              <Button
                size="md"
                fullWidth
                onClick={onNext}
                className="bg-primary-600 hover:bg-primary-500 shadow-primary-900/50 h-12 border-none text-base font-bold shadow-lg"
              >
                <span className="text-white dark:text-slate-600">{t('ui.save_and_send')}</span>
              </Button>
            </div>
          </Stack>
        </div>
      );
    }
    if (step === 2) {
      return (
        <div className="flex h-full flex-col bg-white dark:bg-slate-950">
          <Stack
            direction="vertical"
            gap={6}
            className="flex flex-1 flex-col items-center justify-center p-6 text-center"
          >
            <div className="group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              <div className="bg-primary-500/10 absolute inset-0 blur-xl"></div>
              <FileText className="text-primary-500 relative z-10 h-10 w-10" />
            </div>
            <div>
              <Typography variant="h3" as="h3">
                <span>{t('ui.quotation_created')}</span>
              </Typography>
              <Typography variant="small" className="text-slate-600 dark:text-slate-500">
                <span>{t('ui.quotation_ready')}</span>
              </Typography>
            </div>
            <Stack direction="vertical" gap={3} className="w-full">
              <button
                onClick={onNext}
                className="bg-whatsapp hover:bg-whatsapp-hover flex w-full items-center justify-center gap-3 rounded-xl p-4 font-bold text-white shadow-lg shadow-green-900/20 transition-transform active:scale-95"
              >
                <Send className="h-5 w-5" />
                {' '}
                <span>{t('ui.send_whatsapp')}</span>
              </button>
              <button
                onClick={onNext}
                className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-slate-100 p-4 font-bold text-slate-700 transition-colors hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                <Users className="h-5 w-5" />
                {' '}
                <span>{t('ui.send_email')}</span>
              </button>
            </Stack>
          </Stack>
        </div>
      );
    }
  }

  // Simplified scenarios for other roles
  return (
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      <div className="mb-6">
        <Typography variant="h3" as="h3" className="mb-2">
          <span>
            {id === 'manager'
              ? t('ui.approval_dashboard')
              : id === 'finance'
                ? t('ui.bank_reconciliation')
                : id === 'ceo'
                  ? t('ui.executive_dashboard')
                  : id === 'warehouse'
                    ? t('ui.warehouse_scanner')
                    : t('ui.hr_dashboard')}
          </span>
        </Typography>
        <Typography variant="small" className="text-slate-600 dark:text-slate-400">
          <span>
            {t('ui.step_of')}
            {' '}
            {step + 1}
            {' '}
            {t('ui.of')}
            {' '}
            3
          </span>
        </Typography>
      </div>
      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-2xl bg-slate-200 dark:bg-slate-800">
        {id === 'manager' && <Briefcase className="h-16 w-16 text-purple-400" />}
        {id === 'finance' && <DollarSign className="h-16 w-16 text-emerald-400" />}
        {id === 'ceo' && <BarChart3 className="h-16 w-16 text-indigo-400" />}
        {id === 'warehouse' && <Package className="h-16 w-16 text-amber-400" />}
        {id === 'employee' && <UserCheck className="h-16 w-16 text-pink-400" />}
      </div>
      <Button onClick={onNext} size="lg" className="bg-primary-600 hover:bg-primary-500">
        <span className="text-slate-600 dark:text-white">{t('ui.continue_scenario')}</span>
      </Button>
    </div>
  );
};
