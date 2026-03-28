'use client';

import React from 'react';
import OptimizedImage from '@/app/components/OptimizedImage';
import { motion } from 'framer-motion';

// Soothing Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInScale = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
};

const textReveal = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: "easeOut" }
};

export default function TakhatVillasCaseStudy() {
  return (
    <main className="bg-[#FFFBF5] min-h-screen">
      {/* Hero Background Banner */}
      <div className="relative w-full h-[55vh] min-h-[450px] lg:h-[60vh]">
        <OptimizedImage
           src="https://res.cloudinary.com/dplv15n29/image/upload/v1774680465/gradient_lyhoif.png" 
           alt="Hero Background Gradient"
           fill
           priority
           className="object-cover"
        />
        {/* Noise overlay */}
        <div 
           className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end md:justify-start pb-16 md:pb-0 pt-32 md:pt-40 px-6 md:px-16 lg:px-24">
           <div className="max-w-7xl mx-auto w-full">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.2 }}
               className="flex flex-wrap items-center gap-2 md:gap-4 text-[9px] sm:text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[#9a1b40] uppercase mb-6 md:mb-10"
             >
                <span className="border border-black rounded-full px-4 md:px-5 py-1.5 backdrop-blur-sm">2024</span>
                <span className="h-[1px] w-4 sm:w-6 md:w-8 bg-[#9a1b40]/40"></span>
                <span className="border border-black rounded-full px-4 md:px-5 py-1.5 backdrop-blur-sm">Brand foundation</span>
                <span className="h-[1px] w-4 sm:w-6 md:w-8 bg-[#9a1b40]/40"></span>
                <span className="border border-black rounded-full px-4 md:px-5 py-1.5 backdrop-blur-sm">Case study</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            >
              <p className="text-lg md:text-2xl text-[#9a1b40]/80 font-light mb-2 md:mb-4">Project 1</p>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-[#9a1b40] tracking-tight">Takhat Villas</h1>
            </motion.div>
           </div>
        </div>
      </div>

      {/* Main Content Area */}
      <motion.div 
        {...fadeInUp} 
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24 pb-2"
      >
          {/* Container for Intro Text and Overlapping Arch Image */}
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 w-full relative">
            
            {/* Left Intro Text (on white bg) */}
            <div className="flex-1 lg:pr-12 pt-16">
                <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="space-y-6 max-w-xl text-black">
                    <motion.h2 variants={textReveal} className="text-xl md:text-2xl text-[#9a1b40] font-light leading-snug">Quiet luxury retreat in the Aravalli hills</motion.h2>
                    <motion.p variants={textReveal} className="font-medium text-lg md:text-xl text-black">Brand Strategy & Visual Identity</motion.p>
                    <motion.div variants={textReveal} className="flex flex-wrap gap-4 text-xs italic text-[#9a1b40] font-serif pt-2 pb-2">
                        <span className="border border-black rounded-full px-5 py-1.5">Hospitality Brand</span>
                        <span className="border border-black rounded-full px-5 py-1.5">Rajasthan, India</span>
                        <span className="border border-black rounded-full px-5 py-1.5">Brand Foundations</span>
                    </motion.div>
                    <motion.p variants={textReveal} className="text-base md:text-lg leading-relaxed pt-2 text-black">
                       Travellers today seek meaningful experiences rather than simply accommodation. Takhat Villas was developed as a retreat that reconnects guests with landscape, heritage, and slower living.
                    </motion.p>
                </motion.div>
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="border-b border-black mt-16"
                ></motion.div>
            </div>
            
            {/* Right Arch Image - Overlapping */}
            <motion.div 
              variants={fadeInScale}
              initial="initial"
              whileInView="whileInView"
              className="flex-1 relative lg:-mt-64 flex justify-center lg:justify-end z-20"
            >
               <div className="relative w-full aspect-[3/4] max-w-md lg:max-w-[480px] shrink-0" style={{ borderTopLeftRadius: '50% 30%', borderTopRightRadius: '50% 30%' }}>
                  <OptimizedImage
                      src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483368/Brand_Guidelines__page-0011_mk5zld.jpg" 
                      alt="Takhat Villas Arch Vista"
                      fill
                      className="object-cover rounded-t-[50%]"
                      style={{ borderTopLeftRadius: '50% 30%', borderTopRightRadius: '50% 30%' }}
                  />
               </div>
            </motion.div>
          </div>
      </motion.div>

      {/* Content Sections */}
      <div className="w-full max-w-7xl mx-auto mt-20 md:mt-32">
          {/* Story and Challenge */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start px-6 md:px-16 lg:px-24"
          >
             <div className="space-y-16 md:space-y-20">
                <motion.section variants={fadeInUp} className="space-y-6 md:space-y-8">
                    <h3 className="text-3xl md:text-4xl font-light text-[#9a1b40]">The Story of Takhat Villas</h3>
                    <div className="space-y-6 text-black leading-relaxed text-base md:text-lg">
                        <p>The Kumbhalgarh region attracts travelers seeking nature, wildlife, and cultural heritage. Surrounded by the Aravalli ranges and home to the Kumbhalgarh Wildlife Sanctuary, the area draws wildlife enthusiasts, photographers, and travelers looking for immersive experiences beyond traditional tourism.</p>
                        <p>Hospitality in this region ranges from grand heritage palace hotels to small boutique homestays. While palace hotels emphasize scale and spectacle, boutique stays offer intimacy but often lack a strong brand narrative.</p>
                        <p>Understanding this landscape revealed an opportunity for Takhat Villas to occupy a distinct position: a refined retreat that blends heritage, nature, and slower living into a calm and memorable hospitality experience.</p>
                    </div>
                </motion.section>
                
                <motion.section variants={fadeInUp} className="space-y-8">
                    <h3 className="text-3xl md:text-4xl font-light text-[#9a1b40]">The Challenge</h3>
                    <h4 className="font-bold text-black text-xl font-serif">Defining a Distinct Identity</h4>
                    <div className="space-y-6 text-black leading-relaxed text-base md:text-lg">
                        <p>Despite its unique location and architectural character, Takhat Villas initially lacked a clear brand narrative.</p>
                        <p>The hospitality market in Rajasthan is highly competitive, ranging from grand palace hotels to independent boutique stays. Without a defined strategic identity, the property risked blending into a crowded landscape.</p>
                        <p>The challenge was to translate the villa's environment, heritage setting, and wildlife proximity into a distinctive brand experience that guests would immediately recognise and remember.</p>
                    </div>
                </motion.section>
             </div>

             <motion.div variants={fadeInScale} className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl lg:mt-8">
                 <OptimizedImage 
                    src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483304/Brand_Guidelines__page-0003_ohbdtm.jpg" 
                    alt="Watercolor painting of fort"
                    fill
                    className="object-cover"
                 />
             </motion.div>
          </motion.div>

          {/* Grid of Images Placeholder */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-20 md:mt-32 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-6 md:px-16 lg:px-24"
          >
             {[1, 2, 3].map((i) => (
                <motion.div key={i} variants={fadeInScale} className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-md">
                   <OptimizedImage 
                     src={i === 1 ? "https://res.cloudinary.com/dplv15n29/image/upload/v1772483334/Brand_Guidelines__page-0008_krvxdy.jpg" : 
                          i === 2 ? "https://res.cloudinary.com/dplv15n29/image/upload/v1772483329/Brand_Guidelines__page-0006_tvtnzn.jpg" : 
                          "https://res.cloudinary.com/dplv15n29/image/upload/v1772483326/Brand_Guidelines__page-0009_n6r0vk.jpg"} 
                     alt={`Grid Image ${i}`} 
                     fill 
                     className="object-cover hover:scale-105 transition-transform duration-700" 
                   />
                </motion.div>
             ))}
             <motion.div variants={fadeInScale} className="col-span-2 lg:col-span-2 aspect-video relative rounded-lg overflow-hidden shadow-md">
                <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483320/Brand_Guidelines__page-0007_qwzocb.jpg" alt="Grid Image 4" fill className="object-cover" />
             </motion.div>
             <motion.div variants={fadeInScale} className="aspect-square relative rounded-lg overflow-hidden shadow-md">
                <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483314/Brand_Guidelines__page-0005_boz05g.jpg" alt="Grid Image 5" fill className="object-cover" />
             </motion.div>
          </motion.div>

          {/* Research & Discovery */}
          <div className="px-6 md:px-16 lg:px-24">
            <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="mt-20 md:mt-32 max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-light text-[#9a1b40] mb-8 text-center md:text-left">Research & Discovery</h3>
                <h4 className="font-bold text-black text-xl font-serif mb-6 text-center md:text-left">Understanding the Landscape</h4>
                <div className="space-y-6 text-black leading-relaxed text-base md:text-lg mb-16 text-center md:text-left">
                    <p>The Kumbhalgarh region attracts travelers seeking nature, wildlife, and cultural heritage. Surrounded by the Aravalli ranges and home to the Kumbhalgarh Wildlife Sanctuary, the area draws wildlife enthusiasts, photographers, and travelers looking for immersive experiences beyond traditional tourism.</p>
                    <p>Hospitality in this region ranges from grand heritage palace hotels to small boutique homestays. While palace hotels emphasize scale and spectacle, boutique stays offer intimacy but often lack a strong brand narrative.</p>
                    <p>Understanding this landscape revealed an opportunity for Takhat Villas to occupy a distinct position: a refined retreat that blends heritage, nature, and slower living into a calm and memorable hospitality experience.</p>
                </div>
            </motion.div>
          </div>

          {/* Full width image (Gate) */}
          <div className="px-6 md:px-16 lg:px-24">
            <motion.div variants={fadeInScale} initial="initial" whileInView="whileInView" className="relative w-full aspect-[21/9] md:aspect-[2.5/1] mb-20 md:mb-32 rounded-xl overflow-hidden shadow-2xl">
                <OptimizedImage 
                    src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483299/Brand_Guidelines__page-0004_qsnpzq.jpg" 
                    alt="Gate Entrance"
                    fill
                    className="object-cover"
                />
            </motion.div>
          </div>

          {/* Audience Insights / Market Landscape */}
          <div className="space-y-20 md:space-y-32 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="space-y-8 md:space-y-10 max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-light text-[#9a1b40] mb-6 md:mb-8 text-center md:text-left">Audience Insights</h3>
                <div className="space-y-8 text-black leading-relaxed text-lg md:text-xl font-light">
                   <p>Travelers visiting the Kumbhalgarh region are typically seeking experiences that feel <strong className="text-black font-medium">calm</strong>, <strong className="text-black font-medium">immersive</strong>, and <strong className="text-black font-medium">connected to nature</strong>.</p>
                   <p>The primary audience includes <strong className="text-black font-medium">wildlife enthusiasts</strong>, <strong className="text-black font-medium">photographers</strong>, and <strong className="text-black font-medium">urban travellers</strong> looking to escape busy city environments. These travellers value authenticity, atmosphere, and meaningful experiences over traditional luxury hotel formats.</p>
                   <p>For this audience, accommodation is only one part of the journey. What they truly seek is a sense of <em className="font-serif text-[#9a1b40]/80">place, story, and emotional connection</em> with the landscape.</p>
                </div>
             </motion.section>

             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="space-y-12 flex flex-col items-center pt-16 border-t border-black">
                <h3 className="text-4xl md:text-6xl font-bold italic text-[#9a1b40] mb-4 text-center" style={{ fontFamily: "var(--font-heading)" }}>Market Landscape</h3>
                <div className="text-center md:text-left w-full max-w-5xl mx-auto">
                    <h4 className="font-bold text-black text-lg md:text-xl font-serif mb-4">Mapping the Hospitality Environment</h4>
                    <p className="text-black text-base md:text-lg mb-8">The hospitality landscape in Rajasthan sits between <em className="font-serif text-[#9a1b40]">two dominant formats</em>.</p>
                    <p className="text-black text-base md:text-lg mb-6 leading-relaxed">
                        <em className="font-serif font-medium text-black">Large palace hotels</em> emphasise grandeur, heritage spectacle, and large-scale luxury experiences. At the other end of the spectrum, <em className="font-serif font-medium text-black">boutique homestays</em> offer smaller and more personal environments but often lack a clearly defined brand identity.
                    </p>
                    <p className="text-[#9a1b40] text-base md:text-lg leading-relaxed">
                        <em className="font-serif">Takhat Villas</em> occupies a distinctive position between these two worlds, offering a refined retreat where heritage architecture, natural surroundings, and quiet luxury coexist.
                    </p>
                </div>

                <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full max-w-5xl mx-auto mt-8">
                     {[
                       { title: "LUXURY PALACE HOTEL", img: "Brand_Guidelines__page-0016_ahhyjc.jpg", lines: ["Grand heritage architecture and large scale hospitality", "Emphasis on luxury, spectacle, and royal experience", "Often formal, expansive, and destination driven"] },
                       { title: "TAKHAT VILLAS", highlights: true, img: "Brand_Guidelines__page-0016_ahhyjc.jpg", lines: ["Intimate retreat rooted in nature and heritage", "Quiet luxury with a slower, immersive experience", "Positioned between large resorts and boutique stays"] },
                       { title: "BOUTIQUE HOMESTAYS", img: "Brand_Guidelines__page-0016_ahhyjc.jpg", lines: ["Small independent stays with personal hospitality", "Focus on comfort, simplicity, and local character", "Often limited brand identity or curated experience"] }
                     ].map((item, idx) => (
                       <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center text-center space-y-6">
                          <h5 className="font-black text-black tracking-[0.1em] text-[13px] md:text-[15px] uppercase">{item.title}</h5>
                          <div className="relative w-full aspect-[4/3] max-w-[280px]">
                              <OptimizedImage src={`https://res.cloudinary.com/dplv15n29/image/upload/v1772483349/${item.img}`} alt={item.title} fill className="object-contain mix-blend-multiply" />
                          </div>
                          <div className={`text-xs md:text-sm ${item.highlights ? 'text-[#9a1b40] italic font-serif' : 'text-black font-medium'} space-y-2`}>
                             {item.lines.map((l, i) => <p key={i}>{l}</p>)}
                          </div>
                       </motion.div>
                     ))}
                </motion.div>
             </motion.section>

             {/* Cultural Inspiration */}
             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="space-y-8 flex flex-col items-center pt-20 md:pt-32 border-t border-black max-w-4xl mx-auto text-center">
                 <h3 className="text-4xl md:text-5xl font-light text-[#9a1b40]">Cultural Inspiration</h3>
                 <p className="text-[13px] tracking-widest text-black font-medium uppercase">A Brand Rooted in Place</p>
                 <div className="space-y-4 text-black font-medium leading-relaxed text-base md:text-[15px] pt-4 max-w-3xl">
                     <p>The identity of Takhat Villas draws deeply from its surroundings. The Aravalli ranges provide a rugged and timeless landscape, while Rajasthan's architectural heritage introduces craftsmanship, stone textures, and a sense of history.</p>
                     <p>Together these elements create a visual language that feels grounded, authentic, and deeply connected to the surrounding landscape.</p>
                 </div>
             </motion.section>

             {/* Brand Positioning */}
             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="grid md:grid-cols-2 gap-16 md:gap-24 items-center pt-20 md:pt-32 border-t border-black">
                  <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-8">
                     <motion.h3 variants={textReveal} className="text-4xl md:text-5xl font-light text-[#9a1b40]">Brand Positioning</motion.h3>
                     <motion.div variants={textReveal} className="space-y-6 text-black leading-relaxed text-base md:text-[15px] font-medium">
                        <p>Takhat Villas is positioned as an intimate retreat where travelers reconnect with nature, heritage, and slower rhythm of living.</p>
                        <p>Rather than competing with large luxury resorts or informal homestays, the brand sits in a refined middle ground offering a calm and immersive hospitality experience.</p>
                     </motion.div>
                  </motion.div>
                  <motion.div variants={fadeInScale} className="relative w-full aspect-[16/9] shadow-md rounded-lg overflow-hidden border border-black">
                      <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483320/Brand_Guidelines__page-0007_qwzocb.jpg" fill alt="Brand positioning" className="object-cover" />
                  </motion.div>
             </motion.section>

             {/* Brand Personality */}
             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="flex flex-col md:flex-row gap-12 pt-20 md:pt-32 border-t border-black items-start">
                  <h3 className="text-4xl md:text-6xl font-bold italic text-[#9a1b40] leading-tight md:w-1/3" style={{ fontFamily: "var(--font-heading)" }}>Brand<br/>Personality</h3>
                  <div className="md:w-2/3 space-y-8 mt-2 md:mt-0">
                      <h4 className="text-lg md:text-xl text-black font-medium font-serif">The Character of the Brand</h4>
                      <p className="text-black text-[15px] leading-relaxed font-medium">
                         The personality of Takhat Villas reflects calm elegance and natural refinement. The brand communicates a sense of quiet luxury that feels grounded rather than extravagant.
                      </p>
                      <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="flex flex-wrap gap-3 md:gap-4 pt-4">
                          {["Calm", "Refined", "Nature-connected", "Authentic", "Intimate"].map(tag => (
                              <motion.span key={tag} variants={fadeInScale} className="border border-black rounded-full px-5 py-1.5 md:px-8 md:py-2 text-[#9a1b40] italic font-serif text-[14px] md:text-[15px]">
                                  {tag}
                              </motion.span>
                          ))}
                      </motion.div>
                  </div>
             </motion.section>

             {/* Identity System */}
             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="flex flex-col md:flex-row gap-16 md:gap-24 pt-20 md:pt-32 border-t border-black items-center">
                  <div className="space-y-10 md:w-1/2 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                           <h3 className="text-4xl md:text-[50px] font-medium text-[#9a1b40] leading-none" style={{ fontFamily: "var(--font-heading)" }}>Identity<br/>System</h3>
                           <div className="flex gap-3 h-fit mt-2 sm:mt-0">
                               <span className="border border-black rounded-full px-5 py-1 text-[#9a1b40] italic font-serif text-[11px]">Calm</span>
                               <span className="border border-black rounded-full px-5 py-1 text-[#9a1b40] italic font-serif text-[11px]">Refined</span>
                           </div>
                      </div>
                      <div className="space-y-6 max-w-lg">
                          <h4 className="text-3xl md:text-[40px] font-bold italic text-[#9a1b40]" style={{ fontFamily: "var(--font-heading)" }}>.1 Brand Logo</h4>
                          <p className="text-black leading-relaxed text-[15px] font-medium">
                              The Takhat Villas logo reflects simplicity and clarity while maintaining a timeless character. Its form draws inspiration from organic patterns and heritage symbolism, creating a mark that feels both refined and distinctive.
                          </p>
                      </div>
                  </div>
                  <motion.div variants={fadeInScale} className="w-full md:w-1/2 relative aspect-[4/3] bg-[#ebebeb] rounded-[2rem] overflow-hidden flex items-center justify-center p-12 shrink-0">
                      <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483329/Brand_Guidelines__page-0006_tvtnzn.jpg" fill alt="Logo system" className="object-contain scale-75 mix-blend-multiply" />
                  </motion.div>
             </motion.section>

             {/* Logo Variations & Typography */}
             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="pt-20 md:pt-32 pb-20 md:pb-32 border-t border-black flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                 <div className="md:w-[55%] space-y-16">
                     <div className="space-y-4">
                         <h3 className="text-[50px] md:text-[60px] font-black text-[#111] uppercase tracking-tighter leading-[0.9]" style={{ fontFamily: "var(--font-heading)" }}>LOGO<br/>VARIATIONS</h3>
                         <p className="text-black text-[13px] md:text-[15px] font-medium max-w-sm pt-2">Use alternative versions only when suitable and always maintain clear space and proper proportions.</p>
                     </div>
                     
                     <motion.div variants={fadeInUp} className="space-y-6">
                         <h4 className="text-[17px] font-bold text-black border-b border-black pb-4 mb-8">Primary Typeface</h4>
                         <div className="flex flex-col sm:flex-row gap-12 bg-[#ffce9e] p-8 md:p-10 rounded-sm">
                             <div className="flex-1 space-y-6 text-white text-[13px]">
                                <p className="font-bold text-white text-[15px]">Helvetica World</p>
                                <p className="font-light tracking-[0.2em] break-all leading-loose">A B C D E F G H I J K L M N<br/>O P Q R S T U V W X Y Z<br/>a b c d e f h i j k l m n o p<br/>q r s t u v w x y z<br/>1 2 3 4 5 6 7 8 9 0  ! @ # $ % ^ & * ( ) _ +</p>
                             </div>
                             <div className="w-px bg-white/50 hidden sm:block"></div>
                             <div className="flex-1 space-y-6 text-white text-[13px]">
                                <p className="font-bold text-white text-[15px]">Canva Sans</p>
                                <p className="font-light tracking-[0.2em] break-all leading-loose">A B C D E F G H I J K L M N<br/>O P Q R S T U V W X Y Z<br/>a b c d e f h i j k l m n o p<br/>q r s t u v w x y z<br/>1 2 3 4 5 6 7 8 9 0  ! @ # $ % ^ & * ( ) _ +</p>
                             </div>
                         </div>
                     </motion.div>
                 </div>

                 <motion.div variants={fadeInScale} className="md:w-[45%] flex flex-col items-center justify-center space-y-8 w-full h-full min-h-[400px] md:border-l border-black">
                     <div className="relative w-full max-w-[280px] h-[150px]">
                         <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483326/Brand_Guidelines__page-0009_n6r0vk.jpg" fill alt="Horizontal Logo Layout" className="object-contain mix-blend-multiply" />
                     </div>
                     <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-black">Horizontal Layout</p>
                 </motion.div>
             </motion.section>

             {/* .2 Typography Section */}
             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="flex flex-col md:flex-row gap-16 md:gap-24 pt-20 md:pt-32 border-t border-black items-start">
                 <div className="md:w-1/2 space-y-10">
                     <h4 className="text-3xl md:text-[40px] font-bold italic text-[#9a1b40]" style={{ fontFamily: "var(--font-heading)" }}>.2 Typography</h4>
                     <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="space-y-6 text-[#111]">
                         {["light", "light oblique", "regular", "oblique", "bold", "bold oblique"].map((style) => (
                           <motion.div key={style} variants={textReveal} className="flex items-end gap-3">
                             <span className={`text-3xl sm:text-4xl md:text-5xl ${style.includes('light') ? 'font-light' : style.includes('bold') ? 'font-bold' : ''} ${style.includes('oblique') ? 'italic' : ''}`}>Helvetica</span>
                             <span className="text-[10px] md:text-[11px] font-bold tracking-wider text-black pb-0 md:pb-1">({style})</span>
                           </motion.div>
                         ))}
                     </motion.div>
                 </div>
                 <motion.div variants={fadeInScale} className="md:w-1/2 mt-12 md:mt-0 w-full">
                     <div className="border border-black bg-white">
                         <div className="py-8 text-center border-b border-black">
                             <span className="text-3xl md:text-4xl text-black font-light tracking-wide">canva sans</span>
                         </div>
                         <div className="bg-[#050505] text-white p-6 sm:p-8 md:p-12 space-y-6 overflow-x-hidden">
                            <p className="font-light tracking-[0.2em] md:tracking-[0.3em] font-mono break-all leading-[2.2] md:leading-[2.5] text-[10px] sm:text-[11px] md:text-[15px] text-center">
                               A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br/>
                               a b c d e f g h i j k l m n o p q r s t u v w x y z<br/>
                               1 2 3 4 5 6 7 8 9 0  , . - ( ) ! ? /
                            </p>
                         </div>
                     </div>
                 </motion.div>
             </motion.section>

             {/* .2 Color Palette Section */}
             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="flex flex-col gap-16 pt-20 md:pt-32 border-t border-black">
                 <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                     <h4 className="text-3xl md:text-[40px] font-bold italic text-[#9a1b40] shrink-0" style={{ fontFamily: "var(--font-heading)" }}>.2 Color Palette</h4>
                     <p className="text-black leading-relaxed text-[15px] font-medium max-w-lg">
                        The color palette reflects the natural environment surrounding Takhat Villas. Warm earth tones, soft neutrals, and muted accents create a visual language that feels grounded, natural, and timeless.
                     </p>
                 </div>
                 
                 <div className="w-full flex flex-col items-center gap-6">
                     <motion.div 
                       initial={{ scaleX: 0 }}
                       whileInView={{ scaleX: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                       className="w-full h-24 md:h-32 bg-[#A88062] rounded-[2rem] flex items-center justify-end px-8 md:px-12 origin-left"
                     >
                         <span className="text-white font-bold text-3xl md:text-4xl tracking-wide">#066CF4</span>
                     </motion.div>
                     <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="flex w-full justify-between gap-2 sm:gap-3 overflow-x-auto pb-4 no-scrollbar">
                         {[100, 90, 80, 70, 60, 50, 40, 30, 20, 10].map(opacity => (
                             <motion.div key={opacity} variants={fadeInScale} className="flex flex-col items-center gap-3 md:gap-4 min-w-[50px] sm:min-w-[60px] md:min-w-[80px] flex-1">
                                 <div className="w-full aspect-square rounded-xl md:rounded-[1.5rem] bg-[#A88062]" style={{ opacity: opacity / 100 }}></div>
                                 <span className="text-[10px] md:text-[11px] font-bold text-black">{opacity}%</span>
                             </motion.div>
                         ))}
                     </motion.div>
                 </div>
             </motion.section>

             {/* .2 Brand Applications Section */}
             <motion.section variants={fadeInUp} initial="initial" whileInView="whileInView" className="flex flex-col gap-16 pt-20 md:pt-32 pb-32 border-t border-black">
                 <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                     <h4 className="text-3xl md:text-[40px] font-bold italic text-[#9a1b40] shrink-0" style={{ fontFamily: "var(--font-heading)" }}>.2 Brand Applications</h4>
                     <p className="text-black leading-relaxed text-[15px] font-medium max-w-lg">
                        The color palette reflects the natural environment surrounding Takhat Villas. Warm earth tones, soft neutrals, and muted accents create a visual language that feels grounded, natural, and timeless.
                     </p>
                 </div>

                 {/* Browser Mockup Gallery Grid */}
                 <motion.div variants={fadeInScale} className="w-full rounded-tr-xl rounded-tl-xl border border-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] bg-white overflow-hidden mt-8">
                     <div className="bg-[#ebebeb] h-10 md:h-12 w-full flex items-center px-4 md:px-6 gap-2 md:gap-2.5 border-b border-black">
                         <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#ff5f56]"></div>
                         <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#ffbd2e]"></div>
                         <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[#27c93f]"></div>
                     </div>
                     <div className="p-5 sm:p-8 md:p-12 lg:p-16 bg-white">
                         <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                             <motion.div variants={fadeInScale} className="md:col-span-8 aspect-[4/3] relative overflow-hidden bg-gray-100">
                                 <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483320/Brand_Guidelines__page-0007_qwzocb.jpg" alt="Application 1" fill className="object-cover" />
                             </motion.div>
                             <motion.div variants={fadeInScale} className="md:col-span-4 aspect-square md:aspect-[3/4] relative overflow-hidden bg-gray-100">
                                 <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483329/Brand_Guidelines__page-0006_tvtnzn.jpg" alt="Application 2" fill className="object-cover" />
                             </motion.div>
                             <motion.div variants={fadeInScale} className="md:col-span-4 aspect-square relative overflow-hidden bg-gray-100">
                                 <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483314/Brand_Guidelines__page-0005_boz05g.jpg" alt="Application 3" fill className="object-cover" />
                             </motion.div>
                             <motion.div variants={fadeInScale} className="md:col-span-4 aspect-square relative overflow-hidden bg-gray-100">
                                 <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483326/Brand_Guidelines__page-0009_n6r0vk.jpg" alt="Application 4" fill className="object-cover" />
                             </motion.div>
                             <motion.div variants={fadeInScale} className="md:col-span-4 aspect-square relative overflow-hidden bg-gray-100">
                                 <OptimizedImage src="https://res.cloudinary.com/dplv15n29/image/upload/v1772483334/Brand_Guidelines__page-0008_krvxdy.jpg" alt="Application 5" fill className="object-cover" />
                             </motion.div>
                         </motion.div>
                     </div>
                 </motion.div>
             </motion.section>
          </div>
      </div>
    </main>
  );
}
