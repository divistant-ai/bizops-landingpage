import { ArrowLeft, Check, X } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { comparisonsData } from '@/data/comparisonData';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import { transformContent } from '@/libs/utils/transformContent';

type PageProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug, locale } = await params;
  const data = comparisonsData[slug];
  if (!data) {
    return {};
  }

  const competitorName = data.name[locale as 'en' | 'id'];

  return genMeta({
    title:
      locale === 'en'
        ? `BizOps vs ${competitorName} | Feature & Cost Comparison`
        : `BizOps vs ${competitorName} | Perbandingan Fitur & Biaya`,
    description:
      locale === 'en'
        ? `In-depth comparison analysis between BizOps and ${competitorName}. See which one is better suited for your business.`
        : `Analisis mendalam perbandingan antara BizOps dan ${competitorName}. Lihat mana yang lebih cocok untuk bisnis Anda.`,
  });
}

export async function generateStaticParams() {
  return Object.keys(comparisonsData)
    .filter(id => id !== 'bizops')
    .map(slug => ({
      slug,
    }));
}

export default async function ComparisonDetailPage({ params }: PageProps) {
  const { slug, locale } = await params;
  const t = await getTranslations('Compare');
  const competitor = comparisonsData[slug];
  const bizops = comparisonsData.bizops;

  if (!competitor || !bizops) {
    notFound();
  }

  const compIcon = transformContent({ icon: competitor.icon }).icon;
  const bizIcon = transformContent({ icon: bizops.icon }).icon;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-slate-950">
      <Section className="border-b border-neutral-200 bg-white pt-32 pb-16 dark:border-slate-800 dark:bg-slate-900">
        <Container size="5xl">
          <Link
            href="/compare"
            className="hover:text-primary-600 dark:hover:text-primary-400 mb-8 inline-flex items-center text-neutral-500 transition-colors dark:text-slate-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {' '}
            {t('back_to_list')}
          </Link>

          <div className="mb-12 flex flex-col items-center justify-center gap-8 md:flex-row md:gap-16">
            {/* Competitor */}
            <div className="text-center">
              <div
                className={`flex h-24 w-24 items-center justify-center rounded-3xl bg-neutral-100 dark:bg-slate-800 ${competitor.color} mx-auto mb-4`}
              >
                <div className="scale-150">{compIcon}</div>
              </div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
                {competitor.name[locale as 'en' | 'id']}
              </h1>
            </div>

            <div className="text-4xl font-bold text-neutral-300 dark:text-slate-600">VS</div>

            {/* BizOps */}
            <div className="text-center">
              <div
                className={`bg-primary-50 dark:bg-primary-950 flex h-24 w-24 items-center justify-center rounded-3xl ${bizops.color} shadow-primary-500/20 mx-auto mb-4 shadow-lg`}
              >
                <div className="scale-150">{bizIcon}</div>
              </div>
              <h1 className="text-primary-700 dark:text-primary-400 text-2xl font-bold">
                BizOps Platform
              </h1>
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-white">
              {t('our_verdict')}
            </h2>
            <p className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-xl leading-relaxed text-neutral-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              "
              {competitor.verdict[locale as 'en' | 'id']}
              "
            </p>
          </div>
        </Container>
      </Section>

      {/* Comparison Matrix */}
      <Section>
        <Container size="5xl">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            {/* Header */}
            <div className="grid grid-cols-3 bg-neutral-900 p-6 text-center text-lg font-bold text-white dark:bg-slate-950">
              <div>{t('feature_aspect')}</div>
              <div className="text-neutral-400 dark:text-slate-500">
                {competitor.name[locale as 'en' | 'id']}
              </div>
              <div className="text-primary-400">BizOps</div>
            </div>

            {/* Strategic Metrics */}
            <div className="divide-y divide-neutral-100 dark:divide-slate-800">
              {[
                {
                  label: t('metric_ttv'),
                  comp: competitor.ttv[locale as 'en' | 'id'],
                  us: bizops.ttv[locale as 'en' | 'id'],
                },
                {
                  label: t('metric_complexity'),
                  comp: competitor.maintenance[locale as 'en' | 'id'],
                  us: bizops.maintenance[locale as 'en' | 'id'],
                },
                {
                  label: t('metric_customizability'),
                  comp: competitor.customizability[locale as 'en' | 'id'],
                  us: bizops.customizability[locale as 'en' | 'id'],
                },
                {
                  label: t('metric_total_cost'),
                  comp: competitor.avgTCO[locale as 'en' | 'id'],
                  us: bizops.avgTCO[locale as 'en' | 'id'],
                },
              ].map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 items-center p-6 transition-colors hover:bg-neutral-50 dark:hover:bg-slate-800"
                >
                  <div className="font-bold text-neutral-900 dark:text-white">{row.label}</div>
                  <div className="text-center text-neutral-600 dark:text-slate-400">{row.comp}</div>
                  <div className="text-primary-700 bg-primary-50 dark:bg-primary-950 dark:text-primary-300 mx-4 rounded-lg py-1 text-center font-bold">
                    {row.us}
                  </div>
                </div>
              ))}
            </div>

            {/* Deep Dive Points */}
            <div className="border-t border-neutral-200 bg-neutral-50 p-6 text-center text-sm font-bold tracking-wider text-neutral-500 uppercase dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
              {t('deep_dive')}
            </div>

            <div className="divide-y divide-neutral-200 dark:divide-slate-800">
              {competitor.points[locale as 'en' | 'id'].map((point, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 gap-6 p-8 transition-colors hover:bg-neutral-50 md:grid-cols-3 dark:hover:bg-slate-800"
                >
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-white">
                      {point.feature}
                    </h3>
                    <p className="text-sm text-neutral-500 italic dark:text-slate-400">
                      {t('impact')}
                      {point.impact}
                    </p>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4 text-neutral-600 md:items-center md:justify-center md:text-center dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
                    <X className="h-5 w-5 shrink-0 text-red-500 dark:text-red-400" />
                    {point.them}
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-green-100 bg-green-50 p-4 font-medium text-green-800 shadow-sm md:items-center md:justify-center md:text-center dark:border-green-900 dark:bg-green-950 dark:text-green-300">
                    <Check className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                    {point.us}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="mb-6 text-2xl font-bold text-neutral-900 dark:text-white">
              {t('still_unsure')}
            </h3>
            <div className="flex justify-center gap-4">
              <Link href="/demo">
                <Button
                  size="lg"
                  className="bg-primary-600 hover:bg-primary-700 rounded-full px-8 text-slate-800 dark:text-white"
                >
                  {t('schedule_demo')}
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="rounded-full px-8">
                  {t('view_pricing')}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
