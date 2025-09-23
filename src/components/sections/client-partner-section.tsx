'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Award, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ClientPartner {
  id: string
  name: string
  industry: string
  logo: string
  description: string
  since: string
}

interface TeamMember {
  id: string
  name: string
  position: string
  expertise: string[]
  photo: string
  experience: string
}

interface ClientPartnerSectionProps {
  className?: string
}

const clientPartners: ClientPartner[] = [
  {
    id: '1',
    name: 'PT. Teknologi Maju',
    industry: 'Technology',
    logo: '/api/placeholder/120/60',
    description: 'Leading tech company specializing in SaaS solutions',
    since: '2020'
  },
  {
    id: '2',
    name: 'CV. Manufaktur Indonesia',
    industry: 'Manufacturing',
    logo: '/api/placeholder/120/60',
    description: 'Medium-sized manufacturing firm with nationwide distribution',
    since: '2019'
  },
  {
    id: '3',
    name: 'PT. Eksport Global',
    industry: 'Export/Import',
    logo: '/api/placeholder/120/60',
    description: 'International trading company focused on Southeast Asian markets',
    since: '2021'
  },
  {
    id: '4',
    name: 'UD. Retail Sukses',
    industry: 'Retail',
    logo: '/api/placeholder/120/60',
    description: 'Growing retail chain with multiple locations across Java',
    since: '2022'
  },
  {
    id: '5',
    name: 'PT. Konsultan Prima',
    industry: 'Consulting',
    logo: '/api/placeholder/120/60',
    description: 'Business consulting firm serving SMEs and startups',
    since: '2020'
  },
  {
    id: '6',
    name: 'CV. Logistik Cepat',
    industry: 'Logistics',
    logo: '/api/placeholder/120/60',
    description: 'Fast-growing logistics and transportation company',
    since: '2023'
  }
]

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ahmad Wijaya, B.Sc., Ak.',
    position: 'Senior Tax Consultant',
    expertise: ['Tax Planning', 'Transfer Pricing', 'Tax Audit'],
    photo: '/api/placeholder/150/150',
    experience: '15+ years'
  },
  {
    id: '2',
    name: 'Siti Nurhaliza, SE., M.Ak.',
    position: 'Tax Compliance Manager',
    expertise: ['Tax Compliance', 'VAT Services', 'Annual Filing'],
    photo: '/api/placeholder/150/150',
    experience: '12+ years'
  },
  {
    id: '3',
    name: 'Budi Santoso, SE., Ak., CA.',
    position: 'Director of Tax Services',
    expertise: ['Strategic Tax Planning', 'Corporate Tax', 'International Tax'],
    photo: '/api/placeholder/150/150',
    experience: '20+ years'
  },
  {
    id: '4',
    name: 'Maya Putri, SE.',
    position: 'Tax Associate',
    expertise: ['Tax Administration', 'Bookkeeping', 'Tax Reporting'],
    photo: '/api/placeholder/150/150',
    experience: '8+ years'
  }
]

function ClientCard({ client, index }: { client: ClientPartner; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          {/* Logo Section */}
          <div className="flex items-center justify-center h-20 mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4">
            <div className="text-2xl font-bold text-gray-400">{client.name.charAt(0)}</div>
          </div>
          
          {/* Client Info */}
          <div className="text-center mb-4">
            <h3 className="font-semibold text-lg mb-1">{client.name}</h3>
            <Badge variant="secondary" className="mb-2">{client.industry}</Badge>
            <p className="text-sm text-muted-foreground">{client.description}</p>
          </div>
          
          {/* Since Info */}
          <div className="flex items-center justify-center text-sm text-muted-foreground">
            <Building2 className="w-4 h-4 mr-1" />
            Klien sejak {client.since}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden border-0 bg-white/80 backdrop-blur-sm">
        <CardContent className="p-6">
          {/* Photo Section */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center overflow-hidden">
                <div className="text-2xl font-bold text-blue-200/50">{member.name.charAt(0)}</div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                <Star className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
          
          {/* Member Info */}
          <div className="text-center mb-4">
            <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
            <p className="text-sm text-primary font-medium mb-1">{member.position}</p>
            <p className="text-xs text-muted-foreground">{member.experience} experience</p>
          </div>
          
          {/* Expertise */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">Keahlian:</p>
            <div className="flex flex-wrap gap-1">
              {member.expertise.map((skill, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function ClientPartnerSection({ className }: ClientPartnerSectionProps) {
  return (
    <section className={cn('py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50', className)}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Building2 className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Klien & Mitra Kami
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami bangga telah bekerja sama dengan berbagai perusahaan terkemuka dan 
            membantu mereka mencapai kepatuhan pajak yang optimal
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">150+</div>
              <p className="text-sm text-muted-foreground">Klien Aktif</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <p className="text-sm text-muted-foreground">Kepuasan Klien</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
            </div>
          </div>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold">Klien Langganan</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientPartners.map((client, index) => (
              <ClientCard
                key={client.id}
                client={client}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-8">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold">Tim Profesional Kami</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              <Award className="w-5 h-5 mr-2" />
              Hubungi Tim Kami
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}