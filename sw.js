const CACHE = 'personal-manager-v6';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/icon-512.png',
  '/images/icon-maskable-512.png',
  '/images/icon-192.png',
  '/images/icon-180.png',
  '/images/icon-32.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
