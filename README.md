# kevinbarcenasmtz.github.io

Personal portfolio for Kevin Barcenas-Martinez.

This site is intentionally static: one HTML file, one CSS file, and root-level assets served directly by GitHub Pages.

## Structure

- `index.html` - portfolio content and metadata
- `style.css` - typography, layout, responsive styles, and dark-mode colors
- `404.html` - simple fallback page
- `sitemap.xml` and `robots.txt` - crawler metadata
- `*.png` and `*.pdf` - favicons and linked documents

## Local Preview

Install the development tools:

```sh
npm install
```

Serve the directory with any static file server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Checks

Validate and format-check the static files:

```sh
npm run check
```

Format the static files:

```sh
npm run format
```

## Deployment

This repository is a GitHub user-pages repository. GitHub Pages should serve from:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

No build step is required.
