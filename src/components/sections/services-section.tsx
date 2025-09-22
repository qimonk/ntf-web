'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Calculator, FileText, TrendingUp, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: React.ReactNode
  color: string
  features: string[]
  index: number
}

function ServiceCard({ title, description, href, icon, color, features, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className={cn(
        'h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer',
        'border-2 border-transparent hover:border-primary/20'
      )}>
        <Link href={href}>
          <CardHeader>
            <div className={cn(
              'w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300',
              color
            )}>
              {icon}
            </div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-base">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 mb-6">
              {features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
              Detail Layanan
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  )
}

interface ServicesSectionProps {
  className?: string
}

export function ServicesSection({ className }: ServicesSectionProps) {
  const services = [
    {
      title: 'Konsultasi Pajak',
      description: 'Konsultasi profesional untuk semua kebutuhan perpajakan Anda',
      href: '/layanan/konsultasi-pajak',
      icon: <Users className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-blue-600 to-blue-800',
      features: [
        'Konsultasi pajak pribadi dan perusahaan',
        'Analisis compliance perpajakan',
        'Strategi optimasi pajak legal'
      ]
    },
    {
      title: 'Perhitungan Pajak',
      description: 'Perhitungan akurat dengan sistem terkini',
      href: '/layanan/perhitungan-pajak',
      icon: <Calculator className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-green-600 to-green-800',
      features: [
        'Perhitungan PPh 21, 23, 25, 29',
        'Perhitungan PPN dan PPnBM',
        'Sistem perhitungan otomatis'
      ]
    },
    {
      title: 'Laporan Pajak',
      description: 'Pelaporan tepat waktu dan sesuai regulasi',
      href: '/layanan/laporan-pajak',
      icon: <FileText className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-purple-600 to-purple-800',
      features: [
        'Pelaporan SPT Masa (PPh, PPN)',
        'Pelaporan SPT Tahunan',
        'E-filing dan e-registration'
      ]
    },
    {
      title: 'Perencanaan Pajak',
      description: 'Strategi pajak optimal untuk bisnis Anda',
      href: '/layanan/perencanaan-pajak',
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: 'bg-gradient-to-br from-orange-600 to-orange-800',
      features: [
        'Tax planning untuk startup',
        'Restrukturisasi perpajakan',
        'Tax incentive optimization'
      ]
    }
  ]

  return (
    <section id="layanan" className={cn('py-20 bg-background', className)}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi perpajakan komprehensif untuk memenuhi semua kebutuhan bisnis Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => document.querySelector('#kontak')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Konsultasi Sekarang
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}