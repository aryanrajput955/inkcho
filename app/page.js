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

export default function HomePage() {

  useLenis();
  return (

    <div className="relative">
 
      <HeroSection/>
      {/* <EnhancedContentSection /> */}
      {/* <InfiniteScrollSection /> */}
      <ScrollHijackGallery />
      <CardsSection />
      <ServicesSection />
      <TestimonialCarousel />
      {/* <WhyChooseUs /> */}
      {/* <ProjectsSection /> */}
      <LightRaysContainer />

    </div>
  );
}