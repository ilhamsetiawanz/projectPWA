// import 'regenerator-runtime';
// import CacheHelper from './utils/cache-utils';

// const assetCache = [
//   './',
//   './app.webmanifest',
//   './index.html',
//   './app.bundle.js',
//   './sw.bundle.js',
//   '../asset/logo/favion.png',
//   './icons/icon-192x192.png',
//   './icons/icon-256x256.png',
//   './icons/icon-384x384.png',
//   './icons/icon-512x512.png',
//   '../asset/hero/hero-image_2.jpg',
//   'asset/card/card  1.jpeg',
//   '/asset/card/card  2.jpeg',
//   '/asset/card/card 3.jpeg',
//   '/asset/card/card 4.jpeg',
//   '/asset/card/card 5.jpeg',
// ];

// self.addEventListener('install', (event) => {
//   console.log('Installing Service Worker ...');
//   event.waitUntil(CacheHelper.cachingAppShell([...assetCache]));
// });

// self.addEventListener('activate', (event) => {
//   console.log('Activating Service Worker ...');
//   event.waitUntil(CacheHelper.deleteOldCache());
// });

// self.addEventListener('fetch', (event) => {
//   console.log(event.request);
//   event.respondWith(CacheHelper.revalidateCache(event.request));
//   // TODO: Add/get fetch request to/from caches
// });