'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const servicesListRef = useRef(null);
  const serviceItemsRef = useRef([]);
  const imageContainerRef = useRef(null);
  const currentImageRef = useRef(null);
  const progressBarRef = useRef(null);

  const services = [
    {
      id: '01',
      title: 'Packaging Designing',
      subtitle: 'Memorable Product Presentation',
      description: 'We create visually striking and functional packaging designs that enhance brand recognition and elevate the consumer unboxing experience.',
      image: '/s2.jpg',
      scope: 'Concept Development • Material Selection • Prototyping • Branding',
      deliverables: ['Packaging Mockups', 'Material Specifications', 'Brand Guidelines']
    },
    {
      id: '02',
      title: 'Promotional Brand Videos',
      subtitle: 'Engaging Visual Storytelling',
      description: 'Our team produces compelling promotional videos that capture your brand’s essence, engage audiences, and drive marketing goals through dynamic storytelling.',
      image: '/s1.jpg',
      scope: 'Scriptwriting • Storyboarding • Filming • Post-Production',
      deliverables: ['Video Storyboards', 'Final Edited Videos', 'Social Media Clips']
    },
    {
      id: '03',
      title: 'Illustrations',
      subtitle: 'Unique Visual Artistry',
      description: 'We craft custom illustrations that bring your brand’s story to life, adding a distinctive and creative touch to your marketing and digital assets.',
      image: 's4.webp',
      scope: 'Concept Sketches • Digital Illustration • Style Guides • Asset Creation',
      deliverables: ['Custom Illustrations', 'Style Guides', 'Digital Assets']
    },
    {
      id: '04',
      title: 'Poster Designing',
      subtitle: 'Impactful Visual Campaigns',
      description: 'Our poster designs combine bold visuals and strategic messaging to create eye-catching campaigns that resonate with your target audience.',
      image: '/s3.webp',
      scope: 'Concept Design • Typography • Print Preparation • Campaign Strategy',
      deliverables: ['Poster Mockups', 'Print-Ready Files', 'Campaign Guidelines']
    },
    {
      id: '05',
      title: '3D Designing',
      subtitle: 'Immersive Visual Solutions',
      description: 'We deliver cutting-edge 3D designs for products, environments, and animations, creating immersive experiences that captivate and engage audiences.',
      image: 's6.webp',
      scope: '3D Modeling • Texturing • Animation • Rendering',
      deliverables: ['3D Models', 'Rendered Visuals', 'Animation Sequences']
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const serviceItems = serviceItemsRef.current;
    const imageContainer = imageContainerRef.current;
    const currentImage = currentImageRef.current;
    const progressBar = progressBarRef.current;

    // Set initial states
    gsap.set(title, { opacity: 0, y: 30 });
    gsap.set(subtitle, { opacity: 0, y: 20 });
    gsap.set(serviceItems, { opacity: 0, x: -30 });
    gsap.set(imageContainer, { opacity: 0, scale: 0.95 });
    gsap.set(progressBar, { scaleX: 0 });

    // Faster title entrance
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });

    titleTl
      .to(title, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .to(subtitle, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.4")
      .to(imageContainer, { opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" }, "-=0.3");

    // Faster service items entrance
    serviceItems.forEach((item, index) => {
      if (item) {
        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }).to(item, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: index * 0.05
        });

        // Scroll-based image changes
        ScrollTrigger.create({
          trigger: item,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => {
            // Update image with faster animation
            if (currentImage) {
              gsap.to(currentImage, {
                opacity: 0,
                scale: 0.98,
                duration: 0.15,
                ease: "power2.out",
                onComplete: () => {
                  currentImage.src = services[index].image;
                  gsap.to(currentImage, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }
              });
            }

            // Update progress bar faster
            const progress = (index + 1) / services.length;
            gsap.to(progressBar, {
              scaleX: progress,
              duration: 0.3,
              ease: "power2.out"
            });

            // Highlight current item
            gsap.to(item, {
              x: 15,
              duration: 0.25,
              ease: "power2.out"
            });

            // Fade other items slightly
            serviceItems.forEach((otherItem, otherIndex) => {
              if (otherIndex !== index && otherItem) {
                gsap.to(otherItem, {
                  opacity: 0.5,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }
            });
          },
          onLeave: () => {
            // Reset item position
            gsap.to(item, {
              x: 0,
              duration: 0.25,
              ease: "power2.out"
            });

            // Restore all items opacity
            serviceItems.forEach((otherItem) => {
              if (otherItem) {
                gsap.to(otherItem, {
                  opacity: 1,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }
            });
          },
          onEnterBack: () => {
            // Same as onEnter for smooth scroll up
            if (currentImage) {
              gsap.to(currentImage, {
                opacity: 0,
                scale: 0.98,
                duration: 0.15,
                ease: "power2.out",
                onComplete: () => {
                  currentImage.src = services[index].image;
                  gsap.to(currentImage, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }
              });
            }

            const progress = (index + 1) / services.length;
            gsap.to(progressBar, {
              scaleX: progress,
              duration: 0.3,
              ease: "power2.out"
            });

            gsap.to(item, {
              x: 15,
              duration: 0.25,
              ease: "power2.out"
            });

            serviceItems.forEach((otherItem, otherIndex) => {
              if (otherIndex !== index && otherItem) {
                gsap.to(otherItem, {
                  opacity: 0.5,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }
            });
          },
          onLeaveBack: () => {
            gsap.to(item, {
              x: 0,
              duration: 0.25,
              ease: "power2.out"
            });

            serviceItems.forEach((otherItem) => {
              if (otherItem) {
                gsap.to(otherItem, {
                  opacity: 1,
                  duration: 0.2,
                  ease: "power2.out"
                });
              }
            });
          }
        });
      }
    });

    // Set initial image
    if (currentImage && services[0]) {
      currentImage.src = services[0].image;
    }

    // Faster initial progress
    gsap.to(progressBar, {
      scaleX: 1 / services.length,
      duration: 0.6,
      delay: 0.8,
      ease: "power2.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative py-24 lg:py-32 bg-[#111]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <div ref={titleRef}>
                <h2 className="text-5xl lg:text-7xl font-light text-gray-100 leading-tight">
                  Our
                  <span className="block text-6xl lg:text-8xl font-bold">Services</span>
                </h2>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div ref={subtitleRef}>
                <p className="text-lg text-gray-100 leading-relaxed">
                  Comprehensive design solutions that transform complex business challenges into intuitive, user-centered experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Services List */}
          <div className="lg:col-span-7">
            <div ref={servicesListRef} className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  ref={el => serviceItemsRef.current[index] = el}
                  className="group cursor-pointer border-b border-gray-600 pb-12 transition-all duration-300"
                >
                  {/* Service Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-baseline space-x-6">
                      <span className="text-sm font-medium text-[#EB5B00] min-w-[2rem]">
                        {service.id}
                      </span>
                      <div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-100 mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-base text-gray-400 uppercase tracking-wide font-medium">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="hidden lg:block">
                      <svg className="w-6 h-6 text-[#EB5B00] transform group-hover:translate-x-2 group-hover:text-gray-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Service Description */}
                  <div className="ml-14 space-y-6">
                    <p className="text-lg text-gray-100 leading-relaxed">
                      {service.description}
                    </p>
                    <div>
                      <p className="text-sm font-medium text-gray-200 mb-2">Scope of Work</p>
                      <p className="text-sm text-gray-400">{service.scope}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200 mb-3">Key Deliverables</p>
                      <div className="flex flex-wrap gap-2">
                        {service.deliverables.map((deliverable, deliverableIndex) => (
                          <span
                            key={deliverableIndex}
                            className="text-xs font-medium text-gray-700 bg-gray-50 px-3 py-1 rounded-full border border-gray-200"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Display */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div ref={imageContainerRef} className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    ref={currentImageRef}
                    src={services[0].image}
                    alt="Service showcase"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                <div className="mt-6">
                  <div className="w-full h-px bg-gray-200">
                    <div
                      ref={progressBarRef}
                      className="h-full bg-gray-900 origin-left transform"
                      style={{ transformOrigin: 'left center' }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500">
                    <span>01</span>
                    <span>0{services.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default ServicesSection;