'use client';

import Link from 'next/link';
import { Headphones } from 'lucide-react';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';

export function MigrationCTA() {
  return (
    <Section className="from-primary-900 to-primary-800 bg-linear-to-br text-white">
      <Container size="6xl" className="text-center">
        <h2 className="mb-6 text-3xl font-bold text-slate-800 md:text-4xl dark:text-white">
          Butuh Bantuan Migrasi?
        </h2>
        <p className="text-primary-200 mx-auto mb-10 max-w-2xl text-lg text-slate-800 dark:text-white">
          Tim implementasi kami siap membantu migrasi data Anda dengan aman dan efisien. Konsultasi
          gratis untuk assess kompleksitas migrasi Anda.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/demo">
            <Button
              size="lg"
              className="text-primary-900 w-full bg-white hover:bg-slate-100 sm:w-auto dark:bg-slate-800"
            >
              <Headphones className="mr-2 h-5 w-5 text-slate-800 dark:text-white" />
              <span className="text-slate-800 dark:text-white">Konsultasi Gratis</span>
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
            >
              <span className="text-slate-800 dark:text-white">Contact Migration Team</span>
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
