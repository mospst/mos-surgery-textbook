#!/usr/bin/env node
// build.js — compile JSX at build time and emit the deployable index.html.
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const ESBUILD_VERSION = '0.28.0';
const SOURCE_FILES = [
  'tweaks-panel.jsx',
  'data.jsx',
  'components.jsx',
  'figures.jsx',
  'figures-vascular.jsx',
  'figures-hpb.jsx',
  'figures-colorectal.jsx',
  'figures-uppergi.jsx',
  'figures-endocrine.jsx',
  'figures-trauma.jsx',
  'figures-transplant.jsx',
  'figures-thoracic.jsx',
  'figures-hernia.jsx',
  'figures-skin.jsx',
  'figures-mis.jsx',
  'views.jsx',
  'app.jsx',
];

const REACT_VERSION = '18.3.1';
// React + ReactDOM are vendored locally (vendor/) and inlined into index.html so
// the app loads with ZERO network requests — required for offline use on iPad.
const REACT_VENDOR = [
  'vendor/react.production.min.js',
  'vendor/react-dom.production.min.js',
];

// Same-origin assets the service worker pre-caches so the installed PWA opens
// fully offline. index.html already contains React + all clinical data inline.
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

function readSource(file) {
  const absolute = path.join(ROOT, file);
  if (!fs.existsSync(absolute)) throw new Error(`Missing source file: ${file}`);
  return `\n// ${file}\n${fs.readFileSync(absolute, 'utf8').trimEnd()}\n`;
}

function escapeInlineScript(js) {
  // Prevent clinical text containing a closing script token from ending the tag.
  return js.replace(/<\/script/gi, '<\\/script');
}

function compileJsx(source) {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'surgery-build-'));
  const input = path.join(tempDir, 'app.jsx');
  const output = path.join(tempDir, 'app.js');

  try {
    fs.writeFileSync(input, source);
    execFileSync(
      'npx',
      [
        '--yes',
        `esbuild@${ESBUILD_VERSION}`,
        input,
        '--outfile=' + output,
        '--loader:.jsx=jsx',
        '--jsx-factory=React.createElement',
        '--jsx-fragment=React.Fragment',
        '--format=iife',
        '--target=es2020',
        '--charset=utf8',
        '--minify',
        '--legal-comments=none',
      ],
      { cwd: ROOT, stdio: 'pipe' }
    );
    return fs.readFileSync(output, 'utf8');
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function readReactVendor() {
  return REACT_VENDOR
    .map(rel => {
      const absolute = path.join(ROOT, rel);
      if (!fs.existsSync(absolute)) {
        throw new Error(`Missing vendored React file: ${rel} (run the vendor download first)`);
      }
      const code = fs.readFileSync(absolute, 'utf8').trimEnd();
      return `  <script>\n${escapeInlineScript(code)}\n  </script>`;
    })
    .join('\n');
}

function buildHtml(compiledJs) {
  const css = fs.readFileSync(path.join(ROOT, 'styles.css'), 'utf8').trimEnd();
  const reactScripts = readReactVendor();

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <meta name="build-mode" content="precompiled-jsx" />
  <title>Surgical Knowledge — Compendium</title>
  <meta name="theme-color" content="#0d5c63" />
  <link rel="manifest" href="manifest.webmanifest" />
  <link rel="icon" type="image/png" sizes="192x192" href="icons/icon-192.png" />
  <link rel="apple-touch-icon" href="apple-touch-icon.png" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="Surgery" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,300;1,6..72,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;1,8..60,400&family=Crimson+Pro:ital,wght@0,400;0,500;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <style>
${css}
  </style>
</head>
<body>
  <div id="root"></div>

${reactScripts}
  <script>
${escapeInlineScript(compiledJs)}
  </script>
  <script>
    // Register the service worker for offline use (relative path keeps it working
    // under the GitHub Pages /repo/ subpath as well as a custom domain).
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function (err) {
          console.warn('Service worker registration failed:', err);
        });
      });
    }
  </script>
</body>
</html>
`;
}

function buildServiceWorker(version) {
  const assets = JSON.stringify(PRECACHE_ASSETS, null, 2);
  return `// sw.js — generated by build.js. Do not edit by hand.
// Cache name is stamped with a content hash so a new build replaces the old cache.
'use strict';

const CACHE = 'surgery-${version}';
const ASSETS = ${assets};

// Pre-cache the app shell on install.
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

// Drop old caches when a new version activates.
self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

// Same-origin GET: cache-first, falling back to network (and caching the result).
// Cross-origin requests (fonts, external resource links) always go to the network.
self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;

  var sameOrigin = new URL(req.url).origin === self.location.origin;
  if (!sameOrigin) return; // let the browser handle fonts / external links

  event.respondWith(
    caches.match(req).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (cache) { cache.put(req, copy); });
        }
        return res;
      }).catch(function () {
        // Offline and not cached: fall back to the app shell for navigations.
        if (req.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
`;
}

function main() {
  const missing = SOURCE_FILES.filter(file => !fs.existsSync(path.join(ROOT, file)));
  if (missing.length) throw new Error(`Missing source files: ${missing.join(', ')}`);

  const source = SOURCE_FILES.map(readSource).join('\n');
  const compiled = compileJsx(source);
  const html = buildHtml(compiled);
  fs.writeFileSync(path.join(ROOT, 'index.html'), html);

  // Stamp the service worker cache name with a hash of the built HTML so each
  // new build invalidates the old offline cache automatically.
  const version = crypto.createHash('sha256').update(html).digest('hex').slice(0, 12);
  fs.writeFileSync(path.join(ROOT, 'sw.js'), buildServiceWorker(version));

  // .nojekyll tells GitHub Pages to serve files as-is (no Jekyll processing).
  fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');

  const mb = (Buffer.byteLength(html) / 1024 / 1024).toFixed(2);
  console.log(`Built precompiled index.html (${mb} MB)`);
  console.log(`Inlined React ${REACT_VERSION} from vendor/ — no runtime CDN dependency.`);
  console.log(`Wrote service worker sw.js (cache surgery-${version}).`);
  console.log(`JSX compiled with esbuild ${ESBUILD_VERSION}.`);
}

main();
