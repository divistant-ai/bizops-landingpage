'use client';

// import React from 'react';
import { CTABannerSection } from '@/components/sections/CTABannerSection';

export function MigrationCTA() {
  return (
    <CTABannerSection
      title="Butuh Bantuan Migrasi?"
      subtitle="Tim implementasi kami siap membantu migrasi data Anda dengan aman dan efisien. Konsultasi gratis untuk assess kompleksitas migrasi Anda."
      badgeText="MIGRATION SERVICES"
      demoBtnText="Konsultasi Gratis"
      demoBtnLink="/demo"
      pricingBtnText="Contact Migration Team"
      pricingBtnLink="/contact"
      trustText1="Data Aman"
      trustText2="Tanpa Downtime"
      trustText3="Full Support"
    />
  );
}
