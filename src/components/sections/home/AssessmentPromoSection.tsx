'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';
import { sectionPaddingHybrid } from '@/design-tokens';

export function AssessmentPromoSection() {
  const t = useTranslations('Homepage');

  return (
    <Section
      id="assessment-promo"
      className="relative overflow-hidden border-y border-white/10 bg-slate-900"
      noPadding
      containerClassName={`${sectionPaddingHybrid.compact} relative z-10`}
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-primary-500/10 absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
        <div className="bg-primary-500/10 absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm md:flex-row md:p-12">
        <div className="text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
            <Sparkles className="size-3" />
            <span>{t('assessment_promo_badge')}</span>
          </div>
          <Typography variant="h3" as="h3" color="white" className="mb-3">
            {t('assessment_promo_title')}
          </Typography>
          <Typography variant="body" className="max-w-lg text-slate-300">
            {t('assessment_promo_desc')}
          </Typography>
        </div>

        <div className="flex shrink-0 flex-col gap-4 sm:flex-row">
          <Button asChild variant="accent" size="lg" className="shadow-lg shadow-amber-500/20">
            <Link href="/tools/assessment">
              {t('assessment_promo_cta')}
              {' '}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
