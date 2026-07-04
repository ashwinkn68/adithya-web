"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import CountUp from "@/components/ui/count-up";
import ThreadOrnament from "@/components/thread-ornament";

const stats = [
  { to: 25,   suffix: "+",  label: "Years of Expertise", desc: "Established legacy in garment manufacturing" },
  { to: 50,   suffix: "K+", label: "Pieces / Month",     desc: "Basic & printed T-shirts capacity" },
  { to: 140,  suffix: "",   label: "Machines",            desc: "40 in-house + 100 outsourced" },
  { to: 6000, suffix: "",   label: "Sq Ft Factory",       desc: "Self-owned facility in Coimbatore" },
];

const certs = [
  { label: "MSME Certified", value: "TN03A0068761" },
  { label: "IE Code", value: "ABJFA0464C" },
  { label: "GST", value: "33ABJFA0464C1Z0" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const threadInView = useInView(threadRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const leftX  = useTransform(scrollYProgress, [0.05, 0.4], [-60, 0]);
  const leftOp = useTransform(scrollYProgress, [0.05, 0.4], [0, 1]);
  const rightX  = useTransform(scrollYProgress, [0.1, 0.45], [60, 0]);
  const rightOp = useTransform(scrollYProgress, [0.1, 0.45], [0, 1]);

  return (
    <section id="about" className="py-32 bg-cream bg-linen relative" ref={ref}>

      {/* Self-drawing thread path — decorative background ornament */}
      <div
        ref={threadRef}
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <svg
          className="absolute left-0 top-0 w-1/2 h-full"
          viewBox="0 0 400 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <motion.path
            d="M 60 580 C 200 400 30 200 180 100 S 360 300 320 20"
            stroke="#C9A84C"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity={0.1}
            fill="none"
            initial={{ pathLength: 0 }}
            animate={threadInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
          />
        </svg>
      </div>

      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div style={{ x: leftX, opacity: leftOp }}>
            <span className="tag-label text-gold">About Us</span>
            <ThreadOrnament />
            <h2 className="font-playfair text-4xl md:text-5xl text-navy leading-tight mb-6">
              Trusted by the Best,
              <br />
              <em className="text-gold not-italic">Built on Excellence</em>
            </h2>
            <p className="text-navy/60 text-base leading-relaxed mb-5">
              With over <strong className="text-navy">25 years of expertise</strong>, Aditya
              Clothings is a trusted name in the textile industry, specializing in
              high-quality garments for men, women, children, infants, and sportswear.
            </p>
            <p className="text-navy/60 text-base leading-relaxed mb-8">
              Our commitment to craftsmanship, ethical production, and premium raw
              materials has made us a preferred choice for leading domestic and
              international buyers across India, Qatar, and Spain.
            </p>
            {/* Cert badges — hidden for now
            <div className="flex flex-wrap gap-3">
              {certs.map((cert) => (
                <div
                  key={cert.label}
                  className="px-4 py-2 border border-navy/10 rounded-lg bg-white"
                >
                  <p className="text-[10px] text-navy/40 uppercase tracking-wider">
                    {cert.label}
                  </p>
                  <p className="text-xs font-semibold text-navy mt-0.5">{cert.value}</p>
                </div>
              ))}
            </div>
            */}
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            style={{ x: rightX, opacity: rightOp }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-navy p-6 rounded-2xl group hover:bg-navy-light transition-colors duration-300"
              >
                <p className="font-playfair text-4xl text-gold font-bold mb-2">
                  <CountUp to={stat.to} duration={0.1} suffix={stat.suffix} />
                </p>
                <p className="text-cream text-sm font-semibold mb-1">{stat.label}</p>
                <p className="text-cream/60 text-xs leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
