"use client";

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OptimizedImage from '@/app/components/OptimizedImage';
import { motion, AnimatePresence } from 'framer-motion';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const slides = [
  {
    id: "01",
    title: "Research and Discovery",
    description: "Understanding the audience, context, and opportunity before decisions are made.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483304/Brand_Guidelines__page-0003_ohbdtm.jpg",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483304/Brand_Guidelines__page-0003_ohbdtm.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483340/92_tjqxuc.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772483334/Brand_Guidelines__page-0008_krvxdy.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772483329/Brand_Guidelines__page-0006_tvtnzn.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772483326/Brand_Guidelines__page-0009_n6r0vk.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772483320/Brand_Guidelines__page-0007_qwzocb.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772483314/Brand_Guidelines__page-0005_boz05g.jpg","https://res.cloudinary.com/dplv15n29/image/upload/v1772483299/Brand_Guidelines__page-0004_qsnpzq.jpg"
    ],
    offset: "up" 
  },
  {
    id: "02",
    title: "Brand Positioning",
    description: "Defining a clear, confident place for the brand to stand.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483368/Brand_Guidelines__page-0011_mk5zld.jpg",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483368/Brand_Guidelines__page-0011_mk5zld.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483349/Brand_Guidelines__page-0016_ahhyjc.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483346/Brand_Guidelines__page-0013_leg8hz.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483354/Brand_Guidelines__page-0014_uciwlq.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483362/Brand_Guidelines__page-0015_pwrht9.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483379/Brand_Guidelines__page-0018_ajhmca.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483359/Brand_Guidelines__page-0017_fkymee.jpg"
    ],
    offset: "down"
  },
  {
    id: "03",
    title: "Purpose, Vision & Brand Voice",
    description: "Shaping meaning, direction, and how the brand speaks.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483880/Brand_Guidelines__page-0025_c50qng.jpg",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483863/Brand_Guidelines__page-0028_dc5r3k.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483880/Brand_Guidelines__page-0025_c50qng.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483820/Brand_Guidelines__page-0029_gh4dvk.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483824/Brand_Guidelines__page-0031_cmsx8m.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483838/Brand_Guidelines__page-0033_bukftd.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483843/Brand_Guidelines__page-0030_sgzsy6.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483854/Brand_Guidelines__page-0026_dqsaf5.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483867/Brand_Guidelines__page-0032_mxs0ma.jpg"
    ],
    offset: "up"
  },
  {
    id: "04",
    title: "Visual Identity System",
    description: "Creating a cohesive visual language that translates strategy into design.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483754/Brand_Guidelines__page-0022-transformed_dborss.jpg",
    gallery: [
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483754/Brand_Guidelines__page-0022-transformed_dborss.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483509/Brand_Guidelines__page-0019_lskspc.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483581/Brand_Guidelines__page-0020_qgrx2c.jpg",
      "https://res.cloudinary.com/dplv15n29/image/upload/v1772483516/Brand_Guidelines__page-0021_rcfgdj.jpg",
      ""
    ],
    offset: "down"
  }
];

export default function FoundationScroll() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const cardsRef = useRef([]);

  const [selectedSlide, setSelectedSlide] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (slide) => {
    setSelectedSlide(slide);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setSelectedSlide(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedSlide.gallery.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedSlide.gallery.length) % selectedSlide.gallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedSlide) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeGallery();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSlide]);

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
          scrub: 1.5,
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
         {/* Initial Spacer to start cards from middle of screen */}
         <div className="w-[40vw] flex-shrink-0"></div>

         {slides.map((slide, index) => (
           <div 
              key={slide.id} 
              ref={el => cardsRef.current[index] = el}
              onClick={() => openGallery(slide)}
              className={`relative flex-shrink-0 w-[75vw] md:w-[380px] xl:w-[400px] 2xl:w-[450px] flex flex-col z-20 cursor-pointer group ${slide.offset === 'down' ? 'translate-y-12 xl:translate-y-16 2xl:translate-y-24' : '-translate-y-12 xl:-translate-y-16 2xl:-translate-y-24'}`}
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
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs tracking-widest uppercase font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">View Gallery</span>
                  </div>
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
         <div className="w-[20vw] flex-shrink-0"></div>
      </div>

      {/* === GALLERY OVERLAY === */}
      <AnimatePresence>
        {selectedSlide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={closeGallery}
          >
            {/* Close Button - Moved down to clear navbar */}
            <button
              className="absolute top-20 right-6 md:top-24 md:right-12 text-white/50 hover:text-white transition-colors z-[10000] p-4 bg-white/5 rounded-full backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                closeGallery();
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation Arrows */}
            {selectedSlide.gallery?.length > 1 && (
              <>
                <button
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[150] bg-white/5 p-4 rounded-full backdrop-blur-md"
                  onClick={prevImage}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[150] bg-white/5 p-4 rounded-full backdrop-blur-md"
                  onClick={nextImage}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="relative w-full h-full max-w-6xl max-h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <OptimizedImage
                    src={selectedSlide.gallery[currentImageIndex]}
                    alt={`${selectedSlide.title} - ${currentImageIndex + 1}`}
                    fill
                    priority
                    className="object-contain shadow-2xl"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Pagination Info */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-white/50 font-light tracking-[0.2em] text-sm">
                {currentImageIndex + 1} / {selectedSlide.gallery.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
