import React from 'react';

const ProjectsSection = ({ projects }) => {
  // Données d'exemple si aucun projet n'est fourni
  const defaultProjects = [
    {
      title: "Tower Defense & Machine Learning",
      description: "Projet tutoré combinant développement de jeu 2D et intelligence artificielle. Implémentation d'algorithmes de ML pour optimiser les stratégies de défense et créer une IA adaptive.",
      link: "#",
      media: "/tower-defense.gif",
      tech: ["Java", "JavaFX", "ML"],
      duration: "216h",
      status: "Terminé",
      year: "2024"
    },
    {
      title: "Projet IA",
      description: "Un projet comparant notamment plusieurs algorithmes d'IA pour la résolution de problèmes.",
      link: "https://github.com/tristan-roth/ProjetIA-RAIL2-ROTH-BOURDON",
      media: "/projetIA.gif",
      tech: ["Java"],
      duration: "2 semaines",
      status: "Terminé",
      year: "2024"
    },
    {
      title: "Refonte Atoupro.com",
      description: "Refonte complète du site web avec une architecture moderne. Optimisation des performances, sécurisation et amélioration de l'expérience utilisateur.",
      link: "#",
      media: "/atoupro-demo.gif",
      tech: ["PHP", "Smarty" ,"JavaScript", "SQL", "TailwindCSS"],
      duration: "3 mois",
      status: "En cours",
      year: "2025"
    },
    {
      title: "Crazy Charly Days",
      description: "Application de gestion d'affectations de tâches développée en 8h lors d'un hackathon. Interface intuitive et système de notification en temps réel.",
      link: "#",
      media: "/api/placeholder/600/400",
      tech: ["Synfony","Java" ,"PHP", "MySQL", "JavaScript"],
      duration: "8h",
      status: "Terminé",
      year: "2024"
    }
  ];

  const projectList = projects || defaultProjects;

  const FadeIn = ({ children, delay = 0 }) => (
    <div 
      className="opacity-0 animate-fade-in"
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-star text-white mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Découvrez une sélection de mes projets les plus significatifs, allant du développement web 
            à l'intelligence artificielle, en passant par la création de jeux et les applications métier.
          </p>
        </div>

        {/* Liste des projets */}
        <div className="space-y-16">
          {projectList.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <FadeIn key={i} delay={i * 200}>
                <div className="relative">
                  {/* Numéro du projet */}
                  <div className="absolute -left-4 top-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold text-xl z-10">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  
                  <div
                    className={`flex flex-col lg:flex-row ${
                      isEven ? "" : "lg:flex-row-reverse"
                    } items-center gap-8 border-starwars bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm relative overflow-hidden ml-8`}
                  >
                    {/* Effets de fond */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-600/5 rounded-full blur-2xl"></div>
                    
                    {/* Contenu textuel */}
                    <div className="lg:w-1/2 text-white space-y-4 relative z-10">
                      {/* En-tête du projet */}
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            project.status === 'En cours' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          }`}>
                            {project.status}
                          </span>
                          <span className="text-yellow-400 text-sm">{project.year}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-star text-yellow-400 mb-3">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        {project.description}
                      </p>

                      {/* Métadonnées */}
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <span className="text-yellow-400">⏱️</span>
                          <span className="text-gray-300">Durée: {project.duration}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-2">
                        <h4 className="text-yellow-300 font-semibold text-sm uppercase tracking-wide">Technologies utilisées</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-sm border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Lien */}
                      <div className="pt-4">
                        <a
                          href={project.link}
                          className="group inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 font-semibold transition-all duration-300 hover:drop-shadow-[0_0_8px_#ffe81f]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Voir le projet</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* Média (GIF/Vidéo) */}
                    <div className="lg:w-1/2 relative group">
                      <div className="relative overflow-hidden rounded-xl border-2 border-yellow-600/30 group-hover:border-yellow-400/60 transition-all duration-300">
                        {project.media.endsWith(".mp4") ? (
                          <video
                            src={project.media}
                            controls
                            className="w-full h-64 md:h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                            poster="/api/placeholder/600/400"
                          />
                        ) : (
                          <img
                            src={project.media}
                            alt={`Présentation de ${project.title}`}
                            className="w-full h-64 md:h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectsSection;