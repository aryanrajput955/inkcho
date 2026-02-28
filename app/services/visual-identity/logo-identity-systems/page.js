"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import React, { useState, useEffect } from 'react';

// Masonry Breakpoints
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

// Custom Grid Data with expanded images for gallery
const projects = [
  { 
    src: "/visual-identity/Planholic/White%20and%20Grey%20Classic%20Art%20Gallery%20Logo.png", 
    hoverSrc: "/visual-identity/Planholic/ChatGPT%20Image%20Feb%2022,%202026,%2002_41_40%20PM.png", 
    title: "Planholic", 
    size: "h-[400px]",
    images: [
      "/visual-identity/Planholic/White%20and%20Grey%20Classic%20Art%20Gallery%20Logo.png",
      "/visual-identity/Planholic/ChatGPT%20Image%20Feb%2022,%202026,%2002_41_40%20PM.png",
      "/visual-identity/Planholic/ChatGPT%20Image%20Feb%2022,%202026,%2003_06_27%20PM.png"
    ]
  },
  { 
    src: "/visual-identity/Raghukulam/logo1.png", 
    hoverSrc: "/visual-identity/Raghukulam/logo2.png", 
    title: "Raghukulam", 
    size: "h-[550px]", 
    objectFit: "object-contain bg-white",
    images: [
      "/visual-identity/Raghukulam/logo1.png",
      "/visual-identity/Raghukulam/logo2.png"
    ]
  },
  { 
    src: "/visual-identity/bleed/BWP.png", 
    hoverSrc: "/visual-identity/bleed/mockup.png", 
    title: "Bleed Branding", 
    size: "h-[300px]",
    images: [
      "/visual-identity/bleed/BWP.png",
      "/visual-identity/bleed/mockup.png",
      "/visual-identity/bleed/BWP.jpg",
      "/visual-identity/bleed/ChatGPT%20Image%20Feb%2022,%202026,%2012_14_03%20PM.png"
    ]
  },
  { 
    src: "/visual-identity/bleed/horizontal-paper-bag-mockup-featuring-a-plain-background-3476-el1.png", 
    hoverSrc: "/visual-identity/bleed/paper-bag-mockup-of-a-shopping-bag-sitting-on-top-of-a-table-a6863.png", 
    title: "Bleed Assets", 
    size: "h-[450px]",
    images: [
      "/visual-identity/bleed/horizontal-paper-bag-mockup-featuring-a-plain-background-3476-el1.png",
      "/visual-identity/bleed/paper-bag-mockup-of-a-shopping-bag-sitting-on-top-of-a-table-a6863.png",
      "/visual-identity/bleed/business-card-mockup-lying-on-top-of-a-wooden-table-a6155.png",
      "/visual-identity/bleed/mockup-of-the-back-and-front-of-a-rectangle-pin-button-3531-el1.png"
    ]
  },
  { 
    src: "/visual-identity/Balwani/BSG%20Icon%20Lily%20Golden%20copy.png", 
    hoverSrc: "/visual-identity/Balwani/Bhawani%20Singh%20Group%20mockup%20copy.jpg",
    title: "Balwani Group", 
    size: "h-[450px]",
    images: [
      "/visual-identity/Balwani/BSG%20Icon%20Lily%20Golden%20copy.png",
      "/visual-identity/Balwani/Bhawani%20Singh%20Group%20mockup%20copy.jpg",
      "/visual-identity/Balwani/Board%203.jpg",
      "/visual-identity/Balwani/Cap%20Design.jpg",
      "/visual-identity/Balwani/T%20Shirt%20Design.jpg",
      "/visual-identity/Balwani/Visiting%20Card%20Front.jpg"
    ]
  },
  { 
    src: "/visual-identity/construction/ChatGPT%20Image%20Feb%2022,%202026,%2002_14_32%20PM.png", 
    hoverSrc: "/visual-identity/construction/branding-stickers-mockup-featuring-a-colorful-background-m31370.png",
    title: "Construction Identity", 
    size: "h-[320px]",
    images: [
      "/visual-identity/construction/ChatGPT%20Image%20Feb%2022,%202026,%2002_14_32%20PM.png",
      "/visual-identity/construction/branding-stickers-mockup-featuring-a-colorful-background-m31370.png",
      "/visual-identity/construction/button-mockup-featuring-a-plain-color-backdrop-1168-el.png",
      "/visual-identity/construction/circular-sign-mockup-placed-outside-a-store-2224-el1.png",
      "/visual-identity/construction/logo-mockup-featuring-a-business-card-placed-on-a-plain-color-surface-1663-el.png"
    ]
  }
];

// Animation for grid items
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function LogoIdentitySystemsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openGallery = (project) => {
    if (project.images && project.images.length > 1) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
      if (e.key === 'Escape') closeGallery();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

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
            animate={{ y: [0, 80] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `linear-gradient(#bbb 1px, transparent 1px), linear-gradient(90deg, #bbb 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FFFBF5_90%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="relative flex flex-col items-center justify-center text-center mb-20 md:mb-32">
            <div className="relative w-full max-w-5xl aspect-[21/9]">
              <Image 
                 src="/visual.png"
                 alt="Visual Identity Hero"
                 fill
                 priority
                 className="object-contain"
              />
            </div>
        </div>

        {/* === MASONRY GRID === */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex gap-8 md:gap-12"
          columnClassName="my-masonry-grid_column bg-clip-padding space-y-8 md:space-y-12"
        >
            {projects.map((project, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={itemVariants}
                    onClick={() => openGallery(project)}
                >
                    <div className={`group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out ${project.images.length > 1 ? 'cursor-pointer' : 'cursor-default'} ${project.size}`}>
                        {/* Base Image */}
                        <Image 
                            src={project.src} 
                            alt={project.title} 
                            fill
                            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                            className={`${project.objectFit || 'object-cover'} transition-transform duration-700 group-hover:scale-105 ${project.objectPosition || 'object-center'}`}
                        />
                        
                        {/* Hover Image */}
                        {project.hoverSrc && (
                             <Image 
                                src={project.hoverSrc} 
                                alt={`${project.title} Hover`} 
                                fill
                                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                                className={`${project.objectFit || 'object-cover'} opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out group-hover:scale-105 transition-transform ${project.objectPosition || 'object-center'}`}
                             />
                        )}

                        {/* Overlay with Text - Always visible on hover */}
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center z-10">
                            <h3 className="text-white font-serif text-2xl italic mb-2">{project.title}</h3>
                            <span className="text-white/80 text-xs tracking-widest uppercase">
                              {project.images.length > 1 ? "View Gallery" : "Brand Identity"}
                            </span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </Masonry>
      </div>

      {/* === GALLERY OVERLAY === */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={closeGallery}
          >
            {/* Close Button */}
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={closeGallery}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation Arrows */}
            {selectedProject.images.length > 1 && (
              <>
                <button 
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110] bg-white/5 p-4 rounded-full"
                  onClick={prevImage}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button 
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[110] bg-white/5 p-4 rounded-full"
                  onClick={nextImage}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    fill
                    priority
                    className="object-contain shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Pagination Info */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/50 font-light tracking-[0.2em] text-sm">
                {currentImageIndex + 1} / {selectedProject.images.length}
              </div>
            </div>
            
            {/* Project Title In Gallery */}
            <div className="absolute top-8 left-8">
              <h4 className="text-white font-serif italic text-2xl">{selectedProject.title}</h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
