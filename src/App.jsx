import React, { useState, useEffect } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import HyperspaceIntro from "./HyperspaceIntro";
import Starfield from "./Starfield";
import Navbar from "./components/Navbar";
import FadeIn from "./components/FadeIn";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from './SkillsSection';
import HomePage from "./HomePage";
import CVsection from "./CVsection";
import ContactSection from "./ContactSection.jsx";


export default function App() {
  const [section, setSection] = useState("home");
  const [showContent, setShowContent] = useState(false);
  

  // useEffect(() => {
  //   const timer = setTimeout(() => setShowContent(true), 100); // petit délai avant affichage
  //   return () => clearTimeout(timer);
  // }, []);


  const projects = [
    {
      title: "Projet Portfolio",
      description: "Un site personnel pour présenter mon profil et mes projets.",
      link: "https://github.com/tristan-roth/Presentation_page",
      media: "/portfolio.png"
    },
    {
      title: "Tower Defense & Machine Learning",
      description: "Un projet de jeu Tower Defense en Java, avec une IA pour le joueur. Le projet a été réalisé dans le cadre du projet tutoré de ma troisième année de BUT Informatique.",
      link: "",
      media: "/tower-defense.gif"
    },
    {
      title: "Atoupro.com V3",
      description: "Une refonte complète du site Atoupro.com, avec une nouvelle interface et de nouvelles fonctionnalités. Le projet était en PHP 7.0 Smarty 2.6 et PostgreSQL 9.5. Une de mes première mission était de le mettre à jour en PHP 8.3 Smarty 5 et PostgreSQL 15.",
      link: "https://www.atoupro.com/",
      media: "/atoupro-demo.gif"
    },
    {
      title: "Projet IA",
      description: "Un projet comparant notamment plusieurs algorithmes d'IA pour la résolution de problèmes.",
      link: "https://github.com/tristan-roth/ProjetIA-RAIL2-ROTH-BOURDON",
      media: "/projetIA.gif"
    }
  ];

  const renderSection = () => {
    switch (section) {
      case "competences":
        return staggeredFadeIn ([
           <SkillsSection />
        ]);
      case "cv":
        return staggeredFadeIn ([
          <CVsection />
        ]);
      case "projets":
        return staggeredFadeIn ([
           <ProjectsSection />
        ]);
      case "contact":
        return staggeredFadeIn ([
          <ContactSection />
        ]);
      default:
        return staggeredFadeIn ([
           <HomePage />
        ]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans relative">
      <HyperspaceIntro onFinish={() => setShowContent(true)} />
      <Starfield />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar setSection={setSection} />
        <main className={`flex-1 p-6 max-w-6xl mx-auto w-full transform transition-all duration-700 ease-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <FadeIn key={section} delay={150}>
            {renderSection()}
          </FadeIn>
        </main>
        <FadeIn key={`footer-${section}`} delay={600}>
        <footer className="w-full bg-neutral-900 border-t p-2 text-center flex justify-center items-center space-x-4 mt-8">
          {/* <a href="mailto:tristanroth00@gmail.com" aria-label="Email"><Mail /></a> */}
          <a href="https://github.com/tristan-roth" target="_blank" aria-label="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/tristan-roth-3b5232270/" target="_blank" aria-label="LinkedIn"><Linkedin /></a>
        </footer>
        </FadeIn>
      </div>
    </div>
  );
}

function staggeredFadeIn(elements, baseDelay = 70, step = 200) {
  return elements.map((el, i) => (
    <FadeIn key={i} delay={baseDelay + i * step}>
      {el}
    </FadeIn>
  ));
}
