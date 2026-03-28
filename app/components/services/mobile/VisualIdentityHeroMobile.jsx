"use client";

import { motion } from 'framer-motion';

export default function VisualIdentityHeroMobile() {
  return (
    <section className="relative min-h-[65vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 bg-[#FFFBF5] overflow-hidden text-center">
      {/* Decorative Grid for Hero (Same as Desktop) */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#9a1b40 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
      
      <div className="relative z-10 flex flex-col items-center h-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] font-black tracking-[0.4em] text-[#9a1b40] uppercase mb-8"
        >
          .02 VISUAL IDENTITY
        </motion.div>

        <div className="flex flex-col items-center gap-0">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold tracking-tighter text-black uppercase leading-none"
          >
            Visual
          </motion.h1>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-serif italic text-[#9a1b40] tracking-tight -mt-1"
          >
            Identity
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-10 text-lg text-gray-700 font-light leading-relaxed max-w-[300px]"
        >
          Crafting a <span className="text-[#9a1b40] font-black italic">distinctive</span> look that speaks, resonates, and stays.
        </motion.p>
      </div>

      {/* Modern High-Impact Stroke (Centered) */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-32 h-px bg-black/10 z-0" />
    </section>
  );
}
