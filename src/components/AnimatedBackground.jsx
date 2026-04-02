"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles on the client side to prevent hydration mismatches
    const generated = Array.from({ length: 25 }).map(() => ({
      id: Math.random().toString(36).substr(2, 9),
      size: Math.random() * 4 + 2,
      color: Math.random() > 0.5 ? "rgba(0, 240, 255, 0.6)" : "rgba(176, 38, 255, 0.6)",
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * -10, // Start randomly spaced in time
      xOffset: (Math.random() - 0.5) * 100,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            top: `${p.top}%`,
            left: `${p.left}%`,
            boxShadow: `0 0 10px 1px ${p.color}`,
          }}
          animate={{
            y: [0, -200, 0],
            x: [0, p.xOffset, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
