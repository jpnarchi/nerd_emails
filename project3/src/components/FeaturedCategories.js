import React from 'react';

const categories = [
  {
    name: 'Hombre',
    image: '/images/men-category.webp',
    description: 'Estilo urbano masculino'
  },
  {
    name: 'Mujer', 
    image: '/images/women-category.webp',
    description: 'Moda urbana femenina'
  },
  {
    name: 'Accesorios',
    image: '/images/accessories-category.webp', 
    description: 'Complementos de tendencia'
  }
];

const FeaturedCategories = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        Explora Nuestras Categorías
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold">{category.name}</h3>
                <p className="opacity-80">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;