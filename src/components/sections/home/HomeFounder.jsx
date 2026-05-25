import { homePage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import Button from '../../ui/Button';
import './HomeFounder.css';

const { founder } = homePage;

export default function HomeFounder() {
  return (
    <section className="section section--alt home-founder">
      <div className="container home-founder__grid">
        <AnimateIn direction="left">
          <div className="home-founder__image-wrap">
            <img src={founder.image} alt={founder.imageAlt} loading="lazy" />
          </div>
        </AnimateIn>

        <div className="home-founder__content">
          <AnimateIn>
            <span className="home-founder__label">{founder.label}</span>
            <h2>{founder.title}</h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <blockquote className="home-founder__quote">
              <p>&ldquo;{founder.quote}&rdquo;</p>
              <footer>
                <cite>{founder.name}</cite>
                <span>{founder.role}</span>
              </footer>
            </blockquote>
            <Button to={founder.cta.to} variant="outline" size="md">
              {founder.cta.label}
            </Button>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
