import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import HousecallProButton from './HousecallProButton';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <Link to="/" className="logo" onClick={handleNavClick}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Prime Experts Cleaning LLC" />
          <span className="mobile-logo-text">Prime Experts Cleaning</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`menu-backdrop ${isMenuOpen ? 'active' : ''}`} onClick={handleNavClick} aria-hidden="true" />

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li className="mobile-menu-header">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
            <span>Prime Experts Cleaning</span>
          </li>
          <li><Link to="/" onClick={handleNavClick}>Home</Link></li>
          <li className="nav-dropdown">
            <Link to="/services" onClick={handleNavClick} className="nav-dropdown-trigger">
              Services
              <ChevronDown size={16} />
            </Link>
            <ul className="services-submenu">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`} onClick={handleNavClick}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/#gallery" onClick={handleNavClick}>Results</Link></li>
          <li><Link to="/#about" onClick={handleNavClick}>About</Link></li>
          <li><Link to="/#coverage" onClick={handleNavClick}>Coverage</Link></li>
          <li><HousecallProButton onClick={handleNavClick} /></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
