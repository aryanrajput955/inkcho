'use client';

import { useState, useEffect } from 'react';
import FoundationHero from '@/app/components/brand-foundation/FoundationHero';
import FoundationScroll from '@/app/components/brand-foundation/FoundationScroll';
import FoundationGrid from '@/app/components/brand-foundation/FoundationGrid';

export default function BrandFoundationPage() {
  const [isLargeDesktop, setIsLargeDesktop] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => {
      // 1536px is Tailwind's 2xl breakpoint
      setIsLargeDesktop(window.innerWidth >= 1536);
    };

    handleResize();
    setIsLoaded(true);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#FFFBF5] text-black overflow-hidden">
      <FoundationGrid />
      
      <div className="relative z-10">
        <FoundationHero />
        <FoundationScroll />
      </div>
    </main>
  );
}