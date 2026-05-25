import { motion } from 'framer-motion';
import {
  HiOutlineSpeakerphone,
  HiOutlineSearch,
  HiOutlineUserGroup,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineHeart,
  HiOutlineArrowRight,
} from 'react-icons/hi';
import { programsPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './ProgramsCategories.css';

const { categories } = programsPage;

const iconMap = {
  awareness: HiOutlineSpeakerphone,
  screening: HiOutlineSearch,
  outreach: HiOutlineUserGroup,
  workshop: HiOutlineAcademicCap,
  csr: HiOutlineBriefcase,
  udharam: HiOutlineHeart,
};

function CategoryCard({ item, Icon }) {
  const className = `programs-categories__card${item.featured ? ' programs-categories__card--featured' : ''}`;
  const inner = (
    <>
      <span className="programs-categories__icon" aria-hidden="true">
        <Icon size={24} />
      </span>
      {item.featured && <span className="programs-categories__badge">Flagship</span>}
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      {item.href && (
        <span className="programs-categories__link">
          View initiative <HiOutlineArrowRight size={16} aria-hidden="true" />
        </span>
      )}
    </>
  );

  if (item.href) {
    return (
      <motion.a
        href={item.href}
        className={`${className} programs-categories__card--link`}
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article
      className={className}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      {inner}
    </motion.article>
  );
}

export default function ProgramsCategories() {
  return (
    <section className="section programs-categories" id="event-categories">
      <div className="container">
        <SectionHeader label={categories.label} title={categories.title} align="center" />

        <ul className="programs-categories__grid">
          {categories.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimateIn key={item.title} delay={i * 0.05} as="li">
                <CategoryCard item={item} Icon={Icon} />
              </AnimateIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
