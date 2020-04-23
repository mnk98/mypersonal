const staticSelfChecker = "covid-19-self-checker-v1";
const assets = [
  "/",
  "/index.html",
  "style.css",
  "app.js",
  "/images/download.jpg",
  "/images/logo.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSelfChecker).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
