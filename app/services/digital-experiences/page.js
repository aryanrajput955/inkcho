"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function VisualIdentityPage() {
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
        velocity *= 0.92;
        if (Math.abs(velocity) > 0.15) raf = requestAnimationFrame(updateScroll);
      };

      const onWheel = (e) => {
        if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
        e.preventDefault();
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

  const [activeTab, setActiveTab] = useState(0);

  const scroll = (direction) => {
    const container = scrollRefs.current[activeTab];
    if (container) {
      container.scrollBy({ left: direction * 400, behavior: "smooth" });
    }
  };

  const categories = [
    {
      title: "Logo & Identity Systems",
      outcome: "We create marks that become unmistakable symbols of your brand.",
      points: ["Primary Logo Design", "System Variations", "Brand Guidelines"],
      projects: ["INKCHO", "Solara"],
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
    {
      title: "Typography, Colour & Brand Assets",
      outcome: "We build visual languages that communicate before words do.",
      points: ["Type Systems", "Colour Palettes", "Asset Libraries"],
      projects: ["Oak & Clay", "INKCHO"],
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
    {
      title: "Illustration, Motion & Art Direction",
      outcome: "We craft visual narratives that bring brands to life.",
      points: ["Illustration Style", "Motion Guidelines", "Art Direction"],
      projects: ["Solara", "Oak & Clay"],
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f4ec] text-[#1e4389] overflow-x-hidden">

      {/* ------------------ HERO ------------------ */}
      <section className="pt-36 pb-32 px-6 md:px-12 lg:px-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.9 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4 text-xs tracking-[0.22em] uppercase text-[#9d909a] font-medium">
              <span className="h-px w-8 bg-[#9d909a]/60" />
              <span>Service · Visual Identity</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] text-[#9a1b40]">
              Visual
              <span className="block">Identity</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1e4389] font-light leading-relaxed">
              Crafting a distinctive look that speaks, resonates, and stays.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur">
                <p className="text-sm text-[#1e4389] font-medium">Logo Systems</p>
              </div>
              <div className="px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur">
                <p className="text-sm text-[#1e4389] font-medium">Brand Assets</p>
              </div>
              <div className="px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur">
                <p className="text-sm text-[#1e4389] font-medium">Art Direction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/s2.jpg"
                alt="Visual Identity"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e4389]/30 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 p-8 rounded-2xl border border-black/10 bg-white/90 backdrop-blur shadow-xl max-w-xs">
              <p className="text-xs tracking-[0.25em] uppercase text-[#9d909a] font-medium mb-3">
                Our Approach
              </p>
              <p className="text-sm text-[#1e4389]/80 leading-relaxed">
                Design systems that are timeless, scalable, and impossible to ignore.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------ WHY IT MATTERS ------------------ */}
      <section className="px-6 md:px-12 lg:px-28 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 text-xs tracking-[0.22em] uppercase text-[#9d909a] font-medium mb-8">
                <span className="h-px w-8 bg-[#9d909a]/60" />
                <span>Why Visual Identity Matters</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#9a1b40] mb-8 leading-tight">
                First impressions are visual, and lasting ones are intentional.
              </h2>
              <p className="text-lg text-[#1e4389]/85 leading-relaxed mb-6">
                Your visual identity is the face of your brand — the first thing people see, remember, and recognize. It's the difference between being noticed and being ignored.
              </p>
              <p className="text-lg text-[#1e4389]/85 leading-relaxed">
                We create identities that don't just look good — they work hard, scale seamlessly, and stand the test of time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "94%", label: "Recognition through visuals" },
                { number: "4.5x", label: "Higher brand recall" },
                { number: "89%", label: "Trust from consistency" },
                { number: "73%", label: "Purchase influence" }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-2xl border border-black/10 bg-white/60 backdrop-blur text-center">
                  <p className="text-4xl md:text-5xl font-serif text-[#9a1b40] mb-3">{stat.number}</p>
                  <p className="text-sm text-[#1e4389]/80 leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ------------------ CATEGORIES ------------------ */}
      {/* ------------------ CATEGORIES ------------------ */}
      <section className="px-6 md:px-12 lg:px-28 pb-40">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Tab Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 rounded-full text-sm tracking-[0.15em] uppercase font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-[#9a1b40] text-white shadow-lg scale-105"
                    : "bg-white/60 text-black border border-black/10 hover:bg-white/80 hover:shadow-md"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <motion.section
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            <div className="flex items-center gap-6">
              <span className="text-xs tracking-[0.3em] uppercase text-[#9d909a] font-medium">
                0{activeTab + 1}
              </span>
              <span className="flex-1 h-px bg-black/10" />
            </div>

            <div className="grid md:grid-cols-12 gap-14 items-start">
              <div className="md:col-span-5 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight">
                  {categories[activeTab].title}
                </h2>

                <p className="text-lg text-[#9a1b40] leading-relaxed">
                  {categories[activeTab].outcome}
                </p>
              </div>

              <div className="md:col-span-7 space-y-8">
                <div className="grid gap-6">
                  {categories[activeTab].points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group relative p-8 rounded-2xl border border-black/10 bg-[#EED0D7] backdrop-blur hover:shadow-lg transition-all duration-700 ease-out overflow-hidden"
                    >
                      {/* Background Image with Overlay */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out"
                        style={{ backgroundImage: `url(${categories[activeTab].images[i]})` }}
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <p className="text-lg font-medium transition-colors duration-700 ease-out text-[#9a1b40] group-hover:text-white">{point}</p>
                          <span className="text-xs tracking-[0.3em] uppercase font-medium transition-colors duration-700 ease-out text-[#9a1b40] group-hover:text-white/80">0{i + 1}</span>
                        </div>
                        <p className="text-sm leading-relaxed transition-colors duration-700 ease-out text-[#9a1b40] group-hover:text-white/90">
                           {activeTab === 0 && i === 0 && "Unique logomarks crafted to embody your brand's essence with precision and purpose."}
                           {activeTab === 0 && i === 1 && "Flexible logo variations optimized for every application — from favicon to billboard."}
                           {activeTab === 0 && i === 2 && "Comprehensive usage rules ensuring your identity remains consistent across all touchpoints."}
                           {activeTab === 1 && i === 0 && "Curated typeface pairings that reinforce hierarchy, readability, and brand personality."}
                           {activeTab === 1 && i === 1 && "Strategic colour systems that evoke emotion and enhance brand recognition."}
                           {activeTab === 1 && i === 2 && "Ready-to-use graphic elements, patterns, and icons that extend your visual language."}
                           {activeTab === 2 && i === 0 && "Distinctive illustration approaches that add character and depth to your brand story."}
                           {activeTab === 2 && i === 1 && "Animation principles and transitions that bring static elements to dynamic life."}
                           {activeTab === 2 && i === 2 && "Creative direction frameworks that guide photography, video, and all visual content."}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Strip */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-wide text-[#9d909a] font-medium">
                  Visual Identity in Action
                </p>
                <div className="flex items-center gap-6">
                  <p className="hidden md:block text-xs tracking-[0.3em] uppercase text-[#9d909a] font-medium">
                    {categories[activeTab].projects.join(" · ")}
                  </p>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => scroll(-1)}
                      className="w-10 h-10 rounded-full bg-white border border-[#9a1b40] flex items-center justify-center text-[#9a1b40] hover:bg-[#9a1b40] hover:text-white transition-all duration-300"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={() => scroll(1)}
                      className="w-10 h-10 rounded-full bg-white border border-[#9a1b40] flex items-center justify-center text-[#9a1b40] hover:bg-[#9a1b40] hover:text-white transition-all duration-300"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div
                ref={(el) => (scrollRefs.current[activeTab] = el)}
                className="relative overflow-x-auto no-scrollbar"
              >
                <div className="flex gap-8 pb-4">
                  {categories[activeTab].images.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                      className="flex-shrink-0 w-[280px] md:w-[380px] lg:w-[440px] h-[220px] md:h-[280px] lg:h-[320px] rounded-xl overflow-hidden bg-gray-200 shadow-lg"
                    >
                      <img
                        src={src}
                        alt="Project"
                        className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </section>

      {/* ------------------ PROCESS SECTION ------------------ */}
      <section className="px-6 md:px-12 lg:px-28 py-32 bg-white/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 text-xs tracking-[0.22em] uppercase text-[#9d909a] font-medium mb-8">
              <span className="h-px w-8 bg-[#9d909a]/60" />
              <span>Our Process</span>
              <span className="h-px w-8 bg-[#9d909a]/60" />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#9a1b40] mb-6">
              How We Craft Your Identity
            </h2>
            <p className="text-lg text-[#1e4389]/85 max-w-3xl mx-auto">
              A meticulous design journey that transforms strategic insights into iconic visual expressions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: "Research", weeks: "1 week", desc: "Brand audit, competitive visual analysis, moodboarding, and strategic creative briefing." },
              { phase: "Explore", weeks: "2-3 weeks", desc: "Concept development, logo explorations, type and colour studies, and iterative refinement." },
              { phase: "Refine", weeks: "1-2 weeks", desc: "System building, asset creation, application testing, and comprehensive guideline development." },
              { phase: "Deliver", weeks: "1 week", desc: "Final file packages, brand guidelines, asset libraries, and implementation support." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="p-8 rounded-2xl border border-black/10 bg-white/80 backdrop-blur h-full hover:shadow-xl transition-all duration-300">
                  <div className="text-6xl font-serif text-[#9a1b40]/20 mb-4">0{i + 1}</div>
                  <h3 className="text-2xl font-serif text-[#9a1b40] mb-2">{step.phase}</h3>
                  <p className="text-xs tracking-[0.25em] uppercase text-[#9d909a] font-medium mb-4">{step.weeks}</p>
                  <p className="text-sm text-[#1e4389]/80 leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-[#9d909a]/40" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------ CTA ------------------ */}
      <section className="py-40 px-6 md:px-12 lg:px-28 text-center border-t border-black/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl md:text-6xl font-serif text-[#9a1b40] mb-8">
              Create An Identity That Endures.
            </h3>
            <p className="text-lg text-[#1e4389]/85 mb-8 leading-relaxed">
              Every memorable brand has a visual identity that's unmistakably theirs. Let's craft yours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-[#1e4389]/70">
                <span className="w-2 h-2 rounded-full bg-[#9a1b40]" />
                <span>Portfolio review · Complimentary</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#1e4389]/70">
                <span className="w-2 h-2 rounded-full bg-[#9a1b40]" />
                <span>Selected projects only</span>
              </div>
            </div>

            <button className="mt-6 px-14 py-5 bg-[#9a1b40] text-white rounded-full text-sm tracking-[0.25em] uppercase hover:bg-[#7e1534] transition-all duration-300 hover:shadow-xl">
              Start Your Visual Identity
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}