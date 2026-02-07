import type { IndustryData, RoleData } from '../types';

import {
  ArrowLeftRight,
  Briefcase,
  Building,
  Building2,
  Calculator,
  Calendar,
  CheckCircle,
  Clipboard,
  Clock,
  Cpu,
  CreditCard,
  Database,
  DollarSign,
  Factory,
  FileText,
  Globe,
  HardHat,
  HeartPulse,
  Landmark,
  LayoutGrid,
  List,
  Map,
  Monitor,
  Navigation,
  Package,
  PieChart,
  Plane,
  RefreshCw,
  Scan,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Store,
  Target,
  Ticket,
  TrendingUp,
  Truck,
  UserCheck,
  Users,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react';

// --- INDUSTRIES DATA ---
export const industriesData: Record<string, IndustryData> = {
  construction: {
    title: 'Construction & Engineering',
    subtitle: 'Profit Maksimal di Setiap Proyek. Anti Boncos.',
    description:
      'Platform manajemen konstruksi end-to-end untuk Kontraktor & Developer. Kunci budget RAB, pantau progres Kurva-S real-time, dan amankan cashflow dari termin yang macet.',
    metaTitle: 'Software ERP Konstruksi & Kontraktor (RAB & Proyek)',
    metaDesc:
      'Aplikasi manajemen proyek konstruksi terbaik. Fitur RAB vs Realisasi, Laporan Harian, Manajemen Subkon, dan Perhitungan PPh Final Jasa Konstruksi.',
    icon: HardHat,
    metrics: [
      { value: '100%', label: 'Kontrol Budget (RAB)' },
      { value: 'H+0', label: 'Real-time Costing' },
      { value: 'Auto', label: 'Laporan Kurva-S' },
    ],
    challenges: [
      {
        title: 'Budget \'Bocor Halus\'',
        desc: 'Material hilang di lapangan, sisa bahan tidak terdata, atau pembelian melebihi volume RAB tanpa approval.',
      },
      {
        title: 'Cashflow Macet',
        desc: 'Tagihan termin ke Owner terlambat diajukan karena data opname fisik dari lapangan belum direkap admin.',
      },
      {
        title: 'Subkon Bermasalah',
        desc: 'Sulit melacak DP Subkon, potongan retensi, dan progress kerja mandor yang tidak sesuai pembayaran.',
      },
      {
        title: 'Dokumen Berantakan',
        desc: 'SPK, BA, dan sertifikat proyek tersebar di email, WhatsApp, dan folder lokal. Sulit audit dan cari history.',
      },
    ],
    solutions: [
      {
        title: 'RAB Budget Lock',
        desc: 'Sistem otomatis menolak Purchase Order (PO) jika harga atau volume melebihi sisa budget RAB yang ditetapkan.',
        icon: ShieldCheck,
      },
      {
        title: 'Mobile Opname',
        desc: 'Pelaksana input progres fisik & foto via HP. Opname langsung jadi dasar tagihan termin ke Owner.',
        icon: Smartphone,
      },
      {
        title: 'Subkon & Retensi',
        desc: 'Kelola SPK Subkon, pantau progress, dan hitung otomatis potongan retensi 5% serta PPh 4(2).',
        icon: Users,
      },
    ],
    faqs: [
      {
        question: 'Apakah support perhitungan PPh Final?',
        answer:
          'Ya, sistem otomatis menghitung PPh 4(2) Jasa Konstruksi untuk setiap termin tagihan (Baik ke Owner maupun dari Subkon).',
      },
      {
        question: 'Bisa untuk proyek Multi-Years?',
        answer:
          'Sangat bisa. Sistem mendukung manajemen proyek jangka panjang dengan eskalasi harga dan tracking termin bertahap.',
      },
      {
        question: 'Bagaimana jika material sisa?',
        answer:
          'Tersedia fitur Material Transfer untuk memindahkan sisa stok ke proyek lain atau dikembalikan ke Gudang Utama.',
      },
    ],
    caseStudyTitle: 'Selamatkan Margin 12%',
    caseStudy:
      'PT Konstruksi Jaya Abadi berhasil mendeteksi kebocoran material senilai 2M dan meningkatkan margin proyek rata-rata sebesar 12% dengan fitur RAB Locking.',
    testimonial: {
      quote:
        'Dulu kami baru tahu rugi setelah proyek selesai. Sekarang, detik ini material keluar, detik itu juga saya tahu sisa budget proyek tinggal berapa.',
      author: 'Ir. Budi Hartono',
      role: 'Direktur Operasional',
      avatar: 'https://ui-avatars.com/api/?name=Budi+Hartono&background=F59E0B&color=fff',
    },
    apps: [
      {
        id: 'project-management',
        title: 'Manajemen Proyek',
        subtitle: 'Kelola proyek dari RAB hingga serah terima',
        icon: Clipboard,
        features: [
          'RAB Budget Lock',
          'Progress Tracking Real-time',
          'Dokumentasi Proyek Digital',
          'Kurva-S Otomatis',
        ],
      },
      {
        id: 'procurement',
        title: 'Pengadaan Material',
        subtitle: 'Pengadaan material terintegrasi dengan proyek',
        icon: ShoppingCart,
        features: [
          'PO otomatis dari RAB',
          'Vendor Management',
          'Approval Workflow',
          'Tracking Delivery',
        ],
      },
      {
        id: 'finance-construction',
        title: 'Keuangan Proyek',
        subtitle: 'Kontrol cashflow dan termin proyek',
        icon: DollarSign,
        features: [
          'Tagihan Termin Otomatis',
          'PPh 4(2) Konstruksi',
          'Cashflow Proyek',
          'Laporan Laba Rugi',
        ],
      },
      {
        id: 'hr-construction',
        title: 'HR & Subkontraktor',
        subtitle: 'Kelola tenaga kerja dan subkontraktor',
        icon: Users,
        features: ['Absensi Lapangan', 'Payroll Subkon', 'Potongan Retensi 5%', 'Manajemen SPK'],
      },
    ],
  },
  retail: {
    title: 'Retail & Distribution',
    subtitle: 'Stok Akurat. Kasir Cepat. Profit Meningkat.',
    description:
      'Solusi Omnichannel untuk Ritel Modern. Sinkronisasi stok Tokopedia/Shopee/TikTok real-time, cegah kecurangan kasir, dan percepat perputaran inventory.',
    metaTitle: 'Software ERP Retail, POS & Distribusi (Omnichannel)',
    metaDesc:
      'Aplikasi Kasir (POS) dan Inventory untuk Ritel. Integrasi Marketplace, Laporan Stok Harian, dan Analisis Profit per Cabang.',
    icon: ShoppingCart,
    metrics: [
      { value: '100%', label: 'Marketplace Sync' },
      { value: '0', label: 'Selisih Kasir' },
      { value: '3x', label: 'Lebih Cepat Opname' },
    ],
    challenges: [
      {
        title: 'Stok \'Ghaib\'',
        desc: 'Barang di sistem ada, di rak kosong. Atau sebaliknya. Akibatnya sering tolak pesanan atau overselling di marketplace.',
      },
      {
        title: 'Kasir & Fraud',
        desc: 'Potensi kecurangan kasir (diskon fiktif, uang tidak disetor) yang sulit dideteksi tanpa sistem yang ketat.',
      },
      {
        title: 'Dead Stock',
        desc: 'Modal mandek di barang yang tidak laku (slow moving) karena salah prediksi pembelian.',
      },
      {
        title: 'Data Terpecah',
        desc: 'Penjualan online di marketplace, offline di toko, dan stok di gudang tidak terintegrasi. Sulit lihat gambaran bisnis utuh.',
      },
    ],
    solutions: [
      {
        title: 'Omnichannel Hub',
        desc: 'Satu stok untuk semua channel (Toko Fisik, Web, Marketplace). Potong stok otomatis saat ada penjualan dimanapun.',
        icon: Database,
      },
      {
        title: 'POS Anti-Fraud',
        desc: 'Kunci harga jual dan diskon. Kasir tidak bisa ubah harga seenaknya. Wajib setoran (Cash Count) saat tutup shift.',
        icon: Monitor,
      },
      {
        title: 'Smart Reorder',
        desc: 'Sistem memberitahu barang apa yang harus dibeli (Restock) berdasarkan tren penjualan terlaris.',
        icon: RefreshCw,
      },
    ],
    faqs: [
      {
        question: 'Bisa scan barcode barang?',
        answer:
          'Pasti. Mendukung semua jenis scanner barcode (USB/Bluetooth) dan cetak label harga/rak.',
      },
      {
        question: 'Bagaimana jika internet mati?',
        answer:
          'POS kami memiliki fitur Offline Mode. Kasir tetap bisa jualan, data akan sync otomatis saat online kembali.',
      },
      {
        question: 'Apakah support banyak cabang?',
        answer:
          'Ya, Anda bisa pantau omzet dan stok ribuan cabang secara real-time dari satu dashboard pusat.',
      },
    ],
    caseStudyTitle: 'Omzet Naik 30%',
    caseStudy:
      'Berkah Mart Group berhasil menghilangkan \'lost sales\' akibat stok kosong dan meningkatkan omzet 30% berkat integrasi stok marketplace real-time.',
    testimonial: {
      quote:
        'Dulu stok opname itu mimpi buruk, harus tutup toko 2 hari. Sekarang sambil jualan pun bisa opname parsial via HP.',
      author: 'Dewi Sartika',
      role: 'Operational Manager',
      avatar: 'https://ui-avatars.com/api/?name=Dewi+Sartika&background=10B981&color=fff',
    },
    apps: [
      {
        id: 'pos',
        title: 'Point of Sale (POS)',
        subtitle: 'Kasir modern dengan anti-fraud system',
        icon: Monitor,
        features: [
          'Multi-payment Methods',
          'Split Bill & Discount',
          'Offline Mode',
          'Integrasi Printer',
        ],
      },
      {
        id: 'inventory-retail',
        title: 'Manajemen Inventori',
        subtitle: 'Kontrol stok multi-cabang real-time',
        icon: Package,
        features: [
          'Omnichannel Sync',
          'Auto Reorder Point',
          'Barcode Scanning',
          'Stock Opname Mobile',
        ],
      },
      {
        id: 'marketplace-integration',
        title: 'Integrasi Marketplace',
        subtitle: 'Sinkronisasi Tokopedia, Shopee, TikTok',
        icon: Globe,
        features: [
          'Auto Sync Stok',
          'Order Aggregation',
          'Auto Update Harga',
          'Multi-channel Reports',
        ],
      },
      {
        id: 'customer-loyalty',
        title: 'Loyalty & CRM',
        subtitle: 'Program loyalitas dan analisis pelanggan',
        icon: Users,
        features: ['Member Card System', 'Point Rewards', 'Purchase History', 'Targeted Promo'],
      },
    ],
  },
  outsourcing: {
    title: 'Outsourcing & Manpower',
    subtitle: 'Kelola Ribuan Personil Tanpa Drama Payroll.',
    description:
      'Sistem HRIS & Payroll spesialis Outsourcing. Pastikan personil hadir di lokasi klien (Anti-Fake GPS), hitung lembur akurat, dan tagih ke klien tepat waktu.',
    metaTitle: 'Sistem HRIS Outsourcing & Jasa Keamanan',
    metaDesc:
      'Software manajemen outsourcing. Absensi Face ID + Geofencing, Payroll ribuan karyawan, dan Invoicing otomatis ke klien.',
    icon: UserCheck,
    metrics: [
      { value: '0', label: 'Ghost Employee' },
      { value: 'H+1', label: 'Invoice ke Klien' },
      { value: '100%', label: 'Akurasi Lembur' },
    ],
    challenges: [
      {
        title: 'Titip Absen / Fake GPS',
        desc: 'Sulit memastikan personil (Satpam/Cleaning) benar-benar ada di lokasi klien atau hanya memalsukan lokasi.',
      },
      {
        title: 'Payroll Meleset',
        desc: 'Hitung gaji, lembur, dan potongan ribuan karyawan dengan Excel sangat rawan salah dan memakan waktu lama.',
      },
      {
        title: 'Tagihan Telat',
        desc: 'Cashflow terganggu karena invoice ke klien baru bisa dikirim setelah rekap absensi manual selesai (bisa 2 minggu).',
      },
      {
        title: 'Komplain Klien',
        desc: 'Klien sering komplain karena tidak ada transparansi data kehadiran personil. Sulit membuktikan personil hadir sesuai kontrak.',
      },
    ],
    solutions: [
      {
        title: 'Bio-Geo Attendance',
        desc: 'Wajib Selfie (Liveness Detection) + Kunci Lokasi GPS. Tidak bisa titip absen atau pakai Fake GPS.',
        icon: Scan,
      },
      {
        title: 'Auto-Billing',
        desc: 'Invoice tagihan ke klien ter-generate otomatis segera setelah periode cut-off absensi. Lampiran lengkap.',
        icon: FileText,
      },
      {
        title: 'Employee App',
        desc: 'Karyawan cek jadwal shift, slip gaji, dan sisa cuti langsung dari HP sendiri. Kurangi tanya-tanya ke admin.',
        icon: Smartphone,
      },
    ],
    faqs: [
      {
        question: 'Apakah support pola shift rumit?',
        answer:
          'Sangat support. Sistem menangani pola shift 2-1, 5-2, long shift, dan pertukaran shift antar karyawan.',
      },
      {
        question: 'Bagaimana hitung BPJS?',
        answer:
          'Otomatis. Sistem menghitung potongan BPJS Kesehatan & Ketenagakerjaan sesuai aturan terbaru.',
      },
      {
        question: 'Klien bisa akses laporan?',
        answer:
          'Bisa. Tersedia Client Portal agar klien Anda bisa cek kehadiran tim outsourcing secara transparan.',
      },
    ],
    caseStudyTitle: 'Payroll Selesai 1 Hari',
    caseStudy:
      'PT Garda Utama memangkas waktu proses payroll 2.000 satpam dari 7 hari menjadi hanya 1 hari dengan tingkat kesalahan 0%.',
    testimonial: {
      quote:
        'Klien kami sangat puas karena transparansi absensi. Tagihan kami jadi prioritas bayar karena datanya selalu valid dan rapi.',
      author: 'Bambang Pamungkas',
      role: 'Direktur Utama',
      avatar: 'https://ui-avatars.com/api/?name=Bambang+Pamungkas&background=3B82F6&color=fff',
    },
    apps: [
      {
        id: 'attendance-outsourcing',
        title: 'Absensi & Monitoring',
        subtitle: 'Bio-geo attendance dengan anti-fake GPS',
        icon: Scan,
        features: [
          'Face Recognition',
          'Geofencing Lock',
          'Live Photo Capture',
          'Real-time Monitoring',
        ],
      },
      {
        id: 'payroll-outsourcing',
        title: 'Payroll & Kontrak',
        subtitle: 'Payroll ribuan karyawan otomatis',
        icon: DollarSign,
        features: [
          'Perhitungan Lembur',
          'BPJS & PPh 21',
          'Multi-shift Pattern',
          'Slip Gaji Digital',
        ],
      },
      {
        id: 'billing-client',
        title: 'Billing ke Klien',
        subtitle: 'Invoice otomatis berdasarkan attendance',
        icon: FileText,
        features: [
          'Auto-Generate Invoice',
          'Lampiran Lengkap',
          'Tracking Pembayaran',
          'Report Recap',
        ],
      },
      {
        id: 'employee-portal',
        title: 'Portal Karyawan',
        subtitle: 'Self-service untuk tenaga kerja outsourcing',
        icon: Smartphone,
        features: ['Cek Jadwal Shift', 'Download Slip Gaji', 'Pengajuan Cuti', 'Update Data Diri'],
      },
    ],
  },

  travel: {
    title: 'Travel & Hospitality',
    subtitle: 'Atur Ribuan Jamaah & Wisatawan Tanpa Excel Error.',
    description:
      'Sistem manajemen Biro Perjalanan Umrah & Wisata. Kelola seat airlines, validitas paspor jamaah, manifest otomatis, dan hitung profit per keberangkatan (Group) secara real-time.',
    metaTitle: 'Software ERP Tour & Travel (Umrah & Wisata)',
    metaDesc:
      'Aplikasi pembukuan dan manajemen travel agent. Inventory Seat, Expiry Dokumen, Auto-Manifest, dan Laporan Laba Rugi per Group.',
    icon: Plane,
    metrics: [
      { value: '100%', label: 'Seat Utilization' },
      { value: '0', label: 'Dokumen Expired' },
      { value: 'Real-time', label: 'Profit per Group' },
    ],
    challenges: [
      {
        title: 'Double Booking',
        desc: 'Seat di maskapai atau kamar hotel bentrok karena pencatatan manual di Excel yang tidak terupdate.',
      },
      {
        title: 'Dokumen Expired',
        desc: 'Jamaah gagal berangkat karena admin lupa cek masa berlaku paspor atau visa yang habis.',
      },
      {
        title: 'Keuangan Berantakan',
        desc: 'Sulit menghitung HPP per pax (Komponen Visa, Handling, Perlengkapan) sehingga margin keuntungan tidak jelas.',
      },
      {
        title: 'Customer Service Overload',
        desc: 'Ribuan jamaah menghubungi CS untuk tanya status dokumen, pembayaran, dan jadwal. Tim CS kewalahan.',
      },
    ],
    solutions: [
      {
        title: 'Inventory Seat Live',
        desc: 'Monitor sisa seat setiap paket/tanggal keberangkatan secara real-time. Cegah overselling.',
        icon: Ticket,
      },
      {
        title: 'Document Alert',
        desc: 'Notifikasi otomatis jika paspor atau visa jamaah mendekati expired date sebelum keberangkatan.',
        icon: Clipboard,
      },
      {
        title: 'Profit per Group',
        desc: 'Laba rugi dihitung otomatis per keberangkatan (Revenue dari Jamaah - Cost Vendor) secara akurat.',
        icon: PieChart,
      },
    ],
    faqs: [
      {
        question: 'Bisa cetak Manifest otomatis?',
        answer:
          'Bisa. Manifest penerbangan dan rooming list hotel ter-generate otomatis dari data jamaah.',
      },
      {
        question: 'Apakah support pembayaran bertahap?',
        answer:
          'Ya, sistem mencatat DP, cicilan, dan pelunasan jamaah serta mengirim notifikasi jatuh tempo.',
      },
      {
        question: 'Bagaimana dengan inventory perlengkapan?',
        answer:
          'Stok koper, kain ihram, dan perlengkapan lainnya terpantau otomatis saat diserahkan ke jamaah.',
      },
    ],
    caseStudyTitle: 'Zero Gagal Berangkat',
    caseStudy:
      'Travel Al-Mabrur menghilangkan insiden gagal berangkat akibat dokumen expired dan meningkatkan margin 15% berkat kontrol HPP yang ketat.',
    testimonial: {
      quote:
        'Mengurus 500 jamaah umrah per bulan dulu sangat stress. Sekarang semua data paspor, visa, dan pembayaran terpantau rapi di satu layar.',
      author: 'Hj. Siti Aminah',
      role: 'Owner Travel',
      avatar: 'https://ui-avatars.com/api/?name=Siti+Aminah&background=D946EF&color=fff',
    },
    apps: [
      {
        id: 'tour-travel-app',
        title: 'Aplikasi Tour & Travel',
        subtitle: 'Manajemen paket tour dan booking',
        icon: Plane,
        features: [
          'Manajemen Paket & Itinerary',
          'Booking Online',
          'Seat Inventory',
          'HPP per Pax',
        ],
      },
      {
        id: 'umrah-management-app',
        title: 'Sistem Umrah',
        subtitle: 'Platform khusus manajemen jamaah umrah',
        icon: Users,
        features: [
          'Database Jamaah Lengkap',
          'Tracking Visa & Paspor',
          'Manifes Otomatis',
          'Rooming List',
        ],
      },
      {
        id: 'document-tracking',
        title: 'Tracking Dokumen',
        subtitle: 'Monitor expiry dan kelengkapan dokumen',
        icon: Clipboard,
        features: [
          'Alert Passport Expired',
          'Visa Status Tracking',
          'Perlengkapan Jamaah',
          'Voucher Terbit Otomatis',
        ],
      },
      {
        id: 'finance-travel',
        title: 'Keuangan Travel',
        subtitle: 'Pembayaran dan profit per grup',
        icon: DollarSign,
        features: [
          'Cicilan & DP Tracking',
          'Profit per Group',
          'Rekap Vendor Payment',
          'Laporan Keuangan',
        ],
      },
    ],
  },
  consulting: {
    title: 'Consulting & Agency',
    subtitle: 'Stop Revenue Leakage. Maksimalkan Billable Hours.',
    description:
      'ERP untuk Konsultan, Law Firm, dan Agency. Catat setiap menit kerja tim, pantau profitabilitas proyek real-time, dan pastikan tidak ada biaya yang tidak tertagih.',
    metaTitle: 'ERP Jasa Profesional & Konsultan (Project Management)',
    metaDesc:
      'Manajemen proyek untuk konsultan. Timesheet, Project Costing, dan Billing Management untuk memaksimalkan margin.',
    icon: Briefcase,
    metrics: [
      { value: '98%', label: 'Billable Capture' },
      { value: 'Real-time', label: 'Project Margin' },
      { value: '20%', label: 'Utilisasi Naik' },
    ],
    challenges: [
      {
        title: 'Jam Kerja \'Hilang\'',
        desc: 'Banyak pekerjaan tambahan (Scope Creep) yang tidak tercatat dan akhirnya gratisan. Revenue bocor.',
      },
      {
        title: 'Proyek Boncos',
        desc: 'Biaya gaji tim melebihi nilai kontrak proyek, tapi baru disadari saat proyek sudah selesai.',
      },
      {
        title: 'Rebutan Resource',
        desc: 'Project Manager berebut staff ahli (Senior) tanpa melihat beban kerja mereka yang sebenarnya.',
      },
      {
        title: 'Invoice Tertunda',
        desc: 'Invoice ke klien sering tertunda karena timesheet belum lengkap atau approval macet. Cashflow terganggu.',
      },
    ],
    solutions: [
      {
        title: 'Mobile Timesheet',
        desc: 'Tim input jam kerja semudah update status sosmed. Reminder otomatis jika lupa isi timesheet.',
        icon: Clock,
      },
      {
        title: 'Project P&L Live',
        desc: 'Lihat laba/rugi proyek detik ini juga. Revenue (Termin) dikurangi Cost (Gaji + Expense) secara otomatis.',
        icon: PieChart,
      },
      {
        title: 'Resource Heatmap',
        desc: 'Visualisasi siapa yang overload dan siapa yang idle. Alokasikan tim dengan lebih bijak.',
        icon: Users,
      },
    ],
    faqs: [
      {
        question: 'Bisa beda rate per level?',
        answer:
          'Ya. Rate Partner, Senior, dan Junior bisa diset berbeda untuk perhitungan billing ke klien.',
      },
      {
        question: 'Bagaimana dengan Reimbursment?',
        answer:
          'Expense claim (Taksi/Hotel) bisa langsung di-tag ke proyek tertentu untuk ditagihkan kembali ke klien.',
      },
      {
        question: 'Integrasi Kalender?',
        answer: 'Ya, task dan deadline bisa sync dengan Google Calendar atau Outlook.',
      },
    ],
    caseStudyTitle: 'Profit Margin Naik 25%',
    caseStudy:
      'Firma Hukum SIP & Partners meningkatkan profitabilitas proyek sebesar 25% hanya dengan disiplin pencatatan timesheet digital.',
    testimonial: {
      quote:
        'Dulu kami sering under-charge klien. Sekarang setiap menit keahlian kami dihargai dengan layak. Sistem ini membayar dirinya sendiri.',
      author: 'Sarah Wijaya',
      role: 'Managing Partner',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Wijaya&background=8B5CF6&color=fff',
    },
    apps: [
      {
        id: 'project-consulting',
        title: 'Manajemen Proyek',
        subtitle: 'Tracking proyek dan profitability real-time',
        icon: Briefcase,
        features: [
          'Project P&L Live',
          'Resource Allocation',
          'Milestone Tracking',
          'Budget Control',
        ],
      },
      {
        id: 'timesheet',
        title: 'Timesheet Digital',
        subtitle: 'Catat setiap menit kerja dengan mudah',
        icon: Clock,
        features: [
          'Mobile Timesheet',
          'Auto Reminder',
          'Billable vs Non-billable',
          'Approval Workflow',
        ],
      },
      {
        id: 'billing-invoicing',
        title: 'Billing & Invoicing',
        subtitle: 'Invoice otomatis berdasarkan timesheet',
        icon: FileText,
        features: [
          'Progressive Billing',
          'Retainer Management',
          'Expense Reimbursement',
          'Payment Tracking',
        ],
      },
      {
        id: 'client-portal-consulting',
        title: 'Client Portal',
        subtitle: 'Transparansi untuk klien',
        icon: Globe,
        features: ['Progress Reports', 'Document Sharing', 'Invoice History', 'Communication Log'],
      },
    ],
  },
  manufacturing: {
    title: 'Manufacturing',
    subtitle: 'Efisiensi Pabrik: Dari Bahan Baku Jadi Profit.',
    description:
      'Sistem Manufaktur Terintegrasi. Rencanakan produksi (MRP), kontrol resep (BOM), dan hitung HPP aktual secara presisi untuk menekan waste.',
    metaTitle: 'Software ERP Manufaktur & Pabrik (MRP)',
    metaDesc:
      'Aplikasi produksi pabrik. Material Requirement Planning (MRP), Bill of Material (BOM), dan Perhitungan HPP Produksi.',
    icon: Factory,
    metrics: [
      { value: '100%', label: 'Akurasi HPP' },
      { value: '-20%', label: 'Waste Produksi' },
      { value: 'JIT', label: 'Material Planning' },
    ],
    challenges: [
      {
        title: 'HPP \'Kira-kira\'',
        desc: 'Menghitung Harga Pokok Produksi hanya menebak-nebak, sehingga harga jual tidak kompetitif atau malah rugi.',
      },
      {
        title: 'Bahan Baku Telat',
        desc: 'Produksi stop karena material habis. Purchasing telat order karena tidak ada warning dari gudang.',
      },
      {
        title: 'Waste Tinggi',
        desc: 'Pemakaian bahan baku melebihi standar resep (BOM) tapi tidak terlacak di mana borosnya.',
      },
      {
        title: 'Mesin Breakdown',
        desc: 'Mesin sering rusak di tengah produksi karena tidak ada preventive maintenance schedule. Loss produksi besar.',
      },
    ],
    solutions: [
      {
        title: 'Auto-MRP',
        desc: 'Sistem menghitung kapan dan berapa banyak bahan baku harus dibeli berdasarkan jadwal produksi.',
        icon: Cpu,
      },
      {
        title: 'Strict BOM Control',
        desc: 'Gudang hanya boleh mengeluarkan bahan baku sesuai takaran resep (Bill of Material). Kelebihan minta harus approval.',
        icon: List,
      },
      {
        title: 'Work Order Tracking',
        desc: 'Pantau status barang di setiap stasiun kerja (Potong, Jahit, Packing) secara real-time via tablet.',
        icon: Clipboard,
      },
    ],
    faqs: [
      {
        question: 'Support Multi-Level BOM?',
        answer:
          'Ya, mendukung struktur produk kompleks (Barang Jadi -> Semi Finish -> Raw Material).',
      },
      {
        question: 'Bagaimana hitung biaya overhead?',
        answer:
          'Biaya listrik, penyusutan mesin, dan TK langsung otomatis dibebankan ke unit cost produk.',
      },
      {
        question: 'Cocok untuk Job Order?',
        answer:
          'Sangat cocok untuk pabrik Make-to-Order (Custom) maupun Make-to-Stock (Mass Production).',
      },
    ],
    caseStudyTitle: 'Hemat 500 Juta/Bulan',
    caseStudy:
      'Pabrik Furniture Ekspor \'Kayu Mas\' menghemat 500 juta per bulan dengan menekan waste bahan baku dan penalti keterlambatan ekspor.',
    testimonial: {
      quote:
        'Sekarang saya bisa tawar-menawar harga dengan buyer luar negeri dengan PD, karena saya tahu persis HPP saya sampai ke perak.',
      author: 'Robert Tan',
      role: 'Owner / Factory Manager',
      avatar: 'https://ui-avatars.com/api/?name=Robert+Tan&background=EC4899&color=fff',
    },
    apps: [
      {
        id: 'mrp-production',
        title: 'MRP & Production',
        subtitle: 'Rencana produksi dan material requirement',
        icon: Cpu,
        features: [
          'Auto MRP Calculation',
          'Production Scheduling',
          'Work Order Management',
          'Capacity Planning',
        ],
      },
      {
        id: 'bom-control',
        title: 'BOM Control',
        subtitle: 'Bill of material dan resep produksi',
        icon: List,
        features: [
          'Multi-level BOM',
          'Recipe Management',
          'Material Variance Tracking',
          'Cost Roll-up',
        ],
      },
      {
        id: 'inventory-manufacturing',
        title: 'Inventory & Warehouse',
        subtitle: 'Manajemen stok bahan baku dan WIP',
        icon: Package,
        features: [
          'Raw Material Tracking',
          'WIP Monitoring',
          'Finished Goods',
          'Lot Number Tracking',
        ],
      },
      {
        id: 'quality-control',
        title: 'Quality Control',
        subtitle: 'Kontrol kualitas dan sertifikasi',
        icon: ShieldCheck,
        features: ['QC Checklist', 'Defect Tracking', 'COA Generation', 'Audit Trail'],
      },
    ],
  },
  enterprise: {
    title: 'Enterprise Group',
    subtitle: 'Satu Komando untuk Seluruh Gurita Bisnis.',
    description:
      'ERP Multi-Company untuk Holding. Konsolidasi laporan keuangan belasan anak perusahaan dalam hitungan detik, bukan minggu.',
    metaTitle: 'ERP Enterprise & Holding Company (Multi-Company)',
    metaDesc:
      'Sistem ERP untuk grup perusahaan. Konsolidasi laporan keuangan, transaksi antar-perusahaan (Interco), dan Shared Service.',
    icon: Building,
    metrics: [
      { value: 'H+3', label: 'Fast Closing' },
      { value: '1', label: 'Single Database' },
      { value: 'Auto', label: 'Konsolidasi' },
    ],
    challenges: [
      {
        title: 'Excel \'Neraka\'',
        desc: 'Tim finance lembur berminggu-minggu menggabungkan laporan Excel dari tiap anak usaha yang formatnya beda-beda.',
      },
      {
        title: 'Double Input',
        desc: 'Transaksi jual-beli antar anak usaha (Intercompany) harus diinput ulang di kedua belah pihak. Rawan selisih.',
      },
      {
        title: 'Buta Data Cabang',
        desc: 'Direksi holding sulit memantau kinerja harian anak usaha karena laporan selalu terlambat.',
      },
      {
        title: 'Standarisasi Sulit',
        desc: 'Setiap anak usaha punya cara beda untuk kode barang, akun, dan proses. Sulit konsolidasi dan bandingkan performa.',
      },
    ],
    solutions: [
      {
        title: 'Instant Consolidation',
        desc: 'Laporan Laba Rugi & Neraca Konsolidasi tersedia kapan saja (Real-time). Eliminasi akun silang otomatis.',
        icon: Globe,
      },
      {
        title: 'Interco Automation',
        desc: 'PT A buat Sales Invoice ke PT B, otomatis PT B menerima Purchase Invoice. Hemat waktu 50%.',
        icon: ArrowLeftRight,
      },
      {
        title: 'Standardized Master',
        desc: 'Paksa standarisasi COA, Kode Barang, dan Vendor di seluruh grup untuk data yang bersih.',
        icon: Database,
      },
    ],
    faqs: [
      {
        question: 'Beda mata uang?',
        answer:
          'Bisa. Laporan anak usaha di Singapura (SGD) otomatis dikonversi ke IDR di level Holding.',
      },
      {
        question: 'Keamanan data antar PT?',
        answer:
          'User PT A tidak bisa intip data PT B, kecuali diberi akses khusus. Direksi bisa lihat semua.',
      },
      {
        question: 'Batas jumlah entity?',
        answer:
          'Unlimited. Sistem kami mampu menangani struktur holding bertingkat (Holding -> Sub-Holding -> OpCo).',
      },
    ],
    caseStudyTitle: 'Closing H+3 (Dulu H+20)',
    caseStudy:
      'Nusantara Group (15 Anak Usaha) mempercepat proses closing bulanan dari tanggal 20 menjadi tanggal 3 setiap bulannya.',
    testimonial: {
      quote:
        'Visibilitas adalah kunci. Sekarang saya bisa bangun pagi, buka dashboard, dan tahu persis posisi cash seluruh grup perusahaan.',
      author: 'Lina Suherman',
      role: 'Group CFO',
      avatar: 'https://ui-avatars.com/api/?name=Lina+Suherman&background=6366F1&color=fff',
    },
    apps: [
      {
        id: 'consolidation',
        title: 'Financial Consolidation',
        subtitle: 'Konsolidasi laporan keuangan grup otomatis',
        icon: PieChart,
        features: [
          'Real-time Consolidation',
          'Interco Elimination',
          'Multi-currency',
          'Drill-down Report',
        ],
      },
      {
        id: 'intercompany',
        title: 'Intercompany Transaction',
        subtitle: 'Transaksi antar anak perusahaan terintegrasi',
        icon: ArrowLeftRight,
        features: [
          'Auto Mirror Entry',
          'Interco Reconciliation',
          'Transfer Pricing',
          'Eliminasi Otomatis',
        ],
      },
      {
        id: 'shared-services',
        title: 'Shared Services',
        subtitle: 'Sentralisasi fungsi pendukung grup',
        icon: Building,
        features: ['Centralized AP/AR', 'Group Procurement', 'Shared HR', 'Cost Allocation'],
      },
      {
        id: 'holding-dashboard',
        title: 'Holding Dashboard',
        subtitle: 'Monitoring seluruh anak usaha',
        icon: Globe,
        features: [
          'Group Cash Position',
          'Performance by Entity',
          'Comparative Analysis',
          'Alert & Notification',
        ],
      },
    ],
  },

  // --- NEW INDUSTRIES ---
  bfsi: {
    title: 'Banking & Financial Services',
    subtitle: 'Kelola Risiko, Portfolio, dan Kepatuhan dalam Satu Platform.',
    description:
      'ERP untuk BPR, leasing, multifinance, dan asuransi. Kelola loan, tracking angsuran, dan compliance OJK secara terintegrasi.',
    metaTitle: 'Software ERP BFSI: Banking, Leasing & Insurance',
    metaDesc:
      'Sistem manajemen untuk perbankan dan keuangan. Loan management, credit scoring, multi-currency, dan regulatory compliance OJK.',
    icon: Landmark,
    metrics: [
      { value: '99%', label: 'Collection Rate' },
      { value: 'Auto', label: 'OJK Reporting' },
      { value: 'Real-time', label: 'Risk Monitoring' },
    ],
    challenges: [
      {
        title: 'Default Risk',
        desc: 'Sulit memantau kesehatan portfolio pembiayaan dan mendeteksi nasabah bermasalah sebelum terlambat.',
      },
      {
        title: 'Manual Reconciliation',
        desc: 'Rekonsiliasi transaksi bank dan laporan keuangan memakan waktu berhari-hari setiap akhir bulan.',
      },
      {
        title: 'Compliance Reporting',
        desc: 'Laporan regulasi OJK memerlukan format khusus dan data yang akurat, seringkali memakan banyak waktu persiapan.',
      },
      {
        title: 'Fraud & NPL',
        desc: 'Sulit mendeteksi aplikasi kredit palsu dan nasabah dengan riwayat kredit buruk sebelum approve. NPL sulit diprediksi.',
      },
    ],
    solutions: [
      {
        title: 'Loan Management',
        desc: 'Pantau seluruh portfolio pembiayaan real-time. Tracking angsuran, bunga, dan denda otomatis dengan reminder via WhatsApp.',
        icon: FileText,
      },
      {
        title: 'Credit Scoring',
        desc: 'Sistem penilaian kredit berbasis data untuk mengurangi risiko kredit macet dan mempercepat approval.',
        icon: TrendingUp,
      },
      {
        title: 'Multi-currency',
        desc: 'Transaksi dalam berbagai mata uang dengan kurs real-time. Ideal untuk leasing impor atau joint venture.',
        icon: Globe,
      },
      {
        title: 'OJK Compliance',
        desc: 'Laporan regulasi OJK ter-generate otomatis sesuai format standar. Siap audit kapan saja.',
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        question: 'Apakah support perhitungan bunga anuitas dan flat?',
        answer:
          'Ya, sistem mendukung berbagai skema perhitungan bunga termasuk anuitas, flat, dan efektif sesuai kebutuhan produk.',
      },
      {
        question: 'Bagaimana dengan integrasi rekening bank?',
        answer:
          'Tersedia integrasi dengan berbagai bank untuk auto-reconciliation dan cek saldo real-time.',
      },
      {
        question: 'Apakah bisa generate laporan ke OJK?',
        answer:
          'Ya, laporan regulasi seperti LHKPN, LHKPU, dan laporan perkembangan kredit tersedia dalam format standar OJK.',
      },
    ],
    caseStudyTitle: 'NPL Turun 40%',
    caseStudy:
      'PT Multifinance Sejahtera berhasil menurunkan Non-Performing Loan sebesar 40% dengan sistem credit scoring dan monitoring otomatis.',
    testimonial: {
      quote:
        'Kami bisa melihat kesehatan portfolio secara real-time. Approval kredit yang dulu butuh 3 hari sekarang hanya 2 jam dengan data yang valid.',
      author: 'Ahmad Santoso',
      role: 'Kepala Divisi Kredit',
      avatar: 'https://ui-avatars.com/api/?name=Ahmad+Santoso&background=10B981&color=fff',
    },
    apps: [
      {
        id: 'loan-management',
        title: 'Loan Management',
        subtitle: 'Pantau portfolio pembiayaan real-time',
        icon: FileText,
        features: [
          'Portfolio Dashboard',
          'Installment Tracking',
          'Late Payment Alert',
          'Collection Management',
        ],
      },
      {
        id: 'credit-scoring',
        title: 'Credit Scoring',
        subtitle: 'Penilaian kredit berbasis data',
        icon: TrendingUp,
        features: [
          'Risk Scoring Model',
          'Auto Approval Rules',
          'Credit Bureau Integration',
          'NPL Prediction',
        ],
      },
      {
        id: 'multi-currency',
        title: 'Multi-Currency',
        subtitle: 'Transaksi dalam berbagai mata uang',
        icon: Globe,
        features: [
          'Real-time Exchange Rate',
          'Hedging Support',
          'Multi-currency Reporting',
          'Cross-border Loans',
        ],
      },
      {
        id: 'ojk-compliance',
        title: 'OJK Compliance',
        subtitle: 'Laporan regulasi otomatis',
        icon: ShieldCheck,
        features: [
          'Auto Generate LHKPN',
          'Regulatory Reports',
          'Audit Trail',
          'Compliance Dashboard',
        ],
      },
    ],
  },

  realestate: {
    title: 'Real Estate & Property',
    subtitle: 'Dari Unit Inventory hingga Serah Terima Kunci.',
    description:
      'Platform untuk developer, property management, dan real estate agency. Kelola unit, booking, cicilan pembeli, dan maintenance.',
    metaTitle: 'Software ERP Properti & Real Estate Developer',
    metaDesc:
      'Sistem manajemen developer dan property. Unit inventory, booking tracking, installment schedule, dan facility management.',
    icon: Building2,
    metrics: [
      { value: '100%', label: 'Unit Visibility' },
      { value: 'Auto', label: 'Installment Schedule' },
      { value: 'H+0', label: 'Booking Status' },
    ],
    challenges: [
      {
        title: 'Unit Tracking Chaos',
        desc: 'Kesulitan melacak status setiap unit (Available, Booked, Sold, Handed Over) di proyek dengan ratusan tower dan tipe unit.',
      },
      {
        title: 'Cashflow Management',
        desc: 'Pembayaran dari pembeli tersebar dalam bertahun-tahun. Sulit memprediksi cashflow dan mengatur rencana pembangunan.',
      },
      {
        title: 'Commission Calculation',
        desc: 'Menghitung komisi agen dengan berbagai skema (progressive, flat, override) sangat kompleks dan rawan salah.',
      },
      {
        title: 'Marketing Tidak Efektif',
        desc: 'Tidak tahu leads mana yang kualitas bagus. Sales follow-up semua leads tanpa prioritization. Biaya marketing tinggi tapi conversion rendah.',
      },
    ],
    solutions: [
      {
        title: 'Unit Inventory',
        desc: 'Visualisasi status setiap unit secara real-time. Cek available unit, booking, dan sold dengan filter berdasarkan tower dan tipe.',
        icon: LayoutGrid,
      },
      {
        title: 'Booking Tracking',
        desc: 'Pantau progress pembayaran pembeli dari booking fee, DP, sampai pelunasan. Auto-reminder untuk jatuh tempo.',
        icon: Clipboard,
      },
      {
        title: 'Installment Schedule',
        desc: 'Generate jadwal angsuran otomatis. Integrasi dengan KPR bank untuk tracking approval dan disbursement.',
        icon: Calendar,
      },
      {
        title: 'Facility Management',
        desc: 'Kelola complaint penghuni, maintenance gedung, dan service charge secara terintegrasi setelah serah terima.',
        icon: Wrench,
      },
    ],
    faqs: [
      {
        question: 'Apakah support multi-tower dan multi-tipe unit?',
        answer:
          'Ya, sistem mendukung proyek dengan banyak tower, basement, dan berbagai tipe unit (studio, 2BR, penthouse, dll).',
      },
      {
        question: 'Bagaimana dengan integrasi KPR bank?',
        answer:
          'Sistem bisa terintegrasi dengan sistem bank untuk tracking status approval KPR pembeli dan disbursement.',
      },
      {
        question: 'Bisa hitung komisi agen otomatis?',
        answer:
          'Ya, sistem menghitung komisi berdasarkan skema yang ditentukan (flat, progressive, override) dan generate statement.',
      },
    ],
    caseStudyTitle: 'Sales Naik 35%',
    caseStudy:
      'PT Propertindo Development meningkatkan sales 35% dengan sistem inventory real-time yang mencegah double-booking dan meningkatkan respons time.',
    testimonial: {
      quote:
        'Dulu kita sering ada masalah double-book unit. Sekarang semua sales bisa lihat status real-time, proses booking jadi lebih cepat dan akurat.',
      author: 'Rina Wijaya',
      role: 'Sales Director',
      avatar: 'https://ui-avatars.com/api/?name=Rina+Wijaya&background=F59E0B&color=fff',
    },
    apps: [
      {
        id: 'unit-inventory',
        title: 'Unit Inventory',
        subtitle: 'Visualisasi status unit real-time',
        icon: LayoutGrid,
        features: [
          'Available/Booked/Sold Tracking',
          'Multi-tower View',
          'Unit Type Filter',
          'Price List Management',
        ],
      },
      {
        id: 'booking-management',
        title: 'Booking & Sales',
        subtitle: 'Kelola booking dan cicilan pembeli',
        icon: Clipboard,
        features: ['Online Booking', 'Installment Schedule', 'Payment Tracking', 'KPR Integration'],
      },
      {
        id: 'marketing-tools',
        title: 'Marketing Tools',
        subtitle: 'Tools untuk sales dan marketing',
        icon: TrendingUp,
        features: [
          'Lead Management',
          'Commission Calculation',
          'Sales Report',
          'Brochure Generator',
        ],
      },
      {
        id: 'property-management',
        title: 'Property Management',
        subtitle: 'Kelola properti setelah serah terima',
        icon: Building2,
        features: [
          'Tenant Management',
          'Maintenance Request',
          'Service Charge',
          'Facility Booking',
        ],
      },
    ],
  },

  healthcare: {
    title: 'Healthcare & Medical',
    subtitle: 'Platform Terintegrasi untuk Klinik & Praktek Modern.',
    description:
      'EMR, appointment scheduling, dan billing untuk klinik, rumah sakit, dan laboratorium. Kelola pasien, jadwal, dan klaim asuransi.',
    metaTitle: 'Software EMR Klinik & Rumah Sakit',
    metaDesc:
      'Electronic Medical Records dan manajemen klinik. Appointment scheduling, patient billing, medicine inventory, dan BPJS integration.',
    icon: HeartPulse,
    metrics: [
      { value: '0%', label: 'No-Show Rate' },
      { value: '100%', label: 'EMR Compliance' },
      { value: '5x', label: 'Faster Billing' },
    ],
    challenges: [
      {
        title: 'Patient Data Management',
        desc: 'Rekam medis tersebar di berbagai file dan lokasi. Sulit melacak riwayat pasien, alergi, dan treatment sebelumnya.',
      },
      {
        title: 'Appointment No-shows',
        desc: 'Pasien sering tidak datang tanpa konfirmasi, menyebabkan slot waktu dokter terbuang dan revenue loss.',
      },
      {
        title: 'Insurance Claims',
        desc: 'Proses klaim asuransi dan BPJS memerlukan dokumentasi lengkap dan format khusus, sering ditolak karena kelengkapan.',
      },
      {
        title: 'Resep & Obat Berantakan',
        desc: 'Resep manual sering hilang atau salah baca. Stok obat tidak terkontrol, sering kehabisan atau expired.',
      },
    ],
    solutions: [
      {
        title: 'Electronic Medical Records',
        desc: 'Rekam medis digital terstruktur. Akses riwayat pasien, diagnosis, resep, dan hasil lab dalam satu klik.',
        icon: FileText,
      },
      {
        title: 'Appointment System',
        desc: 'Booking online via web/app dengan reminder otomatis via WhatsApp/SMS. Kurangi no-show rate hingga minimal.',
        icon: Calendar,
      },
      {
        title: 'Patient Billing',
        desc: 'Tagihan otomatis dari layanan dokter, obat, dan lab. Split billing untuk pasien dengan asuransi dan tunai.',
        icon: CreditCard,
      },
      {
        title: 'BPJS Integration',
        desc: 'Klaim BPJS terintegrasi langsung. Cek eligibility pasien, generate SEP, dan monitoring status klaim.',
        icon: Shield,
      },
    ],
    faqs: [
      {
        question: 'Apakah data pasien aman dan privat?',
        answer:
          'Sangat aman. Data dienkripsi dan akses terbatas sesuai role. Sesuai standar HIPAA untuk medical record privacy.',
      },
      {
        question: 'Support multi-dokter dan multi-poliklinik?',
        answer:
          'Ya, sistem mendukung klinik dengan banyak dokter spesialisasi dan poliklinik berbeda dengan jadwal masing-masing.',
      },
      {
        question: 'Bagaimana dengan inventory obat?',
        answer:
          'Sistem terintegrasi dengan pharmacy module. Tracking stok obat, expiry date, dan otomatis update saat resep diterbitkan.',
      },
    ],
    caseStudyTitle: 'Efisiensi Naik 60%',
    caseStudy:
      'Klinik Medika Sehat meningkatkan efisiensi operasional 60% dengan EMR terintegrasi dan mengurangi waktu administrasi pasien drastis.',
    testimonial: {
      quote:
        'Pasien tidak perlu menunggu lama lagi. Semua data tersedia instan, kami bisa fokus ke pelayanan medis bukan administrasi.',
      author: 'dr. Sarah Amelia',
      role: 'Direktur Klinik',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Amelia&background=EC4899&color=fff',
    },
    apps: [
      {
        id: 'emr',
        title: 'Electronic Medical Records',
        subtitle: 'Rekam medis digital terintegrasi',
        icon: FileText,
        features: [
          'Patient History',
          'Diagnosis & Treatment',
          'Prescription Digital',
          'Lab Results Integration',
        ],
      },
      {
        id: 'appointment',
        title: 'Appointment System',
        subtitle: 'Booking dan jadwal pasien',
        icon: Calendar,
        features: [
          'Online Booking',
          'Doctor Schedule',
          'Queue Management',
          'Reminder Notification',
        ],
      },
      {
        id: 'billing-healthcare',
        title: 'Patient Billing',
        subtitle: 'Tagihan dan klaim asuransi',
        icon: CreditCard,
        features: ['Auto Billing', 'Split Payment', 'BPJS Integration', 'Insurance Claims'],
      },
      {
        id: 'pharmacy',
        title: 'Pharmacy Management',
        subtitle: 'Manajemen obat dan apotek',
        icon: HeartPulse,
        features: [
          'Inventory Obat',
          'Expiry Tracking',
          'Resep Integration',
          'Drug Interaction Alert',
        ],
      },
    ],
  },

  fnb: {
    title: 'Food & Beverage',
    subtitle: 'Kontrol Recipe Cost, Inventory, dan Multi-Outlet.',
    description:
      'Sistem untuk restaurant, cafe, catering, dan cloud kitchen. Recipe costing, inventory bahan mudah expire, dan operasional multi-outlet.',
    metaTitle: 'Software ERP Restaurant & F&B Management',
    metaDesc:
      'Sistem manajemen restaurant dan cafe. Recipe costing, perishable inventory, kitchen display, dan multi-outlet operations.',
    icon: UtensilsCrossed,
    metrics: [
      { value: '±2%', label: 'Food Cost Variance' },
      { value: '0', label: 'Stock Expiry Loss' },
      { value: 'Real-time', label: 'Outlet Performance' },
    ],
    challenges: [
      {
        title: 'Food Cost Control',
        desc: 'Sulit menghitung HPP setiap menu dengan akurat. Waste dan pencurian bahan sering tidak terdeteksi.',
      },
      {
        title: 'Expiry Management',
        desc: 'Bahan makanan mudah expire. Tanpa tracking FIFO, banyak bahan rusak dan harus dibuang.',
      },
      {
        title: 'Supply Consistency',
        desc: 'Cabang outlet seringkali tidak konsistent kualitas dan kuantitas karena tidak ada standarisasi resep dan SOP.',
      },
      {
        title: 'Pencurian & Waste',
        desc: 'Bahan baku sering hilang dicuri karyawan. Sisa makanan (waste) tidak tercatat sehingga food cost membengkak.',
      },
    ],
    solutions: [
      {
        title: 'Recipe Costing',
        desc: 'Hitung HPP setiap menu otomatis berdasarkan resep dan harga bahan terkini. Pantau food cost percentage.',
        icon: Calculator,
      },
      {
        title: 'Perishable Inventory',
        desc: 'Tracking bahan dengan expiry date. Sistem otomatis reminder FIFO dan alert saat mendekati kadaluarsa.',
        icon: Clock,
      },
      {
        title: 'Multi-outlet Ops',
        desc: 'Pantau performa semua outlet dari satu dashboard. Standarisasi menu, harga, dan SOP antar lokasi.',
        icon: Store,
      },
      {
        title: 'Kitchen Display',
        desc: 'Integrasi dengan Kitchen Display System (KDS). Order dari POS langsung muncul di dapur tanpa print manual.',
        icon: Monitor,
      },
    ],
    faqs: [
      {
        question: 'Apakah bisa tracking waste dan void?',
        answer:
          'Ya, sistem mencatat semua waste, void, dan comp dengan alasan. Generate laporan untuk analisis cost control.',
      },
      {
        question: 'Bagaimana dengan supplier integration?',
        answer:
          'Sistem bisa terintegrasi dengan supplier untuk auto-reorder saat stok di bawah minimum dan tracking delivery.',
      },
      {
        question: 'Bisa untuk cloud kitchen model?',
        answer:
          'Sangat cocok. Sistem mendukung multi-brand, multi-kitchen dalam satu lokasi dengan konsolidasi purchasing.',
      },
    ],
    caseStudyTitle: 'Food Cost Turun 15%',
    caseStudy:
      'Restoran chain Nusantara Rasa berhasil menurunkan food cost 15% dengan recipe costing akurat dan mengurangi waste signifikan.',
    testimonial: {
      quote:
        'Kami bisa lihat margin profit setiap menu real-time. Menu yang tidak profitable langsung kami adjust harga atau resepnya.',
      author: 'Chef Budiman',
      role: 'Executive Chef',
      avatar: 'https://ui-avatars.com/api/?name=Budiman&background=F97316&color=fff',
    },
    apps: [
      {
        id: 'recipe-costing',
        title: 'Recipe Costing',
        subtitle: 'Hitung HPP dan margin setiap menu',
        icon: Calculator,
        features: ['Recipe Management', 'Cost Calculation', 'Margin Analysis', 'Menu Engineering'],
      },
      {
        id: 'pos-fnb',
        title: 'POS Restaurant',
        subtitle: 'Point of sale untuk F&B',
        icon: Monitor,
        features: ['Table Management', 'Split Bill', 'Kitchen Display System', 'Offline Mode'],
      },
      {
        id: 'inventory-fnb',
        title: 'Inventory F&B',
        subtitle: 'Kontrol stok bahan makanan',
        icon: Package,
        features: ['Perishable Tracking', 'FIFO Management', 'Auto Reorder', 'Waste Recording'],
      },
      {
        id: 'multi-outlet',
        title: 'Multi-Outlet',
        subtitle: 'Manajemen banyak cabang',
        icon: Store,
        features: ['Central Kitchen', 'Transfer Stock', 'Consolidated Report', 'Outlet Comparison'],
      },
    ],
  },

  logistics: {
    title: 'Logistics & Transportation',
    subtitle: 'Optimalkan Rute, Armada, dan Pengiriman.',
    description:
      'Fleet management, route optimization, dan POD tracking untuk ekspedisi, courier, dan freight forwarding.',
    metaTitle: 'Software Fleet Management & Logistics ERP',
    metaDesc:
      'Sistem manajemen ekspedisi dan logistik. Route optimization, fleet management, proof of delivery, dan real-time tracking.',
    icon: Truck,
    metrics: [
      { value: '30%', label: 'Fuel Savings' },
      { value: '99%', label: 'On-Time Delivery' },
      { value: 'Real-time', label: 'Fleet Tracking' },
    ],
    challenges: [
      {
        title: 'Delivery Delays',
        desc: 'Pengiriman sering terlambat karena rute tidak optimal, macet, atau driver kesulitan menemukan alamat.',
      },
      {
        title: 'Fuel Costs',
        desc: 'Biaya bahan bakar adalah cost terbesar. Rute tidak efisien menyebabkan fuel consumption tinggi.',
      },
      {
        title: 'Vehicle Maintenance',
        desc: 'Armada sering breakdown di jalan karena maintenance tidak terjadwal. Loss revenue dan customer trust.',
      },
      {
        title: 'Customer Complaint',
        desc: 'Konsumen sering komplain karena paket telat, hilang, atau status tracking tidak update. Reputasi rusak.',
      },
    ],
    solutions: [
      {
        title: 'Route Optimization',
        desc: 'Algoritma pintar merencanakan rute terpendek dan tercepat. Hindari macet dan minimize fuel consumption.',
        icon: Map,
      },
      {
        title: 'Fleet Management',
        desc: 'Pantau seluruh armada real-time. Tracking lokasi, kecepatan, dan status kendaraan dalam satu dashboard.',
        icon: Navigation,
      },
      {
        title: 'Proof of Delivery',
        desc: 'POD digital dengan foto, tanda tangan, dan timestamp. Notifikasi otomatis ke customer saat paket diterima.',
        icon: CheckCircle,
      },
      {
        title: 'Maintenance Schedule',
        desc: 'Jadwal maintenance otomatis berdasarkan km atau waktu. Reminder service, ganti oli, dan spare parts.',
        icon: Wrench,
      },
    ],
    faqs: [
      {
        question: 'Apakah ada driver mobile app?',
        answer:
          'Ya, driver mendapatkan aplikasi mobile untuk melihat rute, update status, dan upload POD foto.',
      },
      {
        question: 'Support multi-vehicle types?',
        answer:
          'Ya, sistem mendukung berbagai jenis kendaraan dari motor, mobil box, truk, hingga kontainer dengan kapasitas berbeda.',
      },
      {
        question: 'Bisa integrasi dengan marketplace?',
        answer:
          'Ya, sistem bisa terintegrasi dengan Tokopedia, Shopee, dan TikTok Shop untuk auto-pickup dan tracking.',
      },
    ],
    caseStudyTitle: 'Efisiensi Rute Naik 40%',
    caseStudy:
      'PT Logistik Nusantara meningkatkan efisiensi rute 40% dan mengurangi fuel cost 25% dengan route optimization algorithm.',
    testimonial: {
      quote:
        'Driver kami sekarang tidak pernah tersesat. Rute optimal membuat mereka bisa kirim lebih banyak paket dalam sehari.',
      author: 'Hendra Wijaya',
      role: 'Fleet Manager',
      avatar: 'https://ui-avatars.com/api/?name=Hendra+Wijaya&background=3B82F6&color=fff',
    },
    apps: [
      {
        id: 'fleet-management',
        title: 'Fleet Management',
        subtitle: 'Pantau dan kelola armada',
        icon: Truck,
        features: ['Real-time Tracking', 'Vehicle Status', 'Driver Management', 'Fuel Monitoring'],
      },
      {
        id: 'route-optimization',
        title: 'Route Optimization',
        subtitle: 'Rute terbaik untuk pengiriman',
        icon: Map,
        features: ['Auto Route Planning', 'Traffic Avoidance', 'Multiple Stops', 'ETA Calculation'],
      },
      {
        id: 'pod-delivery',
        title: 'Proof of Delivery',
        subtitle: 'Bukti pengiriman digital',
        icon: CheckCircle,
        features: ['Photo Capture', 'Digital Signature', 'Timestamp', 'Customer Notification'],
      },
      {
        id: 'warehouse-logistics',
        title: 'Warehouse Management',
        subtitle: 'Manajemen gudang dan stok',
        icon: Package,
        features: ['Inbound/Outbound', 'Location Mapping', 'Stock Opname', 'Cross-docking'],
      },
    ],
  },
};

// --- ROLES DATA ---
export const rolesData: Record<string, RoleData> = {
  ceo: {
    title: 'CEO & Executives',
    subtitle: 'The Captain\'s View',
    icon: TrendingUp,
    metaTitle: 'Dashboard CEO & Business Intelligence',
    metaDesc:
      'Pantau kesehatan bisnis secara real-time. Cashflow, Profitabilitas, dan Sales Pipeline dalam satu layar.',
    heroHeadline: 'Kendali Penuh di Ujung Jari. Tanpa Menebak.',
    heroSub:
      'Berhenti mengandalkan laporan Excel akhir bulan yang terlambat. Dapatkan denyut nadi bisnis Anda secara real-time untuk keputusan yang lebih cepat.',
    cta: { btn: 'Lihat Dashboard CEO', head: 'Siap Mengambil Kendali Penuh?' },
    dashboardInsight: 'Helicopter View: Your Business Cockpit',
    dashboardFeatures: [
      'Live Cashflow Status',
      'Profit & Loss Daily Estimate',
      'Top Expense Alert',
      'Sales Trend Analysis',
    ],
    challenges: [
      {
        pain: 'Keputusan Buta',
        context: 'Membuat keputusan strategis hanya berdasarkan intuisi atau data basi bulan lalu.',
        gain: 'Data-Driven Confidence',
        gainDesc:
          'Akses metrik kunci kapan saja dari HP. Putuskan ekspansi atau efisiensi dengan data valid detik ini juga.',
      },
      {
        pain: 'Operasional Gelap',
        context: 'Tidak tahu apa yang sebenarnya terjadi di lapangan, cabang, atau gudang.',
        gain: 'Total Transparency',
        gainDesc:
          'Drill-down dari laporan global hingga ke level transaksi tunggal untuk audit instan.',
      },
    ],
    metrics: [
      { value: 'Real-time', label: 'Cashflow Visibility' },
      { value: '360°', label: 'Business Overview' },
      { value: 'Auto', label: 'Performance Alert' },
    ],
    apps: ['finance', 'operations', 'sales'],
  },
  finance: {
    title: 'Finance Leaders',
    subtitle: 'Guardian of Value',
    icon: DollarSign,
    metaTitle: 'Software Accounting & Finance Manager',
    metaDesc:
      'Otomatisasi jurnal, kontrol budget, dan manajemen cashflow untuk tim keuangan modern.',
    heroHeadline: 'Bukan Sekadar Pembukuan. Ini Pusat Strategi.',
    heroSub:
      'Transformasi tim finance dari sekadar \'tukang input\' menjadi penasihat strategis perusahaan yang menjaga profitabilitas.',
    cta: { btn: 'Demo Modul Finance', head: 'Modernisasi Departemen Keuangan Anda' },
    dashboardInsight: 'Financial Health Command Center',
    dashboardFeatures: [
      'Budget vs Actual Real-time',
      'Automated Bank Reconciliation',
      'Aging AP/AR Monitoring',
      'Cost Center Analysis',
    ],
    challenges: [
      {
        pain: 'Closing Neraka',
        context:
          'Tim lembur berhari-hari setiap akhir bulan hanya untuk rekap data dari divisi lain yang berantakan.',
        gain: 'Continuous Closing',
        gainDesc:
          'Jurnal terbentuk otomatis saat transaksi operasional terjadi. Closing akhir bulan tinggal validasi satu klik.',
      },
      {
        pain: 'Kebocoran Budget',
        context:
          'Pengeluaran operasional sering over-budget tanpa peringatan dini, menggerus laba.',
        gain: 'Hard Budget Control',
        gainDesc:
          'Sistem memblokir PO/PR secara otomatis jika budget pos tersebut sudah habis. Zero leakage.',
      },
    ],
    metrics: [
      { value: '100%', label: 'Budget Accuracy' },
      { value: 'H+1', label: 'Month-End Closing' },
      { value: '0', label: 'Unreconciled items' },
    ],
    apps: ['finance', 'governance', 'collaboration'],
  },
  hr: {
    title: 'HR Leaders',
    subtitle: 'People Champion',
    icon: Users,
    metaTitle: 'Aplikasi HRD & Payroll Manager',
    metaDesc: 'Kelola administrasi karyawan, payroll, dan performa tim dengan efisien.',
    heroHeadline: 'Administrasi Selesai Otomatis. Fokus ke Manusia.',
    heroSub:
      'Kurangi beban administrasi klerikal hingga 70%. Alihkan waktu Anda untuk pengembangan talenta dan membangun budaya juara.',
    cta: { btn: 'Demo HRIS', head: 'Bangun Pengalaman Karyawan Terbaik' },
    dashboardInsight: 'Workforce Analytics & Engagement',
    dashboardFeatures: [
      'Real-time Turnover Rate',
      'Attendance Heatmap',
      'Payroll Cost Projection',
      'Employee NPS Score',
    ],
    challenges: [
      {
        pain: 'Drama Payroll',
        context:
          'Stres tinggi setiap tanggal cut-off gaji karena data absensi, lembur, dan pinjaman karyawan berantakan.',
        gain: '1-Click Payroll',
        gainDesc:
          'Tarik data absensi, hitung PPh 21 (TER), BPJS, dan generate file transfer bank dalam hitungan menit.',
      },
      {
        pain: 'Risiko Kepatuhan',
        context:
          'Takut salah hitung pajak atau denda keterlambatan BPJS yang bisa merugikan perusahaan.',
        gain: 'Auto Compliance',
        gainDesc:
          'Sistem selalu diperbarui mengikuti regulasi tarif pajak PPh 21 dan BPJS Ketenagakerjaan terbaru.',
      },
    ],
    metrics: [
      { value: '0', label: 'Payroll Errors' },
      { value: '50%', label: 'Admin Time Saved' },
      { value: 'Top', label: 'Talent Retention' },
    ],
    apps: ['hr', 'mobile', 'governance'],
  },
  it: {
    title: 'IT Leaders',
    subtitle: 'Technology Architect',
    icon: Server,
    metaTitle: 'ERP Architecture & Security for IT Manager',
    metaDesc: 'Platform ERP yang aman, scalable, dan developer-friendly. Self-hosted atau Cloud.',
    heroHeadline: 'Platform Modern yang Developer-Friendly.',
    heroSub:
      'Dibangun dengan stack modern (Python/JS/Postgres), API-first, dan container-ready. Bukan sistem legacy \'kotak hitam\' yang kaku.',
    cta: { btn: 'Baca Dokumentasi Teknis', head: 'Evaluasi Arsitektur Kami' },
    dashboardInsight: 'System Health & Security Monitor',
    dashboardFeatures: [
      'API Performance Metrics',
      'Real-time Error Logs',
      'User Access Audit Trail',
      'Integration Status Health',
    ],
    challenges: [
      {
        pain: 'Shadow IT',
        context:
          'User menggunakan aplikasi liar (SaaS tak dikenal) karena sistem kantor sulit digunakan.',
        gain: 'Unified Ecosystem',
        gainDesc:
          'Satu platform modern dengan UX setara aplikasi konsumen yang disukai user, mengurangi kebutuhan aplikasi pihak ketiga.',
      },
      {
        pain: 'Maintenance Hell',
        context:
          'Tim IT habis waktu hanya untuk patching server manual dan fix bug sistem legacy tua.',
        gain: 'Low Maintenance',
        gainDesc:
          'Arsitektur Docker yang stabil, CI/CD ready, dan update OTA (Over-The-Air) yang mulus.',
      },
    ],
    metrics: [
      { value: '99.9%', label: 'System Uptime' },
      { value: '<50ms', label: 'API Latency' },
      { value: '100%', label: 'Data Security' },
    ],
    apps: ['integration', 'self-hosted', 'mobile'],
  },
  ops: {
    title: 'Operations Leaders',
    subtitle: 'Execution Excellence',
    icon: Package,
    metaTitle: 'Operations Management & Supply Chain Software',
    metaDesc:
      'Kelola proyek, inventory, dan supply chain dengan visibilitas real-time. Kontrol biaya operasional dan pastikan on-time delivery.',
    heroHeadline: 'Eksekusi Sempurna. Tepat Waktu, Setiap Waktu.',
    heroSub:
      'Hilangkan blind spot operasional. Pantau progres proyek, kontrol stok gudang, dan kelola logistik dari satu dashboard terpusat.',
    cta: { btn: 'Demo Modul Operations', head: 'Tingkatkan Efisiensi Operasional Anda' },
    dashboardInsight: 'Real-time Operations Command Center',
    dashboardFeatures: [
      'Live Project S-Curve',
      'Low Stock Alert',
      'On-Time Delivery Rate',
      'Cost Variance Analysis',
    ],
    challenges: [
      {
        pain: 'Proyek Molor',
        context:
          'Proyek sering terlambat karena tidak ada visibilitas real-time terhadap progres dan kendala lapangan.',
        gain: 'Real-time Visibility',
        gainDesc:
          'Pantau kurva-S proyek dan terima laporan harian langsung dari lapangan via mobile app. Deteksi masalah sebelum jadi krisis.',
      },
      {
        pain: 'Stok Berantakan',
        context:
          'Sering kehilangan penjualan karena stok kosong, atau sebaliknya modal mati di barang tidak laku.',
        gain: 'Smart Inventory Control',
        gainDesc:
          'Sistem menghitung re-order point otomatis berdasarkan tren penjualan historis. Cegah stockout tanpa overstock.',
      },
    ],
    metrics: [
      { value: '100%', label: 'On-Time Delivery' },
      { value: 'Minimal', label: 'Inventory Waste' },
      { value: 'Auto', label: 'Stock Replenish' },
    ],
    apps: ['work', 'supply', 'mobile'],
  },

  // --- NEW ROLES ---
  sales: {
    title: 'Sales Leaders',
    subtitle: 'Revenue Growth Engine',
    icon: Target,
    metaTitle: 'CRM & Sales Management Dashboard',
    metaDesc:
      'Kelola pipeline, forecast revenue, dan track performance tim sales secara real-time. Maksimalkan conversion dan minimalisasi lost deals.',
    heroHeadline: 'Pipeline Jelas. Forecast Akurat. Closing Lebih Cepat.',
    heroSub:
      'Berhenti menebak target. Dapatkan visibilitas penuh terhadap setiap opportunity, prediksi revenue dengan data, dan pastikan tidak ada leads yang terlewat.',
    cta: { btn: 'Demo CRM & Sales', head: 'Tingkatkan Performance Sales Team Anda' },
    dashboardInsight: 'Sales Pipeline & Revenue Intelligence',
    dashboardFeatures: [
      'Pipeline Visibility & Forecasting',
      'Lead Scoring & Prioritization',
      'Automated Follow-up Reminders',
      'Sales Team Performance Analytics',
    ],
    challenges: [
      {
        pain: 'Lost Leads',
        context:
          'Leads dari marketing masuk tapi tidak di-follow-up dengan baik. Banyak opportunity hilang karena tidak ada sistem tracking.',
        gain: 'Zero Lead Leakage',
        gainDesc:
          'Setiap leads tercatat dan di-assign otomatis. Reminder follow-up memastikan tidak ada opportunity yang terlewat.',
      },
      {
        pain: 'Forecast Inaccuracy',
        context:
          'Prediksi revenue sering meleset karena tidak ada visibility real-time terhadap progress deals di pipeline.',
        gain: 'Predictive Forecasting',
        gainDesc:
          'AI-powered forecasting berdasarkan historical data dan pipeline velocity. Prediksi revenue akurat untuk planning bisnis.',
      },
    ],
    metrics: [
      { value: '3x', label: 'Conversion Rate' },
      { value: '95%', label: 'Forecast Accuracy' },
      { value: '24h', label: 'Response Time' },
    ],
    apps: ['growth', 'analytics', 'mobile'],
  },
  procurement: {
    title: 'Procurement Leaders',
    subtitle: 'Strategic Cost Optimization',
    icon: ShoppingBag,
    metaTitle: 'Procurement & Vendor Management System',
    metaDesc:
      'Kelola purchasing, vendor relationships, dan cost optimization. Pastikan best price dan on-time delivery dari supplier.',
    heroHeadline: 'Belanja Pintar. Biaya Minim. Supplier Terkontrol.',
    heroSub:
      'Transformasi purchasing dari cost center menjadi strategic advantage. Dapatkan best price, kontrol budget, dan pastikan supply chain yang reliable.',
    cta: { btn: 'Demo Procurement', head: 'Optimalkan Purchasing & Supply Chain' },
    dashboardInsight: 'Procurement Intelligence Dashboard',
    dashboardFeatures: [
      'Vendor Performance Scorecard',
      'Purchase Order Tracking',
      'Budget Control & Compliance',
      'Contract & Pricing Management',
    ],
    challenges: [
      {
        pain: 'Maverick Buying',
        context:
          'User membeli barang tanpa melalui procurement, seringkali dengan harga lebih mahal dan tanpa approval yang benar.',
        gain: 'Centralized Purchasing',
        gainDesc:
          'Sistem memastikan semua purchasing melalui approved vendor list dengan harga kontrak. Block unauthorized purchases.',
      },
      {
        pain: 'Price Variance',
        context:
          'Harga barang yang sama berbeda-beda antar transaksi. Sulit menegosiasi best price tanpa historical data.',
        gain: 'Price Intelligence',
        gainDesc:
          'Tracking harga historis per item dan vendor. Analisis trend untuk leverage negosiasi dan achieve cost savings.',
      },
    ],
    metrics: [
      { value: '20%', label: 'Cost Savings' },
      { value: '100%', label: 'Budget Compliance' },
      { value: 'On-Time', label: 'Delivery Rate' },
    ],
    apps: ['supply', 'finance', 'governance'],
  },
};
