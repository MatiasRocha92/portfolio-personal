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

interface Language {
  name: string;
  level: string;
  color: string;
  icon: string;
}

interface Tool {
  name: string;
  color: string;
  icon: string;
}

interface Studying {
  name: string;
  color: string;
  icon: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  details: string;
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
  experience: Experience[];
  education: Education[];
  languages: Language[];
  tools: Tool[];
  studying: Studying[];
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
      link: "https://github.com/MatiasRocha92/portfolio-personal",
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

  ],
  experience: [
    {
      title: "Desarrollador Full-Stack (Freelance)",
      company: "SpaceX",
      period: "04-2021 | 6 meses",
      description: "Contribuí al desarrollo de una aplicación web interna para la gestión del inventario de alimentos en todas las cafeterías de las instalaciones de SpaceX.",
      details: "En el Backend, contribui en el desarrollo de APIs RESTful para manejar la lógica de negocio, asegurando la comunicación en tiempo real entre la base de datos y la interfaz de usuario para un control de stock preciso."
    },
    {
      title: "Liderazgo de Equipos",
      company: "Servicio Nacional de Manejo del Fuego / Defensa Civil",
      period: "2017 - 2022",
      description: "He liderado equipos en situaciones donde tener la herramienta correcta significaba la diferencia entre el éxito y el fracaso. Desde equipos de rescate hasta centros de comando, he visto la importancia crítica de tener sistemas que sean funcionales en el campo y robustos en su núcleo.",
      details: "Esa es mi visión como desarrollador Full-Stack. Construyo interfaces de Frontend que se sienten como herramientas intuitivas y fiables para el usuario. Y desarrollo un Backend que actúa como el motor de esa herramienta: potente, eficiente y a prueba de fallos."
    },
    {
      title: "Desarrollo de Soluciones Completas",
      company: "Proyectos Personales",
      period: "2022 - Presente",
      description: "No solo creo aplicaciones; construyo el equipo completo que se necesita para superar un desafío.",
      details: "Desarrollo soluciones end-to-end que abarcan desde la concepción hasta el despliegue, aplicando la misma disciplina y enfoque analítico que me caracterizó en mis roles anteriores."
    },
  ],
  education: [
    {
      school: "Autodidacta / Plataformas Online (bootcamps)",
      degree: "Desarrollo Web Full Stack",
      dateRange: "2022 - Presente",
      achievements: [
        "Formación continua y práctica en tecnologías Frontend y Backend.",
        "Desarrollo de proyectos personales para aplicar y validar conocimientos.",
        "Enfoque en tecnologías modernas como Astro, React y Node.js.",
        "Desarrollador Full-Stack Codehouse (2021-2022)",
        "Harvard CS50's Web Programming with Python and JavaScript (2023 - 2024)",
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
  languages: [
    {
      name: "HTML",
      level: "Avanzado",
      color: "#E34F26",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"><path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"/><path fill="#ef652a" d="M226 472l149-41 35-394H226"/><path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/><path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/></svg>`,
    },
    {
      name: "CSS",
      level: "Avanzado", 
      color: "#1572B6",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z"/><path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z"/><path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"/><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"/></svg>`,
    },
    {
      name: "Javascript",
      level: "Intermedio",
      color: "#F7DF1E",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"/><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"/></svg>`,
    },
    {
      name: "Typescript",
      level: "Intermedio",
      color: "#3178C6",
      icon: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6"/><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF"/></svg>`,
    },
    {
      name: "React",
      level: "Intermedio",
      color: "#61DAFB",
      icon: `<svg viewBox="0 0 569 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd"><g transform="translate(-227, -256)" fill="#58C4DC" fill-rule="nonzero"><g transform="translate(227, 256)"><path d="M285.5,201 C255.400481,201 231,225.400481 231,255.5 C231,285.599519 255.400481,310 285.5,310 C315.599519,310 340,285.599519 340,255.5 C340,225.400481 315.599519,201 285.5,201" id="react_dark__Path"/><path d="M568.959856,255.99437 C568.959856,213.207656 529.337802,175.68144 466.251623,150.985214 C467.094645,145.423543 467.85738,139.922107 468.399323,134.521063 C474.621631,73.0415145 459.808523,28.6686204 426.709856,9.5541429 C389.677085,-11.8291748 337.36955,3.69129898 284.479928,46.0162134 C231.590306,3.69129898 179.282771,-11.8291748 142.25,9.5541429 C109.151333,28.6686204 94.3382249,73.0415145 100.560533,134.521063 C101.102476,139.922107 101.845139,145.443621 102.708233,151.02537 C97.4493791,153.033193 92.2908847,155.161486 87.3331099,157.39017 C31.0111824,182.708821 0,217.765415 0,255.99437 C0,298.781084 39.6220545,336.307301 102.708233,361.003527 C101.845139,366.565197 101.102476,372.066633 100.560533,377.467678 C94.3382249,438.947226 109.151333,483.32012 142.25,502.434597 C153.629683,508.887578 166.52439,512.186771 179.603923,511.991836 C210.956328,511.991836 247.567589,495.487529 284.479928,465.972527 C321.372196,495.487529 358.003528,511.991836 389.396077,511.991836 C402.475265,512.183856 415.36922,508.884856 426.75,502.434597 C459.848667,483.32012 474.661775,438.947226 468.439467,377.467678 C467.897524,372.066633 467.134789,366.565197 466.291767,361.003527 C529.377946,336.347457 569,298.761006 569,255.99437 M389.155214,27.1025182 C397.565154,26.899606 405.877839,28.9368502 413.241569,33.0055186 C436.223966,46.2772304 446.540955,82.2775015 441.522965,131.770345 C441.181741,135.143488 440.780302,138.556788 440.298575,141.990165 C414.066922,134.08804 387.205771,128.452154 360.010724,125.144528 C343.525021,103.224055 325.192524,82.7564475 305.214266,63.9661533 C336.586743,39.7116483 366.032313,27.1025182 389.135142,27.1025182 M378.356498,310.205598 C368.204912,327.830733 357.150626,344.919965 345.237759,361.405091 C325.045049,363.479997 304.758818,364.51205 284.459856,364.497299 C264.167589,364.51136 243.888075,363.479308 223.702025,361.405091 C211.820914,344.919381 200.80007,327.83006 190.683646,310.205598 C180.532593,292.629285 171.306974,274.534187 163.044553,255.99437 C171.306974,237.454554 180.532593,219.359455 190.683646,201.783142 C200.784121,184.229367 211.770999,167.201087 223.601665,150.764353 C243.824636,148.63809 264.145559,147.579168 284.479928,147.591877 C304.772146,147.579725 325.051559,148.611772 345.237759,150.68404 C357.109048,167.14607 368.136094,184.201112 378.27621,201.783142 C388.419418,219.363718 397.644825,237.458403 405.915303,255.99437 C397.644825,274.530337 388.419418,292.625022 378.27621,310.205598 M419.724813,290.127366 C426.09516,307.503536 431.324985,325.277083 435.380944,343.334682 C417.779633,348.823635 399.836793,353.149774 381.668372,356.285142 C388.573127,345.871232 395.263781,335.035679 401.740334,323.778483 C408.143291,312.655143 414.144807,301.431411 419.805101,290.207679 M246.363271,390.377981 C258.848032,391.140954 271.593728,391.582675 284.5,391.582675 C297.406272,391.582675 310.232256,391.140954 322.737089,390.377981 C310.880643,404.583418 298.10766,417.997563 284.5,430.534446 C270.921643,417.999548 258.18192,404.585125 246.363271,390.377981 Z M187.311556,356.244986 C169.137286,353.123646 151.187726,348.810918 133.578912,343.334682 C137.618549,325.305649 142.828222,307.559058 149.174827,290.207679 C154.754833,301.431411 160.736278,312.655143 167.239594,323.778483 C173.74291,334.901824 180.467017,345.864539 187.311556,356.285142 M149.174827,221.760984 C142.850954,204.473938 137.654787,186.794745 133.619056,168.834762 C151.18418,163.352378 169.085653,159.013101 187.211197,155.844146 C180.346585,166.224592 173.622478,176.986525 167.139234,188.210257 C160.65599,199.433989 154.734761,210.517173 149.074467,221.760984 M322.616657,121.590681 C310.131896,120.827708 297.3862,120.385987 284.379568,120.385987 C271.479987,120.385987 258.767744,120.787552 246.242839,121.590681 C258.061488,107.383537 270.801211,93.9691137 284.379568,81.4342157 C297.99241,93.9658277 310.765727,107.380324 322.616657,121.590681 Z M401.70019,188.210257 C395.196875,176.939676 388.472767,166.09743 381.527868,155.68352 C399.744224,158.819049 417.734224,163.151949 435.380944,168.654058 C431.331963,186.680673 426.122466,204.426664 419.785029,221.781062 C414.205023,210.55733 408.203506,199.333598 401.720262,188.230335 M127.517179,131.790423 C122.438973,82.3176579 132.816178,46.2973086 155.778503,33.0255968 C163.144699,28.9632474 171.455651,26.9264282 179.864858,27.1225964 C202.967687,27.1225964 232.413257,39.7317265 263.785734,63.9862316 C243.794133,82.7898734 225.448298,103.270812 208.949132,125.204763 C181.761691,128.528025 154.90355,134.14313 128.661281,141.990165 C128.199626,138.556788 127.778115,135.163566 127.456963,131.790423 M98.4529773,182.106474 C101.54406,180.767925 104.695358,179.429376 107.906872,178.090828 C114.220532,204.735668 122.781793,230.7969 133.498624,255.99437 C122.761529,281.241316 114.193296,307.357063 107.8868,334.058539 C56.7434387,313.076786 27.0971497,284.003505 27.0971497,255.99437 C27.0971497,229.450947 53.1907013,202.526037 98.4529773,182.106474 Z M155.778503,478.963143 C132.816178,465.691432 122.438973,429.671082 127.517179,380.198317 C127.838331,376.825174 128.259842,373.431953 128.721497,369.978497 C154.953686,377.878517 181.814655,383.514365 209.009348,386.824134 C225.500295,408.752719 243.832321,429.233234 263.805806,448.042665 C220.069,481.834331 180.105722,492.97775 155.838719,478.963143 M441.502893,380.198317 C446.520883,429.691161 436.203894,465.691432 413.221497,478.963143 C388.974566,493.017906 348.991216,481.834331 305.274481,448.042665 C325.241364,429.232737 343.566681,408.752215 360.050868,386.824134 C387.245915,383.516508 414.107066,377.880622 440.338719,369.978497 C440.820446,373.431953 441.221885,376.825174 441.563109,380.198317 M461.193488,334.018382 C454.869166,307.332523 446.294494,281.231049 435.561592,255.99437 C446.289797,230.744081 454.857778,204.629101 461.173416,177.930202 C512.216417,198.911955 541.942994,227.985236 541.942994,255.99437 C541.942994,284.003505 512.296705,313.076786 461.153344,334.058539" id="react_dark__Shape"/></g></g></g></svg>`,
    },
    {
      name: "Python",
      level: "Intermedio",
      color: "#3776AB",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="16 16 32 32"><path fill="url(#python__a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/><path fill="url(#python__b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/><defs><linearGradient id="python__a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="python__b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>`,
    },
    {
      name: "Node.js",
      level: "Intermedio",
      color: "#339933",
      icon: `<svg viewBox="0 0 256 292" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><linearGradient id="nodejs__a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F"/><stop offset="32.88%" stop-color="#418B3D"/><stop offset="63.52%" stop-color="#419637"/><stop offset="93.19%" stop-color="#3FA92D"/><stop offset="100%" stop-color="#3FAE2A"/></linearGradient><linearGradient id="nodejs__c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F"/><stop offset="40.32%" stop-color="#54A044"/><stop offset="71.36%" stop-color="#66B848"/><stop offset="90.81%" stop-color="#6CC04A"/></linearGradient><linearGradient id="nodejs__f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A"/><stop offset="28.64%" stop-color="#66B848"/><stop offset="59.68%" stop-color="#54A044"/><stop offset="86.24%" stop-color="#41873F"/></linearGradient><path id="nodejs__b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><path id="nodejs__e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/></defs><path fill="url(#nodejs__a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"/><mask id="nodejs__d" fill="#fff"><use xlink:href="#nodejs__b"/></mask><path fill="url(#nodejs__c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#nodejs__d)"/><mask id="nodejs__g" fill="#fff"><use xlink:href="#nodejs__e"/></mask><path fill="url(#nodejs__f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#nodejs__g)"/></svg>`,
    },
    {
      name: "Tailwind",
      level: "Intermedio",
      color: "#06B6D4",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clip-path="url(#tailwindcss__a)"><path fill="#38bdf8" fill-rule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clip-rule="evenodd"/></g><defs><clipPath id="tailwindcss__a"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>`,
    },
    {
      name: "Astro",
      level: "Intermedio",
      color: "#FF5D01",
      icon: `<svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"/><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"/></svg>`,
    },
    {
      name: "Next.js",
      level: "Intermedio",
      color: "#000000",
      icon: `<svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="nextjs_icon_dark__mask0_408_139" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"><circle cx="90" cy="90" r="90" fill="black"/></mask><g mask="url(#nextjs_icon_dark__mask0_408_139)"><circle cx="90" cy="90" r="87" fill="black" stroke="white" stroke-width="6"/><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nextjs_icon_dark__paint0_linear_408_139)"/><rect x="115" y="54" width="20" height="72" fill="url(#nextjs_icon_dark__paint1_linear_408_139)"/></g><defs><linearGradient id="nextjs_icon_dark__paint0_linear_408_139" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient><linearGradient id="nextjs_icon_dark__paint1_linear_408_139" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="1" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>`,
    },
    {
      name: "MySQL",
      level: "Intermedio",
      color: "#4479A1",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 252"><path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z" fill="#00546B"/><path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" fill="#00546B"/></svg>`,
    },
    {
      name: "SASS",
      level: "Avanzado",
      color: "#CF649A",
      icon: `<svg viewBox="0 0 512 384" xmlns="http://www.w3.org/2000/svg"><path fill="#CF649A" d="M441 221c-18 0-34 4-47 10-5-9-9-17-10-24s-2-11-1-20 6-21 6-22c0 0-1-5-11-5-11 0-20 2-21 5l-4 15c-2 9-20 43-31 60-4-7-7-13-7-17-1-8-2-12-1-21s6-20 6-21-1-6-11-6c-11 0-20 2-21 5l-4 15-34 76-8 18c-2 4 0 0 0 1l-3 5-4 5s-1-7 1-16c3-19 12-49 12-51 0 0 2-5-6-8-7-3-9 2-10 2l-1 1s8-34-16-34c-14 0-35 17-45 31l-34 19-17 9-1-1c-29-31-82-52-79-93 0-15 6-54 101-102 79-39 141-28 152-4 16 34-33 97-115 106-31 3-47-9-51-13-4-5-5-5-7-4s-1 5 0 8c3 6 13 17 30 23 15 5 51 8 95-9 49-19 88-72 77-117-12-45-87-60-157-35-43 15-88 39-121 70-39 36-45 68-43 81 10 47 74 78 100 100l-3 2c-13 7-63 33-75 60-14 31 2 53 13 56 33 10 68-7 86-34 18-28 16-64 8-80l-1-1 11-6 18-10c-3 9-5 19-6 34-2 17 6 40 15 49 4 4 9 4 12 4 11 0 16-9 22-20l13-28s-8 41 13 41c7 0 15-9 18-14l1-1 1-2 20-37 25-57 5 20c2 8 7 16 10 24l-4 7-8 10c-10 12-23 26-24 30-2 5-2 8 2 11 3 2 8 2 13 2l18-4 17-9c10-7 16-18 15-32 0-7-3-15-6-22l3-4c16-23 28-49 28-49l5 21 9 20a89 89 0 0 0-27 36c-6 17-2 24 7 26 4 1 10-1 14-3 5-1 11-4 17-8 10-8 20-18 19-32 0-6-2-13-4-19 12-5 29-8 49-5 45 5 54 33 52 44-2 12-11 18-14 20l-4 4c1 2 2 2 5 2 3-1 23-10 24-31 1-28-25-58-71-57zM97 336c-14 16-35 23-44 17-9-5-6-29 13-46 11-10 25-20 34-26l9-5 1-1 3-1c6 24 0 45-16 62zm108-73c-5 13-16 45-22 43-6-1-9-26-2-50 4-12 13-26 18-32 8-9 17-12 19-8 3 5-10 39-13 47zm89 43-5 1v-2l16-17 9-11v1c0 14-14 24-20 28zm68-16c-2-1-1-5 4-16 2-5 7-13 15-20l2 9c0 18-13 24-21 27z"/></svg>`,
    },
    {
       name: "Figma",
       level: "Intermedio",
       color: "#F24E1E",
       icon: "/figma.svg",
    },
    {
      name: "Docker",
      level: "Intermedio",
      color: "#2496ED",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#008fe2"><path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.95-5.43h2.12a.19.19 0 0 0 .18-.19V3.57a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m0 2.71h2.12a.19.19 0 0 0 .18-.18V6.29a.19.19 0 0 0-.18-.18h-2.12a.18.18 0 0 0-.19.18v1.89c0 .1.09.18.19.18m-2.93 0h2.12a.19.19 0 0 0 .18-.18V6.29a.18.18 0 0 0-.18-.18H8.1a.18.18 0 0 0-.18.18v1.89c0 .1.08.18.18.18m-2.96 0h2.11a.19.19 0 0 0 .19-.18V6.29a.18.18 0 0 0-.19-.18H5.14a.19.19 0 0 0-.19.18v1.89c0 .1.08.18.19.18m5.89 2.72h2.12a.19.19 0 0 0 .18-.19V9.01a.19.19 0 0 0-.18-.19h-2.12a.18.18 0 0 0-.19.18v1.9c0 .1.09.18.19.18m-2.93 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H8.1a.18.18 0 0 0-.18.18v1.9c0 .1.08.18.18.18m-2.96 0h2.11a.18.18 0 0 0 .19-.19V9.01a.18.18 0 0 0-.18-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m-2.92 0h2.12a.18.18 0 0 0 .18-.19V9.01a.18.18 0 0 0-.18-.19H2.22a.18.18 0 0 0-.19.18v1.9c0 .1.08.18.19.18m21.54-1.19c-.06-.05-.67-.51-1.95-.51-.34 0-.68.03-1.01.09a3.77 3.77 0 0 0-1.72-2.57l-.34-.2-.23.33a4.6 4.6 0 0 0-.6 1.43c-.24.97-.1 1.88.4 2.66a4.7 4.7 0 0 1-1.75.42H.76a.75.75 0 0 0-.76.75 11.38 11.38 0 0 0 .7 4.06 6.03 6.03 0 0 0 2.4 3.12c1.18.73 3.1 1.14 5.28 1.14.98 0 1.96-.08 2.93-.26a12.25 12.25 0 0 0 3.82-1.4 10.5 10.5 0 0 0 2.61-2.13c1.25-1.42 2-3 2.55-4.4h.23c1.37 0 2.21-.55 2.68-1 .3-.3.55-.66.7-1.06l.1-.28Z"/></svg>`,
    },
  ],
  tools: [
    {
      name: "VS Code",
      color: "#007ACC",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><mask id="vscode__a" x="0" y="0" mask-type="alpha" maskUnits="userSpaceOnUse"><path fill="#fff" fill-rule="evenodd" d="M70.912 99.317a6.223 6.223 0 0 0 4.96-.19l20.589-9.907A6.25 6.25 0 0 0 100 83.587V16.413a6.25 6.25 0 0 0-3.54-5.632L75.874.874a6.226 6.226 0 0 0-7.104 1.21L29.355 38.04 12.187 25.01a4.162 4.162 0 0 0-5.318.236l-5.506 5.009a4.168 4.168 0 0 0-.004 6.162L16.247 50 1.36 63.583a4.168 4.168 0 0 0 .004 6.162l5.506 5.01a4.162 4.162 0 0 0 5.318.236l17.168-13.032L68.77 97.917a6.217 6.217 0 0 0 2.143 1.4ZM75.015 27.3 45.11 50l29.906 22.701V27.3Z" clip-rule="evenodd"/></mask><g mask="url(#vscode__a)"><path fill="#0065A9" d="M96.461 10.796 75.857.876a6.23 6.23 0 0 0-7.107 1.207l-67.451 61.5a4.167 4.167 0 0 0 .004 6.162l5.51 5.009a4.167 4.167 0 0 0 5.32.236l81.228-61.62c2.725-2.067 6.639-.124 6.639 3.297v-.24a6.25 6.25 0 0 0-3.539-5.63Z"/><g filter="url(#vscode__b)"><path fill="#007ACC" d="m96.461 89.204-20.604 9.92a6.229 6.229 0 0 1-7.107-1.207l-67.451-61.5a4.167 4.167 0 0 1 .004-6.162l5.51-5.009a4.167 4.167 0 0 1 5.32-.236l81.228 61.62c2.725 2.067 6.639.124 6.639-3.297v.24a6.25 6.25 0 0 1-3.539 5.63Z"/></g><g filter="url(#vscode__c)"><path fill="#1F9CF0" d="M75.858 99.126a6.232 6.232 0 0 1-7.108-1.21c2.306 2.307 6.25.674 6.25-2.588V4.672c0-3.262-3.944-4.895-6.25-2.589a6.232 6.232 0 0 1 7.108-1.21l20.6 9.908A6.25 6.25 0 0 1 100 16.413v67.174a6.25 6.25 0 0 1-3.541 5.633l-20.601 9.906Z"/></g><path fill="url(#vscode__d)" fill-rule="evenodd" d="M70.851 99.317a6.224 6.224 0 0 0 4.96-.19L96.4 89.22a6.25 6.25 0 0 0 3.54-5.633V16.413a6.25 6.25 0 0 0-3.54-5.632L75.812.874a6.226 6.226 0 0 0-7.104 1.21L29.294 38.04 12.126 25.01a4.162 4.162 0 0 0-5.317.236l-5.507 5.009a4.168 4.168 0 0 0-.004 6.162L16.186 50 1.298 63.583a4.168 4.168 0 0 0 .004 6.162l5.507 5.009a4.162 4.162 0 0 0 5.317.236L29.294 61.96l39.414 35.958a6.218 6.218 0 0 0 2.143 1.4ZM74.954 27.3 45.048 50l29.906 22.701V27.3Z" clip-rule="evenodd" opacity=".25" style="mix-blend-mode:overlay"/></g><defs><filter id="vscode__b" x="-8.394" y="15.829" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="4.167"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter><filter id="vscode__c" x="60.417" y="-8.076" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="4.167"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter><linearGradient id="vscode__d" x1="49.939" x2="49.939" y1=".258" y2="99.742" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs></svg>`,
    },
    {
      name: "Git",
      color: "#F05032",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33" fill="#DE4C36"/></svg>`,
    },
    {
      name: "GitHub",
      color: "#181717",
      icon: `<svg viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#000000"/></svg>`,
    },
    {
      name: "npm",
      color: "#CB3837",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#CB3837"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.06 19.17H5.13z"/></svg>`,
    },
    {
      name: "Terminal",
      color: "#4D4D4D",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="#000" fill-rule="evenodd" d="M28.057 6.53 17.952.532a3.8 3.8 0 0 0-3.88 0L3.965 6.53A4.03 4.03 0 0 0 2 10.002v11.996a4.03 4.03 0 0 0 1.948 3.472l10.105 5.998a3.8 3.8 0 0 0 3.88 0L28.04 25.47a4.03 4.03 0 0 0 1.948-3.472V10.002a4.03 4.03 0 0 0-1.93-3.472zM20.23 25.262v.86a.318.318 0 0 1-.148.265l-.512.293c-.08.042-.148 0-.148-.113v-.847a1.66 1.66 0 0 1-1.164.113c-.062-.042-.086-.122-.056-.2l.183-.78a.322.322 0 0 1 .102-.17.18.18 0 0 1 .05-.035.11.11 0 0 1 .08 0 1.41 1.41 0 0 0 1.059-.134 1.41 1.41 0 0 0 .79-1.21c0-.438-.24-.62-.82-.625-.734 0-1.4-.14-1.43-1.224a3.137 3.137 0 0 1 1.186-2.4v-.872a.34.34 0 0 1 .148-.268l.494-.314c.08-.042.148 0 .148.116v.872a1.61 1.61 0 0 1 .967-.116c.07.04.098.128.064.2l-.173.773a.325.325 0 0 1-.138.195c-.02.012-.05.008-.074 0a1.28 1.28 0 0 0-.931.152 1.17 1.17 0 0 0-.706 1.037c0 .395.208.515.907.53.935 0 1.337.423 1.348 1.362a3.346 3.346 0 0 1-1.228 2.53zm5.293-1.45a.201.201 0 0 1-.078.194L22.9 25.558c-.024.02-.06.023-.087.007s-.04-.05-.033-.08v-.66a.184.184 0 0 1 .116-.162l2.516-1.507c.024-.02.06-.023.087-.007s.04.05.033.08v.582zM27.288 9.06l-9.562 5.906c-1.193.706-2.07 1.478-2.07 2.914v11.778c0 .86.353 1.4.882 1.58a3.14 3.14 0 0 1-.53.053 3.13 3.13 0 0 1-1.595-.441L4.308 24.853A3.3 3.3 0 0 1 2.706 22V10.002a3.304 3.304 0 0 1 1.602-2.858l10.105-5.998c.98-.58 2.196-.58 3.176 0l10.105 5.998c.833.504 1.4 1.35 1.552 2.3-.328-.713-1.083-.9-1.962-.395h.003z"/></svg>`,
    },
  ],
  studying: [
    {
      name: "Flutter",
      color: "#02569B",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 317"><defs><linearGradient x1="4%" y1="27%" x2="75.9%" y2="52.9%" id="flutter__a"><stop offset="0%"/><stop stop-opacity="0" offset="100%"/></linearGradient></defs><path fill="#47C5FB" d="M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z"/><path fill="#00569E" d="m121 280 37 37h97l-85-86z"/><path fill="#00B5F8" d="m72 230 48-48 50 49-49 49z"/><path fill-opacity=".8" fill="url(#flutter__a)" d="m121 280 41-14 4-31z"/></svg>`,
    },
    {
      name: "Java",
      color: "#ED8B00",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 346"><path d="M83 267s-14 8 9 11c27 3 41 2 71-3 0 0 8 5 19 9-67 29-153-2-99-17M74 230s-15 11 8 13c29 3 52 3 92-4 0 0 6 5 15 8-82 24-173 2-115-17" fill="#5382A1"/><path d="M144 166c17 19-4 36-4 36s42-22 22-49c-18-26-32-38 44-82 0 0-119 29-62 95" fill="#E76F00"/><path d="M233 295s10 8-10 15c-39 12-163 15-197 0-12-5 11-13 18-14l12-2c-14-9-89 19-38 28 138 22 251-10 215-27M89 190s-63 15-22 21c17 2 51 2 83-1 26-2 52-7 52-7l-16 9c-64 16-187 8-151-9 30-14 54-13 54-13M202 253c64-33 34-66 13-61l-7 2s2-3 6-5c41-14 73 43-14 66l2-2" fill="#5382A1"/><path d="M162 0s36 36-34 91c-56 45-12 70 0 99-32-30-56-56-40-80 23-35 89-53 74-110" fill="#E76F00"/><path d="M95 345c62 4 158-3 160-32 0 0-4 11-51 20-53 10-119 9-158 2 0 0 8 7 49 10" fill="#5382A1"/></svg>`,
    },
  ],
};
