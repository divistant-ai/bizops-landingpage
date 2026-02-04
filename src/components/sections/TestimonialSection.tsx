'use client';

import { ChevronRight, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
};

type TestimonialSectionProps = {
  caseStudyTitle?: string;
  caseStudy?: string;
  testimonial?: Testimonial;
  testimonials?: Testimonial[];
};

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  caseStudyTitle,
  caseStudy,
  testimonial,
  testimonials = [],
}) => {
  const t = useTranslations('GenericLandingPage');
  const allTestimonials = testimonial ? [testimonial, ...testimonials] : testimonials;

  if (!caseStudy && allTestimonials.length === 0) {
    return null;
  }

  return (
    <Section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      {/* Premium Background Effects */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-[-10%] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] translate-x-1/3 translate-y-[20%] rounded-full bg-purple-600/10 blur-[120px]" />

      <Container size="7xl" className="relative z-10">
        <div className="grid items-start gap-20 lg:grid-cols-2">

          {/* Left Column: Impact Story */}
          <div className="sticky top-32">
            {caseStudyTitle && (
              <span className="mb-6 inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-emerald-400 uppercase">
                {t('impact_story')}
              </span>
            )}
            <h2 className="mb-6 text-4xl leading-tight font-bold tracking-tight md:text-5xl">
              {caseStudyTitle || t('real_results')}
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-slate-300">
              {caseStudy || t('see_transformation')}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-full bg-white text-slate-900 hover:bg-slate-100 dark:bg-white dark:text-slate-900">
                {t('read_full_case')}
                {' '}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="mb-4 text-xs font-semibold tracking-wider text-slate-500 uppercase">Trusted results</p>
              <div className="flex gap-12">
                <div>
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-xs text-slate-400">Retention Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">2.5x</div>
                  <div className="text-xs text-slate-400">ROI Average</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Testimonials Stack */}
          <div className="flex flex-col gap-6">
            {allTestimonials.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:shadow-2xl">
                <Quote className="absolute top-8 right-8 h-12 w-12 text-white/5 transition-colors group-hover:text-white/10" />

                <p className="relative z-10 mb-8 text-xl leading-relaxed font-medium text-slate-200">
                  "
                  {item.quote}
                  "
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-white/20 bg-slate-800">
                    {item.avatar?.includes('http') ? (
                      <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white">
                        {item.author.charAt(0)}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-white">{item.author}</div>
                    <div className="text-sm text-slate-400">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
};
