import React from 'react';

const Textarea = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`
        w-full p-3 rounded-xl 
        border border-indigo-300 
        bg-white text-gray-800 placeholder-gray-400 
        shadow-sm resize-y 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 
        focus:border-transparent 
        transition 
        ${className}
      `}
      {...props}
    />
  );
};

export default Textarea;
