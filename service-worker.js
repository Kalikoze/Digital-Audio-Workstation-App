"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/Audio-God/index.html","dc9e548e760d0bad06ab90bb29ae2a60"],["/Audio-God/static/css/main.556c00a6.css","7d2940edfb869db6af18c6686434dea5"],["/Audio-God/static/js/main.8e06dc31.js","0d4588d663afc15494b3a83b708c90b0"],["/Audio-God/static/media/50CentSnare.0e0b68bb.wav","0e0b68bb4591dbcdd920204bdfe9a4bf"],["/Audio-God/static/media/AUDIO-GOD.bf0729f2.png","bf0729f293294732416c1727fe61ace5"],["/Audio-God/static/media/Bass.7be8a2cb.wav","7be8a2cbf6253238cf3c5552cc3056a5"],["/Audio-God/static/media/Clap1.be7c527f.wav","be7c527fe0eaf64941e4640e8438a09d"],["/Audio-God/static/media/Closed-Hi-Hat5.7cc40350.wav","7cc403503cfb6f7c1335699928801aa2"],["/Audio-God/static/media/D12Snare.7eb75757.wav","7eb757575fe3f2671a22d893e0018dfa"],["/Audio-God/static/media/Dark.5b46e637.wav","5b46e6377a53f47ef29024d45e737c31"],["/Audio-God/static/media/DreSnare.1a661a46.wav","1a661a46067cf8521f7951a1b6590245"],["/Audio-God/static/media/Snare1.d4c10f1b.wav","d4c10f1b5566f02aad818a586ca06302"],["/Audio-God/static/media/alarm-clock.2803116d.ttf","2803116d50a5be32e5435aba7d4bb941"],["/Audio-God/static/media/audio-effects-background.3b5993bb.png","3b5993bbb359c2e69b4290f596c03eec"],["/Audio-God/static/media/audio-knob.90358fcc.png","90358fcc5ac422cb502001686b3f45f7"],["/Audio-God/static/media/black-background.24e4996b.jpg","24e4996be7517e6852879d554c26ed46"],["/Audio-God/static/media/dark-wood.4c98cad6.jpg","4c98cad6a8c13df9f75c413f2ee4faa5"],["/Audio-God/static/media/gold-plate.518fe7d1.jpg","518fe7d1ae2b2244c11674f6ca96cd65"],["/Audio-God/static/media/goldButton.bd8927c2.png","bd8927c2d4351d8c70df5baff4578321"],["/Audio-God/static/media/scale.cba624c0.png","cba624c0034ce1402ed4215dedaa9bd3"],["/Audio-God/static/media/speaker-cone.9aeef18d.png","9aeef18d6231d9aa71e540d721117884"],["/Audio-God/static/media/speaker2.85d918bb.png","85d918bb4d13d796d690c287234c7e14"],["/Audio-God/static/media/volume-knob.a26cd35b.png","a26cd35b3692514d444c051dfdf60a7b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/Audio-God/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});