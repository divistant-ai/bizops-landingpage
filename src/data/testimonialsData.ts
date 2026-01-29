/**
 * Testimonials Data
 * Dummy testimonials for homepage social proof section
 * Company names are anonymized for privacy
 * Avatar photos from Unsplash
 */

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metrics: {
    label: string;
    before: string;
    after: string;
  };
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'BizOps membantu kami tutup buku 3x lebih cepat. Tim finance akhirnya bisa fokus analisa, bukan input data.',
    author: 'Rina Wijaya',
    role: 'CFO',
    company: 'Manufacturing Company',
    industry: 'Manufacturing',
    metrics: {
      label: 'Waktu Closing',
      before: '15 hari',
      after: '5 hari',
    },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 2,
    quote: 'Implementasi hanya 3 minggu. Tim lapangan langsung pakai tanpa training panjang berkat UI yang intuitif.',
    author: 'Budi Santoso',
    role: 'COO',
    company: 'Distribution Company',
    industry: 'Distribution',
    metrics: {
      label: 'Go-Live',
      before: '6 bulan',
      after: '21 hari',
    },
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 3,
    quote: 'Akhirnya data HR, Finance, dan Ops tersinkron real-time. Tidak ada lagi saling menyalahkan antar divisi.',
    author: 'Diana Kusuma',
    role: 'CEO',
    company: 'Construction Company',
    industry: 'Construction',
    metrics: {
      label: 'Data Accuracy',
      before: '72%',
      after: '99%',
    },
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 4,
    quote: 'Stok tidak pernah lagi habis tanpa peringatan. Forecast demand otomatis sangat akurat untuk bisnis retail kami.',
    author: 'Ahmad Fauzi',
    role: 'Supply Chain Manager',
    company: 'Retail Group',
    industry: 'Retail',
    metrics: {
      label: 'Stock Accuracy',
      before: '78%',
      after: '97%',
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 5,
    quote: 'Payroll untuk 2000+ karyawan sekarang cuma butuh 2 hari, dulu bisa seminggu lebih. BPJS otomatis sangat membantu.',
    author: 'Siti Rahma',
    role: 'HR Director',
    company: 'Outsourcing Company',
    industry: 'Services',
    metrics: {
      label: 'Payroll Time',
      before: '7 hari',
      after: '2 hari',
    },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 6,
    quote: 'Dashboard real-time membantu saya monitor 15 cabang sekaligus. Keputusan ekspansi jadi lebih terukur.',
    author: 'Hendro Wijaya',
    role: 'CEO',
    company: 'F&B Chain',
    industry: 'F&B',
    metrics: {
      label: 'Decision Speed',
      before: '2 minggu',
      after: '1 hari',
    },
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
  },
];

// English version for i18n
export const testimonialsEn: Testimonial[] = [
  {
    id: 1,
    quote: 'BizOps helped us close books 3x faster. Finance team can finally focus on analysis, not data entry.',
    author: 'Rina Wijaya',
    role: 'CFO',
    company: 'Manufacturing Company',
    industry: 'Manufacturing',
    metrics: {
      label: 'Closing Time',
      before: '15 days',
      after: '5 days',
    },
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 2,
    quote: 'Implementation in just 3 weeks. Field team started using it immediately without lengthy training thanks to intuitive UI.',
    author: 'Budi Santoso',
    role: 'COO',
    company: 'Distribution Company',
    industry: 'Distribution',
    metrics: {
      label: 'Go-Live',
      before: '6 months',
      after: '21 days',
    },
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 3,
    quote: 'Finally HR, Finance, and Ops data synced in real-time. No more blame games between divisions.',
    author: 'Diana Kusuma',
    role: 'CEO',
    company: 'Construction Company',
    industry: 'Construction',
    metrics: {
      label: 'Data Accuracy',
      before: '72%',
      after: '99%',
    },
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 4,
    quote: 'Stock never runs out without warning anymore. Auto demand forecast is very accurate for our retail business.',
    author: 'Ahmad Fauzi',
    role: 'Supply Chain Manager',
    company: 'Retail Group',
    industry: 'Retail',
    metrics: {
      label: 'Stock Accuracy',
      before: '78%',
      after: '97%',
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 5,
    quote: 'Payroll for 2000+ employees now only takes 2 days, used to be more than a week. Auto BPJS is very helpful.',
    author: 'Siti Rahma',
    role: 'HR Director',
    company: 'Outsourcing Company',
    industry: 'Services',
    metrics: {
      label: 'Payroll Time',
      before: '7 days',
      after: '2 days',
    },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 6,
    quote: 'Real-time dashboard helps me monitor 15 branches at once. Expansion decisions are now more measurable.',
    author: 'Hendro Wijaya',
    role: 'CEO',
    company: 'F&B Chain',
    industry: 'F&B',
    metrics: {
      label: 'Decision Speed',
      before: '2 weeks',
      after: '1 day',
    },
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
  },
];

// Industry color mapping
export const industryColors: Record<string, { bg: string; text: string; gradient: string }> = {
  Manufacturing: { bg: 'bg-blue-50 dark:bg-blue-950', text: 'text-blue-600 dark:text-blue-400', gradient: 'from-blue-500 to-blue-600' },
  Distribution: { bg: 'bg-emerald-50 dark:bg-emerald-950', text: 'text-emerald-600 dark:text-emerald-400', gradient: 'from-emerald-500 to-emerald-600' },
  Construction: { bg: 'bg-amber-50 dark:bg-amber-950', text: 'text-amber-600 dark:text-amber-400', gradient: 'from-amber-500 to-amber-600' },
  Services: { bg: 'bg-purple-50 dark:bg-purple-950', text: 'text-purple-600 dark:text-purple-400', gradient: 'from-purple-500 to-purple-600' },
  Retail: { bg: 'bg-pink-50 dark:bg-pink-950', text: 'text-pink-600 dark:text-pink-400', gradient: 'from-pink-500 to-pink-600' },
  'F&B': { bg: 'bg-orange-50 dark:bg-orange-950', text: 'text-orange-600 dark:text-orange-400', gradient: 'from-orange-500 to-orange-600' },
};
