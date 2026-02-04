/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';

import {
  ArrowUpRight,
  CheckCircle,
  ChevronRight,
  Instagram,
  Linkedin,
  MapPin,
  Moon,
  ShieldCheck,
  Signal,
  Sun,
  Twitter,
  Youtube,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

import { subscribeToNewsletter } from '@/app/actions/newsletter';
import { usePathname } from '@/libs/I18nNavigation';
import { routing } from '@/libs/I18nRouting';

// SVG Assets for App Stores
const AppleIcon = () => (
  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" role="img" aria-label="Apple Logo">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.74 1.6.19 2.72.79 3.42 1.82-3.06 1.86-2.51 5.71.6 7.02-.62 1.58-1.53 3.14-2.79 4.13zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg
    className="h-5 w-5 fill-current"
    viewBox="0 0 24 24"
    role="img"
    aria-label="Google Play Logo"
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.89l1.434 1.433 4.505-2.503a1 1 0 0 0 .003-1.737l-4.507-2.505-1.435 1.435zm-9.98 10.208l10.66-10.66 2.452 2.45-11.793 6.552a1 1 0 0 1-1.319-1.658zM4.52 1.088l11.795 6.553-2.454 2.45-10.66-10.66A1 1 0 0 1 4.52 1.088z" />
  </svg>
);

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
};

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  children,
  isExternal = false,
  icon: Icon,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={`group flex items-center gap-2 py-1 text-[14px] transition-colors ${isActive ? 'font-medium text-slate-900 dark:text-white' : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-blue-400'}`}
      >
        {Icon && (
          <Icon
            className={`h-3.5 w-3.5 ${isActive ? 'text-primary-600 dark:text-blue-400' : 'group-hover:text-primary-600 text-slate-400 dark:text-slate-500 dark:group-hover:text-blue-400'} transition-colors`}
          />
        )}
        <span className="inline-block truncate transition-transform duration-200 group-hover:translate-x-1">
          {children}
        </span>
        {isExternal && (
          <ArrowUpRight className="h-3 w-3 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-500" />
        )}
      </Link>
    </li>
  );
};

type SocialLinkProps = {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-blue-500/50 dark:hover:bg-slate-800 dark:hover:text-blue-400"
  >
    <Icon className="h-4 w-4" />
  </a>
);

type FooterLinkGroupProps = {
  title: string;
  children: React.ReactNode;
};

