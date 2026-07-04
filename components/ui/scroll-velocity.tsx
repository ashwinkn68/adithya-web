"use client";
import React, { useRef, useLayoutEffect, useState } from 'react';
import {
  motion, useScroll, useSpring, useTransform,
  useMotionValue, useVelocity, useAnimationFrame,
} from 'motion/react';

interface ScrollVelocityProps {
  texts: string[];
  velocity?: number;
  className?: string;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
}

function useElementWidth<T extends HTMLElement>(ref: React.RefObject<T | null>) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const update = () => { if (ref.current) setWidth(ref.current.offsetWidth); };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [ref]);
  return width;
}

function VelocityRow({
  children,
  baseVelocity,
  damping = 50,
  stiffness = 400,
  numCopies = 6,
  className = '',
}: {
  children: React.ReactNode;
  baseVelocity: number;
  damping?: number;
  stiffness?: number;
  numCopies?: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping, stiffness });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const copyRef = useRef<HTMLSpanElement>(null);
  const copyWidth = useElementWidth(copyRef);

  const wrap = (min: number, max: number, v: number) => {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
  };

  const x = useTransform(baseX, v => copyWidth === 0 ? '0px' : `${wrap(-copyWidth, 0, v)}px`);
  const direction = useRef(1);

  useAnimationFrame((_, delta) => {
    let move = direction.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();
    if (vf < 0) direction.current = -1;
    else if (vf > 0) direction.current = 1;
    move += direction.current * move * vf;
    baseX.set(baseX.get() + move);
  });

  return (
    <div className="relative overflow-hidden py-1">
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {Array.from({ length: numCopies }).map((_, i) => (
          <span key={i} ref={i === 0 ? copyRef : null} className={`flex-shrink-0 ${className}`}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ScrollVelocity({
  texts = [],
  velocity = 80,
  className = '',
  damping = 50,
  stiffness = 400,
  numCopies = 6,
}: ScrollVelocityProps) {
  return (
    <div>
      {texts.map((text, i) => (
        <VelocityRow
          key={i}
          baseVelocity={i % 2 !== 0 ? -velocity : velocity}
          damping={damping}
          stiffness={stiffness}
          numCopies={numCopies}
          className={className}
        >
          {text}&nbsp;
        </VelocityRow>
      ))}
    </div>
  );
}
