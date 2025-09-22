export interface ServiceDetail {
  id: string
  title: string
  description: string
  fullDescription: string
  icon: string
  color: string
  features: string[]
  benefits: string[]
  process: string[]
  pricing: {
    basic: string
    professional: string
    enterprise: string
  }
  faqs: {
    question: string
    answer: string
  }[]
  testimonials: {
    name: string
    company: string
    text: string
    rating: number
  }[]
}

export const servicesData: Record<string, ServiceDetail> = {
  'konsultasi-pajak': {
    id: 'konsultasi-pajak',
    title: 'Konsultasi Pajak',
    description: 'Konsultasi profesional untuk semua kebutuhan perpajakan Anda',
    fullDescription: 'Layanan konsultasi pajak profesional yang membantu individu dan perusahaan dalam memahami dan mengelola kewajiban perpajakan dengan optimal. Tim ahli kami siap memberikan solusi terbaik untuk setiap permasalahan perpajakan yang Anda hadapi.',
    icon: 'Users',
    color: 'bg-gradient-to-br from-blue-600 to-blue-800',
    features: [
      'Konsultasi pajak pribadi dan perusahaan',
      'Analisis compliance perpajakan',
      'Strategi optimasi pajak legal',
      'Review perpajakan berkala',
      'Konsultasi tax planning',
      'Bantuan pemeriksaan pajak'
    ],
    benefits: [
      'Hemat waktu dan biaya',
      'Menghindari sanksi perpajakan',
      'Optimalisasi beban pajak',
      'Kepastian hukum perpajakan',
      'Akses ke tim ahli berpengalaman',
      'Solusi customized untuk bisnis Anda'
    ],
    process: [
      'Analisis kebutuhan perpajakan',
      'Identifikasi masalah dan peluang',
      'Penyusunan strategi perpajakan',
      'Implementasi solusi',
      'Monitoring dan evaluasi'
    ],
    pricing: {
      basic: 'Rp 299.000',
      professional: 'Rp 599.000',
      enterprise: 'Rp 1.299.000'
    },
    faqs: [
      {
        question: 'Apa saja yang termasuk dalam layanan konsultasi pajak?',
        answer: 'Layanan kami meliputi analisis perpajakan, strategi optimasi, compliance review, dan bantuan dalam menghadapi pemeriksaan pajak.'
      },
      {
        question: 'Berapa lama waktu yang dibutuhkan untuk konsultasi?',
        answer: 'Waktu konsultasi bervariasi tergantung kompleksitas masalah, biasanya antara 1-3 jam untuk konsultasi reguler.'
      },
      {
        question: 'Apakah konsultasi bisa dilakukan online?',
        answer: 'Ya, kami menyediakan layanan konsultasi online via video call atau chat untuk kenyamanan Anda.'
      }
    ],
    testimonials: [
      {
        name: 'Budi Santoso',
        company: 'PT. Teknologi Maju',
        text: 'Layanan konsultasi pajak yang sangat profesional. Tim ahli membantu kami menghemat pajak hingga 25%!',
        rating: 5
      },
      {
        name: 'Siti Nurhaliza',
        company: 'CV. Retail Sukses',
        text: 'Puas dengan layanan konsultasi. Respons cepat dan solusi yang diberikan sangat tepat sasaran.',
        rating: 5
      }
    ]
  },
  'perhitungan-pajak': {
    id: 'perhitungan-pajak',
    title: 'Perhitungan Pajak',
    description: 'Perhitungan akurat dengan sistem terkini',
    fullDescription: 'Layanan perhitungan pajak yang akurat dan terpercaya menggunakan teknologi terkini. Kami membantu menghitung berbagai jenis pajak sesuai dengan regulasi terbaru untuk memastikan kepatuhan dan akurasi.',
    icon: 'Calculator',
    color: 'bg-gradient-to-br from-green-600 to-green-800',
    features: [
      'Perhitungan PPh 21, 23, 25, 29',
      'Perhitungan PPN dan PPnBM',
      'Sistem perhitungan otomatis',
      'Validasi hasil perhitungan',
      'Laporan detail perhitungan',
      'Backup data perpajakan'
    ],
    benefits: [
      'Akurasi perhitungan 99.9%',
      'Hemat waktu hingga 80%',
      'Reduced human error',
      'Real-time calculation',
      'Comprehensive reporting',
      'Audit trail complete'
    ],
    process: [
      'Collection data transaksi',
      'Klasifikasi jenis pajak',
      'Perhitungan menggunakan sistem',
      'Validasi dan review',
      'Generate laporan perpajakan'
    ],
    pricing: {
      basic: 'Rp 399.000',
      professional: 'Rp 799.000',
      enterprise: 'Rp 1.599.000'
    },
    faqs: [
      {
        question: 'Bagaimana memastikan akurasi perhitungan pajak?',
        answer: 'Kami menggunakan sistem terkini dengan validasi ganda dan review oleh tim ahli untuk memastikan akurasi 99.9%.'
      },
      {
        question: 'Apakah data perusahaan aman?',
        answer: 'Ya, kami menggunakan enkripsi tingkat enterprise dan compliance dengan standar keamanan data internasional.'
      },
      {
        question: 'Bisakah menghitung pajak untuk multi cabang?',
        answer: 'Ya, sistem kami support perhitungan pajak untuk perusahaan dengan multi cabang atau lokasi.'
      }
    ],
    testimonials: [
      {
        name: 'Ahmad Wijaya',
        company: 'PT. Manufaktur Global',
        text: 'Sistem perhitungan pajak yang sangat akurat. Menghemat waktu tim keuangan kami secara signifikan.',
        rating: 5
      },
      {
        name: 'Dewi Lestari',
        company: 'PT. Distribusi Nusantara',
        text: 'Layanan perhitungan pajak yang profesional dan terpercaya. Sangat membantu bisnis kami.',
        rating: 4
      }
    ]
  },
  'laporan-pajak': {
    id: 'laporan-pajak',
    title: 'Laporan Pajak',
    description: 'Pelaporan tepat waktu dan sesuai regulasi',
    fullDescription: 'Layanan pelaporan pajak yang tepat waktu dan sesuai dengan regulasi terkini. Kami membantu menyiapkan dan mengirimkan berbagai jenis laporan pajak dengan jaminan kepatuhan dan ketepatan waktu.',
    icon: 'FileText',
    color: 'bg-gradient-to-br from-purple-600 to-purple-800',
    features: [
      'Pelaporan SPT Masa (PPh, PPN)',
      'Pelaporan SPT Tahunan',
      'E-filing dan e-registration',
      'Monitoring deadline pelaporan',
      'Document management system',
      'Alert & reminder system'
    ],
    benefits: [
      'Tepat waktu 100%',
      'Zero penalty guarantee',
      'Hemat biaya administrasi',
      'Digital documentation',
      'Real-time status tracking',
      'Expert review & validation'
    ],
    process: [
      'Collect data & dokumen',
      'Prepare laporan perpajakan',
      'Review & validation',
      'E-filing submission',
      'Confirmation & documentation'
    ],
    pricing: {
      basic: 'Rp 499.000',
      professional: 'Rp 999.000',
      enterprise: 'Rp 1.999.000'
    },
    faqs: [
      {
        question: 'Apa saja jenis laporan pajak yang bisa dibantu?',
        answer: 'Kami membantu SPT Masa (PPh Pasal 21, 23, 25, 29, PPN) dan SPT Tahunan (PPh Badan, PPh Orang Pribadi).'
      },
      {
        question: 'Bagaimana jika terjadi keterlambatan pelaporan?',
        answer: 'Kami memiliki sistem monitoring dan reminder untuk mencegah keterlambatan. Jika terjadi keterlambatan karena kesalahan kami, kami tanggung jawab.'
      },
      {
        question: 'Apakah mendapatkan bukti pelaporan?',
        answer: 'Ya, Anda akan mendapatkan bukti pelaporan elektronik (Bukti Penerimaan Elektronik/BPE) dari DJP.'
      }
    ],
    testimonials: [
      {
        name: 'Rizky Pratama',
        company: 'PT. Jasa Konstruksi',
        text: 'Layanan pelaporan pajak yang sangat membantu. Selalu tepat waktu dan prosesnya mudah.',
        rating: 5
      },
      {
        name: 'Maya Putri',
        company: 'PT. Retail Modern',
        text: 'Profesional dan terpercaya. Tidak perlu khawatir lagi dengan deadline pelaporan pajak.',
        rating: 5
      }
    ]
  },
  'perencanaan-pajak': {
    id: 'perencanaan-pajak',
    title: 'Perencanaan Pajak',
    description: 'Strategi pajak optimal untuk bisnis Anda',
    fullDescription: 'Layanan perencanaan pajak strategis yang membantu bisnis mengoptimalkan beban pajak secara legal. Kami menyusun strategi perpajakan jangka panjang untuk mendukung pertumbuhan bisnis Anda.',
    icon: 'TrendingUp',
    color: 'bg-gradient-to-br from-orange-600 to-orange-800',
    features: [
      'Tax planning untuk startup',
      'Restrukturisasi perpajakan',
      'Tax incentive optimization',
      'Transfer pricing planning',
      'International tax planning',
      'Mergers & acquisitions tax planning'
    ],
    benefits: [
      'Optimalisasi beban pajak legal',
      'Strategi jangka panjang',
      'Risk management pajak',
      'Compliance guarantee',
      'Competitive advantage',
      'Business growth support'
    ],
    process: [
      'Business analysis & assessment',
      'Tax risk identification',
      'Strategy development & planning',
      'Implementation roadmap',
      'Monitoring & optimization'
    ],
    pricing: {
      basic: 'Rp 899.000',
      professional: 'Rp 1.799.000',
      enterprise: 'Rp 3.599.000'
    },
    faqs: [
      {
        question: 'Apa bedanya tax planning dan tax evasion?',
        answer: 'Tax planning adalah strategi legal untuk mengoptimalkan pajak, sedangkan tax evasion adalah penghindaran pajak yang illegal. Kami hanya menyediakan layanan legal.'
      },
      {
        question: 'Kapan waktu terbaik untuk mulai tax planning?',
        answer: 'Semakin awal semakin baik. Idealnya saat memulai bisnis, melakukan ekspansi, atau restrukturisasi perusahaan.'
      },
      {
        question: 'Apakah tax planning cocok untuk startup?',
        answer: 'Sangat cocok! Tax planning membantu startup mengoptimalkan cash flow dan mempersiapkan struktur perpajakan yang efisien untuk growth.'
      }
    ],
    testimonials: [
      {
        name: 'Farhan Abdurrahman',
        company: 'Tech Startup Indonesia',
        text: 'Tax planning yang sangat strategis. Membantu startup kami hemat pajak dan siap untuk series A funding.',
        rating: 5
      },
      {
        name: 'Linda Kusuma',
        company: 'PT. Investasi Asia',
        text: 'Layanan perencanaan pajak yang profesional. Strategi yang diberikan sangat relevan dengan bisnis kami.',
        rating: 5
      }
    ]
  }
}