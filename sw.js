const CACHE = "fullform-cache-v1";
const assets = [
  "/FullForm_Finder.web/",
  "/FullForm_Finder.web/index.html",
  "/FullForm_Finder.web/style.css",
  "/FullForm_Finder.web/app.js",
  "/FullForm_Finder.web/data.js",
  "/FullForm_Finder.web/imgs/image.png",
  "/FullForm_Finder.web/imgs/image.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(assets))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
