importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

const { precacheAndRoute, matchPrecache } = workbox.precaching;
const { setCatchHandler,setDefaultHandler } = workbox.routing;
const { NetworkOnly} = workbox.strategies;
const {setCacheNameDetails} = workbox.core;

setCacheNameDetails({
  prefix: 'dsf-offline-pre',
  suffix: 'v1'
});

// Ensure your build step is configured to include /offline.html as part of your precache manifest.
precacheAndRoute([{"revision":"f6ba2286df0931be12b349376e4aad29","url":"offline.html"}]);

// Use a stale-while-revalidate strategy for all other requests.
setDefaultHandler(new NetworkOnly());

// Catch routing errors, like if the user is offline
setCatchHandler(async ({ event }) => {
  // Return the precached offline page if a document is being requested
  if (event.request.destination === 'document') {
    return matchPrecache('offline.html');
  }

});


