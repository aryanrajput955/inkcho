"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from 'react';

const categories = [
  {
    id: "01",
    title: "LOGO & IDENTITY SYSTEMS",
    description: "We design identity systems, not standalone logos. Each mark is built to work across contexts, scales, and mediums—so your brand stays recognisable, consistent, and confident wherever it appears.",
    images: ["/img1.jpeg"], // Using varied placeholders
  },
  {
    id: "02",
    title: "TYPOGRAPHY, COLOUR & BRAND ASSETS",
    description: "We build visual languages that communicate before words do. From type pairings to color psychology, we ensure every element reinforces your brand's story and emotional impact.",
    images: ["/img2.jpeg"],
  },
   {
    id: "03",
    title: "Visual, Motion & Art Direction",
    description: "We craft visual narratives that bring brands to life. Through illustration, motion guidelines, and art direction, we create dynamic experiences that captivate and engage your audience.",
    images: ["/img1.jpeg"],
  },
];

export default function VisualIdentityPage() {
  
  // Force scroll to top on mount to fix navigation issues
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#FFFBF5] text-black overflow-hidden">
      
      {/* Animated Grid Background */}
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
        {/* Soft Radial Gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FFFBF5_90%)]" />
      </div>

      <div className="relative z-10 space-y-0">
        
        {/* === HERO SECTION === */}
        {/* === HERO SECTION === */}
        <section className="relative min-h-[85vh] flex flex-col justify-between pt-32 pb-12 px-4 md:px-12 lg:px-20 max-w-[1800px] mx-auto overflow-hidden">
          
          {/* Decorative Grid for Hero */}
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#9a1b40 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />

          {/* Top Word: VISUAL */}
          <div className="relative z-10 w-full">
            <motion.h1 
              initial={{ x: -100, opacity: 0, filter: "blur(20px)" }}
              animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14vw] leading-[0.8] font-bold tracking-tighter text-black uppercase select-none"
            >
              Visual
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
                Crafting a distinctive look that <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]">speaks</span>, <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]">resonates</span>, and <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]">stays</span>.
             </motion.p>
          </div>

          {/* Bottom Word: IDENTITY */}
          <div className="relative z-10 w-full text-right">
             <motion.h1 
                initial={{ x: 100, opacity: 0, filter: "blur(20px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14vw] leading-[0.8] font-serif italic text-[#9a1b40] tracking-tighter select-none mix-blend-multiply"
            >
              Identity
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

        <div className="pb-24">
        
        {categories.map((cat, index) => (
          <motion.section 
            key={index} 
            initial={{ backgroundColor: "rgba(255, 251, 245, 0)" }}
            whileInView={{ backgroundColor: "rgba(154, 27, 64, 0.08)" }} // Using a subtle tint of the brand red (approx /10-20 feel)
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.6 }}
            className="w-full py-16 md:py-24"
          >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
              {/* Left Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  {/* Category ID */}
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-sm font-medium tracking-widest text-[#9a1b40] uppercase"
                  >
                    {cat.id}
                  </motion.span>
                  
                  {/* Category Title */}
                  <motion.h2 
                    initial={{ opacity: 0, y: 30, rotate: 2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-5xl font-sans font-bold leading-[1.1] text-black tracking-tight uppercase origin-bottom-left"
                  >
                    {cat.title}
                  </motion.h2>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl"
                >
                  {cat.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link 
                    href={
                      cat.id === "01" ? "/services/visual-identity/logo-identity-systems" :
                      cat.id === "02" ? "/services/visual-identity/typography-color-brand-assets" :
                      "/services/visual-identity/visual-motion-art-direction"
                    }
                  >
                      <button className="group relative inline-flex items-center justify-center px-6 py-3 bg-[#9a1b40] text-white rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-[#9a1b40]/30 hover:scale-105">
                         <span className="relative z-10 font-medium tracking-wide text-xs uppercase">
                            Explore More Here
                         </span>
                         <div className="absolute inset-0 bg-[#7a1532] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                      </button>
                  </Link>
                </motion.div>
              </div>

              {/* Right Image Composition */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full"
              >
                  {/* Single Image Layout */}
                  <div className="relative w-full overflow-hidden shadow-xl group">
                      <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Placeholder while loading */}
                      <img 
                        src={cat.images[0]} 
                        alt={cat.title} 
                        className="relative z-10 w-full h-auto block transition-transform duration-700 group-hover:scale-105" 
                      />
                  </div>
              </motion.div>
            
            </div>

          </motion.section>
        ))}
        
      </div>
    </div>
    </main>
  );
}