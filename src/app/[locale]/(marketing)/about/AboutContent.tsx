'use client';

import { motion } from 'framer-motion';
import {
  Building2,
  Code,
  ExternalLink,
  FileText,
  Heart,
  MapPin,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/layout';
import { TeamSection, ValuesGrid } from '@/components/sections/about';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { PageHero, StatCard } from '@/components/sections/shared';
import { Button } from '@/components/ui';
import { aboutContent } from '@/data/companyContent';

const teamMembers = [
  {
    name: 'Ilham Pambudi',
    role: 'Product Owner',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=400',
    quote: 'Building products that solve real problems, not just cool tech.',
    linkedin: '#',
  },
  {
    name: 'Febby Kurniawan',
    role: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    quote: 'Clean code is the best documentation.',
    linkedin: '#',
  },
  {
    name: 'Alief Ahmad Azies',
    role: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    quote: 'Mobile-first experience is non-negotiable.',
    linkedin: '#',
  },
  {
    name: 'M. Fadhlan Syafii',
    role: 'Software Engineer',
    image:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
    quote: 'Optimizing performance, one pixel at a time.',
    linkedin: '#',
  },
  {
    name: 'Anita Nur Sari',
    role: 'Quality Assurance',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    quote: 'Quality is not an act, it is a habit.',
    linkedin: '#',
  },
];

export default function AboutContent() {
  const t = useTranslations('About');
  const { entity } = aboutContent;

  const stats = [
    { value: '500+', label: t('stats_companies'), icon: Building2 },
    { value: '50K+', label: t('stats_users'), icon: Users },
    { value: '99.9%', label: t('stats_uptime'), icon: Zap },
    { value: '24/7', label: t('stats_support'), icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section (Cinematic) */}
      <PageHero
        badge={{ icon: Rocket, text: t('hero_badge') }}
        title={(
          <>
            {t('hero_title_1')}
            {' '}
            <br />
            <span className="bg-linear-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-indigo-400 dark:via-blue-400 dark:to-cyan-300">
              {t('hero_title_2')}
            </span>
          </>
        )}
        subtitle={t('hero_subheadline')}
      >
        <a href="https://divistant.com/our-profile" target="_blank" rel="noopener noreferrer">
          <Button
            size="lg"
            className="h-14 w-full transform rounded-full border-none bg-slate-900 px-8 text-lg font-bold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-slate-800 hover:shadow-2xl hover:shadow-indigo-500/20 sm:w-auto dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
          >
            {t('cta_profile')}
            {' '}
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </PageHero>

      {/* Stats Section */}
      <Section className="pointer-events-none relative z-10 -mt-24 bg-transparent!">
        <Container size="7xl">
          <div className="pointer-events-auto grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                index={idx}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Origin Story Timeline */}
      <section className="border-b border-slate-200 bg-white! py-24 dark:border-slate-800 dark:bg-slate-950!">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center md:mb-24">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              {t('timeline_title')}
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-light text-slate-600 dark:text-slate-400">
              {t('timeline_subtitle')}
            </p>
          </div>

          <div className="relative ml-4 space-y-16 border-l-2 border-slate-300 md:ml-8 md:space-y-20 md:pl-8 dark:border-slate-700">
            {[1, 2, 3].map(idx => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="group relative pl-8 md:pl-0"
              >
                {/* Marker */}
                <div
                  className={`absolute top-0 -left-[25px] z-10 h-6 w-6 rounded-full border-4 border-white transition-colors duration-500 md:-left-[41px] dark:border-slate-950 ${idx === 1 ? 'bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.2)]' : 'bg-slate-400 group-hover:bg-indigo-400'}`}
                >
                </div>

                <div className="md:grid md:grid-cols-5 md:gap-16">
                  <div className="mb-4 pt-1 md:col-span-1 md:mb-0">
                    <span
                      className={`text-sm font-bold tracking-widest uppercase transition-colors ${idx === 2 ? 'text-indigo-600' : 'text-slate-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300'}`}
                    >
                      {t(`timeline_${idx}_year` as any)}
                    </span>
                  </div>
                  <div
                    className={`rounded-3xl border p-8 transition-all duration-500 hover:shadow-2xl md:col-span-4 md:p-10 ${idx === 2 ? 'border-indigo-200 bg-linear-to-br from-indigo-50 to-white shadow-lg dark:border-indigo-900/30 dark:from-indigo-950/30 dark:to-slate-900' : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700'}`}
                  >
                    <h3
                      className={`mb-4 text-2xl font-bold ${idx === 2 ? 'text-indigo-900 dark:text-indigo-300' : 'text-slate-900 dark:text-white'}`}
                    >
                      {t(`timeline_${idx}_title` as any)}
                    </h3>
                    <p
                      className={`text-base leading-relaxed font-light md:text-lg ${idx === 2 ? 'text-indigo-800/80 dark:text-indigo-200/80' : 'text-slate-600 dark:text-slate-400'}`}
                    >
                      {t(`timeline_${idx}_desc` as any)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values (Glassmorphism) */}
      <ValuesGrid />

      {/* Team Section */}
      {/* Team Section */}
      <TeamSection
        members={teamMembers}
        title={t('team_title')}
        subtitle={t('team_subtitle')}
      />

      {/* Entity Section */}
      <Section className="border-t border-slate-200 bg-white! dark:border-slate-800 dark:bg-slate-950!">
        <Container size="4xl">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-12 dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-10 text-center">
              <div className="mb-6 inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <Building2 className="h-8 w-8 text-slate-800 dark:text-slate-200" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{entity.name}</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary-600 dark:text-primary-400 mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {t('entity_headquarters')}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {t('entity_headquarter_description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Code className="text-primary-600 dark:text-primary-400 mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{t('entity_rnd')}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {t('entity_rnd_description')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <FileText className="text-primary-600 dark:text-primary-400 mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {t('entity_legal')}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {t('entity_legal_description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-primary-600 dark:text-primary-400 mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {t('entity_compliance')}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {t('entity_compliance_description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      {/* CTA Section */}
      <CTABannerSection
        badgeText={t('cta_badge')}
        title={t('cta_title')}
        subtitle={t('cta_subtitle')}
        demoBtnText={t('cta_careers')}
        demoBtnLink="/careers"
        pricingBtnText={t('cta_partners')}
        pricingBtnLink="/partners"
        trustText1="Great Culture"
        trustText2="Remote Friendly"
      />
    </div>
  );
}
