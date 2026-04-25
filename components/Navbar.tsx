"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Tentang", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Keunggulan", href: "#features" },
  { name: "Ulasan", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl md:text-2xl font-display font-bold text-dark flex items-center gap-1 group"
        >
          <span className="text-2xl md:text-3xl transition-transform group-hover:rotate-12 group-hover:scale-110 duration-300">
            🧀
          </span>
          Cheesenana
          <span className="text-2xl md:text-3xl transition-transform group-hover:-rotate-12 group-hover:scale-110 duration-300">
            🍌
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark/80 hover:text-accent font-semibold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#order"
            className="bg-primary text-dark font-bold px-6 py-2.5 rounded-full hover:bg-accent hover:text-white transition-all hover:scale-105 active:scale-95 shadow-[0_4px_14px_0_rgba(245,200,66,0.39)]"
          >
            Pesan Sekarang
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-dark p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-secondary border-t border-primary/20 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-dark font-semibold text-lg py-2 border-b border-primary/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#order"
                className="bg-primary text-dark font-bold px-6 py-3 rounded-xl text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pesan Sekarang
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
