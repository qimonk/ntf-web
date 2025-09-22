# 🚀 DEPLOYMENT CLOUDFLARE PAGES - INSTRUKSI SEDERHANA

## 📋 Langkah-langkah Deployment

### 1. Push Code ke GitHub
```bash
git add .
git commit -m "Ready for Cloudflare Pages deployment"
git push origin main
```

### 2. Login ke Cloudflare
- Buka: https://dash.cloudflare.com/
- Login ke akun Anda
- Pilih menu **Pages** di sidebar kiri

### 3. Create New Project
- Klik **"Create a project"**
- Pilih **"Connect to Git"**

### 4. Pilih Repository
- Cari: `qimonk/ntf-web`
- Klik **"Begin setup"**

### 5. Konfigurasi Build (PENTING!)
Isi dengan tepat:

| Field | Value |
|-------|-------|
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Root directory** | (kosongkan) |
| **Node.js version** | `22` |

### 6. Environment Variables
- Klik **"Add variable"**
- **Variable name**: `NODE_VERSION`
- **Value**: `22`

### 7. Deploy
- Klik **"Save and Deploy"**
- Tunggu 2-5 menit

## ✅ Hasil yang Diharapkan

Jika berhasil:
- Status: **"Success"** 🟢
- Website URL: `https://nsy-tax-freelancer.pages.dev`
- Jumlah halaman: **9 halaman**

## 🔍 Jika Gagal

Cek pesan error di **"Build log"**:
- Klik nama build yang gagal
- Scroll ke bawah lihat **"Build log"**

Error umum:
- `"npm run build failed"` → Pastikan build berhasil di local
- `"No output directory"` → Pastikan folder `out/` ada
- `"Node.js version"` → Pastikan NODE_VERSION = 22

## 📱 Halaman Website

Setelah deploy, website akan memiliki:
- **Homepage**: `/` - NSY Tax Freelancer
- **Layanan**: 
  - `/layanan/konsultasi-pajak/`
  - `/layanan/perhitungan-pajak/`
  - `/layanan/laporan-pajak/`
  - `/layanan/perencanaan-pajak/`

## 🎯 Fitur Website
- ✅ Responsive (mobile & desktop)
- ✅ WhatsApp widget
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Modern design

---

**SELAMAT! Website Anda siap online!** 🎉

Jika masih ada masalah, periksa kembali konfigurasi di atas.