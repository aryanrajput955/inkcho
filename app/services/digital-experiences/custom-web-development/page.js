"use client";

import { motion } from "framer-motion";
import OptimizedVideo from "@/app/components/OptimizedVideo";
import OptimizedImage from "@/app/components/OptimizedImage";
import Link from "next/link";
import React, { useEffect } from 'react';

export default function CustomWebDevelopmentPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <main className="relative min-h-screen text-black overflow-hidden bg-gradient-to-b from-[#dfcadc] via-[#f8f5f8] to-[#FFFBF5] pt-32 pb-32 font-[var(--font-body)]">
      
      {/* Noise Texture Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.25] mix-blend-multiply"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/noisy.png')",
        }}
      />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* HERO SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center w-full"
        >
          {/* Video Container */}
          <motion.div variants={fadeUpVariant} className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[600px] overflow-hidden rounded-[2rem] md:rounded-[4rem] shadow-lg transform-gpu">
             <OptimizedVideo 
                src="https://res.cloudinary.com/dplv15n29/video/upload/v1782932090/Comp_1_isuedz.mp4"
                className="w-full h-full object-cover"
             />
             
             {/* Text Overlay */}
             <div className="absolute inset-0 flex flex-col items-center justify-center pb-16 md:pb-24 text-center pointer-events-none px-4">
                <h1 className="text-white font-[var(--font-heading)] text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight drop-shadow-md">
                   WEBSITE & <br/> DEVELOPMENT
                </h1>
             </div>
          </motion.div>
          
          {/* Features Bar */}
          <motion.div variants={fadeUpVariant} className="w-full flex flex-col md:flex-row items-center justify-between mt-8 px-4 md:px-16 text-black/90">
            <span className="font-semibold text-sm md:text-base lg:text-lg tracking-wide">Brand-led websites</span>
            <span className="font-semibold text-sm md:text-base lg:text-lg tracking-wide mt-4 md:mt-0">Digital systems</span>
            <span className="font-semibold text-sm md:text-base lg:text-lg tracking-wide mt-4 md:mt-0">Built to scale</span>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div variants={fadeUpVariant} className="w-full flex justify-start mt-16 md:mt-24 px-2 md:px-8">
            <Link href="/contact">
              <button className="btn-primary !bg-[#9a1b40] shadow-xl hover:shadow-2xl !px-8 !py-3 !text-sm md:!text-base">
                <span className="relative z-10">Start a Website Project</span>
                <div className="btn-fill-animation !bg-[#1e4389]" />
              </button>
            </Link>
          </motion.div>
        </motion.section>
        
        {/* COMBINED CONTENT SECTION */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mt-20 md:mt-28 px-2 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start"
        >
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-24 lg:gap-40">
            <motion.div variants={fadeUpVariant}>
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.1] text-black tracking-tight font-[var(--font-heading)]">
                Built beyond <br/> templates.
              </h2>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-16 pt-2 lg:pt-6">
            <motion.div variants={fadeUpVariant} className="flex flex-col">
              <p className="text-lg md:text-xl font-semibold mb-5 text-black/90">Websites that turn brand clarity into digital experience.</p>
              <p className="text-black/70 text-sm md:text-base leading-relaxed text-justify mb-4">
                A strong website should do more than sit online. It should explain the brand clearly, guide people naturally, and build trust before a conversation even begins.
              </p>
              <p className="text-black/70 text-sm md:text-base leading-relaxed text-justify">
                At Inkcho, we shape the strategy, structure, interface, and visual direction behind each website. Through our collaboration with CraftSync, we bring those experiences into technically reliable, scalable, and performance-led web builds.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex w-full relative">
               {/* Placeholder Image */}
               <div className="relative w-full aspect-[4/3.5] rounded-3xl overflow-hidden shadow-xl bg-white p-6 pb-0 flex flex-col justify-end">
                  <OptimizedImage 
                     src="https://res.cloudinary.com/dplv15n29/image/upload/v1772489985/TheCraftSyncPortfolio_1__page-0010_ffodnm.jpg"
                     alt="CraftSync Showcase"
                     fill
                     className="object-cover mt-4 rounded-t-xl shadow-lg border border-black/5"
                  />
               </div>
            </motion.div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
