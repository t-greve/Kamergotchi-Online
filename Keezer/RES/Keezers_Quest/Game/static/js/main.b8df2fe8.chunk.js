(this.webpackJsonpkeezer = this.webpackJsonpkeezer || []).push([
    [0],
    [
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(30);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                colors: !0,
                fonts: !0,
                shadows: !0,
                animation: !0,
                layout: !0,
                presets: !0,
                createUseStyles: !0,
            };
            Object.defineProperty(a, "createUseStyles", {
                enumerable: !0,
                get: function () {
                    return p.createUseStyles;
                },
            }),
                (a.presets = a.layout = a.animation = a.shadows = a.fonts = a.colors = void 0);
            var o = t(51);
            Object.keys(o).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === o[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return o[e];
                            },
                        }));
            });
            var l = n(t(160));
            a.colors = l;
            var i = n(t(161));
            a.fonts = i;
            var s = n(t(162));
            a.shadows = s;
            var u = n(t(163));
            a.animation = u;
            var c = n(t(76));
            a.layout = c;
            var d = n(t(164));
            a.presets = d;
            var p = t(54);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.component = function (e, a) {
                    return (
                        Object.assign(a, {
                            displayName: e,
                        }),
                        a
                    );
                }),
                (a.forwardRef = function (e, a) {
                    var t = o.default.forwardRef(a);
                    return (
                        Object.assign(t, {
                            displayName: e,
                        }),
                        t
                    );
                }),
                (a.observer = function (e, a) {
                    return (
                        Object.assign(a, {
                            displayName: e,
                        }),
                        (0, l.observer)(a)
                    );
                }),
                (a.memo = function (e, a, t) {
                    return (
                        Object.assign(a, {
                            displayName: e,
                        }),
                        o.default.memo(a, t)
                    );
                }),
                (a.createSuperContainer = function () {
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    return function (e) {
                        var t,
                            n = e.children,
                            l = (0, r.default)([].concat(a).reverse());
                        try {
                            for (l.s(); !(t = l.n()).done; ) {
                                n = (0, t.value)({
                                    children: n,
                                });
                            }
                        } catch (i) {
                            l.e(i);
                        } finally {
                            l.f();
                        }
                        return o.default.createElement(o.default.Fragment, {}, n);
                    };
                });
            var r = n(t(21)),
                o = n(t(0)),
                l = t(219);
        },
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                Audio: !0,
                Bubble: !0,
                Label: !0,
                ProgressBar: !0,
                PushButton: !0,
                SVG: !0,
                Slider: !0,
                Tappable: !0,
            };
            Object.defineProperty(a, "Audio", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
                Object.defineProperty(a, "Bubble", {
                    enumerable: !0,
                    get: function () {
                        return l.default;
                    },
                }),
                Object.defineProperty(a, "Label", {
                    enumerable: !0,
                    get: function () {
                        return i.default;
                    },
                }),
                Object.defineProperty(a, "ProgressBar", {
                    enumerable: !0,
                    get: function () {
                        return s.default;
                    },
                }),
                Object.defineProperty(a, "PushButton", {
                    enumerable: !0,
                    get: function () {
                        return u.default;
                    },
                }),
                Object.defineProperty(a, "SVG", {
                    enumerable: !0,
                    get: function () {
                        return c.default;
                    },
                }),
                Object.defineProperty(a, "Slider", {
                    enumerable: !0,
                    get: function () {
                        return d.default;
                    },
                }),
                Object.defineProperty(a, "Tappable", {
                    enumerable: !0,
                    get: function () {
                        return p.default;
                    },
                });
            var o = n(t(171)),
                l = n(t(176)),
                i = n(t(78)),
                s = n(t(179)),
                u = n(t(180)),
                c = n(t(181)),
                d = n(t(79)),
                p = n(t(188)),
                h = t(189);
            Object.keys(h).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === h[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return h[e];
                            },
                        }));
            });
        },
        ,
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(30);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                appStore: !0,
                assetsStore: !0,
                audioStore: !0,
                gameStore: !0,
                keezerStore: !0,
            };
            Object.defineProperty(a, "appStore", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
                Object.defineProperty(a, "assetsStore", {
                    enumerable: !0,
                    get: function () {
                        return l.default;
                    },
                }),
                Object.defineProperty(a, "audioStore", {
                    enumerable: !0,
                    get: function () {
                        return i.default;
                    },
                }),
                Object.defineProperty(a, "gameStore", {
                    enumerable: !0,
                    get: function () {
                        return s.default;
                    },
                }),
                Object.defineProperty(a, "keezerStore", {
                    enumerable: !0,
                    get: function () {
                        return u.default;
                    },
                });
            var o = n(t(103));
            Object.keys(o).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === o[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return o[e];
                            },
                        }));
            });
            var l = n(t(108));
            Object.keys(l).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === l[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return l[e];
                            },
                        }));
            });
            var i = n(t(138));
            Object.keys(i).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === i[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return i[e];
                            },
                        }));
            });
            var s = n(t(139));
            Object.keys(s).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === s[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return s[e];
                            },
                        }));
            });
            var u = n(t(146));
            Object.keys(u).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === u[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return u[e];
                            },
                        }));
            });
            var c = t(36);
            Object.keys(c).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === c[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return c[e];
                            },
                        }));
            });
        },
        ,
        ,
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.useSceneLayout = function () {
                    var e = o.default.useState({
                            width: window.innerWidth,
                            height: window.innerHeight,
                        }),
                        a = (0, r.default)(e, 2),
                        t = a[0],
                        n = a[1];
                    o.default.useEffect(function () {
                        var e = (0, l.throttle)(function () {
                            n({
                                width: window.innerWidth,
                                height: window.innerHeight,
                            });
                        });
                        return (
                            window.addEventListener("resize", e),
                            function () {
                                window.removeEventListener("resize", e);
                            }
                        );
                    });
                    var s = window.innerWidth / window.innerHeight,
                        u = s < 0.7,
                        c = Math.min(t.width / i.width, t.height / i.height),
                        d = i.width * c,
                        p = i.height * c,
                        h = (window.innerHeight - p) / 2,
                        g = (window.innerWidth - d) / 2;
                    return {
                        screenAspectRatio: s,
                        shouldRotate: u,
                        top: h,
                        left: g,
                        scale: c,
                        clientSize: t,
                    };
                }),
                (a.sceneSize = void 0);
            var r = n(t(12)),
                o = n(t(0)),
                l = t(9),
                i = {
                    width: 1920,
                    height: 1080,
                };
            a.sceneSize = i;
        },
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(30);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {};
            Object.defineProperty(a, "default", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            });
            var o = n(t(172));
            Object.keys(o).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === o[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return o[e];
                            },
                        }));
            });
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var n = t(182);
            Object.keys(n).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === n[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return n[e];
                            },
                        }));
            });
            var r = t(80);
            Object.keys(r).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === r[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return r[e];
                            },
                        }));
            });
            var o = t(183);
            Object.keys(o).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === o[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return o[e];
                            },
                        }));
            });
            var l = t(184);
            Object.keys(l).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === l[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return l[e];
                            },
                        }));
            });
            var i = t(185);
            Object.keys(i).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === i[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return i[e];
                            },
                        }));
            });
            var s = t(186);
            Object.keys(s).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === s[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return s[e];
                            },
                        }));
            });
            var u = t(187);
            Object.keys(u).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === u[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return u[e];
                            },
                        }));
            });
        },
        ,
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var n = t(113);
            Object.keys(n).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === n[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return n[e];
                            },
                        }));
            });
            var r = t(114);
            Object.keys(r).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === r[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return r[e];
                            },
                        }));
            });
            var o = t(115);
            Object.keys(o).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === o[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return o[e];
                            },
                        }));
            });
            var l = t(116);
            Object.keys(l).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === l[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return l[e];
                            },
                        }));
            });
            var i = t(117);
            Object.keys(i).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === i[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return i[e];
                            },
                        }));
            });
            var s = t(118);
            Object.keys(s).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === s[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return s[e];
                            },
                        }));
            });
            var u = t(119);
            Object.keys(u).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === u[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return u[e];
                            },
                        }));
            });
            var c = t(121);
            Object.keys(c).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === c[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return c[e];
                            },
                        }));
            });
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.buildActionSequences = function (e) {
                    return e;
                });
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var n = t(105);
            Object.keys(n).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === n[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return n[e];
                            },
                        }));
            });
            var r = t(106);
            Object.keys(r).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === r[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return r[e];
                            },
                        }));
            });
            var o = t(107);
            Object.keys(o).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === o[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return o[e];
                            },
                        }));
            });
        },
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                ImagePreloader: !0,
                svgs: !0,
                layers: !0,
                logo: !0,
                scenes: !0,
                characters: !0,
                objects: !0,
            };
            Object.defineProperty(a, "ImagePreloader", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
                Object.defineProperty(a, "svgs", {
                    enumerable: !0,
                    get: function () {
                        return l.default;
                    },
                }),
                Object.defineProperty(a, "layers", {
                    enumerable: !0,
                    get: function () {
                        return u.default;
                    },
                }),
                Object.defineProperty(a, "logo", {
                    enumerable: !0,
                    get: function () {
                        return c.default;
                    },
                }),
                Object.defineProperty(a, "scenes", {
                    enumerable: !0,
                    get: function () {
                        return d.default;
                    },
                }),
                Object.defineProperty(a, "characters", {
                    enumerable: !0,
                    get: function () {
                        return p.default;
                    },
                }),
                Object.defineProperty(a, "objects", {
                    enumerable: !0,
                    get: function () {
                        return h.default;
                    },
                });
            var o = n(t(109)),
                l = n(t(49)),
                i = t(70);
            Object.keys(i).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === i[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return i[e];
                            },
                        }));
            });
            var s = t(131);
            Object.keys(s).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === s[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return s[e];
                            },
                        }));
            });
            var u = n(t(132)),
                c = n(t(133)),
                d = n(t(134)),
                p = n(t(135)),
                h = n(t(136));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.usePaddingStyles = function (e) {
                    var a,
                        t = i.default.useContext(c.JssContext).registry;
                    if (null == e) return {};
                    var n = p("padding", e),
                        r =
                            null !== (a = d.get(n)) && void 0 !== a
                                ? a
                                : (function (e, a) {
                                      return "number" === typeof a
                                          ? u.default.createStyleSheet(
                                                {
                                                    padding: {
                                                        padding: a,
                                                    },
                                                },
                                                {
                                                    generateId: function () {
                                                        return e;
                                                    },
                                                }
                                            )
                                          : u.default.createStyleSheet(
                                                {
                                                    padding: (0, l.default)(
                                                        {},
                                                        s.layout.responsive(function (e) {
                                                            var t;
                                                            return {
                                                                padding:
                                                                    null !== (t = a[e]) && void 0 !== t ? t : a.tablet,
                                                            };
                                                        })
                                                    ),
                                                },
                                                {
                                                    generateId: function () {
                                                        return e;
                                                    },
                                                }
                                            );
                                  })(n, e);
                    return r.attach(), null === t || void 0 === t || t.add(r), d.set(n, r), r.classes;
                }),
                (a.useGapStyles = function (e, a, t) {
                    var n,
                        r = i.default.useContext(c.JssContext).registry;
                    if (null == a) return {};
                    var h = p(e, a, t ? "w" : ""),
                        g =
                            null !== (n = d.get(h)) && void 0 !== n
                                ? n
                                : (function (e, a, t, n) {
                                      var r = "row" === a ? "marginLeft" : "marginTop";
                                      return "number" === typeof t
                                          ? u.default.createStyleSheet(
                                                {
                                                    gap: n
                                                        ? {
                                                              marginRight: -t,
                                                              marginBottom: -t,
                                                              "& > *": {
                                                                  marginRight: t,
                                                                  marginBottom: t,
                                                              },
                                                          }
                                                        : {
                                                              "& > :not(:first-child)": (0, o.default)({}, r, t),
                                                          },
                                                },
                                                {
                                                    generateId: function () {
                                                        return e;
                                                    },
                                                }
                                            )
                                          : u.default.createStyleSheet(
                                                {
                                                    gap: n
                                                        ? (0, l.default)(
                                                              (0, l.default)(
                                                                  {},
                                                                  s.layout.responsive(function (e) {
                                                                      var a, n;
                                                                      return {
                                                                          marginRight: -(null !== (a = t[e]) &&
                                                                          void 0 !== a
                                                                              ? a
                                                                              : 0),
                                                                          marginBottom: -(null !== (n = t[e]) &&
                                                                          void 0 !== n
                                                                              ? n
                                                                              : 0),
                                                                      };
                                                                  })
                                                              ),
                                                              {},
                                                              {
                                                                  "& > *": (0, l.default)(
                                                                      {},
                                                                      s.layout.responsive(function (e) {
                                                                          return {
                                                                              marginRight: t[e],
                                                                              marginBottom: t[e],
                                                                          };
                                                                      })
                                                                  ),
                                                              }
                                                          )
                                                        : {
                                                              "& > :not(:first-child)": (0, l.default)(
                                                                  {},
                                                                  s.layout.responsive(function (e) {
                                                                      var a;
                                                                      return (0, o.default)(
                                                                          {},
                                                                          r,
                                                                          null !== (a = t[e]) && void 0 !== a
                                                                              ? a
                                                                              : t.tablet
                                                                      );
                                                                  })
                                                              ),
                                                          },
                                                },
                                                {
                                                    generateId: function () {
                                                        return e;
                                                    },
                                                }
                                            );
                                  })(h, e, a, t);
                    return g.attach(), null === r || void 0 === r || r.add(g), d.set(h, g), g.classes;
                }),
                (a.flexStyle = function (e) {
                    if (!e) return {};
                    return "shrink" === e
                        ? {
                              flex: "0 1 auto",
                          }
                        : "grow" === e
                          ? {
                                flex: "1 0 auto",
                            }
                          : "both" === e
                            ? {
                                  flex: "1 1 auto",
                              }
                            : !0 === e
                              ? {
                                    flex: "1 0 0px",
                                }
                              : {
                                    flex: "".concat(e, " 0 0px"),
                                };
                });
            var r = n(t(12)),
                o = n(t(11)),
                l = n(t(3)),
                i = n(t(0)),
                s = t(6),
                u = n(t(51)),
                c = t(54),
                d = new Map();

            function p(e, a, t) {
                return "number" === typeof a
                    ? ""
                          .concat(e, ":")
                          .concat(a)
                          .concat(null !== t && void 0 !== t ? t : "")
                    : ""
                          .concat(e, ":")
                          .concat(
                              Object.entries(a)
                                  .map(function (e) {
                                      var a = (0, r.default)(e, 2),
                                          t = a[0],
                                          n = a[1];
                                      return "".concat(t, "-").concat(n);
                                  })
                                  .join(":")
                          )
                          .concat(null !== t && void 0 !== t ? t : "");
            }
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                ScaledScene: !0,
                SceneView: !0,
                SceneTimeline: !0,
            };
            Object.defineProperty(a, "ScaledScene", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
                Object.defineProperty(a, "SceneView", {
                    enumerable: !0,
                    get: function () {
                        return l.default;
                    },
                }),
                Object.defineProperty(a, "SceneTimeline", {
                    enumerable: !0,
                    get: function () {
                        return i.default;
                    },
                });
            var o = n(t(81)),
                l = n(t(195)),
                i = n(t(84)),
                s = t(19);
            Object.keys(s).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === s[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return s[e];
                            },
                        }));
            });
        },
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.buildWellKnown = function (e) {
                    return {
                        prepare: function () {
                            var a;
                            return [].concat(
                                (0, l.default)(u(e, null !== (a = e.prepareSequence) && void 0 !== a ? a : [], null)),
                                [
                                    function (e) {
                                        return e.setPosition("keezer", "keezerstart");
                                    },
                                ]
                            );
                        },
                        enter: function () {
                            var a = e.getEnterSequence();
                            return [
                                function (e) {
                                    return e.setPosition("keezer", "keezer", d, {
                                        keezerbenen: "lopend",
                                        hondje: "lopend",
                                    });
                                },
                            ].concat((0, l.default)(u(e, a)));
                        },
                        exit: function (a) {
                            var t = null == a ? null : e.getExitSequence(a);
                            return null != t
                                ? u(e, t)
                                : (0, l.default)(
                                      u(e, [
                                          {
                                              move: ["keezer", "offscreen"],
                                              fast: !1,
                                          },
                                      ])
                                  );
                        },
                    };
                }),
                (a.customSequenceToSequence = u),
                (a.customActionToActions = c),
                (a.RUNNING_SPEED = a.WALKING_SPEED = void 0);
            var r = n(t(12)),
                o = n(t(21)),
                l = n(t(13)),
                i = t(25),
                s = t(14);

            function u(e, a) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d,
                    n = {
                        sequence: 0,
                    };
                return (0, i.flatMap)(a, function (a) {
                    return c(e, a, n, t);
                });
            }

            function c(e, a, t) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d,
                    l = [];
                if ("line" in a)
                    l.push(
                        function (e) {
                            return e.appendLine(a.line, t.sequence++);
                        },
                        function (e) {
                            return e.wait();
                        }
                    );
                else if ("status" in a)
                    l.push(function (e) {
                        return e.setStatus(a.status[0], a.status[1]);
                    });
                else if ("inventory" in a) {
                    var i,
                        u = a.inventory
                            .split(",")
                            .map(function (e) {
                                return e.trim();
                            })
                            .filter(Boolean),
                        c = (0, o.default)(u);
                    try {
                        var h = function () {
                            var e = i.value;
                            e.startsWith("-")
                                ? l.push(function () {
                                      var a;
                                      return null === (a = s.gameStore.game) || void 0 === a
                                          ? void 0
                                          : a.removeFromInventory(e.slice(1));
                                  })
                                : l.push(function () {
                                      var a;
                                      return null === (a = s.gameStore.game) || void 0 === a
                                          ? void 0
                                          : a.addToInventory(e);
                                  });
                        };
                        for (c.s(); !(i = c.n()).done; ) h();
                    } catch (j) {
                        c.e(j);
                    } finally {
                        c.f();
                    }
                    l.push(function () {
                        return s.appStore.showInventory();
                    }),
                        l.push(function (e) {
                            return e.wait();
                        }),
                        l.push(function () {
                            return s.appStore.hideInventory();
                        });
                } else if ("flip" in a)
                    l.push(function (e) {
                        return e.flip(a.flip);
                    });
                else if ("give" in a)
                    a.give.startsWith("-")
                        ? l.push(function (e) {
                              return e.give(null);
                          })
                        : l.push(function (e) {
                              return e.give(a.give);
                          }),
                        l.push(function (e) {
                            return e.after(1e3, function (e) {
                                return e.give(null);
                            });
                        });
                else if ("appear" in a)
                    l.push(function (e) {
                        return e.appear(a.appear);
                    });
                else if ("disappear" in a)
                    l.push(function (e) {
                        return e.disappear(a.disappear);
                    });
                else if ("hold" in a)
                    a.hold.startsWith("-")
                        ? l.push(function (e) {
                              return e.hold(null);
                          })
                        : l.push(function (e) {
                              return e.hold(a.hold);
                          });
                else if ("wait" in a)
                    l.push(function (e) {
                        return e.wait();
                    });
                else if ("move" in a) {
                    var g,
                        f = (0, r.default)(a.move, 2),
                        m = f[0],
                        y = f[1];
                    if ("offscreen" === y)
                        g = {
                            offscreen: "keezer" === m ? "right" : "left",
                        };
                    else if ("offscreen-links" === y)
                        g = {
                            offscreen: "left",
                        };
                    else if ("offscreen-rechts" === y)
                        g = {
                            offscreen: "right",
                        };
                    else if ("boerderij" === y)
                        g = {
                            opponent: 1,
                        };
                    else {
                        var b = e.characters.findIndex(function (e) {
                            return (null === e || void 0 === e ? void 0 : e.name) === y;
                        });
                        g =
                            b < 0
                                ? "center"
                                : {
                                      opponent: b,
                                      name: y,
                                  };
                    }
                    var v = {};
                    "keezer" === m && ((v.keezerbenen = "lopend"), (v.hondje = "lopend"));
                    var k = !y.includes("offscreen") || a.fast,
                        L = k ? p : n;
                    y.includes("offscreen")
                        ? l.push(function (e) {
                              e.setPosition(m, g, L, v);
                          })
                        : l.push(function (e) {
                              return e.setPosition(m, g, L, v);
                          });
                }
                return l;
            }
            var d = 140;
            a.WALKING_SPEED = d;
            var p = 280;
            a.RUNNING_SPEED = p;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = (n(t(0)), t(7)),
                l = t(6),
                i = t(19),
                s = t(5),
                u = (0, o.memo)("CRTOverlay", function () {
                    var e = c();
                    return (0, s.jsx)("div", {
                        className: e.overlay,
                        children: (0, s.jsx)(
                            "img",
                            (0, r.default)(
                                {
                                    src: "misc/overlay/overlay_" + overlay + ".png",
                                    alt: "",
                                },
                                i.sceneSize
                            )
                        ),
                    });
                });
            a.default = u;
            var c = (0, l.createUseStyles)({
                overlay: (0, r.default)({}, l.layout.overlay),
            });
        },
        ,
        ,
        ,
        ,
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var n = {
                arrow: t(110),
                bril: t(111),
                empty: t(112),
            };
            a.default = n;
        },
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = t(8),
                o = n(t(158)),
                l = n(t(55)),
                i = n(t(56)),
                s = n(t(57)),
                u = n(t(58)),
                c = n(t(59)),
                d = n(t(60)),
                p = n(t(61)),
                h = n(t(66)),
                g = n(t(62)),
                f = n(t(63)),
                m = n(t(65)),
                y = n(t(64)),
                b = (0, r.create)({
                    plugins: [
                        (0, l.default)(),
                        (0, i.default)(),
                        (0, s.default)(),
                        (0, u.default)(),
                        (0, c.default)(),
                        (0, o.default)(),
                        (0, d.default)(),
                        (0, p.default)(),
                        (0, h.default)(),
                        (0, g.default)(),
                        (0, f.default)(),
                        (0, m.default)(),
                        (0, y.default)(),
                    ],
                });
            a.default = b;
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.positionCoords = function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if ("keezerstart" === e) return [200, l];
                    if ("keezer" === e) return [500, l];
                    if ("center" === e) return [r.sceneSize.width / 2, l];
                    if ("full" === e) return [r.sceneSize.width / 2, r.sceneSize.height / 2];
                    if ("opponent" in e) {
                        var t,
                            o = null !== (t = e.name) && void 0 !== t ? t : a;
                        return "groep-oude-mensen" === o || "groep-jonge-mensen" === o
                            ? [540 * e.opponent - 950, l]
                            : [300 * e.opponent - 870, l];
                    }
                    if ("offscreen" in e)
                        return ["left" === e.offscreen ? -r.sceneSize.width - 240 : r.sceneSize.width + 240, l];
                    if ("custom" in e) return [e.custom, l];
                    if ("flag" in e) return [50, "down" === e.flag ? r.sceneSize.height + 200 : -660];
                    switch (e.special) {
                        case n.IN_SEA:
                            return [r.sceneSize.width / 2, -350];
                        case n.WATERKANON:
                            return [-r.sceneSize.width - 800, l];
                    }
                }),
                (a.horizontalAlignmentForPosition = function (e, a) {
                    return "keezer" === e || "keezer" === a || "keezerstart" === a
                        ? "right"
                        : "kaboutersbijdruide" === e || "druide-zondermes" === e || "center" === a || "full" === a
                          ? "center"
                          : "opponent" in a ||
                              "offscreen" in a ||
                              "custom" in a ||
                              "flag" in a ||
                              ("special" in a && a.special === n.WATERKANON)
                            ? "left"
                            : "center";
                }),
                (a.verticalAlignmentForPosition = function (e) {
                    return ((0, o.isPlainObject)(e) && "flag" in e) || "full" === e ? "middle" : "bottom";
                }),
                (a.positionForCharacter = function (e, a) {
                    return "keezer" === e.name
                        ? "keezer"
                        : "visser-in-bootje" === e.name
                          ? {
                                special: n.IN_SEA,
                            }
                          : "vrouw-op-boomstronk" === e.name
                            ? "full"
                            : "poke-trainer-1" === e.name
                              ? "center"
                              : "krokomuis" === e.name
                                ? {
                                      custom: -900,
                                  }
                                : "olihoorn" === e.name
                                  ? {
                                        custom: -700,
                                    }
                                  : "poke-trainer-2" === e.name
                                    ? {
                                          opponent: 2,
                                      }
                                    : {
                                          opponent: a,
                                      };
                }),
                (a.positionForObject = function (e, a) {
                    return "bootje" === e.name
                        ? {
                              special: n.IN_SEA,
                          }
                        : "straalwaterkanon" === e.name
                          ? {
                                special: n.WATERKANON,
                            }
                          : "vulkaan" === e.name
                            ? "full"
                            : "center";
                }),
                (a.SpecialPosition = a.baseline = void 0);
            var n,
                r = t(19),
                o = t(9),
                l = -220;
            (a.baseline = l),
                (a.SpecialPosition = n),
                (function (e) {
                    (e[(e.IN_SEA = 0)] = "IN_SEA"), (e[(e.WATERKANON = 1)] = "WATERKANON");
                })(n || (a.SpecialPosition = n = {}));
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var n = t(202);
            Object.keys(n).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    ((e in a && a[e] === n[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return n[e];
                            },
                        }));
            });
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.configure = function (e) {
                    Object.assign(n, e);
                }),
                (a.default = void 0);
            var n = {
                    logLevel: "info",
                    testing: !1,
                },
                r = n;
            a.default = r;
        },
        function (e, a, t) {
            "use strict";
            (function (e) {
                Object.defineProperty(a, "__esModule", {
                    value: !0,
                }),
                    (a.assignGlobal = function (a) {
                        DEV && Object.assign(e, a);
                    });
                var t = new URLSearchParams(document.location.search);
                Object.assign(e, {
                    DEV: t.has("dev"),
                });
            }).call(this, t(29));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.sequenceBuilderForScene = i),
                (a.buildSequenceForScene = function (e) {
                    var a = (0, o.buildWellKnown)(e),
                        t = i(e);
                    return null != t ? (0, r.default)((0, r.default)({}, l.default(a, e)), t(a, e)) : l.default(a, e);
                }),
                (a.sequences = void 0);
            var r = n(t(3)),
                o = t(43),
                l = {
                    cutHenkTrol: t(122).default,
                    default: t(123).default,
                    endHenkTrol: t(124).default,
                    end: t(125).default,
                    harryPotterLooptMee: t(126).default,
                    hummer: t(127).default,
                    karMetNimfengezin: t(128).default,
                    prinsOpPaard: t(129).default,
                    zonsondergang: t(130).default,
                };

            function i(e) {
                if (e.isEndScene) return "henk-krol" === e.party1 ? l.endHenkTrol : l.end;
                if ("cut-henk-trol" === e.key) return l.cutHenkTrol;
                switch (e.key) {
                    case "vvd-pvda":
                        return l.hummer;
                    case "sp-fvd":
                        return l.prinsOpPaard;
                    case "pvv-sgp":
                        return l.karMetNimfengezin;
                    case "vvd-ja21":
                        return l.harryPotterLooptMee;
                    case "vvd-henk-krol":
                    case "cda-henk-krol":
                    case "pvda-henk-krol":
                    case "cu-henk-krol":
                    case "d66-henk-krol":
                    case "sp-henk-krol":
                    case "pvv-henk-krol":
                        return l.zonsondergang("henk-krol");
                    default:
                        return null;
                }
            }
            a.sequences = l;
        },
        ,
        function (e) {
            e.exports = JSON.parse(partijen);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(32)),
                l = n(t(17)),
                i = n(t(18)),
                s = n(t(11)),
                u = t(38),
                c = n(t(142)),
                d = t(25),
                p = t(9),
                h = t(14),
                g = n(t(74)),
                f = (function () {
                    function e() {
                        (0, l.default)(this, e),
                            (0, s.default)(this, "key", void 0),
                            (0, s.default)(this, "imagery", void 0),
                            (0, s.default)(this, "characters", void 0),
                            (0, s.default)(this, "objects", void 0),
                            (0, s.default)(this, "party1", void 0),
                            (0, s.default)(this, "party2", void 0),
                            (0, s.default)(this, "enterSequence", void 0),
                            (0, s.default)(this, "prepareSequence", void 0),
                            (0, s.default)(this, "choice1", void 0),
                            (0, s.default)(this, "choice2", void 0),
                            (0, s.default)(this, "choice1Party", void 0),
                            (0, s.default)(this, "choice2Party", void 0),
                            (0, s.default)(this, "party1Sequence", void 0),
                            (0, s.default)(this, "party2Sequence", void 0),
                            (0, s.default)(this, "_choices", void 0);
                    }
                    return (
                        (0, i.default)(
                            e,
                            [
                                {
                                    key: "isCutScene",
                                    get: function () {
                                        return null == this.party1;
                                    },
                                },
                                {
                                    key: "isEndScene",
                                    get: function () {
                                        return null != this.party1 && null == this.party2;
                                    },
                                },
                                {
                                    key: "getEnterSequence",
                                    value: function () {
                                        var e = this;
                                        return this.enterSequence.map(function (a) {
                                            return "line" in a
                                                ? {
                                                      line: {
                                                          character: a.line.character,
                                                          text: e.replaceDoggyName(a.line.text),
                                                      },
                                                  }
                                                : a;
                                        });
                                    },
                                },
                                {
                                    key: "getExitSequence",
                                    value: function (e) {
                                        var a,
                                            t,
                                            n,
                                            r,
                                            o = this,
                                            l = function (e) {
                                                return "line" in e
                                                    ? {
                                                          line: {
                                                              character: e.line.character,
                                                              text: o.replaceDoggyName(e.line.text),
                                                          },
                                                      }
                                                    : e;
                                            };
                                        return e === this.party1
                                            ? null !==
                                                  (a =
                                                      null === (t = this.party1Sequence) || void 0 === t
                                                          ? void 0
                                                          : t.map(l)) && void 0 !== a
                                                ? a
                                                : null
                                            : e === this.party2 &&
                                                null !==
                                                    (n =
                                                        null === (r = this.party2Sequence) || void 0 === r
                                                            ? void 0
                                                            : r.map(l)) &&
                                                void 0 !== n
                                              ? n
                                              : null;
                                    },
                                },
                                {
                                    key: "replaceDoggyName",
                                    value: function (e) {
                                        return e.replace(/naamhondje/g, h.keezerStore.doggyName);
                                    },
                                },
                                {
                                    key: "getChoices",
                                    value: function () {
                                        if (null == this._choices) {
                                            var e = this.choice1,
                                                a = this.choice2,
                                                t = this.choice1Party,
                                                n = this.choice2Party;
                                            if (null == e || null == a) return [];
                                            if (null == t || null == n) return [];
                                            this._choices = [
                                                {
                                                    party: t,
                                                    text: this.replaceDoggyName(e),
                                                },
                                                {
                                                    party: n,
                                                    text: this.replaceDoggyName(a),
                                                },
                                            ];
                                        }
                                        return this._choices;
                                    },
                                },
                                {
                                    key: "characterPosition",
                                    value: function (e) {
                                        if ("keezer" === e) return "keezer";
                                        var a = this.characters.findIndex(function (a) {
                                            return (null === a || void 0 === a ? void 0 : a.name) === e;
                                        });
                                        return a < 0
                                            ? null
                                            : {
                                                  opponent: a,
                                              };
                                    },
                                },
                            ],
                            [
                                {
                                    key: "load",
                                    value: function (a) {
                                        var t = new e(),
                                            n = a.background,
                                            l = (0, o.default)(a, ["background"]),
                                            i = (function (e) {
                                                if (e.includes("*")) {
                                                    var a = (0, d.patternToRegExp)(e, {
                                                            wildcards: !0,
                                                        }),
                                                        t = u.scenes.filter(function (e) {
                                                            return a.test(e.name);
                                                        });
                                                    return (0, p.sample)(t);
                                                }
                                                return u.scenes.find(function (a) {
                                                    return a.name === e;
                                                });
                                            })(n);
                                        if (null == i)
                                            throw new Error("No imagery found for '".concat(a.background, "'"));
                                        return (
                                            Object.assign(
                                                t,
                                                (0, r.default)(
                                                    {
                                                        key: "".concat(a.party1, "-").concat(a.party2),
                                                        imagery: i,
                                                    },
                                                    l
                                                )
                                            ),
                                            t
                                        );
                                    },
                                },
                                {
                                    key: "buildStartScene",
                                    value: function () {
                                        return e.load({
                                            key: "start",
                                            background: "bospad1",
                                            party1: null,
                                            party2: null,
                                            enterSequence: g.default.start.map(function (e) {
                                                return {
                                                    line: {
                                                        character: null,
                                                        text: e,
                                                    },
                                                };
                                            }),
                                            characters: [],
                                            objects: [],
                                        });
                                    },
                                },
                                {
                                    key: "buildCutScene",
                                    value: function (a) {
                                        var t =
                                                null != a
                                                    ? g.default.cut.find(function (e) {
                                                          return e.key === a;
                                                      })
                                                    : (0, p.sample)(g.default.cut),
                                            n = t.key,
                                            r = t.dialogue.map(function (e) {
                                                return "string" === typeof e
                                                    ? {
                                                          character: null,
                                                          text: e,
                                                      }
                                                    : e;
                                            });
                                        return e.load({
                                            key: "cut-".concat(n),
                                            background: "bospad2",
                                            party1: null,
                                            party2: null,
                                            enterSequence: r.map(function (e) {
                                                return {
                                                    line: e,
                                                };
                                            }),
                                            characters:
                                                "henk-trol" === n
                                                    ? [
                                                          {
                                                              name: "henk-trol",
                                                          },
                                                      ]
                                                    : [],
                                            objects: [],
                                        });
                                    },
                                },
                                {
                                    key: "buildPreFinalScene",
                                    value: function () {
                                        var a = g.default.pre_final.dialogue.map(function (e) {
                                            return "string" === typeof e
                                                ? {
                                                      character: null,
                                                      text: e,
                                                  }
                                                : e;
                                        });
                                        return e.load({
                                            key: "cut-pre-final",
                                            background: "bospad2",
                                            party1: null,
                                            party2: null,
                                            enterSequence: a.map(function (e) {
                                                return {
                                                    line: e,
                                                };
                                            }),
                                            characters: [],
                                            objects: [],
                                        });
                                    },
                                },
                                {
                                    key: "buildEndScene",
                                    value: function (a) {
                                        var t = "henk-krol" === a.code ? "henk-trol" : "eindpoppetje-".concat(a.code);
                                        return e.load({
                                            key: "end",
                                            background: "eindscherm",
                                            party1: a.code,
                                            enterSequence: m(a.code, t),
                                            characters: [
                                                null,
                                                {
                                                    name: t,
                                                },
                                            ],
                                            objects: [
                                                {
                                                    name: "vlag-".concat(a.code),
                                                    separate: !0,
                                                },
                                            ],
                                        });
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })();

            function m(e, a) {
                var t, n;
                return null !==
                    (t =
                        null ===
                            (n = c.default.find(function (a) {
                                return a.party.toLowerCase() === e.toLowerCase();
                            })) || void 0 === n
                            ? void 0
                            : n.dialogue.map(function (e) {
                                  return {
                                      line: (0, r.default)(
                                          (0, r.default)({}, e),
                                          {},
                                          {
                                              character: a,
                                          }
                                      ),
                                  };
                              })) && void 0 !== t
                    ? t
                    : [];
            }
            a.default = f;
        },
        function (e, a) {
            e.exports = cuts

        },
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.column = function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "stretch";
                    return (0, l.default)(
                        (0, l.default)({}, s.column),
                        {},
                        {
                            alignItems: a,
                            "& > :not(:last-child)": {
                                marginBottom: e,
                            },
                        }
                    );
                }),
                (a.row = function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "center";
                    return (0, l.default)(
                        (0, l.default)({}, s.row),
                        {},
                        {
                            alignItems: a,
                            "& > :not(:last-child)": {
                                marginRight: e,
                            },
                        }
                    );
                }),
                (a.breakpoint = u),
                (a.breakpointSpec = c),
                (a.responsive = f),
                (a.responsiveProp = function (e) {
                    for (var a = {}, t = 0, n = Object.entries(e); t < n.length; t++)
                        for (
                            var o = (0, r.default)(n[t], 2), l = o[0], i = o[1], s = 0, u = Object.entries(i);
                            s < u.length;
                            s++
                        ) {
                            var c = (0, r.default)(u[s], 2),
                                d = c[0],
                                p = c[1];
                            null != p && (null == a[d] && (a[d] = {}), (a[d][l] = p));
                        }
                    return f(a);
                }),
                (a.desktop =
                    a.tablet =
                    a.mobile =
                    a.screenMinWidths =
                    a.screenWidths =
                    a.overlay =
                    a.flex =
                    a.z =
                    a.icon =
                    a.leftNavWidth =
                    a.barHeight =
                    a.padding =
                        void 0);
            var r = n(t(12)),
                o = n(t(11)),
                l = n(t(3)),
                i = t(9);
            a.padding = {
                inline: {
                    xs: 2,
                    s: 4,
                    m: 8,
                    l: 16,
                    xl: 24,
                },
                xs: {
                    mobile: 4,
                    tablet: 4,
                    desktop: 6,
                },
                s: {
                    mobile: 8,
                    tablet: 8,
                    desktop: 12,
                },
                m: {
                    mobile: 12,
                    tablet: 12,
                    desktop: 16,
                },
                l: {
                    mobile: 20,
                    tablet: 20,
                    desktop: 24,
                },
                xl: {
                    mobile: 32,
                    tablet: 32,
                    desktop: 40,
                },
                xxl: {
                    mobile: 48,
                    tablet: 48,
                    desktop: 64,
                },
            };
            a.barHeight = {
                xs: 32,
                s: 40,
                m: 48,
                l: 56,
                xl: 64,
                xxl: 80,
            };
            a.leftNavWidth = 296;
            a.icon = {
                xs: {
                    width: 10,
                    height: 10,
                },
                s: {
                    width: 12,
                    height: 12,
                },
                m: {
                    width: 16,
                    height: 16,
                },
                l: {
                    width: 24,
                    height: 24,
                },
                xl: {
                    width: 32,
                    height: 32,
                },
                xxl: {
                    width: 40,
                    height: 40,
                },
                xxxl: {
                    width: 56,
                    height: 56,
                },
            };
            a.z = {
                body: 0,
                header: 100,
                scrollToTop: 198,
                bodyTop: 199,
                modal: 200,
                dragDrop: 250,
                inform: 300,
                popup: 400,
            };
            var s = {
                column: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                },
                row: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "stretch",
                },
                center: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                },
            };
            a.flex = s;

            function u(e) {
                return "()" === c(e)
                    ? function (e) {
                          return e;
                      }
                    : function (a) {
                          return (0, o.default)({}, "@media screen and ".concat(c(e)), a);
                      };
            }

            function c(e) {
                var a = [];
                return (
                    null != e.minWidth && e.minWidth > 0 && a.push("min-width: ".concat(e.minWidth, "px")),
                    null != e.maxWidth && a.push("max-width: ".concat(e.maxWidth, "px")),
                    null != e.minHeight && e.minHeight > 0 && a.push("min-height: ".concat(e.minHeight, "px")),
                    null != e.maxHeight && a.push("max-height: ".concat(e.maxHeight, "px")),
                    "(".concat(a.join(" and "), ")")
                );
            }
            a.overlay = {
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            };
            a.screenWidths = {
                mobile: 320,
                tablet: 640,
                desktop: 800,
            };
            var d = {
                mobile: 0,
                tablet: 320,
                desktop: 640,
            };
            a.screenMinWidths = d;
            var p = u({
                minWidth: d.mobile,
            });
            a.mobile = p;
            var h = u({
                minWidth: d.tablet,
            });
            a.tablet = h;
            var g = u({
                minWidth: d.desktop,
            });

            function f(e) {
                var a = {};
                if ((0, i.isFunction)(e))
                    for (var t = e, n = 0, o = Object.keys(d); n < o.length; n++) {
                        var s = o[n];
                        a = (0, l.default)(
                            (0, l.default)({}, a),
                            u({
                                minWidth: d[s],
                            })(t(s))
                        );
                    }
                else
                    for (var c = 0, p = Object.entries(e); c < p.length; c++) {
                        var h = (0, r.default)(p[c], 2),
                            g = h[0],
                            f = h[1];
                        null != f &&
                            (a = (0, l.default)(
                                (0, l.default)({}, a),
                                u({
                                    minWidth: d[g],
                                })(f)
                            ));
                    }
                return a;
            }
            a.desktop = g;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(34)),
                o = n(t(35)),
                l = n(t(21)),
                i = n(t(17)),
                s = n(t(18)),
                u = n(t(11)),
                c = (function () {
                    function e() {
                        (0, i.default)(this, e),
                            (0, u.default)(this, "disposed", !1),
                            (0, u.default)(this, "timeouts", new Set()),
                            (0, u.default)(this, "queued", new Map()),
                            (0, u.default)(this, "animationFrames", new Set());
                    }
                    return (
                        (0, s.default)(e, [
                            {
                                key: "isDisposed",
                                get: function () {
                                    return this.disposed;
                                },
                            },
                            {
                                key: "dispose",
                                value: function () {
                                    this.clearAll(), this.cancelAllAnimationFrames(), (this.disposed = !0);
                                },
                            },
                            {
                                key: "isActive",
                                get: function () {
                                    return this.timeouts.size > 0 || this.animationFrames.size > 0;
                                },
                            },
                            {
                                key: "setTimeout",
                                value: (function (e) {
                                    function a(a, t) {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (a.toString = function () {
                                            return e.toString();
                                        }),
                                        a
                                    );
                                })(function (e, a) {
                                    var t = this;
                                    if (this.disposed) return null;
                                    var n = setTimeout(function () {
                                        t.timeouts.delete(n), t.queued.delete(n), e();
                                    }, a);
                                    return this.timeouts.add(n), this.queued.set(n, e), n;
                                }),
                            },
                            {
                                key: "clearTimeout",
                                value: (function (e) {
                                    function a(a) {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (a.toString = function () {
                                            return e.toString();
                                        }),
                                        a
                                    );
                                })(function (e) {
                                    null != e && (clearTimeout(e), this.timeouts.delete(e), this.queued.delete(e));
                                }),
                            },
                            {
                                key: "setInterval",
                                value: (function (e) {
                                    function a(a, t) {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (a.toString = function () {
                                            return e.toString();
                                        }),
                                        a
                                    );
                                })(function (e, a) {
                                    if (this.disposed) return null;
                                    var t = setInterval(e, a);
                                    return this.timeouts.add(t), t;
                                }),
                            },
                            {
                                key: "clearInterval",
                                value: (function (e) {
                                    function a(a) {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (a.toString = function () {
                                            return e.toString();
                                        }),
                                        a
                                    );
                                })(function (e) {
                                    null != e && (clearInterval(e), this.timeouts.delete(e));
                                }),
                            },
                            {
                                key: "requestAnimationFrame",
                                value: (function (e) {
                                    function a(a) {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (a.toString = function () {
                                            return e.toString();
                                        }),
                                        a
                                    );
                                })(function (e) {
                                    var a = this;
                                    if (this.disposed) return null;
                                    var t = requestAnimationFrame(function () {
                                        a.animationFrames.delete(t), e();
                                    });
                                    return this.animationFrames.add(t), t;
                                }),
                            },
                            {
                                key: "cancelAnimationFrame",
                                value: (function (e) {
                                    function a(a) {
                                        return e.apply(this, arguments);
                                    }
                                    return (
                                        (a.toString = function () {
                                            return e.toString();
                                        }),
                                        a
                                    );
                                })(function (e) {
                                    cancelAnimationFrame(e), this.animationFrames.delete(e);
                                }),
                            },
                            {
                                key: "cancelAllAnimationFrames",
                                value: function () {
                                    var e,
                                        a = (0, l.default)(this.animationFrames);
                                    try {
                                        for (a.s(); !(e = a.n()).done; ) {
                                            var t = e.value;
                                            cancelAnimationFrame(t);
                                        }
                                    } catch (n) {
                                        a.e(n);
                                    } finally {
                                        a.f();
                                    }
                                    this.animationFrames.clear();
                                },
                            },
                            {
                                key: "await",
                                value: function (e) {
                                    var a = this;
                                    return new Promise(
                                        (function () {
                                            var t = (0, o.default)(
                                                r.default.mark(function t(n, o) {
                                                    var l;
                                                    return r.default.wrap(
                                                        function (t) {
                                                            for (;;)
                                                                switch ((t.prev = t.next)) {
                                                                    case 0:
                                                                        return (t.prev = 0), (t.next = 3), e;
                                                                    case 3:
                                                                        (l = t.sent),
                                                                            a.isDisposed || n(l),
                                                                            (t.next = 10);
                                                                        break;
                                                                    case 7:
                                                                        (t.prev = 7),
                                                                            (t.t0 = t.catch(0)),
                                                                            a.isDisposed || o(t.t0);
                                                                    case 10:
                                                                    case "end":
                                                                        return t.stop();
                                                                }
                                                        },
                                                        t,
                                                        null,
                                                        [[0, 7]]
                                                    );
                                                })
                                            );
                                            return function (e, a) {
                                                return t.apply(this, arguments);
                                            };
                                        })()
                                    );
                                },
                            },
                            {
                                key: "then",
                                value: function (e, a) {
                                    var t = this;
                                    return e.then(function (e) {
                                        if (!t.isDisposed) return a(e);
                                    });
                                },
                            },
                            {
                                key: "throttle",
                                value: function (e, a) {
                                    if (!this.isActive) return this.setTimeout(e, a);
                                },
                            },
                            {
                                key: "debounce",
                                value: function (e, a) {
                                    return this.clearAll(), this.setTimeout(e, a);
                                },
                            },
                            {
                                key: "performTransition",
                                value: function (e, a) {
                                    a.onPrepare && a.onPrepare(),
                                        a.onCommit && this.setTimeout(a.onCommit, 16),
                                        a.onCleanUp && this.setTimeout(a.onCleanUp, 16 + e);
                                },
                            },
                            {
                                key: "clearAll",
                                value: function () {
                                    var e,
                                        a = (0, l.default)(this.timeouts);
                                    try {
                                        for (a.s(); !(e = a.n()).done; ) {
                                            var t = e.value;
                                            clearTimeout(t);
                                        }
                                    } catch (n) {
                                        a.e(n);
                                    } finally {
                                        a.f();
                                    }
                                    this.timeouts.clear();
                                },
                            },
                            {
                                key: "commit",
                                value: function () {
                                    this.clearAll();
                                    var e,
                                        a = (0, l.default)(this.queued.values());
                                    try {
                                        for (a.s(); !(e = a.n()).done; ) {
                                            (0, e.value)();
                                        }
                                    } catch (t) {
                                        a.e(t);
                                    } finally {
                                        a.f();
                                    }
                                },
                            },
                        ]),
                        e
                    );
                })();
            a.default = c;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(12)),
                l = n(t(32)),
                i = n(t(0)),
                s = t(7),
                u = t(6),
                c = n(t(31)),
                d = n(t(178)),
                p = t(39),
                h = t(22),
                g = t(9),
                f = t(14),
                m = t(5);

            function y(e) {
                return (0, d.default)(e)
                    .replace(/\[(.*?)(\]|$)/g, function (e, a) {
                        return "<em>".concat(a, "</em>");
                    })
                    .replace(/\n/g, "<br/>");
            }
            var b = (0, s.memo)("Label", function (e) {
                var a = e.flex,
                    t = e.reverse,
                    n = void 0 !== t && t,
                    s = e.align,
                    u = void 0 === s ? "left" : s,
                    d = e.transform,
                    b = void 0 === d ? null : d,
                    k = e.animated,
                    L = e.shadow,
                    j = e.children,
                    w = e.classNames,
                    z = (0, l.default)(e, [
                        "flex",
                        "reverse",
                        "align",
                        "transform",
                        "animated",
                        "shadow",
                        "children",
                        "classNames",
                    ]),
                    x = v(),
                    F = (0, c.default)(
                        x.label,
                        {
                            normal: !n,
                            reverse: n,
                        },
                        u,
                        {
                            animated: k,
                            shadow: L,
                        },
                        b,
                        w
                    ),
                    S = (0, h.useTimer)(),
                    P = i.default.useState(k ? (0, g.repeat)(" ", j.length) : j),
                    q = (0, o.default)(P, 2),
                    C = q[0],
                    O = q[1],
                    M = i.default.useState(k ? j : ""),
                    E = (0, o.default)(M, 2),
                    D = E[0],
                    _ = E[1],
                    A = i.default.useState(!1),
                    N = (0, o.default)(A, 2),
                    T = N[0],
                    I = N[1],
                    H = i.default.useRef(0),
                    B = y(C) + '<span class="invisible">'.concat(y(D), "</span>");
                void 0 !== k &&
                    (B += T ? '\xa0<span class="caret on">\u258b</span>' : '\xa0<span class="caret off">\u258b</span>');
                var W = i.default.useCallback(
                        function () {
                            var e = !0;
                            I(e);
                            S.setTimeout(function a() {
                                I((e = !e)), S.setTimeout(a, 500);
                            }, 500);
                        },
                        [S]
                    ),
                    J = i.default.useCallback(
                        function () {
                            S.clearAll(), I(!1), (H.current = 0);
                            return (
                                S.setTimeout(function e() {
                                    var a = H.current;
                                    if (a === j.length) f.audioStore.stopTextSFX(), W();
                                    else {
                                        var t = a + 1;
                                        (H.current = t), O(j.slice(0, t)), _(j.slice(t)), S.setTimeout(e, 16);
                                    }
                                }, 16),
                                function () {
                                    S.clearAll();
                                }
                            );
                        },
                        [W, j, S]
                    ),
                    R = i.default.useCallback(
                        function () {
                            S.clearAll(), O(j), _(""), I(!1);
                        },
                        [j, S]
                    );
                return (
                    i.default.useEffect(
                        function () {
                            k ? (J(), f.audioStore.startTextSFX()) : (R(), f.audioStore.stopTextSFX());
                        },
                        [k, W, j, J, R, S]
                    ),
                    (0, m.jsx)(
                        "div",
                        (0, r.default)(
                            {
                                className: F,
                                style: (0, p.flexStyle)(a),
                                dangerouslySetInnerHTML: {
                                    __html: B,
                                },
                            },
                            z
                        )
                    )
                );
            });
            a.default = b;
            var v = (0, u.createUseStyles)({
                label: {
                    "&.left": {
                        textAlign: "left",
                    },
                    "&.center": {
                        textAlign: "center",
                    },
                    "&.right": {
                        textAlign: "right",
                    },
                    "&.upper": {
                        textTransform: "uppercase",
                    },
                    "&.lower": {
                        textTransform: "lowercase",
                    },
                    "& em": {
                        fontStyle: "normal",
                        color: "yellow",
                    },
                    "& .caret": {
                        fontSize: "0.8em",
                        "&.off": {
                            color: "transparent",
                            textShadow: "none",
                        },
                    },
                    "& .invisible": {
                        visibility: "hidden",
                    },
                    "&.animated": {
                        whiteSpace: "pre-wrap",
                    },
                    "&.shadow": {
                        textShadow: "1px 1px 2px black",
                    },
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.arrowSize = a.sliderSize = a.SliderValue = a.defaultColors = a.default = void 0);
            var r = n(t(3)),
                o = n(t(12)),
                l = n(t(0)),
                i = t(7),
                s = t(6),
                u = t(23),
                c = n(t(37)),
                d = t(9),
                p = t(5),
                h = (0, i.memo)("Slider", function (e) {
                    var a = e.colors,
                        t = void 0 === a ? g : a,
                        n = e.value,
                        r = e.onChange,
                        i = e.scale,
                        s = void 0 === i ? 1 : i,
                        c = e.ariaLabel,
                        h = l.default.useCallback(
                            function (e) {
                                return m(e, t);
                            },
                            [t]
                        ),
                        v = l.default.useCallback(
                            function (e) {
                                return (function (e, a) {
                                    for (var t = 0; t < a.length - 1; t++) {
                                        var n = (0, o.default)(a[t], 3),
                                            r = n[0],
                                            l = n[2],
                                            i = (0, o.default)(a[t + 1], 3),
                                            s = i[0],
                                            u = i[2];
                                        if (!(e < r) && !(e >= s)) {
                                            var c = (e - r) / (s - r);
                                            return 0 === c
                                                ? l
                                                : 1 === c
                                                  ? u
                                                  : "Op "
                                                        .concat((100 * c).toFixed(0), "% tussen ")
                                                        .concat(l, " en ")
                                                        .concat(u);
                                        }
                                    }
                                    return a[a.length - 1][2];
                                })(e, t);
                            },
                            [t]
                        ),
                        k = l.default.useMemo(
                            function () {
                                return f.random(t);
                            },
                            [t]
                        ),
                        L = l.default.useState((null !== n && void 0 !== n ? n : k).ratio),
                        j = (0, o.default)(L, 2),
                        w = j[0],
                        z = j[1];
                    l.default.useEffect(
                        function () {
                            null === r ||
                                void 0 === r ||
                                r({
                                    ratio: w,
                                    color: h(w),
                                });
                        },
                        [h, r, w]
                    );
                    var x = l.default.useMemo(
                            function () {
                                return {
                                    background: "linear-gradient(to right, ".concat(
                                        t
                                            .map(function (e) {
                                                var a = (0, o.default)(e, 2),
                                                    t = a[0],
                                                    n = a[1];
                                                return "".concat(n, " ").concat(100 * t, "%");
                                            })
                                            .join(", "),
                                        ")"
                                    ),
                                };
                            },
                            [t]
                        ),
                        F = {
                            left: w * y.width,
                        },
                        S = l.default.useRef(null),
                        P = (0, u.useSimpleDrag)({
                            axis: "horizontal",
                            onMove: function (e, a) {
                                var t,
                                    n = null === (t = S.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                                if (null != n) {
                                    var r = (e.x - n.left) / s / y.width;
                                    z((0, d.clamp)(r, 0, 1));
                                }
                            },
                        }),
                        q = (0, (0, o.default)(P, 1)[0])(S),
                        C = l.default.useCallback(
                            function (e) {
                                "ArrowLeft" === e.key && (z((0, d.clamp)(w - 0.05, 0, 1)), e.preventDefault()),
                                    "ArrowRight" === e.key && (z((0, d.clamp)(w + 0.05, 0, 1)), e.preventDefault());
                            },
                            [w]
                        ),
                        O = v(w),
                        M = b();
                    return (0, p.jsx)("div", {
                        className: M.slider,
                        style: x,
                        ref: q,
                        "aria-label": c,
                        "aria-valuenow": w,
                        "aria-valuemin": 0,
                        "aria-valuemax": 0,
                        "aria-valuetext": O,
                        role: "slider",
                        tabIndex: 0,
                        onKeyDown: C,
                        children: (0, p.jsx)("div", {
                            className: M.arrow,
                            style: F,
                        }),
                    });
                });
            a.default = h;
            var g = [
                [0, new c.default("#ffffff"), "wit"],
                [0.1, new c.default("#9c5844"), "bruin"],
                [0.2, new c.default("#e6c36a"), "geel"],
                [0.3, new c.default("#e69d6a"), "beige"],
                [0.4, new c.default("#c1272d"), "rood"],
                [0.5, new c.default("#f15a24"), "oranje"],
                [0.6, new c.default("#fcee21"), "geel"],
                [0.7, new c.default("#8cc63f"), "groen"],
                [0.8, new c.default("#2e3192"), "blauw"],
                [0.9, new c.default("#93278f"), "paars"],
                [1, new c.default("#000000"), "zwart"],
            ];
            a.defaultColors = g;
            var f = {
                random: function (e) {
                    var a = Math.random();
                    return {
                        ratio: a,
                        color: m(a, e),
                    };
                },
            };

            function m(e, a) {
                for (var t = 0; t < a.length - 1; t++) {
                    var n = (0, o.default)(a[t], 2),
                        r = n[0],
                        l = n[1],
                        i = (0, o.default)(a[t + 1], 2),
                        s = i[0],
                        u = i[1];
                    if (!(e < r) && !(e >= s)) {
                        var c = (e - r) / (s - r);
                        return l.mix(u, c);
                    }
                }
                return a[a.length - 1][1];
            }
            a.SliderValue = f;
            var y = {
                width: 640,
                height: 60,
            };
            a.sliderSize = y;
            a.arrowSize = 80;
            var b = (0, s.createUseStyles)({
                slider: (0, r.default)(
                    {
                        position: "relative",
                    },
                    y
                ),
                arrow: {
                    position: "absolute",
                    bottom: 0,
                    width: 0,
                    height: 0,
                    marginLeft: -40,
                    transformOrigin: [0, 0],
                    transform: "scaleY(1.5)",
                    border: [40, "solid", "transparent"],
                    borderBottomColor: "white",
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.assignRef = i),
                (a.releaseRef = function (e) {
                    i(e, null);
                }),
                (a.isRefObject = s),
                (a.useRefMap = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return l.default.useMemo(function () {
                        var e = new Map();
                        return {
                            for: function (a) {
                                return function (t) {
                                    null == t ? e.delete(a) : e.set(a, t);
                                };
                            },
                            set: function (a, t) {
                                null == t ? e.delete(a) : e.set(a, t);
                            },
                            clear: function () {
                                e.clear();
                            },
                            size: function () {
                                return e.size;
                            },
                            get: function (a) {
                                return e.get(a);
                            },
                            all: function () {
                                return (0, r.default)(e.values());
                            },
                            entries: function () {
                                return (0, r.default)(e.entries());
                            },
                        };
                    }, e);
                });
            var r = n(t(13)),
                o = n(t(71)),
                l = n(t(0));

            function i(e, a) {
                null != e && (s(e) ? (e.current = a) : e(a));
            }

            function s(e) {
                return null != e && "object" === (0, o.default)(e) && "current" in e;
            }
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = (n(t(0)), t(7)),
                l = t(10),
                i = t(6),
                s = t(19),
                u = t(5),
                c = (0, o.memo)("ScaledScene", function (e) {
                    var a = e.classNames,
                        t = e.style,
                        n = e.children,
                        r = (0, s.useSceneLayout)(),
                        o = r.top,
                        i = r.left,
                        c = r.scale,
                        p = "scale(".concat(c, ")"),
                        h = d();
                    return (0, u.jsx)(l.Column, {
                        classNames: [h.scaledScene, a],
                        style: t,
                        children: (0, u.jsx)(l.Column, {
                            classNames: h.content,
                            style: {
                                transform: p,
                                top: o,
                                left: i,
                            },
                            children: n,
                        }),
                    });
                });
            a.default = c;
            var d = (0, i.createUseStyles)({
                scaledScene: (0, r.default)(
                    (0, r.default)({}, i.layout.overlay),
                    {},
                    {
                        overflow: "hidden",
                    }
                ),
                content: (0, r.default)(
                    (0, r.default)(
                        {
                            position: "absolute",
                            overflow: "hidden",
                            transformOrigin: [0, 0],
                        },
                        s.sceneSize
                    ),
                    {},
                    {
                        fontFamily: i.fonts.family.game,
                        textTransform: "uppercase",
                        fontSize: 40,
                    }
                ),
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(21)),
                o = n(t(3)),
                l = n(t(13)),
                i = n(t(17)),
                s = n(t(18)),
                u = n(t(11)),
                c = n(t(22)),
                d = t(83),
                p = t(25),
                h = t(9),
                g = (function () {
                    function e(a, t) {
                        var n = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        (0, i.default)(this, e),
                            (this.combinations = a),
                            (0, u.default)(this, "handlers", void 0),
                            (0, u.default)(this, "options", void 0),
                            (0, u.default)(
                                this,
                                "maxKeystrokeLength",
                                Math.max.apply(
                                    Math,
                                    (0, l.default)(
                                        this.combinations.map(function (e) {
                                            return e.strokes.length;
                                        })
                                    )
                                )
                            ),
                            (0, u.default)(this, "keyDownListener", function (e) {
                                var a = n.handlers.down;
                                null != a && n.eventListener(e, a);
                            }),
                            (0, u.default)(this, "keyUpListener", function (e) {
                                var a = n.handlers.up;
                                null != a && n.eventListener(e, a);
                            }),
                            (0, u.default)(this, "eventListener", function (e, a) {
                                if (
                                    !e.repeat &&
                                    (null == n.options.filter || n.options.filter(e)) &&
                                    !(
                                        "ignore" === n.options.input &&
                                        e.target instanceof Element &&
                                        null != (0, p.closest)(e.target, d.isInteractiveElement)
                                    )
                                ) {
                                    var t = n.keyStrokeFromEvent(e);
                                    n.addStroke(t);
                                    var r = n.match();
                                    if (
                                        (n.strokes.length >= n.maxKeystrokeLength &&
                                            null != n.strokes[n.strokes.length - 1].key &&
                                            (n.timer.clearAll(), n.clearStrokes()),
                                        null != r)
                                    )
                                        !1 !== a.call(n, r.descriptor, e) && e.preventDefault();
                                }
                            }),
                            (0, u.default)(this, "timer", new c.default()),
                            (0, u.default)(this, "strokes", []),
                            (this.handlers = (0, h.isFunction)(t)
                                ? {
                                      down: t,
                                      up: void 0,
                                  }
                                : t),
                            (this.options = (0, o.default)(
                                {
                                    input: "ignore",
                                    filter: null,
                                },
                                r
                            ));
                    }
                    return (
                        (0, s.default)(e, [
                            {
                                key: "bind",
                                value: function () {
                                    window.addEventListener("keydown", this.keyDownListener),
                                        window.addEventListener("keyup", this.keyUpListener);
                                },
                            },
                            {
                                key: "unbind",
                                value: function () {
                                    window.removeEventListener("keydown", this.keyDownListener),
                                        window.removeEventListener("keyup", this.keyUpListener);
                                },
                            },
                            {
                                key: "keyStrokeFromEvent",
                                value: function (e) {
                                    return {
                                        key: this.keyFromEvent(e),
                                        shiftKey: "Shift" === e.key || e.shiftKey,
                                        altKey: "Alt" === e.key || e.altKey,
                                        ctrlKey: "Control" === e.key || e.ctrlKey,
                                        metaKey: "Meta" === e.key || e.metaKey,
                                    };
                                },
                            },
                            {
                                key: "keyFromEvent",
                                value: function (e) {
                                    return (0, d.isModifierKey)(e.key) ? null : e.code;
                                },
                            },
                            {
                                key: "addStroke",
                                value: function (e) {
                                    var a = this,
                                        t = this.strokes[this.strokes.length - 1];
                                    null == t || null != t.key
                                        ? this.strokes.push(e)
                                        : (this.strokes[this.strokes.length - 1] = e),
                                        this.timer.debounce(function () {
                                            a.clearStrokes();
                                        }, 300);
                                },
                            },
                            {
                                key: "clearStrokes",
                                value: function () {
                                    this.strokes = [];
                                },
                            },
                            {
                                key: "match",
                                value: function () {
                                    var e,
                                        a = (0, r.default)(this.combinations);
                                    try {
                                        for (a.s(); !(e = a.n()).done; ) {
                                            var t = e.value;
                                            if (t.match(this.strokes)) return t;
                                        }
                                    } catch (n) {
                                        a.e(n);
                                    } finally {
                                        a.f();
                                    }
                                    return null;
                                },
                            },
                        ]),
                        e
                    );
                })();
            a.default = g;
        },
        function (e, a, t) {
            "use strict";
            (function (e) {
                Object.defineProperty(a, "__esModule", {
                    value: !0,
                }),
                    (a.isModifierKey = function (e) {
                        return ["Alt", "Meta", "Control", "Shift", "Dead"].includes(e);
                    }),
                    (a.keyToKeyCode = function (e) {
                        var a;
                        if (1 === (e = e.toUpperCase()).length && e.charCodeAt(0) >= t && e.charCodeAt(0) <= n)
                            return "Digit".concat(e);
                        if (1 === e.length && e.charCodeAt(0) >= r && e.charCodeAt(0) <= o) return "Key".concat(e);
                        return null !== (a = l[e]) && void 0 !== a ? a : e;
                    }),
                    (a.isMac = function () {
                        if (!("navigator" in e)) return !1;
                        return navigator.userAgent.toUpperCase().includes("MAC");
                    }),
                    (a.isWin = function () {
                        if (!("navigator" in e)) return !1;
                        return navigator.userAgent.toUpperCase().includes("WIN");
                    }),
                    (a.isInteractiveElement = function (e) {
                        if (!(e instanceof HTMLElement)) return !1;
                        var a = e.tagName.toLowerCase();
                        if ("a" === a && e.hasAttribute("href")) return !0;
                        if ("label" === a && e.hasAttribute("for")) return !0;
                        if ("label" === a && null != e.querySelector(i.join(", "))) return !0;
                        if ("button" === e.getAttribute("role")) return !0;
                        if (e.hasAttribute("tabindex")) return !0;
                        if (e.isContentEditable) return !0;
                        return i.includes(a);
                    });
                var t = "0".charCodeAt(0),
                    n = "9".charCodeAt(0),
                    r = "A".charCodeAt(0),
                    o = "Z".charCodeAt(0),
                    l = {
                        "`": "Backquote",
                        " ": "Space",
                        "-": "Minus",
                        _: "Minus",
                        "=": "Equal",
                        "\u232b": "Backspace",
                        "[": "BracketLeft",
                        "]": "BracketRight",
                        "\\": "Backslash",
                        ";": "Semicolon",
                        "'": "Quote",
                        ",": "Comma",
                        ".": "Period",
                        "/": "Slash",
                        Left: "ArrowLeft",
                        Right: "ArrowRight",
                        Up: "ArrowUp",
                        Down: "ArrowDown",
                        "\u2190": "ArrowLeft",
                        "\u2192": "ArrowRight",
                        "\u2191": "ArrowUp",
                        "\u2193": "ArrowDown",
                    };
                var i = ["input", "select", "textarea", "button"];
            }).call(this, t(29));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.SceneState = a.default = void 0);
            var r = n(t(21)),
                o = n(t(3)),
                l = n(t(17)),
                i = n(t(18)),
                s = n(t(11)),
                u = t(9),
                c = n(t(22)),
                d = t(70),
                p = (function () {
                    function e(a) {
                        var t, n, r, o, i;
                        (0, l.default)(this, e),
                            (this.scene = a),
                            (0, s.default)(this, "listener", void 0),
                            (0, s.default)(this, "autoAdvanceTimer", new c.default()),
                            (0, s.default)(this, "miscTimer", new c.default()),
                            (0, s.default)(this, "prepareSequence", void 0),
                            (0, s.default)(this, "enterSequence", void 0),
                            (0, s.default)(this, "exitSequences", void 0),
                            (0, s.default)(this, "choice", null),
                            (0, s.default)(this, "current", void 0),
                            (0, s.default)(this, "state", h.empty()),
                            (0, s.default)(this, "skipNext", !0);
                        var u = (0, d.buildSequenceForScene)(a),
                            p = u.prepare,
                            g = u.enter,
                            f = u.exit;
                        (this.prepareSequence = null !== (t = p()) && void 0 !== t ? t : []),
                            (this.enterSequence = null !== (n = g()) && void 0 !== n ? n : []),
                            (this.exitSequences = [
                                null !== (r = f(null)) && void 0 !== r ? r : [],
                                null !== (o = f(a.party1)) && void 0 !== o ? o : [],
                                null !== (i = f(a.party2)) && void 0 !== i ? i : [],
                            ]),
                            (this.current = null);
                    }
                    return (
                        (0, i.default)(e, [
                            {
                                key: "dispose",
                                value: function () {
                                    this.stop(), delete this.listener, this.autoAdvanceTimer.dispose();
                                },
                            },
                            {
                                key: "currentSequence",
                                get: function () {
                                    var e,
                                        a,
                                        t,
                                        n = null === (e = this.current) || void 0 === e ? void 0 : e[0];
                                    return "enter" === n
                                        ? this.enterSequence
                                        : "exit" === n
                                          ? this.getExitSequence(
                                                null !==
                                                    (a =
                                                        null === (t = this.choice) || void 0 === t
                                                            ? void 0
                                                            : t.party) && void 0 !== a
                                                    ? a
                                                    : null
                                            )
                                          : null;
                                },
                            },
                            {
                                key: "getExitSequence",
                                value: function (e) {
                                    return null == e
                                        ? this.exitSequences[0]
                                        : e === this.scene.party1
                                          ? this.exitSequences[1]
                                          : e === this.scene.party2
                                            ? this.exitSequences[2]
                                            : [];
                                },
                            },
                            {
                                key: "setState",
                                value: function (e) {
                                    this.state = (0, o.default)((0, o.default)({}, this.state), e);
                                },
                            },
                            {
                                key: "wait",
                                value: function () {
                                    var e,
                                        a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return (this.skipNext = null === (e = a.skip) || void 0 === e || e), !1;
                                },
                            },
                            {
                                key: "setPosition",
                                value: function (e, a) {
                                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        r = (0, o.default)({}, this.state.positions),
                                        l = (0, o.default)({}, this.state.transitionStatuses);
                                    if (null == a) delete r[e];
                                    else {
                                        r[e] = [a, t];
                                        var i = "string" === typeof n ? (0, s.default)({}, e, n) : n;
                                        Object.assign(l, i);
                                    }
                                    return (
                                        this.setState({
                                            positions: r,
                                            transitionStatuses: l,
                                        }),
                                        null == t
                                    );
                                },
                            },
                            {
                                key: "setStatus",
                                value: function (e, a) {
                                    var t = (0, o.default)({}, this.state.statuses);
                                    null == a ? delete t[e] : (t[e] = a),
                                        this.setState({
                                            statuses: t,
                                        });
                                },
                            },
                            {
                                key: "appendLine",
                                value: function (e, a) {
                                    var t = [];
                                    if (null != e.character) {
                                        var n = this.state.lines.filter(function (e) {
                                            return null == e.character;
                                        });
                                        n.length > 0 && t.push(n[n.length - 1]);
                                    }
                                    (t = t.map(function (e) {
                                        return (0, o.default)(
                                            (0, o.default)({}, e),
                                            {},
                                            {
                                                current: !1,
                                            }
                                        );
                                    })).push(
                                        (0, o.default)(
                                            (0, o.default)({}, e),
                                            {},
                                            {
                                                sequence: a,
                                                current: !0,
                                            }
                                        )
                                    ),
                                        this.setState({
                                            lines: t,
                                        });
                                },
                            },
                            {
                                key: "pauseBackground",
                                value: function () {
                                    this.setState({
                                        background: "paused",
                                    });
                                },
                            },
                            {
                                key: "resumeBackground",
                                value: function () {
                                    this.setState({
                                        background: "running",
                                    });
                                },
                            },
                            {
                                key: "flip",
                                value: function (e) {
                                    this.setState({
                                        flipped: (0, o.default)(
                                            (0, o.default)({}, this.state.flipped),
                                            {},
                                            (0, s.default)({}, e, !this.state.flipped[e])
                                        ),
                                    });
                                },
                            },
                            {
                                key: "hold",
                                value: function (e) {
                                    this.setState({
                                        hold: e,
                                    });
                                },
                            },
                            {
                                key: "give",
                                value: function (e) {
                                    this.setState({
                                        give: e,
                                    });
                                },
                            },
                            {
                                key: "appear",
                                value: function (e) {
                                    this.setState({
                                        hidden: (0, u.omit)(this.state.hidden, e),
                                    });
                                },
                            },
                            {
                                key: "disappear",
                                value: function (e) {
                                    this.setState({
                                        hidden: (0, o.default)(
                                            (0, o.default)({}, this.state.hidden),
                                            {},
                                            (0, s.default)({}, e, !0)
                                        ),
                                    });
                                },
                            },
                            {
                                key: "after",
                                value: function (e, a) {
                                    var t = this;
                                    this.miscTimer.setTimeout(function () {
                                        a(t), t.update();
                                    }, e);
                                },
                            },
                            {
                                key: "skipAnimations",
                                value: function () {
                                    var e = (0, u.mapValues)(this.state.positions, function (e) {
                                            return [e[0], null];
                                        }),
                                        a = this.state.lines.map(function (e) {
                                            return (0, o.default)(
                                                (0, o.default)({}, e),
                                                {},
                                                {
                                                    current: !1,
                                                }
                                            );
                                        });
                                    this.setState({
                                        positions: e,
                                        lines: a,
                                        give: null,
                                    });
                                },
                            },
                            {
                                key: "clearDialogue",
                                value: function () {
                                    var e = this.state.lines
                                        .filter(function (e) {
                                            return null == e.character;
                                        })
                                        .map(function (e) {
                                            return (0, o.default)(
                                                (0, o.default)({}, e),
                                                {},
                                                {
                                                    current: !1,
                                                }
                                            );
                                        });
                                    this.setState({
                                        lines: e,
                                    });
                                },
                            },
                            {
                                key: "update",
                                value: function () {
                                    var e;
                                    null === (e = this.listener) || void 0 === e || e.call(this, this.state);
                                },
                            },
                            {
                                key: "prepare",
                                value: function () {
                                    var e,
                                        a = (0, r.default)(this.prepareSequence);
                                    try {
                                        for (a.s(); !(e = a.n()).done; ) {
                                            e.value.call(null, this);
                                        }
                                    } catch (t) {
                                        a.e(t);
                                    } finally {
                                        a.f();
                                    }
                                    this.setState({
                                        status: "prepared",
                                    }),
                                        this.update();
                                },
                            },
                            {
                                key: "enter",
                                value: function () {
                                    var e;
                                    "enter" !== (null === (e = this.current) || void 0 === e ? void 0 : e[0]) &&
                                        (0 === this.enterSequence.length
                                            ? (this.setState({
                                                  status: "entered",
                                                  lastAction: !0,
                                              }),
                                              this.update())
                                            : ((this.current = ["enter", -1]),
                                              this.setState({
                                                  status: "enter",
                                                  lastAction: !1,
                                              }),
                                              this.advance()));
                                },
                            },
                            {
                                key: "exit",
                                value: function (e) {
                                    var a, t;
                                    "exit" !== (null === (a = this.current) || void 0 === a ? void 0 : a[0]) &&
                                        (0 ===
                                        this.getExitSequence(
                                            null !== (t = null === e || void 0 === e ? void 0 : e.party) && void 0 !== t
                                                ? t
                                                : null
                                        ).length
                                            ? (this.setState({
                                                  status: "exited",
                                                  lastAction: !0,
                                              }),
                                              this.update())
                                            : ((this.choice = e),
                                              (this.current = ["exit", -1]),
                                              this.setState({
                                                  status: "exit",
                                                  lastAction: !1,
                                              }),
                                              this.advance()));
                                },
                            },
                            {
                                key: "stop",
                                value: function () {
                                    null != this.current && (this.current = null);
                                },
                            },
                            {
                                key: "advance",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                    if ((this.autoAdvanceTimer.clearAll(), null != this.current)) {
                                        var a = this.currentSequence,
                                            t = this.current[1] + 1;
                                        e && this.skipNext && this.skipAnimations(),
                                            (this.skipNext = !0),
                                            null == a || t >= a.length
                                                ? (this.setState({
                                                      status: "enter" === this.state.status ? "entered" : "exited",
                                                  }),
                                                  this.stop())
                                                : ((this.current = [this.current[0], t]), this.executeCurrent()),
                                            this.update();
                                    }
                                },
                            },
                            {
                                key: "executeCurrent",
                                value: function () {
                                    if (null != this.current) {
                                        var e = this.currentSequence;
                                        if (null != e)
                                            !1 !== e[this.current[1]].call(null, this) && this.advanceAfter(0),
                                                this.current[1] >= e.length - 1 &&
                                                    this.setState({
                                                        lastAction: !0,
                                                    });
                                    }
                                },
                            },
                            {
                                key: "advanceAfter",
                                value: function (e) {
                                    var a = this;
                                    this.autoAdvanceTimer.debounce(function () {
                                        a.advance();
                                    }, e);
                                },
                            },
                        ]),
                        e
                    );
                })();
            a.default = p;
            var h = {
                empty: function () {
                    return {
                        status: "preparing",
                        lastAction: !1,
                        lines: [],
                        hold: null,
                        give: null,
                        positions: {},
                        hidden: {},
                        statuses: {},
                        flipped: {},
                        transitionStatuses: {},
                        background: "running",
                    };
                },
            };
            a.SceneState = h;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.keezerSize = a.default = void 0);
            var r = n(t(11)),
                o = n(t(3)),
                l = n(t(12)),
                i = n(t(21)),
                s = n(t(13)),
                u = n(t(0)),
                c = t(7),
                d = t(10),
                p = t(6),
                h = t(14),
                g = n(t(207)),
                f = n(t(208)),
                m = t(25),
                y = t(23),
                b = n(t(86)),
                v = t(5),
                k = (0, c.observer)("KeezerView", function (e) {
                    var a,
                        t,
                        n,
                        r,
                        o,
                        c,
                        p,
                        k = h.keezerStore.config,
                        L = null !== (a = e.variant) && void 0 !== a ? a : k.variant,
                        x = null !== (t = e.status) && void 0 !== t ? t : "neutraal",
                        F = null !== (n = e.walking) && void 0 !== n && n,
                        S = null !== (r = e.bril) && void 0 !== r ? r : k.bril,
                        P = null !== (o = e.flipped) && void 0 !== o && o,
                        q = null !== (c = e.hidden) && void 0 !== c && c,
                        C = null !== (p = e.hold) && void 0 !== p ? p : null,
                        O = u.default.useRef(null),
                        M = u.default.useMemo(
                            function () {
                                return [].concat(
                                    (0, s.default)(
                                        (0, m.flatMap)(j, function (e) {
                                            return [
                                                "all-".concat(e, "-").concat(x),
                                                "".concat(L, "-").concat(e, "-").concat(x),
                                            ];
                                        })
                                    ),
                                    ["all-benen-".concat(F ? "loopt" : "staand")]
                                );
                            },
                            [F, x, L]
                        ),
                        E = u.default.useMemo(
                            function () {
                                var e = {};
                                if (q) return e;
                                var a,
                                    t = (0, i.default)(M);
                                try {
                                    for (t.s(); !(a = t.n()).done; ) {
                                        var n = a.value;
                                        n in f.default.animLayers && (e[n] = f.default.animLayers[n]);
                                    }
                                } catch (r) {
                                    t.e(r);
                                } finally {
                                    t.f();
                                }
                                return e;
                            },
                            [q, M]
                        ),
                        D = Object.keys(E).length > 0,
                        _ = (0, y.useSimpleAnim)(D ? 4 : null),
                        A = u.default.useCallback(
                            function (e) {
                                var a = e.getAttribute("data-key");
                                if (null != a) {
                                    var t = a.split("-"),
                                        n = (0, l.default)(t, 3),
                                        r = n[0],
                                        o = n[1],
                                        i = n[2];
                                    if ("benen" === o) {
                                        if (w.includes(x)) return !1;
                                        if (("loopt" === i) !== F) return !1;
                                    } else if (i !== x) return !1;
                                    if ("all" !== r && r !== L) return !1;
                                    if ("bril" === o && !S) return !1;
                                    if (null != _ && a in E) {
                                        var s = E[a],
                                            u = e.getAttribute("data-frame");
                                        if ((null == u ? null : parseInt(u, 10)) !== (_.frame % s) + 1) return !1;
                                    }
                                    return !0;
                                }
                            },
                            [_, E, S, x, L, F]
                        );
                    u.default.useLayoutEffect(
                        function () {
                            var e = O.current;
                            if (null != e)
                                for (var a = 0, t = Array.from(e.querySelectorAll("[data-key]")); a < t.length; a++) {
                                    var n = t[a];
                                    n.style.visibility = A(n) ? "visible" : "hidden";
                                }
                        },
                        [_, E, A]
                    );
                    var N = z(k);
                    return (0, v.jsxs)(d.Column, {
                        classNames: [
                            N.keezer,
                            {
                                flipped: P,
                                hidden: q,
                            },
                        ],
                        children: [
                            (0, v.jsx)(d.SVG, {
                                svg: g.default,
                                ref: O,
                                "aria-hidden": !0,
                            }),
                            null != C &&
                                (0, v.jsx)("div", {
                                    className: N.hold,
                                    children: (0, v.jsx)(b.default, {
                                        object: {
                                            name: "objectinhand-".concat(C),
                                        },
                                        status: null,
                                    }),
                                }),
                        ],
                    });
                });
            a.default = k;
            var L = {
                width: 241,
                height: 251,
            };
            a.keezerSize = L;
            var j = ["haar", "haaroverlay", "huid", "kleding", "bril", "benen", "rest"],
                w = ["bukt", "danst", "springt"],
                z = (0, p.createUseStyles)({
                    keezer: function (e) {
                        var a;
                        return (0, o.default)(
                            (0, o.default)(
                                {
                                    position: "relative",
                                },
                                L
                            ),
                            {},
                            ((a = {
                                "&.flipped": {
                                    transform: "scaleX(-1)",
                                },
                                "&.hidden": {
                                    visibility: "hidden",
                                    opacity: 0,
                                },
                            }),
                            (0, r.default)(a, "& .haar", {
                                fill: e.hairColor,
                            }),
                            (0, r.default)(a, "& .huid", {
                                fill: e.skinColor,
                            }),
                            (0, r.default)(a, "& .kleding", {
                                fill: e.clothesColor,
                            }),
                            a)
                        );
                    },
                    hold: (0, o.default)({}, p.layout.overlay),
                });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(0)),
                o = t(7),
                l = t(10),
                i = t(6),
                s = t(38),
                u = t(23),
                c = t(5),
                d = (0, o.memo)("ObjectView", function (e) {
                    var a,
                        t,
                        n,
                        o = e.object.name,
                        i = e.status,
                        d = e.hidden,
                        h = void 0 !== d && d,
                        g = s.objects.find(function (e) {
                            return e.name === o && e.status === i;
                        }),
                        f =
                            null !==
                                (t =
                                    null !==
                                        (n = (0, u.useLayerAnim)(
                                            h
                                                ? []
                                                : null !== (a = null === g || void 0 === g ? void 0 : g.anim) &&
                                                    void 0 !== a
                                                  ? a
                                                  : []
                                        ).current) && void 0 !== n
                                        ? n
                                        : null === g || void 0 === g
                                          ? void 0
                                          : g.layer) && void 0 !== t
                                ? t
                                : null;
                    r.default.useEffect(
                        function () {
                            null == g && console.warn('Object "'.concat(o, '" not found'));
                        },
                        [g, o]
                    );
                    var m = p();
                    if (f === null) {return (0, c.jsx) (l.SVG, {size: {width: 0,height: 0,},})} else{
                    return null == g
                        ? (0, c.jsx)(l.SVG, {
                              size: {
                                  width: 140,
                                  height: 190,
                              },
                          })
                        : (0, c.jsx)(l.Column, {
                              classNames: [
                                  m.object,
                                  {
                                      hidden: h,
                                  },
                              ],
                              children: (0, c.jsx)("img", {
                                  className: m.image,
                                  src: objectenpad + "/".concat(f, ".png"),
                                  alt: o,
                                  "aria-hidden": !0,
                              }),
                          });
                }});
            a.default = d;
            var p = (0, i.createUseStyles)({
                object: {
                    "&.hidden": {
                        visibility: "hidden",
                    },
                },
                image: {
                    width: "100%",
                    height: "100%",
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(211)),
                l = (n(t(0)), t(7)),
                i = t(6),
                s = t(23),
                u = t(38),
                c = t(19),
                d = t(5),
                p = (0, o.default)(u.logo),
                h = p[0],
                g = p.slice(1),
                f = (0, l.memo)("AnimatedLogo", function () {
                    var e = (0, s.useLayerAnim)(g, 8),
                        a = m();

                    function t(e) {
                        var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return (0, d.jsx)("img", {
                            src: logopad + "/".concat(e, ".png"),
                            alt: a,
                        });
                    }
                    return (0, d.jsxs)("div", {
                        className: a.animatedLogo,
                        children: [t(h, "Keezer's Quest"), null != e.current && t(e.current)],
                    });
                });
            a.default = f;
            var m = (0, i.createUseStyles)({
                animatedLogo: (0, r.default)(
                    (0, r.default)({}, i.layout.overlay),
                    {},
                    {
                        "& img": (0, r.default)((0, r.default)({}, i.layout.overlay), c.sceneSize),
                    }
                ),
            });
        },
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            t(92);
            n(t(0));
            var r = n(t(27)),
                o = n(t(157)),
                l = t(54),
                i = n(t(51)),
                s = t(5);
            r.default.render(
                (0, s.jsx)(l.JssProvider, {
                    jss: i.default,
                    children: (0, s.jsx)(o.default, {}),
                }),
                document.getElementById("root"),
                function () {
                    var e;
                    null === (e = document.getElementById("splash")) || void 0 === e || e.remove();
                }
            );
        },
        ,
        function (e, a, t) {
            "use strict";
            t(93), t(95), t(102);
        },
        function (e, a, t) {
            "use strict";
            var n = t(9),
                r = [
                    /`shouldComponentUpdate`.*`observer`.*mobx-react/,
                    /componentWillMount has been renamed/,
                    /Attempted import error: /,
                    /export '.*' \(reexported as '.*'\)/,
                    /no-redeclare/,
                    /DevTools failed to load SourceMap:/,
                    /Critical dependency: the request of a dependency is an expression/,
                ],
                o = console.warn;
            console.warn = function () {
                for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                ("string" === typeof a[0] &&
                    (0, n.some)(r, function (e) {
                        return !!e.test(a[0]);
                    })) ||
                    o.apply(this, a);
            };
        },
        ,
        function (e, a, t) {
            "use strict";
            (function (e) {
                var a = t(96);
                var n = (function () {
                    try {
                        return getCookie("kqo_logginglevel");
                    } catch (e) {
                        return console.warn("Could not read log level from local storage: " + e.message), "info";
                    }
                })();
                null != n &&
                    (0, a.configure)({
                        logLevel: n,
                    }),
                    Object.assign(e, {
                        setLogLevel: function (e) {
                            setCookie("kqo_logginglevel", e, 365),
                                (0, a.configure)({
                                    logLevel: e,
                                });
                        },
                    });
            }).call(this, t(29));
        },
        function (e, a, t) {
            "use strict";
            var n = t(30);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {};
            Object.defineProperty(a, "default", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            });
            var o = n(t(98));
            Object.keys(o).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === o[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return o[e];
                            },
                        }));
            });
        },
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                configure: !0,
            };
            Object.defineProperty(a, "default", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
                Object.defineProperty(a, "configure", {
                    enumerable: !0,
                    get: function () {
                        return l.configure;
                    },
                });
            var o = n(t(99)),
                l = t(68),
                i = t(101);
            Object.keys(i).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === i[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return i[e];
                            },
                        }));
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(12)),
                l = n(t(13)),
                i = n(t(21)),
                s = n(t(17)),
                u = n(t(18)),
                c = n(t(11)),
                d = n(t(100)),
                p = t(9),
                h = n(t(68)),
                g = (function () {
                    function e(a) {
                        (0, s.default)(this, e), (0, c.default)(this, "component", void 0), (this.component = a);
                    }
                    return (
                        (0, u.default)(
                            e,
                            [
                                {
                                    key: "debug",
                                    value: function (e, a) {
                                        this.log("debug", e, a);
                                    },
                                },
                                {
                                    key: "test",
                                    value: function () {
                                        var e;
                                        h.default.testing && (e = console).log.apply(e, arguments);
                                    },
                                },
                                {
                                    key: "info",
                                    value: function (e, a) {
                                        this.log("info", e, a);
                                    },
                                },
                                {
                                    key: "warning",
                                    value: function (e, a) {
                                        this.log("warning", e, a);
                                    },
                                },
                                {
                                    key: "error",
                                    value: function (e, a) {
                                        this.log("error", e, a);
                                    },
                                },
                                {
                                    key: "emit",
                                    value: function (a, t, n) {
                                        var r,
                                            o = "string" === typeof t ? t : t.text,
                                            l = (0, i.default)(e.listeners);
                                        try {
                                            for (l.s(); !(r = l.n()).done; ) {
                                                (0, r.value)(this.component, a, o, n);
                                            }
                                        } catch (s) {
                                            l.e(s);
                                        } finally {
                                            l.f();
                                        }
                                    },
                                },
                                {
                                    key: "shouldLog",
                                    value: function (e) {
                                        return this.numericLevel(e) >= this.numericLevel(h.default.logLevel);
                                    },
                                },
                                {
                                    key: "numericLevel",
                                    value: function (e) {
                                        switch (e) {
                                            case "debug":
                                                return 1;
                                            case "info":
                                                return 2;
                                            case "warning":
                                                return 3;
                                            case "error":
                                                return 4;
                                        }
                                    },
                                },
                                {
                                    key: "log",
                                    value: function (e, a, t) {
                                        if (this.shouldLog(e)) {
                                            var n,
                                                r = this.formatMessage(e, a);
                                            if (null == t) (n = console).log.apply(n, (0, l.default)(r));
                                            else if (console.groupCollapsed instanceof Function) {
                                                var o;
                                                (o = console).groupCollapsed.apply(o, (0, l.default)(r)),
                                                    this.logDetails(t),
                                                    console.groupEnd();
                                            } else {
                                                var i;
                                                (i = console).log.apply(i, (0, l.default)(r)), this.logDetails(t);
                                            }
                                            var s = "string" === typeof a ? a : a.text;
                                            this.emit(e, s, t);
                                        }
                                    },
                                },
                                {
                                    key: "logDetails",
                                    value: function (e) {
                                        if (e instanceof Array) e.forEach(this.logDetail.bind(this));
                                        else if ((0, p.isPlainObject)(e))
                                            for (var a = 0, t = Object.entries(e); a < t.length; a++) {
                                                var n = (0, o.default)(t[a], 2),
                                                    r = n[0],
                                                    l = n[1];
                                                console.log("%c".concat(r, ":"), "font-weight: bold;"),
                                                    this.logDetail(l);
                                            }
                                        else this.logDetail(e);
                                    },
                                },
                                {
                                    key: "logDetail",
                                    value: function (e) {
                                        var a;
                                        (0, p.isPlainObject)(e) && null != e.text && null != e.style
                                            ? (a = console).log.apply(
                                                  a,
                                                  (0, l.default)(this.formatDetail(e.text, e.style))
                                              )
                                            : console.log(e);
                                    },
                                },
                                {
                                    key: "formatMessage",
                                    value: function (e, a) {
                                        var t = {};
                                        return (
                                            (function (e) {
                                                return "string" !== typeof e;
                                            })(a) && (Object.assign(t, a.styles), (a = a.text)),
                                            console.groupCollapsed instanceof Function
                                                ? [
                                                      "%c[".concat(this.component, "] %c").concat(a),
                                                      "font-weight: bold;",
                                                      "font-weight: normal; ".concat(
                                                          (0, d.default)(
                                                              (0, r.default)(
                                                                  (0, r.default)({}, this.stylesForLevel(e)),
                                                                  t
                                                              )
                                                          )
                                                      ),
                                                  ]
                                                : [
                                                      "["
                                                          .concat(this.component, "] ")
                                                          .concat(e.toUpperCase(), ": ")
                                                          .concat(a),
                                                  ]
                                        );
                                    },
                                },
                                {
                                    key: "formatDetail",
                                    value: function (e, a) {
                                        return console.groupCollapsed instanceof Function ? ["%c".concat(e), a] : [e];
                                    },
                                },
                                {
                                    key: "stylesForLevel",
                                    value: function (e) {
                                        switch (e) {
                                            case "info":
                                                return {
                                                    color: "#3887D3",
                                                };
                                            case "warning":
                                                return {
                                                    backgroundColor: "yellow",
                                                };
                                            case "error":
                                                return {
                                                    color: "red",
                                                };
                                            default:
                                                return {};
                                        }
                                    },
                                },
                            ],
                            [
                                {
                                    key: "debug",
                                    value: function (e, a, t) {
                                        new this(e).debug(a, t);
                                    },
                                },
                                {
                                    key: "test",
                                    value: function (e, a, t) {
                                        new this(e).test(a, t);
                                    },
                                },
                                {
                                    key: "info",
                                    value: function (e, a, t) {
                                        new this(e).info(a, t);
                                    },
                                },
                                {
                                    key: "warning",
                                    value: function (e, a, t) {
                                        new this(e).warning(a, t);
                                    },
                                },
                                {
                                    key: "error",
                                    value: function (e, a, t) {
                                        new this(e).error(a, t);
                                    },
                                },
                                {
                                    key: "addListener",
                                    value: function (e) {
                                        var a = this;
                                        return (
                                            this.listeners.add(e),
                                            {
                                                remove: function () {
                                                    a.listeners.delete(e);
                                                },
                                            }
                                        );
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })();
            (a.default = g), (0, c.default)(g, "listeners", new Set());
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = function (e) {
                    for (var a = [], t = 0, r = Object.keys(e); t < r.length; t++) {
                        var o = r[t];
                        a.push("".concat((0, n.kebabCase)(o), ": ").concat(e[o]));
                    }
                    return a.join(";");
                });
            var n = t(9);
        },
        function (e, a, t) {},
        function (e, a, t) {
            "use strict";
            var n = t(30),
                r = t(2),
                o = t(69),
                l = n(t(14));
            (0, o.assignGlobal)({
                toJS: r.toJS,
            }),
                (0, o.assignGlobal)(l);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = a.AppStore = void 0);
            var r = n(t(21)),
                o = n(t(34)),
                l = n(t(35)),
                i = n(t(17)),
                s = n(t(18)),
                u = n(t(11)),
                c = t(2),
                d = t(36),
                p = t(9),
                h = (function () {
                    function e() {
                        var a = this;
                        (0, i.default)(this, e),
                            (0, u.default)(this, "readyState", "initializing"),
                            (0, u.default)(this, "online", window.navigator.onLine),
                            (0, u.default)(this, "demoMode", void 0),
                            (0, u.default)(this, "currentScreen", "splash"),
                            (0, u.default)(this, "inventoryShown", !1),
                            (0, u.default)(this, "fullScreen", !1),
                            (0, u.default)(this, "handleFullScreenChange", function () {
                                a.fullScreen = null != document.fullscreenElement;
                            }),
                            (0, u.default)(
                                this,
                                "onLoadComplete",
                                (0, l.default)(
                                    o.default.mark(function e() {
                                        var t;
                                        return o.default.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return (
                                                            (0, c.reaction)(
                                                                function () {
                                                                    return a.persistedState;
                                                                },
                                                                function (e) {
                                                                    return a.save(e);
                                                                }
                                                            ),
                                                            a.save(a.persistedState),
                                                            (e.next = 4),
                                                            f()
                                                        );
                                                    case 4:
                                                        (t = e.sent),
                                                            (0, c.runInAction)(function () {
                                                                a.readyState = t ? "ready" : "error";
                                                            });
                                                    case 6:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                )
                            ),
                            (0, c.makeAutoObservable)(this);
                        var t = new URLSearchParams(document.location.search);
                        (t.has("scene") || t.has("result") || t.has("cut") || t.has("credits")) &&
                            this.navigateTo("game"),
                            (this.demoMode = t.has("demo"));
                        var n = document.querySelector("#root");
                        null === n ||
                            void 0 === n ||
                            n.addEventListener("fullscreenchange", this.handleFullScreenChange);
                    }
                    return (
                        (0, s.default)(e, [
                            {
                                key: "ready",
                                get: function () {
                                    return "ready" === this.readyState;
                                },
                            },
                            {
                                key: "navigateTo",
                                value: function (e) {
                                    this.currentScreen = e;
                                },
                            },
                            {
                                key: "showInventory",
                                value: function () {
                                    this.inventoryShown = !0;
                                },
                            },
                            {
                                key: "hideInventory",
                                value: function () {
                                    this.inventoryShown = !1;
                                },
                            },
                            {
                                key: "toggleInventory",
                                value: function () {
                                    this.inventoryShown ? this.hideInventory() : this.showInventory();
                                },
                            },
                            {
                                key: "fullScreenEnabled",
                                get: function () {
                                    if (!document.fullscreenEnabled) return !1;
                                    var e = document.querySelector("#root");
                                    if (null == e) return !1;
                                    return (0, p.some)(
                                        [
                                            "requestFullscreen",
                                            "webkitRequestFullscreen",
                                            "msRequestFullscreen",
                                            "mozRequestFullscreen",
                                        ],
                                        function (a) {
                                            return (0, p.isFunction)(e[a]);
                                        }
                                    );
                                },
                            },
                            {
                                key: "toggleFullScreen",
                                value: function () {
                                    var e = document.querySelector("#root");
                                    if (null != e)
                                        for (
                                            var a = !this.fullScreen,
                                                t = a ? e : document,
                                                n = 0,
                                                r = a
                                                    ? [
                                                          "requestFullscreen",
                                                          "webkitRequestFullscreen",
                                                          "msRequestFullscreen",
                                                          "mozRequestFullscreen",
                                                      ]
                                                    : [
                                                          "exitFullscreen",
                                                          "webkitExitFullscreen",
                                                          "msExitFullscreen",
                                                          "mozExitFullscreen",
                                                      ];
                                            n < r.length;
                                            n++
                                        ) {
                                            var o = r[n];
                                            if ((0, p.isFunction)(t[o])) {
                                                t[o]();
                                                break;
                                            }
                                        }
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    return (function () {
                                        return g.apply(this, arguments);
                                    })().then(this.onLoadComplete);
                                },
                            },
                            {
                                key: "deinit",
                                value: function () {
                                    !(function () {
                                        var e,
                                            a = (0, r.default)((0, d.allStores)());
                                        try {
                                            for (a.s(); !(e = a.n()).done; ) {
                                                var t = e.value;
                                                t !== y && "deinit" in t && (0, p.isFunction)(t.deinit) && t.deinit();
                                            }
                                        } catch (n) {
                                            a.e(n);
                                        } finally {
                                            a.f();
                                        }
                                    })();
                                },
                            },
                            {
                                key: "save",
                                value: function (e) {
                                    (0, d.persistState)(e);
                                },
                            },
                            {
                                key: "persistedState",
                                get: function () {
                                    var a,
                                        t = {},
                                        n = (0, r.default)((0, d.allStores)());
                                    try {
                                        for (n.s(); !(a = n.n()).done; ) {
                                            var o = a.value;
                                            o instanceof e ||
                                                ((0, d.supportsPersistence)(o) &&
                                                    (t[o.persistenceKey] = (0, c.toJS)(o.persist(), {
                                                        recurseEverything: !0,
                                                    })));
                                        }
                                    } catch (l) {
                                        n.e(l);
                                    } finally {
                                        n.f();
                                    }
                                    return t;
                                },
                            },
                        ]),
                        e
                    );
                })();

            function g() {
                return (g = (0, l.default)(
                    o.default.mark(function e() {
                        var a, t, n, l, i;
                        return o.default.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (e.prev = 0),
                                                (a = (0, d.loadPersistedState)()),
                                                (t = (0, r.default)((0, d.allStores)())),
                                                (e.prev = 3),
                                                t.s();
                                        case 5:
                                            if ((n = t.n()).done) {
                                                e.next = 18;
                                                break;
                                            }
                                            if (!((l = n.value) instanceof h)) {
                                                e.next = 9;
                                                break;
                                            }
                                            return e.abrupt("continue", 16);
                                        case 9:
                                            if ((0, d.supportsPersistence)(l)) {
                                                e.next = 11;
                                                break;
                                            }
                                            return e.abrupt("continue", 16);
                                        case 11:
                                            if (null != (i = a[l.persistenceKey])) {
                                                e.next = 14;
                                                break;
                                            }
                                            return e.abrupt("continue", 16);
                                        case 14:
                                            return (e.next = 16), l.rehydrate(i);
                                        case 16:
                                            e.next = 5;
                                            break;
                                        case 18:
                                            e.next = 23;
                                            break;
                                        case 20:
                                            (e.prev = 20), (e.t0 = e.catch(3)), t.e(e.t0);
                                        case 23:
                                            return (e.prev = 23), t.f(), e.finish(23);
                                        case 26:
                                            e.next = 31;
                                            break;
                                        case 28:
                                            (e.prev = 28),
                                                (e.t1 = e.catch(0)),
                                                console.warn("Error while loading persisted state: ", e.t1.stack);
                                        case 31:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [
                                [0, 28],
                                [3, 20, 23, 26],
                            ]
                        );
                    })
                )).apply(this, arguments);
            }

            function f() {
                return m.apply(this, arguments);
            }

            function m() {
                return (m = (0, l.default)(
                    o.default.mark(function e() {
                        var a, t, n;
                        return o.default.wrap(
                            function (e) {
                                for (;;)
                                    switch ((e.prev = e.next)) {
                                        case 0:
                                            (a = (0, r.default)((0, d.allStores)())), (e.prev = 1), a.s();
                                        case 3:
                                            if ((t = a.n()).done) {
                                                e.next = 15;
                                                break;
                                            }
                                            if ((n = t.value) !== y) {
                                                e.next = 7;
                                                break;
                                            }
                                            return e.abrupt("continue", 13);
                                        case 7:
                                            if (!("init" in n) || !(0, p.isFunction)(n.init)) {
                                                e.next = 13;
                                                break;
                                            }
                                            return (e.next = 10), n.init();
                                        case 10:
                                            if (!1 !== e.sent) {
                                                e.next = 13;
                                                break;
                                            }
                                            return e.abrupt("return", !1);
                                        case 13:
                                            e.next = 3;
                                            break;
                                        case 15:
                                            e.next = 20;
                                            break;
                                        case 17:
                                            (e.prev = 17), (e.t0 = e.catch(1)), a.e(e.t0);
                                        case 20:
                                            return (e.prev = 20), a.f(), e.finish(20);
                                        case 23:
                                            return e.abrupt("return", !0);
                                        case 24:
                                        case "end":
                                            return e.stop();
                                    }
                            },
                            e,
                            null,
                            [[1, 17, 20, 23]]
                        );
                    })
                )).apply(this, arguments);
            }
            a.AppStore = h;
            var y = (0, d.register)(new h()),
                b = y;
            a.default = b;
        },
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.onLogIn = function (e, a, t) {
                    return i.apply(this, arguments);
                }),
                (a.onLogOut = function (e) {
                    return s.apply(this, arguments);
                }),
                (a.onAfterLogOut = function (e) {
                    return u.apply(this, arguments);
                });
            var r = n(t(34)),
                o = n(t(35)),
                l = t(9);

            function i() {
                return (i = (0, o.default)(
                    r.default.mark(function e(a, t, n) {
                        return r.default.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (null != a) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if ((0, l.isFunction)(a.onLogIn)) {
                                            e.next = 4;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return (e.next = 6), a.onLogIn(t, n);
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }

            function s() {
                return (s = (0, o.default)(
                    r.default.mark(function e(a) {
                        return r.default.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (null != a) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if ((0, l.isFunction)(a.onLogOut)) {
                                            e.next = 4;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return (e.next = 6), a.onLogOut();
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }

            function u() {
                return (u = (0, o.default)(
                    r.default.mark(function e(a) {
                        return r.default.wrap(function (e) {
                            for (;;)
                                switch ((e.prev = e.next)) {
                                    case 0:
                                        if (null != a) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        if ((0, l.isFunction)(a.onAfterLogOut)) {
                                            e.next = 4;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 4:
                                        return (e.next = 6), a.onAfterLogOut();
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                        }, e);
                    })
                )).apply(this, arguments);
            }
        },
        function (e, a, t) {
            "use strict";
            (function (e) {
                Object.defineProperty(a, "__esModule", {
                    value: !0,
                }),
                    (a.supportsPersistence = function (e) {
                        if (null == e) return !1;
                        if ("string" !== typeof e.persistenceKey) return !1;
                        if (!(0, n.isFunction)(e.persist)) return !1;
                        if (!(0, n.isFunction)(e.rehydrate)) return !1;
                        return !0;
                    }),
                    (a.persistState = function (e) {
                        return null; //Persistentie-controle uitgezet omdat die een extra cookie geeft en alles binnen een sessie toch met globale variabelen werkt.
                    }),
                    (a.loadPersistedState = function () {
                        return JSON.parse("{}");
                    });
                var n = t(9);
                var r = "persist",
                    o = null;
            }).call(this, t(29));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.register = function (e) {
                    return o.add(e), e;
                }),
                (a.allStores = function () {
                    return (0, r.default)(o);
                });
            var r = n(t(13)),
                o = new Set();
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = a.AssetsStore = void 0);
            var r = n(t(12)),
                o = n(t(13)),
                l = n(t(34)),
                i = n(t(35)),
                s = n(t(17)),
                u = n(t(18)),
                c = n(t(11)),
                d = t(36),
                p = t(2),
                h = t(38),
                g = n(t(137)),
                f = (function () {
                    function e() {
                        (0, s.default)(this, e),
                            (0, c.default)(this, "imageCount", h.layers.length + h.logo.length),
                            (0, c.default)(this, "imageLoaded", 0),
                            (0, c.default)(this, "audioPreloaders", new Map()),
                            (0, c.default)(this, "audioBuffers", new Map()),
                            (0, p.makeAutoObservable)(this);
                    }
                    return (
                        (0, u.default)(e, [
                            {
                                key: "total",
                                get: function () {
                                    var e = Array.from(this.audioPreloaders.values())
                                        .map(function (e) {
                                            var a;
                                            return null !== (a = e.total) && void 0 !== a ? a : 0;
                                        })
                                        .reduce(function (e, a) {
                                            return e + a;
                                        }, 0);
                                    return this.imageCount + e;
                                },
                            },
                            {
                                key: "loaded",
                                get: function () {
                                    var e = Array.from(this.audioPreloaders.values())
                                        .map(function (e) {
                                            var a;
                                            return null !== (a = e.loaded) && void 0 !== a ? a : 0;
                                        })
                                        .reduce(function (e, a) {
                                            return e + a;
                                        }, 0);
                                    return this.imageLoaded + e;
                                },
                            },
                            {
                                key: "init",
                                value: (function () {
                                    var e = (0, i.default)(
                                        l.default.mark(function e() {
                                            return l.default.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.next = 2), this.preloadImages();
                                                            case 2:
                                                                return (e.next = 4), this.preloadAudio();
                                                            case 4:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "preloadImages",
                                value: (function () {
                                    var e = (0, i.default)(
                                        l.default.mark(function e() {
                                            var a,
                                                t = this;
                                            return l.default.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (a = new h.ImagePreloader()).addPath.apply(
                                                                    a,
                                                                    (0, o.default)(
                                                                        h.layers.map(function (e) {
                                                                            return e.path;
                                                                        })
                                                                    )
                                                                ),
                                                                a.addPath.apply(
                                                                    a,
                                                                    (0, o.default)(
                                                                        h.logo.map(function (e) {
                                                                            return logopad + "/".concat(e, ".png");
                                                                        })
                                                                    )
                                                                ),
                                                                (a.onPreloadImage = (0, p.action)(function () {
                                                                    t.imageLoaded += 1;
                                                                })),
                                                                (e.next = 6),
                                                                a.preload()
                                                            );
                                                        case 6:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "preloadAudio",
                                value: (function () {
                                    var e = (0, i.default)(
                                        l.default.mark(function e() {
                                            return l.default.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (e.next = 2), this.preloadAudioFiles(h.tracks);
                                                            case 2:
                                                                return (e.next = 4), this.preloadAudioFiles(h.sfx);
                                                            case 4:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "preloadAudioFiles",
                                value: (function () {
                                    var e = (0, i.default)(
                                        l.default.mark(function e(a) {
                                            var t,
                                                n = this;
                                            return l.default.wrap(function (e) {
                                                for (;;)
                                                    switch ((e.prev = e.next)) {
                                                        case 0:
                                                            return (
                                                                (t = Object.entries(a).map(
                                                                    (function () {
                                                                        var e = (0, i.default)(
                                                                            l.default.mark(function e(a) {
                                                                                var t, o, i, s, u;
                                                                                return l.default.wrap(function (e) {
                                                                                    for (;;)
                                                                                        switch ((e.prev = e.next)) {
                                                                                            case 0:
                                                                                                return (
                                                                                                    (t = (0, r.default)(
                                                                                                        a,
                                                                                                        2
                                                                                                    )),
                                                                                                    (o = t[0]),
                                                                                                    (i = t[1]),
                                                                                                    (s = new g.default(
                                                                                                        i
                                                                                                    )),
                                                                                                    (0, p.runInAction)(
                                                                                                        function () {
                                                                                                            n.audioPreloaders.set(
                                                                                                                o,
                                                                                                                s
                                                                                                            );
                                                                                                        }
                                                                                                    ),
                                                                                                    (e.next = 5),
                                                                                                    s.preload()
                                                                                                );
                                                                                            case 5:
                                                                                                if (
                                                                                                    null != (u = e.sent)
                                                                                                ) {
                                                                                                    e.next = 8;
                                                                                                    break;
                                                                                                }
                                                                                                return e.abrupt(
                                                                                                    "return"
                                                                                                );
                                                                                            case 8:
                                                                                                (0, p.runInAction)(
                                                                                                    function () {
                                                                                                        n.audioBuffers.set(
                                                                                                            o,
                                                                                                            u
                                                                                                        ),
                                                                                                            n.audioPreloaders.delete(
                                                                                                                o
                                                                                                            );
                                                                                                    }
                                                                                                );
                                                                                            case 9:
                                                                                            case "end":
                                                                                                return e.stop();
                                                                                        }
                                                                                }, e);
                                                                            })
                                                                        );
                                                                        return function (a) {
                                                                            return e.apply(this, arguments);
                                                                        };
                                                                    })()
                                                                )),
                                                                (e.next = 3),
                                                                Promise.all(t)
                                                            );
                                                        case 3:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                            }, e);
                                        })
                                    );
                                    return function (a) {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                        ]),
                        e
                    );
                })();
            a.AssetsStore = f;
            var m = (0, d.register)(new f());
            a.default = m;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(34)),
                o = n(t(35)),
                l = n(t(17)),
                i = n(t(18)),
                s = n(t(11)),
                u = t(2),
                c = (function () {
                    function e() {
                        (0, l.default)(this, e),
                            (0, s.default)(this, "onPreloadImage", null),
                            (0, s.default)(this, "paths", []),
                            (0, u.makeAutoObservable)(this);
                    }
                    return (
                        (0, i.default)(e, [
                            {
                                key: "addPath",
                                value: function () {
                                    var e;
                                    (e = this.paths).push.apply(e, arguments);
                                },
                            },
                            {
                                key: "preload",
                                value: (function () {
                                    var e = (0, o.default)(
                                        r.default.mark(function e() {
                                            var a,
                                                t = this;
                                            return r.default.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (a = this.paths.map(function (e) {
                                                                        return t.preloadPath(e);
                                                                    })),
                                                                    (e.next = 3),
                                                                    Promise.all(a)
                                                                );
                                                            case 3:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "preloadPath",
                                value: function (e) {
                                    var a = this;
                                    return new Promise(function (t) {
                                        var n = new Image();
                                        (n.onerror = function (n, r, o, l, i) {
                                            var s,
                                                u,
                                                c =
                                                    null !== (s = null === i || void 0 === i ? void 0 : i.message) &&
                                                    void 0 !== s
                                                        ? s
                                                        : "string" === typeof n
                                                          ? n
                                                          : "unknown error";
                                            console.warn("Could not preload '".concat(e, "': ").concat(c)),
                                                null === (u = a.onPreloadImage) || void 0 === u || u.call(a, !1),
                                                t();
                                        }),
                                            (n.onload = function () {
                                                var e;
                                                null === (e = a.onPreloadImage) || void 0 === e || e.call(a, !0), t();
                                            }),
                                            (n.src = e);
                                    });
                                },
                            },
                        ]),
                        e
                    );
                })();
            a.default = c;
        },
        function (e, a) {
            e.exports = {
                attributes: {
                    width: "16px",
                    height: "32px",
                    viewBox: "0 0 16 32",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                },
                content: '<polygon points="0 0 16 16 0 32"></polygon>',
            };
        },
        function (e, a) {
            e.exports = {
                attributes: {
                    width: "110px",
                    height: "40px",
                    viewBox: "0 0 110 40",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                },
                content:
                    '<title>Artboard</title>     <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">         <g id="keezer-bril-danst-f2" fill="#000000" fill-rule="nonzero">             <polygon id="Path" points="10 0 20 0 30 0 40 0 50 0 50 10 60 10 60 0 70 0 80 0 90 0 100 0 110 0 110 10 110 20 110 30 110 40 100 40 90 40 80 40 70 40 70 30 80 30 90 30 100 30 100 20 100 10 90 10 80 10 70 10 70 20 70 30 60 30 60 20 50 20 50 30 40 30 40 20 40 10 30 10 20 10 10 10 10 20 10 30 20 30 30 30 40 30 40 40 30 40 20 40 10 40 0 40 0 30 0 20 0 10 0 0"></polygon>         </g>     </g>',
            };
        },
        function (e, a) {
            e.exports = {
                attributes: {
                    width: "16px",
                    height: "32px",
                    viewBox: "0 0 16 32",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                },
                content: "",
            };
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.flatMap = function (e, a) {
                    var t,
                        n = [],
                        l = 0,
                        i = (0, o.default)(e);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var s = t.value;
                            n.push.apply(n, (0, r.default)(a(s, l++)));
                        }
                    } catch (u) {
                        i.e(u);
                    } finally {
                        i.f();
                    }
                    return n;
                });
            var r = n(t(13)),
                o = n(t(21));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.camelCaseKey = u),
                (a.snakeCaseKey = c),
                (a.camelCaseKeys = d),
                (a.snakeCaseKeys = function e(a) {
                    return (0, i.isPlainObject)(a)
                        ? Object.entries(a).reduce(function (a, t) {
                              var n = (0, l.default)(t, 2),
                                  i = n[0],
                                  s = n[1];
                              return (0, o.default)((0, o.default)({}, a), {}, (0, r.default)({}, c(i), e(s)));
                          }, {})
                        : (0, i.isArray)(a)
                          ? a.map(d)
                          : a;
                });
            var r = n(t(11)),
                o = n(t(3)),
                l = n(t(12)),
                i = t(9),
                s = ["id", "url"];

            function u(e) {
                for (
                    var a = /[^a-z0-9A-Z]+|[A-Z]/,
                        t = e,
                        n = "",
                        r = "",
                        o = e.match(a),
                        l = function (a) {
                            t === e
                                ? (r += a.toLowerCase())
                                : s.includes(a)
                                  ? (r += a.toUpperCase())
                                  : (r += a.charAt(0).toUpperCase() + a.slice(1).toLowerCase());
                        };
                    null != o;

                )
                    l((n += t.slice(0, o.index).toLowerCase())),
                        (n = o[0].replace(/[^a-zA-Z0-9]/gi, "")),
                        (o = (t = t.slice(o.index + o[0].length)).match(a));
                return l(n + t), r;
            }

            function c(e) {
                return (0, i.snakeCase)(e);
            }

            function d(e) {
                return (0, i.isPlainObject)(e)
                    ? Object.entries(e).reduce(function (e, a) {
                          var t = (0, l.default)(a, 2),
                              n = t[0],
                              i = t[1];
                          return (0, o.default)((0, o.default)({}, e), {}, (0, r.default)({}, u(n), d(i)));
                      }, {})
                    : (0, i.isArray)(e)
                      ? e.map(d)
                      : e;
            }
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.closest = function (e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!(e instanceof Node)) return null;
                    for (var n = e; null !== n; n = n.parentNode) {
                        if (n === t.until) return null;
                        if (n instanceof Element && a(n)) return n;
                    }
                    return null;
                }),
                (a.autoFocusFirst = function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = a.fields,
                        n = void 0 === t || t,
                        i = a.buttons,
                        s = void 0 !== i && i,
                        u = a.select,
                        c = void 0 !== u && u,
                        d = n && s ? r : n ? o : l,
                        p = Array.from(e.querySelectorAll(d)),
                        h = p[0];
                    null === h || void 0 === h || h.focus(), c && h instanceof HTMLInputElement && h.select();
                }),
                (a.isScrolledElement = function (e) {
                    if (!(e instanceof HTMLElement)) return !1;
                    var a = window.getComputedStyle(e).overflow;
                    if ("hidden" === a || "visible" === a) return !1;
                    if ("scroll" === a) return !0;
                    return e.scrollHeight > e.clientHeight;
                }),
                (a.isInteractiveElement = s),
                (a.focusFirst = function (e) {
                    var a = Array.from(e.querySelectorAll("input, select, textarea, button"));
                    a.sort(function (e, a) {
                        return e instanceof HTMLElement &&
                            a instanceof HTMLElement &&
                            null != e.tabIndex &&
                            null != a.tabIndex
                            ? e.tabIndex - a.tabIndex
                            : 0;
                    });
                    for (var t = 0, n = a; t < n.length; t++) {
                        var r = n[t];
                        if (s(r)) return void r.focus();
                    }
                }),
                (a.FOCUSABLE_BUTTONS = a.FOCUSABLE_FIELDS = a.FOCUSABLE_ALL = a.FOCUS_EXCLUDE = void 0);
            var n = ':not([disabled]):not([tabindex="-1"])';
            a.FOCUS_EXCLUDE = n;
            var r = ["button", "input", "select", "textarea", "[tabindex]", "[href]"]
                .map(function (e) {
                    return "".concat(e).concat(n);
                })
                .join(", ");
            a.FOCUSABLE_ALL = r;
            var o = ['input:not([type="button"]):not([type="submit"])', "select", "textarea"]
                .map(function (e) {
                    return "".concat(e).concat(n);
                })
                .join(", ");
            a.FOCUSABLE_FIELDS = o;
            var l = ['input:[type="button"], input[type="submit"]', "button"]
                .map(function (e) {
                    return "".concat(e).concat(n);
                })
                .join(", ");
            a.FOCUSABLE_BUTTONS = l;
            var i = ["input", "select", "textarea", "button"];

            function s(e) {
                if (!(e instanceof HTMLElement)) return !1;
                var a = e.tagName.toLowerCase();
                return (
                    !("a" !== a || !e.hasAttribute("href")) ||
                    !("label" !== a || !e.hasAttribute("for")) ||
                    ("label" === a && null != e.querySelector(i.join(", "))) ||
                    "button" === e.getAttribute("role") ||
                    !!e.hasAttribute("tabindex") ||
                    !!e.isContentEditable ||
                    i.includes(a)
                );
            }
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.objectEquals = function (e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.isEqual;
                    if (Object.keys(e).length !== Object.keys(a).length) return !1;
                    for (var r = 0, o = Object.keys(e); r < o.length; r++) {
                        var l = o[r];
                        if (!t(e[l], a[l])) return !1;
                    }
                    return !0;
                }),
                (a.arrayEquals = function (e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n.isEqual;
                    if (e.length !== a.length) return !1;
                    for (var r = 0; r < e.length; r++) if (!t(e[r], a[r])) return !1;
                    return !0;
                });
            var n = t(9);
        },
        function (e, a, t) {
            "use strict";

            function n(e) {
                return "TouchEvent" in window && e instanceof TouchEvent;
            }
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.getClientPoint = function (e) {
                    return e instanceof MouseEvent
                        ? {
                              x: e.clientX,
                              y: e.clientY,
                          }
                        : e.touches.length > 0
                          ? {
                                x: e.touches[0].clientX,
                                y: e.touches[0].clientY,
                            }
                          : null;
                }),
                (a.rectContainsPoint = function (e, a) {
                    if (a.x < e.left || a.x > e.left + e.width) return !1;
                    if (a.y < e.top || a.y > e.top + e.height) return !1;
                    return !0;
                }),
                (a.isRightMouse = function (e) {
                    if (n(e)) return !1;
                    return 0 !== e.button;
                }),
                (a.isTouchEvent = n);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.objectID = function (e) {
                    if (null == e) return e;
                    if ("object" !== (0, r.default)(e) && "function" !== typeof e) return e;
                    if (o.has(e)) return o.get(e);
                    var a = l++;
                    return o.set(e, a), a;
                });
            var r = n(t(71)),
                o = new WeakMap(),
                l = 0;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.childrenOfType = function (e, a) {
                    return r.default.Children.toArray(e).filter(function (e) {
                        return !!r.default.isValidElement(e) && e.type === a;
                    });
                }),
                (a.childrenNotOfType = function (e, a) {
                    return r.default.Children.toArray(e).filter(function (e) {
                        return !r.default.isValidElement(e) || !a.includes(e.type);
                    });
                }),
                (a.isReactText = function (e) {
                    return "string" === typeof e || "number" === typeof e;
                }),
                (a.isReactComponent = function (e) {
                    if ((0, o.isPlainObject)(e) && null != e.$$typeof) return !0;
                    if ((0, o.isFunction)(e)) return !0;
                    return !1;
                });
            var r = n(t(0)),
                o = t(9);
        },
        ,
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.patternToRegExp = function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = (0, n.escapeRegExp)(e);
                    a.wildcards && (t = t.replace(/\\\*/g, "(.*?)"));
                    !1 !== a.anchor && (t = "^".concat(t, "$"));
                    return new RegExp(t, a.modifiers);
                }),
                (a.parseRegExp = function (e) {
                    return /^\/(.*)\/([img]+)?$/.test(e) ? new RegExp(RegExp.$1, RegExp.$2) : new RegExp(e);
                });
            var n = t(9);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = a.RUNNING_SPEED = void 0);
            var r = n(t(13)),
                o = (0, t(26).buildActionSequences)(function (e, a) {
                    return {
                        prepare: function () {
                            return [].concat((0, r.default)(e.prepare()), [
                                function (e) {
                                    return e.setPosition("henk-trol", {
                                        offscreen: "right",
                                    });
                                },
                            ]);
                        },
                        enter: function () {
                            var a = [];
                            return (
                                a.push(function (e) {
                                    return e.setPosition(
                                        "henk-trol",
                                        {
                                            opponent: 1,
                                        },
                                        l,
                                        {
                                            "henk-trol": "rent",
                                        }
                                    );
                                }),
                                a.push.apply(a, (0, r.default)(e.enter())),
                                a
                            );
                        },
                        exit: function (a) {
                            return (0, r.default)(e.exit(a));
                        },
                    };
                }),
                l = 280;
            a.RUNNING_SPEED = l;
            var i = o;
            a.default = i;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(13)),
                o = (0, t(26).buildActionSequences)(function (e, a) {
                    return {
                        prepare: function () {
                            var t = (0, r.default)(e.prepare());
                            return (
                                ("boszonsondergang" !== a.imagery.name && "grotregen" !== a.imagery.name) ||
                                    t.push(function (e) {
                                        return e.pauseBackground();
                                    }),
                                t
                            );
                        },
                        enter: function () {
                            return (0, r.default)(e.enter());
                        },
                        exit: function (a) {
                            return (0, r.default)(e.exit(a));
                        },
                    };
                });
            a.default = o;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(13)),
                o = n(t(21)),
                l = t(26),
                i = t(43),
                s = t(25),
                u = (0, l.buildActionSequences)(function (e, a) {
                    return {
                        prepare: function () {
                            return [
                                function (e) {
                                    var t,
                                        n = (0, o.default)(a.objects);
                                    try {
                                        for (n.s(); !(t = n.n()).done; ) {
                                            var r = t.value;
                                            e.setPosition(r.name, {
                                                flag: "down",
                                            });
                                        }
                                    } catch (l) {
                                        n.e(l);
                                    } finally {
                                        n.f();
                                    }
                                },
                            ];
                        },
                        enter: function () {
                            return [];
                        },
                        exit: function () {
                            var e = a.getEnterSequence();
                            e.splice(1, 0, {
                                status: ["henk-trol", "traan"],
                            }),
                                e.splice(3, 0, {
                                    status: ["henk-trol", "blij"],
                                });
                            var t = {
                                sequence: 0,
                            };
                            return [
                                function (e) {
                                    var t,
                                        n = (0, o.default)(a.objects);
                                    try {
                                        for (n.s(); !(t = n.n()).done; ) {
                                            var r = t.value;
                                            e.setPosition(
                                                r.name,
                                                {
                                                    flag: "up",
                                                },
                                                c
                                            );
                                        }
                                    } catch (l) {
                                        n.e(l);
                                    } finally {
                                        n.f();
                                    }
                                },
                            ].concat(
                                (0, r.default)(
                                    (0, s.flatMap)(e, function (e) {
                                        return (0, i.customActionToActions)(a, e, t);
                                    })
                                )
                            );
                        },
                    };
                });
            a.default = u;
            var c = 100;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(21)),
                o = n(t(13)),
                l = (0, t(26).buildActionSequences)(function (e, a) {
                    return {
                        prepare: function () {
                            return [].concat((0, o.default)(e.prepare()), [
                                function (e) {
                                    var t,
                                        n = (0, r.default)(a.objects);
                                    try {
                                        for (n.s(); !(t = n.n()).done; ) {
                                            var o = t.value;
                                            e.setPosition(o.name, {
                                                flag: "down",
                                            });
                                        }
                                    } catch (l) {
                                        n.e(l);
                                    } finally {
                                        n.f();
                                    }
                                },
                            ]);
                        },
                        enter: function () {
                            return [];
                        },
                        exit: function () {
                            return [
                                function (e) {
                                    var t,
                                        n = (0, r.default)(a.objects);
                                    try {
                                        for (n.s(); !(t = n.n()).done; ) {
                                            var o = t.value;
                                            e.setPosition(
                                                o.name,
                                                {
                                                    flag: "up",
                                                },
                                                i
                                            );
                                        }
                                    } catch (l) {
                                        n.e(l);
                                    } finally {
                                        n.f();
                                    }
                                },
                            ].concat((0, o.default)(e.enter()));
                        },
                    };
                });
            a.default = l;
            var i = 100;
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var n = t(26),
                r = t(43),
                o = (0, n.buildActionSequences)(function (e, a) {
                    return {
                        exit: function (e) {
                            var t,
                                n = [],
                                o = (null !== (t = a.getExitSequence(e)) && void 0 !== t ? t : [])
                                    .filter(function (e) {
                                        return "line" in e;
                                    })
                                    .map(function (e) {
                                        return e.line;
                                    });
                            return (
                                n.push(
                                    function (e) {
                                        return e.appendLine(o[0], 0);
                                    },
                                    function (e) {
                                        return e.wait();
                                    },
                                    function (e) {
                                        return e.flip("harry-potterachtig-mannetje");
                                    },
                                    function (e) {
                                        e.setPosition(
                                            "harry-potterachtig-mannetje",
                                            {
                                                offscreen: "right",
                                            },
                                            r.WALKING_SPEED,
                                            {
                                                "harry-potterachtig-mannetje": "lopend",
                                            }
                                        );
                                    },
                                    function (e) {
                                        e.setPosition(
                                            "keezer",
                                            {
                                                offscreen: "right",
                                            },
                                            r.WALKING_SPEED,
                                            {
                                                keezerbenen: "lopend",
                                                hondje: "lopend",
                                            }
                                        );
                                    },
                                    function (e) {
                                        return e.appendLine(o[1], 1);
                                    },
                                    function (e) {
                                        return e.wait({
                                            skip: !1,
                                        });
                                    },
                                    function (e) {
                                        return e.flip("harry-potterachtig-mannetje");
                                    },
                                    function (e) {
                                        e.setPosition(
                                            "harry-potterachtig-mannetje",
                                            {
                                                opponent: 0,
                                            },
                                            r.WALKING_SPEED,
                                            {
                                                "harry-potterachtig-mannetje": "lopend",
                                            }
                                        );
                                    },
                                    function (e) {
                                        e.setPosition(
                                            "keezer",
                                            {
                                                offscreen: "right",
                                            },
                                            r.WALKING_SPEED,
                                            {
                                                keezerbenen: "lopend",
                                                hondje: "lopend",
                                            }
                                        );
                                    },
                                    function (e) {
                                        return e.wait({
                                            skip: !1,
                                        });
                                    }
                                ),
                                n
                            );
                        },
                    };
                });
            a.default = o;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(13)),
                o = t(26),
                l = t(19),
                i = (0, o.buildActionSequences)(function (e) {
                    return {
                        prepare: function () {
                            return [].concat((0, r.default)(e.prepare()), [
                                function (e) {
                                    return e.setPosition("hummerkoets", {
                                        custom: l.sceneSize.width + 2e3,
                                    });
                                },
                            ]);
                        },
                        enter: function () {
                            return [
                                function (e) {
                                    return e.setPosition(
                                        "hummerkoets",
                                        {
                                            opponent: 0,
                                        },
                                        s
                                    );
                                },
                            ].concat((0, r.default)(e.enter()));
                        },
                        exit: function (a) {
                            return [
                                function (e) {
                                    e.setPosition(
                                        "hummerkoets",
                                        {
                                            custom: -l.sceneSize.width - 2e3,
                                        },
                                        s
                                    );
                                },
                            ].concat((0, r.default)(e.exit(a)));
                        },
                    };
                });
            a.default = i;
            var s = 1500;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(13)),
                o = t(26),
                l = t(43),
                i = (0, o.buildActionSequences)(function (e) {
                    return {
                        prepare: function () {
                            return [].concat((0, r.default)(e.prepare()), [
                                function (e) {
                                    return e.setPosition("kar-met-nimfengezin", {
                                        offscreen: "right",
                                    });
                                },
                            ]);
                        },
                        enter: function () {
                            return [
                                function (e) {
                                    e.setPosition(
                                        "kar-met-nimfengezin",
                                        {
                                            opponent: 0,
                                        },
                                        l.WALKING_SPEED
                                    );
                                },
                            ].concat((0, r.default)(e.enter()));
                        },
                    };
                });
            a.default = i;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(13)),
                o = t(26),
                l = t(19),
                i = (0, o.buildActionSequences)(function (e) {
                    return {
                        prepare: function () {
                            return [].concat((0, r.default)(e.prepare()), [
                                function (e) {
                                    return e.setPosition("prins-op-een-paard", {
                                        custom: -l.sceneSize.width - 2e3,
                                    });
                                },
                            ]);
                        },
                        enter: function () {
                            return [
                                function (e) {
                                    e.setPosition(
                                        "prins-op-een-paard",
                                        {
                                            opponent: 0,
                                        },
                                        s
                                    );
                                },
                            ].concat((0, r.default)(e.enter()));
                        },
                        exit: function (a) {
                            return [
                                function (e) {
                                    e.setPosition(
                                        "prins-op-een-paard",
                                        {
                                            custom: l.sceneSize.width + 2e3,
                                        },
                                        s
                                    );
                                },
                            ].concat((0, r.default)(e.exit(a)));
                        },
                    };
                });
            a.default = i;
            var s = 1e3;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(13)),
                o = t(26),
                l = function (e) {
                    return (0, o.buildActionSequences)(function (a, t) {
                        return {
                            exit: function (t) {
                                var n = [];
                                return (
                                    t === e &&
                                        n.push(function (e) {
                                            return e.resumeBackground();
                                        }),
                                    n.push.apply(n, (0, r.default)(a.exit(t))),
                                    n
                                );
                            },
                        };
                    });
                };
            a.default = l;
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.sfx = a.tracks = void 0);
            a.tracks = {
                splash: audiopad + "/splash.mp3",
                tune1: audiopad + "/tune1.mp3",
                tune2: audiopad + "/tune2.mp3",
                tune3: audiopad + "/tune3.mp3",
                tune4: audiopad + "/tune4.mp3",
                henktrol: audiopad + "/henktrol.mp3",
                credits: audiopad + "/credits.mp3",
            };
            a.sfx = {
                tekst: audiopad + "/tekst.mp3",
            };
        },
        function (e) {
            e.exports = JSON.parse(afbeeldingpaden);
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var n = [
                "keezerlogo-f01",
                "keezerlogo-f02",
                "keezerlogo-f03",
                "keezerlogo-f04",
                "keezerlogo-f05",
                "keezerlogo-f06",
                "keezerlogo-f07",
                "keezerlogo-f08",
                "keezerlogo-f09",
                "keezerlogo-f10",
                "keezerlogo-f11",
                "keezerlogo-f12",
                "keezerlogo-f13",
                "keezerlogo-f14",
                "keezerlogo-f15",
                "keezerlogo-f16",
                "keezerlogo-f17",
                "keezerlogo-f18",
            ];
            a.default = n;
        },
        function (e) {
            e.exports = JSON.parse(achtergronden);
        },
        function (e) {
            e.exports = JSON.parse(personages);
        },
        function (e) {
            e.exports = JSON.parse(objecten);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(34)),
                o = n(t(21)),
                l = n(t(35)),
                i = n(t(17)),
                s = n(t(18)),
                u = n(t(11)),
                c = t(14),
                d = (function () {
                    function e(a) {
                        (0, i.default)(this, e),
                            (this.path = a),
                            (0, u.default)(this, "bytes", []),
                            (0, u.default)(this, "loaded", 0),
                            (0, u.default)(this, "total", null);
                    }
                    return (
                        (0, s.default)(e, [
                            {
                                key: "buildAudioBuffer",
                                value: (function () {
                                    var e = (0, l.default)(
                                        r.default.mark(function e() {
                                            var a, t, n, l, i, s, u;
                                            return r.default.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                (a = this.bytes.reduce(function (e, a) {
                                                                    return e + a.byteLength;
                                                                }, 0)),
                                                                    (t = new ArrayBuffer(a)),
                                                                    (n = 0),
                                                                    (l = (0, o.default)(this.bytes));
                                                                try {
                                                                    for (l.s(); !(i = l.n()).done; )
                                                                        (s = i.value),
                                                                            new Uint8Array(t).set(s, n),
                                                                            (n += s.byteLength);
                                                                } catch (r) {
                                                                    l.e(r);
                                                                } finally {
                                                                    l.f();
                                                                }
                                                                if (null != (u = c.audioStore.context)) {
                                                                    e.next = 8;
                                                                    break;
                                                                }
                                                                return e.abrupt("return", null);
                                                            case 8:
                                                                return e.abrupt(
                                                                    "return",
                                                                    new Promise(function (e, a) {
                                                                        u.decodeAudioData(t, e, a);
                                                                    })
                                                                );
                                                            case 9:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "preload",
                                value: (function () {
                                    var e = (0, l.default)(
                                        r.default.mark(function e() {
                                            var a;
                                            return r.default.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                if (c.audioStore.audioEnabled) {
                                                                    e.next = 2;
                                                                    break;
                                                                }
                                                                return e.abrupt("return", null);
                                                            case 2:
                                                                a = !1;
                                                            case 3:
                                                                if (a) {
                                                                    e.next = 9;
                                                                    break;
                                                                }
                                                                return (e.next = 6), this.loadChunk();
                                                            case 6:
                                                                (a = e.sent), (e.next = 3);
                                                                break;
                                                            case 9:
                                                                if (0 !== this.bytes.length) {
                                                                    e.next = 13;
                                                                    break;
                                                                }
                                                                return e.abrupt("return", null);
                                                            case 13:
                                                                return (e.next = 15), this.buildAudioBuffer();
                                                            case 15:
                                                                return e.abrupt("return", e.sent);
                                                            case 16:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                            {
                                key: "loadChunk",
                                value: (function () {
                                    var e = (0, l.default)(
                                        r.default.mark(function e() {
                                            var a, t, n, o, l;
                                            return r.default.wrap(
                                                function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (a = {}),
                                                                    this.loaded > 0 &&
                                                                        (a.Range = "bytes=".concat(this.loaded, "-")),
                                                                    (e.next = 4),
                                                                    fetch(this.path, {
                                                                        headers: a,
                                                                    })
                                                                );
                                                            case 4:
                                                                if (!((t = e.sent).status >= 400)) {
                                                                    e.next = 7;
                                                                    break;
                                                                }
                                                                return e.abrupt("return", !0);
                                                            case 7:
                                                                return (e.next = 9), t.arrayBuffer();
                                                            case 9:
                                                                if (
                                                                    ((n = e.sent),
                                                                    this.bytes.push(new Uint8Array(n)),
                                                                    (this.loaded += n.byteLength),
                                                                    206 === t.status)
                                                                ) {
                                                                    e.next = 14;
                                                                    break;
                                                                }
                                                                return e.abrupt("return", !0);
                                                            case 14:
                                                                if (null != this.total) {
                                                                    e.next = 19;
                                                                    break;
                                                                }
                                                                if (
                                                                    ((l =
                                                                        null !== (o = t.headers.get("Content-Range")) &&
                                                                        void 0 !== o
                                                                            ? o
                                                                            : ""),
                                                                    /^bytes\s+(\d+)-(\d+)\/(\d+)$/.test(l))
                                                                ) {
                                                                    e.next = 18;
                                                                    break;
                                                                }
                                                                return e.abrupt("return", !0);
                                                            case 18:
                                                                this.total = parseInt(RegExp.$3, 10);
                                                            case 19:
                                                                return e.abrupt("return", this.loaded >= this.total);
                                                            case 20:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                },
                                                e,
                                                this
                                            );
                                        })
                                    );
                                    return function () {
                                        return e.apply(this, arguments);
                                    };
                                })(),
                            },
                        ]),
                        e
                    );
                })();
            a.default = d;
        },
        function (e, a, t) {
            "use strict";
            (function (e) {
                var n = t(1);
                Object.defineProperty(a, "__esModule", {
                    value: !0,
                }),
                    (a.default = a.AudioStore = void 0);
                var r = n(t(17)),
                    o = n(t(18)),
                    l = n(t(11)),
                    i = t(36),
                    s = t(2),
                    u = (function () {
                        function a() {
                            (0, r.default)(this, a),
                                (0, l.default)(
                                    this,
                                    "context",
                                    "AudioContext" in e
                                        ? new e.AudioContext()
                                        : "webkitAudioContext" in e
                                          ? new e.webkitAudioContext()
                                          : null
                                ),
                                (0, l.default)(this, "audioMuted", !0),
                                (0, l.default)(this, "textSFX", !1),
                                (0, s.makeAutoObservable)(this);
                        }
                        return (
                            (0, o.default)(a, [
                                {
                                    key: "audioEnabled",
                                    get: function () {
                                        return null != this.context;
                                    },
                                },
                                {
                                    key: "muteAudio",
                                    value: function () {
                                        this.audioMuted = !0;
                                    },
                                },
                                {
                                    key: "unmuteAudio",
                                    value: function () {
                                        this.audioMuted = !1;
                                    },
                                },
                                {
                                    key: "toggleAudio",
                                    value: function () {
                                        this.audioMuted ? this.unmuteAudio() : this.muteAudio();
                                    },
                                },
                                {
                                    key: "startTextSFX",
                                    value: function () {
                                        this.textSFX = !0;
                                    },
                                },
                                {
                                    key: "stopTextSFX",
                                    value: function () {
                                        this.textSFX = !1;
                                    },
                                },
                            ]),
                            a
                        );
                    })();
                a.AudioStore = u;
                var c = (0, i.register)(new u());
                a.default = c;
            }).call(this, t(29));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = a.GameStore = void 0);
            var r = n(t(13)),
                o = n(t(17)),
                l = n(t(18)),
                i = n(t(11)),
                s = t(36),
                u = t(2),
                c = t(140),
                d = n(t(144)),
                p = n(t(145)),
                h = t(14),
                g = n(t(72)),
                f = (function () {
                    function e() {
                        var a = this;
                        (0, o.default)(this, e),
                            (0, i.default)(this, "game", null),
                            (0, u.makeAutoObservable)(this),
                            (0, u.autorun)(function () {
                                null != a.game && null == a.game.currentScene && h.appStore.navigateTo("credits");
                            });
                    }
                    return (
                        (0, l.default)(e, [
                            {
                                key: "init",
                                value: function () {
                                    this.restart();
                                },
                            },
                            {
                                key: "restart",
                                value: function () {
                                    h.appStore.demoMode ? (this.game = this.loadDemo()) : (this.game = this.loadGame());
                                },
                            },
                            {
                                key: "loadGame",
                                value: function () {
                                    var e = new URLSearchParams(document.location.search),
                                        a = c.Game.load(d.default, e.has("seq"));
                                    if (
                                        (e.has("scene") && a.loadScene(e.get("scene")),
                                        e.has("cut") &&
                                            ("pre-final" === e.get("cut")
                                                ? (a.currentScene = c.Scene.buildPreFinalScene())
                                                : (a.currentScene = c.Scene.buildCutScene(e.get("cut")))),
                                        e.has("result"))
                                    ) {
                                        var t = g.default.find(function (a) {
                                            return a.code === e.get("result");
                                        });
                                        if (null == t)
                                            throw new Error('Party "'.concat(e.get("result"), '" not found'));
                                        a.endGameWith(t);
                                    }
                                    return (
                                        e.has("credits") &&
                                            (0, u.runInAction)(function () {
                                                (a.currentRound = a.rounds.length), (a.currentScene = null);
                                            }),
                                        a
                                    );
                                },
                            },
                            {
                                key: "loadDemo",
                                value: function () {
                                    var e = new URLSearchParams(document.location.search).get("demo"),
                                        a = parseInt(null !== e && void 0 !== e ? e : "");
                                    isNaN(a) ? (a = 0) : (a -= 2);
                                    var t = [].concat((0, r.default)(p.default), [
                                        d.default.find(function (e) {
                                            return "vvd" === e.party1 && "50plus" === e.party2;
                                        }),
                                        d.default.find(function (e) {
                                            return "pvda" === e.party1 && "d66" === e.party2;
                                        }),
                                    ]);
                                    return c.Game.load(t.slice(a), !0);
                                },
                            },
                        ]),
                        e
                    );
                })();
            a.GameStore = f;
            var m = (0, s.register)(new f());
            a.default = m;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                Game: !0,
                Scene: !0,
            };
            Object.defineProperty(a, "Game", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
                Object.defineProperty(a, "Scene", {
                    enumerable: !0,
                    get: function () {
                        return l.default;
                    },
                });
            var o = n(t(141)),
                l = n(t(73)),
                i = t(143);
            Object.keys(i).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === i[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return i[e];
                            },
                        }));
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(13)),
                o = n(t(17)),
                l = n(t(18)),
                i = n(t(11)),
                s = t(2),
                u = n(t(72)),
                c = n(t(73)),
                d = t(9),
                p = t(69),
                h = (function () {
                    function e(a) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        (0, o.default)(this, e),
                            (this.allScenes = a),
                            (this.sequential = t),
                            (0, i.default)(this, "scenesRemaining", void 0),
                            (0, i.default)(this, "rounds", [
                                {
                                    cut: "start",
                                },
                                "left-right",
                                {
                                    cut: "mid",
                                },
                                "regular",
                                "regular",
                                "regular",
                                {
                                    cut: "pre-final",
                                },
                                "final",
                            ]),
                            (0, i.default)(this, "currentRound", -1),
                            (0, i.default)(this, "currentRoundScenes", []),
                            (0, i.default)(this, "currentScene", void 0),
                            (0, i.default)(this, "currentChoice", null),
                            (0, i.default)(this, "partiesRemaining", (0, r.default)(u.default)),
                            (0, i.default)(this, "winningParty", null),
                            (0, i.default)(this, "inventory", ["geld", "deken", "ovchipkaart"]),
                            (this.scenesRemaining = (0, r.default)(a)),
                            (this.currentScene = this.nextScene()),
                            (0, s.makeAutoObservable)(this),
                            (0, p.assignGlobal)({
                                game: this,
                            });
                    }
                    return (
                        (0, l.default)(
                            e,
                            [
                                {
                                    key: "loadScene",
                                    value: function (e) {
                                        var a = this.allScenes.find(function (a) {
                                            return a.key === e;
                                        });
                                        if (null == a) throw new Error("Scene " + e + " not found");
                                        this.currentScene = a;
                                    },
                                },
                                {
                                    key: "commitChoice",
                                    value: function (e) {
                                        this.currentChoice = e;
                                    },
                                },
                                {
                                    key: "addToInventory",
                                    value: function () {
                                        var e;
                                        (e = this.inventory).push.apply(e, arguments);
                                    },
                                },
                                {
                                    key: "removeFromInventory",
                                    value: function () {
                                        for (var e = this, a = arguments.length, t = new Array(a), n = 0; n < a; n++)
                                            t[n] = arguments[n];
                                        for (
                                            var r = function () {
                                                    var a = l[o];
                                                    e.inventory = e.inventory.filter(function (e) {
                                                        return e !== a;
                                                    });
                                                },
                                                o = 0,
                                                l = t;
                                            o < l.length;
                                            o++
                                        )
                                            r();
                                    },
                                },
                                {
                                    key: "advance",
                                    value: function () {
                                        var e = this;
                                        if (
                                            null != this.currentScene &&
                                            (0 === this.currentScene.getChoices().length || null != this.currentChoice)
                                        ) {
                                            if (null != this.currentChoice) {
                                                var a = [this.currentScene.party1, this.currentScene.party2].filter(
                                                    function (a) {
                                                        var t;
                                                        return (
                                                            a !==
                                                            (null === (t = e.currentChoice) || void 0 === t
                                                                ? void 0
                                                                : t.party)
                                                        );
                                                    }
                                                );
                                                this.partiesRemaining = this.partiesRemaining.filter(function (e) {
                                                    return !(0, d.some)(a, function (a) {
                                                        return a === e.code;
                                                    });
                                                });
                                            }
                                            (this.currentChoice = null), (this.currentScene = this.nextScene());
                                        }
                                    },
                                },
                                {
                                    key: "endGameWith",
                                    value: function (e) {
                                        (this.partiesRemaining = [e]), (this.currentScene = this.endGame());
                                    },
                                },
                                {
                                    key: "nextScene",
                                    value: function () {
                                        var e, a;
                                        return this.sequential
                                            ? null !== (a = this.scenesRemaining.shift()) && void 0 !== a
                                                ? a
                                                : null
                                            : (0 === this.currentRoundScenes.length &&
                                                  (this.currentRoundScenes = this.nextRound()),
                                              null !== (e = this.currentRoundScenes.shift()) && void 0 !== e
                                                  ? e
                                                  : null);
                                    },
                                },
                                {
                                    key: "nextRound",
                                    value: function () {
                                        if (((this.currentRound += 1), this.currentRound >= this.rounds.length))
                                            return [];
                                        var e = this.rounds[this.currentRound];
                                        DEV &&
                                            (console.groupCollapsed("ROUND ".concat(this.currentRound)),
                                            console.log((0, s.toJS)(e)));
                                        var a = this.getScenesForRound(e);
                                        return (
                                            DEV &&
                                                (console.log(
                                                    "Scenes: ",
                                                    a.map(function (e) {
                                                        return e.key;
                                                    })
                                                ),
                                                console.groupEnd()),
                                            a
                                        );
                                    },
                                },
                                {
                                    key: "getScenesForRound",
                                    value: function (e) {
                                        if ("left-right" === e) return this.buildLeftRightRound();
                                        if ("regular" === e) return this.buildRegularRound();
                                        if (!(0, d.isPlainObject)(e) || !("cut" in e)) {
                                            var a = this.endGame();
                                            return null == a ? [] : [a];
                                        }
                                        switch (e.cut) {
                                            case "start":
                                            default:
                                                return [c.default.buildStartScene()];
                                            case "mid":
                                                return [c.default.buildCutScene()];
                                            case "pre-final":
                                                return [c.default.buildPreFinalScene()];
                                        }
                                    },
                                },
                                {
                                    key: "buildLeftRightRound",
                                    value: function () {
                                        for (
                                            var e = [],
                                                a = (0, r.default)(this.allScenes),
                                                t = (0, d.shuffle)(
                                                    u.default.filter(function (e) {
                                                        return "left" === e.wing;
                                                    })
                                                ),
                                                n = (0, d.shuffle)(
                                                    u.default.filter(function (e) {
                                                        return "right" === e.wing;
                                                    })
                                                ),
                                                o = function (r) {
                                                    var o = a.findIndex(function (e) {
                                                        var a = e.party1 === t[r].code || e.party2 === t[r].code,
                                                            o = e.party1 === n[r].code || e.party2 === n[r].code;
                                                        return a && o;
                                                    });
                                                    if (o < 0) return "break";
                                                    e.push(a[o]), a.splice(o, 1);
                                                },
                                                l = 0;
                                            l < Math.min(t.length, n.length);
                                            l++
                                        ) {
                                            if ("break" === o(l)) break;
                                        }
                                        return e;
                                    },
                                },
                                {
                                    key: "buildRegularRound",
                                    value: function () {
                                        var e = this;
                                        console.log(
                                            "Parties remaining:",
                                            this.partiesRemaining.map(function (e) {
                                                return e.code;
                                            })
                                        );
                                        for (
                                            var a = (0, d.shuffle)(this.partiesRemaining),
                                                t = 2 * Math.floor(a.length / 2),
                                                n = [],
                                                r = function (r) {
                                                    var o = a[r],
                                                        l = a[t / 2 + r],
                                                        i = e.allScenes.find(function (e) {
                                                            var a = e.party1 === o.code || e.party2 === o.code,
                                                                t = e.party1 === l.code || e.party2 === l.code;
                                                            return a && t;
                                                        });
                                                    null != i && n.push(i);
                                                },
                                                o = 0;
                                            o < t / 2;
                                            o++
                                        )
                                            r(o);
                                        return n;
                                    },
                                },
                                {
                                    key: "endGame",
                                    value: function () {
                                        if (0 === this.partiesRemaining.length) return null;
                                        var e = this.partiesRemaining[0];
                                        return (
                                            (this.winningParty = e),
                                            (this.currentRound = this.rounds.length - 1),
                                            c.default.buildEndScene(this.winningParty)
                                        );
                                    },
                                },
                            ],
                            [
                                {
                                    key: "load",
                                    value: function (a, t) {
                                        return new e(
                                            a.map(function (e) {
                                                return c.default.load(e);
                                            }),
                                            t
                                        );
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })();
            a.default = h;
        },
        function (e) {
            e.exports = JSON.parse(eindscenes);
        },
        function (e, a, t) {},
        function (e) {
            e.exports = JSON.parse(scenes);
        },
        function (e, a) {
            e.exports = [
                {
                    key: "demo2",
                    background: "bospad1",
                    enterSequence: [
                        {
                            wait: !0,
                        },
                    ],
                    exitSequence: [],
                    characters: [],
                    objects: [],
                },
                {
                    key: "demo3",
                    background: "bospad4",
                    enterSequence: [
                        {
                            wait: !0,
                        },
                    ],
                    exitSequence: [],
                    characters: [
                        {
                            name: "elf",
                            flipped: !1,
                        },
                        {
                            name: "groene-dwerg",
                            flipped: !1,
                        },
                        {
                            name: "magier",
                            flipped: !1,
                        },
                    ],
                    objects: [],
                },
                {
                    key: "demo4",
                    background: "bospad8",
                    prepareSequence: [
                        {
                            status: ["oude-liggende-vrouw", "dood"],
                        },
                    ],
                    enterSequence: [
                        {
                            wait: !0,
                        },
                    ],
                    exitSequence: [],
                    characters: [
                        {
                            name: "oude-liggende-vrouw",
                            flipped: !1,
                        },
                    ],
                    objects: [],
                },
                {
                    key: "demo5",
                    background: "brug",
                    enterSequence: [
                        {
                            wait: !0,
                        },
                    ],
                    exitSequence: [],
                    characters: [
                        {
                            name: "bosnimf",
                            flipped: !1,
                        },
                    ],
                    objects: [
                        {
                            name: "banier",
                            attachedTo: "bosnimf",
                        },
                    ],
                },
                {
                    key: "demo6",
                    background: "boerderij",
                    enterSequence: [
                        {
                            wait: !0,
                        },
                    ],
                    exitSequence: [],
                    characters: [
                        {
                            name: "landkabouter",
                            flipped: !1,
                        },
                    ],
                    objects: [],
                },
            ];
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = a.KeezerVariant = a.KeezerStore = void 0);
            var r = n(t(3)),
                o = n(t(17)),
                l = n(t(18)),
                i = n(t(11)),
                s = t(2),
                u = t(36),
                c = n(t(37)),
                d = (function () {
                    function e() {
                        var a = this;
                        (0, o.default)(this, e),
                            (0, i.default)(this, "variant", "haar1"),
                            (0, i.default)(this, "skinColor", null),
                            (0, i.default)(this, "hairColor", null),
                            (0, i.default)(this, "clothesColor", null),
                            (0, i.default)(this, "doggyName", "Hondje"),
                            (0, i.default)(this, "bril", !1),
                            (0, s.makeAutoObservable)(this, {
                                skinColor: s.observable.ref,
                                hairColor: s.observable.ref,
                                clothesColor: s.observable.ref,
                            }),
                            this.load(),
                            (0, s.autorun)(function () {
                                a.save();
                            });
                    }
                    return (
                        (0, l.default)(e, [
                            {
                                key: "load",
                                value: function () {
                                    try {
                                        var e,
                                            a = JSON.parse(
                                                null !== (e = keezerconfig) && void 0 !== e
                                                    ? e
                                                    : "{}"
                                            );
                                        null != a.variant && (this.variant = a.variant),
                                            null != a.skinColor &&
                                                (this.skinColor = (0, r.default)(
                                                    (0, r.default)({}, a.skinColor),
                                                    {},
                                                    {
                                                        color: new c.default(a.skinColor.color),
                                                    }
                                                )),
                                            null != a.hairColor &&
                                                (this.hairColor = (0, r.default)(
                                                    (0, r.default)({}, a.hairColor),
                                                    {},
                                                    {
                                                        color: new c.default(a.hairColor.color),
                                                    }
                                                )),
                                            null != a.clothesColor &&
                                                (this.clothesColor = (0, r.default)(
                                                    (0, r.default)({}, a.clothesColor),
                                                    {},
                                                    {
                                                        color: new c.default(a.clothesColor.color),
                                                    }
                                                )),
                                            null != a.bril && (this.bril = a.bril),
                                            null != a.doggyName && (this.doggyName = a.doggyName);
                                    } catch (t) {
                                        console.warn("Could not deserialize storage: " + t.message);
                                    }
                                },
                            },
                            {
                                key: "save",
                                value: function () {
                                    var e,
                                        a,
                                        t,
                                        n = {
                                            variant: this.variant,
                                            skinColor:
                                                null == this.skinColor
                                                    ? null
                                                    : (0, r.default)(
                                                          (0, r.default)({}, this.skinColor),
                                                          {},
                                                          {
                                                              color:
                                                                  null === (e = this.skinColor) || void 0 === e
                                                                      ? void 0
                                                                      : e.color.string(),
                                                          }
                                                      ),
                                            hairColor:
                                                null == this.hairColor
                                                    ? null
                                                    : (0, r.default)(
                                                          (0, r.default)({}, this.hairColor),
                                                          {},
                                                          {
                                                              color:
                                                                  null === (a = this.hairColor) || void 0 === a
                                                                      ? void 0
                                                                      : a.color.string(),
                                                          }
                                                      ),
                                            clothesColor:
                                                null == this.clothesColor
                                                    ? null
                                                    : (0, r.default)(
                                                          (0, r.default)({}, this.clothesColor),
                                                          {},
                                                          {
                                                              color:
                                                                  null === (t = this.clothesColor) || void 0 === t
                                                                      ? void 0
                                                                      : t.color.string(),
                                                          }
                                                      ),
                                            bril: this.bril,
                                            doggyName: this.doggyName,
                                        };
                                    keezerconfig = JSON.stringify(n);
                                    opslaan();
                                },
                            },
                            {
                                key: "selectVariant",
                                value: function (e) {
                                    this.variant = e;
                                },
                            },
                            {
                                key: "setSkinColor",
                                value: function (e) {
                                    this.skinColor = e;
                                },
                            },
                            {
                                key: "setHairColor",
                                value: function (e) {
                                    this.hairColor = e;
                                },
                            },
                            {
                                key: "setClothesColor",
                                value: function (e) {
                                    this.clothesColor = e;
                                },
                            },
                            {
                                key: "toggleBril",
                                value: function () {
                                    this.bril = !this.bril;
                                },
                            },
                            {
                                key: "config",
                                get: function () {
                                    var e, a, t, n, r, o;
                                    return {
                                        variant: this.variant,
                                        skinColor:
                                            null !==
                                                (e =
                                                    null === (a = this.skinColor) || void 0 === a
                                                        ? void 0
                                                        : a.color.hex()) && void 0 !== e
                                                ? e
                                                : "black",
                                        hairColor:
                                            null !==
                                                (t =
                                                    null === (n = this.hairColor) || void 0 === n
                                                        ? void 0
                                                        : n.color.hex()) && void 0 !== t
                                                ? t
                                                : "white",
                                        clothesColor:
                                            null !==
                                                (r =
                                                    null === (o = this.clothesColor) || void 0 === o
                                                        ? void 0
                                                        : o.color.hex()) && void 0 !== r
                                                ? r
                                                : "white",
                                        bril: this.bril,
                                    };
                                },
                            },
                        ]),
                        e
                    );
                })();
            a.KeezerStore = d;
            a.KeezerVariant = {
                all: ["haar1", "haar2", "haar3", "haar4"],
                description: function (e) {
                    switch (e) {
                        case "haar1":
                            return "Kort haar";
                        case "haar2":
                            return "Geen haar";
                        case "haar3":
                            return "Lang haar";
                        case "haar4":
                            return "Heel lang haar";
                    }
                },
            };
            var p = (0, u.register)(new d());
            a.default = p;
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(30),
                r = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.buttonSize = a.default = void 0);
            var o = r(t(12)),
                l = r(t(0)),
                i = t(7),
                s = t(6),
                u = r(t(170)),
                c = t(10),
                d = n(t(194)),
                p = t(19),
                h = t(14),
                g = r(t(210)),
                f = t(53),
                m = r(t(212)),
                y = r(t(213)),
                b = r(t(214)),
                v = t(22),
                k = t(25),
                L = t(215),
                j = r(t(216)),
                w = t(40),
                z = r(t(217)),
                x = r(t(218)),
                F = r(t(31)),
                S = t(5),
                P = (0, i.observer)("App", function () {
                    (0, u.default)();
                    var e = (0, p.useSceneLayout)().shouldRotate,
                        a = h.appStore.ready,
                        t = h.appStore.currentScreen,
                        n = l.default.useRef(null);
                    l.default.useEffect(function () {
                        return (
                            h.appStore.init(),
                            function () {
                                h.appStore.deinit();
                            }
                        );
                    }, []);
                    var r = l.default.useCallback(function () {
                        h.appStore.demoMode ? h.appStore.navigateTo("game") : h.appStore.navigateTo("setup");
                    }, []);
                    (0, f.useHotkey)(
                        a && "splash" === t ? "*" : null,
                        l.default.useCallback(
                            function (e, a) {
                                if (a.metaKey || a.ctrlKey || a.altKey || a.shiftKey) return !1;
                                r();
                            },
                            [r]
                        )
                    );
                    var i = h.audioStore.audioMuted,
                        P = l.default.useCallback(function () {
                            h.audioStore.toggleAudio();
                        }, []),
                        q = h.appStore.inventoryShown,
                        O = l.default.useCallback(function () {
                            h.appStore.toggleInventory();
                        }, []),
                        M = h.appStore.fullScreen,
                        E = l.default.useCallback(function () {
                            h.appStore.toggleFullScreen();
                        }, []);
                    (0, f.useHotkey)("I", {
                        down: l.default.useCallback(function () {
                            h.appStore.showInventory();
                        }, []),
                        up: l.default.useCallback(function () {
                            h.appStore.hideInventory();
                        }, []),
                    });
                    var D = (0, v.useTimer)(),
                        _ = l.default.useState(t),
                        A = (0, o.default)(_, 2),
                        N = A[0],
                        T = A[1];
                    l.default.useEffect(
                        function () {
                            "credits" === t
                                ? D.debounce(function () {
                                      T("credits");
                                  }, d.crossFadeDuration.slow)
                                : T(t);
                        },
                        [t, D]
                    ),
                        l.default.useLayoutEffect(function () {
                            var e = n.current;
                            if (null != e)
                                return (
                                    (0, L.disableBodyScroll)(e),
                                    function () {
                                        (0, L.enableBodyScroll)(e);
                                    }
                                );
                        }, []);
                    var I = C("green");

                    function H() {
                        switch (N) {
                            case "splash":
                                return (0, S.jsx)(c.Tappable, {
                                    onTap: r,
                                    children: (0, S.jsx)(g.default, {}),
                                });
                            case "setup":
                                return (0, S.jsx)(m.default, {});
                            case "game":
                                return (function () {
                                    if (null == h.gameStore.game) return null;
                                    return (0, S.jsx)(
                                        d.default,
                                        {
                                            game: h.gameStore.game,
                                        },
                                        (0, k.objectID)(h.gameStore.game)
                                    );
                                })();
                            case "credits":
                                return (0, S.jsx)(b.default, {});
                        }
                    }

                    function B() {
                        if (!h.audioStore.audioEnabled) return null;
                        var e = i && ("splash" === t || "setup" === t);
                        return (0, S.jsxs)(c.Row, {
                            children: [
                                e && (0, S.jsx)(x.default, {}),
                                (0, S.jsx)(c.Tappable, {
                                    classNames: I.button,
                                    onTap: P,
                                    "aria-label": "Zet het geluid aan of uit",
                                    "aria-checked": !i,
                                    children: (0, S.jsx)("img", {
                                        className: I.audioIcon,
                                        src: i ? objectenpad + "/iconaudio-uit.png" : objectenpad + "/iconaudio-aan.png",
                                        alt: i ? "Zet geluid aan" : "Zet geluid uit",
                                    }),
                                }),
                            ],
                        });
                    }
                    return (0, S.jsxs)(c.Column, {
                        flex: !0,
                        classNames: I.app,
                        ref: n,
                        children: [
                            e && (0, S.jsx)(j.default, {}),
                            !e && H(),
                            !e &&
                                (0, S.jsxs)(w.ScaledScene, {
                                    classNames: I.buttonsContainer,
                                    children: [
                                        a
                                            ? (0, S.jsxs)(c.Column, {
                                                  flex: !0,
                                                  padding: 20,
                                                  gap: s.layout.padding.s,
                                                  classNames: I.topRightButtons,
                                                  children: [
                                                      B(),
                                                      "game" !== t
                                                          ? null
                                                          : (0, S.jsx)(c.Tappable, {
                                                                classNames: I.button,
                                                                onTap: O,
                                                                "aria-label": "Open of sluit je buidel",
                                                                "aria-checked": q,
                                                                children: (0, S.jsx)("img", {
                                                                    className: I.buidelIcon,
                                                                    src: objectenpad + "/icon-inventory.png",
                                                                    alt: q ? "Verberg je buidel" : "Toon je buidel",
                                                                }),
                                                            }),
                                                  ],
                                              })
                                            : null,
                                        h.appStore.fullScreenEnabled
                                            ? (0, S.jsx)(c.Column, {
                                                  flex: !0,
                                                  padding: 20,
                                                  gap: s.layout.padding.s,
                                                  classNames: I.bottomRightButtons,
                                                  "aria-label": "Open of sluit volledig scherm",
                                                  "aria-checked": M,
                                                  children: (0, S.jsx)(c.Tappable, {
                                                      classNames: I.button,
                                                      onTap: E,
                                                      children: (0, S.jsx)("img", {
                                                          className: I.audioIcon,
                                                          src: M
                                                              ? objectenpad + "/iconfullscreen-exit.png"
                                                              : objectenpad + "/iconfullscreen-enter.png",
                                                          alt: M ? "Normaal scherm" : "Volledig scherm",
                                                      }),
                                                  }),
                                              })
                                            : null,
                                        (0, S.jsxs)(c.Row, {
                                            classNames: I.logos,
                                            gap: 20,
                                            padding: 20,
                                            align: "bottom",
                                            children: [
                                                (0, S.jsx)("img", {
                                                    src: "misc/logo-zml.png",
                                                    alt: "Logo Zondag met Lubach",
                                                    className: I.logo,
                                                }),
                                                (0, S.jsx)("img", {
                                                    src: "misc/logo-vpro.png",
                                                    alt: "Logo Zondag met Lubach",
                                                    className: I.logo,
                                                }),
                                                (0, S.jsx)("img", {
                                                    src: "misc/logo-npo3.png",
                                                    alt: "Logo NPO 3",
                                                    className: (0, F.default)(I.logo, I.npo3Logo),
                                                }),
                                                (0, S.jsx)(c.Tappable, {
                                                    classNames: I.privacy,
                                                    href: "",
                                                    "aria-label": "",
                                                    children: (0, S.jsx)(c.Label, {
                                                        children: "",
                                                    }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            (0, S.jsx)(y.default, {}),
                            (0, S.jsx)(z.default, {}),
                        ],
                    });
                });
            a.default = P;
            var q = s.layout.icon.xl;
            a.buttonSize = q;
            var C = (0, s.createUseStyles)({
                app: {
                    overflow: "hidden",
                },
                buttonsContainer: {
                    pointerEvents: "none",
                },
                topRightButtons: {
                    position: "absolute",
                    top: 0,
                    right: 0,
                },
                bottomRightButtons: {
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                },
                audioIcon: {
                    width: 40,
                    height: 40,
                },
                buidelIcon: {
                    width: 40,
                    height: 50,
                },
                fullScreenIcon: {
                    width: 40,
                    height: 50,
                },
                button: {
                    pointerEvents: "auto",
                    padding: 20,
                },
                logos: {
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    backgorund: "black",
                },
                logo: {
                    display: "block",
                    width: 130,
                    height: 70,
                },
                npo3Logo: {
                    width: 104,
                    height: 70,
                },
                privacy: {
                    pointerEvents: "auto",
                    fontSize: 16,
                    opacity: 1,
                },
            });
        },
        function (e, a, t) {
            "use strict";

            function n(e) {
                if (e instanceof Object && "color" in e && "string" === typeof e.model) return e.toString();
                if (Array.isArray(e)) return e.map(n);
                if (e instanceof Object) {
                    for (var a = {}, t = 0, r = Object.keys(e); t < r.length; t++) {
                        var o = r[t];
                        a[o] = n(e[o]);
                    }
                    return a;
                }
                return e;
            }
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = function () {
                    return {
                        onProcessStyle: function (e, a) {
                            if ("style" !== a.type) return e;
                            for (var t = 0, r = Object.keys(e); t < r.length; t++) {
                                var o = r[t];
                                e[o] = n(e[o]);
                            }
                            return e;
                        },
                        onChangeValue: function (e, a) {
                            return n(e);
                        },
                    };
                });
        },
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.overrideBackground = function (e) {
                    return {
                        backgroundColor: "".concat(e, " !important"),
                    };
                }),
                (a.overrideForeground = function (e) {
                    return {
                        "& *": {
                            color: "".concat(e, " !important"),
                        },
                        "& svg": {
                            fill: "".concat(e, " !important"),
                        },
                    };
                }),
                (a.linearGradient = u),
                (a.verticalGradient = function () {
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    return u.apply(void 0, ["top"].concat(a));
                }),
                (a.horizontalGradient = function () {
                    for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                    return u.apply(void 0, ["left"].concat(a));
                }),
                (a.radialGradient = function (e) {
                    for (var a = arguments.length, t = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++)
                        t[n - 1] = arguments[n];
                    return "radial-gradient(".concat(e, ", ").concat(
                        t
                            .map(function (e) {
                                return e.string();
                            })
                            .join(", "),
                        ")"
                    );
                }),
                (a.fg = a.bg = a.white = a.black = void 0);
            var r = n(t(37)),
                o = new r.default("black");
            a.black = o;
            var l = new r.default("white");
            a.white = l;
            var i = {
                dark: new r.default("#333333"),
            };
            a.bg = i;
            var s = {
                normal: l,
            };

            function u(e) {
                for (var a = arguments.length, t = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++)
                    t[n - 1] = arguments[n];
                return "linear-gradient(".concat(e, ", ").concat(
                    t
                        .map(function (e) {
                            return e.string();
                        })
                        .join(", "),
                    ")"
                );
            }
            a.fg = s;
        },
        function (e, a, t) {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.normal = a.family = void 0);
            var n = {
                normal: "Helvetica, Arial, sans-serif",
                game: "Onesize, Helvetica, Arial, sans-serif",
            };
            a.family = n;
            var r = {
                mobile: {
                    family: n.normal,
                    weight: 500,
                    size: 20,
                },
                tablet: {},
                desktop: {
                    size: 16,
                },
            };
            a.normal = r;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.shadowCreator = o),
                (a.depth = a.color = void 0);
            var r = n(t(3));

            function o(e) {
                return function () {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, r.default)((0, r.default)({}, e), a),
                        n = t.x,
                        o = void 0 === n ? 0 : n,
                        l = t.y,
                        i = void 0 === l ? 0 : l,
                        s = t.radius,
                        u = void 0 === s ? 0 : s,
                        c = t.offset,
                        d = void 0 === c ? 0 : c,
                        p = t.color,
                        h = void 0 === p ? "rgba(0, 0, 0, 0.3)" : p,
                        g = [o, i, u, d, h];
                    return g;
                };
            }
            var l = new (n(t(37)).default)("black").alpha(0.3);
            a.color = l;
            a.depth = function (e) {
                var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return o(
                    (0, r.default)(
                        {
                            y: e,
                            radius: 2 * e,
                        },
                        a
                    )
                )();
            };
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.transitionBuilder = l),
                (a.transition = i),
                (a.fade = function (e) {
                    var a = l(e);
                    return {
                        "&-enter": {
                            opacity: 0,
                        },
                        "&-enter-active": {
                            opacity: 1,
                            transition: a(["opacity"]),
                        },
                        "&-exit": {
                            opacity: 1,
                        },
                        "&-exit-active": {
                            opacity: 0,
                            transition: a(["opacity"]),
                        },
                    };
                }),
                (a.pop = function (e) {
                    var a = l(e);
                    return {
                        willChange: ["transform", "opacity"],
                        "&-enter": {
                            opacity: 0,
                            transform: "scale(0.3)",
                        },
                        "&-enter-active": {
                            opacity: 1,
                            transform: "scale(1)",
                            transition: a(["opacity", "transform"], u.popIn),
                        },
                        "&-exit": {
                            opacity: 1,
                            transform: "scale(1)",
                        },
                        "&-exit-active": {
                            opacity: 0,
                            transform: "scale(0.3)",
                            transition: a(["opacity", "transform"], u.popOut),
                        },
                    };
                }),
                (a.slideFromLeft = function (e) {
                    var a = l(e);
                    return {
                        willChange: ["transform"],
                        "&-enter": {
                            transform: "translateX(-100%)",
                        },
                        "&-enter-active": {
                            transform: "translateX(0)",
                            transition: a(["transform"]),
                        },
                        "&-exit": {
                            transform: "translateX(0)",
                        },
                        "&-exit-active": {
                            transform: "translateX(-100%)",
                            transition: a(["transform"]),
                        },
                    };
                }),
                (a.slideFromRight = function (e) {
                    var a = l(e);
                    return {
                        willChange: ["transform"],
                        "&-enter": {
                            transform: "translateX(100%)",
                        },
                        "&-enter-active": {
                            transform: "translateX(0)",
                            transition: a(["transform"]),
                        },
                        "&-exit": {
                            transform: "translateX(0)",
                        },
                        "&-exit-active": {
                            transform: "translateX(100%)",
                            transition: a(["transform"]),
                        },
                    };
                }),
                (a.fadeFromAbove = function (e, a) {
                    var t,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "enter",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "exit",
                        i = l(e);
                    return (
                        (t = {
                            willChange: ["transform", "opacity"],
                        }),
                        (0, o.default)(t, "&-".concat(n), {
                            opacity: 0,
                            transform: "translateY(".concat("number" === typeof a ? -a + "px" : "-" + a, ")"),
                        }),
                        (0, o.default)(t, "&-".concat(n, "-active"), {
                            opacity: 1,
                            transform: "translateY(0)",
                            transition: i(["opacity", "transform"]),
                        }),
                        (0, o.default)(t, "&-".concat(r), {
                            opacity: 1,
                            transform: "translateY(0)",
                        }),
                        (0, o.default)(t, "&-".concat(r, "-active"), {
                            opacity: 0,
                            transform: "translateY(".concat("number" === typeof a ? -a + "px" : "-" + a, ")"),
                            transition: i(["opacity", "transform"]),
                        }),
                        t
                    );
                }),
                (a.fadeFromLeft = function (e, a) {
                    var t,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "enter",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "exit",
                        i = l(e);
                    return (
                        (t = {
                            willChange: ["transform", "opacity"],
                        }),
                        (0, o.default)(t, "&-".concat(n), {
                            opacity: 0,
                            transform: "translateX(".concat("number" === typeof a ? -a + "px" : "-" + a, ")"),
                        }),
                        (0, o.default)(t, "&-".concat(n, "-active"), {
                            opacity: 1,
                            transform: "translateX(0)",
                            transition: i(["opacity", "transform"]),
                        }),
                        (0, o.default)(t, "&-".concat(r), {
                            opacity: 1,
                            transform: "translateX(0)",
                        }),
                        (0, o.default)(t, "&-".concat(r, "-active"), {
                            opacity: 0,
                            transform: "translateX(".concat("number" === typeof a ? -a + "px" : "-" + a, ")"),
                            transition: i(["opacity", "transform"]),
                        }),
                        t
                    );
                }),
                (a.fadeFromRight = function (e, a) {
                    var t,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "enter",
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "exit",
                        i = l(e);
                    return (
                        (t = {
                            willChange: ["transform", "opacity"],
                        }),
                        (0, o.default)(t, "&-".concat(n), {
                            opacity: 0,
                            transform: "translateX(".concat("number" === typeof a ? a + "px" : a, ")"),
                        }),
                        (0, o.default)(t, "&-".concat(n, "-active"), {
                            opacity: 1,
                            transform: "translateX(0)",
                            transition: i(["opacity", "transform"]),
                        }),
                        (0, o.default)(t, "&-".concat(r), {
                            opacity: 1,
                            transform: "translateX(0)",
                        }),
                        (0, o.default)(t, "&-".concat(r, "-active"), {
                            opacity: 0,
                            transform: "translateX(".concat("number" === typeof a ? a + "px" : a, ")"),
                            transition: i(["opacity", "transform"]),
                        }),
                        t
                    );
                }),
                (a.explode = function (e) {
                    var a,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "enter",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "exit",
                        s = l(e);
                    return (
                        (a = {
                            willChange: ["transform", "opacity"],
                        }),
                        (0, o.default)(a, "&-".concat(t), {
                            opacity: 0,
                            transform: "scale(1.2)",
                        }),
                        (0, o.default)(a, "&-".concat(t, "-active"), {
                            opacity: 1,
                            transform: "scale(1)",
                            transition: s(["opacity", "transform"], u.explode),
                        }),
                        (0, o.default)(a, "&-".concat(n), {
                            opacity: 1,
                            transform: "scale(1)",
                        }),
                        (0, o.default)(a, "&-".concat(n, "-active"), {
                            opacity: 0,
                            transform: "scale(1.2)",
                            transition: [].concat(
                                (0, r.default)(s("opacity")),
                                (0, r.default)(i("transform", 1.5 * e, u.explode))
                            ),
                        }),
                        a
                    );
                }),
                (a.transitions = a.timings = a.durations = void 0);
            var r = n(t(13)),
                o = n(t(11));

            function l(e) {
                return function (a) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ease-in-out";
                    return i(a, e, t);
                };
            }

            function i(e, a) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ease-in-out",
                    n = Array.isArray(e) ? e : [e];
                return 0 === n.length
                    ? [["", "".concat(a, "ms"), t]]
                    : n.map(function (e) {
                          return [e, "".concat(a, "ms"), t];
                      });
            }
            var s = {
                short: 200,
                medium: 400,
                long: 600,
                extraLong: 1e3,
            };
            a.durations = s;
            var u = {
                popIn: "cubic-bezier(0.150, 1, 0.575, 1)",
                popOut: "ease-out",
                explode: "cubic-bezier(0.150, 1, 0.85, 1)",
            };
            a.timings = u;
            var c = {
                short: l(s.short),
                medium: l(s.medium),
                long: l(s.long),
            };
            a.transitions = c;
        },
        function (e, a, t) {
            "use strict";
            var n = t(30),
                r = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.overlayAfter = a.clearInput = void 0);
            var o = r(t(3)),
                l = n(t(76));
            a.clearInput = {
                display: "block",
                width: "100%",
                border: "none",
                font: "inherit",
                background: "none",
                "-webkit-appearance": "unset",
                "&:focus": {
                    outline: "none",
                },
                color: "inherit",
            };
            a.overlayAfter = function (e) {
                return {
                    "&::after": (0, o.default)(
                        (0, o.default)(
                            {
                                content: '""',
                            },
                            l.overlay
                        ),
                        {},
                        {
                            pointerEvents: "none",
                        },
                        e
                    ),
                };
            };
        },
        ,
        ,
        ,
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = t(6),
                l = (0, o.createUseStyles)({
                    "@global": {
                        html: {
                            height: "100%",
                        },
                        body: (0, r.default)(
                            (0, r.default)(
                                (0, r.default)(
                                    {
                                        height: "100%",
                                        overflow: "hidden",
                                        margin: 0,
                                    },
                                    o.layout.flex.column
                                ),
                                o.layout.responsiveProp({
                                    font: o.fonts.normal,
                                })
                            ),
                            {},
                            {
                                background: o.colors.bg.dark,
                                color: o.colors.fg.normal.string(),
                                "-webkit-font-smoothing": "antialiased",
                                "-moz-osx-font-smoothing": "grayscale",
                                overscrollBehaviorY: "none",
                                overscrollBehaviorX: "none",
                            }
                        ),
                        "#root": (0, r.default)(
                            {
                                flex: [1, 0, "auto"],
                            },
                            o.layout.flex.column
                        ),
                        "h1, h2, h3": {
                            fontSize: "100%",
                            padding: 0,
                            margin: 0,
                        },
                        "a, button": {
                            color: "inherit",
                            textDecoration: "none",
                        },
                        figure: {
                            margin: 0,
                            marginBlockStart: 0,
                            marginBlockEnd: 0,
                            marginInlineStart: 0,
                            marginInlineEnd: 0,
                        },
                        img: {
                            display: "block",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            overflow: "hidden",
                        },
                        ".ModalPortal--root": {
                            zIndex: o.layout.z.modal,
                        },
                        "*": {
                            boxSizing: "border-box",
                            flex: "0 0 auto",
                            minWidth: 0,
                            minHeight: 0,
                        },
                    },
                });
            a.default = l;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(34)),
                o = n(t(35)),
                l = n(t(12)),
                i = n(t(0)),
                s = t(7),
                u = t(14),
                c = t(22),
                d = (0, s.memo)("Audio", function (e) {
                    var a = e.source,
                        t = e.playing,
                        n = void 0 === t || t,
                        s = e.loop,
                        d = void 0 !== s && s,
                        p = e.crossFade,
                        h = void 0 !== p && p,
                        g = u.audioStore.context,
                        f = i.default.useMemo(
                            function () {
                                if (null == g) return null;
                                if (null == a) return null;
                                if (!n) return null;
                                var e = g.createBufferSource();
                                return (e.buffer = a), e;
                            },
                            [g, n, a]
                        );
                    i.default.useEffect(
                        function () {
                            null != f && (f.loop = d);
                        },
                        [d, f]
                    );
                    var m = (0, c.useTimer)(),
                        y = i.default.useState(null),
                        b = (0, l.default)(y, 2),
                        v = b[0],
                        k = b[1],
                        L = i.default.useCallback(
                            function (e, a, t) {
                                return new Promise(function (n) {
                                    var r = a,
                                        o = (t - a) / 10;
                                    m.setTimeout(function a() {
                                        (e.gain.value = r),
                                            (r += o),
                                            (o < 0 && r <= t) || (o > 0 && r >= t) ? n() : m.setTimeout(a, 50);
                                    }, 50);
                                });
                            },
                            [m]
                        ),
                        j = i.default.useCallback(
                            (function () {
                                var e = (0, o.default)(
                                    r.default.mark(function e(a, t) {
                                        return r.default.wrap(function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        if ((m.clearAll(), null == a)) {
                                                            e.next = 4;
                                                            break;
                                                        }
                                                        return (e.next = 4), m.await(L(a.gain, 1, 0));
                                                    case 4:
                                                        if ((k(t), null == t)) {
                                                            e.next = 8;
                                                            break;
                                                        }
                                                        return (e.next = 8), m.await(L(t.gain, 0, 1));
                                                    case 8:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        }, e);
                                    })
                                );
                                return function (a, t) {
                                    return e.apply(this, arguments);
                                };
                            })(),
                            [m, L]
                        );
                    return (
                        i.default.useEffect(
                            function () {
                                if ((null === v || void 0 === v ? void 0 : v.source) !== f && null != g) {
                                    var e =
                                        null == f
                                            ? null
                                            : {
                                                  source: f,
                                                  gain: g.createGain(),
                                              };
                                    h && null != v ? j(v, e) : k(e);
                                }
                            },
                            [g, h, f, j, v, n]
                        ),
                        i.default.useEffect(
                            function () {
                                if (null != g && null != v)
                                    return (
                                        v.source.connect(v.gain),
                                        v.gain.connect(g.destination),
                                        v.source.start(),
                                        function () {
                                            v.source.stop(), v.gain.disconnect(), v.source.disconnect();
                                        }
                                    );
                            },
                            [g, v]
                        ),
                        null
                    );
                });
            a.default = d;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                Animation: !0,
                useTimer: !0,
            };
            Object.defineProperty(a, "default", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
                Object.defineProperty(a, "Animation", {
                    enumerable: !0,
                    get: function () {
                        return l.default;
                    },
                }),
                Object.defineProperty(a, "useTimer", {
                    enumerable: !0,
                    get: function () {
                        return i.default;
                    },
                });
            var o = n(t(77)),
                l = n(t(173)),
                i = n(t(174)),
                s = t(175);
            Object.keys(s).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === s[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return s[e];
                            },
                        }));
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(17)),
                o = n(t(18)),
                l = n(t(11)),
                i = (function () {
                    function e() {
                        (0, r.default)(this, e),
                            (0, l.default)(this, "frame", -1),
                            (0, l.default)(this, "t", 0),
                            (0, l.default)(this, "fps", 0),
                            (0, l.default)(this, "handle", null);
                    }
                    return (
                        (0, o.default)(e, [
                            {
                                key: "cancel",
                                value: function () {
                                    if (null == this.handle) return null;
                                    window.cancelAnimationFrame(this.handle), (this.handle = null);
                                },
                            },
                        ]),
                        e
                    );
                })();
            a.default = i;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = function () {
                    var e = r.default.useMemo(function () {
                        return new o.default();
                    }, []);
                    return (
                        r.default.useEffect(
                            function () {
                                return function () {
                                    e.dispose();
                                };
                            },
                            [e]
                        ),
                        e
                    );
                });
            var r = n(t(0)),
                o = n(t(77));
        },
        function (e, a, t) {},
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(32)),
                l = (n(t(0)), t(7)),
                i = t(6),
                s = t(10),
                u = n(t(37)),
                c = t(5),
                d = (0, l.component)("Bubble", function (e) {
                    var a = e.classNames,
                        t = (0, o.default)(e, ["classNames"]),
                        n = p();
                    return (0, c.jsx)(
                        s.Column,
                        (0, r.default)(
                            {
                                classNames: [n.bubble, a],
                            },
                            t
                        )
                    );
                });
            a.default = d;
            var p = (0, i.createUseStyles)({
                bubble: {
                    background: "white",
                    color: "black",
                    "& em": {
                        color: "".concat(new u.default("yellow").darken(0.3), " !important"),
                    },
                    border: [16, "solid", "black"],
                    borderRadius: 40,
                    padding: 32,
                },
            });
        },
        ,
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.progressBarSize = a.default = void 0);
            var r = n(t(3)),
                o = (n(t(0)), t(7)),
                l = t(6),
                i = t(5),
                s = (0, o.memo)("ProgressBar", function (e) {
                    var a = e.progress,
                        t = "".concat(100 * a, "%"),
                        n = c();
                    return (0, i.jsx)("div", {
                        className: n.progressBar,
                        children: (0, i.jsx)("div", {
                            className: n.bar,
                            style: {
                                width: t,
                            },
                        }),
                    });
                });
            a.default = s;
            var u = {
                width: 1280,
                height: 80,
            };
            a.progressBarSize = u;
            var c = (0, l.createUseStyles)({
                progressBar: (0, r.default)(
                    (0, r.default)(
                        {
                            position: "relative",
                        },
                        u
                    ),
                    {},
                    {
                        overflow: "hidden",
                        background: "url(misc/progressbar.png)",
                    }
                ),
                bar: {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    height: u.height,
                    background: "url(misc/progressbar-fill.png)",
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(32)),
                l = (n(t(0)), t(7)),
                i = t(6),
                s = t(10),
                u = t(5),
                c = (0, l.memo)("PushButton", function (e) {
                    var a = e.classNames,
                        t = e.children,
                        n = (0, o.default)(e, ["classNames", "children"]),
                        l = d();
                    return (0, u.jsxs)(
                        s.Tappable,
                        (0, r.default)(
                            (0, r.default)(
                                {
                                    classNames: [l.pushButton, a],
                                    "aria-label": t,
                                },
                                n
                            ),
                            {},
                            {
                                children: [
                                    (0, u.jsx)("div", {
                                        className: l.bgLeft,
                                    }),
                                    (0, u.jsx)("div", {
                                        className: l.bgMid,
                                    }),
                                    (0, u.jsx)("div", {
                                        className: l.bgRight,
                                    }),
                                    (0, u.jsx)(s.Row, {
                                        flex: !0,
                                        classNames: l.content,
                                        children: (0, u.jsx)(s.Label, {
                                            flex: !0,
                                            align: "center",
                                            children: t,
                                        }),
                                    }),
                                ],
                            }
                        )
                    );
                });
            a.default = c;
            var d = (0, i.createUseStyles)({
                pushButton: {
                    position: "relative",
                    height: 120,
                    "&:focus-visible": {
                        border: [5, "solid", i.colors.white.alpha(0.2)],
                    },
                },
                bgLeft: {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: 30,
                    background: "url(objectenpad + '/buttonleft.png')",
                    backgroundSize: [30, 120],
                },
                bgMid: {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 20,
                    right: 20,
                    background: "url(objectenpad + '/buttonmid.png')",
                    backgroundSize: [30, 120],
                },
                bgRight: {
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: 30,
                    background: "url(objectenpad + '/buttonright.png')",
                    backgroundSize: [30, 120],
                },
                content: {
                    position: "relative",
                    padding: [0, 20],
                    color: "white",
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(12)),
                o = n(t(3)),
                l = n(t(32)),
                i = n(t(0)),
                s = n(t(31)),
                u = t(9),
                c = t(25),
                d = t(6),
                p = t(7),
                h = t(5),
                g = (0, p.forwardRef)("SVG", function (e, a) {
                    var t = e.svg,
                        n = e.size,
                        d = e.inline,
                        p = e.color,
                        g = (e.dim, e.dimmer, e.primary, e.style),
                        m = void 0 === g ? {} : g,
                        y = e.classNames,
                        b = (0, l.default)(e, [
                            "svg",
                            "size",
                            "inline",
                            "color",
                            "dim",
                            "dimmer",
                            "primary",
                            "style",
                            "classNames",
                        ]),
                        v = f();
                    var k = i.default.useMemo(
                            function () {
                                return void 0 === n
                                    ? [void 0, void 0]
                                    : "number" === typeof n
                                      ? [n, n]
                                      : [n.width, n.height];
                            },
                            [n]
                        ),
                        L = (0, r.default)(k, 2),
                        j = L[0],
                        w = L[1];
                    return (function () {
                        if (null == t)
                            return (0, h.jsxs)(
                                "svg",
                                (0, o.default)(
                                    (0, o.default)(
                                        {
                                            ref: a,
                                            className: (0, s.default)(v.svg, y, d ? v.inline : v.block),
                                            style: m,
                                            viewBox: "0 0 64 64",
                                        },
                                        (0, u.omit)(b, "color", "svg")
                                    ),
                                    {},
                                    {
                                        width: j,
                                        height: w,
                                        children: [
                                            (0, h.jsx)("rect", {
                                                fill: "#D30000",
                                                stroke: "#FFFFFF",
                                                strokeWidth: "2",
                                                x: "0",
                                                y: "0",
                                                width: "64",
                                                height: "64",
                                            }),
                                            (0, h.jsx)("path", {
                                                d: "M1,1 L63,63",
                                                stroke: "#FFFFFF",
                                                strokeWidth: "2",
                                                strokeLinecap: "square",
                                            }),
                                            (0, h.jsx)("path", {
                                                d: "M63,1 L1,63",
                                                stroke: "#FFFFFF",
                                                strokeWidth: "2",
                                                strokeLinecap: "square",
                                            }),
                                        ],
                                    }
                                )
                            );
                        var e = (0, o.default)(
                            {
                                fill: null === p || void 0 === p ? void 0 : p.string(),
                            },
                            m
                        );
                        return (0, h.jsx)(
                            "svg",
                            (0, o.default)(
                                (0, o.default)(
                                    (0, o.default)(
                                        {
                                            ref: a,
                                            className: (0, s.default)(v.svg, y, d ? v.inline : v.block),
                                            style: e,
                                            dangerouslySetInnerHTML: {
                                                __html: t.content,
                                            },
                                        },
                                        (0, u.omit)((0, c.camelCaseKeys)(t.attributes), "xmlns:xlink", "style")
                                    ),
                                    (0, u.omit)(b, "color", "svg")
                                ),
                                {},
                                {
                                    width: j,
                                    height: w,
                                }
                            )
                        );
                    })();
                });
            a.default = g;
            var f = (0, d.createUseStyles)({
                svg: {
                    fill: d.colors.fg.normal,
                },
                block: {
                    display: "block",
                },
                inline: {
                    display: "inline-block",
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.useChainedCallback = function (e, a, t) {
                    return o.default.useCallback(
                        function () {
                            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            return a.apply(void 0, [e].concat(n));
                        },
                        [e].concat((0, r.default)(t))
                    );
                });
            var r = n(t(13)),
                o = n(t(0));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.useContinuousRef = function (e) {
                    var a = r.default.useRef(e);
                    return (a.current = e), a;
                });
            var r = n(t(0));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.useLayerAnim = function (e) {
                    var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        t = (0, l.useTimer)(),
                        n = e.length > 0,
                        i = o.default.useState(n ? e[0] : null),
                        s = (0, r.default)(i, 2),
                        u = s[0],
                        c = s[1];
                    return (
                        o.default.useEffect(
                            function () {
                                if ((t.clearAll(), n)) {
                                    var r = 0;
                                    c(e[0]),
                                        0 !== a &&
                                            t.setTimeout(function n() {
                                                (r = (r + 1) % e.length), c(e[r]), 0 !== a && t.setTimeout(n, 1e3 / a);
                                            }, 1e3 / a);
                                } else c(null);
                            },
                            [n, a, e, t]
                        ),
                        {
                            current: u,
                        }
                    );
                });
            var r = n(t(12)),
                o = n(t(0)),
                l = t(22);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.usePrevious = function (e) {
                    var a = r.default.useRef();
                    return (
                        r.default.useEffect(function () {
                            a.current = e;
                        }),
                        a.current
                    );
                });
            var r = n(t(0));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.useSimpleAnim = function (e) {
                    var a = (0, l.useTimer)(),
                        t = null != e,
                        n = o.default.useState(null),
                        i = (0, r.default)(n, 2),
                        s = i[0],
                        u = i[1];
                    return (
                        o.default.useEffect(
                            function () {
                                if (null == e) a.clearAll();
                                else {
                                    u(0);
                                    var t = 0;
                                    a.setTimeout(function n() {
                                        u((t += 1)), a.setTimeout(n, 1e3 / e);
                                    }, 1e3 / e);
                                }
                            },
                            [t, e, a]
                        ),
                        null == s
                            ? null
                            : {
                                  frame: s,
                              }
                    );
                });
            var r = n(t(12)),
                o = n(t(0)),
                l = t(22);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.useSimpleDrag = function (e) {
                    var a = e.axis,
                        t = void 0 === a ? "both" : a,
                        n = "both" === t || "horizontal" === t,
                        s = "both" === t || "vertical" === t,
                        u = r.default.useRef(null),
                        c = r.default.useRef(null),
                        d = (0, i.useContinuousRef)(e.onStart),
                        p = (0, i.useContinuousRef)(e.onMove),
                        h = (0, i.useContinuousRef)(e.onEnd),
                        g = r.default.useCallback(
                            function (e) {
                                if (null == c.current)
                                    return {
                                        x: 0,
                                        y: 0,
                                    };
                                var a = (0, l.getClientPoint)(e);
                                return null == a
                                    ? null
                                    : {
                                          x: n ? a.x - c.current.x : 0,
                                          y: s ? a.y - c.current.y : 0,
                                      };
                            },
                            [n, s]
                        ),
                        f = r.default.useCallback(
                            function (e) {
                                if (null != c.current) {
                                    var a,
                                        t = (0, l.getClientPoint)(e),
                                        n = g(e);
                                    if (null != t && null != n)
                                        null === (a = p.current) || void 0 === a || a.call(p, t, n, e);
                                }
                            },
                            [g, p]
                        ),
                        m = r.default.useCallback(
                            function (e) {
                                if (null != c.current) {
                                    var a,
                                        t = (0, l.getClientPoint)(e),
                                        n = g(e);
                                    if (null != t && null != n)
                                        !1 !==
                                            (null === (a = h.current) || void 0 === a ? void 0 : a.call(h, t, n, e)) &&
                                            e.cancelable &&
                                            e.preventDefault();
                                    (c.current = null),
                                        window.removeEventListener("mousemove", f),
                                        window.removeEventListener("touchmove", f),
                                        window.removeEventListener("mouseup", m),
                                        window.removeEventListener("touchend", m);
                                }
                            },
                            [g, f, h]
                        ),
                        y = r.default.useCallback(
                            function (e) {
                                var a,
                                    t = (0, l.getClientPoint)(e);
                                null != t &&
                                    ((c.current = t),
                                    !1 !== (null === (a = d.current) || void 0 === a ? void 0 : a.call(d, t, e)) &&
                                        e.cancelable &&
                                        e.preventDefault(),
                                    window.addEventListener("mousemove", f),
                                    window.addEventListener("touchmove", f),
                                    window.addEventListener("mouseup", m),
                                    window.addEventListener("touchend", m));
                            },
                            [m, f, d]
                        ),
                        b = r.default.useCallback(
                            function (e) {
                                e.addEventListener("mousedown", y), e.addEventListener("touchstart", y);
                            },
                            [y]
                        ),
                        v = r.default.useCallback(
                            function (e) {
                                e.addEventListener("mousedown", y), e.addEventListener("touchstart", y);
                            },
                            [y]
                        );
                    return [
                        r.default.useCallback(
                            function (e) {
                                return function (a) {
                                    (0, o.assignRef)(e, a),
                                        null != u.current && v(u.current),
                                        null != a && b(a),
                                        (0, o.assignRef)(u, a);
                                };
                            },
                            [b, v]
                        ),
                    ];
                });
            var r = n(t(0)),
                o = t(80),
                l = t(25),
                i = t(23);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = a.TappableState = void 0);
            var r = n(t(3)),
                o = n(t(32)),
                l = n(t(12)),
                i = n(t(0)),
                s = t(25),
                u = t(6),
                c = t(9),
                d = t(23),
                p = t(39),
                h = t(22),
                g = n(t(31));

            function f(e, a) {
                var t = i.default.useState(!1),
                    n = (0, l.default)(t, 2),
                    u = n[0],
                    f = n[1],
                    y = i.default.useState(!1),
                    v = (0, l.default)(y, 2),
                    k = v[0],
                    L = v[1],
                    j = i.default.useState(!1),
                    w = (0, l.default)(j, 2),
                    z = w[0],
                    x = w[1],
                    F = e.href,
                    S = e.onTap,
                    P = e.onSecondaryTap,
                    q = e.longTapDuration,
                    C = void 0 === q ? 500 : q,
                    O = e.tag,
                    M = void 0 === O ? (null == F ? "div" : "a") : O,
                    E = e.enabled,
                    D = void 0 === E || E,
                    _ = e.focusable,
                    A = void 0 === _ || _,
                    N = e.cancelOnMove,
                    T = void 0 === N || N,
                    I = e.onStateChange,
                    H = e.classNames,
                    B = e.flex,
                    W = e.style,
                    J = (0, o.default)(e, [
                        "href",
                        "onTap",
                        "onSecondaryTap",
                        "longTapDuration",
                        "tag",
                        "enabled",
                        "focusable",
                        "cancelOnMove",
                        "onStateChange",
                        "classNames",
                        "flex",
                        "style",
                    ]),
                    R = T ? (!0 === T ? 1 : T) : null,
                    K = b(),
                    Z = i.default.useRef(),
                    G = i.default.useCallback(
                        function (e) {
                            (0, d.assignRef)(Z, e), (0, d.assignRef)(a, e);
                        },
                        [a]
                    );
                var U = i.default.useMemo(
                        function () {
                            return null != F && /^\w+:/.test(F);
                        },
                        [F]
                    ),
                    V = i.default.useCallback(function (e) {
                        return (0, s.closest)(e.target, s.isInteractiveElement) === e.currentTarget;
                    }, []),
                    X = i.default.useCallback(
                        function (e) {
                            if (null == F) return !1;
                            if (U) return !0;
                            if ("metaKey" in e) {
                                var a = e;
                                if (a.metaKey || a.altKey || a.ctrlKey) return !0;
                            }
                            return !1;
                        },
                        [F, U]
                    ),
                    $ = i.default.useCallback(
                        function (a) {
                            if (D && V(a) && !X(a)) {
                                var t = !a.cancelable || a.isDefaultPrevented();
                                t || null === S || void 0 === S || S(a),
                                    (t = !a.cancelable || a.isDefaultPrevented()),
                                    !1 !== e.preventDefault && a.cancelable && a.preventDefault();
                            }
                        },
                        [X, D, S, V, e.preventDefault]
                    );
                i.default.useEffect(
                    function () {
                        if (D) {
                            null === I ||
                                void 0 === I ||
                                I({
                                    focused: u,
                                    hover: k,
                                    active: z,
                                });
                        } else {
                            null === I ||
                                void 0 === I ||
                                I({
                                    focused: !1,
                                    hover: !1,
                                    active: !1,
                                });
                        }
                    },
                    [D, u, k, z, I]
                );
                var Y = (0, d.useChainedCallback)(
                        e.onFocus,
                        function (e, a) {
                            D && f(!0), null === e || void 0 === e || e(a);
                        },
                        [D]
                    ),
                    Q = (0, d.useChainedCallback)(
                        e.onBlur,
                        function (e, a) {
                            f(!1), null === e || void 0 === e || e(a);
                        },
                        []
                    ),
                    ee = i.default.useRef(!1),
                    ae = i.default.useRef(),
                    te = i.default.useCallback(
                        function (e) {
                            if (null != R && null != ae.current) {
                                var a = m(e);
                                Math.abs(a.x - ae.current.x) > R && (ee.current = !0),
                                    Math.abs(a.y - ae.current.y) > R && (ee.current = !0);
                            }
                        },
                        [R]
                    ),
                    ne = i.default.useCallback(
                        function (e) {
                            null != R &&
                                null == ae.current &&
                                ((ae.current = m(e)),
                                (ee.current = !1),
                                window.addEventListener("mousemove", te),
                                window.addEventListener("touchmove", te));
                        },
                        [R, te]
                    ),
                    re = i.default.useCallback(
                        function () {
                            if (null != ae.current)
                                return (
                                    window.removeEventListener("mousemove", te),
                                    window.removeEventListener("touchmove", te),
                                    (ae.current = null),
                                    ee.current
                                );
                        },
                        [te]
                    ),
                    oe = (0, h.useTimer)(),
                    le = (0, d.useChainedCallback)(
                        e.onMouseEnter,
                        function (e, a) {
                            D && L(!0), null === e || void 0 === e || e(a);
                        },
                        [D]
                    ),
                    ie = (0, d.useChainedCallback)(
                        e.onMouseLeave,
                        function (e, a) {
                            L(!1), x(!1), re(), null === e || void 0 === e || e(a);
                        },
                        []
                    ),
                    se = (0, d.useChainedCallback)(
                        e.onTouchStart,
                        function (e, a) {
                            V(a) && D && x(!0),
                                ne(a.nativeEvent),
                                null === e || void 0 === e || e(a),
                                null != P &&
                                    (oe.clearAll(),
                                    oe.setTimeout(function () {
                                        null === P || void 0 === P || P();
                                    }, C));
                        },
                        [D]
                    ),
                    ue = (0, d.useChainedCallback)(
                        e.onTouchEnd,
                        function (e, a) {
                            V(a) && x(!1), re(), null === e || void 0 === e || e(a), oe.clearAll(), $(a);
                        },
                        [$]
                    ),
                    ce = (0, d.useChainedCallback)(
                        e.onTouchCancel,
                        function (e, a) {
                            V(a) && (L(!1), x(!1)), re(), null === e || void 0 === e || e(a), oe.clearAll();
                        },
                        []
                    ),
                    de = (0, d.useChainedCallback)(
                        e.onMouseDown,
                        function (e, a) {
                            V(a) && (x(!0), L(!0)),
                                null === e || void 0 === e || e(a),
                                ne(a.nativeEvent),
                                V(a) && a.preventDefault();
                        },
                        [ne]
                    ),
                    pe = (0, d.useChainedCallback)(
                        e.onMouseUp,
                        function (e, a) {
                            V(a) && x(!1), re() || a.preventDefault(), null === e || void 0 === e || e(a);
                        },
                        []
                    ),
                    he = (0, d.useChainedCallback)(
                        e.onClick,
                        function (e, a) {
                            null === e || void 0 === e || e(a), ee.current ? a.preventDefault() : $(a);
                        },
                        [$]
                    ),
                    ge = (0, d.useChainedCallback)(
                        e.onDoubleClick,
                        function (e, a) {
                            null === e || void 0 === e || e(a),
                                ee.current ? a.preventDefault() : null === P || void 0 === P || P();
                        },
                        [$]
                    ),
                    fe = (0, d.useChainedCallback)(
                        e.onKeyDown,
                        function (e, a) {
                            null === e || void 0 === e || e(a), (32 === a.which || 13 === a.which) && $(a);
                        },
                        [$]
                    ),
                    me = e.autoFocus;
                return (
                    i.default.useEffect(
                        function () {
                            var e;
                            me && (null === (e = Z.current) || void 0 === e || e.focus());
                        },
                        [me]
                    ),
                    (function () {
                        var e = [K.tappable, !D && K.disabled, H],
                            a = (0, r.default)((0, r.default)({}, (0, p.flexStyle)(B)), W);
                        return i.default.createElement(
                            M,
                            (0, r.default)(
                                (0, r.default)(
                                    {
                                        ref: G,
                                        className: (0, g.default)(e),
                                        style: a,
                                        role: "button",
                                        tabIndex: A && D ? 0 : -1,
                                        href: F,
                                        target: U ? "_blank" : void 0,
                                    },
                                    (0, c.omit)(
                                        J,
                                        "onTap",
                                        "onStateChange",
                                        "preventDefault",
                                        "target",
                                        "staticContext",
                                        "match",
                                        "location"
                                    )
                                ),
                                {},
                                {
                                    onFocus: Y,
                                    onBlur: Q,
                                    onMouseEnter: le,
                                    onMouseLeave: ie,
                                    onTouchStart: se,
                                    onTouchCancel: ce,
                                    onMouseDown: de,
                                    onMouseUp: pe,
                                    onTouchEnd: ue,
                                    onClick: he,
                                    onDoubleClick: ge,
                                    onKeyDown: fe,
                                }
                            )
                        );
                    })()
                );
            }

            function m(e) {
                return e instanceof MouseEvent
                    ? {
                          x: e.pageX,
                          y: e.pageY,
                      }
                    : {
                          x: e.touches[0].pageX,
                          y: e.touches[0].pageY,
                      };
            }
            a.TappableState = {
                empty: {
                    focused: !1,
                    hover: !1,
                    active: !1,
                },
            };
            var y = i.default.forwardRef(f);
            a.default = y;
            var b = (0, u.createUseStyles)(function (e) {
                return {
                    tappable: (0, r.default)(
                        {
                            cursor: "pointer",
                            userSelect: "none",
                            outline: "none",
                            textDecoration: "none",
                        },
                        u.layout.flex.column
                    ),
                    disabled: {
                        cursor: "default",
                    },
                };
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                Center: !0,
                Column: !0,
                Grid: !0,
                Row: !0,
            };
            Object.defineProperty(a, "Center", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            }),
                Object.defineProperty(a, "Column", {
                    enumerable: !0,
                    get: function () {
                        return l.default;
                    },
                }),
                Object.defineProperty(a, "Grid", {
                    enumerable: !0,
                    get: function () {
                        return i.default;
                    },
                }),
                Object.defineProperty(a, "Row", {
                    enumerable: !0,
                    get: function () {
                        return s.default;
                    },
                });
            var o = n(t(190)),
                l = n(t(191)),
                i = n(t(192)),
                s = n(t(193)),
                u = t(39);
            Object.keys(u).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === u[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return u[e];
                            },
                        }));
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(0)),
                l = t(10),
                i = t(5),
                s = o.default.forwardRef(function (e, a) {
                    return (0, i.jsx)(
                        l.Column,
                        (0, r.default)(
                            (0, r.default)({}, e),
                            {},
                            {
                                align: "center",
                                justify: "middle",
                                ref: a,
                            }
                        )
                    );
                });
            a.default = s;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(32)),
                l = n(t(0)),
                i = n(t(31)),
                s = t(6),
                u = t(39),
                c = t(5),
                d = l.default.forwardRef(function (e, a) {
                    var t = e.align,
                        n = e.justify,
                        l = e.gap,
                        s = e.padding,
                        d = e.flex,
                        h = e.width,
                        g = e.wrap,
                        f = void 0 !== g && g,
                        m = e.classNames,
                        y = (0, o.default)(e, [
                            "align",
                            "justify",
                            "gap",
                            "padding",
                            "flex",
                            "width",
                            "wrap",
                            "classNames",
                        ]),
                        b = p(e),
                        v = (0, u.useGapStyles)("column", l, !1),
                        k = (0, u.usePaddingStyles)(s),
                        L = [
                            b.column,
                            b[null !== t && void 0 !== t ? t : "stretch"],
                            b[null !== n && void 0 !== n ? n : "top"],
                            null === v || void 0 === v ? void 0 : v.gap,
                            k.padding,
                            {
                                wrap: f,
                            },
                            m,
                        ],
                        j = (0, r.default)(
                            (0, r.default)({}, (0, u.flexStyle)(d)),
                            {},
                            {
                                width: h,
                            },
                            e.style
                        );
                    return (0, c.jsx)(
                        "div",
                        (0, r.default)(
                            (0, r.default)({}, y),
                            {},
                            {
                                className: (0, i.default)(L),
                                style: j,
                                ref: a,
                            }
                        )
                    );
                });
            a.default = d;
            var p = (0, s.createUseStyles)({
                column: (0, r.default)(
                    (0, r.default)({}, s.layout.flex.column),
                    {},
                    {
                        "&.wrap": {
                            flexWrap: "wrap",
                        },
                    }
                ),
                stretch: {
                    alignItems: "stretch",
                },
                left: {
                    alignItems: "flex-start",
                },
                center: {
                    alignItems: "center",
                },
                right: {
                    alignItems: "flex-end",
                },
                top: {
                    justifyContent: "flex-start",
                },
                middle: {
                    justifyContent: "center",
                },
                bottom: {
                    justifyContent: "flex-end",
                },
                "space-between": {
                    justifyContent: "space-between",
                },
                "space-around": {
                    justifyContent: "space-around",
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = function (e) {
                    var a = e.rows,
                        t = e.columns,
                        n = e.gap,
                        i = void 0 === n ? 0 : n,
                        s = e.renderCell,
                        u = e.classNames;

                    function c(e) {
                        return (0, l.jsx)(
                            o.Row,
                            {
                                gap: i,
                                children: (0, r.range)(0, t).map(function (a) {
                                    return (0, l.jsx)(
                                        o.Column,
                                        {
                                            children: s(e, a),
                                        },
                                        a
                                    );
                                }),
                            },
                            e
                        );
                    }
                    return (0, l.jsx)(o.Column, {
                        gap: i,
                        classNames: u,
                        children: (0, r.range)(0, a).map(c),
                    });
                });
            n(t(0));
            var r = t(9),
                o = t(10),
                l = t(5);
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(32)),
                l = n(t(0)),
                i = n(t(31)),
                s = t(6),
                u = t(39),
                c = t(5),
                d = l.default.forwardRef(function (e, a) {
                    var t = e.align,
                        n = e.justify,
                        l = e.gap,
                        s = e.padding,
                        d = e.flex,
                        h = e.wrap,
                        g = void 0 !== h && h,
                        f = e.classNames,
                        m = (0, o.default)(e, ["align", "justify", "gap", "padding", "flex", "wrap", "classNames"]),
                        y = p(e),
                        b = (0, u.useGapStyles)("row", l, g),
                        v = (0, u.usePaddingStyles)(s),
                        k = [
                            y.row,
                            y[null !== t && void 0 !== t ? t : "middle"],
                            y[null !== n && void 0 !== n ? n : "left"],
                            null === b || void 0 === b ? void 0 : b.gap,
                            v.padding,
                            {
                                wrap: g,
                            },
                            f,
                        ],
                        L = (0, r.default)((0, r.default)({}, (0, u.flexStyle)(d)), e.style);
                    return (0, c.jsx)(
                        "div",
                        (0, r.default)(
                            (0, r.default)({}, m),
                            {},
                            {
                                className: (0, i.default)(k),
                                style: L,
                                ref: a,
                                children: e.children,
                            }
                        )
                    );
                });
            a.default = d;
            var p = (0, s.createUseStyles)({
                row: (0, r.default)(
                    (0, r.default)({}, s.layout.flex.row),
                    {},
                    {
                        "&.wrap": {
                            flexWrap: "wrap",
                        },
                    }
                ),
                stretch: {
                    alignItems: "stretch",
                },
                top: {
                    alignItems: "flex-start",
                },
                middle: {
                    alignItems: "center",
                },
                baseline: {
                    alignItems: "baseline",
                },
                bottom: {
                    alignItems: "flex-end",
                },
                left: {
                    justifyContent: "flex-start",
                },
                center: {
                    justifyContent: "center",
                },
                right: {
                    justifyContent: "flex-end",
                },
                "space-between": {
                    justifyContent: "space-between",
                },
                "space-around": {
                    justifyContent: "space-around",
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.timeouts = a.interDelay = a.preDelay = a.crossFadeDuration = a.default = void 0);
            var r = n(t(3)),
                o = (n(t(0)), t(7)),
                l = t(40),
                i = t(88),
                s = t(6),
                u = t(10),
                c = t(23),
                d = n(t(31)),
                p = t(5),
                h = (0, o.observer)("GameContainer", function (e) {
                    var a = e.game,
                        t = a.currentScene,
                        n = a.currentChoice,
                        r = (0, c.usePrevious)(t),
                        o = (null == r && null != t) || (null != r && null == t),
                        s = m();
                    return (0, p.jsx)(u.Column, {
                        flex: !0,
                        classNames: s.gameContainer,
                        children: (0, p.jsx)(i.TransitionGroup, {
                            className: (0, d.default)(s.sceneTransitionContainer, {
                                slowFade: o,
                            }),
                            children:
                                null != t &&
                                (0, p.jsx)(
                                    i.CSSTransition,
                                    {
                                        timeout: f,
                                        appear: !0,
                                        classNames: s.crossFade,
                                        children: (0, p.jsx)(l.SceneView, {
                                            scene: t,
                                            choice: n,
                                        }),
                                    },
                                    t.key
                                ),
                        }),
                    });
                });
            a.default = h;
            var g = {
                normal: 800,
                slow: 1600,
            };
            a.crossFadeDuration = g;
            a.preDelay = 2e3;
            a.interDelay = 300;
            var f = {
                enter: g.normal + 300 + g.normal,
                exit: g.normal,
            };
            a.timeouts = f;
            var m = (0, s.createUseStyles)({
                gameContainer: {
                    position: "relative",
                },
                sceneTransitionContainer: {
                    flex: [1, 0, 0],
                    position: "relative",
                },
                crossFade: (0, r.default)(
                    (0, r.default)({}, s.layout.overlay),
                    {},
                    {
                        "&-enter, &-appear": {
                            opacity: 0,
                        },
                        "&-enter-active, &-appear-active": {
                            animation: "$fade-in-8bit linear ".concat(g.normal, "ms"),
                            animationDelay: g.normal + 300,
                            animationFillMode: "forwards",
                            "$sceneTransitionContainer.slowFade &": {
                                animationDuration: "".concat(g.slow, "ms"),
                            },
                        },
                        "&-exit-active": {
                            animation: "$fade-out-8bit linear ".concat(g.normal, "ms"),
                            animationFillMode: "forwards",
                            "$sceneTransitionContainer.slowFade &": {
                                animationDuration: "".concat(g.slow, "ms"),
                            },
                        },
                        "&-exit-done": {
                            opacity: 0,
                        },
                    }
                ),
                "@keyframes fade-out-8bit": {
                    "0%": {
                        opacity: 1,
                    },
                    "19%": {
                        opacity: 1,
                    },
                    "20%": {
                        opacity: 0.8,
                    },
                    "39%": {
                        opacity: 0.8,
                    },
                    "40%": {
                        opacity: 0.6,
                    },
                    "59%": {
                        opacity: 0.6,
                    },
                    "60%": {
                        opacity: 0.4,
                    },
                    "79%": {
                        opacity: 0.4,
                    },
                    "80%": {
                        opacity: 0.2,
                    },
                    "99%": {
                        opacity: 0.2,
                    },
                    "100%": {
                        opacity: 0,
                    },
                },
                "@keyframes fade-in-8bit": {
                    "0%": {
                        opacity: 0,
                    },
                    "19%": {
                        opacity: 0,
                    },
                    "20%": {
                        opacity: 0.2,
                    },
                    "39%": {
                        opacity: 0.2,
                    },
                    "40%": {
                        opacity: 0.4,
                    },
                    "59%": {
                        opacity: 0.4,
                    },
                    "60%": {
                        opacity: 0.6,
                    },
                    "79%": {
                        opacity: 0.6,
                    },
                    "80%": {
                        opacity: 0.8,
                    },
                    "99%": {
                        opacity: 0.8,
                    },
                    "100%": {
                        opacity: 0.8,
                    },
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.hondje = a.keezer = a.default = void 0);
            var r = n(t(3)),
                o = n(t(0)),
                l = t(7),
                i = t(10),
                s = t(6),
                u = n(t(196)),
                c = n(t(197)),
                d = n(t(198)),
                p = t(19),
                h = t(52),
                g = n(t(199)),
                f = n(t(200)),
                m = n(t(201)),
                y = t(206),
                b = n(t(85)),
                v = t(53),
                k = n(t(44)),
                L = n(t(86)),
                j = t(14),
                w = n(t(81)),
                z = n(t(209)),
                x = t(22),
                F = t(5),
                S = (0, l.memo)("SceneView", function (e) {
                    var a = e.scene,
                        t = e.choice,
                        n = e.interactionEnabled,
                        r = void 0 === n || n,
                        l = a.getChoices(),
                        s = l.length > 0,
                        p = (0, y.useSceneTimeline)(a),
                        S = p.timeline,
                        O = p.advance,
                        M = p.skip,
                        E = p.status,
                        D = p.lines,
                        _ = p.positions,
                        A = p.hidden,
                        N = p.flipped,
                        T = p.give,
                        I = p.hold,
                        H = p.statuses,
                        B = p.background,
                        W = p.lastAction,
                        J = p.transitionStatuses,
                        R = o.default.useCallback(
                            function (e, a) {
                                var t, n, r;
                                return a
                                    ? null !== (t = null !== (n = J[e]) && void 0 !== n ? n : H[e]) && void 0 !== t
                                        ? t
                                        : null
                                    : null !== (r = H[e]) && void 0 !== r
                                      ? r
                                      : null;
                            },
                            [H, J]
                        ),
                        K = (0, x.useTimer)();
                    o.default.useEffect(
                        function () {
                            if ("preparing" !== E)
                                if ("prepared" === E) S.enter();
                                else if ("entered" !== E || (s && null == t)) {
                                    if ("exited" === E) {
                                        var e;
                                        if (DEV) null === (e = j.gameStore.game) || void 0 === e || e.advance();
                                        else
                                            K.debounce(function () {
                                                var e;
                                                null === (e = j.gameStore.game) || void 0 === e || e.advance();
                                            }, 600);
                                    }
                                } else S.clearDialogue(), S.exit(t);
                        },
                        [K, t, l.length, s, a, E, S]
                    ),
                        (0, v.useHotkey)(
                            r ? "Space | Enter" : null,
                            o.default.useCallback(
                                function (e, a) {
                                    if (a.metaKey || a.ctrlKey || a.altKey || a.shiftKey) return !1;
                                    M();
                                },
                                [M]
                            )
                        );
                    var Z = !("exit" === E && W),
                        G = D[D.length - 1],
                        U =
                            null == G
                                ? null
                                : null == G.character
                                  ? G.text
                                  : "".concat(G.character, " zegt: ").concat(G.text),
                        V =
                            "entered" === E && s
                                ? "Keuzes beschikbaar"
                                : "".concat(null !== U && void 0 !== U ? U : "", ", klik om verder te gaan"),
                        X = C();

                    function $() {
                        var e,
                            a,
                            t,
                            n,
                            r =
                                null !== (e = null === (a = _.keezer) || void 0 === a ? void 0 : a[0]) && void 0 !== e
                                    ? e
                                    : (0, h.positionForCharacter)(P, 0),
                            o =
                                null !== (t = null === (n = _.keezer) || void 0 === n ? void 0 : n[1]) && void 0 !== t
                                    ? t
                                    : null,
                            l = null != I || null != T;
                        return (0, F.jsx)(c.default, {
                            name: "keezer",
                            position: r,
                            speed: o,
                            allowSkip: Z,
                            onMoveComplete: O,
                            children: function (e) {
                                var a;
                                return (0, F.jsxs)(i.Row, {
                                    classNames: X.keezerContainer,
                                    align: "bottom",
                                    children: [
                                        (0, F.jsx)(b.default, {
                                            status:
                                                null !== (a = R("keezer", e)) && void 0 !== a
                                                    ? a
                                                    : l
                                                      ? "steekthanduit"
                                                      : null,
                                            walking: "lopend" === R("keezerbenen", e),
                                            flipped: N.keezer,
                                            hidden: A.keezer,
                                            hold: null !== T && void 0 !== T ? T : I,
                                        }),
                                        (0, F.jsx)("div", {
                                            className: X.hondje,
                                            children: (0, F.jsx)(g.default, {
                                                character: q,
                                                status: R("hondje", e),
                                                flipped: N.keezer,
                                                hidden: A.keezer || A.hondje,
                                            }),
                                        }),
                                    ],
                                });
                            },
                        });
                    }

                    function Y(e, t) {
                        var n, r, o, l;
                        if (null == e) return null;
                        var i =
                                null !== (n = null === (r = _[e.name]) || void 0 === r ? void 0 : r[0]) && void 0 !== n
                                    ? n
                                    : (0, h.positionForCharacter)(e, t),
                            s =
                                null !== (o = null === (l = _[e.name]) || void 0 === l ? void 0 : l[1]) && void 0 !== o
                                    ? o
                                    : null,
                            u = a.objects.filter(function (a) {
                                return a.attachedTo === e.name;
                            }),
                            d = N[e.name];
                        return (0, F.jsx)(
                            c.default,
                            {
                                name: e.name,
                                position: i,
                                speed: s,
                                allowSkip: Z,
                                onMoveComplete: O,
                                children: function (a) {
                                    return (0, F.jsxs)(F.Fragment, {
                                        children: [
                                            (0, F.jsx)(g.default, {
                                                character: e,
                                                status: R(e.name, a),
                                                flipped: d,
                                                hidden: A[e.name],
                                            }),
                                            u.map(function (e) {
                                                return (0, F.jsx)(
                                                    L.default,
                                                    {
                                                        object: e,
                                                        status: R(e.name, a),
                                                        hidden: A[e.name],
                                                    },
                                                    e.name
                                                );
                                            }),
                                        ],
                                    });
                                },
                            },
                            "".concat(e.name, "-").concat(t)
                        );
                    }

                    function Q(e, a) {
                        var t,
                            n,
                            r,
                            o,
                            l,
                            i =
                                null !== (t = null === (n = _[e.name]) || void 0 === n ? void 0 : n[0]) && void 0 !== t
                                    ? t
                                    : (0, h.positionForObject)(e, a),
                            s =
                                null !== (r = null === (o = _[e.name]) || void 0 === o ? void 0 : o[1]) && void 0 !== r
                                    ? r
                                    : null;
                        return (0, F.jsx)(
                            c.default,
                            {
                                name: e.name,
                                position: i,
                                speed: s,
                                allowSkip: Z,
                                children: (0, F.jsx)(L.default, {
                                    object: e,
                                    status: null !== (l = H[e.name]) && void 0 !== l ? l : null,
                                    hidden: A[e.name],
                                }),
                            },
                            e.name
                        );
                    }

                    function ee(e, t) {
                        if (null == e.character)
                            return (0, F.jsx)(
                                d.default,
                                {
                                    active: e.current,
                                    children: e.text,
                                },
                                t
                            );
                        var n = a.characterPosition(e.character);
                        return (0, F.jsx)(
                            f.default,
                            {
                                position: n,
                                sequence: e.sequence,
                                active: e.current,
                                character: e.character,
                                children: e.text,
                            },
                            e.text
                        );
                    }
                    return (0, F.jsxs)(w.default, {
                        classNames: X.sceneViewContainer,
                        children: [
                            (0, F.jsx)(i.Tappable, {
                                className: X.background,
                                enabled: r,
                                onTap: M,
                                "aria-label": V,
                                children: (0, F.jsx)(
                                    u.default,
                                    {
                                        sceneKey: a.key,
                                        imagery: a.imagery,
                                        paused: "paused" === B,
                                    },
                                    a.imagery.name
                                ),
                            }),
                            (0, F.jsx)("div", {
                                className: X.content,
                                children: (0, F.jsxs)(F.Fragment, {
                                    children: [
                                        0 === a.characters.length
                                            ? a.objects.map(Q)
                                            : a.objects
                                                  .filter(function (e) {
                                                      return null == e.attachedTo;
                                                  })
                                                  .map(Q),
                                        a.characters.map(Y),
                                        $(),
                                    ],
                                }),
                            }),
                            (0, F.jsx)(
                                u.default,
                                {
                                    sceneKey: a.key,
                                    imagery: a.imagery,
                                    foreground: !0,
                                },
                                "".concat(a.imagery.name, "-fg")
                            ),
                            (0, F.jsxs)("div", {
                                className: X.texts,
                                children: [
                                    D.map(ee),
                                    "entered" === E &&
                                        (s
                                            ? (0, F.jsx)(m.default, {
                                                  choices: l,
                                                  interactionEnabled: r,
                                              })
                                            : null),
                                ],
                            }),
                            (0, F.jsx)(z.default, {}),
                            (0, F.jsxs)("div", {
                                className: X.overlay,
                                children: [
                                    (0, F.jsx)(k.default, {}),
                                    DEV &&
                                        (0, F.jsx)(i.Column, {
                                            classNames: X.dev,
                                            children: (0, F.jsx)(i.Label, {
                                                children: a.key,
                                            }),
                                        }),
                                ],
                            }),
                        ],
                    });
                });
            a.default = S;
            var P = {
                name: "keezer",
                flipped: !1,
            };
            a.keezer = P;
            var q = {
                name: "hondje",
                flipped: !1,
            };
            a.hondje = q;
            var C = (0, s.createUseStyles)({
                sceneViewContainer: (0, r.default)(
                    (0, r.default)({}, s.layout.overlay),
                    {},
                    {
                        pointerEvents: "none",
                    }
                ),
                background: (0, r.default)(
                    (0, r.default)({}, s.layout.overlay),
                    {},
                    {
                        pointerEvents: "auto",
                    }
                ),
                sceneView: (0, r.default)(
                    {
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginLeft: -p.sceneSize.width / 2,
                        marginTop: -p.sceneSize.height / 2,
                        overflow: "hidden",
                    },
                    p.sceneSize
                ),
                content: (0, r.default)({}, s.layout.overlay),
                texts: (0, r.default)({}, s.layout.overlay),
                overlay: (0, r.default)({}, s.layout.overlay),
                keezerContainer: {
                    position: "relative",
                    left: 60,
                },
                hondje: {
                    position: "absolute",
                    bottom: 0,
                    left: 220,
                },
                dev: {
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                },
                defs: {
                    position: "absolute",
                    width: 0,
                    height: 0,
                    visibility: "hidden",
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = (n(t(0)), t(7)),
                l = t(6),
                i = t(23),
                s = t(5),
                u = (0, o.memo)("SceneBackground", function (e) {
                    var a = e.imagery,
                        t = e.foreground,
                        n = void 0 !== t && t,
                        r = e.paused,
                        o = void 0 !== r && r,
                        l = "d66-pvdd" === e.sceneKey,
                        u = "boszonsondergang" === a.name ? 8 : 4,
                        d = (0, i.useLayerAnim)(l ? [] : a.bganim, o ? 0 : u),
                        p = (0, i.useLayerAnim)(a.fganim, o ? 0 : u),
                        h = c();

                    function g(e) {
                        return (0, s.jsx)("img", {
                            className: h.layer,
                            src: scenepad + "/".concat(e, ".png"),
                            alt: a.name,
                        });
                    }
                    return (0, s.jsxs)("div", {
                        className: h.SceneBackground,
                        children: [
                            !n &&
                                (null == a
                                    ? null
                                    : (0, s.jsxs)(s.Fragment, {
                                          children: [g(a.bg), null != d.current && g(d.current)],
                                      })),
                            n &&
                                (null == a
                                    ? null
                                    : (0, s.jsxs)(s.Fragment, {
                                          children: [null != a.fg && g(a.fg), null != p.current && g(p.current)],
                                      })),
                        ],
                    });
                });
            a.default = u;
            var c = (0, l.createUseStyles)({
                SceneBackground: (0, r.default)({}, l.layout.overlay),
                layer: (0, r.default)(
                    (0, r.default)({}, l.layout.overlay),
                    {},
                    {
                        width: "100%",
                        height: "100%",
                    }
                ),
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = a.PIXEL = a.FRAME = void 0);
            var r = n(t(12)),
                o = n(t(0)),
                l = t(7),
                i = t(6),
                s = t(19),
                u = t(52),
                c = t(10),
                d = t(22),
                p = t(9),
                h = t(5),
                g = (0, l.component)("SceneView.Sprite", function (e) {
                    var a = e.name,
                        t = e.position,
                        n = e.speed,
                        l = void 0 === n ? null : n,
                        i = e.align,
                        g = e.allowSkip,
                        y = void 0 !== g && g,
                        v = e.onMoveComplete,
                        k = e.children,
                        L = (0, u.positionCoords)(t, a),
                        j = null !== i && void 0 !== i ? i : (0, u.horizontalAlignmentForPosition)(a, t),
                        w = (0, u.verticalAlignmentForPosition)(t),
                        z = (0, r.default)(L, 2),
                        x = z[0],
                        F = z[1];
                    "number" === typeof x && x < 0 && (x += s.sceneSize.width),
                        "number" === typeof F && F < 0 && (F += s.sceneSize.height);
                    var S = o.default.useState(x),
                        P = (0, r.default)(S, 2),
                        q = P[0],
                        C = P[1],
                        O = o.default.useState(F),
                        M = (0, r.default)(O, 2),
                        E = M[0],
                        D = M[1],
                        _ = o.default.useRef(x),
                        A = o.default.useRef(F),
                        N = (0, d.useTimer)(),
                        T = o.default.useState(!1),
                        I = (0, r.default)(T, 2),
                        H = I[0],
                        B = I[1],
                        W = o.default.useCallback(
                            function (e, a, t, n, r) {
                                N.clearAll();
                                var o = Date.now();
                                B(!0);
                                N.setTimeout(function l() {
                                    var i = (Date.now() - o) / 1e3,
                                        s = t >= e ? e + i * r : e - i * r,
                                        u = n >= a ? a + i * r : a - i * r,
                                        c = t >= e ? s >= t : s <= t,
                                        d = n >= a ? u >= n : u <= n;
                                    C(c ? t : Math.round(s / m) * m),
                                        D(d ? n : Math.round(u / m) * m),
                                        c && d ? (null === v || void 0 === v || v(), B(!1)) : N.setTimeout(l, f);
                                }, f);
                            },
                            [v, N]
                        ),
                        J = o.default.useCallback(
                            function () {
                                B(!1), N.clearAll();
                            },
                            [N]
                        );
                    o.default.useLayoutEffect(
                        function () {
                            var e = x !== _.current || F !== A.current;
                            if (((_.current = x), (A.current = F), null == l)) {
                                if (!y) return;
                                J(), (e || H) && (C(x), D(F));
                            } else e && W(q, E, x, F, l);
                        },
                        [y, q, E, a, l, W, J, H, x, F]
                    );
                    var R = {
                            transform: "translate(".concat(q, "px, ").concat(E, "px)"),
                        },
                        K = b();
                    return (0, h.jsx)(c.Row, {
                        classNames: K.sprite,
                        justify: j,
                        align: w,
                        style: R,
                        children: (0, p.isFunction)(k) ? k(H) : k,
                    });
                }),
                f = 16;
            a.FRAME = f;
            var m = 10;
            a.PIXEL = m;
            var y = g;
            a.default = y;
            var b = (0, i.createUseStyles)({
                sprite: {
                    position: "absolute",
                    overflow: "visible",
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0,
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            n(t(0));
            var r = t(7),
                o = t(10),
                l = n(t(78)),
                i = t(6),
                s = n(t(37)),
                u = t(5),
                c = (0, r.memo)("IntroText", function (e) {
                    var a = e.children,
                        t = e.active,
                        n = d();
                    return (0, u.jsx)(
                        o.Column,
                        {
                            classNames: n.introText,
                            children: (0, u.jsx)(l.default, {
                                align: "left",
                                transform: "upper",
                                animated: t,
                                shadow: !0,
                                "aria-label": a,
                                children: a,
                            }),
                        },
                        a
                    );
                });
            a.default = c;
            var d = (0, i.createUseStyles)({
                introText: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: 40,
                    paddingRight: 120,
                    fontFamily: i.fonts.family.game,
                    fontSize: 40,
                    background: new s.default("black").alpha(0.4),
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(0)),
                o = t(7),
                l = t(10),
                i = t(6),
                s = t(38),
                u = t(23),
                c = t(5),
                d = (0, o.memo)("CharacterView", function (e) {
                    var a,
                        t,
                        n = e.character,
                        o = n.name,
                        i = n.flipped,
                        d = e.flipped,
                        h = void 0 === d ? i : d,
                        g = e.status,
                        f = e.hidden,
                        m = void 0 !== f && f,
                        y = s.characters.find(function (e) {
                            return e.name === o && e.status === g;
                        }),
                        b = r.default.useMemo(
                            function () {
                                var e;
                                return null !== (e = null === y || void 0 === y ? void 0 : y.anim) && void 0 !== e
                                    ? e
                                    : [];
                            },
                            [null === y || void 0 === y ? void 0 : y.anim]
                        ),
                        v =
                            null !==
                                (a =
                                    null !== (t = (0, u.useLayerAnim)(m ? [] : b, "rent" === g ? 8 : 4).current) &&
                                    void 0 !== t
                                        ? t
                                        : null === y || void 0 === y
                                          ? void 0
                                          : y.layer) && void 0 !== a
                                ? a
                                : null,
                        k = "hondje" === o;
                    r.default.useEffect(
                        function () {
                            null == y && console.warn('Character "'.concat(o, '" (').concat(g, ") not found"));
                        },
                        [y, o, g]
                    );
                    var L = p();
                    return null == y
                        ? (0, c.jsx)(l.SVG, {
                              size: {
                                  width: 140,
                                  height: 190,
                              },
                          })
                        : (0, c.jsx)(l.Column, {
                              classNames: [
                                  L.character,
                                  {
                                      flipped: h,
                                      hondje: k,
                                      hidden: m,
                                  },
                              ],
                              children: (0, c.jsx)("img", {
                                  className: L.image,
                                  src: personagepad + "/".concat(v, ".png"),
                                  alt: o,
                                  "aria-hidden": !0,
                              }),
                          });
                });
            a.default = d;
            var p = (0, i.createUseStyles)({
                character: {
                    "&.flipped": {
                        transform: "scaleX(-1)",
                    },
                    "&.hondje": {
                        width: 300,
                        height: 130,
                        margin: [0, -100],
                    },
                    "&.hidden": {
                        visibility: "hidden",
                    },
                },
                image: {
                    width: "100%",
                    height: "100%",
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.margin = a.width = a.default = void 0);
            var r = n(t(12)),
                o = n(t(0)),
                l = t(7),
                i = t(6),
                s = t(10),
                u = t(19),
                c = t(52),
                d = t(9),
                p = t(5),
                h = (0, l.memo)("TextBubble", function (e) {
                    var a = e.sequence,
                        t = e.position,
                        n = e.active,
                        l = e.character,
                        i = void 0 === l ? null : l,
                        h = e.children,
                        y = "".concat(a, "::").concat(h),
                        b = o.default.useMemo(
                            function () {
                                return null != t ? (0, c.positionCoords)(t, null) : null;
                            },
                            [t]
                        ),
                        v = o.default.useMemo(
                            function () {
                                var e,
                                    a =
                                        null !== (e = null === b || void 0 === b ? void 0 : b[0]) && void 0 !== e
                                            ? e
                                            : null;
                                return null == a || "string" === typeof a
                                    ? u.sceneSize.width / 2
                                    : a < 0
                                      ? a + u.sceneSize.width
                                      : a;
                            },
                            [b]
                        ),
                        k = o.default.useMemo(function () {
                            return [4 * f, "top"];
                        }, []),
                        L = (0, r.default)(k, 2),
                        j = L[0],
                        w = L[1],
                        z = o.default.useMemo(
                            function () {
                                var e = (0, d.clamp)(v - (2 * g) / 3, f, u.sceneSize.width - f - g);
                                return (e += 80 * ((a % 2) - 0.5));
                            },
                            [v, a]
                        ),
                        x = m(),
                        F = null == i ? h : "".concat(i, " zegt: ").concat(h);
                    return (0, p.jsx)(
                        s.Row,
                        {
                            classNames: x.textBubble,
                            style: {
                                top: j,
                                left: z,
                            },
                            align: w,
                            children: (0, p.jsx)(s.Bubble, {
                                style: {
                                    width: g,
                                },
                                children: (0, p.jsx)(s.Label, {
                                    align: "center",
                                    transform: "upper",
                                    animated: n,
                                    "aria-label": F,
                                    children: h,
                                }),
                            }),
                        },
                        y
                    );
                });
            a.default = h;
            var g = 1280;
            a.width = g;
            var f = 40;
            a.margin = f;
            var m = (0, i.createUseStyles)({
                textBubble: {
                    position: "absolute",
                    width: 0,
                    height: 0,
                    fontFamily: i.fonts.family.game,
                    fontSize: 40,
                    "& > *": {
                        position: "absolute",
                    },
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.margin = a.width = a.default = void 0);
            var r = n(t(12)),
                o = n(t(0)),
                l = t(7),
                i = t(6),
                s = t(10),
                u = n(t(49)),
                c = t(53),
                d = t(14),
                p = t(5),
                h = (0, l.memo)("ChoiceBubble", function (e) {
                    var a = e.choices,
                        t = e.interactionEnabled,
                        n = o.default.useState(!1),
                        l = (0, r.default)(n, 2),
                        i = l[0],
                        u = l[1],
                        h = o.default.useState(a[0]),
                        f = (0, r.default)(h, 2),
                        y = f[0],
                        b = f[1],
                        v = o.default.useCallback(
                            function () {
                                var e = a.indexOf(y);
                                if (e < 0) b(a[0]);
                                else {
                                    var t = e - 1;
                                    t < 0 && (t += a.length), b(a[t]);
                                }
                            },
                            [a, y]
                        ),
                        k = o.default.useCallback(
                            function () {
                                var e = a.indexOf(y);
                                if (e < 0) b(a[a.length - 1]);
                                else {
                                    var t = e + 1;
                                    t > a.length - 1 && (t -= a.length), b(a[t]);
                                }
                            },
                            [a, y]
                        ),
                        L = o.default.useCallback(
                            function () {
                                u(!0);
                                var e = d.gameStore.game;
                                null === e || void 0 === e || e.commitChoice(y);
                            },
                            [y]
                        ),
                        j = t && !i;
                    (0, c.useHotkey)(j ? "ArrowUp" : null, v),
                        (0, c.useHotkey)(j ? "ArrowDown" : null, k),
                        (0, c.useHotkey)(j ? "Enter" : null, L);
                    var w = m();

                    function z(e) {
                        return (0, p.jsx)(
                            g,
                            {
                                choice: e,
                                selected: e === y,
                                enabled: j,
                                onSelect: b,
                                onCommit: L,
                            },
                            e.party
                        );
                    }
                    return (0, p.jsx)(s.Bubble, {
                        classNames: w.choiceBubble,
                        children: (0, p.jsx)(s.Column, {
                            gap: 32,
                            children: a.map(z),
                        }),
                    });
                }),
                g = (0, l.memo)("ChoiceBubble.Choice", function (e) {
                    var a = e.choice,
                        t = e.selected,
                        n = e.enabled,
                        r = e.onSelect,
                        l = e.onCommit,
                        c = o.default.useCallback(
                            function () {
                                t ? l() : r(a);
                            },
                            [a, l, r, t]
                        ),
                        d = m(),
                        h = a.text;
                    return (0, p.jsx)(s.Tappable, {
                        classNames: [
                            d.choiceLine,
                            {
                                selected: t,
                            },
                        ],
                        enabled: n,
                        onTap: c,
                        "aria-label": h,
                        "aria-checked": t,
                        children: (0, p.jsxs)(s.Row, {
                            gap: 32,
                            children: [
                                (0, p.jsx)(s.SVG, {
                                    svg: t ? u.default.arrow : u.default.empty,
                                    size: {
                                        width: 32,
                                        height: 64,
                                    },
                                    color: i.colors.black,
                                }),
                                (0, p.jsx)(s.Label, {
                                    flex: !0,
                                    transform: "upper",
                                    children: a.text,
                                }),
                            ],
                        }),
                    });
                }),
                f = h;
            a.default = f;
            a.width = 1280;
            a.margin = 80;
            var m = (0, i.createUseStyles)({
                choiceBubble: {
                    position: "absolute",
                    bottom: 80,
                    left: 80,
                    width: 1280,
                    pointerEvents: "auto",
                },
                choiceLine: {
                    fontFamily: i.fonts.family.game,
                    fontSize: 40,
                    cursor: "pointer",
                    "&:not(.selected)": {
                        color: i.colors.black.alpha(0.6),
                    },
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            });
            var r = {
                Binding: !0,
            };
            Object.defineProperty(a, "Binding", {
                enumerable: !0,
                get: function () {
                    return o.default;
                },
            });
            var o = n(t(82)),
                l = t(203);
            Object.keys(l).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === l[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return l[e];
                            },
                        }));
            });
            var i = t(205);
            Object.keys(i).forEach(function (e) {
                "default" !== e &&
                    "__esModule" !== e &&
                    (Object.prototype.hasOwnProperty.call(r, e) ||
                        (e in a && a[e] === i[e]) ||
                        Object.defineProperty(a, e, {
                            enumerable: !0,
                            get: function () {
                                return i[e];
                            },
                        }));
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.useHotkey = function (e, a) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = r.default.useCallback(
                            function () {
                                var n = null == e ? [] : l.default.parseCombinations(e);
                                if (0 === n.length) return null;
                                var r = new o.default(n, a, t);
                                return r.bind(), r;
                            },
                            [a, e, t]
                        );
                    r.default.useEffect(
                        function () {
                            var e = n();
                            return function () {
                                null === e || void 0 === e || e.unbind();
                            };
                        },
                        [n]
                    );
                });
            var r = n(t(0)),
                o = n(t(82)),
                l = n(t(204));
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(21)),
                o = n(t(17)),
                l = n(t(18)),
                i = n(t(11)),
                s = t(83),
                u = (function () {
                    function e(a, t) {
                        (0, o.default)(this, e),
                            (this.descriptor = a),
                            (this.strokes = t),
                            (0, i.default)(this, "canonizedDescriptor", void 0);
                    }
                    return (
                        (0, l.default)(
                            e,
                            [
                                {
                                    key: "match",
                                    value: function (e) {
                                        if (e.length !== this.strokes.length) return !1;
                                        for (var a = 0; a < e.length; a++)
                                            if (!this.matchStroke(this.strokes[a], e[a])) return !1;
                                        return !0;
                                    },
                                },
                                {
                                    key: "matchStroke",
                                    value: function (e, a) {
                                        var t, n;
                                        return (
                                            "*" === e.key ||
                                            ((null === (t = e.key) || void 0 === t ? void 0 : t.toUpperCase()) ===
                                                (null === (n = a.key) || void 0 === n ? void 0 : n.toUpperCase()) &&
                                                e.shiftKey === a.shiftKey &&
                                                e.altKey === a.altKey &&
                                                e.ctrlKey === a.ctrlKey &&
                                                e.metaKey === a.metaKey)
                                        );
                                    },
                                },
                                {
                                    key: "description",
                                    value: function () {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            a = e.format,
                                            t = void 0 === a ? "short-mac" : a,
                                            n = function (e) {
                                                if ("long" !== t && (0, s.isMac)())
                                                    switch (e) {
                                                        case "shift":
                                                            return "\u2b06";
                                                        case "control":
                                                            return "^";
                                                        case "option":
                                                            return "\u2325";
                                                        case "meta":
                                                        case "short":
                                                            return "\u2318";
                                                        default:
                                                            return e;
                                                    }
                                                else
                                                    switch (e) {
                                                        case "shift":
                                                            return "Shift";
                                                        case "control":
                                                            return "Ctrl";
                                                        case "option":
                                                            return (0, s.isMac)() ? "Opt" : "Alt";
                                                        case "short":
                                                            return (0, s.isMac)()
                                                                ? "Cmd"
                                                                : (0, s.isWin)()
                                                                  ? "Win"
                                                                  : "Meta";
                                                        default:
                                                            return e;
                                                    }
                                            };
                                        if ("long" === t) {
                                            var r = (0, s.isMac)() ? "+" : "-";
                                            return this.canonizedDescriptor.split("+").map(n).join(r);
                                        }
                                        return this.canonizedDescriptor.split("+").map(n).join("");
                                    },
                                },
                            ],
                            [
                                {
                                    key: "parseCombinations",
                                    value: function (e) {
                                        var a = this;
                                        return e
                                            .split("|")
                                            .map(function (e) {
                                                return a.parseCombination(e.trim());
                                            })
                                            .filter(Boolean);
                                    },
                                },
                                {
                                    key: "parseCombination",
                                    value: function (a) {
                                        var t = a
                                            .toLowerCase()
                                            .split(",")
                                            .map(function (e) {
                                                return e.trim();
                                            })
                                            .filter(Boolean);
                                        if (0 === t.length)
                                            return console.warn("Found empty key stroke: `".concat(a, "`")), null;
                                        var n,
                                            o = new e(a, []),
                                            l = [],
                                            i = (0, r.default)(t);
                                        try {
                                            for (i.s(); !(n = i.n()).done; ) {
                                                var u = n.value,
                                                    c = {
                                                        key: null,
                                                        shiftKey: !1,
                                                        altKey: !1,
                                                        ctrlKey: !1,
                                                        metaKey: !1,
                                                    };
                                                u = (u = (u = (u = (u = (u = u.replace(
                                                    /^\^\u2318(\w)$/,
                                                    "shortcut+$1"
                                                )).replace(/^\^(\w)$/, "ctrl+$1")).replace(
                                                    /^\u2387(\w)$/,
                                                    "opt+$1"
                                                )).replace(/^\u2318(\w)$/, "cmd+$1")).replace(/[-+]\+/, "+=")).replace(
                                                    /[-+]-/,
                                                    "+_"
                                                );
                                                var d,
                                                    p = (0, r.default)(u.split(/[-+]/));
                                                try {
                                                    for (p.s(); !(d = p.n()).done; ) {
                                                        var h = d.value;
                                                        if (/(alt|opt(ion))/.test(h)) (c.altKey = !0), l.push("option");
                                                        else if (/(shift)/.test(h)) (c.shiftKey = !0), l.push("shift");
                                                        else if (/(meta|win|mac|cmd)/.test(h))
                                                            (c.metaKey = !0), l.push("meta");
                                                        else if (/(ctrl|control)/.test(h))
                                                            (c.ctrlKey = !0), l.push("control");
                                                        else if (/(shrt|short)/.test(h))
                                                            (c[(0, s.isMac)() ? "metaKey" : "ctrlKey"] = !0),
                                                                l.push("short");
                                                        else {
                                                            if (null != c.key)
                                                                return (
                                                                    console.warn(
                                                                        "Found double keystroke: `".concat(a, "`")
                                                                    ),
                                                                    null
                                                                );
                                                            (c.key = (0, s.keyToKeyCode)(h)),
                                                                l.push("_" === h ? "\u2013" : h.toUpperCase());
                                                        }
                                                    }
                                                } catch (g) {
                                                    p.e(g);
                                                } finally {
                                                    p.f();
                                                }
                                                o.strokes.push(c);
                                            }
                                        } catch (g) {
                                            i.e(g);
                                        } finally {
                                            i.f();
                                        }
                                        return (o.canonizedDescriptor = l.join("+")), o;
                                    },
                                },
                            ]
                        ),
                        e
                    );
                })();
            a.default = u;
        },
        function (e, a, t) {},
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.useSceneTimeline = function (e) {
                    var a = (0, s.useTimer)(),
                        t = l.default.useMemo(
                            function () {
                                return new i.default(e);
                            },
                            [e]
                        ),
                        n = l.default.useState(!1),
                        u = (0, o.default)(n, 2),
                        c = u[0],
                        d = u[1],
                        p = l.default.useState(t.state),
                        h = (0, o.default)(p, 2),
                        g = h[0],
                        f = h[1];
                    l.default.useEffect(
                        function () {
                            return (
                                (t.listener = function (e) {
                                    f(e);
                                }),
                                t.prepare(),
                                a.setTimeout(function () {
                                    d(!0);
                                }, 16),
                                function () {
                                    t.dispose();
                                }
                            );
                        },
                        [t, a]
                    );
                    var m = l.default.useCallback(
                            function () {
                                t.advance();
                            },
                            [t]
                        ),
                        y = l.default.useCallback(
                            function () {
                                t.advance(!0);
                            },
                            [t]
                        );
                    return (0, r.default)(
                        {
                            timeline: t,
                            prepared: c,
                            advance: m,
                            skip: y,
                        },
                        g
                    );
                });
            var r = n(t(3)),
                o = n(t(12)),
                l = n(t(0)),
                i = n(t(84)),
                s = t(22);
        },
        function (e, a) {
            e.exports = {
                attributes: {
                    width: "241px",
                    height: "251px",
                    viewBox: "0 0 241 251",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                },
                content:
                    '<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-neutraal" data-key="all-kleding-neutraal">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-neutraal" data-key="all-huid-neutraal">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-neutraal" data-key="haar1-haar-neutraal">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-neutraal" data-key="haar3-haar-neutraal">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-neutraal" data-key="haar4-haar-neutraal">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-neutraal" data-key="haar1-haaroverlay-neutraal">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-neutraal" data-key="haar3-haaroverlay-neutraal">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-neutraal" data-key="haar4-haaroverlay-neutraal">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-neutraal" data-key="all-rest-neutraal">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-neutraal" data-key="all-bril-neutraal">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-healing" data-key="all-kleding-healing">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-healing" data-key="all-huid-healing">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-healing" data-key="haar1-haar-healing">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-healing" data-key="haar3-haar-healing">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-healing" data-key="haar4-haar-healing">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-healing" data-key="haar1-haaroverlay-healing">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-healing" data-key="haar3-haaroverlay-healing">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-healing" data-key="haar4-haaroverlay-healing">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g fill-rule="nonzero" class="layer rest variant-all status-healing" data-key="all-rest-healing" data-frame="1">             <g transform="translate(81.000000, 130.000000)">                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(0.000000, 10.000000)">                 <g transform="translate(10.000000, 90.000000)" fill="#AEB6FC">                     <rect x="180.9" y="130" width="10" height="10"/>                     <rect x="170.9" y="120" width="10" height="10"/>                     <rect x="190.9" y="120" width="10" height="10"/>                     <rect x="160.9" y="110" width="10" height="10"/>                     <rect x="200.9" y="110" width="10" height="10"/>                     <rect x="170.9" y="100" width="10" height="10"/>                     <rect x="190.9" y="100" width="10" height="10"/>                     <rect x="180.9" y="90" width="10" height="10"/>                     <rect x="20.9" y="40" width="10" height="10"/>                     <rect x="10.9" y="30" width="10" height="10"/>                     <rect x="30.9" y="30" width="10" height="10"/>                     <rect x="0.9" y="20" width="10" height="10"/>                     <rect x="40.9" y="20" width="10" height="10"/>                     <rect x="10.9" y="10" width="10" height="10"/>                     <rect x="30.9" y="10" width="10" height="10"/>                     <rect x="20.9" y="0" width="10" height="10"/>                 </g>                 <g transform="translate(0.000000, 80.000000)" fill="#6A7BFC">                     <rect x="180.9" y="150" width="10" height="10"/>                     <rect x="200.9" y="150" width="10" height="10"/>                     <rect x="170.9" y="140" width="10" height="10"/>                     <rect x="210.9" y="140" width="10" height="10"/>                     <rect x="160.9" y="130" width="10" height="10"/>                     <rect x="220.9" y="130" width="10" height="10"/>                     <rect x="160.9" y="110" width="10" height="10"/>                     <rect x="220.9" y="110" width="10" height="10"/>                     <rect x="170.9" y="100" width="10" height="10"/>                     <rect x="210.9" y="100" width="10" height="10"/>                     <rect x="180.9" y="90" width="10" height="10"/>                     <rect x="200.9" y="90" width="10" height="10"/>                     <rect x="20.9" y="60" width="10" height="10"/>                     <rect x="40.9" y="60" width="10" height="10"/>                     <rect x="10.9" y="50" width="10" height="10"/>                     <rect x="50.9" y="50" width="10" height="10"/>                     <rect x="0.9" y="40" width="10" height="10"/>                     <rect x="60.9" y="40" width="10" height="10"/>                     <rect x="0.9" y="20" width="10" height="10"/>                     <rect x="60.9" y="20" width="10" height="10"/>                     <rect x="10.9" y="10" width="10" height="10"/>                     <rect x="50.9" y="10" width="10" height="10"/>                     <rect x="20.9" y="0" width="10" height="10"/>                     <rect x="40.9" y="0" width="10" height="10"/>                 </g>                 <g transform="translate(60.000000, 0.000000)" fill="#495EFC">                     <rect x="20.9" y="230.1" width="10" height="10"/>                     <rect x="10.9" y="220.1" width="10" height="10"/>                     <rect x="30.9" y="220.1" width="10" height="10"/>                     <rect x="0.9" y="210.1" width="10" height="10"/>                     <rect x="40.9" y="210.1" width="10" height="10"/>                     <rect x="10.9" y="200.1" width="10" height="10"/>                     <rect x="30.9" y="200.1" width="10" height="10"/>                     <rect x="20.9" y="190.1" width="10" height="10"/>                     <rect x="21" y="40" width="10" height="10"/>                     <rect x="10.9" y="30" width="10" height="10"/>                     <rect x="1" y="20" width="10" height="10"/>                     <rect x="31" y="30" width="10" height="10"/>                     <rect x="41" y="20" width="10" height="10"/>                     <rect x="10.9" y="10" width="10" height="10"/>                     <rect x="31" y="10" width="10" height="10"/>                     <rect x="21" y="0" width="10" height="10"/>                 </g>             </g>             <rect fill="#6A7BFC" x="200.9" y="110" width="10" height="10"/>             <rect fill="#6A7BFC" x="190.9" y="100" width="10" height="10"/>             <rect fill="#6A7BFC" x="210.9" y="100" width="10" height="10"/>             <rect fill="#6A7BFC" x="180.9" y="90" width="10" height="10"/>             <rect fill="#6A7BFC" x="220.9" y="90" width="10" height="10"/>             <rect fill="#6A7BFC" x="190.9" y="80" width="10" height="10"/>             <rect fill="#6A7BFC" x="210.9" y="80" width="10" height="10"/>             <rect fill="#6A7BFC" x="200.9" y="70" width="10" height="10"/>             <g transform="translate(181.000000, 0.000000)" fill="#FD110F">                 <rect x="10" y="10" width="20" height="30"/>                 <rect x="20" y="40" width="10" height="10"/>                 <rect x="20" y="10" width="20" height="30"/>                 <rect x="0" y="10" width="30" height="20"/>                 <rect x="20" y="10" width="30" height="20"/>                 <rect x="10" y="0" width="10" height="10"/>                 <rect x="30" y="0" width="10" height="10"/>             </g>         </g>         <g transform="translate(1.000000, 10.000000)" fill-rule="nonzero" class="layer rest variant-all status-healing" data-key="all-rest-healing" data-frame="2">             <g transform="translate(80.000000, 120.000000)">                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(9.000000, 0.000000)" fill="#6A7BFC">                 <rect x="70.9" y="230.1" width="10" height="10"/>                 <rect x="60.9" y="220.1" width="10" height="10"/>                 <rect x="80.9" y="220.1" width="10" height="10"/>                 <rect x="50.9" y="210.1" width="10" height="10"/>                 <rect x="90.9" y="210.1" width="10" height="10"/>                 <rect x="60.9" y="200.1" width="10" height="10"/>                 <rect x="80.9" y="200.1" width="10" height="10"/>                 <rect x="70.9" y="190.1" width="10" height="10"/>                 <rect x="20.9" y="210" width="10" height="10"/>                 <rect x="10.9" y="200" width="10" height="10"/>                 <rect x="30.9" y="200" width="10" height="10"/>                 <rect x="0.9" y="190" width="10" height="10"/>                 <rect x="40.9" y="190" width="10" height="10"/>                 <rect x="10.9" y="180" width="10" height="10"/>                 <rect x="30.9" y="180" width="10" height="10"/>                 <rect x="20.9" y="170" width="10" height="10"/>                 <rect x="71" y="40" width="10" height="10"/>                 <rect x="60.9" y="30" width="10" height="10"/>                 <rect x="51" y="20" width="10" height="10"/>                 <rect x="81" y="30" width="10" height="10"/>                 <rect x="91" y="20" width="10" height="10"/>                 <rect x="60.9" y="10" width="10" height="10"/>                 <rect x="81" y="10" width="10" height="10"/>                 <rect x="71" y="0" width="10" height="10"/>                 <rect x="140.9" y="60" width="10" height="10"/>                 <rect x="130.9" y="50" width="10" height="10"/>                 <rect x="150.9" y="50" width="10" height="10"/>                 <rect x="120.9" y="40" width="10" height="10"/>                 <rect x="160.9" y="40" width="10" height="10"/>                 <rect x="130.9" y="30" width="10" height="10"/>                 <rect x="150.9" y="30" width="10" height="10"/>                 <rect x="140.9" y="20" width="10" height="10"/>             </g>             <g transform="translate(0.000000, 90.000000)" fill="#FD110F">                 <rect x="10" y="10" width="20" height="30"/>                 <rect x="20" y="10" width="30" height="40"/>                 <rect x="30" y="50" width="10" height="10"/>                 <rect x="40" y="10" width="20" height="30"/>                 <rect x="0" y="10" width="30" height="20"/>                 <rect x="40" y="10" width="30" height="20"/>                 <rect x="10" y="0" width="20" height="10"/>                 <rect x="40" y="0" width="20" height="10"/>             </g>             <rect fill="#AEB6FC" x="199.9" y="100" width="10" height="10"/>             <rect fill="#AEB6FC" x="189.9" y="90" width="10" height="10"/>             <rect fill="#AEB6FC" x="209.9" y="90" width="10" height="10"/>             <rect fill="#AEB6FC" x="179.9" y="80" width="10" height="10"/>             <rect fill="#AEB6FC" x="219.9" y="80" width="10" height="10"/>             <rect fill="#AEB6FC" x="189.9" y="70" width="10" height="10"/>             <rect fill="#AEB6FC" x="209.9" y="70" width="10" height="10"/>             <rect fill="#AEB6FC" x="199.9" y="60" width="10" height="10"/>             <rect fill="#6A7BFC" x="189.9" y="110" width="10" height="10"/>             <rect fill="#6A7BFC" x="209.9" y="110" width="10" height="10"/>             <rect fill="#6A7BFC" x="179.9" y="100" width="10" height="10"/>             <rect fill="#6A7BFC" x="219.9" y="100" width="10" height="10"/>             <rect fill="#6A7BFC" x="169.9" y="90" width="10" height="10"/>             <rect fill="#6A7BFC" x="229.9" y="90" width="10" height="10"/>             <rect fill="#6A7BFC" x="169.9" y="70" width="10" height="10"/>             <rect fill="#6A7BFC" x="229.9" y="70" width="10" height="10"/>             <rect fill="#6A7BFC" x="179.9" y="60" width="10" height="10"/>             <rect fill="#6A7BFC" x="219.9" y="60" width="10" height="10"/>             <rect fill="#6A7BFC" x="189.9" y="50" width="10" height="10"/>             <rect fill="#6A7BFC" x="209.9" y="50" width="10" height="10"/>         </g>         <g transform="translate(10.000000, 30.000000)" fill-rule="nonzero" class="layer rest variant-all status-healing" data-key="all-rest-healing" data-frame="3">             <g transform="translate(71.000000, 100.000000)">                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(0.000000, 70.000000)" fill="#6A7BFC">                 <rect x="180.9" y="130" width="10" height="10"/>                 <rect x="170.9" y="120" width="10" height="10"/>                 <rect x="190.9" y="120" width="10" height="10"/>                 <rect x="160.9" y="110" width="10" height="10"/>                 <rect x="200.9" y="110" width="10" height="10"/>                 <rect x="170.9" y="100" width="10" height="10"/>                 <rect x="190.9" y="100" width="10" height="10"/>                 <rect x="180.9" y="90" width="10" height="10"/>                 <rect x="20.9" y="40" width="10" height="10"/>                 <rect x="10.9" y="30" width="10" height="10"/>                 <rect x="30.9" y="30" width="10" height="10"/>                 <rect x="0.9" y="20" width="10" height="10"/>                 <rect x="40.9" y="20" width="10" height="10"/>                 <rect x="10.9" y="10" width="10" height="10"/>                 <rect x="30.9" y="10" width="10" height="10"/>                 <rect x="20.9" y="0" width="10" height="10"/>             </g>             <g transform="translate(1.000000, 10.000000)" fill="#FD110F">                 <rect x="10" y="10" width="20" height="30"/>                 <rect x="20" y="40" width="10" height="10"/>                 <rect x="20" y="10" width="20" height="30"/>                 <rect x="0" y="10" width="30" height="20"/>                 <rect x="20" y="10" width="30" height="20"/>                 <rect x="10" y="0" width="10" height="10"/>                 <rect x="30" y="0" width="10" height="10"/>             </g>             <g transform="translate(161.000000, 40.000000)" fill="#FD110F">                 <rect x="10" y="10" width="20" height="30"/>                 <rect x="20" y="10" width="30" height="40"/>                 <rect x="30" y="50" width="10" height="10"/>                 <rect x="40" y="10" width="20" height="30"/>                 <rect x="0" y="10" width="30" height="20"/>                 <rect x="40" y="10" width="30" height="20"/>                 <rect x="10" y="0" width="20" height="10"/>                 <rect x="40" y="0" width="20" height="10"/>             </g>             <rect fill="#495EFC" x="20.9" y="190" width="10" height="10"/>             <rect fill="#495EFC" x="10.9" y="180" width="10" height="10"/>             <rect fill="#495EFC" x="30.9" y="180" width="10" height="10"/>             <rect fill="#495EFC" x="0.9" y="170" width="10" height="10"/>             <rect fill="#495EFC" x="40.9" y="170" width="10" height="10"/>             <rect fill="#495EFC" x="10.9" y="160" width="10" height="10"/>             <rect fill="#495EFC" x="30.9" y="160" width="10" height="10"/>             <rect fill="#495EFC" x="20.9" y="150" width="10" height="10"/>             <rect fill="#495EFC" x="140.9" y="40" width="10" height="10"/>             <rect fill="#495EFC" x="130.9" y="30" width="10" height="10"/>             <rect fill="#495EFC" x="150.9" y="30" width="10" height="10"/>             <rect fill="#495EFC" x="120.9" y="20" width="10" height="10"/>             <rect fill="#495EFC" x="160.9" y="20" width="10" height="10"/>             <rect fill="#495EFC" x="130.9" y="10" width="10" height="10"/>             <rect fill="#495EFC" x="150.9" y="10" width="10" height="10"/>             <rect fill="#495EFC" x="140.9" y="0" width="10" height="10"/>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-healing" data-key="all-bril-healing">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 200.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-springt" data-key="all-kleding-springt" data-frame="1">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 80.000000)" fill-rule="nonzero" class="layer huid variant-all status-springt" data-key="all-huid-springt" data-frame="1">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-springt" data-key="haar1-haar-springt" data-frame="1">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-springt" data-key="haar3-haar-springt" data-frame="1">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-springt" data-key="haar4-haar-springt" data-frame="1">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-springt" data-key="haar1-haaroverlay-springt" data-frame="1">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-springt" data-key="haar3-haaroverlay-springt" data-frame="1">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-springt" data-key="haar4-haaroverlay-springt" data-frame="1">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 140.000000)" fill-rule="nonzero" class="layer rest variant-all status-springt" data-key="all-rest-springt" data-frame="1">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(10.000000, 80.000000)">                 <g transform="translate(10.000000, 0.000000)" fill="#2F3452">                     <polygon points="50 0 50 10 0 10 0 20 50 20 50 0 50 20 60 20 60 10 60 0"/>                     <rect x="0" y="20" width="10" height="10"/>                 </g>                 <rect fill="#823C34" x="0" y="20" width="10" height="10"/>                 <rect fill="#823C34" x="60" y="20" width="10" height="10"/>             </g>         </g>         <g transform="translate(71.000000, 130.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-springt" data-key="all-bril-springt" data-frame="1">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 170.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-springt" data-key="all-kleding-springt" data-frame="2">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 50.000000)" fill-rule="nonzero" class="layer huid variant-all status-springt" data-key="all-huid-springt" data-frame="2">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 40.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-springt" data-key="haar1-haar-springt" data-frame="2">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 40.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-springt" data-key="haar3-haar-springt" data-frame="2">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 40.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-springt" data-key="haar4-haar-springt" data-frame="2">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 40.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-springt" data-key="haar1-haaroverlay-springt" data-frame="2">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 40.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-springt" data-key="haar3-haaroverlay-springt" data-frame="2">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 40.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-springt" data-key="haar4-haaroverlay-springt" data-frame="2">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 110.000000)" fill-rule="nonzero" class="layer rest variant-all status-springt" data-key="all-rest-springt" data-frame="2">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(10.000000, 90.000000)">                 <g fill="#2F3452">                     <polygon points="20 0 10 0 10 10 20 10 50 10 50 20 60 20 60 10 60 0"/>                     <rect x="0" y="10" width="10" height="10"/>                 </g>                 <rect fill="#823C34" x="0" y="20" width="10" height="10"/>                 <rect fill="#823C34" x="50" y="20" width="10" height="10"/>             </g>         </g>         <g transform="translate(71.000000, 100.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-springt" data-key="all-bril-springt" data-frame="2">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-springt" data-key="all-kleding-springt" data-frame="3">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-springt" data-key="all-huid-springt" data-frame="3">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-springt" data-key="haar1-haar-springt" data-frame="3">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-springt" data-key="haar3-haar-springt" data-frame="3">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-springt" data-key="haar4-haar-springt" data-frame="3">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-springt" data-key="haar1-haaroverlay-springt" data-frame="3">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-springt" data-key="haar3-haaroverlay-springt" data-frame="3">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-springt" data-key="haar4-haaroverlay-springt" data-frame="3">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-springt" data-key="all-rest-springt" data-frame="3">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(10.000000, 90.000000)">                 <g fill="#2F3452">                     <polygon points="20 0 10 0 10 10 20 10 50 10 50 20 60 20 60 10 60 0"/>                     <rect x="0" y="10" width="10" height="10"/>                 </g>                 <rect fill="#823C34" x="0" y="20" width="10" height="10"/>                 <rect fill="#823C34" x="50" y="20" width="10" height="10"/>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-springt" data-key="all-bril-springt" data-frame="3">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-rent" data-key="all-kleding-rent">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-rent" data-key="all-huid-rent" data-frame="1">             <g>                 <polygon points="30 140 30 150 30 160 40 160 50 160 50 150 50 140 40 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-rent" data-key="all-huid-rent" data-frame="2">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 110 160 110 150 110 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-rent" data-key="haar1-haar-rent">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-rent" data-key="haar3-haar-rent">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-rent" data-key="haar4-haar-rent">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-rent" data-key="haar1-haaroverlay-rent">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-rent" data-key="haar3-haaroverlay-rent">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-rent" data-key="haar4-haaroverlay-rent">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-rent" data-key="all-rest-rent" data-frame="1">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-rent" data-key="all-rest-rent" data-frame="2">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 80 30 80 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-rent" data-key="all-bril-rent">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-blij" data-key="all-kleding-blij">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-blij" data-key="all-huid-blij">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-blij" data-key="haar1-haar-blij">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-blij" data-key="haar3-haar-blij">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-blij" data-key="haar4-haar-blij">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-blij" data-key="haar1-haaroverlay-blij">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-blij" data-key="haar3-haaroverlay-blij">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-blij" data-key="haar4-haaroverlay-blij">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-blij" data-key="all-rest-blij">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 40 30 40 20 30 20 30 30 40 30 40 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 20 10 20 20 20 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 20 80 20 90 20 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-blij" data-key="all-bril-blij">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-hartje" data-key="all-kleding-hartje">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-hartje" data-key="all-huid-hartje">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-hartje" data-key="haar1-haar-hartje">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-hartje" data-key="haar3-haar-hartje">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-hartje" data-key="haar4-haar-hartje">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-hartje" data-key="haar1-haaroverlay-hartje">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-hartje" data-key="haar3-haaroverlay-hartje">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-hartje" data-key="haar4-haaroverlay-hartje">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(61.000000, 40.000000)" fill-rule="nonzero" class="layer rest variant-all status-hartje" data-key="all-rest-hartje" data-frame="1">             <g transform="translate(20.000000, 90.000000)">                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 40 30 40 20 30 20 30 30 40 30 40 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 20 10 20 20 20 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 20 80 20 90 20 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g fill="#FD110F">                 <rect x="10" y="10" width="20" height="30"/>                 <rect x="20" y="40" width="10" height="10"/>                 <rect x="20" y="10" width="20" height="30"/>                 <rect x="0" y="10" width="30" height="20"/>                 <rect x="20" y="10" width="30" height="20"/>                 <rect x="10" y="0" width="10" height="10"/>                 <rect x="30" y="0" width="10" height="10"/>             </g>         </g>         <g transform="translate(51.000000, 10.000000)" fill-rule="nonzero" class="layer rest variant-all status-hartje" data-key="all-rest-hartje" data-frame="2">             <g transform="translate(30.000000, 120.000000)">                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 40 30 40 20 30 20 30 30 40 30 40 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 20 10 20 20 20 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 20 80 20 90 20 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g fill="#FD110F">                 <rect x="10" y="10" width="20" height="30"/>                 <rect x="20" y="10" width="30" height="40"/>                 <rect x="30" y="50" width="10" height="10"/>                 <rect x="40" y="10" width="20" height="30"/>                 <rect x="0" y="10" width="30" height="20"/>                 <rect x="40" y="10" width="30" height="20"/>                 <rect x="10" y="0" width="20" height="10"/>                 <rect x="40" y="0" width="20" height="10"/>             </g>         </g>         <g transform="translate(51.000000, 0.000000)" fill-rule="nonzero" class="layer rest variant-all status-hartje" data-key="all-rest-hartje" data-frame="3">             <g transform="translate(30.000000, 130.000000)">                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 40 30 40 20 30 20 30 30 40 30 40 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 20 10 20 20 20 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 20 80 20 90 20 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <rect fill="#FD110F" x="40" y="40" width="10" height="10"/>             <rect fill="#FD110F" x="20" y="40" width="10" height="10"/>             <rect fill="#FD110F" x="10" y="30" width="10" height="10"/>             <rect fill="#FD110F" x="30" y="10" width="10" height="10"/>             <g fill="#FD110F">                 <rect x="30" y="50" width="10" height="10"/>                 <rect x="50" y="30" width="10" height="10"/>                 <rect x="0" y="10" width="10" height="20"/>                 <rect x="60" y="10" width="10" height="20"/>                 <rect x="10" y="0" width="20" height="10"/>                 <rect x="40" y="0" width="20" height="10"/>             </g>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-hartje" data-key="all-rest-hartje" data-frame="4">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 40 30 40 20 30 20 30 30 40 30 40 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 20 10 20 20 20 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 20 80 20 90 20 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-hartje" data-key="all-bril-hartje">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-boos" data-key="all-kleding-boos">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-boos" data-key="all-huid-boos">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-boos" data-key="haar1-haar-boos">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>             <rect x="30" y="60" width="10" height="10"/>             <rect x="40" y="70" width="10" height="10"/>             <rect x="100" y="70" width="10" height="10"/>             <rect x="110" y="60" width="10" height="10"/>         </g>         <g transform="translate(81.000000, 120.000000)" fill-rule="nonzero" class="layer haar variant-haar2 status-boos" data-key="haar2-haar-boos">             <rect x="0" y="0" width="10" height="10"/>             <rect x="10" y="10" width="10" height="10"/>             <rect x="70" y="10" width="10" height="10"/>             <rect x="80" y="0" width="10" height="10"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-boos" data-key="haar3-haar-boos">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>             <rect x="30" y="60" width="10" height="10"/>             <rect x="40" y="70" width="10" height="10"/>             <rect x="100" y="70" width="10" height="10"/>             <rect x="110" y="60" width="10" height="10"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-boos" data-key="haar4-haar-boos">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>             <rect x="30" y="60" width="10" height="10"/>             <rect x="40" y="70" width="10" height="10"/>             <rect x="100" y="70" width="10" height="10"/>             <rect x="110" y="60" width="10" height="10"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-boos" data-key="haar1-haaroverlay-boos">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <polygon points="90 120 90 130 100 130 100 120"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-boos" data-key="haar3-haaroverlay-boos">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-boos" data-key="haar4-haaroverlay-boos">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 140.000000)" fill-rule="nonzero" class="layer rest variant-all status-boos" data-key="all-rest-boos">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 50 60 50 50 50 40 50 30 50 20 50 10 50 10 60 20 60 20 70 20 80 30 80 30 70 30 60 40 60 50 60 60 60 70 60 70 70 80 70 80 60 80 50"/>                 <polygon fill="#FFFFFF" points="60 20 40 20 40 30 30 30 30 40 40 40 40 30 60 30 60 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 0 0 10 0 20 10 20 20 20 20 10 20 0 10 0 10 0"/>                     <polygon points="80 0 70 0 70 0 70 20 80 20 80 20 90 20 90 10 90 0 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 0 0 10 10 10 10 0 10 0"/>                     <polygon points="70 0 70 0 70 10 80 10 80 0 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-boos" data-key="all-bril-boos">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-strompelen" data-key="all-kleding-strompelen">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(71.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-strompelen" data-key="all-huid-strompelen">             <g>                 <polygon points="10 140 10 150 10 160 20 160 30 160 30 150 30 140 20 140"/>                 <polygon points="80 150 80 160 90 160 90 150 90 140 80 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(61.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-strompelen" data-key="haar1-haar-strompelen">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(61.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-strompelen" data-key="haar3-haar-strompelen">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 20 130 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 100 130 100 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-strompelen" data-key="haar4-haar-strompelen">             <path d="M140,30 L140,20 L130,20 L130,10 L120,10 L110,10 L110,0 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L50,10 L40,10 L30,10 L30,20 L20,20 L20,30 L20,40 L10,40 L10,50 L10,60 L10,70 L10,80 L10,70 L10,80 L0,80 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,140 L150,140 L150,130 L150,120 L150,110 L150,100 L150,90 L150,80 L150,70 L150,60 L150,50 L150,40 L150,30 L140,30 Z M140,60 L140,70 L140,80 L140,90 L140,100 L140,110 L140,120 L130,120 L130,130 L120,130 L110,130 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,130 L40,130 L40,120 L30,120 L30,110 L30,100 L20,100 L20,90 L20,80 L30,80 L30,90 L40,90 L40,80 L40,70 L40,60 L50,60 L50,50 L60,50 L70,50 L80,50 L80,40 L90,40 L100,40 L110,40 L110,50 L120,50 L130,50 L140,50 L140,60 Z"/>         </g>         <g transform="translate(61.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-strompelen" data-key="haar1-haaroverlay-strompelen">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="80 120 80 130 90 130 90 120 90 110 80 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(61.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-strompelen" data-key="haar3-haaroverlay-strompelen">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="80 120 80 130 90 130 90 120 90 110 80 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(61.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-strompelen" data-key="haar4-haaroverlay-strompelen">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="80 120 80 130 90 130 90 120 90 110 80 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(91.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-strompelen" data-key="all-rest-strompelen" data-frame="1">             <g>                 <polygon fill="#000044" opacity="0.2" points="60 60 50 60 40 60 30 60 20 60 10 60 0 60 0 70 10 70 10 80 10 90 20 90 20 80 20 70 30 70 40 70 50 70 60 70 60 80 70 80 70 70 70 60"/>                 <polygon fill="#FFFFFF" points="55 30 50 30 45 30 40 30 40 50 45 50 50 50 55 50 60 50 60 30"/>                 <g transform="translate(0.000000, 10.000000)" fill="#FFFFFF">                     <polygon points="0 0 0 6.7 0 13.3 0 20 10 20 20 20 20 13.3 20 6.7 20 0 10 0"/>                     <polygon points="80 0 70 0 70 6.7 70 13.3 70 20 80 20 90 20 90 13.3 90 6.7 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(91.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-strompelen" data-key="all-rest-strompelen" data-frame="2">             <g>                 <polygon fill="#000044" opacity="0.2" points="60 60 50 60 40 60 30 60 20 60 10 60 0 60 0 70 10 70 10 80 10 90 20 90 20 80 20 70 30 70 40 70 50 70 60 70 60 80 70 80 70 70 70 60"/>                 <g transform="translate(0.000000, 10.000000)" fill="#FFFFFF">                     <polygon points="0 0 0 6.7 0 13.3 0 20 10 20 20 20 20 13.3 20 6.7 20 0 10 0"/>                     <polygon points="80 0 70 0 70 6.7 70 13.3 70 20 80 20 90 20 90 13.3 90 6.7 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>                 <polygon fill="#FFFFFF" points="55 40 50 40 45 40 40 40 40 60 45 60 50 60 55 60 60 60 60 40"/>             </g>         </g>         <g transform="translate(81.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-strompelen" data-key="all-bril-strompelen">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(41.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-haktmetbijl" data-key="all-kleding-haktmetbijl">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(21.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-haktmetbijl" data-key="all-huid-haktmetbijl">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="100 140 100 150 120 150 120 140 120 130 100 130"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(11.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-haktmetbijl" data-key="haar1-haar-haktmetbijl">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(11.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-haktmetbijl" data-key="haar3-haar-haktmetbijl">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(11.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-haktmetbijl" data-key="haar4-haar-haktmetbijl">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L130,140 L130,160 L110,160 L110,150 L100,150 L100,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(11.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-haktmetbijl" data-key="haar1-haaroverlay-haktmetbijl">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 110 100 120 120 120 120 110 120 100 100 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(11.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-haktmetbijl" data-key="haar3-haaroverlay-haktmetbijl">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 110 100 120 120 120 120 110 120 100 100 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(11.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-haktmetbijl" data-key="haar4-haaroverlay-haktmetbijl">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 110 100 120 120 120 120 110 120 100 100 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(41.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-haktmetbijl" data-key="all-rest-haktmetbijl" data-frame="1">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(90.000000, 0.000000)">                 <rect fill="#4D4D4D" x="0" y="80" width="10" height="10"/>                 <rect fill="#4D4D4D" x="10" y="70" width="10" height="10"/>                 <rect fill="#4D4D4D" x="20" y="60" width="10" height="10"/>                 <rect fill="#4D4D4D" x="30" y="50" width="10" height="10"/>                 <rect fill="#4D4D4D" x="0" y="60" width="10" height="10"/>                 <rect fill="#4D4D4D" x="10" y="50" width="10" height="10"/>                 <rect fill="#4D4D4D" x="20" y="40" width="10" height="10"/>                 <rect fill="#4D4D4D" x="30" y="30" width="10" height="10"/>                 <rect fill="#4D4D4D" x="50" y="10" width="10" height="10"/>                 <rect fill="#4D4D4D" x="60" y="20" width="10" height="10"/>                 <rect fill="#A67C52" x="60" y="10" width="10" height="10"/>                 <rect fill="#A67C52" x="30" y="40" width="10" height="10"/>                 <rect fill="#A67C52" x="20" y="50" width="10" height="10"/>                 <rect fill="#A67C52" x="10" y="60" width="10" height="10"/>                 <rect fill="#A67C52" x="0" y="70" width="10" height="10"/>                 <rect fill="#4D4D4D" x="40" y="40" width="10" height="10"/>                 <g transform="translate(20.000000, 10.000000)" fill="#0071BC">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="30 40 20 40 20 50 20 60 30 60 30 50"/>                     <polygon points="30 60 30 70 40 70 50 70 50 60 40 60"/>                     <rect x="50" y="50" width="10" height="10"/>                     <rect x="60" y="40" width="10" height="10"/>                     <rect x="70" y="30" width="10" height="10"/>                 </g>                 <polygon fill="#29ABE2" points="90 30 90 20 80 20 70 20 70 30 60 30 60 20 50 20 50 10 50 0 40 0 30 0 30 10 30 20 30 30 40 30 40 40 50 40 50 50 50 60 50 70 60 70 70 70 70 60 80 60 80 50 90 50 90 40 100 40 100 30"/>             </g>         </g>         <g transform="translate(41.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-haktmetbijl" data-key="all-rest-haktmetbijl" data-frame="2">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(90.000000, 40.000000)">                 <rect fill="#4D4D4D" x="90" y="30" width="10" height="10"/>                 <rect fill="#A67C52" x="90" y="20" width="10" height="10"/>                 <g transform="translate(40.000000, 0.000000)" fill="#0071BC">                     <polygon points="50 70 40 70 30 70 20 70 10 70 10 80 20 80 30 80 40 80 50 80 60 80 60 70"/>                     <rect x="0" y="60" width="10" height="10"/>                     <polygon points="20 50 20 40 10 40 10 50 10 60 20 60"/>                     <rect x="20" y="10" width="10" height="10"/>                     <rect x="10" y="0" width="10" height="10"/>                 </g>                 <polygon fill="#29ABE2" points="100 60 100 50 100 40 90 40 90 30 90 20 90 10 100 10 100 0 90 0 80 0 70 0 60 0 60 10 70 10 70 20 60 20 60 30 60 40 60 50 60 60 50 60 50 70 60 70 70 70 80 70 90 70 100 70 110 70 110 60"/>                 <rect fill="#4D4D4D" x="0" y="30" width="60" height="10"/>                 <rect fill="#A67C52" x="0" y="20" width="60" height="10"/>             </g>         </g>         <g transform="translate(31.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-haktmetbijl" data-key="all-bril-haktmetbijl">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-bidt" data-key="all-kleding-bidt">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 10 30 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-bidt" data-key="all-huid-bidt">             <g>                 <polygon points="50 130 50 140 50 150 60 150 70 150 70 140 70 130 60 130"/>                 <polygon points="70 140 70 150 90 150 90 140 90 130 70 130"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-bidt" data-key="haar1-haar-bidt">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-bidt" data-key="haar3-haar-bidt">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-bidt" data-key="haar4-haar-bidt">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,150 L100,150 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L40,150 L30,150 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-bidt" data-key="haar1-haaroverlay-bidt">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(131.000000, 200.000000)" fill="#FF4200" fill-rule="nonzero" opacity="0.2" class="layer haaroverlay variant-haar2 status-bidt" data-key="haar2-haaroverlay-bidt">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-bidt" data-key="haar3-haaroverlay-bidt">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-bidt" data-key="haar4-haaroverlay-bidt">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-bidt" data-key="all-rest-bidt" data-frame="1">             <g transform="translate(10.000000, 30.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 30 50 30 40 30 30 30 20 30 10 30 0 30 0 40 10 40 10 50 10 60 20 60 20 50 20 40 30 40 40 40 50 40 60 40 60 50 70 50 70 40 70 30"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g>                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="75 0 70 0 70 3.3 70 6.7 70 10 75 10 80 10 80 6.7 80 3.3 80 0"/>                 <polygon fill="#000000" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             </g>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-bidt" data-key="all-rest-bidt" data-frame="2">             <g transform="translate(10.000000, 30.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 30 50 30 40 30 30 30 20 30 10 30 0 30 0 40 10 40 10 50 10 60 20 60 20 50 20 40 30 40 40 40 50 40 60 40 60 50 70 50 70 40 70 30"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 10 35 10 40 10 45 10 50 10 50 0"/>             </g>             <g>                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="75 0 70 0 70 3.3 70 6.7 70 10 75 10 80 10 80 6.7 80 3.3 80 0"/>                 <polygon fill="#000000" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-bidt" data-key="all-bril-bidt">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-zweet" data-key="all-kleding-zweet">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 10 30 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-zweet" data-key="all-huid-zweet">             <g>                 <polygon points="40 130 40 140 40 150 50 150 60 150 60 140 60 130 50 130"/>                 <polygon points="70 140 70 150 90 150 90 140 90 130 70 130"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-zweet" data-key="haar1-haar-zweet">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-zweet" data-key="haar3-haar-zweet">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-zweet" data-key="haar4-haar-zweet">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,150 L100,150 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L40,150 L30,150 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-zweet" data-key="haar1-haaroverlay-zweet">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(131.000000, 200.000000)" fill="#FF4200" fill-rule="nonzero" opacity="0.2" class="layer haaroverlay variant-haar2 status-zweet" data-key="haar2-haaroverlay-zweet">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-zweet" data-key="haar3-haaroverlay-zweet">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-zweet" data-key="haar4-haaroverlay-zweet">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(61.000000, 110.000000)" fill-rule="nonzero" class="layer rest variant-all status-zweet" data-key="all-rest-zweet" data-frame="1">             <g transform="translate(30.000000, 40.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 40 50 40 40 40 30 40 20 40 10 40 0 40 0 50 10 50 30 50 40 50 50 50 60 50 60 60 70 60 70 50 70 40"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g transform="translate(20.000000, 20.000000)">                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="85 0 80 0 80 3.3 80 6.7 80 10 85 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="15 0 10 0 10 3.3 10 6.7 10 10 15 10 20 10 20 6.7 20 3.3 20 0"/>             </g>             <polygon fill="#8DD6FF" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             <polygon fill="#8DD6FF" points="125 40 120 40 120 43.3 120 46.7 120 50 125 50 130 50 130 46.7 130 43.3 130 40"/>         </g>         <g transform="translate(61.000000, 120.000000)" fill-rule="nonzero" class="layer rest variant-all status-zweet" data-key="all-rest-zweet" data-frame="2">             <g transform="translate(30.000000, 30.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 40 50 40 40 40 30 40 20 40 10 40 0 40 0 50 10 50 30 50 40 50 50 50 60 50 60 60 70 60 70 50 70 40"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g transform="translate(20.000000, 10.000000)">                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="85 0 80 0 80 3.3 80 6.7 80 10 85 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="15 0 10 0 10 3.3 10 6.7 10 10 15 10 20 10 20 6.7 20 3.3 20 0"/>             </g>             <polygon fill="#8DD6FF" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             <polygon fill="#8DD6FF" points="125 40 120 40 120 43.3 120 46.7 120 50 125 50 130 50 130 46.7 130 43.3 130 40"/>         </g>         <g transform="translate(61.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-zweet" data-key="all-rest-zweet" data-frame="3">             <g transform="translate(30.000000, 30.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 30 50 30 40 30 30 30 20 30 10 30 0 30 0 40 10 40 20 40 30 40 40 40 50 40 60 40 60 50 70 50 70 40 70 30"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g transform="translate(20.000000, 0.000000)">                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="75 0 70 0 70 3.3 70 6.7 70 10 75 10 80 10 80 6.7 80 3.3 80 0"/>                 <polygon fill="#000000" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             </g>             <polygon fill="#8DD6FF" points="5 30 0 30 0 33.3 0 36.7 0 40 5 40 10 40 10 36.7 10 33.3 10 30"/>             <polygon fill="#8DD6FF" points="125 60 120 60 120 63.3 120 66.7 120 70 125 70 130 70 130 66.7 130 63.3 130 60"/>         </g>         <g transform="translate(61.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-zweet" data-key="all-rest-zweet" data-frame="4">             <g transform="translate(30.000000, 30.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 30 50 30 40 30 30 30 20 30 10 30 0 30 0 40 10 40 20 40 30 40 40 40 50 40 60 40 60 50 70 50 70 40 70 30"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g transform="translate(20.000000, 0.000000)">                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="75 0 70 0 70 3.3 70 6.7 70 10 75 10 80 10 80 6.7 80 3.3 80 0"/>                 <polygon fill="#000000" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             </g>             <polygon fill="#8DD6FF" points="5 80 0 80 0 83.3 0 86.7 0 90 5 90 10 90 10 86.7 10 83.3 10 80"/>             <polygon fill="#8DD6FF" points="125 100 120 100 120 103.3 120 106.7 120 110 125 110 130 110 130 106.7 130 103.3 130 100"/>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-zweet" data-key="all-bril-zweet">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-lachend" data-key="all-kleding-lachend">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-lachend" data-key="all-huid-lachend">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-lachend" data-key="haar1-haar-lachend">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-lachend" data-key="haar3-haar-lachend">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-lachend" data-key="haar4-haar-lachend">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-lachend" data-key="haar1-haaroverlay-lachend">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-lachend" data-key="haar3-haaroverlay-lachend">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-lachend" data-key="haar4-haaroverlay-lachend">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 140.000000)" fill-rule="nonzero" class="layer rest variant-all status-lachend" data-key="all-rest-lachend" data-frame="1">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 50 60 50 50 50 40 50 30 50 20 50 10 50 10 60 20 60 20 70 20 80 30 80 30 70 30 60 40 60 50 60 60 60 70 60 70 70 80 70 80 60 80 50"/>                 <polygon fill="#FFFFFF" points="60 20 40 20 40 10 30 10 30 20 40 20 40 30 60 30 70 30 70 20"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 0 0 10 0 10 10 10 20 10 20 10 20 0 20 0 10 0"/>                     <polygon points="80 0 70 0 70 0 70 10 70 10 80 10 90 10 90 10 90 0 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 0 0 10 10 10 10 0 10 0"/>                     <polygon points="70 0 70 0 70 10 80 10 80 0 80 0"/>                 </g>             </g>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-lachend" data-key="all-rest-lachend" data-frame="2">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="70 30 40 30 40 20 30 20 30 30 40 30 40 50 60 50 60 40 70 40"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 0 0 20 0 20 10 20 20 20 20 20 20 0 20 0 10 0"/>                     <polygon points="80 0 70 0 70 0 70 20 70 20 80 20 90 20 90 20 90 0 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 0 0 20 10 20 10 0 10 0"/>                     <polygon points="70 0 70 0 70 20 80 20 80 0 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-lachend" data-key="all-bril-lachend">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-zorgelijk" data-key="all-kleding-zorgelijk">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 10 30 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-zorgelijk" data-key="all-huid-zorgelijk">             <g>                 <polygon points="40 130 40 140 40 150 50 150 60 150 60 140 60 130 50 130"/>                 <polygon points="70 140 70 150 90 150 90 140 90 130 70 130"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-zorgelijk" data-key="haar1-haar-zorgelijk">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-zorgelijk" data-key="haar3-haar-zorgelijk">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-zorgelijk" data-key="haar4-haar-zorgelijk">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,150 L100,150 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L40,150 L30,150 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-zorgelijk" data-key="haar1-haaroverlay-zorgelijk">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(131.000000, 200.000000)" fill="#FF4200" fill-rule="nonzero" opacity="0.2" class="layer haaroverlay variant-haar2 status-zorgelijk" data-key="haar2-haaroverlay-zorgelijk">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-zorgelijk" data-key="haar3-haaroverlay-zorgelijk">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-zorgelijk" data-key="haar4-haaroverlay-zorgelijk">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-zorgelijk" data-key="all-rest-zorgelijk" data-frame="1">             <g transform="translate(10.000000, 20.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 40 50 40 40 40 30 40 20 40 10 40 0 40 0 50 10 50 30 50 40 50 50 50 60 50 60 60 70 60 70 50 70 40"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g>                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="85 0 80 0 80 3.3 80 6.7 80 10 85 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="15 0 10 0 10 3.3 10 6.7 10 10 15 10 20 10 20 6.7 20 3.3 20 0"/>             </g>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-zorgelijk" data-key="all-rest-zorgelijk" data-frame="2">             <g transform="translate(10.000000, 30.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 30 50 30 40 30 30 30 20 30 10 30 0 30 0 40 10 40 20 40 30 40 40 40 50 40 60 40 60 50 70 50 70 40 70 30"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g>                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="75 0 70 0 70 3.3 70 6.7 70 10 75 10 80 10 80 6.7 80 3.3 80 0"/>                 <polygon fill="#000000" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             </g>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-vraagteken" data-key="all-kleding-vraagteken">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 10 30 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-vraagteken" data-key="all-huid-vraagteken">             <g>                 <polygon points="40 130 40 140 40 150 50 150 60 150 60 140 60 130 50 130"/>                 <polygon points="70 140 70 150 90 150 90 140 90 130 70 130"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-vraagteken" data-key="haar1-haar-vraagteken">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-vraagteken" data-key="haar3-haar-vraagteken">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-vraagteken" data-key="haar4-haar-vraagteken">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,150 L100,150 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L40,150 L30,150 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-vraagteken" data-key="haar1-haaroverlay-vraagteken">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(131.000000, 200.000000)" fill="#FF4200" fill-rule="nonzero" opacity="0.2" class="layer haaroverlay variant-haar2 status-vraagteken" data-key="haar2-haaroverlay-vraagteken">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-vraagteken" data-key="haar3-haaroverlay-vraagteken">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-vraagteken" data-key="haar4-haaroverlay-vraagteken">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(71.000000, 0.000000)" fill-rule="nonzero" class="layer rest variant-all status-vraagteken" data-key="all-rest-vraagteken" data-frame="1">             <g transform="translate(20.000000, 150.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 40 50 40 40 40 30 40 20 40 10 40 0 40 0 50 10 50 30 50 40 50 50 50 60 50 60 60 70 60 70 50 70 40"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g transform="translate(10.000000, 130.000000)">                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="85 0 80 0 80 3.3 80 6.7 80 10 85 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="15 0 10 0 10 3.3 10 6.7 10 10 15 10 20 10 20 6.7 20 3.3 20 0"/>             </g>             <rect fill="#333333" x="10" y="30" width="10" height="10"/>             <rect fill="#333333" x="20" y="30" width="10" height="10"/>             <rect fill="#333333" x="20" y="50" width="10" height="10"/>             <rect fill="#333333" x="20" y="20" width="10" height="10"/>             <rect fill="#333333" x="30" y="20" width="10" height="10"/>             <rect fill="#333333" x="20" y="10" width="10" height="10"/>             <rect fill="#333333" x="30" y="10" width="10" height="10"/>             <rect fill="#333333" x="10" y="0" width="10" height="10"/>             <rect fill="#333333" x="20" y="0" width="10" height="10"/>             <rect fill="#333333" x="0" y="10" width="10" height="10"/>             <rect fill="#333333" x="10" y="50" width="10" height="10"/>             <rect fill="#333333" x="10" y="0" width="10" height="10"/>         </g>         <g transform="translate(71.000000, 10.000000)" fill-rule="nonzero" class="layer rest variant-all status-vraagteken" data-key="all-rest-vraagteken" data-frame="2">             <g transform="translate(20.000000, 150.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 30 50 30 40 30 30 30 20 30 10 30 0 30 0 40 10 40 20 40 30 40 40 40 50 40 60 40 60 50 70 50 70 40 70 30"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g transform="translate(10.000000, 120.000000)">                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="75 0 70 0 70 3.3 70 6.7 70 10 75 10 80 10 80 6.7 80 3.3 80 0"/>                 <polygon fill="#000000" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             </g>             <rect fill="#333333" x="10" y="30" width="10" height="10"/>             <rect fill="#333333" x="20" y="30" width="10" height="10"/>             <rect fill="#333333" x="20" y="50" width="10" height="10"/>             <rect fill="#333333" x="20" y="20" width="10" height="10"/>             <rect fill="#333333" x="30" y="20" width="10" height="10"/>             <rect fill="#333333" x="20" y="10" width="10" height="10"/>             <rect fill="#333333" x="30" y="10" width="10" height="10"/>             <rect fill="#333333" x="10" y="0" width="10" height="10"/>             <rect fill="#333333" x="20" y="0" width="10" height="10"/>             <rect fill="#333333" x="0" y="10" width="10" height="10"/>             <rect fill="#333333" x="10" y="50" width="10" height="10"/>             <rect fill="#333333" x="10" y="0" width="10" height="10"/>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-zorgelijk" data-key="all-bril-zorgelijk">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-opderug" data-key="all-kleding-opderug">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 10 30 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-opderug" data-key="all-huid-opderug">             <g>                 <polygon points="20 140 20 145 20 150 25 150 30 150 30 145 30 140 25 140"/>                 <polygon points="90 145 90 150 100 150 100 145 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-opderug" data-key="haar1-haar-opderug">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 110 20 110 20 120 90 120 90 110 110 110 120 110 120 100 110 100 110 80 120 80 120 70 130 70 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-opderug" data-key="haar3-haar-opderug">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 40 140 40 150 100 150 100 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-opderug" data-key="haar4-haar-opderug">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 0 140 0 150 0 160 0 170 10 170 10 170 50 170 50 170 50 160 50 160 60 160 70 160 80 160 90 160 100 160 90 160 100 160 100 160 100 170 140 170 140 160 140 150 140 140 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill="#FFF255" fill-rule="nonzero" opacity="0.15" class="layer haaroverlay variant-haar1 status-opderug" data-key="haar1-haaroverlay-opderug">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 100 10 100 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill="#FFF255" fill-rule="nonzero" opacity="0.15" class="layer haaroverlay variant-haar3 status-opderug" data-key="haar3-haaroverlay-opderug">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 130 10 130 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill="#FFF255" fill-rule="nonzero" opacity="0.15" class="layer haaroverlay variant-haar4 status-opderug" data-key="haar4-haaroverlay-opderug">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 170 10 170 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(171.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-opderug" data-key="all-bril-opderug">             <polygon points="10 10 0 10 0 20 10 20 10 40 20 40 20 30 20 20 20 0 10 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-wijst" data-key="all-kleding-wijst">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-wijst" data-key="all-huid-wijst">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>                 <polygon points="120 120 110 120 100 120 100 130 100 140 120 140 120 130 130 130 130 125 130 120"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-wijst" data-key="haar1-haar-wijst">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-wijst" data-key="haar3-haar-wijst">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 130 120 130 130 130 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-wijst" data-key="haar4-haar-wijst">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L120,130 L140,130 L140,140 L130,140 L130,150 L130,150 L110,150 L110,150 L100,150 L100,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-wijst" data-key="haar1-haaroverlay-wijst">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g opacity="0.2" transform="translate(161.000000, 190.000000)" fill="#FF4200" fill-rule="nonzero" class="layer haaroverlay variant-haar2 status-wijst" data-key="haar2-haaroverlay-wijst">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-wijst" data-key="haar3-haaroverlay-wijst">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-wijst" data-key="haar4-haaroverlay-wijst">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-wijst" data-key="all-rest-wijst">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-wijst" data-key="all-bril-wijst">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-hippiegebaar" data-key="all-kleding-hippiegebaar">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-hippiegebaar" data-key="all-huid-hippiegebaar">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>                 <polygon points="120 120 110 120 100 120 100 130 100 140 120 140 120 120 130 120 130 110 120 110"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-hippiegebaar" data-key="haar1-haar-hippiegebaar">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-hippiegebaar" data-key="haar3-haar-hippiegebaar">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 130 120 130 130 130 130 130 130 120 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-hippiegebaar" data-key="haar4-haar-hippiegebaar">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,130 L140,120 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L130,130 L130,120 L140,120 L140,130 L130,130 L130,150 L110,150 L100,150 L100,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-hippiegebaar" data-key="haar1-haaroverlay-hippiegebaar">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 80 100 110 120 110 120 90 110 90 110 80"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g opacity="0.2" transform="translate(161.000000, 180.000000)" fill="#FF4200" fill-rule="nonzero" class="layer haaroverlay variant-haar2 status-hippiegebaar" data-key="haar2-haaroverlay-hippiegebaar">             <polygon points="0 0 0 30 20 30 20 10 10 10 10 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-hippiegebaar" data-key="haar3-haaroverlay-hippiegebaar">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>             <polygon fill="#FF4200" opacity="0.2" points="110 120 110 150 130 150 130 130 120 130 120 120"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-hippiegebaar" data-key="haar4-haaroverlay-hippiegebaar">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 80 100 110 120 110 120 90 110 90 110 80"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-hippiegebaar" data-key="all-rest-hippiegebaar">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-hippiegebaar" data-key="all-bril-hippiegebaar">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-fluit" data-key="all-kleding-fluit">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 10 30 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-fluit" data-key="all-huid-fluit">             <g>                 <polygon points="50 130 50 140 50 150 60 150 70 150 70 140 70 130 60 130"/>                 <polygon points="70 140 70 150 90 150 90 140 90 130 70 130"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-fluit" data-key="haar1-haar-fluit">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-fluit" data-key="haar3-haar-fluit">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-fluit" data-key="haar4-haar-fluit">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,150 L100,150 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L40,150 L30,150 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-fluit" data-key="haar1-haaroverlay-fluit">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(131.000000, 200.000000)" fill="#FF4200" fill-rule="nonzero" opacity="0.2" class="layer haaroverlay variant-haar2 status-fluit" data-key="haar2-haaroverlay-fluit">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-fluit" data-key="haar3-haaroverlay-fluit">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-fluit" data-key="haar4-haaroverlay-fluit">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-fluit" data-key="all-rest-fluit" data-frame="1">             <g transform="translate(10.000000, 30.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 30 50 30 40 30 30 30 20 30 10 30 0 30 0 40 10 40 10 50 10 60 20 60 20 50 20 40 30 40 40 40 50 40 60 40 60 50 70 50 70 40 70 30"/>                 <polygon fill="#FFFFFF" points="45 0 40 0 35 0 30 0 30 20 35 20 40 20 45 20 50 20 50 0"/>             </g>             <g>                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="75 0 70 0 70 3.3 70 6.7 70 10 75 10 80 10 80 6.7 80 3.3 80 0"/>                 <polygon fill="#000000" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             </g>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-fluit" data-key="all-rest-fluit" data-frame="2">             <g transform="translate(10.000000, 30.000000)">                 <polygon fill="#000044" opacity="0.2" points="60 30 50 30 40 30 30 30 20 30 10 30 0 30 0 40 10 40 10 50 10 60 20 60 20 50 20 40 30 40 40 40 50 40 60 40 60 50 70 50 70 40 70 30"/>                 <polygon fill="#FFFFFF" points="47.5 0 45 0 42.5 0 40 0 40 10 42.5 10 45 10 47.5 10 50 10 50 0"/>             </g>             <g>                 <polygon fill="#FFFFFF" points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 <polygon fill="#000000" points="75 0 70 0 70 3.3 70 6.7 70 10 75 10 80 10 80 6.7 80 3.3 80 0"/>                 <polygon fill="#000000" points="5 0 0 0 0 3.3 0 6.7 0 10 5 10 10 10 10 6.7 10 3.3 10 0"/>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-fluit" data-key="all-bril-fluit">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-schreeuwt" data-key="all-kleding-schreeuwt">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-schreeuwt" data-key="all-huid-schreeuwt">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="90 150 90 160 100 160 100 150 100 140 90 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-schreeuwt" data-key="haar1-haar-schreeuwt">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-schreeuwt" data-key="haar3-haar-schreeuwt">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-schreeuwt" data-key="haar4-haar-schreeuwt">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,160 L110,170 L100,170 L90,170 L80,170 L70,170 L60,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-schreeuwt" data-key="haar1-haaroverlay-schreeuwt">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-schreeuwt" data-key="haar3-haaroverlay-schreeuwt">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-schreeuwt" data-key="haar4-haaroverlay-schreeuwt">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="90 120 90 130 100 130 100 120 100 110 90 110"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-schreeuwt" data-key="all-rest-schreeuwt" data-frame="1">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 40 30 40 40 30 40 30 50 40 50 40 40 60 40 60 50 70 50 70 40 60 40"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 10 10 10 0"/>                     <polygon points="80 10 70 10 70 10 70 30 80 30 80 30 90 30 90 20 90 10 90 10"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 10"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-schreeuwt" data-key="all-rest-schreeuwt" data-frame="2">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 40 30 40 40 30 40 30 50 40 50 40 50 60 50 60 50 70 50 70 40 60 40"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 10 10 10 0"/>                     <polygon points="80 10 70 10 70 10 70 30 80 30 80 30 90 30 90 20 90 10 90 10"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 10"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-schreeuwt" data-key="all-bril-schreeuwt">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-steekthanduit" data-key="all-kleding-steekthanduit">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-steekthanduit" data-key="all-huid-steekthanduit">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>                 <polygon points="120 120 110 120 100 120 100 130 100 140 120 140 120 130 130 130 130 125 130 120"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-steekthanduit" data-key="haar1-haar-steekthanduit">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-steekthanduit" data-key="haar3-haar-steekthanduit">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 130 120 130 130 130 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-steekthanduit" data-key="haar4-haar-steekthanduit">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L120,130 L130,130 L130,140 L130,140 L130,150 L130,150 L110,150 L110,150 L100,150 L100,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-steekthanduit" data-key="haar1-haaroverlay-steekthanduit">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g opacity="0.2" transform="translate(161.000000, 190.000000)" fill="#FF4200" fill-rule="nonzero" class="layer haaroverlay variant-haar2 status-steekthanduit" data-key="haar2-haaroverlay-steekthanduit">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-steekthanduit" data-key="haar3-haaroverlay-steekthanduit">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-steekthanduit" data-key="haar4-haaroverlay-steekthanduit">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-steekthanduit" data-key="all-rest-steekthanduit">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-steekthanduit" data-key="all-bril-steekthanduit">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-potloodinhand" data-key="all-kleding-potloodinhand">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-potloodinhand" data-key="all-huid-potloodinhand">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>                 <polygon points="120 120 110 120 100 120 100 130 100 140 120 140 120 130 130 130 130 125 130 120"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-potloodinhand" data-key="haar1-haar-potloodinhand">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-potloodinhand" data-key="haar3-haar-potloodinhand">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 130 120 130 130 130 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-potloodinhand" data-key="haar4-haar-potloodinhand">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L120,130 L130,130 L130,140 L130,140 L130,150 L130,150 L110,150 L110,150 L100,150 L100,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-potloodinhand" data-key="haar1-haaroverlay-potloodinhand">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g opacity="0.2" transform="translate(161.000000, 190.000000)" fill="#FF4200" fill-rule="nonzero" class="layer haaroverlay variant-haar2 status-potloodinhand" data-key="haar2-haaroverlay-potloodinhand">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-potloodinhand" data-key="haar3-haaroverlay-potloodinhand">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-potloodinhand" data-key="haar4-haaroverlay-potloodinhand">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-potloodinhand" data-key="all-rest-potloodinhand">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <rect fill="#FCEE21" x="80" y="80" width="10" height="10"/>             <rect fill="#FCEE21" x="100" y="60" width="10" height="10"/>             <rect fill="#FCEE21" x="110" y="50" width="10" height="10"/>             <rect fill="#000000" x="120" y="40" width="10" height="10"/>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-potloodinhand" data-key="all-bril-potloodinhand">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 200.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-bukt" data-key="all-kleding-bukt">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 10 30 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 80.000000)" fill-rule="nonzero" class="layer huid variant-all status-bukt" data-key="all-huid-bukt">             <g>                 <polygon points="50 130 50 140 50 150 60 150 70 150 70 140 70 130 60 130"/>                 <polygon points="70 140 70 150 90 150 90 140 90 130 70 130"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-bukt" data-key="haar1-haar-bukt">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-bukt" data-key="haar3-haar-bukt">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-bukt" data-key="haar4-haar-bukt">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,160 L10,160 L10,170 L20,170 L30,170 L40,170 L50,170 L60,170 L70,170 L80,170 L100,170 L100,170 L110,170 L120,170 L130,170 L130,160 L140,160 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L110,150 L110,150 L100,150 L100,160 L90,160 L80,160 L70,160 L60,160 L50,160 L40,160 L40,150 L30,150 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-bukt" data-key="haar1-haaroverlay-bukt">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(131.000000, 210.000000)" fill="#FF4200" fill-rule="nonzero" opacity="0.2" class="layer haaroverlay variant-haar2 status-bukt" data-key="haar2-haaroverlay-bukt">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-bukt" data-key="haar3-haaroverlay-bukt">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-bukt" data-key="haar4-haaroverlay-bukt">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="70 110 70 120 90 120 90 110 90 100 70 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>                 <g transform="translate(20.000000, 40.000000)">                     <polygon points="0 0 0 3.3 0 6.7 0 10 10 10 20 10 20 6.7 20 3.3 20 0 10 0"/>                     <polygon points="80 0 70 0 70 3.3 70 6.7 70 10 80 10 90 10 90 6.7 90 3.3 90 0"/>                 </g>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(71.000000, 140.000000)" fill-rule="nonzero" class="layer rest variant-all status-bukt" data-key="all-rest-bukt">             <g transform="translate(0.000000, 30.000000)">                 <polygon fill="#000044" opacity="0.2" points="80 30 70 30 60 30 50 30 40 30 30 30 20 30 20 40 30 40 30 50 30 60 40 60 40 50 40 40 50 40 60 40 70 40 80 40 80 50 90 50 90 40 90 30"/>                 <polygon fill="#FFFFFF" points="65 10 60 10 55 10 50 10 50 20 55 20 60 20 65 20 70 20 70 10"/>                 <polygon fill="#2F3452" points="20 60 20 70 10 70 10 80 30 80 30 70 40 70 60 70 60 80 80 80 80 70 80 60"/>                 <rect fill="#823C34" x="0" y="70" width="10" height="10"/>                 <rect fill="#823C34" x="50" y="70" width="10" height="10"/>                 <polygon fill="#FFFFFF" points="47.5 0 45 0 42.5 0 40 0 40 10 42.5 10 45 10 47.5 10 50 10 50 0"/>             </g>             <g transform="translate(10.000000, 0.000000)">                 <polygon fill="#FFFFFF" points="0 0 0 13.3 0 16.7 0 30 10 30 20 30 20 16.7 20 13.3 20 0 10 0"/>                 <polygon fill="#FFFFFF" points="80 0 70 0 70 13.3 70 16.7 70 30 80 30 90 30 90 16.7 90 13.3 90 0"/>                 <polygon fill="#000000" points="85 10 80 10 80 13.3 80 16.7 80 30 85 30 90 30 90 16.7 90 13.3 90 10"/>                 <polygon fill="#000000" points="15 10 10 10 10 13.3 10 16.7 10 30 15 30 20 30 20 16.7 20 13.3 20 10"/>             </g>         </g>         <g transform="translate(71.000000, 130.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-bukt" data-key="all-bril-bukt">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-zwaard" data-key="all-kleding-zwaard" data-frame="1">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 10 30 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(62.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-zwaard" data-key="all-huid-zwaard" data-frame="1">             <text font-family="Helvetica" font-size="12" font-weight="normal">                 <tspan x="69" y="60">boos</tspan>             </text>             <g>                 <polygon points="10 140 10 150 10 160 20 160 30 160 30 150 30 140 20 140"/>                 <polygon points="100 140 100 150 120 150 120 140 120 130 100 130"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-zwaard" data-key="haar1-haar-zwaard">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-zwaard" data-key="haar3-haar-zwaard">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-zwaard" data-key="haar4-haar-zwaard">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L130,140 L130,160 L120,160 L110,160 L110,150 L100,150 L100,170 L60,170 L50,170 L40,170 L30,170 L20,170 L20,150 L30,150 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-zwaard" data-key="haar1-haaroverlay-zwaard">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 110 100 120 110 120 110 110 110 100 100 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-zwaard" data-key="haar3-haaroverlay-zwaard">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 110 100 120 110 120 110 110 110 100 100 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-zwaard" data-key="haar4-haaroverlay-zwaard">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 110 100 120 110 120 110 110 110 100 100 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-zwaard" data-key="all-rest-zwaard">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 40 40 40 40 30 30 30 30 20 40 20 40 30 60 30 60 30 60 30 60 30 60 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 10 10 10 0"/>                     <polygon points="80 10 70 10 70 10 70 30 80 30 80 30 90 30 90 20 90 10 90 10"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 10"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(90.000000, 20.000000)">                 <g transform="translate(0.000000, 30.000000)" fill="#FFC400">                     <polygon points="10 0 0 0 0 10 0 20 10 20 10 10"/>                     <polygon points="20 20 10 20 10 30 20 30 30 30 30 20"/>                 </g>                 <rect fill="#C3DBDB" x="10" y="30" width="20" height="20"/>                 <rect fill="#C3DBDB" x="20" y="20" width="20" height="20"/>                 <rect fill="#C3DBDB" x="30" y="10" width="20" height="20"/>                 <rect fill="#C3DBDB" x="40" y="0" width="20" height="20"/>                 <rect fill="#B8CFCF" x="10" y="30" width="10" height="10"/>                 <rect fill="#D5F0F0" x="20" y="40" width="10" height="10"/>                 <rect fill="#D5F0F0" x="30" y="30" width="10" height="10"/>                 <rect fill="#D5F0F0" x="40" y="20" width="10" height="10"/>                 <rect fill="#D5F0F0" x="50" y="10" width="10" height="10"/>                 <rect fill="#B8CFCF" x="20" y="20" width="10" height="10"/>                 <rect fill="#B8CFCF" x="30" y="10" width="10" height="10"/>                 <rect fill="#B8CFCF" x="40" y="0" width="10" height="10"/>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-zwaard" data-key="all-bril-zwaard">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-danst" data-key="all-kleding-danst" data-frame="1">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 10 30 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(63.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-danst" data-key="all-huid-danst" data-frame="1">             <g>                 <polygon points="10 140 10 150 10 160 20 160 30 160 30 150 30 140 20 140"/>                 <polygon points="100 140 100 150 120 150 120 140 120 130 100 130"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-danst" data-key="haar1-haar-danst" data-frame="1">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-danst" data-key="haar3-haar-danst" data-frame="1">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 140 120 140 130 140 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-danst" data-key="haar4-haar-danst" data-frame="1">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L110,130 L110,140 L130,140 L130,160 L120,160 L110,160 L110,150 L100,150 L100,170 L60,170 L50,170 L40,170 L30,170 L20,170 L20,150 L30,150 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-danst" data-key="haar1-haaroverlay-danst" data-frame="1">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 110 100 120 110 120 110 110 110 100 100 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-danst" data-key="haar3-haaroverlay-danst" data-frame="1">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 110 100 120 110 120 110 110 110 100 100 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-danst" data-key="haar4-haaroverlay-danst" data-frame="1">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 110 100 120 110 120 110 110 110 100 100 100"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-danst" data-key="all-rest-danst" data-frame="1">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 40 40 40 40 30 30 30 30 20 40 20 40 30 60 30 60 30 60 30 60 30 60 30"/>                 <g transform="translate(10.000000, 90.000000)" fill="#2F3452">                     <polygon points="20 0 0 0 0 10 20 10 50 10 50 20 60 20 60 10 60 0"/>                     <rect x="0" y="10" width="10" height="10"/>                 </g>                 <rect fill="#823C34" x="0" y="110" width="10" height="10"/>                 <rect fill="#823C34" x="60" y="110" width="10" height="10"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 0 10 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 30 80 30 80 30 90 30 90 20 90 0 90 10"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="0 0 0 20 10 20 10 0 10 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-danst" data-key="all-bril-danst" data-frame="1">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 110 40 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(71.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-danst" data-key="all-kleding-danst" data-frame="2">             <polygon points="10 0 20 0 30 0 40 0 50 0 60 0 70 0 80 0 80 10 80 20 70 20 70 30 60 30 50 30 40 30 30 30 20 30 10 30 10 20 0 20 0 10 0 0"/>         </g>         <g transform="translate(51.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-danst" data-key="all-huid-danst" data-frame="2">             <g>                 <polygon points="110 140 110 150 110 160 100 160 90 160 90 150 90 140 100 140"/>                 <polygon points="20 140 20 150 0 150 0 140 0 130 20 130"/>                 <polygon points="10 30 10 20 20 20 20 10 30 10 30 0 40 0 50 0 60 0 70 0 80 0 80 10 90 10 90 20 100 20 100 30 110 30 110 40 110 50 110 60 120 60 120 70 120 80 120 90 110 90 110 100 110 110 100 110 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30 120 20 120 10 120 10 110 0 110 0 100 0 90 0 80 0 70 0 60 0 50 0 40 0 30"/>             </g>         </g>         <g transform="translate(41.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-danst" data-key="haar1-haar-danst" data-frame="2">             <g>                 <rect x="120" y="100" width="10" height="10"/>                 <polygon points="10 30 10 20 20 20 20 10 30 10 40 10 40 0 50 0 60 0 70 0 80 0 90 0 100 0 100 10 110 10 120 10 120 20 130 20 130 30 130 40 140 40 140 50 140 50 140 60 140 70 140 80 140 90 140 100 130 100 130 90 130 80 120 80 120 90 110 90 110 80 110 70 110 60 100 60 100 50 90 50 80 50 70 50 70 40 60 40 50 40 40 40 40 50 30 50 20 50 10 50 0 50 0 40 0 30"/>             </g>         </g>         <g transform="translate(41.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-danst" data-key="haar3-haar-danst" data-frame="2">             <polygon points="10 30 10 20 20 20 20 10 30 10 40 10 40 0 50 0 60 0 70 0 80 0 90 0 100 0 100 10 110 10 120 10 120 20 130 20 130 30 130 40 140 40 140 50 140 60 140 70 140 80 140 90 140 100 140 110 140 120 140 130 130 130 130 140 120 140 110 140 110 130 110 120 120 120 120 110 120 100 130 100 130 90 130 80 120 80 120 90 110 90 110 80 110 70 110 60 100 60 100 50 90 50 80 50 70 50 70 40 60 40 50 40 40 40 40 50 30 50 20 50 10 50 10 60 10 70 10 80 10 90 10 100 10 110 10 120 20 120 20 130 30 130 30 140 20 140 10 140 10 130 0 130 0 120 0 110 0 100 0 90 0 80 0 70 0 60 0 50 0 40 0 30"/>         </g>         <g transform="translate(41.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-danst" data-key="haar4-haar-danst" data-frame="2">             <path d="M0,30 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L130,40 L130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L0,30 Z M10,50 L20,50 L30,50 L40,50 L40,40 L50,40 L60,40 L70,40 L70,50 L80,50 L90,50 L100,50 L100,60 L110,60 L110,70 L110,80 L110,90 L120,90 L120,80 L130,80 L130,90 L130,100 L120,100 L120,110 L120,120 L110,120 L110,130 L110,150 L120,150 L120,170 L110,170 L100,170 L90,170 L80,170 L40,170 L40,150 L30,150 L30,160 L20,160 L10,160 L10,140 L30,140 L30,130 L20,130 L20,120 L10,120 L10,110 L10,100 L10,90 L10,80 L10,70 L10,60 L10,50 Z"/>         </g>         <g transform="translate(41.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-danst" data-key="haar1-haaroverlay-danst" data-frame="2">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="30 0 40 0 50 0 60 0 60 10 50 10 40 10 30 10"/>                 <rect x="0" y="10" width="10" height="10"/>                 <polygon points="80 10 90 10 90 20 80 20 70 20 60 20 60 10 70 10"/>                 <rect x="90" y="20" width="10" height="10"/>                 <polygon points="20 110 20 120 10 120 10 110 10 100 20 100"/>                 <polygon points="100 60 100 50 110 50 120 50 120 60 110 60 110 70 110 80 100 80 100 70"/>                 <rect x="90" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="10 30 10 20 20 20 20 10 30 10 40 10 40 0 50 0 60 0 70 0 80 0 90 0 100 0 100 10 110 10 120 10 120 20 130 20 130 30 130 40 140 40 140 50 140 50 140 60 130 60 130 50 120 50 120 40 120 30 110 30 110 20 100 20 90 20 80 20 70 20 60 20 50 20 40 20 40 30 30 30 30 40 20 40 10 40 10 50 0 50 0 40 0 30"/>         </g>         <g transform="translate(41.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-danst" data-key="haar3-haaroverlay-danst" data-frame="2">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="30 0 40 0 50 0 60 0 60 10 50 10 40 10 30 10"/>                 <rect x="0" y="10" width="10" height="10"/>                 <polygon points="80 10 90 10 90 20 80 20 70 20 60 20 60 10 70 10"/>                 <rect x="90" y="20" width="10" height="10"/>                 <polygon points="20 110 20 120 10 120 10 110 10 100 20 100"/>                 <polygon points="100 60 100 50 110 50 120 50 120 60 110 60 110 70 110 80 100 80 100 70"/>                 <rect x="90" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="10 30 10 20 20 20 20 10 30 10 40 10 40 0 50 0 60 0 70 0 80 0 90 0 100 0 100 10 110 10 120 10 120 20 130 20 130 30 130 40 140 40 140 50 140 50 140 60 130 60 130 50 120 50 120 40 120 30 110 30 110 20 100 20 90 20 80 20 70 20 60 20 50 20 40 20 40 30 30 30 30 40 20 40 10 40 10 50 0 50 0 40 0 30"/>         </g>         <g transform="translate(41.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-danst" data-key="haar4-haaroverlay-danst" data-frame="2">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="30 0 40 0 50 0 60 0 60 10 50 10 40 10 30 10"/>                 <rect x="0" y="10" width="10" height="10"/>                 <polygon points="80 10 90 10 90 20 80 20 70 20 60 20 60 10 70 10"/>                 <rect x="90" y="20" width="10" height="10"/>                 <polygon points="20 110 20 120 10 120 10 110 10 100 20 100"/>                 <polygon points="100 60 100 50 110 50 120 50 120 60 110 60 110 70 110 80 100 80 100 70"/>                 <rect x="90" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="10 30 10 20 20 20 20 10 30 10 40 10 40 0 50 0 60 0 70 0 80 0 90 0 100 0 100 10 110 10 120 10 120 20 130 20 130 30 130 40 140 40 140 50 140 50 140 60 130 60 130 50 120 50 120 40 120 30 110 30 110 20 100 20 90 20 80 20 70 20 60 20 50 20 40 20 40 30 30 30 30 40 20 40 10 40 10 50 0 50 0 40 0 30"/>         </g>         <g transform="translate(61.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-danst" data-key="all-rest-danst" data-frame="2">             <g>                 <polygon fill="#000044" opacity="0.2" points="20 60 30 60 40 60 50 60 60 60 70 60 80 60 80 70 70 70 70 80 70 90 60 90 60 80 60 70 50 70 40 70 30 70 20 70 20 80 10 80 10 70 10 60"/>                 <polygon fill="#FFFFFF" points="60 40 40 40 40 30 30 30 30 20 40 20 40 30 60 30 60 30 60 30 60 30 60 30"/>                 <g transform="translate(20.000000, 90.000000)" fill="#2F3452">                     <polygon points="40 0 60 0 60 10 40 10 10 10 10 20 0 20 0 10 0 0"/>                     <rect x="50" y="10" width="10" height="10"/>                 </g>                 <rect fill="#823C34" x="80" y="110" width="10" height="10"/>                 <rect fill="#823C34" x="20" y="110" width="10" height="10"/>                 <g fill="#FFFFFF">                     <polygon points="90 0 90 10 90 20 90 30 80 30 70 30 70 20 70 0 80 0 80 0"/>                     <polygon points="10 0 20 0 20 10 20 30 10 30 10 30 0 30 0 20 0 0 0 0"/>                 </g>                 <g transform="translate(10.000000, 0.000000)" fill="#000000">                     <polygon points="80 0 80 20 70 20 70 0 70 0"/>                     <polygon points="10 0 10 10 10 20 0 20 0 10 0 0"/>                 </g>             </g>         </g>         <g transform="translate(51.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-danst" data-key="all-bril-danst" data-frame="2">             <polygon points="10 0 20 0 30 0 40 0 50 0 50 10 60 10 60 0 70 0 80 0 90 0 100 0 110 0 110 10 110 20 110 30 110 40 100 40 90 40 80 40 70 40 70 30 80 30 90 30 100 30 100 20 100 10 90 10 80 10 70 10 70 20 70 30 60 30 60 20 50 20 50 30 40 30 40 20 40 10 30 10 20 10 10 10 10 20 10 30 20 30 30 30 40 30 40 40 30 40 20 40 10 40 0 40 0 30 0 20 0 10 0 0"/>         </g>         <g transform="translate(81.000000, 190.000000)" fill="#785CC4" fill-rule="nonzero" class="layer kleding variant-all status-glazenbol" data-key="all-kleding-glazenbol">             <polygon points="70 0 60 0 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 10 20 20 20 20 30 30 30 40 30 50 30 60 30 70 30 70 20 80 20 80 10 80 0"/>         </g>         <g transform="translate(61.000000, 70.000000)" fill-rule="nonzero" class="layer huid variant-all status-glazenbol" data-key="all-huid-glazenbol">             <g>                 <polygon points="20 140 20 150 20 160 30 160 40 160 40 150 40 140 30 140"/>                 <polygon points="110 30 110 20 100 20 100 10 90 10 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 10 60 0 60 0 70 0 80 0 90 10 90 10 100 10 110 20 110 20 120 30 120 40 120 50 120 60 120 70 120 80 120 90 120 100 120 110 120 110 110 120 110 120 100 120 90 120 80 120 70 120 60 120 50 120 40 120 30"/>                 <polygon points="120 120 110 120 100 120 100 130 100 140 120 140 120 130 130 130 130 125 130 120"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar1 status-glazenbol" data-key="haar1-haar-glazenbol">             <g>                 <rect x="10" y="100" width="10" height="10"/>                 <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 0 70 0 80 0 90 0 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 140 50 140 40 140 30"/>             </g>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar3 status-glazenbol" data-key="haar3-haar-glazenbol">             <polygon points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 60 0 70 0 80 0 90 0 100 0 110 0 120 0 130 10 130 10 140 20 140 30 140 30 130 30 120 20 120 20 110 20 100 10 100 10 90 10 80 20 80 20 90 30 90 30 80 30 70 30 60 40 60 40 50 50 50 60 50 70 50 70 40 80 40 90 40 100 40 100 50 110 50 120 50 130 50 130 60 130 70 130 80 130 90 130 100 130 110 130 120 120 120 120 130 110 130 110 130 120 130 130 130 130 130 140 130 140 120 140 110 140 100 140 90 140 80 140 70 140 60 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haar variant-haar4 status-glazenbol" data-key="haar4-haar-glazenbol">             <path d="M130,30 L130,20 L120,20 L120,10 L110,10 L100,10 L100,0 L90,0 L80,0 L70,0 L60,0 L50,0 L40,0 L40,10 L30,10 L20,10 L20,20 L10,20 L10,30 L10,40 L0,40 L0,50 L0,60 L0,70 L0,80 L0,90 L0,100 L0,110 L0,120 L0,130 L0,140 L0,150 L0,160 L0,170 L10,170 L10,180 L20,180 L30,180 L40,180 L50,180 L60,180 L70,180 L80,180 L90,180 L100,180 L110,180 L120,180 L130,180 L130,170 L140,170 L140,160 L140,150 L140,140 L140,130 L140,120 L140,110 L140,100 L140,90 L140,80 L140,70 L140,60 L140,50 L140,40 L140,30 L130,30 Z M130,60 L130,70 L130,80 L130,90 L130,100 L130,110 L130,120 L120,120 L120,130 L120,130 L130,130 L130,140 L130,140 L130,150 L130,150 L110,150 L110,150 L100,150 L100,170 L50,170 L40,170 L30,170 L30,160 L30,150 L30,140 L30,130 L30,120 L20,120 L20,110 L20,100 L10,100 L10,90 L10,80 L20,80 L20,90 L30,90 L30,80 L30,70 L30,60 L40,60 L40,50 L50,50 L60,50 L70,50 L70,40 L80,40 L90,40 L100,40 L100,50 L110,50 L120,50 L130,50 L130,60 Z"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar1 status-glazenbol" data-key="haar1-haaroverlay-glazenbol">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g opacity="0.2" transform="translate(161.000000, 190.000000)" fill="#FF4200" fill-rule="nonzero" class="layer haaroverlay variant-haar2 status-glazenbol" data-key="haar2-haaroverlay-glazenbol">             <polygon points="0 10 0 20 20 20 20 10 20 0 0 0"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar3 status-glazenbol" data-key="haar3-haaroverlay-glazenbol">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(51.000000, 60.000000)" fill-rule="nonzero" class="layer haaroverlay variant-haar4 status-glazenbol" data-key="haar4-haaroverlay-glazenbol">             <g opacity="0.2" transform="translate(10.000000, 40.000000)" fill="#FF4200">                 <polygon points="90 0 80 0 70 0 60 0 60 10 70 10 80 10 90 10"/>                 <rect x="110" y="10" width="10" height="10"/>                 <polygon points="40 10 30 10 30 20 40 20 50 20 60 20 60 10 50 10"/>                 <rect x="20" y="20" width="10" height="10"/>                 <polygon points="100 100 100 110 120 110 120 100 120 90 100 90"/>                 <polygon points="20 60 20 50 10 50 0 50 0 60 10 60 10 70 10 80 20 80 20 70"/>                 <rect x="20" y="80" width="10" height="10"/>             </g>             <polygon fill="#FFF255" opacity="0.15" points="130 30 130 20 120 20 120 10 110 10 100 10 100 0 90 0 80 0 70 0 60 0 50 0 40 0 40 10 30 10 20 10 20 20 10 20 10 30 10 40 0 40 0 50 0 50 0 60 10 60 10 50 20 50 20 40 20 30 30 30 30 20 40 20 50 20 60 20 70 20 80 20 90 20 100 20 100 30 110 30 110 40 120 40 130 40 130 50 140 50 140 40 140 30"/>         </g>         <g transform="translate(81.000000, 130.000000)" fill-rule="nonzero" class="layer rest variant-all status-glazenbol" data-key="all-rest-glazenbol">             <g>                 <polygon fill="#000044" opacity="0.2" points="70 60 60 60 50 60 40 60 30 60 20 60 10 60 10 70 20 70 20 80 20 90 30 90 30 80 30 70 40 70 50 70 60 70 70 70 70 80 80 80 80 70 80 60"/>                 <polygon fill="#FFFFFF" points="60 30 50 30 40 30 30 30 30 40 40 40 50 40 60 40 70 40 70 30"/>                 <g fill="#FFFFFF">                     <polygon points="0 0 0 10 0 20 0 30 10 30 20 30 20 20 20 10 20 0 10 0"/>                     <polygon points="80 0 70 0 70 10 70 20 70 30 80 30 90 30 90 20 90 10 90 0"/>                 </g>                 <g transform="translate(10.000000, 10.000000)" fill="#000000">                     <polygon points="0 10 0 20 10 20 10 10 10 0 0 0"/>                     <polygon points="70 0 70 10 70 20 80 20 80 10 80 0"/>                 </g>             </g>             <g transform="translate(80.000000, 10.000000)">                 <g opacity="0.3" transform="translate(9.000000, 10.000000)" fill="#CDDBF0">                     <polygon points="51.6 20 51.6 10 41.5 10 41.5 0 31.4 0 21.4 0 11.3 0 40.8 0 30.7 0 20.7 0 10.6 0 10.6 10 0.5 10 0.5 20 0.5 40 10.6 40 10.6 40 10.6 50 41.5 50 41.5 40 51.6 40 51.6 30 51.6 30"/>                 </g>                 <polygon fill="#3F3099" points="47.5 60 45 60 42.5 60 40 60 37.5 60 35 60 32.5 60 30 60 27.5 60 25 60 22.5 60 20 60 20 70 22.5 70 25 70 27.5 70 30 70 32.5 70 35 70 37.5 70 40 70 42.5 70 45 70 47.5 70 50 70 50 60"/>                 <rect fill="#3F3099" x="10" y="50" width="10" height="10"/>                 <rect fill="#3F3099" x="0" y="20" width="10" height="30"/>                 <polygon fill="#E0E0E0" points="40 10 30 10 30 20 20 20 20 30 10 30 10 40 10 50 20 50 20 40 30 40 30 30 40 30 40 20 50 20 50 10"/>                 <polygon fill="#3F3099" points="22.5 10 25 10 27.5 10 30 10 32.5 10 35 10 37.5 10 40 10 42.5 10 45 10 47.5 10 50 10 50 0 47.5 0 45 0 42.5 0 40 0 37.5 0 35 0 32.5 0 30 0 27.5 0 25 0 22.5 0 20 0 20 10"/>                 <rect fill="#3F3099" x="50" y="10" width="10" height="10"/>                 <rect fill="#3F3099" x="60" y="20" width="10" height="30"/>                 <rect fill="#3F3099" x="10" y="10" width="10" height="10"/>                 <rect fill="#3F3099" x="50" y="50" width="10" height="10"/>             </g>         </g>         <g transform="translate(71.000000, 120.000000)" fill="#000000" fill-rule="nonzero" class="layer bril variant-all status-glazenbol" data-key="all-bril-glazenbol">             <polygon points="100 0 90 0 80 0 70 0 60 0 60 10 50 10 50 0 40 0 30 0 20 0 10 0 0 0 0 10 0 20 0 30 0 40 10 40 20 40 30 40 40 40 40 30 30 30 20 30 10 30 10 20 10 10 20 10 30 10 40 10 40 20 40 30 50 30 50 20 60 20 60 30 70 30 70 20 70 10 80 10 90 10 100 10 100 20 100 30 90 30 80 30 70 30 70 40 80 40 90 40 100 40 100 30 110 30 110 20 110 10 110 0"/>         </g>         <g transform="translate(91.000000, 220.000000)" fill-rule="nonzero" class="layer benen variant-all status-staand" data-key="all-benen-staand">             <rect fill="#823C34" x="0" y="20" width="10" height="10"/>             <rect fill="#823C34" x="50" y="20" width="10" height="10"/>             <polygon fill="#2F3452" points="20 0 10 0 10 10 20 10 50 10 50 20 60 20 60 10 60 0"/>             <rect fill="#2F3452" x="0" y="10" width="10" height="10"/>         </g>         <g transform="translate(81.000000, 220.000000)" fill-rule="nonzero" class="layer benen variant-all status-loopt" data-key="all-benen-loopt" data-frame="1">             <g transform="translate(10.000000, 0.000000)" fill="#2F3452">                 <polygon points="20 0 10 0 10 10 20 10 50 10 50 20 60 20 60 10 60 0"/>                 <rect x="0" y="10" width="10" height="10"/>             </g>             <rect fill="#823C34" x="0" y="20" width="10" height="10"/>             <rect fill="#823C34" x="70" y="20" width="10" height="10"/>         </g>         <g transform="translate(91.000000, 220.000000)" fill-rule="nonzero" class="layer benen variant-all status-loopt" data-key="all-benen-loopt" data-frame="2">             <g fill="#2F3452">                 <polygon points="20 0 10 0 10 10 20 10 50 10 50 20 60 20 60 10 60 0"/>                 <rect x="0" y="10" width="10" height="10"/>             </g>             <rect fill="#823C34" x="0" y="20" width="10" height="10"/>             <rect fill="#823C34" x="50" y="20" width="10" height="10"/>         </g>         <g transform="translate(91.000000, 220.000000)" fill-rule="nonzero" class="layer benen variant-all status-loopt" data-key="all-benen-loopt" data-frame="3">             <g fill="#2F3452">                 <polygon points="20 0 10 0 10 10 20 10 50 10 50 20 60 20 60 10 60 0"/>                 <rect x="0" y="10" width="10" height="10"/>             </g>             <rect fill="#823C34" x="10" y="20" width="10" height="10"/>             <rect fill="#823C34" x="40" y="20" width="10" height="10"/>         </g>         <g transform="translate(91.000000, 220.000000)" fill-rule="nonzero" class="layer benen variant-all status-loopt" data-key="all-benen-loopt" data-frame="4">             <g fill="#2F3452">                 <polygon points="20 0 10 0 10 10 20 10 50 10 50 20 60 20 60 10 60 0"/>                 <rect x="0" y="10" width="10" height="10"/>             </g>             <rect fill="#823C34" x="0" y="20" width="10" height="10"/>             <rect fill="#823C34" x="50" y="20" width="10" height="10"/>         </g>     </g>',
            };
        },
        function (e) {
            e.exports = JSON.parse(
                '{"animLayers":{"all-rest-healing":3,"all-kleding-springt":3,"all-huid-springt":3,"haar1-haar-springt":3,"haar3-haar-springt":3,"haar4-haar-springt":3,"haar1-haaroverlay-springt":3,"haar3-haaroverlay-springt":3,"haar4-haaroverlay-springt":3,"all-rest-springt":3,"all-bril-springt":3,"all-huid-rent":2,"all-rest-rent":2,"all-rest-hartje":4,"all-rest-strompelen":2,"all-rest-haktmetbijl":2,"all-rest-bidt":2,"all-rest-zweet":4,"all-rest-lachend":2,"all-rest-zorgelijk":2,"all-rest-vraagteken":2,"all-rest-fluit":2,"all-rest-schreeuwt":2,"all-kleding-zwaard":1,"all-huid-zwaard":1,"all-kleding-danst":2,"all-huid-danst":2,"haar1-haar-danst":2,"haar3-haar-danst":2,"haar4-haar-danst":2,"haar1-haaroverlay-danst":2,"haar3-haaroverlay-danst":2,"haar4-haaroverlay-danst":2,"all-rest-danst":2,"all-bril-danst":2,"all-benen-loopt":4}}'
            );
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = (n(t(0)), t(7)),
                l = t(6),
                i = t(14),
                s = t(19),
                u = n(t(31)),
                c = t(88),
                d = t(5),
                p = (0, o.observer)("Inventory", function () {
                    var e = i.appStore.inventoryShown,
                        a = g();

                    function t() {
                        var e;
                        return null === (e = i.gameStore.game) || void 0 === e
                            ? void 0
                            : e.inventory.map(function (e) {
                                  return (0, d.jsx)(
                                      c.CSSTransition,
                                      {
                                          timeout: h,
                                          classNames: a.item,
                                          children: (0, d.jsx)("img", {
                                              src: objectenpad + "/inventory-".concat(e, ".png"),
                                              alt: e,
                                          }),
                                      },
                                      e
                                  );
                              });
                    }
                    return (0, d.jsxs)("div", {
                        className: (0, u.default)(a.inventory, {
                            visible: e,
                        }),
                        children: [
                            (0, d.jsx)("img", {
                                src: objectenpad + "/inventory-bg.png",
                                alt: "Inventory",
                            }),
                            (0, d.jsx)(c.TransitionGroup, {
                                children: t(),
                            }),
                        ],
                    });
                });
            a.default = p;
            var h = 2e3,
                g = (0, l.createUseStyles)({
                    inventory: (0, r.default)(
                        (0, r.default)({}, l.layout.overlay),
                        {},
                        {
                            willChange: "opacity",
                            transition: l.animation.transitions.medium("opacity"),
                            "&:not(.visible)": {
                                opacity: 0,
                            },
                            "&.visible": {
                                opacity: 0.8,
                            },
                            "& img": (0, r.default)((0, r.default)({}, l.layout.overlay), s.sceneSize),
                        }
                    ),
                    item: {
                        "&-enter": {
                            opacity: 0,
                        },
                        "&-enter-active": {
                            animation: "$item-appear linear ".concat(h, "ms"),
                            animationFillMode: "forwards",
                        },
                        "&-exit": {
                            opacity: 0,
                        },
                        "&-exit-active": {
                            animation: "$item-disappear linear ".concat(h, "ms"),
                            animationFillMode: "forwards",
                        },
                    },
                    "@keyframes item-appear": {
                        "0%": {
                            opacity: 0,
                        },
                        "19%": {
                            opacity: 0,
                        },
                        "20%": {
                            opacity: 1,
                        },
                        "39%": {
                            opacity: 1,
                        },
                        "40%": {
                            opacity: 0,
                        },
                        "59%": {
                            opacity: 0,
                        },
                        "60%": {
                            opacity: 1,
                        },
                        "79%": {
                            opacity: 1,
                        },
                        "80%": {
                            opacity: 0,
                        },
                        "99%": {
                            opacity: 0,
                        },
                        "100%": {
                            opacity: 1,
                        },
                    },
                    "@keyframes item-disappear": {
                        "0%": {
                            opacity: 1,
                        },
                        "19%": {
                            opacity: 1,
                        },
                        "20%": {
                            opacity: 0,
                        },
                        "39%": {
                            opacity: 0,
                        },
                        "40%": {
                            opacity: 1,
                        },
                        "59%": {
                            opacity: 1,
                        },
                        "60%": {
                            opacity: 0,
                        },
                        "79%": {
                            opacity: 0,
                        },
                        "80%": {
                            opacity: 1,
                        },
                        "99%": {
                            opacity: 1,
                        },
                        "100%": {
                            opacity: 0,
                        },
                    },
                });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = (n(t(0)), t(7)),
                l = t(6),
                i = t(10),
                s = t(40),
                u = t(14),
                c = n(t(87)),
                d = t(19),
                p = n(t(44)),
                h = t(5),
                g = (0, o.observer)("SplashScreen", function () {
                    var e = u.appStore.ready,
                        a = u.assetsStore.loaded,
                        t = u.assetsStore.total,
                        n = f();
                    return (0, h.jsxs)(s.ScaledScene, {
                        classNames: n.splashScreen,
                        children: [
                            (0, h.jsxs)(i.Center, {
                                classNames: n.header,
                                gap: 30,
                                children: [
                                    (0, h.jsx)(i.Label, {
                                        align: "center",
                                        children: "WELKOM BIJ",
                                    }),
                                    (0, h.jsx)("div", {
                                        className: n.logo,
                                        children: (0, h.jsx)(c.default, {}),
                                    }),
                                    (0, h.jsx)(i.ProgressBar, {
                                        progress: null == t ? 0 : a / t,
                                    }),
                                ],
                            }),
                            (0, h.jsx)("div", {
                                className: n.prompt,
                                children: e
                                    ? (0, h.jsxs)(i.Column, {
                                          children: [
                                              (0, h.jsx)(i.Label, {
                                                  align: "center",
                                                  children: "Ben je er klaar voor?",
                                              }),
                                              (0, h.jsx)(i.Label, {
                                                  align: "center",
                                                  classNames: n.small,
                                                  children: "Druk op de any key om te beginnen",
                                              }),
                                          ],
                                      })
                                    : (0, h.jsx)(i.Column, {
                                          children: (0, h.jsx)(i.Label, {
                                              align: "center",
                                              children: "Bezig met laden",
                                          }),
                                      }),
                            }),
                            (0, h.jsx)("div", {
                                className: n.overlay,
                                children: (0, h.jsx)(p.default, {}),
                            }),
                        ],
                    });
                });
            a.default = g;
            var f = (0, l.createUseStyles)({
                splashScreen: {
                    "& > *": {
                        background: "black",
                        pointerEvents: "none",
                    },
                },
                header: {
                    position: "absolute",
                    top: 80,
                    left: 0,
                    right: 0,
                },
                logo: {
                    position: "relative",
                    width: d.sceneSize.width / 2,
                    height: d.sceneSize.height / 2,
                },
                prompt: {
                    position: "absolute",
                    bottom: 80,
                    left: 0,
                    right: 0,
                },
                small: {
                    fontSize: 20,
                    opacity: 0.6,
                },
                overlay: (0, r.default)({}, l.layout.overlay),
            });
        },
        ,
        function (e, a, t) {
            "use strict";
            var n = t(30),
                r = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var o = r(t(3)),
                l = r(t(0)),
                i = t(7),
                s = t(6),
                u = t(40),
                c = r(t(44)),
                d = t(10),
                p = n(t(85)),
                h = t(19),
                g = t(14),
                f = r(t(49)),
                m = t(79),
                y = t(5),
                b = (0, i.observer)("SetupScreen", function () {
                    var e = (0, h.useSceneLayout)().scale,
                        a = g.keezerStore.variant,
                        t = l.default.useCallback(function (e) {
                            g.keezerStore.selectVariant(e);
                        }, []),
                        n = g.keezerStore.skinColor,
                        r = l.default.useCallback(function (e) {
                            g.keezerStore.setSkinColor(e);
                        }, []),
                        o = g.keezerStore.hairColor,
                        i = l.default.useCallback(function (e) {
                            g.keezerStore.setHairColor(e);
                        }, []),
                        s = g.keezerStore.clothesColor,
                        m = l.default.useCallback(function (e) {
                            g.keezerStore.setClothesColor(e);
                        }, []),
                        b = g.keezerStore.bril,
                        k = l.default.useCallback(function () {
                            g.keezerStore.toggleBril();
                        }, []),
                        L = g.keezerStore.doggyName,
                        j = l.default.useCallback(function (e) {
                            var a = e.target.value;
                            g.keezerStore.doggyName = a.replace(/[^-'!a-z0-9\s]/gi, "").slice(0, 20);
                        }, []),
                        w = l.default.useCallback(function () {
                            g.appStore.navigateTo("game");
                        }, []),
                        z = v();

                    function x() {
                        var e = "Keezer heeft nu ".concat(g.KeezerVariant.description(a));
                        return (
                            b && (e += " en heeft een bril op"),
                            (0, y.jsxs)(d.Column, {
                                flex: !0,
                                gap: 60,
                                children: [
                                    (0, y.jsx)(d.Center, {
                                        "aria-label": e,
                                        children: (0, y.jsx)(p.default, {
                                            status: null,
                                            walking: !0,
                                        }),
                                    }),
                                    (0, y.jsxs)(d.Column, {
                                        gap: 40,
                                        children: [
                                            (0, y.jsx)(d.Row, {
                                                gap: 40,
                                                justify: "center",
                                                children: g.KeezerVariant.all
                                                    .filter(function (e) {
                                                        return e !== a;
                                                    })
                                                    .map(function (e) {
                                                        return (function (e) {
                                                            var a = "Kies variant ".concat(
                                                                g.KeezerVariant.description(e)
                                                            );
                                                            return (0, y.jsx)(
                                                                d.Tappable,
                                                                {
                                                                    classNames: z.variant,
                                                                    "aria-label": a,
                                                                    onTap: t.bind(null, e),
                                                                    children: (0, y.jsx)(p.default, {
                                                                        status: null,
                                                                        variant: e,
                                                                    }),
                                                                },
                                                                e
                                                            );
                                                        })(e);
                                                    }),
                                            }),
                                            (0, y.jsx)(d.Row, {
                                                gap: 40,
                                                justify: "center",
                                                children: (0, y.jsx)(d.Tappable, {
                                                    onTap: k,
                                                    "aria-label": "Wil je een bril?",
                                                    "aria-checked": b,
                                                    children: (0, y.jsx)(d.Center, {
                                                        classNames: [
                                                            z.bril,
                                                            {
                                                                selected: b,
                                                            },
                                                        ],
                                                        children: (0, y.jsx)(d.SVG, {
                                                            svg: f.default.bril,
                                                        }),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            })
                        );
                    }

                    function F(a, t, n) {
                        return (0, y.jsx)(d.Column, {
                            gap: 10,
                            children: (0, y.jsx)(d.Slider, {
                                value: a,
                                onChange: t,
                                scale: e,
                                ariaLabel: n,
                            }),
                        });
                    }
                    return (0, y.jsxs)(u.ScaledScene, {
                        classNames: z.setupScreen,
                        children: [
                            (0, y.jsxs)(d.Column, {
                                flex: !0,
                                children: [
                                    (0, y.jsx)(d.Column, {
                                        padding: 80,
                                        children: (0, y.jsx)(d.Label, {
                                            align: "center",
                                            children: "PAS HIER HET UITERLIJK VAN KEEZER AAN",
                                        }),
                                    }),
                                    (0, y.jsxs)(d.Row, {
                                        flex: !0,
                                        gap: 40,
                                        children: [
                                            x(),
                                            (0, y.jsxs)(d.Column, {
                                                flex: !0,
                                                gap: 80,
                                                classNames: z.form,
                                                children: [
                                                    F(n, r, "Huidskleur"),
                                                    F(o, i, "Haarkleur"),
                                                    F(s, m, "Kledingkleur"),
                                                    (0, y.jsxs)(d.Column, {
                                                        gap: 10,
                                                        children: [
                                                            (0, y.jsx)(d.Label, {
                                                                children: "Hoe heet je hondje?",
                                                            }),
                                                            (0, y.jsx)("input", {
                                                                className: z.input,
                                                                "aria-label": "Hoe heet je hondje?",
                                                                value: L,
                                                                onFocus: function (e) {
                                                                    return e.target.select();
                                                                },
                                                                onChange: j,
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, y.jsx)(d.Center, {
                                        padding: 80,
                                        children: (0, y.jsx)(d.PushButton, {
                                            classNames: z.startGame,
                                            onTap: w,
                                            children: "Start het spel",
                                        }),
                                    }),
                                ],
                            }),
                            (0, y.jsx)("div", {
                                className: z.overlay,
                                children: (0, y.jsx)(c.default, {}),
                            }),
                        ],
                    });
                });
            a.default = b;
            var v = (0, s.createUseStyles)({
                setupScreen: {
                    pointerEvents: "none",
                    "& > *": {
                        background: "#555",
                    },
                },
                variant: (0, o.default)(
                    (0, o.default)({}, p.keezerSize),
                    {},
                    {
                        border: [5, "solid", "transparent"],
                        "&:focus-visible": {
                            border: [5, "solid", s.colors.white.alpha(0.2)],
                        },
                        "&:hover": {
                            border: [5, "solid", s.colors.white.alpha(0.6)],
                        },
                        "& > *": {
                            transform: "scale(0.8) translateX(-5px) translateY(-5px)",
                        },
                        pointerEvents: "auto",
                    }
                ),
                bril: {
                    width: 140,
                    height: 80,
                    border: [5, "solid", "transparent"],
                    "&:focus-visible": {
                        border: [5, "solid", s.colors.white.alpha(0.2)],
                    },
                    "&:hover, &.selected": {
                        border: [5, "solid", s.colors.white.alpha(0.6)],
                    },
                    "& svg": {
                        width: 110,
                        height: 40,
                    },
                    pointerEvents: "auto",
                },
                overlay: (0, o.default)(
                    (0, o.default)({}, s.layout.overlay),
                    {},
                    {
                        pointerEvents: "none",
                    }
                ),
                startGame: {
                    pointerEvents: "auto",
                },
                form: {
                    pointerEvents: "auto",
                },
                input: (0, o.default)(
                    (0, o.default)({}, s.presets.clearInput),
                    {},
                    {
                        width: m.sliderSize.width,
                        height: 60,
                        border: [5, "solid", s.colors.white.alpha(0.6)],
                        padding: 10,
                        "&:focus": {
                            border: [5, "solid", s.colors.white.alpha(1)],
                        },
                    }
                ),
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(0)),
                o = t(7),
                l = t(14),
                i = t(10),
                s = t(9),
                u = t(5);
            var c = (0, o.observer)("Music", function () {
                var e,
                    a,
                    t,
                    n,
                    o,
                    c = l.appStore.currentScreen,
                    d =
                        null !== (e = null === (a = l.gameStore.game) || void 0 === a ? void 0 : a.currentScene) &&
                        void 0 !== e
                            ? e
                            : null,
                    p =
                        null !== (t = null === (n = l.gameStore.game) || void 0 === n ? void 0 : n.currentRound) &&
                        void 0 !== t
                            ? t
                            : 0,
                    h = l.audioStore.audioMuted,
                    g = r.default.useMemo(
                        function () {
                            return "splash" === c || "setup" === c
                                ? "splash"
                                : "credits" === c
                                  ? "credits"
                                  : null != d
                                    ? ((e = d),
                                      (a = p),
                                      (0, s.some)(e.characters, function (e) {
                                          return (
                                              "henk-trol" === (null === e || void 0 === e ? void 0 : e.name) ||
                                              "hans-trol" === (null === e || void 0 === e ? void 0 : e.name)
                                          );
                                      })
                                          ? "henktrol"
                                          : a >= 6
                                            ? "tune4"
                                            : a >= 3
                                              ? "tune3"
                                              : a >= 1
                                                ? "tune2"
                                                : "tune1")
                                    : "tune1";
                            var e, a;
                        },
                        [p, d, c]
                    ),
                    f = null !== (o = l.assetsStore.audioBuffers.get(g)) && void 0 !== o ? o : null;
                return (0, u.jsx)(i.Audio, {
                    source: f,
                    playing: !h,
                    loop: "credits" !== g,
                    crossFade: "credits" !== g,
                });
            });
            a.default = c;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(3)),
                o = n(t(12)),
                l = n(t(0)),
                i = t(7),
                s = t(6),
                u = t(10),
                c = t(40),
                d = n(t(87)),
                p = t(19),
                h = n(t(44)),
                g = t(14),
                f = n(t(74)),
                m = t(22),
                y = t(23),
                b = t(5),
                v = (0, i.observer)("CreditsScreen", function () {
                    var e,
                        a,
                        t = null === (e = g.gameStore.game) || void 0 === e ? void 0 : e.winningParty,
                        n = f.default.credits.story,
                        r = f.default.credits.credits,
                        i = l.default.useRef(null),
                        s = (0, m.useTimer)(),
                        p = l.default.useState(!1),
                        v = (0, o.default)(p, 2),
                        L = v[0],
                        j = v[1],
                        w = l.default.useState(0),
                        z = (0, o.default)(w, 2),
                        x = z[0],
                        F = z[1],
                        S = l.default.useState(0),
                        P = (0, o.default)(S, 2),
                        q = P[0],
                        C = P[1],
                        O = "translateY(".concat(x, "px)"),
                        M = l.default.useMemo(function () {
                            return ["twitterbutton-f01", "twitterbutton-f02"];
                        }, []),
                        E = (0, y.useLayerAnim)(M),
                        D = l.default.useCallback(
                            function () {
                                var e = 0;
                                s.setTimeout(function a() {
                                    C((e += 0.02)), e < 1 && s.setTimeout(a, 100);
                                }, 100);
                            },
                            [s]
                        );
                    l.default.useEffect(
                        function () {
                            if ((s.clearAll(), L)) {
                                var e = 0;
                                s.setTimeout(function a() {
                                    var t,
                                        n,
                                        r,
                                        o,
                                        l,
                                        u =
                                            (null !==
                                                (t =
                                                    null === (n = i.current) || void 0 === n
                                                        ? void 0
                                                        : n.offsetHeight) && void 0 !== t
                                                ? t
                                                : 0) -
                                            (null !==
                                                (r =
                                                    null === (o = i.current) ||
                                                    void 0 === o ||
                                                    null === (l = o.parentElement) ||
                                                    void 0 === l
                                                        ? void 0
                                                        : l.clientHeight) && void 0 !== r
                                                ? r
                                                : 0);
                                    F((e -= 5)), e > 80 - u && s.setTimeout(a, 75);
                                }, 75);
                            }
                        },
                        [L, s]
                    ),
                        l.default.useEffect(
                            function () {
                                D(),
                                    s.setTimeout(function () {
                                        j(!0);
                                    }, 7500);
                            },
                            [D, s]
                        );
                    var _ = l.default.useCallback(function () {
                            g.gameStore.restart(), g.appStore.navigateTo("game");
                        }, []),
                        A = k(),
                        N = n.replace(
                            /\[partij\]/g,
                            null !== (a = null === t || void 0 === t ? void 0 : t.longName) && void 0 !== a ? a : ""
                        );
                    var T = l.default.useMemo(
                        function () {
                            var e = f.default.credits.tweet
                                .replace(/\[naamhondje\]/g, g.keezerStore.doggyName)
                                .replace(/\[partij\]/g, null === t || void 0 === t ? void 0 : t.longName);
                            return "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(e));
                        },
                        [null === t || void 0 === t ? void 0 : t.longName]
                    );
                    return (0, b.jsxs)(c.ScaledScene, {
                        classNames: A.creditsScreen,
                        style: {
                            opacity: q,
                        },
                        children: [
                            (0, b.jsx)(u.Column, {
                                flex: !0,
                                classNames: A.roll,
                                "aria-label": N,
                                children: (0, b.jsxs)(u.Center, {
                                    gap: 80,
                                    padding: 160,
                                    style: {
                                        transform: O,
                                    },
                                    ref: i,
                                    children: [
                                        (0, b.jsx)("div", {
                                            className: A.logo,
                                            children: (0, b.jsx)(d.default, {}),
                                        }),
                                        (0, b.jsxs)(u.Column, {
                                            gap: 600,
                                            children: [
                                                (0, b.jsx)(u.Label, {
                                                    align: "center",
                                                    children: N,
                                                }),
                                                (0, b.jsx)(u.Column, {
                                                    gap: 40,
                                                    children: r.map(function (e, a) {
                                                        return (0, b.jsx)(
                                                            u.Row,
                                                            {
                                                                children: e.map(function (e, a) {
                                                                    return (0, b.jsx)(
                                                                        u.Column,
                                                                        {
                                                                            flex: !0,
                                                                            children: (0, b.jsx)(u.Label, {
                                                                                align: "center",
                                                                                classNames: A.credits,
                                                                                children: e.replace(
                                                                                    /\[naamhondje\]/g,
                                                                                    g.keezerStore.doggyName
                                                                                ),
                                                                            }),
                                                                        },
                                                                        a
                                                                    );
                                                                }),
                                                            },
                                                            a
                                                        );
                                                    }),
                                                }),
                                                (0, b.jsxs)(u.Center, {
                                                    gap: 30,
                                                    children: [
                                                        (0, b.jsx)(u.Label, {
                                                            children: "Dit was",
                                                        }),
                                                        (0, b.jsx)("div", {
                                                            className: A.logoAgain,
                                                            children: (0, b.jsx)(d.default, {}),
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            (0, b.jsxs)(u.Row, {
                                padding: 80,
                                gap: 40,
                                justify: "center",
                                children: [
                                    (0, b.jsx)(u.PushButton, {
                                        classNames: A.playAgain,
                                        onTap: _,
                                        children: "Speel nog een keer",
                                    }),
                                    // Sorry Elon, niet vandaag!
                                    //(0, b.jsx)(u.Tappable, {
                                    //    classNames: A.twitter,
                                    //    href: T,
                                    //    children: (0, b.jsx)("img", {
                                    //        src: objectenpad + "/".concat(E.current, ".png"),
                                    //        alt: "Deel je uitslag op Twitter!",
                                    //    }),
                                    //}),
                                ],
                            }),
                            (0, b.jsx)("div", {
                                className: A.overlay,
                                children: (0, b.jsx)(h.default, {}),
                            }),
                        ],
                    });
                });
            a.default = v;
            var k = (0, s.createUseStyles)({
                creditsScreen: {
                    "& > *": {
                        background: "black",
                        pointerEvents: "none",
                    },
                },
                roll: {
                    overflow: "hidden",
                },
                logo: {
                    position: "relative",
                    width: p.sceneSize.width / 3,
                    height: p.sceneSize.height / 3,
                },
                logoAgain: {
                    position: "relative",
                    width: p.sceneSize.width / 2,
                    height: p.sceneSize.height / 2,
                },
                credits: {
                    whiteSpace: "pre-wrap",
                },
                playAgain: {
                    pointerEvents: "auto",
                },
                twitter: {
                    width: 130,
                    height: 120,
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                    pointerEvents: "auto",
                    "& > *": {
                        textIndent: -1e4,
                    },
                },
                overlay: (0, r.default)({}, s.layout.overlay),
            });
        },
        ,
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            n(t(0));
            var r = t(7),
                o = t(6),
                l = t(10),
                i = t(5),
                s = (0, r.memo)("RotateScreen", function () {
                    var e = u();
                    return (0, i.jsxs)(l.Column, {
                        flex: !0,
                        padding: 20,
                        align: "center",
                        justify: "space-around",
                        classNames: e.rotateScreen,
                        children: [
                            (0, i.jsx)("img", {
                                src: logopad + "/keezerlogo-f01.png",
                                className: e.logo,
                                alt: "Keezer's Quest Logo",
                            }),
                            (0, i.jsxs)(l.Column, {
                                gap: 20,
                                align: "center",
                                children: [
                                    (0, i.jsx)(l.Label, {
                                        children: "DRAAI NU JE SCHERM",
                                    }),
                                    (0, i.jsx)("img", {
                                        src: objectenpad + "/draainujescherm.png",
                                        className: e.rotateImage,
                                        alt: "",
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            a.default = s;
            var u = (0, o.createUseStyles)({
                rotateScreen: {
                    background: "black",
                    fontFamily: o.fonts.family.game,
                    fontSize: 20,
                },
                logo: {
                    width: 288,
                    height: 162,
                },
                rotateImage: {
                    width: 250,
                    height: 230,
                },
            });
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            n(t(0));
            var r = t(7),
                o = t(14),
                l = t(10),
                i = t(5),
                s = (0, r.observer)("SFX", function () {
                    var e,
                        a = o.audioStore.textSFX,
                        t = o.audioStore.audioMuted,
                        n = null !== (e = o.assetsStore.audioBuffers.get("tekst")) && void 0 !== e ? e : null;
                    return (0, i.jsx)(l.Audio, {
                        source: n,
                        playing: a && !t,
                        loop: !0,
                    });
                });
            a.default = s;
        },
        function (e, a, t) {
            "use strict";
            var n = t(1);
            Object.defineProperty(a, "__esModule", {
                value: !0,
            }),
                (a.default = void 0);
            var r = n(t(0)),
                o = t(7),
                l = t(6),
                i = t(23),
                s = t(10),
                u = t(5),
                c = (0, o.memo)("AudioHint", function (e) {
                    var a = r.default.useMemo(function () {
                            return [
                                objectenpad + "/pijltje-f01.png",
                                objectenpad + "/pijltje-f02.png",
                                objectenpad + "/pijltje-f03.png",
                                objectenpad + "/pijltje-f04.png",
                            ];
                        }, []),
                        t = (0, i.useLayerAnim)(a, 2),
                        n = d();
                    return (0, u.jsxs)(s.Row, {
                        gap: 20,
                        children: [
                            (0, u.jsx)(s.Label, {
                                children: "Zet je audio aan",
                            }),
                            null != t.current &&
                                (0, u.jsx)("img", {
                                    className: n.audioHintIcon,
                                    src: t.current,
                                    alt: "",
                                }),
                        ],
                    });
                });
            a.default = c;
            var d = (0, l.createUseStyles)({
                audioHintIcon: {
                    width: 100,
                    height: 70,
                },
            });
        },
    ],
    [[90, 1, 2]],
]);
