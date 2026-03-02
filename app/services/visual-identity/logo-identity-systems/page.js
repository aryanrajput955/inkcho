"use client";

import OptimizedImage from "@/app/components/OptimizedImage";
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
    id: "https://res.cloudinary.com/dplv15n29/image/upload/v1772459087/ChatGPT_Image_Feb_22_2026_02_41_40_PM_hwx4rs.png", // Primary Cloudinary Image ID
    hoverId: "https://res.cloudinary.com/dplv15n29/image/upload/v1772459089/ChatGPT_Image_Feb_22_2026_03_06_27_PM_r1iq8k.png", // Hover Cloudinary Image ID (optional)
    title: "Planholic", 
    size: "h-[400px]",
    gallery: ["https://res.cloudinary.com/dplv15n29/image/upload/v1772459088/White_and_Grey_Classic_Art_Gallery_Logo_z3e8by.png", "https://res.cloudinary.com/dplv15n29/image/upload/v1772459089/ChatGPT_Image_Feb_22_2026_03_06_27_PM_r1iq8k.png", "https://res.cloudinary.com/dplv15n29/image/upload/v1772459087/ChatGPT_Image_Feb_22_2026_02_41_40_PM_hwx4rs.png"] // List of Cloudinary IDs for the gallery
  },
 
  { 
    id: "https://res.cloudinary.com/dplv15n29/image/upload/v1772459199/ChatGPT_Image_Feb_22_2026_12_14_03_PM_pz8ene.png", 
    hoverId: "https://res.cloudinary.com/dplv15n29/image/upload/v1772459202/horizontal-paper-bag-mockup-featuring-a-plain-background-3476-el1_zgjhqm.png", 
    title: "Bleed With Pride", 
    size: "h-[300px]",
    gallery: ["https://res.cloudinary.com/dplv15n29/image/upload/v1772459194/BWP_qwg1c7.jpg", "https://res.cloudinary.com/dplv15n29/image/upload/v1772459196/ChatGPT_Image_Feb_22_2026_11_57_53_AM_frbhmk.png", "https://res.cloudinary.com/dplv15n29/image/upload/v1772459197/business-card-mockup-lying-on-top-of-a-wooden-table-a6155_zgvvqj.png", "https://res.cloudinary.com/dplv15n29/image/upload/v1772459199/ChatGPT_Image_Feb_22_2026_12_14_03_PM_pz8ene.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459201/mockup-of-the-back-and-front-of-a-rectangle-pin-button-3531-el1_y287f1.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459202/horizontal-paper-bag-mockup-featuring-a-plain-background-3476-el1_zgjhqm.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459203/paper-bag-mockup-of-a-shopping-bag-sitting-on-top-of-a-table-a6863_z8gmlq.png"]
  },
  { 
    id: "https://res.cloudinary.com/dplv15n29/image/upload/v1772459167/mockup-of-a-snapback-hat-on-a-solid-surface-1489-el_zgions.png", 
    hoverId: "https://res.cloudinary.com/dplv15n29/image/upload/v1772459166/round-sign-mockup-hanging-from-outside-a-storea14979_bgihsb.png", 
    title: "Construction Brand Logo", 
    size: "h-[450px]",
    gallery: ["https://res.cloudinary.com/dplv15n29/image/upload/v1772459170/polo-shirt-mockup-featuring-a-man-looking-downwards-3190-el1_xkjffr.png", "https://res.cloudinary.com/dplv15n29/image/upload/v1772459167/mockup-of-a-snapback-hat-on-a-solid-surface-1489-el_zgions.png", "https://res.cloudinary.com/dplv15n29/image/upload/v1772459166/round-sign-mockup-hanging-from-outside-a-storea14979_bgihsb.png", "https://res.cloudinary.com/dplv15n29/image/upload/v1772459165/branding-stickers-mockup-featuring-a-colorful-background-m31370_l30ocg.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459152/mockup-of-a-folded-polo-shirt-placed-on-a-solid-surface-3091-el1_eyrfzm.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459152/mockup-of-a-pin-back-button-1167-el_lqbeoz.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459152/mockup-of-a-folded-polo-shirt-placed-on-a-solid-surface-3091-el1_eyrfzm.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459151/mockup-featuring-a-set-of-business-cards-a6223_bdyy0t.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459150/mockup-of-a-circular-sign-by-a-brick-wall-store-2220-el1_icpnav.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459146/hat-mockup-over-a-transparent-png-background-11703_1_bb2pqp.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459144/front-and-back-view-mockup-of-a-round-button-3510-el1_qczl4l.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459141/circular-sign-mockup-placed-outside-a-store-2224-el1_nl0enr.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459140/free-image-resizer-cropper_3_zrfl0x.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459140/free-image-resizer-cropper_gnqekb.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459138/ChatGPT_Image_Feb_22_2026_02_14_32_PM_p7hywz.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772459137/button-mockup-featuring-a-plain-color-backdrop-1168-el_x41knw.png"]
  },
   { 
    id: "https://res.cloudinary.com/dplv15n29/image/upload/v1772459042/ChatGPT_Image_Feb_22_2026_03_03_33_PM_mfzxyj.png", 
    hoverId: "", 
    title: "Raghukulam Logo", 
    size: "h-[550px]", 
    objectFit: "object-contain bg-white",
    gallery: ["https://res.cloudinary.com/dplv15n29/image/upload/v1772459042/ChatGPT_Image_Feb_22_2026_03_03_33_PM_mfzxyj.png", "https://res.cloudinary.com/dplv15n29/image/upload/v1772459042/Raghukulam_Stand_Packet_final_copy_ixegrp.png"]
  },
  { 
    id: "https://res.cloudinary.com/dplv15n29/image/upload/v1772458973/msk_02_dtqbr1.jpg", 
    hoverId: "", 
    title: "Salahuddin Logo", 
    size: "h-[450px]",
    gallery: ["https://res.cloudinary.com/dplv15n29/image/upload/v1772458973/msk_02_dtqbr1.jpg"]
  },
  {
    id: "https://res.cloudinary.com/dplv15n29/image/upload/v1772462868/mockup-of-circular-branding-stickers-m31371_ohschh.png", 
    hoverId: "https://res.cloudinary.com/dplv15n29/image/upload/v1772462869/Bhawani_Singh_Group_mockup_copy_fqlrmu.jpg", 
    title: "Bhawani Singh Logo", 
    size: "h-[550px]",
    gallery: ["https://res.cloudinary.com/dplv15n29/image/upload/v1772462888/T_Shirt_Design-transformed_te8egb.jpg", "https://res.cloudinary.com/dplv15n29/image/upload/v1772462868/mockup-of-circular-branding-stickers-m31371_ohschh.png", "https://res.cloudinary.com/dplv15n29/image/upload/v1772462869/Bhawani_Singh_Group_mockup_copy_fqlrmu.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772462875/Board_3_w2obpn.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772462865/Cap_Design_jj91rj.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772462861/Logo_With_tag_line_ze17c2.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772462852/ChatGPT_Image_Feb_22_2026_01_13_04_PM_ty9z1h.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772462839/Visiting_Card_Front_Main_k1xgff.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772462838/Visiting_Card_Front_y3jjm5.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772462835/BSG_jbjqxr.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772462834/Visiting_Card_Back_Main_q1koo3.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772462833/ChatGPT_Image_Feb_22_2026_01_35_28_PM_ezah99.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772462832/BSG_Icon_Lily_Golden_copy_frvgtg.png","https://res.cloudinary.com/dplv15n29/image/upload/v1772462832/Visiting_Card_Back_uqgqd9.jpg"]
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

  return (
    <main className="relative min-h-screen bg-[#FFFBF5] text-black overflow-hidden pt-12 pb-24">
      
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
        
        <div className="relative flex flex-col items-center justify-center text-center ">
            <div className="relative w-full max-w-5xl aspect-[21/9]">
              <OptimizedImage 
                 src="https://res.cloudinary.com/dplv15n29/image/upload/v1772463623/visual_tcvyh7.png" // Hero Cloudinary ID
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
                    <div className={`group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out ${project.gallery?.length > 0 ? 'cursor-pointer' : 'cursor-default'} ${project.size}`}>
                        {/* Base Image */}
                        <OptimizedImage 
                            src={project.id} 
                            alt={project.title} 
                            fill
                            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                            className={`${project.objectFit || 'object-cover'} transition-transform duration-700 group-hover:scale-105 ${project.objectPosition || 'object-center'}`}
                        />
                        
                        {/* Hover Image */}
                        {project.hoverId && (
                             <OptimizedImage 
                                src={project.hoverId} 
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
                              {project.gallery?.length > 0 ? "View Gallery" : "Brand Identity"}
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
                  <OptimizedImage
                    src={selectedProject.gallery[currentImageIndex]}
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    fill
                    priority
                    className="object-contain shadow-2xl"
                  />
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
