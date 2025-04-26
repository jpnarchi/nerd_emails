import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogHero from '../components/blog/BlogHero';
import BlogCategories from '../components/blog/BlogCategories';
import FeaturedPost from '../components/blog/FeaturedPost';
import BlogGrid from '../components/blog/BlogGrid';
import { blogData } from '../mock/data';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main id="main-content">
        <BlogHero data={blogData.hero} />
        <BlogCategories categories={blogData.categories} />
        <FeaturedPost post={blogData.featuredPost} />
        <BlogGrid posts={blogData.posts} />
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;