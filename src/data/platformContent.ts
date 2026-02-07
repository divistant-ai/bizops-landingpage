import type { FeaturePageData, ModuleData } from '../types/platform';

import {
  Activity,
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  BarChart,
  BarChart2,
  BookOpen,
  Bot,
  BrainCircuit,
  Briefcase,
  Building,
  Calculator,
  Calendar,
  CalendarRange,
  Clock,
  Cloud,
  Code,
  Database,
  DollarSign,
  EyeOff,
  Factory,
  FileBarChart,
  FileCheck,
  FileSpreadsheet,
  FileText,
  FileWarning,
  Filter,
  GanttChartSquare,
  GitMerge,
  Globe,
  GraduationCap,
  Headphones,
  Heart,
  HelpCircle,
  History,
  Hourglass,
  Key,
  Landmark,
  Layers,
  Layout,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  MessageSquare,
  Microscope,
  Network,
  Package,
  Phone,
  PieChart,
  Radio,
  Receipt,
  RefreshCw,
  Repeat,
  ScanLine,
  Search,
  Server,
  Share2,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Tag,
  Target,
  Terminal,
  TrendingDown,
  TrendingUp,
  Truck,
  UserCheck,
  UserPlus,
  Users,
  WifiOff,
  Wrench,
  Zap,
} from 'lucide-react';

