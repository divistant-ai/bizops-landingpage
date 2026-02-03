'use client';

import { ArrowRight, Calculator, CheckCircle2, Lock } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import {
  Button,
  HeroBackground,
  OptimizedImage,
  Stack,
} from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import { InfiniteScrollLoop } from '@/components/ui/LazyComponents';
import { glass, modularTypography, sectionPaddingHybrid } from '@/design-tokens';

const TRUSTED_BRANDS = [
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
];

export function HomeHeroSection() {
  const t = useTranslations('Homepage');
  const locale = useLocale();

  return (
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

            {/* Main Headline - Modular Typography */}
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

            {/* CTAs */}
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
                  <div className="relative aspect-16/10 transform overflow-hidden rounded-xl bg-slate-900 shadow-inner">
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
                      <Lock className="h-3 w-3 text-emerald-500" />
                      {' '}
                      <span className="font-mono font-medium text-slate-700 dark:text-slate-200">
                        secure://bizops.id/dashboard
                      </span>
                    </Stack>
                  </div>
                </div>

                {/* Floating Stats Card - Bottom Right */}
                <div
                  className={`absolute -right-4 -bottom-4 rounded-xl p-4 md:-right-6 md:-bottom-6 ${glass.strong} animate-float-slow shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/30">
                      <CheckCircle2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                        {t('hero_savings_label') || 'Penghematan'}
                      </p>
                      <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                        85%
                        {' '}
                        {locale === 'id' ? 'Biaya' : 'Cost'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Users Card - Top Left */}
                <div
                  className={`absolute -top-4 -left-4 rounded-xl p-3 md:-top-6 md:-left-6 ${glass.strong} animate-float-slow hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:block`}
                  style={{ animationDelay: '1s' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-xs font-bold text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
                        R
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-purple-600 text-xs font-bold text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
                        B
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-amber-500 to-amber-600 text-xs font-bold text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
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
              {TRUSTED_BRANDS.map(brand => (
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
  );
}
