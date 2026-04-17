'use client';

import React from 'react';
import OptimizedImage from '@/app/components/OptimizedImage';
import { motion } from 'framer-motion';

// Signature Colors
const BRAND_BLUE = "#1e4389";
const BRAND_BEIGE = "#FFFBF5";

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.98 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

export default function NineToFiveCaseStudy() {
  // Cloudinary links placeholders as requested
  // 🖼️ CONTENT ASSETS - ENTER YOUR IMAGE LINKS HERE
  const images = {
    // 1. HERO SECTION
    heroLogo: "https://res.cloudinary.com/dplv15n29/image/upload/v1775385243/copy_of_drilldown_czu9kb_b064f2.png",
    heroBg: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/walking_women_kdggx7.png",
    
    // 2. BRAND OVERVIEW & CHALLENGE
    brandOverviewBg: "https://res.cloudinary.com/dplv15n29/image/upload/v1775387905/Soft_beige_to_taupe_gradient__endoftext___ixfxgy.png",
    hangerIcon: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382678/brand_overview_icon__ywv0xg.png",
    
    // 3. INSIGHT & IDEA
    insightImg: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/Image_2_hngjxu.jpg",
    ideaVisual: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382679/image_3_yvvfhf.jpg",
    
    // 7. PRODUCT STRATEGY
    strategyPortrait: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/image_4_cth9un.jpg",
    
    // 8. MATERIAL & CRAFT (Gallery 01-05)
    craft01: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/Image_2_hngjxu.jpg",
    craft02: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/Image_2_hngjxu.jpg",
    craft03: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483329/Brand_Guidelines__page-0006_tvtnzn.jpg",
    craft04: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483326/Brand_Guidelines__page-0009_n6r0vk.jpg",
    craft05: "https://res.cloudinary.com/dplv15n29/image/upload/v1772483334/Brand_Guidelines__page-0008_krvxdy.jpg",
    // 9. BRAND VOICE
    voiceLogo: "https://res.cloudinary.com/dplv15n29/image/upload/v1775385243/copy_of_drilldown_czu9kb_b064f2.png",
    
    // 10. CAMPAIGN & SOCIAL
    campaignImg: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/image_4_cth9un.jpg",
    socialImg: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/Image_2_hngjxu.jpg",
  };

  return (
    <main className="bg-[#FFFBF5] min-h-screen text-black">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={images.heroBg}
            alt="9to5 Hero Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col justify-center h-full md:-mt-20">
          {/* Top Pill Labels */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-3 mb-8 md:mb-6"
          >
            {["2025", "Editorial design", "Brand Foundation"].map((label) => (
              <span key={label} className="border border-black rounded-full px-4 py-1 text-[10px] md:text-xs 2xl:text-sm font-normal tracking-wider text-black">
                {label}
              </span>
            ))}
          </motion.div>

          {/* Main Title and Headlines */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="max-w-none"
          >
            <div className="relative w-[220px] sm:w-[320px] md:w-[420px] lg:w-[480px] xl:w-[550px] 2xl:w-[600px] aspect-[5/2] -ml-1 md:-ml-4 mb-4">
              <OptimizedImage
                src={images.heroLogo}
                alt="9TO5 Logo"
                fill
                className="object-contain object-left"
                priority
              />
              <h1 className="sr-only">9TO5</h1>
            </div>
            
            <div className="space-y-2 max-w-2xl 2xl:max-w-4xl mt-12 md:mt-16">
              <h2 className="text-lg md:text-xl 2xl:text-4xl font-light tracking-wider text-black/90 uppercase">
                QUIET CONFIDENCE, TAILORED FOR MODERN WORK.
              </h2>
              <p className="text-base md:text-lg 2xl:text-2xl font-light text-black/60 leading-relaxed">
                A contemporary womenswear brand redefining structure, fluidity,<br className="hidden md:block" /> and presence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. BRAND OVERVIEW & CHALLENGE */}
      <section className="relative py-16 md:py-24 2xl:py-32 overflow-hidden">
        {/* Background Gradient Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage src={images.brandOverviewBg} alt="Background Gradient" fill className="object-cover opacity-60" />
        </div>

        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            {/* Left: Icon Cluster (4 columns) */}
            <motion.div 
              {...fadeInUp}
              className="md:col-span-4 flex flex-col justify-start md:pr-16 mb-20 md:mb-0"
            >
              <div className="flex flex-col gap-8">
                <span className="text-[10px] font-black tracking-[0.5em] uppercase text-black/30">Brand Essence</span>
                <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative w-40 h-40 lg:w-56 lg:h-56">
                  <OptimizedImage src={images.hangerIcon} alt="Brand Overview Icon" fill className="object-contain" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Content Cluster (8 columns) */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="md:col-span-8 md:pl-20 2xl:pl-32 flex flex-col justify-center"
            >
              <div className="max-w-4xl space-y-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-light leading-[1.2] tracking-tight">
                  Designed for modern professionals, <span className="font-medium" style={{ color: BRAND_BLUE }}>9to5</span> bridges the gap between everyday wearability and <span className="italic">elevated design.</span>
                </h3>
                <div className="w-20 h-[1.5px] bg-black/10 origin-left scale-x-100" />
                <p className="text-lg md:text-xl 2xl:text-3xl font-light text-black/60 leading-relaxed max-w-2xl">
                  Offering refined essentials that feel considered, adaptable, and timeless for the contemporary woman.
                </p>
              </div>
            </motion.div>
          </div>

          {/* THE CHALLENGE (Vertical Separator moved to spacer) */}
          
          <motion.div {...fadeInUp} className="max-w-7xl mt-24 md:mt-40">
            <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-12 flex flex-wrap items-center gap-x-4 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">THE</span> 
              <span className="font-bold">CHALLENGE</span>
            </h3>
            
            <motion.div className="space-y-10 text-lg md:text-2xl font-light leading-relaxed max-w-5xl text-black/80">
              <p>For years, office wear has remained unchanged, structured, restrictive, and often disconnected from the way women move through their day.</p>
              <p>At one end, fast fashion offers accessibility but lacks longevity. At the other, premium brands deliver quality but remain out of reach. Between the two, there is very little that feels both considered and attainable.</p>
              <p className="font-normal opacity-90">
                The challenge was to create something that naturally belongs in that space.<br className="hidden md:block" />
                Clothing that carries structure without rigidity,<br className="hidden md:block" />
                quality without excess,<br className="hidden md:block" />
                and a sense of confidence that does not need to be announced.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. UNDERSTANDING THE LANDSCAPE */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-14 items-center">
            <motion.div {...fadeInUp}>
              <h3 className="text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight mb-6 leading-tight uppercase" style={{ color: BRAND_BLUE }}>
                UNDERSTANDING<br/>THE LANDSCAPE
              </h3>
              <p className="text-lg md:text-lg 2xl:text-[27px] font-light max-w-md 2xl:max-w-xl text-black/70 leading-relaxed">
                The Indian womenswear market continues to evolve, shaped by shifting lifestyles, climate, and changing expectations of modern workwear.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer} 
              initial="initial" 
              whileInView="whileInView" 
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-16"
            >
              {[
                { num: "01", title: "Changing Workwear Identity", desc: "Workwear is no longer defined by the office. It adapts to different moments throughout the day." },
                { num: "02", title: "Functional Dressing", desc: "Comfort, movement, and breathability are no longer optional, they are expected." },
                { num: "03", title: "Category Focus", desc: "Trousers are emerging as a defining staple in modern workwear." },
                { num: "04", title: "Market Gap", desc: "A clear space exists between affordability and refined quality." }
              ].map((item) => (
                <motion.div key={item.num} variants={fadeInUp} className="group border-b border-black/10 pb-12">
                  <span className="text-5xl md:text-7xl 2xl:text-9xl font-extralight block mb-6 group-hover:translate-x-2 transition-transform duration-500 pr-10" style={{ color: BRAND_BLUE }}>{item.num}</span>
                  <h4 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h4>
                  <p className="text-lg font-light text-black/60">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. THE INSIGHT */}
      <section className="py-16 md:py-24 2xl:py-32 bg-[#f4f1ec]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 text-center">
          <motion.div {...fadeInUp} className="mb-20 md:mb-20">
            <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight mb-6 uppercase" style={{ color: BRAND_BLUE }}>THE INSIGHT</h3>
            <p className="text-xl md:text-3xl 2xl:text-5xl italic font-light">"Presence speaks before words do."</p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <motion.div {...fadeInUp} className="flex-1 text-right">
              <p className="text-2xl md:text-4xl font-light leading-tight">
                Confidence today<br/>is <span className="font-bold italic">quiet.</span>
              </p>
            </motion.div>

            <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative w-full max-w-sm aspect-[4/5] bg-gray-200 overflow-hidden rounded-sm">
              <OptimizedImage src={images.insightImg} alt="Insight Portrait" fill className="object-cover" />
            </motion.div>

            <motion.div {...fadeInUp} className="flex-1 text-left space-y-6">
              <p className="text-xl md:text-3xl font-light">
                It does not demand <span className="font-bold italic">attention.</span>
              </p>
              <p className="text-xl md:text-3xl font-light">
                It does not need <span className="font-bold italic">validation.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. THE IDEA */}
      <section className="h-screen min-h-[750px] flex items-center justify-center bg-white text-center py-12 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col justify-between h-full">
          <motion.div {...fadeInUp} className="text-center mb-4 md:mb-6">
            <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-2 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight ">THE</span> 
              <span className="font-bold">IDEA</span>
            </h3>
            <p className="text-lg md:text-2xl 2xl:text-4xl font-light text-black italic leading-none">Quiet Confidence</p>
          </motion.div>

          <div className="relative w-full h-full flex-1 max-h-[80vh] mb-2 md:mb-4 mx-auto max-w-[1600px]">
            <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative w-full h-full rounded-sm overflow-hidden flex items-center justify-center">
               <OptimizedImage src={images.ideaVisual} alt="The Idea Main Visual" fill className="object-contain object-center" />
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center max-w-5xl mx-auto px-4 mb-2 md:mb-2">
            <h4 className="text-lg md:text-xl lg:text-2xl 2xl:text-4xl font-light leading-relaxed text-black">
              9to5 is built around the idea that power does not need to be announced.
              The brand does not amplify the wearer, it <span className="italic">refines her presence.</span>
            </h4>
          </motion.div>
        </div>
      </section>

      {/* 6. BRAND PHILOSOPHY */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div {...fadeInUp} className="text-center mb-24 md:mb-32">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-2 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">BRAND</span> 
              <span className="font-bold">PHILOSOPHY</span>
            </h3>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* Left Statement */}
              <motion.div {...fadeInUp} className="text-4xl md:text-6xl lg:text-7xl 2xl:text-7xl font-extralight leading-tight tracking-tight" style={{ color: BRAND_BLUE }}>
                The woman<br/> 
                has always<br/> 
                been the<br/> 
                <span className="font-bold">power</span>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center md:text-right space-y-8 md:space-y-12 text-black">
                <p className="text-lg md:text-2xl 2xl:text-3xl font-light italic leading-tight">
                  There is a certain kind of confidence<br />
                  that does not ask for attention.
                </p>
                
                <p className="text-lg md:text-2xl 2xl:text-3xl font-light italic leading-tight">
                  It does not arrive loudly.<br />
                  It does not perform.<br />
                  It does not need to be seen to be felt.
                </p>

                <p className="text-lg md:text-2xl 2xl:text-3xl font-light italic leading-tight">
                  It exists in presence,<br />
                  in movement,<br />
                  in self-assurance.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PRODUCT STRATEGY */}
      <section className="h-screen min-h-[700px] flex items-center  justify-center bg-[#f4f1ec] overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 w-full flex flex-col items-center">
          <motion.div {...fadeInUp} className="text-center mb-8 md:mb-12">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-2 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">PRODUCT</span> 
              <span className="font-bold">STRATEGY</span>
            </h3>
          </motion.div>

          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center w-full">
              {/* Left Content */}
              <motion.div {...fadeInUp} className="space-y-4 md:space-y-6">
                 <h4 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-light tracking-tight leading-[1.1]" style={{ color: BRAND_BLUE }}>
                   The Bare<br/>Minimum
                 </h4>
                 
                 <div className="space-y-2 md:space-y-4 text-sm md:text-base 2xl:text-xl font-light leading-relaxed text-black/70 max-w-lg">
                   <p className="italic">The Bare Minimum is not about having less. It is about knowing what is essential.</p>
                   <p>Just as every woman carries her core quality within her, a wardrobe built on precision, intention, and repetition.</p>
                   <p>Pieces designed to return again and again.</p>
                   <p>Not because they chase relevance, but because they remain.</p>
                 </div>
              </motion.div>

              {/* Right Image */}
              <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative w-full h-screen max-h-[75vh] overflow-hidden rounded-sm flex items-center justify-center">
                 <OptimizedImage src={images.strategyPortrait} alt="Product Strategy Portrait" fill className="object-contain object-center" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MATERIAL & CRAFT */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div {...fadeInUp} className="text-center mb-24 md:mb-40">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-2 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">MATERIAL</span> 
              <span className="font-bold">& CRAFT</span>
            </h3>
          </motion.div>

          {/* Masonry-style Geometry Gallery (Scaled down with animations) */}
          <div className="max-w-5xl mx-auto mb-16 md:mb-24">
            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
              <motion.div variants={fadeInScale} className="md:col-span-4 aspect-square relative bg-gray-100 rounded-sm overflow-hidden shadow-sm">
                 <OptimizedImage src={images.craft01} alt="Craft Detail 1" fill className="object-cover" />
              </motion.div>
              <motion.div variants={fadeInScale} className="md:col-span-4 aspect-square relative bg-gray-100 rounded-sm overflow-hidden shadow-sm">
                 <OptimizedImage src={images.craft02} alt="Craft Detail 2" fill className="object-cover" />
              </motion.div>
              <motion.div variants={fadeInScale} className="md:col-span-4 aspect-square relative bg-gray-100 rounded-sm overflow-hidden shadow-sm">
                 <OptimizedImage src={images.craft03} alt="Craft Detail 3" fill className="object-cover" />
              </motion.div>
              
              <div className="md:col-span-1" /> {/* Offset */}
              <motion.div variants={fadeInScale} className="md:col-span-5 aspect-square relative bg-gray-100 rounded-sm overflow-hidden shadow-sm">
                 <OptimizedImage src={images.craft04} alt="Craft Detail 4" fill className="object-cover" />
              </motion.div>
              <motion.div variants={fadeInScale} className="md:col-span-5 aspect-square relative bg-gray-100 rounded-sm overflow-hidden shadow-sm">
                 <OptimizedImage src={images.craft05} alt="Craft Detail 5" fill className="object-cover" />
              </motion.div>
              <div className="md:col-span-1" />
            </motion.div>
          </div>

          <motion.div {...fadeInUp} className="text-center space-y-8 max-w-5xl mx-auto ">
             <p className="text-lg md:text-xl italic 2xl:text-3xl font-light leading-relaxed text-black">
                Each piece is thoughtfully designed and <span className="font-bold">made in India</span> using breathable, high-quality fabrics.
                <span className="italic">Balancing structure with fluidity, strength with comfort, and Precision with movement.</span>
             </p>
             
             <div className="pt-1 text-black">
                <h5 className="text-xl md:text-2xl 2xl:text-4xl font-serif italic">
                  Luxury without noise.
                </h5>
             </div>
          </motion.div>
        </div>
      </section>
        {/* 9. BRAND VOICE */}
      <section className="h-screen min-h-[750px] flex items-center justify-center bg-white px-4 md:px-0">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 text-center w-full">
          <motion.div {...fadeInUp} className="mb-12 md:mb-16">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-2 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">BRAND</span> 
              <span className="font-bold">VOICE</span>
            </h3>
          </motion.div>

          {/* Banner Strip */}
          <div className="w-full bg-[#E5D5C5] rounded-sm py-12 md:py-20 px-6 mb-12 md:mb-16 overflow-hidden relative">
             <motion.div {...fadeInUp} className="relative z-10 space-y-8">
                <div className="space-y-4">
                   <h4 className="text-6xl md:text-8xl lg:text-9xl font-serif italic lowercase tracking-tight" style={{ color: BRAND_BLUE }}>ninetofive</h4>
                   <p className="text-base md:text-xl lg:text-2xl tracking-[0.3em] font-light uppercase" style={{ color: BRAND_BLUE }}>Tailored to Lead</p>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                   {['Clear', 'Composed', 'Intentional'].map((pill) => (
                     <span key={pill} className="px-6 md:px-8 py-2 border border-[#1e4389]/30 rounded-full text-sm md:text-base font-light" style={{ color: BRAND_BLUE }}>{pill}</span>
                   ))}
                </div>
             </motion.div>
          </div>

          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
             <p className="text-lg md:text-2xl lg:text-3xl font-light text-black/70 leading-relaxed">
                9to5 speaks with quiet authority. No exaggeration. No noise.
             </p>
             <p className="text-lg md:text-2xl lg:text-3xl font-bold text-black mt-2">Only clarity and presence.</p>
          </motion.div>
        </div>
      </section>

      {/* 10. VISUAL DIRECTION */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white border-t border-black/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div {...fadeInUp} className="text-center mb-24">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-8 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">VISUAL</span> 
              <span className="font-bold">DIRECTION</span>
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl font-light text-black/70 italic">
               <p>A visual system defined by restraint and clarity.</p>
               <p>Neutral tones, structured compositions, and controlled imagery create a balance between authority and softness.</p>
               <p className="not-italic font-bold text-black pt-4">Every element is intentional. Nothing is excessive.</p>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="flex flex-col items-center justify-center space-y-6 md:space-y-10">
             {['Logo', 'Typography', 'Color palette', 'Layout system'].map((item) => (
               <motion.div key={item} variants={fadeInUp} className="text-4xl md:text-6xl lg:text-8xl 2xl:text-9xl font-light tracking-tighter text-black hover:italic hover:translate-x-4 transition-all duration-500 cursor-default">
                 {item}
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* 11. CAMPAIGN & SOCIAL DIRECTION */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white border-t border-black/5">
        <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <motion.div {...fadeInUp} className="text-center mb-24 md:mb-32">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-8 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">CAMPAIGN &</span> 
              <span className="font-bold">SOCIAL DIRECTION</span>
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-8 text-xl md:text-2xl font-light text-black/70">
               <p>The brand extends beyond design into how it is seen, experienced, and remembered.</p>
               <p>From campaign storytelling to everyday social presence, 9to5 maintains a consistent language of quiet confidence.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
             <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" viewport={{ amount: 0.2 }} className="relative aspect-[3/4] rounded-sm overflow-hidden group shadow-xl">
                <OptimizedImage src={images.campaignImg} alt="Campaign Direction" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <span className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase">Campaign</span>
                </div>
             </motion.div>
             
             <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" viewport={{ amount: 0.2 }} transition={{ delay: 0.2 }} className="relative aspect-[3/4] rounded-sm overflow-hidden group shadow-xl">
                <OptimizedImage src={images.socialImg} alt="Social Direction" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <span className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase">Social</span>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Noise Texture (Global Feel) */}
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
    </main>
  );
}
