'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const footerElement = document.getElementById('footer-section');
    if (footerElement) observer.observe(footerElement);

    return () => {
      if (footerElement) observer.unobserve(footerElement);
    };
  }, []);

  return (
    <footer
      id="footer-section"
      className="bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-20">

        {/* ======== TOP SECTION ======== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-16">

          {/* Brand + Newsletter */}
          <div className="md:col-span-2 space-y-6">
            <div className="font-bold text-3xl tracking-widest">INKCHO</div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Get valuable strategy, design, and brand insights straight to your inbox.
            </p>

            <form className="flex items-center border border-gray-700 rounded overflow-hidden max-w-md">
              <input
                type="email"
                placeholder="Your email here"
                className="w-full px-4 py-3 bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-5 py-3 text-sm font-medium hover:bg-gray-200 transition flex items-center gap-2"
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>

            <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
              By signing up to receive emails from INKCHO, you agree to our{" "}
              <a href="#" className="underline hover:text-gray-300">Privacy Policy</a>.
              You can unsubscribe anytime.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Company</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Work</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase mb-4">Discover</h3>
            <ul className="space-y-2 text-white">
              <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">TikTok</a></li>
              <li><a href="#" className="hover:text-gray-300">Dribbble</a></li>
            </ul>
          </div>
        </div>



        {/* ======== BOTTOM SECTION ======== */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-gray-800">
          <div className="text-gray-500 text-sm">
            © {currentYear} INKCHO. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white text-xs uppercase tracking-wide"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
