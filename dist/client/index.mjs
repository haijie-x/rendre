function Pc(e, n) {
  for (var t = 0; t < n.length; t++) {
    const r = n[t];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o && Object.defineProperty(e, l, o.get ? o : {
            enumerable: !0,
            get: () => r[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function is(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rt = {}, Nc = {
  get exports() {
    return Rt;
  },
  set exports(e) {
    Rt = e;
  }
}, tl = {}, W = {}, zc = {
  get exports() {
    return W;
  },
  set exports(e) {
    W = e;
  }
}, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zt = Symbol.for("react.element"), Lc = Symbol.for("react.portal"), Tc = Symbol.for("react.fragment"), Oc = Symbol.for("react.strict_mode"), Rc = Symbol.for("react.profiler"), Mc = Symbol.for("react.provider"), Dc = Symbol.for("react.context"), jc = Symbol.for("react.forward_ref"), Ic = Symbol.for("react.suspense"), Fc = Symbol.for("react.memo"), Uc = Symbol.for("react.lazy"), Hu = Symbol.iterator;
function $c(e) {
  return e === null || typeof e != "object" ? null : (e = Hu && e[Hu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ss = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, as = Object.assign, cs = {};
function ut(e, n, t) {
  this.props = e, this.context = n, this.refs = cs, this.updater = t || ss;
}
ut.prototype.isReactComponent = {};
ut.prototype.setState = function(e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, n, "setState");
};
ut.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fs() {
}
fs.prototype = ut.prototype;
function Yo(e, n, t) {
  this.props = e, this.context = n, this.refs = cs, this.updater = t || ss;
}
var Xo = Yo.prototype = new fs();
Xo.constructor = Yo;
as(Xo, ut.prototype);
Xo.isPureReactComponent = !0;
var Qu = Array.isArray, ds = Object.prototype.hasOwnProperty, Go = { current: null }, ps = { key: !0, ref: !0, __self: !0, __source: !0 };
function hs(e, n, t) {
  var r, l = {}, o = null, u = null;
  if (n != null)
    for (r in n.ref !== void 0 && (u = n.ref), n.key !== void 0 && (o = "" + n.key), n)
      ds.call(n, r) && !ps.hasOwnProperty(r) && (l[r] = n[r]);
  var i = arguments.length - 2;
  if (i === 1)
    l.children = t;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++)
      s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in i = e.defaultProps, i)
      l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: Zt, type: e, key: o, ref: u, props: l, _owner: Go.current };
}
function Vc(e, n) {
  return { $$typeof: Zt, type: e.type, key: n, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Zt;
}
function Ac(e) {
  var n = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(t) {
    return n[t];
  });
}
var Ku = /\/+/g;
function kl(e, n) {
  return typeof e == "object" && e !== null && e.key != null ? Ac("" + e.key) : n.toString(36);
}
function Sr(e, n, t, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var u = !1;
  if (e === null)
    u = !0;
  else
    switch (o) {
      case "string":
      case "number":
        u = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Zt:
          case Lc:
            u = !0;
        }
    }
  if (u)
    return u = e, l = l(u), e = r === "" ? "." + kl(u, 0) : r, Qu(l) ? (t = "", e != null && (t = e.replace(Ku, "$&/") + "/"), Sr(l, n, t, "", function(c) {
      return c;
    })) : l != null && (Zo(l) && (l = Vc(l, t + (!l.key || u && u.key === l.key ? "" : ("" + l.key).replace(Ku, "$&/") + "/") + e)), n.push(l)), 1;
  if (u = 0, r = r === "" ? "." : r + ":", Qu(e))
    for (var i = 0; i < e.length; i++) {
      o = e[i];
      var s = r + kl(o, i);
      u += Sr(o, n, t, s, l);
    }
  else if (s = $c(e), typeof s == "function")
    for (e = s.call(e), i = 0; !(o = e.next()).done; )
      o = o.value, s = r + kl(o, i++), u += Sr(o, n, t, s, l);
  else if (o === "object")
    throw n = String(e), Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
  return u;
}
function rr(e, n, t) {
  if (e == null)
    return e;
  var r = [], l = 0;
  return Sr(e, r, "", "", function(o) {
    return n.call(t, o, l++);
  }), r;
}
function Wc(e) {
  if (e._status === -1) {
    var n = e._result;
    n = n(), n.then(function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = t);
    }, function(t) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = t);
    }), e._status === -1 && (e._status = 0, e._result = n);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var ie = { current: null }, kr = { transition: null }, Bc = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: kr, ReactCurrentOwner: Go };
L.Children = { map: rr, forEach: function(e, n, t) {
  rr(e, function() {
    n.apply(this, arguments);
  }, t);
}, count: function(e) {
  var n = 0;
  return rr(e, function() {
    n++;
  }), n;
}, toArray: function(e) {
  return rr(e, function(n) {
    return n;
  }) || [];
}, only: function(e) {
  if (!Zo(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = ut;
L.Fragment = Tc;
L.Profiler = Rc;
L.PureComponent = Yo;
L.StrictMode = Oc;
L.Suspense = Ic;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bc;
L.cloneElement = function(e, n, t) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = as({}, e.props), l = e.key, o = e.ref, u = e._owner;
  if (n != null) {
    if (n.ref !== void 0 && (o = n.ref, u = Go.current), n.key !== void 0 && (l = "" + n.key), e.type && e.type.defaultProps)
      var i = e.type.defaultProps;
    for (s in n)
      ds.call(n, s) && !ps.hasOwnProperty(s) && (r[s] = n[s] === void 0 && i !== void 0 ? i[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = t;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++)
      i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: Zt, type: e.type, key: l, ref: o, props: r, _owner: u };
};
L.createContext = function(e) {
  return e = { $$typeof: Dc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Mc, _context: e }, e.Consumer = e;
};
L.createElement = hs;
L.createFactory = function(e) {
  var n = hs.bind(null, e);
  return n.type = e, n;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: jc, render: e };
};
L.isValidElement = Zo;
L.lazy = function(e) {
  return { $$typeof: Uc, _payload: { _status: -1, _result: e }, _init: Wc };
};
L.memo = function(e, n) {
  return { $$typeof: Fc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function(e) {
  var n = kr.transition;
  kr.transition = {};
  try {
    e();
  } finally {
    kr.transition = n;
  }
};
L.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function(e, n) {
  return ie.current.useCallback(e, n);
};
L.useContext = function(e) {
  return ie.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return ie.current.useDeferredValue(e);
};
L.useEffect = function(e, n) {
  return ie.current.useEffect(e, n);
};
L.useId = function() {
  return ie.current.useId();
};
L.useImperativeHandle = function(e, n, t) {
  return ie.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function(e, n) {
  return ie.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function(e, n) {
  return ie.current.useLayoutEffect(e, n);
};
L.useMemo = function(e, n) {
  return ie.current.useMemo(e, n);
};
L.useReducer = function(e, n, t) {
  return ie.current.useReducer(e, n, t);
};
L.useRef = function(e) {
  return ie.current.useRef(e);
};
L.useState = function(e) {
  return ie.current.useState(e);
};
L.useSyncExternalStore = function(e, n, t) {
  return ie.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function() {
  return ie.current.useTransition();
};
L.version = "18.2.0";
(function(e) {
  e.exports = L;
})(zc);
const Hc = /* @__PURE__ */ is(W), Gl = /* @__PURE__ */ Pc({
  __proto__: null,
  default: Hc
}, [W]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc = W, Kc = Symbol.for("react.element"), Yc = Symbol.for("react.fragment"), Xc = Object.prototype.hasOwnProperty, Gc = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function ms(e, n, t) {
  var r, l = {}, o = null, u = null;
  t !== void 0 && (o = "" + t), n.key !== void 0 && (o = "" + n.key), n.ref !== void 0 && (u = n.ref);
  for (r in n)
    Xc.call(n, r) && !Zc.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in n = e.defaultProps, n)
      l[r] === void 0 && (l[r] = n[r]);
  return { $$typeof: Kc, type: e, key: o, ref: u, props: l, _owner: Gc.current };
}
tl.Fragment = Yc;
tl.jsx = ms;
tl.jsxs = ms;
(function(e) {
  e.exports = tl;
})(Nc);
const vs = Rt.Fragment, Fe = Rt.jsx, Jc = Rt.jsxs;
var Zl = {}, qc = {
  get exports() {
    return Zl;
  },
  set exports(e) {
    Zl = e;
  }
}, ge = {}, Jl = {}, bc = {
  get exports() {
    return Jl;
  },
  set exports(e) {
    Jl = e;
  }
}, ys = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function n(C, N) {
    var z = C.length;
    C.push(N);
    e:
      for (; 0 < z; ) {
        var H = z - 1 >>> 1, G = C[H];
        if (0 < l(G, N))
          C[H] = N, C[z] = G, z = H;
        else
          break e;
      }
  }
  function t(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0)
      return null;
    var N = C[0], z = C.pop();
    if (z !== N) {
      C[0] = z;
      e:
        for (var H = 0, G = C.length, nr = G >>> 1; H < nr; ) {
          var yn = 2 * (H + 1) - 1, Sl = C[yn], gn = yn + 1, tr = C[gn];
          if (0 > l(Sl, z))
            gn < G && 0 > l(tr, Sl) ? (C[H] = tr, C[gn] = z, H = gn) : (C[H] = Sl, C[yn] = z, H = yn);
          else if (gn < G && 0 > l(tr, z))
            C[H] = tr, C[gn] = z, H = gn;
          else
            break e;
        }
    }
    return N;
  }
  function l(C, N) {
    var z = C.sortIndex - N.sortIndex;
    return z !== 0 ? z : C.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var u = Date, i = u.now();
    e.unstable_now = function() {
      return u.now() - i;
    };
  }
  var s = [], c = [], m = 1, h = null, p = 3, g = !1, w = !1, S = !1, I = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var N = t(c); N !== null; ) {
      if (N.callback === null)
        r(c);
      else if (N.startTime <= C)
        r(c), N.sortIndex = N.expirationTime, n(s, N);
      else
        break;
      N = t(c);
    }
  }
  function v(C) {
    if (S = !1, d(C), !w)
      if (t(s) !== null)
        w = !0, gl(E);
      else {
        var N = t(c);
        N !== null && wl(v, N.startTime - C);
      }
  }
  function E(C, N) {
    w = !1, S && (S = !1, f(P), P = -1), g = !0;
    var z = p;
    try {
      for (d(N), h = t(s); h !== null && (!(h.expirationTime > N) || C && !Pe()); ) {
        var H = h.callback;
        if (typeof H == "function") {
          h.callback = null, p = h.priorityLevel;
          var G = H(h.expirationTime <= N);
          N = e.unstable_now(), typeof G == "function" ? h.callback = G : h === t(s) && r(s), d(N);
        } else
          r(s);
        h = t(s);
      }
      if (h !== null)
        var nr = !0;
      else {
        var yn = t(c);
        yn !== null && wl(v, yn.startTime - N), nr = !1;
      }
      return nr;
    } finally {
      h = null, p = z, g = !1;
    }
  }
  var x = !1, _ = null, P = -1, B = 5, T = -1;
  function Pe() {
    return !(e.unstable_now() - T < B);
  }
  function at() {
    if (_ !== null) {
      var C = e.unstable_now();
      T = C;
      var N = !0;
      try {
        N = _(!0, C);
      } finally {
        N ? ct() : (x = !1, _ = null);
      }
    } else
      x = !1;
  }
  var ct;
  if (typeof a == "function")
    ct = function() {
      a(at);
    };
  else if (typeof MessageChannel < "u") {
    var Bu = new MessageChannel(), _c = Bu.port2;
    Bu.port1.onmessage = at, ct = function() {
      _c.postMessage(null);
    };
  } else
    ct = function() {
      I(at, 0);
    };
  function gl(C) {
    _ = C, x || (x = !0, ct());
  }
  function wl(C, N) {
    P = I(function() {
      C(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    w || g || (w = !0, gl(E));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return t(s);
  }, e.unstable_next = function(C) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var z = p;
    p = N;
    try {
      return C();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, N) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var z = p;
    p = C;
    try {
      return N();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(C, N, z) {
    var H = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? H + z : H) : z = H, C) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = z + G, C = { id: m++, callback: N, priorityLevel: C, startTime: z, expirationTime: G, sortIndex: -1 }, z > H ? (C.sortIndex = z, n(c, C), t(s) === null && C === t(c) && (S ? (f(P), P = -1) : S = !0, wl(v, z - H))) : (C.sortIndex = G, n(s, C), w || g || (w = !0, gl(E))), C;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(C) {
    var N = p;
    return function() {
      var z = p;
      p = N;
      try {
        return C.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(ys);
(function(e) {
  e.exports = ys;
})(bc);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs = W, ye = Jl;
function y(e) {
  for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ws = /* @__PURE__ */ new Set(), Mt = {};
function Rn(e, n) {
  bn(e, n), bn(e + "Capture", n);
}
function bn(e, n) {
  for (Mt[e] = n, e = 0; e < n.length; e++)
    ws.add(n[e]);
}
var Qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ql = Object.prototype.hasOwnProperty, ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Yu = {}, Xu = {};
function nf(e) {
  return ql.call(Xu, e) ? !0 : ql.call(Yu, e) ? !1 : ef.test(e) ? Xu[e] = !0 : (Yu[e] = !0, !1);
}
function tf(e, n, t, r) {
  if (t !== null && t.type === 0)
    return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function rf(e, n, t, r) {
  if (n === null || typeof n > "u" || tf(e, n, t, r))
    return !0;
  if (r)
    return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function se(e, n, t, r, l, o, u) {
  this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = u;
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ee[e] = new se(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Jo = /[\-:]([a-z])/g;
function qo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var n = e.replace(
    Jo,
    qo
  );
  ee[n] = new se(n, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var n = e.replace(Jo, qo);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var n = e.replace(Jo, qo);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bo(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (rf(n, t, l, r) && (t = null), r || l === null ? nf(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Ge = gs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lr = Symbol.for("react.element"), jn = Symbol.for("react.portal"), In = Symbol.for("react.fragment"), eu = Symbol.for("react.strict_mode"), bl = Symbol.for("react.profiler"), Ss = Symbol.for("react.provider"), ks = Symbol.for("react.context"), nu = Symbol.for("react.forward_ref"), eo = Symbol.for("react.suspense"), no = Symbol.for("react.suspense_list"), tu = Symbol.for("react.memo"), Je = Symbol.for("react.lazy"), Es = Symbol.for("react.offscreen"), Gu = Symbol.iterator;
function ft(e) {
  return e === null || typeof e != "object" ? null : (e = Gu && e[Gu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, El;
function wt(e) {
  if (El === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      El = n && n[1] || "";
    }
  return `
` + El + e;
}
var Cl = !1;
function xl(e, n) {
  if (!e || Cl)
    return "";
  Cl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (c) {
          r = c;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; )
        i--;
      for (; 1 <= u && 0 <= i; u--, i--)
        if (l[u] !== o[i]) {
          if (u !== 1 || i !== 1)
            do
              if (u--, i--, 0 > i || l[u] !== o[i]) {
                var s = `
` + l[u].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= u && 0 <= i);
          break;
        }
    }
  } finally {
    Cl = !1, Error.prepareStackTrace = t;
  }
  return (e = e ? e.displayName || e.name : "") ? wt(e) : "";
}
function lf(e) {
  switch (e.tag) {
    case 5:
      return wt(e.type);
    case 16:
      return wt("Lazy");
    case 13:
      return wt("Suspense");
    case 19:
      return wt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = xl(e.type, !1), e;
    case 11:
      return e = xl(e.type.render, !1), e;
    case 1:
      return e = xl(e.type, !0), e;
    default:
      return "";
  }
}
function to(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case In:
      return "Fragment";
    case jn:
      return "Portal";
    case bl:
      return "Profiler";
    case eu:
      return "StrictMode";
    case eo:
      return "Suspense";
    case no:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ks:
        return (e.displayName || "Context") + ".Consumer";
      case Ss:
        return (e._context.displayName || "Context") + ".Provider";
      case nu:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case tu:
        return n = e.displayName || null, n !== null ? n : to(e.type) || "Memo";
      case Je:
        n = e._payload, e = e._init;
        try {
          return to(e(n));
        } catch {
        }
    }
  return null;
}
function of(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return to(n);
    case 8:
      return n === eu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
  }
  return null;
}
function dn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Cs(e) {
  var n = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
}
function uf(e) {
  var n = Cs(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
  if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
    var l = t.get, o = t.set;
    return Object.defineProperty(e, n, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(u) {
      r = "" + u, o.call(this, u);
    } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(u) {
      r = "" + u;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[n];
    } };
  }
}
function or(e) {
  e._valueTracker || (e._valueTracker = uf(e));
}
function xs(e) {
  if (!e)
    return !1;
  var n = e._valueTracker;
  if (!n)
    return !0;
  var t = n.getValue(), r = "";
  return e && (r = Cs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
}
function Rr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ro(e, n) {
  var t = n.checked;
  return V({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
}
function Zu(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
  t = dn(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
}
function _s(e, n) {
  n = n.checked, n != null && bo(e, "checked", n, !1);
}
function lo(e, n) {
  _s(e, n);
  var t = dn(n.value), r = n.type;
  if (t != null)
    r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value") ? oo(e, n.type, t) : n.hasOwnProperty("defaultValue") && oo(e, n.type, dn(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
}
function Ju(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
      return;
    n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
  }
  t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
}
function oo(e, n, t) {
  (n !== "number" || Rr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var St = Array.isArray;
function Yn(e, n, t, r) {
  if (e = e.options, n) {
    n = {};
    for (var l = 0; l < t.length; l++)
      n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + dn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function uo(e, n) {
  if (n.dangerouslySetInnerHTML != null)
    throw Error(y(91));
  return V({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function qu(e, n) {
  var t = n.value;
  if (t == null) {
    if (t = n.children, n = n.defaultValue, t != null) {
      if (n != null)
        throw Error(y(92));
      if (St(t)) {
        if (1 < t.length)
          throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), t = n;
  }
  e._wrapperState = { initialValue: dn(t) };
}
function Ps(e, n) {
  var t = dn(n.value), r = dn(n.defaultValue);
  t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
}
function bu(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function Ns(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function io(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Ns(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var ur, zs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(n, t, r, l);
    });
  } : e;
}(function(e, n) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = n;
  else {
    for (ur = ur || document.createElement("div"), ur.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ur.firstChild; e.firstChild; )
      e.removeChild(e.firstChild);
    for (; n.firstChild; )
      e.appendChild(n.firstChild);
  }
});
function Dt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var Ct = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, sf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ct).forEach(function(e) {
  sf.forEach(function(n) {
    n = n + e.charAt(0).toUpperCase() + e.substring(1), Ct[n] = Ct[e];
  });
});
function Ls(e, n, t) {
  return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Ct.hasOwnProperty(e) && Ct[e] ? ("" + n).trim() : n + "px";
}
function Ts(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = Ls(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
}
var af = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function so(e, n) {
  if (n) {
    if (af[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null)
        throw Error(y(60));
      if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object")
      throw Error(y(62));
  }
}
function ao(e, n) {
  if (e.indexOf("-") === -1)
    return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var co = null;
function ru(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var fo = null, Xn = null, Gn = null;
function ei(e) {
  if (e = bt(e)) {
    if (typeof fo != "function")
      throw Error(y(280));
    var n = e.stateNode;
    n && (n = il(n), fo(e.stateNode, e.type, n));
  }
}
function Os(e) {
  Xn ? Gn ? Gn.push(e) : Gn = [e] : Xn = e;
}
function Rs() {
  if (Xn) {
    var e = Xn, n = Gn;
    if (Gn = Xn = null, ei(e), n)
      for (e = 0; e < n.length; e++)
        ei(n[e]);
  }
}
function Ms(e, n) {
  return e(n);
}
function Ds() {
}
var _l = !1;
function js(e, n, t) {
  if (_l)
    return e(n, t);
  _l = !0;
  try {
    return Ms(e, n, t);
  } finally {
    _l = !1, (Xn !== null || Gn !== null) && (Ds(), Rs());
  }
}
function jt(e, n) {
  var t = e.stateNode;
  if (t === null)
    return null;
  var r = il(t);
  if (r === null)
    return null;
  t = r[n];
  e:
    switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
  if (e)
    return null;
  if (t && typeof t != "function")
    throw Error(y(231, n, typeof t));
  return t;
}
var po = !1;
if (Qe)
  try {
    var dt = {};
    Object.defineProperty(dt, "passive", { get: function() {
      po = !0;
    } }), window.addEventListener("test", dt, dt), window.removeEventListener("test", dt, dt);
  } catch {
    po = !1;
  }
function cf(e, n, t, r, l, o, u, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, c);
  } catch (m) {
    this.onError(m);
  }
}
var xt = !1, Mr = null, Dr = !1, ho = null, ff = { onError: function(e) {
  xt = !0, Mr = e;
} };
function df(e, n, t, r, l, o, u, i, s) {
  xt = !1, Mr = null, cf.apply(ff, arguments);
}
function pf(e, n, t, r, l, o, u, i, s) {
  if (df.apply(this, arguments), xt) {
    if (xt) {
      var c = Mr;
      xt = !1, Mr = null;
    } else
      throw Error(y(198));
    Dr || (Dr = !0, ho = c);
  }
}
function Mn(e) {
  var n = e, t = e;
  if (e.alternate)
    for (; n.return; )
      n = n.return;
  else {
    e = n;
    do
      n = e, n.flags & 4098 && (t = n.return), e = n.return;
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function Is(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
      return n.dehydrated;
  }
  return null;
}
function ni(e) {
  if (Mn(e) !== e)
    throw Error(y(188));
}
function hf(e) {
  var n = e.alternate;
  if (!n) {
    if (n = Mn(e), n === null)
      throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null)
      break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === t)
          return ni(l), e;
        if (o === r)
          return ni(l), n;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return)
      t = l, r = o;
    else {
      for (var u = !1, i = l.child; i; ) {
        if (i === t) {
          u = !0, t = l, r = o;
          break;
        }
        if (i === r) {
          u = !0, r = l, t = o;
          break;
        }
        i = i.sibling;
      }
      if (!u) {
        for (i = o.child; i; ) {
          if (i === t) {
            u = !0, t = o, r = l;
            break;
          }
          if (i === r) {
            u = !0, r = o, t = l;
            break;
          }
          i = i.sibling;
        }
        if (!u)
          throw Error(y(189));
      }
    }
    if (t.alternate !== r)
      throw Error(y(190));
  }
  if (t.tag !== 3)
    throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Fs(e) {
  return e = hf(e), e !== null ? Us(e) : null;
}
function Us(e) {
  if (e.tag === 5 || e.tag === 6)
    return e;
  for (e = e.child; e !== null; ) {
    var n = Us(e);
    if (n !== null)
      return n;
    e = e.sibling;
  }
  return null;
}
var $s = ye.unstable_scheduleCallback, ti = ye.unstable_cancelCallback, mf = ye.unstable_shouldYield, vf = ye.unstable_requestPaint, Q = ye.unstable_now, yf = ye.unstable_getCurrentPriorityLevel, lu = ye.unstable_ImmediatePriority, Vs = ye.unstable_UserBlockingPriority, jr = ye.unstable_NormalPriority, gf = ye.unstable_LowPriority, As = ye.unstable_IdlePriority, rl = null, Ue = null;
function wf(e) {
  if (Ue && typeof Ue.onCommitFiberRoot == "function")
    try {
      Ue.onCommitFiberRoot(rl, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
}
var Oe = Math.clz32 ? Math.clz32 : Ef, Sf = Math.log, kf = Math.LN2;
function Ef(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Sf(e) / kf | 0) | 0;
}
var ir = 64, sr = 4194304;
function kt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Ir(e, n) {
  var t = e.pendingLanes;
  if (t === 0)
    return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = t & 268435455;
  if (u !== 0) {
    var i = u & ~l;
    i !== 0 ? r = kt(i) : (o &= u, o !== 0 && (r = kt(o)));
  } else
    u = t & ~l, u !== 0 ? r = kt(u) : o !== 0 && (r = kt(o));
  if (r === 0)
    return 0;
  if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0))
    return n;
  if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
    for (e = e.entanglements, n &= r; 0 < n; )
      t = 31 - Oe(n), l = 1 << t, r |= e[t], n &= ~l;
  return r;
}
function Cf(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function xf(e, n) {
  for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var u = 31 - Oe(o), i = 1 << u, s = l[u];
    s === -1 ? (!(i & t) || i & r) && (l[u] = Cf(i, n)) : s <= n && (e.expiredLanes |= i), o &= ~i;
  }
}
function mo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ws() {
  var e = ir;
  return ir <<= 1, !(ir & 4194240) && (ir = 64), e;
}
function Pl(e) {
  for (var n = [], t = 0; 31 > t; t++)
    n.push(e);
  return n;
}
function Jt(e, n, t) {
  e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - Oe(n), e[n] = t;
}
function _f(e, n) {
  var t = e.pendingLanes & ~n;
  e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Oe(t), o = 1 << l;
    n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
  }
}
function ou(e, n) {
  var t = e.entangledLanes |= n;
  for (e = e.entanglements; t; ) {
    var r = 31 - Oe(t), l = 1 << r;
    l & n | e[r] & n && (e[r] |= n), t &= ~l;
  }
}
var R = 0;
function Bs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Hs, uu, Qs, Ks, Ys, vo = !1, ar = [], rn = null, ln = null, on = null, It = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), be = [], Pf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ri(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      rn = null;
      break;
    case "dragenter":
    case "dragleave":
      ln = null;
      break;
    case "mouseover":
    case "mouseout":
      on = null;
      break;
    case "pointerover":
    case "pointerout":
      It.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ft.delete(n.pointerId);
  }
}
function pt(e, n, t, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = bt(n), n !== null && uu(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
}
function Nf(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return rn = pt(rn, e, n, t, r, l), !0;
    case "dragenter":
      return ln = pt(ln, e, n, t, r, l), !0;
    case "mouseover":
      return on = pt(on, e, n, t, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return It.set(o, pt(It.get(o) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, Ft.set(o, pt(Ft.get(o) || null, e, n, t, r, l)), !0;
  }
  return !1;
}
function Xs(e) {
  var n = kn(e.target);
  if (n !== null) {
    var t = Mn(n);
    if (t !== null) {
      if (n = t.tag, n === 13) {
        if (n = Is(t), n !== null) {
          e.blockedOn = n, Ys(e.priority, function() {
            Qs(t);
          });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Er(e) {
  if (e.blockedOn !== null)
    return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = yo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      co = r, t.target.dispatchEvent(r), co = null;
    } else
      return n = bt(t), n !== null && uu(n), e.blockedOn = t, !1;
    n.shift();
  }
  return !0;
}
function li(e, n, t) {
  Er(e) && t.delete(n);
}
function zf() {
  vo = !1, rn !== null && Er(rn) && (rn = null), ln !== null && Er(ln) && (ln = null), on !== null && Er(on) && (on = null), It.forEach(li), Ft.forEach(li);
}
function ht(e, n) {
  e.blockedOn === n && (e.blockedOn = null, vo || (vo = !0, ye.unstable_scheduleCallback(ye.unstable_NormalPriority, zf)));
}
function Ut(e) {
  function n(l) {
    return ht(l, e);
  }
  if (0 < ar.length) {
    ht(ar[0], e);
    for (var t = 1; t < ar.length; t++) {
      var r = ar[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (rn !== null && ht(rn, e), ln !== null && ht(ln, e), on !== null && ht(on, e), It.forEach(n), Ft.forEach(n), t = 0; t < be.length; t++)
    r = be[t], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && (t = be[0], t.blockedOn === null); )
    Xs(t), t.blockedOn === null && be.shift();
}
var Zn = Ge.ReactCurrentBatchConfig, Fr = !0;
function Lf(e, n, t, r) {
  var l = R, o = Zn.transition;
  Zn.transition = null;
  try {
    R = 1, iu(e, n, t, r);
  } finally {
    R = l, Zn.transition = o;
  }
}
function Tf(e, n, t, r) {
  var l = R, o = Zn.transition;
  Zn.transition = null;
  try {
    R = 4, iu(e, n, t, r);
  } finally {
    R = l, Zn.transition = o;
  }
}
function iu(e, n, t, r) {
  if (Fr) {
    var l = yo(e, n, t, r);
    if (l === null)
      Il(e, n, r, Ur, t), ri(e, r);
    else if (Nf(l, e, n, t, r))
      r.stopPropagation();
    else if (ri(e, r), n & 4 && -1 < Pf.indexOf(e)) {
      for (; l !== null; ) {
        var o = bt(l);
        if (o !== null && Hs(o), o = yo(e, n, t, r), o === null && Il(e, n, r, Ur, t), o === l)
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else
      Il(e, n, r, null, t);
  }
}
var Ur = null;
function yo(e, n, t, r) {
  if (Ur = null, e = ru(r), e = kn(e), e !== null)
    if (n = Mn(e), n === null)
      e = null;
    else if (t = n.tag, t === 13) {
      if (e = Is(n), e !== null)
        return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else
      n !== e && (e = null);
  return Ur = e, null;
}
function Gs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (yf()) {
        case lu:
          return 1;
        case Vs:
          return 4;
        case jr:
        case gf:
          return 16;
        case As:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nn = null, su = null, Cr = null;
function Zs() {
  if (Cr)
    return Cr;
  var e, n = su, t = n.length, r, l = "value" in nn ? nn.value : nn.textContent, o = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++)
    ;
  var u = t - e;
  for (r = 1; r <= u && n[t - r] === l[o - r]; r++)
    ;
  return Cr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function xr(e) {
  var n = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function cr() {
  return !0;
}
function oi() {
  return !1;
}
function we(e) {
  function n(t, r, l, o, u) {
    this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
    for (var i in e)
      e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? cr : oi, this.isPropagationStopped = oi, this;
  }
  return V(n.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var t = this.nativeEvent;
    t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = cr);
  }, stopPropagation: function() {
    var t = this.nativeEvent;
    t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = cr);
  }, persist: function() {
  }, isPersistent: cr }), n;
}
var it = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, au = we(it), qt = V({}, it, { view: 0, detail: 0 }), Of = we(qt), Nl, zl, mt, ll = V({}, qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: cu, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== mt && (mt && e.type === "mousemove" ? (Nl = e.screenX - mt.screenX, zl = e.screenY - mt.screenY) : zl = Nl = 0, mt = e), Nl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : zl;
} }), ui = we(ll), Rf = V({}, ll, { dataTransfer: 0 }), Mf = we(Rf), Df = V({}, qt, { relatedTarget: 0 }), Ll = we(Df), jf = V({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), If = we(jf), Ff = V({}, it, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Uf = we(Ff), $f = V({}, it, { data: 0 }), ii = we($f), Vf = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Af = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Wf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Bf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = Wf[e]) ? !!n[e] : !1;
}
function cu() {
  return Bf;
}
var Hf = V({}, qt, { key: function(e) {
  if (e.key) {
    var n = Vf[e.key] || e.key;
    if (n !== "Unidentified")
      return n;
  }
  return e.type === "keypress" ? (e = xr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Af[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: cu, charCode: function(e) {
  return e.type === "keypress" ? xr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? xr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Qf = we(Hf), Kf = V({}, ll, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), si = we(Kf), Yf = V({}, qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: cu }), Xf = we(Yf), Gf = V({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zf = we(Gf), Jf = V({}, ll, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), qf = we(Jf), bf = [9, 13, 27, 32], fu = Qe && "CompositionEvent" in window, _t = null;
Qe && "documentMode" in document && (_t = document.documentMode);
var ed = Qe && "TextEvent" in window && !_t, Js = Qe && (!fu || _t && 8 < _t && 11 >= _t), ai = String.fromCharCode(32), ci = !1;
function qs(e, n) {
  switch (e) {
    case "keyup":
      return bf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function bs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Fn = !1;
function nd(e, n) {
  switch (e) {
    case "compositionend":
      return bs(n);
    case "keypress":
      return n.which !== 32 ? null : (ci = !0, ai);
    case "textInput":
      return e = n.data, e === ai && ci ? null : e;
    default:
      return null;
  }
}
function td(e, n) {
  if (Fn)
    return e === "compositionend" || !fu && qs(e, n) ? (e = Zs(), Cr = su = nn = null, Fn = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
        if (n.char && 1 < n.char.length)
          return n.char;
        if (n.which)
          return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Js && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var rd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function fi(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!rd[e.type] : n === "textarea";
}
function ea(e, n, t, r) {
  Os(r), n = $r(n, "onChange"), 0 < n.length && (t = new au("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
}
var Pt = null, $t = null;
function ld(e) {
  fa(e, 0);
}
function ol(e) {
  var n = Vn(e);
  if (xs(n))
    return e;
}
function od(e, n) {
  if (e === "change")
    return n;
}
var na = !1;
if (Qe) {
  var Tl;
  if (Qe) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var di = document.createElement("div");
      di.setAttribute("oninput", "return;"), Ol = typeof di.oninput == "function";
    }
    Tl = Ol;
  } else
    Tl = !1;
  na = Tl && (!document.documentMode || 9 < document.documentMode);
}
function pi() {
  Pt && (Pt.detachEvent("onpropertychange", ta), $t = Pt = null);
}
function ta(e) {
  if (e.propertyName === "value" && ol($t)) {
    var n = [];
    ea(n, $t, e, ru(e)), js(ld, n);
  }
}
function ud(e, n, t) {
  e === "focusin" ? (pi(), Pt = n, $t = t, Pt.attachEvent("onpropertychange", ta)) : e === "focusout" && pi();
}
function id(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ol($t);
}
function sd(e, n) {
  if (e === "click")
    return ol(n);
}
function ad(e, n) {
  if (e === "input" || e === "change")
    return ol(n);
}
function cd(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
var Me = typeof Object.is == "function" ? Object.is : cd;
function Vt(e, n) {
  if (Me(e, n))
    return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e), r = Object.keys(n);
  if (t.length !== r.length)
    return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!ql.call(n, l) || !Me(e[l], n[l]))
      return !1;
  }
  return !0;
}
function hi(e) {
  for (; e && e.firstChild; )
    e = e.firstChild;
  return e;
}
function mi(e, n) {
  var t = hi(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (r = e + t.textContent.length, e <= n && r >= n)
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = hi(t);
  }
}
function ra(e, n) {
  return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ra(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
}
function la() {
  for (var e = window, n = Rr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t)
      e = n.contentWindow;
    else
      break;
    n = Rr(e.document);
  }
  return n;
}
function du(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
}
function fd(e) {
  var n = la(), t = e.focusedElem, r = e.selectionRange;
  if (n !== t && t && t.ownerDocument && ra(t.ownerDocument.documentElement, t)) {
    if (r !== null && du(t)) {
      if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
        t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
      else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = t.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = mi(t, o);
        var u = mi(
          t,
          r
        );
        l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(u.node, u.offset)) : (n.setEnd(u.node, u.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; e = e.parentNode; )
      e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var dd = Qe && "documentMode" in document && 11 >= document.documentMode, Un = null, go = null, Nt = null, wo = !1;
function vi(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  wo || Un == null || Un !== Rr(r) || (r = Un, "selectionStart" in r && du(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Nt && Vt(Nt, r) || (Nt = r, r = $r(go, "onSelect"), 0 < r.length && (n = new au("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = Un)));
}
function fr(e, n) {
  var t = {};
  return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
}
var $n = { animationend: fr("Animation", "AnimationEnd"), animationiteration: fr("Animation", "AnimationIteration"), animationstart: fr("Animation", "AnimationStart"), transitionend: fr("Transition", "TransitionEnd") }, Rl = {}, oa = {};
Qe && (oa = document.createElement("div").style, "AnimationEvent" in window || (delete $n.animationend.animation, delete $n.animationiteration.animation, delete $n.animationstart.animation), "TransitionEvent" in window || delete $n.transitionend.transition);
function ul(e) {
  if (Rl[e])
    return Rl[e];
  if (!$n[e])
    return e;
  var n = $n[e], t;
  for (t in n)
    if (n.hasOwnProperty(t) && t in oa)
      return Rl[e] = n[t];
  return e;
}
var ua = ul("animationend"), ia = ul("animationiteration"), sa = ul("animationstart"), aa = ul("transitionend"), ca = /* @__PURE__ */ new Map(), yi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function hn(e, n) {
  ca.set(e, n), Rn(n, [e]);
}
for (var Ml = 0; Ml < yi.length; Ml++) {
  var Dl = yi[Ml], pd = Dl.toLowerCase(), hd = Dl[0].toUpperCase() + Dl.slice(1);
  hn(pd, "on" + hd);
}
hn(ua, "onAnimationEnd");
hn(ia, "onAnimationIteration");
hn(sa, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(aa, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Rn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Rn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Rn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Rn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Rn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Et = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), md = new Set("cancel close invalid load scroll toggle".split(" ").concat(Et));
function gi(e, n, t) {
  var r = e.type || "unknown-event";
  e.currentTarget = t, pf(r, n, void 0, e), e.currentTarget = null;
}
function fa(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (n)
        for (var u = r.length - 1; 0 <= u; u--) {
          var i = r[u], s = i.instance, c = i.currentTarget;
          if (i = i.listener, s !== o && l.isPropagationStopped())
            break e;
          gi(l, i, c), o = s;
        }
      else
        for (u = 0; u < r.length; u++) {
          if (i = r[u], s = i.instance, c = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped())
            break e;
          gi(l, i, c), o = s;
        }
    }
  }
  if (Dr)
    throw e = ho, Dr = !1, ho = null, e;
}
function D(e, n) {
  var t = n[xo];
  t === void 0 && (t = n[xo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  t.has(r) || (da(n, e, 2, !1), t.add(r));
}
function jl(e, n, t) {
  var r = 0;
  n && (r |= 4), da(t, e, r, n);
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);
function At(e) {
  if (!e[dr]) {
    e[dr] = !0, ws.forEach(function(t) {
      t !== "selectionchange" && (md.has(t) || jl(t, !1, e), jl(t, !0, e));
    });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[dr] || (n[dr] = !0, jl("selectionchange", !1, n));
  }
}
function da(e, n, t, r) {
  switch (Gs(n)) {
    case 1:
      var l = Lf;
      break;
    case 4:
      l = Tf;
      break;
    default:
      l = iu;
  }
  t = l.bind(null, n, t, e), l = void 0, !po || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
}
function Il(e, n, t, r, l) {
  var o = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e:
      for (; ; ) {
        if (r === null)
          return;
        var u = r.tag;
        if (u === 3 || u === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l || i.nodeType === 8 && i.parentNode === l)
            break;
          if (u === 4)
            for (u = r.return; u !== null; ) {
              var s = u.tag;
              if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                return;
              u = u.return;
            }
          for (; i !== null; ) {
            if (u = kn(i), u === null)
              return;
            if (s = u.tag, s === 5 || s === 6) {
              r = o = u;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
  js(function() {
    var c = o, m = ru(t), h = [];
    e: {
      var p = ca.get(e);
      if (p !== void 0) {
        var g = au, w = e;
        switch (e) {
          case "keypress":
            if (xr(t) === 0)
              break e;
          case "keydown":
          case "keyup":
            g = Qf;
            break;
          case "focusin":
            w = "focus", g = Ll;
            break;
          case "focusout":
            w = "blur", g = Ll;
            break;
          case "beforeblur":
          case "afterblur":
            g = Ll;
            break;
          case "click":
            if (t.button === 2)
              break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = ui;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Mf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = Xf;
            break;
          case ua:
          case ia:
          case sa:
            g = If;
            break;
          case aa:
            g = Zf;
            break;
          case "scroll":
            g = Of;
            break;
          case "wheel":
            g = qf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = si;
        }
        var S = (n & 4) !== 0, I = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = jt(a, f), v != null && S.push(Wt(a, v, d)))), I)
            break;
          a = a.return;
        }
        0 < S.length && (p = new g(p, w, null, t, m), h.push({ event: p, listeners: S }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", g = e === "mouseout" || e === "pointerout", p && t !== co && (w = t.relatedTarget || t.fromElement) && (kn(w) || w[Ke]))
          break e;
        if ((g || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, g ? (w = t.relatedTarget || t.toElement, g = c, w = w ? kn(w) : null, w !== null && (I = Mn(w), w !== I || w.tag !== 5 && w.tag !== 6) && (w = null)) : (g = null, w = c), g !== w)) {
          if (S = ui, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = si, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), I = g == null ? p : Vn(g), d = w == null ? p : Vn(w), p = new S(v, a + "leave", g, t, m), p.target = I, p.relatedTarget = d, v = null, kn(m) === c && (S = new S(f, a + "enter", w, t, m), S.target = d, S.relatedTarget = I, v = S), I = v, g && w)
            n: {
              for (S = g, f = w, a = 0, d = S; d; d = Dn(d))
                a++;
              for (d = 0, v = f; v; v = Dn(v))
                d++;
              for (; 0 < a - d; )
                S = Dn(S), a--;
              for (; 0 < d - a; )
                f = Dn(f), d--;
              for (; a--; ) {
                if (S === f || f !== null && S === f.alternate)
                  break n;
                S = Dn(S), f = Dn(f);
              }
              S = null;
            }
          else
            S = null;
          g !== null && wi(h, p, g, S, !1), w !== null && I !== null && wi(h, I, w, S, !0);
        }
      }
      e: {
        if (p = c ? Vn(c) : window, g = p.nodeName && p.nodeName.toLowerCase(), g === "select" || g === "input" && p.type === "file")
          var E = od;
        else if (fi(p))
          if (na)
            E = ad;
          else {
            E = id;
            var x = ud;
          }
        else
          (g = p.nodeName) && g.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = sd);
        if (E && (E = E(e, c))) {
          ea(h, E, t, m);
          break e;
        }
        x && x(e, p, c), e === "focusout" && (x = p._wrapperState) && x.controlled && p.type === "number" && oo(p, "number", p.value);
      }
      switch (x = c ? Vn(c) : window, e) {
        case "focusin":
          (fi(x) || x.contentEditable === "true") && (Un = x, go = c, Nt = null);
          break;
        case "focusout":
          Nt = go = Un = null;
          break;
        case "mousedown":
          wo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wo = !1, vi(h, t, m);
          break;
        case "selectionchange":
          if (dd)
            break;
        case "keydown":
        case "keyup":
          vi(h, t, m);
      }
      var _;
      if (fu)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Fn ? qs(e, t) && (P = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (P = "onCompositionStart");
      P && (Js && t.locale !== "ko" && (Fn || P !== "onCompositionStart" ? P === "onCompositionEnd" && Fn && (_ = Zs()) : (nn = m, su = "value" in nn ? nn.value : nn.textContent, Fn = !0)), x = $r(c, P), 0 < x.length && (P = new ii(P, e, null, t, m), h.push({ event: P, listeners: x }), _ ? P.data = _ : (_ = bs(t), _ !== null && (P.data = _)))), (_ = ed ? nd(e, t) : td(e, t)) && (c = $r(c, "onBeforeInput"), 0 < c.length && (m = new ii("onBeforeInput", "beforeinput", null, t, m), h.push({ event: m, listeners: c }), m.data = _));
    }
    fa(h, n);
  });
}
function Wt(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function $r(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = jt(e, t), o != null && r.unshift(Wt(e, o, l)), o = jt(e, n), o != null && r.push(Wt(e, o, l))), e = e.return;
  }
  return r;
}
function Dn(e) {
  if (e === null)
    return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wi(e, n, t, r, l) {
  for (var o = n._reactName, u = []; t !== null && t !== r; ) {
    var i = t, s = i.alternate, c = i.stateNode;
    if (s !== null && s === r)
      break;
    i.tag === 5 && c !== null && (i = c, l ? (s = jt(t, o), s != null && u.unshift(Wt(t, s, i))) : l || (s = jt(t, o), s != null && u.push(Wt(t, s, i)))), t = t.return;
  }
  u.length !== 0 && e.push({ event: n, listeners: u });
}
var vd = /\r\n?/g, yd = /\u0000|\uFFFD/g;
function Si(e) {
  return (typeof e == "string" ? e : "" + e).replace(vd, `
`).replace(yd, "");
}
function pr(e, n, t) {
  if (n = Si(n), Si(e) !== n && t)
    throw Error(y(425));
}
function Vr() {
}
var So = null, ko = null;
function Eo(e, n) {
  return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
}
var Co = typeof setTimeout == "function" ? setTimeout : void 0, gd = typeof clearTimeout == "function" ? clearTimeout : void 0, ki = typeof Promise == "function" ? Promise : void 0, wd = typeof queueMicrotask == "function" ? queueMicrotask : typeof ki < "u" ? function(e) {
  return ki.resolve(null).then(e).catch(Sd);
} : Co;
function Sd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Fl(e, n) {
  var t = n, r = 0;
  do {
    var l = t.nextSibling;
    if (e.removeChild(t), l && l.nodeType === 8)
      if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Ut(n);
          return;
        }
        r--;
      } else
        t !== "$" && t !== "$?" && t !== "$!" || r++;
    t = l;
  } while (t);
  Ut(n);
}
function un(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3)
      break;
    if (n === 8) {
      if (n = e.data, n === "$" || n === "$!" || n === "$?")
        break;
      if (n === "/$")
        return null;
    }
  }
  return e;
}
function Ei(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0)
          return e;
        n--;
      } else
        t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var st = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + st, Bt = "__reactProps$" + st, Ke = "__reactContainer$" + st, xo = "__reactEvents$" + st, kd = "__reactListeners$" + st, Ed = "__reactHandles$" + st;
function kn(e) {
  var n = e[Ie];
  if (n)
    return n;
  for (var t = e.parentNode; t; ) {
    if (n = t[Ke] || t[Ie]) {
      if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
        for (e = Ei(e); e !== null; ) {
          if (t = e[Ie])
            return t;
          e = Ei(e);
        }
      return n;
    }
    e = t, t = e.parentNode;
  }
  return null;
}
function bt(e) {
  return e = e[Ie] || e[Ke], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Vn(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Bt] || null;
}
var _o = [], An = -1;
function mn(e) {
  return { current: e };
}
function j(e) {
  0 > An || (e.current = _o[An], _o[An] = null, An--);
}
function M(e, n) {
  An++, _o[An] = e.current, e.current = n;
}
var pn = {}, le = mn(pn), fe = mn(!1), Nn = pn;
function et(e, n) {
  var t = e.type.contextTypes;
  if (!t)
    return pn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in t)
    l[o] = n[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function de(e) {
  return e = e.childContextTypes, e != null;
}
function Ar() {
  j(fe), j(le);
}
function Ci(e, n, t) {
  if (le.current !== pn)
    throw Error(y(168));
  M(le, n), M(fe, t);
}
function pa(e, n, t) {
  var r = e.stateNode;
  if (n = n.childContextTypes, typeof r.getChildContext != "function")
    return t;
  r = r.getChildContext();
  for (var l in r)
    if (!(l in n))
      throw Error(y(108, of(e) || "Unknown", l));
  return V({}, t, r);
}
function Wr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn, Nn = le.current, M(le, e), M(fe, fe.current), !0;
}
function xi(e, n, t) {
  var r = e.stateNode;
  if (!r)
    throw Error(y(169));
  t ? (e = pa(e, n, Nn), r.__reactInternalMemoizedMergedChildContext = e, j(fe), j(le), M(le, e)) : j(fe), M(fe, t);
}
var Ae = null, sl = !1, Ul = !1;
function ha(e) {
  Ae === null ? Ae = [e] : Ae.push(e);
}
function Cd(e) {
  sl = !0, ha(e);
}
function vn() {
  if (!Ul && Ae !== null) {
    Ul = !0;
    var e = 0, n = R;
    try {
      var t = Ae;
      for (R = 1; e < t.length; e++) {
        var r = t[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ae = null, sl = !1;
    } catch (l) {
      throw Ae !== null && (Ae = Ae.slice(e + 1)), $s(lu, vn), l;
    } finally {
      R = n, Ul = !1;
    }
  }
  return null;
}
var Wn = [], Bn = 0, Br = null, Hr = 0, Se = [], ke = 0, zn = null, We = 1, Be = "";
function wn(e, n) {
  Wn[Bn++] = Hr, Wn[Bn++] = Br, Br = e, Hr = n;
}
function ma(e, n, t) {
  Se[ke++] = We, Se[ke++] = Be, Se[ke++] = zn, zn = e;
  var r = We;
  e = Be;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), t += 1;
  var o = 32 - Oe(n) + l;
  if (30 < o) {
    var u = l - l % 5;
    o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, We = 1 << 32 - Oe(n) + l | t << l | r, Be = o + e;
  } else
    We = 1 << o | t << l | r, Be = e;
}
function pu(e) {
  e.return !== null && (wn(e, 1), ma(e, 1, 0));
}
function hu(e) {
  for (; e === Br; )
    Br = Wn[--Bn], Wn[Bn] = null, Hr = Wn[--Bn], Wn[Bn] = null;
  for (; e === zn; )
    zn = Se[--ke], Se[ke] = null, Be = Se[--ke], Se[ke] = null, We = Se[--ke], Se[ke] = null;
}
var ve = null, me = null, F = !1, Te = null;
function va(e, n) {
  var t = Ee(5, null, null, 0);
  t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
}
function _i(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, ve = e, me = un(n.firstChild), !0) : !1;
    case 6:
      return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, ve = e, me = null, !0) : !1;
    case 13:
      return n = n.nodeType !== 8 ? null : n, n !== null ? (t = zn !== null ? { id: We, overflow: Be } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Ee(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, ve = e, me = null, !0) : !1;
    default:
      return !1;
  }
}
function Po(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function No(e) {
  if (F) {
    var n = me;
    if (n) {
      var t = n;
      if (!_i(e, n)) {
        if (Po(e))
          throw Error(y(418));
        n = un(t.nextSibling);
        var r = ve;
        n && _i(e, n) ? va(r, t) : (e.flags = e.flags & -4097 | 2, F = !1, ve = e);
      }
    } else {
      if (Po(e))
        throw Error(y(418));
      e.flags = e.flags & -4097 | 2, F = !1, ve = e;
    }
  }
}
function Pi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function hr(e) {
  if (e !== ve)
    return !1;
  if (!F)
    return Pi(e), F = !0, !1;
  var n;
  if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !Eo(e.type, e.memoizedProps)), n && (n = me)) {
    if (Po(e))
      throw ya(), Error(y(418));
    for (; n; )
      va(e, n), n = un(n.nextSibling);
  }
  if (Pi(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              me = un(e.nextSibling);
              break e;
            }
            n--;
          } else
            t !== "$" && t !== "$!" && t !== "$?" || n++;
        }
        e = e.nextSibling;
      }
      me = null;
    }
  } else
    me = ve ? un(e.stateNode.nextSibling) : null;
  return !0;
}
function ya() {
  for (var e = me; e; )
    e = un(e.nextSibling);
}
function nt() {
  me = ve = null, F = !1;
}
function mu(e) {
  Te === null ? Te = [e] : Te.push(e);
}
var xd = Ge.ReactCurrentBatchConfig;
function ze(e, n) {
  if (e && e.defaultProps) {
    n = V({}, n), e = e.defaultProps;
    for (var t in e)
      n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Qr = mn(null), Kr = null, Hn = null, vu = null;
function yu() {
  vu = Hn = Kr = null;
}
function gu(e) {
  var n = Qr.current;
  j(Qr), e._currentValue = n;
}
function zo(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
      break;
    e = e.return;
  }
}
function Jn(e, n) {
  Kr = e, vu = Hn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (ce = !0), e.firstContext = null);
}
function xe(e) {
  var n = e._currentValue;
  if (vu !== e)
    if (e = { context: e, memoizedValue: n, next: null }, Hn === null) {
      if (Kr === null)
        throw Error(y(308));
      Hn = e, Kr.dependencies = { lanes: 0, firstContext: e };
    } else
      Hn = Hn.next = e;
  return n;
}
var En = null;
function wu(e) {
  En === null ? En = [e] : En.push(e);
}
function ga(e, n, t, r) {
  var l = n.interleaved;
  return l === null ? (t.next = t, wu(n)) : (t.next = l.next, l.next = t), n.interleaved = t, Ye(e, r);
}
function Ye(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
  return t.tag === 3 ? t.stateNode : null;
}
var qe = !1;
function Su(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function wa(e, n) {
  e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function He(e, n) {
  return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
}
function sn(e, n, t) {
  var r = e.updateQueue;
  if (r === null)
    return null;
  if (r = r.shared, O & 2) {
    var l = r.pending;
    return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, Ye(e, t);
  }
  return l = r.interleaved, l === null ? (n.next = n, wu(r)) : (n.next = l.next, l.next = n), r.interleaved = n, Ye(e, t);
}
function _r(e, n, t) {
  if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ou(e, t);
  }
}
function Ni(e, n) {
  var t = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, t === r)) {
    var l = null, o = null;
    if (t = t.firstBaseUpdate, t !== null) {
      do {
        var u = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
        o === null ? l = o = u : o = o.next = u, t = t.next;
      } while (t !== null);
      o === null ? l = o = n : o = o.next = n;
    } else
      l = o = n;
    t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
    return;
  }
  e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
}
function Yr(e, n, t, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i, c = s.next;
    s.next = null, u === null ? o = c : u.next = c, u = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, i = m.lastBaseUpdate, i !== u && (i === null ? m.firstBaseUpdate = c : i.next = c, m.lastBaseUpdate = s));
  }
  if (o !== null) {
    var h = l.baseState;
    u = 0, m = c = s = null, i = o;
    do {
      var p = i.lane, g = i.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: g,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var w = e, S = i;
          switch (p = n, g = t, S.tag) {
            case 1:
              if (w = S.payload, typeof w == "function") {
                h = w.call(g, h, p);
                break e;
              }
              h = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = S.payload, p = typeof w == "function" ? w.call(g, h, p) : w, p == null)
                break e;
              h = V({}, h, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else
        g = { eventTime: g, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, m === null ? (c = m = g, s = h) : m = m.next = g, u |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null)
          break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (1);
    if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, n = l.shared.interleaved, n !== null) {
      l = n;
      do
        u |= l.lane, l = l.next;
      while (l !== n);
    } else
      o === null && (l.shared.lanes = 0);
    Tn |= u, e.lanes = u, e.memoizedState = h;
  }
}
function zi(e, n, t) {
  if (e = n.effects, n.effects = null, e !== null)
    for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function")
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var Sa = new gs.Component().refs;
function Lo(e, n, t, r) {
  n = e.memoizedState, t = t(r, n), t = t == null ? n : V({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
}
var al = { isMounted: function(e) {
  return (e = e._reactInternals) ? Mn(e) === e : !1;
}, enqueueSetState: function(e, n, t) {
  e = e._reactInternals;
  var r = ue(), l = cn(e), o = He(r, l);
  o.payload = n, t != null && (o.callback = t), n = sn(e, o, l), n !== null && (Re(n, e, l, r), _r(n, e, l));
}, enqueueReplaceState: function(e, n, t) {
  e = e._reactInternals;
  var r = ue(), l = cn(e), o = He(r, l);
  o.tag = 1, o.payload = n, t != null && (o.callback = t), n = sn(e, o, l), n !== null && (Re(n, e, l, r), _r(n, e, l));
}, enqueueForceUpdate: function(e, n) {
  e = e._reactInternals;
  var t = ue(), r = cn(e), l = He(t, r);
  l.tag = 2, n != null && (l.callback = n), n = sn(e, l, r), n !== null && (Re(n, e, r, t), _r(n, e, r));
} };
function Li(e, n, t, r, l, o, u) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : n.prototype && n.prototype.isPureReactComponent ? !Vt(t, r) || !Vt(l, o) : !0;
}
function ka(e, n, t) {
  var r = !1, l = pn, o = n.contextType;
  return typeof o == "object" && o !== null ? o = xe(o) : (l = de(n) ? Nn : le.current, r = n.contextTypes, o = (r = r != null) ? et(e, l) : pn), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = al, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
}
function Ti(e, n, t, r) {
  e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && al.enqueueReplaceState(n, n.state, null);
}
function To(e, n, t, r) {
  var l = e.stateNode;
  l.props = t, l.state = e.memoizedState, l.refs = Sa, Su(e);
  var o = n.contextType;
  typeof o == "object" && o !== null ? l.context = xe(o) : (o = de(n) ? Nn : le.current, l.context = et(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Lo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && al.enqueueReplaceState(l, l.state, null), Yr(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vt(e, n, t) {
  if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (t._owner) {
      if (t = t._owner, t) {
        if (t.tag !== 1)
          throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r)
        throw Error(y(147, e));
      var l = r, o = "" + e;
      return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(u) {
        var i = l.refs;
        i === Sa && (i = l.refs = {}), u === null ? delete i[o] : i[o] = u;
      }, n._stringRef = o, n);
    }
    if (typeof e != "string")
      throw Error(y(284));
    if (!t._owner)
      throw Error(y(290, e));
  }
  return e;
}
function mr(e, n) {
  throw e = Object.prototype.toString.call(n), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
}
function Oi(e) {
  var n = e._init;
  return n(e._payload);
}
function Ea(e) {
  function n(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function t(f, a) {
    if (!e)
      return null;
    for (; a !== null; )
      n(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = fn(f, a), f.index = 0, f.sibling = null, f;
  }
  function o(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function u(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = Ql(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === In ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && Oi(E) === a.type) ? (v = l(a, d.props), v.ref = vt(f, a, d), v.return = f, v) : (v = Or(d.type, d.key, d.props, null, f.mode, v), v.ref = vt(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Kl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, E) {
    return a === null || a.tag !== 7 ? (a = _n(d, f.mode, v, E), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number")
      return a = Ql("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case lr:
          return d = Or(a.type, a.key, a.props, null, f.mode, d), d.ref = vt(f, null, a), d.return = f, d;
        case jn:
          return a = Kl(a, f.mode, d), a.return = f, a;
        case Je:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (St(a) || ft(a))
        return a = _n(a, f.mode, d, null), a.return = f, a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number")
      return E !== null ? null : i(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          return d.key === E ? s(f, a, d, v) : null;
        case jn:
          return d.key === E ? c(f, a, d, v) : null;
        case Je:
          return E = d._init, p(
            f,
            a,
            E(d._payload),
            v
          );
      }
      if (St(d) || ft(d))
        return E !== null ? null : m(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if (typeof v == "string" && v !== "" || typeof v == "number")
      return f = f.get(d) || null, i(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case lr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, E);
        case jn:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, E);
        case Je:
          var x = v._init;
          return g(f, a, d, x(v._payload), E);
      }
      if (St(v) || ft(v))
        return f = f.get(d) || null, m(a, f, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (var E = null, x = null, _ = a, P = a = 0, B = null; _ !== null && P < d.length; P++) {
      _.index > P ? (B = _, _ = null) : B = _.sibling;
      var T = p(f, _, d[P], v);
      if (T === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && T.alternate === null && n(f, _), a = o(T, a, P), x === null ? E = T : x.sibling = T, x = T, _ = B;
    }
    if (P === d.length)
      return t(f, _), F && wn(f, P), E;
    if (_ === null) {
      for (; P < d.length; P++)
        _ = h(f, d[P], v), _ !== null && (a = o(_, a, P), x === null ? E = _ : x.sibling = _, x = _);
      return F && wn(f, P), E;
    }
    for (_ = r(f, _); P < d.length; P++)
      B = g(_, f, P, d[P], v), B !== null && (e && B.alternate !== null && _.delete(B.key === null ? P : B.key), a = o(B, a, P), x === null ? E = B : x.sibling = B, x = B);
    return e && _.forEach(function(Pe) {
      return n(f, Pe);
    }), F && wn(f, P), E;
  }
  function S(f, a, d, v) {
    var E = ft(d);
    if (typeof E != "function")
      throw Error(y(150));
    if (d = E.call(d), d == null)
      throw Error(y(151));
    for (var x = E = null, _ = a, P = a = 0, B = null, T = d.next(); _ !== null && !T.done; P++, T = d.next()) {
      _.index > P ? (B = _, _ = null) : B = _.sibling;
      var Pe = p(f, _, T.value, v);
      if (Pe === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && Pe.alternate === null && n(f, _), a = o(Pe, a, P), x === null ? E = Pe : x.sibling = Pe, x = Pe, _ = B;
    }
    if (T.done)
      return t(
        f,
        _
      ), F && wn(f, P), E;
    if (_ === null) {
      for (; !T.done; P++, T = d.next())
        T = h(f, T.value, v), T !== null && (a = o(T, a, P), x === null ? E = T : x.sibling = T, x = T);
      return F && wn(f, P), E;
    }
    for (_ = r(f, _); !T.done; P++, T = d.next())
      T = g(_, f, P, T.value, v), T !== null && (e && T.alternate !== null && _.delete(T.key === null ? P : T.key), a = o(T, a, P), x === null ? E = T : x.sibling = T, x = T);
    return e && _.forEach(function(at) {
      return n(f, at);
    }), F && wn(f, P), E;
  }
  function I(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === In && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case lr:
          e: {
            for (var E = d.key, x = a; x !== null; ) {
              if (x.key === E) {
                if (E = d.type, E === In) {
                  if (x.tag === 7) {
                    t(f, x.sibling), a = l(x, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (x.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && Oi(E) === x.type) {
                  t(f, x.sibling), a = l(x, d.props), a.ref = vt(f, x, d), a.return = f, f = a;
                  break e;
                }
                t(f, x);
                break;
              } else
                n(f, x);
              x = x.sibling;
            }
            d.type === In ? (a = _n(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Or(d.type, d.key, d.props, null, f.mode, v), v.ref = vt(f, a, d), v.return = f, f = v);
          }
          return u(f);
        case jn:
          e: {
            for (x = d.key; a !== null; ) {
              if (a.key === x)
                if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                  break e;
                } else {
                  t(f, a);
                  break;
                }
              else
                n(f, a);
              a = a.sibling;
            }
            a = Kl(d, f.mode, v), a.return = f, f = a;
          }
          return u(f);
        case Je:
          return x = d._init, I(f, a, x(d._payload), v);
      }
      if (St(d))
        return w(f, a, d, v);
      if (ft(d))
        return S(f, a, d, v);
      mr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(f, a.sibling), a = l(a, d), a.return = f, f = a) : (t(f, a), a = Ql(d, f.mode, v), a.return = f, f = a), u(f)) : t(f, a);
  }
  return I;
}
var tt = Ea(!0), Ca = Ea(!1), er = {}, $e = mn(er), Ht = mn(er), Qt = mn(er);
function Cn(e) {
  if (e === er)
    throw Error(y(174));
  return e;
}
function ku(e, n) {
  switch (M(Qt, n), M(Ht, e), M($e, er), e = n.nodeType, e) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : io(null, "");
      break;
    default:
      e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = io(n, e);
  }
  j($e), M($e, n);
}
function rt() {
  j($e), j(Ht), j(Qt);
}
function xa(e) {
  Cn(Qt.current);
  var n = Cn($e.current), t = io(n, e.type);
  n !== t && (M(Ht, e), M($e, t));
}
function Eu(e) {
  Ht.current === e && (j($e), j(Ht));
}
var U = mn(0);
function Xr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128)
        return n;
    } else if (n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e)
      break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e)
        return null;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
  return null;
}
var $l = [];
function Cu() {
  for (var e = 0; e < $l.length; e++)
    $l[e]._workInProgressVersionPrimary = null;
  $l.length = 0;
}
var Pr = Ge.ReactCurrentDispatcher, Vl = Ge.ReactCurrentBatchConfig, Ln = 0, $ = null, Y = null, Z = null, Gr = !1, zt = !1, Kt = 0, _d = 0;
function ne() {
  throw Error(y(321));
}
function xu(e, n) {
  if (n === null)
    return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Me(e[t], n[t]))
      return !1;
  return !0;
}
function _u(e, n, t, r, l, o) {
  if (Ln = o, $ = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, Pr.current = e === null || e.memoizedState === null ? Ld : Td, e = t(r, l), zt) {
    o = 0;
    do {
      if (zt = !1, Kt = 0, 25 <= o)
        throw Error(y(301));
      o += 1, Z = Y = null, n.updateQueue = null, Pr.current = Od, e = t(r, l);
    } while (zt);
  }
  if (Pr.current = Zr, n = Y !== null && Y.next !== null, Ln = 0, Z = Y = $ = null, Gr = !1, n)
    throw Error(y(300));
  return e;
}
function Pu() {
  var e = Kt !== 0;
  return Kt = 0, e;
}
function je() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return Z === null ? $.memoizedState = Z = e : Z = Z.next = e, Z;
}
function _e() {
  if (Y === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else
    e = Y.next;
  var n = Z === null ? $.memoizedState : Z.next;
  if (n !== null)
    Z = n, Y = e;
  else {
    if (e === null)
      throw Error(y(310));
    Y = e, e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, Z === null ? $.memoizedState = Z = e : Z = Z.next = e;
  }
  return Z;
}
function Yt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function Al(e) {
  var n = _e(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = Y, l = r.baseQueue, o = t.pending;
  if (o !== null) {
    if (l !== null) {
      var u = l.next;
      l.next = o.next, o.next = u;
    }
    r.baseQueue = l = o, t.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var i = u = null, s = null, c = o;
    do {
      var m = c.lane;
      if ((Ln & m) === m)
        s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (i = s = h, u = r) : s = s.next = h, $.lanes |= m, Tn |= m;
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? u = r : s.next = i, Me(r, n.memoizedState) || (ce = !0), n.memoizedState = r, n.baseState = u, n.baseQueue = s, t.lastRenderedState = r;
  }
  if (e = t.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, $.lanes |= o, Tn |= o, l = l.next;
    while (l !== e);
  } else
    l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Wl(e) {
  var n = _e(), t = n.queue;
  if (t === null)
    throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch, l = t.pending, o = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var u = l = l.next;
    do
      o = e(o, u.action), u = u.next;
    while (u !== l);
    Me(o, n.memoizedState) || (ce = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
  }
  return [o, r];
}
function _a() {
}
function Pa(e, n) {
  var t = $, r = _e(), l = n(), o = !Me(r.memoizedState, l);
  if (o && (r.memoizedState = l, ce = !0), r = r.queue, Nu(La.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || Z !== null && Z.memoizedState.tag & 1) {
    if (t.flags |= 2048, Xt(9, za.bind(null, t, r, l, n), void 0, null), J === null)
      throw Error(y(349));
    Ln & 30 || Na(t, n, l);
  }
  return l;
}
function Na(e, n, t) {
  e.flags |= 16384, e = { getSnapshot: n, value: t }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
}
function za(e, n, t, r) {
  n.value = t, n.getSnapshot = r, Ta(n) && Oa(e);
}
function La(e, n, t) {
  return t(function() {
    Ta(n) && Oa(e);
  });
}
function Ta(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Me(e, t);
  } catch {
    return !0;
  }
}
function Oa(e) {
  var n = Ye(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function Ri(e) {
  var n = je();
  return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yt, lastRenderedState: e }, n.queue = e, e = e.dispatch = zd.bind(null, $, e), [n.memoizedState, e];
}
function Xt(e, n, t, r) {
  return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = $.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, $.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
}
function Ra() {
  return _e().memoizedState;
}
function Nr(e, n, t, r) {
  var l = je();
  $.flags |= e, l.memoizedState = Xt(1 | n, t, void 0, r === void 0 ? null : r);
}
function cl(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var u = Y.memoizedState;
    if (o = u.destroy, r !== null && xu(r, u.deps)) {
      l.memoizedState = Xt(n, t, o, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = Xt(1 | n, t, o, r);
}
function Mi(e, n) {
  return Nr(8390656, 8, e, n);
}
function Nu(e, n) {
  return cl(2048, 8, e, n);
}
function Ma(e, n) {
  return cl(4, 2, e, n);
}
function Da(e, n) {
  return cl(4, 4, e, n);
}
function ja(e, n) {
  if (typeof n == "function")
    return e = e(), n(e), function() {
      n(null);
    };
  if (n != null)
    return e = e(), n.current = e, function() {
      n.current = null;
    };
}
function Ia(e, n, t) {
  return t = t != null ? t.concat([e]) : null, cl(4, 4, ja.bind(null, n, e), t);
}
function zu() {
}
function Fa(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && xu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
}
function Ua(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && xu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
}
function $a(e, n, t) {
  return Ln & 21 ? (Me(t, n) || (t = Ws(), $.lanes |= t, Tn |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, ce = !0), e.memoizedState = t);
}
function Pd(e, n) {
  var t = R;
  R = t !== 0 && 4 > t ? t : 4, e(!0);
  var r = Vl.transition;
  Vl.transition = {};
  try {
    e(!1), n();
  } finally {
    R = t, Vl.transition = r;
  }
}
function Va() {
  return _e().memoizedState;
}
function Nd(e, n, t) {
  var r = cn(e);
  if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Aa(e))
    Wa(n, t);
  else if (t = ga(e, n, t, r), t !== null) {
    var l = ue();
    Re(t, e, r, l), Ba(t, n, r);
  }
}
function zd(e, n, t) {
  var r = cn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (Aa(e))
    Wa(n, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null))
      try {
        var u = n.lastRenderedState, i = o(u, t);
        if (l.hasEagerState = !0, l.eagerState = i, Me(i, u)) {
          var s = n.interleaved;
          s === null ? (l.next = l, wu(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
    t = ga(e, n, l, r), t !== null && (l = ue(), Re(t, e, r, l), Ba(t, n, r));
  }
}
function Aa(e) {
  var n = e.alternate;
  return e === $ || n !== null && n === $;
}
function Wa(e, n) {
  zt = Gr = !0;
  var t = e.pending;
  t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
}
function Ba(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    r &= e.pendingLanes, t |= r, n.lanes = t, ou(e, t);
  }
}
var Zr = { readContext: xe, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, Ld = { readContext: xe, useCallback: function(e, n) {
  return je().memoizedState = [e, n === void 0 ? null : n], e;
}, useContext: xe, useEffect: Mi, useImperativeHandle: function(e, n, t) {
  return t = t != null ? t.concat([e]) : null, Nr(
    4194308,
    4,
    ja.bind(null, n, e),
    t
  );
}, useLayoutEffect: function(e, n) {
  return Nr(4194308, 4, e, n);
}, useInsertionEffect: function(e, n) {
  return Nr(4, 2, e, n);
}, useMemo: function(e, n) {
  var t = je();
  return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
}, useReducer: function(e, n, t) {
  var r = je();
  return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Nd.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var n = je();
  return e = { current: e }, n.memoizedState = e;
}, useState: Ri, useDebugValue: zu, useDeferredValue: function(e) {
  return je().memoizedState = e;
}, useTransition: function() {
  var e = Ri(!1), n = e[0];
  return e = Pd.bind(null, e[1]), je().memoizedState = e, [n, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, n, t) {
  var r = $, l = je();
  if (F) {
    if (t === void 0)
      throw Error(y(407));
    t = t();
  } else {
    if (t = n(), J === null)
      throw Error(y(349));
    Ln & 30 || Na(r, n, t);
  }
  l.memoizedState = t;
  var o = { value: t, getSnapshot: n };
  return l.queue = o, Mi(La.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, Xt(9, za.bind(null, r, o, t, n), void 0, null), t;
}, useId: function() {
  var e = je(), n = J.identifierPrefix;
  if (F) {
    var t = Be, r = We;
    t = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = Kt++, 0 < t && (n += "H" + t.toString(32)), n += ":";
  } else
    t = _d++, n = ":" + n + "r" + t.toString(32) + ":";
  return e.memoizedState = n;
}, unstable_isNewReconciler: !1 }, Td = {
  readContext: xe,
  useCallback: Fa,
  useContext: xe,
  useEffect: Nu,
  useImperativeHandle: Ia,
  useInsertionEffect: Ma,
  useLayoutEffect: Da,
  useMemo: Ua,
  useReducer: Al,
  useRef: Ra,
  useState: function() {
    return Al(Yt);
  },
  useDebugValue: zu,
  useDeferredValue: function(e) {
    var n = _e();
    return $a(n, Y.memoizedState, e);
  },
  useTransition: function() {
    var e = Al(Yt)[0], n = _e().memoizedState;
    return [e, n];
  },
  useMutableSource: _a,
  useSyncExternalStore: Pa,
  useId: Va,
  unstable_isNewReconciler: !1
}, Od = { readContext: xe, useCallback: Fa, useContext: xe, useEffect: Nu, useImperativeHandle: Ia, useInsertionEffect: Ma, useLayoutEffect: Da, useMemo: Ua, useReducer: Wl, useRef: Ra, useState: function() {
  return Wl(Yt);
}, useDebugValue: zu, useDeferredValue: function(e) {
  var n = _e();
  return Y === null ? n.memoizedState = e : $a(n, Y.memoizedState, e);
}, useTransition: function() {
  var e = Wl(Yt)[0], n = _e().memoizedState;
  return [e, n];
}, useMutableSource: _a, useSyncExternalStore: Pa, useId: Va, unstable_isNewReconciler: !1 };
function lt(e, n) {
  try {
    var t = "", r = n;
    do
      t += lf(r), r = r.return;
    while (r);
    var l = t;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Bl(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function Oo(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function() {
      throw t;
    });
  }
}
var Rd = typeof WeakMap == "function" ? WeakMap : Map;
function Ha(e, n, t) {
  t = He(-1, t), t.tag = 3, t.payload = { element: null };
  var r = n.value;
  return t.callback = function() {
    qr || (qr = !0, Ao = r), Oo(e, n);
  }, t;
}
function Qa(e, n, t) {
  t = He(-1, t), t.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    t.payload = function() {
      return r(l);
    }, t.callback = function() {
      Oo(e, n);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
    Oo(e, n), typeof r != "function" && (an === null ? an = /* @__PURE__ */ new Set([this]) : an.add(this));
    var u = n.stack;
    this.componentDidCatch(n.value, { componentStack: u !== null ? u : "" });
  }), t;
}
function Di(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rd();
    var l = /* @__PURE__ */ new Set();
    r.set(n, l);
  } else
    l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
  l.has(t) || (l.add(t), e = Kd.bind(null, e, n, t), n.then(e, e));
}
function ji(e) {
  do {
    var n;
    if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ii(e, n, t, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = He(-1, 1), n.tag = 2, sn(t, n, 1))), t.lanes |= 1), e);
}
var Md = Ge.ReactCurrentOwner, ce = !1;
function oe(e, n, t, r) {
  n.child = e === null ? Ca(n, null, t, r) : tt(n, e.child, t, r);
}
function Fi(e, n, t, r, l) {
  t = t.render;
  var o = n.ref;
  return Jn(n, l), r = _u(e, n, t, r, o, l), t = Pu(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Xe(e, n, l)) : (F && t && pu(n), n.flags |= 1, oe(e, n, r, l), n.child);
}
function Ui(e, n, t, r, l) {
  if (e === null) {
    var o = t.type;
    return typeof o == "function" && !Iu(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, Ka(e, n, o, r, l)) : (e = Or(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var u = o.memoizedProps;
    if (t = t.compare, t = t !== null ? t : Vt, t(u, r) && e.ref === n.ref)
      return Xe(e, n, l);
  }
  return n.flags |= 1, e = fn(o, r), e.ref = n.ref, e.return = n, n.child = e;
}
function Ka(e, n, t, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Vt(o, r) && e.ref === n.ref)
      if (ce = !1, n.pendingProps = r = o, (e.lanes & l) !== 0)
        e.flags & 131072 && (ce = !0);
      else
        return n.lanes = e.lanes, Xe(e, n, l);
  }
  return Ro(e, n, t, r, l);
}
function Ya(e, n, t) {
  var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, M(Kn, he), he |= t;
    else {
      if (!(t & 1073741824))
        return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, M(Kn, he), he |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, M(Kn, he), he |= r;
    }
  else
    o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, M(Kn, he), he |= r;
  return oe(e, n, l, t), n.child;
}
function Xa(e, n) {
  var t = n.ref;
  (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
}
function Ro(e, n, t, r, l) {
  var o = de(t) ? Nn : le.current;
  return o = et(n, o), Jn(n, l), t = _u(e, n, t, r, o, l), r = Pu(), e !== null && !ce ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Xe(e, n, l)) : (F && r && pu(n), n.flags |= 1, oe(e, n, t, l), n.child);
}
function $i(e, n, t, r, l) {
  if (de(t)) {
    var o = !0;
    Wr(n);
  } else
    o = !1;
  if (Jn(n, l), n.stateNode === null)
    zr(e, n), ka(n, t, r), To(n, t, r, l), r = !0;
  else if (e === null) {
    var u = n.stateNode, i = n.memoizedProps;
    u.props = i;
    var s = u.context, c = t.contextType;
    typeof c == "object" && c !== null ? c = xe(c) : (c = de(t) ? Nn : le.current, c = et(n, c));
    var m = t.getDerivedStateFromProps, h = typeof m == "function" || typeof u.getSnapshotBeforeUpdate == "function";
    h || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== c) && Ti(n, u, r, c), qe = !1;
    var p = n.memoizedState;
    u.state = p, Yr(n, r, u, l), s = n.memoizedState, i !== r || p !== s || fe.current || qe ? (typeof m == "function" && (Lo(n, t, m, r), s = n.memoizedState), (i = qe || Li(n, t, i, r, p, s, c)) ? (h || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), u.props = r, u.state = s, u.context = c, r = i) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
  } else {
    u = n.stateNode, wa(e, n), i = n.memoizedProps, c = n.type === n.elementType ? i : ze(n.type, i), u.props = c, h = n.pendingProps, p = u.context, s = t.contextType, typeof s == "object" && s !== null ? s = xe(s) : (s = de(t) ? Nn : le.current, s = et(n, s));
    var g = t.getDerivedStateFromProps;
    (m = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== h || p !== s) && Ti(n, u, r, s), qe = !1, p = n.memoizedState, u.state = p, Yr(n, r, u, l);
    var w = n.memoizedState;
    i !== h || p !== w || fe.current || qe ? (typeof g == "function" && (Lo(n, t, g, r), w = n.memoizedState), (c = qe || Li(n, t, c, r, p, w, s) || !1) ? (m || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, w, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, w, s)), typeof u.componentDidUpdate == "function" && (n.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = w), u.props = r, u.state = w, u.context = s, r = c) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024), r = !1);
  }
  return Mo(e, n, t, r, o, l);
}
function Mo(e, n, t, r, l, o) {
  Xa(e, n);
  var u = (n.flags & 128) !== 0;
  if (!r && !u)
    return l && xi(n, t, !1), Xe(e, n, o);
  r = n.stateNode, Md.current = n;
  var i = u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return n.flags |= 1, e !== null && u ? (n.child = tt(n, e.child, null, o), n.child = tt(n, null, i, o)) : oe(e, n, i, o), n.memoizedState = r.state, l && xi(n, t, !0), n.child;
}
function Ga(e) {
  var n = e.stateNode;
  n.pendingContext ? Ci(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Ci(e, n.context, !1), ku(e, n.containerInfo);
}
function Vi(e, n, t, r, l) {
  return nt(), mu(l), n.flags |= 256, oe(e, n, t, r), n.child;
}
var Do = { dehydrated: null, treeContext: null, retryLane: 0 };
function jo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Za(e, n, t) {
  var r = n.pendingProps, l = U.current, o = !1, u = (n.flags & 128) !== 0, i;
  if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), M(U, l & 1), e === null)
    return No(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, u = { mode: "hidden", children: u }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = pl(u, r, 0, null), e = _n(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = jo(t), n.memoizedState = Do, e) : Lu(n, u));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null))
    return Dd(e, n, u, r, i, l, t);
  if (o) {
    o = r.fallback, u = n.mode, l = e.child, i = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(u & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = fn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = fn(i, o) : (o = _n(o, u, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, u = e.child.memoizedState, u = u === null ? jo(t) : { baseLanes: u.baseLanes | t, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~t, n.memoizedState = Do, r;
  }
  return o = e.child, e = o.sibling, r = fn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
}
function Lu(e, n) {
  return n = pl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
}
function vr(e, n, t, r) {
  return r !== null && mu(r), tt(n, e.child, null, t), e = Lu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
}
function Dd(e, n, t, r, l, o, u) {
  if (t)
    return n.flags & 256 ? (n.flags &= -257, r = Bl(Error(y(422))), vr(e, n, u, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = pl({ mode: "visible", children: r.children }, l, 0, null), o = _n(o, l, u, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && tt(n, e.child, null, u), n.child.memoizedState = jo(u), n.memoizedState = Do, o);
  if (!(n.mode & 1))
    return vr(e, n, u, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r)
      var i = r.dgst;
    return r = i, o = Error(y(419)), r = Bl(o, r, void 0), vr(e, n, u, r);
  }
  if (i = (u & e.childLanes) !== 0, ce || i) {
    if (r = J, r !== null) {
      switch (u & -u) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ye(e, l), Re(r, e, l, -1));
    }
    return ju(), r = Bl(Error(y(421))), vr(e, n, u, r);
  }
  return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = Yd.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, me = un(l.nextSibling), ve = n, F = !0, Te = null, e !== null && (Se[ke++] = We, Se[ke++] = Be, Se[ke++] = zn, We = e.id, Be = e.overflow, zn = n), n = Lu(n, r.children), n.flags |= 4096, n);
}
function Ai(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), zo(e.return, n, t);
}
function Hl(e, n, t, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
}
function Ja(e, n, t) {
  var r = n.pendingProps, l = r.revealOrder, o = r.tail;
  if (oe(e, n, r.children, t), r = U.current, r & 2)
    r = r & 1 | 2, n.flags |= 128;
  else {
    if (e !== null && e.flags & 128)
      e:
        for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Ai(e, t, n);
          else if (e.tag === 19)
            Ai(e, t, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n)
            break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
  }
  if (M(U, r), !(n.mode & 1))
    n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          e = t.alternate, e !== null && Xr(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), Hl(n, !1, l, t, o);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Xr(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        Hl(n, !0, t, null, o);
        break;
      case "together":
        Hl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function zr(e, n) {
  !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
}
function Xe(e, n, t) {
  if (e !== null && (n.dependencies = e.dependencies), Tn |= n.lanes, !(t & n.childLanes))
    return null;
  if (e !== null && n.child !== e.child)
    throw Error(y(153));
  if (n.child !== null) {
    for (e = n.child, t = fn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
      e = e.sibling, t = t.sibling = fn(e, e.pendingProps), t.return = n;
    t.sibling = null;
  }
  return n.child;
}
function jd(e, n, t) {
  switch (n.tag) {
    case 3:
      Ga(n), nt();
      break;
    case 5:
      xa(n);
      break;
    case 1:
      de(n.type) && Wr(n);
      break;
    case 4:
      ku(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context, l = n.memoizedProps.value;
      M(Qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = n.memoizedState, r !== null)
        return r.dehydrated !== null ? (M(U, U.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Za(e, n, t) : (M(U, U.current & 1), e = Xe(e, n, t), e !== null ? e.sibling : null);
      M(U, U.current & 1);
      break;
    case 19:
      if (r = (t & n.childLanes) !== 0, e.flags & 128) {
        if (r)
          return Ja(e, n, t);
        n.flags |= 128;
      }
      if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), M(U, U.current), r)
        break;
      return null;
    case 22:
    case 23:
      return n.lanes = 0, Ya(e, n, t);
  }
  return Xe(e, n, t);
}
var qa, Io, ba, ec;
qa = function(e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6)
      e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === n)
      break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n)
        return;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
};
Io = function() {
};
ba = function(e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = n.stateNode, Cn($e.current);
    var o = null;
    switch (t) {
      case "input":
        l = ro(e, l), r = ro(e, r), o = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = uo(e, l), r = uo(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Vr);
    }
    so(t, r);
    var u;
    t = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var i = l[c];
          for (u in i)
            i.hasOwnProperty(u) && (t || (t = {}), t[u] = "");
        } else
          c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Mt.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== i && (s != null || i != null))
        if (c === "style")
          if (i) {
            for (u in i)
              !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (t || (t = {}), t[u] = "");
            for (u in s)
              s.hasOwnProperty(u) && i[u] !== s[u] && (t || (t = {}), t[u] = s[u]);
          } else
            t || (o || (o = []), o.push(
              c,
              t
            )), t = s;
        else
          c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Mt.hasOwnProperty(c) ? (s != null && c === "onScroll" && D("scroll", e), o || i === s || (o = [])) : (o = o || []).push(c, s));
    }
    t && (o = o || []).push("style", t);
    var c = o;
    (n.updateQueue = c) && (n.flags |= 4);
  }
};
ec = function(e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function yt(e, n) {
  if (!F)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else
    for (l = e.child; l !== null; )
      t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = t, n;
}
function Id(e, n, t) {
  var r = n.pendingProps;
  switch (hu(n), n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(n), null;
    case 1:
      return de(n.type) && Ar(), te(n), null;
    case 3:
      return r = n.stateNode, rt(), j(fe), j(le), Cu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (hr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, Te !== null && (Ho(Te), Te = null))), Io(e, n), te(n), null;
    case 5:
      Eu(n);
      var l = Cn(Qt.current);
      if (t = n.type, e !== null && n.stateNode != null)
        ba(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
      else {
        if (!r) {
          if (n.stateNode === null)
            throw Error(y(166));
          return te(n), null;
        }
        if (e = Cn($e.current), hr(n)) {
          r = n.stateNode, t = n.type;
          var o = n.memoizedProps;
          switch (r[Ie] = n, r[Bt] = o, e = (n.mode & 1) !== 0, t) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Et.length; l++)
                D(Et[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                r
              ), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Zu(r, o), D("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, D("invalid", r);
              break;
            case "textarea":
              qu(r, o), D("invalid", r);
          }
          so(t, o), l = null;
          for (var u in o)
            if (o.hasOwnProperty(u)) {
              var i = o[u];
              u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && pr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && pr(
                r.textContent,
                i,
                e
              ), l = ["children", "" + i]) : Mt.hasOwnProperty(u) && i != null && u === "onScroll" && D("scroll", r);
            }
          switch (t) {
            case "input":
              or(r), Ju(r, o, !0);
              break;
            case "textarea":
              or(r), bu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Vr);
          }
          r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
        } else {
          u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Ns(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(t, { is: r.is }) : (e = u.createElement(t), t === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, t), e[Ie] = n, e[Bt] = r, qa(e, n, !1, !1), n.stateNode = e;
          e: {
            switch (u = ao(t, r), t) {
              case "dialog":
                D("cancel", e), D("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Et.length; l++)
                  D(Et[l], e);
                l = r;
                break;
              case "source":
                D("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  e
                ), D("load", e), l = r;
                break;
              case "details":
                D("toggle", e), l = r;
                break;
              case "input":
                Zu(e, r), l = ro(e, r), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), D("invalid", e);
                break;
              case "textarea":
                qu(e, r), l = uo(e, r), D("invalid", e);
                break;
              default:
                l = r;
            }
            so(t, l), i = l;
            for (o in i)
              if (i.hasOwnProperty(o)) {
                var s = i[o];
                o === "style" ? Ts(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && zs(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Dt(e, s) : typeof s == "number" && Dt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Mt.hasOwnProperty(o) ? s != null && o === "onScroll" && D("scroll", e) : s != null && bo(e, o, s, u));
              }
            switch (t) {
              case "input":
                or(e), Ju(e, r, !1);
                break;
              case "textarea":
                or(e), bu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + dn(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? Yn(e, !!r.multiple, o, !1) : r.defaultValue != null && Yn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Vr);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null)
        ec(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null)
          throw Error(y(166));
        if (t = Cn(Qt.current), Cn($e.current), hr(n)) {
          if (r = n.stateNode, t = n.memoizedProps, r[Ie] = n, (o = r.nodeValue !== t) && (e = ve, e !== null))
            switch (e.tag) {
              case 3:
                pr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && pr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          o && (n.flags |= 4);
        } else
          r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[Ie] = n, n.stateNode = r;
      }
      return te(n), null;
    case 13:
      if (j(U), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (F && me !== null && n.mode & 1 && !(n.flags & 128))
          ya(), nt(), n.flags |= 98560, o = !1;
        else if (o = hr(n), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o)
              throw Error(y(318));
            if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(y(317));
            o[Ie] = n;
          } else
            nt(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
          te(n), o = !1;
        } else
          Te !== null && (Ho(Te), Te = null), o = !0;
        if (!o)
          return n.flags & 65536 ? n : null;
      }
      return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || U.current & 1 ? X === 0 && (X = 3) : ju())), n.updateQueue !== null && (n.flags |= 4), te(n), null);
    case 4:
      return rt(), Io(e, n), e === null && At(n.stateNode.containerInfo), te(n), null;
    case 10:
      return gu(n.type._context), te(n), null;
    case 17:
      return de(n.type) && Ar(), te(n), null;
    case 19:
      if (j(U), o = n.memoizedState, o === null)
        return te(n), null;
      if (r = (n.flags & 128) !== 0, u = o.rendering, u === null)
        if (r)
          yt(o, !1);
        else {
          if (X !== 0 || e !== null && e.flags & 128)
            for (e = n.child; e !== null; ) {
              if (u = Xr(e), u !== null) {
                for (n.flags |= 128, yt(o, !1), r = u.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                  o = t, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                return M(U, U.current & 1 | 2), n.child;
              }
              e = e.sibling;
            }
          o.tail !== null && Q() > ot && (n.flags |= 128, r = !0, yt(o, !1), n.lanes = 4194304);
        }
      else {
        if (!r)
          if (e = Xr(u), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), yt(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !F)
              return te(n), null;
          } else
            2 * Q() - o.renderingStartTime > ot && t !== 1073741824 && (n.flags |= 128, r = !0, yt(o, !1), n.lanes = 4194304);
        o.isBackwards ? (u.sibling = n.child, n.child = u) : (t = o.last, t !== null ? t.sibling = u : n.child = u, o.last = u);
      }
      return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = Q(), n.sibling = null, t = U.current, M(U, r ? t & 1 | 2 : t & 1), n) : (te(n), null);
    case 22:
    case 23:
      return Du(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? he & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : te(n), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function Fd(e, n) {
  switch (hu(n), n.tag) {
    case 1:
      return de(n.type) && Ar(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 3:
      return rt(), j(fe), j(le), Cu(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
    case 5:
      return Eu(n), null;
    case 13:
      if (j(U), e = n.memoizedState, e !== null && e.dehydrated !== null) {
        if (n.alternate === null)
          throw Error(y(340));
        nt();
      }
      return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
    case 19:
      return j(U), null;
    case 4:
      return rt(), null;
    case 10:
      return gu(n.type._context), null;
    case 22:
    case 23:
      return Du(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yr = !1, re = !1, Ud = typeof WeakSet == "function" ? WeakSet : Set, k = null;
function Qn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        A(e, n, r);
      }
    else
      t.current = null;
}
function Fo(e, n, t) {
  try {
    t();
  } catch (r) {
    A(e, n, r);
  }
}
var Wi = !1;
function $d(e, n) {
  if (So = Fr, e = la(), du(e)) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, o = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, o.nodeType;
          } catch {
            t = null;
            break e;
          }
          var u = 0, i = -1, s = -1, c = 0, m = 0, h = e, p = null;
          n:
            for (; ; ) {
              for (var g; h !== t || l !== 0 && h.nodeType !== 3 || (i = u + l), h !== o || r !== 0 && h.nodeType !== 3 || (s = u + r), h.nodeType === 3 && (u += h.nodeValue.length), (g = h.firstChild) !== null; )
                p = h, h = g;
              for (; ; ) {
                if (h === e)
                  break n;
                if (p === t && ++c === l && (i = u), p === o && ++m === r && (s = u), (g = h.nextSibling) !== null)
                  break;
                h = p, p = h.parentNode;
              }
              h = g;
            }
          t = i === -1 || s === -1 ? null : { start: i, end: s };
        } else
          t = null;
      }
    t = t || { start: 0, end: 0 };
  } else
    t = null;
  for (ko = { focusedElem: e, selectionRange: t }, Fr = !1, k = n; k !== null; )
    if (n = k, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
      e.return = n, k = e;
    else
      for (; k !== null; ) {
        n = k;
        try {
          var w = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var S = w.memoizedProps, I = w.memoizedState, f = n.stateNode, a = f.getSnapshotBeforeUpdate(n.elementType === n.type ? S : ze(n.type, S), I);
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = n.stateNode.containerInfo;
                d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          A(n, n.return, v);
        }
        if (e = n.sibling, e !== null) {
          e.return = n.return, k = e;
          break;
        }
        k = n.return;
      }
  return w = Wi, Wi = !1, w;
}
function Lt(e, n, t) {
  var r = n.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && Fo(n, t, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function fl(e, n) {
  if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
    var t = n = n.next;
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Uo(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : n.current = e;
  }
}
function nc(e) {
  var n = e.alternate;
  n !== null && (e.alternate = null, nc(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[Ie], delete n[Bt], delete n[xo], delete n[kd], delete n[Ed])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function tc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bi(e) {
  e:
    for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || tc(e.return))
          return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2))
        return e.stateNode;
    }
}
function $o(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Vr));
  else if (r !== 4 && (e = e.child, e !== null))
    for ($o(e, n, t), e = e.sibling; e !== null; )
      $o(e, n, t), e = e.sibling;
}
function Vo(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null))
    for (Vo(e, n, t), e = e.sibling; e !== null; )
      Vo(e, n, t), e = e.sibling;
}
var q = null, Le = !1;
function Ze(e, n, t) {
  for (t = t.child; t !== null; )
    rc(e, n, t), t = t.sibling;
}
function rc(e, n, t) {
  if (Ue && typeof Ue.onCommitFiberUnmount == "function")
    try {
      Ue.onCommitFiberUnmount(rl, t);
    } catch {
    }
  switch (t.tag) {
    case 5:
      re || Qn(t, n);
    case 6:
      var r = q, l = Le;
      q = null, Ze(e, n, t), q = r, Le = l, q !== null && (Le ? (e = q, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null && (Le ? (e = q, t = t.stateNode, e.nodeType === 8 ? Fl(e.parentNode, t) : e.nodeType === 1 && Fl(e, t), Ut(e)) : Fl(q, t.stateNode));
      break;
    case 4:
      r = q, l = Le, q = t.stateNode.containerInfo, Le = !0, Ze(e, n, t), q = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!re && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, u = o.destroy;
          o = o.tag, u !== void 0 && (o & 2 || o & 4) && Fo(t, n, u), l = l.next;
        } while (l !== r);
      }
      Ze(e, n, t);
      break;
    case 1:
      if (!re && (Qn(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
        try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (i) {
          A(t, n, i);
        }
      Ze(e, n, t);
      break;
    case 21:
      Ze(e, n, t);
      break;
    case 22:
      t.mode & 1 ? (re = (r = re) || t.memoizedState !== null, Ze(e, n, t), re = r) : Ze(e, n, t);
      break;
    default:
      Ze(e, n, t);
  }
}
function Hi(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new Ud()), n.forEach(function(r) {
      var l = Xd.bind(null, e, r);
      t.has(r) || (t.add(r), r.then(l, l));
    });
  }
}
function Ne(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var o = e, u = n, i = u;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                q = i.stateNode, Le = !1;
                break e;
              case 3:
                q = i.stateNode.containerInfo, Le = !0;
                break e;
              case 4:
                q = i.stateNode.containerInfo, Le = !0;
                break e;
            }
            i = i.return;
          }
        if (q === null)
          throw Error(y(160));
        rc(o, u, l), q = null, Le = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (c) {
        A(l, n, c);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; )
      lc(n, e), n = n.sibling;
}
function lc(e, n) {
  var t = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Ne(n, e), De(e), r & 4) {
        try {
          Lt(3, e, e.return), fl(3, e);
        } catch (S) {
          A(e, e.return, S);
        }
        try {
          Lt(5, e, e.return);
        } catch (S) {
          A(e, e.return, S);
        }
      }
      break;
    case 1:
      Ne(n, e), De(e), r & 512 && t !== null && Qn(t, t.return);
      break;
    case 5:
      if (Ne(n, e), De(e), r & 512 && t !== null && Qn(t, t.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Dt(l, "");
        } catch (S) {
          A(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, u = t !== null ? t.memoizedProps : o, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null)
          try {
            i === "input" && o.type === "radio" && o.name != null && _s(l, o), ao(i, u);
            var c = ao(i, o);
            for (u = 0; u < s.length; u += 2) {
              var m = s[u], h = s[u + 1];
              m === "style" ? Ts(l, h) : m === "dangerouslySetInnerHTML" ? zs(l, h) : m === "children" ? Dt(l, h) : bo(l, m, h, c);
            }
            switch (i) {
              case "input":
                lo(l, o);
                break;
              case "textarea":
                Ps(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null ? Yn(l, !!o.multiple, g, !1) : p !== !!o.multiple && (o.defaultValue != null ? Yn(
                  l,
                  !!o.multiple,
                  o.defaultValue,
                  !0
                ) : Yn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Bt] = o;
          } catch (S) {
            A(e, e.return, S);
          }
      }
      break;
    case 6:
      if (Ne(n, e), De(e), r & 4) {
        if (e.stateNode === null)
          throw Error(y(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (S) {
          A(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Ne(n, e), De(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        try {
          Ut(n.containerInfo);
        } catch (S) {
          A(e, e.return, S);
        }
      break;
    case 4:
      Ne(n, e), De(e);
      break;
    case 13:
      Ne(n, e), De(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ru = Q())), r & 4 && Hi(e);
      break;
    case 22:
      if (m = t !== null && t.memoizedState !== null, e.mode & 1 ? (re = (c = re) || m, Ne(n, e), re = c) : Ne(n, e), De(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1)
          for (k = e, m = e.child; m !== null; ) {
            for (h = k = m; k !== null; ) {
              switch (p = k, g = p.child, p.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Lt(4, p, p.return);
                  break;
                case 1:
                  Qn(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    r = p, t = p.return;
                    try {
                      n = r, w.props = n.memoizedProps, w.state = n.memoizedState, w.componentWillUnmount();
                    } catch (S) {
                      A(r, t, S);
                    }
                  }
                  break;
                case 5:
                  Qn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Ki(h);
                    continue;
                  }
              }
              g !== null ? (g.return = p, k = g) : Ki(h);
            }
            m = m.sibling;
          }
        e:
          for (m = null, h = e; ; ) {
            if (h.tag === 5) {
              if (m === null) {
                m = h;
                try {
                  l = h.stateNode, c ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = h.stateNode, s = h.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Ls("display", u));
                } catch (S) {
                  A(e, e.return, S);
                }
              }
            } else if (h.tag === 6) {
              if (m === null)
                try {
                  h.stateNode.nodeValue = c ? "" : h.memoizedProps;
                } catch (S) {
                  A(e, e.return, S);
                }
            } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
              h.child.return = h, h = h.child;
              continue;
            }
            if (h === e)
              break e;
            for (; h.sibling === null; ) {
              if (h.return === null || h.return === e)
                break e;
              m === h && (m = null), h = h.return;
            }
            m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
          }
      }
      break;
    case 19:
      Ne(n, e), De(e), r & 4 && Hi(e);
      break;
    case 21:
      break;
    default:
      Ne(
        n,
        e
      ), De(e);
  }
}
function De(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (tc(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Dt(l, ""), r.flags &= -33);
          var o = Bi(e);
          Vo(e, o, l);
          break;
        case 3:
        case 4:
          var u = r.stateNode.containerInfo, i = Bi(e);
          $o(e, i, u);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      A(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function Vd(e, n, t) {
  k = e, oc(e);
}
function oc(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k, o = l.child;
    if (l.tag === 22 && r) {
      var u = l.memoizedState !== null || yr;
      if (!u) {
        var i = l.alternate, s = i !== null && i.memoizedState !== null || re;
        i = yr;
        var c = re;
        if (yr = u, (re = s) && !c)
          for (k = l; k !== null; )
            u = k, s = u.child, u.tag === 22 && u.memoizedState !== null ? Yi(l) : s !== null ? (s.return = u, k = s) : Yi(l);
        for (; o !== null; )
          k = o, oc(o), o = o.sibling;
        k = l, yr = i, re = c;
      }
      Qi(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? (o.return = l, k = o) : Qi(e);
  }
}
function Qi(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || fl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null)
                  r.componentDidMount();
                else {
                  var l = n.elementType === n.type ? t.memoizedProps : ze(n.type, t.memoizedProps);
                  r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = n.updateQueue;
              o !== null && zi(n, o, r);
              break;
            case 3:
              var u = n.updateQueue;
              if (u !== null) {
                if (t = null, n.child !== null)
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                zi(n, u, t);
              }
              break;
            case 5:
              var i = n.stateNode;
              if (t === null && n.flags & 4) {
                t = i;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var c = n.alternate;
                if (c !== null) {
                  var m = c.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Ut(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || n.flags & 512 && Uo(n);
      } catch (p) {
        A(n, n.return, p);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (t = n.sibling, t !== null) {
      t.return = n.return, k = t;
      break;
    }
    k = n.return;
  }
}
function Ki(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      t.return = n.return, k = t;
      break;
    }
    k = n.return;
  }
}
function Yi(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            fl(4, n);
          } catch (s) {
            A(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              A(n, l, s);
            }
          }
          var o = n.return;
          try {
            Uo(n);
          } catch (s) {
            A(n, o, s);
          }
          break;
        case 5:
          var u = n.return;
          try {
            Uo(n);
          } catch (s) {
            A(n, u, s);
          }
      }
    } catch (s) {
      A(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var i = n.sibling;
    if (i !== null) {
      i.return = n.return, k = i;
      break;
    }
    k = n.return;
  }
}
var Ad = Math.ceil, Jr = Ge.ReactCurrentDispatcher, Tu = Ge.ReactCurrentOwner, Ce = Ge.ReactCurrentBatchConfig, O = 0, J = null, K = null, b = 0, he = 0, Kn = mn(0), X = 0, Gt = null, Tn = 0, dl = 0, Ou = 0, Tt = null, ae = null, Ru = 0, ot = 1 / 0, Ve = null, qr = !1, Ao = null, an = null, gr = !1, tn = null, br = 0, Ot = 0, Wo = null, Lr = -1, Tr = 0;
function ue() {
  return O & 6 ? Q() : Lr !== -1 ? Lr : Lr = Q();
}
function cn(e) {
  return e.mode & 1 ? O & 2 && b !== 0 ? b & -b : xd.transition !== null ? (Tr === 0 && (Tr = Ws()), Tr) : (e = R, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Gs(e.type)), e) : 1;
}
function Re(e, n, t, r) {
  if (50 < Ot)
    throw Ot = 0, Wo = null, Error(y(185));
  Jt(e, t, r), (!(O & 2) || e !== J) && (e === J && (!(O & 2) && (dl |= t), X === 4 && en(e, b)), pe(e, r), t === 1 && O === 0 && !(n.mode & 1) && (ot = Q() + 500, sl && vn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  xf(e, n);
  var r = Ir(e, e === J ? b : 0);
  if (r === 0)
    t !== null && ti(t), e.callbackNode = null, e.callbackPriority = 0;
  else if (n = r & -r, e.callbackPriority !== n) {
    if (t != null && ti(t), n === 1)
      e.tag === 0 ? Cd(Xi.bind(null, e)) : ha(Xi.bind(null, e)), wd(function() {
        !(O & 6) && vn();
      }), t = null;
    else {
      switch (Bs(r)) {
        case 1:
          t = lu;
          break;
        case 4:
          t = Vs;
          break;
        case 16:
          t = jr;
          break;
        case 536870912:
          t = As;
          break;
        default:
          t = jr;
      }
      t = pc(t, uc.bind(null, e));
    }
    e.callbackPriority = n, e.callbackNode = t;
  }
}
function uc(e, n) {
  if (Lr = -1, Tr = 0, O & 6)
    throw Error(y(327));
  var t = e.callbackNode;
  if (qn() && e.callbackNode !== t)
    return null;
  var r = Ir(e, e === J ? b : 0);
  if (r === 0)
    return null;
  if (r & 30 || r & e.expiredLanes || n)
    n = el(e, r);
  else {
    n = r;
    var l = O;
    O |= 2;
    var o = sc();
    (J !== e || b !== n) && (Ve = null, ot = Q() + 500, xn(e, n));
    do
      try {
        Hd();
        break;
      } catch (i) {
        ic(e, i);
      }
    while (1);
    yu(), Jr.current = o, O = l, K !== null ? n = 0 : (J = null, b = 0, n = X);
  }
  if (n !== 0) {
    if (n === 2 && (l = mo(e), l !== 0 && (r = l, n = Bo(e, l))), n === 1)
      throw t = Gt, xn(e, 0), en(e, r), pe(e, Q()), t;
    if (n === 6)
      en(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Wd(l) && (n = el(e, r), n === 2 && (o = mo(e), o !== 0 && (r = o, n = Bo(e, o))), n === 1))
        throw t = Gt, xn(e, 0), en(e, r), pe(e, Q()), t;
      switch (e.finishedWork = l, e.finishedLanes = r, n) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          Sn(e, ae, Ve);
          break;
        case 3:
          if (en(e, r), (r & 130023424) === r && (n = Ru + 500 - Q(), 10 < n)) {
            if (Ir(e, 0) !== 0)
              break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ue(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Co(Sn.bind(null, e, ae, Ve), n);
            break;
          }
          Sn(e, ae, Ve);
          break;
        case 4:
          if (en(e, r), (r & 4194240) === r)
            break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var u = 31 - Oe(r);
            o = 1 << u, u = n[u], u > l && (l = u), r &= ~o;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ad(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Co(Sn.bind(null, e, ae, Ve), r);
            break;
          }
          Sn(e, ae, Ve);
          break;
        case 5:
          Sn(e, ae, Ve);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === t ? uc.bind(null, e) : null;
}
function Bo(e, n) {
  var t = Tt;
  return e.current.memoizedState.isDehydrated && (xn(e, n).flags |= 256), e = el(e, n), e !== 2 && (n = ae, ae = t, n !== null && Ho(n)), e;
}
function Ho(e) {
  ae === null ? ae = e : ae.push.apply(ae, e);
}
function Wd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && (t = t.stores, t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r], o = l.getSnapshot;
          l = l.value;
          try {
            if (!Me(o(), l))
              return !1;
          } catch {
            return !1;
          }
        }
    }
    if (t = n.child, n.subtreeFlags & 16384 && t !== null)
      t.return = n, n = t;
    else {
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return !0;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }
  return !0;
}
function en(e, n) {
  for (n &= ~Ou, n &= ~dl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
    var t = 31 - Oe(n), r = 1 << t;
    e[t] = -1, n &= ~r;
  }
}
function Xi(e) {
  if (O & 6)
    throw Error(y(327));
  qn();
  var n = Ir(e, 0);
  if (!(n & 1))
    return pe(e, Q()), null;
  var t = el(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = mo(e);
    r !== 0 && (n = r, t = Bo(e, r));
  }
  if (t === 1)
    throw t = Gt, xn(e, 0), en(e, n), pe(e, Q()), t;
  if (t === 6)
    throw Error(y(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = n, Sn(e, ae, Ve), pe(e, Q()), null;
}
function Mu(e, n) {
  var t = O;
  O |= 1;
  try {
    return e(n);
  } finally {
    O = t, O === 0 && (ot = Q() + 500, sl && vn());
  }
}
function On(e) {
  tn !== null && tn.tag === 0 && !(O & 6) && qn();
  var n = O;
  O |= 1;
  var t = Ce.transition, r = R;
  try {
    if (Ce.transition = null, R = 1, e)
      return e();
  } finally {
    R = r, Ce.transition = t, O = n, !(O & 6) && vn();
  }
}
function Du() {
  he = Kn.current, j(Kn);
}
function xn(e, n) {
  e.finishedWork = null, e.finishedLanes = 0;
  var t = e.timeoutHandle;
  if (t !== -1 && (e.timeoutHandle = -1, gd(t)), K !== null)
    for (t = K.return; t !== null; ) {
      var r = t;
      switch (hu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Ar();
          break;
        case 3:
          rt(), j(fe), j(le), Cu();
          break;
        case 5:
          Eu(r);
          break;
        case 4:
          rt();
          break;
        case 13:
          j(U);
          break;
        case 19:
          j(U);
          break;
        case 10:
          gu(r.type._context);
          break;
        case 22:
        case 23:
          Du();
      }
      t = t.return;
    }
  if (J = e, K = e = fn(e.current, null), b = he = n, X = 0, Gt = null, Ou = dl = Tn = 0, ae = Tt = null, En !== null) {
    for (n = 0; n < En.length; n++)
      if (t = En[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, o = t.pending;
        if (o !== null) {
          var u = o.next;
          o.next = l, r.next = u;
        }
        t.pending = r;
      }
    En = null;
  }
  return e;
}
function ic(e, n) {
  do {
    var t = K;
    try {
      if (yu(), Pr.current = Zr, Gr) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        Gr = !1;
      }
      if (Ln = 0, Z = Y = $ = null, zt = !1, Kt = 0, Tu.current = null, t === null || t.return === null) {
        X = 1, Gt = n, K = null;
        break;
      }
      e: {
        var o = e, u = t.return, i = t, s = n;
        if (n = b, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = i, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var g = ji(u);
          if (g !== null) {
            g.flags &= -257, Ii(g, u, i, o, n), g.mode & 1 && Di(o, c, n), n = g, s = c;
            var w = n.updateQueue;
            if (w === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), n.updateQueue = S;
            } else
              w.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              Di(o, c, n), ju();
              break e;
            }
            s = Error(y(426));
          }
        } else if (F && i.mode & 1) {
          var I = ji(u);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), Ii(I, u, i, o, n), mu(lt(s, i));
            break e;
          }
        }
        o = s = lt(s, i), X !== 4 && (X = 2), Tt === null ? Tt = [o] : Tt.push(o), o = u;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, n &= -n, o.lanes |= n;
              var f = Ha(o, s, n);
              Ni(o, f);
              break e;
            case 1:
              i = s;
              var a = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (an === null || !an.has(d)))) {
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var v = Qa(o, i, n);
                Ni(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      cc(t);
    } catch (E) {
      n = E, K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (1);
}
function sc() {
  var e = Jr.current;
  return Jr.current = Zr, e === null ? Zr : e;
}
function ju() {
  (X === 0 || X === 3 || X === 2) && (X = 4), J === null || !(Tn & 268435455) && !(dl & 268435455) || en(J, b);
}
function el(e, n) {
  var t = O;
  O |= 2;
  var r = sc();
  (J !== e || b !== n) && (Ve = null, xn(e, n));
  do
    try {
      Bd();
      break;
    } catch (l) {
      ic(e, l);
    }
  while (1);
  if (yu(), O = t, Jr.current = r, K !== null)
    throw Error(y(261));
  return J = null, b = 0, X;
}
function Bd() {
  for (; K !== null; )
    ac(K);
}
function Hd() {
  for (; K !== null && !mf(); )
    ac(K);
}
function ac(e) {
  var n = dc(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, n === null ? cc(e) : K = n, Tu.current = null;
}
function cc(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (e = n.return, n.flags & 32768) {
      if (t = Fd(t, n), t !== null) {
        t.flags &= 32767, K = t;
        return;
      }
      if (e !== null)
        e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, K = null;
        return;
      }
    } else if (t = Id(t, n, he), t !== null) {
      K = t;
      return;
    }
    if (n = n.sibling, n !== null) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function Sn(e, n, t) {
  var r = R, l = Ce.transition;
  try {
    Ce.transition = null, R = 1, Qd(e, n, t, r);
  } finally {
    Ce.transition = l, R = r;
  }
  return null;
}
function Qd(e, n, t, r) {
  do
    qn();
  while (tn !== null);
  if (O & 6)
    throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null)
    return null;
  if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
    throw Error(y(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = t.lanes | t.childLanes;
  if (_f(e, o), e === J && (K = J = null, b = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || gr || (gr = !0, pc(jr, function() {
    return qn(), null;
  })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
    o = Ce.transition, Ce.transition = null;
    var u = R;
    R = 1;
    var i = O;
    O |= 4, Tu.current = null, $d(e, t), lc(t, e), fd(ko), Fr = !!So, ko = So = null, e.current = t, Vd(t), vf(), O = i, R = u, Ce.transition = o;
  } else
    e.current = t;
  if (gr && (gr = !1, tn = e, br = l), o = e.pendingLanes, o === 0 && (an = null), wf(t.stateNode), pe(e, Q()), n !== null)
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (qr)
    throw qr = !1, e = Ao, Ao = null, e;
  return br & 1 && e.tag !== 0 && qn(), o = e.pendingLanes, o & 1 ? e === Wo ? Ot++ : (Ot = 0, Wo = e) : Ot = 0, vn(), null;
}
function qn() {
  if (tn !== null) {
    var e = Bs(br), n = Ce.transition, t = R;
    try {
      if (Ce.transition = null, R = 16 > e ? 16 : e, tn === null)
        var r = !1;
      else {
        if (e = tn, tn = null, br = 0, O & 6)
          throw Error(y(331));
        var l = O;
        for (O |= 4, k = e.current; k !== null; ) {
          var o = k, u = o.child;
          if (k.flags & 16) {
            var i = o.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (k = c; k !== null; ) {
                  var m = k;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lt(8, m, o);
                  }
                  var h = m.child;
                  if (h !== null)
                    h.return = m, k = h;
                  else
                    for (; k !== null; ) {
                      m = k;
                      var p = m.sibling, g = m.return;
                      if (nc(m), m === c) {
                        k = null;
                        break;
                      }
                      if (p !== null) {
                        p.return = g, k = p;
                        break;
                      }
                      k = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var S = w.child;
                if (S !== null) {
                  w.child = null;
                  do {
                    var I = S.sibling;
                    S.sibling = null, S = I;
                  } while (S !== null);
                }
              }
              k = o;
            }
          }
          if (o.subtreeFlags & 2064 && u !== null)
            u.return = o, k = u;
          else
            e:
              for (; k !== null; ) {
                if (o = k, o.flags & 2048)
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lt(9, o, o.return);
                  }
                var f = o.sibling;
                if (f !== null) {
                  f.return = o.return, k = f;
                  break e;
                }
                k = o.return;
              }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          u = k;
          var d = u.child;
          if (u.subtreeFlags & 2064 && d !== null)
            d.return = u, k = d;
          else
            e:
              for (u = a; k !== null; ) {
                if (i = k, i.flags & 2048)
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        fl(9, i);
                    }
                  } catch (E) {
                    A(i, i.return, E);
                  }
                if (i === u) {
                  k = null;
                  break e;
                }
                var v = i.sibling;
                if (v !== null) {
                  v.return = i.return, k = v;
                  break e;
                }
                k = i.return;
              }
        }
        if (O = l, vn(), Ue && typeof Ue.onPostCommitFiberRoot == "function")
          try {
            Ue.onPostCommitFiberRoot(rl, e);
          } catch {
          }
        r = !0;
      }
      return r;
    } finally {
      R = t, Ce.transition = n;
    }
  }
  return !1;
}
function Gi(e, n, t) {
  n = lt(t, n), n = Ha(e, n, 1), e = sn(e, n, 1), n = ue(), e !== null && (Jt(e, 1, n), pe(e, n));
}
function A(e, n, t) {
  if (e.tag === 3)
    Gi(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Gi(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (an === null || !an.has(r))) {
          e = lt(t, e), e = Qa(n, e, 1), n = sn(n, e, 1), e = ue(), n !== null && (Jt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function Kd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n), n = ue(), e.pingedLanes |= e.suspendedLanes & t, J === e && (b & t) === t && (X === 4 || X === 3 && (b & 130023424) === b && 500 > Q() - Ru ? xn(e, 0) : Ou |= t), pe(e, n);
}
function fc(e, n) {
  n === 0 && (e.mode & 1 ? (n = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : n = 1);
  var t = ue();
  e = Ye(e, n), e !== null && (Jt(e, n, t), pe(e, t));
}
function Yd(e) {
  var n = e.memoizedState, t = 0;
  n !== null && (t = n.retryLane), fc(e, t);
}
function Xd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), fc(e, t);
}
var dc;
dc = function(e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current)
      ce = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128))
        return ce = !1, jd(e, n, t);
      ce = !!(e.flags & 131072);
    }
  else
    ce = !1, F && n.flags & 1048576 && ma(n, Hr, n.index);
  switch (n.lanes = 0, n.tag) {
    case 2:
      var r = n.type;
      zr(e, n), e = n.pendingProps;
      var l = et(n, le.current);
      Jn(n, t), l = _u(null, n, r, e, l, t);
      var o = Pu();
      return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, de(r) ? (o = !0, Wr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Su(n), l.updater = al, n.stateNode = l, l._reactInternals = n, To(n, r, e, t), n = Mo(null, n, r, !0, o, t)) : (n.tag = 0, F && o && pu(n), oe(null, n, l, t), n = n.child), n;
    case 16:
      r = n.elementType;
      e: {
        switch (zr(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Zd(r), e = ze(r, e), l) {
          case 0:
            n = Ro(null, n, r, e, t);
            break e;
          case 1:
            n = $i(null, n, r, e, t);
            break e;
          case 11:
            n = Fi(null, n, r, e, t);
            break e;
          case 14:
            n = Ui(null, n, r, ze(r.type, e), t);
            break e;
        }
        throw Error(y(
          306,
          r,
          ""
        ));
      }
      return n;
    case 0:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Ro(e, n, r, l, t);
    case 1:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), $i(e, n, r, l, t);
    case 3:
      e: {
        if (Ga(n), e === null)
          throw Error(y(387));
        r = n.pendingProps, o = n.memoizedState, l = o.element, wa(e, n), Yr(n, r, null, t);
        var u = n.memoizedState;
        if (r = u.element, o.isDehydrated)
          if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
            l = lt(Error(y(423)), n), n = Vi(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = lt(Error(y(424)), n), n = Vi(e, n, r, t, l);
            break e;
          } else
            for (me = un(n.stateNode.containerInfo.firstChild), ve = n, F = !0, Te = null, t = Ca(n, null, r, t), n.child = t; t; )
              t.flags = t.flags & -3 | 4096, t = t.sibling;
        else {
          if (nt(), r === l) {
            n = Xe(e, n, t);
            break e;
          }
          oe(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return xa(n), e === null && No(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, Eo(r, l) ? u = null : o !== null && Eo(r, o) && (n.flags |= 32), Xa(e, n), oe(e, n, u, t), n.child;
    case 6:
      return e === null && No(n), null;
    case 13:
      return Za(e, n, t);
    case 4:
      return ku(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = tt(n, null, r, t) : oe(e, n, r, t), n.child;
    case 11:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), Fi(e, n, r, l, t);
    case 7:
      return oe(e, n, n.pendingProps, t), n.child;
    case 8:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return oe(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, u = l.value, M(Qr, r._currentValue), r._currentValue = u, o !== null)
          if (Me(o.value, u)) {
            if (o.children === l.children && !fe.current) {
              n = Xe(e, n, t);
              break e;
            }
          } else
            for (o = n.child, o !== null && (o.return = n); o !== null; ) {
              var i = o.dependencies;
              if (i !== null) {
                u = o.child;
                for (var s = i.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      s = He(-1, t & -t), s.tag = 2;
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var m = c.pending;
                        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                      }
                    }
                    o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), zo(
                      o.return,
                      t,
                      n
                    ), i.lanes |= t;
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10)
                u = o.type === n.type ? null : o.child;
              else if (o.tag === 18) {
                if (u = o.return, u === null)
                  throw Error(y(341));
                u.lanes |= t, i = u.alternate, i !== null && (i.lanes |= t), zo(u, t, n), u = o.sibling;
              } else
                u = o.child;
              if (u !== null)
                u.return = o;
              else
                for (u = o; u !== null; ) {
                  if (u === n) {
                    u = null;
                    break;
                  }
                  if (o = u.sibling, o !== null) {
                    o.return = u.return, u = o;
                    break;
                  }
                  u = u.return;
                }
              o = u;
            }
        oe(e, n, l.children, t), n = n.child;
      }
      return n;
    case 9:
      return l = n.type, r = n.pendingProps.children, Jn(n, t), l = xe(l), r = r(l), n.flags |= 1, oe(e, n, r, t), n.child;
    case 14:
      return r = n.type, l = ze(r, n.pendingProps), l = ze(r.type, l), Ui(e, n, r, l, t);
    case 15:
      return Ka(e, n, n.type, n.pendingProps, t);
    case 17:
      return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ze(r, l), zr(e, n), n.tag = 1, de(r) ? (e = !0, Wr(n)) : e = !1, Jn(n, t), ka(n, r, l), To(n, r, l, t), Mo(null, n, r, !0, e, t);
    case 19:
      return Ja(e, n, t);
    case 22:
      return Ya(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function pc(e, n) {
  return $s(e, n);
}
function Gd(e, n, t, r) {
  this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ee(e, n, t, r) {
  return new Gd(e, n, t, r);
}
function Iu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Zd(e) {
  if (typeof e == "function")
    return Iu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === nu)
      return 11;
    if (e === tu)
      return 14;
  }
  return 2;
}
function fn(e, n) {
  var t = e.alternate;
  return t === null ? (t = Ee(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
}
function Or(e, n, t, r, l, o) {
  var u = 2;
  if (r = e, typeof e == "function")
    Iu(e) && (u = 1);
  else if (typeof e == "string")
    u = 5;
  else
    e:
      switch (e) {
        case In:
          return _n(t.children, l, o, n);
        case eu:
          u = 8, l |= 8;
          break;
        case bl:
          return e = Ee(12, t, n, l | 2), e.elementType = bl, e.lanes = o, e;
        case eo:
          return e = Ee(13, t, n, l), e.elementType = eo, e.lanes = o, e;
        case no:
          return e = Ee(19, t, n, l), e.elementType = no, e.lanes = o, e;
        case Es:
          return pl(t, l, o, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ss:
                u = 10;
                break e;
              case ks:
                u = 9;
                break e;
              case nu:
                u = 11;
                break e;
              case tu:
                u = 14;
                break e;
              case Je:
                u = 16, r = null;
                break e;
            }
          throw Error(y(130, e == null ? e : typeof e, ""));
      }
  return n = Ee(u, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
}
function _n(e, n, t, r) {
  return e = Ee(7, e, r, n), e.lanes = t, e;
}
function pl(e, n, t, r) {
  return e = Ee(22, e, r, n), e.elementType = Es, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
}
function Ql(e, n, t) {
  return e = Ee(6, e, null, n), e.lanes = t, e;
}
function Kl(e, n, t) {
  return n = Ee(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
}
function Jd(e, n, t, r, l) {
  this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Pl(0), this.expirationTimes = Pl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Fu(e, n, t, r, l, o, u, i, s) {
  return e = new Jd(e, n, t, i, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = Ee(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Su(o), e;
}
function qd(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: jn, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
}
function hc(e) {
  if (!e)
    return pn;
  e = e._reactInternals;
  e: {
    if (Mn(e) !== e || e.tag !== 1)
      throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t))
      return pa(e, t, n);
  }
  return n;
}
function mc(e, n, t, r, l, o, u, i, s) {
  return e = Fu(t, r, !0, e, l, o, u, i, s), e.context = hc(null), t = e.current, r = ue(), l = cn(t), o = He(r, l), o.callback = n ?? null, sn(t, o, l), e.current.lanes = l, Jt(e, l, r), pe(e, r), e;
}
function hl(e, n, t, r) {
  var l = n.current, o = ue(), u = cn(l);
  return t = hc(t), n.context === null ? n.context = t : n.pendingContext = t, n = He(o, u), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = sn(l, n, u), e !== null && (Re(e, l, u, o), _r(e, l, u)), u;
}
function nl(e) {
  if (e = e.current, !e.child)
    return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Zi(e, n) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function Uu(e, n) {
  Zi(e, n), (e = e.alternate) && Zi(e, n);
}
function bd() {
  return null;
}
var vc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function $u(e) {
  this._internalRoot = e;
}
ml.prototype.render = $u.prototype.render = function(e) {
  var n = this._internalRoot;
  if (n === null)
    throw Error(y(409));
  hl(e, n, null, null);
};
ml.prototype.unmount = $u.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    On(function() {
      hl(null, e, null, null);
    }), n[Ke] = null;
  }
};
function ml(e) {
  this._internalRoot = e;
}
ml.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var n = Ks();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < be.length && n !== 0 && n < be[t].priority; t++)
      ;
    be.splice(t, 0, e), t === 0 && Xs(e);
  }
};
function Vu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function vl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Ji() {
}
function ep(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var c = nl(u);
        o.call(c);
      };
    }
    var u = mc(n, r, e, 0, null, !1, !1, "", Ji);
    return e._reactRootContainer = u, e[Ke] = u.current, At(e.nodeType === 8 ? e.parentNode : e), On(), u;
  }
  for (; l = e.lastChild; )
    e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = nl(s);
      i.call(c);
    };
  }
  var s = Fu(e, 0, !1, null, null, !1, !1, "", Ji);
  return e._reactRootContainer = s, e[Ke] = s.current, At(e.nodeType === 8 ? e.parentNode : e), On(function() {
    hl(n, s, t, r);
  }), s;
}
function yl(e, n, t, r, l) {
  var o = t._reactRootContainer;
  if (o) {
    var u = o;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var s = nl(u);
        i.call(s);
      };
    }
    hl(n, u, e, l);
  } else
    u = ep(t, n, e, l, r);
  return nl(u);
}
Hs = function(e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = kt(n.pendingLanes);
        t !== 0 && (ou(n, t | 1), pe(n, Q()), !(O & 6) && (ot = Q() + 500, vn()));
      }
      break;
    case 13:
      On(function() {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          Re(r, e, 1, l);
        }
      }), Uu(e, 1);
  }
};
uu = function(e) {
  if (e.tag === 13) {
    var n = Ye(e, 134217728);
    if (n !== null) {
      var t = ue();
      Re(n, e, 134217728, t);
    }
    Uu(e, 134217728);
  }
};
Qs = function(e) {
  if (e.tag === 13) {
    var n = cn(e), t = Ye(e, n);
    if (t !== null) {
      var r = ue();
      Re(t, e, n, r);
    }
    Uu(e, n);
  }
};
Ks = function() {
  return R;
};
Ys = function(e, n) {
  var t = R;
  try {
    return R = e, n();
  } finally {
    R = t;
  }
};
fo = function(e, n, t) {
  switch (n) {
    case "input":
      if (lo(e, t), n = t.name, t.type === "radio" && n != null) {
        for (t = e; t.parentNode; )
          t = t.parentNode;
        for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l)
              throw Error(y(90));
            xs(r), lo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ps(e, t);
      break;
    case "select":
      n = t.value, n != null && Yn(e, !!t.multiple, n, !1);
  }
};
Ms = Mu;
Ds = On;
var np = { usingClientEntryPoint: !1, Events: [bt, Vn, il, Os, Rs, Mu] }, gt = { findFiberByHostInstance: kn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, tp = { bundleType: gt.bundleType, version: gt.version, rendererPackageName: gt.rendererPackageName, rendererConfig: gt.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ge.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Fs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: gt.findFiberByHostInstance || bd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wr.isDisabled && wr.supportsFiber)
    try {
      rl = wr.inject(tp), Ue = wr;
    } catch {
    }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
ge.createPortal = function(e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vu(n))
    throw Error(y(200));
  return qd(e, n, null, t);
};
ge.createRoot = function(e, n) {
  if (!Vu(e))
    throw Error(y(299));
  var t = !1, r = "", l = vc;
  return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = Fu(e, 1, !1, null, null, t, !1, r, l), e[Ke] = n.current, At(e.nodeType === 8 ? e.parentNode : e), new $u(n);
};
ge.findDOMNode = function(e) {
  if (e == null)
    return null;
  if (e.nodeType === 1)
    return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
  return e = Fs(n), e = e === null ? null : e.stateNode, e;
};
ge.flushSync = function(e) {
  return On(e);
};
ge.hydrate = function(e, n, t) {
  if (!vl(n))
    throw Error(y(200));
  return yl(null, e, n, !0, t);
};
ge.hydrateRoot = function(e, n, t) {
  if (!Vu(e))
    throw Error(y(405));
  var r = t != null && t.hydratedSources || null, l = !1, o = "", u = vc;
  if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), n = mc(n, null, e, 1, t ?? null, l, !1, o, u), e[Ke] = n.current, At(e), r)
    for (e = 0; e < r.length; e++)
      t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
        t,
        l
      );
  return new ml(n);
};
ge.render = function(e, n, t) {
  if (!vl(n))
    throw Error(y(200));
  return yl(null, e, n, !1, t);
};
ge.unmountComponentAtNode = function(e) {
  if (!vl(e))
    throw Error(y(40));
  return e._reactRootContainer ? (On(function() {
    yl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ke] = null;
    });
  }), !0) : !1;
};
ge.unstable_batchedUpdates = Mu;
ge.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
  if (!vl(t))
    throw Error(y(200));
  if (e == null || e._reactInternals === void 0)
    throw Error(y(38));
  return yl(e, n, t, !1, r);
};
ge.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (t) {
        console.error(t);
      }
  }
  n(), e.exports = ge;
})(qc);
const rp = /* @__PURE__ */ is(Zl);
/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qo() {
  return Qo = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Qo.apply(this, arguments);
}
var qi;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(qi || (qi = {}));
function Pn(e, n) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(n);
}
function bi(e) {
  let {
    pathname: n = "/",
    search: t = "",
    hash: r = ""
  } = e;
  return t && t !== "?" && (n += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (n += r.charAt(0) === "#" ? r : "#" + r), n;
}
function yc(e) {
  let n = {};
  if (e) {
    let t = e.indexOf("#");
    t >= 0 && (n.hash = e.substr(t), e = e.substr(0, t));
    let r = e.indexOf("?");
    r >= 0 && (n.search = e.substr(r), e = e.substr(0, r)), e && (n.pathname = e);
  }
  return n;
}
var es;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(es || (es = {}));
function lp(e, n) {
  n === void 0 && (n = "/");
  let {
    pathname: t,
    search: r = "",
    hash: l = ""
  } = typeof e == "string" ? yc(e) : e;
  return {
    pathname: t ? t.startsWith("/") ? t : op(t, n) : n,
    search: up(r),
    hash: ip(l)
  };
}
function op(e, n) {
  let t = n.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((l) => {
    l === ".." ? t.length > 1 && t.pop() : l !== "." && t.push(l);
  }), t.length > 1 ? t.join("/") : "/";
}
function Yl(e, n, t, r) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + n + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + t + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function gc(e) {
  return e.filter((n, t) => t === 0 || n.route.path && n.route.path.length > 0);
}
function wc(e, n, t, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string" ? l = yc(e) : (l = Qo({}, e), Pn(!l.pathname || !l.pathname.includes("?"), Yl("?", "pathname", "search", l)), Pn(!l.pathname || !l.pathname.includes("#"), Yl("#", "pathname", "hash", l)), Pn(!l.search || !l.search.includes("#"), Yl("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "", u = o ? "/" : l.pathname, i;
  if (r || u == null)
    i = t;
  else {
    let h = n.length - 1;
    if (u.startsWith("..")) {
      let p = u.split("/");
      for (; p[0] === ".."; )
        p.shift(), h -= 1;
      l.pathname = p.join("/");
    }
    i = h >= 0 ? n[h] : "/";
  }
  let s = lp(l, i), c = u && u !== "/" && u.endsWith("/"), m = (o || u === ".") && t.endsWith("/");
  return !s.pathname.endsWith("/") && (c || m) && (s.pathname += "/"), s;
}
const Sc = (e) => e.join("/").replace(/\/\/+/g, "/"), up = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, ip = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, sp = ["post", "put", "patch", "delete"];
[...sp];
/**
 * React Router v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ap(e, n) {
  return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
}
const cp = typeof Object.is == "function" ? Object.is : ap, {
  useState: fp,
  useEffect: dp,
  useLayoutEffect: pp,
  useDebugValue: hp
} = Gl;
function mp(e, n, t) {
  const r = n(), [{
    inst: l
  }, o] = fp({
    inst: {
      value: r,
      getSnapshot: n
    }
  });
  return pp(() => {
    l.value = r, l.getSnapshot = n, Xl(l) && o({
      inst: l
    });
  }, [e, r, n]), dp(() => (Xl(l) && o({
    inst: l
  }), e(() => {
    Xl(l) && o({
      inst: l
    });
  })), [e]), hp(r), r;
}
function Xl(e) {
  const n = e.getSnapshot, t = e.value;
  try {
    const r = n();
    return !cp(t, r);
  } catch {
    return !0;
  }
}
function vp(e, n, t) {
  return n();
}
const yp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", gp = !yp, wp = gp ? vp : mp;
"useSyncExternalStore" in Gl && ((e) => e.useSyncExternalStore)(Gl);
const kc = /* @__PURE__ */ W.createContext(null), Ec = /* @__PURE__ */ W.createContext(null), Cc = /* @__PURE__ */ W.createContext({
  outlet: null,
  matches: []
});
function Sp(e, n) {
  let {
    relative: t
  } = n === void 0 ? {} : n;
  Au() || Pn(!1);
  let {
    basename: r,
    navigator: l
  } = W.useContext(kc), {
    hash: o,
    pathname: u,
    search: i
  } = xc(e, {
    relative: t
  }), s = u;
  return r !== "/" && (s = u === "/" ? r : Sc([r, u])), l.createHref({
    pathname: s,
    search: i,
    hash: o
  });
}
function Au() {
  return W.useContext(Ec) != null;
}
function Wu() {
  return Au() || Pn(!1), W.useContext(Ec).location;
}
function kp() {
  Au() || Pn(!1);
  let {
    basename: e,
    navigator: n
  } = W.useContext(kc), {
    matches: t
  } = W.useContext(Cc), {
    pathname: r
  } = Wu(), l = JSON.stringify(gc(t).map((i) => i.pathnameBase)), o = W.useRef(!1);
  return W.useEffect(() => {
    o.current = !0;
  }), W.useCallback(function(i, s) {
    if (s === void 0 && (s = {}), !o.current)
      return;
    if (typeof i == "number") {
      n.go(i);
      return;
    }
    let c = wc(i, JSON.parse(l), r, s.relative === "path");
    e !== "/" && (c.pathname = c.pathname === "/" ? e : Sc([e, c.pathname])), (s.replace ? n.replace : n.push)(c, s.state, s);
  }, [e, n, l, r]);
}
function xc(e, n) {
  let {
    relative: t
  } = n === void 0 ? {} : n, {
    matches: r
  } = W.useContext(Cc), {
    pathname: l
  } = Wu(), o = JSON.stringify(gc(r).map((u) => u.pathnameBase));
  return W.useMemo(() => wc(e, JSON.parse(o), l, t === "path"), [e, o, l, t]);
}
var ns;
(function(e) {
  e.UseRevalidator = "useRevalidator";
})(ns || (ns = {}));
var ts;
(function(e) {
  e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator";
})(ts || (ts = {}));
function Ep(e) {
  Pn(!1);
}
var rs;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(rs || (rs = {}));
new Promise(() => {
});
/**
 * React Router DOM v6.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ko() {
  return Ko = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }, Ko.apply(this, arguments);
}
function Cp(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), l, o;
  for (o = 0; o < r.length; o++)
    l = r[o], !(n.indexOf(l) >= 0) && (t[l] = e[l]);
  return t;
}
function xp(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function _p(e, n) {
  return e.button === 0 && // Ignore everything but left clicks
  (!n || n === "_self") && // Let browser handle "target=_blank" etc.
  !xp(e);
}
const Pp = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], ls = /* @__PURE__ */ W.forwardRef(function(n, t) {
  let {
    onClick: r,
    relative: l,
    reloadDocument: o,
    replace: u,
    state: i,
    target: s,
    to: c,
    preventScrollReset: m
  } = n, h = Cp(n, Pp), p = Sp(c, {
    relative: l
  }), g = Np(c, {
    replace: u,
    state: i,
    target: s,
    preventScrollReset: m,
    relative: l
  });
  function w(S) {
    r && r(S), S.defaultPrevented || g(S);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ W.createElement("a", Ko({}, h, {
      href: p,
      onClick: o ? r : w,
      ref: t,
      target: s
    }))
  );
});
var os;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher";
})(os || (os = {}));
var us;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(us || (us = {}));
function Np(e, n) {
  let {
    target: t,
    replace: r,
    state: l,
    preventScrollReset: o,
    relative: u
  } = n === void 0 ? {} : n, i = kp(), s = Wu(), c = xc(e, {
    relative: u
  });
  return W.useCallback((m) => {
    if (_p(m, t)) {
      m.preventDefault();
      let h = r !== void 0 ? r : bi(s) === bi(c);
      i(e, {
        replace: h,
        state: l,
        preventScrollReset: o,
        relative: u
      });
    }
  }, [s, i, c, r, l, t, e, o, u]);
}
const zp = ({ children: e }) => /* @__PURE__ */ Jc("div", { children: [
  /* @__PURE__ */ Fe(ls, { to: "/home", children: "首页" }),
  /* @__PURE__ */ Fe(ls, { to: "/list", children: "列表页" }),
  /* @__PURE__ */ Fe("div", { children: e })
] }), Lp = ({ routeList: e }) => /* @__PURE__ */ Fe(zp, { children: e.map((n) => /* @__PURE__ */ Fe(Ep, { ...n }, n.path)) }), Tp = (e) => /* @__PURE__ */ Fe(vs, { children: /* @__PURE__ */ Fe("h2", { children: "Home" }) }), Op = (e) => /* @__PURE__ */ Fe(vs, { children: /* @__PURE__ */ Fe("h2", { children: "List" }) }), Rp = [
  {
    path: "/home",
    component: Tp,
    exact: !0
    //是否精确匹配
  },
  {
    path: "/list",
    component: Op,
    exact: !0
  }
];
rp.hydrate(
  /* @__PURE__ */ Fe(Lp, { routeList: Rp }),
  document.getElementById("root")
);
