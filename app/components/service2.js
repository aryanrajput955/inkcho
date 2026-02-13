'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 1.0, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function CardsSection() {
  return (
    <section className="bg-[#f7f4ec] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* === Heading Section === */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-[#1e4389] leading-tight tracking-tight">
            Pick Your <br />
            <span className="text-[#9a1b40] font-light">Creative Direction</span>
          </h2>
        </motion.div>

        {/* === Cards Grid === */}
        {/* === Cards Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column Container */}
          <div className="flex flex-col gap-8">
             {/* === CARD 1 === */}
            <motion.div variants={fadeInUp} className="flex-1">
              <Link 
                href="/services/brand-foundation" 
                className="relative h-full min-h-[320px] rounded-3xl overflow-hidden group border border-gray-300 bg-[#f7f4ec] transition-all duration-700 cursor-pointer block"
              >
                <img
                  src="/s5.webp"
                  alt="Brand Foundations"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-700"></div>

                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block border border-white text-white text-xs font-medium px-3 py-1 rounded-full mb-6 transition-colors duration-700">
                      Fixed Scope
                    </span>

                    <h2 className="text-3xl md:text-4xl font-light mb-6 text-white transition-all duration-700">
                      Brand<br/> Foundations
                    </h2>
                  </div>

                  <div className="mt-10">
                    <button className="relative flex items-center justify-center bg-white text-black rounded-full border border-[#9a1b40] transition-all duration-500 ease-out w-12 h-12 group-hover:w-40 group-hover:bg-[#9a1b40] group-hover:text-white group-hover:border-white overflow-hidden">
                      <ArrowRight className="w-5 h-5 absolute left-1/2 -translate-x-1/2 text-black group-hover:text-white transition-all duration-500 group-hover:left-5 group-hover:rotate-[-45deg]" />
                      <span className="opacity-0 group-hover:opacity-100 text-sm font-medium ml-8 transition-all duration-500 whitespace-nowrap text-black group-hover:text-white">
                        Work With Us
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* === CARD 2 === */}
            <motion.div variants={fadeInUp} className="flex-1">
              <Link 
                href="/services/visual-identity" 
                className="relative h-full min-h-[320px] rounded-3xl overflow-hidden group border border-gray-300 bg-[#f7f4ec] transition-all duration-700 cursor-pointer block"
              >
                <img
                  src="/s2.jpg"
                  alt="Visual Identity"
                  className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 transition-all duration-700"></div>

                <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block border border-white text-white text-xs font-medium px-3 py-1 rounded-full mb-6 transition-colors duration-700">
                      Flexible Subscription
                    </span>

                    <h2 className="text-3xl md:text-4xl font-light mb-6 text-white transition-all duration-700">
                      Visual<br/> Identity
                    </h2>
                  </div>

                  <div className="mt-10">
                    <button className="relative flex items-center justify-center bg-white text-black rounded-full border border-[#9a1b40] transition-all duration-500 ease-out w-12 h-12 group-hover:w-40 group-hover:bg-[#9a1b40] group-hover:text-white group-hover:border-white overflow-hidden">
                      <ArrowRight className="w-5 h-5 absolute left-1/2 -translate-x-1/2 text-black group-hover:text-white transition-all duration-500 group-hover:left-5 group-hover:rotate-[-45deg]" />
                      <span className="opacity-0 group-hover:opacity-100 text-sm font-medium ml-8 transition-all duration-500 whitespace-nowrap text-black group-hover:text-white">
                        Work With Us
                      </span>
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Right Column (Single Tall Card) */}
          {/* === CARD 3 === */}
          <motion.div variants={fadeInUp} className="h-full">
            <Link 
              href="/services/digital-experiences" 
              className="relative h-full min-h-[320px] md:min-h-full rounded-3xl overflow-hidden group border border-gray-300 bg-[#f7f4ec] transition-all duration-700 cursor-pointer block"
            >
              <img
                src="/s2.jpg"
                alt="Digital Experiences"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 transition-all duration-700"></div>

              <div className="relative z-10 p-8 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block border border-white text-white text-xs font-medium px-3 py-1 rounded-full mb-6 transition-colors duration-700">
                    Strategic Development
                  </span>

                  <h2 className="text-3xl md:text-4xl font-light mb-6 text-white transition-all duration-700">
                    Digital<br/>Experiences
                  </h2>
                </div>

                <div className="mt-10">
                  <button className="relative flex items-center justify-center bg-white text-black rounded-full border border-[#9a1b40] transition-all duration-500 ease-out w-12 h-12 group-hover:w-40 group-hover:bg-[#9a1b40] group-hover:text-white group-hover:border-white overflow-hidden">
                    <ArrowRight className="w-5 h-5 absolute left-1/2 -translate-x-1/2 text-black group-hover:text-white transition-all duration-500 group-hover:left-5 group-hover:rotate-[-45deg]" />
                    <span className="opacity-0 group-hover:opacity-100 text-sm font-medium ml-8 transition-all duration-500 whitespace-nowrap text-black group-hover:text-white">
                      Work With Us
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}