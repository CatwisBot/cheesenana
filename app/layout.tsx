import type { Metadata } from "next";
import { Nunito, Fraunces } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cheesenana.shop"), 
  title: {
    default: "Cheesenana | Cemilan Keju Pisang Lumer & Premium",
    template: "%s | Cheesenana"
  },
  description: "Kalau bisa ngemil, kenapa nunggu? Rasakan sensasi cemilan keju pisang lumer yang baru dipanggang setiap hari. Berlokasi di Pasar Rebo, Jakarta Timur. Dijamin bikin susah move on!",
  keywords: ["cheesenana", "cemilan pisang keju", "pisang goreng keju premium", "jajanan pasar rebo", "cemilan jakarta timur", "dessert pisang", "keju lumer", "makanan viral jakarta", "cemilan manis gurih"],
  authors: [{ name: "Cheesenana Team" }],
  creator: "Cheesenana",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://cheesenana.shop",
    title: "Cheesenana | Cemilan Keju Pisang Lumer yang Bikin Susah Move On 🧀🍌",
    description: "Perpaduan tak tertahankan antara keju leleh premium dan pisang matang. Dipanggang segar setiap hari di Jakarta Timur.",
    siteName: "Cheesenana",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Cheesenana - Cemilan Keju Pisang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheesenana | Cemilan Keju Pisang Premium",
    description: "Rasakan sensasi cemilan keju pisang lumer yang baru dipanggang setiap hari. Bikin susah move on!",
    images: ["/image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${nunito.variable} ${fraunces.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
