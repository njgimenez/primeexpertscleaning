import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const initialImages = [
  { url: `${import.meta.env.BASE_URL}gallery/clean_kitchen.png`, title: 'Luxury Kitchen Deep Clean' },
  { url: `${import.meta.env.BASE_URL}gallery/office_cleaning.png`, title: 'Premium Office Services' },
  { url: `${import.meta.env.BASE_URL}gallery/window_cleaning.png`, title: 'Window Excellence' },
  { url: `${import.meta.env.BASE_URL}gallery/carpet_cleaning.png`, title: 'Industrial Carpet Care' },
  { url: `${import.meta.env.BASE_URL}gallery/airbnb_cleaning.png`, title: 'Airbnb turnover' },
  { url: `${import.meta.env.BASE_URL}gallery/post_construction.png`, title: 'Post-Construction' }
];

const moreImages = [
  { url: 'https://images.unsplash.com/photo-1603631401822-2edf4008319d?auto=format&fit=crop&q=80&w=800', title: 'Carpet Restoration' },
  { url: 'https://images.unsplash.com/photo-1627905646269-7f03bd0443d3?auto=format&fit=crop&q=80&w=800', title: 'Detailed Dusting' },
  { url: 'https://images.unsplash.com/photo-1585421514738-ee94a5ef01f3?auto=format&fit=crop&q=80&w=800', title: 'Sparkling Kitchens' },
  { url: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800', title: 'Office Sanitize' },
  { url: 'https://images.unsplash.com/photo-1627905644214-41d6540c495e?auto=format&fit=crop&q=80&w=800', title: 'Floor Scrubbing' },
  { url: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800', title: 'Airbnb Turnover' }
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="gallery" style={{ background: '#f1f5f9' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: 'var(--accent)', fontWeight: '800', textTransform: 'uppercase' }}>Our Work</span>
          <h2 style={{ fontSize: '3rem', marginTop: '1rem' }}>See the Results</h2>
        </div>
        
        <div className="gallery-grid">
          <AnimatePresence>
            {[...initialImages, ...(showAll ? moreImages : [])].map((img, index) => (
              <motion.div 
                key={img.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gallery-item"
              >
                <img src={img.url} alt={img.title} />
                <div className="gallery-overlay">
                  <span>{img.title}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button 
            onClick={() => setShowAll(!showAll)}
            className="btn-primary"
            style={{ padding: '1rem 3rem' }}
          >
            {showAll ? 'Show Less' : 'See More Results'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
