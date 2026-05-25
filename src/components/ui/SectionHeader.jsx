import AnimateIn from './AnimateIn';
import './SectionHeader.css';

export default function SectionHeader({ label, title, description, align = 'center', light = false }) {
  return (
    <div className={`section-header section-header--${align} ${light ? 'section-header--light' : ''}`}>
      {label && (
        <AnimateIn delay={0}>
          <span className="section-header__label">{label}</span>
        </AnimateIn>
      )}
      <AnimateIn delay={0.1}>
        <h2 className="section-header__title">{title}</h2>
      </AnimateIn>
      {description && (
        <AnimateIn delay={0.2}>
          <p className="section-header__desc">{description}</p>
        </AnimateIn>
      )}
    </div>
  );
}
