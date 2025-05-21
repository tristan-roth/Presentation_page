import React, { useState, useEffect } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import HyperspaceIntro from "./HyperspaceIntro";
import Starfield from "./Starfield";
import Navbar from "./components/Navbar";
import FadeIn from "./components/FadeIn";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from './SkillsSection';
import HomePage from "./HomePage";


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
          <h2 className="text-3xl font-star text-whithe">Curriculum Vitae</h2>,

            <div className="flex justify-center my-6">
              <img
                src="/cv-preview.png"
                alt="Aperçu du CV"
                className="w-full max-w-xl rounded-xl shadow-md border-starwars"
              />
            </div>,
          <p>
            Mon CV présente mes formations, mes compétences et mes expériences professionnelles. N'hésitez pas à le télécharger !
          </p>,
          <a
            href="/CV-Tristan-ROTH.pdf"
            download
            className="inline-block mt-2 text-yellow-600 nav-hover-starwars"
          >
            Télécharger le CV en PDF
          </a>
      ]);
      case "projets":
        return staggeredFadeIn ([
           <ProjectsSection />
        ]);
        // return (
        // <div className="space-y-12">
        //   {projects.map((project, i) => {
        //     const isEven = i % 2 === 0;
        //     return (
        //       <FadeIn key={i} delay={i * 200}>
        //         <div
        //           className={`flex flex-col md:flex-row ${
        //             isEven ? "" : "md:flex-row-reverse"
        //           } items-center gap-6 bg-neutral-900 rounded-xl border-starwars-nopadding`}
        //         >
        //           {/* Texte à gauche ou droite */}
        //           <div className="md:w-1/2 text-white text-center md:text-left">
        //             <h3 className="text-xl font-star text-yellow-600 mb-2">
        //               {project.title}
        //             </h3>
        //             <p className="mb-2">{project.description}</p>
        //             <a
        //               href={project.link}
        //               className="text-yellow-600 hover:text-starwarsGold hover:drop-shadow-[0_0_6px_#ffe81f] transition duration-300"
        //               target="_blank"
        //               rel="noopener noreferrer"
        //             >
        //               Voir le projet
        //             </a>
        //           </div>

        //           {/* GIF ou vidéo plein cadre */}
        //           <div className="md:w-1/2 h-full">
        //             {project.media.endsWith(".mp4") ? (
        //               <video
        //                 src={project.media}
        //                 controls
        //                 className="w-full h-full object-cover rounded-xl"
        //               />
        //             ) : (
        //               <img
        //                 src={project.media}
        //                 alt={`Présentation de ${project.title}`}
        //                 className="w-full h-full object-cover rounded-xl"
        //               />
        //             )}
        //           </div>
        //         </div>
        //       </FadeIn>
        //     );
        //   })}
        // </div>

      // );
      case "contact":
        return (
          <div className="space-y-6">
            {staggeredFadeIn([
              <h2 key="contact-title" className="text-2xl font-star text-yellow-600">
                Me contacter
              </h2>,

              <form
                key="contact-form"
                action="https://formspree.io/f/mgvkpakn"
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-star">Nom //encadré en jaune le champs</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="bg-neutral-900 mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring focus:ring-yellow-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-star">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="bg-neutral-900 mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring focus:ring-yellow-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-star">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="bg-neutral-900 mt-1 block w-full border rounded-md shadow-sm p-2 focus:ring focus:ring-yellow-600"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-yellow-700 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Envoyer
                </button>
              </form>
            ], 50, 150)}
          </div>
        );

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
