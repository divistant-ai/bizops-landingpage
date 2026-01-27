import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import CustomersContent from './CustomersContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title: locale === 'en' ? 'Customers | BizOps ERP Solutions' : 'Pelanggan | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Discover how leading companies across various industries leverage BizOps ERP solutions to streamline operations and drive growth.'
        : 'Temukan bagaimana perusahaan terkemuka di berbagai industri memanfaatkan solusi ERP BizOps untuk menyederhanakan operasi dan mendorong pertumbuhan.',
  });
}

export default function CustomersPage() {
  return <CustomersContent />;
}
