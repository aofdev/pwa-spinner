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
    "url": "index.html",
    "revision": "b6cd9e4b402555cf67f7deb1f562b007"
  },
  {
    "url": "manifest.json",
    "revision": "c1e991e7a917498ca793e395d4efaef5"
  },
  {
    "url": "spinner.svg",
    "revision": "4dd33676727189314840e68676440ee1"
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
