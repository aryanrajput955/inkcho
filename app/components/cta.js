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
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#1e4389] leading-tight mb-6">
          Let’s Create Something  
          <span className="relative inline-block ml-2 text-[#9a1b40] italic">
            Timeless
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
        <button
          className="
            group relative mt-6 overflow-hidden cursor-pointer
            px-14 py-5 rounded-full
            bg-[#1e4389] text-white text-sm
            tracking-[0.25em] uppercase
            transition-[transform,box-shadow] duration-200
            ease-[cubic-bezier(0.25,0.1,0.25,1)]
            hover:-translate-y-[1px]
            hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)]
            active:translate-y-0
          "
        >
          {/* Expanding circular fill on hover */}
          <span
            className="
              pointer-events-none
              absolute bottom-1/2 left-1/2
              w-[140%] h-[140%]
              -translate-x-1/2 translate-y-1/2
              rounded-full
              bg-[#7e1534]
              scale-[0.02]
              transition-transform ease-in-out duration-700
              ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:scale-100
            "
          />

          {/* Label */}
          <span className="relative z-10">
            Start a Project
          </span>
        </button>
      </div>
    </section>
  );
}