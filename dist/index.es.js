import he, { useRef as ln, useDebugValue as Ht, createElement as fn, useContext as pn } from "react";
var bt = { exports: {} }, De = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qt;
function dn() {
  if (qt)
    return De;
  qt = 1;
  var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, l, w) {
    var d, h = {}, v = null, S = null;
    w !== void 0 && (v = "" + w), l.key !== void 0 && (v = "" + l.key), l.ref !== void 0 && (S = l.ref);
    for (d in l)
      o.call(l, d) && !s.hasOwnProperty(d) && (h[d] = l[d]);
    if (f && f.defaultProps)
      for (d in l = f.defaultProps, l)
        h[d] === void 0 && (h[d] = l[d]);
    return { $$typeof: t, type: f, key: v, ref: S, props: h, _owner: a.current };
  }
  return De.Fragment = r, De.jsx = c, De.jsxs = c, De;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kt;
function hn() {
  return Kt || (Kt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = he, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), O = Symbol.iterator, N = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var i = O && n[O] || n[N];
      return typeof i == "function" ? i : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(n) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), p = 1; p < i; p++)
          u[p - 1] = arguments[p];
        C("error", n, u);
      }
    }
    function C(n, i, u) {
      {
        var p = x.ReactDebugCurrentFrame, _ = p.getStackAddendum();
        _ !== "" && (i += "%s", u = u.concat([_]));
        var P = u.map(function(R) {
          return String(R);
        });
        P.unshift("Warning: " + i), Function.prototype.apply.call(console[n], console, P);
      }
    }
    var T = !1, I = !1, E = !1, m = !1, Z = !1, Q;
    Q = Symbol.for("react.module.reference");
    function st(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === s || Z || n === a || n === w || n === d || m || n === S || T || I || E || typeof n == "object" && n !== null && (n.$$typeof === v || n.$$typeof === h || n.$$typeof === c || n.$$typeof === f || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === Q || n.getModuleId !== void 0));
    }
    function ct(n, i, u) {
      var p = n.displayName;
      if (p)
        return p;
      var _ = i.displayName || i.name || "";
      return _ !== "" ? u + "(" + _ + ")" : u;
    }
    function Le(n) {
      return n.displayName || "Context";
    }
    function Y(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case s:
          return "Profiler";
        case a:
          return "StrictMode";
        case w:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case f:
            var i = n;
            return Le(i) + ".Consumer";
          case c:
            var u = n;
            return Le(u._context) + ".Provider";
          case l:
            return ct(n, n.render, "ForwardRef");
          case h:
            var p = n.displayName || null;
            return p !== null ? p : Y(n.type) || "Memo";
          case v: {
            var _ = n, P = _._payload, R = _._init;
            try {
              return Y(R(P));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, ce = 0, ze, ge, Ae, B, ne, oe, L;
    function ye() {
    }
    ye.__reactDisabledLog = !0;
    function Ie() {
      {
        if (ce === 0) {
          ze = console.log, ge = console.info, Ae = console.warn, B = console.error, ne = console.group, oe = console.groupCollapsed, L = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ye,
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
        ce++;
      }
    }
    function ve() {
      {
        if (ce--, ce === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, n, {
              value: ze
            }),
            info: ee({}, n, {
              value: ge
            }),
            warn: ee({}, n, {
              value: Ae
            }),
            error: ee({}, n, {
              value: B
            }),
            group: ee({}, n, {
              value: ne
            }),
            groupCollapsed: ee({}, n, {
              value: oe
            }),
            groupEnd: ee({}, n, {
              value: L
            })
          });
        }
        ce < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = x.ReactCurrentDispatcher, ae;
    function H(n, i, u) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (_) {
            var p = _.stack.trim().match(/\n( *(at )?)/);
            ae = p && p[1] || "";
          }
        return `
` + ae + n;
      }
    }
    var q = !1, ie;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      ie = new be();
    }
    function K(n, i) {
      if (!n || q)
        return "";
      {
        var u = ie.get(n);
        if (u !== void 0)
          return u;
      }
      var p;
      q = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var P;
      P = te.current, te.current = null, Ie();
      try {
        if (i) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (V) {
              p = V;
            }
            Reflect.construct(n, [], R);
          } else {
            try {
              R.call();
            } catch (V) {
              p = V;
            }
            n.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            p = V;
          }
          n();
        }
      } catch (V) {
        if (V && p && typeof V.stack == "string") {
          for (var b = V.stack.split(`
`), z = p.stack.split(`
`), j = b.length - 1, D = z.length - 1; j >= 1 && D >= 0 && b[j] !== z[D]; )
            D--;
          for (; j >= 1 && D >= 0; j--, D--)
            if (b[j] !== z[D]) {
              if (j !== 1 || D !== 1)
                do
                  if (j--, D--, D < 0 || b[j] !== z[D]) {
                    var U = `
` + b[j].replace(" at new ", " at ");
                    return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), typeof n == "function" && ie.set(n, U), U;
                  }
                while (j >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        q = !1, te.current = P, ve(), Error.prepareStackTrace = _;
      }
      var Se = n ? n.displayName || n.name : "", ue = Se ? H(Se) : "";
      return typeof n == "function" && ie.set(n, ue), ue;
    }
    function Lr(n, i, u) {
      return K(n, !1);
    }
    function zr(n) {
      var i = n.prototype;
      return !!(i && i.isReactComponent);
    }
    function Ve(n, i, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return K(n, zr(n));
      if (typeof n == "string")
        return H(n);
      switch (n) {
        case w:
          return H("Suspense");
        case d:
          return H("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return Lr(n.render);
          case h:
            return Ve(n.type, i, u);
          case v: {
            var p = n, _ = p._payload, P = p._init;
            try {
              return Ve(P(_), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, jt = {}, Dt = x.ReactDebugCurrentFrame;
    function We(n) {
      if (n) {
        var i = n._owner, u = Ve(n.type, n._source, i ? i.type : null);
        Dt.setExtraStackFrame(u);
      } else
        Dt.setExtraStackFrame(null);
    }
    function Vr(n, i, u, p, _) {
      {
        var P = Function.call.bind(Ne);
        for (var R in n)
          if (P(n, R)) {
            var b = void 0;
            try {
              if (typeof n[R] != "function") {
                var z = Error((p || "React class") + ": " + u + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              b = n[R](i, R, p, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              b = j;
            }
            b && !(b instanceof Error) && (We(_), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", u, R, typeof b), We(null)), b instanceof Error && !(b.message in jt) && (jt[b.message] = !0, We(_), y("Failed %s type: %s", u, b.message), We(null));
          }
      }
    }
    var Wr = Array.isArray;
    function ut(n) {
      return Wr(n);
    }
    function Yr(n) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Br(n) {
      try {
        return $t(n), !1;
      } catch {
        return !0;
      }
    }
    function $t(n) {
      return "" + n;
    }
    function Ft(n) {
      if (Br(n))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Yr(n)), $t(n);
    }
    var je = x.ReactCurrentOwner, Ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Mt, Lt, lt;
    lt = {};
    function Gr(n) {
      if (Ne.call(n, "ref")) {
        var i = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Hr(n) {
      if (Ne.call(n, "key")) {
        var i = Object.getOwnPropertyDescriptor(n, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function qr(n, i) {
      if (typeof n.ref == "string" && je.current && i && je.current.stateNode !== i) {
        var u = Y(je.current.type);
        lt[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Y(je.current.type), n.ref), lt[u] = !0);
      }
    }
    function Kr(n, i) {
      {
        var u = function() {
          Mt || (Mt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Xr(n, i) {
      {
        var u = function() {
          Lt || (Lt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Jr = function(n, i, u, p, _, P, R) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: i,
        ref: u,
        props: R,
        // Record the component responsible for creating this element.
        _owner: P
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Zr(n, i, u, p, _) {
      {
        var P, R = {}, b = null, z = null;
        u !== void 0 && (Ft(u), b = "" + u), Hr(i) && (Ft(i.key), b = "" + i.key), Gr(i) && (z = i.ref, qr(i, _));
        for (P in i)
          Ne.call(i, P) && !Ur.hasOwnProperty(P) && (R[P] = i[P]);
        if (n && n.defaultProps) {
          var j = n.defaultProps;
          for (P in j)
            R[P] === void 0 && (R[P] = j[P]);
        }
        if (b || z) {
          var D = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          b && Kr(R, D), z && Xr(R, D);
        }
        return Jr(n, b, z, _, p, je.current, R);
      }
    }
    var ft = x.ReactCurrentOwner, zt = x.ReactDebugCurrentFrame;
    function we(n) {
      if (n) {
        var i = n._owner, u = Ve(n.type, n._source, i ? i.type : null);
        zt.setExtraStackFrame(u);
      } else
        zt.setExtraStackFrame(null);
    }
    var pt;
    pt = !1;
    function dt(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Vt() {
      {
        if (ft.current) {
          var n = Y(ft.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Qr(n) {
      {
        if (n !== void 0) {
          var i = n.fileName.replace(/^.*[\\\/]/, ""), u = n.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var Wt = {};
    function en(n) {
      {
        var i = Vt();
        if (!i) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Yt(n, i) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = en(i);
        if (Wt[u])
          return;
        Wt[u] = !0;
        var p = "";
        n && n._owner && n._owner !== ft.current && (p = " It was passed a child from " + Y(n._owner.type) + "."), we(n), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, p), we(null);
      }
    }
    function Bt(n, i) {
      {
        if (typeof n != "object")
          return;
        if (ut(n))
          for (var u = 0; u < n.length; u++) {
            var p = n[u];
            dt(p) && Yt(p, i);
          }
        else if (dt(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var _ = M(n);
          if (typeof _ == "function" && _ !== n.entries)
            for (var P = _.call(n), R; !(R = P.next()).done; )
              dt(R.value) && Yt(R.value, i);
        }
      }
    }
    function tn(n) {
      {
        var i = n.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === h))
          u = i.propTypes;
        else
          return;
        if (u) {
          var p = Y(i);
          Vr(u, n.props, "prop", p, n);
        } else if (i.PropTypes !== void 0 && !pt) {
          pt = !0;
          var _ = Y(i);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function rn(n) {
      {
        for (var i = Object.keys(n.props), u = 0; u < i.length; u++) {
          var p = i[u];
          if (p !== "children" && p !== "key") {
            we(n), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), we(null);
            break;
          }
        }
        n.ref !== null && (we(n), y("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    var Ut = {};
    function Gt(n, i, u, p, _, P) {
      {
        var R = st(n);
        if (!R) {
          var b = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Qr(_);
          z ? b += z : b += Vt();
          var j;
          n === null ? j = "null" : ut(n) ? j = "array" : n !== void 0 && n.$$typeof === t ? (j = "<" + (Y(n.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : j = typeof n, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, b);
        }
        var D = Zr(n, i, u, _, P);
        if (D == null)
          return D;
        if (R) {
          var U = i.children;
          if (U !== void 0)
            if (p)
              if (ut(U)) {
                for (var Se = 0; Se < U.length; Se++)
                  Bt(U[Se], n);
                Object.freeze && Object.freeze(U);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Bt(U, n);
        }
        if (Ne.call(i, "key")) {
          var ue = Y(n), V = Object.keys(i).filter(function(un) {
            return un !== "key";
          }), ht = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ut[ue + ht]) {
            var cn = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ht, ue, cn, ue), Ut[ue + ht] = !0;
          }
        }
        return n === o ? rn(D) : tn(D), D;
      }
    }
    function nn(n, i, u) {
      return Gt(n, i, u, !0);
    }
    function on(n, i, u) {
      return Gt(n, i, u, !1);
    }
    var an = on, sn = nn;
    $e.Fragment = o, $e.jsx = an, $e.jsxs = sn;
  }()), $e;
}
process.env.NODE_ENV === "production" ? bt.exports = dn() : bt.exports = hn();
var hr = bt.exports, W = function() {
  return W = Object.assign || function(t) {
    for (var r, o = 1, a = arguments.length; o < a; o++) {
      r = arguments[o];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, W.apply(this, arguments);
};
function Re(e, t, r) {
  if (r || arguments.length === 2)
    for (var o = 0, a = t.length, s; o < a; o++)
      (s || !(o in t)) && (s || (s = Array.prototype.slice.call(t, 0, o)), s[o] = t[o]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function mn(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var gn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yn = /* @__PURE__ */ mn(
  function(e) {
    return gn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), A = "-ms-", Me = "-moz-", k = "-webkit-", mr = "comm", tt = "rule", Pt = "decl", vn = "@import", gr = "@keyframes", bn = "@layer", yr = Math.abs, Ot = String.fromCharCode, wt = Object.assign;
function wn(e, t) {
  return F(e, 0) ^ 45 ? (((t << 2 ^ F(e, 0)) << 2 ^ F(e, 1)) << 2 ^ F(e, 2)) << 2 ^ F(e, 3) : 0;
}
function vr(e) {
  return e.trim();
}
function re(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function g(e, t, r) {
  return e.replace(t, r);
}
function He(e, t, r) {
  return e.indexOf(t, r);
}
function F(e, t) {
  return e.charCodeAt(t) | 0;
}
function _e(e, t, r) {
  return e.slice(t, r);
}
function J(e) {
  return e.length;
}
function br(e) {
  return e.length;
}
function Fe(e, t) {
  return t.push(e), e;
}
function Sn(e, t) {
  return e.map(t).join("");
}
function Xt(e, t) {
  return e.filter(function(r) {
    return !re(r, t);
  });
}
var rt = 1, ke = 1, wr = 0, G = 0, $ = 0, Oe = "";
function nt(e, t, r, o, a, s, c, f) {
  return { value: e, root: t, parent: r, type: o, props: a, children: s, line: rt, column: ke, length: c, return: "", siblings: f };
}
function se(e, t) {
  return wt(nt("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function Ee(e) {
  for (; e.root; )
    e = se(e.root, { children: [e] });
  Fe(e, e.siblings);
}
function En() {
  return $;
}
function Rn() {
  return $ = G > 0 ? F(Oe, --G) : 0, ke--, $ === 10 && (ke = 1, rt--), $;
}
function X() {
  return $ = G < wr ? F(Oe, G++) : 0, ke++, $ === 10 && (ke = 1, rt++), $;
}
function pe() {
  return F(Oe, G);
}
function qe() {
  return G;
}
function ot(e, t) {
  return _e(Oe, e, t);
}
function St(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function _n(e) {
  return rt = ke = 1, wr = J(Oe = e), G = 0, [];
}
function kn(e) {
  return Oe = "", e;
}
function mt(e) {
  return vr(ot(G - 1, Et(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function xn(e) {
  for (; ($ = pe()) && $ < 33; )
    X();
  return St(e) > 2 || St($) > 3 ? "" : " ";
}
function Cn(e, t) {
  for (; --t && X() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return ot(e, qe() + (t < 6 && pe() == 32 && X() == 32));
}
function Et(e) {
  for (; X(); )
    switch ($) {
      case e:
        return G;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Et($);
        break;
      case 40:
        e === 41 && Et(e);
        break;
      case 92:
        X();
        break;
    }
  return G;
}
function Pn(e, t) {
  for (; X() && e + $ !== 47 + 10; )
    if (e + $ === 42 + 42 && pe() === 47)
      break;
  return "/*" + ot(t, G - 1) + "*" + Ot(e === 47 ? e : X());
}
function On(e) {
  for (; !St(pe()); )
    X();
  return ot(e, G);
}
function Tn(e) {
  return kn(Ke("", null, null, null, [""], e = _n(e), 0, [0], e));
}
function Ke(e, t, r, o, a, s, c, f, l) {
  for (var w = 0, d = 0, h = c, v = 0, S = 0, O = 0, N = 1, M = 1, x = 1, y = 0, C = "", T = a, I = s, E = o, m = C; M; )
    switch (O = y, y = X()) {
      case 40:
        if (O != 108 && F(m, h - 1) == 58) {
          He(m += g(mt(y), "&", "&\f"), "&\f", yr(w ? f[w - 1] : 0)) != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        m += mt(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        m += xn(O);
        break;
      case 92:
        m += Cn(qe() - 1, 7);
        continue;
      case 47:
        switch (pe()) {
          case 42:
          case 47:
            Fe(An(Pn(X(), qe()), t, r, l), l);
            break;
          default:
            m += "/";
        }
        break;
      case 123 * N:
        f[w++] = J(m) * x;
      case 125 * N:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            M = 0;
          case 59 + d:
            x == -1 && (m = g(m, /\f/g, "")), S > 0 && J(m) - h && Fe(S > 32 ? Zt(m + ";", o, r, h - 1, l) : Zt(g(m, " ", "") + ";", o, r, h - 2, l), l);
            break;
          case 59:
            m += ";";
          default:
            if (Fe(E = Jt(m, t, r, w, d, a, f, C, T = [], I = [], h, s), s), y === 123)
              if (d === 0)
                Ke(m, t, E, E, T, s, h, f, I);
              else
                switch (v === 99 && F(m, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ke(e, E, E, o && Fe(Jt(e, E, E, 0, 0, a, f, C, a, T = [], h, I), I), a, I, h, f, o ? T : I);
                    break;
                  default:
                    Ke(m, E, E, E, [""], I, 0, f, I);
                }
        }
        w = d = S = 0, N = x = 1, C = m = "", h = c;
        break;
      case 58:
        h = 1 + J(m), S = O;
      default:
        if (N < 1) {
          if (y == 123)
            --N;
          else if (y == 125 && N++ == 0 && Rn() == 125)
            continue;
        }
        switch (m += Ot(y), y * N) {
          case 38:
            x = d > 0 ? 1 : (m += "\f", -1);
            break;
          case 44:
            f[w++] = (J(m) - 1) * x, x = 1;
            break;
          case 64:
            pe() === 45 && (m += mt(X())), v = pe(), d = h = J(C = m += On(qe())), y++;
            break;
          case 45:
            O === 45 && J(m) == 2 && (N = 0);
        }
    }
  return s;
}
function Jt(e, t, r, o, a, s, c, f, l, w, d, h) {
  for (var v = a - 1, S = a === 0 ? s : [""], O = br(S), N = 0, M = 0, x = 0; N < o; ++N)
    for (var y = 0, C = _e(e, v + 1, v = yr(M = c[N])), T = e; y < O; ++y)
      (T = vr(M > 0 ? S[y] + " " + C : g(C, /&\f/g, S[y]))) && (l[x++] = T);
  return nt(e, t, r, a === 0 ? tt : f, l, w, d, h);
}
function An(e, t, r, o) {
  return nt(e, t, r, mr, Ot(En()), _e(e, 2, -2), 0, o);
}
function Zt(e, t, r, o, a) {
  return nt(e, t, r, Pt, _e(e, 0, o), _e(e, o + 1, -1), o, a);
}
function Sr(e, t, r) {
  switch (wn(e, t)) {
    case 5103:
      return k + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return k + e + e;
    case 4789:
      return Me + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return k + e + Me + e + A + e + e;
    case 5936:
      switch (F(e, t + 11)) {
        case 114:
          return k + e + A + g(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return k + e + A + g(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return k + e + A + g(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return k + e + A + e + e;
    case 6165:
      return k + e + A + "flex-" + e + e;
    case 5187:
      return k + e + g(e, /(\w+).+(:[^]+)/, k + "box-$1$2" + A + "flex-$1$2") + e;
    case 5443:
      return k + e + A + "flex-item-" + g(e, /flex-|-self/g, "") + (re(e, /flex-|baseline/) ? "" : A + "grid-row-" + g(e, /flex-|-self/g, "")) + e;
    case 4675:
      return k + e + A + "flex-line-pack" + g(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return k + e + A + g(e, "shrink", "negative") + e;
    case 5292:
      return k + e + A + g(e, "basis", "preferred-size") + e;
    case 6060:
      return k + "box-" + g(e, "-grow", "") + k + e + A + g(e, "grow", "positive") + e;
    case 4554:
      return k + g(e, /([^-])(transform)/g, "$1" + k + "$2") + e;
    case 6187:
      return g(g(g(e, /(zoom-|grab)/, k + "$1"), /(image-set)/, k + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return g(e, /(image-set\([^]*)/, k + "$1$`$1");
    case 4968:
      return g(g(e, /(.+:)(flex-)?(.*)/, k + "box-pack:$3" + A + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + k + e + e;
    case 4200:
      if (!re(e, /flex-|baseline/))
        return A + "grid-column-align" + _e(e, t) + e;
      break;
    case 2592:
    case 3360:
      return A + g(e, "template-", "") + e;
    case 4384:
    case 3616:
      return r && r.some(function(o, a) {
        return t = a, re(o.props, /grid-\w+-end/);
      }) ? ~He(e + (r = r[t].value), "span", 0) ? e : A + g(e, "-start", "") + e + A + "grid-row-span:" + (~He(r, "span", 0) ? re(r, /\d+/) : +re(r, /\d+/) - +re(e, /\d+/)) + ";" : A + g(e, "-start", "") + e;
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return re(o.props, /grid-\w+-start/);
      }) ? e : A + g(g(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return g(e, /(.+)-inline(.+)/, k + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (J(e) - 1 - t > 6)
        switch (F(e, t + 1)) {
          case 109:
            if (F(e, t + 4) !== 45)
              break;
          case 102:
            return g(e, /(.+:)(.+)-([^]+)/, "$1" + k + "$2-$3$1" + Me + (F(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~He(e, "stretch", 0) ? Sr(g(e, "stretch", "fill-available"), t, r) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return g(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, s, c, f, l, w) {
        return A + a + ":" + s + w + (c ? A + a + "-span:" + (f ? l : +l - +s) + w : "") + e;
      });
    case 4949:
      if (F(e, t + 6) === 121)
        return g(e, ":", ":" + k) + e;
      break;
    case 6444:
      switch (F(e, F(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return g(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + k + (F(e, 14) === 45 ? "inline-" : "") + "box$3$1" + k + "$2$3$1" + A + "$2box$3") + e;
        case 100:
          return g(e, ":", ":" + A) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return g(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ze(e, t) {
  for (var r = "", o = 0; o < e.length; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function In(e, t, r, o) {
  switch (e.type) {
    case bn:
      if (e.children.length)
        break;
    case vn:
    case Pt:
      return e.return = e.return || e.value;
    case mr:
      return "";
    case gr:
      return e.return = e.value + "{" + Ze(e.children, o) + "}";
    case tt:
      if (!J(e.value = e.props.join(",")))
        return "";
  }
  return J(r = Ze(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function Nn(e) {
  var t = br(e);
  return function(r, o, a, s) {
    for (var c = "", f = 0; f < t; f++)
      c += e[f](r, o, a, s) || "";
    return c;
  };
}
function jn(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Dn(e, t, r, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Pt:
        e.return = Sr(e.value, e.length, r);
        return;
      case gr:
        return Ze([se(e, { value: g(e.value, "@", "@" + k) })], o);
      case tt:
        if (e.length)
          return Sn(r = e.props, function(a) {
            switch (re(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Ee(se(e, { props: [g(a, /:(read-\w+)/, ":" + Me + "$1")] })), Ee(se(e, { props: [a] })), wt(e, { props: Xt(r, o) });
                break;
              case "::placeholder":
                Ee(se(e, { props: [g(a, /:(plac\w+)/, ":" + k + "input-$1")] })), Ee(se(e, { props: [g(a, /:(plac\w+)/, ":" + Me + "$1")] })), Ee(se(e, { props: [g(a, /:(plac\w+)/, A + "input-$1")] })), Ee(se(e, { props: [a] })), wt(e, { props: Xt(r, o) });
                break;
            }
            return "";
          });
    }
}
var $n = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, me = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Er = "active", Rr = "data-styled-version", at = "6.1.12", Tt = `/*!sc*/
`, Qe = typeof window < "u" && "HTMLElement" in window, Fn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), Qt = /invalid hook call/i, Ye = /* @__PURE__ */ new Set(), Mn = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = t ? ' with the id of "'.concat(t, '"') : "", o = "The component ".concat(e).concat(r, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var s = !0;
      console.error = function(c) {
        for (var f = [], l = 1; l < arguments.length; l++)
          f[l - 1] = arguments[l];
        Qt.test(c) ? (s = !1, Ye.delete(o)) : a.apply(void 0, Re([c], f, !1));
      }, ln(), s && !Ye.has(o) && (console.warn(o), Ye.add(o));
    } catch (c) {
      Qt.test(c.message) && Ye.delete(o);
    } finally {
      console.error = a;
    }
  }
}, it = Object.freeze([]), xe = Object.freeze({});
function Ln(e, t, r) {
  return r === void 0 && (r = xe), e.theme !== r.theme && e.theme || t || r.theme;
}
var Rt = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), zn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vn = /(^-|-$)/g;
function er(e) {
  return e.replace(zn, "-").replace(Vn, "");
}
var Wn = /(a)(d)/gi, Be = 52, tr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function _t(e) {
  var t, r = "";
  for (t = Math.abs(e); t > Be; t = t / Be | 0)
    r = tr(t % Be) + r;
  return (tr(t % Be) + r).replace(Wn, "$1-$2");
}
var gt, _r = 5381, le = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, kr = function(e) {
  return le(_r, e);
};
function Yn(e) {
  return _t(kr(e) >>> 0);
}
function xr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function yt(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Cr = typeof Symbol == "function" && Symbol.for, Pr = Cr ? Symbol.for("react.memo") : 60115, Bn = Cr ? Symbol.for("react.forward_ref") : 60112, Un = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, Gn = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Or = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, Hn = ((gt = {})[Bn] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, gt[Pr] = Or, gt);
function rr(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Pr ? Or : "$$typeof" in e ? Hn[e.$$typeof] : Un;
  var t;
}
var qn = Object.defineProperty, Kn = Object.getOwnPropertyNames, nr = Object.getOwnPropertySymbols, Xn = Object.getOwnPropertyDescriptor, Jn = Object.getPrototypeOf, or = Object.prototype;
function Tr(e, t, r) {
  if (typeof t != "string") {
    if (or) {
      var o = Jn(t);
      o && o !== or && Tr(e, o, r);
    }
    var a = Kn(t);
    nr && (a = a.concat(nr(t)));
    for (var s = rr(e), c = rr(t), f = 0; f < a.length; ++f) {
      var l = a[f];
      if (!(l in Gn || r && r[l] || c && l in c || s && l in s)) {
        var w = Xn(t, l);
        try {
          qn(e, l, w);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ce(e) {
  return typeof e == "function";
}
function At(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function fe(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function ar(e, t) {
  if (e.length === 0)
    return "";
  for (var r = e[0], o = 1; o < e.length; o++)
    r += t ? t + e[o] : e[o];
  return r;
}
function Pe(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function kt(e, t, r) {
  if (r === void 0 && (r = !1), !r && !Pe(e) && !Array.isArray(e))
    return t;
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      e[o] = kt(e[o], t[o]);
  else if (Pe(t))
    for (var o in t)
      e[o] = kt(e[o], t[o]);
  return e;
}
function It(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
var Zn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function Qn() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = e[0], o = [], a = 1, s = e.length; a < s; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    r = r.replace(/%[a-z]/, c);
  }), r;
}
function Te(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")) : new Error(Qn.apply(void 0, Re([Zn[e]], t, !1)).trim());
}
var eo = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  return e.prototype.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, e.prototype.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, s = a; t >= s; )
        if ((s <<= 1) < 0)
          throw Te(16, "".concat(t));
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(o), this.length = s;
      for (var c = a; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var f = this.indexOfGroup(t + 1), l = (c = 0, r.length); c < l; c++)
      this.tag.insertRule(f, r[c]) && (this.groupSizes[t]++, f++);
  }, e.prototype.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), a = o + r;
      this.groupSizes[t] = 0;
      for (var s = o; s < a; s++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), s = a + o, c = a; c < s; c++)
      r += "".concat(this.tag.getRule(c)).concat(Tt);
    return r;
  }, e;
}(), to = 1 << 30, Xe = /* @__PURE__ */ new Map(), et = /* @__PURE__ */ new Map(), Je = 1, Ue = function(e) {
  if (Xe.has(e))
    return Xe.get(e);
  for (; et.has(Je); )
    Je++;
  var t = Je++;
  if (process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > to))
    throw Te(16, "".concat(t));
  return Xe.set(e, t), et.set(t, e), t;
}, ro = function(e, t) {
  Je = t + 1, Xe.set(e, t), et.set(t, e);
}, no = "style[".concat(me, "][").concat(Rr, '="').concat(at, '"]'), oo = new RegExp("^".concat(me, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), ao = function(e, t, r) {
  for (var o, a = r.split(","), s = 0, c = a.length; s < c; s++)
    (o = a[s]) && e.registerName(t, o);
}, io = function(e, t) {
  for (var r, o = ((r = t.textContent) !== null && r !== void 0 ? r : "").split(Tt), a = [], s = 0, c = o.length; s < c; s++) {
    var f = o[s].trim();
    if (f) {
      var l = f.match(oo);
      if (l) {
        var w = 0 | parseInt(l[1], 10), d = l[2];
        w !== 0 && (ro(d, w), ao(e, d, l[3]), e.getTag().insertRules(w, a)), a.length = 0;
      } else
        a.push(f);
    }
  }
}, ir = function(e) {
  for (var t = document.querySelectorAll(no), r = 0, o = t.length; r < o; r++) {
    var a = t[r];
    a && a.getAttribute(me) !== Er && (io(e, a), a.parentNode && a.parentNode.removeChild(a));
  }
};
function so() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Ar = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(f) {
    var l = Array.from(f.querySelectorAll("style[".concat(me, "]")));
    return l[l.length - 1];
  }(r), s = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(me, Er), o.setAttribute(Rr, at);
  var c = so();
  return c && o.setAttribute("nonce", c), r.insertBefore(o, s), o;
}, co = function() {
  function e(t) {
    this.element = Ar(t), this.element.appendChild(document.createTextNode("")), this.sheet = function(r) {
      if (r.sheet)
        return r.sheet;
      for (var o = document.styleSheets, a = 0, s = o.length; a < s; a++) {
        var c = o[a];
        if (c.ownerNode === r)
          return c;
      }
      throw Te(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, e.prototype.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r && r.cssText ? r.cssText : "";
  }, e;
}(), uo = function() {
  function e(t) {
    this.element = Ar(t), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[t] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), lo = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, e.prototype.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, e.prototype.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), sr = Qe, fo = { isServer: !Qe, useCSSOMInjection: !Fn }, Ir = function() {
  function e(t, r, o) {
    t === void 0 && (t = xe), r === void 0 && (r = {});
    var a = this;
    this.options = W(W({}, fo), t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Qe && sr && (sr = !1, ir(this)), It(this, function() {
      return function(s) {
        for (var c = s.getTag(), f = c.length, l = "", w = function(h) {
          var v = function(x) {
            return et.get(x);
          }(h);
          if (v === void 0)
            return "continue";
          var S = s.names.get(v), O = c.getGroup(h);
          if (S === void 0 || !S.size || O.length === 0)
            return "continue";
          var N = "".concat(me, ".g").concat(h, '[id="').concat(v, '"]'), M = "";
          S !== void 0 && S.forEach(function(x) {
            x.length > 0 && (M += "".concat(x, ","));
          }), l += "".concat(O).concat(N, '{content:"').concat(M, '"}').concat(Tt);
        }, d = 0; d < f; d++)
          w(d);
        return l;
      }(a);
    });
  }
  return e.registerId = function(t) {
    return Ue(t);
  }, e.prototype.rehydrate = function() {
    !this.server && Qe && ir(this);
  }, e.prototype.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(W(W({}, this.options), t), this.gs, r && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (t = function(r) {
      var o = r.useCSSOMInjection, a = r.target;
      return r.isServer ? new lo(a) : o ? new co(a) : new uo(a);
    }(this.options), new eo(t)));
    var t;
  }, e.prototype.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, e.prototype.registerName = function(t, r) {
    if (Ue(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, e.prototype.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(Ue(t), o);
  }, e.prototype.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, e.prototype.clearRules = function(t) {
    this.getTag().clearGroup(Ue(t)), this.clearNames(t);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), po = /&/g, ho = /^\s*\/\/.*$/gm;
function Nr(e, t) {
  return e.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(t, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(t, " ")), r.props = r.props.map(function(o) {
      return "".concat(t, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = Nr(r.children, t)), r;
  });
}
function mo(e) {
  var t, r, o, a = e === void 0 ? xe : e, s = a.options, c = s === void 0 ? xe : s, f = a.plugins, l = f === void 0 ? it : f, w = function(v, S, O) {
    return O.startsWith(r) && O.endsWith(r) && O.replaceAll(r, "").length > 0 ? ".".concat(t) : v;
  }, d = l.slice();
  d.push(function(v) {
    v.type === tt && v.value.includes("&") && (v.props[0] = v.props[0].replace(po, r).replace(o, w));
  }), c.prefix && d.push(Dn), d.push(In);
  var h = function(v, S, O, N) {
    S === void 0 && (S = ""), O === void 0 && (O = ""), N === void 0 && (N = "&"), t = N, r = S, o = new RegExp("\\".concat(r, "\\b"), "g");
    var M = v.replace(ho, ""), x = Tn(O || S ? "".concat(O, " ").concat(S, " { ").concat(M, " }") : M);
    c.namespace && (x = Nr(x, c.namespace));
    var y = [];
    return Ze(x, Nn(d.concat(jn(function(C) {
      return y.push(C);
    })))), y;
  };
  return h.hash = l.length ? l.reduce(function(v, S) {
    return S.name || Te(15), le(v, S.name);
  }, _r).toString() : "", h;
}
var go = new Ir(), xt = mo(), jr = he.createContext({ shouldForwardProp: void 0, styleSheet: go, stylis: xt });
jr.Consumer;
he.createContext(void 0);
function cr() {
  return pn(jr);
}
var ur = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, s) {
      s === void 0 && (s = xt);
      var c = o.name + s.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, s(o.rules, c, "@keyframes"));
    }, this.name = t, this.id = "sc-keyframes-".concat(t), this.rules = r, It(this, function() {
      throw Te(12, String(o.name));
    });
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = xt), this.name + t.hash;
  }, e;
}(), yo = function(e) {
  return e >= "A" && e <= "Z";
};
function lr(e) {
  for (var t = "", r = 0; r < e.length; r++) {
    var o = e[r];
    if (r === 1 && o === "-" && e[0] === "-")
      return e;
    yo(o) ? t += "-" + o.toLowerCase() : t += o;
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var Dr = function(e) {
  return e == null || e === !1 || e === "";
}, $r = function(e) {
  var t, r, o = [];
  for (var a in e) {
    var s = e[a];
    e.hasOwnProperty(a) && !Dr(s) && (Array.isArray(s) && s.isCss || Ce(s) ? o.push("".concat(lr(a), ":"), s, ";") : Pe(s) ? o.push.apply(o, Re(Re(["".concat(a, " {")], $r(s), !1), ["}"], !1)) : o.push("".concat(lr(a), ": ").concat((t = a, (r = s) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || t in $n || t.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function de(e, t, r, o) {
  if (Dr(e))
    return [];
  if (At(e))
    return [".".concat(e.styledComponentId)];
  if (Ce(e)) {
    if (!Ce(s = e) || s.prototype && s.prototype.isReactComponent || !t)
      return [e];
    var a = e(t);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof ur || Pe(a) || a === null || console.error("".concat(xr(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), de(a, t, r, o);
  }
  var s;
  return e instanceof ur ? r ? (e.inject(r, o), [e.getName(o)]) : [e] : Pe(e) ? $r(e) : Array.isArray(e) ? Array.prototype.concat.apply(it, e.map(function(c) {
    return de(c, t, r, o);
  })) : [e.toString()];
}
function vo(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Ce(r) && !At(r))
      return !1;
  }
  return !0;
}
var bo = kr(at), wo = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && vo(t), this.componentId = r, this.baseHash = le(bo, r), this.baseStyle = o, Ir.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, r, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId))
        a = fe(a, this.staticRulesId);
      else {
        var s = ar(de(this.rules, t, r, o)), c = _t(le(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(this.componentId, c)) {
          var f = o(s, ".".concat(c), void 0, this.componentId);
          r.insertRules(this.componentId, c, f);
        }
        a = fe(a, c), this.staticRulesId = c;
      }
    else {
      for (var l = le(this.baseHash, o.hash), w = "", d = 0; d < this.rules.length; d++) {
        var h = this.rules[d];
        if (typeof h == "string")
          w += h, process.env.NODE_ENV !== "production" && (l = le(l, h));
        else if (h) {
          var v = ar(de(h, t, r, o));
          l = le(l, v + d), w += v;
        }
      }
      if (w) {
        var S = _t(l >>> 0);
        r.hasNameForId(this.componentId, S) || r.insertRules(this.componentId, S, o(w, ".".concat(S), void 0, this.componentId)), a = fe(a, S);
      }
    }
    return a;
  }, e;
}(), Fr = he.createContext(void 0);
Fr.Consumer;
var vt = {}, fr = /* @__PURE__ */ new Set();
function So(e, t, r) {
  var o = At(e), a = e, s = !yt(e), c = t.attrs, f = c === void 0 ? it : c, l = t.componentId, w = l === void 0 ? function(T, I) {
    var E = typeof T != "string" ? "sc" : er(T);
    vt[E] = (vt[E] || 0) + 1;
    var m = "".concat(E, "-").concat(Yn(at + E + vt[E]));
    return I ? "".concat(I, "-").concat(m) : m;
  }(t.displayName, t.parentComponentId) : l, d = t.displayName, h = d === void 0 ? function(T) {
    return yt(T) ? "styled.".concat(T) : "Styled(".concat(xr(T), ")");
  }(e) : d, v = t.displayName && t.componentId ? "".concat(er(t.displayName), "-").concat(t.componentId) : t.componentId || w, S = o && a.attrs ? a.attrs.concat(f).filter(Boolean) : f, O = t.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var N = a.shouldForwardProp;
    if (t.shouldForwardProp) {
      var M = t.shouldForwardProp;
      O = function(T, I) {
        return N(T, I) && M(T, I);
      };
    } else
      O = N;
  }
  var x = new wo(r, v, o ? a.componentStyle : void 0);
  function y(T, I) {
    return function(E, m, Z) {
      var Q = E.attrs, st = E.componentStyle, ct = E.defaultProps, Le = E.foldedComponentIds, Y = E.styledComponentId, ee = E.target, ce = he.useContext(Fr), ze = cr(), ge = E.shouldForwardProp || ze.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Ht(Y);
      var Ae = Ln(m, ce, ct) || xe, B = function(ve, te, ae) {
        for (var H, q = W(W({}, te), { className: void 0, theme: ae }), ie = 0; ie < ve.length; ie += 1) {
          var be = Ce(H = ve[ie]) ? H(q) : H;
          for (var K in be)
            q[K] = K === "className" ? fe(q[K], be[K]) : K === "style" ? W(W({}, q[K]), be[K]) : be[K];
        }
        return te.className && (q.className = fe(q.className, te.className)), q;
      }(Q, m, Ae), ne = B.as || ee, oe = {};
      for (var L in B)
        B[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" && B.theme === Ae || (L === "forwardedAs" ? oe.as = B.forwardedAs : ge && !ge(L, ne) || (oe[L] = B[L], ge || process.env.NODE_ENV !== "development" || yn(L) || fr.has(L) || !Rt.has(ne) || (fr.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ye = function(ve, te) {
        var ae = cr(), H = ve.generateAndInjectStyles(te, ae.styleSheet, ae.stylis);
        return process.env.NODE_ENV !== "production" && Ht(H), H;
      }(st, B);
      process.env.NODE_ENV !== "production" && E.warnTooManyClasses && E.warnTooManyClasses(ye);
      var Ie = fe(Le, Y);
      return ye && (Ie += " " + ye), B.className && (Ie += " " + B.className), oe[yt(ne) && !Rt.has(ne) ? "class" : "className"] = Ie, oe.ref = Z, fn(ne, oe);
    }(C, T, I);
  }
  y.displayName = h;
  var C = he.forwardRef(y);
  return C.attrs = S, C.componentStyle = x, C.displayName = h, C.shouldForwardProp = O, C.foldedComponentIds = o ? fe(a.foldedComponentIds, a.styledComponentId) : "", C.styledComponentId = v, C.target = o ? a.target : e, Object.defineProperty(C, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(T) {
    this._foldedDefaultProps = o ? function(I) {
      for (var E = [], m = 1; m < arguments.length; m++)
        E[m - 1] = arguments[m];
      for (var Z = 0, Q = E; Z < Q.length; Z++)
        kt(I, Q[Z], !0);
      return I;
    }({}, a.defaultProps, T) : T;
  } }), process.env.NODE_ENV !== "production" && (Mn(h, v), C.warnTooManyClasses = function(T, I) {
    var E = {}, m = !1;
    return function(Z) {
      if (!m && (E[Z] = !0, Object.keys(E).length >= 200)) {
        var Q = I ? ' with the id of "'.concat(I, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(T).concat(Q, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), m = !0, E = {};
      }
    };
  }(h, v)), It(C, function() {
    return ".".concat(C.styledComponentId);
  }), s && Tr(C, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), C;
}
function pr(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}
var dr = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Eo(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (Ce(e) || Pe(e))
    return dr(de(pr(it, Re([e], t, !0))));
  var o = e;
  return t.length === 0 && o.length === 1 && typeof o[0] == "string" ? de(o) : dr(de(pr(o, t)));
}
function Ct(e, t, r) {
  if (r === void 0 && (r = xe), !t)
    throw Te(1, t);
  var o = function(a) {
    for (var s = [], c = 1; c < arguments.length; c++)
      s[c - 1] = arguments[c];
    return e(t, r, Eo.apply(void 0, Re([a], s, !1)));
  };
  return o.attrs = function(a) {
    return Ct(e, t, W(W({}, r), { attrs: Array.prototype.concat(r.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return Ct(e, t, W(W({}, r), a));
  }, o;
}
var Mr = function(e) {
  return Ct(So, e);
}, Nt = Mr;
Rt.forEach(function(e) {
  Nt[e] = Mr(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Ge = "__sc-".concat(me, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Ge] || (window[Ge] = 0), window[Ge] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Ge] += 1);
const Ro = Nt.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(e) => e.primary ? "#fff" : "#000"};
  background-color: ${(e) => e.primary ? "#FF5655" : "#f4c4c4"};
  padding: ${(e) => e.size === "small" ? "7px 25px 8px" : e.size === "medium" ? "9px 30px 11px" : "14px 30px 16px"};
`, xo = ({
  size: e,
  primary: t,
  disabled: r,
  text: o,
  onClick: a,
  ...s
}) => /* @__PURE__ */ hr.jsx(
  Ro,
  {
    type: "button",
    onClick: a,
    primary: t,
    disabled: r,
    size: e,
    ...s,
    children: o
  }
), _o = Nt.button`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(e) => e.primary ? "#fff" : "#000"};
  background-color: ${(e) => e.primary ? "#FF5655" : "#f4c4c4"};
  padding: ${(e) => e.size === "small" ? "7px 25px 8px" : e.size === "medium" ? "9px 30px 11px" : "14px 30px 16px"};
`, Co = ({
  size: e,
  primary: t,
  disabled: r,
  text: o,
  onClick: a,
  ...s
}) => /* @__PURE__ */ hr.jsx(
  _o,
  {
    type: "button",
    onClick: a,
    primary: t,
    disabled: r,
    size: e,
    ...s,
    children: o
  }
);
export {
  xo as Button,
  Co as ButtonCopy
};
//# sourceMappingURL=index.es.js.map
