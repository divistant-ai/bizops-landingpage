import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { legalContent } from '@/data/legalContent';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import LegalDetailContent from './LegalDetailContent';

type PageProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug, locale } = await params;
  const data = legalContent[slug];
  if (!data) {
    return {};
  }

  let title = data.title;
  let subtitle = data.subtitle;

  if (slug === 'privacy') {
    const t = await getTranslations({ locale, namespace: 'Legal' });
    title = t('privacy.title');
    subtitle = t('privacy.subtitle');
  }

  return genMeta({
    title: `${title} | Legal BizOps`,
    description: subtitle,
  });
}

export async function generateStaticParams() {
  return Object.keys(legalContent).map((slug) => ({
    slug,
  }));
}

export default async function LegalDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = legalContent[slug];

  if (!data) {
    notFound();
  }

  return <LegalDetailContent slug={slug} data={data} />;
}
