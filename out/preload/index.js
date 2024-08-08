"use strict";const l=require("electron"),f=4,d="extension",y="liteloader-napcatcore-template",p="iteloader-napcatcore-template",m="LiteLoaderQQNT的插件模板",h="0.1.0",w=[{name:"Nyaruhodo",link:"https://github.com/nyaruhodoo"}],C=[],x=["win32","linux","darwin"],j={renderer:"./out/renderer/index.js",main:"./out/main/index.js",preload:"./out/preload/index.js"},r={manifest_version:f,type:d,name:y,slug:p,description:m,version:h,authors:w,dependencies:C,platform:x,injects:j},u={test:!1};class s{static async initConfig(){const t=await LiteLoader.api.config.get(r.slug,u),n=this.mergeConfig(t,u);return this.updateConfig(n),n}static async updateConfig(t){await LiteLoader.api.config.set(r.slug,t),this.log("Config已更新",JSON.stringify(t))}static mergeConfig(t,n){const e=structuredClone(n);for(const[o,i]of Object.entries(t))if(Object.hasOwn(e,o)&&Object.prototype.toString.call(i)===Object.prototype.toString.call(e[o])){if(Array.isArray(i)){e[o]=[...new Set([...i,...e[o]])];continue}if(typeof i=="object"&&i){e[o]=this.mergeConfig(i,e[o]);continue}e[o]=i}return e}static{this.updateEventName=`${r.slug}ConfigUpdate`}static log(...t){console.log(`${r.slug}:`,...t)}static randomInteger(t,n){const e=t+Math.random()*(n+1-t);return Math.floor(e)}static wait(t){if(!(t<=0))return new Promise(n=>setTimeout(n,t))}static createDeepProxy(t,n){for(const e in t)typeof t[e]=="object"&&t[e]&&(t[e]=s.createDeepProxy(t[e],n));return new Proxy(t,n)}static getProperty(t,n){let e=t;const o=n.split(".");for(;o.length;){const i=o.shift();if(!i)return;e=e[i]}return e}static setProperty(t,n,e){let o=t;const i=n.split("."),a=i.pop();if(a){for(;i.length;){const c=i.shift();if(!c)return;o=o[c]}return o[a]=e}}}const k={configUpdate(g){l.ipcRenderer.send(s.updateEventName,g)}};l.contextBridge.exposeInMainWorld(p,k);