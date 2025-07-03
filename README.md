# Blog_Bersama
# Komunitas Nyampah Bersama Landing Page

Landing page komunitas berbasis Next.js, dengan galeri, animasi transisi, light mode, dan siap deploy ke Vercel/GitHub Pages.

## Fitur
- Responsive web & mobile
- Landing page & portofolio komunitas
- Animasi transisi (Framer Motion)
- Galeri gambar (support IPFS)
- Light mode
- Siap deploy ke Vercel & GitHub Pages

## Cara Jalankan
1. Install dependencies:
   ```
   npm install
   ```
2. Jalankan development:
   ```
   npm run dev
   ```
3. Build production:
   ```
   npm run build
   ```
4. Export static HTML (untuk GitHub Pages):
   ```
   npm run export
   ```

## Struktur Folder
Lihat pada struktur project di atas.

## Catatan
- Untuk gambar dari IPFS, tambahkan hash di utils/ipfs.js.
- Logo bisa diganti di `public/logo.png`.
