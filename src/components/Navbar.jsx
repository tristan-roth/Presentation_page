import React, { useState } from "react";

export default function Navbar({ setSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 text-white p-4 relative z-50">
      <div className="flex justify-between items-center">
        <div className="text-lg font-starwars text-starwarsGold">Mon Portfolio</div>

        {/* Hamburger animé */}
        <button
          className="md:hidden flex flex-col justify-between items-center w-6 h-6 gap-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded transform transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-4">
          <button onClick={() => setSection("home")} className="hover:underline">Accueil</button>
          <button onClick={() => setSection("cv")} className="hover:underline">CV</button>
          <button onClick={() => setSection("projets")} className="hover:underline">Projets</button>
          <button onClick={() => setSection("contact")} className="hover:underline">Contact</button>
        </div>
      </div>

      {/* Menu mobile toujours présent + animé */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="flex flex-col items-center space-y-2 text-lg font-star mt-4 pb-2">
          <button onClick={() => { setSection("home"); setIsOpen(false); }} className="hover:text-starwarsGold">Accueil</button>
          <button onClick={() => { setSection("cv"); setIsOpen(false); }} className="hover:text-starwarsGold">CV</button>
          <button onClick={() => { setSection("projets"); setIsOpen(false); }} className="hover:text-starwarsGold">Projets</button>
          <button onClick={() => { setSection("contact"); setIsOpen(false); }} className="hover:text-starwarsGold">Contact</button>
        </div>
      </div>
    </nav>
  );
}
