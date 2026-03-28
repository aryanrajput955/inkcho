"use client";

import { motion } from 'framer-motion';

export default function DigitalExperiencesHeroMobile() {
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
          .03 DIGITAL EXPERIENCES
        </motion.div>

        <div className="flex flex-col items-center gap-0">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold tracking-tighter text-black uppercase leading-none"
          >
            Digital
          </motion.h1>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-serif italic text-[#9a1b40] tracking-tight -mt-1"
          >
            Experiences
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-lg text-gray-700 font-light leading-relaxed max-w-[300px]"
        >
          Designing <span className="text-[#9a1b40] font-black underline decoration-[#9a1b40] underline-offset-4 italic">immersive</span> online spaces that connect and convert.
        </motion.p>
      </div>

      {/* Floating Center technical accent */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-4 h-4 border border-[#9a1b40]/30 rounded-full animate-ping z-0" />
    </section>
  );
}
