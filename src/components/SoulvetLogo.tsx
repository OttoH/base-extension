import React from 'react';

interface SoulvetLogoProps {
  size?: number;
  className?: string;
}

export const SoulvetLogo: React.FC<SoulvetLogoProps> = ({ 
  size = 120, 
  className = '' 
}) => {
  return (
    <img 
      src="/soulvet-logo.png" 
      alt="SOULVET Logo"
      width={size} 
      height={size * 0.4} 
      className={className}
      style={{ 
        objectFit: 'contain'
      }}
    />
  );
};
