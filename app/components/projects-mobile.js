"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioItems = [
  { id: 1, type: 'image', src: '/s3.webp', title: 'Brand Identity', category: 'Branding' },
  { id: 2, type: 'image', src: '/perfume.jpg', title: 'Web Design', category: 'Digital' },
  { id: 3, type: 'image', src: '/s4.webp', title: 'Marketing Campaign', category: 'Strategy' },
  { id: 4, type: 'video', src: '/casio/casio.mp4', title: 'Motion Graphics', category: 'Video' },
];

export default function ScrollGalleryMobile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  };

  return (
    <section className="bg-[#f7f4ec] py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-serif font-medium tracking-tight text-[#1e4389]"
          >
            Our <span className="text-[#9a1b40] italic">Creations</span>
          </motion.h2>
          <p className="mt-4 text-black/80 text-base">
            Exploring the boundaries of design.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group max-w-[500px] mx-auto">
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-20">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#1e4389] hover:bg-[#9a1b40] hover:text-white transition-colors border border-black/5"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-20">
            <button 
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#1e4389] hover:bg-[#9a1b40] hover:text-white transition-colors border border-black/5"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Main Card */}
          <div className="overflow-visible px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, x: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.05, x: -20, filter: 'blur(10px)' }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="w-full rounded-3xl overflow-hidden bg-white shadow-2xl border border-[#d6d3cd]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {portfolioItems[currentIndex].type === 'video' ? (
                    <video
                      className="w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                      src={portfolioItems[currentIndex].src}
                    />
                  ) : (
                    <img
                      src={portfolioItems[currentIndex].src}
                      alt={portfolioItems[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Mobile Label */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <p className="text-xs font-black text-[#9a1b40] uppercase tracking-[0.3em] mb-2">
                       {portfolioItems[currentIndex].category}
                    </p>
                    <h3 className="text-2xl font-serif italic tracking-tight">
                      {portfolioItems[currentIndex].title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index 
                  ? "w-8 h-2 bg-[#9a1b40]" 
                  : "w-2 h-2 bg-[#1e4389]/20"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}