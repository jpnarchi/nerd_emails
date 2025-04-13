
import React, { useState } from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/resultados/HeroSection';
import CategoryToggle from '../components/resultados/CategoryToggle';
import EditionSelector from '../components/resultados/EditionSelector';
import SubcategoryFilter from '../components/resultados/SubcategoryFilter';
import ResultadosContent from '../components/resultados/ResultadosContent';
import useResultadosData from '../hooks/useResultadosData';

const Resultados = () => {
  const [activeTab, setActiveTab] = useState("partidos");
  const [activeCategory, setActiveCategory] = useState("juvenil");
  const [activeEdition, setActiveEdition] = useState(1);
  const [activeSubcategory, setActiveSubcategory] = useState("all");

  // Get data from our hook
  const { juvenil, infantil, getFilteredData } = useResultadosData();

  // Determine which data set to use based on active category and edition
  const getCurrentData = () => {
    if (activeCategory === "juvenil") {
      return {
        goalsData: juvenil.goalsData,
        tablaData: juvenil.tablaData,
        partidosData: juvenil.partidosData,
      };
    } else {
      return {
        goalsData: infantil[activeEdition - 1].goalsData,
        tablaData: infantil[activeEdition - 1].tablaData,
        partidosData: infantil[activeEdition - 1].partidosData,
      };
    }
  };

  // Get the current data based on category and edition
  const currentData = getCurrentData();

  // Apply subcategory filtering
  const filteredGoalsData = getFilteredData(currentData.goalsData, activeSubcategory);
  const filteredTablaData = getFilteredData(currentData.tablaData, activeSubcategory);
  const filteredPartidosData = getFilteredData(currentData.partidosData, activeSubcategory);

  // Get specific subcategory data for the separate sections view
  const getSubcategoryData = (subcategory) => {
    return {
      goalsData: getFilteredData(currentData.goalsData, subcategory),
      tablaData: getFilteredData(currentData.tablaData, subcategory),
      partidosData: getFilteredData(currentData.partidosData, subcategory),
    };
  };

  // Subcategory options based on active category
  const subcategoryOptions = activeCategory === "juvenil" 
    ? [
        { value: "all", label: "Todas las Categorías" },
        { value: "sub20", label: "2004+" },
        { value: "sub17", label: "2005-2006" },
        { value: "2007-2008", label: "2007-2008" }
      ]
    : [
        { value: "all", label: "Todas las Categorías" },
        { value: "2013", label: "2013" },
        { value: "2012", label: "2012" },
        { value: "2011", label: "2011" },
        { value: "2010", label: "2010" },
        { value: "2009", label: "2009" },
        { value: "2008", label: "2008" }
      ];

  // Get actual subcategories (without the "all" option) for separate sections
  const actualSubcategories = activeCategory === "juvenil" 
    ? ["sub20", "sub17", "2007-2008"] 
    : ["2013", "2012", "2011", "2010", "2009", "2008"];

  // Reset subcategory when changing main category
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveSubcategory("all");
    if (category === "infantil") {
      setActiveEdition(1);
    }
  };

  // Helper function to display subcategory labels
  const getSubcategoryLabel = (subcategory) => {
    switch(subcategory) {
      case "sub20": return "2004+";
      case "sub17": return "2005-2006";
      case "2007-2008": return "2007-2008";
      case "2013": return "2013";
      case "2012": return "2012";
      case "2011": return "2011";
      case "2010": return "2010";
      case "2009": return "2009";
      case "2008": return "2008";
      default: return subcategory;
    }
  };

  // Determine if we should show separate sections for each subcategory
  // We show separate sections only when viewing Infantil category and "all" subcategories
  const showSeparateSections = activeCategory === "infantil" && activeSubcategory === "all";

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Category Toggle Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <CategoryToggle 
            activeCategory={activeCategory} 
            handleCategoryChange={handleCategoryChange} 
          />
          
          {/* Edition selector - only show for infantil category */}
          {activeCategory === "infantil" && (
            <EditionSelector 
              activeEdition={activeEdition} 
              setActiveEdition={setActiveEdition} 
              editions={infantil} 
            />
          )}

          {/* Subcategory filter - show for both categories */}
          <SubcategoryFilter 
            activeSubcategory={activeSubcategory} 
            setActiveSubcategory={setActiveSubcategory} 
            subcategoryOptions={subcategoryOptions} 
          />
        </div>
      </section>

      {/* Results Tabs Section */}
      <ResultadosContent 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeCategory={activeCategory}
        activeEdition={activeEdition}
        activeSubcategory={activeSubcategory}
        filteredGoalsData={filteredGoalsData}
        filteredTablaData={filteredTablaData}
        filteredPartidosData={filteredPartidosData}
        editionName={activeCategory === "infantil" ? infantil[activeEdition - 1].name : undefined}
        getSubcategoryLabel={getSubcategoryLabel}
        showSeparateSections={showSeparateSections}
        getSubcategoryData={getSubcategoryData}
        subcategories={actualSubcategories}
      />
    </Layout>
  );
};

export default Resultados;
