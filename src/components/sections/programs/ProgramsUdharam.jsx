import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import { programsPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import Button from '../../ui/Button';
import SectionHeader from '../../ui/SectionHeader';
import './ProgramsUdharam.css';

const { udharam } = programsPage;

export default function ProgramsUdharam() {
  return (
    <section
      className="section section--alt programs-udharam"
      id="project-udharam"
      aria-label={udharam.title}
    >
      <div className="container programs-udharam__grid">
        <div className="programs-udharam__content">
          <SectionHeader title={udharam.title} align="left" />
          <AnimateIn delay={0.08}>
            <p className="programs-udharam__desc">{udharam.description}</p>
            <p className="programs-udharam__list-label">Our outreach programs focus on:</p>
            <ul className="programs-udharam__list">
              {udharam.initiatives.map((item) => (
                <li key={item}>
                  <HiCheck size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="programs-udharam__closing">{udharam.closing}</p>
            <div className="programs-udharam__actions">
              <Button to={udharam.cta.to} variant="primary" size="lg">
                {udharam.cta.label}
              </Button>
              <Button to="/volunteer" variant="outline" size="lg">
                Become a Volunteer
              </Button>
            </div>
          </AnimateIn>
        </div>

        <AnimateIn direction="left" className="programs-udharam__media">
          <motion.div
            className="programs-udharam__image-wrap"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.35 }}
          >
            <img src={udharam.image} alt={udharam.imageAlt} loading="lazy" />
          </motion.div>
        </AnimateIn>
      </div>
    </section>
  );
}
