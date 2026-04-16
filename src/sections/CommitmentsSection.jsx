import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const commitments = [
  {
    title: 'Winter is Coding',
    type: 'Competition nationale',
    year: '2026',
    place: 'France',
    metric: 'Top 9 sur pres de 800 etudiants',
    description:
      "Classé top 9 de Winter is Coding, un challenge national d'algorithmie qui reunissait pres de 800 etudiants venant de toute la France.",
    link: 'https://www.linkedin.com/posts/epitech---european-institute-of-technology_winter-is-coding-les-r%C3%A9sultats-activity-7425840759733481472-tWBo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEI92rkBFkCu_0XhqV7N6WGW87JXDGNlQuY',
    linkLabel: 'Voir le post LinkedIn',
    side: 'left',
  },
  {
    title: 'Epitech Summit',
    type: 'Ecosysteme',
    year: '2026',
    place: 'France',
    metric: 'Veille, rencontres, perspectives terrain',
    description:
      "Presence a l'Epitech Summit pour echanger avec des profils tech, confronter des visions du metier et prendre du recul sur les evolutions du secteur.",
    side: 'right',
  },
  {
    title: 'VivaTech',
    type: 'Benevolat terrain',
    year: '2026',
    place: 'Paris',
    metric: 'Le plus grand salon europeen de la tech',
    description:
      "Engagement benevole au coeur de VivaTech, le plus grand salon europeen de la tech, au contact direct des exposants, des visiteurs et des acteurs de l'innovation.",
    side: 'left',
  },
  {
    title: 'Arendt',
    type: "Visite d'entreprise",
    year: '2026',
    place: 'Luxembourg',
    metric: 'Regards metier a l\'international',
    description:
      "Visite d'Arendt au Luxembourg pour mieux comprendre son environnement, ses expertises et la maniere dont ses equipes travaillent sur des sujets a fort niveau d'exigence.",
    side: 'right',
  },
  {
    title: 'Montreal',
    type: 'Immersion internationale',
    year: '2026',
    place: 'Montreal, Canada',
    metric: 'Beaucoup d\'apprentissages hors cadre',
    description:
      "Immersion a Montreal pour decouvrir un autre ecosysteme tech, observer d'autres facons de collaborer et repartir avec beaucoup de nouvelles references sur l'innovation, le produit et les dynamiques internationales.",
    side: 'left',
  },
];

export default function CommitmentsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = sectionRef.current?.querySelector('.commitment-intro');
      const stages = gsap.utils.toArray('.commitment-stage');

      if (intro) {
        gsap.from(intro, {
          y: 48,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: intro,
            start: 'top 82%',
          },
        });
      }

      gsap.fromTo(
        '.commitment-line-progress',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top top',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            end: 'bottom 24%',
            scrub: true,
          },
        }
      );

      stages.forEach((stage) => {
        const panel = stage.querySelector('.commitment-panel');
        const node = stage.querySelector('.commitment-node');
        const side = stage.dataset.side === 'left' ? -96 : 96;

        gsap.from(panel, {
          x: side,
          y: 32,
          opacity: 0,
          rotate: stage.dataset.side === 'left' ? -1.8 : 1.8,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stage,
            start: 'top 80%',
          },
        });

        gsap.from(node, {
          scale: 0.2,
          opacity: 0,
          duration: 0.65,
          ease: 'back.out(1.9)',
          scrollTrigger: {
            trigger: stage,
            start: 'top 80%',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="commitments" ref={sectionRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8 section-reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">02</span>
          <hr className="hr-accent flex-1 max-w-[60px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Extra commitment</span>
        </div>

        <div className="commitment-intro max-w-4xl mb-16 md:mb-24">
          <h2 className="font-display font-extrabold text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
            Experiences<span className="text-accent">.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-lg md:text-xl text-neutral-400 leading-relaxed">
            Des experiences de competition, de terrain et d'immersion internationale qui ont elargi
            ma vision de la tech bien au-dela des projets.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2">
            <div className="commitment-line-progress absolute inset-0 origin-top" />
          </div>

          <div className="relative">
            {commitments.map((item, index) => (
              <article
                key={item.title}
                data-side={item.side}
                className="commitment-stage relative grid grid-cols-1 lg:grid-cols-[1fr_88px_1fr] items-center min-h-[22rem] md:min-h-[24rem]"
              >
                <div
                  className={[
                    'relative pl-14 lg:pl-0',
                    item.side === 'left' ? 'lg:col-start-1 lg:pr-12' : 'lg:col-start-3 lg:pl-12',
                  ].join(' ')}
                >
                  <div
                    className="commitment-panel group relative overflow-hidden rounded-[28px] border border-white/10 bg-surface-100/90 p-6 md:p-8 lg:p-9 backdrop-blur-sm"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at top right, rgba(255, 60, 40, 0.16), transparent 36%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0))',
                    }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/5" />
                    <div className="commitment-aurora pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/15 blur-3xl" />

                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent">
                          {item.type}
                        </span>
                        <h3 className="mt-4 font-display font-bold text-3xl md:text-[2.5rem] text-white tracking-tight leading-none">
                          {item.title}
                        </h3>
                      </div>
                      <span className="commitment-index font-display text-5xl md:text-6xl text-white/10 leading-none shrink-0">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.24em] text-neutral-300">
                      {item.metric}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-neutral-500">
                      <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]">
                        <CalendarDays className="h-3.5 w-3.5 text-accent" strokeWidth={1.8} />
                        {item.year}
                      </span>
                      <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em]">
                        <MapPin className="h-3.5 w-3.5 text-accent" strokeWidth={1.8} />
                        {item.place}
                      </span>
                    </div>

                    <p className="mt-6 text-base md:text-lg text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.24em] text-accent hover:text-white transition-colors duration-300"
                        data-hover
                      >
                        <span>{item.linkLabel}</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={1.8} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="pointer-events-none absolute left-5 top-12 flex h-10 w-10 -translate-x-1/2 items-center justify-center lg:left-1/2">
                  <div className="commitment-node absolute inset-0 rounded-full border border-accent/25 bg-accent/10 backdrop-blur-sm" />
                  <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_18px_rgba(255,60,40,0.8)]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
