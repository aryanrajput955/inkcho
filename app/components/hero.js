"use client";

import { motion } from "framer-motion";

const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=85",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=85",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=85",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=85",
  "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&q=85",
];

export default function Hero() {
  const duplicatedImages = [...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#f7f4ec]">
      {/* Soft background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f4ec] via-[#f0ece5] to-[#e8e2d8] opacity-70 pointer-events-none" />

      {/* Centered main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 md:px-12 text-center">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mb-6 text-xs md:text-sm tracking-[0.4em] uppercase font-medium text-black/50"
        >
          Creative Studio
        </motion.div>

        {/* Main title – centered & prominent */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] xl:text-[12rem] 
                     font-black tracking-[-0.04em] leading-none text-[#9a1b40]"
        >
          INKCHO
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.2 }}
          className="mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 
                     text-2xl md:text-4xl font-light text-black/70"
        >
          <span>Where</span>
          <span className="italic text-[#9a1b40] font-medium">Ideas</span>
          <span>become</span>
          <span className="relative inline-block">
            <span className="relative z-10 text-[#9a1b40] font-medium">Art</span>
            <motion.span
              className="absolute inset-x-0 bottom-1 h-3 bg-[#9a1b40]/20 rounded-full -z-10"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, delay: 1.8 }}
            />
          </span>
        </motion.div>

        {/* Centered CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="group relative overflow-hidden px-10 py-5 bg-[#9a1b40] text-white rounded-full 
                             text-lg font-medium shadow-md shadow-[#9a1b40]/30 
                             hover:shadow-xl hover:shadow-[#9a1b40]/40 transition-all duration-500 
                             hover:-translate-y-1">
            <span className="relative z-10">View Work</span>
            <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent 
                             translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
          </button>

          <button className="group relative px-10 py-5 border-2 border-[#9a1b40]/60 rounded-full 
                             text-lg font-medium text-[#9a1b40] hover:text-white transition-colors duration-500">
            <span className="relative z-10">Contact</span>
            <motion.span
              className="absolute inset-0 bg-[#9a1b40] -z-10 scale-x-0 origin-left"
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </button>
        </motion.div>
      </div>

      {/* Centered bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 md:h-1/3 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f4ec] to-transparent z-10" />

        <div className="relative flex justify-center">
          <motion.div
            className="flex gap-6 md:gap-8 opacity-50"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 80,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.5, scale: 1 }}
                transition={{ duration: 1.8, delay: index * 0.1 }}
                className="relative aspect-[3/4] w-28 sm:w-36 md:w-44 lg:w-52 flex-shrink-0 rounded-xl overflow-hidden 
                           shadow-lg shadow-black/10 border border-white/20"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover brightness-[0.9] contrast-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}