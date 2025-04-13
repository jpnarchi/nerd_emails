
import React from 'react';

interface EditionSelectorProps {
  activeEdition: number;
  setActiveEdition: (edition: number) => void;
  editions: { name: string }[];
}

const EditionSelector = ({ activeEdition, setActiveEdition, editions }: EditionSelectorProps) => {
  if (!editions || editions.length === 0) return null;
  
  return (
    <div className="mt-6">
      <div className="flex justify-center mb-2">
        <h3 className="text-lg font-semibold text-gray-700">Seleccionar Edición:</h3>
      </div>
      <div className="flex justify-center flex-wrap gap-2">
        {editions.map((edition, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeEdition === index + 1 
                ? "bg-supercopa-gold text-white" 
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveEdition(index + 1)}
          >
            {edition.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EditionSelector;
