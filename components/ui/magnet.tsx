"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export default function Magnet({ children, strength = 0.35, className = "" }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
