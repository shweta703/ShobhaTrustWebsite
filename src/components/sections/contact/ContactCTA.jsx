import AnimateIn from '../../ui/AnimateIn';
import Button from '../../ui/Button';
import { contactPage } from '../../../data/content';
import './ContactCTA.css';

const { cta } = contactPage;

export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact-cta">
      <div className="contact-cta__bg" aria-hidden="true" />
      <div className="container contact-cta__inner">
        <AnimateIn>
          <h2>{cta.title}</h2>
          <p className="contact-cta__desc">{cta.description}</p>
          <p className="contact-cta__tagline">{cta.tagline}</p>
          <div className="contact-cta__actions">
            <Button to={cta.primaryTo} variant="secondary" size="lg">
              {cta.primaryLabel}
            </Button>
            <Button to={cta.secondaryTo} variant="white" size="lg">
              {cta.secondaryLabel}
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
