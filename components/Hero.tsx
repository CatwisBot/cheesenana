"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-20 md:pb-32 overflow-hidden bg-highlight bg-noise">
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-4 md:left-10 text-4xl md:text-6xl opacity-30 md:opacity-50 blur-[1px] md:blur-none will-change-transform"
        >
          🧀
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-6 md:right-12 text-5xl md:text-7xl opacity-30 md:opacity-40 blur-[2px] md:blur-none will-change-transform"
        >
          🍌
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 text-3xl md:text-5xl opacity-30 blur-[1px] will-change-transform"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-1/3 right-1/4 text-4xl md:text-6xl opacity-40 blur-[1px] will-change-transform"
        >
          🧀
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left pt-8 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-accent font-bold tracking-wide text-xs md:text-sm mb-4 md:mb-6 border border-primary/30">
              MANIS BERTEMU GURIH
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-dark leading-tight mb-4 md:mb-6"
          >
            Tempat Keju <br className="hidden md:block" />
            <span className="text-accent relative inline-block mt-2 md:mt-0">
              Bertemu Pisang
              <svg className="absolute w-full h-2 md:h-3 -bottom-1 md:-bottom-2 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="text-base md:text-xl text-dark/80 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed px-4 md:px-0"
          >
            Kalau bisa ngemil, kenapa nunggu? 🧀😆 Cemilan keju pisang yang satu ini dijamin bikin kamu susah move on 🥹. Rasakan perpaduan keju leleh premium dan pisang matang yang dipanggang segar setiap hari!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 px-4 md:px-0"
          >
            <a
              href="#order"
              className="w-full sm:w-auto bg-primary text-dark font-bold px-8 py-3.5 md:py-4 rounded-full hover:bg-accent hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40 active:translate-y-0 text-base md:text-lg"
            >
              Pesan Sekarang
            </a>
            <a
              href="#menu"
              className="w-full sm:w-auto bg-white/60 backdrop-blur-sm text-dark font-bold px-8 py-3.5 md:py-4 rounded-full hover:bg-white transition-all hover:-translate-y-1 shadow-sm border border-primary/20 text-base md:text-lg"
            >
              Lihat Menu
            </a>
          </motion.div>
        </div>

        {/* Hero Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full lg:w-1/2 relative mt-8 lg:mt-0 will-change-transform"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] mx-auto">
            {/* Organic shape background - Optimized blurs and animations */}
            <div className="absolute inset-0 bg-primary/20 md:bg-primary/30 rounded-full md:rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[blob_12s_ease-in-out_infinite] blur-lg md:blur-xl will-change-transform opacity-70"></div>
            <div className="absolute inset-0 bg-accent/20 md:bg-accent/30 rounded-full md:rounded-[40%_60%_70%_30%/40%_70%_30%_60%] animate-[blob_12s_ease-in-out_infinite_reverse] blur-lg md:blur-xl will-change-transform opacity-70"></div>
            
            {/* Main hero visual */}
            <div className="absolute inset-4 bg-white rounded-full shadow-2xl overflow-hidden border-4 md:border-8 border-white flex items-center justify-center bg-linear-to-br from-highlight to-primary/20 will-change-transform">
              <div className="text-center scale-75 md:scale-100">
                <div className="text-8xl md:text-9xl">🥞</div>
                <div className="text-xl md:text-2xl font-display font-bold text-dark mt-4">Cheesenana<br/>Spesial</div>
              </div>
            </div>

            {/* Floating badges - Subtle floating re-enabled */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-0 md:-top-6 md:right-10 bg-white px-3 py-2 md:px-4 md:py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-primary/20 will-change-transform"
            >
              <span className="text-xl md:text-2xl">🌟</span>
              <div className="text-xs md:text-sm">
                <p className="font-bold text-dark leading-tight">Paling Laris</p>
                <p className="text-dark/60 text-[10px] md:text-xs">Disukai 10rb+</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-6 -left-4 md:bottom-10 md:-left-6 bg-white px-3 py-2 md:px-4 md:py-3 rounded-2xl shadow-xl flex items-center gap-2 border border-primary/20 will-change-transform"
            >
              <span className="text-xl md:text-2xl">🔥</span>
              <div className="text-xs md:text-sm">
                <p className="font-bold text-dark leading-tight">Baru Dipanggang</p>
                <p className="text-dark/60 text-[10px] md:text-xs">Hangat & Renyah</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Wavy bottom divider */}
      <div className="wave-divider text-secondary">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,155.22,120.4,214.34,95.8,252.12,80.05,286.9,62.83,321.39,56.44Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </section>
  );
}
