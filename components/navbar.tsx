"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Production", href: "#production" },
  { label: "Clients", href: "#clients" },
  { label: "Fabrics", href: "#fabrics" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/90 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="section-padding max-w-7xl mx-auto h-20 flex items-center justify-between">

        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Aditya Clothings"
              width={140}
              height={56}
              className="h-14 w-auto brightness-0 invert"
            />
          </a>
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-cream/65 hover:text-gold text-xs tracking-widest uppercase font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2.5 bg-gold text-navy text-xs font-semibold tracking-widest uppercase rounded-lg transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5"
          >
            Enquire Now
          </a>
          <button
            className="md:hidden text-cream p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/95 backdrop-blur-md border-t border-gold/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream/80 hover:text-gold text-sm tracking-wider uppercase py-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-2.5 bg-gold text-navy text-sm font-semibold tracking-wider uppercase rounded text-center"
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
}
