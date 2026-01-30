import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import UseCasesContent from './UseCasesContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title: locale === 'en' ? 'Use Cases | BizOps ERP Solutions' : 'Use Cases | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Explore how BizOps ERP transforms businesses across industries with tailored solutions for manufacturing, retail, distribution, and more.'
        : 'Jelajahi bagaimana BizOps ERP mengubah bisnis di berbagai industri dengan solusi yang disesuaikan untuk manufaktur, ritel, distribusi, dan lainnya.',
  });
}

export default function UseCasesIndexPage() {
  return <UseCasesContent />;
}
