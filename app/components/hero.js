"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect, useMemo } from "react";

const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=1000&q=95",
  "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=1000&q=95",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1000&q=95",
  "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1000&q=95",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1000&q=95",
  "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1000&q=95",
];

export default function Hero() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Use more repetitions for a super long loop
  const duplicatedImages = useMemo(() => [
    ...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES
  ], []);

  // Responsive Width Calculation
  const isMobile = windowWidth > 0 && windowWidth < 640;
  const isTablet = windowWidth > 0 && windowWidth < 1024;
  const CARD_WIDTH = isMobile ? 300 : isTablet ? 350 : 420;
  const GAP = isMobile ? 16 : 32;
  const TOTAL_ITEM_WIDTH = CARD_WIDTH + GAP;
  const FULL_MARQUEE_WIDTH = PORTFOLIO_IMAGES.length * TOTAL_ITEM_WIDTH;

  const x = useMotionValue(0);

  useAnimationFrame((time, delta) => {
    let currentX = x.get();
    // Scroll left - increased speed
    currentX -= 0.12 * delta; 
    
    // Smooth looping
    if (currentX <= -FULL_MARQUEE_WIDTH) {
      currentX += FULL_MARQUEE_WIDTH;
    }
    x.set(currentX);
  });

  return (
    <section className="relative min-h-[100dvh] w-full bg-[#e5e1d8] overflow-hidden flex flex-col items-center pt-28 pb-10 md:pb-20">
      {/* Texture/Grain Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-multiply z-[50] bg-[url('https://res.cloudinary.com/dzv9rqv01/image/upload/v1707212457/noise_q9u9ue.png')]" />

      {/* Main content Layer - Top */}
      <div className="relative z-30 flex flex-col items-center justify-center px-6 text-center max-w-7xl mx-auto mb-8 md:mb-16 flex-grow">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full"
        >
          <img
            src="/text-hero-png.png"
            alt="Hero Text"
            className="w-full max-w-[850px] h-auto object-contain mb-8 md:mb-12 select-none"
          />

          {/* Buttons with refined interactions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 w-full sm:w-auto">
            <button className="btn-primary w-full sm:w-auto !bg-[#1e4389] !text-white shadow-xl shadow-[#1e4389]/20 hover:shadow-[#9a1b40]/20 active:scale-95">
              <span className="relative z-10">View Work</span>
              <div className="btn-fill-animation !bg-[#9a1b40]" />
            </button>
            <button className="btn-primary w-full sm:w-auto !bg-[#9a1b40] !text-white shadow-xl shadow-[#9a1b40]/20 hover:shadow-[#1e4389]/20 active:scale-95">
              <span className="relative z-10">Contact</span>
              <div className="btn-fill-animation !bg-[#1e4389]" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Professional 3D Marquee - Below Buttons */}
      <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[550px] flex items-center justify-center perspective-[2500px] overflow-visible select-none">
        
        <motion.div 
          className="flex absolute left-0 gap-8"
          style={{ x, transformStyle: "preserve-3d" }}
        >
          {duplicatedImages.map((src, index) => (
            <ProjectCard 
              key={index} 
              src={src} 
              index={index} 
              x={x} 
              windowWidth={windowWidth}
              itemWidth={TOTAL_ITEM_WIDTH}
            />
          ))}
        </motion.div>

    
      </div>
    </section>
  );
}

function ProjectCard({ src, index, x, windowWidth, itemWidth }) {
  // Center-relative position logic (Linear calculation for seamless loop)
  const relativeX = useTransform(x, (latestX) => {
    // Current absolute position of this specific card instance
    const absolutePos = index * itemWidth;
    // Apply scrolling offset
    const currentPos = absolutePos + latestX;
    // Calculate distance from center of screen
    return currentPos + (itemWidth / 2) - (windowWidth / 2);
  });

  // Inward Curve (Concave) Transforms
  // PROFESSIONAL PHYSICS CONFIG
  const springConfig = { stiffness: 120, damping: 25, mass: 0.8 };

  // Raw Transforms (Target Values)
  const targetScale = useTransform(relativeX, [-1000, 0, 1000], [1.1, 0.92, 1.1]); 
  const targetZ = useTransform(relativeX, [-1000, 0, 1000], [80, -220, 80]);
  const targetRotateY = useTransform(relativeX, [-1000, 0, 1000], ["-20deg", "0deg", "20deg"]);
  
  // Smoothed Transforms (Spring Physics)
  const scale = useSpring(targetScale, springConfig);
  const translateZ = useSpring(targetZ, springConfig);
  const rotateY = useSpring(targetRotateY, springConfig);

  // Focus Effects
  const opacity = useTransform(relativeX, [-1200, -600, 0, 600, 1200], [0, 0.8, 1, 0.8, 0]);
  const blur = useTransform(relativeX, [-900, -300, 0, 300, 900], ["4px", "0px", "0px", "0px", "4px"]);

  // Subtle highlight moves with the card
  const highlightX = useTransform(relativeX, [-400, 0, 400], ["-120%", "0%", "120%"]);

  return (
    <motion.div
      style={{
        scale,
        translateZ,
        rotateY,
        opacity,
        filter: useTransform(blur, (v) => `blur(${v})`),
        transformStyle: "preserve-3d",
        zIndex: useTransform(translateZ, (z) => Math.round(z + 1000))
      }}
      className="relative aspect-[4/5] w-[300px] sm:w-[350px] lg:w-[420px] flex-shrink-0 overflow-hidden 
                 rounded-xl shadow-2xl bg-black/5 group cursor-pointer border border-white/5"
    >
      <img
        src={src}
        alt={`Project ${index}`}
        className="w-full h-full object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700 ease-out"
      />
      
      {/* Sophisticated Glass Shine */}
      <motion.div 
        style={{ x: highlightX }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 pointer-events-none z-20"
      />

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/5 opacity-60 pointer-events-none z-10" />
    </motion.div>
  );
}

