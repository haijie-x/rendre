import { r as ft, p as Tn, a as Cr, R as Er, b as $r, j as Mt, A as Tr } from "./App.js";
var ee = {}, re = {};
/**
 * @license React
 * react-dom-server-legacy.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fn = ft;
function h(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _ = Object.prototype.hasOwnProperty, Fr = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Bt = {}, Dt = {};
function Rn(e) {
  return _.call(Dt, e) ? !0 : _.call(Bt, e) ? !1 : Fr.test(e) ? Dt[e] = !0 : (Bt[e] = !0, !1);
}
function F(e, t, n, r, l, o, u) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
}
var E = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  E[e] = new F(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  E[t] = new F(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  E[e] = new F(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  E[e] = new F(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  E[e] = new F(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  E[e] = new F(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  E[e] = new F(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  E[e] = new F(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  E[e] = new F(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var dt = /[\-:]([a-z])/g;
function ht(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    dt,
    ht
  );
  E[t] = new F(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(dt, ht);
  E[t] = new F(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(dt, ht);
  E[t] = new F(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  E[e] = new F(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
E.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  E[e] = new F(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var ke = {
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
}, Rr = ["Webkit", "ms", "Moz", "O"];
Object.keys(ke).forEach(function(e) {
  Rr.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), ke[t] = ke[e];
  });
});
var _r = /["'&<>]/;
function T(e) {
  if (typeof e == "boolean" || typeof e == "number")
    return "" + e;
  e = "" + e;
  var t = _r.exec(e);
  if (t) {
    var n = "", r, l = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      l !== r && (n += e.substring(l, r)), l = r + 1, n += t;
    }
    e = l !== r ? n + e.substring(l, r) : n;
  }
  return e;
}
var Pr = /([A-Z])/g, Ir = /^ms-/, nt = Array.isArray;
function j(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Mr(e, t, n) {
  switch (t) {
    case "select":
      return j(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return j(2, null);
    case "math":
      return j(3, null);
    case "foreignObject":
      return j(1, null);
    case "table":
      return j(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return j(5, null);
    case "colgroup":
      return j(7, null);
    case "tr":
      return j(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? j(1, null) : e;
}
var bt = /* @__PURE__ */ new Map();
function _n(e, t, n) {
  if (typeof n != "object")
    throw Error(h(62));
  t = !0;
  for (var r in n)
    if (_.call(n, r)) {
      var l = n[r];
      if (l != null && typeof l != "boolean" && l !== "") {
        if (r.indexOf("--") === 0) {
          var o = T(r);
          l = T(("" + l).trim());
        } else {
          o = r;
          var u = bt.get(o);
          u !== void 0 || (u = T(o.replace(Pr, "-$1").toLowerCase().replace(Ir, "-ms-")), bt.set(o, u)), o = u, l = typeof l == "number" ? l === 0 || _.call(ke, r) ? "" + l : l + "px" : T(("" + l).trim());
        }
        t ? (t = !1, e.push(' style="', o, ":", l)) : e.push(";", o, ":", l);
      }
    }
  t || e.push('"');
}
function I(e, t, n, r) {
  switch (n) {
    case "style":
      _n(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = E.hasOwnProperty(n) ? E[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans)
            return;
      }
      switch (n = t.attributeName, t.type) {
        case 3:
          r && e.push(" ", n, '=""');
          break;
        case 4:
          r === !0 ? e.push(" ", n, '=""') : r !== !1 && e.push(" ", n, '="', T(r), '"');
          break;
        case 5:
          isNaN(r) || e.push(" ", n, '="', T(r), '"');
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(" ", n, '="', T(r), '"');
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(" ", n, '="', T(r), '"');
      }
    } else if (Rn(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-")
            return;
      }
      e.push(" ", n, '="', T(r), '"');
    }
  }
}
function we(e, t, n) {
  if (t != null) {
    if (n != null)
      throw Error(h(60));
    if (typeof t != "object" || !("__html" in t))
      throw Error(h(61));
    t = t.__html, t != null && e.push("" + t);
  }
}
function Br(e) {
  var t = "";
  return Fn.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function qe(e, t, n, r) {
  e.push(z(n));
  var l = n = null, o;
  for (o in t)
    if (_.call(t, o)) {
      var u = t[o];
      if (u != null)
        switch (o) {
          case "children":
            n = u;
            break;
          case "dangerouslySetInnerHTML":
            l = u;
            break;
          default:
            I(e, r, o, u);
        }
    }
  return e.push(">"), we(e, l, n), typeof n == "string" ? (e.push(T(n)), null) : n;
}
var Dr = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Nt = /* @__PURE__ */ new Map();
function z(e) {
  var t = Nt.get(e);
  if (t === void 0) {
    if (!Dr.test(e))
      throw Error(h(65, e));
    t = "<" + e, Nt.set(e, t);
  }
  return t;
}
function br(e, t, n, r, l) {
  switch (t) {
    case "select":
      e.push(z("select"));
      var o = null, u = null;
      for (c in n)
        if (_.call(n, c)) {
          var i = n[c];
          if (i != null)
            switch (c) {
              case "children":
                o = i;
                break;
              case "dangerouslySetInnerHTML":
                u = i;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                I(e, r, c, i);
            }
        }
      return e.push(">"), we(e, u, o), o;
    case "option":
      u = l.selectedValue, e.push(z("option"));
      var s = i = null, a = null, c = null;
      for (o in n)
        if (_.call(n, o)) {
          var d = n[o];
          if (d != null)
            switch (o) {
              case "children":
                i = d;
                break;
              case "selected":
                a = d;
                break;
              case "dangerouslySetInnerHTML":
                c = d;
                break;
              case "value":
                s = d;
              default:
                I(e, r, o, d);
            }
        }
      if (u != null)
        if (n = s !== null ? "" + s : Br(i), nt(u)) {
          for (r = 0; r < u.length; r++)
            if ("" + u[r] === n) {
              e.push(' selected=""');
              break;
            }
        } else
          "" + u === n && e.push(' selected=""');
      else
        a && e.push(' selected=""');
      return e.push(">"), we(e, c, i), i;
    case "textarea":
      e.push(z("textarea")), c = u = o = null;
      for (i in n)
        if (_.call(n, i) && (s = n[i], s != null))
          switch (i) {
            case "children":
              c = s;
              break;
            case "value":
              o = s;
              break;
            case "defaultValue":
              u = s;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(h(91));
            default:
              I(
                e,
                r,
                i,
                s
              );
          }
      if (o === null && u !== null && (o = u), e.push(">"), c != null) {
        if (o != null)
          throw Error(h(92));
        if (nt(c) && 1 < c.length)
          throw Error(h(93));
        o = "" + c;
      }
      return typeof o == "string" && o[0] === `
` && e.push(`
`), o !== null && e.push(T("" + o)), null;
    case "input":
      e.push(z("input")), s = c = i = o = null;
      for (u in n)
        if (_.call(n, u) && (a = n[u], a != null))
          switch (u) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(h(399, "input"));
            case "defaultChecked":
              s = a;
              break;
            case "defaultValue":
              i = a;
              break;
            case "checked":
              c = a;
              break;
            case "value":
              o = a;
              break;
            default:
              I(e, r, u, a);
          }
      return c !== null ? I(e, r, "checked", c) : s !== null && I(e, r, "checked", s), o !== null ? I(e, r, "value", o) : i !== null && I(e, r, "value", i), e.push("/>"), null;
    case "menuitem":
      e.push(z("menuitem"));
      for (var x in n)
        if (_.call(n, x) && (o = n[x], o != null))
          switch (x) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(h(400));
            default:
              I(e, r, x, o);
          }
      return e.push(">"), null;
    case "title":
      e.push(z("title")), o = null;
      for (d in n)
        if (_.call(n, d) && (u = n[d], u != null))
          switch (d) {
            case "children":
              o = u;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(h(434));
            default:
              I(e, r, d, u);
          }
      return e.push(">"), o;
    case "listing":
    case "pre":
      e.push(z(t)), u = o = null;
      for (s in n)
        if (_.call(n, s) && (i = n[s], i != null))
          switch (s) {
            case "children":
              o = i;
              break;
            case "dangerouslySetInnerHTML":
              u = i;
              break;
            default:
              I(e, r, s, i);
          }
      if (e.push(">"), u != null) {
        if (o != null)
          throw Error(h(60));
        if (typeof u != "object" || !("__html" in u))
          throw Error(h(61));
        n = u.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(`
`, n) : e.push("" + n));
      }
      return typeof o == "string" && o[0] === `
` && e.push(`
`), o;
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
      e.push(z(t));
      for (var w in n)
        if (_.call(n, w) && (o = n[w], o != null))
          switch (w) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(h(399, t));
            default:
              I(e, r, w, o);
          }
      return e.push("/>"), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return qe(
        e,
        n,
        t,
        r
      );
    case "html":
      return l.insertionMode === 0 && e.push("<!DOCTYPE html>"), qe(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string")
        return qe(e, n, t, r);
      e.push(z(t)), u = o = null;
      for (a in n)
        if (_.call(n, a) && (i = n[a], i != null))
          switch (a) {
            case "children":
              o = i;
              break;
            case "dangerouslySetInnerHTML":
              u = i;
              break;
            case "style":
              _n(e, r, i);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              Rn(a) && typeof i != "function" && typeof i != "symbol" && e.push(" ", a, '="', T(i), '"');
          }
      return e.push(">"), we(e, u, o), o;
  }
}
function zt(e, t, n) {
  if (e.push('<!--$?--><template id="'), n === null)
    throw Error(h(395));
  return e.push(n), e.push('"></template>');
}
function Nr(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return e.push('<div hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 2:
      return e.push('<svg aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 3:
      return e.push('<math aria-hidden="true" style="display:none" id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 4:
      return e.push('<table hidden id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 5:
      return e.push('<table hidden><tbody id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 6:
      return e.push('<table hidden><tr id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    case 7:
      return e.push('<table hidden><colgroup id="'), e.push(t.segmentPrefix), t = r.toString(16), e.push(t), e.push('">');
    default:
      throw Error(h(397));
  }
}
function zr(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push("</div>");
    case 2:
      return e.push("</svg>");
    case 3:
      return e.push("</math>");
    case 4:
      return e.push("</table>");
    case 5:
      return e.push("</tbody></table>");
    case 6:
      return e.push("</tr></table>");
    case 7:
      return e.push("</colgroup></table>");
    default:
      throw Error(h(397));
  }
}
var Vr = /[<\u2028\u2029]/g;
function Ye(e) {
  return JSON.stringify(e).replace(Vr, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
function Lr(e, t) {
  return t = t === void 0 ? "" : t, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: t + "P:", segmentPrefix: t + "S:", boundaryPrefix: t + "B:", idPrefix: t, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: e };
}
function Vt(e, t, n, r) {
  return n.generateStaticMarkup ? (e.push(T(t)), !1) : (t === "" ? e = r : (r && e.push("<!-- -->"), e.push(T(t)), e = !0), e);
}
var ae = Object.assign, Or = Symbol.for("react.element"), Pn = Symbol.for("react.portal"), In = Symbol.for("react.fragment"), Mn = Symbol.for("react.strict_mode"), Bn = Symbol.for("react.profiler"), Dn = Symbol.for("react.provider"), bn = Symbol.for("react.context"), Nn = Symbol.for("react.forward_ref"), zn = Symbol.for("react.suspense"), Vn = Symbol.for("react.suspense_list"), Ln = Symbol.for("react.memo"), mt = Symbol.for("react.lazy"), jr = Symbol.for("react.scope"), Ar = Symbol.for("react.debug_trace_mode"), Hr = Symbol.for("react.legacy_hidden"), Ur = Symbol.for("react.default_value"), Lt = Symbol.iterator;
function rt(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case In:
      return "Fragment";
    case Pn:
      return "Portal";
    case Bn:
      return "Profiler";
    case Mn:
      return "StrictMode";
    case zn:
      return "Suspense";
    case Vn:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case bn:
        return (e.displayName || "Context") + ".Consumer";
      case Dn:
        return (e._context.displayName || "Context") + ".Provider";
      case Nn:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ln:
        return t = e.displayName || null, t !== null ? t : rt(e.type) || "Memo";
      case mt:
        t = e._payload, e = e._init;
        try {
          return rt(e(t));
        } catch {
        }
    }
  return null;
}
var On = {};
function Ot(e, t) {
  if (e = e.contextTypes, !e)
    return On;
  var n = {}, r;
  for (r in e)
    n[r] = t[r];
  return n;
}
var K = null;
function je(e, t) {
  if (e !== t) {
    e.context._currentValue2 = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null)
        throw Error(h(401));
    } else {
      if (n === null)
        throw Error(h(401));
      je(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function jn(e) {
  e.context._currentValue2 = e.parentValue, e = e.parent, e !== null && jn(e);
}
function An(e) {
  var t = e.parent;
  t !== null && An(t), e.context._currentValue2 = e.value;
}
function Hn(e, t) {
  if (e.context._currentValue2 = e.parentValue, e = e.parent, e === null)
    throw Error(h(402));
  e.depth === t.depth ? je(e, t) : Hn(e, t);
}
function Un(e, t) {
  var n = t.parent;
  if (n === null)
    throw Error(h(402));
  e.depth === n.depth ? je(e, n) : Un(e, n), t.context._currentValue2 = t.value;
}
function Ie(e) {
  var t = K;
  t !== e && (t === null ? An(e) : e === null ? jn(t) : t.depth === e.depth ? je(t, e) : t.depth > e.depth ? Hn(t, e) : Un(t, e), K = e);
}
var jt = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function At(e, t, n, r) {
  var l = e.state !== void 0 ? e.state : null;
  e.updater = jt, e.props = n, e.state = l;
  var o = { queue: [], replace: !1 };
  e._reactInternals = o;
  var u = t.contextType;
  if (e.context = typeof u == "object" && u !== null ? u._currentValue2 : r, u = t.getDerivedStateFromProps, typeof u == "function" && (u = u(n, l), l = u == null ? l : ae({}, l, u), e.state = l), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function"))
    if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && jt.enqueueReplaceState(e, e.state, null), o.queue !== null && 0 < o.queue.length)
      if (t = o.queue, u = o.replace, o.queue = null, o.replace = !1, u && t.length === 1)
        e.state = t[0];
      else {
        for (o = u ? t[0] : e.state, l = !0, u = u ? 1 : 0; u < t.length; u++) {
          var i = t[u];
          i = typeof i == "function" ? i.call(e, o, n, r) : i, i != null && (l ? (l = !1, o = ae({}, o, i)) : ae(o, i));
        }
        e.state = o;
      }
    else
      o.queue = null;
}
var Wr = { id: 1, overflow: "" };
function ot(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var l = 32 - Ce(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Ce(t) + l;
  if (30 < o) {
    var u = l - l % 5;
    return o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, { id: 1 << 32 - Ce(t) + l | n << l | r, overflow: o + e };
  }
  return { id: 1 << o | n << l | r, overflow: e };
}
var Ce = Math.clz32 ? Math.clz32 : Yr, Zr = Math.log, qr = Math.LN2;
function Yr(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Zr(e) / qr | 0) | 0;
}
function Xr(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Gr = typeof Object.is == "function" ? Object.is : Xr, A = null, yt = null, Ee = null, g = null, le = !1, Me = !1, pe = 0, Z = null, Ae = 0;
function X() {
  if (A === null)
    throw Error(h(321));
  return A;
}
function Ht() {
  if (0 < Ae)
    throw Error(h(312));
  return { memoizedState: null, queue: null, next: null };
}
function gt() {
  return g === null ? Ee === null ? (le = !1, Ee = g = Ht()) : (le = !0, g = Ee) : g.next === null ? (le = !1, g = g.next = Ht()) : (le = !0, g = g.next), g;
}
function vt() {
  yt = A = null, Me = !1, Ee = null, Ae = 0, g = Z = null;
}
function Wn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ut(e, t, n) {
  if (A = X(), g = gt(), le) {
    var r = g.queue;
    if (t = r.dispatch, Z !== null && (n = Z.get(r), n !== void 0)) {
      Z.delete(r), r = g.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return g.memoizedState = r, [r, t];
    }
    return [g.memoizedState, t];
  }
  return e = e === Wn ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, g.memoizedState = e, e = g.queue = { last: null, dispatch: null }, e = e.dispatch = Jr.bind(null, A, e), [g.memoizedState, e];
}
function Wt(e, t) {
  if (A = X(), g = gt(), t = t === void 0 ? null : t, g !== null) {
    var n = g.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e:
        if (r === null)
          r = !1;
        else {
          for (var l = 0; l < r.length && l < t.length; l++)
            if (!Gr(t[l], r[l])) {
              r = !1;
              break e;
            }
          r = !0;
        }
      if (r)
        return n[0];
    }
  }
  return e = e(), g.memoizedState = [e, t], e;
}
function Jr(e, t, n) {
  if (25 <= Ae)
    throw Error(h(301));
  if (e === A)
    if (Me = !0, e = { action: n, next: null }, Z === null && (Z = /* @__PURE__ */ new Map()), n = Z.get(t), n === void 0)
      Z.set(t, e);
    else {
      for (t = n; t.next !== null; )
        t = t.next;
      t.next = e;
    }
}
function Kr() {
  throw Error(h(394));
}
function ge() {
}
var Zt = { readContext: function(e) {
  return e._currentValue2;
}, useContext: function(e) {
  return X(), e._currentValue2;
}, useMemo: Wt, useReducer: Ut, useRef: function(e) {
  A = X(), g = gt();
  var t = g.memoizedState;
  return t === null ? (e = { current: e }, g.memoizedState = e) : t;
}, useState: function(e) {
  return Ut(Wn, e);
}, useInsertionEffect: ge, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return Wt(function() {
    return e;
  }, t);
}, useImperativeHandle: ge, useEffect: ge, useDebugValue: ge, useDeferredValue: function(e) {
  return X(), e;
}, useTransition: function() {
  return X(), [
    !1,
    Kr
  ];
}, useId: function() {
  var e = yt.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - Ce(e) - 1)).toString(32) + t;
  var n = $e;
  if (n === null)
    throw Error(h(404));
  return t = pe++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return X(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0)
    throw Error(h(407));
  return n();
} }, $e = null, Xe = Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Qr(e) {
  return console.error(e), null;
}
function ue() {
}
function eo(e, t, n, r, l, o, u, i, s) {
  var a = [], c = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: c, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: l === void 0 ? Qr : l, onAllReady: o === void 0 ? ue : o, onShellReady: u === void 0 ? ue : u, onShellError: i === void 0 ? ue : i, onFatalError: s === void 0 ? ue : s }, n = Be(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = St(t, e, null, n, c, On, null, Wr), a.push(e), t;
}
function St(e, t, n, r, l, o, u, i) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var s = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(s), a.length === 1 && Yn(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: l, legacyContext: o, context: u, treeContext: i };
  return l.add(s), s;
}
function Be(e, t, n, r, l, o) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: l, textEmbedded: o };
}
function fe(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string")
    throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function De(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, e.destination.destroy(t)) : (e.status = 1, e.fatalError = t);
}
function qt(e, t, n, r, l) {
  for (A = {}, yt = t, pe = 0, e = n(r, l); Me; )
    Me = !1, pe = 0, Ae += 1, g = null, e = n(r, l);
  return vt(), e;
}
function Yt(e, t, n, r) {
  var l = n.render(), o = r.childContextTypes;
  if (o != null) {
    var u = t.legacyContext;
    if (typeof n.getChildContext != "function")
      r = u;
    else {
      n = n.getChildContext();
      for (var i in n)
        if (!(i in o))
          throw Error(h(108, rt(r) || "Unknown", i));
      r = ae({}, u, n);
    }
    t.legacyContext = r, B(e, t, l), t.legacyContext = u;
  } else
    B(e, t, l);
}
function Xt(e, t) {
  if (e && e.defaultProps) {
    t = ae({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function lt(e, t, n, r, l) {
  if (typeof n == "function")
    if (n.prototype && n.prototype.isReactComponent) {
      l = Ot(n, t.legacyContext);
      var o = n.contextType;
      o = new n(r, typeof o == "object" && o !== null ? o._currentValue2 : l), At(o, n, r, l), Yt(e, t, o, n);
    } else {
      o = Ot(n, t.legacyContext), l = qt(e, t, n, r, o);
      var u = pe !== 0;
      if (typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0)
        At(l, n, r, o), Yt(e, t, l, n);
      else if (u) {
        r = t.treeContext, t.treeContext = ot(r, 1, 0);
        try {
          B(e, t, l);
        } finally {
          t.treeContext = r;
        }
      } else
        B(e, t, l);
    }
  else if (typeof n == "string") {
    switch (l = t.blockedSegment, o = br(l.chunks, n, r, e.responseState, l.formatContext), l.lastPushedText = !1, u = l.formatContext, l.formatContext = Mr(u, n, r), ut(e, t, o), l.formatContext = u, n) {
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
        l.chunks.push("</", n, ">");
    }
    l.lastPushedText = !1;
  } else {
    switch (n) {
      case Hr:
      case Ar:
      case Mn:
      case Bn:
      case In:
        B(e, t, r.children);
        return;
      case Vn:
        B(e, t, r.children);
        return;
      case jr:
        throw Error(h(343));
      case zn:
        e: {
          n = t.blockedBoundary, l = t.blockedSegment, o = r.fallback, r = r.children, u = /* @__PURE__ */ new Set();
          var i = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: u, errorDigest: null }, s = Be(e, l.chunks.length, i, l.formatContext, !1, !1);
          l.children.push(s), l.lastPushedText = !1;
          var a = Be(e, 0, null, l.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = i, t.blockedSegment = a;
          try {
            if (ut(
              e,
              t,
              r
            ), e.responseState.generateStaticMarkup || a.lastPushedText && a.textEmbedded && a.chunks.push("<!-- -->"), a.status = 1, be(i, a), i.pendingTasks === 0)
              break e;
          } catch (c) {
            a.status = 4, i.forceClientRender = !0, i.errorDigest = fe(e, c);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = l;
          }
          t = St(e, o, n, s, u, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null)
      switch (n.$$typeof) {
        case Nn:
          if (r = qt(e, t, n.render, r, l), pe !== 0) {
            n = t.treeContext, t.treeContext = ot(n, 1, 0);
            try {
              B(e, t, r);
            } finally {
              t.treeContext = n;
            }
          } else
            B(e, t, r);
          return;
        case Ln:
          n = n.type, r = Xt(n, r), lt(e, t, n, r, l);
          return;
        case Dn:
          if (l = r.children, n = n._context, r = r.value, o = n._currentValue2, n._currentValue2 = r, u = K, K = r = { parent: u, depth: u === null ? 0 : u.depth + 1, context: n, parentValue: o, value: r }, t.context = r, B(e, t, l), e = K, e === null)
            throw Error(h(403));
          r = e.parentValue, e.context._currentValue2 = r === Ur ? e.context._defaultValue : r, e = K = e.parent, t.context = e;
          return;
        case bn:
          r = r.children, r = r(n._currentValue2), B(e, t, r);
          return;
        case mt:
          l = n._init, n = l(n._payload), r = Xt(n, r), lt(
            e,
            t,
            n,
            r,
            void 0
          );
          return;
      }
    throw Error(h(130, n == null ? n : typeof n, ""));
  }
}
function B(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case Or:
        lt(e, t, n.type, n.props, n.ref);
        return;
      case Pn:
        throw Error(h(257));
      case mt:
        var r = n._init;
        n = r(n._payload), B(e, t, n);
        return;
    }
    if (nt(n)) {
      Gt(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = Lt && n[Lt] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var l = [];
        do
          l.push(n.value), n = r.next();
        while (!n.done);
        Gt(e, t, l);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(h(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = Vt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = Vt(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function Gt(e, t, n) {
  for (var r = n.length, l = 0; l < r; l++) {
    var o = t.treeContext;
    t.treeContext = ot(o, r, l);
    try {
      ut(e, t, n[l]);
    } finally {
      t.treeContext = o;
    }
  }
}
function ut(e, t, n) {
  var r = t.blockedSegment.formatContext, l = t.legacyContext, o = t.context;
  try {
    return B(e, t, n);
  } catch (s) {
    if (vt(), typeof s == "object" && s !== null && typeof s.then == "function") {
      n = s;
      var u = t.blockedSegment, i = Be(e, u.chunks.length, null, u.formatContext, u.lastPushedText, !0);
      u.children.push(i), u.lastPushedText = !1, e = St(e, t.node, t.blockedBoundary, i, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = l, t.context = o, Ie(o);
    } else
      throw t.blockedSegment.formatContext = r, t.legacyContext = l, t.context = o, Ie(o), s;
  }
}
function to(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, qn(this, t, e);
}
function Zn(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.push(null))) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(h(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(l) {
    return Zn(l, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function be(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && be(e, n);
  } else
    e.completedSegments.push(t);
}
function qn(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null)
        throw Error(h(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = ue, t = e.onShellReady, t());
  } else
    t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && be(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(to, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (be(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function Yn(e) {
  if (e.status !== 2) {
    var t = K, n = Xe.current;
    Xe.current = Zt;
    var r = $e;
    $e = e.responseState;
    try {
      var l = e.pingedTasks, o;
      for (o = 0; o < l.length; o++) {
        var u = l[o], i = e, s = u.blockedSegment;
        if (s.status === 0) {
          Ie(u.context);
          try {
            B(i, u, u.node), i.responseState.generateStaticMarkup || s.lastPushedText && s.textEmbedded && s.chunks.push("<!-- -->"), u.abortSet.delete(u), s.status = 1, qn(i, u.blockedBoundary, s);
          } catch (k) {
            if (vt(), typeof k == "object" && k !== null && typeof k.then == "function") {
              var a = u.ping;
              k.then(a, a);
            } else {
              u.abortSet.delete(u), s.status = 4;
              var c = u.blockedBoundary, d = k, x = fe(i, d);
              if (c === null ? De(i, d) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = x, c.parentFlushed && i.clientRenderedBoundaries.push(c))), i.allPendingTasks--, i.allPendingTasks === 0) {
                var w = i.onAllReady;
                w();
              }
            }
          } finally {
          }
        }
      }
      l.splice(0, o), e.destination !== null && xt(e, e.destination);
    } catch (k) {
      fe(e, k), De(e, k);
    } finally {
      $e = r, Xe.current = n, n === Zt && Ie(t);
    }
  }
}
function ve(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, t.push('<template id="'), t.push(e.placeholderPrefix), e = r.toString(16), t.push(e), t.push('"></template>');
    case 1:
      n.status = 2;
      var l = !0;
      r = n.chunks;
      var o = 0;
      n = n.children;
      for (var u = 0; u < n.length; u++) {
        for (l = n[u]; o < l.index; o++)
          t.push(r[o]);
        l = He(e, t, l);
      }
      for (; o < r.length - 1; o++)
        t.push(r[o]);
      return o < r.length && (l = t.push(r[o])), l;
    default:
      throw Error(h(390));
  }
}
function He(e, t, n) {
  var r = n.boundary;
  if (r === null)
    return ve(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender)
    return e.responseState.generateStaticMarkup || (r = r.errorDigest, t.push("<!--$!-->"), t.push("<template"), r && (t.push(' data-dgst="'), r = T(r), t.push(r), t.push('"')), t.push("></template>")), ve(e, t, n), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
  if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var l = e.responseState, o = l.nextSuspenseID++;
    return l = l.boundaryPrefix + o.toString(16), r = r.id = l, zt(t, e.responseState, r), ve(e, t, n), t.push("<!--/$-->");
  }
  if (r.byteSize > e.progressiveChunkSize)
    return r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), zt(t, e.responseState, r.id), ve(e, t, n), t.push("<!--/$-->");
  if (e.responseState.generateStaticMarkup || t.push("<!--$-->"), n = r.completedSegments, n.length !== 1)
    throw Error(h(391));
  return He(e, t, n[0]), e = e.responseState.generateStaticMarkup ? !0 : t.push("<!--/$-->"), e;
}
function Jt(e, t, n) {
  return Nr(t, e.responseState, n.formatContext, n.id), He(e, t, n), zr(t, n.formatContext);
}
function Kt(e, t, n) {
  for (var r = n.completedSegments, l = 0; l < r.length; l++)
    Xn(e, t, n, r[l]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, t.push(e.startInlineScript), e.sentCompleteBoundaryFunction ? t.push('$RC("') : (e.sentCompleteBoundaryFunction = !0, t.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), r === null)
    throw Error(h(395));
  return n = n.toString(16), t.push(r), t.push('","'), t.push(e.segmentPrefix), t.push(n), t.push('")<\/script>');
}
function Xn(e, t, n, r) {
  if (r.status === 2)
    return !0;
  var l = r.id;
  if (l === -1) {
    if ((r.id = n.rootSegmentID) === -1)
      throw Error(h(392));
    return Jt(e, t, r);
  }
  return Jt(e, t, r), e = e.responseState, t.push(e.startInlineScript), e.sentCompleteSegmentFunction ? t.push('$RS("') : (e.sentCompleteSegmentFunction = !0, t.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), t.push(e.segmentPrefix), l = l.toString(16), t.push(l), t.push('","'), t.push(e.placeholderPrefix), t.push(l), t.push('")<\/script>');
}
function xt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      He(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++)
        t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var l = e.clientRenderedBoundaries, o;
    for (o = 0; o < l.length; o++) {
      var u = l[o];
      r = t;
      var i = e.responseState, s = u.id, a = u.errorDigest, c = u.errorMessage, d = u.errorComponentStack;
      if (r.push(i.startInlineScript), i.sentClientRenderFunction ? r.push('$RX("') : (i.sentClientRenderFunction = !0, r.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), s === null)
        throw Error(h(395));
      if (r.push(s), r.push('"'), a || c || d) {
        r.push(",");
        var x = Ye(a || "");
        r.push(x);
      }
      if (c || d) {
        r.push(",");
        var w = Ye(c || "");
        r.push(w);
      }
      if (d) {
        r.push(",");
        var k = Ye(d);
        r.push(k);
      }
      if (!r.push(")<\/script>")) {
        e.destination = null, o++, l.splice(0, o);
        return;
      }
    }
    l.splice(0, o);
    var O = e.completedBoundaries;
    for (o = 0; o < O.length; o++)
      if (!Kt(e, t, O[o])) {
        e.destination = null, o++, O.splice(0, o);
        return;
      }
    O.splice(0, o);
    var Y = e.partialBoundaries;
    for (o = 0; o < Y.length; o++) {
      var te = Y[o];
      e: {
        l = e, u = t;
        var me = te.completedSegments;
        for (i = 0; i < me.length; i++)
          if (!Xn(l, u, te, me[i])) {
            i++, me.splice(0, i);
            var It = !1;
            break e;
          }
        me.splice(0, i), It = !0;
      }
      if (!It) {
        e.destination = null, o++, Y.splice(0, o);
        return;
      }
    }
    Y.splice(0, o);
    var ye = e.completedBoundaries;
    for (o = 0; o < ye.length; o++)
      if (!Kt(e, t, ye[o])) {
        e.destination = null, o++, ye.splice(0, o);
        return;
      }
    ye.splice(0, o);
  } finally {
    e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.push(null);
  }
}
function no(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return Zn(r, e, t);
    }), n.clear(), e.destination !== null && xt(e, e.destination);
  } catch (r) {
    fe(e, r), De(e, r);
  }
}
function ro() {
}
function Gn(e, t, n, r) {
  var l = !1, o = null, u = "", i = { push: function(a) {
    return a !== null && (u += a), !0;
  }, destroy: function(a) {
    l = !0, o = a;
  } }, s = !1;
  if (e = eo(e, Lr(n, t ? t.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, ro, void 0, function() {
    s = !0;
  }, void 0, void 0), Yn(e), no(e, r), e.status === 1)
    e.status = 2, i.destroy(e.fatalError);
  else if (e.status !== 2 && e.destination === null) {
    e.destination = i;
    try {
      xt(e, i);
    } catch (a) {
      fe(e, a), De(e, a);
    }
  }
  if (l)
    throw o;
  if (!s)
    throw Error(h(426));
  return u;
}
re.renderToNodeStream = function() {
  throw Error(h(207));
};
re.renderToStaticMarkup = function(e, t) {
  return Gn(e, t, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
re.renderToStaticNodeStream = function() {
  throw Error(h(208));
};
re.renderToString = function(e, t) {
  return Gn(e, t, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
};
re.version = "18.2.0";
var kt = {};
/**
 * @license React
 * react-dom-server.browser.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn = ft;
function m(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var D = null, b = 0;
function f(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      0 < b && (e.enqueue(new Uint8Array(D.buffer, 0, b)), D = new Uint8Array(512), b = 0), e.enqueue(t);
    else {
      var n = D.length - b;
      n < t.length && (n === 0 ? e.enqueue(D) : (D.set(t.subarray(0, n), b), e.enqueue(D), t = t.subarray(n)), D = new Uint8Array(512), b = 0), D.set(t, b), b += t.length;
    }
}
function S(e, t) {
  return f(e, t), !0;
}
function Qt(e) {
  D && 0 < b && (e.enqueue(new Uint8Array(D.buffer, 0, b)), D = null, b = 0);
}
var Kn = new TextEncoder();
function y(e) {
  return Kn.encode(e);
}
function p(e) {
  return Kn.encode(e);
}
function Qn(e, t) {
  typeof e.error == "function" ? e.error(t) : e.close();
}
var P = Object.prototype.hasOwnProperty, oo = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, en = {}, tn = {};
function er(e) {
  return P.call(tn, e) ? !0 : P.call(en, e) ? !1 : oo.test(e) ? tn[e] = !0 : (en[e] = !0, !1);
}
function R(e, t, n, r, l, o, u) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = u;
}
var $ = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  $[e] = new R(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  $[t] = new R(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  $[e] = new R(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  $[e] = new R(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  $[e] = new R(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  $[e] = new R(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  $[e] = new R(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  $[e] = new R(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  $[e] = new R(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var wt = /[\-:]([a-z])/g;
function Ct(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    wt,
    Ct
  );
  $[t] = new R(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(wt, Ct);
  $[t] = new R(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(wt, Ct);
  $[t] = new R(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  $[e] = new R(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
$.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  $[e] = new R(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
var Te = {
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
}, lo = ["Webkit", "ms", "Moz", "O"];
Object.keys(Te).forEach(function(e) {
  lo.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Te[t] = Te[e];
  });
});
var uo = /["'&<>]/;
function C(e) {
  if (typeof e == "boolean" || typeof e == "number")
    return "" + e;
  e = "" + e;
  var t = uo.exec(e);
  if (t) {
    var n = "", r, l = 0;
    for (r = t.index; r < e.length; r++) {
      switch (e.charCodeAt(r)) {
        case 34:
          t = "&quot;";
          break;
        case 38:
          t = "&amp;";
          break;
        case 39:
          t = "&#x27;";
          break;
        case 60:
          t = "&lt;";
          break;
        case 62:
          t = "&gt;";
          break;
        default:
          continue;
      }
      l !== r && (n += e.substring(l, r)), l = r + 1, n += t;
    }
    e = l !== r ? n + e.substring(l, r) : n;
  }
  return e;
}
var io = /([A-Z])/g, so = /^ms-/, it = Array.isArray, ao = p("<script>"), co = p("<\/script>"), po = p('<script src="'), fo = p('<script type="module" src="'), nn = p('" async=""><\/script>'), ho = /(<\/|<)(s)(cript)/gi;
function mo(e, t, n, r) {
  return "" + t + (n === "s" ? "\\u0073" : "\\u0053") + r;
}
function yo(e, t, n, r, l) {
  e = e === void 0 ? "" : e, t = t === void 0 ? ao : p('<script nonce="' + C(t) + '">');
  var o = [];
  if (n !== void 0 && o.push(t, y(("" + n).replace(ho, mo)), co), r !== void 0)
    for (n = 0; n < r.length; n++)
      o.push(po, y(C(r[n])), nn);
  if (l !== void 0)
    for (r = 0; r < l.length; r++)
      o.push(fo, y(C(l[r])), nn);
  return { bootstrapChunks: o, startInlineScript: t, placeholderPrefix: p(e + "P:"), segmentPrefix: p(e + "S:"), boundaryPrefix: e + "B:", idPrefix: e, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
}
function V(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function go(e) {
  return V(e === "http://www.w3.org/2000/svg" ? 2 : e === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
}
function vo(e, t, n) {
  switch (t) {
    case "select":
      return V(1, n.value != null ? n.value : n.defaultValue);
    case "svg":
      return V(2, null);
    case "math":
      return V(3, null);
    case "foreignObject":
      return V(1, null);
    case "table":
      return V(4, null);
    case "thead":
    case "tbody":
    case "tfoot":
      return V(5, null);
    case "colgroup":
      return V(7, null);
    case "tr":
      return V(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? V(1, null) : e;
}
var Et = p("<!-- -->");
function rn(e, t, n, r) {
  return t === "" ? r : (r && e.push(Et), e.push(y(C(t))), !0);
}
var on = /* @__PURE__ */ new Map(), So = p(' style="'), ln = p(":"), xo = p(";");
function tr(e, t, n) {
  if (typeof n != "object")
    throw Error(m(62));
  t = !0;
  for (var r in n)
    if (P.call(n, r)) {
      var l = n[r];
      if (l != null && typeof l != "boolean" && l !== "") {
        if (r.indexOf("--") === 0) {
          var o = y(C(r));
          l = y(C(("" + l).trim()));
        } else {
          o = r;
          var u = on.get(o);
          u !== void 0 || (u = p(C(o.replace(io, "-$1").toLowerCase().replace(so, "-ms-"))), on.set(o, u)), o = u, l = typeof l == "number" ? l === 0 || P.call(Te, r) ? y("" + l) : y(l + "px") : y(C(("" + l).trim()));
        }
        t ? (t = !1, e.push(So, o, ln, l)) : e.push(xo, o, ln, l);
      }
    }
  t || e.push(G);
}
var U = p(" "), ne = p('="'), G = p('"'), un = p('=""');
function M(e, t, n, r) {
  switch (n) {
    case "style":
      tr(e, t, r);
      return;
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
      return;
  }
  if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") {
    if (t = $.hasOwnProperty(n) ? $[n] : null, t !== null) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (!t.acceptsBooleans)
            return;
      }
      switch (n = y(t.attributeName), t.type) {
        case 3:
          r && e.push(U, n, un);
          break;
        case 4:
          r === !0 ? e.push(U, n, un) : r !== !1 && e.push(U, n, ne, y(C(r)), G);
          break;
        case 5:
          isNaN(r) || e.push(U, n, ne, y(C(r)), G);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(U, n, ne, y(C(r)), G);
          break;
        default:
          t.sanitizeURL && (r = "" + r), e.push(U, n, ne, y(C(r)), G);
      }
    } else if (er(n)) {
      switch (typeof r) {
        case "function":
        case "symbol":
          return;
        case "boolean":
          if (t = n.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-")
            return;
      }
      e.push(U, y(n), ne, y(C(r)), G);
    }
  }
}
var W = p(">"), sn = p("/>");
function Fe(e, t, n) {
  if (t != null) {
    if (n != null)
      throw Error(m(60));
    if (typeof t != "object" || !("__html" in t))
      throw Error(m(61));
    t = t.__html, t != null && e.push(y("" + t));
  }
}
function ko(e) {
  var t = "";
  return Jn.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
var Ge = p(' selected=""');
function Je(e, t, n, r) {
  e.push(L(n));
  var l = n = null, o;
  for (o in t)
    if (P.call(t, o)) {
      var u = t[o];
      if (u != null)
        switch (o) {
          case "children":
            n = u;
            break;
          case "dangerouslySetInnerHTML":
            l = u;
            break;
          default:
            M(e, r, o, u);
        }
    }
  return e.push(W), Fe(e, l, n), typeof n == "string" ? (e.push(y(C(n))), null) : n;
}
var Ke = p(`
`), wo = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, an = /* @__PURE__ */ new Map();
function L(e) {
  var t = an.get(e);
  if (t === void 0) {
    if (!wo.test(e))
      throw Error(m(65, e));
    t = p("<" + e), an.set(e, t);
  }
  return t;
}
var Co = p("<!DOCTYPE html>");
function Eo(e, t, n, r, l) {
  switch (t) {
    case "select":
      e.push(L("select"));
      var o = null, u = null;
      for (c in n)
        if (P.call(n, c)) {
          var i = n[c];
          if (i != null)
            switch (c) {
              case "children":
                o = i;
                break;
              case "dangerouslySetInnerHTML":
                u = i;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                M(e, r, c, i);
            }
        }
      return e.push(W), Fe(e, u, o), o;
    case "option":
      u = l.selectedValue, e.push(L("option"));
      var s = i = null, a = null, c = null;
      for (o in n)
        if (P.call(n, o)) {
          var d = n[o];
          if (d != null)
            switch (o) {
              case "children":
                i = d;
                break;
              case "selected":
                a = d;
                break;
              case "dangerouslySetInnerHTML":
                c = d;
                break;
              case "value":
                s = d;
              default:
                M(e, r, o, d);
            }
        }
      if (u != null)
        if (n = s !== null ? "" + s : ko(i), it(u)) {
          for (r = 0; r < u.length; r++)
            if ("" + u[r] === n) {
              e.push(Ge);
              break;
            }
        } else
          "" + u === n && e.push(Ge);
      else
        a && e.push(Ge);
      return e.push(W), Fe(e, c, i), i;
    case "textarea":
      e.push(L("textarea")), c = u = o = null;
      for (i in n)
        if (P.call(n, i) && (s = n[i], s != null))
          switch (i) {
            case "children":
              c = s;
              break;
            case "value":
              o = s;
              break;
            case "defaultValue":
              u = s;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(m(91));
            default:
              M(e, r, i, s);
          }
      if (o === null && u !== null && (o = u), e.push(W), c != null) {
        if (o != null)
          throw Error(m(92));
        if (it(c) && 1 < c.length)
          throw Error(m(93));
        o = "" + c;
      }
      return typeof o == "string" && o[0] === `
` && e.push(Ke), o !== null && e.push(y(C("" + o))), null;
    case "input":
      e.push(L("input")), s = c = i = o = null;
      for (u in n)
        if (P.call(n, u) && (a = n[u], a != null))
          switch (u) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(m(399, "input"));
            case "defaultChecked":
              s = a;
              break;
            case "defaultValue":
              i = a;
              break;
            case "checked":
              c = a;
              break;
            case "value":
              o = a;
              break;
            default:
              M(e, r, u, a);
          }
      return c !== null ? M(
        e,
        r,
        "checked",
        c
      ) : s !== null && M(e, r, "checked", s), o !== null ? M(e, r, "value", o) : i !== null && M(e, r, "value", i), e.push(sn), null;
    case "menuitem":
      e.push(L("menuitem"));
      for (var x in n)
        if (P.call(n, x) && (o = n[x], o != null))
          switch (x) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(m(400));
            default:
              M(e, r, x, o);
          }
      return e.push(W), null;
    case "title":
      e.push(L("title")), o = null;
      for (d in n)
        if (P.call(n, d) && (u = n[d], u != null))
          switch (d) {
            case "children":
              o = u;
              break;
            case "dangerouslySetInnerHTML":
              throw Error(m(434));
            default:
              M(e, r, d, u);
          }
      return e.push(W), o;
    case "listing":
    case "pre":
      e.push(L(t)), u = o = null;
      for (s in n)
        if (P.call(n, s) && (i = n[s], i != null))
          switch (s) {
            case "children":
              o = i;
              break;
            case "dangerouslySetInnerHTML":
              u = i;
              break;
            default:
              M(e, r, s, i);
          }
      if (e.push(W), u != null) {
        if (o != null)
          throw Error(m(60));
        if (typeof u != "object" || !("__html" in u))
          throw Error(m(61));
        n = u.__html, n != null && (typeof n == "string" && 0 < n.length && n[0] === `
` ? e.push(Ke, y(n)) : e.push(y("" + n)));
      }
      return typeof o == "string" && o[0] === `
` && e.push(Ke), o;
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
      e.push(L(t));
      for (var w in n)
        if (P.call(n, w) && (o = n[w], o != null))
          switch (w) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(m(399, t));
            default:
              M(e, r, w, o);
          }
      return e.push(sn), null;
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return Je(e, n, t, r);
    case "html":
      return l.insertionMode === 0 && e.push(Co), Je(e, n, t, r);
    default:
      if (t.indexOf("-") === -1 && typeof n.is != "string")
        return Je(e, n, t, r);
      e.push(L(t)), u = o = null;
      for (a in n)
        if (P.call(n, a) && (i = n[a], i != null))
          switch (a) {
            case "children":
              o = i;
              break;
            case "dangerouslySetInnerHTML":
              u = i;
              break;
            case "style":
              tr(e, r, i);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              er(a) && typeof i != "function" && typeof i != "symbol" && e.push(U, y(a), ne, y(C(i)), G);
          }
      return e.push(W), Fe(e, u, o), o;
  }
}
var $o = p("</"), To = p(">"), Fo = p('<template id="'), Ro = p('"></template>'), _o = p("<!--$-->"), Po = p('<!--$?--><template id="'), Io = p('"></template>'), Mo = p("<!--$!-->"), Bo = p("<!--/$-->"), Do = p("<template"), bo = p('"'), No = p(' data-dgst="');
p(' data-msg="');
p(' data-stck="');
var zo = p("></template>");
function cn(e, t, n) {
  if (f(e, Po), n === null)
    throw Error(m(395));
  return f(e, n), S(e, Io);
}
var Vo = p('<div hidden id="'), Lo = p('">'), Oo = p("</div>"), jo = p('<svg aria-hidden="true" style="display:none" id="'), Ao = p('">'), Ho = p("</svg>"), Uo = p('<math aria-hidden="true" style="display:none" id="'), Wo = p('">'), Zo = p("</math>"), qo = p('<table hidden id="'), Yo = p('">'), Xo = p("</table>"), Go = p('<table hidden><tbody id="'), Jo = p('">'), Ko = p("</tbody></table>"), Qo = p('<table hidden><tr id="'), el = p('">'), tl = p("</tr></table>"), nl = p('<table hidden><colgroup id="'), rl = p('">'), ol = p("</colgroup></table>");
function ll(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return f(e, Vo), f(e, t.segmentPrefix), f(e, y(r.toString(16))), S(e, Lo);
    case 2:
      return f(e, jo), f(e, t.segmentPrefix), f(e, y(r.toString(16))), S(e, Ao);
    case 3:
      return f(e, Uo), f(e, t.segmentPrefix), f(e, y(r.toString(16))), S(e, Wo);
    case 4:
      return f(e, qo), f(e, t.segmentPrefix), f(e, y(r.toString(16))), S(e, Yo);
    case 5:
      return f(e, Go), f(e, t.segmentPrefix), f(e, y(r.toString(16))), S(e, Jo);
    case 6:
      return f(e, Qo), f(e, t.segmentPrefix), f(e, y(r.toString(16))), S(e, el);
    case 7:
      return f(
        e,
        nl
      ), f(e, t.segmentPrefix), f(e, y(r.toString(16))), S(e, rl);
    default:
      throw Error(m(397));
  }
}
function ul(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return S(e, Oo);
    case 2:
      return S(e, Ho);
    case 3:
      return S(e, Zo);
    case 4:
      return S(e, Xo);
    case 5:
      return S(e, Ko);
    case 6:
      return S(e, tl);
    case 7:
      return S(e, ol);
    default:
      throw Error(m(397));
  }
}
var il = p('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), sl = p('$RS("'), al = p('","'), cl = p('")<\/script>'), pl = p('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), fl = p('$RC("'), dl = p('","'), hl = p('")<\/script>'), ml = p('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), yl = p('$RX("'), gl = p('"'), vl = p(")<\/script>"), Qe = p(","), Sl = /[<\u2028\u2029]/g;
function et(e) {
  return JSON.stringify(e).replace(Sl, function(t) {
    switch (t) {
      case "<":
        return "\\u003c";
      case "\u2028":
        return "\\u2028";
      case "\u2029":
        return "\\u2029";
      default:
        throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
    }
  });
}
var ce = Object.assign, xl = Symbol.for("react.element"), nr = Symbol.for("react.portal"), rr = Symbol.for("react.fragment"), or = Symbol.for("react.strict_mode"), lr = Symbol.for("react.profiler"), ur = Symbol.for("react.provider"), ir = Symbol.for("react.context"), sr = Symbol.for("react.forward_ref"), ar = Symbol.for("react.suspense"), cr = Symbol.for("react.suspense_list"), pr = Symbol.for("react.memo"), $t = Symbol.for("react.lazy"), kl = Symbol.for("react.scope"), wl = Symbol.for("react.debug_trace_mode"), Cl = Symbol.for("react.legacy_hidden"), El = Symbol.for("react.default_value"), pn = Symbol.iterator;
function st(e) {
  if (e == null)
    return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string")
    return e;
  switch (e) {
    case rr:
      return "Fragment";
    case nr:
      return "Portal";
    case lr:
      return "Profiler";
    case or:
      return "StrictMode";
    case ar:
      return "Suspense";
    case cr:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case ir:
        return (e.displayName || "Context") + ".Consumer";
      case ur:
        return (e._context.displayName || "Context") + ".Provider";
      case sr:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case pr:
        return t = e.displayName || null, t !== null ? t : st(e.type) || "Memo";
      case $t:
        t = e._payload, e = e._init;
        try {
          return st(e(t));
        } catch {
        }
    }
  return null;
}
var fr = {};
function fn(e, t) {
  if (e = e.contextTypes, !e)
    return fr;
  var n = {}, r;
  for (r in e)
    n[r] = t[r];
  return n;
}
var Q = null;
function Ue(e, t) {
  if (e !== t) {
    e.context._currentValue = e.parentValue, e = e.parent;
    var n = t.parent;
    if (e === null) {
      if (n !== null)
        throw Error(m(401));
    } else {
      if (n === null)
        throw Error(m(401));
      Ue(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function dr(e) {
  e.context._currentValue = e.parentValue, e = e.parent, e !== null && dr(e);
}
function hr(e) {
  var t = e.parent;
  t !== null && hr(t), e.context._currentValue = e.value;
}
function mr(e, t) {
  if (e.context._currentValue = e.parentValue, e = e.parent, e === null)
    throw Error(m(402));
  e.depth === t.depth ? Ue(e, t) : mr(e, t);
}
function yr(e, t) {
  var n = t.parent;
  if (n === null)
    throw Error(m(402));
  e.depth === n.depth ? Ue(e, n) : yr(e, n), t.context._currentValue = t.value;
}
function Ne(e) {
  var t = Q;
  t !== e && (t === null ? hr(e) : e === null ? dr(t) : t.depth === e.depth ? Ue(t, e) : t.depth > e.depth ? mr(t, e) : yr(t, e), Q = e);
}
var dn = { isMounted: function() {
  return !1;
}, enqueueSetState: function(e, t) {
  e = e._reactInternals, e.queue !== null && e.queue.push(t);
}, enqueueReplaceState: function(e, t) {
  e = e._reactInternals, e.replace = !0, e.queue = [t];
}, enqueueForceUpdate: function() {
} };
function hn(e, t, n, r) {
  var l = e.state !== void 0 ? e.state : null;
  e.updater = dn, e.props = n, e.state = l;
  var o = { queue: [], replace: !1 };
  e._reactInternals = o;
  var u = t.contextType;
  if (e.context = typeof u == "object" && u !== null ? u._currentValue : r, u = t.getDerivedStateFromProps, typeof u == "function" && (u = u(n, l), l = u == null ? l : ce({}, l, u), e.state = l), typeof t.getDerivedStateFromProps != "function" && typeof e.getSnapshotBeforeUpdate != "function" && (typeof e.UNSAFE_componentWillMount == "function" || typeof e.componentWillMount == "function"))
    if (t = e.state, typeof e.componentWillMount == "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount == "function" && e.UNSAFE_componentWillMount(), t !== e.state && dn.enqueueReplaceState(e, e.state, null), o.queue !== null && 0 < o.queue.length)
      if (t = o.queue, u = o.replace, o.queue = null, o.replace = !1, u && t.length === 1)
        e.state = t[0];
      else {
        for (o = u ? t[0] : e.state, l = !0, u = u ? 1 : 0; u < t.length; u++) {
          var i = t[u];
          i = typeof i == "function" ? i.call(e, o, n, r) : i, i != null && (l ? (l = !1, o = ce({}, o, i)) : ce(o, i));
        }
        e.state = o;
      }
    else
      o.queue = null;
}
var $l = { id: 1, overflow: "" };
function at(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var l = 32 - Re(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var u = l - l % 5;
    return o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, { id: 1 << 32 - Re(t) + l | n << l | r, overflow: o + e };
  }
  return { id: 1 << o | n << l | r, overflow: e };
}
var Re = Math.clz32 ? Math.clz32 : Rl, Tl = Math.log, Fl = Math.LN2;
function Rl(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Tl(e) / Fl | 0) | 0;
}
function _l(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Pl = typeof Object.is == "function" ? Object.is : _l, H = null, Tt = null, _e = null, v = null, ie = !1, ze = !1, de = 0, q = null, We = 0;
function J() {
  if (H === null)
    throw Error(m(321));
  return H;
}
function mn() {
  if (0 < We)
    throw Error(m(312));
  return { memoizedState: null, queue: null, next: null };
}
function Ft() {
  return v === null ? _e === null ? (ie = !1, _e = v = mn()) : (ie = !0, v = _e) : v.next === null ? (ie = !1, v = v.next = mn()) : (ie = !0, v = v.next), v;
}
function Rt() {
  Tt = H = null, ze = !1, _e = null, We = 0, v = q = null;
}
function gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function yn(e, t, n) {
  if (H = J(), v = Ft(), ie) {
    var r = v.queue;
    if (t = r.dispatch, q !== null && (n = q.get(r), n !== void 0)) {
      q.delete(r), r = v.memoizedState;
      do
        r = e(r, n.action), n = n.next;
      while (n !== null);
      return v.memoizedState = r, [r, t];
    }
    return [v.memoizedState, t];
  }
  return e = e === gr ? typeof t == "function" ? t() : t : n !== void 0 ? n(t) : t, v.memoizedState = e, e = v.queue = { last: null, dispatch: null }, e = e.dispatch = Il.bind(null, H, e), [v.memoizedState, e];
}
function gn(e, t) {
  if (H = J(), v = Ft(), t = t === void 0 ? null : t, v !== null) {
    var n = v.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e:
        if (r === null)
          r = !1;
        else {
          for (var l = 0; l < r.length && l < t.length; l++)
            if (!Pl(t[l], r[l])) {
              r = !1;
              break e;
            }
          r = !0;
        }
      if (r)
        return n[0];
    }
  }
  return e = e(), v.memoizedState = [e, t], e;
}
function Il(e, t, n) {
  if (25 <= We)
    throw Error(m(301));
  if (e === H)
    if (ze = !0, e = { action: n, next: null }, q === null && (q = /* @__PURE__ */ new Map()), n = q.get(t), n === void 0)
      q.set(t, e);
    else {
      for (t = n; t.next !== null; )
        t = t.next;
      t.next = e;
    }
}
function Ml() {
  throw Error(m(394));
}
function Se() {
}
var vn = { readContext: function(e) {
  return e._currentValue;
}, useContext: function(e) {
  return J(), e._currentValue;
}, useMemo: gn, useReducer: yn, useRef: function(e) {
  H = J(), v = Ft();
  var t = v.memoizedState;
  return t === null ? (e = { current: e }, v.memoizedState = e) : t;
}, useState: function(e) {
  return yn(gr, e);
}, useInsertionEffect: Se, useLayoutEffect: function() {
}, useCallback: function(e, t) {
  return gn(function() {
    return e;
  }, t);
}, useImperativeHandle: Se, useEffect: Se, useDebugValue: Se, useDeferredValue: function(e) {
  return J(), e;
}, useTransition: function() {
  return J(), [!1, Ml];
}, useId: function() {
  var e = Tt.treeContext, t = e.overflow;
  e = e.id, e = (e & ~(1 << 32 - Re(e) - 1)).toString(32) + t;
  var n = Pe;
  if (n === null)
    throw Error(m(404));
  return t = de++, e = ":" + n.idPrefix + "R" + e, 0 < t && (e += "H" + t.toString(32)), e + ":";
}, useMutableSource: function(e, t) {
  return J(), t(e._source);
}, useSyncExternalStore: function(e, t, n) {
  if (n === void 0)
    throw Error(m(407));
  return n();
} }, Pe = null, tt = Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
function Bl(e) {
  return console.error(e), null;
}
function se() {
}
function Dl(e, t, n, r, l, o, u, i, s) {
  var a = [], c = /* @__PURE__ */ new Set();
  return t = { destination: null, responseState: t, progressiveChunkSize: r === void 0 ? 12800 : r, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: c, pingedTasks: a, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: l === void 0 ? Bl : l, onAllReady: o === void 0 ? se : o, onShellReady: u === void 0 ? se : u, onShellError: i === void 0 ? se : i, onFatalError: s === void 0 ? se : s }, n = Ve(t, 0, null, n, !1, !1), n.parentFlushed = !0, e = _t(t, e, null, n, c, fr, null, $l), a.push(e), t;
}
function _t(e, t, n, r, l, o, u, i) {
  e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++;
  var s = { node: t, ping: function() {
    var a = e.pingedTasks;
    a.push(s), a.length === 1 && xr(e);
  }, blockedBoundary: n, blockedSegment: r, abortSet: l, legacyContext: o, context: u, treeContext: i };
  return l.add(s), s;
}
function Ve(e, t, n, r, l, o) {
  return { status: 0, id: -1, index: t, parentFlushed: !1, chunks: [], children: [], formatContext: r, boundary: n, lastPushedText: l, textEmbedded: o };
}
function he(e, t) {
  if (e = e.onError(t), e != null && typeof e != "string")
    throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof e + '" instead');
  return e;
}
function Le(e, t) {
  var n = e.onShellError;
  n(t), n = e.onFatalError, n(t), e.destination !== null ? (e.status = 2, Qn(e.destination, t)) : (e.status = 1, e.fatalError = t);
}
function Sn(e, t, n, r, l) {
  for (H = {}, Tt = t, de = 0, e = n(r, l); ze; )
    ze = !1, de = 0, We += 1, v = null, e = n(r, l);
  return Rt(), e;
}
function xn(e, t, n, r) {
  var l = n.render(), o = r.childContextTypes;
  if (o != null) {
    var u = t.legacyContext;
    if (typeof n.getChildContext != "function")
      r = u;
    else {
      n = n.getChildContext();
      for (var i in n)
        if (!(i in o))
          throw Error(m(108, st(r) || "Unknown", i));
      r = ce({}, u, n);
    }
    t.legacyContext = r, N(e, t, l), t.legacyContext = u;
  } else
    N(e, t, l);
}
function kn(e, t) {
  if (e && e.defaultProps) {
    t = ce({}, t), e = e.defaultProps;
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function ct(e, t, n, r, l) {
  if (typeof n == "function")
    if (n.prototype && n.prototype.isReactComponent) {
      l = fn(n, t.legacyContext);
      var o = n.contextType;
      o = new n(r, typeof o == "object" && o !== null ? o._currentValue : l), hn(o, n, r, l), xn(e, t, o, n);
    } else {
      o = fn(n, t.legacyContext), l = Sn(e, t, n, r, o);
      var u = de !== 0;
      if (typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0)
        hn(l, n, r, o), xn(e, t, l, n);
      else if (u) {
        r = t.treeContext, t.treeContext = at(r, 1, 0);
        try {
          N(e, t, l);
        } finally {
          t.treeContext = r;
        }
      } else
        N(e, t, l);
    }
  else if (typeof n == "string") {
    switch (l = t.blockedSegment, o = Eo(l.chunks, n, r, e.responseState, l.formatContext), l.lastPushedText = !1, u = l.formatContext, l.formatContext = vo(u, n, r), pt(e, t, o), l.formatContext = u, n) {
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
        l.chunks.push($o, y(n), To);
    }
    l.lastPushedText = !1;
  } else {
    switch (n) {
      case Cl:
      case wl:
      case or:
      case lr:
      case rr:
        N(e, t, r.children);
        return;
      case cr:
        N(e, t, r.children);
        return;
      case kl:
        throw Error(m(343));
      case ar:
        e: {
          n = t.blockedBoundary, l = t.blockedSegment, o = r.fallback, r = r.children, u = /* @__PURE__ */ new Set();
          var i = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: u, errorDigest: null }, s = Ve(e, l.chunks.length, i, l.formatContext, !1, !1);
          l.children.push(s), l.lastPushedText = !1;
          var a = Ve(e, 0, null, l.formatContext, !1, !1);
          a.parentFlushed = !0, t.blockedBoundary = i, t.blockedSegment = a;
          try {
            if (pt(
              e,
              t,
              r
            ), a.lastPushedText && a.textEmbedded && a.chunks.push(Et), a.status = 1, Oe(i, a), i.pendingTasks === 0)
              break e;
          } catch (c) {
            a.status = 4, i.forceClientRender = !0, i.errorDigest = he(e, c);
          } finally {
            t.blockedBoundary = n, t.blockedSegment = l;
          }
          t = _t(e, o, n, s, u, t.legacyContext, t.context, t.treeContext), e.pingedTasks.push(t);
        }
        return;
    }
    if (typeof n == "object" && n !== null)
      switch (n.$$typeof) {
        case sr:
          if (r = Sn(e, t, n.render, r, l), de !== 0) {
            n = t.treeContext, t.treeContext = at(n, 1, 0);
            try {
              N(e, t, r);
            } finally {
              t.treeContext = n;
            }
          } else
            N(e, t, r);
          return;
        case pr:
          n = n.type, r = kn(n, r), ct(e, t, n, r, l);
          return;
        case ur:
          if (l = r.children, n = n._context, r = r.value, o = n._currentValue, n._currentValue = r, u = Q, Q = r = { parent: u, depth: u === null ? 0 : u.depth + 1, context: n, parentValue: o, value: r }, t.context = r, N(e, t, l), e = Q, e === null)
            throw Error(m(403));
          r = e.parentValue, e.context._currentValue = r === El ? e.context._defaultValue : r, e = Q = e.parent, t.context = e;
          return;
        case ir:
          r = r.children, r = r(n._currentValue), N(e, t, r);
          return;
        case $t:
          l = n._init, n = l(n._payload), r = kn(n, r), ct(e, t, n, r, void 0);
          return;
      }
    throw Error(m(
      130,
      n == null ? n : typeof n,
      ""
    ));
  }
}
function N(e, t, n) {
  if (t.node = n, typeof n == "object" && n !== null) {
    switch (n.$$typeof) {
      case xl:
        ct(e, t, n.type, n.props, n.ref);
        return;
      case nr:
        throw Error(m(257));
      case $t:
        var r = n._init;
        n = r(n._payload), N(e, t, n);
        return;
    }
    if (it(n)) {
      wn(e, t, n);
      return;
    }
    if (n === null || typeof n != "object" ? r = null : (r = pn && n[pn] || n["@@iterator"], r = typeof r == "function" ? r : null), r && (r = r.call(n))) {
      if (n = r.next(), !n.done) {
        var l = [];
        do
          l.push(n.value), n = r.next();
        while (!n.done);
        wn(e, t, l);
      }
      return;
    }
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  typeof n == "string" ? (r = t.blockedSegment, r.lastPushedText = rn(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)) : typeof n == "number" && (r = t.blockedSegment, r.lastPushedText = rn(t.blockedSegment.chunks, "" + n, e.responseState, r.lastPushedText));
}
function wn(e, t, n) {
  for (var r = n.length, l = 0; l < r; l++) {
    var o = t.treeContext;
    t.treeContext = at(o, r, l);
    try {
      pt(e, t, n[l]);
    } finally {
      t.treeContext = o;
    }
  }
}
function pt(e, t, n) {
  var r = t.blockedSegment.formatContext, l = t.legacyContext, o = t.context;
  try {
    return N(e, t, n);
  } catch (s) {
    if (Rt(), typeof s == "object" && s !== null && typeof s.then == "function") {
      n = s;
      var u = t.blockedSegment, i = Ve(e, u.chunks.length, null, u.formatContext, u.lastPushedText, !0);
      u.children.push(i), u.lastPushedText = !1, e = _t(e, t.node, t.blockedBoundary, i, t.abortSet, t.legacyContext, t.context, t.treeContext).ping, n.then(e, e), t.blockedSegment.formatContext = r, t.legacyContext = l, t.context = o, Ne(o);
    } else
      throw t.blockedSegment.formatContext = r, t.legacyContext = l, t.context = o, Ne(o), s;
  }
}
function bl(e) {
  var t = e.blockedBoundary;
  e = e.blockedSegment, e.status = 3, Sr(this, t, e);
}
function vr(e, t, n) {
  var r = e.blockedBoundary;
  e.blockedSegment.status = 3, r === null ? (t.allPendingTasks--, t.status !== 2 && (t.status = 2, t.destination !== null && t.destination.close())) : (r.pendingTasks--, r.forceClientRender || (r.forceClientRender = !0, e = n === void 0 ? Error(m(432)) : n, r.errorDigest = t.onError(e), r.parentFlushed && t.clientRenderedBoundaries.push(r)), r.fallbackAbortableTasks.forEach(function(l) {
    return vr(l, t, n);
  }), r.fallbackAbortableTasks.clear(), t.allPendingTasks--, t.allPendingTasks === 0 && (r = t.onAllReady, r()));
}
function Oe(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    n.id = t.id, n.parentFlushed = !0, n.status === 1 && Oe(e, n);
  } else
    e.completedSegments.push(t);
}
function Sr(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null)
        throw Error(m(389));
      e.completedRootSegment = n;
    }
    e.pendingRootTasks--, e.pendingRootTasks === 0 && (e.onShellError = se, t = e.onShellReady, t());
  } else
    t.pendingTasks--, t.forceClientRender || (t.pendingTasks === 0 ? (n.parentFlushed && n.status === 1 && Oe(t, n), t.parentFlushed && e.completedBoundaries.push(t), t.fallbackAbortableTasks.forEach(bl, e), t.fallbackAbortableTasks.clear()) : n.parentFlushed && n.status === 1 && (Oe(t, n), t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t)));
  e.allPendingTasks--, e.allPendingTasks === 0 && (e = e.onAllReady, e());
}
function xr(e) {
  if (e.status !== 2) {
    var t = Q, n = tt.current;
    tt.current = vn;
    var r = Pe;
    Pe = e.responseState;
    try {
      var l = e.pingedTasks, o;
      for (o = 0; o < l.length; o++) {
        var u = l[o], i = e, s = u.blockedSegment;
        if (s.status === 0) {
          Ne(u.context);
          try {
            N(i, u, u.node), s.lastPushedText && s.textEmbedded && s.chunks.push(Et), u.abortSet.delete(u), s.status = 1, Sr(i, u.blockedBoundary, s);
          } catch (k) {
            if (Rt(), typeof k == "object" && k !== null && typeof k.then == "function") {
              var a = u.ping;
              k.then(a, a);
            } else {
              u.abortSet.delete(u), s.status = 4;
              var c = u.blockedBoundary, d = k, x = he(i, d);
              if (c === null ? Le(i, d) : (c.pendingTasks--, c.forceClientRender || (c.forceClientRender = !0, c.errorDigest = x, c.parentFlushed && i.clientRenderedBoundaries.push(c))), i.allPendingTasks--, i.allPendingTasks === 0) {
                var w = i.onAllReady;
                w();
              }
            }
          } finally {
          }
        }
      }
      l.splice(0, o), e.destination !== null && Pt(e, e.destination);
    } catch (k) {
      he(e, k), Le(e, k);
    } finally {
      Pe = r, tt.current = n, n === vn && Ne(t);
    }
  }
}
function xe(e, t, n) {
  switch (n.parentFlushed = !0, n.status) {
    case 0:
      var r = n.id = e.nextSegmentId++;
      return n.lastPushedText = !1, n.textEmbedded = !1, e = e.responseState, f(t, Fo), f(t, e.placeholderPrefix), e = y(r.toString(16)), f(t, e), S(t, Ro);
    case 1:
      n.status = 2;
      var l = !0;
      r = n.chunks;
      var o = 0;
      n = n.children;
      for (var u = 0; u < n.length; u++) {
        for (l = n[u]; o < l.index; o++)
          f(t, r[o]);
        l = Ze(e, t, l);
      }
      for (; o < r.length - 1; o++)
        f(t, r[o]);
      return o < r.length && (l = S(t, r[o])), l;
    default:
      throw Error(m(390));
  }
}
function Ze(e, t, n) {
  var r = n.boundary;
  if (r === null)
    return xe(e, t, n);
  if (r.parentFlushed = !0, r.forceClientRender)
    r = r.errorDigest, S(t, Mo), f(t, Do), r && (f(t, No), f(t, y(C(r))), f(t, bo)), S(t, zo), xe(e, t, n);
  else if (0 < r.pendingTasks) {
    r.rootSegmentID = e.nextSegmentId++, 0 < r.completedSegments.length && e.partialBoundaries.push(r);
    var l = e.responseState, o = l.nextSuspenseID++;
    l = p(l.boundaryPrefix + o.toString(16)), r = r.id = l, cn(t, e.responseState, r), xe(e, t, n);
  } else if (r.byteSize > e.progressiveChunkSize)
    r.rootSegmentID = e.nextSegmentId++, e.completedBoundaries.push(r), cn(t, e.responseState, r.id), xe(e, t, n);
  else {
    if (S(t, _o), n = r.completedSegments, n.length !== 1)
      throw Error(m(391));
    Ze(e, t, n[0]);
  }
  return S(t, Bo);
}
function Cn(e, t, n) {
  return ll(t, e.responseState, n.formatContext, n.id), Ze(e, t, n), ul(t, n.formatContext);
}
function En(e, t, n) {
  for (var r = n.completedSegments, l = 0; l < r.length; l++)
    kr(e, t, n, r[l]);
  if (r.length = 0, e = e.responseState, r = n.id, n = n.rootSegmentID, f(t, e.startInlineScript), e.sentCompleteBoundaryFunction ? f(t, fl) : (e.sentCompleteBoundaryFunction = !0, f(t, pl)), r === null)
    throw Error(m(395));
  return n = y(n.toString(16)), f(t, r), f(t, dl), f(t, e.segmentPrefix), f(t, n), S(t, hl);
}
function kr(e, t, n, r) {
  if (r.status === 2)
    return !0;
  var l = r.id;
  if (l === -1) {
    if ((r.id = n.rootSegmentID) === -1)
      throw Error(m(392));
    return Cn(e, t, r);
  }
  return Cn(e, t, r), e = e.responseState, f(t, e.startInlineScript), e.sentCompleteSegmentFunction ? f(t, sl) : (e.sentCompleteSegmentFunction = !0, f(t, il)), f(t, e.segmentPrefix), l = y(l.toString(16)), f(t, l), f(t, al), f(t, e.placeholderPrefix), f(t, l), S(t, cl);
}
function Pt(e, t) {
  D = new Uint8Array(512), b = 0;
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      Ze(e, t, n), e.completedRootSegment = null;
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++)
        f(t, r[n]);
      n < r.length && S(t, r[n]);
    }
    var l = e.clientRenderedBoundaries, o;
    for (o = 0; o < l.length; o++) {
      var u = l[o];
      r = t;
      var i = e.responseState, s = u.id, a = u.errorDigest, c = u.errorMessage, d = u.errorComponentStack;
      if (f(r, i.startInlineScript), i.sentClientRenderFunction ? f(r, yl) : (i.sentClientRenderFunction = !0, f(
        r,
        ml
      )), s === null)
        throw Error(m(395));
      f(r, s), f(r, gl), (a || c || d) && (f(r, Qe), f(r, y(et(a || "")))), (c || d) && (f(r, Qe), f(r, y(et(c || "")))), d && (f(r, Qe), f(r, y(et(d)))), S(r, vl);
    }
    l.splice(0, o);
    var x = e.completedBoundaries;
    for (o = 0; o < x.length; o++)
      En(e, t, x[o]);
    x.splice(0, o), Qt(t), D = new Uint8Array(512), b = 0;
    var w = e.partialBoundaries;
    for (o = 0; o < w.length; o++) {
      var k = w[o];
      e: {
        l = e, u = t;
        var O = k.completedSegments;
        for (i = 0; i < O.length; i++)
          if (!kr(
            l,
            u,
            k,
            O[i]
          )) {
            i++, O.splice(0, i);
            var Y = !1;
            break e;
          }
        O.splice(0, i), Y = !0;
      }
      if (!Y) {
        e.destination = null, o++, w.splice(0, o);
        return;
      }
    }
    w.splice(0, o);
    var te = e.completedBoundaries;
    for (o = 0; o < te.length; o++)
      En(e, t, te[o]);
    te.splice(0, o);
  } finally {
    Qt(t), e.allPendingTasks === 0 && e.pingedTasks.length === 0 && e.clientRenderedBoundaries.length === 0 && e.completedBoundaries.length === 0 && t.close();
  }
}
function $n(e, t) {
  try {
    var n = e.abortableTasks;
    n.forEach(function(r) {
      return vr(r, e, t);
    }), n.clear(), e.destination !== null && Pt(e, e.destination);
  } catch (r) {
    he(e, r), Le(e, r);
  }
}
kt.renderToReadableStream = function(e, t) {
  return new Promise(function(n, r) {
    var l, o, u = new Promise(function(c, d) {
      o = c, l = d;
    }), i = Dl(e, yo(t ? t.identifierPrefix : void 0, t ? t.nonce : void 0, t ? t.bootstrapScriptContent : void 0, t ? t.bootstrapScripts : void 0, t ? t.bootstrapModules : void 0), go(t ? t.namespaceURI : void 0), t ? t.progressiveChunkSize : void 0, t ? t.onError : void 0, o, function() {
      var c = new ReadableStream({ type: "bytes", pull: function(d) {
        if (i.status === 1)
          i.status = 2, Qn(d, i.fatalError);
        else if (i.status !== 2 && i.destination === null) {
          i.destination = d;
          try {
            Pt(i, d);
          } catch (x) {
            he(i, x), Le(i, x);
          }
        }
      }, cancel: function() {
        $n(i);
      } }, { highWaterMark: 0 });
      c.allReady = u, n(c);
    }, function(c) {
      u.catch(function() {
      }), r(c);
    }, l);
    if (t && t.signal) {
      var s = t.signal, a = function() {
        $n(i, s.reason), s.removeEventListener("abort", a);
      };
      s.addEventListener("abort", a);
    }
    xr(i);
  });
};
kt.version = "18.2.0";
var oe, wr;
oe = re, wr = kt;
ee.version = oe.version;
ee.renderToString = oe.renderToString;
ee.renderToStaticMarkup = oe.renderToStaticMarkup;
ee.renderToNodeStream = oe.renderToNodeStream;
ee.renderToStaticNodeStream = oe.renderToStaticNodeStream;
ee.renderToReadableStream = wr.renderToReadableStream;
function Nl({
  basename: e,
  children: t,
  location: n = "/"
}) {
  typeof n == "string" && (n = Tn(n));
  let r = Cr.Pop, l = {
    pathname: n.pathname || "/",
    search: n.search || "",
    hash: n.hash || "",
    state: n.state || null,
    key: n.key || "default"
  }, o = zl();
  return /* @__PURE__ */ ft.createElement(Er, {
    basename: e,
    children: t,
    location: l,
    navigationType: r,
    navigator: o,
    static: !0
  });
}
function zl() {
  return {
    createHref: Vl,
    encodeLocation: Ll,
    push(e) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)})\` somewhere in your app.`);
    },
    replace(e) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(e)}, { replace: true })\` somewhere in your app.`);
    },
    go(e) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${e})\` somewhere in your app.`);
    },
    back() {
      throw new Error("You cannot use navigator.back() on the server because it is a stateless environment.");
    },
    forward() {
      throw new Error("You cannot use navigator.forward() on the server because it is a stateless environment.");
    }
  };
}
function Vl(e) {
  return typeof e == "string" ? e : $r(e);
}
function Ll(e) {
  let t = typeof e == "string" ? Tn(e) : e;
  return {
    pathname: t.pathname || "",
    search: t.search || "",
    hash: t.hash || ""
  };
}
function jl(e, t) {
  return ee.renderToString(
    /* @__PURE__ */ Mt(Nl, { location: e, children: /* @__PURE__ */ Mt(Tr, { context: t }) })
  );
}
export {
  jl as render
};
//# sourceMappingURL=entry-server.js.map
