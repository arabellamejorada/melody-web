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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center">
        <Ellipsis />
        <BiChevronsDown
          onClick={handleScrollToAbout}
          className="mt-3 text-yellow text-8xl cursor-pointer hover:text-yellow-600 transition-colors"
        />
      </section>
      {/* About Section */}
      <section id="aboutme" className="min-h-screen flex items-center justify-center">
        <About />
      </section>
      {/* Game Section */}
      <section id="game" className="min-h-screen flex items-center justify-center">
        <Game />
      </section>
      <Footer />
    </div>
  )
}

export default Home