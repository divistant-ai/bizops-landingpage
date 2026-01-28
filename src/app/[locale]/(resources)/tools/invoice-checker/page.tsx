import InvoiceChecker from '@/components/tools/customer/InvoiceChecker';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'Invoice Checker | BizOps ERP Solutions'
        : 'Pemeriksa Faktur | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Verify and validate your invoices efficiently with BizOps ERP Solutions. Our Invoice Checker tool helps you ensure accuracy and compliance in your billing processes.'
        : 'Verifikasi dan validasi faktur Anda secara efisien dengan Solusi ERP BizOps. Alat Pemeriksa Faktur kami membantu Anda memastikan akurasi dan kepatuhan dalam proses penagihan Anda.',
  });
}

export default function InvoiceCheckerPage() {
  return <InvoiceChecker />;
}
