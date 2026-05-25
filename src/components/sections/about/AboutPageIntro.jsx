import { motion } from 'framer-motion';
import { aboutPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import './AboutPageIntro.css';

const { intro } = aboutPage;

export default function AboutPageIntro() {
  return (
    <section className="about-intro section" id="about-intro" aria-labelledby="about-intro-heading">
      <div className="about-intro__glow" aria-hidden="true" />
      <div className="container about-intro__grid">
        <div className="about-intro__copy">
          <AnimateIn>
            <p className="about-intro__tagline" id="about-intro-heading">
              {intro.tagline}
            </p>
          </AnimateIn>
          <div className="about-intro__prose">
            {intro.paragraphs.map((p, i) => (
              <AnimateIn key={i} delay={0.08 + i * 0.06} as="p" className="about-intro__p">
                {p}
              </AnimateIn>
            ))}
          </div>
        </div>

        <AnimateIn delay={0.15}>
          <motion.figure
            className="about-intro__mission"
            initial={false}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          >
            <span className="about-intro__mission-label">Our mission in one line</span>
            <blockquote className="about-intro__mission-quote">{intro.missionLine}</blockquote>
          </motion.figure>
        </AnimateIn>
      </div>
    </section>
  );
}
