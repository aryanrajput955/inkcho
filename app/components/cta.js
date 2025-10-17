import React from 'react';
import LightRays from './lightrays';
import Link from 'next/link';
const LightRaysContainer = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh', // Full viewport height for better mobile experience
        position: 'relative',
        overflow: 'hidden',
      }}
      className="flex items-center justify-center"
    >
      {/* Light Rays Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#fffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays bg-[#111111]"
      />

      {/* CTA Section Overlay */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          zIndex: 10,
        }}
        className="" // Responsive padding
      >
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 drop-shadow-lg">
          Crafting Visual Stories That Speak Louder Than Words
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-6 opacity-90">
          Transform your ideas into reality with innovative solutions.
        </p>
        <div className="flex justify-center">
            <Link href="/contact">
            
          <button
            className="relative px-4 py-2 sm:px-6 sm:py-3 text-[#ffff] text-base sm:text-lg font-semibold border-2 border-[#ffff] rounded-full bg-transparent transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden hover:text-[#111] hover:scale-105 hover:shadow-[0_0_25px_rgba(193,163,98,0.5)] active:scale-100 group"
          >
            <span
              className="absolute inset-0 m-auto w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-gray-300 scale-0 z-[-1] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[4] group-hover:opacity-80"
            ></span>
            Contact Us
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default LightRaysContainer;