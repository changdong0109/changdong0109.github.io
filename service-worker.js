if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),f={module:{uri:s},exports:a,require:n};i[s]=Promise.all(d.map((e=>f[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-d4c5e7e1"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"fecb9b5cb0108b5e064cd2d69466de4e"},{url:"about/index.html",revision:"1c410c5436894e0afbcc30d859596b89"},{url:"archives/2021/12/index.html",revision:"e20f1a3fd065b7443f4a0457f59085f0"},{url:"archives/2021/index.html",revision:"df582b664bb5133fc98dc4837ccec51a"},{url:"archives/index.html",revision:"67cbae996c8dac402f55b47f3ca60fcb"},{url:"categories/index.html",revision:"cb49bb5301c35c2e0095847a6a825cec"},{url:"categories/分类1/index.html",revision:"4cfa2cf87c17eddff4b7344c088fec8b"},{url:"categories/分类1/分类2/index.html",revision:"0782e3da07ae8790bab90c3a6fa63ca3"},{url:"css/copyright.css",revision:"5bf5f09b9d15b51a3c352030a3f8cf88"},{url:"css/index.css",revision:"e56c78622a76d974dbdf96cc1261379c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"homepage/index.html",revision:"8bf9ebc63ef8853b8f369643c5d42bcb"},{url:"images/first.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/index_img.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/secend.png",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/touxiang.jpg",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"7a74b5941bb3c809460183d5e9280e56"},{url:"js/main.js",revision:"240e062def7897dd4c03a12bf07fdc65"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"33b3c0e197c029d5b198059220bbd5ab"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"553eaad6af4fe6711ac6aa416bc1fa8d"},{url:"messageboard/index.html",revision:"519da5c3f41fbbb5dcf9220a1ed3496e"},{url:"myself/index.html",revision:"f69aff2ac4c7ab72ac54432aa486514f"},{url:"posts/16107/index.html",revision:"1a25456e3ac19f3aa9cf77af0374f64b"},{url:"posts/62946/index.html",revision:"3afbbde2a37c2127a5868c8d77e37321"},{url:"tags/index.html",revision:"e78e8ae119fc6c5799c56076f5363e3d"},{url:"tags/spring/index.html",revision:"de8e4cbf62ac3109f9a364baa0a452d0"},{url:"tags/博客建站/index.html",revision:"a30b06776036cabc0f5d2d593c6ea133"},{url:"timeline/index.html",revision:"c947d8515861ef6adda7a6c41fc5c223"}],{}),e.registerRoute(/^https:\/\/cjam\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
