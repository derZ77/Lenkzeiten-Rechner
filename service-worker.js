
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('dienstzeiten-cache-v1').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './service-worker.js',
        'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
