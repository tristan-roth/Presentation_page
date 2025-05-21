import React, { useState, useEffect } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import HyperspaceIntro from "./HyperspaceIntro";
import Starfield from "./Starfield";
import Navbar from "./components/Navbar";
import FadeIn from "./components/FadeIn";

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
      link: "https://github.com/tristan-roth/Presentation_page"
    },
    {
      title: "Atoupro.com V3",
      description: "Une refonte complète du site Atoupro.com, avec une nouvelle interface et de nouvelles fonctionnalités.",
      link: "https://www.atoupro.com/"
    },
    {
      title: "Projet IA",
      description: "Un projet comparant notamment plusieurs algorithmes d'IA pour la résolution de problèmes.",
      link: "https://github.com/tristan-roth/ProjetIA-RAIL2-ROTH-BOURDON"
    }
  ];

  const renderSection = () => {
    switch (section) {
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
        return (
          <div className="grid gap-4 md:grid-cols-2">
            {staggeredFadeIn(
              projects.map((project, i) => (
                <div key={i} className="h-full flex flex-col bg-neutral-900 rounded-xl border-starwars p-4 shadow-md">
                  <h3 className="text-xl font-star text-yellow-600 mb-2">{project.title}</h3>
                  <p className="mb-2 flex-grow">{project.description}</p>
                  <a
                    href={project.link}
                    className="text-yellow-600 hover:text-starwarsGold hover:drop-shadow-[0_0_6px_#ffe81f] transition duration-300"
                    target="_blank"
                  >
                    Voir le projet
                  </a>


                </div>
              )),
            )}
          </div>
        );
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
        return (
          <div className="space-y-6">
            {staggeredFadeIn([
              <section key="intro" className="p-6 rounded-xl shadow-md border-starwars-md">
                <h1 className="font-star text-yellow-600 text-4xl">Bienvenue jeune Padawan</h1>
                <p>
                  Je suis <strong>Tristan ROTH</strong>, étudiant en 3e année de BUT Informatique à l'IUT Nancy Charlemagne, parcours Réalisation d'Applications – Ingénierie Logicielle.
                </p>
                <p className="mt-2">
                  Passionné par le développement web et logiciel, je travaille actuellement sur la refonte du site <strong>Atoupro.com</strong>, et j'ai mené plusieurs projets en IA, développement d'API, et en architecture logicielle. Je suis à la recherche d'opportunités pour continuer à apprendre et contribuer à des projets innovants.
                </p>
              </section>,

              <section key="skills" className="p-6 rounded-xl shadow-md border-starwars-md">
                <h2 className="font-star text-yellow-600 text-2xl">Compétences clés</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-disc list-inside">
                  <li>Java, PHP, JavaScript, C++, Bash</li>
                  <li>React, Vue.js, Slim (PHP), HTML/CSS</li>
                  <li>PostgreSQL, MariaDB, MySQL, SQL/PLSQL</li>
                  <li>Docker, CI/CD, Virtualisation</li>
                  <li>Modélisation UML, architecture MVC</li>
                  <li>Flutter (développement mobile)</li>
                  <li>Gestion de projet, Gantt, Méthodologie Agile</li>
                  <li>Initiation à l’IA, optimisation, compilation</li>
                </ul>
              </section>,

              <section key="recos" className="p-6 rounded-xl shadow-md border-starwars-md">
                <h2 className="font-star text-yellow-600 text-2xl">Recommandation</h2>
                <p>
                  "Tristan s’est montré motivé, sérieux et très impliqué. Il a réalisé des tâches avec succès et efficacité. Son professionnalisme et son envie d’apprendre ont été très appréciés."
                </p>
                <p className="italic mt-2">– Johanne Motte, RH chez ELECTAVIA</p>
              </section>
            ], 20, 100)}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans relative">
      <HyperspaceIntro onFinish={() => setShowContent(true)} />
      <Starfield />
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar setSection={setSection} />
        <main className={`flex-1 p-6 max-w-4xl mx-auto w-full transform transition-all duration-700 ease-out ${
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
