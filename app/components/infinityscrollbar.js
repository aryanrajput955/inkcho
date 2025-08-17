import React, { useRef, useEffect, useState } from 'react';

const InfiniteScrollSection = () => {
  const scrollerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);

  // Sample portfolio items
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
        src: 's4.webp',
        title: 'Marketing Campaign',
      category: 'Strategy'
    },
        {
      id: 4,
      type: 'video',
      src: '/casio/casio.mp4',
      title: 'Motion Graphics',
      category: 'Video'
    },
        {
      id: 8,
      type: 'video',
      src: '/perfume.mp4',
      title: 'Motion Graphics',
      category: 'Video'
    },
    {
        id: 5,
        type: 'image',
        src: '/casio/watch.png',
        title: 'Corporate Identity',
        category: 'Branding'
    },
    {
        id: 6,
        type: 'image',
        src: '/s5.webp',
        title: 'App Interface',
        category: 'Mobile'
    },
    {
        id: 7,
        type: 'image',
        src: '/s6.webp',
        title: 'Visual Campaign',
        category: 'Creative'
    },

];

// Duplicate items for seamless loop
const duplicatedItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];

useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const itemWidth = 320; // 300px width + 20px gap
    const totalWidth = portfolioItems.length * itemWidth;

    // Create infinite scroll animation
    const animate = () => {
      animationRef.current = requestAnimationFrame(() => {
        const currentX = parseFloat(scroller.style.transform.replace('translateX(', '').replace('px)', '') || '0');
        const newX = currentX - (isHovered ? 0.3 : 1.2);
        
        if (newX <= -totalWidth) {
          scroller.style.transform = `translateX(0px)`;
        } else {
          scroller.style.transform = `translateX(${newX}px)`;
        }
        
        animate();
      });
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [portfolioItems.length, isHovered]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <div className="flex items-center justify-center mb-3">
              <h2 className="text-4xl md:text-7xl uppercase font-extrabold text-gray-900">
                A glimpse into
              </h2>
              <img 
                src="/draw.png" 
                alt="Creative" 
                className="w-12 h-12 mx-4"
              />
            </div>
            <h2 className="text-4xl md:text-7xl font-extrabold uppercase mb-4">
              our <span className="text-[#EB5B00] italic font-serif">creations</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries and disciplines
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div 
          className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50 rounded-2xl shadow-lg border border-gray-100 backdrop-blur-sm"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100/40 to-purple-100/40 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-orange-100/40 to-pink-100/40 rounded-full blur-lg"></div>
          
          <div 
            ref={scrollerRef}
            className="flex gap-6 py-10 px-8 relative z-10"
            style={{ 
              willChange: 'transform',
              width: `${duplicatedItems.length * 320}px`,
              transform: 'translateX(0px)'
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div 
                key={`${item.id}-${index}`}
                className="portfolio-card relative group w-[300px] h-96 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex-shrink-0"
              >
                {/* Media Container - Full Height */}
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  {item.type === 'video' ? (
                    <video
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  )}
                  
                  {/* Enhanced Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-out"></div>
                  </div>
                </div>
                
                {/* Subtle card glow on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-200/50 via-purple-200/50 to-pink-200/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              </div>
            ))}
          </div>

          {/* Enhanced Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-20"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent pointer-events-none z-20"></div>
        </div>

        {/* Simple Instruction */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Hover over the gallery to slow down and explore each project
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfiniteScrollSection;