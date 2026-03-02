"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from 'react';
import OptimizedVideo from "@/app/components/OptimizedVideo";

// Content Data - Single Main Project
const mainProject = {
  title: "Animation & CMS Performance",
  subtitle: "High-Speed Experiences",
  description: "We ensure your site is fast, fluid, and easily manageable. We integrate smooth animations without compromising speed and set up headless CMS backends so your team owns and controls their content.",
  src: "https://res.cloudinary.com/dplv15n29/video/upload/v1772492351/aniiii_b2vvye.mov",
  gallery: [
    "https://res.cloudinary.com/dplv15n29/video/upload/v1772492351/aniiii_b2vvye.mov",
    "https://res.cloudinary.com/dplv15n29/image/upload/v1772492361/IMG_4382_tjerig.gif",
    "https://res.cloudinary.com/dplv15n29/image/upload/v1772492341/IMG_4383_dfrhkv.gif",
    "https://res.cloudinary.com/dplv15n29/video/upload/v1772492303/Untitled_12_dahiup.mov"
  ]
};

export default function AnimationCMSPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openGallery = () => {
    setIsGalleryOpen(true);
    setCurrentVideoIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextVideo = (e) => {
    e?.stopPropagation();
    setCurrentVideoIndex((prev) => (prev + 1) % mainProject.gallery.length);
  };

  const prevVideo = (e) => {
    e?.stopPropagation();
    setCurrentVideoIndex((prev) => (prev - 1 + mainProject.gallery.length) % mainProject.gallery.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isGalleryOpen) return;
      if (e.key === 'ArrowRight') nextVideo(e);
      if (e.key === 'ArrowLeft') prevVideo(e);
      if (e.key === 'Escape') closeGallery();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGalleryOpen]);

  return (
    <main className="relative min-h-screen bg-[#FFFBF5] text-black overflow-hidden pt-32 pb-24">
      
      {/* === ANIMATED GRID BACKGROUND === */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: `linear-gradient(#cccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            transform: 'perspective(500px) rotateX(10deg) scale(1.1)',
            transformOrigin: 'top center',
          }}
        >
             <motion.div
            className="absolute inset-0"
            animate={{
              y: [0, 80]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
                backgroundImage: `linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)`,
                backgroundSize: '80px 80px',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FFFBF5_90%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* === HEADER SECTION === */}
        <div className="relative flex flex-col items-center justify-center text-center mb-16 md:mb-24">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative border border-dashed border-gray-400 p-8 md:p-12 max-w-4xl"
            >
                <span className="absolute -top-3 left-8 bg-[#FFFBF5] px-4 text-xs font-bold tracking-widest uppercase border border-gray-300 rounded-full py-1">
                    Speed
                </span>
                <span className="absolute -bottom-3 right-8 bg-[#FFFBF5] px-4 text-xs font-bold tracking-widest uppercase border border-gray-300 rounded-full py-1">
                    Fluidity
                </span>

                <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif text-black leading-[1.1]">
                    Animation & CMS<br/> 
                    <span className="italic text-gray-600">Performance tailored.</span>
                </h1>
            </motion.div>
        </div>

        {/* === SINGLE MAIN PROJECT CONTAINER === */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={openGallery}
            className="group relative max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer aspect-video bg-gray-100"
        >
            <OptimizedVideo 
                src={mainProject.src}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Bottom Label Overlay - Only visible on hover */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2 block">{mainProject.subtitle}</span>
                <h3 className="text-white font-serif text-3xl md:text-5xl italic">{mainProject.title}</h3>
                <p className="text-white/40 text-sm mt-4 tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Click to explore gallery
                </p>
            </div>
        </motion.div>

      </div>

      {/* === GALLERY OVERLAY === */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/98 flex items-center justify-center p-4 md:p-10"
            onClick={closeGallery}
          >
            {/* Close Button */}
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[10000] p-4 bg-white/5 rounded-full backdrop-blur-md"
              onClick={closeGallery}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation Arrows */}
            {mainProject.gallery.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[10000] bg-white/5 p-4 rounded-full backdrop-blur-sm"
                  onClick={prevVideo}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[10000] bg-white/5 p-4 rounded-full backdrop-blur-sm"
                  onClick={nextVideo}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </>
            )}

            {/* Video Container */}
            <div className="relative w-full h-full max-w-7xl max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideoIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-center px-4"
                >
                  <OptimizedVideo
                    src={mainProject.gallery[currentVideoIndex]}
                    controls
                    autoPlay
                    className="w-full h-full object-contain rounded-2xl shadow-3xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Pagination Info */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white/40 font-light tracking-[0.4em] text-xs uppercase">
                {currentVideoIndex + 1} / {mainProject.gallery.length}
              </div>
            </div>

            {/* Overlay Info */}
             <div className="absolute bottom-8 left-8 hidden md:block">
                <h4 className="text-white font-serif italic text-2xl">{mainProject.title}</h4>
                <p className="text-white/40 text-[10px] tracking-[0.2em] uppercase mt-2">Performance Showcase Gallery</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
