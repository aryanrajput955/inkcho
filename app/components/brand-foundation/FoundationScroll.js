"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OptimizedImage from '@/app/components/OptimizedImage';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    id: "01",
    title: "9to5 Stationery",
    description: "Creating a cohesive visual language that translates strategy into design for modern workspace essentials.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483304/Brand_Guidelines__page-0003_ohbdtm.jpg",
    offset: "up",
    link: "/services/brand-foundation/9to5" // Linked to new page
  },
  {
    id: "02",
    title: "Takhat Villas",
    description: "Shaping meaning, direction, and how the luxury heritage brand speaks to its audience.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483880/Brand_Guidelines__page-0025_c50qng.jpg",
    offset: "down",
    link: "/services/brand-foundation/takhat-villas"
  }
];

export default function FoundationScroll() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const cardsRef = useRef([]);
  const router = useRouter();

  const handleCardClick = (slide) => {
    if (slide.link) {
        router.push(slide.link);
    } else {
        alert("Case study coming soon.");
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const totalScrollWidth = container.scrollWidth - window.innerWidth + 200;

      const scrollTween = gsap.to(container, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 0.8,
          end: `+=${totalScrollWidth}`,
          invalidateOnRefresh: true,
        }
      });

      cardsRef.current.forEach((card, i) => {
        if(!card) return;
        
        gsap.from(card, {
            opacity: 0,
            y: 50,
            rotation: 2,
            scale: 0.9,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left 100%",
              toggleActions: "play none none reverse",
            }
        });
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="relative h-screen overflow-hidden flex flex-row bg-white">
      {/* Fixed Vertical Text on Left */}
      <div className="hidden md:flex flex-col justify-center h-full min-w-[100px] md:min-w-[150px] relative z-30 bg-white border-r border-gray-100">
           <p className="[writing-mode:vertical-rl] rotate-180 text-xs md:text-sm tracking-[0.2em] font-medium text-gray-500 uppercase h-[60%] flex items-center mx-auto text-center leading-loose">
               Without a strong foundation, brands become inconsistent, unclear, and short-lived.
           </p>
      </div>

      {/* Scrolling Content Container */}
      <div ref={containerRef} className="relative flex flex-row items-center h-full px-12 md:px-24 py-20 gap-16 md:gap-32 bg-transparent z-10">
         {/* Reduced spacers for only 2 items */}
         <div className="w-[15vw] flex-shrink-0"></div>

         {slides.map((slide, index) => (
           <div 
              key={slide.id} 
              ref={el => cardsRef.current[index] = el}
              onClick={() => handleCardClick(slide)}
              className={`relative flex-shrink-0 w-[75vw] md:w-[380px] xl:w-[400px] 2xl:w-[450px] flex flex-col z-20 cursor-pointer group select-none ${slide.offset === 'down' ? 'translate-y-12 xl:translate-y-16 2xl:translate-y-24' : '-translate-y-12 xl:-translate-y-16 2xl:-translate-y-24'}`}
           >
              {/* Number */}
              <span className="text-5xl md:text-7xl font-serif mb-4 block text-black group-hover:text-[#9a1b40] transition-colors">
                  {slide.id}
              </span>

              {/* Image Card */}
              <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden shadow-2xl mb-6 rounded-sm">
                  <OptimizedImage 
                    src={slide.image} 
                    alt={slide.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-medium text-[#9a1b40] leading-tight">
                      {slide.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 max-w-xs leading-relaxed">
                      {slide.description}
                  </p>
              </div>
           </div>
         ))}
         <div className="w-[10vw] flex-shrink-0"></div>
      </div>
    </div>
  );
}

