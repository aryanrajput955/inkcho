'use client';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CardsSection() {
  return (
    <section className="bg-[#f7f4ec] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* === Heading Section === */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e4389] leading-tight tracking-tight">
            Pick Your <br />
            <span className="text-[#9a1b40] font-light">Creative Direction</span>
          </h2>
        </div>

        {/* === Cards Grid === */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* === CARD 1 === */}
          <Link 
            href="/services/brand-foundation" 
            className="relative rounded-3xl overflow-hidden group border border-gray-300 bg-[#f7f4ec] transition-all duration-700 cursor-pointer block"
          >
            <img
              src="/s5.webp"
              alt="Brand Foundations"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-700"></div>

            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block border border-gray-500 group-hover:border-white text-gray-700 group-hover:text-white text-xs font-medium px-3 py-1 rounded-full mb-6 transition-colors duration-700">
                  Fixed Scope
                </span>

                <h2 className="text-5xl md:text-6xl font-light mb-6 text-[#9a1b40] group-hover:text-white transition-all duration-700 group-hover:[text-shadow:0_0_1px_currentColor]">
                  Brand<br/> Foundations
                </h2>
              </div>

              <div className="mt-10">
                <button className="relative flex items-center justify-center bg-white text-black rounded-full border border-[#9a1b40] transition-all duration-500 ease-out w-14 h-14 group-hover:w-44 group-hover:bg-[#1e4389] group-hover:text-white group-hover:border-white overflow-hidden">
                  <ArrowRight className="w-5 h-5 absolute left-1/2 -translate-x-1/2 text-black group-hover:text-white transition-all duration-500 group-hover:left-6 group-hover:rotate-[-45deg]" />
                  <span className="opacity-0 group-hover:opacity-100 text-sm font-medium ml-10 transition-all duration-500 whitespace-nowrap text-black group-hover:text-white">
                    Work With Us
                  </span>
                </button>
              </div>
            </div>
          </Link>

          {/* === CARD 2 === */}
          <Link 
            href="/services/visual-identity" 
            className="relative rounded-3xl overflow-hidden group border border-gray-300 bg-[#f7f4ec] transition-all duration-700 cursor-pointer block"
          >
            <img
              src="/s2.jpg"
              alt="Visual Identity"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-700"></div>

            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block border border-gray-500 group-hover:border-white text-gray-700 group-hover:text-white text-xs font-medium px-3 py-1 rounded-full mb-6 transition-colors duration-700">
                  Flexible Subscription
                </span>

                <h2 className="text-5xl md:text-6xl font-light mb-6 text-[#9a1b40] group-hover:text-white transition-all duration-700 group-hover:[text-shadow:0_0_1px_currentColor]">
                  Visual<br/> Identity
                </h2>
              </div>

              <div className="mt-10">
                <button className="relative flex items-center justify-center bg-white text-black rounded-full border border-[#9a1b40] transition-all duration-500 ease-out w-14 h-14 group-hover:w-44 group-hover:bg-[#1e4389] group-hover:text-white group-hover:border-white overflow-hidden">
                  <ArrowRight className="w-5 h-5 absolute left-1/2 -translate-x-1/2 text-black group-hover:text-white transition-all duration-500 group-hover:left-6 group-hover:rotate-[-45deg]" />
                  <span className="opacity-0 group-hover:opacity-100 text-sm font-medium ml-10 transition-all duration-500 whitespace-nowrap text-black group-hover:text-white">
                    Work With Us
                  </span>
                </button>
              </div>
            </div>
          </Link>

          {/* === CARD 3 === */}
          <Link 
            href="/services/digital-experiences" 
            className="relative rounded-3xl overflow-hidden group border border-gray-300 bg-[#f7f4ec] transition-all duration-700 cursor-pointer block"
          >
            <img
              src="/s2.jpg"
              alt="Digital Experiences"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-700"></div>

            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block border border-gray-500 group-hover:border-white text-gray-700 group-hover:text-white text-xs font-medium px-3 py-1 rounded-full mb-6 transition-colors duration-700">
                  Strategic Development
                </span>

                <h2 className="text-5xl md:text-6xl font-light mb-6 text-[#9a1b40] group-hover:text-white transition-all duration-700 group-hover:[text-shadow:0_0_1px_currentColor]">
                  Digital<br/>Experiences
                </h2>
              </div>

              <div className="mt-10">
                <button className="relative flex items-center justify-center bg-white text-black rounded-full border border-[#9a1b40] transition-all duration-500 ease-out w-14 h-14 group-hover:w-44 group-hover:bg-[#1e4389] group-hover:text-white group-hover:border-white overflow-hidden">
                  <ArrowRight className="w-5 h-5 absolute left-1/2 -translate-x-1/2 text-black group-hover:text-white transition-all duration-500 group-hover:left-6 group-hover:rotate-[-45deg]" />
                  <span className="opacity-0 group-hover:opacity-100 text-sm font-medium ml-10 transition-all duration-500 whitespace-nowrap text-black group-hover:text-white">
                    Work With Us
                  </span>
                </button>
              </div>
            </div>
          </Link>

          {/* === CARD 4 === */}
          <Link 
            href="/creative-technology" 
            className="relative rounded-3xl overflow-hidden group border border-gray-300 bg-[#f7f4ec] transition-all duration-700 cursor-pointer block"
          >
            <img
              src="/s1.jpg"
              alt="Creative Technology"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-700"></div>

            <div className="relative z-10 p-10 flex flex-col justify-between h-full">
              <div>
                <span className="inline-block border border-gray-500 group-hover:border-white text-gray-700 group-hover:text-white text-xs font-medium px-3 py-1 rounded-full mb-6 transition-colors duration-700">
                  Campaign-Driven
                </span>

                <h2 className="text-5xl md:text-6xl font-light mb-6 text-[#9a1b40] group-hover:text-white transition-all duration-700 group-hover:[text-shadow:0_0_1px_currentColor]">
                  Creative<br/> Technology
                </h2>
              </div>

              <div className="mt-10">
                <button className="relative flex items-center justify-center bg-white text-black rounded-full border border-[#9a1b40] transition-all duration-500 ease-out w-14 h-14 group-hover:w-44 group-hover:bg-[#1e4389] group-hover:text-white group-hover:border-white overflow-hidden">
                  <ArrowRight className="w-5 h-5 absolute left-1/2 -translate-x-1/2 text-black group-hover:text-white transition-all duration-500 group-hover:left-6 group-hover:rotate-[-45deg]" />
                  <span className="opacity-0 group-hover:opacity-100 text-sm font-medium ml-10 transition-all duration-500 whitespace-nowrap text-black group-hover:text-white">
                    Work With Us
                  </span>
                </button>
              </div>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}