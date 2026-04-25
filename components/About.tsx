"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-secondary overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-4 md:mb-6 leading-tight">
              Pasangan Rasa yang <span className="text-accent">Sempurna</span>
            </h2>
            <p className="text-base md:text-lg text-dark/80 leading-relaxed px-2">
              Berawal dari pertanyaan sederhana: Bagaimana jika kita mengambil buah paling disukai di dunia dan memadukannya dengan camilan gurih yang paling nyaman? Hasilnya adalah keajaiban. Di Cheesenana, kami telah menyempurnakan keseimbangan antara rasa manis alami pisang matang dan kelezatan krim kaya dari keju premium.
            </p>
          </motion.div>
        </div>

        {/* Visual Split Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mt-8 md:mt-12 relative max-w-5xl mx-auto">
          {/* Cheese Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full md:w-auto bg-primary/20 rounded-[30px] md:rounded-[40px] md:rounded-r-none p-8 md:p-16 text-center border-2 border-transparent md:border-r-0 relative z-10 hover:bg-primary/30 transition-colors"
          >
            <div className="text-6xl md:text-7xl mb-4 md:mb-6 inline-block transform -rotate-12">🧀</div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-dark mb-3 md:mb-4">Keju Gurih</h3>
            <p className="text-dark/70 font-medium text-sm md:text-base">
              Kami hanya menggunakan keju paling lumer dan kaya rasa. Rasa asin yang seimbang sempurna menciptakan sensasi ngemil yang hakiki.
            </p>
          </motion.div>

          {/* VS Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-dark text-white flex items-center justify-center font-bold text-lg md:text-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 border-[3px] md:border-4 border-secondary shadow-xl"
          >
            +
          </motion.div>

          {/* Banana Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full md:w-auto bg-highlight rounded-[30px] md:rounded-[40px] md:rounded-l-none p-8 md:p-16 text-center border-2 border-transparent md:border-l-0 relative z-10 hover:bg-highlight/80 transition-colors"
          >
            <div className="text-6xl md:text-7xl mb-4 md:mb-6 inline-block transform rotate-12">🍌</div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-dark mb-3 md:mb-4">Pisang Manis</h3>
            <p className="text-dark/70 font-medium text-sm md:text-base">
              Matang di pohon, pisang manis alami dipilih dengan cermat pada puncaknya untuk memberikan rasa karamel yang menawan.
            </p>
          </motion.div>
        </div>

        {/* Floating background elements */}
        <div className="absolute top-1/4 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
}
