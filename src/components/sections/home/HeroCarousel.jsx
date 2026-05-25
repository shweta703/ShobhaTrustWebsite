import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { homePage } from '../../../data/content';
import { brand } from '../../../constants/brand';
import Button from '../../ui/Button';
import './HeroCarousel.css';

const { hero } = homePage;
const carouselSlides = hero.carousel;
const INTERVAL_MS = 5500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index) => {
      setDirection(index > current ? 1 : -1);
      setCurrent((index + carouselSlides.length) % carouselSlides.length);
    },
    [current, carouselSlides.length],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [next]);

  const bgVariants = {
    enter: () => ({ opacity: 0, scale: 1.08 }),
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
  };

  return (
    <section className="hero-carousel" id="home" aria-label="Hero">
      <div className="hero-carousel__bg" aria-hidden="true">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            className="hero-carousel__bg-slide"
            custom={direction}
            variants={bgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundImage: `url(${carouselSlides[current].src})` }}
          />
        </AnimatePresence>
        <div className="hero-carousel__bg-overlay" />
        <div className="hero-carousel__bg-grain" />
      </div>

      <div className="container hero-carousel__inner">
        <motion.div
          className="hero-carousel__panel"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-carousel__badge">Shobha Trust · Non-profit</span>

          <h1 className="hero-carousel__headline">{hero.headline}</h1>

          <p className="hero-carousel__subheadline">{hero.subheadline}</p>

          <p className="hero-carousel__brand-tagline">{brand.tagline}</p>

          <div className="hero-carousel__ctas">
            <Button to={hero.primaryCta.to} variant="primary" size="lg">
              {hero.primaryCta.label}
              <HiArrowRight size={18} />
            </Button>
            <Button to={hero.secondaryCta.to} variant="ghost" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <p className="hero-carousel__tagline">{hero.tagline}</p>
        </motion.div>

        <div className="hero-carousel__bottom" role="tablist" aria-label="Background slides">
          {carouselSlides.map((slide, i) => (
            <button
              key={`${slide.src}-${i}`}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}: ${slide.alt}`}
              className={`hero-carousel__dot ${i === current ? 'hero-carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      <div className="hero-carousel__scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-carousel__scroll-line" />
      </div>
    </section>
  );
}
