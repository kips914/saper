const CACHE_NAME = 'saper-v2';
const ASSETS = [
  '/saper/',
  '/saper/index.html',
  '/saper/manifest.json',
  '/saper/icon-192.png',
  '/saper/icon-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
