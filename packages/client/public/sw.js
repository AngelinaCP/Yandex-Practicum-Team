const CACHE_NAME = 'silent-hill-v1'

const URLS = [
  '/',
  '/default_avatar.svg',
  '/fonts/horror.ttf',
  '/fonts/SLNTHLC.ttf',
  '/fonts/SLNTHLE.ttf',
  '/fonts/SLNTHLN.ttf',
  '/game_backgrounds/city/layers/layer1.png',
  '/game_backgrounds/city/layers/layer2.png',
  '/game_backgrounds/city/layers/layer3.png',
  '/game_backgrounds/city/layers/layer4.png',
  '/game_backgrounds/city/layers/layer5.png',
  '/game_backgrounds/city/thumbnail.png',
  '/game_backgrounds/country/layers/layer1.png',
  '/game_backgrounds/country/layers/layer2.png',
  '/game_backgrounds/country/layers/layer3.png',
  '/game_backgrounds/country/thumbnail.png',
  '/game_backgrounds/forest/layers/layer1.png',
  '/game_backgrounds/forest/layers/layer2.png',
  '/game_backgrounds/forest/layers/layer3.png',
  '/game_backgrounds/forest/layers/layer4.png',
  '/game_backgrounds/forest/layers/layer5.png',
  '/game_backgrounds/forest/thumbnail.png',
  '/game_backgrounds/grunge/layers/layer1.png',
  '/game_backgrounds/grunge/layers/layer2.png',
  '/game_backgrounds/grunge/thumbnail.png',
  '/game_backgrounds/nightForest/layers/layer1.png',
  '/game_backgrounds/nightForest/layers/layer2.png',
  '/game_backgrounds/nightForest/layers/layer3.png',
  '/game_backgrounds/nightForest/layers/layer4.png',
  '/game_backgrounds/nightForest/layers/layer5.png',
  '/game_backgrounds/nightForest/layers/layer6.png',
  '/game_backgrounds/nightForest/thumbnail.png',
  '/game_characters/archer/thumbnail.png',
  '/game_characters/swordsman/thumbnail.png',
  '/game_characters/wizard/sprite.png',
  '/game_characters/wizard/thumbnail.png',
  '/game_obstacles/obstacle.png',
  '/game_powerups/heart.png',
  '/images/arrows.svg',
  '/images/default_avatar.svg',
  '/images/girl.webp',
  '/index.js',
  '/index.js',
  '/src/App.tsx',
  '/src/index.css',
  '/src/index.css',
  '/src/main.tsx',
  '/sw.js',
  '/vite.svg',
  '/vite.svg',
  'arrows.svg',
]

const canBeCached = req =>
  req.method === 'GET' &&
  req.url.startsWith('http') &&
  !req.url.includes('sockjs-node')

const tryNetwork = (req, timeout) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout)
    fetch(req).then(res => {
      clearTimeout(timeoutId)
      if (canBeCached(req)) {
        const responseClone = res.clone()
        caches.open(CACHE_NAME).then(cache => {
          cache.put(req, responseClone)
        })
      }

      resolve(res)
    }, reject)
  })
}

const getFromCache = req => {
  return caches.open(CACHE_NAME).then(cache => {
    return cache.match(req).then(result => {
      return result || Promise.reject('no-match')
    })
  })
}

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(URLS)
      })
      .catch(error => {
        console.error('cache error', error)
      })
  )
})

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name)
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    tryNetwork(event.request, 400).catch(() => getFromCache(event.request))
  )
})
