const CACHE = "pistonrodeo-v1";
const ASSETS = [
  "/Piston-Rodeo/",
  "/Piston-Rodeo/index.html",
  "/Piston-Rodeo/manifest.json",
  "/Piston-Rodeo/icon-192.png",
  "/Piston-Rodeo/icon-512.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
