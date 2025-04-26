import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolutionsHero from '../components/solutions/SolutionsHero';
// import SolutionsGrid from '../components/solutions/SolutionsGrid'; // Eliminada la importación
// import TestimonialsSection from '../components/solutions/TestimonialsSection'; // Eliminada la importación
import SolutionsCTA from '../components/solutions/SolutionsCTA';
import AppCreationSection from '../components/solutions/AppCreationSection'; // Importar el nuevo componente
import IterationSection from '../components/solutions/IterationSection'; // Importar el nuevo componente
import DeploymentSection from '../components/solutions/DeploymentSection'; // Importar el nuevo componente
import { solutionsData } from '../mock/data';

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a1a0a] text-white">
      <Header />
      
      <main id="main-content">
        <SolutionsHero data={solutionsData.hero} />
        {/* <SolutionsGrid solutions={solutionsData.solutions} /> */} {/* Eliminada la sección */}
        <AppCreationSection /> {/* Añadir el nuevo componente */}
        <IterationSection /> {/* Añadir el nuevo componente */}
        <DeploymentSection /> {/* Añadir el nuevo componente */}
        {/* <TestimonialsSection testimonials={solutionsData.testimonials} /> */} {/* Eliminada la sección */}
        <SolutionsCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default SolutionsPage;