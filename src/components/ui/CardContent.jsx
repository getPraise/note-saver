import React from 'react';

const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`p-6 space-y-6 text-gray-800 ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;
