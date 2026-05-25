import AnimateIn from './AnimateIn';
import Button from './Button';
import './PageCTA.css';

export default function PageCTA({
  id,
  title,
  description,
  primaryLabel,
  primaryTo,
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="page-cta" id={id}>
      <div className="container">
        <AnimateIn>
          <div className="page-cta__inner">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="page-cta__actions">
              <Button to={primaryTo} variant="secondary" size="lg">
                {primaryLabel}
              </Button>
              {secondaryLabel && secondaryTo && (
                <Button to={secondaryTo} variant="white" size="lg">
                  {secondaryLabel}
                </Button>
              )}
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
