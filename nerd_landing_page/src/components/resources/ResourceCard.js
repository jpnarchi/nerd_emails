import React from 'react';

const ResourceCard = ({ resource }) => {
  const getImagePlaceholder = () => {
    // Simulación de imágenes con gradientes
    const colors = {
      'guide-thumbnail': 'from-blue-500 to-purple-600',
      'webinar-thumbnail': 'from-green-500 to-teal-600',
      'article-thumbnail': 'from-yellow-500 to-orange-600',
      'tutorial-thumbnail': 'from-pink-500 to-red-600'
    };
    
    return colors[resource.image] || 'from-gray-700 to-gray-900';
  };

  return (
    <div className="bg-gray-900 rounded-2xl overflow-hidden transition-all hover:transform hover:scale-[1.02] hover:shadow-xl">
      <div className={`h-48 bg-gradient-to-r ${getImagePlaceholder()}`}></div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          <span className="bg-black bg-opacity-50 text-[#95BF92] text-sm px-3 py-1 rounded-full mr-2">
            {resource.type}
          </span>
          <span className="text-gray-400 text-sm flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {resource.timeToRead}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
        <button className="text-[#95BF92] font-medium flex items-center hover:underline">
          Ver recurso
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;