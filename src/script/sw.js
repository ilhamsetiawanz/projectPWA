import 'regenerator-runtime';
import CacheHelper from './utils/cache-utils';

// Caching the listed asset below
const assetsToCache = [
  './',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './icons/icon-512x512.png',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
  '/asset/img/card/card  1.jpeg',
  '/asset/img/card/card  2.jpeg',
  '/asset/img/card/card 3.jpeg',
  '/asset/img/card/card 4.jpeg',
  '/asset/img/card/card 5.jpeg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});