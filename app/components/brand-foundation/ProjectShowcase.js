"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OptimizedImage from '@/app/components/OptimizedImage';
import { useRouter } from 'next/navigation';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: "01",
    title: "9to5 Stationery",
    subtitle: "Modern Workspace Essentials",
    description: "A disciplined visual identity system designed for the modern professional. We crafted a brand language that balances clinical precision with high-end tactility, defined by a palette of depth and minimalist architecture.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1776409542/WhatsApp_Image_2026-04-16_at_3.05.50_PM_jaycah.jpg",
    link: "/services/brand-foundation/9to5"
  },
  {
    id: "02",
    title: "Takhat Villas",
    subtitle: "Heritage Luxury Living",
    description: "Redefining the standard of heritage luxury through architectural minimalism. Our strategic approach focused on 'quiet luxury'—a brand voice and visual language that speaks through exclusivity and timeless legacy.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1776409542/WhatsApp_Image_2026-04-16_at_3.05.49_PM_gzbqfb.jpg",
    link: "/services/brand-foundation/takhat-villas"
  }
];

export default function ProjectShowcase() {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.project-panel');
      
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          snap: {
            snapTo: 1,
            duration: 0.8,
            delay: 0.1,
            ease: "power2.inOut"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNavigation = (link) => {
    if (link) {
        router.push(link);
    } else {
        alert("Case study coming soon.");
    }
  };

  return (
    <div ref={containerRef} className="relative bg-black h-auto overflow-visible">
      {projects.map((project) => (
        <section 
            key={project.id} 
            className="project-panel relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
        {/* Full-screen clickable background image (no overlay, no grayscale, no content) */}
        <button
          type="button"
          aria-label={`Open ${project.title}`}
          className="absolute inset-0 z-0 overflow-hidden cursor-pointer bg-transparent border-0 p-0"
          onClick={() => handleNavigation(project.link)}
        >
          <OptimizedImage
            src={project.image}
            alt={project.title}
            fill
            className="object-fill"
          />
        </button>

          
        </section>
      ))}
    </div>
  );
}
