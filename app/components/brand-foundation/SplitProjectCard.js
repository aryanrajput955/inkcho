"use client";

import { motion } from 'framer-motion';
import OptimizedImage from '@/app/components/OptimizedImage';
import { useRouter } from 'next/navigation';

export default function SplitProjectCard({ project, index }) {
  const router = useRouter();

  const handleNavigation = () => {
    if (project.link) {
      router.push(project.link);
    } else {
      alert("Case study coming soon.");
    }
  };

  return (
    <div 
        onClick={handleNavigation}
        className="relative flex-1 group overflow-hidden cursor-pointer h-[70vh] md:h-full border-b md:border-b-0 md:border-r border-black/[0.05] last:border-r-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={project.image}
          alt={project.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
        />
        {/* Constant Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-8 md:px-12">
        {/* Project Name (Red Branding) */}
        <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#9a1b40] uppercase drop-shadow-2xl"
        >
            {project.title}
        </motion.h2>
        
        {/* Subtitle / Details (Hidden by default, slides up on hover) */}
        <div className="overflow-hidden mt-6">
            <motion.div 
                className="flex flex-col items-center space-y-6"
                initial={{ y: 100, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                // On mobile or smaller touch devices, we might want it visible or triggered differently, 
                // but for this design we use the 'group-hover' via Tailwind for simplicity
            >
                <div className="hidden group-hover:flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <p className="text-white/80 text-sm md:text-base font-light tracking-wide max-w-xs mb-8">
                        {project.description}
                    </p>

                    {/* Primary Button with site's fill animation */}
                    <button className="btn-primary !px-6 !py-2 !text-[10px] !tracking-[0.3em]">
                        <span className="relative z-10">View Case Study</span>
                        <div className="btn-fill-animation" />
                    </button>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Modern Index Number (Corner) */}
      <div className="absolute top-8 left-8 z-20 overflow-hidden">
          <span className="text-[10px] font-black tracking-[0.4em] text-[#9a1b40] uppercase">
              Project // 0{index + 1}
          </span>
      </div>
    </div>
  );
}
