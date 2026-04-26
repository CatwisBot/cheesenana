"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rina S.",
    role: "Food Blogger",
    content: "Awalnya saya ragu, tapi perpaduan keju gurih dan pisang manisnya benar-benar luar biasa. Lava cake-nya wajib dicoba!",
    rating: 5,
    avatar: "👱‍♀️",
  },
  {
    id: 2,
    name: "Budi T.",
    role: "Pelanggan Setia",
    content: "Cheesenana jadi makanan penenang andalan saya. Stik renyahnya pas untuk teman nonton film. Pengirimannya selalu cepat dan hangat.",
    rating: 5,
    avatar: "👨‍🦱",
  },
  {
    id: 3,
    name: "Siska A.",
    role: "Pecinta Camilan",
    content: "Keseimbangan rasanya sangat sempurna. Tidak terlalu manis dan tidak terlalu asin. Anda benar-benar bisa merasakan bahan premium yang mereka gunakan.",
    rating: 5,
    avatar: "👩‍🦰",
  },
  {
    id: 4,
    name: "Tito W.",
    role: "Mahasiswa",
    content: "Tempat nongkrong favorit baru! Harganya pas di kantong, porsinya ngenyangin, dan rasanya sekelas dessert cafe mahal. Mantap 🧀🍌!",
    rating: 5,
    avatar: "🧑‍🎓",
  },
  {
    id: 5,
    name: "Maya P.",
    role: "Ibu Rumah Tangga",
    content: "Anak-anak suka banget sama Cheesenana Roll. Beli buat cemilan sore selalu ludes dalam sekejap. Teksturnya super lembut di dalam!",
    rating: 5,
    avatar: "👩‍👧",
  },
  {
    id: 6,
    name: "Andi M.",
    role: "Pekerja Kantoran",
    content: "Cocok banget buat temen lembur. Rasa manis pisang dan gurih kejunya bikin mood kerja naik lagi. Bakal sering repeat order nih.",
    rating: 5,
    avatar: "👨‍💻",
  },
];

// Menggandakan array agar efek marquee (berjalan) bisa berjalan tanpa putus
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-secondary/50 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-12 relative z-10 mb-10 md:mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-dark mb-3 md:mb-4"
          >
            Apa Kata <span className="text-primary">Penggemar Kami</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-lg text-dark/70"
          >
            Jangan hanya percaya kata kami. Berikut adalah alasan mengapa orang-orang menyukai pengalaman ngemil di Cheesenana.
          </motion.p>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex group py-4">
        
        {/* Left & Right Gradient Masks for smooth fade-in/fade-out */}
        <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-linear-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-linear-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((t, idx) => (
            <div 
              key={`${t.id}-${idx}`} 
              className="w-75 md:w-100 shrink-0 mx-3 md:mx-4 flex"
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-primary/10 relative w-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-4 -right-2 text-5xl md:text-6xl opacity-10">
                  ❝
                </div>
                
                <div className="flex items-center gap-1 mb-4 md:mb-6">
                  {[...Array(t.rating)].map((_, index) => (
                    <Star key={index} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-dark/80 italic mb-6 md:mb-8 leading-relaxed font-medium relative z-10 text-sm md:text-base flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>
                
                <div className="flex items-center gap-3 md:gap-4 mt-auto">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-highlight flex items-center justify-center text-xl md:text-2xl border-2 border-primary/30 shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-dark text-sm md:text-base">{t.name}</h4>
                    <p className="text-xs md:text-sm text-dark/60">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
}
