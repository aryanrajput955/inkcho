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

// Content Data
const items = [
  { 
    src: "https://res.cloudinary.com/dplv15n29/image/upload/v1772472263/mockup-of-an-open-a4-magazine-placed-over-a-colored-surface-3397-el1_m6jnxr.png", 
    hoverId: "https://res.cloudinary.com/dplv15n29/image/upload/v1772472249/WhatsApp_Image_2026-02-17_at_9.12.45_PM_5_ihshu7.jpg",
    type: "image", 
    title: "Newsletters", 
    subtitle: "Editorial Design", 
    size: "h-[450px]",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772472237/WhatsApp_Image_2026-02-17_at_9.12.45_PM_3_mpgzaf.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772472249/WhatsApp_Image_2026-02-17_at_9.12.45_PM_5_ihshu7.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772472263/mockup-of-an-open-a4-magazine-placed-over-a-colored-surface-3397-el1_m6jnxr.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772472264/open-a4-magazine-mockup-with-a-solid-color-background-1273-el_uy2xdo.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772472259/mockup-of-the-cover-of-an-a4-magazine-1268-el_puplrn.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772472246/WhatsApp_Image_2026-02-17_at_9.12.44_PM_pcy521.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772472240/WhatsApp_Image_2026-02-17_at_9.12.45_PM_2_kipown.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772472244/WhatsApp_Image_2026-02-17_at_9.12.45_PM_4_snythi.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772472228/WhatsApp_Image_2026-02-17_at_9.12.44_PM_2_q8iyst.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772472252/WhatsApp_Image_2026-02-17_at_9.12.45_PM_qvhqxm.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772472226/WhatsApp_Image_2026-02-17_at_9.12.44_PM_1_iklkac.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772472231/WhatsApp_Image_2026-02-17_at_9.12.45_PM_1_m4v0gi.jpg"
    ] // Array of { src, type }
  },
  { 
    src: "https://res.cloudinary.com/dplv15n29/image/upload/v1772473991/im_kredo_qxkm3e.png", 
    hoverId: "https://res.cloudinary.com/dplv15n29/image/upload/v1772473987/spiral_dp7hoc.png",
    type: "image", 
    title: "Social Media Posts", 
    subtitle: "Digital Marketing", 
    size: "h-[350px]",
    gallery: ["https://res.cloudinary.com/dplv15n29/image/upload/v1772473991/im_kredo_qxkm3e.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772473987/spiral_dp7hoc.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772473983/white_gold_ljbhh9.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772473975/FANCY_adexro.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772473972/INFINITY.png_rycfrn.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772473910/s5_mxhkhs.webp","https://res.cloudinary.com/dplv15n29/image/upload/v1772473910/s5_mxhkhs.webp"]
  },
  { 
    src: "https://res.cloudinary.com/dplv15n29/image/upload/v1772474136/poster_1_xexgn6.jpg", 
    hoverId: "https://res.cloudinary.com/dplv15n29/image/upload/v1772474132/poster_2_yto9el.png",
    type: "image", 
    title: "Posters", 
    subtitle: "Print & Display", 
    size: "h-[500px]",
    gallery: ["https://res.cloudinary.com/dplv15n29/image/upload/v1772474136/poster_1_xexgn6.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772474132/poster_2_yto9el.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772474126/poster-mockup-featuring-a-poster-taped-to-a-wall-a6310_tgrgue.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772474130/poster-on-a-concrete-wall-near-a-young-tree-in-the-city-mockup-a14462_s8sdh2.png"]
  },
  { 
    src: "https://res.cloudinary.com/dplv15n29/image/upload/v1772473744/page_2_fkpuiv.png", 
    hoverId: "",
    type: "image", 
    title: "Packaging Designs", 
    subtitle: "Product Identity", 
    size: "h-[400px]",
    gallery: ["https://res.cloudinary.com/dplv15n29/image/upload/v1772473744/page_2_fkpuiv.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772473743/page_1_wg5vux.png"]
  },
  { 
    src: "https://res.cloudinary.com/dplv15n29/video/upload/v1772475157/shoe_gate_video_mo2b0x.mp4", 
    hoverId: "",
    type: "video", 
    title: "Reels", 
    subtitle: "Motion Content", 
    size: "h-[500px]",
    gallery: ["https://res.cloudinary.com/dplv15n29/video/upload/v1772475157/shoe_gate_video_mo2b0x.mp4,https://res.cloudinary.com/dplv15n29/video/upload/v1772475167/volt_brand_lUNCH_VIDEO_l8hrmh.mp4","https://res.cloudinary.com/dplv15n29/video/upload/v1772475201/as_and_studio_launch_video_final_msyrge.mp4","https://res.cloudinary.com/dplv15n29/video/upload/v1772475195/flexkicks_promotional_video_hvw2fs.mp4","https://res.cloudinary.com/dplv15n29/video/upload/v1772475168/short_video_2_rayy3h.mp4"]
  },
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

export default function TypographyColorPage() {
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

  // Helper to detect if a source is a video
  const isVideo = (src) => {
    if (!src) return false;
    // Check for common video extensions or Cloudinary video path
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
            
            {/* Dashed Border Container */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative border border-dashed border-gray-400 p-8 md:p-12 max-w-4xl"
            >
                {/* Labels on border */}
                <span className="absolute -top-3 left-8 bg-[#FFFBF5] px-4 text-xs font-bold tracking-widest uppercase border border-gray-300 rounded-full py-1">
                    System
                </span>
                <span className="absolute -bottom-3 right-8 bg-[#FFFBF5] px-4 text-xs font-bold tracking-widest uppercase border border-gray-300 rounded-full py-1">
                    Style
                </span>

                <h1 className="text-5xl md:text-7xl lg:text-7xl font-serif text-black leading-[1.1]">
                    Typography & Colour <br/>
                    <span className="italic text-gray-600">Building blocks of brand.</span>
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
                          <>
                            <OptimizedImage 
                              src={item.src} 
                              alt={item.title} 
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {item.hoverId && (
                               <OptimizedImage 
                                  src={item.hoverId} 
                                  alt={`${item.title} Hover`} 
                                  fill
                                  className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out group-hover:scale-105"
                               />
                            )}
                          </>
                        )}
                        
                        {/* Overlay with Text */}
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center z-10">
                            <h3 className="text-white font-serif text-2xl italic mb-2">{item.title}</h3>
                            <span className="text-white/80 text-xs tracking-widest uppercase">
                              {item.gallery?.length > 0 ? "View Gallery" : "Brand Assets"}
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
                  {/* Smart handling for strings in gallery */}
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

              {/* Pagination Info */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/50 font-light tracking-[0.2em] text-sm">
                {currentImageIndex + 1} / {selectedProject.gallery.length}
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
