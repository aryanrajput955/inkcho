'use client';
import Link from 'next/link';
import React from 'react';

const EnhancedContentSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white text-gray-800 flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      <div className="text-center relative z-10 px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Inkcho — Where Creativity Leaves an Echo
        </h2>

        {/* Short Description */}
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          We blend art and impact — creating illustrations, logos, and 3D designs that resonate.
        </p>

        {/* CTA Button */}
        <Link href="/contact">
          <button
            className="relative px-6 py-3 text-black text-lg font-semibold border-2 border-black rounded-full bg-transparent transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden hover:text-gray-100 hover:scale-105 hover:shadow-[0_0_25px_rgba(193,163,98,0.5)] active:scale-100 group"
          >
            <span className="absolute inset-0 m-auto w-[50px] h-[50px] rounded-full bg-black scale-0 z-[-1] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[4] group-hover:opacity-80"></span>
            Our Journey
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EnhancedContentSection;
