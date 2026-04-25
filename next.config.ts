import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Di Next.js 15+, gunakan allowedDevOrigins untuk mengizinkan akses dari ngrok saat development
  // @ts-ignore - Properti ini baru dan mungkin belum ada di semua versi @types/next
  allowedDevOrigins: ["hexaemeric-jaida-unbuffed.ngrok-free.dev", "localhost:3000"],
  
  experimental: {
    serverActions: {
      allowedOrigins: ["hexaemeric-jaida-unbuffed.ngrok-free.dev", "localhost:3000"],
    },
  },
};

export default nextConfig;
