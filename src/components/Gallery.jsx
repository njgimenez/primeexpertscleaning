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
  { url: `${import.meta.env.BASE_URL}gallery/carpet_restoration.png`, title: 'Carpet Restoration' },
  { url: `${import.meta.env.BASE_URL}gallery/detail_dusting.png`, title: 'Detailed Dusting' },
  { url: `${import.meta.env.BASE_URL}gallery/sparkling_kitchens.png`, title: 'Sparkling Kitchens' },
  { url: `${import.meta.env.BASE_URL}gallery/office_sanitize.png`, title: 'Office Sanitize' },
  { url: `${import.meta.env.BASE_URL}gallery/floor_scrubbing.png`, title: 'Floor Scrubbing' },
  { url: `${import.meta.env.BASE_URL}gallery/airbnb_turnover.png`, title: 'Airbnb Turnover' }
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">Our Work</span>
          <h2 className="section-title">See the Results</h2>
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

        <div className="see-more-container">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-primary"
          >
            {showAll ? 'Show Less' : 'See More Results'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
