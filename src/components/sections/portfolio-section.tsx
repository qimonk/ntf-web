'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Filter, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  year: string
  images: string[]
  tags: string[]
}

interface PortfolioSectionProps {
  className?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Tax Optimization for Tech Startup',
    description: 'Comprehensive tax planning and optimization for a Series A tech startup',
    category: 'Tax Planning',
    year: '2024',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    tags: ['Startup', 'Tax Planning', 'Optimization']
  },
  {
    id: '2',
    title: 'Annual Tax Compliance - Manufacturing Company',
    description: 'Complete annual tax filing and compliance for medium-sized manufacturing firm',
    category: 'Tax Compliance',
    year: '2024',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    tags: ['Manufacturing', 'Compliance', 'Annual Filing']
  },
  {
    id: '3',
    title: 'VAT Refund Processing - Export Company',
    description: 'Successful VAT refund processing for export-oriented company',
    category: 'VAT Services',
    year: '2023',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    tags: ['VAT', 'Export', 'Refund']
  },
  {
    id: '4',
    title: 'Transfer Pricing Documentation',
    description: 'Complete transfer pricing documentation for multinational corporation',
    category: 'Transfer Pricing',
    year: '2023',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    tags: ['Transfer Pricing', 'MNC', 'Documentation']
  },
  {
    id: '5',
    title: 'Tax Audit Assistance',
    description: 'Professional assistance during tax audit for retail company',
    category: 'Tax Audit',
    year: '2024',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    tags: ['Tax Audit', 'Retail', 'Assistance']
  },
  {
    id: '6',
    title: 'Tax Training Program',
    description: 'Comprehensive tax training program for corporate finance team',
    category: 'Training',
    year: '2023',
    images: ['/api/placeholder/400/300', '/api/placeholder/400/300'],
    tags: ['Training', 'Corporate', 'Education']
  }
]

const categories = ['All', 'Tax Planning', 'Tax Compliance', 'VAT Services', 'Transfer Pricing', 'Tax Audit', 'Training']

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden">
            <div className="relative overflow-hidden h-48">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-6xl font-bold text-blue-200/50">{item.title.charAt(0)}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Badge variant="secondary" className="mb-2">{item.category}</Badge>
                <h3 className="text-white font-semibold text-sm">{item.title}</h3>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  <Calendar className="w-3 h-3 mr-1" />
                  {item.year}
                </Badge>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </DialogTrigger>
        
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              {item.title}
              <Badge variant="secondary">{item.category}</Badge>
            </DialogTitle>
            <DialogDescription>
              {item.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Image Carousel */}
            <div className="relative overflow-hidden rounded-lg h-64 bg-gradient-to-br from-blue-100 to-purple-100">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-8xl font-bold text-blue-200/50">{item.title.charAt(0)}</div>
              </div>
              
              {/* Image Navigation */}
              {item.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {item.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        currentImageIndex === idx ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button className="flex-1">
                View Case Study
              </Button>
              <Button variant="outline">
                Download Report
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

export function PortfolioSection({ className }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = React.useState('All')
  
  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portofolio" className={cn('py-20 bg-muted/50', className)}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Portofolio Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berhasil membantu berbagai perusahaan dalam menyelesaikan permasalahan perpajakan
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">Tidak ada portofolio untuk kategori ini</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}