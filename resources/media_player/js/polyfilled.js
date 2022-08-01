"object" == typeof navigator &&
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("Plyr", t)
      : ((e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr =
          t());
  })(this, function () {
    "use strict";
    !(function () {
      if ("undefined" != typeof window)
        try {
          var e = new window.CustomEvent("test", { cancelable: !0 });
          if ((e.preventDefault(), !0 !== e.defaultPrevented))
            throw new Error("Could not prevent default");
        } catch (e) {
          var t = function (e, t) {
            var i, s;
            return (
              ((t = t || {}).bubbles = !!t.bubbles),
              (t.cancelable = !!t.cancelable),
              (i = document.createEvent("CustomEvent")).initCustomEvent(
                e,
                t.bubbles,
                t.cancelable,
                t.detail
              ),
              (s = i.preventDefault),
              (i.preventDefault = function () {
                s.call(this);
                try {
                  Object.defineProperty(this, "defaultPrevented", {
                    get: function () {
                      return !0;
                    },
                  });
                } catch (e) {
                  this.defaultPrevented = !0;
                }
              }),
              i
            );
          };
          (t.prototype = window.Event.prototype), (window.CustomEvent = t);
        }
    })();
    var e =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {};
    function t(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function i(e, t) {
      for (var i = 0; i < t.length; i++) {
        var s = t[i];
        (s.enumerable = s.enumerable || !1),
          (s.configurable = !0),
          "value" in s && (s.writable = !0),
          Object.defineProperty(e, s.key, s);
      }
    }
    function s(e, t, i) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = i),
        e
      );
    }
    function n(e, t) {
      var i = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        t &&
          (s = s.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          i.push.apply(i, s);
      }
      return i;
    }
    function a(e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? n(Object(i), !0).forEach(function (t) {
              s(e, t, i[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
          : n(Object(i)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(i, t)
              );
            });
      }
      return e;
    }
    !(function (e) {
      var t = (function () {
          try {
            return !!Symbol.iterator;
          } catch (e) {
            return !1;
          }
        })(),
        i = function (e) {
          var i = {
            next: function () {
              var t = e.shift();
              return { done: void 0 === t, value: t };
            },
          };
          return (
            t &&
              (i[Symbol.iterator] = function () {
                return i;
              }),
            i
          );
        },
        s = function (e) {
          return encodeURIComponent(e).replace(/%20/g, "+");
        },
        n = function (e) {
          return decodeURIComponent(String(e).replace(/\+/g, " "));
        };
      (function () {
        try {
          var t = e.URLSearchParams;
          return (
            "a=1" === new t("?a=1").toString() &&
            "function" == typeof t.prototype.set &&
            "function" == typeof t.prototype.entries
          );
        } catch (e) {
          return !1;
        }
      })() ||
        (function () {
          var n = function (e) {
              Object.defineProperty(this, "_entries", {
                writable: !0,
                value: {},
              });
              var t = typeof e;
              if ("undefined" === t);
              else if ("string" === t) "" !== e && this._fromString(e);
              else if (e instanceof n) {
                var i = this;
                e.forEach(function (e, t) {
                  i.append(t, e);
                });
              } else {
                if (null === e || "object" !== t)
                  throw new TypeError(
                    "Unsupported input's type for URLSearchParams"
                  );
                if ("[object Array]" === Object.prototype.toString.call(e))
                  for (var s = 0; s < e.length; s++) {
                    var a = e[s];
                    if (
                      "[object Array]" !== Object.prototype.toString.call(a) &&
                      2 === a.length
                    )
                      throw new TypeError(
                        "Expected [string, any] as entry at index " +
                          s +
                          " of URLSearchParams's input"
                      );
                    this.append(a[0], a[1]);
                  }
                else
                  for (var r in e) e.hasOwnProperty(r) && this.append(r, e[r]);
              }
            },
            a = n.prototype;
          (a.append = function (e, t) {
            e in this._entries
              ? this._entries[e].push(String(t))
              : (this._entries[e] = [String(t)]);
          }),
            (a.delete = function (e) {
              delete this._entries[e];
            }),
            (a.get = function (e) {
              return e in this._entries ? this._entries[e][0] : null;
            }),
            (a.getAll = function (e) {
              return e in this._entries ? this._entries[e].slice(0) : [];
            }),
            (a.has = function (e) {
              return e in this._entries;
            }),
            (a.set = function (e, t) {
              this._entries[e] = [String(t)];
            }),
            (a.forEach = function (e, t) {
              var i;
              for (var s in this._entries)
                if (this._entries.hasOwnProperty(s)) {
                  i = this._entries[s];
                  for (var n = 0; n < i.length; n++) e.call(t, i[n], s, this);
                }
            }),
            (a.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, i) {
                  e.push(i);
                }),
                i(e)
              );
            }),
            (a.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                i(e)
              );
            }),
            (a.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, i) {
                  e.push([i, t]);
                }),
                i(e)
              );
            }),
            t && (a[Symbol.iterator] = a.entries),
            (a.toString = function () {
              var e = [];
              return (
                this.forEach(function (t, i) {
                  e.push(s(i) + "=" + s(t));
                }),
                e.join("&")
              );
            }),
            (e.URLSearchParams = n);
        })();
      var a = e.URLSearchParams.prototype;
      "function" != typeof a.sort &&
        (a.sort = function () {
          var e = this,
            t = [];
          this.forEach(function (i, s) {
            t.push([s, i]), e._entries || e.delete(s);
          }),
            t.sort(function (e, t) {
              return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0;
            }),
            e._entries && (e._entries = {});
          for (var i = 0; i < t.length; i++) this.append(t[i][0], t[i][1]);
        }),
        "function" != typeof a._fromString &&
          Object.defineProperty(a, "_fromString", {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: function (e) {
              if (this._entries) this._entries = {};
              else {
                var t = [];
                this.forEach(function (e, i) {
                  t.push(i);
                });
                for (var i = 0; i < t.length; i++) this.delete(t[i]);
              }
              var s,
                a = (e = e.replace(/^\?/, "")).split("&");
              for (i = 0; i < a.length; i++)
                (s = a[i].split("=")),
                  this.append(n(s[0]), s.length > 1 ? n(s[1]) : "");
            },
          });
    })(
      void 0 !== e
        ? e
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof self
        ? self
        : e
    ),
      (function (e) {
        if (
          ((function () {
            try {
              var t = new e.URL("b", "http://a");
              return (
                (t.pathname = "c d"),
                "http://a/c%20d" === t.href && t.searchParams
              );
            } catch (e) {
              return !1;
            }
          })() ||
            (function () {
              var t = e.URL,
                i = function (t, i) {
                  "string" != typeof t && (t = String(t)),
                    i && "string" != typeof i && (i = String(i));
                  var s,
                    n = document;
                  if (i && (void 0 === e.location || i !== e.location.href)) {
                    (i = i.toLowerCase()),
                      ((s = (n =
                        document.implementation.createHTMLDocument(
                          ""
                        )).createElement("base")).href = i),
                      n.head.appendChild(s);
                    try {
                      if (0 !== s.href.indexOf(i)) throw new Error(s.href);
                    } catch (e) {
                      throw new Error(
                        "URL unable to set base " + i + " due to " + e
                      );
                    }
                  }
                  var a = n.createElement("a");
                  (a.href = t), s && (n.body.appendChild(a), (a.href = a.href));
                  var r = n.createElement("input");
                  if (
                    ((r.type = "url"),
                    (r.value = t),
                    ":" === a.protocol ||
                      !/:/.test(a.href) ||
                      (!r.checkValidity() && !i))
                  )
                    throw new TypeError("Invalid URL");
                  Object.defineProperty(this, "_anchorElement", { value: a });
                  var o = new e.URLSearchParams(this.search),
                    l = !0,
                    c = !0,
                    h = this;
                  ["append", "delete", "set"].forEach(function (e) {
                    var t = o[e];
                    o[e] = function () {
                      t.apply(o, arguments),
                        l && ((c = !1), (h.search = o.toString()), (c = !0));
                    };
                  }),
                    Object.defineProperty(this, "searchParams", {
                      value: o,
                      enumerable: !0,
                    });
                  var u = void 0;
                  Object.defineProperty(this, "_updateSearchParams", {
                    enumerable: !1,
                    configurable: !1,
                    writable: !1,
                    value: function () {
                      this.search !== u &&
                        ((u = this.search),
                        c &&
                          ((l = !1),
                          this.searchParams._fromString(this.search),
                          (l = !0)));
                    },
                  });
                },
                s = i.prototype;
              ["hash", "host", "hostname", "port", "protocol"].forEach(
                function (e) {
                  !(function (e) {
                    Object.defineProperty(s, e, {
                      get: function () {
                        return this._anchorElement[e];
                      },
                      set: function (t) {
                        this._anchorElement[e] = t;
                      },
                      enumerable: !0,
                    });
                  })(e);
                }
              ),
                Object.defineProperty(s, "search", {
                  get: function () {
                    return this._anchorElement.search;
                  },
                  set: function (e) {
                    (this._anchorElement.search = e),
                      this._updateSearchParams();
                  },
                  enumerable: !0,
                }),
                Object.defineProperties(s, {
                  toString: {
                    get: function () {
                      var e = this;
                      return function () {
                        return e.href;
                      };
                    },
                  },
                  href: {
                    get: function () {
                      return this._anchorElement.href.replace(/\?$/, "");
                    },
                    set: function (e) {
                      (this._anchorElement.href = e),
                        this._updateSearchParams();
                    },
                    enumerable: !0,
                  },
                  pathname: {
                    get: function () {
                      return this._anchorElement.pathname.replace(
                        /(^\/?)/,
                        "/"
                      );
                    },
                    set: function (e) {
                      this._anchorElement.pathname = e;
                    },
                    enumerable: !0,
                  },
                  origin: {
                    get: function () {
                      var e = { "http:": 80, "https:": 443, "ftp:": 21 }[
                          this._anchorElement.protocol
                        ],
                        t =
                          this._anchorElement.port != e &&
                          "" !== this._anchorElement.port;
                      return (
                        this._anchorElement.protocol +
                        "//" +
                        this._anchorElement.hostname +
                        (t ? ":" + this._anchorElement.port : "")
                      );
                    },
                    enumerable: !0,
                  },
                  password: {
                    get: function () {
                      return "";
                    },
                    set: function (e) {},
                    enumerable: !0,
                  },
                  username: {
                    get: function () {
                      return "";
                    },
                    set: function (e) {},
                    enumerable: !0,
                  },
                }),
                (i.createObjectURL = function (e) {
                  return t.createObjectURL.apply(t, arguments);
                }),
                (i.revokeObjectURL = function (e) {
                  return t.revokeObjectURL.apply(t, arguments);
                }),
                (e.URL = i);
            })(),
          void 0 !== e.location && !("origin" in e.location))
        ) {
          var t = function () {
            return (
              e.location.protocol +
              "//" +
              e.location.hostname +
              (e.location.port ? ":" + e.location.port : "")
            );
          };
          try {
            Object.defineProperty(e.location, "origin", {
              get: t,
              enumerable: !0,
            });
          } catch (i) {
            setInterval(function () {
              e.location.origin = t();
            }, 100);
          }
        }
      })(
        void 0 !== e
          ? e
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : e
      );
    var r = { addCSS: !0, thumbWidth: 15, watch: !0 };
    function o(e, t) {
      return function () {
        return Array.from(document.querySelectorAll(t)).includes(this);
      }.call(e, t);
    }
    var l = function (e) {
        return null != e ? e.constructor : null;
      },
      c = function (e, t) {
        return !!(e && t && e instanceof t);
      },
      h = function (e) {
        return null == e;
      },
      u = function (e) {
        return l(e) === Object;
      },
      d = function (e) {
        return l(e) === String;
      },
      p = function (e) {
        return Array.isArray(e);
      },
      m = function (e) {
        return c(e, NodeList);
      },
      g = d,
      f = p,
      b = m,
      y = function (e) {
        return c(e, Element);
      },
      v = function (e) {
        return c(e, Event);
      },
      w = function (e) {
        return (
          h(e) ||
          ((d(e) || p(e) || m(e)) && !e.length) ||
          (u(e) && !Object.keys(e).length)
        );
      };
    function T(e, t) {
      if (1 > t) {
        var i = (function (e) {
          var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
          return t
            ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0))
            : 0;
        })(t);
        return parseFloat(e.toFixed(i));
      }
      return Math.round(e / t) * t;
    }
    var k = (function () {
      function e(t, i) {
        (function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          y(t)
            ? (this.element = t)
            : g(t) && (this.element = document.querySelector(t)),
          y(this.element) &&
            w(this.element.rangeTouch) &&
            ((this.config = a({}, r, {}, i)), this.init());
      }
      return (
        (function (e, t, s) {
          t && i(e.prototype, t), s && i(e, s);
        })(
          e,
          [
            {
              key: "init",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = "none"),
                    (this.element.style.webKitUserSelect = "none"),
                    (this.element.style.touchAction = "manipulation")),
                  this.listeners(!0),
                  (this.element.rangeTouch = this));
              },
            },
            {
              key: "destroy",
              value: function () {
                e.enabled &&
                  (this.config.addCSS &&
                    ((this.element.style.userSelect = ""),
                    (this.element.style.webKitUserSelect = ""),
                    (this.element.style.touchAction = "")),
                  this.listeners(!1),
                  (this.element.rangeTouch = null));
              },
            },
            {
              key: "listeners",
              value: function (e) {
                var t = this,
                  i = e ? "addEventListener" : "removeEventListener";
                ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                  t.element[i](
                    e,
                    function (e) {
                      return t.set(e);
                    },
                    !1
                  );
                });
              },
            },
            {
              key: "get",
              value: function (t) {
                if (!e.enabled || !v(t)) return null;
                var i,
                  s = t.target,
                  n = t.changedTouches[0],
                  a = parseFloat(s.getAttribute("min")) || 0,
                  r = parseFloat(s.getAttribute("max")) || 100,
                  o = parseFloat(s.getAttribute("step")) || 1,
                  l = s.getBoundingClientRect(),
                  c = ((100 / l.width) * (this.config.thumbWidth / 2)) / 100;
                return (
                  0 > (i = (100 / l.width) * (n.clientX - l.left))
                    ? (i = 0)
                    : 100 < i && (i = 100),
                  50 > i
                    ? (i -= (100 - 2 * i) * c)
                    : 50 < i && (i += 2 * (i - 50) * c),
                  a + T((i / 100) * (r - a), o)
                );
              },
            },
            {
              key: "set",
              value: function (t) {
                e.enabled &&
                  v(t) &&
                  !t.target.disabled &&
                  (t.preventDefault(),
                  (t.target.value = this.get(t)),
                  (function (e, t) {
                    if (e && t) {
                      var i = new Event(t, { bubbles: !0 });
                      e.dispatchEvent(i);
                    }
                  })(t.target, "touchend" === t.type ? "change" : "input"));
              },
            },
          ],
          [
            {
              key: "setup",
              value: function (t) {
                var i =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  s = null;
                if (
                  (w(t) || g(t)
                    ? (s = Array.from(
                        document.querySelectorAll(
                          g(t) ? t : 'input[type="range"]'
                        )
                      ))
                    : y(t)
                    ? (s = [t])
                    : b(t)
                    ? (s = Array.from(t))
                    : f(t) && (s = t.filter(y)),
                  w(s))
                )
                  return null;
                var n = a({}, r, {}, i);
                if (g(t) && n.watch) {
                  var l = new MutationObserver(function (i) {
                    Array.from(i).forEach(function (i) {
                      Array.from(i.addedNodes).forEach(function (i) {
                        y(i) && o(i, t) && new e(i, n);
                      });
                    });
                  });
                  l.observe(document.body, { childList: !0, subtree: !0 });
                }
                return s.map(function (t) {
                  return new e(t, i);
                });
              },
            },
            {
              key: "enabled",
              get: function () {
                return "ontouchstart" in document.documentElement;
              },
            },
          ]
        ),
        e
      );
    })();
    const C = (e) => (null != e ? e.constructor : null),
      E = (e, t) => Boolean(e && t && e instanceof t),
      S = (e) => null == e,
      A = (e) => C(e) === Object,
      P = (e) => C(e) === String,
      M = (e) => C(e) === Function,
      x = (e) => Array.isArray(e),
      N = (e) => E(e, NodeList),
      L = (e) =>
        S(e) ||
        ((P(e) || x(e) || N(e)) && !e.length) ||
        (A(e) && !Object.keys(e).length);
    var _ = S,
      I = A,
      $ = (e) => C(e) === Number && !Number.isNaN(e),
      O = P,
      j = (e) => C(e) === Boolean,
      R = M,
      D = x,
      q = N,
      H = (e) =>
        null !== e &&
        "object" == typeof e &&
        1 === e.nodeType &&
        "object" == typeof e.style &&
        "object" == typeof e.ownerDocument,
      F = (e) => E(e, Event),
      V = (e) => E(e, KeyboardEvent),
      U = (e) => E(e, TextTrack) || (!S(e) && P(e.kind)),
      B = (e) => E(e, Promise) && M(e.then),
      W = (e) => {
        if (E(e, window.URL)) return !0;
        if (!P(e)) return !1;
        let t = e;
        (e.startsWith("http://") && e.startsWith("https://")) ||
          (t = `http://${e}`);
        try {
          return !L(new URL(t).hostname);
        } catch (e) {
          return !1;
        }
      },
      z = L;
    const K = (() => {
      const e = document.createElement("span"),
        t = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        },
        i = Object.keys(t).find((t) => void 0 !== e.style[t]);
      return !!O(i) && t[i];
    })();
    function Y(e, t) {
      setTimeout(() => {
        try {
          (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
        } catch (e) {}
      }, t);
    }
    const Q = {
      isIE: Boolean(window.document.documentMode),
      isEdge: window.navigator.userAgent.includes("Edge"),
      isWebkit:
        "WebkitAppearance" in document.documentElement.style &&
        !/Edge/.test(navigator.userAgent),
      isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
      isIos:
        ("MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) ||
        /(iPad|iPhone|iPod)/gi.test(navigator.platform),
    };
    function X(e, t) {
      return t.split(".").reduce((e, t) => e && e[t], e);
    }
    function J(e = {}, ...t) {
      if (!t.length) return e;
      const i = t.shift();
      return I(i)
        ? (Object.keys(i).forEach((t) => {
            I(i[t])
              ? (Object.keys(e).includes(t) || Object.assign(e, { [t]: {} }),
                J(e[t], i[t]))
              : Object.assign(e, { [t]: i[t] });
          }),
          J(e, ...t))
        : e;
    }
    function G(e, t) {
      const i = e.length ? e : [e];
      Array.from(i)
        .reverse()
        .forEach((e, i) => {
          const s = i > 0 ? t.cloneNode(!0) : t,
            n = e.parentNode,
            a = e.nextSibling;
          s.appendChild(e), a ? n.insertBefore(s, a) : n.appendChild(s);
        });
    }
    function Z(e, t) {
      H(e) &&
        !z(t) &&
        Object.entries(t)
          .filter(([, e]) => !_(e))
          .forEach(([t, i]) => e.setAttribute(t, i));
    }
    function ee(e, t, i) {
      const s = document.createElement(e);
      return I(t) && Z(s, t), O(i) && (s.innerText = i), s;
    }
    function te(e, t, i, s) {
      H(t) && t.appendChild(ee(e, i, s));
    }
    function ie(e) {
      q(e) || D(e)
        ? Array.from(e).forEach(ie)
        : H(e) && H(e.parentNode) && e.parentNode.removeChild(e);
    }
    function se(e) {
      if (!H(e)) return;
      let { length: t } = e.childNodes;
      for (; t > 0; ) e.removeChild(e.lastChild), (t -= 1);
    }
    function ne(e, t) {
      return H(t) && H(t.parentNode) && H(e)
        ? (t.parentNode.replaceChild(e, t), e)
        : null;
    }
    function ae(e, t) {
      if (!O(e) || z(e)) return {};
      const i = {},
        s = J({}, t);
      return (
        e.split(",").forEach((e) => {
          const t = e.trim(),
            n = t.replace(".", ""),
            a = t.replace(/[[\]]/g, "").split("="),
            [r] = a,
            o = a.length > 1 ? a[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              O(s.class) ? (i.class = `${s.class} ${n}`) : (i.class = n);
              break;
            case "#":
              i.id = t.replace("#", "");
              break;
            case "[":
              i[r] = o;
          }
        }),
        J(s, i)
      );
    }
    function re(e, t) {
      if (!H(e)) return;
      let i = t;
      j(i) || (i = !e.hidden), (e.hidden = i);
    }
    function oe(e, t, i) {
      if (q(e)) return Array.from(e).map((e) => oe(e, t, i));
      if (H(e)) {
        let s = "toggle";
        return (
          void 0 !== i && (s = i ? "add" : "remove"),
          e.classList[s](t),
          e.classList.contains(t)
        );
      }
      return !1;
    }
    function le(e, t) {
      return H(e) && e.classList.contains(t);
    }
    function ce(e, t) {
      const { prototype: i } = Element;
      return (
        i.matches ||
        i.webkitMatchesSelector ||
        i.mozMatchesSelector ||
        i.msMatchesSelector ||
        function () {
          return Array.from(document.querySelectorAll(t)).includes(this);
        }
      ).call(e, t);
    }
    function he(e) {
      return this.elements.container.querySelectorAll(e);
    }
    function ue(e) {
      return this.elements.container.querySelector(e);
    }
    function de(e = null, t = !1) {
      H(e) &&
        (e.focus({ preventScroll: !0 }),
        t && oe(e, this.config.classNames.tabFocus));
    }
    const pe = {
        "audio/ogg": "vorbis",
        "audio/wav": "1",
        "video/webm": "vp8, vorbis",
        "video/mp4": "avc1.42E01E, mp4a.40.2",
        "video/ogg": "theora",
      },
      me = {
        audio: "canPlayType" in document.createElement("audio"),
        video: "canPlayType" in document.createElement("video"),
        check(e, t, i) {
          const s = Q.isIPhone && i && me.playsinline,
            n = me[e] || "html5" !== t;
          return {
            api: n,
            ui: n && me.rangeInput && ("video" !== e || !Q.isIPhone || s),
          };
        },
        pip: !(
          Q.isIPhone ||
          (!R(ee("video").webkitSetPresentationMode) &&
            (!document.pictureInPictureEnabled ||
              ee("video").disablePictureInPicture))
        ),
        airplay: R(window.WebKitPlaybackTargetAvailabilityEvent),
        playsinline: "playsInline" in document.createElement("video"),
        mime(e) {
          if (z(e)) return !1;
          const [t] = e.split("/");
          let i = e;
          if (!this.isHTML5 || t !== this.type) return !1;
          Object.keys(pe).includes(i) && (i += `; codecs="${pe[e]}"`);
          try {
            return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
          } catch (e) {
            return !1;
          }
        },
        textTracks: "textTracks" in document.createElement("video"),
        rangeInput: (() => {
          const e = document.createElement("input");
          return (e.type = "range"), "range" === e.type;
        })(),
        touch: "ontouchstart" in document.documentElement,
        transitions: !1 !== K,
        reducedMotion:
          "matchMedia" in window &&
          window.matchMedia("(prefers-reduced-motion)").matches,
      },
      ge = (() => {
        let e = !1;
        try {
          const t = Object.defineProperty({}, "passive", {
            get: () => ((e = !0), null),
          });
          window.addEventListener("test", null, t),
            window.removeEventListener("test", null, t);
        } catch (e) {}
        return e;
      })();
    function fe(e, t, i, s = !1, n = !0, a = !1) {
      if (!e || !("addEventListener" in e) || z(t) || !R(i)) return;
      const r = t.split(" ");
      let o = a;
      ge && (o = { passive: n, capture: a }),
        r.forEach((t) => {
          this &&
            this.eventListeners &&
            s &&
            this.eventListeners.push({
              element: e,
              type: t,
              callback: i,
              options: o,
            }),
            e[s ? "addEventListener" : "removeEventListener"](t, i, o);
        });
    }
    function be(e, t = "", i, s = !0, n = !1) {
      fe.call(this, e, t, i, !0, s, n);
    }
    function ye(e, t = "", i, s = !0, n = !1) {
      fe.call(this, e, t, i, !1, s, n);
    }
    function ve(e, t = "", i, s = !0, n = !1) {
      const a = (...r) => {
        ye(e, t, a, s, n), i.apply(this, r);
      };
      fe.call(this, e, t, a, !0, s, n);
    }
    function we(e, t = "", i = !1, s = {}) {
      if (!H(e) || z(t)) return;
      const n = new CustomEvent(t, {
        bubbles: i,
        detail: { ...s, plyr: this },
      });
      e.dispatchEvent(n);
    }
    function Te() {
      this &&
        this.eventListeners &&
        (this.eventListeners.forEach((e) => {
          const { element: t, type: i, callback: s, options: n } = e;
          t.removeEventListener(i, s, n);
        }),
        (this.eventListeners = []));
    }
    function ke() {
      return new Promise((e) =>
        this.ready
          ? setTimeout(e, 0)
          : be.call(this, this.elements.container, "ready", e)
      ).then(() => {});
    }
    function Ce(e) {
      B(e) && e.then(null, () => {});
    }
    function Ee(e) {
      return D(e) ? e.filter((t, i) => e.indexOf(t) === i) : e;
    }
    function Se(e, t) {
      return D(e) && e.length
        ? e.reduce((e, i) => (Math.abs(i - t) < Math.abs(e - t) ? i : e))
        : null;
    }
    function Ae(e) {
      return !(!window || !window.CSS) && window.CSS.supports(e);
    }
    const Pe = [
      [1, 1],
      [4, 3],
      [3, 4],
      [5, 4],
      [4, 5],
      [3, 2],
      [2, 3],
      [16, 10],
      [10, 16],
      [16, 9],
      [9, 16],
      [21, 9],
      [9, 21],
      [32, 9],
      [9, 32],
    ].reduce((e, [t, i]) => ({ ...e, [t / i]: [t, i] }), {});
    function Me(e) {
      if (!(D(e) || (O(e) && e.includes(":")))) return !1;
      return (D(e) ? e : e.split(":")).map(Number).every($);
    }
    function xe(e) {
      if (!D(e) || !e.every($)) return null;
      const [t, i] = e,
        s = (e, t) => (0 === t ? e : s(t, e % t)),
        n = s(t, i);
      return [t / n, i / n];
    }
    function Ne(e) {
      const t = (e) => (Me(e) ? e.split(":").map(Number) : null);
      let i = t(e);
      if (
        (null === i && (i = t(this.config.ratio)),
        null === i &&
          !z(this.embed) &&
          D(this.embed.ratio) &&
          ({ ratio: i } = this.embed),
        null === i && this.isHTML5)
      ) {
        const { videoWidth: e, videoHeight: t } = this.media;
        i = [e, t];
      }
      return xe(i);
    }
    function Le(e) {
      if (!this.isVideo) return {};
      const { wrapper: t } = this.elements,
        i = Ne.call(this, e);
      if (!D(i)) return {};
      const [s, n] = xe(i),
        a = (100 / s) * n;
      if (
        (Ae(`aspect-ratio: ${s}/${n}`)
          ? (t.style.aspectRatio = `${s}/${n}`)
          : (t.style.paddingBottom = `${a}%`),
        this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
      ) {
        const e =
            (100 / this.media.offsetWidth) *
            parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
          i = (e - a) / (e / 50);
        this.fullscreen.active
          ? (t.style.paddingBottom = null)
          : (this.media.style.transform = `translateY(-${i}%)`);
      } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
      return { padding: a, ratio: i };
    }
    function _e(e, t, i = 0.05) {
      const s = e / t,
        n = Se(Object.keys(Pe), s);
      return Math.abs(n - s) <= i ? Pe[n] : [e, t];
    }
    const Ie = {
      getSources() {
        if (!this.isHTML5) return [];
        return Array.from(this.media.querySelectorAll("source")).filter((e) => {
          const t = e.getAttribute("type");
          return !!z(t) || me.mime.call(this, t);
        });
      },
      getQualityOptions() {
        return this.config.quality.forced
          ? this.config.quality.options
          : Ie.getSources
              .call(this)
              .map((e) => Number(e.getAttribute("size")))
              .filter(Boolean);
      },
      setup() {
        if (!this.isHTML5) return;
        const e = this;
        (e.options.speed = e.config.speed.options),
          z(this.config.ratio) || Le.call(e),
          Object.defineProperty(e.media, "quality", {
            get() {
              const t = Ie.getSources
                .call(e)
                .find((t) => t.getAttribute("src") === e.source);
              return t && Number(t.getAttribute("size"));
            },
            set(t) {
              if (e.quality !== t) {
                if (e.config.quality.forced && R(e.config.quality.onChange))
                  e.config.quality.onChange(t);
                else {
                  const i = Ie.getSources
                    .call(e)
                    .find((e) => Number(e.getAttribute("size")) === t);
                  if (!i) return;
                  const {
                    currentTime: s,
                    paused: n,
                    preload: a,
                    readyState: r,
                    playbackRate: o,
                  } = e.media;
                  (e.media.src = i.getAttribute("src")),
                    ("none" !== a || r) &&
                      (e.once("loadedmetadata", () => {
                        (e.speed = o), (e.currentTime = s), n || Ce(e.play());
                      }),
                      e.media.load());
                }
                we.call(e, e.media, "qualitychange", !1, { quality: t });
              }
            },
          });
      },
      cancelRequests() {
        this.isHTML5 &&
          (ie(Ie.getSources.call(this)),
          this.media.setAttribute("src", this.config.blankVideo),
          this.media.load(),
          this.debug.log("Cancelled network requests"));
      },
    };
    function $e(e, ...t) {
      return z(e)
        ? e
        : e.toString().replace(/{(\d+)}/g, (e, i) => t[i].toString());
    }
    const Oe = (e = "", t = "", i = "") =>
        e.replace(
          new RegExp(
            t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"),
            "g"
          ),
          i.toString()
        ),
      je = (e = "") =>
        e
          .toString()
          .replace(
            /\w\S*/g,
            (e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()
          );
    function Re(e = "") {
      let t = e.toString();
      return (
        (t = (function (e = "") {
          let t = e.toString();
          return (
            (t = Oe(t, "-", " ")),
            (t = Oe(t, "_", " ")),
            (t = je(t)),
            Oe(t, " ", "")
          );
        })(t)),
        t.charAt(0).toLowerCase() + t.slice(1)
      );
    }
    function De(e) {
      const t = document.createElement("div");
      return t.appendChild(e), t.innerHTML;
    }
    const qe = {
        pip: "PIP",
        airplay: "AirPlay",
        html5: "HTML5",
        vimeo: "Vimeo",
        youtube: "YouTube",
      },
      He = {
        get(e = "", t = {}) {
          if (z(e) || z(t)) return "";
          let i = X(t.i18n, e);
          if (z(i)) return Object.keys(qe).includes(e) ? qe[e] : "";
          const s = { "{seektime}": t.seekTime, "{title}": t.title };
          return (
            Object.entries(s).forEach(([e, t]) => {
              i = Oe(i, e, t);
            }),
            i
          );
        },
      };
    class Fe {
      constructor(e) {
        t(this, "get", (e) => {
          if (!Fe.supported || !this.enabled) return null;
          const t = window.localStorage.getItem(this.key);
          if (z(t)) return null;
          const i = JSON.parse(t);
          return O(e) && e.length ? i[e] : i;
        }),
          t(this, "set", (e) => {
            if (!Fe.supported || !this.enabled) return;
            if (!I(e)) return;
            let t = this.get();
            z(t) && (t = {}), J(t, e);
            try {
              window.localStorage.setItem(this.key, JSON.stringify(t));
            } catch (e) {}
          }),
          (this.enabled = e.config.storage.enabled),
          (this.key = e.config.storage.key);
      }
      static get supported() {
        try {
          if (!("localStorage" in window)) return !1;
          const e = "___test";
          return (
            window.localStorage.setItem(e, e),
            window.localStorage.removeItem(e),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
    }
    function Ve(e, t = "text") {
      return new Promise((i, s) => {
        try {
          const s = new XMLHttpRequest();
          if (!("withCredentials" in s)) return;
          s.addEventListener("load", () => {
            if ("text" === t)
              try {
                i(JSON.parse(s.responseText));
              } catch (e) {
                i(s.responseText);
              }
            else i(s.response);
          }),
            s.addEventListener("error", () => {
              throw new Error(s.status);
            }),
            s.open("GET", e, !0),
            (s.responseType = t),
            s.send();
        } catch (e) {
          s(e);
        }
      });
    }
    function Ue(e, t) {
      if (!O(e)) return;
      const i = O(t);
      let s = !1;
      const n = () => null !== document.getElementById(t),
        a = (e, t) => {
          (e.innerHTML = t),
            (i && n()) || document.body.insertAdjacentElement("afterbegin", e);
        };
      if (!i || !n()) {
        const n = Fe.supported,
          r = document.createElement("div");
        if ((r.setAttribute("hidden", ""), i && r.setAttribute("id", t), n)) {
          const e = window.localStorage.getItem(`cache-${t}`);
          if (((s = null !== e), s)) {
            const t = JSON.parse(e);
            a(r, t.content);
          }
        }
        Ve(e)
          .then((e) => {
            if (!z(e)) {
              if (n)
                try {
                  window.localStorage.setItem(
                    `cache-${t}`,
                    JSON.stringify({ content: e })
                  );
                } catch (e) {}
              a(r, e);
            }
          })
          .catch(() => {});
      }
    }
    const Be = (e) => Math.trunc((e / 60 / 60) % 60, 10);
    function We(e = 0, t = !1, i = !1) {
      if (!$(e)) return We(void 0, t, i);
      const s = (e) => `0${e}`.slice(-2);
      let n = Be(e);
      const a = ((r = e), Math.trunc((r / 60) % 60, 10));
      var r;
      const o = ((e) => Math.trunc(e % 60, 10))(e);
      return (
        (n = t || n > 0 ? `${n}:` : ""),
        `${i && e > 0 ? "-" : ""}${n}${s(a)}:${s(o)}`
      );
    }
    const ze = {
      getIconUrl() {
        const e = new URL(this.config.iconUrl, window.location),
          t = window.location.host
            ? window.location.host
            : window.top.location.host,
          i = e.host !== t || (Q.isIE && !window.svg4everybody);
        return { url: this.config.iconUrl, cors: i };
      },
      findElements() {
        try {
          return (
            (this.elements.controls = ue.call(
              this,
              this.config.selectors.controls.wrapper
            )),
            (this.elements.buttons = {
              play: he.call(this, this.config.selectors.buttons.play),
              pause: ue.call(this, this.config.selectors.buttons.pause),
              restart: ue.call(this, this.config.selectors.buttons.restart),
              rewind: ue.call(this, this.config.selectors.buttons.rewind),
              fastForward: ue.call(
                this,
                this.config.selectors.buttons.fastForward
              ),
              mute: ue.call(this, this.config.selectors.buttons.mute),
              pip: ue.call(this, this.config.selectors.buttons.pip),
              airplay: ue.call(this, this.config.selectors.buttons.airplay),
              settings: ue.call(this, this.config.selectors.buttons.settings),
              captions: ue.call(this, this.config.selectors.buttons.captions),
              fullscreen: ue.call(
                this,
                this.config.selectors.buttons.fullscreen
              ),
            }),
            (this.elements.progress = ue.call(
              this,
              this.config.selectors.progress
            )),
            (this.elements.inputs = {
              seek: ue.call(this, this.config.selectors.inputs.seek),
              volume: ue.call(this, this.config.selectors.inputs.volume),
            }),
            (this.elements.display = {
              buffer: ue.call(this, this.config.selectors.display.buffer),
              currentTime: ue.call(
                this,
                this.config.selectors.display.currentTime
              ),
              duration: ue.call(this, this.config.selectors.display.duration),
            }),
            H(this.elements.progress) &&
              (this.elements.display.seekTooltip =
                this.elements.progress.querySelector(
                  `.${this.config.classNames.tooltip}`
                )),
            !0
          );
        } catch (e) {
          return (
            this.debug.warn(
              "It looks like there is a problem with your custom controls HTML",
              e
            ),
            this.toggleNativeControls(!0),
            !1
          );
        }
      },
      createIcon(e, t) {
        const i = "http://www.w3.org/2000/svg",
          s = ze.getIconUrl.call(this),
          n = `${s.cors ? "" : s.url}#${this.config.iconPrefix}`,
          a = document.createElementNS(i, "svg");
        Z(a, J(t, { "aria-hidden": "true", focusable: "false" }));
        const r = document.createElementNS(i, "use"),
          o = `${n}-${e}`;
        return (
          "href" in r &&
            r.setAttributeNS("http://www.w3.org/1999/xlink", "href", o),
          r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o),
          a.appendChild(r),
          a
        );
      },
      createLabel(e, t = {}) {
        const i = He.get(e, this.config);
        return ee(
          "span",
          {
            ...t,
            class: [t.class, this.config.classNames.hidden]
              .filter(Boolean)
              .join(" "),
          },
          i
        );
      },
      createBadge(e) {
        if (z(e)) return null;
        const t = ee("span", { class: this.config.classNames.menu.value });
        return (
          t.appendChild(
            ee("span", { class: this.config.classNames.menu.badge }, e)
          ),
          t
        );
      },
      createButton(e, t) {
        const i = J({}, t);
        let s = Re(e);
        const n = {
          element: "button",
          toggle: !1,
          label: null,
          icon: null,
          labelPressed: null,
          iconPressed: null,
        };
        switch (
          (["element", "icon", "label"].forEach((e) => {
            Object.keys(i).includes(e) && ((n[e] = i[e]), delete i[e]);
          }),
          "button" !== n.element ||
            Object.keys(i).includes("type") ||
            (i.type = "button"),
          Object.keys(i).includes("class")
            ? i.class
                .split(" ")
                .some((e) => e === this.config.classNames.control) ||
              J(i, { class: `${i.class} ${this.config.classNames.control}` })
            : (i.class = this.config.classNames.control),
          e)
        ) {
          case "play":
            (n.toggle = !0),
              (n.label = "play"),
              (n.labelPressed = "pause"),
              (n.icon = "play"),
              (n.iconPressed = "pause");
            break;
          case "mute":
            (n.toggle = !0),
              (n.label = "mute"),
              (n.labelPressed = "unmute"),
              (n.icon = "volume"),
              (n.iconPressed = "muted");
            break;
          case "captions":
            (n.toggle = !0),
              (n.label = "enableCaptions"),
              (n.labelPressed = "disableCaptions"),
              (n.icon = "captions-off"),
              (n.iconPressed = "captions-on");
            break;
          case "fullscreen":
            (n.toggle = !0),
              (n.label = "enterFullscreen"),
              (n.labelPressed = "exitFullscreen"),
              (n.icon = "enter-fullscreen"),
              (n.iconPressed = "exit-fullscreen");
            break;
          case "play-large":
            (i.class += ` ${this.config.classNames.control}--overlaid`),
              (s = "play"),
              (n.label = "play"),
              (n.icon = "play");
            break;
          default:
            z(n.label) && (n.label = s), z(n.icon) && (n.icon = e);
        }
        const a = ee(n.element);
        return (
          n.toggle
            ? (a.appendChild(
                ze.createIcon.call(this, n.iconPressed, {
                  class: "icon--pressed",
                })
              ),
              a.appendChild(
                ze.createIcon.call(this, n.icon, { class: "icon--not-pressed" })
              ),
              a.appendChild(
                ze.createLabel.call(this, n.labelPressed, {
                  class: "label--pressed",
                })
              ),
              a.appendChild(
                ze.createLabel.call(this, n.label, {
                  class: "label--not-pressed",
                })
              ))
            : (a.appendChild(ze.createIcon.call(this, n.icon)),
              a.appendChild(ze.createLabel.call(this, n.label))),
          J(i, ae(this.config.selectors.buttons[s], i)),
          Z(a, i),
          "play" === s
            ? (D(this.elements.buttons[s]) || (this.elements.buttons[s] = []),
              this.elements.buttons[s].push(a))
            : (this.elements.buttons[s] = a),
          a
        );
      },
      createRange(e, t) {
        const i = ee(
          "input",
          J(
            ae(this.config.selectors.inputs[e]),
            {
              type: "range",
              min: 0,
              max: 100,
              step: 0.01,
              value: 0,
              autocomplete: "off",
              role: "slider",
              "aria-label": He.get(e, this.config),
              "aria-valuemin": 0,
              "aria-valuemax": 100,
              "aria-valuenow": 0,
            },
            t
          )
        );
        return (
          (this.elements.inputs[e] = i),
          ze.updateRangeFill.call(this, i),
          k.setup(i),
          i
        );
      },
      createProgress(e, t) {
        const i = ee(
          "progress",
          J(
            ae(this.config.selectors.display[e]),
            {
              min: 0,
              max: 100,
              value: 0,
              role: "progressbar",
              "aria-hidden": !0,
            },
            t
          )
        );
        if ("volume" !== e) {
          i.appendChild(ee("span", null, "0"));
          const t = { played: "played", buffer: "buffered" }[e],
            s = t ? He.get(t, this.config) : "";
          i.innerText = `% ${s.toLowerCase()}`;
        }
        return (this.elements.display[e] = i), i;
      },
      createTime(e, t) {
        const i = ae(this.config.selectors.display[e], t),
          s = ee(
            "div",
            J(i, {
              class: `${i.class ? i.class : ""} ${
                this.config.classNames.display.time
              } `.trim(),
              "aria-label": He.get(e, this.config),
            }),
            "00:00"
          );
        return (this.elements.display[e] = s), s;
      },
      bindMenuItemShortcuts(e, t) {
        be.call(
          this,
          e,
          "keydown keyup",
          (i) => {
            if (
              !["Space", "ArrowUp", "ArrowDown", "ArrowRight"].includes(i.key)
            )
              return;
            if ((i.preventDefault(), i.stopPropagation(), "keydown" === i.type))
              return;
            const s = ce(e, '[role="menuitemradio"]');
            if (!s && ["Space", "ArrowRight"].includes(i.key))
              ze.showMenuPanel.call(this, t, !0);
            else {
              let t;
              "Space" !== i.key &&
                ("ArrowDown" === i.key || (s && "ArrowRight" === i.key)
                  ? ((t = e.nextElementSibling),
                    H(t) || (t = e.parentNode.firstElementChild))
                  : ((t = e.previousElementSibling),
                    H(t) || (t = e.parentNode.lastElementChild)),
                de.call(this, t, !0));
            }
          },
          !1
        ),
          be.call(this, e, "keyup", (e) => {
            "Return" === e.key && ze.focusFirstMenuItem.call(this, null, !0);
          });
      },
      createMenuItem({
        value: e,
        list: t,
        type: i,
        title: s,
        badge: n = null,
        checked: a = !1,
      }) {
        const r = ae(this.config.selectors.inputs[i]),
          o = ee(
            "button",
            J(r, {
              type: "button",
              role: "menuitemradio",
              class: `${this.config.classNames.control} ${
                r.class ? r.class : ""
              }`.trim(),
              "aria-checked": a,
              value: e,
            })
          ),
          l = ee("span");
        (l.innerHTML = s),
          H(n) && l.appendChild(n),
          o.appendChild(l),
          Object.defineProperty(o, "checked", {
            enumerable: !0,
            get: () => "true" === o.getAttribute("aria-checked"),
            set(e) {
              e &&
                Array.from(o.parentNode.children)
                  .filter((e) => ce(e, '[role="menuitemradio"]'))
                  .forEach((e) => e.setAttribute("aria-checked", "false")),
                o.setAttribute("aria-checked", e ? "true" : "false");
            },
          }),
          this.listeners.bind(
            o,
            "click keyup",
            (t) => {
              if (!V(t) || "Space" === t.key) {
                switch (
                  (t.preventDefault(), t.stopPropagation(), (o.checked = !0), i)
                ) {
                  case "language":
                    this.currentTrack = Number(e);
                    break;
                  case "quality":
                    this.quality = e;
                    break;
                  case "speed":
                    this.speed = parseFloat(e);
                }
                ze.showMenuPanel.call(this, "home", V(t));
              }
            },
            i,
            !1
          ),
          ze.bindMenuItemShortcuts.call(this, o, i),
          t.appendChild(o);
      },
      formatTime(e = 0, t = !1) {
        if (!$(e)) return e;
        return We(e, Be(this.duration) > 0, t);
      },
      updateTimeDisplay(e = null, t = 0, i = !1) {
        H(e) && $(t) && (e.innerText = ze.formatTime(t, i));
      },
      updateVolume() {
        this.supported.ui &&
          (H(this.elements.inputs.volume) &&
            ze.setRange.call(
              this,
              this.elements.inputs.volume,
              this.muted ? 0 : this.volume
            ),
          H(this.elements.buttons.mute) &&
            (this.elements.buttons.mute.pressed =
              this.muted || 0 === this.volume));
      },
      setRange(e, t = 0) {
        H(e) && ((e.value = t), ze.updateRangeFill.call(this, e));
      },
      updateProgress(e) {
        if (!this.supported.ui || !F(e)) return;
        let t = 0;
        const i = (e, t) => {
          const i = $(t) ? t : 0,
            s = H(e) ? e : this.elements.display.buffer;
          if (H(s)) {
            s.value = i;
            const e = s.getElementsByTagName("span")[0];
            H(e) && (e.childNodes[0].nodeValue = i);
          }
        };
        if (e)
          switch (e.type) {
            case "timeupdate":
            case "seeking":
            case "seeked":
              (s = this.currentTime),
                (n = this.duration),
                (t =
                  0 === s || 0 === n || Number.isNaN(s) || Number.isNaN(n)
                    ? 0
                    : ((s / n) * 100).toFixed(2)),
                "timeupdate" === e.type &&
                  ze.setRange.call(this, this.elements.inputs.seek, t);
              break;
            case "playing":
            case "progress":
              i(this.elements.display.buffer, 100 * this.buffered);
          }
        var s, n;
      },
      updateRangeFill(e) {
        const t = F(e) ? e.target : e;
        if (H(t) && "range" === t.getAttribute("type")) {
          if (ce(t, this.config.selectors.inputs.seek)) {
            t.setAttribute("aria-valuenow", this.currentTime);
            const e = ze.formatTime(this.currentTime),
              i = ze.formatTime(this.duration),
              s = He.get("seekLabel", this.config);
            t.setAttribute(
              "aria-valuetext",
              s.replace("{currentTime}", e).replace("{duration}", i)
            );
          } else if (ce(t, this.config.selectors.inputs.volume)) {
            const e = 100 * t.value;
            t.setAttribute("aria-valuenow", e),
              t.setAttribute("aria-valuetext", `${e.toFixed(1)}%`);
          } else t.setAttribute("aria-valuenow", t.value);
          Q.isWebkit &&
            t.style.setProperty("--value", (t.value / t.max) * 100 + "%");
        }
      },
      updateSeekTooltip(e) {
        var t, i;
        if (
          !this.config.tooltips.seek ||
          !H(this.elements.inputs.seek) ||
          !H(this.elements.display.seekTooltip) ||
          0 === this.duration
        )
          return;
        const s = this.elements.display.seekTooltip,
          n = `${this.config.classNames.tooltip}--visible`,
          a = (e) => oe(s, n, e);
        if (this.touch) return void a(!1);
        let r = 0;
        const o = this.elements.progress.getBoundingClientRect();
        if (F(e)) r = (100 / o.width) * (e.pageX - o.left);
        else {
          if (!le(s, n)) return;
          r = parseFloat(s.style.left, 10);
        }
        r < 0 ? (r = 0) : r > 100 && (r = 100);
        const l = (this.duration / 100) * r;
        s.innerText = ze.formatTime(l);
        const c =
          null === (t = this.config.markers) ||
          void 0 === t ||
          null === (i = t.points) ||
          void 0 === i
            ? void 0
            : i.find(({ time: e }) => e === Math.round(l));
        c && s.insertAdjacentHTML("afterbegin", `${c.label}<br>`),
          (s.style.left = `${r}%`),
          F(e) &&
            ["mouseenter", "mouseleave"].includes(e.type) &&
            a("mouseenter" === e.type);
      },
      timeUpdate(e) {
        const t = !H(this.elements.display.duration) && this.config.invertTime;
        ze.updateTimeDisplay.call(
          this,
          this.elements.display.currentTime,
          t ? this.duration - this.currentTime : this.currentTime,
          t
        ),
          (e && "timeupdate" === e.type && this.media.seeking) ||
            ze.updateProgress.call(this, e);
      },
      durationUpdate() {
        if (!this.supported.ui || (!this.config.invertTime && this.currentTime))
          return;
        if (this.duration >= 2 ** 32)
          return (
            re(this.elements.display.currentTime, !0),
            void re(this.elements.progress, !0)
          );
        H(this.elements.inputs.seek) &&
          this.elements.inputs.seek.setAttribute(
            "aria-valuemax",
            this.duration
          );
        const e = H(this.elements.display.duration);
        !e &&
          this.config.displayDuration &&
          this.paused &&
          ze.updateTimeDisplay.call(
            this,
            this.elements.display.currentTime,
            this.duration
          ),
          e &&
            ze.updateTimeDisplay.call(
              this,
              this.elements.display.duration,
              this.duration
            ),
          this.config.markers.enabled && ze.setMarkers.call(this),
          ze.updateSeekTooltip.call(this);
      },
      toggleMenuButton(e, t) {
        re(this.elements.settings.buttons[e], !t);
      },
      updateSetting(e, t, i) {
        const s = this.elements.settings.panels[e];
        let n = null,
          a = t;
        if ("captions" === e) n = this.currentTrack;
        else {
          if (
            ((n = z(i) ? this[e] : i),
            z(n) && (n = this.config[e].default),
            !z(this.options[e]) && !this.options[e].includes(n))
          )
            return void this.debug.warn(`Unsupported value of '${n}' for ${e}`);
          if (!this.config[e].options.includes(n))
            return void this.debug.warn(`Disabled value of '${n}' for ${e}`);
        }
        if ((H(a) || (a = s && s.querySelector('[role="menu"]')), !H(a)))
          return;
        this.elements.settings.buttons[e].querySelector(
          `.${this.config.classNames.menu.value}`
        ).innerHTML = ze.getLabel.call(this, e, n);
        const r = a && a.querySelector(`[value="${n}"]`);
        H(r) && (r.checked = !0);
      },
      getLabel(e, t) {
        switch (e) {
          case "speed":
            return 1 === t ? He.get("normal", this.config) : `${t}&times;`;
          case "quality":
            if ($(t)) {
              const e = He.get(`qualityLabel.${t}`, this.config);
              return e.length ? e : `${t}p`;
            }
            return je(t);
          case "captions":
            return Qe.getLabel.call(this);
          default:
            return null;
        }
      },
      setQualityMenu(e) {
        if (!H(this.elements.settings.panels.quality)) return;
        const t = "quality",
          i =
            this.elements.settings.panels.quality.querySelector(
              '[role="menu"]'
            );
        D(e) &&
          (this.options.quality = Ee(e).filter((e) =>
            this.config.quality.options.includes(e)
          ));
        const s = !z(this.options.quality) && this.options.quality.length > 1;
        if (
          (ze.toggleMenuButton.call(this, t, s),
          se(i),
          ze.checkMenu.call(this),
          !s)
        )
          return;
        const n = (e) => {
          const t = He.get(`qualityBadge.${e}`, this.config);
          return t.length ? ze.createBadge.call(this, t) : null;
        };
        this.options.quality
          .sort((e, t) => {
            const i = this.config.quality.options;
            return i.indexOf(e) > i.indexOf(t) ? 1 : -1;
          })
          .forEach((e) => {
            ze.createMenuItem.call(this, {
              value: e,
              list: i,
              type: t,
              title: ze.getLabel.call(this, "quality", e),
              badge: n(e),
            });
          }),
          ze.updateSetting.call(this, t, i);
      },
      setCaptionsMenu() {
        if (!H(this.elements.settings.panels.captions)) return;
        const e = "captions",
          t =
            this.elements.settings.panels.captions.querySelector(
              '[role="menu"]'
            ),
          i = Qe.getTracks.call(this),
          s = Boolean(i.length);
        if (
          (ze.toggleMenuButton.call(this, e, s),
          se(t),
          ze.checkMenu.call(this),
          !s)
        )
          return;
        const n = i.map((e, i) => ({
          value: i,
          checked: this.captions.toggled && this.currentTrack === i,
          title: Qe.getLabel.call(this, e),
          badge:
            e.language && ze.createBadge.call(this, e.language.toUpperCase()),
          list: t,
          type: "language",
        }));
        n.unshift({
          value: -1,
          checked: !this.captions.toggled,
          title: He.get("disabled", this.config),
          list: t,
          type: "language",
        }),
          n.forEach(ze.createMenuItem.bind(this)),
          ze.updateSetting.call(this, e, t);
      },
      setSpeedMenu() {
        if (!H(this.elements.settings.panels.speed)) return;
        const e = "speed",
          t =
            this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(
          (e) => e >= this.minimumSpeed && e <= this.maximumSpeed
        );
        const i = !z(this.options.speed) && this.options.speed.length > 1;
        ze.toggleMenuButton.call(this, e, i),
          se(t),
          ze.checkMenu.call(this),
          i &&
            (this.options.speed.forEach((i) => {
              ze.createMenuItem.call(this, {
                value: i,
                list: t,
                type: e,
                title: ze.getLabel.call(this, "speed", i),
              });
            }),
            ze.updateSetting.call(this, e, t));
      },
      checkMenu() {
        const { buttons: e } = this.elements.settings,
          t = !z(e) && Object.values(e).some((e) => !e.hidden);
        re(this.elements.settings.menu, !t);
      },
      focusFirstMenuItem(e, t = !1) {
        if (this.elements.settings.popup.hidden) return;
        let i = e;
        H(i) ||
          (i = Object.values(this.elements.settings.panels).find(
            (e) => !e.hidden
          ));
        const s = i.querySelector('[role^="menuitem"]');
        de.call(this, s, t);
      },
      toggleMenu(e) {
        const { popup: t } = this.elements.settings,
          i = this.elements.buttons.settings;
        if (!H(t) || !H(i)) return;
        const { hidden: s } = t;
        let n = s;
        if (j(e)) n = e;
        else if (V(e) && "Escape" === e.key) n = !1;
        else if (F(e)) {
          const s = R(e.composedPath) ? e.composedPath()[0] : e.target,
            a = t.contains(s);
          if (a || (!a && e.target !== i && n)) return;
        }
        i.setAttribute("aria-expanded", n),
          re(t, !n),
          oe(this.elements.container, this.config.classNames.menu.open, n),
          n && V(e)
            ? ze.focusFirstMenuItem.call(this, null, !0)
            : n || s || de.call(this, i, V(e));
      },
      getMenuSize(e) {
        const t = e.cloneNode(!0);
        (t.style.position = "absolute"),
          (t.style.opacity = 0),
          t.removeAttribute("hidden"),
          e.parentNode.appendChild(t);
        const i = t.scrollWidth,
          s = t.scrollHeight;
        return ie(t), { width: i, height: s };
      },
      showMenuPanel(e = "", t = !1) {
        const i = this.elements.container.querySelector(
          `#plyr-settings-${this.id}-${e}`
        );
        if (!H(i)) return;
        const s = i.parentNode,
          n = Array.from(s.children).find((e) => !e.hidden);
        if (me.transitions && !me.reducedMotion) {
          (s.style.width = `${n.scrollWidth}px`),
            (s.style.height = `${n.scrollHeight}px`);
          const e = ze.getMenuSize.call(this, i),
            t = (e) => {
              e.target === s &&
                ["width", "height"].includes(e.propertyName) &&
                ((s.style.width = ""),
                (s.style.height = ""),
                ye.call(this, s, K, t));
            };
          be.call(this, s, K, t),
            (s.style.width = `${e.width}px`),
            (s.style.height = `${e.height}px`);
        }
        re(n, !0), re(i, !1), ze.focusFirstMenuItem.call(this, i, t);
      },
      setDownloadUrl() {
        const e = this.elements.buttons.download;
        H(e) && e.setAttribute("href", this.download);
      },
      create(e) {
        const {
          bindMenuItemShortcuts: t,
          createButton: i,
          createProgress: s,
          createRange: n,
          createTime: a,
          setQualityMenu: r,
          setSpeedMenu: o,
          showMenuPanel: l,
        } = ze;
        (this.elements.controls = null),
          D(this.config.controls) &&
            this.config.controls.includes("play-large") &&
            this.elements.container.appendChild(i.call(this, "play-large"));
        const c = ee("div", ae(this.config.selectors.controls.wrapper));
        this.elements.controls = c;
        const h = { class: "plyr__controls__item" };
        return (
          Ee(D(this.config.controls) ? this.config.controls : []).forEach(
            (r) => {
              if (
                ("restart" === r && c.appendChild(i.call(this, "restart", h)),
                "rewind" === r && c.appendChild(i.call(this, "rewind", h)),
                "play" === r && c.appendChild(i.call(this, "play", h)),
                "fast-forward" === r &&
                  c.appendChild(i.call(this, "fast-forward", h)),
                "progress" === r)
              ) {
                const t = ee("div", {
                    class: `${h.class} plyr__progress__container`,
                  }),
                  i = ee("div", ae(this.config.selectors.progress));
                if (
                  (i.appendChild(
                    n.call(this, "seek", { id: `plyr-seek-${e.id}` })
                  ),
                  i.appendChild(s.call(this, "buffer")),
                  this.config.tooltips.seek)
                ) {
                  const e = ee(
                    "span",
                    { class: this.config.classNames.tooltip },
                    "00:00"
                  );
                  i.appendChild(e), (this.elements.display.seekTooltip = e);
                }
                (this.elements.progress = i),
                  t.appendChild(this.elements.progress),
                  c.appendChild(t);
              }
              if (
                ("current-time" === r &&
                  c.appendChild(a.call(this, "currentTime", h)),
                "duration" === r && c.appendChild(a.call(this, "duration", h)),
                "mute" === r || "volume" === r)
              ) {
                let { volume: t } = this.elements;
                if (
                  ((H(t) && c.contains(t)) ||
                    ((t = ee(
                      "div",
                      J({}, h, { class: `${h.class} plyr__volume`.trim() })
                    )),
                    (this.elements.volume = t),
                    c.appendChild(t)),
                  "mute" === r && t.appendChild(i.call(this, "mute")),
                  "volume" === r && !Q.isIos)
                ) {
                  const i = { max: 1, step: 0.05, value: this.config.volume };
                  t.appendChild(
                    n.call(this, "volume", J(i, { id: `plyr-volume-${e.id}` }))
                  );
                }
              }
              if (
                ("captions" === r && c.appendChild(i.call(this, "captions", h)),
                "settings" === r && !z(this.config.settings))
              ) {
                const s = ee(
                  "div",
                  J({}, h, {
                    class: `${h.class} plyr__menu`.trim(),
                    hidden: "",
                  })
                );
                s.appendChild(
                  i.call(this, "settings", {
                    "aria-haspopup": !0,
                    "aria-controls": `plyr-settings-${e.id}`,
                    "aria-expanded": !1,
                  })
                );
                const n = ee("div", {
                    class: "plyr__menu__container",
                    id: `plyr-settings-${e.id}`,
                    hidden: "",
                  }),
                  a = ee("div"),
                  r = ee("div", { id: `plyr-settings-${e.id}-home` }),
                  o = ee("div", { role: "menu" });
                r.appendChild(o),
                  a.appendChild(r),
                  (this.elements.settings.panels.home = r),
                  this.config.settings.forEach((i) => {
                    const s = ee(
                      "button",
                      J(ae(this.config.selectors.buttons.settings), {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                        role: "menuitem",
                        "aria-haspopup": !0,
                        hidden: "",
                      })
                    );
                    t.call(this, s, i),
                      be.call(this, s, "click", () => {
                        l.call(this, i, !1);
                      });
                    const n = ee("span", null, He.get(i, this.config)),
                      r = ee("span", {
                        class: this.config.classNames.menu.value,
                      });
                    (r.innerHTML = e[i]),
                      n.appendChild(r),
                      s.appendChild(n),
                      o.appendChild(s);
                    const c = ee("div", {
                        id: `plyr-settings-${e.id}-${i}`,
                        hidden: "",
                      }),
                      h = ee("button", {
                        type: "button",
                        class: `${this.config.classNames.control} ${this.config.classNames.control}--back`,
                      });
                    h.appendChild(
                      ee("span", { "aria-hidden": !0 }, He.get(i, this.config))
                    ),
                      h.appendChild(
                        ee(
                          "span",
                          { class: this.config.classNames.hidden },
                          He.get("menuBack", this.config)
                        )
                      ),
                      be.call(
                        this,
                        c,
                        "keydown",
                        (e) => {
                          "ArrowLeft" === e.key &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            l.call(this, "home", !0));
                        },
                        !1
                      ),
                      be.call(this, h, "click", () => {
                        l.call(this, "home", !1);
                      }),
                      c.appendChild(h),
                      c.appendChild(ee("div", { role: "menu" })),
                      a.appendChild(c),
                      (this.elements.settings.buttons[i] = s),
                      (this.elements.settings.panels[i] = c);
                  }),
                  n.appendChild(a),
                  s.appendChild(n),
                  c.appendChild(s),
                  (this.elements.settings.popup = n),
                  (this.elements.settings.menu = s);
              }
              if (
                ("pip" === r && me.pip && c.appendChild(i.call(this, "pip", h)),
                "airplay" === r &&
                  me.airplay &&
                  c.appendChild(i.call(this, "airplay", h)),
                "download" === r)
              ) {
                const e = J({}, h, {
                  element: "a",
                  href: this.download,
                  target: "_blank",
                });
                this.isHTML5 && (e.download = "");
                const { download: t } = this.config.urls;
                !W(t) &&
                  this.isEmbed &&
                  J(e, { icon: `logo-${this.provider}`, label: this.provider }),
                  c.appendChild(i.call(this, "download", e));
              }
              "fullscreen" === r &&
                c.appendChild(i.call(this, "fullscreen", h));
            }
          ),
          this.isHTML5 && r.call(this, Ie.getQualityOptions.call(this)),
          o.call(this),
          c
        );
      },
      inject() {
        if (this.config.loadSprite) {
          const e = ze.getIconUrl.call(this);
          e.cors && Ue(e.url, "sprite-plyr");
        }
        this.id = Math.floor(1e4 * Math.random());
        let e = null;
        this.elements.controls = null;
        const t = {
          id: this.id,
          seektime: this.config.seekTime,
          title: this.config.title,
        };
        let i = !0;
        R(this.config.controls) &&
          (this.config.controls = this.config.controls.call(this, t)),
          this.config.controls || (this.config.controls = []),
          H(this.config.controls) || O(this.config.controls)
            ? (e = this.config.controls)
            : ((e = ze.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: Qe.getLabel.call(this),
              })),
              (i = !1));
        let s;
        i &&
          O(this.config.controls) &&
          (e = ((e) => {
            let i = e;
            return (
              Object.entries(t).forEach(([e, t]) => {
                i = Oe(i, `{${e}}`, t);
              }),
              i
            );
          })(e)),
          O(this.config.selectors.controls.container) &&
            (s = document.querySelector(
              this.config.selectors.controls.container
            )),
          H(s) || (s = this.elements.container);
        if (
          (s[H(e) ? "insertAdjacentElement" : "insertAdjacentHTML"](
            "afterbegin",
            e
          ),
          H(this.elements.controls) || ze.findElements.call(this),
          !z(this.elements.buttons))
        ) {
          const e = (e) => {
            const t = this.config.classNames.controlPressed;
            Object.defineProperty(e, "pressed", {
              enumerable: !0,
              get: () => le(e, t),
              set(i = !1) {
                oe(e, t, i);
              },
            });
          };
          Object.values(this.elements.buttons)
            .filter(Boolean)
            .forEach((t) => {
              D(t) || q(t) ? Array.from(t).filter(Boolean).forEach(e) : e(t);
            });
        }
        if ((Q.isEdge && Y(s), this.config.tooltips.controls)) {
          const { classNames: e, selectors: t } = this.config,
            i = `${t.controls.wrapper} ${t.labels} .${e.hidden}`,
            s = he.call(this, i);
          Array.from(s).forEach((e) => {
            oe(e, this.config.classNames.hidden, !1),
              oe(e, this.config.classNames.tooltip, !0);
          });
        }
      },
      setMediaMetadata() {
        try {
          "mediaSession" in navigator &&
            (navigator.mediaSession.metadata = new window.MediaMetadata({
              title: this.config.mediaMetadata.title,
              artist: this.config.mediaMetadata.artist,
              album: this.config.mediaMetadata.album,
              artwork: this.config.mediaMetadata.artwork,
            }));
        } catch (e) {}
      },
      setMarkers() {
        var e, t;
        if (!this.duration || this.elements.markers) return;
        const i =
          null === (e = this.config.markers) ||
          void 0 === e ||
          null === (t = e.points) ||
          void 0 === t
            ? void 0
            : t.filter(({ time: e }) => e > 0 && e < this.duration);
        if (null == i || !i.length) return;
        const s = document.createDocumentFragment(),
          n = document.createDocumentFragment();
        let a = null;
        const r = `${this.config.classNames.tooltip}--visible`,
          o = (e) => oe(a, r, e);
        i.forEach((e) => {
          const t = ee("span", { class: this.config.classNames.marker }, ""),
            i = (e.time / this.duration) * 100 + "%";
          a &&
            (t.addEventListener("mouseenter", () => {
              e.label || ((a.style.left = i), (a.innerHTML = e.label), o(!0));
            }),
            t.addEventListener("mouseleave", () => {
              o(!1);
            })),
            t.addEventListener("click", () => {
              this.currentTime = e.time;
            }),
            (t.style.left = i),
            n.appendChild(t);
        }),
          s.appendChild(n),
          this.config.tooltips.seek ||
            ((a = ee("span", { class: this.config.classNames.tooltip }, "")),
            s.appendChild(a)),
          (this.elements.markers = { points: n, tip: a }),
          this.elements.progress.appendChild(s);
      },
    };
    function Ke(e, t = !0) {
      let i = e;
      if (t) {
        const e = document.createElement("a");
        (e.href = i), (i = e.href);
      }
      try {
        return new URL(i);
      } catch (e) {
        return null;
      }
    }
    function Ye(e) {
      const t = new URLSearchParams();
      return (
        I(e) &&
          Object.entries(e).forEach(([e, i]) => {
            t.set(e, i);
          }),
        t
      );
    }
    const Qe = {
        setup() {
          if (!this.supported.ui) return;
          if (
            !this.isVideo ||
            this.isYouTube ||
            (this.isHTML5 && !me.textTracks)
          )
            return void (
              D(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              ze.setCaptionsMenu.call(this)
            );
          var e, t;
          if (
            (H(this.elements.captions) ||
              ((this.elements.captions = ee(
                "div",
                ae(this.config.selectors.captions)
              )),
              (e = this.elements.captions),
              (t = this.elements.wrapper),
              H(e) && H(t) && t.parentNode.insertBefore(e, t.nextSibling)),
            Q.isIE && window.URL)
          ) {
            const e = this.media.querySelectorAll("track");
            Array.from(e).forEach((e) => {
              const t = e.getAttribute("src"),
                i = Ke(t);
              null !== i &&
                i.hostname !== window.location.href.hostname &&
                ["http:", "https:"].includes(i.protocol) &&
                Ve(t, "blob")
                  .then((t) => {
                    e.setAttribute("src", window.URL.createObjectURL(t));
                  })
                  .catch(() => {
                    ie(e);
                  });
            });
          }
          const i = Ee(
            (
              navigator.languages || [
                navigator.language || navigator.userLanguage || "en",
              ]
            ).map((e) => e.split("-")[0])
          );
          let s = (
            this.storage.get("language") ||
            this.config.captions.language ||
            "auto"
          ).toLowerCase();
          "auto" === s && ([s] = i);
          let n = this.storage.get("captions");
          if (
            (j(n) || ({ active: n } = this.config.captions),
            Object.assign(this.captions, {
              toggled: !1,
              active: n,
              language: s,
              languages: i,
            }),
            this.isHTML5)
          ) {
            const e = this.config.captions.update
              ? "addtrack removetrack"
              : "removetrack";
            be.call(this, this.media.textTracks, e, Qe.update.bind(this));
          }
          setTimeout(Qe.update.bind(this), 0);
        },
        update() {
          const e = Qe.getTracks.call(this, !0),
            {
              active: t,
              language: i,
              meta: s,
              currentTrackNode: n,
            } = this.captions,
            a = Boolean(e.find((e) => e.language === i));
          this.isHTML5 &&
            this.isVideo &&
            e
              .filter((e) => !s.get(e))
              .forEach((e) => {
                this.debug.log("Track added", e),
                  s.set(e, { default: "showing" === e.mode }),
                  "showing" === e.mode && (e.mode = "hidden"),
                  be.call(this, e, "cuechange", () => Qe.updateCues.call(this));
              }),
            ((a && this.language !== i) || !e.includes(n)) &&
              (Qe.setLanguage.call(this, i), Qe.toggle.call(this, t && a)),
            this.elements &&
              oe(
                this.elements.container,
                this.config.classNames.captions.enabled,
                !z(e)
              ),
            D(this.config.controls) &&
              this.config.controls.includes("settings") &&
              this.config.settings.includes("captions") &&
              ze.setCaptionsMenu.call(this);
        },
        toggle(e, t = !0) {
          if (!this.supported.ui) return;
          const { toggled: i } = this.captions,
            s = this.config.classNames.captions.active,
            n = _(e) ? !i : e;
          if (n !== i) {
            if (
              (t ||
                ((this.captions.active = n), this.storage.set({ captions: n })),
              !this.language && n && !t)
            ) {
              const e = Qe.getTracks.call(this),
                t = Qe.findTrack.call(
                  this,
                  [this.captions.language, ...this.captions.languages],
                  !0
                );
              return (
                (this.captions.language = t.language),
                void Qe.set.call(this, e.indexOf(t))
              );
            }
            this.elements.buttons.captions &&
              (this.elements.buttons.captions.pressed = n),
              oe(this.elements.container, s, n),
              (this.captions.toggled = n),
              ze.updateSetting.call(this, "captions"),
              we.call(
                this,
                this.media,
                n ? "captionsenabled" : "captionsdisabled"
              );
          }
          setTimeout(() => {
            n &&
              this.captions.toggled &&
              (this.captions.currentTrackNode.mode = "hidden");
          });
        },
        set(e, t = !0) {
          const i = Qe.getTracks.call(this);
          if (-1 !== e)
            if ($(e))
              if (e in i) {
                if (this.captions.currentTrack !== e) {
                  this.captions.currentTrack = e;
                  const s = i[e],
                    { language: n } = s || {};
                  (this.captions.currentTrackNode = s),
                    ze.updateSetting.call(this, "captions"),
                    t ||
                      ((this.captions.language = n),
                      this.storage.set({ language: n })),
                    this.isVimeo && this.embed.enableTextTrack(n),
                    we.call(this, this.media, "languagechange");
                }
                Qe.toggle.call(this, !0, t),
                  this.isHTML5 && this.isVideo && Qe.updateCues.call(this);
              } else this.debug.warn("Track not found", e);
            else this.debug.warn("Invalid caption argument", e);
          else Qe.toggle.call(this, !1, t);
        },
        setLanguage(e, t = !0) {
          if (!O(e))
            return void this.debug.warn("Invalid language argument", e);
          const i = e.toLowerCase();
          this.captions.language = i;
          const s = Qe.getTracks.call(this),
            n = Qe.findTrack.call(this, [i]);
          Qe.set.call(this, s.indexOf(n), t);
        },
        getTracks(e = !1) {
          return Array.from((this.media || {}).textTracks || [])
            .filter((t) => !this.isHTML5 || e || this.captions.meta.has(t))
            .filter((e) => ["captions", "subtitles"].includes(e.kind));
        },
        findTrack(e, t = !1) {
          const i = Qe.getTracks.call(this),
            s = (e) => Number((this.captions.meta.get(e) || {}).default),
            n = Array.from(i).sort((e, t) => s(t) - s(e));
          let a;
          return (
            e.every((e) => ((a = n.find((t) => t.language === e)), !a)),
            a || (t ? n[0] : void 0)
          );
        },
        getCurrentTrack() {
          return Qe.getTracks.call(this)[this.currentTrack];
        },
        getLabel(e) {
          let t = e;
          return (
            !U(t) &&
              me.textTracks &&
              this.captions.toggled &&
              (t = Qe.getCurrentTrack.call(this)),
            U(t)
              ? z(t.label)
                ? z(t.language)
                  ? He.get("enabled", this.config)
                  : e.language.toUpperCase()
                : t.label
              : He.get("disabled", this.config)
          );
        },
        updateCues(e) {
          if (!this.supported.ui) return;
          if (!H(this.elements.captions))
            return void this.debug.warn("No captions element to render to");
          if (!_(e) && !Array.isArray(e))
            return void this.debug.warn("updateCues: Invalid input", e);
          let t = e;
          if (!t) {
            const e = Qe.getCurrentTrack.call(this);
            t = Array.from((e || {}).activeCues || [])
              .map((e) => e.getCueAsHTML())
              .map(De);
          }
          const i = t.map((e) => e.trim()).join("\n");
          if (i !== this.elements.captions.innerHTML) {
            se(this.elements.captions);
            const e = ee("span", ae(this.config.selectors.caption));
            (e.innerHTML = i),
              this.elements.captions.appendChild(e),
              we.call(this, this.media, "cuechange");
          }
        },
      },
      Xe = {
        enabled: !0,
        title: "",
        debug: !1,
        autoplay: !1,
        autopause: !0,
        playsinline: !0,
        seekTime: 10,
        volume: 1,
        muted: !1,
        duration: null,
        displayDuration: !0,
        invertTime: !0,
        toggleInvert: !0,
        ratio: null,
        clickToPlay: !0,
        hideControls: !0,
        resetOnEnd: !1,
        disableContextMenu: !0,
        loadSprite: !0,
        iconPrefix: "plyr",
        iconUrl: "https://cdn.plyr.io/3.7.2/plyr.svg",
        blankVideo: "https://cdn.plyr.io/static/blank.mp4",
        quality: {
          default: 576,
          options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
          forced: !1,
          onChange: null,
        },
        loop: { active: !1 },
        speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] },
        keyboard: { focused: !0, global: !1 },
        tooltips: { controls: !1, seek: !0 },
        captions: { active: !1, language: "auto", update: !1 },
        fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
        storage: { enabled: !0, key: "plyr" },
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        settings: ["captions", "quality", "speed"],
        i18n: {
          restart: "Restart",
          rewind: "Rewind {seektime}s",
          play: "Play",
          pause: "Pause",
          fastForward: "Forward {seektime}s",
          seek: "Seek",
          seekLabel: "{currentTime} of {duration}",
          played: "Played",
          buffered: "Buffered",
          currentTime: "Current time",
          duration: "Duration",
          volume: "Volume",
          mute: "Mute",
          unmute: "Unmute",
          enableCaptions: "Enable captions",
          disableCaptions: "Disable captions",
          download: "Download",
          enterFullscreen: "Enter fullscreen",
          exitFullscreen: "Exit fullscreen",
          frameTitle: "Player for {title}",
          captions: "Captions",
          settings: "Settings",
          pip: "PIP",
          menuBack: "Go back to previous menu",
          speed: "Speed",
          normal: "Normal",
          quality: "Quality",
          loop: "Loop",
          start: "Start",
          end: "End",
          all: "All",
          reset: "Reset",
          disabled: "Disabled",
          enabled: "Enabled",
          advertisement: "Ad",
          qualityBadge: {
            2160: "4K",
            1440: "HD",
            1080: "HD",
            720: "HD",
            576: "SD",
            480: "SD",
          },
        },
        urls: {
          download: null,
          vimeo: {
            sdk: "https://player.vimeo.com/api/player.js",
            iframe: "https://player.vimeo.com/video/{0}?{1}",
            api: "https://vimeo.com/api/oembed.json?url={0}",
          },
          youtube: {
            sdk: "https://www.youtube.com/iframe_api",
            api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}",
          },
          googleIMA: {
            sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js",
          },
        },
        listeners: {
          seek: null,
          play: null,
          pause: null,
          restart: null,
          rewind: null,
          fastForward: null,
          mute: null,
          volume: null,
          captions: null,
          download: null,
          fullscreen: null,
          pip: null,
          airplay: null,
          speed: null,
          quality: null,
          loop: null,
          language: null,
        },
        events: [
          "ended",
          "progress",
          "stalled",
          "playing",
          "waiting",
          "canplay",
          "canplaythrough",
          "loadstart",
          "loadeddata",
          "loadedmetadata",
          "timeupdate",
          "volumechange",
          "play",
          "pause",
          "error",
          "seeking",
          "seeked",
          "emptied",
          "ratechange",
          "cuechange",
          "download",
          "enterfullscreen",
          "exitfullscreen",
          "captionsenabled",
          "captionsdisabled",
          "languagechange",
          "controlshidden",
          "controlsshown",
          "ready",
          "statechange",
          "qualitychange",
          "adsloaded",
          "adscontentpause",
          "adscontentresume",
          "adstarted",
          "adsmidpoint",
          "adscomplete",
          "adsallcomplete",
          "adsimpression",
          "adsclick",
        ],
        selectors: {
          editable: "input, textarea, select, [contenteditable]",
          container: ".plyr",
          controls: { container: null, wrapper: ".plyr__controls" },
          labels: "[data-plyr]",
          buttons: {
            play: '[data-plyr="play"]',
            pause: '[data-plyr="pause"]',
            restart: '[data-plyr="restart"]',
            rewind: '[data-plyr="rewind"]',
            fastForward: '[data-plyr="fast-forward"]',
            mute: '[data-plyr="mute"]',
            captions: '[data-plyr="captions"]',
            download: '[data-plyr="download"]',
            fullscreen: '[data-plyr="fullscreen"]',
            pip: '[data-plyr="pip"]',
            airplay: '[data-plyr="airplay"]',
            settings: '[data-plyr="settings"]',
            loop: '[data-plyr="loop"]',
          },
          inputs: {
            seek: '[data-plyr="seek"]',
            volume: '[data-plyr="volume"]',
            speed: '[data-plyr="speed"]',
            language: '[data-plyr="language"]',
            quality: '[data-plyr="quality"]',
          },
          display: {
            currentTime: ".plyr__time--current",
            duration: ".plyr__time--duration",
            buffer: ".plyr__progress__buffer",
            loop: ".plyr__progress__loop",
            volume: ".plyr__volume--display",
          },
          progress: ".plyr__progress",
          captions: ".plyr__captions",
          caption: ".plyr__caption",
        },
        classNames: {
          type: "plyr--{0}",
          provider: "plyr--{0}",
          video: "plyr__video-wrapper",
          embed: "plyr__video-embed",
          videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
          embedContainer: "plyr__video-embed__container",
          poster: "plyr__poster",
          posterEnabled: "plyr__poster-enabled",
          ads: "plyr__ads",
          control: "plyr__control",
          controlPressed: "plyr__control--pressed",
          playing: "plyr--playing",
          paused: "plyr--paused",
          stopped: "plyr--stopped",
          loading: "plyr--loading",
          hover: "plyr--hover",
          tooltip: "plyr__tooltip",
          cues: "plyr__cues",
          marker: "plyr__progress__marker",
          hidden: "plyr__sr-only",
          hideControls: "plyr--hide-controls",
          isIos: "plyr--is-ios",
          isTouch: "plyr--is-touch",
          uiSupported: "plyr--full-ui",
          noTransition: "plyr--no-transition",
          display: { time: "plyr__time" },
          menu: {
            value: "plyr__menu__value",
            badge: "plyr__badge",
            open: "plyr--menu-open",
          },
          captions: {
            enabled: "plyr--captions-enabled",
            active: "plyr--captions-active",
          },
          fullscreen: {
            enabled: "plyr--fullscreen-enabled",
            fallback: "plyr--fullscreen-fallback",
          },
          pip: { supported: "plyr--pip-supported", active: "plyr--pip-active" },
          airplay: {
            supported: "plyr--airplay-supported",
            active: "plyr--airplay-active",
          },
          tabFocus: "plyr__tab-focus",
          previewThumbnails: {
            thumbContainer: "plyr__preview-thumb",
            thumbContainerShown: "plyr__preview-thumb--is-shown",
            imageContainer: "plyr__preview-thumb__image-container",
            timeContainer: "plyr__preview-thumb__time-container",
            scrubbingContainer: "plyr__preview-scrubbing",
            scrubbingContainerShown: "plyr__preview-scrubbing--is-shown",
          },
        },
        attributes: {
          embed: {
            provider: "data-plyr-provider",
            id: "data-plyr-embed-id",
            hash: "data-plyr-embed-hash",
          },
        },
        ads: { enabled: !1, publisherId: "", tagUrl: "" },
        previewThumbnails: { enabled: !1, src: "" },
        vimeo: {
          byline: !1,
          portrait: !1,
          title: !1,
          speed: !0,
          transparent: !1,
          customControls: !0,
          referrerPolicy: null,
          premium: !1,
        },
        youtube: {
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          customControls: !0,
          noCookie: !1,
        },
        mediaMetadata: { title: "", artist: "", album: "", artwork: [] },
        markers: { enabled: !1, points: [] },
      },
      Je = "picture-in-picture",
      Ge = "inline",
      Ze = { html5: "html5", youtube: "youtube", vimeo: "vimeo" },
      et = "audio",
      tt = "video";
    const it = () => {};
    class st {
      constructor(e = !1) {
        (this.enabled = window.console && e),
          this.enabled && this.log("Debugging enabled");
      }
      get log() {
        return this.enabled
          ? Function.prototype.bind.call(console.log, console)
          : it;
      }
      get warn() {
        return this.enabled
          ? Function.prototype.bind.call(console.warn, console)
          : it;
      }
      get error() {
        return this.enabled
          ? Function.prototype.bind.call(console.error, console)
          : it;
      }
    }
    class nt {
      constructor(e) {
        t(this, "onChange", () => {
          if (!this.enabled) return;
          const e = this.player.elements.buttons.fullscreen;
          H(e) && (e.pressed = this.active);
          const t =
            this.target === this.player.media
              ? this.target
              : this.player.elements.container;
          we.call(
            this.player,
            t,
            this.active ? "enterfullscreen" : "exitfullscreen",
            !0
          );
        }),
          t(this, "toggleFallback", (e = !1) => {
            if (
              (e
                ? (this.scrollPosition = {
                    x: window.scrollX || 0,
                    y: window.scrollY || 0,
                  })
                : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y),
              (document.body.style.overflow = e ? "hidden" : ""),
              oe(
                this.target,
                this.player.config.classNames.fullscreen.fallback,
                e
              ),
              Q.isIos)
            ) {
              let t = document.head.querySelector('meta[name="viewport"]');
              const i = "viewport-fit=cover";
              t ||
                ((t = document.createElement("meta")),
                t.setAttribute("name", "viewport"));
              const s = O(t.content) && t.content.includes(i);
              e
                ? ((this.cleanupViewport = !s), s || (t.content += `,${i}`))
                : this.cleanupViewport &&
                  (t.content = t.content
                    .split(",")
                    .filter((e) => e.trim() !== i)
                    .join(","));
            }
            this.onChange();
          }),
          t(this, "trapFocus", (e) => {
            if (Q.isIos || !this.active || "Tab" !== e.key) return;
            const t = document.activeElement,
              i = he.call(
                this.player,
                "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"
              ),
              [s] = i,
              n = i[i.length - 1];
            t !== n || e.shiftKey
              ? t === s && e.shiftKey && (n.focus(), e.preventDefault())
              : (s.focus(), e.preventDefault());
          }),
          t(this, "update", () => {
            if (this.enabled) {
              let e;
              (e = this.forceFallback
                ? "Fallback (forced)"
                : nt.native
                ? "Native"
                : "Fallback"),
                this.player.debug.log(`${e} fullscreen enabled`);
            } else
              this.player.debug.log(
                "Fullscreen not supported and fallback disabled"
              );
            oe(
              this.player.elements.container,
              this.player.config.classNames.fullscreen.enabled,
              this.enabled
            );
          }),
          t(this, "enter", () => {
            this.enabled &&
              (Q.isIos && this.player.config.fullscreen.iosNative
                ? this.player.isVimeo
                  ? this.player.embed.requestFullscreen()
                  : this.target.webkitEnterFullscreen()
                : !nt.native || this.forceFallback
                ? this.toggleFallback(!0)
                : this.prefix
                ? z(this.prefix) ||
                  this.target[`${this.prefix}Request${this.property}`]()
                : this.target.requestFullscreen({ navigationUI: "hide" }));
          }),
          t(this, "exit", () => {
            if (this.enabled)
              if (Q.isIos && this.player.config.fullscreen.iosNative)
                this.target.webkitExitFullscreen(), Ce(this.player.play());
              else if (!nt.native || this.forceFallback)
                this.toggleFallback(!1);
              else if (this.prefix) {
                if (!z(this.prefix)) {
                  const e = "moz" === this.prefix ? "Cancel" : "Exit";
                  document[`${this.prefix}${e}${this.property}`]();
                }
              } else
                (document.cancelFullScreen || document.exitFullscreen).call(
                  document
                );
          }),
          t(this, "toggle", () => {
            this.active ? this.exit() : this.enter();
          }),
          (this.player = e),
          (this.prefix = nt.prefix),
          (this.property = nt.property),
          (this.scrollPosition = { x: 0, y: 0 }),
          (this.forceFallback = "force" === e.config.fullscreen.fallback),
          (this.player.elements.fullscreen =
            e.config.fullscreen.container &&
            (function (e, t) {
              const { prototype: i } = Element;
              return (
                i.closest ||
                function () {
                  let e = this;
                  do {
                    if (ce.matches(e, t)) return e;
                    e = e.parentElement || e.parentNode;
                  } while (null !== e && 1 === e.nodeType);
                  return null;
                }
              ).call(e, t);
            })(this.player.elements.container, e.config.fullscreen.container)),
          be.call(
            this.player,
            document,
            "ms" === this.prefix
              ? "MSFullscreenChange"
              : `${this.prefix}fullscreenchange`,
            () => {
              this.onChange();
            }
          ),
          be.call(
            this.player,
            this.player.elements.container,
            "dblclick",
            (e) => {
              (H(this.player.elements.controls) &&
                this.player.elements.controls.contains(e.target)) ||
                this.player.listeners.proxy(e, this.toggle, "fullscreen");
            }
          ),
          be.call(this, this.player.elements.container, "keydown", (e) =>
            this.trapFocus(e)
          ),
          this.update();
      }
      static get native() {
        return !!(
          document.fullscreenEnabled ||
          document.webkitFullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled
        );
      }
      get usingNative() {
        return nt.native && !this.forceFallback;
      }
      static get prefix() {
        if (R(document.exitFullscreen)) return "";
        let e = "";
        return (
          ["webkit", "moz", "ms"].some(
            (t) =>
              !(
                !R(document[`${t}ExitFullscreen`]) &&
                !R(document[`${t}CancelFullScreen`])
              ) && ((e = t), !0)
          ),
          e
        );
      }
      static get property() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
      get enabled() {
        return (
          (nt.native || this.player.config.fullscreen.fallback) &&
          this.player.config.fullscreen.enabled &&
          this.player.supported.ui &&
          this.player.isVideo
        );
      }
      get active() {
        if (!this.enabled) return !1;
        if (!nt.native || this.forceFallback)
          return le(
            this.target,
            this.player.config.classNames.fullscreen.fallback
          );
        const e = this.prefix
          ? this.target.getRootNode()[`${this.prefix}${this.property}Element`]
          : this.target.getRootNode().fullscreenElement;
        return e && e.shadowRoot
          ? e === this.target.getRootNode().host
          : e === this.target;
      }
      get target() {
        return Q.isIos && this.player.config.fullscreen.iosNative
          ? this.player.media
          : this.player.elements.fullscreen || this.player.elements.container;
      }
    }
    function at(e, t = 1) {
      return new Promise((i, s) => {
        const n = new Image(),
          a = () => {
            delete n.onload, delete n.onerror, (n.naturalWidth >= t ? i : s)(n);
          };
        Object.assign(n, { onload: a, onerror: a, src: e });
      });
    }
    const rt = {
      addStyleHook() {
        oe(
          this.elements.container,
          this.config.selectors.container.replace(".", ""),
          !0
        ),
          oe(
            this.elements.container,
            this.config.classNames.uiSupported,
            this.supported.ui
          );
      },
      toggleNativeControls(e = !1) {
        e && this.isHTML5
          ? this.media.setAttribute("controls", "")
          : this.media.removeAttribute("controls");
      },
      build() {
        if ((this.listeners.media(), !this.supported.ui))
          return (
            this.debug.warn(
              `Basic support only for ${this.provider} ${this.type}`
            ),
            void rt.toggleNativeControls.call(this, !0)
          );
        H(this.elements.controls) ||
          (ze.inject.call(this), this.listeners.controls()),
          rt.toggleNativeControls.call(this),
          this.isHTML5 && Qe.setup.call(this),
          (this.volume = null),
          (this.muted = null),
          (this.loop = null),
          (this.quality = null),
          (this.speed = null),
          ze.updateVolume.call(this),
          ze.timeUpdate.call(this),
          ze.durationUpdate.call(this),
          rt.checkPlaying.call(this),
          oe(
            this.elements.container,
            this.config.classNames.pip.supported,
            me.pip && this.isHTML5 && this.isVideo
          ),
          oe(
            this.elements.container,
            this.config.classNames.airplay.supported,
            me.airplay && this.isHTML5
          ),
          oe(this.elements.container, this.config.classNames.isIos, Q.isIos),
          oe(
            this.elements.container,
            this.config.classNames.isTouch,
            this.touch
          ),
          (this.ready = !0),
          setTimeout(() => {
            we.call(this, this.media, "ready");
          }, 0),
          rt.setTitle.call(this),
          this.poster &&
            rt.setPoster.call(this, this.poster, !1).catch(() => {}),
          this.config.duration && ze.durationUpdate.call(this),
          this.config.mediaMetadata && ze.setMediaMetadata.call(this);
      },
      setTitle() {
        let e = He.get("play", this.config);
        if (
          (O(this.config.title) &&
            !z(this.config.title) &&
            (e += `, ${this.config.title}`),
          Array.from(this.elements.buttons.play || []).forEach((t) => {
            t.setAttribute("aria-label", e);
          }),
          this.isEmbed)
        ) {
          const e = ue.call(this, "iframe");
          if (!H(e)) return;
          const t = z(this.config.title) ? "video" : this.config.title,
            i = He.get("frameTitle", this.config);
          e.setAttribute("title", i.replace("{title}", t));
        }
      },
      togglePoster(e) {
        oe(this.elements.container, this.config.classNames.posterEnabled, e);
      },
      setPoster(e, t = !0) {
        return t && this.poster
          ? Promise.reject(new Error("Poster already set"))
          : (this.media.setAttribute("data-poster", e),
            this.elements.poster.removeAttribute("hidden"),
            ke
              .call(this)
              .then(() => at(e))
              .catch((t) => {
                throw (e === this.poster && rt.togglePoster.call(this, !1), t);
              })
              .then(() => {
                if (e !== this.poster)
                  throw new Error(
                    "setPoster cancelled by later call to setPoster"
                  );
              })
              .then(
                () => (
                  Object.assign(this.elements.poster.style, {
                    backgroundImage: `url('${e}')`,
                    backgroundSize: "",
                  }),
                  rt.togglePoster.call(this, !0),
                  e
                )
              ));
      },
      checkPlaying(e) {
        oe(
          this.elements.container,
          this.config.classNames.playing,
          this.playing
        ),
          oe(
            this.elements.container,
            this.config.classNames.paused,
            this.paused
          ),
          oe(
            this.elements.container,
            this.config.classNames.stopped,
            this.stopped
          ),
          Array.from(this.elements.buttons.play || []).forEach((e) => {
            Object.assign(e, { pressed: this.playing }),
              e.setAttribute(
                "aria-label",
                He.get(this.playing ? "pause" : "play", this.config)
              );
          }),
          (F(e) && "timeupdate" === e.type) || rt.toggleControls.call(this);
      },
      checkLoading(e) {
        (this.loading = ["stalled", "waiting"].includes(e.type)),
          clearTimeout(this.timers.loading),
          (this.timers.loading = setTimeout(
            () => {
              oe(
                this.elements.container,
                this.config.classNames.loading,
                this.loading
              ),
                rt.toggleControls.call(this);
            },
            this.loading ? 250 : 0
          ));
      },
      toggleControls(e) {
        const { controls: t } = this.elements;
        if (t && this.config.hideControls) {
          const i = this.touch && this.lastSeekTime + 2e3 > Date.now();
          this.toggleControls(
            Boolean(
              e || this.loading || this.paused || t.pressed || t.hover || i
            )
          );
        }
      },
      migrateStyles() {
        Object.values({ ...this.media.style })
          .filter((e) => !z(e) && O(e) && e.startsWith("--plyr"))
          .forEach((e) => {
            this.elements.container.style.setProperty(
              e,
              this.media.style.getPropertyValue(e)
            ),
              this.media.style.removeProperty(e);
          }),
          z(this.media.style) && this.media.removeAttribute("style");
      },
    };
    class ot {
      constructor(e) {
        t(this, "firstTouch", () => {
          const { player: e } = this,
            { elements: t } = e;
          (e.touch = !0), oe(t.container, e.config.classNames.isTouch, !0);
        }),
          t(this, "setTabFocus", (e) => {
            const { player: t } = this,
              { elements: i } = t,
              { key: s, type: n, timeStamp: a } = e;
            if ((clearTimeout(this.focusTimer), "keydown" === n && "Tab" !== s))
              return;
            "keydown" === n && (this.lastKeyDown = a);
            const r = a - this.lastKeyDown <= 20;
            ("focus" !== n || r) &&
              ((() => {
                const e = t.config.classNames.tabFocus;
                oe(he.call(t, `.${e}`), e, !1);
              })(),
              "focusout" !== n &&
                (this.focusTimer = setTimeout(() => {
                  const e = document.activeElement;
                  i.container.contains(e) &&
                    oe(
                      document.activeElement,
                      t.config.classNames.tabFocus,
                      !0
                    );
                }, 10)));
          }),
          t(this, "global", (e = !0) => {
            const { player: t } = this;
            t.config.keyboard.global &&
              fe.call(t, window, "keydown keyup", this.handleKey, e, !1),
              fe.call(t, document.body, "click", this.toggleMenu, e),
              ve.call(t, document.body, "touchstart", this.firstTouch),
              fe.call(
                t,
                document.body,
                "keydown focus blur focusout",
                this.setTabFocus,
                e,
                !1,
                !0
              );
          }),
          t(this, "container", () => {
            const { player: e } = this,
              { config: t, elements: i, timers: s } = e;
            !t.keyboard.global &&
              t.keyboard.focused &&
              be.call(e, i.container, "keydown keyup", this.handleKey, !1),
              be.call(
                e,
                i.container,
                "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",
                (t) => {
                  const { controls: n } = i;
                  n &&
                    "enterfullscreen" === t.type &&
                    ((n.pressed = !1), (n.hover = !1));
                  let a = 0;
                  ["touchstart", "touchmove", "mousemove"].includes(t.type) &&
                    (rt.toggleControls.call(e, !0), (a = e.touch ? 3e3 : 2e3)),
                    clearTimeout(s.controls),
                    (s.controls = setTimeout(
                      () => rt.toggleControls.call(e, !1),
                      a
                    ));
                }
              );
            const n = () => {
                if (!e.isVimeo || e.config.vimeo.premium) return;
                const t = i.wrapper,
                  { active: s } = e.fullscreen,
                  [n, a] = Ne.call(e),
                  r = Ae(`aspect-ratio: ${n} / ${a}`);
                if (!s)
                  return void (r
                    ? ((t.style.width = null), (t.style.height = null))
                    : ((t.style.maxWidth = null), (t.style.margin = null)));
                const [o, l] = [
                    Math.max(
                      document.documentElement.clientWidth || 0,
                      window.innerWidth || 0
                    ),
                    Math.max(
                      document.documentElement.clientHeight || 0,
                      window.innerHeight || 0
                    ),
                  ],
                  c = o / l > n / a;
                r
                  ? ((t.style.width = c ? "auto" : "100%"),
                    (t.style.height = c ? "100%" : "auto"))
                  : ((t.style.maxWidth = c ? (l / a) * n + "px" : null),
                    (t.style.margin = c ? "0 auto" : null));
              },
              a = () => {
                clearTimeout(s.resized), (s.resized = setTimeout(n, 50));
              };
            be.call(e, i.container, "enterfullscreen exitfullscreen", (t) => {
              const { target: s } = e.fullscreen;
              if (s !== i.container) return;
              if (!e.isEmbed && z(e.config.ratio)) return;
              n();
              ("enterfullscreen" === t.type ? be : ye).call(
                e,
                window,
                "resize",
                a
              );
            });
          }),
          t(this, "media", () => {
            const { player: e } = this,
              { elements: t } = e;
            if (
              (be.call(e, e.media, "timeupdate seeking seeked", (t) =>
                ze.timeUpdate.call(e, t)
              ),
              be.call(
                e,
                e.media,
                "durationchange loadeddata loadedmetadata",
                (t) => ze.durationUpdate.call(e, t)
              ),
              be.call(e, e.media, "ended", () => {
                e.isHTML5 &&
                  e.isVideo &&
                  e.config.resetOnEnd &&
                  (e.restart(), e.pause());
              }),
              be.call(e, e.media, "progress playing seeking seeked", (t) =>
                ze.updateProgress.call(e, t)
              ),
              be.call(e, e.media, "volumechange", (t) =>
                ze.updateVolume.call(e, t)
              ),
              be.call(
                e,
                e.media,
                "playing play pause ended emptied timeupdate",
                (t) => rt.checkPlaying.call(e, t)
              ),
              be.call(e, e.media, "waiting canplay seeked playing", (t) =>
                rt.checkLoading.call(e, t)
              ),
              e.supported.ui && e.config.clickToPlay && !e.isAudio)
            ) {
              const i = ue.call(e, `.${e.config.classNames.video}`);
              if (!H(i)) return;
              be.call(e, t.container, "click", (s) => {
                ([t.container, i].includes(s.target) || i.contains(s.target)) &&
                  ((e.touch && e.config.hideControls) ||
                    (e.ended
                      ? (this.proxy(s, e.restart, "restart"),
                        this.proxy(
                          s,
                          () => {
                            Ce(e.play());
                          },
                          "play"
                        ))
                      : this.proxy(
                          s,
                          () => {
                            Ce(e.togglePlay());
                          },
                          "play"
                        )));
              });
            }
            e.supported.ui &&
              e.config.disableContextMenu &&
              be.call(
                e,
                t.wrapper,
                "contextmenu",
                (e) => {
                  e.preventDefault();
                },
                !1
              ),
              be.call(e, e.media, "volumechange", () => {
                e.storage.set({ volume: e.volume, muted: e.muted });
              }),
              be.call(e, e.media, "ratechange", () => {
                ze.updateSetting.call(e, "speed"),
                  e.storage.set({ speed: e.speed });
              }),
              be.call(e, e.media, "qualitychange", (t) => {
                ze.updateSetting.call(e, "quality", null, t.detail.quality);
              }),
              be.call(e, e.media, "ready qualitychange", () => {
                ze.setDownloadUrl.call(e);
              });
            const i = e.config.events.concat(["keyup", "keydown"]).join(" ");
            be.call(e, e.media, i, (i) => {
              let { detail: s = {} } = i;
              "error" === i.type && (s = e.media.error),
                we.call(e, t.container, i.type, !0, s);
            });
          }),
          t(this, "proxy", (e, t, i) => {
            const { player: s } = this,
              n = s.config.listeners[i];
            let a = !0;
            R(n) && (a = n.call(s, e)), !1 !== a && R(t) && t.call(s, e);
          }),
          t(this, "bind", (e, t, i, s, n = !0) => {
            const { player: a } = this,
              r = a.config.listeners[s],
              o = R(r);
            be.call(a, e, t, (e) => this.proxy(e, i, s), n && !o);
          }),
          t(this, "controls", () => {
            const { player: e } = this,
              { elements: t } = e,
              i = Q.isIE ? "change" : "input";
            if (
              (t.buttons.play &&
                Array.from(t.buttons.play).forEach((t) => {
                  this.bind(
                    t,
                    "click",
                    () => {
                      Ce(e.togglePlay());
                    },
                    "play"
                  );
                }),
              this.bind(t.buttons.restart, "click", e.restart, "restart"),
              this.bind(
                t.buttons.rewind,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.rewind();
                },
                "rewind"
              ),
              this.bind(
                t.buttons.fastForward,
                "click",
                () => {
                  (e.lastSeekTime = Date.now()), e.forward();
                },
                "fastForward"
              ),
              this.bind(
                t.buttons.mute,
                "click",
                () => {
                  e.muted = !e.muted;
                },
                "mute"
              ),
              this.bind(t.buttons.captions, "click", () => e.toggleCaptions()),
              this.bind(
                t.buttons.download,
                "click",
                () => {
                  we.call(e, e.media, "download");
                },
                "download"
              ),
              this.bind(
                t.buttons.fullscreen,
                "click",
                () => {
                  e.fullscreen.toggle();
                },
                "fullscreen"
              ),
              this.bind(
                t.buttons.pip,
                "click",
                () => {
                  e.pip = "toggle";
                },
                "pip"
              ),
              this.bind(t.buttons.airplay, "click", e.airplay, "airplay"),
              this.bind(
                t.buttons.settings,
                "click",
                (t) => {
                  t.stopPropagation(),
                    t.preventDefault(),
                    ze.toggleMenu.call(e, t);
                },
                null,
                !1
              ),
              this.bind(
                t.buttons.settings,
                "keyup",
                (t) => {
                  ["Space", "Enter"].includes(t.key) &&
                    ("Enter" !== t.key
                      ? (t.preventDefault(),
                        t.stopPropagation(),
                        ze.toggleMenu.call(e, t))
                      : ze.focusFirstMenuItem.call(e, null, !0));
                },
                null,
                !1
              ),
              this.bind(t.settings.menu, "keydown", (t) => {
                "Escape" === t.key && ze.toggleMenu.call(e, t);
              }),
              this.bind(t.inputs.seek, "mousedown mousemove", (e) => {
                const i = t.progress.getBoundingClientRect(),
                  s = (100 / i.width) * (e.pageX - i.left);
                e.currentTarget.setAttribute("seek-value", s);
              }),
              this.bind(
                t.inputs.seek,
                "mousedown mouseup keydown keyup touchstart touchend",
                (t) => {
                  const i = t.currentTarget,
                    s = "play-on-seeked";
                  if (V(t) && !["ArrowLeft", "ArrowRight"].includes(t.key))
                    return;
                  e.lastSeekTime = Date.now();
                  const n = i.hasAttribute(s),
                    a = ["mouseup", "touchend", "keyup"].includes(t.type);
                  n && a
                    ? (i.removeAttribute(s), Ce(e.play()))
                    : !a && e.playing && (i.setAttribute(s, ""), e.pause());
                }
              ),
              Q.isIos)
            ) {
              const t = he.call(e, 'input[type="range"]');
              Array.from(t).forEach((e) => this.bind(e, i, (e) => Y(e.target)));
            }
            this.bind(
              t.inputs.seek,
              i,
              (t) => {
                const i = t.currentTarget;
                let s = i.getAttribute("seek-value");
                z(s) && (s = i.value),
                  i.removeAttribute("seek-value"),
                  (e.currentTime = (s / i.max) * e.duration);
              },
              "seek"
            ),
              this.bind(t.progress, "mouseenter mouseleave mousemove", (t) =>
                ze.updateSeekTooltip.call(e, t)
              ),
              this.bind(t.progress, "mousemove touchmove", (t) => {
                const { previewThumbnails: i } = e;
                i && i.loaded && i.startMove(t);
              }),
              this.bind(t.progress, "mouseleave touchend click", () => {
                const { previewThumbnails: t } = e;
                t && t.loaded && t.endMove(!1, !0);
              }),
              this.bind(t.progress, "mousedown touchstart", (t) => {
                const { previewThumbnails: i } = e;
                i && i.loaded && i.startScrubbing(t);
              }),
              this.bind(t.progress, "mouseup touchend", (t) => {
                const { previewThumbnails: i } = e;
                i && i.loaded && i.endScrubbing(t);
              }),
              Q.isWebkit &&
                Array.from(he.call(e, 'input[type="range"]')).forEach((t) => {
                  this.bind(t, "input", (t) =>
                    ze.updateRangeFill.call(e, t.target)
                  );
                }),
              e.config.toggleInvert &&
                !H(t.display.duration) &&
                this.bind(t.display.currentTime, "click", () => {
                  0 !== e.currentTime &&
                    ((e.config.invertTime = !e.config.invertTime),
                    ze.timeUpdate.call(e));
                }),
              this.bind(
                t.inputs.volume,
                i,
                (t) => {
                  e.volume = t.target.value;
                },
                "volume"
              ),
              this.bind(t.controls, "mouseenter mouseleave", (i) => {
                t.controls.hover = !e.touch && "mouseenter" === i.type;
              }),
              t.fullscreen &&
                Array.from(t.fullscreen.children)
                  .filter((e) => !e.contains(t.container))
                  .forEach((i) => {
                    this.bind(i, "mouseenter mouseleave", (i) => {
                      t.controls &&
                        (t.controls.hover =
                          !e.touch && "mouseenter" === i.type);
                    });
                  }),
              this.bind(
                t.controls,
                "mousedown mouseup touchstart touchend touchcancel",
                (e) => {
                  t.controls.pressed = ["mousedown", "touchstart"].includes(
                    e.type
                  );
                }
              ),
              this.bind(t.controls, "focusin", () => {
                const { config: i, timers: s } = e;
                oe(t.controls, i.classNames.noTransition, !0),
                  rt.toggleControls.call(e, !0),
                  setTimeout(() => {
                    oe(t.controls, i.classNames.noTransition, !1);
                  }, 0);
                const n = this.touch ? 3e3 : 4e3;
                clearTimeout(s.controls),
                  (s.controls = setTimeout(
                    () => rt.toggleControls.call(e, !1),
                    n
                  ));
              }),
              this.bind(
                t.inputs.volume,
                "wheel",
                (t) => {
                  const i = t.webkitDirectionInvertedFromDevice,
                    [s, n] = [t.deltaX, -t.deltaY].map((e) => (i ? -e : e)),
                    a = Math.sign(Math.abs(s) > Math.abs(n) ? s : n);
                  e.increaseVolume(a / 50);
                  const { volume: r } = e.media;
                  ((1 === a && r < 1) || (-1 === a && r > 0)) &&
                    t.preventDefault();
                },
                "volume",
                !1
              );
          }),
          (this.player = e),
          (this.lastKey = null),
          (this.focusTimer = null),
          (this.lastKeyDown = null),
          (this.handleKey = this.handleKey.bind(this)),
          (this.toggleMenu = this.toggleMenu.bind(this)),
          (this.setTabFocus = this.setTabFocus.bind(this)),
          (this.firstTouch = this.firstTouch.bind(this));
      }
      handleKey(e) {
        const { player: t } = this,
          { elements: i } = t,
          {
            key: s,
            type: n,
            altKey: a,
            ctrlKey: r,
            metaKey: o,
            shiftKey: l,
          } = e,
          c = "keydown" === n,
          h = c && s === this.lastKey;
        if (a || r || o || l) return;
        if (!s) return;
        if (c) {
          const n = document.activeElement;
          if (H(n)) {
            const { editable: s } = t.config.selectors,
              { seek: a } = i.inputs;
            if (n !== a && ce(n, s)) return;
            if ("Space" === e.key && ce(n, 'button, [role^="menuitem"]'))
              return;
          }
          switch (
            ([
              "Space",
              "ArrowLeft",
              "ArrowUp",
              "ArrowRight",
              "ArrowDown",
              "0",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "c",
              "f",
              "k",
              "l",
              "m",
            ].includes(s) && (e.preventDefault(), e.stopPropagation()),
            s)
          ) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
              h ||
                ((u = parseInt(s, 10)),
                (t.currentTime = (t.duration / 10) * u));
              break;
            case "Space":
            case "k":
              h || Ce(t.togglePlay());
              break;
            case "ArrowUp":
              t.increaseVolume(0.1);
              break;
            case "ArrowDown":
              t.decreaseVolume(0.1);
              break;
            case "m":
              h || (t.muted = !t.muted);
              break;
            case "ArrowRight":
              t.forward();
              break;
            case "ArrowLeft":
              t.rewind();
              break;
            case "f":
              t.fullscreen.toggle();
              break;
            case "c":
              h || t.toggleCaptions();
              break;
            case "l":
              t.loop = !t.loop;
          }
          "Escape" === s &&
            !t.fullscreen.usingNative &&
            t.fullscreen.active &&
            t.fullscreen.toggle(),
            (this.lastKey = s);
        } else this.lastKey = null;
        var u;
      }
      toggleMenu(e) {
        ze.toggleMenu.call(this.player, e);
      }
    }
    var lt = (function (e, t) {
      return e((t = { exports: {} }), t.exports), t.exports;
    })(function (e, t) {
      e.exports = (function () {
        var e = function () {},
          t = {},
          i = {},
          s = {};
        function n(e, t) {
          e = e.push ? e : [e];
          var n,
            a,
            r,
            o = [],
            l = e.length,
            c = l;
          for (
            n = function (e, i) {
              i.length && o.push(e), --c || t(o);
            };
            l--;

          )
            (a = e[l]), (r = i[a]) ? n(a, r) : (s[a] = s[a] || []).push(n);
        }
        function a(e, t) {
          if (e) {
            var n = s[e];
            if (((i[e] = t), n)) for (; n.length; ) n[0](e, t), n.splice(0, 1);
          }
        }
        function r(t, i) {
          t.call && (t = { success: t }),
            i.length ? (t.error || e)(i) : (t.success || e)(t);
        }
        function o(t, i, s, n) {
          var a,
            r,
            l = document,
            c = s.async,
            h = (s.numRetries || 0) + 1,
            u = s.before || e,
            d = t.replace(/[\?|#].*$/, ""),
            p = t.replace(/^(css|img)!/, "");
          (n = n || 0),
            /(^css!|\.css$)/.test(d)
              ? (((r = l.createElement("link")).rel = "stylesheet"),
                (r.href = p),
                (a = "hideFocus" in r) &&
                  r.relList &&
                  ((a = 0), (r.rel = "preload"), (r.as = "style")))
              : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)
              ? ((r = l.createElement("img")).src = p)
              : (((r = l.createElement("script")).src = t),
                (r.async = void 0 === c || c)),
            (r.onload =
              r.onerror =
              r.onbeforeload =
                function (e) {
                  var l = e.type[0];
                  if (a)
                    try {
                      r.sheet.cssText.length || (l = "e");
                    } catch (e) {
                      18 != e.code && (l = "e");
                    }
                  if ("e" == l) {
                    if ((n += 1) < h) return o(t, i, s, n);
                  } else if ("preload" == r.rel && "style" == r.as)
                    return (r.rel = "stylesheet");
                  i(t, l, e.defaultPrevented);
                }),
            !1 !== u(t, r) && l.head.appendChild(r);
        }
        function l(e, t, i) {
          var s,
            n,
            a = (e = e.push ? e : [e]).length,
            r = a,
            l = [];
          for (
            s = function (e, i, s) {
              if (("e" == i && l.push(e), "b" == i)) {
                if (!s) return;
                l.push(e);
              }
              --a || t(l);
            },
              n = 0;
            n < r;
            n++
          )
            o(e[n], s, i);
        }
        function c(e, i, s) {
          var n, o;
          if ((i && i.trim && (n = i), (o = (n ? s : i) || {}), n)) {
            if (n in t) throw "LoadJS";
            t[n] = !0;
          }
          function c(t, i) {
            l(
              e,
              function (e) {
                r(o, e), t && r({ success: t, error: i }, e), a(n, e);
              },
              o
            );
          }
          if (o.returnPromise) return new Promise(c);
          c();
        }
        return (
          (c.ready = function (e, t) {
            return (
              n(e, function (e) {
                r(t, e);
              }),
              c
            );
          }),
          (c.done = function (e) {
            a(e, []);
          }),
          (c.reset = function () {
            (t = {}), (i = {}), (s = {});
          }),
          (c.isDefined = function (e) {
            return e in t;
          }),
          c
        );
      })();
    });
    function ct(e) {
      return new Promise((t, i) => {
        lt(e, { success: t, error: i });
      });
    }
    function ht(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          we.call(this, this.media, e ? "play" : "pause"));
    }
    const ut = {
      setup() {
        const e = this;
        oe(e.elements.wrapper, e.config.classNames.embed, !0),
          (e.options.speed = e.config.speed.options),
          Le.call(e),
          I(window.Vimeo)
            ? ut.ready.call(e)
            : ct(e.config.urls.vimeo.sdk)
                .then(() => {
                  ut.ready.call(e);
                })
                .catch((t) => {
                  e.debug.warn("Vimeo SDK (player.js) failed to load", t);
                });
      },
      ready() {
        const e = this,
          t = e.config.vimeo,
          { premium: i, referrerPolicy: s, ...n } = t;
        let a = e.media.getAttribute("src"),
          r = "";
        z(a)
          ? ((a = e.media.getAttribute(e.config.attributes.embed.id)),
            (r = e.media.getAttribute(e.config.attributes.embed.hash)))
          : (r = (function (e) {
              const t = e.match(
                /^.*(vimeo.com\/|video\/)(\d+)(\?.*&*h=|\/)+([\d,a-f]+)/
              );
              return t && 5 === t.length ? t[4] : null;
            })(a));
        const o = r ? { h: r } : {};
        i && Object.assign(n, { controls: !1, sidedock: !1 });
        const l = Ye({
            loop: e.config.loop.active,
            autoplay: e.autoplay,
            muted: e.muted,
            gesture: "media",
            playsinline: !this.config.fullscreen.iosNative,
            ...o,
            ...n,
          }),
          c = z((h = a))
            ? null
            : $(Number(h))
            ? h
            : h.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
            ? RegExp.$2
            : h;
        var h;
        const u = ee("iframe"),
          d = $e(e.config.urls.vimeo.iframe, c, l);
        if (
          (u.setAttribute("src", d),
          u.setAttribute("allowfullscreen", ""),
          u.setAttribute(
            "allow",
            [
              "autoplay",
              "fullscreen",
              "picture-in-picture",
              "encrypted-media",
              "accelerometer",
              "gyroscope",
            ].join("; ")
          ),
          z(s) || u.setAttribute("referrerPolicy", s),
          i || !t.customControls)
        )
          u.setAttribute("data-poster", e.poster), (e.media = ne(u, e.media));
        else {
          const t = ee("div", {
            class: e.config.classNames.embedContainer,
            "data-poster": e.poster,
          });
          t.appendChild(u), (e.media = ne(t, e.media));
        }
        t.customControls ||
          Ve($e(e.config.urls.vimeo.api, d)).then((t) => {
            !z(t) &&
              t.thumbnail_url &&
              rt.setPoster.call(e, t.thumbnail_url).catch(() => {});
          }),
          (e.embed = new window.Vimeo.Player(u, {
            autopause: e.config.autopause,
            muted: e.muted,
          })),
          (e.media.paused = !0),
          (e.media.currentTime = 0),
          e.supported.ui && e.embed.disableTextTrack(),
          (e.media.play = () => (ht.call(e, !0), e.embed.play())),
          (e.media.pause = () => (ht.call(e, !1), e.embed.pause())),
          (e.media.stop = () => {
            e.pause(), (e.currentTime = 0);
          });
        let { currentTime: p } = e.media;
        Object.defineProperty(e.media, "currentTime", {
          get: () => p,
          set(t) {
            const { embed: i, media: s, paused: n, volume: a } = e,
              r = n && !i.hasPlayed;
            (s.seeking = !0),
              we.call(e, s, "seeking"),
              Promise.resolve(r && i.setVolume(0))
                .then(() => i.setCurrentTime(t))
                .then(() => r && i.pause())
                .then(() => r && i.setVolume(a))
                .catch(() => {});
          },
        });
        let m = e.config.speed.selected;
        Object.defineProperty(e.media, "playbackRate", {
          get: () => m,
          set(t) {
            e.embed
              .setPlaybackRate(t)
              .then(() => {
                (m = t), we.call(e, e.media, "ratechange");
              })
              .catch(() => {
                e.options.speed = [1];
              });
          },
        });
        let { volume: g } = e.config;
        Object.defineProperty(e.media, "volume", {
          get: () => g,
          set(t) {
            e.embed.setVolume(t).then(() => {
              (g = t), we.call(e, e.media, "volumechange");
            });
          },
        });
        let { muted: f } = e.config;
        Object.defineProperty(e.media, "muted", {
          get: () => f,
          set(t) {
            const i = !!j(t) && t;
            e.embed.setVolume(i ? 0 : e.config.volume).then(() => {
              (f = i), we.call(e, e.media, "volumechange");
            });
          },
        });
        let b,
          { loop: y } = e.config;
        Object.defineProperty(e.media, "loop", {
          get: () => y,
          set(t) {
            const i = j(t) ? t : e.config.loop.active;
            e.embed.setLoop(i).then(() => {
              y = i;
            });
          },
        }),
          e.embed
            .getVideoUrl()
            .then((t) => {
              (b = t), ze.setDownloadUrl.call(e);
            })
            .catch((e) => {
              this.debug.warn(e);
            }),
          Object.defineProperty(e.media, "currentSrc", { get: () => b }),
          Object.defineProperty(e.media, "ended", {
            get: () => e.currentTime === e.duration,
          }),
          Promise.all([e.embed.getVideoWidth(), e.embed.getVideoHeight()]).then(
            (t) => {
              const [i, s] = t;
              (e.embed.ratio = _e(i, s)), Le.call(this);
            }
          ),
          e.embed.setAutopause(e.config.autopause).then((t) => {
            e.config.autopause = t;
          }),
          e.embed.getVideoTitle().then((t) => {
            (e.config.title = t), rt.setTitle.call(this);
          }),
          e.embed.getCurrentTime().then((t) => {
            (p = t), we.call(e, e.media, "timeupdate");
          }),
          e.embed.getDuration().then((t) => {
            (e.media.duration = t), we.call(e, e.media, "durationchange");
          }),
          e.embed.getTextTracks().then((t) => {
            (e.media.textTracks = t), Qe.setup.call(e);
          }),
          e.embed.on("cuechange", ({ cues: t = [] }) => {
            const i = t.map((e) =>
              (function (e) {
                const t = document.createDocumentFragment(),
                  i = document.createElement("div");
                return (
                  t.appendChild(i), (i.innerHTML = e), t.firstChild.innerText
                );
              })(e.text)
            );
            Qe.updateCues.call(e, i);
          }),
          e.embed.on("loaded", () => {
            if (
              (e.embed.getPaused().then((t) => {
                ht.call(e, !t), t || we.call(e, e.media, "playing");
              }),
              H(e.embed.element) && e.supported.ui)
            ) {
              e.embed.element.setAttribute("tabindex", -1);
            }
          }),
          e.embed.on("bufferstart", () => {
            we.call(e, e.media, "waiting");
          }),
          e.embed.on("bufferend", () => {
            we.call(e, e.media, "playing");
          }),
          e.embed.on("play", () => {
            ht.call(e, !0), we.call(e, e.media, "playing");
          }),
          e.embed.on("pause", () => {
            ht.call(e, !1);
          }),
          e.embed.on("timeupdate", (t) => {
            (e.media.seeking = !1),
              (p = t.seconds),
              we.call(e, e.media, "timeupdate");
          }),
          e.embed.on("progress", (t) => {
            (e.media.buffered = t.percent),
              we.call(e, e.media, "progress"),
              1 === parseInt(t.percent, 10) &&
                we.call(e, e.media, "canplaythrough"),
              e.embed.getDuration().then((t) => {
                t !== e.media.duration &&
                  ((e.media.duration = t),
                  we.call(e, e.media, "durationchange"));
              });
          }),
          e.embed.on("seeked", () => {
            (e.media.seeking = !1), we.call(e, e.media, "seeked");
          }),
          e.embed.on("ended", () => {
            (e.media.paused = !0), we.call(e, e.media, "ended");
          }),
          e.embed.on("error", (t) => {
            (e.media.error = t), we.call(e, e.media, "error");
          }),
          t.customControls && setTimeout(() => rt.build.call(e), 0);
      },
    };
    function dt(e) {
      e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
        this.media.paused === e &&
          ((this.media.paused = !e),
          we.call(this, this.media, e ? "play" : "pause"));
    }
    function pt(e) {
      return e.noCookie
        ? "https://www.youtube-nocookie.com"
        : "http:" === window.location.protocol
        ? "http://www.youtube.com"
        : void 0;
    }
    const mt = {
        setup() {
          if (
            (oe(this.elements.wrapper, this.config.classNames.embed, !0),
            I(window.YT) && R(window.YT.Player))
          )
            mt.ready.call(this);
          else {
            const e = window.onYouTubeIframeAPIReady;
            (window.onYouTubeIframeAPIReady = () => {
              R(e) && e(), mt.ready.call(this);
            }),
              ct(this.config.urls.youtube.sdk).catch((e) => {
                this.debug.warn("YouTube API failed to load", e);
              });
          }
        },
        getTitle(e) {
          Ve($e(this.config.urls.youtube.api, e))
            .then((e) => {
              if (I(e)) {
                const { title: t, height: i, width: s } = e;
                (this.config.title = t),
                  rt.setTitle.call(this),
                  (this.embed.ratio = _e(s, i));
              }
              Le.call(this);
            })
            .catch(() => {
              Le.call(this);
            });
        },
        ready() {
          const e = this,
            t = e.config.youtube,
            i = e.media && e.media.getAttribute("id");
          if (!z(i) && i.startsWith("youtube-")) return;
          let s = e.media.getAttribute("src");
          z(s) && (s = e.media.getAttribute(this.config.attributes.embed.id));
          const n = z((a = s))
            ? null
            : a.match(
                /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
              )
            ? RegExp.$2
            : a;
          var a;
          const r = ee("div", {
            id: `${e.provider}-${Math.floor(1e4 * Math.random())}`,
            "data-poster": t.customControls ? e.poster : void 0,
          });
          if (((e.media = ne(r, e.media)), t.customControls)) {
            const t = (e) => `https://i.ytimg.com/vi/${n}/${e}default.jpg`;
            at(t("maxres"), 121)
              .catch(() => at(t("sd"), 121))
              .catch(() => at(t("hq")))
              .then((t) => rt.setPoster.call(e, t.src))
              .then((t) => {
                t.includes("maxres") ||
                  (e.elements.poster.style.backgroundSize = "cover");
              })
              .catch(() => {});
          }
          e.embed = new window.YT.Player(e.media, {
            videoId: n,
            host: pt(t),
            playerVars: J(
              {},
              {
                autoplay: e.config.autoplay ? 1 : 0,
                hl: e.config.hl,
                controls: e.supported.ui && t.customControls ? 0 : 1,
                disablekb: 1,
                playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                cc_load_policy: e.captions.active ? 1 : 0,
                cc_lang_pref: e.config.captions.language,
                widget_referrer: window ? window.location.href : null,
              },
              t
            ),
            events: {
              onError(t) {
                if (!e.media.error) {
                  const i = t.data,
                    s =
                      {
                        2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                        5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                        100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                        101: "The owner of the requested video does not allow it to be played in embedded players.",
                        150: "The owner of the requested video does not allow it to be played in embedded players.",
                      }[i] || "An unknown error occured";
                  (e.media.error = { code: i, message: s }),
                    we.call(e, e.media, "error");
                }
              },
              onPlaybackRateChange(t) {
                const i = t.target;
                (e.media.playbackRate = i.getPlaybackRate()),
                  we.call(e, e.media, "ratechange");
              },
              onReady(i) {
                if (R(e.media.play)) return;
                const s = i.target;
                mt.getTitle.call(e, n),
                  (e.media.play = () => {
                    dt.call(e, !0), s.playVideo();
                  }),
                  (e.media.pause = () => {
                    dt.call(e, !1), s.pauseVideo();
                  }),
                  (e.media.stop = () => {
                    s.stopVideo();
                  }),
                  (e.media.duration = s.getDuration()),
                  (e.media.paused = !0),
                  (e.media.currentTime = 0),
                  Object.defineProperty(e.media, "currentTime", {
                    get: () => Number(s.getCurrentTime()),
                    set(t) {
                      e.paused && !e.embed.hasPlayed && e.embed.mute(),
                        (e.media.seeking = !0),
                        we.call(e, e.media, "seeking"),
                        s.seekTo(t);
                    },
                  }),
                  Object.defineProperty(e.media, "playbackRate", {
                    get: () => s.getPlaybackRate(),
                    set(e) {
                      s.setPlaybackRate(e);
                    },
                  });
                let { volume: a } = e.config;
                Object.defineProperty(e.media, "volume", {
                  get: () => a,
                  set(t) {
                    (a = t),
                      s.setVolume(100 * a),
                      we.call(e, e.media, "volumechange");
                  },
                });
                let { muted: r } = e.config;
                Object.defineProperty(e.media, "muted", {
                  get: () => r,
                  set(t) {
                    const i = j(t) ? t : r;
                    (r = i),
                      s[i ? "mute" : "unMute"](),
                      s.setVolume(100 * a),
                      we.call(e, e.media, "volumechange");
                  },
                }),
                  Object.defineProperty(e.media, "currentSrc", {
                    get: () => s.getVideoUrl(),
                  }),
                  Object.defineProperty(e.media, "ended", {
                    get: () => e.currentTime === e.duration,
                  });
                const o = s.getAvailablePlaybackRates();
                (e.options.speed = o.filter((t) =>
                  e.config.speed.options.includes(t)
                )),
                  e.supported.ui &&
                    t.customControls &&
                    e.media.setAttribute("tabindex", -1),
                  we.call(e, e.media, "timeupdate"),
                  we.call(e, e.media, "durationchange"),
                  clearInterval(e.timers.buffering),
                  (e.timers.buffering = setInterval(() => {
                    (e.media.buffered = s.getVideoLoadedFraction()),
                      (null === e.media.lastBuffered ||
                        e.media.lastBuffered < e.media.buffered) &&
                        we.call(e, e.media, "progress"),
                      (e.media.lastBuffered = e.media.buffered),
                      1 === e.media.buffered &&
                        (clearInterval(e.timers.buffering),
                        we.call(e, e.media, "canplaythrough"));
                  }, 200)),
                  t.customControls && setTimeout(() => rt.build.call(e), 50);
              },
              onStateChange(i) {
                const s = i.target;
                clearInterval(e.timers.playing);
                switch (
                  (e.media.seeking &&
                    [1, 2].includes(i.data) &&
                    ((e.media.seeking = !1), we.call(e, e.media, "seeked")),
                  i.data)
                ) {
                  case -1:
                    we.call(e, e.media, "timeupdate"),
                      (e.media.buffered = s.getVideoLoadedFraction()),
                      we.call(e, e.media, "progress");
                    break;
                  case 0:
                    dt.call(e, !1),
                      e.media.loop
                        ? (s.stopVideo(), s.playVideo())
                        : we.call(e, e.media, "ended");
                    break;
                  case 1:
                    t.customControls &&
                    !e.config.autoplay &&
                    e.media.paused &&
                    !e.embed.hasPlayed
                      ? e.media.pause()
                      : (dt.call(e, !0),
                        we.call(e, e.media, "playing"),
                        (e.timers.playing = setInterval(() => {
                          we.call(e, e.media, "timeupdate");
                        }, 50)),
                        e.media.duration !== s.getDuration() &&
                          ((e.media.duration = s.getDuration()),
                          we.call(e, e.media, "durationchange")));
                    break;
                  case 2:
                    e.muted || e.embed.unMute(), dt.call(e, !1);
                    break;
                  case 3:
                    we.call(e, e.media, "waiting");
                }
                we.call(e, e.elements.container, "statechange", !1, {
                  code: i.data,
                });
              },
            },
          });
        },
      },
      gt = {
        setup() {
          this.media
            ? (oe(
                this.elements.container,
                this.config.classNames.type.replace("{0}", this.type),
                !0
              ),
              oe(
                this.elements.container,
                this.config.classNames.provider.replace("{0}", this.provider),
                !0
              ),
              this.isEmbed &&
                oe(
                  this.elements.container,
                  this.config.classNames.type.replace("{0}", "video"),
                  !0
                ),
              this.isVideo &&
                ((this.elements.wrapper = ee("div", {
                  class: this.config.classNames.video,
                })),
                G(this.media, this.elements.wrapper),
                (this.elements.poster = ee("div", {
                  class: this.config.classNames.poster,
                })),
                this.elements.wrapper.appendChild(this.elements.poster)),
              this.isHTML5
                ? Ie.setup.call(this)
                : this.isYouTube
                ? mt.setup.call(this)
                : this.isVimeo && ut.setup.call(this))
            : this.debug.warn("No media element found!");
        },
      };
    class ft {
      constructor(e) {
        t(this, "load", () => {
          this.enabled &&
            (I(window.google) && I(window.google.ima)
              ? this.ready()
              : ct(this.player.config.urls.googleIMA.sdk)
                  .then(() => {
                    this.ready();
                  })
                  .catch(() => {
                    this.trigger(
                      "error",
                      new Error("Google IMA SDK failed to load")
                    );
                  }));
        }),
          t(this, "ready", () => {
            var e;
            this.enabled ||
              ((e = this).manager && e.manager.destroy(),
              e.elements.displayContainer &&
                e.elements.displayContainer.destroy(),
              e.elements.container.remove()),
              this.startSafetyTimer(12e3, "ready()"),
              this.managerPromise.then(() => {
                this.clearSafetyTimer("onAdsManagerLoaded()");
              }),
              this.listeners(),
              this.setupIMA();
          }),
          t(this, "setupIMA", () => {
            (this.elements.container = ee("div", {
              class: this.player.config.classNames.ads,
            })),
              this.player.elements.container.appendChild(
                this.elements.container
              ),
              google.ima.settings.setVpaidMode(
                google.ima.ImaSdkSettings.VpaidMode.ENABLED
              ),
              google.ima.settings.setLocale(this.player.config.ads.language),
              google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                this.player.config.playsinline
              ),
              (this.elements.displayContainer =
                new google.ima.AdDisplayContainer(
                  this.elements.container,
                  this.player.media
                )),
              (this.loader = new google.ima.AdsLoader(
                this.elements.displayContainer
              )),
              this.loader.addEventListener(
                google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
                (e) => this.onAdsManagerLoaded(e),
                !1
              ),
              this.loader.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e),
                !1
              ),
              this.requestAds();
          }),
          t(this, "requestAds", () => {
            const { container: e } = this.player.elements;
            try {
              const t = new google.ima.AdsRequest();
              (t.adTagUrl = this.tagUrl),
                (t.linearAdSlotWidth = e.offsetWidth),
                (t.linearAdSlotHeight = e.offsetHeight),
                (t.nonLinearAdSlotWidth = e.offsetWidth),
                (t.nonLinearAdSlotHeight = e.offsetHeight),
                (t.forceNonLinearFullSlot = !1),
                t.setAdWillPlayMuted(!this.player.muted),
                this.loader.requestAds(t);
            } catch (e) {
              this.onAdError(e);
            }
          }),
          t(this, "pollCountdown", (e = !1) => {
            if (!e)
              return (
                clearInterval(this.countdownTimer),
                void this.elements.container.removeAttribute("data-badge-text")
              );
            this.countdownTimer = setInterval(() => {
              const e = We(Math.max(this.manager.getRemainingTime(), 0)),
                t = `${He.get("advertisement", this.player.config)} - ${e}`;
              this.elements.container.setAttribute("data-badge-text", t);
            }, 100);
          }),
          t(this, "onAdsManagerLoaded", (e) => {
            if (!this.enabled) return;
            const t = new google.ima.AdsRenderingSettings();
            (t.restoreCustomPlaybackStateOnAdBreakComplete = !0),
              (t.enablePreloading = !0),
              (this.manager = e.getAdsManager(this.player, t)),
              (this.cuePoints = this.manager.getCuePoints()),
              this.manager.addEventListener(
                google.ima.AdErrorEvent.Type.AD_ERROR,
                (e) => this.onAdError(e)
              ),
              Object.keys(google.ima.AdEvent.Type).forEach((e) => {
                this.manager.addEventListener(google.ima.AdEvent.Type[e], (e) =>
                  this.onAdEvent(e)
                );
              }),
              this.trigger("loaded");
          }),
          t(this, "addCuePoints", () => {
            z(this.cuePoints) ||
              this.cuePoints.forEach((e) => {
                if (0 !== e && -1 !== e && e < this.player.duration) {
                  const t = this.player.elements.progress;
                  if (H(t)) {
                    const i = (100 / this.player.duration) * e,
                      s = ee("span", {
                        class: this.player.config.classNames.cues,
                      });
                    (s.style.left = `${i.toString()}%`), t.appendChild(s);
                  }
                }
              });
          }),
          t(this, "onAdEvent", (e) => {
            const { container: t } = this.player.elements,
              i = e.getAd(),
              s = e.getAdData();
            switch (
              (((e) => {
                we.call(
                  this.player,
                  this.player.media,
                  `ads${e.replace(/_/g, "").toLowerCase()}`
                );
              })(e.type),
              e.type)
            ) {
              case google.ima.AdEvent.Type.LOADED:
                this.trigger("loaded"),
                  this.pollCountdown(!0),
                  i.isLinear() ||
                    ((i.width = t.offsetWidth), (i.height = t.offsetHeight));
                break;
              case google.ima.AdEvent.Type.STARTED:
                this.manager.setVolume(this.player.volume);
                break;
              case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                this.player.ended
                  ? this.loadAds()
                  : this.loader.contentComplete();
                break;
              case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                this.pauseContent();
                break;
              case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                this.pollCountdown(), this.resumeContent();
                break;
              case google.ima.AdEvent.Type.LOG:
                s.adError &&
                  this.player.debug.warn(
                    `Non-fatal ad error: ${s.adError.getMessage()}`
                  );
            }
          }),
          t(this, "onAdError", (e) => {
            this.cancel(), this.player.debug.warn("Ads error", e);
          }),
          t(this, "listeners", () => {
            const { container: e } = this.player.elements;
            let t;
            this.player.on("canplay", () => {
              this.addCuePoints();
            }),
              this.player.on("ended", () => {
                this.loader.contentComplete();
              }),
              this.player.on("timeupdate", () => {
                t = this.player.currentTime;
              }),
              this.player.on("seeked", () => {
                const e = this.player.currentTime;
                z(this.cuePoints) ||
                  this.cuePoints.forEach((i, s) => {
                    t < i &&
                      i < e &&
                      (this.manager.discardAdBreak(),
                      this.cuePoints.splice(s, 1));
                  });
              }),
              window.addEventListener("resize", () => {
                this.manager &&
                  this.manager.resize(
                    e.offsetWidth,
                    e.offsetHeight,
                    google.ima.ViewMode.NORMAL
                  );
              });
          }),
          t(this, "play", () => {
            const { container: e } = this.player.elements;
            this.managerPromise || this.resumeContent(),
              this.managerPromise
                .then(() => {
                  this.manager.setVolume(this.player.volume),
                    this.elements.displayContainer.initialize();
                  try {
                    this.initialized ||
                      (this.manager.init(
                        e.offsetWidth,
                        e.offsetHeight,
                        google.ima.ViewMode.NORMAL
                      ),
                      this.manager.start()),
                      (this.initialized = !0);
                  } catch (e) {
                    this.onAdError(e);
                  }
                })
                .catch(() => {});
          }),
          t(this, "resumeContent", () => {
            (this.elements.container.style.zIndex = ""),
              (this.playing = !1),
              Ce(this.player.media.play());
          }),
          t(this, "pauseContent", () => {
            (this.elements.container.style.zIndex = 3),
              (this.playing = !0),
              this.player.media.pause();
          }),
          t(this, "cancel", () => {
            this.initialized && this.resumeContent(),
              this.trigger("error"),
              this.loadAds();
          }),
          t(this, "loadAds", () => {
            this.managerPromise
              .then(() => {
                this.manager && this.manager.destroy(),
                  (this.managerPromise = new Promise((e) => {
                    this.on("loaded", e), this.player.debug.log(this.manager);
                  })),
                  (this.initialized = !1),
                  this.requestAds();
              })
              .catch(() => {});
          }),
          t(this, "trigger", (e, ...t) => {
            const i = this.events[e];
            D(i) &&
              i.forEach((e) => {
                R(e) && e.apply(this, t);
              });
          }),
          t(
            this,
            "on",
            (e, t) => (
              D(this.events[e]) || (this.events[e] = []),
              this.events[e].push(t),
              this
            )
          ),
          t(this, "startSafetyTimer", (e, t) => {
            this.player.debug.log(`Safety timer invoked from: ${t}`),
              (this.safetyTimer = setTimeout(() => {
                this.cancel(), this.clearSafetyTimer("startSafetyTimer()");
              }, e));
          }),
          t(this, "clearSafetyTimer", (e) => {
            _(this.safetyTimer) ||
              (this.player.debug.log(`Safety timer cleared from: ${e}`),
              clearTimeout(this.safetyTimer),
              (this.safetyTimer = null));
          }),
          (this.player = e),
          (this.config = e.config.ads),
          (this.playing = !1),
          (this.initialized = !1),
          (this.elements = { container: null, displayContainer: null }),
          (this.manager = null),
          (this.loader = null),
          (this.cuePoints = null),
          (this.events = {}),
          (this.safetyTimer = null),
          (this.countdownTimer = null),
          (this.managerPromise = new Promise((e, t) => {
            this.on("loaded", e), this.on("error", t);
          })),
          this.load();
      }
      get enabled() {
        const { config: e } = this;
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          e.enabled &&
          (!z(e.publisherId) || W(e.tagUrl))
        );
      }
      get tagUrl() {
        const { config: e } = this;
        if (W(e.tagUrl)) return e.tagUrl;
        return `https://go.aniview.com/api/adserver6/vast/?${Ye({
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: e.publisherId,
        })}`;
      }
    }
    function bt(e = 0, t = 0, i = 255) {
      return Math.min(Math.max(e, t), i);
    }
    const yt = (e) => {
        const t = [];
        return (
          e.split(/\r\n\r\n|\n\n|\r\r/).forEach((e) => {
            const i = {};
            e.split(/\r\n|\n|\r/).forEach((e) => {
              if ($(i.startTime)) {
                if (!z(e.trim()) && z(i.text)) {
                  const t = e.trim().split("#xywh=");
                  ([i.text] = t),
                    t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","));
                }
              } else {
                const t = e.match(
                  /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                );
                t &&
                  ((i.startTime =
                    60 * Number(t[1] || 0) * 60 +
                    60 * Number(t[2]) +
                    Number(t[3]) +
                    Number(`0.${t[4]}`)),
                  (i.endTime =
                    60 * Number(t[6] || 0) * 60 +
                    60 * Number(t[7]) +
                    Number(t[8]) +
                    Number(`0.${t[9]}`)));
              }
            }),
              i.text && t.push(i);
          }),
          t
        );
      },
      vt = (e, t) => {
        const i = {};
        return (
          e > t.width / t.height
            ? ((i.width = t.width), (i.height = (1 / e) * t.width))
            : ((i.height = t.height), (i.width = e * t.height)),
          i
        );
      };
    class wt {
      constructor(e) {
        t(this, "load", () => {
          this.player.elements.display.seekTooltip &&
            (this.player.elements.display.seekTooltip.hidden = this.enabled),
            this.enabled &&
              this.getThumbnails().then(() => {
                this.enabled &&
                  (this.render(),
                  this.determineContainerAutoSizing(),
                  (this.loaded = !0));
              });
        }),
          t(
            this,
            "getThumbnails",
            () =>
              new Promise((e) => {
                const { src: t } = this.player.config.previewThumbnails;
                if (z(t))
                  throw new Error(
                    "Missing previewThumbnails.src config attribute"
                  );
                const i = () => {
                  this.thumbnails.sort((e, t) => e.height - t.height),
                    this.player.debug.log(
                      "Preview thumbnails",
                      this.thumbnails
                    ),
                    e();
                };
                if (R(t))
                  t((e) => {
                    (this.thumbnails = e), i();
                  });
                else {
                  const e = (O(t) ? [t] : t).map((e) => this.getThumbnail(e));
                  Promise.all(e).then(i);
                }
              })
          ),
          t(
            this,
            "getThumbnail",
            (e) =>
              new Promise((t) => {
                Ve(e).then((i) => {
                  const s = { frames: yt(i), height: null, urlPrefix: "" };
                  s.frames[0].text.startsWith("/") ||
                    s.frames[0].text.startsWith("http://") ||
                    s.frames[0].text.startsWith("https://") ||
                    (s.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                  const n = new Image();
                  (n.onload = () => {
                    (s.height = n.naturalHeight),
                      (s.width = n.naturalWidth),
                      this.thumbnails.push(s),
                      t();
                  }),
                    (n.src = s.urlPrefix + s.frames[0].text);
                });
              })
          ),
          t(this, "startMove", (e) => {
            if (
              this.loaded &&
              F(e) &&
              ["touchmove", "mousemove"].includes(e.type) &&
              this.player.media.duration
            ) {
              if ("touchmove" === e.type)
                this.seekTime =
                  this.player.media.duration *
                  (this.player.elements.inputs.seek.value / 100);
              else {
                var t, i;
                const s = this.player.elements.progress.getBoundingClientRect(),
                  n = (100 / s.width) * (e.pageX - s.left);
                (this.seekTime = this.player.media.duration * (n / 100)),
                  this.seekTime < 0 && (this.seekTime = 0),
                  this.seekTime > this.player.media.duration - 1 &&
                    (this.seekTime = this.player.media.duration - 1),
                  (this.mousePosX = e.pageX),
                  (this.elements.thumb.time.innerText = We(this.seekTime));
                const a =
                  null === (t = this.player.config.markers) ||
                  void 0 === t ||
                  null === (i = t.points) ||
                  void 0 === i
                    ? void 0
                    : i.find(({ time: e }) => e === Math.round(this.seekTime));
                a &&
                  this.elements.thumb.time.insertAdjacentHTML(
                    "afterbegin",
                    `${a.label}<br>`
                  );
              }
              this.showImageAtCurrentTime();
            }
          }),
          t(this, "endMove", () => {
            this.toggleThumbContainer(!1, !0);
          }),
          t(this, "startScrubbing", (e) => {
            (_(e.button) || !1 === e.button || 0 === e.button) &&
              ((this.mouseDown = !0),
              this.player.media.duration &&
                (this.toggleScrubbingContainer(!0),
                this.toggleThumbContainer(!1, !0),
                this.showImageAtCurrentTime()));
          }),
          t(this, "endScrubbing", () => {
            (this.mouseDown = !1),
              Math.ceil(this.lastTime) ===
              Math.ceil(this.player.media.currentTime)
                ? this.toggleScrubbingContainer(!1)
                : ve.call(this.player, this.player.media, "timeupdate", () => {
                    this.mouseDown || this.toggleScrubbingContainer(!1);
                  });
          }),
          t(this, "listeners", () => {
            this.player.on("play", () => {
              this.toggleThumbContainer(!1, !0);
            }),
              this.player.on("seeked", () => {
                this.toggleThumbContainer(!1);
              }),
              this.player.on("timeupdate", () => {
                this.lastTime = this.player.media.currentTime;
              });
          }),
          t(this, "render", () => {
            (this.elements.thumb.container = ee("div", {
              class:
                this.player.config.classNames.previewThumbnails.thumbContainer,
            })),
              (this.elements.thumb.imageContainer = ee("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .imageContainer,
              })),
              this.elements.thumb.container.appendChild(
                this.elements.thumb.imageContainer
              );
            const e = ee("div", {
              class:
                this.player.config.classNames.previewThumbnails.timeContainer,
            });
            (this.elements.thumb.time = ee("span", {}, "00:00")),
              e.appendChild(this.elements.thumb.time),
              this.elements.thumb.imageContainer.appendChild(e),
              H(this.player.elements.progress) &&
                this.player.elements.progress.appendChild(
                  this.elements.thumb.container
                ),
              (this.elements.scrubbing.container = ee("div", {
                class:
                  this.player.config.classNames.previewThumbnails
                    .scrubbingContainer,
              })),
              this.player.elements.wrapper.appendChild(
                this.elements.scrubbing.container
              );
          }),
          t(this, "destroy", () => {
            this.elements.thumb.container &&
              this.elements.thumb.container.remove(),
              this.elements.scrubbing.container &&
                this.elements.scrubbing.container.remove();
          }),
          t(this, "showImageAtCurrentTime", () => {
            this.mouseDown
              ? this.setScrubbingContainerSize()
              : this.setThumbContainerSizeAndPos();
            const e = this.thumbnails[0].frames.findIndex(
                (e) =>
                  this.seekTime >= e.startTime && this.seekTime <= e.endTime
              ),
              t = e >= 0;
            let i = 0;
            this.mouseDown || this.toggleThumbContainer(t),
              t &&
                (this.thumbnails.forEach((t, s) => {
                  this.loadedImages.includes(t.frames[e].text) && (i = s);
                }),
                e !== this.showingThumb &&
                  ((this.showingThumb = e), this.loadImage(i)));
          }),
          t(this, "loadImage", (e = 0) => {
            const t = this.showingThumb,
              i = this.thumbnails[e],
              { urlPrefix: s } = i,
              n = i.frames[t],
              a = i.frames[t].text,
              r = s + a;
            if (
              this.currentImageElement &&
              this.currentImageElement.dataset.filename === a
            )
              this.showImage(this.currentImageElement, n, e, t, a, !1),
                (this.currentImageElement.dataset.index = t),
                this.removeOldImages(this.currentImageElement);
            else {
              this.loadingImage &&
                this.usingSprites &&
                (this.loadingImage.onload = null);
              const i = new Image();
              (i.src = r),
                (i.dataset.index = t),
                (i.dataset.filename = a),
                (this.showingThumbFilename = a),
                this.player.debug.log(`Loading image: ${r}`),
                (i.onload = () => this.showImage(i, n, e, t, a, !0)),
                (this.loadingImage = i),
                this.removeOldImages(i);
            }
          }),
          t(this, "showImage", (e, t, i, s, n, a = !0) => {
            this.player.debug.log(
              `Showing thumb: ${n}. num: ${s}. qual: ${i}. newimg: ${a}`
            ),
              this.setImageSizeAndOffset(e, t),
              a &&
                (this.currentImageContainer.appendChild(e),
                (this.currentImageElement = e),
                this.loadedImages.includes(n) || this.loadedImages.push(n)),
              this.preloadNearby(s, !0)
                .then(this.preloadNearby(s, !1))
                .then(this.getHigherQuality(i, e, t, n));
          }),
          t(this, "removeOldImages", (e) => {
            Array.from(this.currentImageContainer.children).forEach((t) => {
              if ("img" !== t.tagName.toLowerCase()) return;
              const i = this.usingSprites ? 500 : 1e3;
              if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                t.dataset.deleting = !0;
                const { currentImageContainer: e } = this;
                setTimeout(() => {
                  e.removeChild(t),
                    this.player.debug.log(
                      `Removing thumb: ${t.dataset.filename}`
                    );
                }, i);
              }
            });
          }),
          t(
            this,
            "preloadNearby",
            (e, t = !0) =>
              new Promise((i) => {
                setTimeout(() => {
                  const s = this.thumbnails[0].frames[e].text;
                  if (this.showingThumbFilename === s) {
                    let n;
                    n = t
                      ? this.thumbnails[0].frames.slice(e)
                      : this.thumbnails[0].frames.slice(0, e).reverse();
                    let a = !1;
                    n.forEach((e) => {
                      const t = e.text;
                      if (t !== s && !this.loadedImages.includes(t)) {
                        (a = !0),
                          this.player.debug.log(
                            `Preloading thumb filename: ${t}`
                          );
                        const { urlPrefix: e } = this.thumbnails[0],
                          s = e + t,
                          n = new Image();
                        (n.src = s),
                          (n.onload = () => {
                            this.player.debug.log(
                              `Preloaded thumb filename: ${t}`
                            ),
                              this.loadedImages.includes(t) ||
                                this.loadedImages.push(t),
                              i();
                          });
                      }
                    }),
                      a || i();
                  }
                }, 300);
              })
          ),
          t(this, "getHigherQuality", (e, t, i, s) => {
            if (e < this.thumbnails.length - 1) {
              let n = t.naturalHeight;
              this.usingSprites && (n = i.h),
                n < this.thumbContainerHeight &&
                  setTimeout(() => {
                    this.showingThumbFilename === s &&
                      (this.player.debug.log(
                        `Showing higher quality thumb for: ${s}`
                      ),
                      this.loadImage(e + 1));
                  }, 300);
            }
          }),
          t(this, "toggleThumbContainer", (e = !1, t = !1) => {
            const i =
              this.player.config.classNames.previewThumbnails
                .thumbContainerShown;
            this.elements.thumb.container.classList.toggle(i, e),
              !e &&
                t &&
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          t(this, "toggleScrubbingContainer", (e = !1) => {
            const t =
              this.player.config.classNames.previewThumbnails
                .scrubbingContainerShown;
            this.elements.scrubbing.container.classList.toggle(t, e),
              e ||
                ((this.showingThumb = null),
                (this.showingThumbFilename = null));
          }),
          t(this, "determineContainerAutoSizing", () => {
            (this.elements.thumb.imageContainer.clientHeight > 20 ||
              this.elements.thumb.imageContainer.clientWidth > 20) &&
              (this.sizeSpecifiedInCSS = !0);
          }),
          t(this, "setThumbContainerSizeAndPos", () => {
            const { imageContainer: e } = this.elements.thumb;
            if (this.sizeSpecifiedInCSS) {
              if (e.clientHeight > 20 && e.clientWidth < 20) {
                const t = Math.floor(e.clientHeight * this.thumbAspectRatio);
                e.style.width = `${t}px`;
              } else if (e.clientHeight < 20 && e.clientWidth > 20) {
                const t = Math.floor(e.clientWidth / this.thumbAspectRatio);
                e.style.height = `${t}px`;
              }
            } else {
              const t = Math.floor(
                this.thumbContainerHeight * this.thumbAspectRatio
              );
              (e.style.height = `${this.thumbContainerHeight}px`),
                (e.style.width = `${t}px`);
            }
            this.setThumbContainerPos();
          }),
          t(this, "setThumbContainerPos", () => {
            const e = this.player.elements.progress.getBoundingClientRect(),
              t = this.player.elements.container.getBoundingClientRect(),
              { container: i } = this.elements.thumb,
              s = t.left - e.left + 10,
              n = t.right - e.left - i.clientWidth - 10,
              a = this.mousePosX - e.left - i.clientWidth / 2,
              r = bt(a, s, n);
            (i.style.left = `${r}px`),
              i.style.setProperty("--preview-arrow-offset", a - r + "px");
          }),
          t(this, "setScrubbingContainerSize", () => {
            const { width: e, height: t } = vt(this.thumbAspectRatio, {
              width: this.player.media.clientWidth,
              height: this.player.media.clientHeight,
            });
            (this.elements.scrubbing.container.style.width = `${e}px`),
              (this.elements.scrubbing.container.style.height = `${t}px`);
          }),
          t(this, "setImageSizeAndOffset", (e, t) => {
            if (!this.usingSprites) return;
            const i = this.thumbContainerHeight / t.h;
            (e.style.height = e.naturalHeight * i + "px"),
              (e.style.width = e.naturalWidth * i + "px"),
              (e.style.left = `-${t.x * i}px`),
              (e.style.top = `-${t.y * i}px`);
          }),
          (this.player = e),
          (this.thumbnails = []),
          (this.loaded = !1),
          (this.lastMouseMoveTime = Date.now()),
          (this.mouseDown = !1),
          (this.loadedImages = []),
          (this.elements = { thumb: {}, scrubbing: {} }),
          this.load();
      }
      get enabled() {
        return (
          this.player.isHTML5 &&
          this.player.isVideo &&
          this.player.config.previewThumbnails.enabled
        );
      }
      get currentImageContainer() {
        return this.mouseDown
          ? this.elements.scrubbing.container
          : this.elements.thumb.imageContainer;
      }
      get usingSprites() {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
      }
      get thumbAspectRatio() {
        return this.usingSprites
          ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h
          : this.thumbnails[0].width / this.thumbnails[0].height;
      }
      get thumbContainerHeight() {
        if (this.mouseDown) {
          const { height: e } = vt(this.thumbAspectRatio, {
            width: this.player.media.clientWidth,
            height: this.player.media.clientHeight,
          });
          return e;
        }
        return this.sizeSpecifiedInCSS
          ? this.elements.thumb.imageContainer.clientHeight
          : Math.floor(
              this.player.media.clientWidth / this.thumbAspectRatio / 4
            );
      }
      get currentImageElement() {
        return this.mouseDown
          ? this.currentScrubbingImageElement
          : this.currentThumbnailImageElement;
      }
      set currentImageElement(e) {
        this.mouseDown
          ? (this.currentScrubbingImageElement = e)
          : (this.currentThumbnailImageElement = e);
      }
    }
    const Tt = {
      insertElements(e, t) {
        O(t)
          ? te(e, this.media, { src: t })
          : D(t) &&
            t.forEach((t) => {
              te(e, this.media, t);
            });
      },
      change(e) {
        X(e, "sources.length")
          ? (Ie.cancelRequests.call(this),
            this.destroy.call(
              this,
              () => {
                (this.options.quality = []),
                  ie(this.media),
                  (this.media = null),
                  H(this.elements.container) &&
                    this.elements.container.removeAttribute("class");
                const { sources: t, type: i } = e,
                  [{ provider: s = Ze.html5, src: n }] = t,
                  a = "html5" === s ? i : "div",
                  r = "html5" === s ? {} : { src: n };
                Object.assign(this, {
                  provider: s,
                  type: i,
                  supported: me.check(i, s, this.config.playsinline),
                  media: ee(a, r),
                }),
                  this.elements.container.appendChild(this.media),
                  j(e.autoplay) && (this.config.autoplay = e.autoplay),
                  this.isHTML5 &&
                    (this.config.crossorigin &&
                      this.media.setAttribute("crossorigin", ""),
                    this.config.autoplay &&
                      this.media.setAttribute("autoplay", ""),
                    z(e.poster) || (this.poster = e.poster),
                    this.config.loop.active &&
                      this.media.setAttribute("loop", ""),
                    this.config.muted && this.media.setAttribute("muted", ""),
                    this.config.playsinline &&
                      this.media.setAttribute("playsinline", "")),
                  rt.addStyleHook.call(this),
                  this.isHTML5 && Tt.insertElements.call(this, "source", t),
                  (this.config.title = e.title),
                  gt.setup.call(this),
                  this.isHTML5 &&
                    Object.keys(e).includes("tracks") &&
                    Tt.insertElements.call(this, "track", e.tracks),
                  (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                    rt.build.call(this),
                  this.isHTML5 && this.media.load(),
                  z(e.previewThumbnails) ||
                    (Object.assign(
                      this.config.previewThumbnails,
                      e.previewThumbnails
                    ),
                    this.previewThumbnails &&
                      this.previewThumbnails.loaded &&
                      (this.previewThumbnails.destroy(),
                      (this.previewThumbnails = null)),
                    this.config.previewThumbnails.enabled &&
                      (this.previewThumbnails = new wt(this))),
                  this.fullscreen.update();
              },
              !0
            ))
          : this.debug.warn("Invalid source format");
      },
    };
    class kt {
      constructor(e, i) {
        if (
          (t(this, "play", () =>
            R(this.media.play)
              ? (this.ads &&
                  this.ads.enabled &&
                  this.ads.managerPromise
                    .then(() => this.ads.play())
                    .catch(() => Ce(this.media.play())),
                this.media.play())
              : null
          ),
          t(this, "pause", () =>
            this.playing && R(this.media.pause) ? this.media.pause() : null
          ),
          t(this, "togglePlay", (e) =>
            (j(e) ? e : !this.playing) ? this.play() : this.pause()
          ),
          t(this, "stop", () => {
            this.isHTML5
              ? (this.pause(), this.restart())
              : R(this.media.stop) && this.media.stop();
          }),
          t(this, "restart", () => {
            this.currentTime = 0;
          }),
          t(this, "rewind", (e) => {
            this.currentTime -= $(e) ? e : this.config.seekTime;
          }),
          t(this, "forward", (e) => {
            this.currentTime += $(e) ? e : this.config.seekTime;
          }),
          t(this, "increaseVolume", (e) => {
            const t = this.media.muted ? 0 : this.volume;
            this.volume = t + ($(e) ? e : 0);
          }),
          t(this, "decreaseVolume", (e) => {
            this.increaseVolume(-e);
          }),
          t(this, "airplay", () => {
            me.airplay && this.media.webkitShowPlaybackTargetPicker();
          }),
          t(this, "toggleControls", (e) => {
            if (this.supported.ui && !this.isAudio) {
              const t = le(
                  this.elements.container,
                  this.config.classNames.hideControls
                ),
                i = void 0 === e ? void 0 : !e,
                s = oe(
                  this.elements.container,
                  this.config.classNames.hideControls,
                  i
                );
              if (
                (s &&
                  D(this.config.controls) &&
                  this.config.controls.includes("settings") &&
                  !z(this.config.settings) &&
                  ze.toggleMenu.call(this, !1),
                s !== t)
              ) {
                const e = s ? "controlshidden" : "controlsshown";
                we.call(this, this.media, e);
              }
              return !s;
            }
            return !1;
          }),
          t(this, "on", (e, t) => {
            be.call(this, this.elements.container, e, t);
          }),
          t(this, "once", (e, t) => {
            ve.call(this, this.elements.container, e, t);
          }),
          t(this, "off", (e, t) => {
            ye(this.elements.container, e, t);
          }),
          t(this, "destroy", (e, t = !1) => {
            if (!this.ready) return;
            const i = () => {
              (document.body.style.overflow = ""),
                (this.embed = null),
                t
                  ? (Object.keys(this.elements).length &&
                      (ie(this.elements.buttons.play),
                      ie(this.elements.captions),
                      ie(this.elements.controls),
                      ie(this.elements.wrapper),
                      (this.elements.buttons.play = null),
                      (this.elements.captions = null),
                      (this.elements.controls = null),
                      (this.elements.wrapper = null)),
                    R(e) && e())
                  : (Te.call(this),
                    Ie.cancelRequests.call(this),
                    ne(this.elements.original, this.elements.container),
                    we.call(this, this.elements.original, "destroyed", !0),
                    R(e) && e.call(this.elements.original),
                    (this.ready = !1),
                    setTimeout(() => {
                      (this.elements = null), (this.media = null);
                    }, 200));
            };
            this.stop(),
              clearTimeout(this.timers.loading),
              clearTimeout(this.timers.controls),
              clearTimeout(this.timers.resized),
              this.isHTML5
                ? (rt.toggleNativeControls.call(this, !0), i())
                : this.isYouTube
                ? (clearInterval(this.timers.buffering),
                  clearInterval(this.timers.playing),
                  null !== this.embed &&
                    R(this.embed.destroy) &&
                    this.embed.destroy(),
                  i())
                : this.isVimeo &&
                  (null !== this.embed && this.embed.unload().then(i),
                  setTimeout(i, 200));
          }),
          t(this, "supports", (e) => me.mime.call(this, e)),
          (this.timers = {}),
          (this.ready = !1),
          (this.loading = !1),
          (this.failed = !1),
          (this.touch = me.touch),
          (this.media = e),
          O(this.media) && (this.media = document.querySelectorAll(this.media)),
          ((window.jQuery && this.media instanceof jQuery) ||
            q(this.media) ||
            D(this.media)) &&
            (this.media = this.media[0]),
          (this.config = J(
            {},
            Xe,
            kt.defaults,
            i || {},
            (() => {
              try {
                return JSON.parse(this.media.getAttribute("data-plyr-config"));
              } catch (e) {
                return {};
              }
            })()
          )),
          (this.elements = {
            container: null,
            fullscreen: null,
            captions: null,
            buttons: {},
            display: {},
            progress: {},
            inputs: {},
            settings: { popup: null, menu: null, panels: {}, buttons: {} },
          }),
          (this.captions = {
            active: null,
            currentTrack: -1,
            meta: new WeakMap(),
          }),
          (this.fullscreen = { active: !1 }),
          (this.options = { speed: [], quality: [] }),
          (this.debug = new st(this.config.debug)),
          this.debug.log("Config", this.config),
          this.debug.log("Support", me),
          _(this.media) || !H(this.media))
        )
          return void this.debug.error(
            "Setup failed: no suitable element passed"
          );
        if (this.media.plyr)
          return void this.debug.warn("Target already setup");
        if (!this.config.enabled)
          return void this.debug.error("Setup failed: disabled by config");
        if (!me.check().api)
          return void this.debug.error("Setup failed: no support");
        const s = this.media.cloneNode(!0);
        (s.autoplay = !1), (this.elements.original = s);
        const n = this.media.tagName.toLowerCase();
        let a = null,
          r = null;
        switch (n) {
          case "div":
            if (((a = this.media.querySelector("iframe")), H(a))) {
              if (
                ((r = Ke(a.getAttribute("src"))),
                (this.provider = (function (e) {
                  return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                    e
                  )
                    ? Ze.youtube
                    : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                        e
                      )
                    ? Ze.vimeo
                    : null;
                })(r.toString())),
                (this.elements.container = this.media),
                (this.media = a),
                (this.elements.container.className = ""),
                r.search.length)
              ) {
                const e = ["1", "true"];
                e.includes(r.searchParams.get("autoplay")) &&
                  (this.config.autoplay = !0),
                  e.includes(r.searchParams.get("loop")) &&
                    (this.config.loop.active = !0),
                  this.isYouTube
                    ? ((this.config.playsinline = e.includes(
                        r.searchParams.get("playsinline")
                      )),
                      (this.config.youtube.hl = r.searchParams.get("hl")))
                    : (this.config.playsinline = !0);
              }
            } else (this.provider = this.media.getAttribute(this.config.attributes.embed.provider)), this.media.removeAttribute(this.config.attributes.embed.provider);
            if (z(this.provider) || !Object.values(Ze).includes(this.provider))
              return void this.debug.error("Setup failed: Invalid provider");
            this.type = tt;
            break;
          case "video":
          case "audio":
            (this.type = n),
              (this.provider = Ze.html5),
              this.media.hasAttribute("crossorigin") &&
                (this.config.crossorigin = !0),
              this.media.hasAttribute("autoplay") &&
                (this.config.autoplay = !0),
              (this.media.hasAttribute("playsinline") ||
                this.media.hasAttribute("webkit-playsinline")) &&
                (this.config.playsinline = !0),
              this.media.hasAttribute("muted") && (this.config.muted = !0),
              this.media.hasAttribute("loop") && (this.config.loop.active = !0);
            break;
          default:
            return void this.debug.error("Setup failed: unsupported type");
        }
        (this.supported = me.check(
          this.type,
          this.provider,
          this.config.playsinline
        )),
          this.supported.api
            ? ((this.eventListeners = []),
              (this.listeners = new ot(this)),
              (this.storage = new Fe(this)),
              (this.media.plyr = this),
              H(this.elements.container) ||
                ((this.elements.container = ee("div", { tabindex: 0 })),
                G(this.media, this.elements.container)),
              rt.migrateStyles.call(this),
              rt.addStyleHook.call(this),
              gt.setup.call(this),
              this.config.debug &&
                be.call(
                  this,
                  this.elements.container,
                  this.config.events.join(" "),
                  (e) => {
                    this.debug.log(`event: ${e.type}`);
                  }
                ),
              (this.fullscreen = new nt(this)),
              (this.isHTML5 || (this.isEmbed && !this.supported.ui)) &&
                rt.build.call(this),
              this.listeners.container(),
              this.listeners.global(),
              this.config.ads.enabled && (this.ads = new ft(this)),
              this.isHTML5 &&
                this.config.autoplay &&
                this.once("canplay", () => Ce(this.play())),
              (this.lastSeekTime = 0),
              this.config.previewThumbnails.enabled &&
                (this.previewThumbnails = new wt(this)))
            : this.debug.error("Setup failed: no support");
      }
      get isHTML5() {
        return this.provider === Ze.html5;
      }
      get isEmbed() {
        return this.isYouTube || this.isVimeo;
      }
      get isYouTube() {
        return this.provider === Ze.youtube;
      }
      get isVimeo() {
        return this.provider === Ze.vimeo;
      }
      get isVideo() {
        return this.type === tt;
      }
      get isAudio() {
        return this.type === et;
      }
      get playing() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
      get paused() {
        return Boolean(this.media.paused);
      }
      get stopped() {
        return Boolean(this.paused && 0 === this.currentTime);
      }
      get ended() {
        return Boolean(this.media.ended);
      }
      set currentTime(e) {
        if (!this.duration) return;
        const t = $(e) && e > 0;
        (this.media.currentTime = t ? Math.min(e, this.duration) : 0),
          this.debug.log(`Seeking to ${this.currentTime} seconds`);
      }
      get currentTime() {
        return Number(this.media.currentTime);
      }
      get buffered() {
        const { buffered: e } = this.media;
        return $(e)
          ? e
          : e && e.length && this.duration > 0
          ? e.end(0) / this.duration
          : 0;
      }
      get seeking() {
        return Boolean(this.media.seeking);
      }
      get duration() {
        const e = parseFloat(this.config.duration),
          t = (this.media || {}).duration,
          i = $(t) && t !== 1 / 0 ? t : 0;
        return e || i;
      }
      set volume(e) {
        let t = e;
        O(t) && (t = Number(t)),
          $(t) || (t = this.storage.get("volume")),
          $(t) || ({ volume: t } = this.config),
          t > 1 && (t = 1),
          t < 0 && (t = 0),
          (this.config.volume = t),
          (this.media.volume = t),
          !z(e) && this.muted && t > 0 && (this.muted = !1);
      }
      get volume() {
        return Number(this.media.volume);
      }
      set muted(e) {
        let t = e;
        j(t) || (t = this.storage.get("muted")),
          j(t) || (t = this.config.muted),
          (this.config.muted = t),
          (this.media.muted = t);
      }
      get muted() {
        return Boolean(this.media.muted);
      }
      get hasAudio() {
        return (
          !this.isHTML5 ||
          !!this.isAudio ||
          Boolean(this.media.mozHasAudio) ||
          Boolean(this.media.webkitAudioDecodedByteCount) ||
          Boolean(this.media.audioTracks && this.media.audioTracks.length)
        );
      }
      set speed(e) {
        let t = null;
        $(e) && (t = e),
          $(t) || (t = this.storage.get("speed")),
          $(t) || (t = this.config.speed.selected);
        const { minimumSpeed: i, maximumSpeed: s } = this;
        (t = bt(t, i, s)),
          (this.config.speed.selected = t),
          setTimeout(() => {
            this.media && (this.media.playbackRate = t);
          }, 0);
      }
      get speed() {
        return Number(this.media.playbackRate);
      }
      get minimumSpeed() {
        return this.isYouTube
          ? Math.min(...this.options.speed)
          : this.isVimeo
          ? 0.5
          : 0.0625;
      }
      get maximumSpeed() {
        return this.isYouTube
          ? Math.max(...this.options.speed)
          : this.isVimeo
          ? 2
          : 16;
      }
      set quality(e) {
        const t = this.config.quality,
          i = this.options.quality;
        if (!i.length) return;
        let s = [
            !z(e) && Number(e),
            this.storage.get("quality"),
            t.selected,
            t.default,
          ].find($),
          n = !0;
        if (!i.includes(s)) {
          const e = Se(i, s);
          this.debug.warn(
            `Unsupported quality option: ${s}, using ${e} instead`
          ),
            (s = e),
            (n = !1);
        }
        (t.selected = s),
          (this.media.quality = s),
          n && this.storage.set({ quality: s });
      }
      get quality() {
        return this.media.quality;
      }
      set loop(e) {
        const t = j(e) ? e : this.config.loop.active;
        (this.config.loop.active = t), (this.media.loop = t);
      }
      get loop() {
        return Boolean(this.media.loop);
      }
      set source(e) {
        Tt.change.call(this, e);
      }
      get source() {
        return this.media.currentSrc;
      }
      get download() {
        const { download: e } = this.config.urls;
        return W(e) ? e : this.source;
      }
      set download(e) {
        W(e) && ((this.config.urls.download = e), ze.setDownloadUrl.call(this));
      }
      set poster(e) {
        this.isVideo
          ? rt.setPoster.call(this, e, !1).catch(() => {})
          : this.debug.warn("Poster can only be set for video");
      }
      get poster() {
        return this.isVideo
          ? this.media.getAttribute("poster") ||
              this.media.getAttribute("data-poster")
          : null;
      }
      get ratio() {
        if (!this.isVideo) return null;
        const e = xe(Ne.call(this));
        return D(e) ? e.join(":") : e;
      }
      set ratio(e) {
        this.isVideo
          ? O(e) && Me(e)
            ? ((this.config.ratio = xe(e)), Le.call(this))
            : this.debug.error(`Invalid aspect ratio specified (${e})`)
          : this.debug.warn("Aspect ratio can only be set for video");
      }
      set autoplay(e) {
        this.config.autoplay = j(e) ? e : this.config.autoplay;
      }
      get autoplay() {
        return Boolean(this.config.autoplay);
      }
      toggleCaptions(e) {
        Qe.toggle.call(this, e, !1);
      }
      set currentTrack(e) {
        Qe.set.call(this, e, !1), Qe.setup.call(this);
      }
      get currentTrack() {
        const { toggled: e, currentTrack: t } = this.captions;
        return e ? t : -1;
      }
      set language(e) {
        Qe.setLanguage.call(this, e, !1);
      }
      get language() {
        return (Qe.getCurrentTrack.call(this) || {}).language;
      }
      set pip(e) {
        if (!me.pip) return;
        const t = j(e) ? e : !this.pip;
        R(this.media.webkitSetPresentationMode) &&
          this.media.webkitSetPresentationMode(t ? Je : Ge),
          R(this.media.requestPictureInPicture) &&
            (!this.pip && t
              ? this.media.requestPictureInPicture()
              : this.pip && !t && document.exitPictureInPicture());
      }
      get pip() {
        return me.pip
          ? z(this.media.webkitPresentationMode)
            ? this.media === document.pictureInPictureElement
            : this.media.webkitPresentationMode === Je
          : null;
      }
      setPreviewThumbnails(e) {
        this.previewThumbnails &&
          this.previewThumbnails.loaded &&
          (this.previewThumbnails.destroy(), (this.previewThumbnails = null)),
          Object.assign(this.config.previewThumbnails, e),
          this.config.previewThumbnails.enabled &&
            (this.previewThumbnails = new wt(this));
      }
      static supported(e, t, i) {
        return me.check(e, t, i);
      }
      static loadSprite(e, t) {
        return Ue(e, t);
      }
      static setup(e, t = {}) {
        let i = null;
        return (
          O(e)
            ? (i = Array.from(document.querySelectorAll(e)))
            : q(e)
            ? (i = Array.from(e))
            : D(e) && (i = e.filter(H)),
          z(i) ? null : i.map((e) => new kt(e, t))
        );
      }
    }
    var Ct;
    return (kt.defaults = ((Ct = Xe), JSON.parse(JSON.stringify(Ct)))), kt;
  });
