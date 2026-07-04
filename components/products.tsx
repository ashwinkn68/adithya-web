"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SpotlightCard from "@/components/ui/spotlight-card";
import StitchDivider from "@/components/stitch-divider";

const categories = [
  { number: "01", title: "Men's Wear",     items: ["T-Shirts", "Shorts", "Bottoms", "Sweatshirts"] },
  { number: "02", title: "Women's Wear",   items: ["Dresses", "Jeggings", "Joggers", "Hoodies"] },
  { number: "03", title: "Kids' Wear",     items: ["T-Shirts", "Trousers", "Sweatshirts", "Shorts", "Dresses"] },
  { number: "04", title: "Sports Wear",    items: ["T-Shirts", "Track Pants"] },
  { number: "05", title: "Infants' Wear",  items: ["Bodysuits", "Tops & Bottoms", "Baby Wrappers", "Hopper Suits"] },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const titleY  = useTransform(scrollYProgress, [0.02, 0.2], [40, 0]);
  const titleOp = useTransform(scrollYProgress, [0.02, 0.2], [0, 1]);

  return (
    <section id="products" className="py-20 bg-navy relative overflow-hidden" ref={ref}>

      {/* Garment silhouette watermark */}
      <div className="absolute top-0 right-0 w-[560px] h-full pointer-events-none" aria-hidden>
        <svg
          viewBox="0 0 320 260"
          fill="none"
          className="absolute top-10 right-0 w-[480px] opacity-[0.04]"
        >
          <path
            d="M 110 10 L 10 70 L 48 108 L 88 82 L 88 250 L 232 250 L 232 82 L 272 108 L 310 70 L 210 10 C 210 58 110 58 110 10 Z"
            stroke="#FBF8F2"
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <motion.div style={{ y: titleY, opacity: titleOp }} className="mb-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="tag-label text-gold">Our Product Range</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-cream leading-tight">
                Garments for Every{" "}
                <em className="text-gradient-gold not-italic">Stage of Life</em>
              </h2>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed max-w-xs">
              High-quality manufacturing across every clothing segment.
            </p>
          </div>
          <StitchDivider color="rgba(251,248,242,0.15)" className="mt-8" />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-cream/10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative bg-navy cursor-default"
            >
              <SpotlightCard
                className="px-8 py-7 bg-navy rounded-none w-full h-full"
                spotlightColor="rgba(201, 168, 76, 0.10)"
              >
                <span className="text-cream/30 text-[10px] tracking-[0.3em] uppercase mb-3 block">
                  {cat.number}
                </span>
                <h3 className="font-playfair text-2xl md:text-3xl text-white font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-cream/75 text-sm leading-relaxed">
                  {cat.items.join(" · ")}
                </p>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-500" />
              </SpotlightCard>
            </motion.div>
          ))}

          {/* Capacity block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-gold/8 px-8 py-7 hover:bg-gold/12 transition-colors duration-400"
          >
            <span className="text-gold/60 text-[10px] tracking-[0.3em] uppercase mb-3 block">
              Monthly Production
            </span>
            <p className="font-playfair text-5xl text-gold font-bold leading-none mb-1">
              105K+
            </p>
            <p className="text-cream/65 text-sm mb-5">Pieces manufactured per month</p>

            <div className="space-y-2.5 border-t border-cream/10 pt-4">
              {[
                { label: "Basic / Printed T-Shirts", val: "50,000 pcs" },
                { label: "Polo T-Shirts",             val: "25,000 pcs" },
                { label: "Bottoms",                   val: "30,000 pcs" },
              ].map((c) => (
                <div key={c.label} className="flex items-center justify-between gap-4">
                  <span className="text-cream/70 text-xs">{c.label}</span>
                  <span className="text-gold text-xs font-semibold tabular-nums">{c.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <StitchDivider color="rgba(251,248,242,0.15)" />
      </div>
    </section>
  );
}
