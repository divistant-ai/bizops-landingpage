import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import WhyBizOpsContent from './WhyBizOpsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'Why BizOps? - The Leading White-label ERP Solution in Indonesia'
        : 'Mengapa BizOps? - Solusi ERP White-label Terdepan di Indonesia',
    description:
      locale === 'en'
        ? 'Discover why BizOps is the preferred white-label ERP solution for consultants in Indonesia. Learn about our features, benefits, and success stories.'
        : 'Temukan mengapa BizOps adalah solusi ERP white-label pilihan bagi konsultan di Indonesia. Pelajari tentang fitur, manfaat, dan kisah sukses kami.',
  });
}

export default function WhyBizOpsPage() {
  return <WhyBizOpsContent />;
}
