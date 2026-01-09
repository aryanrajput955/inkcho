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
              The Origin of  
              <span className="block text-[#9a1b40]">
                INKCHO
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#1e1e1e]/80 font-light max-w-2xl">
              A studio born from the union of two forces — 
              <span className="font-semibold text-[#9a1b40]">Ink</span>, the act of creation, 
              and <span className="font-semibold text-[#9a1b40]">Echo</span>, the resonance that remains.
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
      <section className="py-32 px-6 md:px-12 lg:px-32 bg-white">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif mb-14 max-w-4xl text-[#1e4389]"
        >
          A Name Crafted from Essence  
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
              <span className="font-semibold text-[#9a1b40]">Ink</span> has always been a symbol of permanence — the medium
              of ancient scripts, crafted letters, philosophies, and
              blueprints that changed civilizations.
            </p>
            <p className="mb-6">
              It carries an honesty that digital pixels often forget:
              the pressure of a brushstroke, the imperfection of texture,
              the human fingerprint behind creation.
            </p>
          </div>

          <div className="text-lg text-[#1e1e1e]/80 leading-relaxed">
            <p className="mb-6">
              <span className="font-semibold text-[#9a1b40]">Echo</span> is the opposite — intangible, resonant, and alive.
              It’s what remains after the message is delivered.
            </p>
            <p>
              When combined, <span className="font-semibold text-[#9a1b40]">INKCHO</span> captures both:
              the artifact and the aftereffect, the creation and its
              lingering impact.  
            </p>
          </div>
        </motion.div>
      </section>

      {/* ------------------ SECTION 3: THE PHILOSOPHY ------------------ */}
      <section className="py-32 px-6 md:px-12 lg:px-32 bg-[#f7f4ec]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-serif mb-14 max-w-4xl text-[#1e4389]"
        >
          Our Philosophy  
        </motion.h2>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl text-xl text-[#1e1e1e]/80 leading-relaxed"
        >
          <p className="mb-8">
            We believe that design is more than decoration —  
            it is a form of communication rooted in emotion, intention,
            and clarity.
          </p>

          <p className="mb-8">
            At <span className="font-semibold text-[#9a1b40]">INKCHO</span>, every project begins with ink: raw ideas, sketches,
            wild concepts, unfiltered expression. And ends with an echo:
            memorable identities, visuals that linger, stories that unfold
            long after the screen fades.
          </p>

          <p className="font-medium text-[#1e4389]">
            In a world full of noise, we design what is remembered.
          </p>
        </motion.div>
      </section>

      {/* ------------------ SECTION 4: VISUAL SPLIT ------------------ */}
      <section className="py-32 px-6 md:px-12 lg:px-32 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-20"
        >
          <img 
            src="/ink.png"
            className="rounded-2xl shadow-lg"
          />

          <div className="flex flex-col justify-center">
            <h3 className="text-3xl md:text-5xl font-serif mb-6 text-[#1e4389]">
              A Studio Rooted in Artistry
            </h3>
            <p className="text-lg text-[#1e1e1e]/80 leading-relaxed">
              Our work blends traditional craftsmanship with modern digital 
              precision. From illustrations and posters to 3D concepts and 
              brand identities — everything we create has a soul.
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
            If ink is creation and echo is memory —  
            let’s craft your story in a way the world never forgets.
          </p>

          <button className="btn-primary">
            {/* Subtle circular fill */}
            <span className="btn-fill-animation" />

            {/* Label */}
            <span className="relative z-10">
              Start a Project
            </span>
          </button>
        </motion.div>
      </section>

    </div>
  );
}