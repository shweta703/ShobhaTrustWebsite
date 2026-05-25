import {
  HiOutlineAcademicCap,
  HiOutlineBeaker,
  HiOutlineHeart,
  HiOutlineSearch,
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import { homePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './HomeFocusAreas.css';

const { focusAreas } = homePage;

const iconMap = {
  education: HiOutlineAcademicCap,
  screening: HiOutlineSearch,
  lifestyle: HiOutlineHeart,
  research: HiOutlineBeaker,
};

export default function HomeFocusAreas() {
  return (
    <section className="section section--alt home-focus">
      <div className="container">
        <SectionHeader label={focusAreas.label} title={focusAreas.title} />

        <div className="home-focus__grid">
          {focusAreas.areas.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <AnimateIn key={area.title} delay={i * 0.08}>
                <motion.article
                  className="home-focus__card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <span className="home-focus__icon" aria-hidden="true">
                    <Icon size={26} />
                  </span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </motion.article>
              </AnimateIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
