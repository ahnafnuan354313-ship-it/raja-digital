import { PricingPackage, FaqItem, Testimonial } from './types';

export const PACKAGES: PricingPackage[] = [
  {
    id: 'starter-50',
    name: 'Paket Tester',
    hours: 50,
    price: 'Rp 50.000',
    originalPrice: 'Rp 75.000',
    features: [
      'Cocok untuk Tes Layanan',
      'Estimasi 1-2 Hari',
      'Garansi Refill 30 Hari',
      'Aman AdSense',
    ],
    recommended: false,
  },
  {
    id: 'starter-100',
    name: 'Paket Pemula',
    hours: 100,
    price: 'Rp 95.000',
    originalPrice: 'Rp 150.000',
    features: [
      'Boost Awal Channel',
      'Estimasi 2-3 Hari',
      'Garansi Refill 30 Hari',
      'Aman AdSense',
    ],
    recommended: false,
  },
  {
    id: 'basic-500',
    name: 'Paket Basic',
    hours: 500,
    price: 'Rp 250.000',
    originalPrice: 'Rp 350.000',
    features: [
      'Peningkatan Signifikan',
      'Estimasi 3-5 Hari',
      'Garansi Refill 30 Hari',
      'Sumber Traffic Eksternal',
    ],
    recommended: false,
  },
  {
    id: 'medium-1000',
    name: 'Paket Medium',
    hours: 1000,
    price: 'Rp 475.000',
    originalPrice: 'Rp 650.000',
    features: [
      'Best Seller Pemula',
      'Estimasi 5-7 Hari',
      'Garansi Refill 30 Hari',
      'Bonus Likes Video',
    ],
    recommended: true,
  },
  {
    id: 'pro-2000',
    name: 'Paket Pro',
    hours: 2000,
    price: 'Rp 850.000',
    originalPrice: 'Rp 1.100.000',
    features: [
      'Setengah Syarat Monet',
      'Estimasi 7-10 Hari',
      'Garansi Refill 30 Hari',
      'Bonus 50 Subscribers',
    ],
    recommended: false,
  },
  {
    id: 'advanced-3000',
    name: 'Paket Advanced',
    hours: 3000,
    price: 'Rp 1.250.000',
    originalPrice: 'Rp 1.600.000',
    features: [
      'Hampir Monetisasi',
      'Estimasi 10-14 Hari',
      'Garansi Refill Seumur Hidup',
      'Bonus 100 Subscribers',
      'Prioritas Support',
    ],
    recommended: false,
  },
  {
    id: 'monetization-4000',
    name: 'Paket Monetisasi',
    hours: 4000,
    price: 'Rp 1.450.000',
    originalPrice: 'Rp 2.000.000',
    features: [
      'Lolos Syarat 4000 Jam',
      'Estimasi 14-20 Hari',
      'Garansi Refill Seumur Hidup',
      'Bonus 300 Subscribers',
      'Review Channel Gratis',
    ],
    recommended: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Apakah layanan ini aman untuk channel saya?",
    answer: "Sangat aman. Metode yang kami gunakan sesuai dengan kebijakan YouTube (White Hat). Kami menggunakan penonton real manusia, bukan bot yang berbahaya, sehingga aman untuk pengajuan monetisasi AdSense."
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer: "Waktu pengerjaan bervariasi tergantung paket yang diambil. Untuk 1000 jam tayang biasanya memakan waktu 3-5 hari. Kami melakukan proses secara bertahap agar terlihat natural di mata algoritma YouTube."
  },
  {
    question: "Apa yang dimaksud dengan Garansi Refill?",
    answer: "Jika jumlah jam tayang turun dalam periode garansi (biasanya 30 hari), kami akan mengisinya kembali secara GRATIS sampai jumlah pesanan terpenuhi kembali."
  },
  {
    question: "Apa syarat video untuk memesan jam tayang?",
    answer: "Channel harus memiliki minimal 1 video dengan durasi minimal 15 menit (lebih panjang lebih baik untuk mempercepat proses). Channel tidak boleh dalam status terkena teguran (strike)."
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    channel: "Budi Fishing",
    rating: 5,
    comment: "Mantap gan! Awalnya ragu, tapi setelah coba paket 1000 jam, traffic naik drastis. Sekarang channel saya sudah lolos monetisasi. Thanks RajaDigital!",
  },
  {
    id: 2,
    name: "Siti Aminah",
    channel: "Dapur Siti",
    rating: 5,
    comment: "Pelayanan cepat dan adminnya ramah banget. Dijelasin detail cara kerjanya. Recommended buat pemula yang susah cari jam tayang.",
  },
  {
    id: 3,
    name: "Rizky Gaming",
    channel: "RizkyPlays",
    rating: 4,
    comment: "Proses agak lambat di awal, tapi hasilnya permanen. Ga drop sama sekali setelah sebulan. Worth it dengan harganya.",
  }
];

export const AI_SYSTEM_INSTRUCTION = `
Anda adalah asisten virtual (CS) untuk "RajaDigital ID", sebuah layanan penjualan jam tayang YouTube.
Tugas anda adalah menjawab pertanyaan calon pembeli dengan ramah, profesional, dan meyakinkan.
Gunakan Bahasa Indonesia yang baik dan gaul namun sopan.

Informasi Layanan:
- Kami menjual Jam Tayang (Watch Hours) untuk syarat monetisasi YouTube.
- Daftar Harga Paket Terbaru:
  1. 50 Jam: Rp 50.000
  2. 100 Jam: Rp 95.000
  3. 500 Jam: Rp 250.000
  4. 1000 Jam: Rp 475.000
  5. 2000 Jam: Rp 850.000
  6. 3000 Jam: Rp 1.250.000
  7. 4000 Jam: Rp 1.450.000

- Fitur Custom: User bisa request jumlah jam tayang lain (misal 150 jam) dengan menghubungi admin.
- Keunggulan: Aman AdSense, Bergaransi 30 Hari (Refill), Pengerjaan Natural.
- Kontak Pembelian: Arahkan user untuk klik tombol WhatsApp di website (nomor: 081330304903).

Aturan:
- Jangan memberikan harga selain yang ada di daftar kecuali menyarankan "Hubungi Admin untuk Custom".
- Jika user bertanya hal di luar layanan YouTube, jawab dengan sopan bahwa anda hanya melayani konsultasi seputar layanan RajaDigital.
- Yakinkan bahwa metode ini aman (White Hat).
- Selalu akhiri dengan mengajak user memesan via WhatsApp.
`;