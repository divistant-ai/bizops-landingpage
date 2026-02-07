import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import TermsContent from './TermsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Terms of Service | BizOps',
      description:
        'Read the BizOps Terms of Service carefully before using our enterprise software and services.',
      url: '/legal/terms',
    });
  }

  return genMeta({
    title: 'Syarat dan Ketentuan | BizOps',
    description:
      'Baca Syarat dan Ketentuan BizOps dengan saksama sebelum menggunakan layanan software enterprise kami.',
    url: '/legal/terms',
  });
}

export default function TermsPage() {
  return <TermsContent />;
}
