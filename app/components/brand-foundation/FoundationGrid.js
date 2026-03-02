"use client";

import { motion } from 'framer-motion';

export default function FoundationGrid() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          transform: 'perspective(500px) rotateX(20deg) scale(1.5)',
          transformOrigin: 'top center',
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            y: [0, 80]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
              backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FFFBF5_90%)]" />
    </div>
  );
}
