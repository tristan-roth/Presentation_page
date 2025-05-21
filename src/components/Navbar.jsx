import React, { useState } from "react";

export default function Navbar({ setSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 text-white p-4 relative z-50">
      {/* Barre principale */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-starwars text-starwarsGold">
          Mon Portfolio
        </div>

        {/* Bouton hamburger animé */}
        <button
          className="md:hidden flex flex-col justify-between w-6 h-6 relative"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          <span
            className={`block h-0.5 bg-white transform transition duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 bg-white transform transition duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-4">
          <button onClick={() => setSection("home")} className="hover:underline">
            Accueil
          </button>
          <button onClick={() => setSection("cv")} className="hover:underline">
            CV
          </button>
          <button onClick={() => setSection("projets")} className="hover:underline">
            Projets
          </button>
          <button onClick={() => setSection("contact")} className="hover:underline">
            Contact
          </button>
        </div>
      </div>

      {/* Menu mobile avec animation */}
      <div
        className={`md:hidden mt-4 flex flex-col items-center space-y-2 text-lg font-star transition-all duration-500 transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <button
          onClick={() => {
            setSection("home");
            setIsOpen(false);
          }}
          className="hover:text-starwarsGold"
        >
          Accueil
        </button>
        <button
          onClick={() => {
            setSection("cv");
            setIsOpen(false);
          }}
          className="hover:text-starwarsGold"
        >
          CV
        </button>
        <button
          onClick={() => {
            setSection("projets");
            setIsOpen(false);
          }}
          className="hover:text-starwarsGold"
        >
          Projets
        </button>
        <button
          onClick={() => {
            setSection("contact");
            setIsOpen(false);
          }}
          className="hover:text-starwarsGold"
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
