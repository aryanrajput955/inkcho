// components/HeroSection.js
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ navRef }) => {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const whiteBackgroundRef = useRef(null);
  const videoRef = useRef(null);
  const heroTextRef = useRef(null);
  const studiosTextRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const videoContainer = videoContainerRef.current;
    const whiteBackground = whiteBackgroundRef.current;
    const video = videoRef.current;
    const heroText = heroTextRef.current;
    const studiosText = studiosTextRef.current;
    const nav = navRef?.current;

    // Set initial states for page load animation
    gsap.set(heroText, { x: -200, opacity: 0 });
    gsap.set(studiosText, { x: 200, opacity: 0 });
    gsap.set(whiteBackground, { scaleX: 1, scaleY: 1 });
    gsap.set(videoContainer, { scaleX: 1, scaleY: 1 });
    if (nav) gsap.set(nav, { y: 0, opacity: 1 });

    // Page load animation - texts slide in slowly
    const loadTl = gsap.timeline({ delay: 0.3 });
    loadTl.to([heroText, studiosText], {
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power2.out"
    });

    // Calculate scale values to fit screen
    const screenScale = Math.max(
      window.innerWidth / (videoContainer.offsetWidth || 320),
      window.innerHeight / (videoContainer.offsetHeight || 200)
    ) * 1.1;

    // Main ScrollTrigger that pins the section and handles all animations
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=400vh", // Total scroll distance for all phases
        scrub: 1,
        pin: true, // Only ONE pin for the entire section
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (video && video.duration && isFinite(video.duration) && video.readyState >= 2) {
            const newTime = video.duration * self.progress * 0.4;
            if (isFinite(newTime) && newTime >= 0 && newTime <= video.duration) {
              video.currentTime = newTime;
            }
          }
        }
      }
    });

    // Phase 1: Horizontal expansion of white background (0-25% of scroll)
    mainTimeline.to(whiteBackground, {
      scaleX: screenScale,
      scaleY: 1,
      duration: 1,
      ease: "power1.inOut"
    }, 0);

    // Gap for distinct scroll feel (25-50% of scroll)
    mainTimeline.to({}, { duration: 1 }, 1);

    // Phase 2: Vertical expansion of white background (50-62.5% of scroll)
    mainTimeline.to(whiteBackground, {
      scaleY: screenScale,
      duration: 1,
      ease: "power1.inOut"
    }, 2);

    // Phase 3: Video scaling (62.5-87.5% of scroll)
    mainTimeline.to(videoContainer, {
      scaleX: screenScale,
      scaleY: screenScale,
      duration: 1.5,
      ease: "power0.5.inout"
    }, 2.5);

    // Phase 4: Text fade out (87.5-95% of scroll)
    mainTimeline.to([heroText, studiosText], {
      opacity: 0,
      duration: 0.3,
      ease: "power1.inOut"
    }, 3.5);

    // Phase 5: Navigation fade out (95-100% of scroll)
    if (nav) {
      mainTimeline.to(nav, {
        y: -100,
        opacity: 0,
        duration: 0.2,
        ease: "power1.inOut"
      }, 3.8);
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [navRef]);

  return (
    <div ref={containerRef} className="relative h-screen text-gray-50 bg-[#111] overflow-hidden">
      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-20 px-6">
        <div ref={heroTextRef} className="text-center lg:text-left mb-2 lg:ml-20 w-full lg:mt-[-5rem]">
          <h1 className="text-8xl uppercase md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none">
            From Ink
          </h1>
        </div>

        {/* Video and Side Text Container */}
        <div className="relative w-full flex items-center justify-center">
          {/* Left Side Text - Desktop Only */}
          <div className="hidden lg:block absolute left-10 xl:left-20 z-30">
            <p className="text-lg font-medium tracking-wide text-[#EB5B00] whitespace-nowrap">
              Not Just Expression
            </p>
          </div>

          {/* Video Container with White Background */}
          <div className="relative w-80 h-48 md:w-96 md:h-56 mb-10 mt-2">
            {/* White Background Container */}
            <div 
              ref={whiteBackgroundRef}
              className="absolute inset-0 bg-white rounded-2xl shadow-2xl"
              style={{ transformOrigin: 'center center' }}
            ></div>
            
            {/* Video Container */}
            <div 
              ref={videoContainerRef} 
              className="relative w-full h-full rounded-2xl overflow-hidden z-40"
              style={{ transformOrigin: 'center center' }}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop
                autoPlay
              >
                <source src="vid2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-green-900/20 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Side Text - Desktop Only */}
          <div className="hidden lg:block absolute right-10 xl:right-20 z-30">
            <p className="text-lg font-medium tracking-wide text-[#EB5B00] whitespace-nowrap">
              A Lasting Impression.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 w-full text-center lg:text-right lg:pr-10">
          <h2 ref={studiosTextRef} className="text-6xl uppercase md:text-8xl lg:text-[12rem] font-black tracking-tighter leading-none pb-8">
            to Echo
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;