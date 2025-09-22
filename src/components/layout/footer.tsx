'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const [email, setEmail] = React.useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert('Terima kasih telah berlangganan newsletter kami!')
    setEmail('')
  }

  const footerLinks = {
    Layanan: [
      { name: 'Konsultasi Pajak', href: '/layanan/konsultasi-pajak' },
      { name: 'Perhitungan Pajak', href: '/layanan/perhitungan-pajak' },
      { name: 'Laporan Pajak', href: '/layanan/laporan-pajak' },
      { name: 'Perencanaan Pajak', href: '/layanan/perencanaan-pajak' }
    ],
    Perusahaan: [
      { name: 'Tentang Kami', href: '/tentang' },
      { name: 'Tim Kami', href: '/tim' },
      { name: 'Karir', href: '/karir' },
      { name: 'Blog', href: '/blog' }
    ],
    Legal: [
      { name: 'Kebijakan Privasi', href: '/privasi' },
      { name: 'Syarat & Ketentuan', href: '/syarat' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Cookie Policy', href: '/cookie' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' }
  ]

  const contactInfo = [
    { icon: MapPin, text: 'Jl. Sudirman No. 123, Jakarta Selatan 12190' },
    { icon: Phone, text: '+62 21 1234 5678' },
    { icon: Mail, text: 'info@nsytaxfreelancer.com' },
    { icon: Clock, text: 'Senin - Jumat: 09:00 - 18:00' }
  ]

  return (
    <footer className={cn('bg-background border-t', className)}>
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dapatkan Update Terbaru Seputar Pajak
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe newsletter kami dan dapatkan tips pajak, update regulasi, dan penawaran special
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Email Anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button 
                type="submit"
                className="bg-white text-blue-600 hover:bg-white/90"
              >
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">
                  NSY
                </div>
                <span className="text-xl font-bold">Tax Freelancer</span>
              </Link>
              
              <p className="text-muted-foreground mb-6">
                Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda. 
                Dapatkan solusi perpajakan terbaik dengan tim ahli berpengalaman.
              </p>

              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <info.icon className="w-4 h-4 mr-3 text-primary" />
                    {info.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Social & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={cn(
                      'w-10 h-10 rounded-full bg-muted flex items-center justify-center',
                      'hover:bg-primary hover:text-white transition-colors',
                      social.color
                    )}
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Butuh Bantuan Cepat?</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Tim kami siap membantu Anda 24/7
                </p>
                <Button 
                  className="w-full"
                  onClick={() => {
                    const message = 'Halo, saya butuh bantuan'
                    const whatsappUrl = `https://wa.me/62895340042060?text=${encodeURIComponent(message)}`
                    window.open(whatsappUrl, '_blank')
                  }}
                >
                  Chat via WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t py-6">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="text-sm text-muted-foreground">
              © 2024 NSY Tax Freelancer. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Made with ❤️ by NSY Team</span>
              <span>•</span>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}