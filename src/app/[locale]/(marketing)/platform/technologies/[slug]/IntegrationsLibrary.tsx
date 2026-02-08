'use client';

import {
  ArrowRight,
  Building,
  CheckCircle2,
  Clock,
  Filter,
  Grid3X3,
  LayoutList,
  Link2,
  Phone,
  Search,
  Sparkles,
  Star,
} from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { CTABannerSection } from '@/components/sections/CTABannerSection';
import { Badge, Button } from '@/components/ui';
import { cn } from '@/libs/utils/cn';

// --- Types ---
type IntegrationStatus = 'verified' | 'beta' | 'coming_soon' | 'enterprise';

type Integration = {
  id: string;
  name: string;
  desc: string;
  category: string;
  status: IntegrationStatus;
  popularity: number;
  features?: string[];
  icon: string;
};

// --- Data ---
const integrations: Integration[] = [
  {
    id: 'sap',
    name: 'SAP Connector',
    desc: 'Sinkronisasi dua arah Jurnal GL & Material Master untuk enterprise',
    category: 'ERP & Accounting',
    status: 'verified',
    popularity: 95,
    features: ['Two-way Sync', 'Real-time', 'Custom Mapping'],
    icon: 'SA',
  },
  {
    id: 'odoo',
    name: 'Odoo',
    desc: 'Sync Stok & Sales Order real-time untuk ritel',
    category: 'ERP & Accounting',
    status: 'verified',
    popularity: 88,
    features: ['Inventory Sync', 'Order Management'],
    icon: 'OD',
  },
  {
    id: 'jurnal',
    name: 'Jurnal.id',
    desc: 'Ekspor data transaksi harian otomatis ke akuntansi',
    category: 'ERP & Accounting',
    status: 'verified',
    popularity: 82,
    icon: 'JR',
  },
  {
    id: 'accurate',
    name: 'Accurate',
    desc: 'Integrasi akuntansi lokal lengkap',
    category: 'ERP & Accounting',
    status: 'verified',
    popularity: 76,
    icon: 'AC',
  },
  {
    id: 'waha',
    name: 'WhatsApp (WAHA)',
    desc: 'Kirim OTP, Slip Gaji, dan Approval PO via WhatsApp',
    category: 'Communication',
    status: 'verified',
    popularity: 98,
    features: ['Broadcast', 'Auto-reply', 'Templates'],
    icon: 'WA',
  },
  {
    id: 'slack',
    name: 'Slack',
    desc: 'Bot notifikasi status proyek ke channel tim',
    category: 'Communication',
    status: 'verified',
    popularity: 85,
    icon: 'SL',
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    desc: 'Notifikasi dan alerts ke Teams channel',
    category: 'Communication',
    status: 'beta',
    popularity: 72,
    icon: 'TE',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    desc: 'Notifikasi ringan dan gratis via Telegram Bot',
    category: 'Communication',
    status: 'verified',
    popularity: 65,
    icon: 'TG',
  },
  {
    id: 'klikbca',
    name: 'KlikBCA',
    desc: 'Rekonsiliasi mutasi bank otomatis (MT940)',
    category: 'Banking & Payment',
    status: 'verified',
    popularity: 92,
    features: ['Auto-reconcile', 'MT940'],
    icon: 'BC',
  },
  {
    id: 'mandiri',
    name: 'Mandiri MCM',
    desc: 'Integrasi corporate banking Mandiri',
    category: 'Banking & Payment',
    status: 'verified',
    popularity: 87,
    icon: 'MA',
  },
  {
    id: 'xendit',
    name: 'Xendit',
    desc: 'Payment Link otomatis pada Invoice',
    category: 'Banking & Payment',
    status: 'verified',
    popularity: 90,
    features: ['Virtual Account', 'E-wallet'],
    icon: 'XE',
  },
  {
    id: 'midtrans',
    name: 'Midtrans',
    desc: 'Payment gateway integration lengkap',
    category: 'Banking & Payment',
    status: 'verified',
    popularity: 88,
    icon: 'MI',
  },
  {
    id: 'tokopedia',
    name: 'Tokopedia',
    desc: 'Tarik Sales Order & auto potong stok',
    category: 'E-Commerce',
    status: 'verified',
    popularity: 96,
    features: ['Auto-sync', 'Multi-warehouse'],
    icon: 'TO',
  },
  {
    id: 'shopee',
    name: 'Shopee',
    desc: 'Integrasi marketplace terlengkap',
    category: 'E-Commerce',
    status: 'verified',
    popularity: 95,
    features: ['Order Sync', 'Chat Auto-reply'],
    icon: 'SH',
  },
  {
    id: 'tiktok',
    name: 'TikTok Shop',
    desc: 'Integrasi social commerce terbaru',
    category: 'E-Commerce',
    status: 'beta',
    popularity: 78,
    icon: 'TT',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    desc: 'Sync dengan WordPress store Anda',
    category: 'E-Commerce',
    status: 'verified',
    popularity: 70,
    icon: 'WO',
  },
  {
    id: 'zkteco',
    name: 'ZKTeco',
    desc: 'Tarik log absensi fingerprint via ADMS',
    category: 'Hardware & IoT',
    status: 'verified',
    popularity: 80,
    features: ['Real-time', 'Multi-device'],
    icon: 'ZK',
  },
  {
    id: 'hikvision',
    name: 'Hikvision',
    desc: 'Integrasi CCTV & access control',
    category: 'Hardware & IoT',
    status: 'coming_soon',
    popularity: 55,
    icon: 'HI',
  },
  {
    id: 'timbangan',
    name: 'Jembatan Timbang',
    desc: 'Baca berat truk langsung ke Goods Receipt',
    category: 'Hardware & IoT',
    status: 'enterprise',
    popularity: 45,
    icon: 'TI',
  },
];

