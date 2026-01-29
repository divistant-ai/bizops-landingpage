'use client';

import type { Testimonial } from '@/data/testimonialsData';
import { ArrowRight, Quote, Star, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layout';
import { Badge, Button, Stack } from '@/components/ui';
import { InfiniteScrollLoop } from '@/components/ui/LazyComponents';
import { industryColors, testimonials } from '@/data/testimonialsData';
import { sectionPaddingHybrid } from '@/design-tokens';

type TestimonialCardProps = {
  testimonial: Testimonial;
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const colors = industryColors[testimonial.industry] || {
    bg: 'bg-slate-50 dark:bg-slate-900',
    text: 'text-slate-600 dark:text-slate-400',
    gradient: 'from-slate-500 to-slate-600',
  };

  return (
    <div className="group relative mx-3 w-[320px] flex-shrink-0 sm:w-[380px]">
      <div className="group-hover:border-primary-200 dark:group-hover:border-primary-700 relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
        {/* Gradient accent top */}
        <div className={`absolute top-0 right-0 left-0 h-1 bg-gradient-to-r ${colors.gradient}`} />

        <div className="p-6">
          {/* Header: Industry + Stars */}
          <div className="mb-4 flex items-center justify-between">
            <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text}`}>
              {testimonial.industry}
            </span>
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="relative mb-5">
            <Quote className="absolute -top-1 -left-1 h-6 w-6 rotate-180 text-slate-200 dark:text-slate-700" aria-hidden="true" />
            <blockquote className="pl-5">
              <p className="line-clamp-4 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                {testimonial.quote}
              </p>
            </blockquote>
          </div>

          {/* Author Info with Photo */}
          <div className="mb-4 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
            <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full shadow-md ring-2 ring-white dark:ring-slate-800">
              <Image
                src={testimonial.avatar}
                alt={testimonial.author}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                {testimonial.author}
              </p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">
                {testimonial.role}
                ,
                {testimonial.company}
              </p>
            </div>
          </div>

          {/* Metrics - Compact */}
          <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 p-3 dark:from-slate-800 dark:to-slate-800/50">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {testimonial.metrics.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-400 line-through dark:text-slate-500">
                {testimonial.metrics.before}
              </span>
              <ArrowRight className="h-3 w-3 text-slate-400" aria-hidden="true" />
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                {testimonial.metrics.after}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const t = useTranslations('Homepage');

  return (
    <Section
      id="testimonials"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-950 dark:via-slate-900/50 dark:to-slate-950"
      noPadding
      containerClassName={sectionPaddingHybrid.default}
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />

      {/* Header */}
      <Stack
        direction="vertical"
        gap={6}
        className="relative z-10 mb-10 items-center justify-between md:flex-row md:items-end"
      >
        <div className="max-w-2xl text-center md:text-left">
          <Badge variant="outline-white" className="mb-4">
            Hasil Nyata
          </Badge>
          <h2 className="text-2xl leading-tight font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white">
            Dipercaya oleh
            {' '}
            <span className="text-teal-600 dark:text-teal-400">
              Pemimpin Industri
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
            Lihat bagaimana perusahaan Indonesia bertransformasi dengan BizOps.
          </p>
        </div>
        <Button asChild size="md" variant="white" className="group">
          <Link href="/customers">
            Lihat Semua Cerita
            {' '}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </Stack>

      {/* Testimonials Infinite Scroll */}
      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <InfiniteScrollLoop speed={25} direction="left" className="py-4">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </InfiniteScrollLoop>
      </div>
    </Section>
  );
}
