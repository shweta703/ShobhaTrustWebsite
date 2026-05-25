import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gallery as defaultGallery } from '../../data/content';
import AnimateIn from '../ui/AnimateIn';
import SectionHeader from '../ui/SectionHeader';
import './Gallery.css';

export default function Gallery({
  label = 'Impact Stories',
  title = 'Moments of hope & transformation',
  description = 'A glimpse into the communities we serve and the lives we touch together.',
  items,
  limit,
  sectionId = 'gallery',
  altBackground = true,
  hideCaptions = false,
  compact = false,
}) {
  const [active, setActive] = useState(null);
  const galleryItems = items ?? defaultGallery;
  const displayed = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <section
      className={`section gallery${altBackground ? ' section--alt' : ''}${compact ? ' gallery--compact' : ''}${hideCaptions ? ' gallery--no-captions' : ''}`}
      id={sectionId}
    >
      <div className="container">
        <SectionHeader label={label} title={title} description={description} />

        <div className="gallery__grid">
          {displayed.map((item, i) => (
            <AnimateIn key={`${item.src}-${i}`} delay={i * 0.04}>
              <motion.button
                type="button"
                className={`gallery__item${!compact && i === 0 ? ' gallery__item--large' : ''}`}
                onClick={() => setActive(item)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                {!hideCaptions && (
                  <div className="gallery__overlay">
                    <span className="gallery__category">{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>
                )}
              </motion.button>
            </AnimateIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="gallery__lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              className="gallery__lightbox-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={
                  typeof active.src === 'string' && active.src.includes('unsplash')
                    ? active.src.replace('w=600', 'w=1000')
                    : active.src
                }
                alt={active.title}
              />
              {!hideCaptions && (
                <div className="gallery__lightbox-info">
                  <span>{active.category}</span>
                  <h3>{active.title}</h3>
                </div>
              )}
              <button className="gallery__close" onClick={() => setActive(null)} aria-label="Close">
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
