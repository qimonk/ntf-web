'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

interface ContactSectionProps {
  className?: string
}

export function ContactSection({ className }: ContactSectionProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespon pesan Anda.",
    })

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      details: [
        'Jl. Sudirman No. 123',
        'Jakarta Selatan 12190',
        'Indonesia'
      ]
    },
    {
      icon: Phone,
      title: 'Telepon',
      details: [
        '+62 21 1234 5678',
        '+62 812 3456 7890'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@nsytaxfreelancer.com',
        'support@nsytaxfreelancer.com'
      ]
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: [
        'Senin - Jumat: 09:00 - 18:00',
        'Sabtu: 09:00 - 15:00',
        'Minggu & Hari Libur: Tutup'
      ]
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: [
        '+62 895-3400-42060'
      ]
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: [
        '@nsy_tax'
      ]
    }
  ]

  return (
    <section id="kontak" className={cn('py-20 bg-background', className)}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hubungi Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siap membantu Anda dengan solusi perpajakan terbaik untuk bisnis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Kirim Pesan
                </CardTitle>
                <CardDescription>
                  Isi formulir di bawah ini dan kami akan segera menghubungi Anda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">No. Telepon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+62 812 3456 7890"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Perusahaan</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="PT. Example"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Pesan *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Jelaskan kebutuhan perpajakan Anda..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={info.title} className="border-l-4 border-l-primary contact-card">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-primary social-icon" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => {
                            // Make WhatsApp and Instagram clickable
                            if (info.title === 'WhatsApp') {
                              return (
                                <a 
                                  key={idx}
                                  href={`https://wa.me/62895340042060`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block contact-link"
                                >
                                  {detail}
                                </a>
                              );
                            } else if (info.title === 'Instagram') {
                              return (
                                <a 
                                  key={idx}
                                  href="https://www.instagram.com/nsy_tax"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block contact-link"
                                >
                                  {detail}
                                </a>
                              );
                            } else {
                              return (
                                <p key={idx} className="text-sm text-muted-foreground">
                                  {detail}
                                </p>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps Embed */}
            <Card>
              <CardHeader>
                <CardTitle>Lokasi Kantor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2690348496324!2d106.82295131477122!3d-6.229732995492592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e5399f%3A0x5341a0d5e1e0d8e!2sJakarta!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps - NSY Tax Freelancer Location"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Butuh Bantuan Cepat?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start"
                  onClick={() => {
                    const message = 'Halo, saya butuh konsultasi pajak segera'
                    const whatsappUrl = `https://wa.me/62895340042060?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, '_blank')
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Chat via WhatsApp
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Kami
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => {
                    window.open('https://www.instagram.com/nsy_tax', '_blank')
                  }}
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Follow Instagram
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}