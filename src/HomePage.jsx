import React from "react";

const HomePage = () => {
  const softSkills = [
    { skill: "Esprit d'équipe", icon: "🤝", description: "Collaboration efficace en équipe projet" },
    { skill: "Adaptation", icon: "🔄", description: "Flexibilité face aux nouveaux défis" },
    { skill: "Persévérance", icon: "💪", description: "Ténacité dans la résolution de problèmes" },
    // { skill: "Négociation", icon: "🤝", description: "Communication et recherche de consensus" },
    { skill: "Sociabilité", icon: "😊", description: "Aisance relationnelle naturelle" },
    // { skill: "Écoute active", icon: "👂", description: "Attention aux besoins des autres" },
    // { skill: "Ponctualité", icon: "⏰", description: "Respect des délais et engagements" },
    // { skill: "Leadership", icon: "👑", description: "Capacité à guider et motiver" }
  ];

  const passions = [
    {
      title: "Football",
      description: "Sport étude à Nancy avec engagement bénévole en club",
      icon: "⚽",
      details: ["Sport étude", "Bénévolat", "Esprit d'équipe"]
    },
    {
      title: "Mécanique",
      description: "Projet personnel de création d'un véhicule 2 roues",
      icon: "🔧",
      details: ["Projet personnel", "Innovation", "Ingénierie"]
    },
    {
      title: "Technologie",
      description: "Veille technologique et exploration des nouvelles tendances",
      icon: "💻",
      details: ["IA & ML", "Développement", "Innovation"]
    }
  ];

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        
        {/* Section Hero */}
        <section className="border-starwars bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-yellow-600/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h1 className="font-star text-yellow-400 text-4xl md:text-5xl mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Bienvenue jeune Padawan
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-2xl font-bold text-black">
                    TR
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Tristan ROTH</h2>
                    <p className="text-yellow-400">Développeur Full-Stack • 21 ans</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  Étudiant en 1ère année de <span className="text-yellow-400 font-semibold">Master of science</span> à Epitech Nancy, 
                  spécialité <span className="text-yellow-400 font-semibold">IA & Big Data</span>.
                </p>
                
                <p className="text-gray-300 leading-relaxed">
                  Passionné par le développement logiciel et web, je travaille actuellement sur la réalisation d'un outil destiné à être intégré au site internet de 
                  <span className="text-yellow-400 font-semibold"> l'Institut National de Recherche et de Sécurité (INRS)</span>, et j'ai mené plusieurs projets en IA, 
                  architecture logicielle, et en développement web.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="border-starwars-nopadding p-4 bg-gray-800/50">
                  <h3 className="text-yellow-400 font-semibold mb-3 flex items-center">
                    <span className="mr-2">📍</span> Informations
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Formation :</span>
                      <span className="text-white">Master of Science - IA & Big Data</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Localisation :</span>
                      <span className="text-white">Nancy, France</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Niveau :</span>
                      <span className="text-white">Anglais B2</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Mobilité :</span>
                      <span className="text-white">Permis B - Véhiculé</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Soft Skills */}
        <section className="border-starwars bg-gray-900/50 backdrop-blur-sm">
          <h2 className="font-star text-yellow-400 text-3xl mb-6 flex items-center">
            <span className="mr-3">🌟</span>
            Savoir-Être
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((item, index) => (
              <div key={index} className="group p-4 bg-gray-800/50 rounded-lg border border-yellow-600/20 hover:border-yellow-400/50 transition-all duration-300 hover:bg-gray-700/50">
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-white font-semibold">{item.skill}</h3>
                </div>
                <p className="text-gray-300 text-sm group-hover:text-yellow-100 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Passions */}
        <section className="border-starwars bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-sm">
          <h2 className="font-star text-yellow-400 text-3xl mb-6 flex items-center">
            <span className="mr-3">❤️</span>
            Centres d'Intérêts & Passions
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {passions.map((passion, index) => (
              <div key={index} className="bg-gray-800/60 p-6 rounded-lg border border-yellow-600/30 hover:border-yellow-400/60 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-2xl">
                    {passion.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{passion.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">{passion.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {passion.details.map((detail, detailIndex) => (
                    <span key={detailIndex} className="px-3 py-1 bg-yellow-400/10 text-yellow-400 rounded-full text-xs border border-yellow-400/20">
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Recommandation */}
        <section className="border-starwars bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 backdrop-blur-sm border-yellow-600/40">
          <h2 className="font-star text-yellow-400 text-3xl mb-6 flex items-center">
            <span className="mr-3">💬</span>
            Recommandation
          </h2>
          
          <div className="relative">
            <div className="absolute top-0 left-0 text-6xl text-yellow-400/20 font-serif leading-none">"</div>
            <div className="pl-8">
              <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-4">
                Tristan s'est montré motivé, sérieux et très impliqué. Il a réalisé des tâches avec succès et efficacité. 
                Son professionnalisme et son envie d'apprendre ont été très appréciés.
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black font-bold">
                  JM
                </div>
                <div>
                  <p className="text-white font-semibold">Johanne Motte</p>
                  <p className="text-yellow-400 text-sm">RH chez ELECTAVIA • Stage 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;