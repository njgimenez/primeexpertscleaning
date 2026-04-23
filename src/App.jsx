import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import BrandIdentity from './components/BrandIdentity'
import Gallery from './components/Gallery'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
import ScrollToTop from './components/ScrollToTop'

const Home = () => (
  <>
    <Hero />
    <Services />
    <About />
    <BrandIdentity />
    <Gallery />
    <Coverage />
    <Contact />
  </>
)

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
