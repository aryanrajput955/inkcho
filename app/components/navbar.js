'use client';
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { Instagram, Twitter } from 'lucide-react';

export default function AnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  const menuItems = [
    { title: 'About', number: '01', link: '/about' },
    { 
      title: 'Services', number: '02', link: '/services',
      subGroups: [
        {
          label: "Brand",
          items: [
            { name: 'Brand Foundation', link: '/services/brand-foundation' },
          ]
        },
        {
          label: "Visual Identity",
          items: [
            { name: 'Logo & Identity Systems', link: '/services/visual-identity/logo-identity-systems' },
            { name: 'Typography & Colour', link: '/services/visual-identity/typography-color-brand-assets' },
            { name: 'Visual Motion & Art Direction', link: '/services/visual-identity/visual-motion-art-direction' },
          ]
        },
        {
          label: "Digital Experiences",
          items: [
            { name: 'UX & Interface Design', link: '/services/digital-experiences/ux-interface-design' },
            { name: 'Custom Web Dev', link: '/services/digital-experiences/custom-web-development' },
            { name: 'Animation & Performance', link: '/services/digital-experiences/animation-cms-performance' },
          ]
        }
      ]
    },
    { title: 'Contact', number: '03', link: '/contact' }
  ];

  const [expandedService, setExpandedService] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedService(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setExpandedService(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* CUSTOM CURSOR */}
      <div
        ref={cursorRef}
        className={`hidden md:block fixed w-4 h-4 bg-black rounded-full pointer-events-none z-[100] transition-transform duration-200 ${isOpen ? 'scale-150' : 'scale-100'}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* CLOSED TOP NAV */}
      {!isOpen && (
        <nav className="fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
            <Link href="/">
              <img src="/logo.png" alt="INKCHO" className="h-6 md:h-9 w-auto" />
            </Link>

            <button className="btn-primary !bg-transparent border !border-[#9a1b40] !text-[#9a1b40] hover:!text-white hover:shadow-xl hover:shadow-[#9a1b40]/20 !px-8 !py-3 !text-sm" onClick={toggleMenu}>
              <span className="btn-fill-animation !bg-[#9a1b40]" />
              <span className="relative z-10 font-medium tracking-wide">
                MENU
              </span>
            </button>
          </div>
        </nav>
      )}

      {/* MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-1000 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ backgroundColor: "#FFFBF5" }}
      >
        {/* HEADER */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-between px-12 py-8">
            <button
              onClick={toggleMenu}
              className="text-sm font-bold tracking-[0.2em] text-[#9a1b40] hover:scale-110 transition-transform"
            >
              CLOSE
            </button>

            <div className="flex items-center gap-8">
              <a href="https://instagram.com" className="text-[#9a1b40] hover:scale-110 transition-transform">
                <Instagram className="w-5 h-5" strokeWidth={1} />
              </a>
              <a href="https://twitter.com" className="text-[#9a1b40] hover:scale-110 transition-transform">
                <Twitter className="w-5 h-5" strokeWidth={1} />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN MENU */}
        <div className="min-h-screen flex overflow-y-auto pt-24">

          {/* LEFT PANEL */}
          <div className="w-full lg:w-3/5 flex items-start justify-center px-12 lg:px-20 py-20">
            <div className="w-full max-w-2xl">

              {menuItems.map((item, index) => (
                <div key={item.number}>
                  <div
                    className={`group border-b border-[#9a1b40]/10 transition-all duration-700 ${
                      isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >

                    <div className="py-6 md:py-10 cursor-pointer flex items-center justify-between">

                      {/* NUMBER + TITLE */}
                      <div className="flex items-baseline gap-8">
                        <span className="text-[#9a1b40]/40 text-sm font-medium">
                          {item.number}
                        </span>

                        {/* NOT SERVICES → LINK */}
                        {item.title !== "Services" ? (
                          <Link
                            href={item.link}
                            onClick={closeMenu}
                            className="text-4xl md:text-6xl lg:text-7xl font-serif text-black tracking-tight group-hover:text-[#9a1b40] group-hover:pl-4 transition-all duration-500"
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <span
                            onClick={() => setExpandedService(!expandedService)}
                            className={`text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight cursor-pointer transition-all duration-500 ${expandedService ? 'text-[#9a1b40] pl-4' : 'text-black group-hover:text-[#9a1b40] group-hover:pl-4'}`}
                          >
                            {item.title}
                          </span>
                        )}
                      </div>

                      <div className={`text-[#9a1b40]/30 text-2xl transition-all duration-500 ${expandedService && item.title === "Services" ? 'rotate-90 text-[#9a1b40]' : 'group-hover:text-[#9a1b40] group-hover:translate-x-2'}`}>
                        →
                      </div>
                    </div>

                    {/* SUBMENU GRID */}
                    {item.subGroups && (
                      <div
                        className={`overflow-hidden transition-all duration-700 ease-in-out ${
                          expandedService ? "max-h-[800px] opacity-100 mb-12" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-16 md:pl-24 grid md:grid-cols-2 gap-8 py-4">
                          {item.subGroups.map((group, gIdx) => (
                            <div key={gIdx} className="space-y-4">
                               <p className="text-[#9a1b40] text-[10px] tracking-[0.3em] font-bold uppercase">{group.label}</p>
                               <div className="space-y-3">
                                  {group.items.map((sub, i) => (
                                    <Link
                                      key={i}
                                      href={sub.link}
                                      onClick={closeMenu}
                                      className="block text-sm md:text-lg font-light text-gray-400 hover:text-[#9a1b40] transition-colors"
                                    >
                                      {sub.name}
                                    </Link>
                                  ))}
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              ))}

              {/* FOOTER TEXT */}
              <div className={`mt-16 text-[#9a1b40]/40 text-xs tracking-widest font-bold ${isOpen ? "opacity-100" : "opacity-0"} transition-all duration-1000 delay-500`}>
                <p>INKCHO STUDIO</p>
                <p className="mt-2">STORIES THAT MOVE • EXPERIENCES THAT CONNECT</p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL PREVIEW */}
          <div className="hidden lg:flex w-2/5 fixed right-0 top-0 h-screen items-center justify-center p-20 pointer-events-none">
            <div
              className={`relative w-full aspect-[3/4] transition-all duration-1000 ${
                isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[3rem] border border-[#9a1b40]/5">
                {menuItems.map((item, index) => (
                  <div
                    key={item.number}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <div className="w-full h-full bg-[#9a1b40]/5 flex items-center justify-center">
                      <div className="text-[#9a1b40]/10 text-[20vw] font-serif italic">
                        {item.number}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-12 left-12">
                <div className="text-[#9a1b40] text-xs font-bold tracking-[0.5em] mb-4">
                  {menuItems[activeIndex].number}
                </div>
                <h3 className="text-6xl font-serif italic text-black leading-none uppercase">
                  {menuItems[activeIndex].title}
                </h3>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
