import React from 'react';
import BlogPostCard from './BlogPostCard';

const BlogGrid = ({ posts }) => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Artículos recientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-transparent border border-[#95BF92] text-[#95BF92] px-8 py-3 rounded-lg font-medium hover:bg-[#95BF92] hover:bg-opacity-10 transition-all">
            Ver más artículos
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;