import { motion } from 'framer-motion';
import {
  HiOutlineHeart,
  HiOutlineSpeakerphone,
  HiOutlineUserGroup,
  HiOutlineTrendingUp,
} from 'react-icons/hi';
import { volunteerPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './VolunteerWhy.css';

const { why } = volunteerPage;

const iconMap = {
  impact: HiOutlineHeart,
  awareness: HiOutlineSpeakerphone,
  outreach: HiOutlineUserGroup,
  growth: HiOutlineTrendingUp,
};

export default function VolunteerWhy() {
  return (
    <section className="section section--alt volunteer-why" id="why-volunteer">
      <div className="container">
        <SectionHeader
          label={why.label}
          title={why.title}
          description={why.subtitle}
          align="center"
        />

        <ul className="volunteer-why__grid">
          {why.reasons.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimateIn key={item.title} delay={i * 0.06} as="li">
                <motion.article
                  className="volunteer-why__card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <span className="volunteer-why__icon" aria-hidden="true">
                    <Icon size={24} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </motion.article>
              </AnimateIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
