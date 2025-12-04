const CACHE = 'pwa-v1';
const assets = [
  'index.html','products.html','cart.html','order.html',
  'about.html','contact.html','assets/css/style.css','assets/js/main.js'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(assets)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
