import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import SearchContent from './SearchContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Search | BizOps',
      description:
        'Search across all BizOps content - products, solutions, tools, documentation, and more.',
      url: '/search',
    });
  }

  return genMeta({
    title: 'Pencarian | BizOps',
    description: 'Cari di seluruh konten BizOps - produk, solusi, tools, dokumentasi, dan lainnya.',
    url: '/search',
  });
}

export default function SearchPage() {
  return <SearchContent />;
}
