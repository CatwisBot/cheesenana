"use client";

import { AtSign, Clock3, Globe, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl md:text-3xl font-display font-bold text-primary flex items-center gap-2 mb-4 md:mb-6">
              <span className="text-3xl md:text-4xl">🧀</span>
              Cheesenana
              <span className="text-3xl md:text-4xl">🍌</span>
            </a>
            <p className="text-white/70 max-w-sm text-base md:text-lg mb-6 md:mb-8">
              Cemilan keju pisang bikin susah move on 🥹. Dipanggang segar setiap hari untuk memuaskan selera manis dan gurih Anda.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/cheesenanaa/" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors">
                <AtSign className="w-5 h-5" />
              </a>
              <a href="https://cheesenana.com" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-dark transition-colors">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Jelajahi</h4>
            <ul className="space-y-3 md:space-y-4">
              <li><a href="#about" className="text-white/70 hover:text-primary transition-colors text-sm md:text-base">Cerita Kami</a></li>
              <li><a href="#menu" className="text-white/70 hover:text-primary transition-colors text-sm md:text-base">Menu</a></li>
              <li><a href="#features" className="text-white/70 hover:text-primary transition-colors text-sm md:text-base">Keunggulan</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-primary transition-colors text-sm md:text-base">Ulasan</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Kontak</h4>
            <ul className="space-y-3 md:space-y-4 text-white/70 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Pasar Rebo, Jaktim</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock3 className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Buka Setiap Hari: 09.00 – 21.00</span>
              </li>
              <li className="flex items-start gap-2 pt-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <span>+62 896-3657-9514</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Cheesenana. Hak Cipta Dilindungi.
          </p>
          <p className="text-white/60 text-xs md:text-sm flex items-center gap-1 font-medium">
            Dibuat dengan 🧀<span className="text-red-500">❤️</span>🍌 di Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
