"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OptimizedImage from '@/app/components/OptimizedImage';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: "01",
    title: "9to5 Stationery",
    subtitle: "Modern Workspace Essentials",
    description: "A disciplined visual identity system designed for the modern professional. We crafted a brand language that balances clinical precision with high-end tactility, defined by a palette of depth and minimalist architecture.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483063/91_helwhw.jpg",
    link: "/services/brand-foundation/9to5"
  },
  {
    id: "02",
    title: "Takhat Villas",
    subtitle: "Heritage Luxury Living",
    description: "Redefining the standard of heritage luxury through architectural minimalism. Our strategic approach focused on 'quiet luxury'—a brand voice and visual language that speaks through exclusivity and timeless legacy.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1775223195/Research_Discovery_gqqdzd.png",
    link: "/services/brand-foundation/takhat-villas"
  }
];

export default function ProjectShowcase() {
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.project-panel');
      
      panels.forEach((panel, i) => {
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
      {projects.map((project, index) => (
        <section 
            key={project.id} 
            className="project-panel relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
        >
            {/* Background Full-Screen Image with Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden group cursor-pointer" onClick={() => handleNavigation(project.link)}>
                <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 grayscale-[0.3] transition-all duration-[3s] group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1400px] px-8 md:px-24 flex flex-col items-center md:items-start text-center md:text-left space-y-12 pointer-events-none md:pointer-events-auto">
                <div className="space-y-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        className="flex items-center gap-6 justify-center md:justify-start"
                    >
                        <span className="text-[12px] font-black tracking-[0.5em] text-[#9a1b40] uppercase">
                            Case // 0{index + 1}
                        </span>
                        <div className="w-12 h-px bg-[#9a1b40]/40" />
                    </motion.div>
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter text-white uppercase leading-[0.8] drop-shadow-2xl"
                    >
                        {project.title.split(' ')[0]}<br/>
                        <span className="font-serif italic font-normal text-[#9a1b40] lowercase tracking-tight pl-0 md:pl-4">
                            {project.title.slice(project.title.indexOf(' ') + 1)}
                        </span>
                    </motion.h2>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.4 }}
                    className="max-w-xl space-y-10 group pointer-events-auto"
                >
                    <p className="text-white/70 text-lg md:text-2xl font-light leading-relaxed font-serif italic border-l-2 md:border-l-4 border-[#9a1b40]/40 pl-6 md:pl-10">
                        {project.description}
                    </p>
                    
                    <button 
                        className="btn-primary !px-12 !py-4 !text-xs !tracking-[0.5em] group-hover:scale-105 transition-all"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNavigation(project.link);
                        }}
                    >
                        <span className="relative z-10">Explore Case Study</span>
                        <div className="btn-fill-animation" />
                    </button>
                </motion.div>
            </div>

          
        </section>
      ))}
    </div>
  );
}
