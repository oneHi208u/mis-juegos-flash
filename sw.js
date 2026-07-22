const CACHE_NAME = 'flash-offline-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './juego.swf',
  'https://unpkg.com/@ruffle-rs/ruffle'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
