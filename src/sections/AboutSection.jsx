import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const wordsRef = useRef([]);

  const paragraph = "Étudiant en 3e année de BUT Informatique à l'IUT Nancy Charlemagne, spécialisé en Réalisation d'Applications et Ingénierie Logicielle. Passionné par le développement web et logiciel, je transforme des idées complexes en solutions élégantes. Mon approche mêle rigueur technique et sensibilité créative.";

  const words = paragraph.split(' ');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each word opacity on scroll
      wordsRef.current.forEach((word, i) => {
        gsap.fromTo(word, {
          opacity: 0.15,
        }, {
          opacity: 1,
          duration: 0.3,
          scrollTrigger: {
            trigger: word,
            start: 'top 85%',
            end: 'top 50%',
            scrub: true,
          },
        });
      });

      // Animate info cards
      gsap.utils.toArray('.about-card').forEach((card, i) => {
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          delay: i * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const infoCards = [
    { label: 'Formation', value: 'BUT Informatique' },
    { label: 'Localisation', value: 'Nancy, France' },
    { label: 'Langue', value: 'Anglais B2' },
    { label: 'Mobilité', value: 'Permis B - Véhiculé' },
  ];

  const qualities = [
    { label: "Esprit d'équipe", desc: 'Collaboration efficace en équipe projet' },
    { label: 'Adaptation', desc: 'Flexibilité face aux nouveaux défis' },
    { label: 'Persévérance', desc: 'Ténacité dans la résolution de problèmes' },
    { label: 'Sociabilité', desc: 'Aisance relationnelle naturelle' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 section-reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">01</span>
          <hr className="hr-accent flex-1 max-w-[60px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">A propos</span>
        </div>

        {/* Text reveal paragraph */}
        <div className="max-w-4xl mb-24">
          <p className="font-display text-2xl md:text-4xl lg:text-5xl font-medium leading-snug tracking-tight">
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordsRef.current[i] = el)}
                className="inline-block mr-[0.3em] text-white"
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {infoCards.map((item, i) => (
            <div key={i} className="about-card bg-surface-100 border border-surface-300 rounded-2xl p-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{item.label}</span>
              <p className="font-display font-semibold text-white text-lg mt-2">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Qualities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {qualities.map((q, i) => (
            <div key={i} className="about-card group bg-surface-100 border border-surface-300 rounded-2xl p-6 hover:border-accent/50 transition-all duration-400">
              <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-accent transition-colors">{q.label}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{q.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-20 about-card bg-surface-100 border border-surface-300 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <span className="absolute top-4 left-6 font-display text-[120px] leading-none text-accent/10 select-none">&ldquo;</span>
          <div className="relative z-10">
            <blockquote className="font-body text-lg md:text-xl text-neutral-300 italic leading-relaxed mb-8 max-w-3xl">
              Tristan s'est montré motivé, sérieux et très impliqué. Il a réalisé des tâches avec succès et efficacité.
              Son professionnalisme et son envie d'apprendre ont été très appréciés.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-black font-display font-bold text-sm">
                JM
              </div>
              <div>
                <p className="font-display font-semibold text-white">Johanne Motte</p>
                <p className="font-mono text-xs text-neutral-500">RH chez ELECTAVIA &bull; Stage 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
