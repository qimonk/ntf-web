import * as React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  CheckCircle, 
  Clock, 
  Users, 
  Star, 
  TrendingUp,
  Calculator,
  FileText,
  Shield,
  Award,
  MessageCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { cn } from '@/lib/utils'
import { servicesData, ServiceDetail } from './services-data'

// Icon mapping
const iconComponents = {
  Users: <Users className="w-8 h-8" />,
  Calculator: <Calculator className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />
}

// Generate static params for all services
export async function generateStaticParams() {
  return Object.keys(servicesData).map((serviceId) => ({
    id: serviceId,
  }))
}

interface ServiceDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { id } = await params
  const service = servicesData[id]

  if (!service) {
    notFound()
  }

  const breadcrumbs = [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '/#layanan' },
    { label: service.title, href: `/layanan/${id}`, isCurrent: true }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className={cn(
                'w-20 h-20 rounded-2xl flex items-center justify-center text-white',
                service.color
              )}>
                {iconComponents[service.icon as keyof typeof iconComponents]}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() => {
                  const message = `Halo, saya tertarik dengan layanan ${service.title}`
                  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                }}
              >
                Konsultasi Sekarang
                <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
              
              <Link href="/#layanan">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Kembali ke Layanan
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Full Description */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Tentang Layanan</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
        </motion.section>

        {/* Features */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{feature}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-muted/50 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Keuntungan Menggunakan Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Proses Kerja</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <p className="text-sm font-medium">{step}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Harga Layanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Basic', price: service.pricing.basic, description: 'Untuk kebutuhan dasar' },
              { name: 'Professional', price: service.pricing.professional, description: 'Untuk bisnis yang sedang berkembang', highlighted: true },
              { name: 'Enterprise', price: service.pricing.enterprise, description: 'Untuk perusahaan besar' }
            ].map((plan, index) => (
              <Card key={plan.name} className={cn(
                'h-full transition-all duration-300 hover:shadow-xl',
                plan.highlighted && 'border-2 border-primary shadow-lg'
              )}>
                <CardHeader className={cn(
                  'text-center',
                  plan.highlighted && 'bg-primary/5'
                )}>
                  <CardTitle className={cn(
                    'text-xl',
                    plan.highlighted && 'text-primary'
                  )}>
                    {plan.name}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-3xl font-bold mt-4">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    /bulan
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <Button 
                    className={cn(
                      'w-full',
                      plan.highlighted 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/80'
                    )}
                    onClick={() => {
                      const message = `Halo, saya tertarik dengan paket ${plan.name} untuk layanan ${service.title}`
                      const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
                      window.open(whatsappUrl, '_blank')
                    }}
                  >
                    Pilih {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Pertanyaan Umum</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {service.faqs.map((faq, index) => (
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
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Apa Kata Mereka</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={cn(
                          'w-5 h-5',
                          i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                        )} 
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Siap Memulai?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi perpajakan terbaik untuk bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  const message = `Halo, saya tertarik dengan layanan ${service.title}`
                  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`
                  window.open(whatsappUrl, '_blank')
                }}
              >
                Hubungi Kami
                <MessageCircle className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/#layanan">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Lihat Layanan Lain
                </Button>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>

      <WhatsAppWidget />
    </div>
  )
}