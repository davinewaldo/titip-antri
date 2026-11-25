# TitipAntri — Frontend

Implementasi frontend dari desain Figma **TITIP.ANTRI** (11 halaman, alur layanan antrean restoran). Dibangun setia ke desain: warna, tipografi, spacing, dan layout mengikuti frame Figma mobile 390×844.

## Teknologi

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** (token warna/font diambil dari Figma)
- **React Router** untuk navigasi antar halaman
- **lucide-react** untuk ikon (sesuai ikon Lucide di desain)

## Menjalankan

Butuh **Node.js** (termasuk npm) terpasang lebih dulu — unduh dari https://nodejs.org (versi LTS).

```bash
npm install
npm run dev
```

Buka http://127.0.0.1:5173 di browser.

## Struktur

```
src/
├─ components/   # Komponen reusable (14)
│  ├─ MobileFrame, TopNav, StageLabel, ActionBar, PrimaryButton
│  ├─ StatusBadge, Card, InfoBox, FormField, IntroSymbol
│  └─ QueueNumber, Barcode, Divider, DetailRow
├─ pages/        # 11 halaman alur antrean
│  ├─ MasukPage          (01 Masuk)
│  ├─ LoginPage          (02 Login WhatsApp)
│  ├─ OtpPage            (03 Verifikasi OTP)
│  ├─ EksplorPage        (04 Eksplor Restoran)
│  ├─ DetailPage         (05 Detail & Pilih Meja)
│  ├─ PemesanPage        (06 Data Pemesan)
│  ├─ CheckoutPage       (07 Checkout)
│  ├─ TiketPage          (08 Tiket Diterbitkan)
│  ├─ MenungguPage       (09 Menunggu Antrean)
│  ├─ DipanggilPage      (10 Nomor Dipanggil)
│  └─ CheckinPage        (11 Check-in Berhasil)
├─ App.tsx       # Routing
└─ main.tsx      # Entry point
```

## Alur navigasi

```
/ (01) → /login (02) → /otp (03) → /eksplor (04) → /detail (05)
→ /pemesan (06) → /checkout (07) → /tiket (08) → /menunggu (09)
→ /dipanggil (10) → /checkin (11) → kembali ke /
```

Setiap tombol utama membawa ke halaman berikutnya; tombol back / chevron kembali ke halaman sebelumnya.

## Design system (dari Figma)

| Token | Nilai |
|-------|-------|
| Latar | `#09090b` · kartu `#18181b` · input `#1f1f22` |
| Aksen | amber `#f59e0b` · teks aksen `#ffc174` · teks di tombol `#472a00` |
| Sukses | hijau `#4edea3` |
| Teks | putih `#fff` · abu `#a1a1aa` · border `#27272a` |
| Font | Syne (judul), Plus Jakarta Sans (body), JetBrains Mono (label) |
| Radius | kartu 12px · tombol/badge pill |

## Catatan

- Halaman 01–06: teks, warna, dan nilai diambil **100% dari detail Figma**.
- Halaman 07–11: struktur, label, dan komposisi dari metadata Figma; beberapa nilai angka (mis. rincian biaya di Checkout, jam) mengikuti konteks dan perlu disamakan persis dengan Figma — lihat bagian "Langkah berikutnya".
- Aset asli (logo, foto restoran) diunduh dari Figma ke `public/assets/`.

## Langkah berikutnya

Batas pemakaian Figma MCP (paket Starter) tercapai saat membaca halaman 07–11, jadi detail teks/warna persisnya belum terbaca. Setelah batas reset, detail halaman 07–11 bisa dibaca ulang dan nilai-nilai disamakan persis.
