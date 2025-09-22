'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { PricingSection } from '@/components/sections/pricing-section'
import { BlogSection } from '@/components/sections/blog-section'
import { ContactSection } from '@/components/sections/contact-section'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>
      
      {/* Portfolio Section */}
      <ScrollReveal>
        <PortfolioSection />
      </ScrollReveal>
      
      {/* Pricing Section */}
      <ScrollReveal>
        <PricingSection />
      </ScrollReveal>
      
      {/* Blog Section */}
      <ScrollReveal>
        <BlogSection />
      </ScrollReveal>
      
      {/* Contact Section */}
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>
      
      {/* Smooth Scroll */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}