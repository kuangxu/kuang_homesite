# Kuang Xu — Academic Homepage

A lightweight, multi-page static website for Kuang Xu, Associate Professor at Stanford Graduate School of Business.

## Architecture

The published site uses plain HTML, CSS, and a small vanilla JavaScript file. There is no client-side framework, component runtime, or SPA router.

- `index.html` — home and biography
- `highlights.html` — selected projects
- `research.html` — publications and talks
- `team.html` — research team and teaching
- `advisory.html` — leadership workshops and strategic advisory
- `styles.css` — site layout and content styles
- `static.css` — navigation, page transitions, and responsive overrides
- `script.js` — mobile navigation, reveal effects, and the homepage pixel field
- `public/` — images, domain configuration, robots file, and 404 page

Vite is used only as a static build and local preview tool. It does not provide a frontend runtime.

## Development

```sh
npm install
npm run dev
```

The development server starts at `http://localhost:8080/`.

## Production build

```sh
npm run build
npm run preview
```

The build emits the five HTML pages and shared static assets to `dist/`. Pushes to `main` are deployed to GitHub Pages by the existing workflow.
