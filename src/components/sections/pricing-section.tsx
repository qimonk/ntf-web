'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'

interface PricingPlan {
  name: string
  description: string
  price: {
    monthly: string
    yearly: string
  }
  features: string[]
  highlighted?: boolean
  popular?: boolean
  cta: string
}

interface PricingSectionProps {
  className?: string
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    description: 'Untuk kebutuhan dasar',
    price: {
      monthly: 'Rp 299.000',
      yearly: 'Rp 2.990.000'
    },
    features: [
      'Konsultasi pajak dasar',
      'Perhitungan pajak sederhana',
      '1 laporan pajak/bulan',
      'Email support',
      'Akses ke basic templates'
    ],
    cta: 'Pilih Basic'
  },
  {
    name: 'Professional',
    description: 'Untuk bisnis yang sedang berkembang',
    price: {
      monthly: 'Rp 599.000',
      yearly: 'Rp 5.990.000'
    },
    highlighted: true,
    popular: true,
    features: [
      'Semua fitur Basic',
      'Konsultasi pajak lanjutan',
      'Perhitungan pajak kompleks',
      '5 laporan pajak/bulan',
      'Priority email & chat support',
      'Akses ke premium templates',
      'Monthly tax review',
      'Tax optimization tips'
    ],
    cta: 'Pilih Professional'
  },
  {
    name: 'Enterprise',
    description: 'Untuk perusahaan besar',
    price: {
      monthly: 'Rp 1.299.000',
      yearly: 'Rp 12.990.000'
    },
    features: [
      'Semua fitur Professional',
      'Konsultasi pajak unlimited',
      'Perhitungan pajak kompleks',
      'Unlimited laporan pajak',
      '24/7 dedicated support',
      'Custom tax solutions',
      'Tax audit assistance',
      'Transfer pricing documentation',
      'On-site consultation',
      'Account manager'
    ],
    cta: 'Pilih Enterprise'
  }
]

function PricingCard({ plan, index, isYearly }: { plan: PricingPlan; index: number; isYearly: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        'relative',
        plan.highlighted && 'md:scale-105 md:z-10'
      )}
    >
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
          <Star className="w-3 h-3 mr-1" />
          Paling Populer
        </Badge>
      )}
      
      <Card className={cn(
        'h-full transition-all duration-300 hover:shadow-xl',
        plan.highlighted 
          ? 'border-2 border-primary shadow-lg' 
          : 'border-border'
      )}>
        <CardHeader className={cn(
          'text-center',
          plan.highlighted && 'bg-primary/5 rounded-t-lg'
        )}>
          <CardTitle className={cn(
            'text-2xl',
            plan.highlighted && 'text-primary'
          )}>
            {plan.name}
          </CardTitle>
          <CardDescription>{plan.description}</CardDescription>
          
          <div className="mt-6">
            <div className="text-4xl font-bold">
              {isYearly ? plan.price.yearly : plan.price.monthly}
            </div>
            <div className="text-sm text-muted-foreground">
              /{isYearly ? 'tahun' : 'bulan'}
            </div>
            {isYearly && (
              <div className="text-xs text-green-600 mt-1">
                Hemat 2 bulan!
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="p-6">
          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            className={cn(
              'w-full transition-all duration-300 hover:scale-105',
              plan.highlighted 
                ? 'bg-primary hover:bg-primary/90' 
                : 'bg-secondary hover:bg-secondary/80'
            )}
            onClick={() => {
              // Open WhatsApp
              const message = `Halo, saya tertarik dengan paket ${plan.name}`
              const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
              window.open(whatsappUrl, '_blank')
            }}
          >
            {plan.cta}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function PricingSection({ className }: PricingSectionProps) {
  const [isYearly, setIsYearly] = React.useState(false)

  return (
    <section id="harga" className={cn('py-20 bg-background', className)}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Harga Layanan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={cn(
              'text-sm font-medium',
              !isYearly ? 'text-foreground' : 'text-muted-foreground'
            )}>
              Bulanan
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            <span className={cn(
              'text-sm font-medium flex items-center gap-1',
              isYearly ? 'text-foreground' : 'text-muted-foreground'
            )}>
              Tahunan
              <Badge variant="secondary" className="text-xs">
                Hemat 17%
              </Badge>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              isYearly={isYearly}
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
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">
              Butuh Paket Kustom?
            </h3>
            <p className="text-muted-foreground mb-4">
              Kami juga menyediakan paket kustom yang disesuaikan dengan kebutuhan spesifik bisnis Anda
            </p>
            <Button
              variant="outline"
              onClick={() => {
                const message = 'Halo, saya tertarik dengan paket kustom'
                const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
                window.open(whatsappUrl, '_blank')
              }}
            >
              Hubungi Kami
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}