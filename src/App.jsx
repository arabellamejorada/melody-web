import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Game from './sections/Game'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App