'use client';

import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';

import { Container, Section } from '@/components/layout';

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: FAQ[];
  title?: string;
};

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const id = React.useId();
  const contentId = `faq-content-${id}`;

  return (
    <div className="overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors"
      >
        <span className={`pr-4 text-base font-semibold transition-colors ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-slate-900 dark:text-white'}`}>
          {question}
        </span>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? 'rotate-180 bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'}`}>
          <ChevronRight className="h-4 w-4" />
        </div>
      </button>
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-6 pb-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {answer}
        </p>
      </div>
    </div>
  );
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs, title = 'Frequently Asked Questions' }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Split FAQs into two columns for better reading on desktop
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midpoint);
  const rightColumnFaqs = faqs.slice(midpoint);

  const Column = ({ items }: { items: FAQ[] }) => (
    <div className="flex flex-col gap-4">
      {items.map((faq, idx) => (
        <React.Fragment key={idx}>
          {/* FAQ Item with Glassmorphism */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-1 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-blue-900">
            <FAQItem question={faq.question} answer={faq.answer} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <Section className="relative overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-500/5 blur-[100px]" />

      <Container size="7xl" className="relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Everything you need to know about the platform and billing.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <Column items={leftColumnFaqs} />
          <Column items={rightColumnFaqs} />
        </div>
      </Container>
    </Section>
  );
};
