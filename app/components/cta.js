"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-28 bg-[#f7f4ec] text-center overflow-hidden">

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
        
        {/* Title */}
        <h2 className="text-3xl md:text-5xl lg:text-5xl font-serif font-medium text-[#1e4389] leading-tight mb-6">
          Let’s Create Something  
          <span className="relative inline-block ml-2 text-[#9a1b40] italic">
            <span className="relative z-10">extraordinary?</span>
            <img 
              src="/red-circle.png" 
              alt="" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[150%] max-w-none pointer-events-none" 
            />
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 h-[2px] w-full bg-[#9a1b40]"
              style={{ transformOrigin: "left" }}
            />
          </span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-black max-w-xl mx-auto leading-relaxed mb-10 md:mb-12">
          Whether you're building a brand from scratch or refining an existing one,
          INKCHO helps craft visual stories that stay with your audience long after the moment passes.
        </p>

        {/* Button (updated to match the modern hover style from previous sections) */}
        <button className="btn-primary">
          {/* Expanding circular fill on hover */}
          <span className="btn-fill-animation" />

          {/* Label */}
          <span className="relative z-10">
            Start a Project
          </span>
        </button>
      </div>
    </section>
  );
}