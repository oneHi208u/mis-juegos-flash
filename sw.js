const CACHE_NAME = 'flash-waflash-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './juego.swf',
  'https://www.htmlgames.com/embed/waflash/waflash.js'
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
