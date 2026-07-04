"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  color?: string;
  className?: string;
}

export default function StitchDivider({
  color = "rgba(201,168,76,0.3)",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <div ref={ref} className={`w-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: inView ? 1 : 0 }}
        transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: "left center" }}
      >
        <svg
          width="100%"
          height="6"
          viewBox="0 0 1200 6"
          preserveAspectRatio="none"
          aria-hidden
        >
          <line
            x1="0"
            y1="3"
            x2="1200"
            y2="3"
            stroke={color}
            strokeWidth="2"
            strokeDasharray="10 7"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
