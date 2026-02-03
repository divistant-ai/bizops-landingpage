import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Beef,
  Box,
  Briefcase,
  Building,
  CalendarCheck,
  ClipboardList,
  Clock,
  Cpu,
  Factory,
  GraduationCap,
  Hammer,
  HardHat,
  HeartHandshake,
  Landmark,
  Link as LinkIcon,
  Network,
  QrCode,
  RefreshCw,
  Settings,
  ShoppingCart,
  Smartphone,
  Sprout,
  Stethoscope,
  TrendingUp,
  Truck,
  Users,
  Utensils,
  Wrench,
} from 'lucide-react';

/**
 * USE CASE DATA STRUCTURE - BILINGUAL SUPPORT
 *
 * Each use case now has bilingual content with the following structure:
 * - title: { en: string, id: string }
 * - subtitle: { en: string, id: string }
 * - challenge: { en: string, id: string }
 * - solution: { en: string, id: string }
 * - results: { en: string[], id: string[] }
 *
 * IMPORTANT: Only the first case ('complex-incentive') has been converted to bilingual format.
 * All remaining 30+ cases need to be updated with the same structure.
 *
 * For each remaining case:
 * 1. Convert title, subtitle, challenge, solution from string to { en: string, id: string }
 * 2. Convert results from string[] to { en: string[], id: string[] }
 * 3. Keep industry, icon, color, category, techStack as is (no translation needed)
 */

export type UseCase = {
  id: string;
  title: { en: string; id: string };
  subtitle: { en: string; id: string };
  industry: string;
  icon: LucideIcon;
  challenge: { en: string; id: string };
  solution: { en: string; id: string };
  results: { en: string[]; id: string[] };
  techStack: string[];
  color: string; // tailwind color class e.g. "blue"
  category:
    | 'Finance & Accounting'
    | 'Supply Chain Management'
    | 'Human Resources'
    | 'Sales & CRM'
    | 'Manufacturing & Production'
    | 'Project Management'
    | 'Asset Management'
    | 'Operations'; // Core Modules + Operations fallback
};

