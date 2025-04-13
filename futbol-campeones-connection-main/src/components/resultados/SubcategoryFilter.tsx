
import React from 'react';
import { Filter } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface SubcategoryOption {
  value: string;
  label: string;
}

interface SubcategoryFilterProps {
  activeSubcategory: string;
  setActiveSubcategory: (value: string) => void;
  subcategoryOptions: SubcategoryOption[];
}

const SubcategoryFilter = ({ 
  activeSubcategory, 
  setActiveSubcategory, 
  subcategoryOptions 
}: SubcategoryFilterProps) => {
  return (
    <div className="mt-6">
      <div className="flex justify-center flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <Filter size={18} className="text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-700">Filtrar por Categoría de Edad:</h3>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          <ToggleGroup 
            type="single" 
            value={activeSubcategory} 
            onValueChange={(value) => value && setActiveSubcategory(value)}
          >
            {subcategoryOptions.map((option) => (
              <ToggleGroupItem 
                key={option.value} 
                value={option.value} 
                aria-label={option.label} 
                className="px-4 py-2"
              >
                {option.label}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryFilter;
