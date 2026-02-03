'use client';

import { ChevronRight, Download, MousePointer, Phone } from 'lucide-react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  companyContent,
  companyTabs,
  platformContent,
  platformTabs,
  resourcesContent,
  resourcesTabs,
  solutionsContent,
  solutionsTabs,
} from '../../data/navData';
import { navDataTranslations } from '../../data/navDataTranslations';

type MegaMenuProps = {
  type: 'platform' | 'solutions' | 'resources' | 'company';
  isOpen?: boolean;
  onClose?: () => void;
};

const MegaMenu: React.FC<MegaMenuProps> = ({ type, isOpen = false, onClose }) => {
  const locale = useLocale() as 'en' | 'id';
  const t = navDataTranslations[locale];

  const getTabs = () => {
    switch (type) {
      case 'platform':
        return platformTabs;
      case 'solutions':
        return solutionsTabs;
      case 'resources':
        return resourcesTabs;
      case 'company':
        return companyTabs;
      default:
        return [];
    }
  };

  const getContent = () => {
    switch (type) {
      case 'platform':
        return platformContent;
      case 'solutions':
        return solutionsContent;
      case 'resources':
        return resourcesContent;
      case 'company':
        return companyContent;
      default:
        return {};
    }
  };

  const getDefaultTab = () => {
    switch (type) {
      case 'platform':
        return 'modules';
      case 'solutions':
        return 'industry';
      case 'resources':
        return 'insights';
      case 'company':
        return 'story';
      default:
        return '';
    }
  };

  // Get translated content for active tab
  const getTranslatedContent = (tabId: string) => {
    if (type === 'platform') {
      if (tabId === 'modules') {
        return t.platform.modules;
      }
      if (tabId === 'capabilities') {
        return t.platform.capabilities;
      }
      if (tabId === 'technology') {
        return t.platform.technology;
      }
    } else if (type === 'solutions') {
      if (tabId === 'industry') {
        return t.solutions.industry;
      }
      if (tabId === 'role') {
        return t.solutions.role;
      }
    } else if (type === 'resources') {
      if (tabId === 'insights') {
        return t.resources.insights;
      }
      if (tabId === 'customer-tools') {
        return t.resources.customerTools;
      }
      if (tabId === 'strategic-tools') {
        return t.resources.strategicTools;
      }
      if (tabId === 'slides') {
        return t.resources.slides;
      }
      if (tabId === 'support') {
        return t.resources.support;
      }
    } else if (type === 'company') {
      if (tabId === 'story') {
        return t.company.story;
      }
      if (tabId === 'ecosystem') {
        return t.company.ecosystem;
      }
    }
    return null;
  };

  // Helper to get translation key from URL path
  const getItemKeyFromUrl = (url: string): string | null => {
    // Platform modules
    if (url.includes('/hr')) {
      return 'hr';
    }
    if (url.includes('/finance')) {
      return 'finance';
    }
    if (url.includes('/operations')) {
      return 'operations';
    }
    if (url.includes('/sales')) {
      return 'sales';
    }
    if (url.includes('/supply-chain')) {
      return 'supplyChain';
    }
    if (url.includes('/governance')) {
      return 'governance';
    }

    // Platform capabilities
    if (url.includes('/automation-ai')) {
      return 'automation';
    }
    if (url.includes('/multi-company')) {
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

    // Platform technology
    if (url.includes('/integration')) {
      return 'integration';
    }
    if (url.includes('/self-hosted')) {
      return 'selfHosted';
    }
    if (url.includes('/architecture')) {
      return 'architecture';
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

    // Solutions - role
    if (url.includes('/ceo')) {
      return 'ceo';
    }
    if (url.includes('/role/finance')) {
      return 'finance';
    }
    if (url.includes('/role/hr')) {
      return 'hr';
    }
    if (url.includes('/role/it')) {
      return 'it';
    }
    if (url.includes('/role/ops')) {
      return 'ops';
    }

    // Resources - insights
    if (url.includes('/blog')) {
      return 'blog';
    }
    if (url.includes('/use-cases')) {
      return 'useCases';
    }
    if (url.includes('/customers')) {
      return 'customers';
    }
    if (url.includes('/events')) {
      return 'events';
    }

    // Resources - customer tools
    if (url === '/tools') {
      return 'allTools';
    }
    if (url.includes('/pajak-pph21')) {
      return 'pph21';
    }
    if (url.includes('/gaji-bersih')) {
      return 'takehome';
    }
    if (url.includes('/bpjs')) {
      return 'bpjs';
    }
    if (url.includes('/margin-markup')) {
      return 'margin';
    }
    if (url.includes('/invoice-checker')) {
      return 'invoice';
    }
    if (url.includes('/break-even')) {
      return 'breakeven';
    }
    if (url.includes('/efisiensi-produksi')) {
      return 'efficiency';
    }

    // Resources - strategic tools
    if (url.includes('/assessment')) {
      return 'assessment';
    }
    if (url.includes('/needs-analysis')) {
      return 'finder';
    }
    if (url.includes('/roi-calculator')) {
      return 'roi';
    }
    if (url.includes('/timeline-generator')) {
      return 'timeline';
    }
    if (url.includes('/pricing-calculator')) {
      return 'pricing';
    }
    if (url.includes('/biaya-turnover')) {
      return 'turnover';
    }
    if (url.includes('/comparisons')) {
      return 'comparison';
    }
    if (url.includes('/migration')) {
      return 'migration';
    }

    // Resources - slides
    if (url.includes('/slide/intro')) {
      return 'intro';
    }
    if (url.includes('/slide/onboarding')) {
      return 'onboarding';
    }

    // Resources - support
    if (url.includes('/docs')) {
      return 'docs';
    }
    if (url.includes('/status')) {
      return 'status';
    }

    // Company - story
    if (url === '/about') {
      return 'about';
    }
    if (url.includes('/why-bizops')) {
      return 'why';
    }
    if (url.includes('/trust')) {
      return 'trust';
    }
    if (url.includes('/media-kit')) {
      return 'media';
    }

    // Company - ecosystem
    if (url === '/partners') {
      return 'partners';
    }
    if (url.includes('/directory')) {
      return 'directory';
    }
    if (url.includes('/startup-program')) {
      return 'startup';
    }
    if (url.includes('/careers')) {
      return 'careers';
    }

    return null;
  };

  // Get translated tab label
  const getTranslatedTabLabel = (tabId: string) => {
    // Convert kebab-case to camelCase for resources tabs
    const tabKeyMap: Record<string, string> = {
      'customer-tools': 'customerTools',
      'strategic-tools': 'strategicTools',
    };

    const tabKey = tabKeyMap[tabId] || tabId;

    if (type === 'platform') {
      return t.platform.tabs[tabKey as keyof typeof t.platform.tabs];
    }
    if (type === 'solutions') {
      return t.solutions.tabs[tabKey as keyof typeof t.solutions.tabs];
    }
    if (type === 'resources') {
      return t.resources.tabs[tabKey as keyof typeof t.resources.tabs];
    }
    if (type === 'company') {
      return t.company.tabs[tabKey as keyof typeof t.company.tabs];
    }
    return tabId;
  };

  const tabs = getTabs();
  const content = getContent();
  const [activeTab, setActiveTab] = useState(getDefaultTab());

  const activeContent = content[activeTab];
  const translatedContent = getTranslatedContent(activeTab);

  const visibilityClasses = isOpen ? 'visible opacity-100' : 'invisible opacity-0';

  const handleBackdropClick = () => {
    onClose?.();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <>
      {/* Full screen clickable backdrop - clicking anywhere here closes the menu */}
      <div
        className={`fixed inset-0 top-[70px] z-90 transition-all duration-200 lg:top-[80px] ${visibilityClasses}`}
        onClick={handleBackdropClick}
        onKeyDown={e => e.key === 'Escape' && onClose?.()}
        role="button"
        tabIndex={-1}
        aria-label="Close menu"
      >
        {/* Semi-transparent overlay background */}
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" />

        {/* Centered container - clicking inside the white box won't close */}
        <div className="relative z-100 mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
          <div
            className="flex overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950"
            onClick={handleContentClick}
          >
            {/* Sidebar (Tabs) */}
            <div className="w-64 shrink-0 border-r border-slate-200 bg-slate-50 py-6 dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-3 px-4 text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
                {type === 'platform' && t.platform.sectionTitle}
                {type === 'solutions' && t.solutions.sectionTitle}
                {type === 'resources' && t.resources.sectionTitle}
                {type === 'company' && t.company.sectionTitle}
              </div>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onMouseEnter={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center justify-between border-l-4 px-5 py-3.5 text-left text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset ${
                    activeTab === tab.id
                      ? 'border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 bg-white shadow-sm dark:bg-slate-950'
                      : 'border-transparent text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white'
                  }`}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                >
                  <div className="flex items-center gap-3">
                    <tab.icon
                      className={`h-5 w-5 ${activeTab === tab.id ? 'text-primary-600 dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}
                    />
                    <p
                      className={`text-sm font-semibold ${activeTab === tab.id ? 'text-primary-600 dark:text-white' : 'text-slate-600 dark:text-slate-400'}`}
                    >
                      {getTranslatedTabLabel(tab.id)}
                    </p>
                  </div>
                  {activeTab === tab.id && (
                    <ChevronRight className="text-primary-600 h-4 w-4 dark:text-white" />
                  )}
                </button>
              ))}

              {/* Additional Links */}
              {type === 'platform' && (
                <div className="mt-6 px-4">
                  <Link
                    href="/product-tour"
                    onClick={onClose}
                    className="mb-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <MousePointer className="h-4 w-4 text-slate-600 dark:text-white" />
                    {t.platform.additionalLinks.interactiveTour}
                  </Link>
                  <Link
                    href="/download"
                    onClick={onClose}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                  >
                    <Download className="h-4 w-4" />
                    {t.platform.additionalLinks.downloadApps}
                  </Link>
                </div>
              )}

              {type === 'company' && (
                <div className="mt-6 px-4">
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="group/btn hover:border-primary-200 flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 text-xs font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:hover:bg-slate-700"
                  >
                    <div className="bg-primary-50 group-hover/btn:bg-primary-100 flex h-6 w-6 items-center justify-center rounded-md text-slate-800 transition-colors dark:text-white">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-slate-800 dark:text-white">
                      {t.company.additionalLinks.contactUs}
                    </span>
                  </Link>
                </div>
              )}
            </div>

            {/* Content Area */}
            <div className="min-h-[350px] flex-1 bg-white p-7 dark:bg-slate-950">
              {activeContent && translatedContent && (
                <>
                  <div className="mb-6">
                    <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                      {translatedContent.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {translatedContent.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {activeContent.items.map((item: any, idx: number) => {
                      const bgColor
                        = item.bg
                          || 'bg-slate-100 dark:bg-slate-800 group-hover/item:bg-white dark:group-hover/item:bg-slate-700 shadow-sm';
                      const iconColor = item.color || 'text-slate-600 dark:text-slate-400';

                      // Get translated item
                      const itemKey = getItemKeyFromUrl(item.to);
                      const translatedItem = itemKey
                        ? (translatedContent.items as any)[itemKey]
                        : null;

                      return (
                        <Link
                          key={idx}
                          href={item.to}
                          onClick={onClose}
                          className="group/item focus-visible:ring-primary-500 -ml-2 flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-slate-50 focus-visible:ring-2 focus-visible:outline-none dark:hover:bg-slate-900"
                        >
                          <div
                            className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${bgColor}`}
                          >
                            <item.icon className={`h-5 w-5 ${iconColor}`} />
                          </div>
                          <div>
                            <div className="group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 text-sm font-bold text-slate-900 transition-colors duration-200 dark:text-white">
                              {(translatedItem as any)?.label || item.label}
                            </div>
                            <div className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                              {(translatedItem as any)?.desc || item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex justify-end border-t border-slate-200 pt-5 dark:border-slate-800">
                    <Link
                      href={
                        type === 'platform'
                          ? '/platform'
                          : type === 'solutions'
                            ? '/solutions'
                            : type === 'resources'
                              ? '/resources'
                              : type === 'company'
                                ? '/about'
                                : '#'
                      }
                      onClick={onClose}
                      className="text-primary-600 hover:text-primary-700 flex items-center gap-1 text-sm font-semibold dark:text-slate-50"
                    >
                      {type === 'platform' && t.platform.viewAll}
                      {type === 'solutions' && t.solutions.viewAll}
                      {type === 'resources' && t.resources.viewAll}
                      {type === 'company' && t.company.viewAll}
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
