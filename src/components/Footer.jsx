import React from 'react';
import { Instagram, Facebook, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', background: 'var(--navy-dark)', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
          <div>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Prime Experts</h3>
            <p style={{ opacity: 0.7 }}>Premium cleaning services in Arizona. Quality you can trust, results you can see.</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.2rem' }}>Quick Links</h4>
            <ul style={{ opacity: 0.7, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#coverage">Coverage</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.2rem' }}>Contact Info</h4>
            <p style={{ opacity: 0.7, marginBottom: '0.5rem' }}>Arizona, USA</p>
            <p style={{ opacity: 0.7 }}>Email: info@primeexpertscleaning.com</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.2rem' }}>Follow Us</h4>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://www.instagram.com/primexpertscleaningllc/" target="_blank" rel="noreferrer" style={{ opacity: 0.7, transition: '0.3s' }}><Instagram size={24} /></a>
              <a href="#" style={{ opacity: 0.7 }}><Facebook size={24} /></a>
              <a href="#" style={{ opacity: 0.7 }}><Globe size={24} /></a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.5, fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Prime Experts Cleaning LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
