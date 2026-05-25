import { programsPage } from '../../../data/content';
import AnimateIn from '../../ui/AnimateIn';
import Button from '../../ui/Button';
import './ProgramsPageIntro.css';

const { intro } = programsPage;

export default function ProgramsPageIntro() {
  return (
    <section className="programs-intro section" id="programs-intro" aria-labelledby="programs-intro-heading">
      <div className="programs-intro__glow" aria-hidden="true" />
      <div className="container programs-intro__inner">
        <AnimateIn>
          <h2 className="programs-intro__tagline" id="programs-intro-heading">
            {intro.tagline}
          </h2>
        </AnimateIn>

        <div className="programs-intro__prose">
          {intro.paragraphs.map((p, i) => (
            <AnimateIn key={i} delay={0.06 + i * 0.06} as="p" className="programs-intro__p">
              {p}
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={0.15}>
          <p className="programs-intro__closing">{intro.closing}</p>
        </AnimateIn>

        <AnimateIn delay={0.22}>
          <div className="programs-intro__ctas">
            <Button to={intro.primaryCta.to} variant="primary" size="lg">
              {intro.primaryCta.label}
            </Button>
            <Button to={intro.secondaryCta.to} variant="outline" size="lg">
              {intro.secondaryCta.label}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
