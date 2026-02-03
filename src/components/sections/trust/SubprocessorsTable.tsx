import { useTranslations } from 'next-intl';
import Container from '@/components/layout/Container';
import { Typography } from '@/components/ui';

export default function SubprocessorsTable() {
  const t = useTranslations('Trust');

  return (
    <section className="rounded-[3rem] border border-slate-200 bg-slate-50 p-8 py-16 md:p-16 md:py-24 dark:border-slate-800 dark:bg-slate-900">
      <Container noPadding size="4xl">
        <Typography variant="h2" as="h2" className="mb-6">
          {t('subprocessors_title')}
        </Typography>
        <Typography variant="body" className="mb-8 text-slate-600 dark:text-slate-400">
          {t('subprocessors_subtitle')}
        </Typography>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
                <tr>
                  <th className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    {t('table_provider')}
                  </th>
                  <th className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    {t('table_purpose')}
                  </th>
                  <th className="p-4 font-bold text-slate-700 dark:text-slate-300">
                    {t('table_location')}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  {
                    provider: 'provider_gcp',
                    purpose: 'purpose_gcp',
                    location: 'location_gcp',
                  },
                  {
                    provider: 'provider_aws',
                    purpose: 'purpose_aws',
                    location: 'location_aws',
                  },
                  {
                    provider: 'provider_cloudflare',
                    purpose: 'purpose_cloudflare',
                    location: 'location_cloudflare',
                  },
                  {
                    provider: 'provider_sentry',
                    purpose: 'purpose_sentry',
                    location: 'location_sentry',
                  },
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-4 font-medium text-slate-900 dark:text-white">
                      {t(row.provider as any)}
                    </td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">{t(row.purpose as any)}</td>
                    <td className="p-4 text-slate-600 dark:text-slate-400">{t(row.location as any)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
