import type { Metadata } from 'next';
import StructuredData from '@/components/StructuredData';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import { getArticleSchema } from '@/libs/utils/structured-data';
import MigrationContent from './MigrationContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Migration Center | Guide to Moving to BizOps',
      description: 'Complete guide for data migration from Excel, Accounting Software, or Legacy ERP to BizOps. Templates, timeline, and best practices.',
      url: '/migration',
    });
  }

  return genMeta({
    title: 'Migration Center | Panduan Migrasi ke BizOps',
    description: 'Panduan lengkap migrasi data dari Excel, Software Akuntansi, atau Legacy ERP ke BizOps. Template, timeline, dan best practices.',
    url: '/migration',
  });
}

export default async function MigrationPage() {
  const jsonLd = getArticleSchema({
    headline: 'Panduan Migrasi BizOps ERP',
    description: 'Panduan lengkap migrasi data dari Excel atau sistem lama ke BizOps Enterprise ERP.',
    url: '/migration',
    datePublished: '2024-01-01',
    author: {
      name: 'BizOps Migration Team',
    },
  });

  return (
    <>
      <StructuredData data={jsonLd} />
      <MigrationContent />
    </>
  );
}