// --- MODULES DATA ---
export const modulesData: Record<string, ModuleData> = {
  people: {
    navLabel: 'People',
    navDesc: 'Payroll, Attendance, LMS',
    title: 'People (HRIS)',
    subtitle: 'Otomatisasi Admin HR. Fokus pada Manusia, Bukan Kertas.',
    description:
      'Tinggalkan spreadsheet yang rentan error. BizOps HRIS mengotomatiskan seluruh siklus karyawan—dari rekrutmen hingga pensiun—agar Anda bisa fokus membangun budaya juara.',
    metaTitle: 'Software HRIS Indonesia: Payroll, Absensi & KPI',
    metaDesc:
      'Aplikasi HRIS lengkap dengan Payroll PPh 21 otomatis, Absensi GPS anti-fake, dan Manajemen KPI. Solusi HR strategis untuk perusahaan modern.',
    icon: Users,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    features: [
      {
        title: 'Manajemen Shift Kompleks',
        desc: 'Kelola ribuan jadwal kerja shift (Rostering) tanpa konflik. Validasi kehadiran via Geofencing & Liveness Face Recog untuk cegah kecurangan.',
        icon: UserCheck,
      },
      {
        title: 'Payroll 1-Klik & Pajak Otomatis',
        desc: 'Hitung gaji, lembur, BPJS, dan PPh 21 (TER Terbaru) dalam hitungan detik. Slip gaji dan file transfer bank terbit otomatis tanpa rekonsiliasi manual.',
        icon: Calculator,
      },
      {
        title: 'Talent Growth & LMS',
        desc: 'Onboarding digital yang cepat. Distribusikan materi training (SOP/Video) langsung ke aplikasi karyawan untuk standarisasi kompetensi.',
        icon: GraduationCap,
      },
      {
        title: 'Performance Management (KPI)',
        desc: 'Pantau pencapaian OKR/KPI individu secara transparan. Ubah penilaian subjektif menjadi data kinerja yang objektif.',
        icon: TrendingUp,
      },
      {
        title: 'Recruitment & Onboarding',
        desc: 'Pipeline pelamar (ATS) terpusat. Data kandidat terpilih langsung terkonversi menjadi database karyawan tanpa input ulang.',
        icon: Briefcase,
      },
      {
        title: 'Culture & Engagement',
        desc: 'Deteksi potensi turnover sejak dini lewat Pulse Survey. Bangun budaya apresiasi dengan sistem Reward Point peer-to-peer.',
        icon: Heart,
      },
    ],
    metrics: [
      { value: '90%', label: 'Waktu Admin Terpangkas' },
      { value: '100%', label: 'Akurasi Pajak PPh 21' },
      { value: '0', label: 'Kertas (Paperless)' },
    ],
    problems: [
      {
        title: 'Jebakan Administrasi',
        desc: 'HR terjebak pekerjaan klerikal (input data, rekap absen) sehingga tidak punya waktu untuk strategi.',
        icon: FileSpreadsheet,
      },
      {
        title: 'Risiko Kepatuhan',
        desc: 'Kesalahan hitung PPh 21 atau upah lembur bisa berujung denda pajak dan tuntutan hukum.',
        icon: FileWarning,
      },
      {
        title: 'Turnover Tinggi',
        desc: 'Karyawan resign karena proses cuti/reimburse yang ribet dan kurangnya program pengembangan.',
        icon: TrendingDown,
      },
      {
        title: 'Krisis Talenta',
        desc: 'Posisi kunci kosong terlalu lama karena tidak ada talent pool internal dan perencanaan suksesi.',
        icon: UserPlus,
      },
    ],
    mobileAdvantage: {
      title: 'Layanan HR Mandiri (ESS)',
      desc: 'Berikan otonomi kepada karyawan lewat aplikasi Employee Self-Service (ESS). Mereka bisa mengajukan cuti, tukar shift, klaim reimbursement, hingga download SPT 1721-A1 sendiri tanpa mengganggu tim HR.',
    },
    connections: [
      {
        target: 'Operations',
        desc: 'Data jam kerja riil dari attendance langsung menjadi dasar perhitungan HPP Tenaga Kerja di modul Project Costing.',
      },
      {
        target: 'Finance',
        desc: 'Jurnal gaji, tunjangan, dan hutang pajak terbentuk otomatis di General Ledger saat payroll disetujui (Post Payroll).',
      },
      {
        target: 'Sales',
        desc: 'Perhitungan komisi tim sales otomatis mengalir ke komponen gaji bulanan berdasarkan pencapaian target di CRM.',
      },
    ],
    cta: {
      text: 'Waktunya HR beralih ke tugas yang lebih berdampak.',
      buttonLabel: 'Lihat Demo HRIS',
    },
    testimonial: {
      quote:
        'Proses payroll yang biasanya memakan waktu 5 hari kerja, sekarang selesai dalam hitungan jam. Akurasi pajak juga bukan lagi masalah.',
      author: 'Budi Santoso',
      role: 'HR Director at FastMoving FMCG',
      avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff',
    },
    faqs: [
      {
        question: 'Apakah perhitungan PPh 21 sudah sesuai regulasi TER terbaru?',
        answer:
          'Ya, sistem kami selalu diperbarui otomatis sesuai peraturan pemerintah (UU HPP & PMK Terbaru) tanpa biaya tambahan. Perhitungan TER A/B/C dilakukan otomatis.',
      },
      {
        question: 'Apakah data karyawan dan gaji aman?',
        answer:
          'Sangat aman. Kami menggunakan enkripsi standar perbankan (AES-256) untuk data sensitif dan membatasi akses berdasarkan peran (Role-Based Access Control).',
      },
      {
        question: 'Berapa lama proses migrasi dari Excel/sistem lama?',
        answer:
          'Rata-rata klien kami bisa go-live dalam 1-2 minggu. Kami menyediakan template impor data massal untuk memindahkan data karyawan, shift, dan komponen gaji dengan cepat.',
      },
      {
        question: 'Apakah mendukung sistem kerja shift yang kompleks?',
        answer:
          'Tentu. Modul Time Management kami mendukung berbagai pola shift (3 shift, long shift, roster) dan lembur otomatis yang terintegrasi langsung ke payroll.',
      },
    ],
  },
  money: {
    navLabel: 'Money',
    navDesc: 'Accounting, Expense, Asset',
    title: 'Money (Finance & Procurement)',
    subtitle: 'Kendali Penuh Atas Setiap Rupiah.',
    description:
      'Hilangkan kebocoran anggaran (Budget Leakage) dengan sistem persetujuan bertingkat. Integrasikan pembelian, aset, dan akuntansi dalam satu aliran data real-time.',
    metaTitle: 'Accounting, Procurement & Asset Management',
    metaDesc:
      'Kontrol arus kas total, manajemen aset fisik, dan digitalisasi pengadaan barang (Procurement). Laporan keuangan real-time tanpa menunggu tutup buku.',
    icon: DollarSign,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    features: [
      {
        title: 'Budget Control & Procurement',
        desc: 'Sistem otomatis menolak Purchase Request (PR) jika melebihi sisa budget departemen. Cegah pengeluaran liar sebelum uang keluar.',
        icon: ShoppingCart,
      },
      {
        title: 'Expense Management',
        desc: 'Klaim reimbursement semudah foto struk. OCR otomatis membaca nominal. Approval transparan via aplikasi mobile.',
        icon: Receipt,
      },
      {
        title: 'Real-Time Accounting',
        desc: 'Setiap transaksi operasional (Sales, Stok, Biaya) otomatis menjurnal dirinya sendiri. Laporan Laba Rugi tersaji detik itu juga.',
        icon: FileSpreadsheet,
      },
      {
        title: 'Asset Lifecycle',
        desc: 'Lacak lokasi dan penanggungjawab aset fisik via QR Code. Penyusutan nilai aset terhitung otomatis setiap bulan.',
        icon: Tag,
      },
      {
        title: 'Multi-Currency',
        desc: 'Transaksi global dengan kurs otomatis. Sistem menangani selisih kurs (Gain/Loss) tanpa perhitungan manual yang rumit.',
        icon: Globe,
      },
      {
        title: 'Smart Bank Reconciliation',
        desc: 'Upload mutasi bank (MT940/CSV) dan biarkan sistem mencocokkan dengan transaksi tercatat. Hemat 90% waktu rekonsiliasi.',
        icon: Landmark,
      },
    ],
    metrics: [
      { value: '3 Hari', label: 'Closing Bulanan (vs 10+ Hari)' },
      { value: '100%', label: 'Budget Control Accuracy' },
      { value: '0', label: 'Selisih Kas (Auto-Recon)' },
    ],
    problems: [
      {
        title: 'Budget Leakage',
        desc: 'Pengeluaran liar (Maverick Spend) sulit dideteksi sampai invoice tagihan datang menumpuk.',
        icon: AlertTriangle,
      },
      {
        title: 'Blind Spots',
        desc: 'CEO bertanya \'Berapa sisa cash kita?\', Finance butuh 2 hari untuk menjawab karena data tersebar.',
        icon: Clock,
      },
      {
        title: 'Manual Reconciliation',
        desc: 'Mencocokkan ribuan transaksi bank dengan jurnal akuntansi secara manual adalah resep bencana.',
        icon: FileWarning,
      },
      {
        title: 'Denda Keterlambatan',
        desc: 'Sering kena denda telat bayar karena invoice vendor terselip atau lupa diproses.',
        icon: Calendar,
      },
    ],
    faqs: [
      {
        question: 'Apakah mendukung perpajakan Indonesia (PPN, PPh 23)?',
        answer:
          'Ya, sistem mendukung perhitungan PPN 11%, PPh 23, dan PPh Final. e-Faktur dapat di-generate langsung dari sistem untuk pelaporan pajak.',
      },
      {
        question: 'Bagaimana jika ada anak perusahaan (Multi-Company)?',
        answer:
          'Sangat mudah. Anda bisa mengelola banyak entitas PT dalam satu sistem. Transaksi antar-perusahaan (Inter-company) otomatis tereliminasi saat konsolidasi.',
      },
      {
        question: 'Apakah bisa integrasi dengan KlikBCA Bisnis?',
        answer:
          'Tentu. Kami menyediakan fitur upload file CSV dari KlikBCA/MCM untuk rekonsiliasi bank otomatis, atau payment gateway (Xendit/Midtrans) untuk penerimaan.',
      },
      {
        question: 'Apakah data keuangan bisa diakses dari HP?',
        answer:
          'Ya, Direktur Keuangan bisa melihat Dashboard Cashflow real-time dan melakukan approval pembayaran bernilai besar dari aplikasi mobile di mana saja.',
      },
    ],
    mobileAdvantage: {
      title: 'Persetujuan Keuangan Tanpa Hambatan',
      desc: 'Direktur Keuangan seringkali menjadi bottleneck karena mobilitas. Dengan BizOps, setujui PO bernilai besar atau Reimbursement mendesak langsung dari notifikasi HP di sela-sela rapat.',
    },
    connections: [
      {
        target: 'Sales',
        desc: 'Tagihan (Invoice) otomatis terbentuk saat Delivery Note dibuat, mempercepat AR turnover.',
      },
      {
        target: 'Supply Chain',
        desc: 'Nilai persediaan di Neraca selalu sinkron real-time dengan fisik stok di Gudang.',
      },
      {
        target: 'HR & Payroll',
        desc: 'Jurnal gaji dan tunjangan karyawan terposting otomatis ke akun beban (Expenses) yang tepat setiap bulan.',
      },
    ],
    cta: {
      text: 'Dapatkan visibilitas keuangan penuh yang Anda butuhkan.',
      buttonLabel: 'Demo Modul Finance',
    },
    testimonial: {
      quote:
        'Fitur Budget Control otomatisnya menyelamatkan kami dari overspending miliaran rupiah per tahun. Audit trail-nya juga sangat membantu saat pemeriksaan eksternal.',
      author: 'Sari Wulandari',
      role: 'CFO at Retail Nasional Group',
      avatar: 'https://ui-avatars.com/api/?name=Sari+Wulandari&background=10B981&color=fff',
    },
  },
  supply: {
    navLabel: 'Supply',
    navDesc: 'Inventory, Procurement, Supply Chain',
    title: 'Supply (Inventory & Procurement)',
    subtitle: 'Akurasi Stok Mutlak. Minimalkan Dead Stock.',
    description:
      'Kelola ribuan SKU di berbagai lokasi gudang dengan presisi tinggi. Cegah kerugian akibat barang hilang, kadaluarsa, atau selisih stok yang tak terdeteksi.',
    metaTitle: 'Multi-Warehouse Inventory & Stock Management',
    metaDesc:
      'Sistem manajemen stok multi-gudang dengan Stock Opname QR Code. Lacak pergerakan barang, batch number, dan expiry date secara akurat.',
    icon: Package,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    features: [
      {
        title: 'Multi-Warehouse',
        desc: 'Pantau stok di Gudang Pusat, Cabang, hingga stok konsinyasi secara real-time. Transfer antar gudang tercatat rapi dengan approval.',
        icon: Layers,
      },
      {
        title: 'QR Stock Opname',
        desc: 'Percepat audit stok hingga 50%. Gunakan kamera HP untuk scan barang. Sistem otomatis menghitung selisih dan jurnal penyesuaian.',
        icon: Smartphone,
      },
      {
        title: 'Batch & Expiry Tracking',
        desc: 'Prioritaskan barang yang akan expired duluan (FEFO). Lacak riwayat pergerakan setiap batch jika terjadi recall produk.',
        icon: CalendarRange,
      },
      {
        title: 'Auto-Reorder Point',
        desc: 'Sistem memberi notifikasi otomatis atau membuat draft pembelian (PR) saat stok menipis di bawah batas minimum.',
        icon: RefreshCw,
      },
      {
        title: 'Production & Assembly (BOM)',
        desc: 'Kelola Bill of Materials (BOM) untuk perakitan/bundling produk. Potong stok bahan baku otomatis saat barang jadi diproduksi (Backflush).',
        icon: Factory,
      },
      {
        title: 'Quality Control (QC)',
        desc: 'Wajibkan inspeksi kualitas saat barang masuk (Inbound) atau selesai produksi. Barang reject otomatis terpisahkan ke gudang karantina.',
        icon: Microscope,
      },
    ],
    metrics: [
      { value: '99.8%', label: 'Akurasi Stok Fisik vs Sistem' },
      { value: '20%', label: 'Penurunan Nilai Dead Stock' },
      { value: '50%', label: 'Lebih Cepat Stock Opname' },
    ],
    problems: [
      {
        title: 'Selisih Stok',
        desc: 'Barang di sistem ada 10, di gudang cuma 8. Selisih ini memakan profit margin Anda secara diam-diam.',
        icon: AlertTriangle,
      },
      {
        title: 'Barang Expired',
        desc: 'Produk lama tertimbun di belakang gudang dan kadaluarsa karena tidak menerapkan FEFO dengan ketat.',
        icon: AlertOctagon,
      },
      {
        title: 'Salah Kirim',
        desc: 'Picker mengambil barang yang salah karena kemasan mirip. Retur barang meningkat dan pelanggan kecewa.',
        icon: FileWarning,
      },
      {
        title: 'Stok Mati',
        desc: 'Modal kerja tertahan di stok lama yang tidak terdeteksi, mengganggu arus kas perusahaan.',
        icon: TrendingDown,
      },
    ],
    mobileAdvantage: {
      title: 'Gudang Paperless',
      desc: 'Staf gudang menerima perintah Picking/Packing langsung di aplikasi. Scan barcode barang sebelum dikirim untuk memastikan 100% akurasi pengiriman.',
    },
    connections: [
      {
        target: 'Sales',
        desc: 'Memberikan data stok tersedia (ATP) yang akurat ke tim sales agar tidak overselling.',
      },
      {
        target: 'Finance',
        desc: 'Nilai persediaan terhitung otomatis (Average/FIFO) setiap detik, menghasilkan laporan HPP yang presisi.',
      },
      {
        target: 'Procurement',
        desc: 'Notifikasi stok minimum (Reorder Point) otomatis memicu permintaan pembelian ke tim purchasing.',
      },
    ],
    cta: {
      text: 'Rapikan manajemen stok dan gudang Anda sekarang.',
      buttonLabel: 'Demo Modul Inventory',
    },
    testimonial: {
      quote:
        'Dulu Stock Opname butuh 3 hari tutup toko. Sekarang pakai QR Scan, selesai dalam setengah hari tanpa menghentikan operasional.',
      author: 'Surya Kencana',
      role: 'Logistics Manager at Retail Chain',
      avatar: 'https://ui-avatars.com/api/?name=Surya+Kencana&background=10B981&color=fff',
    },
    faqs: [
      {
        question: 'Apakah mendukung metode Average dan FIFO?',
        answer:
          'Ya, Anda bisa memilih metode penilaian persediaan yang sesuai dengan kebijakan akuntansi perusahaan (Moving Average atau FIFO).',
      },
      {
        question: 'Bagaimana jika barang punya varian (Warna/Ukuran)?',
        answer:
          'Sistem mendukung Item Variant. Anda bisa membuat satu template induk (Kaos Polos) dan generate ribuan SKU varian (Merah-S, Biru-XL) otomatis.',
      },
      {
        question: 'Apakah bisa cetak label barcode sendiri?',
        answer:
          'Bisa. Sistem memiliki fitur Barcode Label Printing yang bisa dikustomisasi ukuran dan informasinya untuk ditempel di rak atau produk.',
      },
      {
        question: 'Apakah butuh alat scanner khusus mahal?',
        answer:
          'Tidak wajib. Aplikasi mobile kami bisa menggunakan kamera HP biasa untuk scan barcode. Namun kami juga mendukung PDA Scanner industri (Zebra/Honeywell) untuk throughput tinggi.',
      },
    ],
  },
  growth: {
    navLabel: 'Growth',
    navDesc: 'CRM, Quotation, POS',
    title: 'Growth (Sales & CRM)',
    subtitle: 'Tutup Deal Lebih Cepat, Di Mana Saja.',
    description:
      'Berdayakan tim sales dengan data real-time. Kelola pipeline penjualan, buat penawaran instan, dan pantau target harian dari aplikasi mobile.',
    metaTitle: 'Mobile CRM, Quotation & Sales Force Automation',
    metaDesc:
      'Aplikasi Sales Canvas dengan fitur Check-in GPS, Quotation Generator, dan Live Stock View. Tingkatkan omzet dengan CRM yang terintegrasi Inventory.',
    icon: TrendingUp,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    features: [
      {
        title: 'Visual Sales Pipeline',
        desc: 'Pantau pergerakan setiap prospek dari \'New Lead\' hingga \'Won\'. Drag-and-drop deals di papan Kanban untuk update status instan.',
        icon: BarChart2,
      },
      {
        title: 'Mobile Quotation',
        desc: 'Buat penawaran harga (PDF) resmi lengkap dengan tanda tangan digital langsung di hadapan klien. Kirim via WhatsApp tanpa menunggu admin kantor.',
        icon: FileText,
      },
      {
        title: 'Live Stock Check',
        desc: 'Salesman bisa melihat stok tersedia (Available-to-Promise) real-time di gudang manapun. Jangan pernah jualan barang kosong lagi.',
        icon: Search,
      },
      {
        title: 'Sales Target & Komisi',
        desc: 'Gamifikasi kinerja tim. Salesman dapat melihat pencapaian target pribadi dan estimasi komisi yang akan diterima secara transparan.',
        icon: Target,
      },
      {
        title: 'Visit Management (GPS)',
        desc: 'Validasi kunjungan harian dengan Check-in berbasis lokasi (Geofencing). Pastikan tim sales benar-benar mengunjungi klien.',
        icon: MapPin,
      },
      {
        title: 'Marketing Automation',
        desc: 'Broadcast promo via WhatsApp/Email ke database pelanggan. Fitur segmentasi otomatis (misal: "Pelanggan Tidak Aktif 3 Bulan") untuk retensi efektif.',
        icon: Megaphone,
      },
    ],
    metrics: [
      { value: '2x', label: 'Lebih Cepat Closing Deal' },
      { value: '30%', label: 'Kenaikan Win Rate' },
      { value: '100%', label: 'Visibilitas Aktivitas Tim' },
    ],
    problems: [
      {
        title: 'Leads Tercecer',
        desc: 'Prospek potensial hilang karena lupa follow-up atau tertimbun di chat WhatsApp pribadi sales.',
        icon: AlertTriangle,
      },
      {
        title: 'Respon Lambat',
        desc: 'Klien menunggu seharian hanya untuk mendapatkan harga, memberi peluang kompetitor masuk.',
        icon: Clock,
      },
      {
        title: 'Buta Stok',
        desc: 'Sales menjual barang yang sebenarnya sudah habis, menyebabkan komplain dan pembatalan pesanan.',
        icon: Package,
      },
      {
        title: 'Forecast Meleset',
        desc: 'Target penjualan meleset jauh karena data pipeline tidak akurat dan terlalu optimis.',
        icon: PieChart,
      },
    ],
    mobileAdvantage: {
      title: 'Kantor Salesman adalah Jalanan',
      desc: 'Aplikasi Sales Force Automation (SFA) kami bekerja offline-first. Salesman tetap bisa input order dan update status kunjungan meski di area basement atau pelosok.',
    },
    connections: [
      {
        target: 'Inventory',
        desc: 'Sistem otomatis melakukan reservasi stok (Soft Booking) saat Sales Order dibuat, mengamankan barang untuk klien.',
      },
      {
        target: 'Finance',
        desc: 'Sales Order yang disetujui otomatis memicu pembuatan Tagihan (Invoice) dan mencatat Piutang Usaha (AR).',
      },
      {
        target: 'HR',
        desc: 'Pencapaian omzet salesman otomatis terhitung untuk skema insentif/komisi di modul Payroll.',
      },
    ],
    cta: {
      text: 'Akselerasi pertumbuhan omzet penjualan Anda.',
      buttonLabel: 'Demo Modul Sales',
    },
    testimonial: {
      quote:
        'Omzet kami naik 40% karena tidak ada lagi order yang terlewat. Salesman juga lebih semangat karena bisa lihat komisi mereka setiap hari.',
      author: 'Denny Sumargo',
      role: 'VP of Sales at Distributor Nasional',
      avatar: 'https://ui-avatars.com/api/?name=Denny+Sumargo&background=F97316&color=fff',
    },
    faqs: [
      {
        question: 'Apakah bisa untuk Sales Kanvas (Van Sales)?',
        answer:
          'Bisa. Modul ini mendukung stok di mobil (Mobile Warehouse) dan cetak struk langsung di tempat menggunakan printer bluetooth thermal.',
      },
      {
        question: 'Apakah mendukung multi-price list?',
        answer:
          'Ya. Anda bisa atur harga berbeda untuk Retail, Grosir, atau Distributor. Sistem otomatis mendeteksi harga yang tepat berdasarkan tipe pelanggan.',
      },
      {
        question: 'Bisa membatasi diskon yang diberikan sales?',
        answer:
          'Tentu. Anda bisa set batas maksimum diskon per level sales. Jika melebihi batas, sistem akan meminta Approval Manager otomatis.',
      },
      {
        question: 'Bagaimana jika Salesman resign? Apakah data aman?',
        answer:
          'Administrator bisa langsung menonaktifkan akun sales tersebut. Seluruh data prospek dan riwayat komunikasi otomatis dialihkan ke Sales Manager atau penggantinya.',
      },
    ],
  },
  hub: {
    navLabel: 'Hub',
    navDesc: 'BI Dashboard, Audit Trail, Settings',
    title: 'Hub (Governance & Insight)',
    subtitle: 'Kontrol Penuh, Tanpa Kompromi.',
    description:
      'Solusi bagi pemimpin yang membutuhkan pandangan helikopter (Helicopter View) dan kepastian bahwa seluruh operasional berjalan sesuai koridor kepatuhan (Compliance).',
    metaTitle: 'BI Dashboard, Audit Trail & GCG Compliance',
    metaDesc:
      'Dashboard manajemen strategis dengan Audit Trail lengkap. Fitur keamanan Role-Based Access Control (RBAC) untuk kepatuhan GCG perusahaan.',
    icon: ShieldCheck,
    color: 'text-slate-600',
    bgColor: 'bg-slate-50',
    features: [
      {
        title: 'Executive BI Dashboard',
        desc: 'Pantau P&L harian, Tren Penjualan, dan Cashflow dalam satu layar interaktif. Drill-down dari level korporat hingga transaksi detail.',
        icon: BarChart,
      },
      {
        title: 'Immutable Audit Trail',
        desc: 'Rekam jejak digital (User, Timestamp, Old/New Value) untuk setiap perubahan data. Log terkunci read-only untuk audit forensik.',
        icon: FileWarning,
      },
      {
        title: 'Role-Based Access Control',
        desc: 'Pengaturan hak akses granular hingga level field. Terapkan prinsip \'Least Privilege\' untuk melindungi data sensitif.',
        icon: Lock,
      },
      {
        title: 'Dynamic Approval Matrix',
        desc: 'Desain alur persetujuan bertingkat yang fleksibel. Terapkan aturan kondisional (misal: PO > 50 Juta butuh persetujuan Direktur).',
        icon: GitMerge,
      },
      {
        title: 'Data Versioning Control',
        desc: 'Setiap perubahan dokumen membuat versi baru. Anda bisa melihat sejarah perubahan dan mengembalikan data ke versi sebelumnya (Rollback).',
        icon: History,
      },
      {
        title: 'Compliance Reporting',
        desc: 'Template laporan siap pakai untuk kebutuhan audit eksternal, pajak, dan standar ISO. Hemat waktu persiapan audit hingga 90%.',
        icon: FileCheck,
      },
    ],
    metrics: [
      { value: '100%', label: 'Jejak Audit Transaksi' },
      { value: '0', label: 'Insiden Kebocoran Data' },
      { value: 'ISO', label: '27001 Compliant Ready' },
    ],
    problems: [
      {
        title: 'Fraud & Kecurangan',
        desc: 'Karyawan mengubah data transaksi mundur atau memanipulasi stok tanpa ketahuan karena sistem lama tidak punya log.',
        icon: AlertTriangle,
      },
      {
        title: 'Kebocoran Data',
        desc: 'Staf junior bisa melihat data gaji direksi atau database pelanggan karena pengaturan hak akses yang terlalu longgar.',
        icon: EyeOff,
      },
      {
        title: 'Keputusan Lambat',
        desc: 'Direksi harus menunggu laporan manual akhir bulan untuk tahu kondisi perusahaan. Terlambat untuk bermanuver.',
        icon: Hourglass,
      },
      {
        title: 'Data Terisolasi',
        desc: 'Pengambilan keputusan lambat karena data antar divisi terputus dan mengharuskan konsolidasi manual.',
        icon: Network,
      },
    ],
    mobileAdvantage: {
      title: 'Kedaulatan Data & Analisis',
      desc: 'Berbeda dengan SaaS biasa, Self-Hosted BizOps memberikan akses langsung ke Database mentah. Tim Data Analyst Anda bisa menghubungkan Tableau/PowerBI langsung.',
    },
    connections: [
      {
        target: 'All Modules',
        desc: 'Governance adalah \'Muara\' dari seluruh aliran data HR, Finance, Sales, dan Ops untuk dianalisis.',
      },
      {
        target: 'HR',
        desc: 'Struktur organisasi di HR otomatis menentukan hierarki persetujuan (Approval Workflow) dokumen.',
      },
      {
        target: 'IT Security',
        desc: 'Integrasi dengan LDAP/Active Directory perusahaan untuk Single Sign-On (SSO) yang aman.',
      },
    ],
    cta: {
      text: 'Ambil kendali penuh atas risiko dan arah bisnis Anda.',
      buttonLabel: 'Lihat Dashboard Demo',
    },
    testimonial: {
      quote:
        'Fitur Audit Trail-nya penyelamat saat audit pajak. Kami bisa buktikan validitas setiap transaksi hingga ke user yang menginputnya.',
      author: 'Robert Tjahjadi',
      role: 'CIO at Manufaktur Otomotif',
      avatar: 'https://ui-avatars.com/api/?name=Robert+Tjahjadi&background=6366F1&color=fff',
    },
    faqs: [
      {
        question: 'Apakah data kami aman (Enkripsi)?',
        answer:
          'Sangat aman. Database dienkripsi at-rest, dan seluruh komunikasi menggunakan SSL/TLS (HTTPS). Kami juga mendukung enkripsi kolom spesifik (seperti Gaji).',
      },
      {
        question: 'Bisa di-host di server kami sendiri (On-Premise)?',
        answer:
          'Bisa. Kami mendukung deployment On-Premise atau Private Cloud jika kebijakan perusahaan Anda mewajibkan data tidak boleh keluar.',
      },
      {
        question: 'Bagaimana jika ada user menghapus data?',
        answer:
          'Data di BizOps tidak pernah benar-benar hilang (Soft Delete). Administrator bisa memulihkan data yang terhapus dari Trash Bin kapan saja.',
      },
      {
        question: 'Apakah user bisa mengakses sistem dari luar kantor?',
        answer:
          'Bisa diatur. Anda bisa menerapkan kebijakan IP Restriction agar sistem hanya bisa diakses dari jaringan kantor, atau izinkan akses publik dengan wajib 2FA (OTP).',
      },
    ],
  },
  work: {
    navLabel: 'Work',
    navDesc: 'Projects, Tasks, Production, Assets',
    title: 'Work (Project & Operations)',
    subtitle: 'Eksekusi Pekerjaan yang Terstruktur.',
    description:
      'Manajemen proyek dan operasional harian yang terintegrasi. Pantau progress, alokasikan sumber daya, dan pastikan delivery tepat waktu.',
    metaTitle: 'Project Management & Task Tracking | BizOps',
    metaDesc:
      'Kelola proyek jasa, produksi, dan maintenance. Timesheet, task assignment, dan job costing dalam satu platform.',
    icon: Wrench,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
    features: [
      {
        title: 'Project Management',
        desc: 'Kelola proyek jasa dengan kurva-S, RAB tracking, dan progress billing. Pantau margin proyek real-time.',
        icon: GanttChartSquare,
      },
      {
        title: 'Task & Timesheet',
        desc: 'Assign task ke tim, track timesheet digital, dan hitung produktivitas karyawan per proyek.',
        icon: Clock,
      },
      {
        title: 'Production Control',
        desc: 'Work orders, BOM (Bill of Materials), dan quality control untuk manufaktur (integrasi dengan modul Manufacturing).',
        icon: Factory,
      },
      {
        title: 'Asset Management',
        desc: 'Tracking aset fisik (kendaraan, mesin, alat), jadwal maintenance, dan perhitungan depresiasi otomatis.',
        icon: Building,
      },
    ],
    metrics: [
      { value: '95%', label: 'On-Time Delivery' },
      { value: '+40%', label: 'Resource Efficiency' },
      { value: 'Real-time', label: 'Project Visibility' },
    ],
    problems: [
      {
        title: 'Proyek Overrun',
        desc: 'Biaya proyek membengkak karena tidak ada kontrol RAB vs realisasi real-time.',
        icon: TrendingUp,
      },
      {
        title: 'Timesheet Manual',
        desc: 'Karyawan isi timesheet di Excel akhir minggu, data tidak akurat dan sulit di-approval.',
        icon: Clock,
      },
      {
        title: 'Aset Hilang',
        desc: 'Tidak tahu lokasi aset perusahaan, jadwal service terlewat, dan umur aset tidak ter-tracking.',
        icon: Search,
      },
      {
        title: 'Rebutan Alat',
        desc: 'Konflik penggunaan alat berat atau teknisi antar proyek menyebabkan downtime dan keterlambatan jadwal.',
        icon: Users,
      },
    ],
    cta: {
      text: 'Optimalkan eksekusi proyek dan operasional Anda.',
      buttonLabel: 'Lihat Work Demo',
    },
    faqs: [
      {
        question: 'Apakah bisa tracking proyek multi-currency?',
        answer:
          'Bisa. Proyek dengan klien luar negeri bisa di-set dalam mata uang asing, dan laporan keuangan akan otomatis mengkonversi ke base currency.',
      },
      {
        question: 'Bagaimana dengan mobile app untuk field worker?',
        answer:
          'Tersedia aplikasi mobile khusus untuk field staff. Bisa check-in dengan GPS, foto progress, dan update status task langsung dari lapangan.',
      },
    ],
  },
  care: {
    navLabel: 'Care',
    navDesc: 'Tickets, Issues, Feedback, Portal',
    title: 'Care (Customer Support)',
    subtitle: 'Layanan Pelanggan yang Responsif.',
    description:
      'Sistem helpdesk dan customer portal untuk menjaga kepuasan pelanggan pasca-transaksi. Handle komplain cepat dan bangun loyalitas.',
    metaTitle: 'Helpdesk & Customer Portal | BizOps',
    metaDesc:
      'Ticket management, knowledge base, dan customer self-service portal. Tingkatkan CSAT dan kurangi beban tim support.',
    icon: Headphones,
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    features: [
      {
        title: 'Ticket Management',
        desc: 'Routing tiket otomatis ke departemen terkait, SLA tracking, dan escalation matrix. Pelanggan tidak perlu menunggu lama.',
        icon: FileCheck,
      },
      {
        title: 'Knowledge Base',
        desc: 'Buat artikel bantuan (FAQ, SOP) yang bisa diakses pelanggan 24/7 untuk self-service. Kurangi ticket repetitif.',
        icon: BookOpen,
      },
      {
        title: 'Customer Portal',
        desc: 'Portal mandiri bagi pelanggan untuk cek status order, submit ticket, dan download invoice tanpa kontak CS.',
        icon: Users,
      },
      {
        title: 'Feedback & NPS',
        desc: 'Kirim survey otomatis setelah transaksi selesai. Hitung NPS score dan analisis sentimen feedback.',
        icon: MessageSquare,
      },
    ],
    metrics: [
      { value: '<2h', label: 'First Response Time' },
      { value: '95%', label: 'CSAT Score' },
      { value: '-60%', label: 'Support Tickets' },
    ],
    problems: [
      {
        title: 'Response Lama',
        desc: 'Pelanggan komplain via WhatsApp tidak ter-tracking, sering terlewat, dan tidak ada histori komunikasi.',
        icon: MessageCircle,
      },
      {
        title: 'Pertanyaan Berulang',
        desc: '80% pertanyaan support adalah hal yang sama (cara pakai, status order) tapi tidak ada sistem self-service.',
        icon: Repeat,
      },
      {
        title: 'Tidak Ada Feedback Loop',
        desc: 'Tidak pernah survey kepuasan pelanggan, tidak tahu NPS score, dan tidak bisa improve service.',
        icon: HelpCircle,
      },
      {
        title: 'Tiket Manual',
        desc: 'Tim support input tiket manual dari WhatsApp ke Excel. Risiko data hilang tinggi dan kerja dua kali.',
        icon: FileSpreadsheet,
      },
    ],
    cta: {
      text: 'Bangun layanan pelanggan yang membuat mereka kembali.',
      buttonLabel: 'Lihat Care Demo',
    },
    faqs: [
      {
        question: 'Apakah bisa integrasi dengan WhatsApp Business?',
        answer:
          'Bisa. Tiket bisa masuk dari WhatsApp, email, atau form web. Semua ter-centralisasi dalam satu dashboard.',
      },
      {
        question: 'Bagaimana dengan SLA monitoring?',
        answer:
          'Setiap ticket punya SLA berdasarkan prioritas (High/Medium/Low). System warning jika akan breached dan auto-escalate ke supervisor.',
      },
    ],
  },
};

