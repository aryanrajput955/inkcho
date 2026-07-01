"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import OptimizedImage from "@/app/components/OptimizedImage";
import { ChevronLeft, ChevronRight, X, ArrowLeft } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Exact brand data from /visual-identity/logo-identity-systems
const brandProjects = [
  {
    id: "planholic",
    title: "Planholic",
    subtitle: "Productivity Organizer",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459087/ChatGPT_Image_Feb_22_2026_02_41_40_PM_hwx4rs.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459089/ChatGPT_Image_Feb_22_2026_03_06_27_PM_r1iq8k.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459088/White_and_Grey_Classic_Art_Gallery_Logo_z3e8by.png"
    ]
  },
  {
    id: "bleed-with-pride",
    title: "Bleed With Pride",
    subtitle: "Social Advocacy Mark",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459199/ChatGPT_Image_Feb_22_2026_12_14_03_PM_pz8ene.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459194/BWP_qwg1c7.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459196/ChatGPT_Image_Feb_22_2026_11_57_53_AM_frbhmk.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459197/business-card-mockup-lying-on-top-of-a-wooden-table-a6155_zgvvqj.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459201/mockup-of-the-back-and-front-of-a-rectangle-pin-button-3531-el1_y287f1.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459202/horizontal-paper-bag-mockup-featuring-a-plain-background-3476-el1_zgjhqm.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459203/paper-bag-mockup-of-a-shopping-bag-sitting-on-top-of-a-table-a6863_z8gmlq.png"
    ]
  },
  {
    id: "construction-brand-logo",
    title: "TR.constructions\nand Groundworks",
    subtitle: "Industrial Identity System",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459167/mockup-of-a-snapback-hat-on-a-solid-surface-1489-el_zgions.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459166/round-sign-mockup-hanging-from-outside-a-storea14979_bgihsb.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459170/polo-shirt-mockup-featuring-a-man-looking-downwards-3190-el1_xkjffr.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459165/branding-stickers-mockup-featuring-a-colorful-background-m31370_l30ocg.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459152/mockup-of-a-folded-polo-shirt-placed-on-a-solid-surface-3091-el1_eyrfzm.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459152/mockup-of-a-pin-back-button-1167-el_lqbeoz.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459151/mockup-featuring-a-set-of-business-cards-a6223_bdyy0t.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459150/mockup-of-a-circular-sign-by-a-brick-wall-store-2220-el1_icpnav.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459146/hat-mockup-over-a-transparent-png-background-11703_1_bb2pqp.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459144/front-and-back-view-mockup-of-a-round-button-3510-el1_qczl4l.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459141/circular-sign-mockup-placed-outside-a-store-2224-el1_nl0enr.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459140/free-image-resizer-cropper_3_zrfl0x.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459140/free-image-resizer-cropper_gnqekb.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459138/ChatGPT_Image_Feb_22_2026_02_14_32_PM_p7hywz.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772459137/button-mockup-featuring-a-plain-color-backdrop-1168-el_x41knw.png"
    ]
  },
  {
    id: "bhawani-singh-logo",
    title: "Bhawani Singh Group",
    subtitle: "Prestige Lifestyle System",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462868/mockup-of-circular-branding-stickers-m31371_ohschh.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462869/Bhawani_Singh_Group_mockup_copy_fqlrmu.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462888/T_Shirt_Design-transformed_te8egb.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462875/Board_3_w2obpn.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462865/Cap_Design_jj91rj.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462861/Logo_With_tag_line_ze17c2.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462852/ChatGPT_Image_Feb_22_2026_01_13_04_PM_ty9z1h.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462839/Visiting_Card_Front_Main_k1xgff.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462838/Visiting_Card_Front_y3jjm5.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462835/BSG_jbjqxr.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462834/Visiting_Card_Back_Main_q1koo3.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462833/ChatGPT_Image_Feb_22_2026_01_35_28_PM_ezah99.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462832/BSG_Icon_Lily_Golden_copy_frvgtg.png",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772462832/Visiting_Card_Back_uqgqd9.jpg"
    ]
  }
];

