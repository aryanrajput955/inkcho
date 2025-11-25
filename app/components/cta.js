"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-28 bg-[#FAF9F6] text-center overflow-hidden">

      {/* Background Ink Stroke */}
      <img
        src="/ink-stroke.png"
        alt="Ink stroke"
        className="absolute top-1/2 left-1/2 w-[120%] max-w-4xl -translate-x-1/2 -translate-y-1/2 opacity-[0.07] pointer-events-none"
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://transparenttextures.com/patterns/white-diamond.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Label */}
        <p className="uppercase tracking-[0.25em] text-black/40 text-xs mb-5 md:mb-6">
          04 · Next Chapter
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-black leading-tight mb-6">
          Let’s Create Something  
          <span className="relative inline-block ml-2 text-[#EB5B00] italic">
            Timeless
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 h-[2px] w-full bg-[#EB5B00]"
              style={{ transformOrigin: "left" }}
            />
          </span>
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg text-black/60 max-w-xl mx-auto leading-relaxed mb-10 md:mb-12">
          Whether you're building a brand from scratch or refining an existing one,
          INKCHO helps craft visual stories that stay with your audience long after the moment passes.
        </p>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-10 md:px-12 py-3 md:py-4 bg-black text-white rounded-full text-xs md:text-sm tracking-wide uppercase shadow-md hover:bg-black/90 transition-all"
        >
          Start a Project
        </motion.button>
      </div>
    </section>
  );
}
