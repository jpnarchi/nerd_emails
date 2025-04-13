
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Star, Users } from 'lucide-react';
import TablaPartidos from './TablaPartidos';
import TablaGoleadores from './TablaGoleadores';
import TablaGeneral from './TablaGeneral';
import SubcategoryResults from './SubcategoryResults';

interface ResultadosContentProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeCategory: string;
  activeEdition: number;
  activeSubcategory: string;
  filteredGoalsData: any[];
  filteredTablaData: any[];
  filteredPartidosData: any[];
  editionName?: string;
  getSubcategoryLabel: (subcategory: string) => string;
  showSeparateSections?: boolean;
  getSubcategoryData?: (subcategory: string) => {
    goalsData: any[];
    tablaData: any[];
    partidosData: any[];
  };
  subcategories?: string[];
}

const ResultadosContent = ({
  activeTab,
  setActiveTab,
  activeCategory,
  activeSubcategory,
  filteredGoalsData,
  filteredTablaData,
  filteredPartidosData,
  editionName,
  getSubcategoryLabel,
  showSeparateSections = false,
  getSubcategoryData,
  subcategories = []
}: ResultadosContentProps) => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <Tabs 
          defaultValue="partidos" 
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <div className="mb-8 flex justify-center">
            <TabsList className="grid grid-cols-3 w-full max-w-xl">
              <TabsTrigger value="partidos" className="flex items-center justify-center gap-2">
                <Trophy size={activeTab === "partidos" ? 18 : 16} className={activeTab === "partidos" ? "text-supercopa-gold" : ""} />
                <span>Partidos</span>
              </TabsTrigger>
              <TabsTrigger value="goleo" className="flex items-center justify-center gap-2">
                <Star size={activeTab === "goleo" ? 18 : 16} className={activeTab === "goleo" ? "text-supercopa-gold" : ""} />
                <span>Goleo</span>
              </TabsTrigger>
              <TabsTrigger value="tabla" className="flex items-center justify-center gap-2">
                <Users size={activeTab === "tabla" ? 18 : 16} className={activeTab === "tabla" ? "text-supercopa-gold" : ""} />
                <span>Tabla General</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {showSeparateSections && getSubcategoryData && subcategories.length > 0 ? (
            <>
              <TabsContent value="partidos" className="animate-fade-in">
                <SubcategoryResults 
                  activeTab="partidos"
                  activeCategory={activeCategory}
                  editionName={editionName}
                  subcategories={subcategories}
                  getSubcategoryData={getSubcategoryData}
                  getSubcategoryLabel={getSubcategoryLabel}
                />
              </TabsContent>

              <TabsContent value="goleo" className="animate-fade-in">
                <SubcategoryResults 
                  activeTab="goleo"
                  activeCategory={activeCategory}
                  editionName={editionName}
                  subcategories={subcategories}
                  getSubcategoryData={getSubcategoryData}
                  getSubcategoryLabel={getSubcategoryLabel}
                />
              </TabsContent>

              <TabsContent value="tabla" className="animate-fade-in">
                <SubcategoryResults 
                  activeTab="tabla"
                  activeCategory={activeCategory}
                  editionName={editionName}
                  subcategories={subcategories}
                  getSubcategoryData={getSubcategoryData}
                  getSubcategoryLabel={getSubcategoryLabel}
                />
              </TabsContent>
            </>
          ) : (
            <>
              <TabsContent value="partidos" className="animate-fade-in">
                <TablaPartidos 
                  data={filteredPartidosData}
                  activeCategory={activeCategory}
                  editionName={editionName}
                  activeSubcategory={activeSubcategory}
                  getSubcategoryLabel={getSubcategoryLabel}
                />
              </TabsContent>

              <TabsContent value="goleo" className="animate-fade-in">
                <TablaGoleadores 
                  data={filteredGoalsData}
                  activeCategory={activeCategory}
                  editionName={editionName}
                  activeSubcategory={activeSubcategory}
                  getSubcategoryLabel={getSubcategoryLabel}
                />
              </TabsContent>

              <TabsContent value="tabla" className="animate-fade-in">
                <TablaGeneral 
                  data={filteredTablaData}
                  activeCategory={activeCategory}
                  editionName={editionName}
                  activeSubcategory={activeSubcategory}
                  getSubcategoryLabel={getSubcategoryLabel}
                />
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </section>
  );
};

export default ResultadosContent;
