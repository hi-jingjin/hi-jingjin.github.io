# Jing Jin — personal research website

A concise academic homepage built with HTML and CSS. No installation, JavaScript, or build step is required.

## Preview

Open `index.html` in a browser. For a local server, run `python3 -m http.server 8000` inside this folder, then visit `http://localhost:8000`.

## GitHub Pages

This site is published from the `main` branch of the public repository
`jingjin412/jingjin412.github.io` and is available at
<https://jingjin412.github.io/>.

Official guide: https://docs.github.com/en/pages/quickstart

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Energetic landing page and short introduction |
| `about.html` | Biography, publications, and academic experience |
| `dance.html` | Dance updates, social links, and collaboration invitations |
| `styles.css` | Colors, typography, desktop and mobile layouts |
| `assets/Jing_Jin_CV.pdf` | Downloadable CV |
| `.nojekyll` | Serves the website as plain static files |

## Edit later

- Update your content and links in `index.html`.
- Adjust the palette with the variables at the top of `styles.css`.
- Replace `assets/Jing_Jin_CV.pdf` when your CV changes, preserving its filename.
- Save your photograph as `assets/portrait.jpg`, and replace `<div class="portrait">...</div>` with `<img class="portrait" src="assets/portrait.jpg" alt="Jing Jin">`. The monogram is temporary; no invented portrait is used.

## Content notes

The CV dated October 1, 2026 is the main source for this draft. Under-review papers remain marked under review. No invented acceptance or private paper link is included.

The published RAG paper uses the author order on ACL Anthology. The legal paper uses the published title **Style Translation**, which differs from **Style Optimization** in the CV, and the published coauthor order (Szu-Ju Chen, Jing Jin, Sheng-Lun Wei, Chien-Hung Chen, Hsin-Hsi Chen).

## Design

The structure is inspired by https://mireshghallah.github.io/: name and links at the top, a portrait beside the biography, followed by publications and experience. The page uses a pale lavender header, purple links, small orange accents, and a continuous unboxed reading column. The main text stays concise. Fonts use browser/system fallbacks. No external packages, font services, analytics, or paid services are needed.

HTML anchors, local assets, archive integrity, and principal text color contrast have been checked. Browser layout QA remains unavailable in the current execution environment.
