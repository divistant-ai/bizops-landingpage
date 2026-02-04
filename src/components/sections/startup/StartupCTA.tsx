'use client';

// import React from 'react';
import { CTABannerSection } from '@/components/sections/CTABannerSection';

export default function StartupCTA() {
  return (
    <CTABannerSection
      title="Siap Membangun Unicorn Berikutnya?"
      subtitle="Fokus pada inovasi produk Anda, biarkan kami yang menangani infrastruktur operasional yang membosankan (tapi krusial)."
      badgeText="STARTUP PROGRAM"
      demoBtnText="Apply Now - It's Free"
      demoBtnLink="/partners/apply"
      pricingBtnText="Talk to Founder Success"
      pricingBtnLink="/contact"
      trustText1="Free Credits"
      trustText2="Mentor Network"
      trustText3="Global Access"
    />
  );
}
