"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OptimizedImage from '@/app/components/OptimizedImage';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: "1",
    title: "9to5",
    subtitle: "Brand Foundations",
    description: "A disciplined visual identity system designed for the modern professional.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1775385243/copy_of_drilldown_czu9kb_b064f2.png",
    link: "/services/brand-foundation/9to5",
    stats: [
      { label: "Positioning", value: "Modern Workspace Essentials" },
      { label: "Audience", value: "Modern professionals" },
      { label: "Tone", value: "Clinical precision, high-end tactility" },
      { label: "Direction", value: "Minimalist architecture" }
    ]
  },
  {
    id: "2",
    title: "Takhat Villas",
    subtitle: "Brand Foundations",
    description: "Defining a premium hospitality identity rooted in space, calm, and experience.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1775223192/BRAND_LOGO_rewbc6.png",
    link: "/services/brand-foundation/takhat-villas",
    stats: [
      { label: "Positioning", value: "Luxury villa experience" },
      { label: "Audience", value: "High-end travellers and Adventure lovers" },
      { label: "Tone", value: "Calm, refined, immersive" },
      { label: "Direction", value: "Architecture-led identity" }
    ]
  }
];

export default function ProjectShowcase() {
  const containerRef = useRef(null);

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

  return (
    <div ref={containerRef} className="relative bg-[#FFFBF5] h-auto overflow-visible">
      {projects.map((project) => (
        <section 
            key={project.id} 
            className="project-panel relative h-screen w-full flex items-center justify-center p-4 md:p-8 lg:p-12 bg-[#FFFBF5]"
        >
          <div className="w-full max-w-[1400px] h-[92vh] md:h-[90vh] max-h-[1000px] bg-[#F5F2EC] border border-black/30 rounded-[2rem] md:rounded-[3rem] overflow-y-auto overflow-x-hidden md:overflow-hidden flex flex-col md:flex-row shadow-sm">
            {/* Left Content */}
            <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-between">
              <div className="mb-8 md:mb-16">
                <h3 className="text-lg md:text-2xl font-bold mb-4 text-black">Case study {project.id}</h3>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-black leading-[1.1] mb-4">
                  {project.title}<br/>
                  {project.subtitle}
                </h2>
                <p className="text-sm md:text-base text-black/70 max-w-sm mt-2 md:mt-4 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              <div className="mt-4 md:mt-auto">
                <div className="space-y-2 mb-8 md:mb-12">
                  {project.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] md:text-sm">
                      <span className="text-[#D88A96] font-bold">|</span>
                      <span className="font-bold text-black/70">{stat.label}:</span>
                      <span className="text-black/60 font-medium">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <Link href={project.link}>
                  <button className="bg-[#111] text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-xs md:text-sm font-medium hover:bg-black/80 transition-colors shadow-lg">
                    View Case Study
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:flex w-full md:w-1/2 bg-[#F5F2EC] items-center justify-center p-8 lg:p-12 relative overflow-hidden flex-1 h-full min-h-[300px] md:min-h-0">
              <div className="relative w-full h-full max-w-md aspect-square">
                 <OptimizedImage
                   src={project.image}
                   alt={project.title}
                   fill
                   className="object-contain"
                 />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
