'use client';

import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect } from 'react';
import { Container, Section } from '@/components/layout';
import { Button, Typography } from '@/components/ui';

export default function ProductError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('Error');

  useEffect(() => {
    console.error('Product Error:', error);
  }, [error]);

  return (
    <Section className="flex min-h-[60vh] items-center">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">
            <AlertTriangle className="h-8 w-8" />
          </div>
          <Typography variant="h1" as="h1" className="mb-4">
            {t('title')}
          </Typography>
          <Typography variant="body" color="muted" className="mb-8">
            {t('description')}
          </Typography>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button onClick={reset} variant="primary">
              <span className="flex items-center text-black dark:text-white">
                <RefreshCw className="mr-2 h-4 w-4" />
                {t('button_retry')}
              </span>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                {t('button_home')}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
