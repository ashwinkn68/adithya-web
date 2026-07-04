import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import SpoolOrnament from "@/components/spool-ornament";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-cream/8">
      <div className="section-padding max-w-4xl mx-auto py-16 flex flex-col items-center text-center">
        <SpoolOrnament variant="light" className="mb-12" />

        {/* Logo */}
        <Image
          src="/logo.jpeg"
          alt="Aditya Clothings"
          width={120}
          height={52}
          className="h-12 w-auto object-contain rounded-sm mb-3"
        />

        {/* Brand name + est */}
        <p className="text-cream/50 text-xs tracking-widest uppercase font-inter mb-1">
          Aditya Clothings
        </p>
        <p className="text-cream/25 text-[10px] tracking-widest uppercase font-inter mb-5">
          Since 2000 · Coimbatore
        </p>

        {/* Tagline */}
        <p className="text-cream/40 text-sm leading-relaxed max-w-sm mb-8">
          25+ years of premium garment manufacturing. Trusted by India&apos;s
          leading brands and international buyers.
        </p>

        {/* Contact pills */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <a
            href="mailto:adityaclothingscbe@gmail.com"
            className="flex items-center gap-2 text-cream/50 hover:text-gold text-xs tracking-wide transition-colors"
          >
            <Mail size={13} className="text-gold/70" />
            adityaclothingscbe@gmail.com
          </a>
          <a
            href="tel:+919600213331"
            className="flex items-center gap-2 text-cream/50 hover:text-gold text-xs tracking-wide transition-colors"
          >
            <Phone size={13} className="text-gold/70" />
            +91 96002 13331
          </a>
          <a
            href="tel:+918086338425"
            className="flex items-center gap-2 text-cream/50 hover:text-gold text-xs tracking-wide transition-colors"
          >
            <Phone size={13} className="text-gold/70" />
            +91 80863 38425
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-cream/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-xs">
            © {new Date().getFullYear()} Aditya Clothings. All rights reserved.
          </p>
          <p className="text-cream/25 text-xs">
            Coimbatore, Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
}
