import type { Metadata } from 'next';
import CustomerPortalsContent from './CustomerPortalsContent';

export const metadata: Metadata = {
  title: 'Customer & Vendor Portals | BizOps',
  description:
    'Give self-service access to your customers and suppliers. Check invoices, delivery status, and bid on tenders online 24/7.',
};

export default function CustomerPortalsPage() {
  return <CustomerPortalsContent />;
}
