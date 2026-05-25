import { HiCheckCircle } from 'react-icons/hi';
import { homePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import Button from '../../ui/Button';
import './HomeProjectUdharam.css';

const { projectUdharam } = homePage;

export default function HomeProjectUdharam() {
  return (
    <section className="section home-udharam">
      <div className="container home-udharam__grid">
        <AnimateIn direction="left">
          <div className="home-udharam__image-wrap">
            <img src={projectUdharam.image} alt={projectUdharam.imageAlt} loading="lazy" />
            <span className="home-udharam__tag">{projectUdharam.label}</span>
          </div>
        </AnimateIn>

        <div className="home-udharam__content">
          <AnimateIn>
            <span className="home-udharam__label">{projectUdharam.label}</span>
            <h2>{projectUdharam.title}</h2>
            <p className="home-udharam__desc">{projectUdharam.description}</p>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <p className="home-udharam__subtitle">{projectUdharam.subtitle}</p>
            <ul className="home-udharam__list">
              {projectUdharam.initiatives.map((item) => (
                <li key={item}>
                  <HiCheckCircle size={20} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Button to={projectUdharam.cta.to} variant="secondary" size="md">
              {projectUdharam.cta.label}
            </Button>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
