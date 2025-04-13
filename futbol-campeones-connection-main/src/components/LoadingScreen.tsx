
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const colorVariants = [
  'from-supercopa-navy to-supercopa-gold',
  'from-supercopa-gold to-supercopa-navy',
  'from-blue-500 to-supercopa-gold',
  'from-supercopa-gold to-blue-500',
];

const LoadingScreen = () => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % colorVariants.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-supercopa-navy flex flex-col items-center justify-center z-50">
      <div className="relative">
        <img 
          src="/lovable-uploads/b3cc060b-9f29-47a4-be9a-7eba29ca10ab.png" 
          alt="SuperCopa Mex Logo" 
          className="w-32 md:w-40 animate-pulse-slow"
        />
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r opacity-30 rounded-full transition-colors duration-1000",
          colorVariants[colorIndex]
        )}></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
