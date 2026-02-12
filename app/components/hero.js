"use client";

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function BrandShowcase({ startAnimation = true }) {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(() => {
    if (!startAnimation) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Initial states - Subtler starting positions
    gsap.set([titleRef.current, buttonRef.current], { autoAlpha: 0, y: 30 });
    gsap.set(imagesRef.current, { autoAlpha: 0, scale: 0.92 });

    // Animation sequence
    tl.to(titleRef.current, {
      duration: 1.4,
      autoAlpha: 1,
      y: 0,
      ease: "power3.out"
    })
    .to(buttonRef.current, {
      duration: 1,
      autoAlpha: 1,
      y: 0,
    }, "-=1.2")
    .to(imagesRef.current, {
      duration: 1.6,
      autoAlpha: 1,
      scale: 1,
      stagger: {
        amount: 0.8,
        from: "random"
      },
      ease: "power2.out"
    }, "-=1.0");

  }, { scope: containerRef, dependencies: [startAnimation] });

  const images = [
    {
      url: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&h=400&fit=crop",
      alt: "Abstract portrait",
      position: "top-0 left-0",
    },
    {
      url: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=500&fit=crop",
      alt: "Colorful robot art",
      position: "top-[25%] left-[18%]",
    },
    {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=500&fit=crop",
      alt: "Dreamy illustration",
      position: "top-[25%] right-[18%]",
    },
    {
      url: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop",
      alt: "Vintage poster",
      position: "top-0 right-0",
    },
    {
      url: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=500&fit=crop",
      alt: "Portrait photography",
      position: "bottom-0 left-0",
    },
    {
      url: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=500&fit=crop",
      alt: "Cosmic mushroom",
      position: "bottom-0 right-0",
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#FFFBF5] overflow-hidden">
       
      {/* Background blur effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1e4389] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9a1b40] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      
      {/* Static images */}
      {images.map((image, index) => (
        <div
          key={index}
          ref={el => imagesRef.current[index] = el}
          className={`absolute ${image.position} w-56 h-72 min-[2000px]:w-72 min-[2000px]:h-96 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 hidden lg:block opacity-0`} // default opacity 0 for safety
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        <div className="text-center max-w-2xl">
          <h1 ref={titleRef} className="text-3xl md:text-5xl font-light text-black mb-6 leading-tight opacity-0">
            Designing brands that
            <br />
            leave a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold italic text-[#9a1b40]">
                mark
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4 Q50 2, 100 4 T198 4"
                  stroke="#9a1b40"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            and
            <br />
            create an{" "}
            <span className="relative inline-block">
              <span className="relative z-10 font-semibold italic text-[#9a1b40]">
                echo
              </span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4 Q50 2, 100 4 T198 4"
                  stroke="#9a1b40"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <div ref={buttonRef} className="opacity-0">
            <button className="btn-primary shadow-xl hover:shadow-2xl !px-8 !py-3 !text-sm">
              <span className="relative z-10">Start a Project</span>
              <div className="btn-fill-animation" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
