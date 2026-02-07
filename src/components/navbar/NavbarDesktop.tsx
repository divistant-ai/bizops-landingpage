'use client';

import { ChevronDown, Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LanguageSwitch } from '../LanguageSwitch';
import { ThemeToggle } from '../ThemeToggle';
import MegaMenu from './MegaMenu';
import {
  getIconButtonClasses,
  getMenuItemClasses,
  getTextButtonClasses,
  navbarStyles,
} from './navbarStyles';

type NavbarDesktopProps = {
  onDemoClick: () => void;
};

type MenuType = 'platform' | 'solutions' | 'services' | 'resources' | 'company' | null;

const NavbarDesktop: React.FC<NavbarDesktopProps> = ({ onDemoClick }) => {
  const pathname = usePathname();
  const t = useTranslations('Navbar');
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleMenuClick = useCallback((menu: MenuType) => {
    setActiveMenu(prev => (prev === menu ? null : menu));
  }, []);

  const handleCloseMenu = useCallback(() => {
    setActiveMenu(null);
  }, []);

  const isMenuOpen = (menu: MenuType) => activeMenu === menu;

  return (
    <div ref={navRef} className="hidden flex-1 items-center justify-between gap-4 lg:flex xl:gap-6">
      {/* Navigation Menu */}
      <nav className={navbarStyles.container.nav} aria-label="Main Navigation">
        {/* MENU 1: PLATFORM */}
        <div className="relative flex h-full shrink-0 items-center">
          <button
            type="button"
            onClick={() => handleMenuClick('platform')}
            className={getMenuItemClasses()}
            aria-expanded={isMenuOpen('platform')}
          >
            {t('platform')}
            <ChevronDown
              className={`${navbarStyles.iconSize.chevron} opacity-60 transition-transform duration-200 ${isMenuOpen('platform') ? 'rotate-180' : ''}`}
            />
          </button>
          <MegaMenu type="platform" isOpen={isMenuOpen('platform')} onClose={handleCloseMenu} />
        </div>

        {/* MENU 2: SOLUTIONS */}
        <div className="relative flex h-full shrink-0 items-center">
          <button
            type="button"
            onClick={() => handleMenuClick('solutions')}
            className={getMenuItemClasses()}
            aria-expanded={isMenuOpen('solutions')}
          >
            {t('solutions')}
            <ChevronDown
              className={`${navbarStyles.iconSize.chevron} opacity-60 transition-transform duration-200 ${isMenuOpen('solutions') ? 'rotate-180' : ''}`}
            />
          </button>
          <MegaMenu type="solutions" isOpen={isMenuOpen('solutions')} onClose={handleCloseMenu} />
        </div>

        {/* MENU 3: SERVICES */}
        <div className="relative flex h-full shrink-0 items-center">
          <button
            type="button"
            onClick={() => handleMenuClick('services')}
            className={getMenuItemClasses()}
            aria-expanded={isMenuOpen('services')}
          >
            {t('services')}
            <ChevronDown
              className={`${navbarStyles.iconSize.chevron} opacity-60 transition-transform duration-200 ${isMenuOpen('services') ? 'rotate-180' : ''}`}
            />
          </button>
          <MegaMenu type="services" isOpen={isMenuOpen('services')} onClose={handleCloseMenu} />
        </div>

        <Link
          href="/pricing"
          className={`${getMenuItemClasses()} shrink-0`}
          aria-current={pathname?.startsWith('/pricing') ? 'page' : undefined}
        >
          {t('pricing')}
        </Link>

        {/* MENU 4: RESOURCES */}
        <div className="relative flex h-full shrink-0 items-center">
          <button
            type="button"
            onClick={() => handleMenuClick('resources')}
            className={getMenuItemClasses()}
            aria-expanded={isMenuOpen('resources')}
          >
            {t('resources')}
            <ChevronDown
              className={`${navbarStyles.iconSize.chevron} opacity-60 transition-transform duration-200 ${isMenuOpen('resources') ? 'rotate-180' : ''}`}
            />
          </button>
          <MegaMenu type="resources" isOpen={isMenuOpen('resources')} onClose={handleCloseMenu} />
        </div>

        {/* MENU 5: COMPANY */}
        <div className="relative flex h-full shrink-0 items-center pr-3">
          <button
            type="button"
            onClick={() => handleMenuClick('company')}
            className={getMenuItemClasses()}
            aria-expanded={isMenuOpen('company')}
          >
            {t('company')}
            <ChevronDown
              className={`${navbarStyles.iconSize.chevron} opacity-60 transition-transform duration-200 ${isMenuOpen('company') ? 'rotate-180' : ''}`}
            />
          </button>
          <MegaMenu type="company" isOpen={isMenuOpen('company')} onClose={handleCloseMenu} />
        </div>
      </nav>

      {/* Visual Separator */}
      <div className={navbarStyles.container.separator} aria-hidden="true" />

      {/* Action Buttons */}
      <div className="flex w-full items-center gap-2">
        {/* Disabled Temporary */}
        {/* <NotificationCenter /> */}
        <LanguageSwitch />
        <ThemeToggle />
        <Link href="/search" className={getIconButtonClasses()} aria-label={t('search')}>
          <Search className={navbarStyles.iconSize.medium} />
        </Link>
        {/* Disabled Temporary */}
        {/* <Link href="/login" className={getTextButtonClasses()}>
          {t('login')}
        </Link> */}
        <button type="button" className={`${getTextButtonClasses()} ml-5`} onClick={onDemoClick}>
          {t('book_demo')}
        </button>
      </div>
    </div>
  );
};

export default NavbarDesktop;
