'use client';
import Navigation from './components/navbar';
import HeroSection from './components/hero';
import EnhancedContentSection from './components/para';
import WhyChooseUs from './components/whyus';
import React, { use, useRef } from 'react';
import ServicesSection from './components/servies';
import ProjectsSection from './components/projects';
import { useLenis } from './hooks/Lenis';

export default function HomePage() {
  const navRef = useRef(null);
  useLenis();
  return (

    <div className="relative">
      <Navigation ref={navRef} />
      <HeroSection navRef={navRef} />
      <EnhancedContentSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      

    </div>
  );
}