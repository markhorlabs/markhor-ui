import React from 'react';

export interface GradientButtonProps {
  children: React.ReactNode;
}

export const GradientButton: React.FC<GradientButtonProps> = ({ children }) => {
  return (
    <button className="bg-gradient-to-r from-lime-400 to-yellow-400 p-2">
      {children || 'Click Me!'}
    </button>
  );
};
