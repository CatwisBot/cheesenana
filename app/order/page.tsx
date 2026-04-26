import type { Metadata } from "next";
import Link from "next/link";
import OrderForm from "@/components/OrderForm";

export const metadata: Metadata = {
  title: "Form Pemesanan",
  description:
    "Isi form pemesanan Cheesenana, pilih paket atau custom, lalu kirim detail otomatis ke WhatsApp admin.",
};

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-highlight bg-noise py-14 md:py-20">
      <div className="container mx-auto px-4 md:px-12">
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-dark/15 bg-white/80 px-4 py-2 text-sm font-bold text-dark hover:bg-white transition"
        >
          Kembali ke beranda
        </Link>

        <div className="mt-4 md:mt-6">
          <OrderForm />
        </div>
      </div>
    </main>
  );
}
