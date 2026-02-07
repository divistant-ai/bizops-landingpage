'use client';

import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout';
import { Typography } from '@/components/ui';
import { FadeIn } from '@/components/ui/FadeIn';
import { getHomeUVP } from '@/data/homeContent';

const BENTO_CONFIGS = [
  {
    type: 'gradient',
    bg: 'from-blue-500 via-blue-600 to-indigo-600',
    iconBg: 'bg-white/20',
    textColor: 'text-white',
    subtitleColor: 'text-blue-100',
    descColor: 'text-blue-50/90',
    accent: 'blue',
  },
  {
    type: 'gradient',
    bg: 'from-purple-500 via-purple-600 to-pink-600',
    iconBg: 'bg-white/20',
    textColor: 'text-white',
    subtitleColor: 'text-purple-100',
    descColor: 'text-purple-50/90',
    accent: 'purple',
  },
  {
    type: 'gradient',
    bg: 'from-emerald-500 via-emerald-600 to-teal-600',
    iconBg: 'bg-white/20',
    textColor: 'text-white',
    subtitleColor: 'text-emerald-100',
    descColor: 'text-emerald-50/90',
    accent: 'emerald',
  },
  {
    type: 'gradient',
    bg: 'from-amber-500 via-orange-500 to-orange-600',
    iconBg: 'bg-white/20',
    textColor: 'text-white',
    subtitleColor: 'text-amber-100',
    descColor: 'text-amber-50/90',
    accent: 'amber',
  },
];

export function HomeUVPSection() {
  const t = useTranslations('Homepage');
  const homeUVP = getHomeUVP(key => t(key.replace('Homepage.', '') as any));

  return (
    <Section
      id="uvp"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
      noPadding
      containerClassName="px-4 py-8 sm:py-10 lg:py-12"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      {/* Compact Header */}
      <div className="relative z-10 mb-6 text-center sm:mb-8">
        <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase sm:mb-4">
          <span className="bg-primary-500 h-2 w-2 animate-pulse rounded-full" />
          Keunggulan Kami
        </div>
        <Typography variant="h2" as="h2" color="default" className="mb-2 sm:mb-3">
          {t('uvp_title')}
        </Typography>
        <Typography variant="body" color="muted" className="mx-auto max-w-2xl">
          {t('uvp_desc')}
        </Typography>
      </div>

      {/* Bento Grid - 2x2 Layout - Compact Cards */}
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 md:gap-4">
        {homeUVP.map((uvp, idx) => {
          const Icon = uvp.icon;
          const config = BENTO_CONFIGS[idx % BENTO_CONFIGS.length]!;

          return (
            <FadeIn key={idx} delay={0.05 + idx * 0.05}>
              <div className="group h-full">
                <div
                  className={`relative h-full overflow-hidden rounded-2xl bg-linear-to-br transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${config.bg} p-4 sm:p-5 lg:p-6`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                  </div>

                  {/* Decorative blurs - smaller */}
                  <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
                  <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-white/10 blur-2xl" />

                  {/* Floating icon decoration - smaller */}
                  <div className="pointer-events-none absolute -right-3 -bottom-3">
                    <Icon
                      className="h-16 w-16 transform text-white/10 transition-all duration-500 group-hover:scale-110 sm:h-20 sm:w-20"
                      strokeWidth={0.5}
                    />
                  </div>

                  {/* Content - Compact */}
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Icon - Smaller */}
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${config.iconBg} mb-3 shadow-lg backdrop-blur-sm sm:h-12 sm:w-12`}
                    >
                      <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>

                    {/* Text - Compact */}
                    <div className="flex-1">
                      <h3
                        className={`text-sm font-bold sm:text-base lg:text-lg ${config.textColor} mb-1`}
                      >
                        {uvp.title}
                      </h3>
                      <p
                        className={`text-[10px] font-bold tracking-wide uppercase sm:text-xs ${config.subtitleColor} mb-2`}
                      >
                        {uvp.subtitle}
                      </p>
                      <p
                        className={`text-xs sm:text-sm ${config.descColor} line-clamp-2 leading-snug sm:line-clamp-3`}
                      >
                        {uvp.desc}
                      </p>
                    </div>

                    {/* CTA - Compact */}
                    <div className="mt-3 border-t border-white/20 pt-2 sm:mt-4 sm:pt-3">
                      <button className="group/btn inline-flex items-center gap-1 text-xs font-semibold text-white transition-all duration-300 hover:gap-2 sm:text-sm">
                        {t('learn_more_short' as any)}
                        <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
