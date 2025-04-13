
import React from 'react';

interface CategoryToggleProps {
  activeCategory: string;
  handleCategoryChange: (category: string) => void;
}

const CategoryToggle = ({ activeCategory, handleCategoryChange }: CategoryToggleProps) => {
  return (
    <div className="flex justify-center mb-4">
      <div className="bg-white rounded-lg shadow-md p-1 inline-flex">
        <button 
          className={`px-6 py-2 rounded-md font-medium transition-all ${activeCategory === "juvenil" ? "bg-supercopa-navy text-white" : "text-gray-600 hover:bg-gray-100"}`}
          onClick={() => handleCategoryChange("juvenil")}
        >
          Categoría Juvenil
        </button>
        <button 
          className={`px-6 py-2 rounded-md font-medium transition-all ${activeCategory === "infantil" ? "bg-supercopa-navy text-white" : "text-gray-600 hover:bg-gray-100"}`}
          onClick={() => handleCategoryChange("infantil")}
        >
          Categoría Infantil
        </button>
      </div>
    </div>
  );
};

export default CategoryToggle;
