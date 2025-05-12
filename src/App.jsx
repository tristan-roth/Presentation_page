import React, { useState } from "react";




import { Github, Mail, Linkedin } from "lucide-react";

export default function App() {
  const [section, setSection] = useState("home");

  const projects = [
    {
      title: "Projet Portfolio",
      description: "Un site personnel pour présenter mon profil et mes projets.",
      link: "https://github.com/monprofil/portfolio"
    },
    {
      title: "API NodeJS",
      description: "Une API RESTful pour gérer un blog.",
      link: "https://github.com/monprofil/api-blog"
    }
  ];

  const renderSection = () => {
    switch (section) {
      case "cv":
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Curriculum Vitae</h2>
            <ul className="list-disc list-inside">
              <li><strong>Développeur Web</strong> chez ATOUPRO (2022 - Présent)</li>
              <li><strong>Formation</strong> : Master Informatique - Université XYZ</li>
              <li>Compétences : React, Node.js, PostgreSQL, PHP, Docker</li>
            </ul>
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
        <a href="mailto:tristan@example.com"><Mail /></a>
        <a href="https://github.com/monprofil" target="_blank"><Github /></a>
        <a href="https://linkedin.com/in/monprofil" target="_blank"><Linkedin /></a>
      </footer>
    </div>
  );
}
