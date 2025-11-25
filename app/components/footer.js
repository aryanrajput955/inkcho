'use client';
import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#f5f1eb] text-[#333] border-t border-[#d6d3cd]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16">

        {/* === Top CTA === */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-[#333] mb-6">
            Ready to create <br />
            <span className="text-orange-600 italic font-serif font-normal">
              something extraordinary?
            </span>
          </h2>

          <a
            href="/contact"
            className="group inline-flex items-center gap-2 text-base font-light border-b border-[#d6d3cd] hover:border-orange-600 transition-all"
          >
            <span>Get in touch</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        {/* === Main Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">

          {/* Brand + Newsletter */}
          <div className="lg:col-span-5 space-y-8">
            <div className="text-4xl font-light tracking-wide text-[#333]">
              INKCHO
            </div>

            <p className="text-[#666] max-w-sm font-light">
              Subscribe to receive the latest insights on design, branding, and digital strategy.
            </p>

            {/* Email */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent border-b border-[#d6d3cd] focus:border-orange-600 transition-colors py-3 outline-none placeholder-[#999] font-light text-sm"
                />

                <button
                  type="submit"
                  className="absolute right-0 top-1/2 -translate-y-1/2
                             flex items-center justify-center border border-gray-300 bg-white text-black
                             rounded-full w-10 h-10 transition-all duration-500 hover:border-orange-600 hover:text-orange-600"
                >
                  <ArrowRight size={16} />
                </button>
              </div>

              <p className="text-xs text-[#777] font-light">
                By subscribing, you agree to our{" "}
                <a href="#" className="underline hover:text-orange-600">Privacy Policy</a>.
              </p>
            </form>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-16">

            {/* Navigation */}
            <div>
              <h3 className="text-xs tracking-wider text-[#777] uppercase mb-6 font-light">
                Navigation
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '/' },
                  { label: 'Services', href: '/services' },
                  { label: 'About', href: '/about' },
                  { label: 'Work', href: '/work' },
                  { label: 'Contact', href: '/contact' },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-[#555] hover:text-orange-600 transition-colors font-light"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs tracking-wider text-[#777] uppercase mb-6 font-light">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Branding', href: '/services/branding' },
                  { label: 'Web Design', href: '/services/web-design' },
                  { label: 'Strategy', href: '/services/strategy' },
                  { label: 'Marketing', href: '/services/marketing' },
                  { label: 'Development', href: '/services/development' },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="text-[#555] hover:text-orange-600 transition-colors font-light"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xs tracking-wider text-[#777] uppercase mb-6 font-light">
                Connect
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'LinkedIn', href: '#' },
                  { label: 'Instagram', href: '#' },
                  { label: 'Dribbble', href: '#' },
                  { label: 'Behance', href: '#' },
                  { label: 'Twitter', href: '#' },
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.href}
                      className="flex items-center gap-1 text-[#555] hover:text-orange-600 transition-colors font-light"
                    >
                      {item.label}
                      <ArrowUpRight size={12} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-[#d6d3cd] pt-10 text-sm font-light">

          <div className="text-[#666]">
            © {currentYear} INKCHO — All rights reserved
          </div>

          <div className="flex gap-8 text-[#666]">
            <a href="/privacy" className="hover:text-orange-600">Privacy</a>
            <a href="/terms" className="hover:text-orange-600">Terms</a>
            <a href="/cookies" className="hover:text-orange-600">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
}
