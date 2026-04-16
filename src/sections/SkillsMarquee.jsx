import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillsMarquee() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const skills = [
    'React', 'Java', 'PHP', 'JavaScript', 'Vue.js', 'Tailwind CSS', 'PostgreSQL',
    'Docker', 'Git', 'MySQL', 'HTML/CSS', 'Symfony', 'C++', 'Bash', 'Flutter',
    'CI/CD', 'SQL', 'Machine Learning', 'UML', 'Agile',
  ];

  const doubled = [...skills, ...skills];

  return (
    <div ref={sectionRef} className="py-20 overflow-hidden border-y border-surface-300">
      <div className="flex whitespace-nowrap marquee-track">
        {doubled.map((skill, i) => (
          <span key={i} className="inline-flex items-center mx-6 md:mx-10">
            <span className="font-display font-bold text-3xl md:text-5xl text-white/10 hover:text-accent/40 transition-colors duration-500 select-none">
              {skill}
            </span>
            <span className="ml-6 md:ml-10 text-accent/30 text-xl">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
