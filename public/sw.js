// AERORUSH: SKYBOUND - Service Worker (Offline-First PWA Caching Engine)
const CACHE_NAME = 'aerorush-skybound-v3.3';
const CACHE_PREFIX = 'aerorush-skybound-';

// Load build-generated dynamic asset manifest (emitted by Vite at build time)
try {
  importScripts('./sw-assets.js');
} catch (_) {
  // sw-assets.js may not exist in development mode
}

const STATIC_PRECACHE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
];

// Combine static shell and dynamic build-generated hashed assets
const buildAssets = (typeof self.__BUILD_ASSETS !== 'undefined' && Array.isArray(self.__BUILD_ASSETS))
  ? self.__BUILD_ASSETS
  : [];

const ALL_PRECACHE_ASSETS = Array.from(new Set([...STATIC_PRECACHE, ...buildAssets]));

// Installation: Pre-cache core shell assets and generated bundles
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Robust precaching: catch individual failures so one missing asset doesn't abort install
      await Promise.all(
        ALL_PRECACHE_ASSETS.map((asset) => {
          return cache.add(new Request(asset, { cache: 'reload' })).catch((err) => {
            console.warn(`[SW] Precache skipped for ${asset}:`, err);
          });
        })
      );
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activation: Clean up all older caches belonging to AERORUSH
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          // Conservative cleanup: delete older AERORUSH caches safely
          if (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) {
            console.log(`[SW] Deleting obsolete cache: ${name}`);
            return caches.delete(name);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Manual update message listener
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'CLEAN_OBSOLETE_CACHES') {
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    });
  }
});

// Fetch: Network-first for HTML navigations; Cache-first with network fallback for assets
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignore non-http requests (e.g. chrome-extension://)
  if (!url.protocol.startsWith('http')) return;

  // Do NOT cache cross-origin requests
  if (url.origin !== self.location.origin) return;

  // Do NOT cache WebSocket connections
  if (event.request.headers.get('upgrade') === 'websocket') return;

  // Navigation requests (HTML pages): Network-first with offline cache fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache).catch(() => {});
            }).catch(() => {});
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match('./index.html').then((r) => r || caches.match('./') || caches.match('/'));
        })
    );
    return;
  }

  // Static assets and bundles: Cache-first with network fallback & runtime caching
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache).catch((err) => {
              console.warn('[SW] Runtime cache put skipped:', err);
            });
          }).catch(() => {});
        }
        return networkResponse;
      });
    })
  );
});
