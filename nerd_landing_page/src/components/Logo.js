import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`${className}`}>
      <img 
        src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0WuzDVLuQZbqoejUKli0DLRPQwtB6T1AFxfmN" 
        alt="Nerd Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;
// DONE