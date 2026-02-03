import { Menu, Search, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
// React not needed 'react';
import Link from 'next/link';
import React from 'react';
import { LanguageSwitch } from '../LanguageSwitch';
import { ThemeToggle } from '../ThemeToggle';
import MobileMenu from './MobileMenu';
import { getIconButtonClasses, navbarStyles } from './navbarStyles';

type NavbarMobileProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onDemoClick: () => void;
};

const NavbarMobile: React.FC<NavbarMobileProps> = ({ isOpen, onToggle, onClose, onDemoClick }) => {
  const t = useTranslations('Navbar');

  return (
    <>
      <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
        {/* <NotificationCenter /> */}
        <LanguageSwitch />
        <ThemeToggle />
        <Link href="/search" className={getIconButtonClasses(true)} aria-label={t('search')}>
          <Search className={navbarStyles.iconSize.medium} />
        </Link>
        <button
          onClick={onToggle}
          className={getIconButtonClasses(true)}
          aria-label={isOpen ? t('close_menu') : t('open_menu')}
          aria-expanded={isOpen}
        >
          {isOpen
            ? (
                <X className={navbarStyles.iconSize.large} />
              )
            : (
                <Menu className={navbarStyles.iconSize.large} />
              )}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={onClose} onDemoClick={onDemoClick} />
    </>
  );
};

export default NavbarMobile;
