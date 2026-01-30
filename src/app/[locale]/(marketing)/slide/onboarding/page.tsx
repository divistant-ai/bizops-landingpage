import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import OnboardingSlideContent from './OnboardingSlideContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title: locale === 'en' ? 'Onboarding Slides | BizOps ERP Solutions' : 'Slide Onboarding | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Explore BizOps ERP onboarding slides to seamlessly integrate our solutions into your business operations.'
        : 'Jelajahi slide onboarding BizOps ERP untuk mengintegrasikan solusi kami ke dalam operasi bisnis Anda dengan mulus.',
  });
}

export default function OnboardingSlidePage() {
  return <OnboardingSlideContent />;
}
