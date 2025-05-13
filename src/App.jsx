import React, { useState } from "react";




import { Github, Mail, Linkedin } from "lucide-react";

export default function App() {
  const [section, setSection] = useState("home");

  const projects = [
    {
      title: "Projet Portfolio",
      description: "Un site personnel pour présenter mon profil et mes projets.",
      link: "https://github.com/tristan-roth/Presentation_page"
    },
    {
      title: "Atoupro.com V3",
      description: "Une refonte complète du site Atoupro.com, avec une nouvelle interface et de nouvelles fonctionnalités.",
      link: "https://github.com/tristan-roth/atoupro.com-V3"
    },
    {
      title: "Projet IA",
      description: "Un projet comparant nottament plusieurs algorithmes d'IA pour la résolution de problèmes.",
      link: "https://github.com/tristan-roth/ProjetIA-RAIL2-ROTH-BOURDON"
    }
  ];

  const renderSection = () => {
    switch (section) {
      case "cv":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Curriculum Vitae</h2>
            <div className="flex justify-center my-6">
              <img
                src="/cv-preview.png"
                alt="Aperçu du CV"
                className="w-full max-w-xl rounded-xl shadow-md"
              />
            </div>


            <p className="text-gray-700">
              Mon CV présente mes formations, mes compétences et mes expériences professionnelles. N'hésitez pas à le télécharger !
            </p>
            <a
              href="/CV-Tristan-ROTH.pdf"
              download
              className="inline-block mt-2 text-blue-600 underline hover:text-blue-800"
            >
              Télécharger le CV en PDF
            </a>
          </div>
        );
      case "projets":
        return (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-xl border p-4 shadow-md">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                >
                  Voir le projet
                </a>
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Bienvenue !</h1>
            <p>Je suis Tristan, développeur web passionné, spécialisé en React, PHP et PostgreSQL. Voici mon espace personnel où je partage mes projets et mon parcours.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="text-lg font-bold">Mon Portfolio</div>
        <div className="space-x-4">
          <button onClick={() => setSection("home")} className="text-white">Accueil</button>
          <button onClick={() => setSection("cv")} className="text-white">CV</button>
          <button onClick={() => setSection("projets")} className="text-white">Projets</button>
        </div>
      </nav>
      <main className="flex-1 p-6 max-w-4xl mx-auto w-full">
        {renderSection()}
      </main>
      <footer className="bg-gray-100 p-4 text-center flex justify-center space-x-4">
        <a href="mailto:tristanroth00@gmail.com"><Mail /></a>
        <a href="https://github.com/tristan-roth" target="_blank"><Github /></a>
        <a href="https://www.linkedin.com/in/tristan-roth-3b5232270/" target="_blank"><Linkedin /></a>
      </footer>
    </div>
  );
}
