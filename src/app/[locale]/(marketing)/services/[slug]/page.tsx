import { notFound } from 'next/navigation';
import ServicePage from '@/components/templates/ServicePage';
import { servicesData } from '@/data/servicesContent';
import { getTranslatedServiceData } from '@/libs/utils/getTranslatedServiceData';

type Props = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

// Generate static params for all defined services
export function generateStaticParams() {
  return Object.keys(servicesData).map(slug => ({
    slug,
  }));
}

// Generate metadata for the service page
export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params;
  const serviceData = await getTranslatedServiceData(slug, locale);

  if (!serviceData) {
    return {
      title: 'Service Not Found',
    };
  }

  // Fallback description if subtitle is missing
  const description = serviceData.subtitle || serviceData.description.slice(0, 160);

  return {
    title: `${serviceData.title} | BizOps Services`,
    description,
    openGraph: {
      title: serviceData.title,
      description,
      type: 'website',
      // images: serviceData.image ? [{ url: serviceData.image }] : undefined, // Potential future enhancement
    },
  };
}

export default async function ServiceRoute({ params }: Props) {
  const { slug, locale } = await params;

  // Validate slug existence
  if (!servicesData[slug]) {
    notFound();
  }

  const serviceData = await getTranslatedServiceData(slug, locale);

  if (!serviceData) {
    notFound();
  }

  return (
    <ServicePage
      data={serviceData}
    />
  );
}
