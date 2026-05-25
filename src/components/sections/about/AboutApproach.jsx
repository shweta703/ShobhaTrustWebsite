import { motion } from 'framer-motion';
import {
  HiClipboardList,
  HiHeart,
  HiSearchCircle,
  HiBookOpen,
  HiUserGroup,
} from 'react-icons/hi';
import { aboutPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './AboutApproach.css';

const { approach } = aboutPage;

const iconMap = {
  risk: HiClipboardList,
  primary: HiHeart,
  secondary: HiSearchCircle,
  education: HiBookOpen,
  family: HiUserGroup,
};

export default function AboutApproach() {
  return (
    <section className="section about-approach" id="our-approach">
      <div className="container">
        <SectionHeader
          label={approach.label}
          title={approach.title}
          description={approach.subtitle}
          align="center"
        />

        <ul className="about-approach__grid">
          {approach.pillars.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimateIn key={item.title} delay={i * 0.06} as="li">
                <motion.article
                  className="about-approach__card"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                >
                  <span className="about-approach__icon" aria-hidden="true">
                    <Icon size={24} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.article>
              </AnimateIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
