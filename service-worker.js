if(!self.define){let e,t={};const o=(o,n)=>(o=new URL(o+".js",n).href,t[o]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=t,document.head.appendChild(e)}else e=o,importScripts(o),t()})).then((()=>{let e=t[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(n,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(t[r])return;let i={};const c=e=>o(e,r),f={module:{uri:r},exports:i,require:c};t[r]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(s(...e),i)))}}define(["./workbox-8914ad39"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.registerRoute(/\.(?:js|html|css|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/unpkg\.com\/.*/,new e.CacheFirst,"GET"),e.registerRoute(/^https:\/\/cdnjs\.cloudflare\.com\/.*/,new e.CacheFirst,"GET")}));
