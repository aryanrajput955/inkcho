"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function BrandIdentityPage() {
  const scrollRefs = useRef([]);

useEffect(() => {
  const containers = scrollRefs.current;
  const cleanupFns = [];

  containers.forEach((el) => {
    if (!el) return;

    let velocity = 0;
    let raf;

    const updateScroll = () => {
      el.scrollLeft += velocity;
      
      // Smooth Apple-style friction curve
      velocity *= 0.92; // lower slows faster, higher glides longer

      if (Math.abs(velocity) > 0.15) {
        raf = requestAnimationFrame(updateScroll);
      }
    };

    const onWheel = (e) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;

      e.preventDefault();

      // Apple-like inertia strength
      velocity += e.deltaY * 0.35;

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateScroll);
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    cleanupFns.push(() => {
      el.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(raf);
    });
  });

  return () => cleanupFns.forEach((fn) => fn && fn());
}, []);

  /* -- Projects Data (6 images each) -- */
  const projects = [
    {
      title: "INKCHO — Brand Identity",
      description:
        "A timeless and expressive identity built around the duality of ink and echo. Editorial typography mixed with handcrafted marks.",
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
    {
      title: "Solara — Minimal Sun Studio",
      description:
        "A clean, solar-inspired identity with sunburst motifs, soft gradients, and a focus on airy modern branding.",
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
    {
      title: "Oak & Clay — Artisan Craft Brand",
      description:
        "A warm handcrafted brand identity with organic textures, ceramic tones, and earthy design language.",
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] overflow-x-hidden">
      {/* ------------------ HERO (SECTION 00) ------------------ */}
      <section className="pt-28 pb-24 px-6 md:px-12 lg:px-28 border-b border-black/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
            className="md:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase text-black/50">
              <span className="h-px w-6 bg-black/40" />
              <span>Service · Brand Identity</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif leading-tight">
              Crafting
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-black/90 to-black">
                Brand Identity
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-black/70 font-light max-w-xl">
              We shape brand identities that feel timeless, intentional, and unmistakably yours.
            </p>
          </motion.div>

          {/* Right meta + stroke */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.9, delay: 0.1 }}
            className="md:col-span-5 space-y-6 md:pl-6"
          >
            <div className="p-5 rounded-2xl border border-black/10 bg-white/80 shadow-sm">
              <p className="text-xs font-semibold tracking-[0.2em] text-black/50">
                00 · OVERVIEW
              </p>
              <p className="mt-3 text-sm text-black/70 leading-relaxed">
                Strategy, visual language, and brand systems crafted for consistency across every touchpoint —
                from logo to layouts, digital to physical.
              </p>
            </div>

            <img
              src="/stroke.png"
              alt="Ink Stroke"
              className="w-full max-w-md opacity-80 ml-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ------------------ SECTION 01: WHAT IT MEANS ------------------ */}
      <section className="py-24 px-6 md:px-12 lg:px-28 bg-white border-b border-black/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          {/* Section label */}
          <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-2 text-sm text-black/50">
            <span className="font-mono text-xs tracking-[0.2em] uppercase">
              01 · Definition
            </span>
            <span>What brand identity means here.</span>
          </div>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-9 max-w-3xl text-lg text-black/75 leading-relaxed space-y-6"
          >
            <p>
              Brand identity isn’t just a logo — it’s the emotional and visual language that defines how
              people feel about your brand the moment they encounter it.
            </p>
            <p>
              At INKCHO, we treat identity as a living system: the combination of mark, typography, color,
              layout, photography, and tone. Every element is designed to work together and feel unmistakably
              like you.
            </p>
            <p>
              The goal is simple: recognition and resonance. Your brand should be seen, felt, and remembered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ------------------ SECTION 02: PROCESS ------------------ */}
      <section className="py-24 px-6 md:px-12 lg:px-28 bg-[#F5F3EF] border-b border-black/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10">
          {/* Section label */}
          <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-2 text-sm text-black/50">
            <span className="font-mono text-xs tracking-[0.2em] uppercase">
              02 · Process
            </span>
            <span>How we build identities that last.</span>
          </div>

          {/* Steps */}
          <div className="md:col-span-9 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Discovery",
                desc: "Understanding your story, values, audience, and what you want to be known for.",
              },
              {
                title: "Visual Language",
                desc: "Exploring directions in tone, typography, color, and composition that fit your voice.",
              },
              {
                title: "Identity System",
                desc: "Designing your logo, marks, rules, and applications so everything feels consistent.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.12 }}
                className="p-7 bg-white/60 rounded-2xl border border-black/10 backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  <p className="font-mono text-[11px] tracking-[0.23em] uppercase text-black/40 mb-3">
                    0{i + 1}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-black/70 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ SECTION 03: BRANDS WE'VE CRAFTED ------------------ */}
      <section className="py-24 px-6 md:px-12 lg:px-28 bg-white border-b border-black/5">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            {/* Label */}
            <div className="md:col-span-3 flex md:flex-col gap-4 md:gap-2 text-sm text-black/50">
              <span className="font-mono text-xs tracking-[0.2em] uppercase">
                03 · Work
              </span>
              <span>Brands we’ve shaped and refined.</span>
            </div>

            {/* Title */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-9"
            >
              <h2 className="text-3xl md:text-5xl font-serif">
                Brands We've Crafted
              </h2>
              <p className="mt-4 text-black/65 max-w-xl text-sm md:text-base">
                A selection of identity systems, each designed with its own voice, pace, and visual rhythm.
                Scroll sideways to explore.
              </p>
            </motion.div>
          </div>

          {/* Projects */}
          <div className="space-y-24 mt-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif">
                      {project.title}
                    </h3>
                    <p className="text-black/60 text-sm md:text-base max-w-2xl mt-2">
                      {project.description}
                    </p>
                  </div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-black/40 font-mono">
                    {String(index + 1).padStart(2, "0")} / {projects.length}
                  </p>
                </div>

                {/* Magnetic horizontal scroll with edge gradients */}
                <div className="relative">
                  {/* Gradient masks */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-white/70 to-transparent" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/70 to-transparent" />

                  <div
                    ref={(el) => (scrollRefs.current[index] = el)}
                    className="relative overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-4"
                  >
                    <div className="flex gap-6">
                      {project.images.map((src, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: i * 0.08 }}
                          className="flex-shrink-0 w-[260px] md:w-[360px] lg:w-[420px] h-[220px] md:h-[280px] lg:h-[320px] rounded-xl overflow-hidden bg-gray-200 snap-start md:snap-center group"
                        >
                          <img
                            src={src}
                            alt={`Project image ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ SECTION 04: CTA ------------------ */}
      <section className="py-24 px-6 md:px-12 lg:px-28 bg-[#FAF9F6] text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-black/50 mb-4">
            04 · Next
          </p>
          <h3 className="text-3xl md:text-5xl font-serif mb-6">
            Let’s Build Your Brand Identity.
          </h3>
          <p className="text-base md:text-lg text-black/60 mb-10">
            Whether you're starting fresh or evolving a legacy, we design identities that move with you
            and stand the test of time.
          </p>

          <button className="px-10 py-4 bg-black text-white rounded-full text-xs md:text-sm tracking-[0.2em] uppercase hover:bg-black/90 transition">
            Start a Project
          </button>
        </motion.div>
      </section>
    </main>
  );
}
