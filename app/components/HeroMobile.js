"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import OptimizedImage from './OptimizedImage';

const IMAGES = [
  "https://res.cloudinary.com/dplv15n29/image/upload/v1772472228/WhatsApp_Image_2026-02-17_at_9.12.44_PM_2_q8iyst.jpg",
  "https://res.cloudinary.com/dplv15n29/image/upload/v1772473991/im_kredo_qxkm3e.png",
  "https://res.cloudinary.com/dplv15n29/image/upload/v1772473972/INFINITY.png_rycfrn.jpg",
  "https://res.cloudinary.com/dplv15n29/image/upload/v1772474136/poster_1_xexgn6.jpg",
  "https://res.cloudinary.com/dplv15n29/image/upload/v1772493550/image_1.jpg_p5pkrb.jpg",
  "https://res.cloudinary.com/dplv15n29/image/upload/v1772474132/poster_2_yto9el.png"
];

const InfiniteMarquee = ({ direction = 1 }) => {
  return (
    <div className="flex overflow-hidden w-full h-[140px] relative pointer-events-none">
      <motion.div 
        animate={{ x: direction > 0 ? [-1000, 0] : [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 min-w-max flex-nowrap"
      >
        {[...IMAGES, ...IMAGES, ...IMAGES].map((url, idx) => (
          <div key={idx} className="w-[110px] h-[140px] rounded-xl overflow-hidden shadow-sm flex-shrink-0">
            <OptimizedImage
              src={url}
              alt="Project Showcase"
              width={110}
              height={140}
              className="object-cover w-full h-full grayscale-[0.3] hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function HeroMobile() {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-between pt-40 pb-20 bg-[#FFFBF5] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[20%] left-[-20%] w-64 h-64 bg-[#9a1b40]/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[20%] right-[-20%] w-64 h-64 bg-[#1e4389]/5 rounded-full blur-3xl z-0" />

      {/* Top Infinite Slider */}
      <div className="w-full opacity-40 -rotate-2 scale-110">
        <InfiniteMarquee direction={-1} />
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 text-center py-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-[320px] mb-8"
        >
          <OptimizedImage
            src="/hero.png"
            alt="Designing brands that leave a mark"
            width={600}
            height={300}
            priority
            className="w-full h-auto object-contain drop-shadow-sm"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link href="/contact">
            <button className="btn-primary shadow-xl !px-10 !py-4 !text-base">
              <span className="relative z-10">Start a Project</span>
              <div className="btn-fill-animation" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Infinite Slider */}
      <div className="w-full opacity-40 rotate-2 scale-110">
        <InfiniteMarquee direction={1} />
      </div>

      {/* Subtle indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-20">
         <span className="text-[10px] uppercase font-black tracking-widest">Scroll</span>
         <div className="w-px h-6 bg-black" />
      </div>
    </div>
  );
}
