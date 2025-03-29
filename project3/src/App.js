import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import FeaturedCategories from './components/FeaturedCategories';
import Newsletter from './components/Newsletter';
import MenSection from './components/MenSection';
import WomenSection from './components/WomenSection';
import Cart from './components/Cart';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <FeaturedCategories />
            <Newsletter />
          </>
        );
      case 'catalog':
        return <ProductGrid />;
      case 'man':
        return <MenSection />;
      case 'woman':
        return <WomenSection />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="pt-16">
        {renderContent()}
      </div>
      {isCartOpen && <Cart />}
    </div>
  );
}

export default App;

// DONE