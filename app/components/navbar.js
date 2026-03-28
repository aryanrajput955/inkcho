'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ChevronDown, ArrowUpRight, Plus, Minus } from 'lucide-react';

const servicesData = [
  {
    label: "Brand Foundation",
    link: "/services/brand-foundation",
    items: [
      { name: 'Philosophy & Strategy', link: '/services/brand-foundation' },
    ]
  },
  {
    label: "Visual Identity",
    link: "/services/visual-identity",
    items: [
      { name: 'Logo & Identity Systems', link: '/services/visual-identity/logo-identity-systems' },
      { name: 'Typography & Colour', link: '/services/visual-identity/typography-color-brand-assets' },
      { name: 'Visual Motion', link: '/services/visual-identity/visual-motion-art-direction' },
    ]
  },
  {
    label: "Digital Experiences",
    link: "/services/digital-experiences",
    items: [
      { name: 'UX & Interface', link: '/services/digital-experiences/ux-interface-design' },
      { name: 'Custom Dev', link: '/services/digital-experiences/custom-web-development' },
      { name: 'Performance', link: '/services/digital-experiences/animation-cms-performance' },
    ]
  }
];

export default function PremiumPillNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredService, setHoveredService] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  
  const { scrollY } = useScroll();

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY ? "down" : "up";
    if (latest < 50) {
      setIsVisible(true);
    } else if (direction === "down" && latest > 150) {
      if (!isMenuOpen) setIsVisible(false); // Only hide if menu isn't open
      setHoveredService(false);
    } else if (direction === "up") {
      setIsVisible(true);
    }
    setLastScrollY(latest);
  });

  if (!isMounted) return null;

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.nav
          initial={{ y: -100, x: '-50%', opacity: 0 }}
          animate={{ y: 0, x: '-50%', opacity: 1 }}
          exit={{ y: -100, x: '-50%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-8 left-1/2 z-[100] w-[92vw] max-w-5xl"
        >
          <motion.div 
            layout
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full bg-[#9a1b40]/95 backdrop-blur-3xl px-6 sm:px-10 md:px-14 py-4 flex flex-col border border-white/10 relative shadow-2xl shadow-black/20 ${isMobile && isMenuOpen ? 'overflow-hidden' : ''}`}
            style={{ borderRadius: isMenuOpen ? '2.5rem' : '100px' }}
          >
            {/* TOP BAR */}
            <div className="flex items-center justify-between w-full relative z-[130]">
              {/* LOGO */}
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="shrink-0 transition-transform hover:scale-105 duration-500">
                <img 
                  src="/logo.png" 
                  alt="INKCHO" 
                  className="h-7 sm:h-9 md:h-10 w-auto brightness-0 invert" 
                />
              </Link>

              {/* DESKTOP NAV LINKS */}
              <div className="hidden lg:flex items-center gap-10 md:gap-12">
                {['Home', 'About'].map((item) => (
                  <Link 
                    key={item}
                    href={item === 'Home' ? '/' : '/about'}
                    className="group relative text-[#FFFBF5]/70 hover:text-white text-[11px] font-bold tracking-[0.25em] transition-all duration-300 uppercase"
                  >
                    {item}
                    <motion.span 
                      className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-white transition-all duration-500 group-hover:w-full" 
                    />
                  </Link>
                ))}
                
                {/* SERVICES DROPDOWN (DESKTOP) */}
                <div 
                  className="relative group/parent"
                  onMouseEnter={() => setHoveredService(true)}
                  onMouseLeave={() => setHoveredService(false)}
                >
                  <div className="flex items-center gap-1.5 cursor-pointer py-2 group-hover/parent:text-white text-[#FFFBF5]/70 transition-colors duration-300">
                    <span className="text-[11px] font-bold tracking-[0.25em] uppercase">
                      Services
                    </span>
                    <ChevronDown size={14} className={`transition-transform duration-500 ${hoveredService ? 'rotate-180' : ''}`} />
                  </div>

                  <AnimatePresence>
                    {hoveredService && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full pt-6 left-1/2 -translate-x-1/2 w-[720px] z-[140]"
                      >
                        <div className="bg-[#9a1b40]/98 border border-white/10 rounded-[2.5rem] p-8 sm:p-12 backdrop-blur-3xl grid grid-cols-3 gap-12">
                          {servicesData.map((group, idx) => (
                            <div key={idx} className="space-y-6">
                              <Link 
                                href={group.link}
                                className="group/cat flex items-center justify-between text-[11px] font-black tracking-[0.4em] text-white/40 uppercase hover:text-white transition-all duration-300 pb-3 border-b border-white/5"
                              >
                                {group.label}
                                <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 group-hover/cat:opacity-100 group-hover/cat:translate-y-0 group-hover/cat:translate-x-0 transition-all" />
                              </Link>
                              <div className="flex flex-col gap-3.5">
                                {group.items.map((sub, sIdx) => (
                                  <Link 
                                    key={sIdx} 
                                    href={sub.link}
                                    className="text-[#FFFBF5]/60 hover:text-white text-[12px] font-medium transition-all hover:translate-x-2 duration-300 block"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* DESKTOP ACTION BUTTON */}
              <div className="hidden lg:flex shrink-0 items-center">
                <Link 
                  href="/contact" 
                  className="px-6 sm:px-8 py-3 rounded-full border border-white/20 text-[#FFFBF5] text-[10px] font-black tracking-[0.3em] hover:bg-white hover:text-[#9a1b40] transition-all duration-500 uppercase flex items-center gap-2.5"
                >
                  Contact Us
                  <ArrowUpRight size={14} />
                </Link>
              </div>

              {/* MOBILE HAMBURGER BUTTON */}
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative outline-none"
                aria-label="Toggle Menu"
              >
                <div className="w-6 flex flex-col gap-1.5">
                  <motion.span
                    animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                    className="w-full h-[1.5px] bg-white rounded-full block"
                  />
                  <motion.span
                    animate={{ opacity: isMenuOpen ? 0 : 1, x: isMenuOpen ? -5 : 0 }}
                    className="w-full h-[1.5px] bg-white rounded-full block"
                  />
                  <motion.span
                    animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                    className="w-full h-[1.5px] bg-white rounded-full block"
                  />
                </div>
              </button>
            </div>

            {/* MOBILE MENU CONTENT */}
            <AnimatePresence>
              {isMobile && isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex flex-col pt-8 pb-4"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-5">
                      {['Home', 'About'].map((item) => (
                        <Link 
                          key={item}
                          href={item === 'Home' ? '/' : '/about'} 
                          onClick={() => setIsMenuOpen(false)}
                          className="text-[#FFFBF5] text-[16px] font-bold tracking-[0.2em] uppercase transition-colors flex items-center justify-between group"
                        >
                          {item}
                          <ArrowUpRight size={16} className="text-white/20 group-hover:text-white transition-colors" />
                        </Link>
                      ))}
                    </div>
                    
                    {/* MOBILE SERVICES ACCORDION */}
                    <div className="flex flex-col gap-2 pt-6 border-t border-white/10">
                      <div className="text-[#FFFBF5]/40 text-[9px] font-black tracking-[0.5em] uppercase mb-4">Services</div>
                      {servicesData.map((group, idx) => (
                        <div key={idx} className="flex flex-col border-b border-white/5 last:border-none">
                          <button 
                            onClick={() => setExpandedAccordion(expandedAccordion === idx ? null : idx)}
                            className="flex items-center justify-between w-full text-white text-[15px] font-semibold py-4"
                          >
                            {group.label}
                            <motion.div
                              animate={{ rotate: expandedAccordion === idx ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={18} className="text-white/40" />
                            </motion.div>
                          </button>
                          
                          <AnimatePresence>
                            {expandedAccordion === idx && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-4 pl-4 pb-6 overflow-hidden"
                              >
                                <Link 
                                  href={group.link} 
                                  onClick={() => setIsMenuOpen(false)}
                                  className="text-white text-[13px] font-bold underline underline-offset-8 decoration-[#FFFBF5]/20"
                                >
                                  View Category
                                </Link>
                                {group.items.map((sub, sIdx) => (
                                  <Link 
                                    key={sIdx} 
                                    href={sub.link} 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white/60 text-[13px] hover:text-white transition-colors"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>

                    <Link 
                      href="/contact" 
                      onClick={() => setIsMenuOpen(false)}
                      className="mt-6 w-full py-5 rounded-full bg-white text-[#9a1b40] text-[11px] font-black tracking-[0.4em] uppercase text-center shadow-xl shadow-black/10 transition-transform active:scale-95"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* LIGHTING EFFECTS */}
            <motion.div 
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" 
            />
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
