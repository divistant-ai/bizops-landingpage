/**
 * Navigation Helpers - Derives menu items from platformContent (SSOT)
 *
 * This file ensures that navigation menus (header/footer) are always
 * in sync with page content by deriving items from the canonical data source.
 */

import { Code } from 'lucide-react';
import { capabilitiesData, modulesData } from './platformContent';

/**
 * Get navigation items for Core Modules
 * Used by: Header mega menu, Footer links
 */
export function getModuleNavItems() {
  return Object.entries(modulesData).map(([slug, data]) => ({
    to: `/platform/modules/${slug}`,
    label: data.navLabel,
    desc: data.navDesc,
    icon: data.icon,
    color: data.color,
    bg: data.bgColor,
  }));
}

/**
 * Get navigation items for Capabilities
 * Used by: Header mega menu (Capabilities tab)
 */
export function getCapabilityNavItems() {
  // Only include capabilities that are shown in the menu
  const menuCapabilities = [
    'ai-assistant',
    'multi-company-management',
    'customer-portals',
    'reports-analytics',
    'mobile',
    'custom-apps',
    'team-collaboration',
  ];

  return menuCapabilities
    .filter(slug => capabilitiesData[slug])
    .map((slug) => {
      const data = capabilitiesData[slug];
      return {
        to: `/platform/${slug}`,
        label: data.navLabel,
        desc: data.navDesc,
        icon: data.icon,
      };
    });
}

/**
 * Get navigation items for Technologies
 * Used by: Header mega menu (Technology tab)
 */
export function getTechnologyNavItems() {
  // Technologies are a subset of capabilities that appear in the Technology tab
  const techSlugs = ['security', 'integration', 'self-hosted', 'architecture'];

  const techItems = techSlugs
    .filter(slug => capabilitiesData[slug])
    .map((slug) => {
      const data = capabilitiesData[slug];
      return {
        to: `/platform/technologies/${slug}`,
        label: data.navLabel,
        desc: data.navDesc,
        icon: data.icon,
      };
    });

  // Add overview item at the beginning
  const overviewItem = {
    to: '/platform/technologies',
    label: 'Technology Overview',
    desc: 'Explore our complete technology stack and infrastructure',
    icon: Code,
  };

  return [overviewItem, ...techItems];
}
