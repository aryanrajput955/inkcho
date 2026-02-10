"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 1.0, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    }
  };

  return (
    <section className="relative h-screen py-24 md:py-32 px-6 md:px-12 lg:px-28 bg-[#f7f4ec] text-center overflow-hidden">

      {/* Noise texture (kept for subtle elegance) */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://transparenttextures.com/patterns/white-diamond.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-10%" }}
           variants={fadeInUp}
        >
        {/* Title */}
        {/* Title Image */}
        <div className="flex justify-center -mb-4 md:-mb-20">
          <img 
            src="/Ready-to-Create.png" 
            alt="Ready to Create Something Extraordinary?" 
            className="w-full max-w-2xl object-contain"
          />
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-black max-w-xl mx-auto leading-relaxed mb-2 md:mb-4">
        "If that sounds like you"
        </p>

        {/* Button (updated to match the modern hover style from previous sections) */}
        <button className="btn-primary !bg-[#9a1b40] !text-white hover:shadow-xl hover:shadow-[#9a1b40]/20">
          {/* Expanding circular fill on hover - set to blue for contrast against the red button */}
          <span className="btn-fill-animation !bg-[#1e4389]" />

          {/* Label */}
          <span className="relative z-10">
            Let's Talk
          </span>
        </button>
        </motion.div>
      </div>
    </section>
  );
}