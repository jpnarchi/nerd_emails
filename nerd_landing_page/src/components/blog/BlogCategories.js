import React, { useState } from 'react';

const BlogCategories = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 mb-12">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === category
                ? 'bg-[#95BF92] text-black'
                : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;