import * as React from 'react'
import { motion } from 'framer-motion'
import { BlogSection } from '@/components/sections/blog-section'
import { Breadcrumbs } from '@/components/layout/breadcrumbs'

export default function BlogPage() {
  const breadcrumbs = [
    { label: 'Beranda', href: '/' },
    { label: 'Blog', href: '/blog', isCurrent: true }
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
              Blog & Artikel
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Update terbaru seputar perpajakan, tips bisnis, dan informasi berguna 
              untuk mendukung keputusan finansial Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />
    </div>
  )
}