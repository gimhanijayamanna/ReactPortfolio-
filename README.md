# ReactPortfolio

This repository contains a personal portfolio web application built with React and Vite. The site showcases projects, skills, achievements, and provides a contact form with EmailJS integration. It is styled using SCSS with a comprehensive responsive breakpoint system and animated with Framer Motion.

## Table of contents
- Project overview
- Tech stack
- Project structure
- Local development
- Build & deploy
- How to update CV download buttons
- EmailJS (contact form) setup
- Styling and responsive system
- Contributing
- License

## Project overview

This portfolio is a single-page React application that includes the following sections:
- Hero (intro with download CV buttons)
- Projects
- Skills (technical & soft skills)
- Achievements & extracurriculars
- Contact (form with EmailJS integration)

The site includes responsive SCSS mixins for many breakpoints (mobile-xs → desktop-4k), accessible UI elements, and subtle animations using Framer Motion.

## Tech stack

- React 18
- Vite (dev server + build)
- SCSS / Sass modules
- Framer Motion (animations)
- EmailJS (send form messages from client)

## Project structure (important files)

- `src/components/hero/` — hero section and CV download buttons
- `src/components/projects/` — project cards and gallery
- `src/components/skills/` — technical and soft skills layout and pills
- `src/components/achievements/` — competitions and extracurricular cards
- `src/components/contact/` — contact form and phone SVG background
- `src/app.scss` — global styles, breakpoint mixins and variables
- `src/main.jsx` — app entry (where React mounts the app)