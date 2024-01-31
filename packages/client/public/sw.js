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

const tryNetwork = (req, timeout) => {
  console.log(req)
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(req).then((res) => {
      clearTimeout(timeoutId);
      const responseClone = res.clone();
      caches.open(CACHE_NAME).then((cache) => {
        cache.put(req, responseClone)
      })
      resolve(res);
      // Reject also if network fetch rejects.
    }, reject);
  });
};

const getFromCache = (req) => {
  console.log('network is off so getting from cache...')
  return caches.open(CACHE_NAME).then((cache) => {
    return cache.match(req).then((result) => {
      return result || Promise.reject("no-match");
    });
  });
};

self.addEventListener("install", event => {
  console.log("install");
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('opened cache')
        return cache.addAll(URLS)
      })
      .then(data => console.log('data', data))
      .catch(error => {
        console.log('cache error', error)
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
  console.log('Происходит запрос на сервер');
  event.respondWith(
    tryNetwork(event.request, 400)
      .catch(() => getFromCache(event.request))
  );
});
