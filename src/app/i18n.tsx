import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: { resume: "Resume" },

    hero: {
      label: "Game Developer / Software Engineer — Peru",
      tagline: "Building interactive experiences through code, systems, and design.",
      bio: "Game Developer and Software Engineer focused on Unity and C#. I build gameplay systems, interactive experiences, and multiplayer applications, with experience across VR, WebGL, and traditional game development.",
    },

    stats: {
      years: "Years of Experience",
      games: "Projects Developed",
      tech: "Main Tech",
      techValue: "Unity · C#",
    },

    work: { title: "Personal Projects" },
    professional: { title: "Professional Work" },
    experience: { title: "Experience" },
    certificates: { title: "Certificates & Courses" },

    contact: {
      title: "Get in Touch",
      label: "Open to new opportunities",
      message:
        "Whether it's a full-time role, a contract project, or a collaboration — I'm always open to new opportunities and interesting projects.",
      email: "joaquin.incio2002@outlook.com",
      emailBtn: "Send an email",
    },

    about: {
      title: "Who I am",
      p1: "I'm a Game Developer and Software Engineer focused on Unity and C#. I enjoy turning ideas into interactive experiences, with a particular interest in gameplay programming, systems development, and technical problem-solving.",
      p2: "My experience includes developing games and interactive applications across different platforms, including VR and WebGL. I've worked with multiplayer networking, gameplay systems, UI, tools, and other technical aspects of game development, always looking for practical and maintainable solutions.",
      p3: "I'm interested in continuing to grow as a developer, taking on challenging technical problems, learning new technologies, and building experiences that are both enjoyable to use and well-engineered.",
    },

    skills: { title: "What I use" },

    project: {
      back: "All projects",
      year: "Year",
      duration: "Duration",
      team: "Team",
      engine: "Engine",
      role: "Role",
      company: "Company",
      tools: "Tools & Tech",
      screenshots: "Screenshots",
      solo: "Solo",
      members: "members",
      notFound: "Project not found.",
      backHome: "Back to home",
    },

    card: { viewProject: "View project" },
  },

  es: {
    nav: { resume: "CV" },

    hero: {
      label: "Desarrollador de Videojuegos / Ingeniero de Software — Perú",
      tagline: "Construyendo experiencias interactivas a través del código, los sistemas y el diseño.",
      bio: "Desarrollador de Videojuegos e Ingeniero de Software enfocado en Unity y C#. Desarrollo sistemas de gameplay, experiencias interactivas y aplicaciones multijugador, con experiencia en VR, WebGL y desarrollo de videojuegos.",
    },

    stats: {
      years: "Años de Experiencia",
      games: "Proyectos Desarrollados",
      tech: "Tecnología Principal",
      techValue: "Unity · C#",
    },

    work: { title: "Proyectos Personales" },
    professional: { title: "Trabajo Profesional" },
    experience: { title: "Experiencia" },
    certificates: { title: "Certificados y Cursos" },

    contact: {
      title: "Contacto",
      label: "Abierto a nuevas oportunidades",
      message:
        "Ya sea un puesto a tiempo completo, un proyecto por contrato o una colaboración — siempre estoy abierto a nuevas oportunidades y proyectos interesantes.",
      email: "joaquin.incio2002@outlook.com",
      emailBtn: "Enviar un email",
    },

    about: {
      title: "Quién soy",
      p1: "Soy Desarrollador de Videojuegos e Ingeniero de Software, enfocado principalmente en Unity y C#. Me gusta convertir ideas en experiencias interactivas, con especial interés en la programación de gameplay, el desarrollo de sistemas y la resolución de problemas técnicos.",
      p2: "Tengo experiencia desarrollando videojuegos y aplicaciones interactivas para distintas plataformas, incluyendo VR y WebGL. He trabajado con networking multijugador, sistemas de gameplay, UI, herramientas y otros aspectos técnicos del desarrollo de videojuegos, buscando siempre soluciones prácticas y mantenibles.",
      p3: "Me interesa seguir creciendo como desarrollador, enfrentar problemas técnicos desafiantes, aprender nuevas tecnologías y construir experiencias que sean tanto agradables de utilizar como sólidas a nivel técnico.",
    },

    skills: { title: "Qué uso" },

    project: {
      back: "Todos los proyectos",
      year: "Año",
      duration: "Duración",
      team: "Equipo",
      engine: "Motor",
      role: "Rol",
      company: "Empresa",
      tools: "Herramientas y Tecnologías",
      screenshots: "Capturas",
      solo: "Solo",
      members: "miembros",
      notFound: "Proyecto no encontrado.",
      backHome: "Volver al inicio",
    },

    card: { viewProject: "Ver proyecto" },
  },
} as const;

type Translations = typeof translations.en;

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
