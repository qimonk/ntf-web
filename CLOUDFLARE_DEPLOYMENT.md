# 🚀 Panduan Deployment Cloudflare Pages

## 📋 Prasyarat
- Akun Cloudflare
- Repository GitHub (https://github.com/qimonk/ntf-web)
- Kode sudah di-push ke GitHub

## 🔧 Konfigurasi Build

### 1. Login ke Cloudflare Dashboard
- Buka https://dash.cloudflare.com/
- Pilih menu "Pages" di sidebar kiri

### 2. Create a New Project
- Klik "Create a project"
- Pilih "Connect to Git"

### 3. Pilih Repository
- Cari repository `qimonk/ntf-web`
- Klik "Begin setup"

### 4. Konfigurasi Build
Isi pengaturan berikut:

#### Build Settings
- **Framework preset**: Pilih "Next.js"
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (kosongkan)

#### Environment Variables
- **Variable name**: `NODE_VERSION`
- **Value**: `22`

### 5. Build Options
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/`

### 6. Environment Settings
- **Production builds**: ✓
- **Preview builds**: ✓

## 🚀 Mulai Deployment

1. Klik "Save and Deploy"
2. Tunggu proses build selesai (biasanya 2-5 menit)

## 📊 Hasil Deployment

Jika berhasil, Anda akan melihat:
- ✅ Status: "Success"
- 🌐 URL: `https://nsy-tax-freelancer.pages.dev`
- 📄 Jumlah halaman: 9 halaman static

## 🔍 Troubleshooting

### Jika Build Gagal:
1. **Periksa log build**:
   - Klik nama build yang gagal
   - Lihat "Build log" untuk detail error

2. **Error umum dan solusi**:
   - `"Cannot find module"` → Jalankan `npm install` lokal dan push ulang
   - `"Build command failed"` → Pastikan `npm run build` berhasil dijalankan lokal
   - `"No output directory"` → Pastikan `out/` folder ada setelah build

3. **Node.js version error**:
   - Pastikan NODE_VERSION = 22 di environment variables
   - Hapus node_modules dan package-lock.json, lalu `npm install` ulang

### Jika Website Tidak Muncul:
1. **Cek URL**: Pastikan mengakses URL yang benar
2. **Clear cache browser**: Tekan Ctrl+F5 (Windows) atau Cmd+Shift+R (Mac)
3. **Tunggu propagasi**: Kadang butuh 5-10 menit untuk fully propagate

## 📱 Halaman yang Di-generate

Website akan memiliki halaman-halaman berikut:
- `/` - Halaman utama NSY Tax Freelancer
- `/layanan/konsultasi-pajak/` - Halaman Konsultasi Pajak
- `/layanan/perhitungan-pajak/` - Halaman Perhitungan Pajak
- `/layanan/laporan-pajak/` - Halaman Laporan Pajak
- `/layanan/perencanaan-pajak/` - Halaman Perencanaan Pajak

## 🎯 Fitur Website

- ✅ Responsive design (mobile & desktop)
- ✅ WhatsApp widget di semua halaman
- ✅ SEO optimized dengan meta tags lengkap
- ✅ Loading cepat (static export)
- ✅ Modern gradient design
- ✅ Pricing tables untuk setiap layanan

## 🔄 Update Website

Untuk update website:
1. Edit kode di local
2. Test dengan `npm run build`
3. Push ke GitHub
4. Cloudflare akan auto-deploy

---

## 🆘 Bantuan

Jika masih ada masalah:
1. Pastikan semua konfigurasi di atas sudah benar
2. Cek build log di Cloudflare Pages dashboard
3. Contact support atau tanya di forum

**Selamat! Website NSY Tax Freelancer Anda siap online!** 🎉