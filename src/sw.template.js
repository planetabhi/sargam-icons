
'use strict';

const VERSION = '{{VERSION}}';
const SHELL_CACHE = `sargam-shell-v${VERSION}`;
const ICON_CACHE = `sargam-icons-v${VERSION}`;
const RUNTIME_CACHE = `sargam-runtime-v${VERSION}`;

const SHELL_ASSETS = [
  '/',
  '/changelog.html',
  '/manifest.webmanifest',
  '/.well-known/sargam-icons.json',
];

const ICON_CDN_PREFIX = `https:

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_ASSETS)).catch(() => {}),
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  const keep = new Set([SHELL_CACHE, ICON_CACHE, RUNTIME_CACHE]);
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => (keep.has(key) ? null : caches.delete(key))),
      );
      await self.clients.claim();
    })(),
  );
});

function isHtmlRequest(request) {
  if (request.mode === 'navigate') return true;
  const accept = request.headers.get('accept') || '';
  return accept.includes('text/html');
}

function isVersionedIconRequest(url) {
  return url.href.startsWith(ICON_CDN_PREFIX);
}

function isShellAsset(url) {

  if (url.origin !== self.location.origin) return false;
  if (url.pathname === '/manifest.webmanifest') return true;
  return /\.(?:js|css|woff2?|ttf|otf|eot|json)$/i.test(url.pathname);
}

async function networkFirst(request) {
  try {
    const res = await fetch(request);
    if (res && res.ok) {
      const copy = res.clone();
      caches.open(RUNTIME_CACHE).then((c) => c.put(request, copy)).catch(() => {});
    }
    return res;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;

    const fallback = await caches.match('/');
    if (fallback) return fallback;
    throw err;
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const networkPromise = fetch(request)
    .then((res) => {
      if (res && res.ok) cache.put(request, res.clone()).catch(() => {});
      return res;
    })
    .catch(() => null);
  if (cached) return cached;
  const fromNetwork = await networkPromise;
  if (fromNetwork) return fromNetwork;

  return new Response('', { status: 504, statusText: 'Offline' });
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  const res = await fetch(request);
  if (res && res.ok) cache.put(request, res.clone()).catch(() => {});
  return res;
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (isVersionedIconRequest(url)) {
    event.respondWith(cacheFirst(request, ICON_CACHE));
    return;
  }

  if (isHtmlRequest(request)) {
    event.respondWith(networkFirst(request));
    return;
  }

  if (isShellAsset(url)) {
    event.respondWith(staleWhileRevalidate(request, SHELL_CACHE));
    return;
  }

});

self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type === 'WARM_ICONS' && Array.isArray(data.urls)) {
    event.waitUntil(warmIconCache(data.urls));
  } else if (data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

async function warmIconCache(urls) {
  const cache = await caches.open(ICON_CACHE);
  const batchSize = 12;
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    await Promise.all(
      batch.map(async (url) => {
        try {
          if (await cache.match(url)) return;
          const res = await fetch(url, { mode: 'cors' });
          if (res && res.ok) await cache.put(url, res.clone());
        } catch (_) {

        }
      }),
    );
  }
}
