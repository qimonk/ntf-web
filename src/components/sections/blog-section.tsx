'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Share2, Heart, MessageCircle } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  slug: string
  featured: boolean
  likes: number
  comments: number
}

interface BlogSectionProps {
  className?: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Pentingnya Perencanaan Pajak untuk Startup Teknologi',
    excerpt: 'Bagaimana startup teknologi dapat mengoptimalkan strategi perpajakan untuk mendukung pertumbuhan bisnis...',
    content: 'Konten lengkap artikel tentang perencanaan pajak untuk startup teknologi...',
    author: 'Ahmad Wijaya, S.E., Ak.',
    date: '15 September 2024',
    readTime: '5 min read',
    category: 'Tax Planning',
    tags: ['Startup', 'Teknologi', 'Tax Planning'],
    slug: 'perencanaan-pajak-startup-teknologi',
    featured: true,
    likes: 45,
    comments: 12
  },
  {
    id: '2',
    title: 'Update Regulasi PPN 2024: Yang Perlu Diketahui Pebisnis',
    excerpt: 'Ringkasan perubahan regulasi PPN terbaru dan dampaknya terhadap operasional bisnis...',
    content: 'Konten lengkap artikel tentang update regulasi PPN 2024...',
    author: 'Siti Nurhaliza, S.E., M.Si.',
    date: '10 September 2024',
    readTime: '7 min read',
    category: 'Regulasi',
    tags: ['PPN', 'Regulasi', '2024'],
    slug: 'update-regulasi-ppn-2024',
    featured: false,
    likes: 32,
    comments: 8
  },
  {
    id: '3',
    title: 'Strategi Efisiensi Pajak untuk UMKM',
    excerpt: 'Tips dan trik untuk UMKM dalam mengelola pajak secara efisien dan compliant...',
    content: 'Konten lengkap artikel tentang efisiensi pajak untuk UMKM...',
    author: 'Budi Santoso, S.E., Ak.',
    date: '5 September 2024',
    readTime: '4 min read',
    category: 'UMKM',
    tags: ['UMKM', 'Efisiensi Pajak', 'Tips'],
    slug: 'strategi-efisiensi-pajak-umkm',
    featured: false,
    likes: 28,
    comments: 5
  },
  {
    id: '4',
    title: 'Tax Audit: Persiapan dan Strategi Menghadapinya',
    excerpt: 'Panduan lengkap dalam mempersiapkan diri menghadapi pemeriksaan pajak...',
    content: 'Konten lengkap artikel tentang tax audit...',
    author: 'Dewi Lestari, S.E., Ak.',
    date: '1 September 2024',
    readTime: '8 min read',
    category: 'Tax Audit',
    tags: ['Tax Audit', 'Pemeriksaan', 'Strategi'],
    slug: 'tax-audit-persiapan-strategi',
    featured: true,
    likes: 67,
    comments: 15
  },
  {
    id: '5',
    title: 'Transfer Pricing: Panduan untuk Perusahaan Multinasional',
    excerpt: 'Memahami konsep transfer pricing dan implementasinya di Indonesia...',
    content: 'Konten lengkap artikel tentang transfer pricing...',
    author: 'Rizky Pratama, S.E., M.Si.',
    date: '28 Agustus 2024',
    readTime: '10 min read',
    category: 'Transfer Pricing',
    tags: ['Transfer Pricing', 'MNC', 'Internasional'],
    slug: 'transfer-pricing-panduan-mnc',
    featured: false,
    likes: 41,
    comments: 9
  },
  {
    id: '6',
    title: 'Digitalisasi Pelaporan Pajak: Manfaat dan Tantangan',
    excerpt: 'Bagaimana teknologi digital mengubah cara pelaporan pajak di Indonesia...',
    content: 'Konten lengkap artikel tentang digitalisasi pelaporan pajak...',
    author: 'Maya Putri, S.E., Ak.',
    date: '25 Agustus 2024',
    readTime: '6 min read',
    category: 'Digitalisasi',
    tags: ['Digitalisasi', 'Pelaporan', 'Teknologi'],
    slug: 'digitalisasi-pelaporan-pajak',
    featured: false,
    likes: 38,
    comments: 11
  }
]

const categories = ['Semua', 'Tax Planning', 'Regulasi', 'UMKM', 'Tax Audit', 'Transfer Pricing', 'Digitalisasi']

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [isLiked, setIsLiked] = React.useState(false)
  const [likeCount, setLikeCount] = React.useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: `/blog/${post.slug}`
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback: copy to clipboard
      const url = `${window.location.origin}/blog/${post.slug}`
      await navigator.clipboard.writeText(url)
      alert('Link artikel disalin ke clipboard!')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
        <Link href={`/blog/${post.slug}`}>
          <div className="relative overflow-hidden h-48">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-6xl font-bold text-blue-200/50">{post.title.charAt(0)}</div>
            </div>
            {post.featured && (
              <Badge className="absolute top-4 left-4">
                Featured
              </Badge>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </Link>
        
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="w-3 h-3 mr-1" />
              {post.date}
            </div>
          </div>
          
          <CardTitle className="text-xl group-hover:text-primary transition-colors">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </CardTitle>
          
          <CardDescription className="line-clamp-2">
            {post.excerpt}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <User className="w-3 h-3 mr-1" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <Link href={`/blog/${post.slug}`}>
              <Button variant="outline" size="sm">
                Baca Selengkapnya
              </Button>
            </Link>
            
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={isLiked ? 'text-red-500' : ''}
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span className="ml-1 text-xs">{likeCount}</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
              >
                <Share2 className="w-4 h-4" />
              </Button>
              
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-4 h-4" />
                <span className="ml-1 text-xs">{post.comments}</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function BlogSection({ className }: BlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = React.useState('Semua')
  
  const filteredPosts = selectedCategory === 'Semua' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <section id="blog" className={cn('py-20 bg-muted/50', className)}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Blog & Artikel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Update terbaru seputar perpajakan dan tips untuk bisnis Anda
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-semibold mb-6">Artikel Unggulan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link href="/blog">
              Lihat Semua Artikel
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}