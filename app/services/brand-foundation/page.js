'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: "01",
    title: "Research and Discovery",
    description: "Understanding the audience, context, and opportunity before decisions are made.",
    image: "/s1.jpg",
    offset: "up" 
  },
  {
    id: "02",
    title: "Brand Positioning",
    description: "Defining a clear, confident place for the brand to stand.",
    image: "/s2.jpg",
    offset: "down"
  },
  {
    id: "03",
    title: "Purpose, Vision & Brand Voice",
    description: "Shaping meaning, direction, and how the brand speaks.",
    image: "/s3.webp",
    offset: "up"
  },
  {
    id: "04",
    title: "Visual Identity System",
    description: "Creating a cohesive visual language that translates strategy into design.",
    image: "/s4.webp",
    offset: "down"
  },
  {
    id: "05",
    title: "Brand Activation",
    description: "Launching the brand into the world with impact and consistency.",
    image: "/s5.webp",
    offset: "up"
  },
  {
    id: "06",
    title: "Ongoing Brand Strategy",
    description: "Evolving the brand over time to stay relevant and resonant.",
    image: "/s6.webp",
    offset: "down"
  }
];

export default function BrandFoundationPage() {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const linesRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const trigger = triggerRef.current;
      
      // Calculate total scrollable width correctly
      // We use scrollWidth - clientWidth to get the max scrollable distance
      // Added a buffer (+ window.innerWidth) to ensure we scroll enough for the last item to be fully visible
      const totalScrollWidth = container.scrollWidth - window.innerWidth + 200;

      // Horizontal Scroll Animation
      const scrollTween = gsap.to(container, {
        x: -totalScrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: trigger,
          pin: true,
          scrub: 1.5, // Smoother scrub
          end: `+=${totalScrollWidth}`,
          invalidateOnRefresh: true,
        }
      });



      // Card Entrance Animations (triggered by the horizontal scroll progress)
      // This makes cards appear as they enter the viewport during horizontal scroll
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
              containerAnimation: scrollTween, // Essential: links to the horizontal tween
              start: "left 100%", // Starts when left of card hits right of viewport
              toggleActions: "play none none reverse",
            }
        });
      });

    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white min-h-screen text-black overflow-x-hidden">
      
      {/* Spacer/Header to allow scrolling down to the section */}
      <div className="h-[40vh] flex items-center justify-center bg-[#FFFBF5]">
        <h1 className="text-5xl md:text-7xl font-serif text-[#1e4389]">Brand Foundation</h1>
      </div>

      {/* === HORIZONTAL SCOLL SECTION === */}
      <div ref={triggerRef} className="relative h-screen overflow-hidden flex flex-row bg-white">
        
        {/* Animated Background Lines REMOVED */}

        {/* Fixed Vertical Text on Left */}

        {/* Fixed Vertical Text on Left */}
        <div className="hidden md:flex flex-col justify-center h-full min-w-[100px] md:min-w-[150px] z-10 bg-white/80 backdrop-blur-sm border-r border-gray-100">
             <p className="[writing-mode:vertical-rl] rotate-180 text-xs md:text-sm tracking-[0.2em] font-medium text-gray-500 uppercase h-[60%] flex items-center mx-auto text-center leading-loose">
                 Without a strong foundation, brands become inconsistent, unclear, and short-lived.
             </p>
        </div>

        {/* Scrolling Content Container */}
        {/* INCREASED GAP: gap-64 md:gap-[30rem] */}
        {/* Changed items-start to items-center to center content vertically */}
        <div ref={containerRef} className="relative flex flex-row items-center h-full px-12 md:px-24 gap-64 md:gap-[30rem] bg-transparent z-10">
           
           {slides.map((slide, index) => (
             <div 
                key={index} 
                ref={el => cardsRef.current[index] = el}
                /* Stagger logic: Up cards go up from center, Down cards go down from center */
                className={`relative flex-shrink-0 w-[60vw] md:w-[350px] flex flex-col z-20 ${slide.offset === 'down' ? 'translate-y-12 md:translate-y-24' : '-translate-y-12 md:-translate-y-24'}`}
             >
                {/* Number */}
                <span className="text-5xl md:text-7xl font-serif mb-4 block text-black">
                    {slide.id}
                </span>

                {/* Image Card */}
                <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden shadow-2xl mb-6 group grayscale hover:grayscale-0 transition-all duration-700 rounded-sm">
                   <img 
                     src={slide.image} 
                     alt={slide.title}
                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                   />
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

           {/* Extra space at end to ensure the last card (06) can be fully scrolled into view */}
           <div className="w-[40vw] flex-shrink-0"></div>

        </div>

      </div>

      <div className="h-[50vh] bg-[#FFFBF5] flex items-center justify-center">
         <p className="text-gray-500">More content continues...</p>
      </div>

    </div>
  );
}