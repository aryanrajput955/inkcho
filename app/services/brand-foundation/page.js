'use client';

import { useEffect } from 'react';
import FoundationHero from '@/app/components/brand-foundation/FoundationHero';
import ProjectShowcase from '@/app/components/brand-foundation/ProjectShowcase';

export default function BrandFoundationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#FFFBF5] text-black">
      {/* Visual Grain Texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="relative z-10 w-full">
        <FoundationHero />
        
        {/* Full-Screen Sticky Showcase */}
        <div className="bg-black">
            <ProjectShowcase />
        </div>

        {/* Minimal Footer Space */}
        <div className="h-[20vh] bg-black flex items-center justify-center">
            <div className="w-12 h-px bg-white/20" />
        </div>
      </div>
    </main>
  );
}