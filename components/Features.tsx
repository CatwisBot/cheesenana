"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Sparkles, Leaf, Utensils, Bike } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Dibuat Segar Setiap Hari",
    description: "Setiap adonan disiapkan baru setiap pagi untuk memastikan kelezatan maksimal.",
    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    bgColor: "bg-primary",
  },
  {
    id: 2,
    title: "Tanpa Perasa Buatan",
    description: "Kami mengandalkan rasa manis alami pisang premium dan kekayaan rasa keju asli.",
    icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    bgColor: "bg-accent",
  },
  {
    id: 3,
    title: "Resep Paduan Unik",
    description: "Adonan khas dan rasio isian kami adalah hasil eksperimen lezat selama berbulan-bulan.",
    icon: <Utensils className="w-6 h-6 md:w-8 md:h-8 text-white" />,
    bgColor: "bg-dark",
  },
  {
    id: 4,
    title: "Tersedia Pesan Antar",
    description: "Ngidam Cheesenana di rumah? Kami mengantar camilan kami hangat dan segar langsung ke pintu Anda.",
    icon: <Bike className="w-6 h-6 md:w-8 md:h-8 text-dark" />,
    bgColor: "bg-highlight",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollTo({
        left: width * index,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="features" className="py-20 md:py-24 bg-secondary">
      <div className="container mx-auto px-0 md:px-12">
        <div className="text-center mb-10 md:mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-dark mb-3 md:mb-4"
          >
            Mengapa Memilih <span className="text-accent">Cheesenana?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-lg text-dark/70 max-w-2xl mx-auto"
          >
            Kami tidak kenal kompromi soal kualitas. Setiap gigitan dibuat untuk memberikan pengalaman ngemil terbaik.
          </motion.p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar px-4 pb-8 space-x-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="w-full shrink-0 snap-center snap-always flex"
              >
                <div className="bg-white rounded-3xl p-6 shadow-sm text-center flex flex-col items-center border border-primary/10 w-full h-full">
                  <div className={`${feature.bgColor} w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-md transform -rotate-3`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{feature.title}</h3>
                  <p className="text-dark/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "bg-accent w-6" : "bg-dark/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-0"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md transform -rotate-3 hover:rotate-3 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
              <p className="text-dark/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Hide scrollbar styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
