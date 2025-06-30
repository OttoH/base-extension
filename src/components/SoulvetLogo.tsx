import React from 'react';

interface SoulvetLogoProps {
  size?: number;
  className?: string;
}

export const SoulvetLogo: React.FC<SoulvetLogoProps> = ({ 
  size = 24, 
  className = '' 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Paw print design */}
      <circle cx="6" cy="6" r="2" fill="currentColor" />
      <circle cx="12" cy="4.5" r="2" fill="currentColor" />
      <circle cx="18" cy="6" r="2" fill="currentColor" />
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      
      {/* SOULVET text integrated into design */}
      <text 
        x="12" 
        y="20" 
        textAnchor="middle" 
        fontSize="4" 
        fontWeight="bold" 
        fill="currentColor"
        fontFamily="Arial, sans-serif"
      >
        SV
      </text>
    </svg>
  );
};
