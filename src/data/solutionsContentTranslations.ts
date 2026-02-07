import type { IndustryData, RoleData } from '../types';

import {
  ArrowLeftRight,
  Briefcase,
  Building,
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
  UserCheck,
  Users,
  Wrench,
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
        {
          title: 'Document Chaos',
          desc: 'SPK, BA, and project certificates scattered across emails, WhatsApp, and local folders. Difficult to audit and find history.',
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
        {
          title: 'Material Transfer',
          desc: 'Prevent waste by transferring usable leftover materials to other projects with proper administration.',
          icon: ArrowLeftRight,
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
        {
          title: 'Data Silos',
          desc: 'Sales data from different channels not integrated. Cannot see complete business picture for decision making.',
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
        {
          title: 'Loyalty Program',
          desc: 'Increase customer retention with member point systems and promo vouchers integrated at POS.',
          icon: Target,
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
        {
          title: 'Client Complaints',
          desc: 'Clients often complain due to lack of attendance transparency. Difficult to prove personnel were on site as contracted.',
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
        {
          title: 'Digital Contract',
          desc: 'Manage PKWT contracts for thousands of employees with automatic notifications 30 days before expiration.',
          icon: FileText,
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
        {
          title: 'Customer Service Overload',
          desc: 'Thousands of pilgrims contact CS asking about document status, payments, and schedules. CS team overwhelmed.',
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
        {
          title: 'Pilgrim App',
          desc: 'Manasik guide, activity schedule, and daily prayers in pilgrims\' hands. Enhance spiritual experience.',
          icon: Smartphone,
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
        {
          title: 'Delayed Invoicing',
          desc: 'Invoices to clients often delayed because timesheets incomplete or approval stuck. Cashflow disrupted.',
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
        {
          title: 'CRM Integration',
          desc: 'Automatic conversion from \'Won Deal\' in CRM to \'Active Project\' complete with budget and team setup.',
          icon: ArrowLeftRight,
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
        {
          title: 'Machine Breakdown',
          desc: 'Machines often break down mid-production because there is no preventive maintenance schedule. Major production loss.',
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
        {
          title: 'Machine Care',
          desc: 'Automated preventive machine maintenance schedule. Reduce unexpected downtime that disrupts production.',
          icon: Wrench,
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
        {
          title: 'Standardization Difficult',
          desc: 'Each subsidiary has different ways for item codes, accounts, and processes. Hard to consolidate and compare performance.',
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
        {
          title: 'Group Budget',
          desc: 'Control budget ceilings across subsidiaries. Prevent overspending at the group level.',
          icon: ShieldCheck,
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
        {
          title: 'Material Transfer',
          desc: 'Cegah pemborosan dengan memindahkan sisa material layak pakai ke proyek lain secara teradministrasi.',
          icon: ArrowLeftRight,
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
        {
          title: 'Loyalty Program',
          desc: 'Tingkatkan retensi pelanggan dengan sistem poin member dan voucher promo yang terintegrasi di POS.',
          icon: Target,
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
        {
          title: 'Digital Contract',
          desc: 'Kelola kontrak PKWT ribuan karyawan dengan notifikasi otomatis 30 hari sebelum masa kontrak habis.',
          icon: FileText,
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
        {
          title: 'CS Kewalahan',
          desc: 'Ribuan jamaah menghubungi CS untuk tanya status dokumen, pembayaran, dan jadwal. Tim CS kewalahan melayani manual.',
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
        {
          title: 'Jamaah App',
          desc: 'Panduan manasik, jadwal kegiatan, dan do\'a harian dalam genggaman jamaah. Tingkatkan pengalaman spiritual.',
          icon: Smartphone,
        },
      ],
      apps: [
        {
          id: 'crm-leads',
          title: 'Leads & CRM',
          subtitle:
            'Pantau potensi jamaah dari tanya-tanya hingga closing. Follow-up otomatis via WhatsApp.',
          icon: Users,
          features: ['Pipeline Monitoring', 'Auto-Followup WA', 'Database Jamaah'],
        },
        {
          id: 'inventory',
          title: 'Inventory Management',
          subtitle:
            'Kontrol stok seat maskapai & hotel real-time. Cegah double booking & overselling.',
          icon: 'Ticket',
          features: ['Seat & Room quota', 'Real-time Availability', 'Overselling Protection'],
        },
        {
          id: 'invoicing',
          title: 'Smart Invoicing',
          subtitle:
            'Terbitkan tagihan & catat pembayaran bertahap (DP, Cicilan, Pelunasan) otomatis.',
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
        {
          title: 'CRM Integration',
          desc: 'Konversi otomatis dari \'Won Deal\' di CRM menjadi \'Active Project\' lengkap dengan budget dan team.',
          icon: ArrowLeftRight,
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
        {
          title: 'Mesin Rusak',
          desc: 'Mesin sering rusak di tengah produksi karena tidak ada jadwal maintenance preventif. Kerugian produksi besar.',
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
        {
          title: 'Machine Care',
          desc: 'Jadwal maintenance mesin preventif otomatis. Kurangi downtime tak terduga yang mengganggu produksi.',
          icon: Wrench,
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
        {
          title: 'Standarisasi Sulit',
          desc: 'Tiap anak usaha punya format kode barang dan akun berbeda. Sulit konsolidasi dan bandingkan performa apple-to-apple.',
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
        {
          title: 'Group Budget',
          desc: 'Kontrol pagu anggaran (Budget Ceiling) lintas anak perusahaan. Cegah overspending di level grup.',
          icon: ShieldCheck,
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

    bfsi: {
      title: 'Perbankan & Keuangan',
      subtitle: 'Kelola Risiko, Portfolio, dan Kepatuhan dalam Satu Platform.',
      description:
        'ERP untuk BPR, leasing, multifinance, dan asuransi. Kelola loan, tracking angsuran, dan compliance OJK secara terintegrasi.',
      metaTitle: 'Software ERP BFSI: Banking, Leasing & Asuransi',
      metaDesc:
        'Sistem manajemen untuk perbankan dan keuangan. Loan management, credit scoring, multi-currency, dan regulatory compliance OJK.',
      icon: 'Landmark',
      metrics: [
        { value: '99%', label: 'Collection Rate' },
        { value: 'Auto', label: 'Laporan OJK' },
        { value: 'Real-time', label: 'Risk Monitoring' },
      ],
      challenges: [
        {
          title: 'Default Risk',
          desc: 'Sulit memantau kesehatan portfolio pembiayaan dan mendeteksi nasabah bermasalah sebelum terlambat.',
        },
        {
          title: 'Rekonsiliasi Manual',
          desc: 'Rekonsiliasi transaksi bank dan laporan keuangan memakan waktu berhari-hari setiap akhir bulan.',
        },
        {
          title: 'Laporan Regulasi',
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
    },

    realestate: {
      title: 'Real Estate & Properti',
      subtitle: 'Dari Unit Inventory hingga Serah Terima Kunci.',
      description:
        'Platform untuk developer, property management, dan real estate agency. Kelola unit, booking, cicilan pembeli, dan maintenance.',
      metaTitle: 'Software ERP Properti & Real Estate Developer',
      metaDesc:
        'Sistem manajemen developer dan property. Unit inventory, booking tracking, installment schedule, dan facility management.',
      icon: 'Building2',
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
    },

    healthcare: {
      title: 'Kesehatan & Medis',
      subtitle: 'Platform Terintegrasi untuk Klinik & Praktek Modern.',
      description:
        'EMR, appointment scheduling, dan billing untuk klinik, rumah sakit, dan laboratorium. Kelola pasien, jadwal, dan klaim asuransi.',
      metaTitle: 'Software EMR Klinik & Rumah Sakit',
      metaDesc:
        'Electronic Medical Records dan manajemen klinik. Appointment scheduling, patient billing, medicine inventory, dan BPJS integration.',
      icon: 'HeartPulse',
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
    },

    fnb: {
      title: 'Food & Beverage',
      subtitle: 'Kontrol Recipe Cost, Inventory, dan Multi-Outlet.',
      description:
        'Sistem untuk restaurant, cafe, catering, dan cloud kitchen. Recipe costing, inventory bahan mudah expire, dan operasional multi-outlet.',
      metaTitle: 'Software ERP Restaurant & F&B Management',
      metaDesc:
        'Sistem manajemen restaurant dan cafe. Recipe costing, perishable inventory, kitchen display, dan multi-outlet operations.',
      icon: 'UtensilsCrossed',
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
    },

    logistics: {
      title: 'Logistics & Transportation',
      subtitle: 'Optimalkan Rute, Armada, dan Pengiriman.',
      description:
        'Fleet management, route optimization, dan POD tracking untuk ekspedisi, courier, dan freight forwarding.',
      metaTitle: 'Software Fleet Management & Logistics ERP',
      metaDesc:
        'Sistem manajemen ekspedisi dan logistik. Route optimization, fleet management, proof of delivery, dan real-time tracking.',
      icon: 'Truck',
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
        {
          pain: 'Siloed Culture',
          context: 'Departments running their own race versus Unified Goal (OKR tracking).',
          gain: 'Unified Alignment',
          gainDesc: 'Cascade OKRs from top to bottom. ensure everyone is moving towards the same strategic objectives.',
        },
        {
          pain: 'Slow Execution',
          context: 'Great ideas take months to execute due to bureaucratic approval layers.',
          gain: 'Agile Speed',
          gainDesc: 'Flatten approval hierarchies with automated workflows. Fast-track critical decisions.',
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
          context: 'Operational expenses often over-budget without early warning, eating into profits.',
          gain: 'Hard Budget Control',
          gainDesc: 'System automatically blocks PO/PR if that budget post is exhausted. Zero leakage.',
        },
        {
          pain: 'Cash Trapped',
          context: 'High AR days and slow collections trap working capital unnecessarily.',
          gain: 'Faster Cashflow',
          gainDesc: 'Automated dunning and payment reminders reduce Days Sales Outstanding (DSO) significantly.',
        },
        {
          pain: 'Fraud Risk',
          context: 'Manual payment processing susceptible to internal fraud or phishing attacks.',
          gain: 'Secure Payment',
          gainDesc: 'Digital approval matrix and 3-way matching ensure every penny is accounted for and authorized.',
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
          gainDesc: 'System always updated following latest PPh 21 tax rate and BPJS Employment regulations.',
        },
        {
          pain: 'Recruitment Chaos',
          context: 'Lost CVs and forgotten interview schedules lead to losing top talent candidates.',
          gain: 'Talent Pipeline',
          gainDesc: 'Centralized Applicant Tracking System (ATS) keeps candidate data organized and accessible.',
        },
        {
          pain: 'Low Engagement',
          context: 'Silent employees and high turnover due to lack of feedback channels.',
          gain: 'Pulse Feedback',
          gainDesc: 'Regular pulse surveys and anonymous feedback loops to measure and improve employee sentiment.',
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
          context: 'IT team spends time just manually patching servers and fixing old legacy system bugs.',
          gain: 'Low Maintenance',
          gainDesc: 'Stable Docker architecture, CI/CD ready, and smooth OTA (Over-The-Air) updates.',
        },
        {
          pain: 'Security Gaps',
          context: 'Sensitive company data vulnerable to leaks due to loose access controls.',
          gain: 'Enterprise Security',
          gainDesc: 'Role-Based Access Control (RBAC) and detailed audit logs ensuring data sovereignty.',
        },
        {
          pain: 'Integrations',
          context: 'Point-to-point integration nightmare between disparate legacy systems.',
          gain: 'Seamless API',
          gainDesc: 'Standardized REST APIs and webhooks make connecting with 3rd party apps effortless.',
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
          context: 'Often lose sales due to out-of-stock, or conversely capital dies in slow-moving items.',
          gain: 'Smart Inventory Control',
          gainDesc: 'System automatically calculates re-order point based on historical sales trends. Prevent stockout without overstock.',
        },
        {
          pain: 'Cost Overrun',
          context: 'Projects frequently go over budget due to lack of real-time expense tracking.',
          gain: 'Real-time Costing',
          gainDesc: 'Track actual vs budget costs in real-time. Get alerts before budget is exceeded.',
        },
        {
          pain: 'Vendor Issues',
          context: 'Missed deliveries and poor quality from vendors impacting production schedule.',
          gain: 'Vendor Scorecard',
          gainDesc: 'Data-backed vendor evaluation based on delivery performance and quality metrics.',
        },
      ],
    },
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
        {
          pain: 'Slow Response',
          context: 'Inbound leads go cold because sales reps take too long to respond.',
          gain: 'Instant Engagement',
          gainDesc: 'Auto-routing leads to the right rep immediately with notification alerts.',
        },
        {
          pain: 'Manual Admin',
          context: 'Sales reps hate data entry, leading to incomplete CRM data.',
          gain: 'Auto-Logging',
          gainDesc: 'Automatically sync emails and calendar meetings to deal timeline. No more manual entry.',
        },
      ],
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
        {
          pain: 'Vendor Risk',
          context: 'Reliance on single supplier or financially unstable vendors.',
          gain: 'Risk Mitigation',
          gainDesc: 'Monitor vendor health and diversify supply chain with multi-sourcing strategies.',
        },
        {
          pain: 'Slow PO Process',
          context: 'Manual wet signatures for PO approval delay critical purchases.',
          gain: 'Digital Approval',
          gainDesc: 'Mobile-first approval workflows let managers approve POs from anywhere, anytime.',
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
          gainDesc: 'Drill-down dari laporan global hingga ke level transaksi tunggal untuk audit instan.',
        },
        {
          pain: 'Budaya Silo',
          context: 'Departemen berjalan sendiri-sendiri vs Satu Tujuan (OKR tracking).',
          gain: 'Penyelarasan Terpadu',
          gainDesc: 'Turunkan OKR dari atas ke bawah. Pastikan semua orang bergerak ke tujuan strategis yang sama.',
        },
        {
          pain: 'Eksekusi Lambat',
          context: 'Ide bagus butuh berbulan-bulan untuk dieksekusi karena birokrasi persetujuan.',
          gain: 'Kecepatan Agile',
          gainDesc: 'Ratakan hirarki persetujuan dengan alur kerja otomatis. Percepat keputusan kritis.',
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
        {
          pain: 'Kas Terjerat',
          context: 'AR days tinggi dan penagihan lambat menjebak modal kerja.',
          gain: 'Cashflow Lebih Cepat',
          gainDesc: 'Penagihan otomatis dan pengingat pembayaran mengurangi Days Sales Outstanding (DSO) secara signifikan.',
        },
        {
          pain: 'Risiko Fraud',
          context: 'Pembayaran manual rawan kecurangan internal atau serangan phishing.',
          gain: 'Pembayaran Aman',
          gainDesc: 'Matriks persetujuan digital dan pencocokan 3 arah memastikan setiap sen terverifikasi.',
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
        {
          pain: 'Kekacauan Rekrutmen',
          context: 'CV hilang dan jadwal interview terlupakan membuat kandidat terbaik lepas.',
          gain: 'Pipeline Talenta',
          gainDesc: 'Applicant Tracking System (ATS) terpusat menjaga data kandidat tetap terorganisir.',
        },
        {
          pain: 'Keterlibatan Rendah',
          context: 'Karyawan diam dan turnover tinggi karena kurangnya saluran umpan balik.',
          gain: 'Umpan Balik Rutin',
          gainDesc: 'Survei rutin dan umpan balik anonim untuk mengukur dan meningkatkan sentimen karyawan.',
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
        {
          pain: 'Celah Keamanan',
          context: 'Data sensitif perusahaan rawan bocor karena kontrol akses yang lemah.',
          gain: 'Keamanan Enterprise',
          gainDesc: 'Role-Based Access Control (RBAC) dan log audit terperinci memastikan kedaulatan data.',
        },
        {
          pain: 'Integrasi Rumit',
          context: 'Mimpi buruk integrasi point-to-point antara sistem legacy yang terpisah.',
          gain: 'API Mulus',
          gainDesc: 'REST API standar dan webhooks membuat koneksi dengan aplikasi pihak ketiga jadi mudah.',
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
        {
          pain: 'Biaya Bengkak',
          context: 'Proyek sering over budget karena kurangnya pelacakan biaya real-time.',
          gain: 'Costing Real-time',
          gainDesc: 'Lacak biaya aktual vs budget secara real-time. Dapatkan peringatan sebelum budget terlampaui.',
        },
        {
          pain: 'Masalah Vendor',
          context: 'Pengiriman terlambat dan kualitas buruk dari vendor mengganggu jadwal produksi.',
          gain: 'Skor Vendor',
          gainDesc: 'Evaluasi vendor berbasis data berdasarkan performa pengiriman dan metrik kualitas.',
        },
      ],
    },
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
        {
          pain: 'Respon Lambat',
          context: 'Leads masuk jadi dingin karena sales reps terlalu lama merespon.',
          gain: 'Engagement Instan',
          gainDesc: 'Routing otomatis leads ke rep yang tepat dengan notifikasi instan.',
        },
        {
          pain: 'Admin Manual',
          context: 'Sales reps benci input data, menyebabkan data CRM tidak lengkap.',
          gain: 'Auto-Logging',
          gainDesc: 'Sinkronisasi email dan meeting kalender ke timeline deal secara otomatis. Tidak ada lagi input manual.',
        },
      ],
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
          context: 'Harga barang yang sama berbeda-beda antar transaksi. Sulit menegosiasi best price tanpa historical data.',
          gain: 'Price Intelligence',
          gainDesc: 'Tracking harga historis per item dan vendor. Analisis trend untuk leverage negosiasi dan achieve cost savings.',
        },
        {
          pain: 'Risiko Vendor',
          context: 'Ketergantungan pada satu supplier atau vendor yang tidak stabil secara finansial.',
          gain: 'Mitigasi Risiko',
          gainDesc: 'Pantau kesehatan vendor dan diversifikasi rantai pasok dengan strategi multi-sourcing.',
        },
        {
          pain: 'Proses PO Lambat',
          context: 'Tanda tangan basah manual untuk persetujuan PO menunda pembelian kritis.',
          gain: 'Persetujuan Digital',
          gainDesc: 'Alur kerja persetujuan mobile-first membiarkan manajer menyetujui PO dari mana saja, kapan saja.',
        },
      ],
    },
  },
};
