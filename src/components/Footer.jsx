import React from 'react';
import { Instagram, Facebook, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Prime Experts</h3>
            <p>Premium cleaning services in Arizona. Bringing prestige and professional care to your home and business.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Results</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#coverage">Coverage</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>Arizona, USA</p>
              <p>info@primeexpertscleaning.com</p>
              <p className="footer-hours">M-F: 8am - 6pm</p>
            </div>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.instagram.com/primexpertscleaningllc/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Website"><Globe size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Prime Experts Cleaning LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
