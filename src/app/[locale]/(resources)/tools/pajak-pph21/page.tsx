import type { Metadata } from 'next';
import PajakPPh21Calculator from '@/components/tools/customer/PajakPPh21Calculator';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'Tax PPh21 Calculator | BizOps ERP Solutions'
        : 'Kalkulator Pajak PPh21 | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Calculate your Tax PPh21 accurately with BizOps ERP Solutions. Our calculator helps you determine tax obligations for employees in Indonesia.'
        : 'Hitung Pajak PPh21 Anda dengan akurat menggunakan Solusi ERP BizOps. Kalkulator kami membantu Anda menentukan kewajiban pajak untuk karyawan di Indonesia.',
  });
}

export default function PajakPPh21Page() {
  return <PajakPPh21Calculator />;
}
