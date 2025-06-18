import React from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-sm shadow-md border-b border-indigo-300 rounded-b-xl">
  <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
    <h1 className="text-3xl font-extrabold text-indigo-700 tracking-wide select-none">
      Paste App
    </h1>
    <nav className="flex gap-8">
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "text-xl font-semibold px-5 py-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2",
            isActive
              ? "text-indigo-700 bg-indigo-100 shadow-inner"
              : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
          )
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/pastes"
        className={({ isActive }) =>
          cn(
            "text-xl font-semibold px-5 py-2 rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2",
            isActive
              ? "text-indigo-700 bg-indigo-100 shadow-inner"
              : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
          )
        }
      >
        Pastes
      </NavLink>
    </nav>
  </div>
</header>

  )
}

export default Navbar
