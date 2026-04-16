import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Tower Defense & ML",
    description: "Projet tutoré combinant développement de jeu 2D et intelligence artificielle. Implémentation d'algorithmes de ML pour optimiser les stratégies de défense.",
    media: "/tower-defense.gif",
    tech: ["Java", "JavaFX", "ML"],
    year: "2024",
    duration: "216h",
    status: "Terminé",
    size: "large",
  },
  {
    title: "Projet IA",
    description: "Comparaison de plusieurs algorithmes d'IA pour la résolution de problèmes complexes.",
    link: "https://github.com/tristan-roth/ProjetIA-RAIL2-ROTH-BOURDON",
    media: "/projetIA.gif",
    tech: ["Java"],
    year: "2024",
    duration: "2 sem.",
    status: "Terminé",
    size: "small",
  },
  {
    title: "Refonte Atoupro.com",
    description: "Refonte complète du site web : architecture moderne, optimisation des performances, sécurisation et amélioration UX.",
    link: "https://www.atoupro.com/",
    media: "/atoupro-demo.gif",
    tech: ["PHP", "Smarty", "JS", "SQL", "Tailwind"],
    year: "2025",
    duration: "3 mois",
    status: "En cours",
    size: "large",
  },
  {
    title: "Crazy Charly Days",
    description: "Application de gestion d'affectations développée en 8h lors d'un hackathon.",
    media: "/portfolio.png",
    tech: ["Symfony", "PHP", "MySQL", "JS"],
    year: "2024",
    duration: "8h",
    status: "Terminé",
    size: "small",
  },
];

export default function WorksSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.work-card').forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          delay: i * 0.08,
        });
      });

      // Parallax on images
      gsap.utils.toArray('.work-img').forEach((img) => {
        gsap.to(img, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="works" ref={sectionRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">02</span>
          <hr className="hr-accent flex-1 max-w-[60px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Selected Works</span>
        </div>

        <h2 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight mb-16">
          Projets<span className="text-accent">.</span>
        </h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`work-card bento-card group ${
                project.size === 'large' ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56 md:h-72">
                <img
                  src={project.media}
                  alt={project.title}
                  className="work-img card-media w-full h-[120%] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-100 via-transparent to-transparent" />

                {/* Status badge */}
                <div className="absolute top-4 left-4">
                  <span className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border ${
                    project.status === 'En cours'
                      ? 'bg-green-500/10 text-green-400 border-green-500/30'
                      : 'bg-white/5 text-neutral-400 border-white/10'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Year */}
                <div className="absolute top-4 right-4">
                  <span className="font-mono text-xs text-neutral-500">{project.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] text-neutral-600 mt-1.5 shrink-0 ml-4">{project.duration}</span>
                </div>

                <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, j) => (
                    <span key={j} className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-surface-200 text-neutral-400 border border-surface-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent hover:text-white transition-colors group/link"
                    data-hover
                  >
                    <span>Voir le projet</span>
                    <svg className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
