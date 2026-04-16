import React, { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Workflow,
} from "lucide-react";
import { portfolioData } from "./data/portfolioData";

const sectionIds = portfolioData.navigation.map((item) => item.id);
const skillIcons = [Code2, Layers3, Database, Workflow, Briefcase, Sparkles];

export default function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const activeSection = useActiveSection(sectionIds);
  const scrollProgress = useScrollProgress();

  return (
    <div className="site-shell">
      <CustomCursor prefersReducedMotion={prefersReducedMotion} />
      <div className="site-ambient" aria-hidden="true" />

      <FloatingNav activeSection={activeSection} navigation={portfolioData.navigation} />
      <ProgressRail
        activeSection={activeSection}
        navigation={portfolioData.navigation}
        scrollProgress={scrollProgress}
      />

      <main className="relative z-10">
        <HeroSection
          hero={portfolioData.hero}
          profile={portfolioData.profile}
          prefersReducedMotion={prefersReducedMotion}
          scrollProgress={scrollProgress}
        />
        <AboutSection about={portfolioData.about} profile={portfolioData.profile} />
        <SkillsSection skills={portfolioData.skills} />
        <WorksSection projects={portfolioData.projects} />
        <CvSection cv={portfolioData.cv} />
        <ContactSection contact={portfolioData.contact} profile={portfolioData.profile} />
      </main>
    </div>
  );
}

