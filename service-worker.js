if(!self.define){let e,t={};const o=(o,s)=>(o=new URL(o+".js",s).href,t[o]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=t,document.head.appendChild(e)}else e=o,importScripts(o),t()})).then((()=>{let e=t[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(s,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let c={};const i=e=>o(e,r),f={module:{uri:r},exports:c,require:i};t[r]=Promise.all(s.map((e=>f[e]||i(e)))).then((e=>(n(...e),c)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"workbox.txt",revision:"be3770e58ff7c7de5d68c58ef24d8428"}],{}),e.registerRoute(/\.(?:js|html|css|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/unpkg\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/[\w.-]+\.bytecdntp\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/mirrors\.sustech\.edu\.cn\/.*/,new e.CacheFirst,"GET")}));
