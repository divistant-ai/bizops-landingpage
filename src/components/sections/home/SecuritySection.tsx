'use client';

import { CheckCircle2, Database, Lock, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section } from '@/components/layout';
import { GlassCard, Grid, SectionHeader } from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import { sectionPaddingHybrid } from '@/design-tokens';

const SECURITY_ITEMS = ['security_1', 'security_2', 'security_3'];
const SECURITY_ICONS = [Lock, CheckCircle2, Database];
const ICON_COLORS = [
  'from-emerald-500 to-emerald-600',
  'from-blue-500 to-blue-600',
  'from-purple-500 to-purple-600',
];

export function SecuritySection() {
  const t = useTranslations('Homepage');

  return (
    <Section
      id="security"
      className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[80px]" />

      <Grid cols={1} mdCols={2} lgCols={2} gap={10} className="relative z-10 items-center">
        {/* Left: Content */}
        <div className="order-2 md:order-1">
          <FadeIn delay={0.1}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 dark:bg-emerald-900/20">
              <Shield className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
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
            {SECURITY_ITEMS.map((item, idx) => {
              const IconComponent = SECURITY_ICONS[idx]!;

              return (
                <FadeIn key={idx} delay={0.15 + idx * 0.1}>
                  <li className="group hover:border-primary-100 dark:hover:border-primary-900 flex gap-4 rounded-xl border border-slate-100 bg-white p-4 transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${ICON_COLORS[idx]} shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-0.5 text-base font-bold text-slate-900 dark:text-white">
                        {t(`${item}_title` as any)}
                      </h4>
                      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {t(`${item}_desc` as any)}
                      </p>
                    </div>
                  </li>
                </FadeIn>
              );
            })}
          </ul>
        </div>

        {/* Right: Illustration */}
        <div className="relative order-1 md:order-2">
          <FadeIn delay={0.2}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop"
                    alt="Security Infrastructure"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

                  {/* Floating Security Badges */}
                  <div className="absolute right-4 bottom-4 left-4 flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm dark:bg-slate-800/90">
                      <Lock className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        AES-256
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm dark:bg-slate-800/90">
                      <Shield className="h-3.5 w-3.5 text-blue-600" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        SSL/TLS
                      </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-lg backdrop-blur-sm dark:bg-slate-800/90">
                      <Database className="h-3.5 w-3.5 text-purple-600" />
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                        ISO 27001
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Status Card */}
              <div className="absolute -right-4 -bottom-4 sm:-right-8 sm:bottom-4">
                <GlassCard
                  variant="light"
                  rounded="xl"
                  padding="none"
                  className="border border-slate-200 p-4 shadow-xl dark:border-slate-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        Uptime SLA
                      </p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">99.9%</p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 opacity-20 blur-xl" />
              <div className="absolute -bottom-6 left-1/3 h-16 w-16 rounded-full bg-linear-to-br from-blue-400 to-blue-600 opacity-20 blur-xl" />
            </div>
          </FadeIn>
        </div>
      </Grid>
    </Section>
  );
}
