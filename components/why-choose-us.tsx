"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Layers, Globe2, Zap } from "lucide-react";
import GlareHover from "@/components/ui/glare-hover";
import ThreadOrnament from "@/components/thread-ornament";

const reasons = [
  {
    icon: Award,
    title: "25+ Years of Experience",
    desc: "Decades of expertise in garment manufacturing, working with India's most iconic brands. Our management team brings unmatched industry knowledge.",
    highlight: "25+ Years",
  },
  {
    icon: Layers,
    title: "Premium Quality Fabrics",
    desc: "We source only from certified suppliers like KPR Mills. Every fabric undergoes rigorous quality checks before cutting.",
    highlight: "Zero Compromise",
  },
  {
    icon: Globe2,
    title: "Trusted Globally",
    desc: "Supplying to Reliance Retail, Aditya Birla, Arvind, Carrefour Spain, and Al Rashidi Qatar. Our quality speaks across borders.",
    highlight: "8+ Clients",
  },
  {
    icon: Zap,
    title: "Integrated Production",
    desc: "From cutting and dyeing to embroidery, printing, and packing — everything happens in-house. Complete traceability, faster turnarounds.",
    highlight: "End-to-End",
  },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleY  = useTransform(scrollYProgress, [0.04, 0.28], [60, 0]);
  const titleOp = useTransform(scrollYProgress, [0.04, 0.28], [0, 1]);
  const bgScale = useTransform(scrollYProgress, [0.2, 0.8], [0.8, 1.2]);
  const bgOp    = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 0.07, 0]);

  return (
    <section id="why" className="py-32 bg-navy relative overflow-hidden" ref={ref}>
      {/* Animated orb */}
      <motion.div
        style={{ scale: bgScale, opacity: bgOp }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[700px] h-[700px] bg-gold rounded-full blur-[140px]" />
      </motion.div>

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div style={{ y: titleY, opacity: titleOp }} className="text-center mb-16">
          <span className="tag-label text-gold">Why Choose Us</span>
          <ThreadOrnament center />
          <h2 className="font-playfair text-4xl md:text-5xl text-cream leading-tight">
            The Aditya
            <em className="text-gold not-italic"> Advantage</em>
          </h2>
          <p className="text-cream/65 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Four pillars that set us apart from every other garment manufacturer.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-dashed border-cream/15 hover:border-gold/30 transition-colors duration-500"
              >
                <GlareHover
                  background="#1a2540"
                  borderRadius="16px"
                  glareColor="#C9A84C"
                  glareOpacity={0.18}
                  glareAngle={-40}
                  glareSize={300}
                  transitionDuration={700}
                  className="w-full h-full"
                >
                  <div className="relative p-8 w-full h-full">
                    <span className="absolute bottom-4 right-6 font-playfair text-[80px] font-bold text-cream/[0.04] select-none leading-none pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-start gap-5 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                        <Icon size={22} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-playfair text-xl mb-3">{r.title}</h3>
                        <p className="text-cream/80 text-sm leading-relaxed">{r.desc}</p>
                        <div className="mt-4 inline-block px-3 py-1 rounded-full border border-gold/20 text-gold text-xs tracking-wide">
                          {r.highlight}
                        </div>
                      </div>
                    </div>
                  </div>
                </GlareHover>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <p className="text-cream/65 text-sm mb-6">
            Ready to partner with a manufacturer that delivers on every promise?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-gold text-navy font-semibold text-sm tracking-wider uppercase rounded transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1"
          >
            Let&apos;s Collaborate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
