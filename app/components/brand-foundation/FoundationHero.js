"use client";

import { motion } from 'framer-motion';

export default function FoundationHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-4 md:px-12 lg:px-20 max-w-[1800px] mx-auto overflow-hidden">
      {/* Decorative Grid for Hero */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#9a1b40 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Top Word: BRAND */}
      <div className="relative z-10 w-full">
        <motion.h1 
          initial={{ x: -100, opacity: 0, filter: "blur(20px)" }}
          animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] leading-[0.8] font-bold tracking-tighter text-black uppercase select-none"
        >
          Brand
        </motion.h1>
      </div>

      {/* Center Content: Description & Badge */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-8 md:my-0">
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="text-lg md:text-2xl text-gray-600 max-w-md text-center md:text-left font-light leading-relaxed"
         >
            Building the <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]">core</span> that supports every <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]">vision</span> and <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]">voice</span>.
         </motion.p>
      </div>

      {/* Bottom Word: FOUNDATION */}
      <div className="relative z-10 w-full text-right">
         <motion.h1 
            initial={{ x: 100, opacity: 0, filter: "blur(20px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11vw] leading-[0.8] font-serif italic text-[#9a1b40] tracking-tighter select-none mix-blend-multiply"
        >
          Foundation
        </motion.h1>
      </div>
      
      {/* Connecting Line */}
      <motion.div 
         initial={{ height: 0 }}
         animate={{ height: "100%" }}
         transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
         className="absolute left-1/2 top-0 w-px bg-black/5 -z-0"
      />
    </section>
  );
}
