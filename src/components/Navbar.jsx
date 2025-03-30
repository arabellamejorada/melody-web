import { Link } from 'react-router-dom'
import '../index.css'

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading no-underline text-blue text-2xl">
          melody.web
        </Link>

        {/* Nav links */}
        <ul className="flex list-none space-x-6">
          <li>
            <Link
              to="/about"
              className="font-heading no-underline text-orange text-lg hover:text-orange-600 transition-colors"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/game"
              className="font-heading no-underline text-orange text-lg hover:text-orange-600 transition-colors"
            >
              game
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar