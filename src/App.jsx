import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import BrandIdentity from './components/BrandIdentity'
import Gallery from './components/Gallery'
import Coverage from './components/Coverage'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <BrandIdentity />
        <Gallery />
        <Coverage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
