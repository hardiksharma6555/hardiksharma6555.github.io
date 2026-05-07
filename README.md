# hardiksharma6555.github.io

Personal portfolio site for **Hardik Sharma** — Ph.D. researcher in Computer Vision, Deepfake Detection, and Multimodal Forensics.

Live at: https://hardiksharma6555.github.io/

## Stack

- Plain static site (no build step)
- React 18 + Babel-standalone served from CDN
- Single-file `index.html` mounts a React app from `src/portfolio.jsx`
- Content lives in `src/data.js` — edit this to update the site

## Layout

```
index.html              # GitHub Pages entry point
.nojekyll               # disables Jekyll so all files (incl. _underscore) are served
src/
  portfolio.jsx         # React components
  data.js               # ALL site content — edit here to update
  styles.css            # styling
tweaks-panel.jsx        # in-page theme/accent tweaks panel
assets/
  Hardik_Sharma_Resume.pdf
  hardik_hero.png       # hero portrait
  hardik.png            # alt portrait
  sample_fake.jpg       # demo fallback
uploads/
  hardik_pict.png       # hero fallback
  sample_image.jpg      # demo image
```

## To update content

Edit `src/data.js` — name, links, experience, publications, projects, etc. all live there. Commit, push, GitHub Pages redeploys in ~30 seconds.

To replace the resume PDF, just overwrite `assets/Hardik_Sharma_Resume.pdf` with the new file (keep the same filename).
