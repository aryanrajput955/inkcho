"use client";

import VisualIdentityHeroMobile from '@/app/components/services/mobile/VisualIdentityHeroMobile';
import OptimizedImage from "@/app/components/OptimizedImage";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React from 'react';

const categories = [
  {
    id: "01",
    title: "LOGO & IDENTITY SYSTEMS",
    description: "We design identity systems, not standalone logos. Each mark is built to work across contexts, scales, and mediums—so your brand stays recognisable, consistent, and confident wherever it appears.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772470476/img1_jehkeg.jpg",
    link: "/services/visual-identity/logo-identity-systems",
  },
  {
    id: "02",
    title: "TYPOGRAPHY, COLOUR & BRAND ASSETS",
    description: "We build visual languages that communicate before words do. From type pairings to color psychology, we ensure every element reinforces your brand's story and emotional impact.",
    image: "https://res.cloudinary.com/dplv15n29/image/upload/v1772470474/img2_ffrxjh.jpg",
    link: "/services/visual-identity/typography-color-brand-assets",
  },
];

export default function VisualIdentityPage() {
  const router = useRouter();
  const [expanding, setExpanding] = React.useState(null);
  const navigatedRef = React.useRef(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCircleClick = (destination) => {
    if (expanding) return;
    setExpanding(destination);
  };

  const handleRevealComplete = () => {
    if (expanding && !navigatedRef.current) {
      navigatedRef.current = true;
      router.push(`/services/${expanding}`);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#FFFBF5] text-black overflow-hidden">

      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(#E5E5E5 1px, transparent 1px), linear-gradient(90deg, #E5E5E5 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            transform: 'perspective(500px) rotateX(20deg) scale(1.5)',
            transformOrigin: 'top center',
          }}
        >
          <motion.div
            className="absolute inset-0"
            animate={{ y: [0, 80] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#FFFBF5_90%)]" />
      </div>

      <div className="relative z-10">

        {/* === HERO SECTION === */}
        <div className="relative w-full overflow-hidden">
          {/* DESKTOP */}
          <section className="hidden md:flex relative min-h-screen flex-col justify-between pt-48 pb-32 px-4 md:px-12 lg:px-20 max-w-[1800px] mx-auto overflow-hidden bg-[#FFFBF5]">
            <div
              className="absolute inset-0 opacity-[0.15] pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(#9a1b40 1px, transparent 1px)', backgroundSize: '40px 40px' }}
            />

            <div className="relative z-10 w-full">
              <motion.h1
                initial={{ x: -100, opacity: 0, filter: "blur(20px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14vw] leading-[0.8] font-bold tracking-tighter text-black uppercase select-none"
              >
                Visual
              </motion.h1>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-2xl text-gray-600 max-w-md text-center md:text-left font-light leading-relaxed font-serif"
              >
                Crafting a distinctive look that{" "}
                <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]">speaks</span>,{" "}
                <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]">resonates</span>, and{" "}
                <span className="text-[#9a1b40] font-medium border-b border-[#9a1b40]">stays</span>.
              </motion.p>
            </div>

            <div className="relative z-10 w-full text-right">
              <motion.h1
                initial={{ x: 100, opacity: 0, filter: "blur(20px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-[14vw] leading-[0.8] font-serif italic text-[#9a1b40] tracking-tighter select-none mix-blend-multiply"
              >
                Identity
              </motion.h1>
            </div>

            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 w-px bg-black/5 -z-0"
            />
          </section>

          {/* MOBILE */}
          <div className="block md:hidden">
            <VisualIdentityHeroMobile />
          </div>
        </div>

        {/* === 2-CARD SERVICES SECTION === */}
        <section className="relative py-20 px-6 md:px-14 lg:px-20 bg-[#FFFBF5] pb-52">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 flex items-center gap-3"
          >
            <div className="w-8 h-px bg-[#9a1b40]" />
            <span className="text-[10px] font-semibold tracking-[0.35em] text-[#9a1b40] uppercase">What We Offer</span>
          </motion.div>

          <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {categories.map((cat, index) => (
              <Link href={cat.link} key={cat.id} className="w-full">
                <motion.article
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center gap-5 cursor-pointer max-w-[420px] mx-auto w-full"
                >
                  {/* Title — centered at top */}
                  <h2 className="text-sm md:text-base font-bold tracking-[0.14em] text-black uppercase text-center leading-snug px-2">
                    {cat.title}
                  </h2>

                  {/* Image row — ghost number left, image fills remaining */}
                  <div className="relative w-full">
                    {/* Ghost number — sits at top-left, partially behind the image */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-2 text-[5.5rem] md:text-[6.5rem] font-black text-black/[0.07] leading-none select-none pointer-events-none z-0"
                    >
                      {index + 1}.
                    </span>

                    {/* Image container — pl exposes ghost number, relative+fill for proper rendering */}
                    <div className="pl-14 md:pl-16 relative z-10">
                      <div className="relative overflow-hidden rounded-[1.25rem] aspect-square shadow-sm bg-gray-100 group">
                        <OptimizedImage
                          src={cat.image}
                          alt={cat.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Description — small, centered, italic serif */}
                  <p className="text-[12px] md:text-[13px] text-gray-500 text-center font-serif italic leading-relaxed max-w-[260px]">
                    {cat.description}
                  </p>
                </motion.article>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* === BOTTOM-LEFT CIRCLE: Brand Foundation === */}
      <motion.button
        className="fixed bottom-8 left-8 z-50 cursor-pointer group"
        onClick={() => handleCircleClick('brand-foundation')}
        aria-label="Go to Brand Foundation"
        initial={{ opacity: 0, y: 28, scale: 0.75, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-24 h-24 rounded-full shadow-[0_10px_40px_rgba(154,27,64,0.6)] overflow-hidden"
        >
          <img
            src="/assets/visual-identity-left-circle.png"
            alt="Brand Foundation"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Hover: dark overlay + service name fades in */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 gap-0.5 px-3">
            <span className="text-[7.5px] font-semibold tracking-[0.22em] text-white uppercase leading-relaxed text-center">Brand<br />Foundation</span>
          </div>
        </motion.div>
      </motion.button>

      {/* === BOTTOM-RIGHT CIRCLE: Digital Experiences === */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 cursor-pointer group"
        onClick={() => handleCircleClick('digital-experiences')}
        aria-label="Go to Digital Experiences"
        initial={{ opacity: 0, y: 28, scale: 0.75, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-24 h-24 rounded-full shadow-[0_10px_40px_rgba(154,27,64,0.6)] overflow-hidden"
        >
          <img
            src="/assets/visual-identity-right-circle.png"
            alt="Digital Experiences"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Hover: dark overlay + service name fades in */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400" />
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 gap-0.5 px-3">
            <span className="text-[7.5px] font-semibold tracking-[0.22em] text-white uppercase leading-relaxed text-center">Digital<br />Experiences</span>
          </div>
        </motion.div>
      </motion.button>

      {/* === PAGE TRANSITION OVERLAYS === */}
      <AnimatePresence>
        {expanding === 'brand-foundation' && (
          <motion.div
            key="bf-overlay"
            className="fixed inset-0 z-[100] bg-[#9a1b40] pointer-events-none"
            initial={{ clipPath: 'circle(48px at 80px calc(100vh - 80px))' }}
            animate={{ clipPath: 'circle(250vmax at 80px calc(100vh - 80px))' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={handleRevealComplete}
          />
        )}
        {expanding === 'digital-experiences' && (
          <motion.div
            key="de-overlay"
            className="fixed inset-0 z-[100] bg-[#9a1b40] pointer-events-none"
            initial={{ clipPath: 'circle(48px at calc(100vw - 80px) calc(100vh - 80px))' }}
            animate={{ clipPath: 'circle(250vmax at calc(100vw - 80px) calc(100vh - 80px))' }}
            transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
            onAnimationComplete={handleRevealComplete}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
