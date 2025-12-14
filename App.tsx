import React, { useState } from 'react';
import { Menu, X, CheckCircle, Play, Youtube, Clock, Shield, Award, ChevronDown, Phone, MessageCircle, Sliders, ArrowRight, ShoppingBag } from 'lucide-react';
import ChatWidget from './components/ChatWidget';
import { PACKAGES, FAQS, TESTIMONIALS } from './constants';
import { PricingPackage, FaqItem, Testimonial } from './types';

const WHATSAPP_LINK = "https://wa.me/6281330304903?text=Halo%20Admin,%20saya%20tertarik%20order%20jam%20tayang%20YouTube.";
const WHATSAPP_CUSTOM_LINK = "https://wa.me/6281330304903?text=Halo%20Admin,%20saya%20ingin%20request%20jumlah%20jam%20tayang%20custom%20sesuai%20kebutuhan%20saya.";
const SHOPEE_LINK = "http://shopee.co.id/rajadigital22";

// Helper function to generate specific order link
const createOrderLink = (pkgName: string, price: string) => {
  const phone = "6281330304903";
  const message = `Halo Admin RajaDigital, saya ingin memesan:
📦 *${pkgName}*
💰 Harga: ${price}

Saya ingin melakukan pembayaran. Mohon konfirmasi rekening berikut:

1. *SeaBank*: 901922019924
2. *BRI*: 3878 0102 8582 535

Mohon bantuannya untuk proses selanjutnya.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Fitur', href: '#features' },
    { name: 'Harga', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-brand-600 text-white p-1.5 rounded-lg">
              <Youtube size={24} fill="currentColor" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">Raja<span className="text-brand-600">Digital</span> ID</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 hover:text-brand-600 font-medium transition-colors text-sm">
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-600 text-white px-5 py-2 rounded-full font-medium hover:bg-brand-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2 text-sm"
            >
              <MessageCircle size={16} />
              Konsultasi Gratis
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-brand-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a 
              href={WHATSAPP_LINK}
              className="block w-full text-center mt-4 bg-brand-600 text-white px-5 py-3 rounded-lg font-bold"
              onClick={() => setIsOpen(false)}
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden relative">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-semibold text-sm mb-6 border border-brand-100">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            Jasa Jam Tayang YouTube #1 di Indonesia
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
            Raih Syarat Monetisasi <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-orange-600">4000 Jam Tayang</span> Instan
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Solusi cepat dan aman untuk YouTuber pemula. Tingkatkan kredibilitas channel Anda dengan view dan jam tayang berkualitas tinggi bergaransi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#pricing" 
              className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30 flex items-center justify-center gap-2"
            >
              Lihat Paket Harga
              <ChevronDown size={20} />
            </a>
            <a 
              href={SHOPEE_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#ee4d2d] text-white rounded-xl font-bold text-lg hover:bg-[#d03e1e] transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={20} />
              Order via Shopee
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} className="text-green-600" />
              Tanya Admin
            </a>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-slate-400 grayscale opacity-70">
            {/* Trust Signals / Fake Logos for demo */}
            <div className="flex items-center gap-2 font-semibold"><CheckCircle size={16}/> 100% Aman</div>
            <div className="flex items-center gap-2 font-semibold"><Shield size={16}/> Bergaransi</div>
            <div className="flex items-center gap-2 font-semibold"><Clock size={16}/> Proses Cepat</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Kenapa Memilih RajaDigital ID?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Kami menggunakan metode promosi yang aman dan terukur untuk memastikan channel Anda berkembang tanpa risiko.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield size={32} />}
            title="100% Aman AdSense"
            description="Metode view kami berasal dari traffic real, bukan bot berbahaya. Sangat aman untuk pengajuan monetisasi jangka panjang."
          />
          <FeatureCard 
            icon={<Clock size={32} />}
            title="Pengerjaan Cepat"
            description="Proses pengerjaan dimulai 1-24 jam setelah order. Kami menjaga kecepatan agar terlihat natural di analitik."
          />
          <FeatureCard 
            icon={<Award size={32} />}
            title="Garansi Refill 30 Hari"
            description="Jangan khawatir drop! Kami memberikan garansi isi ulang gratis jika jam tayang turun dalam masa garansi."
          />
           <FeatureCard 
            icon={<Play size={32} />}
            title="Retensi Tinggi"
            description="Video ditonton dengan durasi yang panjang, sehingga bagus untuk algoritma rekomendasi YouTube."
          />
           <FeatureCard 
            icon={<Phone size={32} />}
            title="Support Responsif"
            description="Tim admin kami siap membantu Anda konsultasi seputar channel dan kendala pemesanan melalui WhatsApp."
          />
           <FeatureCard 
            icon={<CheckCircle size={32} />}
            title="Legal & Terpercaya"
            description="Telah dipercaya oleh lebih dari 1000+ konten kreator di seluruh Indonesia untuk membantu monetisasi."
          />
        </div>
      </div>
    </section>
  );
};

const PricingCard: React.FC<{ pkg: PricingPackage }> = ({ pkg }) => (
  <div className={`relative flex flex-col p-6 bg-white rounded-3xl border ${pkg.recommended ? 'border-brand-500 shadow-xl shadow-brand-500/10 z-10' : 'border-gray-200 shadow-sm'} transition-all hover:scale-[1.02] duration-300`}>
    {pkg.recommended && (
      <div className="absolute top-0 right-0 bg-brand-600 text-white px-3 py-1 rounded-bl-xl rounded-tr-2xl text-xs font-bold tracking-wide">
        POPULER
      </div>
    )}
    <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
    <div className="mb-6">
      <span className="text-slate-400 line-through text-xs">{pkg.originalPrice}</span>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-brand-600">{pkg.price}</span>
      </div>
      <div className="text-sm font-semibold text-slate-600 mt-1">{pkg.hours} Jam Tayang</div>
    </div>
    
    <ul className="flex-1 space-y-3 mb-6">
      {pkg.features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 text-slate-700">
          <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
          <span className="text-xs font-medium">{feature}</span>
        </li>
      ))}
    </ul>

    <a 
      href={createOrderLink(pkg.name, pkg.price)}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-2.5 rounded-xl font-bold text-sm text-center transition-colors ${
        pkg.recommended 
          ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md' 
          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
      }`}
    >
      Pilih Paket
    </a>
  </div>
);