// Layout configuration to place side cards asymmetrically for desktop
const sideCardPositions = [
  {
    // Card 1: Top Left
    containerClass: "absolute left-[4vw] top-[14vh] w-[13vw] min-w-[130px] max-w-[230px] aspect-[4/5] z-20",
    tiltAngle: -6
  },
  {
    // Card 2: Top Right
    containerClass: "absolute right-[4vw] top-[12vh] w-[14vw] min-w-[140px] max-w-[240px] aspect-square z-10",
    tiltAngle: 5
  },
  {
    // Card 3: Bottom Left
    containerClass: "absolute left-[4vw] bottom-[14vh] w-[14vw] min-w-[140px] max-w-[240px] aspect-[3/4] z-15",
    tiltAngle: 4
  },
  {
    // Card 4: Bottom Right
    containerClass: "absolute right-[4vw] bottom-[12vh] w-[13vw] min-w-[130px] max-w-[230px] aspect-[4/3] z-25",
    tiltAngle: -4
  }
];

export default function LogoShowcasePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Single fixed showcase pinning scroll controller
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${brandProjects.length * 80}%`, // Scroll space (80vh per project)
        pin: ".pinned-showcase-section",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate active index cleanly
          const idx = Math.min(
            Math.floor(progress * brandProjects.length),
            brandProjects.length - 1
          );
          setActiveIndex(idx);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Keyboard navigation for Lightbox Gallery
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === "Escape") setSelectedProject(null);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % selectedProject.gallery.length);
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const openLightbox = (project, idx) => {
    setSelectedProject(project);
    setLightboxIndex(idx);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const activeProject = brandProjects[activeIndex] || brandProjects[0];

  return (
    <main className="relative min-h-screen bg-[#FFFBF5] text-black flex flex-col font-[var(--font-body)]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black">
        {/* BG Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/logo-and-identity-systems-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          {/* Subtle Radial Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
          <div className="absolute inset-0 bg-black/45 pointer-events-none" />
        </div>

        {/* Back navigation */}
        <div className="absolute top-8 left-8 z-30">
          <Link 
            href="/services/visual-identity/logo-identity-systems" 
            className="group flex items-center gap-2 text-white/80 hover:text-white transition-all bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase backdrop-blur-md"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back</span>
          </Link>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h1 className="text-[12vw] sm:text-[9rem] font-bold text-white tracking-[0.15em] uppercase select-none leading-none">
              LOGO
            </h1>
            <p className="text-white/60 text-xs sm:text-sm tracking-[0.4em] uppercase font-light">
              Designing Visual Anchors That Define Legacies
            </p>
          </motion.div>

          {/* Scroll Prompt */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-pulse">
            <span className="text-[9px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
            <div className="w-px h-8 bg-white/20 relative overflow-hidden">
              <motion.div 
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 right-0 top-0 h-4 bg-white/60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCROLL HIJACKED IN-PLACE SHOWCASE */}
      <div ref={containerRef} className="relative w-full">
        {/* Scroll Runway Wrapper */}
        <div ref={triggerRef} className="relative w-full">
          
          {/* Pinned Showcase Container - Desktop (md and above) */}
          <div className="pinned-showcase-section hidden md:flex h-screen w-full items-center justify-center bg-[#FFFBF5] overflow-hidden relative">
            
            {/* Scattered Layout Images - Desktop (md and above) */}
            <div className="absolute inset-0 pointer-events-none z-10">
              {brandProjects.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <div key={`project-cards-${project.id}`} className="absolute inset-0" style={{ pointerEvents: isActive ? 'auto' : 'none', zIndex: isActive ? 20 : 0 }}>
                    {project.gallery.slice(0, 4).map((imgUrl, cardIdx) => {
                      const pos = sideCardPositions[cardIdx] || sideCardPositions[0];
                      
                      return (
                        <motion.div
                          key={cardIdx}
                          initial={false}
                          animate={{ 
                            opacity: isActive ? 1 : 0, 
                            scale: isActive ? 1 : 0.9, 
                            y: isActive ? 0 : (idx < activeIndex ? -50 : 50) 
                          }}
                          transition={{ 
                            duration: 0.5, 
                            delay: isActive ? cardIdx * 0.05 : 0,
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          className={`side-img-card ${pos.containerClass} cursor-pointer rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.22)] bg-[#F5F2EC] hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)] transition-shadow duration-500 hover:scale-[1.03]`}
                          style={{
                            transform: `rotate(${pos.tiltAngle}deg)`,
                          }}
                          onClick={() => openLightbox(project, cardIdx)}
                        >
                          <OptimizedImage
                            src={imgUrl}
                            alt={`${project.title} mockup`}
                            fill
                            sizes="(max-width: 1024px) 20vw, 300px"
                            className="object-cover"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Center Content Section */}
            <div className="z-30 absolute inset-0 flex items-center justify-center text-center px-4 md:px-0 pointer-events-none">
              {brandProjects.map((project, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <motion.h2
                    key={`title-${project.id}`}
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : (idx < activeIndex ? -30 : 30) 
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black uppercase leading-tight select-none w-full text-center whitespace-pre-line"
                    style={{ pointerEvents: isActive ? 'auto' : 'none' }}
                  >
                    {project.title}
                  </motion.h2>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* 3. MOBILE MOBILE VIEW - Vertical Stack (Smooth Natural Scroll) */}
      <div className="block md:hidden relative z-10 bg-[#FFFBF5] px-6 py-12 space-y-16">
        {brandProjects.map((project, idx) => (
          <div key={project.id} className="space-y-4">
            <span className="text-[9px] font-black tracking-widest text-[#9a1b40] uppercase">
              Brand // 0{idx + 1}
            </span>
            <h2 className="text-4xl font-bold uppercase text-black">
              {project.title}
            </h2>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {project.gallery.map((imgUrl, imgIdx) => (
                <div
                  key={imgIdx}
                  onClick={() => openLightbox(project, imgIdx)}
                  className="relative aspect-square rounded-xl overflow-hidden bg-[#F5F2EC] shadow-md border border-black/5"
                >
                  <OptimizedImage
                    src={imgUrl}
                    alt={`${project.title} mockup mobile`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 4. LIGHTBOX POPUP GALLERY */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/5 p-3 rounded-full hover:rotate-90 transition-transform duration-300 z-50 cursor-pointer"
              aria-label="Close Gallery"
            >
              <X size={20} />
            </button>

            {/* Left Nav Button */}
            {selectedProject.gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev - 1 + selectedProject.gallery.length) % selectedProject.gallery.length);
                }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 p-4 rounded-full transition-colors z-45 cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Right Nav Button */}
            {selectedProject.gallery.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev + 1) % selectedProject.gallery.length);
                }}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/5 p-4 rounded-full transition-colors z-45 cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Centered Large Image Container */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-5xl max-h-[75vh] flex items-center justify-center rounded-2xl overflow-hidden"
            >
              <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center bg-zinc-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <OptimizedImage
                  src={selectedProject.gallery[lightboxIndex]}
                  alt={`${selectedProject.title} enlarged preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Pagination & Brand Details in overlay footer */}
            <div className="mt-6 text-center select-none z-40">
              <h3 className="text-white font-bold text-lg md:text-xl tracking-wide uppercase mb-1">
                {selectedProject.title}
              </h3>
              <p className="text-white/40 text-xs md:text-sm tracking-[0.2em] uppercase font-light">
                {lightboxIndex + 1} / {selectedProject.gallery.length} • {selectedProject.subtitle}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
