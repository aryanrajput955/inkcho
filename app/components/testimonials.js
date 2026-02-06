'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
    text: "Working with Paisana(House) has been discovering a new way to build a brand. From Araex to Villaconchi and the Maridae universe, they managed to connect the essence of wine with an emotional and digitally impeccable narrative. More than an agency, a strategic partner that understands our pace and ambition.",
    name: "Michael Chen",
    position: "CEO, Wine Estates"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
    text: "Their creative approach transformed our brand identity completely. The attention to detail and understanding of our vision was remarkable. Every interaction felt collaborative and innovative.",
    name: "Sarah Williams",
    position: "Founder, Luxury Brands Co"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    text: "Exceptional work that exceeded all our expectations. Their team brought fresh perspectives and delivered results that truly resonated with our audience. A partnership we treasure.",
    name: "James Rodriguez",
    position: "Marketing Director, Innovation Labs"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    text: "The strategic insight and creative execution were phenomenal. They didn't just deliver a project—they crafted an experience that elevated our entire brand presence.",
    name: "Emily Thompson",
    position: "COO, Creative Solutions"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const hasData = testimonials.length > 0;
  const stackDepth = Math.min(4, testimonials.length);

  const paginate = (dir) => {
    if (!hasData) return;
    setDirection(dir);
    setCurrentIndex((prev) =>
      dir > 0
        ? (prev + 1) % testimonials.length
        : prev === 0
        ? testimonials.length - 1
        : prev - 1
    );
  };

  const visible = [];
  if (hasData) {
    for (let i = 0; i < stackDepth; i++) {
      const idx = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[idx], offset: i });
    }
  }

  const backCardStyle = (offset) => ({
    y: offset * 12,
    scale: 1 - offset * 0.05,
    opacity: 1 - offset * 0.1,
    rotate: -2 * offset,
    x: -4 * offset,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 35
    }
  });

  const activeVariants = {
    enter: (d) => ({
      x: d > 0 ? 220 : -220,
      rotateY: d > 0 ? -15 : 15,
      rotateZ: d > 0 ? 3 : -3,
      scale: 0.94,
      opacity: 0
    }),
    center: {
      x: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 35,
        duration: 0.45
      }
    },
    exit: (d) => ({
      x: d > 0 ? -220 : 220,
      rotateY: d > 0 ? 15 : -15,
      rotateZ: d > 0 ? -3 : 3,
      scale: 0.94,
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 380,
        damping: 32,
        duration: 0.45
      }
    })
  };

  return (
    <section className="bg-[#f7f4ec] py-20">
      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <h2 className="text-center font-serif font-medium tracking-tight text-[#1e4389] text-3xl md:text-5xl mb-12">
          What Our Clients <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 text-[#9a1b40]">Say</span>
            <img 
              src="/red-circle.png" 
              alt="" 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] md:w-[200px] md:h-[200px] max-w-none object-contain pointer-events-none" 
            />
          </span>
        </h2>

        {hasData && (
          <>
            <div className="relative flex justify-center">
              {/* Navigation Arrows */}
              <button
                onClick={() => paginate(-1)}
                className="absolute -left-4 md:-left-20 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-md border border-[#d6d3cd] hover:bg-white transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-[#1e4389]" />
              </button>

              <button
                onClick={() => paginate(1)}
                className="absolute -right-4 md:-right-20 top-1/2 -translate-y-1/2 z-40 p-3 bg-white/90 backdrop-blur-md rounded-full shadow-md border border-[#d6d3cd] hover:bg-white transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#1e4389]" />
              </button>

              <div
                className="relative w-full max-w-[360px] h-[420px]"
                style={{ perspective: '1100px' }}
              >
                {/* Background Stack Cards */}
                {visible.slice(1).map((card) => (
                  <motion.div
                    key={`bg-${card.id}-${card.offset}`}
                    className="absolute inset-x-0 top-0 pointer-events-none"
                    animate={backCardStyle(card.offset)}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    style={{ zIndex: 40 - card.offset }}
                  >
                    <div
                      className="bg-white border border-[#d6d3cd] shadow-md"
                      style={{
                        borderRadius: '14px',
                        aspectRatio: '2.4 / 3.4',
                      }}
                    />
                  </motion.div>
                ))}

                {/* Active Card */}
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={testimonials[currentIndex].id}
                    custom={direction}
                    variants={activeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-x-0 top-0"
                    style={{ zIndex: 60, transformStyle: 'preserve-3d' }}
                  >
                    <motion.div
                      whileHover={{ y: -3, scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      className="bg-white border-2 border-[#1e4389] shadow-xl p-6 flex flex-col justify-between rounded-2xl"
                      style={{
                        aspectRatio: '2.4 / 3.4',
                        willChange: 'transform'
                      }}
                    >
                      <div className="text-center">
                        <motion.img
                          key={`img-${testimonials[currentIndex].id}`}
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-14 h-14 mx-auto mb-5 object-cover rounded-full border-2 border-[#9a1b40]/30"
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.12 }}
                        />
                        <motion.p
                          key={`text-${testimonials[currentIndex].id}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="text-[#1e1e1e] text-sm leading-relaxed mb-6 font-light"
                        >
                          "{testimonials[currentIndex].text}"
                        </motion.p>
                      </div>
                      <div className="border-t border-[#d6d3cd] pt-3">
                        <h3 className="text-[#1e4389] font-medium text-sm">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-xs text-[#666666] mt-1">
                          {testimonials[currentIndex].position}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => {
                    if (i === currentIndex) return;
                    setDirection(i > currentIndex ? 1 : -1);
                    setCurrentIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? 'w-8 bg-[#1e4389]'
                      : 'w-5 bg-[#d6d3cd] hover:bg-[#9a1b40]/50'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}