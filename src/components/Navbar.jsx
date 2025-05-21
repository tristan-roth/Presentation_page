import React, { useState } from "react";

export default function Navbar({ setSection }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-neutral-900 text-white p-4">
      {/* Barre principale */}
      <div className="flex justify-between items-center">
        <div className="text-lg font-starwars">
          Mon Portfolio
        </div>

        {/* Bouton burger mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Ouvrir le menu"
        >
          ☰
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

      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="mt-4 space-y-2 md:hidden text-center">
          <button onClick={() => { setSection("home"); setIsOpen(false); }} className="block w-full hover:underline">
            Accueil
          </button>
          <button onClick={() => { setSection("cv"); setIsOpen(false); }} className="block w-full hover:underline">
            CV
          </button>
          <button onClick={() => { setSection("projets"); setIsOpen(false); }} className="block w-full hover:underline">
            Projets
          </button>
          <button onClick={() => { setSection("contact"); setIsOpen(false); }} className="block w-full hover:underline">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}
