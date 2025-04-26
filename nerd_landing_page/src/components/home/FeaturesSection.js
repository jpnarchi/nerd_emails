import React from 'react';
import FeatureBlock from './FeatureBlock';

const FeaturesSection = () => {
  const features = [
    {
      title: "Tu nerd de confianza",
      description: "Accede a inteligencia artificial avanzada para potenciar tus proyectos.",
      icon: "trust" // Añadido ícono
    },
    {
      title: "Haz realidad tus ideas",
      description: "Convierte conceptos complejos en soluciones tangibles con nuestra ayuda.",
      icon: "idea" // Añadido ícono
    },
    {
      title: "Lanza aplicaciones en minutos",
      description: "Agiliza tu desarrollo y despliega rápidamente con nuestras herramientas.",
      icon: "rocket" // Añadido ícono
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#0a1a0a] to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Línea horizontal antes de la sección de misión */}
        <div className="w-full h-px bg-gray-700 mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 mb-12 items-start"> {/* Usar items-start para alinear arriba */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">La misión de <span className="text-[#95BF92]">Nerd</span></h2>
          </div>
          <div className="relative"> {/* Contenedor para la línea */}
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-700 hidden md:block"></div> {/* Línea vertical para desktop */}
            <p className="text-xl text-gray-300 md:pl-8 pt-4 md:pt-0"> {/* Añadir padding para separar del borde */}
              En <span className="text-[#95BF92]">Nerd</span> creamos inteligencia artificial accesible que impulsa la eficiencia empresarial. 
              Ponemos tecnología avanzada al alcance de todos para que puedas innovar y crecer sin límites.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureBlock key={index} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;