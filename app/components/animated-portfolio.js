import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const portfolioItems = [
  { id: 1, type: 'image', src: '/s3.webp', title: 'Brand Identity', category: 'Branding' },
  { id: 2, type: 'image', src: '/perfume.jpg', title: 'Web Design', category: 'Digital' },
  { id: 3, type: 'image', src: '/s4.webp', title: 'Marketing Campaign', category: 'Strategy' },
  { id: 4, type: 'video', src: '/casio/casio.mp4', title: 'Motion Graphics', category: 'Video' }
]

export default function ScrollHijackGallery() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(cardsRef.current, {
        xPercent: 350,
        y: 0,
        scale: 0.75,
        rotate: 8,
        opacity: 0
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => window.innerWidth > 1600 ? '+=200%' : '+=500%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      cardsRef.current.forEach((card, index) => {
        const t = index * 0.6

        tl.to(card, {
          xPercent: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 2.6,
          ease: 'none',
          keyframes: [
            { y: -160, duration: 0.4 },
            { y: 0,    duration: 0.45 },
            { y: -90,  duration: 0.3 },
            { y: 0,    duration: 0.35 },
            { y: -40,  duration: 0.25 },
            { y: 0,    duration: 0.3 }
          ]
        }, t)
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

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

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-[#f7f4ec] overflow-hidden"
    >
      <div className="h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6">

          {/* Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={fadeInUp}
            className="text-center mb-10 md:mb-16"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold uppercase text-[#1e4389]">
                A glimpse into
              </h2>
              <video
                src="/vid3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 sm:mx-3 rounded-2xl"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold uppercase text-[#1e4389] flex items-center justify-center gap-3">
              our 
              <img 
                src="/creations.png" 
                alt="creations" 
                className="h-24 sm:h-32 md:h-20 -ml-3 -mt-4 object-contain inline-block transform translate-y-2" 
              />
            </h2>

          
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {portfolioItems.map((item, i) => (
              <div
                key={item.id}
                ref={el => (cardsRef.current[i] = el)}
                className="relative rounded-2xl overflow-hidden bg-white shadow-2xl border border-gray-200 will-change-transform"
              >
                <div className="relative w-full h-64 sm:h-80 rounded-2xl lg:h-96 overflow-hidden">
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
                      loading="lazy"
                      className="w-full h-full  object-cover"
                    />
                  )}

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-4 sm:p-6 text-white">
                      <p className="text-xs sm:text-sm text-[#c44b64] font-semibold mb-1">
                        {item.category}
                      </p>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-out" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="text-center mt-10 text-sm text-gray-600">
            Scroll to see the motion
          </div>

        </div>
      </div>
    </section>
  )
}