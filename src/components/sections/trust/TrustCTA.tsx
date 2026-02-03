import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Typography } from '@/components/ui';
import Button from '@/components/ui/Button';

export default function TrustCTA() {
  const t = useTranslations('Trust');

  return (
    <section className="py-16 text-center md:py-24">
      <Typography variant="h2" as="h2" className="mb-6">
        {t('cta_title')}
      </Typography>
      <Typography variant="body" className="mb-8 text-slate-600 dark:text-slate-400">
        {t('cta_subtitle')}
      </Typography>
      <Button size="lg" className="px-8 font-bold text-slate-950 dark:text-white">
        {t('cta_button')}
        {' '}
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </section>
  );
}
