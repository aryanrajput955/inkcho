"use client";

import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import React, { useState, useEffect } from 'react';
import OptimizedImage from "@/app/components/OptimizedImage";
import OptimizedVideo from "@/app/components/OptimizedVideo";

// Masonry Breakpoints
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

// Content Data - Custom Web Development
const items = [
  { 
    src: "https://res.cloudinary.com/dplv15n29/image/upload/v1772491951/TheCraftSyncPortfolio_1__page-0022_eeop0i.jpg", 
    hoverId: "",
    type: "image", 
    title: "Tour & Travel Website", 
    subtitle: "Scalable Storefront", 
    size: "h-[450px]",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772489602/TheCraftSyncPortfolio_1__page-0022_yko2qd.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772489595/TheCraftSyncPortfolio_1__page-0023_lyzvig.jpg"
    ]
  },
  { 
    src: "https://res.cloudinary.com/dplv15n29/image/upload/v1772492062/Screenshot_2026-03-03_042332_e2wdfp.png", 
    hoverId: "",
    type: "image", 
    title: "Web App Development", 
    subtitle: "Next.js Framework", 
    size: "h-[350px]",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772489985/TheCraftSyncPortfolio_1__page-0010_ffodnm.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772489992/TheCraftSyncPortfolio_1__page-0011_p1nbqb.jpg"
    ]
  },
  { 
    src: "https://res.cloudinary.com/dplv15n29/image/upload/v1772491427/moment_jw42gp.jpg", 
    hoverId: "",
    type: "image", 
    title: "API Integrations", 
    subtitle: "System Connectivity", 
    size: "h-[500px]",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772489466/TheCraftSyncPortfolio_1__page-0006_axxoe5.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772489461/TheCraftSyncPortfolio_1__page-0007_s6posb.jpg"
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

export default function WebDevPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openGallery = (project) => {
    if (project.gallery && project.gallery.length > 0) {
      setSelectedProject(project);
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeGallery = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % selectedProject.gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
  };

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

  const isVideo = (src) => {
    if (!src) return false;
    return src.match(/\.(mp4|webm|mov|m4v|ogv)$|video\/upload/i);
  };

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
        <div className="relative flex flex-col items-center justify-center text-center mb-20 md:mb-32">
            
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative border border-dashed border-gray-400 p-8 md:p-12 max-w-4xl"
            >
                <span className="absolute -top-3 left-8 bg-[#FFFBF5] px-4 text-xs font-bold tracking-widest uppercase border border-gray-300 rounded-full py-1">
                    Web
                </span>
                <span className="absolute -bottom-3 right-8 bg-[#FFFBF5] px-4 text-xs font-bold tracking-widest uppercase border border-gray-300 rounded-full py-1">
                    Development
                </span>

                <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif text-black leading-[1.1]">
                    Custom Web Dev <br/>
                    <span className="italic text-gray-600">Built for scale & speed.</span>
                </h1>
            </motion.div>
        </div>

        {/* === MASONRY GRID === */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex gap-8 md:gap-12"
          columnClassName="my-masonry-grid_column bg-clip-padding space-y-8 md:space-y-12"
        >
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={itemVariants}
                    onClick={() => openGallery(item)}
                >
                    <div className={`group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out ${item.gallery?.length > 0 ? 'cursor-pointer' : 'cursor-default'} ${item.size}`}>
                        {item.type === "video" || isVideo(item.src) ? (
                           <OptimizedVideo 
                              src={item.src}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                           />
                        ) : (
                           <OptimizedImage 
                              src={item.src} 
                              alt={item.title} 
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                           />
                        )}
                        
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center z-10">
                            <h3 className="text-white font-serif text-2xl italic mb-2">{item.title}</h3>
                            <span className="text-white/80 text-xs tracking-widest uppercase">
                              {item.gallery?.length > 0 ? "View Gallery" : "Tech Showcase"}
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
            <button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={closeGallery}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {selectedProject.gallery?.length > 1 && (
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
                  {(() => {
                    const currentMedia = selectedProject.gallery[currentImageIndex];
                    const mediaSrc = typeof currentMedia === 'string' ? currentMedia : currentMedia?.src;
                    const mediaType = typeof currentMedia === 'string' 
                      ? (isVideo(currentMedia) ? 'video' : 'image') 
                      : currentMedia?.type;

                    return mediaType === 'video' ? (
                      <OptimizedVideo
                        src={mediaSrc}
                        className="w-full h-full object-contain shadow-2xl"
                      />
                    ) : (
                      <OptimizedImage
                        src={mediaSrc}
                        alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                        fill
                        priority
                        className="object-contain shadow-2xl"
                      />
                    );
                  })()}
                </motion.div>
              </AnimatePresence>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/50 font-light tracking-[0.2em] text-sm">
                {currentImageIndex + 1} / {selectedProject.gallery.length}
              </div>
            </div>

            <div className="absolute top-8 left-8">
              <h4 className="text-white font-serif italic text-2xl">{selectedProject.title}</h4>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
