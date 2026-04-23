import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages = [
  { url: `${import.meta.env.BASE_URL}gallery/results/03595C3B-6E63-4DDE-A515-EEED6E23DE2C.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/1BE839FA-CCC5-4DE4-B52D-6FE942AC8A7A(2).png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/201D09C3-DF88-48FB-AF3C-6605BD112E9D.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/32ADDA6C-5B76-4D38-ADC3-2B0E89E82D0E.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/440ECFD2-B840-4BA1-8A1C-3E8150127C9F.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/5E17EF99-D5CE-4451-A558-30B3DBC46DEA.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/5EE30EFC-551C-4FF1-8B6B-FF68DB41D6AD.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/882B86F0-5C76-4304-8539-6F654AC316CB.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/8AA9F63C-8E5D-4BC7-9334-0ED4F1EEF229(1).png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/9F8C079B-4A14-4DAD-8233-922ADC0628A1.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/B2F95839-C7B7-4737-91B1-CBCC7D5B7974.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/CCFF9C35-130E-4979-8304-ED6FE3478354.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/D2573171-7E13-4FD8-A7E5-D95C4A1F9CF4.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/E256D56D-49F5-402F-8E4B-68FBB0DBFD3D(1).png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/E3288A53-6937-4CCA-B361-3592C8B50DBB(1).png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/E5C826D9-DB70-41A1-AC87-1DF0EE834F61.png` },
  { url: `${import.meta.env.BASE_URL}gallery/results/F0D2DE18-F372-4DCE-AA54-67D76CF02185.png` }
];

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const initialLimit = 8;
  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, initialLimit);

  const openModal = (index) => {
    setSelectedIdx(index);
    setIsAutoPlaying(true);
  };

  const closeModal = () => setSelectedIdx(null);

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIdx((prev) => (prev + 1) % galleryImages.length);
    setIsAutoPlaying(false); // Pause auto-play on manual interaction
    setTimeout(() => setIsAutoPlaying(true), 12000); // Resume after a long delay
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 12000);
  };

  // Auto-play logic
  React.useEffect(() => {
    let interval;
    if (selectedIdx !== null && isAutoPlaying) {
      interval = setInterval(() => {
        setSelectedIdx((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [selectedIdx, isAutoPlaying]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="section-header">
          <span className="section-pretitle">Our Work</span>
          <h2 className="section-title">See the Results</h2>
        </div>

        <div className="gallery-grid">
          <AnimatePresence>
            {displayedImages.map((img, index) => (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gallery-item"
                onClick={() => openModal(index)}
                style={{ cursor: 'pointer' }}
              >
                <img src={img.url} alt="Cleaning Result" />
                <div className="gallery-overlay">
                  <div className="zoom-icon">
                    <ChevronRight size={32} />
                  </div>
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="gallery-modal"
            onClick={closeModal}
          >
            <button className="modal-close" onClick={closeModal}>
              <X size={32} />
            </button>
            
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="nav-btn prev" onClick={prevImage}>
                <ChevronLeft size={48} />
              </button>
              
              <div className="modal-image-container">
                <motion.img
                  key={selectedIdx}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  src={galleryImages[selectedIdx].url}
                  alt="Gallery Enlarged"
                  className="modal-image"
                />
              </div>

              <button className="nav-btn next" onClick={nextImage}>
                <ChevronRight size={48} />
              </button>
            </div>

            <div className="modal-counter">
              {selectedIdx + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
