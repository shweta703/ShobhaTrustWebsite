import { homePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import Button from '../../ui/Button';
import './HomeAboutIntro.css';

const { aboutIntro } = homePage;

export default function HomeAboutIntro() {
  return (
    <section className="section home-about-intro">
      <div className="container home-about-intro__grid">
        <div className="home-about-intro__media">
          <AnimateIn direction="left">
            <div className="home-about-intro__image-wrap home-about-intro__image-wrap--logo">
              <img src={aboutIntro.image} alt={aboutIntro.imageAlt} loading="lazy" />
            </div>
          </AnimateIn>
        </div>

        <div className="home-about-intro__content">
          <AnimateIn>
            <span className="home-about-intro__label">{aboutIntro.label}</span>
            <h2 className="home-about-intro__title">{aboutIntro.title}</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            {aboutIntro.paragraphs.map((p, i) => (
              <p key={i} className="home-about-intro__text">
                {p}
              </p>
            ))}
            <Button to={aboutIntro.cta.to} variant="primary" size="md">
              {aboutIntro.cta.label}
            </Button>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
