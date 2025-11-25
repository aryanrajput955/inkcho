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
      subItems: [
        { name: 'Brand Identity', link: '/services/brand-identity' },
        { name: 'UI/UX Design', link: '/services/design' },
        { name: 'Digital Strategy', link: '/services/strategy' },
      ]
    },
    { title: 'Work', number: '03', link: '/work' },
    { title: 'Contact', number: '04', link: '/contact' }
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
        className={`fixed w-4 h-4 bg-[#e8e2d9] rounded-full pointer-events-none z-[100] transition-transform duration-200 ${isOpen ? 'scale-150' : 'scale-100'}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: "difference"
        }}
      />

      {/* CLOSED TOP NAV */}
      {!isOpen && (
        <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
          <div className="flex items-center justify-between px-12 py-8">
            <Link href="/">
              <div className="text-sm font-light tracking-[0.3em] text-white">INKCHO</div>
            </Link>

            <button
              onClick={toggleMenu}
              className="text-sm font-light tracking-[0.2em] text-white hover:opacity-60 transition-opacity"
            >
              MENU
            </button>
          </div>
        </nav>
      )}

      {/* MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-1000 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: "#e2dbd2" }}
      >
        {/* HEADER */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="flex items-center justify-between px-12 py-8">
            <button
              onClick={toggleMenu}
              className="text-sm font-light tracking-[0.2em] text-[#333] hover:text-orange-600 transition-colors"
            >
              CLOSE
            </button>

            <div className="flex items-center gap-8">
              <a href="https://instagram.com" className="text-[#333] hover:text-orange-600">
                <Instagram className="w-5 h-5" strokeWidth={1} />
              </a>
              <a href="https://twitter.com" className="text-[#333] hover:text-orange-600">
                <Twitter className="w-5 h-5" strokeWidth={1} />
              </a>
            </div>
          </div>
        </div>

        {/* MAIN MENU */}
        <div className="min-h-screen flex">

          {/* LEFT PANEL */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-12 lg:px-20">
            <div className="w-full max-w-2xl">

              {menuItems.map((item, index) => (
                <div key={item.number}>
                  <div
                    className={`group border-b border-[#d6d0c8] transition-all duration-700 ${
                      isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >

                    <div className="py-8 cursor-pointer flex items-center justify-between">

                      {/* NUMBER + TITLE */}
                      <div className="flex items-baseline gap-8">
                        <span className="text-[#8d857b] text-sm font-light">
                          {item.number}
                        </span>

                        {/* NOT SERVICES → LINK */}
                        {item.title !== "Services" ? (
                          <Link
                            href={item.link}
                            onClick={closeMenu}
                            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#333] tracking-tight group-hover:text-orange-600 group-hover:translate-x-4 transition-all"
                          >
                            {item.title}
                          </Link>
                        ) : (
                          <span
                            onClick={() => setExpandedService(!expandedService)}
                            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#333] tracking-tight cursor-pointer group-hover:text-orange-600 group-hover:translate-x-4 transition-all"
                          >
                            {item.title}
                          </span>
                        )}
                      </div>

                      <div className="text-[#8d857b] text-2xl group-hover:text-orange-600 transition-all">
                        →
                      </div>
                    </div>

                    {/* SUBMENU */}
                    {item.subItems && (
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          expandedService ? "max-h-64 opacity-100 mb-6" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-20 space-y-3">
                          {item.subItems.map((sub, i) => (
                            <Link
                              key={i}
                              href={sub.link}
                              onClick={closeMenu}
                              className="block text-xl md:text-2xl font-light text-[#777] hover:text-orange-600 hover:translate-x-4 transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              ))}

              {/* FOOTER TEXT */}
              <div className={`mt-16 text-[#8d857b] text-xs tracking-widest font-light ${isOpen ? "opacity-100" : "opacity-0"} transition-all`}>
                <p>INKCHO</p>
                <p className="mt-2">CREATING DIGITAL EXPERIENCES</p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL PREVIEW */}
          <div className="hidden lg:block w-1/2 fixed right-0 top-0 h-screen">
            <div className="relative w-full h-full flex items-center justify-center p-20">
              <div
                className={`relative w-full h-full transition-all duration-1000 ${
                  isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="relative w-full h-full overflow-hidden rounded-3xl">
                  {menuItems.map((item, index) => (
                    <div
                      key={item.number}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="w-full h-full bg-[#d7cfc6] flex items-center justify-center">
                        <div className="text-[#b8afa5] text-9xl font-light">
                          {item.number}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <div className="text-[#8d857b] text-sm tracking-widest mb-2">
                    {menuItems[activeIndex].number}
                  </div>
                  <h3 className="text-5xl font-light text-[#333]">
                    {menuItems[activeIndex].title}
                  </h3>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
