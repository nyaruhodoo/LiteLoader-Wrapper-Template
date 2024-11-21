"use strict";const k=require("node:events"),I=require("node:process"),M=require("node:util");class W{constructor(s,n,i={}){this.Wrapper=s,this.Session=n,this.config=i,this.wrapperEmitter=new k.EventEmitter,this.#e=new Map}#e;logFn({argArray:s,applyRet:n,key:i}){if(!this.config.log||typeof this.config.log!="boolean"&&!this.config.log.test(i))return;const l=this.config.logDepth,r={inspect(e){return M.inspect(e,{depth:l,colors:!0})},json(e){return JSON.stringify(e,null,2)}}[this.config.logType??"inspect"];if(console.log("-----------------------------------------------"),console.log(`${i} 被调用`),s.length&&console.log("参数: ",r(s)),n instanceof Promise)console.log("返回值为 Promise，请观察后续打印内容"),n.then(e=>{console.log(`${i} 返回值: `),console.log(r(e))},e=>{console.log(`${i} 返回值: `),console.log(r(e))});else if(console.log("返回值: ",r(n)),typeof n=="object"&&n){const e=Object.getOwnPropertyNames(n);e.length&&console.log("返回值 keys: ",r(e)),console.log("原型 keys: ",r(Object.getOwnPropertyNames(Object.getPrototypeOf(n))))}}hookInstance({instance:s,rootKey:n}){return new Proxy(s,{get:(i,l,p)=>{const r=Reflect.get(s,l,p);if(typeof r!="function")return r;const e=`${n}/${l}`;return(...o)=>{if(this.config.eventBlacklist?.some(t=>typeof t=="string"?e===t:t.test(e)))return;if(e.endsWith("Listener"))if(l.startsWith("add")){const t=this.#e.get(e);o[0]=this.hookInstance({instance:o[0],rootKey:e}),t?t.add(o[0]):this.#e.set(e,new Set([o[0]]))}else{const t=this.#e.get(e.replace("/remove","/add"));t&&t.delete(o[0])}o=this.config.eventInterceptors?.[e]?.(o)??o;let c=s[l](...o);if(c=this.config.eventInterceptors?.[`${e}:response`]?.({applyRet:c,params:o})??c,e.endsWith("Service")&&(c=this.hookInstance({instance:c,rootKey:e})),c instanceof Promise)c.then(t=>{const d={applyRet:t,params:o};this.wrapperEmitter.emit(e,d)},t=>{const d={applyRet:t,params:o};this.wrapperEmitter.emit(e,d)});else{const t={applyRet:c,params:o};this.wrapperEmitter.emit(e,t)}return this.logFn({argArray:o,applyRet:c,key:e}),c}}})}dispatchListener(s,n){const i=s.lastIndexOf("/"),l=s.slice(0,i),p=s.slice(i+1),r=this.#e.get(l);if(!r)throw new Error("监听器尚未绑定，请确认参数是否正确");return[...r].map(e=>{if(!e[p])throw new Error("未找到目标监听器");return e[p](...n)})}}const f=new W,x=(g={})=>{const{promise:s,resolve:n}=Promise.withResolvers();return f.config=g,I.dlopen=new Proxy(I.dlopen,{apply(i,l,p){const[,r]=p,e=Reflect.apply(i,l,p);if(r.includes("wrapper.node")){const o=p[0].exports,S=new Proxy(o,{get(c,t,d){const u=Reflect.get(o,t,d);return typeof u!="function"?u:new Proxy(function(){},{get(L,h,m){const a=Reflect.get(u,h,m);return typeof a!="function"?a:new Proxy(a,{apply(P,Q,N){const w=`${t}/${h}`,y=Reflect.apply(P,Q,N);if(f?.logFn({argArray:N,applyRet:y,key:w}),typeof y!="object")return y;const v=f.hookInstance({instance:y,rootKey:w});return w==="NodeIQQNTWrapperSession/create"&&(f.Session=v),v}})},construct(L,h,m){const a=Reflect.construct(u,h,m);return f?.logFn({key:t,applyRet:a,argArray:h}),f.hookInstance({instance:a,rootKey:t})}})}});f.Wrapper=p[0].exports=S}return e}}),f.wrapperEmitter.once("NodeIQQNTWrapperSession/create/getMsgService",()=>{n(f)}),s};var R=(g=>(g.sendLog="NodeIQQNTWrapperSession/create/getNodeMiscService/sendLog",g.onQRCodeLoginSucceed="NodeIKernelLoginService/get/addKernelLoginListener/onQRCodeLoginSucceed",g.onRecvMsg="NodeIQQNTWrapperSession/create/getMsgService/addKernelMsgListener/onRecvMsg",g.sendMsg="NodeIQQNTWrapperSession/create/getMsgService/sendMsg",g.fetchUnitedCommendConfig="NodeIQQNTWrapperSession/create/getUnitedConfigService/fetchUnitedCommendConfig",g))(R||{});(async()=>await x({log:/listener$/i,logDepth:null,eventBlacklist:[R.sendLog,/tianshu/i]}))();
