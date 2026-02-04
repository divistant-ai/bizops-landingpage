import type { Metadata } from 'next';
import type { RoleData } from '@/types';
import { notFound } from 'next/navigation';

import RolePageTemplate from '@/components/templates/RolePage';
import { rolesData } from '@/data/solutionsContent';
import { rolesTranslations } from '@/data/solutionsContentTranslations';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import { transformContent } from '@/libs/utils/transformContent';

export function generateStaticParams() {
  return Object.keys(rolesData).map(slug => ({
    slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await props.params;
  const currentLocale = (locale || 'id') as 'en' | 'id';

  // Merge base data with translations
  const baseData = rolesData[slug];
  const translationData = rolesTranslations[currentLocale]?.[slug];
  const data = { ...baseData, ...translationData } as RoleData;

  if (!data) {
    return {};
  }

  return genMeta({
    title: data.metaTitle || `${data.title} | BizOps for Roles`,
    description: data.metaDesc,
  });
}

export default async function RolePageRoute(props: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await props.params;
  const currentLocale = (locale || 'id') as 'en' | 'id';

  const baseData = rolesData[slug];

  if (!baseData) {
    notFound();
  }

  // Merge base data with translations
  const translationData = rolesTranslations[currentLocale]?.[slug];
  const rawData = { ...baseData, ...translationData } as RoleData;

  // Transform data on server
  const data = transformContent(rawData);

  // Use the new RolePage template
  return <RolePageTemplate data={data as any} />;
}
