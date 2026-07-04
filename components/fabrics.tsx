"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Shield, Droplets } from "lucide-react";
import SpoolOrnament from "@/components/spool-ornament";

const fabricTypes = [
  "Single Jersey", "Interlock", "Pique", "French Terry", "Lycra Jersey",
  "Jacquard", "Auto Striper", "Organic Fabrics", "AOP Design", "All types of Knit Fabrics",
];

/** Tiny SVG swatch icons — one per fabric type, rendered using currentColor */
const fabricSwatches: Record<string, React.ReactNode> = {
  "Single Jersey": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      {[2, 5, 8].map((y) => (
        <line key={y} x1="0" y1={y} x2="12" y2={y} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  ),
  "Interlock": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <line x1="0" y1="12" x2="12" y2="0" stroke="currentColor" strokeWidth="1.2" />
      <line x1="0" y1="0" x2="12" y2="12" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5" />
    </svg>
  ),
  "Pique": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      {[2.5, 6, 9.5].flatMap((y) =>
        [2.5, 6, 9.5].map((x) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill="currentColor" />
        ))
      )}
    </svg>
  ),
  "French Terry": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M 0 3.5 Q 3 1 6 3.5 Q 9 6 12 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 0 8.5 Q 3 6 6 8.5 Q 9 11 12 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  "Lycra Jersey": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <line x1="0" y1="12" x2="12" y2="0" stroke="currentColor" strokeWidth="1.5" />
      <line x1="-3" y1="12" x2="9" y2="0" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
      <line x1="3" y1="12" x2="15" y2="0" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.45" />
    </svg>
  ),
  "Jacquard": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M 6 0 L 12 6 L 6 12 L 0 6 Z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M 6 3 L 9 6 L 6 9 L 3 6 Z" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" />
    </svg>
  ),
  "Auto Striper": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      {[1.5, 4.5, 7.5, 10.5].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </svg>
  ),
  "Organic Fabrics": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M 6 10 C 2 10 1 6 3 4 C 5 2 7 3 6 6 C 5 9 8 10 10 8 C 12 6 11 2 8 2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  ),
  "AOP Design": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      {[[1,1],[4,2],[8,1],[2,5],[6,4],[10,5],[1,9],[5,8],[9,9]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill="currentColor" />
      ))}
    </svg>
  ),
  "All types of Knit Fabrics": (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M 0 4 L 2 2 L 4 4 L 6 2 L 8 4 L 10 2 L 12 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M 0 8 L 2 6 L 4 8 L 6 6 L 8 8 L 10 6 L 12 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    </svg>
  ),
};

const rawMaterials = [
  "Cotton Yarn", "Modal", "Viscose", "Poly Cotton", "Poly Viscose", "Blended Yarns",
];

const ecoFeatures = [
  { icon: Leaf, label: "AZO-Free Dyes", desc: "Safe, non-toxic dyeing for every garment" },
  { icon: Droplets, label: "Organic Dyes", desc: "Eco-conscious dyeing solutions" },
  { icon: Shield, label: "Eco-Friendly Washing", desc: "Sustainable wash processes throughout" },
];

export default function Fabrics() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY  = useTransform(scrollYProgress, [0.04, 0.28], [50, 0]);
  const titleOp = useTransform(scrollYProgress, [0.04, 0.28], [0, 1]);
  const bgY     = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section id="fabrics" className="py-32 bg-cream bg-linen relative overflow-hidden" ref={ref}>
      <motion.div
        style={{ y: bgY }}
        className="absolute -bottom-40 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"
      />
      <div className="section-padding max-w-7xl mx-auto relative z-10">

        <motion.div style={{ y: titleY, opacity: titleOp }} className="mb-16">
          <span className="tag-label text-gold">Fabrics &amp; Materials</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-playfair text-4xl md:text-5xl text-navy leading-tight">
              Premium Raw Materials,
              <br />
              <em className="text-gold not-italic">Responsibly Sourced</em>
            </h2>
            <p className="text-navy/50 text-sm leading-relaxed max-w-sm">
              We use only the finest fabrics and ensure all dyes and materials
              meet international safety and eco-friendly standards.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {/* Fabrics handled */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-2 bg-navy rounded-2xl p-8"
          >
            <h3 className="text-cream font-playfair text-xl mb-6">Fabrics We Handle</h3>
            <div className="flex flex-wrap gap-3">
              {fabricTypes.map((fabric, i) => (
                <motion.span
                  key={fabric}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-cream/10 rounded-full text-cream/70 text-sm hover:border-gold/40 hover:text-gold transition-all duration-300 cursor-default"
                >
                  <span className="opacity-40 flex-shrink-0" style={{ lineHeight: 0 }}>
                    {fabricSwatches[fabric]}
                  </span>
                  {fabric}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Raw materials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-gold/8 border border-gold/15 rounded-2xl p-8"
          >
            <h3 className="text-navy font-playfair text-xl mb-6">Raw Materials</h3>
            <ul className="space-y-3">
              {rawMaterials.map((mat, i) => (
                <motion.li
                  key={mat}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-navy/70 text-sm">{mat}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Eco features */}
          {ecoFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="flex gap-4 items-start p-6 bg-white border border-navy/8 rounded-xl hover:border-gold/20 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                  <Icon size={18} className="text-green-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-navy font-semibold text-sm mb-1">{feat.label}</p>
                  <p className="text-navy/50 text-xs leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <SpoolOrnament className="mt-20" />
      </div>
    </section>
  );
}