// --- CAPABILITIES DATA ---
export const capabilitiesData: Record<string, any> = {
  'mobile': {
    navLabel: 'Mobile Apps',
    navDesc: 'iOS & Android for field work',
    title: 'Mobile Apps',
    subtitle: 'Bukan Sekadar Web yang Dikecilkan. Ini Mobile Native Sesungguhnya.',
    description:
      'Banyak vendor ERP mengambil jalan pintas dengan membungkus website responsif menjadi aplikasi (Web Wrapper/PWA). BizOps Mobile dibangun dari nol secara Native (Flutter Engine) untuk performa 60 FPS yang mulus dan pengalaman offline-first yang handal di lapangan.',
    icon: Smartphone,
    features: [
      {
        title: 'Offline-First Architecture',
        desc: 'Data operasional kritis (Katalog, Tugas, Laporan) disimpan dalam database lokal (SQLite). Sync otomatis saat sinyal kembali.',
        icon: Database,
      },
      {
        title: 'Deep Hardware Integration',
        desc: 'Akses kamera level rendah untuk scan barcode milidetik dan login biometrik (FaceID/Fingerprint) yang aman.',
        icon: Smartphone,
      },
      {
        title: 'Precise Geolocation (Anti-Mock)',
        desc: 'Mengakses data raw GNSS untuk mendeteksi Fake GPS. Memblokir absensi jika terdeteksi injeksi lokasi palsu.',
        icon: MapPin,
      },
      {
        title: 'Battery Optimization',
        desc: 'Mendukung Dark Mode native yang hemat baterai AMOLED hingga 30% untuk penggunaan durasi panjang di lapangan.',
        icon: Zap,
      },
    ],
    metrics: [
      { value: '60 FPS', label: 'Smooth Performance' },
      { value: '100%', label: 'Offline Capable' },
      { value: '< 2s', label: 'Barcode Scan Speed' },
    ],
    problems: [
      {
        title: 'Sinyal Buruk = Kerja Stop',
        desc: 'Di gudang atau site proyek seringkali susah sinyal. Web-based ERP akan loading terus menerus dan menghambat kerja.',
        icon: WifiOff,
      },
      {
        title: 'UX yang Lambat',
        desc: 'Aplikasi web wrapper terasa berat, scroll tidak mulus, dan respon tombol lambat, membuat user malas menggunakannya.',
        icon: Hourglass,
      },
      {
        title: 'Boros Kuota & Baterai',
        desc: 'Me-load halaman web berulang kali memakan kuota data dan menguras baterai HP karyawan lapangan.',
        icon: Zap,
      },
      {
        title: 'Absensi Palsu dengan Fake GPS',
        desc: 'Karyawan lapangan bisa memanipulasi lokasi absensi menggunakan aplikasi Fake GPS, merugikan perusahaan.',
        icon: MapPin,
      },
    ],
    mobileAdvantage: {
      title: 'Desain Intuitif Kelas Konsumen',
      desc: 'Kami mengadopsi standar desain aplikasi populer (seperti Gojek/Grab) sehingga karyawan lapangan bisa langsung pakai tanpa training panjang. Mendukung Dark Mode otomatis.',
    },
    connections: [
      {
        target: 'Field Ops',
        desc: 'Upload foto progres proyek langsung dikompresi di device agar hemat kuota.',
      },
      {
        target: 'Sales',
        desc: 'Salesman bisa jualan (input order) di basement gedung tanpa sinyal sama sekali.',
      },
      {
        target: 'Security',
        desc: 'Enkripsi data lokal memastikan data di HP tetap aman meski perangkat hilang.',
      },
    ],
    cta: {
      text: 'Bekali tim lapangan Anda dengan senjata terbaik.',
      buttonLabel: 'Download Demo App',
    },
    faqs: [
      {
        question: 'Apakah tersedia di iOS dan Android?',
        answer:
          'Ya, tersedia di Apple App Store dan Google Play Store. Mendukung iOS 12+ dan Android 8+.',
      },
      {
        question: 'Bisa print struk via Bluetooth?',
        answer:
          'Bisa. Mendukung berbagai printer thermal bluetooth (ESC/POS) untuk Sales Kanvas atau Kasir.',
      },
      {
        question: 'Bagaimana jika HP karyawan hilang?',
        answer:
          'Admin bisa melakukan \'Remote Wipe\' untuk menghapus data perusahaan di perangkat tersebut saat terhubung internet, atau mencabut token aksesnya.',
      },
    ],
  },
  'self-hosted': {
    navLabel: 'Self-Hosted Deployment',
    navDesc: 'On-premise & private cloud',
    title: 'Self-Hosted Deployment',
    subtitle: 'Infrastruktur Anda, Kendali Penuh Anda.',
    description:
      'BizOps dirancang agnostik terhadap infrastruktur. Jalankan di Bare Metal Server kantor, Private Cloud (AWS/GCP), atau Hybrid. Kebebasan topologi sesuai standar keamanan TI perusahaan Anda.',
    icon: Server,
    features: [
      {
        title: 'Docker Containerization',
        desc: 'Image Docker resmi yang terisolasi dan production-ready. Deployment < 15 menit dan mudah di-rollback.',
        icon: Package,
      },
      {
        title: 'Kubernetes (K8s) Ready',
        desc: 'Kompatibel penuh untuk orkestrasi tingkat lanjut: High Availability (HA), Self-healing pods, dan Auto-scaling.',
        icon: Layers,
      },
      {
        title: 'Bare Metal Performance',
        desc: 'Opsi instalasi langsung di OS Linux (Ubuntu/Debian) untuk performa I/O database maksimal tanpa overhead virtualisasi.',
        icon: Server,
      },
      {
        title: 'Automated Offsite Backups',
        desc: 'Skrip backup otomatis (Database & Files) yang terenkripsi dan diupload ke S3-compatible storage pilihan Anda.',
        icon: Cloud,
      },
    ],
    metrics: [
      { value: '100%', label: 'Data Ownership' },
      { value: '0', label: 'Vendor Lock-in' },
      { value: '<15m', label: 'Deployment Time' },
    ],
    problems: [
      {
        title: 'SaaS Vendor Lock-in',
        desc: 'Saat berhenti langganan SaaS, data hilang atau sulit diambil. Dengan Self-hosted, database milik Anda selamanya.',
        icon: Lock,
      },
      {
        title: 'Regulasi Data Ketat',
        desc: 'Industri tertentu (Perbankan/Pemerintahan) melarang data disimpan di cloud publik pihak ketiga.',
        icon: Building,
      },
      {
        title: 'Latency Internet',
        desc: 'Koneksi internet kantor lambat membuat SaaS lemot. Self-hosted di server lokal (LAN) menjamin kecepatan kilat.',
        icon: WifiOff,
      },
    ],
    connections: [
      {
        target: 'IT Infra',
        desc: 'Kompatibel dengan Nginx, Traefik, dan HAProxy sebagai Reverse Proxy.',
      },
      {
        target: 'Monitoring',
        desc: 'Support export metrics ke Prometheus/Grafana untuk pemantauan kesehatan server.',
      },
      {
        target: 'Database',
        desc: 'Akses langsung (Direct Access) ke PostgreSQL untuk kebutuhan Business Intelligence (BI).',
      },
    ],
    cta: {
      text: 'Miliki infrastruktur ERP Anda sendiri.',
      buttonLabel: 'Lihat Dokumentasi Teknis',
    },
    faqs: [
      {
        question: 'Berapa spek server minimum?',
        answer: 'Untuk 50 user, cukup VPS 2 vCPU + 4GB RAM. Sangat efisien.',
      },
      {
        question: 'Apakah sulit maintenance-nya?',
        answer:
          'Tidak. Kami menyertakan script \'Easy Install\' dan manajemen update satu baris perintah (bench update).',
      },
      {
        question: 'Apakah tetap dapat update fitur?',
        answer:
          'Tentu. Selama lisensi aktif, Anda bisa menarik update (git pull) dari repositori stabil kami kapan saja.',
      },
    ],
    extraSection: {
      title: 'Server Requirements Sizing Guide',
      type: 'table',
      headers: ['Scale', 'Users', 'Spec Recommendation', 'Topology'],
      rows: [
        ['Small', '< 50', '2 vCPU, 4GB RAM', 'Single Node (All-in-One)'],
        ['Medium', '50 - 200', '4 vCPU, 8GB RAM', 'Single Node + Redis Cache'],
        ['Enterprise', '> 500', '8 vCPU, 16GB RAM, DB Dedicated', 'Multi-tier (LB + App + DB)'],
      ],
    },
  },
  'integration': {
    navLabel: 'Integration Architecture',
    navDesc: 'Connect with banks, e-commerce, & IoT',
    title: 'Integration Architecture',
    subtitle: 'API-First: Terhubung Secara Native dengan Dunia Luar.',
    description:
      'BizOps bukan pulau terisolasi. Setiap data (DocType) memiliki API Endpoint yang terbuka. Didukung oleh tim ahli kami untuk memastikan integrasi yang aman dan stabil (Managed Integration), memastikan data mengalir sesuai logika bisnis unik Anda.',
    icon: Share2,
    features: [
      {
        title: 'RESTful API Standard',
        desc: 'Akses CRUD JSON untuk ribuan objek data. Mendukung filter kompleks, sorting, dan pagination bawaan.',
        icon: Code,
      },
      {
        title: 'Webhooks (Event-Driven)',
        desc: 'Notifikasi real-time ke sistem lain saat event terjadi (misal: \'Saat PO dibuat -> Kirim data ke WMS Gudang\').',
        icon: Radio,
      },
      {
        title: 'Server Script Injection',
        desc: 'Sisipkan logika Python kustom di sisi server untuk manipulasi data payload sebelum disimpan atau setelah diambil.',
        icon: Terminal,
      },
      {
        title: 'OAuth 2.0 & Token Auth',
        desc: 'Standar keamanan industri untuk otentikasi integrasi pihak ketiga yang aman (SSO Ready).',
        icon: Key,
      },
    ],
    metrics: [
      { value: '100%', label: 'API Coverage (All DocTypes)' },
      { value: 'JSON', label: 'Standard Format' },
      { value: 'Managed', label: 'Integration Setup' },
    ],
    problems: [
      {
        title: 'Siloed Systems',
        desc: 'Software HR, Accounting, dan Sales tidak bicara satu sama lain. Data harus di-entry ulang manual berkali-kali.',
        icon: Layers,
      },
      {
        title: 'Complex Setup',
        desc: 'Integrasi \'Do-It-Yourself\' seringkali gagal karena mapping data yang rumit dan tidak sesuai proses bisnis.',
        icon: AlertTriangle,
      },
      {
        title: 'IoT Disconnect',
        desc: 'Mesin pabrik atau timbangan digital punya data, tapi tidak masuk ke sistem pencatatan otomatis.',
        icon: WifiOff,
      },
    ],
    connections: [
      {
        target: 'E-Commerce',
        desc: 'Sync pesanan otomatis dari Tokopedia, Shopee, TikTok Shop, dan WooCommerce.',
      },
      {
        target: 'Banking',
        desc: 'Rekonsiliasi mutasi bank otomatis (KlikBCA, Mandiri MCM) dan Payment Gateway (Xendit/Midtrans).',
      },
      {
        target: 'Hardware',
        desc: 'Tarik log absensi fingerprint (ZKTeco) atau data timbangan digital jembatan truk langsung ke sistem.',
      },
      {
        target: 'Legacy ERP',
        desc: 'Konektor dua arah ke SAP atau Odoo untuk sinkronisasi jurnal GL dan master data.',
      },
    ],
    cta: {
      text: 'Butuh integrasi khusus? Diskusikan dengan tim teknis kami.',
      buttonLabel: 'Konsultasi Integrasi',
    },
    faqs: [
      {
        question: 'Apakah integrasi bersifat Plug & Play?',
        answer:
          'Saat ini, integrasi bersifat \'Managed Service\'. Tim teknis kami akan menangani konfigurasi, mapping data, dan testing untuk memastikan koneksi berjalan lancar tanpa Anda pusing teknis.',
      },
      {
        question: 'Apakah ada biaya tambahan?',
        answer:
          'Untuk integrasi standar (API access) gratis. Namun untuk \'Managed Integration\' yang membutuhkan development connector khusus, mungkin ada biaya setup one-time.',
      },
      {
        question: 'Berapa lama proses integrasi?',
        answer:
          'Tergantung kompleksitas. Integrasi marketplace standar bisa 1-3 hari. Integrasi sistem Legacy ERP mungkin butuh 2-4 minggu fase testing.',
      },
      {
        question: 'Bahasa pemrograman apa yang didukung?',
        answer:
          'API kami standar REST JSON, jadi bisa diakses oleh bahasa apapun (Python, JS, PHP, Go, curl, dll).',
      },
    ],
  },
  'team-collaboration': {
    navLabel: 'Team Collaboration',
    navDesc: 'Discuss on documents',
    title: 'Team Collaboration',
    subtitle: 'Hentikan \'Ping-Pong\' Chat di WhatsApp yang Membingungkan.',
    description:
      'Masalah terbesar komunikasi kerja adalah hilangnya konteks. BizOps menyatukan percakapan dengan data. Diskusikan pekerjaan tepat di tempat pekerjaan itu berada (Dokumen Transaksi).',
    icon: MessageSquare,
    features: [
      {
        title: 'Document-Based Chat',
        desc: 'Setiap dokumen (Invoice, Task, Project) memiliki panel chat terdedikasi. Diskusi menempel selamanya pada konteksnya.',
        icon: FileText,
      },
      {
        title: 'Smart Mentions & Notifications',
        desc: 'Gunakan @User atau @Role untuk memanggil rekan kerja. Notifikasi push instan memastikan respon cepat.',
        icon: UserCheck,
      },
      {
        title: 'Audit Trail of Communication',
        desc: 'Percakapan bisnis menjadi bagian dari sejarah dokumen. Bukti pendukung keputusan yang tidak bisa dihapus sembarangan.',
        icon: History,
      },
      {
        title: 'Integrated File Sharing',
        desc: 'Drag-and-drop file pendukung langsung ke kolom chat. Sentralisasi dokumen agar tidak tercecer di chat pribadi.',
        icon: Share2,
      },
    ],
    metrics: [
      { value: '40%', label: 'Reduction in Internal Email' },
      { value: '100%', label: 'Communication Context' },
      { value: '0', label: 'Lost Information' },
    ],
    problems: [
      {
        title: 'Lost in WhatsApp',
        desc: 'Diskusi approval penting tenggelam di grup WA keluarga. Saat butuh bukti, chat sudah terhapus.',
        icon: MessageCircle,
      },
      {
        title: 'Email Ping-Pong',
        desc: 'Forward-forward email dengan subject \'Re: Re: Re: Revisi Final\' yang membingungkan siapa penanggung jawab terakhir.',
        icon: Mail,
      },
      {
        title: 'Konteks Hilang',
        desc: 'Staff bertanya \'Ini gimana?\', Manager tanya balik \'Ini yang mana?\'. Waktu terbuang menjelaskan konteks.',
        icon: AlertTriangle,
      },
      {
        title: 'Tidak Ada Jejak Keputusan',
        desc: 'Keputusan penting dibuat via chat personal tanpa dokumentasi, menyebabkan konflik siapa yang berwenang.',
        icon: Lock,
      },
    ],
    mobileAdvantage: {
      title: 'Diskusi Tanpa Putus',
      desc: 'Balas chat dan mention rekan kerja langsung dari notifikasi HP. Tetap terhubung dengan konteks pekerjaan saat Anda sedang mobile atau dinas luar.',
    },
    connections: [
      {
        target: 'All Modules',
        desc: 'Tersedia di seluruh dokumen: PO, Invoice, Cuti, Project Task, hingga Lead CRM.',
      },
      {
        target: 'Notification',
        desc: 'Mention @user akan mengirim notifikasi email dan in-app alert.',
      },
      {
        target: 'Projects',
        desc: 'Diskusi pada Task otomatis terlampir sebagai progress update proyek.',
      },
    ],
    cta: {
      text: 'Kembalikan konteks dalam komunikasi kerja Anda.',
      buttonLabel: 'Lihat Demo Chat',
    },
    faqs: [
      {
        question: 'Apakah chat bisa dihapus?',
        answer:
          'Tidak. Untuk alasan audit, percakapan bisnis tidak bisa dihapus, hanya bisa di-edit (dengan log).',
      },
      {
        question: 'Bisa kirim file besar?',
        answer: 'Bisa. Batas ukuran file mengikuti konfigurasi server (default 10MB per file).',
      },
      {
        question: 'Apakah ada fitur video call?',
        answer:
          'Saat ini belum (Text & File only). Kami fokus pada asinkronus komunikasi yang terstruktur.',
      },
    ],
  },
  'whitelabel': {
    navLabel: 'Whitelabel Platform',
    navDesc: 'Your brand, our engine',
    title: 'Whitelabel Platform',
    subtitle: 'Sistem Kami, Identitas Brand Anda.',
    description:
      'Kami menyediakan infrastruktur \'Invisible Engine\'. Kemampuan re-skinning total memastikan klien hanya melihat brand perusahaan Anda, bukan BizOps. Transformasi identitas platform secara menyeluruh.',
    icon: Layers,
    features: [
      {
        title: 'Web Dashboard Re-Skinning',
        desc: 'Ganti logo, favicon, login background, dan skema warna CSS global sesuai Brand Guidelines korporat Anda.',
        icon: Layout,
      },
      {
        title: 'Mobile App Re-Build Service',
        desc: 'Kami mengkompilasi ulang (re-build) APK/IPA dengan Package ID unik dan App Icon milik Anda. Terpisah dari app publik.',
        icon: Smartphone,
      },
      {
        title: 'Custom Domain & SSL',
        desc: 'Akses sistem melalui domain Anda sendiri (erp.perusahaankita.com) dengan sertifikat SSL otomatis.',
        icon: Globe,
      },
      {
        title: 'Branded SMTP & Reports',
        desc: 'Email notifikasi dan PDF (Invoice/Slip Gaji) dikirim menggunakan server email dan kop surat perusahaan Anda.',
        icon: Mail,
      },
    ],
    metrics: [
      { value: '100%', label: 'Brand Identity' },
      { value: 'White', label: 'Label Solution' },
      { value: 'Custom', label: 'Domain & App ID' },
    ],
    problems: [
      {
        title: 'Brand Confusion',
        desc: 'Klien bingung kenapa mereka login ke sistem \'BizOps\' padahal mereka bekerja sama dengan Perusahaan Anda.',
        icon: AlertTriangle,
      },
      {
        title: 'Inkonsistensi Brand',
        desc: 'Tampilan sistem yang berbeda dengan warna korporat menurunkan persepsi profesionalitas.',
        icon: Layout,
      },
      {
        title: 'URL Asing',
        desc: 'Mengakses sistem via IP address atau domain vendor terlihat kurang bonafide.',
        icon: Globe,
      },
    ],
    connections: [
      {
        target: 'System',
        desc: 'Setting whitelabel berlaku global untuk seluruh modul dan portal eksternal.',
      },
      {
        target: 'Reports',
        desc: 'Kop surat dan footer laporan otomatis mengikuti branding perusahaan.',
      },
      {
        target: 'Email',
        desc: 'SMTP server menggunakan domain perusahaan Anda untuk pengiriman notifikasi.',
      },
    ],
    cta: {
      text: 'Jadikan sistem ini milik Anda sepenuhnya.',
      buttonLabel: 'Hubungi Sales Enterprise',
    },
    faqs: [
      {
        question: 'Apakah logo \'Powered by BizOps\' bisa hilang total?',
        answer:
          'Ya, untuk paket Enterprise Whitelabel, seluruh atribusi BizOps dihilangkan (Invisible Vendor).',
      },
      {
        question: 'Apakah nama aplikasi di PlayStore bisa nama PT kami?',
        answer:
          'Bisa. Kami akan build APK khusus dan Anda bisa upload ke akun Google Play Console perusahaan Anda sendiri.',
      },
      {
        question: 'Apakah butuh server sendiri?',
        answer:
          'Tidak wajib. Anda bisa tetap pakai Cloud kami tapi dengan Custom Domain (CNAME Record).',
      },
    ],
  },
  'custom-apps': {
    navLabel: 'Custom Apps',
    navDesc: 'No-code app builder',
    title: 'Custom Apps',
    subtitle: 'Ubah Ide Menjadi Aplikasi Enterprise dalam Hitungan Jam.',
    description:
      'Berdayakan \'Citizen Developer\' di perusahaan Anda. Buat form digital, alur persetujuan kompleks, dan laporan kustom dengan antarmuka Drag-and-Drop yang intuitif, tanpa perlu menulis baris kode yang rumit.',
    icon: Layout,
    features: [
      {
        title: 'Visual Form Builder',
        desc: 'Desain formulir input data dengan drag-and-drop. Dukungan validasi logic, dependensi field, dan perhitungan otomatis.',
        icon: Layout,
      },
      {
        title: 'Workflow Automation',
        desc: 'Bangun logika bisnis (If-This-Then-That) untuk notifikasi, perubahan status, dan trigger aksi otomatis lintas modul.',
        icon: GitMerge,
      },
      {
        title: 'Kanban & Calendar Views',
        desc: 'Visualisasikan data dalam bentuk papan Kanban atau Kalender interaktif untuk manajemen tugas yang lebih baik.',
        icon: Layout,
      },
      {
        title: 'Role-Based Permission',
        desc: 'Atur siapa yang boleh melihat, mengedit, atau menghapus data dengan granularitas tinggi hingga level field.',
        icon: Lock,
      },
    ],
    metrics: [
      { value: '10x', label: 'Faster Development' },
      { value: '0', label: 'Code Required' },
      { value: '100%', label: 'Mobile Ready' },
    ],
    problems: [
      {
        title: 'Antrian IT Panjang',
        desc: 'Departemen bisnis butuh aplikasi sederhana tapi tim IT terlalu sibuk dengan proyek besar. Inovasi terhambat.',
        icon: Clock,
      },
      {
        title: 'Shadow IT',
        desc: 'Karyawan menggunakan aplikasi tidak resmi (Excel/SaaS liar) karena sistem kantor kaku, menimbulkan risiko keamanan data.',
        icon: AlertTriangle,
      },
      {
        title: 'Biaya Vendor Mahal',
        desc: 'Membayar vendor software mahal hanya untuk membuat satu form digital sederhana.',
        icon: DollarSign,
      },
      {
        title: 'Data Tercecer di File Pribadi',
        desc: 'Data bisnis tersimpan di laptop/file karyawan yang resign, menyebabkan hilangnya informasi penting perusahaan.',
        icon: FileWarning,
      },
    ],
    mobileAdvantage: {
      title: 'Build Once, Run Everywhere',
      desc: 'Setiap aplikasi yang Anda buat di Low-Code Studio otomatis tersedia di aplikasi mobile BizOps (iOS/Android) tanpa perlu coding ulang. Mendukung offline mode.',
    },
    connections: [
      {
        target: 'Core Modules',
        desc: 'Aplikasi buatan Anda bisa membaca dan menulis data ke modul inti (HR, Finance, Inventory).',
      },
      {
        target: 'Automation',
        desc: 'Trigger workflow otomatis saat data baru diinput melalui aplikasi low-code.',
      },
      {
        target: 'API',
        desc: 'Data dari aplikasi low-code otomatis terekspos via REST API standar.',
      },
    ],
    cta: {
      text: 'Mulai bangun aplikasi bisnis Anda sendiri.',
      buttonLabel: 'Coba Low-Code Studio',
    },
    faqs: [
      {
        question: 'Apakah benar-benar tanpa coding?',
        answer:
          'Untuk 90% kebutuhan umum (Form, List, Approval), benar-benar tanpa coding. Namun kami juga menyediakan \'Scripting Layer\' (Python/JS) untuk logika yang sangat kompleks.',
      },
      {
        question: 'Apakah aman?',
        answer:
          'Sangat aman. Aplikasi low-code berjalan di atas framework security yang sama dengan modul inti BizOps, mewarisi semua fitur enkripsi dan audit trail.',
      },
      {
        question: 'Apakah bisa integrasi dengan sistem lain?',
      },
    ],
  },
  'ai-assistant': {
    navLabel: 'AI Assistant',
    navDesc: 'AI-powered automation',
    title: 'AI Assistant',
    subtitle: 'Bukan Sekadar Chatbot. Ini Rekan Kerja Digital Anda.',
    description:
      'Lupakan dashboard yang rumit. Cukup perintahkan BizOps Copilot dalam bahasa manusia untuk mengerjakan tugas operasional, mulai dari analisa data hingga eksekusi workflow lintas aplikasi. Didukung teknologi Agentic AI yang bisa berfikir & bertindak mandiri.',
    icon: Bot,
    features: [
      {
        title: 'Natural Language Action',
        desc: 'Ketik "Buatkan Invoice untuk PT Maju Mundur senilai 50 Juta", dan Copilot akan mengisi form, melampirkan produk, dan menyiapkannya untuk Anda review.',
        icon: MessageSquare,
      },
      {
        title: 'Autonomous Agents',
        desc: 'Delegasikan tugas kompleks seperti "Monitor stok gudang A, jika < 100 otomatis buat PO ke Vendor Termurah". Agen akan bekerja 24/7 untuk Anda.',
        icon: Bot,
      },
      {
        title: 'Smart OCR',
        desc: 'Ekstrak data otomatis dari foto struk belanja atau faktur vendor untuk input data yang lebih cepat.',
        icon: FileText,
      },
      {
        title: 'Anomaly Detection',
        desc: 'Sistem mendeteksi transaksi mencurigakan atau di luar kewajaran dan memberi peringatan otomatis.',
        icon: AlertTriangle,
      },
    ],
    metrics: [
      { value: '500+', label: 'Jam Kerja Admin Dihemat/Bulan' },
      { value: '0', label: 'Human Error di Input Data' },
      { value: '24/7', label: 'Bot Bekerja Non-Stop' },
    ],
    problems: [
      {
        title: 'Pekerjaan Repetitif',
        desc: 'Staf menghabiskan waktu berjam-jam hanya untuk memindahkan data dari Email ke Excel, membuat mereka jenuh.',
        icon: RefreshCw,
      },
      {
        title: 'Lupa Follow-up',
        desc: 'Peluang sales hilang atau tagihan vendor telat dibayar karena staf lupa mengirim email pengingat manual.',
        icon: Clock,
      },
      {
        title: 'Human Error',
        desc: 'Salah ketik nominal atau salah input kode barang yang menyebabkan kerugian finansial.',
        icon: FileWarning,
      },
      {
        title: 'Respons Lambat',
        desc: 'Customer inquiry atau vendor request tidak ditangani cepat karena staff sibuk dengan tugas manual berulang.',
        icon: Clock,
      },
    ],
    mobileAdvantage: {
      title: 'Approval Satu Ketukan',
      desc: 'Terima notifikasi push instan untuk setiap persetujuan dokumen penting. Review detail dan Approve langsung dari notifikasi tanpa membuka laptop.',
    },
    connections: [
      {
        target: 'Sales',
        desc: 'Otomatis assign leads ke salesman berdasarkan wilayah atau nilai potensi deal.',
      },
      {
        target: 'HR',
        desc: 'Otomatis kirim ucapan ulang tahun atau notifikasi masa percobaan habis ke karyawan.',
      },
      {
        target: 'Inventory',
        desc: 'AI memprediksi kapan stok akan habis dan membuat draft PR otomatis.',
      },
    ],
    cta: {
      text: 'Otomatiskan bisnis Anda sekarang.',
      buttonLabel: 'Lihat Demo Otomatisasi',
    },
    faqs: [
      {
        question: 'Apakah butuh skill coding?',
        answer:
          'Tidak. Fitur Workflow Builder kami menggunakan antarmuka grafis (GUI) yang mudah dipahami orang awam bisnis.',
      },
      {
        question: 'Apakah bisa untuk notifikasi WhatsApp?',
        answer:
          'Bisa. Anda bisa men-trigger pesan WhatsApp otomatis saat status dokumen berubah (misal: Pesanan Dikirim).',
      },
      {
        question: 'Seberapa akurat prediksi AI-nya?',
        answer:
          'Akurasi akan meningkat seiring banyaknya data historis. Untuk bisnis yang sudah berjalan >1 tahun, akurasi bisa mencapai 80-90%.',
      },
    ],
  },
  'multi-company-management': {
    navLabel: 'Multi-Company Management',
    navDesc: 'Holding company management',
    title: 'Multi-Company Management',
    subtitle: 'Satu Sistem untuk Banyak Entitas.',
    description:
      'Kelola holding company dengan banyak anak perusahaan (PT/CV) dalam satu database. Konsolidasi laporan keuangan menjadi mudah dan real-time.',
    icon: Globe,
    features: [
      {
        title: 'Centralized Master Data',
        desc: 'Share data produk, pelanggan, dan vendor antar perusahaan untuk standarisasi grup.',
        icon: Database,
      },
      {
        title: 'Inter-Company Transactions',
        desc: 'Transaksi jual-beli antar entitas grup otomatis terjurnal di kedua buku besar.',
        icon: RefreshCw,
      },
      {
        title: 'Consolidated Reporting',
        desc: 'Laporan Laba Rugi dan Neraca gabungan tersedia instan tanpa proses manual Excel.',
        icon: FileSpreadsheet,
      },
      {
        title: 'Shared Service Center',
        desc: 'Pusatkan fungsi HR, IT, atau Finance untuk melayani seluruh grup dari satu dashboard.',
        icon: Users,
      },
    ],
    metrics: [
      { value: 'Instant', label: 'Financial Consolidation' },
      { value: '1', label: 'Single Database Source' },
      { value: '100%', label: 'Inter-company Elimination' },
    ],
    problems: [
      {
        title: 'Laporan Terpisah',
        desc: 'Setiap anak perusahaan punya database sendiri. Konsolidasi akhir bulan butuh waktu berminggu-minggu.',
        icon: FileWarning,
      },
      {
        title: 'Double Input',
        desc: 'PT A jual ke PT B. Admin PT A input invoice, Admin PT B input tagihan pembelian. Buang waktu.',
        icon: RefreshCw,
      },
      {
        title: 'Master Data Berantakan',
        desc: 'Kode barang di PT A beda dengan PT B, membuat analisis inventory grup jadi mustahil.',
        icon: AlertTriangle,
      },
      {
        title: 'Audit Bertele-tele',
        desc: 'Auditor external sulit melacak transaksi antar entitas karena sistem terpisah-pisah dan tidak terintegrasi.',
        icon: Search,
      },
    ],
    connections: [
      {
        target: 'Finance',
        desc: 'Otomatis eliminasi akun timbal-balik (reciprocal accounts) saat konsolidasi.',
      },
      {
        target: 'Inventory',
        desc: 'Transfer stok antar cabang/PT dengan dokumen Internal Transfer yang terintegrasi.',
      },
      {
        target: 'Sales',
        desc: 'Share data master Customer antar entitas untuk memudahkan cross-selling grup.',
      },
    ],
    cta: {
      text: 'Kelola gurita bisnis Anda dari satu kokpit.',
      buttonLabel: 'Demo Multi-Company',
    },
    faqs: [
      {
        question: 'Apakah chart of accounts harus sama?',
        answer:
          'Tidak wajib, tapi disarankan untuk memudahkan konsolidasi. Sistem mendukung mapping akun jika COA berbeda.',
      },
      {
        question: 'Apakah user PT A bisa melihat data PT B?',
        answer:
          'Defaultnya tidak. Hak akses dibatasi per Company (User Permission). Hanya level Holding/Group yang bisa melihat semua.',
      },
      {
        question: 'Mendukung beda mata uang?',
        answer:
          'Ya. Anak perusahaan di Singapura (SGD) bisa dikonsolidasikan ke Holding di Indonesia (IDR) dengan kurs otomatis.',
      },
    ],
  },
  'customer-portals': {
    navLabel: 'Customer Portals',
    navDesc: 'Customer & Vendor access',
    title: 'Customer Portals',
    subtitle: 'Libatkan Pelanggan & Vendor Secara Langsung.',
    description:
      'Berikan akses terbatas yang aman kepada pihak eksternal untuk berinteraksi dengan sistem Anda. Kurangi beban admin dalam melayani permintaan status.',
    icon: Layout,
    features: [
      {
        title: 'Customer Portal',
        desc: 'Pelanggan dapat melihat katalog, membuat pesanan, cek status pengiriman, dan download invoice mandiri.',
        icon: UserCheck,
      },
      {
        title: 'Vendor Portal',
        desc: 'Supplier dapat submit penawaran harga (RFQ), upload tagihan, dan cek status pembayaran.',
        icon: Truck,
      },
      {
        title: 'Candidate Portal',
        desc: 'Pelamar kerja dapat upload CV, ikut tes online, dan cek status lamaran kerja.',
        icon: UserPlus,
      },
      {
        title: 'Support Ticket Portal',
        desc: 'Pusat bantuan mandiri untuk pelaporan kendala dan tracking status penyelesaiannya.',
        icon: Headphones,
      },
    ],
    metrics: [
      { value: '30%', label: 'Less Admin Calls' },
      { value: '24/7', label: 'Self-Service Access' },
      { value: 'Faster', label: 'Vendor Response Time' },
    ],
    problems: [
      {
        title: 'Telpon Terus Berdering',
        desc: 'Admin sales sibuk menjawab pertanyaan \'Barang saya sudah dikirim belum?\' dari pelanggan.',
        icon: Phone,
      },
      {
        title: 'Vendor Tagih Manual',
        desc: 'Invoice vendor tercecer di email atau hardcopy, menyebabkan keterlambatan pembayaran.',
        icon: FileWarning,
      },
      {
        title: 'CV Lamaran Numplek',
        desc: 'HRD pusing merekap ribuan CV dari email. Candidate Portal merapikan database pelamar otomatis.',
        icon: Users,
      },
      {
        title: 'Komunikasi Tidak Terstruktur',
        desc: 'Pesan penting dari customer atau vendor hilang di tumpukan chat WhatsApp grup yang tidak terorganisir.',
        icon: MessageCircle,
      },
    ],
    mobileAdvantage: {
      title: 'Akses Mudah untuk Mitra',
      desc: 'Vendor dan Customer tidak perlu menginstall aplikasi apapun. Portal kami 100% Mobile Responsive, ringan, dan cepat diakses melalui browser HP.',
    },
    connections: [
      {
        target: 'Sales',
        desc: 'Pesanan dari Customer Portal langsung masuk sebagai Sales Order Draft.',
      },
      {
        target: 'Procurement',
        desc: 'Penawaran vendor via portal langsung masuk perbandingan harga (Quotation Comparison).',
      },
      {
        target: 'HR',
        desc: 'Pelamar kerja via Candidate Portal otomatis masuk ke database Rekrutmen.',
      },
    ],
    cta: {
      text: 'Berikan pengalaman digital terbaik untuk mitra Anda.',
      buttonLabel: 'Lihat Demo Portal',
    },
    faqs: [
      {
        question: 'Apakah portal aman?',
        answer:
          'Aman. User portal hanya memiliki akses terbatas (Website User) dan tidak bisa masuk ke module internal (Desk).',
      },
      {
        question: 'Apakah perlu bayar lisensi per user portal?',
        answer:
          'Tidak! User portal (Customer/Vendor) unlimited dan gratis. Anda hanya membayar untuk user internal.',
      },
      {
        question: 'Bisa pakai domain sendiri?',
        answer: 'Bisa. Portal bisa diakses di subdomain seperti vendor.perusahaananda.com.',
      },
      {
        question: 'Apakah vendor perlu install aplikasi?',
        answer:
          'Tidak perlu. Portal berbasis web (Web-based) yang responsif, bisa diakses lewat browser di HP atau Laptop tanpa instalasi.',
      },
    ],
  },
  'reports-analytics': {
    navLabel: 'Reports & Analytics',
    navDesc: 'Custom reports & dashboards',
    title: 'Reports & Analytics',
    subtitle: 'Data Anda, Cara Anda.',
    description:
      'Jangan terpaku pada laporan standar. Buat laporan kustom sesuai kebutuhan unik bisnis Anda dengan tool Report Builder yang powerful.',
    icon: PieChart,
    features: [
      {
        title: 'Drag & Drop Report Builder',
        desc: 'Desain laporan kolom atau pivot table dengan mudah. Pilih field, filter, dan grouping sesuai kebutuhan.',
        icon: Layout,
      },
      {
        title: 'Custom Dashboards',
        desc: 'Buat dashboard personal untuk setiap role dengan widget grafik, angka kunci, dan shortcut.',
        icon: BarChart,
      },
      {
        title: 'Auto-Email Reports',
        desc: 'Jadwalkan pengiriman laporan rutin (harian/mingguan) ke email manajemen secara otomatis.',
        icon: Mail,
      },
      {
        title: 'Excel/PDF Export',
        desc: 'Export data laporan ke format standar untuk analisis lanjutan di spreadsheet.',
        icon: FileSpreadsheet,
      },
    ],
    metrics: [
      { value: 'Unlimited', label: 'Custom Report' },
      { value: '< 5s', label: 'Report Generation Time' },
      { value: '100%', label: 'Real-time Data' },
    ],
    problems: [
      {
        title: 'Ketergantungan IT',
        desc: 'User bisnis harus minta tolong programmer setiap kali butuh laporan baru atau sekadar tambah kolom.',
        icon: UserCheck,
      },
      {
        title: 'Excel Hell',
        desc: 'Data diekspor ke puluhan file Excel terpisah yang kemudian digabung manual, rentan salah rumus.',
        icon: FileWarning,
      },
      {
        title: 'Data Basi',
        desc: 'Laporan baru tersedia di akhir bulan. Saat laporan jadi, momentum pengambilan keputusan sudah lewat.',
        icon: History,
      },
      {
        title: 'Sulitnya Cross-Module Report',
        desc: 'Data terpecah di berbagai sistem membuat laporan gabungan (misal: sales vs inventory) menjadi sangat sulit.',
        icon: FileWarning,
      },
    ],
    mobileAdvantage: {
      title: 'Dashboard di Saku Anda',
      desc: 'Pantau KPI perusahaan secara real-time saat Anda meeting di luar kantor. Grafik interaktif menyesuaikan dengan layar HP untuk kemudahan analisis.',
    },
    connections: [
      {
        target: 'All Modules',
        desc: 'Report Builder bisa mengakses seluruh DocType di sistem tanpa batasan.',
      },
      {
        target: 'Email',
        desc: 'Kirim laporan PDF otomatis ke inbox Direksi setiap Senin pagi.',
      },
      {
        target: 'Dashboard',
        desc: 'Shortcut satu-klik dari Home Dashboard user menuju laporan spesifik.',
      },
    ],
    cta: {
      text: 'Ubah data mentah menjadi wawasan berharga.',
      buttonLabel: 'Coba Report Builder',
    },
    faqs: [
      {
        question: 'Apakah bisa export ke Excel?',
        answer:
          'Bisa. Mendukung format Excel (.xlsx), CSV, dan PDF. Format Excel yang diekspor rapi dan siap diolah.',
      },
      {
        question: 'Apakah bisa connect ke PowerBI/Tableau?',
        answer:
          'Bisa. Untuk pengguna Self-Hosted, Anda bisa konek langsung ke Database PostgreSQL kami. Untuk Cloud, bisa via API.',
      },
      {
        question: 'Apakah user biasa bisa buat laporan sendiri?',
        answer:
          'Sangat bisa. Interface drag-and-drop didesain untuk non-technical user. Administrator tetap bisa membatasi data apa yang boleh dilihat.',
      },
    ],
  },
  'architecture': {
    navLabel: 'Enterprise Architecture',
    navDesc: 'Full stack overview & specifications',
    title: 'Enterprise Architecture',
    subtitle: 'Arsitektur Enterprise Tanpa Kompromi.',
    description:
      'BizOps dibangun di atas pondasi teknologi yang telah teruji mengelola jutaan transaksi global. Perpaduan fleksibilitas Frappe Framework dan kematangan kernel ERPNext, menciptakan sistem yang scalable, aman, dan developer-friendly.',
    icon: Server,
    features: [
      {
        title: 'Metadata-Driven Framework',
        desc: 'Struktur database, form, dan permission didefinisikan sebagai metadata (DocType). Perubahan skema terjadi otomatis tanpa migrasi manual yang rumit.',
        icon: FileCheck,
      },
      {
        title: 'Python + JS Stack',
        desc: 'Backend Python yang robust untuk logika bisnis kompleks, dipadukan dengan Frontend JS modern untuk interaksi UI yang responsif.',
        icon: Code,
      },
      {
        title: 'Asynchronous Background Jobs',
        desc: 'Proses berat (Laporan, Email Bulk) berjalan di background via Redis Queue (BullMQ) menjaga UI tetap cepat dan responsif.',
        icon: Zap,
      },
      {
        title: 'Real-time Event Streaming',
        desc: 'Socket.io mengirimkan update data (Status Dokumen, Chat) secara instan ke browser pengguna tanpa refresh halaman.',
        icon: Activity,
      },
    ],
    metrics: [
      { value: '100%', label: 'Open Source Core' },
      { value: '< 100ms', label: 'API Response Time' },
      { value: '99.9%', label: 'Uptime SLA' },
    ],
    problems: [
      {
        title: 'Blackbox Legacy System',
        desc: 'Sistem lama yang kaku, sulit dikustomisasi, dan hanya vendor yang tahu isinya. Perubahan kecil butuh waktu berbulan-bulan.',
        icon: Lock,
      },
      {
        title: 'Vendor Lock-in',
        desc: 'Ketergantungan total pada satu vendor proprietary. Data sulit diambil dan biaya lisensi naik terus tanpa kendali.',
        icon: Building,
      },
      {
        title: 'Scalability Issue',
        desc: 'Sistem melambat saat transaksi meningkat. Tidak mendukung horizontal scaling (menambah server) saat bisnis tumbuh.',
        icon: TrendingDown,
      },
    ],
    mobileAdvantage: {
      title: 'API-First Design',
      desc: 'Karena BizOps dibangun dengan filosofi API-First, aplikasi mobile kami hanyalah salah satu \'klien\' yang mengonsumsi API yang sama. Ini menjamin konsistensi data 100% antara Web dan Mobile.',
    },
    connections: [
      {
        target: 'Integration',
        desc: 'Arsitektur terbuka memudahkan koneksi dengan layanan pihak ketiga via REST API.',
      },
      {
        target: 'Self-Hosted',
        desc: 'Arsitektur Docker-ready memungkinkan deployment mandiri di infrastruktur Anda.',
      },
      {
        target: 'Automation',
        desc: 'Event hooks di level framework menjadi pemicu untuk berbagai otomatisasi workflow.',
      },
    ],
    cta: {
      text: 'Pelajari lebih dalam tentang teknologi di balik BizOps.',
      buttonLabel: 'Baca Dokumentasi Developer',
    },
    faqs: [
      {
        question: 'Apa teknologi database yang digunakan?',
        answer:
          'Kami menggunakan MariaDB (MySQL fork) atau PostgreSQL sebagai database utama, menjamin performa transaksional (ACID) dan integritas data tinggi.',
      },
      {
        question: 'Apakah menggunakan Microservices?',
        answer:
          'Kami menggunakan pendekatan \'Modular Monolith\'. Modul-modul terpisah secara logis namun berjalan dalam satu kernel efisien, menghindari kompleksitas operasional microservices yang tidak perlu.',
      },
      {
        question: 'Bagaimana dengan caching?',
        answer:
          'Kami menggunakan Redis secara ekstensif untuk caching konfigurasi, session, dan antrian job (Queue), memberikan performa akses data yang sangat cepat.',
      },
    ],
  },
  'security': {
    navLabel: 'Security & Compliance',
    navDesc: 'Bank-grade protection & compliance',
    title: 'Security & Compliance',
    subtitle: 'Uncompromising Data Protection.',
    description:
      'Built with a "Security-First" architecture. From encryption at rest/transit to granular role-based access control (RBAC), BizOps ensures your data remains yours.',
    icon: ShieldCheck,
    features: [
      {
        title: 'Bank-Grade Encryption',
        desc: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Your sensitive business information is mathematically unreadable to unauthorized parties.',
        icon: Lock,
      },
      {
        title: 'Single Sign-On (SSO)',
        desc: 'Integrate with your corporate Identity Provider (Google Workspace, Azure AD, Okta) via SAML 2.0 or OAuth for secure, centralized access management.',
        icon: Key,
      },
      {
        title: 'Immutable Audit Logs',
        desc: 'Every action (View, Create, Edit, Delete) is logged with a cryptographic hash. Perfect for forensic analysis and compliance audits.',
        icon: FileCheck,
      },
      {
        title: 'Role-Based Access (RBAC)',
        desc: 'Granular permission settings down to the field level. Apply "Least Privilege Access" policies to ensure users only see what they need.',
        icon: ShieldCheck,
      },
    ],
    metrics: [
      { value: 'AES-256', label: 'Encryption Standard' },
      { value: 'SOC 2', label: 'Compliance Ready' },
      { value: '100%', label: 'Audit Trail' },
    ],
    problems: [
      {
        title: 'Data Breaches',
        desc: 'Weak passwords and unencrypted databases leave your company vulnerable to ransomware and data theft.',
        icon: AlertTriangle,
      },
      {
        title: 'Compliance Nightmares',
        desc: 'Managing user access manually across multiple systems creates audit findings and security gaps.',
        icon: FileWarning,
      },
      {
        title: 'Insider Threats',
        desc: 'Without detailed logs, it\'s impossible to trace who leaked sensitive customer lists or manipulated financial records.',
        icon: EyeOff,
      },
    ],
    mobileAdvantage: {
      title: 'Biometric Security',
      desc: 'Mobile app supports native FaceID and Fingerprint authentication, adding an extra layer of physical security for field staff.',
    },
    connections: [
      {
        target: 'HR',
        desc: 'Employee offboarding in HR automatically revokes system access instantly.',
      },
      {
        target: 'IT Dept',
        desc: 'Centralized admin panel for IT Security team to monitor active sessions and suspicious activities.',
      },
      {
        target: 'Compliance',
        desc: 'One-click export of audit logs for external auditors.',
      },
    ],
    cta: {
      text: 'Secure your enterprise data today.',
      buttonLabel: 'Download Security Whitepaper',
    },
    faqs: [
      {
        question: 'Is it compliant with GDPR/PDPA?',
        answer:
          'Yes. We provide tools for "Right to be Forgotten" (Data Anonymization) and Consent Management to help you meet privacy regulations.',
      },
      {
        question: 'Can we use 2FA?',
        answer:
          'Absolutely. Two-Factor Authentication (OTP via Email/Authenticator App) can be enforced for all users or specific roles.',
      },
      {
        question: 'Do you have penetration testing reports?',
        answer:
          'Yes. We perform regular 3rd-party pentests. Reports are available upon request under NDA for enterprise clients.',
      },
    ],
  },
};

