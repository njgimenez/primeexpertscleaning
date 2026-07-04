import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="section-header contact-header">
            <span className="section-pretitle">Contact Us</span>
            <h2 className="section-title">Get a Free Quote</h2>
            <p className="section-subtitle">Tell us what you need and our team will help you plan the right cleaning service.</p>
          </div>
          <div className="contact-options" aria-label="Contact information">
            <a className="contact-option" href="mailto:primeexperts@primeexpertscleaning.com">
              <Mail size={22} />
              <span>primeexperts@primeexpertscleaning.com</span>
            </a>
            <div className="contact-option">
              <MapPin size={22} />
              <span>Gilbert, Chandler, Mesa, Tempe, Scottsdale and Queen Creek</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
