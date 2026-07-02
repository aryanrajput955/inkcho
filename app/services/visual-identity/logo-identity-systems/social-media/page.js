"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import OptimizedImage from "@/app/components/OptimizedImage";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft, 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  ArrowUpRight 
} from "lucide-react";

// Mock Projects Data matching user's assets and styles
const socialProjects = [
  {
    id: "ridah",
    brandName: "Ridah",
    username: "ridah.clothing",
    tagline: "Embrace everyday style with Ridah",
    cardTitle: "Ridah Apparel Kit",
    cardSubtitle: "Everyday Style & Glam",
    progress: "96%",
    stats: "8 templates • $20k budget",
    bgImage: "https://res.cloudinary.com/dplv15n29/image/upload/v1782116821/b1_yzbyxu.png",
    cardImage: "https://res.cloudinary.com/dplv15n29/image/upload/v1782109712/s2_vko79y.jpg",
    posts: [
      { id: 1, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782925902/p1_liqepo.jpg", likes: "1,540", comments: "85" },
      { id: 2, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782925902/p2_iyuerv.jpg", likes: "2,120", comments: "105" },
      { id: 3, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782925901/p3_pyu8hd.jpg", likes: "1,890", comments: "92" },
      { id: 4, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782109875/s5_i4lxvh.jpg", likes: "1,524", comments: "62" },
      { id: 5, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782109875/s7_samsvc.jpg", likes: "1,732", comments: "81" },
      { id: 6, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782109875/s8_e5axvd.jpg", likes: "2,190", comments: "110" },
      { id: 7, src: "https://res.cloudinary.com/dplv15n29/video/upload/v1782927173/reel1_memyil.mp4", type: "video" },
      { id: 8, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782927173/so2_z98a0e.jpg", likes: "2,420", comments: "135" },
      { id: 9, src: "https://res.cloudinary.com/dplv15n29/video/upload/v1782927173/reel2_zl1gaj.mp4", type: "video" },
      { id: 10, src: "https://res.cloudinary.com/dplv15n29/video/upload/v1782930766/rel3_wazwsq.mp4", type: "video" },
      { id: 11, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782930765/so10_mpuvmg.jpg", likes: "1,654", comments: "78" },
      { id: 12, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782930765/so4_ucyrvx.jpg", likes: "2,091", comments: "105" }
    ]
  },
  {
    id: "earthora",
    brandName: "Earthora",
    username: "earthora.eco",
    tagline: "Redefining Packaging, Naturally",
    cardTitle: "Earthora Packaging Kit",
    cardSubtitle: "Natural Design System",
    progress: "98%",
    stats: "8 templates • $18k budget",
    bgImage: "https://res.cloudinary.com/dplv15n29/image/upload/v1782116822/bg2_ft0nnz.png",
    cardImage: "https://res.cloudinary.com/dplv15n29/image/upload/v1782111379/e8_lvfdtr.jpg",
    posts: [
      { id: 1, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782111379/e3_xgtch0.jpg", likes: "1,452", comments: "67" },
      { id: 2, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782111380/e5_kc6mva.jpg", likes: "1,204", comments: "48" },
      { id: 3, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782111379/e8_lvfdtr.jpg", likes: "1,892", comments: "94" },
      { id: 4, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782111380/e2_afst0d.jpg", likes: "1,675", comments: "81" },
      { id: 5, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782111380/e1_qvg0m8.jpg", likes: "2,091", comments: "110" },
      { id: 6, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782111547/e4_b68lz2.jpg", likes: "1,542", comments: "72" },
      { id: 7, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782923534/so1_vumbua.jpg", likes: "1,452", comments: "67" },
      { id: 8, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782923535/so2_satt4d.jpg", likes: "1,204", comments: "48" },
      { id: 9, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782923535/so3_oa7bdy.jpg", likes: "1,892", comments: "94" },
      { id: 10, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782923534/so4_uxyggb.jpg", likes: "1,675", comments: "81" },
      { id: 11, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782923845/so9_lpow8w.jpg", likes: "2,091", comments: "110" },
      { id: 12, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782923534/so5_ehvvic.jpg", likes: "1,542", comments: "72" },
      { id: 13, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782923534/so6_k72tkh.jpg", likes: "1,884", comments: "90" },
      { id: 14, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782923534/so7_t5rbku.jpg", likes: "1,921", comments: "105" },
      { id: 15, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782923534/so8_rch6u0.jpg", likes: "2,314", comments: "115" }
    ]
  },
  {
    id: "fort-in-rajasthan",
    brandName: "Fort in Rajasthan",
    username: "fortinrajasthan",
    tagline: "Majestic Heritage & Royal Splendor",
    cardTitle: "Rajasthan Fort Showcase",
    cardSubtitle: "Cultural Identity Kit",
    progress: "94%",
    stats: "8 templates • $22k budget",
    bgImage: "https://res.cloudinary.com/dplv15n29/image/upload/v1782116542/bg4_knwejk.png",
    cardImage: "https://res.cloudinary.com/dplv15n29/image/upload/v1782112620/r4_euojl3.jpg",
    posts: [
      { id: 1, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782112619/r1_soaclz.jpg", likes: "2,314", comments: "115" },
      { id: 2, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782112620/r2_tbpkg0.jpg", likes: "1,884", comments: "78" },
      { id: 3, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782112619/r3_gphqzn.jpg", likes: "2,091", comments: "94" },
      { id: 4, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782112620/r4_euojl3.jpg", likes: "3,410", comments: "189" },
      { id: 5, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782112619/r5_h0lbcd.jpg", likes: "1,940", comments: "81" },
      { id: 6, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782112618/r6_utdxqv.jpg", likes: "2,752", comments: "142" },
      { id: 7, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782112619/r7_rrjcvs.jpg", likes: "2,110", comments: "99" },
      { id: 8, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782112618/r8_nuj0ie.jpg", likes: "3,043", comments: "167" },
      { id: 9, src: "https://res.cloudinary.com/dplv15n29/video/upload/v1782921656/vid_bbcbpc.mp4", type: "video" }
    ]
  },
  {
    id: "9to5",
    brandName: "9to5",
    username: "9to5.workspace",
    tagline: "Elevate your daily grind",
    cardTitle: "9to5 Work Essentials",
    cardSubtitle: "Professional Identity Kit",
    progress: "100%",
    stats: "9 templates • $20k budget",
    bgImage: "https://res.cloudinary.com/dplv15n29/image/upload/v1782990848/bghero_igjjzi.png",
    cardImage: "https://res.cloudinary.com/dplv15n29/image/upload/v1782990618/91_ijr88k.jpg",
    posts: [
      { id: 1, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782990618/91_ijr88k.jpg", likes: "2,420", comments: "135" },
      { id: 2, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782990619/92_aju26s.jpg", likes: "1,540", comments: "85" },
      { id: 3, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782990618/93_amjrw6.jpg", likes: "1,890", comments: "92" },
      { id: 4, src: "https://res.cloudinary.com/dplv15n29/video/upload/v1782991903/reel4_kj0ttn.mp4", type: "video" },
      { id: 5, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782990618/95_zba1un.jpg", likes: "3,100", comments: "160" },
      { id: 6, src: "https://res.cloudinary.com/dplv15n29/video/upload/v1782991903/reel5_fk8b1c.mp4", type: "video" },
      { id: 7, src: "https://res.cloudinary.com/dplv15n29/video/upload/v1782991901/reel6_dcfrtt.mp4", type: "video" },
      { id: 8, src: "https://res.cloudinary.com/dplv15n29/image/upload/v1782990617/94_p98drr.jpg", likes: "2,190", comments: "110" },
      { id: 9, src: "https://res.cloudinary.com/dplv15n29/video/upload/v1782991901/reel7_bfyzlt.mp4", type: "video" }
    ]
  }
];

export default function SocialMediaPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGridProject, setSelectedGridProject] = useState(null);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [selectedPost, setSelectedPost] = useState(null); // Lightbox popup

  const activeProject = socialProjects[currentIndex] || socialProjects[0];

  // Stable references to prevent stale closures and useEffect dependency array size warning
  const selectedGridProjectRef = React.useRef(selectedGridProject);
  const selectedPostRef = React.useRef(selectedPost);

  useEffect(() => {
    selectedGridProjectRef.current = selectedGridProject;
  }, [selectedGridProject]);

  useEffect(() => {
    selectedPostRef.current = selectedPost;
  }, [selectedPost]);

  // Disable scroll lock on mount/unmount safety
  useEffect(() => {
    document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % socialProjects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + socialProjects.length) % socialProjects.length);
  };

  // Keyboard navigation with stable dependency array
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedPostRef.current) {
        if (e.key === "Escape") setSelectedPost(null);
        return;
      }
      if (selectedGridProjectRef.current) {
        if (e.key === "Escape") setSelectedGridProject(null);
        return;
      }
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Framer Motion Variants for semicircle swing & tilt animation
  const sliderVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      rotate: dir > 0 ? 25 : -25,
      y: 50,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      rotate: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 180, damping: 20 },
        rotate: { type: "spring", stiffness: 180, damping: 20 },
        y: { type: "spring", stiffness: 180, damping: 20 },
        scale: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.4 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      rotate: dir > 0 ? -25 : 25,
      y: 50,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 180, damping: 20 },
        rotate: { type: "spring", stiffness: 180, damping: 20 },
        y: { type: "spring", stiffness: 180, damping: 20 },
        scale: { duration: 0.5 },
        opacity: { duration: 0.3 }
      }
    })
  };

  const bgVariants = {
    initial: (dir) => ({
      x: dir > 0 ? 150 : -150,
      rotate: dir > 0 ? 10 : -10,
      scale: 1.25,
      opacity: 0
    }),
    animate: {
      x: 0,
      rotate: 0,
      scale: 1.1,
      opacity: 1,
      transition: {
        x: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
        rotate: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.8 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -150 : 150,
      rotate: dir > 0 ? -10 : 10,
      scale: 1.25,
      opacity: 0,
      transition: {
        x: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
        rotate: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.6 }
      }
    })
  };

  return (
    <main className="relative min-h-screen bg-[#FFFBF5] text-black flex flex-col font-[var(--font-body)]">
      
      {/* Background Images Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={`bg-${selectedGridProject ? selectedGridProject.id : activeProject.id}`}
            custom={direction}
            variants={bgVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <OptimizedImage
              src={selectedGridProject ? selectedGridProject.bgImage : activeProject.bgImage}
              alt="Brand background"
              fill
              className="object-cover opacity-100 scale-100 transition-all duration-[2000ms] filter blur-md"
            />
            {/* Soft blending overlay */}
            <div className="absolute inset-0 bg-black/[0.04] pointer-events-none" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Container in Document Flow to Enable Natural Scroll */}
      <div className="relative z-10 w-full flex-1 flex flex-col max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        
        {/* A. HERO SLIDER VIEW */}
        <AnimatePresence mode="wait">
          {!selectedGridProject && (
            <motion.div
              key="slider-view-content"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex-1 flex flex-col justify-between pt-24 pb-8 sm:pb-12"
            >
              {/* Header Bar */}
              <div className="w-full flex flex-row items-center justify-start py-6">
                <Link 
                  href="/services/visual-identity/logo-identity-systems" 
                  className="group flex items-center gap-2 text-black/70 hover:text-[#9a1b40] transition-all bg-black/5 border border-black/10 rounded-full px-4 py-2 text-[10px] tracking-[0.2em] uppercase backdrop-blur-md"
                >
                  <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                  <span>Back</span>
                </Link>
              </div>

              {/* Central Grid-like Flex for Slider */}
              <div className="flex-1 flex flex-col items-center justify-center py-8">
                <div className="relative w-full max-w-2xl flex items-center justify-between gap-4">
                  
                  {/* Nav Button Left */}
                  <button 
                    onClick={handlePrev}
                    className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-black/10 bg-white/70 hover:bg-[#9a1b40] hover:text-white hover:border-transparent transition-all duration-300 group backdrop-blur-sm shrink-0 shadow-lg text-black"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="group-hover:text-white transition-colors group-hover:-translate-x-0.5 transition-transform w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Responsive Slider Card Container */}
                  <div className="flex-1 flex justify-center">
                    <AnimatePresence custom={direction} mode="popLayout">
                      <motion.div
                        key={activeProject.id}
                        custom={direction}
                        variants={sliderVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        onClick={() => setSelectedGridProject(activeProject)}
                        className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[360px] md:max-w-[390px] aspect-[11/14] sm:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] cursor-pointer group bg-zinc-900"
                      >
                        {/* Cloudinary Card Image */}
                        <OptimizedImage
                          src={activeProject.cardImage}
                          alt={activeProject.brandName}
                          fill
                          sizes="(max-width: 640px) 280px, 390px"
                          priority
                          className="object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                        
                        {/* Subtle Light-overlay shading */}
                        <div className="absolute inset-0 bg-black/[0.06] group-hover:bg-black/[0.1] transition-colors duration-300 pointer-events-none" />

                        {/* Glassmorphism Bottom Tray Panel */}
                        <div className="absolute bottom-0 left-0 right-0 z-10 bg-black/45 backdrop-blur-lg border-t border-white/10 p-5 sm:p-6 flex flex-col text-left group-hover:bg-black/50 transition-colors duration-300 pointer-events-auto">
                          <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-white/50 mb-1.5 block leading-none">
                            {activeProject.tagline}
                          </span>
                          
                          <div className="flex items-center justify-between mt-1">
                            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none group-hover:text-[#9a1b40] transition-colors duration-350">
                              {activeProject.cardTitle}
                            </h2>
                            <span className="flex items-center gap-0.5 text-[#9a1b40] group-hover:text-white transition-colors duration-200 font-semibold uppercase tracking-wider text-[9px] whitespace-nowrap shrink-0">
                              View Grid <ArrowUpRight size={10} />
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Nav Button Right */}
                  <button 
                    onClick={handleNext}
                    className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-black/10 bg-white/70 hover:bg-[#9a1b40] hover:text-white hover:border-transparent transition-all duration-300 group backdrop-blur-sm shrink-0 shadow-lg text-black"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="group-hover:text-white transition-colors group-hover:translate-x-0.5 transition-transform w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                </div>
              </div>

              {/* Bottom Dot Nav Indicators & Help Text */}
              <div className="w-full flex flex-col items-center gap-3 py-4">
                <div className="flex gap-2">
                  {socialProjects.map((proj, idx) => (
                    <button
                      key={proj.id}
                      onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                      }}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        idx === currentIndex ? "w-6 bg-[#9a1b40]" : "w-1.5 bg-black/15 hover:bg-black/35"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-[9px] font-bold tracking-[0.25em] text-black/35 uppercase animate-pulse">
                  Click card to load photo grid
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* B. RESPONSIVE PHOTO GRID VIEW (SCROLLABLE IN FLOW) */}
        <AnimatePresence mode="wait">
          {selectedGridProject && (
            <motion.div
              key="grid-view-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex-1 flex flex-col pt-24 pb-20"
            >
              {/* Back & Close Header */}
              <div className="w-full flex flex-row items-center justify-between py-6 border-b border-black/10">
                <button
                  onClick={() => setSelectedGridProject(null)}
                  className="group flex items-center gap-2 text-black/70 hover:text-[#9a1b40] transition-all bg-black/5 border border-black/10 rounded-full px-4 py-2 text-[10px] tracking-[0.2em] uppercase backdrop-blur-md"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
                  <span>Back to slider</span>
                </button>
                <h1 className="text-sm font-semibold tracking-widest uppercase text-black/90 text-center flex-1 hidden xs:block">
                  {selectedGridProject.brandName} Social Kit
                </h1>
                <div className="text-right">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#9a1b40] uppercase block">
                    {selectedGridProject.posts.length} Items
                  </span>
                </div>
              </div>

              {/* Title display for tiny screens */}
              <h1 className="text-sm font-semibold tracking-widest uppercase text-black/90 text-left pt-6 block xs:hidden">
                {selectedGridProject.brandName} Social Kit
              </h1>

              {/* Responsive Photo Grid Container */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 py-10">
                {selectedGridProject.posts.map((post, postIdx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: postIdx * 0.05, duration: 0.5 }}
                    onClick={() => setSelectedPost(post)}
                    className="relative aspect-square cursor-pointer group bg-zinc-950 overflow-hidden border border-black/5 rounded-xl sm:rounded-2xl shadow-lg shadow-black/30"
                  >
                    {post.type === 'video' ? (
                      <video
                        src={post.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                    ) : (
                      <OptimizedImage
                        src={post.src}
                        alt={`${selectedGridProject.brandName} kit item`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 360px"
                        className="object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                      />
                    )}
                    
                    {/* Dimming overlay on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* C. LIGHTBOX DETAIL POPUP */}
      <AnimatePresence>
        {selectedPost && selectedGridProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            {/* Close Circle Button */}
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/5 p-3 rounded-full hover:rotate-90 transition-transform duration-300 z-10"
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            {/* Centered Image Container - Clean Screen Mode */}
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-4xl max-h-[85vh] flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-[10px] tracking-widest text-white/80 uppercase">
                @{selectedGridProject.username}
              </div>

              <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center bg-zinc-950 max-h-[80vh] rounded-2xl overflow-hidden border border-white/10">
                {selectedPost.type === 'video' ? (
                  <video
                    src={selectedPost.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <OptimizedImage
                    src={selectedPost.src}
                    alt="Enlarged branding preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
