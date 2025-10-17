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
    let ctx = gsap.context(() => {
      const initAnimations = () => {
        const container = containerRef.current;
        const videoContainer = videoContainerRef.current;
        const whiteBackground = whiteBackgroundRef.current;
        const video = videoRef.current;
        const heroText = heroTextRef.current;
        const studiosText = studiosTextRef.current;
        const nav = navRef?.current;

        if (!container || !videoContainer || !whiteBackground || !video || !heroText || !studiosText) {
          console.warn('Missing required elements for animation');
          return;
        }

        // Kill existing ScrollTriggers and tweens
        ScrollTrigger.getAll().forEach(trigger => trigger?.kill());
        gsap.killTweensOf([heroText, studiosText, whiteBackground, videoContainer, nav]);

        // Set initial states
        gsap.set([heroText, studiosText], { x: 0, y: 0, opacity: 1 });
        gsap.set(whiteBackground, { scaleX: 1, scaleY: 1 });
        gsap.set(videoContainer, { scaleX: 1, scaleY: 1 });
        if (nav) gsap.set(nav, { y: 0, opacity: 1 });

        // Page load animation
        const loadTl = gsap.timeline({ delay: 0.3 });
        loadTl.to([heroText, studiosText], {
          x: 0,
          opacity: 1,
          duration: 2.5,
          ease: "power2.out"
        });

        // Calculate scale values
        const isMobile = window.innerWidth < 768;
        const whiteBackgroundHorizontalScale = window.innerWidth / (videoContainer.offsetWidth || 320);
        const whiteBackgroundVerticalScale = window.innerHeight / (videoContainer.offsetHeight || 200);
        const videoMargin = isMobile ? 0.98 : 0.97;
        const videoMaxScale = Math.max(
          (window.innerWidth * videoMargin) / (videoContainer.offsetWidth || 320),
          (window.innerHeight * videoMargin) / (videoContainer.offsetHeight || 200)
        );

        // Main ScrollTrigger timeline
        const mainTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=300vh",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: () => {
              console.log('ScrollTrigger refreshed');
              gsap.set([heroText, studiosText], { opacity: 1, y: 0 });
            },
            onUpdate: (self) => {
              console.log('ScrollTrigger progress:', self.progress);
              if (video && video.duration && isFinite(video.duration) && video.readyState >= 2) {
                const newTime = video.duration * self.progress * 0.4;
                if (isFinite(newTime) && newTime >= 0 && newTime <= video.duration) {
                  video.currentTime = newTime;
                }
              }
            }
          }
        });

        mainTimeline.to([heroText, studiosText], {
          opacity: 0,
          y: -30,
          duration: 0.6,
          ease: "power2.inOut"
        }, 0);

        mainTimeline.to(whiteBackground, {
          scaleX: whiteBackgroundHorizontalScale,
          scaleY: 1,
          duration: 1,
          ease: "power1.inOut"
        }, 0.6);

        mainTimeline.to(whiteBackground, {
          scaleY: whiteBackgroundVerticalScale,
          duration: 1,
          ease: "power1.inOut"
        }, 1.6);

        mainTimeline.to(videoContainer, {
          scaleX: videoMaxScale,
          scaleY: videoMaxScale,
          duration: 1.2,
          ease: "power2.inOut"
        }, 2.5);

        if (nav) {
          mainTimeline.to(nav, {
            y: -100,
            opacity: 0,
            duration: 0.3,
            ease: "power1.inOut"
          }, 3.6);
        }

        ScrollTrigger.refresh();
      };

      const imagesLoaded = () => {
        const video = videoRef.current;
        if (video && video.readyState >= 2) {
          initAnimations();
        } else {
          video?.addEventListener('loadeddata', initAnimations, { once: true });
        }
      };

      if (document.readyState === 'complete') {
        imagesLoaded();
      } else {
        window.addEventListener('load', imagesLoaded, { once: true });
      }
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [navRef]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      try {
        ScrollTrigger.refresh();
      } catch (e) {
        console.warn('Error refreshing ScrollTrigger:', e);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Force refresh after hydration
  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[100vh] text-gray-50 bg-[#111] overflow-hidden">
      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-50 px-6">
        <div ref={heroTextRef} className="text-center lg:text-left mb-2 lg:ml-20 w-full lg:mt-[-5rem]">
          <h1 className="text-8xl uppercase md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-none relative z-50">
            From Ink
          </h1>
        </div>

        {/* Video and Side Text Container */}
        <div className="relative w-full flex items-center justify-center">
          {/* Video Container with White Background */}
          <div className="relative w-80 h-48 md:w-96 md:h-56 mb-10 mt-2">
            {/* White Background Container */}
            <div 
              ref={whiteBackgroundRef}
              className="absolute inset-0 bg-white rounded-2xl shadow-2xl z-30"
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
                poster="/fallback-image.jpg"
              >
                <source src="/vid2.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-r from-green-900/20 via-transparent to-green-900/20 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full text-center lg:text-right lg:pr-10">
          <h2 ref={studiosTextRef} className="text-6xl uppercase md:text-8xl lg:text-[12rem] font-black tracking-tighter leading-none pb-8 relative z-20">
            to Echo
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;