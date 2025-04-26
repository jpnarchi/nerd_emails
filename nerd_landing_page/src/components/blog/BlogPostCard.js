import React from 'react';

const BlogPostCard = ({ post }) => {
  // Función para generar un color de fondo basado en la categoría
  const getCategoryColor = (category) => {
    const colors = {
      'IA': 'from-purple-600 to-blue-700',
      'Productividad': 'from-green-500 to-teal-600',
      'Casos de Éxito': 'from-yellow-500 to-orange-600',
      'Tecnología': 'from-blue-500 to-indigo-700',
      'Empresa': 'from-pink-500 to-red-600'
    };
    
    return colors[category] || 'from-gray-700 to-gray-900';
  };

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden transition-all hover:transform hover:scale-[1.02] hover:shadow-xl">
      <div className={`h-48 bg-gradient-to-r ${getCategoryColor(post.category)}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="bg-black bg-opacity-50 text-[#95BF92] text-sm px-3 py-1 rounded-full mr-3">
            {post.category}
          </span>
          <span className="text-gray-400 text-sm">{post.date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{post.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold mr-2">
              {post.author.charAt(0)}
            </div>
            <span className="text-sm text-gray-400">{post.readTime} de lectura</span>
          </div>
          <button className="text-[#95BF92] font-medium flex items-center hover:underline">
            Leer
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;