'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ContactSection } from '@/components/sections/contact-section'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'

export default function ContactPage() {
  const breadcrumbs = [
    { label: 'Beranda', href: '/' },
    { label: 'Kontak', href: '/kontak', isCurrent: true }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={breadcrumbs} />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hubungi Kami
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Siap membantu Anda dengan solusi perpajakan terbaik untuk bisnis. 
              Jangan ragu untuk menghubungi tim ahli kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}