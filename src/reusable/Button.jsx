import React from 'react';

const VARIANTS = {
  primary: 'bg-amber-500 hover:bg-amber-600 text-white font-bold',
  secondary: 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium',
  danger: 'bg-red-600 hover:bg-red-700 text-white font-bold'
};

export default function Button({ 
  children,           
  onClick,            
  variant = 'primary',
  className = '',     
  disabled = false,   
  ...props           
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}