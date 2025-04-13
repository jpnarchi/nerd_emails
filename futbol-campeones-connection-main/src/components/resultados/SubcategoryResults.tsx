
import React from 'react';
import { Separator } from "@/components/ui/separator";
import TablaPartidos from './TablaPartidos';
import TablaGoleadores from './TablaGoleadores';
import TablaGeneral from './TablaGeneral';

interface SubcategoryResultsProps {
  activeTab: string;
  activeCategory: string;
  editionName?: string;
  subcategories: string[];
  getSubcategoryData: (subcategory: string) => {
    goalsData: any[];
    tablaData: any[];
    partidosData: any[];
  };
  getSubcategoryLabel: (subcategory: string) => string;
}

const SubcategoryResults = ({
  activeTab,
  activeCategory,
  editionName,
  subcategories,
  getSubcategoryData,
  getSubcategoryLabel
}: SubcategoryResultsProps) => {
  return (
    <div className="space-y-8">
      {subcategories.map((subcategory, index) => {
        const { goalsData, tablaData, partidosData } = getSubcategoryData(subcategory);
        
        return (
          <div key={subcategory} className="bg-white rounded-lg p-4">
            <h3 className="text-xl font-bold text-supercopa-navy mb-4">
              Categoría {getSubcategoryLabel(subcategory)}
            </h3>
            
            {activeTab === "partidos" && (
              <TablaPartidos 
                data={partidosData}
                activeCategory={activeCategory}
                editionName={editionName}
                activeSubcategory={subcategory}
                getSubcategoryLabel={getSubcategoryLabel}
              />
            )}
            
            {activeTab === "goleo" && (
              <TablaGoleadores 
                data={goalsData}
                activeCategory={activeCategory}
                editionName={editionName}
                activeSubcategory={subcategory}
                getSubcategoryLabel={getSubcategoryLabel}
              />
            )}
            
            {activeTab === "tabla" && (
              <TablaGeneral 
                data={tablaData}
                activeCategory={activeCategory}
                editionName={editionName}
                activeSubcategory={subcategory}
                getSubcategoryLabel={getSubcategoryLabel}
              />
            )}
            
            {index < subcategories.length - 1 && <Separator className="mt-8" />}
          </div>
        );
      })}
    </div>
  );
};

export default SubcategoryResults;
