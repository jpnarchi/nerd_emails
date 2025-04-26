// Datos para la página de Soluciones
const solutionsData = {
  hero: {
    title: "Tu Idea a Realidad",
    description: "Desarrolla ese proyecto que siempre has querido en minutos."
  },
  solutions: [
    {
      id: 1,
      title: "Asistente Nerd",
      description: "IA conversacional que entiende el contexto y aprende de tus interacciones.",
      icon: "chat",
      features: ["Respuestas contextuales", "Memoria de conversación", "Integración con herramientas", "Personalización avanzada"]
    },
    {
      id: 2,
      title: "Nerd Analytics",
      description: "Convierte datos complejos en insights accionables con análisis impulsado por IA.",
      icon: "chart",
      features: ["Visualizaciones automáticas", "Predicciones de tendencias", "Detección de anomalías", "Reportes personalizados"]
    },
    {
      id: 3,
      title: "Nerd Content",
      description: "Genera y optimiza contenido de alta calidad para cualquier canal o audiencia.",
      icon: "document",
      features: ["Creación de artículos", "Optimización SEO", "Adaptación de tono", "Múltiples formatos"]
    },
    {
      id: 4,
      title: "Nerd Support",
      description: "Automatiza la atención al cliente manteniendo un toque humano y personalizado.",
      icon: "support",
      features: ["Respuestas 24/7", "Escalamiento inteligente", "Análisis de sentimiento", "Base de conocimiento dinámica"]
    }
  ],
  testimonials: [
    {
      id: 1,
      quote: "Nerd ha transformado completamente nuestra operación de atención al cliente. Ahora resolvemos el 85% de las consultas sin intervención humana.",
      author: "María Rodríguez",
      position: "Directora de Experiencia de Cliente",
      company: "TechSolutions Inc."
    },
    {
      id: 2,
      quote: "El asistente Nerd se ha convertido en un miembro más de nuestro equipo. La productividad ha aumentado un 40% desde que lo implementamos.",
      author: "Carlos Mendoza",
      position: "COO",
      company: "Innovate Group"
    }
  ]
};

// Datos para la página de Recursos
const resourcesData = {
  hero: {
    title: "Recursos para potenciar tu experiencia",
    description: "Todo lo que necesitas para aprovechar al máximo la tecnología Nerd."
  },
  categories: [
    {
      id: 1,
      title: "Guías y Tutoriales",
      description: "Aprende a utilizar todas las funcionalidades de Nerd paso a paso.",
      icon: "book"
    },
    {
      id: 2,
      title: "Webinars",
      description: "Sesiones en vivo y grabadas sobre casos de uso y mejores prácticas.",
      icon: "video"
    },
    {
      id: 3,
      title: "Comunidad",
      description: "Conecta con otros usuarios y comparte experiencias y consejos.",
      icon: "users"
    },
    {
      id: 4,
      title: "Centro de Ayuda",
      description: "Encuentra respuestas a tus preguntas más frecuentes.",
      icon: "help"
    }
  ],
  featuredResources: [
    {
      id: 1,
      title: "Guía completa de Nerd Assistant",
      type: "Guía",
      timeToRead: "15 min",
      image: "guide-thumbnail"
    },
    {
      id: 2,
      title: "Cómo automatizar flujos de trabajo con Nerd",
      type: "Webinar",
      timeToRead: "45 min",
      image: "webinar-thumbnail"
    },
    {
      id: 3,
      title: "Mejores prácticas para análisis de datos",
      type: "Artículo",
      timeToRead: "8 min",
      image: "article-thumbnail"
    },
    {
      id: 4,
      title: "Integración de Nerd con herramientas existentes",
      type: "Tutorial",
      timeToRead: "20 min",
      image: "tutorial-thumbnail"
    }
  ]
};

// Datos para la página de Equipo
const teamData = {
  hero: {
    title: "El equipo detrás de Nerd",
    description: "Conoce a las mentes brillantes que están revolucionando la IA."
  },
  values: [
    {
      id: 1,
      title: "Innovación",
      description: "Constantemente buscamos nuevas formas de mejorar y expandir nuestras soluciones."
    },
    {
      id: 2,
      title: "Accesibilidad",
      description: "Creemos que la tecnología avanzada debe estar al alcance de todos."
    },
    {
      id: 3,
      title: "Ética",
      description: "Desarrollamos IA responsable que respeta la privacidad y promueve el bienestar."
    }
  ],
  members: [
    {
      id: 1,
      name: "Luis Santiago López",
      position: "CEO",
      bio: "Líder visionario con pasión por la tecnología y la innovación.",
      image: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0kTKXBFt7fYZlcpNaeLVjJvm95wniIQo8GFd7"
    },
    {
      id: 2,
      name: "Hans Preinfalk",
      position: "CTO",
      bio: "Experto en arquitectura de software y desarrollo de plataformas escalables.",
      image: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0TagtPO5OC5NA8gnBVpXH1xYGvSUuPebwsFoR"
    },
    {
      id: 3,
      name: "Juan Pablo Narchi",
      position: "COO",
      bio: "Estratega de operaciones con enfoque en eficiencia y crecimiento sostenible.",
      image: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0TEM3rL5OC5NA8gnBVpXH1xYGvSUuPebwsFoR"
    }
  ]
};

