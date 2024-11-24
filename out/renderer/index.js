var Xi = {};
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function et(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const j = Xi.NODE_ENV !== "production" ? Object.freeze({}) : {}, Tt = Xi.NODE_ENV !== "production" ? Object.freeze([]) : [], Z = () => {
}, bs = () => !1, ln = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cn = (e) => e.startsWith("onUpdate:"), Y = Object.assign, Ro = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ns = Object.prototype.hasOwnProperty, L = (e, t) => Ns.call(e, t), x = Array.isArray, _t = (e) => cn(e) === "[object Map]", Pt = (e) => cn(e) === "[object Set]", di = (e) => cn(e) === "[object Date]", $ = (e) => typeof e == "function", z = (e) => typeof e == "string", $e = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", jo = (e) => (k(e) || $(e)) && $(e.then) && $(e.catch), Zi = Object.prototype.toString, cn = (e) => Zi.call(e), Fo = (e) => cn(e).slice(8, -1), er = (e) => cn(e) === "[object Object]", Ho = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Jt = /* @__PURE__ */ et(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ys = /* @__PURE__ */ et(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, vs = /-(\w)/g, we = qn(
  (e) => e.replace(vs, (t, n) => n ? n.toUpperCase() : "")
), Os = /\B([A-Z])/g, Xe = qn(
  (e) => e.replace(Os, "-$1").toLowerCase()
), Gn = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), gt = qn(
  (e) => e ? `on${Gn(e)}` : ""
), he = (e, t) => !Object.is(e, t), St = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Tn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, $n = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let pi;
const un = () => pi || (pi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lo(e) {
  if (x(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = z(o) ? xs(o) : Lo(o);
      if (i)
        for (const r in i)
          t[r] = i[r];
    }
    return t;
  } else if (z(e) || k(e))
    return e;
}
const ws = /;(?![^(]*\))/g, Vs = /:([^]+)/, Ds = /\/\*[^]*?\*\//g;
function xs(e) {
  const t = {};
  return e.replace(Ds, "").split(ws).forEach((n) => {
    if (n) {
      const o = n.split(Vs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Uo(e) {
  let t = "";
  if (z(e))
    t = e;
  else if (x(e))
    for (let n = 0; n < e.length; n++) {
      const o = Uo(e[n]);
      o && (t += o + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ss = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Cs = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ts = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", $s = /* @__PURE__ */ et(Ss), Ms = /* @__PURE__ */ et(Cs), As = /* @__PURE__ */ et(Ts), Is = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ps = /* @__PURE__ */ et(Is);
function tr(e) {
  return !!e || e === "";
}
function Rs(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = vt(e[o], t[o]);
  return n;
}
function vt(e, t) {
  if (e === t) return !0;
  let n = di(e), o = di(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = $e(e), o = $e(t), n || o)
    return e === t;
  if (n = x(e), o = x(t), n || o)
    return n && o ? Rs(e, t) : !1;
  if (n = k(e), o = k(t), n || o) {
    if (!n || !o)
      return !1;
    const i = Object.keys(e).length, r = Object.keys(t).length;
    if (i !== r)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), u = t.hasOwnProperty(s);
      if (l && !u || !l && u || !vt(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ko(e, t) {
  return e.findIndex((n) => vt(n, t));
}
const nr = (e) => !!(e && e.__v_isRef === !0), Mn = (e) => z(e) ? e : e == null ? "" : x(e) || k(e) && (e.toString === Zi || !$(e.toString)) ? nr(e) ? Mn(e.value) : JSON.stringify(e, or, 2) : String(e), or = (e, t) => nr(t) ? or(e, t.value) : _t(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], r) => (n[lo(o, r) + " =>"] = i, n),
    {}
  )
} : Pt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => lo(n))
} : $e(t) ? lo(t) : k(t) && !x(t) && !er(t) ? String(t) : t, lo = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    $e(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var W = {};
function Me(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ye;
class js {
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
    } else W.NODE_ENV !== "production" && Me("cannot run an inactive effect scope.");
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
function Fs() {
  return ye;
}
let U;
const co = /* @__PURE__ */ new WeakSet();
class ir {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ye && ye.active && ye.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, co.has(this) && (co.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, hi(this), lr(this);
    const t = U, n = Te;
    U = this, Te = !0;
    try {
      return this.fn();
    } finally {
      W.NODE_ENV !== "production" && U !== this && Me(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), cr(this), U = t, Te = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Wo(t);
      this.deps = this.depsTail = void 0, hi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? co.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    No(this) && this.run();
  }
  get dirty() {
    return No(this);
  }
}
let rr = 0, Yt, zt;
function sr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = zt, zt = e;
    return;
  }
  e.next = Yt, Yt = e;
}
function Bo() {
  rr++;
}
function Ko() {
  if (--rr > 0)
    return;
  if (zt) {
    let t = zt;
    for (zt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Yt; ) {
    let t = Yt;
    for (Yt = void 0; t; ) {
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
function lr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function cr(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), Wo(o), Hs(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function No(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ur(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ur(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === en))
    return;
  e.globalVersion = en;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !No(e)) {
    e.flags &= -3;
    return;
  }
  const n = U, o = Te;
  U = e, Te = !0;
  try {
    lr(e);
    const i = e.fn(e._value);
    (t.version === 0 || he(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    U = n, Te = o, cr(e), e.flags &= -3;
  }
}
function Wo(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), W.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Wo(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Hs(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Te = !0;
const fr = [];
function tt() {
  fr.push(Te), Te = !1;
}
function nt() {
  const e = fr.pop();
  Te = e === void 0 ? !0 : e;
}
function hi(e) {
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
let en = 0;
class Ls {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Jn {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, W.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!U || !Te || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new Ls(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, ar(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = o);
    }
    return W.NODE_ENV !== "production" && U.onTrack && U.onTrack(
      Y(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, en++, this.notify(t);
  }
  notify(t) {
    Bo();
    try {
      if (W.NODE_ENV !== "production")
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
      Ko();
    }
  }
}
function ar(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        ar(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), W.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const An = /* @__PURE__ */ new WeakMap(), Et = Symbol(
  W.NODE_ENV !== "production" ? "Object iterate" : ""
), yo = Symbol(
  W.NODE_ENV !== "production" ? "Map keys iterate" : ""
), tn = Symbol(
  W.NODE_ENV !== "production" ? "Array iterate" : ""
);
function X(e, t, n) {
  if (Te && U) {
    let o = An.get(e);
    o || An.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new Jn()), i.map = o, i.key = n), W.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function je(e, t, n, o, i, r) {
  const s = An.get(e);
  if (!s) {
    en++;
    return;
  }
  const l = (u) => {
    u && (W.NODE_ENV !== "production" ? u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: r
    }) : u.trigger());
  };
  if (Bo(), t === "clear")
    s.forEach(l);
  else {
    const u = x(e), h = u && Ho(n);
    if (u && n === "length") {
      const p = Number(o);
      s.forEach((a, m) => {
        (m === "length" || m === tn || !$e(m) && m >= p) && l(a);
      });
    } else
      switch ((n !== void 0 || s.has(void 0)) && l(s.get(n)), h && l(s.get(tn)), t) {
        case "add":
          u ? h && l(s.get("length")) : (l(s.get(Et)), _t(e) && l(s.get(yo)));
          break;
        case "delete":
          u || (l(s.get(Et)), _t(e) && l(s.get(yo)));
          break;
        case "set":
          _t(e) && l(s.get(Et));
          break;
      }
  }
  Ko();
}
function Us(e, t) {
  const n = An.get(e);
  return n && n.get(t);
}
function xt(e) {
  const t = P(e);
  return t === e ? t : (X(t, "iterate", tn), ae(e) ? t : t.map(se));
}
function Yn(e) {
  return X(e = P(e), "iterate", tn), e;
}
const ks = {
  __proto__: null,
  [Symbol.iterator]() {
    return uo(this, Symbol.iterator, se);
  },
  concat(...e) {
    return xt(this).concat(
      ...e.map((t) => x(t) ? xt(t) : t)
    );
  },
  entries() {
    return uo(this, "entries", (e) => (e[1] = se(e[1]), e));
  },
  every(e, t) {
    return We(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return We(this, "filter", e, t, (n) => n.map(se), arguments);
  },
  find(e, t) {
    return We(this, "find", e, t, se, arguments);
  },
  findIndex(e, t) {
    return We(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return We(this, "findLast", e, t, se, arguments);
  },
  findLastIndex(e, t) {
    return We(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return We(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return fo(this, "includes", e);
  },
  indexOf(...e) {
    return fo(this, "indexOf", e);
  },
  join(e) {
    return xt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return fo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return We(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return kt(this, "pop");
  },
  push(...e) {
    return kt(this, "push", e);
  },
  reduce(e, ...t) {
    return gi(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return gi(this, "reduceRight", e, t);
  },
  shift() {
    return kt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return We(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return kt(this, "splice", e);
  },
  toReversed() {
    return xt(this).toReversed();
  },
  toSorted(e) {
    return xt(this).toSorted(e);
  },
  toSpliced(...e) {
    return xt(this).toSpliced(...e);
  },
  unshift(...e) {
    return kt(this, "unshift", e);
  },
  values() {
    return uo(this, "values", se);
  }
};
function uo(e, t, n) {
  const o = Yn(e), i = o[t]();
  return o !== e && !ae(e) && (i._next = i.next, i.next = () => {
    const r = i._next();
    return r.value && (r.value = n(r.value)), r;
  }), i;
}
const Bs = Array.prototype;
function We(e, t, n, o, i, r) {
  const s = Yn(e), l = s !== e && !ae(e), u = s[t];
  if (u !== Bs[t]) {
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
function gi(e, t, n, o) {
  const i = Yn(e);
  let r = n;
  return i !== e && (ae(e) ? n.length > 3 && (r = function(s, l, u) {
    return n.call(this, s, l, u, e);
  }) : r = function(s, l, u) {
    return n.call(this, s, se(l), u, e);
  }), i[t](r, ...o);
}
function fo(e, t, n) {
  const o = P(e);
  X(o, "iterate", tn);
  const i = o[t](...n);
  return (i === -1 || i === !1) && nn(n[0]) ? (n[0] = P(n[0]), o[t](...n)) : i;
}
function kt(e, t, n = []) {
  tt(), Bo();
  const o = P(e)[t].apply(e, n);
  return Ko(), nt(), o;
}
const Ks = /* @__PURE__ */ et("__proto__,__v_isRef,__isVue"), dr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($e)
);
function Ws(e) {
  $e(e) || (e = String(e));
  const t = P(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class pr {
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
      return o === (i ? r ? br : Er : r ? _r : mr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = x(t);
    if (!i) {
      let u;
      if (s && (u = ks[n]))
        return u;
      if (n === "hasOwnProperty")
        return Ws;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      J(t) ? t : o
    );
    return ($e(n) ? dr.has(n) : Ks(n)) || (i || X(t, "get", n), r) ? l : J(l) ? s && Ho(n) ? l : l.value : k(l) ? i ? qo(l) : Qn(l) : l;
  }
}
class hr extends pr {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let r = t[n];
    if (!this._isShallow) {
      const u = Ze(r);
      if (!ae(o) && !Ze(o) && (r = P(r), o = P(o)), !x(t) && J(r) && !J(o))
        return u ? !1 : (r.value = o, !0);
    }
    const s = x(t) && Ho(n) ? Number(n) < t.length : L(t, n), l = Reflect.set(
      t,
      n,
      o,
      J(t) ? t : i
    );
    return t === P(i) && (s ? he(o, r) && je(t, "set", n, o, r) : je(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = L(t, n), i = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && je(t, "delete", n, void 0, i), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!$e(n) || !dr.has(n)) && X(t, "has", n), o;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      x(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class gr extends pr {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return W.NODE_ENV !== "production" && Me(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return W.NODE_ENV !== "production" && Me(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const qs = /* @__PURE__ */ new hr(), Gs = /* @__PURE__ */ new gr(), Js = /* @__PURE__ */ new hr(!0), Ys = /* @__PURE__ */ new gr(!0), vo = (e) => e, _n = (e) => Reflect.getPrototypeOf(e);
function zs(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, r = P(i), s = _t(r), l = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, h = i[e](...o), p = n ? vo : t ? Oo : se;
    return !t && X(
      r,
      "iterate",
      u ? yo : Et
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
function En(e) {
  return function(...t) {
    if (W.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Me(
        `${Gn(e)} operation ${n}failed: target is readonly.`,
        P(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Qs(e, t) {
  const n = {
    get(i) {
      const r = this.__v_raw, s = P(r), l = P(i);
      e || (he(i, l) && X(s, "get", i), X(s, "get", l));
      const { has: u } = _n(s), h = t ? vo : e ? Oo : se;
      if (u.call(s, i))
        return h(r.get(i));
      if (u.call(s, l))
        return h(r.get(l));
      r !== s && r.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && X(P(i), "iterate", Et), Reflect.get(i, "size", i);
    },
    has(i) {
      const r = this.__v_raw, s = P(r), l = P(i);
      return e || (he(i, l) && X(s, "has", i), X(s, "has", l)), i === l ? r.has(i) : r.has(i) || r.has(l);
    },
    forEach(i, r) {
      const s = this, l = s.__v_raw, u = P(l), h = t ? vo : e ? Oo : se;
      return !e && X(u, "iterate", Et), l.forEach((p, a) => i.call(r, h(p), h(a), s));
    }
  };
  return Y(
    n,
    e ? {
      add: En("add"),
      set: En("set"),
      delete: En("delete"),
      clear: En("clear")
    } : {
      add(i) {
        !t && !ae(i) && !Ze(i) && (i = P(i));
        const r = P(this);
        return _n(r).has.call(r, i) || (r.add(i), je(r, "add", i, i)), this;
      },
      set(i, r) {
        !t && !ae(r) && !Ze(r) && (r = P(r));
        const s = P(this), { has: l, get: u } = _n(s);
        let h = l.call(s, i);
        h ? W.NODE_ENV !== "production" && mi(s, l, i) : (i = P(i), h = l.call(s, i));
        const p = u.call(s, i);
        return s.set(i, r), h ? he(r, p) && je(s, "set", i, r, p) : je(s, "add", i, r), this;
      },
      delete(i) {
        const r = P(this), { has: s, get: l } = _n(r);
        let u = s.call(r, i);
        u ? W.NODE_ENV !== "production" && mi(r, s, i) : (i = P(i), u = s.call(r, i));
        const h = l ? l.call(r, i) : void 0, p = r.delete(i);
        return u && je(r, "delete", i, void 0, h), p;
      },
      clear() {
        const i = P(this), r = i.size !== 0, s = W.NODE_ENV !== "production" ? _t(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return r && je(
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
    n[i] = zs(i, e, t);
  }), n;
}
function zn(e, t) {
  const n = Qs(e, t);
  return (o, i, r) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    L(n, i) && i in o ? n : o,
    i,
    r
  );
}
const Xs = {
  get: /* @__PURE__ */ zn(!1, !1)
}, Zs = {
  get: /* @__PURE__ */ zn(!1, !0)
}, el = {
  get: /* @__PURE__ */ zn(!0, !1)
}, tl = {
  get: /* @__PURE__ */ zn(!0, !0)
};
function mi(e, t, n) {
  const o = P(n);
  if (o !== n && t.call(e, o)) {
    const i = Fo(e);
    Me(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const mr = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap();
function nl(e) {
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
function ol(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : nl(Fo(e));
}
function Qn(e) {
  return Ze(e) ? e : Xn(
    e,
    !1,
    qs,
    Xs,
    mr
  );
}
function il(e) {
  return Xn(
    e,
    !1,
    Js,
    Zs,
    _r
  );
}
function qo(e) {
  return Xn(
    e,
    !0,
    Gs,
    el,
    Er
  );
}
function He(e) {
  return Xn(
    e,
    !0,
    Ys,
    tl,
    br
  );
}
function Xn(e, t, n, o, i) {
  if (!k(e))
    return W.NODE_ENV !== "production" && Me(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const s = ol(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, l), l;
}
function bt(e) {
  return Ze(e) ? bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function ae(e) {
  return !!(e && e.__v_isShallow);
}
function nn(e) {
  return e ? !!e.__v_raw : !1;
}
function P(e) {
  const t = e && e.__v_raw;
  return t ? P(t) : e;
}
function rl(e) {
  return !L(e, "__v_skip") && Object.isExtensible(e) && Tn(e, "__v_skip", !0), e;
}
const se = (e) => k(e) ? Qn(e) : e, Oo = (e) => k(e) ? qo(e) : e;
function J(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _i(e) {
  return Nr(e, !1);
}
function sl(e) {
  return Nr(e, !0);
}
function Nr(e, t) {
  return J(e) ? e : new ll(e, t);
}
class ll {
  constructor(t, n) {
    this.dep = new Jn(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : P(t), this._value = n ? t : se(t), this.__v_isShallow = n;
  }
  get value() {
    return W.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || ae(t) || Ze(t);
    t = o ? t : P(t), he(t, n) && (this._rawValue = t, this._value = o ? t : se(t), W.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Qe(e) {
  return J(e) ? e.value : e;
}
function cl(e) {
  return $(e) ? e() : Qe(e);
}
const ul = {
  get: (e, t, n) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return J(i) && !J(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function yr(e) {
  return bt(e) ? e : new Proxy(e, ul);
}
class fl {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const n = this.dep = new Jn(), { get: o, set: i } = t(n.track.bind(n), n.trigger.bind(n));
    this._get = o, this._set = i;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function al(e) {
  return new fl(e);
}
function dl(e) {
  W.NODE_ENV !== "production" && !nn(e) && Me("toRefs() expects a reactive object but received a plain one.");
  const t = x(e) ? new Array(e.length) : {};
  for (const n in e)
    t[n] = hl(e, n);
  return t;
}
class pl {
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
    return Us(P(this._object), this._key);
  }
}
function hl(e, t, n) {
  const o = e[t];
  return J(o) ? o : new pl(e, t, n);
}
class gl {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Jn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = en - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return sr(this, !0), !0;
  }
  get value() {
    const t = W.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return ur(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : W.NODE_ENV !== "production" && Me("Write operation failed: computed value is readonly");
  }
}
function ml(e, t, n = !1) {
  let o, i;
  $(e) ? o = e : (o = e.get, i = e.set);
  const r = new gl(o, i, n);
  return W.NODE_ENV !== "production" && t && !n && (r.onTrack = t.onTrack, r.onTrigger = t.onTrigger), r;
}
const bn = {}, In = /* @__PURE__ */ new WeakMap();
let mt;
function _l(e, t = !1, n = mt) {
  if (n) {
    let o = In.get(n);
    o || In.set(n, o = []), o.push(e);
  } else W.NODE_ENV !== "production" && !t && Me(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function El(e, t, n = j) {
  const { immediate: o, deep: i, once: r, scheduler: s, augmentJob: l, call: u } = n, h = (T) => {
    (n.onWarn || Me)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (T) => i ? T : ae(T) || i === !1 || i === 0 ? Ye(T, 1) : Ye(T);
  let a, m, y, S, A = !1, oe = !1;
  if (J(e) ? (m = () => e.value, A = ae(e)) : bt(e) ? (m = () => p(e), A = !0) : x(e) ? (oe = !0, A = e.some((T) => bt(T) || ae(T)), m = () => e.map((T) => {
    if (J(T))
      return T.value;
    if (bt(T))
      return p(T);
    if ($(T))
      return u ? u(T, 2) : T();
    W.NODE_ENV !== "production" && h(T);
  })) : $(e) ? t ? m = u ? () => u(e, 2) : e : m = () => {
    if (y) {
      tt();
      try {
        y();
      } finally {
        nt();
      }
    }
    const T = mt;
    mt = a;
    try {
      return u ? u(e, 3, [S]) : e(S);
    } finally {
      mt = T;
    }
  } : (m = Z, W.NODE_ENV !== "production" && h(e)), t && i) {
    const T = m, te = i === !0 ? 1 / 0 : i;
    m = () => Ye(T(), te);
  }
  const q = Fs(), Q = () => {
    a.stop(), q && q.active && Ro(q.effects, a);
  };
  if (r && t) {
    const T = t;
    t = (...te) => {
      T(...te), Q();
    };
  }
  let B = oe ? new Array(e.length).fill(bn) : bn;
  const _e = (T) => {
    if (!(!(a.flags & 1) || !a.dirty && !T))
      if (t) {
        const te = a.run();
        if (i || A || (oe ? te.some((Oe, ie) => he(Oe, B[ie])) : he(te, B))) {
          y && y();
          const Oe = mt;
          mt = a;
          try {
            const ie = [
              te,
              // pass undefined as the old value when it's changed for the first time
              B === bn ? void 0 : oe && B[0] === bn ? [] : B,
              S
            ];
            u ? u(t, 3, ie) : (
              // @ts-expect-error
              t(...ie)
            ), B = te;
          } finally {
            mt = Oe;
          }
        }
      } else
        a.run();
  };
  return l && l(_e), a = new ir(m), a.scheduler = s ? () => s(_e, !1) : _e, S = (T) => _l(T, !1, a), y = a.onStop = () => {
    const T = In.get(a);
    if (T) {
      if (u)
        u(T, 4);
      else
        for (const te of T) te();
      In.delete(a);
    }
  }, W.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? _e(!0) : B = a.run() : s ? s(_e.bind(null, !0), !0) : a.run(), Q.pause = a.pause.bind(a), Q.resume = a.resume.bind(a), Q.stop = Q, Q;
}
function Ye(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, J(e))
    Ye(e.value, t, n);
  else if (x(e))
    for (let o = 0; o < e.length; o++)
      Ye(e[o], t, n);
  else if (Pt(e) || _t(e))
    e.forEach((o) => {
      Ye(o, t, n);
    });
  else if (er(e)) {
    for (const o in e)
      Ye(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Ye(e[o], t, n);
  }
  return e;
}
var d = {};
const Nt = [];
function yn(e) {
  Nt.push(e);
}
function vn() {
  Nt.pop();
}
let ao = !1;
function v(e, ...t) {
  if (ao) return;
  ao = !0, tt();
  const n = Nt.length ? Nt[Nt.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = bl();
  if (o)
    Rt(
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
          ({ vnode: r }) => `at <${oo(n, r.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    i.length && r.push(`
`, ...Nl(i)), console.warn(...r);
  }
  nt(), ao = !1;
}
function bl() {
  let e = Nt[Nt.length - 1];
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
function Nl(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...yl(n));
  }), t;
}
function yl({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${oo(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [i, ...vl(e.props), r] : [i + r];
}
function vl(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...vr(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function vr(e, t, n) {
  return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : J(t) ? (t = vr(e, P(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : $(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = P(t), n ? t : [`${e}=`, t]);
}
const Go = {
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
function Rt(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    fn(i, t, n);
  }
}
function ke(e, t, n, o) {
  if ($(e)) {
    const i = Rt(e, t, n, o);
    return i && jo(i) && i.catch((r) => {
      fn(r, t, n);
    }), i;
  }
  if (x(e)) {
    const i = [];
    for (let r = 0; r < e.length; r++)
      i.push(ke(e[r], t, n, o));
    return i;
  } else d.NODE_ENV !== "production" && v(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function fn(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: s } = t && t.appContext.config || j;
  if (t) {
    let l = t.parent;
    const u = t.proxy, h = d.NODE_ENV !== "production" ? Go[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      tt(), Rt(r, null, 10, [
        e,
        u,
        h
      ]), nt();
      return;
    }
  }
  Ol(e, n, i, o, s);
}
function Ol(e, t, n, o = !0, i = !1) {
  if (d.NODE_ENV !== "production") {
    const r = Go[t];
    if (n && yn(n), v(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && vn(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const fe = [];
let Re = -1;
const $t = [];
let lt = null, Ct = 0;
const Or = /* @__PURE__ */ Promise.resolve();
let Pn = null;
const wl = 100;
function wr(e) {
  const t = Pn || Or;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Vl(e) {
  let t = Re + 1, n = fe.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = fe[o], r = on(i);
    r < e || r === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Zn(e) {
  if (!(e.flags & 1)) {
    const t = on(e), n = fe[fe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= on(n) ? fe.push(e) : fe.splice(Vl(t), 0, e), e.flags |= 1, Vr();
  }
}
function Vr() {
  Pn || (Pn = Or.then(Sr));
}
function Dr(e) {
  x(e) ? $t.push(...e) : lt && e.id === -1 ? lt.splice(Ct + 1, 0, e) : e.flags & 1 || ($t.push(e), e.flags |= 1), Vr();
}
function Ei(e, t, n = Re + 1) {
  for (d.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < fe.length; n++) {
    const o = fe[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || d.NODE_ENV !== "production" && Jo(t, o))
        continue;
      fe.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function xr(e) {
  if ($t.length) {
    const t = [...new Set($t)].sort(
      (n, o) => on(n) - on(o)
    );
    if ($t.length = 0, lt) {
      lt.push(...t);
      return;
    }
    for (lt = t, d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ct = 0; Ct < lt.length; Ct++) {
      const n = lt[Ct];
      d.NODE_ENV !== "production" && Jo(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    lt = null, Ct = 0;
  }
}
const on = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Sr(e) {
  d.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = d.NODE_ENV !== "production" ? (n) => Jo(e, n) : Z;
  try {
    for (Re = 0; Re < fe.length; Re++) {
      const n = fe[Re];
      if (n && !(n.flags & 8)) {
        if (d.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Rt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Re < fe.length; Re++) {
      const n = fe[Re];
      n && (n.flags &= -2);
    }
    Re = -1, fe.length = 0, xr(e), Pn = null, (fe.length || $t.length) && Sr(e);
  }
}
function Jo(e, t) {
  const n = e.get(t) || 0;
  if (n > wl) {
    const o = t.i, i = o && ds(o.type);
    return fn(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Le = !1;
const On = /* @__PURE__ */ new Map();
d.NODE_ENV !== "production" && (un().__VUE_HMR_RUNTIME__ = {
  createRecord: po(Cr),
  rerender: po(Sl),
  reload: po(Cl)
});
const Ot = /* @__PURE__ */ new Map();
function Dl(e) {
  const t = e.type.__hmrId;
  let n = Ot.get(t);
  n || (Cr(t, e.type), n = Ot.get(t)), n.instances.add(e);
}
function xl(e) {
  Ot.get(e.type.__hmrId).instances.delete(e);
}
function Cr(e, t) {
  return Ot.has(e) ? !1 : (Ot.set(e, {
    initialDef: Rn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Rn(e) {
  return ps(e) ? e.__vccOpts : e;
}
function Sl(e, t) {
  const n = Ot.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Rn(o.type).render = t), o.renderCache = [], Le = !0, o.update(), Le = !1;
  }));
}
function Cl(e, t) {
  const n = Ot.get(e);
  if (!n) return;
  t = Rn(t), bi(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const r = o[i], s = Rn(r.type);
    let l = On.get(s);
    l || (s !== n.initialDef && bi(s, t), On.set(s, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Zn(() => {
      Le = !0, r.parent.update(), Le = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(s);
  }
  Dr(() => {
    On.clear();
  });
}
function bi(e, t) {
  Y(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function po(e) {
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
let Fe, Wt = [], wo = !1;
function an(e, ...t) {
  Fe ? Fe.emit(e, ...t) : wo || Wt.push({ event: e, args: t });
}
function Tr(e, t) {
  var n, o;
  Fe = e, Fe ? (Fe.enabled = !0, Wt.forEach(({ event: i, args: r }) => Fe.emit(i, ...r)), Wt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Tr(r, t);
  }), setTimeout(() => {
    Fe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, wo = !0, Wt = []);
  }, 3e3)) : (wo = !0, Wt = []);
}
function Tl(e, t) {
  an("app:init", e, t, {
    Fragment: ge,
    Text: dn,
    Comment: me,
    Static: Dn
  });
}
function $l(e) {
  an("app:unmount", e);
}
const Ml = /* @__PURE__ */ Yo(
  "component:added"
  /* COMPONENT_ADDED */
), $r = /* @__PURE__ */ Yo(
  "component:updated"
  /* COMPONENT_UPDATED */
), Al = /* @__PURE__ */ Yo(
  "component:removed"
  /* COMPONENT_REMOVED */
), Il = (e) => {
  Fe && typeof Fe.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Fe.cleanupBuffer(e) && Al(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Yo(e) {
  return (t) => {
    an(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Pl = /* @__PURE__ */ Mr(
  "perf:start"
  /* PERFORMANCE_START */
), Rl = /* @__PURE__ */ Mr(
  "perf:end"
  /* PERFORMANCE_END */
);
function Mr(e) {
  return (t, n, o) => {
    an(e, t.appContext.app, t.uid, t, n, o);
  };
}
function jl(e, t, n) {
  an(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ee = null, Ar = null;
function jn(e) {
  const t = ee;
  return ee = e, Ar = e && e.type.__scopeId || null, t;
}
function qt(e, t = ee, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && Ci(-1);
    const r = jn(t);
    let s;
    try {
      s = e(...i);
    } finally {
      jn(r), o._d && Ci(1);
    }
    return d.NODE_ENV !== "production" && $r(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Ir(e) {
  ys(e) && v("Do not use built-in directive ids as custom directive id: " + e);
}
function Fl(e, t) {
  if (ee === null)
    return d.NODE_ENV !== "production" && v("withDirectives can only be used inside render functions."), e;
  const n = no(ee), o = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [r, s, l, u = j] = t[i];
    r && ($(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Ye(s), o.push({
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
function pt(e, t, n, o) {
  const i = e.dirs, r = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    r && (l.oldValue = r[s].value);
    let u = l.dir[o];
    u && (tt(), ke(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), nt());
  }
}
const Hl = Symbol("_vte"), Ll = (e) => e.__isTeleport;
function zo(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, zo(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function jt(e, t) {
  return $(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Y({ name: e.name }, t, { setup: e })
  ) : e;
}
function Pr(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Rr = /* @__PURE__ */ new WeakSet();
function Ul(e) {
  const t = ri(), n = sl(null);
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
  const o = d.NODE_ENV !== "production" ? qo(n) : n;
  return d.NODE_ENV !== "production" && Rr.add(o), o;
}
function Fn(e, t, n, o, i = !1) {
  if (x(e)) {
    e.forEach(
      (S, A) => Fn(
        S,
        t && (x(t) ? t[A] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Mt(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Fn(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? no(o.component) : o.el, s = i ? null : r, { i: l, r: u } = e;
  if (d.NODE_ENV !== "production" && !l) {
    v(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, p = l.refs === j ? l.refs = {} : l.refs, a = l.setupState, m = P(a), y = a === j ? () => !1 : (S) => d.NODE_ENV !== "production" && (L(m, S) && !J(m[S]) && v(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), Rr.has(m[S])) ? !1 : L(m, S);
  if (h != null && h !== u && (z(h) ? (p[h] = null, y(h) && (a[h] = null)) : J(h) && (h.value = null)), $(u))
    Rt(u, l, 12, [s, p]);
  else {
    const S = z(u), A = J(u);
    if (S || A) {
      const oe = () => {
        if (e.f) {
          const q = S ? y(u) ? a[u] : p[u] : u.value;
          i ? x(q) && Ro(q, r) : x(q) ? q.includes(r) || q.push(r) : S ? (p[u] = [r], y(u) && (a[u] = p[u])) : (u.value = [r], e.k && (p[e.k] = u.value));
        } else S ? (p[u] = s, y(u) && (a[u] = s)) : A ? (u.value = s, e.k && (p[e.k] = s)) : d.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
      };
      s ? (oe.id = -1, Ne(oe, n)) : oe();
    } else d.NODE_ENV !== "production" && v("Invalid template ref type:", u, `(${typeof u})`);
  }
}
un().requestIdleCallback;
un().cancelIdleCallback;
const Mt = (e) => !!e.type.__asyncLoader, Qo = (e) => e.type.__isKeepAlive;
function kl(e, t) {
  jr(e, "a", t);
}
function Bl(e, t) {
  jr(e, "da", t);
}
function jr(e, t, n = ne) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (eo(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Qo(i.parent.vnode) && Kl(o, t, n, i), i = i.parent;
  }
}
function Kl(e, t, n, o) {
  const i = eo(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Fr(() => {
    Ro(o[t], i);
  }, n);
}
function eo(e, t, n = ne, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...s) => {
      tt();
      const l = hn(n), u = ke(t, n, e, s);
      return l(), nt(), u;
    });
    return o ? i.unshift(r) : i.push(r), r;
  } else if (d.NODE_ENV !== "production") {
    const i = gt(Go[e].replace(/ hook$/, ""));
    v(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ot = (e) => (t, n = ne) => {
  (!sn || e === "sp") && eo(e, (...o) => t(...o), n);
}, Wl = ot("bm"), ql = ot("m"), Gl = ot(
  "bu"
), Jl = ot("u"), Yl = ot(
  "bum"
), Fr = ot("um"), zl = ot(
  "sp"
), Ql = ot("rtg"), Xl = ot("rtc");
function Zl(e, t = ne) {
  eo("ec", e, t);
}
const ec = Symbol.for("v-ndc");
function tc(e, t, n, o) {
  let i;
  const r = n, s = x(e);
  if (s || z(e)) {
    const l = s && bt(e);
    let u = !1;
    l && (u = !ae(e), e = Yn(e)), i = new Array(e.length);
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
  } else if (k(e))
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
function Hr(e, t, n = {}, o, i) {
  if (ee.ce || ee.parent && Mt(ee.parent) && ee.parent.ce)
    return Ve(), Bn(
      ge,
      null,
      [le("slot", n, o)],
      64
    );
  let r = e[t];
  d.NODE_ENV !== "production" && r && r.length > 1 && (v(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), r = () => []), r && r._c && (r._d = !1), Ve();
  const s = r && Lr(r(n)), l = n.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  s && s.key, u = Bn(
    ge,
    {
      key: (l && !$e(l) ? l : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!s && o ? "_fb" : "")
    },
    s || [],
    s && e._ === 1 ? 64 : -2
  );
  return u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), r && r._c && (r._d = !0), u;
}
function Lr(e) {
  return e.some((t) => pn(t) ? !(t.type === me || t.type === ge && !Lr(t.children)) : !0) ? e : null;
}
const Vo = (e) => e ? fs(e) ? no(e) : Vo(e.parent) : null, yt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Y(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => d.NODE_ENV !== "production" ? He(e.props) : e.props,
    $attrs: (e) => d.NODE_ENV !== "production" ? He(e.attrs) : e.attrs,
    $slots: (e) => d.NODE_ENV !== "production" ? He(e.slots) : e.slots,
    $refs: (e) => d.NODE_ENV !== "production" ? He(e.refs) : e.refs,
    $parent: (e) => Vo(e.parent),
    $root: (e) => Vo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Zn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wr.bind(e.proxy)),
    $watch: (e) => Pc.bind(e)
  })
), Xo = (e) => e === "_" || e === "$", ho = (e, t) => e !== j && !e.__isScriptSetup && L(e, t), Ur = {
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
        if (ho(o, t))
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
        Do && (s[t] = 0);
      }
    }
    const p = yt[t];
    let a, m;
    if (p)
      return t === "$attrs" ? (X(e.attrs, "get", ""), d.NODE_ENV !== "production" && kn()) : d.NODE_ENV !== "production" && t === "$slots" && X(e, "get", t), p(e);
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
    t.indexOf("__v") !== 0) && (i !== j && Xo(t[0]) && L(i, t) ? v(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ee && v(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: r } = e;
    return ho(i, t) ? (i[t] = n, !0) : d.NODE_ENV !== "production" && i.__isScriptSetup && L(i, t) ? (v(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== j && L(o, t) ? (o[t] = n, !0) : L(e.props, t) ? (d.NODE_ENV !== "production" && v(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (d.NODE_ENV !== "production" && v(
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
    return !!n[s] || e !== j && L(e, s) || ho(t, s) || (l = r[0]) && L(l, s) || L(o, s) || L(yt, s) || L(i.config.globalProperties, s);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : L(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
d.NODE_ENV !== "production" && (Ur.ownKeys = (e) => (v(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function nc(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(yt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => yt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Z
    });
  }), t;
}
function oc(e) {
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
function ic(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(P(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Xo(o[0])) {
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
function Hn(e) {
  return x(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function kr(e, t) {
  return !e || !t ? e || t : x(e) && x(t) ? e.concat(t) : Y({}, Hn(e), Hn(t));
}
function rc() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? v(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Do = !0;
function sc(e) {
  const t = Zo(e), n = e.proxy, o = e.ctx;
  Do = !1, t.beforeCreate && Ni(t.beforeCreate, e, "bc");
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
    updated: S,
    activated: A,
    deactivated: oe,
    beforeDestroy: q,
    beforeUnmount: Q,
    destroyed: B,
    unmounted: _e,
    render: T,
    renderTracked: te,
    renderTriggered: Oe,
    errorCaptured: ie,
    serverPrefetch: de,
    // public API
    expose: Ke,
    inheritAttrs: it,
    // assets
    components: xe,
    directives: gn,
    filters: si
  } = t, rt = d.NODE_ENV !== "production" ? rc() : null;
  if (d.NODE_ENV !== "production") {
    const [F] = e.propsOptions;
    if (F)
      for (const R in F)
        rt("Props", R);
  }
  if (h && lc(h, o, rt), s)
    for (const F in s) {
      const R = s[F];
      $(R) ? (d.NODE_ENV !== "production" ? Object.defineProperty(o, F, {
        value: R.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[F] = R.bind(n), d.NODE_ENV !== "production" && rt("Methods", F)) : d.NODE_ENV !== "production" && v(
        `Method "${F}" has type "${typeof R}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    d.NODE_ENV !== "production" && !$(i) && v(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const F = i.call(n, n);
    if (d.NODE_ENV !== "production" && jo(F) && v(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !k(F))
      d.NODE_ENV !== "production" && v("data() should return an object.");
    else if (e.data = Qn(F), d.NODE_ENV !== "production")
      for (const R in F)
        rt("Data", R), Xo(R[0]) || Object.defineProperty(o, R, {
          configurable: !0,
          enumerable: !0,
          get: () => F[R],
          set: Z
        });
  }
  if (Do = !0, r)
    for (const F in r) {
      const R = r[F], Ae = $(R) ? R.bind(n, n) : $(R.get) ? R.get.bind(n, n) : Z;
      d.NODE_ENV !== "production" && Ae === Z && v(`Computed property "${F}" has no getter.`);
      const io = !$(R) && $(R.set) ? R.set.bind(n) : d.NODE_ENV !== "production" ? () => {
        v(
          `Write operation failed: computed property "${F}" is readonly.`
        );
      } : Z, Ft = hs({
        get: Ae,
        set: io
      });
      Object.defineProperty(o, F, {
        enumerable: !0,
        configurable: !0,
        get: () => Ft.value,
        set: (Dt) => Ft.value = Dt
      }), d.NODE_ENV !== "production" && rt("Computed", F);
    }
  if (l)
    for (const F in l)
      Br(l[F], o, n, F);
  if (u) {
    const F = $(u) ? u.call(n) : u;
    Reflect.ownKeys(F).forEach((R) => {
      pc(R, F[R]);
    });
  }
  p && Ni(p, e, "c");
  function pe(F, R) {
    x(R) ? R.forEach((Ae) => F(Ae.bind(n))) : R && F(R.bind(n));
  }
  if (pe(Wl, a), pe(ql, m), pe(Gl, y), pe(Jl, S), pe(kl, A), pe(Bl, oe), pe(Zl, ie), pe(Xl, te), pe(Ql, Oe), pe(Yl, Q), pe(Fr, _e), pe(zl, de), x(Ke))
    if (Ke.length) {
      const F = e.exposed || (e.exposed = {});
      Ke.forEach((R) => {
        Object.defineProperty(F, R, {
          get: () => n[R],
          set: (Ae) => n[R] = Ae
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === Z && (e.render = T), it != null && (e.inheritAttrs = it), xe && (e.components = xe), gn && (e.directives = gn), de && Pr(e);
}
function lc(e, t, n = Z) {
  x(e) && (e = xo(e));
  for (const o in e) {
    const i = e[o];
    let r;
    k(i) ? "default" in i ? r = wn(
      i.from || o,
      i.default,
      !0
    ) : r = wn(i.from || o) : r = wn(i), J(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (s) => r.value = s
    }) : t[o] = r, d.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Ni(e, t, n) {
  ke(
    x(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Br(e, t, n, o) {
  let i = o.includes(".") ? ts(n, o) : () => n[o];
  if (z(e)) {
    const r = t[e];
    $(r) ? Qt(i, r) : d.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e}"`, r);
  } else if ($(e))
    Qt(i, e.bind(n));
  else if (k(e))
    if (x(e))
      e.forEach((r) => Br(r, t, n, o));
    else {
      const r = $(e.handler) ? e.handler.bind(n) : t[e.handler];
      $(r) ? Qt(i, r, e) : d.NODE_ENV !== "production" && v(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else d.NODE_ENV !== "production" && v(`Invalid watch option: "${o}"`, e);
}
function Zo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: r,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = r.get(t);
  let u;
  return l ? u = l : !i.length && !n && !o ? u = t : (u = {}, i.length && i.forEach(
    (h) => Ln(u, h, s, !0)
  ), Ln(u, t, s)), k(t) && r.set(t, u), u;
}
function Ln(e, t, n, o = !1) {
  const { mixins: i, extends: r } = t;
  r && Ln(e, r, n, !0), i && i.forEach(
    (s) => Ln(e, s, n, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      d.NODE_ENV !== "production" && v(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = cc[s] || n && n[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const cc = {
  data: yi,
  props: vi,
  emits: vi,
  // objects
  methods: Gt,
  computed: Gt,
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
  components: Gt,
  directives: Gt,
  // watch
  watch: fc,
  // provide / inject
  provide: yi,
  inject: uc
};
function yi(e, t) {
  return t ? e ? function() {
    return Y(
      $(e) ? e.call(this, this) : e,
      $(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function uc(e, t) {
  return Gt(xo(e), xo(t));
}
function xo(e) {
  if (x(e)) {
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
function Gt(e, t) {
  return e ? Y(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function vi(e, t) {
  return e ? x(e) && x(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Y(
    /* @__PURE__ */ Object.create(null),
    Hn(e),
    Hn(t ?? {})
  ) : t;
}
function fc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Y(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = ue(e[o], t[o]);
  return n;
}
function Kr() {
  return {
    app: null,
    config: {
      isNativeTag: bs,
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
let ac = 0;
function dc(e, t) {
  return function(o, i = null) {
    $(o) || (o = Y({}, o)), i != null && !k(i) && (d.NODE_ENV !== "production" && v("root props passed to app.mount() must be an object."), i = null);
    const r = Kr(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const h = r.app = {
      _uid: ac++,
      _component: o,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Ai,
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
        return d.NODE_ENV !== "production" && Mo(p, r.config), a ? (d.NODE_ENV !== "production" && r.components[p] && v(`Component "${p}" has already been registered in target app.`), r.components[p] = a, h) : r.components[p];
      },
      directive(p, a) {
        return d.NODE_ENV !== "production" && Ir(p), a ? (d.NODE_ENV !== "production" && r.directives[p] && v(`Directive "${p}" has already been registered in target app.`), r.directives[p] = a, h) : r.directives[p];
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
              at(y),
              p,
              m
            );
          }), a && t ? t(y, p) : e(y, p, m), u = !0, h._container = p, p.__vue_app__ = h, d.NODE_ENV !== "production" && (h._instance = y.component, Tl(h, Ai)), no(y.component);
        }
      },
      onUnmount(p) {
        d.NODE_ENV !== "production" && typeof p != "function" && v(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        u ? (ke(
          l,
          h._instance,
          16
        ), e(null, h._container), d.NODE_ENV !== "production" && (h._instance = null, $l(h)), delete h._container.__vue_app__) : d.NODE_ENV !== "production" && v("Cannot unmount an app that is not mounted.");
      },
      provide(p, a) {
        return d.NODE_ENV !== "production" && p in r.provides && v(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ), r.provides[p] = a, h;
      },
      runWithContext(p) {
        const a = At;
        At = h;
        try {
          return p();
        } finally {
          At = a;
        }
      }
    };
    return h;
  };
}
let At = null;
function pc(e, t) {
  if (!ne)
    d.NODE_ENV !== "production" && v("provide() can only be used inside setup().");
  else {
    let n = ne.provides;
    const o = ne.parent && ne.parent.provides;
    o === n && (n = ne.provides = Object.create(o)), n[e] = t;
  }
}
function wn(e, t, n = !1) {
  const o = ne || ee;
  if (o || At) {
    const i = At ? At._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && $(t) ? t.call(o && o.proxy) : t;
    d.NODE_ENV !== "production" && v(`injection "${String(e)}" not found.`);
  } else d.NODE_ENV !== "production" && v("inject() can only be used inside setup() or functional components.");
}
const Wr = {}, qr = () => Object.create(Wr), Gr = (e) => Object.getPrototypeOf(e) === Wr;
function hc(e, t, n, o = !1) {
  const i = {}, r = qr();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Jr(e, t, i, r);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  d.NODE_ENV !== "production" && zr(t || {}, i, e), n ? e.props = o ? i : il(i) : e.type.props ? e.props = i : e.props = r, e.attrs = r;
}
function gc(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function mc(e, t, n, o) {
  const {
    props: i,
    attrs: r,
    vnode: { patchFlag: s }
  } = e, l = P(i), [u] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(d.NODE_ENV !== "production" && gc(e)) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const p = e.vnode.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        let m = p[a];
        if (to(e.emitsOptions, m))
          continue;
        const y = t[m];
        if (u)
          if (L(r, m))
            y !== r[m] && (r[m] = y, h = !0);
          else {
            const S = we(m);
            i[S] = So(
              u,
              l,
              S,
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
    Jr(e, t, i, r) && (h = !0);
    let p;
    for (const a in l)
      (!t || // for camelCase
      !L(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Xe(a)) === a || !L(t, p))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[p] !== void 0) && (i[a] = So(
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
  h && je(e.attrs, "set", ""), d.NODE_ENV !== "production" && zr(t || {}, i, e);
}
function Jr(e, t, n, o) {
  const [i, r] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let u in t) {
      if (Jt(u))
        continue;
      const h = t[u];
      let p;
      i && L(i, p = we(u)) ? !r || !r.includes(p) ? n[p] = h : (l || (l = {}))[p] = h : to(e.emitsOptions, u) || (!(u in o) || h !== o[u]) && (o[u] = h, s = !0);
    }
  if (r) {
    const u = P(n), h = l || j;
    for (let p = 0; p < r.length; p++) {
      const a = r[p];
      n[a] = So(
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
function So(e, t, n, o, i, r) {
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
          const p = hn(i);
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
    ] && (o === "" || o === Xe(n)) && (o = !0));
  }
  return o;
}
const _c = /* @__PURE__ */ new WeakMap();
function Yr(e, t, n = !1) {
  const o = n ? _c : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const r = e.props, s = {}, l = [];
  let u = !1;
  if (!$(e)) {
    const p = (a) => {
      u = !0;
      const [m, y] = Yr(a, t, !0);
      Y(s, m), y && l.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !u)
    return k(e) && o.set(e, Tt), Tt;
  if (x(r))
    for (let p = 0; p < r.length; p++) {
      d.NODE_ENV !== "production" && !z(r[p]) && v("props must be strings when using array syntax.", r[p]);
      const a = we(r[p]);
      Oi(a) && (s[a] = j);
    }
  else if (r) {
    d.NODE_ENV !== "production" && !k(r) && v("invalid props options", r);
    for (const p in r) {
      const a = we(p);
      if (Oi(a)) {
        const m = r[p], y = s[a] = x(m) || $(m) ? { type: m } : Y({}, m), S = y.type;
        let A = !1, oe = !0;
        if (x(S))
          for (let q = 0; q < S.length; ++q) {
            const Q = S[q], B = $(Q) && Q.name;
            if (B === "Boolean") {
              A = !0;
              break;
            } else B === "String" && (oe = !1);
          }
        else
          A = $(S) && S.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = A, y[
          1
          /* shouldCastTrue */
        ] = oe, (A || L(y, "default")) && l.push(a);
      }
    }
  }
  const h = [s, l];
  return k(e) && o.set(e, h), h;
}
function Oi(e) {
  return e[0] !== "$" && !Jt(e) ? !0 : (d.NODE_ENV !== "production" && v(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Ec(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function zr(e, t, n) {
  const o = P(t), i = n.propsOptions[0], r = Object.keys(e).map((s) => we(s));
  for (const s in i) {
    let l = i[s];
    l != null && bc(
      s,
      o[s],
      l,
      d.NODE_ENV !== "production" ? He(o) : o,
      !r.includes(s)
    );
  }
}
function bc(e, t, n, o, i) {
  const { type: r, required: s, validator: l, skipCheck: u } = n;
  if (s && i) {
    v('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (r != null && r !== !0 && !u) {
      let h = !1;
      const p = x(r) ? r : [r], a = [];
      for (let m = 0; m < p.length && !h; m++) {
        const { valid: y, expectedType: S } = yc(t, p[m]);
        a.push(S || ""), h = y;
      }
      if (!h) {
        v(vc(e, t, a));
        return;
      }
    }
    l && !l(t, o) && v('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Nc = /* @__PURE__ */ et(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function yc(e, t) {
  let n;
  const o = Ec(t);
  if (o === "null")
    n = e === null;
  else if (Nc(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = k(e) : o === "Array" ? n = x(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function vc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Gn).join(" | ")}`;
  const i = n[0], r = Fo(t), s = wi(t, i), l = wi(t, r);
  return n.length === 1 && Vi(i) && !Oc(i, r) && (o += ` with value ${s}`), o += `, got ${r} `, Vi(r) && (o += `with value ${l}.`), o;
}
function wi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Vi(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Oc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Qr = (e) => e[0] === "_" || e === "$stable", ei = (e) => x(e) ? e.map(Ce) : [Ce(e)], wc = (e, t, n) => {
  if (t._n)
    return t;
  const o = qt((...i) => (d.NODE_ENV !== "production" && ne && (!n || n.root === ne.root) && v(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), ei(t(...i))), n);
  return o._c = !1, o;
}, Xr = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Qr(i)) continue;
    const r = e[i];
    if ($(r))
      t[i] = wc(i, r, o);
    else if (r != null) {
      d.NODE_ENV !== "production" && v(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const s = ei(r);
      t[i] = () => s;
    }
  }
}, Zr = (e, t) => {
  d.NODE_ENV !== "production" && !Qo(e.vnode) && v(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = ei(t);
  e.slots.default = () => n;
}, Co = (e, t, n) => {
  for (const o in t)
    (n || o !== "_") && (e[o] = t[o]);
}, Vc = (e, t, n) => {
  const o = e.slots = qr();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Co(o, t, n), n && Tn(o, "_", i, !0)) : Xr(t, o);
  } else t && Zr(e, t);
}, Dc = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let r = !0, s = j;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? d.NODE_ENV !== "production" && Le ? (Co(i, t, n), je(e, "set", "$slots")) : n && l === 1 ? r = !1 : Co(i, t, n) : (r = !t.$stable, Xr(t, i)), s = t;
  } else t && (Zr(e, t), s = { default: 1 });
  if (r)
    for (const l in i)
      !Qr(l) && s[l] == null && delete i[l];
};
let Bt, ut;
function qe(e, t) {
  e.appContext.config.performance && Un() && ut.mark(`vue-${t}-${e.uid}`), d.NODE_ENV !== "production" && Pl(e, t, Un() ? ut.now() : Date.now());
}
function Ge(e, t) {
  if (e.appContext.config.performance && Un()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ut.mark(o), ut.measure(
      `<${oo(e, e.type)}> ${t}`,
      n,
      o
    ), ut.clearMarks(n), ut.clearMarks(o);
  }
  d.NODE_ENV !== "production" && Rl(e, t, Un() ? ut.now() : Date.now());
}
function Un() {
  return Bt !== void 0 || (typeof window < "u" && window.performance ? (Bt = !0, ut = window.performance) : Bt = !1), Bt;
}
function xc() {
  const e = [];
  if (d.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ne = Uc;
function Sc(e) {
  return Cc(e);
}
function Cc(e, t) {
  xc();
  const n = un();
  n.__VUE__ = !0, d.NODE_ENV !== "production" && Tr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
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
    insertStaticContent: S
  } = e, A = (c, f, g, b = null, _ = null, E = null, V = void 0, w = null, O = d.NODE_ENV !== "production" && Le ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Kt(c, f) && (b = mn(c), st(c, _, E, !0), c = null), f.patchFlag === -2 && (O = !1, f.dynamicChildren = null);
    const { type: N, ref: M, shapeFlag: D } = f;
    switch (N) {
      case dn:
        oe(c, f, g, b);
        break;
      case me:
        q(c, f, g, b);
        break;
      case Dn:
        c == null ? Q(f, g, b, V) : d.NODE_ENV !== "production" && B(c, f, g, V);
        break;
      case ge:
        gn(
          c,
          f,
          g,
          b,
          _,
          E,
          V,
          w,
          O
        );
        break;
      default:
        D & 1 ? te(
          c,
          f,
          g,
          b,
          _,
          E,
          V,
          w,
          O
        ) : D & 6 ? si(
          c,
          f,
          g,
          b,
          _,
          E,
          V,
          w,
          O
        ) : D & 64 || D & 128 ? N.process(
          c,
          f,
          g,
          b,
          _,
          E,
          V,
          w,
          O,
          Lt
        ) : d.NODE_ENV !== "production" && v("Invalid VNode type:", N, `(${typeof N})`);
    }
    M != null && _ && Fn(M, c && c.ref, E, f || c, !f);
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
    [c.el, c.anchor] = S(
      c.children,
      f,
      g,
      b,
      c.el,
      c.anchor
    );
  }, B = (c, f, g, b) => {
    if (f.children !== c.children) {
      const _ = m(c.anchor);
      T(c), [f.el, f.anchor] = S(
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
  }, te = (c, f, g, b, _, E, V, w, O) => {
    f.type === "svg" ? V = "svg" : f.type === "math" && (V = "mathml"), c == null ? Oe(
      f,
      g,
      b,
      _,
      E,
      V,
      w,
      O
    ) : Ke(
      c,
      f,
      _,
      E,
      V,
      w,
      O
    );
  }, Oe = (c, f, g, b, _, E, V, w) => {
    let O, N;
    const { props: M, shapeFlag: D, transition: C, dirs: I } = c;
    if (O = c.el = s(
      c.type,
      E,
      M && M.is,
      M
    ), D & 8 ? p(O, c.children) : D & 16 && de(
      c.children,
      O,
      null,
      b,
      _,
      go(c, E),
      V,
      w
    ), I && pt(c, null, b, "created"), ie(O, c, c.scopeId, V, b), M) {
      for (const G in M)
        G !== "value" && !Jt(G) && r(O, G, null, M[G], E, b);
      "value" in M && r(O, "value", null, M.value, E), (N = M.onVnodeBeforeMount) && Pe(N, b, c);
    }
    d.NODE_ENV !== "production" && (Tn(O, "__vnode", c, !0), Tn(O, "__vueParentComponent", b, !0)), I && pt(c, null, b, "beforeMount");
    const H = Tc(_, C);
    H && C.beforeEnter(O), o(O, f, g), ((N = M && M.onVnodeMounted) || H || I) && Ne(() => {
      N && Pe(N, b, c), H && C.enter(O), I && pt(c, null, b, "mounted");
    }, _);
  }, ie = (c, f, g, b, _) => {
    if (g && y(c, g), b)
      for (let E = 0; E < b.length; E++)
        y(c, b[E]);
    if (_) {
      let E = _.subTree;
      if (d.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = oi(E.children) || E), f === E || rs(E.type) && (E.ssContent === f || E.ssFallback === f)) {
        const V = _.vnode;
        ie(
          c,
          V,
          V.scopeId,
          V.slotScopeIds,
          _.parent
        );
      }
    }
  }, de = (c, f, g, b, _, E, V, w, O = 0) => {
    for (let N = O; N < c.length; N++) {
      const M = c[N] = w ? ct(c[N]) : Ce(c[N]);
      A(
        null,
        M,
        f,
        g,
        b,
        _,
        E,
        V,
        w
      );
    }
  }, Ke = (c, f, g, b, _, E, V) => {
    const w = f.el = c.el;
    d.NODE_ENV !== "production" && (w.__vnode = f);
    let { patchFlag: O, dynamicChildren: N, dirs: M } = f;
    O |= c.patchFlag & 16;
    const D = c.props || j, C = f.props || j;
    let I;
    if (g && ht(g, !1), (I = C.onVnodeBeforeUpdate) && Pe(I, g, f, c), M && pt(f, c, g, "beforeUpdate"), g && ht(g, !0), d.NODE_ENV !== "production" && Le && (O = 0, V = !1, N = null), (D.innerHTML && C.innerHTML == null || D.textContent && C.textContent == null) && p(w, ""), N ? (it(
      c.dynamicChildren,
      N,
      w,
      g,
      b,
      go(f, _),
      E
    ), d.NODE_ENV !== "production" && Vn(c, f)) : V || Ae(
      c,
      f,
      w,
      null,
      g,
      b,
      go(f, _),
      E,
      !1
    ), O > 0) {
      if (O & 16)
        xe(w, D, C, g, _);
      else if (O & 2 && D.class !== C.class && r(w, "class", null, C.class, _), O & 4 && r(w, "style", D.style, C.style, _), O & 8) {
        const H = f.dynamicProps;
        for (let G = 0; G < H.length; G++) {
          const K = H[G], Ee = D[K], re = C[K];
          (re !== Ee || K === "value") && r(w, K, Ee, re, _, g);
        }
      }
      O & 1 && c.children !== f.children && p(w, f.children);
    } else !V && N == null && xe(w, D, C, g, _);
    ((I = C.onVnodeUpdated) || M) && Ne(() => {
      I && Pe(I, g, f, c), M && pt(f, c, g, "updated");
    }, b);
  }, it = (c, f, g, b, _, E, V) => {
    for (let w = 0; w < f.length; w++) {
      const O = c[w], N = f[w], M = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Kt(O, N) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 70) ? a(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      A(
        O,
        N,
        M,
        null,
        b,
        _,
        E,
        V,
        !0
      );
    }
  }, xe = (c, f, g, b, _) => {
    if (f !== g) {
      if (f !== j)
        for (const E in f)
          !Jt(E) && !(E in g) && r(
            c,
            E,
            f[E],
            null,
            _,
            b
          );
      for (const E in g) {
        if (Jt(E)) continue;
        const V = g[E], w = f[E];
        V !== w && E !== "value" && r(c, E, w, V, _, b);
      }
      "value" in g && r(c, "value", f.value, g.value, _);
    }
  }, gn = (c, f, g, b, _, E, V, w, O) => {
    const N = f.el = c ? c.el : l(""), M = f.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: C, slotScopeIds: I } = f;
    d.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Le || D & 2048) && (D = 0, O = !1, C = null), I && (w = w ? w.concat(I) : I), c == null ? (o(N, g, b), o(M, g, b), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      g,
      M,
      _,
      E,
      V,
      w,
      O
    )) : D > 0 && D & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (it(
      c.dynamicChildren,
      C,
      g,
      _,
      E,
      V,
      w
    ), d.NODE_ENV !== "production" ? Vn(c, f) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (f.key != null || _ && f === _.subTree) && Vn(
        c,
        f,
        !0
        /* shallow */
      )
    )) : Ae(
      c,
      f,
      g,
      M,
      _,
      E,
      V,
      w,
      O
    );
  }, si = (c, f, g, b, _, E, V, w, O) => {
    f.slotScopeIds = w, c == null ? f.shapeFlag & 512 ? _.ctx.activate(
      f,
      g,
      b,
      V,
      O
    ) : rt(
      f,
      g,
      b,
      _,
      E,
      V,
      O
    ) : pe(c, f, O);
  }, rt = (c, f, g, b, _, E, V) => {
    const w = c.component = Yc(
      c,
      b,
      _
    );
    if (d.NODE_ENV !== "production" && w.type.__hmrId && Dl(w), d.NODE_ENV !== "production" && (yn(c), qe(w, "mount")), Qo(c) && (w.ctx.renderer = Lt), d.NODE_ENV !== "production" && qe(w, "init"), Qc(w, !1, V), d.NODE_ENV !== "production" && Ge(w, "init"), w.asyncDep) {
      if (d.NODE_ENV !== "production" && Le && (c.el = null), _ && _.registerDep(w, F, V), !c.el) {
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
        V
      );
    d.NODE_ENV !== "production" && (vn(), Ge(w, "mount"));
  }, pe = (c, f, g) => {
    const b = f.component = c.component;
    if (Hc(c, f, g))
      if (b.asyncDep && !b.asyncResolved) {
        d.NODE_ENV !== "production" && yn(f), R(b, f, g), d.NODE_ENV !== "production" && vn();
        return;
      } else
        b.next = f, b.update();
    else
      f.el = c.el, b.vnode = f;
  }, F = (c, f, g, b, _, E, V) => {
    const w = () => {
      if (c.isMounted) {
        let { next: D, bu: C, u: I, parent: H, vnode: G } = c;
        {
          const be = es(c);
          if (be) {
            D && (D.el = G.el, R(c, D, V)), be.asyncDep.then(() => {
              c.isUnmounted || w();
            });
            return;
          }
        }
        let K = D, Ee;
        d.NODE_ENV !== "production" && yn(D || c.vnode), ht(c, !1), D ? (D.el = G.el, R(c, D, V)) : D = G, C && St(C), (Ee = D.props && D.props.onVnodeBeforeUpdate) && Pe(Ee, H, D, G), ht(c, !0), d.NODE_ENV !== "production" && qe(c, "render");
        const re = mo(c);
        d.NODE_ENV !== "production" && Ge(c, "render");
        const Se = c.subTree;
        c.subTree = re, d.NODE_ENV !== "production" && qe(c, "patch"), A(
          Se,
          re,
          // parent may have changed if it's in a teleport
          a(Se.el),
          // anchor may have changed if it's in a fragment
          mn(Se),
          c,
          _,
          E
        ), d.NODE_ENV !== "production" && Ge(c, "patch"), D.el = re.el, K === null && Lc(c, re.el), I && Ne(I, _), (Ee = D.props && D.props.onVnodeUpdated) && Ne(
          () => Pe(Ee, H, D, G),
          _
        ), d.NODE_ENV !== "production" && $r(c), d.NODE_ENV !== "production" && vn();
      } else {
        let D;
        const { el: C, props: I } = f, { bm: H, m: G, parent: K, root: Ee, type: re } = c, Se = Mt(f);
        if (ht(c, !1), H && St(H), !Se && (D = I && I.onVnodeBeforeMount) && Pe(D, K, f), ht(c, !0), C && ui) {
          const be = () => {
            d.NODE_ENV !== "production" && qe(c, "render"), c.subTree = mo(c), d.NODE_ENV !== "production" && Ge(c, "render"), d.NODE_ENV !== "production" && qe(c, "hydrate"), ui(
              C,
              c.subTree,
              c,
              _,
              null
            ), d.NODE_ENV !== "production" && Ge(c, "hydrate");
          };
          Se && re.__asyncHydrate ? re.__asyncHydrate(
            C,
            c,
            be
          ) : be();
        } else {
          Ee.ce && Ee.ce._injectChildStyle(re), d.NODE_ENV !== "production" && qe(c, "render");
          const be = c.subTree = mo(c);
          d.NODE_ENV !== "production" && Ge(c, "render"), d.NODE_ENV !== "production" && qe(c, "patch"), A(
            null,
            be,
            g,
            b,
            c,
            _,
            E
          ), d.NODE_ENV !== "production" && Ge(c, "patch"), f.el = be.el;
        }
        if (G && Ne(G, _), !Se && (D = I && I.onVnodeMounted)) {
          const be = f;
          Ne(
            () => Pe(D, K, be),
            _
          );
        }
        (f.shapeFlag & 256 || K && Mt(K.vnode) && K.vnode.shapeFlag & 256) && c.a && Ne(c.a, _), c.isMounted = !0, d.NODE_ENV !== "production" && Ml(c), f = g = b = null;
      }
    };
    c.scope.on();
    const O = c.effect = new ir(w);
    c.scope.off();
    const N = c.update = O.run.bind(O), M = c.job = O.runIfDirty.bind(O);
    M.i = c, M.id = c.uid, O.scheduler = () => Zn(M), ht(c, !0), d.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (D) => St(c.rtc, D) : void 0, O.onTrigger = c.rtg ? (D) => St(c.rtg, D) : void 0), N();
  }, R = (c, f, g) => {
    f.component = c;
    const b = c.vnode.props;
    c.vnode = f, c.next = null, mc(c, f.props, b, g), Dc(c, f.children, g), tt(), Ei(c), nt();
  }, Ae = (c, f, g, b, _, E, V, w, O = !1) => {
    const N = c && c.children, M = c ? c.shapeFlag : 0, D = f.children, { patchFlag: C, shapeFlag: I } = f;
    if (C > 0) {
      if (C & 128) {
        Ft(
          N,
          D,
          g,
          b,
          _,
          E,
          V,
          w,
          O
        );
        return;
      } else if (C & 256) {
        io(
          N,
          D,
          g,
          b,
          _,
          E,
          V,
          w,
          O
        );
        return;
      }
    }
    I & 8 ? (M & 16 && Ht(N, _, E), D !== N && p(g, D)) : M & 16 ? I & 16 ? Ft(
      N,
      D,
      g,
      b,
      _,
      E,
      V,
      w,
      O
    ) : Ht(N, _, E, !0) : (M & 8 && p(g, ""), I & 16 && de(
      D,
      g,
      b,
      _,
      E,
      V,
      w,
      O
    ));
  }, io = (c, f, g, b, _, E, V, w, O) => {
    c = c || Tt, f = f || Tt;
    const N = c.length, M = f.length, D = Math.min(N, M);
    let C;
    for (C = 0; C < D; C++) {
      const I = f[C] = O ? ct(f[C]) : Ce(f[C]);
      A(
        c[C],
        I,
        g,
        null,
        _,
        E,
        V,
        w,
        O
      );
    }
    N > M ? Ht(
      c,
      _,
      E,
      !0,
      !1,
      D
    ) : de(
      f,
      g,
      b,
      _,
      E,
      V,
      w,
      O,
      D
    );
  }, Ft = (c, f, g, b, _, E, V, w, O) => {
    let N = 0;
    const M = f.length;
    let D = c.length - 1, C = M - 1;
    for (; N <= D && N <= C; ) {
      const I = c[N], H = f[N] = O ? ct(f[N]) : Ce(f[N]);
      if (Kt(I, H))
        A(
          I,
          H,
          g,
          null,
          _,
          E,
          V,
          w,
          O
        );
      else
        break;
      N++;
    }
    for (; N <= D && N <= C; ) {
      const I = c[D], H = f[C] = O ? ct(f[C]) : Ce(f[C]);
      if (Kt(I, H))
        A(
          I,
          H,
          g,
          null,
          _,
          E,
          V,
          w,
          O
        );
      else
        break;
      D--, C--;
    }
    if (N > D) {
      if (N <= C) {
        const I = C + 1, H = I < M ? f[I].el : b;
        for (; N <= C; )
          A(
            null,
            f[N] = O ? ct(f[N]) : Ce(f[N]),
            g,
            H,
            _,
            E,
            V,
            w,
            O
          ), N++;
      }
    } else if (N > C)
      for (; N <= D; )
        st(c[N], _, E, !0), N++;
    else {
      const I = N, H = N, G = /* @__PURE__ */ new Map();
      for (N = H; N <= C; N++) {
        const ce = f[N] = O ? ct(f[N]) : Ce(f[N]);
        ce.key != null && (d.NODE_ENV !== "production" && G.has(ce.key) && v(
          "Duplicate keys found during update:",
          JSON.stringify(ce.key),
          "Make sure keys are unique."
        ), G.set(ce.key, N));
      }
      let K, Ee = 0;
      const re = C - H + 1;
      let Se = !1, be = 0;
      const Ut = new Array(re);
      for (N = 0; N < re; N++) Ut[N] = 0;
      for (N = I; N <= D; N++) {
        const ce = c[N];
        if (Ee >= re) {
          st(ce, _, E, !0);
          continue;
        }
        let Ie;
        if (ce.key != null)
          Ie = G.get(ce.key);
        else
          for (K = H; K <= C; K++)
            if (Ut[K - H] === 0 && Kt(ce, f[K])) {
              Ie = K;
              break;
            }
        Ie === void 0 ? st(ce, _, E, !0) : (Ut[Ie - H] = N + 1, Ie >= be ? be = Ie : Se = !0, A(
          ce,
          f[Ie],
          g,
          null,
          _,
          E,
          V,
          w,
          O
        ), Ee++);
      }
      const fi = Se ? $c(Ut) : Tt;
      for (K = fi.length - 1, N = re - 1; N >= 0; N--) {
        const ce = H + N, Ie = f[ce], ai = ce + 1 < M ? f[ce + 1].el : b;
        Ut[N] === 0 ? A(
          null,
          Ie,
          g,
          ai,
          _,
          E,
          V,
          w,
          O
        ) : Se && (K < 0 || N !== fi[K] ? Dt(Ie, g, ai, 2) : K--);
      }
    }
  }, Dt = (c, f, g, b, _ = null) => {
    const { el: E, type: V, transition: w, children: O, shapeFlag: N } = c;
    if (N & 6) {
      Dt(c.component.subTree, f, g, b);
      return;
    }
    if (N & 128) {
      c.suspense.move(f, g, b);
      return;
    }
    if (N & 64) {
      V.move(c, f, g, Lt);
      return;
    }
    if (V === ge) {
      o(E, f, g);
      for (let D = 0; D < O.length; D++)
        Dt(O[D], f, g, b);
      o(c.anchor, f, g);
      return;
    }
    if (V === Dn) {
      _e(c, f, g);
      return;
    }
    if (b !== 2 && N & 1 && w)
      if (b === 0)
        w.beforeEnter(E), o(E, f, g), Ne(() => w.enter(E), _);
      else {
        const { leave: D, delayLeave: C, afterLeave: I } = w, H = () => o(E, f, g), G = () => {
          D(E, () => {
            H(), I && I();
          });
        };
        C ? C(E, H, G) : G();
      }
    else
      o(E, f, g);
  }, st = (c, f, g, b = !1, _ = !1) => {
    const {
      type: E,
      props: V,
      ref: w,
      children: O,
      dynamicChildren: N,
      shapeFlag: M,
      patchFlag: D,
      dirs: C,
      cacheIndex: I
    } = c;
    if (D === -2 && (_ = !1), w != null && Fn(w, null, g, c, !0), I != null && (f.renderCache[I] = void 0), M & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const H = M & 1 && C, G = !Mt(c);
    let K;
    if (G && (K = V && V.onVnodeBeforeUnmount) && Pe(K, f, c), M & 6)
      Es(c.component, g, b);
    else {
      if (M & 128) {
        c.suspense.unmount(g, b);
        return;
      }
      H && pt(c, null, f, "beforeUnmount"), M & 64 ? c.type.remove(
        c,
        f,
        g,
        Lt,
        b
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== ge || D > 0 && D & 64) ? Ht(
        N,
        f,
        g,
        !1,
        !0
      ) : (E === ge && D & 384 || !_ && M & 16) && Ht(O, f, g), b && ro(c);
    }
    (G && (K = V && V.onVnodeUnmounted) || H) && Ne(() => {
      K && Pe(K, f, c), H && pt(c, null, f, "unmounted");
    }, g);
  }, ro = (c) => {
    const { type: f, el: g, anchor: b, transition: _ } = c;
    if (f === ge) {
      d.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && _ && !_.persisted ? c.children.forEach((V) => {
        V.type === me ? i(V.el) : ro(V);
      }) : _s(g, b);
      return;
    }
    if (f === Dn) {
      T(c);
      return;
    }
    const E = () => {
      i(g), _ && !_.persisted && _.afterLeave && _.afterLeave();
    };
    if (c.shapeFlag & 1 && _ && !_.persisted) {
      const { leave: V, delayLeave: w } = _, O = () => V(g, E);
      w ? w(c.el, E, O) : O();
    } else
      E();
  }, _s = (c, f) => {
    let g;
    for (; c !== f; )
      g = m(c), i(c), c = g;
    i(f);
  }, Es = (c, f, g) => {
    d.NODE_ENV !== "production" && c.type.__hmrId && xl(c);
    const { bum: b, scope: _, job: E, subTree: V, um: w, m: O, a: N } = c;
    Di(O), Di(N), b && St(b), _.stop(), E && (E.flags |= 8, st(V, c, f, g)), w && Ne(w, f), Ne(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), d.NODE_ENV !== "production" && Il(c);
  }, Ht = (c, f, g, b = !1, _ = !1, E = 0) => {
    for (let V = E; V < c.length; V++)
      st(c[V], f, g, b, _);
  }, mn = (c) => {
    if (c.shapeFlag & 6)
      return mn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = m(c.anchor || c.el), g = f && f[Hl];
    return g ? m(g) : f;
  };
  let so = !1;
  const li = (c, f, g) => {
    c == null ? f._vnode && st(f._vnode, null, null, !0) : A(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      g
    ), f._vnode = c, so || (so = !0, Ei(), xr(), so = !1);
  }, Lt = {
    p: A,
    um: st,
    m: Dt,
    r: ro,
    mt: rt,
    mc: de,
    pc: Ae,
    pbc: it,
    n: mn,
    o: e
  };
  let ci, ui;
  return {
    render: li,
    hydrate: ci,
    createApp: dc(li, ci)
  };
}
function go({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ht({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Tc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Vn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if (x(o) && x(i))
    for (let r = 0; r < o.length; r++) {
      const s = o[r];
      let l = i[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[r] = ct(i[r]), l.el = s.el), !n && l.patchFlag !== -2 && Vn(s, l)), l.type === dn && (l.el = s.el), d.NODE_ENV !== "production" && l.type === me && !l.el && (l.el = s.el);
    }
}
function $c(e) {
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
function es(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : es(t);
}
function Di(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Mc = Symbol.for("v-scx"), Ac = () => {
  {
    const e = wn(Mc);
    return e || d.NODE_ENV !== "production" && v(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Ic(e, t) {
  return ti(
    e,
    null,
    d.NODE_ENV !== "production" ? Y({}, t, { flush: "sync" }) : { flush: "sync" }
  );
}
function Qt(e, t, n) {
  return d.NODE_ENV !== "production" && !$(t) && v(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ti(e, t, n);
}
function ti(e, t, n = j) {
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
  if (sn) {
    if (r === "sync") {
      const y = Ac();
      h = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!u) {
      const y = () => {
      };
      return y.stop = Z, y.resume = Z, y.pause = Z, y;
    }
  }
  const p = ne;
  l.call = (y, S, A) => ke(y, p, S, A);
  let a = !1;
  r === "post" ? l.scheduler = (y) => {
    Ne(y, p && p.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (y, S) => {
    S ? y() : Zn(y);
  }), l.augmentJob = (y) => {
    t && (y.flags |= 4), a && (y.flags |= 2, p && (y.id = p.uid, y.i = p));
  };
  const m = El(e, t, l);
  return sn && (h ? h.push(m) : u && m()), m;
}
function Pc(e, t, n) {
  const o = this.proxy, i = z(e) ? e.includes(".") ? ts(o, e) : () => o[e] : e.bind(o, o);
  let r;
  $(t) ? r = t : (r = t.handler, n = t);
  const s = hn(this), l = ti(i, r.bind(o), n);
  return s(), l;
}
function ts(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
function ni(e, t, n = j) {
  const o = ri();
  if (d.NODE_ENV !== "production" && !o)
    return v("useModel() called without active instance."), _i();
  const i = we(t);
  if (d.NODE_ENV !== "production" && !o.propsOptions[0][i])
    return v(`useModel() called with prop "${t}" which is not declared.`), _i();
  const r = Xe(t), s = ns(e, i), l = al((u, h) => {
    let p, a = j, m;
    return Ic(() => {
      const y = e[i];
      he(p, y) && (p = y, h());
    }), {
      get() {
        return u(), n.get ? n.get(p) : p;
      },
      set(y) {
        const S = n.set ? n.set(y) : y;
        if (!he(S, p) && !(a !== j && he(y, a)))
          return;
        const A = o.vnode.props;
        A && // check if parent has passed v-model
        (t in A || i in A || r in A) && (`onUpdate:${t}` in A || `onUpdate:${i}` in A || `onUpdate:${r}` in A) || (p = y, h()), o.emit(`update:${t}`, S), he(y, S) && he(y, a) && !he(S, m) && h(), a = y, m = S;
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
const ns = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${we(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];
function Rc(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || j;
  if (d.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [a]
    } = e;
    if (p)
      if (!(t in p))
        (!a || !(gt(we(t)) in a)) && v(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${gt(we(t))}" prop.`
        );
      else {
        const m = p[t];
        $(m) && (m(...n) || v(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const r = t.startsWith("update:"), s = r && ns(o, t.slice(7));
  if (s && (s.trim && (i = n.map((p) => z(p) ? p.trim() : p)), s.number && (i = n.map($n))), d.NODE_ENV !== "production" && jl(e, t, i), d.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[gt(p)] && v(
      `Event "${p}" is emitted in component ${oo(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Xe(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = o[l = gt(t)] || // also try camelCase event handler (#2249)
  o[l = gt(we(t))];
  !u && r && (u = o[l = gt(Xe(t))]), u && ke(
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
    e.emitted[l] = !0, ke(
      h,
      e,
      6,
      i
    );
  }
}
function os(e, t, n = !1) {
  const o = t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const r = e.emits;
  let s = {}, l = !1;
  if (!$(e)) {
    const u = (h) => {
      const p = os(h, t, !0);
      p && (l = !0, Y(s, p));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !r && !l ? (k(e) && o.set(e, null), null) : (x(r) ? r.forEach((u) => s[u] = null) : Y(s, r), k(e) && o.set(e, s), s);
}
function to(e, t) {
  return !e || !ln(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), L(e, t[0].toLowerCase() + t.slice(1)) || L(e, Xe(t)) || L(e, t));
}
let To = !1;
function kn() {
  To = !0;
}
function mo(e) {
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
    ctx: S,
    inheritAttrs: A
  } = e, oe = jn(e);
  let q, Q;
  d.NODE_ENV !== "production" && (To = !1);
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
      q = Ce(
        h.call(
          te,
          T,
          p,
          d.NODE_ENV !== "production" ? He(a) : a,
          y,
          m,
          S
        )
      ), Q = l;
    } else {
      const T = t;
      d.NODE_ENV !== "production" && l === a && kn(), q = Ce(
        T.length > 1 ? T(
          d.NODE_ENV !== "production" ? He(a) : a,
          d.NODE_ENV !== "production" ? {
            get attrs() {
              return kn(), He(l);
            },
            slots: s,
            emit: u
          } : { attrs: l, slots: s, emit: u }
        ) : T(
          d.NODE_ENV !== "production" ? He(a) : a,
          null
        )
      ), Q = t.props ? l : jc(l);
    }
  } catch (T) {
    Xt.length = 0, fn(T, e, 1), q = le(me);
  }
  let B = q, _e;
  if (d.NODE_ENV !== "production" && q.patchFlag > 0 && q.patchFlag & 2048 && ([B, _e] = is(q)), Q && A !== !1) {
    const T = Object.keys(Q), { shapeFlag: te } = B;
    if (T.length) {
      if (te & 7)
        r && T.some(Cn) && (Q = Fc(
          Q,
          r
        )), B = at(B, Q, !1, !0);
      else if (d.NODE_ENV !== "production" && !To && B.type !== me) {
        const Oe = Object.keys(l), ie = [], de = [];
        for (let Ke = 0, it = Oe.length; Ke < it; Ke++) {
          const xe = Oe[Ke];
          ln(xe) ? Cn(xe) || ie.push(xe[2].toLowerCase() + xe.slice(3)) : de.push(xe);
        }
        de.length && v(
          `Extraneous non-props attributes (${de.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ie.length && v(
          `Extraneous non-emits event listeners (${ie.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (d.NODE_ENV !== "production" && !xi(B) && v(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), B = at(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && (d.NODE_ENV !== "production" && !xi(B) && v(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), zo(B, n.transition)), d.NODE_ENV !== "production" && _e ? _e(B) : q = B, jn(oe), q;
}
const is = (e) => {
  const t = e.children, n = e.dynamicChildren, o = oi(t, !1);
  if (o) {
    if (d.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return is(o);
  } else return [e, void 0];
  const i = t.indexOf(o), r = n ? n.indexOf(o) : -1, s = (l) => {
    t[i] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ce(o), s];
};
function oi(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (pn(i)) {
      if (i.type !== me || i.children === "v-if") {
        if (n)
          return;
        if (n = i, d.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return oi(n.children);
      }
    } else
      return;
  }
  return n;
}
const jc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ln(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Cn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, xi = (e) => e.shapeFlag & 7 || e.type === me;
function Hc(e, t, n) {
  const { props: o, children: i, component: r } = e, { props: s, children: l, patchFlag: u } = t, h = r.emitsOptions;
  if (d.NODE_ENV !== "production" && (i || l) && Le || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return o ? Si(o, s, h) : !!s;
    if (u & 8) {
      const p = t.dynamicProps;
      for (let a = 0; a < p.length; a++) {
        const m = p[a];
        if (s[m] !== o[m] && !to(h, m))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? Si(o, s, h) : !0 : !!s;
  return !1;
}
function Si(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    if (t[r] !== e[r] && !to(n, r))
      return !0;
  }
  return !1;
}
function Lc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const rs = (e) => e.__isSuspense;
function Uc(e, t) {
  t && t.pendingBranch ? x(e) ? t.effects.push(...e) : t.effects.push(e) : Dr(e);
}
const ge = Symbol.for("v-fgt"), dn = Symbol.for("v-txt"), me = Symbol.for("v-cmt"), Dn = Symbol.for("v-stc"), Xt = [];
let ve = null;
function Ve(e = !1) {
  Xt.push(ve = e ? null : []);
}
function kc() {
  Xt.pop(), ve = Xt[Xt.length - 1] || null;
}
let rn = 1;
function Ci(e, t = !1) {
  rn += e, e < 0 && ve && t && (ve.hasOnce = !0);
}
function ss(e) {
  return e.dynamicChildren = rn > 0 ? ve || Tt : null, kc(), rn > 0 && ve && ve.push(e), e;
}
function ft(e, t, n, o, i, r) {
  return ss(
    wt(
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
function Bn(e, t, n, o, i) {
  return ss(
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
function pn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Kt(e, t) {
  if (d.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = On.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Bc = (...e) => cs(
  ...e
), ls = ({ key: e }) => e ?? null, xn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? z(e) || J(e) || $(e) ? { i: ee, r: e, k: t, f: !!n } : e : null);
function wt(e, t = null, n = null, o = 0, i = null, r = e === ge ? 0 : 1, s = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ls(t),
    ref: t && xn(t),
    scopeId: Ar,
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
  return l ? (ii(u, n), r & 128 && e.normalize(u)) : n && (u.shapeFlag |= z(n) ? 8 : 16), d.NODE_ENV !== "production" && u.key !== u.key && v("VNode created with invalid key (NaN). VNode type:", u.type), rn > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && ve.push(u), u;
}
const le = d.NODE_ENV !== "production" ? Bc : cs;
function cs(e, t = null, n = null, o = 0, i = null, r = !1) {
  if ((!e || e === ec) && (d.NODE_ENV !== "production" && !e && v(`Invalid vnode type when creating vnode: ${e}.`), e = me), pn(e)) {
    const l = at(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ii(l, n), rn > 0 && !r && ve && (l.shapeFlag & 6 ? ve[ve.indexOf(e)] = l : ve.push(l)), l.patchFlag = -2, l;
  }
  if (ps(e) && (e = e.__vccOpts), t) {
    t = Kc(t);
    let { class: l, style: u } = t;
    l && !z(l) && (t.class = Uo(l)), k(u) && (nn(u) && !x(u) && (u = Y({}, u)), t.style = Lo(u));
  }
  const s = z(e) ? 1 : rs(e) ? 128 : Ll(e) ? 64 : k(e) ? 4 : $(e) ? 2 : 0;
  return d.NODE_ENV !== "production" && s & 4 && nn(e) && (e = P(e), v(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), wt(
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
function Kc(e) {
  return e ? nn(e) || Gr(e) ? Y({}, e) : e : null;
}
function at(e, t, n = !1, o = !1) {
  const { props: i, ref: r, patchFlag: s, children: l, transition: u } = e, h = t ? Vt(i || {}, t) : i, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && ls(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? x(r) ? r.concat(xn(t)) : [r, xn(t)] : xn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d.NODE_ENV !== "production" && s === -1 && x(l) ? l.map(us) : l,
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
    ssContent: e.ssContent && at(e.ssContent),
    ssFallback: e.ssFallback && at(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && o && zo(
    p,
    u.clone(p)
  ), p;
}
function us(e) {
  const t = at(e);
  return x(e.children) && (t.children = e.children.map(us)), t;
}
function Wc(e = " ", t = 0) {
  return le(dn, null, e, t);
}
function qc(e = "", t = !1) {
  return t ? (Ve(), Bn(me, null, e)) : le(me, null, e);
}
function Ce(e) {
  return e == null || typeof e == "boolean" ? le(me) : x(e) ? le(
    ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pn(e) ? ct(e) : le(dn, null, String(e));
}
function ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : at(e);
}
function ii(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (x(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), ii(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !Gr(t) ? t._ctx = ee : i === 3 && ee && (ee.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else $(t) ? (t = { default: t, _ctx: ee }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Wc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Vt(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = Uo([t.class, o.class]));
      else if (i === "style")
        t.style = Lo([t.style, o.style]);
      else if (ln(i)) {
        const r = t[i], s = o[i];
        s && r !== s && !(x(r) && r.includes(s)) && (t[i] = r ? [].concat(r, s) : s);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function Pe(e, t, n, o = null) {
  ke(e, t, 7, [
    n,
    o
  ]);
}
const Gc = Kr();
let Jc = 0;
function Yc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || Gc, r = {
    uid: Jc++,
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
    scope: new js(
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
    propsOptions: Yr(o, i),
    emitsOptions: os(o, i),
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
  return d.NODE_ENV !== "production" ? r.ctx = nc(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Rc.bind(null, r), e.ce && e.ce(r), r;
}
let ne = null;
const ri = () => ne || ee;
let Kn, $o;
{
  const e = un(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (r) => {
      i.length > 1 ? i.forEach((s) => s(r)) : i[0](r);
    };
  };
  Kn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ne = n
  ), $o = t(
    "__VUE_SSR_SETTERS__",
    (n) => sn = n
  );
}
const hn = (e) => {
  const t = ne;
  return Kn(e), e.scope.on(), () => {
    e.scope.off(), Kn(t);
  };
}, Ti = () => {
  ne && ne.scope.off(), Kn(null);
}, zc = /* @__PURE__ */ et("slot,component");
function Mo(e, { isNativeTag: t }) {
  (zc(e) || t(e)) && v(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function fs(e) {
  return e.vnode.shapeFlag & 4;
}
let sn = !1;
function Qc(e, t = !1, n = !1) {
  t && $o(t);
  const { props: o, children: i } = e.vnode, r = fs(e);
  hc(e, o, r, t), Vc(e, i, n);
  const s = r ? Xc(e, t) : void 0;
  return t && $o(!1), s;
}
function Xc(e, t) {
  var n;
  const o = e.type;
  if (d.NODE_ENV !== "production") {
    if (o.name && Mo(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let s = 0; s < r.length; s++)
        Mo(r[s], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let s = 0; s < r.length; s++)
        Ir(r[s]);
    }
    o.compilerOptions && Zc() && v(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ur), d.NODE_ENV !== "production" && oc(e);
  const { setup: i } = o;
  if (i) {
    tt();
    const r = e.setupContext = i.length > 1 ? tu(e) : null, s = hn(e), l = Rt(
      i,
      e,
      0,
      [
        d.NODE_ENV !== "production" ? He(e.props) : e.props,
        r
      ]
    ), u = jo(l);
    if (nt(), s(), (u || e.sp) && !Mt(e) && Pr(e), u) {
      if (l.then(Ti, Ti), t)
        return l.then((h) => {
          $i(e, h, t);
        }).catch((h) => {
          fn(h, e, 0);
        });
      if (e.asyncDep = l, d.NODE_ENV !== "production" && !e.suspense) {
        const h = (n = o.name) != null ? n : "Anonymous";
        v(
          `Component <${h}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      $i(e, l, t);
  } else
    as(e, t);
}
function $i(e, t, n) {
  $(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (d.NODE_ENV !== "production" && pn(t) && v(
    "setup() should not return VNodes directly - return a render function instead."
  ), d.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = yr(t), d.NODE_ENV !== "production" && ic(e)) : d.NODE_ENV !== "production" && t !== void 0 && v(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), as(e, n);
}
let Ao;
const Zc = () => !Ao;
function as(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Ao && !o.render) {
      const i = o.template || Zo(e).template;
      if (i) {
        d.NODE_ENV !== "production" && qe(e, "compile");
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
        o.render = Ao(i, h), d.NODE_ENV !== "production" && Ge(e, "compile");
      }
    }
    e.render = o.render || Z;
  }
  {
    const i = hn(e);
    tt();
    try {
      sc(e);
    } finally {
      nt(), i();
    }
  }
  d.NODE_ENV !== "production" && !o.render && e.render === Z && !t && (o.template ? v(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : v("Component is missing template or render function: ", o));
}
const Mi = d.NODE_ENV !== "production" ? {
  get(e, t) {
    return kn(), X(e, "get", ""), e[t];
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
function eu(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return X(e, "get", "$slots"), t[n];
    }
  });
}
function tu(e) {
  const t = (n) => {
    if (d.NODE_ENV !== "production" && (e.exposed && v("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (x(n) ? o = "array" : J(n) && (o = "ref")), o !== "object" && v(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (d.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, Mi));
      },
      get slots() {
        return o || (o = eu(e));
      },
      get emit() {
        return (i, ...r) => e.emit(i, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Mi),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function no(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(yr(rl(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in yt)
        return yt[n](e);
    },
    has(t, n) {
      return n in t || n in yt;
    }
  })) : e.proxy;
}
const nu = /(?:^|[-_])(\w)/g, ou = (e) => e.replace(nu, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function ds(e, t = !0) {
  return $(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function oo(e, t, n = !1) {
  let o = ds(t);
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
  return o ? ou(o) : n ? "App" : "Anonymous";
}
function ps(e) {
  return $(e) && "__vccOpts" in e;
}
const hs = (e, t) => {
  const n = ml(e, t, sn);
  if (d.NODE_ENV !== "production") {
    const o = ri();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function iu() {
  if (d.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      return k(a) ? a.__isVue ? ["div", e, "VueInstance"] : J(a) ? [
        "div",
        {},
        ["span", e, p(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in a ? a._value : a),
        ">"
      ] : bt(a) ? [
        "div",
        {},
        ["span", e, ae(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${Ze(a) ? " (readonly)" : ""}`
      ] : Ze(a) ? [
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
    a.type.props && a.props && m.push(s("props", P(a.props))), a.setupState !== j && m.push(s("setup", a.setupState)), a.data !== j && m.push(s("data", P(a.data)));
    const y = u(a, "computed");
    y && m.push(s("computed", y));
    const S = u(a, "inject");
    return S && m.push(s("injected", S)), m.push([
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
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : k(a) ? ["object", { object: m ? P(a) : a }] : ["span", n, String(a)];
  }
  function u(a, m) {
    const y = a.type;
    if ($(y))
      return;
    const S = {};
    for (const A in a.ctx)
      h(y, A, m) && (S[A] = a.ctx[A]);
    return S;
  }
  function h(a, m, y) {
    const S = a[y];
    if (x(S) && S.includes(m) || k(S) && m in S || a.extends && h(a.extends, m, y) || a.mixins && a.mixins.some((A) => h(A, m, y)))
      return !0;
  }
  function p(a) {
    return ae(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Ai = "3.5.13", Ue = d.NODE_ENV !== "production" ? v : Z;
var Be = {};
let Io;
const Ii = typeof window < "u" && window.trustedTypes;
if (Ii)
  try {
    Io = /* @__PURE__ */ Ii.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Be.NODE_ENV !== "production" && Ue(`Error creating trusted types policy: ${e}`);
  }
const gs = Io ? (e) => Io.createHTML(e) : (e) => e, ru = "http://www.w3.org/2000/svg", su = "http://www.w3.org/1998/Math/MathML", Je = typeof document < "u" ? document : null, Pi = Je && /* @__PURE__ */ Je.createElement("template"), lu = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Je.createElementNS(ru, e) : t === "mathml" ? Je.createElementNS(su, e) : n ? Je.createElement(e, { is: n }) : Je.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
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
      Pi.innerHTML = gs(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Pi.content;
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
}, cu = Symbol("_vtc");
function uu(e, t, n) {
  const o = e[cu];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ri = Symbol("_vod"), fu = Symbol("_vsh"), au = Symbol(Be.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), du = /(^|;)\s*display\s*:/;
function pu(e, t, n) {
  const o = e.style, i = z(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (z(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          n[l] == null && Sn(o, l, "");
        }
      else
        for (const s in t)
          n[s] == null && Sn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), Sn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[au];
      s && (n += ";" + s), o.cssText = n, r = du.test(n);
    }
  } else t && e.removeAttribute("style");
  Ri in e && (e[Ri] = r ? o.display : "", e[fu] && (o.display = "none"));
}
const hu = /[^\\];\s*$/, ji = /\s*!important$/;
function Sn(e, t, n) {
  if (x(n))
    n.forEach((o) => Sn(e, t, o));
  else if (n == null && (n = ""), Be.NODE_ENV !== "production" && hu.test(n) && Ue(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = gu(e, t);
    ji.test(n) ? e.setProperty(
      Xe(o),
      n.replace(ji, ""),
      "important"
    ) : e[o] = n;
  }
}
const Fi = ["Webkit", "Moz", "ms"], _o = {};
function gu(e, t) {
  const n = _o[t];
  if (n)
    return n;
  let o = we(t);
  if (o !== "filter" && o in e)
    return _o[t] = o;
  o = Gn(o);
  for (let i = 0; i < Fi.length; i++) {
    const r = Fi[i] + o;
    if (r in e)
      return _o[t] = r;
  }
  return t;
}
const Hi = "http://www.w3.org/1999/xlink";
function Li(e, t, n, o, i, r = Ps(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hi, t.slice(6, t.length)) : e.setAttributeNS(Hi, t, n) : n == null || r && !tr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : $e(n) ? String(n) : n
  );
}
function Ui(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? gs(n) : n);
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
    l === "boolean" ? n = tr(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    Be.NODE_ENV !== "production" && !s && Ue(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(i || t);
}
function ze(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function mu(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ki = Symbol("_vei");
function _u(e, t, n, o, i = null) {
  const r = e[ki] || (e[ki] = {}), s = r[t];
  if (o && s)
    s.value = Be.NODE_ENV !== "production" ? Ki(o, t) : o;
  else {
    const [l, u] = Eu(t);
    if (o) {
      const h = r[t] = yu(
        Be.NODE_ENV !== "production" ? Ki(o, t) : o,
        i
      );
      ze(e, l, h, u);
    } else s && (mu(e, l, s, u), r[t] = void 0);
  }
}
const Bi = /(?:Once|Passive|Capture)$/;
function Eu(e) {
  let t;
  if (Bi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Bi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let Eo = 0;
const bu = /* @__PURE__ */ Promise.resolve(), Nu = () => Eo || (bu.then(() => Eo = 0), Eo = Date.now());
function yu(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    ke(
      vu(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Nu(), n;
}
function Ki(e, t) {
  return $(e) || x(e) ? e : (Ue(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Z);
}
function vu(e, t) {
  if (x(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Wi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ou = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? uu(e, o, s) : t === "style" ? pu(e, n, o) : ln(t) ? Cn(t) || _u(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : wu(e, t, o, s)) ? (Ui(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Li(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !z(o)) ? Ui(e, we(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Li(e, t, o, s));
};
function wu(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wi(t) && $(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Wi(t) && z(n) ? !1 : t in e;
}
const dt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return x(t) ? (n) => St(t, n) : t;
};
function Vu(e) {
  e.target.composing = !0;
}
function qi(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const De = Symbol("_assign"), Gi = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, i) {
    e[De] = dt(i);
    const r = o || i.props && i.props.type === "number";
    ze(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = $n(l)), e[De](l);
    }), n && ze(e, "change", () => {
      e.value = e.value.trim();
    }), t || (ze(e, "compositionstart", Vu), ze(e, "compositionend", qi), ze(e, "change", qi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: i, number: r } }, s) {
    if (e[De] = dt(s), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? $n(e.value) : e.value, u = t ?? "";
    l !== u && (document.activeElement === e && e.type !== "range" && (o && t === n || i && e.value.trim() === u) || (e.value = u));
  }
}, Du = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[De] = dt(n), ze(e, "change", () => {
      const o = e._modelValue, i = It(e), r = e.checked, s = e[De];
      if (x(o)) {
        const l = ko(o, i), u = l !== -1;
        if (r && !u)
          s(o.concat(i));
        else if (!r && u) {
          const h = [...o];
          h.splice(l, 1), s(h);
        }
      } else if (Pt(o)) {
        const l = new Set(o);
        r ? l.add(i) : l.delete(i), s(l);
      } else
        s(ms(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ji,
  beforeUpdate(e, t, n) {
    e[De] = dt(n), Ji(e, t, n);
  }
};
function Ji(e, { value: t, oldValue: n }, o) {
  e._modelValue = t;
  let i;
  if (x(t))
    i = ko(t, o.props.value) > -1;
  else if (Pt(t))
    i = t.has(o.props.value);
  else {
    if (t === n) return;
    i = vt(t, ms(e, !0));
  }
  e.checked !== i && (e.checked = i);
}
const xu = {
  created(e, { value: t }, n) {
    e.checked = vt(t, n.props.value), e[De] = dt(n), ze(e, "change", () => {
      e[De](It(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e[De] = dt(o), t !== n && (e.checked = vt(t, o.props.value));
  }
}, Su = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const i = Pt(t);
    ze(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => n ? $n(It(s)) : It(s)
      );
      e[De](
        e.multiple ? i ? new Set(r) : r : r[0]
      ), e._assigning = !0, wr(() => {
        e._assigning = !1;
      });
    }), e[De] = dt(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Yi(e, t);
  },
  beforeUpdate(e, t, n) {
    e[De] = dt(n);
  },
  updated(e, { value: t }) {
    e._assigning || Yi(e, t);
  }
};
function Yi(e, t) {
  const n = e.multiple, o = x(t);
  if (n && !o && !Pt(t)) {
    Be.NODE_ENV !== "production" && Ue(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let i = 0, r = e.options.length; i < r; i++) {
    const s = e.options[i], l = It(s);
    if (n)
      if (o) {
        const u = typeof l;
        u === "string" || u === "number" ? s.selected = t.some((h) => String(h) === String(l)) : s.selected = ko(t, l) > -1;
      } else
        s.selected = t.has(l);
    else if (vt(It(s), t)) {
      e.selectedIndex !== i && (e.selectedIndex = i);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function It(e) {
  return "_value" in e ? e._value : e.value;
}
function ms(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const Cu = {
  created(e, t, n) {
    Nn(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Nn(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, o) {
    Nn(e, t, n, o, "beforeUpdate");
  },
  updated(e, t, n, o) {
    Nn(e, t, n, o, "updated");
  }
};
function Tu(e, t) {
  switch (e) {
    case "SELECT":
      return Su;
    case "TEXTAREA":
      return Gi;
    default:
      switch (t) {
        case "checkbox":
          return Du;
        case "radio":
          return xu;
        default:
          return Gi;
      }
  }
}
function Nn(e, t, n, o, i) {
  const s = Tu(
    e.tagName,
    n.props && n.props.type
  )[i];
  s && s(e, t, n, o);
}
const $u = /* @__PURE__ */ Y({ patchProp: Ou }, lu);
let zi;
function Mu() {
  return zi || (zi = Sc($u));
}
const Au = (...e) => {
  const t = Mu().createApp(...e);
  Be.NODE_ENV !== "production" && (Pu(t), Ru(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = ju(o);
    if (!i) return;
    const r = t._component;
    !$(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Iu(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
};
function Iu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Pu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => $s(t) || Ms(t) || As(t),
    writable: !1
  });
}
function Ru(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ue(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ue(o), n;
      },
      set() {
        Ue(o);
      }
    });
  }
}
function ju(e) {
  if (z(e)) {
    const t = document.querySelector(e);
    return Be.NODE_ENV !== "production" && !t && Ue(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return Be.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ue(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var Fu = {};
function Hu() {
  iu();
}
Fu.NODE_ENV !== "production" && Hu();
const Po = {
  switchh: !1,
  select: "",
  input: ""
}, Lu = "https://raw.githubusercontent.com/adproqwq/LiteLoaderQQNT-Manifest-JsonSchema/main/manifest.schema.json", Uu = 4, ku = "extension", Bu = "liteloader-wrapper-template", Ku = "liteloader-wrapper-template", Wu = "LiteLoaderQQNT的插件模板", qu = "0.0.1", Gu = [
  {
    name: "Nyaruhodo",
    link: "https://github.com/nyaruhodoo"
  }
], Ju = [], Yu = [
  "win32",
  "linux",
  "darwin"
], zu = {
  renderer: "./out/renderer/index.js",
  main: "./out/main/index.js",
  preload: "./out/preload/index.js"
}, Zt = {
  $schema: Lu,
  manifest_version: Uu,
  type: ku,
  name: Bu,
  slug: Ku,
  description: Wu,
  version: qu,
  authors: Gu,
  dependencies: Ju,
  platform: Yu,
  injects: zu
};
class Qi {
  /**
   * 初始化插件配置
   */
  static async getConfig() {
    const t = await LiteLoader.api.config.get(Zt.slug, Po);
    return this.mergeConfig(t, Po);
  }
  /**
   * 更新插件配置
   */
  static async updateConfig(t) {
    await LiteLoader.api.config.set(Zt.slug, t), this.log("Config已更新", JSON.stringify(t, null, 2));
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
    console.log(`${Zt.slug}:`, ...t);
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
const Wn = (e, t) => hs(() => cl(t) ? {
  [e]: !0
} : {}), Qu = ["data-title"], Xu = ["data-title"], Zu = /* @__PURE__ */ jt({
  __name: "ConfigList",
  props: {
    title: {},
    collapsible: { type: Boolean },
    collapsibleTitle: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = Wn("is-disabled", () => e.disabled), n = Wn("is-collapsible", () => e.collapsible);
    return (o, i) => (Ve(), ft("setting-section", Vt({ "data-title": o.title }, Qe(t)), [
      wt("setting-panel", null, [
        wt("setting-list", Vt({
          "data-title": o.collapsibleTitle,
          "data-direction": "column"
        }, Qe(n)), [
          Hr(o.$slots, "default")
        ], 16, Xu)
      ])
    ], 16, Qu));
  }
}), ef = {
  key: 0,
  "data-type": "secondary"
}, bo = /* @__PURE__ */ jt({
  __name: "ConfigItem",
  props: {
    title: {},
    tip: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = Wn("is-disabled", () => e.disabled);
    return (n, o) => (Ve(), ft("setting-item", Vt({ "data-direction": "row" }, Qe(t)), [
      wt("div", null, [
        wt("setting-text", null, Mn(n.title), 1),
        n.tip ? (Ve(), ft("setting-text", ef, Mn(n.tip), 1)) : qc("", !0)
      ]),
      Hr(n.$slots, "default")
    ], 16));
  }
}), tf = /* @__PURE__ */ jt({
  __name: "NSwitch",
  props: {
    modelValue: { type: Boolean },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = ni(e, "modelValue"), n = Wn("is-active", t);
    return (o, i) => (Ve(), ft("setting-switch", Vt(Qe(n), {
      onClick: i[0] || (i[0] = (r) => t.value = !t.value)
    }), null, 16));
  }
}), nf = ["data-value"], of = /* @__PURE__ */ jt({
  __name: "NSelect",
  props: /* @__PURE__ */ kr({
    options: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = Ul("select"), n = ni(e, "modelValue"), o = (r) => {
      const {
        detail: { value: s }
      } = r;
      n.value = s;
    }, i = (r) => {
      const s = {};
      return (r.value ?? r.label) === n.value && (s["is-selected"] = !0), r.disabled && (s["is-disabled"] = !0), s;
    };
    return Qt(n, (r) => {
      t.value._title.value = r;
    }), (r, s) => (Ve(), ft("setting-select", {
      ref: "select",
      onSelected: o
    }, [
      (Ve(!0), ft(ge, null, tc(r.options, (l) => (Ve(), ft("setting-option", Vt({
        key: l.label,
        "data-value": l.value ?? l.label,
        ref_for: !0
      }, i(l)), Mn(l.label), 17, nf))), 128))
    ], 544));
  }
}), rf = { class: "border border-solid border-[var(--border\\_dark)] focus-within:border-[var(--brand\\_standard)] rounded-[4px] text-[12px] leading-[26px] px-[8px]" }, sf = /* @__PURE__ */ jt({
  __name: "NInput",
  props: /* @__PURE__ */ kr({
    type: {},
    placeholder: {},
    minLength: {},
    maxLength: {}
  }, {
    modelValue: {},
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = ni(e, "modelValue"), n = e;
    return (o, i) => (Ve(), ft("div", rf, [
      Fl(wt("input", Vt({
        "onUpdate:modelValue": i[0] || (i[0] = (r) => t.value = r),
        class: "text-center"
      }, n), null, 16), [
        [Cu, t.value]
      ])
    ]));
  }
}), lf = /* @__PURE__ */ jt({
  __name: "App",
  setup(e) {
    ((l, u) => {
      let h = document.getElementById("hbstu1o");
      h || (h = document.createElement("style"), h.id = "hbstu1o", document.head.appendChild(h), h.innerHTML = u);
    })("hbstu1o", "");
    const n = window[Zt.slug];
    let o = Qn(Po);
    const { input: i, select: r, switchh: s } = dl(o);
    return (async () => {
      const l = await Qi.getConfig();
      for (const u in l)
        o[u] = l[u];
    })(), Qt(o, (l) => {
      const u = JSON.parse(JSON.stringify(l));
      Qi.updateConfig(u), n.configUpdate(u), new BroadcastChannel(Zt.slug).postMessage(u);
    }), (l, u) => (Ve(), Bn(Zu, { "data-l-hbstu1o": "" }, {
      default: qt(() => [
        le(bo, {
          "data-l-hbstu1o": "",
          title: "测试1"
        }, {
          default: qt(() => [
            le(of, {
              "data-l-hbstu1o": "",
              modelValue: Qe(r),
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
        le(bo, {
          "data-l-hbstu1o": "",
          title: "测试2"
        }, {
          default: qt(() => [
            le(tf, {
              "data-l-hbstu1o": "",
              modelValue: Qe(s),
              "onUpdate:modelValue": u[1] || (u[1] = (h) => J(s) ? s.value = h : null)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        }),
        le(bo, {
          "data-l-hbstu1o": "",
          title: "测试3"
        }, {
          default: qt(() => [
            le(sf, {
              "data-l-hbstu1o": "",
              modelValue: Qe(i),
              "onUpdate:modelValue": u[2] || (u[2] = (h) => J(i) ? i.value = h : null)
            }, null, 8, ["modelValue"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), cf = "" + new URL("index.css", import.meta.url).href, uf = (e) => {
  const t = document.createElement("link");
  t.rel = "stylesheet", t.href = cf, document.head.append(t), Au(lf).mount(e);
};
export {
  uf as onSettingWindowCreated
};
