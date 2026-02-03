'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Check, Zap } from 'lucide-react';
import { CardSlider, Button } from '@/components/ui';

interface PricingCardsProps {
  annual: boolean;
}

export function PricingCards({ annual }: PricingCardsProps) {
  const t = useTranslations('Pricing');

  return (
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

          <div className="grow space-y-4 border-t border-slate-100 pt-8 dark:border-slate-800">
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

          <div className="grow space-y-4 border-t border-slate-100 pt-8 dark:border-slate-800">
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

          <div className="relative z-10 grow space-y-4 border-t border-slate-100 pt-8 dark:border-slate-800">
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
  );
}
