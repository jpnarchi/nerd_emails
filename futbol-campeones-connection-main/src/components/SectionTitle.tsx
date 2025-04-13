
import { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionTitle = ({ children, align = 'left', className = '' }: SectionTitleProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto after:left-1/2 after:-translate-x-1/2',
    right: 'text-right ml-auto after:right-0 after:left-auto'
  };

  return (
    <h2 className={`section-title ${alignmentClasses[align]} ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
