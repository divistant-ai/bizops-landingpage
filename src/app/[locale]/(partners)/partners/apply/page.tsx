import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import PartnerApplyContent from './PartnerApplyContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Apply as Partner | BizOps',
      description:
        'Join the BizOps ecosystem. Apply for a partnership and grow your business with us.',
      url: '/partners/apply',
    });
  }

  return genMeta({
    title: 'Daftar Menjadi Partner | BizOps',
    description:
      'Bergabung dengan ekosistem BizOps. Daftarkan kemitraan dan kembangkan bisnis Anda bersama kami.',
    url: '/partners/apply',
  });
}

export default function PartnerApplyPage() {
  return <PartnerApplyContent />;
}
