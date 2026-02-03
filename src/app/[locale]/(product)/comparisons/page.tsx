import type { Metadata } from 'next';
import ComparisonsContent from '@/components/pages/ComparisonsContent';
import StructuredData from '@/components/StructuredData';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import { getArticleSchema, getBreadcrumbSchema } from '@/libs/utils/structured-data';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Architecture Comparison | BizOps',
      description: 'Technical analysis of BizOps architecture compared to Excel, Odoo, Bitrix, and Legacy ERP.',
      url: '/comparisons',
    });
  }

  return genMeta({
    title: 'Architecture Comparison | BizOps',
    description: 'Analisis teknis arsitektur BizOps dibandingkan dengan Excel, Odoo, Bitrix, dan Legacy ERP.',
    url: '/comparisons',
  });
}

export default async function ComparisonsPage() {
  const jsonLd = [
    getArticleSchema({
      headline: 'BizOps vs Competitors: Architecture Comparison',
      description: 'Technical deep dive comparing BizOps architecture with Odoo, Bitrix, and Excel.',
      url: '/comparisons',
      datePublished: '2024-01-01',
      author: {
        name: 'BizOps Engineering Team',
      },
    }),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Product', url: '/platform' },
      { name: 'Comparisons', url: '/comparisons' },
    ]),
  ];

  return (
    <>
      <StructuredData data={jsonLd} />
      <ComparisonsContent />
    </>
  );
}
