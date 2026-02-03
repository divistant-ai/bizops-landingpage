'use client';

import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Section } from '@/components/layout';
import { FadeIn } from '@/components/ui/FadeIn';
import { getHomeUVP } from '@/data/homeContent';
import { sectionPaddingHybrid } from '@/design-tokens';

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
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-12 text-center lg:mb-16">
        <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold tracking-wider uppercase">
          <span className="bg-primary-500 h-2 w-2 animate-pulse rounded-full" />
          Keunggulan Kami
        </div>
        <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          {t('uvp_title')}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          {t('uvp_desc')}
        </p>
      </div>

      {/* Bento Grid - 2x2 Layout */}
      <div className="relative z-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
        {homeUVP.map((uvp, idx) => {
          const Icon = uvp.icon;
          const config = BENTO_CONFIGS[idx % BENTO_CONFIGS.length]!;

          return (
            <FadeIn key={idx} delay={0.1 + idx * 0.1}>
              <div className="group h-full">
                <div
                  className={`relative h-full overflow-hidden rounded-3xl bg-linear-to-br transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${config.bg} min-h-[280px] p-6 sm:min-h-[300px] sm:p-8 lg:p-10`}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                      }}
                    />
                  </div>

                  {/* Decorative blurs */}
                  <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
                  <div className="absolute -top-8 -left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

                  {/* Floating icon decoration */}
                  <div className="pointer-events-none absolute -right-6 -bottom-6">
                    <Icon
                      className="h-32 w-32 transform text-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 sm:h-36 sm:w-36"
                      strokeWidth={0.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col">
                    {/* Icon */}
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${config.iconBg} mb-5 shadow-lg backdrop-blur-sm`}
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold sm:text-2xl lg:text-2xl ${config.textColor} mb-2`}
                      >
                        {uvp.title}
                      </h3>
                      <p
                        className={`text-xs font-bold tracking-wide uppercase sm:text-sm ${config.subtitleColor} mb-3`}
                      >
                        {uvp.subtitle}
                      </p>
                      <p
                        className={`text-sm sm:text-base ${config.descColor} line-clamp-3 leading-relaxed`}
                      >
                        {uvp.desc}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-5 border-t border-white/20 pt-4">
                      <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-white transition-all duration-300 hover:gap-3">
                        {t('learn_more_short' as any)}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
