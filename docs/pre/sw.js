if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let d={};const s=e=>c(e,r),f={module:{uri:r},exports:d,require:s};i[r]=Promise.all(n.map((e=>f[e]||s(e)))).then((e=>(o(...e),d)))}}define(["./workbox-b27fd86d"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pre1"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"benefit.html",revision:"bdbcff395d2577f93922c482dc97472d"},{url:"css/aditional.css",revision:"df853765b6977612687388efd65f606e"},{url:"css/main.css",revision:"1f6b160487837e9d2106be5afa9214ac"},{url:"img/001-planning.png",revision:"d51e888cdfc3930f25d65ef49693638c"},{url:"img/002-welfare.png",revision:"a0c22eb2cd12346be78cff51948e69ec"},{url:"img/003-pension.png",revision:"3579333e861231d6f4f23970898e4f51"},{url:"img/apple-touch-icon-114x114-precomposed.png",revision:"7c385c2a7b25ccc5476e56c6c9cfae19"},{url:"img/apple-touch-icon-120x120-precomposed.png",revision:"e3c0d94e7807de19a17e84adfa33a002"},{url:"img/apple-touch-icon-144x144-precomposed.png",revision:"0829467ce5ade1ee60dc54db84e1461a"},{url:"img/apple-touch-icon-57x57-precomposed.png",revision:"5d50d5eb29bd540cddd9feec4f0d4a1b"},{url:"img/apple-touch-icon-72x72-precomposed.png",revision:"f35043989ee9d082748e498c3fe58d20"},{url:"img/favicon-16x16.png",revision:"dd61209c93a87d652ecd5942d66af683"},{url:"img/favicon-32x32.png",revision:"e50616aa989e6f4bf0939400840d843f"},{url:"img/favicon-48x48.png",revision:"5d952d2429433cd7f62c56e0e18f8c35"},{url:"img/favicon.ico",revision:"28c9b2ec3defca71ee68804e420ba901"},{url:"img/icons-128.png",revision:"0b1024f89d8a4fe73624815c58baa734"},{url:"img/icons-192.png",revision:"1dbdebc85bcc301a72b7ed972be13b54"},{url:"img/icons-512.png",revision:"084a0f7dd32d5abe77aabbdcadcdba0e"},{url:"img/thyreos.gif",revision:"72118c69ab4ee39543c732b5093f2047"},{url:"index.html",revision:"f15abad2042125193e883683c4583d3b"},{url:"manifest.json",revision:"ce884f8cb26b31862bbff22b1e85e8b7"},{url:"pension.html",revision:"6107b590011e76613db54c4e8c35c67d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map