'use client';

import { ArrowRight, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';

export function PricingComparisonSection() {
  const t = useTranslations('Homepage');

  return (
    <Section
      id="pricing-comparison"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
      noPadding
      containerClassName="px-4 py-8 sm:py-10 lg:py-12"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-32 h-64 w-64 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute -right-32 bottom-1/3 h-64 w-64 rounded-full bg-emerald-500/5 blur-3xl" />
      </div>

      {/* Compact Header */}
      <div className="relative z-10 mb-6 text-center sm:mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-linear-to-r from-slate-100 to-slate-50 px-3 py-1.5 text-xs font-bold tracking-wider uppercase sm:mb-4 dark:border-slate-700 dark:from-slate-800 dark:to-slate-900">
          <span className="text-slate-600 dark:text-slate-400">
            {t('pricing_comparison_badge')}
          </span>
        </div>
        <Typography variant="h2" as="h2" color="default" className="mb-2 sm:mb-3">
          {t('pricing_title')}
        </Typography>
        <Typography variant="body" color="muted" className="mx-auto max-w-2xl">
          {t('pricing_desc')}
        </Typography>
      </div>

      {/* VS Comparison Cards - Compact */}
      <div className="relative z-10 mx-auto grid w-full max-w-5xl items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
        {/* Problem Card - "Before" Style */}
        <div className="group relative">
          <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-red-500 via-red-600 to-rose-600 p-1">
            <div className="h-full rounded-[14px] bg-white p-4 sm:p-5 dark:bg-slate-900">
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/30">
                    <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <Typography variant="h3" as="h3" color="default">
                      {t('pricing_problem_title')}
                    </Typography>
                    <p className="text-xs font-medium text-red-500">{t('pricing_old_approach')}</p>
                  </div>
                </div>
              </div>

              {/* Pain Points */}
              <ul className="mb-4 space-y-2 sm:mb-5 sm:space-y-3">
                {[
                  'pricing_problem_1',
                  'pricing_problem_2',
                  'pricing_problem_3',
                  'pricing_problem_4',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 rounded-lg border border-red-100 bg-red-50/50 p-2 sm:gap-3 sm:p-2.5 dark:border-red-900/30 dark:bg-red-950/20"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                      <X className="h-3 w-3 text-red-600 dark:text-red-400" />
                    </div>
                    <span className="text-xs text-slate-700 sm:text-sm dark:text-slate-300">
                      {t(item as any)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Cost Footer */}
              <div className="mt-auto border-t-2 border-dashed border-red-200 pt-4 dark:border-red-900/50">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="mb-0.5 text-[10px] font-bold tracking-wider text-red-500 uppercase sm:text-xs">
                      {t('pricing_hidden_cost')}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                        15jt
                      </span>
                      <span className="text-sm text-slate-500">++</span>
                      <span className="text-xs text-slate-400">
                        /
                        {t('month')}
                      </span>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 dark:bg-red-900/30">
                    <ArrowUpRight className="h-5 w-5 text-red-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Card - "After" Style */}
        <div className="group relative">
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-[24px] bg-linear-to-r from-emerald-500 via-emerald-500 to-emerald-500 opacity-20 blur-lg transition-opacity duration-500 group-hover:opacity-30" />

          <div className="relative h-full overflow-hidden rounded-2xl bg-linear-to-br from-emerald-500 to-emerald-600 p-1">
            <div className="h-full rounded-[14px] bg-linear-to-br from-white to-emerald-50/50 p-4 sm:p-5 dark:from-slate-900 dark:to-emerald-950/20">
              {/* Recommended Badge */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                <div className="flex items-center gap-1 rounded-full bg-linear-to-r from-emerald-500 to-emerald-500 px-2 py-1 text-[10px] font-bold text-white shadow-lg shadow-emerald-500/30 sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-xs">
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-full w-full rounded-full bg-white" />
                  </span>
                  {t('pricing_recommended')}
                </div>
              </div>

              {/* Header */}
              <div className="mb-4 flex items-center gap-2 sm:mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <Typography variant="h3" as="h3" color="default">
                    {t('pricing_solution_title')}
                  </Typography>
                  <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    {t('bizops_platform')}
                  </p>
                </div>
              </div>

              {/* Benefits */}
              <ul className="mb-4 space-y-2 sm:mb-5 sm:space-y-3">
                {[
                  'pricing_solution_1',
                  'pricing_solution_2',
                  'pricing_solution_3',
                  'pricing_solution_4',
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 rounded-lg border border-emerald-100 bg-emerald-50/70 p-2 sm:gap-3 sm:p-2.5 dark:border-emerald-900/30 dark:bg-emerald-950/30"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 shadow-md shadow-emerald-500/30">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs font-medium text-slate-800 sm:text-sm dark:text-slate-200">
                      {t(item as any)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Pricing Footer */}
              <div className="mt-auto rounded-xl border border-emerald-200/50 bg-linear-to-br from-emerald-500/10 p-4 sm:p-5 dark:border-emerald-800/50 dark:from-emerald-500/20">
                <div className="mb-3 flex items-center justify-between sm:mb-4">
                  <div>
                    <p className="mb-0.5 text-[10px] font-bold tracking-wider text-emerald-600 uppercase sm:text-xs dark:text-emerald-400">
                      {t('pricing_starting_from')}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                        {t('pricing_amount')}
                      </span>
                      <span className="text-xs text-slate-500">
                        /
                        {t('month')}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[10px] text-slate-500 sm:text-xs">
                      {t('pricing_subtitle')}
                    </p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 shadow-lg shadow-emerald-500/30">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>

                <Button asChild variant="accent" size="lg" className="w-full">
                  <Link href="/tools/pricing-calculator">{t('cta_view_pricing')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VS Badge - Center */}
      <div className="absolute top-1/2 left-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:flex">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-slate-100 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800">
          <span className="text-lg font-black text-slate-400">VS</span>
        </div>
      </div>
    </Section>
  );
}
