import type { Metadata } from 'next';
import type { IndustryData } from '@/types';
import { notFound } from 'next/navigation';

import IndustryPage from '@/components/templates/IndustryPage';
import { industriesData } from '@/data/solutionsContent';
import { industriesTranslations } from '@/data/solutionsContentTranslations';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import { transformContent } from '@/libs/utils/transformContent';

export function generateStaticParams() {
  return Object.keys(industriesData).map(slug => ({
    slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await props.params;
  const currentLocale = (locale || 'id') as 'en' | 'id';

  // Merge base data with translations
  const baseData = industriesData[slug];
  const translationData = industriesTranslations[currentLocale]?.[slug];
  const data = { ...baseData, ...translationData } as IndustryData;

  if (!data) {
    return {};
  }

  return genMeta({
    title: data.metaTitle || `${data.title} | BizOps Solutions`,
    description: data.metaDesc || data.description,
  });
}

export default async function IndustryPageRoute(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await props.params;
  const currentLocale = (locale || 'id') as 'en' | 'id';

  const baseData = industriesData[slug];

  if (!baseData) {
    notFound();
  }

  // Merge base data with translations
  const translationData = industriesTranslations[currentLocale]?.[slug];

  // Ensure we preserve icons from baseData if they are missing in translation
  const rawData = {
    ...baseData,
    ...translationData,
    icon: baseData.icon, // Enforce base icon
  } as IndustryData;

  // Transform content to be serializable (converts icons to strings/nulls if needed)
  // This is critical because we can't pass functions (icons) from Server to Client components directly
  const data = transformContent(rawData);

  return <IndustryPage data={data} />;
}
