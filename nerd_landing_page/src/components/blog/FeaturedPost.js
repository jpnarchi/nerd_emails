import React from 'react';

const FeaturedPost = ({ post }) => {
  return (
    <section className="bg-black text-white px-6 md:px-12 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gradient-to-br from-purple-600 to-blue-700 h-64 md:h-full"></div>
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-4">
                <span className="bg-black bg-opacity-50 text-[#95BF92] text-sm px-3 py-1 rounded-full mr-3">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">{post.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>
              <p className="text-gray-300 mb-6">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-bold mr-3">
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{post.author}</p>
                    <p className="text-gray-400 text-sm">{post.readTime} de lectura</p>
                  </div>
                </div>
                <button className="text-[#95BF92] font-medium flex items-center hover:underline">
                  Leer más
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPost;