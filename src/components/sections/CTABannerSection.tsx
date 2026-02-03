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
      <Container size="5xl" className="relative z-10">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-2xl shadow-slate-900/50 sm:p-12 lg:p-16 dark:from-indigo-950 dark:via-slate-900 dark:to-slate-950 dark:shadow-black/50">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 animate-pulse rounded-full bg-indigo-500/30 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/20 blur-2xl" />
            <div className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl" />

            {/* Dot pattern */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Inner glow border */}
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 ring-inset" />

            <div className="relative z-10 mx-auto max-w-3xl text-center">
              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 shadow-lg backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">
                  {badgeText}
                </span>
              </div>

              <h2 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {subtitle}
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-14 bg-white px-10 text-lg font-bold text-slate-900 shadow-xl shadow-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-2xl"
                >
                  <Link href={demoBtnLink}>
                    {demoBtnText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="h-14 border-2 border-white/30 px-10 text-lg font-semibold text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                >
                  <Link href={pricingBtnLink}>{pricingBtnText}</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>{trustText1}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <span>{trustText2}</span>
                </div>
                {trustText3 && (
                  <div className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
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
