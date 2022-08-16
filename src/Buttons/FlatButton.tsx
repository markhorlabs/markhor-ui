import React from 'react';

export interface FlatButtonProps {
  children: React.ReactNode;
}

export const FlatButton: React.FC<FlatButtonProps> = ({ children }) => {
  return (
    <button className="bg-green-400 p-2 shadow-sm">
      {children || 'Click Me!'}
    </button>
  );
};
