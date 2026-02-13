'use client';
// import EnhancedContentSection from './components/para';
import HeroSection from './components/hero';
import React, { useState } from 'react';
import ServicesSection from './components/servies';
import LoadingScreen from './components/LoadingScreen';

import { useLenis } from './hooks/Lenis';

import ScrollHijackGallery from './components/animated-portfolio';
import CardsSection from './components/service2';

import LightRaysContainer from './components/cta';
import TestimonialCarousel from './components/testimonials';
import ScrollGalleryMobile from './components/projects-mobile';

// Track loading state across client-side navigations
let hasLoadedOnce = false;

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(!hasLoadedOnce);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    hasLoadedOnce = true;
  };

  useLenis();
  return (

    <div className="relative">
      
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
 
      <HeroSection startAnimation={!isLoading} />
      <div className="hidden md:block">
        <ScrollHijackGallery />
      </div>
      <div className="block md:hidden">
        <ScrollGalleryMobile />
      </div>
      <CardsSection />
      {/* <ServicesSection /> */}
      <TestimonialCarousel />
      <LightRaysContainer />

    </div>
  );
}