import { Database, Eye, Globe, Layers, Lock, Server } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Container from '@/components/layout/Container';
import { CardSlider, Stack, Typography } from '@/components/ui';

export default function SecurityArchitecture() {
  const t = useTranslations('Trust');

  return (
    <section className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold tracking-wider text-slate-600 uppercase dark:bg-slate-800 dark:text-slate-400">
          <Layers className="h-3 w-3" />
          {' '}
          {t('security_badge')}
        </div>
        <Typography variant="h2" as="h2" className="mb-6">
          {t('security_title')}
        </Typography>
        <Typography
          variant="body"
          className="mb-8 leading-relaxed text-slate-600 dark:text-slate-400"
        >
          {t('security_subtitle')}
        </Typography>

        <div className="lg:hidden">
          <CardSlider mobileItemWidth="w-[85vw] sm:w-[400px]">
            <SecurityCard
              icon={Database}
              title={t('security_1_title')}
              desc={t('security_1_desc')}
              color="emerald"
            />
            <SecurityCard
              icon={Server}
              title={t('security_2_title')}
              desc={t('security_2_desc')}
              color="blue"
            />
            <SecurityCard
              icon={Eye}
              title={t('security_3_title')}
              desc={t('security_3_desc')}
              color="amber"
            />
          </CardSlider>
        </div>

        <Stack direction="vertical" gap={6} className="hidden lg:block">
          <SecurityCard
            icon={Database}
            title={t('security_1_title')}
            desc={t('security_1_desc')}
            color="emerald"
          />
          <SecurityCard
            icon={Server}
            title={t('security_2_title')}
            desc={t('security_2_desc')}
            color="blue"
          />
          <SecurityCard
            icon={Eye}
            title={t('security_3_title')}
            desc={t('security_3_desc')}
            color="amber"
          />
        </Stack>
      </div>

      <Container noPadding className="relative w-full">
        <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-10">
          <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-emerald-500/20 blur-[80px]"></div>

          <Stack direction="vertical" gap={4} className="relative z-10 h-full justify-center">
            <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-800/80 p-4 backdrop-blur">
              <div className="flex items-center gap-3 text-xs text-emerald-400">
                <Globe className="h-4 w-4" />
                {' '}
                Cloudflare WAF
              </div>
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
            </div>
            <div className="ml-4 flex items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-800/80 p-4 backdrop-blur sm:ml-8">
              <div className="flex items-center gap-3 text-xs text-blue-400">
                <Server className="h-4 w-4" />
                {' '}
                Load Balancer
              </div>
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
            </div>
            <div className="ml-8 flex items-center justify-between gap-4 rounded-xl border border-slate-700 bg-slate-800/80 p-4 backdrop-blur sm:ml-16">
              <div className="flex items-center gap-3 text-xs text-purple-400">
                <Lock className="h-4 w-4" />
                {' '}
                App Server (Pod)
              </div>
              <div className="h-2 w-2 animate-pulse rounded-full bg-purple-500"></div>
            </div>
            <div className="ml-12 flex items-center justify-between gap-4 rounded-xl border border-emerald-500/30 bg-emerald-900/50 p-4 shadow-[0_0_30px_rgba(16,185,129,0.2)] backdrop-blur sm:ml-24">
              <div className="flex items-center gap-3 text-xs font-bold text-white">
                <Database className="h-4 w-4" />
                {' '}
                Encrypted DB
              </div>
              <div className="flex gap-1">
                <Lock className="h-3 w-3 text-emerald-400" />
              </div>
            </div>
          </Stack>
        </div>
      </Container>
    </section>
  );
}

function SecurityCard({ icon: Icon, title, desc, color }: {
  icon: any;
  title: string;
  desc: string;
  color: 'emerald' | 'blue' | 'amber';
}) {
  const colors: Record<string, string> = {
    emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 hover:border-emerald-500/30',
    blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 hover:border-blue-500/30',
    amber: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 hover:border-amber-500/30',
  };

  const selectedColor = colors[color] || colors.emerald!;
  const bgClass = selectedColor.split(' hover')[0];
  const borderHover = selectedColor.split(' ').pop();

  return (
    <div className={`flex gap-4 rounded-xl border border-transparent p-4 transition-colors ${borderHover}`}>
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bgClass}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <Typography variant="h3" as="h3" className="mb-2">
          {title}
        </Typography>
        <Typography variant="small" className="text-slate-600 dark:text-slate-400">
          {desc}
        </Typography>
      </div>
    </div>
  );
}
