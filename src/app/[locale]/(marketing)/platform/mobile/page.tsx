import type { Metadata } from 'next';
import MobileContent from './MobileContent';

export const metadata: Metadata = {
  title: 'Mobile Apps - iOS & Android | BizOps',
  description:
    'Native mobile apps for iOS and Android. Offline-first architecture, barcode scanning, geolocation, and more for field work.',
};

export default function MobilePage() {
  return <MobileContent />;
}
