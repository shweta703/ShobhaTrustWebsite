import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Button.css';

export default function Button({
  children,
  href,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  const motionProps = {
    whileHover: { scale: 1.03, y: -2 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 20 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} style={{ display: 'inline-flex' }}>
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={classes} onClick={onClick} {...motionProps} {...props}>
      {children}
    </motion.button>
  );
}
