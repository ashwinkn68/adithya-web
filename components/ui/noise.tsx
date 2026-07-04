"use client";
import { useRef, useEffect } from "react";

interface NoiseProps {
  patternSize?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

export default function Noise({
  patternSize = 250,
  patternRefreshInterval = 3,
  patternAlpha = 12,
}: NoiseProps) {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;
    const canvasSize = 1024;

    const resize = () => {
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = patternAlpha;
      }
      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) drawGrain();
      frame++;
      animationId = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [patternRefreshInterval, patternAlpha]);

  return (
    <canvas
      ref={grainRef}
      className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-[9998]"
      style={{ imageRendering: "pixelated", mixBlendMode: "overlay" }}
    />
  );
}
