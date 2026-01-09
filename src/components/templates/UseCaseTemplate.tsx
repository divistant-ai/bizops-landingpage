'use client';

import type { UseCase } from '@/data/useCasesContent';
import { CheckCircle2, Layers, Lightbulb, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Container, Section } from '@/components/layout';
import { Badge, Button } from '@/components/ui';
import { FadeIn, FadeInStagger } from '@/components/ui/FadeIn';

type UseCaseWithTransformedIcon = Omit<UseCase, 'icon'> & {
  icon: React.ReactNode;
};
type UseCaseTemplateProps = {
  data: UseCaseWithTransformedIcon;
};

export function UseCaseTemplate({ data }: UseCaseTemplateProps) {
  // Icon is already transformed in the server component as ReactNode
  const icon = data.icon;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <Section className="relative overflow-hidden bg-slate-50 pt-20 pb-20 text-slate-900 dark:bg-slate-900 dark:text-white">
        <Container size="4xl" className="relative z-10 text-center">
          <div
            className={`inline-flex items-center justify-center rounded-2xl p-3${data.color}-500/20 text-${data.color}-300 ring- mb-8 ring-1${data.color}-500/30`}
          >
            {icon}
          </div>
          <h2 className="text-primary-600 dark:text-primary-400 mb-4 text-lg font-bold tracking-wider uppercase">
            <span className="text-slate-800 dark:text-white">
              {data.industry}
              {' '}
              Case Study
            </span>
          </h2>
          <h1 className="mb-6 text-4xl leading-tight font-extrabold text-slate-900 md:text-6xl dark:text-white">
            <span className="text-slate-800 dark:text-white">{data.title}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-2xl leading-relaxed font-light text-slate-600 dark:text-slate-400">
            <span className="text-slate-800 dark:text-white">{data.subtitle}</span>
          </p>
        </Container>
      </Section>

      {/* Challenge & Solution Grid */}
      <Section className="relative z-20 -mt-16">
        <Container size="6xl">
          <FadeInStagger>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Challenge Card */}
              <FadeIn>
                <div className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <TrendingUp className="h-6 w-6 rotate-180" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    <span className="text-slate-800 dark:text-white">The Challenge</span>
                  </h3>
                  <p className="flex-grow text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                    <span className="text-slate-800 dark:text-white">
                      "
                      {data.challenge}
                      "
                    </span>
                  </p>
                </div>
              </FadeIn>

              {/* Solution Card */}
              <FadeIn>
                <div className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-100 p-10 text-slate-900 shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:text-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold">
                    <span className="text-slate-800 dark:text-white">The BizOps Solution</span>
                  </h3>
                  <p className="flex-grow text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="text-slate-800 dark:text-white">{data.solution}</span>
                  </p>
                </div>
              </FadeIn>
            </div>
          </FadeInStagger>
        </Container>
      </Section>

      {/* Results Section */}
      <Section className="border-y border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <Container size="5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              <span className="text-slate-800 dark:text-white">Impact & Results</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              <span className="text-slate-800 dark:text-white">
                Dampak nyata implementasi sistem terhadap operasional bisnis.
              </span>
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {data.results.map((result, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="hover:border-primary-200 dark:hover:border-primary-700 h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center transition-colors dark:border-slate-800 dark:bg-slate-900">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <p className="text-lg font-medium text-slate-800 dark:text-slate-300">
                    <span className="text-slate-800 dark:text-white">{result}</span>
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tech Stack */}
      <Section className="bg-slate-50 dark:bg-slate-950">
        <Container size="4xl" className="text-center">
          <h3 className="mb-8 flex items-center justify-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
            <Layers className="h-5 w-5 text-neutral-500" />
            {' '}
            <span className="text-slate-800 dark:text-white">Technology Stack Used</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {data.techStack.map((tech, i) => (
              <Badge
                key={i}
                variant="outline"
                className="border-neutral-300 bg-white px-4 py-2 text-base text-neutral-700 dark:border-neutral-700 dark:bg-slate-800 dark:text-neutral-300"
              >
                <span className="text-slate-800 dark:text-white">{tech}</span>
              </Badge>
            ))}
          </div>

          <div className="mt-20">
            <div className="bg-primary-600 shadow-primary-600/30 rounded-3xl p-10 text-center text-white shadow-2xl md:p-16">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                <span className="text-slate-800 dark:text-white">Hadapi Masalah Serupa?</span>
              </h2>
              <p className="text-primary-100 mx-auto mb-10 max-w-2xl text-xl">
                <span className="text-slate-800 dark:text-white">
                  Jangan biarkan inefisiensi memakan profit Anda. Diskusikan solusi yang tepat
                  dengan tim ahli kami.
                </span>
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="white" className="text-primary-600 w-full sm:w-auto">
                    <span className="text-slate-600 dark:text-white">Konsultasi Gratis</span>
                  </Button>
                </Link>
                <Link href="/use-cases">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white/10 sm:w-auto"
                  >
                    <span className="text-slate-600 dark:text-white">Lihat Studi Kasus Lain</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
