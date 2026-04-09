import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: 'var(--navy)', color: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get a Free Quote</h2>
          <p style={{ opacity: 0.8 }}>Fill out the form below and we'll get back to you shortly.</p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: 'var(--radius)', overflow: 'hidden', minHeight: '600px' }}>
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
