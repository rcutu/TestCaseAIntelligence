import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-blue-500/50 
        disabled:cursor-not-allowed rounded-lg font-medium flex items-center 
        justify-center transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};