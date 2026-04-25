"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="order" className="relative py-24 md:py-32 overflow-hidden bg-primary bg-noise">
      {/* Playful Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalStripe" width="40" height="40" patternTransform="rotate(45)">
              <rect width="20" height="40" fill="#3B2314" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalStripe)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="bg-white/90 backdrop-blur-md rounded-[32px] md:rounded-[48px] p-8 md:p-20 max-w-4xl mx-auto shadow-2xl border-4 border-white"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-dark mb-4 md:mb-6 leading-tight">
            Kalau Bisa Ngemil, <br/>
            <span className="text-accent">Kenapa Nunggu? 🧀😆</span>
          </h2>
          
          <p className="text-base md:text-xl text-dark/80 mb-8 md:mb-10 max-w-2xl mx-auto font-medium">
            Cemilan keju pisang yang bakal bikin kamu susah move on 🥹. Pesan sekarang dan nikmati sensasi hangatnya di rumahmu!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white font-bold px-6 py-4 md:px-8 md:py-5 rounded-full flex items-center justify-center gap-3 text-base md:text-lg shadow-lg hover:shadow-[#25D366]/40 transition-all"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              Pesan via WhatsApp
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-linear-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white font-bold px-6 py-4 md:px-8 md:py-5 rounded-full flex items-center justify-center gap-3 text-base md:text-lg shadow-lg hover:shadow-[#dc2743]/40 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              Ikuti di Instagram
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Top Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 rotate-180 text-white">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-8 md:h-20">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,155.22,120.4,214.34,95.8,252.12,80.05,286.9,62.83,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
