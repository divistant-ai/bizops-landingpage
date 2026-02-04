'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

type CTABannerSectionProps = {
  title: string;
  subtitle: string;
  badgeText?: string;
  demoBtnText?: string;
  demoBtnLink?: string;
  pricingBtnText?: string;
  pricingBtnLink?: string;
  trustText1?: string;
  trustText2?: string;
  trustText3?: string;
};

export const CTABannerSection: React.FC<CTABannerSectionProps> = ({
  title,
  subtitle,
  badgeText = 'Ready to start?',
  demoBtnText = 'Schedule Demo',
  demoBtnLink = '/demo',
  pricingBtnText = 'Calculate Pricing',
  pricingBtnLink = '/tools/pricing-calculator',
  trustText1 = '14-day free trial',
  trustText2 = 'No credit card required',
  trustText3,
}) => {
  return (
    <Section
      className="relative overflow-hidden bg-white dark:bg-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      <Container size="7xl" className="relative z-10">
        <FadeIn>
          <div className="relative flex flex-col justify-center overflow-hidden rounded-[2.5rem] bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-12 shadow-2xl shadow-slate-900/50 sm:px-12 sm:py-16 lg:px-20 lg:py-20 dark:from-indigo-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-black/50">
            {/* Decorative elements */}
            <div className="bg-primary-500/20 absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 animate-pulse rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/3 translate-y-1/3 rounded-full bg-amber-500/10 blur-3xl" />

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Inner glow border */}
            <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] ring-1 ring-white/10 ring-inset" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 shadow-lg backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-amber-100 uppercase">
                  {badgeText}
                </span>
              </div>

              <h2 className="mb-8 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                {subtitle}
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Button
                  asChild
                  variant="accent"
                  size="lg"
                  className="h-16 min-w-[200px] rounded-full px-8 text-lg font-bold shadow-xl shadow-amber-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/30"
                >
                  <Link href={demoBtnLink}>
                    {demoBtnText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline-white"
                  size="lg"
                  className="h-16 min-w-[200px] rounded-full border-2 px-8 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  <Link href={pricingBtnLink}>{pricingBtnText}</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium opacity-80">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>{trustText1}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <span>{trustText2}</span>
                </div>
                {trustText3 && (
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                    <span>{trustText3}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
};