function HeroSection({ hero, profile, prefersReducedMotion, scrollProgress }) {
  const mediaStyle = prefersReducedMotion
    ? undefined
    : {
        transform: `translate3d(0, ${scrollProgress * 32}px, 0) scale(${1 + scrollProgress * 0.03})`,
      };

  return (
    <section
      id="hero"
      className="section-shell min-h-screen scroll-mt-24"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-end gap-10 px-6 pb-16 pt-28 lg:grid-cols-[1.4fr_0.8fr] lg:px-10 lg:pb-20 lg:pt-32">
        <div className="hero-stage">
          <div className="hero-media" style={mediaStyle}>
            <video
              src={hero.video}
              autoPlay
              muted
              loop
              playsInline
              className="hero-video"
              aria-hidden="true"
            />
          </div>

          <Reveal className="relative z-10 max-w-4xl">
            <p className="eyebrow">{hero.eyebrow}</p>
            <p className="hero-brand">{hero.brand}</p>
            <h1 id="hero-title" className="hero-title display-font">
              <span>{hero.title[0]}</span>
              <span>{hero.title[1]}</span>
            </h1>
            <p className="hero-copy">{hero.subtitle}</p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={hero.primaryCta.href} className="button-primary" data-cursor="hover">
                <span>{hero.primaryCta.label}</span>
                <ArrowUpRight size={18} />
              </a>
              <a href={hero.secondaryCta.href} className="button-secondary" data-cursor="hover">
                <span>{hero.secondaryCta.label}</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="space-y-6">
          <Reveal className="surface-card p-6 lg:p-8" delay={120}>
            <p className="section-kicker">Profil</p>
            <div className="mt-5 space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
                {profile.name}
              </h2>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]">
                {profile.role} . {profile.age}
              </p>
              <p className="body-copy">{profile.school}</p>
              <p className="body-copy">{profile.summary}</p>
            </div>
          </Reveal>

          <Reveal className="surface-card p-6" delay={220}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {hero.metrics.map((metric) => (
                <div key={metric.label} className="metric-block">
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-value">{metric.value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="hero-scroll-cue" delay={320}>
            <span>Scroll to enter</span>
            <ArrowDown size={16} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ about, profile }) {
  return (
    <section id="about" className="section-shell scroll-mt-24" aria-labelledby="about-title">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.55fr_1fr] lg:px-10 lg:py-28">
        <Reveal className="lg:sticky lg:top-28 lg:h-fit">
          <SectionIntro
            label={about.sectionLabel}
            title={about.title}
            body="Une section construite comme un manifeste personnel : vision, posture, savoir-etre et centre d'interet."
          />
        </Reveal>

        <div className="space-y-8">
          <Reveal className="surface-card p-6 lg:p-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr]">
              <div className="space-y-5">
                <h2 id="about-title" className="display-font text-4xl leading-none text-[var(--text-primary)] md:text-5xl">
                  {about.title}
                </h2>
                {about.narrative.map((paragraph) => (
                  <p key={paragraph} className="body-copy body-copy-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="space-y-4 border-t border-[var(--border-muted)] pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <div className="info-row">
                  <MapPin size={16} />
                  <span>{heroMetricValue("Localisation")}</span>
                </div>
                <div className="info-row">
                  <Briefcase size={16} />
                  <span>{profile.role}</span>
                </div>
                {profile.availability.map((item) => (
                  <div key={item} className="availability-chip">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-3">
            {about.focusAreas.map((area, index) => (
              <Reveal key={area.label} className="surface-card p-6" delay={index * 90}>
                <p className="section-kicker">Focus {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">{area.label}</h3>
                <p className="mt-3 body-copy">{area.text}</p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="surface-card p-6 lg:p-8">
              <p className="section-kicker">Recommandation</p>
              <blockquote className="quote-block display-font">
                "{about.quote.text}"
              </blockquote>
              <div className="mt-6 border-t border-[var(--border-muted)] pt-5">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-[var(--text-primary)]">
                  {about.quote.author}
                </p>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {about.quote.role} . {about.quote.context}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              <Reveal className="surface-card p-6" delay={120}>
                <p className="section-kicker">Savoir-etre</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {about.softSkills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal className="surface-card p-6 md:col-span-2" delay={180}>
                <p className="section-kicker">Centres d'interet</p>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  {about.passions.map((passion) => (
                    <div key={passion.title} className="inner-panel">
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">{passion.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                        {passion.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function heroMetricValue(label) {
    const match = portfolioData.hero.metrics.find((metric) => metric.label === label);
    return match ? match.value : "";
  }
}

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-shell scroll-mt-24" aria-labelledby="skills-title">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionIntro label={skills.sectionLabel} title={skills.title} body={skills.intro} />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.categories.map((category, index) => {
            const Icon = skillIcons[index % skillIcons.length];

            return (
              <Reveal key={category.title} className="surface-card p-6" delay={index * 70}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2
                      id={index === 0 ? "skills-title" : undefined}
                      className="text-xl font-semibold text-[var(--text-primary)]"
                    >
                      {category.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                      {category.summary}
                    </p>
                  </div>
                  <div className="icon-chip">
                    <Icon size={18} />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="text-[var(--text-primary)]">{skill.name}</span>
                        <span className="text-[var(--text-secondary)]">{skill.level}%</span>
                      </div>
                      <div className="progress-track">
                        <div className="progress-value" style={{ width: `${skill.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WorksSection({ projects }) {
  return (
    <section id="works" className="section-shell scroll-mt-24" aria-labelledby="works-title">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <SectionIntro
            label="Selected Works"
            title="Une selection de projets montes comme une galerie."
            body="Chaque carte reprend les informations deja presentes dans le portfolio et reste simple a etendre via le fichier de donnees."
          />
        </Reveal>

        <div className="mt-10 grid auto-rows-[260px] gap-5 xl:grid-cols-12">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              className={projectCardClass(project.layout)}
              delay={index * 80}
            >
              <ProjectCard project={project} titleId={index === 0 ? "works-title" : undefined} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CvSection({ cv }) {
  return (
    <section id="cv" className="section-shell scroll-mt-24" aria-labelledby="cv-title">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.6fr_1fr] lg:px-10 lg:py-28">
        <Reveal>
          <SectionIntro label={cv.sectionLabel} title={cv.title} body={cv.summary} />
          <div className="mt-8">
            <a href={cv.file} download className="button-primary" data-cursor="hover">
              <span>Telecharger le CV</span>
              <Download size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal className="surface-card p-4 lg:p-6" delay={120}>
          <div className="cv-preview-frame">
            <img
              src={cv.preview}
              alt="Apercu du CV de Tristan Roth"
              className="cv-preview-image"
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="skill-pill">Consultation rapide</span>
            <span className="skill-pill">PDF telechargeable</span>
            <span className="skill-pill">Section extensible</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection({ contact, profile }) {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(contact.formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormStatus("success");
      form.reset();
      window.setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
      window.setTimeout(() => setFormStatus("idle"), 5000);
    }
  }

  return (
    <section
      id="contact"
      className="section-shell scroll-mt-24 pb-12"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal className="cta-panel">
          <p className="eyebrow">{contact.sectionLabel}</p>
          <h2 id="contact-title" className="display-font cta-title">
            {contact.title}
          </h2>
          <p className="hero-copy max-w-2xl">{contact.intro}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.7fr_1fr]">
          <Reveal className="surface-card p-6 lg:p-8">
            <p className="section-kicker">Contact direct</p>
            <div className="mt-6 space-y-4">
              {contact.methods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  className="contact-link"
                  data-cursor="hover"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                      {method.label}
                    </p>
                    <p className="mt-2 text-base text-[var(--text-primary)]">{method.value}</p>
                  </div>
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>

            <div className="mt-8 border-t border-[var(--border-muted)] pt-6">
              <p className="section-kicker">Presence</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {profile.availability.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4 text-[var(--text-secondary)]">
              <a
                href={profile.contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="icon-link"
                data-cursor="hover"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="icon-link"
                data-cursor="hover"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.contact.email}`}
                aria-label="Email"
                className="icon-link"
                data-cursor="hover"
              >
                <Mail size={18} />
              </a>
            </div>
          </Reveal>

          <Reveal className="surface-card p-6 lg:p-8" delay={120}>
            <p className="section-kicker">Formulaire</p>
            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="form-label">
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="votre.email@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="form-label">
                  Sujet
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Sujet du message"
                />
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  className="form-input min-h-[180px] resize-y"
                  placeholder="Votre message..."
                />
              </div>

              <div aria-live="polite" className="min-h-6 text-sm text-[var(--text-secondary)]">
                {formStatus === "success" && "Message envoye avec succes."}
                {formStatus === "error" && "Erreur lors de l'envoi. Veuillez reessayer."}
              </div>

              <button type="submit" className="button-primary w-full justify-center" data-cursor="hover">
                <span>Envoyer le message</span>
                <ArrowUpRight size={18} />
              </button>
            </form>
          </Reveal>
        </div>

        <footer className="footer-strip">
          <span>{profile.name}</span>
          <span>React / Tailwind / Single Page</span>
        </footer>
      </div>
    </section>
  );
}

function ProjectCard({ project, titleId }) {
  const hasMedia = Boolean(project.media);

  return (
    <article className={`project-card ${hasMedia ? "" : "project-card-text"}`} data-cursor="hover">
      <div className="project-glow" aria-hidden="true" />

      {hasMedia ? (
        <div className="project-media-wrap">
          <img
            src={project.media}
            alt={`Apercu du projet ${project.title}`}
            className="project-media"
          />
        </div>
      ) : (
        <div className="project-media-fallback">
          <span className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
            Concept / Hackathon
          </span>
        </div>
      )}

      <div className="project-content">
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
          <span>{project.status}</span>
          <span>{project.year}</span>
          <span>{project.duration}</span>
        </div>

        <h3
          id={titleId}
          className="mt-4 text-2xl font-semibold leading-tight text-[var(--text-primary)] md:text-3xl"
        >
          {project.title}
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-primary)]/88">
          {project.summary}
        </p>

        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="project-tech">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
              data-cursor="hover"
            >
              <span>Voir le projet</span>
              <ExternalLink size={16} />
            </a>
          ) : (
            <span className="project-link project-link-muted">
              Projet non public
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function SectionIntro({ label, title, body }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h2 className="mt-5 display-font text-4xl leading-none text-[var(--text-primary)] md:text-6xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl body-copy">{body}</p>
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function FloatingNav({ activeSection, navigation }) {
  return (
    <header className="floating-nav-wrap">
      <div className="floating-nav">
        <a href="#hero" className="brand-lockup" data-cursor="hover">
          <span className="brand-mark">V2D</span>
          <span className="brand-name">Vie2Debauche</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Sections du portfolio">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-pill ${activeSection === item.id ? "nav-pill-active" : ""}`}
              data-cursor="hover"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function ProgressRail({ activeSection, navigation, scrollProgress }) {
  return (
    <aside className="progress-rail" aria-hidden="true">
      <div className="progress-line">
        <div className="progress-line-value" style={{ height: `${scrollProgress * 100}%` }} />
      </div>
      <div className="space-y-3">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`progress-dot ${activeSection === item.id ? "progress-dot-active" : ""}`}
          >
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </aside>
  );
}

function CustomCursor({ prefersReducedMotion }) {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const pointerQuery = window.matchMedia("(pointer: fine)");
    setEnabled(pointerQuery.matches);

    function handleChange(event) {
      setEnabled(event.matches);
    }

    if (pointerQuery.addEventListener) {
      pointerQuery.addEventListener("change", handleChange);
    } else {
      pointerQuery.addListener(handleChange);
    }

    return () => {
      if (pointerQuery.removeEventListener) {
        pointerQuery.removeEventListener("change", handleChange);
      } else {
        pointerQuery.removeListener(handleChange);
      }
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    function handleMove(event) {
      const interactive = event.target.closest("a, button, [data-cursor='hover']");
      setPosition({ x: event.clientX, y: event.clientY });
      setActive(Boolean(interactive));
    }

    function handleLeave() {
      setActive(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className={`custom-cursor ${active ? "custom-cursor-active" : ""}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  );
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    function handleChange(event) {
      setPrefersReducedMotion(event.matches);
    }

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
}

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries[0]) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.15, 0.3, 0.55],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight <= 0) {
        setScrollProgress(0);
        return;
      }

      setScrollProgress(window.scrollY / scrollHeight);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return scrollProgress;
}

function projectCardClass(layout) {
  const base = "surface-card overflow-hidden";

  if (layout === "wide") {
    return `${base} xl:col-span-7`;
  }

  if (layout === "tall") {
    return `${base} xl:col-span-5 xl:row-span-2`;
  }

  return `${base} xl:col-span-5`;
}
