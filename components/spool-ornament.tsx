"use client";

import { motion } from "framer-motion";

interface Props {
  className?: string;
  /** Gold on cream (default) or light on navy */
  variant?: "gold" | "light";
}

export default function SpoolOrnament({ className = "", variant = "gold" }: Props) {
  const stroke = variant === "gold" ? "#C9A84C" : "#FBF8F2";
  const lineStroke =
    variant === "gold" ? "rgba(201,168,76,0.28)" : "rgba(251,248,242,0.15)";

  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      {/* Left stitch line */}
      <svg width="140" height="6" viewBox="0 0 140 6" aria-hidden>
        <line
          x1="0"
          y1="3"
          x2="140"
          y2="3"
          stroke={lineStroke}
          strokeWidth="1.5"
          strokeDasharray="8 5"
          strokeLinecap="round"
        />
      </svg>

      {/* Spool */}
      <motion.svg
        width="44"
        height="52"
        viewBox="0 0 44 52"
        fill="none"
        aria-hidden
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Top flange */}
        <ellipse
          cx="22" cy="7" rx="19" ry="5.5"
          stroke={stroke} strokeWidth="1.2" strokeOpacity="0.55"
        />
        {/* Body edges */}
        <line
          x1="3" y1="7" x2="3" y2="45"
          stroke={stroke} strokeWidth="1" strokeOpacity="0.28"
        />
        <line
          x1="41" y1="7" x2="41" y2="45"
          stroke={stroke} strokeWidth="1" strokeOpacity="0.28"
        />
        {/* Thread wraps — pulsing opacity staggered */}
        {[17, 23, 29, 35].map((y, i) => (
          <motion.ellipse
            key={y}
            cx="22"
            cy={y}
            rx="13"
            ry="3.5"
            stroke={stroke}
            strokeWidth="1"
            fill="none"
            animate={{ strokeOpacity: [0.12, 0.46, 0.12] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
        {/* Bottom flange */}
        <ellipse
          cx="22" cy="45" rx="19" ry="5.5"
          stroke={stroke} strokeWidth="1.2" strokeOpacity="0.55"
        />
        {/* Thread tail */}
        <motion.line
          x1="22" y1="1" x2="22" y2="7"
          stroke={stroke}
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ strokeOpacity: [0, 0.65, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.2,
          }}
        />
      </motion.svg>

      {/* Right stitch line */}
      <svg width="140" height="6" viewBox="0 0 140 6" aria-hidden>
        <line
          x1="0"
          y1="3"
          x2="140"
          y2="3"
          stroke={lineStroke}
          strokeWidth="1.5"
          strokeDasharray="8 5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
