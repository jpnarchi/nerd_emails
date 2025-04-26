import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourcesHero from '../components/resources/ResourcesHero';
import CategoriesGrid from '../components/resources/CategoriesGrid';
import FeaturedResources from '../components/resources/FeaturedResources';
import ResourcesNewsletter from '../components/resources/ResourcesNewsletter';
import { resourcesData } from '../mock/data';

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] text-white">
      <Header />
      
      <main id="main-content">
        <ResourcesHero data={resourcesData.hero} />
        <CategoriesGrid categories={resourcesData.categories} />
        <FeaturedResources resources={resourcesData.featuredResources} />
        <ResourcesNewsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;