import React, { useRef, useEffect, useState } from 'react';

const ScrollHijackGallery = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // 4 portfolio items
  const portfolioItems = [
    {
      id: 1,
      type: 'image',
      src: '/s3.webp',
      title: 'Brand Identity',
      category: 'Branding'
    },
    {
      id: 2,
      type: 'image',
      src: '/perfume.jpg',
      title: 'Web Design',
      category: 'Digital'
    },
    {
      id: 3,
      type: 'image',
      src: '/s4.webp',
      title: 'Marketing Campaign',
      category: 'Strategy'
    },
    {
      id: 4,
      type: 'video',
      src: '/casio/casio.mp4',
      title: 'Motion Graphics',
      category: 'Video'
    }
  ];

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress through the section
      const scrollStart = rect.top - windowHeight;
      const scrollEnd = rect.bottom;
      const scrollRange = scrollEnd - scrollStart;
      const currentScroll = -scrollStart;
      
      let progress = currentScroll / scrollRange;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Calculate position for each image - coming from complete right side
  const getImageTransform = (index) => {
    // Stagger the start of each animation - start later so all images begin off-screen
    const startPoint = 0.05 + (index * 0.12);
    const animationDuration = 0.5;
    
    // Calculate individual progress for this image
    let imageProgress = (scrollProgress - startPoint) / animationDuration;
    imageProgress = Math.max(0, Math.min(1, imageProgress));

    // Easing for smooth horizontal movement
    const easeInOutQuart = (t) => {
      return t < 0.5 
        ? 8 * t * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };
    const easedProgress = easeInOutQuart(imageProgress);

    // Horizontal movement from right (complete right side of screen) to final position
    // On desktop: 300% off screen, on mobile: 150% off screen
    const startX = isMobile ? 150 : 400;
    const translateX = startX - (easedProgress * startX);

    // Bouncing vertical movement - decreasing bounces for each card
    // Bounces happen throughout the entire journey from right to left
    const getBounceY = (t) => {
      if (t === 0) return 0;
      if (t >= 1) return 0;
      
      // Each card has fewer bounces: card 0 = 3 bounces, card 1 = 2 bounces, card 2 = 1 bounce, card 3 = 0.5 bounce
      const bounceCount = Math.max(0.5, 3 - index);
      const bounceProgress = t * bounceCount;
      const currentBounce = Math.floor(bounceProgress);
      const bouncePhase = bounceProgress - currentBounce;
      
      // Much higher amplitude for more visible bounces
      const baseAmplitude = 180 - (index * 25); // First card bounces much higher (180px)
      // Slower decay so bounces stay visible longer
      const amplitude = baseAmplitude * Math.pow(0.65, currentBounce);
      
      // More pronounced parabolic motion for each bounce
      const bounceHeight = amplitude * Math.sin(bouncePhase * Math.PI);
      
      return -bounceHeight; // Negative because we want to bounce up
    };

    // The bounce happens throughout the entire horizontal movement
    // So it starts bouncing from the complete right side
    const translateY = getBounceY(imageProgress);

    // Rotation effect - smoother rotates while moving, settles when fixed
    const getRotation = (t) => {
      if (t >= 1) return 0;
      
      // Gentler rotation during movement
      const rotationSpeed = 2.5; // Reduced from 4 for smoother motion
      const oscillation = Math.sin(t * Math.PI * rotationSpeed) * 8; // Reduced from 15
      
      // Gradually reduce rotation as it settles
      return oscillation * (1 - t * 0.7);
    };

    const rotate = getRotation(imageProgress);

    // Opacity fade in
    const opacity = Math.min(1, imageProgress * 2);

    // Scale effect - starts smaller, grows to full size
    const scale = 0.6 + (easedProgress * 0.4);

    return {
      transform: `translateX(${translateX}%) translateY(${translateY}px) rotate(${rotate}deg) scale(${scale})`,
      opacity: opacity,
      transition: imageProgress >= 1 ? 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
      willChange: imageProgress < 1 ? 'transform, opacity' : 'auto'
    };
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[900vh] bg-white"
      style={{ willChange: 'scroll-position' }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="container h-screen mx-auto px-6">
          {/* Header */}
          <div className="text-center mt-2 mb-8 md:mb-16">
            <div className="mb-4 md:mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center mb-3">
                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase font-extrabold text-gray-900 flex items-center">
                  A glimpse into
                  {/* Small video perfectly aligned with text */}
                  <video
                    src="/vid3.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="inline-block w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-3 rounded-xl align-middle object-contain"
                  />
                </h2>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase mb-2 md:mb-4">
                our <span className="text-orange-600 italic font-serif">creations</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Scroll down to see our work fly in
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-card relative group"
                style={getImageTransform(index)}
              >
                <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden bg-white shadow-xl border border-white/50">
                  {/* Media Container */}
                  <div className="relative w-full h-full overflow-hidden">
                    {item.type === 'video' ? (
                      <video
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        muted
                        loop
                        playsInline
                        autoPlay
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    )}
                    
                    {/* Overlay with info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                        <p className="text-xs sm:text-sm font-semibold mb-1 text-orange-400">{item.category}</p>
                        <h3 className="text-lg sm:text-xl font-bold">{item.title}</h3>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out"></div>
                    </div>
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200/50 via-purple-200/50 to-pink-200/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-8 md:mt-12">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <span className="hidden sm:inline">Scroll to watch them bounce in</span>
              <span className="sm:hidden">Scroll down</span>
              <svg 
                className="w-4 h-4 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default ScrollHijackGallery;