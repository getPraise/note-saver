import React from 'react';

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`
        w-full p-2 md:p-3 rounded-xl 
        border border-indigo-300 
        bg-white text-gray-800 placeholder-gray-400 
        shadow-sm 
        focus:outline-none focus:ring-2 focus:ring-indigo-400 
        focus:border-transparent 
        transition 
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;
