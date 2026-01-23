import type { Metadata } from 'next';
import PartnerDirectoryPage from './PartnerDirectory';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return {
    title:
      locale === 'en'
        ? 'Partner Directory | BizOps Partner Network'
        : 'Direktori Mitra | BizOps Partner Network',
    description:
      locale === 'en'
        ? 'Find trusted BizOps partners for implementation, integration, and managed services across Indonesia and APAC region.'
        : 'Temukan mitra BizOps terpercaya untuk implementasi, integrasi, dan layanan terkelola di Indonesia dan kawasan APAC.',
  };
}

export default async function PartnerDirectoryLandingPage({ params }: Props) {
  const { locale } = await params;
  return <PartnerDirectoryPage locale={locale} />;
}
