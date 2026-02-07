import type { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';
import PrivacyContent from './PrivacyContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (locale === 'en') {
    return genMeta({
      title: 'Privacy Policy | BizOps',
      description:
        'Learn how BizOps collects, uses, and protects your personal data in compliance with UU PDP and GDPR.',
      url: '/legal/privacy',
    });
  }

  return genMeta({
    title: 'Kebijakan Privasi | BizOps',
    description:
      'Pelajari bagaimana BizOps mengumpulkan, menggunakan, dan melindungi data pribadi Anda sesuai UU PDP dan GDPR.',
    url: '/legal/privacy',
  });
}

export default function PrivacyPage() {
  return <PrivacyContent />;
}
