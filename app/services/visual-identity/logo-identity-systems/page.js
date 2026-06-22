"use client";

import OptimizedImage from "@/app/components/OptimizedImage";
import { motion, AnimatePresence } from "framer-motion";
import Masonry from "react-masonry-css";
import React, { useState, useEffect } from 'react';
import Link from "next/link";

// Masonry Breakpoints for 2-column Pinterest grid
const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  700: 2,
  500: 1
};

// 4 Custom Service Cards with exact cover images
const serviceCards = [
  { 
    id: "logo-design",
    title: "Logo Design", 
    category: "Branding Systems",
    size: "h-[450px]",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772459194/BWP_qwg1c7.jpg",
    link: "/services/visual-identity/logo-identity-systems/logo"
  },
  { 
    id: "social-media",
    title: "Social Media", 
    category: "Digital Content",
    size: "h-[360px]",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1782109713/s3_e7feie.jpg",
    link: "/services/visual-identity/logo-identity-systems/social-media"
  },
  { 
    id: "photography",
    title: "Photography", 
    category: "Visual Assets",
    size: "h-[400px]",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772458973/msk_02_dtqbr1.jpg",
    link: "#"
  },
  { 
    id: "art-direction",
    title: "Art Direction", 
    category: "Creative Strategy",
    size: "h-[480px]",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772462868/mockup-of-circular-branding-stickers-m31371_ohschh.png",
    link: "#"
  }
];

// Animation for grid items
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
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
  // Force scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleComingSoon = (e, link) => {
    if (link === "#") {
      e.preventDefault();
      alert("This category showcase is coming soon!");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#FFFBF5] text-black overflow-hidden pt-12 pb-24 font-[var(--font-body)]">
      
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
        


        {/* === HERO VIDEO === */}
        <div className="relative flex flex-col items-center justify-center text-center pt-24 pb-10">
            <div className="relative w-full max-w-5xl h-[45vh]">
              <video
                src="/assets/logo-and-identity-systems-hero.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
        </div>

        {/* === MASONRY GRID === */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex gap-8 md:gap-12 max-w-5xl mx-auto"
          columnClassName="my-masonry-grid_column bg-clip-padding space-y-8 md:space-y-12"
        >
            {serviceCards.map((card, index) => (
                <motion.div
                    key={card.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={itemVariants}
                >
                    <Link 
                      href={card.link}
                      onClick={(e) => handleComingSoon(e, card.link)}
                      className="block group"
                    >
                      <div className={`relative rounded-[2rem] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_55px_rgba(0,0,0,0.22)] transition-all duration-500 ease-out bg-[#F5F2EC] ${card.size}`}>
                          {/* Card Background Image */}
                          <OptimizedImage 
                              src={card.image} 
                              alt={card.title} 
                              fill
                              sizes="(max-width: 700px) 100vw, 50vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          
                          {/* Dark overlay on hover */}
                          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center z-10">
                              <span className="text-white/60 text-[9px] tracking-[0.3em] font-black uppercase mb-1">
                                {card.category}
                              </span>
                              <h3 className="text-white font-bold text-2xl uppercase tracking-wider mb-2">{card.title}</h3>
                              <span className="text-[#9a1b40] group-hover:text-white transition-colors text-[9px] font-bold tracking-widest uppercase bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mt-2">
                                {card.link !== '#' ? "Explore Category" : "Coming Soon"}
                              </span>
                          </div>

                          {/* Static overlay label for readability when not hovered */}
                          <div className="absolute bottom-6 left-6 right-6 z-10 bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-between text-white">
                            <div className="text-left">
                              <span className="text-[8px] font-bold text-white/50 tracking-[0.2em] uppercase block mb-0.5">
                                {card.category}
                              </span>
                              <h4 className="text-sm font-bold uppercase tracking-wider">{card.title}</h4>
                            </div>
                            <span className="text-[10px] text-[#9a1b40] font-black uppercase tracking-widest">
                              ➔
                            </span>
                          </div>
                      </div>
                    </Link>
                </motion.div>
            ))}
        </Masonry>
      </div>
    </main>
  );
}
