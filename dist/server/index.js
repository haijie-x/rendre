function Bp(e, t) {
  for (var i = 0; i < t.length; i++) {
    const c = t[i];
    if (typeof c != "string" && !Array.isArray(c)) {
      for (const s in c)
        if (s !== "default" && !(s in e)) {
          const m = Object.getOwnPropertyDescriptor(c, s);
          m && Object.defineProperty(e, s, m.get ? m : {
            enumerable: !0,
            get: () => c[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
const Du = {}, Np = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Du
}, Symbol.toStringTag, { value: "Module" }));
function Wp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Mu(e) {
  if (e.__esModule)
    return e;
  var t = e.default;
  if (typeof t == "function") {
    var i = function c() {
      if (this instanceof c) {
        var s = [null];
        s.push.apply(s, arguments);
        var m = Function.bind.apply(t, s);
        return new m();
      }
      return t.apply(this, arguments);
    };
    i.prototype = t.prototype;
  } else
    i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(e).forEach(function(c) {
    var s = Object.getOwnPropertyDescriptor(e, c);
    Object.defineProperty(i, c, s.get ? s : {
      enumerable: !0,
      get: function() {
        return e[c];
      }
    });
  }), i;
}
var co = {}, Yp = {
  get exports() {
    return co;
  },
  set exports(e) {
    co = e;
  }
}, Gp = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var t = {}, i = Symbol("test"), c = Object(i);
  if (typeof i == "string" || Object.prototype.toString.call(i) !== "[object Symbol]" || Object.prototype.toString.call(c) !== "[object Symbol]")
    return !1;
  var s = 42;
  t[i] = s;
  for (i in t)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
    return !1;
  var m = Object.getOwnPropertySymbols(t);
  if (m.length !== 1 || m[0] !== i || !Object.prototype.propertyIsEnumerable.call(t, i))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var h = Object.getOwnPropertyDescriptor(t, i);
    if (h.value !== s || h.enumerable !== !0)
      return !1;
  }
  return !0;
}, qp = Gp, Vp = function() {
  return qp() && !!Symbol.toStringTag;
}, Xp = Object.prototype.toString, Zp = Function.prototype.toString, Jp = /^\s*(?:function)?\*/, Lu = Vp(), Jc = Object.getPrototypeOf, Qp = function() {
  if (!Lu)
    return !1;
  try {
    return Function("return function*() {}")();
  } catch {
  }
}, Qc, Kp = function(t) {
  if (typeof t != "function")
    return !1;
  if (Jp.test(Zp.call(t)))
    return !0;
  if (!Lu) {
    var i = Xp.call(t);
    return i === "[object GeneratorFunction]";
  }
  if (!Jc)
    return !1;
  if (typeof Qc > "u") {
    var c = Qp();
    Qc = c ? Jc(c) : !1;
  }
  return Jc(t) === Qc;
}, lo = {}, ed = {
  get exports() {
    return lo;
  },
  set exports(e) {
    lo = e;
  }
}, Kc, zl;
function nd() {
  if (zl)
    return Kc;
  zl = 1;
  var e = 1e3, t = e * 60, i = t * 60, c = i * 24, s = c * 7, m = c * 365.25;
  Kc = function(b, x) {
    x = x || {};
    var O = typeof b;
    if (O === "string" && b.length > 0)
      return h(b);
    if (O === "number" && isFinite(b))
      return x.long ? w(b) : R(b);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(b)
    );
  };
  function h(b) {
    if (b = String(b), !(b.length > 100)) {
      var x = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        b
      );
      if (x) {
        var O = parseFloat(x[1]), j = (x[2] || "ms").toLowerCase();
        switch (j) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return O * m;
          case "weeks":
          case "week":
          case "w":
            return O * s;
          case "days":
          case "day":
          case "d":
            return O * c;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return O * i;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return O * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return O * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return O;
          default:
            return;
        }
      }
    }
  }
  function R(b) {
    var x = Math.abs(b);
    return x >= c ? Math.round(b / c) + "d" : x >= i ? Math.round(b / i) + "h" : x >= t ? Math.round(b / t) + "m" : x >= e ? Math.round(b / e) + "s" : b + "ms";
  }
  function w(b) {
    var x = Math.abs(b);
    return x >= c ? C(b, x, c, "day") : x >= i ? C(b, x, i, "hour") : x >= t ? C(b, x, t, "minute") : x >= e ? C(b, x, e, "second") : b + " ms";
  }
  function C(b, x, O, j) {
    var I = x >= O * 1.5;
    return Math.round(b / O) + " " + j + (I ? "s" : "");
  }
  return Kc;
}
function td(e) {
  i.debug = i, i.default = i, i.coerce = w, i.disable = m, i.enable = s, i.enabled = h, i.humanize = nd(), i.destroy = C, Object.keys(e).forEach((b) => {
    i[b] = e[b];
  }), i.names = [], i.skips = [], i.formatters = {};
  function t(b) {
    let x = 0;
    for (let O = 0; O < b.length; O++)
      x = (x << 5) - x + b.charCodeAt(O), x |= 0;
    return i.colors[Math.abs(x) % i.colors.length];
  }
  i.selectColor = t;
  function i(b) {
    let x, O = null, j, I;
    function k(..._) {
      if (!k.enabled)
        return;
      const A = k, z = Number(new Date()), N = z - (x || z);
      A.diff = N, A.prev = x, A.curr = z, x = z, _[0] = i.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
      let B = 0;
      _[0] = _[0].replace(/%([a-zA-Z%])/g, (X, me) => {
        if (X === "%%")
          return "%";
        B++;
        const ge = i.formatters[me];
        if (typeof ge == "function") {
          const le = _[B];
          X = ge.call(A, le), _.splice(B, 1), B--;
        }
        return X;
      }), i.formatArgs.call(A, _), (A.log || i.log).apply(A, _);
    }
    return k.namespace = b, k.useColors = i.useColors(), k.color = i.selectColor(b), k.extend = c, k.destroy = i.destroy, Object.defineProperty(k, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => O !== null ? O : (j !== i.namespaces && (j = i.namespaces, I = i.enabled(b)), I),
      set: (_) => {
        O = _;
      }
    }), typeof i.init == "function" && i.init(k), k;
  }
  function c(b, x) {
    const O = i(this.namespace + (typeof x > "u" ? ":" : x) + b);
    return O.log = this.log, O;
  }
  function s(b) {
    i.save(b), i.namespaces = b, i.names = [], i.skips = [];
    let x;
    const O = (typeof b == "string" ? b : "").split(/[\s,]+/), j = O.length;
    for (x = 0; x < j; x++)
      O[x] && (b = O[x].replace(/\*/g, ".*?"), b[0] === "-" ? i.skips.push(new RegExp("^" + b.slice(1) + "$")) : i.names.push(new RegExp("^" + b + "$")));
  }
  function m() {
    const b = [
      ...i.names.map(R),
      ...i.skips.map(R).map((x) => "-" + x)
    ].join(",");
    return i.enable(""), b;
  }
  function h(b) {
    if (b[b.length - 1] === "*")
      return !0;
    let x, O;
    for (x = 0, O = i.skips.length; x < O; x++)
      if (i.skips[x].test(b))
        return !1;
    for (x = 0, O = i.names.length; x < O; x++)
      if (i.names[x].test(b))
        return !0;
    return !1;
  }
  function R(b) {
    return b.toString().substring(2, b.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function w(b) {
    return b instanceof Error ? b.stack || b.message : b;
  }
  function C() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return i.enable(i.load()), i;
}
var rd = td;
(function(e, t) {
  t.formatArgs = c, t.save = s, t.load = m, t.useColors = i, t.storage = h(), t.destroy = (() => {
    let w = !1;
    return () => {
      w || (w = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function i() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function c(w) {
    if (w[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + w[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
      return;
    const C = "color: " + this.color;
    w.splice(1, 0, C, "color: inherit");
    let b = 0, x = 0;
    w[0].replace(/%[a-zA-Z%]/g, (O) => {
      O !== "%%" && (b++, O === "%c" && (x = b));
    }), w.splice(x, 0, C);
  }
  t.log = console.debug || console.log || (() => {
  });
  function s(w) {
    try {
      w ? t.storage.setItem("debug", w) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function m() {
    let w;
    try {
      w = t.storage.getItem("debug");
    } catch {
    }
    return !w && typeof process < "u" && "env" in process && (w = process.env.DEBUG), w;
  }
  function h() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = rd(t);
  const { formatters: R } = e.exports;
  R.j = function(w) {
    try {
      return JSON.stringify(w);
    } catch (C) {
      return "[UnexpectedJSONParseError]: " + C.message;
    }
  };
})(ed, lo);
var uo = {}, ad = {
  get exports() {
    return uo;
  },
  set exports(e) {
    uo = e;
  }
};
/*!
 * ee-first
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */
var id = od;
function od(e, t) {
  if (!Array.isArray(e))
    throw new TypeError("arg must be an array of [ee, events...] arrays");
  for (var i = [], c = 0; c < e.length; c++) {
    var s = e[c];
    if (!Array.isArray(s) || s.length < 2)
      throw new TypeError("each array member must be [ee, events...]");
    for (var m = s[0], h = 1; h < s.length; h++) {
      var R = s[h], w = sd(R, C);
      m.on(R, w), i.push({
        ee: m,
        event: R,
        fn: w
      });
    }
  }
  function C() {
    b(), t.apply(null, arguments);
  }
  function b() {
    for (var O, j = 0; j < i.length; j++)
      O = i[j], O.ee.removeListener(O.event, O.fn);
  }
  function x(O) {
    t = O;
  }
  return x.cancel = b, x;
}
function sd(e, t) {
  return function(c) {
    for (var s = new Array(arguments.length), m = this, h = e === "error" ? c : null, R = 0; R < s.length; R++)
      s[R] = arguments[R];
    t(h, m, e, s);
  };
}
const ae = /* @__PURE__ */ Mu(Np);
/*!
 * on-finished
 * Copyright(c) 2013 Jonathan Ong
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */
ad.exports = ld;
uo.isFinished = Uu;
var $l = md(), Hl = id, cd = typeof setImmediate == "function" ? setImmediate : function(e) {
  process.nextTick(e.bind.apply(e, arguments));
};
function ld(e, t) {
  return Uu(e) !== !1 ? (cd(t, null, e), e) : (pd(e, vd(t)), e);
}
function Uu(e) {
  var t = e.socket;
  if (typeof e.finished == "boolean")
    return Boolean(e.finished || t && !t.writable);
  if (typeof e.complete == "boolean")
    return Boolean(e.upgrade || !t || !t.readable || e.complete && !e.readable);
}
function ud(e, t) {
  var i, c, s = !1;
  function m(R) {
    i.cancel(), c.cancel(), s = !0, t(R);
  }
  i = c = Hl([[e, "end", "finish"]], m);
  function h(R) {
    e.removeListener("socket", h), !s && i === c && (c = Hl([[R, "error", "close"]], m));
  }
  if (e.socket) {
    h(e.socket);
    return;
  }
  e.on("socket", h), e.socket === void 0 && fd(e, h);
}
function pd(e, t) {
  var i = e.__onFinished;
  (!i || !i.queue) && (i = e.__onFinished = dd(e), ud(e, i)), i.queue.push(t);
}
function dd(e) {
  function t(i) {
    if (e.__onFinished === t && (e.__onFinished = null), !!t.queue) {
      var c = t.queue;
      t.queue = null;
      for (var s = 0; s < c.length; s++)
        c[s](i, e);
    }
  }
  return t.queue = [], t;
}
function fd(e, t) {
  var i = e.assignSocket;
  typeof i == "function" && (e.assignSocket = function(s) {
    i.call(this, s), t(s);
  });
}
function md() {
  try {
    return ae;
  } catch {
    return {};
  }
}
function vd(e) {
  var t;
  return $l.AsyncResource && (t = new $l.AsyncResource(e.name || "bound-anonymous-fn")), !t || !t.runInAsyncScope ? e : t.runInAsyncScope.bind(t, e, null);
}
var cl = {}, hd = {
  get exports() {
    return cl;
  },
  set exports(e) {
    cl = e;
  }
}, cs = {}, gd = {
  get exports() {
    return cs;
  },
  set exports(e) {
    cs = e;
  }
}, ls = {}, xd = {
  get exports() {
    return ls;
  },
  set exports(e) {
    ls = e;
  }
};
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(e, t) {
  var i = ae, c = i.Buffer;
  function s(h, R) {
    for (var w in h)
      R[w] = h[w];
  }
  c.from && c.alloc && c.allocUnsafe && c.allocUnsafeSlow ? e.exports = i : (s(i, t), t.Buffer = m);
  function m(h, R, w) {
    return c(h, R, w);
  }
  m.prototype = Object.create(c.prototype), s(c, m), m.from = function(h, R, w) {
    if (typeof h == "number")
      throw new TypeError("Argument must not be a number");
    return c(h, R, w);
  }, m.alloc = function(h, R, w) {
    if (typeof h != "number")
      throw new TypeError("Argument must be a number");
    var C = c(h);
    return R !== void 0 ? typeof w == "string" ? C.fill(R, w) : C.fill(R) : C.fill(0), C;
  }, m.allocUnsafe = function(h) {
    if (typeof h != "number")
      throw new TypeError("Argument must be a number");
    return c(h);
  }, m.allocUnsafeSlow = function(h) {
    if (typeof h != "number")
      throw new TypeError("Argument must be a number");
    return i.SlowBuffer(h);
  };
})(xd, ls);
/*!
 * content-disposition
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
gd.exports = _d;
cs.parse = jd;
var Bl = ae.basename, bd = ls.Buffer, yd = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g, wd = /%[0-9A-Fa-f]{2}/, Sd = /%([0-9A-Fa-f]{2})/g, zu = /[^\x20-\x7e\xa0-\xff]/g, Cd = /\\([\u0000-\u007f])/g, Ed = /([\\"])/g, Nl = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g, kd = /^[\x20-\x7e\x80-\xff]+$/, Td = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/, Rd = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/, Ad = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/;
function _d(e, t) {
  var i = t || {}, c = i.type || "attachment", s = Pd(e, i.fallback);
  return Od(new Hu(c, s));
}
function Pd(e, t) {
  if (e !== void 0) {
    var i = {};
    if (typeof e != "string")
      throw new TypeError("filename must be a string");
    if (t === void 0 && (t = !0), typeof t != "string" && typeof t != "boolean")
      throw new TypeError("fallback must be a string or boolean");
    if (typeof t == "string" && zu.test(t))
      throw new TypeError("fallback must be ISO-8859-1 string");
    var c = Bl(e), s = kd.test(c), m = typeof t != "string" ? t && $u(c) : Bl(t), h = typeof m == "string" && m !== c;
    return (h || !s || wd.test(c)) && (i["filename*"] = c), (s || h) && (i.filename = h ? m : c), i;
  }
}
function Od(e) {
  var t = e.parameters, i = e.type;
  if (!i || typeof i != "string" || !Td.test(i))
    throw new TypeError("invalid type");
  var c = String(i).toLowerCase();
  if (t && typeof t == "object")
    for (var s, m = Object.keys(t).sort(), h = 0; h < m.length; h++) {
      s = m[h];
      var R = s.substr(-1) === "*" ? Ld(t[s]) : Md(t[s]);
      c += "; " + s + "=" + R;
    }
  return c;
}
function Fd(e) {
  var t = Rd.exec(e);
  if (!t)
    throw new TypeError("invalid extended field value");
  var i = t[1].toLowerCase(), c = t[2], s, m = c.replace(Sd, Id);
  switch (i) {
    case "iso-8859-1":
      s = $u(m);
      break;
    case "utf-8":
      s = bd.from(m, "binary").toString("utf8");
      break;
    default:
      throw new TypeError("unsupported charset in extended field");
  }
  return s;
}
function $u(e) {
  return String(e).replace(zu, "?");
}
function jd(e) {
  if (!e || typeof e != "string")
    throw new TypeError("argument string is required");
  var t = Ad.exec(e);
  if (!t)
    throw new TypeError("invalid type format");
  var i = t[0].length, c = t[1].toLowerCase(), s, m = [], h = {}, R;
  for (i = Nl.lastIndex = t[0].substr(-1) === ";" ? i - 1 : i; t = Nl.exec(e); ) {
    if (t.index !== i)
      throw new TypeError("invalid parameter format");
    if (i += t[0].length, s = t[1].toLowerCase(), R = t[2], m.indexOf(s) !== -1)
      throw new TypeError("invalid duplicate parameter");
    if (m.push(s), s.indexOf("*") + 1 === s.length) {
      s = s.slice(0, -1), R = Fd(R), h[s] = R;
      continue;
    }
    typeof h[s] != "string" && (R[0] === '"' && (R = R.substr(1, R.length - 2).replace(Cd, "$1")), h[s] = R);
  }
  if (i !== -1 && i !== e.length)
    throw new TypeError("invalid parameter format");
  return new Hu(c, h);
}
function Id(e, t) {
  return String.fromCharCode(parseInt(t, 16));
}
function Dd(e) {
  return "%" + String(e).charCodeAt(0).toString(16).toUpperCase();
}
function Md(e) {
  var t = String(e);
  return '"' + t.replace(Ed, "\\$1") + '"';
}
function Ld(e) {
  var t = String(e), i = encodeURIComponent(t).replace(yd, Dd);
  return "UTF-8''" + i;
}
function Hu(e, t) {
  this.type = e, this.parameters = t;
}
var Ts = {}, ll = {}, Ud = {
  get exports() {
    return ll;
  },
  set exports(e) {
    ll = e;
  }
};
const zd = {
  "application/1d-interleaved-parityfec": {
    source: "iana"
  },
  "application/3gpdash-qoe-report+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/3gpp-ims+xml": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphal+json": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphalforms+json": {
    source: "iana",
    compressible: !0
  },
  "application/a2l": {
    source: "iana"
  },
  "application/ace+cbor": {
    source: "iana"
  },
  "application/activemessage": {
    source: "iana"
  },
  "application/activity+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-directory+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcost+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcostparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointprop+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointpropparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-error+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamcontrol+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/aml": {
    source: "iana"
  },
  "application/andrew-inset": {
    source: "iana",
    extensions: [
      "ez"
    ]
  },
  "application/applefile": {
    source: "iana"
  },
  "application/applixware": {
    source: "apache",
    extensions: [
      "aw"
    ]
  },
  "application/at+jwt": {
    source: "iana"
  },
  "application/atf": {
    source: "iana"
  },
  "application/atfx": {
    source: "iana"
  },
  "application/atom+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atom"
    ]
  },
  "application/atomcat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomcat"
    ]
  },
  "application/atomdeleted+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomdeleted"
    ]
  },
  "application/atomicmail": {
    source: "iana"
  },
  "application/atomsvc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomsvc"
    ]
  },
  "application/atsc-dwd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dwd"
    ]
  },
  "application/atsc-dynamic-event-message": {
    source: "iana"
  },
  "application/atsc-held+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "held"
    ]
  },
  "application/atsc-rdt+json": {
    source: "iana",
    compressible: !0
  },
  "application/atsc-rsat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsat"
    ]
  },
  "application/atxml": {
    source: "iana"
  },
  "application/auth-policy+xml": {
    source: "iana",
    compressible: !0
  },
  "application/bacnet-xdd+zip": {
    source: "iana",
    compressible: !1
  },
  "application/batch-smtp": {
    source: "iana"
  },
  "application/bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/beep+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/calendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/calendar+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xcs"
    ]
  },
  "application/call-completion": {
    source: "iana"
  },
  "application/cals-1840": {
    source: "iana"
  },
  "application/captive+json": {
    source: "iana",
    compressible: !0
  },
  "application/cbor": {
    source: "iana"
  },
  "application/cbor-seq": {
    source: "iana"
  },
  "application/cccex": {
    source: "iana"
  },
  "application/ccmp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ccxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ccxml"
    ]
  },
  "application/cdfx+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdfx"
    ]
  },
  "application/cdmi-capability": {
    source: "iana",
    extensions: [
      "cdmia"
    ]
  },
  "application/cdmi-container": {
    source: "iana",
    extensions: [
      "cdmic"
    ]
  },
  "application/cdmi-domain": {
    source: "iana",
    extensions: [
      "cdmid"
    ]
  },
  "application/cdmi-object": {
    source: "iana",
    extensions: [
      "cdmio"
    ]
  },
  "application/cdmi-queue": {
    source: "iana",
    extensions: [
      "cdmiq"
    ]
  },
  "application/cdni": {
    source: "iana"
  },
  "application/cea": {
    source: "iana"
  },
  "application/cea-2018+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cellml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cfw": {
    source: "iana"
  },
  "application/city+json": {
    source: "iana",
    compressible: !0
  },
  "application/clr": {
    source: "iana"
  },
  "application/clue+xml": {
    source: "iana",
    compressible: !0
  },
  "application/clue_info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cms": {
    source: "iana"
  },
  "application/cnrp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/coap-group+json": {
    source: "iana",
    compressible: !0
  },
  "application/coap-payload": {
    source: "iana"
  },
  "application/commonground": {
    source: "iana"
  },
  "application/conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cose": {
    source: "iana"
  },
  "application/cose-key": {
    source: "iana"
  },
  "application/cose-key-set": {
    source: "iana"
  },
  "application/cpl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cpl"
    ]
  },
  "application/csrattrs": {
    source: "iana"
  },
  "application/csta+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cstadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/csvm+json": {
    source: "iana",
    compressible: !0
  },
  "application/cu-seeme": {
    source: "apache",
    extensions: [
      "cu"
    ]
  },
  "application/cwt": {
    source: "iana"
  },
  "application/cybercash": {
    source: "iana"
  },
  "application/dart": {
    compressible: !0
  },
  "application/dash+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpd"
    ]
  },
  "application/dash-patch+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpp"
    ]
  },
  "application/dashdelta": {
    source: "iana"
  },
  "application/davmount+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "davmount"
    ]
  },
  "application/dca-rft": {
    source: "iana"
  },
  "application/dcd": {
    source: "iana"
  },
  "application/dec-dx": {
    source: "iana"
  },
  "application/dialog-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dicom": {
    source: "iana"
  },
  "application/dicom+json": {
    source: "iana",
    compressible: !0
  },
  "application/dicom+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dii": {
    source: "iana"
  },
  "application/dit": {
    source: "iana"
  },
  "application/dns": {
    source: "iana"
  },
  "application/dns+json": {
    source: "iana",
    compressible: !0
  },
  "application/dns-message": {
    source: "iana"
  },
  "application/docbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dbk"
    ]
  },
  "application/dots+cbor": {
    source: "iana"
  },
  "application/dskpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dssc+der": {
    source: "iana",
    extensions: [
      "dssc"
    ]
  },
  "application/dssc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdssc"
    ]
  },
  "application/dvcs": {
    source: "iana"
  },
  "application/ecmascript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es",
      "ecma"
    ]
  },
  "application/edi-consent": {
    source: "iana"
  },
  "application/edi-x12": {
    source: "iana",
    compressible: !1
  },
  "application/edifact": {
    source: "iana",
    compressible: !1
  },
  "application/efi": {
    source: "iana"
  },
  "application/elm+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/elm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.cap+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/emergencycalldata.comment+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.deviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.ecall.msd": {
    source: "iana"
  },
  "application/emergencycalldata.providerinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.serviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.subscriberinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.veds+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emma+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emma"
    ]
  },
  "application/emotionml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emotionml"
    ]
  },
  "application/encaprtp": {
    source: "iana"
  },
  "application/epp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/epub+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "epub"
    ]
  },
  "application/eshop": {
    source: "iana"
  },
  "application/exi": {
    source: "iana",
    extensions: [
      "exi"
    ]
  },
  "application/expect-ct-report+json": {
    source: "iana",
    compressible: !0
  },
  "application/express": {
    source: "iana",
    extensions: [
      "exp"
    ]
  },
  "application/fastinfoset": {
    source: "iana"
  },
  "application/fastsoap": {
    source: "iana"
  },
  "application/fdt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fdt"
    ]
  },
  "application/fhir+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fhir+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fido.trusted-apps+json": {
    compressible: !0
  },
  "application/fits": {
    source: "iana"
  },
  "application/flexfec": {
    source: "iana"
  },
  "application/font-sfnt": {
    source: "iana"
  },
  "application/font-tdpfr": {
    source: "iana",
    extensions: [
      "pfr"
    ]
  },
  "application/font-woff": {
    source: "iana",
    compressible: !1
  },
  "application/framework-attributes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/geo+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "geojson"
    ]
  },
  "application/geo+json-seq": {
    source: "iana"
  },
  "application/geopackage+sqlite3": {
    source: "iana"
  },
  "application/geoxacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/gltf-buffer": {
    source: "iana"
  },
  "application/gml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gml"
    ]
  },
  "application/gpx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "gpx"
    ]
  },
  "application/gxf": {
    source: "apache",
    extensions: [
      "gxf"
    ]
  },
  "application/gzip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gz"
    ]
  },
  "application/h224": {
    source: "iana"
  },
  "application/held+xml": {
    source: "iana",
    compressible: !0
  },
  "application/hjson": {
    extensions: [
      "hjson"
    ]
  },
  "application/http": {
    source: "iana"
  },
  "application/hyperstudio": {
    source: "iana",
    extensions: [
      "stk"
    ]
  },
  "application/ibe-key-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pkg-reply+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pp-data": {
    source: "iana"
  },
  "application/iges": {
    source: "iana"
  },
  "application/im-iscomposing+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/index": {
    source: "iana"
  },
  "application/index.cmd": {
    source: "iana"
  },
  "application/index.obj": {
    source: "iana"
  },
  "application/index.response": {
    source: "iana"
  },
  "application/index.vnd": {
    source: "iana"
  },
  "application/inkml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ink",
      "inkml"
    ]
  },
  "application/iotp": {
    source: "iana"
  },
  "application/ipfix": {
    source: "iana",
    extensions: [
      "ipfix"
    ]
  },
  "application/ipp": {
    source: "iana"
  },
  "application/isup": {
    source: "iana"
  },
  "application/its+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "its"
    ]
  },
  "application/java-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jar",
      "war",
      "ear"
    ]
  },
  "application/java-serialized-object": {
    source: "apache",
    compressible: !1,
    extensions: [
      "ser"
    ]
  },
  "application/java-vm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "class"
    ]
  },
  "application/javascript": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "js",
      "mjs"
    ]
  },
  "application/jf2feed+json": {
    source: "iana",
    compressible: !0
  },
  "application/jose": {
    source: "iana"
  },
  "application/jose+json": {
    source: "iana",
    compressible: !0
  },
  "application/jrd+json": {
    source: "iana",
    compressible: !0
  },
  "application/jscalendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "json",
      "map"
    ]
  },
  "application/json-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/json-seq": {
    source: "iana"
  },
  "application/json5": {
    extensions: [
      "json5"
    ]
  },
  "application/jsonml+json": {
    source: "apache",
    compressible: !0,
    extensions: [
      "jsonml"
    ]
  },
  "application/jwk+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwk-set+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwt": {
    source: "iana"
  },
  "application/kpml-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/kpml-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ld+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "jsonld"
    ]
  },
  "application/lgr+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lgr"
    ]
  },
  "application/link-format": {
    source: "iana"
  },
  "application/load-control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lost+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lostxml"
    ]
  },
  "application/lostsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lpf+zip": {
    source: "iana",
    compressible: !1
  },
  "application/lxf": {
    source: "iana"
  },
  "application/mac-binhex40": {
    source: "iana",
    extensions: [
      "hqx"
    ]
  },
  "application/mac-compactpro": {
    source: "apache",
    extensions: [
      "cpt"
    ]
  },
  "application/macwriteii": {
    source: "iana"
  },
  "application/mads+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mads"
    ]
  },
  "application/manifest+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "webmanifest"
    ]
  },
  "application/marc": {
    source: "iana",
    extensions: [
      "mrc"
    ]
  },
  "application/marcxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mrcx"
    ]
  },
  "application/mathematica": {
    source: "iana",
    extensions: [
      "ma",
      "nb",
      "mb"
    ]
  },
  "application/mathml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mathml"
    ]
  },
  "application/mathml-content+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mathml-presentation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-associated-procedure-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-deregister+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-envelope+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-protection-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-reception-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-schedule+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-user-service-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbox": {
    source: "iana",
    extensions: [
      "mbox"
    ]
  },
  "application/media-policy-dataset+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpf"
    ]
  },
  "application/media_control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mediaservercontrol+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mscml"
    ]
  },
  "application/merge-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/metalink+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "metalink"
    ]
  },
  "application/metalink4+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "meta4"
    ]
  },
  "application/mets+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mets"
    ]
  },
  "application/mf4": {
    source: "iana"
  },
  "application/mikey": {
    source: "iana"
  },
  "application/mipc": {
    source: "iana"
  },
  "application/missing-blocks+cbor-seq": {
    source: "iana"
  },
  "application/mmt-aei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "maei"
    ]
  },
  "application/mmt-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musd"
    ]
  },
  "application/mods+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mods"
    ]
  },
  "application/moss-keys": {
    source: "iana"
  },
  "application/moss-signature": {
    source: "iana"
  },
  "application/mosskey-data": {
    source: "iana"
  },
  "application/mosskey-request": {
    source: "iana"
  },
  "application/mp21": {
    source: "iana",
    extensions: [
      "m21",
      "mp21"
    ]
  },
  "application/mp4": {
    source: "iana",
    extensions: [
      "mp4s",
      "m4p"
    ]
  },
  "application/mpeg4-generic": {
    source: "iana"
  },
  "application/mpeg4-iod": {
    source: "iana"
  },
  "application/mpeg4-iod-xmt": {
    source: "iana"
  },
  "application/mrb-consumer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mrb-publish+xml": {
    source: "iana",
    compressible: !0
  },
  "application/msc-ivr+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msc-mixer+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msword": {
    source: "iana",
    compressible: !1,
    extensions: [
      "doc",
      "dot"
    ]
  },
  "application/mud+json": {
    source: "iana",
    compressible: !0
  },
  "application/multipart-core": {
    source: "iana"
  },
  "application/mxf": {
    source: "iana",
    extensions: [
      "mxf"
    ]
  },
  "application/n-quads": {
    source: "iana",
    extensions: [
      "nq"
    ]
  },
  "application/n-triples": {
    source: "iana",
    extensions: [
      "nt"
    ]
  },
  "application/nasdata": {
    source: "iana"
  },
  "application/news-checkgroups": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-groupinfo": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-transmission": {
    source: "iana"
  },
  "application/nlsml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/node": {
    source: "iana",
    extensions: [
      "cjs"
    ]
  },
  "application/nss": {
    source: "iana"
  },
  "application/oauth-authz-req+jwt": {
    source: "iana"
  },
  "application/oblivious-dns-message": {
    source: "iana"
  },
  "application/ocsp-request": {
    source: "iana"
  },
  "application/ocsp-response": {
    source: "iana"
  },
  "application/octet-stream": {
    source: "iana",
    compressible: !1,
    extensions: [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ]
  },
  "application/oda": {
    source: "iana",
    extensions: [
      "oda"
    ]
  },
  "application/odm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/odx": {
    source: "iana"
  },
  "application/oebps-package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "opf"
    ]
  },
  "application/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogx"
    ]
  },
  "application/omdoc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "omdoc"
    ]
  },
  "application/onenote": {
    source: "apache",
    extensions: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ]
  },
  "application/opc-nodeset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/oscore": {
    source: "iana"
  },
  "application/oxps": {
    source: "iana",
    extensions: [
      "oxps"
    ]
  },
  "application/p21": {
    source: "iana"
  },
  "application/p21+zip": {
    source: "iana",
    compressible: !1
  },
  "application/p2p-overlay+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "relo"
    ]
  },
  "application/parityfec": {
    source: "iana"
  },
  "application/passport": {
    source: "iana"
  },
  "application/patch-ops-error+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xer"
    ]
  },
  "application/pdf": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pdf"
    ]
  },
  "application/pdx": {
    source: "iana"
  },
  "application/pem-certificate-chain": {
    source: "iana"
  },
  "application/pgp-encrypted": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pgp"
    ]
  },
  "application/pgp-keys": {
    source: "iana",
    extensions: [
      "asc"
    ]
  },
  "application/pgp-signature": {
    source: "iana",
    extensions: [
      "asc",
      "sig"
    ]
  },
  "application/pics-rules": {
    source: "apache",
    extensions: [
      "prf"
    ]
  },
  "application/pidf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pidf-diff+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pkcs10": {
    source: "iana",
    extensions: [
      "p10"
    ]
  },
  "application/pkcs12": {
    source: "iana"
  },
  "application/pkcs7-mime": {
    source: "iana",
    extensions: [
      "p7m",
      "p7c"
    ]
  },
  "application/pkcs7-signature": {
    source: "iana",
    extensions: [
      "p7s"
    ]
  },
  "application/pkcs8": {
    source: "iana",
    extensions: [
      "p8"
    ]
  },
  "application/pkcs8-encrypted": {
    source: "iana"
  },
  "application/pkix-attr-cert": {
    source: "iana",
    extensions: [
      "ac"
    ]
  },
  "application/pkix-cert": {
    source: "iana",
    extensions: [
      "cer"
    ]
  },
  "application/pkix-crl": {
    source: "iana",
    extensions: [
      "crl"
    ]
  },
  "application/pkix-pkipath": {
    source: "iana",
    extensions: [
      "pkipath"
    ]
  },
  "application/pkixcmp": {
    source: "iana",
    extensions: [
      "pki"
    ]
  },
  "application/pls+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pls"
    ]
  },
  "application/poc-settings+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/postscript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ai",
      "eps",
      "ps"
    ]
  },
  "application/ppsp-tracker+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/provenance+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "provx"
    ]
  },
  "application/prs.alvestrand.titrax-sheet": {
    source: "iana"
  },
  "application/prs.cww": {
    source: "iana",
    extensions: [
      "cww"
    ]
  },
  "application/prs.cyn": {
    source: "iana",
    charset: "7-BIT"
  },
  "application/prs.hpub+zip": {
    source: "iana",
    compressible: !1
  },
  "application/prs.nprend": {
    source: "iana"
  },
  "application/prs.plucker": {
    source: "iana"
  },
  "application/prs.rdf-xml-crypt": {
    source: "iana"
  },
  "application/prs.xsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/pskc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pskcxml"
    ]
  },
  "application/pvd+json": {
    source: "iana",
    compressible: !0
  },
  "application/qsig": {
    source: "iana"
  },
  "application/raml+yaml": {
    compressible: !0,
    extensions: [
      "raml"
    ]
  },
  "application/raptorfec": {
    source: "iana"
  },
  "application/rdap+json": {
    source: "iana",
    compressible: !0
  },
  "application/rdf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rdf",
      "owl"
    ]
  },
  "application/reginfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rif"
    ]
  },
  "application/relax-ng-compact-syntax": {
    source: "iana",
    extensions: [
      "rnc"
    ]
  },
  "application/remote-printing": {
    source: "iana"
  },
  "application/reputon+json": {
    source: "iana",
    compressible: !0
  },
  "application/resource-lists+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rl"
    ]
  },
  "application/resource-lists-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rld"
    ]
  },
  "application/rfc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/riscos": {
    source: "iana"
  },
  "application/rlmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/rls-services+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rs"
    ]
  },
  "application/route-apd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rapd"
    ]
  },
  "application/route-s-tsid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sls"
    ]
  },
  "application/route-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rusd"
    ]
  },
  "application/rpki-ghostbusters": {
    source: "iana",
    extensions: [
      "gbr"
    ]
  },
  "application/rpki-manifest": {
    source: "iana",
    extensions: [
      "mft"
    ]
  },
  "application/rpki-publication": {
    source: "iana"
  },
  "application/rpki-roa": {
    source: "iana",
    extensions: [
      "roa"
    ]
  },
  "application/rpki-updown": {
    source: "iana"
  },
  "application/rsd+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rsd"
    ]
  },
  "application/rss+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rss"
    ]
  },
  "application/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "application/rtploopback": {
    source: "iana"
  },
  "application/rtx": {
    source: "iana"
  },
  "application/samlassertion+xml": {
    source: "iana",
    compressible: !0
  },
  "application/samlmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sarif+json": {
    source: "iana",
    compressible: !0
  },
  "application/sarif-external-properties+json": {
    source: "iana",
    compressible: !0
  },
  "application/sbe": {
    source: "iana"
  },
  "application/sbml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sbml"
    ]
  },
  "application/scaip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/scim+json": {
    source: "iana",
    compressible: !0
  },
  "application/scvp-cv-request": {
    source: "iana",
    extensions: [
      "scq"
    ]
  },
  "application/scvp-cv-response": {
    source: "iana",
    extensions: [
      "scs"
    ]
  },
  "application/scvp-vp-request": {
    source: "iana",
    extensions: [
      "spq"
    ]
  },
  "application/scvp-vp-response": {
    source: "iana",
    extensions: [
      "spp"
    ]
  },
  "application/sdp": {
    source: "iana",
    extensions: [
      "sdp"
    ]
  },
  "application/secevent+jwt": {
    source: "iana"
  },
  "application/senml+cbor": {
    source: "iana"
  },
  "application/senml+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "senmlx"
    ]
  },
  "application/senml-etch+cbor": {
    source: "iana"
  },
  "application/senml-etch+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml-exi": {
    source: "iana"
  },
  "application/sensml+cbor": {
    source: "iana"
  },
  "application/sensml+json": {
    source: "iana",
    compressible: !0
  },
  "application/sensml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sensmlx"
    ]
  },
  "application/sensml-exi": {
    source: "iana"
  },
  "application/sep+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sep-exi": {
    source: "iana"
  },
  "application/session-info": {
    source: "iana"
  },
  "application/set-payment": {
    source: "iana"
  },
  "application/set-payment-initiation": {
    source: "iana",
    extensions: [
      "setpay"
    ]
  },
  "application/set-registration": {
    source: "iana"
  },
  "application/set-registration-initiation": {
    source: "iana",
    extensions: [
      "setreg"
    ]
  },
  "application/sgml": {
    source: "iana"
  },
  "application/sgml-open-catalog": {
    source: "iana"
  },
  "application/shf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "shf"
    ]
  },
  "application/sieve": {
    source: "iana",
    extensions: [
      "siv",
      "sieve"
    ]
  },
  "application/simple-filter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/simple-message-summary": {
    source: "iana"
  },
  "application/simplesymbolcontainer": {
    source: "iana"
  },
  "application/sipc": {
    source: "iana"
  },
  "application/slate": {
    source: "iana"
  },
  "application/smil": {
    source: "iana"
  },
  "application/smil+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "smi",
      "smil"
    ]
  },
  "application/smpte336m": {
    source: "iana"
  },
  "application/soap+fastinfoset": {
    source: "iana"
  },
  "application/soap+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sparql-query": {
    source: "iana",
    extensions: [
      "rq"
    ]
  },
  "application/sparql-results+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "srx"
    ]
  },
  "application/spdx+json": {
    source: "iana",
    compressible: !0
  },
  "application/spirits-event+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sql": {
    source: "iana"
  },
  "application/srgs": {
    source: "iana",
    extensions: [
      "gram"
    ]
  },
  "application/srgs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "grxml"
    ]
  },
  "application/sru+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sru"
    ]
  },
  "application/ssdl+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ssdl"
    ]
  },
  "application/ssml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ssml"
    ]
  },
  "application/stix+json": {
    source: "iana",
    compressible: !0
  },
  "application/swid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "swidtag"
    ]
  },
  "application/tamp-apex-update": {
    source: "iana"
  },
  "application/tamp-apex-update-confirm": {
    source: "iana"
  },
  "application/tamp-community-update": {
    source: "iana"
  },
  "application/tamp-community-update-confirm": {
    source: "iana"
  },
  "application/tamp-error": {
    source: "iana"
  },
  "application/tamp-sequence-adjust": {
    source: "iana"
  },
  "application/tamp-sequence-adjust-confirm": {
    source: "iana"
  },
  "application/tamp-status-query": {
    source: "iana"
  },
  "application/tamp-status-response": {
    source: "iana"
  },
  "application/tamp-update": {
    source: "iana"
  },
  "application/tamp-update-confirm": {
    source: "iana"
  },
  "application/tar": {
    compressible: !0
  },
  "application/taxii+json": {
    source: "iana",
    compressible: !0
  },
  "application/td+json": {
    source: "iana",
    compressible: !0
  },
  "application/tei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tei",
      "teicorpus"
    ]
  },
  "application/tetra_isi": {
    source: "iana"
  },
  "application/thraud+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tfi"
    ]
  },
  "application/timestamp-query": {
    source: "iana"
  },
  "application/timestamp-reply": {
    source: "iana"
  },
  "application/timestamped-data": {
    source: "iana",
    extensions: [
      "tsd"
    ]
  },
  "application/tlsrpt+gzip": {
    source: "iana"
  },
  "application/tlsrpt+json": {
    source: "iana",
    compressible: !0
  },
  "application/tnauthlist": {
    source: "iana"
  },
  "application/token-introspection+jwt": {
    source: "iana"
  },
  "application/toml": {
    compressible: !0,
    extensions: [
      "toml"
    ]
  },
  "application/trickle-ice-sdpfrag": {
    source: "iana"
  },
  "application/trig": {
    source: "iana",
    extensions: [
      "trig"
    ]
  },
  "application/ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttml"
    ]
  },
  "application/tve-trigger": {
    source: "iana"
  },
  "application/tzif": {
    source: "iana"
  },
  "application/tzif-leap": {
    source: "iana"
  },
  "application/ubjson": {
    compressible: !1,
    extensions: [
      "ubj"
    ]
  },
  "application/ulpfec": {
    source: "iana"
  },
  "application/urc-grpsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/urc-ressheet+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsheet"
    ]
  },
  "application/urc-targetdesc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "td"
    ]
  },
  "application/urc-uisocketdesc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+json": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vemmi": {
    source: "iana"
  },
  "application/vividence.scriptfile": {
    source: "apache"
  },
  "application/vnd.1000minds.decision-model+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "1km"
    ]
  },
  "application/vnd.3gpp-prose+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-prose-pc3ch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-v2x-local-service-information": {
    source: "iana"
  },
  "application/vnd.3gpp.5gnas": {
    source: "iana"
  },
  "application/vnd.3gpp.access-transfer-events+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.bsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gmop+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gtpc": {
    source: "iana"
  },
  "application/vnd.3gpp.interworking-data": {
    source: "iana"
  },
  "application/vnd.3gpp.lpp": {
    source: "iana"
  },
  "application/vnd.3gpp.mc-signalling-ear": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-payload": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-signalling": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-floor-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-signed+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mid-call+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ngap": {
    source: "iana"
  },
  "application/vnd.3gpp.pfcp": {
    source: "iana"
  },
  "application/vnd.3gpp.pic-bw-large": {
    source: "iana",
    extensions: [
      "plb"
    ]
  },
  "application/vnd.3gpp.pic-bw-small": {
    source: "iana",
    extensions: [
      "psb"
    ]
  },
  "application/vnd.3gpp.pic-bw-var": {
    source: "iana",
    extensions: [
      "pvb"
    ]
  },
  "application/vnd.3gpp.s1ap": {
    source: "iana"
  },
  "application/vnd.3gpp.sms": {
    source: "iana"
  },
  "application/vnd.3gpp.sms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-ext+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.state-and-event-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ussd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.bcmcsinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.sms": {
    source: "iana"
  },
  "application/vnd.3gpp2.tcap": {
    source: "iana",
    extensions: [
      "tcap"
    ]
  },
  "application/vnd.3lightssoftware.imagescal": {
    source: "iana"
  },
  "application/vnd.3m.post-it-notes": {
    source: "iana",
    extensions: [
      "pwn"
    ]
  },
  "application/vnd.accpac.simply.aso": {
    source: "iana",
    extensions: [
      "aso"
    ]
  },
  "application/vnd.accpac.simply.imp": {
    source: "iana",
    extensions: [
      "imp"
    ]
  },
  "application/vnd.acucobol": {
    source: "iana",
    extensions: [
      "acu"
    ]
  },
  "application/vnd.acucorp": {
    source: "iana",
    extensions: [
      "atc",
      "acutc"
    ]
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "air"
    ]
  },
  "application/vnd.adobe.flash.movie": {
    source: "iana"
  },
  "application/vnd.adobe.formscentral.fcdt": {
    source: "iana",
    extensions: [
      "fcdt"
    ]
  },
  "application/vnd.adobe.fxp": {
    source: "iana",
    extensions: [
      "fxp",
      "fxpl"
    ]
  },
  "application/vnd.adobe.partial-upload": {
    source: "iana"
  },
  "application/vnd.adobe.xdp+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdp"
    ]
  },
  "application/vnd.adobe.xfdf": {
    source: "iana",
    extensions: [
      "xfdf"
    ]
  },
  "application/vnd.aether.imp": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata-pagedef": {
    source: "iana"
  },
  "application/vnd.afpc.cmoca-cmresource": {
    source: "iana"
  },
  "application/vnd.afpc.foca-charset": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codedfont": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codepage": {
    source: "iana"
  },
  "application/vnd.afpc.modca": {
    source: "iana"
  },
  "application/vnd.afpc.modca-cmtable": {
    source: "iana"
  },
  "application/vnd.afpc.modca-formdef": {
    source: "iana"
  },
  "application/vnd.afpc.modca-mediummap": {
    source: "iana"
  },
  "application/vnd.afpc.modca-objectcontainer": {
    source: "iana"
  },
  "application/vnd.afpc.modca-overlay": {
    source: "iana"
  },
  "application/vnd.afpc.modca-pagesegment": {
    source: "iana"
  },
  "application/vnd.age": {
    source: "iana",
    extensions: [
      "age"
    ]
  },
  "application/vnd.ah-barcode": {
    source: "iana"
  },
  "application/vnd.ahead.space": {
    source: "iana",
    extensions: [
      "ahead"
    ]
  },
  "application/vnd.airzip.filesecure.azf": {
    source: "iana",
    extensions: [
      "azf"
    ]
  },
  "application/vnd.airzip.filesecure.azs": {
    source: "iana",
    extensions: [
      "azs"
    ]
  },
  "application/vnd.amadeus+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.amazon.ebook": {
    source: "apache",
    extensions: [
      "azw"
    ]
  },
  "application/vnd.amazon.mobi8-ebook": {
    source: "iana"
  },
  "application/vnd.americandynamics.acc": {
    source: "iana",
    extensions: [
      "acc"
    ]
  },
  "application/vnd.amiga.ami": {
    source: "iana",
    extensions: [
      "ami"
    ]
  },
  "application/vnd.amundsen.maze+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.android.ota": {
    source: "iana"
  },
  "application/vnd.android.package-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "apk"
    ]
  },
  "application/vnd.anki": {
    source: "iana"
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    source: "iana",
    extensions: [
      "cii"
    ]
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    source: "apache",
    extensions: [
      "fti"
    ]
  },
  "application/vnd.antix.game-component": {
    source: "iana",
    extensions: [
      "atx"
    ]
  },
  "application/vnd.apache.arrow.file": {
    source: "iana"
  },
  "application/vnd.apache.arrow.stream": {
    source: "iana"
  },
  "application/vnd.apache.thrift.binary": {
    source: "iana"
  },
  "application/vnd.apache.thrift.compact": {
    source: "iana"
  },
  "application/vnd.apache.thrift.json": {
    source: "iana"
  },
  "application/vnd.api+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.aplextor.warrp+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apothekende.reservation+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apple.installer+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpkg"
    ]
  },
  "application/vnd.apple.keynote": {
    source: "iana",
    extensions: [
      "key"
    ]
  },
  "application/vnd.apple.mpegurl": {
    source: "iana",
    extensions: [
      "m3u8"
    ]
  },
  "application/vnd.apple.numbers": {
    source: "iana",
    extensions: [
      "numbers"
    ]
  },
  "application/vnd.apple.pages": {
    source: "iana",
    extensions: [
      "pages"
    ]
  },
  "application/vnd.apple.pkpass": {
    compressible: !1,
    extensions: [
      "pkpass"
    ]
  },
  "application/vnd.arastra.swi": {
    source: "iana"
  },
  "application/vnd.aristanetworks.swi": {
    source: "iana",
    extensions: [
      "swi"
    ]
  },
  "application/vnd.artisan+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.artsquare": {
    source: "iana"
  },
  "application/vnd.astraea-software.iota": {
    source: "iana",
    extensions: [
      "iota"
    ]
  },
  "application/vnd.audiograph": {
    source: "iana",
    extensions: [
      "aep"
    ]
  },
  "application/vnd.autopackage": {
    source: "iana"
  },
  "application/vnd.avalon+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.avistar+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.balsamiq.bmml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmml"
    ]
  },
  "application/vnd.balsamiq.bmpr": {
    source: "iana"
  },
  "application/vnd.banana-accounting": {
    source: "iana"
  },
  "application/vnd.bbf.usp.error": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bekitzur-stech+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bint.med-content": {
    source: "iana"
  },
  "application/vnd.biopax.rdf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.blink-idb-value-wrapper": {
    source: "iana"
  },
  "application/vnd.blueice.multipass": {
    source: "iana",
    extensions: [
      "mpm"
    ]
  },
  "application/vnd.bluetooth.ep.oob": {
    source: "iana"
  },
  "application/vnd.bluetooth.le.oob": {
    source: "iana"
  },
  "application/vnd.bmi": {
    source: "iana",
    extensions: [
      "bmi"
    ]
  },
  "application/vnd.bpf": {
    source: "iana"
  },
  "application/vnd.bpf3": {
    source: "iana"
  },
  "application/vnd.businessobjects": {
    source: "iana",
    extensions: [
      "rep"
    ]
  },
  "application/vnd.byu.uapi+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cab-jscript": {
    source: "iana"
  },
  "application/vnd.canon-cpdl": {
    source: "iana"
  },
  "application/vnd.canon-lips": {
    source: "iana"
  },
  "application/vnd.capasystems-pg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cendio.thinlinc.clientconf": {
    source: "iana"
  },
  "application/vnd.century-systems.tcp_stream": {
    source: "iana"
  },
  "application/vnd.chemdraw+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdxml"
    ]
  },
  "application/vnd.chess-pgn": {
    source: "iana"
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    source: "iana",
    extensions: [
      "mmd"
    ]
  },
  "application/vnd.ciedi": {
    source: "iana"
  },
  "application/vnd.cinderella": {
    source: "iana",
    extensions: [
      "cdy"
    ]
  },
  "application/vnd.cirpack.isdn-ext": {
    source: "iana"
  },
  "application/vnd.citationstyles.style+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csl"
    ]
  },
  "application/vnd.claymore": {
    source: "iana",
    extensions: [
      "cla"
    ]
  },
  "application/vnd.cloanto.rp9": {
    source: "iana",
    extensions: [
      "rp9"
    ]
  },
  "application/vnd.clonk.c4group": {
    source: "iana",
    extensions: [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config": {
    source: "iana",
    extensions: [
      "c11amc"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    source: "iana",
    extensions: [
      "c11amz"
    ]
  },
  "application/vnd.coffeescript": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet-template": {
    source: "iana"
  },
  "application/vnd.collection+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.doc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.next+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.comicbook+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.comicbook-rar": {
    source: "iana"
  },
  "application/vnd.commerce-battelle": {
    source: "iana"
  },
  "application/vnd.commonspace": {
    source: "iana",
    extensions: [
      "csp"
    ]
  },
  "application/vnd.contact.cmsg": {
    source: "iana",
    extensions: [
      "cdbcmsg"
    ]
  },
  "application/vnd.coreos.ignition+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cosmocaller": {
    source: "iana",
    extensions: [
      "cmc"
    ]
  },
  "application/vnd.crick.clicker": {
    source: "iana",
    extensions: [
      "clkx"
    ]
  },
  "application/vnd.crick.clicker.keyboard": {
    source: "iana",
    extensions: [
      "clkk"
    ]
  },
  "application/vnd.crick.clicker.palette": {
    source: "iana",
    extensions: [
      "clkp"
    ]
  },
  "application/vnd.crick.clicker.template": {
    source: "iana",
    extensions: [
      "clkt"
    ]
  },
  "application/vnd.crick.clicker.wordbank": {
    source: "iana",
    extensions: [
      "clkw"
    ]
  },
  "application/vnd.criticaltools.wbs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wbs"
    ]
  },
  "application/vnd.cryptii.pipe+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.crypto-shade-file": {
    source: "iana"
  },
  "application/vnd.cryptomator.encrypted": {
    source: "iana"
  },
  "application/vnd.cryptomator.vault": {
    source: "iana"
  },
  "application/vnd.ctc-posml": {
    source: "iana",
    extensions: [
      "pml"
    ]
  },
  "application/vnd.ctct.ws+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cups-pdf": {
    source: "iana"
  },
  "application/vnd.cups-postscript": {
    source: "iana"
  },
  "application/vnd.cups-ppd": {
    source: "iana",
    extensions: [
      "ppd"
    ]
  },
  "application/vnd.cups-raster": {
    source: "iana"
  },
  "application/vnd.cups-raw": {
    source: "iana"
  },
  "application/vnd.curl": {
    source: "iana"
  },
  "application/vnd.curl.car": {
    source: "apache",
    extensions: [
      "car"
    ]
  },
  "application/vnd.curl.pcurl": {
    source: "apache",
    extensions: [
      "pcurl"
    ]
  },
  "application/vnd.cyan.dean.root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cybank": {
    source: "iana"
  },
  "application/vnd.cyclonedx+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cyclonedx+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.d2l.coursepackage1p0+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.d3m-dataset": {
    source: "iana"
  },
  "application/vnd.d3m-problem": {
    source: "iana"
  },
  "application/vnd.dart": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dart"
    ]
  },
  "application/vnd.data-vision.rdz": {
    source: "iana",
    extensions: [
      "rdz"
    ]
  },
  "application/vnd.datapackage+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dataresource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dbf": {
    source: "iana",
    extensions: [
      "dbf"
    ]
  },
  "application/vnd.debian.binary-package": {
    source: "iana"
  },
  "application/vnd.dece.data": {
    source: "iana",
    extensions: [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ]
  },
  "application/vnd.dece.ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uvt",
      "uvvt"
    ]
  },
  "application/vnd.dece.unspecified": {
    source: "iana",
    extensions: [
      "uvx",
      "uvvx"
    ]
  },
  "application/vnd.dece.zip": {
    source: "iana",
    extensions: [
      "uvz",
      "uvvz"
    ]
  },
  "application/vnd.denovo.fcselayout-link": {
    source: "iana",
    extensions: [
      "fe_launch"
    ]
  },
  "application/vnd.desmume.movie": {
    source: "iana"
  },
  "application/vnd.dir-bi.plate-dl-nosuffix": {
    source: "iana"
  },
  "application/vnd.dm.delegation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dna": {
    source: "iana",
    extensions: [
      "dna"
    ]
  },
  "application/vnd.document+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dolby.mlp": {
    source: "apache",
    extensions: [
      "mlp"
    ]
  },
  "application/vnd.dolby.mobile.1": {
    source: "iana"
  },
  "application/vnd.dolby.mobile.2": {
    source: "iana"
  },
  "application/vnd.doremir.scorecloud-binary-document": {
    source: "iana"
  },
  "application/vnd.dpgraph": {
    source: "iana",
    extensions: [
      "dpg"
    ]
  },
  "application/vnd.dreamfactory": {
    source: "iana",
    extensions: [
      "dfac"
    ]
  },
  "application/vnd.drive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ds-keypoint": {
    source: "apache",
    extensions: [
      "kpxx"
    ]
  },
  "application/vnd.dtg.local": {
    source: "iana"
  },
  "application/vnd.dtg.local.flash": {
    source: "iana"
  },
  "application/vnd.dtg.local.html": {
    source: "iana"
  },
  "application/vnd.dvb.ait": {
    source: "iana",
    extensions: [
      "ait"
    ]
  },
  "application/vnd.dvb.dvbisl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.dvbj": {
    source: "iana"
  },
  "application/vnd.dvb.esgcontainer": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcdftnotifaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess2": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgpdd": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcroaming": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-base": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-enhancement": {
    source: "iana"
  },
  "application/vnd.dvb.notif-aggregate-root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-container+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-generic+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-msglist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-init+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.pfr": {
    source: "iana"
  },
  "application/vnd.dvb.service": {
    source: "iana",
    extensions: [
      "svc"
    ]
  },
  "application/vnd.dxr": {
    source: "iana"
  },
  "application/vnd.dynageo": {
    source: "iana",
    extensions: [
      "geo"
    ]
  },
  "application/vnd.dzr": {
    source: "iana"
  },
  "application/vnd.easykaraoke.cdgdownload": {
    source: "iana"
  },
  "application/vnd.ecdis-update": {
    source: "iana"
  },
  "application/vnd.ecip.rlp": {
    source: "iana"
  },
  "application/vnd.eclipse.ditto+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ecowin.chart": {
    source: "iana",
    extensions: [
      "mag"
    ]
  },
  "application/vnd.ecowin.filerequest": {
    source: "iana"
  },
  "application/vnd.ecowin.fileupdate": {
    source: "iana"
  },
  "application/vnd.ecowin.series": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesrequest": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesupdate": {
    source: "iana"
  },
  "application/vnd.efi.img": {
    source: "iana"
  },
  "application/vnd.efi.iso": {
    source: "iana"
  },
  "application/vnd.emclient.accessrequest+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.enliven": {
    source: "iana",
    extensions: [
      "nml"
    ]
  },
  "application/vnd.enphase.envoy": {
    source: "iana"
  },
  "application/vnd.eprints.data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.epson.esf": {
    source: "iana",
    extensions: [
      "esf"
    ]
  },
  "application/vnd.epson.msf": {
    source: "iana",
    extensions: [
      "msf"
    ]
  },
  "application/vnd.epson.quickanime": {
    source: "iana",
    extensions: [
      "qam"
    ]
  },
  "application/vnd.epson.salt": {
    source: "iana",
    extensions: [
      "slt"
    ]
  },
  "application/vnd.epson.ssf": {
    source: "iana",
    extensions: [
      "ssf"
    ]
  },
  "application/vnd.ericsson.quickcall": {
    source: "iana"
  },
  "application/vnd.espass-espass+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.eszigno3+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es3",
      "et3"
    ]
  },
  "application/vnd.etsi.aoc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.asic-e+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.asic-s+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.cug+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvcommand+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-bc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-cod+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-npvr+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvservice+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mcid+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mheg5": {
    source: "iana"
  },
  "application/vnd.etsi.overload-control-policy-dataset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.pstn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.sci+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.simservs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.timestamp-token": {
    source: "iana"
  },
  "application/vnd.etsi.tsl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.tsl.der": {
    source: "iana"
  },
  "application/vnd.eu.kasparian.car+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.eudora.data": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.profile": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.settings": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.theme": {
    source: "iana"
  },
  "application/vnd.exstream-empower+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.exstream-package": {
    source: "iana"
  },
  "application/vnd.ezpix-album": {
    source: "iana",
    extensions: [
      "ez2"
    ]
  },
  "application/vnd.ezpix-package": {
    source: "iana",
    extensions: [
      "ez3"
    ]
  },
  "application/vnd.f-secure.mobile": {
    source: "iana"
  },
  "application/vnd.familysearch.gedcom+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.fastcopy-disk-image": {
    source: "iana"
  },
  "application/vnd.fdf": {
    source: "iana",
    extensions: [
      "fdf"
    ]
  },
  "application/vnd.fdsn.mseed": {
    source: "iana",
    extensions: [
      "mseed"
    ]
  },
  "application/vnd.fdsn.seed": {
    source: "iana",
    extensions: [
      "seed",
      "dataless"
    ]
  },
  "application/vnd.ffsns": {
    source: "iana"
  },
  "application/vnd.ficlab.flb+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.filmit.zfc": {
    source: "iana"
  },
  "application/vnd.fints": {
    source: "iana"
  },
  "application/vnd.firemonkeys.cloudcell": {
    source: "iana"
  },
  "application/vnd.flographit": {
    source: "iana",
    extensions: [
      "gph"
    ]
  },
  "application/vnd.fluxtime.clip": {
    source: "iana",
    extensions: [
      "ftc"
    ]
  },
  "application/vnd.font-fontforge-sfd": {
    source: "iana"
  },
  "application/vnd.framemaker": {
    source: "iana",
    extensions: [
      "fm",
      "frame",
      "maker",
      "book"
    ]
  },
  "application/vnd.frogans.fnc": {
    source: "iana",
    extensions: [
      "fnc"
    ]
  },
  "application/vnd.frogans.ltf": {
    source: "iana",
    extensions: [
      "ltf"
    ]
  },
  "application/vnd.fsc.weblaunch": {
    source: "iana",
    extensions: [
      "fsc"
    ]
  },
  "application/vnd.fujifilm.fb.docuworks": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.binder": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.jfi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fujitsu.oasys": {
    source: "iana",
    extensions: [
      "oas"
    ]
  },
  "application/vnd.fujitsu.oasys2": {
    source: "iana",
    extensions: [
      "oa2"
    ]
  },
  "application/vnd.fujitsu.oasys3": {
    source: "iana",
    extensions: [
      "oa3"
    ]
  },
  "application/vnd.fujitsu.oasysgp": {
    source: "iana",
    extensions: [
      "fg5"
    ]
  },
  "application/vnd.fujitsu.oasysprs": {
    source: "iana",
    extensions: [
      "bh2"
    ]
  },
  "application/vnd.fujixerox.art-ex": {
    source: "iana"
  },
  "application/vnd.fujixerox.art4": {
    source: "iana"
  },
  "application/vnd.fujixerox.ddd": {
    source: "iana",
    extensions: [
      "ddd"
    ]
  },
  "application/vnd.fujixerox.docuworks": {
    source: "iana",
    extensions: [
      "xdw"
    ]
  },
  "application/vnd.fujixerox.docuworks.binder": {
    source: "iana",
    extensions: [
      "xbd"
    ]
  },
  "application/vnd.fujixerox.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujixerox.hbpl": {
    source: "iana"
  },
  "application/vnd.fut-misnet": {
    source: "iana"
  },
  "application/vnd.futoin+cbor": {
    source: "iana"
  },
  "application/vnd.futoin+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fuzzysheet": {
    source: "iana",
    extensions: [
      "fzs"
    ]
  },
  "application/vnd.genomatix.tuxedo": {
    source: "iana",
    extensions: [
      "txd"
    ]
  },
  "application/vnd.gentics.grd+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geo+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geocube+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geogebra.file": {
    source: "iana",
    extensions: [
      "ggb"
    ]
  },
  "application/vnd.geogebra.slides": {
    source: "iana"
  },
  "application/vnd.geogebra.tool": {
    source: "iana",
    extensions: [
      "ggt"
    ]
  },
  "application/vnd.geometry-explorer": {
    source: "iana",
    extensions: [
      "gex",
      "gre"
    ]
  },
  "application/vnd.geonext": {
    source: "iana",
    extensions: [
      "gxt"
    ]
  },
  "application/vnd.geoplan": {
    source: "iana",
    extensions: [
      "g2w"
    ]
  },
  "application/vnd.geospace": {
    source: "iana",
    extensions: [
      "g3w"
    ]
  },
  "application/vnd.gerber": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt-response": {
    source: "iana"
  },
  "application/vnd.gmx": {
    source: "iana",
    extensions: [
      "gmx"
    ]
  },
  "application/vnd.google-apps.document": {
    compressible: !1,
    extensions: [
      "gdoc"
    ]
  },
  "application/vnd.google-apps.presentation": {
    compressible: !1,
    extensions: [
      "gslides"
    ]
  },
  "application/vnd.google-apps.spreadsheet": {
    compressible: !1,
    extensions: [
      "gsheet"
    ]
  },
  "application/vnd.google-earth.kml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "kml"
    ]
  },
  "application/vnd.google-earth.kmz": {
    source: "iana",
    compressible: !1,
    extensions: [
      "kmz"
    ]
  },
  "application/vnd.gov.sk.e-form+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.gov.sk.e-form+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.gov.sk.xmldatacontainer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.grafeq": {
    source: "iana",
    extensions: [
      "gqf",
      "gqs"
    ]
  },
  "application/vnd.gridmp": {
    source: "iana"
  },
  "application/vnd.groove-account": {
    source: "iana",
    extensions: [
      "gac"
    ]
  },
  "application/vnd.groove-help": {
    source: "iana",
    extensions: [
      "ghf"
    ]
  },
  "application/vnd.groove-identity-message": {
    source: "iana",
    extensions: [
      "gim"
    ]
  },
  "application/vnd.groove-injector": {
    source: "iana",
    extensions: [
      "grv"
    ]
  },
  "application/vnd.groove-tool-message": {
    source: "iana",
    extensions: [
      "gtm"
    ]
  },
  "application/vnd.groove-tool-template": {
    source: "iana",
    extensions: [
      "tpl"
    ]
  },
  "application/vnd.groove-vcard": {
    source: "iana",
    extensions: [
      "vcg"
    ]
  },
  "application/vnd.hal+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hal+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "hal"
    ]
  },
  "application/vnd.handheld-entertainment+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zmm"
    ]
  },
  "application/vnd.hbci": {
    source: "iana",
    extensions: [
      "hbci"
    ]
  },
  "application/vnd.hc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hcl-bireports": {
    source: "iana"
  },
  "application/vnd.hdt": {
    source: "iana"
  },
  "application/vnd.heroku+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hhe.lesson-player": {
    source: "iana",
    extensions: [
      "les"
    ]
  },
  "application/vnd.hl7cda+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hl7v2+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hp-hpgl": {
    source: "iana",
    extensions: [
      "hpgl"
    ]
  },
  "application/vnd.hp-hpid": {
    source: "iana",
    extensions: [
      "hpid"
    ]
  },
  "application/vnd.hp-hps": {
    source: "iana",
    extensions: [
      "hps"
    ]
  },
  "application/vnd.hp-jlyt": {
    source: "iana",
    extensions: [
      "jlt"
    ]
  },
  "application/vnd.hp-pcl": {
    source: "iana",
    extensions: [
      "pcl"
    ]
  },
  "application/vnd.hp-pclxl": {
    source: "iana",
    extensions: [
      "pclxl"
    ]
  },
  "application/vnd.httphone": {
    source: "iana"
  },
  "application/vnd.hydrostatix.sof-data": {
    source: "iana",
    extensions: [
      "sfd-hdstx"
    ]
  },
  "application/vnd.hyper+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyper-item+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyperdrive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hzn-3d-crossword": {
    source: "iana"
  },
  "application/vnd.ibm.afplinedata": {
    source: "iana"
  },
  "application/vnd.ibm.electronic-media": {
    source: "iana"
  },
  "application/vnd.ibm.minipay": {
    source: "iana",
    extensions: [
      "mpy"
    ]
  },
  "application/vnd.ibm.modcap": {
    source: "iana",
    extensions: [
      "afp",
      "listafp",
      "list3820"
    ]
  },
  "application/vnd.ibm.rights-management": {
    source: "iana",
    extensions: [
      "irm"
    ]
  },
  "application/vnd.ibm.secure-container": {
    source: "iana",
    extensions: [
      "sc"
    ]
  },
  "application/vnd.iccprofile": {
    source: "iana",
    extensions: [
      "icc",
      "icm"
    ]
  },
  "application/vnd.ieee.1905": {
    source: "iana"
  },
  "application/vnd.igloader": {
    source: "iana",
    extensions: [
      "igl"
    ]
  },
  "application/vnd.imagemeter.folder+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.imagemeter.image+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.immervision-ivp": {
    source: "iana",
    extensions: [
      "ivp"
    ]
  },
  "application/vnd.immervision-ivu": {
    source: "iana",
    extensions: [
      "ivu"
    ]
  },
  "application/vnd.ims.imsccv1p1": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p2": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p3": {
    source: "iana"
  },
  "application/vnd.ims.lis.v2.result+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy.id+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informedcontrol.rms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informix-visionary": {
    source: "iana"
  },
  "application/vnd.infotech.project": {
    source: "iana"
  },
  "application/vnd.infotech.project+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.innopath.wamp.notification": {
    source: "iana"
  },
  "application/vnd.insors.igm": {
    source: "iana",
    extensions: [
      "igm"
    ]
  },
  "application/vnd.intercon.formnet": {
    source: "iana",
    extensions: [
      "xpw",
      "xpx"
    ]
  },
  "application/vnd.intergeo": {
    source: "iana",
    extensions: [
      "i2g"
    ]
  },
  "application/vnd.intertrust.digibox": {
    source: "iana"
  },
  "application/vnd.intertrust.nncp": {
    source: "iana"
  },
  "application/vnd.intu.qbo": {
    source: "iana",
    extensions: [
      "qbo"
    ]
  },
  "application/vnd.intu.qfx": {
    source: "iana",
    extensions: [
      "qfx"
    ]
  },
  "application/vnd.iptc.g2.catalogitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.conceptitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.knowledgeitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.packageitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.planningitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ipunplugged.rcprofile": {
    source: "iana",
    extensions: [
      "rcprofile"
    ]
  },
  "application/vnd.irepository.package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "irp"
    ]
  },
  "application/vnd.is-xpr": {
    source: "iana",
    extensions: [
      "xpr"
    ]
  },
  "application/vnd.isac.fcs": {
    source: "iana",
    extensions: [
      "fcs"
    ]
  },
  "application/vnd.iso11783-10+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.jam": {
    source: "iana",
    extensions: [
      "jam"
    ]
  },
  "application/vnd.japannet-directory-service": {
    source: "iana"
  },
  "application/vnd.japannet-jpnstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-payment-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-registration": {
    source: "iana"
  },
  "application/vnd.japannet-registration-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-setstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-verification": {
    source: "iana"
  },
  "application/vnd.japannet-verification-wakeup": {
    source: "iana"
  },
  "application/vnd.jcp.javame.midlet-rms": {
    source: "iana",
    extensions: [
      "rms"
    ]
  },
  "application/vnd.jisp": {
    source: "iana",
    extensions: [
      "jisp"
    ]
  },
  "application/vnd.joost.joda-archive": {
    source: "iana",
    extensions: [
      "joda"
    ]
  },
  "application/vnd.jsk.isdn-ngn": {
    source: "iana"
  },
  "application/vnd.kahootz": {
    source: "iana",
    extensions: [
      "ktz",
      "ktr"
    ]
  },
  "application/vnd.kde.karbon": {
    source: "iana",
    extensions: [
      "karbon"
    ]
  },
  "application/vnd.kde.kchart": {
    source: "iana",
    extensions: [
      "chrt"
    ]
  },
  "application/vnd.kde.kformula": {
    source: "iana",
    extensions: [
      "kfo"
    ]
  },
  "application/vnd.kde.kivio": {
    source: "iana",
    extensions: [
      "flw"
    ]
  },
  "application/vnd.kde.kontour": {
    source: "iana",
    extensions: [
      "kon"
    ]
  },
  "application/vnd.kde.kpresenter": {
    source: "iana",
    extensions: [
      "kpr",
      "kpt"
    ]
  },
  "application/vnd.kde.kspread": {
    source: "iana",
    extensions: [
      "ksp"
    ]
  },
  "application/vnd.kde.kword": {
    source: "iana",
    extensions: [
      "kwd",
      "kwt"
    ]
  },
  "application/vnd.kenameaapp": {
    source: "iana",
    extensions: [
      "htke"
    ]
  },
  "application/vnd.kidspiration": {
    source: "iana",
    extensions: [
      "kia"
    ]
  },
  "application/vnd.kinar": {
    source: "iana",
    extensions: [
      "kne",
      "knp"
    ]
  },
  "application/vnd.koan": {
    source: "iana",
    extensions: [
      "skp",
      "skd",
      "skt",
      "skm"
    ]
  },
  "application/vnd.kodak-descriptor": {
    source: "iana",
    extensions: [
      "sse"
    ]
  },
  "application/vnd.las": {
    source: "iana"
  },
  "application/vnd.las.las+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.las.las+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lasxml"
    ]
  },
  "application/vnd.laszip": {
    source: "iana"
  },
  "application/vnd.leap+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.liberty-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    source: "iana",
    extensions: [
      "lbd"
    ]
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lbe"
    ]
  },
  "application/vnd.logipipe.circuit+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.loom": {
    source: "iana"
  },
  "application/vnd.lotus-1-2-3": {
    source: "iana",
    extensions: [
      "123"
    ]
  },
  "application/vnd.lotus-approach": {
    source: "iana",
    extensions: [
      "apr"
    ]
  },
  "application/vnd.lotus-freelance": {
    source: "iana",
    extensions: [
      "pre"
    ]
  },
  "application/vnd.lotus-notes": {
    source: "iana",
    extensions: [
      "nsf"
    ]
  },
  "application/vnd.lotus-organizer": {
    source: "iana",
    extensions: [
      "org"
    ]
  },
  "application/vnd.lotus-screencam": {
    source: "iana",
    extensions: [
      "scm"
    ]
  },
  "application/vnd.lotus-wordpro": {
    source: "iana",
    extensions: [
      "lwp"
    ]
  },
  "application/vnd.macports.portpkg": {
    source: "iana",
    extensions: [
      "portpkg"
    ]
  },
  "application/vnd.mapbox-vector-tile": {
    source: "iana",
    extensions: [
      "mvt"
    ]
  },
  "application/vnd.marlin.drm.actiontoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.conftoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.license+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.mdcf": {
    source: "iana"
  },
  "application/vnd.mason+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.maxar.archive.3tz+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.maxmind.maxmind-db": {
    source: "iana"
  },
  "application/vnd.mcd": {
    source: "iana",
    extensions: [
      "mcd"
    ]
  },
  "application/vnd.medcalcdata": {
    source: "iana",
    extensions: [
      "mc1"
    ]
  },
  "application/vnd.mediastation.cdkey": {
    source: "iana",
    extensions: [
      "cdkey"
    ]
  },
  "application/vnd.meridian-slingshot": {
    source: "iana"
  },
  "application/vnd.mfer": {
    source: "iana",
    extensions: [
      "mwf"
    ]
  },
  "application/vnd.mfmp": {
    source: "iana",
    extensions: [
      "mfm"
    ]
  },
  "application/vnd.micro+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.micrografx.flo": {
    source: "iana",
    extensions: [
      "flo"
    ]
  },
  "application/vnd.micrografx.igx": {
    source: "iana",
    extensions: [
      "igx"
    ]
  },
  "application/vnd.microsoft.portable-executable": {
    source: "iana"
  },
  "application/vnd.microsoft.windows.thumbnail-cache": {
    source: "iana"
  },
  "application/vnd.miele+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.mif": {
    source: "iana",
    extensions: [
      "mif"
    ]
  },
  "application/vnd.minisoft-hp3000-save": {
    source: "iana"
  },
  "application/vnd.mitsubishi.misty-guard.trustweb": {
    source: "iana"
  },
  "application/vnd.mobius.daf": {
    source: "iana",
    extensions: [
      "daf"
    ]
  },
  "application/vnd.mobius.dis": {
    source: "iana",
    extensions: [
      "dis"
    ]
  },
  "application/vnd.mobius.mbk": {
    source: "iana",
    extensions: [
      "mbk"
    ]
  },
  "application/vnd.mobius.mqy": {
    source: "iana",
    extensions: [
      "mqy"
    ]
  },
  "application/vnd.mobius.msl": {
    source: "iana",
    extensions: [
      "msl"
    ]
  },
  "application/vnd.mobius.plc": {
    source: "iana",
    extensions: [
      "plc"
    ]
  },
  "application/vnd.mobius.txf": {
    source: "iana",
    extensions: [
      "txf"
    ]
  },
  "application/vnd.mophun.application": {
    source: "iana",
    extensions: [
      "mpn"
    ]
  },
  "application/vnd.mophun.certificate": {
    source: "iana",
    extensions: [
      "mpc"
    ]
  },
  "application/vnd.motorola.flexsuite": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.adsi": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.fis": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.gotap": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.kmr": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.ttc": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.wem": {
    source: "iana"
  },
  "application/vnd.motorola.iprm": {
    source: "iana"
  },
  "application/vnd.mozilla.xul+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xul"
    ]
  },
  "application/vnd.ms-3mfdocument": {
    source: "iana"
  },
  "application/vnd.ms-artgalry": {
    source: "iana",
    extensions: [
      "cil"
    ]
  },
  "application/vnd.ms-asf": {
    source: "iana"
  },
  "application/vnd.ms-cab-compressed": {
    source: "iana",
    extensions: [
      "cab"
    ]
  },
  "application/vnd.ms-color.iccprofile": {
    source: "apache"
  },
  "application/vnd.ms-excel": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xls",
      "xlm",
      "xla",
      "xlc",
      "xlt",
      "xlw"
    ]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlam"
    ]
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsb"
    ]
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsm"
    ]
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "xltm"
    ]
  },
  "application/vnd.ms-fontobject": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eot"
    ]
  },
  "application/vnd.ms-htmlhelp": {
    source: "iana",
    extensions: [
      "chm"
    ]
  },
  "application/vnd.ms-ims": {
    source: "iana",
    extensions: [
      "ims"
    ]
  },
  "application/vnd.ms-lrm": {
    source: "iana",
    extensions: [
      "lrm"
    ]
  },
  "application/vnd.ms-office.activex+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-officetheme": {
    source: "iana",
    extensions: [
      "thmx"
    ]
  },
  "application/vnd.ms-opentype": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-outlook": {
    compressible: !1,
    extensions: [
      "msg"
    ]
  },
  "application/vnd.ms-package.obfuscated-opentype": {
    source: "apache"
  },
  "application/vnd.ms-pki.seccat": {
    source: "apache",
    extensions: [
      "cat"
    ]
  },
  "application/vnd.ms-pki.stl": {
    source: "apache",
    extensions: [
      "stl"
    ]
  },
  "application/vnd.ms-playready.initiator+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-powerpoint": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ppt",
      "pps",
      "pot"
    ]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppam"
    ]
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    source: "iana",
    extensions: [
      "pptm"
    ]
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    source: "iana",
    extensions: [
      "sldm"
    ]
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppsm"
    ]
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "potm"
    ]
  },
  "application/vnd.ms-printdevicecapabilities+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-printing.printticket+xml": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-printschematicket+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-project": {
    source: "iana",
    extensions: [
      "mpp",
      "mpt"
    ]
  },
  "application/vnd.ms-tnef": {
    source: "iana"
  },
  "application/vnd.ms-windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.nwprinting.oob": {
    source: "iana"
  },
  "application/vnd.ms-windows.printerpairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.wsd.oob": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-resp": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-resp": {
    source: "iana"
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    source: "iana",
    extensions: [
      "docm"
    ]
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "dotm"
    ]
  },
  "application/vnd.ms-works": {
    source: "iana",
    extensions: [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ]
  },
  "application/vnd.ms-wpl": {
    source: "iana",
    extensions: [
      "wpl"
    ]
  },
  "application/vnd.ms-xpsdocument": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xps"
    ]
  },
  "application/vnd.msa-disk-image": {
    source: "iana"
  },
  "application/vnd.mseq": {
    source: "iana",
    extensions: [
      "mseq"
    ]
  },
  "application/vnd.msign": {
    source: "iana"
  },
  "application/vnd.multiad.creator": {
    source: "iana"
  },
  "application/vnd.multiad.creator.cif": {
    source: "iana"
  },
  "application/vnd.music-niff": {
    source: "iana"
  },
  "application/vnd.musician": {
    source: "iana",
    extensions: [
      "mus"
    ]
  },
  "application/vnd.muvee.style": {
    source: "iana",
    extensions: [
      "msty"
    ]
  },
  "application/vnd.mynfc": {
    source: "iana",
    extensions: [
      "taglet"
    ]
  },
  "application/vnd.nacamar.ybrid+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ncd.control": {
    source: "iana"
  },
  "application/vnd.ncd.reference": {
    source: "iana"
  },
  "application/vnd.nearst.inv+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nebumind.line": {
    source: "iana"
  },
  "application/vnd.nervana": {
    source: "iana"
  },
  "application/vnd.netfpx": {
    source: "iana"
  },
  "application/vnd.neurolanguage.nlu": {
    source: "iana",
    extensions: [
      "nlu"
    ]
  },
  "application/vnd.nimn": {
    source: "iana"
  },
  "application/vnd.nintendo.nitro.rom": {
    source: "iana"
  },
  "application/vnd.nintendo.snes.rom": {
    source: "iana"
  },
  "application/vnd.nitf": {
    source: "iana",
    extensions: [
      "ntf",
      "nitf"
    ]
  },
  "application/vnd.noblenet-directory": {
    source: "iana",
    extensions: [
      "nnd"
    ]
  },
  "application/vnd.noblenet-sealer": {
    source: "iana",
    extensions: [
      "nns"
    ]
  },
  "application/vnd.noblenet-web": {
    source: "iana",
    extensions: [
      "nnw"
    ]
  },
  "application/vnd.nokia.catalogs": {
    source: "iana"
  },
  "application/vnd.nokia.conml+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.conml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.iptv.config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.isds-radio-presets": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.landmarkcollection+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ac"
    ]
  },
  "application/vnd.nokia.n-gage.data": {
    source: "iana",
    extensions: [
      "ngdat"
    ]
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    source: "iana",
    extensions: [
      "n-gage"
    ]
  },
  "application/vnd.nokia.ncd": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.radio-preset": {
    source: "iana",
    extensions: [
      "rpst"
    ]
  },
  "application/vnd.nokia.radio-presets": {
    source: "iana",
    extensions: [
      "rpss"
    ]
  },
  "application/vnd.novadigm.edm": {
    source: "iana",
    extensions: [
      "edm"
    ]
  },
  "application/vnd.novadigm.edx": {
    source: "iana",
    extensions: [
      "edx"
    ]
  },
  "application/vnd.novadigm.ext": {
    source: "iana",
    extensions: [
      "ext"
    ]
  },
  "application/vnd.ntt-local.content-share": {
    source: "iana"
  },
  "application/vnd.ntt-local.file-transfer": {
    source: "iana"
  },
  "application/vnd.ntt-local.ogw_remote-access": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_remote": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_tcp_stream": {
    source: "iana"
  },
  "application/vnd.oasis.opendocument.chart": {
    source: "iana",
    extensions: [
      "odc"
    ]
  },
  "application/vnd.oasis.opendocument.chart-template": {
    source: "iana",
    extensions: [
      "otc"
    ]
  },
  "application/vnd.oasis.opendocument.database": {
    source: "iana",
    extensions: [
      "odb"
    ]
  },
  "application/vnd.oasis.opendocument.formula": {
    source: "iana",
    extensions: [
      "odf"
    ]
  },
  "application/vnd.oasis.opendocument.formula-template": {
    source: "iana",
    extensions: [
      "odft"
    ]
  },
  "application/vnd.oasis.opendocument.graphics": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odg"
    ]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    source: "iana",
    extensions: [
      "otg"
    ]
  },
  "application/vnd.oasis.opendocument.image": {
    source: "iana",
    extensions: [
      "odi"
    ]
  },
  "application/vnd.oasis.opendocument.image-template": {
    source: "iana",
    extensions: [
      "oti"
    ]
  },
  "application/vnd.oasis.opendocument.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odp"
    ]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    source: "iana",
    extensions: [
      "otp"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ods"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    source: "iana",
    extensions: [
      "ots"
    ]
  },
  "application/vnd.oasis.opendocument.text": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odt"
    ]
  },
  "application/vnd.oasis.opendocument.text-master": {
    source: "iana",
    extensions: [
      "odm"
    ]
  },
  "application/vnd.oasis.opendocument.text-template": {
    source: "iana",
    extensions: [
      "ott"
    ]
  },
  "application/vnd.oasis.opendocument.text-web": {
    source: "iana",
    extensions: [
      "oth"
    ]
  },
  "application/vnd.obn": {
    source: "iana"
  },
  "application/vnd.ocf+cbor": {
    source: "iana"
  },
  "application/vnd.oci.image.manifest.v1+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oftn.l10n+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessdownload+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessstreaming+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.cspg-hexbinary": {
    source: "iana"
  },
  "application/vnd.oipf.dae.svg+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.dae.xhtml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.mippvcontrolmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.pae.gem": {
    source: "iana"
  },
  "application/vnd.oipf.spdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.spdlist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.ueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.userprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.olpc-sugar": {
    source: "iana",
    extensions: [
      "xo"
    ]
  },
  "application/vnd.oma-scws-config": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-request": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-response": {
    source: "iana"
  },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.drm-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.imd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.ltkm": {
    source: "iana"
  },
  "application/vnd.oma.bcast.notification+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.provisioningtrigger": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgboot": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgdd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sgdu": {
    source: "iana"
  },
  "application/vnd.oma.bcast.simple-symbol-container": {
    source: "iana"
  },
  "application/vnd.oma.bcast.smartcard-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sprov+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.stkm": {
    source: "iana"
  },
  "application/vnd.oma.cab-address-book+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-feature-handler+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-pcc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-subs-invite+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-user-prefs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.dcd": {
    source: "iana"
  },
  "application/vnd.oma.dcdc": {
    source: "iana"
  },
  "application/vnd.oma.dd2+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dd2"
    ]
  },
  "application/vnd.oma.drm.risd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.group-usage-list+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+cbor": {
    source: "iana"
  },
  "application/vnd.oma.lwm2m+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+tlv": {
    source: "iana"
  },
  "application/vnd.oma.pal+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.detailed-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.final-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.groups+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.invocation-descriptor+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.optimized-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.push": {
    source: "iana"
  },
  "application/vnd.oma.scidm.messages+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.xcap-directory+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.omads-email+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-file+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-folder+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omaloc-supl-init": {
    source: "iana"
  },
  "application/vnd.onepager": {
    source: "iana"
  },
  "application/vnd.onepagertamp": {
    source: "iana"
  },
  "application/vnd.onepagertamx": {
    source: "iana"
  },
  "application/vnd.onepagertat": {
    source: "iana"
  },
  "application/vnd.onepagertatp": {
    source: "iana"
  },
  "application/vnd.onepagertatx": {
    source: "iana"
  },
  "application/vnd.openblox.game+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "obgx"
    ]
  },
  "application/vnd.openblox.game-binary": {
    source: "iana"
  },
  "application/vnd.openeye.oeb": {
    source: "iana"
  },
  "application/vnd.openofficeorg.extension": {
    source: "apache",
    extensions: [
      "oxt"
    ]
  },
  "application/vnd.openstreetmap.data+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osm"
    ]
  },
  "application/vnd.opentimestamps.ots": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawing+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pptx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    source: "iana",
    extensions: [
      "sldx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    source: "iana",
    extensions: [
      "ppsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    source: "iana",
    extensions: [
      "potx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xlsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    source: "iana",
    extensions: [
      "xltx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.theme+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.vmldrawing": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    source: "iana",
    compressible: !1,
    extensions: [
      "docx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    source: "iana",
    extensions: [
      "dotx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.core-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.relationships+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oracle.resource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.orange.indata": {
    source: "iana"
  },
  "application/vnd.osa.netdeploy": {
    source: "iana"
  },
  "application/vnd.osgeo.mapguide.package": {
    source: "iana",
    extensions: [
      "mgp"
    ]
  },
  "application/vnd.osgi.bundle": {
    source: "iana"
  },
  "application/vnd.osgi.dp": {
    source: "iana",
    extensions: [
      "dp"
    ]
  },
  "application/vnd.osgi.subsystem": {
    source: "iana",
    extensions: [
      "esa"
    ]
  },
  "application/vnd.otps.ct-kip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oxli.countgraph": {
    source: "iana"
  },
  "application/vnd.pagerduty+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.palm": {
    source: "iana",
    extensions: [
      "pdb",
      "pqa",
      "oprc"
    ]
  },
  "application/vnd.panoply": {
    source: "iana"
  },
  "application/vnd.paos.xml": {
    source: "iana"
  },
  "application/vnd.patentdive": {
    source: "iana"
  },
  "application/vnd.patientecommsdoc": {
    source: "iana"
  },
  "application/vnd.pawaafile": {
    source: "iana",
    extensions: [
      "paw"
    ]
  },
  "application/vnd.pcos": {
    source: "iana"
  },
  "application/vnd.pg.format": {
    source: "iana",
    extensions: [
      "str"
    ]
  },
  "application/vnd.pg.osasli": {
    source: "iana",
    extensions: [
      "ei6"
    ]
  },
  "application/vnd.piaccess.application-licence": {
    source: "iana"
  },
  "application/vnd.picsel": {
    source: "iana",
    extensions: [
      "efif"
    ]
  },
  "application/vnd.pmi.widget": {
    source: "iana",
    extensions: [
      "wg"
    ]
  },
  "application/vnd.poc.group-advertisement+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.pocketlearn": {
    source: "iana",
    extensions: [
      "plf"
    ]
  },
  "application/vnd.powerbuilder6": {
    source: "iana",
    extensions: [
      "pbd"
    ]
  },
  "application/vnd.powerbuilder6-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder7": {
    source: "iana"
  },
  "application/vnd.powerbuilder7-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder75": {
    source: "iana"
  },
  "application/vnd.powerbuilder75-s": {
    source: "iana"
  },
  "application/vnd.preminet": {
    source: "iana"
  },
  "application/vnd.previewsystems.box": {
    source: "iana",
    extensions: [
      "box"
    ]
  },
  "application/vnd.proteus.magazine": {
    source: "iana",
    extensions: [
      "mgz"
    ]
  },
  "application/vnd.psfs": {
    source: "iana"
  },
  "application/vnd.publishare-delta-tree": {
    source: "iana",
    extensions: [
      "qps"
    ]
  },
  "application/vnd.pvi.ptid1": {
    source: "iana",
    extensions: [
      "ptid"
    ]
  },
  "application/vnd.pwg-multiplexed": {
    source: "iana"
  },
  "application/vnd.pwg-xhtml-print+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.qualcomm.brew-app-res": {
    source: "iana"
  },
  "application/vnd.quarantainenet": {
    source: "iana"
  },
  "application/vnd.quark.quarkxpress": {
    source: "iana",
    extensions: [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ]
  },
  "application/vnd.quobject-quoxdocument": {
    source: "iana"
  },
  "application/vnd.radisys.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-stream+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-base+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-group+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-speech+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-transform+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rainstor.data": {
    source: "iana"
  },
  "application/vnd.rapid": {
    source: "iana"
  },
  "application/vnd.rar": {
    source: "iana",
    extensions: [
      "rar"
    ]
  },
  "application/vnd.realvnc.bed": {
    source: "iana",
    extensions: [
      "bed"
    ]
  },
  "application/vnd.recordare.musicxml": {
    source: "iana",
    extensions: [
      "mxl"
    ]
  },
  "application/vnd.recordare.musicxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musicxml"
    ]
  },
  "application/vnd.renlearn.rlprint": {
    source: "iana"
  },
  "application/vnd.resilient.logic": {
    source: "iana"
  },
  "application/vnd.restful+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rig.cryptonote": {
    source: "iana",
    extensions: [
      "cryptonote"
    ]
  },
  "application/vnd.rim.cod": {
    source: "apache",
    extensions: [
      "cod"
    ]
  },
  "application/vnd.rn-realmedia": {
    source: "apache",
    extensions: [
      "rm"
    ]
  },
  "application/vnd.rn-realmedia-vbr": {
    source: "apache",
    extensions: [
      "rmvb"
    ]
  },
  "application/vnd.route66.link66+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "link66"
    ]
  },
  "application/vnd.rs-274x": {
    source: "iana"
  },
  "application/vnd.ruckus.download": {
    source: "iana"
  },
  "application/vnd.s3sms": {
    source: "iana"
  },
  "application/vnd.sailingtracker.track": {
    source: "iana",
    extensions: [
      "st"
    ]
  },
  "application/vnd.sar": {
    source: "iana"
  },
  "application/vnd.sbm.cid": {
    source: "iana"
  },
  "application/vnd.sbm.mid2": {
    source: "iana"
  },
  "application/vnd.scribus": {
    source: "iana"
  },
  "application/vnd.sealed.3df": {
    source: "iana"
  },
  "application/vnd.sealed.csf": {
    source: "iana"
  },
  "application/vnd.sealed.doc": {
    source: "iana"
  },
  "application/vnd.sealed.eml": {
    source: "iana"
  },
  "application/vnd.sealed.mht": {
    source: "iana"
  },
  "application/vnd.sealed.net": {
    source: "iana"
  },
  "application/vnd.sealed.ppt": {
    source: "iana"
  },
  "application/vnd.sealed.tiff": {
    source: "iana"
  },
  "application/vnd.sealed.xls": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.html": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.pdf": {
    source: "iana"
  },
  "application/vnd.seemail": {
    source: "iana",
    extensions: [
      "see"
    ]
  },
  "application/vnd.seis+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.sema": {
    source: "iana",
    extensions: [
      "sema"
    ]
  },
  "application/vnd.semd": {
    source: "iana",
    extensions: [
      "semd"
    ]
  },
  "application/vnd.semf": {
    source: "iana",
    extensions: [
      "semf"
    ]
  },
  "application/vnd.shade-save-file": {
    source: "iana"
  },
  "application/vnd.shana.informed.formdata": {
    source: "iana",
    extensions: [
      "ifm"
    ]
  },
  "application/vnd.shana.informed.formtemplate": {
    source: "iana",
    extensions: [
      "itp"
    ]
  },
  "application/vnd.shana.informed.interchange": {
    source: "iana",
    extensions: [
      "iif"
    ]
  },
  "application/vnd.shana.informed.package": {
    source: "iana",
    extensions: [
      "ipk"
    ]
  },
  "application/vnd.shootproof+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shopkick+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shp": {
    source: "iana"
  },
  "application/vnd.shx": {
    source: "iana"
  },
  "application/vnd.sigrok.session": {
    source: "iana"
  },
  "application/vnd.simtech-mindmapper": {
    source: "iana",
    extensions: [
      "twd",
      "twds"
    ]
  },
  "application/vnd.siren+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.smaf": {
    source: "iana",
    extensions: [
      "mmf"
    ]
  },
  "application/vnd.smart.notebook": {
    source: "iana"
  },
  "application/vnd.smart.teacher": {
    source: "iana",
    extensions: [
      "teacher"
    ]
  },
  "application/vnd.snesdev-page-table": {
    source: "iana"
  },
  "application/vnd.software602.filler.form+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fo"
    ]
  },
  "application/vnd.software602.filler.form-xml-zip": {
    source: "iana"
  },
  "application/vnd.solent.sdkm+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sdkm",
      "sdkd"
    ]
  },
  "application/vnd.spotfire.dxp": {
    source: "iana",
    extensions: [
      "dxp"
    ]
  },
  "application/vnd.spotfire.sfs": {
    source: "iana",
    extensions: [
      "sfs"
    ]
  },
  "application/vnd.sqlite3": {
    source: "iana"
  },
  "application/vnd.sss-cod": {
    source: "iana"
  },
  "application/vnd.sss-dtf": {
    source: "iana"
  },
  "application/vnd.sss-ntf": {
    source: "iana"
  },
  "application/vnd.stardivision.calc": {
    source: "apache",
    extensions: [
      "sdc"
    ]
  },
  "application/vnd.stardivision.draw": {
    source: "apache",
    extensions: [
      "sda"
    ]
  },
  "application/vnd.stardivision.impress": {
    source: "apache",
    extensions: [
      "sdd"
    ]
  },
  "application/vnd.stardivision.math": {
    source: "apache",
    extensions: [
      "smf"
    ]
  },
  "application/vnd.stardivision.writer": {
    source: "apache",
    extensions: [
      "sdw",
      "vor"
    ]
  },
  "application/vnd.stardivision.writer-global": {
    source: "apache",
    extensions: [
      "sgl"
    ]
  },
  "application/vnd.stepmania.package": {
    source: "iana",
    extensions: [
      "smzip"
    ]
  },
  "application/vnd.stepmania.stepchart": {
    source: "iana",
    extensions: [
      "sm"
    ]
  },
  "application/vnd.street-stream": {
    source: "iana"
  },
  "application/vnd.sun.wadl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wadl"
    ]
  },
  "application/vnd.sun.xml.calc": {
    source: "apache",
    extensions: [
      "sxc"
    ]
  },
  "application/vnd.sun.xml.calc.template": {
    source: "apache",
    extensions: [
      "stc"
    ]
  },
  "application/vnd.sun.xml.draw": {
    source: "apache",
    extensions: [
      "sxd"
    ]
  },
  "application/vnd.sun.xml.draw.template": {
    source: "apache",
    extensions: [
      "std"
    ]
  },
  "application/vnd.sun.xml.impress": {
    source: "apache",
    extensions: [
      "sxi"
    ]
  },
  "application/vnd.sun.xml.impress.template": {
    source: "apache",
    extensions: [
      "sti"
    ]
  },
  "application/vnd.sun.xml.math": {
    source: "apache",
    extensions: [
      "sxm"
    ]
  },
  "application/vnd.sun.xml.writer": {
    source: "apache",
    extensions: [
      "sxw"
    ]
  },
  "application/vnd.sun.xml.writer.global": {
    source: "apache",
    extensions: [
      "sxg"
    ]
  },
  "application/vnd.sun.xml.writer.template": {
    source: "apache",
    extensions: [
      "stw"
    ]
  },
  "application/vnd.sus-calendar": {
    source: "iana",
    extensions: [
      "sus",
      "susp"
    ]
  },
  "application/vnd.svd": {
    source: "iana",
    extensions: [
      "svd"
    ]
  },
  "application/vnd.swiftview-ics": {
    source: "iana"
  },
  "application/vnd.sycle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.syft+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.symbian.install": {
    source: "apache",
    extensions: [
      "sis",
      "sisx"
    ]
  },
  "application/vnd.syncml+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xsm"
    ]
  },
  "application/vnd.syncml.dm+wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "bdm"
    ]
  },
  "application/vnd.syncml.dm+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xdm"
    ]
  },
  "application/vnd.syncml.dm.notification": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "ddf"
    ]
  },
  "application/vnd.syncml.dmtnds+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmtnds+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.syncml.ds.notification": {
    source: "iana"
  },
  "application/vnd.tableschema+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tao.intent-module-archive": {
    source: "iana",
    extensions: [
      "tao"
    ]
  },
  "application/vnd.tcpdump.pcap": {
    source: "iana",
    extensions: [
      "pcap",
      "cap",
      "dmp"
    ]
  },
  "application/vnd.think-cell.ppttc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tmd.mediaflex.api+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tml": {
    source: "iana"
  },
  "application/vnd.tmobile-livetv": {
    source: "iana",
    extensions: [
      "tmo"
    ]
  },
  "application/vnd.tri.onesource": {
    source: "iana"
  },
  "application/vnd.trid.tpt": {
    source: "iana",
    extensions: [
      "tpt"
    ]
  },
  "application/vnd.triscape.mxs": {
    source: "iana",
    extensions: [
      "mxs"
    ]
  },
  "application/vnd.trueapp": {
    source: "iana",
    extensions: [
      "tra"
    ]
  },
  "application/vnd.truedoc": {
    source: "iana"
  },
  "application/vnd.ubisoft.webplayer": {
    source: "iana"
  },
  "application/vnd.ufdl": {
    source: "iana",
    extensions: [
      "ufd",
      "ufdl"
    ]
  },
  "application/vnd.uiq.theme": {
    source: "iana",
    extensions: [
      "utz"
    ]
  },
  "application/vnd.umajin": {
    source: "iana",
    extensions: [
      "umj"
    ]
  },
  "application/vnd.unity": {
    source: "iana",
    extensions: [
      "unityweb"
    ]
  },
  "application/vnd.uoml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uoml"
    ]
  },
  "application/vnd.uplanet.alert": {
    source: "iana"
  },
  "application/vnd.uplanet.alert-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.channel": {
    source: "iana"
  },
  "application/vnd.uplanet.channel-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.list": {
    source: "iana"
  },
  "application/vnd.uplanet.list-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.signal": {
    source: "iana"
  },
  "application/vnd.uri-map": {
    source: "iana"
  },
  "application/vnd.valve.source.material": {
    source: "iana"
  },
  "application/vnd.vcx": {
    source: "iana",
    extensions: [
      "vcx"
    ]
  },
  "application/vnd.vd-study": {
    source: "iana"
  },
  "application/vnd.vectorworks": {
    source: "iana"
  },
  "application/vnd.vel+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.verimatrix.vcas": {
    source: "iana"
  },
  "application/vnd.veritone.aion+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.veryant.thin": {
    source: "iana"
  },
  "application/vnd.ves.encrypted": {
    source: "iana"
  },
  "application/vnd.vidsoft.vidconference": {
    source: "iana"
  },
  "application/vnd.visio": {
    source: "iana",
    extensions: [
      "vsd",
      "vst",
      "vss",
      "vsw"
    ]
  },
  "application/vnd.visionary": {
    source: "iana",
    extensions: [
      "vis"
    ]
  },
  "application/vnd.vividence.scriptfile": {
    source: "iana"
  },
  "application/vnd.vsf": {
    source: "iana",
    extensions: [
      "vsf"
    ]
  },
  "application/vnd.wap.sic": {
    source: "iana"
  },
  "application/vnd.wap.slc": {
    source: "iana"
  },
  "application/vnd.wap.wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "wbxml"
    ]
  },
  "application/vnd.wap.wmlc": {
    source: "iana",
    extensions: [
      "wmlc"
    ]
  },
  "application/vnd.wap.wmlscriptc": {
    source: "iana",
    extensions: [
      "wmlsc"
    ]
  },
  "application/vnd.webturbo": {
    source: "iana",
    extensions: [
      "wtb"
    ]
  },
  "application/vnd.wfa.dpp": {
    source: "iana"
  },
  "application/vnd.wfa.p2p": {
    source: "iana"
  },
  "application/vnd.wfa.wsc": {
    source: "iana"
  },
  "application/vnd.windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.wmc": {
    source: "iana"
  },
  "application/vnd.wmf.bootstrap": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica.package": {
    source: "iana"
  },
  "application/vnd.wolfram.player": {
    source: "iana",
    extensions: [
      "nbp"
    ]
  },
  "application/vnd.wordperfect": {
    source: "iana",
    extensions: [
      "wpd"
    ]
  },
  "application/vnd.wqd": {
    source: "iana",
    extensions: [
      "wqd"
    ]
  },
  "application/vnd.wrq-hp3000-labelled": {
    source: "iana"
  },
  "application/vnd.wt.stf": {
    source: "iana",
    extensions: [
      "stf"
    ]
  },
  "application/vnd.wv.csp+wbxml": {
    source: "iana"
  },
  "application/vnd.wv.csp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.wv.ssp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xacml+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xara": {
    source: "iana",
    extensions: [
      "xar"
    ]
  },
  "application/vnd.xfdl": {
    source: "iana",
    extensions: [
      "xfdl"
    ]
  },
  "application/vnd.xfdl.webform": {
    source: "iana"
  },
  "application/vnd.xmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xmpie.cpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.dpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.plan": {
    source: "iana"
  },
  "application/vnd.xmpie.ppkg": {
    source: "iana"
  },
  "application/vnd.xmpie.xlim": {
    source: "iana"
  },
  "application/vnd.yamaha.hv-dic": {
    source: "iana",
    extensions: [
      "hvd"
    ]
  },
  "application/vnd.yamaha.hv-script": {
    source: "iana",
    extensions: [
      "hvs"
    ]
  },
  "application/vnd.yamaha.hv-voice": {
    source: "iana",
    extensions: [
      "hvp"
    ]
  },
  "application/vnd.yamaha.openscoreformat": {
    source: "iana",
    extensions: [
      "osf"
    ]
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osfpvg"
    ]
  },
  "application/vnd.yamaha.remote-setup": {
    source: "iana"
  },
  "application/vnd.yamaha.smaf-audio": {
    source: "iana",
    extensions: [
      "saf"
    ]
  },
  "application/vnd.yamaha.smaf-phrase": {
    source: "iana",
    extensions: [
      "spf"
    ]
  },
  "application/vnd.yamaha.through-ngn": {
    source: "iana"
  },
  "application/vnd.yamaha.tunnel-udpencap": {
    source: "iana"
  },
  "application/vnd.yaoweme": {
    source: "iana"
  },
  "application/vnd.yellowriver-custom-menu": {
    source: "iana",
    extensions: [
      "cmp"
    ]
  },
  "application/vnd.youtube.yt": {
    source: "iana"
  },
  "application/vnd.zul": {
    source: "iana",
    extensions: [
      "zir",
      "zirz"
    ]
  },
  "application/vnd.zzazz.deck+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zaz"
    ]
  },
  "application/voicexml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vxml"
    ]
  },
  "application/voucher-cms+json": {
    source: "iana",
    compressible: !0
  },
  "application/vq-rtcpxr": {
    source: "iana"
  },
  "application/wasm": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wasm"
    ]
  },
  "application/watcherinfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wif"
    ]
  },
  "application/webpush-options+json": {
    source: "iana",
    compressible: !0
  },
  "application/whoispp-query": {
    source: "iana"
  },
  "application/whoispp-response": {
    source: "iana"
  },
  "application/widget": {
    source: "iana",
    extensions: [
      "wgt"
    ]
  },
  "application/winhlp": {
    source: "apache",
    extensions: [
      "hlp"
    ]
  },
  "application/wita": {
    source: "iana"
  },
  "application/wordperfect5.1": {
    source: "iana"
  },
  "application/wsdl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wsdl"
    ]
  },
  "application/wspolicy+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wspolicy"
    ]
  },
  "application/x-7z-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "7z"
    ]
  },
  "application/x-abiword": {
    source: "apache",
    extensions: [
      "abw"
    ]
  },
  "application/x-ace-compressed": {
    source: "apache",
    extensions: [
      "ace"
    ]
  },
  "application/x-amf": {
    source: "apache"
  },
  "application/x-apple-diskimage": {
    source: "apache",
    extensions: [
      "dmg"
    ]
  },
  "application/x-arj": {
    compressible: !1,
    extensions: [
      "arj"
    ]
  },
  "application/x-authorware-bin": {
    source: "apache",
    extensions: [
      "aab",
      "x32",
      "u32",
      "vox"
    ]
  },
  "application/x-authorware-map": {
    source: "apache",
    extensions: [
      "aam"
    ]
  },
  "application/x-authorware-seg": {
    source: "apache",
    extensions: [
      "aas"
    ]
  },
  "application/x-bcpio": {
    source: "apache",
    extensions: [
      "bcpio"
    ]
  },
  "application/x-bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/x-bittorrent": {
    source: "apache",
    extensions: [
      "torrent"
    ]
  },
  "application/x-blorb": {
    source: "apache",
    extensions: [
      "blb",
      "blorb"
    ]
  },
  "application/x-bzip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz"
    ]
  },
  "application/x-bzip2": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz2",
      "boz"
    ]
  },
  "application/x-cbr": {
    source: "apache",
    extensions: [
      "cbr",
      "cba",
      "cbt",
      "cbz",
      "cb7"
    ]
  },
  "application/x-cdlink": {
    source: "apache",
    extensions: [
      "vcd"
    ]
  },
  "application/x-cfs-compressed": {
    source: "apache",
    extensions: [
      "cfs"
    ]
  },
  "application/x-chat": {
    source: "apache",
    extensions: [
      "chat"
    ]
  },
  "application/x-chess-pgn": {
    source: "apache",
    extensions: [
      "pgn"
    ]
  },
  "application/x-chrome-extension": {
    extensions: [
      "crx"
    ]
  },
  "application/x-cocoa": {
    source: "nginx",
    extensions: [
      "cco"
    ]
  },
  "application/x-compress": {
    source: "apache"
  },
  "application/x-conference": {
    source: "apache",
    extensions: [
      "nsc"
    ]
  },
  "application/x-cpio": {
    source: "apache",
    extensions: [
      "cpio"
    ]
  },
  "application/x-csh": {
    source: "apache",
    extensions: [
      "csh"
    ]
  },
  "application/x-deb": {
    compressible: !1
  },
  "application/x-debian-package": {
    source: "apache",
    extensions: [
      "deb",
      "udeb"
    ]
  },
  "application/x-dgc-compressed": {
    source: "apache",
    extensions: [
      "dgc"
    ]
  },
  "application/x-director": {
    source: "apache",
    extensions: [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ]
  },
  "application/x-doom": {
    source: "apache",
    extensions: [
      "wad"
    ]
  },
  "application/x-dtbncx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ncx"
    ]
  },
  "application/x-dtbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dtb"
    ]
  },
  "application/x-dtbresource+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "res"
    ]
  },
  "application/x-dvi": {
    source: "apache",
    compressible: !1,
    extensions: [
      "dvi"
    ]
  },
  "application/x-envoy": {
    source: "apache",
    extensions: [
      "evy"
    ]
  },
  "application/x-eva": {
    source: "apache",
    extensions: [
      "eva"
    ]
  },
  "application/x-font-bdf": {
    source: "apache",
    extensions: [
      "bdf"
    ]
  },
  "application/x-font-dos": {
    source: "apache"
  },
  "application/x-font-framemaker": {
    source: "apache"
  },
  "application/x-font-ghostscript": {
    source: "apache",
    extensions: [
      "gsf"
    ]
  },
  "application/x-font-libgrx": {
    source: "apache"
  },
  "application/x-font-linux-psf": {
    source: "apache",
    extensions: [
      "psf"
    ]
  },
  "application/x-font-pcf": {
    source: "apache",
    extensions: [
      "pcf"
    ]
  },
  "application/x-font-snf": {
    source: "apache",
    extensions: [
      "snf"
    ]
  },
  "application/x-font-speedo": {
    source: "apache"
  },
  "application/x-font-sunos-news": {
    source: "apache"
  },
  "application/x-font-type1": {
    source: "apache",
    extensions: [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ]
  },
  "application/x-font-vfont": {
    source: "apache"
  },
  "application/x-freearc": {
    source: "apache",
    extensions: [
      "arc"
    ]
  },
  "application/x-futuresplash": {
    source: "apache",
    extensions: [
      "spl"
    ]
  },
  "application/x-gca-compressed": {
    source: "apache",
    extensions: [
      "gca"
    ]
  },
  "application/x-glulx": {
    source: "apache",
    extensions: [
      "ulx"
    ]
  },
  "application/x-gnumeric": {
    source: "apache",
    extensions: [
      "gnumeric"
    ]
  },
  "application/x-gramps-xml": {
    source: "apache",
    extensions: [
      "gramps"
    ]
  },
  "application/x-gtar": {
    source: "apache",
    extensions: [
      "gtar"
    ]
  },
  "application/x-gzip": {
    source: "apache"
  },
  "application/x-hdf": {
    source: "apache",
    extensions: [
      "hdf"
    ]
  },
  "application/x-httpd-php": {
    compressible: !0,
    extensions: [
      "php"
    ]
  },
  "application/x-install-instructions": {
    source: "apache",
    extensions: [
      "install"
    ]
  },
  "application/x-iso9660-image": {
    source: "apache",
    extensions: [
      "iso"
    ]
  },
  "application/x-iwork-keynote-sffkey": {
    extensions: [
      "key"
    ]
  },
  "application/x-iwork-numbers-sffnumbers": {
    extensions: [
      "numbers"
    ]
  },
  "application/x-iwork-pages-sffpages": {
    extensions: [
      "pages"
    ]
  },
  "application/x-java-archive-diff": {
    source: "nginx",
    extensions: [
      "jardiff"
    ]
  },
  "application/x-java-jnlp-file": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jnlp"
    ]
  },
  "application/x-javascript": {
    compressible: !0
  },
  "application/x-keepass2": {
    extensions: [
      "kdbx"
    ]
  },
  "application/x-latex": {
    source: "apache",
    compressible: !1,
    extensions: [
      "latex"
    ]
  },
  "application/x-lua-bytecode": {
    extensions: [
      "luac"
    ]
  },
  "application/x-lzh-compressed": {
    source: "apache",
    extensions: [
      "lzh",
      "lha"
    ]
  },
  "application/x-makeself": {
    source: "nginx",
    extensions: [
      "run"
    ]
  },
  "application/x-mie": {
    source: "apache",
    extensions: [
      "mie"
    ]
  },
  "application/x-mobipocket-ebook": {
    source: "apache",
    extensions: [
      "prc",
      "mobi"
    ]
  },
  "application/x-mpegurl": {
    compressible: !1
  },
  "application/x-ms-application": {
    source: "apache",
    extensions: [
      "application"
    ]
  },
  "application/x-ms-shortcut": {
    source: "apache",
    extensions: [
      "lnk"
    ]
  },
  "application/x-ms-wmd": {
    source: "apache",
    extensions: [
      "wmd"
    ]
  },
  "application/x-ms-wmz": {
    source: "apache",
    extensions: [
      "wmz"
    ]
  },
  "application/x-ms-xbap": {
    source: "apache",
    extensions: [
      "xbap"
    ]
  },
  "application/x-msaccess": {
    source: "apache",
    extensions: [
      "mdb"
    ]
  },
  "application/x-msbinder": {
    source: "apache",
    extensions: [
      "obd"
    ]
  },
  "application/x-mscardfile": {
    source: "apache",
    extensions: [
      "crd"
    ]
  },
  "application/x-msclip": {
    source: "apache",
    extensions: [
      "clp"
    ]
  },
  "application/x-msdos-program": {
    extensions: [
      "exe"
    ]
  },
  "application/x-msdownload": {
    source: "apache",
    extensions: [
      "exe",
      "dll",
      "com",
      "bat",
      "msi"
    ]
  },
  "application/x-msmediaview": {
    source: "apache",
    extensions: [
      "mvb",
      "m13",
      "m14"
    ]
  },
  "application/x-msmetafile": {
    source: "apache",
    extensions: [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ]
  },
  "application/x-msmoney": {
    source: "apache",
    extensions: [
      "mny"
    ]
  },
  "application/x-mspublisher": {
    source: "apache",
    extensions: [
      "pub"
    ]
  },
  "application/x-msschedule": {
    source: "apache",
    extensions: [
      "scd"
    ]
  },
  "application/x-msterminal": {
    source: "apache",
    extensions: [
      "trm"
    ]
  },
  "application/x-mswrite": {
    source: "apache",
    extensions: [
      "wri"
    ]
  },
  "application/x-netcdf": {
    source: "apache",
    extensions: [
      "nc",
      "cdf"
    ]
  },
  "application/x-ns-proxy-autoconfig": {
    compressible: !0,
    extensions: [
      "pac"
    ]
  },
  "application/x-nzb": {
    source: "apache",
    extensions: [
      "nzb"
    ]
  },
  "application/x-perl": {
    source: "nginx",
    extensions: [
      "pl",
      "pm"
    ]
  },
  "application/x-pilot": {
    source: "nginx",
    extensions: [
      "prc",
      "pdb"
    ]
  },
  "application/x-pkcs12": {
    source: "apache",
    compressible: !1,
    extensions: [
      "p12",
      "pfx"
    ]
  },
  "application/x-pkcs7-certificates": {
    source: "apache",
    extensions: [
      "p7b",
      "spc"
    ]
  },
  "application/x-pkcs7-certreqresp": {
    source: "apache",
    extensions: [
      "p7r"
    ]
  },
  "application/x-pki-message": {
    source: "iana"
  },
  "application/x-rar-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "rar"
    ]
  },
  "application/x-redhat-package-manager": {
    source: "nginx",
    extensions: [
      "rpm"
    ]
  },
  "application/x-research-info-systems": {
    source: "apache",
    extensions: [
      "ris"
    ]
  },
  "application/x-sea": {
    source: "nginx",
    extensions: [
      "sea"
    ]
  },
  "application/x-sh": {
    source: "apache",
    compressible: !0,
    extensions: [
      "sh"
    ]
  },
  "application/x-shar": {
    source: "apache",
    extensions: [
      "shar"
    ]
  },
  "application/x-shockwave-flash": {
    source: "apache",
    compressible: !1,
    extensions: [
      "swf"
    ]
  },
  "application/x-silverlight-app": {
    source: "apache",
    extensions: [
      "xap"
    ]
  },
  "application/x-sql": {
    source: "apache",
    extensions: [
      "sql"
    ]
  },
  "application/x-stuffit": {
    source: "apache",
    compressible: !1,
    extensions: [
      "sit"
    ]
  },
  "application/x-stuffitx": {
    source: "apache",
    extensions: [
      "sitx"
    ]
  },
  "application/x-subrip": {
    source: "apache",
    extensions: [
      "srt"
    ]
  },
  "application/x-sv4cpio": {
    source: "apache",
    extensions: [
      "sv4cpio"
    ]
  },
  "application/x-sv4crc": {
    source: "apache",
    extensions: [
      "sv4crc"
    ]
  },
  "application/x-t3vm-image": {
    source: "apache",
    extensions: [
      "t3"
    ]
  },
  "application/x-tads": {
    source: "apache",
    extensions: [
      "gam"
    ]
  },
  "application/x-tar": {
    source: "apache",
    compressible: !0,
    extensions: [
      "tar"
    ]
  },
  "application/x-tcl": {
    source: "apache",
    extensions: [
      "tcl",
      "tk"
    ]
  },
  "application/x-tex": {
    source: "apache",
    extensions: [
      "tex"
    ]
  },
  "application/x-tex-tfm": {
    source: "apache",
    extensions: [
      "tfm"
    ]
  },
  "application/x-texinfo": {
    source: "apache",
    extensions: [
      "texinfo",
      "texi"
    ]
  },
  "application/x-tgif": {
    source: "apache",
    extensions: [
      "obj"
    ]
  },
  "application/x-ustar": {
    source: "apache",
    extensions: [
      "ustar"
    ]
  },
  "application/x-virtualbox-hdd": {
    compressible: !0,
    extensions: [
      "hdd"
    ]
  },
  "application/x-virtualbox-ova": {
    compressible: !0,
    extensions: [
      "ova"
    ]
  },
  "application/x-virtualbox-ovf": {
    compressible: !0,
    extensions: [
      "ovf"
    ]
  },
  "application/x-virtualbox-vbox": {
    compressible: !0,
    extensions: [
      "vbox"
    ]
  },
  "application/x-virtualbox-vbox-extpack": {
    compressible: !1,
    extensions: [
      "vbox-extpack"
    ]
  },
  "application/x-virtualbox-vdi": {
    compressible: !0,
    extensions: [
      "vdi"
    ]
  },
  "application/x-virtualbox-vhd": {
    compressible: !0,
    extensions: [
      "vhd"
    ]
  },
  "application/x-virtualbox-vmdk": {
    compressible: !0,
    extensions: [
      "vmdk"
    ]
  },
  "application/x-wais-source": {
    source: "apache",
    extensions: [
      "src"
    ]
  },
  "application/x-web-app-manifest+json": {
    compressible: !0,
    extensions: [
      "webapp"
    ]
  },
  "application/x-www-form-urlencoded": {
    source: "iana",
    compressible: !0
  },
  "application/x-x509-ca-cert": {
    source: "iana",
    extensions: [
      "der",
      "crt",
      "pem"
    ]
  },
  "application/x-x509-ca-ra-cert": {
    source: "iana"
  },
  "application/x-x509-next-ca-cert": {
    source: "iana"
  },
  "application/x-xfig": {
    source: "apache",
    extensions: [
      "fig"
    ]
  },
  "application/x-xliff+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/x-xpinstall": {
    source: "apache",
    compressible: !1,
    extensions: [
      "xpi"
    ]
  },
  "application/x-xz": {
    source: "apache",
    extensions: [
      "xz"
    ]
  },
  "application/x-zmachine": {
    source: "apache",
    extensions: [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ]
  },
  "application/x400-bp": {
    source: "iana"
  },
  "application/xacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xaml+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xaml"
    ]
  },
  "application/xcap-att+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xav"
    ]
  },
  "application/xcap-caps+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xca"
    ]
  },
  "application/xcap-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdf"
    ]
  },
  "application/xcap-el+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xel"
    ]
  },
  "application/xcap-error+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcap-ns+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xns"
    ]
  },
  "application/xcon-conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcon-conference-info-diff+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xenc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xenc"
    ]
  },
  "application/xhtml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xhtml",
      "xht"
    ]
  },
  "application/xhtml-voice+xml": {
    source: "apache",
    compressible: !0
  },
  "application/xliff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml",
      "xsl",
      "xsd",
      "rng"
    ]
  },
  "application/xml-dtd": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dtd"
    ]
  },
  "application/xml-external-parsed-entity": {
    source: "iana"
  },
  "application/xml-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xmpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xop+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xop"
    ]
  },
  "application/xproc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xpl"
    ]
  },
  "application/xslt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xsl",
      "xslt"
    ]
  },
  "application/xspf+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xspf"
    ]
  },
  "application/xv+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ]
  },
  "application/yang": {
    source: "iana",
    extensions: [
      "yang"
    ]
  },
  "application/yang-data+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yin+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "yin"
    ]
  },
  "application/zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "zip"
    ]
  },
  "application/zlib": {
    source: "iana"
  },
  "application/zstd": {
    source: "iana"
  },
  "audio/1d-interleaved-parityfec": {
    source: "iana"
  },
  "audio/32kadpcm": {
    source: "iana"
  },
  "audio/3gpp": {
    source: "iana",
    compressible: !1,
    extensions: [
      "3gpp"
    ]
  },
  "audio/3gpp2": {
    source: "iana"
  },
  "audio/aac": {
    source: "iana"
  },
  "audio/ac3": {
    source: "iana"
  },
  "audio/adpcm": {
    source: "apache",
    extensions: [
      "adp"
    ]
  },
  "audio/amr": {
    source: "iana",
    extensions: [
      "amr"
    ]
  },
  "audio/amr-wb": {
    source: "iana"
  },
  "audio/amr-wb+": {
    source: "iana"
  },
  "audio/aptx": {
    source: "iana"
  },
  "audio/asc": {
    source: "iana"
  },
  "audio/atrac-advanced-lossless": {
    source: "iana"
  },
  "audio/atrac-x": {
    source: "iana"
  },
  "audio/atrac3": {
    source: "iana"
  },
  "audio/basic": {
    source: "iana",
    compressible: !1,
    extensions: [
      "au",
      "snd"
    ]
  },
  "audio/bv16": {
    source: "iana"
  },
  "audio/bv32": {
    source: "iana"
  },
  "audio/clearmode": {
    source: "iana"
  },
  "audio/cn": {
    source: "iana"
  },
  "audio/dat12": {
    source: "iana"
  },
  "audio/dls": {
    source: "iana"
  },
  "audio/dsr-es201108": {
    source: "iana"
  },
  "audio/dsr-es202050": {
    source: "iana"
  },
  "audio/dsr-es202211": {
    source: "iana"
  },
  "audio/dsr-es202212": {
    source: "iana"
  },
  "audio/dv": {
    source: "iana"
  },
  "audio/dvi4": {
    source: "iana"
  },
  "audio/eac3": {
    source: "iana"
  },
  "audio/encaprtp": {
    source: "iana"
  },
  "audio/evrc": {
    source: "iana"
  },
  "audio/evrc-qcp": {
    source: "iana"
  },
  "audio/evrc0": {
    source: "iana"
  },
  "audio/evrc1": {
    source: "iana"
  },
  "audio/evrcb": {
    source: "iana"
  },
  "audio/evrcb0": {
    source: "iana"
  },
  "audio/evrcb1": {
    source: "iana"
  },
  "audio/evrcnw": {
    source: "iana"
  },
  "audio/evrcnw0": {
    source: "iana"
  },
  "audio/evrcnw1": {
    source: "iana"
  },
  "audio/evrcwb": {
    source: "iana"
  },
  "audio/evrcwb0": {
    source: "iana"
  },
  "audio/evrcwb1": {
    source: "iana"
  },
  "audio/evs": {
    source: "iana"
  },
  "audio/flexfec": {
    source: "iana"
  },
  "audio/fwdred": {
    source: "iana"
  },
  "audio/g711-0": {
    source: "iana"
  },
  "audio/g719": {
    source: "iana"
  },
  "audio/g722": {
    source: "iana"
  },
  "audio/g7221": {
    source: "iana"
  },
  "audio/g723": {
    source: "iana"
  },
  "audio/g726-16": {
    source: "iana"
  },
  "audio/g726-24": {
    source: "iana"
  },
  "audio/g726-32": {
    source: "iana"
  },
  "audio/g726-40": {
    source: "iana"
  },
  "audio/g728": {
    source: "iana"
  },
  "audio/g729": {
    source: "iana"
  },
  "audio/g7291": {
    source: "iana"
  },
  "audio/g729d": {
    source: "iana"
  },
  "audio/g729e": {
    source: "iana"
  },
  "audio/gsm": {
    source: "iana"
  },
  "audio/gsm-efr": {
    source: "iana"
  },
  "audio/gsm-hr-08": {
    source: "iana"
  },
  "audio/ilbc": {
    source: "iana"
  },
  "audio/ip-mr_v2.5": {
    source: "iana"
  },
  "audio/isac": {
    source: "apache"
  },
  "audio/l16": {
    source: "iana"
  },
  "audio/l20": {
    source: "iana"
  },
  "audio/l24": {
    source: "iana",
    compressible: !1
  },
  "audio/l8": {
    source: "iana"
  },
  "audio/lpc": {
    source: "iana"
  },
  "audio/melp": {
    source: "iana"
  },
  "audio/melp1200": {
    source: "iana"
  },
  "audio/melp2400": {
    source: "iana"
  },
  "audio/melp600": {
    source: "iana"
  },
  "audio/mhas": {
    source: "iana"
  },
  "audio/midi": {
    source: "apache",
    extensions: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ]
  },
  "audio/mobile-xmf": {
    source: "iana",
    extensions: [
      "mxmf"
    ]
  },
  "audio/mp3": {
    compressible: !1,
    extensions: [
      "mp3"
    ]
  },
  "audio/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "m4a",
      "mp4a"
    ]
  },
  "audio/mp4a-latm": {
    source: "iana"
  },
  "audio/mpa": {
    source: "iana"
  },
  "audio/mpa-robust": {
    source: "iana"
  },
  "audio/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpga",
      "mp2",
      "mp2a",
      "mp3",
      "m2a",
      "m3a"
    ]
  },
  "audio/mpeg4-generic": {
    source: "iana"
  },
  "audio/musepack": {
    source: "apache"
  },
  "audio/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "oga",
      "ogg",
      "spx",
      "opus"
    ]
  },
  "audio/opus": {
    source: "iana"
  },
  "audio/parityfec": {
    source: "iana"
  },
  "audio/pcma": {
    source: "iana"
  },
  "audio/pcma-wb": {
    source: "iana"
  },
  "audio/pcmu": {
    source: "iana"
  },
  "audio/pcmu-wb": {
    source: "iana"
  },
  "audio/prs.sid": {
    source: "iana"
  },
  "audio/qcelp": {
    source: "iana"
  },
  "audio/raptorfec": {
    source: "iana"
  },
  "audio/red": {
    source: "iana"
  },
  "audio/rtp-enc-aescm128": {
    source: "iana"
  },
  "audio/rtp-midi": {
    source: "iana"
  },
  "audio/rtploopback": {
    source: "iana"
  },
  "audio/rtx": {
    source: "iana"
  },
  "audio/s3m": {
    source: "apache",
    extensions: [
      "s3m"
    ]
  },
  "audio/scip": {
    source: "iana"
  },
  "audio/silk": {
    source: "apache",
    extensions: [
      "sil"
    ]
  },
  "audio/smv": {
    source: "iana"
  },
  "audio/smv-qcp": {
    source: "iana"
  },
  "audio/smv0": {
    source: "iana"
  },
  "audio/sofa": {
    source: "iana"
  },
  "audio/sp-midi": {
    source: "iana"
  },
  "audio/speex": {
    source: "iana"
  },
  "audio/t140c": {
    source: "iana"
  },
  "audio/t38": {
    source: "iana"
  },
  "audio/telephone-event": {
    source: "iana"
  },
  "audio/tetra_acelp": {
    source: "iana"
  },
  "audio/tetra_acelp_bb": {
    source: "iana"
  },
  "audio/tone": {
    source: "iana"
  },
  "audio/tsvcis": {
    source: "iana"
  },
  "audio/uemclip": {
    source: "iana"
  },
  "audio/ulpfec": {
    source: "iana"
  },
  "audio/usac": {
    source: "iana"
  },
  "audio/vdvi": {
    source: "iana"
  },
  "audio/vmr-wb": {
    source: "iana"
  },
  "audio/vnd.3gpp.iufp": {
    source: "iana"
  },
  "audio/vnd.4sb": {
    source: "iana"
  },
  "audio/vnd.audiokoz": {
    source: "iana"
  },
  "audio/vnd.celp": {
    source: "iana"
  },
  "audio/vnd.cisco.nse": {
    source: "iana"
  },
  "audio/vnd.cmles.radio-events": {
    source: "iana"
  },
  "audio/vnd.cns.anp1": {
    source: "iana"
  },
  "audio/vnd.cns.inf1": {
    source: "iana"
  },
  "audio/vnd.dece.audio": {
    source: "iana",
    extensions: [
      "uva",
      "uvva"
    ]
  },
  "audio/vnd.digital-winds": {
    source: "iana",
    extensions: [
      "eol"
    ]
  },
  "audio/vnd.dlna.adts": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.1": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.2": {
    source: "iana"
  },
  "audio/vnd.dolby.mlp": {
    source: "iana"
  },
  "audio/vnd.dolby.mps": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2x": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2z": {
    source: "iana"
  },
  "audio/vnd.dolby.pulse.1": {
    source: "iana"
  },
  "audio/vnd.dra": {
    source: "iana",
    extensions: [
      "dra"
    ]
  },
  "audio/vnd.dts": {
    source: "iana",
    extensions: [
      "dts"
    ]
  },
  "audio/vnd.dts.hd": {
    source: "iana",
    extensions: [
      "dtshd"
    ]
  },
  "audio/vnd.dts.uhd": {
    source: "iana"
  },
  "audio/vnd.dvb.file": {
    source: "iana"
  },
  "audio/vnd.everad.plj": {
    source: "iana"
  },
  "audio/vnd.hns.audio": {
    source: "iana"
  },
  "audio/vnd.lucent.voice": {
    source: "iana",
    extensions: [
      "lvp"
    ]
  },
  "audio/vnd.ms-playready.media.pya": {
    source: "iana",
    extensions: [
      "pya"
    ]
  },
  "audio/vnd.nokia.mobile-xmf": {
    source: "iana"
  },
  "audio/vnd.nortel.vbk": {
    source: "iana"
  },
  "audio/vnd.nuera.ecelp4800": {
    source: "iana",
    extensions: [
      "ecelp4800"
    ]
  },
  "audio/vnd.nuera.ecelp7470": {
    source: "iana",
    extensions: [
      "ecelp7470"
    ]
  },
  "audio/vnd.nuera.ecelp9600": {
    source: "iana",
    extensions: [
      "ecelp9600"
    ]
  },
  "audio/vnd.octel.sbc": {
    source: "iana"
  },
  "audio/vnd.presonus.multitrack": {
    source: "iana"
  },
  "audio/vnd.qcelp": {
    source: "iana"
  },
  "audio/vnd.rhetorex.32kadpcm": {
    source: "iana"
  },
  "audio/vnd.rip": {
    source: "iana",
    extensions: [
      "rip"
    ]
  },
  "audio/vnd.rn-realaudio": {
    compressible: !1
  },
  "audio/vnd.sealedmedia.softseal.mpeg": {
    source: "iana"
  },
  "audio/vnd.vmx.cvsd": {
    source: "iana"
  },
  "audio/vnd.wave": {
    compressible: !1
  },
  "audio/vorbis": {
    source: "iana",
    compressible: !1
  },
  "audio/vorbis-config": {
    source: "iana"
  },
  "audio/wav": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/wave": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "weba"
    ]
  },
  "audio/x-aac": {
    source: "apache",
    compressible: !1,
    extensions: [
      "aac"
    ]
  },
  "audio/x-aiff": {
    source: "apache",
    extensions: [
      "aif",
      "aiff",
      "aifc"
    ]
  },
  "audio/x-caf": {
    source: "apache",
    compressible: !1,
    extensions: [
      "caf"
    ]
  },
  "audio/x-flac": {
    source: "apache",
    extensions: [
      "flac"
    ]
  },
  "audio/x-m4a": {
    source: "nginx",
    extensions: [
      "m4a"
    ]
  },
  "audio/x-matroska": {
    source: "apache",
    extensions: [
      "mka"
    ]
  },
  "audio/x-mpegurl": {
    source: "apache",
    extensions: [
      "m3u"
    ]
  },
  "audio/x-ms-wax": {
    source: "apache",
    extensions: [
      "wax"
    ]
  },
  "audio/x-ms-wma": {
    source: "apache",
    extensions: [
      "wma"
    ]
  },
  "audio/x-pn-realaudio": {
    source: "apache",
    extensions: [
      "ram",
      "ra"
    ]
  },
  "audio/x-pn-realaudio-plugin": {
    source: "apache",
    extensions: [
      "rmp"
    ]
  },
  "audio/x-realaudio": {
    source: "nginx",
    extensions: [
      "ra"
    ]
  },
  "audio/x-tta": {
    source: "apache"
  },
  "audio/x-wav": {
    source: "apache",
    extensions: [
      "wav"
    ]
  },
  "audio/xm": {
    source: "apache",
    extensions: [
      "xm"
    ]
  },
  "chemical/x-cdx": {
    source: "apache",
    extensions: [
      "cdx"
    ]
  },
  "chemical/x-cif": {
    source: "apache",
    extensions: [
      "cif"
    ]
  },
  "chemical/x-cmdf": {
    source: "apache",
    extensions: [
      "cmdf"
    ]
  },
  "chemical/x-cml": {
    source: "apache",
    extensions: [
      "cml"
    ]
  },
  "chemical/x-csml": {
    source: "apache",
    extensions: [
      "csml"
    ]
  },
  "chemical/x-pdb": {
    source: "apache"
  },
  "chemical/x-xyz": {
    source: "apache",
    extensions: [
      "xyz"
    ]
  },
  "font/collection": {
    source: "iana",
    extensions: [
      "ttc"
    ]
  },
  "font/otf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "otf"
    ]
  },
  "font/sfnt": {
    source: "iana"
  },
  "font/ttf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttf"
    ]
  },
  "font/woff": {
    source: "iana",
    extensions: [
      "woff"
    ]
  },
  "font/woff2": {
    source: "iana",
    extensions: [
      "woff2"
    ]
  },
  "image/aces": {
    source: "iana",
    extensions: [
      "exr"
    ]
  },
  "image/apng": {
    compressible: !1,
    extensions: [
      "apng"
    ]
  },
  "image/avci": {
    source: "iana",
    extensions: [
      "avci"
    ]
  },
  "image/avcs": {
    source: "iana",
    extensions: [
      "avcs"
    ]
  },
  "image/avif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "avif"
    ]
  },
  "image/bmp": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/cgm": {
    source: "iana",
    extensions: [
      "cgm"
    ]
  },
  "image/dicom-rle": {
    source: "iana",
    extensions: [
      "drle"
    ]
  },
  "image/emf": {
    source: "iana",
    extensions: [
      "emf"
    ]
  },
  "image/fits": {
    source: "iana",
    extensions: [
      "fits"
    ]
  },
  "image/g3fax": {
    source: "iana",
    extensions: [
      "g3"
    ]
  },
  "image/gif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gif"
    ]
  },
  "image/heic": {
    source: "iana",
    extensions: [
      "heic"
    ]
  },
  "image/heic-sequence": {
    source: "iana",
    extensions: [
      "heics"
    ]
  },
  "image/heif": {
    source: "iana",
    extensions: [
      "heif"
    ]
  },
  "image/heif-sequence": {
    source: "iana",
    extensions: [
      "heifs"
    ]
  },
  "image/hej2k": {
    source: "iana",
    extensions: [
      "hej2"
    ]
  },
  "image/hsj2": {
    source: "iana",
    extensions: [
      "hsj2"
    ]
  },
  "image/ief": {
    source: "iana",
    extensions: [
      "ief"
    ]
  },
  "image/jls": {
    source: "iana",
    extensions: [
      "jls"
    ]
  },
  "image/jp2": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jp2",
      "jpg2"
    ]
  },
  "image/jpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpeg",
      "jpg",
      "jpe"
    ]
  },
  "image/jph": {
    source: "iana",
    extensions: [
      "jph"
    ]
  },
  "image/jphc": {
    source: "iana",
    extensions: [
      "jhc"
    ]
  },
  "image/jpm": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpm"
    ]
  },
  "image/jpx": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpx",
      "jpf"
    ]
  },
  "image/jxr": {
    source: "iana",
    extensions: [
      "jxr"
    ]
  },
  "image/jxra": {
    source: "iana",
    extensions: [
      "jxra"
    ]
  },
  "image/jxrs": {
    source: "iana",
    extensions: [
      "jxrs"
    ]
  },
  "image/jxs": {
    source: "iana",
    extensions: [
      "jxs"
    ]
  },
  "image/jxsc": {
    source: "iana",
    extensions: [
      "jxsc"
    ]
  },
  "image/jxsi": {
    source: "iana",
    extensions: [
      "jxsi"
    ]
  },
  "image/jxss": {
    source: "iana",
    extensions: [
      "jxss"
    ]
  },
  "image/ktx": {
    source: "iana",
    extensions: [
      "ktx"
    ]
  },
  "image/ktx2": {
    source: "iana",
    extensions: [
      "ktx2"
    ]
  },
  "image/naplps": {
    source: "iana"
  },
  "image/pjpeg": {
    compressible: !1
  },
  "image/png": {
    source: "iana",
    compressible: !1,
    extensions: [
      "png"
    ]
  },
  "image/prs.btif": {
    source: "iana",
    extensions: [
      "btif"
    ]
  },
  "image/prs.pti": {
    source: "iana",
    extensions: [
      "pti"
    ]
  },
  "image/pwg-raster": {
    source: "iana"
  },
  "image/sgi": {
    source: "apache",
    extensions: [
      "sgi"
    ]
  },
  "image/svg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "svg",
      "svgz"
    ]
  },
  "image/t38": {
    source: "iana",
    extensions: [
      "t38"
    ]
  },
  "image/tiff": {
    source: "iana",
    compressible: !1,
    extensions: [
      "tif",
      "tiff"
    ]
  },
  "image/tiff-fx": {
    source: "iana",
    extensions: [
      "tfx"
    ]
  },
  "image/vnd.adobe.photoshop": {
    source: "iana",
    compressible: !0,
    extensions: [
      "psd"
    ]
  },
  "image/vnd.airzip.accelerator.azv": {
    source: "iana",
    extensions: [
      "azv"
    ]
  },
  "image/vnd.cns.inf2": {
    source: "iana"
  },
  "image/vnd.dece.graphic": {
    source: "iana",
    extensions: [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ]
  },
  "image/vnd.djvu": {
    source: "iana",
    extensions: [
      "djvu",
      "djv"
    ]
  },
  "image/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "image/vnd.dwg": {
    source: "iana",
    extensions: [
      "dwg"
    ]
  },
  "image/vnd.dxf": {
    source: "iana",
    extensions: [
      "dxf"
    ]
  },
  "image/vnd.fastbidsheet": {
    source: "iana",
    extensions: [
      "fbs"
    ]
  },
  "image/vnd.fpx": {
    source: "iana",
    extensions: [
      "fpx"
    ]
  },
  "image/vnd.fst": {
    source: "iana",
    extensions: [
      "fst"
    ]
  },
  "image/vnd.fujixerox.edmics-mmr": {
    source: "iana",
    extensions: [
      "mmr"
    ]
  },
  "image/vnd.fujixerox.edmics-rlc": {
    source: "iana",
    extensions: [
      "rlc"
    ]
  },
  "image/vnd.globalgraphics.pgb": {
    source: "iana"
  },
  "image/vnd.microsoft.icon": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/vnd.mix": {
    source: "iana"
  },
  "image/vnd.mozilla.apng": {
    source: "iana"
  },
  "image/vnd.ms-dds": {
    compressible: !0,
    extensions: [
      "dds"
    ]
  },
  "image/vnd.ms-modi": {
    source: "iana",
    extensions: [
      "mdi"
    ]
  },
  "image/vnd.ms-photo": {
    source: "apache",
    extensions: [
      "wdp"
    ]
  },
  "image/vnd.net-fpx": {
    source: "iana",
    extensions: [
      "npx"
    ]
  },
  "image/vnd.pco.b16": {
    source: "iana",
    extensions: [
      "b16"
    ]
  },
  "image/vnd.radiance": {
    source: "iana"
  },
  "image/vnd.sealed.png": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.gif": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.jpg": {
    source: "iana"
  },
  "image/vnd.svf": {
    source: "iana"
  },
  "image/vnd.tencent.tap": {
    source: "iana",
    extensions: [
      "tap"
    ]
  },
  "image/vnd.valve.source.texture": {
    source: "iana",
    extensions: [
      "vtf"
    ]
  },
  "image/vnd.wap.wbmp": {
    source: "iana",
    extensions: [
      "wbmp"
    ]
  },
  "image/vnd.xiff": {
    source: "iana",
    extensions: [
      "xif"
    ]
  },
  "image/vnd.zbrush.pcx": {
    source: "iana",
    extensions: [
      "pcx"
    ]
  },
  "image/webp": {
    source: "apache",
    extensions: [
      "webp"
    ]
  },
  "image/wmf": {
    source: "iana",
    extensions: [
      "wmf"
    ]
  },
  "image/x-3ds": {
    source: "apache",
    extensions: [
      "3ds"
    ]
  },
  "image/x-cmu-raster": {
    source: "apache",
    extensions: [
      "ras"
    ]
  },
  "image/x-cmx": {
    source: "apache",
    extensions: [
      "cmx"
    ]
  },
  "image/x-freehand": {
    source: "apache",
    extensions: [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ]
  },
  "image/x-icon": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/x-jng": {
    source: "nginx",
    extensions: [
      "jng"
    ]
  },
  "image/x-mrsid-image": {
    source: "apache",
    extensions: [
      "sid"
    ]
  },
  "image/x-ms-bmp": {
    source: "nginx",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/x-pcx": {
    source: "apache",
    extensions: [
      "pcx"
    ]
  },
  "image/x-pict": {
    source: "apache",
    extensions: [
      "pic",
      "pct"
    ]
  },
  "image/x-portable-anymap": {
    source: "apache",
    extensions: [
      "pnm"
    ]
  },
  "image/x-portable-bitmap": {
    source: "apache",
    extensions: [
      "pbm"
    ]
  },
  "image/x-portable-graymap": {
    source: "apache",
    extensions: [
      "pgm"
    ]
  },
  "image/x-portable-pixmap": {
    source: "apache",
    extensions: [
      "ppm"
    ]
  },
  "image/x-rgb": {
    source: "apache",
    extensions: [
      "rgb"
    ]
  },
  "image/x-tga": {
    source: "apache",
    extensions: [
      "tga"
    ]
  },
  "image/x-xbitmap": {
    source: "apache",
    extensions: [
      "xbm"
    ]
  },
  "image/x-xcf": {
    compressible: !1
  },
  "image/x-xpixmap": {
    source: "apache",
    extensions: [
      "xpm"
    ]
  },
  "image/x-xwindowdump": {
    source: "apache",
    extensions: [
      "xwd"
    ]
  },
  "message/cpim": {
    source: "iana"
  },
  "message/delivery-status": {
    source: "iana"
  },
  "message/disposition-notification": {
    source: "iana",
    extensions: [
      "disposition-notification"
    ]
  },
  "message/external-body": {
    source: "iana"
  },
  "message/feedback-report": {
    source: "iana"
  },
  "message/global": {
    source: "iana",
    extensions: [
      "u8msg"
    ]
  },
  "message/global-delivery-status": {
    source: "iana",
    extensions: [
      "u8dsn"
    ]
  },
  "message/global-disposition-notification": {
    source: "iana",
    extensions: [
      "u8mdn"
    ]
  },
  "message/global-headers": {
    source: "iana",
    extensions: [
      "u8hdr"
    ]
  },
  "message/http": {
    source: "iana",
    compressible: !1
  },
  "message/imdn+xml": {
    source: "iana",
    compressible: !0
  },
  "message/news": {
    source: "iana"
  },
  "message/partial": {
    source: "iana",
    compressible: !1
  },
  "message/rfc822": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eml",
      "mime"
    ]
  },
  "message/s-http": {
    source: "iana"
  },
  "message/sip": {
    source: "iana"
  },
  "message/sipfrag": {
    source: "iana"
  },
  "message/tracking-status": {
    source: "iana"
  },
  "message/vnd.si.simp": {
    source: "iana"
  },
  "message/vnd.wfa.wsc": {
    source: "iana",
    extensions: [
      "wsc"
    ]
  },
  "model/3mf": {
    source: "iana",
    extensions: [
      "3mf"
    ]
  },
  "model/e57": {
    source: "iana"
  },
  "model/gltf+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gltf"
    ]
  },
  "model/gltf-binary": {
    source: "iana",
    compressible: !0,
    extensions: [
      "glb"
    ]
  },
  "model/iges": {
    source: "iana",
    compressible: !1,
    extensions: [
      "igs",
      "iges"
    ]
  },
  "model/mesh": {
    source: "iana",
    compressible: !1,
    extensions: [
      "msh",
      "mesh",
      "silo"
    ]
  },
  "model/mtl": {
    source: "iana",
    extensions: [
      "mtl"
    ]
  },
  "model/obj": {
    source: "iana",
    extensions: [
      "obj"
    ]
  },
  "model/step": {
    source: "iana"
  },
  "model/step+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "stpx"
    ]
  },
  "model/step+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpz"
    ]
  },
  "model/step-xml+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpxz"
    ]
  },
  "model/stl": {
    source: "iana",
    extensions: [
      "stl"
    ]
  },
  "model/vnd.collada+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dae"
    ]
  },
  "model/vnd.dwf": {
    source: "iana",
    extensions: [
      "dwf"
    ]
  },
  "model/vnd.flatland.3dml": {
    source: "iana"
  },
  "model/vnd.gdl": {
    source: "iana",
    extensions: [
      "gdl"
    ]
  },
  "model/vnd.gs-gdl": {
    source: "apache"
  },
  "model/vnd.gs.gdl": {
    source: "iana"
  },
  "model/vnd.gtw": {
    source: "iana",
    extensions: [
      "gtw"
    ]
  },
  "model/vnd.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "model/vnd.mts": {
    source: "iana",
    extensions: [
      "mts"
    ]
  },
  "model/vnd.opengex": {
    source: "iana",
    extensions: [
      "ogex"
    ]
  },
  "model/vnd.parasolid.transmit.binary": {
    source: "iana",
    extensions: [
      "x_b"
    ]
  },
  "model/vnd.parasolid.transmit.text": {
    source: "iana",
    extensions: [
      "x_t"
    ]
  },
  "model/vnd.pytha.pyox": {
    source: "iana"
  },
  "model/vnd.rosette.annotated-data-model": {
    source: "iana"
  },
  "model/vnd.sap.vds": {
    source: "iana",
    extensions: [
      "vds"
    ]
  },
  "model/vnd.usdz+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "usdz"
    ]
  },
  "model/vnd.valve.source.compiled-map": {
    source: "iana",
    extensions: [
      "bsp"
    ]
  },
  "model/vnd.vtu": {
    source: "iana",
    extensions: [
      "vtu"
    ]
  },
  "model/vrml": {
    source: "iana",
    compressible: !1,
    extensions: [
      "wrl",
      "vrml"
    ]
  },
  "model/x3d+binary": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3db",
      "x3dbz"
    ]
  },
  "model/x3d+fastinfoset": {
    source: "iana",
    extensions: [
      "x3db"
    ]
  },
  "model/x3d+vrml": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3dv",
      "x3dvz"
    ]
  },
  "model/x3d+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "x3d",
      "x3dz"
    ]
  },
  "model/x3d-vrml": {
    source: "iana",
    extensions: [
      "x3dv"
    ]
  },
  "multipart/alternative": {
    source: "iana",
    compressible: !1
  },
  "multipart/appledouble": {
    source: "iana"
  },
  "multipart/byteranges": {
    source: "iana"
  },
  "multipart/digest": {
    source: "iana"
  },
  "multipart/encrypted": {
    source: "iana",
    compressible: !1
  },
  "multipart/form-data": {
    source: "iana",
    compressible: !1
  },
  "multipart/header-set": {
    source: "iana"
  },
  "multipart/mixed": {
    source: "iana"
  },
  "multipart/multilingual": {
    source: "iana"
  },
  "multipart/parallel": {
    source: "iana"
  },
  "multipart/related": {
    source: "iana",
    compressible: !1
  },
  "multipart/report": {
    source: "iana"
  },
  "multipart/signed": {
    source: "iana",
    compressible: !1
  },
  "multipart/vnd.bint.med-plus": {
    source: "iana"
  },
  "multipart/voice-message": {
    source: "iana"
  },
  "multipart/x-mixed-replace": {
    source: "iana"
  },
  "text/1d-interleaved-parityfec": {
    source: "iana"
  },
  "text/cache-manifest": {
    source: "iana",
    compressible: !0,
    extensions: [
      "appcache",
      "manifest"
    ]
  },
  "text/calendar": {
    source: "iana",
    extensions: [
      "ics",
      "ifb"
    ]
  },
  "text/calender": {
    compressible: !0
  },
  "text/cmd": {
    compressible: !0
  },
  "text/coffeescript": {
    extensions: [
      "coffee",
      "litcoffee"
    ]
  },
  "text/cql": {
    source: "iana"
  },
  "text/cql-expression": {
    source: "iana"
  },
  "text/cql-identifier": {
    source: "iana"
  },
  "text/css": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "css"
    ]
  },
  "text/csv": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csv"
    ]
  },
  "text/csv-schema": {
    source: "iana"
  },
  "text/directory": {
    source: "iana"
  },
  "text/dns": {
    source: "iana"
  },
  "text/ecmascript": {
    source: "iana"
  },
  "text/encaprtp": {
    source: "iana"
  },
  "text/enriched": {
    source: "iana"
  },
  "text/fhirpath": {
    source: "iana"
  },
  "text/flexfec": {
    source: "iana"
  },
  "text/fwdred": {
    source: "iana"
  },
  "text/gff3": {
    source: "iana"
  },
  "text/grammar-ref-list": {
    source: "iana"
  },
  "text/html": {
    source: "iana",
    compressible: !0,
    extensions: [
      "html",
      "htm",
      "shtml"
    ]
  },
  "text/jade": {
    extensions: [
      "jade"
    ]
  },
  "text/javascript": {
    source: "iana",
    compressible: !0
  },
  "text/jcr-cnd": {
    source: "iana"
  },
  "text/jsx": {
    compressible: !0,
    extensions: [
      "jsx"
    ]
  },
  "text/less": {
    compressible: !0,
    extensions: [
      "less"
    ]
  },
  "text/markdown": {
    source: "iana",
    compressible: !0,
    extensions: [
      "markdown",
      "md"
    ]
  },
  "text/mathml": {
    source: "nginx",
    extensions: [
      "mml"
    ]
  },
  "text/mdx": {
    compressible: !0,
    extensions: [
      "mdx"
    ]
  },
  "text/mizar": {
    source: "iana"
  },
  "text/n3": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "n3"
    ]
  },
  "text/parameters": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/parityfec": {
    source: "iana"
  },
  "text/plain": {
    source: "iana",
    compressible: !0,
    extensions: [
      "txt",
      "text",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "ini"
    ]
  },
  "text/provenance-notation": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/prs.fallenstein.rst": {
    source: "iana"
  },
  "text/prs.lines.tag": {
    source: "iana",
    extensions: [
      "dsc"
    ]
  },
  "text/prs.prop.logic": {
    source: "iana"
  },
  "text/raptorfec": {
    source: "iana"
  },
  "text/red": {
    source: "iana"
  },
  "text/rfc822-headers": {
    source: "iana"
  },
  "text/richtext": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtx"
    ]
  },
  "text/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "text/rtp-enc-aescm128": {
    source: "iana"
  },
  "text/rtploopback": {
    source: "iana"
  },
  "text/rtx": {
    source: "iana"
  },
  "text/sgml": {
    source: "iana",
    extensions: [
      "sgml",
      "sgm"
    ]
  },
  "text/shaclc": {
    source: "iana"
  },
  "text/shex": {
    source: "iana",
    extensions: [
      "shex"
    ]
  },
  "text/slim": {
    extensions: [
      "slim",
      "slm"
    ]
  },
  "text/spdx": {
    source: "iana",
    extensions: [
      "spdx"
    ]
  },
  "text/strings": {
    source: "iana"
  },
  "text/stylus": {
    extensions: [
      "stylus",
      "styl"
    ]
  },
  "text/t140": {
    source: "iana"
  },
  "text/tab-separated-values": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tsv"
    ]
  },
  "text/troff": {
    source: "iana",
    extensions: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ]
  },
  "text/turtle": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "ttl"
    ]
  },
  "text/ulpfec": {
    source: "iana"
  },
  "text/uri-list": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uri",
      "uris",
      "urls"
    ]
  },
  "text/vcard": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vcard"
    ]
  },
  "text/vnd.a": {
    source: "iana"
  },
  "text/vnd.abc": {
    source: "iana"
  },
  "text/vnd.ascii-art": {
    source: "iana"
  },
  "text/vnd.curl": {
    source: "iana",
    extensions: [
      "curl"
    ]
  },
  "text/vnd.curl.dcurl": {
    source: "apache",
    extensions: [
      "dcurl"
    ]
  },
  "text/vnd.curl.mcurl": {
    source: "apache",
    extensions: [
      "mcurl"
    ]
  },
  "text/vnd.curl.scurl": {
    source: "apache",
    extensions: [
      "scurl"
    ]
  },
  "text/vnd.debian.copyright": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.dmclientscript": {
    source: "iana"
  },
  "text/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "text/vnd.esmertec.theme-descriptor": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.familysearch.gedcom": {
    source: "iana",
    extensions: [
      "ged"
    ]
  },
  "text/vnd.ficlab.flt": {
    source: "iana"
  },
  "text/vnd.fly": {
    source: "iana",
    extensions: [
      "fly"
    ]
  },
  "text/vnd.fmi.flexstor": {
    source: "iana",
    extensions: [
      "flx"
    ]
  },
  "text/vnd.gml": {
    source: "iana"
  },
  "text/vnd.graphviz": {
    source: "iana",
    extensions: [
      "gv"
    ]
  },
  "text/vnd.hans": {
    source: "iana"
  },
  "text/vnd.hgl": {
    source: "iana"
  },
  "text/vnd.in3d.3dml": {
    source: "iana",
    extensions: [
      "3dml"
    ]
  },
  "text/vnd.in3d.spot": {
    source: "iana",
    extensions: [
      "spot"
    ]
  },
  "text/vnd.iptc.newsml": {
    source: "iana"
  },
  "text/vnd.iptc.nitf": {
    source: "iana"
  },
  "text/vnd.latex-z": {
    source: "iana"
  },
  "text/vnd.motorola.reflex": {
    source: "iana"
  },
  "text/vnd.ms-mediapackage": {
    source: "iana"
  },
  "text/vnd.net2phone.commcenter.command": {
    source: "iana"
  },
  "text/vnd.radisys.msml-basic-layout": {
    source: "iana"
  },
  "text/vnd.senx.warpscript": {
    source: "iana"
  },
  "text/vnd.si.uricatalogue": {
    source: "iana"
  },
  "text/vnd.sosi": {
    source: "iana"
  },
  "text/vnd.sun.j2me.app-descriptor": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "jad"
    ]
  },
  "text/vnd.trolltech.linguist": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.wap.si": {
    source: "iana"
  },
  "text/vnd.wap.sl": {
    source: "iana"
  },
  "text/vnd.wap.wml": {
    source: "iana",
    extensions: [
      "wml"
    ]
  },
  "text/vnd.wap.wmlscript": {
    source: "iana",
    extensions: [
      "wmls"
    ]
  },
  "text/vtt": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "vtt"
    ]
  },
  "text/x-asm": {
    source: "apache",
    extensions: [
      "s",
      "asm"
    ]
  },
  "text/x-c": {
    source: "apache",
    extensions: [
      "c",
      "cc",
      "cxx",
      "cpp",
      "h",
      "hh",
      "dic"
    ]
  },
  "text/x-component": {
    source: "nginx",
    extensions: [
      "htc"
    ]
  },
  "text/x-fortran": {
    source: "apache",
    extensions: [
      "f",
      "for",
      "f77",
      "f90"
    ]
  },
  "text/x-gwt-rpc": {
    compressible: !0
  },
  "text/x-handlebars-template": {
    extensions: [
      "hbs"
    ]
  },
  "text/x-java-source": {
    source: "apache",
    extensions: [
      "java"
    ]
  },
  "text/x-jquery-tmpl": {
    compressible: !0
  },
  "text/x-lua": {
    extensions: [
      "lua"
    ]
  },
  "text/x-markdown": {
    compressible: !0,
    extensions: [
      "mkd"
    ]
  },
  "text/x-nfo": {
    source: "apache",
    extensions: [
      "nfo"
    ]
  },
  "text/x-opml": {
    source: "apache",
    extensions: [
      "opml"
    ]
  },
  "text/x-org": {
    compressible: !0,
    extensions: [
      "org"
    ]
  },
  "text/x-pascal": {
    source: "apache",
    extensions: [
      "p",
      "pas"
    ]
  },
  "text/x-processing": {
    compressible: !0,
    extensions: [
      "pde"
    ]
  },
  "text/x-sass": {
    extensions: [
      "sass"
    ]
  },
  "text/x-scss": {
    extensions: [
      "scss"
    ]
  },
  "text/x-setext": {
    source: "apache",
    extensions: [
      "etx"
    ]
  },
  "text/x-sfv": {
    source: "apache",
    extensions: [
      "sfv"
    ]
  },
  "text/x-suse-ymp": {
    compressible: !0,
    extensions: [
      "ymp"
    ]
  },
  "text/x-uuencode": {
    source: "apache",
    extensions: [
      "uu"
    ]
  },
  "text/x-vcalendar": {
    source: "apache",
    extensions: [
      "vcs"
    ]
  },
  "text/x-vcard": {
    source: "apache",
    extensions: [
      "vcf"
    ]
  },
  "text/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml"
    ]
  },
  "text/xml-external-parsed-entity": {
    source: "iana"
  },
  "text/yaml": {
    compressible: !0,
    extensions: [
      "yaml",
      "yml"
    ]
  },
  "video/1d-interleaved-parityfec": {
    source: "iana"
  },
  "video/3gpp": {
    source: "iana",
    extensions: [
      "3gp",
      "3gpp"
    ]
  },
  "video/3gpp-tt": {
    source: "iana"
  },
  "video/3gpp2": {
    source: "iana",
    extensions: [
      "3g2"
    ]
  },
  "video/av1": {
    source: "iana"
  },
  "video/bmpeg": {
    source: "iana"
  },
  "video/bt656": {
    source: "iana"
  },
  "video/celb": {
    source: "iana"
  },
  "video/dv": {
    source: "iana"
  },
  "video/encaprtp": {
    source: "iana"
  },
  "video/ffv1": {
    source: "iana"
  },
  "video/flexfec": {
    source: "iana"
  },
  "video/h261": {
    source: "iana",
    extensions: [
      "h261"
    ]
  },
  "video/h263": {
    source: "iana",
    extensions: [
      "h263"
    ]
  },
  "video/h263-1998": {
    source: "iana"
  },
  "video/h263-2000": {
    source: "iana"
  },
  "video/h264": {
    source: "iana",
    extensions: [
      "h264"
    ]
  },
  "video/h264-rcdo": {
    source: "iana"
  },
  "video/h264-svc": {
    source: "iana"
  },
  "video/h265": {
    source: "iana"
  },
  "video/iso.segment": {
    source: "iana",
    extensions: [
      "m4s"
    ]
  },
  "video/jpeg": {
    source: "iana",
    extensions: [
      "jpgv"
    ]
  },
  "video/jpeg2000": {
    source: "iana"
  },
  "video/jpm": {
    source: "apache",
    extensions: [
      "jpm",
      "jpgm"
    ]
  },
  "video/jxsv": {
    source: "iana"
  },
  "video/mj2": {
    source: "iana",
    extensions: [
      "mj2",
      "mjp2"
    ]
  },
  "video/mp1s": {
    source: "iana"
  },
  "video/mp2p": {
    source: "iana"
  },
  "video/mp2t": {
    source: "iana",
    extensions: [
      "ts"
    ]
  },
  "video/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mp4",
      "mp4v",
      "mpg4"
    ]
  },
  "video/mp4v-es": {
    source: "iana"
  },
  "video/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v"
    ]
  },
  "video/mpeg4-generic": {
    source: "iana"
  },
  "video/mpv": {
    source: "iana"
  },
  "video/nv": {
    source: "iana"
  },
  "video/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogv"
    ]
  },
  "video/parityfec": {
    source: "iana"
  },
  "video/pointer": {
    source: "iana"
  },
  "video/quicktime": {
    source: "iana",
    compressible: !1,
    extensions: [
      "qt",
      "mov"
    ]
  },
  "video/raptorfec": {
    source: "iana"
  },
  "video/raw": {
    source: "iana"
  },
  "video/rtp-enc-aescm128": {
    source: "iana"
  },
  "video/rtploopback": {
    source: "iana"
  },
  "video/rtx": {
    source: "iana"
  },
  "video/scip": {
    source: "iana"
  },
  "video/smpte291": {
    source: "iana"
  },
  "video/smpte292m": {
    source: "iana"
  },
  "video/ulpfec": {
    source: "iana"
  },
  "video/vc1": {
    source: "iana"
  },
  "video/vc2": {
    source: "iana"
  },
  "video/vnd.cctv": {
    source: "iana"
  },
  "video/vnd.dece.hd": {
    source: "iana",
    extensions: [
      "uvh",
      "uvvh"
    ]
  },
  "video/vnd.dece.mobile": {
    source: "iana",
    extensions: [
      "uvm",
      "uvvm"
    ]
  },
  "video/vnd.dece.mp4": {
    source: "iana"
  },
  "video/vnd.dece.pd": {
    source: "iana",
    extensions: [
      "uvp",
      "uvvp"
    ]
  },
  "video/vnd.dece.sd": {
    source: "iana",
    extensions: [
      "uvs",
      "uvvs"
    ]
  },
  "video/vnd.dece.video": {
    source: "iana",
    extensions: [
      "uvv",
      "uvvv"
    ]
  },
  "video/vnd.directv.mpeg": {
    source: "iana"
  },
  "video/vnd.directv.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dlna.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dvb.file": {
    source: "iana",
    extensions: [
      "dvb"
    ]
  },
  "video/vnd.fvt": {
    source: "iana",
    extensions: [
      "fvt"
    ]
  },
  "video/vnd.hns.video": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsavc": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsmpeg2": {
    source: "iana"
  },
  "video/vnd.motorola.video": {
    source: "iana"
  },
  "video/vnd.motorola.videop": {
    source: "iana"
  },
  "video/vnd.mpegurl": {
    source: "iana",
    extensions: [
      "mxu",
      "m4u"
    ]
  },
  "video/vnd.ms-playready.media.pyv": {
    source: "iana",
    extensions: [
      "pyv"
    ]
  },
  "video/vnd.nokia.interleaved-multimedia": {
    source: "iana"
  },
  "video/vnd.nokia.mp4vr": {
    source: "iana"
  },
  "video/vnd.nokia.videovoip": {
    source: "iana"
  },
  "video/vnd.objectvideo": {
    source: "iana"
  },
  "video/vnd.radgamettools.bink": {
    source: "iana"
  },
  "video/vnd.radgamettools.smacker": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg1": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg4": {
    source: "iana"
  },
  "video/vnd.sealed.swf": {
    source: "iana"
  },
  "video/vnd.sealedmedia.softseal.mov": {
    source: "iana"
  },
  "video/vnd.uvvu.mp4": {
    source: "iana",
    extensions: [
      "uvu",
      "uvvu"
    ]
  },
  "video/vnd.vivo": {
    source: "iana",
    extensions: [
      "viv"
    ]
  },
  "video/vnd.youtube.yt": {
    source: "iana"
  },
  "video/vp8": {
    source: "iana"
  },
  "video/vp9": {
    source: "iana"
  },
  "video/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "webm"
    ]
  },
  "video/x-f4v": {
    source: "apache",
    extensions: [
      "f4v"
    ]
  },
  "video/x-fli": {
    source: "apache",
    extensions: [
      "fli"
    ]
  },
  "video/x-flv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "flv"
    ]
  },
  "video/x-m4v": {
    source: "apache",
    extensions: [
      "m4v"
    ]
  },
  "video/x-matroska": {
    source: "apache",
    compressible: !1,
    extensions: [
      "mkv",
      "mk3d",
      "mks"
    ]
  },
  "video/x-mng": {
    source: "apache",
    extensions: [
      "mng"
    ]
  },
  "video/x-ms-asf": {
    source: "apache",
    extensions: [
      "asf",
      "asx"
    ]
  },
  "video/x-ms-vob": {
    source: "apache",
    extensions: [
      "vob"
    ]
  },
  "video/x-ms-wm": {
    source: "apache",
    extensions: [
      "wm"
    ]
  },
  "video/x-ms-wmv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "wmv"
    ]
  },
  "video/x-ms-wmx": {
    source: "apache",
    extensions: [
      "wmx"
    ]
  },
  "video/x-ms-wvx": {
    source: "apache",
    extensions: [
      "wvx"
    ]
  },
  "video/x-msvideo": {
    source: "apache",
    extensions: [
      "avi"
    ]
  },
  "video/x-sgi-movie": {
    source: "apache",
    extensions: [
      "movie"
    ]
  },
  "video/x-smv": {
    source: "apache",
    extensions: [
      "smv"
    ]
  },
  "x-conference/x-cooltalk": {
    source: "apache",
    extensions: [
      "ice"
    ]
  },
  "x-shader/x-fragment": {
    compressible: !0
  },
  "x-shader/x-vertex": {
    compressible: !0
  }
};
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  e.exports = zd;
})(Ud);
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  var t = ll, i = ae.extname, c = /^\s*([^;\s]*)(?:;|\s|$)/, s = /^text\//i;
  e.charset = m, e.charsets = { lookup: m }, e.contentType = h, e.extension = R, e.extensions = /* @__PURE__ */ Object.create(null), e.lookup = w, e.types = /* @__PURE__ */ Object.create(null), C(e.extensions, e.types);
  function m(b) {
    if (!b || typeof b != "string")
      return !1;
    var x = c.exec(b), O = x && t[x[1].toLowerCase()];
    return O && O.charset ? O.charset : x && s.test(x[1]) ? "UTF-8" : !1;
  }
  function h(b) {
    if (!b || typeof b != "string")
      return !1;
    var x = b.indexOf("/") === -1 ? e.lookup(b) : b;
    if (!x)
      return !1;
    if (x.indexOf("charset") === -1) {
      var O = e.charset(x);
      O && (x += "; charset=" + O.toLowerCase());
    }
    return x;
  }
  function R(b) {
    if (!b || typeof b != "string")
      return !1;
    var x = c.exec(b), O = x && e.extensions[x[1].toLowerCase()];
    return !O || !O.length ? !1 : O[0];
  }
  function w(b) {
    if (!b || typeof b != "string")
      return !1;
    var x = i("x." + b).toLowerCase().substr(1);
    return x && e.types[x] || !1;
  }
  function C(b, x) {
    var O = ["nginx", "apache", void 0, "iana"];
    Object.keys(t).forEach(function(I) {
      var k = t[I], _ = k.extensions;
      if (!(!_ || !_.length)) {
        b[I] = _;
        for (var A = 0; A < _.length; A++) {
          var z = _[A];
          if (x[z]) {
            var N = O.indexOf(t[x[z]].source), B = O.indexOf(k.source);
            if (x[z] !== "application/octet-stream" && (N > B || N === B && x[z].substr(0, 12) === "application/"))
              continue;
          }
          x[z] = I;
        }
      }
    });
  }
})(Ts);
let $d = class {
  constructor(t) {
    this.max = t, this.size = 0, this.cache = /* @__PURE__ */ new Map(), this._cache = /* @__PURE__ */ new Map();
  }
  get(t, i) {
    let c = this.cache.get(t);
    const s = i && i.maxAge;
    let m;
    function h() {
      return m = m || Date.now(), m;
    }
    if (c) {
      if (c.expired && h() > c.expired)
        c.expired = 0, c.value = void 0;
      else if (s !== void 0) {
        const R = s ? h() + s : 0;
        c.expired = R;
      }
      return c.value;
    }
    if (c = this._cache.get(t), c) {
      if (c.expired && h() > c.expired)
        c.expired = 0, c.value = void 0;
      else if (this._update(t, c), s !== void 0) {
        const R = s ? h() + s : 0;
        c.expired = R;
      }
      return c.value;
    }
  }
  set(t, i, c) {
    const s = c && c.maxAge, m = s ? Date.now() + s : 0;
    let h = this.cache.get(t);
    h ? (h.expired = m, h.value = i) : (h = {
      value: i,
      expired: m
    }, this._update(t, h));
  }
  keys() {
    const t = /* @__PURE__ */ new Set(), i = Date.now();
    for (const s of this.cache.entries())
      c(s);
    for (const s of this._cache.entries())
      c(s);
    function c(s) {
      const m = s[0], h = s[1];
      (s[1].value && !s[1].expired || h.expired >= i) && t.add(m);
    }
    return Array.from(t.keys());
  }
  _update(t, i) {
    this.cache.set(t, i), this.size++, this.size >= this.max && (this.size = 0, this._cache = this.cache, this.cache = /* @__PURE__ */ new Map());
  }
};
var Hd = $d;
const Bd = Ts, Nd = Hd, Wl = new Nd(100);
var Wd = (e) => {
  let t = Wl.get(e);
  return t || (t = Bd.contentType(e), Wl.set(e, t)), t;
};
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
var Yd = /["'&<>]/, Gd = qd;
function qd(e) {
  var t = "" + e, i = Yd.exec(t);
  if (!i)
    return t;
  var c, s = "", m = 0, h = 0;
  for (m = i.index; m < t.length; m++) {
    switch (t.charCodeAt(m)) {
      case 34:
        c = "&quot;";
        break;
      case 38:
        c = "&amp;";
        break;
      case 39:
        c = "&#39;";
        break;
      case 60:
        c = "&lt;";
        break;
      case 62:
        c = "&gt;";
        break;
      default:
        continue;
    }
    h !== m && (s += t.substring(h, m)), h = m + 1, s += c;
  }
  return h !== m ? s + t.substring(h, m) : s;
}
var fr = {}, Vd = {
  get exports() {
    return fr;
  },
  set exports(e) {
    fr = e;
  }
}, yl = {};
/*!
 * media-typer
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */
var Yl = /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u0020-\u007e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g, Xd = /^[\u0020-\u007e\u0080-\u00ff]+$/, Bu = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/, Zd = /\\([\u0000-\u007f])/g, Jd = /([\\"])/g, Qd = /^[A-Za-z0-9][A-Za-z0-9!#$&^_.-]{0,126}$/, Gl = /^[A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126}$/, Kd = /^ *([A-Za-z0-9][A-Za-z0-9!#$&^_-]{0,126})\/([A-Za-z0-9][A-Za-z0-9!#$&^_.+-]{0,126}) *$/;
yl.format = ef;
yl.parse = nf;
function ef(e) {
  if (!e || typeof e != "object")
    throw new TypeError("argument obj is required");
  var t = e.parameters, i = e.subtype, c = e.suffix, s = e.type;
  if (!s || !Gl.test(s))
    throw new TypeError("invalid type");
  if (!i || !Qd.test(i))
    throw new TypeError("invalid subtype");
  var m = s + "/" + i;
  if (c) {
    if (!Gl.test(c))
      throw new TypeError("invalid suffix");
    m += "+" + c;
  }
  if (t && typeof t == "object")
    for (var h, R = Object.keys(t).sort(), w = 0; w < R.length; w++) {
      if (h = R[w], !Bu.test(h))
        throw new TypeError("invalid parameter name");
      m += "; " + h + "=" + rf(t[h]);
    }
  return m;
}
function nf(e) {
  if (!e)
    throw new TypeError("argument string is required");
  if (typeof e == "object" && (e = tf(e)), typeof e != "string")
    throw new TypeError("argument string is required to be a string");
  var t = e.indexOf(";"), i = t !== -1 ? e.substr(0, t) : e, c, s, m = af(i), h = {}, R;
  for (Yl.lastIndex = t; s = Yl.exec(e); ) {
    if (s.index !== t)
      throw new TypeError("invalid parameter format");
    t += s[0].length, c = s[1].toLowerCase(), R = s[2], R[0] === '"' && (R = R.substr(1, R.length - 2).replace(Zd, "$1")), h[c] = R;
  }
  if (t !== -1 && t !== e.length)
    throw new TypeError("invalid parameter format");
  return m.parameters = h, m;
}
function tf(e) {
  if (typeof e.getHeader == "function")
    return e.getHeader("content-type");
  if (typeof e.headers == "object")
    return e.headers && e.headers["content-type"];
}
function rf(e) {
  var t = String(e);
  if (Bu.test(t))
    return t;
  if (t.length > 0 && !Xd.test(t))
    throw new TypeError("invalid parameter value");
  return '"' + t.replace(Jd, "\\$1") + '"';
}
function af(e) {
  var t = Kd.exec(e.toLowerCase());
  if (!t)
    throw new TypeError("invalid media type");
  var i = t[1], c = t[2], s, m = c.lastIndexOf("+");
  m !== -1 && (s = c.substr(m + 1), c = c.substr(0, m));
  var h = {
    type: i,
    subtype: c,
    suffix: s
  };
  return h;
}
/*!
 * type-is
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var ql = yl, of = Ts;
Vd.exports = sf;
fr.is = Nu;
fr.hasBody = Wu;
fr.normalize = Yu;
fr.match = Gu;
function Nu(e, t) {
  var i, c = t, s = lf(e);
  if (!s)
    return !1;
  if (c && !Array.isArray(c))
    for (c = new Array(arguments.length - 1), i = 0; i < c.length; i++)
      c[i] = arguments[i + 1];
  if (!c || !c.length)
    return s;
  var m;
  for (i = 0; i < c.length; i++)
    if (Gu(Yu(m = c[i]), s))
      return m[0] === "+" || m.indexOf("*") !== -1 ? s : m;
  return !1;
}
function Wu(e) {
  return e.headers["transfer-encoding"] !== void 0 || !isNaN(e.headers["content-length"]);
}
function sf(e, t) {
  var i = t;
  if (!Wu(e))
    return null;
  if (arguments.length > 2) {
    i = new Array(arguments.length - 1);
    for (var c = 0; c < i.length; c++)
      i[c] = arguments[c + 1];
  }
  var s = e.headers["content-type"];
  return Nu(s, i);
}
function Yu(e) {
  if (typeof e != "string")
    return !1;
  switch (e) {
    case "urlencoded":
      return "application/x-www-form-urlencoded";
    case "multipart":
      return "multipart/*";
  }
  return e[0] === "+" ? "*/*" + e : e.indexOf("/") === -1 ? of.lookup(e) : e;
}
function Gu(e, t) {
  if (e === !1)
    return !1;
  var i = t.split("/"), c = e.split("/");
  return i.length !== 2 || c.length !== 2 || c[0] !== "*" && c[0] !== i[0] ? !1 : c[1].substr(0, 2) === "*+" ? c[1].length <= i[1].length + 1 && c[1].substr(1) === i[1].substr(1 - c[1].length) : !(c[1] !== "*" && c[1] !== i[1]);
}
function cf(e) {
  var t = ql.parse(e);
  return t.parameters = void 0, ql.format(t);
}
function lf(e) {
  if (!e)
    return null;
  try {
    return cf(e);
  } catch {
    return null;
  }
}
const uf = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  306: "(Unused)",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Unordered Collection",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
};
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */
var qu = uf, mo = yt;
yt.STATUS_CODES = qu;
yt.codes = pf(yt, qu);
yt.redirect = {
  300: !0,
  301: !0,
  302: !0,
  303: !0,
  305: !0,
  307: !0,
  308: !0
};
yt.empty = {
  204: !0,
  205: !0,
  304: !0
};
yt.retry = {
  502: !0,
  503: !0,
  504: !0
};
function pf(e, t) {
  var i = [];
  return Object.keys(t).forEach(function(s) {
    var m = t[s], h = Number(s);
    e[h] = m, e[m] = h, e[m.toLowerCase()] = h, i.push(h);
  }), i;
}
function yt(e) {
  if (typeof e == "number") {
    if (!yt[e])
      throw new Error("invalid status code: " + e);
    return e;
  }
  if (typeof e != "string")
    throw new TypeError("code must be a number or string");
  var t = parseInt(e, 10);
  if (!isNaN(t)) {
    if (!yt[t])
      throw new Error("invalid status code: " + t);
    return t;
  }
  if (t = yt[e.toLowerCase()], !t)
    throw new Error('invalid status message: "' + e + '"');
  return t;
}
/*!
 * destroy
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
var df = ae.EventEmitter, ff = ae.ReadStream, Vu = ae, sa = ae, mf = vf;
function vf(e, t) {
  return wf(e) ? hf(e) : Sf(e) ? xf(e) : bf(e) && e.destroy(), yf(e) && t && (e.removeAllListeners("error"), e.addListener("error", Cf)), e;
}
function hf(e) {
  e.destroy(), typeof e.close == "function" && e.on("open", kf);
}
function gf(e) {
  if (e._hadError === !0) {
    var t = e._binding === null ? "_binding" : "_handle";
    e[t] = {
      close: function() {
        this[t] = null;
      }
    };
  }
  e.close();
}
function xf(e) {
  typeof e.destroy == "function" ? e._binding ? (e.destroy(), e._processing ? (e._needDrain = !0, e.once("drain", Ef)) : e._binding.clear()) : e._destroy && e._destroy !== Vu.Transform.prototype._destroy ? e.destroy() : e._destroy && typeof e.close == "function" ? (e.destroyed = !0, e.close()) : e.destroy() : typeof e.close == "function" && gf(e);
}
function bf(e) {
  return e instanceof Vu && typeof e.destroy == "function";
}
function yf(e) {
  return e instanceof df;
}
function wf(e) {
  return e instanceof ff;
}
function Sf(e) {
  return e instanceof sa.Gzip || e instanceof sa.Gunzip || e instanceof sa.Deflate || e instanceof sa.DeflateRaw || e instanceof sa.Inflate || e instanceof sa.InflateRaw || e instanceof sa.Unzip;
}
function Cf() {
}
function Ef() {
  this._binding.clear();
}
function kf() {
  typeof this.fd == "number" && this.close();
}
var us = {}, Tf = {
  get exports() {
    return us;
  },
  set exports(e) {
    us = e;
  }
};
/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
Tf.exports = Af;
us.append = Xu;
var Rf = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
function Xu(e, t) {
  if (typeof e != "string")
    throw new TypeError("header argument is required");
  if (!t)
    throw new TypeError("field argument is required");
  for (var i = Array.isArray(t) ? t : Vl(String(t)), c = 0; c < i.length; c++)
    if (!Rf.test(i[c]))
      throw new TypeError("field argument contains an invalid header name");
  if (e === "*")
    return e;
  var s = e, m = Vl(e.toLowerCase());
  if (i.indexOf("*") !== -1 || m.indexOf("*") !== -1)
    return "*";
  for (var h = 0; h < i.length; h++) {
    var R = i[h].toLowerCase();
    m.indexOf(R) === -1 && (m.push(R), s = s ? s + ", " + i[h] : i[h]);
  }
  return s;
}
function Vl(e) {
  for (var t = 0, i = [], c = 0, s = 0, m = e.length; s < m; s++)
    switch (e.charCodeAt(s)) {
      case 32:
        c === t && (c = t = s + 1);
        break;
      case 44:
        i.push(e.substring(c, t)), c = t = s + 1;
        break;
      default:
        t = s + 1;
        break;
    }
  return i.push(e.substring(c, t)), i;
}
function Af(e, t) {
  if (!e || !e.getHeader || !e.setHeader)
    throw new TypeError("res argument is required");
  var i = e.getHeader("Vary") || "", c = Array.isArray(i) ? i.join(", ") : String(i);
  (i = Xu(c, t)) && e.setHeader("Vary", i);
}
var wl = function(e, t) {
  return e = e || {}, typeof t == "string" && (t = t.split(/ +/)), t.reduce(function(i, c) {
    return e[c] == null || (i[c] = e[c]), i;
  }, {});
};
/*!
 * encodeurl
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */
var _f = jf, Pf = /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g, Of = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g, Ff = "$1�$2";
function jf(e) {
  return String(e).replace(Of, Ff).replace(Pf, encodeURI);
}
(function(e) {
  const t = cs, i = Wd, c = uo, s = Gd, m = fr.is, h = mo, R = mf, w = ae, C = ae.extname, b = us, x = wl, O = ae, j = _f, I = ae;
  e.exports = {
    /**
     * Return the request socket.
     *
     * @return {Connection}
     * @api public
     */
    get socket() {
      return this.res.socket;
    },
    /**
     * Return response header.
     *
     * @return {Object}
     * @api public
     */
    get header() {
      const { res: k } = this;
      return typeof k.getHeaders == "function" ? k.getHeaders() : k._headers || {};
    },
    /**
     * Return response header, alias as response.header
     *
     * @return {Object}
     * @api public
     */
    get headers() {
      return this.header;
    },
    /**
     * Get response status code.
     *
     * @return {Number}
     * @api public
     */
    get status() {
      return this.res.statusCode;
    },
    /**
     * Set response status code.
     *
     * @param {Number} code
     * @api public
     */
    set status(k) {
      this.headerSent || (w(Number.isInteger(k), "status code must be a number"), w(k >= 100 && k <= 999, `invalid status code: ${k}`), this._explicitStatus = !0, this.res.statusCode = k, this.req.httpVersionMajor < 2 && (this.res.statusMessage = h[k]), this.body && h.empty[k] && (this.body = null));
    },
    /**
     * Get response status message
     *
     * @return {String}
     * @api public
     */
    get message() {
      return this.res.statusMessage || h[this.status];
    },
    /**
     * Set response status message
     *
     * @param {String} msg
     * @api public
     */
    set message(k) {
      this.res.statusMessage = k;
    },
    /**
     * Get response body.
     *
     * @return {Mixed}
     * @api public
     */
    get body() {
      return this._body;
    },
    /**
     * Set response body.
     *
     * @param {String|Buffer|Object|Stream} val
     * @api public
     */
    set body(k) {
      const _ = this._body;
      if (this._body = k, k == null) {
        h.empty[this.status] || (this.status = 204), k === null && (this._explicitNullBody = !0), this.remove("Content-Type"), this.remove("Content-Length"), this.remove("Transfer-Encoding");
        return;
      }
      this._explicitStatus || (this.status = 200);
      const A = !this.has("Content-Type");
      if (typeof k == "string") {
        A && (this.type = /^\s*</.test(k) ? "html" : "text"), this.length = Buffer.byteLength(k);
        return;
      }
      if (Buffer.isBuffer(k)) {
        A && (this.type = "bin"), this.length = k.length;
        return;
      }
      if (k instanceof I) {
        c(this.res, R.bind(null, k)), _ != k && (k.once("error", (z) => this.ctx.onerror(z)), _ != null && this.remove("Content-Length")), A && (this.type = "bin");
        return;
      }
      this.remove("Content-Length"), this.type = "json";
    },
    /**
     * Set Content-Length field to `n`.
     *
     * @param {Number} n
     * @api public
     */
    set length(k) {
      this.has("Transfer-Encoding") || this.set("Content-Length", k);
    },
    /**
     * Return parsed response Content-Length when present.
     *
     * @return {Number}
     * @api public
     */
    get length() {
      if (this.has("Content-Length"))
        return parseInt(this.get("Content-Length"), 10) || 0;
      const { body: k } = this;
      if (!(!k || k instanceof I))
        return typeof k == "string" ? Buffer.byteLength(k) : Buffer.isBuffer(k) ? k.length : Buffer.byteLength(JSON.stringify(k));
    },
    /**
     * Check if a header has been written to the socket.
     *
     * @return {Boolean}
     * @api public
     */
    get headerSent() {
      return this.res.headersSent;
    },
    /**
     * Vary on `field`.
     *
     * @param {String} field
     * @api public
     */
    vary(k) {
      this.headerSent || b(this.res, k);
    },
    /**
     * Perform a 302 redirect to `url`.
     *
     * The string "back" is special-cased
     * to provide Referrer support, when Referrer
     * is not present `alt` or "/" is used.
     *
     * Examples:
     *
     *    this.redirect('back');
     *    this.redirect('back', '/index.html');
     *    this.redirect('/login');
     *    this.redirect('http://google.com');
     *
     * @param {String} url
     * @param {String} [alt]
     * @api public
     */
    redirect(k, _) {
      if (k === "back" && (k = this.ctx.get("Referrer") || _ || "/"), this.set("Location", j(k)), h.redirect[this.status] || (this.status = 302), this.ctx.accepts("html")) {
        k = s(k), this.type = "text/html; charset=utf-8", this.body = `Redirecting to <a href="${k}">${k}</a>.`;
        return;
      }
      this.type = "text/plain; charset=utf-8", this.body = `Redirecting to ${k}.`;
    },
    /**
     * Set Content-Disposition header to "attachment" with optional `filename`.
     *
     * @param {String} filename
     * @api public
     */
    attachment(k, _) {
      k && (this.type = C(k)), this.set("Content-Disposition", t(k, _));
    },
    /**
     * Set Content-Type response header with `type` through `mime.lookup()`
     * when it does not contain a charset.
     *
     * Examples:
     *
     *     this.type = '.html';
     *     this.type = 'html';
     *     this.type = 'json';
     *     this.type = 'application/json';
     *     this.type = 'png';
     *
     * @param {String} type
     * @api public
     */
    set type(k) {
      k = i(k), k ? this.set("Content-Type", k) : this.remove("Content-Type");
    },
    /**
     * Set the Last-Modified date using a string or a Date.
     *
     *     this.response.lastModified = new Date();
     *     this.response.lastModified = '2013-09-13';
     *
     * @param {String|Date} type
     * @api public
     */
    set lastModified(k) {
      typeof k == "string" && (k = new Date(k)), this.set("Last-Modified", k.toUTCString());
    },
    /**
     * Get the Last-Modified date in Date form, if it exists.
     *
     * @return {Date}
     * @api public
     */
    get lastModified() {
      const k = this.get("last-modified");
      if (k)
        return new Date(k);
    },
    /**
     * Set the ETag of a response.
     * This will normalize the quotes if necessary.
     *
     *     this.response.etag = 'md5hashsum';
     *     this.response.etag = '"md5hashsum"';
     *     this.response.etag = 'W/"123456789"';
     *
     * @param {String} etag
     * @api public
     */
    set etag(k) {
      /^(W\/)?"/.test(k) || (k = `"${k}"`), this.set("ETag", k);
    },
    /**
     * Get the ETag of a response.
     *
     * @return {String}
     * @api public
     */
    get etag() {
      return this.get("ETag");
    },
    /**
     * Return the response mime type void of
     * parameters such as "charset".
     *
     * @return {String}
     * @api public
     */
    get type() {
      const k = this.get("Content-Type");
      return k ? k.split(";", 1)[0] : "";
    },
    /**
     * Check whether the response is one of the listed types.
     * Pretty much the same as `this.request.is()`.
     *
     * @param {String|String[]} [type]
     * @param {String[]} [types]
     * @return {String|false}
     * @api public
     */
    is(k, ..._) {
      return m(this.type, k, ..._);
    },
    /**
     * Return response header.
     *
     * Examples:
     *
     *     this.get('Content-Type');
     *     // => "text/plain"
     *
     *     this.get('content-type');
     *     // => "text/plain"
     *
     * @param {String} field
     * @return {String}
     * @api public
     */
    get(k) {
      return this.header[k.toLowerCase()] || "";
    },
    /**
     * Returns true if the header identified by name is currently set in the outgoing headers.
     * The header name matching is case-insensitive.
     *
     * Examples:
     *
     *     this.has('Content-Type');
     *     // => true
     *
     *     this.get('content-type');
     *     // => true
     *
     * @param {String} field
     * @return {boolean}
     * @api public
     */
    has(k) {
      return typeof this.res.hasHeader == "function" ? this.res.hasHeader(k) : k.toLowerCase() in this.headers;
    },
    /**
     * Set header `field` to `val` or pass
     * an object of header fields.
     *
     * Examples:
     *
     *    this.set('Foo', ['bar', 'baz']);
     *    this.set('Accept', 'application/json');
     *    this.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
     *
     * @param {String|Object|Array} field
     * @param {String} val
     * @api public
     */
    set(k, _) {
      if (!this.headerSent)
        if (arguments.length === 2)
          Array.isArray(_) ? _ = _.map((A) => typeof A == "string" ? A : String(A)) : typeof _ != "string" && (_ = String(_)), this.res.setHeader(k, _);
        else
          for (const A in k)
            this.set(A, k[A]);
    },
    /**
     * Append additional header `field` with value `val`.
     *
     * Examples:
     *
     * ```
     * this.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
     * this.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
     * this.append('Warning', '199 Miscellaneous warning');
     * ```
     *
     * @param {String} field
     * @param {String|Array} val
     * @api public
     */
    append(k, _) {
      const A = this.get(k);
      return A && (_ = Array.isArray(A) ? A.concat(_) : [A].concat(_)), this.set(k, _);
    },
    /**
     * Remove header `field`.
     *
     * @param {String} name
     * @api public
     */
    remove(k) {
      this.headerSent || this.res.removeHeader(k);
    },
    /**
     * Checks if the request is writable.
     * Tests for the existence of the socket
     * as node sometimes does not set it.
     *
     * @return {Boolean}
     * @api private
     */
    get writable() {
      if (this.res.writableEnded || this.res.finished)
        return !1;
      const k = this.res.socket;
      return k ? k.writable : !0;
    },
    /**
     * Inspect implementation.
     *
     * @return {Object}
     * @api public
     */
    inspect() {
      if (!this.res)
        return;
      const k = this.toJSON();
      return k.body = this.body, k;
    },
    /**
     * Return JSON representation.
     *
     * @return {Object}
     * @api public
     */
    toJSON() {
      return x(this, [
        "status",
        "message",
        "header"
      ]);
    },
    /**
     * Flush any set headers and begin the body
     */
    flushHeaders() {
      this.res.flushHeaders();
    }
  }, O.inspect.custom && (e.exports[O.inspect.custom] = e.exports.inspect);
})(hd);
var Sl = If;
function If(e) {
  if (!Array.isArray(e))
    throw new TypeError("Middleware stack must be an array!");
  for (const t of e)
    if (typeof t != "function")
      throw new TypeError("Middleware must be composed of functions!");
  return function(t, i) {
    let c = -1;
    return s(0);
    function s(m) {
      if (m <= c)
        return Promise.reject(new Error("next() called multiple times"));
      c = m;
      let h = e[m];
      if (m === e.length && (h = i), !h)
        return Promise.resolve();
      try {
        return Promise.resolve(h(t, s.bind(null, m + 1)));
      } catch (R) {
        return Promise.reject(R);
      }
    }
  };
}
var ul = {}, Df = {
  get exports() {
    return ul;
  },
  set exports(e) {
    ul = e;
  }
}, ii = {}, Mf = {
  get exports() {
    return ii;
  },
  set exports(e) {
    ii = e;
  }
};
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var Zu = Lf;
function Lf(e) {
  if (!e)
    throw new TypeError("argument namespace is required");
  function t(i) {
  }
  return t._file = void 0, t._ignored = !0, t._namespace = e, t._traced = !1, t._warned = /* @__PURE__ */ Object.create(null), t.function = Uf, t.property = zf, t;
}
function Uf(e, t) {
  if (typeof e != "function")
    throw new TypeError("argument fn must be a function");
  return e;
}
function zf(e, t, i) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new TypeError("argument obj must be object");
  var c = Object.getOwnPropertyDescriptor(e, t);
  if (!c)
    throw new TypeError("must call property on owner object");
  if (!c.configurable)
    throw new TypeError("property must be configurable");
}
var Ju = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? $f : Hf);
function $f(e, t) {
  return e.__proto__ = t, e;
}
function Hf(e, t) {
  for (var i in t)
    Object.prototype.hasOwnProperty.call(e, i) || (e[i] = t[i]);
  return e;
}
var ps = {}, Xl = {
  get exports() {
    return ps;
  },
  set exports(e) {
    ps = e;
  }
};
typeof Object.create == "function" ? Xl.exports = function(t, i) {
  i && (t.super_ = i, t.prototype = Object.create(i.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : Xl.exports = function(t, i) {
  if (i) {
    t.super_ = i;
    var c = function() {
    };
    c.prototype = i.prototype, t.prototype = new c(), t.prototype.constructor = t;
  }
};
/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */
var Qu = Bf;
function Bf(e) {
  return e.split(" ").map(function(t) {
    return t.slice(0, 1).toUpperCase() + t.slice(1);
  }).join("").replace(/[^ _0-9a-z]/gi, "");
}
/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  var t = Zu("http-errors"), i = Ju, c = mo, s = ps, m = Qu;
  e.exports = R, e.exports.HttpError = w(), e.exports.isHttpError = b(e.exports.HttpError), j(e.exports, c.codes, e.exports.HttpError);
  function h(k) {
    return Number(String(k).charAt(0) + "00");
  }
  function R() {
    for (var k, _, A = 500, z = {}, N = 0; N < arguments.length; N++) {
      var B = arguments[N];
      if (B instanceof Error) {
        k = B, A = k.status || k.statusCode || A;
        continue;
      }
      switch (typeof B) {
        case "string":
          _ = B;
          break;
        case "number":
          A = B;
          break;
        case "object":
          z = B;
          break;
      }
    }
    (typeof A != "number" || !c[A] && (A < 400 || A >= 600)) && (A = 500);
    var Y = R[A] || R[h(A)];
    k || (k = Y ? new Y(_) : new Error(_ || c[A]), Error.captureStackTrace(k, R)), (!Y || !(k instanceof Y) || k.status !== A) && (k.expose = A < 500, k.status = k.statusCode = A);
    for (var X in z)
      X !== "status" && X !== "statusCode" && (k[X] = z[X]);
    return k;
  }
  function w() {
    function k() {
      throw new TypeError("cannot construct abstract class");
    }
    return s(k, Error), k;
  }
  function C(k, _, A) {
    var z = I(_);
    function N(B) {
      var Y = B ?? c[A], X = new Error(Y);
      return Error.captureStackTrace(X, N), i(X, N.prototype), Object.defineProperty(X, "message", {
        enumerable: !0,
        configurable: !0,
        value: Y,
        writable: !0
      }), Object.defineProperty(X, "name", {
        enumerable: !1,
        configurable: !0,
        value: z,
        writable: !0
      }), X;
    }
    return s(N, k), O(N, z), N.prototype.status = A, N.prototype.statusCode = A, N.prototype.expose = !0, N;
  }
  function b(k) {
    return function(A) {
      return !A || typeof A != "object" ? !1 : A instanceof k ? !0 : A instanceof Error && typeof A.expose == "boolean" && typeof A.statusCode == "number" && A.status === A.statusCode;
    };
  }
  function x(k, _, A) {
    var z = I(_);
    function N(B) {
      var Y = B ?? c[A], X = new Error(Y);
      return Error.captureStackTrace(X, N), i(X, N.prototype), Object.defineProperty(X, "message", {
        enumerable: !0,
        configurable: !0,
        value: Y,
        writable: !0
      }), Object.defineProperty(X, "name", {
        enumerable: !1,
        configurable: !0,
        value: z,
        writable: !0
      }), X;
    }
    return s(N, k), O(N, z), N.prototype.status = A, N.prototype.statusCode = A, N.prototype.expose = !1, N;
  }
  function O(k, _) {
    var A = Object.getOwnPropertyDescriptor(k, "name");
    A && A.configurable && (A.value = _, Object.defineProperty(k, "name", A));
  }
  function j(k, _, A) {
    _.forEach(function(N) {
      var B, Y = m(c[N]);
      switch (h(N)) {
        case 400:
          B = C(A, Y, N);
          break;
        case 500:
          B = x(A, Y, N);
          break;
      }
      B && (k[N] = B, k[Y] = B);
    }), k["I'mateapot"] = t.function(
      k.ImATeapot,
      `"I'mateapot"; use "ImATeapot" instead`
    );
  }
  function I(k) {
    return k.substr(-5) !== "Error" ? k + "Error" : k;
  }
})(Mf);
var pl = {}, Nf = {
  get exports() {
    return pl;
  },
  set exports(e) {
    pl = e;
  }
}, ds = {}, Wf = {
  get exports() {
    return ds;
  },
  set exports(e) {
    ds = e;
  }
};
(function(e, t) {
  t = e.exports = typeof Object.keys == "function" ? Object.keys : i, t.shim = i;
  function i(c) {
    var s = [];
    for (var m in c)
      s.push(m);
    return s;
  }
})(Wf, ds);
var fs = {}, Yf = {
  get exports() {
    return fs;
  },
  set exports(e) {
    fs = e;
  }
};
(function(e, t) {
  var i = function() {
    return Object.prototype.toString.call(arguments);
  }() == "[object Arguments]";
  t = e.exports = i ? c : s, t.supported = c;
  function c(m) {
    return Object.prototype.toString.call(m) == "[object Arguments]";
  }
  t.unsupported = s;
  function s(m) {
    return m && typeof m == "object" && typeof m.length == "number" && Object.prototype.hasOwnProperty.call(m, "callee") && !Object.prototype.propertyIsEnumerable.call(m, "callee") || !1;
  }
})(Yf, fs);
var Zl = Array.prototype.slice, Jl = ds, Ql = fs, Kl = Nf.exports = function(e, t, i) {
  return i || (i = {}), e === t ? !0 : e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || typeof e != "object" && typeof t != "object" ? i.strict ? e === t : e == t : Gf(e, t, i);
};
function eu(e) {
  return e == null;
}
function nu(e) {
  return !(!e || typeof e != "object" || typeof e.length != "number" || typeof e.copy != "function" || typeof e.slice != "function" || e.length > 0 && typeof e[0] != "number");
}
function Gf(e, t, i) {
  var c, s;
  if (eu(e) || eu(t) || e.prototype !== t.prototype)
    return !1;
  if (Ql(e))
    return Ql(t) ? (e = Zl.call(e), t = Zl.call(t), Kl(e, t, i)) : !1;
  if (nu(e)) {
    if (!nu(t) || e.length !== t.length)
      return !1;
    for (c = 0; c < e.length; c++)
      if (e[c] !== t[c])
        return !1;
    return !0;
  }
  try {
    var m = Jl(e), h = Jl(t);
  } catch {
    return !1;
  }
  if (m.length != h.length)
    return !1;
  for (m.sort(), h.sort(), c = m.length - 1; c >= 0; c--)
    if (m[c] != h[c])
      return !1;
  for (c = m.length - 1; c >= 0; c--)
    if (s = m[c], !Kl(e[s], t[s], i))
      return !1;
  return typeof e == typeof t;
}
var qf = ii, Ku = pl, Vf = qe;
function qe(e, t, i, c) {
  if (!e)
    throw qf(t, i, c);
}
qe.fail = function(e, t, i) {
  qe(!1, e, t, i);
};
qe.equal = function(e, t, i, c, s) {
  qe(e == t, i, c, s);
};
qe.notEqual = function(e, t, i, c, s) {
  qe(e != t, i, c, s);
};
qe.ok = function(e, t, i, c) {
  qe(e, t, i, c);
};
qe.strictEqual = function(e, t, i, c, s) {
  qe(e === t, i, c, s);
};
qe.notStrictEqual = function(e, t, i, c, s) {
  qe(e !== t, i, c, s);
};
qe.deepEqual = function(e, t, i, c, s) {
  qe(Ku(e, t), i, c, s);
};
qe.notDeepEqual = function(e, t, i, c, s) {
  qe(!Ku(e, t), i, c, s);
};
var Xf = mr;
function mr(e, t) {
  if (!(this instanceof mr))
    return new mr(e, t);
  this.proto = e, this.target = t, this.methods = [], this.getters = [], this.setters = [], this.fluents = [];
}
mr.prototype.method = function(e) {
  var t = this.proto, i = this.target;
  return this.methods.push(e), t[e] = function() {
    return this[i][e].apply(this[i], arguments);
  }, this;
};
mr.prototype.access = function(e) {
  return this.getter(e).setter(e);
};
mr.prototype.getter = function(e) {
  var t = this.proto, i = this.target;
  return this.getters.push(e), t.__defineGetter__(e, function() {
    return this[i][e];
  }), this;
};
mr.prototype.setter = function(e) {
  var t = this.proto, i = this.target;
  return this.setters.push(e), t.__defineSetter__(e, function(c) {
    return this[i][e] = c;
  }), this;
};
mr.prototype.fluent = function(e) {
  var t = this.proto, i = this.target;
  return this.fluents.push(e), t[e] = function(c) {
    return typeof c < "u" ? (this[i][e] = c, this) : this[i][e];
  }, this;
};
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var Cl = Zf;
function Zf(e) {
  if (!e)
    throw new TypeError("argument namespace is required");
  function t(i) {
  }
  return t._file = void 0, t._ignored = !0, t._namespace = e, t._traced = !1, t._warned = /* @__PURE__ */ Object.create(null), t.function = Jf, t.property = Qf, t;
}
function Jf(e, t) {
  if (typeof e != "function")
    throw new TypeError("argument fn must be a function");
  return e;
}
function Qf(e, t, i) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new TypeError("argument obj must be object");
  var c = Object.getOwnPropertyDescriptor(e, t);
  if (!c)
    throw new TypeError("must call property on owner object");
  if (!c.configurable)
    throw new TypeError("property must be configurable");
}
var so = ae;
function Kf(e, t) {
  if (e.length !== t.length)
    return !1;
  if (so.timingSafeEqual)
    return so.timingSafeEqual(e, t);
  for (var i = 0; i < e.length; i++)
    if (e[i] !== t[i])
      return !1;
  return !0;
}
function em(e, t) {
  var i = String(e), c = String(t), s = so.pseudoRandomBytes(32), m = so.createHmac("sha256", s).update(i).digest(), h = so.createHmac("sha256", s).update(c).digest();
  return Kf(m, h) && e === t;
}
var nm = em;
/*!
 * keygrip
 * Copyright(c) 2011-2014 Jed Schmidt
 * MIT Licensed
 */
var tm = nm, rm = ae;
function ri(e, t, i) {
  if (t || (t = "sha1"), i || (i = "base64"), !(this instanceof ri))
    return new ri(e, t, i);
  if (!e || !(0 in e))
    throw new Error("Keys must be provided.");
  function c(s, m) {
    return rm.createHmac(t, m).update(s).digest(i).replace(/\/|\+|=/g, function(h) {
      return { "/": "_", "+": "-", "=": "" }[h];
    });
  }
  this.sign = function(s) {
    return c(s, e[0]);
  }, this.verify = function(s, m) {
    return this.index(s, m) > -1;
  }, this.index = function(s, m) {
    for (var h = 0, R = e.length; h < R; h++)
      if (tm(m, c(s, e[h])))
        return h;
    return -1;
  };
}
ri.sign = ri.verify = ri.index = function() {
  throw new Error("Usage: require('keygrip')(<array-of-keys>)");
};
var am = ri;
/*!
 * cookies
 * Copyright(c) 2014 Jed Schmidt, http://jed.is/
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */
var im = Cl("cookies"), tu = am, om = ae, el = {}, is = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/, sm = /^(?:lax|none|strict)$/i;
function Ht(e, t, i) {
  if (!(this instanceof Ht))
    return new Ht(e, t, i);
  this.secure = void 0, this.request = e, this.response = t, i && (Array.isArray(i) ? this.keys = new tu(i) : i.constructor && i.constructor.name === "Keygrip" ? this.keys = i : (this.keys = Array.isArray(i.keys) ? new tu(i.keys) : i.keys, this.secure = i.secure));
}
Ht.prototype.get = function(e, t) {
  var i = e + ".sig", c, s, m, h, R, w, C = t && t.signed !== void 0 ? t.signed : !!this.keys;
  if (c = this.request.headers.cookie, !!c && (s = c.match(cm(e)), !!s)) {
    if (m = s[1], !t || !C)
      return m;
    if (h = this.get(i), !!h) {
      if (R = e + "=" + m, !this.keys)
        throw new Error(".keys required for signed cookies");
      if (w = this.keys.index(R, h), w < 0)
        this.set(i, null, { path: "/", signed: !1 });
      else
        return w && this.set(i, this.keys.sign(R), { signed: !1 }), m;
    }
  }
};
Ht.prototype.set = function(e, t, i) {
  var c = this.response, s = this.request, m = c.getHeader("Set-Cookie") || [], h = this.secure !== void 0 ? !!this.secure : s.protocol === "https" || s.connection.encrypted, R = new Pn(e, t, i), w = i && i.signed !== void 0 ? i.signed : !!this.keys;
  if (typeof m == "string" && (m = [m]), !h && i && i.secure)
    throw new Error("Cannot send secure cookie over unencrypted connection");
  if (R.secure = i && i.secure !== void 0 ? i.secure : h, i && "secureProxy" in i && (R.secure = i.secureProxy), ru(m, R), i && w) {
    if (!this.keys)
      throw new Error(".keys required for signed cookies");
    R.value = this.keys.sign(R.toString()), R.name += ".sig", ru(m, R);
  }
  var C = c.set ? om.OutgoingMessage.prototype.setHeader : c.setHeader;
  return C.call(c, "Set-Cookie", m), this;
};
function Pn(e, t, i) {
  if (!is.test(e))
    throw new TypeError("argument name is invalid");
  if (t && !is.test(t))
    throw new TypeError("argument value is invalid");
  this.name = e, this.value = t || "";
  for (var e in i)
    this[e] = i[e];
  if (this.value || (this.expires = new Date(0), this.maxAge = null), this.path && !is.test(this.path))
    throw new TypeError("option path is invalid");
  if (this.domain && !is.test(this.domain))
    throw new TypeError("option domain is invalid");
  if (this.sameSite && this.sameSite !== !0 && !sm.test(this.sameSite))
    throw new TypeError("option sameSite is invalid");
}
Pn.prototype.path = "/";
Pn.prototype.expires = void 0;
Pn.prototype.domain = void 0;
Pn.prototype.httpOnly = !0;
Pn.prototype.sameSite = !1;
Pn.prototype.secure = !1;
Pn.prototype.overwrite = !1;
Pn.prototype.toString = function() {
  return this.name + "=" + this.value;
};
Pn.prototype.toHeader = function() {
  var e = this.toString();
  return this.maxAge && (this.expires = new Date(Date.now() + this.maxAge)), this.path && (e += "; path=" + this.path), this.expires && (e += "; expires=" + this.expires.toUTCString()), this.domain && (e += "; domain=" + this.domain), this.sameSite && (e += "; samesite=" + (this.sameSite === !0 ? "strict" : this.sameSite.toLowerCase())), this.secure && (e += "; secure"), this.httpOnly && (e += "; httponly"), e;
};
Object.defineProperty(Pn.prototype, "maxage", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.maxAge;
  },
  set: function(e) {
    return this.maxAge = e;
  }
});
im.property(Pn.prototype, "maxage", '"maxage"; use "maxAge" instead');
function cm(e) {
  return el[e] ? el[e] : el[e] = new RegExp(
    "(?:^|;) *" + e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") + "=([^;]*)"
  );
}
function ru(e, t) {
  if (t.overwrite)
    for (var i = e.length - 1; i >= 0; i--)
      e[i].indexOf(t.name + "=") === 0 && e.splice(i, 1);
  e.push(t.toHeader());
}
Ht.connect = Ht.express = function(e) {
  return function(t, i, c) {
    t.cookies = i.cookies = new Ht(t, i, {
      keys: e
    }), c();
  };
};
Ht.Cookie = Pn;
var lm = Ht;
(function(e) {
  const t = ae, i = ii, c = Vf, s = Xf, m = mo, h = lm, R = Symbol("context#cookies"), w = e.exports = {
    /**
     * util.inspect() implementation, which
     * just returns the JSON output.
     *
     * @return {Object}
     * @api public
     */
    inspect() {
      return this === w ? this : this.toJSON();
    },
    /**
     * Return JSON representation.
     *
     * Here we explicitly invoke .toJSON() on each
     * object, as iteration will otherwise fail due
     * to the getters and cause utilities such as
     * clone() to fail.
     *
     * @return {Object}
     * @api public
     */
    toJSON() {
      return {
        request: this.request.toJSON(),
        response: this.response.toJSON(),
        app: this.app.toJSON(),
        originalUrl: this.originalUrl,
        req: "<original node req>",
        res: "<original node res>",
        socket: "<original node socket>"
      };
    },
    /**
     * Similar to .throw(), adds assertion.
     *
     *    this.assert(this.user, 401, 'Please login!');
     *
     * See: https://github.com/jshttp/http-assert
     *
     * @param {Mixed} test
     * @param {Number} status
     * @param {String} message
     * @api public
     */
    assert: c,
    /**
     * Throw an error with `status` (default 500) and
     * `msg`. Note that these are user-level
     * errors, and the message may be exposed to the client.
     *
     *    this.throw(403)
     *    this.throw(400, 'name required')
     *    this.throw('something exploded')
     *    this.throw(new Error('invalid'))
     *    this.throw(400, new Error('invalid'))
     *
     * See: https://github.com/jshttp/http-errors
     *
     * Note: `status` should only be passed as the first parameter.
     *
     * @param {String|Number|Error} err, msg or status
     * @param {String|Number|Error} [err, msg or status]
     * @param {Object} [props]
     * @api public
     */
    throw(...C) {
      throw i(...C);
    },
    /**
     * Default error handling.
     *
     * @param {Error} err
     * @api private
     */
    onerror(C) {
      if (C == null)
        return;
      Object.prototype.toString.call(C) === "[object Error]" || C instanceof Error || (C = new Error(t.format("non-error thrown: %j", C)));
      let x = !1;
      if ((this.headerSent || !this.writable) && (x = C.headerSent = !0), this.app.emit("error", C, this), x)
        return;
      const { res: O } = this;
      typeof O.getHeaderNames == "function" ? O.getHeaderNames().forEach((_) => O.removeHeader(_)) : O._headers = {}, this.set(C.headers), this.type = "text";
      let j = C.status || C.statusCode;
      C.code === "ENOENT" && (j = 404), (typeof j != "number" || !m[j]) && (j = 500);
      const I = m[j], k = C.expose ? C.message : I;
      this.status = C.status = j, this.length = Buffer.byteLength(k), O.end(k);
    },
    get cookies() {
      return this[R] || (this[R] = new h(this.req, this.res, {
        keys: this.app.keys,
        secure: this.request.secure
      })), this[R];
    },
    set cookies(C) {
      this[R] = C;
    }
  };
  t.inspect.custom && (e.exports[t.inspect.custom] = e.exports.inspect), s(w, "response").method("attachment").method("redirect").method("remove").method("vary").method("has").method("set").method("append").method("flushHeaders").access("status").access("message").access("body").access("length").access("type").access("lastModified").access("etag").getter("headerSent").getter("writable"), s(w, "request").method("acceptsLanguages").method("acceptsEncodings").method("acceptsCharsets").method("accepts").method("get").method("is").access("querystring").access("idempotent").access("socket").access("search").access("method").access("query").access("path").access("url").access("accept").getter("origin").getter("href").getter("subdomains").getter("protocol").getter("host").getter("hostname").getter("URL").getter("header").getter("headers").getter("secure").getter("stale").getter("fresh").getter("ips").getter("ip");
})(Df);
var dl = {}, um = {
  get exports() {
    return dl;
  },
  set exports(e) {
    dl = e;
  }
}, ms = {}, pm = {
  get exports() {
    return ms;
  },
  set exports(e) {
    ms = e;
  }
}, vs = {}, dm = {
  get exports() {
    return vs;
  },
  set exports(e) {
    vs = e;
  }
};
dm.exports = ep;
vs.preferredCharsets = ep;
var fm = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
function mm(e) {
  for (var t = e.split(","), i = 0, c = 0; i < t.length; i++) {
    var s = vm(t[i].trim(), i);
    s && (t[c++] = s);
  }
  return t.length = c, t;
}
function vm(e, t) {
  var i = fm.exec(e);
  if (!i)
    return null;
  var c = i[1], s = 1;
  if (i[2])
    for (var m = i[2].split(";"), h = 0; h < m.length; h++) {
      var R = m[h].trim().split("=");
      if (R[0] === "q") {
        s = parseFloat(R[1]);
        break;
      }
    }
  return {
    charset: c,
    q: s,
    i: t
  };
}
function hm(e, t, i) {
  for (var c = { o: -1, q: 0, s: 0 }, s = 0; s < t.length; s++) {
    var m = gm(e, t[s], i);
    m && (c.s - m.s || c.q - m.q || c.o - m.o) < 0 && (c = m);
  }
  return c;
}
function gm(e, t, i) {
  var c = 0;
  if (t.charset.toLowerCase() === e.toLowerCase())
    c |= 1;
  else if (t.charset !== "*")
    return null;
  return {
    i,
    o: t.i,
    q: t.q,
    s: c
  };
}
function ep(e, t) {
  var i = mm(e === void 0 ? "*" : e || "");
  if (!t)
    return i.filter(iu).sort(au).map(xm);
  var c = t.map(function(m, h) {
    return hm(m, i, h);
  });
  return c.filter(iu).sort(au).map(function(m) {
    return t[c.indexOf(m)];
  });
}
function au(e, t) {
  return t.q - e.q || t.s - e.s || e.o - t.o || e.i - t.i || 0;
}
function xm(e) {
  return e.charset;
}
function iu(e) {
  return e.q > 0;
}
var hs = {}, bm = {
  get exports() {
    return hs;
  },
  set exports(e) {
    hs = e;
  }
};
bm.exports = tp;
hs.preferredEncodings = tp;
var ym = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
function wm(e) {
  for (var t = e.split(","), i = !1, c = 1, s = 0, m = 0; s < t.length; s++) {
    var h = Sm(t[s].trim(), s);
    h && (t[m++] = h, i = i || np("identity", h), c = Math.min(c, h.q || 1));
  }
  return i || (t[m++] = {
    encoding: "identity",
    q: c,
    i: s
  }), t.length = m, t;
}
function Sm(e, t) {
  var i = ym.exec(e);
  if (!i)
    return null;
  var c = i[1], s = 1;
  if (i[2])
    for (var m = i[2].split(";"), h = 0; h < m.length; h++) {
      var R = m[h].trim().split("=");
      if (R[0] === "q") {
        s = parseFloat(R[1]);
        break;
      }
    }
  return {
    encoding: c,
    q: s,
    i: t
  };
}
function Cm(e, t, i) {
  for (var c = { o: -1, q: 0, s: 0 }, s = 0; s < t.length; s++) {
    var m = np(e, t[s], i);
    m && (c.s - m.s || c.q - m.q || c.o - m.o) < 0 && (c = m);
  }
  return c;
}
function np(e, t, i) {
  var c = 0;
  if (t.encoding.toLowerCase() === e.toLowerCase())
    c |= 1;
  else if (t.encoding !== "*")
    return null;
  return {
    i,
    o: t.i,
    q: t.q,
    s: c
  };
}
function tp(e, t) {
  var i = wm(e || "");
  if (!t)
    return i.filter(su).sort(ou).map(Em);
  var c = t.map(function(m, h) {
    return Cm(m, i, h);
  });
  return c.filter(su).sort(ou).map(function(m) {
    return t[c.indexOf(m)];
  });
}
function ou(e, t) {
  return t.q - e.q || t.s - e.s || e.o - t.o || e.i - t.i || 0;
}
function Em(e) {
  return e.encoding;
}
function su(e) {
  return e.q > 0;
}
var gs = {}, km = {
  get exports() {
    return gs;
  },
  set exports(e) {
    gs = e;
  }
};
km.exports = ap;
gs.preferredLanguages = ap;
var Tm = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
function Rm(e) {
  for (var t = e.split(","), i = 0, c = 0; i < t.length; i++) {
    var s = rp(t[i].trim(), i);
    s && (t[c++] = s);
  }
  return t.length = c, t;
}
function rp(e, t) {
  var i = Tm.exec(e);
  if (!i)
    return null;
  var c = i[1], s = i[2], m = c;
  s && (m += "-" + s);
  var h = 1;
  if (i[3])
    for (var R = i[3].split(";"), w = 0; w < R.length; w++) {
      var C = R[w].split("=");
      C[0] === "q" && (h = parseFloat(C[1]));
    }
  return {
    prefix: c,
    suffix: s,
    q: h,
    i: t,
    full: m
  };
}
function Am(e, t, i) {
  for (var c = { o: -1, q: 0, s: 0 }, s = 0; s < t.length; s++) {
    var m = _m(e, t[s], i);
    m && (c.s - m.s || c.q - m.q || c.o - m.o) < 0 && (c = m);
  }
  return c;
}
function _m(e, t, i) {
  var c = rp(e);
  if (!c)
    return null;
  var s = 0;
  if (t.full.toLowerCase() === c.full.toLowerCase())
    s |= 4;
  else if (t.prefix.toLowerCase() === c.full.toLowerCase())
    s |= 2;
  else if (t.full.toLowerCase() === c.prefix.toLowerCase())
    s |= 1;
  else if (t.full !== "*")
    return null;
  return {
    i,
    o: t.i,
    q: t.q,
    s
  };
}
function ap(e, t) {
  var i = Rm(e === void 0 ? "*" : e || "");
  if (!t)
    return i.filter(lu).sort(cu).map(Pm);
  var c = t.map(function(m, h) {
    return Am(m, i, h);
  });
  return c.filter(lu).sort(cu).map(function(m) {
    return t[c.indexOf(m)];
  });
}
function cu(e, t) {
  return t.q - e.q || t.s - e.s || e.o - t.o || e.i - t.i || 0;
}
function Pm(e) {
  return e.full;
}
function lu(e) {
  return e.q > 0;
}
var xs = {}, Om = {
  get exports() {
    return xs;
  },
  set exports(e) {
    xs = e;
  }
};
Om.exports = op;
xs.preferredMediaTypes = op;
var Fm = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
function jm(e) {
  for (var t = Um(e), i = 0, c = 0; i < t.length; i++) {
    var s = ip(t[i].trim(), i);
    s && (t[c++] = s);
  }
  return t.length = c, t;
}
function ip(e, t) {
  var i = Fm.exec(e);
  if (!i)
    return null;
  var c = /* @__PURE__ */ Object.create(null), s = 1, m = i[2], h = i[1];
  if (i[3])
    for (var R = zm(i[3]).map(Lm), w = 0; w < R.length; w++) {
      var C = R[w], b = C[0].toLowerCase(), x = C[1], O = x && x[0] === '"' && x[x.length - 1] === '"' ? x.substr(1, x.length - 2) : x;
      if (b === "q") {
        s = parseFloat(O);
        break;
      }
      c[b] = O;
    }
  return {
    type: h,
    subtype: m,
    params: c,
    q: s,
    i: t
  };
}
function Im(e, t, i) {
  for (var c = { o: -1, q: 0, s: 0 }, s = 0; s < t.length; s++) {
    var m = Dm(e, t[s], i);
    m && (c.s - m.s || c.q - m.q || c.o - m.o) < 0 && (c = m);
  }
  return c;
}
function Dm(e, t, i) {
  var c = ip(e), s = 0;
  if (!c)
    return null;
  if (t.type.toLowerCase() == c.type.toLowerCase())
    s |= 4;
  else if (t.type != "*")
    return null;
  if (t.subtype.toLowerCase() == c.subtype.toLowerCase())
    s |= 2;
  else if (t.subtype != "*")
    return null;
  var m = Object.keys(t.params);
  if (m.length > 0)
    if (m.every(function(h) {
      return t.params[h] == "*" || (t.params[h] || "").toLowerCase() == (c.params[h] || "").toLowerCase();
    }))
      s |= 1;
    else
      return null;
  return {
    i,
    o: t.i,
    q: t.q,
    s
  };
}
function op(e, t) {
  var i = jm(e === void 0 ? "*/*" : e || "");
  if (!t)
    return i.filter(pu).sort(uu).map(Mm);
  var c = t.map(function(m, h) {
    return Im(m, i, h);
  });
  return c.filter(pu).sort(uu).map(function(m) {
    return t[c.indexOf(m)];
  });
}
function uu(e, t) {
  return t.q - e.q || t.s - e.s || e.o - t.o || e.i - t.i || 0;
}
function Mm(e) {
  return e.type + "/" + e.subtype;
}
function pu(e) {
  return e.q > 0;
}
function sp(e) {
  for (var t = 0, i = 0; (i = e.indexOf('"', i)) !== -1; )
    t++, i++;
  return t;
}
function Lm(e) {
  var t = e.indexOf("="), i, c;
  return t === -1 ? i = e : (i = e.substr(0, t), c = e.substr(t + 1)), [i, c];
}
function Um(e) {
  for (var t = e.split(","), i = 1, c = 0; i < t.length; i++)
    sp(t[c]) % 2 == 0 ? t[++c] = t[i] : t[c] += "," + t[i];
  return t.length = c + 1, t;
}
function zm(e) {
  for (var t = e.split(";"), i = 1, c = 0; i < t.length; i++)
    sp(t[c]) % 2 == 0 ? t[++c] = t[i] : t[c] += ";" + t[i];
  t.length = c + 1;
  for (var i = 0; i < t.length; i++)
    t[i] = t[i].trim();
  return t;
}
/*!
 * negotiator
 * Copyright(c) 2012 Federico Romero
 * Copyright(c) 2012-2014 Isaac Z. Schlueter
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var $m = vs, Hm = hs, Bm = gs, Nm = xs;
pm.exports = we;
ms.Negotiator = we;
function we(e) {
  if (!(this instanceof we))
    return new we(e);
  this.request = e;
}
we.prototype.charset = function(t) {
  var i = this.charsets(t);
  return i && i[0];
};
we.prototype.charsets = function(t) {
  return $m(this.request.headers["accept-charset"], t);
};
we.prototype.encoding = function(t) {
  var i = this.encodings(t);
  return i && i[0];
};
we.prototype.encodings = function(t) {
  return Hm(this.request.headers["accept-encoding"], t);
};
we.prototype.language = function(t) {
  var i = this.languages(t);
  return i && i[0];
};
we.prototype.languages = function(t) {
  return Bm(this.request.headers["accept-language"], t);
};
we.prototype.mediaType = function(t) {
  var i = this.mediaTypes(t);
  return i && i[0];
};
we.prototype.mediaTypes = function(t) {
  return Nm(this.request.headers.accept, t);
};
we.prototype.preferredCharset = we.prototype.charset;
we.prototype.preferredCharsets = we.prototype.charsets;
we.prototype.preferredEncoding = we.prototype.encoding;
we.prototype.preferredEncodings = we.prototype.encodings;
we.prototype.preferredLanguage = we.prototype.language;
we.prototype.preferredLanguages = we.prototype.languages;
we.prototype.preferredMediaType = we.prototype.mediaType;
we.prototype.preferredMediaTypes = we.prototype.mediaTypes;
/*!
 * accepts
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var Wm = ms, Ym = Ts, Gm = _n;
function _n(e) {
  if (!(this instanceof _n))
    return new _n(e);
  this.headers = e.headers, this.negotiator = new Wm(e);
}
_n.prototype.type = _n.prototype.types = function(e) {
  var t = e;
  if (t && !Array.isArray(t)) {
    t = new Array(arguments.length);
    for (var i = 0; i < t.length; i++)
      t[i] = arguments[i];
  }
  if (!t || t.length === 0)
    return this.negotiator.mediaTypes();
  if (!this.headers.accept)
    return t[0];
  var c = t.map(qm), s = this.negotiator.mediaTypes(c.filter(Vm)), m = s[0];
  return m ? t[c.indexOf(m)] : !1;
};
_n.prototype.encoding = _n.prototype.encodings = function(e) {
  var t = e;
  if (t && !Array.isArray(t)) {
    t = new Array(arguments.length);
    for (var i = 0; i < t.length; i++)
      t[i] = arguments[i];
  }
  return !t || t.length === 0 ? this.negotiator.encodings() : this.negotiator.encodings(t)[0] || !1;
};
_n.prototype.charset = _n.prototype.charsets = function(e) {
  var t = e;
  if (t && !Array.isArray(t)) {
    t = new Array(arguments.length);
    for (var i = 0; i < t.length; i++)
      t[i] = arguments[i];
  }
  return !t || t.length === 0 ? this.negotiator.charsets() : this.negotiator.charsets(t)[0] || !1;
};
_n.prototype.lang = _n.prototype.langs = _n.prototype.language = _n.prototype.languages = function(e) {
  var t = e;
  if (t && !Array.isArray(t)) {
    t = new Array(arguments.length);
    for (var i = 0; i < t.length; i++)
      t[i] = arguments[i];
  }
  return !t || t.length === 0 ? this.negotiator.languages() : this.negotiator.languages(t)[0] || !1;
};
function qm(e) {
  return e.indexOf("/") === -1 ? Ym.lookup(e) : e;
}
function Vm(e) {
  return typeof e == "string";
}
var El = {};
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
var du = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g, Xm = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/, cp = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/, Zm = /\\([\u000b\u0020-\u00ff])/g, Jm = /([\\"])/g, lp = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;
El.format = Qm;
El.parse = Km;
function Qm(e) {
  if (!e || typeof e != "object")
    throw new TypeError("argument obj is required");
  var t = e.parameters, i = e.type;
  if (!i || !lp.test(i))
    throw new TypeError("invalid type");
  var c = i;
  if (t && typeof t == "object")
    for (var s, m = Object.keys(t).sort(), h = 0; h < m.length; h++) {
      if (s = m[h], !cp.test(s))
        throw new TypeError("invalid parameter name");
      c += "; " + s + "=" + nv(t[s]);
    }
  return c;
}
function Km(e) {
  if (!e)
    throw new TypeError("argument string is required");
  var t = typeof e == "object" ? ev(e) : e;
  if (typeof t != "string")
    throw new TypeError("argument string is required to be a string");
  var i = t.indexOf(";"), c = i !== -1 ? t.substr(0, i).trim() : t.trim();
  if (!lp.test(c))
    throw new TypeError("invalid media type");
  var s = new tv(c.toLowerCase());
  if (i !== -1) {
    var m, h, R;
    for (du.lastIndex = i; h = du.exec(t); ) {
      if (h.index !== i)
        throw new TypeError("invalid parameter format");
      i += h[0].length, m = h[1].toLowerCase(), R = h[2], R[0] === '"' && (R = R.substr(1, R.length - 2).replace(Zm, "$1")), s.parameters[m] = R;
    }
    if (i !== t.length)
      throw new TypeError("invalid parameter format");
  }
  return s;
}
function ev(e) {
  var t;
  if (typeof e.getHeader == "function" ? t = e.getHeader("content-type") : typeof e.headers == "object" && (t = e.headers && e.headers["content-type"]), typeof t != "string")
    throw new TypeError("content-type header is missing from object");
  return t;
}
function nv(e) {
  var t = String(e);
  if (cp.test(t))
    return t;
  if (t.length > 0 && !Xm.test(t))
    throw new TypeError("invalid parameter value");
  return '"' + t.replace(Jm, "\\$1") + '"';
}
function tv(e) {
  this.parameters = /* @__PURE__ */ Object.create(null), this.type = e;
}
var bs = {}, rv = {
  get exports() {
    return bs;
  },
  set exports(e) {
    bs = e;
  }
};
/*!
 * parseurl
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
var up = ae, fu = up.parse, ys = up.Url;
rv.exports = pp;
bs.original = av;
function pp(e) {
  var t = e.url;
  if (t !== void 0) {
    var i = e._parsedUrl;
    return fp(t, i) ? i : (i = dp(t), i._raw = t, e._parsedUrl = i);
  }
}
function av(e) {
  var t = e.originalUrl;
  if (typeof t != "string")
    return pp(e);
  var i = e._parsedOriginalUrl;
  return fp(t, i) ? i : (i = dp(t), i._raw = t, e._parsedOriginalUrl = i);
}
function dp(e) {
  if (typeof e != "string" || e.charCodeAt(0) !== 47)
    return fu(e);
  for (var t = e, i = null, c = null, s = 1; s < e.length; s++)
    switch (e.charCodeAt(s)) {
      case 63:
        c === null && (t = e.substring(0, s), i = e.substring(s + 1), c = e.substring(s));
        break;
      case 9:
      case 10:
      case 12:
      case 13:
      case 32:
      case 35:
      case 160:
      case 65279:
        return fu(e);
    }
  var m = ys !== void 0 ? new ys() : {};
  return m.path = e, m.href = e, m.pathname = t, c !== null && (m.query = i, m.search = c), m;
}
function fp(e, t) {
  return typeof t == "object" && t !== null && (ys === void 0 || t instanceof ys) && t._raw === e;
}
/*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */
var iv = /(?:^|,)\s*?no-cache\s*?(?:,|$)/, ov = sv;
function sv(e, t) {
  var i = e["if-modified-since"], c = e["if-none-match"];
  if (!i && !c)
    return !1;
  var s = e["cache-control"];
  if (s && iv.test(s))
    return !1;
  if (c && c !== "*") {
    var m = t.etag;
    if (!m)
      return !1;
    for (var h = !0, R = cv(c), w = 0; w < R.length; w++) {
      var C = R[w];
      if (C === m || C === "W/" + m || "W/" + C === m) {
        h = !1;
        break;
      }
    }
    if (h)
      return !1;
  }
  if (i) {
    var b = t["last-modified"], x = !b || !(mu(b) <= mu(i));
    if (x)
      return !1;
  }
  return !0;
}
function mu(e) {
  var t = e && Date.parse(e);
  return typeof t == "number" ? t : NaN;
}
function cv(e) {
  for (var t = 0, i = [], c = 0, s = 0, m = e.length; s < m; s++)
    switch (e.charCodeAt(s)) {
      case 32:
        c === t && (c = t = s + 1);
        break;
      case 44:
        i.push(e.substring(c, t)), c = t = s + 1;
        break;
      default:
        t = s + 1;
        break;
    }
  return i.push(e.substring(c, t)), i;
}
(function(e) {
  const t = ae.URL, i = ae, c = Gm, s = El, m = ae.format, h = bs, R = ae, w = fr, C = ov, b = wl, x = ae, O = Symbol("context#ip");
  e.exports = {
    /**
     * Return request header.
     *
     * @return {Object}
     * @api public
     */
    get header() {
      return this.req.headers;
    },
    /**
     * Set request header.
     *
     * @api public
     */
    set header(j) {
      this.req.headers = j;
    },
    /**
     * Return request header, alias as request.header
     *
     * @return {Object}
     * @api public
     */
    get headers() {
      return this.req.headers;
    },
    /**
     * Set request header, alias as request.header
     *
     * @api public
     */
    set headers(j) {
      this.req.headers = j;
    },
    /**
     * Get request URL.
     *
     * @return {String}
     * @api public
     */
    get url() {
      return this.req.url;
    },
    /**
     * Set request URL.
     *
     * @api public
     */
    set url(j) {
      this.req.url = j;
    },
    /**
     * Get origin of URL.
     *
     * @return {String}
     * @api public
     */
    get origin() {
      return `${this.protocol}://${this.host}`;
    },
    /**
     * Get full request URL.
     *
     * @return {String}
     * @api public
     */
    get href() {
      return /^https?:\/\//i.test(this.originalUrl) ? this.originalUrl : this.origin + this.originalUrl;
    },
    /**
     * Get request method.
     *
     * @return {String}
     * @api public
     */
    get method() {
      return this.req.method;
    },
    /**
     * Set request method.
     *
     * @param {String} val
     * @api public
     */
    set method(j) {
      this.req.method = j;
    },
    /**
     * Get request pathname.
     *
     * @return {String}
     * @api public
     */
    get path() {
      return h(this.req).pathname;
    },
    /**
     * Set pathname, retaining the query string when present.
     *
     * @param {String} path
     * @api public
     */
    set path(j) {
      const I = h(this.req);
      I.pathname !== j && (I.pathname = j, I.path = null, this.url = m(I));
    },
    /**
     * Get parsed query string.
     *
     * @return {Object}
     * @api public
     */
    get query() {
      const j = this.querystring, I = this._querycache = this._querycache || {};
      return I[j] || (I[j] = R.parse(j));
    },
    /**
     * Set query string as an object.
     *
     * @param {Object} obj
     * @api public
     */
    set query(j) {
      this.querystring = R.stringify(j);
    },
    /**
     * Get query string.
     *
     * @return {String}
     * @api public
     */
    get querystring() {
      return this.req && h(this.req).query || "";
    },
    /**
     * Set query string.
     *
     * @param {String} str
     * @api public
     */
    set querystring(j) {
      const I = h(this.req);
      I.search !== `?${j}` && (I.search = j, I.path = null, this.url = m(I));
    },
    /**
     * Get the search string. Same as the query string
     * except it includes the leading ?.
     *
     * @return {String}
     * @api public
     */
    get search() {
      return this.querystring ? `?${this.querystring}` : "";
    },
    /**
     * Set the search string. Same as
     * request.querystring= but included for ubiquity.
     *
     * @param {String} str
     * @api public
     */
    set search(j) {
      this.querystring = j;
    },
    /**
     * Parse the "Host" header field host
     * and support X-Forwarded-Host when a
     * proxy is enabled.
     *
     * @return {String} hostname:port
     * @api public
     */
    get host() {
      let I = this.app.proxy && this.get("X-Forwarded-Host");
      return I || (this.req.httpVersionMajor >= 2 && (I = this.get(":authority")), I || (I = this.get("Host"))), I ? I.split(/\s*,\s*/, 1)[0] : "";
    },
    /**
     * Parse the "Host" header field hostname
     * and support X-Forwarded-Host when a
     * proxy is enabled.
     *
     * @return {String} hostname
     * @api public
     */
    get hostname() {
      const j = this.host;
      return j ? j[0] === "[" ? this.URL.hostname || "" : j.split(":", 1)[0] : "";
    },
    /**
     * Get WHATWG parsed URL.
     * Lazily memoized.
     *
     * @return {URL|Object}
     * @api public
     */
    get URL() {
      if (!this.memoizedURL) {
        const j = this.originalUrl || "";
        try {
          this.memoizedURL = new t(`${this.origin}${j}`);
        } catch {
          this.memoizedURL = /* @__PURE__ */ Object.create(null);
        }
      }
      return this.memoizedURL;
    },
    /**
     * Check if the request is fresh, aka
     * Last-Modified and/or the ETag
     * still match.
     *
     * @return {Boolean}
     * @api public
     */
    get fresh() {
      const j = this.method, I = this.ctx.status;
      return j !== "GET" && j !== "HEAD" ? !1 : I >= 200 && I < 300 || I === 304 ? C(this.header, this.response.header) : !1;
    },
    /**
     * Check if the request is stale, aka
     * "Last-Modified" and / or the "ETag" for the
     * resource has changed.
     *
     * @return {Boolean}
     * @api public
     */
    get stale() {
      return !this.fresh;
    },
    /**
     * Check if the request is idempotent.
     *
     * @return {Boolean}
     * @api public
     */
    get idempotent() {
      return !!~["GET", "HEAD", "PUT", "DELETE", "OPTIONS", "TRACE"].indexOf(this.method);
    },
    /**
     * Return the request socket.
     *
     * @return {Connection}
     * @api public
     */
    get socket() {
      return this.req.socket;
    },
    /**
     * Get the charset when present or undefined.
     *
     * @return {String}
     * @api public
     */
    get charset() {
      try {
        const { parameters: j } = s.parse(this.req);
        return j.charset || "";
      } catch {
        return "";
      }
    },
    /**
     * Return parsed Content-Length when present.
     *
     * @return {Number}
     * @api public
     */
    get length() {
      const j = this.get("Content-Length");
      if (j !== "")
        return ~~j;
    },
    /**
     * Return the protocol string "http" or "https"
     * when requested with TLS. When the proxy setting
     * is enabled the "X-Forwarded-Proto" header
     * field will be trusted. If you're running behind
     * a reverse proxy that supplies https for you this
     * may be enabled.
     *
     * @return {String}
     * @api public
     */
    get protocol() {
      if (this.socket.encrypted)
        return "https";
      if (!this.app.proxy)
        return "http";
      const j = this.get("X-Forwarded-Proto");
      return j ? j.split(/\s*,\s*/, 1)[0] : "http";
    },
    /**
     * Shorthand for:
     *
     *    this.protocol == 'https'
     *
     * @return {Boolean}
     * @api public
     */
    get secure() {
      return this.protocol === "https";
    },
    /**
     * When `app.proxy` is `true`, parse
     * the "X-Forwarded-For" ip address list.
     *
     * For example if the value was "client, proxy1, proxy2"
     * you would receive the array `["client", "proxy1", "proxy2"]`
     * where "proxy2" is the furthest down-stream.
     *
     * @return {Array}
     * @api public
     */
    get ips() {
      const j = this.app.proxy, I = this.get(this.app.proxyIpHeader);
      let k = j && I ? I.split(/\s*,\s*/) : [];
      return this.app.maxIpsCount > 0 && (k = k.slice(-this.app.maxIpsCount)), k;
    },
    /**
     * Return request's remote address
     * When `app.proxy` is `true`, parse
     * the "X-Forwarded-For" ip address list and return the first one
     *
     * @return {String}
     * @api public
     */
    get ip() {
      return this[O] || (this[O] = this.ips[0] || this.socket.remoteAddress || ""), this[O];
    },
    set ip(j) {
      this[O] = j;
    },
    /**
     * Return subdomains as an array.
     *
     * Subdomains are the dot-separated parts of the host before the main domain
     * of the app. By default, the domain of the app is assumed to be the last two
     * parts of the host. This can be changed by setting `app.subdomainOffset`.
     *
     * For example, if the domain is "tobi.ferrets.example.com":
     * If `app.subdomainOffset` is not set, this.subdomains is
     * `["ferrets", "tobi"]`.
     * If `app.subdomainOffset` is 3, this.subdomains is `["tobi"]`.
     *
     * @return {Array}
     * @api public
     */
    get subdomains() {
      const j = this.app.subdomainOffset, I = this.hostname;
      return i.isIP(I) ? [] : I.split(".").reverse().slice(j);
    },
    /**
     * Get accept object.
     * Lazily memoized.
     *
     * @return {Object}
     * @api private
     */
    get accept() {
      return this._accept || (this._accept = c(this.req));
    },
    /**
     * Set accept object.
     *
     * @param {Object}
     * @api private
     */
    set accept(j) {
      this._accept = j;
    },
    /**
     * Check if the given `type(s)` is acceptable, returning
     * the best match when true, otherwise `false`, in which
     * case you should respond with 406 "Not Acceptable".
     *
     * The `type` value may be a single mime type string
     * such as "application/json", the extension name
     * such as "json" or an array `["json", "html", "text/plain"]`. When a list
     * or array is given the _best_ match, if any is returned.
     *
     * Examples:
     *
     *     // Accept: text/html
     *     this.accepts('html');
     *     // => "html"
     *
     *     // Accept: text/*, application/json
     *     this.accepts('html');
     *     // => "html"
     *     this.accepts('text/html');
     *     // => "text/html"
     *     this.accepts('json', 'text');
     *     // => "json"
     *     this.accepts('application/json');
     *     // => "application/json"
     *
     *     // Accept: text/*, application/json
     *     this.accepts('image/png');
     *     this.accepts('png');
     *     // => false
     *
     *     // Accept: text/*;q=.5, application/json
     *     this.accepts(['html', 'json']);
     *     this.accepts('html', 'json');
     *     // => "json"
     *
     * @param {String|Array} type(s)...
     * @return {String|Array|false}
     * @api public
     */
    accepts(...j) {
      return this.accept.types(...j);
    },
    /**
     * Return accepted encodings or best fit based on `encodings`.
     *
     * Given `Accept-Encoding: gzip, deflate`
     * an array sorted by quality is returned:
     *
     *     ['gzip', 'deflate']
     *
     * @param {String|Array} encoding(s)...
     * @return {String|Array}
     * @api public
     */
    acceptsEncodings(...j) {
      return this.accept.encodings(...j);
    },
    /**
     * Return accepted charsets or best fit based on `charsets`.
     *
     * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
     * an array sorted by quality is returned:
     *
     *     ['utf-8', 'utf-7', 'iso-8859-1']
     *
     * @param {String|Array} charset(s)...
     * @return {String|Array}
     * @api public
     */
    acceptsCharsets(...j) {
      return this.accept.charsets(...j);
    },
    /**
     * Return accepted languages or best fit based on `langs`.
     *
     * Given `Accept-Language: en;q=0.8, es, pt`
     * an array sorted by quality is returned:
     *
     *     ['es', 'pt', 'en']
     *
     * @param {String|Array} lang(s)...
     * @return {Array|String}
     * @api public
     */
    acceptsLanguages(...j) {
      return this.accept.languages(...j);
    },
    /**
     * Check if the incoming request contains the "Content-Type"
     * header field and if it contains any of the given mime `type`s.
     * If there is no request body, `null` is returned.
     * If there is no content type, `false` is returned.
     * Otherwise, it returns the first `type` that matches.
     *
     * Examples:
     *
     *     // With Content-Type: text/html; charset=utf-8
     *     this.is('html'); // => 'html'
     *     this.is('text/html'); // => 'text/html'
     *     this.is('text/*', 'application/json'); // => 'text/html'
     *
     *     // When Content-Type is application/json
     *     this.is('json', 'urlencoded'); // => 'json'
     *     this.is('application/json'); // => 'application/json'
     *     this.is('html', 'application/*'); // => 'application/json'
     *
     *     this.is('html'); // => false
     *
     * @param {String|String[]} [type]
     * @param {String[]} [types]
     * @return {String|false|null}
     * @api public
     */
    is(j, ...I) {
      return w(this.req, j, ...I);
    },
    /**
     * Return the request mime type void of
     * parameters such as "charset".
     *
     * @return {String}
     * @api public
     */
    get type() {
      const j = this.get("Content-Type");
      return j ? j.split(";")[0] : "";
    },
    /**
     * Return request header.
     *
     * The `Referrer` header field is special-cased,
     * both `Referrer` and `Referer` are interchangeable.
     *
     * Examples:
     *
     *     this.get('Content-Type');
     *     // => "text/plain"
     *
     *     this.get('content-type');
     *     // => "text/plain"
     *
     *     this.get('Something');
     *     // => ''
     *
     * @param {String} field
     * @return {String}
     * @api public
     */
    get(j) {
      const I = this.req;
      switch (j = j.toLowerCase()) {
        case "referer":
        case "referrer":
          return I.headers.referrer || I.headers.referer || "";
        default:
          return I.headers[j] || "";
      }
    },
    /**
     * Inspect implementation.
     *
     * @return {Object}
     * @api public
     */
    inspect() {
      if (this.req)
        return this.toJSON();
    },
    /**
     * Return JSON representation.
     *
     * @return {Object}
     * @api public
     */
    toJSON() {
      return b(this, [
        "method",
        "url",
        "header"
      ]);
    }
  }, x.inspect.custom && (e.exports[x.inspect.custom] = e.exports.inspect);
})(um);
var mp = Array.prototype.slice, lv = ai.default = ai.co = ai;
ai.wrap = function(e) {
  return t.__generatorFunction__ = e, t;
  function t() {
    return ai.call(this, e.apply(this, arguments));
  }
};
function ai(e) {
  var t = this, i = mp.call(arguments, 1);
  return new Promise(function(c, s) {
    if (typeof e == "function" && (e = e.apply(t, i)), !e || typeof e.next != "function")
      return c(e);
    m();
    function m(w) {
      var C;
      try {
        C = e.next(w);
      } catch (b) {
        return s(b);
      }
      R(C);
    }
    function h(w) {
      var C;
      try {
        C = e.throw(w);
      } catch (b) {
        return s(b);
      }
      R(C);
    }
    function R(w) {
      if (w.done)
        return c(w.value);
      var C = kl.call(t, w.value);
      return C && Tl(C) ? C.then(m, h) : h(new TypeError('You may only yield a function, promise, generator, array, or object, but the following object was passed: "' + String(w.value) + '"'));
    }
  });
}
function kl(e) {
  return !e || Tl(e) ? e : fv(e) || vp(e) ? ai.call(this, e) : typeof e == "function" ? uv.call(this, e) : Array.isArray(e) ? pv.call(this, e) : mv(e) ? dv.call(this, e) : e;
}
function uv(e) {
  var t = this;
  return new Promise(function(i, c) {
    e.call(t, function(s, m) {
      if (s)
        return c(s);
      arguments.length > 2 && (m = mp.call(arguments, 1)), i(m);
    });
  });
}
function pv(e) {
  return Promise.all(e.map(kl, this));
}
function dv(e) {
  for (var t = new e.constructor(), i = Object.keys(e), c = [], s = 0; s < i.length; s++) {
    var m = i[s], h = kl.call(this, e[m]);
    h && Tl(h) ? R(h, m) : t[m] = e[m];
  }
  return Promise.all(c).then(function() {
    return t;
  });
  function R(w, C) {
    t[C] = void 0, c.push(w.then(function(b) {
      t[C] = b;
    }));
  }
}
function Tl(e) {
  return typeof e.then == "function";
}
function vp(e) {
  return typeof e.next == "function" && typeof e.throw == "function";
}
function fv(e) {
  var t = e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" ? !0 : vp(t.prototype) : !1;
}
function mv(e) {
  return Object == e.constructor;
}
const hp = lv, vv = Sl;
var hv = ws;
function ws(e) {
  if (typeof e != "function")
    throw new TypeError("middleware must be a function");
  if (e.constructor.name !== "GeneratorFunction" && e.constructor.name !== "AsyncGeneratorFunction")
    return e;
  const t = function(i, c) {
    return hp.call(
      i,
      e.call(
        i,
        function* (s) {
          return yield s();
        }(c)
      )
    );
  };
  return t._name = e._name || e.name, t;
}
ws.compose = function(e) {
  return Array.isArray(e) || (e = Array.from(arguments)), vv(e.map(ws));
};
ws.back = function(e) {
  if (typeof e != "function")
    throw new TypeError("middleware must be a function");
  if (e.constructor.name === "GeneratorFunction" || e.constructor.name === "AsyncGeneratorFunction")
    return e;
  const t = function* (i) {
    const c = this;
    let s = !1;
    yield e(c, function() {
      if (s)
        throw new Error("next() called multiple times");
      return s = !0, hp.call(c, i);
    });
  };
  return t._name = e._name || e.name, t;
};
const gv = Kp, vu = lo("koa:application"), xv = uo, bv = ae, yv = cl, wv = Sl, Sv = ul, Cv = dl, Ev = mo, kv = ae, nl = ae, Tv = ae, Rv = ae, Av = wl, _v = hv;
Cl("koa");
const { HttpError: Pv } = ii;
Yp.exports = class gp extends kv {
  /**
   * Initialize a new `Application`.
   *
   * @api public
   */
  /**
    *
    * @param {object} [options] Application options
    * @param {string} [options.env='development'] Environment
    * @param {string[]} [options.keys] Signed cookie keys
    * @param {boolean} [options.proxy] Trust proxy headers
    * @param {number} [options.subdomainOffset] Subdomain offset
    * @param {string} [options.proxyIpHeader] Proxy IP header, defaults to X-Forwarded-For
    * @param {number} [options.maxIpsCount] Max IPs read from proxy IP header, default to 0 (means infinity)
    *
    */
  constructor(t) {
    if (super(), t = t || {}, this.proxy = t.proxy || !1, this.subdomainOffset = t.subdomainOffset || 2, this.proxyIpHeader = t.proxyIpHeader || "X-Forwarded-For", this.maxIpsCount = t.maxIpsCount || 0, this.env = t.env || "development", t.keys && (this.keys = t.keys), this.middleware = [], this.context = Object.create(Sv), this.request = Object.create(Cv), this.response = Object.create(yv), nl.inspect.custom && (this[nl.inspect.custom] = this.inspect), t.asyncLocalStorage) {
      const { AsyncLocalStorage: i } = ae;
      bv(i, "Requires node 12.17.0 or higher to enable asyncLocalStorage"), this.ctxStorage = new i(), this.use(this.createAsyncCtxStorageMiddleware());
    }
  }
  /**
   * Shorthand for:
   *
   *    http.createServer(app.callback()).listen(...)
   *
   * @param {Mixed} ...
   * @return {Server}
   * @api public
   */
  listen(...t) {
    return vu("listen"), Rv.createServer(this.callback()).listen(...t);
  }
  /**
   * Return JSON representation.
   * We only bother showing settings.
   *
   * @return {Object}
   * @api public
   */
  toJSON() {
    return Av(this, [
      "subdomainOffset",
      "proxy",
      "env"
    ]);
  }
  /**
   * Inspect implementation.
   *
   * @return {Object}
   * @api public
   */
  inspect() {
    return this.toJSON();
  }
  /**
   * Use the given middleware `fn`.
   *
   * Old-style middleware will be converted.
   *
   * @param {Function} fn
   * @return {Application} self
   * @api public
   */
  use(t) {
    if (typeof t != "function")
      throw new TypeError("middleware must be a function!");
    return gv(t) && (t = _v(t)), vu("use %s", t._name || t.name || "-"), this.middleware.push(t), this;
  }
  /**
   * Return a request handler callback
   * for node's native http server.
   *
   * @return {Function}
   * @api public
   */
  callback() {
    const t = wv(this.middleware);
    return this.listenerCount("error") || this.on("error", this.onerror), (c, s) => {
      const m = this.createContext(c, s);
      return this.handleRequest(m, t);
    };
  }
  /**
   * return currnect contenxt from async local storage
   */
  get currentContext() {
    if (this.ctxStorage)
      return this.ctxStorage.getStore();
  }
  /**
   * Handle request in callback.
   *
   * @api private
   */
  handleRequest(t, i) {
    const c = t.res;
    c.statusCode = 404;
    const s = (h) => t.onerror(h), m = () => Ov(t);
    return xv(c, s), i(t).then(m).catch(s);
  }
  /**
   * Initialize a new context.
   *
   * @api private
   */
  createContext(t, i) {
    const c = Object.create(this.context), s = c.request = Object.create(this.request), m = c.response = Object.create(this.response);
    return c.app = s.app = m.app = this, c.req = s.req = m.req = t, c.res = s.res = m.res = i, s.ctx = m.ctx = c, s.response = m, m.request = s, c.originalUrl = s.originalUrl = t.url, c.state = {}, c;
  }
  /**
   * Default error handler.
   *
   * @param {Error} err
   * @api private
   */
  onerror(t) {
    if (!(Object.prototype.toString.call(t) === "[object Error]" || t instanceof Error))
      throw new TypeError(nl.format("non-error thrown: %j", t));
    if (t.status === 404 || t.expose || this.silent)
      return;
    const c = t.stack || t.toString();
    console.error(`
${c.replace(/^/gm, "  ")}
`);
  }
  /**
   * Help TS users comply to CommonJS, ESM, bundler mismatch.
   * @see https://github.com/koajs/koa/issues/1513
   */
  static get default() {
    return gp;
  }
  createAsyncCtxStorageMiddleware() {
    const t = this;
    return async function(c, s) {
      await t.ctxStorage.run(c, async () => await s());
    };
  }
};
function Ov(e) {
  if (e.respond === !1 || !e.writable)
    return;
  const t = e.res;
  let i = e.body;
  const c = e.status;
  if (Ev.empty[c])
    return e.body = null, t.end();
  if (e.method === "HEAD") {
    if (!t.headersSent && !e.response.has("Content-Length")) {
      const { length: s } = e.response;
      Number.isInteger(s) && (e.length = s);
    }
    return t.end();
  }
  if (i == null)
    return e.response._explicitNullBody ? (e.response.remove("Content-Type"), e.response.remove("Transfer-Encoding"), t.end()) : (e.req.httpVersionMajor >= 2 ? i = String(c) : i = e.message || String(c), t.headersSent || (e.type = "text", e.length = Buffer.byteLength(i)), t.end(i));
  if (Buffer.isBuffer(i) || typeof i == "string")
    return t.end(i);
  if (i instanceof Tv)
    return i.pipe(t);
  i = JSON.stringify(i), t.headersSent || (e.length = Buffer.byteLength(i)), t.end(i);
}
co.HttpError = Pv;
const Fv = co;
co.HttpError;
var fl = {}, jv = {
  get exports() {
    return fl;
  },
  set exports(e) {
    fl = e;
  }
};
const Iv = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a Teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  509: "Bandwidth Limit Exceeded",
  510: "Not Extended",
  511: "Network Authentication Required"
};
/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */
var Rl = Iv, Dv = dt;
dt.message = Rl;
dt.code = Mv(Rl);
dt.codes = Lv(Rl);
dt.redirect = {
  300: !0,
  301: !0,
  302: !0,
  303: !0,
  305: !0,
  307: !0,
  308: !0
};
dt.empty = {
  204: !0,
  205: !0,
  304: !0
};
dt.retry = {
  502: !0,
  503: !0,
  504: !0
};
function Mv(e) {
  var t = {};
  return Object.keys(e).forEach(function(c) {
    var s = e[c], m = Number(c);
    t[s.toLowerCase()] = m;
  }), t;
}
function Lv(e) {
  return Object.keys(e).map(function(i) {
    return Number(i);
  });
}
function Uv(e) {
  var t = e.toLowerCase();
  if (!Object.prototype.hasOwnProperty.call(dt.code, t))
    throw new Error('invalid status message: "' + e + '"');
  return dt.code[t];
}
function hu(e) {
  if (!Object.prototype.hasOwnProperty.call(dt.message, e))
    throw new Error("invalid status code: " + e);
  return dt.message[e];
}
function dt(e) {
  if (typeof e == "number")
    return hu(e);
  if (typeof e != "string")
    throw new TypeError("code must be a number or string");
  var t = parseInt(e, 10);
  return isNaN(t) ? Uv(e) : hu(t);
}
/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  Cl("http-errors");
  var t = Ju, i = Dv, c = ps, s = Qu;
  e.exports = h, e.exports.HttpError = R(), e.exports.isHttpError = C(e.exports.HttpError), O(e.exports, i.codes, e.exports.HttpError);
  function m(I) {
    return Number(String(I).charAt(0) + "00");
  }
  function h() {
    for (var I, k, _ = 500, A = {}, z = 0; z < arguments.length; z++) {
      var N = arguments[z], B = typeof N;
      if (B === "object" && N instanceof Error)
        I = N, _ = I.status || I.statusCode || _;
      else if (B === "number" && z === 0)
        _ = N;
      else if (B === "string")
        k = N;
      else if (B === "object")
        A = N;
      else
        throw new TypeError("argument #" + (z + 1) + " unsupported type " + B);
    }
    (typeof _ != "number" || !i.message[_] && (_ < 400 || _ >= 600)) && (_ = 500);
    var Y = h[_] || h[m(_)];
    I || (I = Y ? new Y(k) : new Error(k || i.message[_]), Error.captureStackTrace(I, h)), (!Y || !(I instanceof Y) || I.status !== _) && (I.expose = _ < 500, I.status = I.statusCode = _);
    for (var X in A)
      X !== "status" && X !== "statusCode" && (I[X] = A[X]);
    return I;
  }
  function R() {
    function I() {
      throw new TypeError("cannot construct abstract class");
    }
    return c(I, Error), I;
  }
  function w(I, k, _) {
    var A = j(k);
    function z(N) {
      var B = N ?? i.message[_], Y = new Error(B);
      return Error.captureStackTrace(Y, z), t(Y, z.prototype), Object.defineProperty(Y, "message", {
        enumerable: !0,
        configurable: !0,
        value: B,
        writable: !0
      }), Object.defineProperty(Y, "name", {
        enumerable: !1,
        configurable: !0,
        value: A,
        writable: !0
      }), Y;
    }
    return c(z, I), x(z, A), z.prototype.status = _, z.prototype.statusCode = _, z.prototype.expose = !0, z;
  }
  function C(I) {
    return function(_) {
      return !_ || typeof _ != "object" ? !1 : _ instanceof I ? !0 : _ instanceof Error && typeof _.expose == "boolean" && typeof _.statusCode == "number" && _.status === _.statusCode;
    };
  }
  function b(I, k, _) {
    var A = j(k);
    function z(N) {
      var B = N ?? i.message[_], Y = new Error(B);
      return Error.captureStackTrace(Y, z), t(Y, z.prototype), Object.defineProperty(Y, "message", {
        enumerable: !0,
        configurable: !0,
        value: B,
        writable: !0
      }), Object.defineProperty(Y, "name", {
        enumerable: !1,
        configurable: !0,
        value: A,
        writable: !0
      }), Y;
    }
    return c(z, I), x(z, A), z.prototype.status = _, z.prototype.statusCode = _, z.prototype.expose = !1, z;
  }
  function x(I, k) {
    var _ = Object.getOwnPropertyDescriptor(I, "name");
    _ && _.configurable && (_.value = k, Object.defineProperty(I, "name", _));
  }
  function O(I, k, _) {
    k.forEach(function(z) {
      var N, B = s(i.message[z]);
      switch (m(z)) {
        case 400:
          N = w(_, B, z);
          break;
        case 500:
          N = b(_, B, z);
          break;
      }
      N && (I[z] = N, I[B] = N);
    });
  }
  function j(I) {
    return I.substr(-5) !== "Error" ? I + "Error" : I;
  }
})(jv);
/*!
 * methods
 * Copyright(c) 2013-2014 TJ Holowaychuk
 * Copyright(c) 2015-2016 Douglas Christopher Wilson
 * MIT Licensed
 */
var gu = ae, zv = $v() || Hv();
function $v() {
  return gu.METHODS && gu.METHODS.map(function(t) {
    return t.toLowerCase();
  });
}
function Hv() {
  return [
    "get",
    "post",
    "put",
    "head",
    "delete",
    "options",
    "trace",
    "copy",
    "lock",
    "mkcol",
    "move",
    "purge",
    "propfind",
    "proppatch",
    "unlock",
    "report",
    "mkactivity",
    "checkout",
    "merge",
    "m-search",
    "notify",
    "subscribe",
    "unsubscribe",
    "patch",
    "search",
    "connect"
  ];
}
function Bv(e) {
  for (var t = [], i = 0; i < e.length; ) {
    var c = e[i];
    if (c === "*" || c === "+" || c === "?") {
      t.push({ type: "MODIFIER", index: i, value: e[i++] });
      continue;
    }
    if (c === "\\") {
      t.push({ type: "ESCAPED_CHAR", index: i++, value: e[i++] });
      continue;
    }
    if (c === "{") {
      t.push({ type: "OPEN", index: i, value: e[i++] });
      continue;
    }
    if (c === "}") {
      t.push({ type: "CLOSE", index: i, value: e[i++] });
      continue;
    }
    if (c === ":") {
      for (var s = "", m = i + 1; m < e.length; ) {
        var h = e.charCodeAt(m);
        if (
          // `0-9`
          h >= 48 && h <= 57 || // `A-Z`
          h >= 65 && h <= 90 || // `a-z`
          h >= 97 && h <= 122 || // `_`
          h === 95
        ) {
          s += e[m++];
          continue;
        }
        break;
      }
      if (!s)
        throw new TypeError("Missing parameter name at ".concat(i));
      t.push({ type: "NAME", index: i, value: s }), i = m;
      continue;
    }
    if (c === "(") {
      var R = 1, w = "", m = i + 1;
      if (e[m] === "?")
        throw new TypeError('Pattern cannot start with "?" at '.concat(m));
      for (; m < e.length; ) {
        if (e[m] === "\\") {
          w += e[m++] + e[m++];
          continue;
        }
        if (e[m] === ")") {
          if (R--, R === 0) {
            m++;
            break;
          }
        } else if (e[m] === "(" && (R++, e[m + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at ".concat(m));
        w += e[m++];
      }
      if (R)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!w)
        throw new TypeError("Missing pattern at ".concat(i));
      t.push({ type: "PATTERN", index: i, value: w }), i = m;
      continue;
    }
    t.push({ type: "CHAR", index: i, value: e[i++] });
  }
  return t.push({ type: "END", index: i, value: "" }), t;
}
function Al(e, t) {
  t === void 0 && (t = {});
  for (var i = Bv(e), c = t.prefixes, s = c === void 0 ? "./" : c, m = "[^".concat(ni(t.delimiter || "/#?"), "]+?"), h = [], R = 0, w = 0, C = "", b = function(X) {
    if (w < i.length && i[w].type === X)
      return i[w++].value;
  }, x = function(X) {
    var me = b(X);
    if (me !== void 0)
      return me;
    var ge = i[w], le = ge.type, Je = ge.index;
    throw new TypeError("Unexpected ".concat(le, " at ").concat(Je, ", expected ").concat(X));
  }, O = function() {
    for (var X = "", me; me = b("CHAR") || b("ESCAPED_CHAR"); )
      X += me;
    return X;
  }; w < i.length; ) {
    var j = b("CHAR"), I = b("NAME"), k = b("PATTERN");
    if (I || k) {
      var _ = j || "";
      s.indexOf(_) === -1 && (C += _, _ = ""), C && (h.push(C), C = ""), h.push({
        name: I || R++,
        prefix: _,
        suffix: "",
        pattern: k || m,
        modifier: b("MODIFIER") || ""
      });
      continue;
    }
    var A = j || b("ESCAPED_CHAR");
    if (A) {
      C += A;
      continue;
    }
    C && (h.push(C), C = "");
    var z = b("OPEN");
    if (z) {
      var _ = O(), N = b("NAME") || "", B = b("PATTERN") || "", Y = O();
      x("CLOSE"), h.push({
        name: N || (B ? R++ : ""),
        pattern: N && !B ? m : B,
        prefix: _,
        suffix: Y,
        modifier: b("MODIFIER") || ""
      });
      continue;
    }
    x("END");
  }
  return h;
}
function Nv(e, t) {
  return xp(Al(e, t), t);
}
function xp(e, t) {
  t === void 0 && (t = {});
  var i = _l(t), c = t.encode, s = c === void 0 ? function(w) {
    return w;
  } : c, m = t.validate, h = m === void 0 ? !0 : m, R = e.map(function(w) {
    if (typeof w == "object")
      return new RegExp("^(?:".concat(w.pattern, ")$"), i);
  });
  return function(w) {
    for (var C = "", b = 0; b < e.length; b++) {
      var x = e[b];
      if (typeof x == "string") {
        C += x;
        continue;
      }
      var O = w ? w[x.name] : void 0, j = x.modifier === "?" || x.modifier === "*", I = x.modifier === "*" || x.modifier === "+";
      if (Array.isArray(O)) {
        if (!I)
          throw new TypeError('Expected "'.concat(x.name, '" to not repeat, but got an array'));
        if (O.length === 0) {
          if (j)
            continue;
          throw new TypeError('Expected "'.concat(x.name, '" to not be empty'));
        }
        for (var k = 0; k < O.length; k++) {
          var _ = s(O[k], x);
          if (h && !R[b].test(_))
            throw new TypeError('Expected all "'.concat(x.name, '" to match "').concat(x.pattern, '", but got "').concat(_, '"'));
          C += x.prefix + _ + x.suffix;
        }
        continue;
      }
      if (typeof O == "string" || typeof O == "number") {
        var _ = s(String(O), x);
        if (h && !R[b].test(_))
          throw new TypeError('Expected "'.concat(x.name, '" to match "').concat(x.pattern, '", but got "').concat(_, '"'));
        C += x.prefix + _ + x.suffix;
        continue;
      }
      if (!j) {
        var A = I ? "an array" : "a string";
        throw new TypeError('Expected "'.concat(x.name, '" to be ').concat(A));
      }
    }
    return C;
  };
}
function Wv(e, t) {
  var i = [], c = Pl(e, i, t);
  return bp(c, i, t);
}
function bp(e, t, i) {
  i === void 0 && (i = {});
  var c = i.decode, s = c === void 0 ? function(m) {
    return m;
  } : c;
  return function(m) {
    var h = e.exec(m);
    if (!h)
      return !1;
    for (var R = h[0], w = h.index, C = /* @__PURE__ */ Object.create(null), b = function(O) {
      if (h[O] === void 0)
        return "continue";
      var j = t[O - 1];
      j.modifier === "*" || j.modifier === "+" ? C[j.name] = h[O].split(j.prefix + j.suffix).map(function(I) {
        return s(I, j);
      }) : C[j.name] = s(h[O], j);
    }, x = 1; x < h.length; x++)
      b(x);
    return { path: R, index: w, params: C };
  };
}
function ni(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function _l(e) {
  return e && e.sensitive ? "" : "i";
}
function Yv(e, t) {
  if (!t)
    return e;
  for (var i = /\((?:\?<(.*?)>)?(?!\?)/g, c = 0, s = i.exec(e.source); s; )
    t.push({
      // Use parenthesized substring match if available, index otherwise
      name: s[1] || c++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    }), s = i.exec(e.source);
  return e;
}
function Gv(e, t, i) {
  var c = e.map(function(s) {
    return Pl(s, t, i).source;
  });
  return new RegExp("(?:".concat(c.join("|"), ")"), _l(i));
}
function qv(e, t, i) {
  return yp(Al(e, i), t, i);
}
function yp(e, t, i) {
  i === void 0 && (i = {});
  for (var c = i.strict, s = c === void 0 ? !1 : c, m = i.start, h = m === void 0 ? !0 : m, R = i.end, w = R === void 0 ? !0 : R, C = i.encode, b = C === void 0 ? function(Je) {
    return Je;
  } : C, x = i.delimiter, O = x === void 0 ? "/#?" : x, j = i.endsWith, I = j === void 0 ? "" : j, k = "[".concat(ni(I), "]|$"), _ = "[".concat(ni(O), "]"), A = h ? "^" : "", z = 0, N = e; z < N.length; z++) {
    var B = N[z];
    if (typeof B == "string")
      A += ni(b(B));
    else {
      var Y = ni(b(B.prefix)), X = ni(b(B.suffix));
      if (B.pattern)
        if (t && t.push(B), Y || X)
          if (B.modifier === "+" || B.modifier === "*") {
            var me = B.modifier === "*" ? "?" : "";
            A += "(?:".concat(Y, "((?:").concat(B.pattern, ")(?:").concat(X).concat(Y, "(?:").concat(B.pattern, "))*)").concat(X, ")").concat(me);
          } else
            A += "(?:".concat(Y, "(").concat(B.pattern, ")").concat(X, ")").concat(B.modifier);
        else
          B.modifier === "+" || B.modifier === "*" ? A += "((?:".concat(B.pattern, ")").concat(B.modifier, ")") : A += "(".concat(B.pattern, ")").concat(B.modifier);
      else
        A += "(?:".concat(Y).concat(X, ")").concat(B.modifier);
    }
  }
  if (w)
    s || (A += "".concat(_, "?")), A += i.endsWith ? "(?=".concat(k, ")") : "$";
  else {
    var ge = e[e.length - 1], le = typeof ge == "string" ? _.indexOf(ge[ge.length - 1]) > -1 : ge === void 0;
    s || (A += "(?:".concat(_, "(?=").concat(k, "))?")), le || (A += "(?=".concat(_, "|").concat(k, ")"));
  }
  return new RegExp(A, _l(i));
}
function Pl(e, t, i) {
  return e instanceof RegExp ? Yv(e, t) : Array.isArray(e) ? Gv(e, t, i) : qv(e, t, i);
}
const Vv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compile: Nv,
  match: Wv,
  parse: Al,
  pathToRegexp: Pl,
  regexpToFunction: bp,
  tokensToFunction: xp,
  tokensToRegexp: yp
}, Symbol.toStringTag, { value: "Module" })), wp = /* @__PURE__ */ Mu(Vv), { parse: Xv, format: Zv } = ae, { pathToRegexp: Sp, compile: Jv, parse: Qv } = wp;
var Kv = la;
function la(e, t, i, c = {}) {
  this.opts = c, this.name = this.opts.name || null, this.methods = [], this.paramNames = [], this.stack = Array.isArray(i) ? i : [i];
  for (const s of t) {
    const m = this.methods.push(s.toUpperCase());
    this.methods[m - 1] === "GET" && this.methods.unshift("HEAD");
  }
  for (let s = 0; s < this.stack.length; s++) {
    const h = typeof this.stack[s];
    if (h !== "function")
      throw new Error(
        `${t.toString()} \`${this.opts.name || e}\`: \`middleware\` must be a function, not \`${h}\``
      );
  }
  this.path = e, this.regexp = Sp(e, this.paramNames, this.opts);
}
la.prototype.match = function(e) {
  return this.regexp.test(e);
};
la.prototype.params = function(e, t, i = {}) {
  for (let c = t.length, s = 0; s < c; s++)
    if (this.paramNames[s]) {
      const m = t[s];
      m && m.length > 0 && (i[this.paramNames[s].name] = m && eh(m));
    }
  return i;
};
la.prototype.captures = function(e) {
  return this.opts.ignoreCaptures ? [] : e.match(this.regexp).slice(1);
};
la.prototype.url = function(e, t) {
  let i = e;
  const c = this.path.replace(/\(\.\*\)/g, "");
  typeof e != "object" && (i = Array.prototype.slice.call(arguments), typeof i[i.length - 1] == "object" && (t = i[i.length - 1], i = i.slice(0, -1)));
  const s = Jv(c, { encode: encodeURIComponent, ...t });
  let m;
  const h = Qv(c);
  let R = {};
  if (Array.isArray(i))
    for (let w = h.length, C = 0, b = 0; C < w; C++)
      h[C].name && (R[h[C].name] = i[b++]);
  else
    h.some((w) => w.name) ? R = e : t || (t = e);
  return m = s(R), t && t.query ? (m = Xv(m), typeof t.query == "string" ? m.search = t.query : (m.search = void 0, m.query = t.query), Zv(m)) : m;
};
la.prototype.param = function(e, t) {
  const { stack: i } = this, c = this.paramNames, s = function(R, w) {
    return t.call(this, R.params[e], R, w);
  };
  s.param = e;
  const m = c.map(function(R) {
    return R.name;
  }), h = m.indexOf(e);
  return h > -1 && i.some(function(R, w) {
    if (!R.param || m.indexOf(R.param) > h)
      return i.splice(w, 0, s), !0;
  }), this;
};
la.prototype.setPrefix = function(e) {
  return this.path && (this.path = this.path !== "/" || this.opts.strict === !0 ? `${e}${this.path}` : e, this.paramNames = [], this.regexp = Sp(this.path, this.paramNames, this.opts)), this;
};
function eh(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
const { debuglog: nh } = ae, th = Sl, xu = fl, Cp = zv, { pathToRegexp: rh } = wp, Ol = Kv, Fl = nh("koa-router");
var ah = Ue;
function Ue(e = {}) {
  if (!(this instanceof Ue))
    return new Ue(e);
  this.opts = e, this.methods = this.opts.methods || [
    "HEAD",
    "OPTIONS",
    "GET",
    "PUT",
    "PATCH",
    "POST",
    "DELETE"
  ], this.exclusive = Boolean(this.opts.exclusive), this.params = {}, this.stack = [], this.host = this.opts.host;
}
for (const e of Cp) {
  let t = function(i) {
    Ue.prototype[i] = function(c, s, m) {
      if (typeof s == "string" || s instanceof RegExp ? m = Array.prototype.slice.call(arguments, 2) : (m = Array.prototype.slice.call(arguments, 1), s = c, c = null), typeof s != "string" && !(s instanceof RegExp) && (!Array.isArray(s) || s.length === 0))
        throw new Error(
          `You have to provide a path when adding a ${i} handler`
        );
      return this.register(s, [i], m, { name: c }), this;
    };
  };
  var setMethodVerb = t;
  t(e);
}
Ue.prototype.del = Ue.prototype.delete;
Ue.prototype.use = function() {
  const e = this, t = Array.prototype.slice.call(arguments);
  let i;
  if (Array.isArray(t[0]) && typeof t[0][0] == "string") {
    const m = t[0];
    for (const h of m)
      e.use.apply(e, [h].concat(t.slice(1)));
    return this;
  }
  const c = typeof t[0] == "string";
  c && (i = t.shift());
  for (const m of t)
    if (m.router) {
      const h = Object.assign(
        Object.create(Ue.prototype),
        m.router,
        {
          stack: [...m.router.stack]
        }
      );
      for (let R = 0; R < h.stack.length; R++) {
        const w = h.stack[R], C = Object.assign(
          Object.create(Ol.prototype),
          w
        );
        i && C.setPrefix(i), e.opts.prefix && C.setPrefix(e.opts.prefix), e.stack.push(C), h.stack[R] = C;
      }
      if (e.params) {
        let R = function(w) {
          const C = w;
          for (const b of C)
            h.param(b, e.params[b]);
        };
        var s = R;
        R(Object.keys(e.params));
      }
    } else {
      const h = [];
      rh(e.opts.prefix || "", h);
      const R = e.opts.prefix && h.length;
      e.register(i || "([^/]*)", [], m, {
        end: !1,
        ignoreCaptures: !c && !R
      });
    }
  return this;
};
Ue.prototype.prefix = function(e) {
  e = e.replace(/\/$/, ""), this.opts.prefix = e;
  for (let t = 0; t < this.stack.length; t++)
    this.stack[t].setPrefix(e);
  return this;
};
Ue.prototype.routes = Ue.prototype.middleware = function() {
  const e = this, t = function(c, s) {
    if (Fl("%s %s", c.method, c.path), !e.matchHost(c.host))
      return s();
    const h = e.opts.routerPath || c.routerPath || c.path, R = e.match(h, c.method);
    let w;
    if (c.matched ? c.matched.push.apply(c.matched, R.path) : c.matched = R.path, c.router = e, !R.route)
      return s();
    const C = R.pathAndMethod, b = C[C.length - 1];
    return c._matchedRoute = b.path, b.name && (c._matchedRouteName = b.name), w = (e.exclusive ? [b] : C).reduce(function(x, O) {
      return x.push(function(j, I) {
        return j.captures = O.captures(h, j.captures), j.params = j.request.params = O.params(
          h,
          j.captures,
          j.params
        ), j.routerPath = O.path, j.routerName = O.name, j._matchedRoute = O.path, O.name && (j._matchedRouteName = O.name), I();
      }), x.concat(O.stack);
    }, []), th(w)(c, s);
  };
  return t.router = this, t;
};
Ue.prototype.allowedMethods = function(e = {}) {
  const t = this.methods;
  return function(c, s) {
    return s().then(function() {
      const m = {};
      if (!c.status || c.status === 404) {
        for (let R = 0; R < c.matched.length; R++) {
          const w = c.matched[R];
          for (let C = 0; C < w.methods.length; C++) {
            const b = w.methods[C];
            m[b] = b;
          }
        }
        const h = Object.keys(m);
        if (~t.indexOf(c.method)) {
          if (h.length > 0) {
            if (c.method === "OPTIONS")
              c.status = 200, c.body = "", c.set("Allow", h.join(", "));
            else if (!m[c.method]) {
              if (e.throw)
                throw typeof e.methodNotAllowed == "function" ? e.methodNotAllowed() : new xu.MethodNotAllowed();
              c.status = 405, c.set("Allow", h.join(", "));
            }
          }
        } else {
          if (e.throw)
            throw typeof e.notImplemented == "function" ? e.notImplemented() : new xu.NotImplemented();
          c.status = 501, c.set("Allow", h.join(", "));
        }
      }
    });
  };
};
Ue.prototype.all = function(e, t, i) {
  if (typeof t == "string" ? i = Array.prototype.slice.call(arguments, 2) : (i = Array.prototype.slice.call(arguments, 1), t = e, e = null), typeof t != "string" && !(t instanceof RegExp) && (!Array.isArray(t) || t.length === 0))
    throw new Error("You have to provide a path when adding an all handler");
  return this.register(t, Cp, i, { name: e }), this;
};
Ue.prototype.redirect = function(e, t, i) {
  if ((typeof e == "symbol" || e[0] !== "/") && (e = this.url(e), e instanceof Error))
    throw e;
  if ((typeof t == "symbol" || t[0] !== "/" && !t.includes("://")) && (t = this.url(t), t instanceof Error))
    throw t;
  return this.all(e, (c) => {
    c.redirect(t), c.status = i || 301;
  });
};
Ue.prototype.register = function(e, t, i, c = {}) {
  const s = this, { stack: m } = this;
  if (Array.isArray(e)) {
    for (const R of e)
      s.register.call(s, R, t, i, c);
    return this;
  }
  const h = new Ol(e, t, i, {
    end: c.end === !1 ? c.end : !0,
    name: c.name,
    sensitive: c.sensitive || this.opts.sensitive || !1,
    strict: c.strict || this.opts.strict || !1,
    prefix: c.prefix || this.opts.prefix || "",
    ignoreCaptures: c.ignoreCaptures
  });
  this.opts.prefix && h.setPrefix(this.opts.prefix);
  for (let R = 0; R < Object.keys(this.params).length; R++) {
    const w = Object.keys(this.params)[R];
    h.param(w, this.params[w]);
  }
  return m.push(h), Fl("defined route %s %s", h.methods, h.path), h;
};
Ue.prototype.route = function(e) {
  const t = this.stack;
  for (let i = t.length, c = 0; c < i; c++)
    if (t[c].name && t[c].name === e)
      return t[c];
  return !1;
};
Ue.prototype.url = function(e, t) {
  const i = this.route(e);
  if (i) {
    const c = Array.prototype.slice.call(arguments, 1);
    return i.url.apply(i, c);
  }
  return new Error(`No route found for name: ${String(e)}`);
};
Ue.prototype.match = function(e, t) {
  const i = this.stack;
  let c;
  const s = {
    path: [],
    pathAndMethod: [],
    route: !1
  };
  for (let m = i.length, h = 0; h < m; h++)
    c = i[h], Fl("test %s %s", c.path, c.regexp), c.match(e) && (s.path.push(c), (c.methods.length === 0 || ~c.methods.indexOf(t)) && (s.pathAndMethod.push(c), c.methods.length > 0 && (s.route = !0)));
  return s;
};
Ue.prototype.matchHost = function(e) {
  const { host: t } = this;
  if (!t)
    return !0;
  if (!e)
    return !1;
  if (typeof t == "string")
    return e === t;
  if (typeof t == "object" && t instanceof RegExp)
    return t.test(e);
};
Ue.prototype.param = function(e, t) {
  this.params[e] = t;
  for (let i = 0; i < this.stack.length; i++)
    this.stack[i].param(e, t);
  return this;
};
Ue.url = function(e) {
  const t = Array.prototype.slice.call(arguments, 1);
  return Ol.prototype.url.apply({ path: e }, t);
};
var Ss = {}, ih = {
  get exports() {
    return Ss;
  },
  set exports(e) {
    Ss = e;
  }
}, tl, bu;
function oh() {
  if (bu)
    return tl;
  bu = 1;
  var e = 1e3, t = e * 60, i = t * 60, c = i * 24, s = c * 7, m = c * 365.25;
  tl = function(b, x) {
    x = x || {};
    var O = typeof b;
    if (O === "string" && b.length > 0)
      return h(b);
    if (O === "number" && isFinite(b))
      return x.long ? w(b) : R(b);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(b)
    );
  };
  function h(b) {
    if (b = String(b), !(b.length > 100)) {
      var x = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        b
      );
      if (x) {
        var O = parseFloat(x[1]), j = (x[2] || "ms").toLowerCase();
        switch (j) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return O * m;
          case "weeks":
          case "week":
          case "w":
            return O * s;
          case "days":
          case "day":
          case "d":
            return O * c;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return O * i;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return O * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return O * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return O;
          default:
            return;
        }
      }
    }
  }
  function R(b) {
    var x = Math.abs(b);
    return x >= c ? Math.round(b / c) + "d" : x >= i ? Math.round(b / i) + "h" : x >= t ? Math.round(b / t) + "m" : x >= e ? Math.round(b / e) + "s" : b + "ms";
  }
  function w(b) {
    var x = Math.abs(b);
    return x >= c ? C(b, x, c, "day") : x >= i ? C(b, x, i, "hour") : x >= t ? C(b, x, t, "minute") : x >= e ? C(b, x, e, "second") : b + " ms";
  }
  function C(b, x, O, j) {
    var I = x >= O * 1.5;
    return Math.round(b / O) + " " + j + (I ? "s" : "");
  }
  return tl;
}
function sh(e) {
  i.debug = i, i.default = i, i.coerce = w, i.disable = h, i.enable = m, i.enabled = R, i.humanize = oh(), Object.keys(e).forEach(function(C) {
    i[C] = e[C];
  }), i.instances = [], i.names = [], i.skips = [], i.formatters = {};
  function t(C) {
    for (var b = 0, x = 0; x < C.length; x++)
      b = (b << 5) - b + C.charCodeAt(x), b |= 0;
    return i.colors[Math.abs(b) % i.colors.length];
  }
  i.selectColor = t;
  function i(C) {
    var b;
    function x() {
      if (x.enabled) {
        for (var O = arguments.length, j = new Array(O), I = 0; I < O; I++)
          j[I] = arguments[I];
        var k = x, _ = Number(new Date()), A = _ - (b || _);
        k.diff = A, k.prev = b, k.curr = _, b = _, j[0] = i.coerce(j[0]), typeof j[0] != "string" && j.unshift("%O");
        var z = 0;
        j[0] = j[0].replace(/%([a-zA-Z%])/g, function(B, Y) {
          if (B === "%%")
            return B;
          z++;
          var X = i.formatters[Y];
          if (typeof X == "function") {
            var me = j[z];
            B = X.call(k, me), j.splice(z, 1), z--;
          }
          return B;
        }), i.formatArgs.call(k, j);
        var N = k.log || i.log;
        N.apply(k, j);
      }
    }
    return x.namespace = C, x.enabled = i.enabled(C), x.useColors = i.useColors(), x.color = t(C), x.destroy = c, x.extend = s, typeof i.init == "function" && i.init(x), i.instances.push(x), x;
  }
  function c() {
    var C = i.instances.indexOf(this);
    return C !== -1 ? (i.instances.splice(C, 1), !0) : !1;
  }
  function s(C, b) {
    return i(this.namespace + (typeof b > "u" ? ":" : b) + C);
  }
  function m(C) {
    i.save(C), i.names = [], i.skips = [];
    var b, x = (typeof C == "string" ? C : "").split(/[\s,]+/), O = x.length;
    for (b = 0; b < O; b++)
      x[b] && (C = x[b].replace(/\*/g, ".*?"), C[0] === "-" ? i.skips.push(new RegExp("^" + C.substr(1) + "$")) : i.names.push(new RegExp("^" + C + "$")));
    for (b = 0; b < i.instances.length; b++) {
      var j = i.instances[b];
      j.enabled = i.enabled(j.namespace);
    }
  }
  function h() {
    i.enable("");
  }
  function R(C) {
    if (C[C.length - 1] === "*")
      return !0;
    var b, x;
    for (b = 0, x = i.skips.length; b < x; b++)
      if (i.skips[b].test(C))
        return !1;
    for (b = 0, x = i.names.length; b < x; b++)
      if (i.names[b].test(C))
        return !0;
    return !1;
  }
  function w(C) {
    return C instanceof Error ? C.stack || C.message : C;
  }
  return i.enable(i.load()), i;
}
var ch = sh;
(function(e, t) {
  function i(b) {
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? i = function(O) {
      return typeof O;
    } : i = function(O) {
      return O && typeof Symbol == "function" && O.constructor === Symbol && O !== Symbol.prototype ? "symbol" : typeof O;
    }, i(b);
  }
  t.log = m, t.formatArgs = s, t.save = h, t.load = R, t.useColors = c, t.storage = w(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];
  function c() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function s(b) {
    if (b[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + b[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !!this.useColors) {
      var x = "color: " + this.color;
      b.splice(1, 0, x, "color: inherit");
      var O = 0, j = 0;
      b[0].replace(/%[a-zA-Z%]/g, function(I) {
        I !== "%%" && (O++, I === "%c" && (j = O));
      }), b.splice(j, 0, x);
    }
  }
  function m() {
    var b;
    return (typeof console > "u" ? "undefined" : i(console)) === "object" && console.log && (b = console).log.apply(b, arguments);
  }
  function h(b) {
    try {
      b ? t.storage.setItem("debug", b) : t.storage.removeItem("debug");
    } catch {
    }
  }
  function R() {
    var b;
    try {
      b = t.storage.getItem("debug");
    } catch {
    }
    return !b && typeof process < "u" && "env" in process && (b = process.env.DEBUG), b;
  }
  function w() {
    try {
      return localStorage;
    } catch {
    }
  }
  e.exports = ch(t);
  var C = e.exports.formatters;
  C.j = function(b) {
    try {
      return JSON.stringify(b);
    } catch (x) {
      return "[UnexpectedJSONParseError]: " + x.message;
    }
  };
})(ih, Ss);
var ml = {}, lh = {
  get exports() {
    return ml;
  },
  set exports(e) {
    ml = e;
  }
}, uh = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? ph : dh);
function ph(e, t) {
  return e.__proto__ = t, e;
}
function dh(e, t) {
  for (var i in t)
    e.hasOwnProperty(i) || (e[i] = t[i]);
  return e;
}
var vl = {}, yu = {
  get exports() {
    return vl;
  },
  set exports(e) {
    vl = e;
  }
};
typeof Object.create == "function" ? yu.exports = function(t, i) {
  t.super_ = i, t.prototype = Object.create(i.prototype, {
    constructor: {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
} : yu.exports = function(t, i) {
  t.super_ = i;
  var c = function() {
  };
  c.prototype = i.prototype, t.prototype = new c(), t.prototype.constructor = t;
};
/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  var t = Zu("http-errors"), i = uh, c = mo, s = vl;
  e.exports = h, e.exports.HttpError = R(), b(e.exports, c.codes, e.exports.HttpError);
  function m(O) {
    return Number(String(O).charAt(0) + "00");
  }
  function h() {
    for (var O, j, I = 500, k = {}, _ = 0; _ < arguments.length; _++) {
      var A = arguments[_];
      if (A instanceof Error) {
        O = A, I = O.status || O.statusCode || I;
        continue;
      }
      switch (typeof A) {
        case "string":
          j = A;
          break;
        case "number":
          I = A;
          break;
        case "object":
          k = A;
          break;
      }
    }
    (typeof I != "number" || !c[I] && (I < 400 || I >= 600)) && (I = 500);
    var z = h[I] || h[m(I)];
    O || (O = z ? new z(j) : new Error(j || c[I]), Error.captureStackTrace(O, h)), (!z || !(O instanceof z) || O.status !== I) && (O.expose = I < 500, O.status = O.statusCode = I);
    for (var N in k)
      N !== "status" && N !== "statusCode" && (O[N] = k[N]);
    return O;
  }
  function R() {
    function O() {
      throw new TypeError("cannot construct abstract class");
    }
    return s(O, Error), O;
  }
  function w(O, j, I) {
    var k = j.match(/Error$/) ? j : j + "Error";
    function _(A) {
      var z = A ?? c[I], N = new Error(z);
      return Error.captureStackTrace(N, _), i(N, _.prototype), Object.defineProperty(N, "message", {
        enumerable: !0,
        configurable: !0,
        value: z,
        writable: !0
      }), Object.defineProperty(N, "name", {
        enumerable: !1,
        configurable: !0,
        value: k,
        writable: !0
      }), N;
    }
    return s(_, O), _.prototype.status = I, _.prototype.statusCode = I, _.prototype.expose = !0, _;
  }
  function C(O, j, I) {
    var k = j.match(/Error$/) ? j : j + "Error";
    function _(A) {
      var z = A ?? c[I], N = new Error(z);
      return Error.captureStackTrace(N, _), i(N, _.prototype), Object.defineProperty(N, "message", {
        enumerable: !0,
        configurable: !0,
        value: z,
        writable: !0
      }), Object.defineProperty(N, "name", {
        enumerable: !1,
        configurable: !0,
        value: k,
        writable: !0
      }), N;
    }
    return s(_, O), _.prototype.status = I, _.prototype.statusCode = I, _.prototype.expose = !1, _;
  }
  function b(O, j, I) {
    j.forEach(function(_) {
      var A, z = x(c[_]);
      switch (m(_)) {
        case 400:
          A = w(I, z, _);
          break;
        case 500:
          A = C(I, z, _);
          break;
      }
      A && (O[_] = A, O[z] = A);
    }), O["I'mateapot"] = t.function(
      O.ImATeapot,
      `"I'mateapot"; use "ImATeapot" instead`
    );
  }
  function x(O) {
    return O.split(" ").map(function(j) {
      return j.slice(0, 1).toUpperCase() + j.slice(1);
    }).join("").replace(/[^ _0-9a-z]/gi, "");
  }
})(lh);
var po = {}, fh = {
  get exports() {
    return po;
  },
  set exports(e) {
    po = e;
  }
};
function Ep(e) {
  return e.charAt(0) === "/";
}
function kp(e) {
  var t = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, i = t.exec(e), c = i[1] || "", s = Boolean(c && c.charAt(1) !== ":");
  return Boolean(i[2] || s);
}
fh.exports = process.platform === "win32" ? kp : Ep;
po.posix = Ep;
po.win32 = kp;
/*!
 * resolve-path
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2018 Douglas Christopher Wilson
 * MIT Licensed
 */
var rl = ml, mh = ae.join, wu = ae.normalize, Su = po, vh = ae.resolve, hh = ae.sep, gh = bh, xh = /(?:^|[\\/])\.\.(?:[\\/]|$)/;
function bh(e, t) {
  var i = t, c = e;
  if (arguments.length === 1 && (i = e, c = process.cwd()), c == null)
    throw new TypeError("argument rootPath is required");
  if (typeof c != "string")
    throw new TypeError("argument rootPath must be a string");
  if (i == null)
    throw new TypeError("argument relativePath is required");
  if (typeof i != "string")
    throw new TypeError("argument relativePath must be a string");
  if (i.indexOf("\0") !== -1 || Su.posix(i) || Su.win32(i))
    throw rl(400, "Malicious Path");
  if (xh.test(wu("." + hh + i)))
    throw rl(403);
  return wu(mh(vh(c), i));
}
const jl = ae, Tp = ae, yh = lo("koa-send"), wh = gh, Sh = ii, Cu = ae, Eu = Tp.promisify(jl.stat), Ch = Tp.promisify(jl.access);
async function al(e) {
  try {
    return await Ch(e), !0;
  } catch {
    return !1;
  }
}
const {
  normalize: Eh,
  basename: Rp,
  extname: ku,
  resolve: kh,
  parse: Th,
  sep: Rh
} = ae;
var Ah = _h;
async function _h(e, t, i = {}) {
  Cu(e, "koa context required"), Cu(t, "pathname required"), yh('send "%s" %j', t, i);
  const c = i.root ? Eh(kh(i.root)) : "", s = t[t.length - 1] === "/";
  t = t.substr(Th(t).root.length);
  const m = i.index, h = i.maxage || i.maxAge || 0, R = i.immutable || !1, w = i.hidden || !1, C = i.format !== !1, b = Array.isArray(i.extensions) ? i.extensions : !1, x = i.brotli !== !1, O = i.gzip !== !1, j = i.setHeaders;
  if (j && typeof j != "function")
    throw new TypeError("option setHeaders must be function");
  if (t = Fh(t), t === -1)
    return e.throw(400, "failed to decode");
  if (m && s && (t += m), t = wh(c, t), !w && Ph(c, t))
    return;
  let I = "";
  if (e.acceptsEncodings("br", "identity") === "br" && x && await al(t + ".br") ? (t = t + ".br", e.set("Content-Encoding", "br"), e.res.removeHeader("Content-Length"), I = ".br") : e.acceptsEncodings("gzip", "identity") === "gzip" && O && await al(t + ".gz") && (t = t + ".gz", e.set("Content-Encoding", "gzip"), e.res.removeHeader("Content-Length"), I = ".gz"), b && !/\./.exec(Rp(t))) {
    const _ = [].concat(b);
    for (let A = 0; A < _.length; A++) {
      let z = _[A];
      if (typeof z != "string")
        throw new TypeError("option extensions must be array of strings or false");
      if (/^\./.exec(z) || (z = `.${z}`), await al(`${t}${z}`)) {
        t = `${t}${z}`;
        break;
      }
    }
  }
  let k;
  try {
    if (k = await Eu(t), k.isDirectory())
      if (C && m)
        t += `/${m}`, k = await Eu(t);
      else
        return;
  } catch (_) {
    throw ["ENOENT", "ENAMETOOLONG", "ENOTDIR"].includes(_.code) ? Sh(404, _) : (_.status = 500, _);
  }
  if (j && j(e.res, t, k), e.set("Content-Length", k.size), e.response.get("Last-Modified") || e.set("Last-Modified", k.mtime.toUTCString()), !e.response.get("Cache-Control")) {
    const _ = [`max-age=${h / 1e3 | 0}`];
    R && _.push("immutable"), e.set("Cache-Control", _.join(","));
  }
  return e.type || (e.type = Oh(t, I)), e.body = jl.createReadStream(t), t;
}
function Ph(e, t) {
  t = t.substr(e.length).split(Rh);
  for (let i = 0; i < t.length; i++)
    if (t[i][0] === ".")
      return !0;
  return !1;
}
function Oh(e, t) {
  return ku(t !== "" ? Rp(e, t) : e);
}
function Fh(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return -1;
  }
}
const jh = Ss("koa-static"), { resolve: Ih } = ae, Dh = ae, Tu = Ah;
var Mh = Lh;
function Lh(e, t) {
  return t = Object.assign({}, t), Dh(e, "root directory is required to serve files"), jh('static "%s" %j', e, t), t.root = Ih(e), t.index !== !1 && (t.index = t.index || "index.html"), t.defer ? async function(c, s) {
    if (await s(), !(c.method !== "HEAD" && c.method !== "GET") && !(c.body != null || c.status !== 404))
      try {
        await Tu(c, c.path, t);
      } catch (m) {
        if (m.status !== 404)
          throw m;
      }
  } : async function(c, s) {
    let m = !1;
    if (c.method === "HEAD" || c.method === "GET")
      try {
        m = await Tu(c, c.path, t);
      } catch (h) {
        if (h.status !== 404)
          throw h;
      }
    m || await s();
  };
}
var oe = {}, Uh = {
  get exports() {
    return oe;
  },
  set exports(e) {
    oe = e;
  }
}, Cs = {}, zh = {
  get exports() {
    return Cs;
  },
  set exports(e) {
    Cs = e;
  }
};
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e, t) {
  (function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = "18.2.0", c = Symbol.for("react.element"), s = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), C = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), _ = Symbol.iterator, A = "@@iterator";
    function z(f) {
      if (f === null || typeof f != "object")
        return null;
      var T = _ && f[_] || f[A];
      return typeof T == "function" ? T : null;
    }
    var N = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, B = {
      transition: null
    }, Y = {
      current: null,
      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
      isBatchingLegacy: !1,
      didScheduleLegacyUpdate: !1
    }, X = {
      /**
       * @internal
       * @type {ReactComponent}
       */
      current: null
    }, me = {}, ge = null;
    function le(f) {
      ge = f;
    }
    me.setExtraStackFrame = function(f) {
      ge = f;
    }, me.getCurrentStack = null, me.getStackAddendum = function() {
      var f = "";
      ge && (f += ge);
      var T = me.getCurrentStack;
      return T && (f += T() || ""), f;
    };
    var Je = !1, cn = !1, Vn = !1, ze = !1, $e = !1, Ye = {
      ReactCurrentDispatcher: N,
      ReactCurrentBatchConfig: B,
      ReactCurrentOwner: X
    };
    Ye.ReactDebugCurrentFrame = me, Ye.ReactCurrentActQueue = Y;
    function Qe(f) {
      {
        for (var T = arguments.length, M = new Array(T > 1 ? T - 1 : 0), U = 1; U < T; U++)
          M[U - 1] = arguments[U];
        ln("warn", f, M);
      }
    }
    function te(f) {
      {
        for (var T = arguments.length, M = new Array(T > 1 ? T - 1 : 0), U = 1; U < T; U++)
          M[U - 1] = arguments[U];
        ln("error", f, M);
      }
    }
    function ln(f, T, M) {
      {
        var U = Ye.ReactDebugCurrentFrame, W = U.getStackAddendum();
        W !== "" && (T += "%s", M = M.concat([W]));
        var Q = M.map(function(V) {
          return String(V);
        });
        Q.unshift("Warning: " + T), Function.prototype.apply.call(console[f], console, Q);
      }
    }
    var ft = {};
    function On(f, T) {
      {
        var M = f.constructor, U = M && (M.displayName || M.name) || "ReactClass", W = U + "." + T;
        if (ft[W])
          return;
        te("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", T, U), ft[W] = !0;
      }
    }
    var Ae = {
      /**
       * Checks whether or not this composite component is mounted.
       * @param {ReactClass} publicInstance The instance we want to test.
       * @return {boolean} True if mounted, false otherwise.
       * @protected
       * @final
       */
      isMounted: function(f) {
        return !1;
      },
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueForceUpdate: function(f, T, M) {
        On(f, "forceUpdate");
      },
      /**
       * Replaces all of the state. Always use this or `setState` to mutate state.
       * You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} completeState Next state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} callerName name of the calling function in the public API.
       * @internal
       */
      enqueueReplaceState: function(f, T, M, U) {
        On(f, "replaceState");
      },
      /**
       * Sets a subset of the state. This only exists because _pendingState is
       * internal. This provides a merging strategy that is not available to deep
       * properties which is confusing. TODO: Expose pendingState or don't use it
       * during the merge.
       *
       * @param {ReactClass} publicInstance The instance that should rerender.
       * @param {object} partialState Next partial state to be merged with state.
       * @param {?function} callback Called after component is updated.
       * @param {?string} Name of the calling function in the public API.
       * @internal
       */
      enqueueSetState: function(f, T, M, U) {
        On(f, "setState");
      }
    }, pe = Object.assign, Xn = {};
    Object.freeze(Xn);
    function Ve(f, T, M) {
      this.props = f, this.context = T, this.refs = Xn, this.updater = M || Ae;
    }
    Ve.prototype.isReactComponent = {}, Ve.prototype.setState = function(f, T) {
      if (typeof f != "object" && typeof f != "function" && f != null)
        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, f, T, "setState");
    }, Ve.prototype.forceUpdate = function(f) {
      this.updater.enqueueForceUpdate(this, f, "forceUpdate");
    };
    {
      var Ee = {
        isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
        replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
      }, ke = function(f, T) {
        Object.defineProperty(Ve.prototype, f, {
          get: function() {
            Qe("%s(...) is deprecated in plain JavaScript React classes. %s", T[0], T[1]);
          }
        });
      };
      for (var un in Ee)
        Ee.hasOwnProperty(un) && ke(un, Ee[un]);
    }
    function bn() {
    }
    bn.prototype = Ve.prototype;
    function yn(f, T, M) {
      this.props = f, this.context = T, this.refs = Xn, this.updater = M || Ae;
    }
    var Fn = yn.prototype = new bn();
    Fn.constructor = yn, pe(Fn, Ve.prototype), Fn.isPureReactComponent = !0;
    function jn() {
      var f = {
        current: null
      };
      return Object.seal(f), f;
    }
    var St = Array.isArray;
    function Zn(f) {
      return St(f);
    }
    function In(f) {
      {
        var T = typeof Symbol == "function" && Symbol.toStringTag, M = T && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return M;
      }
    }
    function Dn(f) {
      try {
        return Mn(f), !1;
      } catch {
        return !0;
      }
    }
    function Mn(f) {
      return "" + f;
    }
    function Ln(f) {
      if (Dn(f))
        return te("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", In(f)), Mn(f);
    }
    function wn(f, T, M) {
      var U = f.displayName;
      if (U)
        return U;
      var W = T.displayName || T.name || "";
      return W !== "" ? M + "(" + W + ")" : M;
    }
    function Jn(f) {
      return f.displayName || "Context";
    }
    function Ke(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && te("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case m:
          return "Fragment";
        case s:
          return "Portal";
        case R:
          return "Profiler";
        case h:
          return "StrictMode";
        case x:
          return "Suspense";
        case O:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case C:
            var T = f;
            return Jn(T) + ".Consumer";
          case w:
            var M = f;
            return Jn(M._context) + ".Provider";
          case b:
            return wn(f, f.render, "ForwardRef");
          case j:
            var U = f.displayName || null;
            return U !== null ? U : Ke(f.type) || "Memo";
          case I: {
            var W = f, Q = W._payload, V = W._init;
            try {
              return Ke(V(Q));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qn = Object.prototype.hasOwnProperty, Kn = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ct, Oe, et;
    et = {};
    function mt(f) {
      if (Qn.call(f, "ref")) {
        var T = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Sn(f) {
      if (Qn.call(f, "key")) {
        var T = Object.getOwnPropertyDescriptor(f, "key").get;
        if (T && T.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Ie(f, T) {
      var M = function() {
        Ct || (Ct = !0, te("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      M.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: M,
        configurable: !0
      });
    }
    function Et(f, T) {
      var M = function() {
        Oe || (Oe = !0, te("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
      };
      M.isReactWarning = !0, Object.defineProperty(f, "ref", {
        get: M,
        configurable: !0
      });
    }
    function Nt(f) {
      if (typeof f.ref == "string" && X.current && f.__self && X.current.stateNode !== f.__self) {
        var T = Ke(X.current.type);
        et[T] || (te('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T, f.ref), et[T] = !0);
      }
    }
    var Un = function(f, T, M, U, W, Q, V) {
      var K = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: f,
        key: T,
        ref: M,
        props: V,
        // Record the component responsible for creating this element.
        _owner: Q
      };
      return K._store = {}, Object.defineProperty(K._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.defineProperty(K, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(K.props), Object.freeze(K)), K;
    };
    function vr(f, T, M) {
      var U, W = {}, Q = null, V = null, K = null, se = null;
      if (T != null) {
        mt(T) && (V = T.ref, Nt(T)), Sn(T) && (Ln(T.key), Q = "" + T.key), K = T.__self === void 0 ? null : T.__self, se = T.__source === void 0 ? null : T.__source;
        for (U in T)
          Qn.call(T, U) && !Kn.hasOwnProperty(U) && (W[U] = T[U]);
      }
      var de = arguments.length - 2;
      if (de === 1)
        W.children = M;
      else if (de > 1) {
        for (var be = Array(de), ve = 0; ve < de; ve++)
          be[ve] = arguments[ve + 2];
        Object.freeze && Object.freeze(be), W.children = be;
      }
      if (f && f.defaultProps) {
        var ye = f.defaultProps;
        for (U in ye)
          W[U] === void 0 && (W[U] = ye[U]);
      }
      if (Q || V) {
        var Pe = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
        Q && Ie(W, Pe), V && Et(W, Pe);
      }
      return Un(f, Q, V, K, se, X.current, W);
    }
    function hr(f, T) {
      var M = Un(f.type, T, f.ref, f._self, f._source, f._owner, f.props);
      return M;
    }
    function gr(f, T, M) {
      if (f == null)
        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
      var U, W = pe({}, f.props), Q = f.key, V = f.ref, K = f._self, se = f._source, de = f._owner;
      if (T != null) {
        mt(T) && (V = T.ref, de = X.current), Sn(T) && (Ln(T.key), Q = "" + T.key);
        var be;
        f.type && f.type.defaultProps && (be = f.type.defaultProps);
        for (U in T)
          Qn.call(T, U) && !Kn.hasOwnProperty(U) && (T[U] === void 0 && be !== void 0 ? W[U] = be[U] : W[U] = T[U]);
      }
      var ve = arguments.length - 2;
      if (ve === 1)
        W.children = M;
      else if (ve > 1) {
        for (var ye = Array(ve), Pe = 0; Pe < ve; Pe++)
          ye[Pe] = arguments[Pe + 2];
        W.children = ye;
      }
      return Un(f.type, Q, V, K, se, de, W);
    }
    function pn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === c;
    }
    var Cn = ".", kt = ":";
    function Wt(f) {
      var T = /[=:]/g, M = {
        "=": "=0",
        ":": "=2"
      }, U = f.replace(T, function(W) {
        return M[W];
      });
      return "$" + U;
    }
    var zn = !1, En = /\/+/g;
    function en(f) {
      return f.replace(En, "$&/");
    }
    function $n(f, T) {
      return typeof f == "object" && f !== null && f.key != null ? (Ln(f.key), Wt("" + f.key)) : T.toString(36);
    }
    function kn(f, T, M, U, W) {
      var Q = typeof f;
      (Q === "undefined" || Q === "boolean") && (f = null);
      var V = !1;
      if (f === null)
        V = !0;
      else
        switch (Q) {
          case "string":
          case "number":
            V = !0;
            break;
          case "object":
            switch (f.$$typeof) {
              case c:
              case s:
                V = !0;
            }
        }
      if (V) {
        var K = f, se = W(K), de = U === "" ? Cn + $n(K, 0) : U;
        if (Zn(se)) {
          var be = "";
          de != null && (be = en(de) + "/"), kn(se, T, be, "", function(hi) {
            return hi;
          });
        } else
          se != null && (pn(se) && (se.key && (!K || K.key !== se.key) && Ln(se.key), se = hr(
            se,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (se.key && (!K || K.key !== se.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              en("" + se.key) + "/"
            ) : "") + de
          )), T.push(se));
        return 1;
      }
      var ve, ye, Pe = 0, Le = U === "" ? Cn : U + kt;
      if (Zn(f))
        for (var Pt = 0; Pt < f.length; Pt++)
          ve = f[Pt], ye = Le + $n(ve, Pt), Pe += kn(ve, T, M, ye, W);
      else {
        var Ir = z(f);
        if (typeof Ir == "function") {
          var Dr = f;
          Ir === Dr.entries && (zn || Qe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), zn = !0);
          for (var vi = Ir.call(Dr), va, ha = 0; !(va = vi.next()).done; )
            ve = va.value, ye = Le + $n(ve, ha++), Pe += kn(ve, T, M, ye, W);
        } else if (Q === "object") {
          var ga = String(f);
          throw new Error("Objects are not valid as a React child (found: " + (ga === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : ga) + "). If you meant to render a collection of children, use an array instead.");
        }
      }
      return Pe;
    }
    function nt(f, T, M) {
      if (f == null)
        return f;
      var U = [], W = 0;
      return kn(f, U, "", "", function(Q) {
        return T.call(M, Q, W++);
      }), U;
    }
    function xr(f) {
      var T = 0;
      return nt(f, function() {
        T++;
      }), T;
    }
    function Yt(f, T, M) {
      nt(f, function() {
        T.apply(this, arguments);
      }, M);
    }
    function br(f) {
      return nt(f, function(T) {
        return T;
      }) || [];
    }
    function Gt(f) {
      if (!pn(f))
        throw new Error("React.Children.only expected to receive a single React element child.");
      return f;
    }
    function Te(f) {
      var T = {
        $$typeof: C,
        // As a workaround to support multiple concurrent renderers, we categorize
        // some renderers as primary and others as secondary. We only expect
        // there to be two concurrent renderers at most: React Native (primary) and
        // Fabric (secondary); React DOM (primary) and React ART (secondary).
        // Secondary renderers store their context values on separate fields.
        _currentValue: f,
        _currentValue2: f,
        // Used to track how many concurrent renderers this context currently
        // supports within in a single renderer. Such as parallel server rendering.
        _threadCount: 0,
        // These are circular
        Provider: null,
        Consumer: null,
        // Add these to use same hidden class in VM as ServerContext
        _defaultValue: null,
        _globalName: null
      };
      T.Provider = {
        $$typeof: w,
        _context: T
      };
      var M = !1, U = !1, W = !1;
      {
        var Q = {
          $$typeof: C,
          _context: T
        };
        Object.defineProperties(Q, {
          Provider: {
            get: function() {
              return U || (U = !0, te("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), T.Provider;
            },
            set: function(V) {
              T.Provider = V;
            }
          },
          _currentValue: {
            get: function() {
              return T._currentValue;
            },
            set: function(V) {
              T._currentValue = V;
            }
          },
          _currentValue2: {
            get: function() {
              return T._currentValue2;
            },
            set: function(V) {
              T._currentValue2 = V;
            }
          },
          _threadCount: {
            get: function() {
              return T._threadCount;
            },
            set: function(V) {
              T._threadCount = V;
            }
          },
          Consumer: {
            get: function() {
              return M || (M = !0, te("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), T.Consumer;
            }
          },
          displayName: {
            get: function() {
              return T.displayName;
            },
            set: function(V) {
              W || (Qe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", V), W = !0);
            }
          }
        }), T.Consumer = Q;
      }
      return T._currentRenderer = null, T._currentRenderer2 = null, T;
    }
    var tt = -1, Tt = 0, Rt = 1, Fe = 2;
    function qt(f) {
      if (f._status === tt) {
        var T = f._result, M = T();
        if (M.then(function(Q) {
          if (f._status === Tt || f._status === tt) {
            var V = f;
            V._status = Rt, V._result = Q;
          }
        }, function(Q) {
          if (f._status === Tt || f._status === tt) {
            var V = f;
            V._status = Fe, V._result = Q;
          }
        }), f._status === tt) {
          var U = f;
          U._status = Tt, U._result = M;
        }
      }
      if (f._status === Rt) {
        var W = f._result;
        return W === void 0 && te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, W), "default" in W || te(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, W), W.default;
      } else
        throw f._result;
    }
    function yr(f) {
      var T = {
        // We use these fields to store the result.
        _status: tt,
        _result: f
      }, M = {
        $$typeof: I,
        _payload: T,
        _init: qt
      };
      {
        var U, W;
        Object.defineProperties(M, {
          defaultProps: {
            configurable: !0,
            get: function() {
              return U;
            },
            set: function(Q) {
              te("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), U = Q, Object.defineProperty(M, "defaultProps", {
                enumerable: !0
              });
            }
          },
          propTypes: {
            configurable: !0,
            get: function() {
              return W;
            },
            set: function(Q) {
              te("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), W = Q, Object.defineProperty(M, "propTypes", {
                enumerable: !0
              });
            }
          }
        });
      }
      return M;
    }
    function wr(f) {
      f != null && f.$$typeof === j ? te("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof f != "function" ? te("forwardRef requires a render function but was given %s.", f === null ? "null" : typeof f) : f.length !== 0 && f.length !== 2 && te("forwardRef render functions accept exactly two parameters: props and ref. %s", f.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), f != null && (f.defaultProps != null || f.propTypes != null) && te("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
      var T = {
        $$typeof: b,
        render: f
      };
      {
        var M;
        Object.defineProperty(T, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return M;
          },
          set: function(U) {
            M = U, !f.name && !f.displayName && (f.displayName = U);
          }
        });
      }
      return T;
    }
    var E;
    E = Symbol.for("react.module.reference");
    function H(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === m || f === R || $e || f === h || f === x || f === O || ze || f === k || Je || cn || Vn || typeof f == "object" && f !== null && (f.$$typeof === I || f.$$typeof === j || f.$$typeof === w || f.$$typeof === C || f.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === E || f.getModuleId !== void 0));
    }
    function G(f, T) {
      H(f) || te("memo: The first argument must be a component. Instead received: %s", f === null ? "null" : typeof f);
      var M = {
        $$typeof: j,
        type: f,
        compare: T === void 0 ? null : T
      };
      {
        var U;
        Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return U;
          },
          set: function(W) {
            U = W, !f.name && !f.displayName && (f.displayName = W);
          }
        });
      }
      return M;
    }
    function Z() {
      var f = N.current;
      return f === null && te(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), f;
    }
    function re(f) {
      var T = Z();
      if (f._context !== void 0) {
        var M = f._context;
        M.Consumer === f ? te("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === f && te("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
      }
      return T.useContext(f);
    }
    function ue(f) {
      var T = Z();
      return T.useState(f);
    }
    function ie(f, T, M) {
      var U = Z();
      return U.useReducer(f, T, M);
    }
    function ne(f) {
      var T = Z();
      return T.useRef(f);
    }
    function De(f, T) {
      var M = Z();
      return M.useEffect(f, T);
    }
    function xe(f, T) {
      var M = Z();
      return M.useInsertionEffect(f, T);
    }
    function he(f, T) {
      var M = Z();
      return M.useLayoutEffect(f, T);
    }
    function _e(f, T) {
      var M = Z();
      return M.useCallback(f, T);
    }
    function nn(f, T) {
      var M = Z();
      return M.useMemo(f, T);
    }
    function rt(f, T, M) {
      var U = Z();
      return U.useImperativeHandle(f, T, M);
    }
    function je(f, T) {
      {
        var M = Z();
        return M.useDebugValue(f, T);
      }
    }
    function Hn() {
      var f = Z();
      return f.useTransition();
    }
    function at(f) {
      var T = Z();
      return T.useDeferredValue(f);
    }
    function it() {
      var f = Z();
      return f.useId();
    }
    function Ge(f, T, M) {
      var U = Z();
      return U.useSyncExternalStore(f, T, M);
    }
    var ot = 0, Vt, Xt, Xe, Zt, Sr, ua, pa;
    function Cr() {
    }
    Cr.__reactDisabledLog = !0;
    function Er() {
      {
        if (ot === 0) {
          Vt = console.log, Xt = console.info, Xe = console.warn, Zt = console.error, Sr = console.group, ua = console.groupCollapsed, pa = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: Cr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        ot++;
      }
    }
    function da() {
      {
        if (ot--, ot === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: pe({}, f, {
              value: Vt
            }),
            info: pe({}, f, {
              value: Xt
            }),
            warn: pe({}, f, {
              value: Xe
            }),
            error: pe({}, f, {
              value: Zt
            }),
            group: pe({}, f, {
              value: Sr
            }),
            groupCollapsed: pe({}, f, {
              value: ua
            }),
            groupEnd: pe({}, f, {
              value: pa
            })
          });
        }
        ot < 0 && te("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var At = Ye.ReactCurrentDispatcher, Jt;
    function vt(f, T, M) {
      {
        if (Jt === void 0)
          try {
            throw Error();
          } catch (W) {
            var U = W.stack.trim().match(/\n( *(at )?)/);
            Jt = U && U[1] || "";
          }
        return `
` + Jt + f;
      }
    }
    var dn = !1, Tn;
    {
      var Bn = typeof WeakMap == "function" ? WeakMap : Map;
      Tn = new Bn();
    }
    function kr(f, T) {
      if (!f || dn)
        return "";
      {
        var M = Tn.get(f);
        if (M !== void 0)
          return M;
      }
      var U;
      dn = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Q;
      Q = At.current, At.current = null, Er();
      try {
        if (T) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (Le) {
              U = Le;
            }
            Reflect.construct(f, [], V);
          } else {
            try {
              V.call();
            } catch (Le) {
              U = Le;
            }
            f.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Le) {
            U = Le;
          }
          f();
        }
      } catch (Le) {
        if (Le && U && typeof Le.stack == "string") {
          for (var K = Le.stack.split(`
`), se = U.stack.split(`
`), de = K.length - 1, be = se.length - 1; de >= 1 && be >= 0 && K[de] !== se[be]; )
            be--;
          for (; de >= 1 && be >= 0; de--, be--)
            if (K[de] !== se[be]) {
              if (de !== 1 || be !== 1)
                do
                  if (de--, be--, be < 0 || K[de] !== se[be]) {
                    var ve = `
` + K[de].replace(" at new ", " at ");
                    return f.displayName && ve.includes("<anonymous>") && (ve = ve.replace("<anonymous>", f.displayName)), typeof f == "function" && Tn.set(f, ve), ve;
                  }
                while (de >= 1 && be >= 0);
              break;
            }
        }
      } finally {
        dn = !1, At.current = Q, da(), Error.prepareStackTrace = W;
      }
      var ye = f ? f.displayName || f.name : "", Pe = ye ? vt(ye) : "";
      return typeof f == "function" && Tn.set(f, Pe), Pe;
    }
    function We(f, T, M) {
      return kr(f, !1);
    }
    function He(f) {
      var T = f.prototype;
      return !!(T && T.isReactComponent);
    }
    function fn(f, T, M) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return kr(f, He(f));
      if (typeof f == "string")
        return vt(f);
      switch (f) {
        case x:
          return vt("Suspense");
        case O:
          return vt("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case b:
            return We(f.render);
          case j:
            return fn(f.type, T, M);
          case I: {
            var U = f, W = U._payload, Q = U._init;
            try {
              return fn(Q(W), T, M);
            } catch {
            }
          }
        }
      return "";
    }
    var tn = {}, Qt = Ye.ReactDebugCurrentFrame;
    function Me(f) {
      if (f) {
        var T = f._owner, M = fn(f.type, f._source, T ? T.type : null);
        Qt.setExtraStackFrame(M);
      } else
        Qt.setExtraStackFrame(null);
    }
    function Rn(f, T, M, U, W) {
      {
        var Q = Function.call.bind(Qn);
        for (var V in f)
          if (Q(f, V)) {
            var K = void 0;
            try {
              if (typeof f[V] != "function") {
                var se = Error((U || "React class") + ": " + M + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              K = f[V](T, V, U, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (de) {
              K = de;
            }
            K && !(K instanceof Error) && (Me(W), te("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", M, V, typeof K), Me(null)), K instanceof Error && !(K.message in tn) && (tn[K.message] = !0, Me(W), te("Failed %s type: %s", M, K.message), Me(null));
          }
      }
    }
    function Nn(f) {
      if (f) {
        var T = f._owner, M = fn(f.type, f._source, T ? T.type : null);
        le(M);
      } else
        le(null);
    }
    var st;
    st = !1;
    function Kt() {
      if (X.current) {
        var f = Ke(X.current.type);
        if (f)
          return `

Check the render method of \`` + f + "`.";
      }
      return "";
    }
    function Tr(f) {
      if (f !== void 0) {
        var T = f.fileName.replace(/^.*[\\\/]/, ""), M = f.lineNumber;
        return `

Check your code at ` + T + ":" + M + ".";
      }
      return "";
    }
    function Rr(f) {
      return f != null ? Tr(f.__source) : "";
    }
    var Ar = {};
    function fa(f) {
      var T = Kt();
      if (!T) {
        var M = typeof f == "string" ? f : f.displayName || f.name;
        M && (T = `

Check the top-level render call using <` + M + ">.");
      }
      return T;
    }
    function _t(f, T) {
      if (!(!f._store || f._store.validated || f.key != null)) {
        f._store.validated = !0;
        var M = fa(T);
        if (!Ar[M]) {
          Ar[M] = !0;
          var U = "";
          f && f._owner && f._owner !== X.current && (U = " It was passed a child from " + Ke(f._owner.type) + "."), Nn(f), te('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, U), Nn(null);
        }
      }
    }
    function _r(f, T) {
      if (typeof f == "object") {
        if (Zn(f))
          for (var M = 0; M < f.length; M++) {
            var U = f[M];
            pn(U) && _t(U, T);
          }
        else if (pn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var W = z(f);
          if (typeof W == "function" && W !== f.entries)
            for (var Q = W.call(f), V; !(V = Q.next()).done; )
              pn(V.value) && _t(V.value, T);
        }
      }
    }
    function Pr(f) {
      {
        var T = f.type;
        if (T == null || typeof T == "string")
          return;
        var M;
        if (typeof T == "function")
          M = T.propTypes;
        else if (typeof T == "object" && (T.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        T.$$typeof === j))
          M = T.propTypes;
        else
          return;
        if (M) {
          var U = Ke(T);
          Rn(M, f.props, "prop", U, f);
        } else if (T.PropTypes !== void 0 && !st) {
          st = !0;
          var W = Ke(T);
          te("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && te("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function si(f) {
      {
        for (var T = Object.keys(f.props), M = 0; M < T.length; M++) {
          var U = T[M];
          if (U !== "children" && U !== "key") {
            Nn(f), te("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), Nn(null);
            break;
          }
        }
        f.ref !== null && (Nn(f), te("Invalid attribute `ref` supplied to `React.Fragment`."), Nn(null));
      }
    }
    function ma(f, T, M) {
      var U = H(f);
      if (!U) {
        var W = "";
        (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var Q = Rr(T);
        Q ? W += Q : W += Kt();
        var V;
        f === null ? V = "null" : Zn(f) ? V = "array" : f !== void 0 && f.$$typeof === c ? (V = "<" + (Ke(f.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : V = typeof f, te("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, W);
      }
      var K = vr.apply(this, arguments);
      if (K == null)
        return K;
      if (U)
        for (var se = 2; se < arguments.length; se++)
          _r(arguments[se], f);
      return f === m ? si(K) : Pr(K), K;
    }
    var er = !1;
    function ci(f) {
      var T = ma.bind(null, f);
      return T.type = f, er || (er = !0, Qe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(T, "type", {
        enumerable: !1,
        get: function() {
          return Qe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
            value: f
          }), f;
        }
      }), T;
    }
    function Or(f, T, M) {
      for (var U = gr.apply(this, arguments), W = 2; W < arguments.length; W++)
        _r(arguments[W], U.type);
      return Pr(U), U;
    }
    function li(f, T) {
      var M = B.transition;
      B.transition = {};
      var U = B.transition;
      B.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        f();
      } finally {
        if (B.transition = M, M === null && U._updatedFibers) {
          var W = U._updatedFibers.size;
          W > 10 && Qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), U._updatedFibers.clear();
        }
      }
    }
    var nr = !1, tr = null;
    function ui(f) {
      if (tr === null)
        try {
          var T = ("require" + Math.random()).slice(0, 7), M = e && e[T];
          tr = M.call(e, "timers").setImmediate;
        } catch {
          tr = function(W) {
            nr === !1 && (nr = !0, typeof MessageChannel > "u" && te("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
            var Q = new MessageChannel();
            Q.port1.onmessage = W, Q.port2.postMessage(void 0);
          };
        }
      return tr(f);
    }
    var An = 0, rn = !1;
    function Fr(f) {
      {
        var T = An;
        An++, Y.current === null && (Y.current = []);
        var M = Y.isBatchingLegacy, U;
        try {
          if (Y.isBatchingLegacy = !0, U = f(), !M && Y.didScheduleLegacyUpdate) {
            var W = Y.current;
            W !== null && (Y.didScheduleLegacyUpdate = !1, Ze(W));
          }
        } catch (ye) {
          throw rr(T), ye;
        } finally {
          Y.isBatchingLegacy = M;
        }
        if (U !== null && typeof U == "object" && typeof U.then == "function") {
          var Q = U, V = !1, K = {
            then: function(ye, Pe) {
              V = !0, Q.then(function(Le) {
                rr(T), An === 0 ? jr(Le, ye, Pe) : ye(Le);
              }, function(Le) {
                rr(T), Pe(Le);
              });
            }
          };
          return !rn && typeof Promise < "u" && Promise.resolve().then(function() {
          }).then(function() {
            V || (rn = !0, te("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
          }), K;
        } else {
          var se = U;
          if (rr(T), An === 0) {
            var de = Y.current;
            de !== null && (Ze(de), Y.current = null);
            var be = {
              then: function(ye, Pe) {
                Y.current === null ? (Y.current = [], jr(se, ye, Pe)) : ye(se);
              }
            };
            return be;
          } else {
            var ve = {
              then: function(ye, Pe) {
                ye(se);
              }
            };
            return ve;
          }
        }
      }
    }
    function rr(f) {
      f !== An - 1 && te("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), An = f;
    }
    function jr(f, T, M) {
      {
        var U = Y.current;
        if (U !== null)
          try {
            Ze(U), ui(function() {
              U.length === 0 ? (Y.current = null, T(f)) : jr(f, T, M);
            });
          } catch (W) {
            M(W);
          }
        else
          T(f);
      }
    }
    var ar = !1;
    function Ze(f) {
      if (!ar) {
        ar = !0;
        var T = 0;
        try {
          for (; T < f.length; T++) {
            var M = f[T];
            do
              M = M(!0);
            while (M !== null);
          }
          f.length = 0;
        } catch (U) {
          throw f = f.slice(T + 1), U;
        } finally {
          ar = !1;
        }
      }
    }
    var pi = ma, di = Or, fi = ci, mi = {
      map: nt,
      forEach: Yt,
      count: xr,
      toArray: br,
      only: Gt
    };
    t.Children = mi, t.Component = Ve, t.Fragment = m, t.Profiler = R, t.PureComponent = yn, t.StrictMode = h, t.Suspense = x, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ye, t.cloneElement = di, t.createContext = Te, t.createElement = pi, t.createFactory = fi, t.createRef = jn, t.forwardRef = wr, t.isValidElement = pn, t.lazy = yr, t.memo = G, t.startTransition = li, t.unstable_act = Fr, t.useCallback = _e, t.useContext = re, t.useDebugValue = je, t.useDeferredValue = at, t.useEffect = De, t.useId = it, t.useImperativeHandle = rt, t.useInsertionEffect = xe, t.useLayoutEffect = he, t.useMemo = nn, t.useReducer = ie, t.useRef = ne, t.useState = ue, t.useSyncExternalStore = Ge, t.useTransition = Hn, t.version = i, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  })();
})(zh, Cs);
(function(e) {
  e.exports = Cs;
})(Uh);
const Ap = /* @__PURE__ */ Wp(oe), Es = /* @__PURE__ */ Bp({
  __proto__: null,
  default: Ap
}, [oe]);
var ti = {};
/**
 * @license React
 * react-dom-server-legacy.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  var e = oe, t = "18.2.0", i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function c(n) {
    {
      for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
        l[p - 1] = arguments[p];
      m("warn", n, l);
    }
  }
  function s(n) {
    {
      for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), p = 1; p < a; p++)
        l[p - 1] = arguments[p];
      m("error", n, l);
    }
  }
  function m(n, a, l) {
    {
      var p = i.ReactDebugCurrentFrame, v = p.getStackAddendum();
      v !== "" && (a += "%s", l = l.concat([v]));
      var y = l.map(function(P) {
        return String(P);
      });
      y.unshift("Warning: " + a), Function.prototype.apply.call(console[n], console, y);
    }
  }
  function h(n) {
    n();
  }
  function R(n) {
  }
  function w(n, a) {
    C(n, a);
  }
  function C(n, a) {
    return n.push(a);
  }
  function b(n) {
  }
  function x(n) {
    n.push(null);
  }
  function O(n) {
    return n;
  }
  function j(n) {
    return n;
  }
  function I(n, a) {
    n.destroy(a);
  }
  function k(n) {
    {
      var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && n[Symbol.toStringTag] || n.constructor.name || "Object";
      return l;
    }
  }
  function _(n) {
    try {
      return A(n), !1;
    } catch {
      return !0;
    }
  }
  function A(n) {
    return "" + n;
  }
  function z(n, a) {
    if (_(n))
      return s("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", a, k(n)), A(n);
  }
  function N(n, a) {
    if (_(n))
      return s("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", a, k(n)), A(n);
  }
  function B(n) {
    if (_(n))
      return s("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", k(n)), A(n);
  }
  var Y = Object.prototype.hasOwnProperty, X = 0, me = 1, ge = 2, le = 3, Je = 4, cn = 5, Vn = 6, ze = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", $e = ze + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ye = new RegExp("^[" + ze + "][" + $e + "]*$"), Qe = {}, te = {};
  function ln(n) {
    return Y.call(te, n) ? !0 : Y.call(Qe, n) ? !1 : Ye.test(n) ? (te[n] = !0, !0) : (Qe[n] = !0, s("Invalid attribute name: `%s`", n), !1);
  }
  function ft(n, a, l, p) {
    if (l !== null && l.type === X)
      return !1;
    switch (typeof a) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (p)
          return !1;
        if (l !== null)
          return !l.acceptsBooleans;
        var v = n.toLowerCase().slice(0, 5);
        return v !== "data-" && v !== "aria-";
      }
      default:
        return !1;
    }
  }
  function On(n) {
    return pe.hasOwnProperty(n) ? pe[n] : null;
  }
  function Ae(n, a, l, p, v, y, P) {
    this.acceptsBooleans = a === ge || a === le || a === Je, this.attributeName = p, this.attributeNamespace = v, this.mustUseProperty = l, this.propertyName = n, this.type = a, this.sanitizeURL = y, this.removeEmptyString = P;
  }
  var pe = {}, Xn = [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ];
  Xn.forEach(function(n) {
    pe[n] = new Ae(
      n,
      X,
      !1,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var a = n[0], l = n[1];
    pe[a] = new Ae(
      a,
      me,
      !1,
      // mustUseProperty
      l,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pe[n] = new Ae(
      n,
      ge,
      !1,
      // mustUseProperty
      n.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pe[n] = new Ae(
      n,
      ge,
      !1,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach(function(n) {
    pe[n] = new Ae(
      n,
      le,
      !1,
      // mustUseProperty
      n.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(n) {
    pe[n] = new Ae(
      n,
      le,
      !0,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(n) {
    pe[n] = new Ae(
      n,
      Je,
      !1,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(n) {
    pe[n] = new Ae(
      n,
      Vn,
      !1,
      // mustUseProperty
      n,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["rowSpan", "start"].forEach(function(n) {
    pe[n] = new Ae(
      n,
      cn,
      !1,
      // mustUseProperty
      n.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Ve = /[\-\:]([a-z])/g, Ee = function(n) {
    return n[1].toUpperCase();
  };
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(n) {
    var a = n.replace(Ve, Ee);
    pe[a] = new Ae(
      a,
      me,
      !1,
      // mustUseProperty
      n,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(n) {
    var a = n.replace(Ve, Ee);
    pe[a] = new Ae(
      a,
      me,
      !1,
      // mustUseProperty
      n,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(n) {
    var a = n.replace(Ve, Ee);
    pe[a] = new Ae(
      a,
      me,
      !1,
      // mustUseProperty
      n,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pe[n] = new Ae(
      n,
      me,
      !1,
      // mustUseProperty
      n.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var ke = "xlinkHref";
  pe[ke] = new Ae(
    "xlinkHref",
    me,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(n) {
    pe[n] = new Ae(
      n,
      me,
      !1,
      // mustUseProperty
      n.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
    );
  });
  var un = {
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
    // SVG-related properties
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  };
  function bn(n, a) {
    return n + a.charAt(0).toUpperCase() + a.substring(1);
  }
  var yn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(un).forEach(function(n) {
    yn.forEach(function(a) {
      un[bn(a, n)] = un[n];
    });
  });
  var Fn = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function jn(n, a) {
    Fn[a.type] || a.onChange || a.onInput || a.readOnly || a.disabled || a.value == null || s("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), a.onChange || a.readOnly || a.disabled || a.checked == null || s("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function St(n, a) {
    if (n.indexOf("-") === -1)
      return typeof a.is == "string";
    switch (n) {
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
  var Zn = {
    "aria-current": 0,
    // state
    "aria-description": 0,
    "aria-details": 0,
    "aria-disabled": 0,
    // state
    "aria-hidden": 0,
    // state
    "aria-invalid": 0,
    // state
    "aria-keyshortcuts": 0,
    "aria-label": 0,
    "aria-roledescription": 0,
    // Widget Attributes
    "aria-autocomplete": 0,
    "aria-checked": 0,
    "aria-expanded": 0,
    "aria-haspopup": 0,
    "aria-level": 0,
    "aria-modal": 0,
    "aria-multiline": 0,
    "aria-multiselectable": 0,
    "aria-orientation": 0,
    "aria-placeholder": 0,
    "aria-pressed": 0,
    "aria-readonly": 0,
    "aria-required": 0,
    "aria-selected": 0,
    "aria-sort": 0,
    "aria-valuemax": 0,
    "aria-valuemin": 0,
    "aria-valuenow": 0,
    "aria-valuetext": 0,
    // Live Region Attributes
    "aria-atomic": 0,
    "aria-busy": 0,
    "aria-live": 0,
    "aria-relevant": 0,
    // Drag-and-Drop Attributes
    "aria-dropeffect": 0,
    "aria-grabbed": 0,
    // Relationship Attributes
    "aria-activedescendant": 0,
    "aria-colcount": 0,
    "aria-colindex": 0,
    "aria-colspan": 0,
    "aria-controls": 0,
    "aria-describedby": 0,
    "aria-errormessage": 0,
    "aria-flowto": 0,
    "aria-labelledby": 0,
    "aria-owns": 0,
    "aria-posinset": 0,
    "aria-rowcount": 0,
    "aria-rowindex": 0,
    "aria-rowspan": 0,
    "aria-setsize": 0
  }, In = {}, Dn = new RegExp("^(aria)-[" + $e + "]*$"), Mn = new RegExp("^(aria)[A-Z][" + $e + "]*$");
  function Ln(n, a) {
    {
      if (Y.call(In, a) && In[a])
        return !0;
      if (Mn.test(a)) {
        var l = "aria-" + a.slice(4).toLowerCase(), p = Zn.hasOwnProperty(l) ? l : null;
        if (p == null)
          return s("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", a), In[a] = !0, !0;
        if (a !== p)
          return s("Invalid ARIA attribute `%s`. Did you mean `%s`?", a, p), In[a] = !0, !0;
      }
      if (Dn.test(a)) {
        var v = a.toLowerCase(), y = Zn.hasOwnProperty(v) ? v : null;
        if (y == null)
          return In[a] = !0, !1;
        if (a !== y)
          return s("Unknown ARIA attribute `%s`. Did you mean `%s`?", a, y), In[a] = !0, !0;
      }
    }
    return !0;
  }
  function wn(n, a) {
    {
      var l = [];
      for (var p in a) {
        var v = Ln(n, p);
        v || l.push(p);
      }
      var y = l.map(function(P) {
        return "`" + P + "`";
      }).join(", ");
      l.length === 1 ? s("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", y, n) : l.length > 1 && s("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", y, n);
    }
  }
  function Jn(n, a) {
    St(n, a) || wn(n, a);
  }
  var Ke = !1;
  function Qn(n, a) {
    {
      if (n !== "input" && n !== "textarea" && n !== "select")
        return;
      a != null && a.value === null && !Ke && (Ke = !0, n === "select" && a.multiple ? s("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", n) : s("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", n));
    }
  }
  var Kn = {
    // HTML
    accept: "accept",
    acceptcharset: "acceptCharset",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    alt: "alt",
    as: "as",
    async: "async",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    capture: "capture",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charSet",
    checked: "checked",
    children: "children",
    cite: "cite",
    class: "className",
    classid: "classID",
    classname: "className",
    cols: "cols",
    colspan: "colSpan",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    controlslist: "controlsList",
    coords: "coords",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    data: "data",
    datetime: "dateTime",
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    enterkeyhint: "enterKeyHint",
    for: "htmlFor",
    form: "form",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    imagesizes: "imageSizes",
    imagesrcset: "imageSrcSet",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    integrity: "integrity",
    is: "is",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    nomodule: "noModule",
    nonce: "nonce",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    playsinline: "playsInline",
    poster: "poster",
    preload: "preload",
    profile: "profile",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap",
    // SVG
    about: "about",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    accumulate: "accumulate",
    additive: "additive",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    alphabetic: "alphabetic",
    amplitude: "amplitude",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    ascent: "ascent",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    azimuth: "azimuth",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    bbox: "bbox",
    begin: "begin",
    bias: "bias",
    by: "by",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clip: "clip",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    color: "color",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    cursor: "cursor",
    cx: "cx",
    cy: "cy",
    d: "d",
    datatype: "datatype",
    decelerate: "decelerate",
    descent: "descent",
    diffuseconstant: "diffuseConstant",
    direction: "direction",
    display: "display",
    divisor: "divisor",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    dur: "dur",
    dx: "dx",
    dy: "dy",
    edgemode: "edgeMode",
    elevation: "elevation",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    end: "end",
    exponent: "exponent",
    externalresourcesrequired: "externalResourcesRequired",
    fill: "fill",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filter: "filter",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    focusable: "focusable",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    format: "format",
    from: "from",
    fx: "fx",
    fy: "fy",
    g1: "g1",
    g2: "g2",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    hanging: "hanging",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    ideographic: "ideographic",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    in2: "in2",
    in: "in",
    inlist: "inlist",
    intercept: "intercept",
    k1: "k1",
    k2: "k2",
    k3: "k3",
    k4: "k4",
    k: "k",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    kerning: "kerning",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    local: "local",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    mask: "mask",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    mathematical: "mathematical",
    mode: "mode",
    numoctaves: "numOctaves",
    offset: "offset",
    opacity: "opacity",
    operator: "operator",
    order: "order",
    orient: "orient",
    orientation: "orientation",
    origin: "origin",
    overflow: "overflow",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    panose1: "panose1",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    points: "points",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    prefix: "prefix",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    property: "property",
    r: "r",
    radius: "radius",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    resource: "resource",
    restart: "restart",
    result: "result",
    results: "results",
    rotate: "rotate",
    rx: "rx",
    ry: "ry",
    scale: "scale",
    security: "security",
    seed: "seed",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    slope: "slope",
    spacing: "spacing",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    speed: "speed",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stemh: "stemh",
    stemv: "stemv",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    string: "string",
    stroke: "stroke",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    to: "to",
    transform: "transform",
    typeof: "typeof",
    u1: "u1",
    u2: "u2",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicode: "unicode",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    values: "values",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    version: "version",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    visibility: "visibility",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    vocab: "vocab",
    widths: "widths",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    x1: "x1",
    x2: "x2",
    x: "x",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    xmlns: "xmlns",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    y1: "y1",
    y2: "y2",
    y: "y",
    ychannelselector: "yChannelSelector",
    z: "z",
    zoomandpan: "zoomAndPan"
  }, Ct = function() {
  };
  {
    var Oe = {}, et = /^on./, mt = /^on[^A-Z]/, Sn = new RegExp("^(aria)-[" + $e + "]*$"), Ie = new RegExp("^(aria)[A-Z][" + $e + "]*$");
    Ct = function(n, a, l, p) {
      if (Y.call(Oe, a) && Oe[a])
        return !0;
      var v = a.toLowerCase();
      if (v === "onfocusin" || v === "onfocusout")
        return s("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Oe[a] = !0, !0;
      if (p != null) {
        var y = p.registrationNameDependencies, P = p.possibleRegistrationNames;
        if (y.hasOwnProperty(a))
          return !0;
        var D = P.hasOwnProperty(v) ? P[v] : null;
        if (D != null)
          return s("Invalid event handler property `%s`. Did you mean `%s`?", a, D), Oe[a] = !0, !0;
        if (et.test(a))
          return s("Unknown event handler property `%s`. It will be ignored.", a), Oe[a] = !0, !0;
      } else if (et.test(a))
        return mt.test(a) && s("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", a), Oe[a] = !0, !0;
      if (Sn.test(a) || Ie.test(a))
        return !0;
      if (v === "innerhtml")
        return s("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Oe[a] = !0, !0;
      if (v === "aria")
        return s("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Oe[a] = !0, !0;
      if (v === "is" && l !== null && l !== void 0 && typeof l != "string")
        return s("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof l), Oe[a] = !0, !0;
      if (typeof l == "number" && isNaN(l))
        return s("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", a), Oe[a] = !0, !0;
      var $ = On(a), q = $ !== null && $.type === X;
      if (Kn.hasOwnProperty(v)) {
        var J = Kn[v];
        if (J !== a)
          return s("Invalid DOM property `%s`. Did you mean `%s`?", a, J), Oe[a] = !0, !0;
      } else if (!q && a !== v)
        return s("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", a, v), Oe[a] = !0, !0;
      return typeof l == "boolean" && ft(a, l, $, !1) ? (l ? s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', l, a, a, l, a) : s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', l, a, a, l, a, a, a), Oe[a] = !0, !0) : q ? !0 : ft(a, l, $, !1) ? (Oe[a] = !0, !1) : ((l === "false" || l === "true") && $ !== null && $.type === le && (s("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", l, a, l === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', a, l), Oe[a] = !0), !0);
    };
  }
  var Et = function(n, a, l) {
    {
      var p = [];
      for (var v in a) {
        var y = Ct(n, v, a[v], l);
        y || p.push(v);
      }
      var P = p.map(function(D) {
        return "`" + D + "`";
      }).join(", ");
      p.length === 1 ? s("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", P, n) : p.length > 1 && s("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", P, n);
    }
  };
  function Nt(n, a, l) {
    St(n, a) || Et(n, a, l);
  }
  var Un = function() {
  };
  {
    var vr = /^(?:webkit|moz|o)[A-Z]/, hr = /^-ms-/, gr = /-(.)/g, pn = /;\s*$/, Cn = {}, kt = {}, Wt = !1, zn = !1, En = function(n) {
      return n.replace(gr, function(a, l) {
        return l.toUpperCase();
      });
    }, en = function(n) {
      Cn.hasOwnProperty(n) && Cn[n] || (Cn[n] = !0, s(
        "Unsupported style property %s. Did you mean %s?",
        n,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        En(n.replace(hr, "ms-"))
      ));
    }, $n = function(n) {
      Cn.hasOwnProperty(n) && Cn[n] || (Cn[n] = !0, s("Unsupported vendor-prefixed style property %s. Did you mean %s?", n, n.charAt(0).toUpperCase() + n.slice(1)));
    }, kn = function(n, a) {
      kt.hasOwnProperty(a) && kt[a] || (kt[a] = !0, s(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, n, a.replace(pn, "")));
    }, nt = function(n, a) {
      Wt || (Wt = !0, s("`NaN` is an invalid value for the `%s` css style property.", n));
    }, xr = function(n, a) {
      zn || (zn = !0, s("`Infinity` is an invalid value for the `%s` css style property.", n));
    };
    Un = function(n, a) {
      n.indexOf("-") > -1 ? en(n) : vr.test(n) ? $n(n) : pn.test(a) && kn(n, a), typeof a == "number" && (isNaN(a) ? nt(n, a) : isFinite(a) || xr(n, a));
    };
  }
  var Yt = Un, br = /["'&<>]/;
  function Gt(n) {
    B(n);
    var a = "" + n, l = br.exec(a);
    if (!l)
      return a;
    var p, v = "", y, P = 0;
    for (y = l.index; y < a.length; y++) {
      switch (a.charCodeAt(y)) {
        case 34:
          p = "&quot;";
          break;
        case 38:
          p = "&amp;";
          break;
        case 39:
          p = "&#x27;";
          break;
        case 60:
          p = "&lt;";
          break;
        case 62:
          p = "&gt;";
          break;
        default:
          continue;
      }
      P !== y && (v += a.substring(P, y)), P = y + 1, v += p;
    }
    return P !== y ? v + a.substring(P, y) : v;
  }
  function Te(n) {
    return typeof n == "boolean" || typeof n == "number" ? "" + n : Gt(n);
  }
  var tt = /([A-Z])/g, Tt = /^ms-/;
  function Rt(n) {
    return n.replace(tt, "-$1").toLowerCase().replace(Tt, "-ms-");
  }
  var Fe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, qt = !1;
  function yr(n) {
    !qt && Fe.test(n) && (qt = !0, s("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(n)));
  }
  var wr = Array.isArray;
  function E(n) {
    return wr(n);
  }
  var H = "<script>", G = "<\/script>", Z = '<script src="', re = '<script type="module" src="', ue = '" async=""><\/script>';
  function ie(n) {
    return B(n), ("" + n).replace(ne, De);
  }
  var ne = /(<\/|<)(s)(cript)/gi, De = function(n, a, l, p) {
    return "" + a + (l === "s" ? "\\u0073" : "\\u0053") + p;
  };
  function xe(n, a, l, p, v) {
    var y = n === void 0 ? "" : n, P = a === void 0 ? H : '<script nonce="' + Te(a) + '">', D = [];
    if (l !== void 0 && D.push(P, ie(l), G), p !== void 0)
      for (var $ = 0; $ < p.length; $++)
        D.push(Z, Te(p[$]), ue);
    if (v !== void 0)
      for (var q = 0; q < v.length; q++)
        D.push(re, Te(v[q]), ue);
    return {
      bootstrapChunks: D,
      startInlineScript: P,
      placeholderPrefix: y + "P:",
      segmentPrefix: y + "S:",
      boundaryPrefix: y + "B:",
      idPrefix: y,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1
    };
  }
  var he = 0, _e = 1, nn = 2, rt = 3, je = 4, Hn = 5, at = 6, it = 7;
  function Ge(n, a) {
    return {
      insertionMode: n,
      selectedValue: a
    };
  }
  function ot(n, a, l) {
    switch (a) {
      case "select":
        return Ge(_e, l.value != null ? l.value : l.defaultValue);
      case "svg":
        return Ge(nn, null);
      case "math":
        return Ge(rt, null);
      case "foreignObject":
        return Ge(_e, null);
      case "table":
        return Ge(je, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ge(Hn, null);
      case "colgroup":
        return Ge(it, null);
      case "tr":
        return Ge(at, null);
    }
    return n.insertionMode >= je || n.insertionMode === he ? Ge(_e, null) : n;
  }
  var Vt = null;
  function Xt(n) {
    var a = n.nextSuspenseID++;
    return n.boundaryPrefix + a.toString(16);
  }
  function Xe(n, a, l) {
    var p = n.idPrefix, v = ":" + p + "R" + a;
    return l > 0 && (v += "H" + l.toString(32)), v + ":";
  }
  function Zt(n) {
    return Te(n);
  }
  var Sr = "<!-- -->";
  function ua(n, a, l, p) {
    return a === "" ? p : (p && n.push(Sr), n.push(Zt(a)), !0);
  }
  function pa(n, a, l, p) {
    l && p && n.push(Sr);
  }
  var Cr = /* @__PURE__ */ new Map();
  function Er(n) {
    var a = Cr.get(n);
    if (a !== void 0)
      return a;
    var l = Te(Rt(n));
    return Cr.set(n, l), l;
  }
  var da = ' style="', At = ":", Jt = ";";
  function vt(n, a, l) {
    if (typeof l != "object")
      throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    var p = !0;
    for (var v in l)
      if (Y.call(l, v)) {
        var y = l[v];
        if (!(y == null || typeof y == "boolean" || y === "")) {
          var P = void 0, D = void 0, $ = v.indexOf("--") === 0;
          $ ? (P = Te(v), N(y, v), D = Te(("" + y).trim())) : (Yt(v, y), P = Er(v), typeof y == "number" ? y !== 0 && !Y.call(un, v) ? D = y + "px" : D = "" + y : (N(y, v), D = Te(("" + y).trim()))), p ? (p = !1, n.push(da, P, At, D)) : n.push(Jt, P, At, D);
        }
      }
    p || n.push(Bn);
  }
  var dn = " ", Tn = '="', Bn = '"', kr = '=""';
  function We(n, a, l, p) {
    switch (l) {
      case "style": {
        vt(n, a, p);
        return;
      }
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (
      // shouldIgnoreAttribute
      // We have already filtered out null/undefined and reserved words.
      !(l.length > 2 && (l[0] === "o" || l[0] === "O") && (l[1] === "n" || l[1] === "N"))
    ) {
      var v = On(l);
      if (v !== null) {
        switch (typeof p) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!v.acceptsBooleans)
              return;
        }
        var y = v.attributeName, P = y;
        switch (v.type) {
          case le:
            p && n.push(dn, P, kr);
            return;
          case Je:
            p === !0 ? n.push(dn, P, kr) : p === !1 || n.push(dn, P, Tn, Te(p), Bn);
            return;
          case cn:
            isNaN(p) || n.push(dn, P, Tn, Te(p), Bn);
            break;
          case Vn:
            !isNaN(p) && p >= 1 && n.push(dn, P, Tn, Te(p), Bn);
            break;
          default:
            v.sanitizeURL && (z(p, y), p = "" + p, yr(p)), n.push(dn, P, Tn, Te(p), Bn);
        }
      } else if (ln(l)) {
        switch (typeof p) {
          case "function":
          case "symbol":
            return;
          case "boolean": {
            var D = l.toLowerCase().slice(0, 5);
            if (D !== "data-" && D !== "aria-")
              return;
          }
        }
        n.push(dn, l, Tn, Te(p), Bn);
      }
    }
  }
  var He = ">", fn = "/>";
  function tn(n, a, l) {
    if (a != null) {
      if (l != null)
        throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
      if (typeof a != "object" || !("__html" in a))
        throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      var p = a.__html;
      p != null && (B(p), n.push("" + p));
    }
  }
  var Qt = !1, Me = !1, Rn = !1, Nn = !1, st = !1, Kt = !1, Tr = !1;
  function Rr(n, a) {
    {
      var l = n[a];
      if (l != null) {
        var p = E(l);
        n.multiple && !p ? s("The `%s` prop supplied to <select> must be an array if `multiple` is true.", a) : !n.multiple && p && s("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", a);
      }
    }
  }
  function Ar(n, a, l) {
    jn("select", a), Rr(a, "value"), Rr(a, "defaultValue"), a.value !== void 0 && a.defaultValue !== void 0 && !Rn && (s("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Rn = !0), n.push(rn("select"));
    var p = null, v = null;
    for (var y in a)
      if (Y.call(a, y)) {
        var P = a[y];
        if (P == null)
          continue;
        switch (y) {
          case "children":
            p = P;
            break;
          case "dangerouslySetInnerHTML":
            v = P;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            We(n, l, y, P);
            break;
        }
      }
    return n.push(He), tn(n, v, p), p;
  }
  function fa(n) {
    var a = "";
    return e.Children.forEach(n, function(l) {
      l != null && (a += l, !st && typeof l != "string" && typeof l != "number" && (st = !0, s("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }), a;
  }
  var _t = ' selected=""';
  function _r(n, a, l, p) {
    var v = p.selectedValue;
    n.push(rn("option"));
    var y = null, P = null, D = null, $ = null;
    for (var q in a)
      if (Y.call(a, q)) {
        var J = a[q];
        if (J == null)
          continue;
        switch (q) {
          case "children":
            y = J;
            break;
          case "selected":
            D = J, Tr || (s("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Tr = !0);
            break;
          case "dangerouslySetInnerHTML":
            $ = J;
            break;
          case "value":
            P = J;
          default:
            We(n, l, q, J);
            break;
        }
      }
    if (v != null) {
      var ee;
      if (P !== null ? (z(P, "value"), ee = "" + P) : ($ !== null && (Kt || (Kt = !0, s("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), ee = fa(y)), E(v))
        for (var Se = 0; Se < v.length; Se++) {
          z(v[Se], "value");
          var Ne = "" + v[Se];
          if (Ne === ee) {
            n.push(_t);
            break;
          }
        }
      else
        z(v, "select.value"), "" + v === ee && n.push(_t);
    } else
      D && n.push(_t);
    return n.push(He), tn(n, $, y), y;
  }
  function Pr(n, a, l) {
    jn("input", a), a.checked !== void 0 && a.defaultChecked !== void 0 && !Me && (s("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", a.type), Me = !0), a.value !== void 0 && a.defaultValue !== void 0 && !Qt && (s("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", a.type), Qt = !0), n.push(rn("input"));
    var p = null, v = null, y = null, P = null;
    for (var D in a)
      if (Y.call(a, D)) {
        var $ = a[D];
        if ($ == null)
          continue;
        switch (D) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          case "defaultChecked":
            P = $;
            break;
          case "defaultValue":
            v = $;
            break;
          case "checked":
            y = $;
            break;
          case "value":
            p = $;
            break;
          default:
            We(n, l, D, $);
            break;
        }
      }
    return y !== null ? We(n, l, "checked", y) : P !== null && We(n, l, "checked", P), p !== null ? We(n, l, "value", p) : v !== null && We(n, l, "value", v), n.push(fn), null;
  }
  function si(n, a, l) {
    jn("textarea", a), a.value !== void 0 && a.defaultValue !== void 0 && !Nn && (s("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Nn = !0), n.push(rn("textarea"));
    var p = null, v = null, y = null;
    for (var P in a)
      if (Y.call(a, P)) {
        var D = a[P];
        if (D == null)
          continue;
        switch (P) {
          case "children":
            y = D;
            break;
          case "value":
            p = D;
            break;
          case "defaultValue":
            v = D;
            break;
          case "dangerouslySetInnerHTML":
            throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
          default:
            We(n, l, P, D);
            break;
        }
      }
    if (p === null && v !== null && (p = v), n.push(He), y != null) {
      if (s("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), p != null)
        throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
      if (E(y)) {
        if (y.length > 1)
          throw new Error("<textarea> can only have at most one child.");
        B(y[0]), p = "" + y[0];
      }
      B(y), p = "" + y;
    }
    return typeof p == "string" && p[0] === `
` && n.push(nr), p !== null && (z(p, "value"), n.push(Zt("" + p))), null;
  }
  function ma(n, a, l, p) {
    n.push(rn(l));
    for (var v in a)
      if (Y.call(a, v)) {
        var y = a[v];
        if (y == null)
          continue;
        switch (v) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw new Error(l + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            We(n, p, v, y);
            break;
        }
      }
    return n.push(fn), null;
  }
  function er(n, a, l) {
    n.push(rn("menuitem"));
    for (var p in a)
      if (Y.call(a, p)) {
        var v = a[p];
        if (v == null)
          continue;
        switch (p) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
          default:
            We(n, l, p, v);
            break;
        }
      }
    return n.push(He), null;
  }
  function ci(n, a, l) {
    n.push(rn("title"));
    var p = null;
    for (var v in a)
      if (Y.call(a, v)) {
        var y = a[v];
        if (y == null)
          continue;
        switch (v) {
          case "children":
            p = y;
            break;
          case "dangerouslySetInnerHTML":
            throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
          default:
            We(n, l, v, y);
            break;
        }
      }
    n.push(He);
    {
      var P = Array.isArray(p) && p.length < 2 ? p[0] || null : p;
      Array.isArray(p) && p.length > 1 ? s("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : P != null && P.$$typeof != null ? s("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : P != null && typeof P != "string" && typeof P != "number" && s("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
    }
    return p;
  }
  function Or(n, a, l, p) {
    n.push(rn(l));
    var v = null, y = null;
    for (var P in a)
      if (Y.call(a, P)) {
        var D = a[P];
        if (D == null)
          continue;
        switch (P) {
          case "children":
            v = D;
            break;
          case "dangerouslySetInnerHTML":
            y = D;
            break;
          default:
            We(n, p, P, D);
            break;
        }
      }
    return n.push(He), tn(n, y, v), typeof v == "string" ? (n.push(Zt(v)), null) : v;
  }
  function li(n, a, l, p) {
    n.push(rn(l));
    var v = null, y = null;
    for (var P in a)
      if (Y.call(a, P)) {
        var D = a[P];
        if (D == null)
          continue;
        switch (P) {
          case "children":
            v = D;
            break;
          case "dangerouslySetInnerHTML":
            y = D;
            break;
          case "style":
            vt(n, p, D);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            ln(P) && typeof D != "function" && typeof D != "symbol" && n.push(dn, P, Tn, Te(D), Bn);
            break;
        }
      }
    return n.push(He), tn(n, y, v), v;
  }
  var nr = `
`;
  function tr(n, a, l, p) {
    n.push(rn(l));
    var v = null, y = null;
    for (var P in a)
      if (Y.call(a, P)) {
        var D = a[P];
        if (D == null)
          continue;
        switch (P) {
          case "children":
            v = D;
            break;
          case "dangerouslySetInnerHTML":
            y = D;
            break;
          default:
            We(n, p, P, D);
            break;
        }
      }
    if (n.push(He), y != null) {
      if (v != null)
        throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
      if (typeof y != "object" || !("__html" in y))
        throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      var $ = y.__html;
      $ != null && (typeof $ == "string" && $.length > 0 && $[0] === `
` ? n.push(nr, $) : (B($), n.push("" + $)));
    }
    return typeof v == "string" && v[0] === `
` && n.push(nr), v;
  }
  var ui = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, An = /* @__PURE__ */ new Map();
  function rn(n) {
    var a = An.get(n);
    if (a === void 0) {
      if (!ui.test(n))
        throw new Error("Invalid tag: " + n);
      a = "<" + n, An.set(n, a);
    }
    return a;
  }
  var Fr = "<!DOCTYPE html>";
  function rr(n, a, l, p, v) {
    switch (Jn(a, l), Qn(a, l), Nt(a, l, null), !l.suppressContentEditableWarning && l.contentEditable && l.children != null && s("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), v.insertionMode !== nn && v.insertionMode !== rt && a.indexOf("-") === -1 && typeof l.is != "string" && a.toLowerCase() !== a && s("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", a), a) {
      case "select":
        return Ar(n, l, p);
      case "option":
        return _r(n, l, p, v);
      case "textarea":
        return si(n, l, p);
      case "input":
        return Pr(n, l, p);
      case "menuitem":
        return er(n, l, p);
      case "title":
        return ci(n, l, p);
      case "listing":
      case "pre":
        return tr(n, l, a, p);
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return ma(n, l, a, p);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Or(n, l, a, p);
      case "html":
        return v.insertionMode === he && n.push(Fr), Or(n, l, a, p);
      default:
        return a.indexOf("-") === -1 && typeof l.is != "string" ? Or(n, l, a, p) : li(n, l, a, p);
    }
  }
  var jr = "</", ar = ">";
  function Ze(n, a, l) {
    switch (a) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        n.push(jr, a, ar);
    }
  }
  function pi(n, a) {
    for (var l = a.bootstrapChunks, p = 0; p < l.length - 1; p++)
      w(n, l[p]);
    return p < l.length ? C(n, l[p]) : !0;
  }
  var di = '<template id="', fi = '"></template>';
  function mi(n, a, l) {
    w(n, di), w(n, a.placeholderPrefix);
    var p = l.toString(16);
    return w(n, p), C(n, fi);
  }
  var f = "<!--$-->", T = '<!--$?--><template id="', M = '"></template>', U = "<!--$!-->", W = "<!--/$-->", Q = "<template", V = '"', K = ' data-dgst="', se = ' data-msg="', de = ' data-stck="', be = "></template>";
  function ve(n, a) {
    return C(n, f);
  }
  function ye(n, a, l) {
    if (w(n, T), l === null)
      throw new Error("An ID must have been assigned before we can complete the boundary.");
    return w(n, l), C(n, M);
  }
  function Pe(n, a, l, p, v) {
    var y;
    return y = C(n, U), w(n, Q), l && (w(n, K), w(n, Te(l)), w(n, V)), p && (w(n, se), w(n, Te(p)), w(n, V)), v && (w(n, de), w(n, Te(v)), w(n, V)), y = C(n, be), y;
  }
  function Le(n, a) {
    return C(n, W);
  }
  function Pt(n, a) {
    return C(n, W);
  }
  function Ir(n, a) {
    return C(n, W);
  }
  var Dr = '<div hidden id="', vi = '">', va = "</div>", ha = '<svg aria-hidden="true" style="display:none" id="', ga = '">', hi = "</svg>", Ps = '<math aria-hidden="true" style="display:none" id="', Os = '">', Fs = "</math>", js = '<table hidden id="', Is = '">', Ds = "</table>", Ms = '<table hidden><tbody id="', Ls = '">', Us = "</tbody></table>", zs = '<table hidden><tr id="', $s = '">', Hs = "</tr></table>", Bs = '<table hidden><colgroup id="', Ns = '">', Ws = "</colgroup></table>";
  function Ys(n, a, l, p) {
    switch (l.insertionMode) {
      case he:
      case _e:
        return w(n, Dr), w(n, a.segmentPrefix), w(n, p.toString(16)), C(n, vi);
      case nn:
        return w(n, ha), w(n, a.segmentPrefix), w(n, p.toString(16)), C(n, ga);
      case rt:
        return w(n, Ps), w(n, a.segmentPrefix), w(n, p.toString(16)), C(n, Os);
      case je:
        return w(n, js), w(n, a.segmentPrefix), w(n, p.toString(16)), C(n, Is);
      case Hn:
        return w(n, Ms), w(n, a.segmentPrefix), w(n, p.toString(16)), C(n, Ls);
      case at:
        return w(n, zs), w(n, a.segmentPrefix), w(n, p.toString(16)), C(n, $s);
      case it:
        return w(n, Bs), w(n, a.segmentPrefix), w(n, p.toString(16)), C(n, Ns);
      default:
        throw new Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function Gs(n, a) {
    switch (a.insertionMode) {
      case he:
      case _e:
        return C(n, va);
      case nn:
        return C(n, hi);
      case rt:
        return C(n, Fs);
      case je:
        return C(n, Ds);
      case Hn:
        return C(n, Us);
      case at:
        return C(n, Hs);
      case it:
        return C(n, Ws);
      default:
        throw new Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  var qs = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Vs = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', Xs = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', Zs = qs + ';$RS("', Js = '$RS("', Qs = '","', Ks = '")<\/script>';
  function ec(n, a, l) {
    w(n, a.startInlineScript), a.sentCompleteSegmentFunction ? w(n, Js) : (a.sentCompleteSegmentFunction = !0, w(n, Zs)), w(n, a.segmentPrefix);
    var p = l.toString(16);
    return w(n, p), w(n, Qs), w(n, a.placeholderPrefix), w(n, p), C(n, Ks);
  }
  var nc = Vs + ';$RC("', tc = '$RC("', rc = '","', ac = '")<\/script>';
  function ic(n, a, l, p) {
    if (w(n, a.startInlineScript), a.sentCompleteBoundaryFunction ? w(n, tc) : (a.sentCompleteBoundaryFunction = !0, w(n, nc)), l === null)
      throw new Error("An ID must have been assigned before we can complete the boundary.");
    var v = p.toString(16);
    return w(n, l), w(n, rc), w(n, a.segmentPrefix), w(n, v), C(n, ac);
  }
  var oc = Xs + ';$RX("', sc = '$RX("', cc = '"', lc = ")<\/script>", gi = ",";
  function uc(n, a, l, p, v, y) {
    if (w(n, a.startInlineScript), a.sentClientRenderFunction ? w(n, sc) : (a.sentClientRenderFunction = !0, w(n, oc)), l === null)
      throw new Error("An ID must have been assigned before we can complete the boundary.");
    return w(n, l), w(n, cc), (p || v || y) && (w(n, gi), w(n, xi(p || ""))), (v || y) && (w(n, gi), w(n, xi(v || ""))), y && (w(n, gi), w(n, xi(y))), C(n, lc);
  }
  var pc = /[<\u2028\u2029]/g;
  function xi(n) {
    var a = JSON.stringify(n);
    return a.replace(pc, function(l) {
      switch (l) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  function dc(n, a) {
    var l = xe(a, void 0);
    return {
      // Keep this in sync with ReactDOMServerFormatConfig
      bootstrapChunks: l.bootstrapChunks,
      startInlineScript: l.startInlineScript,
      placeholderPrefix: l.placeholderPrefix,
      segmentPrefix: l.segmentPrefix,
      boundaryPrefix: l.boundaryPrefix,
      idPrefix: l.idPrefix,
      nextSuspenseID: l.nextSuspenseID,
      sentCompleteSegmentFunction: l.sentCompleteSegmentFunction,
      sentCompleteBoundaryFunction: l.sentCompleteBoundaryFunction,
      sentClientRenderFunction: l.sentClientRenderFunction,
      // This is an extra field for the legacy renderer
      generateStaticMarkup: n
    };
  }
  function bi() {
    return {
      insertionMode: _e,
      // We skip the root mode because we don't want to emit the DOCTYPE in legacy mode.
      selectedValue: null
    };
  }
  function go(n, a, l, p) {
    return l.generateStaticMarkup ? (n.push(Te(a)), !1) : ua(n, a, l, p);
  }
  function xo(n, a, l, p) {
    if (!a.generateStaticMarkup)
      return pa(n, a, l, p);
  }
  function yi(n, a) {
    return a.generateStaticMarkup ? !0 : ve(n);
  }
  function mn(n, a, l, p, v) {
    return a.generateStaticMarkup ? !0 : Pe(n, a, l, p, v);
  }
  function fc(n, a) {
    return a.generateStaticMarkup ? !0 : Le(n);
  }
  function bo(n, a) {
    return a.generateStaticMarkup ? !0 : Ir(n);
  }
  var an = Object.assign, yo = Symbol.for("react.element"), wi = Symbol.for("react.portal"), xa = Symbol.for("react.fragment"), ba = Symbol.for("react.strict_mode"), ya = Symbol.for("react.profiler"), Mr = Symbol.for("react.provider"), Lr = Symbol.for("react.context"), Ur = Symbol.for("react.forward_ref"), ir = Symbol.for("react.suspense"), Si = Symbol.for("react.suspense_list"), Ci = Symbol.for("react.memo"), wa = Symbol.for("react.lazy"), mc = Symbol.for("react.scope"), wo = Symbol.for("react.debug_trace_mode"), vc = Symbol.for("react.legacy_hidden"), hc = Symbol.for("react.default_value"), So = Symbol.iterator, Co = "@@iterator";
  function Re(n) {
    if (n === null || typeof n != "object")
      return null;
    var a = So && n[So] || n[Co];
    return typeof a == "function" ? a : null;
  }
  function zr(n, a, l) {
    var p = n.displayName;
    if (p)
      return p;
    var v = a.displayName || a.name || "";
    return v !== "" ? l + "(" + v + ")" : l;
  }
  function Ei(n) {
    return n.displayName || "Context";
  }
  function Ce(n) {
    if (n == null)
      return null;
    if (typeof n.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case xa:
        return "Fragment";
      case wi:
        return "Portal";
      case ya:
        return "Profiler";
      case ba:
        return "StrictMode";
      case ir:
        return "Suspense";
      case Si:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Lr:
          var a = n;
          return Ei(a) + ".Consumer";
        case Mr:
          var l = n;
          return Ei(l._context) + ".Provider";
        case Ur:
          return zr(n, n.render, "ForwardRef");
        case Ci:
          var p = n.displayName || null;
          return p !== null ? p : Ce(n.type) || "Memo";
        case wa: {
          var v = n, y = v._payload, P = v._init;
          try {
            return Ce(P(y));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var or = 0, ki, Ti, Ri, Ai, _i, Eo, ko;
  function Sa() {
  }
  Sa.__reactDisabledLog = !0;
  function Pi() {
    {
      if (or === 0) {
        ki = console.log, Ti = console.info, Ri = console.warn, Ai = console.error, _i = console.group, Eo = console.groupCollapsed, ko = console.groupEnd;
        var n = {
          configurable: !0,
          enumerable: !0,
          value: Sa,
          writable: !0
        };
        Object.defineProperties(console, {
          info: n,
          log: n,
          warn: n,
          error: n,
          group: n,
          groupCollapsed: n,
          groupEnd: n
        });
      }
      or++;
    }
  }
  function $r() {
    {
      if (or--, or === 0) {
        var n = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: an({}, n, {
            value: ki
          }),
          info: an({}, n, {
            value: Ti
          }),
          warn: an({}, n, {
            value: Ri
          }),
          error: an({}, n, {
            value: Ai
          }),
          group: an({}, n, {
            value: _i
          }),
          groupCollapsed: an({}, n, {
            value: Eo
          }),
          groupEnd: an({}, n, {
            value: ko
          })
        });
      }
      or < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Hr = i.ReactCurrentDispatcher, sr;
  function Br(n, a, l) {
    {
      if (sr === void 0)
        try {
          throw Error();
        } catch (v) {
          var p = v.stack.trim().match(/\n( *(at )?)/);
          sr = p && p[1] || "";
        }
      return `
` + sr + n;
    }
  }
  var Nr = !1, Ca;
  {
    var To = typeof WeakMap == "function" ? WeakMap : Map;
    Ca = new To();
  }
  function Oi(n, a) {
    if (!n || Nr)
      return "";
    {
      var l = Ca.get(n);
      if (l !== void 0)
        return l;
    }
    var p;
    Nr = !0;
    var v = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var y;
    y = Hr.current, Hr.current = null, Pi();
    try {
      if (a) {
        var P = function() {
          throw Error();
        };
        if (Object.defineProperty(P.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(P, []);
          } catch (xn) {
            p = xn;
          }
          Reflect.construct(n, [], P);
        } else {
          try {
            P.call();
          } catch (xn) {
            p = xn;
          }
          n.call(P.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (xn) {
          p = xn;
        }
        n();
      }
    } catch (xn) {
      if (xn && p && typeof xn.stack == "string") {
        for (var D = xn.stack.split(`
`), $ = p.stack.split(`
`), q = D.length - 1, J = $.length - 1; q >= 1 && J >= 0 && D[q] !== $[J]; )
          J--;
        for (; q >= 1 && J >= 0; q--, J--)
          if (D[q] !== $[J]) {
            if (q !== 1 || J !== 1)
              do
                if (q--, J--, J < 0 || D[q] !== $[J]) {
                  var ee = `
` + D[q].replace(" at new ", " at ");
                  return n.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", n.displayName)), typeof n == "function" && Ca.set(n, ee), ee;
                }
              while (q >= 1 && J >= 0);
            break;
          }
      }
    } finally {
      Nr = !1, Hr.current = y, $r(), Error.prepareStackTrace = v;
    }
    var Se = n ? n.displayName || n.name : "", Ne = Se ? Br(Se) : "";
    return typeof n == "function" && Ca.set(n, Ne), Ne;
  }
  function Fi(n, a, l) {
    return Oi(n, !0);
  }
  function ji(n, a, l) {
    return Oi(n, !1);
  }
  function Ro(n) {
    var a = n.prototype;
    return !!(a && a.isReactComponent);
  }
  function cr(n, a, l) {
    if (n == null)
      return "";
    if (typeof n == "function")
      return Oi(n, Ro(n));
    if (typeof n == "string")
      return Br(n);
    switch (n) {
      case ir:
        return Br("Suspense");
      case Si:
        return Br("SuspenseList");
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ur:
          return ji(n.render);
        case Ci:
          return cr(n.type, a, l);
        case wa: {
          var p = n, v = p._payload, y = p._init;
          try {
            return cr(y(v), a, l);
          } catch {
          }
        }
      }
    return "";
  }
  var Ii = {}, Ea = i.ReactDebugCurrentFrame;
  function Ot(n) {
    if (n) {
      var a = n._owner, l = cr(n.type, n._source, a ? a.type : null);
      Ea.setExtraStackFrame(l);
    } else
      Ea.setExtraStackFrame(null);
  }
  function Di(n, a, l, p, v) {
    {
      var y = Function.call.bind(Y);
      for (var P in n)
        if (y(n, P)) {
          var D = void 0;
          try {
            if (typeof n[P] != "function") {
              var $ = Error((p || "React class") + ": " + l + " type `" + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[P] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw $.name = "Invariant Violation", $;
            }
            D = n[P](a, P, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (q) {
            D = q;
          }
          D && !(D instanceof Error) && (Ot(v), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, P, typeof D), Ot(null)), D instanceof Error && !(D.message in Ii) && (Ii[D.message] = !0, Ot(v), s("Failed %s type: %s", l, D.message), Ot(null));
        }
    }
  }
  var Mi;
  Mi = {};
  var ht = {};
  Object.freeze(ht);
  function Ao(n, a) {
    {
      var l = n.contextTypes;
      if (!l)
        return ht;
      var p = {};
      for (var v in l)
        p[v] = a[v];
      {
        var y = Ce(n) || "Unknown";
        Di(l, p, "context", y);
      }
      return p;
    }
  }
  function Ft(n, a, l, p) {
    {
      if (typeof n.getChildContext != "function") {
        {
          var v = Ce(a) || "Unknown";
          Mi[v] || (Mi[v] = !0, s("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", v, v));
        }
        return l;
      }
      var y = n.getChildContext();
      for (var P in y)
        if (!(P in p))
          throw new Error((Ce(a) || "Unknown") + '.getChildContext(): key "' + P + '" is not defined in childContextTypes.');
      {
        var D = Ce(a) || "Unknown";
        Di(p, y, "child context", D);
      }
      return an({}, l, y);
    }
  }
  var jt;
  jt = {};
  var Li = null, Wn = null;
  function ka(n) {
    n.context._currentValue2 = n.parentValue;
  }
  function Ta(n) {
    n.context._currentValue2 = n.value;
  }
  function Wr(n, a) {
    if (n !== a) {
      ka(n);
      var l = n.parent, p = a.parent;
      if (l === null) {
        if (p !== null)
          throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
      } else {
        if (p === null)
          throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        Wr(l, p);
      }
      Ta(a);
    }
  }
  function Ui(n) {
    ka(n);
    var a = n.parent;
    a !== null && Ui(a);
  }
  function Yr(n) {
    var a = n.parent;
    a !== null && Yr(a), Ta(n);
  }
  function _o(n, a) {
    ka(n);
    var l = n.parent;
    if (l === null)
      throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    l.depth === a.depth ? Wr(l, a) : _o(l, a);
  }
  function Po(n, a) {
    var l = a.parent;
    if (l === null)
      throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    n.depth === l.depth ? Wr(n, l) : Po(n, l), Ta(a);
  }
  function Ra(n) {
    var a = Wn, l = n;
    a !== l && (a === null ? Yr(l) : l === null ? Ui(a) : a.depth === l.depth ? Wr(a, l) : a.depth > l.depth ? _o(a, l) : Po(a, l), Wn = l);
  }
  function Gr(n, a) {
    var l;
    l = n._currentValue2, n._currentValue2 = a, n._currentRenderer2 !== void 0 && n._currentRenderer2 !== null && n._currentRenderer2 !== jt && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer2 = jt;
    var p = Wn, v = {
      parent: p,
      depth: p === null ? 0 : p.depth + 1,
      context: n,
      parentValue: l,
      value: a
    };
    return Wn = v, v;
  }
  function zi(n) {
    var a = Wn;
    if (a === null)
      throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
    a.context !== n && s("The parent context is not the expected context. This is probably a bug in React.");
    {
      var l = a.parentValue;
      l === hc ? a.context._currentValue2 = a.context._defaultValue : a.context._currentValue2 = l, n._currentRenderer2 !== void 0 && n._currentRenderer2 !== null && n._currentRenderer2 !== jt && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), n._currentRenderer2 = jt;
    }
    return Wn = a.parent;
  }
  function gc() {
    return Wn;
  }
  function lr(n) {
    var a = n._currentValue2;
    return a;
  }
  function Aa(n) {
    return n._reactInternals;
  }
  function $i(n, a) {
    n._reactInternals = a;
  }
  var _a = {}, Pa = {}, qr, Oa, ur, Vr, Fa, pr, ja, Ia, Da;
  {
    qr = /* @__PURE__ */ new Set(), Oa = /* @__PURE__ */ new Set(), ur = /* @__PURE__ */ new Set(), ja = /* @__PURE__ */ new Set(), Vr = /* @__PURE__ */ new Set(), Ia = /* @__PURE__ */ new Set(), Da = /* @__PURE__ */ new Set();
    var Oo = /* @__PURE__ */ new Set();
    pr = function(n, a) {
      if (!(n === null || typeof n == "function")) {
        var l = a + "_" + n;
        Oo.has(l) || (Oo.add(l), s("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a, n));
      }
    }, Fa = function(n, a) {
      if (a === void 0) {
        var l = Ce(n) || "Component";
        Vr.has(l) || (Vr.add(l), s("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", l));
      }
    };
  }
  function Fo(n, a) {
    {
      var l = n.constructor, p = l && Ce(l) || "ReactClass", v = p + "." + a;
      if (_a[v])
        return;
      s(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, a, a, p), _a[v] = !0;
    }
  }
  var jo = {
    isMounted: function(n) {
      return !1;
    },
    enqueueSetState: function(n, a, l) {
      var p = Aa(n);
      p.queue === null ? Fo(n, "setState") : (p.queue.push(a), l != null && pr(l, "setState"));
    },
    enqueueReplaceState: function(n, a, l) {
      var p = Aa(n);
      p.replace = !0, p.queue = [a], l != null && pr(l, "setState");
    },
    enqueueForceUpdate: function(n, a) {
      var l = Aa(n);
      l.queue === null ? Fo(n, "forceUpdate") : a != null && pr(a, "setState");
    }
  };
  function xc(n, a, l, p, v) {
    var y = l(v, p);
    Fa(a, y);
    var P = y == null ? p : an({}, p, y);
    return P;
  }
  function bc(n, a, l) {
    var p = ht, v = n.contextType;
    if ("contextType" in n) {
      var y = (
        // Allow null for conditional declaration
        v === null || v !== void 0 && v.$$typeof === Lr && v._context === void 0
      );
      if (!y && !Da.has(n)) {
        Da.add(n);
        var P = "";
        v === void 0 ? P = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof v != "object" ? P = " However, it is set to a " + typeof v + "." : v.$$typeof === Mr ? P = " Did you accidentally pass the Context.Provider instead?" : v._context !== void 0 ? P = " Did you accidentally pass the Context.Consumer instead?" : P = " However, it is set to an object with keys {" + Object.keys(v).join(", ") + "}.", s("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Ce(n) || "Component", P);
      }
    }
    typeof v == "object" && v !== null ? p = lr(v) : p = l;
    var D = new n(a, p);
    {
      if (typeof n.getDerivedStateFromProps == "function" && (D.state === null || D.state === void 0)) {
        var $ = Ce(n) || "Component";
        qr.has($) || (qr.add($), s("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", $, D.state === null ? "null" : "undefined", $));
      }
      if (typeof n.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
        var q = null, J = null, ee = null;
        if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? q = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (q = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? J = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && (J = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), q !== null || J !== null || ee !== null) {
          var Se = Ce(n) || "Component", Ne = typeof n.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          ur.has(Se) || (ur.add(Se), s(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Se, Ne, q !== null ? `
  ` + q : "", J !== null ? `
  ` + J : "", ee !== null ? `
  ` + ee : ""));
        }
      }
    }
    return D;
  }
  function Io(n, a, l) {
    {
      var p = Ce(a) || "Component", v = n.render;
      v || (a.prototype && typeof a.prototype.render == "function" ? s("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", p) : s("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", p)), n.getInitialState && !n.getInitialState.isReactClassApproved && !n.state && s("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", p), n.getDefaultProps && !n.getDefaultProps.isReactClassApproved && s("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", p), n.propTypes && s("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", p), n.contextType && s("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", p), n.contextTypes && s("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", p), a.contextType && a.contextTypes && !Ia.has(a) && (Ia.add(a), s("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", p)), typeof n.componentShouldUpdate == "function" && s("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", p), a.prototype && a.prototype.isPureReactComponent && typeof n.shouldComponentUpdate < "u" && s("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Ce(a) || "A pure component"), typeof n.componentDidUnmount == "function" && s("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", p), typeof n.componentDidReceiveProps == "function" && s("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", p), typeof n.componentWillRecieveProps == "function" && s("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", p), typeof n.UNSAFE_componentWillRecieveProps == "function" && s("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", p);
      var y = n.props !== l;
      n.props !== void 0 && y && s("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", p, p), n.defaultProps && s("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", p, p), typeof n.getSnapshotBeforeUpdate == "function" && typeof n.componentDidUpdate != "function" && !Oa.has(a) && (Oa.add(a), s("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Ce(a))), typeof n.getDerivedStateFromProps == "function" && s("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", p), typeof n.getDerivedStateFromError == "function" && s("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", p), typeof a.getSnapshotBeforeUpdate == "function" && s("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", p);
      var P = n.state;
      P && (typeof P != "object" || E(P)) && s("%s.state: must be set to an object or null", p), typeof n.getChildContext == "function" && typeof a.childContextTypes != "object" && s("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", p);
    }
  }
  function yc(n, a) {
    var l = a.state;
    if (typeof a.componentWillMount == "function") {
      if (a.componentWillMount.__suppressDeprecationWarning !== !0) {
        var p = Ce(n) || "Unknown";
        Pa[p] || (c(
          // keep this warning in sync with ReactStrictModeWarning.js
          `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
          p
        ), Pa[p] = !0);
      }
      a.componentWillMount();
    }
    typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), l !== a.state && (s("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ce(n) || "Component"), jo.enqueueReplaceState(a, a.state, null));
  }
  function wc(n, a, l, p) {
    if (n.queue !== null && n.queue.length > 0) {
      var v = n.queue, y = n.replace;
      if (n.queue = null, n.replace = !1, y && v.length === 1)
        a.state = v[0];
      else {
        for (var P = y ? v[0] : a.state, D = !0, $ = y ? 1 : 0; $ < v.length; $++) {
          var q = v[$], J = typeof q == "function" ? q.call(a, P, l, p) : q;
          J != null && (D ? (D = !1, P = an({}, P, J)) : an(P, J));
        }
        a.state = P;
      }
    } else
      n.queue = null;
  }
  function Ma(n, a, l, p) {
    Io(n, a, l);
    var v = n.state !== void 0 ? n.state : null;
    n.updater = jo, n.props = l, n.state = v;
    var y = {
      queue: [],
      replace: !1
    };
    $i(n, y);
    var P = a.contextType;
    if (typeof P == "object" && P !== null ? n.context = lr(P) : n.context = p, n.state === l) {
      var D = Ce(a) || "Component";
      ja.has(D) || (ja.add(D), s("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", D));
    }
    var $ = a.getDerivedStateFromProps;
    typeof $ == "function" && (n.state = xc(n, a, $, v, l)), typeof a.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function") && (yc(a, n), wc(y, n, l, p));
  }
  var La = {
    id: 1,
    overflow: ""
  };
  function Sc(n) {
    var a = n.overflow, l = n.id, p = l & ~Cc(l);
    return p.toString(32) + a;
  }
  function Hi(n, a, l) {
    var p = n.id, v = n.overflow, y = Ua(p) - 1, P = p & ~(1 << y), D = l + 1, $ = Ua(a) + y;
    if ($ > 30) {
      var q = y - y % 5, J = (1 << q) - 1, ee = (P & J).toString(32), Se = P >> q, Ne = y - q, xn = Ua(a) + Ne, ts = D << Ne, rs = ts | Se, as = ee + v;
      return {
        id: 1 << xn | rs,
        overflow: as
      };
    } else {
      var ei = D << y, $p = ei | P, Hp = v;
      return {
        id: 1 << $ | $p,
        overflow: Hp
      };
    }
  }
  function Ua(n) {
    return 32 - Ec(n);
  }
  function Cc(n) {
    return 1 << Ua(n) - 1;
  }
  var Ec = Math.clz32 ? Math.clz32 : ct, kc = Math.log, Tc = Math.LN2;
  function ct(n) {
    var a = n >>> 0;
    return a === 0 ? 32 : 31 - (kc(a) / Tc | 0) | 0;
  }
  function Bi(n, a) {
    return n === a && (n !== 0 || 1 / n === 1 / a) || n !== n && a !== a;
  }
  var za = typeof Object.is == "function" ? Object.is : Bi, ce = null, It = null, Dt = null, fe = null, vn = !1, Mt = !1, $a = 0, Be = null, lt = 0, Lt = 25, Yn = !1, Ut;
  function ut() {
    if (ce === null)
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    return Yn && s("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), ce;
  }
  function Rc(n, a) {
    if (a === null)
      return s("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Ut), !1;
    n.length !== a.length && s(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Ut, "[" + n.join(", ") + "]", "[" + a.join(", ") + "]");
    for (var l = 0; l < a.length && l < n.length; l++)
      if (!za(n[l], a[l]))
        return !1;
    return !0;
  }
  function Do() {
    if (lt > 0)
      throw new Error("Rendered more hooks than during the previous render");
    return {
      memoizedState: null,
      queue: null,
      next: null
    };
  }
  function Ha() {
    return fe === null ? Dt === null ? (vn = !1, Dt = fe = Do()) : (vn = !0, fe = Dt) : fe.next === null ? (vn = !1, fe = fe.next = Do()) : (vn = !0, fe = fe.next), fe;
  }
  function Ni(n, a) {
    ce = a, It = n, Yn = !1, $a = 0;
  }
  function Ac(n, a, l, p) {
    for (; Mt; )
      Mt = !1, $a = 0, lt += 1, fe = null, l = n(a, p);
    return Xr(), l;
  }
  function Mo() {
    var n = $a !== 0;
    return n;
  }
  function Xr() {
    Yn = !1, ce = null, It = null, Mt = !1, Dt = null, lt = 0, Be = null, fe = null;
  }
  function _c(n) {
    return Yn && s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), lr(n);
  }
  function Lo(n) {
    return Ut = "useContext", ut(), lr(n);
  }
  function Ba(n, a) {
    return typeof a == "function" ? a(n) : a;
  }
  function Pc(n) {
    return Ut = "useState", Uo(
      Ba,
      // useReducer has a special case to support lazy useState initializers
      n
    );
  }
  function Uo(n, a, l) {
    if (n !== Ba && (Ut = "useReducer"), ce = ut(), fe = Ha(), vn) {
      var p = fe.queue, v = p.dispatch;
      if (Be !== null) {
        var y = Be.get(p);
        if (y !== void 0) {
          Be.delete(p);
          var P = fe.memoizedState, D = y;
          do {
            var $ = D.action;
            Yn = !0, P = n(P, $), Yn = !1, D = D.next;
          } while (D !== null);
          return fe.memoizedState = P, [P, v];
        }
      }
      return [fe.memoizedState, v];
    } else {
      Yn = !0;
      var q;
      n === Ba ? q = typeof a == "function" ? a() : a : q = l !== void 0 ? l(a) : a, Yn = !1, fe.memoizedState = q;
      var J = fe.queue = {
        last: null,
        dispatch: null
      }, ee = J.dispatch = jc.bind(null, ce, J);
      return [fe.memoizedState, ee];
    }
  }
  function zo(n, a) {
    ce = ut(), fe = Ha();
    var l = a === void 0 ? null : a;
    if (fe !== null) {
      var p = fe.memoizedState;
      if (p !== null && l !== null) {
        var v = p[1];
        if (Rc(l, v))
          return p[0];
      }
    }
    Yn = !0;
    var y = n();
    return Yn = !1, fe.memoizedState = [y, l], y;
  }
  function Oc(n) {
    ce = ut(), fe = Ha();
    var a = fe.memoizedState;
    if (a === null) {
      var l = {
        current: n
      };
      return Object.seal(l), fe.memoizedState = l, l;
    } else
      return a;
  }
  function Fc(n, a) {
    Ut = "useLayoutEffect", s("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
  }
  function jc(n, a, l) {
    if (lt >= Lt)
      throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
    if (n === ce) {
      Mt = !0;
      var p = {
        action: l,
        next: null
      };
      Be === null && (Be = /* @__PURE__ */ new Map());
      var v = Be.get(a);
      if (v === void 0)
        Be.set(a, p);
      else {
        for (var y = v; y.next !== null; )
          y = y.next;
        y.next = p;
      }
    }
  }
  function Ic(n, a) {
    return zo(function() {
      return n;
    }, a);
  }
  function Dc(n, a, l) {
    return ut(), a(n._source);
  }
  function Mc(n, a, l) {
    if (l === void 0)
      throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
    return l();
  }
  function Lc(n) {
    return ut(), n;
  }
  function Na() {
    throw new Error("startTransition cannot be called during server rendering.");
  }
  function $o() {
    return ut(), [!1, Na];
  }
  function Wi() {
    var n = It, a = Sc(n.treeContext), l = Jr;
    if (l === null)
      throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
    var p = $a++;
    return Xe(l, a, p);
  }
  function Zr() {
  }
  var Ho = {
    readContext: _c,
    useContext: Lo,
    useMemo: zo,
    useReducer: Uo,
    useRef: Oc,
    useState: Pc,
    useInsertionEffect: Zr,
    useLayoutEffect: Fc,
    useCallback: Ic,
    // useImperativeHandle is not run in the server environment
    useImperativeHandle: Zr,
    // Effects are not run in the server environment.
    useEffect: Zr,
    // Debugging effect
    useDebugValue: Zr,
    useDeferredValue: Lc,
    useTransition: $o,
    useId: Wi,
    // Subscriptions are not setup in a server environment.
    useMutableSource: Dc,
    useSyncExternalStore: Mc
  }, Jr = null;
  function Wa(n) {
    Jr = n;
  }
  function Yi(n) {
    try {
      var a = "", l = n;
      do {
        switch (l.tag) {
          case 0:
            a += Br(l.type, null, null);
            break;
          case 1:
            a += ji(l.type, null, null);
            break;
          case 2:
            a += Fi(l.type, null, null);
            break;
        }
        l = l.parent;
      } while (l);
      return a;
    } catch (p) {
      return `
Error generating stack: ` + p.message + `
` + p.stack;
    }
  }
  var gt = i.ReactCurrentDispatcher, Ya = i.ReactDebugCurrentFrame, Ga = 0, zt = 1, Bo = 2, Gi = 3, $t = 4, Uc = 0, No = 1, Gn = 2, zc = 12800;
  function $c(n) {
    return console.error(n), null;
  }
  function Qr() {
  }
  function qi(n, a, l, p, v, y, P, D, $) {
    var q = [], J = /* @__PURE__ */ new Set(), ee = {
      destination: null,
      responseState: a,
      progressiveChunkSize: p === void 0 ? zc : p,
      status: Uc,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: J,
      pingedTasks: q,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: v === void 0 ? $c : v,
      onAllReady: y === void 0 ? Qr : y,
      onShellReady: P === void 0 ? Qr : P,
      onShellError: D === void 0 ? Qr : D,
      onFatalError: $ === void 0 ? Qr : $
    }, Se = xt(
      ee,
      0,
      null,
      l,
      // Root segments are never embedded in Text on either edge
      !1,
      !1
    );
    Se.parentFlushed = !0;
    var Ne = Kr(ee, n, null, Se, J, ht, Li, La);
    return q.push(Ne), ee;
  }
  function qa(n, a) {
    var l = n.pingedTasks;
    l.push(a), l.length === 1 && h(function() {
      return es(n);
    });
  }
  function pt(n, a) {
    return {
      id: Vt,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      forceClientRender: !1,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: a,
      errorDigest: null
    };
  }
  function Kr(n, a, l, p, v, y, P, D) {
    n.allPendingTasks++, l === null ? n.pendingRootTasks++ : l.pendingTasks++;
    var $ = {
      node: a,
      ping: function() {
        return qa(n, $);
      },
      blockedBoundary: l,
      blockedSegment: p,
      abortSet: v,
      legacyContext: y,
      context: P,
      treeContext: D
    };
    return $.componentStack = null, v.add($), $;
  }
  function xt(n, a, l, p, v, y) {
    return {
      status: Ga,
      id: -1,
      // lazily assigned later
      index: a,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: p,
      boundary: l,
      lastPushedText: v,
      textEmbedded: y
    };
  }
  var qn = null;
  function Vi() {
    return qn === null || qn.componentStack === null ? "" : Yi(qn.componentStack);
  }
  function hn(n, a) {
    n.componentStack = {
      tag: 0,
      parent: n.componentStack,
      type: a
    };
  }
  function dr(n, a) {
    n.componentStack = {
      tag: 1,
      parent: n.componentStack,
      type: a
    };
  }
  function Xi(n, a) {
    n.componentStack = {
      tag: 2,
      parent: n.componentStack,
      type: a
    };
  }
  function gn(n) {
    n.componentStack === null ? s("Unexpectedly popped too many stack frames. This is a bug in React.") : n.componentStack = n.componentStack.parent;
  }
  var bt = null;
  function Zi(n, a) {
    {
      var l;
      typeof a == "string" ? l = a : a && typeof a.message == "string" ? l = a.message : l = String(a);
      var p = bt || Vi();
      bt = null, n.errorMessage = l, n.errorComponentStack = p;
    }
  }
  function ea(n, a) {
    var l = n.onError(a);
    if (l != null && typeof l != "string")
      throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof l + '" instead');
    return l;
  }
  function Va(n, a) {
    var l = n.onShellError;
    l(a);
    var p = n.onFatalError;
    p(a), n.destination !== null ? (n.status = Gn, I(n.destination, a)) : (n.status = No, n.fatalError = a);
  }
  function Wo(n, a, l) {
    hn(a, "Suspense");
    var p = a.blockedBoundary, v = a.blockedSegment, y = l.fallback, P = l.children, D = /* @__PURE__ */ new Set(), $ = pt(n, D), q = v.chunks.length, J = xt(
      n,
      q,
      $,
      v.formatContext,
      // boundaries never require text embedding at their edges because comment nodes bound them
      !1,
      !1
    );
    v.children.push(J), v.lastPushedText = !1;
    var ee = xt(
      n,
      0,
      null,
      v.formatContext,
      // boundaries never require text embedding at their edges because comment nodes bound them
      !1,
      !1
    );
    ee.parentFlushed = !0, a.blockedBoundary = $, a.blockedSegment = ee;
    try {
      if (Xa(n, a, P), xo(ee.chunks, n.responseState, ee.lastPushedText, ee.textEmbedded), ee.status = zt, ra($, ee), $.pendingTasks === 0) {
        gn(a);
        return;
      }
    } catch (Ne) {
      ee.status = $t, $.forceClientRender = !0, $.errorDigest = ea(n, Ne), Zi($, Ne);
    } finally {
      a.blockedBoundary = p, a.blockedSegment = v;
    }
    var Se = Kr(n, y, p, J, D, a.legacyContext, a.context, a.treeContext);
    Se.componentStack = a.componentStack, n.pingedTasks.push(Se), gn(a);
  }
  function Yo(n, a, l, p) {
    hn(a, l);
    var v = a.blockedSegment, y = rr(v.chunks, l, p, n.responseState, v.formatContext);
    v.lastPushedText = !1;
    var P = v.formatContext;
    v.formatContext = ot(P, l, p), Xa(n, a, y), v.formatContext = P, Ze(v.chunks, l), v.lastPushedText = !1, gn(a);
  }
  function Hc(n) {
    return n.prototype && n.prototype.isReactComponent;
  }
  function Ji(n, a, l, p, v) {
    var y = {};
    Ni(a, y);
    var P = l(p, v);
    return Ac(l, p, P, v);
  }
  function na(n, a, l, p, v) {
    var y = l.render();
    l.props !== v && (no || s("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ce(p) || "a component"), no = !0);
    {
      var P = p.childContextTypes;
      if (P != null) {
        var D = a.legacyContext, $ = Ft(l, p, D, P);
        a.legacyContext = $, sn(n, a, y), a.legacyContext = D;
        return;
      }
    }
    sn(n, a, y);
  }
  function Go(n, a, l, p) {
    Xi(a, l);
    var v = Ao(l, a.legacyContext), y = bc(l, p, v);
    Ma(y, l, p, v), na(n, a, y, l, p), gn(a);
  }
  var Qi = {}, ta = {}, Ki = {}, eo = {}, no = !1, qo = !1, Vo = !1, to = !1;
  function Bc(n, a, l, p) {
    var v;
    if (v = Ao(l, a.legacyContext), dr(a, l), l.prototype && typeof l.prototype.render == "function") {
      var y = Ce(l) || "Unknown";
      Qi[y] || (s("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), Qi[y] = !0);
    }
    var P = Ji(n, a, l, p, v), D = Mo();
    if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) {
      var $ = Ce(l) || "Unknown";
      ta[$] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $, $, $), ta[$] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0
    ) {
      {
        var q = Ce(l) || "Unknown";
        ta[q] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", q, q, q), ta[q] = !0);
      }
      Ma(P, l, p, v), na(n, a, P, l, p);
    } else if (Nc(l), D) {
      var J = a.treeContext, ee = 1, Se = 0;
      a.treeContext = Hi(J, ee, Se);
      try {
        sn(n, a, P);
      } finally {
        a.treeContext = J;
      }
    } else
      sn(n, a, P);
    gn(a);
  }
  function Nc(n) {
    {
      if (n && n.childContextTypes && s("%s(...): childContextTypes cannot be defined on a function component.", n.displayName || n.name || "Component"), typeof n.getDerivedStateFromProps == "function") {
        var a = Ce(n) || "Unknown";
        eo[a] || (s("%s: Function components do not support getDerivedStateFromProps.", a), eo[a] = !0);
      }
      if (typeof n.contextType == "object" && n.contextType !== null) {
        var l = Ce(n) || "Unknown";
        Ki[l] || (s("%s: Function components do not support contextType.", l), Ki[l] = !0);
      }
    }
  }
  function Xo(n, a) {
    if (n && n.defaultProps) {
      var l = an({}, a), p = n.defaultProps;
      for (var v in p)
        l[v] === void 0 && (l[v] = p[v]);
      return l;
    }
    return a;
  }
  function Wc(n, a, l, p, v) {
    dr(a, l.render);
    var y = Ji(n, a, l.render, p, v), P = Mo();
    if (P) {
      var D = a.treeContext, $ = 1, q = 0;
      a.treeContext = Hi(D, $, q);
      try {
        sn(n, a, y);
      } finally {
        a.treeContext = D;
      }
    } else
      sn(n, a, y);
    gn(a);
  }
  function Yc(n, a, l, p, v) {
    var y = l.type, P = Xo(y, p);
    ao(n, a, y, P, v);
  }
  function ro(n, a, l, p) {
    l._context === void 0 ? l !== l.Consumer && (to || (to = !0, s("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
    var v = p.children;
    typeof v != "function" && s("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
    var y = lr(l), P = v(y);
    sn(n, a, P);
  }
  function Gc(n, a, l, p) {
    var v = l._context, y = p.value, P = p.children, D;
    D = a.context, a.context = Gr(v, y), sn(n, a, P), a.context = zi(v), D !== a.context && s("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
  }
  function on(n, a, l, p, v) {
    hn(a, "Lazy");
    var y = l._payload, P = l._init, D = P(y), $ = Xo(D, p);
    ao(n, a, D, $, v), gn(a);
  }
  function ao(n, a, l, p, v) {
    if (typeof l == "function")
      if (Hc(l)) {
        Go(n, a, l, p);
        return;
      } else {
        Bc(n, a, l, p);
        return;
      }
    if (typeof l == "string") {
      Yo(n, a, l, p);
      return;
    }
    switch (l) {
      case vc:
      case wo:
      case ba:
      case ya:
      case xa: {
        sn(n, a, p.children);
        return;
      }
      case Si: {
        hn(a, "SuspenseList"), sn(n, a, p.children), gn(a);
        return;
      }
      case mc:
        throw new Error("ReactDOMServer does not yet support scope components.");
      case ir: {
        Wo(n, a, p);
        return;
      }
    }
    if (typeof l == "object" && l !== null)
      switch (l.$$typeof) {
        case Ur: {
          Wc(n, a, l, p, v);
          return;
        }
        case Ci: {
          Yc(n, a, l, p, v);
          return;
        }
        case Mr: {
          Gc(n, a, l, p);
          return;
        }
        case Lr: {
          ro(n, a, l, p);
          return;
        }
        case wa: {
          on(n, a, l, p);
          return;
        }
      }
    var y = "";
    throw (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (l == null ? l : typeof l) + "." + y));
  }
  function Zo(n, a) {
    typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
    n[Symbol.toStringTag] === "Generator" && (qo || s("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), qo = !0), n.entries === a && (Vo || s("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Vo = !0);
  }
  function sn(n, a, l) {
    try {
      return io(n, a, l);
    } catch (p) {
      throw typeof p == "object" && p !== null && typeof p.then == "function" || (bt = bt !== null ? bt : Vi()), p;
    }
  }
  function io(n, a, l) {
    if (a.node = l, typeof l == "object" && l !== null) {
      switch (l.$$typeof) {
        case yo: {
          var p = l, v = p.type, y = p.props, P = p.ref;
          ao(n, a, v, y, P);
          return;
        }
        case wi:
          throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
        case wa: {
          var D = l, $ = D._payload, q = D._init, J;
          try {
            J = q($);
          } catch (ei) {
            throw typeof ei == "object" && ei !== null && typeof ei.then == "function" && hn(a, "Lazy"), ei;
          }
          sn(n, a, J);
          return;
        }
      }
      if (E(l)) {
        Jo(n, a, l);
        return;
      }
      var ee = Re(l);
      if (ee) {
        Zo(l, ee);
        var Se = ee.call(l);
        if (Se) {
          var Ne = Se.next();
          if (!Ne.done) {
            var xn = [];
            do
              xn.push(Ne.value), Ne = Se.next();
            while (!Ne.done);
            Jo(n, a, xn);
            return;
          }
          return;
        }
      }
      var ts = Object.prototype.toString.call(l);
      throw new Error("Objects are not valid as a React child (found: " + (ts === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : ts) + "). If you meant to render a collection of children, use an array instead.");
    }
    if (typeof l == "string") {
      var rs = a.blockedSegment;
      rs.lastPushedText = go(a.blockedSegment.chunks, l, n.responseState, rs.lastPushedText);
      return;
    }
    if (typeof l == "number") {
      var as = a.blockedSegment;
      as.lastPushedText = go(a.blockedSegment.chunks, "" + l, n.responseState, as.lastPushedText);
      return;
    }
    typeof l == "function" && s("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
  }
  function Jo(n, a, l) {
    for (var p = l.length, v = 0; v < p; v++) {
      var y = a.treeContext;
      a.treeContext = Hi(y, p, v);
      try {
        Xa(n, a, l[v]);
      } finally {
        a.treeContext = y;
      }
    }
  }
  function qc(n, a, l) {
    var p = a.blockedSegment, v = p.chunks.length, y = xt(
      n,
      v,
      null,
      p.formatContext,
      // Adopt the parent segment's leading text embed
      p.lastPushedText,
      // Assume we are text embedded at the trailing edge
      !0
    );
    p.children.push(y), p.lastPushedText = !1;
    var P = Kr(n, a.node, a.blockedBoundary, y, a.abortSet, a.legacyContext, a.context, a.treeContext);
    a.componentStack !== null && (P.componentStack = a.componentStack.parent);
    var D = P.ping;
    l.then(D, D);
  }
  function Xa(n, a, l) {
    var p = a.blockedSegment.formatContext, v = a.legacyContext, y = a.context, P = null;
    P = a.componentStack;
    try {
      return sn(n, a, l);
    } catch (D) {
      if (Xr(), typeof D == "object" && D !== null && typeof D.then == "function") {
        qc(n, a, D), a.blockedSegment.formatContext = p, a.legacyContext = v, a.context = y, Ra(y), a.componentStack = P;
        return;
      } else
        throw a.blockedSegment.formatContext = p, a.legacyContext = v, a.context = y, Ra(y), a.componentStack = P, D;
    }
  }
  function Za(n, a, l, p) {
    var v = ea(n, p);
    if (a === null ? Va(n, p) : (a.pendingTasks--, a.forceClientRender || (a.forceClientRender = !0, a.errorDigest = v, Zi(a, p), a.parentFlushed && n.clientRenderedBoundaries.push(a))), n.allPendingTasks--, n.allPendingTasks === 0) {
      var y = n.onAllReady;
      y();
    }
  }
  function Qo(n) {
    var a = this, l = n.blockedBoundary, p = n.blockedSegment;
    p.status = Gi, aa(a, l, p);
  }
  function Ko(n, a, l) {
    var p = n.blockedBoundary, v = n.blockedSegment;
    if (v.status = Gi, p === null)
      a.allPendingTasks--, a.status !== Gn && (a.status = Gn, a.destination !== null && x(a.destination));
    else {
      if (p.pendingTasks--, !p.forceClientRender) {
        p.forceClientRender = !0;
        var y = l === void 0 ? new Error("The render was aborted by the server without a reason.") : l;
        p.errorDigest = a.onError(y);
        {
          var P = "The server did not finish this Suspense boundary: ";
          y && typeof y.message == "string" ? y = P + y.message : y = P + String(y);
          var D = qn;
          qn = n;
          try {
            Zi(p, y);
          } finally {
            qn = D;
          }
        }
        p.parentFlushed && a.clientRenderedBoundaries.push(p);
      }
      if (p.fallbackAbortableTasks.forEach(function(q) {
        return Ko(q, a, l);
      }), p.fallbackAbortableTasks.clear(), a.allPendingTasks--, a.allPendingTasks === 0) {
        var $ = a.onAllReady;
        $();
      }
    }
  }
  function ra(n, a) {
    if (a.chunks.length === 0 && a.children.length === 1 && a.children[0].boundary === null) {
      var l = a.children[0];
      l.id = a.id, l.parentFlushed = !0, l.status === zt && ra(n, l);
    } else {
      var p = n.completedSegments;
      p.push(a);
    }
  }
  function aa(n, a, l) {
    if (a === null) {
      if (l.parentFlushed) {
        if (n.completedRootSegment !== null)
          throw new Error("There can only be one root segment. This is a bug in React.");
        n.completedRootSegment = l;
      }
      if (n.pendingRootTasks--, n.pendingRootTasks === 0) {
        n.onShellError = Qr;
        var p = n.onShellReady;
        p();
      }
    } else if (a.pendingTasks--, !a.forceClientRender) {
      if (a.pendingTasks === 0)
        l.parentFlushed && l.status === zt && ra(a, l), a.parentFlushed && n.completedBoundaries.push(a), a.fallbackAbortableTasks.forEach(Qo, n), a.fallbackAbortableTasks.clear();
      else if (l.parentFlushed && l.status === zt) {
        ra(a, l);
        var v = a.completedSegments;
        v.length === 1 && a.parentFlushed && n.partialBoundaries.push(a);
      }
    }
    if (n.allPendingTasks--, n.allPendingTasks === 0) {
      var y = n.onAllReady;
      y();
    }
  }
  function Ja(n, a) {
    var l = a.blockedSegment;
    if (l.status === Ga) {
      Ra(a.context);
      var p = null;
      p = qn, qn = a;
      try {
        sn(n, a, a.node), xo(l.chunks, n.responseState, l.lastPushedText, l.textEmbedded), a.abortSet.delete(a), l.status = zt, aa(n, a.blockedBoundary, l);
      } catch (y) {
        if (Xr(), typeof y == "object" && y !== null && typeof y.then == "function") {
          var v = a.ping;
          y.then(v, v);
        } else
          a.abortSet.delete(a), l.status = $t, Za(n, a.blockedBoundary, l, y);
      } finally {
        qn = p;
      }
    }
  }
  function es(n) {
    if (n.status !== Gn) {
      var a = gc(), l = gt.current;
      gt.current = Ho;
      var p;
      p = Ya.getCurrentStack, Ya.getCurrentStack = Vi;
      var v = Jr;
      Wa(n.responseState);
      try {
        var y = n.pingedTasks, P;
        for (P = 0; P < y.length; P++) {
          var D = y[P];
          Ja(n, D);
        }
        y.splice(0, P), n.destination !== null && Ka(n, n.destination);
      } catch ($) {
        ea(n, $), Va(n, $);
      } finally {
        Wa(v), gt.current = l, Ya.getCurrentStack = p, l === Ho && Ra(a);
      }
    }
  }
  function ia(n, a, l) {
    switch (l.parentFlushed = !0, l.status) {
      case Ga: {
        var p = l.id = n.nextSegmentId++;
        return l.lastPushedText = !1, l.textEmbedded = !1, mi(a, n.responseState, p);
      }
      case zt: {
        l.status = Bo;
        for (var v = !0, y = l.chunks, P = 0, D = l.children, $ = 0; $ < D.length; $++) {
          for (var q = D[$]; P < q.index; P++)
            w(a, y[P]);
          v = oa(n, a, q);
        }
        for (; P < y.length - 1; P++)
          w(a, y[P]);
        return P < y.length && (v = C(a, y[P])), v;
      }
      default:
        throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
    }
  }
  function oa(n, a, l) {
    var p = l.boundary;
    if (p === null)
      return ia(n, a, l);
    if (p.parentFlushed = !0, p.forceClientRender)
      return mn(a, n.responseState, p.errorDigest, p.errorMessage, p.errorComponentStack), ia(n, a, l), bo(a, n.responseState);
    if (p.pendingTasks > 0) {
      p.rootSegmentID = n.nextSegmentId++, p.completedSegments.length > 0 && n.partialBoundaries.push(p);
      var v = p.id = Xt(n.responseState);
      return ye(a, n.responseState, v), ia(n, a, l), Pt(a, n.responseState);
    } else {
      if (p.byteSize > n.progressiveChunkSize)
        return p.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(p), ye(a, n.responseState, p.id), ia(n, a, l), Pt(a, n.responseState);
      yi(a, n.responseState);
      var y = p.completedSegments;
      if (y.length !== 1)
        throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      var P = y[0];
      return oa(n, a, P), fc(a, n.responseState);
    }
  }
  function Vc(n, a, l) {
    return uc(a, n.responseState, l.id, l.errorDigest, l.errorMessage, l.errorComponentStack);
  }
  function oo(n, a, l) {
    return Ys(a, n.responseState, l.formatContext, l.id), oa(n, a, l), Gs(a, l.formatContext);
  }
  function Qa(n, a, l) {
    for (var p = l.completedSegments, v = 0; v < p.length; v++) {
      var y = p[v];
      ns(n, a, l, y);
    }
    return p.length = 0, ic(a, n.responseState, l.id, l.rootSegmentID);
  }
  function Xc(n, a, l) {
    for (var p = l.completedSegments, v = 0; v < p.length; v++) {
      var y = p[v];
      if (!ns(n, a, l, y))
        return v++, p.splice(0, v), !1;
    }
    return p.splice(0, v), !0;
  }
  function ns(n, a, l, p) {
    if (p.status === Bo)
      return !0;
    var v = p.id;
    if (v === -1) {
      var y = p.id = l.rootSegmentID;
      if (y === -1)
        throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
      return oo(n, a, p);
    } else
      return oo(n, a, p), ec(a, n.responseState, v);
  }
  function Ka(n, a) {
    try {
      var l = n.completedRootSegment;
      l !== null && n.pendingRootTasks === 0 && (oa(n, a, l), n.completedRootSegment = null, pi(a, n.responseState));
      var p = n.clientRenderedBoundaries, v;
      for (v = 0; v < p.length; v++) {
        var y = p[v];
        if (!Vc(n, a, y)) {
          n.destination = null, v++, p.splice(0, v);
          return;
        }
      }
      p.splice(0, v);
      var P = n.completedBoundaries;
      for (v = 0; v < P.length; v++) {
        var D = P[v];
        if (!Qa(n, a, D)) {
          n.destination = null, v++, P.splice(0, v);
          return;
        }
      }
      P.splice(0, v);
      var $ = n.partialBoundaries;
      for (v = 0; v < $.length; v++) {
        var q = $[v];
        if (!Xc(n, a, q)) {
          n.destination = null, v++, $.splice(0, v);
          return;
        }
      }
      $.splice(0, v);
      var J = n.completedBoundaries;
      for (v = 0; v < J.length; v++) {
        var ee = J[v];
        if (!Qa(n, a, ee)) {
          n.destination = null, v++, J.splice(0, v);
          return;
        }
      }
      J.splice(0, v);
    } finally {
      n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && (n.abortableTasks.size !== 0 && s("There was still abortable task at the root when we closed. This is a bug in React."), x(a));
    }
  }
  function Zc(n) {
    h(function() {
      return es(n);
    });
  }
  function r(n, a) {
    if (n.status === No) {
      n.status = Gn, I(a, n.fatalError);
      return;
    }
    if (n.status !== Gn && n.destination === null) {
      n.destination = a;
      try {
        Ka(n, a);
      } catch (l) {
        ea(n, l), Va(n, l);
      }
    }
  }
  function o(n, a) {
    try {
      var l = n.abortableTasks;
      l.forEach(function(p) {
        return Ko(p, n, a);
      }), l.clear(), n.destination !== null && Ka(n, n.destination);
    } catch (p) {
      ea(n, p), Va(n, p);
    }
  }
  function u() {
  }
  function d(n, a, l, p) {
    var v = !1, y = null, P = "", D = {
      push: function(ee) {
        return ee !== null && (P += ee), !0;
      },
      destroy: function(ee) {
        v = !0, y = ee;
      }
    }, $ = !1;
    function q() {
      $ = !0;
    }
    var J = qi(n, dc(l, a ? a.identifierPrefix : void 0), bi(), 1 / 0, u, void 0, q, void 0, void 0);
    if (Zc(J), o(J, p), r(J, D), v)
      throw y;
    if (!$)
      throw new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
    return P;
  }
  function g(n, a) {
    return d(n, a, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }
  function S(n, a) {
    return d(n, a, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }
  function F() {
    throw new Error("ReactDOMServer.renderToNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToString() instead.");
  }
  function L() {
    throw new Error("ReactDOMServer.renderToStaticNodeStream(): The streaming API is not available in the browser. Use ReactDOMServer.renderToStaticMarkup() instead.");
  }
  ti.renderToNodeStream = F, ti.renderToStaticMarkup = S, ti.renderToStaticNodeStream = L, ti.renderToString = g, ti.version = t;
})();
var hl = {};
/**
 * @license React
 * react-dom-server.browser.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  var e = oe, t = "18.2.0", i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function c(r) {
    {
      for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
        u[d - 1] = arguments[d];
      m("warn", r, u);
    }
  }
  function s(r) {
    {
      for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
        u[d - 1] = arguments[d];
      m("error", r, u);
    }
  }
  function m(r, o, u) {
    {
      var d = i.ReactDebugCurrentFrame, g = d.getStackAddendum();
      g !== "" && (o += "%s", u = u.concat([g]));
      var S = u.map(function(F) {
        return String(F);
      });
      S.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, S);
    }
  }
  function h(r) {
    r();
  }
  var R = 512, w = null, C = 0;
  function b(r) {
    w = new Uint8Array(R), C = 0;
  }
  function x(r, o) {
    if (o.length !== 0) {
      if (o.length > R) {
        C > 0 && (r.enqueue(new Uint8Array(w.buffer, 0, C)), w = new Uint8Array(R), C = 0), r.enqueue(o);
        return;
      }
      var u = o, d = w.length - C;
      d < u.length && (d === 0 ? r.enqueue(w) : (w.set(u.subarray(0, d), C), r.enqueue(w), u = u.subarray(d)), w = new Uint8Array(R), C = 0), w.set(u, C), C += u.length;
    }
  }
  function O(r, o) {
    return x(r, o), !0;
  }
  function j(r) {
    w && C > 0 && (r.enqueue(new Uint8Array(w.buffer, 0, C)), w = null, C = 0);
  }
  function I(r) {
    r.close();
  }
  var k = new TextEncoder();
  function _(r) {
    return k.encode(r);
  }
  function A(r) {
    return k.encode(r);
  }
  function z(r, o) {
    typeof r.error == "function" ? r.error(o) : r.close();
  }
  function N(r) {
    {
      var o = typeof Symbol == "function" && Symbol.toStringTag, u = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
      return u;
    }
  }
  function B(r) {
    try {
      return Y(r), !1;
    } catch {
      return !0;
    }
  }
  function Y(r) {
    return "" + r;
  }
  function X(r, o) {
    if (B(r))
      return s("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", o, N(r)), Y(r);
  }
  function me(r, o) {
    if (B(r))
      return s("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", o, N(r)), Y(r);
  }
  function ge(r) {
    if (B(r))
      return s("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", N(r)), Y(r);
  }
  var le = Object.prototype.hasOwnProperty, Je = 0, cn = 1, Vn = 2, ze = 3, $e = 4, Ye = 5, Qe = 6, te = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ln = te + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ft = new RegExp("^[" + te + "][" + ln + "]*$"), On = {}, Ae = {};
  function pe(r) {
    return le.call(Ae, r) ? !0 : le.call(On, r) ? !1 : ft.test(r) ? (Ae[r] = !0, !0) : (On[r] = !0, s("Invalid attribute name: `%s`", r), !1);
  }
  function Xn(r, o, u, d) {
    if (u !== null && u.type === Je)
      return !1;
    switch (typeof o) {
      case "function":
      case "symbol":
        return !0;
      case "boolean": {
        if (d)
          return !1;
        if (u !== null)
          return !u.acceptsBooleans;
        var g = r.toLowerCase().slice(0, 5);
        return g !== "data-" && g !== "aria-";
      }
      default:
        return !1;
    }
  }
  function Ve(r) {
    return ke.hasOwnProperty(r) ? ke[r] : null;
  }
  function Ee(r, o, u, d, g, S, F) {
    this.acceptsBooleans = o === Vn || o === ze || o === $e, this.attributeName = d, this.attributeNamespace = g, this.mustUseProperty = u, this.propertyName = r, this.type = o, this.sanitizeURL = S, this.removeEmptyString = F;
  }
  var ke = {}, un = [
    "children",
    "dangerouslySetInnerHTML",
    // TODO: This prevents the assignment of defaultValue to regular
    // elements (not just inputs). Now that ReactDOMInput assigns to the
    // defaultValue property -- do we need this?
    "defaultValue",
    "defaultChecked",
    "innerHTML",
    "suppressContentEditableWarning",
    "suppressHydrationWarning",
    "style"
  ];
  un.forEach(function(r) {
    ke[r] = new Ee(
      r,
      Je,
      !1,
      // mustUseProperty
      r,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(r) {
    var o = r[0], u = r[1];
    ke[o] = new Ee(
      o,
      cn,
      !1,
      // mustUseProperty
      u,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(r) {
    ke[r] = new Ee(
      r,
      Vn,
      !1,
      // mustUseProperty
      r.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(r) {
    ke[r] = new Ee(
      r,
      Vn,
      !1,
      // mustUseProperty
      r,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "allowFullScreen",
    "async",
    // Note: there is a special case that prevents it from being written to the DOM
    // on the client side because the browsers are inconsistent. Instead we call focus().
    "autoFocus",
    "autoPlay",
    "controls",
    "default",
    "defer",
    "disabled",
    "disablePictureInPicture",
    "disableRemotePlayback",
    "formNoValidate",
    "hidden",
    "loop",
    "noModule",
    "noValidate",
    "open",
    "playsInline",
    "readOnly",
    "required",
    "reversed",
    "scoped",
    "seamless",
    // Microdata
    "itemScope"
  ].forEach(function(r) {
    ke[r] = new Ee(
      r,
      ze,
      !1,
      // mustUseProperty
      r.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "checked",
    // Note: `option.selected` is not updated if `select.multiple` is
    // disabled with `removeAttribute`. We have special logic for handling this.
    "multiple",
    "muted",
    "selected"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(r) {
    ke[r] = new Ee(
      r,
      ze,
      !0,
      // mustUseProperty
      r,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "capture",
    "download"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(r) {
    ke[r] = new Ee(
      r,
      $e,
      !1,
      // mustUseProperty
      r,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "cols",
    "rows",
    "size",
    "span"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(r) {
    ke[r] = new Ee(
      r,
      Qe,
      !1,
      // mustUseProperty
      r,
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), ["rowSpan", "start"].forEach(function(r) {
    ke[r] = new Ee(
      r,
      Ye,
      !1,
      // mustUseProperty
      r.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var bn = /[\-\:]([a-z])/g, yn = function(r) {
    return r[1].toUpperCase();
  };
  [
    "accent-height",
    "alignment-baseline",
    "arabic-form",
    "baseline-shift",
    "cap-height",
    "clip-path",
    "clip-rule",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "dominant-baseline",
    "enable-background",
    "fill-opacity",
    "fill-rule",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-name",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "horiz-adv-x",
    "horiz-origin-x",
    "image-rendering",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "overline-position",
    "overline-thickness",
    "paint-order",
    "panose-1",
    "pointer-events",
    "rendering-intent",
    "shape-rendering",
    "stop-color",
    "stop-opacity",
    "strikethrough-position",
    "strikethrough-thickness",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-anchor",
    "text-decoration",
    "text-rendering",
    "underline-position",
    "underline-thickness",
    "unicode-bidi",
    "unicode-range",
    "units-per-em",
    "v-alphabetic",
    "v-hanging",
    "v-ideographic",
    "v-mathematical",
    "vector-effect",
    "vert-adv-y",
    "vert-origin-x",
    "vert-origin-y",
    "word-spacing",
    "writing-mode",
    "xmlns:xlink",
    "x-height"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(r) {
    var o = r.replace(bn, yn);
    ke[o] = new Ee(
      o,
      cn,
      !1,
      // mustUseProperty
      r,
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xlink:actuate",
    "xlink:arcrole",
    "xlink:role",
    "xlink:show",
    "xlink:title",
    "xlink:type"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(r) {
    var o = r.replace(bn, yn);
    ke[o] = new Ee(
      o,
      cn,
      !1,
      // mustUseProperty
      r,
      "http://www.w3.org/1999/xlink",
      !1,
      // sanitizeURL
      !1
    );
  }), [
    "xml:base",
    "xml:lang",
    "xml:space"
    // NOTE: if you add a camelCased prop to this list,
    // you'll need to set attributeName to name.toLowerCase()
    // instead in the assignment below.
  ].forEach(function(r) {
    var o = r.replace(bn, yn);
    ke[o] = new Ee(
      o,
      cn,
      !1,
      // mustUseProperty
      r,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      // sanitizeURL
      !1
    );
  }), ["tabIndex", "crossOrigin"].forEach(function(r) {
    ke[r] = new Ee(
      r,
      cn,
      !1,
      // mustUseProperty
      r.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !1,
      // sanitizeURL
      !1
    );
  });
  var Fn = "xlinkHref";
  ke[Fn] = new Ee(
    "xlinkHref",
    cn,
    !1,
    // mustUseProperty
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    // sanitizeURL
    !1
  ), ["src", "href", "action", "formAction"].forEach(function(r) {
    ke[r] = new Ee(
      r,
      cn,
      !1,
      // mustUseProperty
      r.toLowerCase(),
      // attributeName
      null,
      // attributeNamespace
      !0,
      // sanitizeURL
      !0
    );
  });
  var jn = {
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
    // SVG-related properties
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  };
  function St(r, o) {
    return r + o.charAt(0).toUpperCase() + o.substring(1);
  }
  var Zn = ["Webkit", "ms", "Moz", "O"];
  Object.keys(jn).forEach(function(r) {
    Zn.forEach(function(o) {
      jn[St(o, r)] = jn[r];
    });
  });
  var In = {
    button: !0,
    checkbox: !0,
    image: !0,
    hidden: !0,
    radio: !0,
    reset: !0,
    submit: !0
  };
  function Dn(r, o) {
    In[o.type] || o.onChange || o.onInput || o.readOnly || o.disabled || o.value == null || s("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), o.onChange || o.readOnly || o.disabled || o.checked == null || s("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
  }
  function Mn(r, o) {
    if (r.indexOf("-") === -1)
      return typeof o.is == "string";
    switch (r) {
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
  var Ln = {
    "aria-current": 0,
    // state
    "aria-description": 0,
    "aria-details": 0,
    "aria-disabled": 0,
    // state
    "aria-hidden": 0,
    // state
    "aria-invalid": 0,
    // state
    "aria-keyshortcuts": 0,
    "aria-label": 0,
    "aria-roledescription": 0,
    // Widget Attributes
    "aria-autocomplete": 0,
    "aria-checked": 0,
    "aria-expanded": 0,
    "aria-haspopup": 0,
    "aria-level": 0,
    "aria-modal": 0,
    "aria-multiline": 0,
    "aria-multiselectable": 0,
    "aria-orientation": 0,
    "aria-placeholder": 0,
    "aria-pressed": 0,
    "aria-readonly": 0,
    "aria-required": 0,
    "aria-selected": 0,
    "aria-sort": 0,
    "aria-valuemax": 0,
    "aria-valuemin": 0,
    "aria-valuenow": 0,
    "aria-valuetext": 0,
    // Live Region Attributes
    "aria-atomic": 0,
    "aria-busy": 0,
    "aria-live": 0,
    "aria-relevant": 0,
    // Drag-and-Drop Attributes
    "aria-dropeffect": 0,
    "aria-grabbed": 0,
    // Relationship Attributes
    "aria-activedescendant": 0,
    "aria-colcount": 0,
    "aria-colindex": 0,
    "aria-colspan": 0,
    "aria-controls": 0,
    "aria-describedby": 0,
    "aria-errormessage": 0,
    "aria-flowto": 0,
    "aria-labelledby": 0,
    "aria-owns": 0,
    "aria-posinset": 0,
    "aria-rowcount": 0,
    "aria-rowindex": 0,
    "aria-rowspan": 0,
    "aria-setsize": 0
  }, wn = {}, Jn = new RegExp("^(aria)-[" + ln + "]*$"), Ke = new RegExp("^(aria)[A-Z][" + ln + "]*$");
  function Qn(r, o) {
    {
      if (le.call(wn, o) && wn[o])
        return !0;
      if (Ke.test(o)) {
        var u = "aria-" + o.slice(4).toLowerCase(), d = Ln.hasOwnProperty(u) ? u : null;
        if (d == null)
          return s("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", o), wn[o] = !0, !0;
        if (o !== d)
          return s("Invalid ARIA attribute `%s`. Did you mean `%s`?", o, d), wn[o] = !0, !0;
      }
      if (Jn.test(o)) {
        var g = o.toLowerCase(), S = Ln.hasOwnProperty(g) ? g : null;
        if (S == null)
          return wn[o] = !0, !1;
        if (o !== S)
          return s("Unknown ARIA attribute `%s`. Did you mean `%s`?", o, S), wn[o] = !0, !0;
      }
    }
    return !0;
  }
  function Kn(r, o) {
    {
      var u = [];
      for (var d in o) {
        var g = Qn(r, d);
        g || u.push(d);
      }
      var S = u.map(function(F) {
        return "`" + F + "`";
      }).join(", ");
      u.length === 1 ? s("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, r) : u.length > 1 && s("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", S, r);
    }
  }
  function Ct(r, o) {
    Mn(r, o) || Kn(r, o);
  }
  var Oe = !1;
  function et(r, o) {
    {
      if (r !== "input" && r !== "textarea" && r !== "select")
        return;
      o != null && o.value === null && !Oe && (Oe = !0, r === "select" && o.multiple ? s("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", r) : s("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", r));
    }
  }
  var mt = {
    // HTML
    accept: "accept",
    acceptcharset: "acceptCharset",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    alt: "alt",
    as: "as",
    async: "async",
    autocapitalize: "autoCapitalize",
    autocomplete: "autoComplete",
    autocorrect: "autoCorrect",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    autosave: "autoSave",
    capture: "capture",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charSet",
    checked: "checked",
    children: "children",
    cite: "cite",
    class: "className",
    classid: "classID",
    classname: "className",
    cols: "cols",
    colspan: "colSpan",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    controlslist: "controlsList",
    coords: "coords",
    crossorigin: "crossOrigin",
    dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
    data: "data",
    datetime: "dateTime",
    default: "default",
    defaultchecked: "defaultChecked",
    defaultvalue: "defaultValue",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback",
    download: "download",
    draggable: "draggable",
    enctype: "encType",
    enterkeyhint: "enterKeyHint",
    for: "htmlFor",
    form: "form",
    formmethod: "formMethod",
    formaction: "formAction",
    formenctype: "formEncType",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameborder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    htmlfor: "htmlFor",
    httpequiv: "httpEquiv",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    imagesizes: "imageSizes",
    imagesrcset: "imageSrcSet",
    innerhtml: "innerHTML",
    inputmode: "inputMode",
    integrity: "integrity",
    is: "is",
    itemid: "itemID",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    keyparams: "keyParams",
    keytype: "keyType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    low: "low",
    manifest: "manifest",
    marginwidth: "marginWidth",
    marginheight: "marginHeight",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    nomodule: "noModule",
    nonce: "nonce",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    placeholder: "placeholder",
    playsinline: "playsInline",
    poster: "poster",
    preload: "preload",
    profile: "profile",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    referrerpolicy: "referrerPolicy",
    rel: "rel",
    required: "required",
    reversed: "reversed",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srclang: "srcLang",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    summary: "summary",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    type: "type",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap",
    // SVG
    about: "about",
    accentheight: "accentHeight",
    "accent-height": "accentHeight",
    accumulate: "accumulate",
    additive: "additive",
    alignmentbaseline: "alignmentBaseline",
    "alignment-baseline": "alignmentBaseline",
    allowreorder: "allowReorder",
    alphabetic: "alphabetic",
    amplitude: "amplitude",
    arabicform: "arabicForm",
    "arabic-form": "arabicForm",
    ascent: "ascent",
    attributename: "attributeName",
    attributetype: "attributeType",
    autoreverse: "autoReverse",
    azimuth: "azimuth",
    basefrequency: "baseFrequency",
    baselineshift: "baselineShift",
    "baseline-shift": "baselineShift",
    baseprofile: "baseProfile",
    bbox: "bbox",
    begin: "begin",
    bias: "bias",
    by: "by",
    calcmode: "calcMode",
    capheight: "capHeight",
    "cap-height": "capHeight",
    clip: "clip",
    clippath: "clipPath",
    "clip-path": "clipPath",
    clippathunits: "clipPathUnits",
    cliprule: "clipRule",
    "clip-rule": "clipRule",
    color: "color",
    colorinterpolation: "colorInterpolation",
    "color-interpolation": "colorInterpolation",
    colorinterpolationfilters: "colorInterpolationFilters",
    "color-interpolation-filters": "colorInterpolationFilters",
    colorprofile: "colorProfile",
    "color-profile": "colorProfile",
    colorrendering: "colorRendering",
    "color-rendering": "colorRendering",
    contentscripttype: "contentScriptType",
    contentstyletype: "contentStyleType",
    cursor: "cursor",
    cx: "cx",
    cy: "cy",
    d: "d",
    datatype: "datatype",
    decelerate: "decelerate",
    descent: "descent",
    diffuseconstant: "diffuseConstant",
    direction: "direction",
    display: "display",
    divisor: "divisor",
    dominantbaseline: "dominantBaseline",
    "dominant-baseline": "dominantBaseline",
    dur: "dur",
    dx: "dx",
    dy: "dy",
    edgemode: "edgeMode",
    elevation: "elevation",
    enablebackground: "enableBackground",
    "enable-background": "enableBackground",
    end: "end",
    exponent: "exponent",
    externalresourcesrequired: "externalResourcesRequired",
    fill: "fill",
    fillopacity: "fillOpacity",
    "fill-opacity": "fillOpacity",
    fillrule: "fillRule",
    "fill-rule": "fillRule",
    filter: "filter",
    filterres: "filterRes",
    filterunits: "filterUnits",
    floodopacity: "floodOpacity",
    "flood-opacity": "floodOpacity",
    floodcolor: "floodColor",
    "flood-color": "floodColor",
    focusable: "focusable",
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontsizeadjust: "fontSizeAdjust",
    "font-size-adjust": "fontSizeAdjust",
    fontstretch: "fontStretch",
    "font-stretch": "fontStretch",
    fontstyle: "fontStyle",
    "font-style": "fontStyle",
    fontvariant: "fontVariant",
    "font-variant": "fontVariant",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    format: "format",
    from: "from",
    fx: "fx",
    fy: "fy",
    g1: "g1",
    g2: "g2",
    glyphname: "glyphName",
    "glyph-name": "glyphName",
    glyphorientationhorizontal: "glyphOrientationHorizontal",
    "glyph-orientation-horizontal": "glyphOrientationHorizontal",
    glyphorientationvertical: "glyphOrientationVertical",
    "glyph-orientation-vertical": "glyphOrientationVertical",
    glyphref: "glyphRef",
    gradienttransform: "gradientTransform",
    gradientunits: "gradientUnits",
    hanging: "hanging",
    horizadvx: "horizAdvX",
    "horiz-adv-x": "horizAdvX",
    horizoriginx: "horizOriginX",
    "horiz-origin-x": "horizOriginX",
    ideographic: "ideographic",
    imagerendering: "imageRendering",
    "image-rendering": "imageRendering",
    in2: "in2",
    in: "in",
    inlist: "inlist",
    intercept: "intercept",
    k1: "k1",
    k2: "k2",
    k3: "k3",
    k4: "k4",
    k: "k",
    kernelmatrix: "kernelMatrix",
    kernelunitlength: "kernelUnitLength",
    kerning: "kerning",
    keypoints: "keyPoints",
    keysplines: "keySplines",
    keytimes: "keyTimes",
    lengthadjust: "lengthAdjust",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    lightingcolor: "lightingColor",
    "lighting-color": "lightingColor",
    limitingconeangle: "limitingConeAngle",
    local: "local",
    markerend: "markerEnd",
    "marker-end": "markerEnd",
    markerheight: "markerHeight",
    markermid: "markerMid",
    "marker-mid": "markerMid",
    markerstart: "markerStart",
    "marker-start": "markerStart",
    markerunits: "markerUnits",
    markerwidth: "markerWidth",
    mask: "mask",
    maskcontentunits: "maskContentUnits",
    maskunits: "maskUnits",
    mathematical: "mathematical",
    mode: "mode",
    numoctaves: "numOctaves",
    offset: "offset",
    opacity: "opacity",
    operator: "operator",
    order: "order",
    orient: "orient",
    orientation: "orientation",
    origin: "origin",
    overflow: "overflow",
    overlineposition: "overlinePosition",
    "overline-position": "overlinePosition",
    overlinethickness: "overlineThickness",
    "overline-thickness": "overlineThickness",
    paintorder: "paintOrder",
    "paint-order": "paintOrder",
    panose1: "panose1",
    "panose-1": "panose1",
    pathlength: "pathLength",
    patterncontentunits: "patternContentUnits",
    patterntransform: "patternTransform",
    patternunits: "patternUnits",
    pointerevents: "pointerEvents",
    "pointer-events": "pointerEvents",
    points: "points",
    pointsatx: "pointsAtX",
    pointsaty: "pointsAtY",
    pointsatz: "pointsAtZ",
    prefix: "prefix",
    preservealpha: "preserveAlpha",
    preserveaspectratio: "preserveAspectRatio",
    primitiveunits: "primitiveUnits",
    property: "property",
    r: "r",
    radius: "radius",
    refx: "refX",
    refy: "refY",
    renderingintent: "renderingIntent",
    "rendering-intent": "renderingIntent",
    repeatcount: "repeatCount",
    repeatdur: "repeatDur",
    requiredextensions: "requiredExtensions",
    requiredfeatures: "requiredFeatures",
    resource: "resource",
    restart: "restart",
    result: "result",
    results: "results",
    rotate: "rotate",
    rx: "rx",
    ry: "ry",
    scale: "scale",
    security: "security",
    seed: "seed",
    shaperendering: "shapeRendering",
    "shape-rendering": "shapeRendering",
    slope: "slope",
    spacing: "spacing",
    specularconstant: "specularConstant",
    specularexponent: "specularExponent",
    speed: "speed",
    spreadmethod: "spreadMethod",
    startoffset: "startOffset",
    stddeviation: "stdDeviation",
    stemh: "stemh",
    stemv: "stemv",
    stitchtiles: "stitchTiles",
    stopcolor: "stopColor",
    "stop-color": "stopColor",
    stopopacity: "stopOpacity",
    "stop-opacity": "stopOpacity",
    strikethroughposition: "strikethroughPosition",
    "strikethrough-position": "strikethroughPosition",
    strikethroughthickness: "strikethroughThickness",
    "strikethrough-thickness": "strikethroughThickness",
    string: "string",
    stroke: "stroke",
    strokedasharray: "strokeDasharray",
    "stroke-dasharray": "strokeDasharray",
    strokedashoffset: "strokeDashoffset",
    "stroke-dashoffset": "strokeDashoffset",
    strokelinecap: "strokeLinecap",
    "stroke-linecap": "strokeLinecap",
    strokelinejoin: "strokeLinejoin",
    "stroke-linejoin": "strokeLinejoin",
    strokemiterlimit: "strokeMiterlimit",
    "stroke-miterlimit": "strokeMiterlimit",
    strokewidth: "strokeWidth",
    "stroke-width": "strokeWidth",
    strokeopacity: "strokeOpacity",
    "stroke-opacity": "strokeOpacity",
    suppresscontenteditablewarning: "suppressContentEditableWarning",
    suppresshydrationwarning: "suppressHydrationWarning",
    surfacescale: "surfaceScale",
    systemlanguage: "systemLanguage",
    tablevalues: "tableValues",
    targetx: "targetX",
    targety: "targetY",
    textanchor: "textAnchor",
    "text-anchor": "textAnchor",
    textdecoration: "textDecoration",
    "text-decoration": "textDecoration",
    textlength: "textLength",
    textrendering: "textRendering",
    "text-rendering": "textRendering",
    to: "to",
    transform: "transform",
    typeof: "typeof",
    u1: "u1",
    u2: "u2",
    underlineposition: "underlinePosition",
    "underline-position": "underlinePosition",
    underlinethickness: "underlineThickness",
    "underline-thickness": "underlineThickness",
    unicode: "unicode",
    unicodebidi: "unicodeBidi",
    "unicode-bidi": "unicodeBidi",
    unicoderange: "unicodeRange",
    "unicode-range": "unicodeRange",
    unitsperem: "unitsPerEm",
    "units-per-em": "unitsPerEm",
    unselectable: "unselectable",
    valphabetic: "vAlphabetic",
    "v-alphabetic": "vAlphabetic",
    values: "values",
    vectoreffect: "vectorEffect",
    "vector-effect": "vectorEffect",
    version: "version",
    vertadvy: "vertAdvY",
    "vert-adv-y": "vertAdvY",
    vertoriginx: "vertOriginX",
    "vert-origin-x": "vertOriginX",
    vertoriginy: "vertOriginY",
    "vert-origin-y": "vertOriginY",
    vhanging: "vHanging",
    "v-hanging": "vHanging",
    videographic: "vIdeographic",
    "v-ideographic": "vIdeographic",
    viewbox: "viewBox",
    viewtarget: "viewTarget",
    visibility: "visibility",
    vmathematical: "vMathematical",
    "v-mathematical": "vMathematical",
    vocab: "vocab",
    widths: "widths",
    wordspacing: "wordSpacing",
    "word-spacing": "wordSpacing",
    writingmode: "writingMode",
    "writing-mode": "writingMode",
    x1: "x1",
    x2: "x2",
    x: "x",
    xchannelselector: "xChannelSelector",
    xheight: "xHeight",
    "x-height": "xHeight",
    xlinkactuate: "xlinkActuate",
    "xlink:actuate": "xlinkActuate",
    xlinkarcrole: "xlinkArcrole",
    "xlink:arcrole": "xlinkArcrole",
    xlinkhref: "xlinkHref",
    "xlink:href": "xlinkHref",
    xlinkrole: "xlinkRole",
    "xlink:role": "xlinkRole",
    xlinkshow: "xlinkShow",
    "xlink:show": "xlinkShow",
    xlinktitle: "xlinkTitle",
    "xlink:title": "xlinkTitle",
    xlinktype: "xlinkType",
    "xlink:type": "xlinkType",
    xmlbase: "xmlBase",
    "xml:base": "xmlBase",
    xmllang: "xmlLang",
    "xml:lang": "xmlLang",
    xmlns: "xmlns",
    "xml:space": "xmlSpace",
    xmlnsxlink: "xmlnsXlink",
    "xmlns:xlink": "xmlnsXlink",
    xmlspace: "xmlSpace",
    y1: "y1",
    y2: "y2",
    y: "y",
    ychannelselector: "yChannelSelector",
    z: "z",
    zoomandpan: "zoomAndPan"
  }, Sn = function() {
  };
  {
    var Ie = {}, Et = /^on./, Nt = /^on[^A-Z]/, Un = new RegExp("^(aria)-[" + ln + "]*$"), vr = new RegExp("^(aria)[A-Z][" + ln + "]*$");
    Sn = function(r, o, u, d) {
      if (le.call(Ie, o) && Ie[o])
        return !0;
      var g = o.toLowerCase();
      if (g === "onfocusin" || g === "onfocusout")
        return s("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ie[o] = !0, !0;
      if (d != null) {
        var S = d.registrationNameDependencies, F = d.possibleRegistrationNames;
        if (S.hasOwnProperty(o))
          return !0;
        var L = F.hasOwnProperty(g) ? F[g] : null;
        if (L != null)
          return s("Invalid event handler property `%s`. Did you mean `%s`?", o, L), Ie[o] = !0, !0;
        if (Et.test(o))
          return s("Unknown event handler property `%s`. It will be ignored.", o), Ie[o] = !0, !0;
      } else if (Et.test(o))
        return Nt.test(o) && s("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", o), Ie[o] = !0, !0;
      if (Un.test(o) || vr.test(o))
        return !0;
      if (g === "innerhtml")
        return s("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ie[o] = !0, !0;
      if (g === "aria")
        return s("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ie[o] = !0, !0;
      if (g === "is" && u !== null && u !== void 0 && typeof u != "string")
        return s("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof u), Ie[o] = !0, !0;
      if (typeof u == "number" && isNaN(u))
        return s("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", o), Ie[o] = !0, !0;
      var n = Ve(o), a = n !== null && n.type === Je;
      if (mt.hasOwnProperty(g)) {
        var l = mt[g];
        if (l !== o)
          return s("Invalid DOM property `%s`. Did you mean `%s`?", o, l), Ie[o] = !0, !0;
      } else if (!a && o !== g)
        return s("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", o, g), Ie[o] = !0, !0;
      return typeof u == "boolean" && Xn(o, u, n, !1) ? (u ? s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', u, o, o, u, o) : s('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', u, o, o, u, o, o, o), Ie[o] = !0, !0) : a ? !0 : Xn(o, u, n, !1) ? (Ie[o] = !0, !1) : ((u === "false" || u === "true") && n !== null && n.type === ze && (s("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", u, o, u === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', o, u), Ie[o] = !0), !0);
    };
  }
  var hr = function(r, o, u) {
    {
      var d = [];
      for (var g in o) {
        var S = Sn(r, g, o[g], u);
        S || d.push(g);
      }
      var F = d.map(function(L) {
        return "`" + L + "`";
      }).join(", ");
      d.length === 1 ? s("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", F, r) : d.length > 1 && s("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", F, r);
    }
  };
  function gr(r, o, u) {
    Mn(r, o) || hr(r, o, u);
  }
  var pn = function() {
  };
  {
    var Cn = /^(?:webkit|moz|o)[A-Z]/, kt = /^-ms-/, Wt = /-(.)/g, zn = /;\s*$/, En = {}, en = {}, $n = !1, kn = !1, nt = function(r) {
      return r.replace(Wt, function(o, u) {
        return u.toUpperCase();
      });
    }, xr = function(r) {
      En.hasOwnProperty(r) && En[r] || (En[r] = !0, s(
        "Unsupported style property %s. Did you mean %s?",
        r,
        // As Andi Smith suggests
        // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
        // is converted to lowercase `ms`.
        nt(r.replace(kt, "ms-"))
      ));
    }, Yt = function(r) {
      En.hasOwnProperty(r) && En[r] || (En[r] = !0, s("Unsupported vendor-prefixed style property %s. Did you mean %s?", r, r.charAt(0).toUpperCase() + r.slice(1)));
    }, br = function(r, o) {
      en.hasOwnProperty(o) && en[o] || (en[o] = !0, s(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, r, o.replace(zn, "")));
    }, Gt = function(r, o) {
      $n || ($n = !0, s("`NaN` is an invalid value for the `%s` css style property.", r));
    }, Te = function(r, o) {
      kn || (kn = !0, s("`Infinity` is an invalid value for the `%s` css style property.", r));
    };
    pn = function(r, o) {
      r.indexOf("-") > -1 ? xr(r) : Cn.test(r) ? Yt(r) : zn.test(o) && br(r, o), typeof o == "number" && (isNaN(o) ? Gt(r, o) : isFinite(o) || Te(r, o));
    };
  }
  var tt = pn, Tt = /["'&<>]/;
  function Rt(r) {
    ge(r);
    var o = "" + r, u = Tt.exec(o);
    if (!u)
      return o;
    var d, g = "", S, F = 0;
    for (S = u.index; S < o.length; S++) {
      switch (o.charCodeAt(S)) {
        case 34:
          d = "&quot;";
          break;
        case 38:
          d = "&amp;";
          break;
        case 39:
          d = "&#x27;";
          break;
        case 60:
          d = "&lt;";
          break;
        case 62:
          d = "&gt;";
          break;
        default:
          continue;
      }
      F !== S && (g += o.substring(F, S)), F = S + 1, g += d;
    }
    return F !== S ? g + o.substring(F, S) : g;
  }
  function Fe(r) {
    return typeof r == "boolean" || typeof r == "number" ? "" + r : Rt(r);
  }
  var qt = /([A-Z])/g, yr = /^ms-/;
  function wr(r) {
    return r.replace(qt, "-$1").toLowerCase().replace(yr, "-ms-");
  }
  var E = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, H = !1;
  function G(r) {
    !H && E.test(r) && (H = !0, s("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(r)));
  }
  var Z = Array.isArray;
  function re(r) {
    return Z(r);
  }
  var ue = A("<script>"), ie = A("<\/script>"), ne = A('<script src="'), De = A('<script type="module" src="'), xe = A('" async=""><\/script>');
  function he(r) {
    return ge(r), ("" + r).replace(_e, nn);
  }
  var _e = /(<\/|<)(s)(cript)/gi, nn = function(r, o, u, d) {
    return "" + o + (u === "s" ? "\\u0073" : "\\u0053") + d;
  };
  function rt(r, o, u, d, g) {
    var S = r === void 0 ? "" : r, F = o === void 0 ? ue : A('<script nonce="' + Fe(o) + '">'), L = [];
    if (u !== void 0 && L.push(F, _(he(u)), ie), d !== void 0)
      for (var n = 0; n < d.length; n++)
        L.push(ne, _(Fe(d[n])), xe);
    if (g !== void 0)
      for (var a = 0; a < g.length; a++)
        L.push(De, _(Fe(g[a])), xe);
    return {
      bootstrapChunks: L,
      startInlineScript: F,
      placeholderPrefix: A(S + "P:"),
      segmentPrefix: A(S + "S:"),
      boundaryPrefix: S + "B:",
      idPrefix: S,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1
    };
  }
  var je = 0, Hn = 1, at = 2, it = 3, Ge = 4, ot = 5, Vt = 6, Xt = 7;
  function Xe(r, o) {
    return {
      insertionMode: r,
      selectedValue: o
    };
  }
  function Zt(r) {
    var o = r === "http://www.w3.org/2000/svg" ? at : r === "http://www.w3.org/1998/Math/MathML" ? it : je;
    return Xe(o, null);
  }
  function Sr(r, o, u) {
    switch (o) {
      case "select":
        return Xe(Hn, u.value != null ? u.value : u.defaultValue);
      case "svg":
        return Xe(at, null);
      case "math":
        return Xe(it, null);
      case "foreignObject":
        return Xe(Hn, null);
      case "table":
        return Xe(Ge, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Xe(ot, null);
      case "colgroup":
        return Xe(Xt, null);
      case "tr":
        return Xe(Vt, null);
    }
    return r.insertionMode >= Ge || r.insertionMode === je ? Xe(Hn, null) : r;
  }
  var ua = null;
  function pa(r) {
    var o = r.nextSuspenseID++;
    return A(r.boundaryPrefix + o.toString(16));
  }
  function Cr(r, o, u) {
    var d = r.idPrefix, g = ":" + d + "R" + o;
    return u > 0 && (g += "H" + u.toString(32)), g + ":";
  }
  function Er(r) {
    return Fe(r);
  }
  var da = A("<!-- -->");
  function At(r, o, u, d) {
    return o === "" ? d : (d && r.push(da), r.push(_(Er(o))), !0);
  }
  function Jt(r, o, u, d) {
    u && d && r.push(da);
  }
  var vt = /* @__PURE__ */ new Map();
  function dn(r) {
    var o = vt.get(r);
    if (o !== void 0)
      return o;
    var u = A(Fe(wr(r)));
    return vt.set(r, u), u;
  }
  var Tn = A(' style="'), Bn = A(":"), kr = A(";");
  function We(r, o, u) {
    if (typeof u != "object")
      throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    var d = !0;
    for (var g in u)
      if (le.call(u, g)) {
        var S = u[g];
        if (!(S == null || typeof S == "boolean" || S === "")) {
          var F = void 0, L = void 0, n = g.indexOf("--") === 0;
          n ? (F = _(Fe(g)), me(S, g), L = _(Fe(("" + S).trim()))) : (tt(g, S), F = dn(g), typeof S == "number" ? S !== 0 && !le.call(jn, g) ? L = _(S + "px") : L = _("" + S) : (me(S, g), L = _(Fe(("" + S).trim())))), d ? (d = !1, r.push(Tn, F, Bn, L)) : r.push(kr, F, Bn, L);
        }
      }
    d || r.push(tn);
  }
  var He = A(" "), fn = A('="'), tn = A('"'), Qt = A('=""');
  function Me(r, o, u, d) {
    switch (u) {
      case "style": {
        We(r, o, d);
        return;
      }
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (
      // shouldIgnoreAttribute
      // We have already filtered out null/undefined and reserved words.
      !(u.length > 2 && (u[0] === "o" || u[0] === "O") && (u[1] === "n" || u[1] === "N"))
    ) {
      var g = Ve(u);
      if (g !== null) {
        switch (typeof d) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!g.acceptsBooleans)
              return;
        }
        var S = g.attributeName, F = _(S);
        switch (g.type) {
          case ze:
            d && r.push(He, F, Qt);
            return;
          case $e:
            d === !0 ? r.push(He, F, Qt) : d === !1 || r.push(He, F, fn, _(Fe(d)), tn);
            return;
          case Ye:
            isNaN(d) || r.push(He, F, fn, _(Fe(d)), tn);
            break;
          case Qe:
            !isNaN(d) && d >= 1 && r.push(He, F, fn, _(Fe(d)), tn);
            break;
          default:
            g.sanitizeURL && (X(d, S), d = "" + d, G(d)), r.push(He, F, fn, _(Fe(d)), tn);
        }
      } else if (pe(u)) {
        switch (typeof d) {
          case "function":
          case "symbol":
            return;
          case "boolean": {
            var L = u.toLowerCase().slice(0, 5);
            if (L !== "data-" && L !== "aria-")
              return;
          }
        }
        r.push(He, _(u), fn, _(Fe(d)), tn);
      }
    }
  }
  var Rn = A(">"), Nn = A("/>");
  function st(r, o, u) {
    if (o != null) {
      if (u != null)
        throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
      if (typeof o != "object" || !("__html" in o))
        throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      var d = o.__html;
      d != null && (ge(d), r.push(_("" + d)));
    }
  }
  var Kt = !1, Tr = !1, Rr = !1, Ar = !1, fa = !1, _t = !1, _r = !1;
  function Pr(r, o) {
    {
      var u = r[o];
      if (u != null) {
        var d = re(u);
        r.multiple && !d ? s("The `%s` prop supplied to <select> must be an array if `multiple` is true.", o) : !r.multiple && d && s("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.", o);
      }
    }
  }
  function si(r, o, u) {
    Dn("select", o), Pr(o, "value"), Pr(o, "defaultValue"), o.value !== void 0 && o.defaultValue !== void 0 && !Rr && (s("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Rr = !0), r.push(Ze("select"));
    var d = null, g = null;
    for (var S in o)
      if (le.call(o, S)) {
        var F = o[S];
        if (F == null)
          continue;
        switch (S) {
          case "children":
            d = F;
            break;
          case "dangerouslySetInnerHTML":
            g = F;
            break;
          case "defaultValue":
          case "value":
            break;
          default:
            Me(r, u, S, F);
            break;
        }
      }
    return r.push(Rn), st(r, g, d), d;
  }
  function ma(r) {
    var o = "";
    return e.Children.forEach(r, function(u) {
      u != null && (o += u, !fa && typeof u != "string" && typeof u != "number" && (fa = !0, s("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
    }), o;
  }
  var er = A(' selected=""');
  function ci(r, o, u, d) {
    var g = d.selectedValue;
    r.push(Ze("option"));
    var S = null, F = null, L = null, n = null;
    for (var a in o)
      if (le.call(o, a)) {
        var l = o[a];
        if (l == null)
          continue;
        switch (a) {
          case "children":
            S = l;
            break;
          case "selected":
            L = l, _r || (s("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), _r = !0);
            break;
          case "dangerouslySetInnerHTML":
            n = l;
            break;
          case "value":
            F = l;
          default:
            Me(r, u, a, l);
            break;
        }
      }
    if (g != null) {
      var p;
      if (F !== null ? (X(F, "value"), p = "" + F) : (n !== null && (_t || (_t = !0, s("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))), p = ma(S)), re(g))
        for (var v = 0; v < g.length; v++) {
          X(g[v], "value");
          var y = "" + g[v];
          if (y === p) {
            r.push(er);
            break;
          }
        }
      else
        X(g, "select.value"), "" + g === p && r.push(er);
    } else
      L && r.push(er);
    return r.push(Rn), st(r, n, S), S;
  }
  function Or(r, o, u) {
    Dn("input", o), o.checked !== void 0 && o.defaultChecked !== void 0 && !Tr && (s("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", o.type), Tr = !0), o.value !== void 0 && o.defaultValue !== void 0 && !Kt && (s("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", "A component", o.type), Kt = !0), r.push(Ze("input"));
    var d = null, g = null, S = null, F = null;
    for (var L in o)
      if (le.call(o, L)) {
        var n = o[L];
        if (n == null)
          continue;
        switch (L) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw new Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          case "defaultChecked":
            F = n;
            break;
          case "defaultValue":
            g = n;
            break;
          case "checked":
            S = n;
            break;
          case "value":
            d = n;
            break;
          default:
            Me(r, u, L, n);
            break;
        }
      }
    return S !== null ? Me(r, u, "checked", S) : F !== null && Me(r, u, "checked", F), d !== null ? Me(r, u, "value", d) : g !== null && Me(r, u, "value", g), r.push(Nn), null;
  }
  function li(r, o, u) {
    Dn("textarea", o), o.value !== void 0 && o.defaultValue !== void 0 && !Ar && (s("Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Ar = !0), r.push(Ze("textarea"));
    var d = null, g = null, S = null;
    for (var F in o)
      if (le.call(o, F)) {
        var L = o[F];
        if (L == null)
          continue;
        switch (F) {
          case "children":
            S = L;
            break;
          case "value":
            d = L;
            break;
          case "defaultValue":
            g = L;
            break;
          case "dangerouslySetInnerHTML":
            throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
          default:
            Me(r, u, F, L);
            break;
        }
      }
    if (d === null && g !== null && (d = g), r.push(Rn), S != null) {
      if (s("Use the `defaultValue` or `value` props instead of setting children on <textarea>."), d != null)
        throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
      if (re(S)) {
        if (S.length > 1)
          throw new Error("<textarea> can only have at most one child.");
        ge(S[0]), d = "" + S[0];
      }
      ge(S), d = "" + S;
    }
    return typeof d == "string" && d[0] === `
` && r.push(Fr), d !== null && (X(d, "value"), r.push(_(Er("" + d)))), null;
  }
  function nr(r, o, u, d) {
    r.push(Ze(u));
    for (var g in o)
      if (le.call(o, g)) {
        var S = o[g];
        if (S == null)
          continue;
        switch (g) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw new Error(u + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
          default:
            Me(r, d, g, S);
            break;
        }
      }
    return r.push(Nn), null;
  }
  function tr(r, o, u) {
    r.push(Ze("menuitem"));
    for (var d in o)
      if (le.call(o, d)) {
        var g = o[d];
        if (g == null)
          continue;
        switch (d) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw new Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
          default:
            Me(r, u, d, g);
            break;
        }
      }
    return r.push(Rn), null;
  }
  function ui(r, o, u) {
    r.push(Ze("title"));
    var d = null;
    for (var g in o)
      if (le.call(o, g)) {
        var S = o[g];
        if (S == null)
          continue;
        switch (g) {
          case "children":
            d = S;
            break;
          case "dangerouslySetInnerHTML":
            throw new Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
          default:
            Me(r, u, g, S);
            break;
        }
      }
    r.push(Rn);
    {
      var F = Array.isArray(d) && d.length < 2 ? d[0] || null : d;
      Array.isArray(d) && d.length > 1 ? s("A title element received an array with more than 1 element as children. In browsers title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : F != null && F.$$typeof != null ? s("A title element received a React element for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering") : F != null && typeof F != "string" && typeof F != "number" && s("A title element received a value that was not a string or number for children. In the browser title Elements can only have Text Nodes as children. If the children being rendered output more than a single text node in aggregate the browser will display markup and comments as text in the title and hydration will likely fail and fall back to client rendering");
    }
    return d;
  }
  function An(r, o, u, d) {
    r.push(Ze(u));
    var g = null, S = null;
    for (var F in o)
      if (le.call(o, F)) {
        var L = o[F];
        if (L == null)
          continue;
        switch (F) {
          case "children":
            g = L;
            break;
          case "dangerouslySetInnerHTML":
            S = L;
            break;
          default:
            Me(r, d, F, L);
            break;
        }
      }
    return r.push(Rn), st(r, S, g), typeof g == "string" ? (r.push(_(Er(g))), null) : g;
  }
  function rn(r, o, u, d) {
    r.push(Ze(u));
    var g = null, S = null;
    for (var F in o)
      if (le.call(o, F)) {
        var L = o[F];
        if (L == null)
          continue;
        switch (F) {
          case "children":
            g = L;
            break;
          case "dangerouslySetInnerHTML":
            S = L;
            break;
          case "style":
            We(r, d, L);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            pe(F) && typeof L != "function" && typeof L != "symbol" && r.push(He, _(F), fn, _(Fe(L)), tn);
            break;
        }
      }
    return r.push(Rn), st(r, S, g), g;
  }
  var Fr = A(`
`);
  function rr(r, o, u, d) {
    r.push(Ze(u));
    var g = null, S = null;
    for (var F in o)
      if (le.call(o, F)) {
        var L = o[F];
        if (L == null)
          continue;
        switch (F) {
          case "children":
            g = L;
            break;
          case "dangerouslySetInnerHTML":
            S = L;
            break;
          default:
            Me(r, d, F, L);
            break;
        }
      }
    if (r.push(Rn), S != null) {
      if (g != null)
        throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
      if (typeof S != "object" || !("__html" in S))
        throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
      var n = S.__html;
      n != null && (typeof n == "string" && n.length > 0 && n[0] === `
` ? r.push(Fr, _(n)) : (ge(n), r.push(_("" + n))));
    }
    return typeof g == "string" && g[0] === `
` && r.push(Fr), g;
  }
  var jr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ar = /* @__PURE__ */ new Map();
  function Ze(r) {
    var o = ar.get(r);
    if (o === void 0) {
      if (!jr.test(r))
        throw new Error("Invalid tag: " + r);
      o = A("<" + r), ar.set(r, o);
    }
    return o;
  }
  var pi = A("<!DOCTYPE html>");
  function di(r, o, u, d, g) {
    switch (Ct(o, u), et(o, u), gr(o, u, null), !u.suppressContentEditableWarning && u.contentEditable && u.children != null && s("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), g.insertionMode !== at && g.insertionMode !== it && o.indexOf("-") === -1 && typeof u.is != "string" && o.toLowerCase() !== o && s("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", o), o) {
      case "select":
        return si(r, u, d);
      case "option":
        return ci(r, u, d, g);
      case "textarea":
        return li(r, u, d);
      case "input":
        return Or(r, u, d);
      case "menuitem":
        return tr(r, u, d);
      case "title":
        return ui(r, u, d);
      case "listing":
      case "pre":
        return rr(r, u, o, d);
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        return nr(r, u, o, d);
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return An(r, u, o, d);
      case "html":
        return g.insertionMode === je && r.push(pi), An(r, u, o, d);
      default:
        return o.indexOf("-") === -1 && typeof u.is != "string" ? An(r, u, o, d) : rn(r, u, o, d);
    }
  }
  var fi = A("</"), mi = A(">");
  function f(r, o, u) {
    switch (o) {
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "img":
      case "input":
      case "keygen":
      case "link":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
        break;
      default:
        r.push(fi, _(o), mi);
    }
  }
  function T(r, o) {
    for (var u = o.bootstrapChunks, d = 0; d < u.length - 1; d++)
      x(r, u[d]);
    return d < u.length ? O(r, u[d]) : !0;
  }
  var M = A('<template id="'), U = A('"></template>');
  function W(r, o, u) {
    x(r, M), x(r, o.placeholderPrefix);
    var d = _(u.toString(16));
    return x(r, d), O(r, U);
  }
  var Q = A("<!--$-->"), V = A('<!--$?--><template id="'), K = A('"></template>'), se = A("<!--$!-->"), de = A("<!--/$-->"), be = A("<template"), ve = A('"'), ye = A(' data-dgst="'), Pe = A(' data-msg="'), Le = A(' data-stck="'), Pt = A("></template>");
  function Ir(r, o) {
    return O(r, Q);
  }
  function Dr(r, o, u) {
    if (x(r, V), u === null)
      throw new Error("An ID must have been assigned before we can complete the boundary.");
    return x(r, u), O(r, K);
  }
  function vi(r, o, u, d, g) {
    var S;
    return S = O(r, se), x(r, be), u && (x(r, ye), x(r, _(Fe(u))), x(r, ve)), d && (x(r, Pe), x(r, _(Fe(d))), x(r, ve)), g && (x(r, Le), x(r, _(Fe(g))), x(r, ve)), S = O(r, Pt), S;
  }
  function va(r, o) {
    return O(r, de);
  }
  function ha(r, o) {
    return O(r, de);
  }
  function ga(r, o) {
    return O(r, de);
  }
  var hi = A('<div hidden id="'), Ps = A('">'), Os = A("</div>"), Fs = A('<svg aria-hidden="true" style="display:none" id="'), js = A('">'), Is = A("</svg>"), Ds = A('<math aria-hidden="true" style="display:none" id="'), Ms = A('">'), Ls = A("</math>"), Us = A('<table hidden id="'), zs = A('">'), $s = A("</table>"), Hs = A('<table hidden><tbody id="'), Bs = A('">'), Ns = A("</tbody></table>"), Ws = A('<table hidden><tr id="'), Ys = A('">'), Gs = A("</tr></table>"), qs = A('<table hidden><colgroup id="'), Vs = A('">'), Xs = A("</colgroup></table>");
  function Zs(r, o, u, d) {
    switch (u.insertionMode) {
      case je:
      case Hn:
        return x(r, hi), x(r, o.segmentPrefix), x(r, _(d.toString(16))), O(r, Ps);
      case at:
        return x(r, Fs), x(r, o.segmentPrefix), x(r, _(d.toString(16))), O(r, js);
      case it:
        return x(r, Ds), x(r, o.segmentPrefix), x(r, _(d.toString(16))), O(r, Ms);
      case Ge:
        return x(r, Us), x(r, o.segmentPrefix), x(r, _(d.toString(16))), O(r, zs);
      case ot:
        return x(r, Hs), x(r, o.segmentPrefix), x(r, _(d.toString(16))), O(r, Bs);
      case Vt:
        return x(r, Ws), x(r, o.segmentPrefix), x(r, _(d.toString(16))), O(r, Ys);
      case Xt:
        return x(r, qs), x(r, o.segmentPrefix), x(r, _(d.toString(16))), O(r, Vs);
      default:
        throw new Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  function Js(r, o) {
    switch (o.insertionMode) {
      case je:
      case Hn:
        return O(r, Os);
      case at:
        return O(r, Is);
      case it:
        return O(r, Ls);
      case Ge:
        return O(r, $s);
      case ot:
        return O(r, Ns);
      case Vt:
        return O(r, Gs);
      case Xt:
        return O(r, Xs);
      default:
        throw new Error("Unknown insertion mode. This is a bug in React.");
    }
  }
  var Qs = "function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)}", Ks = 'function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}}', ec = 'function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())}', nc = A(Qs + ';$RS("'), tc = A('$RS("'), rc = A('","'), ac = A('")<\/script>');
  function ic(r, o, u) {
    x(r, o.startInlineScript), o.sentCompleteSegmentFunction ? x(r, tc) : (o.sentCompleteSegmentFunction = !0, x(r, nc)), x(r, o.segmentPrefix);
    var d = _(u.toString(16));
    return x(r, d), x(r, rc), x(r, o.placeholderPrefix), x(r, d), O(r, ac);
  }
  var oc = A(Ks + ';$RC("'), sc = A('$RC("'), cc = A('","'), lc = A('")<\/script>');
  function gi(r, o, u, d) {
    if (x(r, o.startInlineScript), o.sentCompleteBoundaryFunction ? x(r, sc) : (o.sentCompleteBoundaryFunction = !0, x(r, oc)), u === null)
      throw new Error("An ID must have been assigned before we can complete the boundary.");
    var g = _(d.toString(16));
    return x(r, u), x(r, cc), x(r, o.segmentPrefix), x(r, g), O(r, lc);
  }
  var uc = A(ec + ';$RX("'), pc = A('$RX("'), xi = A('"'), dc = A(")<\/script>"), bi = A(",");
  function go(r, o, u, d, g, S) {
    if (x(r, o.startInlineScript), o.sentClientRenderFunction ? x(r, pc) : (o.sentClientRenderFunction = !0, x(r, uc)), u === null)
      throw new Error("An ID must have been assigned before we can complete the boundary.");
    return x(r, u), x(r, xi), (d || g || S) && (x(r, bi), x(r, _(yi(d || "")))), (g || S) && (x(r, bi), x(r, _(yi(g || "")))), S && (x(r, bi), x(r, _(yi(S)))), O(r, dc);
  }
  var xo = /[<\u2028\u2029]/g;
  function yi(r) {
    var o = JSON.stringify(r);
    return o.replace(xo, function(u) {
      switch (u) {
        case "<":
          return "\\u003c";
        case "\u2028":
          return "\\u2028";
        case "\u2029":
          return "\\u2029";
        default:
          throw new Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
      }
    });
  }
  var mn = Object.assign, fc = Symbol.for("react.element"), bo = Symbol.for("react.portal"), an = Symbol.for("react.fragment"), yo = Symbol.for("react.strict_mode"), wi = Symbol.for("react.profiler"), xa = Symbol.for("react.provider"), ba = Symbol.for("react.context"), ya = Symbol.for("react.forward_ref"), Mr = Symbol.for("react.suspense"), Lr = Symbol.for("react.suspense_list"), Ur = Symbol.for("react.memo"), ir = Symbol.for("react.lazy"), Si = Symbol.for("react.scope"), Ci = Symbol.for("react.debug_trace_mode"), wa = Symbol.for("react.legacy_hidden"), mc = Symbol.for("react.default_value"), wo = Symbol.iterator, vc = "@@iterator";
  function hc(r) {
    if (r === null || typeof r != "object")
      return null;
    var o = wo && r[wo] || r[vc];
    return typeof o == "function" ? o : null;
  }
  function So(r, o, u) {
    var d = r.displayName;
    if (d)
      return d;
    var g = o.displayName || o.name || "";
    return g !== "" ? u + "(" + g + ")" : u;
  }
  function Co(r) {
    return r.displayName || "Context";
  }
  function Re(r) {
    if (r == null)
      return null;
    if (typeof r.tag == "number" && s("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
      return r.displayName || r.name || null;
    if (typeof r == "string")
      return r;
    switch (r) {
      case an:
        return "Fragment";
      case bo:
        return "Portal";
      case wi:
        return "Profiler";
      case yo:
        return "StrictMode";
      case Mr:
        return "Suspense";
      case Lr:
        return "SuspenseList";
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case ba:
          var o = r;
          return Co(o) + ".Consumer";
        case xa:
          var u = r;
          return Co(u._context) + ".Provider";
        case ya:
          return So(r, r.render, "ForwardRef");
        case Ur:
          var d = r.displayName || null;
          return d !== null ? d : Re(r.type) || "Memo";
        case ir: {
          var g = r, S = g._payload, F = g._init;
          try {
            return Re(F(S));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var zr = 0, Ei, Ce, or, ki, Ti, Ri, Ai;
  function _i() {
  }
  _i.__reactDisabledLog = !0;
  function Eo() {
    {
      if (zr === 0) {
        Ei = console.log, Ce = console.info, or = console.warn, ki = console.error, Ti = console.group, Ri = console.groupCollapsed, Ai = console.groupEnd;
        var r = {
          configurable: !0,
          enumerable: !0,
          value: _i,
          writable: !0
        };
        Object.defineProperties(console, {
          info: r,
          log: r,
          warn: r,
          error: r,
          group: r,
          groupCollapsed: r,
          groupEnd: r
        });
      }
      zr++;
    }
  }
  function ko() {
    {
      if (zr--, zr === 0) {
        var r = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: mn({}, r, {
            value: Ei
          }),
          info: mn({}, r, {
            value: Ce
          }),
          warn: mn({}, r, {
            value: or
          }),
          error: mn({}, r, {
            value: ki
          }),
          group: mn({}, r, {
            value: Ti
          }),
          groupCollapsed: mn({}, r, {
            value: Ri
          }),
          groupEnd: mn({}, r, {
            value: Ai
          })
        });
      }
      zr < 0 && s("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var Sa = i.ReactCurrentDispatcher, Pi;
  function $r(r, o, u) {
    {
      if (Pi === void 0)
        try {
          throw Error();
        } catch (g) {
          var d = g.stack.trim().match(/\n( *(at )?)/);
          Pi = d && d[1] || "";
        }
      return `
` + Pi + r;
    }
  }
  var Hr = !1, sr;
  {
    var Br = typeof WeakMap == "function" ? WeakMap : Map;
    sr = new Br();
  }
  function Nr(r, o) {
    if (!r || Hr)
      return "";
    {
      var u = sr.get(r);
      if (u !== void 0)
        return u;
    }
    var d;
    Hr = !0;
    var g = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var S;
    S = Sa.current, Sa.current = null, Eo();
    try {
      if (o) {
        var F = function() {
          throw Error();
        };
        if (Object.defineProperty(F.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(F, []);
          } catch (P) {
            d = P;
          }
          Reflect.construct(r, [], F);
        } else {
          try {
            F.call();
          } catch (P) {
            d = P;
          }
          r.call(F.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (P) {
          d = P;
        }
        r();
      }
    } catch (P) {
      if (P && d && typeof P.stack == "string") {
        for (var L = P.stack.split(`
`), n = d.stack.split(`
`), a = L.length - 1, l = n.length - 1; a >= 1 && l >= 0 && L[a] !== n[l]; )
          l--;
        for (; a >= 1 && l >= 0; a--, l--)
          if (L[a] !== n[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, l < 0 || L[a] !== n[l]) {
                  var p = `
` + L[a].replace(" at new ", " at ");
                  return r.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", r.displayName)), typeof r == "function" && sr.set(r, p), p;
                }
              while (a >= 1 && l >= 0);
            break;
          }
      }
    } finally {
      Hr = !1, Sa.current = S, ko(), Error.prepareStackTrace = g;
    }
    var v = r ? r.displayName || r.name : "", y = v ? $r(v) : "";
    return typeof r == "function" && sr.set(r, y), y;
  }
  function Ca(r, o, u) {
    return Nr(r, !0);
  }
  function To(r, o, u) {
    return Nr(r, !1);
  }
  function Oi(r) {
    var o = r.prototype;
    return !!(o && o.isReactComponent);
  }
  function Fi(r, o, u) {
    if (r == null)
      return "";
    if (typeof r == "function")
      return Nr(r, Oi(r));
    if (typeof r == "string")
      return $r(r);
    switch (r) {
      case Mr:
        return $r("Suspense");
      case Lr:
        return $r("SuspenseList");
    }
    if (typeof r == "object")
      switch (r.$$typeof) {
        case ya:
          return To(r.render);
        case Ur:
          return Fi(r.type, o, u);
        case ir: {
          var d = r, g = d._payload, S = d._init;
          try {
            return Fi(S(g), o, u);
          } catch {
          }
        }
      }
    return "";
  }
  var ji = {}, Ro = i.ReactDebugCurrentFrame;
  function cr(r) {
    if (r) {
      var o = r._owner, u = Fi(r.type, r._source, o ? o.type : null);
      Ro.setExtraStackFrame(u);
    } else
      Ro.setExtraStackFrame(null);
  }
  function Ii(r, o, u, d, g) {
    {
      var S = Function.call.bind(le);
      for (var F in r)
        if (S(r, F)) {
          var L = void 0;
          try {
            if (typeof r[F] != "function") {
              var n = Error((d || "React class") + ": " + u + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw n.name = "Invariant Violation", n;
            }
            L = r[F](o, F, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (a) {
            L = a;
          }
          L && !(L instanceof Error) && (cr(g), s("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, F, typeof L), cr(null)), L instanceof Error && !(L.message in ji) && (ji[L.message] = !0, cr(g), s("Failed %s type: %s", u, L.message), cr(null));
        }
    }
  }
  var Ea;
  Ea = {};
  var Ot = {};
  Object.freeze(Ot);
  function Di(r, o) {
    {
      var u = r.contextTypes;
      if (!u)
        return Ot;
      var d = {};
      for (var g in u)
        d[g] = o[g];
      {
        var S = Re(r) || "Unknown";
        Ii(u, d, "context", S);
      }
      return d;
    }
  }
  function Mi(r, o, u, d) {
    {
      if (typeof r.getChildContext != "function") {
        {
          var g = Re(o) || "Unknown";
          Ea[g] || (Ea[g] = !0, s("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", g, g));
        }
        return u;
      }
      var S = r.getChildContext();
      for (var F in S)
        if (!(F in d))
          throw new Error((Re(o) || "Unknown") + '.getChildContext(): key "' + F + '" is not defined in childContextTypes.');
      {
        var L = Re(o) || "Unknown";
        Ii(d, S, "child context", L);
      }
      return mn({}, u, S);
    }
  }
  var ht;
  ht = {};
  var Ao = null, Ft = null;
  function jt(r) {
    r.context._currentValue = r.parentValue;
  }
  function Li(r) {
    r.context._currentValue = r.value;
  }
  function Wn(r, o) {
    if (r !== o) {
      jt(r);
      var u = r.parent, d = o.parent;
      if (u === null) {
        if (d !== null)
          throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
      } else {
        if (d === null)
          throw new Error("The stacks must reach the root at the same time. This is a bug in React.");
        Wn(u, d);
      }
      Li(o);
    }
  }
  function ka(r) {
    jt(r);
    var o = r.parent;
    o !== null && ka(o);
  }
  function Ta(r) {
    var o = r.parent;
    o !== null && Ta(o), Li(r);
  }
  function Wr(r, o) {
    jt(r);
    var u = r.parent;
    if (u === null)
      throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    u.depth === o.depth ? Wn(u, o) : Wr(u, o);
  }
  function Ui(r, o) {
    var u = o.parent;
    if (u === null)
      throw new Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
    r.depth === u.depth ? Wn(r, u) : Ui(r, u), Li(o);
  }
  function Yr(r) {
    var o = Ft, u = r;
    o !== u && (o === null ? Ta(u) : u === null ? ka(o) : o.depth === u.depth ? Wn(o, u) : o.depth > u.depth ? Wr(o, u) : Ui(o, u), Ft = u);
  }
  function _o(r, o) {
    var u;
    u = r._currentValue, r._currentValue = o, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== ht && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = ht;
    var d = Ft, g = {
      parent: d,
      depth: d === null ? 0 : d.depth + 1,
      context: r,
      parentValue: u,
      value: o
    };
    return Ft = g, g;
  }
  function Po(r) {
    var o = Ft;
    if (o === null)
      throw new Error("Tried to pop a Context at the root of the app. This is a bug in React.");
    o.context !== r && s("The parent context is not the expected context. This is probably a bug in React.");
    {
      var u = o.parentValue;
      u === mc ? o.context._currentValue = o.context._defaultValue : o.context._currentValue = u, r._currentRenderer !== void 0 && r._currentRenderer !== null && r._currentRenderer !== ht && s("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), r._currentRenderer = ht;
    }
    return Ft = o.parent;
  }
  function Ra() {
    return Ft;
  }
  function Gr(r) {
    var o = r._currentValue;
    return o;
  }
  function zi(r) {
    return r._reactInternals;
  }
  function gc(r, o) {
    r._reactInternals = o;
  }
  var lr = {}, Aa = {}, $i, _a, Pa, qr, Oa, ur, Vr, Fa, pr;
  {
    $i = /* @__PURE__ */ new Set(), _a = /* @__PURE__ */ new Set(), Pa = /* @__PURE__ */ new Set(), Vr = /* @__PURE__ */ new Set(), qr = /* @__PURE__ */ new Set(), Fa = /* @__PURE__ */ new Set(), pr = /* @__PURE__ */ new Set();
    var ja = /* @__PURE__ */ new Set();
    ur = function(r, o) {
      if (!(r === null || typeof r == "function")) {
        var u = o + "_" + r;
        ja.has(u) || (ja.add(u), s("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o, r));
      }
    }, Oa = function(r, o) {
      if (o === void 0) {
        var u = Re(r) || "Component";
        qr.has(u) || (qr.add(u), s("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", u));
      }
    };
  }
  function Ia(r, o) {
    {
      var u = r.constructor, d = u && Re(u) || "ReactClass", g = d + "." + o;
      if (lr[g])
        return;
      s(`%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op.

Please check the code for the %s component.`, o, o, d), lr[g] = !0;
    }
  }
  var Da = {
    isMounted: function(r) {
      return !1;
    },
    enqueueSetState: function(r, o, u) {
      var d = zi(r);
      d.queue === null ? Ia(r, "setState") : (d.queue.push(o), u != null && ur(u, "setState"));
    },
    enqueueReplaceState: function(r, o, u) {
      var d = zi(r);
      d.replace = !0, d.queue = [o], u != null && ur(u, "setState");
    },
    enqueueForceUpdate: function(r, o) {
      var u = zi(r);
      u.queue === null ? Ia(r, "forceUpdate") : o != null && ur(o, "setState");
    }
  };
  function Oo(r, o, u, d, g) {
    var S = u(g, d);
    Oa(o, S);
    var F = S == null ? d : mn({}, d, S);
    return F;
  }
  function Fo(r, o, u) {
    var d = Ot, g = r.contextType;
    if ("contextType" in r) {
      var S = (
        // Allow null for conditional declaration
        g === null || g !== void 0 && g.$$typeof === ba && g._context === void 0
      );
      if (!S && !pr.has(r)) {
        pr.add(r);
        var F = "";
        g === void 0 ? F = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof g != "object" ? F = " However, it is set to a " + typeof g + "." : g.$$typeof === xa ? F = " Did you accidentally pass the Context.Provider instead?" : g._context !== void 0 ? F = " Did you accidentally pass the Context.Consumer instead?" : F = " However, it is set to an object with keys {" + Object.keys(g).join(", ") + "}.", s("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Re(r) || "Component", F);
      }
    }
    typeof g == "object" && g !== null ? d = Gr(g) : d = u;
    var L = new r(o, d);
    {
      if (typeof r.getDerivedStateFromProps == "function" && (L.state === null || L.state === void 0)) {
        var n = Re(r) || "Component";
        $i.has(n) || ($i.add(n), s("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", n, L.state === null ? "null" : "undefined", n));
      }
      if (typeof r.getDerivedStateFromProps == "function" || typeof L.getSnapshotBeforeUpdate == "function") {
        var a = null, l = null, p = null;
        if (typeof L.componentWillMount == "function" && L.componentWillMount.__suppressDeprecationWarning !== !0 ? a = "componentWillMount" : typeof L.UNSAFE_componentWillMount == "function" && (a = "UNSAFE_componentWillMount"), typeof L.componentWillReceiveProps == "function" && L.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? l = "componentWillReceiveProps" : typeof L.UNSAFE_componentWillReceiveProps == "function" && (l = "UNSAFE_componentWillReceiveProps"), typeof L.componentWillUpdate == "function" && L.componentWillUpdate.__suppressDeprecationWarning !== !0 ? p = "componentWillUpdate" : typeof L.UNSAFE_componentWillUpdate == "function" && (p = "UNSAFE_componentWillUpdate"), a !== null || l !== null || p !== null) {
          var v = Re(r) || "Component", y = typeof r.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
          Pa.has(v) || (Pa.add(v), s(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, v, y, a !== null ? `
  ` + a : "", l !== null ? `
  ` + l : "", p !== null ? `
  ` + p : ""));
        }
      }
    }
    return L;
  }
  function jo(r, o, u) {
    {
      var d = Re(o) || "Component", g = r.render;
      g || (o.prototype && typeof o.prototype.render == "function" ? s("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", d) : s("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", d)), r.getInitialState && !r.getInitialState.isReactClassApproved && !r.state && s("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", d), r.getDefaultProps && !r.getDefaultProps.isReactClassApproved && s("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", d), r.propTypes && s("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", d), r.contextType && s("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", d), r.contextTypes && s("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", d), o.contextType && o.contextTypes && !Fa.has(o) && (Fa.add(o), s("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", d)), typeof r.componentShouldUpdate == "function" && s("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", d), o.prototype && o.prototype.isPureReactComponent && typeof r.shouldComponentUpdate < "u" && s("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Re(o) || "A pure component"), typeof r.componentDidUnmount == "function" && s("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", d), typeof r.componentDidReceiveProps == "function" && s("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", d), typeof r.componentWillRecieveProps == "function" && s("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", d), typeof r.UNSAFE_componentWillRecieveProps == "function" && s("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", d);
      var S = r.props !== u;
      r.props !== void 0 && S && s("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", d, d), r.defaultProps && s("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", d, d), typeof r.getSnapshotBeforeUpdate == "function" && typeof r.componentDidUpdate != "function" && !_a.has(o) && (_a.add(o), s("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Re(o))), typeof r.getDerivedStateFromProps == "function" && s("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", d), typeof r.getDerivedStateFromError == "function" && s("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", d), typeof o.getSnapshotBeforeUpdate == "function" && s("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", d);
      var F = r.state;
      F && (typeof F != "object" || re(F)) && s("%s.state: must be set to an object or null", d), typeof r.getChildContext == "function" && typeof o.childContextTypes != "object" && s("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", d);
    }
  }
  function xc(r, o) {
    var u = o.state;
    if (typeof o.componentWillMount == "function") {
      if (o.componentWillMount.__suppressDeprecationWarning !== !0) {
        var d = Re(r) || "Unknown";
        Aa[d] || (c(
          // keep this warning in sync with ReactStrictModeWarning.js
          `componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code from componentWillMount to componentDidMount (preferred in most cases) or the constructor.

Please update the following components: %s`,
          d
        ), Aa[d] = !0);
      }
      o.componentWillMount();
    }
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), u !== o.state && (s("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Re(r) || "Component"), Da.enqueueReplaceState(o, o.state, null));
  }
  function bc(r, o, u, d) {
    if (r.queue !== null && r.queue.length > 0) {
      var g = r.queue, S = r.replace;
      if (r.queue = null, r.replace = !1, S && g.length === 1)
        o.state = g[0];
      else {
        for (var F = S ? g[0] : o.state, L = !0, n = S ? 1 : 0; n < g.length; n++) {
          var a = g[n], l = typeof a == "function" ? a.call(o, F, u, d) : a;
          l != null && (L ? (L = !1, F = mn({}, F, l)) : mn(F, l));
        }
        o.state = F;
      }
    } else
      r.queue = null;
  }
  function Io(r, o, u, d) {
    jo(r, o, u);
    var g = r.state !== void 0 ? r.state : null;
    r.updater = Da, r.props = u, r.state = g;
    var S = {
      queue: [],
      replace: !1
    };
    gc(r, S);
    var F = o.contextType;
    if (typeof F == "object" && F !== null ? r.context = Gr(F) : r.context = d, r.state === u) {
      var L = Re(o) || "Component";
      Vr.has(L) || (Vr.add(L), s("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", L));
    }
    var n = o.getDerivedStateFromProps;
    typeof n == "function" && (r.state = Oo(r, o, n, g, u)), typeof o.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (xc(o, r), bc(S, r, u, d));
  }
  var yc = {
    id: 1,
    overflow: ""
  };
  function wc(r) {
    var o = r.overflow, u = r.id, d = u & ~Sc(u);
    return d.toString(32) + o;
  }
  function Ma(r, o, u) {
    var d = r.id, g = r.overflow, S = La(d) - 1, F = d & ~(1 << S), L = u + 1, n = La(o) + S;
    if (n > 30) {
      var a = S - S % 5, l = (1 << a) - 1, p = (F & l).toString(32), v = F >> a, y = S - a, P = La(o) + y, D = L << y, $ = D | v, q = p + g;
      return {
        id: 1 << P | $,
        overflow: q
      };
    } else {
      var J = L << S, ee = J | F, Se = g;
      return {
        id: 1 << n | ee,
        overflow: Se
      };
    }
  }
  function La(r) {
    return 32 - Hi(r);
  }
  function Sc(r) {
    return 1 << La(r) - 1;
  }
  var Hi = Math.clz32 ? Math.clz32 : Ec, Ua = Math.log, Cc = Math.LN2;
  function Ec(r) {
    var o = r >>> 0;
    return o === 0 ? 32 : 31 - (Ua(o) / Cc | 0) | 0;
  }
  function kc(r, o) {
    return r === o && (r !== 0 || 1 / r === 1 / o) || r !== r && o !== o;
  }
  var Tc = typeof Object.is == "function" ? Object.is : kc, ct = null, Bi = null, za = null, ce = null, It = !1, Dt = !1, fe = 0, vn = null, Mt = 0, $a = 25, Be = !1, lt;
  function Lt() {
    if (ct === null)
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    return Be && s("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"), ct;
  }
  function Yn(r, o) {
    if (o === null)
      return s("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", lt), !1;
    r.length !== o.length && s(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, lt, "[" + r.join(", ") + "]", "[" + o.join(", ") + "]");
    for (var u = 0; u < o.length && u < r.length; u++)
      if (!Tc(r[u], o[u]))
        return !1;
    return !0;
  }
  function Ut() {
    if (Mt > 0)
      throw new Error("Rendered more hooks than during the previous render");
    return {
      memoizedState: null,
      queue: null,
      next: null
    };
  }
  function ut() {
    return ce === null ? za === null ? (It = !1, za = ce = Ut()) : (It = !0, ce = za) : ce.next === null ? (It = !1, ce = ce.next = Ut()) : (It = !0, ce = ce.next), ce;
  }
  function Rc(r, o) {
    ct = o, Bi = r, Be = !1, fe = 0;
  }
  function Do(r, o, u, d) {
    for (; Dt; )
      Dt = !1, fe = 0, Mt += 1, ce = null, u = r(o, d);
    return Ni(), u;
  }
  function Ha() {
    var r = fe !== 0;
    return r;
  }
  function Ni() {
    Be = !1, ct = null, Bi = null, Dt = !1, za = null, Mt = 0, vn = null, ce = null;
  }
  function Ac(r) {
    return Be && s("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Gr(r);
  }
  function Mo(r) {
    return lt = "useContext", Lt(), Gr(r);
  }
  function Xr(r, o) {
    return typeof o == "function" ? o(r) : o;
  }
  function _c(r) {
    return lt = "useState", Lo(
      Xr,
      // useReducer has a special case to support lazy useState initializers
      r
    );
  }
  function Lo(r, o, u) {
    if (r !== Xr && (lt = "useReducer"), ct = Lt(), ce = ut(), It) {
      var d = ce.queue, g = d.dispatch;
      if (vn !== null) {
        var S = vn.get(d);
        if (S !== void 0) {
          vn.delete(d);
          var F = ce.memoizedState, L = S;
          do {
            var n = L.action;
            Be = !0, F = r(F, n), Be = !1, L = L.next;
          } while (L !== null);
          return ce.memoizedState = F, [F, g];
        }
      }
      return [ce.memoizedState, g];
    } else {
      Be = !0;
      var a;
      r === Xr ? a = typeof o == "function" ? o() : o : a = u !== void 0 ? u(o) : o, Be = !1, ce.memoizedState = a;
      var l = ce.queue = {
        last: null,
        dispatch: null
      }, p = l.dispatch = zo.bind(null, ct, l);
      return [ce.memoizedState, p];
    }
  }
  function Ba(r, o) {
    ct = Lt(), ce = ut();
    var u = o === void 0 ? null : o;
    if (ce !== null) {
      var d = ce.memoizedState;
      if (d !== null && u !== null) {
        var g = d[1];
        if (Yn(u, g))
          return d[0];
      }
    }
    Be = !0;
    var S = r();
    return Be = !1, ce.memoizedState = [S, u], S;
  }
  function Pc(r) {
    ct = Lt(), ce = ut();
    var o = ce.memoizedState;
    if (o === null) {
      var u = {
        current: r
      };
      return Object.seal(u), ce.memoizedState = u, u;
    } else
      return o;
  }
  function Uo(r, o) {
    lt = "useLayoutEffect", s("useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.");
  }
  function zo(r, o, u) {
    if (Mt >= $a)
      throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
    if (r === ct) {
      Dt = !0;
      var d = {
        action: u,
        next: null
      };
      vn === null && (vn = /* @__PURE__ */ new Map());
      var g = vn.get(o);
      if (g === void 0)
        vn.set(o, d);
      else {
        for (var S = g; S.next !== null; )
          S = S.next;
        S.next = d;
      }
    }
  }
  function Oc(r, o) {
    return Ba(function() {
      return r;
    }, o);
  }
  function Fc(r, o, u) {
    return Lt(), o(r._source);
  }
  function jc(r, o, u) {
    if (u === void 0)
      throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
    return u();
  }
  function Ic(r) {
    return Lt(), r;
  }
  function Dc() {
    throw new Error("startTransition cannot be called during server rendering.");
  }
  function Mc() {
    return Lt(), [!1, Dc];
  }
  function Lc() {
    var r = Bi, o = wc(r.treeContext), u = Wi;
    if (u === null)
      throw new Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
    var d = fe++;
    return Cr(u, o, d);
  }
  function Na() {
  }
  var $o = {
    readContext: Ac,
    useContext: Mo,
    useMemo: Ba,
    useReducer: Lo,
    useRef: Pc,
    useState: _c,
    useInsertionEffect: Na,
    useLayoutEffect: Uo,
    useCallback: Oc,
    // useImperativeHandle is not run in the server environment
    useImperativeHandle: Na,
    // Effects are not run in the server environment.
    useEffect: Na,
    // Debugging effect
    useDebugValue: Na,
    useDeferredValue: Ic,
    useTransition: Mc,
    useId: Lc,
    // Subscriptions are not setup in a server environment.
    useMutableSource: Fc,
    useSyncExternalStore: jc
  }, Wi = null;
  function Zr(r) {
    Wi = r;
  }
  function Ho(r) {
    try {
      var o = "", u = r;
      do {
        switch (u.tag) {
          case 0:
            o += $r(u.type, null, null);
            break;
          case 1:
            o += To(u.type, null, null);
            break;
          case 2:
            o += Ca(u.type, null, null);
            break;
        }
        u = u.parent;
      } while (u);
      return o;
    } catch (d) {
      return `
Error generating stack: ` + d.message + `
` + d.stack;
    }
  }
  var Jr = i.ReactCurrentDispatcher, Wa = i.ReactDebugCurrentFrame, Yi = 0, gt = 1, Ya = 2, Ga = 3, zt = 4, Bo = 0, Gi = 1, $t = 2, Uc = 12800;
  function No(r) {
    return console.error(r), null;
  }
  function Gn() {
  }
  function zc(r, o, u, d, g, S, F, L, n) {
    var a = [], l = /* @__PURE__ */ new Set(), p = {
      destination: null,
      responseState: o,
      progressiveChunkSize: d === void 0 ? Uc : d,
      status: Bo,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: l,
      pingedTasks: a,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: g === void 0 ? No : g,
      onAllReady: S === void 0 ? Gn : S,
      onShellReady: F === void 0 ? Gn : F,
      onShellError: L === void 0 ? Gn : L,
      onFatalError: n === void 0 ? Gn : n
    }, v = qa(
      p,
      0,
      null,
      u,
      // Root segments are never embedded in Text on either edge
      !1,
      !1
    );
    v.parentFlushed = !0;
    var y = qi(p, r, null, v, l, Ot, Ao, yc);
    return a.push(y), p;
  }
  function $c(r, o) {
    var u = r.pingedTasks;
    u.push(o), u.length === 1 && h(function() {
      return ra(r);
    });
  }
  function Qr(r, o) {
    return {
      id: ua,
      rootSegmentID: -1,
      parentFlushed: !1,
      pendingTasks: 0,
      forceClientRender: !1,
      completedSegments: [],
      byteSize: 0,
      fallbackAbortableTasks: o,
      errorDigest: null
    };
  }
  function qi(r, o, u, d, g, S, F, L) {
    r.allPendingTasks++, u === null ? r.pendingRootTasks++ : u.pendingTasks++;
    var n = {
      node: o,
      ping: function() {
        return $c(r, n);
      },
      blockedBoundary: u,
      blockedSegment: d,
      abortSet: g,
      legacyContext: S,
      context: F,
      treeContext: L
    };
    return n.componentStack = null, g.add(n), n;
  }
  function qa(r, o, u, d, g, S) {
    return {
      status: Yi,
      id: -1,
      // lazily assigned later
      index: o,
      parentFlushed: !1,
      chunks: [],
      children: [],
      formatContext: d,
      boundary: u,
      lastPushedText: g,
      textEmbedded: S
    };
  }
  var pt = null;
  function Kr() {
    return pt === null || pt.componentStack === null ? "" : Ho(pt.componentStack);
  }
  function xt(r, o) {
    r.componentStack = {
      tag: 0,
      parent: r.componentStack,
      type: o
    };
  }
  function qn(r, o) {
    r.componentStack = {
      tag: 1,
      parent: r.componentStack,
      type: o
    };
  }
  function Vi(r, o) {
    r.componentStack = {
      tag: 2,
      parent: r.componentStack,
      type: o
    };
  }
  function hn(r) {
    r.componentStack === null ? s("Unexpectedly popped too many stack frames. This is a bug in React.") : r.componentStack = r.componentStack.parent;
  }
  var dr = null;
  function Xi(r, o) {
    {
      var u;
      typeof o == "string" ? u = o : o && typeof o.message == "string" ? u = o.message : u = String(o);
      var d = dr || Kr();
      dr = null, r.errorMessage = u, r.errorComponentStack = d;
    }
  }
  function gn(r, o) {
    var u = r.onError(o);
    if (u != null && typeof u != "string")
      throw new Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof u + '" instead');
    return u;
  }
  function bt(r, o) {
    var u = r.onShellError;
    u(o);
    var d = r.onFatalError;
    d(o), r.destination !== null ? (r.status = $t, z(r.destination, o)) : (r.status = Gi, r.fatalError = o);
  }
  function Zi(r, o, u) {
    xt(o, "Suspense");
    var d = o.blockedBoundary, g = o.blockedSegment, S = u.fallback, F = u.children, L = /* @__PURE__ */ new Set(), n = Qr(r, L), a = g.chunks.length, l = qa(
      r,
      a,
      n,
      g.formatContext,
      // boundaries never require text embedding at their edges because comment nodes bound them
      !1,
      !1
    );
    g.children.push(l), g.lastPushedText = !1;
    var p = qa(
      r,
      0,
      null,
      g.formatContext,
      // boundaries never require text embedding at their edges because comment nodes bound them
      !1,
      !1
    );
    p.parentFlushed = !0, o.blockedBoundary = n, o.blockedSegment = p;
    try {
      if (io(r, o, F), Jt(p.chunks, r.responseState, p.lastPushedText, p.textEmbedded), p.status = gt, Za(n, p), n.pendingTasks === 0) {
        hn(o);
        return;
      }
    } catch (y) {
      p.status = zt, n.forceClientRender = !0, n.errorDigest = gn(r, y), Xi(n, y);
    } finally {
      o.blockedBoundary = d, o.blockedSegment = g;
    }
    var v = qi(r, S, d, l, L, o.legacyContext, o.context, o.treeContext);
    v.componentStack = o.componentStack, r.pingedTasks.push(v), hn(o);
  }
  function ea(r, o, u, d) {
    xt(o, u);
    var g = o.blockedSegment, S = di(g.chunks, u, d, r.responseState, g.formatContext);
    g.lastPushedText = !1;
    var F = g.formatContext;
    g.formatContext = Sr(F, u, d), io(r, o, S), g.formatContext = F, f(g.chunks, u), g.lastPushedText = !1, hn(o);
  }
  function Va(r) {
    return r.prototype && r.prototype.isReactComponent;
  }
  function Wo(r, o, u, d, g) {
    var S = {};
    Rc(o, S);
    var F = u(d, g);
    return Do(u, d, F, g);
  }
  function Yo(r, o, u, d, g) {
    var S = u.render();
    u.props !== g && (ta || s("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Re(d) || "a component"), ta = !0);
    {
      var F = d.childContextTypes;
      if (F != null) {
        var L = o.legacyContext, n = Mi(u, d, L, F);
        o.legacyContext = n, on(r, o, S), o.legacyContext = L;
        return;
      }
    }
    on(r, o, S);
  }
  function Hc(r, o, u, d) {
    Vi(o, u);
    var g = Di(u, o.legacyContext), S = Fo(u, d, g);
    Io(S, u, d, g), Yo(r, o, S, u, d), hn(o);
  }
  var Ji = {}, na = {}, Go = {}, Qi = {}, ta = !1, Ki = !1, eo = !1, no = !1;
  function qo(r, o, u, d) {
    var g;
    if (g = Di(u, o.legacyContext), qn(o, u), u.prototype && typeof u.prototype.render == "function") {
      var S = Re(u) || "Unknown";
      Ji[S] || (s("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", S, S), Ji[S] = !0);
    }
    var F = Wo(r, o, u, d, g), L = Ha();
    if (typeof F == "object" && F !== null && typeof F.render == "function" && F.$$typeof === void 0) {
      var n = Re(u) || "Unknown";
      na[n] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", n, n, n), na[n] = !0);
    }
    if (
      // Run these checks in production only if the flag is off.
      // Eventually we'll delete this branch altogether.
      typeof F == "object" && F !== null && typeof F.render == "function" && F.$$typeof === void 0
    ) {
      {
        var a = Re(u) || "Unknown";
        na[a] || (s("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", a, a, a), na[a] = !0);
      }
      Io(F, u, d, g), Yo(r, o, F, u, d);
    } else if (Vo(u), L) {
      var l = o.treeContext, p = 1, v = 0;
      o.treeContext = Ma(l, p, v);
      try {
        on(r, o, F);
      } finally {
        o.treeContext = l;
      }
    } else
      on(r, o, F);
    hn(o);
  }
  function Vo(r) {
    {
      if (r && r.childContextTypes && s("%s(...): childContextTypes cannot be defined on a function component.", r.displayName || r.name || "Component"), typeof r.getDerivedStateFromProps == "function") {
        var o = Re(r) || "Unknown";
        Qi[o] || (s("%s: Function components do not support getDerivedStateFromProps.", o), Qi[o] = !0);
      }
      if (typeof r.contextType == "object" && r.contextType !== null) {
        var u = Re(r) || "Unknown";
        Go[u] || (s("%s: Function components do not support contextType.", u), Go[u] = !0);
      }
    }
  }
  function to(r, o) {
    if (r && r.defaultProps) {
      var u = mn({}, o), d = r.defaultProps;
      for (var g in d)
        u[g] === void 0 && (u[g] = d[g]);
      return u;
    }
    return o;
  }
  function Bc(r, o, u, d, g) {
    qn(o, u.render);
    var S = Wo(r, o, u.render, d, g), F = Ha();
    if (F) {
      var L = o.treeContext, n = 1, a = 0;
      o.treeContext = Ma(L, n, a);
      try {
        on(r, o, S);
      } finally {
        o.treeContext = L;
      }
    } else
      on(r, o, S);
    hn(o);
  }
  function Nc(r, o, u, d, g) {
    var S = u.type, F = to(S, d);
    ro(r, o, S, F, g);
  }
  function Xo(r, o, u, d) {
    u._context === void 0 ? u !== u.Consumer && (no || (no = !0, s("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : u = u._context;
    var g = d.children;
    typeof g != "function" && s("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.");
    var S = Gr(u), F = g(S);
    on(r, o, F);
  }
  function Wc(r, o, u, d) {
    var g = u._context, S = d.value, F = d.children, L;
    L = o.context, o.context = _o(g, S), on(r, o, F), o.context = Po(g), L !== o.context && s("Popping the context provider did not return back to the original snapshot. This is a bug in React.");
  }
  function Yc(r, o, u, d, g) {
    xt(o, "Lazy");
    var S = u._payload, F = u._init, L = F(S), n = to(L, d);
    ro(r, o, L, n, g), hn(o);
  }
  function ro(r, o, u, d, g) {
    if (typeof u == "function")
      if (Va(u)) {
        Hc(r, o, u, d);
        return;
      } else {
        qo(r, o, u, d);
        return;
      }
    if (typeof u == "string") {
      ea(r, o, u, d);
      return;
    }
    switch (u) {
      case wa:
      case Ci:
      case yo:
      case wi:
      case an: {
        on(r, o, d.children);
        return;
      }
      case Lr: {
        xt(o, "SuspenseList"), on(r, o, d.children), hn(o);
        return;
      }
      case Si:
        throw new Error("ReactDOMServer does not yet support scope components.");
      case Mr: {
        Zi(r, o, d);
        return;
      }
    }
    if (typeof u == "object" && u !== null)
      switch (u.$$typeof) {
        case ya: {
          Bc(r, o, u, d, g);
          return;
        }
        case Ur: {
          Nc(r, o, u, d, g);
          return;
        }
        case xa: {
          Wc(r, o, u, d);
          return;
        }
        case ba: {
          Xo(r, o, u, d);
          return;
        }
        case ir: {
          Yc(r, o, u, d);
          return;
        }
      }
    var S = "";
    throw (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (u == null ? u : typeof u) + "." + S));
  }
  function Gc(r, o) {
    typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
    r[Symbol.toStringTag] === "Generator" && (Ki || s("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Ki = !0), r.entries === o && (eo || s("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), eo = !0);
  }
  function on(r, o, u) {
    try {
      return ao(r, o, u);
    } catch (d) {
      throw typeof d == "object" && d !== null && typeof d.then == "function" || (dr = dr !== null ? dr : Kr()), d;
    }
  }
  function ao(r, o, u) {
    if (o.node = u, typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case fc: {
          var d = u, g = d.type, S = d.props, F = d.ref;
          ro(r, o, g, S, F);
          return;
        }
        case bo:
          throw new Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
        case ir: {
          var L = u, n = L._payload, a = L._init, l;
          try {
            l = a(n);
          } catch (J) {
            throw typeof J == "object" && J !== null && typeof J.then == "function" && xt(o, "Lazy"), J;
          }
          on(r, o, l);
          return;
        }
      }
      if (re(u)) {
        Zo(r, o, u);
        return;
      }
      var p = hc(u);
      if (p) {
        Gc(u, p);
        var v = p.call(u);
        if (v) {
          var y = v.next();
          if (!y.done) {
            var P = [];
            do
              P.push(y.value), y = v.next();
            while (!y.done);
            Zo(r, o, P);
            return;
          }
          return;
        }
      }
      var D = Object.prototype.toString.call(u);
      throw new Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
    }
    if (typeof u == "string") {
      var $ = o.blockedSegment;
      $.lastPushedText = At(o.blockedSegment.chunks, u, r.responseState, $.lastPushedText);
      return;
    }
    if (typeof u == "number") {
      var q = o.blockedSegment;
      q.lastPushedText = At(o.blockedSegment.chunks, "" + u, r.responseState, q.lastPushedText);
      return;
    }
    typeof u == "function" && s("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
  }
  function Zo(r, o, u) {
    for (var d = u.length, g = 0; g < d; g++) {
      var S = o.treeContext;
      o.treeContext = Ma(S, d, g);
      try {
        io(r, o, u[g]);
      } finally {
        o.treeContext = S;
      }
    }
  }
  function sn(r, o, u) {
    var d = o.blockedSegment, g = d.chunks.length, S = qa(
      r,
      g,
      null,
      d.formatContext,
      // Adopt the parent segment's leading text embed
      d.lastPushedText,
      // Assume we are text embedded at the trailing edge
      !0
    );
    d.children.push(S), d.lastPushedText = !1;
    var F = qi(r, o.node, o.blockedBoundary, S, o.abortSet, o.legacyContext, o.context, o.treeContext);
    o.componentStack !== null && (F.componentStack = o.componentStack.parent);
    var L = F.ping;
    u.then(L, L);
  }
  function io(r, o, u) {
    var d = o.blockedSegment.formatContext, g = o.legacyContext, S = o.context, F = null;
    F = o.componentStack;
    try {
      return on(r, o, u);
    } catch (L) {
      if (Ni(), typeof L == "object" && L !== null && typeof L.then == "function") {
        sn(r, o, L), o.blockedSegment.formatContext = d, o.legacyContext = g, o.context = S, Yr(S), o.componentStack = F;
        return;
      } else
        throw o.blockedSegment.formatContext = d, o.legacyContext = g, o.context = S, Yr(S), o.componentStack = F, L;
    }
  }
  function Jo(r, o, u, d) {
    var g = gn(r, d);
    if (o === null ? bt(r, d) : (o.pendingTasks--, o.forceClientRender || (o.forceClientRender = !0, o.errorDigest = g, Xi(o, d), o.parentFlushed && r.clientRenderedBoundaries.push(o))), r.allPendingTasks--, r.allPendingTasks === 0) {
      var S = r.onAllReady;
      S();
    }
  }
  function qc(r) {
    var o = this, u = r.blockedBoundary, d = r.blockedSegment;
    d.status = Ga, Qo(o, u, d);
  }
  function Xa(r, o, u) {
    var d = r.blockedBoundary, g = r.blockedSegment;
    if (g.status = Ga, d === null)
      o.allPendingTasks--, o.status !== $t && (o.status = $t, o.destination !== null && I(o.destination));
    else {
      if (d.pendingTasks--, !d.forceClientRender) {
        d.forceClientRender = !0;
        var S = u === void 0 ? new Error("The render was aborted by the server without a reason.") : u;
        d.errorDigest = o.onError(S);
        {
          var F = "The server did not finish this Suspense boundary: ";
          S && typeof S.message == "string" ? S = F + S.message : S = F + String(S);
          var L = pt;
          pt = r;
          try {
            Xi(d, S);
          } finally {
            pt = L;
          }
        }
        d.parentFlushed && o.clientRenderedBoundaries.push(d);
      }
      if (d.fallbackAbortableTasks.forEach(function(a) {
        return Xa(a, o, u);
      }), d.fallbackAbortableTasks.clear(), o.allPendingTasks--, o.allPendingTasks === 0) {
        var n = o.onAllReady;
        n();
      }
    }
  }
  function Za(r, o) {
    if (o.chunks.length === 0 && o.children.length === 1 && o.children[0].boundary === null) {
      var u = o.children[0];
      u.id = o.id, u.parentFlushed = !0, u.status === gt && Za(r, u);
    } else {
      var d = r.completedSegments;
      d.push(o);
    }
  }
  function Qo(r, o, u) {
    if (o === null) {
      if (u.parentFlushed) {
        if (r.completedRootSegment !== null)
          throw new Error("There can only be one root segment. This is a bug in React.");
        r.completedRootSegment = u;
      }
      if (r.pendingRootTasks--, r.pendingRootTasks === 0) {
        r.onShellError = Gn;
        var d = r.onShellReady;
        d();
      }
    } else if (o.pendingTasks--, !o.forceClientRender) {
      if (o.pendingTasks === 0)
        u.parentFlushed && u.status === gt && Za(o, u), o.parentFlushed && r.completedBoundaries.push(o), o.fallbackAbortableTasks.forEach(qc, r), o.fallbackAbortableTasks.clear();
      else if (u.parentFlushed && u.status === gt) {
        Za(o, u);
        var g = o.completedSegments;
        g.length === 1 && o.parentFlushed && r.partialBoundaries.push(o);
      }
    }
    if (r.allPendingTasks--, r.allPendingTasks === 0) {
      var S = r.onAllReady;
      S();
    }
  }
  function Ko(r, o) {
    var u = o.blockedSegment;
    if (u.status === Yi) {
      Yr(o.context);
      var d = null;
      d = pt, pt = o;
      try {
        on(r, o, o.node), Jt(u.chunks, r.responseState, u.lastPushedText, u.textEmbedded), o.abortSet.delete(o), u.status = gt, Qo(r, o.blockedBoundary, u);
      } catch (S) {
        if (Ni(), typeof S == "object" && S !== null && typeof S.then == "function") {
          var g = o.ping;
          S.then(g, g);
        } else
          o.abortSet.delete(o), u.status = zt, Jo(r, o.blockedBoundary, u, S);
      } finally {
        pt = d;
      }
    }
  }
  function ra(r) {
    if (r.status !== $t) {
      var o = Ra(), u = Jr.current;
      Jr.current = $o;
      var d;
      d = Wa.getCurrentStack, Wa.getCurrentStack = Kr;
      var g = Wi;
      Zr(r.responseState);
      try {
        var S = r.pingedTasks, F;
        for (F = 0; F < S.length; F++) {
          var L = S[F];
          Ko(r, L);
        }
        S.splice(0, F), r.destination !== null && Qa(r, r.destination);
      } catch (n) {
        gn(r, n), bt(r, n);
      } finally {
        Zr(g), Jr.current = u, Wa.getCurrentStack = d, u === $o && Yr(o);
      }
    }
  }
  function aa(r, o, u) {
    switch (u.parentFlushed = !0, u.status) {
      case Yi: {
        var d = u.id = r.nextSegmentId++;
        return u.lastPushedText = !1, u.textEmbedded = !1, W(o, r.responseState, d);
      }
      case gt: {
        u.status = Ya;
        for (var g = !0, S = u.chunks, F = 0, L = u.children, n = 0; n < L.length; n++) {
          for (var a = L[n]; F < a.index; F++)
            x(o, S[F]);
          g = Ja(r, o, a);
        }
        for (; F < S.length - 1; F++)
          x(o, S[F]);
        return F < S.length && (g = O(o, S[F])), g;
      }
      default:
        throw new Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
    }
  }
  function Ja(r, o, u) {
    var d = u.boundary;
    if (d === null)
      return aa(r, o, u);
    if (d.parentFlushed = !0, d.forceClientRender)
      return vi(o, r.responseState, d.errorDigest, d.errorMessage, d.errorComponentStack), aa(r, o, u), ga(o, r.responseState);
    if (d.pendingTasks > 0) {
      d.rootSegmentID = r.nextSegmentId++, d.completedSegments.length > 0 && r.partialBoundaries.push(d);
      var g = d.id = pa(r.responseState);
      return Dr(o, r.responseState, g), aa(r, o, u), ha(o, r.responseState);
    } else {
      if (d.byteSize > r.progressiveChunkSize)
        return d.rootSegmentID = r.nextSegmentId++, r.completedBoundaries.push(d), Dr(o, r.responseState, d.id), aa(r, o, u), ha(o, r.responseState);
      Ir(o, r.responseState);
      var S = d.completedSegments;
      if (S.length !== 1)
        throw new Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      var F = S[0];
      return Ja(r, o, F), va(o, r.responseState);
    }
  }
  function es(r, o, u) {
    return go(o, r.responseState, u.id, u.errorDigest, u.errorMessage, u.errorComponentStack);
  }
  function ia(r, o, u) {
    return Zs(o, r.responseState, u.formatContext, u.id), Ja(r, o, u), Js(o, u.formatContext);
  }
  function oa(r, o, u) {
    for (var d = u.completedSegments, g = 0; g < d.length; g++) {
      var S = d[g];
      oo(r, o, u, S);
    }
    return d.length = 0, gi(o, r.responseState, u.id, u.rootSegmentID);
  }
  function Vc(r, o, u) {
    for (var d = u.completedSegments, g = 0; g < d.length; g++) {
      var S = d[g];
      if (!oo(r, o, u, S))
        return g++, d.splice(0, g), !1;
    }
    return d.splice(0, g), !0;
  }
  function oo(r, o, u, d) {
    if (d.status === Ya)
      return !0;
    var g = d.id;
    if (g === -1) {
      var S = d.id = u.rootSegmentID;
      if (S === -1)
        throw new Error("A root segment ID must have been assigned by now. This is a bug in React.");
      return ia(r, o, d);
    } else
      return ia(r, o, d), ic(o, r.responseState, g);
  }
  function Qa(r, o) {
    b();
    try {
      var u = r.completedRootSegment;
      u !== null && r.pendingRootTasks === 0 && (Ja(r, o, u), r.completedRootSegment = null, T(o, r.responseState));
      var d = r.clientRenderedBoundaries, g;
      for (g = 0; g < d.length; g++) {
        var S = d[g];
        es(r, o, S);
      }
      d.splice(0, g);
      var F = r.completedBoundaries;
      for (g = 0; g < F.length; g++) {
        var L = F[g];
        oa(r, o, L);
      }
      F.splice(0, g), j(o), b(o);
      var n = r.partialBoundaries;
      for (g = 0; g < n.length; g++) {
        var a = n[g];
        if (!Vc(r, o, a)) {
          r.destination = null, g++, n.splice(0, g);
          return;
        }
      }
      n.splice(0, g);
      var l = r.completedBoundaries;
      for (g = 0; g < l.length; g++) {
        var p = l[g];
        oa(r, o, p);
      }
      l.splice(0, g);
    } finally {
      j(o), r.allPendingTasks === 0 && r.pingedTasks.length === 0 && r.clientRenderedBoundaries.length === 0 && r.completedBoundaries.length === 0 && (r.abortableTasks.size !== 0 && s("There was still abortable task at the root when we closed. This is a bug in React."), I(o));
    }
  }
  function Xc(r) {
    h(function() {
      return ra(r);
    });
  }
  function ns(r, o) {
    if (r.status === Gi) {
      r.status = $t, z(o, r.fatalError);
      return;
    }
    if (r.status !== $t && r.destination === null) {
      r.destination = o;
      try {
        Qa(r, o);
      } catch (u) {
        gn(r, u), bt(r, u);
      }
    }
  }
  function Ka(r, o) {
    try {
      var u = r.abortableTasks;
      u.forEach(function(d) {
        return Xa(d, r, o);
      }), u.clear(), r.destination !== null && Qa(r, r.destination);
    } catch (d) {
      gn(r, d), bt(r, d);
    }
  }
  function Zc(r, o) {
    return new Promise(function(u, d) {
      var g, S, F = new Promise(function(v, y) {
        S = v, g = y;
      });
      function L() {
        var v = new ReadableStream(
          {
            type: "bytes",
            pull: function(y) {
              ns(a, y);
            },
            cancel: function(y) {
              Ka(a);
            }
          },
          // $FlowFixMe size() methods are not allowed on byte streams.
          {
            highWaterMark: 0
          }
        );
        v.allReady = F, u(v);
      }
      function n(v) {
        F.catch(function() {
        }), d(v);
      }
      var a = zc(r, rt(o ? o.identifierPrefix : void 0, o ? o.nonce : void 0, o ? o.bootstrapScriptContent : void 0, o ? o.bootstrapScripts : void 0, o ? o.bootstrapModules : void 0), Zt(o ? o.namespaceURI : void 0), o ? o.progressiveChunkSize : void 0, o ? o.onError : void 0, S, L, n, g);
      if (o && o.signal) {
        var l = o.signal, p = function() {
          Ka(a, l.reason), l.removeEventListener("abort", p);
        };
        l.addEventListener("abort", p);
      }
      Xc(a);
    });
  }
  hl.renderToReadableStream = Zc, hl.version = t;
})();
var oi, _p;
oi = ti, _p = hl;
oi.version;
var $h = oi.renderToString;
oi.renderToStaticMarkup;
oi.renderToNodeStream;
oi.renderToStaticNodeStream;
_p.renderToReadableStream;
const Hh = (e) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>my react ssr</title>
</head>
<body>
    <div id="root">
       ${e}
    </div>
</body>
</html>
<script type="module" src="index.umd.js"><\/script>
`;
var fo = {}, Bh = {
  get exports() {
    return fo;
  },
  set exports(e) {
    fo = e;
  }
}, os = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function() {
  var e = oe, t = Symbol.for("react.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), R = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), I = Symbol.iterator, k = "@@iterator";
  function _(E) {
    if (E === null || typeof E != "object")
      return null;
    var H = I && E[I] || E[k];
    return typeof H == "function" ? H : null;
  }
  var A = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function z(E) {
    {
      for (var H = arguments.length, G = new Array(H > 1 ? H - 1 : 0), Z = 1; Z < H; Z++)
        G[Z - 1] = arguments[Z];
      N("error", E, G);
    }
  }
  function N(E, H, G) {
    {
      var Z = A.ReactDebugCurrentFrame, re = Z.getStackAddendum();
      re !== "" && (H += "%s", G = G.concat([re]));
      var ue = G.map(function(ie) {
        return String(ie);
      });
      ue.unshift("Warning: " + H), Function.prototype.apply.call(console[E], console, ue);
    }
  }
  var B = !1, Y = !1, X = !1, me = !1, ge = !1, le;
  le = Symbol.for("react.module.reference");
  function Je(E) {
    return !!(typeof E == "string" || typeof E == "function" || E === c || E === m || ge || E === s || E === C || E === b || me || E === j || B || Y || X || typeof E == "object" && E !== null && (E.$$typeof === O || E.$$typeof === x || E.$$typeof === h || E.$$typeof === R || E.$$typeof === w || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    E.$$typeof === le || E.getModuleId !== void 0));
  }
  function cn(E, H, G) {
    var Z = E.displayName;
    if (Z)
      return Z;
    var re = H.displayName || H.name || "";
    return re !== "" ? G + "(" + re + ")" : G;
  }
  function Vn(E) {
    return E.displayName || "Context";
  }
  function ze(E) {
    if (E == null)
      return null;
    if (typeof E.tag == "number" && z("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
      return E.displayName || E.name || null;
    if (typeof E == "string")
      return E;
    switch (E) {
      case c:
        return "Fragment";
      case i:
        return "Portal";
      case m:
        return "Profiler";
      case s:
        return "StrictMode";
      case C:
        return "Suspense";
      case b:
        return "SuspenseList";
    }
    if (typeof E == "object")
      switch (E.$$typeof) {
        case R:
          var H = E;
          return Vn(H) + ".Consumer";
        case h:
          var G = E;
          return Vn(G._context) + ".Provider";
        case w:
          return cn(E, E.render, "ForwardRef");
        case x:
          var Z = E.displayName || null;
          return Z !== null ? Z : ze(E.type) || "Memo";
        case O: {
          var re = E, ue = re._payload, ie = re._init;
          try {
            return ze(ie(ue));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var $e = Object.assign, Ye = 0, Qe, te, ln, ft, On, Ae, pe;
  function Xn() {
  }
  Xn.__reactDisabledLog = !0;
  function Ve() {
    {
      if (Ye === 0) {
        Qe = console.log, te = console.info, ln = console.warn, ft = console.error, On = console.group, Ae = console.groupCollapsed, pe = console.groupEnd;
        var E = {
          configurable: !0,
          enumerable: !0,
          value: Xn,
          writable: !0
        };
        Object.defineProperties(console, {
          info: E,
          log: E,
          warn: E,
          error: E,
          group: E,
          groupCollapsed: E,
          groupEnd: E
        });
      }
      Ye++;
    }
  }
  function Ee() {
    {
      if (Ye--, Ye === 0) {
        var E = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: $e({}, E, {
            value: Qe
          }),
          info: $e({}, E, {
            value: te
          }),
          warn: $e({}, E, {
            value: ln
          }),
          error: $e({}, E, {
            value: ft
          }),
          group: $e({}, E, {
            value: On
          }),
          groupCollapsed: $e({}, E, {
            value: Ae
          }),
          groupEnd: $e({}, E, {
            value: pe
          })
        });
      }
      Ye < 0 && z("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var ke = A.ReactCurrentDispatcher, un;
  function bn(E, H, G) {
    {
      if (un === void 0)
        try {
          throw Error();
        } catch (re) {
          var Z = re.stack.trim().match(/\n( *(at )?)/);
          un = Z && Z[1] || "";
        }
      return `
` + un + E;
    }
  }
  var yn = !1, Fn;
  {
    var jn = typeof WeakMap == "function" ? WeakMap : Map;
    Fn = new jn();
  }
  function St(E, H) {
    if (!E || yn)
      return "";
    {
      var G = Fn.get(E);
      if (G !== void 0)
        return G;
    }
    var Z;
    yn = !0;
    var re = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var ue;
    ue = ke.current, ke.current = null, Ve();
    try {
      if (H) {
        var ie = function() {
          throw Error();
        };
        if (Object.defineProperty(ie.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(ie, []);
          } catch (je) {
            Z = je;
          }
          Reflect.construct(E, [], ie);
        } else {
          try {
            ie.call();
          } catch (je) {
            Z = je;
          }
          E.call(ie.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (je) {
          Z = je;
        }
        E();
      }
    } catch (je) {
      if (je && Z && typeof je.stack == "string") {
        for (var ne = je.stack.split(`
`), De = Z.stack.split(`
`), xe = ne.length - 1, he = De.length - 1; xe >= 1 && he >= 0 && ne[xe] !== De[he]; )
          he--;
        for (; xe >= 1 && he >= 0; xe--, he--)
          if (ne[xe] !== De[he]) {
            if (xe !== 1 || he !== 1)
              do
                if (xe--, he--, he < 0 || ne[xe] !== De[he]) {
                  var _e = `
` + ne[xe].replace(" at new ", " at ");
                  return E.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", E.displayName)), typeof E == "function" && Fn.set(E, _e), _e;
                }
              while (xe >= 1 && he >= 0);
            break;
          }
      }
    } finally {
      yn = !1, ke.current = ue, Ee(), Error.prepareStackTrace = re;
    }
    var nn = E ? E.displayName || E.name : "", rt = nn ? bn(nn) : "";
    return typeof E == "function" && Fn.set(E, rt), rt;
  }
  function Zn(E, H, G) {
    return St(E, !1);
  }
  function In(E) {
    var H = E.prototype;
    return !!(H && H.isReactComponent);
  }
  function Dn(E, H, G) {
    if (E == null)
      return "";
    if (typeof E == "function")
      return St(E, In(E));
    if (typeof E == "string")
      return bn(E);
    switch (E) {
      case C:
        return bn("Suspense");
      case b:
        return bn("SuspenseList");
    }
    if (typeof E == "object")
      switch (E.$$typeof) {
        case w:
          return Zn(E.render);
        case x:
          return Dn(E.type, H, G);
        case O: {
          var Z = E, re = Z._payload, ue = Z._init;
          try {
            return Dn(ue(re), H, G);
          } catch {
          }
        }
      }
    return "";
  }
  var Mn = Object.prototype.hasOwnProperty, Ln = {}, wn = A.ReactDebugCurrentFrame;
  function Jn(E) {
    if (E) {
      var H = E._owner, G = Dn(E.type, E._source, H ? H.type : null);
      wn.setExtraStackFrame(G);
    } else
      wn.setExtraStackFrame(null);
  }
  function Ke(E, H, G, Z, re) {
    {
      var ue = Function.call.bind(Mn);
      for (var ie in E)
        if (ue(E, ie)) {
          var ne = void 0;
          try {
            if (typeof E[ie] != "function") {
              var De = Error((Z || "React class") + ": " + G + " type `" + ie + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[ie] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw De.name = "Invariant Violation", De;
            }
            ne = E[ie](H, ie, Z, G, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (xe) {
            ne = xe;
          }
          ne && !(ne instanceof Error) && (Jn(re), z("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Z || "React class", G, ie, typeof ne), Jn(null)), ne instanceof Error && !(ne.message in Ln) && (Ln[ne.message] = !0, Jn(re), z("Failed %s type: %s", G, ne.message), Jn(null));
        }
    }
  }
  var Qn = Array.isArray;
  function Kn(E) {
    return Qn(E);
  }
  function Ct(E) {
    {
      var H = typeof Symbol == "function" && Symbol.toStringTag, G = H && E[Symbol.toStringTag] || E.constructor.name || "Object";
      return G;
    }
  }
  function Oe(E) {
    try {
      return et(E), !1;
    } catch {
      return !0;
    }
  }
  function et(E) {
    return "" + E;
  }
  function mt(E) {
    if (Oe(E))
      return z("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ct(E)), et(E);
  }
  var Sn = A.ReactCurrentOwner, Ie = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, Et, Nt, Un;
  Un = {};
  function vr(E) {
    if (Mn.call(E, "ref")) {
      var H = Object.getOwnPropertyDescriptor(E, "ref").get;
      if (H && H.isReactWarning)
        return !1;
    }
    return E.ref !== void 0;
  }
  function hr(E) {
    if (Mn.call(E, "key")) {
      var H = Object.getOwnPropertyDescriptor(E, "key").get;
      if (H && H.isReactWarning)
        return !1;
    }
    return E.key !== void 0;
  }
  function gr(E, H) {
    if (typeof E.ref == "string" && Sn.current && H && Sn.current.stateNode !== H) {
      var G = ze(Sn.current.type);
      Un[G] || (z('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ze(Sn.current.type), E.ref), Un[G] = !0);
    }
  }
  function pn(E, H) {
    {
      var G = function() {
        Et || (Et = !0, z("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
      };
      G.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: G,
        configurable: !0
      });
    }
  }
  function Cn(E, H) {
    {
      var G = function() {
        Nt || (Nt = !0, z("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", H));
      };
      G.isReactWarning = !0, Object.defineProperty(E, "ref", {
        get: G,
        configurable: !0
      });
    }
  }
  var kt = function(E, H, G, Z, re, ue, ie) {
    var ne = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: t,
      // Built-in properties that belong on the element
      type: E,
      key: H,
      ref: G,
      props: ie,
      // Record the component responsible for creating this element.
      _owner: ue
    };
    return ne._store = {}, Object.defineProperty(ne._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(ne, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: Z
    }), Object.defineProperty(ne, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: re
    }), Object.freeze && (Object.freeze(ne.props), Object.freeze(ne)), ne;
  };
  function Wt(E, H, G, Z, re) {
    {
      var ue, ie = {}, ne = null, De = null;
      G !== void 0 && (mt(G), ne = "" + G), hr(H) && (mt(H.key), ne = "" + H.key), vr(H) && (De = H.ref, gr(H, re));
      for (ue in H)
        Mn.call(H, ue) && !Ie.hasOwnProperty(ue) && (ie[ue] = H[ue]);
      if (E && E.defaultProps) {
        var xe = E.defaultProps;
        for (ue in xe)
          ie[ue] === void 0 && (ie[ue] = xe[ue]);
      }
      if (ne || De) {
        var he = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
        ne && pn(ie, he), De && Cn(ie, he);
      }
      return kt(E, ne, De, re, Z, Sn.current, ie);
    }
  }
  var zn = A.ReactCurrentOwner, En = A.ReactDebugCurrentFrame;
  function en(E) {
    if (E) {
      var H = E._owner, G = Dn(E.type, E._source, H ? H.type : null);
      En.setExtraStackFrame(G);
    } else
      En.setExtraStackFrame(null);
  }
  var $n;
  $n = !1;
  function kn(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }
  function nt() {
    {
      if (zn.current) {
        var E = ze(zn.current.type);
        if (E)
          return `

Check the render method of \`` + E + "`.";
      }
      return "";
    }
  }
  function xr(E) {
    {
      if (E !== void 0) {
        var H = E.fileName.replace(/^.*[\\\/]/, ""), G = E.lineNumber;
        return `

Check your code at ` + H + ":" + G + ".";
      }
      return "";
    }
  }
  var Yt = {};
  function br(E) {
    {
      var H = nt();
      if (!H) {
        var G = typeof E == "string" ? E : E.displayName || E.name;
        G && (H = `

Check the top-level render call using <` + G + ">.");
      }
      return H;
    }
  }
  function Gt(E, H) {
    {
      if (!E._store || E._store.validated || E.key != null)
        return;
      E._store.validated = !0;
      var G = br(H);
      if (Yt[G])
        return;
      Yt[G] = !0;
      var Z = "";
      E && E._owner && E._owner !== zn.current && (Z = " It was passed a child from " + ze(E._owner.type) + "."), en(E), z('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', G, Z), en(null);
    }
  }
  function Te(E, H) {
    {
      if (typeof E != "object")
        return;
      if (Kn(E))
        for (var G = 0; G < E.length; G++) {
          var Z = E[G];
          kn(Z) && Gt(Z, H);
        }
      else if (kn(E))
        E._store && (E._store.validated = !0);
      else if (E) {
        var re = _(E);
        if (typeof re == "function" && re !== E.entries)
          for (var ue = re.call(E), ie; !(ie = ue.next()).done; )
            kn(ie.value) && Gt(ie.value, H);
      }
    }
  }
  function tt(E) {
    {
      var H = E.type;
      if (H == null || typeof H == "string")
        return;
      var G;
      if (typeof H == "function")
        G = H.propTypes;
      else if (typeof H == "object" && (H.$$typeof === w || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      H.$$typeof === x))
        G = H.propTypes;
      else
        return;
      if (G) {
        var Z = ze(H);
        Ke(G, E.props, "prop", Z, E);
      } else if (H.PropTypes !== void 0 && !$n) {
        $n = !0;
        var re = ze(H);
        z("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
      }
      typeof H.getDefaultProps == "function" && !H.getDefaultProps.isReactClassApproved && z("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function Tt(E) {
    {
      for (var H = Object.keys(E.props), G = 0; G < H.length; G++) {
        var Z = H[G];
        if (Z !== "children" && Z !== "key") {
          en(E), z("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Z), en(null);
          break;
        }
      }
      E.ref !== null && (en(E), z("Invalid attribute `ref` supplied to `React.Fragment`."), en(null));
    }
  }
  function Rt(E, H, G, Z, re, ue) {
    {
      var ie = Je(E);
      if (!ie) {
        var ne = "";
        (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (ne += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var De = xr(re);
        De ? ne += De : ne += nt();
        var xe;
        E === null ? xe = "null" : Kn(E) ? xe = "array" : E !== void 0 && E.$$typeof === t ? (xe = "<" + (ze(E.type) || "Unknown") + " />", ne = " Did you accidentally export a JSX literal instead of a component?") : xe = typeof E, z("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", xe, ne);
      }
      var he = Wt(E, H, G, re, ue);
      if (he == null)
        return he;
      if (ie) {
        var _e = H.children;
        if (_e !== void 0)
          if (Z)
            if (Kn(_e)) {
              for (var nn = 0; nn < _e.length; nn++)
                Te(_e[nn], E);
              Object.freeze && Object.freeze(_e);
            } else
              z("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            Te(_e, E);
      }
      return E === c ? Tt(he) : tt(he), he;
    }
  }
  function Fe(E, H, G) {
    return Rt(E, H, G, !0);
  }
  function qt(E, H, G) {
    return Rt(E, H, G, !1);
  }
  var yr = qt, wr = Fe;
  os.Fragment = c, os.jsx = yr, os.jsxs = wr;
})();
(function(e) {
  e.exports = os;
})(Bh);
const Pp = fo.Fragment, Bt = fo.jsx, Nh = fo.jsxs;
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
function gl() {
  return gl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var c in i)
        Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    }
    return e;
  }, gl.apply(this, arguments);
}
var Ru;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Ru || (Ru = {}));
function wt(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function xl(e) {
  let {
    pathname: t = "/",
    search: i = "",
    hash: c = ""
  } = e;
  return i && i !== "?" && (t += i.charAt(0) === "?" ? i : "?" + i), c && c !== "#" && (t += c.charAt(0) === "#" ? c : "#" + c), t;
}
function Op(e) {
  let t = {};
  if (e) {
    let i = e.indexOf("#");
    i >= 0 && (t.hash = e.substr(i), e = e.substr(0, i));
    let c = e.indexOf("?");
    c >= 0 && (t.search = e.substr(c), e = e.substr(0, c)), e && (t.pathname = e);
  }
  return t;
}
var Au;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Au || (Au = {}));
function Wh(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Yh(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: i,
    search: c = "",
    hash: s = ""
  } = typeof e == "string" ? Op(e) : e;
  return {
    pathname: i ? i.startsWith("/") ? i : Gh(i, t) : t,
    search: qh(c),
    hash: Vh(s)
  };
}
function Gh(e, t) {
  let i = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((s) => {
    s === ".." ? i.length > 1 && i.pop() : s !== "." && i.push(s);
  }), i.length > 1 ? i.join("/") : "/";
}
function il(e, t, i, c) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(c) + "].  Please separate it out to the ") + ("`to." + i + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Fp(e) {
  return e.filter((t, i) => i === 0 || t.route.path && t.route.path.length > 0);
}
function jp(e, t, i, c) {
  c === void 0 && (c = !1);
  let s;
  typeof e == "string" ? s = Op(e) : (s = gl({}, e), wt(!s.pathname || !s.pathname.includes("?"), il("?", "pathname", "search", s)), wt(!s.pathname || !s.pathname.includes("#"), il("#", "pathname", "hash", s)), wt(!s.search || !s.search.includes("#"), il("#", "search", "hash", s)));
  let m = e === "" || s.pathname === "", h = m ? "/" : s.pathname, R;
  if (c || h == null)
    R = i;
  else {
    let x = t.length - 1;
    if (h.startsWith("..")) {
      let O = h.split("/");
      for (; O[0] === ".."; )
        O.shift(), x -= 1;
      s.pathname = O.join("/");
    }
    R = x >= 0 ? t[x] : "/";
  }
  let w = Yh(s, R), C = h && h !== "/" && h.endsWith("/"), b = (m || h === ".") && i.endsWith("/");
  return !w.pathname.endsWith("/") && (C || b) && (w.pathname += "/"), w;
}
const Il = (e) => e.join("/").replace(/\/\/+/g, "/"), qh = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Vh = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, Xh = ["post", "put", "patch", "delete"];
[...Xh];
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
function Zh(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const Ip = typeof Object.is == "function" ? Object.is : Zh, {
  useState: Jh,
  useEffect: Qh,
  useLayoutEffect: Kh,
  useDebugValue: eg
} = Es;
let _u = !1, Pu = !1;
function ng(e, t, i) {
  _u || "startTransition" in Es && (_u = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
  const c = t();
  if (!Pu) {
    const h = t();
    Ip(c, h) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), Pu = !0);
  }
  const [{
    inst: s
  }, m] = Jh({
    inst: {
      value: c,
      getSnapshot: t
    }
  });
  return Kh(() => {
    s.value = c, s.getSnapshot = t, ol(s) && m({
      inst: s
    });
  }, [e, c, t]), Qh(() => (ol(s) && m({
    inst: s
  }), e(() => {
    ol(s) && m({
      inst: s
    });
  })), [e]), eg(c), c;
}
function ol(e) {
  const t = e.getSnapshot, i = e.value;
  try {
    const c = t();
    return !Ip(i, c);
  } catch {
    return !0;
  }
}
function tg(e, t, i) {
  return t();
}
const rg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ag = !rg, ig = ag ? tg : ng;
"useSyncExternalStore" in Es && ((e) => e.useSyncExternalStore)(Es);
const Dp = /* @__PURE__ */ oe.createContext(null);
Dp.displayName = "DataRouter";
const Mp = /* @__PURE__ */ oe.createContext(null);
Mp.displayName = "DataRouterState";
const og = /* @__PURE__ */ oe.createContext(null);
og.displayName = "Await";
const vo = /* @__PURE__ */ oe.createContext(null);
vo.displayName = "Navigation";
const Dl = /* @__PURE__ */ oe.createContext(null);
Dl.displayName = "Location";
const Rs = /* @__PURE__ */ oe.createContext({
  outlet: null,
  matches: []
});
Rs.displayName = "Route";
const sg = /* @__PURE__ */ oe.createContext(null);
sg.displayName = "RouteError";
function cg(e, t) {
  let {
    relative: i
  } = t === void 0 ? {} : t;
  Ml() || wt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let {
    basename: c,
    navigator: s
  } = oe.useContext(vo), {
    hash: m,
    pathname: h,
    search: R
  } = As(e, {
    relative: i
  }), w = h;
  return c !== "/" && (w = h === "/" ? c : Il([c, h])), s.createHref({
    pathname: w,
    search: R,
    hash: m
  });
}
function Ml() {
  return oe.useContext(Dl) != null;
}
function ho() {
  return Ml() || wt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), oe.useContext(Dl).location;
}
function lg() {
  Ml() || wt(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let {
    basename: e,
    navigator: t
  } = oe.useContext(vo), {
    matches: i
  } = oe.useContext(Rs), {
    pathname: c
  } = ho(), s = JSON.stringify(Fp(i).map((R) => R.pathnameBase)), m = oe.useRef(!1);
  return oe.useEffect(() => {
    m.current = !0;
  }), oe.useCallback(function(R, w) {
    if (w === void 0 && (w = {}), Wh(m.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !m.current)
      return;
    if (typeof R == "number") {
      t.go(R);
      return;
    }
    let C = jp(R, JSON.parse(s), c, w.relative === "path");
    e !== "/" && (C.pathname = C.pathname === "/" ? e : Il([e, C.pathname])), (w.replace ? t.replace : t.push)(C, w.state, w);
  }, [e, t, s, c]);
}
function As(e, t) {
  let {
    relative: i
  } = t === void 0 ? {} : t, {
    matches: c
  } = oe.useContext(Rs), {
    pathname: s
  } = ho(), m = JSON.stringify(Fp(c).map((h) => h.pathnameBase));
  return oe.useMemo(() => jp(e, JSON.parse(m), s, i === "path"), [e, m, s, i]);
}
var Ou;
(function(e) {
  e.UseRevalidator = "useRevalidator";
})(Ou || (Ou = {}));
var Fu;
(function(e) {
  e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator";
})(Fu || (Fu = {}));
function ug(e) {
  wt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
}
var ju;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(ju || (ju = {}));
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
function ca() {
  return ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = arguments[t];
      for (var c in i)
        Object.prototype.hasOwnProperty.call(i, c) && (e[c] = i[c]);
    }
    return e;
  }, ca.apply(this, arguments);
}
function Ll(e, t) {
  if (e == null)
    return {};
  var i = {}, c = Object.keys(e), s, m;
  for (m = 0; m < c.length; m++)
    s = c[m], !(t.indexOf(s) >= 0) && (i[s] = e[s]);
  return i;
}
const ss = "get", sl = "application/x-www-form-urlencoded";
function _s(e) {
  return e != null && typeof e.tagName == "string";
}
function pg(e) {
  return _s(e) && e.tagName.toLowerCase() === "button";
}
function dg(e) {
  return _s(e) && e.tagName.toLowerCase() === "form";
}
function fg(e) {
  return _s(e) && e.tagName.toLowerCase() === "input";
}
function mg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function vg(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !mg(e);
}
function hg(e, t, i) {
  let c, s, m, h;
  if (dg(e)) {
    let b = i.submissionTrigger;
    c = i.method || e.getAttribute("method") || ss, s = i.action || e.getAttribute("action") || t, m = i.encType || e.getAttribute("enctype") || sl, h = new FormData(e), b && b.name && h.append(b.name, b.value);
  } else if (pg(e) || fg(e) && (e.type === "submit" || e.type === "image")) {
    let b = e.form;
    if (b == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    c = i.method || e.getAttribute("formmethod") || b.getAttribute("method") || ss, s = i.action || e.getAttribute("formaction") || b.getAttribute("action") || t, m = i.encType || e.getAttribute("formenctype") || b.getAttribute("enctype") || sl, h = new FormData(b), e.name && h.append(e.name, e.value);
  } else {
    if (_s(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    if (c = i.method || ss, s = i.action || t, m = i.encType || sl, e instanceof FormData)
      h = e;
    else if (h = new FormData(), e instanceof URLSearchParams)
      for (let [b, x] of e)
        h.append(b, x);
    else if (e != null)
      for (let b of Object.keys(e))
        h.append(b, e[b]);
  }
  let {
    protocol: R,
    host: w
  } = window.location;
  return {
    url: new URL(s, R + "//" + w),
    method: c.toLowerCase(),
    encType: m,
    formData: h
  };
}
const gg = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], xg = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], bg = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative"], ks = /* @__PURE__ */ oe.forwardRef(function(t, i) {
  let {
    onClick: c,
    relative: s,
    reloadDocument: m,
    replace: h,
    state: R,
    target: w,
    to: C,
    preventScrollReset: b
  } = t, x = Ll(t, gg), O = cg(C, {
    relative: s
  }), j = Eg(C, {
    replace: h,
    state: R,
    target: w,
    preventScrollReset: b,
    relative: s
  });
  function I(k) {
    c && c(k), k.defaultPrevented || j(k);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ oe.createElement("a", ca({}, x, {
      href: O,
      onClick: m ? c : I,
      ref: i,
      target: w
    }))
  );
});
ks.displayName = "Link";
const yg = /* @__PURE__ */ oe.forwardRef(function(t, i) {
  let {
    "aria-current": c = "page",
    caseSensitive: s = !1,
    className: m = "",
    end: h = !1,
    style: R,
    to: w,
    children: C
  } = t, b = Ll(t, xg), x = As(w, {
    relative: b.relative
  }), O = ho(), j = oe.useContext(Mp), {
    navigator: I
  } = oe.useContext(vo), k = I.encodeLocation ? I.encodeLocation(x).pathname : x.pathname, _ = O.pathname, A = j && j.navigation && j.navigation.location ? j.navigation.location.pathname : null;
  s || (_ = _.toLowerCase(), A = A ? A.toLowerCase() : null, k = k.toLowerCase());
  let z = _ === k || !h && _.startsWith(k) && _.charAt(k.length) === "/", N = A != null && (A === k || !h && A.startsWith(k) && A.charAt(k.length) === "/"), B = z ? c : void 0, Y;
  typeof m == "function" ? Y = m({
    isActive: z,
    isPending: N
  }) : Y = [m, z ? "active" : null, N ? "pending" : null].filter(Boolean).join(" ");
  let X = typeof R == "function" ? R({
    isActive: z,
    isPending: N
  }) : R;
  return /* @__PURE__ */ oe.createElement(ks, ca({}, b, {
    "aria-current": B,
    className: Y,
    ref: i,
    style: X,
    to: w
  }), typeof C == "function" ? C({
    isActive: z,
    isPending: N
  }) : C);
});
yg.displayName = "NavLink";
const wg = /* @__PURE__ */ oe.forwardRef((e, t) => /* @__PURE__ */ oe.createElement(Lp, ca({}, e, {
  ref: t
})));
wg.displayName = "Form";
const Lp = /* @__PURE__ */ oe.forwardRef((e, t) => {
  let {
    reloadDocument: i,
    replace: c,
    method: s = ss,
    action: m,
    onSubmit: h,
    fetcherKey: R,
    routeId: w,
    relative: C
  } = e, b = Ll(e, bg), x = kg(R, w), O = s.toLowerCase() === "get" ? "get" : "post", j = Up(m, {
    relative: C
  }), I = (k) => {
    if (h && h(k), k.defaultPrevented)
      return;
    k.preventDefault();
    let _ = k.nativeEvent.submitter, A = (_ == null ? void 0 : _.getAttribute("formmethod")) || s;
    x(_ || k.currentTarget, {
      method: A,
      replace: c,
      relative: C
    });
  };
  return /* @__PURE__ */ oe.createElement("form", ca({
    ref: t,
    method: O,
    action: j,
    onSubmit: i ? h : I
  }, b));
});
Lp.displayName = "FormImpl";
var bl;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher";
})(bl || (bl = {}));
var Iu;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Iu || (Iu = {}));
function Sg(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Cg(e) {
  let t = oe.useContext(Dp);
  return t || wt(!1, Sg(e)), t;
}
function Eg(e, t) {
  let {
    target: i,
    replace: c,
    state: s,
    preventScrollReset: m,
    relative: h
  } = t === void 0 ? {} : t, R = lg(), w = ho(), C = As(e, {
    relative: h
  });
  return oe.useCallback((b) => {
    if (vg(b, i)) {
      b.preventDefault();
      let x = c !== void 0 ? c : xl(w) === xl(C);
      R(e, {
        replace: x,
        state: s,
        preventScrollReset: m,
        relative: h
      });
    }
  }, [w, R, C, c, s, i, e, m, h]);
}
function kg(e, t) {
  let {
    router: i
  } = Cg(bl.UseSubmitImpl), c = Up();
  return oe.useCallback(function(s, m) {
    if (m === void 0 && (m = {}), typeof document > "u")
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    let {
      method: h,
      encType: R,
      formData: w,
      url: C
    } = hg(s, c, m), b = C.pathname + C.search, x = {
      replace: m.replace,
      formData: w,
      formMethod: h,
      formEncType: R
    };
    e ? (t == null && wt(!1, "No routeId available for useFetcher()"), i.fetch(e, t, b, x)) : i.navigate(b, x);
  }, [c, i, e, t]);
}
function Up(e, t) {
  let {
    relative: i
  } = t === void 0 ? {} : t, {
    basename: c
  } = oe.useContext(vo), s = oe.useContext(Rs);
  s || wt(!1, "useFormAction must be used inside a RouteContext");
  let [m] = s.matches.slice(-1), h = ca({}, As(e || ".", {
    relative: i
  })), R = ho();
  if (e == null && (h.search = R.search, h.hash = R.hash, m.route.index)) {
    let w = new URLSearchParams(h.search);
    w.delete("index"), h.search = w.toString() ? "?" + w.toString() : "";
  }
  return (!e || e === ".") && m.route.index && (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"), c !== "/" && (h.pathname = h.pathname === "/" ? c : Il([c, h.pathname])), xl(h);
}
const Tg = ({ children: e }) => /* @__PURE__ */ Nh("div", { children: [
  /* @__PURE__ */ Bt(ks, { to: "/home", children: "首页" }),
  /* @__PURE__ */ Bt(ks, { to: "/list", children: "列表页" }),
  /* @__PURE__ */ Bt("div", { children: e })
] }), Rg = ({ routeList: e }) => /* @__PURE__ */ Bt(Tg, { children: e.map((t) => /* @__PURE__ */ Bt(ug, { ...t }, t.path)) }), Ag = (e) => /* @__PURE__ */ Bt(Pp, { children: /* @__PURE__ */ Bt("h2", { children: "Home" }) }), _g = (e) => /* @__PURE__ */ Bt(Pp, { children: /* @__PURE__ */ Bt("h2", { children: "List" }) }), Pg = [
  {
    path: "/home",
    component: Ag,
    exact: !0
    //是否精确匹配
  },
  {
    path: "/list",
    component: _g,
    exact: !0
  }
], Ul = new Fv(), zp = new ah();
zp.get("/", (e) => {
  e.response.type = "html";
  const t = $h(Ap.createElement(Rg, { routeList: Pg }));
  e.response.body = Hh(t);
});
Ul.use(zp.routes());
Ul.use(Mh(Du.resolve(__dirname, "../../dist")));
Ul.listen(3333);
console.log("SSR服务启动!");
//# sourceMappingURL=index.js.map
