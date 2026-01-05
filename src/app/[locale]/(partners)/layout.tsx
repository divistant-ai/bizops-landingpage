import { setRequestLocale } from 'next-intl/server';
import React from 'react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

export default async function PartnersLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="flex-grow">{props.children}</main>
      <Footer />
    </>
  );
}
