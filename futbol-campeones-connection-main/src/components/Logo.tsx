
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClass = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-20',
  }[size];

  return (
    <div className={`${sizeClass} flex items-center justify-center`}>
      <span className="text-supercopa-gold font-bold text-3xl">SUPERCOPA</span>
    </div>
  );
};

export default Logo;
