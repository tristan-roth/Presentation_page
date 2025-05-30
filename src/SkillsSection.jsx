import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Langages de Programmation",
      icon: "⚡",
      skills: [
        { name: "Java", icon: "☕", level: 90 },
        { name: "JavaScript", icon: "🟨", level: 85 },
        { name: "PHP", icon: "🐘", level: 80 },
        { name: "C++", icon: "🔧", level: 75 },
        { name: "Bash", icon: "💻", level: 70 }
      ]
    },
    {
      title: "Frameworks & Technologies Web",
      icon: "🌐",
      skills: [
        { name: "React", icon: "⚛️", level: 90 },
        { name: "Vue.js", icon: "💚", level: 80 },
        { name: "Slim (PHP)", icon: "🚀", level: 75 },
        { name: "HTML/CSS", icon: "📝", level: 95 },
        { name: "Tailwind CSS", icon: "🎨", level: 85 }
      ]
    },
    {
      title: "Bases de Données",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", icon: "🐘", level: 85 },
        { name: "MySQL", icon: "🐬", level: 80 },
        { name: "MariaDB", icon: "🔵", level: 75 },
        { name: "SQL/PLSQL", icon: "📊", level: 90 }
      ]
    },
    {
      title: "DevOps & Outils",
      icon: "🛠️",
      skills: [
        { name: "Docker", icon: "🐳", level: 80 },
        { name: "CI/CD", icon: "🔄", level: 75 },
        { name: "Virtualisation", icon: "💾", level: 70 },
        { name: "Git", icon: "📚", level: 85 }
      ]
    },
    {
      title: "Architecture & Méthodologies",
      icon: "🏗️",
      skills: [
        { name: "UML", icon: "📐", level: 85 },
        { name: "MVC", icon: "🏛️", level: 90 },
        { name: "Agile", icon: "🔄", level: 80 },
        { name: "Gestion de projet", icon: "📋", level: 75 }
      ]
    },
    {
      title: "Technologies Émergentes",
      icon: "🚀",
      skills: [
        { name: "Flutter", icon: "📱", level: 70 },
        { name: "Intelligence Artificielle", icon: "🤖", level: 65 },
        { name: "Optimisation", icon: "⚡", level: 70 },
        { name: "Compilation", icon: "🔧", level: 60 }
      ]
    }
  ];

  const SkillBar = ({ skill }) => (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-yellow-400 text-sm font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 border border-yellow-600/30">
        <div 
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-yellow-400/50"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  const SkillCategory = ({ category }) => (
    <div className="border-starwars bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-4">
        <span className="text-2xl">{category.icon}</span>
        <h3 className="text-xl font-star text-yellow-400">{category.title}</h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-star text-white mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Compétences
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Je suis passionné par le développement web et logiciel, et j'ai acquis des compétences solides dans plusieurs domaines technologiques. 
            Voici un aperçu de mon expertise technique et de mon niveau dans chaque domaine.
          </p>
        </div>

        {/* Grille des compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} />
          ))}
        </div>

        {/* Section résumé */}
        <div className="mt-12 border-starwars bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
          <h3 className="text-2xl font-star text-yellow-400 mb-4 flex items-center">
            <span className="mr-3">🎯</span>
            Expertise Principale
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">Développement Full-Stack</h4>
              <p className="text-gray-300">
                Maîtrise complète du développement web moderne avec React, Vue.js, et des backends robustes en Java et PHP.
              </p>
            </div>
            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">Architecture & Conception</h4>
              <p className="text-gray-300">
                Expertise en modélisation UML, architecture MVC et méthodologies Agile pour des projets structurés.
              </p>
            </div>
            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">DevOps & Déploiement</h4>
              <p className="text-gray-300">
                Compétences en Docker, CI/CD et virtualisation pour des déploiements efficaces et scalables.
              </p>
            </div>
            <div>
              <h4 className="text-yellow-300 font-semibold mb-2">Innovation Continue</h4>
              <p className="text-gray-300">
                Veille technologique active avec une initiation à l'IA et aux technologies émergentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;