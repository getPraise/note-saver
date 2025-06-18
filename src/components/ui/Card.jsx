import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white border border-indigo-200 rounded-xl shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export default Card;
