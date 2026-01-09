import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import React from 'react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Resources | BizOps',
  description:
    'Explore BizOps resources including webinars, case studies, whitepapers, and more to help your business thrive.',
};

export default async function ResourcesLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="grow">{props.children}</main>
      <Footer />
    </div>
  );
}
