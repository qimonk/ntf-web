import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { WhatsAppWidget } from '@/components/whatsapp-widget'
import { ChatbotWidget } from '@/components/chatbot-widget'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NSY Tax Freelancer - Solusi Perpajakan Profesional',
  description: 'Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda. Hubungi kami untuk solusi perpajakan terbaik.',
  keywords: 'pajak, konsultasi pajak, perhitungan pajak, pelaporan pajak, tax planning, NSY Tax Freelancer, perpajakan, konsultan pajak',
  authors: [{ name: 'NSY Tax Freelancer' }],
  creator: 'NSY Tax Freelancer',
  publisher: 'NSY Tax Freelancer',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nsy-tax-freelancer.pages.dev'),
  openGraph: {
    title: 'NSY Tax Freelancer - Solusi Perpajakan Profesional',
    description: 'Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda.',
    url: 'https://nsy-tax-freelancer.pages.dev',
    siteName: 'NSY Tax Freelancer',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NSY Tax Freelancer',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NSY Tax Freelancer - Solusi Perpajakan Profesional',
    description: 'Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3b82f6" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppWidget />
            <ChatbotWidget />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}