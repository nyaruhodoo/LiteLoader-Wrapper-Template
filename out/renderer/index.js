var Bi = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qe(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const j = Bi.NODE_ENV !== "production" ? Object.freeze({}) : {}, Vt = Bi.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, cs = () => !1, tn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vn = (e) => e.startsWith("onUpdate:"), Y = Object.assign, $o = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, us = Object.prototype.hasOwnProperty, L = (e, t) => us.call(e, t), C = Array.isArray, ht = (e) => Fn(e) === "[object Map]", Ki = (e) => Fn(e) === "[object Set]", $ = (e) => typeof e == "function", z = (e) => typeof e == "string", Xe = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", Ao = (e) => (W(e) || $(e)) && $(e.then) && $(e.catch), Wi = Object.prototype.toString, Fn = (e) => Wi.call(e), Mo = (e) => Fn(e).slice(8, -1), qi = (e) => Fn(e) === "[object Object]", Io = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = /* @__PURE__ */ Qe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fs = /* @__PURE__ */ Qe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Hn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, as = /-(\w)/g, we = Hn(
  (e) => e.replace(as, (t, n) => n ? n.toUpperCase() : "")
), ds = /\B([A-Z])/g, Je = Hn(
  (e) => e.replace(ds, "-$1").toLowerCase()
), Ln = Hn((e) => e.charAt(0).toUpperCase() + e.slice(1)), dt = Hn(
  (e) => e ? `on${Ln(e)}` : ""
), he = (e, t) => !Object.is(e, t), Ot = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, On = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, ho = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let si;
const nn = () => si || (si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ro(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = z(o) ? ms(o) : Ro(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (z(e) || W(e))
    return e;
}
const ps = /;(?![^(]*\))/g, hs = /:([^]+)/, gs = /\/\*[^]*?\*\//g;
function ms(e) {
  const t = {};
  return e.replace(gs, "").split(ps).forEach((n) => {
    if (n) {
      const o = n.split(hs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Po(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (C(e))
    for (let n = 0; n < e.length; n++) {
      const o = Po(e[n]);
      o && (t += o + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const _s = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Es = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", bs = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Ns = /* @__PURE__ */ Qe(_s), ys = /* @__PURE__ */ Qe(Es), vs = /* @__PURE__ */ Qe(bs), Os = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ws = /* @__PURE__ */ Qe(Os);
function Gi(e) {
  return !!e || e === "";
}
const Ji = (e) => !!(e && e.__v_isRef === !0), wn = (e) => z(e) ? e : e == null ? "" : C(e) || W(e) && (e.toString === Wi || !$(e.toString)) ? Ji(e) ? wn(e.value) : JSON.stringify(e, Yi, 2) : String(e), Yi = (e, t) => Ji(t) ? Yi(e, t.value) : ht(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], r) => (n[eo(o, r) + " =>"] = i, n),
    {}
  )
} : Ki(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => eo(n))
} : Xe(t) ? eo(t) : W(t) && !C(t) && !qi(t) ? String(t) : t, eo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xe(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var K = {};
function Te(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ye;
class Ds {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ye, !t && ye && (this.index = (ye.scopes || (ye.scopes = [])).push(
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
      const n = ye;
      try {
        return ye = this, t();
      } finally {
        ye = n;
      }
    } else K.NODE_ENV !== "production" && Te("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ye = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    ye = this.parent;
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
function Vs() {
  return ye;
}
let U;
const to = /* @__PURE__ */ new WeakSet();
class zi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ye && ye.active && ye.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, to.has(this) && (to.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, li(this), Zi(this);
    const t = U, n = Ce;
    U = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      K.NODE_ENV !== "production" && U !== this && Te(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), er(this), U = t, Ce = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ho(t);
      this.deps = this.depsTail = void 0, li(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? to.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    go(this) && this.run();
  }
  get dirty() {
    return go(this);
  }
}
let Qi = 0, Kt, Wt;
function Xi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Wt, Wt = e;
    return;
  }
  e.next = Kt, Kt = e;
}
function jo() {
  Qi++;
}
function Fo() {
  if (--Qi > 0)
    return;
  if (Wt) {
    let t = Wt;
    for (Wt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Kt; ) {
    let t = Kt;
    for (Kt = void 0; t; ) {
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
function Zi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function er(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), Ho(o), xs(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function go(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (tr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function tr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Yt))
    return;
  e.globalVersion = Yt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !go(e)) {
    e.flags &= -3;
    return;
  }
  const n = U, o = Ce;
  U = e, Ce = !0;
  try {
    Zi(e);
    const i = e.fn(e._value);
    (t.version === 0 || he(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    U = n, Ce = o, er(e), e.flags &= -3;
  }
}
function Ho(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), K.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ho(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function xs(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ce = !0;
const nr = [];
function Ze() {
  nr.push(Ce), Ce = !1;
}
function et() {
  const e = nr.pop();
  Ce = e === void 0 ? !0 : e;
}
function li(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let Yt = 0;
class Ss {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Un {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, K.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!U || !Ce || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new Ss(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, or(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = o);
    }
    return K.NODE_ENV !== "production" && U.onTrack && U.onTrack(
      Y(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Yt++, this.notify(t);
  }
  notify(t) {
    jo();
    try {
      if (K.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            Y(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Fo();
    }
  }
}
function or(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        or(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), K.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Dn = /* @__PURE__ */ new WeakMap(), gt = Symbol(
  K.NODE_ENV !== "production" ? "Object iterate" : ""
), mo = Symbol(
  K.NODE_ENV !== "production" ? "Map keys iterate" : ""
), zt = Symbol(
  K.NODE_ENV !== "production" ? "Array iterate" : ""
);
function X(e, t, n) {
  if (Ce && U) {
    let o = Dn.get(e);
    o || Dn.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new Un()), i.map = o, i.key = n), K.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Re(e, t, n, o, i, r) {
  const s = Dn.get(e);
  if (!s) {
    Yt++;
    return;
  }
  const l = (u) => {
    u && (K.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : u.trigger());
  };
  if (jo(), t === "clear")
    s.forEach(l);
  else {
    const u = C(e), h = u && Io(n);
    if (u && n === "length") {
      const p = Number(o);
      s.forEach((a, m) => {
        (m === "length" || m === zt || !Xe(m) && m >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), h && l(s.get(zt)), t) {
        case "add":
          u ? h && l(s.get("length")) : (l(s.get(gt)), ht(e) && l(s.get(mo)));
          break;
        case "delete":
          u || (l(s.get(gt)), ht(e) && l(s.get(mo)));
          break;
        case "set":
          ht(e) && l(s.get(gt));
          break;
      }
  }
  Fo();
}
function Cs(e, t) {
  const n = Dn.get(e);
  return n && n.get(t);
}
function vt(e) {
  const t = R(e);
  return t === e ? t : (X(t, "iterate", zt), ae(e) ? t : t.map(se));
}
function kn(e) {
  return X(e = R(e), "iterate", zt), e;
}
const Ts = {
  __proto__: null,
  [Symbol.iterator]() {
    return no(this, Symbol.iterator, se);
  },
  concat(...e) {
    return vt(this).concat(
      ...e.map((t) => C(t) ? vt(t) : t)
    );
  },
  entries() {
    return no(this, "entries", (e) => (e[1] = se(e[1]), e));
  },
  every(e, t) {
    return Ue(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ue(this, "filter", e, t, (n) => n.map(se), arguments);
  },
  find(e, t) {
    return Ue(this, "find", e, t, se, arguments);
  },
  findIndex(e, t) {
    return Ue(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ue(this, "findLast", e, t, se, arguments);
  },
  findLastIndex(e, t) {
    return Ue(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ue(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return oo(this, "includes", e);
  },
  indexOf(...e) {
    return oo(this, "indexOf", e);
  },
  join(e) {
    return vt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return oo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ue(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return jt(this, "pop");
  },
  push(...e) {
    return jt(this, "push", e);
  },
  reduce(e, ...t) {
    return ci(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ci(this, "reduceRight", e, t);
  },
  shift() {
    return jt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ue(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return jt(this, "splice", e);
  },
  toReversed() {
    return vt(this).toReversed();
  },
  toSorted(e) {
    return vt(this).toSorted(e);
  },
  toSpliced(...e) {
    return vt(this).toSpliced(...e);
  },
  unshift(...e) {
    return jt(this, "unshift", e);
  },
  values() {
    return no(this, "values", se);
  }
};
function no(e, t, n) {
  const o = kn(e), i = o[t]();
  return o !== e && !ae(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = n(r.value)), r;
  }), i;
}
const $s = Array.prototype;
function Ue(e, t, n, o, i, r) {
  const s = kn(e), l = s !== e && !ae(e), u = s[t];
  if (u !== $s[t]) {
    const a = u.apply(e, r);
    return l ? se(a) : a;
  }
  let h = n;
  s !== e && (l ? h = function(a, m) {
    return n.call(this, se(a), m, e);
  } : n.length > 2 && (h = function(a, m) {
    return n.call(this, a, m, e);
  }));
  const p = u.call(s, h, o);
  return l && i ? i(p) : p;
}
function ci(e, t, n, o) {
  const i = kn(e);
  let r = n;
  return i !== e && (ae(e) ? n.length > 3 && (r = function(s, l, u) {
    return n.call(this, s, l, u, e);
  }) : r = function(s, l, u) {
    return n.call(this, s, se(l), u, e);
  }), i[t](r, ...o);
}
function oo(e, t, n) {
  const o = R(e);
  X(o, "iterate", zt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && Qt(n[0]) ? (n[0] = R(n[0]), o[t](...n)) : i;
}
function jt(e, t, n = []) {
  Ze(), jo();
  const o = R(e)[t].apply(e, n);
  return Fo(), et(), o;
}
const As = /* @__PURE__ */ Qe("__proto__,__v_isRef,__isVue"), ir = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xe)
);
function Ms(e) {
  Xe(e) || (e = String(e));
  const t = R(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class rr {
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
      return o === (i ? r ? ar : fr : r ? ur : cr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = C(t);
    if (!i) {
      let u;
      if (s && (u = Ts[n]))
        return u;
      if (n === "hasOwnProperty")
        return Ms;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      J(t) ? t : o
    );
    return (Xe(n) ? ir.has(n) : As(n)) || (i || X(t, "get", n), r) ? l : J(l) ? s && Io(n) ? l : l.value : W(l) ? i ? Lo(l) : Kn(l) : l;
  }
}
class sr extends rr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Ye(r);
      if (!ae(o) && !Ye(o) && (r = R(r), o = R(o)), !C(t) && J(r) && !J(o))
        return u ? !1 : (r.value = o, !0);
    }
    const s = C(t) && Io(n) ? Number(n) < t.length : L(t, n), l = Reflect.set(
      t,
      n,
      o,
      J(t) ? t : i
    );
    return t === R(i) && (s ? he(o, r) && Re(t, "set", n, o, r) : Re(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = L(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Re(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Xe(n) || !ir.has(n)) && X(t, "has", n), o;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      C(t) ? "length" : gt
    ), Reflect.ownKeys(t);
  }
}
class lr extends rr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return K.NODE_ENV !== "production" && Te(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return K.NODE_ENV !== "production" && Te(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Is = /* @__PURE__ */ new sr(), Rs = /* @__PURE__ */ new lr(), Ps = /* @__PURE__ */ new sr(!0), js = /* @__PURE__ */ new lr(!0), _o = (e) => e, an = (e) => Reflect.getPrototypeOf(e);
function Fs(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = R(i), s = ht(r), l = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, h = i[e](...o), p = n ? _o : t ? Eo : se;
    return !t && X(
      r,
      "iterate",
      u ? mo : gt
    ), {
      // iterator protocol
      next() {
        const { value: a, done: m } = h.next();
        return m ? { value: a, done: m } : {
          value: l ? [p(a[0]), p(a[1])] : p(a),
          done: m
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function dn(e) {
  return function(...t) {
    if (K.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Te(
        `${Ln(e)} operation ${n}failed: target is readonly.`,
        R(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Hs(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = R(r), l = R(i);
      e || (he(i, l) && X(s, "get", i), X(s, "get", l));
      const { has: u } = an(s), h = t ? _o : e ? Eo : se;
      if (u.call(s, i))
        return h(r.get(i));
      if (u.call(s, l))
        return h(r.get(l));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && X(R(i), "iterate", gt), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, s = R(r), l = R(i);
      return e || (he(i, l) && X(s, "has", i), X(s, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const s = this, l = s.__v_raw, u = R(l), h = t ? _o : e ? Eo : se;
      return !e && X(u, "iterate", gt), l.forEach((p, a) => i.call(r, h(p), h(a), s));
    }
  };
  return Y(
    n,
    e ? {
      add: dn("add"),
      set: dn("set"),
      delete: dn("delete"),
      clear: dn("clear")
    } : {
      add(i) {
        !t && !ae(i) && !Ye(i) && (i = R(i));
        const r = R(this);
        return an(r).has.call(r, i) || (r.add(i), Re(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !ae(r) && !Ye(r) && (r = R(r));
        const s = R(this), { has: l, get: u } = an(s);
        let h = l.call(s, i);
        h ? K.NODE_ENV !== "production" && ui(s, l, i) : (i = R(i), h = l.call(s, i));
        const p = u.call(s, i);
        return s.set(i, r), h ? he(r, p) && Re(s, "set", i, r, p) : Re(s, "add", i, r), this;
      },
      delete(i) {
        const r = R(this), { has: s, get: l } = an(r);
        let u = s.call(r, i);
        u ? K.NODE_ENV !== "production" && ui(r, s, i) : (i = R(i), u = s.call(r, i));
        const h = l ? l.call(r, i) : void 0, p = r.delete(i);
        return u && Re(r, "delete", i, void 0, h), p;
      },
      clear() {
        const i = R(this), r = i.size !== 0, s = K.NODE_ENV !== "production" ? ht(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return r && Re(
          i,
          "clear",
          void 0,
          void 0,
          s
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Fs(i, e, t);
  }), n;
}
function Bn(e, t) {
  const n = Hs(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    L(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Ls = {
  get: /* @__PURE__ */ Bn(!1, !1)
}, Us = {
  get: /* @__PURE__ */ Bn(!1, !0)
}, ks = {
  get: /* @__PURE__ */ Bn(!0, !1)
}, Bs = {
  get: /* @__PURE__ */ Bn(!0, !0)
};
function ui(e, t, n) {
  const o = R(n);
  if (o !== n && t.call(e, o)) {
    const i = Mo(e);
    Te(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const cr = /* @__PURE__ */ new WeakMap(), ur = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap();
function Ks(e) {
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
function Ws(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ks(Mo(e));
}
function Kn(e) {
  return Ye(e) ? e : Wn(
    e,
    !1,
    Is,
    Ls,
    cr
  );
}
function qs(e) {
  return Wn(
    e,
    !1,
    Ps,
    Us,
    ur
  );
}
function Lo(e) {
  return Wn(
    e,
    !0,
    Rs,
    ks,
    fr
  );
}
function je(e) {
  return Wn(
    e,
    !0,
    js,
    Bs,
    ar
  );
}
function Wn(e, t, n, o, i) {
  if (!W(e))
    return K.NODE_ENV !== "production" && Te(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const s = Ws(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, l), l;
}
function mt(e) {
  return Ye(e) ? mt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ye(e) {
  return !!(e && e.__v_isReadonly);
}
function ae(e) {
  return !!(e && e.__v_isShallow);
}
function Qt(e) {
  return e ? !!e.__v_raw : !1;
}
function R(e) {
  const t = e && e.__v_raw;
  return t ? R(t) : e;
}
function Gs(e) {
  return !L(e, "__v_skip") && Object.isExtensible(e) && On(e, "__v_skip", !0), e;
}
const se = (e) => W(e) ? Kn(e) : e, Eo = (e) => W(e) ? Lo(e) : e;
function J(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function fi(e) {
  return dr(e, !1);
}
function Js(e) {
  return dr(e, !0);
}
function dr(e, t) {
  return J(e) ? e : new Ys(e, t);
}
class Ys {
  constructor(t, n) {
    this.dep = new Un(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : R(t), this._value = n ? t : se(t), this.__v_isShallow = n;
  }
  get value() {
    return K.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || ae(t) || Ye(t);
    t = o ? t : R(t), he(t, n) && (this._rawValue = t, this._value = o ? t : se(t), K.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function qe(e) {
  return J(e) ? e.value : e;
}
function zs(e) {
  return $(e) ? e() : qe(e);
}
const Qs = {
  get: (e, t, n) => t === "__v_raw" ? e : qe(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return J(i) && !J(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function pr(e) {
  return mt(e) ? e : new Proxy(e, Qs);
}
class Xs {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Un(), { get: o, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = o, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Zs(e) {
  return new Xs(e);
}
function el(e) {
  K.NODE_ENV !== "production" && !Qt(e) && Te("toRefs() expects a reactive object but received a plain one.");
  const t = C(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = nl(e, n);
  return t;
}
class tl {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const t = this._object[this._key];
    return this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Cs(R(this._object), this._key);
  }
}
function nl(e, t, n) {
  const o = e[t];
  return J(o) ? o : new tl(e, t, n);
}
class ol {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Un(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Yt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Xi(this, !0), !0;
  }
  get value() {
    const t = K.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return tr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : K.NODE_ENV !== "production" && Te("Write operation failed: computed value is readonly");
  }
}
function il(e, t, n = !1) {
  let o, i;
  $(e) ? o = e : (o = e.get, i = e.set);
  const r = new ol(o, i, n);
  return K.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const pn = {}, Vn = /* @__PURE__ */ new WeakMap();
let pt;
function rl(e, t = !1, n = pt) {
  if (n) {
    let o = Vn.get(n);
    o || Vn.set(n, o = []), o.push(e);
  } else K.NODE_ENV !== "production" && !t && Te(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function sl(e, t, n = j) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: l, call: u } = n, h = (T) => {
    (n.onWarn || Te)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (T) => i ? T : ae(T) || i === !1 || i === 0 ? We(T, 1) : We(T);
  let a, m, y, x, M = !1, oe = !1;
  if (J(e) ? (m = () => e.value, M = ae(e)) : mt(e) ? (m = () => p(e), M = !0) : C(e) ? (oe = !0, M = e.some((T) => mt(T) || ae(T)), m = () => e.map((T) => {
    if (J(T))
      return T.value;
    if (mt(T))
      return p(T);
    if ($(T))
      return u ? u(T, 2) : T();
    K.NODE_ENV !== "production" && h(T);
  })) : $(e) ? t ? m = u ? () => u(e, 2) : e : m = () => {
    if (y) {
      Ze();
      try {
        y();
      } finally {
        et();
      }
    }
    const T = pt;
    pt = a;
    try {
      return u ? u(e, 3, [x]) : e(x);
    } finally {
      pt = T;
    }
  } : (m = Z, K.NODE_ENV !== "production" && h(e)), t && i) {
    const T = m, te = i === !0 ? 1 / 0 : i;
    m = () => We(T(), te);
  }
  const q = Vs(), Q = () => {
    a.stop(), q && q.active && $o(q.effects, a);
  };
  if (r && t) {
    const T = t;
    t = (...te) => {
      T(...te), Q();
    };
  }
  let k = oe ? new Array(e.length).fill(pn) : pn;
  const _e = (T) => {
    if (!(!(a.flags & 1) || !a.dirty && !T))
      if (t) {
        const te = a.run();
        if (i || M || (oe ? te.some((Oe, ie) => he(Oe, k[ie])) : he(te, k))) {
          y && y();
          const Oe = pt;
          pt = a;
          try {
            const ie = [
              te,
              // pass undefined as the old value when it's changed for the first time
              k === pn ? void 0 : oe && k[0] === pn ? [] : k,
              x
            ];
            u ? u(t, 3, ie) : (
              // @ts-expect-error
              t(...ie)
            ), k = te;
          } finally {
            pt = Oe;
          }
        }
      } else
        a.run();
  };
  return l && l(_e), a = new zi(m), a.scheduler = s ? () => s(_e, !1) : _e, x = (T) => rl(T, !1, a), y = a.onStop = () => {
    const T = Vn.get(a);
    if (T) {
      if (u)
        u(T, 4);
      else
        for (const te of T) te();
      Vn.delete(a);
    }
  }, K.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? _e(!0) : k = a.run() : s ? s(_e.bind(null, !0), !0) : a.run(), Q.pause = a.pause.bind(a), Q.resume = a.resume.bind(a), Q.stop = Q, Q;
}
function We(e, t = 1 / 0, n) {
  if (t <= 0 || !W(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, J(e))
    We(e.value, t, n);
  else if (C(e))
    for (let o = 0; o < e.length; o++)
      We(e[o], t, n);
  else if (Ki(e) || ht(e))
    e.forEach((o) => {
      We(o, t, n);
    });
  else if (qi(e)) {
    for (const o in e)
      We(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && We(e[o], t, n);
  }
  return e;
}
var d = {};
const _t = [];
function hn(e) {
  _t.push(e);
}
function gn() {
  _t.pop();
}
let io = !1;
function v(e, ...t) {
  if (io) return;
  io = !0, Ze();
  const n = _t.length ? _t[_t.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = ll();
  if (o)
    $t(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var s, l;
          return (l = (s = r.toString) == null ? void 0 : s.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: r }) => `at <${zn(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...cl(i)), console.warn(...r);
  }
  et(), io = !1;
}
function ll() {
  let e = _t[_t.length - 1];
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
function cl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ul(n));
  }), t;
}
function ul({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${zn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...fl(e.props), r] : [i + r];
}
function fl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...hr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function hr(e, t, n) {
  return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : J(t) ? (t = hr(e, R(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = R(t), n ? t : [`${e}=`, t]);
}
const Uo = {
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
function $t(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    on(i, t, n);
  }
}
function He(e, t, n, o) {
  if ($(e)) {
    const i = $t(e, t, n, o);
    return i && Ao(i) && i.catch((r) => {
      on(r, t, n);
    }), i;
  }
  if (C(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(He(e[r], t, n, o));
    return i;
  } else d.NODE_ENV !== "production" && v(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function on(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || j;
  if (t) {
    let l = t.parent;
    const u = t.proxy, h = d.NODE_ENV !== "production" ? Uo[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let a = 0; a < p.length; a++)
          if (p[a](e, u, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Ze(), $t(r, null, 10, [
        e,
        u,
        h
      ]), et();
      return;
    }
  }
  al(e, n, i, o, s);
}
function al(e, t, n, o = !0, i = !1) {
  if (d.NODE_ENV !== "production") {
    const r = Uo[t];
    if (n && hn(n), v(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && gn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const fe = [];
let Ie = -1;
const xt = [];
let rt = null, wt = 0;
const gr = /* @__PURE__ */ Promise.resolve();
let xn = null;
const dl = 100;
function pl(e) {
  const t = xn || gr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hl(e) {
  let t = Ie + 1, n = fe.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = fe[o], r = Xt(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function qn(e) {
  if (!(e.flags & 1)) {
    const t = Xt(e), n = fe[fe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Xt(n) ? fe.push(e) : fe.splice(hl(t), 0, e), e.flags |= 1, mr();
  }
}
function mr() {
  xn || (xn = gr.then(br));
}
function _r(e) {
  C(e) ? xt.push(...e) : rt && e.id === -1 ? rt.splice(wt + 1, 0, e) : e.flags & 1 || (xt.push(e), e.flags |= 1), mr();
}
function ai(e, t, n = Ie + 1) {
  for (d.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < fe.length; n++) {
    const o = fe[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || d.NODE_ENV !== "production" && ko(t, o))
        continue;
      fe.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Er(e) {
  if (xt.length) {
    const t = [...new Set(xt)].sort(
      (n, o) => Xt(n) - Xt(o)
    );
    if (xt.length = 0, rt) {
      rt.push(...t);
      return;
    }
    for (rt = t, d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), wt = 0; wt < rt.length; wt++) {
      const n = rt[wt];
      d.NODE_ENV !== "production" && ko(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    rt = null, wt = 0;
  }
}
const Xt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function br(e) {
  d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = d.NODE_ENV !== "production" ? (n) => ko(e, n) : Z;
  try {
    for (Ie = 0; Ie < fe.length; Ie++) {
      const n = fe[Ie];
      if (n && !(n.flags & 8)) {
        if (d.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), $t(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ie < fe.length; Ie++) {
      const n = fe[Ie];
      n && (n.flags &= -2);
    }
    Ie = -1, fe.length = 0, Er(e), xn = null, (fe.length || xt.length) && br(e);
  }
}
function ko(e, t) {
  const n = e.get(t) || 0;
  if (n > dl) {
    const o = t.i, i = o && ns(o.type);
    return on(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Fe = !1;
const mn = /* @__PURE__ */ new Map();
d.NODE_ENV !== "production" && (nn().__VUE_HMR_RUNTIME__ = {
  createRecord: ro(Nr),
  rerender: ro(_l),
  reload: ro(El)
});
const bt = /* @__PURE__ */ new Map();
function gl(e) {
  const t = e.type.__hmrId;
  let n = bt.get(t);
  n || (Nr(t, e.type), n = bt.get(t)), n.instances.add(e);
}
function ml(e) {
  bt.get(e.type.__hmrId).instances.delete(e);
}
function Nr(e, t) {
  return bt.has(e) ? !1 : (bt.set(e, {
    initialDef: Sn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Sn(e) {
  return os(e) ? e.__vccOpts : e;
}
function _l(e, t) {
  const n = bt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Sn(o.type).render = t), o.renderCache = [], Fe = !0, o.update(), Fe = !1;
  }));
}
function El(e, t) {
  const n = bt.get(e);
  if (!n) return;
  t = Sn(t), di(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = Sn(r.type);
    let l = mn.get(s);
    l || (s !== n.initialDef && di(s, t), mn.set(s, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? qn(() => {
      Fe = !0, r.parent.update(), Fe = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  _r(() => {
    mn.clear();
  });
}
function di(e, t) {
  Y(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ro(e) {
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
let Pe, Lt = [], bo = !1;
function rn(e, ...t) {
  Pe ? Pe.emit(e, ...t) : bo || Lt.push({ event: e, args: t });
}
function yr(e, t) {
  var n, o;
  Pe = e, Pe ? (Pe.enabled = !0, Lt.forEach(({ event: i, args: r }) => Pe.emit(i, ...r)), Lt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    yr(r, t);
  }), setTimeout(() => {
    Pe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, bo = !0, Lt = []);
  }, 3e3)) : (bo = !0, Lt = []);
}
function bl(e, t) {
  rn("app:init", e, t, {
    Fragment: ge,
    Text: sn,
    Comment: me,
    Static: bn
  });
}
function Nl(e) {
  rn("app:unmount", e);
}
const yl = /* @__PURE__ */ Bo(
  "component:added"
  /* COMPONENT_ADDED */
), vr = /* @__PURE__ */ Bo(
  "component:updated"
  /* COMPONENT_UPDATED */
), vl = /* @__PURE__ */ Bo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Ol = (e) => {
  Pe && typeof Pe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Pe.cleanupBuffer(e) && vl(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bo(e) {
  return (t) => {
    rn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const wl = /* @__PURE__ */ Or(
  "perf:start"
  /* PERFORMANCE_START */
), Dl = /* @__PURE__ */ Or(
  "perf:end"
  /* PERFORMANCE_END */
);
function Or(e) {
  return (t, n, o) => {
    rn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Vl(e, t, n) {
  rn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ee = null, wr = null;
function Cn(e) {
  const t = ee;
  return ee = e, wr = e && e.type.__scopeId || null, t;
}
function Ut(e, t = ee, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && vi(-1);
    const r = Cn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Cn(r), o._d && vi(1);
    }
    return d.NODE_ENV !== "production" && vr(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Dr(e) {
  fs(e) && v("Do not use built-in directive ids as custom directive id: " + e);
}
function xl(e, t) {
  if (ee === null)
    return d.NODE_ENV !== "production" && v("withDirectives can only be used inside render functions."), e;
  const n = Yn(ee), o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, s, l, u = j] = t[i];
    r && ($(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && We(s), o.push({
      dir: r,
      instance: n,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: u
    }));
  }
  return e;
}
function ft(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    r && (l.oldValue = r[s].value);
    let u = l.dir[o];
    u && (Ze(), He(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), et());
  }
}
const Sl = Symbol("_vte"), Cl = (e) => e.__isTeleport;
function Ko(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ko(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function At(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Y({ name: e.name }, t, { setup: e })
  ) : e;
}
function Vr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const xr = /* @__PURE__ */ new WeakSet();
function Tl(e) {
  const t = Zo(), n = Js(null);
  if (t) {
    const i = t.refs === j ? t.refs = {} : t.refs;
    let r;
    d.NODE_ENV !== "production" && (r = Object.getOwnPropertyDescriptor(i, e)) && !r.configurable ? v(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(i, e, {
      enumerable: !0,
      get: () => n.value,
      set: (s) => n.value = s
    });
  } else d.NODE_ENV !== "production" && v(
    "useTemplateRef() is called when there is no active component instance to be associated with."
  );
  const o = d.NODE_ENV !== "production" ? Lo(n) : n;
  return d.NODE_ENV !== "production" && xr.add(o), o;
}
function Tn(e, t, n, o, i = !1) {
  if (C(e)) {
    e.forEach(
      (x, M) => Tn(
        x,
        t && (C(t) ? t[M] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (St(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Tn(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? Yn(o.component) : o.el, s = i ? null : r, { i: l, r: u } = e;
  if (d.NODE_ENV !== "production" && !l) {
    v(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, p = l.refs === j ? l.refs = {} : l.refs, a = l.setupState, m = R(a), y = a === j ? () => !1 : (x) => d.NODE_ENV !== "production" && (L(m, x) && !J(m[x]) && v(
    `Template ref "${x}" used on a non-ref value. It will not work in the production build.`
  ), xr.has(m[x])) ? !1 : L(m, x);
  if (h != null && h !== u && (z(h) ? (p[h] = null, y(h) && (a[h] = null)) : J(h) && (h.value = null)), $(u))
    $t(u, l, 12, [s, p]);
  else {
    const x = z(u), M = J(u);
    if (x || M) {
      const oe = () => {
        if (e.f) {
          const q = x ? y(u) ? a[u] : p[u] : u.value;
          i ? C(q) && $o(q, r) : C(q) ? q.includes(r) || q.push(r) : x ? (p[u] = [r], y(u) && (a[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else x ? (p[u] = s, y(u) && (a[u] = s)) : M ? (u.value = s, e.k && (p[e.k] = s)) : d.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (oe.id = -1, Ne(oe, n)) : oe();
    } else d.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
  }
}
nn().requestIdleCallback;
nn().cancelIdleCallback;
const St = (e) => !!e.type.__asyncLoader, Wo = (e) => e.type.__isKeepAlive;
function $l(e, t) {
  Sr(e, "a", t);
}
function Al(e, t) {
  Sr(e, "da", t);
}
function Sr(e, t, n = ne) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Gn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Wo(i.parent.vnode) && Ml(o, t, n, i), i = i.parent;
  }
}
function Ml(e, t, n, o) {
  const i = Gn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Cr(() => {
    $o(o[t], i);
  }, n);
}
function Gn(e, t, n = ne, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      Ze();
      const l = cn(n), u = He(t, n, e, s);
      return l(), et(), u;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (d.NODE_ENV !== "production") {
    const i = dt(Uo[e].replace(/ hook$/, ""));
    v(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const tt = (e) => (t, n = ne) => {
  (!en || e === "sp") && Gn(e, (...o) => t(...o), n);
}, Il = tt("bm"), Rl = tt("m"), Pl = tt(
  "bu"
), jl = tt("u"), Fl = tt(
  "bum"
), Cr = tt("um"), Hl = tt(
  "sp"
), Ll = tt("rtg"), Ul = tt("rtc");
function kl(e, t = ne) {
  Gn("ec", e, t);
}
const Bl = Symbol.for("v-ndc");
function Kl(e, t, n, o) {
  let i;
  const r = n, s = C(e);
  if (s || z(e)) {
    const l = s && mt(e);
    let u = !1;
    l && (u = !ae(e), e = kn(e)), i = new Array(e.length);
    for (let h = 0, p = e.length; h < p; h++)
      i[h] = t(
        u ? se(e[h]) : e[h],
        h,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    d.NODE_ENV !== "production" && !Number.isInteger(e) && v(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, r);
  } else if (W(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, u) => t(l, u, void 0, r)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let u = 0, h = l.length; u < h; u++) {
        const p = l[u];
        i[u] = t(e[p], p, u, r);
      }
    }
  else
    i = [];
  return i;
}
function Tr(e, t, n = {}, o, i) {
  if (ee.ce || ee.parent && St(ee.parent) && ee.parent.ce)
    return De(), Rn(
      ge,
      null,
      [le("slot", n, o)],
      64
    );
  let r = e[t];
  d.NODE_ENV !== "production" && r && r.length > 1 && (v(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), De();
  const s = r && $r(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  s && s.key, u = Rn(
    ge,
    {
      key: (l && !Xe(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!s && o ? "_fb" : "")
    },
    s || [],
    s && e._ === 1 ? 64 : -2
  );
  return u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), r && r._c && (r._d = !0), u;
}
function $r(e) {
  return e.some((t) => ln(t) ? !(t.type === me || t.type === ge && !$r(t.children)) : !0) ? e : null;
}
const No = (e) => e ? es(e) ? Yn(e) : No(e.parent) : null, Et = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Y(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => d.NODE_ENV !== "production" ? je(e.props) : e.props,
    $attrs: (e) => d.NODE_ENV !== "production" ? je(e.attrs) : e.attrs,
    $slots: (e) => d.NODE_ENV !== "production" ? je(e.slots) : e.slots,
    $refs: (e) => d.NODE_ENV !== "production" ? je(e.refs) : e.refs,
    $parent: (e) => No(e.parent),
    $root: (e) => No(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Go(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = pl.bind(e.proxy)),
    $watch: (e) => Dc.bind(e)
  })
), qo = (e) => e === "_" || e === "$", so = (e, t) => e !== j && !e.__isScriptSetup && L(e, t), Ar = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: r, accessCache: s, type: l, appContext: u } = e;
    if (d.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let h;
    if (t[0] !== "$") {
      const y = s[t];
      if (y !== void 0)
        switch (y) {
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
        if (so(o, t))
          return s[t] = 1, o[t];
        if (i !== j && L(i, t))
          return s[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = e.propsOptions[0]) && L(h, t)
        )
          return s[t] = 3, r[t];
        if (n !== j && L(n, t))
          return s[t] = 4, n[t];
        yo && (s[t] = 0);
      }
    }
    const p = Et[t];
    let a, m;
    if (p)
      return t === "$attrs" ? (X(e.attrs, "get", ""), d.NODE_ENV !== "production" && In()) : d.NODE_ENV !== "production" && t === "$slots" && X(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== j && L(n, t))
      return s[t] = 4, n[t];
    if (
      // global properties
      m = u.config.globalProperties, L(m, t)
    )
      return m[t];
    d.NODE_ENV !== "production" && ee && (!z(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== j && qo(t[0]) && L(i, t) ? v(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ee && v(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return so(i, t) ? (i[t] = n, !0) : d.NODE_ENV !== "production" && i.__isScriptSetup && L(i, t) ? (v(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== j && L(o, t) ? (o[t] = n, !0) : L(e.props, t) ? (d.NODE_ENV !== "production" && v(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (d.NODE_ENV !== "production" && v(
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
    let l;
    return !!n[s] || e !== j && L(e, s) || so(t, s) || (l = r[0]) && L(l, s) || L(o, s) || L(Et, s) || L(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : L(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
d.NODE_ENV !== "production" && (Ar.ownKeys = (e) => (v(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Wl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Et).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Et[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), t;
}
function ql(e) {
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
function Gl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(R(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (qo(o[0])) {
        v(
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
function $n(e) {
  return C(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Jl(e, t) {
  return !e || !t ? e || t : C(e) && C(t) ? e.concat(t) : Y({}, $n(e), $n(t));
}
function Yl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? v(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let yo = !0;
function zl(e) {
  const t = Go(e), n = e.proxy, o = e.ctx;
  yo = !1, t.beforeCreate && pi(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: r,
    methods: s,
    watch: l,
    provide: u,
    inject: h,
    // lifecycle
    created: p,
    beforeMount: a,
    mounted: m,
    beforeUpdate: y,
    updated: x,
    activated: M,
    deactivated: oe,
    beforeDestroy: q,
    beforeUnmount: Q,
    destroyed: k,
    unmounted: _e,
    render: T,
    renderTracked: te,
    renderTriggered: Oe,
    errorCaptured: ie,
    serverPrefetch: de,
    // public API
    expose: Le,
    inheritAttrs: nt,
    // assets
    components: Ve,
    directives: un,
    filters: ei
  } = t, ot = d.NODE_ENV !== "production" ? Yl() : null;
  if (d.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const P in F)
        ot("Props", P);
  }
  if (h && Ql(h, o, ot), s)
    for (const F in s) {
      const P = s[F];
      $(P) ? (d.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: P.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = P.bind(n), d.NODE_ENV !== "production" && ot("Methods", F)) : d.NODE_ENV !== "production" && v(
        `Method "${F}" has type "${typeof P}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    d.NODE_ENV !== "production" && !$(i) && v(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = i.call(n, n);
    if (d.NODE_ENV !== "production" && Ao(F) && v(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !W(F))
      d.NODE_ENV !== "production" && v("data() should return an object.");
    else if (e.data = Kn(F), d.NODE_ENV !== "production")
      for (const P in F)
        ot("Data", P), qo(P[0]) || Object.defineProperty(o, P, {
          configurable: !0,
          enumerable: !0,
          get: () => F[P],
          set: Z
        });
  }
  if (yo = !0, r)
    for (const F in r) {
      const P = r[F], $e = $(P) ? P.bind(n, n) : $(P.get) ? P.get.bind(n, n) : Z;
      d.NODE_ENV !== "production" && $e === Z && v(`Computed property "${F}" has no getter.`);
      const Qn = !$(P) && $(P.set) ? P.set.bind(n) : d.NODE_ENV !== "production" ? () => {
        v(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : Z, Mt = is({
        get: $e,
        set: Qn
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Mt.value,
        set: (yt) => Mt.value = yt
      }), d.NODE_ENV !== "production" && ot("Computed", F);
    }
  if (l)
    for (const F in l)
      Mr(l[F], o, n, F);
  if (u) {
    const F = $(u) ? u.call(n) : u;
    Reflect.ownKeys(F).forEach((P) => {
      oc(P, F[P]);
    });
  }
  p && pi(p, e, "c");
  function pe(F, P) {
    C(P) ? P.forEach(($e) => F($e.bind(n))) : P && F(P.bind(n));
  }
  if (pe(Il, a), pe(Rl, m), pe(Pl, y), pe(jl, x), pe($l, M), pe(Al, oe), pe(kl, ie), pe(Ul, te), pe(Ll, Oe), pe(Fl, Q), pe(Cr, _e), pe(Hl, de), C(Le))
    if (Le.length) {
      const F = e.exposed || (e.exposed = {});
      Le.forEach((P) => {
        Object.defineProperty(F, P, {
          get: () => n[P],
          set: ($e) => n[P] = $e
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Z && (e.render = T), nt != null && (e.inheritAttrs = nt), Ve && (e.components = Ve), un && (e.directives = un), de && Vr(e);
}
function Ql(e, t, n = Z) {
  C(e) && (e = vo(e));
  for (const o in e) {
    const i = e[o];
    let r;
    W(i) ? "default" in i ? r = _n(
      i.from || o,
      i.default,
      !0
    ) : r = _n(i.from || o) : r = _n(i), J(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, d.NODE_ENV !== "production" && n("Inject", o);
  }
}
function pi(e, t, n) {
  He(
    C(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Mr(e, t, n, o) {
  let i = o.includes(".") ? Wr(n, o) : () => n[o];
  if (z(e)) {
    const r = t[e];
    $(r) ? qt(i, r) : d.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    qt(i, e.bind(n));
  else if (W(e))
    if (C(e))
      e.forEach((r) => Mr(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? qt(i, r, e) : d.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else d.NODE_ENV !== "production" && v(`Invalid watch option: "${o}"`, e);
}
function Go(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = r.get(t);
  let u;
  return l ? u = l : !i.length && !n && !o ? u = t : (u = {}, i.length && i.forEach(
    (h) => An(u, h, s, !0)
  ), An(u, t, s)), W(t) && r.set(t, u), u;
}
function An(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && An(e, r, n, !0), i && i.forEach(
    (s) => An(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      d.NODE_ENV !== "production" && v(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Xl[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const Xl = {
  data: hi,
  props: gi,
  emits: gi,
  // objects
  methods: kt,
  computed: kt,
  // lifecycle
  beforeCreate: ue,
  created: ue,
  beforeMount: ue,
  mounted: ue,
  beforeUpdate: ue,
  updated: ue,
  beforeDestroy: ue,
  beforeUnmount: ue,
  destroyed: ue,
  unmounted: ue,
  activated: ue,
  deactivated: ue,
  errorCaptured: ue,
  serverPrefetch: ue,
  // assets
  components: kt,
  directives: kt,
  // watch
  watch: ec,
  // provide / inject
  provide: hi,
  inject: Zl
};
function hi(e, t) {
  return t ? e ? function() {
    return Y(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Zl(e, t) {
  return kt(vo(e), vo(t));
}
function vo(e) {
  if (C(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kt(e, t) {
  return e ? Y(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function gi(e, t) {
  return e ? C(e) && C(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Y(
    /* @__PURE__ */ Object.create(null),
    $n(e),
    $n(t ?? {})
  ) : t;
}
function ec(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Y(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ue(e[o], t[o]);
  return n;
}
function Ir() {
  return {
    app: null,
    config: {
      isNativeTag: cs,
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
let tc = 0;
function nc(e, t) {
  return function(o, i = null) {
    $(o) || (o = Y({}, o)), i != null && !W(i) && (d.NODE_ENV !== "production" && v("root props passed to app.mount() must be an object."), i = null);
    const r = Ir(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const h = r.app = {
      _uid: tc++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Vi,
      get config() {
        return r.config;
      },
      set config(p) {
        d.NODE_ENV !== "production" && v(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...a) {
        return s.has(p) ? d.NODE_ENV !== "production" && v("Plugin has already been applied to target app.") : p && $(p.install) ? (s.add(p), p.install(h, ...a)) : $(p) ? (s.add(p), p(h, ...a)) : d.NODE_ENV !== "production" && v(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(p) {
        return r.mixins.includes(p) ? d.NODE_ENV !== "production" && v(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), h;
      },
      component(p, a) {
        return d.NODE_ENV !== "production" && xo(p, r.config), a ? (d.NODE_ENV !== "production" && r.components[p] && v(`Component "${p}" has already been registered in target app.`), r.components[p] = a, h) : r.components[p];
      },
      directive(p, a) {
        return d.NODE_ENV !== "production" && Dr(p), a ? (d.NODE_ENV !== "production" && r.directives[p] && v(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, h) : r.directives[p];
      },
      mount(p, a, m) {
        if (u)
          d.NODE_ENV !== "production" && v(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.NODE_ENV !== "production" && p.__vue_app__ && v(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const y = h._ceVNode || le(o, i);
          return y.appContext = r, m === !0 ? m = "svg" : m === !1 && (m = void 0), d.NODE_ENV !== "production" && (r.reload = () => {
            e(
              ut(y),
              p,
              m
            );
          }), a && t ? t(y, p) : e(y, p, m), u = !0, h._container = p, p.__vue_app__ = h, d.NODE_ENV !== "production" && (h._instance = y.component, bl(h, Vi)), Yn(y.component);
        }
      },
      onUnmount(p) {
        d.NODE_ENV !== "production" && typeof p != "function" && v(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        u ? (He(
          l,
          h._instance,
          16
        ), e(null, h._container), d.NODE_ENV !== "production" && (h._instance = null, Nl(h)), delete h._container.__vue_app__) : d.NODE_ENV !== "production" && v("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return d.NODE_ENV !== "production" && p in r.provides && v(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), r.provides[p] = a, h;
      },
      runWithContext(p) {
        const a = Ct;
        Ct = h;
        try {
          return p();
        } finally {
          Ct = a;
        }
      }
    };
    return h;
  };
}
let Ct = null;
function oc(e, t) {
  if (!ne)
    d.NODE_ENV !== "production" && v("provide() can only be used inside setup().");
  else {
    let n = ne.provides;
    const o = ne.parent && ne.parent.provides;
    o === n && (n = ne.provides = Object.create(o)), n[e] = t;
  }
}
function _n(e, t, n = !1) {
  const o = ne || ee;
  if (o || Ct) {
    const i = Ct ? Ct._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    d.NODE_ENV !== "production" && v(`injection "${String(e)}" not found.`);
  } else d.NODE_ENV !== "production" && v("inject() can only be used inside setup() or functional components.");
}
const Rr = {}, Pr = () => Object.create(Rr), jr = (e) => Object.getPrototypeOf(e) === Rr;
function ic(e, t, n, o = !1) {
  const i = {}, r = Pr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Fr(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  d.NODE_ENV !== "production" && Lr(t || {}, i, e), n ? e.props = o ? i : qs(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function rc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function sc(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, l = R(i), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(d.NODE_ENV !== "production" && rc(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let m = p[a];
        if (Jn(e.emitsOptions, m))
          continue;
        const y = t[m];
        if (u)
          if (L(r, m))
            y !== r[m] && (r[m] = y, h = !0);
          else {
            const x = we(m);
            i[x] = Oo(
              u,
              l,
              x,
              y,
              e,
              !1
            );
          }
        else
          y !== r[m] && (r[m] = y, h = !0);
      }
    }
  } else {
    Fr(e, t, i, r) && (h = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !L(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Je(a)) === a || !L(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[a] = Oo(
        u,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete i[a]);
    if (r !== l)
      for (const a in r)
        (!t || !L(t, a)) && (delete r[a], h = !0);
  }
  h && Re(e.attrs, "set", ""), d.NODE_ENV !== "production" && Lr(t || {}, i, e);
}
function Fr(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let u in t) {
      if (Bt(u))
        continue;
      const h = t[u];
      let p;
      i && L(i, p = we(u)) ? !r || !r.includes(p) ? n[p] = h : (l || (l = {}))[p] = h : Jn(e.emitsOptions, u) || (!(u in o) || h !== o[u]) && (o[u] = h, s = !0);
    }
  if (r) {
    const u = R(n), h = l || j;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = Oo(
        i,
        u,
        a,
        h[a],
        e,
        !L(h, a)
      );
    }
  }
  return s;
}
function Oo(e, t, n, o, i, r) {
  const s = e[n];
  if (s != null) {
    const l = L(s, "default");
    if (l && o === void 0) {
      const u = s.default;
      if (s.type !== Function && !s.skipFactory && $(u)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const p = cn(i);
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
    ] && (r && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Je(n)) && (o = !0));
  }
  return o;
}
const lc = /* @__PURE__ */ new WeakMap();
function Hr(e, t, n = !1) {
  const o = n ? lc : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, l = [];
  let u = !1;
  if (!$(e)) {
    const p = (a) => {
      u = !0;
      const [m, y] = Hr(a, t, !0);
      Y(s, m), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return W(e) && o.set(e, Vt), Vt;
  if (C(r))
    for (let p = 0; p < r.length; p++) {
      d.NODE_ENV !== "production" && !z(r[p]) && v("props must be strings when using array syntax.", r[p]);
      const a = we(r[p]);
      mi(a) && (s[a] = j);
    }
  else if (r) {
    d.NODE_ENV !== "production" && !W(r) && v("invalid props options", r);
    for (const p in r) {
      const a = we(p);
      if (mi(a)) {
        const m = r[p], y = s[a] = C(m) || $(m) ? { type: m } : Y({}, m), x = y.type;
        let M = !1, oe = !0;
        if (C(x))
          for (let q = 0; q < x.length; ++q) {
            const Q = x[q], k = $(Q) && Q.name;
            if (k === "Boolean") {
              M = !0;
              break;
            } else k === "String" && (oe = !1);
          }
        else
          M = $(x) && x.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = M, y[
          1
          /* shouldCastTrue */
        ] = oe, (M || L(y, "default")) && l.push(a);
      }
    }
  }
  const h = [s, l];
  return W(e) && o.set(e, h), h;
}
function mi(e) {
  return e[0] !== "$" && !Bt(e) ? !0 : (d.NODE_ENV !== "production" && v(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function cc(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Lr(e, t, n) {
  const o = R(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => we(s));
  for (const s in i) {
    let l = i[s];
    l != null && uc(
      s,
      o[s],
      l,
      d.NODE_ENV !== "production" ? je(o) : o,
      !r.includes(s)
    );
  }
}
function uc(e, t, n, o, i) {
  const { type: r, required: s, validator: l, skipCheck: u } = n;
  if (s && i) {
    v('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !u) {
      let h = !1;
      const p = C(r) ? r : [r], a = [];
      for (let m = 0; m < p.length && !h; m++) {
        const { valid: y, expectedType: x } = ac(t, p[m]);
        a.push(x || ""), h = y;
      }
      if (!h) {
        v(dc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && v('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const fc = /* @__PURE__ */ Qe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function ac(e, t) {
  let n;
  const o = cc(t);
  if (o === "null")
    n = e === null;
  else if (fc(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = W(e) : o === "Array" ? n = C(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function dc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Ln).join(" | ")}`;
  const i = n[0], r = Mo(t), s = _i(t, i), l = _i(t, r);
  return n.length === 1 && Ei(i) && !pc(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, Ei(r) && (o += `with value ${l}.`), o;
}
function _i(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ei(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function pc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ur = (e) => e[0] === "_" || e === "$stable", Jo = (e) => C(e) ? e.map(Se) : [Se(e)], hc = (e, t, n) => {
  if (t._n)
    return t;
  const o = Ut((...i) => (d.NODE_ENV !== "production" && ne && (!n || n.root === ne.root) && v(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Jo(t(...i))), n);
  return o._c = !1, o;
}, kr = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Ur(i)) continue;
    const r = e[i];
    if ($(r))
      t[i] = hc(i, r, o);
    else if (r != null) {
      d.NODE_ENV !== "production" && v(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = Jo(r);
      t[i] = () => s;
    }
  }
}, Br = (e, t) => {
  d.NODE_ENV !== "production" && !Wo(e.vnode) && v(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Jo(t);
  e.slots.default = () => n;
}, wo = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, gc = (e, t, n) => {
  const o = e.slots = Pr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (wo(o, t, n), n && On(o, "_", i, !0)) : kr(t, o);
  } else t && Br(e, t);
}, mc = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = j;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? d.NODE_ENV !== "production" && Fe ? (wo(i, t, n), Re(e, "set", "$slots")) : n && l === 1 ? r = !1 : wo(i, t, n) : (r = !t.$stable, kr(t, i)), s = t;
  } else t && (Br(e, t), s = { default: 1 });
  if (r)
    for (const l in i)
      !Ur(l) && s[l] == null && delete i[l];
};
let Ft, lt;
function ke(e, t) {
  e.appContext.config.performance && Mn() && lt.mark(`vue-${t}-${e.uid}`), d.NODE_ENV !== "production" && wl(e, t, Mn() ? lt.now() : Date.now());
}
function Be(e, t) {
  if (e.appContext.config.performance && Mn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    lt.mark(o), lt.measure(
      `<${zn(e, e.type)}> ${t}`,
      n,
      o
    ), lt.clearMarks(n), lt.clearMarks(o);
  }
  d.NODE_ENV !== "production" && Dl(e, t, Mn() ? lt.now() : Date.now());
}
function Mn() {
  return Ft !== void 0 || (typeof window < "u" && window.performance ? (Ft = !0, lt = window.performance) : Ft = !1), Ft;
}
function _c() {
  const e = [];
  if (d.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ne = $c;
function Ec(e) {
  return bc(e);
}
function bc(e, t) {
  _c();
  const n = nn();
  n.__VUE__ = !0, d.NODE_ENV !== "production" && yr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: r,
    createElement: s,
    createText: l,
    createComment: u,
    setText: h,
    setElementText: p,
    parentNode: a,
    nextSibling: m,
    setScopeId: y = Z,
    insertStaticContent: x
  } = e, M = (c, f, g, b = null, _ = null, E = null, D = void 0, w = null, O = d.NODE_ENV !== "production" && Fe ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Ht(c, f) && (b = fn(c), it(c, _, E, !0), c = null), f.patchFlag === -2 && (O = !1, f.dynamicChildren = null);
    const { type: N, ref: A, shapeFlag: V } = f;
    switch (N) {
      case sn:
        oe(c, f, g, b);
        break;
      case me:
        q(c, f, g, b);
        break;
      case bn:
        c == null ? Q(f, g, b, D) : d.NODE_ENV !== "production" && k(c, f, g, D);
        break;
      case ge:
        un(
          c,
          f,
          g,
          b,
          _,
          E,
          D,
          w,
          O
        );
        break;
      default:
        V & 1 ? te(
          c,
          f,
          g,
          b,
          _,
          E,
          D,
          w,
          O
        ) : V & 6 ? ei(
          c,
          f,
          g,
          b,
          _,
          E,
          D,
          w,
          O
        ) : V & 64 || V & 128 ? N.process(
          c,
          f,
          g,
          b,
          _,
          E,
          D,
          w,
          O,
          Rt
        ) : d.NODE_ENV !== "production" && v("Invalid VNode type:", N, `(${typeof N})`);
    }
    A != null && _ && Tn(A, c && c.ref, E, f || c, !f);
  }, oe = (c, f, g, b) => {
    if (c == null)
      o(
        f.el = l(f.children),
        g,
        b
      );
    else {
      const _ = f.el = c.el;
      f.children !== c.children && h(_, f.children);
    }
  }, q = (c, f, g, b) => {
    c == null ? o(
      f.el = u(f.children || ""),
      g,
      b
    ) : f.el = c.el;
  }, Q = (c, f, g, b) => {
    [c.el, c.anchor] = x(
      c.children,
      f,
      g,
      b,
      c.el,
      c.anchor
    );
  }, k = (c, f, g, b) => {
    if (f.children !== c.children) {
      const _ = m(c.anchor);
      T(c), [f.el, f.anchor] = x(
        f.children,
        g,
        _,
        b
      );
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, _e = ({ el: c, anchor: f }, g, b) => {
    let _;
    for (; c && c !== f; )
      _ = m(c), o(c, g, b), c = _;
    o(f, g, b);
  }, T = ({ el: c, anchor: f }) => {
    let g;
    for (; c && c !== f; )
      g = m(c), i(c), c = g;
    i(f);
  }, te = (c, f, g, b, _, E, D, w, O) => {
    f.type === "svg" ? D = "svg" : f.type === "math" && (D = "mathml"), c == null ? Oe(
      f,
      g,
      b,
      _,
      E,
      D,
      w,
      O
    ) : Le(
      c,
      f,
      _,
      E,
      D,
      w,
      O
    );
  }, Oe = (c, f, g, b, _, E, D, w) => {
    let O, N;
    const { props: A, shapeFlag: V, transition: S, dirs: I } = c;
    if (O = c.el = s(
      c.type,
      E,
      A && A.is,
      A
    ), V & 8 ? p(O, c.children) : V & 16 && de(
      c.children,
      O,
      null,
      b,
      _,
      lo(c, E),
      D,
      w
    ), I && ft(c, null, b, "created"), ie(O, c, c.scopeId, D, b), A) {
      for (const G in A)
        G !== "value" && !Bt(G) && r(O, G, null, A[G], E, b);
      "value" in A && r(O, "value", null, A.value, E), (N = A.onVnodeBeforeMount) && Me(N, b, c);
    }
    d.NODE_ENV !== "production" && (On(O, "__vnode", c, !0), On(O, "__vueParentComponent", b, !0)), I && ft(c, null, b, "beforeMount");
    const H = Nc(_, S);
    H && S.beforeEnter(O), o(O, f, g), ((N = A && A.onVnodeMounted) || H || I) && Ne(() => {
      N && Me(N, b, c), H && S.enter(O), I && ft(c, null, b, "mounted");
    }, _);
  }, ie = (c, f, g, b, _) => {
    if (g && y(c, g), b)
      for (let E = 0; E < b.length; E++)
        y(c, b[E]);
    if (_) {
      let E = _.subTree;
      if (d.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = Qo(E.children) || E), f === E || Yr(E.type) && (E.ssContent === f || E.ssFallback === f)) {
        const D = _.vnode;
        ie(
          c,
          D,
          D.scopeId,
          D.slotScopeIds,
          _.parent
        );
      }
    }
  }, de = (c, f, g, b, _, E, D, w, O = 0) => {
    for (let N = O; N < c.length; N++) {
      const A = c[N] = w ? st(c[N]) : Se(c[N]);
      M(
        null,
        A,
        f,
        g,
        b,
        _,
        E,
        D,
        w
      );
    }
  }, Le = (c, f, g, b, _, E, D) => {
    const w = f.el = c.el;
    d.NODE_ENV !== "production" && (w.__vnode = f);
    let { patchFlag: O, dynamicChildren: N, dirs: A } = f;
    O |= c.patchFlag & 16;
    const V = c.props || j, S = f.props || j;
    let I;
    if (g && at(g, !1), (I = S.onVnodeBeforeUpdate) && Me(I, g, f, c), A && ft(f, c, g, "beforeUpdate"), g && at(g, !0), d.NODE_ENV !== "production" && Fe && (O = 0, D = !1, N = null), (V.innerHTML && S.innerHTML == null || V.textContent && S.textContent == null) && p(w, ""), N ? (nt(
      c.dynamicChildren,
      N,
      w,
      g,
      b,
      lo(f, _),
      E
    ), d.NODE_ENV !== "production" && En(c, f)) : D || $e(
      c,
      f,
      w,
      null,
      g,
      b,
      lo(f, _),
      E,
      !1
    ), O > 0) {
      if (O & 16)
        Ve(w, V, S, g, _);
      else if (O & 2 && V.class !== S.class && r(w, "class", null, S.class, _), O & 4 && r(w, "style", V.style, S.style, _), O & 8) {
        const H = f.dynamicProps;
        for (let G = 0; G < H.length; G++) {
          const B = H[G], Ee = V[B], re = S[B];
          (re !== Ee || B === "value") && r(w, B, Ee, re, _, g);
        }
      }
      O & 1 && c.children !== f.children && p(w, f.children);
    } else !D && N == null && Ve(w, V, S, g, _);
    ((I = S.onVnodeUpdated) || A) && Ne(() => {
      I && Me(I, g, f, c), A && ft(f, c, g, "updated");
    }, b);
  }, nt = (c, f, g, b, _, E, D) => {
    for (let w = 0; w < f.length; w++) {
      const O = c[w], N = f[w], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ht(O, N) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? a(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      M(
        O,
        N,
        A,
        null,
        b,
        _,
        E,
        D,
        !0
      );
    }
  }, Ve = (c, f, g, b, _) => {
    if (f !== g) {
      if (f !== j)
        for (const E in f)
          !Bt(E) && !(E in g) && r(
            c,
            E,
            f[E],
            null,
            _,
            b
          );
      for (const E in g) {
        if (Bt(E)) continue;
        const D = g[E], w = f[E];
        D !== w && E !== "value" && r(c, E, w, D, _, b);
      }
      "value" in g && r(c, "value", f.value, g.value, _);
    }
  }, un = (c, f, g, b, _, E, D, w, O) => {
    const N = f.el = c ? c.el : l(""), A = f.anchor = c ? c.anchor : l("");
    let { patchFlag: V, dynamicChildren: S, slotScopeIds: I } = f;
    d.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Fe || V & 2048) && (V = 0, O = !1, S = null), I && (w = w ? w.concat(I) : I), c == null ? (o(N, g, b), o(A, g, b), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      A,
      _,
      E,
      D,
      w,
      O
    )) : V > 0 && V & 64 && S && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (nt(
      c.dynamicChildren,
      S,
      g,
      _,
      E,
      D,
      w
    ), d.NODE_ENV !== "production" ? En(c, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || _ && f === _.subTree) && En(
        c,
        f,
        !0
        /* shallow */
      )
    )) : $e(
      c,
      f,
      g,
      A,
      _,
      E,
      D,
      w,
      O
    );
  }, ei = (c, f, g, b, _, E, D, w, O) => {
    f.slotScopeIds = w, c == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      g,
      b,
      D,
      O
    ) : ot(
      f,
      g,
      b,
      _,
      E,
      D,
      O
    ) : pe(c, f, O);
  }, ot = (c, f, g, b, _, E, D) => {
    const w = c.component = Hc(
      c,
      b,
      _
    );
    if (d.NODE_ENV !== "production" && w.type.__hmrId && gl(w), d.NODE_ENV !== "production" && (hn(c), ke(w, "mount")), Wo(c) && (w.ctx.renderer = Rt), d.NODE_ENV !== "production" && ke(w, "init"), Uc(w, !1, D), d.NODE_ENV !== "production" && Be(w, "init"), w.asyncDep) {
      if (d.NODE_ENV !== "production" && Fe && (c.el = null), _ && _.registerDep(w, F, D), !c.el) {
        const O = w.subTree = le(me);
        q(null, O, f, g);
      }
    } else
      F(
        w,
        c,
        f,
        g,
        _,
        E,
        D
      );
    d.NODE_ENV !== "production" && (gn(), Be(w, "mount"));
  }, pe = (c, f, g) => {
    const b = f.component = c.component;
    if (Cc(c, f, g))
      if (b.asyncDep && !b.asyncResolved) {
        d.NODE_ENV !== "production" && hn(f), P(b, f, g), d.NODE_ENV !== "production" && gn();
        return;
      } else
        b.next = f, b.update();
    else
      f.el = c.el, b.vnode = f;
  }, F = (c, f, g, b, _, E, D) => {
    const w = () => {
      if (c.isMounted) {
        let { next: V, bu: S, u: I, parent: H, vnode: G } = c;
        {
          const be = Kr(c);
          if (be) {
            V && (V.el = G.el, P(c, V, D)), be.asyncDep.then(() => {
              c.isUnmounted || w();
            });
            return;
          }
        }
        let B = V, Ee;
        d.NODE_ENV !== "production" && hn(V || c.vnode), at(c, !1), V ? (V.el = G.el, P(c, V, D)) : V = G, S && Ot(S), (Ee = V.props && V.props.onVnodeBeforeUpdate) && Me(Ee, H, V, G), at(c, !0), d.NODE_ENV !== "production" && ke(c, "render");
        const re = co(c);
        d.NODE_ENV !== "production" && Be(c, "render");
        const xe = c.subTree;
        c.subTree = re, d.NODE_ENV !== "production" && ke(c, "patch"), M(
          xe,
          re,
          // parent may have changed if it's in a teleport
          a(xe.el),
          // anchor may have changed if it's in a fragment
          fn(xe),
          c,
          _,
          E
        ), d.NODE_ENV !== "production" && Be(c, "patch"), V.el = re.el, B === null && Tc(c, re.el), I && Ne(I, _), (Ee = V.props && V.props.onVnodeUpdated) && Ne(
          () => Me(Ee, H, V, G),
          _
        ), d.NODE_ENV !== "production" && vr(c), d.NODE_ENV !== "production" && gn();
      } else {
        let V;
        const { el: S, props: I } = f, { bm: H, m: G, parent: B, root: Ee, type: re } = c, xe = St(f);
        if (at(c, !1), H && Ot(H), !xe && (V = I && I.onVnodeBeforeMount) && Me(V, B, f), at(c, !0), S && oi) {
          const be = () => {
            d.NODE_ENV !== "production" && ke(c, "render"), c.subTree = co(c), d.NODE_ENV !== "production" && Be(c, "render"), d.NODE_ENV !== "production" && ke(c, "hydrate"), oi(
              S,
              c.subTree,
              c,
              _,
              null
            ), d.NODE_ENV !== "production" && Be(c, "hydrate");
          };
          xe && re.__asyncHydrate ? re.__asyncHydrate(
            S,
            c,
            be
          ) : be();
        } else {
          Ee.ce && Ee.ce._injectChildStyle(re), d.NODE_ENV !== "production" && ke(c, "render");
          const be = c.subTree = co(c);
          d.NODE_ENV !== "production" && Be(c, "render"), d.NODE_ENV !== "production" && ke(c, "patch"), M(
            null,
            be,
            g,
            b,
            c,
            _,
            E
          ), d.NODE_ENV !== "production" && Be(c, "patch"), f.el = be.el;
        }
        if (G && Ne(G, _), !xe && (V = I && I.onVnodeMounted)) {
          const be = f;
          Ne(
            () => Me(V, B, be),
            _
          );
        }
        (f.shapeFlag & 256 || B && St(B.vnode) && B.vnode.shapeFlag & 256) && c.a && Ne(c.a, _), c.isMounted = !0, d.NODE_ENV !== "production" && yl(c), f = g = b = null;
      }
    };
    c.scope.on();
    const O = c.effect = new zi(w);
    c.scope.off();
    const N = c.update = O.run.bind(O), A = c.job = O.runIfDirty.bind(O);
    A.i = c, A.id = c.uid, O.scheduler = () => qn(A), at(c, !0), d.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (V) => Ot(c.rtc, V) : void 0, O.onTrigger = c.rtg ? (V) => Ot(c.rtg, V) : void 0), N();
  }, P = (c, f, g) => {
    f.component = c;
    const b = c.vnode.props;
    c.vnode = f, c.next = null, sc(c, f.props, b, g), mc(c, f.children, g), Ze(), ai(c), et();
  }, $e = (c, f, g, b, _, E, D, w, O = !1) => {
    const N = c && c.children, A = c ? c.shapeFlag : 0, V = f.children, { patchFlag: S, shapeFlag: I } = f;
    if (S > 0) {
      if (S & 128) {
        Mt(
          N,
          V,
          g,
          b,
          _,
          E,
          D,
          w,
          O
        );
        return;
      } else if (S & 256) {
        Qn(
          N,
          V,
          g,
          b,
          _,
          E,
          D,
          w,
          O
        );
        return;
      }
    }
    I & 8 ? (A & 16 && It(N, _, E), V !== N && p(g, V)) : A & 16 ? I & 16 ? Mt(
      N,
      V,
      g,
      b,
      _,
      E,
      D,
      w,
      O
    ) : It(N, _, E, !0) : (A & 8 && p(g, ""), I & 16 && de(
      V,
      g,
      b,
      _,
      E,
      D,
      w,
      O
    ));
  }, Qn = (c, f, g, b, _, E, D, w, O) => {
    c = c || Vt, f = f || Vt;
    const N = c.length, A = f.length, V = Math.min(N, A);
    let S;
    for (S = 0; S < V; S++) {
      const I = f[S] = O ? st(f[S]) : Se(f[S]);
      M(
        c[S],
        I,
        g,
        null,
        _,
        E,
        D,
        w,
        O
      );
    }
    N > A ? It(
      c,
      _,
      E,
      !0,
      !1,
      V
    ) : de(
      f,
      g,
      b,
      _,
      E,
      D,
      w,
      O,
      V
    );
  }, Mt = (c, f, g, b, _, E, D, w, O) => {
    let N = 0;
    const A = f.length;
    let V = c.length - 1, S = A - 1;
    for (; N <= V && N <= S; ) {
      const I = c[N], H = f[N] = O ? st(f[N]) : Se(f[N]);
      if (Ht(I, H))
        M(
          I,
          H,
          g,
          null,
          _,
          E,
          D,
          w,
          O
        );
      else
        break;
      N++;
    }
    for (; N <= V && N <= S; ) {
      const I = c[V], H = f[S] = O ? st(f[S]) : Se(f[S]);
      if (Ht(I, H))
        M(
          I,
          H,
          g,
          null,
          _,
          E,
          D,
          w,
          O
        );
      else
        break;
      V--, S--;
    }
    if (N > V) {
      if (N <= S) {
        const I = S + 1, H = I < A ? f[I].el : b;
        for (; N <= S; )
          M(
            null,
            f[N] = O ? st(f[N]) : Se(f[N]),
            g,
            H,
            _,
            E,
            D,
            w,
            O
          ), N++;
      }
    } else if (N > S)
      for (; N <= V; )
        it(c[N], _, E, !0), N++;
    else {
      const I = N, H = N, G = /* @__PURE__ */ new Map();
      for (N = H; N <= S; N++) {
        const ce = f[N] = O ? st(f[N]) : Se(f[N]);
        ce.key != null && (d.NODE_ENV !== "production" && G.has(ce.key) && v(
          "Duplicate keys found during update:",
          JSON.stringify(ce.key),
          "Make sure keys are unique."
        ), G.set(ce.key, N));
      }
      let B, Ee = 0;
      const re = S - H + 1;
      let xe = !1, be = 0;
      const Pt = new Array(re);
      for (N = 0; N < re; N++) Pt[N] = 0;
      for (N = I; N <= V; N++) {
        const ce = c[N];
        if (Ee >= re) {
          it(ce, _, E, !0);
          continue;
        }
        let Ae;
        if (ce.key != null)
          Ae = G.get(ce.key);
        else
          for (B = H; B <= S; B++)
            if (Pt[B - H] === 0 && Ht(ce, f[B])) {
              Ae = B;
              break;
            }
        Ae === void 0 ? it(ce, _, E, !0) : (Pt[Ae - H] = N + 1, Ae >= be ? be = Ae : xe = !0, M(
          ce,
          f[Ae],
          g,
          null,
          _,
          E,
          D,
          w,
          O
        ), Ee++);
      }
      const ii = xe ? yc(Pt) : Vt;
      for (B = ii.length - 1, N = re - 1; N >= 0; N--) {
        const ce = H + N, Ae = f[ce], ri = ce + 1 < A ? f[ce + 1].el : b;
        Pt[N] === 0 ? M(
          null,
          Ae,
          g,
          ri,
          _,
          E,
          D,
          w,
          O
        ) : xe && (B < 0 || N !== ii[B] ? yt(Ae, g, ri, 2) : B--);
      }
    }
  }, yt = (c, f, g, b, _ = null) => {
    const { el: E, type: D, transition: w, children: O, shapeFlag: N } = c;
    if (N & 6) {
      yt(c.component.subTree, f, g, b);
      return;
    }
    if (N & 128) {
      c.suspense.move(f, g, b);
      return;
    }
    if (N & 64) {
      D.move(c, f, g, Rt);
      return;
    }
    if (D === ge) {
      o(E, f, g);
      for (let V = 0; V < O.length; V++)
        yt(O[V], f, g, b);
      o(c.anchor, f, g);
      return;
    }
    if (D === bn) {
      _e(c, f, g);
      return;
    }
    if (b !== 2 && N & 1 && w)
      if (b === 0)
        w.beforeEnter(E), o(E, f, g), Ne(() => w.enter(E), _);
      else {
        const { leave: V, delayLeave: S, afterLeave: I } = w, H = () => o(E, f, g), G = () => {
          V(E, () => {
            H(), I && I();
          });
        };
        S ? S(E, H, G) : G();
      }
    else
      o(E, f, g);
  }, it = (c, f, g, b = !1, _ = !1) => {
    const {
      type: E,
      props: D,
      ref: w,
      children: O,
      dynamicChildren: N,
      shapeFlag: A,
      patchFlag: V,
      dirs: S,
      cacheIndex: I
    } = c;
    if (V === -2 && (_ = !1), w != null && Tn(w, null, g, c, !0), I != null && (f.renderCache[I] = void 0), A & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const H = A & 1 && S, G = !St(c);
    let B;
    if (G && (B = D && D.onVnodeBeforeUnmount) && Me(B, f, c), A & 6)
      ls(c.component, g, b);
    else {
      if (A & 128) {
        c.suspense.unmount(g, b);
        return;
      }
      H && ft(c, null, f, "beforeUnmount"), A & 64 ? c.type.remove(
        c,
        f,
        g,
        Rt,
        b
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== ge || V > 0 && V & 64) ? It(
        N,
        f,
        g,
        !1,
        !0
      ) : (E === ge && V & 384 || !_ && A & 16) && It(O, f, g), b && Xn(c);
    }
    (G && (B = D && D.onVnodeUnmounted) || H) && Ne(() => {
      B && Me(B, f, c), H && ft(c, null, f, "unmounted");
    }, g);
  }, Xn = (c) => {
    const { type: f, el: g, anchor: b, transition: _ } = c;
    if (f === ge) {
      d.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((D) => {
        D.type === me ? i(D.el) : Xn(D);
      }) : ss(g, b);
      return;
    }
    if (f === bn) {
      T(c);
      return;
    }
    const E = () => {
      i(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: D, delayLeave: w } = _, O = () => D(g, E);
      w ? w(c.el, E, O) : O();
    } else
      E();
  }, ss = (c, f) => {
    let g;
    for (; c !== f; )
      g = m(c), i(c), c = g;
    i(f);
  }, ls = (c, f, g) => {
    d.NODE_ENV !== "production" && c.type.__hmrId && ml(c);
    const { bum: b, scope: _, job: E, subTree: D, um: w, m: O, a: N } = c;
    bi(O), bi(N), b && Ot(b), _.stop(), E && (E.flags |= 8, it(D, c, f, g)), w && Ne(w, f), Ne(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), d.NODE_ENV !== "production" && Ol(c);
  }, It = (c, f, g, b = !1, _ = !1, E = 0) => {
    for (let D = E; D < c.length; D++)
      it(c[D], f, g, b, _);
  }, fn = (c) => {
    if (c.shapeFlag & 6)
      return fn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = m(c.anchor || c.el), g = f && f[Sl];
    return g ? m(g) : f;
  };
  let Zn = !1;
  const ti = (c, f, g) => {
    c == null ? f._vnode && it(f._vnode, null, null, !0) : M(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = c, Zn || (Zn = !0, ai(), Er(), Zn = !1);
  }, Rt = {
    p: M,
    um: it,
    m: yt,
    r: Xn,
    mt: ot,
    mc: de,
    pc: $e,
    pbc: nt,
    n: fn,
    o: e
  };
  let ni, oi;
  return {
    render: ti,
    hydrate: ni,
    createApp: nc(ti, ni)
  };
}
function lo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function at({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Nc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function En(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (C(o) && C(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = st(i[r]), l.el = s.el), !n && l.patchFlag !== -2 && En(s, l)), l.type === sn && (l.el = s.el), d.NODE_ENV !== "production" && l.type === me && !l.el && (l.el = s.el);
    }
}
function yc(e) {
  const t = e.slice(), n = [0];
  let o, i, r, s, l;
  const u = e.length;
  for (o = 0; o < u; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (r = 0, s = n.length - 1; r < s; )
        l = r + s >> 1, e[n[l]] < h ? r = l + 1 : s = l;
      h < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, s = n[r - 1]; r-- > 0; )
    n[r] = s, s = t[s];
  return n;
}
function Kr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Kr(t);
}
function bi(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const vc = Symbol.for("v-scx"), Oc = () => {
  {
    const e = _n(vc);
    return e || d.NODE_ENV !== "production" && v(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function wc(e, t) {
  return Yo(
    e,
    null,
    d.NODE_ENV !== "production" ? Y({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function qt(e, t, n) {
  return d.NODE_ENV !== "production" && !$(t) && v(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Yo(e, t, n);
}
function Yo(e, t, n = j) {
  const { immediate: o, deep: i, flush: r, once: s } = n;
  d.NODE_ENV !== "production" && !t && (o !== void 0 && v(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && v(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && v(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = Y({}, n);
  d.NODE_ENV !== "production" && (l.onWarn = v);
  const u = t && o || !t && r !== "post";
  let h;
  if (en) {
    if (r === "sync") {
      const y = Oc();
      h = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!u) {
      const y = () => {
      };
      return y.stop = Z, y.resume = Z, y.pause = Z, y;
    }
  }
  const p = ne;
  l.call = (y, x, M) => He(y, p, x, M);
  let a = !1;
  r === "post" ? l.scheduler = (y) => {
    Ne(y, p && p.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (y, x) => {
    x ? y() : qn(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), a && (y.flags |= 2, p && (y.id = p.uid, y.i = p));
  };
  const m = sl(e, t, l);
  return en && (h ? h.push(m) : u && m()), m;
}
function Dc(e, t, n) {
  const o = this.proxy, i = z(e) ? e.includes(".") ? Wr(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const s = cn(this), l = Yo(i, r.bind(o), n);
  return s(), l;
}
function Wr(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
function zo(e, t, n = j) {
  const o = Zo();
  if (d.NODE_ENV !== "production" && !o)
    return v("useModel() called without active instance."), fi();
  const i = we(t);
  if (d.NODE_ENV !== "production" && !o.propsOptions[0][i])
    return v(`useModel() called with prop "${t}" which is not declared.`), fi();
  const r = Je(t), s = qr(e, i), l = Zs((u, h) => {
    let p, a = j, m;
    return wc(() => {
      const y = e[i];
      he(p, y) && (p = y, h());
    }), {
      get() {
        return u(), n.get ? n.get(p) : p;
      },
      set(y) {
        const x = n.set ? n.set(y) : y;
        if (!he(x, p) && !(a !== j && he(y, a)))
          return;
        const M = o.vnode.props;
        M && // check if parent has passed v-model
        (t in M || i in M || r in M) && (`onUpdate:${t}` in M || `onUpdate:${i}` in M || `onUpdate:${r}` in M) || (p = y, h()), o.emit(`update:${t}`, x), he(y, x) && he(y, a) && !he(x, m) && h(), a = y, m = x;
      }
    };
  });
  return l[Symbol.iterator] = () => {
    let u = 0;
    return {
      next() {
        return u < 2 ? { value: u++ ? s || j : l, done: !1 } : { done: !0 };
      }
    };
  }, l;
}
const qr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${Je(t)}Modifiers`];
function Vc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || j;
  if (d.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(dt(we(t)) in a)) && v(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${dt(we(t))}" prop.`
        );
      else {
        const m = p[t];
        $(m) && (m(...n) || v(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && qr(o, t.slice(7));
  if (s && (s.trim && (i = n.map((p) => z(p) ? p.trim() : p)), s.number && (i = n.map(ho))), d.NODE_ENV !== "production" && Vl(e, t, i), d.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[dt(p)] && v(
      `Event "${p}" is emitted in component ${zn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Je(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = o[l = dt(t)] || // also try camelCase event handler (#2249)
  o[l = dt(we(t))];
  !u && r && (u = o[l = dt(Je(t))]), u && He(
    u,
    e,
    6,
    i
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, He(
      h,
      e,
      6,
      i
    );
  }
}
function Gr(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, l = !1;
  if (!$(e)) {
    const u = (h) => {
      const p = Gr(h, t, !0);
      p && (l = !0, Y(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !l ? (W(e) && o.set(e, null), null) : (C(r) ? r.forEach((u) => s[u] = null) : Y(s, r), W(e) && o.set(e, s), s);
}
function Jn(e, t) {
  return !e || !tn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, Je(t)) || L(e, t));
}
let Do = !1;
function In() {
  Do = !0;
}
function co(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [r],
    slots: s,
    attrs: l,
    emit: u,
    render: h,
    renderCache: p,
    props: a,
    data: m,
    setupState: y,
    ctx: x,
    inheritAttrs: M
  } = e, oe = Cn(e);
  let q, Q;
  d.NODE_ENV !== "production" && (Do = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = i || o, te = d.NODE_ENV !== "production" && y.__isScriptSetup ? new Proxy(T, {
        get(Oe, ie, de) {
          return v(
            `Property '${String(
              ie
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Oe, ie, de);
        }
      }) : T;
      q = Se(
        h.call(
          te,
          T,
          p,
          d.NODE_ENV !== "production" ? je(a) : a,
          y,
          m,
          x
        )
      ), Q = l;
    } else {
      const T = t;
      d.NODE_ENV !== "production" && l === a && In(), q = Se(
        T.length > 1 ? T(
          d.NODE_ENV !== "production" ? je(a) : a,
          d.NODE_ENV !== "production" ? {
            get attrs() {
              return In(), je(l);
            },
            slots: s,
            emit: u
          } : { attrs: l, slots: s, emit: u }
        ) : T(
          d.NODE_ENV !== "production" ? je(a) : a,
          null
        )
      ), Q = t.props ? l : xc(l);
    }
  } catch (T) {
    Gt.length = 0, on(T, e, 1), q = le(me);
  }
  let k = q, _e;
  if (d.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([k, _e] = Jr(q)), Q && M !== !1) {
    const T = Object.keys(Q), { shapeFlag: te } = k;
    if (T.length) {
      if (te & 7)
        r && T.some(vn) && (Q = Sc(
          Q,
          r
        )), k = ut(k, Q, !1, !0);
      else if (d.NODE_ENV !== "production" && !Do && k.type !== me) {
        const Oe = Object.keys(l), ie = [], de = [];
        for (let Le = 0, nt = Oe.length; Le < nt; Le++) {
          const Ve = Oe[Le];
          tn(Ve) ? vn(Ve) || ie.push(Ve[2].toLowerCase() + Ve.slice(3)) : de.push(Ve);
        }
        de.length && v(
          `Extraneous non-props attributes (${de.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ie.length && v(
          `Extraneous non-emits event listeners (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (d.NODE_ENV !== "production" && !Ni(k) && v(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), k = ut(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (d.NODE_ENV !== "production" && !Ni(k) && v(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Ko(k, n.transition)), d.NODE_ENV !== "production" && _e ? _e(k) : q = k, Cn(oe), q;
}
const Jr = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Qo(t, !1);
  if (o) {
    if (d.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Jr(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (l) => {
    t[i] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Se(o), s];
};
function Qo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (ln(i)) {
      if (i.type !== me || i.children === "v-if") {
        if (n)
          return;
        if (n = i, d.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Qo(n.children);
      }
    } else
      return;
  }
  return n;
}
const xc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || tn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Sc = (e, t) => {
  const n = {};
  for (const o in e)
    (!vn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Ni = (e) => e.shapeFlag & 7 || e.type === me;
function Cc(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: l, patchFlag: u } = t, h = r.emitsOptions;
  if (d.NODE_ENV !== "production" && (i || l) && Fe || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? yi(o, s, h) : !!s;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const m = p[a];
        if (s[m] !== o[m] && !Jn(h, m))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? yi(o, s, h) : !0 : !!s;
  return !1;
}
function yi(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !Jn(n, r))
      return !0;
  }
  return !1;
}
function Tc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Yr = (e) => e.__isSuspense;
function $c(e, t) {
  t && t.pendingBranch ? C(e) ? t.effects.push(...e) : t.effects.push(e) : _r(e);
}
const ge = Symbol.for("v-fgt"), sn = Symbol.for("v-txt"), me = Symbol.for("v-cmt"), bn = Symbol.for("v-stc"), Gt = [];
let ve = null;
function De(e = !1) {
  Gt.push(ve = e ? null : []);
}
function Ac() {
  Gt.pop(), ve = Gt[Gt.length - 1] || null;
}
let Zt = 1;
function vi(e, t = !1) {
  Zt += e, e < 0 && ve && t && (ve.hasOnce = !0);
}
function zr(e) {
  return e.dynamicChildren = Zt > 0 ? ve || Vt : null, Ac(), Zt > 0 && ve && ve.push(e), e;
}
function ct(e, t, n, o, i, r) {
  return zr(
    Nt(
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
function Rn(e, t, n, o, i) {
  return zr(
    le(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function ln(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ht(e, t) {
  if (d.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = mn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Mc = (...e) => Xr(
  ...e
), Qr = ({ key: e }) => e ?? null, Nn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || J(e) || $(e) ? { i: ee, r: e, k: t, f: !!n } : e : null);
function Nt(e, t = null, n = null, o = 0, i = null, r = e === ge ? 0 : 1, s = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qr(t),
    ref: t && Nn(t),
    scopeId: wr,
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
    ctx: ee
  };
  return l ? (Xo(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= z(n) ? 8 : 16), d.NODE_ENV !== "production" && u.key !== u.key && v("VNode created with invalid key (NaN). VNode type:", u.type), Zt > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ve.push(u), u;
}
const le = d.NODE_ENV !== "production" ? Mc : Xr;
function Xr(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === Bl) && (d.NODE_ENV !== "production" && !e && v(`Invalid vnode type when creating vnode: ${e}.`), e = me), ln(e)) {
    const l = ut(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Xo(l, n), Zt > 0 && !r && ve && (l.shapeFlag & 6 ? ve[ve.indexOf(e)] = l : ve.push(l)), l.patchFlag = -2, l;
  }
  if (os(e) && (e = e.__vccOpts), t) {
    t = Ic(t);
    let { class: l, style: u } = t;
    l && !z(l) && (t.class = Po(l)), W(u) && (Qt(u) && !C(u) && (u = Y({}, u)), t.style = Ro(u));
  }
  const s = z(e) ? 1 : Yr(e) ? 128 : Cl(e) ? 64 : W(e) ? 4 : $(e) ? 2 : 0;
  return d.NODE_ENV !== "production" && s & 4 && Qt(e) && (e = R(e), v(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Nt(
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
function Ic(e) {
  return e ? Qt(e) || jr(e) ? Y({}, e) : e : null;
}
function ut(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: l, transition: u } = e, h = t ? Tt(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && Qr(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? C(r) ? r.concat(Nn(t)) : [r, Nn(t)] : Nn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d.NODE_ENV !== "production" && s === -1 && C(l) ? l.map(Zr) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== ge ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && ut(e.ssContent),
    ssFallback: e.ssFallback && ut(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && Ko(
    p,
    u.clone(p)
  ), p;
}
function Zr(e) {
  const t = ut(e);
  return C(e.children) && (t.children = e.children.map(Zr)), t;
}
function Rc(e = " ", t = 0) {
  return le(sn, null, e, t);
}
function Pc(e = "", t = !1) {
  return t ? (De(), Rn(me, null, e)) : le(me, null, e);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? le(me) : C(e) ? le(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ln(e) ? st(e) : le(sn, null, String(e));
}
function st(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ut(e);
}
function Xo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (C(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Xo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !jr(t) ? t._ctx = ee : i === 3 && ee && (ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: ee }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Rc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Tt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = Po([t.class, o.class]));
      else if (i === "style")
        t.style = Ro([t.style, o.style]);
      else if (tn(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(C(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Me(e, t, n, o = null) {
  He(e, t, 7, [
    n,
    o
  ]);
}
const jc = Ir();
let Fc = 0;
function Hc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || jc, r = {
    uid: Fc++,
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
    scope: new Ds(
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
    propsOptions: Hr(o, i),
    emitsOptions: Gr(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: j,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: j,
    data: j,
    props: j,
    attrs: j,
    slots: j,
    refs: j,
    setupState: j,
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
  return d.NODE_ENV !== "production" ? r.ctx = Wl(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Vc.bind(null, r), e.ce && e.ce(r), r;
}
let ne = null;
const Zo = () => ne || ee;
let Pn, Vo;
{
  const e = nn(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  Pn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ne = n
  ), Vo = t(
    "__VUE_SSR_SETTERS__",
    (n) => en = n
  );
}
const cn = (e) => {
  const t = ne;
  return Pn(e), e.scope.on(), () => {
    e.scope.off(), Pn(t);
  };
}, Oi = () => {
  ne && ne.scope.off(), Pn(null);
}, Lc = /* @__PURE__ */ Qe("slot,component");
function xo(e, { isNativeTag: t }) {
  (Lc(e) || t(e)) && v(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function es(e) {
  return e.vnode.shapeFlag & 4;
}
let en = !1;
function Uc(e, t = !1, n = !1) {
  t && Vo(t);
  const { props: o, children: i } = e.vnode, r = es(e);
  ic(e, o, r, t), gc(e, i, n);
  const s = r ? kc(e, t) : void 0;
  return t && Vo(!1), s;
}
function kc(e, t) {
  var n;
  const o = e.type;
  if (d.NODE_ENV !== "production") {
    if (o.name && xo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        xo(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        Dr(r[s]);
    }
    o.compilerOptions && Bc() && v(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ar), d.NODE_ENV !== "production" && ql(e);
  const { setup: i } = o;
  if (i) {
    Ze();
    const r = e.setupContext = i.length > 1 ? Wc(e) : null, s = cn(e), l = $t(
      i,
      e,
      0,
      [
        d.NODE_ENV !== "production" ? je(e.props) : e.props,
        r
      ]
    ), u = Ao(l);
    if (et(), s(), (u || e.sp) && !St(e) && Vr(e), u) {
      if (l.then(Oi, Oi), t)
        return l.then((h) => {
          wi(e, h, t);
        }).catch((h) => {
          on(h, e, 0);
        });
      if (e.asyncDep = l, d.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        v(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      wi(e, l, t);
  } else
    ts(e, t);
}
function wi(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? (d.NODE_ENV !== "production" && ln(t) && v(
    "setup() should not return VNodes directly - return a render function instead."
  ), d.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = pr(t), d.NODE_ENV !== "production" && Gl(e)) : d.NODE_ENV !== "production" && t !== void 0 && v(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), ts(e, n);
}
let So;
const Bc = () => !So;
function ts(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && So && !o.render) {
      const i = o.template || Go(e).template;
      if (i) {
        d.NODE_ENV !== "production" && ke(e, "compile");
        const { isCustomElement: r, compilerOptions: s } = e.appContext.config, { delimiters: l, compilerOptions: u } = o, h = Y(
          Y(
            {
              isCustomElement: r,
              delimiters: l
            },
            s
          ),
          u
        );
        o.render = So(i, h), d.NODE_ENV !== "production" && Be(e, "compile");
      }
    }
    e.render = o.render || Z;
  }
  {
    const i = cn(e);
    Ze();
    try {
      zl(e);
    } finally {
      et(), i();
    }
  }
  d.NODE_ENV !== "production" && !o.render && e.render === Z && !t && (o.template ? v(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : v("Component is missing template or render function: ", o));
}
const Di = d.NODE_ENV !== "production" ? {
  get(e, t) {
    return In(), X(e, "get", ""), e[t];
  },
  set() {
    return v("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return v("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return X(e, "get", ""), e[t];
  }
};
function Kc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return X(e, "get", "$slots"), t[n];
    }
  });
}
function Wc(e) {
  const t = (n) => {
    if (d.NODE_ENV !== "production" && (e.exposed && v("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (C(n) ? o = "array" : J(n) && (o = "ref")), o !== "object" && v(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (d.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Di));
      },
      get slots() {
        return o || (o = Kc(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Di),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Yn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(pr(Gs(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Et)
        return Et[n](e);
    },
    has(t, n) {
      return n in t || n in Et;
    }
  })) : e.proxy;
}
const qc = /(?:^|[-_])(\w)/g, Gc = (e) => e.replace(qc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ns(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function zn(e, t, n = !1) {
  let o = ns(t);
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
  return o ? Gc(o) : n ? "App" : "Anonymous";
}
function os(e) {
  return $(e) && "__vccOpts" in e;
}
const is = (e, t) => {
  const n = il(e, t, en);
  if (d.NODE_ENV !== "production") {
    const o = Zo();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Jc() {
  if (d.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      return W(a) ? a.__isVue ? ["div", e, "VueInstance"] : J(a) ? [
        "div",
        {},
        ["span", e, p(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in a ? a._value : a),
        ">"
      ] : mt(a) ? [
        "div",
        {},
        ["span", e, ae(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${Ye(a) ? " (readonly)" : ""}`
      ] : Ye(a) ? [
        "div",
        {},
        ["span", e, ae(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
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
    const m = [];
    a.type.props && a.props && m.push(s("props", R(a.props))), a.setupState !== j && m.push(s("setup", a.setupState)), a.data !== j && m.push(s("data", R(a.data)));
    const y = u(a, "computed");
    y && m.push(s("computed", y));
    const x = u(a, "inject");
    return x && m.push(s("injected", x)), m.push([
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
    ]), m;
  }
  function s(a, m) {
    return m = Y({}, m), Object.keys(m).length ? [
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
        ...Object.keys(m).map((y) => [
          "div",
          {},
          ["span", o, y + ": "],
          l(m[y], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, m = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : W(a) ? ["object", { object: m ? R(a) : a }] : ["span", n, String(a)];
  }
  function u(a, m) {
    const y = a.type;
    if ($(y))
      return;
    const x = {};
    for (const M in a.ctx)
      h(y, M, m) && (x[M] = a.ctx[M]);
    return x;
  }
  function h(a, m, y) {
    const x = a[y];
    if (C(x) && x.includes(m) || W(x) && m in x || a.extends && h(a.extends, m, y) || a.mixins && a.mixins.some((M) => h(M, m, y)))
      return !0;
  }
  function p(a) {
    return ae(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Vi = "3.5.13", Ge = d.NODE_ENV !== "production" ? v : Z;
var ze = {};
let Co;
const xi = typeof window < "u" && window.trustedTypes;
if (xi)
  try {
    Co = /* @__PURE__ */ xi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ze.NODE_ENV !== "production" && Ge(`Error creating trusted types policy: ${e}`);
  }
const rs = Co ? (e) => Co.createHTML(e) : (e) => e, Yc = "http://www.w3.org/2000/svg", zc = "http://www.w3.org/1998/Math/MathML", Ke = typeof document < "u" ? document : null, Si = Ke && /* @__PURE__ */ Ke.createElement("template"), Qc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ke.createElementNS(Yc, e) : t === "mathml" ? Ke.createElementNS(zc, e) : n ? Ke.createElement(e, { is: n }) : Ke.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ke.createTextNode(e),
  createComment: (e) => Ke.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ke.querySelector(e),
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
      Si.innerHTML = rs(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Si.content;
      if (o === "svg" || o === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Xc = Symbol("_vtc");
function Zc(e, t, n) {
  const o = e[Xc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ci = Symbol("_vod"), eu = Symbol("_vsh"), tu = Symbol(ze.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), nu = /(^|;)\s*display\s*:/;
function ou(e, t, n) {
  const o = e.style, i = z(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (z(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && yn(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && yn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), yn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[tu];
      s && (n += ";" + s), o.cssText = n, r = nu.test(n);
    }
  } else t && e.removeAttribute("style");
  Ci in e && (e[Ci] = r ? o.display : "", e[eu] && (o.display = "none"));
}
const iu = /[^\\];\s*$/, Ti = /\s*!important$/;
function yn(e, t, n) {
  if (C(n))
    n.forEach((o) => yn(e, t, o));
  else if (n == null && (n = ""), ze.NODE_ENV !== "production" && iu.test(n) && Ge(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = ru(e, t);
    Ti.test(n) ? e.setProperty(
      Je(o),
      n.replace(Ti, ""),
      "important"
    ) : e[o] = n;
  }
}
const $i = ["Webkit", "Moz", "ms"], uo = {};
function ru(e, t) {
  const n = uo[t];
  if (n)
    return n;
  let o = we(t);
  if (o !== "filter" && o in e)
    return uo[t] = o;
  o = Ln(o);
  for (let i = 0; i < $i.length; i++) {
    const r = $i[i] + o;
    if (r in e)
      return uo[t] = r;
  }
  return t;
}
const Ai = "http://www.w3.org/1999/xlink";
function Mi(e, t, n, o, i, r = ws(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ai, t.slice(6, t.length)) : e.setAttributeNS(Ai, t, n) : n == null || r && !Gi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : Xe(n) ? String(n) : n
  );
}
function Ii(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? rs(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Gi(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ze.NODE_ENV !== "production" && !s && Ge(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(i || t);
}
function Dt(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function su(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ri = Symbol("_vei");
function lu(e, t, n, o, i = null) {
  const r = e[Ri] || (e[Ri] = {}), s = r[t];
  if (o && s)
    s.value = ze.NODE_ENV !== "production" ? ji(o, t) : o;
  else {
    const [l, u] = cu(t);
    if (o) {
      const h = r[t] = au(
        ze.NODE_ENV !== "production" ? ji(o, t) : o,
        i
      );
      Dt(e, l, h, u);
    } else s && (su(e, l, s, u), r[t] = void 0);
  }
}
const Pi = /(?:Once|Passive|Capture)$/;
function cu(e) {
  let t;
  if (Pi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Pi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Je(e.slice(2)), t];
}
let fo = 0;
const uu = /* @__PURE__ */ Promise.resolve(), fu = () => fo || (uu.then(() => fo = 0), fo = Date.now());
function au(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    He(
      du(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = fu(), n;
}
function ji(e, t) {
  return $(e) || C(e) ? e : (Ge(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Z);
}
function du(e, t) {
  if (C(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Fi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, pu = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? Zc(e, o, s) : t === "style" ? ou(e, n, o) : tn(t) ? vn(t) || lu(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hu(e, t, o, s)) ? (Ii(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mi(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !z(o)) ? Ii(e, we(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Mi(e, t, o, s));
};
function hu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Fi(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Fi(t) && z(n) ? !1 : t in e;
}
const Hi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return C(t) ? (n) => Ot(t, n) : t;
};
function gu(e) {
  e.target.composing = !0;
}
function Li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ao = Symbol("_assign"), mu = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
    e[ao] = Hi(i);
    const r = o || i.props && i.props.type === "number";
    Dt(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = ho(l)), e[ao](l);
    }), n && Dt(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Dt(e, "compositionstart", gu), Dt(e, "compositionend", Li), Dt(e, "change", Li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: i, number: r } }, s) {
    if (e[ao] = Hi(s), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? ho(e.value) : e.value, u = t ?? "";
    l !== u && (document.activeElement === e && e.type !== "range" && (o && t === n || i && e.value.trim() === u) || (e.value = u));
  }
}, _u = /* @__PURE__ */ Y({ patchProp: pu }, Qc);
let Ui;
function Eu() {
  return Ui || (Ui = Ec(_u));
}
const bu = (...e) => {
  const t = Eu().createApp(...e);
  ze.NODE_ENV !== "production" && (yu(t), vu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = Ou(o);
    if (!i) return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Nu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function Nu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function yu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Ns(t) || ys(t) || vs(t),
    writable: !1
  });
}
function vu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ge(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ge(o), n;
      },
      set() {
        Ge(o);
      }
    });
  }
}
function Ou(e) {
  if (z(e)) {
    const t = document.querySelector(e);
    return ze.NODE_ENV !== "production" && !t && Ge(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ze.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ge(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var wu = {};
function Du() {
  Jc();
}
wu.NODE_ENV !== "production" && Du();
const To = {
  switchh: !1,
  select: "",
  input: ""
}, Vu = "https://raw.githubusercontent.com/adproqwq/LiteLoaderQQNT-Manifest-JsonSchema/main/manifest.schema.json", xu = 4, Su = "extension", Cu = "liteloader-wrapper-template", Tu = "liteloader-wrapper-template", $u = "LiteLoaderQQNT的插件模板", Au = "0.0.1", Mu = [
  {
    name: "Nyaruhodo",
    link: "https://github.com/nyaruhodoo"
  }
], Iu = [], Ru = [
  "win32",
  "linux",
  "darwin"
], Pu = {
  renderer: "./out/renderer/index.js",
  main: "./out/main/index.js",
  preload: "./out/preload/index.js"
}, Jt = {
  $schema: Vu,
  manifest_version: xu,
  type: Su,
  name: Cu,
  slug: Tu,
  description: $u,
  version: Au,
  authors: Mu,
  dependencies: Iu,
  platform: Ru,
  injects: Pu
};
class ki {
  /**
   * 初始化插件配置
   */
  static async getConfig() {
    const t = await LiteLoader.api.config.get(Jt.slug, To);
    return this.mergeConfig(t, To);
  }
  /**
   * 更新插件配置
   */
  static async updateConfig(t) {
    await LiteLoader.api.config.set(Jt.slug, t), this.log("Config已更新", JSON.stringify(t, null, 2));
  }
  /**
   * 合并配置项
   */
  static mergeConfig(t, n) {
    const o = structuredClone(n);
    for (const [i, r] of Object.entries(t))
      if (Object.hasOwn(o, i) && Object.prototype.toString.call(r) === Object.prototype.toString.call(o[i])) {
        if (Array.isArray(r)) {
          o[i] = [.../* @__PURE__ */ new Set([...r, ...o[i]])];
          continue;
        }
        if (typeof r == "object" && r) {
          o[i] = this.mergeConfig(r, o[i]);
          continue;
        }
        o[i] = r;
      }
    return o;
  }
  /**
   * 带有插件标识的Log
   */
  static log(...t) {
    console.log(`${Jt.slug}:`, ...t);
  }
  /**
   * 生成随机整数
   */
  static randomInteger(t, n) {
    const o = t + Math.random() * (n + 1 - t);
    return Math.floor(o);
  }
  /**
   * 返回一个指定时间后决议为 resolve 的 promise
   */
  static wait(t) {
    if (!(t <= 0))
      return new Promise((n) => setTimeout(n, t));
  }
}
const jn = (e, t) => is(() => zs(t) ? {
  [e]: !0
} : {}), ju = ["data-title"], Fu = ["data-title"], Hu = /* @__PURE__ */ At({
  __name: "ConfigList",
  props: {
    title: {},
    collapsible: { type: Boolean },
    collapsibleTitle: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = jn("is-disabled", () => e.disabled), n = jn("is-collapsible", () => e.collapsible);
    return (o, i) => (De(), ct("setting-section", Tt({ "data-title": o.title }, qe(t)), [
      Nt("setting-panel", null, [
        Nt("setting-list", Tt({
          "data-title": o.collapsibleTitle,
          "data-direction": "column"
        }, qe(n)), [
          Tr(o.$slots, "default")
        ], 16, Fu)
      ])
    ], 16, ju));
  }
}), Lu = {
  key: 0,
  "data-type": "secondary"
}, po = /* @__PURE__ */ At({
  __name: "ConfigItem",
  props: {
    title: {},
    tip: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = jn("is-disabled", () => e.disabled);
    return (n, o) => (De(), ct("setting-item", Tt({ "data-direction": "row" }, qe(t)), [
      Nt("div", null, [
        Nt("setting-text", null, wn(n.title), 1),
        n.tip ? (De(), ct("setting-text", Lu, wn(n.tip), 1)) : Pc("", !0)
      ]),
      Tr(n.$slots, "default")
    ], 16));
  }
}), Uu = /* @__PURE__ */ At({
  __name: "NSwitch",
  props: {
    modelValue: { type: Boolean },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = zo(e, "modelValue"), n = jn("is-active", t);
    return (o, i) => (De(), ct("setting-switch", Tt(qe(n), {
      onClick: i[0] || (i[0] = (r) => t.value = !t.value)
    }), null, 16));
  }
}), ku = ["data-value"], Bu = /* @__PURE__ */ At({
  __name: "NSelect",
  props: /* @__PURE__ */ Jl({
    options: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Tl("select"), n = zo(e, "modelValue"), o = (r) => {
      const {
        detail: { value: s }
      } = r;
      n.value = s;
    }, i = (r) => {
      const s = {};
      return (r.value ?? r.label) === n.value && (s["is-selected"] = !0), r.disabled && (s["is-disabled"] = !0), s;
    };
    return qt(n, (r) => {
      t.value._title.value = r;
    }), (r, s) => (De(), ct("setting-select", {
      ref: "select",
      onSelected: o
    }, [
      (De(!0), ct(ge, null, Kl(r.options, (l) => (De(), ct("setting-option", Tt({
        key: l.label,
        "data-value": l.value ?? l.label,
        ref_for: !0
      }, i(l)), wn(l.label), 17, ku))), 128))
    ], 544));
  }
}), Ku = { class: "border border-solid border-[var(--border\\_dark)] focus-within:border-[var(--brand\\_standard)] rounded-[4px] text-[12px] leading-[26px] px-[8px]" }, Wu = /* @__PURE__ */ At({
  __name: "NInput",
  props: {
    modelValue: {},
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = zo(e, "modelValue");
    return (n, o) => (De(), ct("div", Ku, [
      xl(Nt("input", {
        "onUpdate:modelValue": o[0] || (o[0] = (i) => t.value = i),
        class: "text-center",
        type: "text"
      }, null, 512), [
        [mu, t.value]
      ])
    ]));
  }
}), qu = /* @__PURE__ */ At({
  __name: "App",
  setup(e) {
    ((l, u) => {
      let h = document.getElementById("hbstu1o");
      h || (h = document.createElement("style"), h.id = "hbstu1o", document.head.appendChild(h), h.innerHTML = u);
    })("hbstu1o", "");
    const n = window[Jt.slug];
    let o = Kn(To);
    const { input: i, select: r, switchh: s } = el(o);
    return (async () => {
      const l = await ki.getConfig();
      for (const u in l)
        o[u] = l[u];
    })(), qt(o, (l) => {
      const u = JSON.parse(JSON.stringify(l));
      ki.updateConfig(u), n.configUpdate(u), new BroadcastChannel(Jt.slug).postMessage(u);
    }), (l, u) => (De(), Rn(Hu, { "data-l-hbstu1o": "" }, {
      default: Ut(() => [
        le(po, {
          "data-l-hbstu1o": "",
          title: "测试1"
        }, {
          default: Ut(() => [
            le(Bu, {
              "data-l-hbstu1o": "",
              modelValue: qe(r),
              "onUpdate:modelValue": u[0] || (u[0] = (h) => J(r) ? r.value = h : null),
              options: [
                {
                  value: "Option1",
                  label: "Option1"
                },
                {
                  value: "Option2",
                  label: "Option2"
                }
              ]
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        le(po, {
          "data-l-hbstu1o": "",
          title: "测试2"
        }, {
          default: Ut(() => [
            le(Uu, {
              "data-l-hbstu1o": "",
              modelValue: qe(s),
              "onUpdate:modelValue": u[1] || (u[1] = (h) => J(s) ? s.value = h : null)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        le(po, {
          "data-l-hbstu1o": "",
          title: "测试3"
        }, {
          default: Ut(() => [
            le(Wu, {
              "data-l-hbstu1o": "",
              modelValue: qe(i),
              "onUpdate:modelValue": u[2] || (u[2] = (h) => J(i) ? i.value = h : null),
              type: "number"
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Gu = "" + new URL("index.css", import.meta.url).href, Ju = (e) => {
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = Gu, document.head.append(t), bu(qu).mount(e);
};
export {
  Ju as onSettingWindowCreated
};
