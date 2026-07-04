"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 600, damping: 40 });
  const springY = useSpring(y, { stiffness: 600, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 5);
      y.set(e.clientY - 5);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-gold/70 z-[9999] hidden lg:block"
      style={{ x: springX, y: springY, mixBlendMode: "screen" }}
    />
  );
}
