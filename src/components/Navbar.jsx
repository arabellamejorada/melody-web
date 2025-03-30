import React from 'react'

function Navbar() {
  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/40 lg:backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo linking to home */}
        <a
          href="#home"
          className="font-heading text-blue text-2xl no-underline text-shadow-lg"
        >
          melody.web
        </a>
        {/* Nav links */}
        <ul className="flex list-none space-x-6">
          <li>
            <a
              href="#aboutSection"
              className="font-heading text-orange text-shadow-lg text-lg hover:text-orange-600 transition-colors no-underline"
            >
              about
            </a>
          </li>
          <li>
            <a
              href="#game"
              className="font-heading text-orange text-shadow-lg text-lg hover:text-orange-600 transition-colors no-underline"
            >
              game
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar