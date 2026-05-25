import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { footer, contact, routes } from '../../data/content';
import { logo } from '../../constants/brand';
import './Footer.css';

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          <div className="footer__brand">
            <Link to={routes.home} className="footer__logo">
              <img src={logo} alt="Shobha Trust" className="footer__logo-img" />
            </Link>
            <p className="footer__tagline">{footer.tagline}</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {footer.quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <ul className="footer__contact">
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
              </li>
              <li>{contact.address}</li>
            </ul>
          </div>

          <div className="footer__connect">
            <h4 className="footer__heading">Stay Connected</h4>
            <p className="footer__connect-text">Follow Shobha Trust for updates on programs and impact.</p>
            <div className="footer__social">
              {footer.social.map((item) => {
                const Icon = socialIcons[item.icon];
                return (
                  <a
                    key={item.icon}
                    href={item.href}
                    className="footer__social-link"
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            &copy; 2026 Shobha Trust. All rights reserved. Website by{' '}
            <span className="footer__asteya">Asteya Services Pvt Ltd</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
