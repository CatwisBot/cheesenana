"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Cheesenana Roll",
    description: "Kulit renyah dengan isian keju leleh lumer dan potongan pisang manis.",
    price: "Rp 25.000",
    emoji: "🌯",
    color: "bg-primary/20",
  },
  {
    id: 2,
    name: "Roti Bakar Keju",
    description: "Roti brioche tebal dengan topping pisang karamel dan keju berlimpah.",
    price: "Rp 35.000",
    emoji: "🍞",
    color: "bg-highlight",
  },
  {
    id: 3,
    name: "Lava Cake",
    description: "Kue pisang hangat dengan isian krim keju lumer yang mengalir lembut.",
    price: "Rp 40.000",
    emoji: "🧁",
    color: "bg-accent/20",
  },
  {
    id: 4,
    name: "Stik Renyah",
    description: "Stik goreng renyah. Keseimbangan sempurna antara manis dan gurih.",
    price: "Rp 20.000",
    emoji: "🥖",
    color: "bg-primary/30",
  },
  {
    id: 5,
    name: "Pancake Spesial",
    description: "Pancake lembut berlapis krim keju dan potongan pisang segar.",
    price: "Rp 38.000",
    emoji: "🥞",
    color: "bg-highlight",
  },
  {
    id: 6,
    name: "Smoothie Segar",
    description: "Campuran kental pisang beku dengan sentuhan rasa cheesecake lezat.",
    price: "Rp 28.000",
    emoji: "🥤",
    color: "bg-primary/10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Menu() {
  return (
    <section id="menu" className="py-20 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-dark mb-4"
          >
            Kreasi <span className="text-primary relative inline-block">
              Andalan Kami
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-primary/30 -z-10 transform -rotate-2"></span>
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-lg text-dark/70 max-w-2xl mx-auto px-2"
          >
            Temukan menu menggugah selera kami yang dirancang untuk memuaskan keinginan Anda. Setiap hidangan dibuat segar dengan bahan premium.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-secondary rounded-[24px] md:rounded-[32px] p-4 md:p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 flex flex-col group"
            >
              {/* Product Image Placeholder */}
              <div className={`${product.color} w-full h-24 md:h-48 rounded-[16px] md:rounded-[24px] mb-4 md:mb-6 flex items-center justify-center overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500`}>
                <div className="text-5xl md:text-8xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  {product.emoji}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-1 md:mb-2">
                  <h3 className="text-base md:text-xl font-display font-bold text-dark leading-tight">{product.name}</h3>
                </div>
                <p className="text-dark/70 text-xs md:text-sm mb-4 md:mb-6 flex-1 leading-relaxed line-clamp-3 md:line-clamp-none">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-3 md:pt-4 border-t border-dark/5">
                  <span className="text-sm md:text-xl font-bold text-accent">{product.price}</span>
                  <button className="bg-white text-dark hover:text-white border-2 border-dark hover:bg-dark p-2 md:p-3 rounded-full transition-colors active:scale-95 group-hover:bg-primary group-hover:border-primary group-hover:text-dark">
                    <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <a href="#order" className="inline-block border-2 border-dark text-dark font-bold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-dark hover:text-white transition-all hover:-translate-y-1 text-sm md:text-base">
            Lihat Semua Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
