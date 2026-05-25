import { motion } from 'framer-motion';
import { volunteerPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import Button from '../../ui/Button';
import './VolunteerPageIntro.css';

const { intro } = volunteerPage;

export default function VolunteerPageIntro() {
  return (
    <section className="volunteer-intro section" id="volunteer-intro" aria-labelledby="volunteer-intro-heading">
      <div className="volunteer-intro__glow" aria-hidden="true" />
      <div className="container volunteer-intro__inner">
        <AnimateIn>
          <h2 className="volunteer-intro__tagline" id="volunteer-intro-heading">
            {intro.tagline}
          </h2>
        </AnimateIn>

        <div className="volunteer-intro__prose">
          {intro.paragraphs.map((p, i) => (
            <AnimateIn key={i} delay={0.06 + i * 0.06} as="p" className="volunteer-intro__p">
              {p}
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.15}>
          <motion.p
            className="volunteer-intro__closing"
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          >
            {intro.closing}
          </motion.p>
        </AnimateIn>

        <AnimateIn delay={0.22}>
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              document.getElementById('volunteer-form')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Become a Volunteer
          </Button>
        </AnimateIn>
      </div>
    </section>
  );
}
