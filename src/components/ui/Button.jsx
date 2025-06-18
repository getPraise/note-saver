import React from 'react'

const Button = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none'

  let variantStyles = ''

  switch (variant) {
    case 'outline':
      variantStyles =
        'border border-indigo-300 bg-transparent text-indigo-700 hover:bg-indigo-50 focus-visible:ring-indigo-500'
      break
    case 'destructive':
      variantStyles =
        'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500'
      break
    case 'secondary':
      variantStyles =
        'bg-gray-500 text-white hover:bg-gray-600 focus-visible:ring-gray-400'
      break
    default:
      variantStyles =
        'bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500'
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
