'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2dd3f47a6d65b16810b8ea84fb3c4b21",
"assets/AssetManifest.json": "5b2c838e5234b4a976696d77a6aee89c",
"assets/assets/apna_logo.png": "3c2222d3a0eedb3ef5e756f36fa03e5b",
"assets/assets/headlight1.png": "582319eed4dbf515f0560fe64307bb68",
"assets/assets/icons/headphone_with_mic.png": "684b5d504bf149d5238fe75feb6ec07f",
"assets/assets/icons/left_arrow.png": "a6ed029c79f7ae878e5df379ad85148e",
"assets/assets/icons/marker.png": "054ba550fc2a67866bb86699c8893164",
"assets/assets/icons/minus.png": "4b963316b87ae16f4e8aa878e8e3ad8b",
"assets/assets/icons/plus.png": "d20e9ea52fbcae0f7f6fd2db8264530f",
"assets/assets/icons/right_arrow.png": "4d95dfc8a6e89f66e3ca01ec717c6d2a",
"assets/assets/images/%25E2%2580%2594Pngtree%25E2%2580%2594sun%2520icon%2520design_4816760.png": "b62d400819b1e31fa656bc2d6091e204",
"assets/assets/images/anklet.png": "5de3c53b09b23ac4c41a3befd790f584",
"assets/assets/images/Bags.png": "1552f8ea0bbec9b8a7ad49d313419e6b",
"assets/assets/images/bean-bag.png": "7a3541da8ed446ed5607576c1757feaa",
"assets/assets/images/bed-sheets.png": "06775bd98e17dc4058901f5c2eac2c90",
"assets/assets/images/bracelet.png": "ae06a4fb12181f6dd1fa842f60877901",
"assets/assets/images/brands.png": "f068524b27959c1979d041cf5e7f3957",
"assets/assets/images/chat-with-us.png": "684b5d504bf149d5238fe75feb6ec07f",
"assets/assets/images/clock.png": "7d02a42348c14af19512606ac8335cfe",
"assets/assets/images/cover.png": "9b8c207641a49951308783cd86f9e2c1",
"assets/assets/images/curtains.png": "16eebd6bdb0461db534078fb84646d7e",
"assets/assets/images/Dell.png": "b9d1651418e3064e7d8bade2703f3ece",
"assets/assets/images/dryer.png": "16d6fa0c04c5bb7bad067da756041ea4",
"assets/assets/images/dumbbell.png": "e1051551822ed711dd347f3f1d115a58",
"assets/assets/images/earrings.png": "4e5cb4baf7155de2798b7fb316cd7620",
"assets/assets/images/electric-appliance.png": "6d6d85ea9ef4e6b69521b6f4eb16aa71",
"assets/assets/images/external-hard-drive.png": "afca56460d3e72f9da236321d1452642",
"assets/assets/images/fan.png": "3b4caf447009c19d91b84556bf2ab411",
"assets/assets/images/furniture.png": "8fea39e39bd45f9da9b0edc0e1414990",
"assets/assets/images/gadget.png": "00500880d38fb74b76d41d8768ba15fe",
"assets/assets/images/gul-ahmed-logo-912EE874E7-seeklogo.com.png": "5208416e643fcf65cf73ef003b45d3b6",
"assets/assets/images/GUl.png": "55d632f759d0eaa26ed88852d5cca3db",
"assets/assets/images/handbag.png": "3e274e30ab99ce194a4c7690bc46472e",
"assets/assets/images/headlight.png": "d48cd3b8e5d474b35ed2de910f1c217b",
"assets/assets/images/headphones.png": "5738f273c1e5acf8dd1eb26101dd8761",
"assets/assets/images/holder.png": "53d927c1056e507d7e0b63340ca74394",
"assets/assets/images/HP.png": "d6575887f4d990d09cb25b341f8b129a",
"assets/assets/images/jewelry.png": "c90de9f5132819b23a5dee63c6703ff2",
"assets/assets/images/jewelryset.png": "8d4ad0ce0b1e48f29c463dd40a500633",
"assets/assets/images/key.png": "ed726df92c6a85153da3659e80924a08",
"assets/assets/images/kitchen.png": "7a651a116666195a6349131687f528a6",
"assets/assets/images/kitcheness.png": "ae4bce48815c46562d3c562c588f0474",
"assets/assets/images/kitchenessentials.png": "ae4bce48815c46562d3c562c588f0474",
"assets/assets/images/listening.png": "8ee90fc140644765faf1b821e32946ae",
"assets/assets/images/man.png": "1fa44d77af5af3e7057c0787ed1edd7f",
"assets/assets/images/menbag.png": "8414ecebb93e8e0e90dc762b9aa314e2",
"assets/assets/images/Necklace.png": "27014471611b25930f86d7cbd36e4e7e",
"assets/assets/images/New-Project.png": "6179600aa0e8a54f40a3b1882861d763",
"assets/assets/images/oven.png": "45a5c68afd938fcfbf04449dc0a3f459",
"assets/assets/images/phone.png": "ab337a667fc66090716ddcdc54e8b5e5",
"assets/assets/images/plasticchair.png": "a8230e84265b8adaf3e9a8915352e331",
"assets/assets/images/pngwing.png": "1552f8ea0bbec9b8a7ad49d313419e6b",
"assets/assets/images/Rings.png": "9ee4a44de034b469d89eb856e2edf7de",
"assets/assets/images/roomcooler.png": "268a02c336cfd534ff029295e9a3a182",
"assets/assets/images/roomheater.png": "858df7bd670c61db86afa4eadb9e6303",
"assets/assets/images/Shawal.png": "8782c6010d6c46e5f28e3a4443bf8092",
"assets/assets/images/sportmenwear.png": "9045280e172ccbc4cbf29ff027c21d36",
"assets/assets/images/sports.png": "7737362db7c89e9c459390e6fea9dbd3",
"assets/assets/images/Suitpant.png": "7312c80e742679476df9e4e223bb9346",
"assets/assets/images/toys.png": "8c3e0a820dbea21ec2ad1649927f7312",
"assets/assets/images/washingmachine.png": "bd0500d93fd34f8f440f1534a196c2aa",
"assets/assets/images/water-heater.png": "7332384e98ef09566ee83b299049ea8a",
"assets/assets/images/weights.png": "a7b7eba34c562cdba296c207f7d3659f",
"assets/assets/images/wheel.png": "2ac4013b5cfbbfe15b54f2e3861cb2c7",
"assets/assets/images/woman-clothes.png": "2d59a283722f718b6dfe5ff80bf3af9c",
"assets/assets/images/Woman.png": "bb342ce8fb4c15af37df0e1b5d4d85d6",
"assets/assets/images/womensportwear.png": "7732dc48c024b67f6c89a5706fc548e8",
"assets/assets/images/work-from-home.png": "1188b7fb09b5fd1a1465bae9660d596b",
"assets/assets/logo.png": "1d03775ac00cea1ea18541d3aea94328",
"assets/assets/RobotoCondensed/RobotoCondensed-Bold.ttf": "80196062609a70419fa247b03120bf1e",
"assets/assets/RobotoCondensed/RobotoCondensed-Italic.ttf": "e5ebc8c75d56f3178a120ef5eb2779e5",
"assets/assets/RobotoCondensed/RobotoCondensed-Light.ttf": "10c2195ecc4e80d18353669a428d7b66",
"assets/assets/RobotoCondensed/RobotoCondensed-LightItalic.ttf": "09be069d41586cb211f44be7e16e2f14",
"assets/assets/RobotoCondensed/RobotoCondensed-Regular.ttf": "d2e3c267518351432f1bcbbadfee7833",
"assets/FontManifest.json": "6323b898acab376cf318308672adb64d",
"assets/fonts/MaterialIcons-Regular.otf": "53b21229d781e78f5a879dddba1fd4d1",
"assets/NOTICES": "65e4099638573de7ec739b6abe1c3f38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9298e6f6038966c93af9392591870109",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "70bdacf556eacf2fbe64e5c4397ed7bf",
"/": "70bdacf556eacf2fbe64e5c4397ed7bf",
"main.dart.js": "cb622ddc3657a4aa054c858bdb0cc6e2",
"manifest.json": "762463d634e9364bc069496b6f645e3e",
"version.json": "d78f5551c6ab7d116c8aad74114b9ba9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
