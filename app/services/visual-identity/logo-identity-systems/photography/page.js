"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollImage = ({ src, baseWidth, expandedWidth, height, className, progress, scrollRanges }) => {
  const { start, peak, end } = scrollRanges;
  
  // Animate the horizontal width of the container
  const width = useTransform(progress, [start, peak, end], [baseWidth, expandedWidth, baseWidth]);

  return (
    <motion.span
      style={{ width, height }}
      className={`inline-block align-middle overflow-hidden rounded-[24px] bg-gray-200 relative shadow-xl transition-transform duration-700 hover:scale-[1.02] ${className}`}
    >
      <img 
        src={src} 
        alt="" 
        style={{ width: expandedWidth, height }}
        className="absolute top-0 left-1/2 -translate-x-1/2 object-cover pointer-events-none" 
      />
    </motion.span>
  );
};

export default function PhotographyHero() {
  const containerRef = useRef(null);

  // Track the scroll progress of the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Staggered reveal for text lines on mount
  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1, 
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    })
  };

  // Color transitions for each line as you scroll down
  const color1 = useTransform(scrollYProgress, [0, 0.3], ["#d1d5db", "#9a1b40"]);
  const color2 = useTransform(scrollYProgress, [0.3, 0.6], ["#d1d5db", "#9a1b40"]);
  const color3 = useTransform(scrollYProgress, [0.6, 0.9], ["#d1d5db", "#9a1b40"]);

  return (
    <>
    <div ref={containerRef} className="h-[400vh] bg-[#FFFBF5] font-sans selection:bg-[#9a1b40]/20 relative">
      
      {/* Sticky section that holds the layout perfectly in the center */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FFFBF5_80%)] z-0 pointer-events-none" />

        <main className="w-full px-6 md:px-12 relative z-10 flex justify-center items-center h-full">
          
          <h1 className="w-full max-w-[90rem] mx-auto text-6xl sm:text-7xl md:text-[9vw] lg:text-[8.5vw] font-medium leading-[1.1] tracking-tight text-center">
            
            <motion.div style={{ color: color1 }} custom={0} initial="hidden" animate="visible" variants={textVariants}>
              Find
              <ScrollImage 
                src="https://res.cloudinary.com/dplv15n29/image/upload/v1782987296/po5_xlinhn.jpg" 
                baseWidth="22vw"
                expandedWidth="30vw" 
                height="10vw" 
                className="mx-4 md:mx-6 -mt-[2vw] -mb-[1vw]"
                progress={scrollYProgress}
                scrollRanges={{ start: 0, peak: 0.3, end: 0.5 }}
              />
              the light.
            </motion.div>
            
            <motion.div style={{ color: color2 }} custom={1} initial="hidden" animate="visible" variants={textVariants}>
              Frame the
              <ScrollImage 
                src="https://res.cloudinary.com/dplv15n29/image/upload/v1782987295/po4_r61zej.jpg" 
                baseWidth="16vw" 
                expandedWidth="24vw"
                height="8vw" 
                className="mx-3 md:mx-5 -mt-2 -mb-2"
                progress={scrollYProgress}
                scrollRanges={{ start: 0.25, peak: 0.6, end: 0.8 }}
              />
              shot.
            </motion.div>
            
            <motion.div style={{ color: color3 }} custom={2} initial="hidden" animate="visible" variants={textVariants}>
              Tell
              <ScrollImage 
                src="https://res.cloudinary.com/dplv15n29/image/upload/v1775223195/Research_Discovery_gqqdzd.png" 
                baseWidth="30vw" 
                expandedWidth="38vw"
                height="10vw" 
                className="mx-4 md:mx-6 -mb-[2vw]"
                progress={scrollYProgress}
                scrollRanges={{ start: 0.55, peak: 0.9, end: 1 }}
              />
              the story.
            </motion.div>

          </h1>
          
        </main>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center pointer-events-none"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-black mb-3">Scroll to read</p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#9a1b40]/50 to-transparent rounded-full" />
        </motion.div>
      </div>
    </div>

      {/* Side-by-side Image Gallery */}
      <section className="w-full bg-[#FFFBF5] pt-12 pb-24 md:pt-16 md:pb-32 relative z-20 border-t border-black/5">
        
        {/* Background Grid Pattern (matching the hero) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="max-w-[60rem] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
          
          <div className="w-full md:w-1/2 aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-gray-100 group">
            <img 
              src="https://res.cloudinary.com/dplv15n29/image/upload/v1782987296/po3_ozpyn3.jpg" 
              alt="Photography studio setup" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          
          <div className="w-full md:w-1/2 aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-gray-100 group">
            <img 
              src="https://res.cloudinary.com/dplv15n29/image/upload/v1782987296/po2_op4qet.jpg" 
              alt="Camera display" 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>

        </div>
      </section>
    </>
  );
}
