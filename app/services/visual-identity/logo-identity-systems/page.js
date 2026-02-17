"use client";

import { motion } from "framer-motion";
import Masonry from "react-masonry-css";
import React from 'react';

// Masonry Breakpoints
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

// Custom Grid Data with varied sizes
const projects = [
  { src: "/img1.jpeg", hoverSrc: "/s1.jpg", title: "Ariso Skincare", size: "h-[400px]" },
  { src: "/img2.jpeg", hoverSrc: "/s2.jpg", title: "Eterna Aesthetics", size: "h-[550px]" },
  { src: "/s3.webp", hoverSrc: "/s5.webp", title: "Oblivra", size: "h-[300px]" },
  { src: "/s4.webp", title: "Sivco Burco", size: "h-[300px]" },
  { src: "/img1.jpeg", title: "Maison Sauve", size: "h-[320px]" },
  { src: "/s2.jpg", title: "Miretta Interiors", size: "h-[250px]" },
  { src: "/img2.jpeg", title: "Botanique", size: "h-[300px]" },
  { src: "/s5.webp", title: "Olfee", size: "h-[320px]" },
  { src: "/s6.webp", title: "West End", size: "h-[300px]" },
  { src: "/s4.webp", title: "Lumina", size: "h-[450px]" }
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
  
  // Force scroll to top on mount to fix navigation issues
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <motion.img 
               src="/visual.png"
               alt="Visual Identity Hero"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="w-full max-w-5xl h-auto object-contain"
            />

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
                >
                    <div className={`group relative rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer ${project.size}`}>
                        {/* Base Image */}
                        <img 
                            src={project.src} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Hover Image (First 3 items) */}
                        {project.hoverSrc && (
                             <img 
                                src={project.hoverSrc} 
                                alt={`${project.title} Hover`} 
                                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out group-hover:scale-105 transition-transform"
                             />
                        )}

                        {/* Overlay with Text */}
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-4 text-center z-10">
                            <h3 className="text-white font-serif text-2xl italic mb-2">{project.title}</h3>
                            <span className="text-white/80 text-xs tracking-widest uppercase">View Case Study</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </Masonry>

      </div>
    </main>
  );
}
