'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { 
  Menu, 
  X, 
  Search, 
  Bell, 
  Sun, 
  Moon, 
  Phone, 
  Mail, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  ChevronUp, 
  Calculator, 
  FileText, 
  Clock, 
  TrendingUp, 
  Users, 
  Award, 
  Star, 
  Play, 
  ArrowRight,
  CheckCircle,
  Briefcase,
  Building,
  BarChart3,
  Shield,
  Zap,
  Target,
  Globe,
  CreditCard,
  Smartphone,
  Database,
  Cloud,
  Heart,
  Eye,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Download,
  Upload,
  Settings,
  User,
  Lock,
  Gift,
  Calendar,
  MapPin,
  Camera,
  Mic,
  Video,
  Headphones,
  Wifi,
  Battery,
  Bluetooth,
  Usb,
  Monitor,
  Keyboard,
  Mouse,
  Printer,
  HardDrive,
  Cpu,
  Battery,
  Wifi,
  Bluetooth,
  Usb,
  Camera,
  Mic,
  Video,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  Pause,
  Play,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Music,
  Radio,
  Tv,
  Tablet,
  Laptop,
  Headphones,
  Speaker,
  Image,
  Film,
  Video,
  AudioLines,
  Satellite,
  WifiOff,
  Signal,
  Volume2,
  VolumeX,
  MicOff,
  VideoOff,
  CameraOff,
  Download,
  Upload,
  Settings,
  User,
  Lock,
  Gift,
  Calendar,
  MapPin
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [logoClickCount, setLogoClickCount] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [activePricing, setActivePricing] = useState('monthly')

  // Dynamic counters
  const [clientCount, setClientCount] = useState(0)
  const [reportCount, setReportCount] = useState(0)
  const [experienceCount, setExperienceCount] = useState(0)

  // Refs
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const portfolioRef = useRef(null)
  const aboutRef = useRef(null)
  const ctaRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    // Loading screen
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Scroll progress
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      setShowScrollTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)

    // Counter animations
    const counterTimer = setTimeout(() => {
      setClientCount(150)
      setReportCount(2500)
      setExperienceCount(8)
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearTimeout(counterTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1
    setLogoClickCount(newCount)
    if (newCount >= 5) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
      setLogoClickCount(0)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Services data
  const services = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Konsultasi Pajak",
      description: "Konsultasi profesional untuk semua kebutuhan perpajakan Anda"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Perhitungan Pajak",
      description: "Perhitungan akurat dengan sistem terkini"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Pelaporan Pajak",
      description: "Pelaporan tepat waktu dan sesuai regulasi"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Perencanaan Pajak",
      description: "Strategi pajak optimal untuk bisnis Anda"
    }
  ]

  // Portfolio data
  const portfolioItems = [
    {
      title: "UMKM Maju Bersama",
      category: "UMKM",
      description: "Optimasi pajak untuk pertumbuhan bisnis"
    },
    {
      title: "PT ABC Global",
      category: "Korporasi",
      description: "Tax planning untuk perusahaan multinasional"
    },
    {
      title: "Korporasi XYZ",
      category: "Enterprise",
      description: "Comprehensive tax management system"
    }
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "CEO UMKM Maju",
      content: "Layanan sangat profesional dan membantu bisnis kami berkembang",
      rating: 5
    },
    {
      name: "Siti Wijaya",
      role: "CFO PT ABC",
      content: "Tim NSY Tax sangat ahli dan responsif",
      rating: 5
    },
    {
      name: "Ahmad Hassan",
      role: "Director XYZ Corp",
      content: "Solusi pajak terbaik untuk perusahaan kami",
      rating: 4
    },
    {
      name: "Dewi Lestari",
      role: "Entrepreneur",
      content: "Pelayanan ramah dan hasilnya memuaskan",
      rating: 5
    },
    {
      name: "Rudi Pratama",
      role: "Business Owner",
      content: "Rekomendasi untuk semua kebutuhan pajak",
      rating: 5
    }
  ]

  // Pricing data
  const pricingPlans = [
    {
      name: "Basic",
      price: 299000,
      features: ["Konsultasi 1x", "Perhitungan Pajak Dasar", "Laporan Bulanan"],
      highlighted: false
    },
    {
      name: "Pro",
      price: 599000,
      features: ["Konsultasi Tak Terbatas", "Perhitungan Lengkap", "Laporan Real-time", "Support 24/7"],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: 1299000,
      features: ["Semua Fitur Pro", "Dedicated Account Manager", "Custom Integration", "Priority Support"],
      highlighted: false
    }
  ]

  // Blog data
  const blogPosts = [
    {
      title: "Cara Menghitung PPh 23 dengan Benar",
      excerpt: "Panduan lengkap perhitungan PPh 23 untuk bisnis Anda",
      category: "Pajak",
      date: "15 Nov 2024"
    },
    {
      title: "Update Regulasi Pajak 2024",
      excerpt: "Informasi terbaru perubahan regulasi perpajakan",
      category: "Regulasi",
      date: "12 Nov 2024"
    },
    {
      title: "Tips Tax Planning untuk Startup",
      excerpt: "Strategi optimasi pajak untuk startup teknologi",
      category: "Tips",
      date: "10 Nov 2024"
    }
  ]

  // FAQ data
  const faqs = [
    {
      question: "Apa saja layanan yang tersedia?",
      answer: "Kami menyediakan konsultasi pajak, perhitungan pajak, pelaporan pajak, dan perencanaan pajak untuk berbagai jenis bisnis."
    },
    {
      question: "Bagaimana cara konsultasi?",
      answer: "Anda dapat menghubungi kami via WhatsApp, email, atau mengunjungi kantor kami untuk konsultasi langsung."
    },
    {
      question: "Berapa biaya layanan?",
      answer: "Biaya tergantung pada jenis layanan dan kompleksitas kebutuhan. Kami memiliki paket Basic, Pro, dan Enterprise."
    },
    {
      question: "Apakah tersedia layanan online?",
      answer: "Ya, kami menyediakan layanan konsultasi online 24/7 melalui platform digital kami."
    },
    {
      question: "Bagaimana dengan keamanan data?",
      answer: "Kami menjaga kerahasiaan data klien dengan sistem keamanan terenkripsi dan standar keamanan tinggi."
    },
    {
      question: "Apakah bisa untuk perusahaan multinasional?",
      answer: "Ya, kami berpengalaman menangani klien dari berbagai skala, termasuk perusahaan multinasional."
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer: "Kami menerima pembayaran via transfer bank, virtual account, dan pembayaran digital lainnya."
    },
    {
      question: "Apakah ada garansi?",
      answer: "Kami memberikan garansi kepuasan dengan revisi gratis jika ada kesalahan perhitungan."
    },
    {
      question: "Berapa lama prosesnya?",
      answer: "Proses tergantung kompleksitas, umumnya 1-7 hari kerja untuk layanan standar."
    },
    {
      question: "Apakah tersedia training?",
      answer: "Ya, kami menyediakan training pajak untuk tim internal perusahaan Anda."
    }
  ]

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center z-50">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-24 h-24 mx-auto mb-4"
          >
            <div className="w-full h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              NSY
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            NSY Tax Freelancer
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ delay: 1, duration: 1 }}
            className="h-1 bg-yellow-400 mx-auto mt-4 rounded"
          />
        </motion.div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 to-yellow-500"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-40 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                NSY
              </div>
              <span className="text-xl font-bold text-gray-800 dark:text-white">Tax Freelancer</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Beranda', 'Layanan', 'Portofolio', 'Tentang', 'Blog', 'Harga'].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.button>

              {/* Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
              </motion.button>

              {/* Notification */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative"
              >
                <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>

              {/* Mobile Menu */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>

          {/* Search Bar */}
          <AnimatePresence>
            {isSearchOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4 overflow-hidden"
              >
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Cari layanan atau informasi..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  />
                  <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Promo Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-yellow-500 text-white py-2 text-center"
      >
        <p className="text-sm font-medium">
          🎉 Promo Spesial: Diskon 20% untuk layanan konsultasi pajak bulan ini!
        </p>
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"></div>
        
        {/* Particle Background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Solusi Pajak
            <span className="text-yellow-400"> Profesional</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
          >
            Layanan konsultasi dan perpajakan terpercaya untuk UMKM hingga korporasi
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Lihat Portofolio
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hubungi Kami
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">
                <motion.span
                  initial={{ count: 0 }}
                  animate={{ count: clientCount }}
                  transition={{ duration: 2 }}
                >
                  {clientCount}+
                </motion.span>
              </div>
              <p className="text-blue-100">Klien Puas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">
                <motion.span
                  initial={{ count: 0 }}
                  animate={{ count: reportCount }}
                  transition={{ duration: 2, delay: 0.5 }}
                >
                  {reportCount}+
                </motion.span>
              </div>
              <p className="text-blue-100">Laporan Selesai</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">
                <motion.span
                  initial={{ count: 0 }}
                  animate={{ count: experienceCount }}
                  transition={{ duration: 2, delay: 1 }}
                >
                  {experienceCount}+
                </motion.span>
              </div>
              <p className="text-blue-100">Tahun Pengalaman</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Solusi pajak komprehensif untuk kebutuhan bisnis Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="cursor-pointer"
              >
                <Card className="h-full text-center group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <motion.div
                      className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-yellow-500 rounded-full flex items-center justify-center text-white mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Portofolio</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Hasil kerja kami untuk berbagai klien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="cursor-pointer"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-lg mb-4"></div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{item.category}</Badge>
                      <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Tentang NSY Tax Freelancer</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                NSY Tax Freelancer adalah tim profesional yang berdedikasi untuk memberikan solusi pajak terbaik 
                bagi UMKM hingga perusahaan korporasi. Dengan pengalaman lebih dari 8 tahun, kami telah 
                membantu ratusan klien dalam mengoptimalkan kewajiban perpajakan mereka.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Tim profesional berpengalaman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Layanan 24/7 untuk semua klien</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Teknologi terkini dan update regulasi</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg text-center"
                >
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback>TM{item}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Tim Member {item}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tax Consultant</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Siap Mengoptimalkan Pajak Anda?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi pajak terbaik untuk bisnis Anda
            </p>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-12 py-4 text-xl border-2 border-yellow-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hubungi Kami Sekarang
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog & Artikel</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Informasi terbaru seputar perpajakan dan tips bisnis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-t-lg"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Jawaban untuk pertanyaan yang sering diajukan
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Masih punya pertanyaan?
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Hubungi Kami
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Testimoni Klien</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Apa yang katakan klien kami tentang layanan kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300 italic">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Harga Layanan</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda
            </p>
            
            <div className="flex items-center justify-center space-x-4 mt-8">
              <span className={`text-lg ${activePricing === 'monthly' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
                Bulanan
              </span>
              <Switch
                checked={activePricing === 'yearly'}
                onCheckedChange={(checked) => setActivePricing(checked ? 'yearly' : 'monthly')}
              />
              <span className={`text-lg ${activePricing === 'yearly' ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}>
                Tahunan ( hemat 20% )
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`relative ${plan.highlighted ? 'transform scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-yellow-500 text-blue-900 px-4 py-2">Rekomendasi</Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.highlighted ? 'border-2 border-yellow-400 shadow-xl' : ''}`}>
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                      {plan.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        Rp {plan.price.toLocaleString('id-ID')}
                      </span>
                      <span className="text-gray-600 dark:text-gray-300">/{activePricing === 'monthly' ? 'bulan' : 'tahun'}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.highlighted ? 'bg-yellow-500 hover:bg-yellow-600 text-blue-900' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Pilih Paket
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                  NSY
                </div>
                <span className="text-xl font-bold">Tax Freelancer</span>
              </div>
              <p className="text-gray-400 mb-4">
                Solusi pajak profesional untuk bisnis Anda
              </p>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.instagram.com/nsy_tax?igsh=MTZzdzg5ZzZvaXV0MQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2">
                {['Konsultasi Pajak', 'Perhitungan Pajak', 'Pelaporan Pajak', 'Perencanaan Pajak'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2">
                {['Tentang Kami', 'Portofolio', 'Blog', 'Karir'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/62895340042060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>+62 895-3400-42060</span>
                </a>
                <a
                  href="mailto:nisyaaapratiwi@gmail.com"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>nisyaaapratiwi@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} NSY Tax Freelancer. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/62895340042060"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.a>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className="w-6 h-6 text-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Confetti Easter Egg */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: ['#fbbf24', '#3b82f6', '#10b981', '#f59e0b', '#ef4444'][Math.floor(Math.random() * 5)]
                }}
                initial={{ 
                  y: -50, 
                  x: Math.random() * 200 - 100,
                  rotate: 0 
                }}
                animate={{ 
                  y: window.innerHeight + 50, 
                  x: Math.random() * 400 - 200,
                  rotate: 360 
                }}
                transition={{ 
                  duration: 3 + Math.random() * 2,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}