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
    <div className="border-b border-slate-200 last:border-b-0 dark:border-slate-700">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-blue-600 dark:hover:text-blue-400"
      >
        <span className="pr-4 text-base font-semibold text-slate-900 dark:text-white">
          {question}
        </span>
        <ChevronRight
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-300 dark:text-slate-400 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      <div
        id={contentId}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="pr-8 leading-relaxed text-slate-600 dark:text-slate-400">{answer}</p>
      </div>
    </div>
  );
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs, title = 'Frequently Asked Questions' }) => {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <Section className="bg-white dark:bg-slate-900">
      <Container size="4xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
