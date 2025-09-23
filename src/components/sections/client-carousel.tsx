'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface Client {
  id: string
  name: string
  industry: string
  logo: string
  description: string
  since: string
}

interface ClientCarouselProps {
  className?: string
}

const clients: Client[] = [
  {
    id: '1',
    name: 'PT. Teknologi Maju',
    industry: 'Technology',
    logo: '/api/placeholder/120/60',
    description: 'Leading tech company specializing in SaaS solutions',
    since: '2020'
  },
  {
    id: '2',
    name: 'CV. Manufaktur Indonesia',
    industry: 'Manufacturing',
    logo: '/api/placeholder/120/60',
    description: 'Medium-sized manufacturing firm with nationwide distribution',
    since: '2019'
  },
  {
    id: '3',
    name: 'PT. Eksport Global',
    industry: 'Export/Import',
    logo: '/api/placeholder/120/60',
    description: 'International trading company focused on Southeast Asian markets',
    since: '2021'
  },
  {
    id: '4',
    name: 'UD. Retail Sukses',
    industry: 'Retail',
    logo: '/api/placeholder/120/60',
    description: 'Growing retail chain with multiple locations across Java',
    since: '2022'
  },
  {
    id: '5',
    name: 'PT. Konsultan Prima',
    industry: 'Consulting',
    logo: '/api/placeholder/120/60',
    description: 'Business consulting firm serving SMEs and startups',
    since: '2020'
  },
  {
    id: '6',
    name: 'CV. Logistik Cepat',
    industry: 'Logistics',
    logo: '/api/placeholder/120/60',
    description: 'Fast-growing logistics and transportation company',
    since: '2023'
  },
  {
    id: '7',
    name: 'PT. Finansial Solusi',
    industry: 'Financial Services',
    logo: '/api/placeholder/120/60',
    description: 'Financial services company providing innovative solutions',
    since: '2021'
  },
  {
    id: '8',
    name: 'CV. Kesehatan Nusantara',
    industry: 'Healthcare',
    logo: '/api/placeholder/120/60',
    description: 'Healthcare provider with multiple clinics across Indonesia',
    since: '2022'
  }
]

export function ClientCarousel({ className }: ClientCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)
  const [direction, setDirection] = React.useState<'left' | 'right'>('right')
  
  const itemsPerView = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4 // lg
      if (window.innerWidth >= 768) return 3 // md
      if (window.innerWidth >= 640) return 2 // sm
      return 1 // mobile
    }
    return 4 // default
  }, [])

  const maxIndex = Math.max(0, clients.length - itemsPerView)

  React.useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection('right')
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxIndex])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setDirection('right')
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setDirection('left')
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setDirection(index > currentIndex ? 'right' : 'left')
    setCurrentIndex(index)
  }

  return (
    <section className={cn('py-16 bg-white', className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Building2 className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              Klien & Mitra Kami
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami bangga telah bekerja sama dengan berbagai perusahaan terkemuka dan 
            membantu mereka mencapai kepatuhan pajak yang optimal
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border shadow-lg"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border shadow-lg"
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client.id}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer group border-0 bg-gradient-to-br from-gray-50 to-white hover:from-blue-50 hover:to-purple-50">
                    <CardContent className="p-6">
                      {/* Logo Section */}
                      <div className="flex items-center justify-center h-20 mb-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300 shadow-sm group-hover:shadow-md">
                        <motion.div 
                          className="text-2xl font-bold text-gray-400 group-hover:text-gray-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {client.name.charAt(0)}
                        </motion.div>
                      </div>
                      
                      {/* Client Info */}
                      <div className="text-center mb-3">
                        <h3 className="font-semibold text-base mb-1 line-clamp-1 group-hover:text-primary transition-colors">{client.name}</h3>
                        <Badge variant="secondary" className="text-xs mb-2 bg-blue-100 text-blue-800 group-hover:bg-blue-200 transition-colors">{client.industry}</Badge>
                        <p className="text-xs text-muted-foreground line-clamp-2">{client.description}</p>
                      </div>
                      
                      {/* Since Info */}
                      <div className="flex items-center justify-center text-xs text-muted-foreground">
                        <Building2 className="w-3 h-3 mr-1" />
                        Sejak {client.since}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === i 
                    ? 'bg-primary w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Klien Aktif', value: '150+', color: 'from-blue-500 to-blue-600' },
            { label: 'Kepuasan Klien', value: '98%', color: 'from-green-500 to-green-600' },
            { label: 'Tahun Pengalaman', value: '5+', color: 'from-purple-500 to-purple-600' },
            { label: 'Proyek Selesai', value: '500+', color: 'from-orange-500 to-orange-600' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} text-white mb-3`}>
                <span className="text-lg font-bold">{stat.value.charAt(0)}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}