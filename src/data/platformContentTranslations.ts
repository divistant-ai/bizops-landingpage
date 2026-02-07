export const platformModulesTranslations = {
  en: {
    hr: {
      title: 'Human Capital Management (HRIS)',
      subtitle: 'Automate HR Admin. Focus on People, Not Paper.',
      description:
        'Leave behind error-prone spreadsheets. BizOps HRIS automates the entire employee lifecycle—from recruitment to retirement—so you can focus on building a winning culture.',
      features: [
        {
          title: 'Complex Shift Management',
          desc: 'Manage thousands of shift schedules (Rostering) without conflicts. Validate attendance via Geofencing & Liveness Face Recognition to prevent fraud.',
        },
        {
          title: '1-Click Payroll & Auto Tax',
          desc: 'Calculate salary, overtime, BPJS, and PPh 21 (Latest TER) in seconds. Payslips and bank transfer files are generated automatically without manual reconciliation.',
        },
        {
          title: 'Talent Growth & LMS',
          desc: 'Fast digital onboarding. Distribute training materials (SOP/Video) directly to employee apps for competency standardization.',
        },
        {
          title: 'Performance Management (KPI)',
          desc: 'Monitor individual OKR/KPI achievements transparently. Turn subjective assessments into objective performance data.',
        },
        {
          title: 'Recruitment & Onboarding',
          desc: 'Centralized applicant pipeline (ATS). Selected candidate data converts directly into employee database without re-entry.',
        },
        {
          title: 'Culture & Engagement',
          desc: 'Detect potential turnover early through Pulse Surveys. Build appreciation culture with peer-to-peer Reward Point system.',
        },
      ],
      metrics: [
        { value: '90%', label: 'Admin Time Saved' },
        { value: '100%', label: 'PPh 21 Tax Accuracy' },
        { value: '0', label: 'Paper (Paperless)' },
      ],
      problems: [
        {
          title: 'Administrative Trap',
          desc: 'HR is trapped in clerical work (data entry, attendance recap) with no time for strategy.',
        },
        {
          title: 'Compliance Risk',
          desc: 'Errors in PPh 21 or overtime wage calculations can result in tax penalties and lawsuits.',
        },
        {
          title: 'High Turnover',
          desc: 'Employees resign due to complicated leave/reimbursement processes and lack of development programs.',
        },
        {
          title: 'Talent Gap',
          desc: 'Key positions remain vacant too long due to lack of internal talent pool and succession planning.',
        },
      ],
      mobileAdvantage: {
        title: 'Self-Service HR (ESS)',
        desc: 'Empower employees with Employee Self-Service (ESS) app. They can request leave, swap shifts, claim reimbursements, and download tax forms (SPT 1721-A1) themselves without bothering the HR team.',
      },
      connections: [
        {
          target: 'Operations',
          desc: 'Actual working hours from attendance directly become the basis for calculating Labor Cost in Project Costing module.',
        },
        {
          target: 'Finance',
          desc: 'Salary, allowance, and tax liability journals are automatically created in General Ledger when payroll is approved (Post Payroll).',
        },
        {
          target: 'Sales',
          desc: 'Sales team commission calculations automatically flow into monthly salary components based on target achievement in CRM.',
        },
      ],
      cta: {
        text: 'It\'s time for HR to shift to more impactful tasks.',
        buttonLabel: 'See HRIS Demo',
      },
      testimonial: {
        quote:
          'The payroll process that used to take 5 working days is now completed in hours. Tax accuracy is no longer an issue.',
        author: 'Budi Santoso',
        role: 'HR Director at FastMoving FMCG',
        avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Does the PPh 21 calculation comply with the latest TER regulations?',
          answer:
            'Yes, our system is always automatically updated according to government regulations (HPP Law & Latest PMK) at no additional cost. TER A/B/C calculations are done automatically.',
        },
        {
          question: 'Are employee and salary data secure?',
          answer:
            'Very secure. We use banking-standard encryption (AES-256) for sensitive data and restrict access based on roles (Role-Based Access Control).',
        },
        {
          question: 'How long does migration from Excel/legacy systems take?',
          answer:
            'On average, our clients can go-live in 1-2 weeks. We provide bulk import templates to quickly migrate employee data, shifts, and salary components.',
        },
        {
          question: 'Does it support complex shift work systems?',
          answer:
            'Absolutely. Our Time Management module supports various shift patterns (3 shifts, long shifts, rosters) and automatic overtime that integrates directly with payroll.',
        },
      ],
    },
    finance: {
      title: 'Finance & Procurement',
      subtitle: 'Complete Control Over Every Dollar.',
      description:
        'Eliminate budget leakage with multi-level approval systems. Integrate purchasing, assets, and accounting in one real-time data flow.',
      features: [
        {
          title: 'Budget Control & Procurement',
          desc: 'System automatically rejects Purchase Requests (PR) if they exceed remaining department budget. Prevent rogue spending before money leaves.',
        },
        {
          title: 'Expense Management',
          desc: 'Claim reimbursements as easy as taking a photo of receipts. OCR automatically reads amounts. Transparent approval via mobile app.',
        },
        {
          title: 'Real-Time Accounting',
          desc: 'Every operational transaction (Sales, Inventory, Expenses) automatically journals itself. Profit & Loss reports available instantly.',
        },
        {
          title: 'Asset Lifecycle',
          desc: 'Track location and person responsible for physical assets via QR Code. Asset depreciation calculated automatically every month.',
        },
        {
          title: 'Multi-Currency',
          desc: 'Global transactions with automatic exchange rates. System handles currency gains/losses without complex manual calculations.',
        },
        {
          title: 'Smart Bank Reconciliation',
          desc: 'Upload bank statements (MT940/CSV) and let the system match with recorded transactions. Save 90% of reconciliation time.',
        },
      ],
      metrics: [
        { value: '3 Days', label: 'Monthly Closing (vs 10+ Days)' },
        { value: '100%', label: 'Budget Control Accuracy' },
        { value: '0', label: 'Cash Variance (Auto-Recon)' },
      ],
      problems: [
        {
          title: 'Budget Leakage',
          desc: 'Maverick spending is hard to detect until invoices pile up.',
        },
        {
          title: 'Blind Spots',
          desc: 'CEO asks "How much cash do we have?" Finance needs 2 days to answer because data is scattered.',
        },
        {
          title: 'Manual Reconciliation',
          desc: 'Matching thousands of bank transactions with accounting journals manually is a recipe for disaster.',
        },
        {
          title: 'Late Penalties',
          desc: 'Frequent late payment penalties caused by misplaced vendor invoices or forgotten processing.',
        },
      ],
      mobileAdvantage: {
        title: 'Financial Approvals Without Barriers',
        desc: 'Finance Directors often become bottlenecks due to mobility. With BizOps, approve large POs or urgent reimbursements directly from mobile notifications during meetings.',
      },
      connections: [
        {
          target: 'Sales',
          desc: 'Invoices are automatically generated when Delivery Notes are created, accelerating AR turnover.',
        },
        {
          target: 'Supply Chain',
          desc: 'Inventory value in Balance Sheet always syncs real-time with physical stock in Warehouse.',
        },
        {
          target: 'HR & Payroll',
          desc: 'Salary and allowance journals are automatically posted to the correct expense accounts every month.',
        },
      ],
      cta: {
        text: 'Get the full financial visibility you need.',
        buttonLabel: 'Finance Module Demo',
      },
      testimonial: {
        quote:
          'Its automatic Budget Control feature saved us from overspending billions of rupiah per year. The audit trail is also very helpful during external audits.',
        author: 'Sari Wulandari',
        role: 'CFO at Retail Nasional Group',
        avatar: 'https://ui-avatars.com/api/?name=Sari+Wulandari&background=10B981&color=fff',
      },
      faqs: [
        {
          question: 'Does it support Indonesian taxation (VAT, PPh 23)?',
          answer:
            'Yes, the system supports VAT 11%, PPh 23, and Final PPh calculations. e-Faktur can be generated directly from the system for tax reporting.',
        },
        {
          question: 'What if there are subsidiary companies (Multi-Company)?',
          answer:
            'Very easy. You can manage multiple PT entities in one system. Inter-company transactions are automatically eliminated during consolidation.',
        },
        {
          question: 'Can it integrate with KlikBCA Business?',
          answer:
            'Absolutely. We provide features to upload CSV files from KlikBCA/MCM for automatic bank reconciliation, or payment gateways (Xendit/Midtrans) for receipts.',
        },
        {
          question: 'Can financial data be accessed from mobile?',
          answer:
            'Yes, Finance Directors can view real-time Cashflow Dashboard and approve large payments from the mobile app anywhere.',
        },
      ],
    },
    operations: {
      title: 'Operations & Project Management',
      subtitle: 'Deliver Projects On Time, On Budget.',
      description:
        'Full visibility from headquarters to the field. Monitor physical progress, material realization, and team working hours in one centralized dashboard.',
      features: [
        {
          title: 'Project Budgeting (RAB)',
          desc: 'Control profit margins. System provides early warnings if actual costs approach budget limits before losses occur.',
        },
        {
          title: 'Geo-Tagged Timesheet',
          desc: 'Team records working hours via mobile with GPS validation. This data becomes the basis for precise labor cost (Man-Hour Cost) calculations.',
        },
        {
          title: 'Daily Project Reports (LHP)',
          desc: 'Field executors input weather, work volume, and constraints with photo evidence. Data is automatically compiled into S-Curve project progress.',
        },
        {
          title: 'Resource Planning',
          desc: 'Allocate heavy equipment and technicians between projects with Gantt Chart visualization. Avoid schedule conflicts and optimize asset utilization.',
        },
        {
          title: 'Progress Billing & BAST Management',
          desc: 'Bill clients based on physical completion percentage (Opname) or milestones. Attach digital BAST as invoice supporting documents.',
        },
        {
          title: 'Contextual Chat',
          desc: 'Discuss technical issues directly on related Tasks. Stop miscommunication in messy WhatsApp groups.',
        },
      ],
      metrics: [
        { value: '0%', label: 'Cost Overrun (Budget Lock)' },
        { value: 'Real-time', label: 'Physical Progress Visibility' },
        { value: '100%', label: 'Progress Billing Accuracy' },
      ],
      problems: [
        {
          title: 'Project Delays',
          desc: 'Material delays and field team miscoordination make project schedules chaotic.',
        },
        {
          title: 'Cost Overrun',
          desc: 'Costs balloon unnoticed until project end. Profit margins completely eroded.',
        },
        {
          title: 'Fictitious Reports',
          desc: 'Inaccurate manual daily reports that are difficult to validate for accuracy.',
        },
        {
          title: 'Resource Conflict',
          desc: 'Conflicts over heavy equipment or technicians between projects cause downtime and schedule delays.',
        },
      ],
      mobileAdvantage: {
        title: 'Update Progress Directly from Site',
        desc: 'BizOps Mobile is designed for field conditions. Upload progress photos, update task status, and record materials directly at the location. Supports Offline Mode for remote areas (Blank Spots).',
      },
      connections: [
        {
          target: 'Procurement',
          desc: 'Field material requests directly deduct project warehouse stock or trigger PR to headquarters.',
        },
        {
          target: 'HR',
          desc: 'Validated project Timesheet data becomes the basis for calculating overtime wages & productivity KPIs.',
        },
        {
          target: 'Finance',
          desc: 'Approved physical progress (Opname) automatically triggers progress billing to clients.',
        },
      ],
      cta: {
        text: 'Improve project profitability and on-time delivery.',
        buttonLabel: 'Operations Module Demo',
      },
      testimonial: {
        quote:
          'We used to only realize losses after projects were completed. Now with BizOps, we can track profit/loss per project daily in real-time.',
        author: 'Hendra Gunawan',
        role: 'Project Manager at Konstruksi Jaya',
        avatar: 'https://ui-avatars.com/api/?name=Hendra+Gunawan&background=F59E0B&color=fff',
      },
      faqs: [
        {
          question: 'Can it be used in locations without internet signal?',
          answer:
            'Yes, our mobile app has Offline Mode. Data will be stored locally and automatically synced when signal becomes available.',
        },
        {
          question: 'Does it support S-Curve?',
          answer:
            'Absolutely. The system automatically generates S-Curves (Plan vs Actual) based on daily work weight inputs from the field.',
        },
        {
          question: 'What about leftover project materials?',
          answer:
            'The system supports Material Transfer between projects or Return to Warehouse to ensure leftover materials are recorded back as assets.',
        },
        {
          question: 'Can it integrate with design software (AutoCAD)?',
          answer:
            'You can attach working drawing files (DWG/PDF) to Project Tasks. For advanced BIM integration, we provide open APIs.',
        },
      ],
    },
    sales: {
      title: 'Sales & CRM',
      subtitle: 'Close Deals Faster, Anywhere.',
      description:
        'Empower your sales team with real-time data. Manage sales pipeline, create instant quotations, and monitor daily targets from mobile app.',
      features: [
        {
          title: 'Visual Sales Pipeline',
          desc: 'Monitor each prospect\'s movement from \'New Lead\' to \'Won\'. Drag-and-drop deals on Kanban board for instant status updates.',
        },
        {
          title: 'Mobile Quotation',
          desc: 'Create official price quotes (PDF) complete with digital signatures directly in front of clients. Send via WhatsApp without waiting for office admin.',
        },
        {
          title: 'Live Stock Check',
          desc: 'Salespeople can see real-time available stock (Available-to-Promise) in any warehouse. Never sell out-of-stock items again.',
        },
        {
          title: 'Sales Target & Commission',
          desc: 'Gamify team performance. Salespeople can view their personal target achievement and estimated commission transparently.',
        },
        {
          title: 'Visit Management (GPS)',
          desc: 'Validate daily visits with location-based Check-in (Geofencing). Ensure sales team actually visits clients.',
        },
        {
          title: 'Omnichannel Helpdesk',
          desc: 'Centralize customer complaints from WhatsApp, Email, and Social Media into one ticket system. CS can see customer purchase history when responding.',
        },
      ],
      metrics: [
        { value: '2x', label: 'Faster Deal Closing' },
        { value: '30%', label: 'Win Rate Increase' },
        { value: '100%', label: 'Team Activity Visibility' },
      ],
      problems: [
        {
          title: 'Lost Leads',
          desc: 'Potential prospects lost due to forgotten follow-ups or buried in sales personal WhatsApp chats.',
        },
        {
          title: 'Slow Response',
          desc: 'Clients wait all day just to get pricing, giving competitors a chance to step in.',
        },
        {
          title: 'Stock Blindness',
          desc: 'Sales sell items that are actually out of stock, causing complaints and order cancellations.',
        },
        {
          title: 'Missed Forecast',
          desc: 'Sales targets missed significantly due to inaccurate and overly optimistic pipeline data.',
        },
      ],
      mobileAdvantage: {
        title: 'The Salesman\'s Office is the Road',
        desc: 'Our Sales Force Automation (SFA) app works offline-first. Salespeople can still input orders and update visit status even in basement areas or remote locations.',
      },
      connections: [
        {
          target: 'Inventory',
          desc: 'System automatically performs stock reservation (Soft Booking) when Sales Order is created, securing items for clients.',
        },
        {
          target: 'Finance',
          desc: 'Approved Sales Orders automatically trigger Invoice creation and record Accounts Receivable (AR).',
        },
        {
          target: 'HR',
          desc: 'Salesperson revenue achievements are automatically calculated for incentive/commission schemes in Payroll module.',
        },
      ],
      cta: {
        text: 'Accelerate your sales revenue growth.',
        buttonLabel: 'Sales Module Demo',
      },
      testimonial: {
        quote:
          'Our revenue increased 40% because no orders are missed anymore. Salespeople are also more motivated because they can see their commission daily.',
        author: 'Denny Sumargo',
        role: 'VP of Sales at Distributor Nasional',
        avatar: 'https://ui-avatars.com/api/?name=Denny+Sumargo&background=F97316&color=fff',
      },
      faqs: [
        {
          question: 'Does it work for Van Sales (Sales Canvassing)?',
          answer:
            'Yes. This module supports stock in vehicles (Mobile Warehouse) and direct receipt printing on-site using thermal bluetooth printers.',
        },
        {
          question: 'Does it support multi-price lists?',
          answer:
            'Yes. You can set different prices for Retail, Wholesale, or Distributors. System automatically detects the correct price based on customer type.',
        },
        {
          question: 'Can we limit discounts given by sales?',
          answer:
            'Absolutely. You can set maximum discount limits per sales level. If exceeded, the system will automatically request Manager Approval.',
        },
        {
          question: 'What if a Salesperson resigns? Is the data safe?',
          answer:
            'Administrators can immediately deactivate the sales account. All prospect data and communication history are automatically transferred to Sales Manager or their replacement.',
        },
      ],
    },
    supply: {
      title: 'Supply Chain & Inventory',
      subtitle: 'Absolute Stock Accuracy. Minimize Dead Stock.',
      description:
        'Manage thousands of SKUs across multiple warehouse locations with high precision. Prevent losses due to lost, expired, or undetected stock discrepancies.',
      metaTitle: 'Multi-Warehouse Inventory & Stock Management',
      metaDesc:
        'Multi-warehouse stock management system with QR Code Stock Opname. Track item movements, batch numbers, and expiry dates accurately.',
      features: [
        {
          title: 'Multi-Warehouse',
          desc: 'Monitor stock in Central Warehouse, Branches, and consignment stock in real-time. Inter-warehouse transfers are neatly recorded with approval.',
        },
        {
          title: 'QR Stock Opname',
          desc: 'Speed up stock audit by 50%. Use phone camera to scan items. System automatically calculates discrepancies and creates adjustment journals.',
        },
        {
          title: 'Batch & Expiry Tracking',
          desc: 'Prioritize items expiring soonest (FEFO). Track movement history of each batch if product recall occurs.',
        },
        {
          title: 'Auto-Reorder Point',
          desc: 'System automatically sends notifications or creates purchase draft (PR) when stock runs low below minimum threshold.',
        },
        {
          title: 'Serial Number Tracking',
          desc: 'Mandatory for electronics. Record unique serial number for each incoming and outgoing unit for warranty and after-sales service purposes.',
        },
        {
          title: 'Landed Cost Calculation',
          desc: 'Calculate accurate COGS by allocating import/shipping costs (Freight, Customs Duty) to item cost proportionally.',
        },
      ],
      metrics: [
        { value: '99.8%', label: 'Physical vs System Stock Accuracy' },
        { value: '20%', label: 'Dead Stock Value Reduction' },
        { value: '50%', label: 'Faster Stock Opname' },
      ],
      problems: [
        {
          title: 'Stock Discrepancy',
          desc: 'System shows 10 items, warehouse only has 8. This discrepancy quietly eats into your profit margin.',
        },
        {
          title: 'Expired Goods',
          desc: 'Old products pile up in the back of the warehouse and expire because FEFO is not strictly enforced.',
        },
        {
          title: 'Wrong Shipment',
          desc: 'Pickers take the wrong items because packaging looks similar. Product returns increase and customers are disappointed.',
        },
        {
          title: 'Slow Moving',
          desc: 'Working capital tied up in undetected old stock, reducing company cashflow.',
        },
      ],
      mobileAdvantage: {
        title: 'Paperless Warehouse',
        desc: 'Warehouse staff receive Picking/Packing orders directly in the app. Scan item barcode before shipping to ensure 100% delivery accuracy.',
      },
      connections: [
        {
          target: 'Sales',
          desc: 'Provides accurate Available-to-Promise (ATP) stock data to sales team to prevent overselling.',
        },
        {
          target: 'Finance',
          desc: 'Inventory value is calculated automatically (Average/FIFO) every second, generating precise COGS reports.',
        },
        {
          target: 'Procurement',
          desc: 'Minimum stock notifications (Reorder Point) automatically trigger purchase requests to the purchasing team.',
        },
      ],
      cta: {
        text: 'Streamline your stock and warehouse management now.',
        buttonLabel: 'Inventory Module Demo',
      },
      testimonial: {
        quote:
          'We used to need 3 days of store closure for Stock Opname. Now with QR Scan, it\'s done in half a day without stopping operations.',
        author: 'Surya Kencana',
        role: 'Logistics Manager at Retail Chain',
        avatar: 'https://ui-avatars.com/api/?name=Surya+Kencana&background=10B981&color=fff',
      },
      faqs: [
        {
          question: 'Does it support Average and FIFO methods?',
          answer:
            'Yes, you can choose the inventory valuation method that fits your company\'s accounting policy (Moving Average or FIFO).',
        },
        {
          question: 'What if items have variants (Color/Size)?',
          answer:
            'The system supports Item Variants. You can create one master template (Plain T-Shirt) and automatically generate thousands of variant SKUs (Red-S, Blue-XL).',
        },
        {
          question: 'Can we print barcode labels ourselves?',
          answer:
            'Yes. The system has a Barcode Label Printing feature that can be customized in size and information for placement on shelves or products.',
        },
        {
          question: 'Do we need expensive specialized scanners?',
          answer:
            'Not mandatory. Our mobile app can use a regular phone camera to scan barcodes. However, we also support industrial PDA Scanners (Zebra/Honeywell) for high throughput.',
        },
      ],
    },
    governance: {
      title: 'Governance & Insight',
      subtitle: 'Full Control, Without Compromise.',
      description:
        'Solution for leaders who need a helicopter view and assurance that all operations run within compliance corridors.',
      metaTitle: 'BI Dashboard, Audit Trail & GCG Compliance',
      metaDesc:
        'Strategic management dashboard with complete Audit Trail. Role-Based Access Control (RBAC) security features for corporate GCG compliance.',
      features: [
        {
          title: 'Executive BI Dashboard',
          desc: 'Monitor daily P&L, Sales Trends, and Cashflow on one interactive screen. Drill-down from corporate level to transaction details.',
        },
        {
          title: 'Immutable Audit Trail',
          desc: 'Digital footprint (User, Timestamp, Old/New Value) for every data change. Logs locked as read-only for forensic audits.',
        },
        {
          title: 'Role-Based Access Control',
          desc: 'Granular access rights settings down to field level. Apply "Least Privilege" principle to protect sensitive data.',
        },
        {
          title: 'Dynamic Approval Matrix',
          desc: 'Design flexible multi-level approval workflows. Apply conditional rules (e.g., PO > 50 Million requires Director approval).',
        },
        {
          title: 'Data Versioning Control',
          desc: 'Every document change creates a new version. You can view change history and rollback data to previous versions.',
        },
        {
          title: 'Compliance Reporting',
          desc: 'Ready-made report templates for external audit, tax, and ISO standards needs. Save up to 90% audit preparation time.',
        },
      ],
      metrics: [
        { value: '100%', label: 'Transaction Audit Trail' },
        { value: '0', label: 'Data Breach Incidents' },
        { value: 'ISO', label: '27001 Compliant Ready' },
      ],
      problems: [
        {
          title: 'Fraud & Misconduct',
          desc: 'Employees modify transaction data retrospectively or manipulate stock undetected because old systems lack logs.',
        },
        {
          title: 'Data Leakage',
          desc: 'Junior staff can view director salary data or customer databases because access rights settings are too loose.',
        },
        {
          title: 'Slow Decision-Making',
          desc: 'Directors must wait for manual end-of-month reports to know company status. Too late to maneuver.',
        },
        {
          title: 'Siloed Data',
          desc: 'Slow decision-making because data across divisions is disconnected and requires manual consolidation.',
        },
      ],
      mobileAdvantage: {
        title: 'Data Sovereignty & Analysis',
        desc: 'Unlike typical SaaS, Self-Hosted BizOps provides direct access to raw Database. Your Data Analyst team can connect Tableau/PowerBI directly.',
      },
      connections: [
        {
          target: 'All Modules',
          desc: 'Governance is the "Estuary" of all data flows from HR, Finance, Sales, and Ops for analysis.',
        },
        {
          target: 'HR',
          desc: 'Organizational structure in HR automatically determines document approval hierarchy (Approval Workflow).',
        },
        {
          target: 'IT Security',
          desc: 'Integration with company LDAP/Active Directory for secure Single Sign-On (SSO).',
        },
      ],
      cta: {
        text: 'Take full control of your business risks and direction.',
        buttonLabel: 'View Dashboard Demo',
      },
      testimonial: {
        quote:
          'The Audit Trail feature was a lifesaver during tax audit. We could prove the validity of every transaction down to the user who input it.',
        author: 'Robert Tjahjadi',
        role: 'CIO at Manufaktur Otomotif',
        avatar: 'https://ui-avatars.com/api/?name=Robert+Tjahjadi&background=6366F1&color=fff',
      },
      faqs: [
        {
          question: 'Is our data secure (Encrypted)?',
          answer:
            'Very secure. Database is encrypted at-rest, and all communication uses SSL/TLS (HTTPS). We also support specific column encryption (like Salary).',
        },
        {
          question: 'Can it be hosted on our own servers (On-Premise)?',
          answer:
            'Yes. We support On-Premise or Private Cloud deployment if your company policy mandates data must not leave premises.',
        },
        {
          question: 'What if a user deletes data?',
          answer:
            'Data in BizOps is never truly deleted (Soft Delete). Administrators can recover deleted data from Trash Bin anytime.',
        },
        {
          question: 'Can users access the system from outside the office?',
          answer:
            'Configurable. You can apply IP Restriction policy so the system can only be accessed from office network, or allow public access with mandatory 2FA (OTP).',
        },
      ],
    },
    care: {
      title: 'Care (Customer Support)',
      subtitle: 'Responsive Customer Service.',
      description:
        'Helpdesk system and customer portal to maintain post-transaction customer satisfaction. Handle complaints fast and build loyalty.',
      features: [
        {
          title: 'Ticket Management',
          desc: 'Automatic ticket routing to related departments, SLA tracking, and escalation matrix. Customers don\'t wait long.',
        },
        {
          title: 'Knowledge Base',
          desc: 'Create help articles (FAQ, SOP) accessible 24/7 for self-service. Reduce repetitive tickets.',
        },
        {
          title: 'Customer Portal',
          desc: 'Self-service portal for customers to check order status, submit tickets, and download invoices without contacting CS.',
        },
        {
          title: 'Feedback & NPS',
          desc: 'Send automatic surveys after transaction. Calculate NPS score and analyze feedback sentiment.',
        },
      ],
      metrics: [
        { value: '<2h', label: 'First Response Time' },
        { value: '95%', label: 'CSAT Score' },
        { value: '-60%', label: 'Support Tickets' },
      ],
      problems: [
        {
          title: 'Slow Response',
          desc: 'Customer complaints via WhatsApp are untracked, missed, and lack history.',
        },
        {
          title: 'Repetitive Questions',
          desc: '80% of support questions are the same (how to use, order status) but no self-service system.',
        },
        {
          title: 'No Feedback Loop',
          desc: 'Never survey customer satisfaction, don\'t know NPS score, unable to improve service.',
        },
        {
          title: 'Manual Ticketing',
          desc: 'Support team manually inputs tickets from WhatsApp to Excel. High risk of lost data and double handling.',
        },
      ],
      cta: {
        text: 'Build customer service that makes them return.',
        buttonLabel: 'View Care Demo',
      },
      faqs: [
        {
          question: 'Can it integrate with WhatsApp Business?',
          answer:
            'Yes. Tickets can come from WhatsApp, email, or web forms. All centralized in one dashboard.',
        },
        {
          question: 'What about SLA monitoring?',
          answer:
            'Each ticket has SLA based on priority (High/Medium/Low). System warns if about to breach and auto-escalates to supervisor.',
        },
      ],
    },
  },
  id: {
    hr: {
      title: 'Human Capital Management (HRIS)',
      subtitle: 'Otomatisasi Admin HR. Fokus pada Manusia, Bukan Kertas.',
      description:
        'Tinggalkan spreadsheet yang rentan error. BizOps HRIS mengotomatiskan seluruh siklus karyawan—dari rekrutmen hingga pensiun—agar Anda bisa fokus membangun budaya juara.',
      features: [
        {
          title: 'Manajemen Shift Kompleks',
          desc: 'Kelola ribuan jadwal shift (Rostering) tanpa konflik. Validasi kehadiran via Geofencing & Liveness Face Recognition untuk cegah titip absen.',
        },
        {
          title: 'Payroll 1-Klik & Pajak Auto',
          desc: 'Hitung gaji, lembur, BPJS, dan PPh 21 (TER Terbaru) dalam hitungan detik. Slip gaji dan file transfer bank digenerate otomatis tanpa rekonsiliasi manual.',
        },
        {
          title: 'Pengembangan Talenta & LMS',
          desc: 'Onboarding digital cepat. Distribusi materi training (SOP/Video) langsung ke aplikasi karyawan untuk standarisasi kompetensi.',
        },
        {
          title: 'Manajemen Performa (KPI)',
          desc: 'Pantau pencapaian OKR/KPI individu secara transparan. Ubah penilaian subjektif menjadi data kinerja objektif.',
        },
        {
          title: 'Rekrutmen & Onboarding',
          desc: 'Pipeline pelamar terpusat (ATS). Data kandidat terpilih langsung konversi jadi database karyawan tanpa input ulang.',
        },
        {
          title: 'Kultur & Engagement',
          desc: 'Deteksi potensi turnover sejak dini lewat Pulse Survey. Bangun budaya apresiasi dengan sistem Reward Point peer-to-peer.',
        },
      ],
      metrics: [
        { value: '90%', label: 'Hemat Waktu Admin' },
        { value: '100%', label: 'Akurasi PPh 21' },
        { value: '0', label: 'Kertas (Paperless)' },
      ],
      problems: [
        {
          title: 'Jebakan Administratif',
          desc: 'HR terjebak pekerjaan klerikal (input data, rekap absen) tanpa waktu untuk strategi.',
        },
        {
          title: 'Risiko Kepatuhan',
          desc: 'Salah hitung PPh 21 atau upah lembur bisa berujung denda pajak dan tuntutan hukum.',
        },
        {
          title: 'Turnover Tinggi',
          desc: 'Karyawan resign karena proses cuti/reimburse yang ribet dan kurangnya program pengembangan.',
        },
        {
          title: 'Krisis Talenta',
          desc: 'Posisi kunci kosong terlalu lama karena tidak ada talent pool internal dan perencanaan suksesi.',
        },
      ],
      mobileAdvantage: {
        title: 'Self-Service HR (ESS)',
        desc: 'Berdayakan karyawan dengan aplikasi Employee Self-Service (ESS). Mereka bisa request cuti, tukar shift, klaim reimburse, dan download formulir pajak (SPT 1721-A1) sendiri tanpa merepotkan tim HR.',
      },
      connections: [
        {
          target: 'Operations',
          desc: 'Jam kerja aktual dari absen langsung jadi dasar perhitungan Biaya Tenaga Kerja di modul Project Costing.',
        },
        {
          target: 'Finance',
          desc: 'Jurnal gaji, tunjangan, dan hutang pajak otomatis terbentuk di GL saat payroll disetujui (Post Payroll).',
        },
        {
          target: 'Sales',
          desc: 'Perhitungan komisi tim sales otomatis masuk ke komponen gaji bulanan berdasarkan capaian target di CRM.',
        },
      ],
      cta: {
        text: 'Saatnya HR beralih ke tugas yang lebih berdampak.',
        buttonLabel: 'Lihat Demo HRIS',
      },
      testimonial: {
        quote:
          'Proses payroll yang dulu butuh 5 hari kerja sekarang selesai dalam hitungan jam. Akurasi pajak juga tidak lagi jadi masalah.',
        author: 'Budi Santoso',
        role: 'HR Director at FastMoving FMCG',
        avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Apakah hitungan PPh 21 sesuai regulasi TER terbaru?',
          answer:
            'Ya, sistem kami selalu update otomatis sesuai peraturan pemerintah (UU HPP & PMK Terbaru) tanpa biaya tambahan. Perhitungan TER A/B/C dilakukan otomatis.',
        },
        {
          question: 'Apakah data karyawan dan gaji aman?',
          answer:
            'Sangat aman. Kami menggunakan enkripsi standar perbankan (AES-256) untuk data sensitif dan membatasi akses berdasarkan peran (Role-Based Access Control).',
        },
        {
          question: 'Berapa lama migrasi dari Excel/sistem lama?',
          answer:
            'Rata-rata klien kami bisa go-live dalam 1-2 minggu. Kami sediakan template import massal untuk migrasi data karyawan, shift, dan komponen gaji dengan cepat.',
        },
        {
          question: 'Apakah support sistem kerja shift yang rumit?',
          answer:
            'Sangat bisa. Modul Time Management kami mendukung berbagai pola shift (3 shift, long shift, roster) dan lembur otomatis yang terintegrasi langsung ke payroll.',
        },
      ],
    },
    finance: {
      title: 'Finance & Procurement',
      subtitle: 'Kendali Penuh Atas Setiap Rupiah.',
      description:
        'Hilangkan kebocoran anggaran (Budget Leakage) dengan sistem persetujuan bertingkat. Integrasikan pembelian, aset, dan akuntansi dalam satu aliran data real-time.',
      features: [
        {
          title: 'Kontrol Anggaran & Pengadaan',
          desc: 'Sistem otomatis tolak Purchase Request (PR) jika melebihi sisa budget departemen. Cegah pemborosan sebelum uang keluar.',
        },
        {
          title: 'Manajemen Klaim & Expense',
          desc: 'Klaim reimbursement semudah foto struk. OCR otomatis baca nominal. Approval transparan via aplikasi mobile.',
        },
        {
          title: 'Akuntansi Real-Time',
          desc: 'Setiap transaksi operasional (Jual, Stok, Biaya) otomatis menjurnal dirinya sendiri. Laporan Laba Rugi tersedia detik itu juga.',
        },
        {
          title: 'Manajemen Aset (Asset Lifecycle)',
          desc: 'Lacak lokasi dan penanggung jawab aset fisik via QR Code. Penyusutan aset dihitung otomatis setiap bulan.',
        },
        {
          title: 'Multi-Mata Uang (Multi-Currency)',
          desc: 'Transaksi global dengan kurs otomatis. Sistem menangani laba/rugi selisih kurs tanpa hitungan manual rumit.',
        },
        {
          title: 'Rekonsiliasi Bank Pintar',
          desc: 'Upload mutasi bank (MT940/CSV) dan biarkan sistem mencocokkan dengan transaksi tercatat. Hemat 90% waktu rekonsiliasi.',
        },
      ],
      metrics: [
        { value: '3 Hari', label: 'Closing Bulanan (vs 10+ Hari)' },
        { value: '100%', label: 'Akurasi Kontrol Budget' },
        { value: '0', label: 'Selisih Kas (Auto-Recon)' },
      ],
      problems: [
        {
          title: 'Kebocoran Anggaran',
          desc: 'Pengeluaran liar sulit dideteksi sampai tagihan menumpuk.',
        },
        {
          title: 'Buta Finansial',
          desc: 'CEO tanya "Berapa cash kita?", Finance butuh 2 hari untuk jawab karena data tersebar.',
        },
        {
          title: 'Rekonsiliasi Manual',
          desc: 'Mencocokkan ribuan transaksi bank dengan jurnal akuntansi secara manual adalah resep bencana.',
        },
        {
          title: 'Denda Keterlambatan',
          desc: 'Sering kena denda telat bayar karena invoice vendor terselip atau lupa diproses.',
        },
      ],
      mobileAdvantage: {
        title: 'Approval Keuangan Tanpa Hambatan',
        desc: 'Direktur Keuangan sering jadi bottleneck karena mobilitas. Dengan BizOps, setujui PO besar atau reimbursement urgent langsung dari notifikasi HP di sela meeting.',
      },
      connections: [
        {
          target: 'Sales',
          desc: 'Invoice otomatis terbentuk saat Surat Jalan (Delivery Note) dibuat, mempercepat perputaran AR.',
        },
        {
          target: 'Supply Chain',
          desc: 'Nilai persediaan di Neraca selalu sinkron real-time dengan stok fisik di Gudang.',
        },
        {
          target: 'HR & Payroll',
          desc: 'Jurnal gaji dan tunjangan otomatis terposting ke akun biaya yang tepat setiap bulan.',
        },
      ],
      cta: {
        text: 'Dapatkan visibilitas keuangan penuh yang Anda butuhkan.',
        buttonLabel: 'Demo Modul Finance',
      },
      testimonial: {
        quote:
          'Fitur Budget Control otomatisnya menyelamatkan kami dari overspending miliaran rupiah per tahun. Audit trail-nya juga sangat membantu saat audit eksternal.',
        author: 'Sari Wulandari',
        role: 'CFO at Retail Nasional Group',
        avatar: 'https://ui-avatars.com/api/?name=Sari+Wulandari&background=10B981&color=fff',
      },
      faqs: [
        {
          question: 'Apakah support perpajakan Indonesia (PPN, PPh 23)?',
          answer:
            'Ya, sistem mendukung perhitungan PPN 11%, PPh 23, dan PPh Final. e-Faktur bisa digenerate langsung dari sistem untuk pelaporan pajak.',
        },
        {
          question: 'Bagaimana jika ada anak perusahaan (Multi-Company)?',
          answer:
            'Sangat mudah. Anda bisa kelola banyak PT dalam satu sistem. Transaksi antar-perusahaan (inter-company) otomatis dieliminasi saat konsolidasi.',
        },
        {
          question: 'Bisa integrasi dengan KlikBCA Bisnis?',
          answer:
            'Bisa. Kami sediakan fitur upload file CSV dari KlikBCA/MCM untuk auto-reconcile bank, atau payment gateway (Xendit/Midtrans) untuk penerimaan.',
        },
        {
          question: 'Apakah data keuangan bisa diakses dari HP?',
          answer:
            'Ya, Direktur Keuangan bisa melihat Dashboard Cashflow real-time dan menyetujui pembayaran besar dari aplikasi mobile di mana saja.',
        },
      ],
    },
    operations: {
      title: 'Operations & Project Management',
      subtitle: 'Eksekusi Proyek Tepat Waktu dan Sesuai Budget.',
      description:
        'Stop kelola proyek via grup WhatsApp. Lacak biaya, material, dan progress tim secara real-time dengan sistem terintegrasi.',
      features: [
        {
          title: 'Budgeting Proyek (RAB)',
          desc: 'Jaga margin profit. Sistem memberi peringatan dini jika biaya aktual mendekati batas budget sebelum kerugian terjadi.',
        },
        {
          title: 'Geo-Tagged Timesheet',
          desc: 'Tim mencatat jam kerja via HP dengan validasi GPS. Data ini menjadi dasar perhitungan biaya tenaga kerja (Man-Hour Cost) yang presisi.',
        },
        {
          title: 'Laporan Harian Proyek (LHP)',
          desc: 'Pelaksana lapangan input cuaca, volume kerja, dan kendala dengan bukti foto. Data otomatis terkompilasi menjadi kurva S progress proyek.',
        },
        {
          title: 'Perencanaan Sumber Daya',
          desc: 'Alokasikan alat berat dan teknisi antar proyek dengan visualisasi Gantt Chart. Hindari konflik jadwal dan optimalkan penggunaan aset.',
        },
        {
          title: 'Progress Billing & BAST',
          desc: 'Tagih klien berdasarkan persentase penyelesaian fisik (Opname) atau termin. Lampirkan BAST digital sebagai pendukung invoice.',
        },
        {
          title: 'Contextual Chat',
          desc: 'Diskusikan masalah teknis langsung pada Task terkait. Hentikan miskomunikasi di grup WhatsApp yang berantakan.',
        },
      ],
      metrics: [
        { value: '0%', label: 'Cost Overrun (Budget Lock)' },
        { value: 'Real-time', label: 'Visibilitas Progress Fisik' },
        { value: '100%', label: 'Akurasi Penagihan Termin' },
      ],
      problems: [
        {
          title: 'Proyek Molor',
          desc: 'Keterlambatan material dan miskoordinasi tim lapangan membuat jadwal proyek berantakan.',
        },
        {
          title: 'Biaya Membengkak',
          desc: 'Cost overrun tidak ketahuan sampai proyek selesai. Margin profit tergerus habis.',
        },
        {
          title: 'Laporan Fiktif',
          desc: 'Laporan harian manual yang tidak akurat dan sulit divalidasi kebenarannya.',
        },
        {
          title: 'Rebutan Alat',
          desc: 'Konflik penggunaan alat berat atau teknisi antar proyek menyebabkan downtime dan keterlambatan jadwal.',
        },
      ],
      mobileAdvantage: {
        title: 'Update Progress Langsung dari Site',
        desc: 'BizOps Mobile didesain untuk kondisi lapangan. Upload foto progress, update status tugas, dan catat material langsung di lokasi. Support Offline Mode untuk area terpencil (Blank Spot).',
      },
      connections: [
        {
          target: 'Procurement',
          desc: 'Permintaan material lapangan langsung memotong stok gudang proyek atau memicu PR ke kantor pusat.',
        },
        {
          target: 'HR',
          desc: 'Data Timesheet proyek yang tervalidasi menjadi dasar perhitungan upah lembur & KPI produktivitas.',
        },
        {
          target: 'Finance',
          desc: 'Progress fisik yang disetujui (Opname) otomatis memicu penagihan termin (Progress Billing) ke klien.',
        },
      ],
      cta: {
        text: 'Tingkatkan profitabilitas dan ketepatan waktu proyek Anda.',
        buttonLabel: 'Demo Modul Operations',
      },
      testimonial: {
        quote:
          'Dulu kami baru sadar rugi setelah proyek selesai. Sekarang dengan BizOps, kami bisa pantau untung/rugi per proyek setiap hari secara real-time.',
        author: 'Hendra Gunawan',
        role: 'Project Manager at Konstruksi Jaya',
        avatar: 'https://ui-avatars.com/api/?name=Hendra+Gunawan&background=F59E0B&color=fff',
      },
      faqs: [
        {
          question: 'Bisa dipakai di lokasi tanpa sinyal?',
          answer:
            'Bisa, aplikasi mobile kami punya Offline Mode. Data akan disimpan lokal dan otomatis sync saat sinyal tersedia.',
        },
        {
          question: 'Apakah support Kurva S?',
          answer:
            'Sangat support. Sistem otomatis generate Kurva S (Plan vs Actual) berdasarkan input bobot pekerjaan harian dari lapangan.',
        },
        {
          question: 'Bagaimana sisa material proyek?',
          answer:
            'Sistem mendukung Transfer Material antar proyek atau Retur ke Gudang untuk memastikan sisa material tercatat kembali sebagai aset.',
        },
        {
          question: 'Bisa integrasi dengan software desain (AutoCAD)?',
          answer:
            'Anda bisa melampirkan file gambar kerja (DWG/PDF) pada Task Proyek. Untuk integrasi BIM tingkat lanjut, kami sediakan open API.',
        },
      ],
    },
    sales: {
      title: 'Sales & CRM',
      subtitle: 'Revenue yang Predictable, Bukan Sekadar Harapan.',
      description:
        'Ubah sales pipeline jadi forecast akurat. Automate follow-up dan pastikan tidak ada peluang yang terlewat.',
      features: [
        {
          title: 'Visual Sales Pipeline',
          desc: 'Pantau pergerakan setiap prospek dari \'New Lead\' hingga \'Won\'. Drag-and-drop deal di papan Kanban untuk update status instan.',
        },
        {
          title: 'Mobile Quotation',
          desc: 'Buat penawaran harga resmi (PDF) lengkap dengan tanda tangan digital langsung di depan klien. Kirim via WhatsApp tanpa menunggu admin kantor.',
        },
        {
          title: 'Cek Stok Live (ATP)',
          desc: 'Salesman bisa lihat stok tersedia (Available-to-Promise) real-time di gudang mana saja. Jangan pernah jualan barang kosong lagi.',
        },
        {
          title: 'Target Sales & Komisi',
          desc: 'Gamifikasi kinerja tim. Salesman bisa lihat pencapaian target pribadi dan estimasi komisi mereka secara transparan.',
        },
        {
          title: 'Manajemen Kunjungan (GPS)',
          desc: 'Validasi kunjungan harian dengan Check-in berbasis lokasi (Geofencing). Pastikan tim sales benar-benar mengunjungi klien.',
        },
        {
          title: 'Omnichannel Helpdesk',
          desc: 'Sentralisasi komplain pelanggan dari WhatsApp, Email, dan Sosmed ke satu sistem tiket. CS bisa lihat riwayat belanja pelanggan saat merespon.',
        },
      ],
      metrics: [
        { value: '2x', label: 'Closing Deal Lebih Cepat' },
        { value: '30%', label: 'Kenaikan Win Rate' },
        { value: '100%', label: 'Visibilitas Aktivitas Tim' },
      ],
      problems: [
        {
          title: 'Lead Hilang',
          desc: 'Potensi prospek hilang karena lupa follow-up atau tertimbun di chat WhatsApp pribadi sales.',
        },
        {
          title: 'Respon Lambat',
          desc: 'Klien menunggu seharian hanya untuk dapat harga, memberi kesempatan kompetitor masuk.',
        },
        {
          title: 'Buta Stok',
          desc: 'Sales menjual barang yang sebenarnya kosong, menyebabkan komplain dan pembatalan order.',
        },
        {
          title: 'Forecast Meleset',
          desc: 'Target penjualan meleset jauh karena data pipeline tidak akurat dan terlalu optimis.',
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
          desc: 'Sales Order yang disetujui otomatis memicu pembuatan Invoice dan mencatat Piutang (AR).',
        },
        {
          target: 'HR',
          desc: 'Pencapaian revenue salesman otomatis dihitung untuk skema insentif/komisi di modul Payroll.',
        },
      ],
      cta: {
        text: 'Akselerasi pertumbuhan revenue penjualan Anda.',
        buttonLabel: 'Demo Modul Sales',
      },
      testimonial: {
        quote:
          'Omzet kami naik 40% karena tidak ada order yang terlewat lagi. Salesman juga lebih semangat karena bisa lihat komisi mereka setiap hari.',
        author: 'Denny Sumargo',
        role: 'VP of Sales at Distributor Nasional',
        avatar: 'https://ui-avatars.com/api/?name=Denny+Sumargo&background=F97316&color=fff',
      },
      faqs: [
        {
          question: 'Apakah bisa untuk Sales Kanvas (Van Sales)?',
          answer:
            'Bisa. Modul ini mendukung stok di kendaraan (Mobile Warehouse) dan cetak struk langsung di tempat menggunakan printer bluetooth thermal.',
        },
        {
          question: 'Apakah support multi-price list?',
          answer:
            'Ya. Anda bisa atur harga beda untuk Ritel, Grosir, atau Distributor. Sistem otomatis mendeteksi harga yang tepat berdasarkan tipe pelanggan.',
        },
        {
          question: 'Bisa batasi diskon yang diberikan sales?',
          answer:
            'Sangat bisa. Anda bisa set batas diskon maksimal per level sales. Jika melebihi, sistem akan otomatis minta Approval Manajer.',
        },
        {
          question: 'Bagaimana jika Salesman resign? Datanya aman?',
          answer:
            'Admin bisa langsung non-aktifkan akun sales tersebut. Seluruh data prospek dan histori komunikasi otomatis dialihkan ke Sales Manager atau penggantinya.',
        },
      ],
    },
    care: {
      title: 'Care (Customer Support)',
      subtitle: 'Layanan Pelanggan yang Responsif.',
      description:
        'Sistem helpdesk dan customer portal untuk menjaga kepuasan pelanggan pasca-transaksi. Handle komplain cepat dan bangun loyalitas.',
      features: [
        {
          title: 'Ticket Management',
          desc: 'Routing tiket otomatis ke departemen terkait, SLA tracking, dan escalation matrix. Pelanggan tidak perlu menunggu lama.',
        },
        {
          title: 'Knowledge Base',
          desc: 'Buat artikel bantuan (FAQ, SOP) yang bisa diakses pelanggan 24/7 untuk self-service. Kurangi ticket repetitif.',
        },
        {
          title: 'Customer Portal',
          desc: 'Portal mandiri bagi pelanggan untuk cek status order, submit ticket, dan download invoice tanpa kontak CS.',
        },
        {
          title: 'Feedback & NPS',
          desc: 'Kirim survey otomatis setelah transaksi selesai. Hitung NPS score dan analisis sentimen feedback.',
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
        },
        {
          title: 'Pertanyaan Berulang',
          desc: '80% pertanyaan support adalah hal yang sama (cara pakai, status order) tapi tidak ada sistem self-service.',
        },
        {
          title: 'Tidak Ada Feedback Loop',
          desc: 'Tidak pernah survey kepuasan pelanggan, tidak tahu NPS score, dan tidak bisa improve service.',
        },
        {
          title: 'Tiket Manual',
          desc: 'Tim support input tiket manual dari WhatsApp ke Excel. Risiko data hilang tinggi dan kerja dua kali.',
        },
      ],
      cta: {
        text: 'Bangun layanan pelanggan yang membuat mereka kembali.',
        buttonLabel: 'Lihat Demo Care',
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
    supply: {
      title: 'Supply Chain & Inventory',
      subtitle: 'Akurasi Stok Mutlak. Minimalkan Dead Stock.',
      description:
        'Kelola ribuan SKU di berbagai lokasi gudang dengan presisi tinggi. Cegah kerugian akibat barang hilang, kadaluarsa, atau selisih stok yang tak terdeteksi.',
      metaTitle: 'Multi-Warehouse Inventory & Stock Management',
      metaDesc:
        'Sistem manajemen stok multi-gudang dengan Stock Opname QR Code. Lacak pergerakan barang, batch number, dan expiry date secara akurat.',
      features: [
        {
          title: 'Multi-Warehouse',
          desc: 'Pantau stok di Gudang Pusat, Cabang, hingga stok konsinyasi secara real-time. Transfer antar gudang tercatat rapi dengan approval.',
        },
        {
          title: 'QR Stock Opname',
          desc: 'Percepat audit stok hingga 50%. Gunakan kamera HP untuk scan barang. Sistem otomatis menghitung selisih dan jurnal penyesuaian.',
        },
        {
          title: 'Batch & Expiry Tracking',
          desc: 'Prioritaskan barang yang akan expired duluan (FEFO). Lacak riwayat pergerakan setiap batch jika terjadi recall produk.',
        },
        {
          title: 'Auto-Reorder Point',
          desc: 'Sistem memberi notifikasi otomatis atau membuat draft pembelian (PR) saat stok menipis di bawah batas minimum.',
        },
        {
          title: 'Serial Number Tracking',
          desc: 'Wajib untuk elektronik. Catat nomor seri unik setiap unit barang masuk dan keluar untuk keperluan garansi dan layanan purna jual.',
        },
        {
          title: 'Landed Cost Calculation',
          desc: 'Hitung HPP akurat dengan membebankan biaya impor/pengiriman (Freight, Bea Masuk) ke harga modal barang secara proporsional.',
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
        },
        {
          title: 'Barang Expired',
          desc: 'Produk lama tertimbun di belakang gudang dan kadaluarsa karena tidak menerapkan FEFO dengan ketat.',
        },
        {
          title: 'Salah Kirim',
          desc: 'Picker mengambil barang yang salah karena kemasan mirip. Retur barang meningkat dan pelanggan kecewa.',
        },
        {
          title: 'Stok Mati',
          desc: 'Modal kerja tertahan di stok lama yang tidak terdeteksi, mengganggu arus kas perusahaan.',
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
    governance: {
      title: 'Governance & Insight',
      subtitle: 'Kontrol Penuh, Tanpa Kompromi.',
      description:
        'Solusi bagi pemimpin yang membutuhkan pandangan helikopter (Helicopter View) dan kepastian bahwa seluruh operasional berjalan sesuai koridor kepatuhan (Compliance).',
      metaTitle: 'BI Dashboard, Audit Trail & GCG Compliance',
      metaDesc:
        'Dashboard manajemen strategis dengan Audit Trail lengkap. Fitur keamanan Role-Based Access Control (RBAC) untuk kepatuhan GCG perusahaan.',
      features: [
        {
          title: 'Executive BI Dashboard',
          desc: 'Pantau P&L harian, Tren Penjualan, dan Cashflow dalam satu layar interaktif. Drill-down dari level korporat hingga transaksi detail.',
        },
        {
          title: 'Immutable Audit Trail',
          desc: 'Rekam jejak digital (User, Timestamp, Old/New Value) untuk setiap perubahan data. Log terkunci read-only untuk audit forensik.',
        },
        {
          title: 'Role-Based Access Control',
          desc: 'Pengaturan hak akses granular hingga level field. Terapkan prinsip \'Least Privilege\' untuk melindungi data sensitif.',
        },
        {
          title: 'Dynamic Approval Matrix',
          desc: 'Desain alur persetujuan bertingkat yang fleksibel. Terapkan aturan kondisional (misal: PO > 50 Juta butuh persetujuan Direktur).',
        },
        {
          title: 'Data Versioning Control',
          desc: 'Setiap perubahan dokumen membuat versi baru. Anda bisa melihat sejarah perubahan dan mengembalikan data ke versi sebelumnya (Rollback).',
        },
        {
          title: 'Compliance Reporting',
          desc: 'Template laporan siap pakai untuk kebutuhan audit eksternal, pajak, dan standar ISO. Hemat waktu persiapan audit hingga 90%.',
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
        },
        {
          title: 'Kebocoran Data',
          desc: 'Staf junior bisa melihat data gaji direksi atau database pelanggan karena pengaturan hak akses yang terlalu longgar.',
        },
        {
          title: 'Keputusan Lambat',
          desc: 'Direksi harus menunggu laporan manual akhir bulan untuk tahu kondisi perusahaan. Terlambat untuk bermanuver.',
        },
        {
          title: 'Data Terisolasi',
          desc: 'Pengambilan keputusan lambat karena data antar divisi terputus dan mengharuskan konsolidasi manual.',
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
  },
};

export const platformCapabilitiesTranslations = {
  en: {
    'mobile': {
      title: 'Mobile Apps',
      subtitle: 'Not Just a Shrunk Web. This is True Mobile Native.',
      description:
        'Most ERP vendors take shortcuts by wrapping responsive websites into apps (Web Wrapper/PWA). BizOps Mobile is built from scratch as true Native (Flutter Engine) for smooth 60 FPS performance and reliable offline-first experience in the field.',
      features: [
        {
          title: 'Offline-First Architecture',
          desc: 'Critical operational data (Catalog, Tasks, Reports) is stored in local database (SQLite). Auto-sync when signal returns.',
        },
        {
          title: 'Deep Hardware Integration',
          desc: 'Low-level camera access for millisecond barcode scanning and secure biometric login (FaceID/Fingerprint).',
        },
        {
          title: 'Precise Geolocation (Anti-Mock)',
          desc: 'Access raw GNSS data to detect Fake GPS. Block attendance if fake location injection is detected.',
        },
        {
          title: 'Battery Optimization',
          desc: 'Supports native Dark Mode for up to 30% battery savings on AMOLED for long field use.',
        },
      ],
      metrics: [
        { value: '60 FPS', label: 'Smooth Performance' },
        { value: '100%', label: 'Offline Capable' },
        { value: '< 2s', label: 'Barcode Scan Speed' },
      ],
      problems: [
        {
          title: 'Poor Signal = Work Stops',
          desc: 'Warehouses or project sites often have poor signal. Web-based ERP keeps loading and hinders work.',
        },
        {
          title: 'Slow UX',
          desc: 'Web wrapper apps feel heavy, scrolling is not smooth, and button response is slow, making users reluctant to use them.',
        },
        {
          title: 'Data & Battery Drain',
          desc: 'Reloading web pages repeatedly consumes data and drains field employees’ phone batteries.',
        },
      ],
      mobileAdvantage: {
        title: 'Consumer-Grade Intuitive Design',
        desc: 'We adopt design standards from popular apps (like Gojek/Grab) so field employees can use it instantly without long training. Supports automatic Dark Mode.',
      },
      connections: [
        {
          target: 'Field Ops',
          desc: 'Upload project progress photos directly compressed on device to save data.',
        },
        {
          target: 'Sales',
          desc: 'Salespeople can sell (input orders) in building basements with no signal at all.',
        },
        {
          target: 'Security',
          desc: 'Local data encryption ensures phone data remains safe even if the device is lost.',
        },
      ],
      cta: {
        text: 'Equip your field team with the best tools.',
        buttonLabel: 'Download Demo App',
      },
      testimonial: {
        quote: 'This app changed the way we work. Very intuitive and powerful.',
        author: 'Budi Santoso',
        role: 'CEO at Teknologi Maju',
        avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Is it available on iOS and Android?',
          answer:
            'Yes, available on Apple App Store and Google Play Store. Supports iOS 12+ and Android 8+. ',
        },
        {
          question: 'Can it print receipts via Bluetooth?',
          answer:
            'Yes. Supports various thermal bluetooth printers (ESC/POS) for Van Sales or POS.',
        },
        {
          question: 'What if an employee’s phone is lost?',
          answer:
            'Admin can perform "Remote Wipe" to erase company data on the device when online, or revoke its access token.',
        },
      ],
    },
    'self-hosted': {
      title: 'Self-Hosted Deployment',
      subtitle: 'Your Infrastructure, Your Full Control.',
      description:
        'For companies prioritizing data sovereignty or compliance, BizOps can be deployed entirely on your own servers or private cloud. No vendor lock-in. No cloud subscription. You own and manage everything.',
      features: [
        {
          title: 'Docker Containerization',
          desc: 'Complete containerized stack with docker-compose. Easy deployment and consistent environments across servers.',
        },
        {
          title: 'Kubernetes Ready',
          desc: 'Official Helm charts for K8s clusters. HA (High Availability), self-healing pods, auto-scaling for traffic spikes.',
        },
        {
          title: 'Bare Metal Performance',
          desc: 'No virtualization overhead. Direct installation on Linux servers for maximum performance with minimal resources.',
        },
        {
          title: 'Automated Offsite Backups',
          desc: 'Encrypted PostgreSQL dumps to S3-compatible storage (Wasabi, MinIO, Cloudflare R2, local NAS).',
        },
      ],
      metrics: [
        { value: '0', label: 'Monthly Cloud Costs' },
        { value: '100%', label: 'Data Sovereignty' },
        { value: '< 2 GB', label: 'Minimum RAM' },
      ],
      problems: [
        {
          title: 'Vendor Lock-In',
          desc: 'Once migrating to cloud SaaS, your data is \'hostage\'. Want to move? It\'s very difficult and costly.',
        },
        {
          title: 'Cloud Costs Spiral',
          desc: 'Cloud subscription costs grow exponentially with user/storage growth. Reaches millions per year.',
        },
        {
          title: 'Regulatory Compliance',
          desc: 'Banking, healthcare, government sectors often require data to remain on-premise for audit reasons.',
        },
      ],
      mobileAdvantage: {
        title: 'Access On-Premise from Anywhere',
        desc: 'Mobile apps can still access internal servers securely via VPN or Tailscale mesh network.',
      },
      connections: [
        {
          target: 'VPN Tunnel',
          desc: 'Secure access for remote employees via VPN or Tailscale without exposing to public internet.',
        },
        {
          target: 'Internal AD/LDAP',
          desc: 'SSO integration with Active Directory or OpenLDAP for centralized user management.',
        },
        {
          target: 'Local NAS Backup',
          desc: 'Auto backup to Synology/QNAP NAS for offsite redundancy.',
        },
      ],
      cta: {
        text: 'Want to deploy on your own infrastructure? We\'ll assist with setup.',
        buttonLabel: 'Self-Hosted Consultation',
      },
      testimonial: {
        quote:
          'We operate in a heavily regulated industry. Self-hosted deployment lets us meet audit requirements without sacrificing modern ERP functionality.',
        author: 'Dr. Bambang Wijaya',
        role: 'IT Director',
        avatar: 'https://ui-avatars.com/api/?name=Bambang+Wijaya&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'What server specs are required?',
          answer:
            'Minimum: 2 vCPU, 2 GB RAM, 20 GB SSD for <50 users. Recommended: 4 vCPU, 8 GB RAM for production with 100+ concurrent users.',
        },
        {
          question: 'Do you provide DevOps support?',
          answer:
            'Yes. We provide initial setup assistance (installation, SSL config, backup setup). For ongoing server maintenance, you can add a managed services package.',
        },
        {
          question: 'Can it be migrated to cloud later?',
          answer:
            'Absolutely. Our architecture is cloud-agnostic. If later you want to migrate to AWS/GCP/Azure, the migration process is straightforward.',
        },
        {
          question: 'What Linux distros are supported?',
          answer:
            'Officially tested on Ubuntu 22.04 LTS and Debian 12. But can run on any Linux distro with Docker installed.',
        },
      ],
    },
    'integration': {
      title: 'Integration Architecture',
      subtitle: 'API-First: Natively Connected to the Outside World.',
      description:
        'BizOps is not an isolated island. Every data (DocType) has an open API Endpoint. Supported by our expert team to ensure safe and stable integration (Managed Integration), ensuring data flows according to your unique business logic.',
      features: [
        {
          title: 'RESTful API Standard',
          desc: 'JSON CRUD access for thousands of data objects. Supports complex filters, sorting, and built-in pagination.',
        },
        {
          title: 'Webhooks (Event-Driven)',
          desc: 'Real-time notifications to other systems when events occur (e.g., "When PO is created -> Send data to Warehouse WMS").',
        },
        {
          title: 'Server Script Injection',
          desc: 'Insert custom Python logic on the server side to manipulate data payload before saving or after retrieving.',
        },
        {
          title: 'OAuth 2.0 & Token Auth',
          desc: 'Industry-standard security for secure third-party integration authentication (SSO Ready).',
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
          desc: 'HR, Accounting, and Sales software don\'t talk to each other. Data must be manually re-entered multiple times.',
        },
        {
          title: 'Complex Setup',
          desc: '\'Do-It-Yourself\' integration often fails due to complex data mapping not matching business processes.',
        },
        {
          title: 'IoT Disconnect',
          desc: 'Factory machines or digital scales have data, but don\'t automatically enter the recording system.',
        },
      ],
      mobileAdvantage: {
        title: 'API Access Anywhere',
        desc: 'Access data via API from mobile devices, field apps, or external systems securely and in real-time.',
      },
      connections: [
        {
          target: 'E-Commerce',
          desc: 'Auto-sync orders from Tokopedia, Shopee, TikTok Shop, and WooCommerce.',
        },
        {
          target: 'Banking',
          desc: 'Auto bank statement reconciliation (KlikBCA, Mandiri MCM) and Payment Gateway (Xendit/Midtrans).',
        },
        {
          target: 'Hardware',
          desc: 'Pull fingerprint attendance logs (ZKTeco) or truck scale digital data directly into the system.',
        },
        {
          target: 'Legacy ERP',
          desc: 'Two-way connector to SAP or Odoo for GL journal and master data synchronization.',
        },
      ],
      cta: {
        text: 'Need custom integration? Discuss with our technical team.',
        buttonLabel: 'Integration Consultation',
      },
      testimonial: {
        quote:
          'Integration with our e-commerce marketplace is seamless. Orders flow automatically without manual intervention.',
        author: 'Rudi Hartono',
        role: 'IT Manager',
        avatar: 'https://ui-avatars.com/api/?name=Rudi+Hartono&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Is integration Plug & Play?',
          answer:
            'Currently, integration is a \'Managed Service\'. Our technical team will handle configuration, data mapping, and testing to ensure connections run smoothly without you worrying about technical details.',
        },
        {
          question: 'Are there additional costs?',
          answer:
            'For standard integration (API access) it\'s free. However, for \'Managed Integration\' requiring custom connector development, there may be a one-time setup fee.',
        },
        {
          question: 'How long is the integration process?',
          answer:
            'Depends on complexity. Standard marketplace integration can take 1-3 days. Legacy ERP system integration may need 2-4 weeks testing phase.',
        },
        {
          question: 'What programming languages are supported?',
          answer:
            'Our API is standard REST JSON, so it can be accessed by any language (Python, JS, PHP, Go, curl, etc.).',
        },
      ],
    },
    'collaboration': {
      title: 'Team Collaboration',
      subtitle: 'Stop Confusing "Ping-Pong" Chats on WhatsApp.',
      description:
        'The biggest problem with work communication is loss of context. BizOps unites conversations with data. Discuss work right where the work is (Transaction Documents).',
      features: [
        {
          title: 'Document-Based Chat',
          desc: 'Every document (Invoice, Task, Project) has a dedicated chat panel. Discussion sticks to its context forever.',
        },
        {
          title: 'Smart Mentions & Notifications',
          desc: 'Use @User or @Role to call colleagues. Instant push notifications ensure quick responses.',
        },
        {
          title: 'Audit Trail of Communication',
          desc: 'Business conversations become part of document history. Decision support evidence that cannot be deleted arbitrarily.',
        },
        {
          title: 'Integrated File Sharing',
          desc: 'Drag-and-drop supporting files directly into chat column. Centralize documents so they don\'t scatter in private chats.',
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
          desc: 'Important approval discussions drowned in family WA groups. When you need proof, the chat is already deleted.',
        },
        {
          title: 'Email Ping-Pong',
          desc: 'Forward-forward emails with subject "Re: Re: Re: Final Revision" confusing who is ultimately responsible.',
        },
        {
          title: 'Lost Context',
          desc: 'Staff asks "How is this?", Manager asks back "Which one?". Time wasted explaining context.',
        },
      ],
      mobileAdvantage: {
        title: 'Uninterrupted Discussion',
        desc: 'Reply to chats and mention colleagues directly from phone notifications. Stay connected to work context while you\'re mobile or on field duty.',
      },
      connections: [
        {
          target: 'All Modules',
          desc: 'Available in all documents: PO, Invoice, Leave, Project Task, to CRM Leads.',
        },
        {
          target: 'Notification',
          desc: 'Mentioning @user will send email notifications and in-app alerts.',
        },
        {
          target: 'Projects',
          desc: 'Discussion on Tasks automatically attached as project progress updates.',
        },
      ],
      cta: {
        text: 'Restore context in your work communication.',
        buttonLabel: 'View Chat Demo',
      },
      testimonial: {
        quote:
          'No more searching through WhatsApp for approval proof. Everything is documented right in the transaction.',
        author: 'Dian Permata',
        role: 'Procurement Head',
        avatar: 'https://ui-avatars.com/api/?name=Dian+Permata&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Can chats be deleted?',
          answer:
            'No. For audit reasons, business conversations cannot be deleted, only edited (with logs).',
        },
        {
          question: 'Can large files be sent?',
          answer: 'Yes. File size limit follows server configuration (default 10MB per file).',
        },
        {
          question: 'Is there video call feature?',
          answer: 'Not yet (Text & File only). We focus on structured asynchronous communication.',
        },
      ],
    },
    'whitelabel': {
      title: 'Whitelabel Platform',
      subtitle: 'Our System, Your Brand Identity.',
    },
    'custom-apps': {
      title: 'Custom Apps',
      subtitle: 'Turn Ideas into Enterprise Apps in Hours.',
      description:
        'Empower "Citizen Developers" in your company. Create digital forms, complex approval workflows, and custom reports with an intuitive Drag-and-Drop interface, without writing complex lines of code.',
      features: [
        {
          title: 'Visual Form Builder',
          desc: 'Design data input forms with drag-and-drop. Support for validation logic, field dependencies, and automatic calculations.',
        },
        {
          title: 'Workflow Automation',
          desc: 'Build business logic (If-This-Then-That) for notifications, status changes, and automatic action triggers across modules.',
        },
        {
          title: 'Kanban & Calendar Views',
          desc: 'Visualize data in Kanban board or interactive Calendar form for better task management.',
        },
        {
          title: 'Role-Based Permission',
          desc: 'Set who can view, edit, or delete data with high granularity down to field level.',
        },
      ],
      metrics: [
        { value: '10x', label: 'Faster Development' },
        { value: '0', label: 'Code Required' },
        { value: '100%', label: 'Mobile Ready' },
      ],
      problems: [
        {
          title: 'Long IT Queue',
          desc: 'Business departments need simple apps but IT team is too busy with major projects. Innovation is hindered.',
        },
        {
          title: 'Shadow IT',
          desc: 'Employees use unofficial apps (Excel/wild SaaS) because office systems are rigid, creating data security risks.',
        },
        {
          title: 'Expensive Vendor Costs',
          desc: 'Paying expensive software vendors just to create one simple digital form.',
        },
      ],
      mobileAdvantage: {
        title: 'Build Once, Run Everywhere',
        desc: 'Every app you create in Low-Code Studio is automatically available in BizOps mobile app (iOS/Android) without re-coding. Supports offline mode.',
      },
      connections: [
        {
          target: 'Core Modules',
          desc: 'Your custom apps can read and write data to core modules (HR, Finance, Inventory).',
        },
        {
          target: 'Automation',
          desc: 'Trigger automatic workflows when new data is input through low-code apps.',
        },
        {
          target: 'API',
          desc: 'Data from low-code apps is automatically exposed via standard REST API.',
        },
      ],
      cta: {
        text: 'Start building your own business applications.',
        buttonLabel: 'Try Low-Code Studio',
      },
      testimonial: {
        quote:
          'We built a custom field inspection app in just 3 hours. Previously, vendors quoted 3 months and millions in costs.',
        author: 'Ahmad Basuki',
        role: 'Operations Manager',
        avatar: 'https://ui-avatars.com/api/?name=Ahmad+Basuki&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Is it truly no-code?',
          answer:
            'For 90% of common needs (Form, List, Approval), truly no coding. However, we also provide a "Scripting Layer" (Python/JS) for very complex logic.',
        },
        {
          question: 'Can non-IT people use it?',
          answer:
            'Yes. Designed for business users with minimal technical knowledge. Basic understanding of spreadsheet logic is enough.',
        },
        {
          question: 'Is data secure?',
          answer:
            'Very secure. Apps built in Low-Code Studio follow the same security and permission standards as core modules.',
        },
      ],
    },
    'multi-company-management': {
      title: 'Multi-Company Management',
      subtitle: 'One System for Multiple Entities.',
      description:
        'Manage holding companies with multiple subsidiaries (PT/CV) in one database. Financial consolidation becomes easy and real-time.',
      features: [
        {
          title: 'Centralized Master Data',
          desc: 'Share product, customer, and vendor data across companies for group standardization.',
        },
        {
          title: 'Inter-Company Transactions',
          desc: 'Buy-sell transactions between group entities are automatically journaled in both general ledgers.',
        },
        {
          title: 'Consolidated Reporting',
          desc: 'Combined P&L and Balance Sheet reports available instantly without manual Excel processing.',
        },
        {
          title: 'Shared Service Center',
          desc: 'Centralize HR, IT, or Finance functions to serve the entire group from one dashboard.',
        },
      ],
      metrics: [
        { value: 'Instant', label: 'Financial Consolidation' },
        { value: '1', label: 'Single Database Source' },
        { value: '100%', label: 'Inter-company Elimination' },
      ],
      problems: [
        {
          title: 'Separate Reports',
          desc: 'Each subsidiary has its own database. Month-end consolidation takes weeks.',
        },
        {
          title: 'Double Input',
          desc: 'PT A sells to PT B. Admin PT A inputs invoice, Admin PT B inputs purchase bill. Waste of time.',
        },
        {
          title: 'Messy Master Data',
          desc: 'Item codes in PT A differ from PT B, making group inventory analysis impossible.',
        },
      ],
      mobileAdvantage: {
        title: 'Group-Wide Visibility',
        desc: 'View consolidated performance metrics and drill down to individual entity details from your mobile device.',
      },
      connections: [
        {
          target: 'Finance',
          desc: 'Automatically eliminate reciprocal accounts during consolidation.',
        },
        {
          target: 'Inventory',
          desc: 'Transfer stock between branches/entities with integrated Internal Transfer documents.',
        },
        {
          target: 'Sales',
          desc: 'Share Customer master data across entities to facilitate group cross-selling.',
        },
      ],
      cta: {
        text: 'Manage your business empire from one cockpit.',
        buttonLabel: 'Multi-Company Demo',
      },
      testimonial: {
        quote:
          'Managing 5 subsidiaries became so much easier. Consolidation that used to take 2 weeks now takes 2 hours.',
        author: 'Susanto Wijaya',
        role: 'CFO at Holding Group',
        avatar: 'https://ui-avatars.com/api/?name=Susanto+Wijaya&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Must the chart of accounts be the same?',
          answer:
            'Not mandatory, but recommended for easier consolidation. The system supports account mapping if COA differs.',
        },
        {
          question: 'Can users from PT A view PT B data?',
          answer:
            'By default, no. Access rights are restricted per Company (User Permission). Only Holding/Group level can view all.',
        },
        {
          question: 'Does it support different currencies?',
          answer:
            'Yes. Subsidiaries in Singapore (SGD) can be consolidated to Holding in Indonesia (IDR) with automatic exchange rates.',
        },
      ],
    },
    'ai-assistant': {
      title: 'AI Assistant',
      subtitle: 'Not Just a Chatbot. Your Digital Coworker.',
      description:
        'Forget complex dashboards. Just command AI Assistant in natural language to perform operational tasks, from data analysis to cross-app workflow execution. Powered by Agentic AI that thinks and acts autonomously.',
      features: [
        {
          title: 'Workflow Automation',
          desc: 'Automate multi-step business processes (approval, notifications, escalations) with visual workflow builder.',
        },
        {
          title: 'Robotic Process Automation (RPA)',
          desc: 'Integrate with external systems and automate data transfer between apps without manual copy-paste.',
        },
        {
          title: 'AI Document Recognition',
          desc: 'Extract data from invoices, receipts, and forms using OCR and AI models. Reduce manual input and errors.',
        },
        {
          title: 'Smart Alerts & Suggestions',
          desc: 'Get proactive recommendations and alerts (e.g., low stock, overdue tasks) powered by AI.',
        },
      ],
      metrics: [
        { value: '80%', label: 'Manual Work Eliminated' },
        { value: '99%', label: 'Data Entry Accuracy' },
        { value: '24/7', label: 'Uninterrupted Automation' },
      ],
      problems: [
        {
          title: 'Repetitive Tasks',
          desc: 'Employees waste hours on manual data entry, approvals, and routine checks.',
        },
        {
          title: 'Human Error',
          desc: 'Manual processes are prone to mistakes, leading to costly business errors.',
        },
        {
          title: 'Slow Response',
          desc: 'Approvals and escalations are delayed because they depend on manual follow-up.',
        },
      ],
      mobileAdvantage: {
        title: 'Automation in Your Pocket',
        desc: 'Trigger workflows, approve requests, and get AI-powered insights directly from your mobile app.',
      },
      connections: [
        {
          target: 'Finance',
          desc: 'Automate invoice processing and payment approvals for faster month-end closing.',
        },
        {
          target: 'HR',
          desc: 'Streamline leave requests, onboarding, and performance reviews with automated workflows.',
        },
        {
          target: 'Sales',
          desc: 'Auto-assign leads, send follow-up reminders, and generate sales reports with no manual effort.',
        },
      ],
      cta: {
        text: 'Let your team focus on what matters. Automate the rest.',
        buttonLabel: 'See Automation Demo',
      },
      testimonial: {
        quote:
          'With BizOps Automation, our team saves hours every week and errors are almost zero.',
        author: 'Hendra Gunawan',
        role: 'Operations Lead at Retail Nasional',
        avatar: 'https://ui-avatars.com/api/?name=Hendra+Gunawan&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Can I build custom workflows without coding?',
          answer:
            'Yes, the visual workflow builder lets you automate processes with drag-and-drop, no coding required.',
        },
        {
          question: 'Does it support integration with external apps?',
          answer:
            'Yes, you can connect to email, WhatsApp, Google Sheets, and more using built-in connectors or API.',
        },
        {
          question: 'Is the AI model customizable?',
          answer: 'You can train the AI to recognize your own document formats and business rules.',
        },
        {
          question: 'Can I monitor automation logs and errors?',
          answer:
            'Yes, all automation runs are logged and you can view detailed audit trails and error reports.',
        },
      ],
    },
    'portals': {
      title: 'Customer Portals',
      subtitle: 'Engage Customers & Vendors Directly.',
      description:
        'Provide secure limited access to external parties to interact with your system. Reduce admin burden in handling status inquiries.',
      features: [
        {
          title: 'Customer Portal',
          desc: 'Customers can view catalogs, place orders, check delivery status, and download invoices independently.',
        },
        {
          title: 'Vendor Portal',
          desc: 'Suppliers can submit price quotes (RFQ), upload invoices, and check payment status.',
        },
        {
          title: 'Candidate Portal',
          desc: 'Job applicants can upload CVs, take online tests, and check application status.',
        },
        {
          title: 'Support Ticket Portal',
          desc: 'Self-service help center for issue reporting and tracking resolution status.',
        },
      ],
      metrics: [
        { value: '30%', label: 'Less Admin Calls' },
        { value: '24/7', label: 'Self-Service Access' },
        { value: 'Faster', label: 'Vendor Response Time' },
      ],
      problems: [
        {
          title: 'Phone Keeps Ringing',
          desc: 'Sales admin is busy answering "Has my item shipped yet?" questions from customers.',
        },
        {
          title: 'Manual Vendor Billing',
          desc: 'Vendor invoices scattered in emails or hardcopies, causing payment delays.',
        },
        {
          title: 'CV Application Chaos',
          desc: 'HRD struggles to compile thousands of CVs from emails. Candidate Portal organizes applicant database automatically.',
        },
      ],
      mobileAdvantage: {
        title: 'Easy Access for Partners',
        desc: 'Vendors and Customers don\'t need to install any apps. Our portal is 100% Mobile Responsive, lightweight, and fast to access via phone browser.',
      },
      connections: [
        {
          target: 'Sales',
          desc: 'Orders from Customer Portal automatically enter as Sales Order Draft.',
        },
        {
          target: 'Procurement',
          desc: 'Vendor quotes via portal directly enter price comparison (Quotation Comparison).',
        },
        {
          target: 'HR',
          desc: 'Job applicants via Candidate Portal automatically enter Recruitment database.',
        },
      ],
      cta: {
        text: 'Provide the best digital experience for your partners.',
        buttonLabel: 'View Portal Demo',
      },
      testimonial: {
        quote: 'Our customer service calls dropped by 40% since implementing the portal.',
        author: 'Linda Kusuma',
        role: 'Customer Service Manager',
        avatar: 'https://ui-avatars.com/api/?name=Linda+Kusuma&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Are portals secure?',
          answer:
            'Secure. Portal users only have limited access (Website User) and cannot enter internal modules (Desk).',
        },
        {
          question: 'Do we pay per portal user license?',
          answer:
            'No! Portal users (Customer/Vendor) are unlimited and free. You only pay for internal users.',
        },
        {
          question: 'Can we use our own domain?',
          answer: 'Yes. Portal can be accessed at subdomain like vendor.yourcompany.com.',
        },
        {
          question: 'Do vendors need to install an app?',
          answer:
            'No. Portal is web-based and responsive, accessible via browser on phone or laptop without installation.',
        },
      ],
    },
    'analytics': {
      title: 'Reports & Analytics',
      subtitle: 'Your Data, Your Way.',
      description:
        'Don\'t be stuck with standard reports. Create custom reports tailored to your unique business needs with powerful Report Builder tools.',
      features: [
        {
          title: 'Drag & Drop Report Builder',
          desc: 'Design column or pivot table reports easily. Select fields, filters, and grouping as needed.',
        },
        {
          title: 'Custom Dashboards',
          desc: 'Create personal dashboards for each role with chart widgets, key metrics, and shortcuts.',
        },
        {
          title: 'Auto-Email Reports',
          desc: 'Schedule routine report delivery (daily/weekly) to management emails automatically.',
        },
        {
          title: 'Excel/PDF Export',
          desc: 'Export report data to standard formats for further analysis in spreadsheets.',
        },
      ],
      metrics: [
        { value: 'Unlimited', label: 'Custom Report' },
        { value: '< 5s', label: 'Report Generation Time' },
        { value: '100%', label: 'Real-time Data' },
      ],
      problems: [
        {
          title: 'IT Dependency',
          desc: 'Business users must ask programmers for help every time they need a new report or just add a column.',
        },
        {
          title: 'Excel Hell',
          desc: 'Data exported to dozens of separate Excel files which are then manually merged, prone to formula errors.',
        },
        {
          title: 'Stale Data',
          desc: 'Reports only available at month-end. By the time the report is ready, the decision-making moment has passed.',
        },
      ],
      mobileAdvantage: {
        title: 'Dashboard in Your Pocket',
        desc: 'Monitor company KPIs in real-time while you\'re in meetings outside the office. Interactive charts adapt to phone screens for easy analysis.',
      },
      connections: [
        {
          target: 'All Modules',
          desc: 'Report Builder can access all DocTypes in the system without restrictions.',
        },
        {
          target: 'Email',
          desc: 'Send PDF reports automatically to Directors\' inboxes every Monday morning.',
        },
        {
          target: 'Dashboard',
          desc: 'One-click shortcuts from user Home Dashboard to specific reports.',
        },
      ],
      cta: {
        text: 'Turn raw data into valuable insights.',
        buttonLabel: 'Try Report Builder',
      },
      testimonial: {
        quote:
          'No more waiting for IT to create reports. Now I can build my own reports in minutes.',
        author: 'Rina Hartono',
        role: 'Finance Director',
        avatar: 'https://ui-avatars.com/api/?name=Rina+Hartono&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Can it export to Excel?',
          answer:
            'Yes. Supports Excel (.xlsx), CSV, and PDF formats. Exported Excel format is neat and ready to process.',
        },
        {
          question: 'Can it connect to PowerBI/Tableau?',
          answer:
            'Yes. For Self-Hosted users, you can connect directly to our PostgreSQL Database. For Cloud, via API.',
        },
        {
          question: 'Can regular users create their own reports?',
          answer:
            'Absolutely. Drag-and-drop interface is designed for non-technical users. Administrators can still restrict what data can be viewed.',
        },
      ],
    },
    'report-builder': {
      title: 'Report Builder',
      subtitle: 'Create custom reports without IT help.',
    },
    'architecture': {
      title: 'Enterprise Architecture',
      subtitle: 'Scalable, secure, and developer-friendly infrastructure.',
      description:
        'BizOps is built on proven open-source technology foundations (Python, JavaScript, PostgreSQL, Redis). Metadata-driven architecture allows the system to evolve without needing hard-coded application rewrites, making customization fast and maintainable.',
      features: [
        {
          title: 'Metadata-Driven Framework',
          desc: 'Every module (DocType) is defined in JSON metadata, not hardcoded. Changes to fields/workflows are immediately reflected without needing code deployment.',
        },
        {
          title: 'Python + JS Stack',
          desc: 'Server-side logic uses Python (Frappe Framework). Frontend uses modern JavaScript (Vue 3, TypeScript). Mobile uses Flutter (Dart).',
        },
        {
          title: 'Asynchronous Background Jobs',
          desc: 'Heavy tasks (Mass Email, Report Generation, Data Import) run in background queues (Redis Queue, BullMQ) without blocking UI.',
        },
        {
          title: 'Real-time WebSocket',
          desc: 'Live notifications and form updates use Socket.io. Changes from other users appear instantly without page refresh.',
        },
      ],
      metrics: [
        { value: 'Python', label: 'Backend Language' },
        { value: 'PostgreSQL', label: 'Primary Database' },
        { value: 'Open Standard', label: 'Core Stack' },
      ],
      problems: [
        {
          title: 'Black Box Proprietary',
          desc: 'Proprietary ERP vendors lock you in their ecosystem. Want custom features? Must wait for vendor roadmap (or never).',
        },
        {
          title: 'Monolithic Rigidity',
          desc: 'Legacy systems are tightly coupled. Small field additions require expensive change requests and long testing cycles.',
        },
        {
          title: 'No Developer Access',
          desc: 'Your IT team cannot see source code. Debugging issues or custom integrations become impossible.',
        },
      ],
      mobileAdvantage: {
        title: 'Modern Tech Stack',
        desc: 'Mobile apps built with Flutter deliver native performance on iOS and Android from a single codebase.',
      },
      connections: [
        {
          target: 'Developer API',
          desc: 'Full REST API access for your development team to build custom frontends or integrations.',
        },
        {
          target: 'Database Access',
          desc: 'Direct PostgreSQL access for BI tools, data warehouses, or custom analytics (Self-Hosted only).',
        },
        {
          target: 'Server Scripts',
          desc: 'Write custom Python or JavaScript code directly in the system for business logic automation.',
        },
      ],
      cta: {
        text: 'Have technical questions? Speak with our Solutions Architect.',
        buttonLabel: 'Technical Consultation',
      },
      testimonial: {
        quote:
          'As a technical team, we appreciate having full source code access. We can debug issues ourselves and contribute custom modules without vendor dependence.',
        author: 'Andi Setiawan',
        role: 'CTO',
        avatar: 'https://ui-avatars.com/api/?name=Andi+Setiawan&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Can our developers modify the source code?',
          answer:
            'For Self-Hosted deployments, yes. Full source code access. For Cloud, you can use Server Scripts (Python/JS) for custom logic without touching core code.',
        },
        {
          question: 'Is the system scalable?',
          answer:
            'Very scalable. Architecture supports horizontal scaling (multiple app servers behind load balancer). Proven in deployments with 1,000+ concurrent users.',
        },
        {
          question: 'What tech stack skills are needed for customization?',
          answer:
            'Python for backend, JavaScript (Vue) for frontend, SQL for database queries. If you have a standard web dev team, they can work with BizOps.',
        },
        {
          question: 'How is data security ensured?',
          answer:
            'Role-based permissions at row level, encrypted connections (TLS), audit logs for all data changes, and regular security patches.',
        },
      ],
    },
    'security': {
      title: 'Security & Compliance',
      subtitle: 'Uncompromising Data Protection.',
      description:
        'Built with a "Security-First" architecture. From encryption at rest/transit to granular role-based access control (RBAC), BizOps ensures your data remains yours.',
      features: [
        {
          title: 'Bank-Grade Encryption',
          desc: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Your sensitive business information is mathematically unreadable to unauthorized parties.',
        },
        {
          title: 'Single Sign-On (SSO)',
          desc: 'Integrate with your corporate Identity Provider (Google Workspace, Azure AD, Okta) via SAML 2.0 or OAuth for secure, centralized access management.',
        },
        {
          title: 'Immutable Audit Logs',
          desc: 'Every action (View, Create, Edit, Delete) is logged with a cryptographic hash. Perfect for forensic analysis and compliance audits.',
        },
        {
          title: 'Role-Based Access (RBAC)',
          desc: 'Granular permission settings down to the field level. Defy "Least Privilege Access" policies to ensure users only see what they need.',
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
        },
        {
          title: 'Compliance Nightmares',
          desc: 'Managing user access manually across multiple systems creates audit findings and security gaps.',
        },
        {
          title: 'Insider Threats',
          desc: 'Without detailed logs, it\'s impossible to trace who leaked sensitive customer lists or manipulated financial records.',
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
  },
  id: {
    'mobile': {
      title: 'Mobile Apps',
      subtitle: 'Bukan Sekadar Web yang Dikecilkan. Ini Mobile Native Sesungguhnya.',
      description:
        'Banyak vendor ERP mengambil jalan pintas dengan membungkus website responsif menjadi aplikasi (Web Wrapper/PWA). BizOps Mobile dibangun dari nol secara Native (Flutter Engine) untuk performa 60 FPS yang mulus dan pengalaman offline-first yang handal di lapangan.',
      features: [
        {
          title: 'Offline-First Architecture',
          desc: 'Data operasional kritis (Katalog, Tugas, Laporan) disimpan dalam database lokal (SQLite). Sync otomatis saat sinyal kembali.',
        },
        {
          title: 'Deep Hardware Integration',
          desc: 'Akses kamera level rendah untuk scan barcode milidetik dan login biometrik (FaceID/Fingerprint) yang aman.',
        },
        {
          title: 'Precise Geolocation (Anti-Mock)',
          desc: 'Mengakses data raw GNSS untuk mendeteksi Fake GPS. Memblokir absensi jika terdeteksi injeksi lokasi palsu.',
        },
        {
          title: 'Battery Optimization',
          desc: 'Mendukung Dark Mode native yang hemat baterai AMOLED hingga 30% untuk penggunaan durasi panjang di lapangan.',
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
        },
        {
          title: 'UX yang Lambat',
          desc: 'Aplikasi web wrapper terasa berat, scroll tidak mulus, dan respon tombol lambat, membuat user malas menggunakannya.',
        },
        {
          title: 'Boros Kuota & Baterai',
          desc: 'Me-load halaman web berulang kali memakan kuota data dan menguras baterai HP karyawan lapangan.',
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
      testimonial: {
        quote: 'Sistem ini mengubah cara kami bekerja. Sangat intuitif dan powerful.',
        author: 'Budi Santoso',
        role: 'CEO at Teknologi Maju',
        avatar: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Apakah tersedia di iOS dan Android?',
          answer:
            'Ya, tersedia di Apple App Store dan Google Play Store. Mendukung iOS 12+ dan Android 8+. ',
        },
        {
          question: 'Bisa print struk via Bluetooth?',
          answer:
            'Bisa. Mendukung berbagai printer thermal bluetooth (ESC/POS) untuk Sales Kanvas atau Kasir.',
        },
        {
          question: 'Bagaimana jika HP karyawan hilang?',
          answer:
            'Admin bisa melakukan "Remote Wipe" untuk menghapus data perusahaan di perangkat tersebut saat terhubung internet, atau mencabut token aksesnya.',
        },
      ],
    },
    'self-hosted': {
      title: 'Self-Hosted Deployment',
      subtitle: 'Infrastruktur Anda, Kendali Penuh Anda.',
    },
    'integration': {
      title: 'Integration Architecture',
      subtitle: 'API-First: Terhubung Secara Native dengan Dunia Luar.',
      description:
        'BizOps bukan pulau terisolasi. Setiap data (DocType) memiliki API Endpoint yang terbuka. Didukung oleh tim ahli kami untuk memastikan integrasi yang aman dan stabil (Managed Integration), memastikan data mengalir sesuai logika bisnis unik Anda.',
      features: [
        {
          title: 'RESTful API Standard',
          desc: 'Akses CRUD JSON untuk ribuan objek data. Mendukung filter kompleks, sorting, dan pagination bawaan.',
        },
        {
          title: 'Webhooks (Event-Driven)',
          desc: 'Notifikasi real-time ke sistem lain saat event terjadi (misal: "Saat PO dibuat -> Kirim data ke WMS Gudang").',
        },
        {
          title: 'Server Script Injection',
          desc: 'Sisipkan logika Python kustom di sisi server untuk manipulasi data payload sebelum disimpan atau setelah diambil.',
        },
        {
          title: 'OAuth 2.0 & Token Auth',
          desc: 'Standar keamanan industri untuk otentikasi integrasi pihak ketiga yang aman (SSO Ready).',
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
        },
        {
          title: 'Complex Setup',
          desc: 'Integrasi \'Do-It-Yourself\' seringkali gagal karena mapping data yang rumit dan tidak sesuai proses bisnis.',
        },
        {
          title: 'IoT Disconnect',
          desc: 'Mesin pabrik atau timbangan digital punya data, tapi tidak masuk ke sistem pencatatan otomatis.',
        },
      ],
      mobileAdvantage: {
        title: 'Akses API Dari Mana Saja',
        desc: 'Akses data via API dari perangkat mobile, aplikasi lapangan, atau sistem eksternal dengan aman dan real-time.',
      },
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
      testimonial: {
        quote:
          'Integrasi dengan marketplace e-commerce kami berjalan mulus. Order mengalir otomatis tanpa intervensi manual.',
        author: 'Rudi Hartono',
        role: 'IT Manager',
        avatar: 'https://ui-avatars.com/api/?name=Rudi+Hartono&background=0D8ABC&color=fff',
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
    'collaboration': {
      title: 'Team Collaboration',
      subtitle: 'Hentikan \'Ping-Pong\' Chat di WhatsApp yang Membingungkan.',
      description:
        'Masalah terbesar komunikasi kerja adalah hilangnya konteks. BizOps menyatukan percakapan dengan data. Diskusikan pekerjaan tepat di tempat pekerjaan itu berada (Dokumen Transaksi).',
      features: [
        {
          title: 'Document-Based Chat',
          desc: 'Setiap dokumen (Invoice, Task, Project) memiliki panel chat terdedikasi. Diskusi menempel selamanya pada konteksnya.',
        },
        {
          title: 'Smart Mentions & Notifications',
          desc: 'Gunakan @User atau @Role untuk memanggil rekan kerja. Notifikasi push instan memastikan respon cepat.',
        },
        {
          title: 'Audit Trail of Communication',
          desc: 'Percakapan bisnis menjadi bagian dari sejarah dokumen. Bukti pendukung keputusan yang tidak bisa dihapus sembarangan.',
        },
        {
          title: 'Integrated File Sharing',
          desc: 'Drag-and-drop file pendukung langsung ke kolom chat. Sentralisasi dokumen agar tidak tercecer di chat pribadi.',
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
        },
        {
          title: 'Email Ping-Pong',
          desc: 'Forward-forward email dengan subject "Re: Re: Re: Revisi Final" yang membingungkan siapa penanggung jawab terakhir.',
        },
        {
          title: 'Konteks Hilang',
          desc: 'Staff bertanya "Ini gimana?", Manager tanya balik "Ini yang mana?". Waktu terbuang menjelaskan konteks.',
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
      testimonial: {
        quote:
          'Tidak perlu cari-cari lagi bukti approval di WhatsApp. Semua terdokumentasi langsung di transaksinya.',
        author: 'Dian Permata',
        role: 'Procurement Head',
        avatar: 'https://ui-avatars.com/api/?name=Dian+Permata&background=0D8ABC&color=fff',
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
      title: 'Whitelabel Platform',
      subtitle: 'Sistem Kami, Identitas Brand Anda.',
    },
    'custom-apps': {
      title: 'Custom Apps',
      subtitle: 'Ubah Ide Menjadi Aplikasi Enterprise dalam Hitungan Jam.',
      description:
        'Berdayakan "Citizen Developer" di perusahaan Anda. Buat form digital, alur persetujuan kompleks, dan laporan kustom dengan antarmuka Drag-and-Drop yang intuitif, tanpa perlu menulis baris kode yang rumit.',
      features: [
        {
          title: 'Visual Form Builder',
          desc: 'Desain formulir input data dengan drag-and-drop. Dukungan validasi logic, dependensi field, dan perhitungan otomatis.',
        },
        {
          title: 'Workflow Automation',
          desc: 'Bangun logika bisnis (If-This-Then-That) untuk notifikasi, perubahan status, dan trigger aksi otomatis lintas modul.',
        },
        {
          title: 'Kanban & Calendar Views',
          desc: 'Visualisasikan data dalam bentuk papan Kanban atau Kalender interaktif untuk manajemen tugas yang lebih baik.',
        },
        {
          title: 'Role-Based Permission',
          desc: 'Atur siapa yang boleh melihat, mengedit, atau menghapus data dengan granularitas tinggi hingga level field.',
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
        },
        {
          title: 'Shadow IT',
          desc: 'Karyawan menggunakan aplikasi tidak resmi (Excel/SaaS liar) karena sistem kantor kaku, menimbulkan risiko keamanan data.',
        },
        {
          title: 'Biaya Vendor Mahal',
          desc: 'Membayar vendor software mahal hanya untuk membuat satu form digital sederhana.',
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
      testimonial: {
        quote:
          'Kami bikin aplikasi inspeksi lapangan custom hanya dalam 3 jam. Dulu vendor nawarin 3 bulan dengan biaya puluhan juta.',
        author: 'Ahmad Basuki',
        role: 'Operations Manager',
        avatar: 'https://ui-avatars.com/api/?name=Ahmad+Basuki&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Apakah benar-benar tanpa coding?',
          answer:
            'Untuk 90% kebutuhan umum (Form, List, Approval), benar-benar tanpa coding. Namun kami juga menyediakan "Scripting Layer" (Python/JS) untuk logika yang sangat kompleks.',
        },
        {
          question: 'Apakah orang non-IT bisa pakai?',
          answer:
            'Bisa. Didesain untuk user bisnis dengan pengetahuan teknis minimal. Pemahaman dasar logika spreadsheet sudah cukup.',
        },
        {
          question: 'Apakah data aman?',
          answer:
            'Sangat aman. Aplikasi yang dibangun di Low-Code Studio mengikuti standar keamanan dan permission yang sama dengan modul inti.',
        },
      ],
    },
    'multi-company-management': {
      title: 'Multi-Company Management',
      subtitle: 'Satu Sistem untuk Banyak Entitas.',
      description:
        'Kelola holding company dengan banyak anak perusahaan (PT/CV) dalam satu database. Konsolidasi laporan keuangan menjadi mudah dan real-time.',
      features: [
        {
          title: 'Centralized Master Data',
          desc: 'Share data produk, pelanggan, dan vendor antar perusahaan untuk standarisasi grup.',
        },
        {
          title: 'Inter-Company Transactions',
          desc: 'Transaksi jual-beli antar entitas grup otomatis terjurnal di kedua buku besar.',
        },
        {
          title: 'Consolidated Reporting',
          desc: 'Laporan Laba Rugi dan Neraca gabungan tersedia instan tanpa proses manual Excel.',
        },
        {
          title: 'Shared Service Center',
          desc: 'Pusatkan fungsi HR, IT, atau Finance untuk melayani seluruh grup dari satu dashboard.',
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
        },
        {
          title: 'Double Input',
          desc: 'PT A jual ke PT B. Admin PT A input invoice, Admin PT B input tagihan pembelian. Buang waktu.',
        },
        {
          title: 'Master Data Berantakan',
          desc: 'Kode barang di PT A beda dengan PT B, membuat analisis inventory grup jadi mustahil.',
        },
      ],
      mobileAdvantage: {
        title: 'Visibilitas Seluruh Grup',
        desc: 'Lihat metrik performa konsolidasi dan drill down ke detail masing-masing entitas dari perangkat mobile Anda.',
      },
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
      testimonial: {
        quote:
          'Kelola 5 anak perusahaan jadi jauh lebih mudah. Konsolidasi yang dulu butuh 2 minggu sekarang cuma 2 jam.',
        author: 'Susanto Wijaya',
        role: 'CFO at Holding Group',
        avatar: 'https://ui-avatars.com/api/?name=Susanto+Wijaya&background=0D8ABC&color=fff',
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
    'ai-assistant': {
      title: 'AI Assistant',
      subtitle: 'Bukan Sekadar Chatbot. Rekan Kerja Digital Anda.',
      description:
        'Lupakan dashboard rumit. Cukup perintahkan AI Assistant dengan bahasa manusia untuk melakukan tugas operasional, dari analisis data hingga eksekusi workflow lintas aplikasi. Ditenagai oleh Agentic AI yang berpikir dan bertindak otonom.',
      features: [
        {
          title: 'Natural Language Action',
          desc: 'Perintahkan sistem dengan bahasa sehari-hari. "Tampilkan penjualan bulan lalu" atau "Buat Invoice untuk PT Maju Jaya". Copilot yang akan mengeksekusinya.',
        },
        {
          title: 'Robotic Process Automation (RPA)',
          desc: 'Integrasi dengan sistem eksternal dan otomatisasi transfer data antar aplikasi tanpa copy-paste manual.',
        },
        {
          title: 'AI Document Recognition',
          desc: 'Ekstrak data dari invoice, struk, dan formulir menggunakan OCR dan AI. Kurangi input manual dan error.',
        },
        {
          title: 'Smart Alerts & Suggestions',
          desc: 'Dapatkan rekomendasi dan notifikasi proaktif (misal: stok menipis, tugas overdue) berbasis AI.',
        },
      ],
      metrics: [
        { value: '80%', label: 'Pekerjaan Manual Hilang' },
        { value: '99%', label: 'Akurasi Input Data' },
        { value: '24/7', label: 'Otomasi Nonstop' },
      ],
      problems: [
        {
          title: 'Pekerjaan Berulang',
          desc: 'Karyawan membuang waktu untuk input data, approval, dan pengecekan rutin manual.',
        },
        {
          title: 'Human Error',
          desc: 'Proses manual rawan kesalahan, menyebabkan error bisnis yang mahal.',
        },
        {
          title: 'Respons Lambat',
          desc: 'Approval dan eskalasi lambat karena harus di-follow up manual.',
        },
      ],
      mobileAdvantage: {
        title: 'Otomasi di Genggaman',
        desc: 'Trigger workflow, approve request, dan dapat insight AI langsung dari aplikasi mobile Anda.',
      },
      connections: [
        {
          target: 'Finance',
          desc: 'Otomasi proses invoice dan approval pembayaran untuk closing bulanan lebih cepat.',
        },
        {
          target: 'HR',
          desc: 'Permudah cuti, onboarding, dan review kinerja dengan workflow otomatis.',
        },
        {
          target: 'Sales',
          desc: 'Auto-assign lead, kirim reminder follow-up, dan generate laporan sales tanpa kerja manual.',
        },
      ],
      cta: {
        text: 'Biarkan tim Anda fokus pada hal penting. Otomatiskan sisanya.',
        buttonLabel: 'Lihat Demo Automation',
      },
      testimonial: {
        quote:
          'Dengan BizOps Automation, tim kami hemat jam kerja tiap minggu dan error hampir nol.',
        author: 'Hendra Gunawan',
        role: 'Operations Lead at Retail Nasional',
        avatar: 'https://ui-avatars.com/api/?name=Hendra+Gunawan&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Bisa bikin workflow custom tanpa coding?',
          answer:
            'Bisa, visual workflow builder memungkinkan otomasi proses dengan drag-and-drop tanpa coding.',
        },
        {
          question: 'Bisa integrasi ke aplikasi eksternal?',
          answer:
            'Bisa, Anda bisa connect ke email, WhatsApp, Google Sheets, dan lainnya pakai konektor built-in atau API.',
        },
        {
          question: 'Model AI-nya bisa di-custom?',
          answer:
            'Bisa, Anda bisa latih AI untuk mengenali format dokumen dan aturan bisnis Anda sendiri.',
        },
        {
          question: 'Bisa monitor log dan error automation?',
          answer:
            'Bisa, semua proses automation tercatat dan Anda bisa cek audit trail serta laporan error detail.',
        },
      ],
    },
    'portals': {
      title: 'Customer Portals',
      subtitle: 'Libatkan Pelanggan & Vendor Secara Langsung.',
      description:
        'Berikan akses terbatas yang aman kepada pihak eksternal untuk berinteraksi dengan sistem Anda. Kurangi beban admin dalam melayani permintaan status.',
      features: [
        {
          title: 'Customer Portal',
          desc: 'Pelanggan dapat melihat katalog, membuat pesanan, cek status pengiriman, dan download invoice mandiri.',
        },
        {
          title: 'Vendor Portal',
          desc: 'Supplier dapat submit penawaran harga (RFQ), upload tagihan, dan cek status pembayaran.',
        },
        {
          title: 'Candidate Portal',
          desc: 'Pelamar kerja dapat upload CV, ikut tes online, dan cek status lamaran kerja.',
        },
        {
          title: 'Support Ticket Portal',
          desc: 'Pusat bantuan mandiri untuk pelaporan kendala dan tracking status penyelesaiannya.',
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
          desc: 'Admin sales sibuk menjawab pertanyaan "Barang saya sudah dikirim belum?" dari pelanggan.',
        },
        {
          title: 'Vendor Tagih Manual',
          desc: 'Invoice vendor tercecer di email atau hardcopy, menyebabkan keterlambatan pembayaran.',
        },
        {
          title: 'CV Lamaran Numplek',
          desc: 'HRD pusing merekap ribuan CV dari email. Candidate Portal merapikan database pelamar otomatis.',
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
      testimonial: {
        quote: 'Telepon customer service kami turun 40% sejak pakai portal ini.',
        author: 'Linda Kusuma',
        role: 'Customer Service Manager',
        avatar: 'https://ui-avatars.com/api/?name=Linda+Kusuma&background=0D8ABC&color=fff',
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
    'analytics': {
      title: 'Reports & Analytics',
      subtitle: 'Data Anda, Cara Anda.',
      description:
        'Jangan terpaku pada laporan standar. Buat laporan kustom sesuai kebutuhan unik bisnis Anda dengan tool Report Builder yang powerful.',
      features: [
        {
          title: 'Drag & Drop Report Builder',
          desc: 'Desain laporan kolom atau pivot table dengan mudah. Pilih field, filter, dan grouping sesuai kebutuhan.',
        },
        {
          title: 'Custom Dashboards',
          desc: 'Buat dashboard personal untuk setiap role dengan widget grafik, angka kunci, dan shortcut.',
        },
        {
          title: 'Auto-Email Reports',
          desc: 'Jadwalkan pengiriman laporan rutin (harian/mingguan) ke email manajemen secara otomatis.',
        },
        {
          title: 'Excel/PDF Export',
          desc: 'Export data laporan ke format standar untuk analisis lanjutan di spreadsheet.',
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
        },
        {
          title: 'Excel Hell',
          desc: 'Data diekspor ke puluhan file Excel terpisah yang kemudian digabung manual, rentan salah rumus.',
        },
        {
          title: 'Data Basi',
          desc: 'Laporan baru tersedia di akhir bulan. Saat laporan jadi, momentum pengambilan keputusan sudah lewat.',
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
      testimonial: {
        quote:
          'Tidak perlu menunggu IT lagi untuk bikin laporan. Sekarang saya bisa buat laporan sendiri dalam hitungan menit.',
        author: 'Rina Hartono',
        role: 'Finance Director',
        avatar: 'https://ui-avatars.com/api/?name=Rina+Hartono&background=0D8ABC&color=fff',
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
    'report-builder': {
      title: 'Report Builder',
      subtitle: 'Buat laporan custom tanpa bantuan IT.',
    },
    'architecture': {
      title: 'Enterprise Architecture',
      subtitle: 'Infrastruktur scalable, aman, dan ramah developer.',
      description:
        'BizOps dibangun di atas fondasi teknologi open-source yang sudah terbukti (Python, JavaScript, PostgreSQL, Redis). Arsitektur metadata-driven memungkinkan sistem berevolusi tanpa perlu rewrite aplikasi hard-coded, membuat kustomisasi cepat dan maintainable.',
      features: [
        {
          title: 'Metadata-Driven Framework',
          desc: 'Setiap modul (DocType) didefinisikan dalam metadata JSON, bukan hardcoded. Perubahan field/workflow langsung tercermin tanpa perlu deploy code.',
        },
        {
          title: 'Python + JS Stack',
          desc: 'Server-side logic menggunakan Python (Frappe Framework). Frontend menggunakan JavaScript modern (Vue 3, TypeScript). Mobile menggunakan Flutter (Dart).',
        },
        {
          title: 'Asynchronous Background Jobs',
          desc: 'Task berat (Mass Email, Report Generation, Data Import) jalan di background queue (Redis Queue, BullMQ) tanpa blocking UI.',
        },
        {
          title: 'Real-time WebSocket',
          desc: 'Notifikasi live dan update form menggunakan Socket.io. Perubahan dari user lain muncul instant tanpa refresh page.',
        },
      ],
      metrics: [
        { value: 'Python', label: 'Backend Language' },
        { value: 'PostgreSQL', label: 'Primary Database' },
        { value: 'Open Standard', label: 'Core Stack' },
      ],
      problems: [
        {
          title: 'Black Box Proprietary',
          desc: 'Vendor ERP proprietary mengunci Anda di ekosistem mereka. Mau fitur custom? Harus tunggu roadmap vendor (atau tidak pernah).',
        },
        {
          title: 'Monolithic Rigidity',
          desc: 'Sistem legacy tightly coupled. Penambahan field kecil butuh change request mahal dan siklus testing panjang.',
        },
        {
          title: 'No Developer Access',
          desc: 'Tim IT Anda tidak bisa lihat source code. Debugging issue atau integrasi custom jadi impossible.',
        },
      ],
      mobileAdvantage: {
        title: 'Modern Tech Stack',
        desc: 'Aplikasi mobile dibangun dengan Flutter memberikan performa native di iOS dan Android dari single codebase.',
      },
      connections: [
        {
          target: 'Developer API',
          desc: 'Full REST API access untuk tim development Anda membangun frontend custom atau integrasi.',
        },
        {
          target: 'Database Access',
          desc: 'Direct PostgreSQL access untuk BI tools, data warehouse, atau analytics custom (Self-Hosted only).',
        },
        {
          target: 'Server Scripts',
          desc: 'Tulis kode Python atau JavaScript custom langsung di sistem untuk otomasi business logic.',
        },
      ],
      cta: {
        text: 'Punya pertanyaan teknis? Bicara dengan Solutions Architect kami.',
        buttonLabel: 'Konsultasi Teknis',
      },
      testimonial: {
        quote:
          'Sebagai tim teknis, kami appreciate punya akses full source code. Kami bisa debug issue sendiri dan contribute custom module tanpa dependensi vendor.',
        author: 'Andi Setiawan',
        role: 'CTO',
        avatar: 'https://ui-avatars.com/api/?name=Andi+Setiawan&background=0D8ABC&color=fff',
      },
      faqs: [
        {
          question: 'Apakah developer kami bisa modifikasi source code?',
          answer:
            'Untuk deployment Self-Hosted, bisa. Full source code access. Untuk Cloud, bisa gunakan Server Scripts (Python/JS) untuk logika custom tanpa sentuh core code.',
        },
        {
          question: 'Apakah sistem scalable?',
          answer:
            'Sangat scalable. Arsitektur support horizontal scaling (multiple app server di belakang load balancer). Terbukti di deployment dengan 1,000+ concurrent user.',
        },
        {
          question: 'Skill tech stack apa yang diperlukan untuk kustomisasi?',
          answer:
            'Python untuk backend, JavaScript (Vue) untuk frontend, SQL untuk database query. Jika punya tim web dev standar, bisa kerja dengan BizOps.',
        },
        {
          question: 'Bagaimana keamanan data dijamin?',
          answer:
            'Role-based permission di row level, encrypted connection (TLS), audit log untuk semua perubahan data, dan regular security patch.',
        },
      ],
    },
    'security': {
      title: 'Perisai Keamanan Enterprise',
      subtitle: 'Proteksi Data Tanpa Kompromi.',
      description:
        'Dibangun dengan arsitektur "Security-First". Mulai dari enkripsi database hingga kontrol akses berbasis peran (RBAC), BizOps memastikan data Anda tetap menjadi milik Anda.',
      features: [
        {
          title: 'Bank-Grade Encryption',
          desc: 'Seluruh data dienkripsi saat disimpan (AES-256) dan saat transfer (TLS 1.3). Informasi sensitif tidak terbaca oleh pihak yang tidak berwenang.',
        },
        {
          title: 'Single Sign-On (SSO)',
          desc: 'Integrasi dengan Identity Provider korporat (Google, Azure AD, Okta) untuk manajemen akses terpusat yang aman.',
        },
        {
          title: 'Immutable Audit Logs',
          desc: 'Setiap aksi (View, Create, Edit, Delete) dicatat dengan cryptographic hash. Ideal untuk audit forensik dan kepatuhan.',
        },
        {
          title: 'Role-Based Access (RBAC)',
          desc: 'Pengaturan hak akses granular hingga level field. Terapkan kebijakan "Least Privilege" agar user hanya melihat apa yang mereka butuhkan.',
        },
      ],
      metrics: [
        { value: 'AES-256', label: 'Standar Enkripsi' },
        { value: 'SOC 2', label: 'Siap Compliance' },
        { value: '100%', label: 'Jejak Audit' },
      ],
      problems: [
        {
          title: 'Kebocoran Data',
          desc: 'Password lemah dan database tanpa enkripsi membuat perusahaan rentan terhadap ransomware dan pencurian data.',
        },
        {
          title: 'Masalah Kepatuhan',
          desc: 'Manajemen akses manual di berbagai sistem menyebabkan temuan audit dan celah keamanan.',
        },
        {
          title: 'Ancaman Internal',
          desc: 'Tanpa log detail, mustahil melacak siapa yang membocorkan data pelanggan atau memanipulasi laporan keuangan.',
        },
      ],
      mobileAdvantage: {
        title: 'Keamanan Biometrik',
        desc: 'Aplikasi mobile mendukung FaceID dan Fingerprint native, menambah lapisan keamanan fisik untuk staf lapangan.',
      },
      connections: [
        {
          target: 'HR',
          desc: 'Resign karyawan di modul HR otomatis mencabut akses sistem secara instan.',
        },
        {
          target: 'IT Dept',
          desc: 'Panel admin terpusat untuk tim IT Security memantau sesi aktif dan aktivitas mencurigakan.',
        },
        {
          target: 'Compliance',
          desc: 'Ekspor log audit dengan satu klik untuk auditor eksternal.',
        },
      ],
      cta: {
        text: 'Amankan data perusahaan Anda hari ini.',
        buttonLabel: 'Download Whitepaper Keamanan',
      },
      faqs: [
        {
          question: 'Apakah sesuai dengan UU PDP?',
          answer:
            'Ya. Kami menyediakan fitur "Right to be Forgotten" (Anonimisasi Data) dan Manajemen Persetujuan untuk membantu kepatuhan regulasi privasi.',
        },
        {
          question: 'Bisakah menggunakan 2FA?',
          answer:
            'Sangat bisa. Two-Factor Authentication (OTP via Email/GAuth) dapat diwajibkan untuk semua user atau role tertentu.',
        },
        {
          question: 'Apakah ada laporan penetration testing?',
          answer:
            'Ya. Kami melakukan pentest rutin oleh pihak ketiga. Laporan tersedia by request dengan NDA untuk klien enterprise.',
        },
      ],
    },
  },
};

// --- FEATURE PAGES TRANSLATIONS (for PlatformPage template) ---
export const featuresPagesTranslations = {
  en: {
    // English content is in the base featuresData in platformContent.ts
  },
  id: {
    'analytics': {
      title: 'Laporan Anda, Cara Anda.',
      titleHighlight: 'Tanpa Coding.',
      subtitle: 'Analytics & Reports',
      description:
        'Setiap bisnis punya cara unik melihat data. Jangan terpaku pada laporan standar yang kaku. Dengan Report Builder, Anda menjadi analis data bagi perusahaan Anda sendiri.',

      featuresBadge: 'Fitur Utama',
      featuresTitle: 'Bangun Laporan Sesuai Kebutuhan',
      featuresSubtitle: 'Tools analitik yang fleksibel untuk setiap skenario bisnis.',
      features: [
        {
          title: 'Real-time Dashboard',
          desc: 'Widget visual yang dapat dikustomisasi dan diperbarui detik demi detik. Grafik Batang, Pie Chart, KPI Card, Heatmap.',
        },
        {
          title: 'Drag-and-Drop Builder',
          desc: 'Antarmuka intuitif untuk membuat laporan tabular. Pilih kolom, tarik ke kanvas, terapkan filter kompleks tanpa coding.',
        },
        {
          title: 'Auto-Schedule Email',
          desc: 'Buat laporan sekali, jadwalkan pengiriman otomatis. Sistem akan menjalankannya secara disiplin setiap hari/minggu/bulan.',
        },
      ],

      useCasesBadge: 'Laporan Populer',
      useCasesTitle: 'Contoh Laporan yang Sering Dipakai',
      useCasesSubtitle: 'Template siap pakai yang bisa Anda sesuaikan dengan kebutuhan bisnis.',
      useCases: [
        {
          title: 'Sales Performance Report',
          desc: 'Analisis performa sales per wilayah, per produk, per periode. Bandingkan target vs realisasi, identifikasi top performer dan underperformer.',
        },
        {
          title: 'Inventory Movement Report',
          desc: 'Track pergerakan stok: barang masuk, keluar, transfer antar gudang. Identifikasi slow-moving items dan fast-moving items untuk optimasi inventory.',
        },
        {
          title: 'Financial Summary Report',
          desc: 'Laporan keuangan komprehensif: Profit & Loss, Cash Flow, Balance Sheet. Export ke Excel atau PDF untuk presentasi ke stakeholder.',
        },
      ],

      cta: {
        title: 'Ubah Data Menjadi Insight',
        subtitle:
          'Lihat betapa mudahnya membuat laporan custom tanpa perlu bantuan IT atau konsultan.',
        badge: 'Analytics & Reports',
        demoBtn: 'Jadwalkan Demo Analytics',
        pricingBtn: 'Lihat Pricing',
        trustText1: 'Gratis 14 Hari',
        trustText2: 'Tanpa Kartu Kredit',
      },
    },

    'ai-assistant': {
      title: 'Biarkan Agen AI yang Bekerja,',
      titleHighlight: 'Bukan Anda.',
      subtitle: 'AI Assistant',
      description:
        'Delegasikan pekerjaan operasional yang membosankan kepada Autonomous Agents. AI Assistant bukan sekadar menjawab pertanyaan, tapi melakukan tindakan nyata.',

      featuresBadge: 'Agentic AI',
      featuresTitle: 'Rekan Kerja Digital Otonom',
      featuresSubtitle: 'AI yang bisa bertindak, bukan cuma ngobrol.',
      features: [
        {
          title: 'Autonomous Agents',
          desc: 'Agen cerdas yang bekerja di latar belakang. Mereka memantau stok, mengejar pembayaran, dan menjadwalkan meeting tanpa perlu disuruh.',
        },
        {
          title: 'Contoh Skenario',
          desc: '"Jika Stok Barang < 10 unit, otomatis buat Purchase Request ke Vendor A, kirim email PO, dan notifikasi WA ke Manajer Gudang."',
        },
        {
          title: 'Auto-Assignment',
          desc: 'Distribusi tugas otomatis. Misal: "Setiap Lead baru dari Jakarta Selatan otomatis di-assign ke Salesman Budi."',
        },
      ],

      useCasesBadge: 'Applied AI',
      useCasesTitle: 'Kecerdasan Buatan yang Praktis',
      useCasesSubtitle: 'Bukan sekadar buzzword, tapi fitur AI yang benar-benar menghemat waktu.',
      useCases: [
        {
          title: 'Invoice OCR',
          desc: 'Foto invoice supplier, AI baca nama vendor, nominal, hingga line item. Langsung jadi draft Purchase Invoice yang tinggal diverifikasi.',
          result: 'Kurangi input invoice dari 5 menit jadi 30 detik',
        },
        {
          title: 'Anomaly Detection',
          desc: 'Sistem belajar pola pengeluaran. Otomatis flag jika biaya Marketing naik 200% dalam satu bulan.',
          result: 'Deteksi kecurangan otomatis sebelum eskalasi',
        },
        {
          title: 'AI Copilot',
          desc: 'Tanya: "Customer mana yang tunggakannya di atas 30 hari?" Dapat jawaban dalam detik tanpa perlu bikin laporan custom.',
          result: 'Query bahasa natural untuk insight instan',
        },
      ],

      cta: {
        title: 'Siap Punya Karyawan Digital Baru?',
        subtitle:
          'Lihat bagaimana AI Assistant menyelesaikan pekerjaan administrasi Anda secara real-time.',
        badge: 'AI Assistant',
        demoBtn: 'Jadwalkan Demo Sekarang',
        pricingBtn: 'Lihat Pricing',
        trustText1: 'Gratis 14 Hari',
        trustText2: 'Tanpa Kartu Kredit',
      },
    },

    'multi-company-management': {
      title: 'Satu Platform untuk',
      titleHighlight: 'Seluruh Grup Bisnis Anda.',
      subtitle: 'Multi-Company',
      description:
        'Punya banyak PT, CV, atau unit bisnis berbeda? Satukan manajemen grup perusahaan Anda dengan struktur Multi-Company yang native.',

      featuresBadge: 'Fitur Inti',
      featuresTitle: 'Manajemen Holding Company',
      featuresSubtitle: 'Fitur enterprise-grade untuk grup bisnis.',
      features: [
        {
          title: 'Unified Login & Access',
          desc: 'Cukup satu username untuk mengakses data PT A, PT B, dan CV C. Pindah antar perusahaan semudah ganti saluran TV, namun hak akses data tetap terpisah secara ketat.',
        },
        {
          title: 'Financial Consolidation',
          desc: 'Lupakan proses VLOOKUP Excel yang memusingkan. BizOps menarik data Neraca dan Laba Rugi dari seluruh anak perusahaan dan menyajikannya dalam satu Laporan Konsolidasi Grup secara real-time.',
        },
        {
          title: 'Inter-Company Transactions',
          desc: 'Otomatisasi transaksi internal. Saat PT A menjual barang ke PT B, sistem otomatis membuat Sales Invoice di pembukuan PT A dan Purchase Invoice di PT B secara bersamaan.',
        },
      ],

      cta: {
        title: 'Kelola Grup Bisnis dengan Efisien',
        subtitle:
          'Jadwalkan demo untuk melihat bagaimana multi-company management bekerja untuk bisnis Anda.',
        badge: 'Multi-Company',
        demoBtn: 'Request Demo Enterprise',
        pricingBtn: 'Lihat Pricing',
        trustText1: 'Gratis 14 Hari',
        trustText2: 'Tanpa Kartu Kredit',
      },
    },

    'portals': {
      title: 'Berhenti Menjadi Admin',
      titleHighlight: 'untuk Klien Anda.',
      subtitle: 'B2B Portals',
      description:
        'Bebaskan tim CS, Sales Admin, dan Purchasing Anda dari pertanyaan berulang. Berikan akses portal mandiri 24/7 kepada mitra bisnis Anda.',

      featuresBadge: 'Jenis Portal',
      featuresTitle: 'Self-Service untuk Mitra Bisnis',
      featuresSubtitle: 'Berdayakan pelanggan dan vendor Anda dengan akses 24/7.',
      features: [
        {
          title: 'B2B Customer Portal',
          desc: 'Memberikan pengalaman layaknya e-commerce B2B kepada klien Anda. Melihat katalog produk dengan harga khusus kontrak, menginput order pembelian mandiri, download invoice PDF & lacak status pengiriman.',
        },
        {
          title: 'Supplier/Vendor Portal',
          desc: 'Mendigitalisasi interaksi dengan supplier untuk transparansi pengadaan. Melihat daftar RFQ terbuka, mengunggah penawaran harga secara kompetitif, cek status pembayaran tagihan tanpa menelepon Finance.',
        },
      ],

      cta: {
        title: 'Tingkatkan Kolaborasi Bisnis',
        subtitle:
          'Lihat bagaimana portal B2B dapat meningkatkan efisiensi tim dan kepuasan mitra bisnis Anda.',
        badge: 'B2B Portals',
        demoBtn: 'Request Demo Portal',
        pricingBtn: 'Lihat Pricing',
        trustText1: 'Gratis 14 Hari',
        trustText2: 'Tanpa Kartu Kredit',
      },
    },
    'security': {
      title: 'Keamanan Kelas Bank',
      titleHighlight: 'untuk Enterprise Anda.',
      subtitle: 'Security & Compliance',
      description:
        'Kami menganggap keamanan sebagai fitur utama, bukan pelengkap. Lindungi bisnis Anda dengan standar yang sama digunakan oleh institusi keuangan.',

      featuresBadge: 'Fitur Keamanan',
      featuresTitle: 'Perlindungan Menyeluruh',
      featuresSubtitle: 'Lapisan keamanan komprehensif untuk ketenangan pikiran.',
      features: [
        {
          title: 'Single Sign-On (SSO)',
          desc: 'Login mulus dengan Google, Microsoft 365, atau Okta. Tegakkan kebijakan password korporat dan cabut akses instan saat karyawan resign.',
        },
        {
          title: 'Field-Level Encryption',
          desc: 'Enkripsi kolom sensitif (seperti Gaji atau NIK) di database. Bahkan admin DB tidak bisa membaca data mentah tanpa kunci dekripsi.',
        },
        {
          title: 'Brute Force Protection',
          desc: 'Penguncian akun otomatis setelah gagal login berkali-kali. Rate limiting IP untuk mencegah serangan otomatis.',
        },
      ],

      useCasesBadge: 'Kepatuhan',
      useCasesTitle: 'Siap Audit & Compliance',
      useCasesSubtitle: 'Tools untuk membantu Anda lolos audit ISO 27001 dan keuangan.',
      useCases: [
        {
          title: 'Jejak Audit Forensik',
          desc: 'Lacak setiap perubahan data. "Siapa mengubah Price List dari 100 ke 90 jam 2 pagi?" Sistem tahu jawabannya.',
          result: '100% Traceability perubahan data',
        },
        {
          title: 'Manajemen Sesi',
          desc: 'Pantau sesi aktif secara real-time. Cabut akses perangkat hilang atau IP mencurigakan dari jarak jauh.',
          result: 'Penahanan ancaman seketika',
        },
        {
          title: 'Kedaulatan Data',
          desc: 'Pilih di mana data Anda tinggal. On-Premise, Private Cloud (Region Jakarta), atau Dedicated Instance.',
          result: 'Kepatuhan penuh hukum residensi data',
        },
      ],

      cta: {
        title: 'Percaya itu Baik, Kontrol itu Lebih Baik.',
        subtitle: 'Lihat fitur keamanan kami beraksi dengan demo teknis.',
        badge: 'Security Shield',
        demoBtn: 'Jadwalkan Demo Security',
        pricingBtn: 'Lihat Pricing',
        trustText1: 'Sesuai UU PDP',
        trustText2: 'ISO 27001 Ready',
      },
    },
  },
};
