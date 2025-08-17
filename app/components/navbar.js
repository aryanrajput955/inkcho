'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // GSAP animations for mobile menu
  useEffect(() => {
    const menuOverlay = document.querySelector('.mobile-menu-overlay');
    const menuItems = document.querySelectorAll('.mobile-menu-item');
    const menuBg = document.querySelector('.mobile-menu-bg');
    const logo = document.querySelector('.nav-logo');

    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      
      if (isMenuOpen) {
        // Menu opening animation
        gsap.set(menuOverlay, { display: 'flex' });
        gsap.set(menuItems, { y: 100, opacity: 0, rotateX: -90 });
        gsap.set(menuBg, { scale: 0, opacity: 0 });

        const tl = gsap.timeline();
        
        tl.to(menuBg, {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power4.out'
        })
        .to(menuItems, {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: -0.3
        })
        .to(logo, {
          scale: 0.9,
          duration: 0.3,
          ease: 'power2.out'
        }, 0);

      } else if (menuOverlay) {
        // Menu closing animation
        const tl = gsap.timeline();
        
        tl.to(menuItems, {
          y: -50,
          opacity: 0,
          rotateX: 90,
          duration: 0.4,
          stagger: -0.05,
          ease: 'power3.in'
        })
        .to(menuBg, {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.in',
          delay: -0.2
        })
        .to(logo, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        }, 0)
        .set(menuOverlay, { display: 'none' });
      }
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'WORK', href: '#work', delay: 0 },
    { name: 'ABOUT', href: '#about', delay: 0.1 },
    { name: 'CAPABILITIES', href: '#capabilities', delay: 0.2 },
    { name: 'INSIGHTS', href: '#insights', delay: 0.3 },
    { name: 'CONTACT', href: '/contact', delay: 0.4, isActive: true }
  ];

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Load GSAP */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-3' : 'bg-transparent py-4'
      } sm:py-6`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6">
          {/* Logo */}
          <div className="nav-logo text-xl sm:text-2xl font-bold tracking-tight text-white relative cursor-pointer group">
            <Link href="/">
            
          <span className="relative z-10 transition-all duration-300 group-hover:text-orange-400">INKCHO</span>
            </Link>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-lg blur-lg transform group-hover:scale-110"></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 text-sm font-medium">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-white transition-all duration-300 hover:text-orange-400 group ${
                  item.isActive ? 'text-orange-400' : ''
                } hover:scale-110 transform`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500 ${
                  item.isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
                {item.isActive && (
                  <div className="absolute -inset-2 bg-orange-500/10 rounded-lg blur-sm"></div>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden text-white focus:outline-none relative z-60 p-2 rounded-xl transition-all duration-500 transform ${
              isMenuOpen ? 'bg-orange-500/30 rotate-180 scale-110' : 'hover:bg-white/10 hover:scale-105'
            }`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
              }`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${
                isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
              }`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className="mobile-menu-overlay lg:hidden fixed inset-0 z-40 hidden items-center justify-center">
        {/* Animated Background */}
        <div className="mobile-menu-bg absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Animated particles/dots */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 via-transparent to-red-500/5"></div>
        </div>

        {/* Menu Items Container */}
        <div className="relative z-50 flex flex-col items-center space-y-8 px-8">
          {menuItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleMenuItemClick}
              className={`mobile-menu-item text-4xl sm:text-5xl font-bold uppercase tracking-wider transition-all duration-500 transform hover:scale-110 ${
                item.isActive 
                  ? 'text-orange-400 hover:text-white' 
                  : 'text-white hover:text-orange-400'
              } relative group cursor-pointer`}
            >
              {/* Text with gradient effect */}
              <span className="relative z-10 inline-block transition-all duration-300 group-hover:drop-shadow-lg">
                {item.name}
              </span>
              
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-lg blur-md transform scale-150"></div>
              
              {/* Active item indicator */}
              {item.isActive && (
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              )}
              
              {/* Underline effect */}
              <div className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500 ${
                item.isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></div>
            </a>
          ))}
          
          {/* Social links or additional info */}
          <div className="pt-12 flex space-x-6 opacity-60">
            <div className="w-8 h-0.5 bg-white"></div>
            <span className="text-white text-sm tracking-widest">FOLLOW</span>
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;