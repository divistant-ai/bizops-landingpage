import type { Metadata } from 'next';
import { ArrowRight, Info, X } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { Button } from '@/components/ui';
import { comparisonsData } from '@/data/comparisonData';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import { transformContent } from '@/libs/utils/transformContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'Compare BizOps with Other ERP Platforms'
        : 'Bandingkan BizOps dengan Platform ERP Lainnya',
    description:
      locale === 'en'
        ? 'Make an informed decision by comparing BizOps with other leading ERP platforms. Explore features, limitations, and benefits to find the best fit for your business.'
        : 'Buat keputusan yang tepat dengan membandingkan BizOps dengan platform ERP terkemuka lainnya. Jelajahi fitur, keterbatasan, dan manfaat untuk menemukan yang terbaik bagi bisnis Anda.',
  });
}

export default async function ComparisonIndexPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations('Compare');
  const competitors = Object.values(comparisonsData).filter(c => c.id !== 'bizops');

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-slate-950">
      <Section className="bg-neutral-50 pt-32 pb-20 text-center text-slate-800 dark:bg-slate-900 dark:text-white">
        <Container>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">{t('hero_title')}</h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-500 dark:text-neutral-300">
            {t('hero_subtitle')}
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {competitors.map((comp) => {
              const icon = transformContent({ icon: comp.icon }).icon;
              return (
                <div
                  key={comp.id}
                  className="flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="p-8 pb-0">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-slate-800 ${comp.color} mb-6`}
                    >
                      {icon}
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-white">
                      vs
                      {comp.name[locale as 'en' | 'id']}
                    </h2>
                    <p className="mb-6 line-clamp-2 h-12 text-sm text-neutral-600 dark:text-slate-400">
                      {comp.description[locale as 'en' | 'id']}
                    </p>

                    <div className="mb-6 inline-flex w-full items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-700 dark:bg-red-950 dark:text-red-300">
                      <Info className="h-4 w-4" />
                      {' '}
                      {t('bottleneck_label')}
                      {comp.bottleneckLabel[locale as 'en' | 'id']}
                    </div>
                  </div>

                  <div className="grow border-t border-neutral-100 bg-neutral-50/50 p-8 pt-6 dark:border-slate-800 dark:bg-slate-950/50">
                    <h3 className="mb-4 text-sm font-bold tracking-wider text-neutral-900 uppercase dark:text-white">
                      {t('limitations_title')}
                    </h3>
                    <ul className="mb-8 space-y-3">
                      {comp.limitations[locale as 'en' | 'id'].map((limit, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-sm text-neutral-600 dark:text-slate-400"
                        >
                          <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500 dark:text-red-400" />
                          <span>{limit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto p-6 pt-0">
                    <Link href={`/compare/${comp.id}`} className="block w-full">
                      <Button
                        variant="outline"
                        className="group h-12 w-full justify-between rounded-xl"
                      >
                        {t('view_comparison')}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTABannerSection
        title={t('hero_title')} // Reusing hero title or better "Still deciding?"
        subtitle={t('hero_subtitle')} // Reusing subtitle
        badgeText="Compare"
        demoBtnText={t('view_comparison')} // Or generic "Get Started"
        demoBtnLink="/demo"
        pricingBtnText="View Pricing"
        pricingBtnLink="/pricing"
        trustText1="Objective Analysis"
        trustText2="Transparent Pricing"
      />
    </div>
  );
}
