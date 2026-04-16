export const portfolioData = {
  navigation: [
    { id: "hero", label: "Intro" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "works", label: "Works" },
    { id: "cv", label: "CV" },
    { id: "contact", label: "Contact" },
  ],
  hero: {
    brand: "Vie2Debauche",
    eyebrow: "Creative developer portfolio",
    title: ["Raw code.", "Sharp interfaces."],
    subtitle:
      "Je concois des experiences web brutes, elegantes et modernes, avec une attention forte portee au rythme, au detail et a la lisibilite.",
    primaryCta: {
      label: "Voir les projets",
      href: "#works",
    },
    secondaryCta: {
      label: "Me contacter",
      href: "#contact",
    },
    video: "/hyperspace.mp4",
    metrics: [
      { label: "Formation", value: "BUT Informatique" },
      { label: "Localisation", value: "Nancy, France" },
      { label: "Mobilite", value: "Permis B - Vehicule" },
      { label: "Langue", value: "Anglais B2" },
    ],
  },
  profile: {
    name: "Tristan ROTH",
    age: "21 ans",
    role: "Developpeur Full-Stack",
    school:
      "Etudiant en 3e annee de BUT Informatique a l'IUT Nancy Charlemagne, parcours Realisation d'Applications - Ingenierie Logicielle.",
    summary:
      "Passionne par le developpement web et logiciel, j'interviens sur des sujets de refonte produit, d'architecture, d'IA et d'experience utilisateur.",
    availability: [
      "Ouvert aux opportunites",
      "Reponse sous 24h",
      "Remote / Presentiel",
    ],
    contact: {
      email: "tristanroth00@gmail.com",
      github: "https://github.com/tristan-roth",
      linkedin: "https://www.linkedin.com/in/tristan-roth-3b5232270/",
      linkedinLabel: "linkedin.com/in/tristan-roth-3b5232270",
    },
  },
  about: {
    sectionLabel: "Chapitre 01",
    title: "Construire des interfaces qui ont du relief.",
    narrative: [
      "Je travaille a la jonction entre logique applicative, architecture propre et execution visuelle. Mon approche consiste a rendre les produits plus lisibles, plus rapides et plus desirables, sans perdre la rigueur technique.",
      "Aujourd'hui, j'avance sur la refonte de Atoupro.com tout en developpant des projets autour de l'IA, du web et de l'ingenierie logicielle. J'aime les interfaces qui racontent quelque chose des les premieres secondes.",
    ],
    focusAreas: [
      {
        label: "Refonte produit",
        text: "Modernisation d'interfaces, clarte des parcours et montee en gamme visuelle.",
      },
      {
        label: "Ingenierie logicielle",
        text: "Architecture, modelisation UML, MVC et qualite de code sur des projets concrets.",
      },
      {
        label: "Exploration",
        text: "IA, jeux, automatisation et veille technologique continue.",
      },
    ],
    softSkills: [
      "Esprit d'equipe",
      "Adaptation",
      "Perseverance",
      "Sociabilite",
    ],
    passions: [
      {
        title: "Football",
        description: "Sport etude a Nancy avec engagement benevole en club.",
      },
      {
        title: "Mecanique",
        description: "Projet personnel de creation d'un vehicule 2 roues.",
      },
      {
        title: "Technologie",
        description: "Veille active et exploration des nouvelles tendances.",
      },
    ],
    quote: {
      text:
        "Tristan s'est montre motive, serieux et tres implique. Il a realise des taches avec succes et efficacite.",
      author: "Johanne Motte",
      role: "RH chez ELECTAVIA",
      context: "Stage 2024",
    },
  },
  projects: [
    {
      title: "Portfolio Vie2Debauche",
      year: "2025",
      status: "En cours",
      duration: "Evolution continue",
      summary:
        "Site personnel pour presenter mon profil, mes projets et mon univers technique.",
      description:
        "Le portfolio devient ici un terrain d'experimentation pour la direction artistique, la narration au scroll et la mise en scene de mes projets.",
      tech: ["React", "Vite", "Tailwind CSS"],
      media: "/portfolio.png",
      link: "https://github.com/tristan-roth/Presentation_page",
      layout: "wide",
    },
    {
      title: "Tower Defense & Machine Learning",
      year: "2024",
      status: "Termine",
      duration: "216h",
      summary:
        "Projet tutore combinant developpement de jeu 2D et intelligence artificielle.",
      description:
        "Implementation d'algorithmes de machine learning pour optimiser les strategies de defense et construire une IA adaptive cote joueur.",
      tech: ["Java", "JavaFX", "Machine Learning"],
      media: "/tower-defense.gif",
      link: "",
      layout: "tall",
    },
    {
      title: "Refonte Atoupro.com",
      year: "2025",
      status: "En cours",
      duration: "3 mois",
      summary:
        "Refonte complete du site web avec architecture modernisee et UX renforcee.",
      description:
        "Migration technique du socle PHP 7.0 / Smarty 2.6 / PostgreSQL 9.5 vers PHP 8.3 / Smarty 5 / PostgreSQL 15, avec travail sur la performance, la securisation et l'experience utilisateur.",
      tech: ["PHP", "Smarty", "JavaScript", "SQL", "Tailwind CSS"],
      media: "/atoupro-demo.gif",
      link: "https://www.atoupro.com/",
      layout: "wide",
    },
    {
      title: "Projet IA",
      year: "2024",
      status: "Termine",
      duration: "2 semaines",
      summary:
        "Comparaison de plusieurs algorithmes d'IA pour la resolution de problemes.",
      description:
        "Projet oriente experimentation et analyse des performances, avec une mise en oeuvre concrete des differentes approches de resolution.",
      tech: ["Java"],
      media: "/projetIA.gif",
      link: "https://github.com/tristan-roth/ProjetIA-RAIL2-ROTH-BOURDON",
      layout: "standard",
    },
    {
      title: "Crazy Charly Days",
      year: "2024",
      status: "Termine",
      duration: "8h",
      summary:
        "Application de gestion d'affectations de taches developpee lors d'un hackathon.",
      description:
        "Interface orientee rapidite d'execution avec notifications en temps reel et organisation claire des affectations.",
      tech: ["Symfony", "Java", "PHP", "MySQL", "JavaScript"],
      media: "",
      link: "",
      layout: "standard",
    },
  ],
  skills: {
    sectionLabel: "Chapitre 02",
    title: "Des bases solides, un profil transverse.",
    intro:
      "Je couvre autant la couche interface que la logique metier, la base de donnees et l'environnement de livraison. Les niveaux restent faciles a ajuster depuis ce fichier.",
    categories: [
      {
        title: "Langages",
        summary: "Base technique principale pour les projets academiques et web.",
        skills: [
          { name: "Java", level: 90 },
          { name: "JavaScript", level: 85 },
          { name: "PHP", level: 80 },
          { name: "C++", level: 75 },
          { name: "Bash", level: 70 },
        ],
      },
      {
        title: "Web",
        summary: "Conception d'interfaces modernes et developpement front-end.",
        skills: [
          { name: "React", level: 90 },
          { name: "Vue.js", level: 80 },
          { name: "Slim (PHP)", level: 75 },
          { name: "HTML / CSS", level: 95 },
          { name: "Tailwind CSS", level: 85 },
        ],
      },
      {
        title: "Bases de donnees",
        summary: "Modelisation, requetage et maintenance de plusieurs moteurs SQL.",
        skills: [
          { name: "PostgreSQL", level: 85 },
          { name: "MySQL", level: 80 },
          { name: "MariaDB", level: 75 },
          { name: "SQL / PLSQL", level: 90 },
        ],
      },
      {
        title: "DevOps & outils",
        summary: "Environnement de travail, versioning et industrialisation.",
        skills: [
          { name: "Docker", level: 80 },
          { name: "CI / CD", level: 75 },
          { name: "Virtualisation", level: 70 },
          { name: "Git", level: 85 },
        ],
      },
      {
        title: "Architecture",
        summary: "Organisation des projets et methodes de conception.",
        skills: [
          { name: "UML", level: 85 },
          { name: "MVC", level: 90 },
          { name: "Agile", level: 80 },
          { name: "Gestion de projet", level: 75 },
        ],
      },
      {
        title: "Emergent",
        summary: "Technologies en progression et sujets d'exploration.",
        skills: [
          { name: "Flutter", level: 70 },
          { name: "Intelligence artificielle", level: 65 },
          { name: "Optimisation", level: 70 },
          { name: "Compilation", level: 60 },
        ],
      },
    ],
  },
  cv: {
    sectionLabel: "Chapitre 03",
    title: "Le parcours complet, accessible en un geste.",
    summary:
      "Mon CV reste disponible en consultation rapide et telechargement direct. La section est prevue pour accueillir plus tard des experiences detaillees ou une timeline si besoin.",
    preview: "/cv-preview.png",
    file: "/CV-Tristan-ROTH.pdf",
  },
  contact: {
    sectionLabel: "Chapitre 04",
    title: "Let's build something sharp.",
    intro:
      "Projet, alternance, collaboration ou simple prise de contact : je suis disponible pour echanger rapidement.",
    formEndpoint: "https://formspree.io/f/mgvkpakn",
    methods: [
      {
        label: "Email",
        value: "tristanroth00@gmail.com",
        href: "mailto:tristanroth00@gmail.com",
      },
      {
        label: "GitHub",
        value: "github.com/tristan-roth",
        href: "https://github.com/tristan-roth",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/tristan-roth-3b5232270",
        href: "https://www.linkedin.com/in/tristan-roth-3b5232270/",
      },
    ],
  },
};
