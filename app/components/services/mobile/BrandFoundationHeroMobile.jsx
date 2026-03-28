"use client";

import { motion } from 'framer-motion';

export default function BrandFoundationHeroMobile() {
  return (
    <section className="relative min-h-[65vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 bg-[#FFFBF5] overflow-hidden text-center">
      {/* Decorative Grid for Hero (Same as Desktop) */}
      <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#9a1b40 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[10px] font-black tracking-[0.4em] text-[#9a1b40] uppercase mb-8"
        >
          .01 BRAND STRATEGY
        </motion.div>

        <div className="flex flex-col items-center gap-0">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold tracking-tighter text-black uppercase leading-none"
          >
            Brand
          </motion.h1>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-serif italic text-[#9a1b40] tracking-tight -mt-1"
          >
            Foundation
          </motion.h1>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 max-w-[300px]"
        >
          <p className="text-lg text-gray-700 font-light leading-relaxed">
            Building the <span className="font-bold text-[#9a1b40]">core</span> that supports every vision and voice.
          </p>
        </motion.div>
      </div>

      {/* Center structural accent */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-0.5 h-12 bg-[#9a1b40]/20" />
    </section>
  );
}