const CustomPricingCard: React.FC = () => (
  <div className="relative flex flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 shadow-xl transition-all hover:scale-[1.02] duration-300 h-full">
    <div className="absolute top-4 right-4 bg-slate-700 p-2 rounded-lg">
      <Sliders size={24} className="text-brand-400" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">Request Custom</h3>
    <div className="mb-6">
      <span className="text-slate-400 text-xs block h-4"></span>
      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-white">Suka-Suka</span>
      </div>
      <div className="text-sm font-semibold text-slate-400 mt-1">Sesuai Kebutuhan & Budget</div>
    </div>
    
    <div className="flex-1 mb-6">
      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        Butuh jumlah jam tayang yang spesifik? Atau punya budget tertentu?
      </p>
      <ul className="space-y-3">
        <li className="flex items-start gap-2 text-slate-300">
          <CheckCircle size={16} className="text-brand-400 flex-shrink-0 mt-0.5" />
          <span className="text-xs font-medium">Konsultasi Gratis</span>
        </li>
        <li className="flex items-start gap-2 text-slate-300">
          <CheckCircle size={16} className="text-brand-400 flex-shrink-0 mt-0.5" />
          <span className="text-xs font-medium">Harga Fleksibel</span>
        </li>
        <li className="flex items-start gap-2 text-slate-300">
          <CheckCircle size={16} className="text-brand-400 flex-shrink-0 mt-0.5" />
          <span className="text-xs font-medium">Solusi Channel Unik</span>
        </li>
      </ul>
    </div>

    <a 
      href={WHATSAPP_CUSTOM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-2.5 rounded-xl font-bold text-sm text-center transition-all bg-white text-slate-900 hover:bg-brand-50 flex items-center justify-center gap-2 group"
    >
      Chat Admin
      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pilihan Paket Hemat</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Tersedia berbagai pilihan paket mulai dari tester hingga paket monetisasi lengkap.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES.map((pkg) => (
            <PricingCard key={pkg.id} pkg={pkg} />
          ))}
          {/* Custom Card fills the last slot or creates a new row nicely */}
          <CustomPricingCard />
        </div>
      </div>
    </section>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pertanyaan Umum</h2>
          <p className="text-slate-600">Jawaban untuk hal-hal yang sering ditanyakan oleh pelanggan kami.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all">
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-900">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`px-5 text-slate-600 text-sm leading-relaxed bg-slate-50 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 py-5 opacity-100 border-t border-gray-100' : 'max-h-0 py-0 opacity-0'
                } overflow-hidden`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Apa Kata Mereka?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
               <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={i < t.rating ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 italic mb-6">"{t.comment}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <span className="text-xs text-brand-600 font-medium">{t.channel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand-600 p-1 rounded-md">
                 <Youtube size={20} fill="currentColor" />
              </div>
              <span className="font-bold text-xl">RajaDigital ID</span>
            </div>
            <p className="text-slate-400 text-sm">
              Partner terbaik konten kreator Indonesia untuk mencapai target monetisasi YouTube dengan aman dan cepat.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#pricing" className="hover:text-brand-500">Jam Tayang YouTube</a></li>
              <li><a href="#" className="hover:text-brand-500">Subscribers (Coming Soon)</a></li>
              <li><a href="#" className="hover:text-brand-500">Likes & Comments</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-500">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-brand-500">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-brand-500">Kebijakan Privasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2"><MessageCircle size={16}/> WhatsApp Admin</li>
              <li>Senin - Minggu</li>
              <li>08:00 - 22:00 WIB</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} RajaDigital ID. All rights reserved.</p>
          <p>Dibuat dengan ❤️ untuk Kreator Indonesia.</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default App;