'use client';

import { CheckCircle2, ChevronRight, FileText, Layers } from 'lucide-react';

import { Container, Section } from '@/components/layout';
import { FadeIn } from '@/components/ui/FadeIn';

type OverviewSectionProps = {
  description: string;
  deliverables?: string[];
  title?: string;
  subTitle?: string;
  deliverablesTitle?: string;
};

export function OverviewSection({
  description,
  deliverables,
  title = 'What We Offer',
  subTitle = 'Overview',
  deliverablesTitle = 'What You Get',
}: OverviewSectionProps) {
  return (
    <Section className="relative overflow-hidden bg-white py-20 lg:py-28 dark:bg-slate-950">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[400px] w-[400px] rounded-full bg-blue-50 opacity-50 blur-3xl dark:bg-blue-900/10" />

      <Container size="6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Left Column: Content (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Layers className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                  {subTitle}
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-white">
                {title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                {description}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                <div className="h-px w-8 bg-slate-300 dark:bg-slate-700"></div>
                <span>Comprehensive Solution</span>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Floating Deliverables Card (5 cols) */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="group relative">
                {/* Decorative blobs behind card */}
                <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 opacity-20 blur transition duration-500 group-hover:opacity-40"></div>

                {/* Main Card */}
                <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                  {/* Card Header */}
                  <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-emerald-100 p-2 dark:bg-emerald-900/30">
                        <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">{deliverablesTitle}</h3>
                        <p className="text-xs text-slate-500">
                          Includes
                          {deliverables?.length || 0}
                          {' '}
                          key items
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* List */}
                  {deliverables && (
                    <ul className="space-y-4">
                      {deliverables.map((item, i) => (
                        <li key={i} className="group/item flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500 transition-transform group-hover/item:scale-110" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Card Footer */}
                  <div className="mt-8 flex items-center justify-center border-t border-slate-100 pt-4 dark:border-slate-800">
                    <span className="flex items-center text-xs font-semibold text-slate-400">
                      View full details below
                      {' '}
                      <ChevronRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </Container>
    </Section>
  );
}
