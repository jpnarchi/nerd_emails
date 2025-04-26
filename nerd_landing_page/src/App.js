import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import ResourcesPage from './pages/ResourcesPage';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
// import TryNerdPage from './pages/TryNerdPage'; // Eliminada la importación

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#'
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Set initial page based on hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'solutions':
        return <SolutionsPage />;
      case 'resources':
        return <ResourcesPage />;
      case 'team':
        return <TeamPage />;
      case 'blog':
        return <BlogPage />;
      // case 'try': // Eliminada la ruta
      //   return <TryNerdPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] text-white">
      {renderPage()}
    </div>
  );
};

export default App;
// DONE