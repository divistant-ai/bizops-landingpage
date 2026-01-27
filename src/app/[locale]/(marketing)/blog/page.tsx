import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import BlogContent from './BlogContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'BizOps Blog - Insights on White-label ERP and Business Operations'
        : 'Blog BizOps - Wawasan tentang ERP White-label dan Operasi Bisnis',
    description:
      locale === 'en'
        ? 'Stay updated with the latest articles, tips, and trends on white-label ERP solutions and business operations in Indonesia.'
        : 'Dapatkan informasi terbaru dengan artikel, tips, dan tren terkini tentang solusi ERP white-label dan operasi bisnis di Indonesia.',
  });
}

export default function BlogPage() {
  return <BlogContent />;
}
