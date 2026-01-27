import type { Metadata } from 'next';
import { Activity, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/layout';
import { statusData } from '@/data/supportContent';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  return genMeta({
    title: locale === 'en' ? 'System Status | BizOps' : 'Status Sistem | BizOps',
    description:
      locale === 'en'
        ? 'Check the current status of BizOps systems and services. Stay informed about uptime, incidents, and maintenance updates.'
        : 'Periksa status terkini sistem dan layanan BizOps. Tetap terinformasi tentang waktu aktif, insiden, dan pembaruan pemeliharaan.',
  });
}

export default function StatusPage() {
  const t = useTranslations('SystemStatus');
  const { systems, thirdParty, incidents } = statusData;

  const getStatusIcon = (status: string) => {
    if (status === 'Operational') {
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    }
    if (status === 'Degraded') {
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    }
    return <XCircle className="h-5 w-5 text-red-500" />;
  };

  const translateStatus = (status: string) => {
    if (status === 'Operational') {
      return t('status_operational');
    }
    if (status === 'Degraded') {
      return t('status_degraded');
    }
    if (status === 'Down') {
      return t('status_down');
    }
    if (status === 'Resolved') {
      return t('status_resolved');
    }
    if (status === 'Investigating') {
      return t('status_investigating');
    }
    return status;
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-slate-950">
      <Section className="bg-white pt-32 pb-12 dark:bg-slate-950">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h1 className="mb-2 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
                <Activity className="h-8 w-8 text-green-500 dark:text-green-400" />
                {t('hero_title')}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {t('last_updated')}
                {' '}
                {t('hero_description')}
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-4">
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
              <div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  {t('current_status')}
                </div>
                <div className="text-xs text-green-700 dark:text-green-300">
                  {t('api_response_time')}
                  {' '}
                  {t('api_response_value')}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="5xl">
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            {/* Core Systems */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-lg font-bold text-neutral-900 dark:text-white">
                {t('core_systems')}
              </h2>
              <div className="space-y-6">
                {systems.map(sys => (
                  <div
                    key={sys.id}
                    className="flex items-start justify-between border-b border-neutral-100 pb-4 last:border-0 last:pb-0 dark:border-slate-800"
                  >
                    <div>
                      <div className="font-bold text-neutral-800 dark:text-slate-200">
                        {t(`system_${sys.id}_name` as any)}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-slate-400">
                        {t(`system_${sys.id}_desc` as any)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="mb-1 flex items-center justify-end gap-2 text-sm font-bold">
                        {getStatusIcon(sys.status)}
                        {' '}
                        {translateStatus(sys.status)}
                      </div>
                      <div className="text-xs text-neutral-400 dark:text-slate-500">
                        {t(`system_${sys.id}_uptime` as any)}
                        {' '}
                        {t('uptime')}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Party */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-lg font-bold text-neutral-900 dark:text-white">
                {t('third_party_services')}
              </h2>
              <div className="space-y-6">
                {thirdParty.map(sys => (
                  <div
                    key={sys.id}
                    className="flex items-start justify-between border-b border-neutral-100 pb-4 last:border-0 last:pb-0 dark:border-slate-800"
                  >
                    <div>
                      <div className="font-bold text-neutral-800 dark:text-slate-200">
                        {t(`third_party_${sys.id}_name` as any)}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-slate-400">
                        {t(`third_party_${sys.id}_desc` as any)}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold">
                      {getStatusIcon(sys.status)}
                      {' '}
                      {translateStatus(sys.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Incidents */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-6 text-lg font-bold text-neutral-900 dark:text-white">
              {t('past_incidents')}
            </h2>
            {incidents.length > 0
              ? (
                  <div className="space-y-8">
                    {incidents.map(incident => (
                      <div
                        key={incident.id}
                        className="relative border-l-4 border-neutral-200 pl-6 dark:border-slate-700"
                      >
                        <div className="absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2 border-white bg-neutral-300 dark:border-slate-900 dark:bg-slate-700" />
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <span className="font-bold text-neutral-900 dark:text-white">
                            {t(`incident_${incident.id}_title` as any)}
                          </span>
                          <span
                            className={`rounded px-2 py-0.5 text-xs font-bold ${
                              incident.status === 'Resolved'
                                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                            }`}
                          >
                            {translateStatus(incident.status)}
                          </span>
                          <span className="text-sm text-neutral-500 dark:text-slate-400">
                            •
                            {' '}
                            {t(`incident_${incident.id}_date` as any)}
                          </span>
                        </div>
                        <p className="mb-2 text-sm text-neutral-600 dark:text-slate-400">
                          {t(`incident_${incident.id}_desc` as any)}
                        </p>
                        <div className="text-xs text-neutral-400 dark:text-slate-500">
                          {t('duration')}
                          {' '}
                          {t(`incident_${incident.id}_duration` as any)}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              : (
                  <p className="py-8 text-center text-neutral-500 dark:text-slate-400">
                    {t('no_incidents')}
                  </p>
                )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
