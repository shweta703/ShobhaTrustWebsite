import { motion } from 'framer-motion';
import {
  HiOutlineShieldCheck,
  HiOutlineSearchCircle,
  HiOutlineHeart,
  HiOutlineBookOpen,
  HiOutlineUserGroup,
  HiOutlineNewspaper,
} from 'react-icons/hi';
import { blogPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import SectionHeader from '../../ui/SectionHeader';
import './BlogCategories.css';

const { categories } = blogPage;

const iconMap = {
  prevention: HiOutlineShieldCheck,
  detection: HiOutlineSearchCircle,
  wellness: HiOutlineHeart,
  medical: HiOutlineBookOpen,
  stories: HiOutlineUserGroup,
  community: HiOutlineNewspaper,
};

export default function BlogCategories() {
  return (
    <section className="section section--alt blog-categories" id="blog-categories">
      <div className="container">
        <SectionHeader label={categories.label} title={categories.title} align="center" />

        <ul className="blog-categories__grid">
          {categories.items.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <AnimateIn key={item.title} delay={i * 0.05} as="li">
                <motion.article
                  className="blog-categories__card"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <span className="blog-categories__icon" aria-hidden="true">
                    <Icon size={24} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="blog-categories__coming">Articles coming soon</span>
                </motion.article>
              </AnimateIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