// --- INTEGRATION LIBRARY ---
export const integrationsData = [
  {
    category: 'ERP & Accounting Sync',
    desc: 'Sinkronisasi jurnal dan data master.',
    apps: [
      {
        name: 'SAP Connector',
        desc: 'Sinkronisasi dua arah Jurnal GL & Material Master. Cocok untuk anak perusahaan.',
      },
      { name: 'Odoo Connector', desc: 'Sync Stok & Sales Order real-time untuk ritel.' },
      {
        name: 'Jurnal.id / Accurate',
        desc: 'Ekspor data transaksi harian ke software akuntansi lokal.',
      },
    ],
  },
  {
    category: 'Communication & Notification',
    desc: 'Notifikasi real-time ke kanal tim.',
    apps: [
      {
        name: 'WAHA (WhatsApp API)',
        desc: 'Kirim OTP, Slip Gaji, dan Approval PO via WhatsApp pribadi.',
      },
      { name: 'Slack / Teams', desc: 'Bot notifikasi status proyek ke channel tim.' },
      { name: 'Telegram Bot', desc: 'Alternatif notifikasi ringan dan gratis.' },
    ],
  },
  {
    category: 'Banking & Payment',
    desc: 'Rekonsiliasi dan pembayaran otomatis.',
    apps: [
      {
        name: 'KlikBCA / Mandiri MCM',
        desc: 'Baca file MT940/CSV mutasi bank untuk rekonsiliasi otomatis.',
      },
      {
        name: 'Xendit / Midtrans',
        desc: 'Payment Link otomatis pada Invoice. Status lunas realtime.',
      },
    ],
  },
  {
    category: 'E-Commerce Omnichannel',
    desc: 'Tarik pesanan marketplace otomatis.',
    apps: [
      {
        name: 'Tokopedia / Shopee',
        desc: 'Tarik Sales Order & potong stok inventory di semua channel.',
      },
      { name: 'TikTok Shop', desc: 'Integrasi pesanan social commerce.' },
    ],
  },
  {
    category: 'Hardware & IoT',
    desc: 'Koneksi ke perangkat fisik.',
    apps: [
      { name: 'ZKTeco / Hikvision', desc: 'Tarik log absensi mentah via ADMS Protocol.' },
      { name: 'Jembatan Timbang', desc: 'Baca berat truk langsung ke form Goods Receipt.' },
    ],
  },
];

