import React from 'react';
import SolutionCard from './SolutionCard';

const SolutionsGrid = ({ solutions }) => {
  return (
    <section className="bg-gradient-to-b from-[#0a1a0a] to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map(solution => (
            <SolutionCard key={solution.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;