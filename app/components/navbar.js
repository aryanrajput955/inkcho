'use client'
import { useState, useEffect, useRef } from 'react';
import { Instagram, Twitter } from 'lucide-react';

export default function AnimatedMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);

  const menuItems = [
    { 
      title: 'About', 
      number: '01',
      link: '#about',
      video: 'https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d'
    },
    { 
      title: 'Services', 
      number: '02',
      link: '#services',
      video: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf',
      subItems: [
        { name: 'Web Development', link: '#web' },
        { name: 'UI/UX Design', link: '#design' },
        { name: 'Digital Strategy', link: '#strategy' }
      ]
    },
    { 
      title: 'Work', 
      number: '03',
      link: '#work',
      video: 'https://player.vimeo.com/external/460718428.sd.mp4?s=7cb12c7f0fb52df3845fc0265e1a0ef8b2f1c85f'
    },
    { 
      title: 'Contact', 
      number: '04',
      link: '#contact',
      video: 'https://player.vimeo.com/external/395925944.sd.mp4?s=6d2b5e4f1c8e39b5a68cbfb5de00b09ab8d0f3c3'
    }
  ];

  const [expandedService, setExpandedService] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setExpandedService(false);
  };

  return (
    <>
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className={`fixed w-4 h-4 bg-white rounded-full pointer-events-none z-[100] transition-transform duration-200 mix-blend-difference ${isOpen ? 'scale-150' : 'scale-100'}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Navbar */}
      {!isOpen && (
        <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
          <div className="flex items-center justify-between px-12 py-8">
            <div className="text-sm font-light tracking-[0.3em] text-white">
              INKCHO
            </div>
            <button
              onClick={toggleMenu}
              className="text-sm font-light tracking-[0.2em] text-white hover:opacity-60 transition-opacity"
            >
              MENU
            </button>
          </div>
        </nav>
      )}

      {/* Full Screen Menu */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-all duration-1000 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ 
          overflowY: isOpen ? 'auto' : 'hidden',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
          <div className="flex items-center justify-between px-12 py-8">
            <button
              onClick={toggleMenu}
              className="text-sm font-light tracking-[0.2em] text-white hover:opacity-60 transition-opacity"
            >
              CLOSE
            </button>
            <div className="flex items-center gap-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:opacity-60 transition-opacity"
              >
                <Instagram className="w-5 h-5" strokeWidth={1} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:opacity-60 transition-opacity"
              >
                <Twitter className="w-5 h-5" strokeWidth={1} />
              </a>
            </div>
          </div>
        </div>

        <div className="min-h-screen flex">
          {/* Left Side - Menu */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-12 lg:px-20">
            <div className="w-full max-w-2xl">
              {menuItems.map((item, index) => (
                <div key={item.number}>
                  <div
                    className={`group border-b border-white/10 transition-all duration-700 ${
                      isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <div 
                      className="py-8 cursor-pointer flex items-center justify-between"
                      onClick={() => {
                        if (item.title === 'Services') {
                          setExpandedService(!expandedService);
                        } else {
                          window.location.href = item.link;
                        }
                      }}
                    >
                      <div className="flex items-baseline gap-8">
                        <span className="text-white/40 text-sm font-light tracking-wider group-hover:text-white transition-colors">
                          {item.number}
                        </span>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                          {item.title}
                        </h2>
                      </div>
                      <div className="text-white/40 text-2xl group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                        →
                      </div>
                    </div>

                    {/* Sub Items */}
                    {item.subItems && (
                      <div className={`overflow-hidden transition-all duration-500 ${
                        expandedService ? 'max-h-64 opacity-100 mb-6' : 'max-h-0 opacity-0'
                      }`}>
                        <div className="pl-20 space-y-3">
                          {item.subItems.map((sub, subIndex) => (
                            <a
                              key={subIndex}
                              href={sub.link}
                              className="block text-xl md:text-2xl font-light text-white/50 hover:text-white hover:translate-x-4 transition-all duration-300"
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Footer Text */}
              <div className={`mt-16 text-white/30 text-xs tracking-widest transition-all duration-700 ${
                isOpen ? 'opacity-100' : 'opacity-0'
              }`} style={{ transitionDelay: '600ms' }}>
                <p>INKCHO</p>
                <p className="mt-2">CREATING DIGITAL EXPERIENCES</p>
              </div>
            </div>
          </div>

          {/* Right Side - Video Preview */}
          <div className="hidden lg:block w-1/2 fixed right-0 top-0 h-screen">
            <div className="relative w-full h-full flex items-center justify-center p-20">
              <div className={`relative w-full h-full transition-all duration-1000 ${
                isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`} style={{ transitionDelay: '400ms' }}>
                {/* Video Container */}
                <div className="relative w-full h-full overflow-hidden">
                  {menuItems.map((item, index) => (
                    <div
                      key={item.number}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center">
                        <div className="text-white/10 text-9xl font-light">
                          {item.number}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-12">
                  <div className="text-white/40 text-sm tracking-widest mb-2">
                    {menuItems[activeIndex].number}
                  </div>
                  <h3 className="text-5xl font-light text-white">
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