# Shobha Trust Website

A modern, premium React website for [Shobha Trust](https://shobhatrust.org/) — Preventive Oncology NGO focused on early cancer prevention, awareness, and screening across Bengaluru, Karnataka, and rural India.

**Tagline:** *Every Life Deserves a Chance*

## Tech Stack

- React 19 + Vite
- React Router (multi-page)
- Framer Motion (animations)
- React Icons
- CSS custom properties (brand design tokens)

## Brand Colors

| Token | Hex | Usage |
|-------|-----|--------|
| Primary (lavender) | `#A678B5` | Buttons, accents, highlights |
| Secondary (navy) | `#0D2137` | Text, footer, overlays |
| Background | `#FAF9FC` | Page background |

Logo: `src/assets/ShobhaTrust Logo.png`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder. SPA routing is configured via `public/_redirects` (Netlify) — add equivalent rewrites for other hosts.

## Pages

| Route | Content |
|-------|---------|
| `/` | Hero background carousel, credentials, about, focus areas, Project Udharam, impact, founder, CTA |
| `/about` | Full story, mission/vision, founder, team |
| `/programs` | Focus areas, all programs, deep dives |
| `/impact` | Stats, gallery, testimonials |
| `/donate` | Donation tiers + form (80G/12A/CSR) |
| `/volunteer` | Roles + signup form |
| `/contact` | Form, phone, map |

## Project Structure

```
src/
├── assets/           # Logo, hero images
├── constants/brand.js
├── pages/            # Route pages
├── components/
│   ├── layout/       # Navbar, Footer, Layout
│   ├── sections/     # Reusable sections
│   │   └── home/     # Home-only sections
│   └── ui/
├── data/content.js   # All copy & carousel URLs
└── index.css         # Design tokens
```

## Customization

- **Content**: `src/data/content.js` → `homePage` object
- **Carousel images**: `homePage.hero.carousel` + `src/assets/hero.png`
- **Colors**: CSS variables in `src/index.css`
- **Logo**: Replace `src/assets/ShobhaTrust Logo.png`

## Features

- Full-bleed hero background image carousel
- Official Shobha Trust logo in navbar & footer
- Purple/navy brand theme matching logo
- Sticky transparent navbar on home hero
- 7 routed pages + 404
- Framer Motion animations
- Animated impact counters
- Gallery lightbox & testimonial carousel
- SEO meta tags & per-page titles
- Mobile-first responsive design
