'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const footerElement = document.getElementById('footer-section');
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <footer id="footer-section" className="bg-gray-900 text-white relative overflow-hidden rounded-t-4xl">
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Navigation - Centered */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <a href="#" className="group text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300 relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="group text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300 relative">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="group text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300 relative">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="group text-lg font-medium text-white hover:text-yellow-400 transition-all duration-300 relative">
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-6 lg:pl-12">
            <div className="mb-8">
              <h2 className="text-3xl lg:text-4xl font-light mb-4">Still have questions?</h2>
              <p className="text-gray-400 text-lg">Get in touch with our team for personalized assistance.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white text-gray-900 rounded-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg"
              />
              <button className="group bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap hover:scale-105">
                Send
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center ml-2 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Large Brand Name - Centered with Animation */}
        <div className="mb-16 text-center">
          <h1 className="text-9xl lg:text-[10rem] xl:text-[14rem] 2xl:text-[16rem] font-black text-white leading-none tracking-tight">
            {['I', 'N', 'K', 'C', 'H', 'O'].map((letter, index) => (
              <span
                key={index}
                className={`inline-block transform transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-20 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pt-8 border-t border-gray-800">
          <div className="text-gray-500 text-sm">
            © {currentYear} INKCHO. All rights reserved.
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies Policy</a>
            {/* <div className="text-gray-500">
              Website by <span className="text-white font-medium">TheCraftSync</span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;