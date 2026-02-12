"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const numberRef = useRef(null);
  const columnsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // 1. Progress Animation
    const progressObj = { value: 0 };
    tl.to(progressObj, {
      value: 100,
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.textContent = Math.round(progressObj.value);
        }
      }
    });

    // 2. Content Fade Out
    tl.to(contentRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    });

    // 3. Staggered Column Exit (The Reveal)
    tl.to(columnsRef.current, {
      height: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.inOut",
      transformOrigin: "top" // Shrink from button? No, let's slide up.
      // Actually height: 0 with top origin implies it shrinks to top. 
      // To simulate slide up, we can use yPercent: -100
    }, "-=0.2");

    // Let's retry the column animation for a 'curtain up' feel
    // If we want them to slide UP, we can translate them -100% Y.
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between"
      // Added bg color to container to ensure full coverage even before columns mount if there's a delay, though columns are absolute.
      // Actually columns cover it. Let's just remove the style prop.
    >
        {/* Background Columns */}
        <div className="absolute inset-0 flex z-0">
            {[...Array(5)].map((_, i) => (
                <div 
                    key={i}
                    ref={el => { if (el) columnsRef.current[i] = el; }}
                    className="h-full flex-1 bg-[#9a1b40] relative"
                />
            ))}
        </div>

        {/* Content Overlay */}
        <div ref={contentRef} className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12 text-[#f7f4ec]">
            
            {/* Top Bar: Logo & Status */}
            <div className="flex justify-between items-start w-full">
                <div className="w-32 md:w-40">
                    <img 
                        src="/logo.png" 
                        alt="Logo" 
                        className="w-full h-auto object-contain brightness-0 invert" 
                    />
                </div>
                <div className="hidden md:block text-xs font-light tracking-[0.2em] opacity-80">
                    EST. 2026
                </div>
            </div>

            {/* Center: Maybe a tagline or blank space for cleanliness */}
            <div className="flex-grow flex items-center justify-center">
                <h2 className="text-4xl md:text-6xl font-light tracking-tighter mix-blend-overlay opacity-30">
                    CREATING ECHOES
                </h2>
            </div>

            {/* Bottom Bar: Loading Text & Counter */}
            <div className="flex justify-between items-end w-full">
                <div className="text-xs md:text-sm font-light tracking-widest animate-pulse">
                    LOADING EXPERIENCE...
                </div>
                
                <div className="flex items-start leading-none relative">
                    <span ref={numberRef} className="text-[5rem] md:text-[8rem] lg:text-[10rem] font-medium tracking-tighter tabular-nums leading-none -mb-4 md:-mb-8">
                        0
                    </span>
                    <span className="text-2xl md:text-4xl mt-4 md:mt-8">%</span>
                </div>
            </div>
        </div>
    </div>
  );
}
