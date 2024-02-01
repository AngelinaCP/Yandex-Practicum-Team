const CACHE_NAME = 'silent-hill-v1';

const URLS = [
  '/',
  '/src/assets/fonts/horror.ttf',
  '/src/assets/fonts/SLNTHLC.ttf',
  '/src/assets/images/girl.webp',
  '/src/game/backgrounds/city/layer1.png',
  '/src/game/backgrounds/city/layer2.png',
  '/src/game/backgrounds/city/layer3.png',
  '/src/game/backgrounds/city/layer4.png',
  '/src/game/backgrounds/city/layer5.png',
  'https://i.ibb.co/HHBFJdH/char.png',
  '/vite.svg',
  '/src/index.css',
  '/src/main.tsx',
  '/src/App.tsx'
];

const canBeCached = (req) =>
  req.method === 'GET' &&
  req.url.startsWith('http') &&
  !req.url.includes('sockjs-node');

const tryNetwork = (req, timeout) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(req).then((res) => {
      clearTimeout(timeoutId);
      if (canBeCached(req)) {
        const responseClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(req, responseClone)
        })
      }

      resolve(res);
    }, reject);
  });
};

const getFromCache = (req) => {
  return caches.open(CACHE_NAME).then((cache) => {
    return cache.match(req).then((result) => {
      return result || Promise.reject("no-match");
    });
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(URLS)
      })
      .catch(error => {
        console.error('cache error', error)
      })
  )

});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .map(name => {
            if (name !== CACHE_NAME) {
              return caches.delete(name)
            }
          })
      )
    })
);
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    tryNetwork(event.request, 400)
      .catch(() => getFromCache(event.request))
  );
});