// Datos para la página de Blog
const blogData = {
  hero: {
    title: "Nerd Blog",
    description: "Insights, noticias y tendencias sobre IA, productividad y tecnología."
  },
  categories: ["Todos", "IA", "Productividad", "Casos de Éxito", "Tecnología", "Empresa"],
  featuredPost: {
    id: 1,
    title: "El futuro del trabajo: cómo la IA está transformando las empresas",
    excerpt: "Exploramos cómo las soluciones de IA están redefiniendo roles, optimizando procesos y creando nuevas oportunidades en el entorno laboral.",
    author: "Alejandra Martínez",
    date: "15 de mayo, 2025",
    readTime: "8 min",
    category: "IA",
    image: "featured-post"
  },
  posts: [
    {
      id: 2,
      title: "5 formas de aumentar la productividad con Nerd Assistant",
      excerpt: "Descubre cómo nuestro asistente de IA puede ayudarte a optimizar tu flujo de trabajo diario.",
      author: "Sofía Patel",
      date: "10 de mayo, 2025",
      readTime: "5 min",
      category: "Productividad",
      image: "post-1"
    },
    {
      id: 3,
      title: "Cómo TechCorp aumentó sus ventas un 30% con Nerd Analytics",
      excerpt: "Un caso de estudio detallado sobre la implementación de nuestra solución de análisis de datos.",
      author: "Marco Rossi",
      date: "5 de mayo, 2025",
      readTime: "10 min",
      category: "Casos de Éxito",
      image: "post-2"
    },
    {
      id: 4,
      title: "Ética en la IA: nuestro compromiso con el desarrollo responsable",
      excerpt: "Exploramos los principios éticos que guían el desarrollo de nuestras soluciones de IA.",
      author: "Daniel Kim",
      date: "1 de mayo, 2025",
      readTime: "7 min",
      category: "Empresa",
      image: "post-3"
    },
    {
      id: 5,
      title: "La evolución del procesamiento de lenguaje natural",
      excerpt: "Un recorrido técnico por los avances en NLP que hacen posible Nerd Assistant.",
      author: "Roberto Sánchez",
      date: "25 de abril, 2025",
      readTime: "12 min",
      category: "Tecnología",
      image: "post-4"
    },
    {
      id: 6,
      title: "Integrando Nerd con tu stack tecnológico existente",
      excerpt: "Guía práctica para conectar nuestras soluciones con las herramientas que ya utilizas.",
      author: "Luisa Wang",
      date: "20 de abril, 2025",
      readTime: "9 min",
      category: "Tecnología",
      image: "post-5"
    }
  ]
};

// Datos para la página de Probar Nerd
const tryNerdData = {
  hero: {
    title: "Experimenta el poder de Nerd",
    description: "Prueba nuestro asistente de IA y descubre cómo puede transformar tu forma de trabajar."
  },
  features: [
    {
      id: 1,
      title: "Respuestas inteligentes",
      description: "Nerd entiende el contexto y proporciona respuestas relevantes y precisas."
    },
    {
      id: 2,
      title: "Generación de contenido",
      description: "Crea textos, resúmenes y más con un solo prompt."
    },
    {
      id: 3,
      title: "Análisis de datos",
      description: "Obtén insights valiosos a partir de tus datos sin necesidad de ser un experto."
    }
  ],
  demoPrompts: [
    "Explícame cómo funciona la inteligencia artificial",
    "Genera un plan de contenido para redes sociales",
    "Ayúdame a optimizar mi proceso de ventas",
    "Crea un resumen de este informe trimestral"
  ],
  plans: [
    {
      id: 1,
      name: "Básico",
      price: "$5/mes",
      features: [
        "Acceso limitado a Nerd Assistant",
        "5 consultas diarias",
        "Respuestas básicas",
        "Sin memoria de conversación"
      ],
      cta: "Comenzar gratis"
    },
    {
      id: 2,
      name: "Profesional",
      price: "$20/mes",
      features: [
        "Acceso completo a Nerd Assistant",
        "Consultas ilimitadas",
        "Respuestas avanzadas",
        "Memoria de conversación",
        "Integración con 3 herramientas"
      ],
      cta: "Probar 7 días gratis",
      popular: true
    },
    {
      id: 3,
      name: "Empresa",
      price: "$50/mes",
      features: [
        "Todo lo de Profesional",
        "Múltiples usuarios",
        "Personalización avanzada",
        "Integraciones ilimitadas",
        "Soporte prioritario"
      ],
      cta: "Contactar ventas"
    }
  ]
};

export { solutionsData, resourcesData, teamData, blogData, tryNerdData };