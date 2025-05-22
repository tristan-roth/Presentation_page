import React, { useState } from 'react';

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgvkpakn", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus(null), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-star text-white mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Me Contacter
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Une question, un projet ou simplement envie d'échanger ? 
            N'hésitez pas à me contacter, je serais ravi de discuter avec vous !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire de contact */}
          <div className="border-starwars bg-gray-900/50 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-6">
              <span className="text-2xl">📧</span>
              <h3 className="text-xl font-star text-yellow-400">Envoyez-moi un message</h3>
            </div>

            {formStatus === 'success' && (
              <div className="mb-4 p-4 bg-green-600/20 border border-green-400 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">✅</span>
                  <span className="text-green-300">Message envoyé avec succès ! Je vous répondrai rapidement.</span>
                </div>
              </div>
            )}

            {formStatus === 'error' && (
              <div className="mb-4 p-4 bg-red-600/20 border border-red-400 rounded-lg">
                <div className="flex items-center space-x-2">
                  <span className="text-red-400">❌</span>
                  <span className="text-red-300">Erreur lors de l'envoi. Veuillez réessayer.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-yellow-300 font-semibold text-sm">
                  <span className="flex items-center space-x-2">
                    <span>👤</span>
                    <span>Nom *</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 focus:outline-none transition-all duration-300"
                  placeholder="Votre nom complet"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-yellow-300 font-semibold text-sm">
                  <span className="flex items-center space-x-2">
                    <span>📧</span>
                    <span>Email *</span>
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 focus:outline-none transition-all duration-300"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-yellow-300 font-semibold text-sm">
                  <span className="flex items-center space-x-2">
                    <span>💼</span>
                    <span>Sujet</span>
                  </span>
                </label>
                <input
                  type="text"
                  name="subject"
                  className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 focus:outline-none transition-all duration-300"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-yellow-300 font-semibold text-sm">
                  <span className="flex items-center space-x-2">
                    <span>💬</span>
                    <span>Message *</span>
                  </span>
                </label>
                <textarea
                  name="message"
                  rows="6"
                  required
                  className="w-full bg-gray-800 border-2 border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold py-3 px-6 rounded-lg hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 group flex items-center justify-center space-x-2"
              >
                <span>📤</span>
                <span>Envoyer le message</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            {/* Moyens de contact */}
            <div className="border-starwars bg-gray-900/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-2xl">📞</span>
                <h3 className="text-xl font-star text-yellow-400">Autres moyens de contact</h3>
              </div>

              <div className="space-y-4">

                <div className="group">
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <span className="text-yellow-400 text-xl group-hover:scale-110 transition-transform">💼</span>
                    <div>
                      <p className="text-yellow-300 font-semibold">LinkedIn</p>
                      <a 
                        href="https://linkedin.com/in/tristan-roth" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        linkedin.com/in/tristan-roth
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-800/50 transition-colors">
                    <span className="text-yellow-400 text-xl group-hover:scale-110 transition-transform">💻</span>
                    <div>
                      <p className="text-yellow-300 font-semibold">GitHub</p>
                      <a 
                        href="https://github.com/tristan-roth" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        github.com/tristan-roth
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="border-starwars bg-gray-900/50 backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-2xl">⏰</span>
                <h3 className="text-xl font-star text-yellow-400">Disponibilité</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">🟢</span>
                  <span className="text-gray-300">Ouvert aux opportunités</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400">⚡</span>
                  <span className="text-gray-300">Réponse sous 24h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400">🌍</span>
                  <span className="text-gray-300">Remote / Présentiel</span>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="border-starwars bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
              <div className="text-center">
                <span className="text-3xl mb-3 block">🚀</span>
                <h4 className="text-yellow-400 font-star text-lg mb-2">Travaillons ensemble !</h4>
                <p className="text-gray-300 text-sm">
                  Que ce soit pour un projet, une collaboration ou simplement pour dire bonjour depuis mon super site web, 
                  je suis toujours ravi de rencontrer de nouvelles personnes passionnées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;