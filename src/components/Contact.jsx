import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--gold)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.9rem', display: 'block', marginBottom: '0.5rem' }}>Contact Us</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--white)' }}>Get a Free Quote</h2>
          <p style={{ opacity: 0.7, color: 'var(--text-muted)' }}>Fill out the form below and we'll get back to you shortly.</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'var(--navy-light)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', minHeight: '600px', border: '1px solid rgba(201, 168, 76, 0.15)' }}>
          {/* Jotform Embed Placeholder */}
          <iframe
            id="JotFormIFrame-placeholder"
            title="Cleaning Service Request"
            onLoad={() => window.parent.scrollTo(0, 0)}
            allowTransparency="true"
            allowFullScreen="true"
            src="https://form.jotform.com/240915647563059" // Example Jotform ID, user will update
            frameBorder="0"
            style={{ width: '100%', minHeight: '600px', border: 'none' }}
            scrolling="no"
          >
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
