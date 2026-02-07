'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import { getHomeProcess } from '@/data/homeContent';
import { sectionPaddingHybrid } from '@/design-tokens';

const STEP_COLORS = [
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
    hoverBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-700',
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

export function HomeProcessSection() {
  const t = useTranslations('Homepage');
  const homeProcess = getHomeProcess(key => t(key.replace('Homepage.', '') as any));

  const weekLabels = [
    t('process_week_1') || 'Minggu 1',
    t('process_week_2') || 'Minggu 2',
    t('process_week_3') || 'Minggu 3',
    t('process_week_4') || 'Minggu 4',
  ];

  return (
    <Section
      id="process"
      className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
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
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <div className="border-primary-100 bg-primary-50 dark:border-primary-800 dark:bg-primary-900/20 mb-6 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-bold tracking-wider uppercase">
            <span className="bg-primary-500 shadow-primary-500/30 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white shadow-lg">
              30
            </span>
            <span className="text-primary-600 dark:text-primary-400">
              {t('process_days_badge') || 'Hari Go-Live'}
            </span>
          </div>
          <Typography variant="h2" as="h2" color="default" className="mb-6">
            {t('process_title').replace(t('process_days'), '')}
            {' '}
            <span className="text-blue-600 dark:text-blue-400">{t('process_days')}</span>
          </Typography>
          <Typography variant="body" color="muted" className="mx-auto mb-8 max-w-2xl">
            {t('process_desc_1')}
            {' '}
            {t('process_desc_2')}
            {' '}
            {t('process_desc_3')}
          </Typography>
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
              const color = STEP_COLORS[idx % STEP_COLORS.length]!;
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
  );
}
