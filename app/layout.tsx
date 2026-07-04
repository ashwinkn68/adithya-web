import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import ScrollProgress from "@/components/scroll-progress";
import ScrollToTop from "@/components/scroll-to-top";
import Noise from "@/components/ui/noise";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/logo.jpeg" },
  title: "Aditya Clothings | Premium Garment Manufacturer, Coimbatore",
  description:
    "25+ years of expertise in high-quality garment manufacturing. Trusted by Reliance, Aditya Birla, Carrefour & more. Specializing in Men's, Women's, Kids', Infant & Sportswear.",
  keywords:
    "garment manufacturer, clothing manufacturer, Coimbatore, textile, B2B, wholesale",
  openGraph: {
    title: "Aditya Clothings | Premium Garment Manufacturer",
    description:
      "25+ years of expertise. Trusted by leading domestic & international brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Noise patternAlpha={10} patternRefreshInterval={4} />
        <ScrollProgress />
        <ScrollToTop />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
