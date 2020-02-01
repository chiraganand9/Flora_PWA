const staticFlora = "flora-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/flora.png",
  "/images/flower1.jpg",
  "/images/flower2.jpg",
  "/images/flower3.jpg",
  "/images/flower4.jpg",
  "/images/flower5.jpg",
  "/images/flower6.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticFlora).then(cache => {
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
