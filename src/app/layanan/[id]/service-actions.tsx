'use client'

import * as React from 'react'
import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServiceActionsProps {
  serviceName: string
}

export function ServiceActions({ serviceName }: ServiceActionsProps) {
  const handleWhatsAppClick = (message: string) => {
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        onClick={() => handleWhatsAppClick(`Halo, saya tertarik dengan layanan ${serviceName}`)}
      >
        Konsultasi Sekarang
        <MessageCircle className="ml-2 w-5 h-5" />
      </Button>
    </div>
  )
}

interface PricingCardProps {
  planName: string
  serviceName: string
  highlighted?: boolean
}

export function PricingCard({ planName, serviceName, highlighted = false }: PricingCardProps) {
  const handleWhatsAppClick = (message: string) => {
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Button 
      className={`w-full ${highlighted ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}
      onClick={() => handleWhatsAppClick(`Halo, saya tertarik dengan paket ${planName} untuk layanan ${serviceName}`)}
    >
      Pilih {planName}
    </Button>
  )
}

interface CTASectionProps {
  serviceName: string
}

export function CTASection({ serviceName }: CTASectionProps) {
  const handleWhatsAppClick = (message: string) => {
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        size="lg"
        variant="secondary"
        className="bg-white text-primary hover:bg-white/90"
        onClick={() => handleWhatsAppClick(`Halo, saya tertarik dengan layanan ${serviceName}`)}
      >
        Hubungi Kami
        <MessageCircle className="ml-2 w-5 h-5" />
      </Button>
    </div>
  )
}