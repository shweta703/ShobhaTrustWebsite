import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AnimateIn({
  children,
  className = '',
  delay = 0,
  as = 'div',
  direction = 'up',
}) {
  const Component = motion[as] || motion.div;

  const offset = direction === 'up' ? 32 : direction === 'left' ? -32 : 32;
  const initial =
    direction === 'left'
      ? { opacity: 0, x: offset }
      : direction === 'right'
        ? { opacity: 0, x: 32 }
        : { opacity: 0, y: offset };

  const animate =
    direction === 'left' || direction === 'right'
      ? { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } }
      : variants.visible(delay);

  return (
    <Component className={className} initial={initial} whileInView={animate} viewport={{ once: true, margin: '-60px' }}>
      {children}
    </Component>
  );
}
