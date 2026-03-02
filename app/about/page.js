"use client";

import { motion } from "framer-motion";
import { useLenis } from '../hooks/Lenis';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  useLenis();

  return (
    <div className="min-h-screen w-full bg-[#f7f4ec] text-[#1e1e1e] overflow-x-hidden">
      
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Heading + Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-6 text-[#1e4389]">
              About 
              <span className="block text-[#9a1b40]">
                INKCHO
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1e1e1e]/80 font-light max-w-2xl">
              Inkcho was built on a simple belief. Strong brands are not decorated. They are constructed.
            </p>

            {/* Large stroke below text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ duration: 1, delay: 0.3 }}
              className="mt-12"
            >
              <img 
                src="/stroke.png"
                alt="Broad Ink Stroke"
                className="w-full max-w-4xl opacity-90"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT — Thin Ink Stroke Illustration */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-end"
          >
            <img
              src="/ink.png"
              alt="Thin Ink Stroke"
              className="w-full max-w-md opacity-90 object-contain"
            />
          </motion.div>

        </div>
      </section>

      {/* ------------------ SECTION 2: THE STORY ------------------ */}
      <section className="py-32 px-6 md:px-12 lg:px-32 bg-white text-left">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif mb-14 max-w-4xl text-[#1e4389]"
        >
          Ink and Echo
        </motion.h2>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl"
        >
          <div className="text-lg text-[#1e1e1e]/80 leading-relaxed">
            <p className="mb-6">
              We work at the intersection of brand strategy, visual identity, and digital experience. From foundational thinking to immersive execution, our work is designed to create clarity, consistency, and long term impact.
            </p>
            <p className="mb-6">
              The name <span className="font-semibold text-[#9a1b40]">Inkcho</span> combines two ideas. <span className="font-semibold text-[#9a1b40]">Ink</span> represents creation. The act of putting something intentional into the world.
            </p>
            <p className="mb-6">
               <span className="font-semibold text-[#9a1b40]">Echo</span> represents longevity. The resonance that remains long after the first impression.
            </p>
          </div>

          <div className="text-lg text-[#1e1e1e]/80 leading-relaxed">
            <p className="mb-6">
              Together, they reflect our approach. Design that leaves a mark and continues to resonate.
            </p>
            <p className="mb-6">
              We do not treat branding as surface level aesthetics. We build systems. Strategic, visual, and digital. Systems that scale as businesses grow.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ------------------ SECTION 3: WHAT WE DO ------------------ */}
      <section className="py-32 px-6 md:px-12 lg:px-32 bg-[#f7f4ec] text-left">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif mb-6 text-[#1e4389]"
        >
          What We Do
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-serif italic text-[#9a1b40] mb-14"
        >
          We structure brands from the inside out.
        </motion.p>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl grid md:grid-cols-3 gap-12 text-lg text-[#1e1e1e]/80 leading-relaxed"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-[#9a1b40]">Brand Foundations</h3>
            <p>Clarifying positioning, audience insight, purpose, and direction before a single visual decision is made.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-[#9a1b40]">Visual Identity</h3>
            <p>Developing identity systems that are distinctive, scalable, and consistent across every touchpoint.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-[#9a1b40]">Digital Experiences</h3>
            <p>Designing interactive environments where brands are not only seen but experienced.</p>
          </div>
        </motion.div>
      </section>

      {/* ------------------ SECTION 4: APPROACH ------------------ */}
      <section className="py-32 px-6 md:px-12 lg:px-32 bg-white text-left">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif mb-14 max-w-4xl text-[#1e4389]"
        >
          Our Approach
        </motion.h2>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-6xl"
        >
          <div className="text-xl md:text-2xl text-[#1e1e1e]/80 leading-relaxed italic border-l-4 border-[#9a1b40] pl-8">
            <p className="mb-4">Clarity comes before creativity.</p>
            <p className="mb-4">Structure comes before style.</p>
            <p className="mb-4">Systems come before trends.</p>
          </div>

          <div className="text-lg text-[#1e1e1e]/80 leading-relaxed space-y-6">
            <p>
              Every project begins with understanding context. The business. The audience. The long term ambition. From there, we design with intention, not assumption.
            </p>
            <p>
              Inkcho exists to help brands move from scattered expression to cohesive presence.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ------------------ SECTION 5: CTA ------------------ */}
      <section className="py-32 px-6 md:px-12 lg:px-32 bg-[#f7f4ec] text-center">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-4xl md:text-6xl font-serif mb-8 text-[#1e4389]">
            Let’s Create What Stays.
          </h3>
          <p className="text-lg mb-10">
            Let’s craft your story in a way the world never forgets.
          </p>

          <button className="btn-primary">
            <span className="btn-fill-animation" />
            <span className="relative z-10">Start a Project</span>
          </button>
        </motion.div>
      </section>

    </div>
  );
}