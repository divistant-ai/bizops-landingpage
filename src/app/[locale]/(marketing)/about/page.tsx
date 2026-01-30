import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import AboutContent from './AboutContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title:
      locale === 'en'
        ? 'About Us - PT Divistant Teknologi Indonesia'
        : 'Tentang Kami - PT Divistant Teknologi Indonesia',
    description:
      locale === 'en'
        ? 'Company profile, digital sovereignty vision, and the team of practitioners behind BizOps.'
        : 'Profil perusahaan, visi kedaulatan digital, dan tim praktisi di balik BizOps.',
  });
}

export default function AboutPage() {
  return <AboutContent />;
}
