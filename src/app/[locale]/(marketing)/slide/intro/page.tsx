import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import SlideContent from './SlideContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title: locale === 'en' ? 'Introduction Slides | BizOps ERP Solutions' : 'Slide Pengantar | Solusi ERP BizOps',
    description:
      locale === 'en'
        ? 'Discover BizOps ERP through our introductory slides, highlighting key features, benefits, and industry applications.'
        : 'Temukan BizOps ERP melalui slide pengantar kami, yang menyoroti fitur utama, manfaat, dan aplikasi industri.',
  });
}

export default function SlidePage() {
  return <SlideContent />;
}