const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6 border-b border-slate-200 pb-6 md:border-none md:pb-0 dark:border-slate-800">
      <div
        className="group flex cursor-pointer items-center justify-between select-none md:cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xs font-bold tracking-widest text-slate-900 uppercase transition-colors md:group-hover:text-slate-900 dark:text-white dark:group-hover:text-white dark:md:group-hover:text-white">
          {title}
        </h3>
        <ChevronRight
          className={`h-4 w-4 text-slate-400 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-90 text-blue-600 dark:text-blue-400' : ''}`}
        />
      </div>

      <div
        className={`space-y-3 overflow-hidden transition-all duration-300 ${isOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0 md:mt-0 md:max-h-full md:opacity-100'}`}
      >
        {children}
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  const t = useTranslations('Footer');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by rendering theme toggle only on client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError(t('email_required'));
      return;
    }

    startTransition(async () => {
      const formData = new FormData();
      formData.append('email', email);

      const result = await subscribeToNewsletter(formData);

      if (result.success) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => {
          setSubscribed(false);
        }, 3000);
      } else {
        setError(result.error || t('error_occurred'));
      }
    });
  };

  return (
    <footer className="relative z-10 overflow-hidden border-t border-slate-200 bg-slate-50 font-sans text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      {/* Ambient Background Glow - Subtler in dark mode */}
      <div className="pointer-events-none absolute top-0 -left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/5" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[100px] dark:bg-indigo-500/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8 sm:px-6 lg:px-8">
        {/* MAIN GRID */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:mb-16 md:grid-cols-12 md:gap-12 xl:gap-12">
          {/* BRAND COLUMN (Left) */}
          <div className="flex flex-col items-start space-y-8 md:col-span-12 lg:col-span-4">
            <Link
              href="/"
              className="group flex items-center focus:outline-none"
              aria-label="BizOps Home"
            >
              <Image
                src={
                  mounted && resolvedTheme === 'dark'
                    ? '/assets/images/Logo BizOps - Dark.svg'
                    : '/assets/images/Logo BizOps - Light.svg'
                }
                alt="BizOps Logo"
                width={120}
                height={40}
                className="transition-all duration-200 group-hover:opacity-90"
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>

            <p className="w-full text-sm leading-relaxed text-slate-600 md:max-w-sm dark:text-slate-400">
              {t('description')}
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-900 dark:text-slate-500">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="mb-1 text-xs font-bold tracking-wider text-slate-900 uppercase dark:text-white">
                    {t('headquarters')}
                  </p>
                  <span className="block text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {t('company_name')}
                    <br />
                    {t('address_line1')}
                    <br />
                    {t('address_line2')}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-6">
                <SocialLink
                  href="https://linkedin.com/company/bizops"
                  icon={Linkedin}
                  label="LinkedIn"
                />
                <SocialLink href="https://twitter.com/bizops" icon={Twitter} label="Twitter" />
                <SocialLink href="https://youtube.com/@bizops" icon={Youtube} label="YouTube" />
                <SocialLink
                  href="https://instagram.com/bizops.id"
                  icon={Instagram}
                  label="Instagram"
                />
              </div>
            </div>
          </div>

          {/* LINKS COLUMNS (Middle) */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-12 lg:col-span-5 lg:gap-8">
            <FooterLinkGroup title={t('platform')}>
              <ul className="space-y-3">
                <FooterLink href="/platform">{t('overview')}</FooterLink>
                <FooterLink href="/platform/modules/hr">{t('hr_system')}</FooterLink>
                <FooterLink href="/platform/modules/finance">{t('finance')}</FooterLink>
                <FooterLink href="/platform/modules/operations">{t('operations')}</FooterLink>
                <FooterLink href="/platform/technologies/integration">
                  {t('integrations')}
                </FooterLink>
                <FooterLink href="/pricing">{t('pricing')}</FooterLink>
              </ul>
            </FooterLinkGroup>

            <FooterLinkGroup title={t('company')}>
              <ul className="space-y-3">
                <FooterLink href="/about">{t('about_us')}</FooterLink>
                <FooterLink href="/customers">{t('customers')}</FooterLink>
                <FooterLink href="/partners">{t('partners')}</FooterLink>
                <FooterLink href="/careers">{t('careers')}</FooterLink>
                <FooterLink href="/media-kit">{t('media_kit')}</FooterLink>
                <FooterLink href="/contact">{t('contact')}</FooterLink>
              </ul>
            </FooterLinkGroup>

            <FooterLinkGroup title={t('resources')}>
              <ul className="space-y-3">
                <FooterLink href="/blog">{t('blog')}</FooterLink>
                <FooterLink href="/docs">{t('docs')}</FooterLink>
                <FooterLink href="/tools/roi-calculator">{t('roi_calc')}</FooterLink>
                <FooterLink href="/tools/assessment">{t('assessment')}</FooterLink>
                <FooterLink href="/trust" icon={ShieldCheck}>
                  {t('trust_center')}
                </FooterLink>
                <FooterLink href="/status" icon={Signal}>
                  {t('status')}
                </FooterLink>
              </ul>
            </FooterLinkGroup>
          </div>

          {/* NEWSLETTER (Right) */}
          <div className="space-y-8 md:col-span-12 lg:col-span-3">
            <div className="relative space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {t('stay_updated')}
              </h3>

              {subscribed
                ? (
                    <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4 text-green-700 dark:bg-green-500/10 dark:text-green-400">
                      <CheckCircle className="h-5 w-5 shrink-0" />
                      <span className="text-sm font-medium">{t('subscribed_success')}</span>
                    </div>
                  )
                : (
                    <form onSubmit={handleSubscribe} className="relative">
                      <div className="relative flex items-center">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setError(null);
                          }}
                          placeholder={t('email_placeholder')}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pr-12 pl-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500"
                          required
                          disabled={isPending}
                        />
                        <button
                          type="submit"
                          aria-label="Subscribe"
                          disabled={isPending}
                          className="absolute right-1.5 rounded-lg bg-slate-900 p-1.5 text-white transition-all hover:bg-slate-800 disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-500"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                      {error && (
                        <p className="mt-2 text-xs text-red-500 dark:text-red-400">
                          {error}
                        </p>
                      )}
                    </form>
                  )}
            </div>

            {/* Mobile Apps */}
            <div className="space-y-4">
              <h3 className="text-[11px] font-bold tracking-widest text-slate-500 uppercase dark:text-slate-400">
                {t('mobile_app')}
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://apps.apple.com/id/app/bizops/id6733236612?l=id"
                  target="_blank"
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">
                    <AppleIcon />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase dark:text-slate-500">
                      {t('download_on')}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {t('app_store')}
                    </div>
                  </div>
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.divistant.ex_mobile.ex_mobile"
                  target="_blank"
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-white">
                    <PlayStoreIcon />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase dark:text-slate-500">
                      {t('get_it_on')}
                    </div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      {t('google_play')}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 md:flex-row dark:border-slate-800">
          <div className="flex flex-col text-center md:text-left">
            <p className="text-sm text-slate-500 dark:text-slate-500">
              ©
              {' '}
              {new Date().getFullYear()}
              {' '}
              BizOps. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 dark:border-slate-800 dark:bg-slate-900">
            {routing.locales.map(loc => (
              <button
                key={loc}
                onClick={() => {
                  router.push(`/${loc}${pathname}`);
                  router.refresh();
                }}
                className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all ${
                  locale === loc
                    ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                {loc.toUpperCase()}
              </button>
            ))}
            <div className="mx-1 h-4 w-px bg-slate-200 dark:bg-slate-800" />
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="group flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              <Sun className="h-3.5 w-3.5 dark:hidden" />
              <Moon className="hidden h-3.5 w-3.5 dark:block" />
              <span>{mounted ? (resolvedTheme === 'dark' ? 'Dark' : 'Light') : 'Theme'}</span>
            </button>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/legal/privacy" className="text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white">{t('privacy')}</Link>
            <Link href="/legal/terms" className="text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white">{t('terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
