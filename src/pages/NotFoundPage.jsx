import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1>Page not found</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <div className="not-found__actions">
          <Button to="/" variant="primary" size="lg">
            Back to Home
          </Button>
          <Link to="/contact" className="not-found__link">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
