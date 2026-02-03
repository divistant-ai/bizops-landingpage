import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GenericLandingPage from '@/components/templates/GenericLandingPage';
import { servicesData } from '@/data/servicesContent';
import { getTranslatedServiceData } from '@/libs/utils/getTranslatedServiceData';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import { transformContent } from '@/libs/utils/transformContent';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;

  // Get translated service data for metadata
  const data = await getTranslatedServiceData(slug, locale);

  if (!data) {
    return {};
  }

  // English metadata
  if (locale === 'en') {
    return genMeta({
      title: `${data.title} | BizOps Services`,
      description: data.subtitle || data.description,
    });
  }

  // Indonesian metadata (default)
  return genMeta({
    title: `${data.title} | Layanan BizOps`,
    description: data.subtitle || data.description,
  });
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({
    slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug, locale } = await params;

  // Get translated service data
  const rawData = await getTranslatedServiceData(slug, locale);

  if (!rawData) {
    notFound();
  }

  // Transform data on server
  const data = transformContent(rawData);

  return <GenericLandingPage data={data as any} />;
}
