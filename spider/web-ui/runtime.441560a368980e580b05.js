!(function () {
  "use strict";
  var e,
    v = {},
    g = {};
  function n(e) {
    var o = g[e];
    if (void 0 !== o) return o.exports;
    var t = (g[e] = { id: e, loaded: !1, exports: {} });
    return (v[e].call(t.exports, t, t.exports, n), (t.loaded = !0), t.exports);
  }
  ((n.m = v),
    (e = []),
    (n.O = function (o, t, f, u) {
      if (!t) {
        var r = 1 / 0;
        for (i = 0; i < e.length; i++) {
          ((t = e[i][0]), (f = e[i][1]), (u = e[i][2]));
          for (var s = !0, a = 0; a < t.length; a++)
            (!1 & u || r >= u) &&
            Object.keys(n.O).every(function (b) {
              return n.O[b](t[a]);
            })
              ? t.splice(a--, 1)
              : ((s = !1), u < r && (r = u));
          if (s) {
            e.splice(i--, 1);
            var d = f();
            void 0 !== d && (o = d);
          }
        }
        return o;
      }
      u = u || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > u; i--) e[i] = e[i - 1];
      e[i] = [t, f, u];
    }),
    (n.n = function (e) {
      var o =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return (n.d(o, { a: o }), o);
    }),
    (function () {
      var o,
        e = Object.getPrototypeOf
          ? function (t) {
              return Object.getPrototypeOf(t);
            }
          : function (t) {
              return t.__proto__;
            };
      n.t = function (t, f) {
        if (
          (1 & f && (t = this(t)),
          8 & f ||
            ("object" == typeof t &&
              t &&
              ((4 & f && t.__esModule) ||
                (16 & f && "function" == typeof t.then))))
        )
          return t;
        var u = Object.create(null);
        n.r(u);
        var i = {};
        o = o || [null, e({}), e([]), e(e)];
        for (
          var r = 2 & f && t;
          "object" == typeof r && !~o.indexOf(r);
          r = e(r)
        )
          Object.getOwnPropertyNames(r).forEach(function (s) {
            i[s] = function () {
              return t[s];
            };
          });
        return (
          (i.default = function () {
            return t;
          }),
          n.d(u, i),
          u
        );
      };
    })(),
    (n.d = function (e, o) {
      for (var t in o)
        n.o(o, t) &&
          !n.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: o[t] });
    }),
    (n.f = {}),
    (n.e = function (e) {
      return Promise.all(
        Object.keys(n.f).reduce(function (o, t) {
          return (n.f[t](e, o), o);
        }, []),
      );
    }),
    (n.u = function (e) {
      return (
        e +
        "." +
        {
          26: "8a3abb28e3dace91fc10",
          252: "56c8a41e77a220bd963d",
          879: "e99bca15db6db6f410cc",
          983: "21193233782d2204f1a8",
        }[e] +
        ".js"
      );
    }),
    (n.miniCssF = function (e) {
      return "styles.a9f2dff4b94878be22c3.css";
    }),
    (n.hmd = function (e) {
      return (
        (e = Object.create(e)).children || (e.children = []),
        Object.defineProperty(e, "exports", {
          enumerable: !0,
          set: function () {
            throw new Error(
              "ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " +
                e.id,
            );
          },
        }),
        e
      );
    }),
    (n.o = function (e, o) {
      return Object.prototype.hasOwnProperty.call(e, o);
    }),
    (function () {
      var e = {},
        o = "gns3-web-ui:";
      n.l = function (t, f, u, i) {
        if (e[t]) e[t].push(f);
        else {
          var r, s;
          if (void 0 !== u)
            for (
              var a = document.getElementsByTagName("script"), d = 0;
              d < a.length;
              d++
            ) {
              var c = a[d];
              if (
                c.getAttribute("src") == t ||
                c.getAttribute("data-webpack") == o + u
              ) {
                r = c;
                break;
              }
            }
          (r ||
            ((s = !0),
            ((r = document.createElement("script")).charset = "utf-8"),
            (r.timeout = 120),
            n.nc && r.setAttribute("nonce", n.nc),
            r.setAttribute("data-webpack", o + u),
            (r.src = n.tu(t))),
            (e[t] = [f]));
          var l = function (_, b) {
              ((r.onerror = r.onload = null), clearTimeout(p));
              var y = e[t];
              if (
                (delete e[t],
                r.parentNode && r.parentNode.removeChild(r),
                y &&
                  y.forEach(function (h) {
                    return h(b);
                  }),
                _)
              )
                return _(b);
            },
            p = setTimeout(
              l.bind(null, void 0, { type: "timeout", target: r }),
              12e4,
            );
          ((r.onerror = l.bind(null, r.onerror)),
            (r.onload = l.bind(null, r.onload)),
            s && document.head.appendChild(r));
        }
      };
    })(),
    (n.r = function (e) {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (function () {
      var e;
      n.tu = function (o) {
        return (
          void 0 === e &&
            ((e = {
              createScriptURL: function (t) {
                return t;
              },
            }),
            "undefined" != typeof trustedTypes &&
              trustedTypes.createPolicy &&
              (e = trustedTypes.createPolicy("angular#bundler", e))),
          e.createScriptURL(o)
        );
      };
    })(),
    (n.p = ""),
    (function () {
      var e = { 666: 0 };
      ((n.f.j = function (f, u) {
        var i = n.o(e, f) ? e[f] : void 0;
        if (0 !== i)
          if (i) u.push(i[2]);
          else if (666 != f) {
            var r = new Promise(function (c, l) {
              i = e[f] = [c, l];
            });
            u.push((i[2] = r));
            var s = n.p + n.u(f),
              a = new Error();
            n.l(
              s,
              function (c) {
                if (n.o(e, f) && (0 !== (i = e[f]) && (e[f] = void 0), i)) {
                  var l = c && ("load" === c.type ? "missing" : c.type),
                    p = c && c.target && c.target.src;
                  ((a.message =
                    "Loading chunk " + f + " failed.\n(" + l + ": " + p + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = l),
                    (a.request = p),
                    i[1](a));
                }
              },
              "chunk-" + f,
              f,
            );
          } else e[f] = 0;
      }),
        (n.O.j = function (f) {
          return 0 === e[f];
        }));
      var o = function (f, u) {
          var a,
            d,
            i = u[0],
            r = u[1],
            s = u[2],
            c = 0;
          for (a in r) n.o(r, a) && (n.m[a] = r[a]);
          if (s) var l = s(n);
          for (f && f(u); c < i.length; c++)
            (n.o(e, (d = i[c])) && e[d] && e[d][0](), (e[i[c]] = 0));
          return n.O(l);
        },
        t = (self.webpackChunkgns3_web_ui = self.webpackChunkgns3_web_ui || []);
      (t.forEach(o.bind(null, 0)), (t.push = o.bind(null, t.push.bind(t))));
    })());
})();
