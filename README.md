# 🏛️ NSY Tax Freelancer

Layanan konsultasi, perhitungan, dan pelaporan pajak profesional untuk bisnis Anda. Website ini dibangun dengan teknologi modern dan siap digunakan.

## 📋 Tentang Proyek

NSY Tax Freelancer adalah website profesional untuk layanan perpajakan yang meliputi:
- Konsultasi Pajak
- Perhitungan Pajak  
- Laporan Pajak
- Perencanaan Pajak

Website ini dibangun dengan Next.js 15 dan di-optimasi untuk deployment di Cloudflare Pages.

## 🚀 Teknologi yang Digunakan

### 🎯 Core Framework
- **⚡ Next.js 15** - React framework dengan App Router
- **📘 TypeScript 5** - Type-safe JavaScript
- **🎨 Tailwind CSS 4** - Utility-first CSS framework

### 🧩 UI Components & Styling
- **🧩 shadcn/ui** - Komponen UI yang accessible
- **🎯 Lucide React** - Icon library yang modern
- **🌈 Framer Motion** - Animasi yang halus

## 🌐 Deployment

Website ini siap untuk deployment di Cloudflare Pages dengan konfigurasi berikut:

### Build Settings
- **Build command**: `npm run build`
- **Output directory**: `out`
- **Root directory**: `/`

### Generated Pages
- `/` - Halaman utama
- `/layanan/konsultasi-pajak` - Halaman Konsultasi Pajak
- `/layanan/perhitungan-pajak` - Halaman Perhitungan Pajak
- `/layanan/laporan-pajak` - Halaman Laporan Pajak
- `/layanan/perencanaan-pajak` - Halaman Perencanaan Pajak

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Build untuk production
npm run build

# Output akan di-generate di folder 'out/'
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layanan/[id]/      # Dynamic route untuk halaman layanan
│   ├── page.tsx           # Halaman utama
│   └── layout.tsx         # Layout utama
├── components/             # Reusable React components
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions dan configurations
```

## 🎨 Fitur Website

### 🏛️ Halaman Utama
- Hero section dengan branding NSY Tax Freelancer
- Grid layanan dengan 4 kategori
- WhatsApp widget untuk kontak
- Responsive design

### 📄 Halaman Layanan
- 4 halaman detail layanan yang di-generate statically
- Pricing table dengan 3 tier (Basic, Professional, Enterprise)
- Fitur-fitur utama setiap layanan
- Call-to-action sections

### 🎨 UI/UX Features
- Modern gradient design
- Smooth animations
- Mobile responsive
- WhatsApp integration
- SEO optimized

## 🔧 Konfigurasi Penting

### Static Export
Website ini menggunakan static export untuk compatibility dengan Cloudflare Pages:
```typescript
// next.config.ts
export default {
  output: 'export',
  trailingSlash: true,
}
```

### Dynamic Routes
Halaman layanan menggunakan dynamic routes dengan static generation:
```typescript
// src/app/layanan/[id]/page.tsx
export async function generateStaticParams() {
  return Object.keys(servicesData).map((serviceId) => ({
    id: serviceId,
  }))
}
```

## 🌐 Deployment ke Cloudflare Pages

1. Push kode ke GitHub repository
2. Di Cloudflare Pages dashboard:
   - Pilih GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `out`
   - Root directory: `/`
3. Deploy dan website akan live!

## 📱 Preview

Website ini sudah optimized untuk:
- Mobile devices
- Desktop browsers
- Fast loading times
- SEO friendly

---

Built with ❤️ for NSY Tax Freelancer. Powered by modern web technologies.
// Force push fix - Tue Sep 23 01:22:13 UTC 2025
