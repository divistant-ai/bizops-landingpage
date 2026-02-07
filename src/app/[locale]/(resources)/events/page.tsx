import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import EventsContent from './EventsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Events & Webinars | BizOps Academy',
      description:
        'Join free educational sessions on digitalization, tax strategies, and modern operational management from BizOps Academy.',
      url: '/events',
    });
  }

  return genMeta({
    title: 'Event & Webinar | BizOps Academy',
    description:
      'Ikuti sesi edukasi gratis tentang digitalisasi, strategi pajak, dan manajemen operasional modern dari BizOps Academy.',
    url: '/events',
  });
}

export default function EventsPage() {
  return <EventsContent />;
}
