'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, MousePointer, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { usePathname } from '@/libs/I18nNavigation';
import {
  companyContent,
  platformContent,
  resourcesContent,
  servicesContent,
  solutionsContent,
} from '../../data/navData';
import { navDataTranslations } from '../../data/navDataTranslations';
import Button from '../ui/Button';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onDemoClick: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onDemoClick }) => {
  const t = useTranslations('Navbar');
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const locale = useLocale() as 'en' | 'id';
  const nt = navDataTranslations[locale];

  // Helper to get translation key from URL path
  const getItemKeyFromUrl = (url: string): string | null => {
    // Platform modules
    if (url.includes('/people')) {
      return 'people';
    }
    if (url.includes('/money')) {
      return 'money';
    }
    if (url.includes('/growth')) {
      return 'growth';
    }
    if (url.includes('/supply')) {
      return 'supply';
    }
    if (url.includes('/work')) {
      return 'work';
    }
    if (url.includes('/care')) {
      return 'care';
    }
    if (url.includes('/hub')) {
      return 'hub';
    }

    // Platform capabilities
    if (url.includes('/ai-assistant')) {
      return 'automation';
    }
    if (url.includes('/multi-company-management')) {
      return 'multiCompany';
    }
    if (url.includes('/portals')) {
      return 'portals';
    }
    if (url.includes('/analytics')) {
      return 'analytics';
    }
    if (url.includes('/mobile')) {
      return 'mobile';
    }
    if (url.includes('/low-code')) {
      return 'lowCode';
    }
    if (url.includes('/collaboration')) {
      return 'collaboration';
    }

    // Solutions - industry
    if (url.includes('/construction')) {
      return 'construction';
    }
    if (url.includes('/retail')) {
      return 'retail';
    }
    if (url.includes('/outsourcing')) {
      return 'outsourcing';
    }
    if (url.includes('/manufacturing')) {
      return 'manufacturing';
    }
    if (url.includes('/consulting')) {
      return 'consulting';
    }
    if (url.includes('/enterprise')) {
      return 'enterprise';
    }
    if (url.includes('/travel')) {
      return 'travel';
    }
    if (url.includes('/bfsi')) {
      return 'bfsi';
    }
    if (url.includes('/realestate')) {
      return 'realestate';
    }
    if (url.includes('/healthcare')) {
      return 'healthcare';
    }
    if (url.includes('/fnb')) {
      return 'fnb';
    }
    if (url.includes('/logistics')) {
      return 'logistics';
    }

    return null;
  };

  const getTranslatedItem = (type: string, url: string) => {
    const key = getItemKeyFromUrl(url);
    if (!key) {
      return null;
    }

    if (type === 'platform') {
      return (nt.platform.modules.items as any)[key] || (nt.platform.capabilities.items as any)[key] || (nt.platform.technology.items as any)[key];
    }
    if (type === 'solutions') {
      return (nt.solutions.industry.items as any)[key] || (nt.solutions.role.items as any)[key];
    }
    return null;
  };

  const location = usePathname();

  useEffect(() => {
    setMobilePlatformOpen(false);
    setMobileSolutionsOpen(false);
    setMobileServicesOpen(false);
    setMobileResourcesOpen(false);
    setMobileCompanyOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const AccordionItem = ({
    title,
    isOpen,
    onToggle,
    children,
  }: {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
  }) => (
    <div className="overflow-hidden rounded-xl border border-slate-200/80 shadow-sm dark:border-slate-800/50">
      <button
        onClick={onToggle}
        className="focus-visible:ring-primary-500 flex w-full items-center justify-between bg-slate-50/80 px-5 py-4 text-base font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-100 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:bg-slate-900/50 dark:text-white dark:hover:bg-slate-800"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-all duration-200 ${isOpen ? 'text-primary-600 dark:text-primary-400 rotate-180' : 'text-slate-400'}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden bg-white dark:bg-slate-950"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md overflow-y-auto bg-white shadow-2xl lg:hidden dark:bg-slate-950"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/95 px-5 py-4 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
              <span className="text-lg font-bold text-slate-900 dark:text-white">{t('menu')}</span>
              <button
                onClick={onClose}
                className="focus-visible:ring-primary-500 rounded-lg p-2 text-slate-500 transition-all duration-200 hover:scale-105 hover:bg-slate-100 hover:text-slate-900 focus-visible:ring-2 focus-visible:outline-none active:scale-95 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                aria-label={t('close_menu')}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-3 p-5 pb-24">
              {/* Platform Accordion */}
              <AccordionItem
                title={t('platform')}
                isOpen={mobilePlatformOpen}
                onToggle={() => setMobilePlatformOpen(!mobilePlatformOpen)}
              >
                <div className="space-y-6 p-4">
                  {/* Core Modules */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('core_modules')}
                    </div>
                    <div className="space-y-2">
                      {platformContent.modules?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('capabilities')}
                    </div>
                    <div className="space-y-2">
                      {platformContent.capabilities?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Technology */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('technology')}
                    </div>
                    <div className="space-y-2">
                      {platformContent.technology?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Tour */}
                  <div className="pt-2">
                    <Link
                      href="/product-tour"
                      onClick={onClose}
                      className="bg-primary-50 text-primary-700 hover:bg-primary-100 dark:bg-primary-900/20 dark:text-primary-400 dark:hover:bg-primary-900/30 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold transition-colors"
                    >
                      <MousePointer className="h-4 w-4" />
                      {t('interactive_tour')}
                    </Link>
                  </div>
                </div>
              </AccordionItem>

              {/* Solutions Accordion */}
              <AccordionItem
                title={t('solutions')}
                isOpen={mobileSolutionsOpen}
                onToggle={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
              >
                <div className="space-y-6 p-4">
                  {/* By Industry */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('by_industry')}
                    </div>
                    <div className="space-y-2">
                      {solutionsContent.industry?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('solutions', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('solutions', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* By Role */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('by_role')}
                    </div>
                    <div className="space-y-2">
                      {solutionsContent.role?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('solutions', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('solutions', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* Services Accordion */}
              <AccordionItem
                title={t('services')}
                isOpen={mobileServicesOpen}
                onToggle={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <div className="space-y-6 p-4">
                  {/* Business Services */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('business_services')}
                    </div>
                    <div className="space-y-2">
                      {servicesContent.business?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Technical Services */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('technical_services')}
                    </div>
                    <div className="space-y-2">
                      {servicesContent.technical?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* Resources Accordion */}
              <AccordionItem
                title={t('resources')}
                isOpen={mobileResourcesOpen}
                onToggle={() => setMobileResourcesOpen(!mobileResourcesOpen)}
              >
                <div className="space-y-6 p-4">
                  {/* Insights & News */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('insights_news')}
                    </div>
                    <div className="space-y-2">
                      {resourcesContent.insights?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Customer Tools */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('customer_tools')}
                    </div>
                    <div className="space-y-2">
                      {resourcesContent['customer-tools']?.items.slice(0, 5).map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                      <Link
                        href="/tools"
                        onClick={onClose}
                        className="text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-primary-900/20 flex items-center gap-3 rounded-lg p-2 text-sm font-medium transition-colors"
                      >
                        {t('view_all_tools')}
                      </Link>
                    </div>
                  </div>

                  {/* Strategic Tools */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('strategic_tools')}
                    </div>
                    <div className="space-y-2">
                      {resourcesContent['strategic-tools']?.items.slice(0, 4).map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Support */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('support')}
                    </div>
                    <div className="space-y-2">
                      {resourcesContent.support?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* Company Accordion */}
              <AccordionItem
                title={t('company')}
                isOpen={mobileCompanyOpen}
                onToggle={() => setMobileCompanyOpen(!mobileCompanyOpen)}
              >
                <div className="space-y-6 p-4">
                  {/* Our Story */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('our_story')}
                    </div>
                    <div className="space-y-2">
                      {companyContent.story?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Ecosystem */}
                  <div>
                    <div className="mb-3 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                      {t('ecosystem')}
                    </div>
                    <div className="space-y-2">
                      {companyContent.ecosystem?.items.map(item => (
                        <Link
                          key={item.to}
                          href={item.to}
                          onClick={onClose}
                          className="hover:text-primary-600 dark:hover:text-primary-400 focus-visible:ring-primary-500 flex items-center gap-3 rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          <item.icon className="h-5 w-5 text-slate-400" />
                          <div className="flex flex-col">
                            <span>{getTranslatedItem('platform', item.to)?.label || item.label}</span>
                            {item.desc && (
                              <span className="text-xs text-slate-400 dark:text-slate-500">
                                {getTranslatedItem('platform', item.to)?.desc || item.desc}
                              </span>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionItem>

              {/* Direct Links */}
              <Link
                href="/pricing"
                onClick={onClose}
                className="focus-visible:ring-primary-500 flex w-full items-center justify-between rounded-xl border border-slate-200/80 bg-slate-50/80 px-5 py-4 text-base font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-100 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:border-slate-800/50 dark:bg-slate-900/50 dark:text-white dark:hover:bg-slate-800"
              >
                {t('pricing')}
              </Link>

              {/* Mobile Login & CTA */}
              <div className="mt-6 space-y-3 border-t border-slate-200 pt-6 dark:border-slate-800">
                {/* <Link
                  href="/login"
                  onClick={onClose}
                  className="focus-visible:ring-primary-500 flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
                >
                  {t('login')}
                </Link> */}
                <Button
                  fullWidth
                  size="lg"
                  onClick={onDemoClick}
                  className="rounded-xl text-slate-800 shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] dark:text-white"
                >
                  {t('book_demo')}
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
