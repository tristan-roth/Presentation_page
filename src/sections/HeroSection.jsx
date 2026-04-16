import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const subtitleRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(line1Ref.current, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      })
      .from(line2Ref.current, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      }, '-=0.8')
      .from(line3Ref.current, {
        y: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      }, '-=0.8')
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.4')
      .from(scrollIndicatorRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.2');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-15"
          src="/output.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/80 to-surface" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="mb-6">
          <p ref={subtitleRef} className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-neutral-500 mb-8">
            Developpeur Full-Stack &mdash; Nancy, France
          </p>
        </div>

        <div className="space-y-2 md:space-y-4">
          <div className="overflow-hidden">
            <h1 ref={line1Ref} className="font-display font-extrabold text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] tracking-tight text-white">
              TRISTAN
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 ref={line2Ref} className="font-display font-extrabold text-[12vw] md:text-[8vw] lg:text-[7vw] leading-[0.9] tracking-tight text-white">
              ROTH<span className="text-accent">.</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <p ref={line3Ref} className="font-display font-medium text-[5vw] md:text-[2.5vw] lg:text-[2vw] leading-tight text-neutral-500 mt-4 max-w-2xl">
              Je conçois des expériences numériques qui allient code, design et performance.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-600">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>

      {/* Side accent */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="w-[1px] h-20 bg-white/10" />
        <span className="font-mono text-[10px] tracking-widest text-neutral-600" style={{ writingMode: 'vertical-rl' }}>
          VIE2DEBAUCHE
        </span>
        <div className="w-[1px] h-20 bg-white/10" />
      </div>
    </section>
  );
}
