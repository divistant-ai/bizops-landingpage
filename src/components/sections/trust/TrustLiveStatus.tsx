import { Clock, RefreshCw } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Container from '@/components/layout/Container';

export default function TrustLiveStatus() {
  const t = useTranslations('Trust');

  return (
    <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <Container
        size="7xl"
        className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row"
      >
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
          </div>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
            {t('status_operational')}
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {' '}
            {t('status_uptime')}
          </span>
          <span className="hidden items-center gap-1 sm:flex">
            <RefreshCw className="h-3 w-3" />
            {' '}
            {t('status_updated')}
          </span>
          <Link href="/status" className="text-emerald-600 hover:underline">
            {t('status_history')}
          </Link>
        </div>
      </Container>
    </div>
  );
}
