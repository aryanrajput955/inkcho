'use client';
import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './ui/blurtexteffect';

const EnhancedContentSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#FAFAFA] to-white flex items-center justify-center overflow-hidden">
      {/* Ambient background glows – perfectly symmetric */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-yellow-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>

      {/* Master container – guarantees perfect centering */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full"
      >
        {/* Brand Name – Inkcho */}
        <BlurText
          text="Inkcho"
          delay={0}
          animateBy="words"
          direction="top"
          stepDuration={0.8}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-gray-900 mb-4"
        />

        {/* Tagline */}
        <BlurText
          text="Design That Echoes Forever"
          delay={150}
          animateBy="words"
          direction="top"
          stepDuration={0.7}
          className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-800 mb-20"
        />

        {/* Description paragraph – strictly centered */}
        <BlurText
          text="We craft timeless identities, breathtaking illustrations, and immersive 3D experiences that don’t just catch the eye — they leave a lasting mark on hearts and minds."
          delay={80}
          animateBy="words"
          direction="top"
          stepDuration={0.6}
          className="text-xl md:text-2xl  text-gray-600 max-w-5xl leading-relaxed font-light"
        />
      </motion.div>
    </section>
  );
};

export default EnhancedContentSection;