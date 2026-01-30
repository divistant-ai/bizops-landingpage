import { BarChart3, Calculator, LineChart, Rocket, Sparkles, Target } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import { Badge, Button, Card } from '@/components/ui';
import { consultantTools, customerTools } from '@/data/toolsRegistry';

const getContent = (content: any, locale: string) => {
  if (typeof content === 'string') {
    return content;
  }
  return content?.[locale as 'id' | 'en'] || content?.en || '';
};

const colorClasses = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/10',
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600 dark:text-blue-400',
    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    hover: 'hover:border-blue-400 dark:hover:border-blue-600',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/10',
    border: 'border-emerald-200 dark:border-emerald-800',
    icon: 'text-emerald-600 dark:text-emerald-400',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    hover: 'hover:border-emerald-400 dark:hover:border-emerald-600',
  },
  teal: {
    bg: 'bg-teal-50 dark:bg-teal-900/10',
    border: 'border-teal-200 dark:border-teal-800',
    icon: 'text-teal-600 dark:text-teal-400',
    badge: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400',
    hover: 'hover:border-teal-400 dark:hover:border-teal-600',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/10',
    border: 'border-purple-200 dark:border-purple-800',
    icon: 'text-purple-600 dark:text-purple-400',
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    hover: 'hover:border-purple-400 dark:hover:border-purple-600',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/10',
    border: 'border-amber-200 dark:border-amber-800',
    icon: 'text-amber-600 dark:text-amber-400',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
    hover: 'hover:border-amber-400 dark:hover:border-amber-600',
  },
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-900/10',
    border: 'border-rose-200 dark:border-rose-800',
    icon: 'text-rose-600 dark:text-rose-400',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
    hover: 'hover:border-rose-400 dark:hover:border-rose-600',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-900/10',
    border: 'border-orange-200 dark:border-orange-800',
    icon: 'text-orange-600 dark:text-orange-400',
    badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    hover: 'hover:border-orange-400 dark:hover:border-orange-600',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-900/10',
    border: 'border-indigo-200 dark:border-indigo-800',
    icon: 'text-indigo-600 dark:text-indigo-400',
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
    hover: 'hover:border-indigo-400 dark:hover:border-indigo-600',
  },
  slate: {
    bg: 'bg-slate-50 dark:bg-slate-900/10',
    border: 'border-slate-200 dark:border-slate-800',
    icon: 'text-slate-600 dark:text-slate-400',
    badge: 'bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400',
    hover: 'hover:border-slate-400 dark:hover:border-slate-600',
  },
};

function ToolCard({ tool, locale }: { tool: (typeof customerTools)[0]; locale: string }) {
  const colors = colorClasses[tool.color as keyof typeof colorClasses];
  const Icon = tool.icon;
  const t = useTranslations('Tools');

  return (
    <Link href={tool.href} className="group">
      <Card
        className={`relative h-full overflow-hidden border-2 p-6 transition-all duration-300 ${colors.border} ${colors.hover}`}
      >
        {tool.badge && (
          <div className="absolute top-4 right-4">
            <Badge className={`text-xs font-bold ${colors.badge}`}>{tool.badge}</Badge>
          </div>
        )}

        <div
          className={`mb-4 flex size-14 items-center justify-center rounded-2xl ${colors.bg} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className={`size-7 ${colors.icon}`} />
        </div>

        <div className="mb-4">
          <h3 className="mb-1 text-xl font-bold text-slate-900 dark:text-white">
            {getContent(tool.title, locale)}
          </h3>
          <p className="mb-3 text-sm font-medium text-slate-500 dark:text-slate-400">
            {getContent(tool.subtitle, locale)}
          </p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {getContent(tool.description, locale)}
          </p>
        </div>

        <ul className="space-y-2">
          {tool.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400"
            >
              <div className={`size-1.5 rounded-full ${colors.bg}`} />
              {feature}
            </li>
          ))}
        </ul>

        <div className="text-primary-600 dark:text-primary-400 mt-4 flex items-center gap-2 text-sm font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {t('try_it_now')}
          <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Card>
    </Link>
  );
}

export default function ToolsHubPage() {
  const t = useTranslations('Tools');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-slate-950 dark:to-slate-900">
      <Section className="pt-24 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="border-primary-200 bg-primary-50 text-primary-700 dark:border-primary-800 dark:bg-primary-900/30 dark:text-primary-400 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold">
              <Sparkles className="size-4" />
              {t('badge_text')}
            </div>
            <h1 className="mb-6 text-5xl leading-tight font-extrabold text-slate-900 md:text-6xl dark:text-white">
              {t('hero_title')}
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                {t('hero_title_1')}
              </span>
            </h1>
            <p className="mb-10 text-xl leading-relaxed text-slate-600 dark:text-slate-400">
              {t('hero_subtitle')}
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Calculator className="size-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('customer_tools_title')}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t('customer_tools_desc')}
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {customerTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} locale={locale} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-900/30">
                <BarChart3 className="size-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {t('strategic_tools_title')}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {t('strategic_tools_desc')}
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {consultantTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} locale={locale} />
              ))}
            </div>
          </div>

          <div className="from-primary-50 dark:from-primary-900/20 mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br to-purple-50 p-8 md:p-12 dark:border-neutral-800 dark:border-slate-800 dark:to-purple-900/20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <div className="bg-primary-100 dark:bg-primary-900/30 rounded-full p-4">
                  <Rocket className="text-primary-600 dark:text-primary-400 size-8" />
                </div>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                {t('need_solution_title')}
              </h2>
              <p className="mb-8 text-lg text-slate-600 dark:text-slate-400">
                {t('need_solution_desc')}
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/demo">
                  <Button
                    size="lg"
                    className="bg-primary-600 hover:bg-primary-700 shadow-primary-500/30 shadow-lg"
                  >
                    <span className="text-slate-900 dark:text-white">
                      {t('need_solution_cta_left')}
                    </span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    {t('need_solution_cta_right')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white py-20 dark:bg-slate-950">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              {t('why_use_title')}
            </h2>
            <p className="mb-12 text-lg text-slate-600 dark:text-slate-400">{t('why_use_desc')}</p>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  icon: Target,
                  title: 'Data-Driven',
                  desc: t('why_use_item_1'),
                },
                {
                  icon: LineChart,
                  title: 'Realistic Estimates',
                  desc: t('why_use_item_2'),
                },
                {
                  icon: Sparkles,
                  title: 'Actionable Insights',
                  desc: t('why_use_item_3'),
                },
              ].map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="text-center">
                    <div className="bg-primary-50 dark:bg-primary-900/20 mx-auto mb-4 flex size-16 items-center justify-center rounded-2xl">
                      <Icon className="text-primary-600 dark:text-primary-400 size-8" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