const categories = [
  { id: 'all', name: 'Semua', count: integrations.length },
  { id: 'ERP & Accounting', name: 'ERP & Akuntansi', count: 4 },
  { id: 'Communication', name: 'Komunikasi', count: 4 },
  { id: 'Banking & Payment', name: 'Bank & Payment', count: 4 },
  { id: 'E-Commerce', name: 'E-Commerce', count: 4 },
  { id: 'Hardware & IoT', name: 'Hardware & IoT', count: 3 },
];

const statusConfig: Record<
  IntegrationStatus,
  { label: string; color: string; icon: typeof CheckCircle2; bgColor: string }
> = {
  verified: {
    label: 'Tersedia',
    color:
      'bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800',
    icon: CheckCircle2,
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  beta: {
    label: 'Beta',
    color:
      'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800',
    icon: Sparkles,
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
  },
  coming_soon: {
    label: 'Segera',
    color:
      'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700',
    icon: Clock,
    bgColor: 'bg-slate-100 dark:bg-slate-800',
  },
  enterprise: {
    label: 'Enterprise',
    color:
      'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800',
    icon: Star,
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
};

// --- Component ---
export default function IntegrationsLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredIntegrations = useMemo(() => {
    let result = integrations;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        i =>
          i.name.toLowerCase().includes(q)
          || i.desc.toLowerCase().includes(q)
          || i.category.toLowerCase().includes(q),
      );
    }
    if (selectedCategory !== 'all') {
      result = result.filter(i => i.category === selectedCategory);
    }
    if (selectedStatus.length > 0) {
      result = result.filter(i => selectedStatus.includes(i.status));
    }
    return [...result].sort((a, b) => b.popularity - a.popularity);
  }, [searchQuery, selectedCategory, selectedStatus]);

  const groupedByCategory = useMemo(() => {
    if (viewMode !== 'list') {
      return null;
    }
    const grouped: Record<string, Integration[]> = {};
    for (const item of filteredIntegrations) {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category]!.push(item);
    }
    return grouped;
  }, [filteredIntegrations, viewMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8 dark:border-slate-800 dark:bg-slate-900">
        {/* Decorative */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
        <div className="bg-primary-500/10 pointer-events-none absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-4 py-2 dark:border-slate-700 dark:bg-slate-800">
            <Link2 className="text-primary-600 dark:text-primary-400 h-4 w-4" />
            <span className="text-xs font-bold tracking-wider text-slate-600 uppercase dark:text-slate-300">
              {integrations.length}
              + Konektor Tersedia
            </span>
          </div>

          <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-white">
            <span className="text-primary-600 dark:text-primary-400">Integrations</span>
            {' '}
            Library
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
            Hubungkan BizOps dengan tools favorit Anda. Dari ERP, payment gateway, marketplace,
            hingga hardware IoT.
          </p>

          {/* Search */}
          <div className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari integrasi berdasarkan nama atau kategori..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="focus:ring-primary-500 w-full rounded-2xl border border-slate-200 bg-white py-4 pr-12 pl-12 text-slate-900 placeholder-slate-400 transition-all focus:ring-2 focus:outline-none dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder-slate-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* --- Sidebar (3 cols) --- */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              {/* Kategori */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
                  <Filter className="h-4 w-4" />
                  Kategori
                </h3>
                <div className="space-y-1">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={cn(
                        'flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition-all',
                        selectedCategory === cat.id
                          ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 font-bold'
                          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800',
                      )}
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs opacity-70">
                        (
                        {cat.count}
                        )
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-4 text-sm font-bold tracking-wider text-slate-900 uppercase dark:text-white">
                  Status
                </h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(statusConfig).map(([key, cfg]) => {
                    const Icon = cfg.icon;
                    const active = selectedStatus.includes(key);
                    return (
                      <button
                        key={key}
                        onClick={() =>
                          setSelectedStatus(prev =>
                            prev.includes(key) ? prev.filter(s => s !== key) : [...prev, key],
                          )}
                        className={cn(
                          'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors',
                          active
                            ? cfg.color
                            : 'border-slate-200 text-slate-500 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800',
                        )}
                      >
                        <Icon className="h-3 w-3" />
                        {cfg.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Reset */}
              {(selectedCategory !== 'all' || selectedStatus.length > 0 || searchQuery) && (
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedStatus([]);
                  }}
                >
                  Reset Filter
                </Button>
              )}

              {/* CTA Sidebar */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                  Butuh Bantuan?
                </h3>
                <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                  Tim kami siap membantu setup integrasi.
                </p>
                <Link
                  href="/contact"
                  className="bg-primary-600 hover:bg-primary-700 inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Hubungi Sales
                </Link>
              </div>
            </div>
          </aside>

          {/* --- Content (9 cols) --- */}
          <div className="lg:col-span-9">
            {/* Toolbar */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-slate-600 dark:text-slate-400">
                Menampilkan
                {' '}
                <span className="font-bold text-slate-900 dark:text-white">
                  {filteredIntegrations.length}
                </span>
                {' '}
                integrasi
              </p>
              <div className="flex rounded-lg border border-slate-200 bg-white p-0.5 dark:border-slate-800 dark:bg-slate-900">
                <button
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    'rounded-md p-2 transition-colors',
                    viewMode === 'grid'
                      ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                      : 'text-slate-400 hover:text-slate-600',
                  )}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={cn(
                    'rounded-md p-2 transition-colors',
                    viewMode === 'list'
                      ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white'
                      : 'text-slate-400 hover:text-slate-600',
                  )}
                >
                  <LayoutList className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Empty */}
            {filteredIntegrations.length === 0 && (
              <div className="rounded-2xl border-2 border-dashed border-slate-300 py-20 text-center dark:border-slate-700">
                <Search className="mx-auto mb-4 h-10 w-10 text-slate-300 dark:text-slate-600" />
                <h3 className="mb-1 text-lg font-semibold text-slate-900 dark:text-white">
                  Tidak ditemukan
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Coba ubah kata kunci atau filter Anda
                </p>
              </div>
            )}

            {/* ===== GRID VIEW ===== */}
            {viewMode === 'grid' && filteredIntegrations.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredIntegrations.map((item) => {
                  const cfg = statusConfig[item.status];
                  const StatusIcon = cfg.icon;
                  return (
                    <div
                      key={item.id}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-700/50 dark:bg-slate-800/50 dark:hover:border-slate-600 dark:hover:shadow-2xl"
                    >
                      {/* Top: Icon + Badge */}
                      <div className="mb-4 flex items-start justify-between">
                        <div
                          className={cn(
                            'flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold',
                            cfg.bgColor,
                            'text-slate-700 dark:text-slate-300',
                          )}
                        >
                          {item.icon}
                        </div>
                        <Badge className={cn(cfg.color)}>
                          <StatusIcon className="mr-1 h-3 w-3" />
                          {cfg.label}
                        </Badge>
                      </div>

                      {/* Body */}
                      <h3 className="mb-1.5 text-base font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.desc}
                      </p>

                      {/* Feature tags */}
                      {item.features && (
                        <div className="mb-5 flex flex-wrap gap-1.5">
                          {item.features.map(f => (
                            <span
                              key={f}
                              className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="bg-primary-600 hover:bg-primary-700 inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
                      >
                        Hubungi Sales
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ===== LIST VIEW ===== */}
            {viewMode === 'list' && groupedByCategory && (
              <div className="space-y-8">
                {Object.entries(groupedByCategory).map(([category, items]) => (
                  <div key={category}>
                    <div className="mb-3 flex items-center gap-2">
                      <Building className="text-primary-600 dark:text-primary-400 h-4 w-4" />
                      <h3 className="font-bold text-slate-900 dark:text-white">{category}</h3>
                      <Badge variant="neutral">{items.length}</Badge>
                    </div>
                    <div className="space-y-2">
                      {items.map((item) => {
                        const cfg = statusConfig[item.status];
                        const StatusIcon = cfg.icon;
                        return (
                          <div
                            key={item.id}
                            className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={cn(
                                  'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold',
                                  cfg.bgColor,
                                  'text-slate-700 dark:text-slate-300',
                                )}
                              >
                                {item.icon}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-slate-900 dark:text-white">
                                    {item.name}
                                  </span>
                                  <Badge className={cn('text-[10px]', cfg.color)}>
                                    <StatusIcon className="mr-0.5 h-2.5 w-2.5" />
                                    {cfg.label}
                                  </Badge>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                  {item.desc}
                                </p>
                              </div>
                            </div>
                            <Link
                              href="/contact"
                              className="bg-primary-600 hover:bg-primary-700 inline-flex shrink-0 items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-md active:scale-[0.98]"
                            >
                              Hubungi Sales
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <CTABannerSection
        badgeText="Butuh Integrasi Custom?"
        title="Tim Kami Siap Membantu"
        subtitle="Hubungi tim integrasi kami untuk menghubungkan sistem custom atau aplikasi internal Anda dengan BizOps."
        demoBtnText="Hubungi Sales"
        demoBtnLink="/contact"
        pricingBtnText="Lihat API Docs"
        pricingBtnLink="/docs/api"
        trustText1="Managed Integration"
        trustText2="24/7 Support"
      />
    </div>
  );
}
