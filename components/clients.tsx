"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, Building2 } from "lucide-react";
import ScrollVelocity from "@/components/ui/scroll-velocity";
import ThreadOrnament from "@/components/thread-ornament";

const domestic = [
  { name: "Reliance Retail Ltd", sub: "India's largest retailer" },
  { name: "Aditya Birla Fashions", sub: "Brand: People" },
  { name: "Arvind Lifestyle Brands", sub: "Brands: Cherokee, Donuts" },
  { name: "Nexon Omniverse", sub: "Style Union, Mumbai" },
  { name: "Nirvana Arts Pvt Ltd", sub: "Nirvana, I Love Goa, Kirokki" },
  { name: "Neon World Design", sub: "Creative fashion brand" },
];

const international = [
  { name: "Al Rashidi Trading", sub: "Qatar · Brand: Martin Emprex" },
  { name: "Carrefour", sub: "Spain · International retail giant" },
];

const marqueeClients = [...domestic, ...domestic];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY  = useTransform(scrollYProgress, [0.04, 0.28], [60, 0]);
  const titleOp = useTransform(scrollYProgress, [0.04, 0.28], [0, 1]);
  const marqueeY  = useTransform(scrollYProgress, [0.1, 0.38], [40, 0]);
  const marqueeOp = useTransform(scrollYProgress, [0.1, 0.38], [0, 1]);

  return (
    <section id="clients" className="py-32 bg-navy overflow-hidden" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <motion.div style={{ y: titleY, opacity: titleOp }} className="text-center mb-16">
          <span className="tag-label text-gold">Our Valued Clients</span>
          <ThreadOrnament center />
          <h2 className="font-playfair text-4xl md:text-5xl text-cream leading-tight">
            Trusted by Industry
            <em className="text-gold not-italic"> Leaders</em>
          </h2>
          <p className="text-cream/40 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            From Indian retail giants to international brands across Qatar and Spain,
            we deliver quality that meets global standards.
          </p>
        </motion.div>

        {/* ScrollVelocity marquee */}
        <motion.div style={{ y: marqueeY, opacity: marqueeOp }} className="mb-16 relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />
          <ScrollVelocity
            texts={[
              "Reliance Retail · Aditya Birla · Arvind Lifestyle · Nexon Omniverse · Nirvana Arts ·",
              "Neon World Design · Al Rashidi Qatar · Carrefour Spain · Style Union · Cherokee ·",
            ]}
            velocity={60}
            className="text-cream/50 text-sm font-inter tracking-widest uppercase px-6"
          />
        </motion.div>

        {/* Panels */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="rounded-2xl border border-cream/8 p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <Building2 size={16} className="text-blue-400" strokeWidth={1.5} />
              </div>
              <h3 className="text-cream font-playfair text-lg">Domestic Partners</h3>
            </div>
            <div className="space-y-0">
              {domestic.map((c) => (
                <div
                  key={c.name}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3.5 border-b border-cream/5 last:border-0 group hover:px-2 transition-all duration-200 gap-0.5"
                >
                  <p className="text-cream text-sm font-medium group-hover:text-gold transition-colors">{c.name}</p>
                  <p className="text-cream/40 text-xs sm:text-right">{c.sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="rounded-2xl border border-gold/15 bg-gold/5 p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center">
                <Globe size={16} className="text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-cream font-playfair text-lg">International Buyers</h3>
            </div>
            <div className="space-y-4 mb-8">
              {international.map((c) => (
                <div key={c.name} className="p-4 rounded-xl border border-gold/10 bg-navy/30">
                  <p className="text-cream font-semibold text-base">{c.name}</p>
                  <p className="text-gold/60 text-xs mt-1">{c.sub}</p>
                </div>
              ))}
            </div>
            <p className="text-cream/30 text-xs border-t border-cream/10 pt-4">
              Delivering to Qatar and Spain with export-ready standards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
