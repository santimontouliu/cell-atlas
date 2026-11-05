# Cell Atlas — 3D cell explorer

Static HTML, CSS and JavaScript. No server, API keys, or build step required.

## Publish on GitHub Pages
1. Create a GitHub repository (for example, cell-atlas).
2. Upload this folder's contents into the repository root. Keep index.html at the root and keep the vendor folder intact. Upload the extracted files, not the ZIP itself.
3. Open Settings → Pages.
4. Select Deploy from a branch, main, and / (root), then Save.
5. GitHub Pages displays the published URL when deployment finishes.

GitHub guide: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

The original Sites owner's access controls do not carry over to GitHub Pages. A public Pages deployment is accessible to anyone.

## Local preview
Run `python3 -m http.server 8000` in this directory and open http://localhost:8000. JavaScript modules need an HTTP server; opening index.html directly from the filesystem may not work.

## Requirements and attribution
A modern browser with WebGL and JavaScript module/import-map support. Three.js 0.170.0 and OrbitControls are included in vendor; their MIT license is in vendor/LICENSE-three.txt. Typography loads from Google Fonts with local fallback fonts.

This is a simplified educational model, not a quantitative biochemical or molecular dynamics simulation.

## Scale update
Replace the existing repository files with this folder's contents, then commit and push to your existing Pages branch. Keep the new `scale-model.js` beside `app.js` and `index.html`. Your Pages configuration does not need to change.

New: realistic-scale toggle, zoom-aware scale bar, representative size facts, and close-up enlargement relative to the default whole-cell reference. Whole-cell width is 20 µm. Small structures remain selectable via labels. Close-up molecular details, positions, counts, and timings remain schematic. Size references and assumptions are available under About this model.

Suggested commit message: Add representative cell scale and close-up magnification
