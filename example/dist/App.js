function Re(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : {
            enumerable: !0,
            get: () => r[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Se(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var R = {}, be = {
  get exports() {
    return R;
  },
  set exports(e) {
    R = e;
  }
}, k = {}, a = {}, Pe = {
  get exports() {
    return a;
  },
  set exports(e) {
    a = e;
  }
}, c = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S = Symbol.for("react.element"), je = Symbol.for("react.portal"), Oe = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), ke = Symbol.for("react.profiler"), Le = Symbol.for("react.provider"), Ue = Symbol.for("react.context"), Ie = Symbol.for("react.forward_ref"), De = Symbol.for("react.suspense"), Be = Symbol.for("react.memo"), Me = Symbol.for("react.lazy"), Q = Symbol.iterator;
function Te(e) {
  return e === null || typeof e != "object" ? null : (e = Q && e[Q] || e["@@iterator"], typeof e == "function" ? e : null);
}
var se = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ae = Object.assign, ce = {};
function C(e, t, n) {
  this.props = e, this.context = t, this.refs = ce, this.updater = n || se;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
C.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fe() {
}
fe.prototype = C.prototype;
function W(e, t, n) {
  this.props = e, this.context = t, this.refs = ce, this.updater = n || se;
}
var H = W.prototype = new fe();
H.constructor = W;
ae(H, C.prototype);
H.isPureReactComponent = !0;
var X = Array.isArray, de = Object.prototype.hasOwnProperty, q = { current: null }, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
function he(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null)
    for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      de.call(t, r) && !pe.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1)
    o.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++)
      s[f] = arguments[f + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in u = e.defaultProps, u)
      o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: S, type: e, key: i, ref: l, props: o, _owner: q.current };
}
function Fe(e, t) {
  return { $$typeof: S, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function z(e) {
  return typeof e == "object" && e !== null && e.$$typeof === S;
}
function Ne(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Z = /\/+/g;
function B(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Ne("" + e.key) : t.toString(36);
}
function j(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null)
    l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case S:
          case je:
            l = !0;
        }
    }
  if (l)
    return l = e, o = o(l), e = r === "" ? "." + B(l, 0) : r, X(o) ? (n = "", e != null && (n = e.replace(Z, "$&/") + "/"), j(o, t, n, "", function(f) {
      return f;
    })) : o != null && (z(o) && (o = Fe(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Z, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", X(e))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + B(i, u);
      l += j(i, t, n, s, o);
    }
  else if (s = Te(e), typeof s == "function")
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      i = i.value, s = r + B(i, u++), l += j(i, t, n, s, o);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return l;
}
function P(e, t, n) {
  if (e == null)
    return e;
  var r = [], o = 0;
  return j(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Ve(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var v = { current: null }, O = { transition: null }, Ae = { ReactCurrentDispatcher: v, ReactCurrentBatchConfig: O, ReactCurrentOwner: q };
c.Children = { map: P, forEach: function(e, t, n) {
  P(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return P(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return P(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!z(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
c.Component = C;
c.Fragment = Oe;
c.Profiler = ke;
c.PureComponent = W;
c.StrictMode = $e;
c.Suspense = De;
c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ae;
c.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ae({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = q.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
      var u = e.type.defaultProps;
    for (s in t)
      de.call(t, s) && !pe.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1)
    r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++)
      u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: S, type: e.type, key: o, ref: i, props: r, _owner: l };
};
c.createContext = function(e) {
  return e = { $$typeof: Ue, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Le, _context: e }, e.Consumer = e;
};
c.createElement = he;
c.createFactory = function(e) {
  var t = he.bind(null, e);
  return t.type = e, t;
};
c.createRef = function() {
  return { current: null };
};
c.forwardRef = function(e) {
  return { $$typeof: Ie, render: e };
};
c.isValidElement = z;
c.lazy = function(e) {
  return { $$typeof: Me, _payload: { _status: -1, _result: e }, _init: Ve };
};
c.memo = function(e, t) {
  return { $$typeof: Be, type: e, compare: t === void 0 ? null : t };
};
c.startTransition = function(e) {
  var t = O.transition;
  O.transition = {};
  try {
    e();
  } finally {
    O.transition = t;
  }
};
c.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
c.useCallback = function(e, t) {
  return v.current.useCallback(e, t);
};
c.useContext = function(e) {
  return v.current.useContext(e);
};
c.useDebugValue = function() {
};
c.useDeferredValue = function(e) {
  return v.current.useDeferredValue(e);
};
c.useEffect = function(e, t) {
  return v.current.useEffect(e, t);
};
c.useId = function() {
  return v.current.useId();
};
c.useImperativeHandle = function(e, t, n) {
  return v.current.useImperativeHandle(e, t, n);
};
c.useInsertionEffect = function(e, t) {
  return v.current.useInsertionEffect(e, t);
};
c.useLayoutEffect = function(e, t) {
  return v.current.useLayoutEffect(e, t);
};
c.useMemo = function(e, t) {
  return v.current.useMemo(e, t);
};
c.useReducer = function(e, t, n) {
  return v.current.useReducer(e, t, n);
};
c.useRef = function(e) {
  return v.current.useRef(e);
};
c.useState = function(e) {
  return v.current.useState(e);
};
c.useSyncExternalStore = function(e, t, n) {
  return v.current.useSyncExternalStore(e, t, n);
};
c.useTransition = function() {
  return v.current.useTransition();
};
c.version = "18.2.0";
(function(e) {
  e.exports = c;
})(Pe);
const We = /* @__PURE__ */ Se(a), T = /* @__PURE__ */ Re({
  __proto__: null,
  default: We
}, [a]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He = a, qe = Symbol.for("react.element"), ze = Symbol.for("react.fragment"), Je = Object.prototype.hasOwnProperty, Ge = He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ye = { key: !0, ref: !0, __self: !0, __source: !0 };
function me(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t)
    Je.call(t, r) && !Ye.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in t = e.defaultProps, t)
      o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: qe, type: e, key: i, ref: l, props: o, _owner: Ge.current };
}
k.Fragment = ze;
k.jsx = me;
k.jsxs = me;
(function(e) {
  e.exports = k;
})(be);
const J = R.Fragment, x = R.jsx, Ke = R.jsxs;
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
function F() {
  return F = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, F.apply(this, arguments);
}
var E;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(E || (E = {}));
const ee = "popstate";
function zt(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let {
      pathname: i,
      search: l,
      hash: u
    } = r.location;
    return N(
      "",
      {
        pathname: i,
        search: l,
        hash: u
      },
      // state defaults to `null` because `window.history.state` does
      o.state && o.state.usr || null,
      o.state && o.state.key || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : G(o);
  }
  return Ze(t, n, null, e);
}
function _(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Qe() {
  return Math.random().toString(36).substr(2, 8);
}
function te(e) {
  return {
    usr: e.state,
    key: e.key
  };
}
function N(e, t, n, r) {
  return n === void 0 && (n = null), F({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? L(t) : t, {
    state: n,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || r || Qe()
  });
}
function G(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = ""
  } = e;
  return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function L(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e);
  }
  return t;
}
function Xe(e) {
  let t = typeof window < "u" && typeof window.location < "u" && window.location.origin !== "null" ? window.location.origin : window.location.href, n = typeof e == "string" ? e : G(e);
  return _(t, "No window.location.(origin|href) available to create URL for href: " + n), new URL(n, t);
}
function Ze(e, t, n, r) {
  r === void 0 && (r = {});
  let {
    window: o = document.defaultView,
    v5Compat: i = !1
  } = r, l = o.history, u = E.Pop, s = null;
  function f() {
    u = E.Pop, s && s({
      action: u,
      location: y.location
    });
  }
  function d(p, g) {
    u = E.Push;
    let h = N(y.location, p, g);
    n && n(h, p);
    let D = te(h), b = y.createHref(h);
    try {
      l.pushState(D, "", b);
    } catch {
      o.location.assign(b);
    }
    i && s && s({
      action: u,
      location: y.location
    });
  }
  function m(p, g) {
    u = E.Replace;
    let h = N(y.location, p, g);
    n && n(h, p);
    let D = te(h), b = y.createHref(h);
    l.replaceState(D, "", b), i && s && s({
      action: u,
      location: y.location
    });
  }
  let y = {
    get action() {
      return u;
    },
    get location() {
      return e(o, l);
    },
    listen(p) {
      if (s)
        throw new Error("A history only accepts one active listener");
      return o.addEventListener(ee, f), s = p, () => {
        o.removeEventListener(ee, f), s = null;
      };
    },
    createHref(p) {
      return t(o, p);
    },
    encodeLocation(p) {
      let g = Xe(typeof p == "string" ? p : G(p));
      return {
        pathname: g.pathname,
        search: g.search,
        hash: g.hash
      };
    },
    push: d,
    replace: m,
    go(p) {
      return l.go(p);
    }
  };
  return y;
}
var re;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(re || (re = {}));
function et(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? L(t) : t, o = ge(r.pathname || "/", n);
  if (o == null)
    return null;
  let i = ye(e);
  tt(i);
  let l = null;
  for (let u = 0; l == null && u < i.length; ++u)
    l = ct(
      i[u],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      pt(o)
    );
  return l;
}
function ye(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, u) => {
    let s = {
      relativePath: u === void 0 ? i.path || "" : u,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i
    };
    s.relativePath.startsWith("/") && (_(s.relativePath.startsWith(r), 'Absolute route path "' + s.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), s.relativePath = s.relativePath.slice(r.length));
    let f = w([r, s.relativePath]), d = n.concat(s);
    i.children && i.children.length > 0 && (_(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + f + '".')
    ), ye(i.children, t, d, f)), !(i.path == null && !i.index) && t.push({
      path: f,
      score: st(f, i.index),
      routesMeta: d
    });
  };
  return e.forEach((i, l) => {
    var u;
    if (i.path === "" || !((u = i.path) != null && u.includes("?")))
      o(i, l);
    else
      for (let s of ve(i.path))
        o(i, l, s);
  }), t;
}
function ve(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
  if (r.length === 0)
    return o ? [i, ""] : [i];
  let l = ve(r.join("/")), u = [];
  return u.push(...l.map((s) => s === "" ? i : [i, s].join("/"))), o && u.push(...l), u.map((s) => e.startsWith("/") && s === "" ? "/" : s);
}
function tt(e) {
  e.sort((t, n) => t.score !== n.score ? n.score - t.score : at(t.routesMeta.map((r) => r.childrenIndex), n.routesMeta.map((r) => r.childrenIndex)));
}
const rt = /^:\w+$/, nt = 3, ot = 2, it = 1, lt = 10, ut = -2, ne = (e) => e === "*";
function st(e, t) {
  let n = e.split("/"), r = n.length;
  return n.some(ne) && (r += ut), t && (r += ot), n.filter((o) => !ne(o)).reduce((o, i) => o + (rt.test(i) ? nt : i === "" ? it : lt), r);
}
function at(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function ct(e, t) {
  let {
    routesMeta: n
  } = e, r = {}, o = "/", i = [];
  for (let l = 0; l < n.length; ++l) {
    let u = n[l], s = l === n.length - 1, f = o === "/" ? t : t.slice(o.length) || "/", d = ft({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: s
    }, f);
    if (!d)
      return null;
    Object.assign(r, d.params);
    let m = u.route;
    i.push({
      // TODO: Can this as be avoided?
      params: r,
      pathname: w([o, d.pathname]),
      pathnameBase: mt(w([o, d.pathnameBase])),
      route: m
    }), d.pathnameBase !== "/" && (o = w([o, d.pathnameBase]));
  }
  return i;
}
function ft(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, r] = dt(e.path, e.caseSensitive, e.end), o = t.match(n);
  if (!o)
    return null;
  let i = o[0], l = i.replace(/(.)\/+$/, "$1"), u = o.slice(1);
  return {
    params: r.reduce((f, d, m) => {
      if (d === "*") {
        let y = u[m] || "";
        l = i.slice(0, i.length - y.length).replace(/(.)\/+$/, "$1");
      }
      return f[d] = ht(u[m] || "", d), f;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e
  };
}
function dt(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !0), Y(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let r = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (l, u) => (r.push(u), "/([^\\/]+)"));
  return e.endsWith("*") ? (r.push("*"), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), r];
}
function pt(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return Y(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function ht(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return Y(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
  }
}
function ge(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length, r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Y(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
const w = (e) => e.join("/").replace(/\/\/+/g, "/"), mt = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
class yt {
  constructor(t, n, r, o) {
    o === void 0 && (o = !1), this.status = t, this.statusText = n || "", this.internal = o, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
}
function vt(e) {
  return e instanceof yt;
}
const gt = ["post", "put", "patch", "delete"];
[...gt];
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
function V() {
  return V = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, V.apply(this, arguments);
}
function _t(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const xt = typeof Object.is == "function" ? Object.is : _t, {
  useState: Et,
  useEffect: wt,
  useLayoutEffect: Ct,
  useDebugValue: Rt
} = T;
function St(e, t, n) {
  const r = t(), [{
    inst: o
  }, i] = Et({
    inst: {
      value: r,
      getSnapshot: t
    }
  });
  return Ct(() => {
    o.value = r, o.getSnapshot = t, M(o) && i({
      inst: o
    });
  }, [e, r, t]), wt(() => (M(o) && i({
    inst: o
  }), e(() => {
    M(o) && i({
      inst: o
    });
  })), [e]), Rt(r), r;
}
function M(e) {
  const t = e.getSnapshot, n = e.value;
  try {
    const r = t();
    return !xt(n, r);
  } catch {
    return !0;
  }
}
function bt(e, t, n) {
  return t();
}
const Pt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", jt = !Pt, Ot = jt ? bt : St;
"useSyncExternalStore" in T && ((e) => e.useSyncExternalStore)(T);
const _e = /* @__PURE__ */ a.createContext(null), xe = /* @__PURE__ */ a.createContext(null), Ee = /* @__PURE__ */ a.createContext(null), U = /* @__PURE__ */ a.createContext(null), I = /* @__PURE__ */ a.createContext({
  outlet: null,
  matches: []
}), we = /* @__PURE__ */ a.createContext(null);
function K() {
  return a.useContext(U) != null;
}
function $t() {
  return K() || _(!1), a.useContext(U).location;
}
function kt(e, t) {
  K() || _(!1);
  let {
    navigator: n
  } = a.useContext(Ee), r = a.useContext(xe), {
    matches: o
  } = a.useContext(I), i = o[o.length - 1], l = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let s = $t(), f;
  if (t) {
    var d;
    let h = typeof t == "string" ? L(t) : t;
    u === "/" || (d = h.pathname) != null && d.startsWith(u) || _(!1), f = h;
  } else
    f = s;
  let m = f.pathname || "/", y = u === "/" ? m : m.slice(u.length) || "/", p = et(e, {
    pathname: y
  }), g = Dt(p && p.map((h) => Object.assign({}, h, {
    params: Object.assign({}, l, h.params),
    pathname: w([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      n.encodeLocation ? n.encodeLocation(h.pathname).pathname : h.pathname
    ]),
    pathnameBase: h.pathnameBase === "/" ? u : w([
      u,
      // Re-encode pathnames that were decoded inside matchRoutes
      n.encodeLocation ? n.encodeLocation(h.pathnameBase).pathname : h.pathnameBase
    ])
  })), o, r || void 0);
  return t && g ? /* @__PURE__ */ a.createElement(U.Provider, {
    value: {
      location: V({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, f),
      navigationType: E.Pop
    }
  }, g) : g;
}
function Lt() {
  let e = Ft(), t = vt(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, r = "rgba(200,200,200, 0.5)", o = {
    padding: "0.5rem",
    backgroundColor: r
  }, i = {
    padding: "2px 4px",
    backgroundColor: r
  };
  return /* @__PURE__ */ a.createElement(a.Fragment, null, /* @__PURE__ */ a.createElement("h2", null, "Unhandled Thrown Error!"), /* @__PURE__ */ a.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), n ? /* @__PURE__ */ a.createElement("pre", {
    style: o
  }, n) : null, /* @__PURE__ */ a.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ a.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ a.createElement("code", {
    style: i
  }, "errorElement"), " props on ", /* @__PURE__ */ a.createElement("code", {
    style: i
  }, "<Route>")));
}
class Ut extends a.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ? {
      error: t.error,
      location: t.location
    } : {
      error: t.error || n.error,
      location: n.location
    };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ a.createElement(I.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ a.createElement(we.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function It(e) {
  let {
    routeContext: t,
    match: n,
    children: r
  } = e, o = a.useContext(_e);
  return o && o.static && o.staticContext && n.route.errorElement && (o.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ a.createElement(I.Provider, {
    value: t
  }, r);
}
function Dt(e, t, n) {
  if (t === void 0 && (t = []), e == null)
    if (n != null && n.errors)
      e = n.matches;
    else
      return null;
  let r = e, o = n == null ? void 0 : n.errors;
  if (o != null) {
    let i = r.findIndex((l) => l.route.id && (o == null ? void 0 : o[l.route.id]));
    i >= 0 || _(!1), r = r.slice(0, Math.min(r.length, i + 1));
  }
  return r.reduceRight((i, l, u) => {
    let s = l.route.id ? o == null ? void 0 : o[l.route.id] : null, f = n ? l.route.errorElement || /* @__PURE__ */ a.createElement(Lt, null) : null, d = t.concat(r.slice(0, u + 1)), m = () => /* @__PURE__ */ a.createElement(It, {
      match: l,
      routeContext: {
        outlet: i,
        matches: d
      }
    }, s ? f : l.route.element !== void 0 ? l.route.element : i);
    return n && (l.route.errorElement || u === 0) ? /* @__PURE__ */ a.createElement(Ut, {
      location: n.location,
      component: f,
      error: s,
      children: m(),
      routeContext: {
        outlet: null,
        matches: d
      }
    }) : m();
  }, null);
}
var oe;
(function(e) {
  e.UseRevalidator = "useRevalidator";
})(oe || (oe = {}));
var $;
(function(e) {
  e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator";
})($ || ($ = {}));
function Bt(e) {
  let t = a.useContext(xe);
  return t || _(!1), t;
}
function Mt(e) {
  let t = a.useContext(I);
  return t || _(!1), t;
}
function Tt(e) {
  let t = Mt(), n = t.matches[t.matches.length - 1];
  return n.route.id || _(!1), n.route.id;
}
function Ft() {
  var e;
  let t = a.useContext(we), n = Bt($.UseRouteError), r = Tt($.UseRouteError);
  return t || ((e = n.errors) == null ? void 0 : e[r]);
}
function Ce(e) {
  _(!1);
}
function Jt(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = E.Pop,
    navigator: i,
    static: l = !1
  } = e;
  K() && _(!1);
  let u = t.replace(/^\/*/, "/"), s = a.useMemo(() => ({
    basename: u,
    navigator: i,
    static: l
  }), [u, i, l]);
  typeof r == "string" && (r = L(r));
  let {
    pathname: f = "/",
    search: d = "",
    hash: m = "",
    state: y = null,
    key: p = "default"
  } = r, g = a.useMemo(() => {
    let h = ge(f, u);
    return h == null ? null : {
      pathname: h,
      search: d,
      hash: m,
      state: y,
      key: p
    };
  }, [u, f, d, m, y, p]);
  return g == null ? null : /* @__PURE__ */ a.createElement(Ee.Provider, {
    value: s
  }, /* @__PURE__ */ a.createElement(U.Provider, {
    children: n,
    value: {
      location: g,
      navigationType: o
    }
  }));
}
function Nt(e) {
  let {
    children: t,
    location: n
  } = e, r = a.useContext(_e), o = r && !t ? r.router.routes : A(t);
  return kt(o, n);
}
var ie;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(ie || (ie = {}));
new Promise(() => {
});
function A(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return a.Children.forEach(e, (r, o) => {
    if (!/* @__PURE__ */ a.isValidElement(r))
      return;
    if (r.type === a.Fragment) {
      n.push.apply(n, A(r.props.children, t));
      return;
    }
    r.type !== Ce && _(!1), !r.props.index || !r.props.children || _(!1);
    let i = [...t, o], l = {
      id: r.props.id || i.join("-"),
      caseSensitive: r.props.caseSensitive,
      element: r.props.element,
      index: r.props.index,
      path: r.props.path,
      loader: r.props.loader,
      action: r.props.action,
      errorElement: r.props.errorElement,
      hasErrorBoundary: r.props.errorElement != null,
      shouldRevalidate: r.props.shouldRevalidate,
      handle: r.props.handle
    };
    r.props.children && (l.children = A(r.props.children, i)), n.push(l);
  }), n;
}
const Vt = (e) => /* @__PURE__ */ x(J, { children: /* @__PURE__ */ x("h2", { children: "Home" }) }), At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vt
}, Symbol.toStringTag, { value: "Module" })), Wt = (e) => /* @__PURE__ */ x(J, { children: /* @__PURE__ */ x("h2", { children: "List" }) }), Ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wt
}, Symbol.toStringTag, { value: "Module" })), le = /* @__PURE__ */ Object.assign({ "./pages/Home.jsx": At, "./pages/List.jsx": Ht }), ue = Object.keys(le).map((e) => {
  var n;
  const t = (n = e.match(/\.\/pages\/(.*)\.jsx$/)) == null ? void 0 : n[1];
  return {
    name: t,
    path: t === "Home" ? "/" : `/${t == null ? void 0 : t.toLowerCase()}`,
    component: le[e].default
  };
});
function Gt({ context: e }) {
  return /* @__PURE__ */ Ke(J, { children: [
    /* @__PURE__ */ x("nav", { children: /* @__PURE__ */ x("ul", { children: ue.map(({ name: t, path: n }) => /* @__PURE__ */ x("li", { children: /* @__PURE__ */ x("a", { href: n, children: t }) }, n)) }) }),
    /* @__PURE__ */ x("h1", { children: JSON.stringify(e) || "have no context" }),
    /* @__PURE__ */ x(Nt, { children: ue.map(({ path: t, component: n }) => /* @__PURE__ */ x(Ce, { path: t, element: /* @__PURE__ */ x(n, {}) }, t)) })
  ] });
}
export {
  Gt as A,
  Jt as R,
  E as a,
  G as b,
  zt as c,
  x as j,
  L as p,
  a as r
};
//# sourceMappingURL=App.js.map
