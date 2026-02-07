import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import OnboardingContent from './OnboardingContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'Get Started with BizOps | Select Your Industry'
        : 'Mulai dengan BizOps | Pilih Industri Anda',
    description:
      locale === 'en'
        ? 'Customize your BizOps ERP experience by selecting your industry. Get tailored features for Manufacturing, Healthcare, Retail, and more.'
        : 'Sesuaikan pengalaman ERP BizOps Anda dengan memilih industri. Dapatkan fitur yang disesuaikan untuk Manufaktur, Kesehatan, Ritel, dan lainnya.',
  });
}

export default function OnboardingPage() {
  return <OnboardingContent />;
}
