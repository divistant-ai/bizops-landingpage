'use client';

import { LanguagesIcon } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState, useTransition } from 'react';

import { usePathname } from '@/libs/I18nNavigation';

const languages = [
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'en', name: 'English' },
];

export const LanguageSwitch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [_, startTransition] = useTransition();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    // Close dropdown on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const changeLanguage = (langCode: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(`/${langCode}${pathname}`);
    });
  };

  return (
    <div className="relative z-30" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="focus-visible:ring-primary-500 flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition-all duration-200 hover:scale-105 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white"
        aria-label="Change Language"
      >
        <LanguagesIcon className="h-5 w-5" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-[110] mt-2 w-56 rounded-lg border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-700 dark:bg-slate-800">
          {languages.map(lang => (
            <button
              key={lang.code}
              type="button"
              onClick={() => changeLanguage(lang.code)}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-700/50 ${
                locale === lang.code
                  ? 'text-primary-600 bg-slate-50 dark:bg-slate-700/50 dark:text-white'
                  : 'text-slate-700 dark:text-slate-300'
              }`}
            >
              <span className="flex-1 text-left">{lang.name}</span>
              {locale === lang.code && (
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
