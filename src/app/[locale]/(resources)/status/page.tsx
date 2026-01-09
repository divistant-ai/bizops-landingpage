import { Activity, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';
import { Container, Section } from '@/components/layout';
import { statusData } from '@/data/supportContent';
import { generateMetadata as genMeta } from '@/libs/utils/metadata';

export const metadata = genMeta({
  title: 'System Status | BizOps Cloud',
  description: 'Real-time monitoring status server, API, dan layanan pendukung BizOps Cloud.',
});

export default function StatusPage() {
  const { currentStatus, lastUpdated, apiResponseTime, systems, thirdParty, incidents }
    = statusData;

  const getStatusIcon = (status: string) => {
    if (status === 'Operational') {
      return <CheckCircle2 className="h-5 w-5 text-green-500" />;
    }
    if (status === 'Degraded') {
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    }
    return <XCircle className="h-5 w-5 text-red-500" />;
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-slate-950">
      <Section className="bg-white pt-32 pb-12 dark:bg-slate-950">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h1 className="mb-2 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
                <Activity className="h-8 w-8 text-green-500 dark:text-green-400" />
                {' '}
                System Status
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Last check:
                {lastUpdated}
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-2xl border border-green-500/30 bg-green-500/10 px-6 py-4">
              <div className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
              <div>
                <div className="text-lg font-bold text-green-600 dark:text-green-400">
                  {currentStatus}
                </div>
                <div className="text-xs text-green-700 dark:text-green-300">
                  Avg Response Time:
                  {apiResponseTime}
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
                Core Systems
              </h2>
              <div className="space-y-6">
                {systems.map((sys, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between border-b border-neutral-100 pb-4 last:border-0 last:pb-0 dark:border-slate-800"
                  >
                    <div>
                      <div className="font-bold text-neutral-800 dark:text-slate-200">
                        {sys.name}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-slate-400">{sys.desc}</div>
                    </div>
                    <div className="text-right">
                      <div className="mb-1 flex items-center justify-end gap-2 text-sm font-bold">
                        {getStatusIcon(sys.status)}
                        {' '}
                        {sys.status}
                      </div>
                      <div className="text-xs text-neutral-400 dark:text-slate-500">
                        {sys.uptime}
                        {' '}
                        uptime
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Third Party */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="mb-6 text-lg font-bold text-neutral-900 dark:text-white">
                Third-Party Services
              </h2>
              <div className="space-y-6">
                {thirdParty.map((sys, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between border-b border-neutral-100 pb-4 last:border-0 last:pb-0 dark:border-slate-800"
                  >
                    <div>
                      <div className="font-bold text-neutral-800 dark:text-slate-200">
                        {sys.name}
                      </div>
                      <div className="text-sm text-neutral-500 dark:text-slate-400">{sys.desc}</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold">
                      {getStatusIcon(sys.status)}
                      {' '}
                      {sys.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Incidents */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="mb-6 text-lg font-bold text-neutral-900 dark:text-white">
              Past Incidents (Last 30 Days)
            </h2>
            {incidents.length > 0
              ? (
                  <div className="space-y-8">
                    {incidents.map((incident, i) => (
                      <div
                        key={i}
                        className="relative border-l-4 border-neutral-200 pl-6 dark:border-slate-700"
                      >
                        <div className="absolute top-0 -left-[9px] h-4 w-4 rounded-full border-2 border-white bg-neutral-300 dark:border-slate-900 dark:bg-slate-700" />
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <span className="font-bold text-neutral-900 dark:text-white">
                            {incident.title}
                          </span>
                          <span
                            className={`rounded px-2 py-0.5 text-xs font-bold ${incident.status === 'Resolved' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}
                          >
                            {incident.status}
                          </span>
                          <span className="text-sm text-neutral-500 dark:text-slate-400">
                            •
                            {incident.date}
                          </span>
                        </div>
                        <p className="mb-2 text-sm text-neutral-600 dark:text-slate-400">
                          {incident.desc}
                        </p>
                        <div className="text-xs text-neutral-400 dark:text-slate-500">
                          Duration:
                          {incident.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              : (
                  <p className="py-8 text-center text-neutral-500 dark:text-slate-400">
                    No incidents reported in the last 30 days.
                  </p>
                )}
          </div>
        </Container>
      </Section>
    </div>
  );
}
