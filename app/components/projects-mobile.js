import React from 'react';

const portfolioItems = [
  { id: 1, type: 'image', src: '/s3.webp', title: 'Brand Identity', category: 'Branding' },
  { id: 2, type: 'image', src: '/perfume.jpg', title: 'Web Design', category: 'Digital' },
  { id: 3, type: 'image', src: '/s4.webp', title: 'Marketing Campaign', category: 'Strategy' },
  { id: 4, type: 'video', src: '/casio/casio.mp4', title: 'Motion Graphics', category: 'Video' },
];

export default function ScrollGalleryMobile() {
  return (
    <section className="bg-[#f7f4ec] py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold tracking-tight text-[#1e4389]">
            Our <span className="text-[#9a1b40] italic">Creations</span>
          </h2>
          <p className="mt-4 text-black/80 text-base md:text-lg">
            Swipe to explore our work
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="
                snap-center 
                w-[85vw]          /* ~85% of viewport width on mobile */
                sm:w-[70vw]       /* slightly narrower on small tablets */
                md:w-[55vw]       /* further adjusted on medium screens */
                lg:w-[45vw]       /* balanced on larger screens */
                max-w-[480px]     /* prevent cards from becoming too wide */
                rounded-2xl 
                overflow-hidden 
                bg-white 
                shadow-md 
                border border-[#d6d3cd] 
                flex-shrink-0
              "
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {item.type === 'video' ? (
                  <video
                    className="w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                )}

                {/* Overlay with info (hover on desktop) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 md:block hidden">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium text-[#9a1b40] uppercase tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-semibold mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Always-visible label for mobile */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-gradient-to-t from-black/70 to-transparent md:hidden">
                  <p className="text-xs font-medium text-[#9a1b40] uppercase tracking-wide">
                    {item.category}
                  </p>
                  <h3 className="text-base font-semibold mt-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}