import * as React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { 
  ArrowLeft, 
  Users, 
  TrendingUp,
  Calculator,
  FileText,
  Award,
  Star
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { cn } from '@/lib/utils'
import { servicesData, ServiceDetail } from './services-data'
import { ServiceActions, PricingCard, CTASection } from './service-actions'

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
          <div className="max-w-4xl mx-auto text-center">
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
              <ServiceActions serviceName={service.title} />
              
              <Link href="/#layanan">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Kembali ke Layanan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Full Description */}
        <section>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Tentang Layanan</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Fitur Utama</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">{feature}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted/50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Keuntungan Menggunakan Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3"
              >
                <Award className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Proses Kerja</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <p className="text-sm font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section>
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
                  <PricingCard 
                    planName={plan.name} 
                    serviceName={service.title}
                    highlighted={plan.highlighted}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
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
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl p-8">
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
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Siap Memulai?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi perpajakan terbaik untuk bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTASection serviceName={service.title} />
              <Link href="/#layanan">
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white hover:bg-white hover:text-primary h-10 px-4 py-2">
                  Lihat Layanan Lain
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <WhatsAppWidget />
    </div>
  )
}