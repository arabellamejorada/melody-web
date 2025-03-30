import { BiChevronsDown } from 'react-icons/bi'
import Navbar from '../components/Navbar.jsx'
import Ellipsis from '../components/Ellipsis.jsx'
import About from './About.jsx'
import Game from './Game.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('aboutSection')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      <Navbar />
      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
        <Ellipsis />
        <BiChevronsDown
          onClick={handleScrollToAbout}
          className="mt-3 text-yellow text-8xl cursor-pointer hover:text-yellow-600 transition-colors"
        />
      </section>
      {/* About Section */}
      <section id="aboutme" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
        <About />
      </section>
      {/* Game Section */}
      <section id="game" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
        <Game />
      </section>
      <Footer />
    </div>
  )
}

export default Home