"use client";

import { motion } from 'framer-motion';
import BrandFoundationHeroMobile from '@/app/components/services/mobile/BrandFoundationHeroMobile';

export default function FoundationHero() {
  return (
    <div className="relative overflow-hidden w-full">
      {/* --- DESKTOP HERO --- */}
      <section className="hidden md:flex relative min-h-screen flex-col justify-between pt-40 pb-20 px-4 md:px-12 lg:px-24 max-w-[1920px] mx-auto overflow-hidden bg-[#FFFBF5]">
        
        {/* Background Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#9a1b40 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
        />
        
        {/* Top Section: "Brand" */}
        <div className="relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <span className="text-[10px] font-black tracking-[0.6em] text-[#9a1b40] uppercase">
                Section • 01
            </span>
            <h1 className="text-[16vw] leading-[0.75] font-bold tracking-tighter text-black uppercase select-none">
              Brand
            </h1>
          </motion.div>
        </div>

        {/* Middle Section: Floating Glassmorphism Description */}
        <div className="relative z-10 flex items-center justify-center -mt-20">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
             className="max-w-xl text-center md:text-left bg-white/5 backdrop-blur-lg p-12 lg:p-16 border border-white/20 rounded-sm shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden"
           >
              {/* Subtle Inner Glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              <p className="text-xl md:text-3xl lg:text-4xl text-black/80 font-light leading-snug font-serif lowercase italic relative z-10">
                Building the <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]/30 transition-colors hover:border-[#9a1b40]">core</span> that supports every <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]/30 transition-colors hover:border-[#9a1b40]">vision</span> and <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]/30 transition-colors hover:border-[#9a1b40]">voice</span>.
              </p>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#9a1b40]/40" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#9a1b40]/40" />
           </motion.div>
        </div>

        {/* Bottom Section: "Foundation" */}
        <div className="relative z-10 w-full text-right">
           <motion.h1 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11vw] leading-[0.75] font-serif italic text-[#9a1b40] tracking-tighter select-none mix-blend-multiply"
          >
            Foundation
          </motion.h1>
        </div>

      
      </section>

      {/* --- MOBILE HERO --- */}
      <div className="block md:hidden">
         <BrandFoundationHeroMobile />
      </div>
    </div>
  );
}
