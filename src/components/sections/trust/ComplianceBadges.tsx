import { FileCheck, Globe, Lock, Shield } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CardSlider, Grid, Typography } from '@/components/ui';

export default function ComplianceBadges() {
  const t = useTranslations('Trust');

  return (
    <section>
      <div className="mb-16 text-center">
        <Typography variant="h2" as="h2">
          {t('compliance_title')}
        </Typography>
        <Typography variant="body" className="text-slate-600 dark:text-slate-400">
          {t('compliance_subtitle')}
        </Typography>
      </div>

      <div className="md:hidden">
        <CardSlider mobileItemWidth="w-[60vw] sm:w-[250px]">
          <BadgeCard
            icon={Shield}
            title={t('badge_iso_title')}
            desc={t('badge_iso_desc')}
            status={t('badge_iso_status')}
            color="emerald"
          />
          <BadgeCard
            icon={Globe}
            title={t('badge_gdpr_title')}
            desc={t('badge_gdpr_desc')}
            status={t('badge_gdpr_status')}
            color="blue"
          />
          <BadgeCard
            icon={FileCheck}
            title={t('badge_pse_title')}
            desc={t('badge_pse_desc')}
            status={t('badge_pse_status')}
            color="red"
          />
        </CardSlider>
      </div>

      <Grid cols={4} gap={8} className="hidden md:grid">
        <BadgeCard
          icon={Shield}
          title={t('badge_iso_title')}
          desc={t('badge_iso_desc')}
          status={t('badge_iso_status')}
          color="emerald"
        />
        <BadgeCard
          icon={Globe}
          title={t('badge_gdpr_title')}
          desc={t('badge_gdpr_desc')}
          status={t('badge_gdpr_status')}
          color="blue"
        />
        <BadgeCard
          icon={FileCheck}
          title={t('badge_pse_title')}
          desc={t('badge_pse_desc')}
          status={t('badge_pse_status')}
          color="red"
        />
        <div className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center opacity-75 transition-all hover:border-purple-500/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800">
            <Lock className="h-8 w-8 text-slate-400" />
          </div>
          <Typography variant="h3" as="h3" className="mb-2">
            {t('badge_soc_title')}
          </Typography>
          <Typography variant="body" className="mb-4 text-slate-500 dark:text-slate-400">
            {t('badge_soc_desc')}
          </Typography>
          <span className="mt-auto inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold tracking-wide text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
            {t('badge_soc_status')}
          </span>
        </div>
      </Grid>
    </section>
  );
}

function BadgeCard({ icon: Icon, title, desc, status, color }: {
  icon: any;
  title: string;
  desc: string;
  status: string;
  color: 'emerald' | 'blue' | 'red';
}) {
  const hoverBorder = `hover:border-${color}-500/50`;

  return (
    <div className={`group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 ${hoverBorder}`}>
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 transition-transform group-hover:scale-110 dark:bg-slate-800">
        <Icon className={`h-8 w-8 text-slate-700 transition-colors dark:text-slate-300 ${color === 'emerald' ? 'group-hover:text-emerald-500' : color === 'blue' ? 'group-hover:text-blue-500' : 'group-hover:text-red-500'}`} />
      </div>
      <Typography variant="h3" as="h3" className="mb-2">
        {title}
      </Typography>
      <Typography variant="body" className="mb-4 text-slate-500 dark:text-slate-400">
        {desc}
      </Typography>
      <span className={`mt-auto inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold tracking-wide uppercase ${color === 'emerald' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400' : color === 'blue' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' : 'bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-400'}`}>
        {status}
      </span>
    </div>
  );
}
