import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const titles = {
  '/': 'Shobha Trust — Preventing Cancer. Protecting Lives.',
  '/about': 'About Shobha Trust — Preventing Cancer. Protecting Lives.',
  '/programs': 'Events & Awareness Programs — Shobha Trust',
  '/blog': 'Cancer Awareness & Prevention Blog — Shobha Trust',
  '/donate': 'Donate Today. Prevent Cancer Tomorrow. — Shobha Trust',
  '/volunteer': 'Become a Volunteer — Shobha Trust',
  '/contact': 'Contact Shobha Trust — Preventing Cancer. Protecting Lives.',
};

export default function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titles[pathname] || 'Shobha Trust — Preventing Cancer. Protecting Lives.';
  }, [pathname]);

  return null;
}
