import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-300 py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-600">
          &copy; {year} Tristan ROTH
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/tristan-roth"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 hover:text-accent transition-colors"
            data-hover
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tristan-roth-3b5232270/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-neutral-600 hover:text-accent transition-colors"
            data-hover
          >
            LinkedIn
          </a>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-700">
          VIE2DEBAUCHE
        </span>
      </div>
    </footer>
  );
}
