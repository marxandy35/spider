(self.webpackChunkgns3_web_ui = self.webpackChunkgns3_web_ui || []).push([
  [879],
  {
    65135: function (x, C, s) {
      var d = s(30527),
        y = s(50456),
        p = s(61218),
        m = d.TypeError;
      x.exports = function (E) {
        if (y(E)) return E;
        throw m(p(E) + " is not a function");
      };
    },
    52229: function (x, C, s) {
      var d = s(30527),
        y = s(90221),
        p = s(61218),
        m = d.TypeError;
      x.exports = function (E) {
        if (y(E)) return E;
        throw m(p(E) + " is not a constructor");
      };
    },
    31124: function (x, C, s) {
      var d = s(30527),
        y = s(50456),
        p = d.String,
        m = d.TypeError;
      x.exports = function (E) {
        if ("object" == typeof E || y(E)) return E;
        throw m("Can't set " + p(E) + " as a prototype");
      };
    },
    48481: function (x, C, s) {
      var d = s(59377),
        y = s(68979),
        p = s(7135),
        m = d("unscopables"),
        E = Array.prototype;
      (null == E[m] && p.f(E, m, { configurable: !0, value: y(null) }),
        (x.exports = function (O) {
          E[m][O] = !0;
        }));
    },
    89844: function (x, C, s) {
      "use strict";
      var d = s(29273).charAt;
      x.exports = function (y, p, m) {
        return p + (m ? d(y, p).length : 1);
      };
    },
    47896: function (x, C, s) {
      var d = s(30527),
        y = s(27562),
        p = d.TypeError;
      x.exports = function (m, E) {
        if (y(E, m)) return m;
        throw p("Incorrect invocation");
      };
    },
    14764: function (x, C, s) {
      var d = s(30527),
        y = s(7524),
        p = d.String,
        m = d.TypeError;
      x.exports = function (E) {
        if (y(E)) return E;
        throw m(p(E) + " is not an object");
      };
    },
    97029: function (x, C, s) {
      var d = s(8786),
        y = s(20869),
        p = s(68828),
        m = function (E) {
          return function (O, b, T) {
            var M,
              S = d(O),
              P = p(S),
              R = y(T, P);
            if (E && b != b) {
              for (; P > R; ) if ((M = S[R++]) != M) return !0;
            } else
              for (; P > R; R++)
                if ((E || R in S) && S[R] === b) return E || R || 0;
            return !E && -1;
          };
        };
      x.exports = { includes: m(!0), indexOf: m(!1) };
    },
    53857: function (x, C, s) {
      "use strict";
      var d = s(12611);
      x.exports = function (y, p) {
        var m = [][y];
        return (
          !!m &&
          d(function () {
            m.call(
              null,
              p ||
                function () {
                  throw 1;
                },
              1,
            );
          })
        );
      };
    },
    74472: function (x, C, s) {
      var d = s(30527),
        y = s(65135),
        p = s(64505),
        m = s(5830),
        E = s(68828),
        O = d.TypeError,
        b = function (T) {
          return function (S, P, R, M) {
            y(P);
            var Z = p(S),
              F = m(Z),
              V = E(Z),
              U = T ? V - 1 : 0,
              z = T ? -1 : 1;
            if (R < 2)
              for (;;) {
                if (U in F) {
                  ((M = F[U]), (U += z));
                  break;
                }
                if (((U += z), T ? U < 0 : V <= U))
                  throw O("Reduce of empty array with no initial value");
              }
            for (; T ? U >= 0 : V > U; U += z) U in F && (M = P(M, F[U], U, Z));
            return M;
          };
        };
      x.exports = { left: b(!1), right: b(!0) };
    },
    62804: function (x, C, s) {
      var d = s(86608);
      x.exports = d([].slice);
    },
    58136: function (x, C, s) {
      var y = s(59377)("iterator"),
        p = !1;
      try {
        var m = 0,
          E = {
            next: function () {
              return { done: !!m++ };
            },
            return: function () {
              p = !0;
            },
          };
        ((E[y] = function () {
          return this;
        }),
          Array.from(E, function () {
            throw 2;
          }));
      } catch (O) {}
      x.exports = function (O, b) {
        if (!b && !p) return !1;
        var T = !1;
        try {
          var S = {};
          ((S[y] = function () {
            return {
              next: function () {
                return { done: (T = !0) };
              },
            };
          }),
            O(S));
        } catch (P) {}
        return T;
      };
    },
    6074: function (x, C, s) {
      var d = s(86608),
        y = d({}.toString),
        p = d("".slice);
      x.exports = function (m) {
        return p(y(m), 8, -1);
      };
    },
    75671: function (x, C, s) {
      var d = s(30527),
        y = s(82620),
        p = s(50456),
        m = s(6074),
        O = s(59377)("toStringTag"),
        b = d.Object,
        T =
          "Arguments" ==
          m(
            (function () {
              return arguments;
            })(),
          );
      x.exports = y
        ? m
        : function (P) {
            var R, M, Z;
            return void 0 === P
              ? "Undefined"
              : null === P
                ? "Null"
                : "string" ==
                    typeof (M = (function (P, R) {
                      try {
                        return P[R];
                      } catch (M) {}
                    })((R = b(P)), O))
                  ? M
                  : T
                    ? m(R)
                    : "Object" == (Z = m(R)) && p(R.callee)
                      ? "Arguments"
                      : Z;
          };
    },
    77873: function (x, C, s) {
      var d = s(41806),
        y = s(58711),
        p = s(44973),
        m = s(7135);
      x.exports = function (E, O) {
        for (var b = y(O), T = m.f, S = p.f, P = 0; P < b.length; P++) {
          var R = b[P];
          d(E, R) || T(E, R, S(O, R));
        }
      };
    },
    88571: function (x, C, s) {
      var y = s(59377)("match");
      x.exports = function (p) {
        var m = /./;
        try {
          "/./"[p](m);
        } catch (E) {
          try {
            return ((m[y] = !1), "/./"[p](m));
          } catch (O) {}
        }
        return !1;
      };
    },
    46218: function (x, C, s) {
      var d = s(12611);
      x.exports = !d(function () {
        function y() {}
        return (
          (y.prototype.constructor = null),
          Object.getPrototypeOf(new y()) !== y.prototype
        );
      });
    },
    18476: function (x, C, s) {
      "use strict";
      var d = s(11388).IteratorPrototype,
        y = s(68979),
        p = s(27567),
        m = s(74380),
        E = s(73404),
        O = function () {
          return this;
        };
      x.exports = function (b, T, S) {
        var P = T + " Iterator";
        return (
          (b.prototype = y(d, { next: p(1, S) })),
          m(b, P, !1, !0),
          (E[P] = O),
          b
        );
      };
    },
    79261: function (x, C, s) {
      var d = s(61872),
        y = s(7135),
        p = s(27567);
      x.exports = d
        ? function (m, E, O) {
            return y.f(m, E, p(1, O));
          }
        : function (m, E, O) {
            return ((m[E] = O), m);
          };
    },
    27567: function (x) {
      x.exports = function (C, s) {
        return {
          enumerable: !(1 & C),
          configurable: !(2 & C),
          writable: !(4 & C),
          value: s,
        };
      };
    },
    32513: function (x, C, s) {
      "use strict";
      var d = s(11031),
        y = s(72550),
        p = s(71374),
        m = s(33444),
        E = s(50456),
        O = s(18476),
        b = s(95850),
        T = s(19470),
        S = s(74380),
        P = s(79261),
        R = s(14721),
        M = s(59377),
        Z = s(73404),
        F = s(11388),
        V = m.PROPER,
        U = m.CONFIGURABLE,
        z = F.IteratorPrototype,
        G = F.BUGGY_SAFARI_ITERATORS,
        $ = M("iterator"),
        J = "keys",
        Q = "values",
        nt = "entries",
        X = function () {
          return this;
        };
      x.exports = function (W, xt, Ot, mt, bt, Nt, et) {
        O(Ot, xt, mt);
        var ot,
          it,
          Et,
          K = function (Tt) {
            if (Tt === bt && yt) return yt;
            if (!G && Tt in at) return at[Tt];
            switch (Tt) {
              case J:
              case Q:
              case nt:
                return function () {
                  return new Ot(this, Tt);
                };
            }
            return function () {
              return new Ot(this);
            };
          },
          _ = xt + " Iterator",
          tt = !1,
          at = W.prototype,
          ht = at[$] || at["@@iterator"] || (bt && at[bt]),
          yt = (!G && ht) || K(bt),
          Pt = ("Array" == xt && at.entries) || ht;
        if (
          (Pt &&
            (ot = b(Pt.call(new W()))) !== Object.prototype &&
            ot.next &&
            (!p && b(ot) !== z && (T ? T(ot, z) : E(ot[$]) || R(ot, $, X)),
            S(ot, _, !0, !0),
            p && (Z[_] = X)),
          V &&
            bt == Q &&
            ht &&
            ht.name !== Q &&
            (!p && U
              ? P(at, "name", Q)
              : ((tt = !0),
                (yt = function () {
                  return y(ht, this);
                }))),
          bt)
        )
          if (
            ((it = { values: K(Q), keys: Nt ? yt : K(J), entries: K(nt) }), et)
          )
            for (Et in it) (G || tt || !(Et in at)) && R(at, Et, it[Et]);
          else d({ target: xt, proto: !0, forced: G || tt }, it);
        return (
          (!p || et) && at[$] !== yt && R(at, $, yt, { name: bt }),
          (Z[xt] = yt),
          it
        );
      };
    },
    61872: function (x, C, s) {
      var d = s(12611);
      x.exports = !d(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            },
          })[1]
        );
      });
    },
    73116: function (x, C, s) {
      var d = s(30527),
        y = s(7524),
        p = d.document,
        m = y(p) && y(p.createElement);
      x.exports = function (E) {
        return m ? p.createElement(E) : {};
      };
    },
    41308: function (x) {
      x.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0,
      };
    },
    29741: function (x, C, s) {
      var y = s(73116)("span").classList,
        p = y && y.constructor && y.constructor.prototype;
      x.exports = p === Object.prototype ? void 0 : p;
    },
    11942: function (x) {
      x.exports = "object" == typeof window;
    },
    98257: function (x, C, s) {
      var d = s(59596),
        y = s(30527);
      x.exports = /ipad|iphone|ipod/i.test(d) && void 0 !== y.Pebble;
    },
    46763: function (x, C, s) {
      var d = s(59596);
      x.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(d);
    },
    28027: function (x, C, s) {
      var d = s(6074),
        y = s(30527);
      x.exports = "process" == d(y.process);
    },
    55177: function (x, C, s) {
      var d = s(59596);
      x.exports = /web0s(?!.*chrome)/i.test(d);
    },
    59596: function (x, C, s) {
      var d = s(69301);
      x.exports = d("navigator", "userAgent") || "";
    },
    72137: function (x, C, s) {
      var b,
        T,
        d = s(30527),
        y = s(59596),
        p = d.process,
        m = d.Deno,
        E = (p && p.versions) || (m && m.version),
        O = E && E.v8;
      (O && (T = (b = O.split("."))[0] > 0 && b[0] < 4 ? 1 : +(b[0] + b[1])),
        !T &&
          y &&
          (!(b = y.match(/Edge\/(\d+)/)) || b[1] >= 74) &&
          (b = y.match(/Chrome\/(\d+)/)) &&
          (T = +b[1]),
        (x.exports = T));
    },
    68856: function (x) {
      x.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
      ];
    },
    11031: function (x, C, s) {
      var d = s(30527),
        y = s(44973).f,
        p = s(79261),
        m = s(14721),
        E = s(70282),
        O = s(77873),
        b = s(27734);
      x.exports = function (T, S) {
        var F,
          V,
          U,
          z,
          G,
          P = T.target,
          R = T.global,
          M = T.stat;
        if ((F = R ? d : M ? d[P] || E(P, {}) : (d[P] || {}).prototype))
          for (V in S) {
            if (
              ((z = S[V]),
              (U = T.noTargetGet ? (G = y(F, V)) && G.value : F[V]),
              !b(R ? V : P + (M ? "." : "#") + V, T.forced) && void 0 !== U)
            ) {
              if (typeof z == typeof U) continue;
              O(z, U);
            }
            ((T.sham || (U && U.sham)) && p(z, "sham", !0), m(F, V, z, T));
          }
      };
    },
    12611: function (x) {
      x.exports = function (C) {
        try {
          return !!C();
        } catch (s) {
          return !0;
        }
      };
    },
    9758: function (x, C, s) {
      "use strict";
      s(68579);
      var d = s(86608),
        y = s(14721),
        p = s(7807),
        m = s(12611),
        E = s(59377),
        O = s(79261),
        b = E("species"),
        T = RegExp.prototype;
      x.exports = function (S, P, R, M) {
        var Z = E(S),
          F = !m(function () {
            var G = {};
            return (
              (G[Z] = function () {
                return 7;
              }),
              7 != ""[S](G)
            );
          }),
          V =
            F &&
            !m(function () {
              var G = !1,
                $ = /a/;
              return (
                "split" === S &&
                  ((($ = {}).constructor = {}),
                  ($.constructor[b] = function () {
                    return $;
                  }),
                  ($.flags = ""),
                  ($[Z] = /./[Z])),
                ($.exec = function () {
                  return ((G = !0), null);
                }),
                $[Z](""),
                !G
              );
            });
        if (!F || !V || R) {
          var U = d(/./[Z]),
            z = P(Z, ""[S], function (G, $, J, Q, nt) {
              var X = d(G),
                W = $.exec;
              return W === p || W === T.exec
                ? F && !nt
                  ? { done: !0, value: U($, J, Q) }
                  : { done: !0, value: X(J, $, Q) }
                : { done: !1 };
            });
          (y(String.prototype, S, z[0]), y(T, Z, z[1]));
        }
        M && O(T[Z], "sham", !0);
      };
    },
    40408: function (x) {
      var C = Function.prototype,
        s = C.apply,
        y = C.call;
      x.exports =
        ("object" == typeof Reflect && Reflect.apply) ||
        (C.bind
          ? y.bind(s)
          : function () {
              return y.apply(s, arguments);
            });
    },
    851: function (x, C, s) {
      var d = s(86608),
        y = s(65135),
        p = d(d.bind);
      x.exports = function (m, E) {
        return (
          y(m),
          void 0 === E
            ? m
            : p
              ? p(m, E)
              : function () {
                  return m.apply(E, arguments);
                }
        );
      };
    },
    72550: function (x) {
      var C = Function.prototype.call;
      x.exports = C.bind
        ? C.bind(C)
        : function () {
            return C.apply(C, arguments);
          };
    },
    33444: function (x, C, s) {
      var d = s(61872),
        y = s(41806),
        p = Function.prototype,
        m = d && Object.getOwnPropertyDescriptor,
        E = y(p, "name"),
        O = E && "something" === function () {}.name,
        b = E && (!d || (d && m(p, "name").configurable));
      x.exports = { EXISTS: E, PROPER: O, CONFIGURABLE: b };
    },
    86608: function (x) {
      var C = Function.prototype,
        s = C.bind,
        d = C.call,
        y = s && s.bind(d);
      x.exports = s
        ? function (p) {
            return p && y(d, p);
          }
        : function (p) {
            return (
              p &&
              function () {
                return d.apply(p, arguments);
              }
            );
          };
    },
    69301: function (x, C, s) {
      var d = s(30527),
        y = s(50456),
        p = function (m) {
          return y(m) ? m : void 0;
        };
      x.exports = function (m, E) {
        return arguments.length < 2 ? p(d[m]) : d[m] && d[m][E];
      };
    },
    76796: function (x, C, s) {
      var d = s(75671),
        y = s(39296),
        p = s(73404),
        E = s(59377)("iterator");
      x.exports = function (O) {
        if (null != O) return y(O, E) || y(O, "@@iterator") || p[d(O)];
      };
    },
    70047: function (x, C, s) {
      var d = s(30527),
        y = s(72550),
        p = s(65135),
        m = s(14764),
        E = s(61218),
        O = s(76796),
        b = d.TypeError;
      x.exports = function (T, S) {
        var P = arguments.length < 2 ? O(T) : S;
        if (p(P)) return m(y(P, T));
        throw b(E(T) + " is not iterable");
      };
    },
    39296: function (x, C, s) {
      var d = s(65135);
      x.exports = function (y, p) {
        var m = y[p];
        return null == m ? void 0 : d(m);
      };
    },
    83667: function (x, C, s) {
      var d = s(86608),
        y = s(64505),
        p = Math.floor,
        m = d("".charAt),
        E = d("".replace),
        O = d("".slice),
        b = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
        T = /\$([$&'`]|\d{1,2})/g;
      x.exports = function (S, P, R, M, Z, F) {
        var V = R + S.length,
          U = M.length,
          z = T;
        return (
          void 0 !== Z && ((Z = y(Z)), (z = b)),
          E(F, z, function (G, $) {
            var J;
            switch (m($, 0)) {
              case "$":
                return "$";
              case "&":
                return S;
              case "`":
                return O(P, 0, R);
              case "'":
                return O(P, V);
              case "<":
                J = Z[O($, 1, -1)];
                break;
              default:
                var Q = +$;
                if (0 === Q) return G;
                if (Q > U) {
                  var nt = p(Q / 10);
                  return 0 === nt
                    ? G
                    : nt <= U
                      ? void 0 === M[nt - 1]
                        ? m($, 1)
                        : M[nt - 1] + m($, 1)
                      : G;
                }
                J = M[Q - 1];
            }
            return void 0 === J ? "" : J;
          })
        );
      };
    },
    30527: function (x) {
      var C = function (s) {
        return s && s.Math == Math && s;
      };
      x.exports =
        C("object" == typeof globalThis && globalThis) ||
        C("object" == typeof window && window) ||
        C("object" == typeof self && self) ||
        C("object" == typeof global && global) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    },
    41806: function (x, C, s) {
      var d = s(86608),
        y = s(64505),
        p = d({}.hasOwnProperty);
      x.exports =
        Object.hasOwn ||
        function (E, O) {
          return p(y(E), O);
        };
    },
    68205: function (x) {
      x.exports = {};
    },
    50170: function (x, C, s) {
      var d = s(30527);
      x.exports = function (y, p) {
        var m = d.console;
        m && m.error && (1 == arguments.length ? m.error(y) : m.error(y, p));
      };
    },
    78496: function (x, C, s) {
      var d = s(69301);
      x.exports = d("document", "documentElement");
    },
    52224: function (x, C, s) {
      var d = s(61872),
        y = s(12611),
        p = s(73116);
      x.exports =
        !d &&
        !y(function () {
          return (
            7 !=
            Object.defineProperty(p("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    5830: function (x, C, s) {
      var d = s(30527),
        y = s(86608),
        p = s(12611),
        m = s(6074),
        E = d.Object,
        O = y("".split);
      x.exports = p(function () {
        return !E("z").propertyIsEnumerable(0);
      })
        ? function (b) {
            return "String" == m(b) ? O(b, "") : E(b);
          }
        : E;
    },
    16981: function (x, C, s) {
      var d = s(86608),
        y = s(50456),
        p = s(54038),
        m = d(Function.toString);
      (y(p.inspectSource) ||
        (p.inspectSource = function (E) {
          return m(E);
        }),
        (x.exports = p.inspectSource));
    },
    52496: function (x, C, s) {
      var Z,
        F,
        V,
        d = s(96096),
        y = s(30527),
        p = s(86608),
        m = s(7524),
        E = s(79261),
        O = s(41806),
        b = s(54038),
        T = s(90129),
        S = s(68205),
        P = "Object already initialized",
        R = y.TypeError;
      if (d || b.state) {
        var G = b.state || (b.state = new (0, y.WeakMap)()),
          $ = p(G.get),
          J = p(G.has),
          Q = p(G.set);
        ((Z = function (X, W) {
          if (J(G, X)) throw new R(P);
          return ((W.facade = X), Q(G, X, W), W);
        }),
          (F = function (X) {
            return $(G, X) || {};
          }),
          (V = function (X) {
            return J(G, X);
          }));
      } else {
        var nt = T("state");
        ((S[nt] = !0),
          (Z = function (X, W) {
            if (O(X, nt)) throw new R(P);
            return ((W.facade = X), E(X, nt, W), W);
          }),
          (F = function (X) {
            return O(X, nt) ? X[nt] : {};
          }),
          (V = function (X) {
            return O(X, nt);
          }));
      }
      x.exports = {
        set: Z,
        get: F,
        has: V,
        enforce: function (X) {
          return V(X) ? F(X) : Z(X, {});
        },
        getterFor: function (X) {
          return function (W) {
            var xt;
            if (!m(W) || (xt = F(W)).type !== X)
              throw R("Incompatible receiver, " + X + " required");
            return xt;
          };
        },
      };
    },
    12345: function (x, C, s) {
      var d = s(59377),
        y = s(73404),
        p = d("iterator"),
        m = Array.prototype;
      x.exports = function (E) {
        return void 0 !== E && (y.Array === E || m[p] === E);
      };
    },
    37526: function (x, C, s) {
      var d = s(6074);
      x.exports =
        Array.isArray ||
        function (p) {
          return "Array" == d(p);
        };
    },
    50456: function (x) {
      x.exports = function (C) {
        return "function" == typeof C;
      };
    },
    90221: function (x, C, s) {
      var d = s(86608),
        y = s(12611),
        p = s(50456),
        m = s(75671),
        E = s(69301),
        O = s(16981),
        b = function () {},
        T = [],
        S = E("Reflect", "construct"),
        P = /^\s*(?:class|function)\b/,
        R = d(P.exec),
        M = !P.exec(b),
        Z = function (V) {
          if (!p(V)) return !1;
          try {
            return (S(b, T, V), !0);
          } catch (U) {
            return !1;
          }
        };
      x.exports =
        !S ||
        y(function () {
          var V;
          return (
            Z(Z.call) ||
            !Z(Object) ||
            !Z(function () {
              V = !0;
            }) ||
            V
          );
        })
          ? function (V) {
              if (!p(V)) return !1;
              switch (m(V)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                  return !1;
              }
              return M || !!R(P, O(V));
            }
          : Z;
    },
    27734: function (x, C, s) {
      var d = s(12611),
        y = s(50456),
        p = /#|\.prototype\./,
        m = function (S, P) {
          var R = O[E(S)];
          return R == T || (R != b && (y(P) ? d(P) : !!P));
        },
        E = (m.normalize = function (S) {
          return String(S).replace(p, ".").toLowerCase();
        }),
        O = (m.data = {}),
        b = (m.NATIVE = "N"),
        T = (m.POLYFILL = "P");
      x.exports = m;
    },
    7524: function (x, C, s) {
      var d = s(50456);
      x.exports = function (y) {
        return "object" == typeof y ? null !== y : d(y);
      };
    },
    71374: function (x) {
      x.exports = !1;
    },
    35446: function (x, C, s) {
      var d = s(7524),
        y = s(6074),
        m = s(59377)("match");
      x.exports = function (E) {
        var O;
        return d(E) && (void 0 !== (O = E[m]) ? !!O : "RegExp" == y(E));
      };
    },
    50338: function (x, C, s) {
      var d = s(30527),
        y = s(69301),
        p = s(50456),
        m = s(27562),
        E = s(21209),
        O = d.Object;
      x.exports = E
        ? function (b) {
            return "symbol" == typeof b;
          }
        : function (b) {
            var T = y("Symbol");
            return p(T) && m(T.prototype, O(b));
          };
    },
    54798: function (x, C, s) {
      var d = s(30527),
        y = s(851),
        p = s(72550),
        m = s(14764),
        E = s(61218),
        O = s(12345),
        b = s(68828),
        T = s(27562),
        S = s(70047),
        P = s(76796),
        R = s(22476),
        M = d.TypeError,
        Z = function (V, U) {
          ((this.stopped = V), (this.result = U));
        },
        F = Z.prototype;
      x.exports = function (V, U, z) {
        var X,
          W,
          xt,
          Ot,
          mt,
          bt,
          Nt,
          $ = !(!z || !z.AS_ENTRIES),
          J = !(!z || !z.IS_ITERATOR),
          Q = !(!z || !z.INTERRUPTED),
          nt = y(U, z && z.that),
          et = function (_) {
            return (X && R(X, "normal", _), new Z(!0, _));
          },
          K = function (_) {
            return $
              ? (m(_), Q ? nt(_[0], _[1], et) : nt(_[0], _[1]))
              : Q
                ? nt(_, et)
                : nt(_);
          };
        if (J) X = V;
        else {
          if (!(W = P(V))) throw M(E(V) + " is not iterable");
          if (O(W)) {
            for (xt = 0, Ot = b(V); Ot > xt; xt++)
              if ((mt = K(V[xt])) && T(F, mt)) return mt;
            return new Z(!1);
          }
          X = S(V, W);
        }
        for (bt = X.next; !(Nt = p(bt, X)).done; ) {
          try {
            mt = K(Nt.value);
          } catch (_) {
            R(X, "throw", _);
          }
          if ("object" == typeof mt && mt && T(F, mt)) return mt;
        }
        return new Z(!1);
      };
    },
    22476: function (x, C, s) {
      var d = s(72550),
        y = s(14764),
        p = s(39296);
      x.exports = function (m, E, O) {
        var b, T;
        y(m);
        try {
          if (!(b = p(m, "return"))) {
            if ("throw" === E) throw O;
            return O;
          }
          b = d(b, m);
        } catch (S) {
          ((T = !0), (b = S));
        }
        if ("throw" === E) throw O;
        if (T) throw b;
        return (y(b), O);
      };
    },
    11388: function (x, C, s) {
      "use strict";
      var P,
        R,
        M,
        d = s(12611),
        y = s(50456),
        p = s(68979),
        m = s(95850),
        E = s(14721),
        O = s(59377),
        b = s(71374),
        T = O("iterator"),
        S = !1;
      ([].keys &&
        ("next" in (M = [].keys())
          ? (R = m(m(M))) !== Object.prototype && (P = R)
          : (S = !0)),
        null == P ||
        d(function () {
          var F = {};
          return P[T].call(F) !== F;
        })
          ? (P = {})
          : b && (P = p(P)),
        y(P[T]) ||
          E(P, T, function () {
            return this;
          }),
        (x.exports = { IteratorPrototype: P, BUGGY_SAFARI_ITERATORS: S }));
    },
    73404: function (x) {
      x.exports = {};
    },
    68828: function (x, C, s) {
      var d = s(64792);
      x.exports = function (y) {
        return d(y.length);
      };
    },
    4796: function (x, C, s) {
      var V,
        U,
        z,
        G,
        $,
        J,
        Q,
        nt,
        d = s(30527),
        y = s(851),
        p = s(44973).f,
        m = s(95529).set,
        E = s(46763),
        O = s(98257),
        b = s(55177),
        T = s(28027),
        S = d.MutationObserver || d.WebKitMutationObserver,
        P = d.document,
        R = d.process,
        M = d.Promise,
        Z = p(d, "queueMicrotask"),
        F = Z && Z.value;
      (F ||
        ((V = function () {
          var X, W;
          for (T && (X = R.domain) && X.exit(); U; ) {
            ((W = U.fn), (U = U.next));
            try {
              W();
            } catch (xt) {
              throw (U ? G() : (z = void 0), xt);
            }
          }
          ((z = void 0), X && X.enter());
        }),
        E || T || b || !S || !P
          ? !O && M && M.resolve
            ? (((Q = M.resolve(void 0)).constructor = M),
              (nt = y(Q.then, Q)),
              (G = function () {
                nt(V);
              }))
            : T
              ? (G = function () {
                  R.nextTick(V);
                })
              : ((m = y(m, d)),
                (G = function () {
                  m(V);
                }))
          : (($ = !0),
            (J = P.createTextNode("")),
            new S(V).observe(J, { characterData: !0 }),
            (G = function () {
              J.data = $ = !$;
            }))),
        (x.exports =
          F ||
          function (X) {
            var W = { fn: X, next: void 0 };
            (z && (z.next = W), U || ((U = W), G()), (z = W));
          }));
    },
    88266: function (x, C, s) {
      var d = s(30527);
      x.exports = d.Promise;
    },
    61831: function (x, C, s) {
      var d = s(72137),
        y = s(12611);
      x.exports =
        !!Object.getOwnPropertySymbols &&
        !y(function () {
          var p = Symbol();
          return (
            !String(p) ||
            !(Object(p) instanceof Symbol) ||
            (!Symbol.sham && d && d < 41)
          );
        });
    },
    96096: function (x, C, s) {
      var d = s(30527),
        y = s(50456),
        p = s(16981),
        m = d.WeakMap;
      x.exports = y(m) && /native code/.test(p(m));
    },
    39089: function (x, C, s) {
      "use strict";
      var d = s(65135),
        y = function (p) {
          var m, E;
          ((this.promise = new p(function (O, b) {
            if (void 0 !== m || void 0 !== E)
              throw TypeError("Bad Promise constructor");
            ((m = O), (E = b));
          })),
            (this.resolve = d(m)),
            (this.reject = d(E)));
        };
      x.exports.f = function (p) {
        return new y(p);
      };
    },
    19859: function (x, C, s) {
      var d = s(30527),
        y = s(35446),
        p = d.TypeError;
      x.exports = function (m) {
        if (y(m)) throw p("The method doesn't accept regular expressions");
        return m;
      };
    },
    68979: function (x, C, s) {
      var z,
        d = s(14764),
        y = s(71469),
        p = s(68856),
        m = s(68205),
        E = s(78496),
        O = s(73116),
        b = s(90129),
        P = "prototype",
        R = "script",
        M = b("IE_PROTO"),
        Z = function () {},
        F = function ($) {
          return "<" + R + ">" + $ + "</" + R + ">";
        },
        V = function ($) {
          ($.write(F("")), $.close());
          var J = $.parentWindow.Object;
          return (($ = null), J);
        },
        G = function () {
          try {
            z = new ActiveXObject("htmlfile");
          } catch (J) {}
          G =
            "undefined" != typeof document
              ? document.domain && z
                ? V(z)
                : (function () {
                    var Q,
                      $ = O("iframe");
                    return (
                      ($.style.display = "none"),
                      E.appendChild($),
                      ($.src = String("javascript:")),
                      (Q = $.contentWindow.document).open(),
                      Q.write(F("document.F=Object")),
                      Q.close(),
                      Q.F
                    );
                  })()
              : V(z);
          for (var $ = p.length; $--; ) delete G[P][p[$]];
          return G();
        };
      ((m[M] = !0),
        (x.exports =
          Object.create ||
          function (J, Q) {
            var nt;
            return (
              null !== J
                ? ((Z[P] = d(J)), (nt = new Z()), (Z[P] = null), (nt[M] = J))
                : (nt = G()),
              void 0 === Q ? nt : y(nt, Q)
            );
          }));
    },
    71469: function (x, C, s) {
      var d = s(61872),
        y = s(7135),
        p = s(14764),
        m = s(8786),
        E = s(68009);
      x.exports = d
        ? Object.defineProperties
        : function (b, T) {
            p(b);
            for (var Z, S = m(T), P = E(T), R = P.length, M = 0; R > M; )
              y.f(b, (Z = P[M++]), S[Z]);
            return b;
          };
    },
    7135: function (x, C, s) {
      var d = s(30527),
        y = s(61872),
        p = s(52224),
        m = s(14764),
        E = s(54925),
        O = d.TypeError,
        b = Object.defineProperty;
      C.f = y
        ? b
        : function (S, P, R) {
            if ((m(S), (P = E(P)), m(R), p))
              try {
                return b(S, P, R);
              } catch (M) {}
            if ("get" in R || "set" in R) throw O("Accessors not supported");
            return ("value" in R && (S[P] = R.value), S);
          };
    },
    44973: function (x, C, s) {
      var d = s(61872),
        y = s(72550),
        p = s(51086),
        m = s(27567),
        E = s(8786),
        O = s(54925),
        b = s(41806),
        T = s(52224),
        S = Object.getOwnPropertyDescriptor;
      C.f = d
        ? S
        : function (R, M) {
            if (((R = E(R)), (M = O(M)), T))
              try {
                return S(R, M);
              } catch (Z) {}
            if (b(R, M)) return m(!y(p.f, R, M), R[M]);
          };
    },
    83610: function (x, C, s) {
      var d = s(7773),
        p = s(68856).concat("length", "prototype");
      C.f =
        Object.getOwnPropertyNames ||
        function (E) {
          return d(E, p);
        };
    },
    72450: function (x, C) {
      C.f = Object.getOwnPropertySymbols;
    },
    95850: function (x, C, s) {
      var d = s(30527),
        y = s(41806),
        p = s(50456),
        m = s(64505),
        E = s(90129),
        O = s(46218),
        b = E("IE_PROTO"),
        T = d.Object,
        S = T.prototype;
      x.exports = O
        ? T.getPrototypeOf
        : function (P) {
            var R = m(P);
            if (y(R, b)) return R[b];
            var M = R.constructor;
            return p(M) && R instanceof M
              ? M.prototype
              : R instanceof T
                ? S
                : null;
          };
    },
    27562: function (x, C, s) {
      var d = s(86608);
      x.exports = d({}.isPrototypeOf);
    },
    7773: function (x, C, s) {
      var d = s(86608),
        y = s(41806),
        p = s(8786),
        m = s(97029).indexOf,
        E = s(68205),
        O = d([].push);
      x.exports = function (b, T) {
        var M,
          S = p(b),
          P = 0,
          R = [];
        for (M in S) !y(E, M) && y(S, M) && O(R, M);
        for (; T.length > P; ) y(S, (M = T[P++])) && (~m(R, M) || O(R, M));
        return R;
      };
    },
    68009: function (x, C, s) {
      var d = s(7773),
        y = s(68856);
      x.exports =
        Object.keys ||
        function (m) {
          return d(m, y);
        };
    },
    51086: function (x, C) {
      "use strict";
      var s = {}.propertyIsEnumerable,
        d = Object.getOwnPropertyDescriptor,
        y = d && !s.call({ 1: 2 }, 1);
      C.f = y
        ? function (m) {
            var E = d(this, m);
            return !!E && E.enumerable;
          }
        : s;
    },
    19470: function (x, C, s) {
      var d = s(86608),
        y = s(14764),
        p = s(31124);
      x.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var O,
                m = !1,
                E = {};
              try {
                ((O = d(
                  Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                    .set,
                ))(E, []),
                  (m = E instanceof Array));
              } catch (b) {}
              return function (T, S) {
                return (y(T), p(S), m ? O(T, S) : (T.__proto__ = S), T);
              };
            })()
          : void 0);
    },
    31037: function (x, C, s) {
      var d = s(30527),
        y = s(72550),
        p = s(50456),
        m = s(7524),
        E = d.TypeError;
      x.exports = function (O, b) {
        var T, S;
        if (
          ("string" === b && p((T = O.toString)) && !m((S = y(T, O)))) ||
          (p((T = O.valueOf)) && !m((S = y(T, O)))) ||
          ("string" !== b && p((T = O.toString)) && !m((S = y(T, O))))
        )
          return S;
        throw E("Can't convert object to primitive value");
      };
    },
    58711: function (x, C, s) {
      var d = s(69301),
        y = s(86608),
        p = s(83610),
        m = s(72450),
        E = s(14764),
        O = y([].concat);
      x.exports =
        d("Reflect", "ownKeys") ||
        function (T) {
          var S = p.f(E(T)),
            P = m.f;
          return P ? O(S, P(T)) : S;
        };
    },
    83997: function (x) {
      x.exports = function (C) {
        try {
          return { error: !1, value: C() };
        } catch (s) {
          return { error: !0, value: s };
        }
      };
    },
    69322: function (x, C, s) {
      var d = s(14764),
        y = s(7524),
        p = s(39089);
      x.exports = function (m, E) {
        if ((d(m), y(E) && E.constructor === m)) return E;
        var O = p.f(m);
        return ((0, O.resolve)(E), O.promise);
      };
    },
    98125: function (x, C, s) {
      var d = s(14721);
      x.exports = function (y, p, m) {
        for (var E in p) d(y, E, p[E], m);
        return y;
      };
    },
    14721: function (x, C, s) {
      var d = s(30527),
        y = s(50456),
        p = s(41806),
        m = s(79261),
        E = s(70282),
        O = s(16981),
        b = s(52496),
        T = s(33444).CONFIGURABLE,
        S = b.get,
        P = b.enforce,
        R = String(String).split("String");
      (x.exports = function (M, Z, F, V) {
        var J,
          U = !!V && !!V.unsafe,
          z = !!V && !!V.enumerable,
          G = !!V && !!V.noTargetGet,
          $ = V && void 0 !== V.name ? V.name : Z;
        (y(F) &&
          ("Symbol(" === String($).slice(0, 7) &&
            ($ = "[" + String($).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!p(F, "name") || (T && F.name !== $)) && m(F, "name", $),
          (J = P(F)).source ||
            (J.source = R.join("string" == typeof $ ? $ : ""))),
          M !== d
            ? (U ? !G && M[Z] && (z = !0) : delete M[Z],
              z ? (M[Z] = F) : m(M, Z, F))
            : z
              ? (M[Z] = F)
              : E(Z, F));
      })(Function.prototype, "toString", function () {
        return (y(this) && S(this).source) || O(this);
      });
    },
    5333: function (x, C, s) {
      var d = s(30527),
        y = s(72550),
        p = s(14764),
        m = s(50456),
        E = s(6074),
        O = s(7807),
        b = d.TypeError;
      x.exports = function (T, S) {
        var P = T.exec;
        if (m(P)) {
          var R = y(P, T, S);
          return (null !== R && p(R), R);
        }
        if ("RegExp" === E(T)) return y(O, T, S);
        throw b("RegExp#exec called on incompatible receiver");
      };
    },
    7807: function (x, C, s) {
      "use strict";
      var nt,
        X,
        d = s(72550),
        y = s(86608),
        p = s(43536),
        m = s(85624),
        E = s(41362),
        O = s(76450),
        b = s(68979),
        T = s(52496).get,
        S = s(44325),
        P = s(25355),
        R = O("native-string-replace", String.prototype.replace),
        M = RegExp.prototype.exec,
        Z = M,
        F = y("".charAt),
        V = y("".indexOf),
        U = y("".replace),
        z = y("".slice),
        G =
          ((X = /b*/g),
          d(M, (nt = /a/), "a"),
          d(M, X, "a"),
          0 !== nt.lastIndex || 0 !== X.lastIndex),
        $ = E.UNSUPPORTED_Y || E.BROKEN_CARET,
        J = void 0 !== /()??/.exec("")[1];
      ((G || J || $ || S || P) &&
        (Z = function (X) {
          var bt,
            Nt,
            et,
            K,
            _,
            tt,
            at,
            W = this,
            xt = T(W),
            Ot = p(X),
            mt = xt.raw;
          if (mt)
            return (
              (mt.lastIndex = W.lastIndex),
              (bt = d(Z, mt, Ot)),
              (W.lastIndex = mt.lastIndex),
              bt
            );
          var ht = xt.groups,
            yt = $ && W.sticky,
            Pt = d(m, W),
            ot = W.source,
            it = 0,
            Et = Ot;
          if (
            (yt &&
              ((Pt = U(Pt, "y", "")),
              -1 === V(Pt, "g") && (Pt += "g"),
              (Et = z(Ot, W.lastIndex)),
              W.lastIndex > 0 &&
                (!W.multiline ||
                  (W.multiline && "\n" !== F(Ot, W.lastIndex - 1))) &&
                ((ot = "(?: " + ot + ")"), (Et = " " + Et), it++),
              (Nt = new RegExp("^(?:" + ot + ")", Pt))),
            J && (Nt = new RegExp("^" + ot + "$(?!\\s)", Pt)),
            G && (et = W.lastIndex),
            (K = d(M, yt ? Nt : W, Et)),
            yt
              ? K
                ? ((K.input = z(K.input, it)),
                  (K[0] = z(K[0], it)),
                  (K.index = W.lastIndex),
                  (W.lastIndex += K[0].length))
                : (W.lastIndex = 0)
              : G && K && (W.lastIndex = W.global ? K.index + K[0].length : et),
            J &&
              K &&
              K.length > 1 &&
              d(R, K[0], Nt, function () {
                for (_ = 1; _ < arguments.length - 2; _++)
                  void 0 === arguments[_] && (K[_] = void 0);
              }),
            K && ht)
          )
            for (K.groups = tt = b(null), _ = 0; _ < ht.length; _++)
              tt[(at = ht[_])[0]] = K[at[1]];
          return K;
        }),
        (x.exports = Z));
    },
    85624: function (x, C, s) {
      "use strict";
      var d = s(14764);
      x.exports = function () {
        var y = d(this),
          p = "";
        return (
          y.global && (p += "g"),
          y.ignoreCase && (p += "i"),
          y.multiline && (p += "m"),
          y.dotAll && (p += "s"),
          y.unicode && (p += "u"),
          y.sticky && (p += "y"),
          p
        );
      };
    },
    41362: function (x, C, s) {
      var d = s(12611),
        p = s(30527).RegExp;
      ((C.UNSUPPORTED_Y = d(function () {
        var m = p("a", "y");
        return ((m.lastIndex = 2), null != m.exec("abcd"));
      })),
        (C.BROKEN_CARET = d(function () {
          var m = p("^r", "gy");
          return ((m.lastIndex = 2), null != m.exec("str"));
        })));
    },
    44325: function (x, C, s) {
      var d = s(12611),
        p = s(30527).RegExp;
      x.exports = d(function () {
        var m = p(".", "s");
        return !(m.dotAll && m.exec("\n") && "s" === m.flags);
      });
    },
    25355: function (x, C, s) {
      var d = s(12611),
        p = s(30527).RegExp;
      x.exports = d(function () {
        var m = p("(?<a>b)", "g");
        return "b" !== m.exec("b").groups.a || "bc" !== "b".replace(m, "$<a>c");
      });
    },
    24949: function (x, C, s) {
      var y = s(30527).TypeError;
      x.exports = function (p) {
        if (null == p) throw y("Can't call method on " + p);
        return p;
      };
    },
    70282: function (x, C, s) {
      var d = s(30527),
        y = Object.defineProperty;
      x.exports = function (p, m) {
        try {
          y(d, p, { value: m, configurable: !0, writable: !0 });
        } catch (E) {
          d[p] = m;
        }
        return m;
      };
    },
    24328: function (x, C, s) {
      "use strict";
      var d = s(69301),
        y = s(7135),
        p = s(59377),
        m = s(61872),
        E = p("species");
      x.exports = function (O) {
        var b = d(O);
        m &&
          b &&
          !b[E] &&
          (0, y.f)(b, E, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    74380: function (x, C, s) {
      var d = s(7135).f,
        y = s(41806),
        m = s(59377)("toStringTag");
      x.exports = function (E, O, b) {
        E &&
          !y((E = b ? E : E.prototype), m) &&
          d(E, m, { configurable: !0, value: O });
      };
    },
    90129: function (x, C, s) {
      var d = s(76450),
        y = s(35003),
        p = d("keys");
      x.exports = function (m) {
        return p[m] || (p[m] = y(m));
      };
    },
    54038: function (x, C, s) {
      var d = s(30527),
        y = s(70282),
        p = "__core-js_shared__",
        m = d[p] || y(p, {});
      x.exports = m;
    },
    76450: function (x, C, s) {
      var d = s(71374),
        y = s(54038);
      (x.exports = function (p, m) {
        return y[p] || (y[p] = void 0 !== m ? m : {});
      })("versions", []).push({
        version: "3.19.1",
        mode: d ? "pure" : "global",
        copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)",
      });
    },
    2296: function (x, C, s) {
      var d = s(14764),
        y = s(52229),
        m = s(59377)("species");
      x.exports = function (E, O) {
        var T,
          b = d(E).constructor;
        return void 0 === b || null == (T = d(b)[m]) ? O : y(T);
      };
    },
    29273: function (x, C, s) {
      var d = s(86608),
        y = s(73900),
        p = s(43536),
        m = s(24949),
        E = d("".charAt),
        O = d("".charCodeAt),
        b = d("".slice),
        T = function (S) {
          return function (P, R) {
            var V,
              U,
              M = p(m(P)),
              Z = y(R),
              F = M.length;
            return Z < 0 || Z >= F
              ? S
                ? ""
                : void 0
              : (V = O(M, Z)) < 55296 ||
                  V > 56319 ||
                  Z + 1 === F ||
                  (U = O(M, Z + 1)) < 56320 ||
                  U > 57343
                ? S
                  ? E(M, Z)
                  : V
                : S
                  ? b(M, Z, Z + 2)
                  : U - 56320 + ((V - 55296) << 10) + 65536;
          };
        };
      x.exports = { codeAt: T(!1), charAt: T(!0) };
    },
    66832: function (x, C, s) {
      var d = s(33444).PROPER,
        y = s(12611),
        p = s(95475);
      x.exports = function (E) {
        return y(function () {
          return (
            !!p[E]() ||
            "\u200b\x85\u180e" !== "\u200b\x85\u180e"[E]() ||
            (d && p[E].name !== E)
          );
        });
      };
    },
    61393: function (x, C, s) {
      var d = s(86608),
        y = s(24949),
        p = s(43536),
        m = s(95475),
        E = d("".replace),
        O = "[" + m + "]",
        b = RegExp("^" + O + O + "*"),
        T = RegExp(O + O + "*$"),
        S = function (P) {
          return function (R) {
            var M = p(y(R));
            return (1 & P && (M = E(M, b, "")), 2 & P && (M = E(M, T, "")), M);
          };
        };
      x.exports = { start: S(1), end: S(2), trim: S(3) };
    },
    95529: function (x, C, s) {
      var nt,
        X,
        W,
        xt,
        d = s(30527),
        y = s(40408),
        p = s(851),
        m = s(50456),
        E = s(41806),
        O = s(12611),
        b = s(78496),
        T = s(62804),
        S = s(73116),
        P = s(46763),
        R = s(28027),
        M = d.setImmediate,
        Z = d.clearImmediate,
        F = d.process,
        V = d.Dispatch,
        U = d.Function,
        z = d.MessageChannel,
        G = d.String,
        $ = 0,
        J = {},
        Q = "onreadystatechange";
      try {
        nt = d.location;
      } catch (et) {}
      var Ot = function (et) {
          if (E(J, et)) {
            var K = J[et];
            (delete J[et], K());
          }
        },
        mt = function (et) {
          return function () {
            Ot(et);
          };
        },
        bt = function (et) {
          Ot(et.data);
        },
        Nt = function (et) {
          d.postMessage(G(et), nt.protocol + "//" + nt.host);
        };
      ((!M || !Z) &&
        ((M = function (K) {
          var _ = T(arguments, 1);
          return (
            (J[++$] = function () {
              y(m(K) ? K : U(K), void 0, _);
            }),
            X($),
            $
          );
        }),
        (Z = function (K) {
          delete J[K];
        }),
        R
          ? (X = function (et) {
              F.nextTick(mt(et));
            })
          : V && V.now
            ? (X = function (et) {
                V.now(mt(et));
              })
            : z && !P
              ? ((xt = (W = new z()).port2),
                (W.port1.onmessage = bt),
                (X = p(xt.postMessage, xt)))
              : d.addEventListener &&
                  m(d.postMessage) &&
                  !d.importScripts &&
                  nt &&
                  "file:" !== nt.protocol &&
                  !O(Nt)
                ? ((X = Nt), d.addEventListener("message", bt, !1))
                : (X =
                    Q in S("script")
                      ? function (et) {
                          b.appendChild(S("script"))[Q] = function () {
                            (b.removeChild(this), Ot(et));
                          };
                        }
                      : function (et) {
                          setTimeout(mt(et), 0);
                        })),
        (x.exports = { set: M, clear: Z }));
    },
    20869: function (x, C, s) {
      var d = s(73900),
        y = Math.max,
        p = Math.min;
      x.exports = function (m, E) {
        var O = d(m);
        return O < 0 ? y(O + E, 0) : p(O, E);
      };
    },
    8786: function (x, C, s) {
      var d = s(5830),
        y = s(24949);
      x.exports = function (p) {
        return d(y(p));
      };
    },
    73900: function (x) {
      var C = Math.ceil,
        s = Math.floor;
      x.exports = function (d) {
        var y = +d;
        return y != y || 0 === y ? 0 : (y > 0 ? s : C)(y);
      };
    },
    64792: function (x, C, s) {
      var d = s(73900),
        y = Math.min;
      x.exports = function (p) {
        return p > 0 ? y(d(p), 9007199254740991) : 0;
      };
    },
    64505: function (x, C, s) {
      var d = s(30527),
        y = s(24949),
        p = d.Object;
      x.exports = function (m) {
        return p(y(m));
      };
    },
    57697: function (x, C, s) {
      var d = s(30527),
        y = s(72550),
        p = s(7524),
        m = s(50338),
        E = s(39296),
        O = s(31037),
        b = s(59377),
        T = d.TypeError,
        S = b("toPrimitive");
      x.exports = function (P, R) {
        if (!p(P) || m(P)) return P;
        var Z,
          M = E(P, S);
        if (M) {
          if (
            (void 0 === R && (R = "default"), (Z = y(M, P, R)), !p(Z) || m(Z))
          )
            return Z;
          throw T("Can't convert object to primitive value");
        }
        return (void 0 === R && (R = "number"), O(P, R));
      };
    },
    54925: function (x, C, s) {
      var d = s(57697),
        y = s(50338);
      x.exports = function (p) {
        var m = d(p, "string");
        return y(m) ? m : m + "";
      };
    },
    82620: function (x, C, s) {
      var p = {};
      ((p[s(59377)("toStringTag")] = "z"),
        (x.exports = "[object z]" === String(p)));
    },
    43536: function (x, C, s) {
      var d = s(30527),
        y = s(75671),
        p = d.String;
      x.exports = function (m) {
        if ("Symbol" === y(m))
          throw TypeError("Cannot convert a Symbol value to a string");
        return p(m);
      };
    },
    61218: function (x, C, s) {
      var y = s(30527).String;
      x.exports = function (p) {
        try {
          return y(p);
        } catch (m) {
          return "Object";
        }
      };
    },
    35003: function (x, C, s) {
      var d = s(86608),
        y = 0,
        p = Math.random(),
        m = d((1).toString);
      x.exports = function (E) {
        return "Symbol(" + (void 0 === E ? "" : E) + ")_" + m(++y + p, 36);
      };
    },
    21209: function (x, C, s) {
      var d = s(61831);
      x.exports = d && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    59377: function (x, C, s) {
      var d = s(30527),
        y = s(76450),
        p = s(41806),
        m = s(35003),
        E = s(61831),
        O = s(21209),
        b = y("wks"),
        T = d.Symbol,
        S = T && T.for,
        P = O ? T : (T && T.withoutSetter) || m;
      x.exports = function (R) {
        if (!p(b, R) || (!E && "string" != typeof b[R])) {
          var M = "Symbol." + R;
          b[R] = E && p(T, R) ? T[R] : O && S ? S(M) : P(M);
        }
        return b[R];
      };
    },
    95475: function (x) {
      x.exports =
        "\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
    },
    14774: function (x, C, s) {
      "use strict";
      var d = s(11031),
        y = s(86608),
        p = s(97029).indexOf,
        m = s(53857),
        E = y([].indexOf),
        O = !!E && 1 / E([1], 1, -0) < 0,
        b = m("indexOf");
      d(
        { target: "Array", proto: !0, forced: O || !b },
        {
          indexOf: function (S) {
            var P = arguments.length > 1 ? arguments[1] : void 0;
            return O ? E(this, S, P) || 0 : p(this, S, P);
          },
        },
      );
    },
    40968: function (x, C, s) {
      "use strict";
      var d = s(8786),
        y = s(48481),
        p = s(73404),
        m = s(52496),
        E = s(32513),
        O = "Array Iterator",
        b = m.set,
        T = m.getterFor(O);
      ((x.exports = E(
        Array,
        "Array",
        function (S, P) {
          b(this, { type: O, target: d(S), index: 0, kind: P });
        },
        function () {
          var S = T(this),
            P = S.target,
            R = S.kind,
            M = S.index++;
          return !P || M >= P.length
            ? ((S.target = void 0), { value: void 0, done: !0 })
            : "keys" == R
              ? { value: M, done: !1 }
              : "values" == R
                ? { value: P[M], done: !1 }
                : { value: [M, P[M]], done: !1 };
        },
        "values",
      )),
        (p.Arguments = p.Array),
        y("keys"),
        y("values"),
        y("entries"));
    },
    5754: function (x, C, s) {
      "use strict";
      var d = s(11031),
        y = s(74472).left,
        p = s(53857),
        m = s(72137),
        E = s(28027);
      d(
        {
          target: "Array",
          proto: !0,
          forced: !p("reduce") || (!E && m > 79 && m < 83),
        },
        {
          reduce: function (S) {
            var P = arguments.length;
            return y(this, S, P, P > 1 ? arguments[1] : void 0);
          },
        },
      );
    },
    63895: function (x, C, s) {
      "use strict";
      var d = s(11031),
        y = s(86608),
        p = s(37526),
        m = y([].reverse),
        E = [1, 2];
      d(
        {
          target: "Array",
          proto: !0,
          forced: String(E) === String(E.reverse()),
        },
        {
          reverse: function () {
            return (p(this) && (this.length = this.length), m(this));
          },
        },
      );
    },
    1586: function (x, C, s) {
      "use strict";
      var Re,
        Ge,
        Je,
        He,
        d = s(11031),
        y = s(71374),
        p = s(30527),
        m = s(69301),
        E = s(72550),
        O = s(88266),
        b = s(14721),
        T = s(98125),
        S = s(19470),
        P = s(74380),
        R = s(24328),
        M = s(65135),
        Z = s(50456),
        F = s(7524),
        V = s(47896),
        U = s(16981),
        z = s(54798),
        G = s(58136),
        $ = s(2296),
        J = s(95529).set,
        Q = s(4796),
        nt = s(69322),
        X = s(50170),
        W = s(39089),
        xt = s(83997),
        Ot = s(52496),
        mt = s(27734),
        bt = s(59377),
        Nt = s(11942),
        et = s(28027),
        K = s(72137),
        _ = bt("species"),
        tt = "Promise",
        at = Ot.get,
        ht = Ot.set,
        yt = Ot.getterFor(tt),
        Pt = O && O.prototype,
        ot = O,
        it = Pt,
        Et = p.TypeError,
        Tt = p.document,
        Ut = p.process,
        Yt = W.f,
        te = Yt,
        Dt = !!(Tt && Tt.createEvent && p.dispatchEvent),
        fe = Z(p.PromiseRejectionEvent),
        ie = "unhandledrejection",
        ze = !1,
        ye = mt(tt, function () {
          var B = U(ot),
            st = B !== String(ot);
          if ((!st && 66 === K) || (y && !it.finally)) return !0;
          if (K >= 51 && /native code/.test(B)) return !1;
          var ut = new ot(function (kt) {
              kt(1);
            }),
            ft = function (kt) {
              kt(
                function () {},
                function () {},
              );
            };
          return (
            ((ut.constructor = {})[_] = ft),
            !(ze = ut.then(function () {}) instanceof ft) || (!st && Nt && !fe)
          );
        }),
        cr =
          ye ||
          !G(function (B) {
            ot.all(B).catch(function () {});
          }),
        qe = function (B) {
          var st;
          return !(!F(B) || !Z((st = B.then))) && st;
        },
        Ye = function (B, st) {
          if (!B.notified) {
            B.notified = !0;
            var ut = B.reactions;
            Q(function () {
              for (
                var ft = B.value, Ct = 1 == B.state, kt = 0;
                ut.length > kt;
              ) {
                var se,
                  re,
                  xe,
                  _t = ut[kt++],
                  ve = Ct ? _t.ok : _t.fail,
                  pe = _t.resolve,
                  me = _t.reject,
                  ee = _t.domain;
                try {
                  ve
                    ? (Ct || (2 === B.rejection && dr(B), (B.rejection = 1)),
                      !0 === ve
                        ? (se = ft)
                        : (ee && ee.enter(),
                          (se = ve(ft)),
                          ee && (ee.exit(), (xe = !0))),
                      se === _t.promise
                        ? me(Et("Promise-chain cycle"))
                        : (re = qe(se))
                          ? E(re, se, pe, me)
                          : pe(se))
                    : me(ft);
                } catch (ae) {
                  (ee && !xe && ee.exit(), me(ae));
                }
              }
              ((B.reactions = []),
                (B.notified = !1),
                st && !B.rejection && gr(B));
            });
          }
        },
        Me = function (B, st, ut) {
          var ft, Ct;
          (Dt
            ? (((ft = Tt.createEvent("Event")).promise = st),
              (ft.reason = ut),
              ft.initEvent(B, !1, !0),
              p.dispatchEvent(ft))
            : (ft = { promise: st, reason: ut }),
            !fe && (Ct = p["on" + B])
              ? Ct(ft)
              : B === ie && X("Unhandled promise rejection", ut));
        },
        gr = function (B) {
          E(J, p, function () {
            var Ct,
              st = B.facade,
              ut = B.value;
            if (
              _e(B) &&
              ((Ct = xt(function () {
                et ? Ut.emit("unhandledRejection", ut, st) : Me(ie, st, ut);
              })),
              (B.rejection = et || _e(B) ? 2 : 1),
              Ct.error)
            )
              throw Ct.value;
          });
        },
        _e = function (B) {
          return 1 !== B.rejection && !B.parent;
        },
        dr = function (B) {
          E(J, p, function () {
            var st = B.facade;
            et
              ? Ut.emit("rejectionHandled", st)
              : Me("rejectionhandled", st, B.value);
          });
        },
        Kt = function (B, st, ut) {
          return function (ft) {
            B(st, ft, ut);
          };
        },
        he = function (B, st, ut) {
          B.done ||
            ((B.done = !0),
            ut && (B = ut),
            (B.value = st),
            (B.state = 2),
            Ye(B, !0));
        },
        Le = function (B, st, ut) {
          if (!B.done) {
            ((B.done = !0), ut && (B = ut));
            try {
              if (B.facade === st) throw Et("Promise can't be resolved itself");
              var ft = qe(st);
              ft
                ? Q(function () {
                    var Ct = { done: !1 };
                    try {
                      E(ft, st, Kt(Le, Ct, B), Kt(he, Ct, B));
                    } catch (kt) {
                      he(Ct, kt, B);
                    }
                  })
                : ((B.value = st), (B.state = 1), Ye(B, !1));
            } catch (Ct) {
              he({ done: !1 }, Ct, B);
            }
          }
        };
      if (
        ye &&
        ((ot = function (st) {
          (V(this, it), M(st), E(Re, this));
          var ut = at(this);
          try {
            st(Kt(Le, ut), Kt(he, ut));
          } catch (ft) {
            he(ut, ft);
          }
        }),
        ((Re = function (st) {
          ht(this, {
            type: tt,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0,
          });
        }).prototype = T((it = ot.prototype), {
          then: function (st, ut) {
            var ft = yt(this),
              Ct = ft.reactions,
              kt = Yt($(this, ot));
            return (
              (kt.ok = !Z(st) || st),
              (kt.fail = Z(ut) && ut),
              (kt.domain = et ? Ut.domain : void 0),
              (ft.parent = !0),
              (Ct[Ct.length] = kt),
              0 != ft.state && Ye(ft, !1),
              kt.promise
            );
          },
          catch: function (B) {
            return this.then(void 0, B);
          },
        })),
        (Ge = function () {
          var B = new Re(),
            st = at(B);
          ((this.promise = B),
            (this.resolve = Kt(Le, st)),
            (this.reject = Kt(he, st)));
        }),
        (W.f = Yt =
          function (B) {
            return B === ot || B === Je ? new Ge(B) : te(B);
          }),
        !y && Z(O) && Pt !== Object.prototype)
      ) {
        ((He = Pt.then),
          ze ||
            (b(
              Pt,
              "then",
              function (st, ut) {
                var ft = this;
                return new ot(function (Ct, kt) {
                  E(He, ft, Ct, kt);
                }).then(st, ut);
              },
              { unsafe: !0 },
            ),
            b(Pt, "catch", it.catch, { unsafe: !0 })));
        try {
          delete Pt.constructor;
        } catch (B) {}
        S && S(Pt, it);
      }
      (d({ global: !0, wrap: !0, forced: ye }, { Promise: ot }),
        P(ot, tt, !1, !0),
        R(tt),
        (Je = m(tt)),
        d(
          { target: tt, stat: !0, forced: ye },
          {
            reject: function (st) {
              var ut = Yt(this);
              return (E(ut.reject, void 0, st), ut.promise);
            },
          },
        ),
        d(
          { target: tt, stat: !0, forced: y || ye },
          {
            resolve: function (st) {
              return nt(y && this === Je ? ot : this, st);
            },
          },
        ),
        d(
          { target: tt, stat: !0, forced: cr },
          {
            all: function (st) {
              var ut = this,
                ft = Yt(ut),
                Ct = ft.resolve,
                kt = ft.reject,
                _t = xt(function () {
                  var ve = M(ut.resolve),
                    pe = [],
                    me = 0,
                    ee = 1;
                  (z(st, function (se) {
                    var re = me++,
                      xe = !1;
                    (ee++,
                      E(ve, ut, se).then(function (ae) {
                        xe || ((xe = !0), (pe[re] = ae), --ee || Ct(pe));
                      }, kt));
                  }),
                    --ee || Ct(pe));
                });
              return (_t.error && kt(_t.value), ft.promise);
            },
            race: function (st) {
              var ut = this,
                ft = Yt(ut),
                Ct = ft.reject,
                kt = xt(function () {
                  var _t = M(ut.resolve);
                  z(st, function (ve) {
                    E(_t, ut, ve).then(ft.resolve, Ct);
                  });
                });
              return (kt.error && Ct(kt.value), ft.promise);
            },
          },
        ));
    },
    68579: function (x, C, s) {
      "use strict";
      var d = s(11031),
        y = s(7807);
      d({ target: "RegExp", proto: !0, forced: /./.exec !== y }, { exec: y });
    },
    44506: function (x, C, s) {
      "use strict";
      var d = s(86608),
        y = s(33444).PROPER,
        p = s(14721),
        m = s(14764),
        E = s(27562),
        O = s(43536),
        b = s(12611),
        T = s(85624),
        S = "toString",
        P = RegExp.prototype,
        R = P[S],
        M = d(T);
      (b(function () {
        return "/a/b" != R.call({ source: "a", flags: "b" });
      }) ||
        (y && R.name != S)) &&
        p(
          RegExp.prototype,
          S,
          function () {
            var U = m(this),
              z = O(U.source),
              G = U.flags;
            return (
              "/" +
              z +
              "/" +
              O(void 0 === G && E(P, U) && !("flags" in P) ? M(U) : G)
            );
          },
          { unsafe: !0 },
        );
    },
    43912: function (x, C, s) {
      "use strict";
      var V,
        d = s(11031),
        y = s(86608),
        p = s(44973).f,
        m = s(64792),
        E = s(43536),
        O = s(19859),
        b = s(24949),
        T = s(88571),
        S = s(71374),
        P = y("".endsWith),
        R = y("".slice),
        M = Math.min,
        Z = T("endsWith");
      d(
        {
          target: "String",
          proto: !0,
          forced: !(
            (!S &&
              !Z &&
              ((V = p(String.prototype, "endsWith")), V && !V.writable)) ||
            Z
          ),
        },
        {
          endsWith: function (U) {
            var z = E(b(this));
            O(U);
            var G = arguments.length > 1 ? arguments[1] : void 0,
              $ = z.length,
              J = void 0 === G ? $ : M(m(G), $),
              Q = E(U);
            return P ? P(z, Q, J) : R(z, J - Q.length, J) === Q;
          },
        },
      );
    },
    28248: function (x, C, s) {
      "use strict";
      var d = s(11031),
        y = s(86608),
        p = s(19859),
        m = s(24949),
        E = s(43536),
        O = s(88571),
        b = y("".indexOf);
      d(
        { target: "String", proto: !0, forced: !O("includes") },
        {
          includes: function (S) {
            return !!~b(
              E(m(this)),
              E(p(S)),
              arguments.length > 1 ? arguments[1] : void 0,
            );
          },
        },
      );
    },
    10766: function (x, C, s) {
      "use strict";
      var d = s(72550),
        y = s(9758),
        p = s(14764),
        m = s(64792),
        E = s(43536),
        O = s(24949),
        b = s(39296),
        T = s(89844),
        S = s(5333);
      y("match", function (P, R, M) {
        return [
          function (F) {
            var V = O(this),
              U = null == F ? void 0 : b(F, P);
            return U ? d(U, F, V) : new RegExp(F)[P](E(V));
          },
          function (Z) {
            var F = p(this),
              V = E(Z),
              U = M(R, F, V);
            if (U.done) return U.value;
            if (!F.global) return S(F, V);
            var z = F.unicode;
            F.lastIndex = 0;
            for (var J, G = [], $ = 0; null !== (J = S(F, V)); ) {
              var Q = E(J[0]);
              ((G[$] = Q),
                "" === Q && (F.lastIndex = T(V, m(F.lastIndex), z)),
                $++);
            }
            return 0 === $ ? null : G;
          },
        ];
      });
    },
    74423: function (x, C, s) {
      "use strict";
      var d = s(40408),
        y = s(72550),
        p = s(86608),
        m = s(9758),
        E = s(12611),
        O = s(14764),
        b = s(50456),
        T = s(73900),
        S = s(64792),
        P = s(43536),
        R = s(24949),
        M = s(89844),
        Z = s(39296),
        F = s(83667),
        V = s(5333),
        z = s(59377)("replace"),
        G = Math.max,
        $ = Math.min,
        J = p([].concat),
        Q = p([].push),
        nt = p("".indexOf),
        X = p("".slice),
        W = function (bt) {
          return void 0 === bt ? bt : String(bt);
        },
        xt = "$0" === "a".replace(/./, "$0"),
        Ot = !!/./[z] && "" === /./[z]("a", "$0");
      m(
        "replace",
        function (bt, Nt, et) {
          var K = Ot ? "$" : "$0";
          return [
            function (tt, at) {
              var ht = R(this),
                yt = null == tt ? void 0 : Z(tt, z);
              return yt ? y(yt, tt, ht, at) : y(Nt, P(ht), tt, at);
            },
            function (_, tt) {
              var at = O(this),
                ht = P(_);
              if (
                "string" == typeof tt &&
                -1 === nt(tt, K) &&
                -1 === nt(tt, "$<")
              ) {
                var yt = et(Nt, at, ht, tt);
                if (yt.done) return yt.value;
              }
              var Pt = b(tt);
              Pt || (tt = P(tt));
              var ot = at.global;
              if (ot) {
                var it = at.unicode;
                at.lastIndex = 0;
              }
              for (var Et = []; ; ) {
                var Tt = V(at, ht);
                if (null === Tt || (Q(Et, Tt), !ot)) break;
                "" === P(Tt[0]) && (at.lastIndex = M(ht, S(at.lastIndex), it));
              }
              for (var Yt = "", te = 0, Dt = 0; Dt < Et.length; Dt++) {
                for (
                  var fe = P((Tt = Et[Dt])[0]),
                    ie = G($(T(Tt.index), ht.length), 0),
                    ge = [],
                    de = 1;
                  de < Tt.length;
                  de++
                )
                  Q(ge, W(Tt[de]));
                var D = Tt.groups;
                if (Pt) {
                  var Ve = J([fe], ge, ie, ht);
                  void 0 !== D && Q(Ve, D);
                  var Ce = P(d(tt, void 0, Ve));
                } else Ce = F(fe, ht, ie, ge, D, tt);
                ie >= te && ((Yt += X(ht, te, ie) + Ce), (te = ie + fe.length));
              }
              return Yt + X(ht, te);
            },
          ];
        },
        !!E(function () {
          var bt = /./;
          return (
            (bt.exec = function () {
              var Nt = [];
              return ((Nt.groups = { a: "7" }), Nt);
            }),
            "7" !== "".replace(bt, "$<a>")
          );
        }) ||
          !xt ||
          Ot,
      );
    },
    64498: function (x, C, s) {
      "use strict";
      var d = s(40408),
        y = s(72550),
        p = s(86608),
        m = s(9758),
        E = s(35446),
        O = s(14764),
        b = s(24949),
        T = s(2296),
        S = s(89844),
        P = s(64792),
        R = s(43536),
        M = s(39296),
        Z = s(62804),
        F = s(5333),
        V = s(7807),
        U = s(41362),
        z = s(12611),
        G = U.UNSUPPORTED_Y,
        $ = 4294967295,
        J = Math.min,
        Q = [].push,
        nt = p(/./.exec),
        X = p(Q),
        W = p("".slice);
      m(
        "split",
        function (Ot, mt, bt) {
          var Nt;
          return (
            (Nt =
              "c" == "abbc".split(/(b)*/)[1] ||
              4 != "test".split(/(?:)/, -1).length ||
              2 != "ab".split(/(?:ab)*/).length ||
              4 != ".".split(/(.?)(.?)/).length ||
              ".".split(/()()/).length > 1 ||
              "".split(/.?/).length
                ? function (et, K) {
                    var _ = R(b(this)),
                      tt = void 0 === K ? $ : K >>> 0;
                    if (0 === tt) return [];
                    if (void 0 === et) return [_];
                    if (!E(et)) return y(mt, _, et, tt);
                    for (
                      var ot,
                        it,
                        Et,
                        at = [],
                        yt = 0,
                        Pt = new RegExp(
                          et.source,
                          (et.ignoreCase ? "i" : "") +
                            (et.multiline ? "m" : "") +
                            (et.unicode ? "u" : "") +
                            (et.sticky ? "y" : "") +
                            "g",
                        );
                      (ot = y(V, Pt, _)) &&
                      !(
                        (it = Pt.lastIndex) > yt &&
                        (X(at, W(_, yt, ot.index)),
                        ot.length > 1 &&
                          ot.index < _.length &&
                          d(Q, at, Z(ot, 1)),
                        (Et = ot[0].length),
                        (yt = it),
                        at.length >= tt)
                      );
                    )
                      Pt.lastIndex === ot.index && Pt.lastIndex++;
                    return (
                      yt === _.length
                        ? (Et || !nt(Pt, "")) && X(at, "")
                        : X(at, W(_, yt)),
                      at.length > tt ? Z(at, 0, tt) : at
                    );
                  }
                : "0".split(void 0, 0).length
                  ? function (et, K) {
                      return void 0 === et && 0 === K ? [] : y(mt, this, et, K);
                    }
                  : mt),
            [
              function (K, _) {
                var tt = b(this),
                  at = null == K ? void 0 : M(K, Ot);
                return at ? y(at, K, tt, _) : y(Nt, R(tt), K, _);
              },
              function (et, K) {
                var _ = O(this),
                  tt = R(et),
                  at = bt(Nt, _, tt, K, Nt !== mt);
                if (at.done) return at.value;
                var ht = T(_, RegExp),
                  yt = _.unicode,
                  ot = new ht(
                    G ? "^(?:" + _.source + ")" : _,
                    (_.ignoreCase ? "i" : "") +
                      (_.multiline ? "m" : "") +
                      (_.unicode ? "u" : "") +
                      (G ? "g" : "y"),
                  ),
                  it = void 0 === K ? $ : K >>> 0;
                if (0 === it) return [];
                if (0 === tt.length) return null === F(ot, tt) ? [tt] : [];
                for (var Et = 0, Tt = 0, Ut = []; Tt < tt.length; ) {
                  ot.lastIndex = G ? 0 : Tt;
                  var te,
                    Yt = F(ot, G ? W(tt, Tt) : tt);
                  if (
                    null === Yt ||
                    (te = J(P(ot.lastIndex + (G ? Tt : 0)), tt.length)) === Et
                  )
                    Tt = S(tt, Tt, yt);
                  else {
                    if ((X(Ut, W(tt, Et, Tt)), Ut.length === it)) return Ut;
                    for (var Dt = 1; Dt <= Yt.length - 1; Dt++)
                      if ((X(Ut, Yt[Dt]), Ut.length === it)) return Ut;
                    Tt = Et = te;
                  }
                }
                return (X(Ut, W(tt, Et)), Ut);
              },
            ]
          );
        },
        !!z(function () {
          var Ot = /(?:)/,
            mt = Ot.exec;
          Ot.exec = function () {
            return mt.apply(this, arguments);
          };
          var bt = "ab".split(Ot);
          return 2 !== bt.length || "a" !== bt[0] || "b" !== bt[1];
        }),
        G,
      );
    },
    40929: function (x, C, s) {
      "use strict";
      var V,
        d = s(11031),
        y = s(86608),
        p = s(44973).f,
        m = s(64792),
        E = s(43536),
        O = s(19859),
        b = s(24949),
        T = s(88571),
        S = s(71374),
        P = y("".startsWith),
        R = y("".slice),
        M = Math.min,
        Z = T("startsWith");
      d(
        {
          target: "String",
          proto: !0,
          forced: !(
            (!S &&
              !Z &&
              ((V = p(String.prototype, "startsWith")), V && !V.writable)) ||
            Z
          ),
        },
        {
          startsWith: function (U) {
            var z = E(b(this));
            O(U);
            var G = m(
                M(arguments.length > 1 ? arguments[1] : void 0, z.length),
              ),
              $ = E(U);
            return P ? P(z, $, G) : R(z, G, G + $.length) === $;
          },
        },
      );
    },
    50352: function (x, C, s) {
      "use strict";
      var d = s(11031),
        y = s(61393).trim;
      d(
        { target: "String", proto: !0, forced: s(66832)("trim") },
        {
          trim: function () {
            return y(this);
          },
        },
      );
    },
    64352: function (x, C, s) {
      var d = s(30527),
        y = s(41308),
        p = s(29741),
        m = s(40968),
        E = s(79261),
        O = s(59377),
        b = O("iterator"),
        T = O("toStringTag"),
        S = m.values,
        P = function (M, Z) {
          if (M) {
            if (M[b] !== S)
              try {
                E(M, b, S);
              } catch (V) {
                M[b] = S;
              }
            if ((M[T] || E(M, T, Z), y[Z]))
              for (var F in m)
                if (M[F] !== m[F])
                  try {
                    E(M, F, m[F]);
                  } catch (V) {
                    M[F] = m[F];
                  }
          }
        };
      for (var R in y) P(d[R] && d[R].prototype, R);
      P(p, "DOMTokenList");
    },
    31154: function (x) {
      (function () {
        var C, s, d, y, p, m;
        "undefined" != typeof performance &&
        null !== performance &&
        performance.now
          ? (x.exports = function () {
              return performance.now();
            })
          : "undefined" != typeof process && null !== process && process.hrtime
            ? ((x.exports = function () {
                return (C() - p) / 1e6;
              }),
              (s = process.hrtime),
              (y = (C = function () {
                var O;
                return 1e9 * (O = s())[0] + O[1];
              })()),
              (m = 1e9 * process.uptime()),
              (p = y - m))
            : Date.now
              ? ((x.exports = function () {
                  return Date.now() - d;
                }),
                (d = Date.now()))
              : ((x.exports = function () {
                  return new Date().getTime() - d;
                }),
                (d = new Date().getTime()));
      }).call(this);
    },
    6956: function (x, C, s) {
      for (
        var d = s(31154),
          y = "undefined" == typeof window ? global : window,
          p = ["moz", "webkit"],
          m = "AnimationFrame",
          E = y["request" + m],
          O = y["cancel" + m] || y["cancelRequest" + m],
          b = 0;
        !E && b < p.length;
        b++
      )
        ((E = y[p[b] + "Request" + m]),
          (O = y[p[b] + "Cancel" + m] || y[p[b] + "CancelRequest" + m]));
      if (!E || !O) {
        var T = 0,
          S = 0,
          P = [];
        ((E = function (Z) {
          if (0 === P.length) {
            var F = d(),
              V = Math.max(0, 16.666666666666668 - (F - T));
            ((T = V + F),
              setTimeout(function () {
                var U = P.slice(0);
                P.length = 0;
                for (var z = 0; z < U.length; z++)
                  if (!U[z].cancelled)
                    try {
                      U[z].callback(T);
                    } catch (G) {
                      setTimeout(function () {
                        throw G;
                      }, 0);
                    }
              }, Math.round(V)));
          }
          return (P.push({ handle: ++S, callback: Z, cancelled: !1 }), S);
        }),
          (O = function (Z) {
            for (var F = 0; F < P.length; F++)
              P[F].handle === Z && (P[F].cancelled = !0);
          }));
      }
      ((x.exports = function (M) {
        return E.call(y, M);
      }),
        (x.exports.cancel = function () {
          O.apply(y, arguments);
        }),
        (x.exports.polyfill = function (M) {
          (M || (M = y),
            (M.requestAnimationFrame = E),
            (M.cancelAnimationFrame = O));
        }));
    },
    57290: function (x) {
      x.exports = function (C) {
        ((this.ok = !1),
          (this.alpha = 1),
          "#" == C.charAt(0) && (C = C.substr(1, 6)),
          (C = (C = C.replace(/ /g, "")).toLowerCase()));
        var s = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "00ffff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000000",
          blanchedalmond: "ffebcd",
          blue: "0000ff",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "00ffff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dodgerblue: "1e90ff",
          feldspar: "d19275",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "ff00ff",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgrey: "d3d3d3",
          lightgreen: "90ee90",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslateblue: "8470ff",
          lightslategray: "778899",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "00ff00",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "ff00ff",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370d8",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "d87093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "ff0000",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          violetred: "d02090",
          wheat: "f5deb3",
          white: "ffffff",
          whitesmoke: "f5f5f5",
          yellow: "ffff00",
          yellowgreen: "9acd32",
        };
        C = s[C] || C;
        for (
          var d = [
              {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
                process: function (T) {
                  return [
                    parseInt(T[1]),
                    parseInt(T[2]),
                    parseInt(T[3]),
                    parseFloat(T[4]),
                  ];
                },
              },
              {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                process: function (T) {
                  return [parseInt(T[1]), parseInt(T[2]), parseInt(T[3])];
                },
              },
              {
                re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                example: ["#00ff00", "336699"],
                process: function (T) {
                  return [
                    parseInt(T[1], 16),
                    parseInt(T[2], 16),
                    parseInt(T[3], 16),
                  ];
                },
              },
              {
                re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                example: ["#fb0", "f0f"],
                process: function (T) {
                  return [
                    parseInt(T[1] + T[1], 16),
                    parseInt(T[2] + T[2], 16),
                    parseInt(T[3] + T[3], 16),
                  ];
                },
              },
            ],
            y = 0;
          y < d.length;
          y++
        ) {
          var m = d[y].process,
            E = d[y].re.exec(C);
          if (E) {
            var O = m(E);
            ((this.r = O[0]),
              (this.g = O[1]),
              (this.b = O[2]),
              O.length > 3 && (this.alpha = O[3]),
              (this.ok = !0));
          }
        }
        ((this.r =
          this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
          (this.g =
            this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
          (this.b =
            this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
          (this.alpha =
            this.alpha < 0
              ? 0
              : this.alpha > 1 || isNaN(this.alpha)
                ? 1
                : this.alpha),
          (this.toRGB = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
          }),
          (this.toRGBA = function () {
            return (
              "rgba(" +
              this.r +
              ", " +
              this.g +
              ", " +
              this.b +
              ", " +
              this.alpha +
              ")"
            );
          }),
          (this.toHex = function () {
            var b = this.r.toString(16),
              T = this.g.toString(16),
              S = this.b.toString(16);
            return (
              1 == b.length && (b = "0" + b),
              1 == T.length && (T = "0" + T),
              1 == S.length && (S = "0" + S),
              "#" + b + T + S
            );
          }),
          (this.getHelpXML = function () {
            for (var b = new Array(), T = 0; T < d.length; T++)
              for (var S = d[T].example, P = 0; P < S.length; P++)
                b[b.length] = S[P];
            for (var R in s) b[b.length] = R;
            var M = document.createElement("ul");
            for (
              M.setAttribute("id", "rgbcolor-examples"), T = 0;
              T < b.length;
              T++
            )
              try {
                var Z = document.createElement("li"),
                  F = new RGBColor(b[T]),
                  V = document.createElement("div");
                ((V.style.cssText =
                  "margin: 3px; border: 1px solid black; background:" +
                  F.toHex() +
                  "; color:" +
                  F.toHex()),
                  V.appendChild(document.createTextNode("test")));
                var U = document.createTextNode(
                  " " + b[T] + " -> " + F.toRGB() + " -> " + F.toHex(),
                );
                (Z.appendChild(V), Z.appendChild(U), M.appendChild(Z));
              } catch (G) {}
            return M;
          }));
      };
    },
    97879: function (x, C, s) {
      "use strict";
      (s.r(C),
        s.d(C, {
          AElement: function () {
            return xn;
          },
          AnimateColorElement: function () {
            return cn;
          },
          AnimateElement: function () {
            return nr;
          },
          AnimateTransformElement: function () {
            return gn;
          },
          BoundingBox: function () {
            return ne;
          },
          CB1: function () {
            return mr;
          },
          CB2: function () {
            return xr;
          },
          CB3: function () {
            return Er;
          },
          CB4: function () {
            return Tr;
          },
          Canvg: function () {
            return Ln;
          },
          CircleElement: function () {
            return rn;
          },
          ClipPathElement: function () {
            return An;
          },
          DefsElement: function () {
            return ln;
          },
          DescElement: function () {
            return kn;
          },
          Document: function () {
            return Qe;
          },
          Element: function () {
            return Lt;
          },
          EllipseElement: function () {
            return nn;
          },
          FeColorMatrixElement: function () {
            return kr;
          },
          FeCompositeElement: function () {
            return Nn;
          },
          FeDropShadowElement: function () {
            return Rn;
          },
          FeGaussianBlurElement: function () {
            return wn;
          },
          FeMorphologyElement: function () {
            return Mn;
          },
          FilterElement: function () {
            return Vr;
          },
          Font: function () {
            return oe;
          },
          FontElement: function () {
            return dn;
          },
          FontFaceElement: function () {
            return yn;
          },
          GElement: function () {
            return rr;
          },
          GlyphElement: function () {
            return Ar;
          },
          GradientElement: function () {
            return wr;
          },
          ImageElement: function () {
            return bn;
          },
          LineElement: function () {
            return an;
          },
          LinearGradientElement: function () {
            return fn;
          },
          MarkerElement: function () {
            return un;
          },
          MaskElement: function () {
            return Zr;
          },
          Matrix: function () {
            return Or;
          },
          MissingGlyphElement: function () {
            return pn;
          },
          Mouse: function () {
            return Xr;
          },
          PSEUDO_ZERO: function () {
            return ae;
          },
          Parser: function () {
            return er;
          },
          PathElement: function () {
            return jt;
          },
          PathParser: function () {
            return lt;
          },
          PatternElement: function () {
            return on;
          },
          Point: function () {
            return Gt;
          },
          PolygonElement: function () {
            return sn;
          },
          PolylineElement: function () {
            return Nr;
          },
          Property: function () {
            return rt;
          },
          QB1: function () {
            return br;
          },
          QB2: function () {
            return Sr;
          },
          QB3: function () {
            return Pr;
          },
          RadialGradientElement: function () {
            return hn;
          },
          RectElement: function () {
            return Mr;
          },
          RenderedElement: function () {
            return Ee;
          },
          Rotate: function () {
            return Jr;
          },
          SVGElement: function () {
            return Fe;
          },
          SVGFontLoader: function () {
            return Pn;
          },
          Scale: function () {
            return qr;
          },
          Screen: function () {
            return Xe;
          },
          Skew: function () {
            return Cr;
          },
          SkewX: function () {
            return _r;
          },
          SkewY: function () {
            return tn;
          },
          StopElement: function () {
            return vn;
          },
          StyleElement: function () {
            return Ir;
          },
          SymbolElement: function () {
            return Sn;
          },
          TRefElement: function () {
            return mn;
          },
          TSpanElement: function () {
            return Rr;
          },
          TextElement: function () {
            return De;
          },
          TextPathElement: function () {
            return Tn;
          },
          TitleElement: function () {
            return In;
          },
          Transform: function () {
            return We;
          },
          Translate: function () {
            return Kr;
          },
          UnknownElement: function () {
            return en;
          },
          UseElement: function () {
            return On;
          },
          ViewPort: function () {
            return Yr;
          },
          compressSpaces: function () {
            return Kt;
          },
          default: function () {
            return Ln;
          },
          getSelectorSpecificity: function () {
            return xe;
          },
          normalizeAttributeName: function () {
            return ut;
          },
          normalizeColor: function () {
            return Ct;
          },
          parseExternalUrl: function () {
            return ft;
          },
          presets: function () {
            return dr;
          },
          toNumbers: function () {
            return B;
          },
          trimLeft: function () {
            return he;
          },
          trimRight: function () {
            return Le;
          },
          vectorMagnitude: function () {
            return yr;
          },
          vectorsAngle: function () {
            return pr;
          },
          vectorsRatio: function () {
            return tr;
          },
        }));
      var d = s(73495),
        y = s(71513),
        p = s(36887),
        m = s(15610),
        E = s(2751),
        O = s(5234),
        b = s(5196),
        T = s(89012),
        S = s(8923),
        P = s(13744),
        R = s(54802),
        M = s(8659);
      function F(f, l, r, n, t, i, e) {
        try {
          var a = f[i](e),
            o = a.value;
        } catch (u) {
          return void r(u);
        }
        a.done ? l(o) : Promise.resolve(o).then(n, t);
      }
      function V(f) {
        return function () {
          var l = this,
            r = arguments;
          return new Promise(function (n, t) {
            var i = f.apply(l, r);
            function e(o) {
              F(i, n, t, e, a, "next", o);
            }
            function a(o) {
              F(i, n, t, e, a, "throw", o);
            }
            e(void 0);
          });
        };
      }
      (s(1586), s(10766), s(74423), s(40929), s(40968), s(64352));
      var Q = s(3041),
        xt = (s(5754), s(43912), s(64498), s(6956)),
        mt = (s(50352), s(57290)),
        K =
          (s(14774),
          s(28248),
          s(63895),
          function (l, r) {
            return (K =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (n, t) {
                  n.__proto__ = t;
                }) ||
              function (n, t) {
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
              })(l, r);
          });
      function _(f, l) {
        if ("function" != typeof l && null !== l)
          throw new TypeError(
            "Class extends value " +
              String(l) +
              " is not a constructor or null",
          );
        function r() {
          this.constructor = f;
        }
        (K(f, l),
          (f.prototype =
            null === l
              ? Object.create(l)
              : ((r.prototype = l.prototype), new r())));
      }
      function at(f, l) {
        var r = f[0],
          n = f[1];
        return [
          r * Math.cos(l) - n * Math.sin(l),
          r * Math.sin(l) + n * Math.cos(l),
        ];
      }
      function ht() {
        for (var f = [], l = 0; l < arguments.length; l++) f[l] = arguments[l];
        for (var r = 0; r < f.length; r++)
          if ("number" != typeof f[r])
            throw new Error(
              "assertNumbers arguments[" +
                r +
                "] is not a number. " +
                typeof f[r] +
                " == typeof " +
                f[r],
            );
        return !0;
      }
      var yt = Math.PI;
      function Pt(f, l, r) {
        ((f.lArcFlag = 0 === f.lArcFlag ? 0 : 1),
          (f.sweepFlag = 0 === f.sweepFlag ? 0 : 1));
        var n = f.rX,
          t = f.rY,
          i = f.x,
          e = f.y;
        ((n = Math.abs(f.rX)), (t = Math.abs(f.rY)));
        var a = at([(l - i) / 2, (r - e) / 2], (-f.xRot / 180) * yt),
          o = a[0],
          u = a[1],
          h = Math.pow(o, 2) / Math.pow(n, 2) + Math.pow(u, 2) / Math.pow(t, 2);
        (1 < h && ((n *= Math.sqrt(h)), (t *= Math.sqrt(h))),
          (f.rX = n),
          (f.rY = t));
        var v =
            Math.pow(n, 2) * Math.pow(u, 2) + Math.pow(t, 2) * Math.pow(o, 2),
          c =
            (f.lArcFlag !== f.sweepFlag ? 1 : -1) *
            Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(t, 2) - v) / v)),
          g = ((n * u) / t) * c,
          A = ((-t * o) / n) * c,
          N = at([g, A], (f.xRot / 180) * yt);
        ((f.cX = N[0] + (l + i) / 2),
          (f.cY = N[1] + (r + e) / 2),
          (f.phi1 = Math.atan2((u - A) / t, (o - g) / n)),
          (f.phi2 = Math.atan2((-u - A) / t, (-o - g) / n)),
          0 === f.sweepFlag && f.phi2 > f.phi1 && (f.phi2 -= 2 * yt),
          1 === f.sweepFlag && f.phi2 < f.phi1 && (f.phi2 += 2 * yt),
          (f.phi1 *= 180 / yt),
          (f.phi2 *= 180 / yt));
      }
      function ot(f, l, r) {
        ht(f, l, r);
        var n = f * f + l * l - r * r;
        if (0 > n) return [];
        if (0 === n)
          return [[(f * r) / (f * f + l * l), (l * r) / (f * f + l * l)]];
        var t = Math.sqrt(n);
        return [
          [
            (f * r + l * t) / (f * f + l * l),
            (l * r - f * t) / (f * f + l * l),
          ],
          [
            (f * r - l * t) / (f * f + l * l),
            (l * r + f * t) / (f * f + l * l),
          ],
        ];
      }
      var it,
        Et = Math.PI / 180;
      function Tt(f, l, r) {
        return (1 - r) * f + r * l;
      }
      function Ut(f, l, r, n) {
        return f + Math.cos((n / 180) * yt) * l + Math.sin((n / 180) * yt) * r;
      }
      function Yt(f, l, r, n) {
        var t = 1e-6,
          i = l - f,
          e = r - l,
          a = 3 * i + 3 * (n - r) - 6 * e,
          o = 6 * (e - i),
          u = 3 * i;
        return Math.abs(a) < t
          ? [-u / o]
          : (function (h, v, c) {
              void 0 === c && (c = 1e-6);
              var g = (h * h) / 4 - v;
              if (g < -c) return [];
              if (g <= c) return [-h / 2];
              var A = Math.sqrt(g);
              return [-h / 2 - A, -h / 2 + A];
            })(o / a, u / a, t);
      }
      function te(f, l, r, n, t) {
        var i = 1 - t;
        return (
          f * (i * i * i) +
          l * (3 * i * i * t) +
          r * (3 * i * t * t) +
          n * (t * t * t)
        );
      }
      !(function (f) {
        function l() {
          return t(function (a, o, u) {
            return (
              a.relative &&
                (void 0 !== a.x1 && (a.x1 += o),
                void 0 !== a.y1 && (a.y1 += u),
                void 0 !== a.x2 && (a.x2 += o),
                void 0 !== a.y2 && (a.y2 += u),
                void 0 !== a.x && (a.x += o),
                void 0 !== a.y && (a.y += u),
                (a.relative = !1)),
              a
            );
          });
        }
        function r() {
          var a = NaN,
            o = NaN,
            u = NaN,
            h = NaN;
          return t(function (v, c, g) {
            return (
              v.type & D.SMOOTH_CURVE_TO &&
                ((v.type = D.CURVE_TO),
                (a = isNaN(a) ? c : a),
                (o = isNaN(o) ? g : o),
                (v.x1 = v.relative ? c - a : 2 * c - a),
                (v.y1 = v.relative ? g - o : 2 * g - o)),
              v.type & D.CURVE_TO
                ? ((a = v.relative ? c + v.x2 : v.x2),
                  (o = v.relative ? g + v.y2 : v.y2))
                : ((a = NaN), (o = NaN)),
              v.type & D.SMOOTH_QUAD_TO &&
                ((v.type = D.QUAD_TO),
                (u = isNaN(u) ? c : u),
                (h = isNaN(h) ? g : h),
                (v.x1 = v.relative ? c - u : 2 * c - u),
                (v.y1 = v.relative ? g - h : 2 * g - h)),
              v.type & D.QUAD_TO
                ? ((u = v.relative ? c + v.x1 : v.x1),
                  (h = v.relative ? g + v.y1 : v.y1))
                : ((u = NaN), (h = NaN)),
              v
            );
          });
        }
        function n() {
          var a = NaN,
            o = NaN;
          return t(function (u, h, v) {
            if (
              (u.type & D.SMOOTH_QUAD_TO &&
                ((u.type = D.QUAD_TO),
                (a = isNaN(a) ? h : a),
                (o = isNaN(o) ? v : o),
                (u.x1 = u.relative ? h - a : 2 * h - a),
                (u.y1 = u.relative ? v - o : 2 * v - o)),
              u.type & D.QUAD_TO)
            ) {
              ((a = u.relative ? h + u.x1 : u.x1),
                (o = u.relative ? v + u.y1 : u.y1));
              var c = u.x1,
                g = u.y1;
              ((u.type = D.CURVE_TO),
                (u.x1 = ((u.relative ? 0 : h) + 2 * c) / 3),
                (u.y1 = ((u.relative ? 0 : v) + 2 * g) / 3),
                (u.x2 = (u.x + 2 * c) / 3),
                (u.y2 = (u.y + 2 * g) / 3));
            } else ((a = NaN), (o = NaN));
            return u;
          });
        }
        function t(a) {
          var o = 0,
            u = 0,
            h = NaN,
            v = NaN;
          return function (c) {
            if (isNaN(h) && !(c.type & D.MOVE_TO))
              throw new Error("path must start with moveto");
            var g = a(c, o, u, h, v);
            return (
              c.type & D.CLOSE_PATH && ((o = h), (u = v)),
              void 0 !== c.x && (o = c.relative ? o + c.x : c.x),
              void 0 !== c.y && (u = c.relative ? u + c.y : c.y),
              c.type & D.MOVE_TO && ((h = o), (v = u)),
              g
            );
          };
        }
        function i(a, o, u, h, v, c) {
          return (
            ht(a, o, u, h, v, c),
            t(function (g, A, N, w) {
              var I = g.x1,
                Y = g.x2,
                L = g.relative && !isNaN(w),
                k = void 0 !== g.x ? g.x : L ? 0 : A,
                H = void 0 !== g.y ? g.y : L ? 0 : N;
              function q(zt) {
                return zt * zt;
              }
              (g.type & D.HORIZ_LINE_TO &&
                0 !== o &&
                ((g.type = D.LINE_TO), (g.y = g.relative ? 0 : N)),
                g.type & D.VERT_LINE_TO &&
                  0 !== u &&
                  ((g.type = D.LINE_TO), (g.x = g.relative ? 0 : A)),
                void 0 !== g.x && (g.x = g.x * a + H * u + (L ? 0 : v)),
                void 0 !== g.y && (g.y = k * o + g.y * h + (L ? 0 : c)),
                void 0 !== g.x1 && (g.x1 = g.x1 * a + g.y1 * u + (L ? 0 : v)),
                void 0 !== g.y1 && (g.y1 = I * o + g.y1 * h + (L ? 0 : c)),
                void 0 !== g.x2 && (g.x2 = g.x2 * a + g.y2 * u + (L ? 0 : v)),
                void 0 !== g.y2 && (g.y2 = Y * o + g.y2 * h + (L ? 0 : c)));
              var j = a * h - o * u;
              if (
                void 0 !== g.xRot &&
                (1 !== a || 0 !== o || 0 !== u || 1 !== h)
              )
                if (0 === j)
                  (delete g.rX,
                    delete g.rY,
                    delete g.xRot,
                    delete g.lArcFlag,
                    delete g.sweepFlag,
                    (g.type = D.LINE_TO));
                else {
                  var vt = (g.xRot * Math.PI) / 180,
                    gt = Math.sin(vt),
                    St = Math.cos(vt),
                    dt = 1 / q(g.rX),
                    pt = 1 / q(g.rY),
                    At = q(St) * dt + q(gt) * pt,
                    wt = 2 * gt * St * (dt - pt),
                    ct = q(gt) * dt + q(St) * pt,
                    It = At * h * h - wt * o * h + ct * o * o,
                    Zt = wt * (a * h + o * u) - 2 * (At * u * h + ct * a * o),
                    Ft = At * u * u - wt * a * u + ct * a * a,
                    Rt = ((Math.atan2(Zt, It - Ft) + Math.PI) % Math.PI) / 2,
                    Mt = Math.sin(Rt),
                    Vt = Math.cos(Rt);
                  ((g.rX =
                    Math.abs(j) /
                    Math.sqrt(It * q(Vt) + Zt * Mt * Vt + Ft * q(Mt))),
                    (g.rY =
                      Math.abs(j) /
                      Math.sqrt(It * q(Mt) - Zt * Mt * Vt + Ft * q(Vt))),
                    (g.xRot = (180 * Rt) / Math.PI));
                }
              return (
                void 0 !== g.sweepFlag &&
                  0 > j &&
                  (g.sweepFlag = +!g.sweepFlag),
                g
              );
            })
          );
        }
        ((f.ROUND = function (a) {
          function o(u) {
            return Math.round(u * a) / a;
          }
          return (
            void 0 === a && (a = 1e13),
            ht(a),
            function (u) {
              return (
                void 0 !== u.x1 && (u.x1 = o(u.x1)),
                void 0 !== u.y1 && (u.y1 = o(u.y1)),
                void 0 !== u.x2 && (u.x2 = o(u.x2)),
                void 0 !== u.y2 && (u.y2 = o(u.y2)),
                void 0 !== u.x && (u.x = o(u.x)),
                void 0 !== u.y && (u.y = o(u.y)),
                void 0 !== u.rX && (u.rX = o(u.rX)),
                void 0 !== u.rY && (u.rY = o(u.rY)),
                u
              );
            }
          );
        }),
          (f.TO_ABS = l),
          (f.TO_REL = function () {
            return t(function (a, o, u) {
              return (
                a.relative ||
                  (void 0 !== a.x1 && (a.x1 -= o),
                  void 0 !== a.y1 && (a.y1 -= u),
                  void 0 !== a.x2 && (a.x2 -= o),
                  void 0 !== a.y2 && (a.y2 -= u),
                  void 0 !== a.x && (a.x -= o),
                  void 0 !== a.y && (a.y -= u),
                  (a.relative = !0)),
                a
              );
            });
          }),
          (f.NORMALIZE_HVZ = function (a, o, u) {
            return (
              void 0 === a && (a = !0),
              void 0 === o && (o = !0),
              void 0 === u && (u = !0),
              t(function (h, v, c, g, A) {
                if (isNaN(g) && !(h.type & D.MOVE_TO))
                  throw new Error("path must start with moveto");
                return (
                  o &&
                    h.type & D.HORIZ_LINE_TO &&
                    ((h.type = D.LINE_TO), (h.y = h.relative ? 0 : c)),
                  u &&
                    h.type & D.VERT_LINE_TO &&
                    ((h.type = D.LINE_TO), (h.x = h.relative ? 0 : v)),
                  a &&
                    h.type & D.CLOSE_PATH &&
                    ((h.type = D.LINE_TO),
                    (h.x = h.relative ? g - v : g),
                    (h.y = h.relative ? A - c : A)),
                  h.type & D.ARC &&
                    (0 === h.rX || 0 === h.rY) &&
                    ((h.type = D.LINE_TO),
                    delete h.rX,
                    delete h.rY,
                    delete h.xRot,
                    delete h.lArcFlag,
                    delete h.sweepFlag),
                  h
                );
              })
            );
          }),
          (f.NORMALIZE_ST = r),
          (f.QT_TO_C = n),
          (f.INFO = t),
          (f.SANITIZE = function (a) {
            (void 0 === a && (a = 0), ht(a));
            var o = NaN,
              u = NaN,
              h = NaN,
              v = NaN;
            return t(function (c, g, A, N, w) {
              var I = Math.abs,
                Y = !1,
                L = 0,
                k = 0;
              if (
                (c.type & D.SMOOTH_CURVE_TO &&
                  ((L = isNaN(o) ? 0 : g - o), (k = isNaN(u) ? 0 : A - u)),
                c.type & (D.CURVE_TO | D.SMOOTH_CURVE_TO)
                  ? ((o = c.relative ? g + c.x2 : c.x2),
                    (u = c.relative ? A + c.y2 : c.y2))
                  : ((o = NaN), (u = NaN)),
                c.type & D.SMOOTH_QUAD_TO
                  ? ((h = isNaN(h) ? g : 2 * g - h),
                    (v = isNaN(v) ? A : 2 * A - v))
                  : c.type & D.QUAD_TO
                    ? ((h = c.relative ? g + c.x1 : c.x1),
                      (v = c.relative ? A + c.y1 : c.y2))
                    : ((h = NaN), (v = NaN)),
                c.type & D.LINE_COMMANDS ||
                  (c.type & D.ARC &&
                    (0 === c.rX || 0 === c.rY || !c.lArcFlag)) ||
                  c.type & D.CURVE_TO ||
                  c.type & D.SMOOTH_CURVE_TO ||
                  c.type & D.QUAD_TO ||
                  c.type & D.SMOOTH_QUAD_TO)
              ) {
                var H = void 0 === c.x ? 0 : c.relative ? c.x : c.x - g,
                  q = void 0 === c.y ? 0 : c.relative ? c.y : c.y - A;
                ((L = isNaN(h)
                  ? void 0 === c.x1
                    ? L
                    : c.relative
                      ? c.x
                      : c.x1 - g
                  : h - g),
                  (k = isNaN(v)
                    ? void 0 === c.y1
                      ? k
                      : c.relative
                        ? c.y
                        : c.y1 - A
                    : v - A));
                var j = void 0 === c.x2 ? 0 : c.relative ? c.x : c.x2 - g,
                  vt = void 0 === c.y2 ? 0 : c.relative ? c.y : c.y2 - A;
                I(H) <= a &&
                  I(q) <= a &&
                  I(L) <= a &&
                  I(k) <= a &&
                  I(j) <= a &&
                  I(vt) <= a &&
                  (Y = !0);
              }
              return (
                c.type & D.CLOSE_PATH &&
                  I(g - N) <= a &&
                  I(A - w) <= a &&
                  (Y = !0),
                Y ? [] : c
              );
            });
          }),
          (f.MATRIX = i),
          (f.ROTATE = function (a, o, u) {
            (void 0 === o && (o = 0), void 0 === u && (u = 0), ht(a, o, u));
            var h = Math.sin(a),
              v = Math.cos(a);
            return i(v, h, -h, v, o - o * v + u * h, u - o * h - u * v);
          }),
          (f.TRANSLATE = function (a, o) {
            return (void 0 === o && (o = 0), ht(a, o), i(1, 0, 0, 1, a, o));
          }),
          (f.SCALE = function (a, o) {
            return (void 0 === o && (o = a), ht(a, o), i(a, 0, 0, o, 0, 0));
          }),
          (f.SKEW_X = function (a) {
            return (ht(a), i(1, 0, Math.atan(a), 1, 0, 0));
          }),
          (f.SKEW_Y = function (a) {
            return (ht(a), i(1, Math.atan(a), 0, 1, 0, 0));
          }),
          (f.X_AXIS_SYMMETRY = function (a) {
            return (void 0 === a && (a = 0), ht(a), i(-1, 0, 0, 1, a, 0));
          }),
          (f.Y_AXIS_SYMMETRY = function (a) {
            return (void 0 === a && (a = 0), ht(a), i(1, 0, 0, -1, 0, a));
          }),
          (f.A_TO_C = function () {
            return t(function (a, o, u) {
              return D.ARC === a.type
                ? (function (h, v, c) {
                    var g, A, N, w;
                    h.cX || Pt(h, v, c);
                    for (
                      var I = Math.min(h.phi1, h.phi2),
                        Y = Math.max(h.phi1, h.phi2) - I,
                        L = Math.ceil(Y / 90),
                        k = new Array(L),
                        H = v,
                        q = c,
                        j = 0;
                      j < L;
                      j++
                    ) {
                      var vt = Tt(h.phi1, h.phi2, j / L),
                        gt = Tt(h.phi1, h.phi2, (j + 1) / L),
                        dt = (4 / 3) * Math.tan(((gt - vt) * Et) / 4),
                        pt = [
                          Math.cos(vt * Et) - dt * Math.sin(vt * Et),
                          Math.sin(vt * Et) + dt * Math.cos(vt * Et),
                        ],
                        At = pt[0],
                        wt = pt[1],
                        ct = [Math.cos(gt * Et), Math.sin(gt * Et)],
                        It = ct[0],
                        Zt = ct[1],
                        Ft = [
                          It + dt * Math.sin(gt * Et),
                          Zt - dt * Math.cos(gt * Et),
                        ],
                        Rt = Ft[0],
                        Mt = Ft[1];
                      k[j] = { relative: h.relative, type: D.CURVE_TO };
                      var Vt = function (Xt, Bt) {
                        var Ht = at([Xt * h.rX, Bt * h.rY], h.xRot);
                        return [h.cX + Ht[0], h.cY + Ht[1]];
                      };
                      ((g = Vt(At, wt)),
                        (k[j].x1 = g[0]),
                        (k[j].y1 = g[1]),
                        (A = Vt(Rt, Mt)),
                        (k[j].x2 = A[0]),
                        (k[j].y2 = A[1]),
                        (N = Vt(It, Zt)),
                        (k[j].x = N[0]),
                        (k[j].y = N[1]),
                        h.relative &&
                          ((k[j].x1 -= H),
                          (k[j].y1 -= q),
                          (k[j].x2 -= H),
                          (k[j].y2 -= q),
                          (k[j].x -= H),
                          (k[j].y -= q)),
                        (H = (w = [k[j].x, k[j].y])[0]),
                        (q = w[1]));
                    }
                    return k;
                  })(a, a.relative ? 0 : o, a.relative ? 0 : u)
                : a;
            });
          }),
          (f.ANNOTATE_ARCS = function () {
            return t(function (a, o, u) {
              return (
                a.relative && ((o = 0), (u = 0)),
                D.ARC === a.type && Pt(a, o, u),
                a
              );
            });
          }),
          (f.CLONE = function () {
            return function (a) {
              var o = {};
              for (var u in a) o[u] = a[u];
              return o;
            };
          }),
          (f.CALCULATE_BOUNDS = function () {
            var o = l(),
              u = n(),
              h = r(),
              v = t(function (c, g, A) {
                var N = h(
                  u(
                    o(
                      (function (g) {
                        var A = {};
                        for (var N in g) A[N] = g[N];
                        return A;
                      })(c),
                    ),
                  ),
                );
                function w(Mt) {
                  (Mt > v.maxX && (v.maxX = Mt), Mt < v.minX && (v.minX = Mt));
                }
                function I(Mt) {
                  (Mt > v.maxY && (v.maxY = Mt), Mt < v.minY && (v.minY = Mt));
                }
                if (
                  (N.type & D.DRAWING_COMMANDS && (w(g), I(A)),
                  N.type & D.HORIZ_LINE_TO && w(N.x),
                  N.type & D.VERT_LINE_TO && I(N.y),
                  N.type & D.LINE_TO && (w(N.x), I(N.y)),
                  N.type & D.CURVE_TO)
                ) {
                  (w(N.x), I(N.y));
                  for (var Y = 0, L = Yt(g, N.x1, N.x2, N.x); Y < L.length; Y++)
                    0 < (Rt = L[Y]) && 1 > Rt && w(te(g, N.x1, N.x2, N.x, Rt));
                  for (var k = 0, H = Yt(A, N.y1, N.y2, N.y); k < H.length; k++)
                    0 < (Rt = H[k]) && 1 > Rt && I(te(A, N.y1, N.y2, N.y, Rt));
                }
                if (N.type & D.ARC) {
                  (w(N.x), I(N.y), Pt(N, g, A));
                  for (
                    var q = (N.xRot / 180) * Math.PI,
                      j = Math.cos(q) * N.rX,
                      vt = Math.sin(q) * N.rX,
                      gt = -Math.sin(q) * N.rY,
                      St = Math.cos(q) * N.rY,
                      dt =
                        N.phi1 < N.phi2
                          ? [N.phi1, N.phi2]
                          : -180 > N.phi2
                            ? [N.phi2 + 360, N.phi1 + 360]
                            : [N.phi2, N.phi1],
                      pt = dt[0],
                      At = dt[1],
                      wt = function (Vt) {
                        var Bt = (180 * Math.atan2(Vt[1], Vt[0])) / Math.PI;
                        return Bt < pt ? Bt + 360 : Bt;
                      },
                      ct = 0,
                      It = ot(gt, -j, 0).map(wt);
                    ct < It.length;
                    ct++
                  )
                    (Rt = It[ct]) > pt && Rt < At && w(Ut(N.cX, j, gt, Rt));
                  for (
                    var Zt = 0, Ft = ot(St, -vt, 0).map(wt);
                    Zt < Ft.length;
                    Zt++
                  ) {
                    var Rt;
                    (Rt = Ft[Zt]) > pt && Rt < At && I(Ut(N.cY, vt, St, Rt));
                  }
                }
                return c;
              });
            return (
              (v.minX = 1 / 0),
              (v.maxX = -1 / 0),
              (v.minY = 1 / 0),
              (v.maxY = -1 / 0),
              v
            );
          }));
      })(it || (it = {}));
      var Dt,
        fe = (function () {
          function f() {}
          return (
            (f.prototype.round = function (l) {
              return this.transform(it.ROUND(l));
            }),
            (f.prototype.toAbs = function () {
              return this.transform(it.TO_ABS());
            }),
            (f.prototype.toRel = function () {
              return this.transform(it.TO_REL());
            }),
            (f.prototype.normalizeHVZ = function (l, r, n) {
              return this.transform(it.NORMALIZE_HVZ(l, r, n));
            }),
            (f.prototype.normalizeST = function () {
              return this.transform(it.NORMALIZE_ST());
            }),
            (f.prototype.qtToC = function () {
              return this.transform(it.QT_TO_C());
            }),
            (f.prototype.aToC = function () {
              return this.transform(it.A_TO_C());
            }),
            (f.prototype.sanitize = function (l) {
              return this.transform(it.SANITIZE(l));
            }),
            (f.prototype.translate = function (l, r) {
              return this.transform(it.TRANSLATE(l, r));
            }),
            (f.prototype.scale = function (l, r) {
              return this.transform(it.SCALE(l, r));
            }),
            (f.prototype.rotate = function (l, r, n) {
              return this.transform(it.ROTATE(l, r, n));
            }),
            (f.prototype.matrix = function (l, r, n, t, i, e) {
              return this.transform(it.MATRIX(l, r, n, t, i, e));
            }),
            (f.prototype.skewX = function (l) {
              return this.transform(it.SKEW_X(l));
            }),
            (f.prototype.skewY = function (l) {
              return this.transform(it.SKEW_Y(l));
            }),
            (f.prototype.xSymmetry = function (l) {
              return this.transform(it.X_AXIS_SYMMETRY(l));
            }),
            (f.prototype.ySymmetry = function (l) {
              return this.transform(it.Y_AXIS_SYMMETRY(l));
            }),
            (f.prototype.annotateArcs = function () {
              return this.transform(it.ANNOTATE_ARCS());
            }),
            f
          );
        })(),
        ie = function (l) {
          return " " === l || "\t" === l || "\r" === l || "\n" === l;
        },
        ge = function (l) {
          return (
            "0".charCodeAt(0) <= l.charCodeAt(0) &&
            l.charCodeAt(0) <= "9".charCodeAt(0)
          );
        },
        de = (function (f) {
          function l() {
            var r = f.call(this) || this;
            return (
              (r.curNumber = ""),
              (r.curCommandType = -1),
              (r.curCommandRelative = !1),
              (r.canParseCommandOrComma = !0),
              (r.curNumberHasExp = !1),
              (r.curNumberHasExpDigits = !1),
              (r.curNumberHasDecimal = !1),
              (r.curArgs = []),
              r
            );
          }
          return (
            _(l, f),
            (l.prototype.finish = function (r) {
              if (
                (void 0 === r && (r = []),
                this.parse(" ", r),
                0 !== this.curArgs.length || !this.canParseCommandOrComma)
              )
                throw new SyntaxError("Unterminated command at the path end.");
              return r;
            }),
            (l.prototype.parse = function (r, n) {
              var t = this;
              void 0 === n && (n = []);
              for (
                var i = function (c) {
                    (n.push(c),
                      (t.curArgs.length = 0),
                      (t.canParseCommandOrComma = !0));
                  },
                  e = 0;
                e < r.length;
                e++
              ) {
                var a = r[e],
                  o = !(
                    this.curCommandType !== D.ARC ||
                    (3 !== this.curArgs.length && 4 !== this.curArgs.length) ||
                    1 !== this.curNumber.length ||
                    ("0" !== this.curNumber && "1" !== this.curNumber)
                  ),
                  u = ge(a) && (("0" === this.curNumber && "0" === a) || o);
                if (!ge(a) || u)
                  if ("e" !== a && "E" !== a)
                    if (
                      ("-" !== a && "+" !== a) ||
                      !this.curNumberHasExp ||
                      this.curNumberHasExpDigits
                    )
                      if (
                        "." !== a ||
                        this.curNumberHasExp ||
                        this.curNumberHasDecimal ||
                        o
                      ) {
                        if (this.curNumber && -1 !== this.curCommandType) {
                          var h = Number(this.curNumber);
                          if (isNaN(h))
                            throw new SyntaxError(
                              "Invalid number ending at " + e,
                            );
                          if (this.curCommandType === D.ARC)
                            if (
                              0 === this.curArgs.length ||
                              1 === this.curArgs.length
                            ) {
                              if (0 > h)
                                throw new SyntaxError(
                                  'Expected positive number, got "' +
                                    h +
                                    '" at index "' +
                                    e +
                                    '"',
                                );
                            } else if (
                              (3 === this.curArgs.length ||
                                4 === this.curArgs.length) &&
                              "0" !== this.curNumber &&
                              "1" !== this.curNumber
                            )
                              throw new SyntaxError(
                                'Expected a flag, got "' +
                                  this.curNumber +
                                  '" at index "' +
                                  e +
                                  '"',
                              );
                          (this.curArgs.push(h),
                            this.curArgs.length === Ve[this.curCommandType] &&
                              (D.HORIZ_LINE_TO === this.curCommandType
                                ? i({
                                    type: D.HORIZ_LINE_TO,
                                    relative: this.curCommandRelative,
                                    x: h,
                                  })
                                : D.VERT_LINE_TO === this.curCommandType
                                  ? i({
                                      type: D.VERT_LINE_TO,
                                      relative: this.curCommandRelative,
                                      y: h,
                                    })
                                  : this.curCommandType === D.MOVE_TO ||
                                      this.curCommandType === D.LINE_TO ||
                                      this.curCommandType === D.SMOOTH_QUAD_TO
                                    ? (i({
                                        type: this.curCommandType,
                                        relative: this.curCommandRelative,
                                        x: this.curArgs[0],
                                        y: this.curArgs[1],
                                      }),
                                      D.MOVE_TO === this.curCommandType &&
                                        (this.curCommandType = D.LINE_TO))
                                    : this.curCommandType === D.CURVE_TO
                                      ? i({
                                          type: D.CURVE_TO,
                                          relative: this.curCommandRelative,
                                          x1: this.curArgs[0],
                                          y1: this.curArgs[1],
                                          x2: this.curArgs[2],
                                          y2: this.curArgs[3],
                                          x: this.curArgs[4],
                                          y: this.curArgs[5],
                                        })
                                      : this.curCommandType ===
                                          D.SMOOTH_CURVE_TO
                                        ? i({
                                            type: D.SMOOTH_CURVE_TO,
                                            relative: this.curCommandRelative,
                                            x2: this.curArgs[0],
                                            y2: this.curArgs[1],
                                            x: this.curArgs[2],
                                            y: this.curArgs[3],
                                          })
                                        : this.curCommandType === D.QUAD_TO
                                          ? i({
                                              type: D.QUAD_TO,
                                              relative: this.curCommandRelative,
                                              x1: this.curArgs[0],
                                              y1: this.curArgs[1],
                                              x: this.curArgs[2],
                                              y: this.curArgs[3],
                                            })
                                          : this.curCommandType === D.ARC &&
                                            i({
                                              type: D.ARC,
                                              relative: this.curCommandRelative,
                                              rX: this.curArgs[0],
                                              rY: this.curArgs[1],
                                              xRot: this.curArgs[2],
                                              lArcFlag: this.curArgs[3],
                                              sweepFlag: this.curArgs[4],
                                              x: this.curArgs[5],
                                              y: this.curArgs[6],
                                            })),
                            (this.curNumber = ""),
                            (this.curNumberHasExpDigits = !1),
                            (this.curNumberHasExp = !1),
                            (this.curNumberHasDecimal = !1),
                            (this.canParseCommandOrComma = !0));
                        }
                        if (!ie(a))
                          if ("," === a && this.canParseCommandOrComma)
                            this.canParseCommandOrComma = !1;
                          else if ("+" !== a && "-" !== a && "." !== a)
                            if (u)
                              ((this.curNumber = a),
                                (this.curNumberHasDecimal = !1));
                            else {
                              if (0 !== this.curArgs.length)
                                throw new SyntaxError(
                                  "Unterminated command at index " + e + ".",
                                );
                              if (!this.canParseCommandOrComma)
                                throw new SyntaxError(
                                  'Unexpected character "' +
                                    a +
                                    '" at index ' +
                                    e +
                                    ". Command cannot follow comma",
                                );
                              if (
                                ((this.canParseCommandOrComma = !1),
                                "z" !== a && "Z" !== a)
                              )
                                if ("h" === a || "H" === a)
                                  ((this.curCommandType = D.HORIZ_LINE_TO),
                                    (this.curCommandRelative = "h" === a));
                                else if ("v" === a || "V" === a)
                                  ((this.curCommandType = D.VERT_LINE_TO),
                                    (this.curCommandRelative = "v" === a));
                                else if ("m" === a || "M" === a)
                                  ((this.curCommandType = D.MOVE_TO),
                                    (this.curCommandRelative = "m" === a));
                                else if ("l" === a || "L" === a)
                                  ((this.curCommandType = D.LINE_TO),
                                    (this.curCommandRelative = "l" === a));
                                else if ("c" === a || "C" === a)
                                  ((this.curCommandType = D.CURVE_TO),
                                    (this.curCommandRelative = "c" === a));
                                else if ("s" === a || "S" === a)
                                  ((this.curCommandType = D.SMOOTH_CURVE_TO),
                                    (this.curCommandRelative = "s" === a));
                                else if ("q" === a || "Q" === a)
                                  ((this.curCommandType = D.QUAD_TO),
                                    (this.curCommandRelative = "q" === a));
                                else if ("t" === a || "T" === a)
                                  ((this.curCommandType = D.SMOOTH_QUAD_TO),
                                    (this.curCommandRelative = "t" === a));
                                else {
                                  if ("a" !== a && "A" !== a)
                                    throw new SyntaxError(
                                      'Unexpected character "' +
                                        a +
                                        '" at index ' +
                                        e +
                                        ".",
                                    );
                                  ((this.curCommandType = D.ARC),
                                    (this.curCommandRelative = "a" === a));
                                }
                              else
                                (n.push({ type: D.CLOSE_PATH }),
                                  (this.canParseCommandOrComma = !0),
                                  (this.curCommandType = -1));
                            }
                          else
                            ((this.curNumber = a),
                              (this.curNumberHasDecimal = "." === a));
                      } else
                        ((this.curNumber += a),
                          (this.curNumberHasDecimal = !0));
                    else this.curNumber += a;
                  else ((this.curNumber += a), (this.curNumberHasExp = !0));
                else
                  ((this.curNumber += a),
                    (this.curNumberHasExpDigits = this.curNumberHasExp));
              }
              return n;
            }),
            (l.prototype.transform = function (r) {
              return Object.create(this, {
                parse: {
                  value: function (t, i) {
                    void 0 === i && (i = []);
                    for (
                      var e = 0,
                        a = Object.getPrototypeOf(this).parse.call(this, t);
                      e < a.length;
                      e++
                    ) {
                      var u = r(a[e]);
                      Array.isArray(u) ? i.push.apply(i, u) : i.push(u);
                    }
                    return i;
                  },
                },
              });
            }),
            l
          );
        })(fe),
        D = (function (f) {
          function l(r) {
            var n = f.call(this) || this;
            return ((n.commands = "string" == typeof r ? l.parse(r) : r), n);
          }
          return (
            _(l, f),
            (l.prototype.encode = function () {
              return l.encode(this.commands);
            }),
            (l.prototype.getBounds = function () {
              var r = it.CALCULATE_BOUNDS();
              return (this.transform(r), r);
            }),
            (l.prototype.transform = function (r) {
              for (var n = [], t = 0, i = this.commands; t < i.length; t++) {
                var e = r(i[t]);
                Array.isArray(e) ? n.push.apply(n, e) : n.push(e);
              }
              return ((this.commands = n), this);
            }),
            (l.encode = function (r) {
              return (function (f) {
                var l = "";
                Array.isArray(f) || (f = [f]);
                for (var r = 0; r < f.length; r++) {
                  var n = f[r];
                  if (n.type === D.CLOSE_PATH) l += "z";
                  else if (n.type === D.HORIZ_LINE_TO)
                    l += (n.relative ? "h" : "H") + n.x;
                  else if (n.type === D.VERT_LINE_TO)
                    l += (n.relative ? "v" : "V") + n.y;
                  else if (n.type === D.MOVE_TO)
                    l += (n.relative ? "m" : "M") + n.x + " " + n.y;
                  else if (n.type === D.LINE_TO)
                    l += (n.relative ? "l" : "L") + n.x + " " + n.y;
                  else if (n.type === D.CURVE_TO)
                    l +=
                      (n.relative ? "c" : "C") +
                      n.x1 +
                      " " +
                      n.y1 +
                      " " +
                      n.x2 +
                      " " +
                      n.y2 +
                      " " +
                      n.x +
                      " " +
                      n.y;
                  else if (n.type === D.SMOOTH_CURVE_TO)
                    l +=
                      (n.relative ? "s" : "S") +
                      n.x2 +
                      " " +
                      n.y2 +
                      " " +
                      n.x +
                      " " +
                      n.y;
                  else if (n.type === D.QUAD_TO)
                    l +=
                      (n.relative ? "q" : "Q") +
                      n.x1 +
                      " " +
                      n.y1 +
                      " " +
                      n.x +
                      " " +
                      n.y;
                  else if (n.type === D.SMOOTH_QUAD_TO)
                    l += (n.relative ? "t" : "T") + n.x + " " + n.y;
                  else {
                    if (n.type !== D.ARC)
                      throw new Error(
                        'Unexpected command type "' +
                          n.type +
                          '" at index ' +
                          r +
                          ".",
                      );
                    l +=
                      (n.relative ? "a" : "A") +
                      n.rX +
                      " " +
                      n.rY +
                      " " +
                      n.xRot +
                      " " +
                      +n.lArcFlag +
                      " " +
                      +n.sweepFlag +
                      " " +
                      n.x +
                      " " +
                      n.y;
                  }
                }
                return l;
              })(r);
            }),
            (l.parse = function (r) {
              var n = new de(),
                t = [];
              return (n.parse(r, t), n.finish(t), t);
            }),
            (l.CLOSE_PATH = 1),
            (l.MOVE_TO = 2),
            (l.HORIZ_LINE_TO = 4),
            (l.VERT_LINE_TO = 8),
            (l.LINE_TO = 16),
            (l.CURVE_TO = 32),
            (l.SMOOTH_CURVE_TO = 64),
            (l.QUAD_TO = 128),
            (l.SMOOTH_QUAD_TO = 256),
            (l.ARC = 512),
            (l.LINE_COMMANDS = l.LINE_TO | l.HORIZ_LINE_TO | l.VERT_LINE_TO),
            (l.DRAWING_COMMANDS =
              l.HORIZ_LINE_TO |
              l.VERT_LINE_TO |
              l.LINE_TO |
              l.CURVE_TO |
              l.SMOOTH_CURVE_TO |
              l.QUAD_TO |
              l.SMOOTH_QUAD_TO |
              l.ARC),
            l
          );
        })(fe),
        Ve =
          (((Dt = {})[D.MOVE_TO] = 2),
          (Dt[D.LINE_TO] = 2),
          (Dt[D.HORIZ_LINE_TO] = 1),
          (Dt[D.VERT_LINE_TO] = 1),
          (Dt[D.CLOSE_PATH] = 0),
          (Dt[D.QUAD_TO] = 4),
          (Dt[D.SMOOTH_QUAD_TO] = 2),
          (Dt[D.CURVE_TO] = 6),
          (Dt[D.SMOOTH_CURVE_TO] = 4),
          (Dt[D.ARC] = 7),
          Dt);
      function Ae(f) {
        return (Ae =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (r) {
                return typeof r;
              }
            : function (r) {
                return r &&
                  "function" == typeof Symbol &&
                  r.constructor === Symbol &&
                  r !== Symbol.prototype
                  ? "symbol"
                  : typeof r;
              })(f);
      }
      s(44506);
      var Re = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335,
          292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335,
          312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298,
          284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335,
          323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428,
          417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298,
          291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437,
          428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335,
          329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265,
          261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428,
          422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354,
          350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298,
          294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507,
          501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437,
          433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381,
          377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335,
          332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297,
          294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265,
          263, 261, 259,
        ],
        Ge = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17,
          17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
          21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
        ];
      function ye(f, l, r, n, t, i) {
        if (!(isNaN(i) || i < 1)) {
          i |= 0;
          var e = (function (f, l, r, n, t) {
            if (
              ("string" == typeof f && (f = document.getElementById(f)),
              !f || "object" !== Ae(f) || !("getContext" in f))
            )
              throw new TypeError(
                "Expecting canvas with `getContext` method in processCanvasRGB(A) calls!",
              );
            var i = f.getContext("2d");
            try {
              return i.getImageData(l, r, n, t);
            } catch (e) {
              throw new Error("unable to access image data: " + e);
            }
          })(f, l, r, n, t);
          ((e = (function (f, l, r, n, t, i) {
            for (
              var A,
                e = f.data,
                a = 2 * i + 1,
                o = n - 1,
                u = t - 1,
                h = i + 1,
                v = (h * (h + 1)) / 2,
                c = new Me(),
                g = c,
                N = 1;
              N < a;
              N++
            )
              ((g = g.next = new Me()), N === h && (A = g));
            g.next = c;
            for (
              var w = null, I = null, Y = 0, L = 0, k = Re[i], H = Ge[i], q = 0;
              q < t;
              q++
            ) {
              g = c;
              for (
                var j = e[L],
                  vt = e[L + 1],
                  gt = e[L + 2],
                  St = e[L + 3],
                  dt = 0;
                dt < h;
                dt++
              )
                ((g.r = j), (g.g = vt), (g.b = gt), (g.a = St), (g = g.next));
              for (
                var pt = 0,
                  At = 0,
                  wt = 0,
                  ct = 0,
                  It = h * j,
                  Zt = h * vt,
                  Ft = h * gt,
                  Rt = h * St,
                  Mt = v * j,
                  Vt = v * vt,
                  zt = v * gt,
                  Xt = v * St,
                  Bt = 1;
                Bt < h;
                Bt++
              ) {
                var Ht = L + ((o < Bt ? o : Bt) << 2),
                  Wt = e[Ht],
                  Qt = e[Ht + 1],
                  Be = e[Ht + 2],
                  Ue = e[Ht + 3],
                  Te = h - Bt;
                ((Mt += (g.r = Wt) * Te),
                  (Vt += (g.g = Qt) * Te),
                  (zt += (g.b = Be) * Te),
                  (Xt += (g.a = Ue) * Te),
                  (pt += Wt),
                  (At += Qt),
                  (wt += Be),
                  (ct += Ue),
                  (g = g.next));
              }
              ((w = c), (I = A));
              for (var be = 0; be < n; be++) {
                var Se = (Xt * k) >> H;
                if (((e[L + 3] = Se), 0 !== Se)) {
                  var Pe = 255 / Se;
                  ((e[L] = ((Mt * k) >> H) * Pe),
                    (e[L + 1] = ((Vt * k) >> H) * Pe),
                    (e[L + 2] = ((zt * k) >> H) * Pe));
                } else e[L] = e[L + 1] = e[L + 2] = 0;
                ((Mt -= It),
                  (Vt -= Zt),
                  (zt -= Ft),
                  (Xt -= Rt),
                  (It -= w.r),
                  (Zt -= w.g),
                  (Ft -= w.b),
                  (Rt -= w.a));
                var ue = be + i + 1;
                ((Mt += pt += w.r = e[(ue = (Y + (ue < o ? ue : o)) << 2)]),
                  (Vt += At += w.g = e[ue + 1]),
                  (zt += wt += w.b = e[ue + 2]),
                  (Xt += ct += w.a = e[ue + 3]),
                  (w = w.next));
                var $e = I.r,
                  je = I.g,
                  we = I.b,
                  Ke = I.a;
                ((It += $e),
                  (Zt += je),
                  (Ft += we),
                  (Rt += Ke),
                  (pt -= $e),
                  (At -= je),
                  (wt -= we),
                  (ct -= Ke),
                  (I = I.next),
                  (L += 4));
              }
              Y += n;
            }
            for (var le = 0; le < n; le++) {
              var Ie = e[(L = le << 2)],
                ke = e[L + 1],
                Ze = e[L + 2],
                Jt = e[L + 3],
                Dr = h * Ie,
                Fr = h * ke,
                Br = h * Ze,
                Ur = h * Jt,
                or = v * Ie,
                ur = v * ke,
                lr = v * Ze,
                fr = v * Jt;
              g = c;
              for (var Dn = 0; Dn < h; Dn++)
                ((g.r = Ie), (g.g = ke), (g.b = Ze), (g.a = Jt), (g = g.next));
              for (
                var Fn = n, $r = 0, jr = 0, zr = 0, Gr = 0, hr = 1;
                hr <= i;
                hr++
              ) {
                var vr = h - hr;
                ((or += (g.r = Ie = e[(L = (Fn + le) << 2)]) * vr),
                  (ur += (g.g = ke = e[L + 1]) * vr),
                  (lr += (g.b = Ze = e[L + 2]) * vr),
                  (fr += (g.a = Jt = e[L + 3]) * vr),
                  (Gr += Ie),
                  ($r += ke),
                  (jr += Ze),
                  (zr += Jt),
                  (g = g.next),
                  hr < u && (Fn += n));
              }
              ((L = le), (w = c), (I = A));
              for (var Hr = 0; Hr < t; Hr++) {
                var qt = L << 2;
                ((e[qt + 3] = Jt = (fr * k) >> H),
                  Jt > 0
                    ? ((e[qt] = ((or * k) >> H) * (Jt = 255 / Jt)),
                      (e[qt + 1] = ((ur * k) >> H) * Jt),
                      (e[qt + 2] = ((lr * k) >> H) * Jt))
                    : (e[qt] = e[qt + 1] = e[qt + 2] = 0),
                  (or -= Dr),
                  (ur -= Fr),
                  (lr -= Br),
                  (fr -= Ur),
                  (Dr -= w.r),
                  (Fr -= w.g),
                  (Br -= w.b),
                  (Ur -= w.a),
                  (qt = (le + ((qt = Hr + h) < u ? qt : u) * n) << 2),
                  (or += Gr += w.r = e[qt]),
                  (ur += $r += w.g = e[qt + 1]),
                  (lr += jr += w.b = e[qt + 2]),
                  (fr += zr += w.a = e[qt + 3]),
                  (w = w.next),
                  (Dr += Ie = I.r),
                  (Fr += ke = I.g),
                  (Br += Ze = I.b),
                  (Ur += Jt = I.a),
                  (Gr -= Ie),
                  ($r -= ke),
                  (jr -= Ze),
                  (zr -= Jt),
                  (I = I.next),
                  (L += n));
              }
            }
            return f;
          })(e, 0, 0, n, t, i)),
            f.getContext("2d").putImageData(e, l, r));
        }
      }
      var Me = function f() {
          ((function (f, l) {
            if (!(f instanceof l))
              throw new TypeError("Cannot call a class as a function");
          })(this, f),
            (this.r = 0),
            (this.g = 0),
            (this.b = 0),
            (this.a = 0),
            (this.next = null));
        },
        dr = Object.freeze({
          __proto__: null,
          offscreen: function () {
            var f =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              l = f.DOMParser,
              r = {
                window: null,
                ignoreAnimation: !0,
                ignoreMouse: !0,
                DOMParser: l,
                createCanvas: function (t, i) {
                  return new OffscreenCanvas(t, i);
                },
                createImage: function (t) {
                  return V(
                    M.mark(function i() {
                      var e, a;
                      return M.wrap(function (h) {
                        for (;;)
                          switch ((h.prev = h.next)) {
                            case 0:
                              return ((h.next = 2), fetch(t));
                            case 2:
                              return ((e = h.sent), (h.next = 5), e.blob());
                            case 5:
                              return (
                                (a = h.sent),
                                (h.next = 8),
                                createImageBitmap(a)
                              );
                            case 8:
                              return h.abrupt("return", h.sent);
                            case 10:
                            case "end":
                              return h.stop();
                          }
                      }, i);
                    }),
                  )();
                },
              };
            return (
              ("undefined" != typeof DOMParser || void 0 === l) &&
                Reflect.deleteProperty(r, "DOMParser"),
              r
            );
          },
          node: function (f) {
            var r = f.canvas;
            return {
              window: null,
              ignoreAnimation: !0,
              ignoreMouse: !0,
              DOMParser: f.DOMParser,
              fetch: f.fetch,
              createCanvas: r.createCanvas,
              createImage: r.loadImage,
            };
          },
        });
      function Kt(f) {
        return f.replace(/(?!\u3000)\s+/gm, " ");
      }
      function he(f) {
        return f.replace(/^[\n \t]+/, "");
      }
      function Le(f) {
        return f.replace(/[\n \t]+$/, "");
      }
      function B(f) {
        return (
          (f || "").match(
            /-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm,
          ) || []
        ).map(parseFloat);
      }
      var st = /^[A-Z-]+$/;
      function ut(f) {
        return st.test(f) ? f.toLowerCase() : f;
      }
      function ft(f) {
        var l = /url\(('([^']+)'|"([^"]+)"|([^'")]+))\)/.exec(f) || [];
        return l[2] || l[3] || l[4];
      }
      function Ct(f) {
        if (!f.startsWith("rgb")) return f;
        var l = 3;
        return f.replace(/\d+(\.\d+)?/g, function (n, t) {
          return l-- && t ? String(Math.round(parseFloat(n))) : n;
        });
      }
      var kt = /(\[[^\]]+\])/g,
        _t = /(#[^\s+>~.[:]+)/g,
        ve = /(\.[^\s+>~.[:]+)/g,
        pe = /(::[^\s+>~.[:]+|:first-line|:first-letter|:before|:after)/gi,
        me = /(:[\w-]+\([^)]*\))/gi,
        ee = /(:[^\s+>~.[:]+)/g,
        se = /([^\s+>~.[:]+)/g;
      function re(f, l) {
        var r = l.exec(f);
        return r ? [f.replace(l, " "), r.length] : [f, 0];
      }
      function xe(f) {
        var l = [0, 0, 0],
          r = f
            .replace(/:not\(([^)]*)\)/g, "     $1 ")
            .replace(/{[\s\S]*/gm, " "),
          t = re(r, kt),
          i = (0, R.Z)(t, 2);
        ((r = i[0]), (l[1] += i[1]));
        var e = re(r, _t),
          a = (0, R.Z)(e, 2);
        ((r = a[0]), (l[0] += a[1]));
        var o = re(r, ve),
          u = (0, R.Z)(o, 2);
        ((r = u[0]), (l[1] += u[1]));
        var h = re(r, pe),
          v = (0, R.Z)(h, 2);
        ((r = v[0]), (l[2] += v[1]));
        var c = re(r, me),
          g = (0, R.Z)(c, 2);
        ((r = g[0]), (l[1] += g[1]));
        var A = re(r, ee),
          N = (0, R.Z)(A, 2);
        ((r = N[0]), (l[1] += N[1]));
        var w = re((r = r.replace(/[*\s+>~]/g, " ").replace(/[#.]/g, " ")), se),
          I = (0, R.Z)(w, 2);
        return ((r = I[0]), (l[2] += I[1]), l.join(""));
      }
      var ae = 1e-8;
      function yr(f) {
        return Math.sqrt(Math.pow(f[0], 2) + Math.pow(f[1], 2));
      }
      function tr(f, l) {
        return (f[0] * l[0] + f[1] * l[1]) / (yr(f) * yr(l));
      }
      function pr(f, l) {
        return (f[0] * l[1] < f[1] * l[0] ? -1 : 1) * Math.acos(tr(f, l));
      }
      function mr(f) {
        return f * f * f;
      }
      function xr(f) {
        return 3 * f * f * (1 - f);
      }
      function Er(f) {
        return 3 * f * (1 - f) * (1 - f);
      }
      function Tr(f) {
        return (1 - f) * (1 - f) * (1 - f);
      }
      function br(f) {
        return f * f;
      }
      function Sr(f) {
        return 2 * f * (1 - f);
      }
      function Pr(f) {
        return (1 - f) * (1 - f);
      }
      var rt = (function () {
        function f(l, r, n) {
          ((0, S.Z)(this, f),
            (this.document = l),
            (this.name = r),
            (this.value = n),
            (this.isNormalizedColor = !1));
        }
        return (
          (0, P.Z)(
            f,
            [
              {
                key: "split",
                value: function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : " ",
                    n = this.document,
                    t = this.name;
                  return Kt(this.getString())
                    .trim()
                    .split(r)
                    .map(function (i) {
                      return new f(n, t, i);
                    });
                },
              },
              {
                key: "hasValue",
                value: function (r) {
                  var n = this.value;
                  return (
                    null !== n && "" !== n && (r || 0 !== n) && void 0 !== n
                  );
                },
              },
              {
                key: "isString",
                value: function (r) {
                  var n = this.value,
                    t = "string" == typeof n;
                  return t && r ? r.test(n) : t;
                },
              },
              {
                key: "isUrlDefinition",
                value: function () {
                  return this.isString(/^url\(/);
                },
              },
              {
                key: "isPixels",
                value: function () {
                  if (!this.hasValue()) return !1;
                  var r = this.getString();
                  switch (!0) {
                    case r.endsWith("px"):
                    case /^[0-9]+$/.test(r):
                      return !0;
                    default:
                      return !1;
                  }
                },
              },
              {
                key: "setValue",
                value: function (r) {
                  return ((this.value = r), this);
                },
              },
              {
                key: "getValue",
                value: function (r) {
                  return void 0 === r || this.hasValue() ? this.value : r;
                },
              },
              {
                key: "getNumber",
                value: function (r) {
                  if (!this.hasValue()) return void 0 === r ? 0 : parseFloat(r);
                  var t = parseFloat(this.value);
                  return (this.isString(/%$/) && (t /= 100), t);
                },
              },
              {
                key: "getString",
                value: function (r) {
                  return void 0 === r || this.hasValue()
                    ? void 0 === this.value
                      ? ""
                      : String(this.value)
                    : String(r);
                },
              },
              {
                key: "getColor",
                value: function (r) {
                  var n = this.getString(r);
                  return (
                    this.isNormalizedColor ||
                      ((this.isNormalizedColor = !0),
                      (n = Ct(n)),
                      (this.value = n)),
                    n
                  );
                },
              },
              {
                key: "getDpi",
                value: function () {
                  return 96;
                },
              },
              {
                key: "getRem",
                value: function () {
                  return this.document.rootEmSize;
                },
              },
              {
                key: "getEm",
                value: function () {
                  return this.document.emSize;
                },
              },
              {
                key: "getUnits",
                value: function () {
                  return this.getString().replace(/[0-9.-]/g, "");
                },
              },
              {
                key: "getPixels",
                value: function (r) {
                  var n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (!this.hasValue()) return 0;
                  var t = "boolean" == typeof r ? [void 0, r] : [r],
                    i = (0, R.Z)(t, 2),
                    e = i[0],
                    a = i[1],
                    o = this.document.screen.viewPort;
                  switch (!0) {
                    case this.isString(/vmin$/):
                      return (
                        (this.getNumber() / 100) *
                        Math.min(o.computeSize("x"), o.computeSize("y"))
                      );
                    case this.isString(/vmax$/):
                      return (
                        (this.getNumber() / 100) *
                        Math.max(o.computeSize("x"), o.computeSize("y"))
                      );
                    case this.isString(/vw$/):
                      return (this.getNumber() / 100) * o.computeSize("x");
                    case this.isString(/vh$/):
                      return (this.getNumber() / 100) * o.computeSize("y");
                    case this.isString(/rem$/):
                      return this.getNumber() * this.getRem();
                    case this.isString(/em$/):
                      return this.getNumber() * this.getEm();
                    case this.isString(/ex$/):
                      return (this.getNumber() * this.getEm()) / 2;
                    case this.isString(/px$/):
                      return this.getNumber();
                    case this.isString(/pt$/):
                      return this.getNumber() * this.getDpi() * (1 / 72);
                    case this.isString(/pc$/):
                      return 15 * this.getNumber();
                    case this.isString(/cm$/):
                      return (this.getNumber() * this.getDpi()) / 2.54;
                    case this.isString(/mm$/):
                      return (this.getNumber() * this.getDpi()) / 25.4;
                    case this.isString(/in$/):
                      return this.getNumber() * this.getDpi();
                    case this.isString(/%$/) && a:
                      return this.getNumber() * this.getEm();
                    case this.isString(/%$/):
                      return this.getNumber() * o.computeSize(e);
                    default:
                      var u = this.getNumber();
                      return n && u < 1 ? u * o.computeSize(e) : u;
                  }
                },
              },
              {
                key: "getMilliseconds",
                value: function () {
                  return this.hasValue()
                    ? this.isString(/ms$/)
                      ? this.getNumber()
                      : 1e3 * this.getNumber()
                    : 0;
                },
              },
              {
                key: "getRadians",
                value: function () {
                  if (!this.hasValue()) return 0;
                  switch (!0) {
                    case this.isString(/deg$/):
                      return this.getNumber() * (Math.PI / 180);
                    case this.isString(/grad$/):
                      return this.getNumber() * (Math.PI / 200);
                    case this.isString(/rad$/):
                      return this.getNumber();
                    default:
                      return this.getNumber() * (Math.PI / 180);
                  }
                },
              },
              {
                key: "getDefinition",
                value: function () {
                  var r = this.getString(),
                    n = /#([^)'"]+)/.exec(r);
                  return (
                    n && (n = n[1]),
                    n || (n = r),
                    this.document.definitions[n]
                  );
                },
              },
              {
                key: "getFillStyleDefinition",
                value: function (r, n) {
                  var t = this.getDefinition();
                  if (!t) return null;
                  if ("function" == typeof t.createGradient)
                    return t.createGradient(this.document.ctx, r, n);
                  if ("function" == typeof t.createPattern) {
                    if (t.getHrefAttribute().hasValue()) {
                      var i = t.getAttribute("patternTransform");
                      ((t = t.getHrefAttribute().getDefinition()),
                        i.hasValue() &&
                          t
                            .getAttribute("patternTransform", !0)
                            .setValue(i.value));
                    }
                    return t.createPattern(this.document.ctx, r, n);
                  }
                  return null;
                },
              },
              {
                key: "getTextBaseline",
                value: function () {
                  return this.hasValue()
                    ? f.textBaselineMapping[this.getString()]
                    : null;
                },
              },
              {
                key: "addOpacity",
                value: function (r) {
                  for (
                    var n = this.getColor(), t = n.length, i = 0, e = 0;
                    e < t && ("," === n[e] && i++, 3 !== i);
                    e++
                  );
                  if (r.hasValue() && this.isString() && 3 !== i) {
                    var a = new mt(n);
                    a.ok && ((a.alpha = r.getNumber()), (n = a.toRGBA()));
                  }
                  return new f(this.document, this.name, n);
                },
              },
            ],
            [
              {
                key: "empty",
                value: function (r) {
                  return new f(r, "EMPTY", "");
                },
              },
            ],
          ),
          f
        );
      })();
      rt.textBaselineMapping = {
        baseline: "alphabetic",
        "before-edge": "top",
        "text-before-edge": "top",
        middle: "middle",
        central: "middle",
        "after-edge": "bottom",
        "text-after-edge": "bottom",
        ideographic: "ideographic",
        alphabetic: "alphabetic",
        hanging: "hanging",
        mathematical: "alphabetic",
      };
      var Yr = (function () {
          function f() {
            ((0, S.Z)(this, f), (this.viewPorts = []));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "clear",
                value: function () {
                  this.viewPorts = [];
                },
              },
              {
                key: "setCurrent",
                value: function (r, n) {
                  this.viewPorts.push({ width: r, height: n });
                },
              },
              {
                key: "removeCurrent",
                value: function () {
                  this.viewPorts.pop();
                },
              },
              {
                key: "getCurrent",
                value: function () {
                  var r = this.viewPorts;
                  return r[r.length - 1];
                },
              },
              {
                key: "width",
                get: function () {
                  return this.getCurrent().width;
                },
              },
              {
                key: "height",
                get: function () {
                  return this.getCurrent().height;
                },
              },
              {
                key: "computeSize",
                value: function (r) {
                  return "number" == typeof r
                    ? r
                    : "x" === r
                      ? this.width
                      : "y" === r
                        ? this.height
                        : Math.sqrt(
                            Math.pow(this.width, 2) + Math.pow(this.height, 2),
                          ) / Math.sqrt(2);
                },
              },
            ]),
            f
          );
        })(),
        Gt = (function () {
          function f(l, r) {
            ((0, S.Z)(this, f), (this.x = l), (this.y = r));
          }
          return (
            (0, P.Z)(
              f,
              [
                {
                  key: "angleTo",
                  value: function (r) {
                    return Math.atan2(r.y - this.y, r.x - this.x);
                  },
                },
                {
                  key: "applyTransform",
                  value: function (r) {
                    var n = this.x,
                      t = this.y,
                      e = n * r[1] + t * r[3] + r[5];
                    ((this.x = n * r[0] + t * r[2] + r[4]), (this.y = e));
                  },
                },
              ],
              [
                {
                  key: "parse",
                  value: function (r) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      t = B(r),
                      i = (0, R.Z)(t, 2),
                      e = i[0],
                      a = void 0 === e ? n : e,
                      o = i[1],
                      u = void 0 === o ? n : o;
                    return new f(a, u);
                  },
                },
                {
                  key: "parseScale",
                  value: function (r) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 1,
                      t = B(r),
                      i = (0, R.Z)(t, 2),
                      e = i[0],
                      a = void 0 === e ? n : e,
                      o = i[1],
                      u = void 0 === o ? a : o;
                    return new f(a, u);
                  },
                },
                {
                  key: "parsePath",
                  value: function (r) {
                    for (
                      var n = B(r), t = n.length, i = [], e = 0;
                      e < t;
                      e += 2
                    )
                      i.push(new f(n[e], n[e + 1]));
                    return i;
                  },
                },
              ],
            ),
            f
          );
        })(),
        Xr = (function () {
          function f(l) {
            ((0, S.Z)(this, f),
              (this.screen = l),
              (this.working = !1),
              (this.events = []),
              (this.eventElements = []),
              (this.onClick = this.onClick.bind(this)),
              (this.onMouseMove = this.onMouseMove.bind(this)));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "isWorking",
                value: function () {
                  return this.working;
                },
              },
              {
                key: "start",
                value: function () {
                  if (!this.working) {
                    var t = this.onMouseMove,
                      i = this.screen.ctx.canvas;
                    ((i.onclick = this.onClick),
                      (i.onmousemove = t),
                      (this.working = !0));
                  }
                },
              },
              {
                key: "stop",
                value: function () {
                  if (this.working) {
                    var r = this.screen.ctx.canvas;
                    ((this.working = !1),
                      (r.onclick = null),
                      (r.onmousemove = null));
                  }
                },
              },
              {
                key: "hasEvents",
                value: function () {
                  return this.working && this.events.length > 0;
                },
              },
              {
                key: "runEvents",
                value: function () {
                  if (this.working) {
                    var n = this.events,
                      t = this.eventElements,
                      i = this.screen.ctx.canvas.style;
                    (i && (i.cursor = ""),
                      n.forEach(function (e, a) {
                        for (var o = e.run, u = t[a]; u; )
                          (o(u), (u = u.parent));
                      }),
                      (this.events = []),
                      (this.eventElements = []));
                  }
                },
              },
              {
                key: "checkPath",
                value: function (r, n) {
                  if (this.working && n) {
                    var i = this.eventElements;
                    this.events.forEach(function (e, a) {
                      !i[a] &&
                        n.isPointInPath &&
                        n.isPointInPath(e.x, e.y) &&
                        (i[a] = r);
                    });
                  }
                },
              },
              {
                key: "checkBoundingBox",
                value: function (r, n) {
                  if (this.working && n) {
                    var i = this.eventElements;
                    this.events.forEach(function (e, a) {
                      !i[a] && n.isPointInBox(e.x, e.y) && (i[a] = r);
                    });
                  }
                },
              },
              {
                key: "mapXY",
                value: function (r, n) {
                  for (
                    var t = this.screen,
                      i = t.window,
                      e = t.ctx,
                      a = new Gt(r, n),
                      o = e.canvas;
                    o;
                  )
                    ((a.x -= o.offsetLeft),
                      (a.y -= o.offsetTop),
                      (o = o.offsetParent));
                  return (
                    i.scrollX && (a.x += i.scrollX),
                    i.scrollY && (a.y += i.scrollY),
                    a
                  );
                },
              },
              {
                key: "onClick",
                value: function (r) {
                  var n = this.mapXY(r.clientX, r.clientY);
                  this.events.push({
                    type: "onclick",
                    x: n.x,
                    y: n.y,
                    run: function (a) {
                      a.onClick && a.onClick();
                    },
                  });
                },
              },
              {
                key: "onMouseMove",
                value: function (r) {
                  var n = this.mapXY(r.clientX, r.clientY);
                  this.events.push({
                    type: "onmousemove",
                    x: n.x,
                    y: n.y,
                    run: function (a) {
                      a.onMouseMove && a.onMouseMove();
                    },
                  });
                },
              },
            ]),
            f
          );
        })(),
        Wr = "undefined" != typeof window ? window : null,
        Qr = "undefined" != typeof fetch ? fetch.bind(void 0) : null,
        Xe = (function () {
          function f(l) {
            (0, S.Z)(this, f);
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = r.fetch,
              t = void 0 === n ? Qr : n,
              i = r.window,
              e = void 0 === i ? Wr : i;
            ((this.ctx = l),
              (this.FRAMERATE = 30),
              (this.MAX_VIRTUAL_PIXELS = 3e4),
              (this.CLIENT_WIDTH = 800),
              (this.CLIENT_HEIGHT = 600),
              (this.viewPort = new Yr()),
              (this.mouse = new Xr(this)),
              (this.animations = []),
              (this.waits = []),
              (this.frameDuration = 0),
              (this.isReadyLock = !1),
              (this.isFirstRender = !0),
              (this.intervalId = null),
              (this.window = e),
              (this.fetch = t));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "wait",
                value: function (r) {
                  this.waits.push(r);
                },
              },
              {
                key: "ready",
                value: function () {
                  return this.readyPromise
                    ? this.readyPromise
                    : Promise.resolve();
                },
              },
              {
                key: "isReady",
                value: function () {
                  if (this.isReadyLock) return !0;
                  var r = this.waits.every(function (n) {
                    return n();
                  });
                  return (
                    r &&
                      ((this.waits = []),
                      this.resolveReady && this.resolveReady()),
                    (this.isReadyLock = r),
                    r
                  );
                },
              },
              {
                key: "setDefaults",
                value: function (r) {
                  ((r.strokeStyle = "rgba(0,0,0,0)"),
                    (r.lineCap = "butt"),
                    (r.lineJoin = "miter"),
                    (r.miterLimit = 4));
                },
              },
              {
                key: "setViewBox",
                value: function (r) {
                  var n = r.document,
                    t = r.ctx,
                    e = r.width,
                    a = r.desiredWidth,
                    o = r.height,
                    u = r.desiredHeight,
                    h = r.minX,
                    v = void 0 === h ? 0 : h,
                    c = r.minY,
                    g = void 0 === c ? 0 : c,
                    A = r.refX,
                    N = r.refY,
                    w = r.clip,
                    I = void 0 !== w && w,
                    Y = r.clipX,
                    L = void 0 === Y ? 0 : Y,
                    k = r.clipY,
                    H = void 0 === k ? 0 : k,
                    j = Kt(r.aspectRatio)
                      .replace(/^defer\s/, "")
                      .split(" "),
                    vt = (0, R.Z)(j, 2),
                    dt = vt[0] || "xMidYMid",
                    pt = vt[1] || "meet",
                    At = e / a,
                    wt = o / u,
                    ct = Math.min(At, wt),
                    It = Math.max(At, wt),
                    Zt = a,
                    Ft = u;
                  ("meet" === pt && ((Zt *= ct), (Ft *= ct)),
                    "slice" === pt && ((Zt *= It), (Ft *= It)));
                  var Rt = new rt(n, "refX", A),
                    Mt = new rt(n, "refY", N),
                    Vt = Rt.hasValue() && Mt.hasValue();
                  if (
                    (Vt &&
                      t.translate(
                        -ct * Rt.getPixels("x"),
                        -ct * Mt.getPixels("y"),
                      ),
                    I)
                  ) {
                    var zt = ct * L,
                      Xt = ct * H;
                    (t.beginPath(),
                      t.moveTo(zt, Xt),
                      t.lineTo(e, Xt),
                      t.lineTo(e, o),
                      t.lineTo(zt, o),
                      t.closePath(),
                      t.clip());
                  }
                  if (!Vt) {
                    var Bt = "meet" === pt && ct === wt,
                      Ht = "slice" === pt && It === wt,
                      Wt = "meet" === pt && ct === At,
                      Qt = "slice" === pt && It === At;
                    (dt.startsWith("xMid") &&
                      (Bt || Ht) &&
                      t.translate(e / 2 - Zt / 2, 0),
                      dt.endsWith("YMid") &&
                        (Wt || Qt) &&
                        t.translate(0, o / 2 - Ft / 2),
                      dt.startsWith("xMax") &&
                        (Bt || Ht) &&
                        t.translate(e - Zt, 0),
                      dt.endsWith("YMax") &&
                        (Wt || Qt) &&
                        t.translate(0, o - Ft));
                  }
                  switch (!0) {
                    case "none" === dt:
                      t.scale(At, wt);
                      break;
                    case "meet" === pt:
                      t.scale(ct, ct);
                      break;
                    case "slice" === pt:
                      t.scale(It, It);
                  }
                  t.translate(-v, -g);
                },
              },
              {
                key: "start",
                value: function (r) {
                  var n = this,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = t.enableRedraw,
                    e = void 0 !== i && i,
                    a = t.ignoreMouse,
                    o = void 0 !== a && a,
                    u = t.ignoreAnimation,
                    h = void 0 !== u && u,
                    v = t.ignoreDimensions,
                    c = void 0 !== v && v,
                    g = t.ignoreClear,
                    A = void 0 !== g && g,
                    N = t.forceRedraw,
                    w = t.scaleWidth,
                    I = t.scaleHeight,
                    Y = t.offsetX,
                    L = t.offsetY,
                    k = this.FRAMERATE,
                    H = this.mouse,
                    q = 1e3 / k;
                  if (
                    ((this.frameDuration = q),
                    (this.readyPromise = new Promise(function (dt) {
                      n.resolveReady = dt;
                    })),
                    this.isReady() && this.render(r, c, A, w, I, Y, L),
                    e)
                  ) {
                    var j = Date.now(),
                      vt = j,
                      gt = 0,
                      St = function dt() {
                        ((j = Date.now()),
                          (gt = j - vt) >= q &&
                            ((vt = j - (gt % q)),
                            n.shouldUpdate(h, N) &&
                              (n.render(r, c, A, w, I, Y, L), H.runEvents())),
                          (n.intervalId = xt(dt)));
                      };
                    (o || H.start(), (this.intervalId = xt(St)));
                  }
                },
              },
              {
                key: "stop",
                value: function () {
                  (this.intervalId &&
                    (xt.cancel(this.intervalId), (this.intervalId = null)),
                    this.mouse.stop());
                },
              },
              {
                key: "shouldUpdate",
                value: function (r, n) {
                  if (!r) {
                    var t = this.frameDuration;
                    if (
                      this.animations.reduce(function (e, a) {
                        return a.update(t) || e;
                      }, !1)
                    )
                      return !0;
                  }
                  return !!(
                    ("function" == typeof n && n()) ||
                    (!this.isReadyLock && this.isReady()) ||
                    this.mouse.hasEvents()
                  );
                },
              },
              {
                key: "render",
                value: function (r, n, t, i, e, a, o) {
                  var u = this.CLIENT_WIDTH,
                    h = this.CLIENT_HEIGHT,
                    v = this.viewPort,
                    c = this.ctx,
                    g = this.isFirstRender,
                    A = c.canvas;
                  (v.clear(),
                    A.width && A.height
                      ? v.setCurrent(A.width, A.height)
                      : v.setCurrent(u, h));
                  var N = r.getStyle("width"),
                    w = r.getStyle("height");
                  !n &&
                    (g || ("number" != typeof i && "number" != typeof e)) &&
                    (N.hasValue() &&
                      ((A.width = N.getPixels("x")),
                      A.style && (A.style.width = "".concat(A.width, "px"))),
                    w.hasValue() &&
                      ((A.height = w.getPixels("y")),
                      A.style && (A.style.height = "".concat(A.height, "px"))));
                  var I = A.clientWidth || A.width,
                    Y = A.clientHeight || A.height;
                  if (
                    (n &&
                      N.hasValue() &&
                      w.hasValue() &&
                      ((I = N.getPixels("x")), (Y = w.getPixels("y"))),
                    v.setCurrent(I, Y),
                    "number" == typeof a && r.getAttribute("x", !0).setValue(a),
                    "number" == typeof o && r.getAttribute("y", !0).setValue(o),
                    "number" == typeof i || "number" == typeof e)
                  ) {
                    var L = B(r.getAttribute("viewBox").getString()),
                      k = 0,
                      H = 0;
                    if ("number" == typeof i) {
                      var q = r.getStyle("width");
                      q.hasValue()
                        ? (k = q.getPixels("x") / i)
                        : isNaN(L[2]) || (k = L[2] / i);
                    }
                    if ("number" == typeof e) {
                      var j = r.getStyle("height");
                      j.hasValue()
                        ? (H = j.getPixels("y") / e)
                        : isNaN(L[3]) || (H = L[3] / e);
                    }
                    (k || (k = H),
                      H || (H = k),
                      r.getAttribute("width", !0).setValue(i),
                      r.getAttribute("height", !0).setValue(e));
                    var vt = r.getStyle("transform", !0, !0);
                    vt.setValue(
                      ""
                        .concat(vt.getString(), " scale(")
                        .concat(1 / k, ", ")
                        .concat(1 / H, ")"),
                    );
                  }
                  (t || c.clearRect(0, 0, I, Y),
                    r.render(c),
                    g && (this.isFirstRender = !1));
                },
              },
            ]),
            f
          );
        })();
      ((Xe.defaultWindow = Wr), (Xe.defaultFetch = Qr));
      var Bn = Xe.defaultFetch,
        Un = "undefined" != typeof DOMParser ? DOMParser : null,
        er = (function () {
          function f() {
            (0, S.Z)(this, f);
            var l =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = l.fetch,
              n = void 0 === r ? Bn : r,
              t = l.DOMParser,
              i = void 0 === t ? Un : t;
            ((this.fetch = n), (this.DOMParser = i));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "parse",
                value: function (r) {
                  var n = this;
                  return V(
                    M.mark(function t() {
                      return M.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!r.startsWith("<")) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return", n.parseFromString(r));
                            case 2:
                              return e.abrupt("return", n.load(r));
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, t);
                    }),
                  )();
                },
              },
              {
                key: "parseFromString",
                value: function (r) {
                  var n = new this.DOMParser();
                  try {
                    return this.checkDocument(
                      n.parseFromString(r, "image/svg+xml"),
                    );
                  } catch (t) {
                    return this.checkDocument(n.parseFromString(r, "text/xml"));
                  }
                },
              },
              {
                key: "checkDocument",
                value: function (r) {
                  var n = r.getElementsByTagName("parsererror")[0];
                  if (n) throw new Error(n.textContent);
                  return r;
                },
              },
              {
                key: "load",
                value: function (r) {
                  var n = this;
                  return V(
                    M.mark(function t() {
                      var i;
                      return M.wrap(function (o) {
                        for (;;)
                          switch ((o.prev = o.next)) {
                            case 0:
                              return ((o.next = 2), n.fetch(r));
                            case 2:
                              return ((i = o.sent), (o.next = 5), i.text());
                            case 5:
                              return o.abrupt(
                                "return",
                                n.parseFromString(o.sent),
                              );
                            case 7:
                            case "end":
                              return o.stop();
                          }
                      }, t);
                    }),
                  )();
                },
              },
            ]),
            f
          );
        })(),
        Kr = (function () {
          function f(l, r) {
            ((0, S.Z)(this, f),
              (this.type = "translate"),
              (this.point = null),
              (this.point = Gt.parse(r)));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "apply",
                value: function (r) {
                  var n = this.point;
                  r.translate(n.x || 0, n.y || 0);
                },
              },
              {
                key: "unapply",
                value: function (r) {
                  var n = this.point;
                  r.translate(-1 * n.x || 0, -1 * n.y || 0);
                },
              },
              {
                key: "applyToPoint",
                value: function (r) {
                  var n = this.point;
                  r.applyTransform([1, 0, 0, 1, n.x || 0, n.y || 0]);
                },
              },
            ]),
            f
          );
        })(),
        Jr = (function () {
          function f(l, r, n) {
            ((0, S.Z)(this, f),
              (this.type = "rotate"),
              (this.angle = null),
              (this.originX = null),
              (this.originY = null),
              (this.cx = 0),
              (this.cy = 0));
            var t = B(r);
            ((this.angle = new rt(l, "angle", t[0])),
              (this.originX = n[0]),
              (this.originY = n[1]),
              (this.cx = t[1] || 0),
              (this.cy = t[2] || 0));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "apply",
                value: function (r) {
                  var t = this.cy,
                    e = this.originY,
                    a = this.angle,
                    o = this.cx + this.originX.getPixels("x"),
                    u = t + e.getPixels("y");
                  (r.translate(o, u),
                    r.rotate(a.getRadians()),
                    r.translate(-o, -u));
                },
              },
              {
                key: "unapply",
                value: function (r) {
                  var t = this.cy,
                    e = this.originY,
                    a = this.angle,
                    o = this.cx + this.originX.getPixels("x"),
                    u = t + e.getPixels("y");
                  (r.translate(o, u),
                    r.rotate(-1 * a.getRadians()),
                    r.translate(-o, -u));
                },
              },
              {
                key: "applyToPoint",
                value: function (r) {
                  var n = this.cx,
                    t = this.cy,
                    e = this.angle.getRadians();
                  (r.applyTransform([1, 0, 0, 1, n || 0, t || 0]),
                    r.applyTransform([
                      Math.cos(e),
                      Math.sin(e),
                      -Math.sin(e),
                      Math.cos(e),
                      0,
                      0,
                    ]),
                    r.applyTransform([1, 0, 0, 1, -n || 0, -t || 0]));
                },
              },
            ]),
            f
          );
        })(),
        qr = (function () {
          function f(l, r, n) {
            ((0, S.Z)(this, f),
              (this.type = "scale"),
              (this.scale = null),
              (this.originX = null),
              (this.originY = null));
            var t = Gt.parseScale(r);
            ((0 === t.x || 0 === t.y) && ((t.x = ae), (t.y = ae)),
              (this.scale = t),
              (this.originX = n[0]),
              (this.originY = n[1]));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "apply",
                value: function (r) {
                  var n = this.scale,
                    t = n.x,
                    i = n.y,
                    a = this.originY,
                    o = this.originX.getPixels("x"),
                    u = a.getPixels("y");
                  (r.translate(o, u), r.scale(t, i || t), r.translate(-o, -u));
                },
              },
              {
                key: "unapply",
                value: function (r) {
                  var n = this.scale,
                    t = n.x,
                    i = n.y,
                    a = this.originY,
                    o = this.originX.getPixels("x"),
                    u = a.getPixels("y");
                  (r.translate(o, u),
                    r.scale(1 / t, 1 / i || t),
                    r.translate(-o, -u));
                },
              },
              {
                key: "applyToPoint",
                value: function (r) {
                  var n = this.scale;
                  r.applyTransform([n.x || 0, 0, 0, n.y || 0, 0, 0]);
                },
              },
            ]),
            f
          );
        })(),
        Or = (function () {
          function f(l, r, n) {
            ((0, S.Z)(this, f),
              (this.type = "matrix"),
              (this.matrix = []),
              (this.originX = null),
              (this.originY = null),
              (this.matrix = B(r)),
              (this.originX = n[0]),
              (this.originY = n[1]));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "apply",
                value: function (r) {
                  var t = this.originY,
                    i = this.matrix,
                    e = this.originX.getPixels("x"),
                    a = t.getPixels("y");
                  (r.translate(e, a),
                    r.transform(i[0], i[1], i[2], i[3], i[4], i[5]),
                    r.translate(-e, -a));
                },
              },
              {
                key: "unapply",
                value: function (r) {
                  var t = this.originY,
                    i = this.matrix,
                    e = i[0],
                    a = i[2],
                    o = i[4],
                    u = i[1],
                    h = i[3],
                    v = i[5],
                    N =
                      1 /
                      (e * (1 * h - 0 * v) -
                        a * (1 * u - 0 * v) +
                        o * (0 * u - 0 * h)),
                    w = this.originX.getPixels("x"),
                    I = t.getPixels("y");
                  (r.translate(w, I),
                    r.transform(
                      N * (1 * h - 0 * v),
                      N * (0 * v - 1 * u),
                      N * (0 * o - 1 * a),
                      N * (1 * e - 0 * o),
                      N * (a * v - o * h),
                      N * (o * u - e * v),
                    ),
                    r.translate(-w, -I));
                },
              },
              {
                key: "applyToPoint",
                value: function (r) {
                  r.applyTransform(this.matrix);
                },
              },
            ]),
            f
          );
        })(),
        Cr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "skew"),
              (e.angle = null),
              (e.angle = new rt(n, "angle", t)),
              e
            );
          }
          return r;
        })(Or),
        _r = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "skewX"),
              (e.matrix = [1, 0, Math.tan(e.angle.getRadians()), 1, 0, 0]),
              e
            );
          }
          return r;
        })(Cr),
        tn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "skewY"),
              (e.matrix = [1, Math.tan(e.angle.getRadians()), 0, 1, 0, 0]),
              e
            );
          }
          return r;
        })(Cr),
        We = (function () {
          function f(l, r, n) {
            var t = this;
            ((0, S.Z)(this, f),
              (this.document = l),
              (this.transforms = []),
              (function (f) {
                return Kt(f)
                  .trim()
                  .replace(/\)([a-zA-Z])/g, ") $1")
                  .replace(/\)(\s?,\s?)/g, ") ")
                  .split(/\s(?=[a-z])/);
              })(r).forEach(function (e) {
                if ("none" !== e) {
                  var a = (function (f) {
                      var l = f.split("("),
                        r = (0, R.Z)(l, 2),
                        t = r[1];
                      return [r[0].trim(), t.trim().replace(")", "")];
                    })(e),
                    o = (0, R.Z)(a, 2),
                    v = f.transformTypes[o[0]];
                  void 0 !== v && t.transforms.push(new v(t.document, o[1], n));
                }
              }));
          }
          return (
            (0, P.Z)(
              f,
              [
                {
                  key: "apply",
                  value: function (r) {
                    for (
                      var n = this.transforms, t = n.length, i = 0;
                      i < t;
                      i++
                    )
                      n[i].apply(r);
                  },
                },
                {
                  key: "unapply",
                  value: function (r) {
                    for (var n = this.transforms, i = n.length - 1; i >= 0; i--)
                      n[i].unapply(r);
                  },
                },
                {
                  key: "applyToPoint",
                  value: function (r) {
                    for (
                      var n = this.transforms, t = n.length, i = 0;
                      i < t;
                      i++
                    )
                      n[i].applyToPoint(r);
                  },
                },
              ],
              [
                {
                  key: "fromElement",
                  value: function (r, n) {
                    var t = n.getStyle("transform", !1, !0),
                      i = n.getStyle("transform-origin", !1, !0).split(),
                      e = (0, R.Z)(i, 2),
                      a = e[0],
                      o = e[1],
                      h = [a, void 0 === o ? a : o];
                    return t.hasValue() ? new f(r, t.getString(), h) : null;
                  },
                },
              ],
            ),
            f
          );
        })();
      We.transformTypes = {
        translate: Kr,
        rotate: Jr,
        scale: qr,
        matrix: Or,
        skewX: _r,
        skewY: tn,
      };
      var Lt = (function () {
        function f(l, r) {
          var n = this;
          (0, S.Z)(this, f);
          var t =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (
            ((this.document = l),
            (this.node = r),
            (this.captureTextNodes = t),
            (this.attributes = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.animationFrozen = !1),
            (this.animationFrozenValue = ""),
            (this.parent = null),
            (this.children = []),
            r && 1 === r.nodeType)
          ) {
            if (
              (Array.from(r.attributes).forEach(function (o) {
                var u = ut(o.nodeName);
                n.attributes[u] = new rt(l, u, o.value);
              }),
              this.addStylesFromStyleDefinition(),
              this.getAttribute("style").hasValue())
            ) {
              var i = this.getAttribute("style")
                .getString()
                .split(";")
                .map(function (o) {
                  return o.trim();
                });
              i.forEach(function (o) {
                if (o) {
                  var u = o.split(":").map(function (g) {
                      return g.trim();
                    }),
                    h = (0, R.Z)(u, 2),
                    v = h[0];
                  n.styles[v] = new rt(l, v, h[1]);
                }
              });
            }
            var e = l.definitions,
              a = this.getAttribute("id");
            (a.hasValue() && (e[a.getString()] || (e[a.getString()] = this)),
              Array.from(r.childNodes).forEach(function (o) {
                if (1 === o.nodeType) n.addChild(o);
                else if (t && (3 === o.nodeType || 4 === o.nodeType)) {
                  var u = l.createTextNode(o);
                  u.getText().length > 0 && n.addChild(u);
                }
              }));
          }
        }
        return (
          (0, P.Z)(f, [
            {
              key: "getAttribute",
              value: function (r) {
                var n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  t = this.attributes[r];
                if (!t && n) {
                  var i = new rt(this.document, r, "");
                  return ((this.attributes[r] = i), i);
                }
                return t || rt.empty(this.document);
              },
            },
            {
              key: "getHrefAttribute",
              value: function () {
                for (var r in this.attributes)
                  if ("href" === r || r.endsWith(":href"))
                    return this.attributes[r];
                return rt.empty(this.document);
              },
            },
            {
              key: "getStyle",
              value: function (r) {
                var n =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                  t =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  i = this.styles[r];
                if (i) return i;
                var e = this.getAttribute(r);
                if (null != e && e.hasValue()) return ((this.styles[r] = e), e);
                if (!t) {
                  var a = this.parent;
                  if (a) {
                    var o = a.getStyle(r);
                    if (null != o && o.hasValue()) return o;
                  }
                }
                if (n) {
                  var u = new rt(this.document, r, "");
                  return ((this.styles[r] = u), u);
                }
                return i || rt.empty(this.document);
              },
            },
            {
              key: "render",
              value: function (r) {
                if (
                  "none" !== this.getStyle("display").getString() &&
                  "hidden" !== this.getStyle("visibility").getString()
                ) {
                  if ((r.save(), this.getStyle("mask").hasValue())) {
                    var n = this.getStyle("mask").getDefinition();
                    n && (this.applyEffects(r), n.apply(r, this));
                  } else if (
                    "none" !== this.getStyle("filter").getValue("none")
                  ) {
                    var t = this.getStyle("filter").getDefinition();
                    t && (this.applyEffects(r), t.apply(r, this));
                  } else
                    (this.setContext(r),
                      this.renderChildren(r),
                      this.clearContext(r));
                  r.restore();
                }
              },
            },
            { key: "setContext", value: function (r) {} },
            {
              key: "applyEffects",
              value: function (r) {
                var n = We.fromElement(this.document, this);
                n && n.apply(r);
                var t = this.getStyle("clip-path", !1, !0);
                if (t.hasValue()) {
                  var i = t.getDefinition();
                  i && i.apply(r);
                }
              },
            },
            { key: "clearContext", value: function (r) {} },
            {
              key: "renderChildren",
              value: function (r) {
                this.children.forEach(function (n) {
                  n.render(r);
                });
              },
            },
            {
              key: "addChild",
              value: function (r) {
                var n = r instanceof f ? r : this.document.createElement(r);
                ((n.parent = this),
                  f.ignoreChildTypes.includes(n.type) || this.children.push(n));
              },
            },
            {
              key: "matchesSelector",
              value: function (r) {
                var n,
                  t = this.node;
                if ("function" == typeof t.matches) return t.matches(r);
                var i =
                  null === (n = t.getAttribute) || void 0 === n
                    ? void 0
                    : n.call(t, "class");
                return (
                  !(!i || "" === i) &&
                  i.split(" ").some(function (e) {
                    return ".".concat(e) === r;
                  })
                );
              },
            },
            {
              key: "addStylesFromStyleDefinition",
              value: function () {
                var r = this.document,
                  n = r.styles,
                  t = r.stylesSpecificity;
                for (var i in n)
                  if (!i.startsWith("@") && this.matchesSelector(i)) {
                    var e = n[i],
                      a = t[i];
                    if (e)
                      for (var o in e) {
                        var u = this.stylesSpecificity[o];
                        (void 0 === u && (u = "000"),
                          a >= u &&
                            ((this.styles[o] = e[o]),
                            (this.stylesSpecificity[o] = a)));
                      }
                  }
              },
            },
            {
              key: "removeStyles",
              value: function (r, n) {
                return n.reduce(function (i, e) {
                  var a = r.getStyle(e);
                  if (!a.hasValue()) return i;
                  var o = a.getString();
                  return (a.setValue(""), [].concat((0, O.Z)(i), [[e, o]]));
                }, []);
              },
            },
            {
              key: "restoreStyles",
              value: function (r, n) {
                n.forEach(function (t) {
                  var i = (0, R.Z)(t, 2),
                    a = i[1];
                  r.getStyle(i[0], !0).setValue(a);
                });
              },
            },
            {
              key: "isFirstChild",
              value: function () {
                var r;
                return (
                  0 ===
                  (null === (r = this.parent) || void 0 === r
                    ? void 0
                    : r.children.indexOf(this))
                );
              },
            },
          ]),
          f
        );
      })();
      Lt.ignoreChildTypes = ["title"];
      var en = (function (f) {
        (0, b.Z)(r, f);
        var l = (0, T.Z)(r);
        function r(n, t, i) {
          return ((0, S.Z)(this, r), l.call(this, n, t, i));
        }
        return r;
      })(Lt);
      function zn(f) {
        var l = f.trim();
        return /^('|")/.test(l) ? l : '"'.concat(l, '"');
      }
      function Gn(f) {
        return "undefined" == typeof process
          ? f
          : f.trim().split(",").map(zn).join(",");
      }
      function Hn(f) {
        if (!f) return "";
        var l = f.trim().toLowerCase();
        switch (l) {
          case "normal":
          case "italic":
          case "oblique":
          case "inherit":
          case "initial":
          case "unset":
            return l;
          default:
            return /^oblique\s+(-|)\d+deg$/.test(l) ? l : "";
        }
      }
      function Yn(f) {
        if (!f) return "";
        var l = f.trim().toLowerCase();
        switch (l) {
          case "normal":
          case "bold":
          case "lighter":
          case "bolder":
          case "inherit":
          case "initial":
          case "unset":
            return l;
          default:
            return /^[\d.]+$/.test(l) ? l : "";
        }
      }
      var oe = (function () {
        function f(l, r, n, t, i, e) {
          (0, S.Z)(this, f);
          var a = e ? ("string" == typeof e ? f.parse(e) : e) : {};
          ((this.fontFamily = i || a.fontFamily),
            (this.fontSize = t || a.fontSize),
            (this.fontStyle = l || a.fontStyle),
            (this.fontWeight = n || a.fontWeight),
            (this.fontVariant = r || a.fontVariant));
        }
        return (
          (0, P.Z)(
            f,
            [
              {
                key: "toString",
                value: function () {
                  return [
                    Hn(this.fontStyle),
                    this.fontVariant,
                    Yn(this.fontWeight),
                    this.fontSize,
                    Gn(this.fontFamily),
                  ]
                    .join(" ")
                    .trim();
                },
              },
            ],
            [
              {
                key: "parse",
                value: function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    t = "",
                    i = "",
                    e = "",
                    a = "",
                    o = "",
                    u = Kt(r).trim().split(" "),
                    h = {
                      fontSize: !1,
                      fontStyle: !1,
                      fontWeight: !1,
                      fontVariant: !1,
                    };
                  return (
                    u.forEach(function (v) {
                      switch (!0) {
                        case !h.fontStyle && f.styles.includes(v):
                          ("inherit" !== v && (t = v), (h.fontStyle = !0));
                          break;
                        case !h.fontVariant && f.variants.includes(v):
                          ("inherit" !== v && (i = v),
                            (h.fontStyle = !0),
                            (h.fontVariant = !0));
                          break;
                        case !h.fontWeight && f.weights.includes(v):
                          ("inherit" !== v && (e = v),
                            (h.fontStyle = !0),
                            (h.fontVariant = !0),
                            (h.fontWeight = !0));
                          break;
                        case !h.fontSize:
                          if ("inherit" !== v) {
                            var c = v.split("/"),
                              g = (0, R.Z)(c, 1);
                            a = g[0];
                          }
                          ((h.fontStyle = !0),
                            (h.fontVariant = !0),
                            (h.fontWeight = !0),
                            (h.fontSize = !0));
                          break;
                        default:
                          "inherit" !== v && (o += v);
                      }
                    }),
                    new f(t, i, e, a, o, n)
                  );
                },
              },
            ],
          ),
          f
        );
      })();
      ((oe.styles = "normal|italic|oblique|inherit"),
        (oe.variants = "normal|small-caps|inherit"),
        (oe.weights =
          "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit"));
      var ne = (function () {
          function f() {
            (0, S.Z)(this, f);
            var l =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : Number.NaN,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Number.NaN,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : Number.NaN,
              t =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : Number.NaN;
            ((this.x1 = l),
              (this.y1 = r),
              (this.x2 = n),
              (this.y2 = t),
              this.addPoint(l, r),
              this.addPoint(n, t));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "x",
                get: function () {
                  return this.x1;
                },
              },
              {
                key: "y",
                get: function () {
                  return this.y1;
                },
              },
              {
                key: "width",
                get: function () {
                  return this.x2 - this.x1;
                },
              },
              {
                key: "height",
                get: function () {
                  return this.y2 - this.y1;
                },
              },
              {
                key: "addPoint",
                value: function (r, n) {
                  (void 0 !== r &&
                    ((isNaN(this.x1) || isNaN(this.x2)) &&
                      ((this.x1 = r), (this.x2 = r)),
                    r < this.x1 && (this.x1 = r),
                    r > this.x2 && (this.x2 = r)),
                    void 0 !== n &&
                      ((isNaN(this.y1) || isNaN(this.y2)) &&
                        ((this.y1 = n), (this.y2 = n)),
                      n < this.y1 && (this.y1 = n),
                      n > this.y2 && (this.y2 = n)));
                },
              },
              {
                key: "addX",
                value: function (r) {
                  this.addPoint(r, null);
                },
              },
              {
                key: "addY",
                value: function (r) {
                  this.addPoint(null, r);
                },
              },
              {
                key: "addBoundingBox",
                value: function (r) {
                  if (r) {
                    var i = r.x2,
                      e = r.y2;
                    (this.addPoint(r.x1, r.y1), this.addPoint(i, e));
                  }
                },
              },
              {
                key: "sumCubic",
                value: function (r, n, t, i, e) {
                  return (
                    Math.pow(1 - r, 3) * n +
                    3 * Math.pow(1 - r, 2) * r * t +
                    3 * (1 - r) * Math.pow(r, 2) * i +
                    Math.pow(r, 3) * e
                  );
                },
              },
              {
                key: "bezierCurveAdd",
                value: function (r, n, t, i, e) {
                  var a = 6 * n - 12 * t + 6 * i,
                    o = -3 * n + 9 * t - 9 * i + 3 * e,
                    u = 3 * t - 3 * n;
                  if (0 !== o) {
                    var v = Math.pow(a, 2) - 4 * u * o;
                    if (!(v < 0)) {
                      var c = (-a + Math.sqrt(v)) / (2 * o);
                      0 < c &&
                        c < 1 &&
                        (r
                          ? this.addX(this.sumCubic(c, n, t, i, e))
                          : this.addY(this.sumCubic(c, n, t, i, e)));
                      var g = (-a - Math.sqrt(v)) / (2 * o);
                      0 < g &&
                        g < 1 &&
                        (r
                          ? this.addX(this.sumCubic(g, n, t, i, e))
                          : this.addY(this.sumCubic(g, n, t, i, e)));
                    }
                  } else {
                    if (0 === a) return;
                    var h = -u / a;
                    0 < h &&
                      h < 1 &&
                      (r
                        ? this.addX(this.sumCubic(h, n, t, i, e))
                        : this.addY(this.sumCubic(h, n, t, i, e)));
                  }
                },
              },
              {
                key: "addBezierCurve",
                value: function (r, n, t, i, e, a, o, u) {
                  (this.addPoint(r, n),
                    this.addPoint(o, u),
                    this.bezierCurveAdd(!0, r, t, e, o),
                    this.bezierCurveAdd(!1, n, i, a, u));
                },
              },
              {
                key: "addQuadraticCurve",
                value: function (r, n, t, i, e, a) {
                  var o = r + (2 / 3) * (t - r),
                    u = n + (2 / 3) * (i - n);
                  this.addBezierCurve(
                    r,
                    n,
                    o,
                    o + (1 / 3) * (e - r),
                    u,
                    u + (1 / 3) * (a - n),
                    e,
                    a,
                  );
                },
              },
              {
                key: "isPointInBox",
                value: function (r, n) {
                  return (
                    this.x1 <= r && r <= this.x2 && this.y1 <= n && n <= this.y2
                  );
                },
              },
            ]),
            f
          );
        })(),
        lt = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n) {
            var t;
            return (
              (0, S.Z)(this, r),
              ((t = l.call(
                this,
                n
                  .replace(/([+\-.])\s+/gm, "$1")
                  .replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""),
              )).control = null),
              (t.start = null),
              (t.current = null),
              (t.command = null),
              (t.commands = t.commands),
              (t.i = -1),
              (t.previousCommand = null),
              (t.points = []),
              (t.angles = []),
              t
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "reset",
                value: function () {
                  ((this.i = -1),
                    (this.command = null),
                    (this.previousCommand = null),
                    (this.start = new Gt(0, 0)),
                    (this.control = new Gt(0, 0)),
                    (this.current = new Gt(0, 0)),
                    (this.points = []),
                    (this.angles = []));
                },
              },
              {
                key: "isEnd",
                value: function () {
                  return this.i >= this.commands.length - 1;
                },
              },
              {
                key: "next",
                value: function () {
                  var t = this.commands[++this.i];
                  return (
                    (this.previousCommand = this.command),
                    (this.command = t),
                    t
                  );
                },
              },
              {
                key: "getPoint",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "x",
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "y",
                    e = new Gt(this.command[t], this.command[i]);
                  return this.makeAbsolute(e);
                },
              },
              {
                key: "getAsControlPoint",
                value: function (t, i) {
                  var e = this.getPoint(t, i);
                  return ((this.control = e), e);
                },
              },
              {
                key: "getAsCurrentPoint",
                value: function (t, i) {
                  var e = this.getPoint(t, i);
                  return ((this.current = e), e);
                },
              },
              {
                key: "getReflectedControlPoint",
                value: function () {
                  var t = this.previousCommand.type;
                  if (
                    t !== D.CURVE_TO &&
                    t !== D.SMOOTH_CURVE_TO &&
                    t !== D.QUAD_TO &&
                    t !== D.SMOOTH_QUAD_TO
                  )
                    return this.current;
                  var i = this.current,
                    o = this.control;
                  return new Gt(2 * i.x - o.x, 2 * i.y - o.y);
                },
              },
              {
                key: "makeAbsolute",
                value: function (t) {
                  if (this.command.relative) {
                    var i = this.current,
                      a = i.y;
                    ((t.x += i.x), (t.y += a));
                  }
                  return t;
                },
              },
              {
                key: "addMarker",
                value: function (t, i, e) {
                  var a = this.points,
                    o = this.angles;
                  (e &&
                    o.length > 0 &&
                    !o[o.length - 1] &&
                    (o[o.length - 1] = a[a.length - 1].angleTo(e)),
                    this.addMarkerAngle(t, i ? i.angleTo(t) : null));
                },
              },
              {
                key: "addMarkerAngle",
                value: function (t, i) {
                  (this.points.push(t), this.angles.push(i));
                },
              },
              {
                key: "getMarkerPoints",
                value: function () {
                  return this.points;
                },
              },
              {
                key: "getMarkerAngles",
                value: function () {
                  for (var t = this.angles, i = t.length, e = 0; e < i; e++)
                    if (!t[e])
                      for (var a = e + 1; a < i; a++)
                        if (t[a]) {
                          t[e] = t[a];
                          break;
                        }
                  return t;
                },
              },
            ]),
            r
          );
        })(D),
        Ee = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).modifiedEmSizeStack = !1),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "calculateOpacity",
                value: function () {
                  for (var t = 1, i = this; i; ) {
                    var e = i.getStyle("opacity", !1, !0);
                    (e.hasValue(!0) && (t *= e.getNumber()), (i = i.parent));
                  }
                  return t;
                },
              },
              {
                key: "setContext",
                value: function (t) {
                  var i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  if (!i) {
                    var e = this.getStyle("fill"),
                      a = this.getStyle("fill-opacity"),
                      o = this.getStyle("stroke"),
                      u = this.getStyle("stroke-opacity");
                    if (e.isUrlDefinition()) {
                      var h = e.getFillStyleDefinition(this, a);
                      h && (t.fillStyle = h);
                    } else if (e.hasValue()) {
                      "currentColor" === e.getString() &&
                        e.setValue(this.getStyle("color").getColor());
                      var v = e.getColor();
                      "inherit" !== v &&
                        (t.fillStyle = "none" === v ? "rgba(0,0,0,0)" : v);
                    }
                    if (a.hasValue()) {
                      var c = new rt(this.document, "fill", t.fillStyle)
                        .addOpacity(a)
                        .getColor();
                      t.fillStyle = c;
                    }
                    if (o.isUrlDefinition()) {
                      var g = o.getFillStyleDefinition(this, u);
                      g && (t.strokeStyle = g);
                    } else if (o.hasValue()) {
                      "currentColor" === o.getString() &&
                        o.setValue(this.getStyle("color").getColor());
                      var A = o.getString();
                      "inherit" !== A &&
                        (t.strokeStyle = "none" === A ? "rgba(0,0,0,0)" : A);
                    }
                    if (u.hasValue()) {
                      var N = new rt(this.document, "stroke", t.strokeStyle)
                        .addOpacity(u)
                        .getString();
                      t.strokeStyle = N;
                    }
                    var w = this.getStyle("stroke-width");
                    if (w.hasValue()) {
                      var I = w.getPixels();
                      t.lineWidth = I || ae;
                    }
                    var Y = this.getStyle("stroke-linecap"),
                      L = this.getStyle("stroke-linejoin"),
                      k = this.getStyle("stroke-miterlimit"),
                      H = this.getStyle("stroke-dasharray"),
                      q = this.getStyle("stroke-dashoffset");
                    if (
                      (Y.hasValue() && (t.lineCap = Y.getString()),
                      L.hasValue() && (t.lineJoin = L.getString()),
                      k.hasValue() && (t.miterLimit = k.getNumber()),
                      H.hasValue() && "none" !== H.getString())
                    ) {
                      var j = B(H.getString());
                      void 0 !== t.setLineDash
                        ? t.setLineDash(j)
                        : void 0 !== t.webkitLineDash
                          ? (t.webkitLineDash = j)
                          : void 0 !== t.mozDash &&
                            (1 !== j.length || 0 !== j[0]) &&
                            (t.mozDash = j);
                      var vt = q.getPixels();
                      void 0 !== t.lineDashOffset
                        ? (t.lineDashOffset = vt)
                        : void 0 !== t.webkitLineDashOffset
                          ? (t.webkitLineDashOffset = vt)
                          : void 0 !== t.mozDashOffset &&
                            (t.mozDashOffset = vt);
                    }
                  }
                  if (((this.modifiedEmSizeStack = !1), void 0 !== t.font)) {
                    var gt = this.getStyle("font"),
                      St = this.getStyle("font-style"),
                      dt = this.getStyle("font-variant"),
                      pt = this.getStyle("font-weight"),
                      At = this.getStyle("font-size"),
                      wt = this.getStyle("font-family"),
                      ct = new oe(
                        St.getString(),
                        dt.getString(),
                        pt.getString(),
                        At.hasValue() ? "".concat(At.getPixels(!0), "px") : "",
                        wt.getString(),
                        oe.parse(gt.getString(), t.font),
                      );
                    (St.setValue(ct.fontStyle),
                      dt.setValue(ct.fontVariant),
                      pt.setValue(ct.fontWeight),
                      At.setValue(ct.fontSize),
                      wt.setValue(ct.fontFamily),
                      (t.font = ct.toString()),
                      At.isPixels() &&
                        ((this.document.emSize = At.getPixels()),
                        (this.modifiedEmSizeStack = !0)));
                  }
                  i ||
                    (this.applyEffects(t),
                    (t.globalAlpha = this.calculateOpacity()));
                },
              },
              {
                key: "clearContext",
                value: function (t) {
                  ((0, m.Z)((0, E.Z)(r.prototype), "clearContext", this).call(
                    this,
                    t,
                  ),
                    this.modifiedEmSizeStack && this.document.popEmSize());
                },
              },
            ]),
            r
          );
        })(Lt),
        jt = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "path"),
              (e.pathParser = null),
              (e.pathParser = new lt(e.getAttribute("d").getString())),
              e
            );
          }
          return (
            (0, P.Z)(
              r,
              [
                {
                  key: "path",
                  value: function (t) {
                    var i = this.pathParser,
                      e = new ne();
                    for (i.reset(), t && t.beginPath(); !i.isEnd(); )
                      switch (i.next().type) {
                        case lt.MOVE_TO:
                          this.pathM(t, e);
                          break;
                        case lt.LINE_TO:
                          this.pathL(t, e);
                          break;
                        case lt.HORIZ_LINE_TO:
                          this.pathH(t, e);
                          break;
                        case lt.VERT_LINE_TO:
                          this.pathV(t, e);
                          break;
                        case lt.CURVE_TO:
                          this.pathC(t, e);
                          break;
                        case lt.SMOOTH_CURVE_TO:
                          this.pathS(t, e);
                          break;
                        case lt.QUAD_TO:
                          this.pathQ(t, e);
                          break;
                        case lt.SMOOTH_QUAD_TO:
                          this.pathT(t, e);
                          break;
                        case lt.ARC:
                          this.pathA(t, e);
                          break;
                        case lt.CLOSE_PATH:
                          this.pathZ(t, e);
                      }
                    return e;
                  },
                },
                {
                  key: "getBoundingBox",
                  value: function (t) {
                    return this.path();
                  },
                },
                {
                  key: "getMarkers",
                  value: function () {
                    var t = this.pathParser,
                      i = t.getMarkerPoints(),
                      e = t.getMarkerAngles();
                    return i.map(function (o, u) {
                      return [o, e[u]];
                    });
                  },
                },
                {
                  key: "renderChildren",
                  value: function (t) {
                    (this.path(t),
                      this.document.screen.mouse.checkPath(this, t));
                    var i = this.getStyle("fill-rule");
                    ("" !== t.fillStyle &&
                      ("inherit" !== i.getString("inherit")
                        ? t.fill(i.getString())
                        : t.fill()),
                      "" !== t.strokeStyle &&
                        ("non-scaling-stroke" ===
                        this.getAttribute("vector-effect").getString()
                          ? (t.save(),
                            t.setTransform(1, 0, 0, 1, 0, 0),
                            t.stroke(),
                            t.restore())
                          : t.stroke()));
                    var e = this.getMarkers();
                    if (e) {
                      var a = e.length - 1,
                        o = this.getStyle("marker-start"),
                        u = this.getStyle("marker-mid"),
                        h = this.getStyle("marker-end");
                      if (o.isUrlDefinition()) {
                        var v = o.getDefinition(),
                          c = (0, R.Z)(e[0], 2);
                        v.render(t, c[0], c[1]);
                      }
                      if (u.isUrlDefinition())
                        for (var N = u.getDefinition(), w = 1; w < a; w++) {
                          var I = (0, R.Z)(e[w], 2);
                          N.render(t, I[0], I[1]);
                        }
                      if (h.isUrlDefinition()) {
                        var k = h.getDefinition(),
                          H = (0, R.Z)(e[a], 2);
                        k.render(t, H[0], H[1]);
                      }
                    }
                  },
                },
                {
                  key: "pathM",
                  value: function (t, i) {
                    var e = this.pathParser,
                      o = r.pathM(e).point,
                      u = o.x,
                      h = o.y;
                    (e.addMarker(o), i.addPoint(u, h), t && t.moveTo(u, h));
                  },
                },
                {
                  key: "pathL",
                  value: function (t, i) {
                    var e = this.pathParser,
                      a = r.pathL(e),
                      u = a.point,
                      h = u.x,
                      v = u.y;
                    (e.addMarker(u, a.current),
                      i.addPoint(h, v),
                      t && t.lineTo(h, v));
                  },
                },
                {
                  key: "pathH",
                  value: function (t, i) {
                    var e = this.pathParser,
                      a = r.pathH(e),
                      u = a.point,
                      h = u.x,
                      v = u.y;
                    (e.addMarker(u, a.current),
                      i.addPoint(h, v),
                      t && t.lineTo(h, v));
                  },
                },
                {
                  key: "pathV",
                  value: function (t, i) {
                    var e = this.pathParser,
                      a = r.pathV(e),
                      u = a.point,
                      h = u.x,
                      v = u.y;
                    (e.addMarker(u, a.current),
                      i.addPoint(h, v),
                      t && t.lineTo(h, v));
                  },
                },
                {
                  key: "pathC",
                  value: function (t, i) {
                    var e = this.pathParser,
                      a = r.pathC(e),
                      o = a.current,
                      u = a.point,
                      h = a.controlPoint,
                      v = a.currentPoint;
                    (e.addMarker(v, h, u),
                      i.addBezierCurve(o.x, o.y, u.x, u.y, h.x, h.y, v.x, v.y),
                      t && t.bezierCurveTo(u.x, u.y, h.x, h.y, v.x, v.y));
                  },
                },
                {
                  key: "pathS",
                  value: function (t, i) {
                    var e = this.pathParser,
                      a = r.pathS(e),
                      o = a.current,
                      u = a.point,
                      h = a.controlPoint,
                      v = a.currentPoint;
                    (e.addMarker(v, h, u),
                      i.addBezierCurve(o.x, o.y, u.x, u.y, h.x, h.y, v.x, v.y),
                      t && t.bezierCurveTo(u.x, u.y, h.x, h.y, v.x, v.y));
                  },
                },
                {
                  key: "pathQ",
                  value: function (t, i) {
                    var e = this.pathParser,
                      a = r.pathQ(e),
                      o = a.current,
                      u = a.controlPoint,
                      h = a.currentPoint;
                    (e.addMarker(h, u, u),
                      i.addQuadraticCurve(o.x, o.y, u.x, u.y, h.x, h.y),
                      t && t.quadraticCurveTo(u.x, u.y, h.x, h.y));
                  },
                },
                {
                  key: "pathT",
                  value: function (t, i) {
                    var e = this.pathParser,
                      a = r.pathT(e),
                      o = a.current,
                      u = a.controlPoint,
                      h = a.currentPoint;
                    (e.addMarker(h, u, u),
                      i.addQuadraticCurve(o.x, o.y, u.x, u.y, h.x, h.y),
                      t && t.quadraticCurveTo(u.x, u.y, h.x, h.y));
                  },
                },
                {
                  key: "pathA",
                  value: function (t, i) {
                    var e = this.pathParser,
                      a = r.pathA(e),
                      o = a.currentPoint,
                      u = a.rX,
                      h = a.rY,
                      v = a.sweepFlag,
                      c = a.xAxisRotation,
                      g = a.centp,
                      A = a.a1,
                      N = a.ad,
                      w = 1 - v ? 1 : -1,
                      I = A + w * (N / 2),
                      Y = new Gt(g.x + u * Math.cos(I), g.y + h * Math.sin(I));
                    if (
                      (e.addMarkerAngle(Y, I - (w * Math.PI) / 2),
                      e.addMarkerAngle(o, I - w * Math.PI),
                      i.addPoint(o.x, o.y),
                      t && !isNaN(A) && !isNaN(N))
                    ) {
                      var L = u > h ? u : h,
                        k = u > h ? 1 : u / h,
                        H = u > h ? h / u : 1;
                      (t.translate(g.x, g.y),
                        t.rotate(c),
                        t.scale(k, H),
                        t.arc(0, 0, L, A, A + N, Boolean(1 - v)),
                        t.scale(1 / k, 1 / H),
                        t.rotate(-c),
                        t.translate(-g.x, -g.y));
                    }
                  },
                },
                {
                  key: "pathZ",
                  value: function (t, i) {
                    (r.pathZ(this.pathParser),
                      t && i.x1 !== i.x2 && i.y1 !== i.y2 && t.closePath());
                  },
                },
              ],
              [
                {
                  key: "pathM",
                  value: function (t) {
                    var i = t.getAsCurrentPoint();
                    return ((t.start = t.current), { point: i });
                  },
                },
                {
                  key: "pathL",
                  value: function (t) {
                    return { current: t.current, point: t.getAsCurrentPoint() };
                  },
                },
                {
                  key: "pathH",
                  value: function (t) {
                    var i = t.current,
                      e = t.command,
                      a = new Gt((e.relative ? i.x : 0) + e.x, i.y);
                    return ((t.current = a), { current: i, point: a });
                  },
                },
                {
                  key: "pathV",
                  value: function (t) {
                    var i = t.current,
                      e = t.command,
                      a = new Gt(i.x, (e.relative ? i.y : 0) + e.y);
                    return ((t.current = a), { current: i, point: a });
                  },
                },
                {
                  key: "pathC",
                  value: function (t) {
                    return {
                      current: t.current,
                      point: t.getPoint("x1", "y1"),
                      controlPoint: t.getAsControlPoint("x2", "y2"),
                      currentPoint: t.getAsCurrentPoint(),
                    };
                  },
                },
                {
                  key: "pathS",
                  value: function (t) {
                    return {
                      current: t.current,
                      point: t.getReflectedControlPoint(),
                      controlPoint: t.getAsControlPoint("x2", "y2"),
                      currentPoint: t.getAsCurrentPoint(),
                    };
                  },
                },
                {
                  key: "pathQ",
                  value: function (t) {
                    return {
                      current: t.current,
                      controlPoint: t.getAsControlPoint("x1", "y1"),
                      currentPoint: t.getAsCurrentPoint(),
                    };
                  },
                },
                {
                  key: "pathT",
                  value: function (t) {
                    var i = t.current,
                      e = t.getReflectedControlPoint();
                    return (
                      (t.control = e),
                      {
                        current: i,
                        controlPoint: e,
                        currentPoint: t.getAsCurrentPoint(),
                      }
                    );
                  },
                },
                {
                  key: "pathA",
                  value: function (t) {
                    var i = t.current,
                      e = t.command,
                      a = e.rX,
                      o = e.rY,
                      h = e.lArcFlag,
                      v = e.sweepFlag,
                      c = e.xRot * (Math.PI / 180),
                      g = t.getAsCurrentPoint(),
                      A = new Gt(
                        (Math.cos(c) * (i.x - g.x)) / 2 +
                          (Math.sin(c) * (i.y - g.y)) / 2,
                        (-Math.sin(c) * (i.x - g.x)) / 2 +
                          (Math.cos(c) * (i.y - g.y)) / 2,
                      ),
                      N =
                        Math.pow(A.x, 2) / Math.pow(a, 2) +
                        Math.pow(A.y, 2) / Math.pow(o, 2);
                    N > 1 && ((a *= Math.sqrt(N)), (o *= Math.sqrt(N)));
                    var w =
                      (h === v ? -1 : 1) *
                      Math.sqrt(
                        (Math.pow(a, 2) * Math.pow(o, 2) -
                          Math.pow(a, 2) * Math.pow(A.y, 2) -
                          Math.pow(o, 2) * Math.pow(A.x, 2)) /
                          (Math.pow(a, 2) * Math.pow(A.y, 2) +
                            Math.pow(o, 2) * Math.pow(A.x, 2)),
                      );
                    isNaN(w) && (w = 0);
                    var I = new Gt((w * a * A.y) / o, (w * -o * A.x) / a),
                      Y = new Gt(
                        (i.x + g.x) / 2 + Math.cos(c) * I.x - Math.sin(c) * I.y,
                        (i.y + g.y) / 2 + Math.sin(c) * I.x + Math.cos(c) * I.y,
                      ),
                      L = pr([1, 0], [(A.x - I.x) / a, (A.y - I.y) / o]),
                      k = [(A.x - I.x) / a, (A.y - I.y) / o],
                      H = [(-A.x - I.x) / a, (-A.y - I.y) / o],
                      q = pr(k, H);
                    return (
                      tr(k, H) <= -1 && (q = Math.PI),
                      tr(k, H) >= 1 && (q = 0),
                      {
                        currentPoint: g,
                        rX: a,
                        rY: o,
                        sweepFlag: v,
                        xAxisRotation: c,
                        centp: Y,
                        a1: L,
                        ad: q,
                      }
                    );
                  },
                },
                {
                  key: "pathZ",
                  value: function (t) {
                    t.current = t.start;
                  },
                },
              ],
            ),
            r
          );
        })(Ee),
        Ar = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "glyph"),
              (e.horizAdvX = e.getAttribute("horiz-adv-x").getNumber()),
              (e.unicode = e.getAttribute("unicode").getString()),
              (e.arabicForm = e.getAttribute("arabic-form").getString()),
              e
            );
          }
          return r;
        })(jt),
        De = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(
                this,
                n,
                t,
                (this instanceof r ? this.constructor : void 0) === r || i,
              )).type = "text"),
              (e.x = 0),
              (e.y = 0),
              (e.measureCache = -1),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "setContext",
                value: function (t) {
                  var i =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  (0, m.Z)((0, E.Z)(r.prototype), "setContext", this).call(
                    this,
                    t,
                    i,
                  );
                  var e =
                    this.getStyle("dominant-baseline").getTextBaseline() ||
                    this.getStyle("alignment-baseline").getTextBaseline();
                  e && (t.textBaseline = e);
                },
              },
              {
                key: "initializeCoordinates",
                value: function () {
                  ((this.x = 0),
                    (this.y = 0),
                    (this.leafTexts = []),
                    (this.textChunkStart = 0),
                    (this.minX = Number.POSITIVE_INFINITY),
                    (this.maxX = Number.NEGATIVE_INFINITY));
                },
              },
              {
                key: "getBoundingBox",
                value: function (t) {
                  var i = this;
                  if ("text" !== this.type)
                    return this.getTElementBoundingBox(t);
                  (this.initializeCoordinates(),
                    this.adjustChildCoordinatesRecursive(t));
                  var e = null;
                  return (
                    this.children.forEach(function (a, o) {
                      var u = i.getChildBoundingBox(t, i, i, o);
                      e ? e.addBoundingBox(u) : (e = u);
                    }),
                    e
                  );
                },
              },
              {
                key: "getFontSize",
                value: function () {
                  var i = this.parent,
                    e = oe.parse(this.document.ctx.font).fontSize;
                  return i.getStyle("font-size").getNumber(e);
                },
              },
              {
                key: "getTElementBoundingBox",
                value: function (t) {
                  var i = this.getFontSize();
                  return new ne(
                    this.x,
                    this.y - i,
                    this.x + this.measureText(t),
                    this.y,
                  );
                },
              },
              {
                key: "getGlyph",
                value: function (t, i, e) {
                  var a = i[e],
                    o = null;
                  if (t.isArabic) {
                    var u = i.length,
                      h = i[e - 1],
                      v = i[e + 1],
                      c = "isolated";
                    if (
                      ((0 === e || " " === h) &&
                        e < u - 1 &&
                        " " !== v &&
                        (c = "terminal"),
                      e > 0 &&
                        " " !== h &&
                        e < u - 1 &&
                        " " !== v &&
                        (c = "medial"),
                      e > 0 &&
                        " " !== h &&
                        (e === u - 1 || " " === v) &&
                        (c = "initial"),
                      void 0 !== t.glyphs[a])
                    ) {
                      var g = t.glyphs[a];
                      o = g instanceof Ar ? g : g[c];
                    }
                  } else o = t.glyphs[a];
                  return (o || (o = t.missingGlyph), o);
                },
              },
              {
                key: "getText",
                value: function () {
                  return "";
                },
              },
              {
                key: "getTextFromNode",
                value: function (t) {
                  var i = t || this.node,
                    e = Array.from(i.parentNode.childNodes),
                    a = e.indexOf(i),
                    o = e.length - 1,
                    u = Kt(i.textContent || "");
                  return (0 === a && (u = he(u)), a === o && (u = Le(u)), u);
                },
              },
              {
                key: "renderChildren",
                value: function (t) {
                  var i = this;
                  if ("text" === this.type) {
                    (this.initializeCoordinates(),
                      this.adjustChildCoordinatesRecursive(t),
                      this.children.forEach(function (a, o) {
                        i.renderChild(t, i, i, o);
                      }));
                    var e = this.document.screen.mouse;
                    e.isWorking() &&
                      e.checkBoundingBox(this, this.getBoundingBox(t));
                  } else this.renderTElementChildren(t);
                },
              },
              {
                key: "renderTElementChildren",
                value: function (t) {
                  var i = this.document,
                    e = this.parent,
                    a = this.getText(),
                    o = e.getStyle("font-family").getDefinition();
                  if (o)
                    for (
                      var u = o.fontFace.unitsPerEm,
                        h = oe.parse(i.ctx.font),
                        v = e.getStyle("font-size").getNumber(h.fontSize),
                        c = e.getStyle("font-style").getString(h.fontStyle),
                        g = v / u,
                        A = o.isRTL ? a.split("").reverse().join("") : a,
                        N = B(e.getAttribute("dx").getString()),
                        w = A.length,
                        I = 0;
                      I < w;
                      I++
                    ) {
                      var Y = this.getGlyph(o, A, I);
                      (t.translate(this.x, this.y), t.scale(g, -g));
                      var L = t.lineWidth;
                      ((t.lineWidth = (t.lineWidth * u) / v),
                        "italic" === c && t.transform(1, 0, 0.4, 1, 0, 0),
                        Y.render(t),
                        "italic" === c && t.transform(1, 0, -0.4, 1, 0, 0),
                        (t.lineWidth = L),
                        t.scale(1 / g, -1 / g),
                        t.translate(-this.x, -this.y),
                        (this.x += (v * (Y.horizAdvX || o.horizAdvX)) / u),
                        void 0 !== N[I] && !isNaN(N[I]) && (this.x += N[I]));
                    }
                  else {
                    var k = this.x,
                      H = this.y;
                    (t.fillStyle && t.fillText(a, k, H),
                      t.strokeStyle && t.strokeText(a, k, H));
                  }
                },
              },
              {
                key: "applyAnchoring",
                value: function () {
                  if (!(this.textChunkStart >= this.leafTexts.length)) {
                    var a,
                      t = this.leafTexts[this.textChunkStart],
                      i = t.getStyle("text-anchor").getString("start");
                    a =
                      "start" === i
                        ? t.x - this.minX
                        : "end" === i
                          ? t.x - this.maxX
                          : t.x - (this.minX + this.maxX) / 2;
                    for (
                      var o = this.textChunkStart;
                      o < this.leafTexts.length;
                      o++
                    )
                      this.leafTexts[o].x += a;
                    ((this.minX = Number.POSITIVE_INFINITY),
                      (this.maxX = Number.NEGATIVE_INFINITY),
                      (this.textChunkStart = this.leafTexts.length));
                  }
                },
              },
              {
                key: "adjustChildCoordinatesRecursive",
                value: function (t) {
                  var i = this;
                  (this.children.forEach(function (e, a) {
                    i.adjustChildCoordinatesRecursiveCore(t, i, i, a);
                  }),
                    this.applyAnchoring());
                },
              },
              {
                key: "adjustChildCoordinatesRecursiveCore",
                value: function (t, i, e, a) {
                  var o = e.children[a];
                  o.children.length > 0
                    ? o.children.forEach(function (u, h) {
                        i.adjustChildCoordinatesRecursiveCore(t, i, o, h);
                      })
                    : this.adjustChildCoordinates(t, i, e, a);
                },
              },
              {
                key: "adjustChildCoordinates",
                value: function (t, i, e, a) {
                  var o = e.children[a];
                  if ("function" != typeof o.measureText) return o;
                  (t.save(), o.setContext(t, !0));
                  var u = o.getAttribute("x"),
                    h = o.getAttribute("y"),
                    v = o.getAttribute("dx"),
                    c = o.getAttribute("dy"),
                    g = o.getStyle("font-family").getDefinition(),
                    A = Boolean(g) && g.isRTL;
                  0 === a &&
                    (u.hasValue() || u.setValue(o.getInheritedAttribute("x")),
                    h.hasValue() || h.setValue(o.getInheritedAttribute("y")),
                    v.hasValue() || v.setValue(o.getInheritedAttribute("dx")),
                    c.hasValue() || c.setValue(o.getInheritedAttribute("dy")));
                  var N = o.measureText(t);
                  return (
                    A && (i.x -= N),
                    u.hasValue()
                      ? (i.applyAnchoring(),
                        (o.x = u.getPixels("x")),
                        v.hasValue() && (o.x += v.getPixels("x")))
                      : (v.hasValue() && (i.x += v.getPixels("x")),
                        (o.x = i.x)),
                    (i.x = o.x),
                    A || (i.x += N),
                    h.hasValue()
                      ? ((o.y = h.getPixels("y")),
                        c.hasValue() && (o.y += c.getPixels("y")))
                      : (c.hasValue() && (i.y += c.getPixels("y")),
                        (o.y = i.y)),
                    (i.y = o.y),
                    i.leafTexts.push(o),
                    (i.minX = Math.min(i.minX, o.x, o.x + N)),
                    (i.maxX = Math.max(i.maxX, o.x, o.x + N)),
                    o.clearContext(t),
                    t.restore(),
                    o
                  );
                },
              },
              {
                key: "getChildBoundingBox",
                value: function (t, i, e, a) {
                  var o = e.children[a];
                  if ("function" != typeof o.getBoundingBox) return null;
                  var u = o.getBoundingBox(t);
                  return u
                    ? (o.children.forEach(function (h, v) {
                        var c = i.getChildBoundingBox(t, i, o, v);
                        u.addBoundingBox(c);
                      }),
                      u)
                    : null;
                },
              },
              {
                key: "renderChild",
                value: function (t, i, e, a) {
                  var o = e.children[a];
                  (o.render(t),
                    o.children.forEach(function (u, h) {
                      i.renderChild(t, i, o, h);
                    }));
                },
              },
              {
                key: "measureText",
                value: function (t) {
                  var i = this.measureCache;
                  if (~i) return i;
                  var e = this.getText(),
                    a = this.measureTargetText(t, e);
                  return ((this.measureCache = a), a);
                },
              },
              {
                key: "measureTargetText",
                value: function (t, i) {
                  if (!i.length) return 0;
                  var e = this.parent,
                    a = e.getStyle("font-family").getDefinition();
                  if (a) {
                    for (
                      var o = this.getFontSize(),
                        u = a.isRTL ? i.split("").reverse().join("") : i,
                        h = B(e.getAttribute("dx").getString()),
                        v = u.length,
                        c = 0,
                        g = 0;
                      g < v;
                      g++
                    )
                      ((c +=
                        ((this.getGlyph(a, u, g).horizAdvX || a.horizAdvX) *
                          o) /
                        a.fontFace.unitsPerEm),
                        void 0 !== h[g] && !isNaN(h[g]) && (c += h[g]));
                    return c;
                  }
                  if (!t.measureText) return 10 * i.length;
                  (t.save(), this.setContext(t, !0));
                  var w = t.measureText(i).width;
                  return (this.clearContext(t), t.restore(), w);
                },
              },
              {
                key: "getInheritedAttribute",
                value: function (t) {
                  for (var i = this; i instanceof r && i.isFirstChild(); ) {
                    var e = i.parent.getAttribute(t);
                    if (e.hasValue(!0)) return e.getValue("0");
                    i = i.parent;
                  }
                  return null;
                },
              },
            ]),
            r
          );
        })(Ee),
        Rr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(
                this,
                n,
                t,
                (this instanceof r ? this.constructor : void 0) === r || i,
              )).type = "tspan"),
              (e.text = e.children.length > 0 ? "" : e.getTextFromNode()),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getText",
                value: function () {
                  return this.text;
                },
              },
            ]),
            r
          );
        })(De),
        Xn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "textNode"),
              n
            );
          }
          return r;
        })(Rr),
        Fe = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "svg"),
              (n.root = !1),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "setContext",
                value: function (t) {
                  var i,
                    e = this.document,
                    a = e.screen,
                    o = e.window,
                    u = t.canvas;
                  if (
                    (a.setDefaults(t),
                    u.style &&
                      void 0 !== t.font &&
                      o &&
                      void 0 !== o.getComputedStyle)
                  ) {
                    t.font = o.getComputedStyle(u).getPropertyValue("font");
                    var h = new rt(e, "fontSize", oe.parse(t.font).fontSize);
                    h.hasValue() &&
                      ((e.rootEmSize = h.getPixels("y")),
                      (e.emSize = e.rootEmSize));
                  }
                  (this.getAttribute("x").hasValue() ||
                    this.getAttribute("x", !0).setValue(0),
                    this.getAttribute("y").hasValue() ||
                      this.getAttribute("y", !0).setValue(0));
                  var v = a.viewPort,
                    c = v.width,
                    g = v.height;
                  (this.getStyle("width").hasValue() ||
                    this.getStyle("width", !0).setValue("100%"),
                    this.getStyle("height").hasValue() ||
                      this.getStyle("height", !0).setValue("100%"),
                    this.getStyle("color").hasValue() ||
                      this.getStyle("color", !0).setValue("black"));
                  var A = this.getAttribute("refX"),
                    N = this.getAttribute("refY"),
                    w = this.getAttribute("viewBox"),
                    I = w.hasValue() ? B(w.getString()) : null,
                    Y =
                      !this.root &&
                      "visible" !==
                        this.getStyle("overflow").getValue("hidden"),
                    L = 0,
                    k = 0,
                    H = 0,
                    q = 0;
                  (I && ((L = I[0]), (k = I[1])),
                    this.root ||
                      ((c = this.getStyle("width").getPixels("x")),
                      (g = this.getStyle("height").getPixels("y")),
                      "marker" === this.type &&
                        ((H = L), (q = k), (L = 0), (k = 0))),
                    a.viewPort.setCurrent(c, g),
                    this.node &&
                      (!this.parent ||
                        "foreignObject" ===
                          (null === (i = this.node.parentNode) || void 0 === i
                            ? void 0
                            : i.nodeName)) &&
                      this.getStyle("transform", !1, !0).hasValue() &&
                      !this.getStyle("transform-origin", !1, !0).hasValue() &&
                      this.getStyle("transform-origin", !0, !0).setValue(
                        "50% 50%",
                      ),
                    (0, m.Z)((0, E.Z)(r.prototype), "setContext", this).call(
                      this,
                      t,
                    ),
                    t.translate(
                      this.getAttribute("x").getPixels("x"),
                      this.getAttribute("y").getPixels("y"),
                    ),
                    I && ((c = I[2]), (g = I[3])),
                    e.setViewBox({
                      ctx: t,
                      aspectRatio: this.getAttribute(
                        "preserveAspectRatio",
                      ).getString(),
                      width: a.viewPort.width,
                      desiredWidth: c,
                      height: a.viewPort.height,
                      desiredHeight: g,
                      minX: L,
                      minY: k,
                      refX: A.getValue(),
                      refY: N.getValue(),
                      clip: Y,
                      clipX: H,
                      clipY: q,
                    }),
                    I &&
                      (a.viewPort.removeCurrent(),
                      a.viewPort.setCurrent(c, g)));
                },
              },
              {
                key: "clearContext",
                value: function (t) {
                  ((0, m.Z)((0, E.Z)(r.prototype), "clearContext", this).call(
                    this,
                    t,
                  ),
                    this.document.screen.viewPort.removeCurrent());
                },
              },
              {
                key: "resize",
                value: function (t) {
                  var i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : t,
                    e =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    a = this.getAttribute("width", !0),
                    o = this.getAttribute("height", !0),
                    u = this.getAttribute("viewBox"),
                    h = this.getAttribute("style"),
                    v = a.getNumber(0),
                    c = o.getNumber(0);
                  if (e)
                    if ("string" == typeof e)
                      this.getAttribute("preserveAspectRatio", !0).setValue(e);
                    else {
                      var g = this.getAttribute("preserveAspectRatio");
                      g.hasValue() &&
                        g.setValue(
                          g.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"),
                        );
                    }
                  if (
                    (a.setValue(t),
                    o.setValue(i),
                    u.hasValue() ||
                      u.setValue("0 0 ".concat(v || t, " ").concat(c || i)),
                    h.hasValue())
                  ) {
                    var A = this.getStyle("width"),
                      N = this.getStyle("height");
                    (A.hasValue() && A.setValue("".concat(t, "px")),
                      N.hasValue() && N.setValue("".concat(i, "px")));
                  }
                },
              },
            ]),
            r
          );
        })(Ee),
        Mr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "rect"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "path",
                value: function (t) {
                  var i = this.getAttribute("x").getPixels("x"),
                    e = this.getAttribute("y").getPixels("y"),
                    a = this.getStyle("width", !1, !0).getPixels("x"),
                    o = this.getStyle("height", !1, !0).getPixels("y"),
                    u = this.getAttribute("rx"),
                    h = this.getAttribute("ry"),
                    v = u.getPixels("x"),
                    c = h.getPixels("y");
                  if (
                    (u.hasValue() && !h.hasValue() && (c = v),
                    h.hasValue() && !u.hasValue() && (v = c),
                    (v = Math.min(v, a / 2)),
                    (c = Math.min(c, o / 2)),
                    t)
                  ) {
                    var g = ((Math.sqrt(2) - 1) / 3) * 4;
                    (t.beginPath(),
                      o > 0 &&
                        a > 0 &&
                        (t.moveTo(i + v, e),
                        t.lineTo(i + a - v, e),
                        t.bezierCurveTo(
                          i + a - v + g * v,
                          e,
                          i + a,
                          e + c - g * c,
                          i + a,
                          e + c,
                        ),
                        t.lineTo(i + a, e + o - c),
                        t.bezierCurveTo(
                          i + a,
                          e + o - c + g * c,
                          i + a - v + g * v,
                          e + o,
                          i + a - v,
                          e + o,
                        ),
                        t.lineTo(i + v, e + o),
                        t.bezierCurveTo(
                          i + v - g * v,
                          e + o,
                          i,
                          e + o - c + g * c,
                          i,
                          e + o - c,
                        ),
                        t.lineTo(i, e + c),
                        t.bezierCurveTo(
                          i,
                          e + c - g * c,
                          i + v - g * v,
                          e,
                          i + v,
                          e,
                        ),
                        t.closePath()));
                  }
                  return new ne(i, e, i + a, e + o);
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(jt),
        rn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "circle"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "path",
                value: function (t) {
                  var i = this.getAttribute("cx").getPixels("x"),
                    e = this.getAttribute("cy").getPixels("y"),
                    a = this.getAttribute("r").getPixels();
                  return (
                    t &&
                      a > 0 &&
                      (t.beginPath(),
                      t.arc(i, e, a, 0, 2 * Math.PI, !1),
                      t.closePath()),
                    new ne(i - a, e - a, i + a, e + a)
                  );
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(jt),
        nn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "ellipse"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "path",
                value: function (t) {
                  var i = ((Math.sqrt(2) - 1) / 3) * 4,
                    e = this.getAttribute("rx").getPixels("x"),
                    a = this.getAttribute("ry").getPixels("y"),
                    o = this.getAttribute("cx").getPixels("x"),
                    u = this.getAttribute("cy").getPixels("y");
                  return (
                    t &&
                      e > 0 &&
                      a > 0 &&
                      (t.beginPath(),
                      t.moveTo(o + e, u),
                      t.bezierCurveTo(
                        o + e,
                        u + i * a,
                        o + i * e,
                        u + a,
                        o,
                        u + a,
                      ),
                      t.bezierCurveTo(
                        o - i * e,
                        u + a,
                        o - e,
                        u + i * a,
                        o - e,
                        u,
                      ),
                      t.bezierCurveTo(
                        o - e,
                        u - i * a,
                        o - i * e,
                        u - a,
                        o,
                        u - a,
                      ),
                      t.bezierCurveTo(
                        o + i * e,
                        u - a,
                        o + e,
                        u - i * a,
                        o + e,
                        u,
                      ),
                      t.closePath()),
                    new ne(o - e, u - a, o + e, u + a)
                  );
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  return null;
                },
              },
            ]),
            r
          );
        })(jt),
        an = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "line"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getPoints",
                value: function () {
                  return [
                    new Gt(
                      this.getAttribute("x1").getPixels("x"),
                      this.getAttribute("y1").getPixels("y"),
                    ),
                    new Gt(
                      this.getAttribute("x2").getPixels("x"),
                      this.getAttribute("y2").getPixels("y"),
                    ),
                  ];
                },
              },
              {
                key: "path",
                value: function (t) {
                  var i = this.getPoints(),
                    e = (0, R.Z)(i, 2),
                    a = e[0],
                    o = a.x,
                    u = a.y,
                    h = e[1],
                    v = h.x,
                    c = h.y;
                  return (
                    t && (t.beginPath(), t.moveTo(o, u), t.lineTo(v, c)),
                    new ne(o, u, v, c)
                  );
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  var t = this.getPoints(),
                    i = (0, R.Z)(t, 2),
                    e = i[0],
                    a = i[1],
                    o = e.angleTo(a);
                  return [
                    [e, o],
                    [a, o],
                  ];
                },
              },
            ]),
            r
          );
        })(jt),
        Nr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "polyline"),
              (e.points = []),
              (e.points = Gt.parsePath(e.getAttribute("points").getString())),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "path",
                value: function (t) {
                  var i = this.points,
                    a = (0, R.Z)(i, 1)[0],
                    o = a.x,
                    u = a.y,
                    h = new ne(o, u);
                  return (
                    t && (t.beginPath(), t.moveTo(o, u)),
                    i.forEach(function (v) {
                      var c = v.x,
                        g = v.y;
                      (h.addPoint(c, g), t && t.lineTo(c, g));
                    }),
                    h
                  );
                },
              },
              {
                key: "getMarkers",
                value: function () {
                  var t = this.points,
                    i = t.length - 1,
                    e = [];
                  return (
                    t.forEach(function (a, o) {
                      o !== i && e.push([a, a.angleTo(t[o + 1])]);
                    }),
                    e.length > 0 &&
                      e.push([t[t.length - 1], e[e.length - 1][1]]),
                    e
                  );
                },
              },
            ]),
            r
          );
        })(jt),
        sn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "polygon"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "path",
                value: function (t) {
                  var i = (0, m.Z)((0, E.Z)(r.prototype), "path", this).call(
                      this,
                      t,
                    ),
                    a = (0, R.Z)(this.points, 1)[0];
                  return (t && (t.lineTo(a.x, a.y), t.closePath()), i);
                },
              },
            ]),
            r
          );
        })(Nr),
        on = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "pattern"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "createPattern",
                value: function (t, i, e) {
                  var a = this.getStyle("width").getPixels("x", !0),
                    o = this.getStyle("height").getPixels("y", !0),
                    u = new Fe(this.document, null);
                  ((u.attributes.viewBox = new rt(
                    this.document,
                    "viewBox",
                    this.getAttribute("viewBox").getValue(),
                  )),
                    (u.attributes.width = new rt(
                      this.document,
                      "width",
                      "".concat(a, "px"),
                    )),
                    (u.attributes.height = new rt(
                      this.document,
                      "height",
                      "".concat(o, "px"),
                    )),
                    (u.attributes.transform = new rt(
                      this.document,
                      "transform",
                      this.getAttribute("patternTransform").getValue(),
                    )),
                    (u.children = this.children));
                  var h = this.document.createCanvas(a, o),
                    v = h.getContext("2d"),
                    c = this.getAttribute("x"),
                    g = this.getAttribute("y");
                  (c.hasValue() &&
                    g.hasValue() &&
                    v.translate(c.getPixels("x", !0), g.getPixels("y", !0)),
                    e.hasValue()
                      ? (this.styles["fill-opacity"] = e)
                      : Reflect.deleteProperty(this.styles, "fill-opacity"));
                  for (var A = -1; A <= 1; A++)
                    for (var N = -1; N <= 1; N++)
                      (v.save(),
                        (u.attributes.x = new rt(
                          this.document,
                          "x",
                          A * h.width,
                        )),
                        (u.attributes.y = new rt(
                          this.document,
                          "y",
                          N * h.height,
                        )),
                        u.render(v),
                        v.restore());
                  return t.createPattern(h, "repeat");
                },
              },
            ]),
            r
          );
        })(Lt),
        un = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "marker"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "render",
                value: function (t, i, e) {
                  if (i) {
                    var a = i.x,
                      o = i.y,
                      u = this.getAttribute("orient").getString("auto"),
                      h =
                        this.getAttribute("markerUnits").getString(
                          "strokeWidth",
                        );
                    (t.translate(a, o),
                      "auto" === u && t.rotate(e),
                      "strokeWidth" === h && t.scale(t.lineWidth, t.lineWidth),
                      t.save());
                    var v = new Fe(this.document, null);
                    ((v.type = this.type),
                      (v.attributes.viewBox = new rt(
                        this.document,
                        "viewBox",
                        this.getAttribute("viewBox").getValue(),
                      )),
                      (v.attributes.refX = new rt(
                        this.document,
                        "refX",
                        this.getAttribute("refX").getValue(),
                      )),
                      (v.attributes.refY = new rt(
                        this.document,
                        "refY",
                        this.getAttribute("refY").getValue(),
                      )),
                      (v.attributes.width = new rt(
                        this.document,
                        "width",
                        this.getAttribute("markerWidth").getValue(),
                      )),
                      (v.attributes.height = new rt(
                        this.document,
                        "height",
                        this.getAttribute("markerHeight").getValue(),
                      )),
                      (v.attributes.overflow = new rt(
                        this.document,
                        "overflow",
                        this.getAttribute("overflow").getValue(),
                      )),
                      (v.attributes.fill = new rt(
                        this.document,
                        "fill",
                        this.getAttribute("fill").getColor("black"),
                      )),
                      (v.attributes.stroke = new rt(
                        this.document,
                        "stroke",
                        this.getAttribute("stroke").getValue("none"),
                      )),
                      (v.children = this.children),
                      v.render(t),
                      t.restore(),
                      "strokeWidth" === h &&
                        t.scale(1 / t.lineWidth, 1 / t.lineWidth),
                      "auto" === u && t.rotate(-e),
                      t.translate(-a, -o));
                  }
                },
              },
            ]),
            r
          );
        })(Lt),
        ln = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "defs"),
              n
            );
          }
          return ((0, P.Z)(r, [{ key: "render", value: function () {} }]), r);
        })(Lt),
        rr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "g"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getBoundingBox",
                value: function (t) {
                  var i = new ne();
                  return (
                    this.children.forEach(function (e) {
                      i.addBoundingBox(e.getBoundingBox(t));
                    }),
                    i
                  );
                },
              },
            ]),
            r
          );
        })(Ee),
        wr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            ((0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).attributesToInherit = [
                "gradientUnits",
              ]),
              (e.stops = []));
            var a = (0, p.Z)(e),
              o = a.stops;
            return (
              a.children.forEach(function (h) {
                "stop" === h.type && o.push(h);
              }),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getGradientUnits",
                value: function () {
                  return this.getAttribute("gradientUnits").getString(
                    "objectBoundingBox",
                  );
                },
              },
              {
                key: "createGradient",
                value: function (t, i, e) {
                  var a = this,
                    o = this;
                  this.getHrefAttribute().hasValue() &&
                    ((o = this.getHrefAttribute().getDefinition()),
                    this.inheritStopContainer(o));
                  var h = o.stops,
                    v = this.getGradient(t, i);
                  if (!v)
                    return this.addParentOpacity(e, h[h.length - 1].color);
                  if (
                    (h.forEach(function (j) {
                      v.addColorStop(j.offset, a.addParentOpacity(e, j.color));
                    }),
                    this.getAttribute("gradientTransform").hasValue())
                  ) {
                    var c = this.document,
                      g = c.screen,
                      A = g.MAX_VIRTUAL_PIXELS,
                      I = (0, R.Z)(g.viewPort.viewPorts, 1)[0],
                      Y = new Mr(c, null);
                    ((Y.attributes.x = new rt(c, "x", -A / 3)),
                      (Y.attributes.y = new rt(c, "y", -A / 3)),
                      (Y.attributes.width = new rt(c, "width", A)),
                      (Y.attributes.height = new rt(c, "height", A)));
                    var L = new rr(c, null);
                    ((L.attributes.transform = new rt(
                      c,
                      "transform",
                      this.getAttribute("gradientTransform").getValue(),
                    )),
                      (L.children = [Y]));
                    var k = new Fe(c, null);
                    ((k.attributes.x = new rt(c, "x", 0)),
                      (k.attributes.y = new rt(c, "y", 0)),
                      (k.attributes.width = new rt(c, "width", I.width)),
                      (k.attributes.height = new rt(c, "height", I.height)),
                      (k.children = [L]));
                    var H = c.createCanvas(I.width, I.height),
                      q = H.getContext("2d");
                    return (
                      (q.fillStyle = v),
                      k.render(q),
                      q.createPattern(H, "no-repeat")
                    );
                  }
                  return v;
                },
              },
              {
                key: "inheritStopContainer",
                value: function (t) {
                  var i = this;
                  this.attributesToInherit.forEach(function (e) {
                    !i.getAttribute(e).hasValue() &&
                      t.getAttribute(e).hasValue() &&
                      i
                        .getAttribute(e, !0)
                        .setValue(t.getAttribute(e).getValue());
                  });
                },
              },
              {
                key: "addParentOpacity",
                value: function (t, i) {
                  return t.hasValue()
                    ? new rt(this.document, "color", i).addOpacity(t).getColor()
                    : i;
                },
              },
            ]),
            r
          );
        })(Lt),
        fn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "linearGradient"),
              e.attributesToInherit.push("x1", "y1", "x2", "y2"),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getGradient",
                value: function (t, i) {
                  var e = "objectBoundingBox" === this.getGradientUnits(),
                    a = e ? i.getBoundingBox(t) : null;
                  if (e && !a) return null;
                  !this.getAttribute("x1").hasValue() &&
                    !this.getAttribute("y1").hasValue() &&
                    !this.getAttribute("x2").hasValue() &&
                    !this.getAttribute("y2").hasValue() &&
                    (this.getAttribute("x1", !0).setValue(0),
                    this.getAttribute("y1", !0).setValue(0),
                    this.getAttribute("x2", !0).setValue(1),
                    this.getAttribute("y2", !0).setValue(0));
                  var o = e
                      ? a.x + a.width * this.getAttribute("x1").getNumber()
                      : this.getAttribute("x1").getPixels("x"),
                    u = e
                      ? a.y + a.height * this.getAttribute("y1").getNumber()
                      : this.getAttribute("y1").getPixels("y"),
                    h = e
                      ? a.x + a.width * this.getAttribute("x2").getNumber()
                      : this.getAttribute("x2").getPixels("x"),
                    v = e
                      ? a.y + a.height * this.getAttribute("y2").getNumber()
                      : this.getAttribute("y2").getPixels("y");
                  return o === h && u === v
                    ? null
                    : t.createLinearGradient(o, u, h, v);
                },
              },
            ]),
            r
          );
        })(wr),
        hn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "radialGradient"),
              e.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr"),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getGradient",
                value: function (t, i) {
                  var e = "objectBoundingBox" === this.getGradientUnits(),
                    a = i.getBoundingBox(t);
                  if (e && !a) return null;
                  (this.getAttribute("cx").hasValue() ||
                    this.getAttribute("cx", !0).setValue("50%"),
                    this.getAttribute("cy").hasValue() ||
                      this.getAttribute("cy", !0).setValue("50%"),
                    this.getAttribute("r").hasValue() ||
                      this.getAttribute("r", !0).setValue("50%"));
                  var o = e
                      ? a.x + a.width * this.getAttribute("cx").getNumber()
                      : this.getAttribute("cx").getPixels("x"),
                    u = e
                      ? a.y + a.height * this.getAttribute("cy").getNumber()
                      : this.getAttribute("cy").getPixels("y"),
                    h = o,
                    v = u;
                  (this.getAttribute("fx").hasValue() &&
                    (h = e
                      ? a.x + a.width * this.getAttribute("fx").getNumber()
                      : this.getAttribute("fx").getPixels("x")),
                    this.getAttribute("fy").hasValue() &&
                      (v = e
                        ? a.y + a.height * this.getAttribute("fy").getNumber()
                        : this.getAttribute("fy").getPixels("y")));
                  var c = e
                      ? ((a.width + a.height) / 2) *
                        this.getAttribute("r").getNumber()
                      : this.getAttribute("r").getPixels(),
                    g = this.getAttribute("fr").getPixels();
                  return t.createRadialGradient(h, v, g, o, u, c);
                },
              },
            ]),
            r
          );
        })(wr),
        vn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            ((0, S.Z)(this, r), ((e = l.call(this, n, t, i)).type = "stop"));
            var a = Math.max(
                0,
                Math.min(1, e.getAttribute("offset").getNumber()),
              ),
              o = e.getStyle("stop-opacity"),
              u = e.getStyle("stop-color", !0);
            return (
              "" === u.getString() && u.setValue("#000"),
              o.hasValue() && (u = u.addOpacity(o)),
              (e.offset = a),
              (e.color = u.getColor()),
              e
            );
          }
          return r;
        })(Lt),
        nr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            ((0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "animate"),
              (e.duration = 0),
              (e.initialValue = null),
              (e.initialUnits = ""),
              (e.removed = !1),
              (e.frozen = !1),
              n.screen.animations.push((0, p.Z)(e)),
              (e.begin = e.getAttribute("begin").getMilliseconds()),
              (e.maxDuration =
                e.begin + e.getAttribute("dur").getMilliseconds()),
              (e.from = e.getAttribute("from")),
              (e.to = e.getAttribute("to")),
              (e.values = new rt(n, "values", null)));
            var a = e.getAttribute("values");
            return (
              a.hasValue() && e.values.setValue(a.getString().split(";")),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getProperty",
                value: function () {
                  var t = this.getAttribute("attributeType").getString(),
                    i = this.getAttribute("attributeName").getString();
                  return "CSS" === t
                    ? this.parent.getStyle(i, !0)
                    : this.parent.getAttribute(i, !0);
                },
              },
              {
                key: "calcValue",
                value: function () {
                  var t = this.initialUnits,
                    i = this.getProgress(),
                    e = i.progress,
                    a = i.from,
                    o = i.to,
                    u = a.getNumber() + (o.getNumber() - a.getNumber()) * e;
                  return ("%" === t && (u *= 100), "".concat(u).concat(t));
                },
              },
              {
                key: "update",
                value: function (t) {
                  var i = this.parent,
                    e = this.getProperty();
                  if (
                    (this.initialValue ||
                      ((this.initialValue = e.getString()),
                      (this.initialUnits = e.getUnits())),
                    this.duration > this.maxDuration)
                  ) {
                    var a = this.getAttribute("fill").getString("remove");
                    if (
                      "indefinite" ===
                        this.getAttribute("repeatCount").getString() ||
                      "indefinite" ===
                        this.getAttribute("repeatDur").getString()
                    )
                      this.duration = 0;
                    else if ("freeze" !== a || this.frozen) {
                      if ("remove" === a && !this.removed)
                        return (
                          (this.removed = !0),
                          e.setValue(
                            i.animationFrozen
                              ? i.animationFrozenValue
                              : this.initialValue,
                          ),
                          !0
                        );
                    } else
                      ((this.frozen = !0),
                        (i.animationFrozen = !0),
                        (i.animationFrozenValue = e.getString()));
                    return !1;
                  }
                  this.duration += t;
                  var o = !1;
                  if (this.begin < this.duration) {
                    var u = this.calcValue(),
                      h = this.getAttribute("type");
                    if (h.hasValue()) {
                      var v = h.getString();
                      u = "".concat(v, "(").concat(u, ")");
                    }
                    (e.setValue(u), (o = !0));
                  }
                  return o;
                },
              },
              {
                key: "getProgress",
                value: function () {
                  var t = this.document,
                    i = this.values,
                    e = {
                      progress:
                        (this.duration - this.begin) /
                        (this.maxDuration - this.begin),
                    };
                  if (i.hasValue()) {
                    var a = e.progress * (i.getValue().length - 1),
                      o = Math.floor(a),
                      u = Math.ceil(a);
                    ((e.from = new rt(t, "from", parseFloat(i.getValue()[o]))),
                      (e.to = new rt(t, "to", parseFloat(i.getValue()[u]))),
                      (e.progress = (a - o) / (u - o)));
                  } else ((e.from = this.from), (e.to = this.to));
                  return e;
                },
              },
            ]),
            r
          );
        })(Lt),
        cn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "animateColor"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "calcValue",
                value: function () {
                  var t = this.getProgress(),
                    i = t.progress,
                    a = t.to,
                    o = new mt(t.from.getColor()),
                    u = new mt(a.getColor());
                  if (o.ok && u.ok) {
                    var v = o.g + (u.g - o.g) * i,
                      c = o.b + (u.b - o.b) * i;
                    return "rgb("
                      .concat(Math.floor(o.r + (u.r - o.r) * i), ", ")
                      .concat(Math.floor(v), ", ")
                      .concat(Math.floor(c), ")");
                  }
                  return this.getAttribute("from").getColor();
                },
              },
            ]),
            r
          );
        })(nr),
        gn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "animateTransform"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "calcValue",
                value: function () {
                  var t = this.getProgress(),
                    i = t.progress,
                    a = t.to,
                    o = B(t.from.getString()),
                    u = B(a.getString());
                  return o
                    .map(function (v, c) {
                      return v + (u[c] - v) * i;
                    })
                    .join(" ");
                },
              },
            ]),
            r
          );
        })(nr),
        dn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            ((0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "font"),
              (e.glyphs = {}),
              (e.horizAdvX = e.getAttribute("horiz-adv-x").getNumber()));
            var v,
              a = n.definitions,
              o = (0, p.Z)(e),
              h = (0, y.Z)(o.children);
            try {
              for (h.s(); !(v = h.n()).done; ) {
                var c = v.value;
                switch (c.type) {
                  case "font-face":
                    e.fontFace = c;
                    var g = c.getStyle("font-family");
                    g.hasValue() && (a[g.getString()] = (0, p.Z)(e));
                    break;
                  case "missing-glyph":
                    e.missingGlyph = c;
                    break;
                  case "glyph":
                    var A = c;
                    A.arabicForm
                      ? ((e.isRTL = !0),
                        (e.isArabic = !0),
                        void 0 === e.glyphs[A.unicode] &&
                          (e.glyphs[A.unicode] = {}),
                        (e.glyphs[A.unicode][A.arabicForm] = A))
                      : (e.glyphs[A.unicode] = A);
                }
              }
            } catch (N) {
              h.e(N);
            } finally {
              h.f();
            }
            return e;
          }
          return ((0, P.Z)(r, [{ key: "render", value: function () {} }]), r);
        })(Lt),
        yn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "font-face"),
              (e.ascent = e.getAttribute("ascent").getNumber()),
              (e.descent = e.getAttribute("descent").getNumber()),
              (e.unitsPerEm = e.getAttribute("units-per-em").getNumber()),
              e
            );
          }
          return r;
        })(Lt),
        pn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "missing-glyph"),
              (n.horizAdvX = 0),
              n
            );
          }
          return r;
        })(jt),
        mn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "tref"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getText",
                value: function () {
                  var t = this.getHrefAttribute().getDefinition();
                  if (t) {
                    var i = t.children[0];
                    if (i) return i.getText();
                  }
                  return "";
                },
              },
            ]),
            r
          );
        })(De),
        xn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            ((0, S.Z)(this, r), ((e = l.call(this, n, t, i)).type = "a"));
            var a = t.childNodes,
              o = a[0],
              u =
                a.length > 0 &&
                Array.from(a).every(function (h) {
                  return 3 === h.nodeType;
                });
            return (
              (e.hasText = u),
              (e.text = u ? e.getTextFromNode(o) : ""),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getText",
                value: function () {
                  return this.text;
                },
              },
              {
                key: "renderChildren",
                value: function (t) {
                  if (this.hasText) {
                    (0, m.Z)(
                      (0, E.Z)(r.prototype),
                      "renderChildren",
                      this,
                    ).call(this, t);
                    var i = this.document,
                      e = this.x,
                      a = this.y,
                      o = i.screen.mouse,
                      u = new rt(i, "fontSize", oe.parse(i.ctx.font).fontSize);
                    o.isWorking() &&
                      o.checkBoundingBox(
                        this,
                        new ne(
                          e,
                          a - u.getPixels("y"),
                          e + this.measureText(t),
                          a,
                        ),
                      );
                  } else if (this.children.length > 0) {
                    var h = new rr(this.document, null);
                    ((h.children = this.children),
                      (h.parent = this),
                      h.render(t));
                  }
                },
              },
              {
                key: "onClick",
                value: function () {
                  var t = this.document.window;
                  t && t.open(this.getHrefAttribute().getString());
                },
              },
              {
                key: "onMouseMove",
                value: function () {
                  this.document.ctx.canvas.style.cursor = "pointer";
                },
              },
            ]),
            r
          );
        })(De);
      function En(f, l) {
        var r = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(f);
          (l &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(f, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function ar(f) {
        for (var l = 1; l < arguments.length; l++) {
          var r = null != arguments[l] ? arguments[l] : {};
          l % 2
            ? En(Object(r), !0).forEach(function (n) {
                (0, Q.Z)(f, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(r))
              : En(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                    f,
                    n,
                    Object.getOwnPropertyDescriptor(r, n),
                  );
                });
        }
        return f;
      }
      var Tn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            ((0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "textPath"),
              (e.textWidth = 0),
              (e.textHeight = 0),
              (e.pathLength = -1),
              (e.glyphInfo = null),
              (e.letterSpacingCache = []),
              (e.measuresCache = new Map([["", 0]])));
            var a = e.getHrefAttribute().getDefinition();
            return (
              (e.text = e.getTextFromNode()),
              (e.dataArray = e.parsePathData(a)),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "getText",
                value: function () {
                  return this.text;
                },
              },
              {
                key: "path",
                value: function (t) {
                  var i = this.dataArray;
                  (t && t.beginPath(),
                    i.forEach(function (e) {
                      var o = e.points;
                      switch (e.type) {
                        case lt.LINE_TO:
                          t && t.lineTo(o[0], o[1]);
                          break;
                        case lt.MOVE_TO:
                          t && t.moveTo(o[0], o[1]);
                          break;
                        case lt.CURVE_TO:
                          t &&
                            t.bezierCurveTo(o[0], o[1], o[2], o[3], o[4], o[5]);
                          break;
                        case lt.QUAD_TO:
                          t && t.quadraticCurveTo(o[0], o[1], o[2], o[3]);
                          break;
                        case lt.ARC:
                          var u = (0, R.Z)(o, 8),
                            h = u[0],
                            v = u[1],
                            c = u[2],
                            g = u[3],
                            A = u[4],
                            N = u[5],
                            w = u[6],
                            I = u[7],
                            Y = c > g ? c : g,
                            L = c > g ? 1 : c / g,
                            k = c > g ? g / c : 1;
                          t &&
                            (t.translate(h, v),
                            t.rotate(w),
                            t.scale(L, k),
                            t.arc(0, 0, Y, A, A + N, Boolean(1 - I)),
                            t.scale(1 / L, 1 / k),
                            t.rotate(-w),
                            t.translate(-h, -v));
                          break;
                        case lt.CLOSE_PATH:
                          t && t.closePath();
                      }
                    }));
                },
              },
              {
                key: "renderChildren",
                value: function (t) {
                  (this.setTextData(t), t.save());
                  var i = this.parent.getStyle("text-decoration").getString(),
                    e = this.getFontSize(),
                    a = this.glyphInfo,
                    o = t.fillStyle;
                  ("underline" === i && t.beginPath(),
                    a.forEach(function (u, h) {
                      var v = u.p0,
                        c = u.p1,
                        g = u.rotation,
                        A = u.text;
                      (t.save(),
                        t.translate(v.x, v.y),
                        t.rotate(g),
                        t.fillStyle && t.fillText(A, 0, 0),
                        t.strokeStyle && t.strokeText(A, 0, 0),
                        t.restore(),
                        "underline" === i &&
                          (0 === h && t.moveTo(v.x, v.y + e / 8),
                          t.lineTo(c.x, c.y + e / 5)));
                    }),
                    "underline" === i &&
                      ((t.lineWidth = e / 20),
                      (t.strokeStyle = o),
                      t.stroke(),
                      t.closePath()),
                    t.restore());
                },
              },
              {
                key: "getLetterSpacingAt",
                value: function () {
                  var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  return this.letterSpacingCache[t] || 0;
                },
              },
              {
                key: "findSegmentToFitChar",
                value: function (t, i, e, a, o, u, h, v, c) {
                  var g = u,
                    A = this.measureText(t, v);
                  (" " === v && "justify" === i && e < a && (A += (a - e) / o),
                    c > -1 && (g += this.getLetterSpacingAt(c)));
                  var N = this.textHeight / 20,
                    w = this.getEquidistantPointOnPath(g, N, 0),
                    I = this.getEquidistantPointOnPath(g + A, N, 0),
                    Y = { p0: w, p1: I },
                    L = w && I ? Math.atan2(I.y - w.y, I.x - w.x) : 0;
                  if (h) {
                    var k = Math.cos(Math.PI / 2 + L) * h,
                      H = Math.cos(-L) * h;
                    ((Y.p0 = ar(ar({}, w), {}, { x: w.x + k, y: w.y + H })),
                      (Y.p1 = ar(ar({}, I), {}, { x: I.x + k, y: I.y + H })));
                  }
                  return { offset: (g += A), segment: Y, rotation: L };
                },
              },
              {
                key: "measureText",
                value: function (t, i) {
                  var e = this.measuresCache,
                    a = i || this.getText();
                  if (e.has(a)) return e.get(a);
                  var o = this.measureTargetText(t, a);
                  return (e.set(a, o), o);
                },
              },
              {
                key: "setTextData",
                value: function (t) {
                  var i = this;
                  if (!this.glyphInfo) {
                    var e = this.getText(),
                      a = e.split(""),
                      o = e.split(" ").length - 1,
                      u = this.parent
                        .getAttribute("dx")
                        .split()
                        .map(function (vt) {
                          return vt.getPixels("x");
                        }),
                      h = this.parent.getAttribute("dy").getPixels("y"),
                      v = this.parent
                        .getStyle("text-anchor")
                        .getString("start"),
                      c = this.getStyle("letter-spacing"),
                      g = this.parent.getStyle("letter-spacing"),
                      A = 0;
                    c.hasValue() && "inherit" !== c.getValue()
                      ? c.hasValue() &&
                        "initial" !== c.getValue() &&
                        "unset" !== c.getValue() &&
                        (A = c.getPixels())
                      : (A = g.getPixels());
                    var N = [],
                      w = e.length;
                    this.letterSpacingCache = N;
                    for (var I = 0; I < w; I++)
                      N.push(void 0 !== u[I] ? u[I] : A);
                    var Y = N.reduce(function (vt, gt, St) {
                        return 0 === St ? 0 : vt + gt || 0;
                      }, 0),
                      L = this.measureText(t),
                      k = Math.max(L + Y, 0);
                    ((this.textWidth = L),
                      (this.textHeight = this.getFontSize()),
                      (this.glyphInfo = []));
                    var H = this.getPathLength(),
                      q = this.getStyle("startOffset").getNumber(0) * H,
                      j = 0;
                    (("middle" === v || "center" === v) && (j = -k / 2),
                      ("end" === v || "right" === v) && (j = -k),
                      (j += q),
                      a.forEach(function (vt, gt) {
                        var St = i.findSegmentToFitChar(
                            t,
                            v,
                            k,
                            H,
                            o,
                            j,
                            h,
                            vt,
                            gt,
                          ),
                          pt = St.segment;
                        ((j = St.offset),
                          pt.p0 &&
                            pt.p1 &&
                            i.glyphInfo.push({
                              text: a[gt],
                              p0: pt.p0,
                              p1: pt.p1,
                              rotation: St.rotation,
                            }));
                      }));
                  }
                },
              },
              {
                key: "parsePathData",
                value: function (t) {
                  if (((this.pathLength = -1), !t)) return [];
                  var i = [],
                    e = t.pathParser;
                  for (e.reset(); !e.isEnd(); ) {
                    var a = e.current,
                      o = a ? a.x : 0,
                      u = a ? a.y : 0,
                      h = e.next(),
                      v = h.type,
                      c = [];
                    switch (h.type) {
                      case lt.MOVE_TO:
                        this.pathM(e, c);
                        break;
                      case lt.LINE_TO:
                        v = this.pathL(e, c);
                        break;
                      case lt.HORIZ_LINE_TO:
                        v = this.pathH(e, c);
                        break;
                      case lt.VERT_LINE_TO:
                        v = this.pathV(e, c);
                        break;
                      case lt.CURVE_TO:
                        this.pathC(e, c);
                        break;
                      case lt.SMOOTH_CURVE_TO:
                        v = this.pathS(e, c);
                        break;
                      case lt.QUAD_TO:
                        this.pathQ(e, c);
                        break;
                      case lt.SMOOTH_QUAD_TO:
                        v = this.pathT(e, c);
                        break;
                      case lt.ARC:
                        c = this.pathA(e);
                        break;
                      case lt.CLOSE_PATH:
                        jt.pathZ(e);
                    }
                    i.push(
                      h.type !== lt.CLOSE_PATH
                        ? {
                            type: v,
                            points: c,
                            start: { x: o, y: u },
                            pathLength: this.calcLength(o, u, v, c),
                          }
                        : { type: lt.CLOSE_PATH, points: [], pathLength: 0 },
                    );
                  }
                  return i;
                },
              },
              {
                key: "pathM",
                value: function (t, i) {
                  var e = jt.pathM(t).point;
                  i.push(e.x, e.y);
                },
              },
              {
                key: "pathL",
                value: function (t, i) {
                  var e = jt.pathL(t).point;
                  return (i.push(e.x, e.y), lt.LINE_TO);
                },
              },
              {
                key: "pathH",
                value: function (t, i) {
                  var e = jt.pathH(t).point;
                  return (i.push(e.x, e.y), lt.LINE_TO);
                },
              },
              {
                key: "pathV",
                value: function (t, i) {
                  var e = jt.pathV(t).point;
                  return (i.push(e.x, e.y), lt.LINE_TO);
                },
              },
              {
                key: "pathC",
                value: function (t, i) {
                  var e = jt.pathC(t),
                    a = e.point,
                    o = e.controlPoint,
                    u = e.currentPoint;
                  i.push(a.x, a.y, o.x, o.y, u.x, u.y);
                },
              },
              {
                key: "pathS",
                value: function (t, i) {
                  var e = jt.pathS(t),
                    a = e.point,
                    o = e.controlPoint,
                    u = e.currentPoint;
                  return (i.push(a.x, a.y, o.x, o.y, u.x, u.y), lt.CURVE_TO);
                },
              },
              {
                key: "pathQ",
                value: function (t, i) {
                  var e = jt.pathQ(t),
                    a = e.controlPoint,
                    o = e.currentPoint;
                  i.push(a.x, a.y, o.x, o.y);
                },
              },
              {
                key: "pathT",
                value: function (t, i) {
                  var e = jt.pathT(t),
                    a = e.controlPoint,
                    o = e.currentPoint;
                  return (i.push(a.x, a.y, o.x, o.y), lt.QUAD_TO);
                },
              },
              {
                key: "pathA",
                value: function (t) {
                  var i = jt.pathA(t),
                    o = i.sweepFlag,
                    h = i.centp,
                    c = i.ad;
                  return (
                    0 === o && c > 0 && (c -= 2 * Math.PI),
                    1 === o && c < 0 && (c += 2 * Math.PI),
                    [h.x, h.y, i.rX, i.rY, i.a1, c, i.xAxisRotation, o]
                  );
                },
              },
              {
                key: "calcLength",
                value: function (t, i, e, a) {
                  var o = 0,
                    u = null,
                    h = null,
                    v = 0;
                  switch (e) {
                    case lt.LINE_TO:
                      return this.getLineLength(t, i, a[0], a[1]);
                    case lt.CURVE_TO:
                      for (
                        o = 0,
                          u = this.getPointOnCubicBezier(
                            0,
                            t,
                            i,
                            a[0],
                            a[1],
                            a[2],
                            a[3],
                            a[4],
                            a[5],
                          ),
                          v = 0.01;
                        v <= 1;
                        v += 0.01
                      )
                        ((h = this.getPointOnCubicBezier(
                          v,
                          t,
                          i,
                          a[0],
                          a[1],
                          a[2],
                          a[3],
                          a[4],
                          a[5],
                        )),
                          (o += this.getLineLength(u.x, u.y, h.x, h.y)),
                          (u = h));
                      return o;
                    case lt.QUAD_TO:
                      for (
                        o = 0,
                          u = this.getPointOnQuadraticBezier(
                            0,
                            t,
                            i,
                            a[0],
                            a[1],
                            a[2],
                            a[3],
                          ),
                          v = 0.01;
                        v <= 1;
                        v += 0.01
                      )
                        ((h = this.getPointOnQuadraticBezier(
                          v,
                          t,
                          i,
                          a[0],
                          a[1],
                          a[2],
                          a[3],
                        )),
                          (o += this.getLineLength(u.x, u.y, h.x, h.y)),
                          (u = h));
                      return o;
                    case lt.ARC:
                      o = 0;
                      var c = a[4],
                        g = a[5],
                        A = a[4] + g,
                        N = Math.PI / 180;
                      if (
                        (Math.abs(c - A) < N && (N = Math.abs(c - A)),
                        (u = this.getPointOnEllipticalArc(
                          a[0],
                          a[1],
                          a[2],
                          a[3],
                          c,
                          0,
                        )),
                        g < 0)
                      )
                        for (v = c - N; v > A; v -= N)
                          ((h = this.getPointOnEllipticalArc(
                            a[0],
                            a[1],
                            a[2],
                            a[3],
                            v,
                            0,
                          )),
                            (o += this.getLineLength(u.x, u.y, h.x, h.y)),
                            (u = h));
                      else
                        for (v = c + N; v < A; v += N)
                          ((h = this.getPointOnEllipticalArc(
                            a[0],
                            a[1],
                            a[2],
                            a[3],
                            v,
                            0,
                          )),
                            (o += this.getLineLength(u.x, u.y, h.x, h.y)),
                            (u = h));
                      return (
                        (h = this.getPointOnEllipticalArc(
                          a[0],
                          a[1],
                          a[2],
                          a[3],
                          A,
                          0,
                        )),
                        o + this.getLineLength(u.x, u.y, h.x, h.y)
                      );
                  }
                  return 0;
                },
              },
              {
                key: "getPointOnLine",
                value: function (t, i, e, a, o) {
                  var u =
                      arguments.length > 5 && void 0 !== arguments[5]
                        ? arguments[5]
                        : i,
                    h =
                      arguments.length > 6 && void 0 !== arguments[6]
                        ? arguments[6]
                        : e,
                    v = (o - e) / (a - i + ae),
                    c = Math.sqrt((t * t) / (1 + v * v));
                  a < i && (c *= -1);
                  var g = v * c,
                    A = null;
                  if (a === i) A = { x: u, y: h + g };
                  else if ((h - e) / (u - i + ae) === v)
                    A = { x: u + c, y: h + g };
                  else {
                    var N = 0,
                      w = 0,
                      I = this.getLineLength(i, e, a, o);
                    if (I < ae) return null;
                    var Y = (u - i) * (a - i) + (h - e) * (o - e),
                      L = this.getLineLength(
                        u,
                        h,
                        (N = i + (Y /= I * I) * (a - i)),
                        (w = e + Y * (o - e)),
                      ),
                      k = Math.sqrt(t * t - L * L);
                    ((c = Math.sqrt((k * k) / (1 + v * v))),
                      a < i && (c *= -1),
                      (A = { x: N + c, y: w + (g = v * c) }));
                  }
                  return A;
                },
              },
              {
                key: "getPointOnPath",
                value: function (t) {
                  var i = this.getPathLength(),
                    e = 0,
                    a = null;
                  if (t < -5e-5 || t - 5e-5 > i) return null;
                  var h,
                    u = (0, y.Z)(this.dataArray);
                  try {
                    for (u.s(); !(h = u.n()).done; ) {
                      var v = h.value;
                      if (
                        !v ||
                        !(v.pathLength < 5e-5 || e + v.pathLength + 5e-5 < t)
                      ) {
                        var c = t - e,
                          g = 0;
                        switch (v.type) {
                          case lt.LINE_TO:
                            a = this.getPointOnLine(
                              c,
                              v.start.x,
                              v.start.y,
                              v.points[0],
                              v.points[1],
                              v.start.x,
                              v.start.y,
                            );
                            break;
                          case lt.ARC:
                            var N = v.points[5],
                              w = v.points[4] + N;
                            if (
                              ((g = v.points[4] + (c / v.pathLength) * N),
                              (N < 0 && g < w) || (N >= 0 && g > w))
                            )
                              break;
                            a = this.getPointOnEllipticalArc(
                              v.points[0],
                              v.points[1],
                              v.points[2],
                              v.points[3],
                              g,
                              v.points[6],
                            );
                            break;
                          case lt.CURVE_TO:
                            ((g = c / v.pathLength) > 1 && (g = 1),
                              (a = this.getPointOnCubicBezier(
                                g,
                                v.start.x,
                                v.start.y,
                                v.points[0],
                                v.points[1],
                                v.points[2],
                                v.points[3],
                                v.points[4],
                                v.points[5],
                              )));
                            break;
                          case lt.QUAD_TO:
                            ((g = c / v.pathLength) > 1 && (g = 1),
                              (a = this.getPointOnQuadraticBezier(
                                g,
                                v.start.x,
                                v.start.y,
                                v.points[0],
                                v.points[1],
                                v.points[2],
                                v.points[3],
                              )));
                        }
                        if (a) return a;
                        break;
                      }
                      e += v.pathLength;
                    }
                  } catch (I) {
                    u.e(I);
                  } finally {
                    u.f();
                  }
                  return null;
                },
              },
              {
                key: "getLineLength",
                value: function (t, i, e, a) {
                  return Math.sqrt((e - t) * (e - t) + (a - i) * (a - i));
                },
              },
              {
                key: "getPathLength",
                value: function () {
                  return (
                    -1 === this.pathLength &&
                      (this.pathLength = this.dataArray.reduce(function (t, i) {
                        return i.pathLength > 0 ? t + i.pathLength : t;
                      }, 0)),
                    this.pathLength
                  );
                },
              },
              {
                key: "getPointOnCubicBezier",
                value: function (t, i, e, a, o, u, h, v, c) {
                  return {
                    x: v * mr(t) + u * xr(t) + a * Er(t) + i * Tr(t),
                    y: c * mr(t) + h * xr(t) + o * Er(t) + e * Tr(t),
                  };
                },
              },
              {
                key: "getPointOnQuadraticBezier",
                value: function (t, i, e, a, o, u, h) {
                  return {
                    x: u * br(t) + a * Sr(t) + i * Pr(t),
                    y: h * br(t) + o * Sr(t) + e * Pr(t),
                  };
                },
              },
              {
                key: "getPointOnEllipticalArc",
                value: function (t, i, e, a, o, u) {
                  var h = Math.cos(u),
                    v = Math.sin(u),
                    c_x = e * Math.cos(o),
                    c_y = a * Math.sin(o);
                  return {
                    x: t + (c_x * h - c_y * v),
                    y: i + (c_x * v + c_y * h),
                  };
                },
              },
              {
                key: "buildEquidistantCache",
                value: function (t, i) {
                  var e = this.getPathLength(),
                    a = i || 0.25,
                    o = t || e / 100;
                  if (
                    !this.equidistantCache ||
                    this.equidistantCache.step !== o ||
                    this.equidistantCache.precision !== a
                  ) {
                    this.equidistantCache = {
                      step: o,
                      precision: a,
                      points: [],
                    };
                    for (var u = 0, h = 0; h <= e; h += a) {
                      var v = this.getPointOnPath(h),
                        c = this.getPointOnPath(h + a);
                      !v ||
                        !c ||
                        ((u += this.getLineLength(v.x, v.y, c.x, c.y)) >= o &&
                          (this.equidistantCache.points.push({
                            x: v.x,
                            y: v.y,
                            distance: h,
                          }),
                          (u -= o)));
                    }
                  }
                },
              },
              {
                key: "getEquidistantPointOnPath",
                value: function (t, i, e) {
                  if (
                    (this.buildEquidistantCache(i, e),
                    t < 0 || t - this.getPathLength() > 5e-5)
                  )
                    return null;
                  var a = Math.round(
                    (t / this.getPathLength()) *
                      (this.equidistantCache.points.length - 1),
                  );
                  return this.equidistantCache.points[a] || null;
                },
              },
            ]),
            r
          );
        })(De),
        Wn =
          /^\s*data:(([^/,;]+\/[^/,;]+)(?:;([^,;=]+=[^,;=]+))?)?(?:;(base64))?,(.*)$/i,
        bn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            ((0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "image"),
              (e.loaded = !1));
            var a = e.getHrefAttribute().getString();
            if (!a) return (0, d.Z)(e);
            var o = a.endsWith(".svg") || /^\s*data:image\/svg\+xml/i.test(a);
            return (
              n.images.push((0, p.Z)(e)),
              o ? e.loadSvg(a) : e.loadImage(a),
              (e.isSvg = o),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "loadImage",
                value: function (t) {
                  var i = this;
                  return V(
                    M.mark(function e() {
                      return M.wrap(
                        function (u) {
                          for (;;)
                            switch ((u.prev = u.next)) {
                              case 0:
                                return (
                                  (u.prev = 0),
                                  (u.next = 3),
                                  i.document.createImage(t)
                                );
                              case 3:
                                ((i.image = u.sent), (u.next = 10));
                                break;
                              case 7:
                                ((u.prev = 7),
                                  (u.t0 = u.catch(0)),
                                  console.error(
                                    'Error while loading image "'.concat(
                                      t,
                                      '":',
                                    ),
                                    u.t0,
                                  ));
                              case 10:
                                i.loaded = !0;
                              case 11:
                              case "end":
                                return u.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 7]],
                      );
                    }),
                  )();
                },
              },
              {
                key: "loadSvg",
                value: function (t) {
                  var i = this;
                  return V(
                    M.mark(function e() {
                      var a, o, u;
                      return M.wrap(
                        function (c) {
                          for (;;)
                            switch ((c.prev = c.next)) {
                              case 0:
                                if (!(a = Wn.exec(t))) {
                                  c.next = 6;
                                  break;
                                }
                                ((o = a[5]),
                                  (i.image =
                                    "base64" === a[4]
                                      ? atob(o)
                                      : decodeURIComponent(o)),
                                  (c.next = 19));
                                break;
                              case 6:
                                return (
                                  (c.prev = 6),
                                  (c.next = 9),
                                  i.document.fetch(t)
                                );
                              case 9:
                                return ((u = c.sent), (c.next = 12), u.text());
                              case 12:
                                ((i.image = c.sent), (c.next = 19));
                                break;
                              case 16:
                                ((c.prev = 16),
                                  (c.t0 = c.catch(6)),
                                  console.error(
                                    'Error while loading image "'.concat(
                                      t,
                                      '":',
                                    ),
                                    c.t0,
                                  ));
                              case 19:
                                i.loaded = !0;
                              case 20:
                              case "end":
                                return c.stop();
                            }
                        },
                        e,
                        null,
                        [[6, 16]],
                      );
                    }),
                  )();
                },
              },
              {
                key: "renderChildren",
                value: function (t) {
                  var i = this.document,
                    e = this.image,
                    a = this.loaded,
                    o = this.getAttribute("x").getPixels("x"),
                    u = this.getAttribute("y").getPixels("y"),
                    h = this.getStyle("width").getPixels("x"),
                    v = this.getStyle("height").getPixels("y");
                  if (a && e && h && v) {
                    if ((t.save(), t.translate(o, u), this.isSvg)) {
                      var c = i.canvg.forkString(t, this.image, {
                        ignoreMouse: !0,
                        ignoreAnimation: !0,
                        ignoreDimensions: !0,
                        ignoreClear: !0,
                        offsetX: 0,
                        offsetY: 0,
                        scaleWidth: h,
                        scaleHeight: v,
                      });
                      ((c.document.documentElement.parent = this), c.render());
                    } else {
                      var g = this.image;
                      (i.setViewBox({
                        ctx: t,
                        aspectRatio: this.getAttribute(
                          "preserveAspectRatio",
                        ).getString(),
                        width: h,
                        desiredWidth: g.width,
                        height: v,
                        desiredHeight: g.height,
                      }),
                        this.loaded &&
                          (void 0 === g.complete || g.complete) &&
                          t.drawImage(g, 0, 0));
                    }
                    t.restore();
                  }
                },
              },
              {
                key: "getBoundingBox",
                value: function () {
                  var t = this.getAttribute("x").getPixels("x"),
                    i = this.getAttribute("y").getPixels("y"),
                    e = this.getStyle("width").getPixels("x"),
                    a = this.getStyle("height").getPixels("y");
                  return new ne(t, i, t + e, i + a);
                },
              },
            ]),
            r
          );
        })(Ee),
        Sn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "symbol"),
              n
            );
          }
          return ((0, P.Z)(r, [{ key: "render", value: function (t) {} }]), r);
        })(Ee),
        Pn = (function () {
          function f(l) {
            ((0, S.Z)(this, f),
              (this.document = l),
              (this.loaded = !1),
              l.fonts.push(this));
          }
          return (
            (0, P.Z)(f, [
              {
                key: "load",
                value: function (r, n) {
                  var t = this;
                  return V(
                    M.mark(function i() {
                      var e, o;
                      return M.wrap(
                        function (h) {
                          for (;;)
                            switch ((h.prev = h.next)) {
                              case 0:
                                return (
                                  (h.prev = 0),
                                  (e = t.document),
                                  (h.next = 4),
                                  e.canvg.parser.load(n)
                                );
                              case 4:
                                ((o = h.sent.getElementsByTagName("font")),
                                  Array.from(o).forEach(function (v) {
                                    var c = e.createElement(v);
                                    e.definitions[r] = c;
                                  }),
                                  (h.next = 12));
                                break;
                              case 9:
                                ((h.prev = 9),
                                  (h.t0 = h.catch(0)),
                                  console.error(
                                    'Error while loading font "'.concat(
                                      n,
                                      '":',
                                    ),
                                    h.t0,
                                  ));
                              case 12:
                                t.loaded = !0;
                              case 13:
                              case "end":
                                return h.stop();
                            }
                        },
                        i,
                        null,
                        [[0, 9]],
                      );
                    }),
                  )();
                },
              },
            ]),
            f
          );
        })(),
        Ir = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "style"),
              Kt(
                Array.from(t.childNodes)
                  .map(function (u) {
                    return u.textContent;
                  })
                  .join("")
                  .replace(
                    /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm,
                    "",
                  )
                  .replace(/@import.*;/g, ""),
              )
                .split("}")
                .forEach(function (u) {
                  var h = u.trim();
                  if (h) {
                    var v = h.split("{"),
                      c = v[0].split(","),
                      g = v[1].split(";");
                    c.forEach(function (A) {
                      var N = A.trim();
                      if (N) {
                        var w = n.styles[N] || {};
                        if (
                          (g.forEach(function (L) {
                            var k = L.indexOf(":"),
                              H = L.substr(0, k).trim(),
                              q = L.substr(k + 1, L.length - k).trim();
                            H && q && (w[H] = new rt(n, H, q));
                          }),
                          (n.styles[N] = w),
                          (n.stylesSpecificity[N] = xe(N)),
                          "@font-face" === N)
                        ) {
                          var I = w["font-family"]
                            .getString()
                            .replace(/"|'/g, "");
                          w.src
                            .getString()
                            .split(",")
                            .forEach(function (L) {
                              if (L.indexOf('format("svg")') > 0) {
                                var k = ft(L);
                                k && new Pn(n).load(I, k);
                              }
                            });
                        }
                      }
                    });
                  }
                }),
              e
            );
          }
          return r;
        })(Lt);
      Ir.parseExternalUrl = ft;
      var On = (function (f) {
        (0, b.Z)(r, f);
        var l = (0, T.Z)(r);
        function r() {
          var n;
          return (
            (0, S.Z)(this, r),
            ((n = l.apply(this, arguments)).type = "use"),
            n
          );
        }
        return (
          (0, P.Z)(r, [
            {
              key: "setContext",
              value: function (t) {
                (0, m.Z)((0, E.Z)(r.prototype), "setContext", this).call(
                  this,
                  t,
                );
                var i = this.getAttribute("x"),
                  e = this.getAttribute("y");
                (i.hasValue() && t.translate(i.getPixels("x"), 0),
                  e.hasValue() && t.translate(0, e.getPixels("y")));
              },
            },
            {
              key: "path",
              value: function (t) {
                var i = this.element;
                i && i.path(t);
              },
            },
            {
              key: "renderChildren",
              value: function (t) {
                var i = this.document,
                  e = this.element;
                if (e) {
                  var a = e;
                  if (
                    ("symbol" === e.type &&
                      (((a = new Fe(i, null)).attributes.viewBox = new rt(
                        i,
                        "viewBox",
                        e.getAttribute("viewBox").getString(),
                      )),
                      (a.attributes.preserveAspectRatio = new rt(
                        i,
                        "preserveAspectRatio",
                        e.getAttribute("preserveAspectRatio").getString(),
                      )),
                      (a.attributes.overflow = new rt(
                        i,
                        "overflow",
                        e.getAttribute("overflow").getString(),
                      )),
                      (a.children = e.children),
                      (e.styles.opacity = new rt(
                        i,
                        "opacity",
                        this.calculateOpacity(),
                      ))),
                    "svg" === a.type)
                  ) {
                    var o = this.getStyle("width", !1, !0),
                      u = this.getStyle("height", !1, !0);
                    (o.hasValue() &&
                      (a.attributes.width = new rt(i, "width", o.getString())),
                      u.hasValue() &&
                        (a.attributes.height = new rt(
                          i,
                          "height",
                          u.getString(),
                        )));
                  }
                  var h = a.parent;
                  ((a.parent = this), a.render(t), (a.parent = h));
                }
              },
            },
            {
              key: "getBoundingBox",
              value: function (t) {
                var i = this.element;
                return i ? i.getBoundingBox(t) : null;
              },
            },
            {
              key: "elementTransform",
              value: function () {
                return We.fromElement(this.document, this.element);
              },
            },
            {
              key: "element",
              get: function () {
                return (
                  this.cachedElement ||
                    (this.cachedElement =
                      this.getHrefAttribute().getDefinition()),
                  this.cachedElement
                );
              },
            },
          ]),
          r
        );
      })(Ee);
      function ir(f, l, r, n, t, i) {
        return f[r * n * 4 + 4 * l + i];
      }
      function sr(f, l, r, n, t, i, e) {
        f[r * n * 4 + 4 * l + i] = e;
      }
      function $t(f, l, r) {
        return f[l] * r;
      }
      function ce(f, l, r, n) {
        return l + Math.cos(f) * r + Math.sin(f) * n;
      }
      var kr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            ((0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "feColorMatrix"));
            var a = B(e.getAttribute("values").getString());
            switch (e.getAttribute("type").getString("matrix")) {
              case "saturate":
                var o = a[0];
                a = [
                  0.213 + 0.787 * o,
                  0.715 - 0.715 * o,
                  0.072 - 0.072 * o,
                  0,
                  0,
                  0.213 - 0.213 * o,
                  0.715 + 0.285 * o,
                  0.072 - 0.072 * o,
                  0,
                  0,
                  0.213 - 0.213 * o,
                  0.715 - 0.715 * o,
                  0.072 + 0.928 * o,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
                break;
              case "hueRotate":
                var u = (a[0] * Math.PI) / 180;
                a = [
                  ce(u, 0.213, 0.787, -0.213),
                  ce(u, 0.715, -0.715, -0.715),
                  ce(u, 0.072, -0.072, 0.928),
                  0,
                  0,
                  ce(u, 0.213, -0.213, 0.143),
                  ce(u, 0.715, 0.285, 0.14),
                  ce(u, 0.072, -0.072, -0.283),
                  0,
                  0,
                  ce(u, 0.213, -0.213, -0.787),
                  ce(u, 0.715, -0.715, 0.715),
                  ce(u, 0.072, 0.928, 0.072),
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                ];
                break;
              case "luminanceToAlpha":
                a = [
                  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154,
                  0.0721, 0, 0, 0, 0, 0, 0, 1,
                ];
            }
            return (
              (e.matrix = a),
              (e.includeOpacity = e.getAttribute("includeOpacity").hasValue()),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "apply",
                value: function (t, i, e, a, o) {
                  for (
                    var u = this.includeOpacity,
                      h = this.matrix,
                      v = t.getImageData(0, 0, a, o),
                      c = 0;
                    c < o;
                    c++
                  )
                    for (var g = 0; g < a; g++) {
                      var A = ir(v.data, g, c, a, 0, 0),
                        N = ir(v.data, g, c, a, 0, 1),
                        w = ir(v.data, g, c, a, 0, 2),
                        I = ir(v.data, g, c, a, 0, 3),
                        Y =
                          $t(h, 0, A) +
                          $t(h, 1, N) +
                          $t(h, 2, w) +
                          $t(h, 3, I) +
                          $t(h, 4, 1),
                        L =
                          $t(h, 5, A) +
                          $t(h, 6, N) +
                          $t(h, 7, w) +
                          $t(h, 8, I) +
                          $t(h, 9, 1),
                        k =
                          $t(h, 10, A) +
                          $t(h, 11, N) +
                          $t(h, 12, w) +
                          $t(h, 13, I) +
                          $t(h, 14, 1),
                        H =
                          $t(h, 15, A) +
                          $t(h, 16, N) +
                          $t(h, 17, w) +
                          $t(h, 18, I) +
                          $t(h, 19, 1);
                      (u && ((Y = 0), (L = 0), (k = 0), (H *= I / 255)),
                        sr(v.data, g, c, a, 0, 0, Y),
                        sr(v.data, g, c, a, 0, 1, L),
                        sr(v.data, g, c, a, 0, 2, k),
                        sr(v.data, g, c, a, 0, 3, H));
                    }
                  (t.clearRect(0, 0, a, o), t.putImageData(v, 0, 0));
                },
              },
            ]),
            r
          );
        })(Lt),
        Zr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "mask"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "apply",
                value: function (t, i) {
                  var e = this.document,
                    a = this.getAttribute("x").getPixels("x"),
                    o = this.getAttribute("y").getPixels("y"),
                    u = this.getStyle("width").getPixels("x"),
                    h = this.getStyle("height").getPixels("y");
                  if (!u && !h) {
                    var v = new ne();
                    (this.children.forEach(function (I) {
                      v.addBoundingBox(I.getBoundingBox(t));
                    }),
                      (a = Math.floor(v.x1)),
                      (o = Math.floor(v.y1)),
                      (u = Math.floor(v.width)),
                      (h = Math.floor(v.height)));
                  }
                  var c = this.removeStyles(i, r.ignoreStyles),
                    g = e.createCanvas(a + u, o + h),
                    A = g.getContext("2d");
                  (e.screen.setDefaults(A),
                    this.renderChildren(A),
                    new kr(e, {
                      nodeType: 1,
                      childNodes: [],
                      attributes: [
                        { nodeName: "type", value: "luminanceToAlpha" },
                        { nodeName: "includeOpacity", value: "true" },
                      ],
                    }).apply(A, 0, 0, a + u, o + h));
                  var N = e.createCanvas(a + u, o + h),
                    w = N.getContext("2d");
                  (e.screen.setDefaults(w),
                    i.render(w),
                    (w.globalCompositeOperation = "destination-in"),
                    (w.fillStyle = A.createPattern(g, "no-repeat")),
                    w.fillRect(0, 0, a + u, o + h),
                    (t.fillStyle = w.createPattern(N, "no-repeat")),
                    t.fillRect(0, 0, a + u, o + h),
                    this.restoreStyles(i, c));
                },
              },
              { key: "render", value: function (t) {} },
            ]),
            r
          );
        })(Lt);
      Zr.ignoreStyles = ["mask", "transform", "clip-path"];
      var Cn = function () {},
        An = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "clipPath"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "apply",
                value: function (t) {
                  var i = this.document,
                    e = Reflect.getPrototypeOf(t),
                    a = t.beginPath,
                    o = t.closePath;
                  (e && ((e.beginPath = Cn), (e.closePath = Cn)),
                    Reflect.apply(a, t, []),
                    this.children.forEach(function (u) {
                      if (void 0 !== u.path) {
                        var h =
                          void 0 !== u.elementTransform
                            ? u.elementTransform()
                            : null;
                        (h || (h = We.fromElement(i, u)),
                          h && h.apply(t),
                          u.path(t),
                          e && (e.closePath = o),
                          h && h.unapply(t));
                      }
                    }),
                    Reflect.apply(o, t, []),
                    t.clip(),
                    e && ((e.beginPath = a), (e.closePath = o)));
                },
              },
              { key: "render", value: function (t) {} },
            ]),
            r
          );
        })(Lt),
        Vr = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "filter"),
              n
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "apply",
                value: function (t, i) {
                  var e = this.document,
                    a = this.children,
                    o = i.getBoundingBox(t);
                  if (o) {
                    var u = 0,
                      h = 0;
                    a.forEach(function (k) {
                      var H = k.extraFilterDistance || 0;
                      ((u = Math.max(u, H)), (h = Math.max(h, H)));
                    });
                    var v = Math.floor(o.width),
                      c = Math.floor(o.height),
                      g = v + 2 * u,
                      A = c + 2 * h;
                    if (!(g < 1 || A < 1)) {
                      var N = Math.floor(o.x),
                        w = Math.floor(o.y),
                        I = this.removeStyles(i, r.ignoreStyles),
                        Y = e.createCanvas(g, A),
                        L = Y.getContext("2d");
                      (e.screen.setDefaults(L),
                        L.translate(-N + u, -w + h),
                        i.render(L),
                        a.forEach(function (k) {
                          "function" == typeof k.apply &&
                            k.apply(L, 0, 0, g, A);
                        }),
                        t.drawImage(Y, 0, 0, g, A, N - u, w - h, g, A),
                        this.restoreStyles(i, I));
                    }
                  }
                },
              },
              { key: "render", value: function (t) {} },
            ]),
            r
          );
        })(Lt);
      Vr.ignoreStyles = ["filter", "transform", "clip-path"];
      var Rn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "feDropShadow"),
              e.addStylesFromStyleDefinition(),
              e
            );
          }
          return (
            (0, P.Z)(r, [{ key: "apply", value: function (t, i, e, a, o) {} }]),
            r
          );
        })(Lt),
        Mn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "feMorphology"),
              n
            );
          }
          return (
            (0, P.Z)(r, [{ key: "apply", value: function (t, i, e, a, o) {} }]),
            r
          );
        })(Lt),
        Nn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "feComposite"),
              n
            );
          }
          return (
            (0, P.Z)(r, [{ key: "apply", value: function (t, i, e, a, o) {} }]),
            r
          );
        })(Lt),
        wn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r(n, t, i) {
            var e;
            return (
              (0, S.Z)(this, r),
              ((e = l.call(this, n, t, i)).type = "feGaussianBlur"),
              (e.blurRadius = Math.floor(
                e.getAttribute("stdDeviation").getNumber(),
              )),
              (e.extraFilterDistance = e.blurRadius),
              e
            );
          }
          return (
            (0, P.Z)(r, [
              {
                key: "apply",
                value: function (t, i, e, a, o) {
                  var u = this.document,
                    h = this.blurRadius,
                    v = u.window ? u.window.document.body : null,
                    c = t.canvas;
                  ((c.id = u.getUniqueId()),
                    v && ((c.style.display = "none"), v.appendChild(c)),
                    ye(c, i, e, a, o, h),
                    v && v.removeChild(c));
                },
              },
            ]),
            r
          );
        })(Lt),
        In = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "title"),
              n
            );
          }
          return r;
        })(Lt),
        kn = (function (f) {
          (0, b.Z)(r, f);
          var l = (0, T.Z)(r);
          function r() {
            var n;
            return (
              (0, S.Z)(this, r),
              ((n = l.apply(this, arguments)).type = "desc"),
              n
            );
          }
          return r;
        })(Lt),
        Qn = {
          svg: Fe,
          rect: Mr,
          circle: rn,
          ellipse: nn,
          line: an,
          polyline: Nr,
          polygon: sn,
          path: jt,
          pattern: on,
          marker: un,
          defs: ln,
          linearGradient: fn,
          radialGradient: hn,
          stop: vn,
          animate: nr,
          animateColor: cn,
          animateTransform: gn,
          font: dn,
          "font-face": yn,
          "missing-glyph": pn,
          glyph: Ar,
          text: De,
          tspan: Rr,
          tref: mn,
          a: xn,
          textPath: Tn,
          image: bn,
          g: rr,
          symbol: Sn,
          style: Ir,
          use: On,
          mask: Zr,
          clipPath: An,
          filter: Vr,
          feDropShadow: Rn,
          feMorphology: Mn,
          feComposite: Nn,
          feColorMatrix: kr,
          feGaussianBlur: wn,
          title: In,
          desc: kn,
        };
      function Zn(f, l) {
        var r = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(f);
          (l &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(f, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function Lr() {
        return (Lr = V(
          M.mark(function f(l) {
            var r,
              n,
              t = arguments;
            return M.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = t.length > 1 && void 0 !== t[1] && t[1]),
                      (n = document.createElement("img")),
                      r && (n.crossOrigin = "Anonymous"),
                      e.abrupt(
                        "return",
                        new Promise(function (a, o) {
                          ((n.onload = function () {
                            a(n);
                          }),
                            (n.onerror = function (u, h, v, c, g) {
                              o(g);
                            }),
                            (n.src = l));
                        }),
                      )
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, f);
          }),
        )).apply(this, arguments);
      }
      var Qe = (function () {
        function f(l) {
          (0, S.Z)(this, f);
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = r.rootEmSize,
            t = void 0 === n ? 12 : n,
            i = r.emSize,
            e = void 0 === i ? 12 : i,
            a = r.createCanvas,
            o = void 0 === a ? f.createCanvas : a,
            u = r.createImage,
            h = void 0 === u ? f.createImage : u,
            v = r.anonymousCrossOrigin;
          ((this.canvg = l),
            (this.definitions = {}),
            (this.styles = {}),
            (this.stylesSpecificity = {}),
            (this.images = []),
            (this.fonts = []),
            (this.emSizeStack = []),
            (this.uniqueId = 0),
            (this.screen = l.screen),
            (this.rootEmSize = t),
            (this.emSize = e),
            (this.createCanvas = o),
            (this.createImage = this.bindCreateImage(h, v)),
            this.screen.wait(this.isImagesLoaded.bind(this)),
            this.screen.wait(this.isFontsLoaded.bind(this)));
        }
        return (
          (0, P.Z)(f, [
            {
              key: "bindCreateImage",
              value: function (r, n) {
                return "boolean" == typeof n
                  ? function (t, i) {
                      return r(t, "boolean" == typeof i ? i : n);
                    }
                  : r;
              },
            },
            {
              key: "window",
              get: function () {
                return this.screen.window;
              },
            },
            {
              key: "fetch",
              get: function () {
                return this.screen.fetch;
              },
            },
            {
              key: "ctx",
              get: function () {
                return this.screen.ctx;
              },
            },
            {
              key: "emSize",
              get: function () {
                var r = this.emSizeStack;
                return r[r.length - 1];
              },
              set: function (r) {
                this.emSizeStack.push(r);
              },
            },
            {
              key: "popEmSize",
              value: function () {
                this.emSizeStack.pop();
              },
            },
            {
              key: "getUniqueId",
              value: function () {
                return "canvg".concat(++this.uniqueId);
              },
            },
            {
              key: "isImagesLoaded",
              value: function () {
                return this.images.every(function (r) {
                  return r.loaded;
                });
              },
            },
            {
              key: "isFontsLoaded",
              value: function () {
                return this.fonts.every(function (r) {
                  return r.loaded;
                });
              },
            },
            {
              key: "createDocumentElement",
              value: function (r) {
                var n = this.createElement(r.documentElement);
                return (
                  (n.root = !0),
                  n.addStylesFromStyleDefinition(),
                  (this.documentElement = n),
                  n
                );
              },
            },
            {
              key: "createElement",
              value: function (r) {
                var n = r.nodeName.replace(/^[^:]+:/, ""),
                  t = f.elementTypes[n];
                return void 0 !== t ? new t(this, r) : new en(this, r);
              },
            },
            {
              key: "createTextNode",
              value: function (r) {
                return new Xn(this, r);
              },
            },
            {
              key: "setViewBox",
              value: function (r) {
                this.screen.setViewBox(
                  (function (f) {
                    for (var l = 1; l < arguments.length; l++) {
                      var r = null != arguments[l] ? arguments[l] : {};
                      l % 2
                        ? Zn(Object(r), !0).forEach(function (n) {
                            (0, Q.Z)(f, n, r[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              f,
                              Object.getOwnPropertyDescriptors(r),
                            )
                          : Zn(Object(r)).forEach(function (n) {
                              Object.defineProperty(
                                f,
                                n,
                                Object.getOwnPropertyDescriptor(r, n),
                              );
                            });
                    }
                    return f;
                  })({ document: this }, r),
                );
              },
            },
          ]),
          f
        );
      })();
      function Vn(f, l) {
        var r = Object.keys(f);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(f);
          (l &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(f, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function Ne(f) {
        for (var l = 1; l < arguments.length; l++) {
          var r = null != arguments[l] ? arguments[l] : {};
          l % 2
            ? Vn(Object(r), !0).forEach(function (n) {
                (0, Q.Z)(f, n, r[n]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(r))
              : Vn(Object(r)).forEach(function (n) {
                  Object.defineProperty(
                    f,
                    n,
                    Object.getOwnPropertyDescriptor(r, n),
                  );
                });
        }
        return f;
      }
      ((Qe.createCanvas = function (f, l) {
        var r = document.createElement("canvas");
        return ((r.width = f), (r.height = l), r);
      }),
        (Qe.createImage = function (f) {
          return Lr.apply(this, arguments);
        }),
        (Qe.elementTypes = Qn));
      var Ln = (function () {
        function f(l, r) {
          (0, S.Z)(this, f);
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          ((this.parser = new er(n)),
            (this.screen = new Xe(l, n)),
            (this.options = n));
          var t = new Qe(this, n),
            i = t.createDocumentElement(r);
          ((this.document = t), (this.documentElement = i));
        }
        return (
          (0, P.Z)(
            f,
            [
              {
                key: "fork",
                value: function (r, n) {
                  var t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return f.from(r, n, Ne(Ne({}, this.options), t));
                },
              },
              {
                key: "forkString",
                value: function (r, n) {
                  var t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return f.fromString(r, n, Ne(Ne({}, this.options), t));
                },
              },
              {
                key: "ready",
                value: function () {
                  return this.screen.ready();
                },
              },
              {
                key: "isReady",
                value: function () {
                  return this.screen.isReady();
                },
              },
              {
                key: "render",
                value: function () {
                  var r = arguments,
                    n = this;
                  return V(
                    M.mark(function t() {
                      return M.wrap(function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return (
                                n.start(
                                  Ne(
                                    {
                                      enableRedraw: !0,
                                      ignoreAnimation: !0,
                                      ignoreMouse: !0,
                                    },
                                    r.length > 0 && void 0 !== r[0] ? r[0] : {},
                                  ),
                                ),
                                (a.next = 4),
                                n.ready()
                              );
                            case 4:
                              n.stop();
                            case 5:
                            case "end":
                              return a.stop();
                          }
                      }, t);
                    }),
                  )();
                },
              },
              {
                key: "start",
                value: function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = this.documentElement,
                    t = this.screen,
                    i = this.options;
                  t.start(n, Ne(Ne({ enableRedraw: !0 }, i), r));
                },
              },
              {
                key: "stop",
                value: function () {
                  this.screen.stop();
                },
              },
              {
                key: "resize",
                value: function (r) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : r,
                    t =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                  this.documentElement.resize(r, n, t);
                },
              },
            ],
            [
              {
                key: "from",
                value: function (r, n) {
                  var t = arguments;
                  return V(
                    M.mark(function i() {
                      var e, a;
                      return M.wrap(function (h) {
                        for (;;)
                          switch ((h.prev = h.next)) {
                            case 0:
                              return (
                                (a = new er(
                                  (e =
                                    t.length > 2 && void 0 !== t[2]
                                      ? t[2]
                                      : {}),
                                )),
                                (h.next = 4),
                                a.parse(n)
                              );
                            case 4:
                              return h.abrupt("return", new f(r, h.sent, e));
                            case 6:
                            case "end":
                              return h.stop();
                          }
                      }, i);
                    }),
                  )();
                },
              },
              {
                key: "fromString",
                value: function (r, n) {
                  var t =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    i = new er(t),
                    e = i.parseFromString(n);
                  return new f(r, e, t);
                },
              },
            ],
          ),
          f
        );
      })();
    },
  },
]);
