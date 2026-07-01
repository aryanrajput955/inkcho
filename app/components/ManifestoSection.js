'use client';
import React from 'react';

function useInViewTrigger(threshold = 0.2) {
  const [triggered, setTriggered] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, triggered };
}

function Word({ word, index, triggered }) {
  return (
    <span
      style={{
        display: 'inline-block',
        marginRight: '0.28em',
        opacity: triggered ? 1 : 0,
        filter: triggered ? 'blur(0px)' : 'blur(6px)',
        transition: triggered
          ? `opacity 450ms ease-out ${index * 100}ms, filter 450ms ease-out ${index * 100}ms`
          : 'none',
      }}
    >
      {word}
    </span>
  );
}

export default function ManifestoSection() {
  const heading = useInViewTrigger();
  const description = useInViewTrigger();
  const rightText = useInViewTrigger();

  // Heading — two lines, stagger continues across lines
  const headingLine1 = 'More than branding.'.split(' ');
  const headingLine2 = "Built for what's next.".split(' ');

  // Description — five lines, stagger continues across all lines
  const descLines = [
    'Inkcho is a creative studio shaping brands with clarity and intent..',
    'We create identities and digital experiences that feel considered, not just designed.',
    "As things shift, we're starting to push brands beyond the screen",
    "From VR spaces to walkthrough environments and interactive 3D work, we're",
    'shaping what comes next.',
  ];

  // Right — two lines, stagger continues across lines
  const rightLine1 = "We don't just make things look good,".split(' ');
  const rightLine2 = 'We build brands that actually work.'.split(' ');

  return (
    <section className="h-screen bg-white flex items-center px-8 md:px-16 lg:px-24">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-center">

        {/* Left — heading + description */}
        <div className="flex flex-col gap-6">

          {/* 1. Heading */}
          <h2
            ref={heading.ref}
            className="text-[2.8rem] lg:text-[3.2rem] font-serif font-bold italic text-[#9a1b40] leading-[1.15] tracking-tight"
          >
            <span style={{ display: 'block' }}>
              {headingLine1.map((word, i) => (
                <Word key={i} word={word} index={i} triggered={heading.triggered} />
              ))}
            </span>
            <span style={{ display: 'block' }}>
              {headingLine2.map((word, i) => (
                <Word key={i} word={word} index={headingLine1.length + i} triggered={heading.triggered} />
              ))}
            </span>
          </h2>

          {/* 2. Description */}
          <div
            ref={description.ref}
            className="text-[15px] text-black/75 leading-[1.85] font-light"
          >
            {descLines.map((line, lineIdx) => {
              const offset = descLines
                .slice(0, lineIdx)
                .reduce((sum, l) => sum + l.split(' ').length, 0);
              return (
                <p key={lineIdx}>
                  {line.split(' ').map((word, i) => (
                    <Word key={i} word={word} index={offset + i} triggered={description.triggered} />
                  ))}
                </p>
              );
            })}
          </div>
        </div>

        {/* 3. Right statement */}
        <div ref={rightText.ref}>
          <p className="text-[1.15rem] lg:text-[1.25rem] font-bold text-black leading-snug">
            <span style={{ display: 'block' }}>
              {rightLine1.map((word, i) => (
                <Word key={i} word={word} index={i} triggered={rightText.triggered} />
              ))}
            </span>
            <span style={{ display: 'block' }}>
              {rightLine2.map((word, i) => (
                <Word key={i} word={word} index={rightLine1.length + i} triggered={rightText.triggered} />
              ))}
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
