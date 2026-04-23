import React from 'react';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const cities = [
  'Gilbert', 'Chandler', 'Queen Creek',
  'Mesa', 'Tempe', 'Scottsdale'
];

const Coverage = () => {
  return (
    <section id="coverage" className="coverage-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="coverage-island"
        >
          {/* Background Map Image */}
          <div className="map-background" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}gallery/map_AZ.png)` }} />

          <div className="coverage-content">
            <div className="section-header">
              <span className="section-pretitle">Service Areas</span>
              <h2 className="section-title">Serving the Entire Valley</h2>
              <p className="section-subtitle">Professional care for Arizona's most prestigious communities.</p>
            </div>

            <div className="cities-grid">
              {cities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="city-pill"
                >
                  <MapPin size={16} />
                  {city}
                </motion.div>
              ))}
            </div>

            <div className="coverage-info">
              <MapPin size={20} />
              <span>Based in Arizona, USA</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Coverage;
