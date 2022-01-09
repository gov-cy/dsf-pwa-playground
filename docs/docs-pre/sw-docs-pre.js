importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

const { precacheAndRoute } = workbox.precaching;
const { setCatchHandler } = workbox.routing;
const {setCacheNameDetails} = workbox.core;

setCacheNameDetails({
  prefix: 'dsf-pwa-docs-pre',
  suffix: 'v1'
});

// Ensure your build step is configured to include /offline.html as part of your precache manifest.
precacheAndRoute([{"revision":"f1169775dcbeef08bcb635612503fa4e","url":"content/getting_started-en.MD"},{"revision":"db74e66235994373316afb763f178877","url":"content/index-el.MD"},{"revision":"9f495f60dc4107dc188b01a0d19b9093","url":"content/index-en.MD"},{"revision":"d6a5adccf7ee44ad605dbbe09fc865b6","url":"content/styles-el.MD"},{"revision":"687321e3815db7f5bd9feac399cc639c","url":"content/styles-en.MD"},{"revision":"b40e1e6d723f65383cfee94ef41536a4","url":"content/styles.colour-en.MD"},{"revision":"6881ca8645bc55a752845b0bf7d53ca9","url":"content/styles.grid-en.MD"},{"revision":"2069e6292c2d870e8fd3a9b7a5ae5990","url":"content/styles.layout-en.MD"},{"revision":"2154787a6b089a32faa32f69d3e63ef1","url":"content/styles.page_templates-en.MD"},{"revision":"4783f4154647f9310cc886867f83ffc6","url":"content/styles.typography.MD"},{"revision":"bc2ed6d96fb94f56ebd7175c9d30fc59","url":"css/design-system.css"},{"revision":"c9fa956441053b9c32a3e087ffcae1b3","url":"css/main.css"},{"revision":"77978f78adf8543041e70a13e7c8a1ff","url":"data/pages.json"},{"revision":"7c385c2a7b25ccc5476e56c6c9cfae19","url":"img/apple-touch-icon-114x114-precomposed.png"},{"revision":"e3c0d94e7807de19a17e84adfa33a002","url":"img/apple-touch-icon-120x120-precomposed.png"},{"revision":"0829467ce5ade1ee60dc54db84e1461a","url":"img/apple-touch-icon-144x144-precomposed.png"},{"revision":"5d50d5eb29bd540cddd9feec4f0d4a1b","url":"img/apple-touch-icon-57x57-precomposed.png"},{"revision":"f35043989ee9d082748e498c3fe58d20","url":"img/apple-touch-icon-72x72-precomposed.png"},{"revision":"dd61209c93a87d652ecd5942d66af683","url":"img/favicon-16x16.png"},{"revision":"e50616aa989e6f4bf0939400840d843f","url":"img/favicon-32x32.png"},{"revision":"5d952d2429433cd7f62c56e0e18f8c35","url":"img/favicon-48x48.png"},{"revision":"28c9b2ec3defca71ee68804e420ba901","url":"img/favicon.ico"},{"revision":"0b1024f89d8a4fe73624815c58baa734","url":"img/icons-128.png"},{"revision":"1dbdebc85bcc301a72b7ed972be13b54","url":"img/icons-192.png"},{"revision":"084a0f7dd32d5abe77aabbdcadcdba0e","url":"img/icons-512.png"},{"revision":"72118c69ab4ee39543c732b5093f2047","url":"img/thyreos.gif"},{"revision":"4bda5c6dba6360bc8e33918c26c18811","url":"index.html"},{"revision":"370b420dcc6b4c2aebe9d9e4fdf6024b","url":"js/app.js"},{"revision":"60c0b201485f57043ed050ac60f4c5e1","url":"js/appTemplates.js"},{"revision":"d9fc9b1b34d812d5dad0706b8adfcc1c","url":"js/Markdown.Converter.js"},{"revision":"dd8826815fc80d12af3eb65dc3c2453e","url":"js/Markdown.Extra.js"},{"revision":"f574194aec3328cd86e1f9ac46da47dc","url":"js/Markdown.Sanitizer.js"},{"revision":"8ce579d45828f73841b3c02086af8027","url":"js/mustache.min.js"},{"revision":"a9595a2b72864afb7eb7ee41953aabf0","url":"js/sammy-latest.min.js"},{"revision":"313d8af2e42056ac3be9c06a6ba06c17","url":"manifest.json"},{"revision":"829da710db594661c740e0ec41f14f2c","url":"offline.html"}]);

// Catch routing errors, like if the user is offline
setCatchHandler(async ({ event }) => {
  // Return the precached offline page if a document is being requested
  if (event.request.destination === 'document') {
    return matchPrecache('/offline.html');
  }

  return Response.error();
});


