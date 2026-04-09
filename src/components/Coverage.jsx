import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const cities = [
  'Gilbert', 'Chandler', 'Queen Creek', 
  'Mesa', 'Tempe', 'Scottsdale'
];

const Coverage = () => {
  return (
    <section id="coverage" style={{ background: '#f8fafc' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="coverage-island"
        >
          <div style={{ marginBottom: '3rem' }}>
            <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase' }}>Service Areas</span>
            <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>Serving the Entire Valley</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem' }}>Professional care for Arizona's most prestigious communities.</p>
          </div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            {cities.map((city, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="city-pill"
              >
                {city}
              </motion.div>
            ))}
          </div>
          
          <div style={{ marginTop: '4rem', opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <MapPin size={20} />
            <span style={{ fontWeight: '500' }}>Based in Arizona, USA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
