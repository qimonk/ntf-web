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
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              NSY Tax Freelancer
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Solusi perpajakan profesional untuk bisnis Anda. Konsultasi, perhitungan, dan pelaporan pajak dengan ahli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Lihat Portofolio
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-3 text-lg"
              >
                Hubungi Kami
              </Button>
            </div>
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
      <section ref={servicesRef} className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Solusi perpajakan komprehensif untuk kebutuhan bisnis Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Siap untuk Memulai?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Hubungi kami sekarang untuk konsultasi gratis dan temukan solusi pajak terbaik untuk bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-12 py-4 text-xl"
              >
                Hubungi Kami Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-12 py-4 text-xl"
              >
                Lihat Layanan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                  NSY
                </div>
                <span className="text-xl font-bold">Tax Freelancer</span>
              </div>
              <p className="text-gray-400">
                Solusi perpajakan profesional untuk bisnis Anda.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Konsultasi Pajak</a></li>
                <li><a href="#" className="hover:text-white">Perhitungan Pajak</a></li>
                <li><a href="#" className="hover:text-white">Pelaporan Pajak</a></li>
                <li><a href="#" className="hover:text-white">Perencanaan Pajak</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+62 895-3400-42060</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>nisyaaapratiwi@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Instagram className="w-4 h-4" />
                  <span>@nsy_tax</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Ikuti Kami</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NSY Tax Freelancer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}