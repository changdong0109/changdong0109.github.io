if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),f={module:{uri:s},exports:a,require:n};i[s]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2c1c19f25e6c4cb267cec507413d9474"},{url:"about/index.html",revision:"026b0e765a312f25e03e1acfc1567ea3"},{url:"archives/2021/12/index.html",revision:"d162ce181ad9b9ca6d7fd83173acfdf4"},{url:"archives/2021/index.html",revision:"d0eaa887d3e1a815eae806db1edbaf0a"},{url:"archives/index.html",revision:"89a9f673861b10c76f9bfe224ebcc440"},{url:"categories/index.html",revision:"029b22c79d9ab18f2c5438b0710d7509"},{url:"categories/分类1/index.html",revision:"97de979dee4558209f99f46f8a1f0bb0"},{url:"categories/分类1/分类2/index.html",revision:"ff214b95a9b062b18d8638a0bd31c36b"},{url:"css/copyright.css",revision:"5bf5f09b9d15b51a3c352030a3f8cf88"},{url:"css/index.css",revision:"e56c78622a76d974dbdf96cc1261379c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"homepage/index.html",revision:"4285a4d4c1dc5afac552cd00f83d2405"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"4a5525f5394ccc3cf92a978fe755ff5a"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"de3a89a93ebb0ccbd8047b28b66901e8"},{url:"messageboard/index.html",revision:"ffd6099018177fc9f2e1570e98309656"},{url:"myself/index.html",revision:"c265ab0bfdc655b57c5040d6cfbff94c"},{url:"posts/16107/index.html",revision:"6b529b604c6a841de6b8332d07d268c5"},{url:"posts/62946/index.html",revision:"4319e1a1b3727402d5abc536254e195e"},{url:"tags/index.html",revision:"a249563b3a568ca975699ce3deaf6b21"},{url:"tags/spring/index.html",revision:"1916e2ce5734b094ecacea313f0fb871"},{url:"tags/博客建站/index.html",revision:"7fe058b1b72ee6bf2d6fdacd237738fd"},{url:"timeline/index.html",revision:"fb55396253b53e6dadf93ee85112d935"}],{}),e.registerRoute(/^https:\/\/cjam\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
