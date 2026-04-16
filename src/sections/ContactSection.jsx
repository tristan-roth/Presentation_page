import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.contact-reveal').forEach((el, i) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          delay: i * 0.1,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/mgvkpakn", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-8 contact-reveal">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent">04</span>
          <hr className="hr-accent flex-1 max-w-[60px]" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">Contact</span>
        </div>

        {/* Big CTA heading */}
        <div className="contact-reveal mb-20">
          <h2 className="font-display font-extrabold text-5xl md:text-7xl lg:text-[8vw] text-white tracking-tight leading-[0.95]">
            Travaillons<br />
            <span className="text-accent">ensemble</span><span className="text-white">.</span>
          </h2>
          <p className="mt-8 font-body text-neutral-500 text-lg md:text-xl max-w-xl leading-relaxed">
            Une question, un projet ou simplement envie d'échanger ?
            Je suis toujours ravi de discuter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div className="contact-reveal">
            {formStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                <p className="text-green-400 text-sm">Message envoyé avec succes. Je vous repondrai rapidement.</p>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <p className="text-red-400 text-sm">Erreur lors de l'envoi. Veuillez reessayer.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Nom *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-surface-300 py-3 text-white font-body text-lg placeholder-neutral-700 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-surface-300 py-3 text-white font-body text-lg placeholder-neutral-700 focus:border-accent focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Sujet</label>
                <input
                  type="text"
                  name="subject"
                  className="w-full bg-transparent border-b border-surface-300 py-3 text-white font-body text-lg placeholder-neutral-700 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Sujet"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block mb-2">Message *</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full bg-transparent border-b border-surface-300 py-3 text-white font-body text-lg placeholder-neutral-700 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="group mt-4 bg-accent text-black font-display font-bold text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-colors duration-300"
                data-hover
              >
                <span className="flex items-center gap-3">
                  Envoyer
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div className="space-y-8 contact-reveal">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent block mb-3">Liens</span>
              <div className="space-y-4">
                <a
                  href="https://github.com/tristan-roth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group py-3 border-b border-surface-300 hover:border-accent/50 transition-colors"
                  data-hover
                >
                  <span className="font-display font-semibold text-white text-lg group-hover:text-accent transition-colors">GitHub</span>
                  <svg className="w-4 h-4 text-neutral-600 group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/tristan-roth-3b5232270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group py-3 border-b border-surface-300 hover:border-accent/50 transition-colors"
                  data-hover
                >
                  <span className="font-display font-semibold text-white text-lg group-hover:text-accent transition-colors">LinkedIn</span>
                  <svg className="w-4 h-4 text-neutral-600 group-hover:text-accent group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent block mb-3">Disponibilite</span>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-neutral-400 text-sm">Ouvert aux opportunites</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-neutral-400 text-sm">Reponse sous 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-neutral-400 text-sm">Remote / Presentiel</span>
                </div>
              </div>
            </div>

            {/* CV Download */}
            <div className="bg-surface-100 border border-surface-300 rounded-2xl p-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent block mb-3">Curriculum Vitae</span>
              <p className="text-neutral-500 text-sm mb-5 leading-relaxed">
                Telecharger mon CV pour plus de details sur mon parcours et mes competences.
              </p>
              <a
                href="/CV-Tristan-ROTH.pdf"
                download
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-white hover:text-accent transition-colors"
                data-hover
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Telecharger PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
