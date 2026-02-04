'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
// import { useTranslations } from 'next-intl';
import { Container, Section } from '@/components/layout';
import { DynamicIcon } from '@/components/ui/DynamicIcon';
import { GlassCard } from '@/components/ui/GlassCard';
import { cn } from '@/libs/utils/cn';

type AppModule = {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  features?: string[];
};

type AppsGridSectionProps = {
  apps: AppModule[];
  title?: string;
  subtitle?: string;
  badge?: string;
};

export const AppsGridSection: React.FC<AppsGridSectionProps> = ({
  apps,
  title,
  subtitle,
  badge,
}) => {
  // const t = useTranslations('GenericLandingPage');

  const getGradient = (index: number) => {
    const gradients = [
      'from-blue-500 to-indigo-600',
      'from-emerald-500 to-teal-600',
      'from-orange-500 to-rose-600',
      'from-violet-500 to-purple-600',
      'from-cyan-500 to-blue-600',
      'from-pink-500 to-fuchsia-600',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <Section className="relative overflow-hidden py-24">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-950/50" />
      <div className="absolute top-0 right-0 -mt-40 -mr-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/5" />
      <div className="absolute bottom-0 left-0 -mb-40 -ml-40 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/5" />

      <Container size="7xl" className="relative">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {badge && (
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm ring-1 ring-slate-200 backdrop-blur-sm dark:bg-slate-800/80 dark:text-slate-200 dark:ring-slate-700">
              <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
              {badge}
            </span>
          )}
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            {title || 'Integrated Apps'}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            {subtitle || 'Discover the powerful modules included in this solution.'}
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app, index) => {
            const gradient = getGradient(index);

            return (
              <GlassCard
                key={app.id}
                variant="light"
                padding="lg"
                hover
                className="group relative flex flex-col items-start border-slate-200/60 dark:border-slate-800/60"
              >
                {/* App Icon Container */}
                <div className={cn(
                  'mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3',
                  'bg-gradient-to-br text-white',
                  gradient,
                )}
                >
                  <DynamicIcon name={typeof app.icon === 'string' ? app.icon : 'Grid'} className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  {app.title}
                </h3>
                <p className="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {app.subtitle}
                </p>

                {/* Feature List (New) */}
                {app.features && app.features.length > 0 && (
                  <div className="mb-6 w-full space-y-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Learn More Link (Visual only for now) */}
                <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-slate-900 transition-all group-hover:gap-3 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  <span>Explore App</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </GlassCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
