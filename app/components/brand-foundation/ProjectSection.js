"use client";

import { motion } from 'framer-motion';
import OptimizedImage from '@/app/components/OptimizedImage';
import { useRouter } from 'next/navigation';

export default function ProjectSection({ project, index }) {
  const router = useRouter();

  const handleNavigation = () => {
    if (project.link) {
      router.push(project.link);
    } else {
      alert("Case study coming soon.");
    }
  };

  return (
    <section className="relative w-full py-24 md:py-48 flex items-center justify-center">
      <div className={`w-full max-w-[1500px] flex flex-col md:flex-row items-center gap-12 md:gap-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        
        {/* IMAGE SIDE - STYLISH FLOATING BLOCK */}
        <div className="flex-1 relative group">
            {/* Background Decorative Frame (The 'Style') */}
            <div className={`absolute -inset-4 border border-black/[0.03] rounded-sm pointer-events-none transition-all duration-700 group-hover:inset-0 group-hover:border-[#9a1b40]/20`} />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                onClick={handleNavigation}
                className="relative aspect-[4/5] md:aspect-[3/4] w-full bg-[#f4f4f4] overflow-hidden rounded-sm cursor-pointer shadow-xl"
            >
                <OptimizedImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Technical Label */}
                <div className="absolute top-6 right-6 overflow-hidden">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                        <span className="text-[10px] font-black tracking-widest text-white uppercase">
                            View Study
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Asymmetric Side Caption */}
            <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? '-left-12' : '-right-12'} [writing-mode:vertical-rl] select-none pointer-events-none opacity-20`}>
                <span className="text-[9px] font-black tracking-[0.5em] text-black uppercase">
                    Architecture // {project.subtitle.split('/')[0]}
                </span>
            </div>
        </div>

        {/* CONTENT SIDE - MINIMAL & STRUCTURED */}
        <div className="flex-1 space-y-12">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="max-w-lg space-y-8"
            >
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black tracking-[0.4em] text-[#9a1b40] uppercase">
                            Foundation // Case 0{index + 1}
                        </span>
                        <div className="h-px flex-1 bg-black/[0.05]" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black uppercase leading-[0.9]">
                        {project.title}
                    </h2>
                </div>

                <p className="text-gray-500 text-lg font-light leading-relaxed font-serif italic border-l-2 border-[#9a1b40]/10 pl-8">
                    {project.description}
                </p>

                <div className="pt-4">
                    <button 
                        onClick={handleNavigation}
                        className="btn-primary !px-8 !py-3 !text-[11px] !tracking-[0.4em]"
                    >
                        <span className="relative z-10 text-white group-hover:text-white transition-colors">
                            Explore Strategy
                        </span>
                        <div className="btn-fill-animation" />
                    </button>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
