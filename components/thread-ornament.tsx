"use client";
import { motion } from "framer-motion";

interface ThreadOrnamentProps {
  center?: boolean;
  className?: string;
}

export default function ThreadOrnament({ center = false, className = "" }: ThreadOrnamentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-5 w-fit ${center ? "origin-center mx-auto" : "origin-left"} ${className}`}
    >
      <svg width="60" height="14" viewBox="0 0 60 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="7" x2="22" y2="7" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.45" strokeDasharray="3 2.5" />
        <circle cx="30" cy="7" r="4" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.6" fill="none" />
        <circle cx="30" cy="7" r="1.5" fill="#C9A84C" fillOpacity="0.45" />
        <line x1="38" y1="7" x2="60" y2="7" stroke="#C9A84C" strokeWidth="1" strokeOpacity="0.45" strokeDasharray="3 2.5" />
      </svg>
    </motion.div>
  );
}
