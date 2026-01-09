"use client";

import { motion } from "framer-motion";

const PORTFOLIO_IMAGES = [
  "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  "https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&q=80",
];

export default function Hero() {
  const duplicatedImages = [...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#f7f4ec]">
      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-[10px] tracking-[0.3em] uppercase text-black/40 font-medium"
        >
          Creative Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter text-[#1e4389] mb-8"
        >
          INKCHO
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="text-2xl md:text-4xl font-light text-black/70">Where Ideas</span>
          <svg width="40" height="40" viewBox="0 0 100 100" fill="none" className="text-[#9a1b40] opacity-60">
            <motion.path
              d="M20 50 Q50 20, 80 50"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </svg>
          <span className="text-2xl md:text-4xl font-light italic text-[#9a1b40]">Become Art</span>
        </motion.div>

        {/* CTA Buttons with Consistent Hover Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          {/* Primary Button: View Work */}
          <button className="btn-primary">
            <span className="btn-fill-animation" />
            <span className="relative z-10">View Work</span>
          </button>

          {/* Secondary Button: Contact */}
          <button className="btn-primary">
            <span className="btn-fill-animation" />
            <span className="relative z-10">Contact</span>
          </button>
        </motion.div>
      </div>

      {/* Minimal Marquee */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black)]">
        <motion.div
          className="flex gap-4 opacity-40"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 60,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-32 md:h-40 flex-shrink-0"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}