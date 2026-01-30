import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import PartnersContent from './PartnersContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'Partner & Reseller Program | BizOps Partner Network'
        : 'Program Mitra & Reseller | BizOps Partner Network',
    description:
      locale === 'en'
        ? 'Transform your consulting business with White-label ERP. High recurring revenue, zero R&D risk. Join 100+ partners in Indonesia.'
        : 'Transformasi bisnis konsultan Anda dengan White-label ERP. Recurring revenue tinggi, nol risiko R&D. Bergabung dengan 100+ partner di Indonesia.',
  });
}

export default async function PartnerLandingPage({ params }: Props) {
  const { locale } = await params;
  return <PartnersContent locale={locale} />;
}
