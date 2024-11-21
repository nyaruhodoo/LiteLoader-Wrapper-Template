var _i = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const W = _i.NODE_ENV !== "production" ? Object.freeze({}) : {}, _t = _i.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, Cr = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), un = (e) => e.startsWith("onUpdate:"), J = Object.assign, co = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Sr = Object.prototype.hasOwnProperty, H = (e, t) => Sr.call(e, t), P = Array.isArray, Et = (e) => vn(e) === "[object Map]", Tr = (e) => vn(e) === "[object Set]", $ = (e) => typeof e == "function", z = (e) => typeof e == "string", vt = (e) => typeof e == "symbol", q = (e) => e !== null && typeof e == "object", fo = (e) => (q(e) || $(e)) && $(e.then) && $(e.catch), $r = Object.prototype.toString, vn = (e) => $r.call(e), uo = (e) => vn(e).slice(8, -1), Pr = (e) => vn(e) === "[object Object]", ao = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, At = /* @__PURE__ */ Ke(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ir = /* @__PURE__ */ Ke(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), On = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ar = /-(\w)/g, Oe = On(
  (e) => e.replace(Ar, (t, n) => n ? n.toUpperCase() : "")
), Mr = /\B([A-Z])/g, tt = On(
  (e) => e.replace(Mr, "-$1").toLowerCase()
), Dn = On((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = On(
  (e) => e ? `on${Dn(e)}` : ""
), ct = (e, t) => !Object.is(e, t), Ct = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, an = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, Rr = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Fo;
const kt = () => Fo || (Fo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function po(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = z(o) ? Lr(o) : po(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (z(e) || q(e))
    return e;
}
const Fr = /;(?![^(]*\))/g, jr = /:([^]+)/, Hr = /\/\*[^]*?\*\//g;
function Lr(e) {
  const t = {};
  return e.replace(Hr, "").split(Fr).forEach((n) => {
    if (n) {
      const o = n.split(jr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ho(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const o = ho(e[n]);
      o && (t += o + " ");
    }
  else if (q(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ur = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Br = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Wr = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Kr = /* @__PURE__ */ Ke(Ur), kr = /* @__PURE__ */ Ke(Br), Gr = /* @__PURE__ */ Ke(Wr), qr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jr = /* @__PURE__ */ Ke(qr);
function Ei(e) {
  return !!e || e === "";
}
var G = {};
function Me(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let he;
class Yr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = he, !t && he && (this.index = (he.scopes || (he.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = he;
      try {
        return he = this, t();
      } finally {
        he = n;
      }
    } else G.NODE_ENV !== "production" && Me("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    he = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    he = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function zr() {
  return he;
}
let L;
const Mn = /* @__PURE__ */ new WeakSet();
class Ni {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, he && he.active && he.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Mn.has(this) && (Mn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, jo(this), vi(this);
    const t = L, n = De;
    L = this, De = !0;
    try {
      return this.fn();
    } finally {
      G.NODE_ENV !== "production" && L !== this && Me(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Oi(this), L = t, De = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        _o(t);
      this.deps = this.depsTail = void 0, jo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Mn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Gn(this) && this.run();
  }
  get dirty() {
    return Gn(this);
  }
}
let bi = 0, Mt, Rt;
function yi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Rt, Rt = e;
    return;
  }
  e.next = Mt, Mt = e;
}
function go() {
  bi++;
}
function mo() {
  if (--bi > 0)
    return;
  if (Rt) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Mt; ) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function vi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Oi(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), _o(o), Xr(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function Gn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Di(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Di(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ht))
    return;
  e.globalVersion = Ht;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Gn(e)) {
    e.flags &= -3;
    return;
  }
  const n = L, o = De;
  L = e, De = !0;
  try {
    vi(e);
    const i = e.fn(e._value);
    (t.version === 0 || ct(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    L = n, De = o, Oi(e), e.flags &= -3;
  }
}
function _o(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), G.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      _o(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let De = !0;
const xi = [];
function ke() {
  xi.push(De), De = !1;
}
function Ge() {
  const e = xi.pop();
  De = e === void 0 ? !0 : e;
}
function jo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = L;
    L = void 0;
    try {
      t();
    } finally {
      L = n;
    }
  }
}
let Ht = 0;
class Zr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class wi {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, G.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!L || !De || L === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== L)
      n = this.activeLink = new Zr(L, this), L.deps ? (n.prevDep = L.depsTail, L.depsTail.nextDep = n, L.depsTail = n) : L.deps = L.depsTail = n, Vi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = L.depsTail, n.nextDep = void 0, L.depsTail.nextDep = n, L.depsTail = n, L.deps === n && (L.deps = o);
    }
    return G.NODE_ENV !== "production" && L.onTrack && L.onTrack(
      J(
        {
          effect: L
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Ht++, this.notify(t);
  }
  notify(t) {
    go();
    try {
      if (G.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            J(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      mo();
    }
  }
}
function Vi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Vi(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), G.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const qn = /* @__PURE__ */ new WeakMap(), ft = Symbol(
  G.NODE_ENV !== "production" ? "Object iterate" : ""
), Jn = Symbol(
  G.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Lt = Symbol(
  G.NODE_ENV !== "production" ? "Array iterate" : ""
);
function X(e, t, n) {
  if (De && L) {
    let o = qn.get(e);
    o || qn.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new wi()), i.map = o, i.key = n), G.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function $e(e, t, n, o, i, r) {
  const s = qn.get(e);
  if (!s) {
    Ht++;
    return;
  }
  const c = (u) => {
    u && (G.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : u.trigger());
  };
  if (go(), t === "clear")
    s.forEach(c);
  else {
    const u = P(e), h = u && ao(n);
    if (u && n === "length") {
      const p = Number(o);
      s.forEach((a, _) => {
        (_ === "length" || _ === Lt || !vt(_) && _ >= p) && c(a);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && c(s.get(n)), h && c(s.get(Lt)), t) {
        case "add":
          u ? h && c(s.get("length")) : (c(s.get(ft)), Et(e) && c(s.get(Jn)));
          break;
        case "delete":
          u || (c(s.get(ft)), Et(e) && c(s.get(Jn)));
          break;
        case "set":
          Et(e) && c(s.get(ft));
          break;
      }
  }
  mo();
}
function gt(e) {
  const t = M(e);
  return t === e ? t : (X(t, "iterate", Lt), Ee(e) ? t : t.map(ge));
}
function Eo(e) {
  return X(e = M(e), "iterate", Lt), e;
}
const Qr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rn(this, Symbol.iterator, ge);
  },
  concat(...e) {
    return gt(this).concat(
      ...e.map((t) => P(t) ? gt(t) : t)
    );
  },
  entries() {
    return Rn(this, "entries", (e) => (e[1] = ge(e[1]), e));
  },
  every(e, t) {
    return je(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return je(this, "filter", e, t, (n) => n.map(ge), arguments);
  },
  find(e, t) {
    return je(this, "find", e, t, ge, arguments);
  },
  findIndex(e, t) {
    return je(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return je(this, "findLast", e, t, ge, arguments);
  },
  findLastIndex(e, t) {
    return je(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return je(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Fn(this, "includes", e);
  },
  indexOf(...e) {
    return Fn(this, "indexOf", e);
  },
  join(e) {
    return gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Fn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return je(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return St(this, "pop");
  },
  push(...e) {
    return St(this, "push", e);
  },
  reduce(e, ...t) {
    return Ho(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ho(this, "reduceRight", e, t);
  },
  shift() {
    return St(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return je(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return St(this, "splice", e);
  },
  toReversed() {
    return gt(this).toReversed();
  },
  toSorted(e) {
    return gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return St(this, "unshift", e);
  },
  values() {
    return Rn(this, "values", ge);
  }
};
function Rn(e, t, n) {
  const o = Eo(e), i = o[t]();
  return o !== e && !Ee(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = n(r.value)), r;
  }), i;
}
const es = Array.prototype;
function je(e, t, n, o, i, r) {
  const s = Eo(e), c = s !== e && !Ee(e), u = s[t];
  if (u !== es[t]) {
    const a = u.apply(e, r);
    return c ? ge(a) : a;
  }
  let h = n;
  s !== e && (c ? h = function(a, _) {
    return n.call(this, ge(a), _, e);
  } : n.length > 2 && (h = function(a, _) {
    return n.call(this, a, _, e);
  }));
  const p = u.call(s, h, o);
  return c && i ? i(p) : p;
}
function Ho(e, t, n, o) {
  const i = Eo(e);
  let r = n;
  return i !== e && (Ee(e) ? n.length > 3 && (r = function(s, c, u) {
    return n.call(this, s, c, u, e);
  }) : r = function(s, c, u) {
    return n.call(this, s, ge(c), u, e);
  }), i[t](r, ...o);
}
function Fn(e, t, n) {
  const o = M(e);
  X(o, "iterate", Lt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && dn(n[0]) ? (n[0] = M(n[0]), o[t](...n)) : i;
}
function St(e, t, n = []) {
  ke(), go();
  const o = M(e)[t].apply(e, n);
  return mo(), Ge(), o;
}
const ts = /* @__PURE__ */ Ke("__proto__,__v_isRef,__isVue"), Ci = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(vt)
);
function ns(e) {
  vt(e) || (e = String(e));
  const t = M(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class Si {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (i ? r ? Mi : Ai : r ? Ii : Pi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = P(t);
    if (!i) {
      let u;
      if (s && (u = Qr[n]))
        return u;
      if (n === "hasOwnProperty")
        return ns;
    }
    const c = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Q(t) ? t : o
    );
    return (vt(n) ? Ci.has(n) : ts(n)) || (i || X(t, "get", n), r) ? c : Q(c) ? s && ao(n) ? c : c.value : q(c) ? i ? Ri(c) : No(c) : c;
  }
}
class Ti extends Si {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const u = nt(r);
      if (!Ee(o) && !nt(o) && (r = M(r), o = M(o)), !P(t) && Q(r) && !Q(o))
        return u ? !1 : (r.value = o, !0);
    }
    const s = P(t) && ao(n) ? Number(n) < t.length : H(t, n), c = Reflect.set(
      t,
      n,
      o,
      Q(t) ? t : i
    );
    return t === M(i) && (s ? ct(o, r) && $e(t, "set", n, o, r) : $e(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = H(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && $e(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!vt(n) || !Ci.has(n)) && X(t, "has", n), o;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      P(t) ? "length" : ft
    ), Reflect.ownKeys(t);
  }
}
class $i extends Si {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return G.NODE_ENV !== "production" && Me(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return G.NODE_ENV !== "production" && Me(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const os = /* @__PURE__ */ new Ti(), is = /* @__PURE__ */ new $i(), rs = /* @__PURE__ */ new Ti(!0), ss = /* @__PURE__ */ new $i(!0), Yn = (e) => e, Zt = (e) => Reflect.getPrototypeOf(e);
function ls(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = M(i), s = Et(r), c = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, h = i[e](...o), p = n ? Yn : t ? zn : ge;
    return !t && X(
      r,
      "iterate",
      u ? Jn : ft
    ), {
      // iterator protocol
      next() {
        const { value: a, done: _ } = h.next();
        return _ ? { value: a, done: _ } : {
          value: c ? [p(a[0]), p(a[1])] : p(a),
          done: _
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Qt(e) {
  return function(...t) {
    if (G.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Me(
        `${Dn(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function cs(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = M(r), c = M(i);
      e || (ct(i, c) && X(s, "get", i), X(s, "get", c));
      const { has: u } = Zt(s), h = t ? Yn : e ? zn : ge;
      if (u.call(s, i))
        return h(r.get(i));
      if (u.call(s, c))
        return h(r.get(c));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && X(M(i), "iterate", ft), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, s = M(r), c = M(i);
      return e || (ct(i, c) && X(s, "has", i), X(s, "has", c)), i === c ? r.has(i) : r.has(i) || r.has(c);
    },
    forEach(i, r) {
      const s = this, c = s.__v_raw, u = M(c), h = t ? Yn : e ? zn : ge;
      return !e && X(u, "iterate", ft), c.forEach((p, a) => i.call(r, h(p), h(a), s));
    }
  };
  return J(
    n,
    e ? {
      add: Qt("add"),
      set: Qt("set"),
      delete: Qt("delete"),
      clear: Qt("clear")
    } : {
      add(i) {
        !t && !Ee(i) && !nt(i) && (i = M(i));
        const r = M(this);
        return Zt(r).has.call(r, i) || (r.add(i), $e(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !Ee(r) && !nt(r) && (r = M(r));
        const s = M(this), { has: c, get: u } = Zt(s);
        let h = c.call(s, i);
        h ? G.NODE_ENV !== "production" && Lo(s, c, i) : (i = M(i), h = c.call(s, i));
        const p = u.call(s, i);
        return s.set(i, r), h ? ct(r, p) && $e(s, "set", i, r, p) : $e(s, "add", i, r), this;
      },
      delete(i) {
        const r = M(this), { has: s, get: c } = Zt(r);
        let u = s.call(r, i);
        u ? G.NODE_ENV !== "production" && Lo(r, s, i) : (i = M(i), u = s.call(r, i));
        const h = c ? c.call(r, i) : void 0, p = r.delete(i);
        return u && $e(r, "delete", i, void 0, h), p;
      },
      clear() {
        const i = M(this), r = i.size !== 0, s = G.NODE_ENV !== "production" ? Et(i) ? new Map(i) : new Set(i) : void 0, c = i.clear();
        return r && $e(
          i,
          "clear",
          void 0,
          void 0,
          s
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = ls(i, e, t);
  }), n;
}
function xn(e, t) {
  const n = cs(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    H(n, i) && i in o ? n : o,
    i,
    r
  );
}
const fs = {
  get: /* @__PURE__ */ xn(!1, !1)
}, us = {
  get: /* @__PURE__ */ xn(!1, !0)
}, as = {
  get: /* @__PURE__ */ xn(!0, !1)
}, ds = {
  get: /* @__PURE__ */ xn(!0, !0)
};
function Lo(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const i = uo(e);
    Me(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Pi = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ new WeakMap();
function ps(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function hs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ps(uo(e));
}
function No(e) {
  return nt(e) ? e : wn(
    e,
    !1,
    os,
    fs,
    Pi
  );
}
function gs(e) {
  return wn(
    e,
    !1,
    rs,
    us,
    Ii
  );
}
function Ri(e) {
  return wn(
    e,
    !0,
    is,
    as,
    Ai
  );
}
function Ie(e) {
  return wn(
    e,
    !0,
    ss,
    ds,
    Mi
  );
}
function wn(e, t, n, o, i) {
  if (!q(e))
    return G.NODE_ENV !== "production" && Me(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const s = hs(e);
  if (s === 0)
    return e;
  const c = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, c), c;
}
function Nt(e) {
  return nt(e) ? Nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function nt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ee(e) {
  return !!(e && e.__v_isShallow);
}
function dn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function ms(e) {
  return !H(e, "__v_skip") && Object.isExtensible(e) && an(e, "__v_skip", !0), e;
}
const ge = (e) => q(e) ? No(e) : e, zn = (e) => q(e) ? Ri(e) : e;
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _s(e) {
  return Q(e) ? e.value : e;
}
const Es = {
  get: (e, t, n) => t === "__v_raw" ? e : _s(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return Q(i) && !Q(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Fi(e) {
  return Nt(e) ? e : new Proxy(e, Es);
}
class Ns {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new wi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ht - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    L !== this)
      return yi(this, !0), !0;
  }
  get value() {
    const t = G.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Di(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : G.NODE_ENV !== "production" && Me("Write operation failed: computed value is readonly");
  }
}
function bs(e, t, n = !1) {
  let o, i;
  $(e) ? o = e : (o = e.get, i = e.set);
  const r = new Ns(o, i, n);
  return G.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const en = {}, pn = /* @__PURE__ */ new WeakMap();
let lt;
function ys(e, t = !1, n = lt) {
  if (n) {
    let o = pn.get(n);
    o || pn.set(n, o = []), o.push(e);
  } else G.NODE_ENV !== "production" && !t && Me(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function vs(e, t, n = W) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: c, call: u } = n, h = (C) => {
    (n.onWarn || Me)(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (C) => i ? C : Ee(C) || i === !1 || i === 0 ? Qe(C, 1) : Qe(C);
  let a, _, x, S, A = !1, ne = !1;
  if (Q(e) ? (_ = () => e.value, A = Ee(e)) : Nt(e) ? (_ = () => p(e), A = !0) : P(e) ? (ne = !0, A = e.some((C) => Nt(C) || Ee(C)), _ = () => e.map((C) => {
    if (Q(C))
      return C.value;
    if (Nt(C))
      return p(C);
    if ($(C))
      return u ? u(C, 2) : C();
    G.NODE_ENV !== "production" && h(C);
  })) : $(e) ? t ? _ = u ? () => u(e, 2) : e : _ = () => {
    if (x) {
      ke();
      try {
        x();
      } finally {
        Ge();
      }
    }
    const C = lt;
    lt = a;
    try {
      return u ? u(e, 3, [S]) : e(S);
    } finally {
      lt = C;
    }
  } : (_ = Z, G.NODE_ENV !== "production" && h(e)), t && i) {
    const C = _, ee = i === !0 ? 1 / 0 : i;
    _ = () => Qe(C(), ee);
  }
  const K = zr(), Y = () => {
    a.stop(), K && K.active && co(K.effects, a);
  };
  if (r && t) {
    const C = t;
    t = (...ee) => {
      C(...ee), Y();
    };
  }
  let U = ne ? new Array(e.length).fill(en) : en;
  const ue = (C) => {
    if (!(!(a.flags & 1) || !a.dirty && !C))
      if (t) {
        const ee = a.run();
        if (i || A || (ne ? ee.some((Ne, oe) => ct(Ne, U[oe])) : ct(ee, U))) {
          x && x();
          const Ne = lt;
          lt = a;
          try {
            const oe = [
              ee,
              // pass undefined as the old value when it's changed for the first time
              U === en ? void 0 : ne && U[0] === en ? [] : U,
              S
            ];
            u ? u(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            ), U = ee;
          } finally {
            lt = Ne;
          }
        }
      } else
        a.run();
  };
  return c && c(ue), a = new Ni(_), a.scheduler = s ? () => s(ue, !1) : ue, S = (C) => ys(C, !1, a), x = a.onStop = () => {
    const C = pn.get(a);
    if (C) {
      if (u)
        u(C, 4);
      else
        for (const ee of C) ee();
      pn.delete(a);
    }
  }, G.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? ue(!0) : U = a.run() : s ? s(ue.bind(null, !0), !0) : a.run(), Y.pause = a.pause.bind(a), Y.resume = a.resume.bind(a), Y.stop = Y, Y;
}
function Qe(e, t = 1 / 0, n) {
  if (t <= 0 || !q(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Q(e))
    Qe(e.value, t, n);
  else if (P(e))
    for (let o = 0; o < e.length; o++)
      Qe(e[o], t, n);
  else if (Tr(e) || Et(e))
    e.forEach((o) => {
      Qe(o, t, n);
    });
  else if (Pr(e)) {
    for (const o in e)
      Qe(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Qe(e[o], t, n);
  }
  return e;
}
var d = {};
const ut = [];
function tn(e) {
  ut.push(e);
}
function nn() {
  ut.pop();
}
let jn = !1;
function O(e, ...t) {
  if (jn) return;
  jn = !0, ke();
  const n = ut.length ? ut[ut.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Os();
  if (o)
    Ot(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var s, c;
          return (c = (s = r.toString) == null ? void 0 : s.call(r)) != null ? c : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${$n(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...Ds(i)), console.warn(...r);
  }
  Ge(), jn = !1;
}
function Os() {
  let e = ut[ut.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Ds(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...xs(n));
  }), t;
}
function xs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${$n(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...ws(e.props), r] : [i + r];
}
function ws(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ji(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ji(e, t, n) {
  return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Q(t) ? (t = ji(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const bo = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Ot(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    Gt(i, t, n);
  }
}
function Re(e, t, n, o) {
  if ($(e)) {
    const i = Ot(e, t, n, o);
    return i && fo(i) && i.catch((r) => {
      Gt(r, t, n);
    }), i;
  }
  if (P(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(Re(e[r], t, n, o));
    return i;
  } else d.NODE_ENV !== "production" && O(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Gt(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || W;
  if (t) {
    let c = t.parent;
    const u = t.proxy, h = d.NODE_ENV !== "production" ? bo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; c; ) {
      const p = c.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, h) === !1)
            return;
      }
      c = c.parent;
    }
    if (r) {
      ke(), Ot(r, null, 10, [
        e,
        u,
        h
      ]), Ge();
      return;
    }
  }
  Vs(e, n, i, o, s);
}
function Vs(e, t, n, o = !0, i = !1) {
  if (d.NODE_ENV !== "production") {
    const r = bo[t];
    if (n && tn(n), O(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && nn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const le = [];
let Se = -1;
const bt = [];
let Xe = null, mt = 0;
const Hi = /* @__PURE__ */ Promise.resolve();
let hn = null;
const Cs = 100;
function Ss(e) {
  const t = hn || Hi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ts(e) {
  let t = Se + 1, n = le.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = le[o], r = Ut(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Vn(e) {
  if (!(e.flags & 1)) {
    const t = Ut(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ut(n) ? le.push(e) : le.splice(Ts(t), 0, e), e.flags |= 1, Li();
  }
}
function Li() {
  hn || (hn = Hi.then(Wi));
}
function Ui(e) {
  P(e) ? bt.push(...e) : Xe && e.id === -1 ? Xe.splice(mt + 1, 0, e) : e.flags & 1 || (bt.push(e), e.flags |= 1), Li();
}
function Uo(e, t, n = Se + 1) {
  for (d.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < le.length; n++) {
    const o = le[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || d.NODE_ENV !== "production" && yo(t, o))
        continue;
      le.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Bi(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort(
      (n, o) => Ut(n) - Ut(o)
    );
    if (bt.length = 0, Xe) {
      Xe.push(...t);
      return;
    }
    for (Xe = t, d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), mt = 0; mt < Xe.length; mt++) {
      const n = Xe[mt];
      d.NODE_ENV !== "production" && yo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Xe = null, mt = 0;
  }
}
const Ut = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Wi(e) {
  d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = d.NODE_ENV !== "production" ? (n) => yo(e, n) : Z;
  try {
    for (Se = 0; Se < le.length; Se++) {
      const n = le[Se];
      if (n && !(n.flags & 8)) {
        if (d.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ot(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Se < le.length; Se++) {
      const n = le[Se];
      n && (n.flags &= -2);
    }
    Se = -1, le.length = 0, Bi(e), hn = null, (le.length || bt.length) && Wi(e);
  }
}
function yo(e, t) {
  const n = e.get(t) || 0;
  if (n > Cs) {
    const o = t.i, i = o && Or(o.type);
    return Gt(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ae = !1;
const on = /* @__PURE__ */ new Map();
d.NODE_ENV !== "production" && (kt().__VUE_HMR_RUNTIME__ = {
  createRecord: Hn(Ki),
  rerender: Hn(Is),
  reload: Hn(As)
});
const pt = /* @__PURE__ */ new Map();
function $s(e) {
  const t = e.type.__hmrId;
  let n = pt.get(t);
  n || (Ki(t, e.type), n = pt.get(t)), n.instances.add(e);
}
function Ps(e) {
  pt.get(e.type.__hmrId).instances.delete(e);
}
function Ki(e, t) {
  return pt.has(e) ? !1 : (pt.set(e, {
    initialDef: gn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function gn(e) {
  return Dr(e) ? e.__vccOpts : e;
}
function Is(e, t) {
  const n = pt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, gn(o.type).render = t), o.renderCache = [], Ae = !0, o.update(), Ae = !1;
  }));
}
function As(e, t) {
  const n = pt.get(e);
  if (!n) return;
  t = gn(t), Bo(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = gn(r.type);
    let c = on.get(s);
    c || (s !== n.initialDef && Bo(s, t), on.set(s, c = /* @__PURE__ */ new Set())), c.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (c.add(r), r.ceReload(t.styles), c.delete(r)) : r.parent ? Vn(() => {
      Ae = !0, r.parent.update(), Ae = !1, c.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  Ui(() => {
    on.clear();
  });
}
function Bo(e, t) {
  J(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Hn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Pe, Pt = [], Xn = !1;
function qt(e, ...t) {
  Pe ? Pe.emit(e, ...t) : Xn || Pt.push({ event: e, args: t });
}
function ki(e, t) {
  var n, o;
  Pe = e, Pe ? (Pe.enabled = !0, Pt.forEach(({ event: i, args: r }) => Pe.emit(i, ...r)), Pt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    ki(r, t);
  }), setTimeout(() => {
    Pe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xn = !0, Pt = []);
  }, 3e3)) : (Xn = !0, Pt = []);
}
function Ms(e, t) {
  qt("app:init", e, t, {
    Fragment: Te,
    Text: Jt,
    Comment: xe,
    Static: ln
  });
}
function Rs(e) {
  qt("app:unmount", e);
}
const Fs = /* @__PURE__ */ vo(
  "component:added"
  /* COMPONENT_ADDED */
), Gi = /* @__PURE__ */ vo(
  "component:updated"
  /* COMPONENT_UPDATED */
), js = /* @__PURE__ */ vo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Hs = (e) => {
  Pe && typeof Pe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Pe.cleanupBuffer(e) && js(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function vo(e) {
  return (t) => {
    qt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ls = /* @__PURE__ */ qi(
  "perf:start"
  /* PERFORMANCE_START */
), Us = /* @__PURE__ */ qi(
  "perf:end"
  /* PERFORMANCE_END */
);
function qi(e) {
  return (t, n, o) => {
    qt(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Bs(e, t, n) {
  qt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let me = null, Ji = null;
function mn(e) {
  const t = me;
  return me = e, Ji = e && e.type.__scopeId || null, t;
}
function Ws(e, t = me, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && Qo(-1);
    const r = mn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      mn(r), o._d && Qo(1);
    }
    return d.NODE_ENV !== "production" && Gi(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Yi(e) {
  Ir(e) && O("Do not use built-in directive ids as custom directive id: " + e);
}
function it(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const c = i[s];
    r && (c.oldValue = r[s].value);
    let u = c.dir[o];
    u && (ke(), Re(u, n, 8, [
      e.el,
      c,
      e,
      t
    ]), Ge());
  }
}
const Ks = Symbol("_vte"), ks = (e) => e.__isTeleport;
function Oo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Oo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Gs(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    J({ name: e.name }, t, { setup: e })
  ) : e;
}
function zi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const qs = /* @__PURE__ */ new WeakSet();
function _n(e, t, n, o, i = !1) {
  if (P(e)) {
    e.forEach(
      (S, A) => _n(
        S,
        t && (P(t) ? t[A] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Ft(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && _n(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? To(o.component) : o.el, s = i ? null : r, { i: c, r: u } = e;
  if (d.NODE_ENV !== "production" && !c) {
    O(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, p = c.refs === W ? c.refs = {} : c.refs, a = c.setupState, _ = M(a), x = a === W ? () => !1 : (S) => d.NODE_ENV !== "production" && (H(_, S) && !Q(_[S]) && O(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), qs.has(_[S])) ? !1 : H(_, S);
  if (h != null && h !== u && (z(h) ? (p[h] = null, x(h) && (a[h] = null)) : Q(h) && (h.value = null)), $(u))
    Ot(u, c, 12, [s, p]);
  else {
    const S = z(u), A = Q(u);
    if (S || A) {
      const ne = () => {
        if (e.f) {
          const K = S ? x(u) ? a[u] : p[u] : u.value;
          i ? P(K) && co(K, r) : P(K) ? K.includes(r) || K.push(r) : S ? (p[u] = [r], x(u) && (a[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else S ? (p[u] = s, x(u) && (a[u] = s)) : A ? (u.value = s, e.k && (p[e.k] = s)) : d.NODE_ENV !== "production" && O("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (ne.id = -1, pe(ne, n)) : ne();
    } else d.NODE_ENV !== "production" && O("Invalid template ref type:", u, `(${typeof u})`);
  }
}
kt().requestIdleCallback;
kt().cancelIdleCallback;
const Ft = (e) => !!e.type.__asyncLoader, Do = (e) => e.type.__isKeepAlive;
function Js(e, t) {
  Xi(e, "a", t);
}
function Ys(e, t) {
  Xi(e, "da", t);
}
function Xi(e, t, n = te) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Cn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Do(i.parent.vnode) && zs(o, t, n, i), i = i.parent;
  }
}
function zs(e, t, n, o) {
  const i = Cn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Zi(() => {
    co(o[t], i);
  }, n);
}
function Cn(e, t, n = te, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      ke();
      const c = Yt(n), u = Re(t, n, e, s);
      return c(), Ge(), u;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (d.NODE_ENV !== "production") {
    const i = st(bo[e].replace(/ hook$/, ""));
    O(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const qe = (e) => (t, n = te) => {
  (!Wt || e === "sp") && Cn(e, (...o) => t(...o), n);
}, Xs = qe("bm"), Zs = qe("m"), Qs = qe(
  "bu"
), el = qe("u"), tl = qe(
  "bum"
), Zi = qe("um"), nl = qe(
  "sp"
), ol = qe("rtg"), il = qe("rtc");
function rl(e, t = te) {
  Cn("ec", e, t);
}
const sl = Symbol.for("v-ndc"), Zn = (e) => e ? yr(e) ? To(e) : Zn(e.parent) : null, at = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ J(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => d.NODE_ENV !== "production" ? Ie(e.props) : e.props,
    $attrs: (e) => d.NODE_ENV !== "production" ? Ie(e.attrs) : e.attrs,
    $slots: (e) => d.NODE_ENV !== "production" ? Ie(e.slots) : e.slots,
    $refs: (e) => d.NODE_ENV !== "production" ? Ie(e.refs) : e.refs,
    $parent: (e) => Zn(e.parent),
    $root: (e) => Zn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ss.bind(e.proxy)),
    $watch: (e) => Hl.bind(e)
  })
), xo = (e) => e === "_" || e === "$", Ln = (e, t) => e !== W && !e.__isScriptSetup && H(e, t), Qi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: c, appContext: u } = e;
    if (d.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const x = s[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Ln(o, t))
          return s[t] = 1, o[t];
        if (i !== W && H(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && H(h, t)
        )
          return s[t] = 3, r[t];
        if (n !== W && H(n, t))
          return s[t] = 4, n[t];
        Qn && (s[t] = 0);
      }
    }
    const p = at[t];
    let a, _;
    if (p)
      return t === "$attrs" ? (X(e.attrs, "get", ""), d.NODE_ENV !== "production" && bn()) : d.NODE_ENV !== "production" && t === "$slots" && X(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = c.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== W && H(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      _ = u.config.globalProperties, H(_, t)
    )
      return _[t];
    d.NODE_ENV !== "production" && me && (!z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== W && xo(t[0]) && H(i, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === me && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return Ln(i, t) ? (i[t] = n, !0) : d.NODE_ENV !== "production" && i.__isScriptSetup && H(i, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && H(o, t) ? (o[t] = n, !0) : H(e.props, t) ? (d.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (d.NODE_ENV !== "production" && O(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (d.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, propsOptions: r }
  }, s) {
    let c;
    return !!n[s] || e !== W && H(e, s) || Ln(t, s) || (c = r[0]) && H(c, s) || H(o, s) || H(at, s) || H(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : H(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
d.NODE_ENV !== "production" && (Qi.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ll(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(at).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => at[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), t;
}
function cl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: Z
    });
  });
}
function fl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (xo(o[0])) {
        O(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: Z
      });
    }
  });
}
function Wo(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ul() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? O(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Qn = !0;
function al(e) {
  const t = wo(e), n = e.proxy, o = e.ctx;
  Qn = !1, t.beforeCreate && Ko(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: c,
    provide: u,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: _,
    beforeUpdate: x,
    updated: S,
    activated: A,
    deactivated: ne,
    beforeDestroy: K,
    beforeUnmount: Y,
    destroyed: U,
    unmounted: ue,
    render: C,
    renderTracked: ee,
    renderTriggered: Ne,
    errorCaptured: oe,
    serverPrefetch: ce,
    // public API
    expose: Fe,
    inheritAttrs: Je,
    // assets
    components: be,
    directives: zt,
    filters: $o
  } = t, Ye = d.NODE_ENV !== "production" ? ul() : null;
  if (d.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const R in F)
        Ye("Props", R);
  }
  if (h && dl(h, o, Ye), s)
    for (const F in s) {
      const R = s[F];
      $(R) ? (d.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: R.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = R.bind(n), d.NODE_ENV !== "production" && Ye("Methods", F)) : d.NODE_ENV !== "production" && O(
        `Method "${F}" has type "${typeof R}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    d.NODE_ENV !== "production" && !$(i) && O(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = i.call(n, n);
    if (d.NODE_ENV !== "production" && fo(F) && O(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !q(F))
      d.NODE_ENV !== "production" && O("data() should return an object.");
    else if (e.data = No(F), d.NODE_ENV !== "production")
      for (const R in F)
        Ye("Data", R), xo(R[0]) || Object.defineProperty(o, R, {
          configurable: !0,
          enumerable: !0,
          get: () => F[R],
          set: Z
        });
  }
  if (Qn = !0, r)
    for (const F in r) {
      const R = r[F], we = $(R) ? R.bind(n, n) : $(R.get) ? R.get.bind(n, n) : Z;
      d.NODE_ENV !== "production" && we === Z && O(`Computed property "${F}" has no getter.`);
      const Pn = !$(R) && $(R.set) ? R.set.bind(n) : d.NODE_ENV !== "production" ? () => {
        O(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : Z, Dt = pc({
        get: we,
        set: Pn
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Dt.value,
        set: (ht) => Dt.value = ht
      }), d.NODE_ENV !== "production" && Ye("Computed", F);
    }
  if (c)
    for (const F in c)
      er(c[F], o, n, F);
  if (u) {
    const F = $(u) ? u.call(n) : u;
    Reflect.ownKeys(F).forEach((R) => {
      El(R, F[R]);
    });
  }
  p && Ko(p, e, "c");
  function fe(F, R) {
    P(R) ? R.forEach((we) => F(we.bind(n))) : R && F(R.bind(n));
  }
  if (fe(Xs, a), fe(Zs, _), fe(Qs, x), fe(el, S), fe(Js, A), fe(Ys, ne), fe(rl, oe), fe(il, ee), fe(ol, Ne), fe(tl, Y), fe(Zi, ue), fe(nl, ce), P(Fe))
    if (Fe.length) {
      const F = e.exposed || (e.exposed = {});
      Fe.forEach((R) => {
        Object.defineProperty(F, R, {
          get: () => n[R],
          set: (we) => n[R] = we
        });
      });
    } else e.exposed || (e.exposed = {});
  C && e.render === Z && (e.render = C), Je != null && (e.inheritAttrs = Je), be && (e.components = be), zt && (e.directives = zt), ce && zi(e);
}
function dl(e, t, n = Z) {
  P(e) && (e = eo(e));
  for (const o in e) {
    const i = e[o];
    let r;
    q(i) ? "default" in i ? r = rn(
      i.from || o,
      i.default,
      !0
    ) : r = rn(i.from || o) : r = rn(i), Q(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, d.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Ko(e, t, n) {
  Re(
    P(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function er(e, t, n, o) {
  let i = o.includes(".") ? pr(n, o) : () => n[o];
  if (z(e)) {
    const r = t[e];
    $(r) ? Bn(i, r) : d.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    Bn(i, e.bind(n));
  else if (q(e))
    if (P(e))
      e.forEach((r) => er(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? Bn(i, r, e) : d.NODE_ENV !== "production" && O(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else d.NODE_ENV !== "production" && O(`Invalid watch option: "${o}"`, e);
}
function wo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, c = r.get(t);
  let u;
  return c ? u = c : !i.length && !n && !o ? u = t : (u = {}, i.length && i.forEach(
    (h) => En(u, h, s, !0)
  ), En(u, t, s)), q(t) && r.set(t, u), u;
}
function En(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && En(e, r, n, !0), i && i.forEach(
    (s) => En(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      d.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = pl[s] || n && n[s];
      e[s] = c ? c(e[s], t[s]) : t[s];
    }
  return e;
}
const pl = {
  data: ko,
  props: Go,
  emits: Go,
  // objects
  methods: It,
  computed: It,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: It,
  directives: It,
  // watch
  watch: gl,
  // provide / inject
  provide: ko,
  inject: hl
};
function ko(e, t) {
  return t ? e ? function() {
    return J(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hl(e, t) {
  return It(eo(e), eo(t));
}
function eo(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function It(e, t) {
  return e ? J(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Go(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : J(
    /* @__PURE__ */ Object.create(null),
    Wo(e),
    Wo(t ?? {})
  ) : t;
}
function gl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = J(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = se(e[o], t[o]);
  return n;
}
function tr() {
  return {
    app: null,
    config: {
      isNativeTag: Cr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ml = 0;
function _l(e, t) {
  return function(o, i = null) {
    $(o) || (o = J({}, o)), i != null && !q(i) && (d.NODE_ENV !== "production" && O("root props passed to app.mount() must be an object."), i = null);
    const r = tr(), s = /* @__PURE__ */ new WeakSet(), c = [];
    let u = !1;
    const h = r.app = {
      _uid: ml++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: oi,
      get config() {
        return r.config;
      },
      set config(p) {
        d.NODE_ENV !== "production" && O(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return s.has(p) ? d.NODE_ENV !== "production" && O("Plugin has already been applied to target app.") : p && $(p.install) ? (s.add(p), p.install(h, ...a)) : $(p) ? (s.add(p), p(h, ...a)) : d.NODE_ENV !== "production" && O(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(p) {
        return r.mixins.includes(p) ? d.NODE_ENV !== "production" && O(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), h;
      },
      component(p, a) {
        return d.NODE_ENV !== "production" && ro(p, r.config), a ? (d.NODE_ENV !== "production" && r.components[p] && O(`Component "${p}" has already been registered in target app.`), r.components[p] = a, h) : r.components[p];
      },
      directive(p, a) {
        return d.NODE_ENV !== "production" && Yi(p), a ? (d.NODE_ENV !== "production" && r.directives[p] && O(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, h) : r.directives[p];
      },
      mount(p, a, _) {
        if (u)
          d.NODE_ENV !== "production" && O(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.NODE_ENV !== "production" && p.__vue_app__ && O(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const x = h._ceVNode || dt(o, i);
          return x.appContext = r, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), d.NODE_ENV !== "production" && (r.reload = () => {
            e(
              ot(x),
              p,
              _
            );
          }), a && t ? t(x, p) : e(x, p, _), u = !0, h._container = p, p.__vue_app__ = h, d.NODE_ENV !== "production" && (h._instance = x.component, Ms(h, oi)), To(x.component);
        }
      },
      onUnmount(p) {
        d.NODE_ENV !== "production" && typeof p != "function" && O(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), c.push(p);
      },
      unmount() {
        u ? (Re(
          c,
          h._instance,
          16
        ), e(null, h._container), d.NODE_ENV !== "production" && (h._instance = null, Rs(h)), delete h._container.__vue_app__) : d.NODE_ENV !== "production" && O("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return d.NODE_ENV !== "production" && p in r.provides && O(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), r.provides[p] = a, h;
      },
      runWithContext(p) {
        const a = yt;
        yt = h;
        try {
          return p();
        } finally {
          yt = a;
        }
      }
    };
    return h;
  };
}
let yt = null;
function El(e, t) {
  if (!te)
    d.NODE_ENV !== "production" && O("provide() can only be used inside setup().");
  else {
    let n = te.provides;
    const o = te.parent && te.parent.provides;
    o === n && (n = te.provides = Object.create(o)), n[e] = t;
  }
}
function rn(e, t, n = !1) {
  const o = te || me;
  if (o || yt) {
    const i = yt ? yt._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    d.NODE_ENV !== "production" && O(`injection "${String(e)}" not found.`);
  } else d.NODE_ENV !== "production" && O("inject() can only be used inside setup() or functional components.");
}
const nr = {}, or = () => Object.create(nr), ir = (e) => Object.getPrototypeOf(e) === nr;
function Nl(e, t, n, o = !1) {
  const i = {}, r = or();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), rr(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  d.NODE_ENV !== "production" && lr(t || {}, i, e), n ? e.props = o ? i : gs(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function bl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function yl(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, c = M(i), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(d.NODE_ENV !== "production" && bl(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let _ = p[a];
        if (Sn(e.emitsOptions, _))
          continue;
        const x = t[_];
        if (u)
          if (H(r, _))
            x !== r[_] && (r[_] = x, h = !0);
          else {
            const S = Oe(_);
            i[S] = to(
              u,
              c,
              S,
              x,
              e,
              !1
            );
          }
        else
          x !== r[_] && (r[_] = x, h = !0);
      }
    }
  } else {
    rr(e, t, i, r) && (h = !0);
    let p;
    for (const a in c)
      (!t || // for camelCase
      !H(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = tt(a)) === a || !H(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[a] = to(
        u,
        c,
        a,
        void 0,
        e,
        !0
      )) : delete i[a]);
    if (r !== c)
      for (const a in r)
        (!t || !H(t, a)) && (delete r[a], h = !0);
  }
  h && $e(e.attrs, "set", ""), d.NODE_ENV !== "production" && lr(t || {}, i, e);
}
function rr(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, c;
  if (t)
    for (let u in t) {
      if (At(u))
        continue;
      const h = t[u];
      let p;
      i && H(i, p = Oe(u)) ? !r || !r.includes(p) ? n[p] = h : (c || (c = {}))[p] = h : Sn(e.emitsOptions, u) || (!(u in o) || h !== o[u]) && (o[u] = h, s = !0);
    }
  if (r) {
    const u = M(n), h = c || W;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = to(
        i,
        u,
        a,
        h[a],
        e,
        !H(h, a)
      );
    }
  }
  return s;
}
function to(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const c = H(s, "default");
    if (c && o === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && $(u)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const p = Yt(i);
          o = h[n] = u.call(
            null,
            t
          ), p();
        }
      } else
        o = u;
      i.ce && i.ce._setProp(n, o);
    }
    s[
      0
      /* shouldCast */
    ] && (r && !c ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === tt(n)) && (o = !0));
  }
  return o;
}
const vl = /* @__PURE__ */ new WeakMap();
function sr(e, t, n = !1) {
  const o = n ? vl : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, c = [];
  let u = !1;
  if (!$(e)) {
    const p = (a) => {
      u = !0;
      const [_, x] = sr(a, t, !0);
      J(s, _), x && c.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return q(e) && o.set(e, _t), _t;
  if (P(r))
    for (let p = 0; p < r.length; p++) {
      d.NODE_ENV !== "production" && !z(r[p]) && O("props must be strings when using array syntax.", r[p]);
      const a = Oe(r[p]);
      qo(a) && (s[a] = W);
    }
  else if (r) {
    d.NODE_ENV !== "production" && !q(r) && O("invalid props options", r);
    for (const p in r) {
      const a = Oe(p);
      if (qo(a)) {
        const _ = r[p], x = s[a] = P(_) || $(_) ? { type: _ } : J({}, _), S = x.type;
        let A = !1, ne = !0;
        if (P(S))
          for (let K = 0; K < S.length; ++K) {
            const Y = S[K], U = $(Y) && Y.name;
            if (U === "Boolean") {
              A = !0;
              break;
            } else U === "String" && (ne = !1);
          }
        else
          A = $(S) && S.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = A, x[
          1
          /* shouldCastTrue */
        ] = ne, (A || H(x, "default")) && c.push(a);
      }
    }
  }
  const h = [s, c];
  return q(e) && o.set(e, h), h;
}
function qo(e) {
  return e[0] !== "$" && !At(e) ? !0 : (d.NODE_ENV !== "production" && O(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ol(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function lr(e, t, n) {
  const o = M(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => Oe(s));
  for (const s in i) {
    let c = i[s];
    c != null && Dl(
      s,
      o[s],
      c,
      d.NODE_ENV !== "production" ? Ie(o) : o,
      !r.includes(s)
    );
  }
}
function Dl(e, t, n, o, i) {
  const { type: r, required: s, validator: c, skipCheck: u } = n;
  if (s && i) {
    O('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !u) {
      let h = !1;
      const p = P(r) ? r : [r], a = [];
      for (let _ = 0; _ < p.length && !h; _++) {
        const { valid: x, expectedType: S } = wl(t, p[_]);
        a.push(S || ""), h = x;
      }
      if (!h) {
        O(Vl(e, t, a));
        return;
      }
    }
    c && !c(t, o) && O('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xl = /* @__PURE__ */ Ke(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function wl(e, t) {
  let n;
  const o = Ol(t);
  if (o === "null")
    n = e === null;
  else if (xl(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = q(e) : o === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Vl(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Dn).join(" | ")}`;
  const i = n[0], r = uo(t), s = Jo(t, i), c = Jo(t, r);
  return n.length === 1 && Yo(i) && !Cl(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, Yo(r) && (o += `with value ${c}.`), o;
}
function Jo(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Yo(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Cl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const cr = (e) => e[0] === "_" || e === "$stable", Vo = (e) => P(e) ? e.map(ve) : [ve(e)], Sl = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ws((...i) => (d.NODE_ENV !== "production" && te && (!n || n.root === te.root) && O(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Vo(t(...i))), n);
  return o._c = !1, o;
}, fr = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (cr(i)) continue;
    const r = e[i];
    if ($(r))
      t[i] = Sl(i, r, o);
    else if (r != null) {
      d.NODE_ENV !== "production" && O(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Vo(r);
      t[i] = () => s;
    }
  }
}, ur = (e, t) => {
  d.NODE_ENV !== "production" && !Do(e.vnode) && O(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Vo(t);
  e.slots.default = () => n;
}, no = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, Tl = (e, t, n) => {
  const o = e.slots = or();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (no(o, t, n), n && an(o, "_", i, !0)) : fr(t, o);
  } else t && ur(e, t);
}, $l = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = W;
  if (o.shapeFlag & 32) {
    const c = t._;
    c ? d.NODE_ENV !== "production" && Ae ? (no(i, t, n), $e(e, "set", "$slots")) : n && c === 1 ? r = !1 : no(i, t, n) : (r = !t.$stable, fr(t, i)), s = t;
  } else t && (ur(e, t), s = { default: 1 });
  if (r)
    for (const c in i)
      !cr(c) && s[c] == null && delete i[c];
};
let Tt, et;
function He(e, t) {
  e.appContext.config.performance && Nn() && et.mark(`vue-${t}-${e.uid}`), d.NODE_ENV !== "production" && Ls(e, t, Nn() ? et.now() : Date.now());
}
function Le(e, t) {
  if (e.appContext.config.performance && Nn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    et.mark(o), et.measure(
      `<${$n(e, e.type)}> ${t}`,
      n,
      o
    ), et.clearMarks(n), et.clearMarks(o);
  }
  d.NODE_ENV !== "production" && Us(e, t, Nn() ? et.now() : Date.now());
}
function Nn() {
  return Tt !== void 0 || (typeof window < "u" && window.performance ? (Tt = !0, et = window.performance) : Tt = !1), Tt;
}
function Pl() {
  const e = [];
  if (d.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const pe = Gl;
function Il(e) {
  return Al(e);
}
function Al(e, t) {
  Pl();
  const n = kt();
  n.__VUE__ = !0, d.NODE_ENV !== "production" && ki(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: c,
    createComment: u,
    setText: h,
    setElementText: p,
    parentNode: a,
    nextSibling: _,
    setScopeId: x = Z,
    insertStaticContent: S
  } = e, A = (l, f, g, N = null, m = null, E = null, D = void 0, v = null, y = d.NODE_ENV !== "production" && Ae ? !1 : !!f.dynamicChildren) => {
    if (l === f)
      return;
    l && !$t(l, f) && (N = Xt(l), ze(l, m, E, !0), l = null), f.patchFlag === -2 && (y = !1, f.dynamicChildren = null);
    const { type: b, ref: T, shapeFlag: w } = f;
    switch (b) {
      case Jt:
        ne(l, f, g, N);
        break;
      case xe:
        K(l, f, g, N);
        break;
      case ln:
        l == null ? Y(f, g, N, D) : d.NODE_ENV !== "production" && U(l, f, g, D);
        break;
      case Te:
        zt(
          l,
          f,
          g,
          N,
          m,
          E,
          D,
          v,
          y
        );
        break;
      default:
        w & 1 ? ee(
          l,
          f,
          g,
          N,
          m,
          E,
          D,
          v,
          y
        ) : w & 6 ? $o(
          l,
          f,
          g,
          N,
          m,
          E,
          D,
          v,
          y
        ) : w & 64 || w & 128 ? b.process(
          l,
          f,
          g,
          N,
          m,
          E,
          D,
          v,
          y,
          wt
        ) : d.NODE_ENV !== "production" && O("Invalid VNode type:", b, `(${typeof b})`);
    }
    T != null && m && _n(T, l && l.ref, E, f || l, !f);
  }, ne = (l, f, g, N) => {
    if (l == null)
      o(
        f.el = c(f.children),
        g,
        N
      );
    else {
      const m = f.el = l.el;
      f.children !== l.children && h(m, f.children);
    }
  }, K = (l, f, g, N) => {
    l == null ? o(
      f.el = u(f.children || ""),
      g,
      N
    ) : f.el = l.el;
  }, Y = (l, f, g, N) => {
    [l.el, l.anchor] = S(
      l.children,
      f,
      g,
      N,
      l.el,
      l.anchor
    );
  }, U = (l, f, g, N) => {
    if (f.children !== l.children) {
      const m = _(l.anchor);
      C(l), [f.el, f.anchor] = S(
        f.children,
        g,
        m,
        N
      );
    } else
      f.el = l.el, f.anchor = l.anchor;
  }, ue = ({ el: l, anchor: f }, g, N) => {
    let m;
    for (; l && l !== f; )
      m = _(l), o(l, g, N), l = m;
    o(f, g, N);
  }, C = ({ el: l, anchor: f }) => {
    let g;
    for (; l && l !== f; )
      g = _(l), i(l), l = g;
    i(f);
  }, ee = (l, f, g, N, m, E, D, v, y) => {
    f.type === "svg" ? D = "svg" : f.type === "math" && (D = "mathml"), l == null ? Ne(
      f,
      g,
      N,
      m,
      E,
      D,
      v,
      y
    ) : Fe(
      l,
      f,
      m,
      E,
      D,
      v,
      y
    );
  }, Ne = (l, f, g, N, m, E, D, v) => {
    let y, b;
    const { props: T, shapeFlag: w, transition: V, dirs: I } = l;
    if (y = l.el = s(
      l.type,
      E,
      T && T.is,
      T
    ), w & 8 ? p(y, l.children) : w & 16 && ce(
      l.children,
      y,
      null,
      N,
      m,
      Un(l, E),
      D,
      v
    ), I && it(l, null, N, "created"), oe(y, l, l.scopeId, D, N), T) {
      for (const k in T)
        k !== "value" && !At(k) && r(y, k, null, T[k], E, N);
      "value" in T && r(y, "value", null, T.value, E), (b = T.onVnodeBeforeMount) && Ce(b, N, l);
    }
    d.NODE_ENV !== "production" && (an(y, "__vnode", l, !0), an(y, "__vueParentComponent", N, !0)), I && it(l, null, N, "beforeMount");
    const j = Ml(m, V);
    j && V.beforeEnter(y), o(y, f, g), ((b = T && T.onVnodeMounted) || j || I) && pe(() => {
      b && Ce(b, N, l), j && V.enter(y), I && it(l, null, N, "mounted");
    }, m);
  }, oe = (l, f, g, N, m) => {
    if (g && x(l, g), N)
      for (let E = 0; E < N.length; E++)
        x(l, N[E]);
    if (m) {
      let E = m.subTree;
      if (d.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = Co(E.children) || E), f === E || mr(E.type) && (E.ssContent === f || E.ssFallback === f)) {
        const D = m.vnode;
        oe(
          l,
          D,
          D.scopeId,
          D.slotScopeIds,
          m.parent
        );
      }
    }
  }, ce = (l, f, g, N, m, E, D, v, y = 0) => {
    for (let b = y; b < l.length; b++) {
      const T = l[b] = v ? Ze(l[b]) : ve(l[b]);
      A(
        null,
        T,
        f,
        g,
        N,
        m,
        E,
        D,
        v
      );
    }
  }, Fe = (l, f, g, N, m, E, D) => {
    const v = f.el = l.el;
    d.NODE_ENV !== "production" && (v.__vnode = f);
    let { patchFlag: y, dynamicChildren: b, dirs: T } = f;
    y |= l.patchFlag & 16;
    const w = l.props || W, V = f.props || W;
    let I;
    if (g && rt(g, !1), (I = V.onVnodeBeforeUpdate) && Ce(I, g, f, l), T && it(f, l, g, "beforeUpdate"), g && rt(g, !0), d.NODE_ENV !== "production" && Ae && (y = 0, D = !1, b = null), (w.innerHTML && V.innerHTML == null || w.textContent && V.textContent == null) && p(v, ""), b ? (Je(
      l.dynamicChildren,
      b,
      v,
      g,
      N,
      Un(f, m),
      E
    ), d.NODE_ENV !== "production" && sn(l, f)) : D || we(
      l,
      f,
      v,
      null,
      g,
      N,
      Un(f, m),
      E,
      !1
    ), y > 0) {
      if (y & 16)
        be(v, w, V, g, m);
      else if (y & 2 && w.class !== V.class && r(v, "class", null, V.class, m), y & 4 && r(v, "style", w.style, V.style, m), y & 8) {
        const j = f.dynamicProps;
        for (let k = 0; k < j.length; k++) {
          const B = j[k], ae = w[B], ie = V[B];
          (ie !== ae || B === "value") && r(v, B, ae, ie, m, g);
        }
      }
      y & 1 && l.children !== f.children && p(v, f.children);
    } else !D && b == null && be(v, w, V, g, m);
    ((I = V.onVnodeUpdated) || T) && pe(() => {
      I && Ce(I, g, f, l), T && it(f, l, g, "updated");
    }, N);
  }, Je = (l, f, g, N, m, E, D) => {
    for (let v = 0; v < f.length; v++) {
      const y = l[v], b = f[v], T = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === Te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !$t(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 70) ? a(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      A(
        y,
        b,
        T,
        null,
        N,
        m,
        E,
        D,
        !0
      );
    }
  }, be = (l, f, g, N, m) => {
    if (f !== g) {
      if (f !== W)
        for (const E in f)
          !At(E) && !(E in g) && r(
            l,
            E,
            f[E],
            null,
            m,
            N
          );
      for (const E in g) {
        if (At(E)) continue;
        const D = g[E], v = f[E];
        D !== v && E !== "value" && r(l, E, v, D, m, N);
      }
      "value" in g && r(l, "value", f.value, g.value, m);
    }
  }, zt = (l, f, g, N, m, E, D, v, y) => {
    const b = f.el = l ? l.el : c(""), T = f.anchor = l ? l.anchor : c("");
    let { patchFlag: w, dynamicChildren: V, slotScopeIds: I } = f;
    d.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ae || w & 2048) && (w = 0, y = !1, V = null), I && (v = v ? v.concat(I) : I), l == null ? (o(b, g, N), o(T, g, N), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      T,
      m,
      E,
      D,
      v,
      y
    )) : w > 0 && w & 64 && V && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    l.dynamicChildren ? (Je(
      l.dynamicChildren,
      V,
      g,
      m,
      E,
      D,
      v
    ), d.NODE_ENV !== "production" ? sn(l, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || m && f === m.subTree) && sn(
        l,
        f,
        !0
        /* shallow */
      )
    )) : we(
      l,
      f,
      g,
      T,
      m,
      E,
      D,
      v,
      y
    );
  }, $o = (l, f, g, N, m, E, D, v, y) => {
    f.slotScopeIds = v, l == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      g,
      N,
      D,
      y
    ) : Ye(
      f,
      g,
      N,
      m,
      E,
      D,
      y
    ) : fe(l, f, y);
  }, Ye = (l, f, g, N, m, E, D) => {
    const v = l.component = oc(
      l,
      N,
      m
    );
    if (d.NODE_ENV !== "production" && v.type.__hmrId && $s(v), d.NODE_ENV !== "production" && (tn(l), He(v, "mount")), Do(l) && (v.ctx.renderer = wt), d.NODE_ENV !== "production" && He(v, "init"), sc(v, !1, D), d.NODE_ENV !== "production" && Le(v, "init"), v.asyncDep) {
      if (d.NODE_ENV !== "production" && Ae && (l.el = null), m && m.registerDep(v, F, D), !l.el) {
        const y = v.subTree = dt(xe);
        K(null, y, f, g);
      }
    } else
      F(
        v,
        l,
        f,
        g,
        m,
        E,
        D
      );
    d.NODE_ENV !== "production" && (nn(), Le(v, "mount"));
  }, fe = (l, f, g) => {
    const N = f.component = l.component;
    if (Kl(l, f, g))
      if (N.asyncDep && !N.asyncResolved) {
        d.NODE_ENV !== "production" && tn(f), R(N, f, g), d.NODE_ENV !== "production" && nn();
        return;
      } else
        N.next = f, N.update();
    else
      f.el = l.el, N.vnode = f;
  }, F = (l, f, g, N, m, E, D) => {
    const v = () => {
      if (l.isMounted) {
        let { next: w, bu: V, u: I, parent: j, vnode: k } = l;
        {
          const de = ar(l);
          if (de) {
            w && (w.el = k.el, R(l, w, D)), de.asyncDep.then(() => {
              l.isUnmounted || v();
            });
            return;
          }
        }
        let B = w, ae;
        d.NODE_ENV !== "production" && tn(w || l.vnode), rt(l, !1), w ? (w.el = k.el, R(l, w, D)) : w = k, V && Ct(V), (ae = w.props && w.props.onVnodeBeforeUpdate) && Ce(ae, j, w, k), rt(l, !0), d.NODE_ENV !== "production" && He(l, "render");
        const ie = Wn(l);
        d.NODE_ENV !== "production" && Le(l, "render");
        const ye = l.subTree;
        l.subTree = ie, d.NODE_ENV !== "production" && He(l, "patch"), A(
          ye,
          ie,
          // parent may have changed if it's in a teleport
          a(ye.el),
          // anchor may have changed if it's in a fragment
          Xt(ye),
          l,
          m,
          E
        ), d.NODE_ENV !== "production" && Le(l, "patch"), w.el = ie.el, B === null && kl(l, ie.el), I && pe(I, m), (ae = w.props && w.props.onVnodeUpdated) && pe(
          () => Ce(ae, j, w, k),
          m
        ), d.NODE_ENV !== "production" && Gi(l), d.NODE_ENV !== "production" && nn();
      } else {
        let w;
        const { el: V, props: I } = f, { bm: j, m: k, parent: B, root: ae, type: ie } = l, ye = Ft(f);
        if (rt(l, !1), j && Ct(j), !ye && (w = I && I.onVnodeBeforeMount) && Ce(w, B, f), rt(l, !0), V && Ao) {
          const de = () => {
            d.NODE_ENV !== "production" && He(l, "render"), l.subTree = Wn(l), d.NODE_ENV !== "production" && Le(l, "render"), d.NODE_ENV !== "production" && He(l, "hydrate"), Ao(
              V,
              l.subTree,
              l,
              m,
              null
            ), d.NODE_ENV !== "production" && Le(l, "hydrate");
          };
          ye && ie.__asyncHydrate ? ie.__asyncHydrate(
            V,
            l,
            de
          ) : de();
        } else {
          ae.ce && ae.ce._injectChildStyle(ie), d.NODE_ENV !== "production" && He(l, "render");
          const de = l.subTree = Wn(l);
          d.NODE_ENV !== "production" && Le(l, "render"), d.NODE_ENV !== "production" && He(l, "patch"), A(
            null,
            de,
            g,
            N,
            l,
            m,
            E
          ), d.NODE_ENV !== "production" && Le(l, "patch"), f.el = de.el;
        }
        if (k && pe(k, m), !ye && (w = I && I.onVnodeMounted)) {
          const de = f;
          pe(
            () => Ce(w, B, de),
            m
          );
        }
        (f.shapeFlag & 256 || B && Ft(B.vnode) && B.vnode.shapeFlag & 256) && l.a && pe(l.a, m), l.isMounted = !0, d.NODE_ENV !== "production" && Fs(l), f = g = N = null;
      }
    };
    l.scope.on();
    const y = l.effect = new Ni(v);
    l.scope.off();
    const b = l.update = y.run.bind(y), T = l.job = y.runIfDirty.bind(y);
    T.i = l, T.id = l.uid, y.scheduler = () => Vn(T), rt(l, !0), d.NODE_ENV !== "production" && (y.onTrack = l.rtc ? (w) => Ct(l.rtc, w) : void 0, y.onTrigger = l.rtg ? (w) => Ct(l.rtg, w) : void 0), b();
  }, R = (l, f, g) => {
    f.component = l;
    const N = l.vnode.props;
    l.vnode = f, l.next = null, yl(l, f.props, N, g), $l(l, f.children, g), ke(), Uo(l), Ge();
  }, we = (l, f, g, N, m, E, D, v, y = !1) => {
    const b = l && l.children, T = l ? l.shapeFlag : 0, w = f.children, { patchFlag: V, shapeFlag: I } = f;
    if (V > 0) {
      if (V & 128) {
        Dt(
          b,
          w,
          g,
          N,
          m,
          E,
          D,
          v,
          y
        );
        return;
      } else if (V & 256) {
        Pn(
          b,
          w,
          g,
          N,
          m,
          E,
          D,
          v,
          y
        );
        return;
      }
    }
    I & 8 ? (T & 16 && xt(b, m, E), w !== b && p(g, w)) : T & 16 ? I & 16 ? Dt(
      b,
      w,
      g,
      N,
      m,
      E,
      D,
      v,
      y
    ) : xt(b, m, E, !0) : (T & 8 && p(g, ""), I & 16 && ce(
      w,
      g,
      N,
      m,
      E,
      D,
      v,
      y
    ));
  }, Pn = (l, f, g, N, m, E, D, v, y) => {
    l = l || _t, f = f || _t;
    const b = l.length, T = f.length, w = Math.min(b, T);
    let V;
    for (V = 0; V < w; V++) {
      const I = f[V] = y ? Ze(f[V]) : ve(f[V]);
      A(
        l[V],
        I,
        g,
        null,
        m,
        E,
        D,
        v,
        y
      );
    }
    b > T ? xt(
      l,
      m,
      E,
      !0,
      !1,
      w
    ) : ce(
      f,
      g,
      N,
      m,
      E,
      D,
      v,
      y,
      w
    );
  }, Dt = (l, f, g, N, m, E, D, v, y) => {
    let b = 0;
    const T = f.length;
    let w = l.length - 1, V = T - 1;
    for (; b <= w && b <= V; ) {
      const I = l[b], j = f[b] = y ? Ze(f[b]) : ve(f[b]);
      if ($t(I, j))
        A(
          I,
          j,
          g,
          null,
          m,
          E,
          D,
          v,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= w && b <= V; ) {
      const I = l[w], j = f[V] = y ? Ze(f[V]) : ve(f[V]);
      if ($t(I, j))
        A(
          I,
          j,
          g,
          null,
          m,
          E,
          D,
          v,
          y
        );
      else
        break;
      w--, V--;
    }
    if (b > w) {
      if (b <= V) {
        const I = V + 1, j = I < T ? f[I].el : N;
        for (; b <= V; )
          A(
            null,
            f[b] = y ? Ze(f[b]) : ve(f[b]),
            g,
            j,
            m,
            E,
            D,
            v,
            y
          ), b++;
      }
    } else if (b > V)
      for (; b <= w; )
        ze(l[b], m, E, !0), b++;
    else {
      const I = b, j = b, k = /* @__PURE__ */ new Map();
      for (b = j; b <= V; b++) {
        const re = f[b] = y ? Ze(f[b]) : ve(f[b]);
        re.key != null && (d.NODE_ENV !== "production" && k.has(re.key) && O(
          "Duplicate keys found during update:",
          JSON.stringify(re.key),
          "Make sure keys are unique."
        ), k.set(re.key, b));
      }
      let B, ae = 0;
      const ie = V - j + 1;
      let ye = !1, de = 0;
      const Vt = new Array(ie);
      for (b = 0; b < ie; b++) Vt[b] = 0;
      for (b = I; b <= w; b++) {
        const re = l[b];
        if (ae >= ie) {
          ze(re, m, E, !0);
          continue;
        }
        let Ve;
        if (re.key != null)
          Ve = k.get(re.key);
        else
          for (B = j; B <= V; B++)
            if (Vt[B - j] === 0 && $t(re, f[B])) {
              Ve = B;
              break;
            }
        Ve === void 0 ? ze(re, m, E, !0) : (Vt[Ve - j] = b + 1, Ve >= de ? de = Ve : ye = !0, A(
          re,
          f[Ve],
          g,
          null,
          m,
          E,
          D,
          v,
          y
        ), ae++);
      }
      const Mo = ye ? Rl(Vt) : _t;
      for (B = Mo.length - 1, b = ie - 1; b >= 0; b--) {
        const re = j + b, Ve = f[re], Ro = re + 1 < T ? f[re + 1].el : N;
        Vt[b] === 0 ? A(
          null,
          Ve,
          g,
          Ro,
          m,
          E,
          D,
          v,
          y
        ) : ye && (B < 0 || b !== Mo[B] ? ht(Ve, g, Ro, 2) : B--);
      }
    }
  }, ht = (l, f, g, N, m = null) => {
    const { el: E, type: D, transition: v, children: y, shapeFlag: b } = l;
    if (b & 6) {
      ht(l.component.subTree, f, g, N);
      return;
    }
    if (b & 128) {
      l.suspense.move(f, g, N);
      return;
    }
    if (b & 64) {
      D.move(l, f, g, wt);
      return;
    }
    if (D === Te) {
      o(E, f, g);
      for (let w = 0; w < y.length; w++)
        ht(y[w], f, g, N);
      o(l.anchor, f, g);
      return;
    }
    if (D === ln) {
      ue(l, f, g);
      return;
    }
    if (N !== 2 && b & 1 && v)
      if (N === 0)
        v.beforeEnter(E), o(E, f, g), pe(() => v.enter(E), m);
      else {
        const { leave: w, delayLeave: V, afterLeave: I } = v, j = () => o(E, f, g), k = () => {
          w(E, () => {
            j(), I && I();
          });
        };
        V ? V(E, j, k) : k();
      }
    else
      o(E, f, g);
  }, ze = (l, f, g, N = !1, m = !1) => {
    const {
      type: E,
      props: D,
      ref: v,
      children: y,
      dynamicChildren: b,
      shapeFlag: T,
      patchFlag: w,
      dirs: V,
      cacheIndex: I
    } = l;
    if (w === -2 && (m = !1), v != null && _n(v, null, g, l, !0), I != null && (f.renderCache[I] = void 0), T & 256) {
      f.ctx.deactivate(l);
      return;
    }
    const j = T & 1 && V, k = !Ft(l);
    let B;
    if (k && (B = D && D.onVnodeBeforeUnmount) && Ce(B, f, l), T & 6)
      Vr(l.component, g, N);
    else {
      if (T & 128) {
        l.suspense.unmount(g, N);
        return;
      }
      j && it(l, null, f, "beforeUnmount"), T & 64 ? l.type.remove(
        l,
        f,
        g,
        wt,
        N
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== Te || w > 0 && w & 64) ? xt(
        b,
        f,
        g,
        !1,
        !0
      ) : (E === Te && w & 384 || !m && T & 16) && xt(y, f, g), N && In(l);
    }
    (k && (B = D && D.onVnodeUnmounted) || j) && pe(() => {
      B && Ce(B, f, l), j && it(l, null, f, "unmounted");
    }, g);
  }, In = (l) => {
    const { type: f, el: g, anchor: N, transition: m } = l;
    if (f === Te) {
      d.NODE_ENV !== "production" && l.patchFlag > 0 && l.patchFlag & 2048 && m && !m.persisted ? l.children.forEach((D) => {
        D.type === xe ? i(D.el) : In(D);
      }) : wr(g, N);
      return;
    }
    if (f === ln) {
      C(l);
      return;
    }
    const E = () => {
      i(g), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (l.shapeFlag & 1 && m && !m.persisted) {
      const { leave: D, delayLeave: v } = m, y = () => D(g, E);
      v ? v(l.el, E, y) : y();
    } else
      E();
  }, wr = (l, f) => {
    let g;
    for (; l !== f; )
      g = _(l), i(l), l = g;
    i(f);
  }, Vr = (l, f, g) => {
    d.NODE_ENV !== "production" && l.type.__hmrId && Ps(l);
    const { bum: N, scope: m, job: E, subTree: D, um: v, m: y, a: b } = l;
    zo(y), zo(b), N && Ct(N), m.stop(), E && (E.flags |= 8, ze(D, l, f, g)), v && pe(v, f), pe(() => {
      l.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && l.asyncDep && !l.asyncResolved && l.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), d.NODE_ENV !== "production" && Hs(l);
  }, xt = (l, f, g, N = !1, m = !1, E = 0) => {
    for (let D = E; D < l.length; D++)
      ze(l[D], f, g, N, m);
  }, Xt = (l) => {
    if (l.shapeFlag & 6)
      return Xt(l.component.subTree);
    if (l.shapeFlag & 128)
      return l.suspense.next();
    const f = _(l.anchor || l.el), g = f && f[Ks];
    return g ? _(g) : f;
  };
  let An = !1;
  const Po = (l, f, g) => {
    l == null ? f._vnode && ze(f._vnode, null, null, !0) : A(
      f._vnode || null,
      l,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = l, An || (An = !0, Uo(), Bi(), An = !1);
  }, wt = {
    p: A,
    um: ze,
    m: ht,
    r: In,
    mt: Ye,
    mc: ce,
    pc: we,
    pbc: Je,
    n: Xt,
    o: e
  };
  let Io, Ao;
  return {
    render: Po,
    hydrate: Io,
    createApp: _l(Po, Io)
  };
}
function Un({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function rt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ml(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function sn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (P(o) && P(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let c = i[r];
      c.shapeFlag & 1 && !c.dynamicChildren && ((c.patchFlag <= 0 || c.patchFlag === 32) && (c = i[r] = Ze(i[r]), c.el = s.el), !n && c.patchFlag !== -2 && sn(s, c)), c.type === Jt && (c.el = s.el), d.NODE_ENV !== "production" && c.type === xe && !c.el && (c.el = s.el);
    }
}
function Rl(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, c;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        c = r + s >> 1, e[n[c]] < h ? r = c + 1 : s = c;
      h < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function ar(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ar(t);
}
function zo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Fl = Symbol.for("v-scx"), jl = () => {
  {
    const e = rn(Fl);
    return e || d.NODE_ENV !== "production" && O(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Bn(e, t, n) {
  return d.NODE_ENV !== "production" && !$(t) && O(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), dr(e, t, n);
}
function dr(e, t, n = W) {
  const { immediate: o, deep: i, flush: r, once: s } = n;
  d.NODE_ENV !== "production" && !t && (o !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && O(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = J({}, n);
  d.NODE_ENV !== "production" && (c.onWarn = O);
  const u = t && o || !t && r !== "post";
  let h;
  if (Wt) {
    if (r === "sync") {
      const x = jl();
      h = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!u) {
      const x = () => {
      };
      return x.stop = Z, x.resume = Z, x.pause = Z, x;
    }
  }
  const p = te;
  c.call = (x, S, A) => Re(x, p, S, A);
  let a = !1;
  r === "post" ? c.scheduler = (x) => {
    pe(x, p && p.suspense);
  } : r !== "sync" && (a = !0, c.scheduler = (x, S) => {
    S ? x() : Vn(x);
  }), c.augmentJob = (x) => {
    t && (x.flags |= 4), a && (x.flags |= 2, p && (x.id = p.uid, x.i = p));
  };
  const _ = vs(e, t, c);
  return Wt && (h ? h.push(_) : u && _()), _;
}
function Hl(e, t, n) {
  const o = this.proxy, i = z(e) ? e.includes(".") ? pr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const s = Yt(this), c = dr(i, r.bind(o), n);
  return s(), c;
}
function pr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const Ll = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Oe(t)}Modifiers`] || e[`${tt(t)}Modifiers`];
function Ul(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || W;
  if (d.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(st(Oe(t)) in a)) && O(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(Oe(t))}" prop.`
        );
      else {
        const _ = p[t];
        $(_) && (_(...n) || O(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && Ll(o, t.slice(7));
  if (s && (s.trim && (i = n.map((p) => z(p) ? p.trim() : p)), s.number && (i = n.map(Rr))), d.NODE_ENV !== "production" && Bs(e, t, i), d.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[st(p)] && O(
      `Event "${p}" is emitted in component ${$n(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${tt(
        t
      )}" instead of "${t}".`
    );
  }
  let c, u = o[c = st(t)] || // also try camelCase event handler (#2249)
  o[c = st(Oe(t))];
  !u && r && (u = o[c = st(tt(t))]), u && Re(
    u,
    e,
    6,
    i
  );
  const h = o[c + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[c])
      return;
    e.emitted[c] = !0, Re(
      h,
      e,
      6,
      i
    );
  }
}
function hr(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, c = !1;
  if (!$(e)) {
    const u = (h) => {
      const p = hr(h, t, !0);
      p && (c = !0, J(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !c ? (q(e) && o.set(e, null), null) : (P(r) ? r.forEach((u) => s[u] = null) : J(s, r), q(e) && o.set(e, s), s);
}
function Sn(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), H(e, t[0].toLowerCase() + t.slice(1)) || H(e, tt(t)) || H(e, t));
}
let oo = !1;
function bn() {
  oo = !0;
}
function Wn(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: c,
    emit: u,
    render: h,
    renderCache: p,
    props: a,
    data: _,
    setupState: x,
    ctx: S,
    inheritAttrs: A
  } = e, ne = mn(e);
  let K, Y;
  d.NODE_ENV !== "production" && (oo = !1);
  try {
    if (n.shapeFlag & 4) {
      const C = i || o, ee = d.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(C, {
        get(Ne, oe, ce) {
          return O(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ne, oe, ce);
        }
      }) : C;
      K = ve(
        h.call(
          ee,
          C,
          p,
          d.NODE_ENV !== "production" ? Ie(a) : a,
          x,
          _,
          S
        )
      ), Y = c;
    } else {
      const C = t;
      d.NODE_ENV !== "production" && c === a && bn(), K = ve(
        C.length > 1 ? C(
          d.NODE_ENV !== "production" ? Ie(a) : a,
          d.NODE_ENV !== "production" ? {
            get attrs() {
              return bn(), Ie(c);
            },
            slots: s,
            emit: u
          } : { attrs: c, slots: s, emit: u }
        ) : C(
          d.NODE_ENV !== "production" ? Ie(a) : a,
          null
        )
      ), Y = t.props ? c : Bl(c);
    }
  } catch (C) {
    jt.length = 0, Gt(C, e, 1), K = dt(xe);
  }
  let U = K, ue;
  if (d.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([U, ue] = gr(K)), Y && A !== !1) {
    const C = Object.keys(Y), { shapeFlag: ee } = U;
    if (C.length) {
      if (ee & 7)
        r && C.some(un) && (Y = Wl(
          Y,
          r
        )), U = ot(U, Y, !1, !0);
      else if (d.NODE_ENV !== "production" && !oo && U.type !== xe) {
        const Ne = Object.keys(c), oe = [], ce = [];
        for (let Fe = 0, Je = Ne.length; Fe < Je; Fe++) {
          const be = Ne[Fe];
          Kt(be) ? un(be) || oe.push(be[2].toLowerCase() + be.slice(3)) : ce.push(be);
        }
        ce.length && O(
          `Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), oe.length && O(
          `Extraneous non-emits event listeners (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (d.NODE_ENV !== "production" && !Xo(U) && O(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = ot(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (d.NODE_ENV !== "production" && !Xo(U) && O(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Oo(U, n.transition)), d.NODE_ENV !== "production" && ue ? ue(U) : K = U, mn(ne), K;
}
const gr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Co(t, !1);
  if (o) {
    if (d.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return gr(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (c) => {
    t[i] = c, n && (r > -1 ? n[r] = c : c.patchFlag > 0 && (e.dynamicChildren = [...n, c]));
  };
  return [ve(o), s];
};
function Co(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (Tn(i)) {
      if (i.type !== xe || i.children === "v-if") {
        if (n)
          return;
        if (n = i, d.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Co(n.children);
      }
    } else
      return;
  }
  return n;
}
const Bl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Wl = (e, t) => {
  const n = {};
  for (const o in e)
    (!un(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Xo = (e) => e.shapeFlag & 7 || e.type === xe;
function Kl(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: c, patchFlag: u } = t, h = r.emitsOptions;
  if (d.NODE_ENV !== "production" && (i || c) && Ae || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Zo(o, s, h) : !!s;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const _ = p[a];
        if (s[_] !== o[_] && !Sn(h, _))
          return !0;
      }
    }
  } else
    return (i || c) && (!c || !c.$stable) ? !0 : o === s ? !1 : o ? s ? Zo(o, s, h) : !0 : !!s;
  return !1;
}
function Zo(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Sn(n, r))
      return !0;
  }
  return !1;
}
function kl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const mr = (e) => e.__isSuspense;
function Gl(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Ui(e);
}
const Te = Symbol.for("v-fgt"), Jt = Symbol.for("v-txt"), xe = Symbol.for("v-cmt"), ln = Symbol.for("v-stc"), jt = [];
let _e = null;
function ql(e = !1) {
  jt.push(_e = e ? null : []);
}
function Jl() {
  jt.pop(), _e = jt[jt.length - 1] || null;
}
let Bt = 1;
function Qo(e, t = !1) {
  Bt += e, e < 0 && _e && t && (_e.hasOnce = !0);
}
function Yl(e) {
  return e.dynamicChildren = Bt > 0 ? _e || _t : null, Jl(), Bt > 0 && _e && _e.push(e), e;
}
function zl(e, t, n, o, i, r) {
  return Yl(
    Er(
      e,
      t,
      n,
      o,
      i,
      r,
      !0
    )
  );
}
function Tn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function $t(e, t) {
  if (d.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = on.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Xl = (...e) => Nr(
  ...e
), _r = ({ key: e }) => e ?? null, cn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || Q(e) || $(e) ? { i: me, r: e, k: t, f: !!n } : e : null);
function Er(e, t = null, n = null, o = 0, i = null, r = e === Te ? 0 : 1, s = !1, c = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _r(t),
    ref: t && cn(t),
    scopeId: Ji,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return c ? (So(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= z(n) ? 8 : 16), d.NODE_ENV !== "production" && u.key !== u.key && O("VNode created with invalid key (NaN). VNode type:", u.type), Bt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  _e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && _e.push(u), u;
}
const dt = d.NODE_ENV !== "production" ? Xl : Nr;
function Nr(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === sl) && (d.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = xe), Tn(e)) {
    const c = ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && So(c, n), Bt > 0 && !r && _e && (c.shapeFlag & 6 ? _e[_e.indexOf(e)] = c : _e.push(c)), c.patchFlag = -2, c;
  }
  if (Dr(e) && (e = e.__vccOpts), t) {
    t = Zl(t);
    let { class: c, style: u } = t;
    c && !z(c) && (t.class = ho(c)), q(u) && (dn(u) && !P(u) && (u = J({}, u)), t.style = po(u));
  }
  const s = z(e) ? 1 : mr(e) ? 128 : ks(e) ? 64 : q(e) ? 4 : $(e) ? 2 : 0;
  return d.NODE_ENV !== "production" && s & 4 && dn(e) && (e = M(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Er(
    e,
    t,
    n,
    o,
    i,
    s,
    r,
    !0
  );
}
function Zl(e) {
  return e ? dn(e) || ir(e) ? J({}, e) : e : null;
}
function ot(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: c, transition: u } = e, h = t ? ec(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && _r(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? P(r) ? r.concat(cn(t)) : [r, cn(t)] : cn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d.NODE_ENV !== "production" && s === -1 && P(c) ? c.map(br) : c,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Te ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ot(e.ssContent),
    ssFallback: e.ssFallback && ot(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && Oo(
    p,
    u.clone(p)
  ), p;
}
function br(e) {
  const t = ot(e);
  return P(e.children) && (t.children = e.children.map(br)), t;
}
function Ql(e = " ", t = 0) {
  return dt(Jt, null, e, t);
}
function ve(e) {
  return e == null || typeof e == "boolean" ? dt(xe) : P(e) ? dt(
    Te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Tn(e) ? Ze(e) : dt(Jt, null, String(e));
}
function Ze(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ot(e);
}
function So(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), So(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !ir(t) ? t._ctx = me : i === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: me }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ql(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ec(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = ho([t.class, o.class]));
      else if (i === "style")
        t.style = po([t.style, o.style]);
      else if (Kt(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(P(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Ce(e, t, n, o = null) {
  Re(e, t, 7, [
    n,
    o
  ]);
}
const tc = tr();
let nc = 0;
function oc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || tc, r = {
    uid: nc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Yr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: sr(o, i),
    emitsOptions: hr(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: W,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: W,
    data: W,
    props: W,
    attrs: W,
    slots: W,
    refs: W,
    setupState: W,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return d.NODE_ENV !== "production" ? r.ctx = ll(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Ul.bind(null, r), e.ce && e.ce(r), r;
}
let te = null;
const ic = () => te || me;
let yn, io;
{
  const e = kt(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  yn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => te = n
  ), io = t(
    "__VUE_SSR_SETTERS__",
    (n) => Wt = n
  );
}
const Yt = (e) => {
  const t = te;
  return yn(e), e.scope.on(), () => {
    e.scope.off(), yn(t);
  };
}, ei = () => {
  te && te.scope.off(), yn(null);
}, rc = /* @__PURE__ */ Ke("slot,component");
function ro(e, { isNativeTag: t }) {
  (rc(e) || t(e)) && O(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function yr(e) {
  return e.vnode.shapeFlag & 4;
}
let Wt = !1;
function sc(e, t = !1, n = !1) {
  t && io(t);
  const { props: o, children: i } = e.vnode, r = yr(e);
  Nl(e, o, r, t), Tl(e, i, n);
  const s = r ? lc(e, t) : void 0;
  return t && io(!1), s;
}
function lc(e, t) {
  var n;
  const o = e.type;
  if (d.NODE_ENV !== "production") {
    if (o.name && ro(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        ro(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        Yi(r[s]);
    }
    o.compilerOptions && cc() && O(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qi), d.NODE_ENV !== "production" && cl(e);
  const { setup: i } = o;
  if (i) {
    ke();
    const r = e.setupContext = i.length > 1 ? uc(e) : null, s = Yt(e), c = Ot(
      i,
      e,
      0,
      [
        d.NODE_ENV !== "production" ? Ie(e.props) : e.props,
        r
      ]
    ), u = fo(c);
    if (Ge(), s(), (u || e.sp) && !Ft(e) && zi(e), u) {
      if (c.then(ei, ei), t)
        return c.then((h) => {
          ti(e, h, t);
        }).catch((h) => {
          Gt(h, e, 0);
        });
      if (e.asyncDep = c, d.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        O(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ti(e, c, t);
  } else
    vr(e, t);
}
function ti(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : q(t) ? (d.NODE_ENV !== "production" && Tn(t) && O(
    "setup() should not return VNodes directly - return a render function instead."
  ), d.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Fi(t), d.NODE_ENV !== "production" && fl(e)) : d.NODE_ENV !== "production" && t !== void 0 && O(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), vr(e, n);
}
let so;
const cc = () => !so;
function vr(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && so && !o.render) {
      const i = o.template || wo(e).template;
      if (i) {
        d.NODE_ENV !== "production" && He(e, "compile");
        const { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: c, compilerOptions: u } = o, h = J(
          J(
            {
              isCustomElement: r,
              delimiters: c
            },
            s
          ),
          u
        );
        o.render = so(i, h), d.NODE_ENV !== "production" && Le(e, "compile");
      }
    }
    e.render = o.render || Z;
  }
  {
    const i = Yt(e);
    ke();
    try {
      al(e);
    } finally {
      Ge(), i();
    }
  }
  d.NODE_ENV !== "production" && !o.render && e.render === Z && !t && (o.template ? O(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : O("Component is missing template or render function: ", o));
}
const ni = d.NODE_ENV !== "production" ? {
  get(e, t) {
    return bn(), X(e, "get", ""), e[t];
  },
  set() {
    return O("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return O("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return X(e, "get", ""), e[t];
  }
};
function fc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return X(e, "get", "$slots"), t[n];
    }
  });
}
function uc(e) {
  const t = (n) => {
    if (d.NODE_ENV !== "production" && (e.exposed && O("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (P(n) ? o = "array" : Q(n) && (o = "ref")), o !== "object" && O(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (d.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ni));
      },
      get slots() {
        return o || (o = fc(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ni),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function To(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fi(ms(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in at)
        return at[n](e);
    },
    has(t, n) {
      return n in t || n in at;
    }
  })) : e.proxy;
}
const ac = /(?:^|[-_])(\w)/g, dc = (e) => e.replace(ac, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Or(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $n(e, t, n = !1) {
  let o = Or(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e && e.parent) {
    const i = (r) => {
      for (const s in r)
        if (r[s] === t)
          return s;
    };
    o = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? dc(o) : n ? "App" : "Anonymous";
}
function Dr(e) {
  return $(e) && "__vccOpts" in e;
}
const pc = (e, t) => {
  const n = bs(e, t, Wt);
  if (d.NODE_ENV !== "production") {
    const o = ic();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function hc() {
  if (d.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      return q(a) ? a.__isVue ? ["div", e, "VueInstance"] : Q(a) ? [
        "div",
        {},
        ["span", e, p(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        c("_value" in a ? a._value : a),
        ">"
      ] : Nt(a) ? [
        "div",
        {},
        ["span", e, Ee(a) ? "ShallowReactive" : "Reactive"],
        "<",
        c(a),
        `>${nt(a) ? " (readonly)" : ""}`
      ] : nt(a) ? [
        "div",
        {},
        ["span", e, Ee(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        c(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const _ = [];
    a.type.props && a.props && _.push(s("props", M(a.props))), a.setupState !== W && _.push(s("setup", a.setupState)), a.data !== W && _.push(s("data", M(a.data)));
    const x = u(a, "computed");
    x && _.push(s("computed", x));
    const S = u(a, "inject");
    return S && _.push(s("injected", S)), _.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), _;
  }
  function s(a, _) {
    return _ = J({}, _), Object.keys(_).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(_).map((x) => [
          "div",
          {},
          ["span", o, x + ": "],
          c(_[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function c(a, _ = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : q(a) ? ["object", { object: _ ? M(a) : a }] : ["span", n, String(a)];
  }
  function u(a, _) {
    const x = a.type;
    if ($(x))
      return;
    const S = {};
    for (const A in a.ctx)
      h(x, A, _) && (S[A] = a.ctx[A]);
    return S;
  }
  function h(a, _, x) {
    const S = a[x];
    if (P(S) && S.includes(_) || q(S) && _ in S || a.extends && h(a.extends, _, x) || a.mixins && a.mixins.some((A) => h(A, _, x)))
      return !0;
  }
  function p(a) {
    return Ee(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const oi = "3.5.13", Be = d.NODE_ENV !== "production" ? O : Z;
var We = {};
let lo;
const ii = typeof window < "u" && window.trustedTypes;
if (ii)
  try {
    lo = /* @__PURE__ */ ii.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    We.NODE_ENV !== "production" && Be(`Error creating trusted types policy: ${e}`);
  }
const xr = lo ? (e) => lo.createHTML(e) : (e) => e, gc = "http://www.w3.org/2000/svg", mc = "http://www.w3.org/1998/Math/MathML", Ue = typeof document < "u" ? document : null, ri = Ue && /* @__PURE__ */ Ue.createElement("template"), _c = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ue.createElementNS(gc, e) : t === "mathml" ? Ue.createElementNS(mc, e) : n ? Ue.createElement(e, { is: n }) : Ue.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ue.createTextNode(e),
  createComment: (e) => Ue.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ue.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      ri.innerHTML = xr(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const c = ri.content;
      if (o === "svg" || o === "mathml") {
        const u = c.firstChild;
        for (; u.firstChild; )
          c.appendChild(u.firstChild);
        c.removeChild(u);
      }
      t.insertBefore(c, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ec = Symbol("_vtc");
function Nc(e, t, n) {
  const o = e[Ec];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const si = Symbol("_vod"), bc = Symbol("_vsh"), yc = Symbol(We.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), vc = /(^|;)\s*display\s*:/;
function Oc(e, t, n) {
  const o = e.style, i = z(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (z(t))
        for (const s of t.split(";")) {
          const c = s.slice(0, s.indexOf(":")).trim();
          n[c] == null && fn(o, c, "");
        }
      else
        for (const s in t)
          n[s] == null && fn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), fn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[yc];
      s && (n += ";" + s), o.cssText = n, r = vc.test(n);
    }
  } else t && e.removeAttribute("style");
  si in e && (e[si] = r ? o.display : "", e[bc] && (o.display = "none"));
}
const Dc = /[^\\];\s*$/, li = /\s*!important$/;
function fn(e, t, n) {
  if (P(n))
    n.forEach((o) => fn(e, t, o));
  else if (n == null && (n = ""), We.NODE_ENV !== "production" && Dc.test(n) && Be(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = xc(e, t);
    li.test(n) ? e.setProperty(
      tt(o),
      n.replace(li, ""),
      "important"
    ) : e[o] = n;
  }
}
const ci = ["Webkit", "Moz", "ms"], Kn = {};
function xc(e, t) {
  const n = Kn[t];
  if (n)
    return n;
  let o = Oe(t);
  if (o !== "filter" && o in e)
    return Kn[t] = o;
  o = Dn(o);
  for (let i = 0; i < ci.length; i++) {
    const r = ci[i] + o;
    if (r in e)
      return Kn[t] = r;
  }
  return t;
}
const fi = "http://www.w3.org/1999/xlink";
function ui(e, t, n, o, i, r = Jr(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(fi, t.slice(6, t.length)) : e.setAttributeNS(fi, t, n) : n == null || r && !Ei(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : vt(n) ? String(n) : n
  );
}
function ai(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? xr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const c = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (c !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const c = typeof e[t];
    c === "boolean" ? n = Ei(n) : n == null && c === "string" ? (n = "", s = !0) : c === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (c) {
    We.NODE_ENV !== "production" && !s && Be(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      c
    );
  }
  s && e.removeAttribute(i || t);
}
function wc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Vc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const di = Symbol("_vei");
function Cc(e, t, n, o, i = null) {
  const r = e[di] || (e[di] = {}), s = r[t];
  if (o && s)
    s.value = We.NODE_ENV !== "production" ? hi(o, t) : o;
  else {
    const [c, u] = Sc(t);
    if (o) {
      const h = r[t] = Pc(
        We.NODE_ENV !== "production" ? hi(o, t) : o,
        i
      );
      wc(e, c, h, u);
    } else s && (Vc(e, c, s, u), r[t] = void 0);
  }
}
const pi = /(?:Once|Passive|Capture)$/;
function Sc(e) {
  let t;
  if (pi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(pi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : tt(e.slice(2)), t];
}
let kn = 0;
const Tc = /* @__PURE__ */ Promise.resolve(), $c = () => kn || (Tc.then(() => kn = 0), kn = Date.now());
function Pc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Re(
      Ic(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = $c(), n;
}
function hi(e, t) {
  return $(e) || P(e) ? e : (Be(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Z);
}
function Ic(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const gi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ac = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? Nc(e, o, s) : t === "style" ? Oc(e, n, o) : Kt(t) ? un(t) || Cc(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Mc(e, t, o, s)) ? (ai(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ui(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !z(o)) ? ai(e, Oe(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ui(e, t, o, s));
};
function Mc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gi(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return gi(t) && z(n) ? !1 : t in e;
}
const Rc = /* @__PURE__ */ J({ patchProp: Ac }, _c);
let mi;
function Fc() {
  return mi || (mi = Il(Rc));
}
const jc = (...e) => {
  const t = Fc().createApp(...e);
  We.NODE_ENV !== "production" && (Lc(t), Uc(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = Bc(o);
    if (!i) return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Hc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function Hc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Lc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Kr(t) || kr(t) || Gr(t),
    writable: !1
  });
}
function Uc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Be(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Be(o), n;
      },
      set() {
        Be(o);
      }
    });
  }
}
function Bc(e) {
  if (z(e)) {
    const t = document.querySelector(e);
    return We.NODE_ENV !== "production" && !t && Be(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return We.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Be(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Wc = {};
function Kc() {
  hc();
}
Wc.NODE_ENV !== "production" && Kc();
const kc = { "data-l-hvp6x8k": "" }, Gc = /* @__PURE__ */ Gs({
  __name: "app",
  setup(e) {
    return ((n, o) => {
      let i = document.getElementById("hvp6x8k");
      i || (i = document.createElement("style"), i.id = "hvp6x8k", document.head.appendChild(i), i.innerHTML = o);
    })("hvp6x8k", `
div[data-l-hvp6x8k]{
  background-color: red;
}`), (n, o) => (ql(), zl("div", kc, "fuck"));
  }
}), qc = (e) => {
  jc(Gc).mount(e);
};
export {
  qc as onSettingWindowCreated
};
