importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { NetworkFirst,
  StaleWhileRevalidate,
  CacheFirst } = workbox.strategies;
const { precacheAndRoute } = workbox.precaching;
const { setCatchHandler } = workbox.routing;
const {setCacheNameDetails} = workbox.core;

setCacheNameDetails({
  prefix: 'dsf-pwa',
  suffix: 'v1'
});

// Ensure your build step is configured to include /offline.html as part of your precache manifest.
precacheAndRoute([{"revision":"df853765b6977612687388efd65f606e","url":"css/aditional.css"},{"revision":"1f6b160487837e9d2106be5afa9214ac","url":"css/main.css"},{"revision":"7c385c2a7b25ccc5476e56c6c9cfae19","url":"img/apple-touch-icon-114x114-precomposed.png"},{"revision":"e3c0d94e7807de19a17e84adfa33a002","url":"img/apple-touch-icon-120x120-precomposed.png"},{"revision":"0829467ce5ade1ee60dc54db84e1461a","url":"img/apple-touch-icon-144x144-precomposed.png"},{"revision":"5d50d5eb29bd540cddd9feec4f0d4a1b","url":"img/apple-touch-icon-57x57-precomposed.png"},{"revision":"f35043989ee9d082748e498c3fe58d20","url":"img/apple-touch-icon-72x72-precomposed.png"},{"revision":"01cbdaa170767b7ec45a76b868ca3a5f","url":"img/cache-first.png"},{"revision":"10f84cd186c0ca3d66a04681e8ad35b3","url":"img/cache-only.png"},{"revision":"dd61209c93a87d652ecd5942d66af683","url":"img/favicon-16x16.png"},{"revision":"e50616aa989e6f4bf0939400840d843f","url":"img/favicon-32x32.png"},{"revision":"5d952d2429433cd7f62c56e0e18f8c35","url":"img/favicon-48x48.png"},{"revision":"28c9b2ec3defca71ee68804e420ba901","url":"img/favicon.ico"},{"revision":"0b1024f89d8a4fe73624815c58baa734","url":"img/icons-128.png"},{"revision":"1dbdebc85bcc301a72b7ed972be13b54","url":"img/icons-192.png"},{"revision":"084a0f7dd32d5abe77aabbdcadcdba0e","url":"img/icons-512.png"},{"revision":"ea5186e4d927a9c8ab5220b336099111","url":"img/network-first.png"},{"revision":"1bf5e3e6c94a8d3568119a40aad7a5e5","url":"img/network-only.png"},{"revision":"9bbf5aca1117b3d79bb8de948cdf25e2","url":"img/stale-while-revalidate.png"},{"revision":"72118c69ab4ee39543c732b5093f2047","url":"img/thyreos.gif"},{"revision":"18da853acb0985948bbc13cea38383fc","url":"index.html"},{"revision":"cafb0d099a1ea1522d5d0d14ed2e2d16","url":"manifest.json"}]);

// Catch routing errors, like if the user is offline
setCatchHandler(async ({ event }) => {
  // Return the precached offline page if a document is being requested
  if (event.request.destination === 'document') {
    return matchPrecache('/offline.html');
  }

  return Response.error();
});


// Used for filtering matches based on status code, header, or both
const { CacheableResponsePlugin } = workbox.cacheableResponse;
// Used to limit entries in cache, remove entries after a certain period of time
const { ExpirationPlugin } = workbox.expiration;

// Cache page navigations (html) with a Network First strategy
registerRoute(
  // Check to see if the request is a navigation to a new page
  ({ request }) => request.mode === 'navigate',
  // Use a Network First caching strategy
  new NetworkFirst({
    // Put all cached files in a cache named 'pages'
    cacheName: 'pages',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache CSS, JS, and Web Worker requests with a Stale While Revalidate strategy
registerRoute(
  // Check to see if the request's destination is style for stylesheets, script for JavaScript, or worker for web worker
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'worker',
  // Use a Stale While Revalidate caching strategy
  new StaleWhileRevalidate({
    // Put all cached files in a cache named 'assets'
    cacheName: 'assets',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  }),
);

// Cache images with a Cache First strategy
registerRoute(
  // Check to see if the request's destination is style for an image
  ({ request }) => request.destination === 'image',
  // Use a Cache First caching strategy
  new CacheFirst({
    // Put all cached files in a cache named 'images'
    cacheName: 'images',
    plugins: [
      // Ensure that only requests that result in a 200 status are cached
      new CacheableResponsePlugin({
        statuses: [200],
      }),
      // Don't cache more than 50 items, and expire them after 30 days
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
      }),
    ],
  }),
);