'use client';
import React, { useRef } from 'react';

const WhyChooseUs = () => {
  const whyChooseRef = useRef(null);
  const reasonCardsRef = useRef([]);
  const whyTitleRef = useRef(null);

  const reasons = [
    {
      number: "01",
      title: "Strategic Innovation",
      description: "We don't just follow trends—we create them. Our strategic approach ensures your brand stays ahead of the curve with cutting-edge solutions.",
      bgClass: "bg-black/80"
    },
    {
      number: "02",
      title: "Flawless Execution",
      description: "Every pixel, every interaction, every detail is crafted with precision and purpose. Excellence isn't just our goal—it's our standard.",
      bgClass: "bg-gray-900/60"
    },
    {
      number: "03",
      title: "Lasting Partnership",
      description: "We build relationships, not just projects. Your success becomes our mission, creating lasting value that endures beyond launch.",
      bgClass: "bg-black/80"
    }
  ];

  return (
    <div ref={whyChooseRef} className="relative min-h-screen bg-white text-black flex flex-col items-center justify-start py-20">
      {/* Hero Section with Text and Inline Video */}
      <div className="max-w-7xl mx-auto px-8 w-full text-center relative">
        {/* Supporting Text */}
        <p className="text-lg text-[#EB5B00] mb-4">Why partner with INKCHO?</p>

        {/* Title with Inline Video */}
        <div className="flex items-center justify-center flex-wrap">
          <h1 className="text-[4rem] md:text-[6rem] lg:text-[9rem] font-black uppercase tracking-tight leading-none text-black">
            The INKCHO
          </h1>
          <div className="ml-4 mt-7 relative w-[150px] h-[100px] rounded overflow-hidden shadow-md z-10">
            <video
              className="w-full h-full object-cover"
              muted
              playsInline
              loop
              autoPlay
            >
              <source src="/vid2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent pointer-events-none"></div>
          </div>
          <h1 className="text-[5rem] md:text-[9rem] lg:text-[12rem] font-black uppercase tracking-tight leading-none text-black">
            Advantage
          </h1>
        </div>

        {/* Callout Text */}
        <div className="absolute top-10 right-10 bg-cyan-500 text-white text-sm font-medium py-2 px-4 rounded-full">
          Discover the Power of INKCHO
        </div>
      </div>

      {/* Existing Reason Cards Section */}
      <div className="max-w-6xl mx-auto px-8 mt-20">
        {/* Dark Cinematic Title */}
        <div ref={whyTitleRef} className="text-center mb-20">

          <div className="w-20 h-px bg-[#EB5B00] mx-auto"></div>
        </div>

        {/* Dark Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} ref={el => reasonCardsRef.current[index] = el} className="group">
              <div className={`${reason.bgClass} backdrop-blur-sm border border-gray-800/50 p-8 lg:p-10 min-h-80 flex flex-col justify-between transition-all duration-500 hover:border-[#EB5B00]/50 hover:bg-black/90 rounded-sm`}>
                <div>
                  <div className="text-xs font-medium tracking-[0.3em] text-[#EB5B00] mb-6 uppercase">
                    {reason.number}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-light mb-6 leading-tight text-white">
                    {reason.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">
                    {reason.description}
                  </p>
                </div>
                <div className="mt-8">
                  <div className="w-8 h-px bg-[#EB5B00] group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cinematic Side Text */}
        <div className="hidden lg:block absolute left-10 top-[60%] transform -rotate-90 origin-left">
          <p className="text-sm font-medium tracking-wide text-[#EB5B00] whitespace-nowrap opacity-70">
            Excellence in Every Detail
          </p>
        </div>

        <div className="hidden lg:block absolute right-10 top-[60%] transform rotate-90 origin-right">
          <p className="text-sm font-medium tracking-wide text-[#EB5B00] whitespace-nowrap opacity-70">
            Beyond Expectations
          </p>
        </div>
      </div>

      {/* Dark overlay (adjusted for white background) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20 pointer-events-none"></div>
    </div>
  );
};

export default WhyChooseUs;