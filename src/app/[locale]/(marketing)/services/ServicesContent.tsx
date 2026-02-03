'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ArrowRight, Clock, Globe, Layers, Trophy, Users, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Container, Section } from '@/components/layout';
import { Badge, Button, Grid, Stack } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';
import { servicesData } from '@/data/servicesContent';

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// SpotlightCard Component
const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(14, 165, 233, 0.15)',
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative overflow-hidden border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

export default function ServicesContent() {
  const t = useTranslations('Services');

  const serviceOrder = [
    'consulting',
    'implementation',
    'custom-dev',
    'managed-business-services',
    'training',
    'support',
  ];

  // Mapping service ID to translation key
  const getServiceDescKey = (serviceId: string) => {
    const keyMap = {
      'consulting': 'service_consulting_desc',
      'implementation': 'service_implementation_desc',
      'custom-dev': 'service_custom_dev_desc',
      'managed-business-services': 'service_managed_desc',
      'training': 'service_training_desc',
      'support': 'service_support_desc',
    } as const;
    return keyMap[serviceId as keyof typeof keyMap] || keyMap.consulting;
  };

  const services = serviceOrder
    .filter(key => servicesData[key])
    .map(key => ({
      id: key,
      ...servicesData[key],
    }));

  return (
    <div className="selection:bg-primary-500/30 min-h-screen bg-slate-50 font-sans dark:bg-slate-950">
      {/* HERO SECTION */}
      <Section className="relative overflow-hidden border-b border-slate-200 !bg-white pt-20 pb-20 dark:border-slate-800 dark:!bg-slate-900">
        {/* Animated Background Mesh */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-slate-900/80 dark:to-slate-900"></div>

        {/* Hero Glow */}
        <div className="bg-primary-500/10 animate-pulse-slow pointer-events-none absolute top-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 rounded-[100%] blur-[100px]"></div>

        <Container size="5xl" className="relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <Breadcrumbs />
          </div>

          <motion.div
            variants={FADE_UP_VARIANTS}
            initial="hidden"
            animate="visible"
            className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase dark:text-slate-400">
              {t('badge_text')}
            </span>
          </motion.div>

          <h1 className="mb-8 text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 md:text-7xl dark:text-white">
            <span className="mb-2 block text-2xl font-medium tracking-normal text-slate-500 md:text-4xl dark:text-slate-400">
              {t('hero_subtitle')}
            </span>
            <span className="via-primary-800 bg-gradient-to-r from-slate-900 to-slate-900 bg-clip-text text-transparent dark:from-white dark:to-slate-200">
              {t('hero_title')}
            </span>
          </h1>

          <motion.p
            variants={FADE_UP_VARIANTS}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-400"
          >
            {t('hero_description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Stack direction="vertical" gap={4} className="justify-center sm:flex-row">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="shadow-primary-500/20 h-14 w-full px-8 text-base shadow-xl sm:w-auto"
                >
                  <span className="flex items-center text-slate-900 dark:text-white">
                    {t('cta_consultation')}
                    {' '}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 w-full px-8 text-base sm:w-auto"
                >
                  {t('cta_demo')}
                </Button>
              </Link>
            </Stack>
          </motion.div>
        </Container>
      </Section>

      {/* SERVICES GRID */}
      <Section className="py-20 md:py-32">
        <Container size="7xl">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('services_title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t('services_description')}
            </p>
          </FadeIn>

          <FadeInStagger>
            <div className="grid auto-rows-[minmax(280px,auto)] grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((service, idx) => {
                const Icon = service.icon;
                if (!Icon) {
                  return null;
                }
                // Bento Grid Spanning Logic
                const isLarge = idx === 0 || idx === 3; // 1st and 4th items are large horizontal
                const isTall = idx === 2; // 3rd item is tall

                const spanClass = isLarge ? 'md:col-span-2' : isTall ? 'md:row-span-2' : '';

                return (
                  <FadeIn key={service.id} className={`h-full ${spanClass}`}>
                    <Link href={`/services/${service.id}`} className="group block h-full">
                      <SpotlightCard className="hover:border-primary-500/50 dark:hover:border-primary-500/50 h-full overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all dark:border-slate-800 dark:bg-slate-900">
                        {/* Tech Pattern Background */}
                        <div
                          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]"
                          style={{
                            backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)',
                            backgroundSize: '24px 24px',
                          }}
                        />

                        <div className="relative z-10 flex h-full flex-col p-8">
                          <div className="mb-6 flex items-start justify-between">
                            <div className="bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 ring-primary-200 dark:ring-primary-800 flex h-14 w-14 items-center justify-center rounded-2xl ring-1 transition-transform group-hover:scale-110">
                              <Icon className="h-7 w-7" />
                            </div>
                            {isLarge && (
                              <Badge variant="outline" className="hidden sm:inline-flex">
                                {t('badge_popular')}
                              </Badge>
                            )}
                          </div>

                          <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-3 text-2xl font-bold text-slate-900 transition-colors dark:text-white">
                            {service.title}
                          </h3>

                          <p className="mb-6 flex-grow leading-relaxed text-slate-600 dark:text-slate-400">
                            {t(getServiceDescKey(service.id))}
                          </p>

                          <div className="text-primary-600 dark:text-primary-400 mt-auto flex items-center text-sm font-bold transition-transform group-hover:translate-x-2">
                            {t('view_detail')}
                            {' '}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </div>
                        </div>
                      </SpotlightCard>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </FadeInStagger>
        </Container>
      </Section>

      {/* WHY CHOOSE US */}
      <Section className="border-y border-slate-200 !bg-white py-20 md:py-32 dark:border-slate-800 dark:!bg-slate-900">
        <Container size="7xl">
          <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
              {t('why_title')}
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t('why_description')}</p>
          </FadeIn>

          <Grid cols={1} mdCols={2} lgCols={3} gap={8}>
            {[
              {
                icon: Trophy,
                title: t('why_track_title'),
                desc: t('why_track_desc'),
              },
              {
                icon: Users,
                title: t('why_team_title'),
                desc: t('why_team_desc'),
              },
              {
                icon: Zap,
                title: t('why_agile_title'),
                desc: t('why_agile_desc'),
              },
              {
                icon: Globe,
                title: t('why_support_title'),
                desc: t('why_support_desc'),
              },
              {
                icon: Layers,
                title: t('why_industry_title'),
                desc: t('why_industry_desc'),
              },
              {
                icon: Clock,
                title: t('why_value_title'),
                desc: t('why_value_desc'),
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-800/50"
                >
                  <div className="bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400 mb-6 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              );
            })}
          </Grid>
        </Container>
      </Section>

      {/* FINAL CTA */}
      <Section className="relative overflow-hidden border-t border-slate-200 bg-white py-20 md:py-32 dark:border-slate-800 dark:bg-slate-900">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]"></div>

        <Container size="4xl" className="relative z-10 text-center">
          <Badge variant="outline" className="mb-6">
            {t('cta_badge')}
          </Badge>
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
            {t('cta_title')}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600 dark:text-slate-400">
            {t('cta_description')}
          </p>
          <Stack direction="vertical" gap={4} className="justify-center sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                className="h-16 w-full bg-slate-900 px-10 text-xl font-bold text-white hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
              >
                {t('cta_contact')}
              </Button>
            </Link>
            <Link href="/tools/pricing-calculator">
              <Button
                size="lg"
                variant="outline"
                className="h-16 w-full border-2 px-10 text-xl sm:w-auto"
              >
                {t('cta_calculator')}
              </Button>
            </Link>
          </Stack>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">{t('cta_footer')}</p>
        </Container>
      </Section>
    </div>
  );
}
