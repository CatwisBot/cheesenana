"use client";

import Link from "next/link";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Boxes, CakeSlice, CheckCircle2, PlusCircle } from "lucide-react";

const menuBlueprint = [
  {
    id: 1,
    step: "Langkah 1",
    title: "Pilih Rasa Original",
    subtitle: "Base: keju + susu",
    description: "Fondasi rasa Cheesenana yang creamy, manis, dan gurih seimbang.",
    options: ["Coklat", "Matcha", "Taro"],
    note: "Ideal untuk pesanan personal maupun percobaan rasa pertama.",
    icon: CakeSlice,
    cardClass: "bg-white border-primary/35",
    badgeClass: "bg-primary/20 text-dark",
    iconBoxClass: "bg-primary/20 text-dark",
    dark: false,
  },
  {
    id: 2,
    step: "Langkah 2",
    title: "Tentukan Paket Mahasiswa",
    subtitle: "Atur porsi sesuai kebutuhan",
    description: "Pilihan paket fleksibel untuk hemat, kenyang, atau makan bareng teman.",
    options: ["Paket hemat - 3 pcs", "Paket kenyang - 5 pcs", "Paket sharing - 10 pcs"],
    note: "Membantu pelanggan memilih jumlah tanpa bingung hitung ulang.",
    icon: Boxes,
    cardClass: "bg-dark border-dark",
    badgeClass: "bg-white/15 text-white",
    iconBoxClass: "bg-white/10 text-white",
    dark: true,
  },
  {
    id: 3,
    step: "Langkah 3",
    title: "Tambah Topping Favorit",
    subtitle: "Bikin rasa lebih personal",
    description: "Final touch untuk menambah tekstur, aroma, dan kesan premium.",
    options: ["Oreo crumble", "Choco chips", "Keju ekstra"],
    note: "Semua topping dapat dipadukan dengan varian original apa pun.",
    icon: PlusCircle,
    cardClass: "bg-highlight border-accent/30",
    badgeClass: "bg-accent/15 text-dark",
    iconBoxClass: "bg-accent/15 text-accent",
    dark: false,
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
    <section id="menu" className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 right-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-primary/20 text-accent font-bold tracking-wide text-xs md:text-sm mb-4 md:mb-6 border border-primary/30"
          >
            MENU YANG FLEKSIBEL
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-dark mb-4"
          >
            Susun <span className="text-primary relative inline-block">
              Pesananmu Sendiri
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-2 md:h-3 bg-primary/30 -z-10 transform -rotate-2"></span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm md:text-lg text-dark/70 max-w-3xl mx-auto px-2"
          >
            Informasi menunya kami sederhanakan jadi tiga keputusan: pilih rasa dasar, tentukan jumlah paket, lalu tambah topping sesuai selera. Lebih jelas untuk pelanggan baru dan tetap fleksibel untuk repeat order.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="relative grid md:grid-cols-3 gap-4 md:gap-6"
        >
          {menuBlueprint.map((group) => {
            const Icon = group.icon;
            const textClass = group.dark ? "text-white" : "text-dark";
            const bodyClass = group.dark ? "text-white/80" : "text-dark/70";
            const borderClass = group.dark ? "border-white/20" : "border-dark/10";

            return (
            <motion.div
              key={group.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative overflow-hidden rounded-3xl p-5 md:p-7 border shadow-sm hover:shadow-xl transition-all duration-300 ${group.cardClass}`}
            >
              <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-white/20 blur-sm"></div>
              <div className="absolute -bottom-14 -left-10 h-28 w-28 rounded-full bg-white/20 blur-sm"></div>

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <p className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide ${group.badgeClass}`}>
                    {group.step}
                  </p>
                  <h3 className={`mt-3 text-2xl md:text-3xl font-display font-bold leading-tight ${textClass}`}>
                    {group.title}
                  </h3>
                  <p className={`mt-1 text-sm md:text-base font-semibold ${bodyClass}`}>{group.subtitle}</p>
                </div>
                <span className={`shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${group.iconBoxClass}`}>
                  <Icon className="h-5 w-5" />
                </span>
              </div>

              <p className={`relative mt-4 text-sm md:text-base leading-relaxed ${bodyClass}`}>
                {group.description}
              </p>

              <ul className="relative mt-5 space-y-2.5">
                {group.options.map((option) => (
                  <li key={option} className={`flex items-start gap-2.5 text-base md:text-lg font-semibold ${textClass}`}>
                    <CheckCircle2 className="mt-0.5 h-4 w-4 md:h-5 md:w-5 shrink-0" />
                    <span>{option}</span>
                  </li>
                ))}
              </ul>

              <p className={`relative mt-5 border-t pt-4 text-xs md:text-sm ${borderClass} ${bodyClass}`}>
                {group.note}
              </p>
            </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 md:mt-10 rounded-3xl border border-primary/30 bg-linear-to-r from-secondary via-highlight to-secondary p-5 md:p-7"
        >
          <h3 className="text-xl md:text-2xl font-display font-bold text-dark">Ringkasnya, alur pesan itu seperti ini:</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {[
              "Pilih varian rasa original.",
              "Tentukan ukuran paket: 3, 5, atau 10 pcs.",
              "Tambahkan topping agar rasanya makin personal.",
            ].map((step, index) => (
              <div key={step} className="rounded-2xl border border-dark/10 bg-white/70 px-4 py-3">
                <p className="text-xs font-bold tracking-wide text-accent">STEP 0{index + 1}</p>
                <p className="mt-1 text-sm md:text-base font-semibold text-dark">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link href="/order" className="inline-block border-2 border-dark text-dark font-bold px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-dark hover:text-white transition-all hover:-translate-y-1 text-sm md:text-base">
            Lanjut ke Pemesanan
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
