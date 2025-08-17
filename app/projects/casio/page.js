'use client';
import React, { useEffect, useRef, useState } from 'react';

const CasioShowcase = () => {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);
  const aboutRef = useRef(null);
  const designProcessRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fallback for SSR
  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-red-100 to-red-200 rounded-full blur-3xl opacity-30"></div>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
            opacity: Math.max(0, 1 - scrollY / 800)
          }}>
          <div className="mb-8">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter leading-none text-gray-900 mb-4">
              CASIO
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-gray-600 uppercase">
              Advertisement Videography
            </p>
          </div>
          
          <div className="relative mt-16">
            <div className="relative group cursor-pointer">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-red-200 rounded-full transform rotate-12 group-hover:rotate-6 transition-transform duration-700"></div>
                <div className="absolute inset-4 bg-white rounded-full shadow-2xl overflow-hidden transform -rotate-6 group-hover:rotate-0 transition-transform duration-700">
                  <img 
                    src="/casio/watch.png" 
                    alt="Casio Watch Featured"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-red-400 rounded-full animate-bounce opacity-40"></div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            style={{ opacity: Math.max(0, 1 - scrollY / 300) }}>
            <div className="flex flex-col items-center">
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-gray-400 to-transparent mb-2"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Video Section */}
      <section ref={galleryRef} className="py-16 sm:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-wider mb-6 sm:mb-8 text-gray-800">
              Final Video
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The cinematic showcase of Casio's precision and craftsmanship
            </p>
          </div>
          
          <div className="mb-16 sm:mb-32">
            <div className="relative aspect-video max-w-5xl mx-auto rounded-xl sm:rounded-3xl overflow-hidden shadow-lg group cursor-pointer bg-gray-100">
           
              <video 
                className="w-full h-full object-cover"
                controls
                preload="none"
                poster="/casio/watch.png"
                playsInline
              >
                <source src="/casio/casio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            <div className="text-center mt-6">
              <h4 className="text-xl font-medium text-gray-800 mb-2">Casio Advertisement</h4>
              <p className="text-gray-600">Full cinematic showcase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 sm:py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-24">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wider mb-6 sm:mb-8 text-gray-800">
              Product Details
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Close-up exploration of precision engineering and timeless craftsmanship
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center mb-16 sm:mb-32">
            <div className="group cursor-pointer">
              <div className="relative aspect-[4/5] rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl bg-white">
                <img 
                  src="/casio/s1.png" 
                  alt="Casio Watch Face Detail"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-wide mb-3 sm:mb-4 text-gray-800">
                  Precision Dial
                </h4>
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mb-4 sm:mb-6"></div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Every hour marker is meticulously crafted, each hand perfectly balanced. The dial represents decades of horological expertise.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From the subtle texture to the luminous coating, every detail serves both form and function in perfect harmony.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6 pt-2 sm:pt-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-gray-800 mb-1">Swiss</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Movement</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-gray-800 mb-1">Sapphire</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Crystal</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-gray-800 mb-1">50M</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Water Resist</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 lg:order-1">
              <div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-wide mb-3 sm:mb-4 text-gray-800">
                  Premium Band
                </h4>
                <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mb-4 sm:mb-6"></div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  The band represents the perfect marriage of comfort and durability. Each link is individually polished.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Premium materials undergo rigorous testing to ensure they maintain their luster through years of daily wear.
                </p>
              </div>
              
              <div className="flex items-center space-x-4 sm:space-x-6 pt-2 sm:pt-4">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-gray-800 mb-1">316L</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Steel Grade</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-gray-800 mb-1">Brushed</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Finish</div>
                </div>
                <div className="w-px h-8 sm:h-12 bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-light text-gray-800 mb-1">Micro</div>
                  <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Adjust</div>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer lg:order-2">
              <div className="relative aspect-[4/5] rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl bg-white">
                <img 
                  src="/casio/s2.png" 
                  alt="Casio Watch Band Detail"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 sm:py-32 px-6 bg-gray-100 relative overflow-hidden" ref={designProcessRef}>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-24">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wider mb-6 sm:mb-8 text-gray-800">
              Design Process
            </h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A meticulous journey from concept to cinematic excellence
            </p>
          </div>
          
          {/* Cleaned Bento Grid Layout - Only 4 items now */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 h-auto lg:h-[900px]">
            {/* Large Featured Item - Concept Sketch */}
            <div className="lg:col-span-2 lg:row-span-2 group cursor-pointer">
              <div className="relative h-80 md:h-96 lg:h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                <img 
                  src="/casio/p1.webp" 
                  alt="Concept Sketch"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Medium Item - Shot Planning */}
            <div className="group cursor-pointer">
              <div className="relative h-80 lg:h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                <img 
                  src="/casio/p2.webp" 
                  alt="Shot Planning"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Tall Item - Storyboard */}
            <div className="lg:row-span-2 group cursor-pointer">
              <div className="relative h-80 lg:h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                <img 
                  src="/casio/p3.webp" 
                  alt="Storyboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Medium Item - Final Layout */}
            <div className="group cursor-pointer">
              <div className="relative h-80 lg:h-full rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                <img 
                  src="/casio/p4.webp" 
                  alt="Final Layout"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Process Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-gray-200">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-black text-gray-800 mb-2 group-hover:text-orange-400 transition-all duration-300 transform group-hover:scale-110">
                12<span className="text-orange-400">+</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 uppercase tracking-widest font-bold">Iterations</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-black text-gray-800 mb-2 group-hover:text-red-400 transition-all duration-300 transform group-hover:scale-110">
                48<span className="text-red-400">+</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 uppercase tracking-widest font-bold">Hours</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-black text-gray-800 mb-2 group-hover:text-purple-400 transition-all duration-300 transform group-hover:scale-110">
                300<span className="text-purple-400">+</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 uppercase tracking-widest font-bold">Assets</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl sm:text-4xl font-black text-gray-800 mb-2 group-hover:text-green-400 transition-all duration-300 transform group-hover:scale-110">
                4<span className="text-green-400">★</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 uppercase tracking-widest font-bold">Stages</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-16 sm:py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light uppercase tracking-wider mb-6 sm:mb-8 text-gray-800">
                Crafting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 font-medium">
                  Visual Stories
                </span>
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Every frame captures the essence of precision engineering and timeless design. 
                  Through cinematic storytelling, we reveal the soul of each timepiece.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-red-400 mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-gray-800">Cinematic Excellence</h3>
                      <p className="text-sm sm:text-base text-gray-600">4K resolution with professional-grade equipment</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-red-400 mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-gray-800">Artistic Vision</h3>
                      <p className="text-sm sm:text-base text-gray-600">Creative direction focused on brand storytelling</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-red-400 mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium mb-1 sm:mb-2 text-gray-800">Attention to Detail</h3>
                      <p className="text-sm sm:text-base text-gray-600">Macro photography highlighting craftsmanship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl bg-white">
                <img 
                  src="/casio/watch.png" 
                  alt="Behind the scenes"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-24 pt-12 sm:pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-1 sm:mb-2">15<span className="text-orange-500">+</span></div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Hours of Content</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-1 sm:mb-2">200<span className="text-orange-500">+</span></div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Photographs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-800 mb-1 sm:mb-2">4<span className="text-orange-500">K</span></div>
              <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide">Resolution</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CasioShowcase;