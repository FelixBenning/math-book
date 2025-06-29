!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports["h5p-standalone"] = t())
    : (e.H5PStandalone = t());
})(self, () =>
  (() => {
    var e = {
        128: (e, t, n) => {
          "use strict";
          var r, i;
          n.r(t),
            n.d(t, { H5P: () => o }),
            (e = n.hmd(e)),
            (r = "undefined" != typeof window ? window : void 0),
            (i = function (e, t) {
              var r = [],
                i = Object.getPrototypeOf,
                o = r.slice,
                a = r.flat
                  ? function (e) {
                      return r.flat.call(e);
                    }
                  : function (e) {
                      return r.concat.apply([], e);
                    },
                s = r.push,
                c = r.indexOf,
                l = {},
                u = l.toString,
                d = l.hasOwnProperty,
                f = d.toString,
                p = f.call(Object),
                h = {},
                g = function (e) {
                  return (
                    "function" == typeof e && "number" != typeof e.nodeType
                  );
                },
                v = function (e) {
                  return null != e && e === e.window;
                },
                m = e.document,
                y = { type: !0, src: !0, nonce: !0, noModule: !0 };
              function b(e, t, n) {
                var r,
                  i,
                  o = (n = n || m).createElement("script");
                if (((o.text = e), t))
                  for (r in y)
                    (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                      o.setAttribute(r, i);
                n.head.appendChild(o).parentNode.removeChild(o);
              }
              function x(e) {
                return null == e
                  ? e + ""
                  : "object" == typeof e || "function" == typeof e
                  ? l[u.call(e)] || "object"
                  : typeof e;
              }
              var w = "3.5.1",
                C = function (e, t) {
                  return new C.fn.init(e, t);
                };
              function T(e) {
                var t = !!e && "length" in e && e.length,
                  n = x(e);
                return (
                  !g(e) &&
                  !v(e) &&
                  ("array" === n ||
                    0 === t ||
                    ("number" == typeof t && 0 < t && t - 1 in e))
                );
              }
              (C.fn = C.prototype =
                {
                  jquery: w,
                  constructor: C,
                  length: 0,
                  toArray: function () {
                    return o.call(this);
                  },
                  get: function (e) {
                    return null == e
                      ? o.call(this)
                      : e < 0
                      ? this[e + this.length]
                      : this[e];
                  },
                  pushStack: function (e) {
                    var t = C.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                  },
                  each: function (e) {
                    return C.each(this, e);
                  },
                  map: function (e) {
                    return this.pushStack(
                      C.map(this, function (t, n) {
                        return e.call(t, n, t);
                      })
                    );
                  },
                  slice: function () {
                    return this.pushStack(o.apply(this, arguments));
                  },
                  first: function () {
                    return this.eq(0);
                  },
                  last: function () {
                    return this.eq(-1);
                  },
                  even: function () {
                    return this.pushStack(
                      C.grep(this, function (e, t) {
                        return (t + 1) % 2;
                      })
                    );
                  },
                  odd: function () {
                    return this.pushStack(
                      C.grep(this, function (e, t) {
                        return t % 2;
                      })
                    );
                  },
                  eq: function (e) {
                    var t = this.length,
                      n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : []);
                  },
                  end: function () {
                    return this.prevObject || this.constructor();
                  },
                  push: s,
                  sort: r.sort,
                  splice: r.splice,
                }),
                (C.extend = C.fn.extend =
                  function () {
                    var e,
                      t,
                      n,
                      r,
                      i,
                      o,
                      a = arguments[0] || {},
                      s = 1,
                      c = arguments.length,
                      l = !1;
                    for (
                      "boolean" == typeof a &&
                        ((l = a), (a = arguments[s] || {}), s++),
                        "object" == typeof a || g(a) || (a = {}),
                        s === c && ((a = this), s--);
                      s < c;
                      s++
                    )
                      if (null != (e = arguments[s]))
                        for (t in e)
                          (r = e[t]),
                            "__proto__" !== t &&
                              a !== r &&
                              (l &&
                              r &&
                              (C.isPlainObject(r) || (i = Array.isArray(r)))
                                ? ((n = a[t]),
                                  (o =
                                    i && !Array.isArray(n)
                                      ? []
                                      : i || C.isPlainObject(n)
                                      ? n
                                      : {}),
                                  (i = !1),
                                  (a[t] = C.extend(l, o, r)))
                                : void 0 !== r && (a[t] = r));
                    return a;
                  }),
                C.extend({
                  expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
                  isReady: !0,
                  error: function (e) {
                    throw new Error(e);
                  },
                  noop: function () {},
                  isPlainObject: function (e) {
                    var t, n;
                    return !(
                      !e ||
                      "[object Object]" !== u.call(e) ||
                      ((t = i(e)) &&
                        ("function" !=
                          typeof (n =
                            d.call(t, "constructor") && t.constructor) ||
                          f.call(n) !== p))
                    );
                  },
                  isEmptyObject: function (e) {
                    var t;
                    for (t in e) return !1;
                    return !0;
                  },
                  globalEval: function (e, t, n) {
                    b(e, { nonce: t && t.nonce }, n);
                  },
                  each: function (e, t) {
                    var n,
                      r = 0;
                    if (T(e))
                      for (
                        n = e.length;
                        r < n && !1 !== t.call(e[r], r, e[r]);
                        r++
                      );
                    else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                    return e;
                  },
                  makeArray: function (e, t) {
                    var n = t || [];
                    return (
                      null != e &&
                        (T(Object(e))
                          ? C.merge(n, "string" == typeof e ? [e] : e)
                          : s.call(n, e)),
                      n
                    );
                  },
                  inArray: function (e, t, n) {
                    return null == t ? -1 : c.call(t, e, n);
                  },
                  merge: function (e, t) {
                    for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                      e[i++] = t[r];
                    return (e.length = i), e;
                  },
                  grep: function (e, t, n) {
                    for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                      !t(e[i], i) !== a && r.push(e[i]);
                    return r;
                  },
                  map: function (e, t, n) {
                    var r,
                      i,
                      o = 0,
                      s = [];
                    if (T(e))
                      for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && s.push(i);
                    else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
                    return a(s);
                  },
                  guid: 1,
                  support: h,
                }),
                "function" == typeof Symbol &&
                  (C.fn[Symbol.iterator] = r[Symbol.iterator]),
                C.each(
                  "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                    " "
                  ),
                  function (e, t) {
                    l["[object " + t + "]"] = t.toLowerCase();
                  }
                );
              var P = (function (e) {
                var t,
                  n,
                  r,
                  i,
                  o,
                  a,
                  s,
                  c,
                  l,
                  u,
                  d,
                  f,
                  p,
                  h,
                  g,
                  v,
                  m,
                  y,
                  b,
                  x = "sizzle" + 1 * new Date(),
                  w = e.document,
                  C = 0,
                  T = 0,
                  P = ce(),
                  E = ce(),
                  S = ce(),
                  H = ce(),
                  I = function (e, t) {
                    return e === t && (d = !0), 0;
                  },
                  A = {}.hasOwnProperty,
                  D = [],
                  k = D.pop,
                  j = D.push,
                  L = D.push,
                  N = D.slice,
                  q = function (e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                      if (e[n] === t) return n;
                    return -1;
                  },
                  O =
                    "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                  F = "[\\x20\\t\\r\\n\\f]",
                  M =
                    "(?:\\\\[\\da-fA-F]{1,6}" +
                    F +
                    "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                  R =
                    "\\[" +
                    F +
                    "*(" +
                    M +
                    ")(?:" +
                    F +
                    "*([*^$|!~]?=)" +
                    F +
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                    M +
                    "))|)" +
                    F +
                    "*\\]",
                  B =
                    ":(" +
                    M +
                    ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                    R +
                    ")*)|.*)\\)|)",
                  Q = new RegExp(F + "+", "g"),
                  z = new RegExp(
                    "^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$",
                    "g"
                  ),
                  U = new RegExp("^" + F + "*," + F + "*"),
                  $ = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
                  V = new RegExp(F + "|>"),
                  X = new RegExp(B),
                  W = new RegExp("^" + M + "$"),
                  _ = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M + "|[*])"),
                    ATTR: new RegExp("^" + R),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp(
                      "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        F +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        F +
                        "*(?:([+-]|)" +
                        F +
                        "*(\\d+)|))" +
                        F +
                        "*\\)|)",
                      "i"
                    ),
                    bool: new RegExp("^(?:" + O + ")$", "i"),
                    needsContext: new RegExp(
                      "^" +
                        F +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        F +
                        "*((?:-\\d)?\\d*)" +
                        F +
                        "*\\)|)(?=[^-]|$)",
                      "i"
                    ),
                  },
                  Y = /HTML$/i,
                  J = /^(?:input|select|textarea|button)$/i,
                  G = /^h\d$/i,
                  K = /^[^{]+\{\s*\[native \w/,
                  Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                  ee = /[+~]/,
                  te = new RegExp(
                    "\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])",
                    "g"
                  ),
                  ne = function (e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return (
                      t ||
                      (n < 0
                        ? String.fromCharCode(n + 65536)
                        : String.fromCharCode(
                            (n >> 10) | 55296,
                            (1023 & n) | 56320
                          ))
                    );
                  },
                  re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                  ie = function (e, t) {
                    return t
                      ? "\0" === e
                        ? "�"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                      : "\\" + e;
                  },
                  oe = function () {
                    f();
                  },
                  ae = xe(
                    function (e) {
                      return (
                        !0 === e.disabled &&
                        "fieldset" === e.nodeName.toLowerCase()
                      );
                    },
                    { dir: "parentNode", next: "legend" }
                  );
                try {
                  L.apply((D = N.call(w.childNodes)), w.childNodes),
                    D[w.childNodes.length].nodeType;
                } catch (t) {
                  L = {
                    apply: D.length
                      ? function (e, t) {
                          j.apply(e, N.call(t));
                        }
                      : function (e, t) {
                          for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                          e.length = n - 1;
                        },
                  };
                }
                function se(e, t, r, i) {
                  var o,
                    s,
                    l,
                    u,
                    d,
                    h,
                    m,
                    y = t && t.ownerDocument,
                    w = t ? t.nodeType : 9;
                  if (
                    ((r = r || []),
                    "string" != typeof e ||
                      !e ||
                      (1 !== w && 9 !== w && 11 !== w))
                  )
                    return r;
                  if (!i && (f(t), (t = t || p), g)) {
                    if (11 !== w && (d = Z.exec(e)))
                      if ((o = d[1])) {
                        if (9 === w) {
                          if (!(l = t.getElementById(o))) return r;
                          if (l.id === o) return r.push(l), r;
                        } else if (
                          y &&
                          (l = y.getElementById(o)) &&
                          b(t, l) &&
                          l.id === o
                        )
                          return r.push(l), r;
                      } else {
                        if (d[2])
                          return L.apply(r, t.getElementsByTagName(e)), r;
                        if (
                          (o = d[3]) &&
                          n.getElementsByClassName &&
                          t.getElementsByClassName
                        )
                          return L.apply(r, t.getElementsByClassName(o)), r;
                      }
                    if (
                      n.qsa &&
                      !H[e + " "] &&
                      (!v || !v.test(e)) &&
                      (1 !== w || "object" !== t.nodeName.toLowerCase())
                    ) {
                      if (
                        ((m = e), (y = t), 1 === w && (V.test(e) || $.test(e)))
                      ) {
                        for (
                          ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                            n.scope) ||
                            ((u = t.getAttribute("id"))
                              ? (u = u.replace(re, ie))
                              : t.setAttribute("id", (u = x))),
                            s = (h = a(e)).length;
                          s--;

                        )
                          h[s] = (u ? "#" + u : ":scope") + " " + be(h[s]);
                        m = h.join(",");
                      }
                      try {
                        return L.apply(r, y.querySelectorAll(m)), r;
                      } catch (t) {
                        H(e, !0);
                      } finally {
                        u === x && t.removeAttribute("id");
                      }
                    }
                  }
                  return c(e.replace(z, "$1"), t, r, i);
                }
                function ce() {
                  var e = [];
                  return function t(n, i) {
                    return (
                      e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                      (t[n + " "] = i)
                    );
                  };
                }
                function le(e) {
                  return (e[x] = !0), e;
                }
                function ue(e) {
                  var t = p.createElement("fieldset");
                  try {
                    return !!e(t);
                  } catch (e) {
                    return !1;
                  } finally {
                    t.parentNode && t.parentNode.removeChild(t), (t = null);
                  }
                }
                function de(e, t) {
                  for (var n = e.split("|"), i = n.length; i--; )
                    r.attrHandle[n[i]] = t;
                }
                function fe(e, t) {
                  var n = t && e,
                    r =
                      n &&
                      1 === e.nodeType &&
                      1 === t.nodeType &&
                      e.sourceIndex - t.sourceIndex;
                  if (r) return r;
                  if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                  return e ? 1 : -1;
                }
                function pe(e) {
                  return function (t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e;
                  };
                }
                function he(e) {
                  return function (t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e;
                  };
                }
                function ge(e) {
                  return function (t) {
                    return "form" in t
                      ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                          ? "label" in t.parentNode
                            ? t.parentNode.disabled === e
                            : t.disabled === e
                          : t.isDisabled === e ||
                            (t.isDisabled !== !e && ae(t) === e)
                        : t.disabled === e
                      : "label" in t && t.disabled === e;
                  };
                }
                function ve(e) {
                  return le(function (t) {
                    return (
                      (t = +t),
                      le(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--; )
                          n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                      })
                    );
                  });
                }
                function me(e) {
                  return e && void 0 !== e.getElementsByTagName && e;
                }
                for (t in ((n = se.support = {}),
                (o = se.isXML =
                  function (e) {
                    var t = e.namespaceURI,
                      n = (e.ownerDocument || e).documentElement;
                    return !Y.test(t || (n && n.nodeName) || "HTML");
                  }),
                (f = se.setDocument =
                  function (e) {
                    var t,
                      i,
                      a = e ? e.ownerDocument || e : w;
                    return (
                      a != p &&
                        9 === a.nodeType &&
                        a.documentElement &&
                        ((h = (p = a).documentElement),
                        (g = !o(p)),
                        w != p &&
                          (i = p.defaultView) &&
                          i.top !== i &&
                          (i.addEventListener
                            ? i.addEventListener("unload", oe, !1)
                            : i.attachEvent && i.attachEvent("onunload", oe)),
                        (n.scope = ue(function (e) {
                          return (
                            h
                              .appendChild(e)
                              .appendChild(p.createElement("div")),
                            void 0 !== e.querySelectorAll &&
                              !e.querySelectorAll(":scope fieldset div").length
                          );
                        })),
                        (n.attributes = ue(function (e) {
                          return (
                            (e.className = "i"), !e.getAttribute("className")
                          );
                        })),
                        (n.getElementsByTagName = ue(function (e) {
                          return (
                            e.appendChild(p.createComment("")),
                            !e.getElementsByTagName("*").length
                          );
                        })),
                        (n.getElementsByClassName = K.test(
                          p.getElementsByClassName
                        )),
                        (n.getById = ue(function (e) {
                          return (
                            (h.appendChild(e).id = x),
                            !p.getElementsByName ||
                              !p.getElementsByName(x).length
                          );
                        })),
                        n.getById
                          ? ((r.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                return e.getAttribute("id") === t;
                              };
                            }),
                            (r.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && g) {
                                var n = t.getElementById(e);
                                return n ? [n] : [];
                              }
                            }))
                          : ((r.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                var n =
                                  void 0 !== e.getAttributeNode &&
                                  e.getAttributeNode("id");
                                return n && n.value === t;
                              };
                            }),
                            (r.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && g) {
                                var n,
                                  r,
                                  i,
                                  o = t.getElementById(e);
                                if (o) {
                                  if (
                                    (n = o.getAttributeNode("id")) &&
                                    n.value === e
                                  )
                                    return [o];
                                  for (
                                    i = t.getElementsByName(e), r = 0;
                                    (o = i[r++]);

                                  )
                                    if (
                                      (n = o.getAttributeNode("id")) &&
                                      n.value === e
                                    )
                                      return [o];
                                }
                                return [];
                              }
                            })),
                        (r.find.TAG = n.getElementsByTagName
                          ? function (e, t) {
                              return void 0 !== t.getElementsByTagName
                                ? t.getElementsByTagName(e)
                                : n.qsa
                                ? t.querySelectorAll(e)
                                : void 0;
                            }
                          : function (e, t) {
                              var n,
                                r = [],
                                i = 0,
                                o = t.getElementsByTagName(e);
                              if ("*" === e) {
                                for (; (n = o[i++]); )
                                  1 === n.nodeType && r.push(n);
                                return r;
                              }
                              return o;
                            }),
                        (r.find.CLASS =
                          n.getElementsByClassName &&
                          function (e, t) {
                            if (void 0 !== t.getElementsByClassName && g)
                              return t.getElementsByClassName(e);
                          }),
                        (m = []),
                        (v = []),
                        (n.qsa = K.test(p.querySelectorAll)) &&
                          (ue(function (e) {
                            var t;
                            (h.appendChild(e).innerHTML =
                              "<a id='" +
                              x +
                              "'></a><select id='" +
                              x +
                              "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                              e.querySelectorAll("[msallowcapture^='']")
                                .length &&
                                v.push("[*^$]=" + F + "*(?:''|\"\")"),
                              e.querySelectorAll("[selected]").length ||
                                v.push("\\[" + F + "*(?:value|" + O + ")"),
                              e.querySelectorAll("[id~=" + x + "-]").length ||
                                v.push("~="),
                              (t = p.createElement("input")).setAttribute(
                                "name",
                                ""
                              ),
                              e.appendChild(t),
                              e.querySelectorAll("[name='']").length ||
                                v.push(
                                  "\\[" +
                                    F +
                                    "*name" +
                                    F +
                                    "*=" +
                                    F +
                                    "*(?:''|\"\")"
                                ),
                              e.querySelectorAll(":checked").length ||
                                v.push(":checked"),
                              e.querySelectorAll("a#" + x + "+*").length ||
                                v.push(".#.+[+~]"),
                              e.querySelectorAll("\\\f"),
                              v.push("[\\r\\n\\f]");
                          }),
                          ue(function (e) {
                            e.innerHTML =
                              "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = p.createElement("input");
                            t.setAttribute("type", "hidden"),
                              e.appendChild(t).setAttribute("name", "D"),
                              e.querySelectorAll("[name=d]").length &&
                                v.push("name" + F + "*[*^$|!~]?="),
                              2 !== e.querySelectorAll(":enabled").length &&
                                v.push(":enabled", ":disabled"),
                              (h.appendChild(e).disabled = !0),
                              2 !== e.querySelectorAll(":disabled").length &&
                                v.push(":enabled", ":disabled"),
                              e.querySelectorAll("*,:x"),
                              v.push(",.*:");
                          })),
                        (n.matchesSelector = K.test(
                          (y =
                            h.matches ||
                            h.webkitMatchesSelector ||
                            h.mozMatchesSelector ||
                            h.oMatchesSelector ||
                            h.msMatchesSelector)
                        )) &&
                          ue(function (e) {
                            (n.disconnectedMatch = y.call(e, "*")),
                              y.call(e, "[s!='']:x"),
                              m.push("!=", B);
                          }),
                        (v = v.length && new RegExp(v.join("|"))),
                        (m = m.length && new RegExp(m.join("|"))),
                        (t = K.test(h.compareDocumentPosition)),
                        (b =
                          t || K.test(h.contains)
                            ? function (e, t) {
                                var n =
                                    9 === e.nodeType ? e.documentElement : e,
                                  r = t && t.parentNode;
                                return (
                                  e === r ||
                                  !(
                                    !r ||
                                    1 !== r.nodeType ||
                                    !(n.contains
                                      ? n.contains(r)
                                      : e.compareDocumentPosition &&
                                        16 & e.compareDocumentPosition(r))
                                  )
                                );
                              }
                            : function (e, t) {
                                if (t)
                                  for (; (t = t.parentNode); )
                                    if (t === e) return !0;
                                return !1;
                              }),
                        (I = t
                          ? function (e, t) {
                              if (e === t) return (d = !0), 0;
                              var r =
                                !e.compareDocumentPosition -
                                !t.compareDocumentPosition;
                              return (
                                r ||
                                (1 &
                                  (r =
                                    (e.ownerDocument || e) ==
                                    (t.ownerDocument || t)
                                      ? e.compareDocumentPosition(t)
                                      : 1) ||
                                (!n.sortDetached &&
                                  t.compareDocumentPosition(e) === r)
                                  ? e == p || (e.ownerDocument == w && b(w, e))
                                    ? -1
                                    : t == p ||
                                      (t.ownerDocument == w && b(w, t))
                                    ? 1
                                    : u
                                    ? q(u, e) - q(u, t)
                                    : 0
                                  : 4 & r
                                  ? -1
                                  : 1)
                              );
                            }
                          : function (e, t) {
                              if (e === t) return (d = !0), 0;
                              var n,
                                r = 0,
                                i = e.parentNode,
                                o = t.parentNode,
                                a = [e],
                                s = [t];
                              if (!i || !o)
                                return e == p
                                  ? -1
                                  : t == p
                                  ? 1
                                  : i
                                  ? -1
                                  : o
                                  ? 1
                                  : u
                                  ? q(u, e) - q(u, t)
                                  : 0;
                              if (i === o) return fe(e, t);
                              for (n = e; (n = n.parentNode); ) a.unshift(n);
                              for (n = t; (n = n.parentNode); ) s.unshift(n);
                              for (; a[r] === s[r]; ) r++;
                              return r
                                ? fe(a[r], s[r])
                                : a[r] == w
                                ? -1
                                : s[r] == w
                                ? 1
                                : 0;
                            })),
                      p
                    );
                  }),
                (se.matches = function (e, t) {
                  return se(e, null, null, t);
                }),
                (se.matchesSelector = function (e, t) {
                  if (
                    (f(e),
                    n.matchesSelector &&
                      g &&
                      !H[t + " "] &&
                      (!m || !m.test(t)) &&
                      (!v || !v.test(t)))
                  )
                    try {
                      var r = y.call(e, t);
                      if (
                        r ||
                        n.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                      )
                        return r;
                    } catch (e) {
                      H(t, !0);
                    }
                  return 0 < se(t, p, null, [e]).length;
                }),
                (se.contains = function (e, t) {
                  return (e.ownerDocument || e) != p && f(e), b(e, t);
                }),
                (se.attr = function (e, t) {
                  (e.ownerDocument || e) != p && f(e);
                  var i = r.attrHandle[t.toLowerCase()],
                    o =
                      i && A.call(r.attrHandle, t.toLowerCase())
                        ? i(e, t, !g)
                        : void 0;
                  return void 0 !== o
                    ? o
                    : n.attributes || !g
                    ? e.getAttribute(t)
                    : (o = e.getAttributeNode(t)) && o.specified
                    ? o.value
                    : null;
                }),
                (se.escape = function (e) {
                  return (e + "").replace(re, ie);
                }),
                (se.error = function (e) {
                  throw new Error(
                    "Syntax error, unrecognized expression: " + e
                  );
                }),
                (se.uniqueSort = function (e) {
                  var t,
                    r = [],
                    i = 0,
                    o = 0;
                  if (
                    ((d = !n.detectDuplicates),
                    (u = !n.sortStable && e.slice(0)),
                    e.sort(I),
                    d)
                  ) {
                    for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
                    for (; i--; ) e.splice(r[i], 1);
                  }
                  return (u = null), e;
                }),
                (i = se.getText =
                  function (e) {
                    var t,
                      n = "",
                      r = 0,
                      o = e.nodeType;
                    if (o) {
                      if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent)
                          return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                      } else if (3 === o || 4 === o) return e.nodeValue;
                    } else for (; (t = e[r++]); ) n += i(t);
                    return n;
                  }),
                ((r = se.selectors =
                  {
                    cacheLength: 50,
                    createPseudo: le,
                    match: _,
                    attrHandle: {},
                    find: {},
                    relative: {
                      ">": { dir: "parentNode", first: !0 },
                      " ": { dir: "parentNode" },
                      "+": { dir: "previousSibling", first: !0 },
                      "~": { dir: "previousSibling" },
                    },
                    preFilter: {
                      ATTR: function (e) {
                        return (
                          (e[1] = e[1].replace(te, ne)),
                          (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                          "~=" === e[2] && (e[3] = " " + e[3] + " "),
                          e.slice(0, 4)
                        );
                      },
                      CHILD: function (e) {
                        return (
                          (e[1] = e[1].toLowerCase()),
                          "nth" === e[1].slice(0, 3)
                            ? (e[3] || se.error(e[0]),
                              (e[4] = +(e[4]
                                ? e[5] + (e[6] || 1)
                                : 2 * ("even" === e[3] || "odd" === e[3]))),
                              (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                            : e[3] && se.error(e[0]),
                          e
                        );
                      },
                      PSEUDO: function (e) {
                        var t,
                          n = !e[6] && e[2];
                        return _.CHILD.test(e[0])
                          ? null
                          : (e[3]
                              ? (e[2] = e[4] || e[5] || "")
                              : n &&
                                X.test(n) &&
                                (t = a(n, !0)) &&
                                (t = n.indexOf(")", n.length - t) - n.length) &&
                                ((e[0] = e[0].slice(0, t)),
                                (e[2] = n.slice(0, t))),
                            e.slice(0, 3));
                      },
                    },
                    filter: {
                      TAG: function (e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e
                          ? function () {
                              return !0;
                            }
                          : function (e) {
                              return (
                                e.nodeName && e.nodeName.toLowerCase() === t
                              );
                            };
                      },
                      CLASS: function (e) {
                        var t = P[e + " "];
                        return (
                          t ||
                          ((t = new RegExp(
                            "(^|" + F + ")" + e + "(" + F + "|$)"
                          )) &&
                            P(e, function (e) {
                              return t.test(
                                ("string" == typeof e.className &&
                                  e.className) ||
                                  (void 0 !== e.getAttribute &&
                                    e.getAttribute("class")) ||
                                  ""
                              );
                            }))
                        );
                      },
                      ATTR: function (e, t, n) {
                        return function (r) {
                          var i = se.attr(r, e);
                          return null == i
                            ? "!=" === t
                            : !t ||
                                ((i += ""),
                                "=" === t
                                  ? i === n
                                  : "!=" === t
                                  ? i !== n
                                  : "^=" === t
                                  ? n && 0 === i.indexOf(n)
                                  : "*=" === t
                                  ? n && -1 < i.indexOf(n)
                                  : "$=" === t
                                  ? n && i.slice(-n.length) === n
                                  : "~=" === t
                                  ? -1 <
                                    (" " + i.replace(Q, " ") + " ").indexOf(n)
                                  : "|=" === t &&
                                    (i === n ||
                                      i.slice(0, n.length + 1) === n + "-"));
                        };
                      },
                      CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                          a = "last" !== e.slice(-4),
                          s = "of-type" === t;
                        return 1 === r && 0 === i
                          ? function (e) {
                              return !!e.parentNode;
                            }
                          : function (t, n, c) {
                              var l,
                                u,
                                d,
                                f,
                                p,
                                h,
                                g = o !== a ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                m = s && t.nodeName.toLowerCase(),
                                y = !c && !s,
                                b = !1;
                              if (v) {
                                if (o) {
                                  for (; g; ) {
                                    for (f = t; (f = f[g]); )
                                      if (
                                        s
                                          ? f.nodeName.toLowerCase() === m
                                          : 1 === f.nodeType
                                      )
                                        return !1;
                                    h = g = "only" === e && !h && "nextSibling";
                                  }
                                  return !0;
                                }
                                if (
                                  ((h = [a ? v.firstChild : v.lastChild]),
                                  a && y)
                                ) {
                                  for (
                                    b =
                                      (p =
                                        (l =
                                          (u =
                                            (d = (f = v)[x] || (f[x] = {}))[
                                              f.uniqueID
                                            ] || (d[f.uniqueID] = {}))[e] ||
                                          [])[0] === C && l[1]) && l[2],
                                      f = p && v.childNodes[p];
                                    (f =
                                      (++p && f && f[g]) ||
                                      (b = p = 0) ||
                                      h.pop());

                                  )
                                    if (1 === f.nodeType && ++b && f === t) {
                                      u[e] = [C, p, b];
                                      break;
                                    }
                                } else if (
                                  (y &&
                                    (b = p =
                                      (l =
                                        (u =
                                          (d = (f = t)[x] || (f[x] = {}))[
                                            f.uniqueID
                                          ] || (d[f.uniqueID] = {}))[e] ||
                                        [])[0] === C && l[1]),
                                  !1 === b)
                                )
                                  for (
                                    ;
                                    (f =
                                      (++p && f && f[g]) ||
                                      (b = p = 0) ||
                                      h.pop()) &&
                                    ((s
                                      ? f.nodeName.toLowerCase() !== m
                                      : 1 !== f.nodeType) ||
                                      !++b ||
                                      (y &&
                                        ((u =
                                          (d = f[x] || (f[x] = {}))[
                                            f.uniqueID
                                          ] || (d[f.uniqueID] = {}))[e] = [
                                          C,
                                          b,
                                        ]),
                                      f !== t));

                                  );
                                return (
                                  (b -= i) === r || (b % r == 0 && 0 <= b / r)
                                );
                              }
                            };
                      },
                      PSEUDO: function (e, t) {
                        var n,
                          i =
                            r.pseudos[e] ||
                            r.setFilters[e.toLowerCase()] ||
                            se.error("unsupported pseudo: " + e);
                        return i[x]
                          ? i(t)
                          : 1 < i.length
                          ? ((n = [e, e, "", t]),
                            r.setFilters.hasOwnProperty(e.toLowerCase())
                              ? le(function (e, n) {
                                  for (var r, o = i(e, t), a = o.length; a--; )
                                    e[(r = q(e, o[a]))] = !(n[r] = o[a]);
                                })
                              : function (e) {
                                  return i(e, 0, n);
                                })
                          : i;
                      },
                    },
                    pseudos: {
                      not: le(function (e) {
                        var t = [],
                          n = [],
                          r = s(e.replace(z, "$1"));
                        return r[x]
                          ? le(function (e, t, n, i) {
                              for (
                                var o, a = r(e, null, i, []), s = e.length;
                                s--;

                              )
                                (o = a[s]) && (e[s] = !(t[s] = o));
                            })
                          : function (e, i, o) {
                              return (
                                (t[0] = e),
                                r(t, null, o, n),
                                (t[0] = null),
                                !n.pop()
                              );
                            };
                      }),
                      has: le(function (e) {
                        return function (t) {
                          return 0 < se(e, t).length;
                        };
                      }),
                      contains: le(function (e) {
                        return (
                          (e = e.replace(te, ne)),
                          function (t) {
                            return -1 < (t.textContent || i(t)).indexOf(e);
                          }
                        );
                      }),
                      lang: le(function (e) {
                        return (
                          W.test(e || "") || se.error("unsupported lang: " + e),
                          (e = e.replace(te, ne).toLowerCase()),
                          function (t) {
                            var n;
                            do {
                              if (
                                (n = g
                                  ? t.lang
                                  : t.getAttribute("xml:lang") ||
                                    t.getAttribute("lang"))
                              )
                                return (
                                  (n = n.toLowerCase()) === e ||
                                  0 === n.indexOf(e + "-")
                                );
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                          }
                        );
                      }),
                      target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                      },
                      root: function (e) {
                        return e === h;
                      },
                      focus: function (e) {
                        return (
                          e === p.activeElement &&
                          (!p.hasFocus || p.hasFocus()) &&
                          !!(e.type || e.href || ~e.tabIndex)
                        );
                      },
                      enabled: ge(!1),
                      disabled: ge(!0),
                      checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                          ("input" === t && !!e.checked) ||
                          ("option" === t && !!e.selected)
                        );
                      },
                      selected: function (e) {
                        return (
                          e.parentNode && e.parentNode.selectedIndex,
                          !0 === e.selected
                        );
                      },
                      empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                          if (e.nodeType < 6) return !1;
                        return !0;
                      },
                      parent: function (e) {
                        return !r.pseudos.empty(e);
                      },
                      header: function (e) {
                        return G.test(e.nodeName);
                      },
                      input: function (e) {
                        return J.test(e.nodeName);
                      },
                      button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                          ("input" === t && "button" === e.type) ||
                          "button" === t
                        );
                      },
                      text: function (e) {
                        var t;
                        return (
                          "input" === e.nodeName.toLowerCase() &&
                          "text" === e.type &&
                          (null == (t = e.getAttribute("type")) ||
                            "text" === t.toLowerCase())
                        );
                      },
                      first: ve(function () {
                        return [0];
                      }),
                      last: ve(function (e, t) {
                        return [t - 1];
                      }),
                      eq: ve(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                      }),
                      even: ve(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                      }),
                      odd: ve(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                      }),
                      lt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                          e.push(r);
                        return e;
                      }),
                      gt: ve(function (e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                        return e;
                      }),
                    },
                  }).pseudos.nth = r.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                  r.pseudos[t] = pe(t);
                for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
                function ye() {}
                function be(e) {
                  for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                  return r;
                }
                function xe(e, t, n) {
                  var r = t.dir,
                    i = t.next,
                    o = i || r,
                    a = n && "parentNode" === o,
                    s = T++;
                  return t.first
                    ? function (t, n, i) {
                        for (; (t = t[r]); )
                          if (1 === t.nodeType || a) return e(t, n, i);
                        return !1;
                      }
                    : function (t, n, c) {
                        var l,
                          u,
                          d,
                          f = [C, s];
                        if (c) {
                          for (; (t = t[r]); )
                            if ((1 === t.nodeType || a) && e(t, n, c))
                              return !0;
                        } else
                          for (; (t = t[r]); )
                            if (1 === t.nodeType || a)
                              if (
                                ((u =
                                  (d = t[x] || (t[x] = {}))[t.uniqueID] ||
                                  (d[t.uniqueID] = {})),
                                i && i === t.nodeName.toLowerCase())
                              )
                                t = t[r] || t;
                              else {
                                if ((l = u[o]) && l[0] === C && l[1] === s)
                                  return (f[2] = l[2]);
                                if (((u[o] = f)[2] = e(t, n, c))) return !0;
                              }
                        return !1;
                      };
                }
                function we(e) {
                  return 1 < e.length
                    ? function (t, n, r) {
                        for (var i = e.length; i--; )
                          if (!e[i](t, n, r)) return !1;
                        return !0;
                      }
                    : e[0];
                }
                function Ce(e, t, n, r, i) {
                  for (
                    var o, a = [], s = 0, c = e.length, l = null != t;
                    s < c;
                    s++
                  )
                    (o = e[s]) &&
                      ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
                  return a;
                }
                function Te(e, t, n, r, i, o) {
                  return (
                    r && !r[x] && (r = Te(r)),
                    i && !i[x] && (i = Te(i, o)),
                    le(function (o, a, s, c) {
                      var l,
                        u,
                        d,
                        f = [],
                        p = [],
                        h = a.length,
                        g =
                          o ||
                          (function (e, t, n) {
                            for (var r = 0, i = t.length; r < i; r++)
                              se(e, t[r], n);
                            return n;
                          })(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || (!o && t) ? g : Ce(g, f, e, s, c),
                        m = n ? (i || (o ? e : h || r) ? [] : a) : v;
                      if ((n && n(v, m, s, c), r))
                        for (l = Ce(m, p), r(l, [], s, c), u = l.length; u--; )
                          (d = l[u]) && (m[p[u]] = !(v[p[u]] = d));
                      if (o) {
                        if (i || e) {
                          if (i) {
                            for (l = [], u = m.length; u--; )
                              (d = m[u]) && l.push((v[u] = d));
                            i(null, (m = []), l, c);
                          }
                          for (u = m.length; u--; )
                            (d = m[u]) &&
                              -1 < (l = i ? q(o, d) : f[u]) &&
                              (o[l] = !(a[l] = d));
                        }
                      } else (m = Ce(m === a ? m.splice(h, m.length) : m)), i ? i(null, a, m, c) : L.apply(a, m);
                    })
                  );
                }
                function Pe(e) {
                  for (
                    var t,
                      n,
                      i,
                      o = e.length,
                      a = r.relative[e[0].type],
                      s = a || r.relative[" "],
                      c = a ? 1 : 0,
                      u = xe(
                        function (e) {
                          return e === t;
                        },
                        s,
                        !0
                      ),
                      d = xe(
                        function (e) {
                          return -1 < q(t, e);
                        },
                        s,
                        !0
                      ),
                      f = [
                        function (e, n, r) {
                          var i =
                            (!a && (r || n !== l)) ||
                            ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
                          return (t = null), i;
                        },
                      ];
                    c < o;
                    c++
                  )
                    if ((n = r.relative[e[c].type])) f = [xe(we(f), n)];
                    else {
                      if (
                        (n = r.filter[e[c].type].apply(null, e[c].matches))[x]
                      ) {
                        for (i = ++c; i < o && !r.relative[e[i].type]; i++);
                        return Te(
                          1 < c && we(f),
                          1 < c &&
                            be(
                              e
                                .slice(0, c - 1)
                                .concat({
                                  value: " " === e[c - 2].type ? "*" : "",
                                })
                            ).replace(z, "$1"),
                          n,
                          c < i && Pe(e.slice(c, i)),
                          i < o && Pe((e = e.slice(i))),
                          i < o && be(e)
                        );
                      }
                      f.push(n);
                    }
                  return we(f);
                }
                return (
                  (ye.prototype = r.filters = r.pseudos),
                  (r.setFilters = new ye()),
                  (a = se.tokenize =
                    function (e, t) {
                      var n,
                        i,
                        o,
                        a,
                        s,
                        c,
                        l,
                        u = E[e + " "];
                      if (u) return t ? 0 : u.slice(0);
                      for (s = e, c = [], l = r.preFilter; s; ) {
                        for (a in ((n && !(i = U.exec(s))) ||
                          (i && (s = s.slice(i[0].length) || s),
                          c.push((o = []))),
                        (n = !1),
                        (i = $.exec(s)) &&
                          ((n = i.shift()),
                          o.push({ value: n, type: i[0].replace(z, " ") }),
                          (s = s.slice(n.length))),
                        r.filter))
                          !(i = _[a].exec(s)) ||
                            (l[a] && !(i = l[a](i))) ||
                            ((n = i.shift()),
                            o.push({ value: n, type: a, matches: i }),
                            (s = s.slice(n.length)));
                        if (!n) break;
                      }
                      return t ? s.length : s ? se.error(e) : E(e, c).slice(0);
                    }),
                  (s = se.compile =
                    function (e, t) {
                      var n,
                        i,
                        o,
                        s,
                        c,
                        u,
                        d = [],
                        h = [],
                        v = S[e + " "];
                      if (!v) {
                        for (t || (t = a(e)), n = t.length; n--; )
                          (v = Pe(t[n]))[x] ? d.push(v) : h.push(v);
                        (v = S(
                          e,
                          ((i = h),
                          (s = 0 < (o = d).length),
                          (c = 0 < i.length),
                          (u = function (e, t, n, a, u) {
                            var d,
                              h,
                              v,
                              m = 0,
                              y = "0",
                              b = e && [],
                              x = [],
                              w = l,
                              T = e || (c && r.find.TAG("*", u)),
                              P = (C += null == w ? 1 : Math.random() || 0.1),
                              E = T.length;
                            for (
                              u && (l = t == p || t || u);
                              y !== E && null != (d = T[y]);
                              y++
                            ) {
                              if (c && d) {
                                for (
                                  h = 0,
                                    t ||
                                      d.ownerDocument == p ||
                                      (f(d), (n = !g));
                                  (v = i[h++]);

                                )
                                  if (v(d, t || p, n)) {
                                    a.push(d);
                                    break;
                                  }
                                u && (C = P);
                              }
                              s && ((d = !v && d) && m--, e && b.push(d));
                            }
                            if (((m += y), s && y !== m)) {
                              for (h = 0; (v = o[h++]); ) v(b, x, t, n);
                              if (e) {
                                if (0 < m)
                                  for (; y--; )
                                    b[y] || x[y] || (x[y] = k.call(a));
                                x = Ce(x);
                              }
                              L.apply(a, x),
                                u &&
                                  !e &&
                                  0 < x.length &&
                                  1 < m + o.length &&
                                  se.uniqueSort(a);
                            }
                            return u && ((C = P), (l = w)), b;
                          }),
                          s ? le(u) : u)
                        )).selector = e;
                      }
                      return v;
                    }),
                  (c = se.select =
                    function (e, t, n, i) {
                      var o,
                        c,
                        l,
                        u,
                        d,
                        f = "function" == typeof e && e,
                        p = !i && a((e = f.selector || e));
                      if (((n = n || []), 1 === p.length)) {
                        if (
                          2 < (c = p[0] = p[0].slice(0)).length &&
                          "ID" === (l = c[0]).type &&
                          9 === t.nodeType &&
                          g &&
                          r.relative[c[1].type]
                        ) {
                          if (
                            !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                              [])[0])
                          )
                            return n;
                          f && (t = t.parentNode),
                            (e = e.slice(c.shift().value.length));
                        }
                        for (
                          o = _.needsContext.test(e) ? 0 : c.length;
                          o-- && ((l = c[o]), !r.relative[(u = l.type)]);

                        )
                          if (
                            (d = r.find[u]) &&
                            (i = d(
                              l.matches[0].replace(te, ne),
                              (ee.test(c[0].type) && me(t.parentNode)) || t
                            ))
                          ) {
                            if ((c.splice(o, 1), !(e = i.length && be(c))))
                              return L.apply(n, i), n;
                            break;
                          }
                      }
                      return (
                        (f || s(e, p))(
                          i,
                          t,
                          !g,
                          n,
                          !t || (ee.test(e) && me(t.parentNode)) || t
                        ),
                        n
                      );
                    }),
                  (n.sortStable = x.split("").sort(I).join("") === x),
                  (n.detectDuplicates = !!d),
                  f(),
                  (n.sortDetached = ue(function (e) {
                    return (
                      1 & e.compareDocumentPosition(p.createElement("fieldset"))
                    );
                  })),
                  ue(function (e) {
                    return (
                      (e.innerHTML = "<a href='#'></a>"),
                      "#" === e.firstChild.getAttribute("href")
                    );
                  }) ||
                    de("type|href|height|width", function (e, t, n) {
                      if (!n)
                        return e.getAttribute(
                          t,
                          "type" === t.toLowerCase() ? 1 : 2
                        );
                    }),
                  (n.attributes &&
                    ue(function (e) {
                      return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                      );
                    })) ||
                    de("value", function (e, t, n) {
                      if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                    }),
                  ue(function (e) {
                    return null == e.getAttribute("disabled");
                  }) ||
                    de(O, function (e, t, n) {
                      var r;
                      if (!n)
                        return !0 === e[t]
                          ? t.toLowerCase()
                          : (r = e.getAttributeNode(t)) && r.specified
                          ? r.value
                          : null;
                    }),
                  se
                );
              })(e);
              (C.find = P),
                (C.expr = P.selectors),
                (C.expr[":"] = C.expr.pseudos),
                (C.uniqueSort = C.unique = P.uniqueSort),
                (C.text = P.getText),
                (C.isXMLDoc = P.isXML),
                (C.contains = P.contains),
                (C.escapeSelector = P.escape);
              var E = function (e, t, n) {
                  for (
                    var r = [], i = void 0 !== n;
                    (e = e[t]) && 9 !== e.nodeType;

                  )
                    if (1 === e.nodeType) {
                      if (i && C(e).is(n)) break;
                      r.push(e);
                    }
                  return r;
                },
                S = function (e, t) {
                  for (var n = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && n.push(e);
                  return n;
                },
                H = C.expr.match.needsContext;
              function I(e, t) {
                return (
                  e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                );
              }
              var A =
                /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
              function D(e, t, n) {
                return g(t)
                  ? C.grep(e, function (e, r) {
                      return !!t.call(e, r, e) !== n;
                    })
                  : t.nodeType
                  ? C.grep(e, function (e) {
                      return (e === t) !== n;
                    })
                  : "string" != typeof t
                  ? C.grep(e, function (e) {
                      return -1 < c.call(t, e) !== n;
                    })
                  : C.filter(t, e, n);
              }
              (C.filter = function (e, t, n) {
                var r = t[0];
                return (
                  n && (e = ":not(" + e + ")"),
                  1 === t.length && 1 === r.nodeType
                    ? C.find.matchesSelector(r, e)
                      ? [r]
                      : []
                    : C.find.matches(
                        e,
                        C.grep(t, function (e) {
                          return 1 === e.nodeType;
                        })
                      )
                );
              }),
                C.fn.extend({
                  find: function (e) {
                    var t,
                      n,
                      r = this.length,
                      i = this;
                    if ("string" != typeof e)
                      return this.pushStack(
                        C(e).filter(function () {
                          for (t = 0; t < r; t++)
                            if (C.contains(i[t], this)) return !0;
                        })
                      );
                    for (n = this.pushStack([]), t = 0; t < r; t++)
                      C.find(e, i[t], n);
                    return 1 < r ? C.uniqueSort(n) : n;
                  },
                  filter: function (e) {
                    return this.pushStack(D(this, e || [], !1));
                  },
                  not: function (e) {
                    return this.pushStack(D(this, e || [], !0));
                  },
                  is: function (e) {
                    return !!D(
                      this,
                      "string" == typeof e && H.test(e) ? C(e) : e || [],
                      !1
                    ).length;
                  },
                });
              var k,
                j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
              ((C.fn.init = function (e, t, n) {
                var r, i;
                if (!e) return this;
                if (((n = n || k), "string" == typeof e)) {
                  if (
                    !(r =
                      "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                        ? [null, e, null]
                        : j.exec(e)) ||
                    (!r[1] && t)
                  )
                    return !t || t.jquery
                      ? (t || n).find(e)
                      : this.constructor(t).find(e);
                  if (r[1]) {
                    if (
                      ((t = t instanceof C ? t[0] : t),
                      C.merge(
                        this,
                        C.parseHTML(
                          r[1],
                          t && t.nodeType ? t.ownerDocument || t : m,
                          !0
                        )
                      ),
                      A.test(r[1]) && C.isPlainObject(t))
                    )
                      for (r in t)
                        g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                  }
                  return (
                    (i = m.getElementById(r[2])) &&
                      ((this[0] = i), (this.length = 1)),
                    this
                  );
                }
                return e.nodeType
                  ? ((this[0] = e), (this.length = 1), this)
                  : g(e)
                  ? void 0 !== n.ready
                    ? n.ready(e)
                    : e(C)
                  : C.makeArray(e, this);
              }).prototype = C.fn),
                (k = C(m));
              var L = /^(?:parents|prev(?:Until|All))/,
                N = { children: !0, contents: !0, next: !0, prev: !0 };
              function q(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
              }
              C.fn.extend({
                has: function (e) {
                  var t = C(e, this),
                    n = t.length;
                  return this.filter(function () {
                    for (var e = 0; e < n; e++)
                      if (C.contains(this, t[e])) return !0;
                  });
                },
                closest: function (e, t) {
                  var n,
                    r = 0,
                    i = this.length,
                    o = [],
                    a = "string" != typeof e && C(e);
                  if (!H.test(e))
                    for (; r < i; r++)
                      for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (
                          n.nodeType < 11 &&
                          (a
                            ? -1 < a.index(n)
                            : 1 === n.nodeType && C.find.matchesSelector(n, e))
                        ) {
                          o.push(n);
                          break;
                        }
                  return this.pushStack(1 < o.length ? C.uniqueSort(o) : o);
                },
                index: function (e) {
                  return e
                    ? "string" == typeof e
                      ? c.call(C(e), this[0])
                      : c.call(this, e.jquery ? e[0] : e)
                    : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
                },
                add: function (e, t) {
                  return this.pushStack(
                    C.uniqueSort(C.merge(this.get(), C(e, t)))
                  );
                },
                addBack: function (e) {
                  return this.add(
                    null == e ? this.prevObject : this.prevObject.filter(e)
                  );
                },
              }),
                C.each(
                  {
                    parent: function (e) {
                      var t = e.parentNode;
                      return t && 11 !== t.nodeType ? t : null;
                    },
                    parents: function (e) {
                      return E(e, "parentNode");
                    },
                    parentsUntil: function (e, t, n) {
                      return E(e, "parentNode", n);
                    },
                    next: function (e) {
                      return q(e, "nextSibling");
                    },
                    prev: function (e) {
                      return q(e, "previousSibling");
                    },
                    nextAll: function (e) {
                      return E(e, "nextSibling");
                    },
                    prevAll: function (e) {
                      return E(e, "previousSibling");
                    },
                    nextUntil: function (e, t, n) {
                      return E(e, "nextSibling", n);
                    },
                    prevUntil: function (e, t, n) {
                      return E(e, "previousSibling", n);
                    },
                    siblings: function (e) {
                      return S((e.parentNode || {}).firstChild, e);
                    },
                    children: function (e) {
                      return S(e.firstChild);
                    },
                    contents: function (e) {
                      return null != e.contentDocument && i(e.contentDocument)
                        ? e.contentDocument
                        : (I(e, "template") && (e = e.content || e),
                          C.merge([], e.childNodes));
                    },
                  },
                  function (e, t) {
                    C.fn[e] = function (n, r) {
                      var i = C.map(this, t, n);
                      return (
                        "Until" !== e.slice(-5) && (r = n),
                        r && "string" == typeof r && (i = C.filter(r, i)),
                        1 < this.length &&
                          (N[e] || C.uniqueSort(i), L.test(e) && i.reverse()),
                        this.pushStack(i)
                      );
                    };
                  }
                );
              var O = /[^\x20\t\r\n\f]+/g;
              function F(e) {
                return e;
              }
              function M(e) {
                throw e;
              }
              function R(e, t, n, r) {
                var i;
                try {
                  e && g((i = e.promise))
                    ? i.call(e).done(t).fail(n)
                    : e && g((i = e.then))
                    ? i.call(e, t, n)
                    : t.apply(void 0, [e].slice(r));
                } catch (e) {
                  n.apply(void 0, [e]);
                }
              }
              (C.Callbacks = function (e) {
                var t, n;
                e =
                  "string" == typeof e
                    ? ((t = e),
                      (n = {}),
                      C.each(t.match(O) || [], function (e, t) {
                        n[t] = !0;
                      }),
                      n)
                    : C.extend({}, e);
                var r,
                  i,
                  o,
                  a,
                  s = [],
                  c = [],
                  l = -1,
                  u = function () {
                    for (a = a || e.once, o = r = !0; c.length; l = -1)
                      for (i = c.shift(); ++l < s.length; )
                        !1 === s[l].apply(i[0], i[1]) &&
                          e.stopOnFalse &&
                          ((l = s.length), (i = !1));
                    e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
                  },
                  d = {
                    add: function () {
                      return (
                        s &&
                          (i && !r && ((l = s.length - 1), c.push(i)),
                          (function t(n) {
                            C.each(n, function (n, r) {
                              g(r)
                                ? (e.unique && d.has(r)) || s.push(r)
                                : r && r.length && "string" !== x(r) && t(r);
                            });
                          })(arguments),
                          i && !r && u()),
                        this
                      );
                    },
                    remove: function () {
                      return (
                        C.each(arguments, function (e, t) {
                          for (var n; -1 < (n = C.inArray(t, s, n)); )
                            s.splice(n, 1), n <= l && l--;
                        }),
                        this
                      );
                    },
                    has: function (e) {
                      return e ? -1 < C.inArray(e, s) : 0 < s.length;
                    },
                    empty: function () {
                      return s && (s = []), this;
                    },
                    disable: function () {
                      return (a = c = []), (s = i = ""), this;
                    },
                    disabled: function () {
                      return !s;
                    },
                    lock: function () {
                      return (a = c = []), i || r || (s = i = ""), this;
                    },
                    locked: function () {
                      return !!a;
                    },
                    fireWith: function (e, t) {
                      return (
                        a ||
                          ((t = [e, (t = t || []).slice ? t.slice() : t]),
                          c.push(t),
                          r || u()),
                        this
                      );
                    },
                    fire: function () {
                      return d.fireWith(this, arguments), this;
                    },
                    fired: function () {
                      return !!o;
                    },
                  };
                return d;
              }),
                C.extend({
                  Deferred: function (t) {
                    var n = [
                        [
                          "notify",
                          "progress",
                          C.Callbacks("memory"),
                          C.Callbacks("memory"),
                          2,
                        ],
                        [
                          "resolve",
                          "done",
                          C.Callbacks("once memory"),
                          C.Callbacks("once memory"),
                          0,
                          "resolved",
                        ],
                        [
                          "reject",
                          "fail",
                          C.Callbacks("once memory"),
                          C.Callbacks("once memory"),
                          1,
                          "rejected",
                        ],
                      ],
                      r = "pending",
                      i = {
                        state: function () {
                          return r;
                        },
                        always: function () {
                          return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                          return i.then(null, e);
                        },
                        pipe: function () {
                          var e = arguments;
                          return C.Deferred(function (t) {
                            C.each(n, function (n, r) {
                              var i = g(e[r[4]]) && e[r[4]];
                              o[r[1]](function () {
                                var e = i && i.apply(this, arguments);
                                e && g(e.promise)
                                  ? e
                                      .promise()
                                      .progress(t.notify)
                                      .done(t.resolve)
                                      .fail(t.reject)
                                  : t[r[0] + "With"](this, i ? [e] : arguments);
                              });
                            }),
                              (e = null);
                          }).promise();
                        },
                        then: function (t, r, i) {
                          var o = 0;
                          function a(t, n, r, i) {
                            return function () {
                              var s = this,
                                c = arguments,
                                l = function () {
                                  var e, l;
                                  if (!(t < o)) {
                                    if ((e = r.apply(s, c)) === n.promise())
                                      throw new TypeError(
                                        "Thenable self-resolution"
                                      );
                                    (l =
                                      e &&
                                      ("object" == typeof e ||
                                        "function" == typeof e) &&
                                      e.then),
                                      g(l)
                                        ? i
                                          ? l.call(
                                              e,
                                              a(o, n, F, i),
                                              a(o, n, M, i)
                                            )
                                          : (o++,
                                            l.call(
                                              e,
                                              a(o, n, F, i),
                                              a(o, n, M, i),
                                              a(o, n, F, n.notifyWith)
                                            ))
                                        : (r !== F && ((s = void 0), (c = [e])),
                                          (i || n.resolveWith)(s, c));
                                  }
                                },
                                u = i
                                  ? l
                                  : function () {
                                      try {
                                        l();
                                      } catch (e) {
                                        C.Deferred.exceptionHook &&
                                          C.Deferred.exceptionHook(
                                            e,
                                            u.stackTrace
                                          ),
                                          o <= t + 1 &&
                                            (r !== M &&
                                              ((s = void 0), (c = [e])),
                                            n.rejectWith(s, c));
                                      }
                                    };
                              t
                                ? u()
                                : (C.Deferred.getStackHook &&
                                    (u.stackTrace = C.Deferred.getStackHook()),
                                  e.setTimeout(u));
                            };
                          }
                          return C.Deferred(function (e) {
                            n[0][3].add(a(0, e, g(i) ? i : F, e.notifyWith)),
                              n[1][3].add(a(0, e, g(t) ? t : F)),
                              n[2][3].add(a(0, e, g(r) ? r : M));
                          }).promise();
                        },
                        promise: function (e) {
                          return null != e ? C.extend(e, i) : i;
                        },
                      },
                      o = {};
                    return (
                      C.each(n, function (e, t) {
                        var a = t[2],
                          s = t[5];
                        (i[t[1]] = a.add),
                          s &&
                            a.add(
                              function () {
                                r = s;
                              },
                              n[3 - e][2].disable,
                              n[3 - e][3].disable,
                              n[0][2].lock,
                              n[0][3].lock
                            ),
                          a.add(t[3].fire),
                          (o[t[0]] = function () {
                            return (
                              o[t[0] + "With"](
                                this === o ? void 0 : this,
                                arguments
                              ),
                              this
                            );
                          }),
                          (o[t[0] + "With"] = a.fireWith);
                      }),
                      i.promise(o),
                      t && t.call(o, o),
                      o
                    );
                  },
                  when: function (e) {
                    var t = arguments.length,
                      n = t,
                      r = Array(n),
                      i = o.call(arguments),
                      a = C.Deferred(),
                      s = function (e) {
                        return function (n) {
                          (r[e] = this),
                            (i[e] =
                              1 < arguments.length ? o.call(arguments) : n),
                            --t || a.resolveWith(r, i);
                        };
                      };
                    if (
                      t <= 1 &&
                      (R(e, a.done(s(n)).resolve, a.reject, !t),
                      "pending" === a.state() || g(i[n] && i[n].then))
                    )
                      return a.then();
                    for (; n--; ) R(i[n], s(n), a.reject);
                    return a.promise();
                  },
                });
              var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
              (C.Deferred.exceptionHook = function (t, n) {
                e.console &&
                  e.console.warn &&
                  t &&
                  B.test(t.name) &&
                  e.console.warn(
                    "jQuery.Deferred exception: " + t.message,
                    t.stack,
                    n
                  );
              }),
                (C.readyException = function (t) {
                  e.setTimeout(function () {
                    throw t;
                  });
                });
              var Q = C.Deferred();
              function z() {
                m.removeEventListener("DOMContentLoaded", z),
                  e.removeEventListener("load", z),
                  C.ready();
              }
              (C.fn.ready = function (e) {
                return (
                  Q.then(e).catch(function (e) {
                    C.readyException(e);
                  }),
                  this
                );
              }),
                C.extend({
                  isReady: !1,
                  readyWait: 1,
                  ready: function (e) {
                    (!0 === e ? --C.readyWait : C.isReady) ||
                      ((C.isReady = !0) !== e && 0 < --C.readyWait) ||
                      Q.resolveWith(m, [C]);
                  },
                }),
                (C.ready.then = Q.then),
                "complete" === m.readyState ||
                ("loading" !== m.readyState && !m.documentElement.doScroll)
                  ? e.setTimeout(C.ready)
                  : (m.addEventListener("DOMContentLoaded", z),
                    e.addEventListener("load", z));
              var U = function (e, t, n, r, i, o, a) {
                  var s = 0,
                    c = e.length,
                    l = null == n;
                  if ("object" === x(n))
                    for (s in ((i = !0), n)) U(e, t, s, n[s], !0, o, a);
                  else if (
                    void 0 !== r &&
                    ((i = !0),
                    g(r) || (a = !0),
                    l &&
                      (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                          (t = function (e, t, n) {
                            return l.call(C(e), n);
                          }))),
                    t)
                  )
                    for (; s < c; s++)
                      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                  return i ? e : l ? t.call(e) : c ? t(e[0], n) : o;
                },
                $ = /^-ms-/,
                V = /-([a-z])/g;
              function X(e, t) {
                return t.toUpperCase();
              }
              function W(e) {
                return e.replace($, "ms-").replace(V, X);
              }
              var _ = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
              };
              function Y() {
                this.expando = C.expando + Y.uid++;
              }
              (Y.uid = 1),
                (Y.prototype = {
                  cache: function (e) {
                    var t = e[this.expando];
                    return (
                      t ||
                        ((t = {}),
                        _(e) &&
                          (e.nodeType
                            ? (e[this.expando] = t)
                            : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0,
                              }))),
                      t
                    );
                  },
                  set: function (e, t, n) {
                    var r,
                      i = this.cache(e);
                    if ("string" == typeof t) i[W(t)] = n;
                    else for (r in t) i[W(r)] = t[r];
                    return i;
                  },
                  get: function (e, t) {
                    return void 0 === t
                      ? this.cache(e)
                      : e[this.expando] && e[this.expando][W(t)];
                  },
                  access: function (e, t, n) {
                    return void 0 === t ||
                      (t && "string" == typeof t && void 0 === n)
                      ? this.get(e, t)
                      : (this.set(e, t, n), void 0 !== n ? n : t);
                  },
                  remove: function (e, t) {
                    var n,
                      r = e[this.expando];
                    if (void 0 !== r) {
                      if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                          ? t.map(W)
                          : (t = W(t)) in r
                          ? [t]
                          : t.match(O) || []).length;
                        for (; n--; ) delete r[t[n]];
                      }
                      (void 0 === t || C.isEmptyObject(r)) &&
                        (e.nodeType
                          ? (e[this.expando] = void 0)
                          : delete e[this.expando]);
                    }
                  },
                  hasData: function (e) {
                    var t = e[this.expando];
                    return void 0 !== t && !C.isEmptyObject(t);
                  },
                });
              var J = new Y(),
                G = new Y(),
                K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Z = /[A-Z]/g;
              function ee(e, t, n) {
                var r, i;
                if (void 0 === n && 1 === e.nodeType)
                  if (
                    ((r = "data-" + t.replace(Z, "-$&").toLowerCase()),
                    "string" == typeof (n = e.getAttribute(r)))
                  ) {
                    try {
                      n =
                        "true" === (i = n) ||
                        ("false" !== i &&
                          ("null" === i
                            ? null
                            : i === +i + ""
                            ? +i
                            : K.test(i)
                            ? JSON.parse(i)
                            : i));
                    } catch (e) {}
                    G.set(e, t, n);
                  } else n = void 0;
                return n;
              }
              C.extend({
                hasData: function (e) {
                  return G.hasData(e) || J.hasData(e);
                },
                data: function (e, t, n) {
                  return G.access(e, t, n);
                },
                removeData: function (e, t) {
                  G.remove(e, t);
                },
                _data: function (e, t, n) {
                  return J.access(e, t, n);
                },
                _removeData: function (e, t) {
                  J.remove(e, t);
                },
              }),
                C.fn.extend({
                  data: function (e, t) {
                    var n,
                      r,
                      i,
                      o = this[0],
                      a = o && o.attributes;
                    if (void 0 === e) {
                      if (
                        this.length &&
                        ((i = G.get(o)),
                        1 === o.nodeType && !J.get(o, "hasDataAttrs"))
                      ) {
                        for (n = a.length; n--; )
                          a[n] &&
                            0 === (r = a[n].name).indexOf("data-") &&
                            ((r = W(r.slice(5))), ee(o, r, i[r]));
                        J.set(o, "hasDataAttrs", !0);
                      }
                      return i;
                    }
                    return "object" == typeof e
                      ? this.each(function () {
                          G.set(this, e);
                        })
                      : U(
                          this,
                          function (t) {
                            var n;
                            if (o && void 0 === t)
                              return void 0 !== (n = G.get(o, e)) ||
                                void 0 !== (n = ee(o, e))
                                ? n
                                : void 0;
                            this.each(function () {
                              G.set(this, e, t);
                            });
                          },
                          null,
                          t,
                          1 < arguments.length,
                          null,
                          !0
                        );
                  },
                  removeData: function (e) {
                    return this.each(function () {
                      G.remove(this, e);
                    });
                  },
                }),
                C.extend({
                  queue: function (e, t, n) {
                    var r;
                    if (e)
                      return (
                        (t = (t || "fx") + "queue"),
                        (r = J.get(e, t)),
                        n &&
                          (!r || Array.isArray(n)
                            ? (r = J.access(e, t, C.makeArray(n)))
                            : r.push(n)),
                        r || []
                      );
                  },
                  dequeue: function (e, t) {
                    t = t || "fx";
                    var n = C.queue(e, t),
                      r = n.length,
                      i = n.shift(),
                      o = C._queueHooks(e, t);
                    "inprogress" === i && ((i = n.shift()), r--),
                      i &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(
                          e,
                          function () {
                            C.dequeue(e, t);
                          },
                          o
                        )),
                      !r && o && o.empty.fire();
                  },
                  _queueHooks: function (e, t) {
                    var n = t + "queueHooks";
                    return (
                      J.get(e, n) ||
                      J.access(e, n, {
                        empty: C.Callbacks("once memory").add(function () {
                          J.remove(e, [t + "queue", n]);
                        }),
                      })
                    );
                  },
                }),
                C.fn.extend({
                  queue: function (e, t) {
                    var n = 2;
                    return (
                      "string" != typeof e && ((t = e), (e = "fx"), n--),
                      arguments.length < n
                        ? C.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                            var n = C.queue(this, e, t);
                            C._queueHooks(this, e),
                              "fx" === e &&
                                "inprogress" !== n[0] &&
                                C.dequeue(this, e);
                          })
                    );
                  },
                  dequeue: function (e) {
                    return this.each(function () {
                      C.dequeue(this, e);
                    });
                  },
                  clearQueue: function (e) {
                    return this.queue(e || "fx", []);
                  },
                  promise: function (e, t) {
                    var n,
                      r = 1,
                      i = C.Deferred(),
                      o = this,
                      a = this.length,
                      s = function () {
                        --r || i.resolveWith(o, [o]);
                      };
                    for (
                      "string" != typeof e && ((t = e), (e = void 0)),
                        e = e || "fx";
                      a--;

                    )
                      (n = J.get(o[a], e + "queueHooks")) &&
                        n.empty &&
                        (r++, n.empty.add(s));
                    return s(), i.promise(t);
                  },
                });
              var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
                re = ["Top", "Right", "Bottom", "Left"],
                ie = m.documentElement,
                oe = function (e) {
                  return C.contains(e.ownerDocument, e);
                },
                ae = { composed: !0 };
              ie.getRootNode &&
                (oe = function (e) {
                  return (
                    C.contains(e.ownerDocument, e) ||
                    e.getRootNode(ae) === e.ownerDocument
                  );
                });
              var se = function (e, t) {
                return (
                  "none" === (e = t || e).style.display ||
                  ("" === e.style.display &&
                    oe(e) &&
                    "none" === C.css(e, "display"))
                );
              };
              function ce(e, t, n, r) {
                var i,
                  o,
                  a = 20,
                  s = r
                    ? function () {
                        return r.cur();
                      }
                    : function () {
                        return C.css(e, t, "");
                      },
                  c = s(),
                  l = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
                  u =
                    e.nodeType &&
                    (C.cssNumber[t] || ("px" !== l && +c)) &&
                    ne.exec(C.css(e, t));
                if (u && u[3] !== l) {
                  for (c /= 2, l = l || u[3], u = +c || 1; a--; )
                    C.style(e, t, u + l),
                      (1 - o) * (1 - (o = s() / c || 0.5)) <= 0 && (a = 0),
                      (u /= o);
                  (u *= 2), C.style(e, t, u + l), (n = n || []);
                }
                return (
                  n &&
                    ((u = +u || +c || 0),
                    (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                    r && ((r.unit = l), (r.start = u), (r.end = i))),
                  i
                );
              }
              var le = {};
              function ue(e, t) {
                for (
                  var n, r, i, o, a, s, c, l = [], u = 0, d = e.length;
                  u < d;
                  u++
                )
                  (r = e[u]).style &&
                    ((n = r.style.display),
                    t
                      ? ("none" === n &&
                          ((l[u] = J.get(r, "display") || null),
                          l[u] || (r.style.display = "")),
                        "" === r.style.display &&
                          se(r) &&
                          (l[u] =
                            ((c = a = o = void 0),
                            (a = (i = r).ownerDocument),
                            (s = i.nodeName),
                            (c = le[s]) ||
                              ((o = a.body.appendChild(a.createElement(s))),
                              (c = C.css(o, "display")),
                              o.parentNode.removeChild(o),
                              "none" === c && (c = "block"),
                              (le[s] = c)))))
                      : "none" !== n &&
                        ((l[u] = "none"), J.set(r, "display", n)));
                for (u = 0; u < d; u++)
                  null != l[u] && (e[u].style.display = l[u]);
                return e;
              }
              C.fn.extend({
                show: function () {
                  return ue(this, !0);
                },
                hide: function () {
                  return ue(this);
                },
                toggle: function (e) {
                  return "boolean" == typeof e
                    ? e
                      ? this.show()
                      : this.hide()
                    : this.each(function () {
                        se(this) ? C(this).show() : C(this).hide();
                      });
                },
              });
              var de,
                fe,
                pe = /^(?:checkbox|radio)$/i,
                he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ge = /^$|^module$|\/(?:java|ecma)script/i;
              (de = m
                .createDocumentFragment()
                .appendChild(m.createElement("div"))),
                (fe = m.createElement("input")).setAttribute("type", "radio"),
                fe.setAttribute("checked", "checked"),
                fe.setAttribute("name", "t"),
                de.appendChild(fe),
                (h.checkClone = de
                  .cloneNode(!0)
                  .cloneNode(!0).lastChild.checked),
                (de.innerHTML = "<textarea>x</textarea>"),
                (h.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue),
                (de.innerHTML = "<option></option>"),
                (h.option = !!de.lastChild);
              var ve = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
              };
              function me(e, t) {
                var n;
                return (
                  (n =
                    void 0 !== e.getElementsByTagName
                      ? e.getElementsByTagName(t || "*")
                      : void 0 !== e.querySelectorAll
                      ? e.querySelectorAll(t || "*")
                      : []),
                  void 0 === t || (t && I(e, t)) ? C.merge([e], n) : n
                );
              }
              function ye(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
              }
              (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
                (ve.th = ve.td),
                h.option ||
                  (ve.optgroup = ve.option =
                    [1, "<select multiple='multiple'>", "</select>"]);
              var be = /<|&#?\w+;/;
              function xe(e, t, n, r, i) {
                for (
                  var o,
                    a,
                    s,
                    c,
                    l,
                    u,
                    d = t.createDocumentFragment(),
                    f = [],
                    p = 0,
                    h = e.length;
                  p < h;
                  p++
                )
                  if ((o = e[p]) || 0 === o)
                    if ("object" === x(o)) C.merge(f, o.nodeType ? [o] : o);
                    else if (be.test(o)) {
                      for (
                        a = a || d.appendChild(t.createElement("div")),
                          s = (he.exec(o) || ["", ""])[1].toLowerCase(),
                          c = ve[s] || ve._default,
                          a.innerHTML = c[1] + C.htmlPrefilter(o) + c[2],
                          u = c[0];
                        u--;

                      )
                        a = a.lastChild;
                      C.merge(f, a.childNodes),
                        ((a = d.firstChild).textContent = "");
                    } else f.push(t.createTextNode(o));
                for (d.textContent = "", p = 0; (o = f[p++]); )
                  if (r && -1 < C.inArray(o, r)) i && i.push(o);
                  else if (
                    ((l = oe(o)),
                    (a = me(d.appendChild(o), "script")),
                    l && ye(a),
                    n)
                  )
                    for (u = 0; (o = a[u++]); )
                      ge.test(o.type || "") && n.push(o);
                return d;
              }
              var we = /^key/,
                Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Te = /^([^.]*)(?:\.(.+)|)/;
              function Pe() {
                return !0;
              }
              function Ee() {
                return !1;
              }
              function Se(e, t) {
                return (
                  (e ===
                    (function () {
                      try {
                        return m.activeElement;
                      } catch (e) {}
                    })()) ==
                  ("focus" === t)
                );
              }
              function He(e, t, n, r, i, o) {
                var a, s;
                if ("object" == typeof t) {
                  for (s in ("string" != typeof n &&
                    ((r = r || n), (n = void 0)),
                  t))
                    He(e, s, n, r, t[s], o);
                  return e;
                }
                if (
                  (null == r && null == i
                    ? ((i = n), (r = n = void 0))
                    : null == i &&
                      ("string" == typeof n
                        ? ((i = r), (r = void 0))
                        : ((i = r), (r = n), (n = void 0))),
                  !1 === i)
                )
                  i = Ee;
                else if (!i) return e;
                return (
                  1 === o &&
                    ((a = i),
                    ((i = function (e) {
                      return C().off(e), a.apply(this, arguments);
                    }).guid = a.guid || (a.guid = C.guid++))),
                  e.each(function () {
                    C.event.add(this, t, i, r, n);
                  })
                );
              }
              function Ie(e, t, n) {
                n
                  ? (J.set(e, t, !1),
                    C.event.add(e, t, {
                      namespace: !1,
                      handler: function (e) {
                        var r,
                          i,
                          a = J.get(this, t);
                        if (1 & e.isTrigger && this[t]) {
                          if (a.length)
                            (C.event.special[t] || {}).delegateType &&
                              e.stopPropagation();
                          else if (
                            ((a = o.call(arguments)),
                            J.set(this, t, a),
                            (r = n(this, t)),
                            this[t](),
                            a !== (i = J.get(this, t)) || r
                              ? J.set(this, t, !1)
                              : (i = {}),
                            a !== i)
                          )
                            return (
                              e.stopImmediatePropagation(),
                              e.preventDefault(),
                              i.value
                            );
                        } else
                          a.length &&
                            (J.set(this, t, {
                              value: C.event.trigger(
                                C.extend(a[0], C.Event.prototype),
                                a.slice(1),
                                this
                              ),
                            }),
                            e.stopImmediatePropagation());
                      },
                    }))
                  : void 0 === J.get(e, t) && C.event.add(e, t, Pe);
              }
              (C.event = {
                global: {},
                add: function (e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    c,
                    l,
                    u,
                    d,
                    f,
                    p,
                    h,
                    g,
                    v = J.get(e);
                  if (_(e))
                    for (
                      n.handler && ((n = (o = n).handler), (i = o.selector)),
                        i && C.find.matchesSelector(ie, i),
                        n.guid || (n.guid = C.guid++),
                        (c = v.events) || (c = v.events = Object.create(null)),
                        (a = v.handle) ||
                          (a = v.handle =
                            function (t) {
                              return void 0 !== C &&
                                C.event.triggered !== t.type
                                ? C.event.dispatch.apply(e, arguments)
                                : void 0;
                            }),
                        l = (t = (t || "").match(O) || [""]).length;
                      l--;

                    )
                      (p = g = (s = Te.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        p &&
                          ((d = C.event.special[p] || {}),
                          (p = (i ? d.delegateType : d.bindType) || p),
                          (d = C.event.special[p] || {}),
                          (u = C.extend(
                            {
                              type: p,
                              origType: g,
                              data: r,
                              handler: n,
                              guid: n.guid,
                              selector: i,
                              needsContext:
                                i && C.expr.match.needsContext.test(i),
                              namespace: h.join("."),
                            },
                            o
                          )),
                          (f = c[p]) ||
                            (((f = c[p] = []).delegateCount = 0),
                            (d.setup && !1 !== d.setup.call(e, r, h, a)) ||
                              (e.addEventListener && e.addEventListener(p, a))),
                          d.add &&
                            (d.add.call(e, u),
                            u.handler.guid || (u.handler.guid = n.guid)),
                          i ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                          (C.event.global[p] = !0));
                },
                remove: function (e, t, n, r, i) {
                  var o,
                    a,
                    s,
                    c,
                    l,
                    u,
                    d,
                    f,
                    p,
                    h,
                    g,
                    v = J.hasData(e) && J.get(e);
                  if (v && (c = v.events)) {
                    for (l = (t = (t || "").match(O) || [""]).length; l--; )
                      if (
                        ((p = g = (s = Te.exec(t[l]) || [])[1]),
                        (h = (s[2] || "").split(".").sort()),
                        p)
                      ) {
                        for (
                          d = C.event.special[p] || {},
                            f =
                              c[(p = (r ? d.delegateType : d.bindType) || p)] ||
                              [],
                            s =
                              s[2] &&
                              new RegExp(
                                "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                              ),
                            a = o = f.length;
                          o--;

                        )
                          (u = f[o]),
                            (!i && g !== u.origType) ||
                              (n && n.guid !== u.guid) ||
                              (s && !s.test(u.namespace)) ||
                              (r &&
                                r !== u.selector &&
                                ("**" !== r || !u.selector)) ||
                              (f.splice(o, 1),
                              u.selector && f.delegateCount--,
                              d.remove && d.remove.call(e, u));
                        a &&
                          !f.length &&
                          ((d.teardown &&
                            !1 !== d.teardown.call(e, h, v.handle)) ||
                            C.removeEvent(e, p, v.handle),
                          delete c[p]);
                      } else for (p in c) C.event.remove(e, p + t[l], n, r, !0);
                    C.isEmptyObject(c) && J.remove(e, "handle events");
                  }
                },
                dispatch: function (e) {
                  var t,
                    n,
                    r,
                    i,
                    o,
                    a,
                    s = new Array(arguments.length),
                    c = C.event.fix(e),
                    l =
                      (J.get(this, "events") || Object.create(null))[c.type] ||
                      [],
                    u = C.event.special[c.type] || {};
                  for (s[0] = c, t = 1; t < arguments.length; t++)
                    s[t] = arguments[t];
                  if (
                    ((c.delegateTarget = this),
                    !u.preDispatch || !1 !== u.preDispatch.call(this, c))
                  ) {
                    for (
                      a = C.event.handlers.call(this, c, l), t = 0;
                      (i = a[t++]) && !c.isPropagationStopped();

                    )
                      for (
                        c.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) &&
                        !c.isImmediatePropagationStopped();

                      )
                        (c.rnamespace &&
                          !1 !== o.namespace &&
                          !c.rnamespace.test(o.namespace)) ||
                          ((c.handleObj = o),
                          (c.data = o.data),
                          void 0 !==
                            (r = (
                              (C.event.special[o.origType] || {}).handle ||
                              o.handler
                            ).apply(i.elem, s)) &&
                            !1 === (c.result = r) &&
                            (c.preventDefault(), c.stopPropagation()));
                    return (
                      u.postDispatch && u.postDispatch.call(this, c), c.result
                    );
                  }
                },
                handlers: function (e, t) {
                  var n,
                    r,
                    i,
                    o,
                    a,
                    s = [],
                    c = t.delegateCount,
                    l = e.target;
                  if (c && l.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; l !== this; l = l.parentNode || this)
                      if (
                        1 === l.nodeType &&
                        ("click" !== e.type || !0 !== l.disabled)
                      ) {
                        for (o = [], a = {}, n = 0; n < c; n++)
                          void 0 === a[(i = (r = t[n]).selector + " ")] &&
                            (a[i] = r.needsContext
                              ? -1 < C(i, this).index(l)
                              : C.find(i, this, null, [l]).length),
                            a[i] && o.push(r);
                        o.length && s.push({ elem: l, handlers: o });
                      }
                  return (
                    (l = this),
                    c < t.length && s.push({ elem: l, handlers: t.slice(c) }),
                    s
                  );
                },
                addProp: function (e, t) {
                  Object.defineProperty(C.Event.prototype, e, {
                    enumerable: !0,
                    configurable: !0,
                    get: g(t)
                      ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                        }
                      : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                        },
                    set: function (t) {
                      Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t,
                      });
                    },
                  });
                },
                fix: function (e) {
                  return e[C.expando] ? e : new C.Event(e);
                },
                special: {
                  load: { noBubble: !0 },
                  click: {
                    setup: function (e) {
                      var t = this || e;
                      return (
                        pe.test(t.type) &&
                          t.click &&
                          I(t, "input") &&
                          Ie(t, "click", Pe),
                        !1
                      );
                    },
                    trigger: function (e) {
                      var t = this || e;
                      return (
                        pe.test(t.type) &&
                          t.click &&
                          I(t, "input") &&
                          Ie(t, "click"),
                        !0
                      );
                    },
                    _default: function (e) {
                      var t = e.target;
                      return (
                        (pe.test(t.type) &&
                          t.click &&
                          I(t, "input") &&
                          J.get(t, "click")) ||
                        I(t, "a")
                      );
                    },
                  },
                  beforeunload: {
                    postDispatch: function (e) {
                      void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                    },
                  },
                },
              }),
                (C.removeEvent = function (e, t, n) {
                  e.removeEventListener && e.removeEventListener(t, n);
                }),
                (C.Event = function (e, t) {
                  if (!(this instanceof C.Event)) return new C.Event(e, t);
                  e && e.type
                    ? ((this.originalEvent = e),
                      (this.type = e.type),
                      (this.isDefaultPrevented =
                        e.defaultPrevented ||
                        (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? Pe
                          : Ee),
                      (this.target =
                        e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                      (this.currentTarget = e.currentTarget),
                      (this.relatedTarget = e.relatedTarget))
                    : (this.type = e),
                    t && C.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || Date.now()),
                    (this[C.expando] = !0);
                }),
                (C.Event.prototype = {
                  constructor: C.Event,
                  isDefaultPrevented: Ee,
                  isPropagationStopped: Ee,
                  isImmediatePropagationStopped: Ee,
                  isSimulated: !1,
                  preventDefault: function () {
                    var e = this.originalEvent;
                    (this.isDefaultPrevented = Pe),
                      e && !this.isSimulated && e.preventDefault();
                  },
                  stopPropagation: function () {
                    var e = this.originalEvent;
                    (this.isPropagationStopped = Pe),
                      e && !this.isSimulated && e.stopPropagation();
                  },
                  stopImmediatePropagation: function () {
                    var e = this.originalEvent;
                    (this.isImmediatePropagationStopped = Pe),
                      e && !this.isSimulated && e.stopImmediatePropagation(),
                      this.stopPropagation();
                  },
                }),
                C.each(
                  {
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: function (e) {
                      var t = e.button;
                      return null == e.which && we.test(e.type)
                        ? null != e.charCode
                          ? e.charCode
                          : e.keyCode
                        : !e.which && void 0 !== t && Ce.test(e.type)
                        ? 1 & t
                          ? 1
                          : 2 & t
                          ? 3
                          : 4 & t
                          ? 2
                          : 0
                        : e.which;
                    },
                  },
                  C.event.addProp
                ),
                C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                  C.event.special[e] = {
                    setup: function () {
                      return Ie(this, e, Se), !1;
                    },
                    trigger: function () {
                      return Ie(this, e), !0;
                    },
                    delegateType: t,
                  };
                }),
                C.each(
                  {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout",
                  },
                  function (e, t) {
                    C.event.special[e] = {
                      delegateType: t,
                      bindType: t,
                      handle: function (e) {
                        var n,
                          r = e.relatedTarget,
                          i = e.handleObj;
                        return (
                          (r && (r === this || C.contains(this, r))) ||
                            ((e.type = i.origType),
                            (n = i.handler.apply(this, arguments)),
                            (e.type = t)),
                          n
                        );
                      },
                    };
                  }
                ),
                C.fn.extend({
                  on: function (e, t, n, r) {
                    return He(this, e, t, n, r);
                  },
                  one: function (e, t, n, r) {
                    return He(this, e, t, n, r, 1);
                  },
                  off: function (e, t, n) {
                    var r, i;
                    if (e && e.preventDefault && e.handleObj)
                      return (
                        (r = e.handleObj),
                        C(e.delegateTarget).off(
                          r.namespace
                            ? r.origType + "." + r.namespace
                            : r.origType,
                          r.selector,
                          r.handler
                        ),
                        this
                      );
                    if ("object" == typeof e) {
                      for (i in e) this.off(i, t, e[i]);
                      return this;
                    }
                    return (
                      (!1 !== t && "function" != typeof t) ||
                        ((n = t), (t = void 0)),
                      !1 === n && (n = Ee),
                      this.each(function () {
                        C.event.remove(this, e, n, t);
                      })
                    );
                  },
                });
              var Ae = /<script|<style|<link/i,
                De = /checked\s*(?:[^=]|=\s*.checked.)/i,
                ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
              function je(e, t) {
                return (
                  (I(e, "table") &&
                    I(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                    C(e).children("tbody")[0]) ||
                  e
                );
              }
              function Le(e) {
                return (
                  (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
                );
              }
              function Ne(e) {
                return (
                  "true/" === (e.type || "").slice(0, 5)
                    ? (e.type = e.type.slice(5))
                    : e.removeAttribute("type"),
                  e
                );
              }
              function qe(e, t) {
                var n, r, i, o, a, s;
                if (1 === t.nodeType) {
                  if (J.hasData(e) && (s = J.get(e).events))
                    for (i in (J.remove(t, "handle events"), s))
                      for (n = 0, r = s[i].length; n < r; n++)
                        C.event.add(t, i, s[i][n]);
                  G.hasData(e) &&
                    ((o = G.access(e)), (a = C.extend({}, o)), G.set(t, a));
                }
              }
              function Oe(e, t, n, r) {
                t = a(t);
                var i,
                  o,
                  s,
                  c,
                  l,
                  u,
                  d = 0,
                  f = e.length,
                  p = f - 1,
                  v = t[0],
                  m = g(v);
                if (
                  m ||
                  (1 < f && "string" == typeof v && !h.checkClone && De.test(v))
                )
                  return e.each(function (i) {
                    var o = e.eq(i);
                    m && (t[0] = v.call(this, i, o.html())), Oe(o, t, n, r);
                  });
                if (
                  f &&
                  ((o = (i = xe(t, e[0].ownerDocument, !1, e, r)).firstChild),
                  1 === i.childNodes.length && (i = o),
                  o || r)
                ) {
                  for (c = (s = C.map(me(i, "script"), Le)).length; d < f; d++)
                    (l = i),
                      d !== p &&
                        ((l = C.clone(l, !0, !0)),
                        c && C.merge(s, me(l, "script"))),
                      n.call(e[d], l, d);
                  if (c)
                    for (
                      u = s[s.length - 1].ownerDocument, C.map(s, Ne), d = 0;
                      d < c;
                      d++
                    )
                      (l = s[d]),
                        ge.test(l.type || "") &&
                          !J.access(l, "globalEval") &&
                          C.contains(u, l) &&
                          (l.src && "module" !== (l.type || "").toLowerCase()
                            ? C._evalUrl &&
                              !l.noModule &&
                              C._evalUrl(
                                l.src,
                                { nonce: l.nonce || l.getAttribute("nonce") },
                                u
                              )
                            : b(l.textContent.replace(ke, ""), l, u));
                }
                return e;
              }
              function Fe(e, t, n) {
                for (
                  var r, i = t ? C.filter(t, e) : e, o = 0;
                  null != (r = i[o]);
                  o++
                )
                  n || 1 !== r.nodeType || C.cleanData(me(r)),
                    r.parentNode &&
                      (n && oe(r) && ye(me(r, "script")),
                      r.parentNode.removeChild(r));
                return e;
              }
              C.extend({
                htmlPrefilter: function (e) {
                  return e;
                },
                clone: function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    c,
                    l,
                    u = e.cloneNode(!0),
                    d = oe(e);
                  if (
                    !(
                      h.noCloneChecked ||
                      (1 !== e.nodeType && 11 !== e.nodeType) ||
                      C.isXMLDoc(e)
                    )
                  )
                    for (a = me(u), r = 0, i = (o = me(e)).length; r < i; r++)
                      (s = o[r]),
                        "input" === (l = (c = a[r]).nodeName.toLowerCase()) &&
                        pe.test(s.type)
                          ? (c.checked = s.checked)
                          : ("input" !== l && "textarea" !== l) ||
                            (c.defaultValue = s.defaultValue);
                  if (t)
                    if (n)
                      for (
                        o = o || me(e), a = a || me(u), r = 0, i = o.length;
                        r < i;
                        r++
                      )
                        qe(o[r], a[r]);
                    else qe(e, u);
                  return (
                    0 < (a = me(u, "script")).length &&
                      ye(a, !d && me(e, "script")),
                    u
                  );
                },
                cleanData: function (e) {
                  for (
                    var t, n, r, i = C.event.special, o = 0;
                    void 0 !== (n = e[o]);
                    o++
                  )
                    if (_(n)) {
                      if ((t = n[J.expando])) {
                        if (t.events)
                          for (r in t.events)
                            i[r]
                              ? C.event.remove(n, r)
                              : C.removeEvent(n, r, t.handle);
                        n[J.expando] = void 0;
                      }
                      n[G.expando] && (n[G.expando] = void 0);
                    }
                },
              }),
                C.fn.extend({
                  detach: function (e) {
                    return Fe(this, e, !0);
                  },
                  remove: function (e) {
                    return Fe(this, e);
                  },
                  text: function (e) {
                    return U(
                      this,
                      function (e) {
                        return void 0 === e
                          ? C.text(this)
                          : this.empty().each(function () {
                              (1 !== this.nodeType &&
                                11 !== this.nodeType &&
                                9 !== this.nodeType) ||
                                (this.textContent = e);
                            });
                      },
                      null,
                      e,
                      arguments.length
                    );
                  },
                  append: function () {
                    return Oe(this, arguments, function (e) {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        je(this, e).appendChild(e);
                    });
                  },
                  prepend: function () {
                    return Oe(this, arguments, function (e) {
                      if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                      ) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild);
                      }
                    });
                  },
                  before: function () {
                    return Oe(this, arguments, function (e) {
                      this.parentNode && this.parentNode.insertBefore(e, this);
                    });
                  },
                  after: function () {
                    return Oe(this, arguments, function (e) {
                      this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                    });
                  },
                  empty: function () {
                    for (var e, t = 0; null != (e = this[t]); t++)
                      1 === e.nodeType &&
                        (C.cleanData(me(e, !1)), (e.textContent = ""));
                    return this;
                  },
                  clone: function (e, t) {
                    return (
                      (e = null != e && e),
                      (t = null == t ? e : t),
                      this.map(function () {
                        return C.clone(this, e, t);
                      })
                    );
                  },
                  html: function (e) {
                    return U(
                      this,
                      function (e) {
                        var t = this[0] || {},
                          n = 0,
                          r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                          return t.innerHTML;
                        if (
                          "string" == typeof e &&
                          !Ae.test(e) &&
                          !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                          e = C.htmlPrefilter(e);
                          try {
                            for (; n < r; n++)
                              1 === (t = this[n] || {}).nodeType &&
                                (C.cleanData(me(t, !1)), (t.innerHTML = e));
                            t = 0;
                          } catch (e) {}
                        }
                        t && this.empty().append(e);
                      },
                      null,
                      e,
                      arguments.length
                    );
                  },
                  replaceWith: function () {
                    var e = [];
                    return Oe(
                      this,
                      arguments,
                      function (t) {
                        var n = this.parentNode;
                        C.inArray(this, e) < 0 &&
                          (C.cleanData(me(this)), n && n.replaceChild(t, this));
                      },
                      e
                    );
                  },
                }),
                C.each(
                  {
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith",
                  },
                  function (e, t) {
                    C.fn[e] = function (e) {
                      for (
                        var n, r = [], i = C(e), o = i.length - 1, a = 0;
                        a <= o;
                        a++
                      )
                        (n = a === o ? this : this.clone(!0)),
                          C(i[a])[t](n),
                          s.apply(r, n.get());
                      return this.pushStack(r);
                    };
                  }
                );
              var Me = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
                Re = function (t) {
                  var n = t.ownerDocument.defaultView;
                  return (n && n.opener) || (n = e), n.getComputedStyle(t);
                },
                Be = function (e, t, n) {
                  var r,
                    i,
                    o = {};
                  for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
                  for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
                  return r;
                },
                Qe = new RegExp(re.join("|"), "i");
              function ze(e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.style;
                return (
                  (n = n || Re(e)) &&
                    ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                      oe(e) ||
                      (a = C.style(e, t)),
                    !h.pixelBoxStyles() &&
                      Me.test(a) &&
                      Qe.test(t) &&
                      ((r = s.width),
                      (i = s.minWidth),
                      (o = s.maxWidth),
                      (s.minWidth = s.maxWidth = s.width = a),
                      (a = n.width),
                      (s.width = r),
                      (s.minWidth = i),
                      (s.maxWidth = o))),
                  void 0 !== a ? a + "" : a
                );
              }
              function Ue(e, t) {
                return {
                  get: function () {
                    if (!e()) return (this.get = t).apply(this, arguments);
                    delete this.get;
                  },
                };
              }
              !(function () {
                function t() {
                  if (u) {
                    (l.style.cssText =
                      "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                      (u.style.cssText =
                        "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                      ie.appendChild(l).appendChild(u);
                    var t = e.getComputedStyle(u);
                    (r = "1%" !== t.top),
                      (c = 12 === n(t.marginLeft)),
                      (u.style.right = "60%"),
                      (a = 36 === n(t.right)),
                      (i = 36 === n(t.width)),
                      (u.style.position = "absolute"),
                      (o = 12 === n(u.offsetWidth / 3)),
                      ie.removeChild(l),
                      (u = null);
                  }
                }
                function n(e) {
                  return Math.round(parseFloat(e));
                }
                var r,
                  i,
                  o,
                  a,
                  s,
                  c,
                  l = m.createElement("div"),
                  u = m.createElement("div");
                u.style &&
                  ((u.style.backgroundClip = "content-box"),
                  (u.cloneNode(!0).style.backgroundClip = ""),
                  (h.clearCloneStyle =
                    "content-box" === u.style.backgroundClip),
                  C.extend(h, {
                    boxSizingReliable: function () {
                      return t(), i;
                    },
                    pixelBoxStyles: function () {
                      return t(), a;
                    },
                    pixelPosition: function () {
                      return t(), r;
                    },
                    reliableMarginLeft: function () {
                      return t(), c;
                    },
                    scrollboxSize: function () {
                      return t(), o;
                    },
                    reliableTrDimensions: function () {
                      var t, n, r, i;
                      return (
                        null == s &&
                          ((t = m.createElement("table")),
                          (n = m.createElement("tr")),
                          (r = m.createElement("div")),
                          (t.style.cssText = "position:absolute;left:-11111px"),
                          (n.style.height = "1px"),
                          (r.style.height = "9px"),
                          ie.appendChild(t).appendChild(n).appendChild(r),
                          (i = e.getComputedStyle(n)),
                          (s = 3 < parseInt(i.height)),
                          ie.removeChild(t)),
                        s
                      );
                    },
                  }));
              })();
              var $e = ["Webkit", "Moz", "ms"],
                Ve = m.createElement("div").style,
                Xe = {};
              function We(e) {
                return (
                  C.cssProps[e] ||
                  Xe[e] ||
                  (e in Ve
                    ? e
                    : (Xe[e] =
                        (function (e) {
                          for (
                            var t = e[0].toUpperCase() + e.slice(1),
                              n = $e.length;
                            n--;

                          )
                            if ((e = $e[n] + t) in Ve) return e;
                        })(e) || e))
                );
              }
              var _e = /^(none|table(?!-c[ea]).+)/,
                Ye = /^--/,
                Je = {
                  position: "absolute",
                  visibility: "hidden",
                  display: "block",
                },
                Ge = { letterSpacing: "0", fontWeight: "400" };
              function Ke(e, t, n) {
                var r = ne.exec(t);
                return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
              }
              function Ze(e, t, n, r, i, o) {
                var a = "width" === t ? 1 : 0,
                  s = 0,
                  c = 0;
                if (n === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2)
                  "margin" === n && (c += C.css(e, n + re[a], !0, i)),
                    r
                      ? ("content" === n &&
                          (c -= C.css(e, "padding" + re[a], !0, i)),
                        "margin" !== n &&
                          (c -= C.css(e, "border" + re[a] + "Width", !0, i)))
                      : ((c += C.css(e, "padding" + re[a], !0, i)),
                        "padding" !== n
                          ? (c += C.css(e, "border" + re[a] + "Width", !0, i))
                          : (s += C.css(e, "border" + re[a] + "Width", !0, i)));
                return (
                  !r &&
                    0 <= o &&
                    (c +=
                      Math.max(
                        0,
                        Math.ceil(
                          e["offset" + t[0].toUpperCase() + t.slice(1)] -
                            o -
                            c -
                            s -
                            0.5
                        )
                      ) || 0),
                  c
                );
              }
              function et(e, t, n) {
                var r = Re(e),
                  i =
                    (!h.boxSizingReliable() || n) &&
                    "border-box" === C.css(e, "boxSizing", !1, r),
                  o = i,
                  a = ze(e, t, r),
                  s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Me.test(a)) {
                  if (!n) return a;
                  a = "auto";
                }
                return (
                  ((!h.boxSizingReliable() && i) ||
                    (!h.reliableTrDimensions() && I(e, "tr")) ||
                    "auto" === a ||
                    (!parseFloat(a) &&
                      "inline" === C.css(e, "display", !1, r))) &&
                    e.getClientRects().length &&
                    ((i = "border-box" === C.css(e, "boxSizing", !1, r)),
                    (o = s in e) && (a = e[s])),
                  (a = parseFloat(a) || 0) +
                    Ze(e, t, n || (i ? "border" : "content"), o, r, a) +
                    "px"
                );
              }
              function tt(e, t, n, r, i) {
                return new tt.prototype.init(e, t, n, r, i);
              }
              C.extend({
                cssHooks: {
                  opacity: {
                    get: function (e, t) {
                      if (t) {
                        var n = ze(e, "opacity");
                        return "" === n ? "1" : n;
                      }
                    },
                  },
                },
                cssNumber: {
                  animationIterationCount: !0,
                  columnCount: !0,
                  fillOpacity: !0,
                  flexGrow: !0,
                  flexShrink: !0,
                  fontWeight: !0,
                  gridArea: !0,
                  gridColumn: !0,
                  gridColumnEnd: !0,
                  gridColumnStart: !0,
                  gridRow: !0,
                  gridRowEnd: !0,
                  gridRowStart: !0,
                  lineHeight: !0,
                  opacity: !0,
                  order: !0,
                  orphans: !0,
                  widows: !0,
                  zIndex: !0,
                  zoom: !0,
                },
                cssProps: {},
                style: function (e, t, n, r) {
                  if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i,
                      o,
                      a,
                      s = W(t),
                      c = Ye.test(t),
                      l = e.style;
                    if (
                      (c || (t = We(s)),
                      (a = C.cssHooks[t] || C.cssHooks[s]),
                      void 0 === n)
                    )
                      return a && "get" in a && void 0 !== (i = a.get(e, !1, r))
                        ? i
                        : l[t];
                    "string" == (o = typeof n) &&
                      (i = ne.exec(n)) &&
                      i[1] &&
                      ((n = ce(e, t, i)), (o = "number")),
                      null != n &&
                        n == n &&
                        ("number" !== o ||
                          c ||
                          (n += (i && i[3]) || (C.cssNumber[s] ? "" : "px")),
                        h.clearCloneStyle ||
                          "" !== n ||
                          0 !== t.indexOf("background") ||
                          (l[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                          (c ? l.setProperty(t, n) : (l[t] = n)));
                  }
                },
                css: function (e, t, n, r) {
                  var i,
                    o,
                    a,
                    s = W(t);
                  return (
                    Ye.test(t) || (t = We(s)),
                    (a = C.cssHooks[t] || C.cssHooks[s]) &&
                      "get" in a &&
                      (i = a.get(e, !0, n)),
                    void 0 === i && (i = ze(e, t, r)),
                    "normal" === i && t in Ge && (i = Ge[t]),
                    "" === n || n
                      ? ((o = parseFloat(i)),
                        !0 === n || isFinite(o) ? o || 0 : i)
                      : i
                  );
                },
              }),
                C.each(["height", "width"], function (e, t) {
                  C.cssHooks[t] = {
                    get: function (e, n, r) {
                      if (n)
                        return !_e.test(C.css(e, "display")) ||
                          (e.getClientRects().length &&
                            e.getBoundingClientRect().width)
                          ? et(e, t, r)
                          : Be(e, Je, function () {
                              return et(e, t, r);
                            });
                    },
                    set: function (e, n, r) {
                      var i,
                        o = Re(e),
                        a = !h.scrollboxSize() && "absolute" === o.position,
                        s =
                          (a || r) &&
                          "border-box" === C.css(e, "boxSizing", !1, o),
                        c = r ? Ze(e, t, r, s, o) : 0;
                      return (
                        s &&
                          a &&
                          (c -= Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                              parseFloat(o[t]) -
                              Ze(e, t, "border", !1, o) -
                              0.5
                          )),
                        c &&
                          (i = ne.exec(n)) &&
                          "px" !== (i[3] || "px") &&
                          ((e.style[t] = n), (n = C.css(e, t))),
                        Ke(0, n, c)
                      );
                    },
                  };
                }),
                (C.cssHooks.marginLeft = Ue(
                  h.reliableMarginLeft,
                  function (e, t) {
                    if (t)
                      return (
                        (parseFloat(ze(e, "marginLeft")) ||
                          e.getBoundingClientRect().left -
                            Be(e, { marginLeft: 0 }, function () {
                              return e.getBoundingClientRect().left;
                            })) + "px"
                      );
                  }
                )),
                C.each(
                  { margin: "", padding: "", border: "Width" },
                  function (e, t) {
                    (C.cssHooks[e + t] = {
                      expand: function (n) {
                        for (
                          var r = 0,
                            i = {},
                            o = "string" == typeof n ? n.split(" ") : [n];
                          r < 4;
                          r++
                        )
                          i[e + re[r] + t] = o[r] || o[r - 2] || o[0];
                        return i;
                      },
                    }),
                      "margin" !== e && (C.cssHooks[e + t].set = Ke);
                  }
                ),
                C.fn.extend({
                  css: function (e, t) {
                    return U(
                      this,
                      function (e, t, n) {
                        var r,
                          i,
                          o = {},
                          a = 0;
                        if (Array.isArray(t)) {
                          for (r = Re(e), i = t.length; a < i; a++)
                            o[t[a]] = C.css(e, t[a], !1, r);
                          return o;
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                      },
                      e,
                      t,
                      1 < arguments.length
                    );
                  },
                }),
                (((C.Tween = tt).prototype = {
                  constructor: tt,
                  init: function (e, t, n, r, i, o) {
                    (this.elem = e),
                      (this.prop = n),
                      (this.easing = i || C.easing._default),
                      (this.options = t),
                      (this.start = this.now = this.cur()),
                      (this.end = r),
                      (this.unit = o || (C.cssNumber[n] ? "" : "px"));
                  },
                  cur: function () {
                    var e = tt.propHooks[this.prop];
                    return e && e.get
                      ? e.get(this)
                      : tt.propHooks._default.get(this);
                  },
                  run: function (e) {
                    var t,
                      n = tt.propHooks[this.prop];
                    return (
                      this.options.duration
                        ? (this.pos = t =
                            C.easing[this.easing](
                              e,
                              this.options.duration * e,
                              0,
                              1,
                              this.options.duration
                            ))
                        : (this.pos = t = e),
                      (this.now = (this.end - this.start) * t + this.start),
                      this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                      n && n.set
                        ? n.set(this)
                        : tt.propHooks._default.set(this),
                      this
                    );
                  },
                }).init.prototype = tt.prototype),
                ((tt.propHooks = {
                  _default: {
                    get: function (e) {
                      var t;
                      return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                        ? t
                        : 0;
                    },
                    set: function (e) {
                      C.fx.step[e.prop]
                        ? C.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!C.cssHooks[e.prop] &&
                            null == e.elem.style[We(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : C.style(e.elem, e.prop, e.now + e.unit);
                    },
                  },
                }).scrollTop = tt.propHooks.scrollLeft =
                  {
                    set: function (e) {
                      e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                    },
                  }),
                (C.easing = {
                  linear: function (e) {
                    return e;
                  },
                  swing: function (e) {
                    return 0.5 - Math.cos(e * Math.PI) / 2;
                  },
                  _default: "swing",
                }),
                (C.fx = tt.prototype.init),
                (C.fx.step = {});
              var nt,
                rt,
                it,
                ot,
                at = /^(?:toggle|show|hide)$/,
                st = /queueHooks$/;
              function ct() {
                rt &&
                  (!1 === m.hidden && e.requestAnimationFrame
                    ? e.requestAnimationFrame(ct)
                    : e.setTimeout(ct, C.fx.interval),
                  C.fx.tick());
              }
              function lt() {
                return (
                  e.setTimeout(function () {
                    nt = void 0;
                  }),
                  (nt = Date.now())
                );
              }
              function ut(e, t) {
                var n,
                  r = 0,
                  i = { height: e };
                for (t = t ? 1 : 0; r < 4; r += 2 - t)
                  i["margin" + (n = re[r])] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i;
              }
              function dt(e, t, n) {
                for (
                  var r,
                    i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
                    o = 0,
                    a = i.length;
                  o < a;
                  o++
                )
                  if ((r = i[o].call(n, t, e))) return r;
              }
              function ft(e, t, n) {
                var r,
                  i,
                  o = 0,
                  a = ft.prefilters.length,
                  s = C.Deferred().always(function () {
                    delete c.elem;
                  }),
                  c = function () {
                    if (i) return !1;
                    for (
                      var t = nt || lt(),
                        n = Math.max(0, l.startTime + l.duration - t),
                        r = 1 - (n / l.duration || 0),
                        o = 0,
                        a = l.tweens.length;
                      o < a;
                      o++
                    )
                      l.tweens[o].run(r);
                    return (
                      s.notifyWith(e, [l, r, n]),
                      r < 1 && a
                        ? n
                        : (a || s.notifyWith(e, [l, 1, 0]),
                          s.resolveWith(e, [l]),
                          !1)
                    );
                  },
                  l = s.promise({
                    elem: e,
                    props: C.extend({}, t),
                    opts: C.extend(
                      !0,
                      { specialEasing: {}, easing: C.easing._default },
                      n
                    ),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: nt || lt(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (t, n) {
                      var r = C.Tween(
                        e,
                        l.opts,
                        t,
                        n,
                        l.opts.specialEasing[t] || l.opts.easing
                      );
                      return l.tweens.push(r), r;
                    },
                    stop: function (t) {
                      var n = 0,
                        r = t ? l.tweens.length : 0;
                      if (i) return this;
                      for (i = !0; n < r; n++) l.tweens[n].run(1);
                      return (
                        t
                          ? (s.notifyWith(e, [l, 1, 0]),
                            s.resolveWith(e, [l, t]))
                          : s.rejectWith(e, [l, t]),
                        this
                      );
                    },
                  }),
                  u = l.props;
                for (
                  (function (e, t) {
                    var n, r, i, o, a;
                    for (n in e)
                      if (
                        ((i = t[(r = W(n))]),
                        (o = e[n]),
                        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                        n !== r && ((e[r] = o), delete e[n]),
                        (a = C.cssHooks[r]) && ("expand" in a))
                      )
                        for (n in ((o = a.expand(o)), delete e[r], o))
                          (n in e) || ((e[n] = o[n]), (t[n] = i));
                      else t[r] = i;
                  })(u, l.opts.specialEasing);
                  o < a;
                  o++
                )
                  if ((r = ft.prefilters[o].call(l, e, u, l.opts)))
                    return (
                      g(r.stop) &&
                        (C._queueHooks(l.elem, l.opts.queue).stop =
                          r.stop.bind(r)),
                      r
                    );
                return (
                  C.map(u, dt, l),
                  g(l.opts.start) && l.opts.start.call(e, l),
                  l
                    .progress(l.opts.progress)
                    .done(l.opts.done, l.opts.complete)
                    .fail(l.opts.fail)
                    .always(l.opts.always),
                  C.fx.timer(
                    C.extend(c, { elem: e, anim: l, queue: l.opts.queue })
                  ),
                  l
                );
              }
              (C.Animation = C.extend(ft, {
                tweeners: {
                  "*": [
                    function (e, t) {
                      var n = this.createTween(e, t);
                      return ce(n.elem, e, ne.exec(t), n), n;
                    },
                  ],
                },
                tweener: function (e, t) {
                  g(e) ? ((t = e), (e = ["*"])) : (e = e.match(O));
                  for (var n, r = 0, i = e.length; r < i; r++)
                    (n = e[r]),
                      (ft.tweeners[n] = ft.tweeners[n] || []),
                      ft.tweeners[n].unshift(t);
                },
                prefilters: [
                  function (e, t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      c,
                      l,
                      u,
                      d = "width" in t || "height" in t,
                      f = this,
                      p = {},
                      h = e.style,
                      g = e.nodeType && se(e),
                      v = J.get(e, "fxshow");
                    for (r in (n.queue ||
                      (null == (a = C._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                          a.unqueued || s();
                        })),
                      a.unqueued++,
                      f.always(function () {
                        f.always(function () {
                          a.unqueued--,
                            C.queue(e, "fx").length || a.empty.fire();
                        });
                      })),
                    t))
                      if (((i = t[r]), at.test(i))) {
                        if (
                          (delete t[r],
                          (o = o || "toggle" === i),
                          i === (g ? "hide" : "show"))
                        ) {
                          if ("show" !== i || !v || void 0 === v[r]) continue;
                          g = !0;
                        }
                        p[r] = (v && v[r]) || C.style(e, r);
                      }
                    if ((c = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                      for (r in (d &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (l = v && v.display) &&
                          (l = J.get(e, "display")),
                        "none" === (u = C.css(e, "display")) &&
                          (l
                            ? (u = l)
                            : (ue([e], !0),
                              (l = e.style.display || l),
                              (u = C.css(e, "display")),
                              ue([e]))),
                        ("inline" === u ||
                          ("inline-block" === u && null != l)) &&
                          "none" === C.css(e, "float") &&
                          (c ||
                            (f.done(function () {
                              h.display = l;
                            }),
                            null == l &&
                              ((u = h.display), (l = "none" === u ? "" : u))),
                          (h.display = "inline-block"))),
                      n.overflow &&
                        ((h.overflow = "hidden"),
                        f.always(function () {
                          (h.overflow = n.overflow[0]),
                            (h.overflowX = n.overflow[1]),
                            (h.overflowY = n.overflow[2]);
                        })),
                      (c = !1),
                      p))
                        c ||
                          (v
                            ? "hidden" in v && (g = v.hidden)
                            : (v = J.access(e, "fxshow", { display: l })),
                          o && (v.hidden = !g),
                          g && ue([e], !0),
                          f.done(function () {
                            for (r in (g || ue([e]), J.remove(e, "fxshow"), p))
                              C.style(e, r, p[r]);
                          })),
                          (c = dt(g ? v[r] : 0, r, f)),
                          r in v ||
                            ((v[r] = c.start),
                            g && ((c.end = c.start), (c.start = 0)));
                  },
                ],
                prefilter: function (e, t) {
                  t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
                },
              })),
                (C.speed = function (e, t, n) {
                  var r =
                    e && "object" == typeof e
                      ? C.extend({}, e)
                      : {
                          complete: n || (!n && t) || (g(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !g(t) && t),
                        };
                  return (
                    C.fx.off
                      ? (r.duration = 0)
                      : "number" != typeof r.duration &&
                        (r.duration in C.fx.speeds
                          ? (r.duration = C.fx.speeds[r.duration])
                          : (r.duration = C.fx.speeds._default)),
                    (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                    (r.old = r.complete),
                    (r.complete = function () {
                      g(r.old) && r.old.call(this),
                        r.queue && C.dequeue(this, r.queue);
                    }),
                    r
                  );
                }),
                C.fn.extend({
                  fadeTo: function (e, t, n, r) {
                    return this.filter(se)
                      .css("opacity", 0)
                      .show()
                      .end()
                      .animate({ opacity: t }, e, n, r);
                  },
                  animate: function (e, t, n, r) {
                    var i = C.isEmptyObject(e),
                      o = C.speed(t, n, r),
                      a = function () {
                        var t = ft(this, C.extend({}, e), o);
                        (i || J.get(this, "finish")) && t.stop(!0);
                      };
                    return (
                      (a.finish = a),
                      i || !1 === o.queue
                        ? this.each(a)
                        : this.queue(o.queue, a)
                    );
                  },
                  stop: function (e, t, n) {
                    var r = function (e) {
                      var t = e.stop;
                      delete e.stop, t(n);
                    };
                    return (
                      "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                      t && this.queue(e || "fx", []),
                      this.each(function () {
                        var t = !0,
                          i = null != e && e + "queueHooks",
                          o = C.timers,
                          a = J.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else
                          for (i in a)
                            a[i] && a[i].stop && st.test(i) && r(a[i]);
                        for (i = o.length; i--; )
                          o[i].elem !== this ||
                            (null != e && o[i].queue !== e) ||
                            (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (!t && n) || C.dequeue(this, e);
                      })
                    );
                  },
                  finish: function (e) {
                    return (
                      !1 !== e && (e = e || "fx"),
                      this.each(function () {
                        var t,
                          n = J.get(this),
                          r = n[e + "queue"],
                          i = n[e + "queueHooks"],
                          o = C.timers,
                          a = r ? r.length : 0;
                        for (
                          n.finish = !0,
                            C.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length;
                          t--;

                        )
                          o[t].elem === this &&
                            o[t].queue === e &&
                            (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++)
                          r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                      })
                    );
                  },
                }),
                C.each(["toggle", "show", "hide"], function (e, t) {
                  var n = C.fn[t];
                  C.fn[t] = function (e, r, i) {
                    return null == e || "boolean" == typeof e
                      ? n.apply(this, arguments)
                      : this.animate(ut(t, !0), e, r, i);
                  };
                }),
                C.each(
                  {
                    slideDown: ut("show"),
                    slideUp: ut("hide"),
                    slideToggle: ut("toggle"),
                    fadeIn: { opacity: "show" },
                    fadeOut: { opacity: "hide" },
                    fadeToggle: { opacity: "toggle" },
                  },
                  function (e, t) {
                    C.fn[e] = function (e, n, r) {
                      return this.animate(t, e, n, r);
                    };
                  }
                ),
                (C.timers = []),
                (C.fx.tick = function () {
                  var e,
                    t = 0,
                    n = C.timers;
                  for (nt = Date.now(); t < n.length; t++)
                    (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                  n.length || C.fx.stop(), (nt = void 0);
                }),
                (C.fx.timer = function (e) {
                  C.timers.push(e), C.fx.start();
                }),
                (C.fx.interval = 13),
                (C.fx.start = function () {
                  rt || ((rt = !0), ct());
                }),
                (C.fx.stop = function () {
                  rt = null;
                }),
                (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (C.fn.delay = function (t, n) {
                  return (
                    (t = (C.fx && C.fx.speeds[t]) || t),
                    (n = n || "fx"),
                    this.queue(n, function (n, r) {
                      var i = e.setTimeout(n, t);
                      r.stop = function () {
                        e.clearTimeout(i);
                      };
                    })
                  );
                }),
                (it = m.createElement("input")),
                (ot = m
                  .createElement("select")
                  .appendChild(m.createElement("option"))),
                (it.type = "checkbox"),
                (h.checkOn = "" !== it.value),
                (h.optSelected = ot.selected),
                ((it = m.createElement("input")).value = "t"),
                (it.type = "radio"),
                (h.radioValue = "t" === it.value);
              var pt,
                ht = C.expr.attrHandle;
              C.fn.extend({
                attr: function (e, t) {
                  return U(this, C.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                  return this.each(function () {
                    C.removeAttr(this, e);
                  });
                },
              }),
                C.extend({
                  attr: function (e, t, n) {
                    var r,
                      i,
                      o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                      return void 0 === e.getAttribute
                        ? C.prop(e, t, n)
                        : ((1 === o && C.isXMLDoc(e)) ||
                            (i =
                              C.attrHooks[t.toLowerCase()] ||
                              (C.expr.match.bool.test(t) ? pt : void 0)),
                          void 0 !== n
                            ? null === n
                              ? void C.removeAttr(e, t)
                              : i &&
                                "set" in i &&
                                void 0 !== (r = i.set(e, n, t))
                              ? r
                              : (e.setAttribute(t, n + ""), n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                            ? r
                            : null == (r = C.find.attr(e, t))
                            ? void 0
                            : r);
                  },
                  attrHooks: {
                    type: {
                      set: function (e, t) {
                        if (!h.radioValue && "radio" === t && I(e, "input")) {
                          var n = e.value;
                          return (
                            e.setAttribute("type", t), n && (e.value = n), t
                          );
                        }
                      },
                    },
                  },
                  removeAttr: function (e, t) {
                    var n,
                      r = 0,
                      i = t && t.match(O);
                    if (i && 1 === e.nodeType)
                      for (; (n = i[r++]); ) e.removeAttribute(n);
                  },
                }),
                (pt = {
                  set: function (e, t, n) {
                    return (
                      !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                    );
                  },
                }),
                C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
                  var n = ht[t] || C.find.attr;
                  ht[t] = function (e, t, r) {
                    var i,
                      o,
                      a = t.toLowerCase();
                    return (
                      r ||
                        ((o = ht[a]),
                        (ht[a] = i),
                        (i = null != n(e, t, r) ? a : null),
                        (ht[a] = o)),
                      i
                    );
                  };
                });
              var gt = /^(?:input|select|textarea|button)$/i,
                vt = /^(?:a|area)$/i;
              function mt(e) {
                return (e.match(O) || []).join(" ");
              }
              function yt(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
              }
              function bt(e) {
                return Array.isArray(e)
                  ? e
                  : ("string" == typeof e && e.match(O)) || [];
              }
              C.fn.extend({
                prop: function (e, t) {
                  return U(this, C.prop, e, t, 1 < arguments.length);
                },
                removeProp: function (e) {
                  return this.each(function () {
                    delete this[C.propFix[e] || e];
                  });
                },
              }),
                C.extend({
                  prop: function (e, t, n) {
                    var r,
                      i,
                      o = e.nodeType;
                    if (3 !== o && 8 !== o && 2 !== o)
                      return (
                        (1 === o && C.isXMLDoc(e)) ||
                          ((t = C.propFix[t] || t), (i = C.propHooks[t])),
                        void 0 !== n
                          ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                            ? r
                            : (e[t] = n)
                          : i && "get" in i && null !== (r = i.get(e, t))
                          ? r
                          : e[t]
                      );
                  },
                  propHooks: {
                    tabIndex: {
                      get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t
                          ? parseInt(t, 10)
                          : gt.test(e.nodeName) ||
                            (vt.test(e.nodeName) && e.href)
                          ? 0
                          : -1;
                      },
                    },
                  },
                  propFix: { for: "htmlFor", class: "className" },
                }),
                h.optSelected ||
                  (C.propHooks.selected = {
                    get: function (e) {
                      var t = e.parentNode;
                      return (
                        t && t.parentNode && t.parentNode.selectedIndex, null
                      );
                    },
                    set: function (e) {
                      var t = e.parentNode;
                      t &&
                        (t.selectedIndex,
                        t.parentNode && t.parentNode.selectedIndex);
                    },
                  }),
                C.each(
                  [
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable",
                  ],
                  function () {
                    C.propFix[this.toLowerCase()] = this;
                  }
                ),
                C.fn.extend({
                  addClass: function (e) {
                    var t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      c = 0;
                    if (g(e))
                      return this.each(function (t) {
                        C(this).addClass(e.call(this, t, yt(this)));
                      });
                    if ((t = bt(e)).length)
                      for (; (n = this[c++]); )
                        if (
                          ((i = yt(n)),
                          (r = 1 === n.nodeType && " " + mt(i) + " "))
                        ) {
                          for (a = 0; (o = t[a++]); )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                          i !== (s = mt(r)) && n.setAttribute("class", s);
                        }
                    return this;
                  },
                  removeClass: function (e) {
                    var t,
                      n,
                      r,
                      i,
                      o,
                      a,
                      s,
                      c = 0;
                    if (g(e))
                      return this.each(function (t) {
                        C(this).removeClass(e.call(this, t, yt(this)));
                      });
                    if (!arguments.length) return this.attr("class", "");
                    if ((t = bt(e)).length)
                      for (; (n = this[c++]); )
                        if (
                          ((i = yt(n)),
                          (r = 1 === n.nodeType && " " + mt(i) + " "))
                        ) {
                          for (a = 0; (o = t[a++]); )
                            for (; -1 < r.indexOf(" " + o + " "); )
                              r = r.replace(" " + o + " ", " ");
                          i !== (s = mt(r)) && n.setAttribute("class", s);
                        }
                    return this;
                  },
                  toggleClass: function (e, t) {
                    var n = typeof e,
                      r = "string" === n || Array.isArray(e);
                    return "boolean" == typeof t && r
                      ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                      : g(e)
                      ? this.each(function (n) {
                          C(this).toggleClass(e.call(this, n, yt(this), t), t);
                        })
                      : this.each(function () {
                          var t, i, o, a;
                          if (r)
                            for (i = 0, o = C(this), a = bt(e); (t = a[i++]); )
                              o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                          else
                            (void 0 !== e && "boolean" !== n) ||
                              ((t = yt(this)) &&
                                J.set(this, "__className__", t),
                              this.setAttribute &&
                                this.setAttribute(
                                  "class",
                                  t || !1 === e
                                    ? ""
                                    : J.get(this, "__className__") || ""
                                ));
                        });
                  },
                  hasClass: function (e) {
                    var t,
                      n,
                      r = 0;
                    for (t = " " + e + " "; (n = this[r++]); )
                      if (
                        1 === n.nodeType &&
                        -1 < (" " + mt(yt(n)) + " ").indexOf(t)
                      )
                        return !0;
                    return !1;
                  },
                });
              var xt = /\r/g;
              C.fn.extend({
                val: function (e) {
                  var t,
                    n,
                    r,
                    i = this[0];
                  return arguments.length
                    ? ((r = g(e)),
                      this.each(function (n) {
                        var i;
                        1 === this.nodeType &&
                          (null == (i = r ? e.call(this, n, C(this).val()) : e)
                            ? (i = "")
                            : "number" == typeof i
                            ? (i += "")
                            : Array.isArray(i) &&
                              (i = C.map(i, function (e) {
                                return null == e ? "" : e + "";
                              })),
                          ((t =
                            C.valHooks[this.type] ||
                            C.valHooks[this.nodeName.toLowerCase()]) &&
                            "set" in t &&
                            void 0 !== t.set(this, i, "value")) ||
                            (this.value = i));
                      }))
                    : i
                    ? (t =
                        C.valHooks[i.type] ||
                        C.valHooks[i.nodeName.toLowerCase()]) &&
                      "get" in t &&
                      void 0 !== (n = t.get(i, "value"))
                      ? n
                      : "string" == typeof (n = i.value)
                      ? n.replace(xt, "")
                      : null == n
                      ? ""
                      : n
                    : void 0;
                },
              }),
                C.extend({
                  valHooks: {
                    option: {
                      get: function (e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : mt(C.text(e));
                      },
                    },
                    select: {
                      get: function (e) {
                        var t,
                          n,
                          r,
                          i = e.options,
                          o = e.selectedIndex,
                          a = "select-one" === e.type,
                          s = a ? null : [],
                          c = a ? o + 1 : i.length;
                        for (r = o < 0 ? c : a ? o : 0; r < c; r++)
                          if (
                            ((n = i[r]).selected || r === o) &&
                            !n.disabled &&
                            (!n.parentNode.disabled ||
                              !I(n.parentNode, "optgroup"))
                          ) {
                            if (((t = C(n).val()), a)) return t;
                            s.push(t);
                          }
                        return s;
                      },
                      set: function (e, t) {
                        for (
                          var n,
                            r,
                            i = e.options,
                            o = C.makeArray(t),
                            a = i.length;
                          a--;

                        )
                          ((r = i[a]).selected =
                            -1 < C.inArray(C.valHooks.option.get(r), o)) &&
                            (n = !0);
                        return n || (e.selectedIndex = -1), o;
                      },
                    },
                  },
                }),
                C.each(["radio", "checkbox"], function () {
                  (C.valHooks[this] = {
                    set: function (e, t) {
                      if (Array.isArray(t))
                        return (e.checked = -1 < C.inArray(C(e).val(), t));
                    },
                  }),
                    h.checkOn ||
                      (C.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                          ? "on"
                          : e.value;
                      });
                }),
                (h.focusin = "onfocusin" in e);
              var wt = /^(?:focusinfocus|focusoutblur)$/,
                Ct = function (e) {
                  e.stopPropagation();
                };
              C.extend(C.event, {
                trigger: function (t, n, r, i) {
                  var o,
                    a,
                    s,
                    c,
                    l,
                    u,
                    f,
                    p,
                    h = [r || m],
                    y = d.call(t, "type") ? t.type : t,
                    b = d.call(t, "namespace") ? t.namespace.split(".") : [];
                  if (
                    ((a = p = s = r = r || m),
                    3 !== r.nodeType &&
                      8 !== r.nodeType &&
                      !wt.test(y + C.event.triggered) &&
                      (-1 < y.indexOf(".") &&
                        ((y = (b = y.split(".")).shift()), b.sort()),
                      (l = y.indexOf(":") < 0 && "on" + y),
                      ((t = t[C.expando]
                        ? t
                        : new C.Event(y, "object" == typeof t && t)).isTrigger =
                        i ? 2 : 3),
                      (t.namespace = b.join(".")),
                      (t.rnamespace = t.namespace
                        ? new RegExp(
                            "(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          )
                        : null),
                      (t.result = void 0),
                      t.target || (t.target = r),
                      (n = null == n ? [t] : C.makeArray(n, [t])),
                      (f = C.event.special[y] || {}),
                      i || !f.trigger || !1 !== f.trigger.apply(r, n)))
                  ) {
                    if (!i && !f.noBubble && !v(r)) {
                      for (
                        c = f.delegateType || y,
                          wt.test(c + y) || (a = a.parentNode);
                        a;
                        a = a.parentNode
                      )
                        h.push(a), (s = a);
                      s === (r.ownerDocument || m) &&
                        h.push(s.defaultView || s.parentWindow || e);
                    }
                    for (o = 0; (a = h[o++]) && !t.isPropagationStopped(); )
                      (p = a),
                        (t.type = 1 < o ? c : f.bindType || y),
                        (u =
                          (J.get(a, "events") || Object.create(null))[t.type] &&
                          J.get(a, "handle")) && u.apply(a, n),
                        (u = l && a[l]) &&
                          u.apply &&
                          _(a) &&
                          ((t.result = u.apply(a, n)),
                          !1 === t.result && t.preventDefault());
                    return (
                      (t.type = y),
                      i ||
                        t.isDefaultPrevented() ||
                        (f._default && !1 !== f._default.apply(h.pop(), n)) ||
                        !_(r) ||
                        (l &&
                          g(r[y]) &&
                          !v(r) &&
                          ((s = r[l]) && (r[l] = null),
                          (C.event.triggered = y),
                          t.isPropagationStopped() && p.addEventListener(y, Ct),
                          r[y](),
                          t.isPropagationStopped() &&
                            p.removeEventListener(y, Ct),
                          (C.event.triggered = void 0),
                          s && (r[l] = s))),
                      t.result
                    );
                  }
                },
                simulate: function (e, t, n) {
                  var r = C.extend(new C.Event(), n, {
                    type: e,
                    isSimulated: !0,
                  });
                  C.event.trigger(r, null, t);
                },
              }),
                C.fn.extend({
                  trigger: function (e, t) {
                    return this.each(function () {
                      C.event.trigger(e, t, this);
                    });
                  },
                  triggerHandler: function (e, t) {
                    var n = this[0];
                    if (n) return C.event.trigger(e, t, n, !0);
                  },
                }),
                h.focusin ||
                  C.each(
                    { focus: "focusin", blur: "focusout" },
                    function (e, t) {
                      var n = function (e) {
                        C.event.simulate(t, e.target, C.event.fix(e));
                      };
                      C.event.special[t] = {
                        setup: function () {
                          var r = this.ownerDocument || this.document || this,
                            i = J.access(r, t);
                          i || r.addEventListener(e, n, !0),
                            J.access(r, t, (i || 0) + 1);
                        },
                        teardown: function () {
                          var r = this.ownerDocument || this.document || this,
                            i = J.access(r, t) - 1;
                          i
                            ? J.access(r, t, i)
                            : (r.removeEventListener(e, n, !0), J.remove(r, t));
                        },
                      };
                    }
                  );
              var Tt = e.location,
                Pt = { guid: Date.now() },
                Et = /\?/;
              C.parseXML = function (t) {
                var n;
                if (!t || "string" != typeof t) return null;
                try {
                  n = new e.DOMParser().parseFromString(t, "text/xml");
                } catch (t) {
                  n = void 0;
                }
                return (
                  (n && !n.getElementsByTagName("parsererror").length) ||
                    C.error("Invalid XML: " + t),
                  n
                );
              };
              var St = /\[\]$/,
                Ht = /\r?\n/g,
                It = /^(?:submit|button|image|reset|file)$/i,
                At = /^(?:input|select|textarea|keygen)/i;
              function Dt(e, t, n, r) {
                var i;
                if (Array.isArray(t))
                  C.each(t, function (t, i) {
                    n || St.test(e)
                      ? r(e, i)
                      : Dt(
                          e +
                            "[" +
                            ("object" == typeof i && null != i ? t : "") +
                            "]",
                          i,
                          n,
                          r
                        );
                  });
                else if (n || "object" !== x(t)) r(e, t);
                else for (i in t) Dt(e + "[" + i + "]", t[i], n, r);
              }
              (C.param = function (e, t) {
                var n,
                  r = [],
                  i = function (e, t) {
                    var n = g(t) ? t() : t;
                    r[r.length] =
                      encodeURIComponent(e) +
                      "=" +
                      encodeURIComponent(null == n ? "" : n);
                  };
                if (null == e) return "";
                if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
                  C.each(e, function () {
                    i(this.name, this.value);
                  });
                else for (n in e) Dt(n, e[n], t, i);
                return r.join("&");
              }),
                C.fn.extend({
                  serialize: function () {
                    return C.param(this.serializeArray());
                  },
                  serializeArray: function () {
                    return this.map(function () {
                      var e = C.prop(this, "elements");
                      return e ? C.makeArray(e) : this;
                    })
                      .filter(function () {
                        var e = this.type;
                        return (
                          this.name &&
                          !C(this).is(":disabled") &&
                          At.test(this.nodeName) &&
                          !It.test(e) &&
                          (this.checked || !pe.test(e))
                        );
                      })
                      .map(function (e, t) {
                        var n = C(this).val();
                        return null == n
                          ? null
                          : Array.isArray(n)
                          ? C.map(n, function (e) {
                              return {
                                name: t.name,
                                value: e.replace(Ht, "\r\n"),
                              };
                            })
                          : { name: t.name, value: n.replace(Ht, "\r\n") };
                      })
                      .get();
                  },
                });
              var kt = /%20/g,
                jt = /#.*$/,
                Lt = /([?&])_=[^&]*/,
                Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                qt = /^(?:GET|HEAD)$/,
                Ot = /^\/\//,
                Ft = {},
                Mt = {},
                Rt = "*/".concat("*"),
                Bt = m.createElement("a");
              function Qt(e) {
                return function (t, n) {
                  "string" != typeof t && ((n = t), (t = "*"));
                  var r,
                    i = 0,
                    o = t.toLowerCase().match(O) || [];
                  if (g(n))
                    for (; (r = o[i++]); )
                      "+" === r[0]
                        ? ((r = r.slice(1) || "*"),
                          (e[r] = e[r] || []).unshift(n))
                        : (e[r] = e[r] || []).push(n);
                };
              }
              function zt(e, t, n, r) {
                var i = {},
                  o = e === Mt;
                function a(s) {
                  var c;
                  return (
                    (i[s] = !0),
                    C.each(e[s] || [], function (e, s) {
                      var l = s(t, n, r);
                      return "string" != typeof l || o || i[l]
                        ? o
                          ? !(c = l)
                          : void 0
                        : (t.dataTypes.unshift(l), a(l), !1);
                    }),
                    c
                  );
                }
                return a(t.dataTypes[0]) || (!i["*"] && a("*"));
              }
              function Ut(e, t) {
                var n,
                  r,
                  i = C.ajaxSettings.flatOptions || {};
                for (n in t)
                  void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
                return r && C.extend(!0, e, r), e;
              }
              (Bt.href = Tt.href),
                C.extend({
                  active: 0,
                  lastModified: {},
                  etag: {},
                  ajaxSettings: {
                    url: Tt.href,
                    type: "GET",
                    isLocal:
                      /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        Tt.protocol
                      ),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType:
                      "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                      "*": Rt,
                      text: "text/plain",
                      html: "text/html",
                      xml: "application/xml, text/xml",
                      json: "application/json, text/javascript",
                    },
                    contents: {
                      xml: /\bxml\b/,
                      html: /\bhtml/,
                      json: /\bjson\b/,
                    },
                    responseFields: {
                      xml: "responseXML",
                      text: "responseText",
                      json: "responseJSON",
                    },
                    converters: {
                      "* text": String,
                      "text html": !0,
                      "text json": JSON.parse,
                      "text xml": C.parseXML,
                    },
                    flatOptions: { url: !0, context: !0 },
                  },
                  ajaxSetup: function (e, t) {
                    return t
                      ? Ut(Ut(e, C.ajaxSettings), t)
                      : Ut(C.ajaxSettings, e);
                  },
                  ajaxPrefilter: Qt(Ft),
                  ajaxTransport: Qt(Mt),
                  ajax: function (t, n) {
                    "object" == typeof t && ((n = t), (t = void 0)),
                      (n = n || {});
                    var r,
                      i,
                      o,
                      a,
                      s,
                      c,
                      l,
                      u,
                      d,
                      f,
                      p = C.ajaxSetup({}, n),
                      h = p.context || p,
                      g =
                        p.context && (h.nodeType || h.jquery) ? C(h) : C.event,
                      v = C.Deferred(),
                      y = C.Callbacks("once memory"),
                      b = p.statusCode || {},
                      x = {},
                      w = {},
                      T = "canceled",
                      P = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                          var t;
                          if (l) {
                            if (!a)
                              for (a = {}; (t = Nt.exec(o)); )
                                a[t[1].toLowerCase() + " "] = (
                                  a[t[1].toLowerCase() + " "] || []
                                ).concat(t[2]);
                            t = a[e.toLowerCase() + " "];
                          }
                          return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                          return l ? o : null;
                        },
                        setRequestHeader: function (e, t) {
                          return (
                            null == l &&
                              ((e = w[e.toLowerCase()] =
                                w[e.toLowerCase()] || e),
                              (x[e] = t)),
                            this
                          );
                        },
                        overrideMimeType: function (e) {
                          return null == l && (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                          var t;
                          if (e)
                            if (l) P.always(e[P.status]);
                            else for (t in e) b[t] = [b[t], e[t]];
                          return this;
                        },
                        abort: function (e) {
                          var t = e || T;
                          return r && r.abort(t), E(0, t), this;
                        },
                      };
                    if (
                      (v.promise(P),
                      (p.url = ((t || p.url || Tt.href) + "").replace(
                        Ot,
                        Tt.protocol + "//"
                      )),
                      (p.type = n.method || n.type || p.method || p.type),
                      (p.dataTypes = (p.dataType || "*")
                        .toLowerCase()
                        .match(O) || [""]),
                      null == p.crossDomain)
                    ) {
                      c = m.createElement("a");
                      try {
                        (c.href = p.url),
                          (c.href = c.href),
                          (p.crossDomain =
                            Bt.protocol + "//" + Bt.host !=
                            c.protocol + "//" + c.host);
                      } catch (t) {
                        p.crossDomain = !0;
                      }
                    }
                    if (
                      (p.data &&
                        p.processData &&
                        "string" != typeof p.data &&
                        (p.data = C.param(p.data, p.traditional)),
                      zt(Ft, p, n, P),
                      l)
                    )
                      return P;
                    for (d in ((u = C.event && p.global) &&
                      0 == C.active++ &&
                      C.event.trigger("ajaxStart"),
                    (p.type = p.type.toUpperCase()),
                    (p.hasContent = !qt.test(p.type)),
                    (i = p.url.replace(jt, "")),
                    p.hasContent
                      ? p.data &&
                        p.processData &&
                        0 ===
                          (p.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                          ) &&
                        (p.data = p.data.replace(kt, "+"))
                      : ((f = p.url.slice(i.length)),
                        p.data &&
                          (p.processData || "string" == typeof p.data) &&
                          ((i += (Et.test(i) ? "&" : "?") + p.data),
                          delete p.data),
                        !1 === p.cache &&
                          ((i = i.replace(Lt, "$1")),
                          (f =
                            (Et.test(i) ? "&" : "?") + "_=" + Pt.guid++ + f)),
                        (p.url = i + f)),
                    p.ifModified &&
                      (C.lastModified[i] &&
                        P.setRequestHeader(
                          "If-Modified-Since",
                          C.lastModified[i]
                        ),
                      C.etag[i] &&
                        P.setRequestHeader("If-None-Match", C.etag[i])),
                    ((p.data && p.hasContent && !1 !== p.contentType) ||
                      n.contentType) &&
                      P.setRequestHeader("Content-Type", p.contentType),
                    P.setRequestHeader(
                      "Accept",
                      p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                        ? p.accepts[p.dataTypes[0]] +
                            ("*" !== p.dataTypes[0]
                              ? ", " + Rt + "; q=0.01"
                              : "")
                        : p.accepts["*"]
                    ),
                    p.headers))
                      P.setRequestHeader(d, p.headers[d]);
                    if (
                      p.beforeSend &&
                      (!1 === p.beforeSend.call(h, P, p) || l)
                    )
                      return P.abort();
                    if (
                      ((T = "abort"),
                      y.add(p.complete),
                      P.done(p.success),
                      P.fail(p.error),
                      (r = zt(Mt, p, n, P)))
                    ) {
                      if (
                        ((P.readyState = 1),
                        u && g.trigger("ajaxSend", [P, p]),
                        l)
                      )
                        return P;
                      p.async &&
                        0 < p.timeout &&
                        (s = e.setTimeout(function () {
                          P.abort("timeout");
                        }, p.timeout));
                      try {
                        (l = !1), r.send(x, E);
                      } catch (t) {
                        if (l) throw t;
                        E(-1, t);
                      }
                    } else E(-1, "No Transport");
                    function E(t, n, a, c) {
                      var d,
                        f,
                        m,
                        x,
                        w,
                        T = n;
                      l ||
                        ((l = !0),
                        s && e.clearTimeout(s),
                        (r = void 0),
                        (o = c || ""),
                        (P.readyState = 0 < t ? 4 : 0),
                        (d = (200 <= t && t < 300) || 304 === t),
                        a &&
                          (x = (function (e, t, n) {
                            for (
                              var r, i, o, a, s = e.contents, c = e.dataTypes;
                              "*" === c[0];

                            )
                              c.shift(),
                                void 0 === r &&
                                  (r =
                                    e.mimeType ||
                                    t.getResponseHeader("Content-Type"));
                            if (r)
                              for (i in s)
                                if (s[i] && s[i].test(r)) {
                                  c.unshift(i);
                                  break;
                                }
                            if (c[0] in n) o = c[0];
                            else {
                              for (i in n) {
                                if (!c[0] || e.converters[i + " " + c[0]]) {
                                  o = i;
                                  break;
                                }
                                a || (a = i);
                              }
                              o = o || a;
                            }
                            if (o) return o !== c[0] && c.unshift(o), n[o];
                          })(p, P, a)),
                        !d &&
                          -1 < C.inArray("script", p.dataTypes) &&
                          (p.converters["text script"] = function () {}),
                        (x = (function (e, t, n, r) {
                          var i,
                            o,
                            a,
                            s,
                            c,
                            l = {},
                            u = e.dataTypes.slice();
                          if (u[1])
                            for (a in e.converters)
                              l[a.toLowerCase()] = e.converters[a];
                          for (o = u.shift(); o; )
                            if (
                              (e.responseFields[o] &&
                                (n[e.responseFields[o]] = t),
                              !c &&
                                r &&
                                e.dataFilter &&
                                (t = e.dataFilter(t, e.dataType)),
                              (c = o),
                              (o = u.shift()))
                            )
                              if ("*" === o) o = c;
                              else if ("*" !== c && c !== o) {
                                if (!(a = l[c + " " + o] || l["* " + o]))
                                  for (i in l)
                                    if (
                                      (s = i.split(" "))[1] === o &&
                                      (a = l[c + " " + s[0]] || l["* " + s[0]])
                                    ) {
                                      !0 === a
                                        ? (a = l[i])
                                        : !0 !== l[i] &&
                                          ((o = s[0]), u.unshift(s[1]));
                                      break;
                                    }
                                if (!0 !== a)
                                  if (a && e.throws) t = a(t);
                                  else
                                    try {
                                      t = a(t);
                                    } catch (e) {
                                      return {
                                        state: "parsererror",
                                        error: a
                                          ? e
                                          : "No conversion from " +
                                            c +
                                            " to " +
                                            o,
                                      };
                                    }
                              }
                          return { state: "success", data: t };
                        })(p, x, P, d)),
                        d
                          ? (p.ifModified &&
                              ((w = P.getResponseHeader("Last-Modified")) &&
                                (C.lastModified[i] = w),
                              (w = P.getResponseHeader("etag")) &&
                                (C.etag[i] = w)),
                            204 === t || "HEAD" === p.type
                              ? (T = "nocontent")
                              : 304 === t
                              ? (T = "notmodified")
                              : ((T = x.state),
                                (f = x.data),
                                (d = !(m = x.error))))
                          : ((m = T),
                            (!t && T) || ((T = "error"), t < 0 && (t = 0))),
                        (P.status = t),
                        (P.statusText = (n || T) + ""),
                        d
                          ? v.resolveWith(h, [f, T, P])
                          : v.rejectWith(h, [P, T, m]),
                        P.statusCode(b),
                        (b = void 0),
                        u &&
                          g.trigger(d ? "ajaxSuccess" : "ajaxError", [
                            P,
                            p,
                            d ? f : m,
                          ]),
                        y.fireWith(h, [P, T]),
                        u &&
                          (g.trigger("ajaxComplete", [P, p]),
                          --C.active || C.event.trigger("ajaxStop")));
                    }
                    return P;
                  },
                  getJSON: function (e, t, n) {
                    return C.get(e, t, n, "json");
                  },
                  getScript: function (e, t) {
                    return C.get(e, void 0, t, "script");
                  },
                }),
                C.each(["get", "post"], function (e, t) {
                  C[t] = function (e, n, r, i) {
                    return (
                      g(n) && ((i = i || r), (r = n), (n = void 0)),
                      C.ajax(
                        C.extend(
                          { url: e, type: t, dataType: i, data: n, success: r },
                          C.isPlainObject(e) && e
                        )
                      )
                    );
                  };
                }),
                C.ajaxPrefilter(function (e) {
                  var t;
                  for (t in e.headers)
                    "content-type" === t.toLowerCase() &&
                      (e.contentType = e.headers[t] || "");
                }),
                (C._evalUrl = function (e, t, n) {
                  return C.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: { "text script": function () {} },
                    dataFilter: function (e) {
                      C.globalEval(e, t, n);
                    },
                  });
                }),
                C.fn.extend({
                  wrapAll: function (e) {
                    var t;
                    return (
                      this[0] &&
                        (g(e) && (e = e.call(this[0])),
                        (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                          .map(function () {
                            for (var e = this; e.firstElementChild; )
                              e = e.firstElementChild;
                            return e;
                          })
                          .append(this)),
                      this
                    );
                  },
                  wrapInner: function (e) {
                    return g(e)
                      ? this.each(function (t) {
                          C(this).wrapInner(e.call(this, t));
                        })
                      : this.each(function () {
                          var t = C(this),
                            n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                        });
                  },
                  wrap: function (e) {
                    var t = g(e);
                    return this.each(function (n) {
                      C(this).wrapAll(t ? e.call(this, n) : e);
                    });
                  },
                  unwrap: function (e) {
                    return (
                      this.parent(e)
                        .not("body")
                        .each(function () {
                          C(this).replaceWith(this.childNodes);
                        }),
                      this
                    );
                  },
                }),
                (C.expr.pseudos.hidden = function (e) {
                  return !C.expr.pseudos.visible(e);
                }),
                (C.expr.pseudos.visible = function (e) {
                  return !!(
                    e.offsetWidth ||
                    e.offsetHeight ||
                    e.getClientRects().length
                  );
                }),
                (C.ajaxSettings.xhr = function () {
                  try {
                    return new e.XMLHttpRequest();
                  } catch (e) {}
                });
              var $t = { 0: 200, 1223: 204 },
                Vt = C.ajaxSettings.xhr();
              (h.cors = !!Vt && "withCredentials" in Vt),
                (h.ajax = Vt = !!Vt),
                C.ajaxTransport(function (t) {
                  var n, r;
                  if (h.cors || (Vt && !t.crossDomain))
                    return {
                      send: function (i, o) {
                        var a,
                          s = t.xhr();
                        if (
                          (s.open(
                            t.type,
                            t.url,
                            t.async,
                            t.username,
                            t.password
                          ),
                          t.xhrFields)
                        )
                          for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        for (a in (t.mimeType &&
                          s.overrideMimeType &&
                          s.overrideMimeType(t.mimeType),
                        t.crossDomain ||
                          i["X-Requested-With"] ||
                          (i["X-Requested-With"] = "XMLHttpRequest"),
                        i))
                          s.setRequestHeader(a, i[a]);
                        (n = function (e) {
                          return function () {
                            n &&
                              ((n =
                                r =
                                s.onload =
                                s.onerror =
                                s.onabort =
                                s.ontimeout =
                                s.onreadystatechange =
                                  null),
                              "abort" === e
                                ? s.abort()
                                : "error" === e
                                ? "number" != typeof s.status
                                  ? o(0, "error")
                                  : o(s.status, s.statusText)
                                : o(
                                    $t[s.status] || s.status,
                                    s.statusText,
                                    "text" !== (s.responseType || "text") ||
                                      "string" != typeof s.responseText
                                      ? { binary: s.response }
                                      : { text: s.responseText },
                                    s.getAllResponseHeaders()
                                  ));
                          };
                        }),
                          (s.onload = n()),
                          (r = s.onerror = s.ontimeout = n("error")),
                          void 0 !== s.onabort
                            ? (s.onabort = r)
                            : (s.onreadystatechange = function () {
                                4 === s.readyState &&
                                  e.setTimeout(function () {
                                    n && r();
                                  });
                              }),
                          (n = n("abort"));
                        try {
                          s.send((t.hasContent && t.data) || null);
                        } catch (i) {
                          if (n) throw i;
                        }
                      },
                      abort: function () {
                        n && n();
                      },
                    };
                }),
                C.ajaxPrefilter(function (e) {
                  e.crossDomain && (e.contents.script = !1);
                }),
                C.ajaxSetup({
                  accepts: {
                    script:
                      "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                  },
                  contents: { script: /\b(?:java|ecma)script\b/ },
                  converters: {
                    "text script": function (e) {
                      return C.globalEval(e), e;
                    },
                  },
                }),
                C.ajaxPrefilter("script", function (e) {
                  void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET");
                }),
                C.ajaxTransport("script", function (e) {
                  var t, n;
                  if (e.crossDomain || e.scriptAttrs)
                    return {
                      send: function (r, i) {
                        (t = C("<script>")
                          .attr(e.scriptAttrs || {})
                          .prop({ charset: e.scriptCharset, src: e.url })
                          .on(
                            "load error",
                            (n = function (e) {
                              t.remove(),
                                (n = null),
                                e && i("error" === e.type ? 404 : 200, e.type);
                            })
                          )),
                          m.head.appendChild(t[0]);
                      },
                      abort: function () {
                        n && n();
                      },
                    };
                });
              var Xt,
                Wt = [],
                _t = /(=)\?(?=&|$)|\?\?/;
              C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                  var e = Wt.pop() || C.expando + "_" + Pt.guid++;
                  return (this[e] = !0), e;
                },
              }),
                C.ajaxPrefilter("json jsonp", function (t, n, r) {
                  var i,
                    o,
                    a,
                    s =
                      !1 !== t.jsonp &&
                      (_t.test(t.url)
                        ? "url"
                        : "string" == typeof t.data &&
                          0 ===
                            (t.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                            ) &&
                          _t.test(t.data) &&
                          "data");
                  if (s || "jsonp" === t.dataTypes[0])
                    return (
                      (i = t.jsonpCallback =
                        g(t.jsonpCallback)
                          ? t.jsonpCallback()
                          : t.jsonpCallback),
                      s
                        ? (t[s] = t[s].replace(_t, "$1" + i))
                        : !1 !== t.jsonp &&
                          (t.url +=
                            (Et.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                      (t.converters["script json"] = function () {
                        return a || C.error(i + " was not called"), a[0];
                      }),
                      (t.dataTypes[0] = "json"),
                      (o = e[i]),
                      (e[i] = function () {
                        a = arguments;
                      }),
                      r.always(function () {
                        void 0 === o ? C(e).removeProp(i) : (e[i] = o),
                          t[i] &&
                            ((t.jsonpCallback = n.jsonpCallback), Wt.push(i)),
                          a && g(o) && o(a[0]),
                          (a = o = void 0);
                      }),
                      "script"
                    );
                }),
                (h.createHTMLDocument =
                  (((Xt =
                    m.implementation.createHTMLDocument("").body).innerHTML =
                    "<form></form><form></form>"),
                  2 === Xt.childNodes.length)),
                (C.parseHTML = function (e, t, n) {
                  return "string" != typeof e
                    ? []
                    : ("boolean" == typeof t && ((n = t), (t = !1)),
                      t ||
                        (h.createHTMLDocument
                          ? (((r = (t =
                              m.implementation.createHTMLDocument(
                                ""
                              )).createElement("base")).href = m.location.href),
                            t.head.appendChild(r))
                          : (t = m)),
                      (o = !n && []),
                      (i = A.exec(e))
                        ? [t.createElement(i[1])]
                        : ((i = xe([e], t, o)),
                          o && o.length && C(o).remove(),
                          C.merge([], i.childNodes)));
                  var r, i, o;
                }),
                (C.fn.load = function (e, t, n) {
                  var r,
                    i,
                    o,
                    a = this,
                    s = e.indexOf(" ");
                  return (
                    -1 < s && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
                    g(t)
                      ? ((n = t), (t = void 0))
                      : t && "object" == typeof t && (i = "POST"),
                    0 < a.length &&
                      C.ajax({
                        url: e,
                        type: i || "GET",
                        dataType: "html",
                        data: t,
                      })
                        .done(function (e) {
                          (o = arguments),
                            a.html(
                              r ? C("<div>").append(C.parseHTML(e)).find(r) : e
                            );
                        })
                        .always(
                          n &&
                            function (e, t) {
                              a.each(function () {
                                n.apply(this, o || [e.responseText, t, e]);
                              });
                            }
                        ),
                    this
                  );
                }),
                (C.expr.pseudos.animated = function (e) {
                  return C.grep(C.timers, function (t) {
                    return e === t.elem;
                  }).length;
                }),
                (C.offset = {
                  setOffset: function (e, t, n) {
                    var r,
                      i,
                      o,
                      a,
                      s,
                      c,
                      l = C.css(e, "position"),
                      u = C(e),
                      d = {};
                    "static" === l && (e.style.position = "relative"),
                      (s = u.offset()),
                      (o = C.css(e, "top")),
                      (c = C.css(e, "left")),
                      ("absolute" === l || "fixed" === l) &&
                      -1 < (o + c).indexOf("auto")
                        ? ((a = (r = u.position()).top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(c) || 0)),
                      g(t) && (t = t.call(e, n, C.extend({}, s))),
                      null != t.top && (d.top = t.top - s.top + a),
                      null != t.left && (d.left = t.left - s.left + i),
                      "using" in t
                        ? t.using.call(e, d)
                        : ("number" == typeof d.top && (d.top += "px"),
                          "number" == typeof d.left && (d.left += "px"),
                          u.css(d));
                  },
                }),
                C.fn.extend({
                  offset: function (e) {
                    if (arguments.length)
                      return void 0 === e
                        ? this
                        : this.each(function (t) {
                            C.offset.setOffset(this, e, t);
                          });
                    var t,
                      n,
                      r = this[0];
                    return r
                      ? r.getClientRects().length
                        ? ((t = r.getBoundingClientRect()),
                          (n = r.ownerDocument.defaultView),
                          {
                            top: t.top + n.pageYOffset,
                            left: t.left + n.pageXOffset,
                          })
                        : { top: 0, left: 0 }
                      : void 0;
                  },
                  position: function () {
                    if (this[0]) {
                      var e,
                        t,
                        n,
                        r = this[0],
                        i = { top: 0, left: 0 };
                      if ("fixed" === C.css(r, "position"))
                        t = r.getBoundingClientRect();
                      else {
                        for (
                          t = this.offset(),
                            n = r.ownerDocument,
                            e = r.offsetParent || n.documentElement;
                          e &&
                          (e === n.body || e === n.documentElement) &&
                          "static" === C.css(e, "position");

                        )
                          e = e.parentNode;
                        e &&
                          e !== r &&
                          1 === e.nodeType &&
                          (((i = C(e).offset()).top += C.css(
                            e,
                            "borderTopWidth",
                            !0
                          )),
                          (i.left += C.css(e, "borderLeftWidth", !0)));
                      }
                      return {
                        top: t.top - i.top - C.css(r, "marginTop", !0),
                        left: t.left - i.left - C.css(r, "marginLeft", !0),
                      };
                    }
                  },
                  offsetParent: function () {
                    return this.map(function () {
                      for (
                        var e = this.offsetParent;
                        e && "static" === C.css(e, "position");

                      )
                        e = e.offsetParent;
                      return e || ie;
                    });
                  },
                }),
                C.each(
                  { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                  function (e, t) {
                    var n = "pageYOffset" === t;
                    C.fn[e] = function (r) {
                      return U(
                        this,
                        function (e, r, i) {
                          var o;
                          if (
                            (v(e)
                              ? (o = e)
                              : 9 === e.nodeType && (o = e.defaultView),
                            void 0 === i)
                          )
                            return o ? o[t] : e[r];
                          o
                            ? o.scrollTo(
                                n ? o.pageXOffset : i,
                                n ? i : o.pageYOffset
                              )
                            : (e[r] = i);
                        },
                        e,
                        r,
                        arguments.length
                      );
                    };
                  }
                ),
                C.each(["top", "left"], function (e, t) {
                  C.cssHooks[t] = Ue(h.pixelPosition, function (e, n) {
                    if (n)
                      return (
                        (n = ze(e, t)),
                        Me.test(n) ? C(e).position()[t] + "px" : n
                      );
                  });
                }),
                C.each({ Height: "height", Width: "width" }, function (e, t) {
                  C.each(
                    { padding: "inner" + e, content: t, "": "outer" + e },
                    function (n, r) {
                      C.fn[r] = function (i, o) {
                        var a =
                            arguments.length && (n || "boolean" != typeof i),
                          s = n || (!0 === i || !0 === o ? "margin" : "border");
                        return U(
                          this,
                          function (t, n, i) {
                            var o;
                            return v(t)
                              ? 0 === r.indexOf("outer")
                                ? t["inner" + e]
                                : t.document.documentElement["client" + e]
                              : 9 === t.nodeType
                              ? ((o = t.documentElement),
                                Math.max(
                                  t.body["scroll" + e],
                                  o["scroll" + e],
                                  t.body["offset" + e],
                                  o["offset" + e],
                                  o["client" + e]
                                ))
                              : void 0 === i
                              ? C.css(t, n, s)
                              : C.style(t, n, i, s);
                          },
                          t,
                          a ? i : void 0,
                          a
                        );
                      };
                    }
                  );
                }),
                C.each(
                  [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                  ],
                  function (e, t) {
                    C.fn[t] = function (e) {
                      return this.on(t, e);
                    };
                  }
                ),
                C.fn.extend({
                  bind: function (e, t, n) {
                    return this.on(e, null, t, n);
                  },
                  unbind: function (e, t) {
                    return this.off(e, null, t);
                  },
                  delegate: function (e, t, n, r) {
                    return this.on(t, e, n, r);
                  },
                  undelegate: function (e, t, n) {
                    return 1 === arguments.length
                      ? this.off(e, "**")
                      : this.off(t, e || "**", n);
                  },
                  hover: function (e, t) {
                    return this.mouseenter(e).mouseleave(t || e);
                  },
                }),
                C.each(
                  "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                    " "
                  ),
                  function (e, t) {
                    C.fn[t] = function (e, n) {
                      return 0 < arguments.length
                        ? this.on(t, null, e, n)
                        : this.trigger(t);
                    };
                  }
                );
              var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
              (C.proxy = function (e, t) {
                var n, r, i;
                if (
                  ("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e))
                )
                  return (
                    (r = o.call(arguments, 2)),
                    ((i = function () {
                      return e.apply(t || this, r.concat(o.call(arguments)));
                    }).guid = e.guid =
                      e.guid || C.guid++),
                    i
                  );
              }),
                (C.holdReady = function (e) {
                  e ? C.readyWait++ : C.ready(!0);
                }),
                (C.isArray = Array.isArray),
                (C.parseJSON = JSON.parse),
                (C.nodeName = I),
                (C.isFunction = g),
                (C.isWindow = v),
                (C.camelCase = W),
                (C.type = x),
                (C.now = Date.now),
                (C.isNumeric = function (e) {
                  var t = C.type(e);
                  return (
                    ("number" === t || "string" === t) &&
                    !isNaN(e - parseFloat(e))
                  );
                }),
                (C.trim = function (e) {
                  return null == e ? "" : (e + "").replace(Yt, "");
                }),
                "function" == typeof define &&
                  n.amdO &&
                  define("jquery", [], function () {
                    return C;
                  });
              var Jt = e.jQuery,
                Gt = e.$;
              return (
                (C.noConflict = function (t) {
                  return (
                    e.$ === C && (e.$ = Gt),
                    t && e.jQuery === C && (e.jQuery = Jt),
                    C
                  );
                }),
                void 0 === t && (e.jQuery = e.$ = C),
                C
              );
            }),
            "object" == typeof e.exports
              ? (e.exports = r.document
                  ? i(r, !0)
                  : function (e) {
                      if (!e.document)
                        throw new Error(
                          "jQuery requires a window with a document"
                        );
                      return i(e);
                    })
              : i(r);
          var o = (window.H5P = window.H5P || {});
          (o.jQuery = jQuery.noConflict(!0)),
            (o.jQuery.fn.__originalLoad = o.jQuery.load),
            (o.jQuery.fn.load = function (e, t, n) {
              if ("function" == typeof e) {
                console.warn(
                  "You are using a deprecated H5P library. Please upgrade!"
                );
                let e = Array.prototype.slice.call(arguments);
                return e.unshift("load"), o.jQuery.fn.on.apply(this, e);
              }
              return o.jQuery.fn.__originalLoad.apply(this, arguments);
            });
        },
        41: () => {
          H5P.ActionBar = (function (e, t) {
            "use strict";
            function n(e) {
              t.call(this);
              var n = this,
                r = !1,
                i = H5P.jQuery('<ul class="h5p-actions"></ul>'),
                o = function (e, t) {
                  var o = function () {
                    n.trigger(e);
                  };
                  const a = H5P.jQuery("<li/>", {
                      class: "h5p-button h5p-noselect h5p-" + (t || e),
                      appendTo: i,
                    }),
                    s = H5P.jQuery("<button/>", {
                      tabindex: 0,
                      "aria-label": H5P.t(e + "Description"),
                      html: H5P.t(e),
                      on: {
                        click: o,
                        keypress: function (e) {
                          32 === e.which && (o(), e.preventDefault());
                        },
                      },
                      appendTo: a,
                    });
                  H5P.Tooltip(s.get(0)), (r = !0);
                };
              if (
                ((e.export || e.copy) && o("reuse", "export"),
                e.copyright && o("copyrights"),
                e.embed && o("embed"),
                e.icon)
              ) {
                const e = H5P.jQuery(
                  '<li><a class="h5p-link" href="http://h5p.org" target="_blank" aria-label="' +
                    H5P.t("h5pDescription") +
                    '"></a></li>'
                ).appendTo(i);
                H5P.Tooltip(e.find(".h5p-link").get(0)), (r = !0);
              }
              (n.getDOMElement = function () {
                return i;
              }),
                (n.hasActions = function () {
                  return r;
                });
            }
            return (
              (n.prototype = Object.create(t.prototype)),
              (n.prototype.constructor = n),
              n
            );
          })(H5P.jQuery, H5P.EventDispatcher);
        },
        644: () => {
          (H5P.ConfirmationDialog = (function (e) {
            "use strict";
            function t(t) {
              e.call(this);
              var n = this;
              H5P.ConfirmationDialog.uniqueId += 1;
              var r = H5P.ConfirmationDialog.uniqueId;
              function i(e) {
                n.hide(), n.trigger("canceled"), e.preventDefault();
              }
              function o(e, n) {
                0 === e
                  ? p.firstChild.focus()
                  : -1 === e && (t.hideExit ? p.lastChild.focus() : m.focus()),
                  n?.preventDefault();
              }
              ((t = t || {}).headerText =
                t.headerText || H5P.t("confirmDialogHeader")),
                (t.dialogText = t.dialogText || H5P.t("confirmDialogBody")),
                (t.cancelText = t.cancelText || H5P.t("cancelLabel")),
                (t.closeText = t.closeText || H5P.t("close")),
                (t.confirmText = t.confirmText || H5P.t("confirmLabel"));
              var a = !1,
                s = document.createElement("div");
              s.classList.add(
                "h5p-confirmation-dialog-background",
                "hidden",
                "hiding"
              );
              var c = document.createElement("div");
              c.classList.add("h5p-confirmation-dialog-popup", "hidden"),
                t.classes &&
                  t.classes.forEach(function (e) {
                    c.classList.add(e);
                  }),
                c.setAttribute("role", "alertdialog"),
                c.setAttribute("aria-modal", "true"),
                c.setAttribute(
                  "aria-labelledby",
                  "h5p-confirmation-dialog-header-text-" + r
                ),
                c.setAttribute(
                  "aria-describedby",
                  "h5p-confirmation-dialog-text-" + r
                ),
                s.appendChild(c),
                c.addEventListener("keydown", function (e) {
                  "Escape" === e.key && i(e);
                });
              var l = document.createElement("div");
              l.classList.add("h5p-confirmation-dialog-header"),
                c.appendChild(l);
              var u = document.createElement("div");
              u.classList.add("h5p-confirmation-dialog-header-text"),
                (u.id = "h5p-confirmation-dialog-dialog-header-text-" + r),
                (u.innerHTML = t.headerText),
                l.appendChild(u);
              var d = document.createElement("div");
              d.classList.add("h5p-confirmation-dialog-body"), c.appendChild(d);
              var f = document.createElement("div");
              f.classList.add("h5p-confirmation-dialog-text"),
                (f.innerHTML = t.dialogText),
                (f.id = "h5p-confirmation-dialog-dialog-text-" + r),
                d.appendChild(f);
              var p = document.createElement("div");
              if (
                (p.classList.add("h5p-confirmation-dialog-buttons"),
                d.appendChild(p),
                t.hideCancel)
              )
                p.classList.add("center");
              else {
                var h = document.createElement("button");
                h.classList.add("h5p-core-cancel-button"),
                  (h.textContent = t.cancelText),
                  h.addEventListener("click", i),
                  p.appendChild(h);
              }
              var g = document.createElement("button");
              g.classList.add("h5p-core-button"),
                g.classList.add("h5p-confirmation-dialog-confirm-button"),
                g.setAttribute("aria-label", t.confirmText),
                g.addEventListener("click", function (e) {
                  n.hide(), n.trigger("confirmed"), e.preventDefault();
                });
              const v = document.createElement("span");
              if (
                ((v.textContent = t.confirmText),
                g.appendChild(v),
                p.appendChild(g),
                t.hideExit)
              )
                p.lastChild.addEventListener("keydown", (e) => {
                  "Tab" !== e.key || e.shiftKey || o(0, e);
                });
              else {
                var m = document.createElement("button");
                m.classList.add("h5p-confirmation-dialog-exit"),
                  m.setAttribute("aria-label", t.closeText),
                  m.addEventListener("click", i),
                  m.addEventListener("keydown", (e) => {
                    "Tab" !== e.key || e.shiftKey || o(0, e);
                  }),
                  c.appendChild(m);
              }
              var y, b;
              p.firstChild.addEventListener("keydown", (e) => {
                "Tab" === e.key && e.shiftKey && o(-1, e);
              });
              var x,
                w = [],
                C = [];
              this.appendTo = function (e) {
                return (y = e), this;
              };
              var T = function (e) {
                  s.contains(e.target) || (e.preventDefault(), o(0));
                },
                P = function (e) {
                  var t,
                    n = [],
                    r = e.parentNode.children;
                  for (t = 0; t < r.length; t += 1)
                    (n[t] = !!r[t].getAttribute("aria-hidden")),
                      r[t] !== e &&
                        (r[t].getAttribute("aria-live")
                          ? r[t].setAttribute("aria-busy", !0)
                          : r[t].setAttribute("aria-hidden", !0));
                  return n;
                },
                E = function (e, t) {
                  var n,
                    r = e.parentNode.children;
                  for (n = 0; n < r.length; n += 1)
                    r[n] === e ||
                      t[n] ||
                      (r[n].getAttribute("aria-live")
                        ? r[n].setAttribute("aria-busy", !1)
                        : r[n].removeAttribute("aria-hidden"));
                };
              (this.show = function (e) {
                if (
                  ((x = document.activeElement),
                  y.appendChild(s),
                  (b = y.parentNode || y).addEventListener("focus", T, !0),
                  s.classList.remove("hidden"),
                  (function (e) {
                    var t = parseInt(c.style.top, 10);
                    void 0 !== e && (t = e),
                      t || (t = 0),
                      t + c.offsetHeight > y.offsetHeight &&
                        (t = y.offsetHeight - c.offsetHeight - 8),
                      t - 32 <= 0 && ((t = 40), (a = !0)),
                      (c.style.top = t + "px");
                  })(e),
                  c.classList.remove("hidden"),
                  s.classList.remove("hiding"),
                  o(0),
                  (w = P(y)),
                  (C = P(s)),
                  a && t.instance)
                ) {
                  var r = parseInt(c.offsetHeight, 10) + 32 + 16;
                  n.setViewPortMinimumHeight(r),
                    t.instance.trigger("resize"),
                    (a = !1);
                }
                return this;
              }),
                (this.hide = function () {
                  return (
                    E(y, w),
                    E(s, C),
                    s.classList.add("hiding"),
                    c.classList.add("hidden"),
                    b.removeEventListener("focus", T, !0),
                    t.skipRestoreFocus || x.focus(),
                    s.classList.add("hidden"),
                    y.removeChild(s),
                    n.setViewPortMinimumHeight(null),
                    this
                  );
                }),
                (this.getElement = function () {
                  return c;
                }),
                (this.getPreviouslyFocused = function () {
                  return x;
                }),
                (this.setViewPortMinimumHeight = function (e) {
                  (
                    document.querySelector(".h5p-container") || document.body
                  ).style.minHeight = "number" == typeof e ? e + "px" : e;
                });
            }
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              t
            );
          })(H5P.EventDispatcher)),
            (H5P.ConfirmationDialog.uniqueId = -1);
        },
        798: () => {
          H5P.ContentType = function (e) {
            function t() {}
            return (
              (t.prototype = new H5P.EventDispatcher()),
              (t.prototype.isRoot = function () {
                return e;
              }),
              (t.prototype.getLibraryFilePath = function (e) {
                return (
                  H5P.getLibraryPath(this.libraryInfo.versionedNameNoSpaces) +
                  "/" +
                  e
                );
              }),
              t
            );
          };
        },
        449: () => {
          var e = (window.H5P = window.H5P || {});
          (e.Event = function (e, t, n) {
            (this.type = e), (this.data = t);
            var r = !1,
              i = !1,
              o = !1;
            void 0 === n && (n = {}),
              !0 === n.bubbles && (r = !0),
              !0 === n.external && (i = !0),
              (this.preventBubbling = function () {
                r = !1;
              }),
              (this.getBubbles = function () {
                return r;
              }),
              (this.scheduleForExternal = function () {
                return !(!i || o || ((o = !0), 0));
              });
          }),
            (e.EventDispatcher = function () {
              var t = this,
                n = {};
              (this.on = function (e, r, i) {
                if ("function" != typeof r)
                  throw TypeError("listener must be a function");
                t.trigger("newListener", { type: e, listener: r });
                var o = { listener: r, thisArg: i };
                n[e] ? n[e].push(o) : (n[e] = [o]);
              }),
                (this.once = function (e, n, r) {
                  if (!(n instanceof Function))
                    throw TypeError("listener must be a function");
                  var i = function (e) {
                    t.off(e.type, i), n.call(this, e);
                  };
                  t.on(e, i, r);
                }),
                (this.off = function (e, r) {
                  if (void 0 !== r && !(r instanceof Function))
                    throw TypeError("listener must be a function");
                  if (void 0 !== n[e]) {
                    if (void 0 === r)
                      return delete n[e], void t.trigger("removeListener", e);
                    for (var i = 0; i < n[e].length; i++)
                      if (n[e][i].listener === r) {
                        n[e].splice(i, 1),
                          t.trigger("removeListener", e, { listener: r });
                        break;
                      }
                    n[e].length || delete n[e];
                  }
                });
              var r = function (e, t) {
                if (void 0 !== n[e])
                  for (var r = n[e].slice(), i = 0; i < r.length; i++) {
                    var o = r[i],
                      a = o.thisArg ? o.thisArg : this;
                    o.listener.call(a, t);
                  }
              };
              this.trigger = function (n, i, o) {
                if (void 0 !== n) {
                  n instanceof String || "string" == typeof n
                    ? (n = new e.Event(n, i, o))
                    : void 0 !== i && (n.data = i);
                  var a = n.scheduleForExternal();
                  r.call(this, n.type, n),
                    r.call(this, "*", n),
                    n.getBubbles() &&
                      t.parent instanceof e.EventDispatcher &&
                      (t.parent.trigger instanceof Function ||
                        "function" == typeof t.parent.trigger) &&
                      t.parent.trigger(n),
                    a && e.externalDispatcher.trigger.call(this, n);
                }
              };
            });
        },
        597: () => {
          (H5P.Tooltip = (function () {
            "use strict";
            const e = {
              allowed: ["top", "bottom", "left", "right"],
              default: "top",
            };
            return function (t, n) {
              H5P.Tooltip.uniqueId += 1;
              const r = "h5p-tooltip-" + H5P.Tooltip.uniqueId;
              ((n = n || {}).classes = n.classes || []),
                (n.ariaHidden = n.ariaHidden || !0),
                (n.tooltipSource = n.tooltipSource || "aria-label"),
                (n.position =
                  n.position && e.allowed.includes(n.position)
                    ? n.position
                    : e.default),
                n.classes.push("h5p-tooltip"),
                ("left" !== n.position && "right" !== n.position) ||
                  n.classes.push("h5p-tooltip-narrow");
              let i = !1,
                o = !1;
              const a = function (e) {
                  "Escape" === e.key &&
                    s.classList.remove("h5p-tooltip-visible");
                },
                s = document.createElement("div");
              let c, l, u;
              (s.id = r),
                (s.role = "tooltip"),
                (s.innerHTML = n.text || t.getAttribute(n.tooltipSource) || ""),
                s.setAttribute("aria-hidden", n.ariaHidden),
                s.classList.add(...n.classes),
                document.body.appendChild(s),
                n.ariaHidden || t.setAttribute("aria-describedby", r),
                (this.observer = new MutationObserver(function (e) {
                  const r = e[0].target.getAttribute(n.tooltipSource);
                  null === s.parentNode && t.appendChild(s),
                    (s.innerHTML = n.text || r),
                    0 === s.innerHTML.trim().length &&
                      s.classList.contains("h5p-tooltip-visible") &&
                      s.classList.remove("h5p-tooltip-visible");
                })),
                this.observer.observe(t, {
                  attributes: !0,
                  attributeFilter: [n.tooltipSource, "class"],
                });
              const d = function (e, r = !0) {
                  if (!0 === r)
                    return void (l = setTimeout(() => {
                      d(e, !1);
                    }, 300));
                  if (0 === s.innerHTML.trim().length) return;
                  "mouseenter" === e.type ? (i = !0) : (o = !0),
                    (s.style.left = ""),
                    (s.style.top = ""),
                    s.classList.add("h5p-tooltip-visible"),
                    document.body.addEventListener("keydown", a, !0),
                    void 0 === c && (c = t.closest(".h5p-container"));
                  const u = c
                      ? c.getBoundingClientRect()
                      : document.documentElement.getBoundingClientRect(),
                    f = t.getBoundingClientRect();
                  let p = s.getBoundingClientRect();
                  if ("top" === n.position)
                    (s.style.left = f.left + f.width / 2 - p.width / 2 + "px"),
                      (s.style.top = f.top - p.height + "px");
                  else if ("bottom" === n.position)
                    (s.style.left = f.left + f.width / 2 - p.width / 2 + "px"),
                      (s.style.top = f.bottom + "px");
                  else {
                    if ("left" === n.position)
                      return (
                        (s.style.left = f.left - p.width + "px"),
                        void (s.style.top =
                          f.top + (f.height - p.height) / 2 + "px")
                      );
                    if ("right" === n.position)
                      return (
                        (s.style.left = f.right + "px"),
                        void (s.style.top =
                          f.top + (f.height - p.height) / 2 + "px")
                      );
                  }
                  (p = s.getBoundingClientRect()),
                    (p.left >= 0 &&
                      p.top >= 0 &&
                      p.right <= u.width &&
                      p.bottom <= u.height) ||
                      ((p = s.getBoundingClientRect()),
                      p.left < 0
                        ? (s.style.left = 0)
                        : p.right > u.width &&
                          ((s.style.left = ""), (s.style.right = 0)));
                },
                f = function (e) {
                  let t = !1;
                  "click" === e.type
                    ? (t = !0)
                    : ("mouseleave" === e.type ? (i = !1) : (o = !1),
                      (t = !i && !o)),
                    t &&
                      (clearTimeout(l),
                      s.classList.remove("h5p-tooltip-visible"),
                      document.body.removeEventListener("keydown", a, !0));
                };
              return (
                t.addEventListener("mouseenter", d),
                t.addEventListener("mouseleave", (e) => {
                  u = setTimeout(() => {
                    f(e);
                  }, 1);
                }),
                t.addEventListener("focusin", d),
                t.addEventListener("focusout", f),
                t.addEventListener("click", f),
                s.addEventListener("mouseenter", () => {
                  clearTimeout(u);
                }),
                s.addEventListener("mouseleave", f),
                s.addEventListener("click", function (e) {
                  e.stopPropagation(), e.preventDefault(), f(e);
                }),
                (this.setText = function (e) {
                  (n.text = e),
                    (s.innerHTML =
                      n.text || t.getAttribute(n.tooltipSource) || "");
                }),
                (this.hide = function () {
                  (i = o = !1), s.classList.remove("h5p-tooltip-visible");
                }),
                (this.getElement = function () {
                  return s;
                }),
                (this.remove = function () {
                  this.observer?.disconnect(), s.remove();
                }),
                {
                  setText: this.setText,
                  hide: this.hide,
                  getElement: this.getElement,
                  remove: this.remove,
                  observer: this.observer,
                }
              );
            };
          })()),
            (H5P.Tooltip.uniqueId = -1);
        },
        2: () => {
          var e = (window.H5P = window.H5P || {});
          (e.XAPIEvent = function () {
            e.Event.call(
              this,
              "xAPI",
              { statement: {} },
              { bubbles: !0, external: !0 }
            );
          }),
            (e.XAPIEvent.prototype = Object.create(e.Event.prototype)),
            (e.XAPIEvent.prototype.constructor = e.XAPIEvent),
            (e.XAPIEvent.prototype.setScoredResult = function (e, t, n, r, i) {
              if (
                ((this.data.statement.result = {}),
                void 0 !== e &&
                  (void 0 === t
                    ? (this.data.statement.result.score = { raw: e })
                    : ((this.data.statement.result.score = {
                        min: 0,
                        max: t,
                        raw: e,
                      }),
                      t > 0 &&
                        (this.data.statement.result.score.scaled =
                          Math.round((e / t) * 1e4) / 1e4))),
                (this.data.statement.result.completion =
                  void 0 === r
                    ? "completed" === this.getVerb() ||
                      "answered" === this.getVerb()
                    : r),
                void 0 !== i && (this.data.statement.result.success = i),
                n && n.activityStartTime)
              ) {
                var o =
                  Math.round((Date.now() - n.activityStartTime) / 10) / 100;
                this.data.statement.result.duration = "PT" + o + "S";
              }
            }),
            (e.XAPIEvent.prototype.setVerb = function (t) {
              -1 !== e.jQuery.inArray(t, e.XAPIEvent.allowedXAPIVerbs)
                ? (this.data.statement.verb = {
                    id: "http://adlnet.gov/expapi/verbs/" + t,
                    display: { "en-US": t },
                  })
                : void 0 !== t.id && (this.data.statement.verb = t);
            }),
            (e.XAPIEvent.prototype.getVerb = function (e) {
              var t = this.data.statement;
              return "verb" in t
                ? !0 === e
                  ? t.verb
                  : t.verb.id.slice(31)
                : null;
            }),
            (e.XAPIEvent.prototype.setObject = function (t) {
              if (t.contentId)
                if (
                  ((this.data.statement.object = {
                    id: this.getContentXAPIId(t),
                    objectType: "Activity",
                    definition: {
                      extensions: {
                        "http://h5p.org/x-api/h5p-local-content-id":
                          t.contentId,
                      },
                    },
                  }),
                  t.subContentId)
                )
                  (this.data.statement.object.definition.extensions[
                    "http://h5p.org/x-api/h5p-subContentId"
                  ] = t.subContentId),
                    "function" == typeof t.getTitle &&
                      (this.data.statement.object.definition.name = {
                        "en-US": t.getTitle(),
                      });
                else {
                  var n = e.getContentForInstance(t.contentId);
                  n &&
                    n.metadata &&
                    n.metadata.title &&
                    (this.data.statement.object.definition.name = {
                      "en-US": e.createTitle(n.metadata.title),
                    });
                }
              else this.data.statement.object = { definition: {} };
            }),
            (e.XAPIEvent.prototype.setContext = function (e) {
              e.parent &&
                (e.parent.contentId || e.parent.subContentId) &&
                (this.data.statement.context = {
                  contextActivities: {
                    parent: [
                      {
                        id: this.getContentXAPIId(e.parent),
                        objectType: "Activity",
                      },
                    ],
                  },
                }),
                e.libraryInfo &&
                  (void 0 === this.data.statement.context &&
                    (this.data.statement.context = { contextActivities: {} }),
                  (this.data.statement.context.contextActivities.category = [
                    {
                      id:
                        "http://h5p.org/libraries/" +
                        e.libraryInfo.versionedNameNoSpaces,
                      objectType: "Activity",
                    },
                  ]));
            }),
            (e.XAPIEvent.prototype.setActor = function () {
              if (void 0 !== H5PIntegration.user)
                this.data.statement.actor = {
                  name: H5PIntegration.user.name,
                  mbox: "mailto:" + H5PIntegration.user.mail,
                  objectType: "Agent",
                };
              else {
                var t;
                try {
                  localStorage.H5PUserUUID
                    ? (t = localStorage.H5PUserUUID)
                    : ((t = e.createUUID()), (localStorage.H5PUserUUID = t));
                } catch (n) {
                  t = "not-trackable-" + e.createUUID();
                }
                this.data.statement.actor = {
                  account: { name: t, homePage: H5PIntegration.siteUrl },
                  objectType: "Agent",
                };
              }
            }),
            (e.XAPIEvent.prototype.getMaxScore = function () {
              return this.getVerifiedStatementValue(["result", "score", "max"]);
            }),
            (e.XAPIEvent.prototype.getScore = function () {
              return this.getVerifiedStatementValue(["result", "score", "raw"]);
            }),
            (e.XAPIEvent.prototype.getContentXAPIId = function (e) {
              var t;
              return (
                e.contentId &&
                  H5PIntegration &&
                  H5PIntegration.contents &&
                  H5PIntegration.contents["cid-" + e.contentId] &&
                  ((t = H5PIntegration.contents["cid-" + e.contentId].url),
                  e.subContentId && (t += "?subContentId=" + e.subContentId)),
                t
              );
            }),
            (e.XAPIEvent.prototype.isFromChild = function () {
              var e = this.getVerifiedStatementValue([
                "context",
                "contextActivities",
                "parent",
                0,
                "id",
              ]);
              return !e || -1 === e.indexOf("subContentId");
            }),
            (e.XAPIEvent.prototype.getVerifiedStatementValue = function (e) {
              for (var t = this.data.statement, n = 0; n < e.length; n++) {
                if (void 0 === t[e[n]]) return null;
                t = t[e[n]];
              }
              return t;
            }),
            (e.XAPIEvent.allowedXAPIVerbs = [
              "answered",
              "asked",
              "attempted",
              "attended",
              "commented",
              "completed",
              "exited",
              "experienced",
              "failed",
              "imported",
              "initialized",
              "interacted",
              "launched",
              "mastered",
              "passed",
              "preferred",
              "progressed",
              "registered",
              "responded",
              "resumed",
              "scored",
              "shared",
              "suspended",
              "terminated",
              "voided",
              "downloaded",
              "copied",
              "accessed-reuse",
              "accessed-embed",
              "accessed-copyright",
            ]);
        },
        268: () => {
          var e = (window.H5P = window.H5P || {});
          (e.externalDispatcher = new e.EventDispatcher()),
            (e.EventDispatcher.prototype.triggerXAPI = function (e, t) {
              this.trigger(this.createXAPIEventTemplate(e, t));
            }),
            (e.EventDispatcher.prototype.createXAPIEventTemplate = function (
              t,
              n
            ) {
              var r = new e.XAPIEvent();
              if ((r.setActor(), r.setVerb(t), void 0 !== n))
                for (var i in n) r.data.statement[i] = n[i];
              return (
                "object" in r.data.statement || r.setObject(this),
                "context" in r.data.statement || r.setContext(this),
                r
              );
            }),
            (e.EventDispatcher.prototype.triggerXAPICompleted = function (
              e,
              t,
              n
            ) {
              this.triggerXAPIScored(e, t, "completed", !0, n);
            }),
            (e.EventDispatcher.prototype.triggerXAPIScored = function (
              e,
              t,
              n,
              r,
              i
            ) {
              var o = this.createXAPIEventTemplate(n);
              o.setScoredResult(e, t, this, r, i), this.trigger(o);
            }),
            (e.EventDispatcher.prototype.setActivityStarted = function () {
              void 0 === this.activityStartTime &&
                (void 0 !== this.contentId &&
                  void 0 !== H5PIntegration.contents &&
                  void 0 !== H5PIntegration.contents["cid-" + this.contentId] &&
                  this.triggerXAPI("attempted"),
                (this.activityStartTime = Date.now()));
            }),
            (e.xAPICompletedListener = function (t) {
              if (
                ("completed" === t.getVerb() || "answered" === t.getVerb()) &&
                !t.getVerifiedStatementValue([
                  "context",
                  "contextActivities",
                  "parent",
                ])
              ) {
                var n = t.getScore(),
                  r = t.getMaxScore(),
                  i = t.getVerifiedStatementValue([
                    "object",
                    "definition",
                    "extensions",
                    "http://h5p.org/x-api/h5p-local-content-id",
                  ]);
                e.setFinished(i, n, r);
              }
            });
        },
        195: () => {
          var e = (window.H5P = window.H5P || {});
          (e.isFramed = window.self !== window.parent),
            (e.$window = e.jQuery(window)),
            (e.instances = []),
            document.documentElement.requestFullscreen
              ? (e.fullScreenBrowserPrefix = "")
              : document.documentElement.webkitRequestFullScreen
              ? ((e.safariBrowser =
                  navigator.userAgent.match(/version\/([.\d]+)/i)),
                (e.safariBrowser =
                  null === e.safariBrowser ? 0 : parseInt(e.safariBrowser[1])),
                (0 === e.safariBrowser || e.safariBrowser > 6) &&
                  (e.fullScreenBrowserPrefix = "webkit"))
              : document.documentElement.mozRequestFullScreen
              ? (e.fullScreenBrowserPrefix = "moz")
              : document.documentElement.msRequestFullscreen &&
                (e.fullScreenBrowserPrefix = "ms"),
            (e.opened = {}),
            (e.init = function (t) {
              void 0 === e.$body && (e.$body = e.jQuery(document.body)),
                void 0 === e.fullscreenSupported &&
                  (e.fullscreenSupported = !(
                    H5PIntegration.fullscreenDisabled ||
                    e.fullscreenDisabled ||
                    (e.isFramed &&
                      !1 !== e.externalEmbed &&
                      !(
                        document.fullscreenEnabled ||
                        document.webkitFullscreenEnabled ||
                        document.mozFullScreenEnabled
                      ))
                  )),
                void 0 === e.canHasFullScreen &&
                  (e.canHasFullScreen = e.fullscreenSupported),
                e
                  .jQuery(".h5p-content:not(.h5p-initialized)", t)
                  .each(function () {
                    var t = e.jQuery(this).addClass("h5p-initialized"),
                      n = e
                        .jQuery('<div class="h5p-container"></div>')
                        .appendTo(t),
                      r = t.data("content-id"),
                      i = H5PIntegration.contents["cid-" + r];
                    if (void 0 === i)
                      return e.error(
                        "No data for content id " +
                          r +
                          ". Perhaps the library is gone?"
                      );
                    var o = {
                      library: i.library,
                      params: JSON.parse(i.jsonContent),
                      metadata: i.metadata,
                    };
                    e.getUserData(r, "state", function (t, s) {
                      if (s) o.userDatas = { state: s };
                      else if (null === s && H5PIntegration.saveFreq) {
                        delete i.contentUserData;
                        var c = new e.Dialog(
                          "content-user-data-reset",
                          "Data Reset",
                          "<p>" +
                            e.t("contentChanged") +
                            "</p><p>" +
                            e.t("startingOver") +
                            '</p><div class="h5p-dialog-ok-button" tabIndex="0" role="button">OK</div>',
                          n
                        );
                        e
                          .jQuery(c)
                          .on("dialog-opened", function (t, n) {
                            var i = function (t) {
                              ("click" !== t.type && 32 !== t.which) ||
                                (c.close(), e.deleteUserData(r, "state", 0));
                            };
                            n
                              .find(".h5p-dialog-ok-button")
                              .click(i)
                              .keypress(i),
                              e.trigger(a, "resize");
                          })
                          .on("dialog-closed", function () {
                            e.trigger(a, "resize");
                          }),
                          c.open();
                      }
                    });
                    var a = e.newRunnable(o, r, n, !0, { standalone: !0 });
                    (e.offlineRequestQueue = new e.OfflineRequestQueue({
                      instance: a,
                    })),
                      1 == i.fullScreen &&
                        e.fullscreenSupported &&
                        e
                          .jQuery(
                            '<div class="h5p-content-controls"><div role="button" tabindex="0" class="h5p-enable-fullscreen" aria-label="' +
                              e.t("fullscreen") +
                              '" title="' +
                              e.t("fullscreen") +
                              '"></div></div>'
                          )
                          .prependTo(n)
                          .children()
                          .click(function () {
                            e.fullScreen(n, a);
                          })
                          .keydown(function (t) {
                            if (32 === t.which || 13 === t.which)
                              return e.fullScreen(n, a), !1;
                          });
                    var s,
                      c = i.displayOptions,
                      l = !1;
                    if (c.frame) {
                      if (c.copyright) {
                        var u = e.getCopyrights(a, o.params, r, o.metadata);
                        u || (c.copyright = !1);
                      }
                      var d = new e.ActionBar(c),
                        f = d.getDOMElement();
                      d.on("reuse", function () {
                        e.openReuseDialog(f, i, o, a, r),
                          a.triggerXAPI("accessed-reuse");
                      }),
                        d.on("copyrights", function () {
                          new e.Dialog(
                            "copyrights",
                            e.t("copyrightInformation"),
                            u,
                            n
                          ).open(!0),
                            a.triggerXAPI("accessed-copyright");
                        }),
                        d.on("embed", function () {
                          e.openEmbedDialog(
                            f,
                            i.embedCode,
                            i.resizeCode,
                            { width: t.width(), height: t.height() },
                            a
                          ),
                            a.triggerXAPI("accessed-embed");
                        }),
                        d.hasActions() && ((l = !0), f.insertAfter(n));
                    }
                    if (
                      (t.addClass(l ? "h5p-frame" : "h5p-no-frame"),
                      (e.opened[r] = new Date()),
                      e.on(a, "finish", function (t) {
                        void 0 !== t.data &&
                          e.setFinished(
                            r,
                            t.data.score,
                            t.data.maxScore,
                            t.data.time
                          );
                      }),
                      e.on(a, "xAPI", e.xAPICompletedListener),
                      !1 !== H5PIntegration.saveFreq &&
                        (a.getCurrentState instanceof Function ||
                          "function" == typeof a.getCurrentState))
                    ) {
                      var p,
                        h = function () {
                          var t = a.getCurrentState();
                          void 0 !== t &&
                            e.setUserData(r, "state", t, {
                              deleteOnChange: !0,
                            }),
                            H5PIntegration.saveFreq &&
                              (p = setTimeout(
                                h,
                                1e3 * H5PIntegration.saveFreq
                              ));
                        };
                      H5PIntegration.saveFreq &&
                        (p = setTimeout(h, 1e3 * H5PIntegration.saveFreq)),
                        e.on(a, "xAPI", function (e) {
                          var t = e.getVerb();
                          ("completed" !== t && "progressed" !== t) ||
                            (clearTimeout(p), (p = setTimeout(h, 3e3)));
                        });
                    }
                    if (e.isFramed)
                      if (!1 === e.externalEmbed) {
                        var g = window.frameElement;
                        e.on(a, "resize", function () {
                          clearTimeout(s),
                            (s = setTimeout(function () {
                              !(function () {
                                if (!window.parent.H5P.isFullscreen) {
                                  var e = g.parentElement.style.height;
                                  (g.parentElement.style.height =
                                    g.parentElement.clientHeight + "px"),
                                    g.getBoundingClientRect(),
                                    (g.style.height = "1px"),
                                    (g.style.height =
                                      g.contentDocument.body.scrollHeight +
                                      "px"),
                                    (g.parentElement.style.height = e);
                                }
                              })();
                            }, 1));
                        });
                      } else if (e.communicator) {
                        var v = !1;
                        e.communicator.on("ready", function () {
                          e.communicator.send("hello");
                        }),
                          e.communicator.on("hello", function () {
                            (v = !0),
                              (document.body.style.height = "auto"),
                              (document.body.style.overflow = "hidden"),
                              e.trigger(a, "resize");
                          }),
                          e.communicator.on("resizePrepared", function () {
                            e.communicator.send("resize", {
                              scrollHeight: document.body.scrollHeight,
                            });
                          }),
                          e.communicator.on("resize", function () {
                            e.trigger(a, "resize");
                          }),
                          e.on(a, "resize", function () {
                            e.isFullscreen ||
                              (clearTimeout(s),
                              (s = setTimeout(function () {
                                v
                                  ? e.communicator.send("prepareResize", {
                                      scrollHeight: document.body.scrollHeight,
                                      clientHeight: document.body.clientHeight,
                                    })
                                  : e.communicator.send("hello");
                              }, 0)));
                          });
                      }
                    (e.isFramed && !1 !== e.externalEmbed) ||
                      e.jQuery(window.parent).resize(function () {
                        e.trigger(a, "resize");
                      }),
                      e.instances.push(a),
                      e.trigger(a, "resize"),
                      t.addClass("using-mouse"),
                      t.on("mousedown keydown keyup", function (e) {
                        t.toggleClass("using-mouse", "mousedown" === e.type);
                      }),
                      e.externalDispatcher &&
                        e.externalDispatcher.trigger("initialized");
                  }),
                e
                  .jQuery("iframe.h5p-iframe:not(.h5p-initialized)", t)
                  .each(function () {
                    const t = this,
                      n = e.jQuery(t),
                      r = n.data("content-id"),
                      i = H5PIntegration.contents["cid-" + r],
                      o =
                        i && i.metadata && i.metadata.defaultLanguage
                          ? i.metadata.defaultLanguage
                          : "en",
                      a = function () {
                        t.contentDocument.open(),
                          t.contentDocument.write(
                            '<!doctype html><html class="h5p-iframe" lang="' +
                              o +
                              '"><head>' +
                              e.getHeadTags(r) +
                              '</head><body><div class="h5p-content" data-content-id="' +
                              r +
                              '"/></body></html>'
                          ),
                          t.contentDocument.close();
                      };
                    n.addClass("h5p-initialized"),
                      null === t.contentDocument
                        ? (n.on("load", a), n.attr("src", "about:blank"))
                        : a();
                  });
            }),
            (e.getHeadTags = function (e) {
              var t = function (e) {
                  for (var t = "", n = 0; n < e.length; n++)
                    t += '<link rel="stylesheet" href="' + e[n] + '">';
                  return t;
                },
                n = function (e) {
                  for (var t = "", n = 0; n < e.length; n++)
                    t += '<script src="' + e[n] + '"></script>';
                  return t;
                };
              return (
                '<base target="_parent">' +
                t(H5PIntegration.core.styles) +
                t(H5PIntegration.contents["cid-" + e].styles) +
                n(H5PIntegration.core.scripts) +
                n(H5PIntegration.contents["cid-" + e].scripts) +
                "<script>H5PIntegration = window.parent.H5PIntegration; var H5P = H5P || {}; H5P.externalEmbed = false;</script>"
              );
            }),
            (e.communicator =
              window.postMessage && window.addEventListener
                ? new (function () {
                    var e = {};
                    window.addEventListener(
                      "message",
                      function (t) {
                        window.parent === t.source &&
                          "h5p" === t.data.context &&
                          void 0 !== e[t.data.action] &&
                          e[t.data.action](t.data);
                      },
                      !1
                    ),
                      (this.on = function (t, n) {
                        e[t] = n;
                      }),
                      (this.send = function (e, t) {
                        void 0 === t && (t = {}),
                          (t.context = "h5p"),
                          (t.action = e),
                          window.parent.postMessage(t, "*");
                      });
                  })()
                : void 0),
            (e.semiFullScreen = function (t, n, r, i) {
              e.fullScreen(t, n, r, i, !0);
            }),
            (e.fullScreen = function (t, n, r, i, o) {
              if (void 0 === e.exitFullScreen) {
                if (e.isFramed && !1 === e.externalEmbed)
                  return (
                    window.parent.H5P.fullScreen(t, n, r, e.$body.get(), o),
                    (e.isFullscreen = !0),
                    (e.exitFullScreen = function () {
                      window.parent.H5P.exitFullScreen();
                    }),
                    void e.on(n, "exitFullScreen", function () {
                      (e.isFullscreen = !1), (e.exitFullScreen = void 0);
                    })
                  );
                var a,
                  s,
                  c,
                  l = t;
                if (void 0 === i) c = e.$body;
                else {
                  (c = e.jQuery(i)), (a = c.add(t.get()));
                  var u = "#h5p-iframe-" + t.parent().data("content-id");
                  t = (s = e.jQuery(u)).parent();
                }
                a = t.add(e.$body).add(a);
                var d = function (e) {
                    a.addClass(e), void 0 !== s && s.css("height", "");
                  },
                  f = function () {
                    e.trigger(n, "resize"),
                      e.trigger(n, "focus"),
                      e.trigger(n, "enterFullScreen");
                  },
                  p = function (t) {
                    (e.isFullscreen = !1),
                      a.removeClass(t),
                      e.trigger(n, "resize"),
                      e.trigger(n, "focus"),
                      (e.exitFullScreen = void 0),
                      void 0 !== r && r(),
                      e.trigger(n, "exitFullScreen");
                  };
                if (
                  ((e.isFullscreen = !0),
                  void 0 === e.fullScreenBrowserPrefix || !0 === o)
                ) {
                  if (e.isFramed) return;
                  d("h5p-semi-fullscreen");
                  var h,
                    g,
                    v,
                    m = e
                      .jQuery(
                        '<div role="button" tabindex="0" class="h5p-disable-fullscreen" title="' +
                          e.t("disableFullscreen") +
                          '" aria-label="' +
                          e.t("disableFullscreen") +
                          '"></div>'
                      )
                      .appendTo(l.find(".h5p-content-controls")),
                    y = (e.exitFullScreen = function () {
                      g ? (v.content = g) : w.removeChild(v),
                        m.remove(),
                        c.unbind("keyup", h),
                        p("h5p-semi-fullscreen");
                    });
                  (h = function (e) {
                    27 === e.keyCode && y();
                  }),
                    m.click(y),
                    c.keyup(h);
                  for (
                    var b = document.getElementsByTagName("meta"), x = 0;
                    x < b.length;
                    x++
                  )
                    if ("viewport" === b[x].name) {
                      (v = b[x]), (g = v.content);
                      break;
                    }
                  if (
                    (g ||
                      ((v = document.createElement("meta")).name = "viewport"),
                    (v.content =
                      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"),
                    !g)
                  ) {
                    var w = document.getElementsByTagName("head")[0];
                    w.appendChild(v);
                  }
                  f();
                } else {
                  d("h5p-fullscreen");
                  var C,
                    T =
                      "ms" === e.fullScreenBrowserPrefix
                        ? "MSFullscreenChange"
                        : e.fullScreenBrowserPrefix + "fullscreenchange";
                  if (
                    (document.addEventListener(T, function e() {
                      if (void 0 === C) return (C = !1), void f();
                      p("h5p-fullscreen"),
                        document.removeEventListener(T, e, !1);
                    }),
                    "" === e.fullScreenBrowserPrefix)
                  )
                    t[0].requestFullscreen();
                  else {
                    var P =
                        "ms" === e.fullScreenBrowserPrefix
                          ? "msRequestFullscreen"
                          : e.fullScreenBrowserPrefix + "RequestFullScreen",
                      E =
                        "webkit" === e.fullScreenBrowserPrefix &&
                        0 === e.safariBrowser
                          ? Element.ALLOW_KEYBOARD_INPUT
                          : void 0;
                    t[0][P](E);
                  }
                  e.exitFullScreen = function () {
                    "" === e.fullScreenBrowserPrefix
                      ? document.exitFullscreen()
                      : "moz" === e.fullScreenBrowserPrefix
                      ? document.mozCancelFullScreen()
                      : document[
                          e.fullScreenBrowserPrefix + "ExitFullscreen"
                        ]();
                  };
                }
              }
            }),
            (function () {
              (e.addQueryParameter = function (e, t) {
                let n, r;
                const i = e.split("?");
                return (
                  i[1]
                    ? ((r = i[1].split("#")), (n = i[0] + "?" + r[0] + "&"))
                    : ((r = i[0].split("#")), (n = r[0] + "?")),
                  (n += t),
                  r[1] && (n += "#" + r[1]),
                  n
                );
              }),
                (e.setSource = function (t, n, r) {
                  let i = n.path;
                  const o = e.getCrossOrigin(n);
                  o
                    ? ((t.crossOrigin = o),
                      H5PIntegration.crossoriginCacheBuster &&
                        (i = e.addQueryParameter(
                          i,
                          H5PIntegration.crossoriginCacheBuster
                        )))
                    : t.removeAttribute("crossorigin"),
                    (t.src = e.getPath(i, r));
                });
              var t = function (e) {
                return e.match(/^[a-z0-9]+:\/\//i);
              };
              (e.getCrossOrigin = function (e) {
                return "object" != typeof e
                  ? H5PIntegration.crossorigin &&
                    H5PIntegration.crossoriginRegex &&
                    e.match(H5PIntegration.crossoriginRegex)
                    ? H5PIntegration.crossorigin
                    : null
                  : H5PIntegration.crossorigin && !t(e.path)
                  ? H5PIntegration.crossorigin
                  : void 0;
              }),
                (e.getPath = function (e, n) {
                  if (t(e)) return e;
                  var r,
                    i = "#tmp" === e.substr(-4, 4);
                  if (void 0 === n || i) {
                    if (void 0 === window.H5PEditor) return;
                    r = H5PEditor.filesPath;
                  } else
                    void 0 !== H5PIntegration.contents &&
                      H5PIntegration.contents["cid-" + n] &&
                      (r = H5PIntegration.contents["cid-" + n].contentUrl),
                      r || (r = H5PIntegration.url + "/content/" + n);
                  return (
                    t(r) ||
                      (r =
                        window.location.protocol +
                        "//" +
                        window.location.host +
                        r),
                    r + "/" + e
                  );
                });
            })(),
            (e.getContentPath = function (e) {
              return H5PIntegration.url + "/content/" + e;
            }),
            (e.classFromName = function (e) {
              var t = e.split(".");
              return this[t[t.length - 1]];
            }),
            (e.newRunnable = function (t, n, r, i, o) {
              var a, s, c, l;
              try {
                (c = (a = t.library.split(" ", 2))[0]),
                  (s = a[1].split(".", 2));
              } catch (n) {
                return e.error("Invalid library string: " + t.library);
              }
              if (
                t.params instanceof Object != 1 ||
                t.params instanceof Array == 1
              )
                return (
                  e.error("Invalid library params for: " + t.library),
                  e.error(t.params)
                );
              try {
                (a = a[0].split(".")), (l = window);
                for (var u = 0; u < a.length; u++) l = l[a[u]];
                if ("function" != typeof l) throw null;
              } catch (n) {
                return e.error("Unable to find constructor for: " + t.library);
              }
              void 0 === o && (o = {}),
                t.subContentId && (o.subContentId = t.subContentId),
                t.userDatas &&
                  t.userDatas.state &&
                  H5PIntegration.saveFreq &&
                  (o.previousState = t.userDatas.state),
                t.metadata && (o.metadata = t.metadata);
              var d,
                f = o.standalone || !1;
              return (
                (l.prototype = e.jQuery.extend(
                  {},
                  e.ContentType(f).prototype,
                  l.prototype
                )),
                void 0 ===
                  (d =
                    e.jQuery.inArray(t.library, [
                      "H5P.CoursePresentation 1.0",
                      "H5P.CoursePresentation 1.1",
                      "H5P.CoursePresentation 1.2",
                      "H5P.CoursePresentation 1.3",
                    ]) > -1
                      ? new l(t.params, n)
                      : new l(t.params, n, o)).$ && (d.$ = e.jQuery(d)),
                void 0 === d.contentId && (d.contentId = n),
                void 0 === d.subContentId &&
                  t.subContentId &&
                  (d.subContentId = t.subContentId),
                void 0 === d.parent && o && o.parent && (d.parent = o.parent),
                void 0 === d.libraryInfo &&
                  (d.libraryInfo = {
                    versionedName: t.library,
                    versionedNameNoSpaces: c + "-" + s[0] + "." + s[1],
                    machineName: c,
                    majorVersion: s[0],
                    minorVersion: s[1],
                  }),
                void 0 !== r &&
                  (r.toggleClass("h5p-standalone", f),
                  d.attach(r),
                  e.trigger(
                    d,
                    "domChanged",
                    { $target: r, library: c, key: "newLibrary" },
                    { bubbles: !0, external: !0 }
                  ),
                  (void 0 !== i && i) || e.trigger(d, "resize")),
                d
              );
            }),
            (e.error = function (e) {
              void 0 !== window.console &&
                void 0 !== console.error &&
                console.error(e.stack ? e.stack : e);
            }),
            (e.t = function (e, t, n) {
              if (
                (void 0 === n && (n = "H5P"), void 0 === H5PIntegration.l10n[n])
              )
                return '[Missing translation namespace "' + n + '"]';
              if (void 0 === H5PIntegration.l10n[n][e])
                return '[Missing translation "' + e + '" in "' + n + '"]';
              var r = H5PIntegration.l10n[n][e];
              if (void 0 !== t) for (var i in t) r = r.replace(i, t[i]);
              return r;
            }),
            (e.Dialog = function (t, n, r, i, o) {
              var a = this;
              this.activeElement = document.activeElement;
              var s = e
                .jQuery(
                  '<div class="h5p-popup-dialog h5p-' +
                    t +
                    '-dialog" aria-labelledby="' +
                    t +
                    '-dialog-header" aria-modal="true" role="dialog" tabindex="-1">                              <div class="h5p-inner">                                <h2 id="' +
                    t +
                    '-dialog-header">' +
                    n +
                    '</h2>                                <div class="h5p-scroll-content">' +
                    r +
                    '</div>                                <div class="h5p-close" role="button" tabindex="0" aria-label="' +
                    e.t("close") +
                    '" title="' +
                    e.t("close") +
                    '"></div>                              </div>                            </div>'
                )
                .insertAfter(i)
                .click(function (e) {
                  (e && e.originalEvent && e.originalEvent.preventClosing) ||
                    a.close();
                })
                .children(".h5p-inner")
                .click(function (e) {
                  e.originalEvent.preventClosing = !0;
                })
                .find(".h5p-close")
                .click(function () {
                  a.close();
                })
                .keypress(function (e) {
                  if (13 === e.which || 32 === e.which) return a.close(), !1;
                })
                .end()
                .find("a")
                .click(function (e) {
                  e.stopPropagation();
                })
                .end()
                .end();
              (a.open = function (t) {
                t && s.css("height", "100%"),
                  setTimeout(function () {
                    s.addClass("h5p-open"),
                      e.jQuery(a).trigger("dialog-opened", [s]),
                      s.focus();
                  }, 1);
              }),
                (a.close = function () {
                  s.removeClass("h5p-open"),
                    setTimeout(function () {
                      s.remove(),
                        e.jQuery(a).trigger("dialog-closed", [s]),
                        i.attr("tabindex", "-1"),
                        o
                          ? o.focus()
                          : a.activeElement
                          ? a.activeElement.focus()
                          : i.focus();
                    }, 200);
                });
            }),
            (e.getCopyrights = function (t, n, r, i) {
              var o;
              if (void 0 !== t.getCopyrights)
                try {
                  o = t.getCopyrights();
                } catch (e) {}
              void 0 === o &&
                ((o = new e.ContentCopyrights()), e.findCopyrights(o, n, r));
              var a = e.buildMetadataCopyrights(i, t.libraryInfo.machineName);
              return (
                void 0 !== a && o.addMediaInFront(a),
                void 0 !== o && (o = o.toString()),
                o
              );
            }),
            (e.findCopyrights = function (t, n, r, i) {
              var o;
              for (var a in (i && ((i.params = n), l(i, i.machineName, r)), n))
                if (n.hasOwnProperty(a))
                  if ("overrideSettings" !== a) {
                    var s = n[a];
                    if (
                      (s && s.library && "string" == typeof s.library
                        ? (o = s.library.split(" ")[0])
                        : s &&
                          s.library &&
                          "object" == typeof s.library &&
                          (o =
                            s.library.library &&
                            "string" == typeof s.library.library
                              ? s.library.library.split(" ")[0]
                              : o),
                      s instanceof Array)
                    )
                      e.findCopyrights(t, s, r);
                    else if (s instanceof Object)
                      if (
                        (l(s, o, r),
                        void 0 === s.copyright ||
                          void 0 === s.copyright.license ||
                          void 0 === s.path ||
                          void 0 === s.mime)
                      )
                        e.findCopyrights(t, s, r);
                      else {
                        var c = new e.MediaCopyright(s.copyright);
                        void 0 !== s.width &&
                          void 0 !== s.height &&
                          c.setThumbnail(
                            new e.Thumbnail(
                              e.getPath(s.path, r),
                              s.width,
                              s.height
                            )
                          ),
                          t.addMedia(c);
                      }
                  } else
                    console.warn(
                      "The semantics field 'overrideSettings' is DEPRECATED and should not be used."
                    ),
                      console.warn(n);
              function l(n, r, i) {
                if (n.metadata) {
                  const o = e.buildMetadataCopyrights(n.metadata, r);
                  if (void 0 !== o) {
                    if (
                      n.params &&
                      "Image" === n.params.contentName &&
                      n.params.file
                    ) {
                      const t = n.params.file.path,
                        r = n.params.file.width,
                        a = n.params.file.height;
                      o.setThumbnail(
                        new e.Thumbnail(e.getPath(t, i), r, a, n.params.alt)
                      );
                    }
                    t.addMedia(o);
                  }
                }
              }
            }),
            (e.buildMetadataCopyrights = function (t) {
              if (t && void 0 !== t.license && "U" !== t.license) {
                var n = {
                  contentType: t.contentType,
                  title: t.title,
                  author:
                    t.authors && t.authors.length > 0
                      ? t.authors
                          .map(function (e) {
                            return e.role
                              ? e.name + " (" + e.role + ")"
                              : e.name;
                          })
                          .join(", ")
                      : void 0,
                  source: t.source,
                  year: t.yearFrom
                    ? t.yearFrom + (t.yearTo ? "-" + t.yearTo : "")
                    : void 0,
                  license: t.license,
                  version: t.licenseVersion,
                  licenseExtras: t.licenseExtras,
                  changes:
                    t.changes && t.changes.length > 0
                      ? t.changes
                          .map(function (e) {
                            return (
                              e.log +
                              (e.author ? ", " + e.author : "") +
                              (e.date ? ", " + e.date : "")
                            );
                          })
                          .join(" / ")
                      : void 0,
                };
                return new e.MediaCopyright(n);
              }
            }),
            (e.openReuseDialog = function (t, n, r, i, o) {
              let a = "";
              n.displayOptions.export &&
                (a +=
                  '<button type="button" class="h5p-big-button h5p-download-button"><div class="h5p-button-title">Download as an .h5p file</div><div class="h5p-button-description">.h5p files may be uploaded to any web-site where H5P content may be created.</div></button>'),
                n.displayOptions.export &&
                  n.displayOptions.copy &&
                  (a +=
                    '<div class="h5p-horizontal-line-text"><span>or</span></div>'),
                n.displayOptions.copy &&
                  (a +=
                    '<button type="button" class="h5p-big-button h5p-copy-button"><div class="h5p-button-title">Copy content</div><div class="h5p-button-description">Copied content may be pasted anywhere this content type is supported on this website.</div></button>');
              const s = new e.Dialog("reuse", e.t("reuseContent"), a, t);
              e
                .jQuery(s)
                .on("dialog-opened", function (t, a) {
                  e
                    .jQuery(
                      '<a href="https://h5p.org/node/442225" target="_blank">More Info</a>'
                    )
                    .click(function (e) {
                      e.stopPropagation();
                    })
                    .appendTo(a.find("h2")),
                    a.find(".h5p-download-button").click(function () {
                      (window.location.href = n.exportUrl),
                        i.triggerXAPI("downloaded"),
                        s.close();
                    }),
                    a.find(".h5p-copy-button").click(function () {
                      const t = new e.ClipboardItem(r);
                      (t.contentId = o),
                        e.setClipboard(t),
                        i.triggerXAPI("copied"),
                        s.close(),
                        e.attachToastTo(
                          e.jQuery(".h5p-content:first")[0],
                          e.t("contentCopied"),
                          {
                            position: {
                              horizontal: "centered",
                              vertical: "centered",
                              noOverflowX: !0,
                            },
                          }
                        );
                    }),
                    e.trigger(i, "resize");
                })
                .on("dialog-closed", function () {
                  e.trigger(i, "resize");
                }),
                s.open();
            }),
            (e.openEmbedDialog = function (t, n, r, i, o) {
              var a = n + r,
                s = new e.Dialog(
                  "embed",
                  e.t("embed"),
                  '<textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false"></textarea>' +
                    e.t("size") +
                    ': <input aria-label="' +
                    e.t("width") +
                    '" type="text" value="' +
                    Math.ceil(i.width) +
                    '" class="h5p-embed-size"/> × <input aria-label="' +
                    e.t("width") +
                    '" type="text" value="' +
                    Math.ceil(i.height) +
                    '" class="h5p-embed-size"/> px<br/><div role="button" tabindex="0" class="h5p-expander">' +
                    e.t("showAdvanced") +
                    '</div><div class="h5p-expander-content"><p>' +
                    e.t("advancedHelp") +
                    '</p><textarea class="h5p-embed-code-container" autocorrect="off" autocapitalize="off" spellcheck="false">' +
                    r +
                    "</textarea></div>",
                  t
                );
              e
                .jQuery(s)
                .on("dialog-opened", function (t, n) {
                  var r = n.find(".h5p-inner").find(".h5p-scroll-content"),
                    s =
                      (r.outerHeight(),
                      r.innerHeight(),
                      function () {
                        e.trigger(o, "resize");
                      }),
                    c = n.find(".h5p-embed-size:eq(0)"),
                    l = n.find(".h5p-embed-size:eq(1)"),
                    u = function (e, t) {
                      var n = parseFloat(e.val());
                      return isNaN(n) ? t : Math.ceil(n);
                    },
                    d = function () {
                      n.find(".h5p-embed-code-container:first").val(
                        a
                          .replace(":w", u(c, i.width))
                          .replace(":h", u(l, i.height))
                      );
                    };
                  c.change(d),
                    l.change(d),
                    d(),
                    n.find(".h5p-embed-code-container").each(function () {
                      e.jQuery(this)
                        .css("height", this.scrollHeight + "px")
                        .focus(function () {
                          e.jQuery(this).select();
                        });
                    }),
                    n.find(".h5p-embed-code-container").eq(0).select(),
                    s();
                  var f = function () {
                    var t = e.jQuery(this),
                      r = t.next();
                    r.is(":visible")
                      ? (t
                          .removeClass("h5p-open")
                          .text(e.t("showAdvanced"))
                          .attr("aria-expanded", "true"),
                        r.hide())
                      : (t
                          .addClass("h5p-open")
                          .text(e.t("hideAdvanced"))
                          .attr("aria-expanded", "false"),
                        r.show()),
                      n.find(".h5p-embed-code-container").each(function () {
                        e.jQuery(this).css("height", this.scrollHeight + "px");
                      }),
                      s();
                  };
                  n.find(".h5p-expander")
                    .click(f)
                    .keypress(function (e) {
                      if (32 === e.keyCode) return f.apply(this), !1;
                    });
                })
                .on("dialog-closed", function () {
                  e.trigger(o, "resize");
                }),
                s.open();
            }),
            (e.attachToastTo = function (e, t, n) {
              if (void 0 === e || void 0 === t) return;
              const r = function (t) {
                  var n, r, o;
                  -1 ===
                    ((n = t),
                    (r = (n.composedPath && n.composedPath()) || n.path),
                    (o = n.target),
                    null != r
                      ? r.indexOf(window) < 0
                        ? r.concat(window)
                        : r
                      : o === window
                      ? [window]
                      : [o].concat(
                          (function e(t, n) {
                            n = n || [];
                            var r = t.parentNode;
                            return r ? e(r, n.concat(r)) : n;
                          })(o),
                          window
                        )).indexOf(e) && (clearTimeout(c), i());
                },
                i = function () {
                  document.removeEventListener("click", r),
                    o.parentNode && o.parentNode.removeChild(o);
                };
              ((n = n || {}).style = n.style || "h5p-toast"),
                (n.duration = n.duration || 3e3);
              const o = document.createElement("div");
              o.setAttribute("id", n.style),
                o.classList.add("h5p-toast-disabled"),
                o.classList.add(n.style);
              const a = document.createElement("span");
              (a.innerHTML = t), o.appendChild(a), document.body.appendChild(o);
              const s = (function (e, t, n) {
                ((n = n || {}).offsetHorizontal = n.offsetHorizontal || 0),
                  (n.offsetVertical = n.offsetVertical || 0);
                const r = t.getBoundingClientRect(),
                  i = e.getBoundingClientRect();
                let o = 0,
                  a = 0;
                switch (n.horizontal) {
                  case "before":
                    o = i.left - r.width - n.offsetHorizontal;
                    break;
                  case "after":
                    o = i.left + i.width + n.offsetHorizontal;
                    break;
                  case "left":
                    o = i.left + n.offsetHorizontal;
                    break;
                  case "right":
                    o = i.left + i.width - r.width - n.offsetHorizontal;
                    break;
                  default:
                    o = i.left + i.width / 2 - r.width / 2 + n.offsetHorizontal;
                }
                switch (n.vertical) {
                  case "above":
                    a = i.top - r.height - n.offsetVertical;
                    break;
                  case "below":
                  default:
                    a = i.top + i.height + n.offsetVertical;
                    break;
                  case "top":
                    a = i.top + n.offsetVertical;
                    break;
                  case "bottom":
                    a = i.top + i.height - r.height - n.offsetVertical;
                    break;
                  case "centered":
                    a = i.top + i.height / 2 - r.height / 2 + n.offsetVertical;
                }
                const s = document.body.getBoundingClientRect();
                return (
                  (n.noOverflowLeft || n.noOverflowX) && o < s.x && (o = s.x),
                  (n.noOverflowRight || n.noOverflowX) &&
                    o + r.width > s.x + s.width &&
                    (o = s.x + s.width - r.width),
                  (n.noOverflowTop || n.noOverflowY) && a < s.y && (a = s.y),
                  (n.noOverflowBottom || n.noOverflowY) &&
                    a + r.height > s.y + s.height &&
                    (o = s.y + s.height - r.height),
                  { left: o, top: a }
                );
              })(e, o, n.position);
              (o.style.left = Math.round(s.left) + "px"),
                (o.style.top = Math.round(s.top) + "px"),
                o.classList.remove("h5p-toast-disabled");
              const c = setTimeout(i, n.duration);
              document.addEventListener("click", r);
            }),
            (e.ContentCopyrights = function () {
              var e,
                t = [],
                n = [];
              (this.setLabel = function (t) {
                e = t;
              }),
                (this.addMedia = function (e) {
                  void 0 !== e && t.push(e);
                }),
                (this.addMediaInFront = function (e) {
                  void 0 !== e && t.unshift(e);
                }),
                (this.addContent = function (e) {
                  void 0 !== e && n.push(e);
                }),
                (this.toString = function () {
                  for (var r = "", i = 0; i < t.length; i++) r += t[i];
                  for (i = 0; i < n.length; i++) r += n[i];
                  return (
                    "" !== r &&
                      (void 0 !== e && (r = "<h3>" + e + "</h3>" + r),
                      (r =
                        '<div class="h5p-content-copyrights">' + r + "</div>")),
                    r
                  );
                });
            }),
            (e.MediaCopyright = function (t, n, r, i) {
              var o,
                a = new e.DefinitionList(),
                s = function (t) {
                  return void 0 === n || void 0 === n[t] ? e.t(t) : n[t];
                },
                c = function (t, n) {
                  var r,
                    i,
                    o = e.copyrightLicenses[t],
                    a = "";
                  ("PD" === t && n) ||
                    (a += o.hasOwnProperty("label") ? o.label : o),
                    o.versions &&
                      (!o.versions.default ||
                        (n && o.versions[n]) ||
                        (n = o.versions.default),
                      n && o.versions[n] && (r = o.versions[n])),
                    r &&
                      (a && (a += " "),
                      (a += r.hasOwnProperty("label") ? r.label : r)),
                    o.hasOwnProperty("link")
                      ? (i = o.link.replace(
                          ":version",
                          o.linkVersions ? o.linkVersions[n] : n
                        ))
                      : r && o.hasOwnProperty("link") && (i = r.link),
                    i &&
                      (a = '<a href="' + i + '" target="_blank">' + a + "</a>");
                  var s = "";
                  return (
                    "PD" !== t && "C" !== t && (s += t),
                    n &&
                      "CC0 1.0" !== n &&
                      (s && "GNU GPL" !== t && (s += " "), (s += n)),
                    s && (a += " (" + s + ")"),
                    "C" === t && (a += " &copy;"),
                    a
                  );
                };
              if (void 0 !== t) {
                for (var l in i) i.hasOwnProperty(l) && (t[l] = i[l]);
                void 0 === r &&
                  (r = [
                    "contentType",
                    "title",
                    "license",
                    "author",
                    "year",
                    "source",
                    "licenseExtras",
                    "changes",
                  ]);
                for (var u = 0; u < r.length; u++) {
                  var d = r[u];
                  if (void 0 !== t[d] && "" !== t[d]) {
                    var f = t[d];
                    "license" === d && (f = c(t.license, t.version)),
                      "source" === d &&
                        (f = f
                          ? '<a href="' + f + '" target="_blank">' + f + "</a>"
                          : void 0),
                      a.add(new e.Field(s(d), f));
                  }
                }
              }
              (this.setThumbnail = function (e) {
                o = e;
              }),
                (this.undisclosed = function () {
                  if (1 === a.size()) {
                    var e = a.get(0);
                    if (
                      e.getLabel() === s("license") &&
                      e.getValue() === c("U")
                    )
                      return !0;
                  }
                  return !1;
                }),
                (this.toString = function () {
                  var e = "";
                  return (
                    this.undisclosed() ||
                      (void 0 !== o && (e += o),
                      "" !== (e += a) &&
                        (e =
                          '<div class="h5p-media-copyright">' + e + "</div>")),
                    e
                  );
                });
            }),
            (e.Thumbnail = function (e, t, n, r) {
              var i;
              void 0 !== t && (i = Math.round((t / n) * 100)),
                (this.toString = function () {
                  return (
                    '<img src="' +
                    e +
                    '" alt="' +
                    (r || "") +
                    '" class="h5p-thumbnail" height="100"' +
                    (void 0 === i ? "" : ' width="' + i + '"') +
                    "/>"
                  );
                });
            }),
            (e.Field = function (e, t) {
              (this.getLabel = function () {
                return e;
              }),
                (this.getValue = function () {
                  return t;
                });
            }),
            (e.DefinitionList = function () {
              var e = [];
              (this.add = function (t) {
                e.push(t);
              }),
                (this.size = function () {
                  return e.length;
                }),
                (this.get = function (t) {
                  return e[t];
                }),
                (this.toString = function () {
                  for (var t = "", n = 0; n < e.length; n++) {
                    var r = e[n];
                    t +=
                      "<dt>" +
                      r.getLabel() +
                      "</dt><dd>" +
                      r.getValue() +
                      "</dd>";
                  }
                  return "" === t
                    ? t
                    : '<dl class="h5p-definition-list">' + t + "</dl>";
                });
            }),
            (e.Coords = function (t, n, r, i) {
              return this instanceof e.Coords
                ? ((this.x = 0),
                  (this.y = 0),
                  (this.w = 1),
                  (this.h = 1),
                  "object" == typeof t
                    ? ((this.x = t.x),
                      (this.y = t.y),
                      (this.w = t.w),
                      (this.h = t.h))
                    : (void 0 !== t && (this.x = t),
                      void 0 !== n && (this.y = n),
                      void 0 !== r && (this.w = r),
                      void 0 !== i && (this.h = i)),
                  this)
                : new e.Coords(t, n, r, i);
            }),
            (e.libraryFromString = function (e) {
              var t = /(.+)\s(\d+)\.(\d+)$/g.exec(e);
              return (
                null !== t && {
                  machineName: t[1],
                  majorVersion: parseInt(t[2]),
                  minorVersion: parseInt(t[3]),
                }
              );
            }),
            (e.getLibraryPath = function (e) {
              return (
                H5PIntegration &&
                  H5PIntegration.libraryDirectories &&
                  e in H5PIntegration.libraryDirectories &&
                  (e = H5PIntegration.libraryDirectories[e]),
                void 0 !== H5PIntegration.urlLibraries
                  ? H5PIntegration.urlLibraries + "/" + e
                  : H5PIntegration.url + "/libraries/" + e
              );
            }),
            (e.cloneObject = function (t, n) {
              var r = t instanceof Array ? [] : {};
              for (var i in t)
                t.hasOwnProperty(i) &&
                  (void 0 !== n && n && "object" == typeof t[i]
                    ? (r[i] = e.cloneObject(t[i], n))
                    : (r[i] = t[i]));
              return r;
            }),
            (e.trim = function (e) {
              return e.replace(/^\s+|\s+$/g, "");
            }),
            (e.isEmpty = (t) => {
              if (!t && 0 !== t && !1 !== t) return !0;
              if (Array.isArray(t)) {
                for (let n = 0; n < t.length; n++)
                  if (!e.isEmpty(t[n])) return !1;
                return !0;
              }
              if ("object" == typeof t) {
                for (let n in t)
                  if (t.hasOwnProperty(n) && !e.isEmpty(t[n])) return !1;
                return !0;
              }
              return !1;
            }),
            (e.jsLoaded = function (t) {
              return (
                (H5PIntegration.loadedJs = H5PIntegration.loadedJs || []),
                -1 !== e.jQuery.inArray(t, H5PIntegration.loadedJs)
              );
            }),
            (e.cssLoaded = function (t) {
              return (
                (H5PIntegration.loadedCss = H5PIntegration.loadedCss || []),
                -1 !== e.jQuery.inArray(t, H5PIntegration.loadedCss)
              );
            }),
            (e.shuffleArray = function (e) {
              if (e instanceof Array) {
                var t,
                  n,
                  r,
                  i = e.length;
                if (0 === i) return !1;
                for (; --i; )
                  (t = Math.floor(Math.random() * (i + 1))),
                    (n = e[i]),
                    (r = e[t]),
                    (e[i] = r),
                    (e[t] = n);
                return e;
              }
            }),
            (e.setFinished = function (t, n, r, i) {
              if (
                ("number" == typeof n || n instanceof Number) &&
                !0 === H5PIntegration.postUserStatistics
              ) {
                var o = function (e) {
                  return Math.round(e.getTime() / 1e3);
                };
                const a = {
                  contentId: t,
                  score: n,
                  maxScore: r,
                  opened: o(e.opened[t]),
                  finished: o(new Date()),
                  time: i,
                };
                e.jQuery
                  .post(H5PIntegration.ajax.setFinished, a)
                  .fail(function () {
                    e.offlineRequestQueue.add(
                      H5PIntegration.ajax.setFinished,
                      a
                    );
                  });
              }
            }),
            Array.prototype.indexOf ||
              (Array.prototype.indexOf = function (e) {
                for (var t = 0; t < this.length; t++)
                  if (this[t] === e) return t;
                return -1;
              }),
            void 0 === String.prototype.trim &&
              (String.prototype.trim = function () {
                return e.trim(this);
              }),
            (e.trigger = function (e, t, n, r) {
              void 0 !== e.trigger
                ? e.trigger(t, n, r)
                : void 0 !== e.$ && void 0 !== e.$.trigger && e.$.trigger(t);
            }),
            (e.on = function (e, t, n) {
              void 0 !== e.on
                ? e.on(t, n)
                : void 0 !== e.$ && void 0 !== e.$.on && e.$.on(t, n);
            }),
            (e.createUUID = function () {
              return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (e) {
                  var t = (16 * Math.random()) | 0;
                  return ("x" === e ? t : (3 & t) | 8).toString(16);
                }
              );
            }),
            (e.createTitle = function (t, n) {
              if (!t) return "";
              void 0 === n && (n = 60);
              var r = e
                .jQuery("<div></div>")
                .text(t.replace(/(<([^>]+)>)/gi, ""))
                .text();
              return r.length > n && (r = r.substr(0, n - 3) + "..."), r;
            }),
            (function (t) {
              function n(e, n, r, i, o, a, s, c) {
                if (void 0 !== H5PIntegration.user) {
                  var l = {
                    url: H5PIntegration.ajax.contentUserData
                      .replace(":contentId", e)
                      .replace(":dataType", n)
                      .replace(":subContentId", r || 0),
                    dataType: "json",
                    async: void 0 === c || c,
                  };
                  void 0 !== o
                    ? ((l.type = "POST"),
                      (l.data = {
                        data: null === o ? 0 : o,
                        preload: a ? 1 : 0,
                        invalidate: s ? 1 : 0,
                      }))
                    : (l.type = "GET"),
                    void 0 !== i &&
                      ((l.error = function (e, t) {
                        i(t);
                      }),
                      (l.success = function (e) {
                        e.success
                          ? !1 !== e.data && void 0 !== e.data
                            ? i(void 0, e.data)
                            : i()
                          : i(e.message);
                      })),
                    t.ajax(l);
                } else i("Not signed in.");
              }
              (e.getUserData = function (e, t, r, i) {
                i || (i = 0),
                  (H5PIntegration.contents = H5PIntegration.contents || {});
                var o = H5PIntegration.contents["cid-" + e] || {},
                  a = o.contentUserData;
                if (a && a[i] && void 0 !== a[i][t]) {
                  if ("RESET" === a[i][t]) return void r(void 0, null);
                  try {
                    r(void 0, JSON.parse(a[i][t]));
                  } catch (e) {
                    r(e);
                  }
                } else
                  n(e, t, i, function (e, n) {
                    if (e || void 0 === n) r(e, n);
                    else {
                      void 0 === o.contentUserData &&
                        (o.contentUserData = a = {}),
                        void 0 === a[i] && (a[i] = {}),
                        (a[i][t] = n);
                      try {
                        r(void 0, JSON.parse(n));
                      } catch (e) {
                        r(e);
                      }
                    }
                  });
              }),
                (e.setUserData = function (t, r, i, o) {
                  var a = e.jQuery.extend(
                    !0,
                    {},
                    {
                      subContentId: 0,
                      preloaded: !0,
                      deleteOnChange: !1,
                      async: !0,
                    },
                    o
                  );
                  try {
                    i = JSON.stringify(i);
                  } catch (e) {
                    return void (a.errorCallback && a.errorCallback(e));
                  }
                  var s = H5PIntegration.contents["cid-" + t];
                  void 0 === s &&
                    (s = H5PIntegration.contents["cid-" + t] = {}),
                    s.contentUserData || (s.contentUserData = {});
                  var c = s.contentUserData;
                  void 0 === c[a.subContentId] && (c[a.subContentId] = {}),
                    i !== c[a.subContentId][r] &&
                      ((c[a.subContentId][r] = i),
                      n(
                        t,
                        r,
                        a.subContentId,
                        function (e) {
                          a.errorCallback && e && a.errorCallback(e);
                        },
                        i,
                        a.preloaded,
                        a.deleteOnChange,
                        a.async
                      ));
                }),
                (e.deleteUserData = function (e, t, r) {
                  r || (r = 0);
                  var i = H5PIntegration.contents["cid-" + e].contentUserData;
                  i && i[r] && i[r][t] && delete i[r][t],
                    n(e, t, r, void 0, null);
                }),
                (e.getContentForInstance = function (e) {
                  var t = "cid-" + e;
                  return H5PIntegration &&
                    H5PIntegration.contents &&
                    H5PIntegration.contents[t]
                    ? H5PIntegration.contents[t]
                    : void 0;
                }),
                (e.ClipboardItem = function (e, t, n) {
                  var r = this;
                  t || ((t = "action"), (e = { action: e })),
                    (r.specific = e),
                    t && e[t] && (r.generic = t),
                    n && (r.from = n),
                    window.H5PEditor &&
                      H5PEditor.contentId &&
                      (r.contentId = H5PEditor.contentId),
                    r.specific.width ||
                      r.specific.height ||
                      (function () {
                        if (r.generic) {
                          var e = r.specific[r.generic];
                          e.params.file &&
                            e.params.file.width &&
                            e.params.file.height &&
                            ((r.width = 20),
                            (r.height =
                              (e.params.file.height / e.params.file.width) *
                              r.width));
                        }
                      })();
                }),
                (e.clipboardify = function (t) {
                  t instanceof e.ClipboardItem || (t = new e.ClipboardItem(t)),
                    e.setClipboard(t);
                }),
                (e.getClipboard = function () {
                  return r();
                }),
                (e.setClipboard = function (t) {
                  localStorage.setItem("h5pClipboard", JSON.stringify(t)),
                    e.externalDispatcher.trigger("datainclipboard", {
                      reset: !1,
                    });
                }),
                (e.getLibraryConfig = function (e) {
                  return H5PIntegration.libraryConfig &&
                    H5PIntegration.libraryConfig[e]
                    ? H5PIntegration.libraryConfig[e]
                    : {};
                });
              var r = function () {
                  var e = localStorage.getItem("h5pClipboard");
                  if (e) {
                    try {
                      e = JSON.parse(e);
                    } catch (e) {
                      return void console.error(
                        "Unable to parse JSON from clipboard.",
                        e
                      );
                    }
                    return (
                      i(e.specific, function (t) {
                        if (
                          "#tmp" !== t.substr(-4, 4) &&
                          e.contentId &&
                          !t.match(/^https?:\/\//i)
                        ) {
                          let n;
                          return (
                            (n = H5PEditor.contentId
                              ? "../" + e.contentId + "/"
                              : (H5PEditor.contentRelUrl
                                  ? H5PEditor.contentRelUrl
                                  : "../content/") +
                                e.contentId +
                                "/"),
                            t.substr(0, n.length) === n ? t : n + t
                          );
                        }
                        return t;
                      }),
                      e.generic && (e.generic = e.specific[e.generic]),
                      e
                    );
                  }
                },
                i = function (e, t) {
                  for (var n in e)
                    if (e.hasOwnProperty(n) && e[n] instanceof Object) {
                      var r = e[n];
                      void 0 !== r.path && void 0 !== r.mime
                        ? (r.path = t(r.path))
                        : (void 0 !== r.library &&
                            void 0 !== r.subContentId &&
                            delete r.subContentId,
                          i(r, t));
                    }
                };
              t(document).ready(function () {
                window.addEventListener("storage", function (t) {
                  "h5pClipboard" === t.key &&
                    e.externalDispatcher.trigger("datainclipboard", {
                      reset: null === t.newValue,
                    });
                });
                var t = {
                  default: "4.0",
                  "4.0": e.t("licenseCC40"),
                  "3.0": e.t("licenseCC30"),
                  2.5: e.t("licenseCC25"),
                  "2.0": e.t("licenseCC20"),
                  "1.0": e.t("licenseCC10"),
                };
                if (
                  ((e.copyrightLicenses = {
                    U: e.t("licenseU"),
                    "CC BY": {
                      label: e.t("licenseCCBY"),
                      link: "http://creativecommons.org/licenses/by/:version",
                      versions: t,
                    },
                    "CC BY-SA": {
                      label: e.t("licenseCCBYSA"),
                      link: "http://creativecommons.org/licenses/by-sa/:version",
                      versions: t,
                    },
                    "CC BY-ND": {
                      label: e.t("licenseCCBYND"),
                      link: "http://creativecommons.org/licenses/by-nd/:version",
                      versions: t,
                    },
                    "CC BY-NC": {
                      label: e.t("licenseCCBYNC"),
                      link: "http://creativecommons.org/licenses/by-nc/:version",
                      versions: t,
                    },
                    "CC BY-NC-SA": {
                      label: e.t("licenseCCBYNCSA"),
                      link: "http://creativecommons.org/licenses/by-nc-sa/:version",
                      versions: t,
                    },
                    "CC BY-NC-ND": {
                      label: e.t("licenseCCBYNCND"),
                      link: "http://creativecommons.org/licenses/by-nc-nd/:version",
                      versions: t,
                    },
                    "CC0 1.0": {
                      label: e.t("licenseCC010"),
                      link: "https://creativecommons.org/publicdomain/zero/1.0/",
                    },
                    "GNU GPL": {
                      label: e.t("licenseGPL"),
                      link: "http://www.gnu.org/licenses/gpl-:version-standalone.html",
                      linkVersions: { v3: "3.0", v2: "2.0", v1: "1.0" },
                      versions: {
                        default: "v3",
                        v3: e.t("licenseV3"),
                        v2: e.t("licenseV2"),
                        v1: e.t("licenseV1"),
                      },
                    },
                    PD: {
                      label: e.t("licensePD"),
                      versions: {
                        "CC0 1.0": {
                          label: e.t("licenseCC010"),
                          link: "https://creativecommons.org/publicdomain/zero/1.0/",
                        },
                        "CC PDM": {
                          label: e.t("licensePDM"),
                          link: "https://creativecommons.org/publicdomain/mark/1.0/",
                        },
                      },
                    },
                    "ODC PDDL":
                      '<a href="http://opendatacommons.org/licenses/pddl/1.0/" target="_blank">Public Domain Dedication and Licence</a>',
                    "CC PDM": {
                      label: e.t("licensePDM"),
                      link: "https://creativecommons.org/publicdomain/mark/1.0/",
                    },
                    C: e.t("licenseC"),
                  }),
                  e.isFramed &&
                    !1 === e.externalEmbed &&
                    e.externalDispatcher.on("*", function (e) {
                      window.parent.H5P.externalDispatcher.trigger.call(
                        this,
                        e
                      );
                    }),
                  e.preventInit || e.init(document.body),
                  !1 !== H5PIntegration.saveFreq)
                ) {
                  var n = 0,
                    r = function () {
                      var t = new Date().getTime();
                      if (t - n > 250) {
                        n = t;
                        for (var r = 0; r < e.instances.length; r++) {
                          var i = e.instances[r];
                          if (
                            i.getCurrentState instanceof Function ||
                            "function" == typeof i.getCurrentState
                          ) {
                            var o = i.getCurrentState();
                            void 0 !== o &&
                              e.setUserData(i.contentId, "state", o, {
                                deleteOnChange: !0,
                                async: !1,
                              });
                          }
                        }
                      }
                    };
                  e.$window.one("beforeunload unload", function () {
                    e.$window.off("pagehide beforeunload unload"), r();
                  }),
                    e.$window.on("pagehide", r);
                }
              });
            })(e.jQuery);
        },
        264: () => {
          var e, t;
          (H5P.RequestQueue = (function (e, t) {
            const n = function (e) {
              t.call(this),
                (this.processingQueue = !1),
                (e = e || {}),
                (this.showToast = e.showToast),
                (this.itemName = "requestQueue");
            };
            return (
              (n.prototype.add = function (e, t) {
                if (!window.localStorage) return !1;
                let n = this.getStoredRequests();
                return (
                  n || (n = []),
                  n.push({ url: e, data: t }),
                  window.localStorage.setItem(this.itemName, JSON.stringify(n)),
                  this.trigger("requestQueued", {
                    storedStatements: n,
                    processingQueue: this.processingQueue,
                  }),
                  !0
                );
              }),
              (n.prototype.getStoredRequests = function () {
                if (!window.localStorage) return !1;
                const e = window.localStorage.getItem(this.itemName);
                return e ? JSON.parse(e) : [];
              }),
              (n.prototype.clearQueue = function () {
                return (
                  !!window.localStorage &&
                  (window.localStorage.removeItem(this.itemName), !0)
                );
              }),
              (n.prototype.resumeQueue = function () {
                if (
                  !H5PIntegration ||
                  !window.navigator ||
                  !window.localStorage
                )
                  return !1;
                if (this.processingQueue) return !1;
                const e = this.getStoredRequests(),
                  t = e.length;
                return (
                  this.clearQueue(),
                  t
                    ? ((this.processingQueue = !0), this.processQueue(e), !0)
                    : (this.trigger("emptiedQueue", e), !0)
                );
              }),
              (n.prototype.processQueue = function (t) {
                if (!t.length) return;
                this.trigger("processingQueue");
                const n = t.shift(),
                  r = this;
                e.post(n.url, n.data)
                  .fail(r.onQueuedRequestFail.bind(r, n))
                  .always(r.onQueuedRequestProcessed.bind(r, t));
              }),
              (n.prototype.onQueuedRequestFail = function (e) {
                window.navigator.onLine || this.add(e.url, e.data);
              }),
              (n.prototype.onQueuedRequestProcessed = function (e) {
                if (e.length) return void this.processQueue(e);
                this.processingQueue = !1;
                const t = this.getStoredRequests();
                this.trigger("queueEmptied", t);
              }),
              (n.prototype.displayToastMessage = function (e, t, n) {
                if (!this.showToast && !t) return;
                const r = H5P.jQuery.extend(
                  !0,
                  {},
                  {
                    position: {
                      horizontal: "centered",
                      vertical: "centered",
                      noOverflowX: !0,
                    },
                  },
                  n
                );
                H5P.attachToastTo(H5P.jQuery(".h5p-content:first")[0], e, r);
              }),
              n
            );
          })(H5P.jQuery, H5P.EventDispatcher)),
            (H5P.OfflineRequestQueue =
              ((e = H5P.RequestQueue),
              (t = H5P.ConfirmationDialog),
              function (n) {
                const r = new e();
                r.clearQueue();
                let i = null;
                const o = [10, 20, 40, 60, 120, 300, 600];
                let a = -1,
                  s = null,
                  c = !1,
                  l = !1,
                  u = !1;
                const d = n.instance,
                  f = new t({
                    headerText: H5P.t("offlineDialogHeader"),
                    dialogText: H5P.t("offlineDialogBody"),
                    confirmText: H5P.t("offlineDialogRetryButtonLabel"),
                    hideCancel: !0,
                    hideExit: !0,
                    classes: ["offline"],
                    instance: d,
                    skipRestoreFocus: !0,
                  }),
                  p = f.getElement(),
                  h = document.createElement("div");
                h.classList.add("count-down"),
                  (h.innerHTML = H5P.t("offlineDialogRetryMessage").replace(
                    ":num",
                    '<span class="count-down-num">0</span>'
                  )),
                  p
                    .querySelector(".h5p-confirmation-dialog-text")
                    .appendChild(h);
                const g = h.querySelector(".count-down-num"),
                  v = document.createElement("div");
                v.classList.add("throbber-wrapper");
                const m = document.createElement("div");
                m.classList.add("sending-requests-throbber"),
                  v.appendChild(m),
                  r.on(
                    "requestQueued",
                    function (e) {
                      if (!e.data || !e.data.processingQueue) {
                        if (!c) {
                          const e = document.body.querySelector(".h5p-content");
                          if (!e) return;
                          f.appendTo(e), e.appendChild(v), (c = !0);
                        }
                        x();
                      }
                    }.bind(this)
                  ),
                  r.on(
                    "queueEmptied",
                    function (e) {
                      e.data && e.data.length
                        ? x(!0)
                        : (clearInterval(s),
                          y(!1),
                          (a = -1),
                          l && (f.hide(), (l = !1)),
                          r.displayToastMessage(
                            H5P.t("offlineSuccessfulSubmit"),
                            !0,
                            {
                              position: {
                                vertical: "top",
                                offsetVertical: "100",
                              },
                            }
                          ));
                    }.bind(this)
                  ),
                  f.on(
                    "confirmed",
                    function () {
                      (l = !1),
                        setTimeout(function () {
                          b();
                        }, 100);
                    }.bind(this)
                  ),
                  window.addEventListener(
                    "online",
                    function () {
                      b();
                    }.bind(this)
                  ),
                  window.addEventListener(
                    "message",
                    function (e) {
                      window.parent === e.source &&
                        "h5p" === e.data.context &&
                        "queueRequest" === e.data.action &&
                        this.add(e.data.url, e.data.data);
                    }.bind(this)
                  );
                const y = function (e) {
                    (u = !u),
                      void 0 !== e && (u = e),
                      u && l && (f.hide(), (l = !1)),
                      u ? v.classList.add("show") : v.classList.remove("show");
                  },
                  b = function () {
                    clearInterval(s), y(!0), r.resumeQueue();
                  },
                  x = function (e) {
                    l ||
                      (y(!1),
                      l ||
                        (e
                          ? setTimeout(function () {
                              f.show(0);
                            }, 100)
                          : f.show(0)),
                      (l = !0),
                      (i = new Date().getTime()),
                      (a += 1),
                      a >= o.length && (a = o.length - 1),
                      clearInterval(s),
                      (s = setInterval(w, 100)));
                  },
                  w = function () {
                    const e = new Date().getTime(),
                      t = Math.floor((e - i) / 1e3),
                      n = o[a] - t;
                    (g.textContent = n.toString()), n <= 0 && b();
                  };
                this.add = function (e, t) {
                  if (window.navigator.onLine) return !1;
                  r.add(e, t);
                };
              }));
        },
      },
      t = {};
    function n(r) {
      var i = t[r];
      if (void 0 !== i) return i.exports;
      var o = (t[r] = { id: r, loaded: !1, exports: {} });
      return e[r](o, o.exports, n), (o.loaded = !0), o.exports;
    }
    (n.amdO = {}),
      (n.d = (e, t) => {
        for (var r in t)
          n.o(t, r) &&
            !n.o(e, r) &&
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
      }),
      (n.hmd = (e) => (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: () => {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id
            );
          },
        }),
        e
      )),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var r = {};
    return (
      (() => {
        "use strict";
        n(128),
          n(195),
          n(449),
          n(268),
          n(2),
          n(798),
          n(644),
          n(264),
          n(41),
          n(597);
      })(),
      r.default
    );
  })()
);
