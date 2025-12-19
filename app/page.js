'use client';
// import EnhancedContentSection from './components/para';
import HeroSection from './components/hero';
import React, { use, useRef } from 'react';
import ServicesSection from './components/servies';

import { useLenis } from './hooks/Lenis';

import ScrollHijackGallery from './components/animated-portfolio';
import CardsSection from './components/service2';

import LightRaysContainer from './components/cta';
import TestimonialCarousel from './components/testimonials';
import ScrollGalleryMobile from './components/projects-mobile';

export default function HomePage() {

  useLenis();
  return (

    <div className="relative">
 
      <HeroSection/>
      <div className="hidden md:block">
        <ScrollHijackGallery />
      </div>
      <div className="block md:hidden">
        <ScrollGalleryMobile />
      </div>
      <CardsSection />
  
      <TestimonialCarousel />
      <LightRaysContainer />

    </div>
  );
}