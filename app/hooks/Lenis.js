// hooks/useLenis.js
'use client';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = (options = {}) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Default Lenis options
    const defaultOptions = {
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false, // Disable on touch devices to avoid conflicts
      touchMultiplier: 2,
      infinite: false,
      ...options, // Override with custom options
    };

    // Initialize Lenis
    lenisRef.current = new Lenis(defaultOptions);

    // Animation frame loop
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Optional: Add to window for debugging
    if (typeof window !== 'undefined') {
      window.lenis = lenisRef.current;
    }

    // Cleanup function
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (typeof window !== 'undefined') {
        delete window.lenis;
      }
    };
  }, []);

  // Return the Lenis instance for manual control if needed
  return lenisRef.current;
};

// Alternative hook with more control options
export const useLenisWithControls = (options = {}) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const defaultOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
      ...options,
    };

    lenisRef.current = new Lenis(defaultOptions);

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (typeof window !== 'undefined') {
      window.lenis = lenisRef.current;
    }

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (typeof window !== 'undefined') {
        delete window.lenis;
      }
    };
  }, []);

  // Control functions
  const scrollTo = (target, options = {}) => {
    lenisRef.current?.scrollTo(target, options);
  };

  const start = () => {
    lenisRef.current?.start();
  };

  const stop = () => {
    lenisRef.current?.stop();
  };

  const resize = () => {
    lenisRef.current?.resize();
  };

  return {
    lenis: lenisRef.current,
    scrollTo,
    start,
    stop,
    resize,
  };
};