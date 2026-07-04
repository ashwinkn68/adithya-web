"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Factory, Scissors, Palette, Sparkles, Package, Users } from "lucide-react";
import ThreadOrnament from "@/components/thread-ornament";

const facilities = [
  { icon: Scissors, label: "Cutting to Packing", desc: "Fully integrated production line from raw fabric to finished garment" },
  { icon: Palette, label: "Dyeing Unit", desc: "In-house dyeing with AZO-free and eco-friendly dyes" },
  { icon: Sparkles, label: "Embroidery & Printing", desc: "Custom embroidery and all-over print capabilities" },
  { icon: Package, label: "Export Packing", desc: "Export-ready standards for domestic & international clients" },
  { icon: Users, label: "Skilled Workforce", desc: "Well-trained team with deep garment manufacturing expertise" },
  { icon: Factory, label: "6000 Sq Ft Factory", desc: "Self-owned facility in Coimbatore with 40 in-house machines" },
];

const capacities = [
  { value: "50,000", label: "T-Shirts / Month" },
  { value: "25,000", label: "Polo T-Shirts / Month" },
  { value: "30,000", label: "Bottoms / Month" },
  { value: "100+", label: "Outsource Machines" },
];

export default function Production() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY  = useTransform(scrollYProgress, [0.05, 0.28], [60, 0]);
  const titleOp = useTransform(scrollYProgress, [0.05, 0.28], [0, 1]);
  const stripY  = useTransform(scrollYProgress, [0.1, 0.38], [40, 0]);
  const stripOp = useTransform(scrollYProgress, [0.1, 0.38], [0, 1]);

  return (
    <section id="production" className="py-32 bg-cream bg-linen" ref={ref}>
      <div className="section-padding max-w-7xl mx-auto">

        {/* Header */}
        <motion.div style={{ y: titleY, opacity: titleOp }} className="mb-16">
          <span className="tag-label text-gold">Production Capabilities</span>
          <ThreadOrnament />
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-playfair text-4xl md:text-5xl text-navy leading-tight max-w-xl">
              Full In-House
              <em className="text-gold not-italic"> Manufacturing</em>
            </h2>
            <p className="text-navy/50 text-sm leading-relaxed max-w-sm">
              From yarn to finished garment, every step is managed under one roof —
              ensuring quality, traceability, and on-time delivery.
            </p>
          </div>
        </motion.div>

        {/* Capacity strip */}
        <motion.div
          style={{ y: stripY, opacity: stripOp }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {capacities.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-navy rounded-2xl p-6 text-center"
            >
              <p className="font-playfair text-3xl text-gold font-bold">{item.value}</p>
              <p className="text-cream/50 text-xs mt-2 tracking-wide">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Facilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((fac, i) => {
            const Icon = fac.icon;
            return (
              <motion.div
                key={fac.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="flex gap-4 p-5 rounded-xl border border-navy/8 bg-white hover:border-gold/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Icon size={18} className="text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-navy text-sm font-semibold mb-1">{fac.label}</p>
                  <p className="text-navy/50 text-xs leading-relaxed">{fac.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Suppliers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4 p-6 bg-navy/5 rounded-2xl border border-navy/8"
        >
          <p className="text-navy/50 text-xs tracking-wider uppercase font-medium">
            Raw Material Suppliers:
          </p>
          <div className="flex flex-wrap gap-3">
            {["KPR Mills Ltd", "Shri Viruthika Textiles"].map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-white border border-navy/10 rounded-full text-navy text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
