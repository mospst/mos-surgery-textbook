# Surgical Knowledge — Compendium

An offline-capable surgical reference covering 158 diseases across general-surgery
subspecialties, with classifications, management, scoring tools, and an image quiz.

**Live site:** https://mospst.github.io/mos-surgery-textbook/

## Use it offline (iPad / iPhone)

1. Open the live site in **Safari** and let it load once while online.
2. Tap **Share → Add to Home Screen**.
3. Launch from the home-screen icon — it now runs full-screen and works with no wifi.

> Note: the app's own content is fully offline. The external **"Open anatomy images"**
> and **"Open operation video library"** links point to other websites, so those still
> need an internet connection.

## How it's built

It's a single self-contained `index.html`: React and all clinical data are inlined,
and a service worker (`sw.js`) caches the app shell for offline use. No runtime CDN.

```sh
node combine.js   # merge tmp_*.js data files -> data.jsx
node build.js     # compile JSX -> index.html, regenerate sw.js + icons
```

`build.js` re-stamps the service-worker cache name on every build, so installed
devices pick up new content the next time they're online.

## Hosting

Served from GitHub Pages (`main` branch, root). `.nojekyll` keeps Pages from
processing the files.
