// AERORUSH: SKYBOUND - Service Worker (Offline-First PWA Caching Engine)
const CACHE_NAME = 'aerorush-skybound-v3.1';
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
          return cache.add(asset).catch((err) => {
            console.warn(`[SW] Precache skipped for ${asset}:`, err);
          });
        })
      );
    }).then(() => {
      return self.skipWaiting();
    })
  );
});

// Activation: Clean up only older caches belonging to AERORUSH
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          // Conservative cleanup: never delete caches belonging to other apps on this origin
          if (name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME) {
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
});

// Fetch: Cache-first with network fallback & runtime caching
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignore non-http requests (e.g. chrome-extension://)
  if (!url.protocol.startsWith('http')) return;

  // Do NOT cache cross-origin requests (e.g. Supabase REST, AdSense scripts)
  if (url.origin !== self.location.origin) return;

  // Do NOT cache WebSocket connections
  if (event.request.headers.get('upgrade') === 'websocket') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached asset immediately
        return cachedResponse;
      }

      // Fetch from network, and store successful same-origin responses in cache
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache).catch((err) => {
              // Gracefully handle quota or storage access errors
              console.warn('[SW] Runtime cache put skipped:', err);
            });
          }).catch(() => {});
        }
        return networkResponse;
      }).catch(() => {
        // If navigation request and offline: fallback to cached index.html or root
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html').then((r) => r || caches.match('./') || caches.match('/'));
        }
      });
    })
  );
});
