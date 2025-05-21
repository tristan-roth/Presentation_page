import React from 'react';

const CVSection = () => {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-star text-white mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Curriculum Vitae
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Découvrez mon parcours professionnel, mes formations et mes expériences. 
            Mon CV détaille l'ensemble de mes compétences et réalisations.
          </p>
        </div>

        {/* Aperçu du CV */}
        <div className="border-starwars bg-gray-900/50 backdrop-blur-sm mb-8">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-2xl">📄</span>
            <h3 className="text-xl font-star text-yellow-400">Aperçu du CV</h3>
          </div>
          
          <div className="flex justify-center mb-6">
            <div className="relative group">
              <img
                src="/cv-preview.png"
                alt="Aperçu du CV"
                className="w-full max-w-xl rounded-xl shadow-lg border border-yellow-600/30 transition-all duration-300 group-hover:shadow-yellow-400/30 group-hover:shadow-xl group-hover:border-yellow-400/50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Actions et informations */}
        <div className="gap-6 mb-8">
          {/* Téléchargement */}
          <div className="border-starwars bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-2xl">📥</span>
              <h3 className="text-xl font-star text-yellow-400">Téléchargement</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Téléchargez mon CV complet au format PDF pour une consultation hors ligne.
            </p>
            <a
              href="/CV-Tristan-ROTH.pdf"
              download
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 group"
            >
              <span>📄</span>
              <span>Télécharger le CV</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-8">
          <p className="text-gray-400 mb-4">
            Une question sur mon parcours ? N'hésitez pas à me contacter !
          </p>
        </div>
      </div>
    </div>
  );
};

export default CVSection;