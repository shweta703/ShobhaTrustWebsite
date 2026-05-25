import { motion } from 'framer-motion';
import { aboutPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './AboutWhoWeAre.css';

const { whoWeAre } = aboutPage;

export default function AboutWhoWeAre() {
  return (
    <section className="section section--alt about-who" id="who-we-are">
      <div className="container about-who__grid">
        <AnimateIn direction="left" className="about-who__media">
          <motion.div
            className="about-who__image-wrap"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
          >
            <img src={whoWeAre.image} alt={whoWeAre.imageAlt} loading="lazy" />
            <div className="about-who__image-accent" aria-hidden="true" />
          </motion.div>
        </AnimateIn>

        <div className="about-who__content">
          <SectionHeader label={whoWeAre.label} title={whoWeAre.title} align="left" />
          <div className="about-who__prose">
            {whoWeAre.paragraphs.map((p, i) => (
              <AnimateIn key={i} delay={0.05 * i}>
                <p>{p}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
