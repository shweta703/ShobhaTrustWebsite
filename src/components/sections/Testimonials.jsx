import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { testimonials } from '../../data/content';
import AnimateIn from '../ui/AnimateIn';
import SectionHeader from '../ui/SectionHeader';
import './Testimonials.css';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section testimonials" id="testimonials">
      <div className="container">
        <SectionHeader
          label="Testimonials"
          title="Voices from our community"
          description="Hear from the people whose lives have been touched by Shobha Trust programs."
        />

        <AnimateIn>
          <div className="testimonials__slider">
            <div className="testimonials__quote-mark" aria-hidden="true">&ldquo;</div>

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                className="testimonials__quote"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <p>{current.quote}</p>
                <footer className="testimonials__author">
                  <img src={current.avatar} alt="" className="testimonials__avatar" />
                  <div>
                    <cite>{current.name}</cite>
                    <span>{current.role}</span>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="testimonials__nav">
              <button type="button" onClick={prev} aria-label="Previous testimonial">
                <HiChevronLeft size={22} />
              </button>
              <div className="testimonials__dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`testimonials__dot ${i === index ? 'testimonials__dot--active' : ''}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button type="button" onClick={next} aria-label="Next testimonial">
                <HiChevronRight size={22} />
              </button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
