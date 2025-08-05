// components/Navigation.js
'use client';
import React, { forwardRef } from 'react';

const Navigation = forwardRef((props, ref) => {
  return (
    <nav ref={ref} className="fixed text-white top-0 left-0 w-full z-50 p-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">INKCHO</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:opacity-70 transition-opacity">WORK</a>
          <a href="#" className="hover:opacity-70 transition-opacity">ABOUT</a>
          <a href="#" className="hover:opacity-70 transition-opacity">CAPABILITIES</a>
          <a href="#" className="hover:opacity-70 transition-opacity">INSIGHTS</a>
          <a href="#" className="hover:opacity-70 transition-opacity underline">CONTACT</a>
        </div>
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;