export const useCasesData: Record<string, UseCase> = {
  // --- 1. RETAIL & DISTRIBUTION (3 Cases) ---
  'complex-incentive': {
    id: 'complex-incentive',
    title: {
      en: 'Complex Incentive Scheme',
      id: 'Skema Insentif Kompleks',
    },
    subtitle: {
      en: 'Automating Multi-Tier Sales Commissions',
      id: 'Otomasi Komisi Penjualan Multi-Tier',
    },
    industry: 'Retail & Distribution',
    icon: Briefcase,
    color: 'green',
    category: 'Sales & CRM',
    challenge: {
      en: 'Client has a 5-tier commission scheme involving product margin, payment tenor, team targets, and individual performance. Manual calculations take 1 week every month and are error-prone.',
      id: 'Klien memiliki skema komisi 5 lapis yang melibatkan margin produk, tenor pembayaran, target tim, dan performa individu. Perhitungan manual memakan waktu 1 minggu setiap bulan dan rawan error.',
    },
    solution: {
      en: 'We built a custom \'Commission Engine\' on top of BizOps Sales module. The engine pulls real-time data from invoices and payments, then calculates incentives every night (batch processing).',
      id: 'Kami membangun \'Commission Engine\' kustom di atas modul Sales BizOps. Engine ini mengambil data real-time dari faktur dan pelunasan, lalu menghitung insentif setiap malam (batch processing).',
    },
    results: {
      en: [
        'Calculation time reduced from 7 days to 15 minutes.',
        '100% calculation accuracy (zero disputes from sales team).',
        'Salesman can view daily commission estimates via Mobile App.',
      ],
      id: [
        'Waktu perhitungan terpangkas dari 7 hari menjadi 15 menit.',
        'Akurasi perhitungan 100% (zero dispute dari sales team).',
        'Salesman bisa melihat estimasi komisi harian via Mobile App.',
      ],
    },
    techStack: ['Python Sales Script', 'Redis Queue', 'Flutter Mobile App'],
  },
  'sales-route-optimization': {
    id: 'sales-route-optimization',
    title: {
      en: 'Sales Route Optimization',
      id: 'Optimasi Rute Sales',
    },
    subtitle: {
      en: 'AI-Powered Visit Planning',
      id: 'Perencanaan Kunjungan Berbasis AI',
    },
    industry: 'Retail & Distribution',
    icon: Smartphone,
    color: 'indigo',
    category: 'Sales & CRM',
    challenge: {
      en: 'FMCG distributor with 500+ canvassing salesmen often inefficient in store visits. Many stores are closed when visited or routes overlap between salesmen.',
      id: 'Distributor FMCG dengan 500+ salesman kanvas sering tidak efisien dalam kunjungan toko. Banyak toko tutup saat dikunjungi atau rute tumpang tindih antar salesman.',
    },
    solution: {
      en: 'Sales Force Automation (SFA) application with intelligent Route Planning features. System recommends daily routes based on store location, purchase history, and real-time traffic.',
      id: 'Aplikasi Sales Force Automation (SFA) dengan fitur Route Planning cerdas. Sistem merekomendasikan rute harian berdasarkan lokasi toko, riwayat pembelian, dan traffic real-time.',
    },
    results: {
      en: [
        'Effective visits increased 30% per day.',
        'Fleet fuel costs reduced by 15%.',
        'Order taking directly syncs to central warehouse.',
      ],
      id: [
        'Jumlah kunjungan efektif naik 30% per hari.',
        'Biaya BBM armada turun 15%.',
        'Order taking langsung sync ke gudang pusat.',
      ],
    },
    techStack: ['Google Maps API', 'SFA Mobile App', 'Route Algorithm'],
  },
  'smart-replenishment': {
    id: 'smart-replenishment',
    title: {
      en: 'Auto Replenishment System',
      id: 'Sistem Auto Replenishment',
    },
    subtitle: {
      en: 'Preventing Stock-outs with AI',
      id: 'Mencegah Kekosongan Stok dengan AI',
    },
    industry: 'Retail & Distribution',
    icon: RefreshCw,
    color: 'cyan',
    category: 'Supply Chain Management',
    challenge: {
      en: 'Minimarket chain often experiences stock-outs of fast-moving items (Pareto A) on shelves, while slow-moving items pile up in store warehouses.',
      id: 'Jaringan minimarket sering mengalami kekosongan stok barang laku (Pareto A) di rak, sementara barang lambat laku menumpuk di gudang toko.',
    },
    solution: {
      en: 'Auto-Replenishment algorithm that analyzes daily sales trends (Average Daily Sales) and delivery Lead Time. System automatically creates suggested Purchase Orders (PO) to DC.',
      id: 'Algoritma Auto-Replenishment yang menganalisis tren penjualan harian (Average Daily Sales) dan Lead Time pengiriman. Sistem otomatis membuat Purchase Order (PO) saran ke DC.',
    },
    results: {
      en: [
        'Lost sales due to stock-outs drastically reduced.',
        'Inventory Turnover Ratio improved 2x.',
        'Store admin work for manual ordering eliminated.',
      ],
      id: [
        'Lost sales akibat stock-out turun drastis.',
        'Inventory Turnover Ratio membaik 2x lipat.',
        'Pekerjaan admin toko untuk order manual hilang.',
      ],
    },
    techStack: ['Python Pandas', 'Forecasting Engine', 'Auto-PO Script'],
  },
  'mlm-commission-system': {
    id: 'mlm-commission-system',
    title: {
      en: 'MLM Commission System',
      id: 'Sistem Komisi MLM',
    },
    subtitle: {
      en: 'Multi-Level Marketing Network Management',
      id: 'Manajemen Jaringan Multi-Level Marketing',
    },
    industry: 'Retail & Distribution',
    icon: Network,
    color: 'violet',
    category: 'Sales & CRM',
    challenge: {
      en: 'MLM company struggles to calculate complex downline bonuses (Pairing Bonus, Sponsor Bonus, Reward Points) when member network reaches thousands. Excel can no longer handle hierarchical logic.',
      id: 'Perusahaan MLM kesulitan menghitung bonus downline yang kompleks (Pairing Bonus, Sponsor Bonus, Reward Point) saat jaringan member mencapai ribuan. Excel sudah tidak mampu menangani logika hierarki.',
    },
    solution: {
      en: 'Integrated MLM Network Management System. Members can view network tree (Genealogy Tree) and bonus statements in real-time. Bonus calculations run automatically every night.',
      id: 'Sistem Manajemen Jaringan MLM Terintegrasi. Member bisa melihat pohon jaringan (Genealogy Tree) dan bonus statement real-time. Perhitungan bonus otomatis setiap malam.',
    },
    results: {
      en: [
        '100% accurate and transparent bonus calculations for members.',
        'Bonus payouts can be done in bulk (batch transfer).',
        'New member recruitment faster via referral links.',
      ],
      id: [
        'Perhitungan bonus 100% akurat dan transparan bagi member.',
        'Payout bonus bisa dilakukan massal (batch transfer).',
        'Rekrutmen member baru lebih cepat via referral link.',
      ],
    },
    techStack: ['Genealogy Tree Algo', 'E-Wallet Integration', 'Member Portal'],
  },

  // --- 2. MANUFACTURING (3 Cases) ---
  'specialized-manufacturing': {
    id: 'specialized-manufacturing',
    title: {
      en: 'Garment Waste Management',
      id: 'Manajemen Waste Garmen',
    },
    subtitle: {
      en: 'Auto-Calculation of Material Waste',
      id: 'Perhitungan Otomatis Sisa Material',
    },
    industry: 'Manufacturing',
    icon: Settings,
    color: 'blue',
    category: 'Manufacturing & Production',
    challenge: {
      en: 'Garment factory struggles to track production fabric waste. Warehouse fabric stock often does not match physical count due to complex manual pattern cutting records.',
      id: 'Pabrik garmen kesulitan melacak sisa kain (waste) produksi. Stok kain di gudang sering tidak sesuai fisik karena pencatatan manual potongan pola yang rumit.',
    },
    solution: {
      en: '\'Smart Cutting\' module integrated with BOM (Bill of Materials). System automatically calculates waste estimates based on cutting patterns and reduces warehouse stock precisely.',
      id: 'Modul \'Smart Cutting\' yang terintegrasi dengan BOM (Bill of Materials). Sistem otomatis menghitung estimasi waste berdasarkan pola potong dan mengurangi stok gudang secara presisi.',
    },
    results: {
      en: [
        'Material waste reduction up to 12% in 3 months.',
        'Stock taking becomes faster and more accurate.',
        'COGS (Cost of Goods Sold) becomes more precise.',
      ],
      id: [
        'Pengurangan waste material hingga 12% dalam 3 bulan.',
        'Stok opname menjadi lebih cepat dan akurat.',
        'HPP (Harga Pokok Produksi) menjadi lebih presisi.',
      ],
    },
    techStack: ['Custom DocType', 'Client Script (JS)', 'IoT Integration'],
  },
  'machine-maintenance-oee': {
    id: 'machine-maintenance-oee',
    title: {
      en: 'IoT Machine Monitoring',
      id: 'Monitoring Mesin IoT',
    },
    subtitle: {
      en: 'Real-time OEE Dashboard',
      id: 'Dashboard OEE Real-time',
    },
    industry: 'Manufacturing',
    icon: Cpu,
    color: 'rose',
    category: 'Asset Management',
    challenge: {
      en: 'Factory managers are blind to machine effectiveness (OEE). Machine downtime data is only reported manually at the end of shifts, often inaccurate.',
      id: 'Manajer pabrik buta terhadap efektivitas mesin (OEE). Data downtime mesin baru dilaporkan di akhir shift secara manual, seringkali tidak akurat.',
    },
    solution: {
      en: 'Installation of IoT sensors on production machines connected directly to BizOps Manufacturing. Machine status (Running/Stop/Error) is recorded second-by-second.',
      id: 'Pemasangan sensor IoT pada mesin produksi yang terhubung langsung ke BizOps Manufacturing. Status mesin (Running/Stop/Error) tercatat detik-per-detik.',
    },
    results: {
      en: [
        'OEE (Overall Equipment Effectiveness) increased by 18%.',
        'Faster maintenance technician response time (auto-alert).',
        'Downtime cause analysis based on accurate data.',
      ],
      id: [
        'OEE (Overall Equipment Effectiveness) naik 18%.',
        'Response time teknisi maintenance lebih cepat (auto-alert).',
        'Analisis penyebab downtime berbasis data akurat.',
      ],
    },
    techStack: ['MQTT Protocol', 'IoT Gateway', 'Real-time Chart'],
  },
  'subcontracting-portal': {
    id: 'subcontracting-portal',
    title: {
      en: 'Subcontracting Portal',
      id: 'Portal Subkontraktor',
    },
    subtitle: {
      en: 'Vendor Material Tracking',
      id: 'Pelacakan Material Vendor',
    },
    industry: 'Manufacturing',
    icon: Factory,
    color: 'slate',
    category: 'Supply Chain Management',
    challenge: {
      en: 'Automotive factory struggles to track raw material stock sent to subcontracting vendors. Stock discrepancies often occur between factory and vendor records.',
      id: 'Pabrik otomotif kesulitan melacak stok bahan baku yang dikirim ke vendor makloon (subkon). Sering terjadi selisih stok antara catatan pabrik dan vendor.',
    },
    solution: {
      en: 'Dedicated Subcon Vendor Portal. Vendors input production results and remaining raw materials via portal. System automatically reconciles virtual stock at vendor locations.',
      id: 'Vendor Portal khusus Subkon. Vendor input hasil produksi dan sisa bahan baku via portal. Sistem otomatis merekonsiliasi stok virtual di lokasi vendor.',
    },
    results: {
      en: [
        '0% raw material stock discrepancies at vendors.',
        'Subcontracting service invoices automatically validated against production output.',
        'Transparent production progress on vendor side.',
      ],
      id: [
        'Selisih stok bahan baku di vendor 0%.',
        'Tagihan jasa makloon otomatis tervalidasi hasil produksi.',
        'Transparansi progres produksi di sisi vendor.',
      ],
    },
    techStack: ['Vendor Portal', 'Stock Reconciliation', 'Barcode'],
  },

  // --- 3. SUPPLY CHAIN (2 Cases) ---
  'vendor-portal': {
    id: 'vendor-portal',
    title: {
      en: 'Exclusive Vendor Portal',
      id: 'Portal Vendor Eksklusif',
    },
    subtitle: {
      en: 'Digital Procurement & Bidding System',
      id: 'Sistem Pengadaan & Tender Digital',
    },
    industry: 'Supply Chain',
    icon: LinkIcon,
    color: 'amber',
    category: 'Supply Chain Management',
    challenge: {
      en: 'Procurement process involves hundreds of emails and phone calls to suppliers. Price transparency and bidding history are difficult to track.',
      id: 'Proses pengadaan barang melibatkan ratusan email dan telepon ke supplier. Transparansi harga dan riwayat penawaran sulit dilacak.',
    },
    solution: {
      en: 'React-based Web Portal connected to BizOps Backend. Vendors login to view RFQ (Request for Quotation), submit price bids, and upload billing invoices.',
      id: 'Web Portal berbasis React yang terhubung ke BizOps Backend. Vendor login untuk melihat RFQ (Request for Quotation), submit penawaran harga, dan upload invoice penagihan.',
    },
    results: {
      en: [
        'Procurement cycle time 40% faster.',
        'Centralized and automatically rated vendor database.',
        'Complete audit trail documentation for procurement.',
      ],
      id: [
        'Cycle time pengadaan lebih cepat 40%.',
        'Vendor database terpusat dan terrating otomatis.',
        'Dokumentasi audit trail pengadaan yang lengkap.',
      ],
    },
    techStack: ['React.js Portal', 'Rest API', 'Socket.io Realtime'],
  },
  'demand-forecasting': {
    id: 'demand-forecasting',
    title: {
      en: 'AI Demand Forecasting',
      id: 'Forecasting Permintaan AI',
    },
    subtitle: {
      en: 'Predictive Inventory Planning',
      id: 'Perencanaan Inventori Prediktif',
    },
    industry: 'Supply Chain',
    icon: TrendingUp,
    color: 'purple',
    category: 'Supply Chain Management',
    challenge: {
      en: 'Distributor often overstocks seasonal items after the season ends, causing significant dead stock losses.',
      id: 'Distributor sering overstock barang seasonal setelah musim berakhir, menyebabkan kerugian dead stock yang besar.',
    },
    solution: {
      en: 'Machine Learning-based Forecasting module that learns historical sales patterns from the last 3 years, seasonal trends, and calendar events.',
      id: 'Modul Forecasting berbasis Machine Learning yang mempelajari pola penjualan historis 3 tahun terakhir, tren musiman, dan event kalender.',
    },
    results: {
      en: [
        'Inventory holding cost reduced by 20%.',
        'Purchase planning accuracy increased.',
        'Stock readiness during peak season guaranteed.',
      ],
      id: [
        'Inventory holding cost turun 20%.',
        'Akurasi perencanaan pembelian meningkat.',
        'Kesiapan stok saat peak season terjamin.',
      ],
    },
    techStack: ['Python Scikit-Learn', 'Historical Data Analysis', 'Planner Dashboard'],
  },

  // --- 4. RETAIL (E-COMMERCE) (2 Cases) ---
  'pos-omnichannel': {
    id: 'pos-omnichannel',
    title: {
      en: 'Omnichannel POS Integration',
      id: 'Integrasi POS Omnichannel',
    },
    subtitle: {
      en: 'Syncing Offline Stores & Marketplace',
      id: 'Sinkronisasi Toko Offline & Marketplace',
    },
    industry: 'Retail',
    icon: ShoppingCart,
    color: 'purple',
    category: 'Sales & CRM',
    challenge: {
      en: 'Stock in physical stores and e-commerce (Tokopedia/Shopee) often mismatch (overselling). Staff must manually update stock across multiple dashboards.',
      id: 'Stok di toko fisik dan e-commerce (Tokopedia/Shopee) sering selisih (overselling). Staff harus update stok manual di banyak dashboard.',
    },
    solution: {
      en: 'Custom middleware that syncs BizOps inventory with Marketplace APIs in real-time (2-way sync). POS store transactions immediately deduct online stock.',
      id: 'Middleware kustom yang menyinkronkan inventori BizOps dengan API Marketplace secara real-time (2-way sync). Transaksi POS toko langsung memotong stok online.',
    },
    results: {
      en: [
        'Zero overselling during Harbolnas events.',
        'Stock admin efficiency increased by 80%.',
        'Combined sales reports available in real-time.',
      ],
      id: [
        'Zero overselling saat event Harbolnas.',
        'Efisiensi admin stok meningkat 80%.',
        'Laporan penjualan gabungan tersedia real-time.',
      ],
    },
    techStack: ['Node.js Middleware', 'Marketplace API', 'Webhook'],
  },
  'loyalty-membership': {
    id: 'loyalty-membership',
    title: {
      en: 'Unified Loyalty Program',
      id: 'Program Loyalitas Terpadu',
    },
    subtitle: {
      en: 'Cross-Channel Point System',
      id: 'Sistem Poin Lintas Channel',
    },
    industry: 'Retail',
    icon: HeartHandshake,
    color: 'pink',
    category: 'Sales & CRM',
    challenge: {
      en: 'Customers shopping in physical stores cannot redeem points on website, and vice versa. Customer data is fragmented.',
      id: 'Customer belanja di toko fisik tidak bisa redeem poin di website, dan sebaliknya. Data pelanggan terpecah-pecah.',
    },
    solution: {
      en: 'Centralized Membership System. Shopping points from POS stores, Website, and App go into one customer account. Redemption can be done on any channel.',
      id: 'Sistem Membership Terpusat. Poin belanja dari POS toko, Website, dan App masuk ke satu akun pelanggan. Redeem bisa dilakukan di channel mana saja.',
    },
    results: {
      en: [
        'Customer retention rate increased by 25%.',
        'Customer database becomes valuable asset (Single ID).',
        'Promotional programs more targeted based on purchase history.',
      ],
      id: [
        'Customer retention rate naik 25%.',
        'Database pelanggan menjadi aset berharga (Single ID).',
        'Program promo lebih terarah berdasarkan riwayat belanja.',
      ],
    },
    techStack: ['Loyalty Engine', 'API Gateway', 'Customer App'],
  },

  // --- 5. LOGISTICS (2 Cases) ---
  'fleet-telematics': {
    id: 'fleet-telematics',
    title: {
      en: 'Fleet Telematics Connector',
      id: 'Konektor Telematika Armada',
    },
    subtitle: {
      en: 'GPS Data into ERP Asset Management',
      id: 'Data GPS ke Manajemen Aset ERP',
    },
    industry: 'Logistics',
    icon: Truck,
    color: 'red',
    category: 'Asset Management',
    challenge: {
      en: 'Truck maintenance costs are ballooning because service schedules are often missed. KM (kilometer) data is recorded manually by drivers and often manipulated.',
      id: 'Biaya maintenance truk membengkak karena jadwal servis sering terlewat. Data KM (kilometer) dicatat manual oleh supir dan sering dimanipulasi.',
    },
    solution: {
      en: 'GPS Tracker API integration directly into BizOps Asset module. Maintenance schedule automatically created (triggered) when KM reaches service limit.',
      id: 'Integrasi API GPS Tracker langsung ke modul Asset BizOps. Maintenance schedule otomatis terbuat (trigger) saat KM mencapai batas servis.',
    },
    results: {
      en: [
        'Breakdown maintenance costs reduced by 25%.',
        'Prevention of fuel fraud and fictitious service.',
        'Fleet lifespan significantly increased.',
      ],
      id: [
        'Biaya breakdown maintenance turun 25%.',
        'Pencegahan fraud bahan bakar dan servis fiktif.',
        'Masa pakai armada meningkat signifikan.',
      ],
    },
    techStack: ['GPS API Integration', 'Scheduled Job', 'Mapbox Viz'],
  },
  'last-mile-tracking': {
    id: 'last-mile-tracking',
    title: {
      en: 'Last Mile Delivery App',
      id: 'Aplikasi Pengiriman Last Mile',
    },
    subtitle: {
      en: 'Real-time Proof of Delivery',
      id: 'Bukti Pengiriman Real-time',
    },
    industry: 'Logistics',
    icon: Box,
    color: 'orange',
    category: 'Supply Chain Management',
    challenge: {
      en: 'Customers often complain goods have not arrived even though status shows \'delivered\'. Couriers find it difficult to prove successful delivery because physical proof is lost.',
      id: 'Customer sering komplain barang belum sampai padahal status \'delivered\'. Kurir sulit membuktikan pengiriman sukses karena bukti fisik hilang.',
    },
    solution: {
      en: 'Mobile App for Couriers. Must take photo of recipient & digital signature during goods handover. GPS coordinates & Timestamp automatically recorded.',
      id: 'Mobile App untuk Kurir. Wajib foto penerima & tanda tangan digital saat serah terima barang. Koordinat GPS & Timestamp tercatat otomatis.',
    },
    results: {
      en: [
        '100% elimination of fake delivery complaints.',
        'Customer billing invoice can be issued immediately (real-time).',
        'Transparent tracking for customers.',
      ],
      id: [
        'Komplain pengiriman palsu hilang 100%.',
        'Invoice penagihan ke customer bisa langsung terbit (real-time).',
        'Tracking resi transparan bagi customer.',
      ],
    },
    techStack: ['Flutter App', 'Geotagging', 'Digital Signature'],
  },

  // --- 6. CONSTRUCTION (2 Cases) ---
  'project-budget-control': {
    id: 'project-budget-control',
    title: {
      en: 'Project Budget Control',
      id: 'Kontrol Anggaran Proyek',
    },
    subtitle: {
      en: 'Real-time RAB vs Realization Tracking',
      id: 'Pelacakan RAB vs Realisasi Real-time',
    },
    industry: 'Construction',
    icon: Hammer,
    color: 'orange',
    category: 'Project Management',
    challenge: {
      en: 'Contractors often experience over-budget because material and labor cost realization is only known when the project is complete. Difficult to monitor physical progress vs cost in real-time.',
      id: 'Kontraktor sering mengalami over-budget karena realisasi biaya material dan upah tukang baru ketahuan saat proyek selesai. Sulit memantau progress fisik vs biaya secara real-time.',
    },
    solution: {
      en: 'Implementation of Project module with \'Budget Lock\' feature. Every material PR (Purchase Request) is automatically validated against remaining RAB budget for related items. Early warning if approaching limit.',
      id: 'Implementasi modul Project dengan fitur \'Budget Lock\'. Setiap PR (Purchase Request) material otomatis divalidasi terhadap sisa budget RAB pos terkait. Peringatan dini jika mendekati limit.',
    },
    results: {
      en: [
        'Over-budget reduced to below 5%.',
        'Profit/Loss reports per project available daily.',
        'Tighter material control on site.',
      ],
      id: [
        'Over-budget ditekan hingga di bawah 5%.',
        'Laporan Laba/Rugi per proyek tersedia harian.',
        'Kontrol material di site lebih ketat.',
      ],
    },
    techStack: ['Python Budget Validator', 'Mobile Approval', 'Project Dashboard'],
  },
  'daily-site-report': {
    id: 'daily-site-report',
    title: {
      en: 'Digital Site Report',
      id: 'Laporan Site Digital',
    },
    subtitle: {
      en: 'Mandor Daily Progress Input',
      id: 'Input Progress Harian Mandor',
    },
    industry: 'Construction',
    icon: HardHat,
    color: 'yellow',
    category: 'Project Management',
    challenge: {
      en: 'Daily project reports (LHP) from the field are often delayed for days and handwriting is hard to read. Project progress at head office is not updated.',
      id: 'Laporan harian proyek (LHP) dari lapangan sering terlambat berhari-hari dan tulisan tangan sulit dibaca. Progress proyek di kantor pusat tidak update.',
    },
    solution: {
      en: 'Field Application for Foreman/Site Manager. Input physical progress (%), number of workers, and weather directly from phone. Progress photos must be uploaded.',
      id: 'Aplikasi Lapangan untuk Mandor/Site Manager. Input progress fisik (%), jumlah pekerja, dan cuaca hari itu langsung dari HP. Foto progres wajib diupload.',
    },
    results: {
      en: [
        'Real-time project progress monitoring from head office.',
        'Faster project milestone billing to owner.',
        'Field issue history neatly recorded.',
      ],
      id: [
        'Monitoring progress proyek real-time dari kantor pusat.',
        'Tagihan termin ke owner proyek lebih cepat cair.',
        'History kendala lapangan terekam rapi.',
      ],
    },
    techStack: ['Mobile Web App', 'Image Compression', 'Progress S-Curve'],
  },

  // --- 7. F&B (2 Cases) ---
  'central-kitchen': {
    id: 'central-kitchen',
    title: {
      en: 'Central Kitchen Management',
      id: 'Manajemen Dapur Pusat',
    },
    subtitle: {
      en: 'Recipe Costing & Inter-Branch Transfer',
      id: 'Kalkulasi Resep & Transfer Antar Cabang',
    },
    industry: 'Food & Beverage',
    icon: Utensils,
    color: 'rose',
    category: 'Manufacturing & Production',
    challenge: {
      en: 'Restaurant chain with 20 outlets struggles to maintain taste consistency and COGS. Raw material transfers from central kitchen to outlets often mismatch and go unrecorded.',
      id: 'Restoran chain dengan 20 outlet kesulitan menjaga konsistensi rasa dan HPP. Transfer bahan baku dari dapur pusat ke outlet sering selisih dan tidak tercatat.',
    },
    solution: {
      en: 'Integrated Central Kitchen System. Raw material orders from outlets automatically deduct CK stock. COGS calculated automatically based on recipes (BOM) and yield loss.',
      id: 'Sistem Central Kitchen terintegrasi. Order bahan baku dari outlet otomatis memotong stok CK. HPP dihitung otomatis berdasarkan resep (BOM) dan yield loss.',
    },
    results: {
      en: [
        'Food cost reduced by 8% due to good waste control.',
        'Outlet restocking process automated and paperless.',
        'Accurate analysis of best-selling and most profitable menus.',
      ],
      id: [
        'Food cost turun 8% karena kontrol waste yang baik.',
        'Proses restock outlet otomatis dan paperless.',
        'Analisis menu terlaris dan paling profitabel akurat.',
      ],
    },
    techStack: ['Recipe Management', 'Auto-Replenishment', 'Kitchen Display'],
  },
  'qr-table-order': {
    id: 'qr-table-order',
    title: {
      en: 'QR Table Order',
      id: 'Pesan via QR Table',
    },
    subtitle: {
      en: 'Self-Service Ordering System',
      id: 'Sistem Pemesanan Mandiri',
    },
    industry: 'Food & Beverage',
    icon: QrCode,
    color: 'emerald',
    category: 'Sales & CRM',
    challenge: {
      en: 'Lack of waiters during rush hours causes customers to wait long to order and pay. High potential for lost sales.',
      id: 'Kekurangan pelayan saat jam sibuk membuat pelanggan menunggu lama untuk pesan menu dan bayar. Potensi lost sales tinggi.',
    },
    solution: {
      en: 'QR Code system at every table. Customers scan, select menu, and pay directly (e-wallet). Orders automatically printed at kitchen and bar printers.',
      id: 'Sistem QR Code di setiap meja. Pelanggan scan, pilih menu, dan bayar langsung (e-wallet). Pesanan otomatis tercetak di printer dapur dan bar.',
    },
    results: {
      en: [
        'Revenue increased 15% thanks to easy add-on ordering.',
        'Waiter requirement reduced by 30%.',
        'Order mistakes reduced to 0.',
      ],
      id: [
        'Omset naik 15% berkat kemudahan pesan tambah (add-on).',
        'Kebutuhan waiter berkurang 30%.',
        'Kesalahan catat pesanan menjadi 0.',
      ],
    },
    techStack: ['QR Menu Web', 'Payment Gateway', 'Kitchen Printer'],
  },

  // --- 8. HEALTHCARE (2 Cases) ---
  'pharmacy-inventory': {
    id: 'pharmacy-inventory',
    title: {
      en: 'Smart Pharmacy Inventory',
      id: 'Inventori Farmasi Cerdas',
    },
    subtitle: {
      en: 'Batch Tracking & Expiry Management',
      id: 'Pelacakan Batch & Manajemen Kadaluarsa',
    },
    industry: 'Healthcare',
    icon: Activity,
    color: 'teal',
    category: 'Supply Chain Management',
    challenge: {
      en: 'Hospital pharmacy often suffers losses from expired drugs that are not monitored and stock-outs of vital medicines.',
      id: 'Apotek rumah sakit sering mengalami kerugian akibat obat kadaluarsa (expired) yang tidak terpantau dan stok out-of-stock untuk obat vital.',
    },
    solution: {
      en: 'Strict FEFO (First Expired First Out) inventory system. Automatic notifications 3 months before ED. Digital doctor prescription integration directly deducts pharmacy stock.',
      id: 'Sistem inventori FEFO (First Expired First Out) ketat. Notifikasi otomatis 3 bulan sebelum ED. Integrasi resep dokter digital langsung memotong stok farmasi.',
    },
    results: {
      en: [
        'Losses from expired drugs reduced by 90%.',
        'Patient waiting time at pharmacy 50% faster.',
        'BPOM audit becomes very easy with batch tracing.',
      ],
      id: [
        'Kerugian akibat obat expired turun 90%.',
        'Waktu tunggu pasien di farmasi lebih cepat 50%.',
        'Audit BPOM menjadi sangat mudah dengan batch tracing.',
      ],
    },
    techStack: ['Batch Management', 'Notification Engine', 'HL7 Integration'],
  },
  'emr-integration': {
    id: 'emr-integration',
    title: {
      en: 'Clinic EMR System',
      id: 'Sistem EMR Klinik',
    },
    subtitle: {
      en: 'Electronic Medical Records',
      id: 'Rekam Medis Elektronik',
    },
    industry: 'Healthcare',
    icon: Stethoscope,
    color: 'sky',
    category: 'Operations',
    challenge: {
      en: 'Primary clinic still uses paper medical records that are often lost, hard to read, and take up storage space.',
      id: 'Klinik pratama masih menggunakan rekam medis kertas yang sering hilang, sulit dibaca, dan memakan tempat penyimpanan arsip.',
    },
    solution: {
      en: 'Electronic Medical Record (EMR) module. Doctors input diagnoses (ICD-10) and digital prescriptions. Patient history stored safely and easily searchable.',
      id: 'Modul Rekam Medis Elektronik (RME). Dokter input diagnosa (ICD-10) dan resep obat digital. Riwayat pasien tersimpan aman dan mudah dicari.',
    },
    results: {
      en: [
        '100% archive space efficiency (paperless).',
        'Automatic reporting to Ministry of Health SatuSehat.',
        'Better patient care continuity.',
      ],
      id: [
        'Efisiensi ruang arsip 100% (paperless).',
        'Pelaporan ke SatuSehat Kemenkes otomatis.',
        'Kontinuitas perawatan pasien lebih baik.',
      ],
    },
    techStack: ['ICD-10 Database', 'SatuSehat API', 'Secure Storage'],
  },

  // --- 9. PROFESSIONAL SERVICES (2 Cases) ---
  'consulting-timesheet': {
    id: 'consulting-timesheet',
    title: {
      en: 'Billable Hours Automation',
      id: 'Otomasi Jam Kerja Tertagih',
    },
    subtitle: {
      en: 'Timesheet to Invoice Conversion',
      id: 'Konversi Timesheet ke Invoice',
    },
    industry: 'Services',
    icon: Clock,
    color: 'indigo',
    category: 'Human Resources',
    challenge: {
      en: 'Law consulting firm struggles to bill clients accurately because consultant working hours (timesheet) are recorded manually and often forgotten.',
      id: 'Firma konsultan hukum kesulitan menagih klien secara akurat karena pencatatan jam kerja konsultan (timesheet) manual dan sering lupa.',
    },
    solution: {
      en: 'Easy-to-use Mobile Timesheet App. Consultants input working hours per project/client. At month-end, system automatically generates draft invoices based on each consultant\'s rate card.',
      id: 'Mobile Timesheet App yang mudah digunakan. Konsultan input jam kerja per project/klien. Di akhir bulan, sistem otomatis generate draft invoice berdasarkan rate card masing-masing konsultan.',
    },
    results: {
      en: [
        'Revenue leakage (unbilled hours) drastically reduced.',
        'Monthly billing process completed in 1 day (previously 5 days).',
        'Increased transparency of activity details to clients.',
      ],
      id: [
        'Revenue leakage (jam tak tertagih) berkurang drastis.',
        'Proses billing bulanan selesai dalam 1 hari (sebelumnya 5 hari).',
        'Transparansi detail aktivitas ke klien meningkat.',
      ],
    },
    techStack: ['Mobile App', 'Billing Engine', 'Client Portal'],
  },
  'subscription-billing': {
    id: 'subscription-billing',
    title: {
      en: 'Subscription Management',
      id: 'Manajemen Langganan',
    },
    subtitle: {
      en: 'Recurring Billing for Agencies',
      id: 'Penagihan Berulang untuk Agensi',
    },
    industry: 'Services',
    icon: CalendarCheck,
    color: 'violet',
    category: 'Finance & Accounting',
    challenge: {
      en: 'Digital marketing agency overwhelmed managing hundreds of monthly invoices (retainers) with varying due dates. Billing is often late.',
      id: 'Agensi digital marketing kewalahan mengelola ratusan invoice bulanan (retainer) dengan tanggal jatuh tempo berbeda-beda. Penagihan sering telat.',
    },
    solution: {
      en: 'Automatic Subscription Module. Retainer invoices are generated and sent via email automatically every 1st of the month. Payment link integration for auto-debit.',
      id: 'Modul Subscription Otomatis. Invoice retainer terbit dan terkirim via email otomatis setiap tanggal 1. Integrasi payment link untuk auto-debet.',
    },
    results: {
      en: [
        'More stable and predictable cashflow.',
        'Client payment arrears reduced by 40%.',
        'Finance admin focuses on analysis, not invoice creation.',
      ],
      id: [
        'Cashflow lebih stabil dan terprediksi.',
        'Tunggakan pembayaran klien turun 40%.',
        'Admin finance fokus ke analisis, bukan buat invoice.',
      ],
    },
    techStack: ['Recurring Invoice', 'Email Automation', 'Payment Gateway'],
  },

  // --- 10. REAL ESTATE (2 Cases) ---
  'tenant-management': {
    id: 'tenant-management',
    title: {
      en: 'Building Tenant Portal',
      id: 'Portal Tenant Gedung',
    },
    subtitle: {
      en: 'Automated Utility Billing & Service Request',
      id: 'Penagihan Utilitas & Permintaan Layanan Otomatis',
    },
    industry: 'Real Estate',
    icon: Building,
    color: 'cyan',
    category: 'Asset Management',
    challenge: {
      en: 'Office building managers overwhelmed handling tenant electricity/water bills that vary and are complex, and facility damage complaints via WhatsApp are unmanaged.',
      id: 'Pengelola gedung perkantoran kewalahan menangani tagihan listrik/air tenant yang bervariasi dan kompleks dan komplain kerusakan fasilitas yang via WhatsApp tidak terkelola.',
    },
    solution: {
      en: 'Integrated Tenant Portal. IoT meters send usage data directly to billing system. Tenants can report damages, book meeting rooms, and pay rent via app.',
      id: 'Tenant Portal terintegrasi. Meteran IoT kirim data penggunaan langsung ke sistem billing. Tenant bisa lapor kerusakan, booking ruang meeting, dan bayar sewa via aplikasi.',
    },
    results: {
      en: [
        '100% automatic and accurate utility billing.',
        'Improved tenant complaint handling SLA.',
        'Smoother cashflow with payment gateway integration.',
      ],
      id: [
        'Penagihan utility 100% otomatis dan akurat.',
        'SLA penanganan komplain tenant meningkat.',
        'Cashflow lebih lancar dengan payment gateway integration.',
      ],
    },
    techStack: ['IoT Metering', 'Tenant App', 'Helpdesk Module'],
  },
  'property-sales-booking': {
    id: 'property-sales-booking',
    title: {
      en: 'Property Unit Booking',
      id: 'Pemesanan Unit Properti',
    },
    subtitle: {
      en: 'Visual Unit Selection & Payment',
      id: 'Pemilihan Unit Visual & Pembayaran',
    },
    industry: 'Real Estate',
    icon: Landmark,
    color: 'blue',
    category: 'Sales & CRM',
    challenge: {
      en: 'Property developers often experience double-booking of apartment units during launches because sales status updates are done manually between marketing teams.',
      id: 'Developer properti sering double-booking unit apartemen saat launching karena update status terjual manual antar sales marketing.',
    },
    solution: {
      en: 'Real-time Unit Booking System. Interactive Siteplan visuals show unit status (Available, Booked, Sold). Booking fee automatically locks the unit.',
      id: 'Sistem Booking Unit Real-time. Visual Siteplan interaktif menunjukkan status unit (Available, Booked, Sold). Booking fee mengunci unit otomatis.',
    },
    results: {
      en: [
        'Zero double-booking incidents during grand launch.',
        'Real-time unit sales reports for management.',
        'Faster PPJB document processing.',
      ],
      id: [
        'Zero double-booking incident saat grand launching.',
        'Laporan penjualan unit real-time untuk manajemen.',
        'Proses PPJB dokumen lebih cepat.',
      ],
    },
    techStack: ['Interactive SVG Map', 'Booking Engine', 'Document Generator'],
  },

  // --- 11. EDUCATION (2 Cases) ---
  'school-academic': {
    id: 'school-academic',
    title: {
      en: 'Integrated Academic System',
      id: 'Sistem Akademik Terintegrasi',
    },
    subtitle: {
      en: 'Student Lifecycle Management',
      id: 'Manajemen Siklus Hidup Siswa',
    },
    industry: 'Education',
    icon: GraduationCap,
    color: 'sky',
    category: 'Operations',
    challenge: {
      en: 'International school with 2000 students has separate data between departments (Academic, Finance, Library). Parents find it difficult to monitor their children\'s development.',
      id: 'Sekolah internasional dengan 2000 siswa memiliki data terpisah antar departemen (Akademik, Keuangan, Perpustakaan). Orang tua sulit memantau perkembangan anak.',
    },
    solution: {
      en: 'One-Stop Education ERP. Student data from registration, grades, attendance, to tuition bills are centralized. Parent Portal for accessing report cards and payment status.',
      id: 'One-Stop Education ERP. Data siswa dari pendaftaran, nilai, absensi, hingga tagihan SPP terpusat. Parent Portal untuk akses raport dan status pembayaran.',
    },
    results: {
      en: [
        'Tuition arrears reduced by 30% thanks to automatic reminders.',
        'Teachers save 40% administrative time.',
        'More seamless communication between school and parents.',
      ],
      id: [
        'Tunggakan SPP berkurang 30% berkat reminder otomatis.',
        'Guru hemat waktu administrasi 40%.',
        'Komunikasi sekolah dan orang tua lebih seamless.',
      ],
    },
    techStack: ['LMS Integration', 'Parent Portal', 'Finance Module'],
  },
  'asset-lending-library': {
    id: 'asset-lending-library',
    title: {
      en: 'Campus Asset Lending',
      id: 'Peminjaman Aset Kampus',
    },
    subtitle: {
      en: 'Lab & Library Management',
      id: 'Manajemen Lab & Perpustakaan',
    },
    industry: 'Education',
    icon: ClipboardList,
    color: 'lime',
    category: 'Asset Management',
    challenge: {
      en: 'Universities often lose expensive lab equipment and library books because student loan records are still manual in ledger books.',
      id: 'Universitas sering kehilangan peralatan lab mahal dan buku perpustakaan karena pencatatan peminjaman mahasiswa masih manual di buku besar.',
    },
    solution: {
      en: 'Digital Asset Lending System. Students scan KTM (Student ID Card) to borrow items. Automatic fine notifications if late to return.',
      id: 'Sistem Peminjaman Aset Digital. Mahasiswa scan KTM (Kartu Tanda Mahasiswa) untuk pinjam barang. Notifikasi denda otomatis jika telat kembali.',
    },
    results: {
      en: [
        'Campus asset loss drastically reduced.',
        'Lab equipment location tracking becomes easy.',
        'Revenue from late fees managed transparently.',
      ],
      id: [
        'Kehilangan aset kampus turun drastis.',
        'Tracking lokasi alat lab menjadi mudah.',
        'Pendapatan dari denda keterlambatan terkelola transparan.',
      ],
    },
    techStack: ['Barcode Scanner', 'Fine Calculation', 'Student Portal'],
  },

  // --- 12. AUTOMOTIVE (2 Cases) ---
  'workshop-management': {
    id: 'workshop-management',
    title: {
      en: 'Digital Workshop Flow',
      id: 'Alur Bengkel Digital',
    },
    subtitle: {
      en: 'Job Order & Sparepart Tracking',
      id: 'Pelacakan Job Order & Sparepart',
    },
    industry: 'Automotive',
    icon: Wrench,
    color: 'slate',
    category: 'Operations',
    challenge: {
      en: 'Authorized workshops often lose spare parts and mechanics work inefficiently due to irregular service queues. Customer cost estimates are often inaccurate.',
      id: 'Bengkel resmi sering kehilangan sparepart dan mekanik bekerja tidak efisien karena antrian servis tidak teratur. Estimasi biaya ke customer sering meleset.',
    },
    solution: {
      en: 'End-to-End Workshop Management System. Online service booking, tablet for mechanics (update work status), and spare parts pickup requires WO (Work Order) barcode scan.',
      id: 'Sistem Manajemen Bengkel End-to-End. Booking servis online, tablet untuk mekanik (update status pengerjaan), dan pengambilan sparepart wajib scan barcode WO (Work Order).',
    },
    results: {
      en: [
        'Daily service capacity increased by 20%.',
        'Spare parts stock discrepancy becomes 0%.',
        'Customer trust increases with transparent progress.',
      ],
      id: [
        'Kapasitas servis harian naik 20%.',
        'Selisih stok sparepart menjadi 0%.',
        'Kepercayaan customer meningkat dengan transparansi progres.',
      ],
    },
    techStack: ['Tablet Interface', 'Barcode Scanning', 'Booking System'],
  },
  'showroom-crm': {
    id: 'showroom-crm',
    title: {
      en: 'Showroom CRM & Leads',
      id: 'CRM & Leads Showroom',
    },
    subtitle: {
      en: 'Test Drive & Sales Tracking',
      id: 'Pelacakan Test Drive & Penjualan',
    },
    industry: 'Automotive',
    icon: Users,
    color: 'red',
    category: 'Sales & CRM',
    challenge: {
      en: 'Car showroom sales often forget to follow up potential buyers after test drives. Prospect database is not centralized.',
      id: 'Sales showroom mobil sering lupa follow-up calon pembeli potensial setelah test drive. Database prospek tidak terpusat.',
    },
    solution: {
      en: 'Automotive-specific CRM. Test drive schedule integrated with calendar. Automatic reminders for follow-up D+1, D+3, D+7. SPK status tracking.',
      id: 'CRM Khusus Otomotif. Jadwal test drive terintegrasi kalender. Reminder otomatis untuk follow-up H+1, H+3, H+7. Tracking status SPK.',
    },
    results: {
      en: [
        'Test-drive to sales conversion increased by 15%.',
        'Prospect database is company-owned, not personal sales property.',
        'More organized display unit management.',
      ],
      id: [
        'Konversi test-drive ke penjualan naik 15%.',
        'Database prospek aman milik perusahaan, bukan sales pribadi.',
        'Manajemen unit display lebih teratur.',
      ],
    },
    techStack: ['CRM Pipeline', 'Calendar Sync', 'WhatsApp Integration'],
  },

  // --- 13. AGRICULTURE (2 Cases) ---
  'harvest-tracking': {
    id: 'harvest-tracking',
    title: {
      en: 'Precision Farming ERP',
      id: 'ERP Pertanian Presisi',
    },
    subtitle: {
      en: 'Crop Cycle & Yield Analysis',
      id: 'Siklus Tanaman & Analisis Hasil Panen',
    },
    industry: 'Agriculture',
    icon: Sprout,
    color: 'lime',
    category: 'Manufacturing & Production',
    challenge: {
      en: 'Palm oil company struggles to monitor productivity per land block and prevent harvest theft during transport to factory.',
      id: 'Perusahaan sawit kesulitan memantau produktivitas per blok lahan dan mencegah pencurian hasil panen saat transportasi ke pabrik.',
    },
    solution: {
      en: 'Mobile Harvest Application. Foreman scans block QR code and records harvest results in field (offline-first). Digital scale at factory integrates to validate shipment data.',
      id: 'Aplikasi Panen Mobile. Mandor scan QR code blok dan catat hasil panen di lapangan (offline-first). Timbangan digital di pabrik terintegrasi validasi data pengiriman.',
    },
    results: {
      en: [
        'Accurately mapped yield per hectare for fertilizer analysis.',
        'Eliminated harvest leakage during transport.',
        'Harvester wages calculated automatically based on performance.',
      ],
      id: [
        'Yield per hektar terpetakan akurat untuk analisis pupuk.',
        'Kebocoran hasil panen saat transportasi hilang.',
        'Gaji pemanen dihitung otomatis berdasarkan performa.',
      ],
    },
    techStack: ['Offline-first App', 'IoT Scale', 'GIS Mapping'],
  },
  'livestock-management': {
    id: 'livestock-management',
    title: {
      en: 'Livestock Health Tracking',
      id: 'Pelacakan Kesehatan Ternak',
    },
    subtitle: {
      en: 'Cattle Lifecycle Management',
      id: 'Manajemen Siklus Hidup Sapi',
    },
    industry: 'Agriculture',
    icon: Beef,
    color: 'amber',
    category: 'Asset Management',
    challenge: {
      en: 'Beef cattle farm with 1000 heads struggles to track health history, vaccinations, and daily weight gain (ADG) of each cow manually.',
      id: 'Peternakan sapi potong dengan 1000 ekor sulit melacak riwayat kesehatan, vaksinasi, dan pertambahan bobot harian (ADG) tiap sapi secara manual.',
    },
    solution: {
      en: 'Livestock Management System with RFID Ear Tags. Scan tag to input weighing data, illness, or breeding. Weight growth charts automatically generated.',
      id: 'Sistem Manajemen Ternak dengan RFID Ear Tag. Scan tag untuk input data timbang, sakit, atau kawin. Grafik pertumbuhan bobot otomatis terbentuk.',
    },
    results: {
      en: [
        'Faster early detection of sick cattle.',
        'Superior breeding selection based on real data.',
        'More efficient feed planning according to weight.',
      ],
      id: [
        'Deteksi dini sapi sakit lebih cepat.',
        'Seleksi bibit unggul berbasis data riil.',
        'Perencanaan pakan lebih efisien sesuai bobot.',
      ],
    },
    techStack: ['RFID Reader', 'Growth Chart', 'Health Log'],
  },

  // --- 14. NON-PROFIT (1 Case) ---
  'ngo-fund-tracking': {
    id: 'ngo-fund-tracking',
    title: {
      en: 'Transparent Fund Tracking',
      id: 'Pelacakan Dana Transparan',
    },
    subtitle: {
      en: 'Donor Reporting & Program Allocation',
      id: 'Pelaporan Donor & Alokasi Program',
    },
    industry: 'Non-Profit',
    icon: HeartHandshake,
    color: 'pink',
    category: 'Finance & Accounting',
    challenge: {
      en: 'International NGO struggles to create fund accountability reports to donors specific per program/country. Operational funds and aid funds are often mixed.',
      id: 'NGO internasional kesulitan membuat laporan pertanggungjawaban dana ke donor yang spesifik per program/negara. Dana operasional dan dana bantuan sering tercampur.',
    },
    solution: {
      en: 'Fund Accounting System. Each donation is tagged to specific program \'Cost Center\'. Real-time fund usage reports available for donors via portal.',
      id: 'Sistem Akuntansi Dana (Fund Accounting). Setiap donasi ditagging ke \'Cost Center\' program spesifik. Laporan penggunaan dana real-time tersedia untuk donor via portal.',
    },
    results: {
      en: [
        'Donor trust significantly increased.',
        'Annual audit report preparation time reduced by 60%.',
        'More targeted aid fund allocation.',
      ],
      id: [
        'Kepercayaan donor meningkat signifikan.',
        'Waktu pembuatan laporan audit tahunan berkurang 60%.',
        'Alokasi dana bantuan lebih tepat sasaran.',
      ],
    },
    techStack: ['Cost Center Mgmt', 'Donor Portal', 'Multi-currency'],
  },
};
