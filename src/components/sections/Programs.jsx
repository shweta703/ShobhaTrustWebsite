import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HiOutlineSpeakerphone,
  HiOutlineSearch,
  HiOutlineBeaker,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineAcademicCap,
} from 'react-icons/hi';
import { programs } from '../../data/content';
import AnimateIn from '../ui/AnimateIn';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import './Programs.css';

const iconMap = {
  ribbon: HiOutlineHeart,
  megaphone: HiOutlineSpeakerphone,
  syringe: HiOutlineBeaker,
  search: HiOutlineSearch,
  leaf: HiOutlineAcademicCap,
  sparkle: HiOutlineSparkles,
};

export default function Programs({
  limit,
  showHeader = true,
  showViewAll = false,
}) {
  const items = limit ? programs.slice(0, limit) : programs;

  return (
    <section className="section programs" id="programs">
      <div className="container">
        {showHeader && (
          <SectionHeader
            label="Our Programs"
            title="Initiatives that create lasting change"
            description="From cancer prevention to youth leadership, every program is designed to reach the communities that need it most."
          />
        )}

        <div className="programs__grid">
          {items.map((program, i) => {
            const Icon = iconMap[program.icon] || HiOutlineHeart;
            return (
              <AnimateIn key={program.id} delay={i * 0.06}>
                <motion.article
                  className="programs__card"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <div className="programs__card-top">
                    <span className="programs__icon" aria-hidden="true">
                      <Icon size={24} />
                    </span>
                    <span className="programs__tag">{program.tag}</span>
                  </div>
                  <h3 className="programs__title">{program.title}</h3>
                  <p className="programs__desc">{program.description}</p>
                  <Link to={`/programs#${program.id}`} className="programs__link">
                    Learn more →
                  </Link>
                </motion.article>
              </AnimateIn>
            );
          })}
        </div>

        {showViewAll && (
          <div className="programs__footer">
            <Button to="/programs" variant="outline" size="md">
              View All Programs
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
