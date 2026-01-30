import type { Metadata } from 'next';
import type React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title: locale === 'en' ? 'Tools | BizOps ERP' : 'Alat | BizOps',
    description:
      locale === 'en'
        ? 'Discover BizOps tools to optimize your business operations, from tax calculators to financial planners and more.'
        : 'Temukan alat BizOps untuk mengoptimalkan operasi bisnis Anda, mulai dari kalkulator pajak hingga perencana keuangan dan lainnya.',
  });
}

export default async function ToolsLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <main>{children}</main>;
}
