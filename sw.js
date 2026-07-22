const CACHE_NAME = 'flash-waflash-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './juego.swf',
  'https://cdn.jsdelivr.net/gh/waflash/waflash-core@master/waflash-player.min.js'
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
