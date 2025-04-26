import React from 'react';

const SkipLinks = () => {
  return (
    <div className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:z-50 focus-within:top-0 focus-within:left-0 focus-within:w-full focus-within:bg-black focus-within:p-4">
      <a 
        href="#main-content" 
        className="text-white bg-[#95BF92] px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>
      <a 
        href="#footer" 
        className="text-white bg-[#95BF92] px-4 py-2 rounded-lg ml-4 focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to footer
      </a>
    </div>
  );
};

export default SkipLinks;