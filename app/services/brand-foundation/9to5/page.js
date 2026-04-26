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
    brandOverviewTextImg: "https://res.cloudinary.com/dplv15n29/image/upload/v1777189351/Brand_overview_skmk2a.png", // Add your text image link here
    
    // 3. INSIGHT & IDEA
    insightImg: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/Image_2_hngjxu.jpg",
    ideaVisual: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382679/image_3_yvvfhf.jpg",
    
    // 7. PRODUCT STRATEGY
    strategyPortrait: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/image_4_cth9un.jpg",
    
    // 8. MATERIAL & CRAFT (Gallery 01-05)
    craft01: "https://res.cloudinary.com/dplv15n29/image/upload/v1777194736/925_label_post_juxeam.png",
    craft02: "https://res.cloudinary.com/dplv15n29/image/upload/v1777194885/Brand_Board_Page_1_Image_0008_wwizyn.jpg",
    craft03: "https://res.cloudinary.com/dplv15n29/image/upload/v1777195588/copy_of_brand_board_page_1_image_0007_qeqrqa_4caa9b.jpg",
    craft04: "https://res.cloudinary.com/dplv15n29/image/upload/v1777194756/_AR71235_tr4vyz.jpg",
    craft05: "https://res.cloudinary.com/dplv15n29/image/upload/v1777194749/_AR70644_esmwqg.jpg",
    // 9. BRAND VOICE
    voiceLogo: "https://res.cloudinary.com/dplv15n29/image/upload/v1775385243/copy_of_drilldown_czu9kb_b064f2.png",
    
    // 10. CAMPAIGN & SOCIAL
    campaignImg: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/image_4_cth9un.jpg",
    socialImg: "https://res.cloudinary.com/dplv15n29/image/upload/v1775382680/Image_2_hngjxu.jpg",
    
    // 11. EXTRA ASSETS
    brandVoiceBanner: "https://res.cloudinary.com/dplv15n29/image/upload/v1777199010/nine_to_5_pqkedj.png",
    logoImg1: "https://res.cloudinary.com/dplv15n29/image/upload/v1777209039/logo_1_sukb6r.png",
    logoImg2: "https://res.cloudinary.com/dplv15n29/image/upload/v1777209039/logo_2_bouuyh.png",
    logoImg3: "https://res.cloudinary.com/dplv15n29/image/upload/v1777209040/logo_3_gwf5qa.png",
    typographyImg1: "https://res.cloudinary.com/dplv15n29/image/upload/v1777210356/typography_9to5_nts5gi.png",
    typographyImg2: "https://res.cloudinary.com/dplv15n29/image/upload/v1777210356/typography_9to5_FONT_2_zrkgw9.png",
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
      <section className="relative min-h-screen pt-12 md:pt-24 pb-16 md:pb-24 overflow-hidden flex flex-col justify-start">
        {/* Background Gradient Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage src={images.brandOverviewBg} alt="Background Gradient" fill className="object-cover opacity-40" />
        </div>

        <motion.div 
          {...fadeInUp}
          className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-16 lg:px-24"
        >
          <div className="w-full flex flex-col items-center">
            {/* BRAND OVERVIEW IMAGE CONTAINER (Replace src with your text image) */}
            <motion.div 
              {...fadeInUp}
              className="relative w-full max-w-5xl aspect-[16/3] md:aspect-[16/4] flex items-center justify-center"
            >
              {/* 
                The user has an image of the text. 
                Replacing the previous text and icon cluster with this container.
              */}
              <div className="w-full h-full relative">
                 {images.brandOverviewTextImg !== "PASTE_YOUR_CLOUDINARY_LINK_HERE" ? (
                   <OptimizedImage 
                     src={images.brandOverviewTextImg} 
                     alt="Brand Overview Text" 
                     fill 
                     className="object-contain"
                   />
                 ) : (
                   <div className="text-center py-20 border-2 border-dashed border-black/10 rounded-xl">
                      <span className="text-xs uppercase tracking-widest text-black/40 mb-4 block">Brand Overview Image Placeholder</span>
                      <p className="text-sm text-black/30">Replace 'brandOverviewTextImg' link at line 42</p>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-light leading-[1.2] tracking-tight opacity-10 mt-8">
                        Designed for modern professionals...
                      </h3>
                   </div>
                 )}
              </div>
            </motion.div>
          </div>

          
          <motion.div {...fadeInUp} className="max-w-7xl mt-4 md:mt-8 2xl:mt-10">
            <h3 className="text-3xl md:text-5xl lg:text-5xl 2xl:text-6xl mb-8 flex flex-wrap items-center gap-x-4 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">THE</span> 
              <span className="font-bold">CHALLENGE</span>
            </h3>
            
            <motion.div className="space-y-6 md:space-y-8 text-lg md:text-xl 2xl:text-2xl font-light leading-relaxed max-w-5xl text-black/80">
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
        </motion.div>
      </section>

      {/* 3. UNDERSTANDING THE LANDSCAPE */}
      <section className="py-16 md:py-24 2xl:py-32 bg-white">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
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
        </motion.div>
      </section>

      {/* 4. THE INSIGHT */}
      <section className="h-screen min-h-[700px] flex items-center justify-center bg-[#f4f1ec] overflow-hidden">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 text-center w-full">
          <div className="mb-6 md:mb-8">
            <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">THE</span> 
              <span className="font-bold">INSIGHT</span>
            </h3>
            <p className="text-lg md:text-2xl 2xl:text-4xl font-light italic leading-none">Presence speaks before words do.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center w-full mt-6 md:mt-8 gap-12 md:gap-0">
            {/* Left Side (60%) - Contains first text and Image */}
            <div className="w-full md:w-[60%] flex flex-col md:flex-row items-center justify-center md:justify-end gap-8 md:pr-12">
              <motion.div {...fadeInUp} className="md:text-right">
                <p className="text-xl md:text-2xl 2xl:text-3xl font-light leading-tight">
                  Confidence today<br/>is <span className="font-bold italic">quiet.</span>
                </p>
              </motion.div>

              <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative w-full max-w-[280px] md:max-w-[400px] 2xl:max-w-[500px] aspect-square bg-gray-200 overflow-hidden rounded-sm">
                <OptimizedImage src={images.insightImg} alt="Insight Portrait" fill className="object-cover" />
              </motion.div>
            </div>

            {/* Right Side (40%) - Contains remaining text */}
            <div className="w-full md:w-[40%] flex items-center justify-center md:justify-start md:pl-12">
              <motion.div {...fadeInUp} className="space-y-2 text-center md:text-left">
                <p className="text-xl md:text-2xl 2xl:text-4xl font-light">
                  It does not demand <span className="font-bold italic">attention.</span>
                </p>
                <p className="text-xl md:text-2xl 2xl:text-4xl font-light">
                  It does not need <span className="font-bold italic">validation.</span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 5. THE IDEA */}
      <section className="h-screen min-h-[750px] flex items-center justify-center bg-white text-center py-12 overflow-hidden">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 flex flex-col justify-between h-full">
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
        </motion.div>
      </section>

      {/* 6. BRAND PHILOSOPHY */}
      <section className="py-16 md:py-18 2xl:py-24 bg-white overflow-hidden">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-24 md:mb-32">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-2 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">BRAND</span> 
              <span className="font-bold">PHILOSOPHY</span>
            </h3>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
              {/* Left Statement */}
              <motion.div {...fadeInUp} className="text-4xl md:text-6xl lg:text-7xl 2xl:text-7xl font-extralight leading-tight tracking-tight" style={{ color: BRAND_BLUE }}>
                The woman<br/> 
                has always<br/> 
                been the<br/> 
                <span className="font-bold">power</span>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="text-center space-y-8 md:space-y-12 text-black">
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
        </motion.div>
      </section>

      {/* 7. PRODUCT STRATEGY */}
      <section className="h-screen min-h-[700px] flex items-center  justify-center bg-[#f4f1ec] overflow-hidden">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 w-full flex flex-col items-center">
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
        </motion.div>
      </section>

      {/* 8. MATERIAL & CRAFT */}
      <section className="pt-16 md:pt-24 2xl:pt-32 pb-12 md:pb-16 bg-white overflow-hidden">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-12 md:mb-16">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-2 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">MATERIAL</span> 
              <span className="font-bold">& CRAFT</span>
            </h3>
          </div>

          {/* Masonry-style Geometry Gallery (Scaled down with animations) */}
          <div className="max-w-5xl mx-auto mb-10 md:mb-12">
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
        </motion.div>
      </section>
        {/* 9. BRAND VOICE */}
      <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-white px-4 md:px-0">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24 text-center w-full">
          <div className="mb-6 md:mb-8">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-2 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">BRAND</span> 
              <span className="font-bold">VOICE</span>
            </h3>
          </div>

          {/* Banner Strip - Replaced with Full Width Image */}
          <div className="w-full rounded-sm mb-6 md:mb-8 overflow-hidden relative aspect-[21/9] md:aspect-[21/7]">
             {images.brandVoiceBanner !== "PASTE_YOUR_CLOUDINARY_LINK_HERE" ? (
               <motion.div {...fadeInUp} className="relative w-full h-full">
                 <OptimizedImage 
                   src={images.brandVoiceBanner} 
                   alt="Brand Voice Banner" 
                   fill 
                   className="object-cover" 
                 />
               </motion.div>
             ) : (
               <div className="w-full h-full bg-[#E5D5C5] flex items-center justify-center p-12">
                 <div className="text-center">
                   <span className="text-xs uppercase tracking-widest text-black/30 mb-4 block">Brand Voice Banner Placeholder</span>
                   <p className="text-sm text-black/20">Replace 'brandVoiceBanner' link at line 64</p>
                 </div>
               </div>
             )}
          </div>

          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
             <p className="text-lg md:text-2xl lg:text-3xl font-light text-black/70 leading-relaxed">
                9to5 speaks with quiet authority. No exaggeration. No noise.
             </p>
             <p className="text-lg md:text-2xl lg:text-3xl font-bold text-black mt-2">Only clarity and presence.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* 10. THE LOGO */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-[#F8F5F0]">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-16 md:mb-24">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">THE</span> 
              <span className="font-bold">LOGO</span>
            </h3>
          </div>

          <div className="space-y-8 md:space-y-12">
            {/* Top Row: Two Symmetrical Squares */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative aspect-square overflow-hidden bg-white shadow-sm">
                {images.logoImg1 !== "PASTE_YOUR_CLOUDINARY_LINK_HERE" ? (
                  <OptimizedImage src={images.logoImg1} alt="Logo Construction" fill className="object-contain p-8 md:p-12" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-black/20 uppercase tracking-[0.2em]">Logo Construction</div>
                )}
              </motion.div>
              <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative aspect-square overflow-hidden bg-white shadow-sm">
                {images.logoImg2 !== "PASTE_YOUR_CLOUDINARY_LINK_HERE" ? (
                  <OptimizedImage src={images.logoImg2} alt="Logo Color System" fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-black/20 uppercase tracking-[0.2em]">Logo System</div>
                )}
              </motion.div>
            </div>

            {/* Bottom Row: Full Width Banner */}
            <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-white shadow-sm">
              {images.logoImg3 !== "PASTE_YOUR_CLOUDINARY_LINK_HERE" ? (
                <OptimizedImage src={images.logoImg3} alt="Logo Detail" fill className="object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-black/20 uppercase tracking-[0.3em]">Logo Detail Banner</div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 11. TYPOGRAPHY */}
      <section className="py-24 md:py-32 bg-[#F8F5F0]">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="mb-12 md:mb-16">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">THE</span> 
              <span className="font-bold">TYPOGRAPHY</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative aspect-square overflow-hidden bg-white shadow-sm">
               {images.typographyImg1 !== "PASTE_YOUR_CLOUDINARY_LINK_HERE" ? (
                 <OptimizedImage src={images.typographyImg1} alt="Typography 1" fill className="object-contain p-8 md:p-12" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-black/20 uppercase tracking-[0.2em]">Typography 1</div>
               )}
            </motion.div>
            <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative aspect-square overflow-hidden bg-white shadow-sm">
               {images.typographyImg2 !== "PASTE_YOUR_CLOUDINARY_LINK_HERE" ? (
                 <OptimizedImage src={images.typographyImg2} alt="Typography 2" fill className="object-contain p-8 md:p-12" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-black/20 uppercase tracking-[0.2em]">Typography 2</div>
               )}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 12. COLOR PALETTE */}
      <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-[#F8F5F0]">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          <div className="text-center mb-8 md:mb-12">
             <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl mb-4 flex flex-wrap items-center justify-center gap-x-3 tracking-tight uppercase" style={{ color: BRAND_BLUE }}>
              <span className="font-extralight">COLOR</span> 
              <span className="font-bold">PALETTE</span>
            </h3>
          </div>

          <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto">
            {[
              { name: 'ABSTRACT NAVY', hex: '#1A2B44', text: 'white' },
              { name: 'WHITE TINT', hex: '#F5F5F5', text: '#1A2B44' },
              { name: 'FRENCH OAK', hex: '#B5A595', text: 'white' },
              { name: 'CORK', hex: '#A68266', text: 'white' }
            ].map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-20 md:h-28 rounded-sm flex items-center justify-between px-8 md:px-12 origin-left relative overflow-hidden group shadow-sm"
                style={{ backgroundColor: color.hex }}
              >
                <span className="text-xl md:text-3xl font-light tracking-[0.1em] z-10" style={{ color: color.text }}>
                  {color.name}
                </span>
                <span className="text-sm md:text-base font-mono opacity-50 group-hover:opacity-100 transition-opacity duration-300 z-10" style={{ color: color.text }}>
                  {color.hex}
                </span>
                {/* Subtle shine effect */}
                <motion.div 
                  initial={{ x: '-100%' }}
                  whileInView={{ x: '100%' }}
                  transition={{ duration: 2, delay: index * 0.1 + 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 13. CAMPAIGN & SOCIAL DIRECTION */}
      <section className="py-24 md:py-32 bg-white">
        <motion.div {...fadeInUp} className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">
          {/* Header */}
          <div className="flex flex-col items-center mb-16 md:mb-24">
            <div className="flex items-center mb-10">
              <h3 className="text-3xl md:text-5xl lg:text-6xl tracking-tight uppercase flex flex-wrap items-center justify-center gap-x-4 text-center" style={{ color: BRAND_BLUE }}>
                <span className="font-extralight">CAMPAIGN &</span> 
                <span className="font-bold">SOCIAL DIRECTION</span>
              </h3>
            </div>
            
            <div className="max-w-4xl text-center space-y-6">
              <p className="text-lg md:text-2xl font-light text-black/70 leading-relaxed">
                The brand extends beyond design into how it is seen, experienced, and remembered.
              </p>
              <p className="text-lg md:text-2xl font-light text-black/70 leading-relaxed">
                From campaign storytelling to everyday social presence, 9to5 maintains a consistent language of quiet confidence.
              </p>
            </div>
          </div>

          {/* Symmetrical Grid with Overlays */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
             <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative aspect-[3/4] rounded-sm overflow-hidden group shadow-xl">
                <OptimizedImage src={images.campaignImg} alt="Campaign Direction" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                   <h4 className="text-white text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase drop-shadow-2xl">Campaign</h4>
                </div>
             </motion.div>
             
             <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" transition={{ delay: 0.2 }} className="relative aspect-[3/4] rounded-sm overflow-hidden group shadow-xl">
                <OptimizedImage src={images.socialImg} alt="Social Direction" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                   <h4 className="text-white text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase drop-shadow-2xl">Social</h4>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </section>
      <div 
        className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      ></div>
    </main>
  );
}
