// Tipos para la configuración del sitio
interface SocialLinks {
  email: string;
  linkedin: string;
  Instagram: string;
  github: string;
}

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  skills: string[];
}

interface Education {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
}

interface SiteConfig {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: SocialLinks;
  cv: {
    url: string;
    filename: string;
  };
  aboutMe: string[];
  skills: string[];
  projects: Project[];
  experience: string[];
  education: Education[];
}

export const siteConfig: SiteConfig = {
  name: "Matias Rocha",
  title: "Desarrollador Full Stack Trainee",
  description: "Sitio web portfolio de Matias Rocha",
  accentColor: "#2A7B9B",
  social: {
    email: "maty.comu@gmail.com",
    linkedin: "https://www.linkedin.com/in/matias-rocha-78b141259/",
    Instagram: "https://instagram.com/matiasrocha_1992",
    github: "https://github.com/MatiasRocha92",
  },
  cv: {
    url: "/cv/matias-rocha-cv.pdf",
    filename: "Matias-Rocha-CV.pdf",
  },
  aboutMe: [
    "Vengo de un mundo donde cada decisión cuenta y la resolución de problemas bajo presión es la norma. Durante años, mi campo de trabajo fue la logística y la gestión de emergencias, liderando equipos en terrenos complejos y planificando operaciones críticas. Esa experiencia forjó en mí una mentalidad analítica y una calma que hoy aplico a un nuevo tipo de desafío: el desarrollo de software.",
    "Como desarrollador Full-Stack autodidacta, he canalizado mi pasión por aprender y construir soluciones desde cero. La misma disciplina que me llevó a coordinar operativos complejos, la utilizo ahora para escribir código limpio, eficiente y escalable. Disfruto de todo el ciclo de vida del desarrollo, desde la concepción de una idea hasta su despliegue final.", 
    "Busco mi primera oportunidad en el sector IT para aportar una perspectiva diferente, una ética de trabajo sólida y un compromiso total para resolver problemas, ya sea en una línea de código o en un proyecto a gran escala.",
  ],
  skills: [
    "HTML", "CSS", "Tailwind", "Bootstrap", "Javascript", "React", 
    "Node.js", "Python", "AWS", "Docker", "Git", "GitHub", "Linux", 
    "SQL", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "Astro", 
    "Scss", "Figma", "Typescript"
  ],
  projects: [
    {
      name: "Portfolio Personal",
      description: "Portfolio profesional desarrollado con Astro y Tailwind CSS. Diseño moderno y responsive que muestra mis habilidades y proyectos de manera elegante.",
      image: "/images/portfolio.jpg",
      link: "https://github.com/MatiasRocha92/Minimal-portfolio",
      skills: ["Astro", "Tailwind CSS", "TypeScript"],
    },
    {
      name: "Unisem S.A.",
      description: "Aplicación web moderna de React para UNISEM S.A., empresa de servicios médicos de emergencia. Esta aplicación migra el sitio web original (HTML, CSS, JS) a una arquitectura moderna basada en componentes React.",
      image: "src/assets/images/unisem.webp",
      link: "https://unisem.vercel.app/",
      skills: ["React", "Vite", "HTML", "Javascript", "Tailwind CSS", "AOS 2.3.4"],
    },
    {
      name: "🍳 Sazonea",
      description: "Una aplicación web moderna para descubrir, guardar y compartir recetas criollas argentinas. Desarrollada con React, Vite, Firebase y optimizada para rendimiento.",
      image: "/images/task-app.jpg",
      link: "https://recetas-gold.vercel.app/",
      skills: ["React 18", "Vite", "Tailwind CSS", "Firebase", "Lazy load", "Memoización", "Framer Motion"],
    },
    {
      name: "PortfoliOS",
      description: "Portfolio con estilo de escritorio MacOS.",
      image: "/images/task-app.jpg",
      link: "https://portfolio-desk-eight.vercel.app/",
      skills: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Mi Primer Carrito",
      description: "Página con lógica de carrito, con la posibilidad de agregar y eliminar productos.",
      image: "/images/task-app.jpg",
      link: "https://primer-carrito-900021.netlify.app/",
      skills: ["HTML", "CSS", "Javascript"],
    },
    {
      name: "Mi Primer Calculadora",
      description: "Una calculadora simple con la posibilidad de realizar operaciones básicas.",
      image: "/images/task-app.jpg",
      link: "https://klculador-01.netlify.app/",
      skills: ["HTML", "CSS", "Javascript"],
    },
  ],
  experience: [
    "He liderado equipos en situaciones donde tener la herramienta correcta significaba la diferencia entre el éxito y el fracaso. Desde equipos de rescate hasta centros de comando, he visto la importancia crítica de tener sistemas que sean funcionales en el campo y robustos en su núcleo.",
    "Esa es mi visión como desarrollador Full-Stack. Construyo interfaces de Frontend que se sienten como herramientas intuitivas y fiables para el usuario. Y desarrollo un Backend que actúa como el motor de esa herramienta: potente, eficiente y a prueba de fallos.",
    "No solo creo aplicaciones; construyo el equipo completo que se necesita para superar un desafío.",
  ],
  education: [
    {
      school: "Autodidacta / Plataformas Online",
      degree: "Desarrollo Web Full Stack",
      dateRange: "2022 - Presente",
      achievements: [
        "Formación continua y práctica en tecnologías Frontend y Backend.",
        "Desarrollo de proyectos personales para aplicar y validar conocimientos.",
        "Enfoque en tecnologías modernas como Astro, React y Node.js.",
      ],
    },
    {
      school: "Servicio Nacional de Manejo del Fuego / Defensa Civil",
      degree: "Especialización en Operaciones y Comando de Incidentes",
      dateRange: "2017 - 2022",
      achievements: [
        "Jefatura de Centro de Comando: recolección, procesamiento y predicción de datos.",
        "Análisis de terreno mediante drones y cámaras multiespectrales.",
        "Liderazgo de equipos en entornos de alta presión y respuesta a emergencias.",
      ],
    },
    {
      school: "E.E.M.P.A. 1151",
      degree: "Título Secundario",
      dateRange: "Finalizado",
      achievements: [
        "Título de Bachiller.",
      ],
    },
  ],
};
