'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EnhancedContentSection = () => {
  const sectionRef = useRef(null);
  const topTextRef = useRef(null);
  const boldParaRef = useRef(null);
  const regularParaRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const topText = topTextRef.current;
    const boldPara = boldParaRef.current;
    const regularPara = regularParaRef.current;

    // Set initial states
    gsap.set([topText, boldPara, regularPara], { opacity: 0, y: 50, scale: 0.9, rotation: -5 });

    // Entrance animation with staggered reveal
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(topText, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
    })
      .to(
        boldPara,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.3,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      )
      .to(
        regularPara,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.3,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      );

    // Hover effects
    [boldPara, regularPara].forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { scale: 1.02, color: "#333", duration: 0.3, ease: "power2.out" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { scale: 1, color: "#333", duration: 0.3, ease: "power2.out" });
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      [boldPara, regularPara].forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white text-gray-800 flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      {/* Subtle Overlay for Depth */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

      {/* Top Small Text with Decoration */}
      <div ref={topTextRef} className="text-center mb-12 relative z-10">
        <p className="text-xl md:text-2xl font-semibold text-gray-700 tracking-wider uppercase">
          Inkcho is not just a word — it's a concept.
        </p>
        <div className="mt-2 flex justify-center space-x-1">
          <span className="w-2 h-2 bg-[#EB5B00] rounded-full"></span>
          <span className="w-2 h-2 bg-[#EB5B00] rounded-full"></span>
          <span className="w-2 h-2 bg-[#EB5B00] rounded-full"></span>
        </div>
      </div>

      {/* Center Content */}
      <div className="text-center max-w-6xl mx-auto px-6 relative z-10">
        {/* Bold Paragraph with Underline */}
        <div ref={boldParaRef} className="mb-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed tracking-wide text-gray-900 drop-shadow-sm">
            It merges two distinct yet deeply symbolic elements: Ink and Echo.
            Ink represents creation, expression, and the raw act of making. It’s
            the traditional medium of storytellers, artists, poets, and
            designers, a symbol of permanence, craftsmanship, and intentionality.
          </p>
          <div className="mt-4 w-16 h-0.5 bg-[#EB5B00] mx-auto opacity-70"></div>
        </div>

        {/* Regular Paragraph */}
        <div ref={regularParaRef}>
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 italic">
            Echo stands for voice, resonance, and lasting impact. It’s the sound
            that lingers, the ripple after the message is delivered subtle but
            powerful. In a world overloaded with noise, the echo is what stays
            with you. It’s what’s remembered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentSection;