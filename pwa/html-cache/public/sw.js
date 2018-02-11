const CACHE_NAME = 'test-pwa-cache-v1'; // 任意の値
const urlsToCache = [
  '/',
  '/index.html',
  '/page1.html',
  '/favicon.ico'
];

// Service Workerのインストール
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
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
      // -- ここから下が新しく追記する部分 --
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

