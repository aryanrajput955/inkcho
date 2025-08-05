'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  lenis, // Receive lenis instance
  children,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [isMobileState, setIsMobileState] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  // Memoize onScroll
  const onScroll = useCallback(
    ({ scroll }) => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.offsetHeight;

      if (mediaFullyExpanded && scroll <= 5) {
        setMediaFullyExpanded(false);
      } else if (!mediaFullyExpanded && sectionTop <= 0) {
        const progress = Math.min(Math.max(scroll / (sectionHeight * 0.5), 0), 1);
        setScrollProgress(progress);

        if (progress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (progress < 0.75) {
          setShowContent(false);
        }
      }
    },
    [mediaFullyExpanded]
  );

  // Attach scroll listener and handle locking
  useEffect(() => {
    if (lenis) {
      lenis.on('scroll', onScroll);
      if (mediaFullyExpanded) {
        lenis.start();
        console.log('Scroll unlocked');
      } else {
        lenis.stop();
        console.log('Scroll locked');
      }
    }
    return () => {
      if (lenis) {
        lenis.off('scroll', onScroll);
      }
    };
  }, [lenis, onScroll, mediaFullyExpanded]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Video size: 10vw/10vh to 100vw/100vh
  const mediaWidth = 10 + scrollProgress * 90; // 10vw to 100vw
  const mediaHeight = 10 + scrollProgress * 90; // 10vh to 100vh
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className={cn('transition-colors duration-700 ease-in-out overflow-x-hidden bg-yellow-300')}
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl"
                style={{
                  width: `${mediaWidth}vw`,
                  height: `${mediaHeight}vh`,
                  maxWidth: '100vw',
                  maxHeight: '100vh',
                  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.3)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className="relative w-full h-full pointer-events-none">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className="w-full h-full rounded-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: 'none' }}
                      ></div>
                      <motion.div
                        className="absolute inset-0 bg-black/30 rounded-xl"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full pointer-events-none">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-xl"
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: 'none' }}
                      ></div>
                      <motion.div
                        className="absolute inset-0 bg-black/30 rounded-xl"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      width={1280}
                      height={720}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50 rounded-xl"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
                <div className="flex flex-col items-start text-left relative z-10 mt-4 transition-none absolute top-4 left-4">
                  {date && (
                    <p
                      className="text-2xl text-black"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                </div>
                {scrollToExpand && (
                  <p
                    className="text-black font-medium text-center absolute bottom-4 left-1/2 transform -translate-x-1/2"
                    style={{ transform: `translateX(${textTranslateX}vw)` }}
                  >
                    {scrollToExpand}
                  </p>
                )}
              </div>
              <div
                className={cn(
                  'flex items-center justify-end text-right gap-4 w-full relative z-10 transition-none',
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal',
                  'absolute top-1/2 right-4 transform -translate-y-1/2'
                )}
              >
                <motion.div
                  className="flex flex-col"
                  style={{ transform: `translateX(${textTranslateX}vw)` }}
                >
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                    {firstWord}
                  </h2>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
                    {restOfTitle}
                  </h2>
                </motion.div>
              </div>
            </div>
            <motion.section
              className="flex flex-col w-full px-8 py-10 md:px-16 lg:py-20 bg-yellow-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;