'use client';

import HeroSection from './components/hero';
import EnhancedContentSection from './components/para';

import React, { use, useRef } from 'react';
import ServicesSection from './components/servies';

import { useLenis } from './hooks/Lenis';

import ScrollHijackGallery from './components/animated-portfolio';
import CardsSection from './components/service2';

import LightRaysContainer from './components/cta';

export default function HomePage() {
  const navRef = useRef(null);
  useLenis();
  return (

    <div className="relative">
 
      <HeroSection navRef={navRef} />
      <EnhancedContentSection />
      {/* <InfiniteScrollSection /> */}
      <ScrollHijackGallery />
      <CardsSection />
      <ServicesSection />
      {/* <WhyChooseUs /> */}
      {/* <ProjectsSection /> */}
      <LightRaysContainer />

    </div>
  );
}