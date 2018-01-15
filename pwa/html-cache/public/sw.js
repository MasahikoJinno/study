const CACHE_NAME = 'test-pwa-cache-v1'; // 任意の値
const urlsToCache = [
  '/',
  '/index.html',
  '/page1.html',
  '/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', event => {
  // ここで指定したCACHE_NAMEのキャッシュは削除されません
  // 新しく追加するCACHE_NAMEなどを指定しましょう
  const cacheWhitelist = [
    'test-pwa-cache-v33'
  ];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName); // キャッシュを削除
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      if (res) {
        // キャッシュがあればキャッシュからレスポンスを返す
        return res;
      }

      // -- ここから下が新しく追記する部分です。 --
      // event.requestはStreamなのでcloneする必要がある
      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(res => {
        // レスポンスが正しいかをチェック
        if (!res || res.status !== 200
          || res.type !== 'basic'
        ) {
          return res;
        }

        // resはStreamなのでcloneする必要がある
        const responseToCache = res.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return res;
      });
    })
  );
});
