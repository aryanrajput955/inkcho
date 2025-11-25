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
  const duplicatedImages = [...PORTFOLIO_IMAGES, ...PORTFOLIO_IMAGES];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#FAF9F6]">

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/[0.05] via-transparent to-black/[0.03]" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "url('https://transparenttextures.com/patterns/white-diamond.png')",
        }}
      />

      {/* ---------------- CENTER CONTENT ---------------- */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 px-4 py-1 bg-black/5 rounded-full border border-black/10 text-[11px] font-medium tracking-[0.2em] uppercase text-black/60"
        >
          Creative Studio
        </motion.div>

        {/* INKCHO Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-serif tracking-tight text-black mb-4"
        >
          INKCHO
        </motion.h1>

        {/* ---------------- HEADLINE BLOCK ---------------- */}
        <div className="relative flex flex-col items-center text-center mb-10">

 
          {/* First Line With Animated Doodle */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-3 flex-wrap mb-3"
          >
            <h2 className="text-3xl md:text-6xl font-light uppercase tracking-tight text-black/80">
              Where Ideas
            </h2>

            {/* Animated Doodle SVG */}
            <motion.svg
              width="55"
              height="55"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
              className="opacity-70"
            >
              <path
                d="M20 50 C40 20, 60 80, 80 50"
                stroke="#EB5B00"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.div>

          {/* Second Line With Animated Underline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative text-3xl md:text-6xl font-serif italic text-[#EB5B00]"
          >
            Become Art

            {/* Animated underline */}
            <motion.span
              className="absolute left-1/2 -bottom-2 w-[60%] h-[2px] bg-[#EB5B00]"
              initial={{ scaleX: 0, x: "-50%" }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.1 }}
              style={{ transformOrigin: "center" }}
            />
          </motion.h2>
        </div>

        {/* ---------------- SUBLINE ---------------- */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-black/60 text-lg md:text-xl max-w-2xl mt-3 leading-relaxed"
        >
          INKCHO is a multidisciplinary creative studio specializing in 
          illustration, product photography, posters, and 3D design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="flex gap-4 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-all"
          >
            View Portfolio
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-black/20 text-black rounded-full hover:bg-black/5 transition-all"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* ---------------- FLOATING MARQUEE ---------------- */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
        >
          {duplicatedImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] h-40 md:h-56 lg:h-64 flex-shrink-0"
              style={{ rotate: `${index % 2 === 0 ? -2 : 4}deg` }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover rounded-2xl shadow-sm border border-black/5"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
