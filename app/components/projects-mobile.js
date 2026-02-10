import React from 'react';
import { motion } from 'framer-motion';

const portfolioItems = [
  { id: 1, type: 'image', src: '/s3.webp', title: 'Brand Identity', category: 'Branding' },
  { id: 2, type: 'image', src: '/perfume.jpg', title: 'Web Design', category: 'Digital' },
  { id: 3, type: 'image', src: '/s4.webp', title: 'Marketing Campaign', category: 'Strategy' },
  { id: 4, type: 'video', src: '/casio/casio.mp4', title: 'Motion Graphics', category: 'Video' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1.0, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function ScrollGalleryMobile() {
  return (
    <section className="bg-[#f7f4ec] py-20">
      <div className="container mx-auto px-4">

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-medium tracking-tight text-[#1e4389]">
              Our <span className="text-[#9a1b40] italic">Creations</span>
            </h2>
            <p className="mt-4 text-black/80 text-base md:text-lg">
              Swipe to explore our work
            </p>
          </motion.div>

          {/* Horizontal Scroll */}
          <motion.div 
            variants={fadeInUp}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide"
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="
                  snap-center 
                  w-[85vw]          
                  sm:w-[70vw]       
                  md:w-[55vw]       
                  lg:w-[45vw]       
                  max-w-[480px]     
                  rounded-2xl 
                  overflow-hidden 
                  bg-white 
                  shadow-md 
                  border border-[#d6d3cd] 
                  flex-shrink-0
                "
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      className="w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}

                  {/* Overlay with info (hover on desktop) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 md:block hidden">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-medium text-[#9a1b40] uppercase tracking-wide">
                        {item.category}
                      </p>
                      <h3 className="text-xl font-semibold mt-1">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Always-visible label for mobile */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-gradient-to-t from-black/70 to-transparent md:hidden">
                    <p className="text-xs font-medium text-[#9a1b40] uppercase tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-base font-semibold mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}