"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function DigitalExperiencesPage() {
  const scrollRefs = useRef([]);
  const [activeTab, setActiveTab] = useState(0);

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
      title: "UX & Interface Design",
      outcome: "We design intuitive interfaces that guide users seamlessly toward meaningful interactions.",
      points: ["User Research & Journey Mapping", "Wireframing & Prototyping", "Usability Testing & Iteration"],
      projects: ["Solara App", "INKCHO Dashboard"],
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
    {
      title: "Custom Web Development",
      outcome: "We build robust, scalable websites tailored to your business goals and user needs.",
      points: ["Frontend & Backend Integration", "Responsive & Cross-Platform Compatibility", "API Development & Security"],
      projects: ["Oak & Clay Site", "Solara Platform"],
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
    {
      title: "Animation, CMS & Performance",
      outcome: "We enhance experiences with dynamic animations, efficient content management, and optimized performance.",
      points: ["Motion Design & Micro-Interactions", "CMS Implementation & Customization", "Performance Auditing & Optimization"],
      projects: ["INKCHO Portal", "Oak & Clay E-commerce"],
      images: ["/s2.jpg", "/s2.jpg", "/s2.jpg", "/s2.jpg"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f4ec] text-black overflow-x-hidden">

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
              <span>Service · Digital Experiences</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-serif leading-[0.95] text-[#9a1b40]">
              Digital
              <span className="block">Experiences</span>
            </h1>

            <p className="text-xl md:text-2xl text-black font-light leading-relaxed">
              Designing immersive online spaces that connect and convert.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur">
                <p className="text-sm text-black font-medium">UX Design</p>
              </div>
              <div className="px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur">
                <p className="text-sm text-black font-medium">Web Development</p>
              </div>
              <div className="px-6 py-3 rounded-full border border-black/10 bg-white/60 backdrop-blur">
                <p className="text-sm text-black font-medium">Performance Optimization</p>
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
                alt="Digital Experiences"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e4389]/30 to-transparent" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 p-8 rounded-2xl border border-black/10 bg-white/90 backdrop-blur shadow-xl max-w-xs">
              <p className="text-xs tracking-[0.25em] uppercase text-[#9d909a] font-medium mb-3">
                Our Approach
              </p>
              <p className="text-sm text-black/80 leading-relaxed">
                User-centered digital solutions that prioritize engagement, accessibility, and measurable results.
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
                <span>Why Digital Experiences Matter</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#9a1b40] mb-8 leading-tight">
                In a digital-first world, experiences define loyalty.
              </h2>
          
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "88%", label: "User retention from intuitive UX" },
                { number: "3.2x", label: "Conversion lift from optimized sites" },
                { number: "92%", label: "Engagement via animations" },
                { number: "76%", label: "Revenue growth from performance" }
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-2xl border border-black/10 bg-white/60 backdrop-blur text-center">
                  <p className="text-4xl md:text-5xl font-serif text-[#9a1b40] mb-3">{stat.number}</p>
                  <p className="text-sm text-black/80 leading-snug">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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
                <h2 className="text-3xl md:text-5xl font-serif text-[#9a1b40] leading-tight">
                  {categories[activeTab].title}
                </h2>

                <p className="text-lg text-black/85 leading-relaxed">
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
                      className="group relative p-8 rounded-2xl border border-black/10 bg-white/60 backdrop-blur hover:shadow-lg transition-all duration-700 ease-out overflow-hidden"
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
                          <p className="text-lg font-medium transition-colors duration-700 ease-out text-black group-hover:text-white">{point}</p>
                          <span className="text-xs tracking-[0.3em] uppercase font-medium transition-colors duration-700 ease-out text-[#9d909a] group-hover:text-white/80">0{i + 1}</span>
                        </div>
                        <p className="text-sm leading-relaxed transition-colors duration-700 ease-out text-black/70 group-hover:text-white/90">
                          {activeTab === 0 && i === 0 && "In-depth user interviews, personas, and journey maps to uncover pain points and opportunities."}
                          {activeTab === 0 && i === 1 && "High-fidelity wireframes and interactive prototypes to visualize and test design concepts."}
                          {activeTab === 0 && i === 2 && "Rigorous testing sessions with real users to refine interfaces for optimal usability."}
                          {activeTab === 1 && i === 0 && "Seamless integration of modern frontend frameworks with secure backend architectures."}
                          {activeTab === 1 && i === 1 && "Fully responsive designs ensuring flawless performance across devices and browsers."}
                          {activeTab === 1 && i === 2 && "Custom APIs and robust security protocols to handle data efficiently and safely."}
                          {activeTab === 2 && i === 0 && "Engaging motion graphics and subtle interactions that enhance user delight without distraction."}
                          {activeTab === 2 && i === 1 && "Tailored CMS setups with intuitive admin panels for effortless content updates."}
                          {activeTab === 2 && i === 2 && "Comprehensive audits and optimizations for lightning-fast load times and superior SEO."}
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
                  Digital Experiences in Action
                </p>
                <p className="text-xs tracking-[0.3em] uppercase text-[#9d909a] font-medium">
                  {categories[activeTab].projects.join(" · ")}
                </p>
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
              How We Build Your Digital Experiences
            </h2>
            <p className="text-lg text-black/85 max-w-3xl mx-auto">
              A collaborative development process that aligns user needs with technical excellence for transformative results.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: "Discovery", weeks: "1-2 weeks", desc: "User research, technical audits, goal alignment, and project scoping with wireframe sketches." },
              { phase: "Design", weeks: "2-4 weeks", desc: "Interface prototyping, visual design refinement, user testing, and iterative feedback loops." },
              { phase: "Development", weeks: "4-6 weeks", desc: "Code implementation, integration testing, CMS setup, and performance benchmarking." },
              { phase: "Launch", weeks: "1 week", desc: "Deployment, final optimizations, training handover, and post-launch monitoring support." }
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
                  <p className="text-sm text-black/80 leading-relaxed">{step.desc}</p>
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
              Elevate Your Digital Presence.
            </h3>
            <p className="text-lg text-black/85 mb-8 leading-relaxed">
              In today's connected world, exceptional digital experiences turn visitors into advocates. Let's design yours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-black/70">
                <span className="w-2 h-2 rounded-full bg-[#9a1b40]" />
                <span>Discovery session · Complimentary</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-black/70">
                <span className="w-2 h-2 rounded-full bg-[#9a1b40]" />
                <span>Custom proposals</span>
              </div>
            </div>

            <button className="btn-primary mt-6">
              {/* Expanding circular fill on hover */}
              <span className="btn-fill-animation" />

              {/* Label */}
              <span className="relative z-10">
                Start Your Digital Experience
              </span>
            </button>
          </motion.div>
        </div>
      </section>

    </main>
  );
}