const cacheLabel = "reolism-quotes-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/discord_image.png"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheLabel).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
