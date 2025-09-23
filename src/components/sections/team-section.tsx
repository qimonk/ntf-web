'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Briefcase, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface TeamMember {
  id: string
  name: string
  position: string
  expertise: string[]
  photo: string
  experience: string
  bio: string
  achievements: string[]
}

interface TeamSectionProps {
  className?: string
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ahmad Wijaya, B.Sc., Ak.',
    position: 'Senior Tax Consultant',
    expertise: ['Tax Planning', 'Transfer Pricing', 'Tax Audit'],
    photo: '/api/placeholder/150/150',
    experience: '15+ years',
    bio: 'Ahmad adalah konsultan pajak senior dengan pengalaman luas dalam perpajakan perusahaan dan transfer pricing.',
    achievements: ['Certified Tax Consultant', 'Transfer Pricing Expert', 'Tax Audit Specialist']
  },
  {
    id: '2',
    name: 'Siti Nurhaliza, SE., M.Ak.',
    position: 'Tax Compliance Manager',
    expertise: ['Tax Compliance', 'VAT Services', 'Annual Filing'],
    photo: '/api/placeholder/150/150',
    experience: '12+ years',
    bio: 'Siti memimpin tim compliance dan memastikan semua klien memenuhi kewajiban perpajakan tepat waktu.',
    achievements: ['Master of Accounting', 'Compliance Expert', 'VAT Specialist']
  },
  {
    id: '3',
    name: 'Budi Santoso, SE., Ak., CA.',
    position: 'Director of Tax Services',
    expertise: ['Strategic Tax Planning', 'Corporate Tax', 'International Tax'],
    photo: '/api/placeholder/150/150',
    experience: '20+ years',
    bio: 'Budi adalah direktur layanan pajak dengan visi untuk memberikan solusi pajak yang strategis bagi klien.',
    achievements: ['Chartered Accountant', 'Tax Director', 'International Tax Expert']
  },
  {
    id: '4',
    name: 'Maya Putri, SE.',
    position: 'Tax Associate',
    expertise: ['Tax Administration', 'Bookkeeping', 'Tax Reporting'],
    photo: '/api/placeholder/150/150',
    experience: '8+ years',
    bio: 'Maya adalah associate yang handal dalam administrasi perpajakan dan pelaporan keuangan.',
    achievements: ['Tax Administration Certified', 'Bookkeeping Expert', 'Reporting Specialist']
  },
  {
    id: '5',
    name: 'Rizki Pratama, SE., Ak.',
    position: 'Senior Tax Auditor',
    expertise: ['Tax Audit', 'Tax Investigation', 'Dispute Resolution'],
    photo: '/api/placeholder/150/150',
    experience: '10+ years',
    bio: 'Rizki spesialis dalam audit pajak dan resolusi sengketa pajak dengan otoritas perpajakan.',
    achievements: ['Tax Audit Expert', 'Dispute Resolution Specialist', 'Investigation Analyst']
  },
  {
    id: '6',
    name: 'Dewi Lestari, SE., M.Ak.',
    position: 'International Tax Consultant',
    expertise: ['International Tax', 'Cross-border Transactions', 'Tax Treaty'],
    photo: '/api/placeholder/150/150',
    experience: '14+ years',
    bio: 'Dewi adalah konsultan pajak internasional yang ahli dalam transaksi lintas negara dan perjanjian pajak.',
    achievements: ['International Tax Expert', 'Cross-border Specialist', 'Tax Treaty Analyst']
  }
]

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90">
        <CardContent className="p-6">
          {/* Photo Section */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <motion.div 
                className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center overflow-hidden group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 shadow-lg group-hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="text-2xl font-bold text-blue-200/50 group-hover:text-blue-300/70 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name.charAt(0)}
                </motion.div>
              </motion.div>
              <motion.div 
                className="absolute -bottom-1 -right-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Star className="w-3 h-3 text-white" />
              </motion.div>
            </div>
          </div>
          
          {/* Member Info */}
          <div className="text-center mb-4">
            <motion.h3 
              className="font-semibold text-base mb-1 line-clamp-1 group-hover:text-primary transition-colors"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {member.name}
            </motion.h3>
            <p className="text-sm text-primary font-medium mb-1">{member.position}</p>
            <p className="text-xs text-muted-foreground">{member.experience} experience</p>
          </div>
          
          {/* Bio */}
          <motion.p 
            className="text-xs text-muted-foreground text-center mb-3 line-clamp-2 group-hover:text-foreground transition-colors"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {member.bio}
          </p>
          
          {/* Expertise */}
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground">Keahlian:</p>
            <div className="flex flex-wrap gap-1">
              {member.expertise.slice(0, 3).map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
              {member.expertise.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{member.expertise.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function TeamSection({ className }: TeamSectionProps) {
  return (
    <section className={cn('py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50', className)}>
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
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Tim Profesional Kami
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tim kami terdiri dari para profesional berpengalaman yang siap membantu 
            Anda menyelesaikan berbagai permasalahan perpajakan
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
            />
          ))}
        </div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: <Briefcase className="w-8 h-8" />,
              title: 'Total Pengalaman',
              value: '80+ Tahun',
              description: 'Kombinasi pengalaman tim dalam bidang perpajakan',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: 'Sertifikasi',
              value: '15+ Sertifikat',
              description: 'Sertifikasi profesional dan keahlian khusus',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: <Users className="w-8 h-8" />,
              title: 'Klien Puas',
              value: '1000+',
              description: 'Klien yang telah kami layani dengan baik',
              color: 'from-purple-500 to-purple-600'
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4`}>
                  {stat.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Bekerja Sama dengan Tim Profesional Kami?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Dapatkan konsultasi pajak terbaik dari tim berpengalaman kami. 
              Kami siap membantu menyelesaikan permasalahan perpajakan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Briefcase className="w-5 h-5 mr-2" />
                Konsultasi Sekarang
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                <Users className="w-5 h-5 mr-2" />
                Lihat Profil Tim
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}