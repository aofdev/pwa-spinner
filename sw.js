importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "images/icons/app-icon-144x144.png",
    "revision": "f33547ee2405740a8da4b2bc07ea30dd"
  },
  {
    "url": "images/icons/app-icon-192x192.png",
    "revision": "808d223c1629b792ad723accaf38f5ef"
  },
  {
    "url": "images/icons/app-icon-384x384.png",
    "revision": "965d75a7f8c76d8d82e0a296ee085acc"
  },
  {
    "url": "images/icons/app-icon-48x48.png",
    "revision": "175e69eef74a620df1d9e9febd2f7251"
  },
  {
    "url": "images/icons/app-icon-512x512.png",
    "revision": "31ef760a149649764345131ea55d4b2f"
  },
  {
    "url": "images/icons/app-icon-96x96.png",
    "revision": "0a6fb135a15cd743e3d3fd8e3845e4da"
  },
  {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "62e45574e7cad3d70a5b42bddc837f1d"
  },
  {
    "url": "images/icons/favicon-16x16.png",
    "revision": "4d49fd42ef9f428281d6fed26415f2fd"
  },
  {
    "url": "images/icons/favicon.ico",
    "revision": "1a520e5f9efbaaa0c7cecfff4e3e69dc"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "cba4fffe27faa23b3aa4655b6f9ff298"
  },
  {
    "url": "index.html",
    "revision": "10290997399358dee34ac9a4d8b516b2"
  },
  {
    "url": "manifest.json",
    "revision": "95588113c928b47556bfc79c473b61a1"
  },
  {
    "url": "package-lock.json",
    "revision": "a072d2e2e04863d13e8953c744cec46d"
  },
  {
    "url": "package.json",
    "revision": "449d4d192ecea0904fa7e5f0ef4261e5"
  },
  {
    "url": "spinner.svg",
    "revision": "4dd33676727189314840e68676440ee1"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js.map",
    "revision": "8e170beaf8b748367396e6039c808c74"
  }
];

const workboxSW = new self.WorkboxSW();


workboxSW.router.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/, workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'google-fonts',
}));

workboxSW.router.registerRoute('https://bootswatch.com/4/lumen/bootstrap.min.css', workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'bootstrap-css'
}));


workboxSW.router.registerRoute('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css', workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'animate-css'
}));

workboxSW.router.registerRoute('https://cdn.rawgit.com/alexgibson/shake.js/master/shake.js', workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'shake-js'
}));

workboxSW.router.registerRoute('https://code.jquery.com/jquery-3.2.1.slim.min.js', workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'jquery-js'
}));

workboxSW.router.registerRoute('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js', workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'popper-js'
}));


workboxSW.router.registerRoute('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js', workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'bootstrap-js'
}));


workboxSW.router.registerRoute('https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js', workboxSW.strategies.staleWhileRevalidate({
  cacheName: 'wow-js'
}));

workboxSW.precache(fileManifest);
