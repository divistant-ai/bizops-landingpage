export type BlogPost = {
  title: {
    en: string;
    id: string;
  };
  summary: {
    en: string;
    id: string;
  };
  category: string;
  date: {
    en: string;
    id: string;
  };
  author: {
    en: string;
    id: string;
  };
  slug: string;
  image: string;
  readTime: {
    en: string;
    id: string;
  };
};

export const blogPosts: BlogPost[] = [
  {
    title: {
      en: 'Complete Guide to Digital Payroll Transformation',
      id: 'Panduan Lengkap Transformasi Payroll Digital',
    },
    summary: {
      en: 'Learn how to automate payroll processes and reduce errors by up to 95% with the latest integrated HR system.',
      id: 'Cara mengotomasi proses penggajian dan mengurangi kesalahan hingga 95% dengan sistem HR terintegrasi terkini.',
    },
    category: 'HR',
    date: {
      en: 'Nov 5, 2024',
      id: '5 Nov 2024',
    },
    author: {
      en: 'Sarah Williams',
      id: 'Sarah Williams',
    },
    slug: 'digital-payroll-transformation',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80',
    readTime: {
      en: '8 min read',
      id: '8 menit baca',
    },
  },
  {
    title: {
      en: 'Real-Time Cash Flow Monitoring for Better Decisions',
      id: 'Monitoring Cash Flow Real-Time untuk Keputusan Lebih Baik',
    },
    summary: {
      en: 'Why immediate financial insights are crucial and how to implement them in your organization.',
      id: 'Mengapa insight finansial secara langsung itu krusial dan bagaimana menerapkannya di organisasi Anda.',
    },
    category: 'Finance',
    date: {
      en: 'Nov 1, 2024',
      id: '1 Nov 2024',
    },
    author: {
      en: 'Michael Chen',
      id: 'Michael Chen',
    },
    slug: 'real-time-cash-flow',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    readTime: {
      en: '6 min read',
      id: '6 menit baca',
    },
  },
  {
    title: {
      en: 'Optimizing Approval Workflows Without Bottlenecks',
      id: 'Mengoptimalkan Workflow Approval Tanpa Bottleneck',
    },
    summary: {
      en: 'Proven strategies to speed up approval processes while maintaining control and compliance.',
      id: 'Strategi proven untuk mempercepat proses approval tanpa mengorbankan kontrol dan kepatuhan.',
    },
    category: 'Operations',
    date: {
      en: 'Oct 28, 2024',
      id: '28 Okt 2024',
    },
    author: {
      en: 'Linda Tan',
      id: 'Linda Tan',
    },
    slug: 'approval-workflow-optimization',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    readTime: {
      en: '5 min read',
      id: '5 menit baca',
    },
  },
  {
    title: {
      en: 'Digital Tax Compliance: 2024 Regulation Updates',
      id: 'Kepatuhan Pajak Digital: Update Regulasi 2024',
    },
    summary: {
      en: 'Latest changes in digital taxation and their impact on your business operations.',
      id: 'Perubahan terbaru dalam perpajakan digital dan dampaknya terhadap bisnis Anda.',
    },
    category: 'Compliance',
    date: {
      en: 'Oct 25, 2024',
      id: '25 Okt 2024',
    },
    author: {
      en: 'Dewi Kusuma',
      id: 'Dewi Kusuma',
    },
    slug: 'digital-tax-compliance-2024',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    readTime: {
      en: '7 min read',
      id: '7 menit baca',
    },
  },
  {
    title: {
      en: 'Analytics Dashboards for Actionable Decision Making',
      id: 'Dashboard Analytics untuk Pengambilan Keputusan',
    },
    summary: {
      en: 'Effective data visualization for actionable business insights and strategic planning.',
      id: 'Visualisasi data yang efektif untuk insight bisnis yang actionable.',
    },
    category: 'Analytics',
    date: {
      en: 'Oct 20, 2024',
      id: '20 Okt 2024',
    },
    author: {
      en: 'Rudi Santoso',
      id: 'Rudi Santoso',
    },
    slug: 'analytics-dashboard-decisions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    readTime: {
      en: '5 min read',
      id: '5 menit baca',
    },
  },
  {
    title: {
      en: 'Efficient Inventory Management System Implementation',
      id: 'Sistem Manajemen Inventory yang Efisien',
    },
    summary: {
      en: 'Reduce inventory costs and prevent stockouts with smart automation and predictive analytics.',
      id: 'Mengurangi biaya inventory dan mencegah stockout dengan automasi cerdas.',
    },
    category: 'Operations',
    date: {
      en: 'Oct 15, 2024',
      id: '15 Okt 2024',
    },
    author: {
      en: 'James Liu',
      id: 'James Liu',
    },
    slug: 'efficient-inventory-management',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
    readTime: {
      en: '6 min read',
      id: '6 menit baca',
    },
  },
];
