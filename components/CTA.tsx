"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "6289636579514";

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
          className="bg-white/90 backdrop-blur-md rounded-4xl md:rounded-[48px] p-8 md:p-16 max-w-5xl mx-auto shadow-2xl border-4 border-white"
        >
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-dark mb-4 md:mb-6 leading-tight">
            Form Order Sudah Pindah ke
            <span className="text-accent"> Halaman Khusus</span>
          </h2>

          <p className="text-sm md:text-xl text-dark/80 mb-8 md:mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
            Alur pemesanan sekarang lebih rapi. Kamu bisa pilih paket preset atau custom (termasuk 1 pcs), lalu kirim detail otomatis ke WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
            <Link
              href="/order"
              className="w-full sm:w-auto bg-dark text-white font-bold px-6 py-4 md:px-8 md:py-5 rounded-full inline-flex items-center justify-center gap-2 shadow-lg hover:bg-accent transition-all"
            >
              Buka Form Pemesanan
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] text-white font-bold px-6 py-4 md:px-8 md:py-5 rounded-full inline-flex items-center justify-center gap-2 shadow-lg hover:brightness-105 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat WhatsApp Langsung
            </a>
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
