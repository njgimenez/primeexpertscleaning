import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={handleNavClick} style={{ 
          background: 'rgba(255, 255, 255, 0.05)', 
          padding: '8px', 
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <img src={`${import.meta.env.BASE_URL}logo.jpeg`} alt="Prime Experts Cleaning LLC" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
          <li><Link to="/services" onClick={handleNavClick}>Services</Link></li>
          <li><Link to="/#gallery" onClick={handleNavClick}>Results</Link></li>
          <li><Link to="/#about" onClick={handleNavClick}>About</Link></li>
          <li><Link to="/#coverage" onClick={handleNavClick}>Coverage</Link></li>
          <li><a href="#contact" className="btn-primary" onClick={handleNavClick}>Get a Quote</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
