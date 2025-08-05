// components/HeroSection.js
'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = ({ navRef }) => {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const heroTextRef = useRef(null);
  const studiosTextRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const videoContainer = videoContainerRef.current;
    const video = videoRef.current;
    const heroText = heroTextRef.current;
    const studiosText = studiosTextRef.current;
    const nav = navRef?.current;

    // Set initial states
    gsap.set([heroText, studiosText], { opacity: 1 });
    if (nav) gsap.set(nav, { y: 0, opacity: 1 });

    // Create timeline for hero animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=400vh",
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          if (video && video.duration && isFinite(video.duration) && video.readyState >= 2) {
            const newTime = video.duration * self.progress * 0.2;
            if (isFinite(newTime) && newTime >= 0 && newTime <= video.duration) {
              video.currentTime = newTime;
            }
          }
        }
      }
    });

    // Animate upper text fade out first
    tl.to([heroText, studiosText], {
      opacity: 0,
      y: -50,
      duration: 0.2,
      ease: "power2.out"
    }, 0);

    // Animate nav fade out if available
    if (nav) {
      tl.to(nav, {
        y: -100,
        opacity: 0,
        duration: 0.15
      }, 0.05);
    }

    // Start video scaling slowly
    tl.to(videoContainer, {
      scale: 1.8,
      duration: 0.4,
      ease: "power1.inOut"
    }, 0.25)
    // Continue scaling more gradually
    .to(videoContainer, {
      scale: 2.8,
      duration: 0.35,
      ease: "power1.inOut"
    }, 0.65)
    // Final scale to full screen
    .to(videoContainer, {
      scale: 4.5,
      duration: 0.25,
      ease: "power2.out"
    }, 0.9);

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
          <div className="hidden lg:block absolute left-10 xl:left-20">
            <p className="text-lg font-medium tracking-wide text-[#EB5B00] whitespace-nowrap">
              Not Just Expression
            </p>
          </div>

          {/* Video Container */}
          <div ref={videoContainerRef} className="relative w-80 h-48 md:w-96 md:h-56 mb-10 mt-2 rounded-2xl overflow-hidden shadow-2xl z-10">
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

          {/* Right Side Text - Desktop Only */}
          <div className="hidden lg:block absolute right-10 xl:right-20">
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