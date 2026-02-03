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
};

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  caseStudyTitle,
  caseStudy,
  testimonial,
}) => {
  const t = useTranslations('GenericLandingPage');

  if (!caseStudy && !testimonial) {
    return null;
  }

  return (
    <Section className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      <div className="bg-primary-600/10 absolute top-0 right-0 h-[600px] w-[600px] rounded-full blur-[120px]"></div>

      <Container size="6xl" className="relative z-10">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            {caseStudyTitle && (
              <div className="mb-6 inline-block rounded-full border border-green-500/30 bg-green-500/20 px-3 py-1 text-xs font-bold tracking-wider text-green-500 uppercase dark:text-green-300">
                {t('impact_story')}
              </div>
            )}
            <h2 className="mb-6 text-3xl leading-tight font-bold md:text-4xl">
              {caseStudyTitle || t('real_results')}
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-slate-900 dark:text-slate-400">
              {caseStudy || t('see_transformation')}
            </p>
            <Button variant="white" className="rounded-full">
              {t('read_full_case')}
              {' '}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {testimonial && (
            <div className="relative rounded-3xl border border-white/10 bg-slate-50 p-8 backdrop-blur-md md:p-10 dark:bg-white/10">
              <Quote className="text-primary-400 mb-6 h-10 w-10 opacity-50" />
              <p className="mb-8 text-lg leading-relaxed font-medium text-slate-950 italic md:text-xl dark:text-white">
                "
                {testimonial.quote}
                "
              </p>
              <div className="flex items-center gap-4">
                <div className="border-primary-500 relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-2 bg-neutral-700 text-lg font-bold text-slate-800 dark:text-white">
                  {testimonial.avatar?.includes('http')
                    ? (
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      )
                    : (
                        testimonial.author.charAt(0)
                      )}
                </div>
                <div>
                  <div className="font-bold text-slate-800 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-primary-300 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};
