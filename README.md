# kevinbarcenasmtz.github.io

Personal site built with [Eleventy](https://www.11ty.dev/), deployed to GitHub Pages via GitHub Actions.

---

**Obsidian + Enveloppe** handles the writing workflow. Posts are written in Obsidian as normal notes, and the Enveloppe plugin pushes them to `src/feed/` as markdown files on demand.

**GitHub Actions** runs `eleventy` on every push to `main` and deploys the `_site/` output to the `gh-pages` branch. GitHub Pages serves from that branch. The source files (templates, markdown, CSS) stay on `main`; the build output never touches `main`.

---

## Structure

`.eleventy.js` at the repo root is the Eleventy config. `_site/` is the build output directory (gitignored).

---

## How pages work

Every page sets a `layout` in its frontmatter:

```yaml
---
layout: base.njk
title: Feed
---
```

`base.njk` provides the full HTML shell with the sidebar nav. It reads from `src/_data/site.js` (via the `site` variable) for the site name, contact links, and URL. The active nav item is highlighted by comparing `page.url` against each nav link.

`post.njk` sets its own `layout: base.njk` and wraps content in an `<article>` with a header showing the title and date. Individual posts and project pages use `layout: post.njk`.

---

## Adding a feed post (normal workflow)

1. Write a note in Obsidian with this frontmatter at the top:
   ```yaml
   ---
   title: Your post title
   date: 2026-01-15
   upload: src/feed
   description: One sentence summary (optional, used in og:description)
   ---
   ```
2. In Obsidian, open the Enveloppe plugin and publish the note.
3. Enveloppe commits the markdown file to `src/feed/` on the `main` branch.
4. GitHub Actions picks up the push, builds the site, and deploys.

The feed index (`/feed/`) is generated automatically, it reads the `posts` collection (all `.md` files in `src/feed/`) sorted newest-first.

---

## Obsidian templates

The Feed Post template in Obsidian should stay minimal:

```md
---
share: true
upload: src/feed
title: <% tp.file.title %>
date: <% tp.date.now("YYYY-MM-DD") %>
description: 
---
```

Add a second Templater template for project notes, for example `Project.md`:

```md
---
share: true
upload: src/projects
layout: post.njk
title: <% tp.file.title %>
date: <% tp.date.now("YYYY-MM-DD") %>
status: 
tech: 
description: 
# links:
#   github: https://github.com/...
#   live: https://...
#   other:
#     url: https://...
#     label: Link text
---

## Overview

## What I Built

## Notes
```

Enveloppe is configured to read the `upload` frontmatter key for the target repository folder. Feed posts use `upload: src/feed`; project notes use `upload: src/projects`. If `upload` is omitted, Enveloppe falls back to `src/feed`.

Add a third template for photo gallery entries, for example `Photo.md`:

```md
---
share: true
upload: src/photos
permalink: false
title: <% tp.file.title %>
date: <% tp.date.now("YYYY-MM-DD") %>
image: /photos/img/
alt: 
description: 
---

Notes:
```

Templater is configured for the portfolio workspace in Obsidian:

| Obsidian folder | Template |
|---|---|
| `Projects/Portfolio/Feed` | `Feed Post.md` |
| `Projects/Portfolio/Projects` | `Project.md` |
| `Projects/Portfolio/Photos` | `Photo.md` |

Each portfolio folder also has an `about this folder.md` note with the local workflow. Those notes use `share: false`, so Enveloppe ignores them.

---

## Adding a project

Create a new note in Obsidian under `Projects/Portfolio/Projects`, then publish it with Enveloppe. Enveloppe writes the markdown file to `src/projects/`. The filename becomes the URL slug (`src/projects/my-project.md` → `/projects/my-project/`).

Frontmatter fields:

```yaml
---
layout: post.njk
title: Project Name
date: 2025-06-01           # used for sort order on the archive page
status: actively maintained # optional — shown next to the year
tech: TypeScript, Postgres  # optional — shown in the meta line
description: One sentence shown on the archive index.
links:
  github: https://github.com/...   # optional
  live: https://...                # optional
  other:                           # optional third link
    url: https://...
    label: Link text
---

Full project write-up in markdown goes here.
```

---

## Adding photos

1. Drop image files into `src/photos/img/`.
2. In Obsidian, create a note in `Projects/Portfolio/Photos` using the `Photo.md` template.
3. Fill in the `image` frontmatter with the public path, for example:
   ```yaml
   image: /photos/img/your-photo.jpg
   alt: Short image description
   ```
4. Publish the note with Enveloppe.
5. Push. The GitHub Action rebuilds and deploys.

The photos index (`/photos/`) is generated automatically — it reads the `photos` collection (all `.md` files in `src/photos/`) sorted newest-first. Photo notes use `permalink: false`, so they populate the gallery without creating individual public pages.

### How photo protection works

Photos are never placed in `<img>` tags. Instead, `src/js/photos.js` reads the `data-src` attribute on each `.photo-slot` div, draws the image onto an HTML `<canvas>` element, and discards the original `Image` object. A CSS `::after` overlay sits on top of each slot.

The result:
- Right-click → Save Image is blocked on canvas elements (context menu is preventDefault'd)
- Drag-to-desktop is blocked
- The CSS overlay intercepts pointer events, making drag harder
- `wget` / `curl` on the page URL gets HTML with no `<img src>` to follow

This isn't cryptographically unbreakable — someone with DevTools can find the URL — but it stops casual downloading and most automated scrapers.

---

## Local development

```sh
npm install
npm run serve     # builds and watches at http://localhost:8080
```

To just build once:

```sh
npm run build     # outputs to _site/
```

---

## Deployment

On every push to `main`, the GitHub Action at `.github/workflows/deploy.yml`:

1. Installs dependencies (`npm ci`)
2. Runs `npm run build` (Eleventy → `_site/`)
3. Pushes `_site/` to the `gh-pages` branch using `peaceiris/actions-gh-pages`

**One-time GitHub setup:** go to repo Settings → Pages → set source to `gh-pages` branch, `/ (root)`. After that, every push to `main` auto-deploys.

---

## Enveloppe plugin setup

In the Enveloppe plugin settings in Obsidian:

| Setting | Value |
|---|---|
| GitHub username | `kevinbarcenasmtz` |
| Repository | `kevinbarcenasmtz.github.io` |
| Branch | `main` |
| Default upload folder | `src/feed` |
| File format | Keep markdown |

Notes without the required `title` and `date` frontmatter fields will build but sort incorrectly on the feed page. Add a template in Obsidian to avoid this.

---

## Editing global site data

Name, bio links, and contact info are in one place: `src/_data/site.js`. Changing a value there updates every page that references it (the nav, home page contact links, og:meta tags).
