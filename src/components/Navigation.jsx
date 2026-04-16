import React, { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'A propos', href: '#about' },
    { label: 'Expériences', href: '#commitments' },
    { label: 'Projets', href: '#works' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollTo = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-surface/90 backdrop-blur-md border-b border-white/5' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <button
          onClick={() => scrollTo('#hero')}
          className="font-display font-extrabold text-xl tracking-tight text-white hover:text-accent transition-colors"
          data-hover
        >
          V2D<span className="text-accent">.</span>
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="nav-link font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors"
              data-hover
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 w-7"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          data-hover
        >
          <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ${
        menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } bg-surface/95 backdrop-blur-md`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-mono text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
