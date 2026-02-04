import type { IndustryData, RoleData } from '../types';

import {
  ArrowLeftRight,
  Briefcase,
  Building,
  Clipboard,
  Clock,
  Cpu,
  Database,
  DollarSign,
  Factory,
  FileText,
  Globe,
  HardHat,
  List,
  Monitor,
  Package,
  PieChart,
  Plane,
  RefreshCw,
  Scan,
  Server,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Ticket,
  TrendingUp,
  UserCheck,
  Users,
} from 'lucide-react';

// --- INDUSTRIES TRANSLATIONS ---
export const industriesTranslations: {
  en: Record<string, IndustryData>;
  id: Record<string, IndustryData>;
} = {
  en: {
    construction: {
      title: 'Construction & Engineering',
      subtitle: 'Maximum Profit on Every Project. No Losses.',
      description:
        'End-to-end construction management platform for Contractors & Developers. Lock RAB budgets, monitor S-Curve progress in real-time, and secure cashflow from stalled terms.',
      metaTitle: 'Construction & Contractor ERP Software (RAB & Projects)',
      metaDesc:
        'Best construction project management application. RAB vs Actual features, Daily Reports, Subcontractor Management, and Construction Service PPh Final Calculation.',
      icon: HardHat,
      metrics: [
        { value: '100%', label: 'Budget Control (RAB)' },
        { value: 'H+0', label: 'Real-time Costing' },
        { value: 'Auto', label: 'S-Curve Reports' },
      ],
      challenges: [
        {
          title: 'Budget \'Leakage\'',
          desc: 'Materials lost on site, remaining materials unrecorded, or purchases exceeding RAB volume without approval.',
        },
        {
          title: 'Stalled Cashflow',
          desc: 'Term invoices to Owner delayed because physical opname data from field hasn\'t been compiled by admin.',
        },
        {
          title: 'Problematic Subcontractors',
          desc: 'Difficult to track Subcontractor DP, retention deductions, and foreman work progress that doesn\'t match payments.',
        },
      ],
      solutions: [
        {
          title: 'RAB Budget Lock',
          desc: 'System automatically rejects Purchase Orders (PO) if price or volume exceeds established RAB remaining budget.',
          icon: ShieldCheck,
        },
        {
          title: 'Mobile Opname',
          desc: 'Executors input physical progress & photos via phone. Opname directly becomes basis for term invoicing to Owner.',
          icon: Smartphone,
        },
        {
          title: 'Subcontractor & Retention',
          desc: 'Manage Subcontractor SPK, monitor progress, and automatically calculate 5% retention deductions and PPh 4(2).',
          icon: Users,
        },
      ],
      faqs: [
        {
          question: 'Does it support PPh Final calculation?',
          answer:
            'Yes, the system automatically calculates PPh 4(2) Construction Services for each invoice term (Both to Owner and from Subcontractors).',
        },
        {
          question: 'Can it handle Multi-Year projects?',
          answer:
            'Absolutely. The system supports long-term project management with price escalation and phased term tracking.',
        },
        {
          question: 'What if there are remaining materials?',
          answer:
            'Material Transfer feature available to move remaining stock to other projects or return to Main Warehouse.',
        },
      ],
      caseStudyTitle: 'Saved 12% Margin',
      caseStudy:
        'PT Konstruksi Jaya Abadi successfully detected material leakage worth 2M and increased average project margin by 12% with RAB Locking feature.',
      testimonial: {
        quote:
          'We used to find out about losses after project completion. Now, the moment materials leave, I instantly know how much project budget remains.',
        author: 'Ir. Budi Hartono',
        role: 'Operations Director',
        avatar: 'https://ui-avatars.com/api/?name=Budi+Hartono&background=F59E0B&color=fff',
      },
    },
    retail: {
      title: 'Retail & Distribution',
      subtitle: 'Accurate Stock. Fast Cashier. Increasing Profit.',
      description:
        'Omnichannel solution for Modern Retail. Real-time Tokopedia/Shopee/TikTok stock synchronization, prevent cashier fraud, and accelerate inventory turnover.',
      metaTitle: 'Retail ERP Software, POS & Distribution (Omnichannel)',
      metaDesc:
        'POS and Inventory application for Retail. Marketplace Integration, Daily Stock Reports, and Profit Analysis per Branch.',
      icon: ShoppingCart,
      metrics: [
        { value: '100%', label: 'Marketplace Sync' },
        { value: '0', label: 'Cashier Discrepancy' },
        { value: '3x', label: 'Faster Opname' },
      ],
      challenges: [
        {
          title: 'Stock \'Ghost\'',
          desc: 'Items in system exist, shelves empty. Or vice versa. Results in frequent order rejections or marketplace overselling.',
        },
        {
          title: 'Cashier & Fraud',
          desc: 'Potential cashier fraud (fictitious discounts, money not deposited) difficult to detect without strict system.',
        },
        {
          title: 'Dead Stock',
          desc: 'Capital stuck in slow-moving items due to wrong purchase predictions.',
        },
      ],
      solutions: [
        {
          title: 'Omnichannel Hub',
          desc: 'One stock for all channels (Physical Store, Web, Marketplace). Automatically deduct stock when sales occur anywhere.',
          icon: Database,
        },
        {
          title: 'Anti-Fraud POS',
          desc: 'Lock selling prices and discounts. Cashiers can\'t change prices arbitrarily. Mandatory deposit (Cash Count) at shift close.',
          icon: Monitor,
        },
        {
          title: 'Smart Reorder',
          desc: 'System notifies what items to purchase (Restock) based on bestseller sales trends.',
          icon: RefreshCw,
        },
      ],
      faqs: [
        {
          question: 'Can it scan item barcodes?',
          answer:
            'Absolutely. Supports all types of barcode scanners (USB/Bluetooth) and prints price/shelf labels.',
        },
        {
          question: 'What if internet goes down?',
          answer:
            'Our POS has Offline Mode. Cashiers can still sell, data will sync automatically when back online.',
        },
        {
          question: 'Does it support multiple branches?',
          answer:
            'Yes, you can monitor revenue and stock of thousands of branches in real-time from one central dashboard.',
        },
      ],
      caseStudyTitle: 'Revenue Up 30%',
      caseStudy:
        'Berkah Mart Group successfully eliminated \'lost sales\' due to out-of-stock and increased revenue 30% through real-time marketplace stock integration.',
      testimonial: {
        quote:
          'Stock opname used to be a nightmare, had to close store for 2 days. Now we can do partial opname while selling via phone.',
        author: 'Dewi Sartika',
        role: 'Operational Manager',
        avatar: 'https://ui-avatars.com/api/?name=Dewi+Sartika&background=10B981&color=fff',
      },
    },
    outsourcing: {
      title: 'Outsourcing Service',
      subtitle: 'Manage Thousands of Personnel Without Payroll Drama.',
      description:
        'HRIS & Payroll system specialist for Outsourcing. Ensure personnel present at client locations (Anti-Fake GPS), calculate overtime accurately, and invoice clients on time.',
      metaTitle: 'Outsourcing & Security Service HRIS System',
      metaDesc:
        'Outsourcing management software. Face ID + Geofencing attendance, Payroll for thousands of employees, and automatic client invoicing.',
      icon: UserCheck,
      metrics: [
        { value: '0', label: 'Ghost Employee' },
        { value: 'H+1', label: 'Client Invoice' },
        { value: '100%', label: 'Overtime Accuracy' },
      ],
      challenges: [
        {
          title: 'Buddy Punching / Fake GPS',
          desc: 'Difficult to ensure personnel (Security/Cleaning) are actually at client location or just faking location.',
        },
        {
          title: 'Payroll Misses',
          desc: 'Calculating salary, overtime, and deductions for thousands of employees with Excel is error-prone and time-consuming.',
        },
        {
          title: 'Late Invoicing',
          desc: 'Cashflow disrupted because client invoices can only be sent after manual attendance recap is complete (can take 2 weeks).',
        },
      ],
      solutions: [
        {
          title: 'Bio-Geo Attendance',
          desc: 'Mandatory Selfie (Liveness Detection) + GPS Location Lock. Can\'t buddy punch or use Fake GPS.',
          icon: Scan,
        },
        {
          title: 'Auto-Billing',
          desc: 'Client invoices auto-generated immediately after attendance cut-off period. Complete attachments.',
          icon: FileText,
        },
        {
          title: 'Employee App',
          desc: 'Employees check shift schedules, pay slips, and remaining leave directly from their phones. Reduces admin inquiries.',
          icon: Smartphone,
        },
      ],
      faqs: [
        {
          question: 'Does it support complex shift patterns?',
          answer:
            'Very much. System handles 2-1, 5-2, long shift patterns, and shift exchanges between employees.',
        },
        {
          question: 'How about BPJS calculation?',
          answer:
            'Automatic. System calculates BPJS Health & Employment deductions according to latest regulations.',
        },
        {
          question: 'Can clients access reports?',
          answer:
            'Yes. Client Portal available so your clients can transparently check outsourcing team attendance.',
        },
      ],
      caseStudyTitle: 'Payroll Done in 1 Day',
      caseStudy:
        'PT Garda Utama cut payroll processing time for 2,000 security guards from 7 days to just 1 day with 0% error rate.',
      testimonial: {
        quote:
          'Our clients are very satisfied with attendance transparency. Our invoices become payment priorities because data is always valid and neat.',
        author: 'Bambang Pamungkas',
        role: 'CEO',
        avatar: 'https://ui-avatars.com/api/?name=Bambang+Pamungkas&background=3B82F6&color=fff',
      },
    },

    travel: {
      title: 'Tour & Travel',
      subtitle: 'Manage Thousands of Pilgrims & Travelers Without Excel Errors.',
      description:
        'Management system for Umrah & Tour Travel Agencies. Manage airline seats, pilgrim passport validity, automated manifests, and calculate profit per departure (Group) in real-time.',
      metaTitle: 'Tour & Travel ERP Software (Umrah & Tourism)',
      metaDesc:
        'Booking and management application for travel agents. Seat Inventory, Document Expiry, Auto-Manifest, and Profit & Loss Report per Group.',
      icon: Plane,
      metrics: [
        { value: '100%', label: 'Seat Utilization' },
        { value: '0', label: 'Document Expired' },
        { value: 'Real-time', label: 'Profit per Group' },
      ],
      challenges: [
        {
          title: 'Double Booking',
          desc: 'Airline seats or hotel rooms conflict due to manual Excel recording that is not updated.',
        },
        {
          title: 'Expired Documents',
          desc: 'Pilgrims fail to depart because admins forgot to check passport validity or visas that ran out.',
        },
        {
          title: 'Messy Finances',
          desc: 'Difficult to calculate COGS per pax (Visa components, Handling, Equipment) so profit margins are unclear.',
        },
      ],
      solutions: [
        {
          title: 'Live Seat Inventory',
          desc: 'Monitor remaining seats for each package/departure date in real-time. Prevent overselling.',
          icon: Ticket,
        },
        {
          title: 'Document Alert',
          desc: 'Automatic notifications if a pilgrim\'s passport or visa is approaching expiry date before departure.',
          icon: Clipboard,
        },
        {
          title: 'Profit per Group',
          desc: 'Profit and loss calculated automatically per departure (Revenue from Pilgrims - Vendor Cost) accurately.',
          icon: PieChart,
        },
      ],
      faqs: [
        {
          question: 'Can it print Manifests automatically?',
          answer:
            'Yes. Flight manifests and hotel rooming lists are generated automatically from pilgrim data.',
        },
        {
          question: 'Does it support installment payments?',
          answer:
            'Yes, the system records DP, installments, and full payments from pilgrims and sends due date notifications.',
        },
        {
          question: 'What about equipment inventory?',
          answer:
            'Stock of suitcases, ihram cloth, and other equipment is monitored automatically when handed over to pilgrims.',
        },
      ],
      caseStudyTitle: 'Zero Failed Departures',
      caseStudy:
        'Al-Mabrur Travel eliminates failed departure incidents due to expired documents and increased margins by 15% thanks to strict COGS control.',
      testimonial: {
        quote:
          'Managing 500 Umrah pilgrims per month used to be very stressful. Now all passport, visa, and payment data is neatly monitored on one screen.',
        author: 'Hj. Siti Aminah',
        role: 'Travel Owner',
        avatar: 'https://ui-avatars.com/api/?name=Siti+Aminah&background=D946EF&color=fff',
      },
    },
    consulting: {
      title: 'Professional Services',
      subtitle: 'Stop Revenue Leakage. Maximize Billable Hours.',
      description:
        'ERP for Consultants, Law Firms, and Agencies. Record every minute of team work, monitor project profitability in real-time, and ensure no costs go unbilled.',
      metaTitle: 'Professional Services & Consulting ERP (Project Management)',
      metaDesc:
        'Project management for consultants. Timesheet, Project Costing, and Billing Management to maximize margins.',
      icon: Briefcase,
      metrics: [
        { value: '98%', label: 'Billable Capture' },
        { value: 'Real-time', label: 'Project Margin' },
        { value: '20%', label: 'Utilization Up' },
      ],
      challenges: [
        {
          title: '\'Lost\' Work Hours',
          desc: 'Many additional work (Scope Creep) not recorded and ultimately free. Revenue leaks.',
        },
        {
          title: 'Loss-Making Projects',
          desc: 'Team salary costs exceed project contract value, but only realized after project completion.',
        },
        {
          title: 'Resource Fights',
          desc: 'Project Managers compete for expert staff (Seniors) without seeing their actual workload.',
        },
      ],
      solutions: [
        {
          title: 'Mobile Timesheet',
          desc: 'Team inputs work hours as easily as updating social media status. Automatic reminder if forget to fill timesheet.',
          icon: Clock,
        },
        {
          title: 'Live Project P&L',
          desc: 'See project profit/loss right now. Revenue (Terms) minus Cost (Salary + Expense) automatically.',
          icon: PieChart,
        },
        {
          title: 'Resource Heatmap',
          desc: 'Visualize who\'s overloaded and who\'s idle. Allocate team more wisely.',
          icon: Users,
        },
      ],
      faqs: [
        {
          question: 'Can rates differ per level?',
          answer:
            'Yes. Partner, Senior, and Junior rates can be set differently for client billing calculation.',
        },
        {
          question: 'What about Reimbursement?',
          answer:
            'Expense claims (Taxi/Hotel) can be directly tagged to specific project to be rebilled to client.',
        },
        {
          question: 'Calendar integration?',
          answer: 'Yes, tasks and deadlines can sync with Google Calendar or Outlook.',
        },
      ],
      caseStudyTitle: '25% Profit Margin Increase',
      caseStudy:
        'Law Firm SIP & Partners increased project profitability by 25% just with digital timesheet recording discipline.',
      testimonial: {
        quote:
          'We used to under-charge clients. Now every minute of our expertise is fairly valued. This system pays for itself.',
        author: 'Sarah Wijaya',
        role: 'Managing Partner',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Wijaya&background=8B5CF6&color=fff',
      },
    },
    manufacturing: {
      title: 'Manufacturing',
      subtitle: 'Factory Efficiency: From Raw Materials to Profit.',
      description:
        'Integrated Manufacturing System. Plan production (MRP), control recipes (BOM), and calculate actual COGS precisely to minimize waste.',
      metaTitle: 'Manufacturing & Factory ERP Software (MRP)',
      metaDesc:
        'Factory production application. Material Requirement Planning (MRP), Bill of Material (BOM), and Production COGS Calculation.',
      icon: Factory,
      metrics: [
        { value: '100%', label: 'COGS Accuracy' },
        { value: '-20%', label: 'Production Waste' },
        { value: 'JIT', label: 'Material Planning' },
      ],
      challenges: [
        {
          title: '\'Guesswork\' COGS',
          desc: 'Calculating Cost of Goods Sold just by guessing, so selling price is not competitive or actually loses money.',
        },
        {
          title: 'Late Raw Materials',
          desc: 'Production stops because materials run out. Purchasing late to order because no warehouse warning.',
        },
        {
          title: 'High Waste',
          desc: 'Raw material usage exceeds recipe standard (BOM) but not tracked where the waste occurs.',
        },
      ],
      solutions: [
        {
          title: 'Auto-MRP',
          desc: 'System calculates when and how much raw materials must be purchased based on production schedule.',
          icon: Cpu,
        },
        {
          title: 'Strict BOM Control',
          desc: 'Warehouse can only issue raw materials according to recipe portions (Bill of Material). Excess requests require approval.',
          icon: List,
        },
        {
          title: 'Work Order Tracking',
          desc: 'Monitor item status at each work station (Cut, Sew, Pack) in real-time via tablet.',
          icon: Clipboard,
        },
      ],
      faqs: [
        {
          question: 'Support Multi-Level BOM?',
          answer:
            'Yes, supports complex product structures (Finished Goods -> Semi Finish -> Raw Material).',
        },
        {
          question: 'How to calculate overhead costs?',
          answer:
            'Electricity, machine depreciation, and direct labor costs automatically charged to product unit cost.',
        },
        {
          question: 'Suitable for Job Order?',
          answer:
            'Very suitable for Make-to-Order (Custom) and Make-to-Stock (Mass Production) factories.',
        },
      ],
      caseStudyTitle: 'Save 500 Million/Month',
      caseStudy:
        'Export Furniture Factory \'Kayu Mas\' saves 500 million per month by reducing raw material waste and export delay penalties.',
      testimonial: {
        quote:
          'Now I can confidently negotiate prices with foreign buyers because I know my COGS precisely down to the penny.',
        author: 'Robert Tan',
        role: 'Owner / Factory Manager',
        avatar: 'https://ui-avatars.com/api/?name=Robert+Tan&background=EC4899&color=fff',
      },
    },
    enterprise: {
      title: 'Enterprise / Conglomerate',
      subtitle: 'Single Command for Entire Business Octopus.',
      description:
        'Multi-Company ERP for Holdings. Consolidate financial reports of dozens of subsidiaries in seconds, not weeks.',
      metaTitle: 'Enterprise & Holding Company ERP (Multi-Company)',
      metaDesc:
        'ERP system for corporate groups. Financial consolidation, intercompany transactions, and Shared Service.',
      icon: Building,
      metrics: [
        { value: 'H+3', label: 'Fast Closing' },
        { value: '1', label: 'Single Database' },
        { value: 'Auto', label: 'Consolidation' },
      ],
      challenges: [
        {
          title: 'Excel \'Hell\'',
          desc: 'Finance team overtime for weeks combining Excel reports from each subsidiary with different formats.',
        },
        {
          title: 'Double Input',
          desc: 'Intercompany buy-sell transactions must be re-entered on both sides. Prone to discrepancy.',
        },
        {
          title: 'Blind to Branch Data',
          desc: 'Holding directors struggle to monitor daily subsidiary performance because reports always late.',
        },
      ],
      solutions: [
        {
          title: 'Instant Consolidation',
          desc: 'Consolidated Income Statement & Balance Sheet available anytime (Real-time). Automatic cross-account elimination.',
          icon: Globe,
        },
        {
          title: 'Interco Automation',
          desc: 'PT A creates Sales Invoice to PT B, automatically PT B receives Purchase Invoice. Save 50% time.',
          icon: ArrowLeftRight,
        },
        {
          title: 'Standardized Master',
          desc: 'Force COA, Item Code, and Vendor standardization across entire group for clean data.',
          icon: Database,
        },
      ],
      faqs: [
        {
          question: 'Different currencies?',
          answer:
            'Yes. Subsidiary reports in Singapore (SGD) automatically converted to IDR at Holding level.',
        },
        {
          question: 'Data security between PTs?',
          answer:
            'PT A users can\'t peek at PT B data, unless given special access. Directors can see all.',
        },
        {
          question: 'Entity number limit?',
          answer:
            'Unlimited. Our system can handle multi-tiered holding structures (Holding -> Sub-Holding -> OpCo).',
        },
      ],
      caseStudyTitle: 'Closing H+3 (Was H+20)',
      caseStudy:
        'Nusantara Group (15 Subsidiaries) accelerated monthly closing process from 20th to 3rd of each month.',
      testimonial: {
        quote:
          'Visibility is key. Now I can wake up in the morning, open dashboard, and know exactly cash position of entire corporate group.',
        author: 'Lina Suherman',
        role: 'Group CFO',
        avatar: 'https://ui-avatars.com/api/?name=Lina+Suherman&background=6366F1&color=fff',
      },
    },
  },
  id: {
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
      apps: [
        {
          id: 'project-mgmt',
          title: 'Project Management',
          subtitle: 'Kunci budget & pantau progress fisik real-time.',
          icon: 'HardHat',
          features: ['RAB & Budgeting', 'S-Curve Monitoring', 'Opname Mobile'],
        },
        {
          id: 'procurement',
          title: 'Procurement',
          subtitle: 'Kontrol pembelian material agar tidak melebihi RAB.',
          icon: 'ShoppingCart',
          features: ['Vendor Portal', 'PR/PO Approval', 'Material Receipt'],
        },
        {
          id: 'site-ops',
          title: 'Site Operations',
          subtitle: 'Laporan harian & manajemen tenaga kerja lapangan.',
          icon: 'Clipboard',
          features: ['Daily Report', 'Manpower Tracking', 'Equipment Usage'],
        },
        {
          id: 'finance-constr',
          title: 'Finance & Accounting',
          subtitle: 'Kelola termin penagihan & retensi subkon akurat.',
          icon: 'DollarSign',
          features: ['Project Costing', 'Progress Billing', 'Retention Management'],
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
        {
          question: 'Apakah bisa diakses di HP?',
          answer:
            'Tentu. Mandor dan pelaksana lapangan bisa input laporan harian dan opname via aplikasi mobile Android/iOS.',
        },
        {
          question: 'Butuh server khusus?',
          answer:
            'Tidak perlu. BizOps berbasis Cloud, jadi Anda tidak perlu beli server mahal. Cukup koneksi internet yang stabil.',
        },
        {
          question: 'Berapa lama implementasi?',
          answer:
            'Rata-rata 2-4 minggu. Tim kami akan membantu setup master data, training user, hingga pendampingan go-live.',
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
      apps: [
        {
          id: 'pos-frontend',
          title: 'POS System',
          subtitle: 'Kasir cepat, anti-fraud, & bisa offline mode.',
          icon: 'Monitor',
          features: ['Anti-Fraud Lock', 'Shift Management', 'Offline Mode'],
        },
        {
          id: 'inv-backend',
          title: 'Inventory Backend',
          subtitle: 'Kelola stok banyak gudang & transfer barang.',
          icon: 'Package',
          features: ['Multi-Warehouse', 'Stock Transfer', 'Opname Partial'],
        },
        {
          id: 'loyalty',
          title: 'Loyalty Program',
          subtitle: 'Tingkatkan retensi pelanggan dengan poin & tier.',
          icon: 'Users',
          features: ['Point System', 'Member Tiering', 'Voucher Redeem'],
        },
        {
          id: 'promo-engine',
          title: 'Promotion Engine',
          subtitle: 'Atur diskon & promo bundle otomatis.',
          icon: 'Ticket',
          features: ['Bundle Promo', 'Flash Sale', 'Discount Rules'],
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
        {
          question: 'Bisa integrasi pembayaran?',
          answer:
            'Ya, sudah terintegrasi dengan EDC bank dan QRIS dinamis. Nominal otomatis muncul di mesin EDC.',
        },
        {
          question: 'Bagaimana jika ada retur?',
          answer:
            'Retur barang bisa diproses di kasir dengan otorisasi supervisor. Stok otomatis kembali ke gudang.',
        },
        {
          question: 'Apakah ada fitur membership?',
          answer:
            'Ada. Pel pelanggan bisa kumpulkan poin, tukar voucher, dan Anda bisa broadcast promo via WhatsApp.',
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
    },
    outsourcing: {
      title: 'Outsourcing Service',
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
      apps: [
        {
          id: 'recruit-crm',
          title: 'Recruitment CRM',
          subtitle: 'Kelola database pelamar & jadwal interview.',
          icon: 'Users',
          features: ['CV Parsing', 'Interview Schedule', 'Offer Letter'],
        },
        {
          id: 'core-hris',
          title: 'Core HRIS',
          subtitle: 'Database karyawan & manajemen kontrak kerja.',
          icon: 'Briefcase',
          features: ['Employee Database', 'Contract Alert', 'BPJS Calc'],
        },
        {
          id: 'mobile-att',
          title: 'Attendance Mobile',
          subtitle: 'Absensi selfie & GPS untuk tim lapangan.',
          icon: 'Smartphone',
          features: ['Face ID', 'Geofencing', 'Shift Roster'],
        },
        {
          id: 'billing-sys',
          title: 'Billing System',
          subtitle: 'Tagih klien otomatis sesuai absensi.',
          icon: 'FileText',
          features: ['Auto-Invoice', 'Client Rate', 'PPH 23'],
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
        {
          question: 'Bisa untuk karyawan harian?',
          answer:
            'Bisa. Sistem mendukung perhitungan gaji harian, mingguan, atau borongan sesuai kebutuhan proyek.',
        },
        {
          question: 'Apakah data aman?',
          answer:
            'Sangat aman. Data dienkripsi standar bank (AES-256) dan server kami memiliki sertifikasi ISO 27001.',
        },
        {
          question: 'Bisa cetak slip gaji?',
          answer:
            'Karyawan bisa download slip gaji digital (PDF) langsung dari aplikasi HP mereka masing-masing.',
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
    },
    travel: {
      title: 'Tour & Travel',
      subtitle: 'Atur Ribuan Jamaah & Wisatawan Tanpa Excel Error.',
      description:
        'Sistem manajemen Biro Perjalanan Umrah & Wisata. Kelola seat airlines, validitas paspor jamaah, manifest otomatis, dan hitung profit per keberangkatan (Group) secara real-time.',
      metaTitle: 'Software ERP Tour & Travel (Umrah & Wisata)',
      metaDesc:
        'Aplikasi pembukuan dan manajemen travel agent. Inventory Seat, Expiry Dokumen, Auto-Manifest, dan Laporan Laba Rugi per Group.',
      icon: 'Plane',
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
          icon: TrendingUp,
        },
      ],
      apps: [
        {
          id: 'crm-leads',
          title: 'Leads & CRM',
          subtitle: 'Pantau potensi jamaah dari tanya-tanya hingga closing. Follow-up otomatis via WhatsApp.',
          icon: Users,
          features: ['Pipeline Monitoring', 'Auto-Followup WA', 'Database Jamaah'],
        },
        {
          id: 'inventory',
          title: 'Inventory Management',
          subtitle: 'Kontrol stok seat maskapai & hotel real-time. Cegah double booking & overselling.',
          icon: 'Ticket',
          features: ['Seat & Room quota', 'Real-time Availability', 'Overselling Protection'],
        },
        {
          id: 'invoicing',
          title: 'Smart Invoicing',
          subtitle: 'Terbitkan tagihan & catat pembayaran bertahap (DP, Cicilan, Pelunasan) otomatis.',
          icon: 'FileText',
          features: ['Automated Billing', 'Cicilan Tracking', 'Payment Gateway'],
        },
        {
          id: 'documents',
          title: 'Document & Manifest',
          subtitle: 'Pantau expiry paspor & generate manifest penerbangan sekali klik.',
          icon: 'Clipboard',
          features: ['Passport Scanning', 'Visa Expiry Alert', 'Siskopatuh Sync'],
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
        {
          question: 'Bisa untuk travel wisata umum?',
          answer:
            'Bisa. Selain Umrah/Haji, sistem juga mendukung paket wisata domestik dan internasional (Open Trip).',
        },
        {
          question: 'Apakah bisa akses agen?',
          answer:
            'Ya, agen/cabang bisa memiliki login sendiri untuk mendaftarkan jamaah dan melihat komisi mereka.',
        },
        {
          question: 'Bagaimana jika ada refund?',
          answer:
            'Proses refund tiket atau pembatalan jamaah tercatat rapi dengan perhitungan potongan biaya otomatis.',
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
    },
    consulting: {
      title: 'Professional Services',
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
      apps: [
        {
          id: 'proj-portfolio',
          title: 'Project Portfolio',
          subtitle: 'Pantau kesehatan semua proyek dalam satu view.',
          icon: 'Briefcase',
          features: ['Gantt Chart', 'Project Baseline', 'Milestone Tracking'],
        },
        {
          id: 'res-planning',
          title: 'Resource Planning',
          subtitle: 'Optimalkan utilitas tim & cegah burnout.',
          icon: 'Users',
          features: ['Skill Matrix', 'Utilization Heatmap', 'Capacity Planning'],
        },
        {
          id: 'timesheet',
          title: 'Timesheet Mobile',
          subtitle: 'Catat jam kerja billing semudah update status.',
          icon: 'Clock',
          features: ['Timer Mode', 'Approval Flow', 'GPS Tagging'],
        },
        {
          id: 'client-bill',
          title: 'Client Billing',
          subtitle: 'Pastikan setiap jam kerja & expense tertagih.',
          icon: 'FileText',
          features: ['T&M Invoice', 'Fixed Price', 'Reimbursement'],
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
        {
          question: 'Support multi-mata uang?',
          answer:
            'Ya, Anda bisa tagih klien dalam USD sementara biaya operasional dalam IDR. Sistem hitung gain/loss.',
        },
        {
          question: 'Apakah ada portal klien?',
          answer:
            'Ada. Klien bisa login untuk melihat progress proyek, download invoice, dan approve dokumen.',
        },
        {
          question: 'Bagaimana approval expense?',
          answer:
            'Multi-layer approval. Staff submit -> PM review -> Finance approve -> Reimbursement cair.',
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
      apps: [
        {
          id: 'prod-plan',
          title: 'Production Planning',
          subtitle: 'Jadwalkan produksi & kebutuhan material (MRP).',
          icon: 'Factory',
          features: ['MPS & MRP', 'Capacity Planning', 'BOM Management'],
        },
        {
          id: 'shop-floor',
          title: 'Shop Floor Mobile',
          subtitle: 'Tracking progres produksi di lantai pabrik.',
          icon: 'Smartphone',
          features: ['Digital Work Order', 'OEE Monitoring', 'Downtime Log'],
        },
        {
          id: 'inv-warehouse',
          title: 'Inventory & Warehouse',
          subtitle: 'Kontrol stok bahan baku & barang jadi.',
          icon: 'Package',
          features: ['Batch/Serial No', 'Expiry Date', 'Stock Aging'],
        },
        {
          id: 'qc',
          title: 'Quality Control',
          subtitle: 'Jaga standar kualitas di setiap tahap.',
          icon: 'ShieldCheck',
          features: ['Incoming QC', 'In-Process QC', 'Final Inspection'],
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
        {
          question: 'Apakah ada manajemen maintenance?',
          answer:
            'Ya, modul Preventive Maintenance membantu menjadwalkan servis mesin agar tidak mengganggu produksi.',
        },
        {
          question: 'Metode costing apa yang dipakai?',
          answer:
            'Mendukung Standard Costing, Moving Average, dan FIFO. Bisa dipilih sesuai kebijakan akuntansi.',
        },
        {
          question: 'Bisa lacak nomor seri?',
          answer:
            'Bisa. Fitur Batch & Serial Number Tracking memastikan setiap produk bisa dilacak riwayat produksinya.',
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
    },
    enterprise: {
      title: 'Enterprise / Conglomerate',
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
      apps: [
        {
          id: 'consolidation',
          title: 'Financial Consolidation',
          subtitle: 'Laporan gabungan seluruh anak usaha instant.',
          icon: 'Globe',
          features: ['Elimination Entries', 'Multi-Currency', 'Consolidated Reports'],
        },
        {
          id: 'interco',
          title: 'Intercompany',
          subtitle: 'Otomatisasi transaksi antar perusahaan.',
          icon: 'ArrowLeftRight',
          features: ['Auto-Recharge', 'Cross-Entity Bill', 'Transfer Pricing'],
        },
        {
          id: 'treasury',
          title: 'Treasury Management',
          subtitle: 'Kelola cashflow & likuiditas grup.',
          icon: 'DollarSign',
          features: ['Cash Positioning', 'Bank Reconciliation', 'Payment Factory'],
        },
        {
          id: 'audit',
          title: 'Audit & Compliance',
          subtitle: 'Pastikan kepatuhan & jejak audit terjaga.',
          icon: 'ShieldCheck',
          features: ['Audit Trail', 'Role Access', 'Approval Matrix'],
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
        {
          question: 'Bagaimana audit sistem?',
          answer:
            'Audit Trail lengkap mencatat siapa melakukan apa dan kapan. Memudahkan proses audit eksternal.',
        },
        {
          question: 'Apakah bisa On-Premise?',
          answer:
            'Untuk Enterprise, kami menyediakan opsi Private Cloud atau On-Premise installation di server Anda.',
        },
        {
          question: 'Berapa lama setup holding?',
          answer:
            'Implementasi bisa dilakukan bertahap. Rollout per anak usaha atau Big Bang, tergantung kesiapan tim.',
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
    },
  },
};

// --- ROLES TRANSLATIONS ---
export const rolesTranslations: {
  en: Record<string, RoleData>;
  id: Record<string, RoleData>;
} = {
  en: {
    ceo: {
      title: 'CEO & Founders',
      subtitle: 'The Captain\'s View',
      icon: TrendingUp,
      metaTitle: 'CEO Dashboard & Business Intelligence',
      metaDesc:
        'Monitor business health in real-time. Cashflow, Profitability, and Sales Pipeline on one screen.',
      heroHeadline: 'Full Control at Your Fingertips. No Guessing.',
      heroSub:
        'Stop relying on late end-of-month Excel reports. Get your business pulse in real-time for faster decisions.',
      cta: { btn: 'View CEO Dashboard', head: 'Ready to Take Full Control?' },
      dashboardInsight: 'Helicopter View: Your Business Cockpit',
      dashboardFeatures: [
        'Live Cashflow Status',
        'Profit & Loss Daily Estimate',
        'Top Expense Alert',
        'Sales Trend Analysis',
      ],
      challenges: [
        {
          pain: 'Blind Decisions',
          context:
            'Making strategic decisions based only on intuition or stale data from last month.',
          gain: 'Data-Driven Confidence',
          gainDesc:
            'Access key metrics anytime from phone. Decide expansion or efficiency with valid data right now.',
        },
        {
          pain: 'Dark Operations',
          context: 'Don\'t know what\'s actually happening in field, branches, or warehouse.',
          gain: 'Total Transparency',
          gainDesc: 'Drill-down from global report to single transaction level for instant audit.',
        },
      ],
    },
    finance: {
      title: 'Finance (CFO)',
      subtitle: 'Guardian of Value',
      icon: DollarSign,
      metaTitle: 'Accounting & Finance Manager Software',
      metaDesc:
        'Journal automation, budget control, and cashflow management for modern finance teams.',
      heroHeadline: 'Not Just Bookkeeping. This is Strategy Center.',
      heroSub:
        'Transform finance team from mere \'data entry\' to strategic advisors who protect profitability.',
      cta: { btn: 'Finance Module Demo', head: 'Modernize Your Finance Department' },
      dashboardInsight: 'Financial Health Command Center',
      dashboardFeatures: [
        'Budget vs Actual Real-time',
        'Automated Bank Reconciliation',
        'Aging AP/AR Monitoring',
        'Cost Center Analysis',
      ],
      challenges: [
        {
          pain: 'Closing Hell',
          context:
            'Team overtime for days every month-end just to recap messy data from other divisions.',
          gain: 'Continuous Closing',
          gainDesc:
            'Journals form automatically when operational transactions occur. Month-end closing is just one-click validation.',
        },
        {
          pain: 'Budget Leakage',
          context:
            'Operational expenses often over-budget without early warning, eating into profits.',
          gain: 'Hard Budget Control',
          gainDesc:
            'System automatically blocks PO/PR if that budget post is exhausted. Zero leakage.',
        },
      ],
    },
    hr: {
      title: 'HR Leaders',
      subtitle: 'People Champion',
      icon: Users,
      metaTitle: 'HRD & Payroll Manager Application',
      metaDesc: 'Manage employee administration, payroll, and team performance efficiently.',
      heroHeadline: 'Administration Done Automatically. Focus on People.',
      heroSub:
        'Reduce clerical administrative burden by 70%. Redirect your time to talent development and building winning culture.',
      cta: { btn: 'HRIS Demo', head: 'Build Best Employee Experience' },
      dashboardInsight: 'Workforce Analytics & Engagement',
      dashboardFeatures: [
        'Real-time Turnover Rate',
        'Attendance Heatmap',
        'Payroll Cost Projection',
        'Employee NPS Score',
      ],
      challenges: [
        {
          pain: 'Payroll Drama',
          context:
            'High stress every salary cut-off date because attendance, overtime, and employee loan data is messy.',
          gain: '1-Click Payroll',
          gainDesc:
            'Pull attendance data, calculate PPh 21 (TER), BPJS, and generate bank transfer file in minutes.',
        },
        {
          pain: 'Compliance Risk',
          context: 'Fear of miscalculating taxes or late BPJS penalties that can harm company.',
          gain: 'Auto Compliance',
          gainDesc:
            'System always updated following latest PPh 21 tax rate and BPJS Employment regulations.',
        },
      ],
    },
    it: {
      title: 'IT Managers (CTO)',
      subtitle: 'Technology Architect',
      icon: Server,
      metaTitle: 'ERP Architecture & Security for IT Manager',
      metaDesc: 'Secure, scalable, and developer-friendly ERP platform. Self-hosted or Cloud.',
      heroHeadline: 'Modern Developer-Friendly Platform.',
      heroSub:
        'Built with modern stack (Python/JS/Postgres), API-first, and container-ready. Not a rigid legacy \'black box\' system.',
      cta: { btn: 'Read Technical Docs', head: 'Evaluate Our Architecture' },
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
            'Users use rogue applications (unknown SaaS) because office system is difficult to use.',
          gain: 'Unified Ecosystem',
          gainDesc:
            'One modern platform with consumer-app-level UX that users love, reducing third-party app needs.',
        },
        {
          pain: 'Maintenance Hell',
          context:
            'IT team spends time just manually patching servers and fixing old legacy system bugs.',
          gain: 'Low Maintenance',
          gainDesc:
            'Stable Docker architecture, CI/CD ready, and smooth OTA (Over-The-Air) updates.',
        },
      ],
    },
    ops: {
      title: 'Ops Managers',
      subtitle: 'Execution Excellence',
      icon: Package,
      metaTitle: 'Operations Management & Supply Chain Software',
      metaDesc:
        'Manage projects, inventory, and supply chain with real-time visibility. Control operational costs and ensure on-time delivery.',
      heroHeadline: 'Perfect Execution. On Time, Every Time.',
      heroSub:
        'Eliminate operational blind spots. Monitor project progress, control warehouse stock, and manage logistics from one centralized dashboard.',
      cta: { btn: 'Operations Module Demo', head: 'Boost Your Operational Efficiency' },
      dashboardInsight: 'Real-time Operations Command Center',
      dashboardFeatures: [
        'Live Project S-Curve',
        'Low Stock Alert',
        'On-Time Delivery Rate',
        'Cost Variance Analysis',
      ],
      challenges: [
        {
          pain: 'Delayed Projects',
          context:
            'Projects often late because no real-time visibility of field progress and obstacles.',
          gain: 'Real-time Visibility',
          gainDesc:
            'Monitor project S-curve and receive daily reports directly from field via mobile app. Detect problems before crisis.',
        },
        {
          pain: 'Messy Stock',
          context:
            'Often lose sales due to out-of-stock, or conversely capital dies in slow-moving items.',
          gain: 'Smart Inventory Control',
          gainDesc:
            'System automatically calculates re-order point based on historical sales trends. Prevent stockout without overstock.',
        },
      ],
    },
  },
  id: {
    ceo: {
      title: 'CEO & Founders',
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
          context:
            'Membuat keputusan strategis hanya berdasarkan intuisi atau data basi bulan lalu.',
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
    },
    finance: {
      title: 'Finance (CFO)',
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
    },
    it: {
      title: 'IT Managers (CTO)',
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
    },
    ops: {
      title: 'Ops Managers',
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
    },
  },
};
