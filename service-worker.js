if(!self.define){let e,t={};const s=(s,n)=>(s=new URL(s+".js",n).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let c={};const i=e=>s(e,r),f={module:{uri:r},exports:c,require:i};t[r]=Promise.all(n.map((e=>f[e]||i(e)))).then((e=>(o(...e),c)))}}define(["./workbox-8914ad39"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.registerRoute(/\.(?:js|html|css|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/unpkg\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/[\w.-]+\.bytecdntp\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/mirrors\.sustech\.edu\.cn\/.*/,new e.CacheFirst,"GET")}));