// --- FEATURE PAGES DATA (Analytics, AutomationAI, MultiCompany, Portals) ---
export const featuresData: Record<string, FeaturePageData> = {
  'reports-analytics': {
    id: 'reports-analytics',
    title: 'Your Reports, Your Way.',
    titleHighlight: 'No Coding.',
    subtitle: 'Analytics & Reports',
    description:
      'Every business has a unique way of viewing data. Don\'t be stuck with rigid standard reports. With Report Builder, you become the data analyst for your own company.',
    icon: BarChart2,
    heroVariant: 'dark',
    metaTitle: 'Real-time Dashboard & Custom Report Builder | BizOps',
    metaDesc:
      'Create custom reports without coding. Real-time dashboards, drag-and-drop builder, and automated scheduled reports.',

    featuresBadge: 'Key Features',
    featuresTitle: 'Build Reports Your Way',
    featuresSubtitle: 'Flexible analytics tools for every business scenario.',
    features: [
      {
        title: 'Real-time Dashboard',
        desc: 'Customizable visual widgets updated second by second. Bar Charts, Pie Charts, KPI Cards, Heatmaps.',
        icon: PieChart,
        color: 'blue',
      },
      {
        title: 'Drag-and-Drop Builder',
        desc: 'Intuitive interface for creating tabular reports. Select columns, drag to canvas, apply complex filters without coding.',
        icon: Filter,
        color: 'amber',
      },
      {
        title: 'Auto-Schedule Email',
        desc: 'Create report once, schedule automatic delivery. System runs it consistently every day/week/month.',
        icon: Calendar,
        color: 'green',
      },
    ],

    useCasesBadge: 'Popular Reports',
    useCasesTitle: 'Commonly Used Report Examples',
    useCasesSubtitle: 'Ready-to-use templates you can customize for your business needs.',
    useCases: [
      {
        title: 'Sales Performance Report',
        desc: 'Analyze sales performance by region, product, and period. Compare target vs actual, identify top and underperformers.',
        icon: TrendingUp,
        tags: ['Filter by Region', 'Group by Product', 'Time Comparison'],
      },
      {
        title: 'Inventory Movement Report',
        desc: 'Track stock movements: incoming, outgoing, inter-warehouse transfers. Identify slow-moving and fast-moving items for inventory optimization.',
        icon: FileBarChart,
        tags: ['Stock Aging', 'Turnover Ratio', 'Reorder Alert'],
      },
      {
        title: 'Financial Summary Report',
        desc: 'Comprehensive financial reports: Profit & Loss, Cash Flow, Balance Sheet. Export to Excel or PDF for stakeholder presentations.',
        icon: BarChart2,
        tags: ['Multi-Currency', 'Budget vs Actual', 'Drill-down'],
      },
    ],

    cta: {
      title: 'Transform Data Into Insights',
      subtitle: 'See how easy it is to create custom reports without IT or consultant help.',
      badge: 'Analytics & Reports',
      demoBtn: 'Schedule Analytics Demo',
      pricingBtn: 'View Pricing',
      trustText1: '14 Days Free',
      trustText2: 'No Credit Card',
    },
  },

  'ai-assistant': {
    id: 'ai-assistant',
    title: 'Let the System Work,',
    titleHighlight: 'Not You.',
    subtitle: 'Automation & AI',
    description:
      'Reduce repetitive manual work by up to 80%. BizOps comes with Workflow Builder and practical Applied AI.',
    icon: Zap,
    heroVariant: 'dark',
    metaTitle: 'Workflow Automation & Applied AI | BizOps',
    metaDesc:
      'Automate business processes with no-code workflow builder. OCR for invoices, auto-assignment, and intelligent automation.',

    featuresBadge: 'Workflow Automation',
    featuresTitle: 'No-Code Business Logic',
    featuresSubtitle: 'Create "If X then Y" rules without any coding.',
    features: [
      {
        title: 'Visual Builder',
        desc: 'Intuitive drag-and-drop interface for creating "If X then Y" logic rules without coding.',
        icon: GitMerge,
        color: 'blue',
      },
      {
        title: 'Scenario Examples',
        desc: '"If Stock < 10 units, auto-create Purchase Request to Vendor A, send PO email, and WA notification to Warehouse Manager."',
        icon: ArrowRight,
        color: 'purple',
      },
      {
        title: 'Auto-Assignment',
        desc: 'Automatic task distribution. Example: "Every new Lead from South Jakarta auto-assigned to Salesman Budi."',
        icon: Zap,
        color: 'green',
      },
    ],

    useCasesBadge: 'Applied AI',
    useCasesTitle: 'Practical Artificial Intelligence',
    useCasesSubtitle: 'Not just buzzwords, but real time-saving AI features.',
    useCases: [
      {
        title: 'Invoice OCR',
        desc: 'Snap supplier invoice photo, AI reads vendor name, total amount, and line items. Directly creates Purchase Invoice draft you just need to verify.',
        icon: ScanLine,
        result: 'Reduce invoice entry from 5 mins to 30 secs',
      },
      {
        title: 'Anomaly Detection',
        desc: 'System learns expense patterns. Auto-flag if Marketing cost spikes 200% in one month.',
        icon: ShieldAlert,
        result: 'Auto-detect fraud before escalation',
      },
      {
        title: 'AI Copilot',
        desc: 'Ask: "Which customers have outstanding payments over 30 days?" Get answers in seconds without creating custom reports.',
        icon: BrainCircuit,
        result: 'Natural language queries for instant insights',
      },
    ],

    cta: {
      title: 'Ready for Autopilot Operations?',
      subtitle: 'Schedule a 30-minute demo to see automation and AI work in real-time.',
      badge: 'Automation & AI',
      demoBtn: 'Schedule Demo Now',
      pricingBtn: 'View Pricing',
      trustText1: '14 Days Free',
      trustText2: 'No Credit Card',
    },
  },

  'multi-company-management': {
    id: 'multi-company-management',
    title: 'One Platform for',
    titleHighlight: 'Your Entire Business Group.',
    subtitle: 'Multi-Company',
    description:
      'Have multiple PTs, CVs, or different business units? Unify your group company management with native Multi-Company structure.',
    icon: Network,
    heroVariant: 'dark',
    metaTitle: 'Multi-Company Management & Financial Consolidation | BizOps',
    metaDesc:
      'Manage multiple companies in one platform. Unified login, financial consolidation, and automatic inter-company transactions.',

    featuresBadge: 'Core Features',
    featuresTitle: 'Holding Company Management',
    featuresSubtitle: 'Enterprise-grade features for business groups.',
    features: [
      {
        title: 'Unified Login & Access',
        desc: 'One username to access PT A, PT B, and CV C data. Switch between companies as easy as changing TV channels, but data access rights remain strictly separated.',
        icon: Key,
        color: 'blue',
      },
      {
        title: 'Financial Consolidation',
        desc: 'Forget headache-inducing Excel VLOOKUP. BizOps pulls Balance Sheet and P&L from all subsidiaries and presents them in one real-time Group Consolidated Report.',
        icon: FileText,
        color: 'green',
      },
      {
        title: 'Inter-Company Transactions',
        desc: 'Internal transaction automation. When PT A sells goods to PT B, system auto-creates Sales Invoice in PT A and Purchase Invoice in PT B simultaneously.',
        icon: RefreshCw,
        color: 'purple',
      },
    ],

    cta: {
      title: 'Manage Business Group Efficiently',
      subtitle: 'Schedule a demo to see how multi-company management works for your business.',
      badge: 'Multi-Company',
      demoBtn: 'Request Enterprise Demo',
      pricingBtn: 'View Pricing',
      demoLink: '/demo?plan=enterprise',
      trustText1: '14 Days Free',
      trustText2: 'No Credit Card',
    },
  },

  'customer-portals': {
    id: 'customer-portals',
    title: 'Stop Being Admin',
    titleHighlight: 'for Your Clients.',
    subtitle: 'B2B Portals',
    description:
      'Free your CS, Sales Admin, and Purchasing teams from repetitive questions. Give your business partners 24/7 self-service portal access.',
    icon: Globe,
    heroVariant: 'dark',
    metaTitle: 'B2B Customer & Vendor Portal | BizOps',
    metaDesc:
      'Self-service portals for customers and vendors. B2B e-commerce experience, invoice downloads, and payment status tracking.',

    featuresBadge: 'Portal Types',
    featuresTitle: 'Self-Service for Business Partners',
    featuresSubtitle: 'Empower your customers and vendors with 24/7 access.',
    features: [
      {
        title: 'B2B Customer Portal',
        desc: 'Give your clients a B2B e-commerce experience. View product catalog with contract-specific pricing, self-input Sales Orders, download Invoice PDFs & track delivery.',
        icon: ShoppingBag,
        color: 'blue',
      },
      {
        title: 'Supplier/Vendor Portal',
        desc: 'Digitize supplier interactions for procurement transparency. View open RFQs, submit competitive bids, check payment status without calling Finance.',
        icon: Truck,
        color: 'amber',
      },
    ],

    cta: {
      title: 'Enhance Business Collaboration',
      subtitle:
        'See how B2B portals can increase team efficiency and business partner satisfaction.',
      badge: 'B2B Portals',
      demoBtn: 'Request Portal Demo',
      pricingBtn: 'View Pricing',
      trustText1: '14 Days Free',
      trustText2: 'No Credit Card',
    },
  },

  'security': {
    id: 'security',
    title: 'Bank-Grade Security',
    titleHighlight: 'for Your Enterprise.',
    subtitle: 'Security & Compliance',
    description:
      'We treat security as a feature, not an afterthought. Protect your business with the same standards used by financial institutions.',
    icon: ShieldCheck,
    heroVariant: 'dark',
    metaTitle: 'Enterprise ERP Security: SSO, Encryption & Audit Logs | BizOps',
    metaDesc:
      'Enterprise-grade security features including Single Sign-On (SSO), AES-256 Encryption, Immutable Audit Logs, and Role-Based Access Control.',

    featuresBadge: 'Security Features',
    featuresTitle: 'Uncompromising Protection',
    featuresSubtitle: 'Comprehensive security layers for peace of mind.',
    features: [
      {
        title: 'Single Sign-On (SSO)',
        desc: 'Seamless login with Google, Microsoft 365, or Okta. Enforce corporate password policies and kill access instantly when employees leave.',
        icon: Key,
        color: 'blue',
      },
      {
        title: 'Field-Level Encryption',
        desc: 'Encrypt sensitive columns (like Salary or NIK) in the database. Even DB admins cannot read the raw data without the decryption key.',
        icon: Lock,
        color: 'green',
      },
      {
        title: 'Brute Force Protection',
        desc: 'Automatic account locking after failed login attempts. IP rate limiting to prevent automated attacks.',
        icon: ShieldAlert,
        color: 'amber',
      },
    ],

    useCasesBadge: 'Compliance',
    useCasesTitle: 'Audit & Compliance Ready',
    useCasesSubtitle: 'Tools to help you pass ISO 27001 and financial audits.',
    useCases: [
      {
        title: 'Forensic Audit Trail',
        desc: 'Track every single change to data. "Who changed the Price List from 100 to 90 at 2 AM?" The system knows.',
        icon: FileCheck,
        result: '100% Traceability of data changes',
      },
      {
        title: 'Session Management',
        desc: 'Monitor active sessions in real-time. Remotely revoke access for lost devices or suspicious IPs.',
        icon: Activity,
        result: 'Immediate threat containment',
      },
      {
        title: 'Data Sovereignty',
        desc: 'Choose where your data lives. On-Premise, Private Cloud (Jakarta Region), or Dedicated Instance.',
        icon: Server,
        result: 'Full compliance with data residency laws',
      },
    ],

    cta: {
      title: 'Trust is Good, Control is Better.',
      subtitle: 'See our security features in action with a technical demo.',
      badge: 'Security Shield',
      demoBtn: 'Schedule Security Demo',
      pricingBtn: 'View Pricing',
      trustText1: 'GDPR Compliant',
      trustText2: 'ISO 27001 Ready',
    },
  },
};
// --- ECOSYSTEM DATA ---
export const ecosystemData = [
  { target: 'Banks', descKey: 'ecosystem_banks' },
  { target: 'Tax', descKey: 'ecosystem_tax' },
  { target: 'E-Commerce', descKey: 'ecosystem_ecommerce' },
  { target: 'POS', descKey: 'ecosystem_pos' },
];

// --- METHODOLOGY DATA ---
export const methodologyData = [
  { titleKey: 'method_1_title', descKey: 'method_1_desc' },
  { titleKey: 'method_2_title', descKey: 'method_2_desc' },
  { titleKey: 'method_3_title', descKey: 'method_3_desc' },
  { titleKey: 'method_4_title', descKey: 'method_4_desc' },
];
