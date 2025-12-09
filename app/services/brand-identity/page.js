"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function BrandFoundationsPage() {
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

  const categories = [
    {
      title: "Strategic Positioning & Research",
      outcome: "We uncover where your brand truly belongs in the market.",
      points: ["Market Intelligence", "Audience Insights", "Positioning Strategy"],
      projects: ["INKCHO", "Solara"],
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
    {
      title: "Brand Architecture & Direction",
      outcome: "We structure brand systems that scale with clarity and control.",
      points: ["Brand Hierarchy", "Design Frameworks", "Visual Direction"],
      projects: ["Oak & Clay", "INKCHO"],
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
    {
      title: "Purpose, Vision & Brand Voice",
      outcome: "We define what your brand stands for — and how it speaks.",
      points: ["Purpose & Vision", "Messaging Pillars", "Tone of Voice"],
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
              <span>Service · Brand Foundations</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] text-[#9a1b40]">
              Brand
              <span className="block">Foundations</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1e4389] font-light leading-relaxed">
              We define how your brand thinks, speaks, and is remembered — long before it is ever seen.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur">
                <p className="text-sm text-[#1e4389] font-medium">Strategic Clarity</p>
              </div>
              <div className="px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur">
                <p className="text-sm text-[#1e4389] font-medium">Market Positioning</p>
              </div>
              <div className="px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur">
                <p className="text-sm text-[#1e4389] font-medium">Brand Architecture</p>
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
                alt="Brand Strategy"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e4389]/30 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 p-8 rounded-2xl border border-black/10 bg-white/90 backdrop-blur shadow-xl max-w-xs">
              <p className="text-xs tracking-[0.25em] uppercase text-[#9d909a] font-medium mb-3">
                Our Approach
              </p>
              <p className="text-sm text-[#1e4389]/80 leading-relaxed">
                Strategy, narrative, and brand systems designed for clarity, distinction, and long-term growth.
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
                <span>Why Foundations Matter</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#9a1b40] mb-8 leading-tight">
                Without strategy, design is decoration.
              </h2>
              <p className="text-lg text-[#1e4389]/85 leading-relaxed mb-6">
                Brand foundations are the invisible infrastructure that determines whether your brand leads, follows, or fades. They shape decisions, guide growth, and ensure every touchpoint reinforces who you are.
              </p>
              <p className="text-lg text-[#1e4389]/85 leading-relaxed">
                We don't start with logos. We start with clarity — because a brand built on solid ground doesn't need to reinvent itself every year.
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
                { number: "87%", label: "Clarity on brand direction" },
                { number: "3.2x", label: "Faster decision-making" },
                { number: "92%", label: "Team alignment increase" },
                { number: "68%", label: "Market differentiation" }
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
      <section className="px-6 md:px-12 lg:px-28 space-y-44 pb-40">
        {categories.map((cat, index) => (
          <section key={index} className="max-w-7xl mx-auto space-y-16">

            <div className="flex items-center gap-6">
              <span className="text-xs tracking-[0.3em] uppercase text-[#9d909a] font-medium">
                0{index + 1}
              </span>
              <span className="flex-1 h-px bg-black/10" />
            </div>

            <div className="grid md:grid-cols-12 gap-14 items-start">
              <div className="md:col-span-5 space-y-8">
                <h2 className="text-3xl md:text-5xl font-serif text-[#9a1b40] leading-tight">
                  {cat.title}
                </h2>

                <p className="text-lg text-[#1e4389]/85 leading-relaxed">
                  {cat.outcome}
                </p>

                <div className="space-y-4 pt-4">
                  <p className="text-xs tracking-[0.25em] uppercase text-[#9d909a] font-medium">What's Included</p>
                  <ul className="space-y-3">
                    {cat.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9a1b40] mt-2 flex-shrink-0" />
                        <span className="text-[#1e4389]/80 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-7 space-y-8">
                <div className="grid gap-6">
                  {cat.points.map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="p-8 rounded-2xl border border-black/10 bg-white/60 backdrop-blur hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <p className="text-lg text-[#1e4389] font-medium">{point}</p>
                        <span className="text-xs tracking-[0.3em] uppercase text-[#9d909a] font-medium">0{i + 1}</span>
                      </div>
                      <p className="text-sm text-[#1e4389]/70 leading-relaxed">
                        {index === 0 && i === 0 && "Deep dive into competitive landscape, market dynamics, and whitespace opportunities."}
                        {index === 0 && i === 1 && "Behavioral analysis, psychographics, and decision-making patterns of your ideal customers."}
                        {index === 0 && i === 2 && "Strategic framework that defines your unique market position and competitive advantage."}
                        {index === 1 && i === 0 && "Multi-tier brand structure that clarifies relationships between parent, sub-brands, and offerings."}
                        {index === 1 && i === 1 && "Scalable systems for visual language, components, and design principles."}
                        {index === 1 && i === 2 && "Creative guardrails that ensure consistency while enabling flexibility."}
                        {index === 2 && i === 0 && "The 'why' behind your brand and the future you're building toward."}
                        {index === 2 && i === 1 && "Core themes that guide all brand communications and storytelling."}
                        {index === 2 && i === 2 && "Distinct personality and language patterns that make your brand instantly recognizable."}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Strip */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-wide text-[#9d909a] font-medium">
                  Brand Foundations in Action
                </p>
                <p className="text-xs tracking-[0.3em] uppercase text-[#9d909a] font-medium">
                  {cat.projects.join(" · ")}
                </p>
              </div>

              <div
                ref={(el) => (scrollRefs.current[index] = el)}
                className="relative overflow-x-auto no-scrollbar"
              >
                <div className="flex gap-8 pb-4">
                  {cat.images.map((src, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
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
          </section>
        ))}
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
              How We Build Your Foundation
            </h2>
            <p className="text-lg text-[#1e4389]/85 max-w-3xl mx-auto">
              A proven methodology that transforms ambiguity into strategic clarity through collaborative discovery and rigorous analysis.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: "Discover", weeks: "1-2 weeks", desc: "Stakeholder interviews, market research, competitive analysis, and audience deep-dive." },
              { phase: "Define", weeks: "2-3 weeks", desc: "Strategic positioning, brand architecture, purpose articulation, and messaging frameworks." },
              { phase: "Direct", weeks: "1-2 weeks", desc: "Visual direction, design principles, tone of voice guidelines, and creative guardrails." },
              { phase: "Deliver", weeks: "1 week", desc: "Comprehensive brand book, presentation, and strategic roadmap for activation." }
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
              Begin With Strategy.
            </h3>
            <p className="text-lg text-[#1e4389]/85 mb-8 leading-relaxed">
              Every great brand starts with a foundation built to last. Let's discover yours together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-[#1e4389]/70">
                <span className="w-2 h-2 rounded-full bg-[#9a1b40]" />
                <span>Discovery call · No obligation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#1e4389]/70">
                <span className="w-2 h-2 rounded-full bg-[#9a1b40]" />
                <span>Limited onboarding each month</span>
              </div>
            </div>

            <button className="mt-6 hover:scale-105 ease-in-out  cursor-pointer px-14 py-5 bg-[#1e4389] text-white rounded-full text-sm tracking-[0.25em] uppercase hover:bg-[#7e1534] transition-all duration-300 hover:shadow-xl">
              Start Your Brand Strategy
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}