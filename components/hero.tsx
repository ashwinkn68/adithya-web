"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Threads from "@/components/ui/threads";
import BlurText from "@/components/ui/blur-text";
import RotatingText from "@/components/ui/rotating-text";

const stats = [
  { value: "25+", label: "Years Experience" },
  { value: "50K+", label: "Pcs / Month" },
  { value: "6000", label: "Sq Ft Factory" },
  { value: "8+",   label: "Global Clients"  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const headlineScale   = useTransform(scrollYProgress, [0, 0.6],  [1, 0.88]);
  const headlineY       = useTransform(scrollYProgress, [0, 1],    ["0%", "-25%"]);

  const subOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const subY       = useTransform(scrollYProgress, [0, 0.5],  ["0%", "-18%"]);

  const statsY       = useTransform(scrollYProgress, [0, 0.6], ["0%", "15%"]);
  const statsOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const threadsOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const orb1Y          = useTransform(scrollYProgress, [0, 1],   ["0%", "-30%"]);
  const orb2Y          = useTransform(scrollYProgress, [0, 1],   ["0%", "30%"]);

  return (
    <section ref={containerRef} className="relative min-h-[140vh] bg-navy overflow-hidden">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">

        {/* Threads background — fabric/textile shader */}
        <motion.div
          style={{ opacity: threadsOpacity }}
          suppressHydrationWarning
          className="absolute inset-0 pointer-events-none"
        >
          <Threads
            color={[0.788, 0.659, 0.298]}
            amplitude={1.2}
            distance={0.3}
            enableMouseInteraction={false}
          />
        </motion.div>

        {/* Overlay to keep text readable */}
        <div className="absolute inset-0 bg-navy/70 pointer-events-none" />

        {/* Orbs */}
        <motion.div style={{ y: orb1Y }} suppressHydrationWarning className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <motion.div style={{ y: orb2Y }} suppressHydrationWarning className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-gold/7 rounded-full blur-[80px] pointer-events-none" />

        {/* Vertical accent lines */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block pointer-events-none" />
        <div className="absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden lg:block pointer-events-none" />

        {/* Content */}
        <div className="section-padding max-w-7xl mx-auto w-full pt-28 pb-20 relative z-10">
          <div className="max-w-4xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ opacity: subOpacity }}
              suppressHydrationWarning
              className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase font-medium">
                Est. 2000 · Coimbatore, India
              </span>
            </motion.div>

            {/* Headline — SplitText via BlurText word-by-word */}
            <motion.div
              style={{ y: headlineY, opacity: headlineOpacity, scale: headlineScale }}
              suppressHydrationWarning
              className="origin-top-left mb-6"
            >
              <BlurText
                text="25 Years of"
                className="font-playfair text-5xl md:text-7xl lg:text-[88px] text-cream leading-[1.05] tracking-tight"
                animateBy="words"
                direction="bottom"
                delay={120}
                stepDuration={0.4}
              />
              <BlurText
                text="Craftsmanship"
                className="font-playfair text-5xl md:text-7xl lg:text-[88px] text-gold leading-[1.05] tracking-tight italic"
                animateBy="words"
                direction="bottom"
                delay={120}
                stepDuration={0.4}
              />
            </motion.div>

            {/* Rotating category tag */}
            <motion.div
              style={{ opacity: subOpacity }}
              suppressHydrationWarning
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-cream/40 text-sm font-inter tracking-wide">Specializing in</span>
              <RotatingText
                texts={["Men's Wear", "Women's Wear", "Kids' Wear", "Sports Wear", "Infants' Wear"]}
                mainClassName="text-gold text-sm font-inter font-semibold tracking-wide overflow-hidden"
                splitBy="words"
                rotationInterval={2200}
                transition={{ type: "spring", damping: 20, stiffness: 280 }}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
              />
            </motion.div>

            {/* Subheading */}
            <motion.div style={{ y: subY, opacity: subOpacity }} suppressHydrationWarning>
              <BlurText
                text="Premium garment manufacturer trusted by Reliance Retail, Aditya Birla, Carrefour Spain and more."
                className="text-cream/70 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-inter"
                animateBy="words"
                direction="bottom"
                delay={60}
                stepDuration={0.3}
              />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              style={{ opacity: subOpacity }}
              suppressHydrationWarning
              className="flex flex-wrap gap-4 mb-20"
            >
              <a
                href="#contact"
                className="px-8 py-4 gradient-gold text-navy font-semibold text-sm tracking-wider uppercase rounded transition-all duration-300 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-1"
              >
                Start a Partnership
              </a>
              <a
                href="#products"
                className="px-8 py-4 border border-cream/20 text-cream text-sm tracking-wider uppercase rounded transition-all duration-300 hover:border-gold/50 hover:text-gold"
              >
                View Products
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              style={{ y: statsY, opacity: statsOpacity }}
              suppressHydrationWarning
              className="flex flex-wrap gap-8 md:gap-16 border-t border-cream/10 pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-playfair text-3xl text-gold font-bold">{stat.value}</p>
                  <p className="text-cream/45 text-xs tracking-wider uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          style={{ opacity: subOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-cream/30 text-[10px] tracking-widest uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ArrowDown size={14} className="text-gold/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
