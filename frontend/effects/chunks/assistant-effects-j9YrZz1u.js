function Hp(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var rf = { exports: {} }, br = {};
var eh;
function Np() {
  if (eh) return br;
  eh = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function u(c, d, f) {
    var h = null;
    if (f !== void 0 && (h = "" + f), d.key !== void 0 && (h = "" + d.key), "key" in d) {
      f = {};
      for (var p in d)
        p !== "key" && (f[p] = d[p]);
    } else f = d;
    return d = f.ref, {
      $$typeof: r,
      type: c,
      key: h,
      ref: d !== void 0 ? d : null,
      props: f
    };
  }
  return br.Fragment = i, br.jsx = u, br.jsxs = u, br;
}
var ah;
function Yp() {
  return ah || (ah = 1, rf.exports = Np()), rf.exports;
}
var Tt = Yp(), uf = { exports: {} }, Ct = {};
var lh;
function _p() {
  if (lh) return Ct;
  lh = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), u = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), f = /* @__PURE__ */ Symbol.for("react.consumer"), h = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), z = /* @__PURE__ */ Symbol.for("react.memo"), y = /* @__PURE__ */ Symbol.for("react.lazy"), m = /* @__PURE__ */ Symbol.for("react.activity"), v = /* @__PURE__ */ Symbol.for("react.view_transition"), S = Symbol.iterator;
  function w(M) {
    return M === null || typeof M != "object" ? null : (M = S && M[S] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var X = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, $ = Object.assign, U = {};
  function G(M, B, ut) {
    this.props = M, this.context = B, this.refs = U, this.updater = ut || X;
  }
  G.prototype.isReactComponent = {}, G.prototype.setState = function(M, B) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, M, B, "setState");
  }, G.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = G.prototype;
  function j(M, B, ut) {
    this.props = M, this.context = B, this.refs = U, this.updater = ut || X;
  }
  var q = j.prototype = new Q();
  q.constructor = j, $(q, G.prototype), q.isPureReactComponent = !0;
  var W = Array.isArray;
  function _() {
  }
  var E = { H: null, A: null, T: null, S: null }, L = Object.prototype.hasOwnProperty;
  function k(M, B, ut) {
    var Y = ut.ref;
    return {
      $$typeof: r,
      type: M,
      key: B,
      ref: Y !== void 0 ? Y : null,
      props: ut
    };
  }
  function K(M, B) {
    return k(M.type, B, M.props);
  }
  function V(M) {
    return typeof M == "object" && M !== null && M.$$typeof === r;
  }
  function rt(M) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(ut) {
      return B[ut];
    });
  }
  var nt = /\/+/g;
  function it(M, B) {
    return typeof M == "object" && M !== null && M.key != null ? rt("" + M.key) : B.toString(36);
  }
  function R(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(_, _) : (M.status = "pending", M.then(
          function(B) {
            M.status === "pending" && (M.status = "fulfilled", M.value = B);
          },
          function(B) {
            M.status === "pending" && (M.status = "rejected", M.reason = B);
          }
        )), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function et(M, B, ut, Y, lt) {
    var st = typeof M;
    (st === "undefined" || st === "boolean") && (M = null);
    var tt = !1;
    if (M === null) tt = !0;
    else
      switch (st) {
        case "bigint":
        case "string":
        case "number":
          tt = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case r:
            case i:
              tt = !0;
              break;
            case y:
              return tt = M._init, et(
                tt(M._payload),
                B,
                ut,
                Y,
                lt
              );
          }
      }
    if (tt)
      return lt = lt(M), tt = Y === "" ? "." + it(M, 0) : Y, W(lt) ? (ut = "", tt != null && (ut = tt.replace(nt, "$&/") + "/"), et(lt, B, ut, "", function(ht) {
        return ht;
      })) : lt != null && (V(lt) && (lt = K(
        lt,
        ut + (lt.key == null || M && M.key === lt.key ? "" : ("" + lt.key).replace(
          nt,
          "$&/"
        ) + "/") + tt
      )), B.push(lt)), 1;
    tt = 0;
    var J = Y === "" ? "." : Y + ":";
    if (W(M))
      for (var at = 0; at < M.length; at++)
        Y = M[at], st = J + it(Y, at), tt += et(
          Y,
          B,
          ut,
          st,
          lt
        );
    else if (at = w(M), typeof at == "function")
      for (M = at.call(M), at = 0; !(Y = M.next()).done; )
        Y = Y.value, st = J + it(Y, at++), tt += et(
          Y,
          B,
          ut,
          st,
          lt
        );
    else if (st === "object") {
      if (typeof M.then == "function")
        return et(
          R(M),
          B,
          ut,
          Y,
          lt
        );
      throw B = String(M), Error(
        "Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return tt;
  }
  function Z(M, B, ut) {
    if (M == null) return M;
    var Y = [], lt = 0;
    return et(M, Y, "", "", function(st) {
      return B.call(ut, st, lt++);
    }), Y;
  }
  function ot(M) {
    if (M._status === -1) {
      var B = M._result, ut = B();
      ut.then(
        function(Y) {
          (M._status === 0 || M._status === -1) && (M._status = 1, M._result = Y, ut.status === void 0 && (ut.status = "fulfilled", ut.value = Y));
        },
        function(Y) {
          (M._status === 0 || M._status === -1) && (M._status = 2, M._result = Y, ut.status === void 0 && (ut.status = "rejected", ut.reason = Y));
        }
      ), M._status === -1 && (M._status = 0, M._result = ut);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var F = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var B = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
        error: M
      });
      if (!window.dispatchEvent(B)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  };
  function ct(M) {
    var B = E.T, ut = {};
    ut.types = B !== null ? B.types : null, E.T = ut;
    try {
      var Y = M(), lt = E.S;
      lt !== null && lt(ut, Y), typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(_, F);
    } catch (st) {
      F(st);
    } finally {
      B !== null && ut.types !== null && (B.types = ut.types), E.T = B;
    }
  }
  function ft(M) {
    var B = E.T;
    if (B !== null) {
      var ut = B.types;
      ut === null ? B.types = [M] : ut.indexOf(M) === -1 && ut.push(M);
    } else ct(ft.bind(null, M));
  }
  var bt = {
    map: Z,
    forEach: function(M, B, ut) {
      Z(
        M,
        function() {
          B.apply(this, arguments);
        },
        ut
      );
    },
    count: function(M) {
      var B = 0;
      return Z(M, function() {
        B++;
      }), B;
    },
    toArray: function(M) {
      return Z(M, function(B) {
        return B;
      }) || [];
    },
    only: function(M) {
      if (!V(M))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return M;
    }
  };
  return Ct.Activity = m, Ct.Children = bt, Ct.Component = G, Ct.Fragment = u, Ct.Profiler = d, Ct.PureComponent = j, Ct.StrictMode = c, Ct.Suspense = g, Ct.ViewTransition = v, Ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, Ct.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(M) {
      return E.H.useMemoCache(M);
    }
  }, Ct.addTransitionType = ft, Ct.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, Ct.cacheSignal = function() {
    return null;
  }, Ct.cloneElement = function(M, B, ut) {
    if (M == null)
      throw Error(
        "The argument must be a React element, but you passed " + M + "."
      );
    var Y = $({}, M.props), lt = M.key;
    if (B != null)
      for (st in B.key !== void 0 && (lt = "" + B.key), B)
        !L.call(B, st) || st === "key" || st === "__self" || st === "__source" || st === "ref" && B.ref === void 0 || (Y[st] = B[st]);
    var st = arguments.length - 2;
    if (st === 1) Y.children = ut;
    else if (1 < st) {
      for (var tt = Array(st), J = 0; J < st; J++)
        tt[J] = arguments[J + 2];
      Y.children = tt;
    }
    return k(M.type, lt, Y);
  }, Ct.createContext = function(M) {
    return M = {
      $$typeof: h,
      _currentValue: M,
      _currentValue2: M,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, M.Provider = M, M.Consumer = {
      $$typeof: f,
      _context: M
    }, M;
  }, Ct.createElement = function(M, B, ut) {
    var Y, lt = {}, st = null;
    if (B != null)
      for (Y in B.key !== void 0 && (st = "" + B.key), B)
        L.call(B, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (lt[Y] = B[Y]);
    var tt = arguments.length - 2;
    if (tt === 1) lt.children = ut;
    else if (1 < tt) {
      for (var J = Array(tt), at = 0; at < tt; at++)
        J[at] = arguments[at + 2];
      lt.children = J;
    }
    if (M && M.defaultProps)
      for (Y in tt = M.defaultProps, tt)
        lt[Y] === void 0 && (lt[Y] = tt[Y]);
    return k(M, st, lt);
  }, Ct.createRef = function() {
    return { current: null };
  }, Ct.forwardRef = function(M) {
    return { $$typeof: p, render: M };
  }, Ct.isValidElement = V, Ct.lazy = function(M) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: M },
      _init: ot
    };
  }, Ct.memo = function(M, B) {
    return {
      $$typeof: z,
      type: M,
      compare: B === void 0 ? null : B
    };
  }, Ct.startTransition = ct, Ct.unstable_useCacheRefresh = function() {
    return E.H.useCacheRefresh();
  }, Ct.use = function(M) {
    return E.H.use(M);
  }, Ct.useActionState = function(M, B, ut) {
    return E.H.useActionState(M, B, ut);
  }, Ct.useCallback = function(M, B) {
    return E.H.useCallback(M, B);
  }, Ct.useContext = function(M) {
    return E.H.useContext(M);
  }, Ct.useDebugValue = function() {
  }, Ct.useDeferredValue = function(M, B) {
    return E.H.useDeferredValue(M, B);
  }, Ct.useEffect = function(M, B) {
    return E.H.useEffect(M, B);
  }, Ct.useEffectEvent = function(M) {
    return E.H.useEffectEvent(M);
  }, Ct.useId = function() {
    return E.H.useId();
  }, Ct.useImperativeHandle = function(M, B, ut) {
    return E.H.useImperativeHandle(M, B, ut);
  }, Ct.useInsertionEffect = function(M, B) {
    return E.H.useInsertionEffect(M, B);
  }, Ct.useLayoutEffect = function(M, B) {
    return E.H.useLayoutEffect(M, B);
  }, Ct.useMemo = function(M, B) {
    return E.H.useMemo(M, B);
  }, Ct.useOptimistic = function(M, B) {
    return E.H.useOptimistic(M, B);
  }, Ct.useReducer = function(M, B, ut) {
    return E.H.useReducer(M, B, ut);
  }, Ct.useRef = function(M) {
    return E.H.useRef(M);
  }, Ct.useState = function(M) {
    return E.H.useState(M);
  }, Ct.useSyncExternalStore = function(M, B, ut) {
    return E.H.useSyncExternalStore(
      M,
      B,
      ut
    );
  }, Ct.useTransition = function() {
    return E.H.useTransition();
  }, Ct.version = "19.3.0", Ct;
}
var nh;
function Kf() {
  return nh || (nh = 1, uf.exports = _p()), uf.exports;
}
var gt = Kf();
const Jf = /* @__PURE__ */ Hp(gt), Yf = { current: null }, bb = { current: !1 }, Dp = typeof window < "u";
function Rp() {
  if (bb.current = !0, !!Dp)
    if (window.matchMedia) {
      const r = window.matchMedia("(prefers-reduced-motion)"), i = () => Yf.current = r.matches;
      r.addEventListener("change", i), i();
    } else
      Yf.current = !1;
}
function Xp() {
  !bb.current && Rp();
  const [r] = gt.useState(Yf.current);
  return r;
}
var cf = { exports: {} }, gr = {}, sf = { exports: {} }, ff = {};
var ih;
function Up() {
  return ih || (ih = 1, (function(r) {
    function i(R, et) {
      var Z = R.length;
      R.push(et);
      t: for (; 0 < Z; ) {
        var ot = Z - 1 >>> 1, F = R[ot];
        if (0 < d(F, et))
          R[ot] = et, R[Z] = F, Z = ot;
        else break t;
      }
    }
    function u(R) {
      return R.length === 0 ? null : R[0];
    }
    function c(R) {
      if (R.length === 0) return null;
      var et = R[0], Z = R.pop();
      if (Z !== et) {
        R[0] = Z;
        t: for (var ot = 0, F = R.length, ct = F >>> 1; ot < ct; ) {
          var ft = 2 * (ot + 1) - 1, bt = R[ft], M = ft + 1, B = R[M];
          if (0 > d(bt, Z))
            M < F && 0 > d(B, bt) ? (R[ot] = B, R[M] = Z, ot = M) : (R[ot] = bt, R[ft] = Z, ot = ft);
          else if (M < F && 0 > d(B, Z))
            R[ot] = B, R[M] = Z, ot = M;
          else break t;
        }
      }
      return et;
    }
    function d(R, et) {
      var Z = R.sortIndex - et.sortIndex;
      return Z !== 0 ? Z : R.id - et.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var f = performance;
      r.unstable_now = function() {
        return f.now();
      };
    } else {
      var h = Date, p = h.now();
      r.unstable_now = function() {
        return h.now() - p;
      };
    }
    var g = [], z = [], y = 1, m = null, v = 3, S = !1, w = !1, X = !1, $ = !1, U = typeof setTimeout == "function" ? setTimeout : null, G = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function j(R) {
      for (var et = u(z); et !== null; ) {
        if (et.callback === null) c(z);
        else if (et.startTime <= R)
          c(z), et.sortIndex = et.expirationTime, i(g, et);
        else break;
        et = u(z);
      }
    }
    function q(R) {
      if (X = !1, j(R), !w)
        if (u(g) !== null)
          w = !0, W || (W = !0, V());
        else {
          var et = u(z);
          et !== null && it(q, et.startTime - R);
        }
    }
    var W = !1, _ = -1, E = 5, L = -1;
    function k() {
      return $ ? !0 : !(r.unstable_now() - L < E);
    }
    function K() {
      if ($ = !1, W) {
        var R = r.unstable_now();
        L = R;
        var et = !0;
        try {
          t: {
            w = !1, X && (X = !1, G(_), _ = -1), S = !0;
            var Z = v;
            try {
              e: {
                for (j(R), m = u(g); m !== null && !(m.expirationTime > R && k()); ) {
                  var ot = m.callback;
                  if (typeof ot == "function") {
                    m.callback = null, v = m.priorityLevel;
                    var F = ot(
                      m.expirationTime <= R
                    );
                    if (R = r.unstable_now(), typeof F == "function") {
                      m.callback = F, j(R), et = !0;
                      break e;
                    }
                    m === u(g) && c(g), j(R);
                  } else c(g);
                  m = u(g);
                }
                if (m !== null) et = !0;
                else {
                  var ct = u(z);
                  ct !== null && it(
                    q,
                    ct.startTime - R
                  ), et = !1;
                }
              }
              break t;
            } finally {
              m = null, v = Z, S = !1;
            }
            et = void 0;
          }
        } finally {
          et ? V() : W = !1;
        }
      }
    }
    var V;
    if (typeof Q == "function")
      V = function() {
        Q(K);
      };
    else if (typeof MessageChannel < "u") {
      var rt = new MessageChannel(), nt = rt.port2;
      rt.port1.onmessage = K, V = function() {
        nt.postMessage(null);
      };
    } else
      V = function() {
        U(K, 0);
      };
    function it(R, et) {
      _ = U(function() {
        R(r.unstable_now());
      }, et);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(R) {
      R.callback = null;
    }, r.unstable_forceFrameRate = function(R) {
      0 > R || 125 < R ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : E = 0 < R ? Math.floor(1e3 / R) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return v;
    }, r.unstable_next = function(R) {
      switch (v) {
        case 1:
        case 2:
        case 3:
          var et = 3;
          break;
        default:
          et = v;
      }
      var Z = v;
      v = et;
      try {
        return R();
      } finally {
        v = Z;
      }
    }, r.unstable_requestPaint = function() {
      $ = !0;
    }, r.unstable_runWithPriority = function(R, et) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var Z = v;
      v = R;
      try {
        return et();
      } finally {
        v = Z;
      }
    }, r.unstable_scheduleCallback = function(R, et, Z) {
      var ot = r.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ot + Z : ot) : Z = ot, R) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = Z + F, R = {
        id: y++,
        callback: et,
        priorityLevel: R,
        startTime: Z,
        expirationTime: F,
        sortIndex: -1
      }, Z > ot ? (R.sortIndex = Z, i(z, R), u(g) === null && R === u(z) && (X ? (G(_), _ = -1) : X = !0, it(q, Z - ot))) : (R.sortIndex = F, i(g, R), w || S || (w = !0, W || (W = !0, V()))), R;
    }, r.unstable_shouldYield = k, r.unstable_wrapCallback = function(R) {
      var et = v;
      return function() {
        var Z = v;
        v = et;
        try {
          return R.apply(this, arguments);
        } finally {
          v = Z;
        }
      };
    };
  })(ff)), ff;
}
var oh;
function qp() {
  return oh || (oh = 1, sf.exports = Up()), sf.exports;
}
var df = { exports: {} }, qe = {};
var rh;
function Lp() {
  if (rh) return qe;
  rh = 1;
  var r = Kf();
  function i(y) {
    var m = "https://react.dev/errors/" + y;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        m += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + y + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u() {
  }
  var c = {
    d: {
      f: u,
      r: function() {
        throw Error(i(522));
      },
      D: u,
      C: u,
      L: u,
      m: u,
      X: u,
      S: u,
      M: u
    },
    p: 0,
    findDOMNode: null
  }, d = /* @__PURE__ */ Symbol.for("react.portal"), f = /* @__PURE__ */ Symbol.for("react.recoverable"), h = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function p(y, m, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: S == null ? null : S === h ? h : "" + S,
      children: y,
      containerInfo: m,
      implementation: v
    };
  }
  var g = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function z(y, m) {
    if (y === "font") return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : "";
  }
  return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, qe.browser = function(y) {
    return { $$typeof: f, _reason: y };
  }, qe.createPortal = function(y, m) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
      throw Error(i(299));
    return p(y, m, null, v);
  }, qe.flushSync = function(y) {
    var m = g.T, v = c.p;
    try {
      if (g.T = null, c.p = 2, y) return y();
    } finally {
      g.T = m, c.p = v, c.d.f();
    }
  }, qe.preconnect = function(y, m) {
    typeof y == "string" && (m ? (m = m.crossOrigin, m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null, c.d.C(y, m));
  }, qe.prefetchDNS = function(y) {
    typeof y == "string" && c.d.D(y);
  }, qe.preinit = function(y, m) {
    if (typeof y == "string" && m && typeof m.as == "string") {
      var v = m.as, S = z(v, m.crossOrigin), w = typeof m.integrity == "string" ? m.integrity : void 0, X = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
      v === "style" ? c.d.S(
        y,
        typeof m.precedence == "string" ? m.precedence : void 0,
        {
          crossOrigin: S,
          integrity: w,
          fetchPriority: X
        }
      ) : v === "script" && c.d.X(y, {
        crossOrigin: S,
        integrity: w,
        fetchPriority: X,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0
      });
    }
  }, qe.preinitModule = function(y, m) {
    if (typeof y == "string")
      if (typeof m == "object" && m !== null) {
        if (m.as == null || m.as === "script") {
          var v = z(
            m.as,
            m.crossOrigin
          );
          c.d.M(y, {
            crossOrigin: v,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
            nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
          });
        }
      } else m == null && c.d.M(y);
  }, qe.preload = function(y, m) {
    if (typeof y == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
      var v = m.as, S = z(v, m.crossOrigin);
      c.d.L(y, v, {
        crossOrigin: S,
        integrity: typeof m.integrity == "string" ? m.integrity : void 0,
        nonce: typeof m.nonce == "string" ? m.nonce : void 0,
        type: typeof m.type == "string" ? m.type : void 0,
        fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
        referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
        imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
        imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
        media: typeof m.media == "string" ? m.media : void 0
      });
    }
  }, qe.preloadModule = function(y, m) {
    if (typeof y == "string")
      if (m) {
        var v = z(m.as, m.crossOrigin);
        c.d.m(y, {
          as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0
        });
      } else c.d.m(y);
  }, qe.requestFormReset = function(y) {
    c.d.r(y);
  }, qe.unstable_batchedUpdates = function(y, m) {
    return y(m);
  }, qe.useFormState = function(y, m, v) {
    return g.H.useFormState(y, m, v);
  }, qe.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, qe.version = "19.3.0", qe;
}
var uh;
function Bp() {
  if (uh) return df.exports;
  uh = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), df.exports = Lp(), df.exports;
}
var ch;
function jp() {
  if (ch) return gr;
  ch = 1;
  var r = qp(), i = Kf(), u = Bp();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        e += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function f(t) {
    for (var e = t, a = e; a && !a.alternate; )
      e = a, (e.flags & 4098) !== 0 && (t = e.return), a = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function p(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (f(t) !== t)
      throw Error(c(188));
  }
  function z(t) {
    var e = t.alternate;
    if (!e) {
      if (e = f(t), e === null) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var a = t, l = e; ; ) {
      var n = a.return;
      if (n === null) break;
      var o = n.alternate;
      if (o === null) {
        if (l = n.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === o.child) {
        for (o = n.child; o; ) {
          if (o === a) return g(n), t;
          if (o === l) return g(n), e;
          o = o.sibling;
        }
        throw Error(c(188));
      }
      if (a.return !== l.return) a = n, l = o;
      else {
        for (var s = !1, b = n.child; b; ) {
          if (b === a) {
            s = !0, a = n, l = o;
            break;
          }
          if (b === l) {
            s = !0, l = n, a = o;
            break;
          }
          b = b.sibling;
        }
        if (!s) {
          for (b = o.child; b; ) {
            if (b === a) {
              s = !0, a = o, l = n;
              break;
            }
            if (b === l) {
              s = !0, l = o, a = n;
              break;
            }
            b = b.sibling;
          }
          if (!s) throw Error(c(189));
        }
      }
      if (a.alternate !== l) throw Error(c(190));
    }
    if (a.tag !== 3) throw Error(c(188));
    return a.stateNode.current === a ? t : e;
  }
  function y(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = y(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function m(t, e, a, l, n, o) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && a(t, l, n, o) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && m(
        t.child,
        e,
        a,
        l,
        n,
        o
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function v(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function S(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function w(t) {
    var e = [null, null], a = v(t);
    return a === null || X(
      e,
      t,
      a.child,
      { foundSelf: !1 }
    ), e;
  }
  function X(t, e, a, l) {
    for (; a !== null; ) {
      if (a === e) l.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (l.foundSelf) return t[1] = a, !0;
        t[0] = a;
      } else if ((a.tag !== 22 || a.memoizedState === null) && X(
        t,
        e,
        a.child,
        l
      ))
        return !0;
      a = a.sibling;
    }
    return !1;
  }
  function $(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(c(559));
    }
  }
  var U = null, G = null;
  function Q(t, e, a) {
    return t === a ? !0 : t === e ? (U = t, !0) : !1;
  }
  function j(t, e, a) {
    return t === a ? (G = t, !1) : t === e ? (G !== null && (U = t), !0) : !1;
  }
  function q(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function W(t, e, a) {
    for (var l = 0, n = t; n; n = a(n)) l++;
    n = 0;
    for (var o = e; o; o = a(o)) n++;
    for (; 0 < l - n; ) t = a(t), l--;
    for (; 0 < n - l; ) e = a(e), n--;
    for (; l--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = a(t), e = a(e);
    }
    return null;
  }
  var _ = Object.assign, E = /* @__PURE__ */ Symbol.for("react.element"), L = /* @__PURE__ */ Symbol.for("react.transitional.element"), k = /* @__PURE__ */ Symbol.for("react.portal"), K = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), rt = /* @__PURE__ */ Symbol.for("react.profiler"), nt = /* @__PURE__ */ Symbol.for("react.consumer"), it = /* @__PURE__ */ Symbol.for("react.context"), R = /* @__PURE__ */ Symbol.for("react.forward_ref"), et = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), ot = /* @__PURE__ */ Symbol.for("react.memo"), F = /* @__PURE__ */ Symbol.for("react.lazy"), ct = /* @__PURE__ */ Symbol.for("react.activity"), ft = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), bt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), M = /* @__PURE__ */ Symbol.for("react.view_transition"), B = /* @__PURE__ */ Symbol.for("react.recoverable"), ut = Symbol.iterator;
  function Y(t) {
    return t === null || typeof t != "object" ? null : (t = ut && t[ut] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var lt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function st(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === lt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case K:
        return "Fragment";
      case rt:
        return "Profiler";
      case V:
        return "StrictMode";
      case et:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case ct:
        return "Activity";
      case M:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case k:
          return "Portal";
        case it:
          return t.displayName || "Context";
        case nt:
          return (t._context.displayName || "Context") + ".Consumer";
        case R:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case ot:
          return e = t.displayName || null, e !== null ? e : st(t.type) || "Memo";
        case F:
          e = t._payload, t = t._init;
          try {
            return st(t(e));
          } catch {
          }
      }
    return null;
  }
  var tt = Array.isArray, J = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, at = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ht = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, yt = [], Mt = -1;
  function $t(t) {
    return { current: t };
  }
  function wt(t) {
    0 > Mt || (t.current = yt[Mt], yt[Mt] = null, Mt--);
  }
  function pt(t, e) {
    Mt++, yt[Mt] = t.current, t.current = e;
  }
  var Dt = $t(null), Gt = $t(null), Et = $t(null), Ht = $t(null);
  function Jt(t, e) {
    switch (pt(Et, e), pt(Gt, t), pt(Dt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? sd(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = sd(e), t = fd(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    wt(Dt), pt(Dt, t);
  }
  function Vt() {
    wt(Dt), wt(Gt), wt(Et);
  }
  function oe(t) {
    var e = t.memoizedState;
    e !== null && (Zi._currentValue = e.memoizedState, pt(Ht, t)), e = Dt.current;
    var a = fd(e, t.type);
    e !== a && (pt(Gt, t), pt(Dt, a));
  }
  function re(t) {
    Gt.current === t && (wt(Dt), wt(Gt)), Ht.current === t && (wt(Ht), Zi._currentValue = ht);
  }
  var Nt, Zt;
  function Qt(t) {
    if (Nt === void 0)
      try {
        throw Error();
      } catch (a) {
        var e = a.stack.trim().match(/\n( *(at )?)/);
        Nt = e && e[1] || "", Zt = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Nt + t + Zt;
  }
  var ne = !1;
  function fa(t, e) {
    if (!t || ne) return "";
    ne = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
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
                } catch (dt) {
                  var C = dt;
                }
                Reflect.construct(t, [], P);
              } else {
                try {
                  P.call();
                } catch (dt) {
                  C = dt;
                }
                P = !1;
                try {
                  var N = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), P = !0, new t();
                } finally {
                  P && (N !== void 0 ? Object.defineProperty(t.prototype, "props", N) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (dt) {
                C = dt;
              }
              (P = t()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (dt) {
            if (dt && C && typeof dt.stack == "string")
              return [dt.stack, C.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var o = l.DetermineComponentFrameRoot(), s = o[0], b = o[1];
      if (s && b) {
        var x = s.split(`
`), O = b.split(`
`);
        for (n = l = 0; l < x.length && !x[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; n < O.length && !O[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (l === x.length || n === O.length)
          for (l = x.length - 1, n = O.length - 1; 1 <= l && 0 <= n && x[l] !== O[n]; )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (x[l] !== O[n]) {
            if (l !== 1 || n !== 1)
              do
                if (l--, n--, 0 > n || x[l] !== O[n]) {
                  var D = `
` + x[l].replace(" at new ", " at ");
                  return t.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", t.displayName)), D;
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      ne = !1, Error.prepareStackTrace = a;
    }
    return (a = t ? t.displayName || t.name : "") ? Qt(a) : "";
  }
  function La(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Qt(t.type);
      case 16:
        return Qt("Lazy");
      case 13:
        return t.child !== e && e !== null ? Qt("Suspense Fallback") : Qt("Suspense");
      case 19:
        return Qt("SuspenseList");
      case 0:
      case 15:
        return fa(t.type, !1);
      case 11:
        return fa(t.type.render, !1);
      case 1:
        return fa(t.type, !0);
      case 31:
        return Qt("Activity");
      case 30:
        return Qt("ViewTransition");
      default:
        return "";
    }
  }
  function Yt(t) {
    try {
      var e = "", a = null;
      do
        e += La(t, a), a = t, t = t.return;
      while (t);
      return e;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Lt = Object.prototype.hasOwnProperty, kt = r.unstable_scheduleCallback, se = r.unstable_cancelCallback, ge = r.unstable_shouldYield, da = r.unstable_requestPaint, de = r.unstable_now, $l = r.unstable_getCurrentPriorityLevel, ha = r.unstable_ImmediatePriority, Ee = r.unstable_UserBlockingPriority, ba = r.unstable_NormalPriority, Ne = r.unstable_LowPriority, sn = r.unstable_IdlePriority, ti = r.log, zt = r.unstable_setDisableYieldValue, ie = null, Le = null;
  function Ea(t) {
    if (typeof ti == "function" && zt(t), Le && typeof Le.setStrictMode == "function")
      try {
        Le.setStrictMode(ie, t);
      } catch {
      }
  }
  var Be = Math.clz32 ? Math.clz32 : Hr, Ar = Math.log, Or = Math.LN2;
  function Hr(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Ar(t) / Or | 0) | 0;
  }
  var fn = 256, dn = 262144, hn = 4194304;
  function Ba(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function bn(t, e, a) {
    var l = t.pendingLanes;
    if (l === 0) return 0;
    var n = 0, o = t.suspendedLanes, s = t.pingedLanes;
    t = t.warmLanes;
    var b = l & 134217727;
    return b !== 0 ? (l = b & ~o, l !== 0 ? n = Ba(l) : (s &= b, s !== 0 ? n = Ba(s) : a || (a = b & ~t, a !== 0 && (n = Ba(a))))) : (b = l & ~o, b !== 0 ? n = Ba(b) : s !== 0 ? n = Ba(s) : a || (a = l & ~t, a !== 0 && (n = Ba(a)))), n === 0 ? 0 : e !== 0 && e !== n && (e & o) === 0 && (o = n & -n, a = e & -e, o >= a || o === 32 && (a & 4194048) !== 0) ? e : n;
  }
  function Tl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function co(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var l = 31 - Be(a), n = 1 << l;
        e |= t[l], a &= ~n;
      }
    return e;
  }
  function Nr(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
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
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function so() {
    var t = hn;
    return hn <<= 1, (hn & 62914560) === 0 && (hn = 4194304), t;
  }
  function ei(t) {
    for (var e = [], a = 0; 31 > a; a++) e.push(t);
    return e;
  }
  function wl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function Yr(t, e, a, l, n, o) {
    var s = t.pendingLanes;
    t.pendingLanes = a, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= a, t.entangledLanes &= a, t.errorRecoveryDisabledLanes &= a, t.shellSuspendCounter = 0;
    var b = t.entanglements, x = t.expirationTimes, O = t.hiddenUpdates;
    for (a = s & ~a; 0 < a; ) {
      var D = 31 - Be(a), P = 1 << D;
      b[D] = 0, x[D] = -1;
      var C = O[D];
      if (C !== null)
        for (O[D] = null, D = 0; D < C.length; D++) {
          var N = C[D];
          N !== null && (N.lane &= -536870913);
        }
      a &= ~P;
    }
    l !== 0 && fo(t, l, 0), o !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(s & ~e));
  }
  function fo(t, e, a) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var l = 31 - Be(e);
    t.entangledLanes |= e, t.entanglements[l] = t.entanglements[l] | 1073741824 | a & 261930;
  }
  function ho(t, e) {
    var a = t.entangledLanes |= e;
    for (t = t.entanglements; a; ) {
      var l = 31 - Be(a), n = 1 << l;
      n & e | t[l] & e && (t[l] |= e), a &= ~n;
    }
  }
  function bo(t, e) {
    var a = e & -e;
    return a = (a & 42) !== 0 ? 1 : ai(a), (a & (t.suspendedLanes | e)) !== 0 ? 0 : a;
  }
  function ai(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function li(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function go() {
    var t = at.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Wd(t.type));
  }
  function mo(t, e) {
    var a = at.p;
    try {
      return at.p = t, e();
    } finally {
      at.p = a;
    }
  }
  var ga = Math.random().toString(36).slice(2), $e = "__reactFiber$" + ga, Ye = "__reactProps$" + ga, ll = "__reactContainer$" + ga, po = "__reactEvents$" + ga, _r = "__reactListeners$" + ga, ni = "__reactHandles$" + ga, gn = "__reactResources$" + ga, Cl = "__reactMarker$" + ga, mn = "__reactLoad$" + ga;
  function ja(t) {
    delete t[$e], delete t[Ye], delete t[_r], delete t[ni];
  }
  function ka(t) {
    var e;
    if (e = t[$e]) return e;
    for (var a = t.parentNode; a; ) {
      if (e = a[ll] || a[$e]) {
        if (a = e.alternate, e.child !== null || a !== null && a.child !== null)
          for (t = Ed(t); t !== null; ) {
            if (a = t[$e]) return a;
            t = Ed(t);
          }
        return e;
      }
      t = a, a = t.parentNode;
    }
    return null;
  }
  function nl(t) {
    if (t = t[$e] || t[ll]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function El(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function il(t) {
    var e = t[gn];
    return e || (e = t[gn] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function me(t) {
    t[Cl] = !0;
  }
  function vo(t) {
    t[mn] = void 0;
  }
  var yo = /* @__PURE__ */ new Set(), xo = {};
  function ea(t, e) {
    We(t, e), We(t + "Capture", e);
  }
  function We(t, e) {
    for (xo[t] = e, t = 0; t < e.length; t++)
      yo.add(e[t]);
  }
  var Dr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Aa = {}, zo = {};
  function Mo(t) {
    return Lt.call(zo, t) ? !0 : Lt.call(Aa, t) ? !1 : Dr.test(t) ? zo[t] = !0 : (Aa[t] = !0, !1);
  }
  var Bt = !1;
  function Rr() {
    var t = Bt;
    return Bt = !1, t;
  }
  function ii(t, e, a) {
    if (Mo(e))
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var l = e.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, a);
      }
  }
  function oi(t, e, a) {
    if (a === null) t.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, a);
    }
  }
  function Oa(t, e, a, l) {
    if (l === null) t.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(a);
          return;
      }
      t.setAttributeNS(e, a, l);
    }
  }
  function ye(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Xr(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function aa(t, e, a) {
    var l = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var n = l.get, o = l.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(s) {
          a = "" + s, o.call(this, s);
        }
      }), Object.defineProperty(t, e, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(s) {
          a = "" + s;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Al(t) {
    if (!t._valueTracker) {
      var e = Xr(t) ? "checked" : "value";
      t._valueTracker = aa(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function ri(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var a = e.getValue(), l = "";
    return t && (l = Xr(t) ? t.checked ? "true" : "false" : t.value), t = l, t !== a ? (e.setValue(t), !0) : !1;
  }
  var Uu = /[\n"\\]/g;
  function ke(t) {
    return t.replace(
      Uu,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ui(t, e, a, l, n, o, s, b) {
    t.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.type = s : t.removeAttribute("type"), e != null ? s === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + ye(e)) : t.value !== "" + ye(e) && (t.value = "" + ye(e)) : s !== "submit" && s !== "reset" || t.removeAttribute("value"), e != null ? s === "number" && t.value == e ? ci(t, ye(t.value)) : ci(t, ye(e)) : a != null ? ci(t, ye(a)) : l != null && t.removeAttribute("value"), n == null && o != null && (t.defaultChecked = !!o), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + ye(b) : t.removeAttribute("name");
  }
  function So(t, e, a, l, n, o, s, b) {
    if (o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (t.type = o), e != null || a != null) {
      if (!(o !== "submit" && o !== "reset" || e != null)) {
        Al(t);
        return;
      }
      a = a != null ? "" + ye(a) : "", e = e != null ? "" + ye(e) : a, b || e === t.value || (t.value = e), t.defaultValue = e;
    }
    l = l ?? n, l = typeof l != "function" && typeof l != "symbol" && !!l, t.checked = b ? t.checked : !!l, t.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (t.name = s), Al(t);
  }
  function ci(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function ol(t, e, a, l) {
    if (t = t.options, e) {
      e = {};
      for (var n = 0; n < a.length; n++)
        e["$" + a[n]] = !0;
      for (a = 0; a < t.length; a++)
        n = e.hasOwnProperty("$" + t[a].value), t[a].selected !== n && (t[a].selected = n), n && l && (t[a].defaultSelected = !0);
    } else {
      for (a = "" + ye(a), e = null, n = 0; n < t.length; n++) {
        if (t[n].value === a) {
          t[n].selected = !0, l && (t[n].defaultSelected = !0);
          return;
        }
        e !== null || t[n].disabled || (e = t[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function $o(t, e, a) {
    if (e != null && (e = "" + ye(e), e !== t.value && (t.value = e), a == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = a != null ? "" + ye(a) : "";
  }
  function To(t, e, a, l) {
    if (e == null) {
      if (l != null) {
        if (a != null) throw Error(c(92));
        if (tt(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), e = a;
    }
    a = ye(e), t.defaultValue = a, l = t.textContent, l === a && l !== "" && l !== null && (t.value = l), Al(t);
  }
  function Ga(t, e) {
    if (e) {
      var a = t.firstChild;
      if (a && a === t.lastChild && a.nodeType === 3) {
        a.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var qu = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ur(t, e, a) {
    var l = e.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : l ? t.setProperty(e, a) : typeof a != "number" || a === 0 || qu.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px";
  }
  function ue(t, e, a) {
    if (e != null && typeof e != "object")
      throw Error(c(62));
    if (t = t.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || e != null && e.hasOwnProperty(l) || (l.indexOf("--") === 0 ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "", Bt = !0);
      for (var n in e)
        l = e[n], e.hasOwnProperty(n) && a[n] !== l && (Ur(t, n, l), Bt = !0);
    } else
      for (var o in e)
        e.hasOwnProperty(o) && Ur(t, o, e[o]);
  }
  function pe(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var ma = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), si = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function fi(t) {
    return si.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Ke() {
  }
  var Lu = null;
  function Bu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var di = null, hi = null;
  function n1(t) {
    var e = nl(t);
    if (e && (t = e.stateNode)) {
      var a = t[Ye] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (ui(
            t,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), e = a.name, a.type === "radio" && e != null) {
            for (a = t; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + ke(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < a.length; e++) {
              var l = a[e];
              if (l !== t && l.form === t.form) {
                var n = l[Ye] || null;
                if (!n) throw Error(c(90));
                ui(
                  l,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (e = 0; e < a.length; e++)
              l = a[e], l.form === t.form && ri(l);
          }
          break t;
        case "textarea":
          $o(t, a.value, a.defaultValue);
          break t;
        case "select":
          e = a.value, e != null && ol(t, !!a.multiple, e, !1);
      }
    }
  }
  var ju = !1;
  function i1(t, e, a) {
    if (ju) return t(e, a);
    ju = !0;
    try {
      var l = t(e);
      return l;
    } finally {
      if (ju = !1, (di !== null || hi !== null) && (U0(), di && (e = di, t = hi, hi = di = null, n1(e), t)))
        for (e = 0; e < t.length; e++) n1(t[e]);
    }
  }
  function wo(t, e) {
    var a = t.stateNode;
    if (a === null) return null;
    var l = a[Ye] || null;
    if (l === null) return null;
    a = l[e];
    t: switch (e) {
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
        (l = !l.disabled) || (t = t.type, l = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !l;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (a && typeof a != "function")
      throw Error(
        c(231, e, typeof a)
      );
    return a;
  }
  var rl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ku = !1;
  if (rl)
    try {
      var Co = {};
      Object.defineProperty(Co, "passive", {
        get: function() {
          ku = !0;
        }
      }), window.addEventListener("test", Co, Co), window.removeEventListener("test", Co, Co);
    } catch {
      ku = !1;
    }
  var Ol = null, Gu = null, qr = null;
  function o1() {
    if (qr) return qr;
    var t, e = Gu, a = e.length, l, n = "value" in Ol ? Ol.value : Ol.textContent, o = n.length;
    for (t = 0; t < a && e[t] === n[t]; t++) ;
    var s = a - t;
    for (l = 1; l <= s && e[a - l] === n[o - l]; l++) ;
    return qr = n.slice(t, 1 < l ? 1 - l : void 0);
  }
  function Lr(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Br() {
    return !0;
  }
  function r1() {
    return !1;
  }
  function Ge(t) {
    function e(a, l, n, o, s) {
      this._reactName = a, this._targetInst = n, this.type = l, this.nativeEvent = o, this.target = s, this.currentTarget = null;
      for (var b in t)
        t.hasOwnProperty(b) && (a = t[b], this[b] = a ? a(o) : o[b]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Br : r1, this.isPropagationStopped = r1, this;
    }
    return _(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Br);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Br);
      },
      persist: function() {
      },
      isPersistent: Br
    }), e;
  }
  var Hl = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, jr = Ge(Hl), Eo = _({}, Hl, { view: 0, detail: 0 }), ag = Ge(Eo), Vu, Zu, Ao, kr = _({}, Eo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Wu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Ao && (Ao && t.type === "mousemove" ? (Vu = t.screenX - Ao.screenX, Zu = t.screenY - Ao.screenY) : Zu = Vu = 0, Ao = t), Vu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Zu;
    }
  }), u1 = Ge(kr), lg = _({}, kr, { dataTransfer: 0 }), ng = Ge(lg), ig = _({}, Eo, { relatedTarget: 0 }), Qu = Ge(ig), og = _({}, Hl, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rg = Ge(og), ug = _({}, Hl, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), cg = Ge(ug), sg = _({}, Hl, { data: 0 }), c1 = Ge(sg), fg = {
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
  }, dg = {
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
  }, hg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function bg(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = hg[t]) ? !!e[t] : !1;
  }
  function Wu() {
    return bg;
  }
  var gg = _({}, Eo, {
    key: function(t) {
      if (t.key) {
        var e = fg[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Lr(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? dg[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Wu,
    charCode: function(t) {
      return t.type === "keypress" ? Lr(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Lr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), mg = Ge(gg), pg = _({}, kr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), s1 = Ge(pg), vg = _({}, Hl, { submitter: 0 }), yg = Ge(vg), xg = _({}, Eo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Wu
  }), zg = Ge(xg), Mg = _({}, Hl, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Sg = Ge(Mg), $g = _({}, kr, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Tg = Ge($g), wg = _({}, Hl, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Cg = Ge(wg), Eg = [9, 13, 27, 32], Ku = rl && "CompositionEvent" in window, Oo = null;
  rl && "documentMode" in document && (Oo = document.documentMode);
  var Ag = rl && "TextEvent" in window && !Oo, f1 = rl && (!Ku || Oo && 8 < Oo && 11 >= Oo), d1 = " ", h1 = !1;
  function b1(t, e) {
    switch (t) {
      case "keyup":
        return Eg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function g1(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var bi = !1;
  function Og(t, e) {
    switch (t) {
      case "compositionend":
        return g1(e);
      case "keypress":
        return e.which !== 32 ? null : (h1 = !0, d1);
      case "textInput":
        return t = e.data, t === d1 && h1 ? null : t;
      default:
        return null;
    }
  }
  function Hg(t, e) {
    if (bi)
      return t === "compositionend" || !Ku && b1(t, e) ? (t = o1(), qr = Gu = Ol = null, bi = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return f1 && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Ng = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function m1(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Ng[t.type] : e === "textarea";
  }
  function p1(t, e, a, l) {
    di ? hi ? hi.push(l) : hi = [l] : di = l, e = G0(e, "onChange"), 0 < e.length && (a = new jr(
      "onChange",
      "change",
      null,
      a,
      l
    ), t.push({ event: a, listeners: e }));
  }
  var Ho = null, No = null;
  function Yg(t) {
    nd(t, 0);
  }
  function Gr(t) {
    var e = El(t);
    if (ri(e)) return t;
  }
  function v1(t, e) {
    if (t === "change") return e;
  }
  var y1 = !1;
  if (rl) {
    var Ju;
    if (rl) {
      var Fu = "oninput" in document;
      if (!Fu) {
        var x1 = document.createElement("div");
        x1.setAttribute("oninput", "return;"), Fu = typeof x1.oninput == "function";
      }
      Ju = Fu;
    } else Ju = !1;
    y1 = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function z1() {
    Ho && (Ho.detachEvent("onpropertychange", M1), No = Ho = null);
  }
  function M1(t) {
    if (t.propertyName === "value" && Gr(No)) {
      var e = [];
      p1(
        e,
        No,
        t,
        Bu(t)
      ), i1(Yg, e);
    }
  }
  function _g(t, e, a) {
    t === "focusin" ? (z1(), Ho = e, No = a, Ho.attachEvent("onpropertychange", M1)) : t === "focusout" && z1();
  }
  function Dg(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Gr(No);
  }
  function Rg(t, e) {
    if (t === "click") return Gr(e);
  }
  function Xg(t, e) {
    if (t === "input" || t === "change")
      return Gr(e);
  }
  function Ug(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var la = typeof Object.is == "function" ? Object.is : Ug;
  function Yo(t, e) {
    if (la(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var a = Object.keys(t), l = Object.keys(e);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!Lt.call(e, n) || !la(t[n], e[n]))
        return !1;
    }
    return !0;
  }
  function Iu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function S1(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function $1(t, e) {
    var a = S1(t);
    t = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = t + a.textContent.length, t <= e && l >= e)
          return { node: a, offset: e - t };
        t = l;
      }
      t: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break t;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = S1(a);
    }
  }
  function T1(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? T1(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function w1(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Iu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var a = typeof e.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) t = e.contentWindow;
      else break;
      e = Iu(t.document);
    }
    return e;
  }
  function Pu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var qg = rl && "documentMode" in document && 11 >= document.documentMode, gi = null, tc = null, _o = null, ec = !1;
  function C1(t, e, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ec || gi == null || gi !== Iu(l) || (l = gi, "selectionStart" in l && Pu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), _o && Yo(_o, l) || (_o = l, l = G0(tc, "onSelect"), 0 < l.length && (e = new jr(
      "onSelect",
      "select",
      null,
      e,
      a
    ), t.push({ event: e, listeners: l }), e.target = gi)));
  }
  function pn(t, e) {
    var a = {};
    return a[t.toLowerCase()] = e.toLowerCase(), a["Webkit" + t] = "webkit" + e, a["Moz" + t] = "moz" + e, a;
  }
  var mi = {
    animationend: pn("Animation", "AnimationEnd"),
    animationiteration: pn("Animation", "AnimationIteration"),
    animationstart: pn("Animation", "AnimationStart"),
    transitionrun: pn("Transition", "TransitionRun"),
    transitionstart: pn("Transition", "TransitionStart"),
    transitioncancel: pn("Transition", "TransitionCancel"),
    transitionend: pn("Transition", "TransitionEnd")
  }, ac = {}, E1 = {};
  rl && (E1 = document.createElement("div").style, "AnimationEvent" in window || (delete mi.animationend.animation, delete mi.animationiteration.animation, delete mi.animationstart.animation), "TransitionEvent" in window || delete mi.transitionend.transition);
  function vn(t) {
    if (ac[t]) return ac[t];
    if (!mi[t]) return t;
    var e = mi[t], a;
    for (a in e)
      if (e.hasOwnProperty(a) && a in E1)
        return ac[t] = e[a];
    return t;
  }
  var A1 = vn("animationend"), O1 = vn("animationiteration"), H1 = vn("animationstart"), Lg = vn("transitionrun"), Bg = vn("transitionstart"), jg = vn("transitioncancel"), N1 = vn("transitionend"), Y1 = /* @__PURE__ */ new Map(), lc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  lc.push("scrollEnd");
  function Ha(t, e) {
    Y1.set(t, e), ea(e, [t]);
  }
  var kg = 0;
  function ul(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = Da.identifierPrefix;
    var a = kg++;
    return t = "_" + t + "t_" + a.toString(32) + "_", e.autoName = t;
  }
  function _1(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, a = Ri;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = t[a[l]];
        if (n != null) {
          if (n === "none") return "none";
          e = e == null ? n : e + (" " + n);
        }
      }
    return e ?? t.default;
  }
  function cl(t, e) {
    return t = _1(t), e = _1(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Vr = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, pa = [], pi = 0, nc = 0;
  function Zr() {
    for (var t = pi, e = nc = pi = 0; e < t; ) {
      var a = pa[e];
      pa[e++] = null;
      var l = pa[e];
      pa[e++] = null;
      var n = pa[e];
      pa[e++] = null;
      var o = pa[e];
      if (pa[e++] = null, l !== null && n !== null) {
        var s = l.pending;
        s === null ? n.next = n : (n.next = s.next, s.next = n), l.pending = n;
      }
      o !== 0 && D1(a, n, o);
    }
  }
  function Qr(t, e, a, l) {
    pa[pi++] = t, pa[pi++] = e, pa[pi++] = a, pa[pi++] = l, nc |= l, t.lanes |= l, t = t.alternate, t !== null && (t.lanes |= l);
  }
  function ic(t, e, a, l) {
    return Qr(t, e, a, l), Wr(t);
  }
  function yn(t, e) {
    return Qr(t, null, null, e), Wr(t);
  }
  function D1(t, e, a) {
    t.lanes |= a;
    var l = t.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, o = t.return; o !== null; )
      o.childLanes |= a, l = o.alternate, l !== null && (l.childLanes |= a), o.tag === 22 && (t = o.stateNode, t === null || t._visibility & 1 || (n = !0)), t = o, o = o.return;
    return t.tag === 3 ? (o = t.stateNode, n && e !== null && (n = 31 - Be(a), t = o.hiddenUpdates, l = t[n], l === null ? t[n] = [e] : l.push(e), e.lane = a | 536870912), o) : null;
  }
  function Wr(t) {
    if (50 < ar)
      throw ar = 0, X0 = null, Error(c(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var vi = {};
  function Gg(t, e, a, l) {
    this.tag = t, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Je(t, e, a, l) {
    return new Gg(t, e, a, l);
  }
  function oc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function sl(t, e) {
    var a = t.alternate;
    return a === null ? (a = Je(
      t.tag,
      e,
      t.key,
      t.mode
    ), a.elementType = t.elementType, a.type = t.type, a.stateNode = t.stateNode, a.alternate = t, t.alternate = a) : (a.pendingProps = e, a.type = t.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = t.flags & 1206910976, a.childLanes = t.childLanes, a.lanes = t.lanes, a.child = t.child, a.memoizedProps = t.memoizedProps, a.memoizedState = t.memoizedState, a.updateQueue = t.updateQueue, e = t.dependencies, a.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, a.sibling = t.sibling, a.index = t.index, a.ref = t.ref, a.refCleanup = t.refCleanup, a;
  }
  function R1(t, e) {
    t.flags &= 1206910978;
    var a = t.alternate;
    return a === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = a.childLanes, t.lanes = a.lanes, t.child = a.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = a.memoizedProps, t.memoizedState = a.memoizedState, t.updateQueue = a.updateQueue, t.type = a.type, e = a.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Kr(t, e, a, l, n, o) {
    var s = 0;
    if (l = t, typeof l == "function") oc(l) && (s = 1);
    else if (typeof l == "string")
      s = vp(
        t,
        a,
        Dt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (l) {
        case ct:
          return t = Je(31, a, e, n), t.elementType = ct, t.lanes = o, t;
        case K:
          return xn(a.children, n, o, e);
        case V:
          s = 8, n |= 24;
          break;
        case rt:
          return t = Je(12, a, e, n | 2), t.elementType = rt, t.lanes = o, t;
        case et:
          return t = Je(13, a, e, n), t.elementType = et, t.lanes = o, t;
        case Z:
          return t = Je(19, a, e, n), t.elementType = Z, t.lanes = o, t;
        case ft:
        case M:
          return t = n | 32, t = Je(30, a, e, t), t.elementType = M, t.lanes = o, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case it:
                s = 10;
                break t;
              case nt:
                s = 9;
                break t;
              case R:
                s = 11;
                break t;
              case ot:
                s = 14;
                break t;
              case F:
                s = 16, l = null;
                break t;
            }
          s = 29, a = Error(
            c(130, t === null ? "null" : typeof t, "")
          ), l = null;
      }
    return e = Je(s, a, e, n), e.elementType = t, e.type = l, e.lanes = o, e;
  }
  function xn(t, e, a, l) {
    return t = Je(7, t, l, e), t.lanes = a, t;
  }
  function rc(t, e, a) {
    return t = Je(6, t, null, e), t.lanes = a, t;
  }
  function X1(t) {
    var e = Je(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function uc(t, e, a) {
    return e = Je(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = a, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var U1 = /* @__PURE__ */ new WeakMap();
  function va(t, e) {
    if (typeof t == "object" && t !== null) {
      var a = U1.get(t);
      return a !== void 0 ? a : (e = {
        value: t,
        source: e,
        stack: Yt(e)
      }, U1.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Yt(e)
    };
  }
  var yi = [], xi = 0, Jr = null, Do = 0, ya = [], xa = 0, Nl = null, Va = 1, Za = "";
  function fl(t, e) {
    yi[xi++] = Do, yi[xi++] = Jr, Jr = t, Do = e;
  }
  function q1(t, e, a) {
    ya[xa++] = Va, ya[xa++] = Za, ya[xa++] = Nl, Nl = t;
    var l = Va;
    t = Za;
    var n = 32 - Be(l) - 1;
    l &= ~(1 << n), a += 1;
    var o = 32 - Be(e) + n;
    if (30 < o) {
      var s = n - n % 5;
      o = (l & (1 << s) - 1).toString(32), l >>= s, n -= s, Va = 1 << 32 - Be(e) + n | a << n | l, Za = o + t;
    } else
      Va = 1 << o | a << n | l, Za = t;
  }
  function Fr(t) {
    t.return !== null && (fl(t, 1), q1(t, 1, 0));
  }
  function cc(t) {
    for (; t === Jr; )
      Jr = yi[--xi], yi[xi] = null, Do = yi[--xi], yi[xi] = null;
    for (; t === Nl; )
      Nl = ya[--xa], ya[xa] = null, Za = ya[--xa], ya[xa] = null, Va = ya[--xa], ya[xa] = null;
  }
  function L1(t, e) {
    ya[xa++] = Va, ya[xa++] = Za, ya[xa++] = Nl, Va = e.id, Za = e.overflow, Nl = t;
  }
  var Ae = null, ae = null, _t = !1, Yl = null, za = !1, sc = Error(c(519));
  function _l(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ro(va(e, t)), sc;
  }
  function B1(t) {
    var e = t.stateNode, a = t.type, l = t.memoizedProps;
    switch (e[$e] = t, e[Ye] = l, a) {
      case "dialog":
        Xt("cancel", e), Xt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Xt("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < nr.length; a++)
          Xt(nr[a], e);
        break;
      case "source":
        Xt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Xt("error", e), Xt("load", e);
        break;
      case "details":
        Xt("toggle", e);
        break;
      case "input":
        Xt("invalid", e), So(
          e,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Xt("invalid", e);
        break;
      case "textarea":
        Xt("invalid", e), To(e, l.value, l.defaultValue, l.children);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || l.suppressHydrationWarning === !0 || ud(e.textContent, a) ? (l.popover != null && (Xt("beforetoggle", e), Xt("toggle", e)), l.onScroll != null && Xt("scroll", e), l.onScrollEnd != null && Xt("scrollend", e), l.onClick != null && (e.onclick = Ke), e = !0) : e = !1, e || _l(t, !0);
  }
  function Ir(t) {
    for (Ae = t.return; Ae; )
      switch (Ae.tag) {
        case 5:
        case 31:
        case 13:
          za = !1;
          return;
        case 27:
        case 3:
          za = !0;
          return;
        default:
          Ae = Ae.return;
      }
  }
  function zi(t) {
    if (t !== Ae) return !1;
    if (!_t) return Ir(t), _t = !0, !1;
    var e = t.tag, a;
    if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type, a = !(a !== "form" && a !== "button") || Ls(t.type, t.memoizedProps)), a = !a), a && ae && _l(t), Ir(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      ae = Cd(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(317));
      ae = Cd(t);
    } else
      e === 27 ? (e = ae, Jl(t.type) ? (t = Ks, Ks = null, ae = t) : ae = e) : ae = Ae ? Sa(t.stateNode.nextSibling) : null;
    return !0;
  }
  function zn() {
    ae = Ae = null, _t = !1;
  }
  function fc() {
    var t = Yl;
    return t !== null && (Pe === null ? Pe = t : Pe.push.apply(
      Pe,
      t
    ), Yl = null), t;
  }
  function Ro(t) {
    Yl === null ? Yl = [t] : Yl.push(t);
  }
  var dc = $t(null), Mn = null, dl = null;
  function Dl(t, e, a) {
    pt(dc, e._currentValue), e._currentValue = a;
  }
  function hl(t) {
    t._currentValue = dc.current, wt(dc);
  }
  function Pr(t, e, a) {
    for (; t !== null; ) {
      var l = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, l !== null && (l.childLanes |= e)) : l !== null && (l.childLanes & e) !== e && (l.childLanes |= e), t === a) break;
      t = t.return;
    }
  }
  function hc(t, e, a, l) {
    var n = t.child;
    for (n !== null && (n.return = t); n !== null; ) {
      var o = n.dependencies;
      if (o !== null) {
        var s = n.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var b = o;
          o = n;
          for (var x = 0; x < e.length; x++)
            if (b.context === e[x]) {
              o.lanes |= a, b = o.alternate, b !== null && (b.lanes |= a), Pr(
                o.return,
                a,
                t
              ), l || (s = null);
              break t;
            }
          o = b.next;
        }
      } else if (n.tag === 18) {
        if (s = n.return, s === null) throw Error(c(341));
        s.lanes |= a, o = s.alternate, o !== null && (o.lanes |= a), Pr(s, a, t), s = null;
      } else
        n.tag === 13 && n.memoizedState !== null && n.memoizedState.dehydrated === null ? (n.lanes |= a, s = n.alternate, s !== null && (s.lanes |= a), Pr(
          n.return,
          a,
          t
        ), s = n.child, s = s !== null ? s.sibling : null) : s = n.child;
      if (s !== null) s.return = n;
      else
        for (s = n; s !== null; ) {
          if (s === t) {
            s = null;
            break;
          }
          if (n = s.sibling, n !== null) {
            n.return = s.return, s = n;
            break;
          }
          s = s.return;
        }
      n = s;
    }
  }
  function Sn(t, e, a, l) {
    t = null;
    for (var n = e, o = !1; n !== null; ) {
      if (!o) {
        if ((n.flags & 524288) !== 0) o = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var s = n.alternate;
        if (s === null) throw Error(c(387));
        if (s = s.memoizedProps, s !== null) {
          var b = n.type;
          la(n.pendingProps.value, s.value) || (t !== null ? t.push(b) : t = [b]);
        }
      } else if (n === Ht.current) {
        if (s = n.alternate, s === null) throw Error(c(387));
        s.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Zi) : t = [Zi]);
      }
      n = n.return;
    }
    return t !== null && hc(
      e,
      t,
      a,
      l
    ), e.flags |= 262144, t !== null;
  }
  function t0(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!la(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function $n(t) {
    Mn = t, dl = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function _e(t) {
    return j1(Mn, t);
  }
  function e0(t, e) {
    return Mn === null && $n(t), j1(t, e);
  }
  function j1(t, e) {
    var a = e._currentValue;
    if (e = { context: e, memoizedValue: a, next: null }, dl === null) {
      if (t === null) throw Error(c(308));
      dl = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else dl = dl.next = e;
    return a;
  }
  var Vg = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        t.push(l);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(a) {
        return a();
      });
    };
  }, Zg = r.unstable_scheduleCallback, Qg = r.unstable_NormalPriority, xe = {
    $$typeof: it,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function bc() {
    return {
      controller: new Vg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xo(t) {
    t.refCount--, t.refCount === 0 && Zg(Qg, function() {
      t.controller.abort();
    });
  }
  function k1(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var a = t.transitionTypes;
      for (a === null && (a = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var l = e[t];
        a.indexOf(l) === -1 && a.push(l);
      }
    }
  }
  var Uo = null;
  function Wg(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var qo = null, gc = 0, Tn = 0, Mi = null;
  function Kg(t, e) {
    if (qo === null) {
      var a = qo = [];
      gc = 0, Tn = Hs(), Mi = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return gc++, e.then(G1, G1), e;
  }
  function G1() {
    if (--gc === 0 && (Uo = null, qo !== null)) {
      Mi !== null && (Mi.status = "fulfilled");
      var t = qo;
      qo = null, Tn = 0, Mi = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Jg(t, e) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return t.then(
      function() {
        l.status = "fulfilled", l.value = e;
        for (var n = 0; n < a.length; n++) (0, a[n])(e);
      },
      function(n) {
        for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), l;
  }
  var V1 = J.S;
  J.S = function(t, e) {
    if (X5 = de(), typeof e == "object" && e !== null && typeof e.then == "function" && Kg(t, e), Uo !== null)
      for (var a = Li; a !== null; )
        k1(a, Uo), a = a.next;
    if (a = t.types, a !== null) {
      for (var l = Li; l !== null; )
        k1(l, a), l = l.next;
      if (Tn !== 0) {
        l = Uo, l === null && (l = Uo = []);
        for (var n = 0; n < a.length; n++) {
          var o = a[n];
          l.indexOf(o) === -1 && l.push(o);
        }
      }
    }
    V1 !== null && V1(t, e);
  };
  var wn = $t(null);
  function mc() {
    var t = wn.current;
    return t !== null ? t : ee.pooledCache;
  }
  function a0(t, e) {
    e === null ? pt(wn, wn.current) : pt(wn, e.pool);
  }
  function Z1() {
    var t = mc();
    return t === null ? null : { parent: xe._currentValue, pool: t };
  }
  var Si = Error(c(460)), pc = Error(c(474)), l0 = Error(c(542)), n0 = { then: function() {
  } };
  function Q1(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function W1(t, e, a) {
    switch (a = t[a], a === void 0 ? t.push(e) : a !== e && (e.then(Ke, Ke), e = a), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, J1(t), t === void 0 && !("reason" in e) ? Error(c(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Ke, Ke);
        else {
          if (t = ee, t !== null && 100 < t.shellSuspendCounter)
            throw Error(c(482));
          t = e, t.status = "pending", t.then(
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = l;
              }
            },
            function(l) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = l;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, J1(t), t;
        }
        throw En = e, Si;
    }
  }
  function Cn(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (En = a, Si) : a;
    }
  }
  var En = null;
  function K1() {
    if (En === null) throw Error(c(459));
    var t = En;
    return En = null, t;
  }
  function J1(t) {
    if (t === Si || t === l0)
      throw Error(c(483));
  }
  var $i = null, Lo = 0;
  function i0(t) {
    var e = Lo;
    return Lo += 1, $i === null && ($i = []), W1($i, t, e);
  }
  function Rl(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function o0(t, e) {
    throw e.$$typeof === E ? Error(c(525)) : (t = Object.prototype.toString.call(e), Error(
      c(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function F1(t) {
    function e(A, T) {
      if (t) {
        var H = A.deletions;
        H === null ? (A.deletions = [T], A.flags |= 16) : H.push(T);
      }
    }
    function a(A, T) {
      if (!t) return null;
      for (; T !== null; )
        e(A, T), T = T.sibling;
      return null;
    }
    function l(A) {
      for (var T = /* @__PURE__ */ new Map(); A !== null; )
        A.key === null ? T.set(A.index, A) : T.set(A.key, A), A = A.sibling;
      return T;
    }
    function n(A, T) {
      return A = sl(A, T), A.index = 0, A.sibling = null, A;
    }
    function o(A, T, H) {
      return A.index = H, t ? (H = A.alternate, H !== null ? (H = H.index, H < T ? (A.flags |= 2, T) : H) : (A.flags |= 134217730, T)) : (A.flags |= 1048576, T);
    }
    function s(A) {
      return t && A.alternate === null && (A.flags |= 134217730), A;
    }
    function b(A, T, H, I) {
      return T === null || T.tag !== 6 ? (T = rc(H, A.mode, I), T.return = A, T) : (T = n(T, H), T.return = A, T);
    }
    function x(A, T, H, I) {
      var mt = H.type;
      return mt === K ? (A = D(
        A,
        T,
        H.props.children,
        I,
        H.key
      ), Rl(A, H), A) : T !== null && (T.elementType === mt || typeof mt == "object" && mt !== null && mt.$$typeof === F && Cn(mt) === T.type) ? (T = n(T, H.props), Rl(T, H), T.return = A, T) : (T = Kr(
        H.type,
        H.key,
        H.props,
        null,
        A.mode,
        I
      ), Rl(T, H), T.return = A, T);
    }
    function O(A, T, H, I) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== H.containerInfo || T.stateNode.implementation !== H.implementation ? (T = uc(H, A.mode, I), T.return = A, T) : (T = n(T, H.children || []), T.return = A, T);
    }
    function D(A, T, H, I, mt) {
      return T === null || T.tag !== 7 ? (T = xn(
        H,
        A.mode,
        I,
        mt
      ), T.return = A, T) : (T = n(T, H), T.return = A, T);
    }
    function P(A, T, H) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = rc(
          "" + T,
          A.mode,
          H
        ), T.return = A, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case L:
            return H = Kr(
              T.type,
              T.key,
              T.props,
              null,
              A.mode,
              H
            ), Rl(H, T), H.return = A, H;
          case k:
            return T = uc(
              T,
              A.mode,
              H
            ), T.return = A, T;
          case F:
            return T = Cn(T), P(A, T, H);
        }
        if (tt(T) || Y(T))
          return T = xn(
            T,
            A.mode,
            H,
            null
          ), T.return = A, T;
        if (typeof T.then == "function")
          return P(A, i0(T), H);
        if (T.$$typeof === it)
          return P(
            A,
            e0(A, T),
            H
          );
        o0(A, T);
      }
      return null;
    }
    function C(A, T, H, I) {
      var mt = T !== null ? T.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return mt !== null ? null : b(A, T, "" + H, I);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case L:
            return H.key === mt ? x(A, T, H, I) : null;
          case k:
            return H.key === mt ? O(A, T, H, I) : null;
          case F:
            return H = Cn(H), C(A, T, H, I);
        }
        if (tt(H) || Y(H))
          return mt !== null ? null : D(A, T, H, I, null);
        if (typeof H.then == "function")
          return C(
            A,
            T,
            i0(H),
            I
          );
        if (H.$$typeof === it)
          return C(
            A,
            T,
            e0(A, H),
            I
          );
        o0(A, H);
      }
      return null;
    }
    function N(A, T, H, I, mt) {
      if (typeof I == "string" && I !== "" || typeof I == "number" || typeof I == "bigint")
        return A = A.get(H) || null, b(T, A, "" + I, mt);
      if (typeof I == "object" && I !== null) {
        switch (I.$$typeof) {
          case L:
            return A = A.get(
              I.key === null ? H : I.key
            ) || null, x(T, A, I, mt);
          case k:
            return A = A.get(
              I.key === null ? H : I.key
            ) || null, O(T, A, I, mt);
          case F:
            return I = Cn(I), N(
              A,
              T,
              H,
              I,
              mt
            );
        }
        if (tt(I) || Y(I))
          return A = A.get(H) || null, D(T, A, I, mt, null);
        if (typeof I.then == "function")
          return N(
            A,
            T,
            H,
            i0(I),
            mt
          );
        if (I.$$typeof === it)
          return N(
            A,
            T,
            H,
            e0(T, I),
            mt
          );
        o0(T, I);
      }
      return null;
    }
    function dt(A, T, H, I) {
      for (var mt = null, qt = null, xt = T, St = T = 0, Se = null; xt !== null && St < H.length; St++) {
        xt.index > St ? (Se = xt, xt = null) : Se = xt.sibling;
        var jt = C(
          A,
          xt,
          H[St],
          I
        );
        if (jt === null) {
          xt === null && (xt = Se);
          break;
        }
        t && xt && jt.alternate === null && e(A, xt), T = o(jt, T, St), qt === null ? mt = jt : qt.sibling = jt, qt = jt, xt = Se;
      }
      if (St === H.length)
        return a(A, xt), _t && fl(A, St), mt;
      if (xt === null) {
        for (; St < H.length; St++)
          xt = P(A, H[St], I), xt !== null && (T = o(
            xt,
            T,
            St
          ), qt === null ? mt = xt : qt.sibling = xt, qt = xt);
        return _t && fl(A, St), mt;
      }
      for (xt = l(xt); St < H.length; St++)
        Se = N(
          xt,
          A,
          St,
          H[St],
          I
        ), Se !== null && (t && (jt = Se.alternate, jt !== null && xt.delete(jt.key === null ? St : jt.key)), T = o(
          Se,
          T,
          St
        ), qt === null ? mt = Se : qt.sibling = Se, qt = Se);
      return t && xt.forEach(function(en) {
        return e(A, en);
      }), _t && fl(A, St), mt;
    }
    function vt(A, T, H, I) {
      if (H == null) throw Error(c(151));
      for (var mt = null, qt = null, xt = T, St = T = 0, Se = null, jt = H.next(); xt !== null && !jt.done; St++, jt = H.next()) {
        xt.index > St ? (Se = xt, xt = null) : Se = xt.sibling;
        var en = C(A, xt, jt.value, I);
        if (en === null) {
          xt === null && (xt = Se);
          break;
        }
        t && xt && en.alternate === null && e(A, xt), T = o(en, T, St), qt === null ? mt = en : qt.sibling = en, qt = en, xt = Se;
      }
      if (jt.done)
        return a(A, xt), _t && fl(A, St), mt;
      if (xt === null) {
        for (; !jt.done; St++, jt = H.next())
          jt = P(A, jt.value, I), jt !== null && (T = o(jt, T, St), qt === null ? mt = jt : qt.sibling = jt, qt = jt);
        return _t && fl(A, St), mt;
      }
      for (xt = l(xt); !jt.done; St++, jt = H.next())
        jt = N(xt, A, St, jt.value, I), jt !== null && (t && (Se = jt.alternate, Se !== null && xt.delete(
          Se.key === null ? St : Se.key
        )), T = o(jt, T, St), qt === null ? mt = jt : qt.sibling = jt, qt = jt);
      return t && xt.forEach(function(Op) {
        return e(A, Op);
      }), _t && fl(A, St), mt;
    }
    function Ot(A, T, H, I) {
      if (typeof H == "object" && H !== null && H.type === K && H.key === null && H.props.ref === void 0 && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case L:
            t: {
              for (var mt = H.key; T !== null; ) {
                if (T.key === mt) {
                  if (mt = H.type, mt === K) {
                    if (T.tag === 7) {
                      a(
                        A,
                        T.sibling
                      ), I = n(
                        T,
                        H.props.children
                      ), Rl(I, H), I.return = A, A = I;
                      break t;
                    }
                  } else if (T.elementType === mt || typeof mt == "object" && mt !== null && mt.$$typeof === F && Cn(mt) === T.type) {
                    a(
                      A,
                      T.sibling
                    ), I = n(T, H.props), Rl(I, H), I.return = A, A = I;
                    break t;
                  }
                  a(A, T);
                  break;
                } else e(A, T);
                T = T.sibling;
              }
              H.type === K ? (I = xn(
                H.props.children,
                A.mode,
                I,
                H.key
              ), Rl(I, H), I.return = A, A = I) : (I = Kr(
                H.type,
                H.key,
                H.props,
                null,
                A.mode,
                I
              ), Rl(I, H), I.return = A, A = I);
            }
            return s(A);
          case k:
            t: {
              for (mt = H.key; T !== null; ) {
                if (T.key === mt)
                  if (T.tag === 4 && T.stateNode.containerInfo === H.containerInfo && T.stateNode.implementation === H.implementation) {
                    a(
                      A,
                      T.sibling
                    ), I = n(T, H.children || []), I.return = A, A = I;
                    break t;
                  } else {
                    a(A, T);
                    break;
                  }
                else e(A, T);
                T = T.sibling;
              }
              I = uc(H, A.mode, I), I.return = A, A = I;
            }
            return s(A);
          case F:
            return H = Cn(H), Ot(
              A,
              T,
              H,
              I
            );
        }
        if (tt(H))
          return dt(
            A,
            T,
            H,
            I
          );
        if (Y(H)) {
          if (mt = Y(H), typeof mt != "function") throw Error(c(150));
          return H = mt.call(H), vt(
            A,
            T,
            H,
            I
          );
        }
        if (typeof H.then == "function")
          return Ot(
            A,
            T,
            i0(H),
            I
          );
        if (H.$$typeof === it)
          return Ot(
            A,
            T,
            e0(A, H),
            I
          );
        o0(A, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, T !== null && T.tag === 6 ? (a(A, T.sibling), I = n(T, H), I.return = A, A = I) : (a(A, T), I = rc(H, A.mode, I), I.return = A, A = I), s(A)) : a(A, T);
    }
    return function(A, T, H, I) {
      try {
        Lo = 0;
        var mt = Ot(
          A,
          T,
          H,
          I
        );
        return $i = null, mt;
      } catch (xt) {
        if (xt === Si || xt === l0) throw xt;
        var qt = Je(29, xt, null, A.mode);
        return qt.lanes = I, qt.return = A, qt;
      }
    };
  }
  var An = F1(!0), I1 = F1(!1), Xl = !1;
  function vc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function yc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function Ul(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ql(t, e, a) {
    var l = t.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Wt & 2) !== 0) {
      var n = l.pending;
      return n === null ? e.next = e : (e.next = n.next, n.next = e), l.pending = e, e = Wr(t), D1(t, null, a), e;
    }
    return Qr(t, l, e, a), Wr(t);
  }
  function Bo(t, e, a) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (a & 4194048) !== 0)) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, ho(t, a);
    }
  }
  function xc(t, e) {
    var a = t.updateQueue, l = t.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var n = null, o = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var s = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          o === null ? n = o = s : o = o.next = s, a = a.next;
        } while (a !== null);
        o === null ? n = o = e : o = o.next = e;
      } else n = o = e;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: o,
        shared: l.shared,
        callbacks: l.callbacks
      }, t.updateQueue = a;
      return;
    }
    t = a.lastBaseUpdate, t === null ? a.firstBaseUpdate = e : t.next = e, a.lastBaseUpdate = e;
  }
  var zc = !1;
  function jo() {
    if (zc) {
      var t = Mi;
      if (t !== null) throw t;
    }
  }
  function ko(t, e, a, l) {
    zc = !1;
    var n = t.updateQueue;
    Xl = !1;
    var o = n.firstBaseUpdate, s = n.lastBaseUpdate, b = n.shared.pending;
    if (b !== null) {
      n.shared.pending = null;
      var x = b, O = x.next;
      x.next = null, s === null ? o = O : s.next = O, s = x;
      var D = t.alternate;
      D !== null && (D = D.updateQueue, b = D.lastBaseUpdate, b !== s && (b === null ? D.firstBaseUpdate = O : b.next = O, D.lastBaseUpdate = x));
    }
    if (o !== null) {
      var P = n.baseState;
      s = 0, D = O = x = null, b = o;
      do {
        var C = b.lane & -536870913, N = C !== b.lane;
        if (N ? (Ut & C) === C : (l & C) === C) {
          C !== 0 && C === Tn && (zc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          t: {
            var dt = t, vt = b;
            C = e;
            var Ot = a;
            switch (vt.tag) {
              case 1:
                if (dt = vt.payload, typeof dt == "function") {
                  P = dt.call(Ot, P, C);
                  break t;
                }
                P = dt;
                break t;
              case 3:
                dt.flags = dt.flags & -65537 | 128;
              case 0:
                if (dt = vt.payload, C = typeof dt == "function" ? dt.call(Ot, P, C) : dt, C == null) break t;
                P = _({}, P, C);
                break t;
              case 2:
                Xl = !0;
            }
          }
          C = b.callback, C !== null && (t.flags |= 64, N && (t.flags |= 8192), N = n.callbacks, N === null ? n.callbacks = [C] : N.push(C));
        } else
          N = {
            lane: C,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, D === null ? (O = D = N, x = P) : D = D.next = N, s |= C;
        if (b = b.next, b === null) {
          if (b = n.shared.pending, b === null)
            break;
          N = b, b = N.next, N.next = null, n.lastBaseUpdate = N, n.shared.pending = null;
        }
      } while (!0);
      D === null && (x = P), n.baseState = x, n.firstBaseUpdate = O, n.lastBaseUpdate = D, o === null && (n.shared.lanes = 0), Zl |= s, t.lanes = s, t.memoizedState = P;
    }
  }
  function P1(t, e) {
    if (typeof t != "function")
      throw Error(c(191, t));
    t.call(e);
  }
  function t2(t, e) {
    var a = t.callbacks;
    if (a !== null)
      for (t.callbacks = null, t = 0; t < a.length; t++)
        P1(a[t], e);
  }
  var Ll = $t(null), r0 = $t(0);
  function e2(t, e) {
    t = vl, pt(r0, t), pt(Ll, e), vl = t | e.baseLanes;
  }
  function Mc() {
    pt(r0, vl), pt(Ll, Ll.current);
  }
  function Sc() {
    vl = r0.current, wt(Ll), wt(r0);
  }
  var De = $t(null), je = null;
  function Bl(t) {
    var e = t.alternate;
    pt(Re, Re.current & 1), pt(De, t), je === null && (e === null || Ll.current !== null || e.memoizedState !== null) && (je = t);
  }
  function $c(t) {
    pt(Re, Re.current), pt(De, t), je === null && (je = t);
  }
  function a2(t) {
    t.tag === 22 ? (pt(Re, Re.current), pt(De, t), je === null && (je = t)) : jl();
  }
  function jl() {
    pt(Re, Re.current), pt(De, De.current);
  }
  function na(t) {
    wt(De), je === t && (je = null), wt(Re);
  }
  var Re = $t(0);
  function Go(t, e) {
    pt(De, De.current), pt(Re, e);
  }
  function Tc(t) {
    wt(Re), wt(De), je === t && (je = null);
  }
  function u0(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var a = e.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || Qs(a) || Ws(a)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var bl = 0, At = null, te = null, ze = null, c0 = !1, Ti = !1, On = !1, s0 = 0, Vo = 0, wi = null, Fg = 0;
  function he() {
    throw Error(c(321));
  }
  function wc(t, e) {
    if (e === null) return !1;
    for (var a = 0; a < e.length && a < t.length; a++)
      if (!la(t[a], e[a])) return !1;
    return !0;
  }
  function Cc(t, e, a, l, n, o) {
    return bl = o, At = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, J.H = t === null || t.memoizedState === null ? q2 : L2, On = !1, o = a(l, n), On = !1, Ti && (o = n2(
      e,
      a,
      l,
      n
    )), l2(t), o;
  }
  function l2(t) {
    J.H = p0;
    var e = te !== null && te.next !== null;
    if (bl = 0, ze = te = At = null, c0 = !1, Vo = 0, wi = null, e) throw Error(c(300));
    t === null || Me || (t = t.dependencies, t !== null && t0(t) && (Me = !0));
  }
  function n2(t, e, a, l) {
    At = t;
    var n = 0;
    do {
      if (Ti && (wi = null), Vo = 0, Ti = !1, 25 <= n) throw Error(c(301));
      if (n += 1, ze = te = null, t.updateQueue != null) {
        var o = t.updateQueue;
        o.lastEffect = null, o.events = null, o.stores = null, o.memoCache != null && (o.memoCache.index = 0);
      }
      J.H = im, o = e(a, l);
    } while (Ti);
    return o;
  }
  function Ig() {
    var t = J.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Zo(e) : e, t = t.useState()[0], (te !== null ? te.memoizedState : null) !== t && (At.flags |= 1024), e;
  }
  function Ec() {
    var t = s0 !== 0;
    return s0 = 0, t;
  }
  function Ac(t, e, a) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~a;
  }
  function Oc(t) {
    if (c0) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      c0 = !1;
    }
    bl = 0, ze = te = At = null, Ti = !1, Vo = s0 = 0, wi = null;
  }
  function Ve() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ze === null ? At.memoizedState = ze = t : ze = ze.next = t, ze;
  }
  function ve() {
    if (te === null) {
      var t = At.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = te.next;
    var e = ze === null ? At.memoizedState : ze.next;
    if (e !== null)
      ze = e, te = t;
    else {
      if (t === null)
        throw At.alternate === null ? Error(c(467)) : Error(c(310));
      te = t, t = {
        memoizedState: te.memoizedState,
        baseState: te.baseState,
        baseQueue: te.baseQueue,
        queue: te.queue,
        next: null
      }, ze === null ? At.memoizedState = ze = t : ze = ze.next = t;
    }
    return ze;
  }
  function f0() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zo(t) {
    var e = Vo;
    return Vo += 1, wi === null && (wi = []), t = W1(wi, t, e), e = At, (ze === null ? e.memoizedState : ze.next) === null && (e = e.alternate, J.H = e === null || e.memoizedState === null ? q2 : L2), t;
  }
  function d0(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Zo(t);
      if (t.$$typeof === B) return;
      if (t.$$typeof === it) return _e(t);
    }
    throw Error(c(438, String(t)));
  }
  function Hc(t) {
    var e = null, a = At.updateQueue;
    if (a !== null && (e = a.memoCache), e == null) {
      var l = At.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (e = {
        data: l.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), a === null && (a = f0(), At.updateQueue = a), a.memoCache = e, a = e.data[e.index], a === void 0)
      for (a = e.data[e.index] = Array(t), l = 0; l < t; l++)
        a[l] = bt;
    return e.index++, a;
  }
  function gl(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function h0(t) {
    var e = ve();
    return Nc(e, te, t);
  }
  function Nc(t, e, a) {
    var l = t.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = a;
    var n = t.baseQueue, o = l.pending;
    if (o !== null) {
      if (n !== null) {
        var s = n.next;
        n.next = o.next, o.next = s;
      }
      e.baseQueue = n = o, l.pending = null;
    }
    if (o = t.baseState, n === null) t.memoizedState = o;
    else {
      e = n.next;
      var b = s = null, x = null, O = e, D = !1;
      do {
        var P = O.lane & -536870913;
        if (P !== O.lane ? (Ut & P) === P : (bl & P) === P) {
          var C = O.revertLane;
          if (C === 0)
            x !== null && (x = x.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }), P === Tn && (D = !0);
          else if ((bl & C) === C) {
            O = O.next, C === Tn && (D = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: O.revertLane,
              gesture: null,
              action: O.action,
              hasEagerState: O.hasEagerState,
              eagerState: O.eagerState,
              next: null
            }, x === null ? (b = x = P, s = o) : x = x.next = P, At.lanes |= C, Zl |= C;
          P = O.action, On && a(o, P), o = O.hasEagerState ? O.eagerState : a(o, P);
        } else
          C = {
            lane: P,
            revertLane: O.revertLane,
            gesture: O.gesture,
            action: O.action,
            hasEagerState: O.hasEagerState,
            eagerState: O.eagerState,
            next: null
          }, x === null ? (b = x = C, s = o) : x = x.next = C, At.lanes |= P, Zl |= P;
        O = O.next;
      } while (O !== null && O !== e);
      if (x === null ? s = o : x.next = b, !la(o, t.memoizedState) && (Me = !0, D && (a = Mi, a !== null)))
        throw a;
      t.memoizedState = o, t.baseState = s, t.baseQueue = x, l.lastRenderedState = o;
    }
    return n === null && (l.lanes = 0), [t.memoizedState, l.dispatch];
  }
  function Yc(t) {
    var e = ve(), a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = t;
    var l = a.dispatch, n = a.pending, o = e.memoizedState;
    if (n !== null) {
      a.pending = null;
      var s = n = n.next;
      do
        o = t(o, s.action), s = s.next;
      while (s !== n);
      la(o, e.memoizedState) || (Me = !0), e.memoizedState = o, e.baseQueue === null && (e.baseState = o), a.lastRenderedState = o;
    }
    return [o, l];
  }
  function i2(t, e, a) {
    var l = At, n = ve(), o = _t;
    if (o) {
      if (a === void 0) throw Error(c(407));
      a = a();
    } else a = e();
    var s = !la(
      (te || n).memoizedState,
      a
    );
    if (s && (n.memoizedState = a, Me = !0), n = n.queue, Rc(u2.bind(null, l, n, t), [
      t
    ]), t = n.getSnapshot !== e || s || ze !== null && (ze.memoizedState.tag & 1) !== 0, Ci(
      t ? 9 : 8,
      { destroy: void 0 },
      r2.bind(null, l, n, a, e),
      null
    ), t) {
      if (l.flags |= 2048, ee === null) throw Error(c(349));
      o || (bl & 127) !== 0 || o2(l, e, a);
    }
    return a;
  }
  function o2(t, e, a) {
    t.flags |= 16384, t = { getSnapshot: e, value: a }, e = At.updateQueue, e === null ? (e = f0(), At.updateQueue = e, e.stores = [t]) : (a = e.stores, a === null ? e.stores = [t] : a.push(t));
  }
  function r2(t, e, a, l) {
    e.value = a, e.getSnapshot = l, c2(e) && s2(t);
  }
  function u2(t, e, a) {
    return a(function() {
      c2(e) && s2(t);
    });
  }
  function c2(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var a = e();
      return !la(t, a);
    } catch {
      return !0;
    }
  }
  function s2(t) {
    var e = yn(t, 2);
    e !== null && ta(e, t, 2);
  }
  function _c(t) {
    var e = Ve();
    if (typeof t == "function") {
      var a = t;
      if (t = a(), On) {
        Ea(!0);
        try {
          a();
        } finally {
          Ea(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gl,
      lastRenderedState: t
    }, e;
  }
  function f2(t, e, a, l) {
    return t.baseState = a, Nc(
      t,
      te,
      typeof l == "function" ? l : gl
    );
  }
  function Pg(t, e, a, l, n) {
    if (m0(t)) throw Error(c(485));
    if (t = e.action, t !== null) {
      var o = {
        payload: n,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          o.listeners.push(s);
        }
      };
      J.T !== null ? a(!0) : o.isTransition = !1, l(o), a = e.pending, a === null ? (o.next = e.pending = o, d2(e, o)) : (o.next = a.next, e.pending = a.next = o);
    }
  }
  function d2(t, e) {
    var a = e.action, l = e.payload, n = t.state;
    if (e.isTransition) {
      var o = J.T, s = {};
      s.types = o !== null ? o.types : null, J.T = s;
      try {
        var b = a(n, l), x = J.S;
        x !== null && x(s, b), h2(t, e, b);
      } catch (O) {
        Dc(t, e, O);
      } finally {
        o !== null && s.types !== null && (o.types = s.types), J.T = o;
      }
    } else
      try {
        o = a(n, l), h2(t, e, o);
      } catch (O) {
        Dc(t, e, O);
      }
  }
  function h2(t, e, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        b2(t, e, l);
      },
      function(l) {
        return Dc(t, e, l);
      }
    ) : b2(t, e, a);
  }
  function b2(t, e, a) {
    e.status = "fulfilled", e.value = a, g2(e), t.state = a, e = t.pending, e !== null && (a = e.next, a === e ? t.pending = null : (a = a.next, e.next = a, d2(t, a)));
  }
  function Dc(t, e, a) {
    var l = t.pending;
    if (t.pending = null, l !== null) {
      l = l.next;
      do
        e.status = "rejected", e.reason = a, g2(e), e = e.next;
      while (e !== l);
    }
    t.action = null;
  }
  function g2(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function m2(t, e) {
    return e;
  }
  function p2(t, e) {
    if (_t) {
      var a = ee.formState;
      if (a !== null) {
        t: {
          var l = At;
          if (_t) {
            if (ae) {
              e: {
                for (var n = ae, o = za; n.nodeType !== 8; ) {
                  if (!o) {
                    n = null;
                    break e;
                  }
                  if (n = Sa(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break e;
                  }
                }
                o = n.data, n = o === "F!" || o === "F" ? n : null;
              }
              if (n) {
                ae = Sa(
                  n.nextSibling
                ), l = n.data === "F!";
                break t;
              }
            }
            _l(l);
          }
          l = !1;
        }
        l && (e = a[0]);
      }
    }
    return a = Ve(), a.memoizedState = a.baseState = e, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: m2,
      lastRenderedState: e
    }, a.queue = l, a = R2.bind(
      null,
      At,
      l
    ), l.dispatch = a, l = _c(!1), o = Bc.bind(
      null,
      At,
      !1,
      l.queue
    ), l = Ve(), n = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, l.queue = n, a = Pg.bind(
      null,
      At,
      n,
      o,
      a
    ), n.dispatch = a, l.memoizedState = t, [e, a, !1];
  }
  function v2(t) {
    var e = ve();
    return y2(e, te, t);
  }
  function y2(t, e, a) {
    if (e = Nc(
      t,
      e,
      m2
    )[0], t = h0(gl)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var l = Zo(e);
      } catch (s) {
        throw s === Si ? l0 : s;
      }
    else l = e;
    e = ve();
    var n = e.queue, o = n.dispatch;
    return a !== e.memoizedState && (At.flags |= 2048, Ci(
      9,
      { destroy: void 0 },
      tm.bind(null, n, a),
      null
    )), [l, o, t];
  }
  function tm(t, e) {
    t.action = e;
  }
  function x2(t) {
    var e = ve(), a = te;
    if (a !== null)
      return y2(e, a, t);
    ve(), e = e.memoizedState, a = ve();
    var l = a.queue.dispatch;
    return a.memoizedState = t, [e, l, !1];
  }
  function Ci(t, e, a, l) {
    return t = { tag: t, create: a, deps: l, inst: e, next: null }, e = At.updateQueue, e === null && (e = f0(), At.updateQueue = e), a = e.lastEffect, a === null ? e.lastEffect = t.next = t : (l = a.next, a.next = t, t.next = l, e.lastEffect = t), t;
  }
  function z2() {
    return ve().memoizedState;
  }
  function b0(t, e, a, l) {
    var n = Ve();
    At.flags |= t, n.memoizedState = Ci(
      1 | e,
      { destroy: void 0 },
      a,
      l === void 0 ? null : l
    );
  }
  function g0(t, e, a, l) {
    var n = ve();
    l = l === void 0 ? null : l;
    var o = n.memoizedState.inst;
    te !== null && l !== null && wc(l, te.memoizedState.deps) ? n.memoizedState = Ci(e, o, a, l) : (At.flags |= t, n.memoizedState = Ci(
      1 | e,
      o,
      a,
      l
    ));
  }
  function M2(t, e) {
    b0(8390656, 8, t, e);
  }
  function Rc(t, e) {
    g0(2048, 8, t, e);
  }
  function em(t) {
    At.flags |= 4;
    var e = At.updateQueue;
    if (e === null)
      e = f0(), At.updateQueue = e, e.events = [t];
    else {
      var a = e.events;
      a === null ? e.events = [t] : a.push(t);
    }
  }
  function S2(t) {
    var e = ve().memoizedState;
    return em({ ref: e, nextImpl: t }), function() {
      if ((Wt & 2) !== 0) throw Error(c(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function $2(t, e) {
    return g0(4, 2, t, e);
  }
  function T2(t, e) {
    return g0(4, 4, t, e);
  }
  function w2(t, e) {
    if (typeof e == "function") {
      t = t();
      var a = e(t);
      return function() {
        typeof a == "function" ? a() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function C2(t, e, a) {
    a = a != null ? a.concat([t]) : null, g0(4, 4, w2.bind(null, e, t), a);
  }
  function Xc() {
  }
  function E2(t, e) {
    var a = ve();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    return e !== null && wc(e, l[1]) ? l[0] : (a.memoizedState = [t, e], t);
  }
  function A2(t, e) {
    var a = ve();
    e = e === void 0 ? null : e;
    var l = a.memoizedState;
    if (e !== null && wc(e, l[1]))
      return l[0];
    if (l = t(), On) {
      Ea(!0);
      try {
        t();
      } finally {
        Ea(!1);
      }
    }
    return a.memoizedState = [l, e], l;
  }
  function Uc(t, e, a) {
    return a === void 0 || (bl & 1073741824) !== 0 && (Ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a, t = q5(), At.lanes |= t, Zl |= t, a);
  }
  function O2(t, e, a, l) {
    return la(a, e) ? a : Ll.current !== null ? (t = Uc(t, a, l), la(t, e) || (Me = !0), t) : (bl & 106) === 0 || (bl & 1073741824) !== 0 && (Ut & 261930) === 0 ? (Me = !0, t.memoizedState = a) : (t = q5(), At.lanes |= t, Zl |= t, e);
  }
  function H2(t, e, a, l, n) {
    var o = at.p;
    at.p = o !== 0 && 8 > o ? o : 8;
    var s = J.T, b = {};
    b.types = s !== null ? s.types : null, J.T = b, Bc(t, !1, e, a);
    try {
      var x = n(), O = J.S;
      if (O !== null && O(b, x), x !== null && typeof x == "object" && typeof x.then == "function") {
        var D = Jg(
          x,
          l
        );
        Qo(
          t,
          e,
          D,
          ua(t)
        );
      } else
        Qo(
          t,
          e,
          l,
          ua(t)
        );
    } catch (P) {
      Qo(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: P },
        ua()
      );
    } finally {
      at.p = o, s !== null && b.types !== null && (s.types = b.types), J.T = s;
    }
  }
  function am() {
  }
  function qc(t, e, a, l) {
    if (t.tag !== 5) throw Error(c(476));
    var n = N2(t).queue;
    H2(
      t,
      n,
      e,
      ht,
      a === null ? am : function() {
        return Y2(t), a(l);
      }
    );
  }
  function N2(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: ht,
      baseState: ht,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gl,
        lastRenderedState: ht
      },
      next: null
    };
    var a = {};
    return e.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gl,
        lastRenderedState: a
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Y2(t) {
    var e = N2(t);
    e.next === null && (e = t.alternate.memoizedState), Qo(
      t,
      e.next.queue,
      {},
      ua()
    );
  }
  function Lc() {
    return _e(Zi);
  }
  function _2() {
    return ve().memoizedState;
  }
  function D2() {
    return ve().memoizedState;
  }
  function lm(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var a = ua();
          t = Ul(a);
          var l = ql(e, t, a);
          l !== null && (ta(l, e, a), Bo(l, e, a)), e = { cache: bc() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function nm(t, e, a) {
    var l = ua();
    a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, m0(t) ? X2(e, a) : (a = ic(t, e, a, l), a !== null && (ta(a, t, l), U2(a, e, l)));
  }
  function R2(t, e, a) {
    var l = ua();
    Qo(t, e, a, l);
  }
  function Qo(t, e, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (m0(t)) X2(e, n);
    else {
      var o = t.alternate;
      if (t.lanes === 0 && (o === null || o.lanes === 0) && (o = e.lastRenderedReducer, o !== null))
        try {
          var s = e.lastRenderedState, b = o(s, a);
          if (n.hasEagerState = !0, n.eagerState = b, la(b, s))
            return Qr(t, e, n, 0), ee === null && Zr(), !1;
        } catch {
        }
      if (a = ic(t, e, n, l), a !== null)
        return ta(a, t, l), U2(a, e, l), !0;
    }
    return !1;
  }
  function Bc(t, e, a, l) {
    if (l = {
      lane: 2,
      revertLane: Hs(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, m0(t)) {
      if (e) throw Error(c(479));
    } else
      e = ic(
        t,
        a,
        l,
        2
      ), e !== null && ta(e, t, 2);
  }
  function m0(t) {
    var e = t.alternate;
    return t === At || e !== null && e === At;
  }
  function X2(t, e) {
    Ti = c0 = !0;
    var a = t.pending;
    a === null ? e.next = e : (e.next = a.next, a.next = e), t.pending = e;
  }
  function U2(t, e, a) {
    if ((a & 4194048) !== 0) {
      var l = e.lanes;
      l &= t.pendingLanes, a |= l, e.lanes = a, ho(t, a);
    }
  }
  var p0 = {
    readContext: _e,
    use: d0,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useLayoutEffect: he,
    useInsertionEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useSyncExternalStore: he,
    useId: he,
    useHostTransitionStatus: he,
    useFormState: he,
    useActionState: he,
    useOptimistic: he,
    useMemoCache: he,
    useCacheRefresh: he,
    useEffectEvent: he
  }, q2 = {
    readContext: _e,
    use: d0,
    useCallback: function(t, e) {
      return Ve().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: _e,
    useEffect: M2,
    useImperativeHandle: function(t, e, a) {
      a = a != null ? a.concat([t]) : null, b0(
        4194308,
        4,
        w2.bind(null, e, t),
        a
      );
    },
    useLayoutEffect: function(t, e) {
      return b0(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      b0(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var a = Ve();
      e = e === void 0 ? null : e;
      var l = t();
      if (On) {
        Ea(!0);
        try {
          t();
        } finally {
          Ea(!1);
        }
      }
      return a.memoizedState = [l, e], l;
    },
    useReducer: function(t, e, a) {
      var l = Ve();
      if (a !== void 0) {
        var n = a(e);
        if (On) {
          Ea(!0);
          try {
            a(e);
          } finally {
            Ea(!1);
          }
        }
      } else n = e;
      return l.memoizedState = l.baseState = n, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: n
      }, l.queue = t, t = t.dispatch = nm.bind(
        null,
        At,
        t
      ), [l.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ve();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = _c(t);
      var e = t.queue, a = R2.bind(null, At, e);
      return e.dispatch = a, [t.memoizedState, a];
    },
    useDebugValue: Xc,
    useDeferredValue: function(t, e) {
      var a = Ve();
      return Uc(a, t, e);
    },
    useTransition: function() {
      var t = _c(!1);
      return t = H2.bind(
        null,
        At,
        t.queue,
        !0,
        !1
      ), Ve().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, a) {
      var l = At, n = Ve();
      if (_t) {
        if (a === void 0)
          throw Error(c(407));
        a = a();
      } else {
        if (a = e(), ee === null)
          throw Error(c(349));
        (Ut & 127) !== 0 || o2(l, e, a);
      }
      n.memoizedState = a;
      var o = { value: a, getSnapshot: e };
      return n.queue = o, M2(u2.bind(null, l, o, t), [
        t
      ]), l.flags |= 2048, Ci(
        9,
        { destroy: void 0 },
        r2.bind(
          null,
          l,
          o,
          a,
          e
        ),
        null
      ), a;
    },
    useId: function() {
      var t = Ve(), e = ee.identifierPrefix;
      if (_t) {
        var a = Za, l = Va;
        a = (l & ~(1 << 32 - Be(l) - 1)).toString(32) + a, e = "_" + e + "R_" + a, a = s0++, 0 < a && (e += "H" + a.toString(32)), e += "_";
      } else
        a = Fg++, e = "_" + e + "r_" + a.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Lc,
    useFormState: p2,
    useActionState: p2,
    useOptimistic: function(t) {
      var e = Ve();
      e.memoizedState = e.baseState = t;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = a, e = Bc.bind(
        null,
        At,
        !0,
        a
      ), a.dispatch = e, [t, e];
    },
    useMemoCache: Hc,
    useCacheRefresh: function() {
      return Ve().memoizedState = lm.bind(
        null,
        At
      );
    },
    useEffectEvent: function(t) {
      var e = Ve(), a = { impl: t };
      return e.memoizedState = a, function() {
        if ((Wt & 2) !== 0)
          throw Error(c(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, L2 = {
    readContext: _e,
    use: d0,
    useCallback: E2,
    useContext: _e,
    useEffect: Rc,
    useImperativeHandle: C2,
    useInsertionEffect: $2,
    useLayoutEffect: T2,
    useMemo: A2,
    useReducer: h0,
    useRef: z2,
    useState: function() {
      return h0(gl);
    },
    useDebugValue: Xc,
    useDeferredValue: function(t, e) {
      var a = ve();
      return O2(
        a,
        te.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = h0(gl)[0], e = ve().memoizedState;
      return [
        typeof t == "boolean" ? t : Zo(t),
        e
      ];
    },
    useSyncExternalStore: i2,
    useId: _2,
    useHostTransitionStatus: Lc,
    useFormState: v2,
    useActionState: v2,
    useOptimistic: function(t, e) {
      var a = ve();
      return f2(a, te, t, e);
    },
    useMemoCache: Hc,
    useCacheRefresh: D2,
    useEffectEvent: S2
  }, im = {
    readContext: _e,
    use: d0,
    useCallback: E2,
    useContext: _e,
    useEffect: Rc,
    useImperativeHandle: C2,
    useInsertionEffect: $2,
    useLayoutEffect: T2,
    useMemo: A2,
    useReducer: Yc,
    useRef: z2,
    useState: function() {
      return Yc(gl);
    },
    useDebugValue: Xc,
    useDeferredValue: function(t, e) {
      var a = ve();
      return te === null ? Uc(a, t, e) : O2(
        a,
        te.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Yc(gl)[0], e = ve().memoizedState;
      return [
        typeof t == "boolean" ? t : Zo(t),
        e
      ];
    },
    useSyncExternalStore: i2,
    useId: _2,
    useHostTransitionStatus: Lc,
    useFormState: x2,
    useActionState: x2,
    useOptimistic: function(t, e) {
      var a = ve();
      return te !== null ? f2(a, te, t, e) : (a.baseState = t, [t, a.queue.dispatch]);
    },
    useMemoCache: Hc,
    useCacheRefresh: D2,
    useEffectEvent: S2
  };
  function jc(t, e, a, l) {
    e = t.memoizedState, a = a(l, e), a = a == null ? e : _({}, e, a), t.memoizedState = a, t.lanes === 0 && (t.updateQueue.baseState = a);
  }
  var kc = {
    enqueueSetState: function(t, e, a) {
      t = t._reactInternals;
      var l = ua(), n = Ul(l);
      n.payload = e, a != null && (n.callback = a), e = ql(t, n, l), e !== null && (ta(e, t, l), Bo(e, t, l));
    },
    enqueueReplaceState: function(t, e, a) {
      t = t._reactInternals;
      var l = ua(), n = Ul(l);
      n.tag = 1, n.payload = e, a != null && (n.callback = a), e = ql(t, n, l), e !== null && (ta(e, t, l), Bo(e, t, l));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var a = ua(), l = Ul(a);
      l.tag = 2, e != null && (l.callback = e), e = ql(t, l, a), e !== null && (ta(e, t, a), Bo(e, t, a));
    }
  };
  function B2(t, e, a, l, n, o, s) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(l, o, s) : e.prototype && e.prototype.isPureReactComponent ? !Yo(a, l) || !Yo(n, o) : !0;
  }
  function j2(t, e, a, l) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, l), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, l), e.state !== t && kc.enqueueReplaceState(e, e.state, null);
  }
  function Hn(t, e) {
    var a = e;
    if ("ref" in e) {
      a = {};
      for (var l in e)
        l !== "ref" && (a[l] = e[l]);
    }
    if (t = t.defaultProps) {
      a === e && (a = _({}, a));
      for (var n in t)
        a[n] === void 0 && (a[n] = t[n]);
    }
    return a;
  }
  function k2(t) {
    Vr(t);
  }
  function G2(t) {
    console.error(t);
  }
  function V2(t) {
    Vr(t);
  }
  function v0(t, e) {
    try {
      var a = t.onUncaughtError;
      a(e.value, { componentStack: e.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Z2(t, e, a) {
    try {
      var l = t.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function Gc(t, e, a) {
    return a = Ul(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      v0(t, e);
    }, a;
  }
  function Q2(t) {
    return t = Ul(t), t.tag = 3, t;
  }
  function W2(t, e, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var o = l.value;
      t.payload = function() {
        return n(o);
      }, t.callback = function() {
        Z2(e, a, l);
      };
    }
    var s = a.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (t.callback = function() {
      Z2(e, a, l), typeof n != "function" && (Ql === null ? Ql = /* @__PURE__ */ new Set([this]) : Ql.add(this));
      var b = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function om(t, e, a, l, n) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (e = a.alternate, e !== null && Sn(
        e,
        a,
        n,
        !0
      ), a = De.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return je === null ? q0() : a.alternate === null && be === 0 && (be = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, l === n0 ? a.flags |= 16384 : (e = a.updateQueue, e === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : e.add(l), Es(t, l, n)), !1;
          case 22:
            return a.flags |= 65536, l === n0 ? a.flags |= 16384 : (e = a.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = e) : (a = e.retryQueue, a === null ? e.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), Es(t, l, n)), !1;
        }
        throw Error(c(435, a.tag));
      }
      return Es(t, l, n), q0(), !1;
    }
    if (_t)
      return e = De.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, l !== sc && (t = Error(c(422), { cause: l }), Ro(va(t, a)))) : (l !== sc && (e = Error(c(423), {
        cause: l
      }), Ro(
        va(e, a)
      )), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, l = va(l, a), n = Gc(
        t.stateNode,
        l,
        n
      ), xc(t, n), be !== 4 && (be = 2)), !1;
    var o = Error(c(520), { cause: l });
    if (o = va(o, a), er === null ? er = [o] : er.push(o), be !== 4 && (be = 2), e === null) return !0;
    l = va(l, a), a = e;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, t = n & -n, a.lanes |= t, t = Gc(a.stateNode, l, t), xc(a, t), !1;
        case 1:
          if (e = a.type, o = a.stateNode, (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || o !== null && typeof o.componentDidCatch == "function" && (Ql === null || !Ql.has(o))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = Q2(n), W2(
              n,
              t,
              a,
              l
            ), xc(a, n), !1;
          break;
        case 22:
          if (a.memoizedState !== null)
            return a.flags |= 65536, !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var Vc = Error(c(461)), Me = !1;
  function Te(t, e, a, l) {
    e.child = t === null ? I1(e, null, a, l) : An(
      e,
      t.child,
      a,
      l
    );
  }
  function K2(t, e, a, l, n) {
    a = a.render;
    var o = e.ref;
    if ("ref" in l) {
      var s = {};
      for (var b in l)
        b !== "ref" && (s[b] = l[b]);
    } else s = l;
    return $n(e), l = Cc(
      t,
      e,
      a,
      s,
      o,
      n
    ), b = Ec(), t !== null && !Me ? (Ac(t, e, n), ml(t, e, n)) : (_t && b && Fr(e), e.flags |= 1, Te(t, e, l, n), e.child);
  }
  function J2(t, e, a, l, n) {
    if (t === null) {
      var o = a.type;
      return typeof o == "function" && !oc(o) && o.defaultProps === void 0 && a.compare === null ? (e.tag = 15, e.type = o, F2(
        t,
        e,
        o,
        l,
        n
      )) : (t = Kr(
        a.type,
        null,
        l,
        e,
        e.mode,
        n
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (o = t.child, !Pc(t, n)) {
      var s = o.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Yo, a(s, l) && t.ref === e.ref)
        return ml(t, e, n);
    }
    return e.flags |= 1, t = sl(o, l), t.ref = e.ref, t.return = e, e.child = t;
  }
  function F2(t, e, a, l, n) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (Yo(o, l) && t.ref === e.ref)
        if (Me = !1, e.pendingProps = l = o, Pc(t, n))
          (t.flags & 131072) !== 0 && (Me = !0);
        else
          return e.lanes = t.lanes, ml(t, e, n);
    }
    return Zc(
      t,
      e,
      a,
      l,
      n
    );
  }
  function I2(t, e, a, l) {
    var n = l.children, o = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (o = o !== null ? o.baseLanes | a : a, t !== null) {
          for (l = e.child = t.child, n = 0; l !== null; )
            n = n | l.lanes | l.childLanes, l = l.sibling;
          l = n & ~o;
        } else l = 0, e.child = null;
        return P2(
          t,
          e,
          o,
          a,
          l
        );
      }
      if ((a & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && a0(
          e,
          o !== null ? o.cachePool : null
        ), o !== null ? e2(e, o) : Mc(), a2(e);
      else
        return l = e.lanes = 536870912, P2(
          t,
          e,
          o !== null ? o.baseLanes | a : a,
          a,
          l
        );
    } else
      o !== null ? (a0(e, o.cachePool), e2(e, o), jl(), e.memoizedState = null) : (t !== null && a0(e, null), Mc(), jl());
    return Te(t, e, n, a), e.child;
  }
  function Wo(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function P2(t, e, a, l, n) {
    var o = mc();
    return o = o === null ? null : { parent: xe._currentValue, pool: o }, e.memoizedState = {
      baseLanes: a,
      cachePool: o
    }, t !== null && a0(e, null), Mc(), a2(e), t !== null && Sn(t, e, l, !0), e.childLanes = n, null;
  }
  function y0(t, e) {
    return e = x0(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function t5(t, e, a) {
    return An(e, t.child, null, a), t = y0(e, e.pendingProps), t.flags |= 2, na(e), e.memoizedState = null, t;
  }
  function rm(t, e, a) {
    var l = e.pendingProps, n = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (_t) {
        if (l.mode === "hidden")
          return t = y0(e, l), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, Wo(null, t);
        if ($c(e), (t = ae) ? (t = wd(
          t,
          za
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Nl !== null ? { id: Va, overflow: Za } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = X1(t), a.return = e, e.child = a, Ae = e, ae = null)) : t = null, t === null) throw _l(e);
        return e.lanes = 536870912, null;
      }
      return y0(e, l);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var s = o.dehydrated;
      if ($c(e), n)
        if (e.flags & 256)
          e.flags &= -257, e = t5(
            t,
            e,
            a
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(c(558));
      else if (Me || Sn(t, e, a, !1), n = (a & t.childLanes) !== 0, Me || n) {
        if (Ll.current === null) {
          if (l = ee, l !== null && (s = bo(l, a), s !== 0 && s !== o.retryLane))
            throw o.retryLane = s, yn(t, s), ta(l, t, s), Vc;
          q0();
        }
        e = t5(
          t,
          e,
          a
        );
      } else
        t = o.treeContext, ae = Sa(s.nextSibling), Ae = e, _t = !0, Yl = null, za = !1, t !== null && L1(e, t), e = y0(e, l), e.flags |= 134221824;
      return e;
    }
    return t = sl(t.child, {
      mode: l.mode,
      children: l.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ei(t, e) {
    var a = e.ref;
    if (a === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(c(284));
      (t === null || t.ref !== a) && (e.flags |= 4194816);
    }
  }
  function Zc(t, e, a, l, n) {
    return $n(e), a = Cc(
      t,
      e,
      a,
      l,
      void 0,
      n
    ), l = Ec(), t !== null && !Me ? (Ac(t, e, n), ml(t, e, n)) : (_t && l && Fr(e), e.flags |= 1, Te(t, e, a, n), e.child);
  }
  function e5(t, e, a, l, n, o) {
    return $n(e), e.updateQueue = null, a = n2(
      e,
      l,
      a,
      n
    ), l2(t), l = Ec(), t !== null && !Me ? (Ac(t, e, o), ml(t, e, o)) : (_t && l && Fr(e), e.flags |= 1, Te(t, e, a, o), e.child);
  }
  function a5(t, e, a, l, n) {
    if ($n(e), e.stateNode === null) {
      var o = vi, s = a.contextType;
      typeof s == "object" && s !== null && (o = _e(s)), o = new a(l, o), e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = kc, e.stateNode = o, o._reactInternals = e, o = e.stateNode, o.props = l, o.state = e.memoizedState, o.refs = {}, vc(e), s = a.contextType, o.context = typeof s == "object" && s !== null ? _e(s) : vi, o.state = e.memoizedState, s = a.getDerivedStateFromProps, typeof s == "function" && (jc(
        e,
        a,
        s,
        l
      ), o.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (s = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), s !== o.state && kc.enqueueReplaceState(o, o.state, null), ko(e, l, o, n), jo(), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308), l = !0;
    } else if (t === null) {
      o = e.stateNode;
      var b = e.memoizedProps, x = Hn(a, b);
      o.props = x;
      var O = o.context, D = a.contextType;
      s = vi, typeof D == "object" && D !== null && (s = _e(D));
      var P = a.getDerivedStateFromProps;
      D = typeof P == "function" || typeof o.getSnapshotBeforeUpdate == "function", b = e.pendingProps !== b, D || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (b || O !== s) && j2(
        e,
        o,
        l,
        s
      ), Xl = !1;
      var C = e.memoizedState;
      o.state = C, ko(e, l, o, n), jo(), O = e.memoizedState, b || C !== O || Xl ? (typeof P == "function" && (jc(
        e,
        a,
        P,
        l
      ), O = e.memoizedState), (x = Xl || B2(
        e,
        a,
        x,
        l,
        C,
        O,
        s
      )) ? (D || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = l, e.memoizedState = O), o.props = l, o.state = O, o.context = s, l = x) : (typeof o.componentDidMount == "function" && (e.flags |= 4194308), l = !1);
    } else {
      o = e.stateNode, yc(t, e), s = e.memoizedProps, D = Hn(a, s), o.props = D, P = e.pendingProps, C = o.context, O = a.contextType, x = vi, typeof O == "object" && O !== null && (x = _e(O)), b = a.getDerivedStateFromProps, (O = typeof b == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== P || C !== x) && j2(
        e,
        o,
        l,
        x
      ), Xl = !1, C = e.memoizedState, o.state = C, ko(e, l, o, n), jo();
      var N = e.memoizedState;
      s !== P || C !== N || Xl || t !== null && t.dependencies !== null && t0(t.dependencies) ? (typeof b == "function" && (jc(
        e,
        a,
        b,
        l
      ), N = e.memoizedState), (D = Xl || B2(
        e,
        a,
        D,
        l,
        C,
        N,
        x
      ) || t !== null && t.dependencies !== null && t0(t.dependencies)) ? (O || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, N, x), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(
        l,
        N,
        x
      )), typeof o.componentDidUpdate == "function" && (e.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), e.memoizedProps = l, e.memoizedState = N), o.props = l, o.state = N, o.context = x, l = D) : (typeof o.componentDidUpdate != "function" || s === t.memoizedProps && C === t.memoizedState || (e.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === t.memoizedProps && C === t.memoizedState || (e.flags |= 1024), l = !1);
    }
    return o = l, Ei(t, e), l = (e.flags & 128) !== 0, o || l ? (o = e.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : o.render(), e.flags |= 1, t !== null && l ? (e.child = An(
      e,
      t.child,
      null,
      n
    ), e.child = An(
      e,
      null,
      a,
      n
    )) : Te(t, e, a, n), e.memoizedState = o.state, t = e.child) : t = ml(
      t,
      e,
      n
    ), t;
  }
  function l5(t, e, a, l) {
    return zn(), e.flags |= 256, Te(t, e, a, l), e.child;
  }
  var Qc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Wc(t) {
    return { baseLanes: t, cachePool: Z1() };
  }
  function Kc(t, e, a) {
    return t = t !== null ? t.childLanes & ~a : 0, e && (t |= ra), t;
  }
  function n5(t, e, a) {
    var l = e.pendingProps, n = !1, o = (e.flags & 128) !== 0, s;
    if ((s = o) || (s = t !== null && t.memoizedState === null ? !1 : (Re.current & 2) !== 0), s && (n = !0, e.flags &= -129), s = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (_t) {
        if (n ? Bl(e) : jl(), (t = ae) ? (t = wd(
          t,
          za
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: Nl !== null ? { id: Va, overflow: Za } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = X1(t), a.return = e, e.child = a, Ae = e, ae = null)) : t = null, t === null) throw _l(e);
        return Ws(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return o = l.children, l = l.fallback, n ? (jl(), n = e.mode, o = x0(
        { mode: "hidden", children: o },
        n
      ), l = xn(
        l,
        n,
        a,
        null
      ), o.return = e, l.return = e, o.sibling = l, e.child = o, l = e.child, l.memoizedState = Wc(a), l.childLanes = Kc(
        t,
        s,
        a
      ), e.memoizedState = Qc, Wo(null, l)) : (Bl(e), Jc(e, o));
    }
    var b = t.memoizedState;
    if (b !== null) {
      var x = b.dehydrated;
      if (x !== null)
        return um(
          t,
          e,
          o,
          s,
          l,
          x,
          b,
          a
        );
    }
    return n ? (jl(), n = l.fallback, o = e.mode, b = t.child, x = b.sibling, l = sl(b, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = b.subtreeFlags & 1206910976, x !== null ? n = sl(x, n) : (n = xn(
      n,
      o,
      a,
      null
    ), n.flags |= 2), n.return = e, l.return = e, l.sibling = n, e.child = l, Wo(null, l), l = e.child, n = t.child.memoizedState, n === null ? n = Wc(a) : (o = n.cachePool, o !== null ? (b = xe._currentValue, o = o.parent !== b ? { parent: b, pool: b } : o) : o = Z1(), n = {
      baseLanes: n.baseLanes | a,
      cachePool: o
    }), l.memoizedState = n, l.childLanes = Kc(
      t,
      s,
      a
    ), e.memoizedState = Qc, Wo(t.child, l)) : (Bl(e), a = t.child, t = a.sibling, a = sl(a, {
      mode: "visible",
      children: l.children
    }), a.return = e, a.sibling = null, t !== null && (s = e.deletions, s === null ? (e.deletions = [t], e.flags |= 16) : s.push(t)), e.child = a, e.memoizedState = null, a);
  }
  function Jc(t, e) {
    return e = x0(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function x0(t, e) {
    return t = Je(22, t, null, e), t.lanes = 0, t;
  }
  function z0(t, e, a) {
    return An(e, t.child, null, a), t = Jc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function um(t, e, a, l, n, o, s, b) {
    if (a)
      return e.flags & 256 ? (Bl(e), e.flags &= -257, z0(
        t,
        e,
        b
      )) : e.memoizedState !== null ? (jl(), e.child = t.child, e.flags |= 128, null) : (jl(), o = n.fallback, s = e.mode, n = x0(
        { mode: "visible", children: n.children },
        s
      ), o = xn(
        o,
        s,
        b,
        null
      ), o.flags |= 2, n.return = e, o.return = e, n.sibling = o, e.child = n, An(e, t.child, null, b), n = e.child, n.memoizedState = Wc(b), n.childLanes = Kc(
        t,
        l,
        b
      ), e.memoizedState = Qc, Wo(null, n));
    if (Bl(e), Ws(o)) {
      if (l = o.nextSibling && o.nextSibling.dataset, l) var x = l.dgst;
      return l = x, l !== "" && (n = Error(c(419)), n.stack = "", n.digest = l, Ro({ value: n, source: null, stack: null })), z0(
        t,
        e,
        b
      );
    }
    if (Me || Sn(t, e, b, !1), l = (b & t.childLanes) !== 0, Me || l) {
      if (Ll.current !== null)
        return z0(
          t,
          e,
          b
        );
      if (l = ee, l !== null && (n = bo(
        l,
        b
      ), n !== 0 && n !== s.retryLane))
        throw s.retryLane = n, yn(t, n), ta(l, t, n), Vc;
      return Qs(o) || q0(), z0(
        t,
        e,
        b
      );
    }
    return Qs(o) ? (e.flags |= 192, e.child = t.child, null) : (t = s.treeContext, ae = Sa(o.nextSibling), Ae = e, _t = !0, Yl = null, za = !1, t !== null && L1(e, t), e = Jc(
      e,
      n.children
    ), e.flags |= 134221824, e);
  }
  function i5(t, e, a) {
    t.lanes |= e;
    var l = t.alternate;
    l !== null && (l.lanes |= e), Pr(t.return, e, a);
  }
  function o5(t) {
    for (var e = null; t !== null; ) {
      var a = t.alternate;
      a !== null && u0(a) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function M0(t, e, a, l, n, o) {
    var s = t.memoizedState;
    s === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: n,
      treeForkCount: o
    } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = a, s.tailMode = n, s.treeForkCount = o);
  }
  function Fc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var a = e.sibling;
      e.sibling = t.child, t.child = e, e = a;
    }
  }
  function Ic(t, e, a) {
    var l = e.pendingProps, n = l.revealOrder, o = l.tail;
    l = l.children;
    var s = Re.current;
    if (e.flags & 128)
      return Go(e, s), null;
    var b = (s & 2) !== 0;
    if (b ? (s = s & 1 | 2, e.flags |= 128) : s &= 1, Go(e, s), n === "backwards" && t !== null ? (Fc(t), Te(t, e, l, a), Fc(t)) : Te(t, e, l, a), l = _t ? Do : 0, !b && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && i5(t, a, e);
        else if (t.tag === 19)
          i5(t, a, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (n) {
      case "backwards":
        a = o5(e.child), a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null, Fc(e)), M0(
          e,
          !0,
          n,
          null,
          o,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (a = null, n = e.child, e.child = null; n !== null; ) {
          if (t = n.alternate, t !== null && u0(t) === null) {
            e.child = n;
            break;
          }
          t = n.sibling, n.sibling = a, a = n, n = t;
        }
        M0(
          e,
          !0,
          a,
          null,
          o,
          l
        );
        break;
      case "together":
        M0(
          e,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        a = o5(e.child), a === null ? (n = e.child, e.child = null) : (n = a.sibling, a.sibling = null), M0(
          e,
          !1,
          n,
          a,
          o,
          l
        );
    }
    return e.child;
  }
  function r5(t, e, a) {
    var l = e.pendingProps;
    return Dl(e, e.type, l.value), Te(t, e, l.children, a), e.child;
  }
  function ml(t, e, a) {
    if (t !== null && (e.dependencies = t.dependencies), Zl |= e.lanes, (a & e.childLanes) === 0)
      if (t !== null) {
        if (Sn(
          t,
          e,
          a,
          !1
        ), (a & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(c(153));
    if (e.child !== null) {
      for (t = e.child, a = sl(t, t.pendingProps), e.child = a, a.return = e; t.sibling !== null; )
        t = t.sibling, a = a.sibling = sl(t, t.pendingProps), a.return = e;
      a.sibling = null;
    }
    return e.child;
  }
  function Pc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && t0(t)));
  }
  function cm(t, e, a) {
    switch (e.tag) {
      case 3:
        Jt(e, e.stateNode.containerInfo), Dl(e, xe, t.memoizedState.cache), zn();
        break;
      case 27:
      case 5:
        oe(e);
        break;
      case 4:
        Jt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Dl(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, $c(e), null;
        break;
      case 13:
        var l = e.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return Bl(e), e.flags |= 128, null;
          l = Sn(
            t,
            e,
            a,
            !1
          );
          var n = e.child.childLanes;
          return l || (a & n) !== 0 ? n5(t, e, a) : (Bl(e), t = ml(
            t,
            e,
            a
          ), t !== null ? t.sibling : null);
        }
        Bl(e);
        break;
      case 19:
        if (e.flags & 128)
          return Ic(
            t,
            e,
            a
          );
        if (n = (t.flags & 128) !== 0, l = (a & e.childLanes) !== 0, l || (Sn(
          t,
          e,
          a,
          !1
        ), l = (a & e.childLanes) !== 0), n) {
          if (l)
            return Ic(
              t,
              e,
              a
            );
          e.flags |= 128;
        }
        if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), Go(e, Re.current), l) break;
        return null;
      case 22:
        return e.lanes = 0, I2(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        Dl(e, xe, t.memoizedState.cache);
    }
    return ml(t, e, a);
  }
  function u5(t, e, a) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        Me = !0;
      else {
        if (!Pc(t, a) && (e.flags & 128) === 0)
          return Me = !1, cm(
            t,
            e,
            a
          );
        Me = (t.flags & 131072) !== 0;
      }
    else
      Me = !1, _t && (e.flags & 1048576) !== 0 && q1(e, Do, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var l = e.pendingProps;
          if (t = Cn(e.elementType), e.type = t, typeof t == "function")
            oc(t) ? (l = Hn(t, l), e.tag = 1, e = a5(
              null,
              e,
              t,
              l,
              a
            )) : (e.tag = 0, e = Zc(
              null,
              e,
              t,
              l,
              a
            ));
          else {
            if (t != null) {
              var n = t.$$typeof;
              if (n === R) {
                e.tag = 11, e = K2(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              } else if (n === ot) {
                e.tag = 14, e = J2(
                  null,
                  e,
                  t,
                  l,
                  a
                );
                break t;
              } else if (n === it) {
                e.tag = 10, e.type = t, e = r5(
                  null,
                  e,
                  a
                );
                break t;
              }
            }
            throw e = st(t) || t, Error(c(306, e, ""));
          }
        }
        return e;
      case 0:
        return Zc(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 1:
        return l = e.type, n = Hn(
          l,
          e.pendingProps
        ), a5(
          t,
          e,
          l,
          n,
          a
        );
      case 3:
        t: {
          if (Jt(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(c(387));
          l = e.pendingProps;
          var o = e.memoizedState;
          n = o.element, yc(t, e), ko(e, l, null, a);
          var s = e.memoizedState;
          if (l = s.cache, Dl(e, xe, l), l !== o.cache && hc(
            e,
            [xe],
            a,
            !0
          ), jo(), l = s.element, o.isDehydrated)
            if (o = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, e.updateQueue.baseState = o, e.memoizedState = o, e.flags & 256) {
              e = l5(
                t,
                e,
                l,
                a
              );
              break t;
            } else if (l !== n) {
              n = va(
                Error(c(424)),
                e
              ), Ro(n), e = l5(
                t,
                e,
                l,
                a
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, ae = Sa(t.firstChild), Ae = e, _t = !0, Yl = null, za = !0, a = I1(
                e,
                null,
                l,
                a
              ), e.child = a; a; )
                a.flags = a.flags & -3 | 134221824, a = a.sibling;
          else {
            if (zn(), l === n) {
              e = ml(
                t,
                e,
                a
              );
              break t;
            }
            Te(t, e, l, a);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ei(t, e), t === null ? (a = Yd(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = a : _t || (e.stateNode = dd(
          e.type,
          e.pendingProps,
          Et.current,
          e
        )) : e.memoizedState = Yd(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return oe(e), t === null && _t && (l = e.stateNode = Ad(
          e.type,
          e.pendingProps,
          Et.current
        ), Ae = e, za = !0, n = ae, Jl(e.type) ? (Ks = n, ae = Sa(l.firstChild)) : ae = n), Te(
          t,
          e,
          e.pendingProps.children,
          a
        ), Ei(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && _t && ((n = l = ae) && (l = lp(
          l,
          e.type,
          e.pendingProps,
          za
        ), l !== null ? (e.stateNode = l, Ae = e, ae = Sa(l.firstChild), za = !1, n = !0) : n = !1), n || _l(e)), oe(e), n = e.type, o = e.pendingProps, s = t !== null ? t.memoizedProps : null, l = o.children, Ls(n, o) ? l = null : s !== null && Ls(n, s) && (e.flags |= 32), e.memoizedState !== null && (n = Cc(
          t,
          e,
          Ig,
          null,
          null,
          a
        ), Zi._currentValue = n), Ei(t, e), Te(t, e, l, a), e.child;
      case 6:
        return t === null && _t && ((t = a = ae) && (a = np(
          a,
          e.pendingProps,
          za
        ), a !== null ? (e.stateNode = a, Ae = e, ae = null, t = !0) : t = !1), t || _l(e)), null;
      case 13:
        return n5(t, e, a);
      case 4:
        return Jt(
          e,
          e.stateNode.containerInfo
        ), l = e.pendingProps, t === null ? e.child = An(
          e,
          null,
          l,
          a
        ) : Te(t, e, l, a), e.child;
      case 11:
        return K2(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 7:
        return l = e.pendingProps, Ei(t, e), Te(t, e, l, a), e.child;
      case 8:
        return Te(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 12:
        return Te(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 10:
        return r5(t, e, a);
      case 9:
        return n = e.type._context, l = e.pendingProps.children, $n(e), n = _e(n), l = l(n), e.flags |= 1, Te(t, e, l, a), e.child;
      case 14:
        return J2(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 15:
        return F2(
          t,
          e,
          e.type,
          e.pendingProps,
          a
        );
      case 19:
        return Ic(t, e, a);
      case 31:
        return rm(t, e, a);
      case 22:
        return I2(
          t,
          e,
          a,
          e.pendingProps
        );
      case 24:
        return $n(e), l = _e(xe), t === null ? (n = mc(), n === null && (n = ee, o = bc(), n.pooledCache = o, o.refCount++, o !== null && (n.pooledCacheLanes |= a), n = o), e.memoizedState = { parent: l, cache: n }, vc(e), Dl(e, xe, n)) : ((t.lanes & a) !== 0 && (yc(t, e), ko(e, null, null, a), jo()), n = t.memoizedState, o = e.memoizedState, n.parent !== l ? (n = { parent: l, cache: l }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), Dl(e, xe, l)) : (l = o.cache, Dl(e, xe, l), l !== n.cache && hc(
          e,
          [xe],
          a,
          !0
        ))), Te(
          t,
          e,
          e.pendingProps.children,
          a
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = e.pendingProps, l.name != null && l.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : _t && Fr(e), t !== null && t.memoizedProps.name !== l.name ? e.flags |= 4194816 : Ei(t, e), Te(t, e, l.children, a), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function pl(t) {
    t.flags |= 4;
  }
  function ts(t, e, a, l, n) {
    var o;
    if ((o = (t.mode & 32) !== 0) && (o = a === null ? Xd(e, l) : Xd(e, l) && (l.src !== a.src || l.srcSet !== a.srcSet)), o) {
      if (t.flags |= 16777216, (n & 335544128) === n)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (k5()) t.flags |= 8192;
        else
          throw En = n0, pc;
    } else t.flags &= -16777217;
  }
  function c5(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Ud(e))
      if (k5()) t.flags |= 8192;
      else
        throw En = n0, pc;
  }
  function S0(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? so() : 536870912, t.lanes |= e, Yi |= e);
  }
  function Ko(t, e) {
    if (!_t)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var a = t.tail, l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (e = t.tail, a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t.tail = null : a.sibling = null;
      }
  }
  function le(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, a = 0, l = 0;
    if (e)
      for (var n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags & 1206910976, l |= n.flags & 1206910976, n.return = t, n = n.sibling;
    else
      for (n = t.child; n !== null; )
        a |= n.lanes | n.childLanes, l |= n.subtreeFlags, l |= n.flags, n.return = t, n = n.sibling;
    return t.subtreeFlags |= l, t.childLanes = a, e;
  }
  function sm(t, e, a) {
    var l = e.pendingProps;
    switch (cc(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return le(e), null;
      case 1:
        return le(e), null;
      case 3:
        return a = e.stateNode, l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), hl(xe), Vt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (t === null || t.child === null) && (zi(e) ? pl(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, fc())), le(e), null;
      case 26:
        var n = e.type, o = e.memoizedState;
        return t === null ? (pl(e), o !== null ? (le(e), c5(e, o)) : (le(e), ts(
          e,
          n,
          null,
          l,
          a
        ))) : o ? o !== t.memoizedState ? (pl(e), le(e), c5(e, o)) : (le(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== l && pl(e), le(e), ts(
          e,
          n,
          t,
          l,
          a
        )), null;
      case 27:
        if (re(e), a = Et.current, n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && pl(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return le(e), e.subtreeFlags &= -33554433, null;
          }
          t = Dt.current, zi(e) ? B1(e) : (t = Ad(n, l, a), e.stateNode = t, pl(e));
        }
        return le(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (re(e), n = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== l && pl(e);
        else {
          if (!l) {
            if (e.stateNode === null)
              throw Error(c(166));
            return le(e), e.subtreeFlags &= -33554433, null;
          }
          if (o = Dt.current, zi(e))
            B1(e);
          else {
            var s = or(
              Et.current
            );
            switch (o) {
              case 1:
                o = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                o = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    o = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    o = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    o = s.createElement("div"), o.innerHTML = "<script><\/script>", o = o.removeChild(
                      o.firstChild
                    );
                    break;
                  case "select":
                    o = typeof l.is == "string" ? s.createElement("select", {
                      is: l.is
                    }) : s.createElement("select"), l.multiple ? o.multiple = !0 : l.size && (o.size = l.size);
                    break;
                  default:
                    o = typeof l.is == "string" ? s.createElement(n, { is: l.is }) : s.createElement(n);
                }
            }
            o[$e] = e, o[Ye] = l;
            t: for (s = e.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                o.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === e) break t;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === e)
                  break t;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            e.stateNode = o;
            t: switch (Ue(o, n, l), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break t;
              case "img":
                l = !0;
                break t;
              default:
                l = !1;
            }
            l && pl(e);
          }
        }
        return le(e), e.subtreeFlags &= -33554433, ts(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          a
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== l && pl(e);
        else {
          if (typeof l != "string" && e.stateNode === null)
            throw Error(c(166));
          if (t = Et.current, zi(e)) {
            if (t = e.stateNode, a = e.memoizedProps, l = null, n = Ae, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            t[$e] = e, t = !!(t.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || ud(t.nodeValue, a)), t || _l(e, !0);
          } else
            t = or(t).createTextNode(
              l
            ), t[$e] = e, e.stateNode = t;
        }
        return le(e), null;
      case 31:
        if (a = e.memoizedState, t === null || t.memoizedState !== null) {
          if (l = zi(e), a !== null) {
            if (t === null) {
              if (!l) throw Error(c(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(c(557));
              t[$e] = e;
            } else
              zn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            le(e), t = !1;
          } else
            a = fc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a), t = !0;
          if (!t)
            return e.flags & 256 ? (na(e), e) : (na(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(c(558));
        }
        return le(e), null;
      case 13:
        if (l = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (n = zi(e), l !== null && l.dehydrated !== null) {
            if (t === null) {
              if (!n) throw Error(c(318));
              if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(c(317));
              n[$e] = e;
            } else
              zn(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            le(e), n = !1;
          } else
            n = fc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return e.flags & 256 ? (na(e), e) : (na(e), null);
        }
        return na(e), (e.flags & 128) !== 0 ? (e.lanes = a, e) : (a = l !== null, t = t !== null && t.memoizedState !== null, a && (l = e.child, n = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (n = l.alternate.memoizedState.cachePool.pool), o = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (o = l.memoizedState.cachePool.pool), o !== n && (l.flags |= 2048)), a !== t && a && (e.child.flags |= 8192), S0(e, e.updateQueue), le(e), null);
      case 4:
        return Vt(), t === null && Ds(e.stateNode.containerInfo), e.flags |= 67108864, le(e), null;
      case 10:
        return hl(e.type), le(e), null;
      case 19:
        if (Tc(e), l = e.memoizedState, l === null) return le(e), null;
        if (n = (e.flags & 128) !== 0, o = l.rendering, o === null)
          if (n) Ko(l, !1);
          else {
            if (be !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (o = u0(t), o !== null) {
                  for (e.flags |= 128, Ko(l, !1), t = o.updateQueue, e.updateQueue = t, S0(e, t), e.subtreeFlags = 0, t = a, a = e.child; a !== null; )
                    R1(a, t), a = a.sibling;
                  return Go(
                    e,
                    Re.current & 1 | 2
                  ), _t && fl(e, l.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            l.tail !== null && de() > D0 && (e.flags |= 128, n = !0, Ko(l, !1), e.lanes = 4194304);
          }
        else {
          if (!n)
            if (t = u0(o), t !== null) {
              if (e.flags |= 128, n = !0, t = t.updateQueue, e.updateQueue = t, S0(e, t), Ko(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !o.alternate && !_t)
                return le(e), null;
            } else
              2 * de() - l.renderingStartTime > D0 && a !== 536870912 && (e.flags |= 128, n = !0, Ko(l, !1), e.lanes = 4194304);
          l.isBackwards ? (o.sibling = e.child, e.child = o) : (t = l.last, t !== null ? t.sibling = o : e.child = o, l.last = o);
        }
        if (l.tail !== null) {
          t = l.tail;
          t: {
            for (a = t; a !== null; ) {
              if (a.alternate !== null) {
                a = !1;
                break t;
              }
              a = a.sibling;
            }
            a = !0;
          }
          return l.rendering = t, l.tail = t.sibling, l.renderingStartTime = de(), t.sibling = null, o = Re.current, o = n ? o & 1 | 2 : o & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !a || _t ? Go(e, o) : (a = o, pt(De, e), pt(Re, a), je === null && (je = e)), _t && fl(e, l.treeForkCount), t;
        }
        return le(e), null;
      case 22:
      case 23:
        return na(e), Sc(), l = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== l && (e.flags |= 8192) : l && (e.flags |= 8192), l ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (le(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : le(e), a = e.updateQueue, a !== null && S0(e, a.retryQueue), a = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), l = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), l !== a && (e.flags |= 2048), t !== null && wt(wn), null;
      case 24:
        return a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), hl(xe), le(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, le(e), null;
    }
    throw Error(c(156, e.tag));
  }
  function fm(t, e) {
    switch (cc(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return hl(xe), Vt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return re(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (na(e), e.alternate === null)
            throw Error(c(340));
          zn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (na(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(c(340));
          zn();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Tc(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Vt(), null;
      case 10:
        return hl(e.type), null;
      case 22:
      case 23:
        return na(e), Sc(), t !== null && wt(wn), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return hl(xe), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function s5(t, e) {
    switch (cc(e), e.tag) {
      case 3:
        hl(xe), Vt();
        break;
      case 26:
      case 27:
      case 5:
        re(e);
        break;
      case 4:
        Vt();
        break;
      case 31:
        e.memoizedState !== null && na(e);
        break;
      case 13:
        na(e);
        break;
      case 19:
        Tc(e);
        break;
      case 10:
        hl(e.type);
        break;
      case 22:
      case 23:
        na(e), Sc(), t !== null && wt(wn);
        break;
      case 24:
        hl(xe);
    }
  }
  function Jo(t, e) {
    try {
      var a = e.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & t) === t) {
            l = void 0;
            var o = a.create, s = a.inst;
            l = o(), s.destroy = l;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (b) {
      It(e, e.return, b);
    }
  }
  function kl(t, e, a) {
    try {
      var l = e.updateQueue, n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var o = n.next;
        l = o;
        do {
          if ((l.tag & t) === t) {
            var s = l.inst, b = s.destroy;
            if (b !== void 0) {
              s.destroy = void 0, n = e;
              var x = a, O = b;
              try {
                O();
              } catch (D) {
                It(
                  n,
                  x,
                  D
                );
              }
            }
          }
          l = l.next;
        } while (l !== o);
      }
    } catch (D) {
      It(e, e.return, D);
    }
  }
  function f5(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var a = t.stateNode;
      try {
        t2(e, a);
      } catch (l) {
        It(t, t.return, l);
      }
    }
  }
  function d5(t, e, a) {
    a.props = Hn(
      t.type,
      t.memoizedProps
    ), a.state = t.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      It(t, e, l);
    }
  }
  function Qa(t, e) {
    try {
      var a = t.ref;
      if (a !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var l = t.stateNode;
            break;
          case 30:
            var n = t.stateNode, o = ul(t.memoizedProps, n);
            (n.ref === null || n.ref.name !== o) && (n.ref = yd(o)), l = n.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var s = new ca(t);
              m(
                t.child,
                !1,
                ep,
                s,
                void 0,
                void 0
              ), t.stateNode = s;
            }
            l = t.stateNode;
            break;
          default:
            l = t.stateNode;
        }
        typeof a == "function" ? t.refCleanup = a(l) : a.current = l;
      }
    } catch (b) {
      It(t, e, b);
    }
  }
  function Xe(t, e) {
    var a = t.ref, l = t.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          It(t, e, n);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          It(t, e, n);
        }
      else a.current = null;
  }
  function $0(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var a = 0; a < e.length; a++)
        Td(
          t.stateNode,
          e[a]
        );
  }
  function h5(t) {
    for (var e = t.return; e !== null && (as(e) && Td(t.stateNode, e.stateNode), !es(e)); )
      e = e.return;
  }
  function Fo(t) {
    for (var e = t.return; e !== null && (as(e) && ap(t.stateNode, e.stateNode), !es(e)); )
      e = e.return;
  }
  function es(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function as(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function ls(t) {
    var e = t.type, a = t.memoizedProps, l = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break t;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      It(t, t.return, n);
    }
  }
  function ns(t, e, a) {
    try {
      var l = t.stateNode;
      Xm(l, t.type, a, e), l[Ye] = e;
    } catch (n) {
      It(t, t.return, n);
    }
  }
  function b5(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Jl(t.type) || t.tag === 4;
  }
  function is(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || b5(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Jl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function os(t, e, a, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(n, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, e.appendChild(n), a = a._reactRootContainer, a != null || e.onclick !== null || (e.onclick = Ke)), $0(t, l), Bt = !0;
    else if (n !== 4 && (n === 27 && ($0(t, l), l = null, Jl(t.type) && (a = t.stateNode, e = null)), t = t.child, t !== null))
      for (os(
        t,
        e,
        a,
        l
      ), t = t.sibling; t !== null; )
        os(
          t,
          e,
          a,
          l
        ), t = t.sibling;
  }
  function T0(t, e, a, l) {
    var n = t.tag;
    if (n === 5 || n === 6)
      n = t.stateNode, e ? a.insertBefore(n, e) : a.appendChild(n), $0(t, l), Bt = !0;
    else if (n !== 4 && (n === 27 && ($0(t, l), l = null, Jl(t.type) && (a = t.stateNode)), t = t.child, t !== null))
      for (T0(
        t,
        e,
        a,
        l
      ), t = t.sibling; t !== null; )
        T0(
          t,
          e,
          a,
          l
        ), t = t.sibling;
  }
  function g5(t) {
    var e = t.stateNode, a = t.memoizedProps;
    try {
      for (var l = t.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      Ue(e, l, a), e[$e] = t, e[Ye] = a;
    } catch (o) {
      It(t, t.return, o);
    }
  }
  var w0 = !1, ia = null;
  function m5(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (w0 = !0);
  }
  var Wa = null;
  function p5() {
    var t = Wa;
    return Wa = null, t;
  }
  var Fe = 0;
  function Ai(t, e, a, l, n) {
    return Fe = 0, v5(
      t.child,
      e,
      a,
      l,
      n
    );
  }
  function v5(t, e, a, l, n) {
    for (var o = !1; t !== null; ) {
      if (t.tag === 5) {
        var s = t.stateNode;
        if (l !== null) {
          var b = ks(s);
          l.push(b), b.view && (o = !0);
        } else
          o || ks(s).view && (o = !0);
        w0 = !0, pd(
          s,
          Fe === 0 ? e : e + "_" + Fe,
          a
        ), Fe++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && n || v5(
        t.child,
        e,
        a,
        l,
        n
      ) && (o = !0));
      t = t.sibling;
    }
    return o;
  }
  function Ka(t, e) {
    for (; t !== null; )
      t.tag === 5 ? vd(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Ka(
        t.child,
        e
      )), t = t.sibling;
  }
  function C0(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (C0(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(c(544));
          var a = e.name;
          e = cl(e.default, e.share), e !== "none" && (Ai(
            t,
            a,
            e,
            null,
            !1
          ) || Ka(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function rs(t, e) {
    if (t.tag === 30) {
      var a = t.stateNode, l = t.memoizedProps, n = ul(l, a), o = cl(
        l.default,
        a.paired ? l.share : l.enter
      );
      o !== "none" ? Ai(t, n, o, null, !1) ? (C0(t), a.paired || e || Xi(t, l.onEnter)) : Ka(t.child, !1) : C0(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        rs(t, e), t = t.sibling;
    else C0(t);
  }
  function us(t) {
    if (ia !== null && ia.size !== 0) {
      var e = ia;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var a = t.memoizedProps, l = a.name;
              if (l != null && l !== "auto") {
                var n = e.get(l);
                if (n !== void 0) {
                  var o = cl(
                    a.default,
                    a.share
                  );
                  if (o !== "none" && (Ai(
                    t,
                    l,
                    o,
                    null,
                    !1
                  ) ? (o = t.stateNode, n.paired = o, o.paired = n, Xi(t, a.onShare)) : Ka(t.child, !1)), e.delete(l), e.size === 0) break;
                }
              }
            }
            us(t);
          }
          t = t.sibling;
        }
    }
  }
  function cs(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, a = ul(e, t.stateNode), l = ia !== null ? ia.get(a) : void 0, n = cl(
        e.default,
        l !== void 0 ? e.share : e.exit
      );
      n !== "none" && (Ai(t, a, n, null, !1) ? l !== void 0 ? (n = t.stateNode, l.paired = n, n.paired = l, ia.delete(a), Xi(t, e.onShare)) : Xi(t, e.onExit) : Ka(t.child, !1)), ia !== null && us(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        cs(t), t = t.sibling;
    else
      ia !== null && us(t);
  }
  function y5(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, a = ul(e, t.stateNode);
        e = cl(e.default, e.update), t.flags &= -5, e !== "none" && Ai(
          t,
          a,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && y5(t);
      t = t.sibling;
    }
  }
  function ss(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Ka(t.child, !1));
          }
          ss(t);
        }
        t = t.sibling;
      }
  }
  function E0(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Ka(t.child, !1), ss(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        E0(t), t = t.sibling;
    else ss(t);
  }
  function x5(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Ka(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && x5(t), t = t.sibling;
  }
  function fs(t, e, a, l, n, o, s) {
    for (var b = !1; e !== null; ) {
      if (e.tag === 5) {
        var x = e.stateNode;
        if (o !== null && Fe < o.length) {
          var O = o[Fe], D = ks(x);
          (O.view || D.view) && (b = !0);
          var P;
          if (P = (t.flags & 4) === 0)
            if (D.clip) P = !0;
            else {
              P = O.rect;
              var C = D.rect;
              P = P.y !== C.y || P.x !== C.x || P.height !== C.height || P.width !== C.width;
            }
          P && (t.flags |= 4), D.abs ? D = !O.abs : (O = O.rect, D = D.rect, D = O.height !== D.height || O.width !== D.width), D && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && pd(
          x,
          Fe === 0 ? a : a + "_" + Fe,
          n
        ), b && (t.flags & 4) !== 0 || (Wa === null && (Wa = []), Wa.push(
          x,
          Fe === 0 ? l : l + "_" + Fe,
          e.memoizedProps
        )), Fe++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && s ? t.flags |= e.flags & 32 : fs(
        t,
        e.child,
        a,
        l,
        n,
        o,
        s
      ) && (b = !0));
      e = e.sibling;
    }
    return b;
  }
  function z5(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var a = t.memoizedProps, l = t.stateNode, n = ul(a, l), o = cl(a.default, a.update), s;
        s = t.memoizedState, t.memoizedState = null, l = t;
        var b = t.child;
        Fe = 0, n = fs(
          l,
          b,
          n,
          n,
          o,
          s,
          !1
        ), (t.flags & 4) !== 0 && n && Xi(t, a.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && z5(t);
      t = t.sibling;
    }
  }
  var Oe = !1, Kt = !1, Ja = !1, ds = !1, M5 = typeof WeakSet == "function" ? WeakSet : Set, He = null, Fa = !1, Io = !1, A0 = !1, hs = !1;
  function dm(t, e, a) {
    if (t = t.containerInfo, Us = Qi, t = w1(t), Pu(t)) {
      if ("selectionStart" in t)
        var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var n = l.getSelection && l.getSelection();
          if (n && n.rangeCount !== 0) {
            l = n.anchorNode;
            var o = n.anchorOffset, s = n.focusNode;
            n = n.focusOffset;
            try {
              l.nodeType, s.nodeType;
            } catch {
              l = null;
              break t;
            }
            var b = 0, x = -1, O = -1, D = 0, P = 0, C = t, N = null;
            e: for (; ; ) {
              for (var dt; C !== l || o !== 0 && C.nodeType !== 3 || (x = b + o), C !== s || n !== 0 && C.nodeType !== 3 || (O = b + n), C.nodeType === 3 && (b += C.nodeValue.length), (dt = C.firstChild) !== null; )
                N = C, C = dt;
              for (; ; ) {
                if (C === t) break e;
                if (N === l && ++D === o && (x = b), N === s && ++P === n && (O = b), (dt = C.nextSibling) !== null) break;
                C = N, N = C.parentNode;
              }
              C = dt;
            }
            l = x === -1 || O === -1 ? null : { start: x, end: O };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (qs = { focusedElem: t, selectionRange: l }, Qi = !1, a = (a & 335544064) === a, He = e, e = a ? 9270 : 1024; He !== null; ) {
      if (t = He, a && (l = t.deletions, l !== null))
        for (o = 0; o < l.length; o++)
          a && cs(l[o]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        a && m5(t), O0(a);
      else {
        if (t.tag === 22) {
          if (l = t.alternate, t.memoizedState !== null) {
            l !== null && l.memoizedState === null && a && cs(l), O0(a);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            a && m5(t), O0(a);
            continue;
          }
        }
        l = t.child, (t.subtreeFlags & e) !== 0 && l !== null ? (l.return = t, He = l) : (a && y5(t), O0(a));
      }
    }
    ia = null;
  }
  function O0(t) {
    for (; He !== null; ) {
      var e = He, a = t, l = e.alternate, n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((n & 1024) !== 0 && l !== null) {
            a = void 0, n = l.memoizedProps, l = l.memoizedState;
            var o = e.stateNode;
            try {
              var s = Hn(
                e.type,
                n
              );
              a = o.getSnapshotBeforeUpdate(
                s,
                l
              ), o.__reactInternalSnapshotBeforeUpdate = a;
            } catch (b) {
              It(e, e.return, b);
            }
          }
          break;
        case 3:
          if ((n & 1024) !== 0) {
            if (l = e.stateNode.containerInfo, a = l.nodeType, a === 9)
              Zs(l);
            else if (a === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Zs(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          a && l !== null && (a = ul(
            l.memoizedProps,
            l.stateNode
          ), n = e.memoizedProps, n = cl(n.default, n.update), n !== "none" && Ai(
            l,
            a,
            n,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((n & 1024) !== 0) throw Error(c(163));
      }
      if (l = e.sibling, l !== null) {
        l.return = e.return, He = l;
        break;
      }
      He = e.return;
    }
  }
  function S5(t, e, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ia(t, a), l & 4 && Jo(5, a);
        break;
      case 1:
        if (Ia(t, a), l & 4)
          if (t = a.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (s) {
              It(a, a.return, s);
            }
          else {
            var n = Hn(
              a.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                n,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              It(
                a,
                a.return,
                s
              );
            }
          }
        l & 64 && f5(a), l & 512 && Qa(a, a.return);
        break;
      case 3:
        if (Ia(t, a), l & 64 && (t = a.updateQueue, t !== null)) {
          if (e = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            t2(t, e);
          } catch (s) {
            It(a, a.return, s);
          }
        }
        break;
      case 27:
        e === null && l & 4 && g5(a);
      case 26:
      case 5:
        Ia(t, a), e === null && l & 4 && ls(a), l & 512 && Qa(a, a.return);
        break;
      case 12:
        Ia(t, a);
        break;
      case 31:
        Ia(t, a), l & 4 && C5(t, a);
        break;
      case 13:
        Ia(t, a), l & 4 && E5(t, a), l & 64 && (t = a.memoizedState, t !== null && (t = t.dehydrated, t !== null && (a = $m.bind(
          null,
          a
        ), ip(t, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || Oe, !l) {
          var o = e !== null && e.memoizedState !== null || Kt;
          e = Oe, n = Kt, Oe = l, (Kt = o) && !n ? (l = 2, (a.subtreeFlags & 8772) !== 0 && (l |= 1), _a(
            t,
            a,
            l
          )) : Ia(t, a), Oe = e, Kt = n;
        }
        break;
      case 30:
        Ia(t, a), l & 512 && Qa(a, a.return);
        break;
      case 7:
        l & 512 && Qa(a, a.return);
      default:
        Ia(t, a);
    }
  }
  function bs(t, e) {
    for (t = t.child; t !== null; )
      $5(t, e), t = t.sibling;
  }
  function $5(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var a = t.stateNode;
          if (e) {
            var l = a.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var n = t.stateNode, o = t.memoizedProps.style, s = o != null && o.hasOwnProperty("display") ? o.display : null;
            n.style.display = s == null || typeof s == "boolean" ? "" : ("" + s).trim();
          }
        } catch (x) {
          It(t, t.return, x);
        }
        gs(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Bt = !0;
        } catch (x) {
          It(t, t.return, x);
        }
        break;
      case 18:
        try {
          var b = t.stateNode;
          e ? md(b, !0) : md(t.stateNode, !1);
        } catch (x) {
          It(t, t.return, x);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && bs(t, e);
        break;
      default:
        bs(t, e);
    }
  }
  function gs(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var a = t, l = e;
          switch (a.tag) {
            case 4:
              $5(a, l);
              break t;
            case 22:
              a.memoizedState === null && gs(a, l);
              break t;
            default:
              gs(a, l);
          }
        }
        t = t.sibling;
      }
  }
  function T5(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, T5(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ja(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var ce = null, Ie = !1;
  function Na(t, e, a) {
    for (a = a.child; a !== null; )
      w5(t, e, a), a = a.sibling;
  }
  function w5(t, e, a) {
    if (Le && typeof Le.onCommitFiberUnmount == "function")
      try {
        Le.onCommitFiberUnmount(ie, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        Kt || Xe(a, e), Na(
          t,
          e,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && !Kt && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        Kt || Xe(a, e), Fo(a);
        var l = ce, n = Ie;
        Jl(a.type) && (ce = a.stateNode, Ie = !1), Na(
          t,
          e,
          a
        ), Od(
          a.stateNode,
          a.type,
          a.memoizedProps
        ), ce = l, Ie = n;
        break;
      case 5:
        Kt || Xe(a, e), Fo(a);
      case 6:
        if (a.tag === 6 && Fo(a), l = ce, n = Ie, ce = null, Na(
          t,
          e,
          a
        ), ce = l, Ie = n, ce !== null)
          if (Ie)
            try {
              (ce.nodeType === 9 ? ce.body : ce.nodeName === "HTML" ? ce.ownerDocument.body : ce).removeChild(a.stateNode), Bt = !0;
            } catch (o) {
              It(
                a,
                e,
                o
              );
            }
          else
            try {
              ce.removeChild(a.stateNode), Bt = !0;
            } catch (o) {
              It(
                a,
                e,
                o
              );
            }
        break;
      case 18:
        ce !== null && (Ie ? (t = ce, gd(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          a.stateNode
        ), Wi(t)) : gd(ce, a.stateNode));
        break;
      case 4:
        l = ce, n = Ie, ce = a.stateNode.containerInfo, Ie = !0, Na(
          t,
          e,
          a
        ), ce = l, Ie = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        kl(2, a, e), Kt || kl(4, a, e), Na(
          t,
          e,
          a
        );
        break;
      case 1:
        Kt || (Xe(a, e), l = a.stateNode, typeof l.componentWillUnmount == "function" && d5(
          a,
          e,
          l
        )), Na(
          t,
          e,
          a
        );
        break;
      case 21:
        Na(
          t,
          e,
          a
        );
        break;
      case 22:
        Kt = (l = Kt) || a.memoizedState !== null, Na(
          t,
          e,
          a
        ), Kt = l;
        break;
      case 30:
        Xe(a, e), Na(
          t,
          e,
          a
        );
        break;
      case 7:
        Kt || Xe(a, e), Na(
          t,
          e,
          a
        );
        break;
      default:
        Na(
          t,
          e,
          a
        );
    }
  }
  function C5(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        Wi(t);
      } catch (a) {
        It(e, e.return, a);
      }
    }
  }
  function E5(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        Wi(t);
      } catch (a) {
        It(e, e.return, a);
      }
  }
  function hm(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new M5()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new M5()), e;
      default:
        throw Error(c(435, t.tag));
    }
  }
  function H0(t, e) {
    var a = hm(t);
    e.forEach(function(l) {
      if (!a.has(l)) {
        a.add(l);
        var n = Tm.bind(null, t, l);
        l.then(n, n);
      }
    });
  }
  function Ze(t, e, a) {
    var l = e.deletions;
    if (l !== null)
      for (var n = 0; n < l.length; n++) {
        var o = l[n], s = t, b = e, x = b;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Jl(x.type)) {
                ce = x.stateNode, Ie = !1;
                break t;
              }
              break;
            case 5:
              ce = x.stateNode, Ie = !1;
              break t;
            case 3:
            case 4:
              ce = x.stateNode.containerInfo, Ie = !0;
              break t;
          }
          x = x.return;
        }
        if (ce === null) throw Error(c(160));
        w5(s, b, o), ce = null, Ie = !1, s = o.alternate, s !== null && (s.return = null), o.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        A5(e, t, a), e = e.sibling;
  }
  var Ya = null;
  function A5(t, e, a) {
    var l = t.alternate, n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (n & 4 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var o = 0; o < l.length; o++) {
            var s = l[o];
            s.ref.impl = s.nextImpl;
          }
        Ze(e, t, a), Qe(t), n & 4 && (kl(3, t, t.return), Jo(3, t), kl(5, t, t.return));
        break;
      case 1:
        Ze(e, t, a), Qe(t), n & 512 && (Kt || l === null || Xe(l, l.return)), n & 64 && Oe && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (a = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        if (o = Ya, Ze(e, t, a), Qe(t), n & 512 && (Kt || l === null || Xe(l, l.return)), n & 4)
          if (n = l !== null ? l.memoizedState : null, a = t.memoizedState, l === null)
            if (a === null)
              if (t.stateNode === null)
                if (Oe)
                  t.stateNode = dd(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, a = t.memoizedProps, n = o.ownerDocument || o;
                    e: switch (e) {
                      case "title":
                        l = n.getElementsByTagName("title")[0], (!l || l[Cl] || l[$e] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = n.createElement(e), n.head.insertBefore(
                          l,
                          n.querySelector("head > title")
                        )), Ue(l, e, a), l[$e] = t, me(l), e = l;
                        break t;
                      case "link":
                        if (o = Rd(
                          "link",
                          "href",
                          n
                        ).get(e + (a.href || ""))) {
                          for (s = 0; s < o.length; s++)
                            if (l = o[s], l.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && l.getAttribute("rel") === (a.rel == null ? null : a.rel) && l.getAttribute("title") === (a.title == null ? null : a.title) && l.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              o.splice(s, 1);
                              break e;
                            }
                        }
                        l = n.createElement(e), Ue(l, e, a), n.head.appendChild(l);
                        break;
                      case "meta":
                        if (o = Rd(
                          "meta",
                          "content",
                          n
                        ).get(e + (a.content || ""))) {
                          for (s = 0; s < o.length; s++)
                            if (l = o[s], l.getAttribute("content") === (a.content == null ? null : "" + a.content) && l.getAttribute("name") === (a.name == null ? null : a.name) && l.getAttribute("property") === (a.property == null ? null : a.property) && l.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && l.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              o.splice(s, 1);
                              break e;
                            }
                        }
                        l = n.createElement(e), Ue(l, e, a), n.head.appendChild(l);
                        break;
                      default:
                        throw Error(c(468, e));
                    }
                    l[$e] = t, me(l), e = l;
                  }
                  t.stateNode = e;
                }
              else
                Oe || Ps(o, t.type, t.stateNode);
            else
              t.stateNode = Dd(
                o,
                a,
                t.memoizedProps
              );
          else
            n !== a ? (n === null ? (e = l.stateNode, e === null || Kt || e.parentNode.removeChild(e)) : n.count--, a === null ? Oe || Ps(o, t.type, t.stateNode) : Dd(o, a, t.memoizedProps)) : a === null && t.stateNode !== null && ns(
              t,
              t.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        Ze(e, t, a), Qe(t), n & 512 && (Kt || l === null || Xe(l, l.return)), l !== null && n & 4 && ns(
          t,
          t.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (o = Ja, Ja = !1, Ze(e, t, a), Ja = o, Qe(t), n & 512 && (Kt || l === null || Xe(l, l.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Ga(e, ""), Bt = !0;
          } catch (D) {
            It(t, t.return, D);
          }
        }
        n & 4 && t.stateNode != null && (e = t.memoizedProps, ns(
          t,
          e,
          l !== null ? l.memoizedProps : e
        )), n & 1024 && (ds = !0);
        break;
      case 6:
        if (Ze(e, t, a), Qe(t), n & 4) {
          if (t.stateNode === null)
            throw Error(c(162));
          e = t.memoizedProps, a = t.stateNode;
          try {
            a.nodeValue = e, Bt = !0;
          } catch (D) {
            It(t, t.return, D);
          }
        }
        break;
      case 3:
        if (Bt = !1, Z0 = null, o = Ya, Ya = rr(e.containerInfo), Ze(e, t, a), Ya = o, Qe(t), n & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Wi(e.containerInfo);
          } catch (D) {
            It(t, t.return, D);
          }
        ds && (ds = !1, O5(t)), Bt = !1;
        break;
      case 4:
        n = Ja, Ja = Oe, l = Rr(), o = Ya, Ya = rr(
          t.stateNode.containerInfo
        ), Ze(e, t, a), Qe(t), Ya = o, Bt && Io && (A0 = !0), Bt = l, Ja = n;
        break;
      case 12:
        Ze(e, t, a), Qe(t);
        break;
      case 31:
        Ze(e, t, a), Qe(t), n & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, H0(t, e)));
        break;
      case 13:
        Ze(e, t, a), Qe(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (_0 = de()), n & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, H0(t, e)));
        break;
      case 22:
        o = t.memoizedState !== null, s = l !== null && l.memoizedState !== null;
        var b = Oe, x = Kt, O = Ja;
        Oe = b || o, Ja = O || o, Kt = x || s, Ze(e, t, a), Kt = x, Ja = O, Oe = b, Qe(t), n & 8192 && (e = t.stateNode, e._visibility = o ? e._visibility & -2 : e._visibility | 1, !o || l === null || s || Oe || Kt || (e = s || Kt, a = Oe, l = Kt, Oe = o || Oe, Kt = e, Gl(t, 2), Oe = a, Kt = l), !o && Ja || bs(t, o)), n & 4 && (e = t.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, H0(t, a))));
        break;
      case 19:
        Ze(e, t, a), Qe(t), n & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, H0(t, e)));
        break;
      case 30:
        n & 512 && (Kt || l === null || Xe(l, l.return)), n = Rr(), o = Io, s = (a & 335544064) === a, b = t.memoizedProps, Io = s && cl(
          b.default,
          b.update
        ) !== "none", Ze(e, t, a), Qe(t), s && l !== null && Bt && (t.flags |= 4), Io = o, Bt = n;
        break;
      case 21:
        break;
      case 7:
        n & 512 && (Kt || l === null || Xe(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = t);
      default:
        Ze(e, t, a), Qe(t);
    }
  }
  function Qe(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var a, l = t.return; l !== null; ) {
          if (b5(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var n = t.return; n !== null; ) {
          if (as(n)) {
            var o = n.stateNode;
            l === null ? l = [o] : l.push(o);
          }
          if (es(n)) break;
          n = n.return;
        }
        var s = l;
        if (a == null) throw Error(c(160));
        switch (a.tag) {
          case 27:
            var b = a.stateNode, x = is(t);
            T0(
              t,
              x,
              b,
              s
            );
            break;
          case 5:
            var O = a.stateNode;
            a.flags & 32 && (Ga(O, ""), a.flags &= -33);
            var D = is(t);
            T0(
              t,
              D,
              O,
              s
            );
            break;
          case 3:
          case 4:
            var P = a.stateNode.containerInfo, C = is(t);
            os(
              t,
              C,
              P,
              s
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (N) {
        It(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function O5(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        O5(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, Qi = !0, e.reset(), Qi = !1), t = t.sibling;
      }
  }
  function Oi(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        H5(e, t), e = e.sibling;
    else z5(e);
  }
  function H5(t, e) {
    var a = t.alternate;
    if (a === null) rs(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (hs = Fa = !1, p5(), Oi(e, t), !Fa && !A0) {
            if (t = Wa, t !== null)
              for (var l = 0; l < t.length; l += 3) {
                a = t[l];
                var n = t[l + 1];
                vd(a, t[l + 2]), a = a.ownerDocument.documentElement, a !== null && a.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + n + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), hs = !0;
          }
          Wa = null;
          break;
        case 5:
          Oi(e, t);
          break;
        case 4:
          l = Fa, Fa = !1, Oi(e, t), Fa && (A0 = !0), Fa = l;
          break;
        case 22:
          t.memoizedState === null && (a.memoizedState !== null ? rs(t, !1) : Oi(e, t));
          break;
        case 30:
          l = Fa, n = p5(), Fa = !1, Oi(e, t), Fa && (t.flags |= 4);
          var o = t.memoizedProps, s = t.stateNode;
          e = ul(o, s), s = ul(a.memoizedProps, s);
          var b = cl(o.default, o.update);
          b === "none" ? e = !1 : (o = a.memoizedState, a.memoizedState = null, a = t.child, Fe = 0, e = fs(
            t,
            a,
            e,
            s,
            b,
            o,
            !0
          ), Fe !== (o === null ? 0 : o.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (Xi(
            t,
            t.memoizedProps.onUpdate
          ), Wa = n) : n !== null && (n.push.apply(n, Wa), Wa = n), Fa = (t.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          Oi(e, t);
      }
  }
  function Ia(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        S5(t, e.alternate, e), e = e.sibling;
  }
  function Gl(t, e) {
    for (t = t.child; t !== null; ) {
      var a = t, l = e;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          kl(4, a, a.return), Gl(
            a,
            l
          );
          break;
        case 1:
          Xe(a, a.return);
          var n = a.stateNode;
          typeof n.componentWillUnmount == "function" && d5(
            a,
            a.return,
            n
          ), Gl(
            a,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && Od(
            a.stateNode,
            a.type,
            a.memoizedProps
          );
        case 5:
          Xe(a, a.return), a.tag !== 5 && a.tag !== 27 || Fo(a), Gl(
            a,
            l
          );
          break;
        case 6:
          Fo(a);
          break;
        case 26:
          Xe(a, a.return), n = a.stateNode, a.memoizedState !== null || n === null || Kt || n.parentNode.removeChild(n), Gl(
            a,
            l
          );
          break;
        case 22:
          a.memoizedState === null && Gl(
            a,
            l
          );
          break;
        case 30:
          Xe(a, a.return), Gl(
            a,
            l
          );
          break;
        case 7:
          Xe(a, a.return);
        default:
          Gl(
            a,
            l
          );
      }
      t = t.sibling;
    }
  }
  function _a(t, e, a) {
    for (a = (e.subtreeFlags & 8772) !== 0 ? a : a & -2, e = e.child; e !== null; ) {
      var l = e.alternate, n = t, o = e, s = o.flags, b = (a & 1) !== 0;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          _a(
            n,
            o,
            a
          ), Jo(4, o);
          break;
        case 1:
          if (_a(
            n,
            o,
            a
          ), l = o, n = l.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (D) {
              It(l, l.return, D);
            }
          if (l = o, n = l.updateQueue, n !== null) {
            var x = l.stateNode;
            try {
              var O = n.shared.hiddenCallbacks;
              if (O !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < O.length; n++)
                  P1(O[n], x);
            } catch (D) {
              It(l, l.return, D);
            }
          }
          b && s & 64 && f5(o), Qa(o, o.return);
          break;
        case 27:
          (a & 2) !== 0 && g5(o);
        case 5:
          o.tag !== 5 && o.tag !== 27 || h5(o), _a(
            n,
            o,
            a
          ), b && l === null && s & 4 && ls(o), Qa(o, o.return);
          break;
        case 6:
          h5(o);
          break;
        case 26:
          x = o.stateNode, o.memoizedState !== null || x === null || Oe || Ps(
            rr(x.ownerDocument),
            o.type,
            x
          ), _a(
            n,
            o,
            a
          ), b && l === null && s & 4 && ls(o), Qa(o, o.return);
          break;
        case 12:
          _a(
            n,
            o,
            a
          );
          break;
        case 31:
          _a(
            n,
            o,
            a
          ), b && s & 4 && C5(n, o);
          break;
        case 13:
          _a(
            n,
            o,
            a
          ), b && s & 4 && E5(n, o);
          break;
        case 22:
          o.memoizedState === null && _a(
            n,
            o,
            a
          ), Qa(o, o.return);
          break;
        case 30:
          _a(
            n,
            o,
            a
          ), Qa(o, o.return);
          break;
        case 7:
          Qa(o, o.return);
        default:
          _a(
            n,
            o,
            a
          );
      }
      e = e.sibling;
    }
  }
  function ms(t, e) {
    var a = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== a && (t != null && t.refCount++, a != null && Xo(a));
  }
  function ps(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Xo(t));
  }
  function Ma(t, e, a, l) {
    var n = (a & 335544064) === a;
    if (e.subtreeFlags & (n ? 10262 : 10256))
      for (e = e.child; e !== null; )
        N5(
          t,
          e,
          a,
          l
        ), e = e.sibling;
    else n && x5(e);
  }
  function N5(t, e, a, l) {
    var n = (a & 335544064) === a;
    n && e.alternate === null && e.return !== null && e.return.alternate !== null && E0(e);
    var o = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ma(
          t,
          e,
          a,
          l
        ), o & 2048 && Jo(9, e);
        break;
      case 1:
        Ma(
          t,
          e,
          a,
          l
        );
        break;
      case 3:
        Ma(
          t,
          e,
          a,
          l
        ), n && hs && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), o & 2048 && (o = null, e.alternate !== null && (o = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== o && (e.refCount++, o != null && Xo(o)));
        break;
      case 12:
        if (o & 2048) {
          Ma(
            t,
            e,
            a,
            l
          ), o = e.stateNode;
          try {
            var s = e.memoizedProps, b = s.id, x = s.onPostCommit;
            typeof x == "function" && x(
              b,
              e.alternate === null ? "mount" : "update",
              o.passiveEffectDuration,
              -0
            );
          } catch (O) {
            It(e, e.return, O);
          }
        } else
          Ma(
            t,
            e,
            a,
            l
          );
        break;
      case 31:
        Ma(
          t,
          e,
          a,
          l
        );
        break;
      case 13:
        Ma(
          t,
          e,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        s = e.stateNode, b = e.alternate, e.memoizedState !== null ? (n && b !== null && b.memoizedState === null && E0(b), s._visibility & 2 ? Ma(
          t,
          e,
          a,
          l
        ) : Po(
          t,
          e
        )) : (n && b !== null && b.memoizedState !== null && E0(e), s._visibility & 2 ? Ma(
          t,
          e,
          a,
          l
        ) : (s._visibility |= 2, Hi(
          t,
          e,
          a,
          l,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), o & 2048 && ms(b, e);
        break;
      case 24:
        Ma(
          t,
          e,
          a,
          l
        ), o & 2048 && ps(e.alternate, e);
        break;
      case 30:
        n && (o = e.alternate, o !== null && (Ka(o.child, !0), Ka(e.child, !0))), Ma(
          t,
          e,
          a,
          l
        );
        break;
      default:
        Ma(
          t,
          e,
          a,
          l
        );
    }
  }
  function Hi(t, e, a, l, n) {
    for (n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var o = t, s = e, b = a, x = l, O = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Hi(
            o,
            s,
            b,
            x,
            n
          ), Jo(8, s);
          break;
        case 23:
          break;
        case 22:
          var D = s.stateNode;
          s.memoizedState !== null ? D._visibility & 2 ? Hi(
            o,
            s,
            b,
            x,
            n
          ) : Po(
            o,
            s
          ) : (D._visibility |= 2, Hi(
            o,
            s,
            b,
            x,
            n
          )), n && O & 2048 && ms(
            s.alternate,
            s
          );
          break;
        case 24:
          Hi(
            o,
            s,
            b,
            x,
            n
          ), n && O & 2048 && ps(s.alternate, s);
          break;
        default:
          Hi(
            o,
            s,
            b,
            x,
            n
          );
      }
      e = e.sibling;
    }
  }
  function Po(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var a = t, l = e, n = l.flags;
        switch (l.tag) {
          case 22:
            Po(a, l), n & 2048 && ms(
              l.alternate,
              l
            );
            break;
          case 24:
            Po(a, l), n & 2048 && ps(l.alternate, l);
            break;
          default:
            Po(a, l);
        }
        e = e.sibling;
      }
  }
  var Nn = 8192;
  function Yn(t, e, a) {
    if (t.subtreeFlags & Nn)
      for (t = t.child; t !== null; )
        Y5(
          t,
          e,
          a
        ), t = t.sibling;
  }
  function Y5(t, e, a) {
    switch (t.tag) {
      case 26:
        Yn(
          t,
          e,
          a
        ), t.flags & Nn && (t.memoizedState !== null ? yp(
          a,
          Ya,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && Ld(a, t)));
        break;
      case 5:
        Yn(
          t,
          e,
          a
        ), t.flags & Nn && (t = t.stateNode, (e & 335544128) === e && Ld(a, t));
        break;
      case 3:
      case 4:
        var l = Ya;
        Ya = rr(t.stateNode.containerInfo), Yn(
          t,
          e,
          a
        ), Ya = l;
        break;
      case 22:
        t.memoizedState === null && (l = t.alternate, l !== null && l.memoizedState !== null ? (l = Nn, Nn = 16777216, Yn(
          t,
          e,
          a
        ), Nn = l) : Yn(
          t,
          e,
          a
        ));
        break;
      case 30:
        if ((t.flags & Nn) !== 0 && (l = t.memoizedProps.name, l != null && l !== "auto")) {
          var n = t.stateNode;
          n.paired = null, ia === null && (ia = /* @__PURE__ */ new Map()), ia.set(l, n);
        }
        Yn(
          t,
          e,
          a
        );
        break;
      default:
        Yn(
          t,
          e,
          a
        );
    }
  }
  function _5(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function tr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          He = l, R5(
            l,
            t
          );
        }
      _5(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        D5(t), t = t.sibling;
  }
  function D5(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        tr(t), t.flags & 2048 && kl(9, t, t.return);
        break;
      case 3:
        tr(t);
        break;
      case 12:
        tr(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, N0(t)) : tr(t);
        break;
      default:
        tr(t);
    }
  }
  function N0(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var a = 0; a < e.length; a++) {
          var l = e[a];
          He = l, R5(
            l,
            t
          );
        }
      _5(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          kl(8, e, e.return), N0(e);
          break;
        case 22:
          a = e.stateNode, a._visibility & 2 && (a._visibility &= -3, N0(e));
          break;
        default:
          N0(e);
      }
      t = t.sibling;
    }
  }
  function R5(t, e) {
    for (; He !== null; ) {
      var a = He;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          kl(8, a, e);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Xo(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, He = l;
      else
        t: for (a = t; He !== null; ) {
          l = He;
          var n = l.sibling, o = l.return;
          if (T5(l), l === a) {
            He = null;
            break t;
          }
          if (n !== null) {
            n.return = o, He = n;
            break t;
          }
          He = o;
        }
    }
  }
  var bm = {
    getCacheForType: function(t) {
      var e = _e(xe), a = e.data.get(t);
      return a === void 0 && (a = t(), e.data.set(t, a)), a;
    },
    cacheSignal: function() {
      return _e(xe).controller.signal;
    }
  }, gm = typeof WeakMap == "function" ? WeakMap : Map, Wt = 0, ee = null, Rt = null, Ut = 0, Ft = 0, oa = null, Vl = !1, Ni = !1, vs = !1, vl = 0, be = 0, Zl = 0, _n = 0, Y0 = 0, ra = 0, Yi = 0, er = null, Pe = null, ys = !1, _0 = 0, X5 = 0, D0 = 1 / 0, R0 = null, Ql = null, fe = 0, Da = null, Dn = null, Pa = 0, xs = 0, zs = null, U5 = null, _i = null, Di = null, Ri = null, ar = 0, X0 = null;
  function ua() {
    return (Wt & 2) !== 0 && Ut !== 0 ? Ut & -Ut : J.T !== null ? Hs() : go();
  }
  function q5() {
    if (ra === 0)
      if ((Ut & 536870912) === 0 || _t) {
        var t = dn;
        dn <<= 1, (dn & 3932160) === 0 && (dn = 262144), ra = t;
      } else ra = 536870912;
    return t = De.current, t !== null && (t.flags |= 32), ra;
  }
  function Xi(t, e) {
    if (e != null) {
      var a = t.stateNode, l = a.ref;
      l === null && (l = a.ref = yd(
        ul(t.memoizedProps, a)
      )), Di === null && (Di = []), Di.push(e.bind(null, l));
    }
  }
  function ta(t, e, a) {
    (t === ee && (Ft === 2 || Ft === 9) || t.cancelPendingCommit !== null) && (Ui(t, 0), Wl(
      t,
      Ut,
      ra,
      !1
    )), wl(t, a), ((Wt & 2) === 0 || t !== ee) && (t === ee && ((Wt & 2) === 0 && (_n |= a), be === 4 && Wl(
      t,
      Ut,
      ra,
      !1
    )), tl(t));
  }
  function L5(t, e, a) {
    if ((Wt & 6) !== 0) throw Error(c(327));
    var l = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Tl(t, e), n = l ? vm(t, e) : Ss(t, e, !0), o = l;
    do {
      if (n === 0) {
        Ni && !l && Wl(t, e, 0, !1);
        break;
      } else {
        if (a = t.current.alternate, o && !mm(a)) {
          n = Ss(t, e, !1), o = !1;
          continue;
        }
        if (n === 2) {
          if (o = e, t.errorRecoveryDisabledLanes & o)
            var s = 0;
          else
            s = t.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            e = s;
            t: {
              var b = t;
              n = er;
              var x = b.current.memoizedState.isDehydrated;
              if (x && (Ui(b, s).flags |= 256), s = Ss(
                b,
                s,
                !1
              ), s !== 2 && s !== 6) {
                if (vs && !x) {
                  b.errorRecoveryDisabledLanes |= o, _n |= o, n = 4;
                  break t;
                }
                o = Pe, Pe = n, o !== null && (Pe === null ? Pe = o : Pe.push.apply(
                  Pe,
                  o
                ));
              }
              n = s;
            }
            if (o = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Ui(t, 0), Wl(t, e, 0, !0);
          break;
        }
        t: {
          switch (l = t, o = n, o) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              Wl(
                l,
                e,
                ra,
                !Vl
              );
              break t;
            case 2:
              Pe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && (n = _0 + 300 - de(), 10 < n)) {
            if (Wl(
              l,
              e,
              ra,
              !Vl
            ), bn(l, 0, !0) !== 0) break t;
            Pa = e, l.timeoutHandle = js(
              B5.bind(
                null,
                l,
                a,
                Pe,
                R0,
                ys,
                e,
                ra,
                _n,
                Yi,
                Vl,
                o,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break t;
          }
          B5(
            l,
            a,
            Pe,
            R0,
            ys,
            e,
            ra,
            _n,
            Yi,
            Vl,
            o,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    tl(t);
  }
  function B5(t, e, a, l, n, o, s, b, x, O, D, P, C, N) {
    t.timeoutHandle = -1;
    var dt = e.subtreeFlags, vt = (o & 335544064) === o;
    if (P = null, (vt || dt & 8192 || (dt & 16785408) === 16785408) && (P = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Ke
    }, ia = null, Y5(
      e,
      o,
      P
    ), vt && (dt = P, vt = t.containerInfo, vt = (vt.nodeType === 9 ? vt : vt.ownerDocument).__reactViewTransition, vt != null && (dt.count++, dt.waitingForViewTransition = !0, dt = sr.bind(dt), vt.finished.then(dt, dt))), dt = (o & 62914560) === o ? _0 - de() : (o & 4194048) === o ? X5 - de() : 0, dt = xp(
      P,
      dt
    ), dt !== null)) {
      Pa = o, t.cancelPendingCommit = dt(
        K5.bind(
          null,
          t,
          e,
          o,
          a,
          l,
          n,
          s,
          b,
          x,
          O,
          D,
          P,
          null,
          C,
          N
        )
      ), Wl(t, o, s, !O);
      return;
    }
    K5(
      t,
      e,
      o,
      a,
      l,
      n,
      s,
      b,
      x,
      O,
      D,
      P
    );
  }
  function mm(t) {
    for (var e = t; ; ) {
      var a = e.tag;
      if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var n = a[l], o = n.getSnapshot;
          n = n.value;
          try {
            if (!la(o(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = e.child, e.subtreeFlags & 16384 && a !== null)
        a.return = e, e = a;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function Wl(t, e, a, l) {
    e = co(t, e), e &= ~Y0, e &= ~_n, t.suspendedLanes |= e, t.pingedLanes &= ~e, l && (t.warmLanes |= e), l = t.expirationTimes;
    for (var n = e; 0 < n; ) {
      var o = 31 - Be(n), s = 1 << o;
      l[o] = -1, n &= ~s;
    }
    a !== 0 && fo(t, a, e);
  }
  function U0() {
    return (Wt & 6) === 0 ? (lr(0), !1) : !0;
  }
  function Ms() {
    if (Rt !== null) {
      if (Ft === 0)
        var t = Rt.return;
      else
        t = Rt, dl = Mn = null, Oc(t), $i = null, Lo = 0, t = Rt;
      for (; t !== null; )
        s5(t.alternate, t), t = t.return;
      Rt = null;
    }
  }
  function Ui(t, e) {
    var a = t.timeoutHandle;
    return a !== -1 && (t.timeoutHandle = -1, Lm(a)), a = t.cancelPendingCommit, a !== null && (t.cancelPendingCommit = null, a()), Pa = 0, Ms(), ee = t, Rt = a = sl(t.current, null), Ut = e, Ft = 0, oa = null, Vl = !1, Ni = Tl(t, e), vs = !1, Yi = ra = Y0 = _n = Zl = be = 0, Pe = er = null, ys = !1, vl = co(t, e), Zr(), a;
  }
  function j5(t, e) {
    At = null, J.H = p0, e === Si || e === l0 ? (e = K1(), Ft = 3) : e === pc ? (e = K1(), Ft = 4) : Ft = e === Vc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, oa = e, Rt === null && (be = 1, v0(
      t,
      va(e, t.current)
    ));
  }
  function k5() {
    var t = De.current;
    return t === null ? !0 : (Ut & 4194048) === Ut ? je === null : (Ut & 62914560) === Ut || (Ut & 536870912) !== 0 ? t === je : !1;
  }
  function G5() {
    var t = J.H;
    return J.H = p0, t === null ? p0 : t;
  }
  function V5() {
    var t = J.A;
    return J.A = bm, t;
  }
  function q0() {
    be = 4, Vl || (Ut & 4194048) !== Ut && De.current !== null || (Ni = !0), (Zl & 134217727) === 0 && (_n & 134217727) === 0 || ee === null || Wl(
      ee,
      Ut,
      ra,
      !1
    );
  }
  function Ss(t, e, a) {
    var l = Wt;
    Wt |= 2;
    var n = G5(), o = V5();
    (ee !== t || Ut !== e) && (R0 = null, Ui(t, e)), e = !1;
    var s = be;
    t: do
      try {
        if (Ft !== 0 && Rt !== null) {
          var b = Rt, x = oa;
          switch (Ft) {
            case 8:
              Ms(), s = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              De.current === null && (e = !0);
              var O = Ft;
              if (Ft = 0, oa = null, qi(t, b, x, O), a && Ni) {
                s = 0;
                break t;
              }
              break;
            default:
              O = Ft, Ft = 0, oa = null, qi(t, b, x, O);
          }
        }
        pm(), s = be;
        break;
      } catch (D) {
        j5(t, D);
      }
    while (!0);
    return e && t.shellSuspendCounter++, dl = Mn = null, Wt = l, J.H = n, J.A = o, Rt === null && (ee = null, Ut = 0, Zr()), s;
  }
  function pm() {
    for (; Rt !== null; ) Z5(Rt);
  }
  function vm(t, e) {
    var a = Wt;
    Wt |= 2;
    var l = G5(), n = V5();
    ee !== t || Ut !== e ? (R0 = null, D0 = de() + 500, Ui(t, e)) : Ni = Tl(
      t,
      e
    );
    t: do
      try {
        if (Ft !== 0 && Rt !== null) {
          e = Rt;
          var o = oa;
          e: switch (Ft) {
            case 1:
              Ft = 0, oa = null, qi(t, e, o, 1);
              break;
            case 2:
            case 9:
              if (Q1(o)) {
                Ft = 0, oa = null, Q5(e);
                break;
              }
              e = function() {
                Ft !== 2 && Ft !== 9 || ee !== t || (Ft = 7), tl(t);
              }, o.then(e, e);
              break t;
            case 3:
              Ft = 7;
              break t;
            case 4:
              Ft = 5;
              break t;
            case 7:
              Q1(o) ? (Ft = 0, oa = null, Q5(e)) : (Ft = 0, oa = null, qi(t, e, o, 7));
              break;
            case 5:
              var s = null;
              switch (Rt.tag) {
                case 26:
                  s = Rt.memoizedState;
                case 5:
                case 27:
                  var b = Rt;
                  if (s ? Ud(s) : b.stateNode.complete) {
                    Ft = 0, oa = null;
                    var x = b.sibling;
                    if (x !== null) Rt = x;
                    else {
                      var O = b.return;
                      O !== null ? (Rt = O, L0(O)) : Rt = null;
                    }
                    break e;
                  }
              }
              Ft = 0, oa = null, qi(t, e, o, 5);
              break;
            case 6:
              Ft = 0, oa = null, qi(t, e, o, 6);
              break;
            case 8:
              Ms(), be = 6;
              break t;
            default:
              throw Error(c(462));
          }
        }
        ym();
        break;
      } catch (D) {
        j5(t, D);
      }
    while (!0);
    return dl = Mn = null, J.H = l, J.A = n, Wt = a, Rt !== null ? 0 : (ee = null, Ut = 0, Zr(), be);
  }
  function ym() {
    for (; Rt !== null && !ge(); )
      Z5(Rt);
  }
  function Z5(t) {
    var e = u5(t.alternate, t, vl);
    t.memoizedProps = t.pendingProps, e === null ? L0(t) : Rt = e;
  }
  function Q5(t) {
    var e = t, a = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = e5(
          a,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Ut
        );
        break;
      case 11:
        e = e5(
          a,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Ut
        );
        break;
      case 5:
        Oc(e);
        var l = e;
        l === Ae && (_t ? (Ir(l), l.tag === 5 && l.stateNode != null && (ae = l.stateNode)) : (Ir(l), _t = !0));
      default:
        s5(a, e), e = Rt = R1(e, vl), e = u5(a, e, vl);
    }
    t.memoizedProps = t.pendingProps, e === null ? L0(t) : Rt = e;
  }
  function qi(t, e, a, l) {
    dl = Mn = null, Oc(e), $i = null, Lo = 0;
    var n = e.return;
    try {
      if (om(
        t,
        n,
        e,
        a,
        Ut
      )) {
        be = 1, v0(
          t,
          va(a, t.current)
        ), Rt = null;
        return;
      }
    } catch (o) {
      if (n !== null) throw Rt = n, o;
      be = 1, v0(
        t,
        va(a, t.current)
      ), Rt = null;
      return;
    }
    e.flags & 32768 ? (_t || l === 1 ? t = !0 : Ni || (Ut & 536870912) !== 0 ? t = !1 : (Vl = t = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = De.current, l !== null && l.tag === 13 && (l.flags |= 16384))), W5(e, t)) : L0(e);
  }
  function L0(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        W5(
          e,
          Vl
        );
        return;
      }
      t = e.return;
      var a = sm(
        e.alternate,
        e,
        vl
      );
      if (a !== null) {
        Rt = a;
        return;
      }
      if (e = e.sibling, e !== null) {
        Rt = e;
        return;
      }
      Rt = e = t;
    } while (e !== null);
    be === 0 && (be = 5);
  }
  function W5(t, e) {
    do {
      var a = fm(t.alternate, t);
      if (a !== null) {
        a.flags &= 32767, Rt = a;
        return;
      }
      if (a = t.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !e && (t = t.sibling, t !== null)) {
        Rt = t;
        return;
      }
      Rt = t = a;
    } while (t !== null);
    be = 6, Rt = null;
  }
  function K5(t, e, a, l, n, o, s, b, x, O, D, P) {
    t.cancelPendingCommit = null;
    do
      B0();
    while (fe !== 0);
    if ((Wt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      t === ee && (Rt = ee = null, Ut = 0), Dn = e, Da = t, Pa = a, zs = n, U5 = l, xm(
        t,
        e,
        a,
        s,
        b,
        x,
        P
      );
    }
  }
  function xm(t, e, a, l, n, o, s) {
    var b = e.lanes | e.childLanes;
    if (xs = b, b |= nc, Yr(
      t,
      a,
      b,
      l,
      n,
      o
    ), Di = null, (a & 335544064) === a ? (Ri = Wg(t), l = 10262) : (Ri = null, l = 10256), (e.subtreeFlags & l) !== 0 || (e.flags & l) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, wm(ba, function() {
      return Cs(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), w0 = !1, l = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || l) {
      l = J.T, J.T = null, n = at.p, at.p = 2, o = Wt, Wt |= 4;
      try {
        dm(t, e, a);
      } finally {
        Wt = o, at.p = n, J.T = l;
      }
    }
    fe = 1, w0 ? _i = Zm(
      s,
      t.containerInfo,
      Ri,
      $s,
      Ts,
      Mm,
      ws,
      Cs,
      zm
    ) : ($s(), Ts(), ws());
  }
  function zm(t) {
    if (fe !== 0) {
      var e = Da.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Mm() {
    fe === 3 && (fe = 0, H5(Dn, Da), fe = 4);
  }
  function $s() {
    if (fe === 1) {
      fe = 0;
      var t = Da, e = Dn, a = Pa, l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        l = J.T, J.T = null;
        var n = at.p;
        at.p = 2;
        var o = Wt;
        Wt |= 4;
        try {
          Io = A0 = !1, A5(e, t, a), a = qs;
          var s = w1(t.containerInfo), b = a.focusedElem, x = a.selectionRange;
          if (s !== b && b && b.ownerDocument && T1(
            b.ownerDocument.documentElement,
            b
          )) {
            if (x !== null && Pu(b)) {
              var O = x.start, D = x.end;
              if (D === void 0 && (D = O), "selectionStart" in b)
                b.selectionStart = O, b.selectionEnd = Math.min(
                  D,
                  b.value.length
                );
              else {
                var P = b.ownerDocument || document, C = P && P.defaultView || window;
                if (C.getSelection) {
                  var N = C.getSelection(), dt = b.textContent.length, vt = Math.min(x.start, dt), Ot = x.end === void 0 ? vt : Math.min(x.end, dt);
                  !N.extend && vt > Ot && (s = Ot, Ot = vt, vt = s);
                  var A = $1(
                    b,
                    vt
                  ), T = $1(
                    b,
                    Ot
                  );
                  if (A && T && (N.rangeCount !== 1 || N.anchorNode !== A.node || N.anchorOffset !== A.offset || N.focusNode !== T.node || N.focusOffset !== T.offset)) {
                    var H = P.createRange();
                    H.setStart(A.node, A.offset), N.removeAllRanges(), vt > Ot ? (N.addRange(H), N.extend(T.node, T.offset)) : (H.setEnd(T.node, T.offset), N.addRange(H));
                  }
                }
              }
            }
            for (P = [], N = b; N = N.parentNode; )
              N.nodeType === 1 && P.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < P.length; b++) {
              var I = P[b];
              I.element.scrollLeft = I.left, I.element.scrollTop = I.top;
            }
          }
          Qi = !!Us, qs = Us = null;
        } finally {
          Wt = o, at.p = n, J.T = l;
        }
      }
      t.current = e, fe = 2;
    }
  }
  function Ts() {
    if (fe === 2) {
      fe = 0;
      var t = Da, e = Dn, a = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || a) {
        a = J.T, J.T = null;
        var l = at.p;
        at.p = 2;
        var n = Wt;
        Wt |= 4;
        try {
          S5(t, e.alternate, e);
        } finally {
          Wt = n, at.p = l, J.T = a;
        }
      }
      fe = 3;
    }
  }
  function ws() {
    if (fe === 4 || fe === 3) {
      fe = 0;
      var t = _i;
      _i = null, da();
      var e = Da, a = Dn, l = Pa, n = U5, o = (l & 335544064) === l ? 10262 : 10256;
      if ((a.subtreeFlags & o) !== 0 || (a.flags & o) !== 0 ? fe = 5 : (fe = 0, Dn = Da = null, J5(e, e.pendingLanes)), o = e.pendingLanes, o === 0 && (Ql = null), li(l), a = a.stateNode, Le && typeof Le.onCommitFiberRoot == "function")
        try {
          Le.onCommitFiberRoot(
            ie,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (n !== null) {
        a = J.T, o = at.p, at.p = 2, J.T = null;
        try {
          for (var s = e.onRecoverableError, b = 0; b < n.length; b++) {
            var x = n[b];
            s(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          J.T = a, at.p = o;
        }
      }
      if (n = Di, s = Ri, Ri = null, n !== null && (Di = null, s === null && (s = []), t !== null))
        for (x = 0; x < n.length; x++)
          a = (0, n[x])(
            s
          ), a !== void 0 && t.finished.finally(a);
      (Pa & 3) !== 0 && B0(), tl(e), o = e.pendingLanes, (l & 261930) !== 0 && (o & 42) !== 0 ? e === X0 ? ar++ : (ar = 0, X0 = e) : (ar = 0, X0 = null), lr(0);
    }
  }
  function J5(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Xo(e)));
  }
  function B0() {
    return _i !== null && (_i.skipTransition(), _i = null), $s(), Ts(), ws(), Cs();
  }
  function Cs() {
    if (fe !== 5) return !1;
    var t = Da, e = xs;
    xs = 0;
    var a = li(Pa), l = J.T, n = at.p;
    try {
      at.p = 32 > a ? 32 : a, J.T = null, a = zs, zs = null;
      var o = Da, s = Pa;
      if (fe = 0, Dn = Da = null, Pa = 0, (Wt & 6) !== 0) throw Error(c(331));
      var b = Wt;
      if (Wt |= 4, D5(o.current), N5(
        o,
        o.current,
        s,
        a
      ), Wt = b, lr(0, !1), Le && typeof Le.onPostCommitFiberRoot == "function")
        try {
          Le.onPostCommitFiberRoot(ie, o);
        } catch {
        }
      return !0;
    } finally {
      at.p = n, J.T = l, J5(t, e);
    }
  }
  function F5(t, e, a) {
    e = va(a, e), e = Gc(t.stateNode, e, 2), t = ql(t, e, 2), t !== null && (wl(t, 2), tl(t));
  }
  function It(t, e, a) {
    if (t.tag === 3)
      F5(t, t, a);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          F5(
            e,
            t,
            a
          );
          break;
        } else if (e.tag === 1) {
          var l = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Ql === null || !Ql.has(l))) {
            t = va(a, t), a = Q2(2), l = ql(e, a, 2), l !== null && (W2(
              a,
              l,
              e,
              t
            ), wl(l, 2), tl(l));
            break;
          }
        }
        e = e.return;
      }
  }
  function Es(t, e, a) {
    var l = t.pingCache;
    if (l === null) {
      l = t.pingCache = new gm();
      var n = /* @__PURE__ */ new Set();
      l.set(e, n);
    } else
      n = l.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), l.set(e, n));
    n.has(a) || (vs = !0, n.add(a), t = Sm.bind(null, t, e, a), e.then(t, t));
  }
  function Sm(t, e, a) {
    var l = t.pingCache;
    l !== null && l.delete(e), t.pingedLanes |= t.suspendedLanes & a, t.warmLanes &= ~a, ee === t && (Ut & a) === a && ((be === 4 || be === 3 && (Ut & 62914560) === Ut && 300 > de() - _0) && (Wt & 2) === 0 ? Ui(t, 0) : Y0 |= a, Yi === Ut && (Yi = 0)), tl(t);
  }
  function I5(t, e) {
    e === 0 && (e = so()), t = yn(t, e), t !== null && (wl(t, e), tl(t));
  }
  function $m(t) {
    var e = t.memoizedState, a = 0;
    e !== null && (a = e.retryLane), I5(t, a);
  }
  function Tm(t, e) {
    var a = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var l = t.stateNode, n = t.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = t.stateNode;
        break;
      case 22:
        l = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(e), I5(t, a);
  }
  function wm(t, e) {
    return kt(t, e);
  }
  var Li = null, Bi = null, As = !1, j0 = !1, Os = !1, Kl = 0;
  function tl(t) {
    t !== Bi && t.next === null && (Bi === null ? Li = Bi = t : Bi = Bi.next = t), j0 = !0, As || (As = !0, Em());
  }
  function lr(t, e) {
    if (!Os && j0) {
      Os = !0;
      do
        for (var a = !1, l = Li; l !== null; ) {
          if (t !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var o = 0;
            else {
              var s = l.suspendedLanes, b = l.pingedLanes;
              o = (1 << 31 - Be(42 | t) + 1) - 1, o &= n & ~(s & ~b), o = o & 201326741 ? o & 201326741 | 1 : o ? o | 2 : 0;
            }
            o !== 0 && (a = !0, ad(l, o));
          } else
            o = Ut, o = bn(
              l,
              l === ee ? o : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (o & 3) === 0 || Tl(l, o) || (a = !0, ad(l, o));
          l = l.next;
        }
      while (a);
      Os = !1;
    }
  }
  function Cm() {
    P5();
  }
  function P5() {
    j0 = As = !1;
    var t = 0;
    Kl !== 0 && qm() && (t = Kl);
    for (var e = de(), a = null, l = Li; l !== null; ) {
      var n = l.next, o = td(l, e);
      o === 0 ? (l.next = null, a === null ? Li = n : a.next = n, n === null && (Bi = a)) : (a = l, (t !== 0 || (o & 3) !== 0) && (j0 = !0)), l = n;
    }
    fe !== 0 && fe !== 5 || lr(t), Kl !== 0 && (Kl = 0);
  }
  function td(t, e) {
    for (var a = t.suspendedLanes, l = t.pingedLanes, n = t.expirationTimes, o = t.pendingLanes & -62914561; 0 < o; ) {
      var s = 31 - Be(o), b = 1 << s, x = n[s];
      x === -1 ? ((b & a) === 0 || (b & l) !== 0) && (n[s] = Nr(b, e)) : x <= e && (t.expiredLanes |= b), o &= ~b;
    }
    if (e = ee, a = Ut, a = bn(
      t,
      t === e ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l = t.callbackNode, a === 0 || t === e && (Ft === 2 || Ft === 9) || t.cancelPendingCommit !== null)
      return l !== null && l !== null && se(l), t.callbackNode = null, t.callbackPriority = 0;
    if ((a & 3) === 0 || Tl(t, a)) {
      if (e = a & -a, e === t.callbackPriority) return e;
      switch (l !== null && se(l), li(a)) {
        case 2:
        case 8:
          a = Ee;
          break;
        case 32:
          a = ba;
          break;
        case 268435456:
          a = sn;
          break;
        default:
          a = ba;
      }
      return l = ed.bind(null, t), a = kt(a, l), t.callbackPriority = e, t.callbackNode = a, e;
    }
    return l !== null && l !== null && se(l), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function ed(t, e) {
    if (fe !== 0 && fe !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var a = t.callbackNode;
    if (B0() && t.callbackNode !== a)
      return null;
    var l = Ut;
    return l = bn(
      t,
      t === ee ? l : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), l === 0 ? null : (L5(t, l, e), td(t, de()), t.callbackNode != null && t.callbackNode === a ? ed.bind(null, t) : null);
  }
  function ad(t, e) {
    if (B0()) return null;
    L5(t, e, !0);
  }
  function Em() {
    Bm(function() {
      (Wt & 6) !== 0 ? kt(
        ha,
        Cm
      ) : P5();
    });
  }
  function Hs() {
    if (Kl === 0) {
      var t = Tn;
      t === 0 && (t = fn, fn <<= 1, (fn & 261888) === 0 && (fn = 256)), Kl = t;
    }
    return Kl;
  }
  function ld(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : fi(t);
  }
  function Am(t, e, a, l, n) {
    if (e === "submit" && a && a.stateNode === n) {
      var o = ld(
        (n[Ye] || null).action
      ), s = l.submitter;
      s && (e = (e = s[Ye] || null) ? ld(e.formAction) : s.getAttribute("formAction"), e !== null && (o = e, s = null));
      var b = new jr(
        "action",
        "action",
        null,
        l,
        n
      );
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Kl !== 0) {
                  var x = new FormData(n, s);
                  qc(
                    a,
                    {
                      pending: !0,
                      data: x,
                      method: n.method,
                      action: o
                    },
                    null,
                    x
                  );
                }
              } else
                typeof o == "function" && (b.preventDefault(), x = new FormData(n, s), qc(
                  a,
                  {
                    pending: !0,
                    data: x,
                    method: n.method,
                    action: o
                  },
                  o,
                  x
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Ns = 0; Ns < lc.length; Ns++) {
    var Ys = lc[Ns], Om = Ys.toLowerCase(), Hm = Ys[0].toUpperCase() + Ys.slice(1);
    Ha(
      Om,
      "on" + Hm
    );
  }
  Ha(A1, "onAnimationEnd"), Ha(O1, "onAnimationIteration"), Ha(H1, "onAnimationStart"), Ha("dblclick", "onDoubleClick"), Ha("focusin", "onFocus"), Ha("focusout", "onBlur"), Ha(Lg, "onTransitionRun"), Ha(Bg, "onTransitionStart"), Ha(jg, "onTransitionCancel"), Ha(N1, "onTransitionEnd"), We("onMouseEnter", ["mouseout", "mouseover"]), We("onMouseLeave", ["mouseout", "mouseover"]), We("onPointerEnter", ["pointerout", "pointerover"]), We("onPointerLeave", ["pointerout", "pointerover"]), ea(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ea(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ea("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ea(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ea(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ea(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var nr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Nm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nr)
  );
  function nd(t, e) {
    e = (e & 4) !== 0;
    for (var a = 0; a < t.length; a++) {
      var l = t[a], n = l.event;
      l = l.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var s = l.length - 1; 0 <= s; s--) {
            var b = l[s], x = b.instance, O = b.currentTarget;
            if (b = b.listener, x !== o && n.isPropagationStopped())
              break t;
            o = b, n.currentTarget = O;
            try {
              o(n);
            } catch (D) {
              Vr(D);
            }
            n.currentTarget = null, o = x;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (b = l[s], x = b.instance, O = b.currentTarget, b = b.listener, x !== o && n.isPropagationStopped())
              break t;
            o = b, n.currentTarget = O;
            try {
              o(n);
            } catch (D) {
              Vr(D);
            }
            n.currentTarget = null, o = x;
          }
      }
    }
  }
  function Xt(t, e) {
    var a = e[po];
    a === void 0 && (a = e[po] = /* @__PURE__ */ new Set());
    var l = t + "__bubble";
    a.has(l) || (id(e, t, 2, !1), a.add(l));
  }
  function _s(t, e, a) {
    var l = 0;
    e && (l |= 4), id(
      a,
      t,
      l,
      e
    );
  }
  var k0 = "_reactListening" + Math.random().toString(36).slice(2);
  function Ds(t) {
    if (!t[k0]) {
      t[k0] = !0, yo.forEach(function(a) {
        a !== "selectionchange" && (Nm.has(a) || _s(a, !1, t), _s(a, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[k0] || (e[k0] = !0, _s("selectionchange", !1, e));
    }
  }
  function id(t, e, a, l) {
    switch (Wd(e)) {
      case 2:
        var n = $p;
        break;
      case 8:
        n = Tp;
        break;
      default:
        n = ef;
    }
    a = n.bind(
      null,
      e,
      a,
      t
    ), n = void 0, !ku || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = !0), l ? n !== void 0 ? t.addEventListener(e, a, {
      capture: !0,
      passive: n
    }) : t.addEventListener(e, a, !0) : n !== void 0 ? t.addEventListener(e, a, {
      passive: n
    }) : t.addEventListener(e, a, !1);
  }
  function Rs(t, e, a, l, n) {
    var o = l;
    if ((e & 1) === 0 && (e & 2) === 0 && l !== null)
      t: for (; ; ) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var b = l.stateNode.containerInfo;
          if (b === n) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var x = s.tag;
              if ((x === 3 || x === 4) && s.stateNode.containerInfo === n)
                return;
              s = s.return;
            }
          for (; b !== null; ) {
            if (s = ka(b), s === null) return;
            if (x = s.tag, x === 5 || x === 6 || x === 26 || x === 27) {
              l = o = s;
              continue t;
            }
            b = b.parentNode;
          }
        }
        l = l.return;
      }
    i1(function() {
      var O = o, D = Bu(a), P = [];
      t: {
        var C = Y1.get(t);
        if (C !== void 0) {
          var N = jr, dt = t;
          switch (t) {
            case "keypress":
              if (Lr(a) === 0) break t;
            case "keydown":
            case "keyup":
              N = mg;
              break;
            case "focusin":
              dt = "focus", N = Qu;
              break;
            case "focusout":
              dt = "blur", N = Qu;
              break;
            case "beforeblur":
            case "afterblur":
              N = Qu;
              break;
            case "click":
              if (a.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = u1;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = ng;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = zg;
              break;
            case A1:
            case O1:
            case H1:
              N = rg;
              break;
            case N1:
              N = Sg;
              break;
            case "scroll":
            case "scrollend":
              N = ag;
              break;
            case "wheel":
              N = Tg;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = cg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = s1;
              break;
            case "submit":
              N = yg;
              break;
            case "toggle":
            case "beforetoggle":
              N = Cg;
          }
          var vt = (e & 4) !== 0, Ot = !vt && (t === "scroll" || t === "scrollend"), A = vt ? C !== null ? C + "Capture" : null : C;
          vt = [];
          for (var T = O, H; T !== null; ) {
            var I = T;
            if (H = I.stateNode, I = I.tag, I !== 5 && I !== 26 && I !== 27 || H === null || A === null || (I = wo(T, A), I != null && vt.push(
              ir(T, I, H)
            )), Ot) break;
            T = T.return;
          }
          0 < vt.length && (C = new N(
            C,
            dt,
            null,
            a,
            D
          ), P.push({ event: C, listeners: vt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", N && a !== Lu && (dt = a.relatedTarget || a.fromElement) && (ka(dt) || dt[ll]))
            break t;
          (C || N) && (dt = D.window === D ? D : (N = D.ownerDocument) ? N.defaultView || N.parentWindow : window, C ? (N = a.relatedTarget || a.toElement, C = O, N = N ? ka(N) : null, N !== null && (Ot = f(N), vt = N.tag, N !== Ot || vt !== 5 && vt !== 27 && vt !== 6) && (N = null)) : (C = null, N = O), C !== N && (vt = u1, I = "onMouseLeave", A = "onMouseEnter", T = "mouse", (t === "pointerout" || t === "pointerover") && (vt = s1, I = "onPointerLeave", A = "onPointerEnter", T = "pointer"), Ot = C == null ? dt : El(C), H = N == null ? dt : El(N), dt = new vt(
            I,
            T + "leave",
            C,
            a,
            D
          ), dt.target = Ot, dt.relatedTarget = H, I = null, ka(D) === O && (vt = new vt(
            A,
            T + "enter",
            N,
            a,
            D
          ), vt.target = H, vt.relatedTarget = Ot, I = vt), Ot = I, vt = C && N ? W(
            C,
            N,
            Ym
          ) : null, C !== null && od(
            P,
            dt,
            C,
            vt,
            !1
          ), N !== null && Ot !== null && od(
            P,
            Ot,
            N,
            vt,
            !0
          )));
        }
        t: {
          if (C = O ? El(O) : window, N = C.nodeName && C.nodeName.toLowerCase(), N === "select" || N === "input" && C.type === "file")
            var mt = v1;
          else if (m1(C))
            if (y1)
              mt = Xg;
            else {
              mt = Dg;
              var qt = _g;
            }
          else
            N = C.nodeName, !N || N.toLowerCase() !== "input" || C.type !== "checkbox" && C.type !== "radio" ? O && pe(O.elementType) && (mt = v1) : mt = Rg;
          if (mt && (mt = mt(t, O))) {
            p1(
              P,
              mt,
              a,
              D
            );
            break t;
          }
          qt && qt(t, C, O);
        }
        switch (qt = O ? El(O) : window, t) {
          case "focusin":
            (m1(qt) || qt.contentEditable === "true") && (gi = qt, tc = O, _o = null);
            break;
          case "focusout":
            _o = tc = gi = null;
            break;
          case "mousedown":
            ec = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ec = !1, C1(P, a, D);
            break;
          case "selectionchange":
            if (qg) break;
          case "keydown":
          case "keyup":
            C1(P, a, D);
        }
        var xt;
        if (Ku)
          t: {
            switch (t) {
              case "compositionstart":
                var St = "onCompositionStart";
                break t;
              case "compositionend":
                St = "onCompositionEnd";
                break t;
              case "compositionupdate":
                St = "onCompositionUpdate";
                break t;
            }
            St = void 0;
          }
        else
          bi ? b1(t, a) && (St = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (St = "onCompositionStart");
        St && (f1 && a.locale !== "ko" && (bi || St !== "onCompositionStart" ? St === "onCompositionEnd" && bi && (xt = o1()) : (Ol = D, Gu = "value" in Ol ? Ol.value : Ol.textContent, bi = !0)), qt = G0(O, St), 0 < qt.length && (St = new c1(
          St,
          t,
          null,
          a,
          D
        ), P.push({ event: St, listeners: qt }), xt ? St.data = xt : (xt = g1(a), xt !== null && (St.data = xt)))), (xt = Ag ? Og(t, a) : Hg(t, a)) && (St = G0(O, "onBeforeInput"), 0 < St.length && (qt = new c1(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          D
        ), P.push({
          event: qt,
          listeners: St
        }), qt.data = xt)), Am(
          P,
          t,
          O,
          a,
          D
        );
      }
      nd(P, e);
    });
  }
  function ir(t, e, a) {
    return {
      instance: t,
      listener: e,
      currentTarget: a
    };
  }
  function G0(t, e) {
    for (var a = e + "Capture", l = []; t !== null; ) {
      var n = t, o = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || o === null || (n = wo(t, a), n != null && l.unshift(
        ir(t, n, o)
      ), n = wo(t, e), n != null && l.push(
        ir(t, n, o)
      )), t.tag === 3) return l;
      t = t.return;
    }
    return [];
  }
  function Ym(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function od(t, e, a, l, n) {
    for (var o = e._reactName, s = []; a !== null && a !== l; ) {
      var b = a, x = b.alternate, O = b.stateNode;
      if (b = b.tag, x !== null && x === l) break;
      b !== 5 && b !== 26 && b !== 27 || O === null || (x = O, n ? (O = wo(a, o), O != null && s.unshift(
        ir(a, O, x)
      )) : n || (O = wo(a, o), O != null && s.push(
        ir(a, O, x)
      ))), a = a.return;
    }
    s.length !== 0 && t.push({ event: e, listeners: s });
  }
  var _m = /\r\n?/g, Dm = /\u0000|\uFFFD/g;
  function rd(t) {
    return (typeof t == "string" ? t : "" + t).replace(_m, `
`).replace(Dm, "");
  }
  function ud(t, e) {
    return e = rd(e), rd(t) === e;
  }
  function Pt(t, e, a, l, n, o) {
    switch (a) {
      case "children":
        if (typeof l == "string")
          e === "body" || e === "textarea" && l === "" || Ga(t, l);
        else if (typeof l == "number" || typeof l == "bigint")
          e !== "body" && Ga(t, "" + l);
        else return;
        break;
      case "className":
        oi(t, "class", l);
        break;
      case "tabIndex":
        oi(t, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        oi(t, a, l);
        break;
      case "style":
        ue(t, l, o);
        return;
      case "data":
        if (e !== "object") {
          oi(t, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (e !== "a" || a !== "href")) {
          t.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = fi(l), t.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          t.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof o == "function" && (a === "formAction" ? (e !== "input" && Pt(t, e, "name", n.name, n, null), Pt(
            t,
            e,
            "formEncType",
            n.formEncType,
            n,
            null
          ), Pt(
            t,
            e,
            "formMethod",
            n.formMethod,
            n,
            null
          ), Pt(
            t,
            e,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (Pt(t, e, "encType", n.encType, n, null), Pt(t, e, "method", n.method, n, null), Pt(t, e, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          t.removeAttribute(a);
          break;
        }
        l = fi(l), t.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (t.onclick = Ke);
        return;
      case "onScroll":
        l != null && Xt("scroll", t);
        return;
      case "onScrollEnd":
        l != null && Xt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(c(60));
            o?.__html !== a && (t.innerHTML = a);
          }
        }
        break;
      case "multiple":
        t.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        t.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        a = fi(l), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? t.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? t.setAttribute(a, l) : t.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? t.removeAttribute(a) : t.setAttribute(a, l);
        break;
      case "popover":
        Xt("beforetoggle", t), Xt("toggle", t), ii(t, "popover", l);
        break;
      case "xlinkActuate":
        Oa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Oa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Oa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Oa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Oa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Oa(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Oa(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Oa(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Oa(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        ii(t, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N")
          a = ma.get(a) || a, ii(t, a, l);
        else return;
    }
    Bt = !0;
  }
  function Xs(t, e, a, l, n, o) {
    switch (a) {
      case "style":
        ue(t, l, o);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (a = l.__html, a != null) {
            if (n.children != null) throw Error(c(60));
            o?.__html !== a && (t.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof l == "string") Ga(t, l);
        else if (typeof l == "number" || typeof l == "bigint")
          Ga(t, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && Xt("scroll", t);
        return;
      case "onScrollEnd":
        l != null && Xt("scrollend", t);
        return;
      case "onClick":
        l != null && (t.onclick = Ke);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!xo.hasOwnProperty(a))
          t: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), o = a.slice(2, n ? a.length - 7 : void 0), e = t[Ye] || null, e = e != null ? e[a] : null, typeof e == "function" && t.removeEventListener(o, e, n), typeof l == "function")) {
              typeof e != "function" && e !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)), t.addEventListener(o, l, n);
              break t;
            }
            Bt = !0, a in t ? t[a] = l : l === !0 ? t.setAttribute(a, "") : ii(t, a, l);
          }
        return;
    }
    Bt = !0;
  }
  function Ue(t, e, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Xt("error", t), Xt("load", t);
        var l = !1, n = !1, o;
        for (o in a)
          if (a.hasOwnProperty(o)) {
            var s = a[o];
            if (s != null)
              switch (o) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  Pt(t, e, o, s, a, null);
              }
          }
        n && Pt(t, e, "srcSet", a.srcSet, a, null), l && Pt(t, e, "src", a.src, a, null);
        return;
      case "input":
        Xt("invalid", t);
        var b = o = s = n = null, x = null, O = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var D = a[l];
            if (D != null)
              switch (l) {
                case "name":
                  n = D;
                  break;
                case "type":
                  s = D;
                  break;
                case "checked":
                  x = D;
                  break;
                case "defaultChecked":
                  O = D;
                  break;
                case "value":
                  o = D;
                  break;
                case "defaultValue":
                  b = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(c(137, e));
                  break;
                default:
                  Pt(t, e, l, D, a, null);
              }
          }
        So(
          t,
          o,
          b,
          x,
          O,
          s,
          n,
          !1
        );
        return;
      case "select":
        Xt("invalid", t), l = s = o = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (b = a[n], b != null))
            switch (n) {
              case "value":
                o = b;
                break;
              case "defaultValue":
                s = b;
                break;
              case "multiple":
                l = b;
              default:
                Pt(t, e, n, b, a, null);
            }
        e = o, a = s, t.multiple = !!l, e != null ? ol(t, !!l, e, !1) : a != null && ol(t, !!l, a, !0);
        return;
      case "textarea":
        Xt("invalid", t), o = n = l = null;
        for (s in a)
          if (a.hasOwnProperty(s) && (b = a[s], b != null))
            switch (s) {
              case "value":
                l = b;
                break;
              case "defaultValue":
                n = b;
                break;
              case "children":
                o = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(c(91));
                break;
              default:
                Pt(t, e, s, b, a, null);
            }
        To(t, l, n, o);
        return;
      case "option":
        for (x in a)
          a.hasOwnProperty(x) && (l = a[x], l != null) && (x === "selected" ? t.selected = l && typeof l != "function" && typeof l != "symbol" : Pt(t, e, x, l, a, null));
        return;
      case "dialog":
        Xt("beforetoggle", t), Xt("toggle", t), Xt("cancel", t), Xt("close", t);
        break;
      case "iframe":
      case "object":
        Xt("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < nr.length; l++)
          Xt(nr[l], t);
        break;
      case "image":
        Xt("error", t), Xt("load", t);
        break;
      case "details":
        Xt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Xt("error", t), Xt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (O in a)
          if (a.hasOwnProperty(O) && (l = a[O], l != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                Pt(t, e, O, l, a, null);
            }
        return;
      default:
        if (pe(e)) {
          for (D in a)
            a.hasOwnProperty(D) && (l = a[D], l !== void 0 && Xs(
              t,
              e,
              D,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (b in a)
      a.hasOwnProperty(b) && (l = a[b], l != null && Pt(t, e, b, l, a, null));
  }
  var Rm = {};
  function Xm(t, e, a, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, o = null, s = null, b = null, x = null, O = null, D = null;
        for (N in a) {
          var P = a[N];
          if (a.hasOwnProperty(N) && P != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = P;
              default:
                l.hasOwnProperty(N) || Pt(t, e, N, null, l, P);
            }
        }
        for (var C in l) {
          var N = l[C];
          if (P = a[C], l.hasOwnProperty(C) && (N != null || P != null))
            switch (C) {
              case "type":
                N !== P && (Bt = !0), o = N;
                break;
              case "name":
                N !== P && (Bt = !0), n = N;
                break;
              case "checked":
                N !== P && (Bt = !0), O = N;
                break;
              case "defaultChecked":
                N !== P && (Bt = !0), D = N;
                break;
              case "value":
                N !== P && (Bt = !0), s = N;
                break;
              case "defaultValue":
                N !== P && (Bt = !0), b = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(c(137, e));
                break;
              default:
                N !== P && Pt(
                  t,
                  e,
                  C,
                  N,
                  l,
                  P
                );
            }
        }
        ui(
          t,
          s,
          b,
          x,
          O,
          D,
          o,
          n
        );
        return;
      case "select":
        N = s = b = C = null;
        for (o in a)
          if (x = a[o], a.hasOwnProperty(o) && x != null)
            switch (o) {
              case "value":
                break;
              case "multiple":
                N = x;
              default:
                l.hasOwnProperty(o) || Pt(
                  t,
                  e,
                  o,
                  null,
                  l,
                  x
                );
            }
        for (n in l)
          if (o = l[n], x = a[n], l.hasOwnProperty(n) && (o != null || x != null))
            switch (n) {
              case "value":
                o !== x && (Bt = !0), C = o;
                break;
              case "defaultValue":
                o !== x && (Bt = !0), b = o;
                break;
              case "multiple":
                o !== x && (Bt = !0), s = o;
              default:
                o !== x && Pt(
                  t,
                  e,
                  n,
                  o,
                  l,
                  x
                );
            }
        e = b, a = s, l = N, C != null ? ol(t, !!a, C, !1) : !!l != !!a && (e != null ? ol(t, !!a, e, !0) : ol(t, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        N = C = null;
        for (b in a)
          if (n = a[b], a.hasOwnProperty(b) && n != null && !l.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Pt(t, e, b, null, l, n);
            }
        for (s in l)
          if (n = l[s], o = a[s], l.hasOwnProperty(s) && (n != null || o != null))
            switch (s) {
              case "value":
                n !== o && (Bt = !0), C = n;
                break;
              case "defaultValue":
                n !== o && (Bt = !0), N = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(c(91));
                break;
              default:
                n !== o && Pt(t, e, s, n, l, o);
            }
        $o(t, C, N);
        return;
      case "option":
        for (var dt in a)
          C = a[dt], a.hasOwnProperty(dt) && C != null && !l.hasOwnProperty(dt) && (dt === "selected" ? t.selected = !1 : Pt(
            t,
            e,
            dt,
            null,
            l,
            C
          ));
        for (x in l)
          C = l[x], N = a[x], l.hasOwnProperty(x) && C !== N && (C != null || N != null) && (x === "selected" ? (C !== N && (Bt = !0), t.selected = C && typeof C != "function" && typeof C != "symbol") : Pt(
            t,
            e,
            x,
            C,
            l,
            N
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var vt in a)
          C = a[vt], a.hasOwnProperty(vt) && C != null && !l.hasOwnProperty(vt) && Pt(t, e, vt, null, l, C);
        for (O in l)
          if (C = l[O], N = a[O], l.hasOwnProperty(O) && C !== N && (C != null || N != null))
            switch (O) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(c(137, e));
                break;
              default:
                Pt(
                  t,
                  e,
                  O,
                  C,
                  l,
                  N
                );
            }
        return;
      default:
        if (pe(e)) {
          for (var Ot in a)
            C = a[Ot], a.hasOwnProperty(Ot) && C !== void 0 && !l.hasOwnProperty(Ot) && Xs(
              t,
              e,
              Ot,
              void 0,
              l,
              C
            );
          for (D in l)
            C = l[D], N = a[D], !l.hasOwnProperty(D) || C === N || C === void 0 && N === void 0 || Xs(
              t,
              e,
              D,
              C,
              l,
              N
            );
          return;
        }
    }
    for (var A in a)
      C = a[A], a.hasOwnProperty(A) && C != null && !l.hasOwnProperty(A) && Pt(t, e, A, null, l, C);
    for (P in l)
      C = l[P], N = a[P], !l.hasOwnProperty(P) || C === N || C == null && N == null || Pt(t, e, P, C, l, N);
  }
  function cd(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Um() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), l = 0; l < a.length; l++) {
        var n = a[l], o = n.transferSize, s = n.initiatorType, b = n.duration;
        if (o && b && cd(s)) {
          for (s = 0, b = n.responseEnd, l += 1; l < a.length; l++) {
            var x = a[l], O = x.startTime;
            if (O > b) break;
            var D = x.transferSize, P = x.initiatorType;
            D && cd(P) && (x = x.responseEnd, s += D * (x < b ? 1 : (b - O) / (x - O)));
          }
          if (--l, e += 8 * (o + s) / (n.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Us = null, qs = null;
  function or(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function sd(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function fd(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function dd(t, e, a, l) {
    return a = or(
      a
    ).createElement(t), a[$e] = l, a[Ye] = e, Ue(a, t, e), me(a), a;
  }
  function Ls(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Bs = null;
  function qm() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Bs ? !1 : (Bs = t, !0) : (Bs = null, !1);
  }
  var js = typeof setTimeout == "function" ? setTimeout : void 0, Lm = typeof clearTimeout == "function" ? clearTimeout : void 0, hd = typeof Promise == "function" ? Promise : void 0, bd = typeof requestAnimationFrame == "function" ? requestAnimationFrame : js, Bm = typeof queueMicrotask == "function" ? queueMicrotask : typeof hd < "u" ? function(t) {
    return hd.resolve(null).then(t).catch(jm);
  } : js;
  function jm(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Jl(t) {
    return t === "head";
  }
  function gd(t, e) {
    var a = e, l = 0;
    do {
      var n = a.nextSibling;
      if (t.removeChild(a), n && n.nodeType === 8)
        if (a = n.data, a === "/$" || a === "/&") {
          if (l === 0) {
            t.removeChild(n), Wi(e);
            return;
          }
          l--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          l++;
        else if (a === "html")
          Js(
            t.ownerDocument.documentElement
          );
        else if (a === "head") {
          a = t.ownerDocument.head, Js(a);
          for (var o = a.firstChild; o; ) {
            var s = o.nextSibling, b = o.nodeName;
            o[Cl] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && o.rel.toLowerCase() === "stylesheet" || a.removeChild(o), o = s;
          }
        } else
          a === "body" && Js(t.ownerDocument.body);
      a = n;
    } while (a);
    Wi(e);
  }
  function md(t, e) {
    var a = t;
    t = 0;
    do {
      var l = a.nextSibling;
      if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), l && l.nodeType === 8)
        if (a = l.data, a === "/$") {
          if (t === 0) break;
          t--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
      a = l;
    } while (a);
  }
  function pd(t, e, a) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, a != null && (t.style.viewTransitionClass = a), a = getComputedStyle(t), a.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var l = 1;
      else
        for (var n = l = 0; n < e.length; n++) {
          var o = e[n];
          0 < o.width && 0 < o.height && l++;
        }
      l === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + a.paddingTop, t.marginBottom = "-" + a.paddingBottom);
    }
  }
  function vd(t, e) {
    t = t.style, e = e.style;
    var a = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), a = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (a = e.display, t.display = a == null || typeof a == "boolean" ? "" : a, a = e.margin, a != null ? t.margin = a : (a = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = a == null || typeof a == "boolean" ? "" : a, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function km(t, e, a) {
    return a = a.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= a.innerHeight && t.left <= a.innerWidth
    };
  }
  function ks(t) {
    var e = t.getBoundingClientRect(), a = getComputedStyle(t);
    return km(e, a, t);
  }
  function Gm(t) {
    return t.documentElement.clientHeight;
  }
  function Vm(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Zm(t, e, a, l, n, o, s, b, x) {
    var O = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var D = O.startViewTransition({
        update: function() {
          var C = O.defaultView, N = C.navigation && C.navigation.transition, dt = O.fonts.status;
          l();
          var vt = [];
          if (dt === "loaded" && (Gm(O), O.fonts.status === "loading" && vt.push(O.fonts.ready)), dt = vt.length, t !== null)
            for (var Ot = t.suspenseyImages, A = 0, T = 0; T < Ot.length; T++) {
              var H = Ot[T];
              if (!H.complete) {
                var I = H.getBoundingClientRect();
                if (0 < I.bottom && 0 < I.right && I.top < C.innerHeight && I.left < C.innerWidth) {
                  if (A += qd(H), A > Q0) {
                    vt.length = dt;
                    break;
                  }
                  H = new Promise(
                    Vm.bind(H)
                  ), vt.push(H);
                }
              }
            }
          if (0 < vt.length)
            return C = Promise.race([
              Promise.all(vt),
              new Promise(function(mt) {
                return setTimeout(mt, 500);
              })
            ]).then(n, n), (N ? Promise.allSettled([N.finished, C]) : C).then(o, o);
          if (n(), N)
            return N.finished.then(
              o,
              o
            );
          o();
        },
        types: a
      });
      O.__reactViewTransition = D;
      var P = [];
      return D.ready.then(
        function() {
          for (var C = O.documentElement.getAnimations({
            subtree: !0
          }), N = 0; N < C.length; N++) {
            var dt = C[N], vt = dt.effect, Ot = vt.pseudoElement;
            if (Ot != null && Ot.startsWith("::view-transition")) {
              P.push(dt), dt = vt.getKeyframes();
              for (var A = Ot = void 0, T = !0, H = 0; H < dt.length; H++) {
                var I = dt[H], mt = I.width;
                if (Ot === void 0) Ot = mt;
                else if (Ot !== mt) {
                  T = !1;
                  break;
                }
                if (mt = I.height, A === void 0) A = mt;
                else if (A !== mt) {
                  T = !1;
                  break;
                }
                delete I.width, delete I.height, I.transform === "none" && delete I.transform;
              }
              T && Ot !== void 0 && A !== void 0 && (vt.setKeyframes(dt), T = getComputedStyle(
                vt.target,
                vt.pseudoElement
              ), T.width !== Ot || T.height !== A) && (T = dt[0], T.width = Ot, T.height = A, T = dt[dt.length - 1], T.width = Ot, T.height = A, vt.setKeyframes(dt));
            }
          }
          s();
        },
        function(C) {
          O.__reactViewTransition === D && (O.__reactViewTransition = null);
          try {
            typeof C == "object" && C !== null && C.name === "InvalidStateError" && (C.message === "View transition was skipped because document visibility state is hidden." || C.message === "Skipping view transition because document visibility state has become hidden." || C.message === "Skipping view transition because viewport size changed." || C.message === "Transition was aborted because of invalid state") && (C = null), C !== null && x(C);
          } finally {
            l(), n(), s();
          }
        }
      ), D.finished.finally(function() {
        for (var C = 0; C < P.length; C++)
          P[C].cancel();
        O.__reactViewTransition === D && (O.__reactViewTransition = null), b();
      }), D;
    } catch {
      return l(), n(), s(), null;
    }
  }
  function Rn(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  Rn.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : _({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, Rn.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, a = t.getAnimations({ subtree: !0 }), l = [], n = 0; n < a.length; n++) {
      var o = a[n].effect;
      o !== null && o.target === t && o.pseudoElement === e && l.push(a[n]);
    }
    return l;
  }, Rn.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function yd(t) {
    return {
      name: t,
      group: new Rn("group", t),
      imagePair: new Rn("image-pair", t),
      old: new Rn("old", t),
      new: new Rn("new", t)
    };
  }
  function ca(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  ca.prototype.addEventListener = function(t, e, a) {
    var l = null, n = null;
    if (!(a != null && typeof a != "boolean" && (l = a.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var o = this._eventListeners;
      if (zd(o, t, e, a) === -1) {
        var s = this, b = e;
        a != null && typeof a != "boolean" && a.once === !0 && (b = function(x) {
          s.removeEventListener(
            t,
            e,
            a
          ), typeof e == "function" ? e.call(this, x) : e.handleEvent(x);
        }), l !== null && (n = s.removeEventListener.bind(
          s,
          t,
          e,
          a
        ), l.addEventListener("abort", n, { once: !0 }), n = l.removeEventListener.bind(l, "abort", n)), l = ji(a), o.push({
          type: t,
          listener: e,
          optionsOrUseCapture: a,
          attachedListener: b,
          cleanup: n
        }), m(
          this._fragmentFiber.child,
          !1,
          Qm,
          t,
          b,
          l
        );
      }
      this._eventListeners = o;
    }
  };
  function Qm(t, e, a, l) {
    return $(t).addEventListener(
      e,
      a,
      l
    ), !1;
  }
  ca.prototype.removeEventListener = function(t, e, a) {
    var l = this._eventListeners;
    if (l !== null && (e = zd(
      l,
      t,
      e,
      a
    ), e !== -1)) {
      var n = l[e];
      a = n.attachedListener;
      var o = n.cleanup;
      n = ji(n.optionsOrUseCapture), m(
        this._fragmentFiber.child,
        !1,
        Wm,
        t,
        a,
        n
      ), l.splice(e, 1), o !== null && o();
    }
  };
  function Wm(t, e, a, l) {
    return $(t).removeEventListener(
      e,
      a,
      l
    ), !1;
  }
  function ji(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function xd(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function zd(t, e, a, l) {
    if (t.length === 0) return -1;
    l = xd(l);
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      if (o.type === e && o.listener === a && xd(o.optionsOrUseCapture) === l)
        return n;
    }
    return -1;
  }
  ca.prototype.dispatchEvent = function(t) {
    var e = v(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = $(e);
    var a = this._eventListeners;
    if (a !== null && 0 < a.length || !t.bubbles) {
      var l = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (a)
        for (var n = 0; n < a.length; n++) {
          var o = a[n];
          l.addEventListener(
            o.type,
            o.attachedListener,
            ji(o.optionsOrUseCapture)
          );
        }
      if (e.appendChild(l), t = l.dispatchEvent(t), a)
        for (n = 0; n < a.length; n++)
          o = a[n], l.removeEventListener(
            o.type,
            o.attachedListener,
            ji(o.optionsOrUseCapture)
          );
      return e.removeChild(l), t;
    }
    return e.dispatchEvent(t);
  }, ca.prototype.focus = function(t) {
    m(
      this._fragmentFiber.child,
      !0,
      Md,
      t,
      void 0,
      void 0
    );
  };
  function Md(t, e) {
    return t.tag === 6 ? !1 : (t = $(t), op(t, e));
  }
  ca.prototype.focusLast = function(t) {
    var e = [];
    m(
      this._fragmentFiber.child,
      !0,
      Gs,
      e,
      void 0,
      void 0
    );
    for (var a = e.length - 1; 0 <= a && !Md(e[a], t); a--) ;
  };
  function Gs(t, e) {
    return e.push(t), !1;
  }
  ca.prototype.blur = function() {
    var t = v(
      this._fragmentFiber
    );
    t !== null && (t = $(t), t = or(t).activeElement, t !== null && m(
      this._fragmentFiber.child,
      !1,
      Km,
      t,
      void 0,
      void 0
    ));
  };
  function Km(t, e) {
    return t.tag === 6 ? !1 : (t = $(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  ca.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), m(
      this._fragmentFiber.child,
      !1,
      Jm,
      t,
      void 0,
      void 0
    );
  };
  function Jm(t, e) {
    return t.tag === 6 || (t = $(t), e.observe(t)), !1;
  }
  ca.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), m(
        this._fragmentFiber.child,
        !1,
        Fm,
        t,
        void 0,
        void 0
      );
      for (var a = e = 0; a < Ra.length; a++) {
        var l = Ra[a];
        l.fragmentInstance === this && l.observer === t ? t.unobserve(l.instance) : Ra[e++] = l;
      }
      Ra.length = e;
    }
  };
  function Fm(t, e) {
    return t.tag === 6 || (t = $(t), e.unobserve(t)), !1;
  }
  var Ra = [], Vs = !1;
  function Im(t, e, a) {
    Ra.push({
      fragmentInstance: t,
      observer: e,
      instance: a
    }), Vs || (Vs = !0, rp(function() {
      Vs = !1;
      var l = Ra;
      Ra = [];
      for (var n = 0; n < l.length; n++) {
        var o = l[n];
        o.observer.unobserve(o.instance);
      }
    }));
  }
  ca.prototype.getClientRects = function() {
    var t = [];
    return m(
      this._fragmentFiber.child,
      !1,
      Pm,
      t,
      void 0,
      void 0
    ), t;
  };
  function Pm(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var a = t.ownerDocument.createRange();
      a.selectNodeContents(t), e.push.apply(e, a.getClientRects());
    } else
      t = $(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  ca.prototype.getRootNode = function(t) {
    var e = v(
      this._fragmentFiber
    );
    return e === null ? this : $(e).getRootNode(t);
  }, ca.prototype.compareDocumentPosition = function(t) {
    var e = v(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var a = [];
    m(
      this._fragmentFiber.child,
      !1,
      Gs,
      a,
      void 0,
      void 0
    );
    var l = $(e);
    if (a.length === 0) {
      if (a = l, S(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (a = e);
      }
      e = this._fragmentFiber;
      var n = l = a.compareDocumentPosition(t);
      return a === t ? n = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (a = w(e)[1], a === null ? n = Node.DOCUMENT_POSITION_PRECEDING : (t = $(a).compareDocumentPosition(
        t
      ), n = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), n |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = $(a[0]), n = $(a[a.length - 1]);
    var o = S(this._fragmentFiber) ? e.parentElement : l;
    if (o == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = o.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, o = o.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var s = e.compareDocumentPosition(t), b = n.compareDocumentPosition(t), x = s & Node.DOCUMENT_POSITION_CONTAINED_BY || b & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return b = l && o && s & Node.DOCUMENT_POSITION_FOLLOWING && b & Node.DOCUMENT_POSITION_PRECEDING, e = l && e === t || o && n === t || x || b ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && e === t || !o && n === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : s, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || tp(
      e,
      this._fragmentFiber,
      a[0],
      a[a.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function tp(t, e, a, l, n) {
    var o = ka(n);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (a = !!o)
        t: {
          for (; o !== null; ) {
            if (o.tag === 7 && (o === e || o.alternate === e)) {
              a = !0;
              break t;
            }
            o = o.return;
          }
          a = !1;
        }
      return a;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (o === null)
        return o = n.ownerDocument, n === o || n === o.documentElement || n === o.body;
      t: {
        for (o = e, e = v(e); o !== null; ) {
          if (!(o.tag !== 5 && o.tag !== 3 && o.tag !== 27 || o !== e && o.alternate !== e)) {
            o = !0;
            break t;
          }
          o = o.return;
        }
        o = !1;
      }
      return o;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!o) && !(e = o === a) && (e = W(
      a,
      o,
      q
    ), e === null ? e = !1 : (m(
      e,
      !0,
      Q,
      o,
      a
    ), o = U, U = null, e = o !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!o) && !(e = o === l) && (e = W(
      l,
      o,
      q
    ), e === null ? e = !1 : (m(
      e,
      !0,
      j,
      o,
      l
    ), o = U, G = U = null, e = o !== null)), e) : !1;
  }
  function Sd(t, e) {
    var a = t.ownerDocument.createRange();
    a.selectNodeContents(t), t = a.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  ca.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(c(566));
    var e = [];
    m(
      this._fragmentFiber.child,
      !1,
      Gs,
      e,
      void 0,
      void 0
    );
    var a = t !== !1;
    if (e.length === 0) {
      var l = w(
        this._fragmentFiber
      );
      if (l = a ? l[1] || l[0] || v(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        t = $(l), Sd(t, a);
        return;
      }
      if (l = $(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          a = "host" in l ? l.host : null, a !== null && a.scrollIntoView(t);
          return;
        }
        l.scrollIntoView(t);
      }
    }
    for (l = a ? e.length - 1 : 0; l !== (a ? -1 : e.length); ) {
      var n = e[l];
      n.tag === 6 ? (n = $(n), Sd(n, a)) : $(n).scrollIntoView(t), l += a ? -1 : 1;
    }
  };
  function ep(t, e) {
    return t = $(t), $d(t, e), !1;
  }
  function $d(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Td(t, e) {
    var a = e._eventListeners;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l];
        t.addEventListener(
          n.type,
          n.attachedListener,
          ji(n.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(o) {
      for (var s = 0, b = 0; b < Ra.length; b++) {
        var x = Ra[b];
        (x.fragmentInstance !== e || x.observer !== o || x.instance !== t) && (Ra[s++] = x);
      }
      Ra.length = s, o.observe(t);
    }), $d(t, e));
  }
  function ap(t, e) {
    var a = e._eventListeners;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l];
        t.removeEventListener(
          n.type,
          n.attachedListener,
          ji(n.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (a = e._observers, a !== null && a.forEach(function(o) {
      typeof o.rootMargin == "string" ? Im(
        e,
        o,
        t
      ) : o.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Zs(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var a = e;
      switch (e = e.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Zs(a), ja(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(a);
    }
  }
  function lp(t, e, a, l) {
    for (; t.nodeType === 1; ) {
      var n = a;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!l && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (l) {
        if (!t[Cl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (o = t.getAttribute("rel"), o === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (o !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (o = t.getAttribute("src"), (o !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && o && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && t.getAttribute("name") === o)
          return t;
      } else return t;
      if (t = Sa(t.nextSibling), t === null) break;
    }
    return null;
  }
  function np(t, e, a) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = Sa(t.nextSibling), t === null)) return null;
    return t;
  }
  function wd(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Sa(t.nextSibling), t === null)) return null;
    return t;
  }
  function Qs(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Ws(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function ip(t, e) {
    var a = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || a.readyState !== "loading")
      e();
    else {
      var l = function() {
        e(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), t._reactRetry = l;
    }
  }
  function Sa(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Ks = null;
  function Cd(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "/$" || a === "/&") {
          if (e === 0)
            return Sa(t.nextSibling);
          e--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Ed(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var a = t.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (e === 0) return t;
          e--;
        } else a !== "/$" && a !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function op(t, e) {
    function a() {
      l = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var l = !1;
    try {
      t.ownerDocument.addEventListener("focus", a, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", a, !0);
    }
    return l;
  }
  function rp(t) {
    bd(function() {
      bd(function(e) {
        return t(e);
      });
    });
  }
  function Ad(t, e, a) {
    switch (e = or(a), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(c(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(c(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function Od(t, e, a) {
    for (var l in a) {
      var n = a[l];
      a.hasOwnProperty(l) && n != null && Pt(t, e, l, null, Rm, n);
    }
    a.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Ke && (t.onclick = null), ja(t);
  }
  function Js(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ja(t);
  }
  var $a = /* @__PURE__ */ new Map(), Hd = /* @__PURE__ */ new Set();
  function rr(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var yl = at.d;
  at.d = {
    f: up,
    r: cp,
    D: sp,
    C: fp,
    L: dp,
    m: hp,
    X: gp,
    S: bp,
    M: mp
  };
  function up() {
    var t = yl.f(), e = U0();
    return t || e;
  }
  function cp(t) {
    var e = nl(t);
    e !== null && e.tag === 5 && e.type === "form" ? Y2(e) : yl.r(t);
  }
  var ki = typeof document > "u" ? null : document;
  function Nd(t, e, a) {
    var l = ki;
    if (l && typeof e == "string" && e) {
      var n = ke(e);
      n = 'link[rel="' + t + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Hd.has(n) || (Hd.add(n), t = { rel: t, crossOrigin: a, href: e }, l.querySelector(n) === null && (e = l.createElement("link"), Ue(e, "link", t), me(e), l.head.appendChild(e)));
    }
  }
  function sp(t) {
    yl.D(t), Nd("dns-prefetch", t, null);
  }
  function fp(t, e) {
    yl.C(t, e), Nd("preconnect", t, e);
  }
  function dp(t, e, a) {
    yl.L(t, e, a);
    var l = ki;
    if (l && t && e) {
      var n = 'link[rel="preload"][as="' + ke(e) + '"]';
      e === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + ke(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + ke(
        a.imageSizes
      ) + '"]')) : n += '[href="' + ke(t) + '"]';
      var o = n;
      switch (e) {
        case "style":
          o = Gi(t);
          break;
        case "script":
          o = Vi(t);
      }
      if (!($a.has(o) || (t = _(
        {
          rel: "preload",
          href: e === "image" && a && a.imageSrcSet ? void 0 : t,
          as: e
        },
        a
      ), $a.set(o, t), l.querySelector(n) !== null || e === "style" && l.querySelector(ur(o)) || e === "script" && l.querySelector(cr(o))))) {
        var s = l.createElement("link");
        Ue(s, "link", t), e === "style" && (s[mn] = !0, s.onload = s.onerror = function() {
          vo(s);
        }), me(s), l.head.appendChild(s);
      }
    }
  }
  function hp(t, e) {
    yl.m(t, e);
    var a = ki;
    if (a && t) {
      var l = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + ke(l) + '"][href="' + ke(t) + '"]', o = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = Vi(t);
      }
      if (!$a.has(o) && (t = _({ rel: "modulepreload", href: t }, e), $a.set(o, t), a.querySelector(n) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(cr(o)))
              return;
        }
        l = a.createElement("link"), Ue(l, "link", t), me(l), a.head.appendChild(l);
      }
    }
  }
  function bp(t, e, a) {
    yl.S(t, e, a);
    var l = ki;
    if (l && t) {
      var n = il(l).hoistableStyles, o = Gi(t);
      e = e || "default";
      var s = n.get(o);
      if (!s) {
        var b = { loading: 0, preload: null };
        if (s = l.querySelector(
          ur(o)
        ))
          b.loading = 5;
        else {
          t = _(
            { rel: "stylesheet", href: t, "data-precedence": e },
            a
          ), (a = $a.get(o)) && Fs(t, a);
          var x = s = l.createElement("link");
          me(x), Ue(x, "link", t), x._p = new Promise(function(O, D) {
            x.onload = O, x.onerror = D;
          }), x.addEventListener("load", function() {
            b.loading |= 1;
          }), x.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, V0(s, e, l);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: b
        }, n.set(o, s);
      }
    }
  }
  function gp(t, e) {
    yl.X(t, e);
    var a = ki;
    if (a && t) {
      var l = il(a).hoistableScripts, n = Vi(t), o = l.get(n);
      o || (o = a.querySelector(cr(n)), o || (t = _({ src: t, async: !0 }, e), (e = $a.get(n)) && Is(t, e), o = a.createElement("script"), me(o), Ue(o, "link", t), a.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, l.set(n, o));
    }
  }
  function mp(t, e) {
    yl.M(t, e);
    var a = ki;
    if (a && t) {
      var l = il(a).hoistableScripts, n = Vi(t), o = l.get(n);
      o || (o = a.querySelector(cr(n)), o || (t = _({ src: t, async: !0, type: "module" }, e), (e = $a.get(n)) && Is(t, e), o = a.createElement("script"), me(o), Ue(o, "link", t), a.head.appendChild(o)), o = {
        type: "script",
        instance: o,
        count: 1,
        state: null
      }, l.set(n, o));
    }
  }
  function Yd(t, e, a, l) {
    var n = (n = Et.current) ? rr(n) : null;
    if (!n) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Gi(a.href), e = il(
          n
        ).hoistableStyles, l = e.get(a), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(a, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          t = Gi(a.href);
          var o = il(
            n
          ).hoistableStyles, s = o.get(t);
          if (s || (n = n.ownerDocument || n, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, o.set(t, s), (o = n.querySelector(
            ur(t)
          )) ? o._p || (s.instance = o, s.state.loading = 5) : (o = $a.get(t), o || (o = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, $a.set(t, o)), pp(
            n,
            t,
            o,
            s.state
          ))), e && l === null)
            throw Error(c(528, ""));
          return s;
        }
        if (e && l !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return e = a.async, a = a.src, typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (a = Vi(a), e = il(
          n
        ).hoistableScripts, l = e.get(a), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(a, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, t));
    }
  }
  function Gi(t) {
    return 'href="' + ke(t) + '"';
  }
  function ur(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function _d(t) {
    return _({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function pp(t, e, a, l) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[mn] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[mn] = !0, e.onload = e.onerror = vo.bind(null, e), Ue(e, "link", a), me(e), t.head.appendChild(e);
    l.preload = e, e.addEventListener("load", function() {
      return l.loading |= 1;
    }), e.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Vi(t) {
    return '[src="' + ke(t) + '"]';
  }
  function cr(t) {
    return "script[async]" + t;
  }
  function Dd(t, e, a) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var l = t.querySelector(
            'style[data-href~="' + ke(a.href) + '"]'
          );
          if (l)
            return e.instance = l, me(l), l;
          var n = _({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (t.ownerDocument || t).createElement(
            "style"
          ), me(l), Ue(l, "style", n), V0(l, a.precedence, t), e.instance = l;
        case "stylesheet":
          n = Gi(a.href);
          var o = t.querySelector(
            ur(n)
          );
          if (o)
            return e.state.loading |= 4, e.instance = o, me(o), o;
          l = _d(a), (n = $a.get(n)) && Fs(l, n), o = (t.ownerDocument || t).createElement("link"), me(o);
          var s = o;
          return s._p = new Promise(function(b, x) {
            s.onload = b, s.onerror = x;
          }), Ue(o, "link", l), e.state.loading |= 4, V0(o, a.precedence, t), e.instance = o;
        case "script":
          return o = Vi(a.src), (n = t.querySelector(
            cr(o)
          )) ? (e.instance = n, me(n), n) : (l = a, (n = $a.get(o)) && (l = _({}, a), Is(l, n)), t = t.ownerDocument || t, n = t.createElement("script"), me(n), Ue(n, "link", l), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (l = e.instance, e.state.loading |= 4, V0(l, a.precedence, t));
    return e.instance;
  }
  function V0(t, e, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = l.length ? l[l.length - 1] : null, o = n, s = 0; s < l.length; s++) {
      var b = l[s];
      if (b.dataset.precedence === e) o = b;
      else if (o !== n) break;
    }
    o ? o.parentNode.insertBefore(t, o.nextSibling) : (e = a.nodeType === 9 ? a.head : a, e.insertBefore(t, e.firstChild));
  }
  function Fs(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Is(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Z0 = null;
  function Rd(t, e, a) {
    if (Z0 === null) {
      var l = /* @__PURE__ */ new Map(), n = Z0 = /* @__PURE__ */ new Map();
      n.set(a, l);
    } else
      n = Z0, l = n.get(a), l || (l = /* @__PURE__ */ new Map(), n.set(a, l));
    if (l.has(t)) return l;
    for (l.set(t, null), a = a.getElementsByTagName(t), n = 0; n < a.length; n++) {
      var o = a[n];
      if (!(o[Cl] || o[$e] || t === "link" && o.getAttribute("rel") === "stylesheet") && o.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = o.getAttribute(e) || "";
        s = t + s;
        var b = l.get(s);
        b ? b.push(o) : l.set(s, [o]);
      }
    }
    return l;
  }
  function Ps(t, e, a) {
    t = t.ownerDocument || t, t.head.insertBefore(
      a,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function vp(t, e, a) {
    if (a === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function Xd(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Ud(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function qd(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Ld(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += qd(e), t.suspenseyImages.push(e)), t = zp.bind(t), e.decode().then(t, t));
  }
  function yp(t, e, a, l) {
    if (a.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var n = Gi(l.href), o = e.querySelector(
          ur(n)
        );
        if (o) {
          e = o._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = sr.bind(t), e.then(t, t)), a.state.loading |= 4, a.instance = o, me(o);
          return;
        }
        o = e.ownerDocument || e, l = _d(l), (n = $a.get(n)) && Fs(l, n), o = o.createElement("link"), me(o);
        var s = o;
        s._p = new Promise(function(b, x) {
          s.onload = b, s.onerror = x;
        }), Ue(o, "link", l), a.instance = o;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, e), (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = sr.bind(t), e.addEventListener("load", a), e.addEventListener("error", a));
    }
  }
  var Q0 = 0;
  function xp(t, e) {
    return t.stylesheets && t.count === 0 && K0(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(a) {
      var l = setTimeout(function() {
        if (t.stylesheets && K0(t, t.stylesheets), t.unsuspend) {
          var o = t.unsuspend;
          t.unsuspend = null, o();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Q0 === 0 && (Q0 = 62500 * Um());
      var n = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && K0(t, t.stylesheets), t.unsuspend)) {
            var o = t.unsuspend;
            t.unsuspend = null, o();
          }
        },
        (t.imgBytes > Q0 ? 50 : 800) + e
      );
      return t.unsuspend = a, function() {
        t.unsuspend = null, clearTimeout(l), clearTimeout(n);
      };
    } : null;
  }
  function Bd(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) K0(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function sr() {
    this.count--, Bd(this);
  }
  function zp() {
    this.imgCount--, Bd(this);
  }
  var W0 = null;
  function K0(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, W0 = /* @__PURE__ */ new Map(), e.forEach(Mp, t), W0 = null, sr.call(t));
  }
  function Mp(t, e) {
    if (!(e.state.loading & 4)) {
      var a = W0.get(t);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), W0.set(t, a);
        for (var n = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), o = 0; o < n.length; o++) {
          var s = n[o];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (a.set(s.dataset.precedence, s), l = s);
        }
        l && a.set(null, l);
      }
      n = e.instance, s = n.getAttribute("data-precedence"), o = a.get(s) || l, o === l && a.set(null, n), a.set(s, n), this.count++, l = sr.bind(this), n.addEventListener("load", l), n.addEventListener("error", l), o ? o.parentNode.insertBefore(n, o.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
    }
  }
  var Zi = {
    $$typeof: it,
    Provider: null,
    Consumer: null,
    _currentValue: ht,
    _currentValue2: ht,
    _threadCount: 0
  };
  function Sp(t, e, a, l, n, o, s, b, x) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ei(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ei(0), this.hiddenUpdates = ei(null), this.identifierPrefix = l, this.onUncaughtError = n, this.onCaughtError = o, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jd(t, e, a, l, n, o, s, b, x, O, D, P) {
    return t = new Sp(
      t,
      e,
      a,
      s,
      x,
      O,
      D,
      P,
      b
    ), e = 1, o === !0 && (e |= 24), o = Je(3, null, null, e), t.current = o, o.stateNode = t, e = bc(), e.refCount++, t.pooledCache = e, e.refCount++, o.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: e
    }, vc(o), t;
  }
  function kd(t) {
    return t ? (t = vi, t) : vi;
  }
  function Gd(t, e, a, l, n, o) {
    n = kd(n), l.context === null ? l.context = n : l.pendingContext = n, l = Ul(e), l.payload = { element: a }, o = o === void 0 ? null : o, o !== null && (l.callback = o), a = ql(t, l, e), a !== null && (ta(a, t, e), Bo(a, t, e));
  }
  function Vd(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var a = t.retryLane;
      t.retryLane = a !== 0 && a < e ? a : e;
    }
  }
  function tf(t, e) {
    Vd(t, e), (t = t.alternate) && Vd(t, e);
  }
  function Zd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = yn(t, 67108864);
      e !== null && ta(e, t, 67108864), tf(t, 67108864);
    }
  }
  function Qd(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ua();
      e = ai(e);
      var a = yn(t, e);
      a !== null && ta(a, t, e), tf(t, e);
    }
  }
  var Qi = !0;
  function $p(t, e, a, l) {
    var n = J.T;
    J.T = null;
    var o = at.p;
    try {
      at.p = 2, ef(t, e, a, l);
    } finally {
      at.p = o, J.T = n;
    }
  }
  function Tp(t, e, a, l) {
    var n = J.T;
    J.T = null;
    var o = at.p;
    try {
      at.p = 8, ef(t, e, a, l);
    } finally {
      at.p = o, J.T = n;
    }
  }
  function ef(t, e, a, l) {
    if (Qi) {
      var n = af(l);
      if (n === null)
        Rs(
          t,
          e,
          l,
          J0,
          a
        ), Kd(t, l);
      else if (Cp(
        n,
        t,
        e,
        a,
        l
      ))
        l.stopPropagation();
      else if (Kd(t, l), e & 4 && -1 < wp.indexOf(t)) {
        for (; n !== null; ) {
          var o = nl(n);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (o = o.stateNode, o.current.memoizedState.isDehydrated) {
                  var s = Ba(o.pendingLanes);
                  if (s !== 0) {
                    var b = o;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; s; ) {
                      var x = 1 << 31 - Be(s);
                      b.entanglements[1] |= x, s &= ~x;
                    }
                    tl(o), (Wt & 6) === 0 && (D0 = de() + 500, lr(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = yn(o, 2), b !== null && ta(b, o, 2), U0(), tf(o, 2);
            }
          if (o = af(l), o === null && Rs(
            t,
            e,
            l,
            J0,
            a
          ), o === n) break;
          n = o;
        }
        n !== null && l.stopPropagation();
      } else
        Rs(
          t,
          e,
          l,
          null,
          a
        );
    }
  }
  function af(t) {
    return t = Bu(t), lf(t);
  }
  var J0 = null;
  function lf(t) {
    if (J0 = null, t = ka(t), t !== null) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var a = e.tag;
        if (a === 13) {
          if (t = h(e), t !== null) return t;
          t = null;
        } else if (a === 31) {
          if (t = p(e), t !== null) return t;
          t = null;
        } else if (a === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return J0 = t, null;
  }
  function Wd(t) {
    switch (t) {
      case "beforetoggle":
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
      case "seeked":
      case "submit":
      case "toggle":
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
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
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
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch ($l()) {
          case ha:
            return 2;
          case Ee:
            return 8;
          case ba:
          case Ne:
            return 32;
          case sn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var nf = !1, Fl = null, Il = null, Pl = null, fr = /* @__PURE__ */ new Map(), dr = /* @__PURE__ */ new Map(), tn = [], wp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Kd(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Fl = null;
        break;
      case "dragenter":
      case "dragleave":
        Il = null;
        break;
      case "mouseover":
      case "mouseout":
        Pl = null;
        break;
      case "pointerover":
      case "pointerout":
        fr.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        dr.delete(e.pointerId);
    }
  }
  function hr(t, e, a, l, n, o) {
    return t === null || t.nativeEvent !== o ? (t = {
      blockedOn: e,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: o,
      targetContainers: [n]
    }, e !== null && (e = nl(e), e !== null && Zd(e)), t) : (t.eventSystemFlags |= l, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
  }
  function Cp(t, e, a, l, n) {
    switch (e) {
      case "focusin":
        return Fl = hr(
          Fl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "dragenter":
        return Il = hr(
          Il,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "mouseover":
        return Pl = hr(
          Pl,
          t,
          e,
          a,
          l,
          n
        ), !0;
      case "pointerover":
        var o = n.pointerId;
        return fr.set(
          o,
          hr(
            fr.get(o) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
      case "gotpointercapture":
        return o = n.pointerId, dr.set(
          o,
          hr(
            dr.get(o) || null,
            t,
            e,
            a,
            l,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Jd(t) {
    var e = ka(t.target);
    if (e !== null) {
      var a = f(e);
      if (a !== null) {
        if (e = a.tag, e === 13) {
          if (e = h(a), e !== null) {
            t.blockedOn = e, mo(t.priority, function() {
              Qd(a);
            });
            return;
          }
        } else if (e === 31) {
          if (e = p(a), e !== null) {
            t.blockedOn = e, mo(t.priority, function() {
              Qd(a);
            });
            return;
          }
        } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function F0(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var a = af(t.nativeEvent);
      if (a === null) {
        a = t.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Lu = l, a.target.dispatchEvent(l), Lu = null;
      } else
        return e = nl(a), e !== null && Zd(e), t.blockedOn = a, !1;
      e.shift();
    }
    return !0;
  }
  function Fd(t, e, a) {
    F0(t) && a.delete(e);
  }
  function Ep() {
    nf = !1, Fl !== null && F0(Fl) && (Fl = null), Il !== null && F0(Il) && (Il = null), Pl !== null && F0(Pl) && (Pl = null), fr.forEach(Fd), dr.forEach(Fd);
  }
  function I0(t, e) {
    t.blockedOn === e && (t.blockedOn = null, nf || (nf = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Ep
    )));
  }
  var P0 = null;
  function Id(t) {
    P0 !== t && (P0 = t, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        P0 === t && (P0 = null);
        for (var e = 0; e < t.length; e += 3) {
          var a = t[e], l = t[e + 1], n = t[e + 2];
          if (typeof l != "function") {
            if (lf(l || a) === null)
              continue;
            break;
          }
          var o = nl(a);
          o !== null && (t.splice(e, 3), e -= 3, qc(
            o,
            {
              pending: !0,
              data: n,
              method: a.method,
              action: l
            },
            l,
            n
          ));
        }
      }
    ));
  }
  function Wi(t) {
    function e(x) {
      return I0(x, t);
    }
    Fl !== null && I0(Fl, t), Il !== null && I0(Il, t), Pl !== null && I0(Pl, t), fr.forEach(e), dr.forEach(e);
    for (var a = 0; a < tn.length; a++) {
      var l = tn[a];
      l.blockedOn === t && (l.blockedOn = null);
    }
    for (; 0 < tn.length && (a = tn[0], a.blockedOn === null); )
      Jd(a), a.blockedOn === null && tn.shift();
    if (a = (t.ownerDocument || t).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var n = a[l], o = a[l + 1], s = n[Ye] || null;
        if (typeof o == "function")
          s || Id(a);
        else if (s) {
          var b = null;
          if (o && o.hasAttribute("formAction")) {
            if (n = o, s = o[Ye] || null)
              b = s.formAction;
            else if (lf(n) !== null) continue;
          } else b = s.action;
          typeof b == "function" ? a[l + 1] = b : (a.splice(l, 3), l -= 3), Id(a);
        }
      }
  }
  function Pd() {
    function t(o) {
      o.canIntercept && o.info === "react-transition" && o.intercept({
        handler: function() {
          return new Promise(function(s) {
            return n = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      n !== null && (n(), n = null), l || setTimeout(a, 20);
    }
    function a() {
      if (!l && !navigation.transition) {
        var o = navigation.currentEntry;
        o && o.url != null && navigation.navigate(o.url, {
          state: o.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, n = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(a, 100), function() {
        l = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
      };
    }
  }
  function of(t) {
    this._internalRoot = t;
  }
  tu.prototype.render = of.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(c(409));
    var a = e.current, l = ua();
    Gd(a, l, t, e, null, null);
  }, tu.prototype.unmount = of.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Gd(t.current, 2, null, t, null, null), U0(), e[ll] = null;
    }
  };
  function tu(t) {
    this._internalRoot = t;
  }
  tu.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = go();
      t = { blockedOn: null, target: t, priority: e };
      for (var a = 0; a < tn.length && e !== 0 && e < tn[a].priority; a++) ;
      tn.splice(a, 0, t), a === 0 && Jd(t);
    }
  };
  var th = i.version;
  if (th !== "19.3.0")
    throw Error(
      c(
        527,
        th,
        "19.3.0"
      )
    );
  at.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(c(188)) : (t = Object.keys(t).join(","), Error(c(268, t)));
    return t = z(e), t = t !== null ? y(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Ap = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: J,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var eu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!eu.isDisabled && eu.supportsFiber)
      try {
        ie = eu.inject(
          Ap
        ), Le = eu;
      } catch {
      }
  }
  return gr.createRoot = function(t, e) {
    if (!d(t)) throw Error(c(299));
    var a = !1, l = "", n = k2, o = G2, s = V2;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (l = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (o = e.onCaughtError), e.onRecoverableError !== void 0 && (s = e.onRecoverableError)), e = jd(
      t,
      1,
      !1,
      null,
      null,
      a,
      l,
      null,
      n,
      o,
      s,
      Pd
    ), t[ll] = e.current, Ds(t), new of(e);
  }, gr.hydrateRoot = function(t, e, a) {
    if (!d(t)) throw Error(c(299));
    var l = !1, n = "", o = k2, s = G2, b = V2, x = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (o = a.onUncaughtError), a.onCaughtError !== void 0 && (s = a.onCaughtError), a.onRecoverableError !== void 0 && (b = a.onRecoverableError), a.formState !== void 0 && (x = a.formState)), e = jd(
      t,
      1,
      !0,
      e,
      a ?? null,
      l,
      n,
      x,
      o,
      s,
      b,
      Pd
    ), e.context = kd(null), a = e.current, l = ua(), l = ai(l), n = Ul(l), n.callback = null, ql(a, n, l), a = l, e.current.lanes = a, wl(e, a), tl(e), t[ll] = e.current, Ds(t), new tu(e);
  }, gr.version = "19.3.0", gr;
}
var sh;
function kp() {
  if (sh) return cf.exports;
  sh = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (i) {
        console.error(i);
      }
  }
  return r(), cf.exports = jp(), cf.exports;
}
var Eu = kp();
const Au = {
  clover: { label: "Clover", color: "#35B8FF", face: "eyes", faceX: 50, faceY: 50, faceScale: 1 },
  flower: { label: "Flower", color: "#2FCB7A", face: "eyes", faceX: 50, faceY: 51, faceScale: 0.95 },
  triangle: { label: "Triangle", color: "#DC48FF", face: "eyes", faceX: 50, faceY: 61, faceScale: 0.9 },
  square: { label: "Square", color: "#35B8FF", face: "eyes", faceX: 50, faceY: 50, faceScale: 1 },
  blob: { label: "Blob", color: "#2FCB7A", face: "eyes", faceX: 49.5, faceY: 50, faceScale: 1 },
  ghost: { label: "Ghost", color: "#F4F2FA", face: "eyes", faceX: 50, faceY: 48, faceScale: 0.95 },
  circle: { label: "Circle", color: "#9A62FF", face: "eyes", faceX: 50, faceY: 50, faceScale: 1 },
  drop: { label: "Drop", color: "#1ED3C6", face: "eyes", faceX: 50, faceY: 62, faceScale: 0.9 },
  star: { label: "Star", color: "#FFD32B", face: "eyes", faceX: 50, faceY: 52, faceScale: 0.82 },
  droid: { label: "Droid", color: "#D5DBEA", face: "eyes", faceX: 50, faceY: 60, faceScale: 0.95 },
  mech: { label: "Mech", color: "#95A6C4", face: "eyes", faceX: 50, faceY: 59, faceScale: 1 },
  alien: { label: "Alien", color: "#9BE85A", face: "eyes", faceX: 50, faceY: 45, faceScale: 1.05 },
  hexagon: { label: "Hexagon", color: "#FF2A2A", face: "eyes", faceX: 50, faceY: 50, faceScale: 0.95 },
  cat: { label: "Cat", color: "#FF8C42", face: "eyes", faceX: 50, faceY: 58, faceScale: 1 },
  cloud: { label: "Cloud", color: "#CFE6FF", face: "eyes", faceX: 50, faceY: 58, faceScale: 0.95 },
  pill: { label: "Pill", color: "#7B77F0", face: "eyes", faceX: 50, faceY: 50, faceScale: 0.9 },
  pebble: { label: "Pebble", color: "#2FCB7A", face: "eyes", faceX: 50, faceY: 50, faceScale: 0.95 },
  puddle: { label: "Puddle", color: "#FF2A2A", face: "eyes", faceX: 50, faceY: 50, faceScale: 0.95 }
}, Gp = Object.keys(Au);
Object.fromEntries(
  Gp.map((r) => [r, Au[r].color])
);
const fh = {
  default: "idle",
  working: "working",
  sleeping: "sleeping"
}, dh = {
  clover: "M26.53 22.38A25 25 0 0 1 73.47 22.38A7 7 0 0 0 77.62 26.53A25 25 0 0 1 77.62 73.47A7 7 0 0 0 73.47 77.62A25 25 0 0 1 26.53 77.62A7 7 0 0 0 22.38 73.47A25 25 0 0 1 22.38 26.53A7 7 0 0 0 26.53 22.38Z",
  flower: "M31.2 19.82A20.5 20.5 0 0 1 68.8 19.82A5 5 0 0 0 72.9 22.8A20.5 20.5 0 0 1 84.51 58.55A5 5 0 0 0 82.95 63.37A20.5 20.5 0 0 1 52.54 85.47A5 5 0 0 0 47.46 85.47A20.5 20.5 0 0 1 17.05 63.37A5 5 0 0 0 15.49 58.55A20.5 20.5 0 0 1 27.1 22.8A5 5 0 0 0 31.2 19.82Z",
  triangle: "M38.75 27.43A13 13 0 0 1 61.25 27.43L82.7 64.49A13 13 0 0 1 71.45 84L28.55 84A13 13 0 0 1 17.3 64.49L38.75 27.43Z",
  square: "M93 50C93 53.66 92.96 58.23 92.88 60.97C92.8 63.71 92.67 64.81 92.51 66.44C92.35 68.08 92.15 69.44 91.9 70.77C91.66 72.1 91.37 73.3 91.04 74.44C90.72 75.58 90.35 76.63 89.94 77.63C89.53 78.63 89.07 79.55 88.58 80.43C88.08 81.31 87.54 82.13 86.96 82.9C86.37 83.67 85.75 84.39 85.07 85.07C84.39 85.75 83.67 86.37 82.9 86.96C82.13 87.54 81.31 88.08 80.43 88.58C79.55 89.07 78.63 89.53 77.63 89.94C76.63 90.35 75.58 90.72 74.44 91.04C73.3 91.37 72.1 91.66 70.77 91.9C69.44 92.15 68.08 92.35 66.44 92.51C64.81 92.67 63.71 92.8 60.97 92.88C58.23 92.96 53.66 93 50 93C46.34 93 41.77 92.96 39.03 92.88C36.29 92.8 35.19 92.67 33.56 92.51C31.92 92.35 30.56 92.15 29.23 91.9C27.9 91.66 26.7 91.37 25.56 91.04C24.42 90.72 23.37 90.35 22.37 89.94C21.37 89.53 20.45 89.07 19.57 88.58C18.69 88.08 17.87 87.54 17.1 86.96C16.33 86.37 15.61 85.75 14.93 85.07C14.25 84.39 13.63 83.67 13.04 82.9C12.46 82.13 11.92 81.31 11.42 80.43C10.93 79.55 10.47 78.63 10.06 77.63C9.65 76.63 9.28 75.58 8.96 74.44C8.63 73.3 8.34 72.1 8.1 70.77C7.85 69.44 7.65 68.08 7.49 66.44C7.33 64.81 7.2 63.71 7.12 60.97C7.04 58.23 7 53.66 7 50C7 46.34 7.04 41.77 7.12 39.03C7.2 36.29 7.33 35.19 7.49 33.56C7.65 31.92 7.85 30.56 8.1 29.23C8.34 27.9 8.63 26.7 8.96 25.56C9.28 24.42 9.65 23.37 10.06 22.37C10.47 21.37 10.93 20.45 11.42 19.57C11.92 18.69 12.46 17.87 13.04 17.1C13.63 16.33 14.25 15.61 14.93 14.93C15.61 14.25 16.33 13.63 17.1 13.04C17.87 12.46 18.69 11.92 19.57 11.42C20.45 10.93 21.37 10.47 22.37 10.06C23.37 9.65 24.42 9.28 25.56 8.96C26.7 8.63 27.9 8.34 29.23 8.1C30.56 7.85 31.92 7.65 33.56 7.49C35.19 7.33 36.29 7.2 39.03 7.12C41.77 7.04 46.34 7 50 7C53.66 7 58.23 7.04 60.97 7.12C63.71 7.2 64.81 7.33 66.44 7.49C68.08 7.65 69.44 7.85 70.77 8.1C72.1 8.34 73.3 8.63 74.44 8.96C75.58 9.28 76.63 9.65 77.63 10.06C78.63 10.47 79.55 10.93 80.43 11.42C81.31 11.92 82.13 12.46 82.9 13.04C83.67 13.63 84.39 14.25 85.07 14.93C85.75 15.61 86.37 16.33 86.96 17.1C87.54 17.87 88.08 18.69 88.58 19.57C89.07 20.45 89.53 21.37 89.94 22.37C90.35 23.37 90.72 24.42 91.04 25.56C91.37 26.7 91.66 27.9 91.9 29.23C92.15 30.56 92.35 31.92 92.51 33.56C92.67 35.19 92.8 36.29 92.88 39.03C92.96 41.77 93 46.34 93 50Z",
  blob: "M93.92 50C94.18 51.9 94.24 53.9 93.99 55.79C93.73 57.68 93.18 59.61 92.39 61.36C91.6 63.1 90.48 64.78 89.27 66.27C88.07 67.76 86.58 69.08 85.14 70.29C83.7 71.49 82.1 72.5 80.62 73.5C79.14 74.49 77.64 75.34 76.24 76.24C74.84 77.15 73.51 78 72.2 78.93C70.88 79.86 69.66 80.83 68.36 81.8C67.06 82.76 65.78 83.82 64.39 84.74C63 85.67 61.55 86.63 60.01 87.35C58.47 88.08 56.82 88.73 55.15 89.1C53.48 89.47 51.71 89.64 50 89.57C48.29 89.5 46.55 89.16 44.91 88.68C43.27 88.21 41.67 87.47 40.16 86.72C38.65 85.96 37.24 85.02 35.86 84.13C34.48 83.24 33.19 82.29 31.89 81.37C30.58 80.46 29.32 79.56 28.03 78.63C26.74 77.71 25.44 76.82 24.16 75.84C22.88 74.86 21.57 73.87 20.36 72.74C19.15 71.62 17.95 70.42 16.91 69.1C15.88 67.79 14.92 66.35 14.15 64.85C13.38 63.35 12.76 61.73 12.29 60.1C11.81 58.48 11.52 56.78 11.29 55.1C11.06 53.41 10.98 51.71 10.91 50C10.83 48.29 10.83 46.59 10.83 44.84C10.84 43.1 10.85 41.34 10.93 39.53C11.02 37.72 11.09 35.86 11.34 33.99C11.59 32.12 11.88 30.16 12.43 28.31C12.99 26.46 13.69 24.56 14.66 22.88C15.64 21.21 16.86 19.58 18.27 18.27C19.69 16.96 21.4 15.84 23.17 15.03C24.93 14.22 26.95 13.71 28.89 13.43C30.83 13.15 32.9 13.21 34.82 13.36C36.74 13.5 38.66 13.92 40.43 14.28C42.2 14.65 43.87 15.16 45.46 15.54C47.06 15.93 48.52 16.31 50 16.58C51.48 16.85 52.87 17.02 54.32 17.17C55.77 17.32 57.22 17.36 58.71 17.49C60.2 17.62 61.74 17.7 63.28 17.95C64.81 18.19 66.39 18.5 67.91 18.98C69.43 19.46 70.95 20.08 72.38 20.83C73.81 21.58 75.19 22.5 76.5 23.5C77.81 24.5 79.03 25.63 80.22 26.81C81.41 27.99 82.54 29.25 83.65 30.57C84.76 31.89 85.85 33.26 86.89 34.72C87.93 36.18 88.98 37.69 89.9 39.31C90.82 40.92 91.73 42.64 92.4 44.42C93.07 46.2 93.66 48.1 93.92 50Z",
  ghost: "M17 50C17 31.78 31.78 17 50 17C68.22 17 83 31.78 83 50V81.5Q72 93.5 61 81.5Q50 93.5 39 81.5Q28 93.5 17 81.5Z",
  circle: "M50 8A42 42 0 1 1 50 92A42 42 0 1 1 50 8Z",
  drop: "M50 8.5C52.2 8.5 53.4 10.3 56.4 15.2C62.9 25.5 84 44.6 84 61.5C84 80.3 68.8 92 50 92C31.2 92 16 80.3 16 61.5C16 44.6 37.1 25.5 43.6 15.2C46.6 10.3 47.8 8.5 50 8.5Z",
  star: "M45.77 9.7A5 5 0 0 1 54.23 9.7L65.02 26.81A4 4 0 0 0 67.42 28.55L87.02 33.53A5 5 0 0 1 89.63 41.57L76.7 57.12A4 4 0 0 0 75.78 59.94L77.11 80.12A5 5 0 0 1 70.26 85.09L51.48 77.59A4 4 0 0 0 48.52 77.59L29.74 85.09A5 5 0 0 1 22.89 80.12L24.22 59.94A4 4 0 0 0 23.3 57.12L10.37 41.57A5 5 0 0 1 12.98 33.53L32.58 28.55A4 4 0 0 0 34.98 26.81L45.77 9.7Z",
  droid: "M16 50C16 38.95 24.95 30 36 30H64C75.05 30 84 38.95 84 50V70C84 81.05 75.05 90 64 90H36C24.95 90 16 81.05 16 70ZM4 62A7 7 0 1 1 18 62A7 7 0 1 1 4 62ZM82 62A7 7 0 1 1 96 62A7 7 0 1 1 82 62Z",
  mech: "M10 48C10 38.06 18.06 30 28 30H72C81.94 30 90 38.06 90 48V70C90 79.94 81.94 88 72 88H28C18.06 88 10 79.94 10 70ZM3 54C3 51.79 4.79 50 7 50H11V72H7C4.79 72 3 70.21 3 68ZM89 50H93C95.21 50 97 51.79 97 54V68C97 70.21 95.21 72 93 72H89Z",
  alien: "M50 10C70 10 83 27 83 46C83 65 64 92 50 92C36 92 17 65 17 46C17 27 30 10 50 10Z",
  hexagon: "M91.4 45.5A9 9 0 0 1 91.4 54.5L74.6 83.61A9 9 0 0 1 66.8 88.11L33.2 88.11A9 9 0 0 1 25.4 83.61L8.6 54.5A9 9 0 0 1 8.6 45.5L25.4 16.39A9 9 0 0 1 33.2 11.89L66.8 11.89A9 9 0 0 1 74.6 16.39L91.4 45.5Z",
  cat: "M50 20A36 36 0 1 1 50 92A36 36 0 1 1 50 20ZM24.72 44.64A4.5 4.5 0 0 1 17.35 40.67L20.21 16.66A4.5 4.5 0 0 1 26.86 13.26L42.3 21.83A4.5 4.5 0 0 1 43.02 29.21L24.72 44.64ZM82.65 40.67A4.5 4.5 0 0 1 75.28 44.64L56.98 29.21A4.5 4.5 0 0 1 57.7 21.83L73.14 13.26A4.5 4.5 0 0 1 79.79 16.66L82.65 40.67Z",
  cloud: "M19 44A25 25 0 1 1 69 44A25 25 0 1 1 19 44ZM47 50A21 21 0 1 1 89 50A21 21 0 1 1 47 50ZM7 68A17 17 0 1 1 41 68A17 17 0 1 1 7 68ZM32 73A18 18 0 1 1 68 73A18 18 0 1 1 32 73ZM60 70A16 16 0 1 1 92 70A16 16 0 1 1 60 70Z",
  pill: "M28 28H72C84.15 28 94 37.85 94 50C94 62.15 84.15 72 72 72H28C15.85 72 6 62.15 6 50C6 37.85 15.85 28 28 28Z",
  pebble: "M94.6 50C94.71 51.92 94.56 53.93 94.17 55.82C93.79 57.7 93.13 59.6 92.28 61.33C91.44 63.06 90.32 64.72 89.1 66.19C87.87 67.67 86.41 69.01 84.92 70.16C83.42 71.31 81.75 72.29 80.11 73.1C78.47 73.92 76.73 74.55 75.06 75.06C73.39 75.58 71.7 75.91 70.1 76.2C68.5 76.48 66.93 76.62 65.45 76.76C63.96 76.9 62.55 76.94 61.2 77.03C59.84 77.11 58.57 77.16 57.31 77.26C56.05 77.36 54.86 77.48 53.64 77.63C52.42 77.79 51.24 77.98 50 78.18C48.76 78.39 47.52 78.64 46.2 78.85C44.89 79.06 43.53 79.3 42.11 79.46C40.69 79.61 39.2 79.75 37.67 79.77C36.14 79.78 34.54 79.74 32.95 79.54C31.35 79.33 29.7 79.03 28.1 78.55C26.49 78.07 24.86 77.45 23.33 76.67C21.8 75.88 20.29 74.94 18.92 73.85C17.54 72.77 16.23 71.51 15.08 70.16C13.94 68.8 12.9 67.29 12.04 65.72C11.17 64.16 10.45 62.46 9.91 60.74C9.36 59.03 8.98 57.22 8.76 55.43C8.55 53.64 8.5 51.8 8.6 50C8.71 48.2 8.98 46.39 9.38 44.65C9.79 42.91 10.35 41.19 11.02 39.56C11.7 37.92 12.52 36.34 13.43 34.85C14.34 33.37 15.39 31.96 16.5 30.66C17.61 29.36 18.84 28.15 20.11 27.07C21.39 25.98 22.76 25 24.15 24.15C25.54 23.3 27.01 22.56 28.48 21.95C29.94 21.33 31.46 20.85 32.95 20.46C34.44 20.08 35.95 19.83 37.43 19.66C38.91 19.48 40.38 19.43 41.81 19.43C43.24 19.43 44.64 19.53 46.01 19.66C47.37 19.78 48.7 19.98 50 20.18C51.3 20.39 52.57 20.63 53.83 20.87C55.1 21.11 56.34 21.37 57.6 21.62C58.87 21.87 60.13 22.12 61.43 22.39C62.74 22.66 64.07 22.93 65.45 23.24C66.83 23.56 68.25 23.88 69.72 24.3C71.19 24.72 72.71 25.17 74.25 25.75C75.78 26.34 77.37 27 78.91 27.81C80.46 28.63 82.04 29.56 83.5 30.66C84.97 31.75 86.43 33 87.7 34.38C88.98 35.77 90.19 37.32 91.17 38.97C92.14 40.62 92.98 42.43 93.56 44.27C94.13 46.1 94.5 48.08 94.6 50Z",
  puddle: "M85.34 50C85.65 51.54 85.9 53.13 86.01 54.74C86.11 56.35 86.11 58 85.95 59.63C85.8 61.26 85.51 62.93 85.07 64.52C84.62 66.12 84.03 67.72 83.3 69.23C82.58 70.74 81.7 72.21 80.72 73.57C79.74 74.94 78.62 76.23 77.43 77.43C76.24 78.62 74.93 79.72 73.58 80.73C72.23 81.74 70.79 82.65 69.33 83.48C67.86 84.31 66.34 85.04 64.79 85.71C63.24 86.37 61.65 86.95 60.04 87.46C58.42 87.96 56.77 88.4 55.1 88.75C53.43 89.09 51.72 89.37 50 89.54C48.28 89.71 46.52 89.81 44.76 89.76C43.01 89.72 41.22 89.58 39.47 89.29C37.72 89 35.95 88.58 34.26 88C32.57 87.42 30.89 86.69 29.33 85.8C27.77 84.92 26.26 83.87 24.91 82.7C23.56 81.53 22.3 80.19 21.23 78.77C20.16 77.35 19.22 75.79 18.47 74.2C17.71 72.61 17.13 70.91 16.7 69.23C16.26 67.55 16.02 65.81 15.88 64.13C15.75 62.45 15.78 60.76 15.88 59.14C15.97 57.52 16.21 55.94 16.45 54.42C16.7 52.89 17.03 51.43 17.34 50C17.65 48.57 18 47.2 18.32 45.83C18.63 44.46 18.94 43.13 19.24 41.76C19.53 40.39 19.79 39.03 20.08 37.61C20.36 36.18 20.62 34.74 20.95 33.23C21.28 31.72 21.61 30.16 22.07 28.57C22.52 26.98 23.02 25.32 23.69 23.69C24.35 22.06 25.11 20.38 26.05 18.79C26.99 17.21 28.08 15.62 29.33 14.2C30.58 12.78 32 11.41 33.54 10.26C35.08 9.12 36.8 8.11 38.57 7.35C40.34 6.6 42.27 6.04 44.17 5.73C46.08 5.43 48.08 5.37 50 5.54C51.92 5.71 53.87 6.15 55.69 6.75C57.52 7.36 59.3 8.22 60.94 9.19C62.57 10.15 64.11 11.33 65.51 12.56C66.91 13.78 68.17 15.15 69.33 16.52C70.48 17.89 71.5 19.34 72.44 20.76C73.38 22.18 74.19 23.62 74.97 25.03C75.75 26.43 76.44 27.83 77.12 29.19C77.8 30.56 78.42 31.89 79.05 33.23C79.67 34.57 80.28 35.87 80.87 37.21C81.46 38.55 82.05 39.88 82.6 41.27C83.14 42.65 83.68 44.05 84.14 45.51C84.6 46.96 85.03 48.46 85.34 50Z"
}, hh = {
  droid: "M47.5 14H52.5V32H47.5ZM43 11A7 7 0 1 1 57 11A7 7 0 1 1 43 11Z",
  mech: "M19.5 32L24.5 32L17 13L12 13ZM75.5 32L80.5 32L88 13L83 13ZM10 11.5A4.5 4.5 0 1 1 19 11.5A4.5 4.5 0 1 1 10 11.5ZM81 11.5A4.5 4.5 0 1 1 90 11.5A4.5 4.5 0 1 1 81 11.5Z"
};
function Ff(r) {
  const i = r.trim(), u = i.match(/^hsla?\(\s*([\d.]+)(?:deg)?[,\s]+([\d.]+)%[,\s]+([\d.]+)%/i);
  if (u) return Jp([Number(u[1]) / 360, Number(u[2]) / 100, Number(u[3]) / 100]);
  const c = i.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (c) {
    let f = c[1];
    f.length === 3 && (f = f.split("").map((p) => p + p).join(""));
    const h = parseInt(f, 16);
    return [h >> 16 & 255, h >> 8 & 255, h & 255];
  }
  const d = i.match(/^rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/i);
  return d ? [Number(d[1]), Number(d[2]), Number(d[3])] : null;
}
function Vp(r) {
  const i = Ff(r);
  if (!i) return 0.5;
  const u = (c) => {
    const d = c / 255;
    return d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * u(i[0]) + 0.7152 * u(i[1]) + 0.0722 * u(i[2]);
}
const Zp = "#1E1A33", Qp = "#F7F5F2";
function Wp(r) {
  return Vp(r) < 0.13 ? Qp : Zp;
}
function Kp([r, i, u]) {
  r /= 255, i /= 255, u /= 255;
  const c = Math.max(r, i, u), d = Math.min(r, i, u), f = (c + d) / 2;
  if (c === d) return [0, 0, f];
  const h = c - d, p = f > 0.5 ? h / (2 - c - d) : h / (c + d);
  let g = 0;
  return c === r ? g = (i - u) / h + (i < u ? 6 : 0) : c === i ? g = (u - r) / h + 2 : g = (r - i) / h + 4, [g / 6, p, f];
}
function Jp([r, i, u]) {
  if (i === 0) return [u * 255, u * 255, u * 255];
  const c = u < 0.5 ? u * (1 + i) : u + i - u * i, d = 2 * u - c, f = (h) => (h = (h % 1 + 1) % 1, h < 1 / 6 ? d + (c - d) * 6 * h : h < 1 / 2 ? c : h < 2 / 3 ? d + (c - d) * (2 / 3 - h) * 6 : d);
  return [f(r + 1 / 3) * 255, f(r) * 255, f(r - 1 / 3) * 255];
}
function Fp([r, i, u]) {
  return `hsl(${(r * 360).toFixed(1)} ${(i * 100).toFixed(1)}% ${(u * 100).toFixed(1)}%)`;
}
const bh = (r) => Math.min(1, Math.max(0, r));
function wa(r, i, u = 0) {
  const c = Ff(r);
  if (!c) return r;
  const [d, f, h] = Kp(c);
  return Fp([d, bh(f + u + (i < 0 ? -i * 0.25 : 0)), bh(h + i)]);
}
const yu = ["default", "working", "sleeping"], xu = 0.68, gb = 26, Ip = 0.2, gh = { height: gb, time: xu, stretch: 1, squash: 1.15, squashTime: 0.37, squashEase: "pulse", groundTime: 0.11, groundEase: "pulse", riseTime: 0.33, riseEase: "pulse", clickSquashTime: 0.24, spin: 1, lean: 6, every: 8, land: 0 }, mb = (r, i) => i ? r.clickSquashTime : Ip * r.time, hf = (r, i) => mb(r, i) + r.time + pb[r.squashEase] * (i ? r.clickSquashTime : r.squashTime) + Math.max(0, r.groundTime) + r.riseTime + Math.max(0, r.land) + 0.05, pb = { sharp: 0, pulse: 2 / 7, soft: 0.5, bouncy: 0.144 }, mh = (r, i) => {
  if (r <= 0) return 1;
  if (r >= 1) return 0;
  switch (i) {
    case "sharp":
      return (1 - r) * (1 - r);
    case "soft":
      return 0.5 + 0.5 * Math.cos(Math.PI * r);
    case "bouncy":
      return Math.exp(-3.2 * r) * Math.cos(5.4 * r) - r * r * r * 0.026;
    default: {
      const u = 4.2 * r;
      return (1 + u) * Math.exp(-u) - r * r * r * 0.078;
    }
  }
}, ph = (r, i) => 1 + 0.25 * vb(r, i), vb = (r, i) => {
  if (r <= 0 || r >= 1) return 0;
  let u;
  switch (i) {
    case "sharp":
      u = (1 - r) * (1 - r);
      break;
    case "soft":
      u = Math.sin(Math.PI * r) ** 2;
      break;
    case "bouncy":
      u = Math.exp(-3.15 * r) * Math.sin(8.43 * r) / 0.596;
      break;
    default: {
      const d = 7 * r;
      u = d * d * Math.exp(2 - d) / 4;
    }
  }
  const c = r > 0.85 ? 1 - (r - 0.85) / 0.15 : 1;
  return u * c * c * (3 - 2 * c);
}, bf = (r) => Math.exp(-Math.pow(Math.min(Math.abs(r), Math.abs(r - 1)) / 0.11, 2)), we = Math.PI / 180, an = Math.PI * 2, Pp = { default: 1.2, working: 0.7, sleeping: 1.4 }, t3 = 1;
function e3(r) {
  let i = r * 2654435761 >>> 0 || 1;
  return () => {
    i = i + 1831565813 >>> 0;
    let u = i;
    return u = Math.imul(u ^ u >>> 15, u | 1), u ^= u + Math.imul(u ^ u >>> 7, u | 61), ((u ^ u >>> 14) >>> 0) / 4294967296;
  };
}
function jn(r, i, u, c) {
  return r + (i - r) * (1 - Math.exp(-u * c));
}
const mr = (r) => r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2, a3 = (r) => 0.5 - 0.5 * Math.cos(Math.PI * r);
class pr {
  /* A channel that picks a new target now and then and moves to it. The
     head channels move as a lightly damped spring — the turn starts and
     ends softly, the way a head does — while the eyes dart with an
     exponential approach, the way eyes do. */
  constructor(i, u, c, d, f, h = !1) {
    this.rand = i, this.amp = u, this.holdMin = c, this.holdMax = d, this.rate = f, this.spring = h, this.value = 0, this.vel = 0, this.target = 0, this.next = 0;
  }
  update(i, u) {
    if (i >= this.next && (this.target = (this.rand() * 2 - 1) * this.amp, this.next = i + this.holdMin + this.rand() * (this.holdMax - this.holdMin)), this.spring) {
      const c = this.rate * 1.6, d = 0.9;
      this.vel += (c * c * (this.target - this.value) - 2 * d * c * this.vel) * u, this.value += this.vel * u;
    } else this.value = jn(this.value, this.target, this.rate, u);
  }
  /** aim at a value and stay there: the rig picks the next one */
  aim(i) {
    this.target = i, this.next = 1 / 0;
  }
  set(i, u, c, d) {
    this.amp = i, this.holdMin = u, this.holdMax = c, this.rate = d, this.next = 0;
  }
}
class vr {
  constructor(i) {
    this.duration = i, this.p = -1;
  }
  fire() {
    this.p = 0;
  }
  get active() {
    return this.p >= 0;
  }
  update(i) {
    this.p < 0 || (this.p += i / this.duration, this.p >= 1 && (this.p = -1));
  }
}
const vh = 35 * we, yh = 14 * we, xh = 3.2 * we, zh = 2.6, l3 = 4.4, yb = {
  default: { pitch: 0, roll: 0, y: 0, lookX: 0, lookY: 0 },
  working: { pitch: 5 * we, roll: 0, y: 0, lookX: 0, lookY: 0 },
  sleeping: { pitch: -16 * we, roll: 6 * we, y: 3, lookX: 0, lookY: 1 }
};
class n3 {
  constructor(i, u = "default") {
    this.pose = { yaw: 0, pitch: 0, roll: 0, x: 0, y: 0, sx: 1, sy: 1, eyeOpen: 1, blinkL: 0, blinkR: 0, lookX: 0, lookY: 0, breath: 0, laugh: 0, whirl: 0, whirlAngle: 0, w: [1, 0, 0] }, this.state = "default", this.t = 0, this.wFrom = [1, 0, 0], this.tr = 1, this.trDuration = 1.2, this.blink = new vr(0.17), this.blinkAgain = !1, this.dart = new vr(0.12), this.dartX = 0, this.dartY = 0, this.flip = new vr(hf(gh, !1)), this.flipPoked = !1, this.jump = { ...gh }, this.flipSide = 1, this.nod = new vr(1.7), this.hopPhase = 0, this.hopCount = 0, this.hopGain = 0, this.laughEv = new vr(0.8), this.prevYaw = 0, this.jelly = 0, this.jellyV = 0, this.gazeLead = 0, this.gazeDir = [0, 0], this.gazeAt = 0, this.turnK = 1, this.breathPhase = 0, this.ptrX = 0, this.ptrY = 0, this.ptrS = 0, this.ptrTargetX = 0, this.ptrTargetY = 0, this.ptrTargetS = 0, this.baseYaw = 0, this.rand = e3(Math.floor(i * 1e6) + 1);
    const c = this.rand;
    this.yawW = new pr(c, 36 * we, 1.1, 2.6, 3, !0), this.pitchW = new pr(c, 10 * we, 1.1, 2.6, 2.6, !0), this.rollW = new pr(c, 5 * we, 1.6, 3.2, 2, !0), this.lookXW = new pr(c, 3.6, 0.5, 2, 14), this.lookYW = new pr(c, 2.4, 0.5, 2, 14), this.t = c() * 10, this.hopPhase = c(), this.breathPhase = c(), this.blinkAt = this.t + 1 + c() * 3, this.flipAt = this.nextFlip(this.t, 1), this.nodAt = this.t + 3 + c() * 4, this.dartAt = this.t + 1 + c() * 2, this.laughAt = this.t + 0.6 + c() * 1.5, this.setState(u, !0);
  }
  setState(i, u = !1) {
    if (i === this.state && !u) return;
    const c = this.state;
    this.state = i;
    const d = this.pose.w;
    if (u) {
      for (let f = 0; f < 3; f++) d[f] = yu[f] === i ? 1 : 0;
      this.tr = 1;
    } else
      this.wFrom = [d[0], d[1], d[2]], this.tr = 0, this.trDuration = c === "sleeping" ? t3 : Pp[i];
    switch (i) {
      case "default":
        this.yawW.set(vh, 2.6, 5.4, 2), this.pitchW.set(yh, 2.8, 5.8, 1.8), this.rollW.set(xh, 3.4, 6.6, 1.5), this.gazeAt = 0, this.gazeDir = [0, 0], this.lookXW.set(3.6, 0.6, 2.2, 13), this.lookYW.set(2.4, 0.6, 2.2, 13), this.flipAt = this.nextFlip(this.t, 0.6);
        break;
      case "working":
        this.yawW.set(16 * we, 0.9, 1.8, 4), this.pitchW.set(3 * we, 1.2, 2.4, 3), this.rollW.set(0, 1, 2, 3), this.lookXW.set(2, 0.5, 1.2, 12), this.lookYW.set(1, 0.5, 1.2, 12), this.hopPhase = 0, this.hopCount = 0, this.laughAt = this.t + 0.5 + this.rand() * 1.2;
        break;
      case "sleeping":
        this.yawW.set(7 * we, 3, 6, 0.7), this.pitchW.set(3 * we, 3, 6, 0.7), this.rollW.set(2 * we, 3, 6, 0.6), this.lookXW.set(0, 2, 4, 2), this.lookYW.set(0, 2, 4, 2), this.nodAt = this.t + 2.5 + this.rand() * 4;
        break;
    }
  }
  /** Where the pointer is, relative to the head (−1 … 1 across a head
      width), and how strongly to follow it (0 lets go). */
  setPointer(i, u, c) {
    this.ptrTargetX = Math.max(-1.2, Math.min(1.2, i)), this.ptrTargetY = Math.max(-1.2, Math.min(1.2, u)), this.ptrTargetS = Math.max(0, Math.min(1, c));
  }
  /** A hop and a full turn, right now, whatever the state. */
  poke() {
    this.flip.active && this.flip.p < 0.6 || (this.flipPoked = !0, this.flip.duration = hf(this.jump, !0), this.flipSide = this.rand() < 0.5 ? -1 : 1, this.flip.fire(), this.flipAt = this.nextFlip(this.t, 1.1));
  }
  /** How far the head turns to the side while idle: 1 as the gaze has
      it, 0 keeps it facing forward. */
  setTurn(i) {
    const u = Math.max(0, i);
    u !== this.turnK && (this.turnK = u, this.state === "default" && (this.gazeAt = 0));
  }
  /** The jump's numbers; any subset. */
  setJump(i) {
    const u = this.jump.every;
    Object.assign(this.jump, i), i.every !== void 0 && i.every !== u && (this.flipAt = this.nextFlip(this.t, 1));
  }
  /* Where the head looks next. From a corner it mostly swings straight
     across to the opposite one — top right, stay, bottom left — now and
     then only sideways, or back to the middle for a beat. */
  nextGaze() {
    const i = this.rand, [u, c] = this.gazeDir;
    if (u !== 0 || c !== 0) {
      const f = i();
      return f < 0.66 ? [-u, -c] : f < 0.85 ? [-u, c] : [0, 0];
    }
    const d = [
      [1, -1],
      [-1, 1],
      [-1, -1],
      [1, 1]
    ];
    return d[Math.floor(i() * d.length)];
  }
  /** when the next idle jump is due: `every` seconds, give or take 40 % */
  nextFlip(i, u) {
    const c = this.jump.every;
    return c > 0 ? i + c * u * (0.625 + this.rand() * 0.75) : 1 / 0;
  }
  /** Advance by `dt` seconds (already scaled by the speed). */
  update(i) {
    i = Math.min(i, 0.05), this.t += i;
    const u = this.t, c = this.pose, d = c.w;
    if (this.tr < 1) {
      this.tr = Math.min(1, this.tr + i / this.trDuration);
      const Y = a3(this.tr);
      for (let lt = 0; lt < 3; lt++) {
        const st = yu[lt] === this.state ? 1 : 0;
        d[lt] = this.wFrom[lt] + (st - this.wFrom[lt]) * Y;
      }
    }
    const [f, h, p] = d, g = { pitch: 0, roll: 0, y: 0, lookX: 0, lookY: 0 };
    for (let Y = 0; Y < 3; Y++) {
      const lt = yb[yu[Y]];
      g.pitch += lt.pitch * d[Y], g.roll += lt.roll * d[Y], g.y += lt.y * d[Y], g.lookX += lt.lookX * d[Y], g.lookY += lt.lookY * d[Y];
    }
    if (this.state === "default" && u >= this.gazeAt) {
      const [Y, lt] = this.nextGaze();
      this.gazeDir = [Y, lt];
      const st = 0.84 + this.rand() * 0.16;
      this.yawW.aim(Y * vh * st * this.turnK), this.pitchW.aim(lt * yh * st), this.rollW.aim(Y * xh * st * this.turnK), this.gazeAt = u + zh + this.rand() * (l3 - zh);
    }
    this.yawW.update(u, i), this.pitchW.update(u, i), this.rollW.update(u, i), this.lookXW.update(u, i), this.lookYW.update(u, i), this.ptrS = jn(this.ptrS, this.ptrTargetS, 8, i), this.ptrX = jn(this.ptrX, this.ptrTargetX, 14, i), this.ptrY = jn(this.ptrY, this.ptrTargetY, 14, i);
    const z = this.ptrS, y = 1 - 0.75 * z;
    this.baseYaw = jn(this.baseYaw, this.yawW.value * y + 22 * we * this.ptrX * z, 5, i);
    const m = g.pitch + this.pitchW.value * y - 12 * we * this.ptrY * z, v = g.roll + this.rollW.value * y, S = g.y, w = g.lookX + this.lookXW.value * y + 4.5 * this.ptrX * z, X = g.lookY + this.lookYW.value * y + 3 * this.ptrY * z;
    let $ = 0, U = 0, G = 1, Q = 1, j = 0, q = 0, W = 0, _ = 0, E = 0, L = 0, k = 0, K = 0;
    const V = (Y, lt, st) => {
      const tt = Math.min(1, Math.max(0, (st - Y) / (lt - Y)));
      return tt * tt * (3 - 2 * tt);
    }, rt = (Y) => V(0.1, 0.26, Y) * (1 - V(0.66, 0.9, Y)), nt = (Y) => an * (1.5 * Y + 0.9 * mr(Y));
    if (u >= this.blinkAt && !this.blink.active && f + h > 0.5 && (this.blink.fire(), this.blinkAgain = !this.blinkAgain && this.rand() < 0.22, this.blinkAt = u + (this.blinkAgain ? 0.28 : 2.2 + this.rand() * 2.6)), this.blink.update(i), this.blink.active && (W = Math.sin(Math.PI * this.blink.p)), u >= this.dartAt && !this.dart.active && f + h > 0.5 && (this.dart.fire(), this.dartX = (this.rand() * 2 - 1) * 4, this.dartY = (this.rand() * 2 - 1) * 2, this.dart.duration = 0.25 + this.rand() * 0.45, this.dartAt = u + 1.2 + this.rand() * 2.6), this.dart.update(i), this.dart.active) {
      const Y = this.dart.p, lt = Y < 0.15 ? Y / 0.15 : Y > 0.8 ? (1 - Y) / 0.2 : 1;
      _ += this.dartX * lt * (f + h), E += this.dartY * lt * (f + h);
    }
    if (this.state === "default" && u >= this.flipAt && !this.flip.active && (this.flipPoked = !1, this.flip.duration = hf(this.jump, !1), this.flipSide = this.rand() < 0.5 ? -1 : 1, this.flip.fire(), this.flipAt = this.nextFlip(u, 1)), this.flip.update(i), this.flip.active) {
      const Y = this.jump, lt = mb(Y, this.flipPoked), st = (this.flip.p * this.flip.duration - lt) / Y.time, tt = Math.min(1, Math.max(0, st)), J = Math.sin(Math.PI * tt);
      $ += an * Y.spin * mr(tt), U -= Y.height * J;
      const at = (st - 1) * Y.time - Y.land, ht = this.flipPoked ? Y.clickSquashTime : Y.squashTime, yt = (Gt) => this.flipPoked ? Gt * Gt * (3 - 2 * Gt) : bf(Gt - 1), Mt = Math.max(0, Y.groundTime), $t = pb[Y.squashEase] * ht, wt = at - $t - Mt, pt = at <= $t ? vb(at / ht, Y.squashEase) : wt <= 0 ? ph((at - $t) / Mt, Y.groundEase) : mh(wt / Y.riseTime, Y.riseEase), Dt = (st < 0 ? yt(Math.max(0, 1 + st * Y.time / lt)) : at > 0 ? pt : st < 0.2 ? bf(st) : 0) * Y.squash;
      G += 0.16 * Dt - 0.06 * J * Y.stretch, Q += -0.18 * Dt + 0.09 * J * Y.stretch, q += this.flipSide * Y.lean * we * J, Y.spin > 0 && (L = Math.max(L, J), k = Math.max(k, rt(tt)), K = nt(tt));
    }
    const it = this.jump, R = Math.max(0, it.groundTime), et = R + it.riseTime;
    if (this.state === "working" && (this.hopGain = h), this.hopGain > 0.02 && (this.state === "working" || this.hopPhase > 0)) {
      this.hopPhase += i / xu, this.hopPhase >= 1 && (this.state === "working" ? (this.hopPhase -= 1, this.hopCount += 1) : (this.hopPhase - 1) * xu >= et && (this.hopPhase = 0, this.hopGain = 0));
      const Y = this.hopGain, lt = Math.min(1, this.hopPhase), st = Math.sin(Math.PI * lt), tt = this.hopCount % 3 === 2;
      U -= (tt ? gb : 18) * st * Y;
      const J = this.state !== "working" && this.hopPhase > 1 ? (this.hopPhase - 1) * xu : -1, at = J < 0 ? bf(this.hopPhase) : J < R ? ph(J / R, it.groundEase) : mh((J - R) / it.riseTime, it.riseEase);
      G += (0.16 * at - 0.06 * st) * Y, Q += (-0.18 * at + 0.09 * st) * Y, tt && ($ += an * mr(lt) * Y, L = Math.max(L, st * Y), rt(lt) * Y > k && (k = rt(lt) * Y, K = nt(lt))), q += (this.hopCount % 2 === 0 ? 1 : -1) * 6 * we * st * Y;
    }
    if (this.state === "working" && u >= this.laughAt && !this.laughEv.active && (this.laughEv.fire(), this.laughEv.duration = 0.6 + this.rand() * 0.5, this.laughAt = u + 1.6 + this.rand() * 2.2), this.laughEv.update(i), this.laughEv.active) {
      const Y = this.laughEv.p;
      L = Math.max(L, Y < 0.18 ? Y / 0.18 : Y > 0.78 ? (1 - Y) / 0.22 : 1);
    }
    if (this.state === "sleeping" && u >= this.nodAt && !this.nod.active && (this.nod.fire(), this.nodAt = u + 4 + this.rand() * 4), this.nod.update(i), this.nod.active) {
      const Y = this.nod.p, lt = Y < 0.72 ? mr(Y / 0.72) : 1 - mr((Y - 0.72) / 0.28);
      j -= 13 * we * lt * p;
    }
    this.breathPhase += i / (3.6 + 1.2 * p);
    const Z = Math.sin(this.breathPhase * an);
    c.breath = Z, G += Z * (8e-3 + 0.014 * p), Q += Z * (0.012 + 0.02 * p);
    const ot = Math.sin(u * an / 3.4) * 2 * (1 - p);
    c.yaw = this.baseYaw + $;
    let F = this.baseYaw - this.prevYaw;
    F = ((F + Math.PI) % an + an) % an - Math.PI, this.prevYaw = this.baseYaw;
    const ct = i > 0 ? Math.abs(F) / i : 0, ft = i > 0 ? Math.max(-2.2, Math.min(2.2, F / i * 2.4)) : 0;
    this.gazeLead = jn(this.gazeLead, ft, 9, i);
    const bt = Math.min(0.22, 0.055 * ct), M = 16, B = 0.45;
    this.jellyV += (M * M * (bt - this.jelly) - 2 * B * M * this.jellyV) * i, this.jelly += this.jellyV * i;
    const ut = Math.max(-0.08, Math.min(0.28, this.jelly)) * 0.6;
    G *= 1 + ut, Q *= 1 - 0.55 * ut, c.pitch = m + j, c.roll = v + q, c.x = 0, c.y = S + U + ot, c.sx = G, c.sy = Q, c.eyeOpen = 1, c.laugh = jn(c.laugh, L, 30, i), c.blinkL = W, c.blinkR = W, c.lookX = w + _ + this.gazeLead, c.lookY = X + E, c.whirl = k, c.whirlAngle = K;
  }
}
function Mh(r) {
  const i = yb[r];
  return {
    yaw: 0,
    pitch: i.pitch,
    roll: i.roll,
    x: 0,
    y: i.y,
    sx: 1,
    sy: 1,
    eyeOpen: 1,
    blinkL: 0,
    blinkR: 0,
    lookX: i.lookX,
    lookY: i.lookY,
    breath: 0,
    laugh: 0,
    whirl: 0,
    whirlAngle: 0,
    w: yu.map((u) => u === r ? 1 : 0)
  };
}
const Ml = 3, nn = 100 + 2 * Ml, Ce = 64, zu = Ce * Ce, gf = 24, i3 = 1e12, xb = 48 * Math.PI / 180, Sh = Math.cos(xb), o3 = Math.sin(xb), mf = 17, r3 = (r, i) => i + (1 - i) * Math.sqrt(Math.max(0, 1 - r * r));
function $h(r, i, u, c, d, f) {
  let h = 0;
  d[0] = 0, f[0] = -1e30, f[1] = 1e30;
  for (let p = 1; p < i; p++) {
    let g = 0;
    for (; ; ) {
      const z = d[h];
      if (g = (r[p] + p * p - r[z] - z * z) / (2 * (p - z)), g > f[h]) break;
      h--;
    }
    h++, d[h] = p, f[h] = g, f[h + 1] = 1e30;
  }
  h = 0;
  for (let p = 0; p < i; p++) {
    for (; f[h + 1] < p; ) h++;
    const g = d[h];
    u[p] = (p - g) * (p - g) + r[g], c[p] = g;
  }
}
function Th(r, i, u, c, d) {
  const f = new Float32Array(u), h = new Float32Array(u), p = new Int32Array(u), g = new Int32Array(u), z = new Float32Array(u + 1), y = new Float32Array(u * u), m = new Int32Array(u * u);
  for (let v = 0; v < u; v++) {
    for (let S = 0; S < u; S++) f[S] = r[S * u + v] === i ? 0 : i3;
    $h(f, u, h, p, g, z);
    for (let S = 0; S < u; S++)
      y[S * u + v] = h[S], m[S * u + v] = p[S];
  }
  for (let v = 0; v < u; v++) {
    const S = v * u;
    for (let w = 0; w < u; w++) f[w] = y[S + w];
    $h(f, u, h, p, g, z);
    for (let w = 0; w < u; w++)
      c[S + w] = h[w], d && (d[S + w] = m[S + p[w]] * u + p[w]);
  }
}
function pf(r, i, u) {
  for (let c = 0; c < i; c++) {
    const d = c * i;
    for (let f = 0; f < i; f++) {
      const h = f < 2 ? 0 : f - 2, p = f < 1 ? 0 : f - 1, g = f > i - 2 ? i - 1 : f + 1, z = f > i - 3 ? i - 1 : f + 2;
      u[d + f] = (r[d + h] + 4 * r[d + p] + 6 * r[d + f] + 4 * r[d + g] + r[d + z]) * 0.0625;
    }
  }
  for (let c = 0; c < i; c++)
    for (let d = 0; d < i; d++) {
      const f = d < 2 ? 0 : d - 2, h = d < 1 ? 0 : d - 1, p = d > i - 2 ? i - 1 : d + 1, g = d > i - 3 ? i - 1 : d + 2;
      r[d * i + c] = (u[f * i + c] + 4 * u[h * i + c] + 6 * u[d * i + c] + 4 * u[p * i + c] + u[g * i + c]) * 0.0625;
    }
}
function u3(r, i, u) {
  const c = [];
  for (let f = i, h = 1; h <= 4 && f % 2 === 0 || h === 1; f >>= 1, h <<= 1) {
    const p = new Uint8Array(f * f);
    for (let g = 0; g < f; g++)
      for (let z = 0; z < f; z++) {
        let y = 0;
        for (let m = 0; m < h; m++) for (let v = 0; v < h; v++) y += r[(g * h + m) * i + z * h + v];
        p[g * f + z] = y >= 128 * h * h ? 1 : 0;
      }
    if (c.push({ n: f, mask: p, phi: new Float32Array(f * f) }), h === 4) break;
  }
  const d = (f, h, p, g) => {
    const { n: z, mask: y, phi: m } = f, v = h * h;
    for (let S = 0; S < p; S++)
      for (let w = 1; w < z - 1; w++) {
        const X = w * z;
        for (let $ = 1; $ < z - 1; $++) {
          const U = X + $;
          if (!y[U]) continue;
          const G = (m[U - 1] + m[U + 1] + m[U - z] + m[U + z] + v) * 0.25;
          m[U] += g * (G - m[U]);
        }
      }
  };
  for (let f = c.length - 1; f >= 0; f--) {
    const h = c[f], p = 1 << f;
    if (f < c.length - 1) {
      const z = c[f + 1], y = h.n, m = z.n;
      for (let v = 0; v < y; v++) {
        const S = Math.min(m - 1, Math.max(0, (v + 0.5) / 2 - 0.5)), w = S | 0, X = Math.min(m - 1, w + 1), $ = S - w;
        for (let U = 0; U < y; U++) {
          const G = v * y + U;
          if (!h.mask[G]) continue;
          const Q = Math.min(m - 1, Math.max(0, (U + 0.5) / 2 - 0.5)), j = Q | 0, q = Math.min(m - 1, j + 1), W = Q - j;
          h.phi[G] = (z.phi[w * m + j] * (1 - W) + z.phi[w * m + q] * W) * (1 - $) + (z.phi[X * m + j] * (1 - W) + z.phi[X * m + q] * W) * $;
        }
      }
    }
    const g = Math.min(1.9, 2 / (1 + Math.sin(Math.PI / h.n)) - 0.05);
    d(h, u * p, 4, 1), d(h, u * p, f === 2 ? 100 : f === 1 ? 30 : 16, g), d(h, u * p, 8, 1);
  }
  return c[0].phi;
}
const c3 = [1, 1, 0, -1, -1, -1, 0, 1], s3 = [0, 1, 1, 1, 0, -1, -1, -1], f3 = [1, Math.SQRT2, 1, Math.SQRT2, 1, Math.SQRT2, 1, Math.SQRT2];
function d3(r, i, u) {
  const c = nn / i, d = i * i, f = new Uint8Array(d);
  for (let L = 0; L < d; L++) f[L] = r[L] >= 128 ? 1 : 0;
  const h = new Float32Array(d), p = new Float32Array(d), g = new Int32Array(d);
  Th(f, 0, i, h, null), Th(f, 1, i, p, g);
  const z = new Float32Array(d), y = new Float32Array(d);
  for (let L = 0; L < d; L++) {
    const k = r[L] / 255;
    z[L] = c * (k > 0 && k < 1 ? k - 0.5 : f[L] ? Math.sqrt(h[L]) - 0.5 : 0.5 - Math.sqrt(p[L]));
  }
  pf(z, i, y), pf(z, i, y);
  const m = u3(r, i, c);
  let v = 0;
  for (let L = 0; L < d; L++) m[L] > v && (v = m[L]);
  const S = 2 * Math.sqrt(v), w = Math.min(0.9 * u + 0.12 * S, 1.2 * S), X = v > 0 ? w / Math.sqrt(v) : 0, $ = new Float32Array(d);
  for (let L = 0; L < d; L++) $[L] = m[L] > 0 ? X * Math.sqrt(m[L]) : 0;
  pf($, i, y);
  const U = { N: i, i00: new Uint16Array(d), wx: new Uint8Array(d), wy: new Uint8Array(d), ao: new Uint8Array(d) }, { i00: G, wx: Q, wy: j, ao: q } = U, W = i <= 64 ? [1, 2, 3, 5, 8] : i <= 96 ? [1, 2, 4, 7, 11] : [1, 2, 4, 7, 11, 15], _ = 9, E = i - 1;
  for (let L = 0; L < i; L++)
    for (let k = 0; k < i; k++) {
      const K = L * i + k, V = f[K] ? K : p[K] <= _ ? g[K] : -1;
      if (V < 0) continue;
      const rt = V % i, nt = (V - rt) / i, it = rt > 0 ? rt - 1 : 0, R = rt < E ? rt + 1 : E, et = nt > 0 ? nt - 1 : 0, Z = nt < E ? nt + 1 : E;
      let ot = -($[nt * i + R] - $[nt * i + it]) / (2 * c), F = -($[Z * i + rt] - $[et * i + rt]) / (2 * c), ct = 1, ft = Math.sqrt(ot * ot + F * F + 1);
      ot /= ft, F /= ft, ct /= ft;
      const bt = Math.max(0, z[V]);
      if (bt < 2) {
        let ht = z[nt * i + R] - z[nt * i + it], yt = z[Z * i + rt] - z[et * i + rt];
        const Mt = Math.hypot(ht, yt) || 1;
        ht /= Mt, yt /= Mt;
        const $t = 0.7 * (1 - bt / 2);
        ot += $t * (-ht - ot), F += $t * (-yt - F), ct += $t * (0 - ct), ft = Math.sqrt(ot * ot + F * F + ct * ct) || 1, ot /= ft, F /= ft, ct /= ft;
      }
      const M = $[V];
      let B = 0;
      for (let ht = 0; ht < 8; ht++) {
        let yt = 0;
        for (let Mt = 0; Mt < W.length; Mt++) {
          const $t = W[Mt];
          let wt = rt + c3[ht] * $t, pt = nt + s3[ht] * $t;
          wt < 0 ? wt = 0 : wt > E && (wt = E), pt < 0 ? pt = 0 : pt > E && (pt = E);
          const Dt = ($[pt * i + wt] - M) / ($t * c * f3[ht]);
          Dt > yt && (yt = Dt);
        }
        B += yt / Math.sqrt(1 + yt * yt);
      }
      const ut = 1 - Math.min(1, bt / 3), Y = 1 - 0.2 * ut * ut, lt = Math.pow(1 - 0.9 * B / 8, 1.5) * Y;
      q[K] = Math.max(1, Math.round(255 * Math.pow(lt, 1 / 2.2)));
      const st = (ot * 0.5 + 0.5) * (Ce - 1), tt = (F * 0.5 + 0.5) * (Ce - 1), J = Math.min(Ce - 2, Math.max(0, st | 0)), at = Math.min(Ce - 2, Math.max(0, tt | 0));
      G[K] = at * Ce + J, Q[K] = Math.round(255 * Math.min(1, Math.max(0, st - J))), j[K] = Math.round(255 * Math.min(1, Math.max(0, tt - at)));
    }
  return U;
}
function Ou(r) {
  if (typeof OffscreenCanvas == "function") return new OffscreenCanvas(r, r);
  if (typeof document < "u") {
    const i = document.createElement("canvas");
    return i.width = i.height = r, i;
  }
  return null;
}
function Hu(r, i) {
  return r.getContext("2d", i ? { willReadFrequently: !0 } : void 0);
}
function h3(r, i) {
  const u = Ou(i), c = u && Hu(u, !0);
  if (!c) return null;
  const d = nn / i;
  c.setTransform(1 / d, 0, 0, 1 / d, Ml / d, Ml / d), c.fillStyle = "#fff", c.fill(r);
  const f = c.getImageData(0, 0, i, i).data, h = new Uint8ClampedArray(i * i);
  for (let p = 0; p < i * i; p++) h[p] = f[p * 4 + 3];
  return h;
}
const Ki = /* @__PURE__ */ new Map(), vf = /* @__PURE__ */ new Set(), wh = /* @__PURE__ */ new WeakMap();
let b3 = 0;
function Ch(r) {
  let i = wh.get(r);
  return i || wh.set(r, i = `p${b3++}`), i;
}
const _f = [];
let Df = !1;
function Eh() {
  Df = !1;
  const r = _f.shift();
  r && r(), _f.length && zb();
}
function zb() {
  if (Df) return;
  Df = !0;
  const r = globalThis.requestIdleCallback;
  r ? r(Eh, { timeout: 120 }) : setTimeout(Eh, 16);
}
function g3(r) {
  _f.push(r), zb();
}
function Mb(r, i, u, c, d) {
  const f = `${r}|${u}|${Math.round(c)}`, h = Ki.get(f);
  if (h) return h;
  const p = () => {
    if (vf.delete(f), Ki.has(f)) return;
    const g = h3(i, u);
    g && (Ki.size >= 48 && Ki.clear(), Ki.set(f, d3(g, u, c)));
  };
  return d ? (p(), Ki.get(f) ?? null) : (vf.has(f) || (vf.add(f), g3(p)), null);
}
function m3(r, i, u = 192, c = 0.65) {
  Mb(r, i, Sb(u), 15 * c, !0);
}
function Sb(r) {
  return r <= 100 ? 64 : r <= 224 ? 96 : 128;
}
const yf = (r) => r <= 0.04045 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), au = /* @__PURE__ */ new Map();
function p3(r) {
  let i = au.get(r);
  if (!i) {
    let u = Ff(r);
    if (!u) {
      const c = Ou(1), d = c && Hu(c, !0);
      if (d) {
        d.fillStyle = r, d.fillRect(0, 0, 1, 1);
        const f = d.getImageData(0, 0, 1, 1).data;
        u = [f[0], f[1], f[2]];
      } else u = [128, 128, 128];
    }
    i = [yf(u[0] / 255), yf(u[1] / 255), yf(u[2] / 255)], au.size > 200 && au.clear(), au.set(r, i);
  }
  return i;
}
const Ru = 2048, $b = 2.5, Tb = Ru / $b, wb = new Float32Array(Ru);
for (let r = 0; r < Ru; r++) {
  const i = (r + 0.5) / Tb, u = i <= 0.75 ? i : 0.75 + 0.25 * (1 - Math.exp(-(i - 0.75) / 0.25));
  wb[r] = 255 * (u <= 31308e-7 ? 12.92 * u : 1.055 * Math.pow(u, 1 / 2.4) - 0.055);
}
const xf = (r) => wb[r <= 0 ? 0 : r >= $b ? Ru - 1 : r * Tb | 0], Mu = 1024, lu = /* @__PURE__ */ new Map();
function Ah(r) {
  let i = lu.get(r);
  if (!i) {
    i = new Float32Array(Mu + 1);
    for (let u = 0; u <= Mu; u++) i[u] = Math.pow(u / Mu, r);
    lu.size > 16 && lu.clear(), lu.set(r, i);
  }
  return i;
}
const zf = [0.92, 0.96, 1], Mf = [1, 0.98, 0.95], Cb = (r, i, u) => {
  const c = u <= r ? 0 : u >= i ? 1 : (u - r) / (i - r);
  return c * c * (3 - 2 * c);
}, Oh = (r, i, u) => 1 - Cb(r - i, r + i, u);
function v3(r, i, u, c) {
  const { L: d, V: f, H: h, U: p, W: g, A: z, B: y } = u, m = Math.max(i[0], i[1], i[2], 0.05), v = [i[0] / m, i[1] / m, i[2] / m], S = Math.max(0.03, 0.3 - 0.15 * c.shadow), w = 0.15 + 0.14 * c.spread, X = 0.85, $ = Math.min(90, Math.round(110 / Math.pow(c.spread, 1.3))), U = Math.max(2, Math.round(8 / c.spread)), G = Ah($), Q = Ah(U), j = 0.45 * c.highlight, q = 0.1 * c.highlight, W = 0.11 * c.highlight, _ = 0.3 * c.rim, E = [S * v[0], S * v[1], S * v[2]];
  for (let L = 0; L < Ce; L++)
    for (let k = 0; k < Ce; k++) {
      let K = k / (Ce - 1) * 2 - 1, V = L / (Ce - 1) * 2 - 1, rt = K * K + V * V;
      if (rt > 1.14) continue;
      if (rt > 1) {
        const ht = 1 / Math.sqrt(rt);
        K *= ht, V *= ht, rt = 1;
      }
      const nt = Math.sqrt(1 - rt), it = K * d[0] + V * d[1] + nt * d[2], R = Math.max(0, K * f[0] + V * f[1] + nt * f[2]), et = Math.max(0, K * h[0] + V * h[1] + nt * h[2]), Z = Math.min(1, Math.max(0, (it + w) / (1 + w))), ot = 1 - R, F = ot * ot, ct = F * ot, ft = ct * F, bt = et * Mu | 0, M = (j * G[bt] + q * Q[bt]) * (1 + 3 * ft), B = 2 * R * K - f[0], ut = 2 * R * V - f[1], Y = 2 * R * nt - f[2], lt = 0.45 + 0.55 * Cb(-0.4, 0.6, B * p[0] + ut * p[1] + Y * p[2]), st = B * g[0] + ut * g[1] + Y * g[2];
      let tt = 0;
      if (st > 0.5) {
        const ht = (B * z[0] + ut * z[1] + Y * z[2]) / st, yt = (B * y[0] + ut * y[1] + Y * y[2]) / st;
        tt = Oh(0.34, 0.12, Math.abs(ht)) * Oh(0.12, 0.06, Math.abs(yt));
      }
      const J = _ * ct * lt + W * tt, at = (L * Ce + k) * 3;
      r[at] = xf(i[0] * (E[0] + X * Z) + M * Mf[0] + J * zf[0]), r[at + 1] = xf(i[1] * (E[1] + X * Z) + M * Mf[1] + J * zf[1]), r[at + 2] = xf(i[2] * (E[2] + X * Z) + M * Mf[2] + J * zf[2]);
    }
}
function Hh(r, i, u, c) {
  const d = (i * 0.5 + 0.5) * (Ce - 1), f = (u * 0.5 + 0.5) * (Ce - 1), h = Math.min(Ce - 2, Math.max(0, d | 0)), p = Math.min(Ce - 2, Math.max(0, f | 0)), g = d - h, z = f - p, y = (p * Ce + h) * 3, m = Ce * 3, v = (1 - g) * (1 - z), S = g * (1 - z), w = (1 - g) * z, X = g * z;
  for (let $ = 0; $ < 3; $++) c[$] = r[y + $] * v + r[y + 3 + $] * S + r[y + m + $] * w + r[y + m + 3 + $] * X;
}
function y3(r, i, u, c) {
  const { N: d, i00: f, wx: h, wy: p, ao: g } = r, z = Ce * 3;
  for (let y = 0, m = 0; y < d * d; y++, m += 4) {
    const v = g[y];
    if (v === 0) {
      u[m + 3] = 0;
      continue;
    }
    const S = c[v], w = f[y] * 3, X = h[y] * (1 / 255), $ = p[y] * (1 / 255), U = (1 - X) * (1 - $) * S, G = X * (1 - $) * S, Q = (1 - X) * $ * S, j = X * $ * S;
    u[m] = i[w] * U + i[w + 3] * G + i[w + z] * Q + i[w + z + 3] * j, u[m + 1] = i[w + 1] * U + i[w + 4] * G + i[w + z + 1] * Q + i[w + z + 4] * j, u[m + 2] = i[w + 2] * U + i[w + 5] * G + i[w + z + 2] * Q + i[w + z + 5] * j, u[m + 3] = 255;
  }
}
const nu = (r) => {
  const i = Math.hypot(r[0], r[1], r[2]) || 1;
  return [r[0] / i, r[1] / i, r[2] / i];
};
function x3(r) {
  const i = Math.cos(r.roll), u = Math.sin(r.roll), c = i * r.lx + u * r.ly, d = -u * r.lx + i * r.ly, f = r.facing < 0 ? -1 : 1, h = f * Math.min(1, Math.abs(r.facing) / 0.16), { cy: p, sy: g, cp: z, sp: y } = r, m = (k, K, V, rt = h) => nu([p * k + g * y * K - g * z * V, z * K + y * V, rt * (g * k - p * y * K + p * z * V)]), v = m(Sh * c, Sh * d, o3), S = m(0, 0, 1, f), w = nu([v[0] + S[0], v[1] + S[1], v[2] + S[2]]), X = m(c, d, 0, f), $ = Math.cos(80 * Math.PI / 180), U = Math.sin(80 * Math.PI / 180), G = $ * c - U * d, Q = U * c + $ * d, j = nu([0.55 * G, 0.55 * Q, 0.83]), q = nu([j[1], -j[0], 0]), W = [j[1] * q[2] - j[2] * q[1], j[2] * q[0] - j[0] * q[2], j[0] * q[1] - j[1] * q[0]], _ = m(j[0], j[1], j[2], f), E = m(q[0], q[1], q[2], f), L = m(W[0], W[1], W[2], f);
  return { L: v, V: S, H: w, U: X, W: _, A: E, B: L };
}
const Nh = /* @__PURE__ */ new WeakMap();
function z3(r, i) {
  const u = r.canvas ?? r;
  let c = Nh.get(u);
  c || (c = /* @__PURE__ */ new Map(), Nh.set(u, c));
  let d = c.get(i);
  return d || (d = {
    N: 0,
    img: null,
    mc: new Float32Array(zu * 3),
    mcPrev: new Float32Array(zu * 3),
    mcMix: new Float32Array(zu * 3),
    mixVersion: 0,
    blendT: 1,
    blendFrames: 1,
    sinceBuild: 0,
    L: null,
    V: null,
    lx: NaN,
    ly: NaN,
    base: "",
    shadow: NaN,
    highlight: NaN,
    spread: NaN,
    rim: NaN,
    version: 0,
    imgVersion: -1,
    imgAoK: NaN,
    imgForm: null,
    aoK: -1,
    aoMul: new Float32Array(256),
    near: null,
    rimG: null,
    far: null,
    scratch: [null, null],
    scratchIdx: 0,
    scratchN: 0,
    scratchStale: !0,
    sprites: [null, null, null],
    spriteVersion: -1,
    spritePx: 0
  }, c.size > 4 && c.clear(), c.set(i, d)), d;
}
const Sf = 1 / 48, Yh = (r, i) => !i || Math.abs(r[0] - i[0]) >= Sf || Math.abs(r[1] - i[1]) >= Sf || Math.abs(r[2] - i[2]) >= Sf;
function Rf(r, i) {
  return [
    r[0] * i[0] + r[2] * i[1],
    r[1] * i[0] + r[3] * i[1],
    r[0] * i[2] + r[2] * i[3],
    r[1] * i[2] + r[3] * i[3],
    r[0] * i[4] + r[2] * i[5] + r[4],
    r[1] * i[4] + r[3] * i[5] + r[5]
  ];
}
function iu(r, i, u, c, d) {
  const f = Math.sqrt(1 - u * u), h = [0, 0, 0], p = 1 - c;
  if (typeof r.createConicGradient == "function") {
    const y = r.createConicGradient(0, 50, 50);
    for (let m = 0; m <= gf; m++) {
      const v = m / gf * Math.PI * 2;
      Hh(i, f * Math.cos(v), f * Math.sin(v), h), y.addColorStop(m / gf, `rgb(${h[0] * p | 0} ${h[1] * p | 0} ${h[2] * p | 0})`);
    }
    return y;
  }
  const g = r.createLinearGradient(50 + d[0] * 50, 50 + d[1] * 50, 50 - d[0] * 50, 50 - d[1] * 50), z = (y, m, v) => {
    Hh(i, y, m, h), g.addColorStop(v, `rgb(${h[0] * p | 0} ${h[1] * p | 0} ${h[2] * p | 0})`);
  };
  return z(f * d[0], f * d[1], 0), z(-f * d[1], f * d[0], 0.5), z(-f * d[0], -f * d[1], 1), g;
}
const M3 = typeof navigator < "u" && /AppleWebKit\//.test(navigator.userAgent) && !/Chrome\/|Chromium\/|Edg\//.test(navigator.userAgent), _h = [[0.55, () => 0], [0, () => 0], [0, (r) => Math.min(0.6, 0.25 * r.shadow)]];
function S3(r, i, u, c, d, f) {
  const h = Sb(u.dev), p = Mb(i.typeKey ?? Ch(i.path), i.path, h, u.halfDepth, !!u.still);
  if (!p) return !1;
  const g = z3(r, i.typeKey ?? Ch(i.path)), z = x3(u), y = (() => {
    const J = Math.hypot(z.L[0], z.L[1]);
    return J < 0.05 ? [0, -1] : [z.L[0] / J, z.L[1] / J];
  })();
  if ((Yh(z.L, g.L) || Yh(z.V, g.V) || u.lx !== g.lx || u.ly !== g.ly || c.base !== g.base || f.shadow !== g.shadow || f.highlight !== g.highlight || f.spread !== g.spread || f.rim !== g.rim) && (g.version > 0 && g.mcPrev.set(g.mcMix), v3(g.mc, p3(c.base), z, f), g.version === 0 ? (g.mcMix.set(g.mc), g.blendT = 1) : (g.blendFrames = Math.min(10, Math.max(1, g.sinceBuild)), g.blendT = 0), g.sinceBuild = 0, g.mixVersion++, g.L = z.L, g.V = z.V, g.lx = u.lx, g.ly = u.ly, g.base = c.base, g.shadow = f.shadow, g.highlight = f.highlight, g.spread = f.spread, g.rim = f.rim, g.version++, g.near = g.rimG = g.far = null), g.sinceBuild++, g.blendT < 1) {
    g.blendT = Math.min(1, g.blendT + 1 / g.blendFrames);
    const J = g.blendT >= 1 ? 1 : g.blendT * g.blendT * (3 - 2 * g.blendT), at = g.mcPrev, ht = g.mc, yt = g.mcMix;
    for (let Mt = 0; Mt < zu * 3; Mt++) yt[Mt] = at[Mt] + (ht[Mt] - at[Mt]) * J;
    g.mixVersion++;
  }
  const m = Math.min(1.3, 1.2 * f.shadow);
  if (m !== g.aoK) {
    for (let J = 0; J < 256; J++) g.aoMul[J] = Math.max(0, 1 - m * (1 - J / 255));
    g.aoK = m;
  }
  if ((!g.img || g.N !== h) && (g.img = new ImageData(h, h), g.N = h, g.imgVersion = -1), (g.imgVersion !== g.mixVersion || g.imgAoK !== m || g.imgForm !== p) && (y3(p, g.mcMix, g.img.data, g.aoMul), g.imgVersion = g.mixVersion, g.imgAoK = m, g.imgForm = p, g.scratchStale = !0), g.scratchN !== h && (g.scratch = [null, null], g.scratchN = h, g.scratchStale = !0), g.scratchStale) {
    g.scratchIdx ^= 1;
    let J = g.scratch[g.scratchIdx];
    if (!J) {
      const at = Ou(h), ht = at && Hu(at, !1);
      if (!at || !ht) return !1;
      J = g.scratch[g.scratchIdx] = { c: at, g: ht };
    }
    J.g.putImageData(g.img, 0, 0), g.scratchStale = !1;
  }
  const v = g.scratch[g.scratchIdx];
  let S = i.sides === "sprite" || i.sides !== "vector" && M3;
  if (S) {
    const J = Math.ceil(nn * u.dev / 100);
    if (g.spritePx !== J && (g.sprites = [null, null, null], g.spritePx = J, g.spriteVersion = -1), g.spriteVersion !== g.version) {
      const at = J / nn;
      for (let ht = 0; ht < 3 && S; ht++) {
        let yt = g.sprites[ht];
        if (!yt) {
          const Mt = Ou(J), $t = Mt && Hu(Mt, !1);
          if (!Mt || !$t) {
            S = !1;
            break;
          }
          yt = g.sprites[ht] = { c: Mt, g: $t };
        }
        yt.g.setTransform(1, 0, 0, 1, 0, 0), yt.g.clearRect(0, 0, J, J), yt.g.setTransform(at, 0, 0, at, Ml * at, Ml * at), yt.g.fillStyle = iu(yt.g, g.mc, _h[ht][0], _h[ht][1](f), y), yt.g.fill(i.path);
      }
      S && (g.spriteVersion = g.version);
    }
  }
  !S && !g.near && (g.near = iu(r, g.mc, 0.55, 0, y), g.rimG = iu(r, g.mc, 0, 0, y), g.far = iu(r, g.mc, 0, Math.min(0.6, 0.25 * f.shadow), y));
  const { cy: w, sy: X, cp: $, sp: U, halfDepth: G, cap: Q } = u, j = u.facing >= 0 ? 1 : -1, [q, W, _, E, L, k] = u.ctm;
  let K = null;
  S && (r.imageSmoothingEnabled = !0, r.imageSmoothingQuality = "high");
  let V = 1, rt = 0, nt = 0, it = 1, R = 0, et = 0;
  for (let J = 0; J < mf - 1; J++) {
    const at = -1 + 2 * (j > 0 ? J : mf - 1 - J) / (mf - 1), ht = r3(at, Q), yt = at * j, Mt = w * ht, $t = X * U * ht, wt = $ * ht, pt = at * X * G - 50 * Mt, Dt = -at * w * U * G - 50 * $t - 50 * wt, Gt = V * it - rt * nt, Et = it / Gt, Ht = -rt / Gt, Jt = -nt / Gt, Vt = V / Gt, oe = (nt * et - it * R) / Gt, re = (rt * R - V * et) / Gt;
    r.transform(Et * Mt + Jt * $t, Ht * Mt + Vt * $t, Jt * wt, Vt * wt, Et * pt + Jt * Dt + oe, Ht * pt + Vt * Dt + re), V = Mt, rt = $t, nt = 0, it = wt, R = pt, et = Dt;
    const Nt = yt > 0.4 ? 0 : yt >= 0 ? 1 : 2;
    if (S)
      r.drawImage(g.sprites[Nt].c, -Ml, -Ml, nn, nn);
    else {
      const Zt = Nt === 0 ? g.near : Nt === 1 ? g.rimG : g.far;
      Zt !== K && (r.fillStyle = K = Zt), r.fill(i.path);
    }
  }
  r.setTransform(q, W, _, E, L, k);
  const Z = 1 / (w * $), ot = X * G / w, F = -U * G * Z, ct = Math.hypot(ot, F), ft = ct > 1e-6 ? j * ot / ct : 1, bt = ct > 1e-6 ? j * F / ct : 0, M = 50 * Q + Math.hypot(50 * (1 - Q), ct), B = (M + 50) / 100, ut = (M - 50) / 2, Y = 1 + (B - 1) * ft * ft, lt = (B - 1) * ft * bt, st = 1 + (B - 1) * bt * bt, tt = Rf(Rf(u.ctm, [w, X * U, 0, $, 0, 0]), [Y, lt, lt, st, ut * ft - 50 * Y - 50 * lt, ut * bt - 50 * lt - 50 * st]);
  if (r.save(), r.setTransform(tt[0], tt[1], tt[2], tt[3], tt[4], tt[5]), r.clip(i.path), r.imageSmoothingEnabled = !0, r.imageSmoothingQuality = "high", r.drawImage(v.c, -Ml, -Ml, nn, nn), r.restore(), u.dev >= 256 && f.rim > 0 && f.highlight > 0) {
    r.save(), r.globalCompositeOperation = "source-atop", r.setTransform(tt[0], tt[1], tt[2], tt[3], tt[4], tt[5]);
    const J = Math.min(0.5, 0.3 * f.rim * Math.min(1.4, f.highlight)), at = r.createLinearGradient(50 + y[0] * 50, 50 + y[1] * 50, 50 - y[0] * 50, 50 - y[1] * 50);
    at.addColorStop(0, `rgba(235,244,255,${J.toFixed(3)})`), at.addColorStop(0.45, `rgba(235,244,255,${(0.35 * J).toFixed(3)})`), at.addColorStop(0.75, "rgba(235,244,255,0)"), r.strokeStyle = at, r.lineJoin = "round", r.lineWidth = 1.3, r.stroke(i.path), r.restore();
  }
  return !0;
}
const xl = 1.5, Su = 0.1, kn = 17, $3 = 15, T3 = 0.9, Dh = (r, i) => i + (1 - i) * Math.sqrt(Math.max(0, 1 - r * r)), w3 = 25, C3 = 6.3, E3 = { eyes: 1, mouth: -3.5 }, ou = /* @__PURE__ */ new Map();
function A3(r, i, u) {
  const c = `${r}|${i}|${u}`;
  let d = ou.get(c);
  if (!d) {
    const f = wa(r, -0.3 * i, 0.05 * i), h = wa(r, -0.12 * i, 0.03 * i), p = [], g = [];
    for (let z = 0; z < kn; z++) {
      const y = z / (kn - 1);
      p.push(y > 0.6 ? "" : Xh(f, h, y / 0.6)), g.push(y >= 0.5 ? r : Xh(f, r, y / 0.5));
    }
    d = {
      base: r,
      far: f,
      near: h,
      light: wa(r, 0.04 * u),
      dark: wa(r, -0.3 * i, 0.05 * i),
      capTop: wa(r, 0.035 * u),
      capBottom: wa(r, -0.035 * i),
      crispMix: p,
      smoothMix: g,
      grad: null
    }, ou.size > 200 && ou.clear(), ou.set(c, d);
  }
  return d;
}
const Rh = (r) => (r.startsWith("hsl(") ? r : wa(r, 0)).match(/[\d.]+/g).map(Number);
function Xh(r, i, u) {
  const c = Rh(r), d = Rh(i), f = c.map((h, p) => h + (d[p] - h) * u);
  return `hsl(${f[0].toFixed(1)} ${f[1].toFixed(1)}% ${f[2].toFixed(1)}%)`;
}
const Ji = 34, O3 = Math.PI * 1.55, H3 = 57, N3 = 0.4, Uh = -0.28, ru = /* @__PURE__ */ new Map();
function Y3(r) {
  let i = ru.get(r);
  return i || (i = { base: wa(r, 0.1, 0.02), light: wa(r, 0.3, 0.04), dark: wa(r, -0.22, 0.08), halo: wa(r, 0.2) }, ru.size > 200 && ru.clear(), ru.set(r, i)), i;
}
const uu = (r, i) => r.replace(")", ` / ${Math.max(0, Math.min(1, i)).toFixed(3)})`);
function qh(r, i, u, c, d, f, h) {
  const p = h?.strength ?? 0, g = Math.min(1, i.whirl * p);
  if (g <= 0.01) return;
  const z = h?.size ?? 1, y = h?.width ?? 1, m = h?.length ?? 1, v = h?.tilt ?? 1, S = O3 * m, w = Y3(u), X = -i.whirlAngle, $ = H3 * z, U = $ * N3 * v * (f ? 1.14 : 0.86), G = Math.atan2(d, c) - Uh;
  r.save(), r.rotate(Uh), r.translate(0, 5), r.lineCap = "butt";
  const Q = (j, q, W, _, E) => {
    r.strokeStyle = _, r.lineWidth = W, r.beginPath(), r.ellipse(0, E, $, U, 0, j, q, !1), r.stroke();
  };
  if (f)
    for (let j = 0; j < Ji; j++) {
      const q = j / Ji, W = X + q * S, _ = W + S / Ji + 0.012;
      if (Math.sin((_ + W) / 2) <= 0) continue;
      const E = Math.pow(1 - q, 1.3);
      Q(W, _, (2 + 8 * E) * 1.5 * y, `rgba(0,0,0,${(0.2 * g * E).toFixed(3)})`, 3.5);
    }
  for (let j = 0; j < Ji; j++) {
    const q = j / Ji, W = X + q * S, _ = W + S / Ji + 0.012, E = (_ + W) / 2;
    if (Math.sin(E) > 0 !== f) continue;
    const L = 0.6 + 0.4 * Math.sin(E), k = Math.pow(1 - q, 1.3), K = 1 + 0.18 * Math.sin(q * 9 + 1.2), V = (2 + 8 * k) * L * y * K, rt = g * (0.3 + 0.7 * k) * L, nt = 0.5 + 0.5 * Math.cos(E - G);
    Q(W, _, V * 2.6, uu(w.halo, rt * 0.2), 0), Q(W, _, V * 0.8, uu(w.dark, rt * 0.45), V * 0.32), Q(W, _, V, uu(w.base, rt * 0.72), 0), Q(W, _, V * 0.62, uu(w.light, rt * 0.78 * (0.4 + 0.6 * nt)), -V * 0.16), Q(W, _, V * 0.24, `rgba(255,255,255,${(rt * 0.9 * (0.15 + 0.85 * nt * nt)).toFixed(3)})`, -V * 0.3);
  }
  r.restore();
}
function Lh(r, i, u, c) {
  const d = i * xl;
  r.clearRect(0, 0, d, d);
  const f = i / 100;
  let h, p;
  if (c.dpr !== void 0)
    h = c.dpr, p = [h, 0, 0, h, 0, 0];
  else if (r.getTransform) {
    const Z = r.getTransform();
    p = [Z.a, Z.b, Z.c, Z.d, Z.e, Z.f], h = Z.a || 1;
  } else
    h = 1, p = [1, 0, 0, 1, 0, 0];
  const g = c.shadow ?? 0.35, z = c.highlight ?? 1.3, y = $3 * (c.depth ?? 0.65), m = 1 - (1 - T3) * (c.rim ?? 0.5), v = c.spread ?? 1.55, S = (c.light ?? 265) * Math.PI / 180, w = Math.sin(S), X = -Math.cos(S), $ = A3(c.color, g, z), U = Math.cos(u.yaw), G = Math.sin(u.yaw), Q = Math.cos(u.pitch), j = Math.sin(u.pitch), q = U * Q, W = (Z) => Math.abs(Z) < 0.22 ? Z < 0 ? -0.22 : 0.22 : Z, _ = W(U), E = W(Q), L = Math.cos(u.roll), k = Math.sin(u.roll), K = u.sx * f, V = u.sy * f, rt = 50 * (1 - u.sy) * f, nt = Rf(p, [L * K, k * K, -k * V, L * V, d / 2 + u.x * f - k * rt, d / 2 + Su * i + u.y * f + L * rt]);
  r.save(), r.setTransform(nt[0], nt[1], nt[2], nt[3], nt[4], nt[5]), r.lineCap = "round", r.lineJoin = "round";
  const it = c.shading, R = (Z, ot, F) => {
    let ct = $.near, ft = $.base;
    if (it === "crisp") {
      if (!$.grad || $.grad.lx !== w || $.grad.ly !== X) {
        const Et = r.createLinearGradient(w * 56, X * 56, -w * 56, -X * 56);
        Et.addColorStop(0, $.light), Et.addColorStop(0.45, $.near), Et.addColorStop(1, $.dark);
        const Ht = r.createLinearGradient(w * 46, X * 46, -w * 46, -X * 46);
        Ht.addColorStop(0, $.capTop), Ht.addColorStop(1, $.capBottom), $.grad = { lx: w, ly: X, lit: Et, cap: Ht };
      }
      ct = $.grad.lit, ft = $.grad.cap;
    }
    let bt = !1;
    it === "plastic" && (bt = S3(
      r,
      { ...c, path: Z, typeKey: ot },
      { cy: _, sy: G, cp: E, sp: j, facing: q, roll: u.roll, halfDepth: F, cap: m, lx: w, ly: X, dev: i * h, ctm: nt, still: c.still },
      $,
      null,
      { shadow: g, highlight: z, spread: v, rim: c.rim ?? 0.5 }
    ));
    const M = it === "plastic" && !bt ? "smooth" : it, B = M === "smooth", ut = B && typeof Path2D == "function" ? new Path2D() : null, Y = q >= 0 ? 1 : -1, [lt, st, tt, J, at, ht] = nt;
    let yt = null, Mt = 1, $t = 0, wt = 0, pt = 1, Dt = 0, Gt = 0;
    for (let Et = 0; Et < kn && !bt; Et++) {
      const Ht = -1 + 2 * (Y > 0 ? Et : kn - 1 - Et) / (kn - 1), Jt = Dh(Ht, m), Vt = Et / (kn - 1), oe = _ * Jt, re = G * j * Jt, Nt = E * Jt, Zt = Ht * G * F - 50 * oe, Qt = -Ht * _ * j * F - 50 * re - 50 * Nt, ne = Mt * pt - $t * wt, fa = pt / ne, La = -$t / ne, Yt = -wt / ne, Lt = Mt / ne, kt = (wt * Gt - pt * Dt) / ne, se = ($t * Dt - Mt * Gt) / ne;
      r.transform(fa * oe + Yt * re, La * oe + Lt * re, Yt * Nt, Lt * Nt, fa * Zt + Yt * Qt + kt, La * Zt + Lt * Qt + se), Mt = oe, $t = re, wt = 0, pt = Nt, Dt = Zt, Gt = Qt;
      let ge;
      B ? ge = $.smoothMix[Et] : Et === kn - 1 ? ge = ft : Vt > 0.6 ? ge = ct : ge = $.crispMix[Et], ge !== yt && (r.fillStyle = yt = ge), r.fill(Z), ut && ut.addPath(Z, { a: oe, b: re, c: 0, d: Nt, e: Zt, f: Qt });
    }
    if (bt || r.setTransform(lt, st, tt, J, at, ht), ut && M === "smooth") {
      r.save(), r.clip(ut);
      const Et = Math.min(1, 0.34 * g), Ht = r.createRadialGradient(-w * 45, -X * 45, 4 * v, -w * 45, -X * 45, 84 * v);
      Ht.addColorStop(0, `rgba(0,0,0,${Et})`), Ht.addColorStop(0.5, `rgba(0,0,0,${Et * 0.35})`), Ht.addColorStop(1, "rgba(0,0,0,0)"), r.globalCompositeOperation = "multiply", r.fillStyle = Ht, r.fillRect(-120, -120, 240, 240), r.globalCompositeOperation = "source-over";
      const Jt = Math.min(1, 0.22 * z), Vt = r.createRadialGradient(w * 37, X * 37, 0, w * 37, X * 37, 62 * v);
      Vt.addColorStop(0, `rgba(255,255,255,${Jt})`), Vt.addColorStop(0.6, `rgba(255,255,255,${Jt * 0.23})`), Vt.addColorStop(1, "rgba(255,255,255,0)"), r.fillStyle = Vt, r.fillRect(-120, -120, 240, 240), r.restore();
    }
    return bt;
  };
  qh(r, u, c.color, w, X, !1, c.whirl), c.parts && R(c.parts, `${c.typeKey ?? "custom"}:parts`, y * (c.partsDepth ?? 0.4));
  const et = R(c.path, c.typeKey ?? "custom", y);
  if (q > -0.2) {
    r.save();
    {
      const Z = q >= 0 ? 1 : -1, ot = Dh(Z, m), F = _ * ot, ct = G * j * ot, ft = E * ot, bt = Z * G * y - 50 * F, M = -Z * _ * j * y - 50 * ct - 50 * ft, [B, ut, Y, lt, st, tt] = nt;
      r.setTransform(B * F + Y * ct, ut * F + lt * ct, Y * ft, lt * ft, B * bt + Y * M + st, ut * bt + lt * M + tt), r.clip(c.path), r.setTransform(B, ut, Y, lt, st, tt);
    }
    r.translate(c.faceX - 50, c.faceY - 50), r.scale(c.faceScale, c.faceScale), et && (r.globalAlpha = 0.93), X3(r, u, c), r.restore();
  }
  qh(r, u, c.color, w, X, !0, c.whirl), r.restore();
}
const cu = 30;
function _3(r, i, u, c) {
  const d = Math.asin(Math.max(-1, Math.min(1, r / cu))) + u, f = Math.asin(Math.max(-1, Math.min(1, -i / cu))) + c, h = Math.cos(f);
  return {
    x: cu * Math.sin(d) * h,
    y: -cu * Math.sin(f),
    sx: Math.cos(d),
    sy: h,
    z: Math.cos(d) * h
  };
}
const Bh = 8, su = /* @__PURE__ */ new Map();
function D3(r, i, u) {
  const c = Math.round(r * 50), d = Math.round(i * 50), f = Math.round(u * 50), h = c + 2e3 * d + 4e6 * f;
  let p = su.get(h);
  if (!p) {
    const g = c / 50, z = d / 50, y = f / 50;
    let m = `M${-g} ${z}`;
    for (let v = 1; v <= Bh; v++) {
      const S = v / Bh, w = 1 - S;
      m += ` L${(w * w * -g + S * S * g).toFixed(3)} ${((w * w + S * S) * z + 2 * w * S * y).toFixed(3)}`;
    }
    p = new Path2D(m), su.size > 256 && su.clear(), su.set(h, p);
  }
  return p;
}
const jh = Math.sin(0.684), kh = Math.cos(0.684), fu = /* @__PURE__ */ new Map();
function R3(r) {
  const i = (E) => Math.round(E * 50) / 50, u = i(r.hw), c = i(r.t0), d = i(r.a), f = i(r.yt), h = i(r.ab), p = i(r.yb), g = `${u},${c},${d},${f},${h},${p}`;
  let z = fu.get(g);
  if (z) return z;
  const y = (E) => E.toFixed(3), m = c * jh, v = c * kh, S = -u + m, w = -v, X = u - m, $ = -v, U = -u - m, G = v, Q = u + m, j = v, q = 4 / 3 * c * kh, W = 4 / 3 * c * jh, _ = `M${y(S)} ${y(w)}C${y(-u + d * u)} ${y(f - c)} ${y(u - d * u)} ${y(f - c)} ${y(X)} ${y($)}C${y(X + q)} ${y($ - W)} ${y(Q + q)} ${y(j - W)} ${y(Q)} ${y(j)}C${y(u - h * u)} ${y(p + c)} ${y(-u + h * u)} ${y(p + c)} ${y(U)} ${y(G)}C${y(U - q)} ${y(G - W)} ${y(S - q)} ${y(w - W)} ${y(S)} ${y(w)}Z`;
  return z = new Path2D(_), fu.size > 256 && fu.clear(), fu.set(g, z), z;
}
function X3(r, i, u) {
  const [c, d, f] = i.w, h = u.ink, p = E3[u.face], g = w3 / 2, z = i.lookX, y = i.lookY, { yaw: m, pitch: v } = i, S = (E, L, k, K = 1) => {
    const V = _3(E, L, m, v);
    V.z <= 0.02 || K <= 0.01 || (r.save(), r.globalAlpha = K * Math.min(1, V.z * 5), r.translate(V.x, V.y), r.scale(Math.max(0.02, V.sx), Math.max(0.02, V.sy)), k(), r.restore());
  }, w = (E, L) => Math.abs(E) <= L ? 0 : Math.sign(E) * (Math.abs(E) - L) / (1 - L), X = (E) => Math.max(-1, Math.min(1, E)), $ = w(X(-i.pitch / 0.26 - i.lookY / 7), 0.34), U = Math.abs(w(X(i.lookX / 4.5), 0.4)), G = Math.max(0.3, 1 + 0.55 * $ - 0.1 * U), Q = 1 - 0.05 * $ + 0.12 * U, j = c + d * (1 - i.laugh), q = d * i.laugh, W = Math.max(0, -i.y) / 26, _ = 0.5 + 0.5 * i.breath;
  for (const E of [-1, 1]) {
    const L = E < 0 ? i.blinkL : i.blinkR, k = Math.max(0, Math.min(1, i.eyeOpen * (1 - L))), K = j * k, V = j * (1 - k), rt = q, nt = f, it = K * 0.01 + V * 5.4 + rt * 6.2 + nt * 6, R = K * 1.1 * G + V * 0.6 + rt * (2.2 - W * 1.5) + nt * (-1.4 + _), et = K * -3.3 * G + V * 0.6 + rt * (-11.4 - 4 * W) + nt * (5.4 + 2 * _), Z = K * C3 * 2 * Q + V * 2.8 + rt * 4.4 + nt * 4, ot = z * (K + 0.5 * (V + rt)), F = y * (K + 0.5 * V);
    S(E * g + ot, p + F, () => {
      r.strokeStyle = h, r.lineWidth = Z, r.stroke(D3(it, R, et));
    });
  }
  if (u.face === "mouth") {
    const E = z * 0.35, L = (0.6 + 0.4 * c) * (1 + 0.06 * i.breath), k = (0.6 + 0.4 * d) * (1 + 0.25 * Math.max(0, -i.y) / 26), K = 2.7 * f * (1 + 0.25 * i.breath), V = (nt, it, R) => c * nt + d * it + f * R, rt = {
      hw: V(6.5 * L, 9.5 * k, K),
      t0: V(1.9, 0, 0),
      a: V(2 / 3, 2 / 3, 0),
      yt: V(3.53 * L, 1.6 * k, -4 * K / 3),
      ab: V(2 / 3, 0, 0),
      yb: V(3.53 * L, 17.3 * k, 4 * K / 3)
    };
    S(E, V(12.5, 11.6, 15.5), () => {
      r.fillStyle = h, r.fill(R3(rt));
    });
  }
}
const Sl = { x: NaN, y: NaN }, ao = /* @__PURE__ */ new Set();
let el = 0, $u = 0;
function Eb(r) {
  el = 0;
  const i = $u ? Math.min(0.1, (r - $u) / 1e3) : 0;
  $u = r, ao.forEach((u) => u(i)), ao.size && (el = requestAnimationFrame(Eb));
}
function Ab() {
  el || typeof document > "u" || document.hidden || ($u = 0, el = requestAnimationFrame(Eb));
}
let Gh = !1;
function U3() {
  Gh || typeof document > "u" || (Gh = !0, document.addEventListener("pointermove", (r) => {
    Sl.x = r.clientX, Sl.y = r.clientY;
  }, { passive: !0 }), document.addEventListener("pointerleave", () => {
    Sl.x = NaN, Sl.y = NaN;
  }), window.addEventListener("blur", () => {
    Sl.x = NaN, Sl.y = NaN;
  }), document.addEventListener("visibilitychange", () => {
    document.hidden ? (el && cancelAnimationFrame(el), el = 0) : ao.size && Ab();
  }));
}
function q3(r) {
  return U3(), ao.add(r), Ab(), () => {
    ao.delete(r), !ao.size && el && (cancelAnimationFrame(el), el = 0);
  };
}
function L3(r) {
  let i = 2166136261;
  for (let u = 0; u < r.length; u++) i = Math.imul(i ^ r.charCodeAt(u), 16777619);
  return (i >>> 0) % 1e3 / 1e3;
}
const Xa = (r, i, u) => Math.min(u, Math.max(i, Number.isFinite(r) ? r : 1)), Vh = /* @__PURE__ */ new Map();
function Zh(r) {
  let i = Vh.get(r);
  return i || (i = new Path2D(r), Vh.set(r, i)), i;
}
const $f = () => typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion: reduce)").matches, Ob = gt.forwardRef(function({
  type: r = "clover",
  face: i,
  state: u = "default",
  size: c = 64,
  color: d,
  ink: f,
  brightness: h = 1,
  saturation: p = 1.5,
  speed: g = 1,
  paused: z = !1,
  seed: y,
  shading: m = "plastic",
  shadow: v = 0.35,
  highlight: S = 1.3,
  depth: w = 0.65,
  light: X = 265,
  rim: $ = 0.5,
  spread: U = 1.55,
  interactive: G = !0,
  turn: Q = 1,
  theme: j = "auto",
  whirl: q = 0,
  whirlSize: W = 1,
  whirlWidth: _ = 1,
  whirlLength: E = 1,
  whirlTilt: L = 1,
  jumpHeight: k = 26,
  jumpTime: K = 0.68,
  jumpStretch: V = 1,
  jumpSpin: rt = 1,
  jumpLean: nt = 6,
  jumpEvery: it = 8,
  jumpLand: R = 0,
  jumpSquash: et = 1.15,
  jumpSquashTime: Z = 0.37,
  jumpSquashEase: ot = "pulse",
  jumpGroundTime: F = 0.11,
  jumpGroundEase: ct = "pulse",
  jumpRiseTime: ft = 0.33,
  jumpRiseEase: bt = "pulse",
  jumpClickSquashTime: M = 0.24,
  className: B,
  style: ut,
  "aria-label": Y,
  ...lt
}, st) {
  const tt = gt.useRef(null);
  gt.useImperativeHandle(st, () => tt.current);
  const J = gt.useId(), at = Au[r] ?? Au.clover, ht = i ?? at.face, yt = d ?? at.color, Mt = h === 1 && p === 1 ? yt : wa(yt, (Math.min(2, Math.max(0, h)) - 1) * 0.35, (Math.min(2, Math.max(0, p)) - 1) * 0.5), $t = f ?? Wp(Mt), wt = Math.min(1, Math.max(0, y ?? L3(J))), pt = u in fh ? u : "default", Dt = z || !(g > 0), Gt = m === !0 ? "crisp" : m === !1 ? "flat" : m, Et = gt.useRef(null), Ht = gt.useRef(null), Jt = gt.useRef(0), Vt = gt.useRef(g);
  Vt.current = g;
  const oe = gt.useRef(G);
  oe.current = G, Ht.current = {
    path: typeof Path2D > "u" ? null : Zh(dh[r] ?? dh.clover),
    face: ht,
    faceX: at.faceX,
    faceY: at.faceY,
    faceScale: at.faceScale,
    color: Mt,
    ink: $t,
    shading: Gt,
    shadow: Xa(v, 0, 2),
    highlight: Xa(S, 0, 2),
    depth: Xa(w, 0.2, 2),
    light: X,
    rim: Xa($, 0, 2),
    spread: Xa(U, 0.4, 2.5),
    typeKey: r,
    still: Dt || $f(),
    whirl: { strength: Xa(q, 0, 2), size: Xa(W, 0.6, 1.6), width: Xa(_, 0.4, 2), length: Xa(E, 0.4, 1.6), tilt: Xa(L, 0.5, 1.8) },
    parts: typeof Path2D < "u" && hh[r] ? Zh(hh[r]) : void 0
  };
  const re = (Yt) => {
    if (j !== "auto") return j;
    const Lt = Yt?.closest("[data-theme], .dark, .light");
    if (Lt) {
      const kt = Lt.getAttribute("data-theme");
      if (kt === "dark" || kt === "light") return kt;
      if (Lt.classList.contains("dark")) return "dark";
      if (Lt.classList.contains("light")) return "light";
    }
    return typeof matchMedia == "function" && matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }, Nt = () => {
    const Yt = tt.current, Lt = Ht.current;
    if (!Yt || !Lt || !Lt.path) return;
    const kt = Yt.clientWidth / xl || Jt.current || (typeof c == "number" ? c : 64);
    if (!kt) return;
    const se = Math.min(2, typeof devicePixelRatio == "number" && devicePixelRatio || 1), ge = Math.round(kt * xl * se);
    (Yt.width !== ge || Yt.height !== ge) && (Yt.width = ge, Yt.height = ge), Jt.current = kt;
    const da = Yt.getContext("2d");
    if (!da) return;
    da.setTransform(se, 0, 0, se, 0, 0), Lt.dpr = se;
    const de = Et.current ? Et.current.pose : Mh(pt);
    Lh(da, kt, de, Lt);
  };
  gt.useLayoutEffect(() => {
    if (Et.current ? Et.current.setState(pt) : Et.current = new n3(wt, pt), Et.current.setTurn(Xa(Q, 0, 2)), Et.current.setJump({ height: k, time: Math.max(0.2, K), stretch: V, spin: Math.max(0, Math.round(rt)), lean: nt, every: it, land: R, squash: et, squashTime: Math.max(0.05, Z), squashEase: ot, groundTime: Math.max(0, F), groundEase: ct, riseTime: Math.max(0.05, ft), riseEase: bt, clickSquashTime: Math.max(0.05, M) }), $f()) {
      const Yt = tt.current;
      if (Yt && Ht.current && Ht.current.path) {
        const Lt = Yt.clientWidth / xl || Jt.current || (typeof c == "number" ? c : 64);
        if (!Lt) return;
        Jt.current = Lt;
        const kt = Math.min(2, typeof devicePixelRatio == "number" && devicePixelRatio || 1);
        Yt.width = Yt.height = Math.round(Lt * xl * kt);
        const se = Yt.getContext("2d");
        se && (Ht.current.theme = re(Yt), Ht.current.dpr = kt, se.setTransform(kt, 0, 0, kt, 0, 0), Lh(se, Lt, Mh(pt), Ht.current));
      }
      return;
    }
    Ht.current && tt.current && (Ht.current.theme = re(tt.current)), Nt();
  }), gt.useEffect(() => {
    var Yt;
    if (Gt !== "plastic" || !((Yt = Ht.current) != null && Yt.path)) return;
    const Lt = Ht.current.path, kt = (typeof c == "number" ? c : 64) * Math.min(2, typeof devicePixelRatio == "number" && devicePixelRatio || 1), se = (typeof requestIdleCallback == "function" ? requestIdleCallback : (ge) => setTimeout(ge, 1))(() => m3(r, Lt, kt, w));
    return () => {
      typeof cancelIdleCallback == "function" ? cancelIdleCallback(se) : clearTimeout(se);
    };
  }, [Gt, r, c, w]), gt.useEffect(() => {
    if (Dt || $f()) return;
    const Yt = tt.current;
    if (!Yt) return;
    let Lt = !0, kt = null;
    const se = 3, ge = (ha) => {
      const Ee = Et.current;
      if (Ee) {
        if (oe.current && !Number.isNaN(Sl.x)) {
          const ba = Yt.getBoundingClientRect(), Ne = ba.width / xl || 1, sn = (Sl.x - (ba.left + ba.width / 2)) / Ne, ti = (Sl.y - (ba.top + ba.height / 2 + Su * Ne)) / Ne, zt = Math.hypot(sn, ti), ie = zt < 1 ? 1 : zt > se ? 0 : 1 - (zt - 1) / (se - 1);
          Ee.setPointer(sn / Math.max(1, zt), ti / Math.max(1, zt), ie);
        } else Ee.setPointer(0, 0, 0);
        Ee.update(ha * Vt.current), Nt();
      }
    }, da = () => {
      kt || (kt = q3(ge));
    }, de = () => {
      kt && kt(), kt = null;
    };
    let $l = null;
    return typeof IntersectionObserver == "function" ? ($l = new IntersectionObserver((ha) => {
      var Ee;
      Lt = ((Ee = ha[0]) == null ? void 0 : Ee.isIntersecting) ?? !0, Lt ? da() : de();
    }), $l.observe(Yt)) : da(), () => {
      de(), $l && $l.disconnect();
    };
  }, [Dt]);
  const Zt = typeof c == "number" ? `${c * xl}px` : `calc(${c} * ${xl})`, Qt = (Yt) => typeof c == "number" ? `${-c * Yt}px` : `calc(${c} * ${-Yt})`, ne = (xl - 1) / 2, fa = {
    display: "inline-block",
    verticalAlign: "middle",
    width: Zt,
    height: Zt,
    marginLeft: Qt(ne),
    marginRight: Qt(ne),
    marginTop: Qt(ne + Su),
    marginBottom: Qt(ne - Su),
    flex: "none",
    ...ut
  }, La = (Yt) => {
    var Lt, kt;
    G && !Dt && ((Lt = Et.current) == null || Lt.poke()), (kt = lt.onClick) == null || kt.call(lt, Yt);
  };
  return /* @__PURE__ */ Tt.jsx(
    "canvas",
    {
      ref: tt,
      className: B ? `ba ${B}` : "ba",
      "data-bot-avatar": r,
      "data-face": ht,
      "data-state": pt,
      role: "img",
      "aria-label": Y ?? `${at.label} bot, ${fh[pt]}`,
      style: fa,
      ...lt,
      onClick: La
    }
  );
}), B3 = {
  sm: {
    borderRadius: 32,
    borderWidth: 1,
    width: 70,
    height: 36
  },
  md: {
    borderRadius: 16,
    borderWidth: 1
  },
  line: {
    borderRadius: 16,
    borderWidth: 1
  },
  "pulse-outside": {
    borderRadius: 16,
    borderWidth: 1
  },
  "pulse-inner": {
    borderRadius: 16,
    borderWidth: 1
  }
}, j3 = {
  sm: {
    dark: {
      strokeOpacity: 0.46,
      innerOpacity: 0.24,
      bloomOpacity: 0.38,
      innerShadow: "rgba(255, 255, 255, 0.3)",
      saturation: 1.2
    },
    light: {
      strokeOpacity: 0.12,
      innerOpacity: 0.3,
      bloomOpacity: 0.16,
      innerShadow: "rgba(0, 0, 0, 0.14)",
      saturation: 1.8
    }
  },
  md: {
    dark: {
      strokeOpacity: 0.26,
      innerOpacity: 0.42,
      bloomOpacity: 0.24,
      innerShadow: "rgba(255, 255, 255, 0.27)",
      saturation: 1.2
    },
    light: {
      strokeOpacity: 0.12,
      innerOpacity: 0.26,
      bloomOpacity: 0.34,
      innerShadow: "rgba(0, 0, 0, 0.14)",
      saturation: 1.5
    }
  },
  line: {
    dark: {
      strokeOpacity: 1.14,
      innerOpacity: 0.7,
      bloomOpacity: 0.8,
      innerShadow: "rgba(255, 255, 255, 0.1)",
      saturation: 1.2
    },
    light: {
      strokeOpacity: 0.16,
      innerOpacity: 0.32,
      bloomOpacity: 0.3,
      innerShadow: "rgba(0, 0, 0, 0.14)",
      saturation: 1.95
    }
  },
  // Pulse Outside — outward-blooming breathe (ported from v5 "Breathe Outside Uncropped" / c6)
  "pulse-outside": {
    dark: {
      strokeOpacity: 0.94,
      innerOpacity: 0.34,
      bloomOpacity: 0.3,
      innerShadow: "transparent",
      saturation: 1.2,
      brightness: 1.9,
      // v5 Card 5 frames the card with a single 1px hairline (its box-shadow at
      // 0.3). Wrapped components here already supply their own ~equivalent 1px
      // border, so the beam must NOT add a second hairline on top or the edge
      // reads brighter than v5. Kept at 0 to match v5's single-hairline look.
      hairlineOpacity: 0
    },
    light: {
      strokeOpacity: 1.96,
      innerOpacity: 1.04,
      bloomOpacity: 0.42,
      innerShadow: "transparent",
      saturation: 0.6,
      brightness: 1.7,
      hairlineOpacity: 0
    }
  },
  // Pulse Inner — contained breathe (ported from v5 "Breathe" / c4)
  "pulse-inner": {
    dark: {
      strokeOpacity: 1.54,
      innerOpacity: 0.44,
      bloomOpacity: 0.66,
      innerShadow: "transparent",
      saturation: 1.2,
      brightness: 0.75
    },
    light: {
      strokeOpacity: 0.32,
      innerOpacity: 0.4,
      bloomOpacity: 0.8,
      innerShadow: "transparent",
      saturation: 0.75,
      brightness: 1.3
    }
  }
}, Fn = {
  colorful: {
    border: [
      { color: "rgb(255, 50, 100)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(40, 140, 255)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(50, 200, 80)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(30, 185, 170)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(100, 70, 255)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(40, 140, 255)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(255, 120, 40)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(240, 50, 180)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(180, 40, 240)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(255, 60, 80)", secondary: "rgba(40, 190, 180, 0.98)" },
    spikeLt: { primary: "rgb(200, 30, 60)", secondary: "rgb(20, 150, 140)" }
  },
  mono: {
    border: [
      { color: "rgb(180, 180, 180)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(140, 140, 140)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(160, 160, 160)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(130, 130, 130)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(170, 170, 170)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(150, 150, 150)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(190, 190, 190)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(145, 145, 145)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(165, 165, 165)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(200, 200, 200)", secondary: "rgb(170, 170, 170)" },
    spikeLt: { primary: "rgb(80, 80, 80)", secondary: "rgb(120, 120, 120)" }
  },
  ocean: {
    border: [
      { color: "rgb(100, 80, 220)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(60, 120, 255)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(80, 100, 200)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(50, 140, 220)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(120, 80, 255)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(70, 130, 255)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(140, 100, 240)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(90, 110, 230)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(130, 70, 255)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(100, 120, 255)", secondary: "rgba(130, 100, 220, 0.98)" },
    spikeLt: { primary: "rgb(60, 60, 180)", secondary: "rgb(80, 100, 200)" }
  },
  sunset: {
    border: [
      { color: "rgb(255, 80, 50)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(255, 160, 40)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(255, 120, 60)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(255, 200, 50)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(255, 100, 80)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(255, 180, 60)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(255, 60, 60)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(255, 140, 50)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(255, 90, 70)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(255, 140, 80)", secondary: "rgba(255, 100, 60, 0.98)" },
    spikeLt: { primary: "rgb(200, 80, 40)", secondary: "rgb(220, 120, 30)" }
  },
  forest: {
    border: [
      { color: "rgb(46, 160, 90)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(30, 190, 120)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(70, 180, 70)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(20, 150, 130)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(90, 200, 80)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(40, 170, 110)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(120, 210, 70)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(35, 145, 100)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(60, 195, 140)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(46, 160, 90)", secondary: "rgba(30, 190, 120,, 0.98)" },
    spikeLt: { primary: "rgb(33, 115, 65)", secondary: "rgb(22, 137, 86)" }
  },
  candy: {
    border: [
      { color: "rgb(240, 70, 170)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(255, 90, 140)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(215, 60, 200)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(255, 110, 180)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(200, 80, 240)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(250, 60, 150)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(230, 120, 220)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(245, 85, 165)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(210, 70, 230)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(240, 70, 170)", secondary: "rgba(255, 90, 140,, 0.98)" },
    spikeLt: { primary: "rgb(173, 50, 122)", secondary: "rgb(184, 65, 101)" }
  },
  ice: {
    border: [
      { color: "rgb(90, 200, 240)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(60, 175, 230)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(130, 220, 250)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(70, 190, 215)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(110, 210, 255)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(50, 165, 220)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(150, 230, 250)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(85, 195, 235)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(65, 180, 245)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(90, 200, 240)", secondary: "rgba(60, 175, 230,, 0.98)" },
    spikeLt: { primary: "rgb(65, 144, 173)", secondary: "rgb(43, 126, 166)" }
  },
  gold: {
    border: [
      { color: "rgb(240, 190, 60)", pos: "33% -7.4%", size: "70px 40px" },
      { color: "rgb(255, 210, 90)", pos: "12% -5%", size: "60px 35px" },
      { color: "rgb(225, 165, 40)", pos: "2.1% 68.3%", size: "40px 70px" },
      { color: "rgb(250, 200, 70)", pos: "2.1% 68.3%", size: "20px 35px" },
      { color: "rgb(255, 225, 120)", pos: "74.4% 100%", size: "180px 32px" },
      { color: "rgb(230, 175, 50)", pos: "55% 100%", size: "85px 26px" },
      { color: "rgb(245, 205, 85)", pos: "93.9% 0%", size: "74px 32px" },
      { color: "rgb(215, 155, 35)", pos: "100% 27.1%", size: "26px 42px" },
      { color: "rgb(255, 215, 100)", pos: "100% 27.1%", size: "52px 48px" }
    ],
    spike: { primary: "rgb(240, 190, 60)", secondary: "rgba(255, 210, 90,, 0.98)" },
    spikeLt: { primary: "rgb(173, 137, 43)", secondary: "rgb(184, 151, 65)" }
  }
}, Hb = {
  colorful: {
    border: [
      { color: "rgb(50, 200, 80)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(30, 185, 170)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(255, 120, 40)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(100, 70, 255)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(240, 50, 180)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(180, 40, 240)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(40, 140, 255)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(255, 50, 100)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(50, 200, 80, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(30, 185, 170, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(255, 120, 40, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(100, 70, 255, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(240, 50, 180, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(180, 40, 240, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(40, 140, 255, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(255, 50, 100, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  mono: {
    border: [
      { color: "rgb(160, 160, 160)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(140, 140, 140)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(180, 180, 180)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(150, 150, 150)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(170, 170, 170)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(155, 155, 155)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(145, 145, 145)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(165, 165, 165)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(160, 160, 160, 0.25)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(140, 140, 140, 0.22)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(180, 180, 180, 0.17)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(150, 150, 150, 0.17)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(170, 170, 170, 0.15)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(155, 155, 155, 0.20)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(145, 145, 145, 0.15)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(165, 165, 165, 0.15)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  ocean: {
    border: [
      { color: "rgb(60, 140, 200)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(50, 120, 180)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(100, 80, 220)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(80, 100, 255)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(120, 70, 240)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(90, 80, 220)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(70, 110, 255)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(110, 90, 230)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(60, 140, 200, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(50, 120, 180, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(100, 80, 220, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(80, 100, 255, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(120, 70, 240, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(90, 80, 220, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(70, 110, 255, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(110, 90, 230, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  sunset: {
    border: [
      { color: "rgb(255, 180, 50)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(255, 150, 40)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(255, 80, 60)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(255, 100, 80)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(255, 60, 80)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(255, 120, 60)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(255, 200, 50)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(255, 90, 70)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(255, 180, 50, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(255, 150, 40, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(255, 80, 60, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(255, 100, 80, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(255, 60, 80, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(255, 120, 60, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(255, 200, 50, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(255, 90, 70, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  forest: {
    border: [
      { color: "rgb(46, 160, 90)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(30, 190, 120)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(70, 180, 70)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(20, 150, 130)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(90, 200, 80)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(40, 170, 110)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(120, 210, 70)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(35, 145, 100)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(60, 195, 140,, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(46, 160, 90,, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(30, 190, 120,, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(70, 180, 70,, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(20, 150, 130,, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(90, 200, 80,, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(40, 170, 110,, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(120, 210, 70,, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  candy: {
    border: [
      { color: "rgb(240, 70, 170)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(255, 90, 140)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(215, 60, 200)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(255, 110, 180)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(200, 80, 240)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(250, 60, 150)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(230, 120, 220)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(245, 85, 165)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(210, 70, 230,, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(240, 70, 170,, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(255, 90, 140,, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(215, 60, 200,, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(255, 110, 180,, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(200, 80, 240,, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(250, 60, 150,, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(230, 120, 220,, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  ice: {
    border: [
      { color: "rgb(90, 200, 240)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(60, 175, 230)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(130, 220, 250)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(70, 190, 215)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(110, 210, 255)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(50, 165, 220)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(150, 230, 250)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(85, 195, 235)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(65, 180, 245,, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(90, 200, 240,, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(60, 175, 230,, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(130, 220, 250,, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(70, 190, 215,, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(110, 210, 255,, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(50, 165, 220,, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(150, 230, 250,, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  },
  gold: {
    border: [
      { color: "rgb(240, 190, 60)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgb(255, 210, 90)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgb(225, 165, 40)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgb(250, 200, 70)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgb(255, 225, 120)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgb(230, 175, 50)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgb(245, 205, 85)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgb(215, 155, 35)", pos: "100% 27%", size: "11px 12px" }
    ],
    inner: [
      { color: "rgba(255, 215, 100,, 0.5)", pos: "2% 68%", size: "9px 18px" },
      { color: "rgba(240, 190, 60,, 0.45)", pos: "2% 68%", size: "4px 8px" },
      { color: "rgba(255, 210, 90,, 0.35)", pos: "72% -3%", size: "59px 9px" },
      { color: "rgba(225, 165, 40,, 0.35)", pos: "74% 100%", size: "42px 7px" },
      { color: "rgba(250, 200, 70,, 0.3)", pos: "100% 27%", size: "10px 17px" },
      { color: "rgba(255, 225, 120,, 0.4)", pos: "100% 27%", size: "10px 18px" },
      { color: "rgba(230, 175, 50,, 0.3)", pos: "100% 27%", size: "5px 10px" },
      { color: "rgba(245, 205, 85,, 0.3)", pos: "100% 27%", size: "11px 12px" }
    ]
  }
};
function k3(r) {
  return Hb[r].border.map((i) => `radial-gradient(ellipse ${i.size} at ${i.pos}, ${i.color}, transparent)`).join(`,
    `);
}
function G3(r) {
  return Hb[r].inner.map((i) => `radial-gradient(ellipse ${i.size} at ${i.pos}, ${i.color}, transparent)`).join(`,
    `);
}
function V3(r) {
  return Fn[r].border.map((i) => `radial-gradient(ellipse ${i.size} at ${i.pos}, ${i.color}, transparent)`).join(`,
    `);
}
function Z3(r) {
  const i = Fn[r], u = r === "mono" ? 0.225 : 0.45;
  return i.border.map((c) => {
    const d = c.color.replace("rgb(", "rgba(").replace(")", `, ${u})`);
    return `radial-gradient(ellipse ${c.size.split(" ").map((f) => {
      const h = parseInt(f);
      return `${Math.round(h * 0.9)}px`;
    }).join(" ")} at ${c.pos}, ${d}, transparent)`;
  }).join(`,
    `);
}
function Q3(r, i) {
  const u = Fn[r];
  return i ? u.spike : u.spikeLt;
}
const W3 = {
  colorful: {
    dark: [
      { color: "rgb(255, 50, 100)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(40, 180, 220)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(50, 200, 80)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(180, 40, 240)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(255, 160, 30)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(100, 70, 255)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(40, 140, 255)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(240, 50, 180)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(30, 185, 170)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(255, 50, 100)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(40, 140, 255)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(50, 200, 80)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(180, 40, 240)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(30, 185, 170)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(100, 70, 255)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(40, 140, 255)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(255, 120, 40)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(240, 50, 180)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  mono: {
    dark: [
      { color: "rgb(200, 200, 200)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(170, 170, 170)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(155, 155, 155)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(185, 185, 185)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(165, 165, 165)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(180, 180, 180)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(160, 160, 160)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(175, 175, 175)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(190, 190, 190)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(100, 100, 100)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(80, 80, 80)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(90, 90, 90)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(70, 70, 70)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(85, 85, 85)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(95, 95, 95)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(75, 75, 75)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(105, 105, 105)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(65, 65, 65)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  ocean: {
    dark: [
      { color: "rgb(100, 80, 220)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(60, 120, 255)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(80, 100, 200)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(130, 70, 255)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(70, 130, 255)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(120, 80, 255)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(90, 110, 230)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(110, 90, 240)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(140, 100, 255)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(80, 60, 200)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(50, 100, 220)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(70, 90, 190)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(110, 60, 220)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(60, 110, 230)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(100, 70, 240)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(80, 100, 210)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(90, 80, 225)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(120, 90, 245)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  sunset: {
    dark: [
      { color: "rgb(255, 100, 60)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(255, 180, 50)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(255, 140, 70)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(255, 80, 80)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(255, 200, 60)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(255, 120, 50)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(255, 160, 80)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(255, 90, 60)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(255, 70, 70)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(220, 80, 40)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(230, 150, 30)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(210, 110, 50)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(200, 60, 60)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(220, 170, 40)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(210, 100, 30)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(230, 130, 60)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(190, 70, 50)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(180, 50, 50)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  forest: {
    dark: [
      { color: "rgb(46, 160, 90)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(30, 190, 120)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(70, 180, 70)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(20, 150, 130)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(90, 200, 80)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(40, 170, 110)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(120, 210, 70)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(35, 145, 100)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(60, 195, 140)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(33, 115, 65)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(22, 137, 86)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(50, 130, 50)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(14, 108, 94)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(65, 144, 58)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(29, 122, 79)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(86, 151, 50)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(25, 104, 72)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(43, 140, 101)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  candy: {
    dark: [
      { color: "rgb(240, 70, 170)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(255, 90, 140)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(215, 60, 200)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(255, 110, 180)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(200, 80, 240)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(250, 60, 150)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(230, 120, 220)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(245, 85, 165)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(210, 70, 230)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(173, 50, 122)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(184, 65, 101)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(155, 43, 144)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(184, 79, 130)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(144, 58, 173)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(180, 43, 108)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(166, 86, 158)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(176, 61, 119)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(151, 50, 166)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  ice: {
    dark: [
      { color: "rgb(90, 200, 240)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(60, 175, 230)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(130, 220, 250)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(70, 190, 215)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(110, 210, 255)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(50, 165, 220)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(150, 230, 250)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(85, 195, 235)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(65, 180, 245)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(65, 144, 173)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(43, 126, 166)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(94, 158, 180)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(50, 137, 155)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(79, 151, 184)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(36, 119, 158)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(108, 166, 180)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(61, 140, 169)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(47, 130, 176)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  },
  gold: {
    dark: [
      { color: "rgb(240, 190, 60)", sizeW: 36, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(255, 210, 90)", sizeW: 30, sizeH: 32, offsetX: 39, offsetY: 0 },
      { color: "rgb(225, 165, 40)", sizeW: 33, sizeH: 28, offsetX: -36, offsetY: 2 },
      { color: "rgb(250, 200, 70)", sizeW: 29, sizeH: 34, offsetX: -54, offsetY: 0 },
      { color: "rgb(255, 225, 120)", sizeW: 27, sizeH: 30, offsetX: 51, offsetY: -1 },
      { color: "rgb(230, 175, 50)", sizeW: 36, sizeH: 24, offsetX: 21, offsetY: 1 },
      { color: "rgb(245, 205, 85)", sizeW: 30, sizeH: 22, offsetX: -21, offsetY: 0 },
      { color: "rgb(215, 155, 35)", sizeW: 25, sizeH: 28, offsetX: 66, offsetY: 1 },
      { color: "rgb(255, 215, 100)", sizeW: 23, sizeH: 30, offsetX: -66, offsetY: -1 }
    ],
    light: [
      { color: "rgb(173, 137, 43)", sizeW: 45, sizeH: 36, offsetX: 0, offsetY: 2 },
      { color: "rgb(184, 151, 65)", sizeW: 35, sizeH: 32, offsetX: 65, offsetY: 0 },
      { color: "rgb(162, 119, 29)", sizeW: 40, sizeH: 28, offsetX: -60, offsetY: 2 },
      { color: "rgb(180, 144, 50)", sizeW: 35, sizeH: 34, offsetX: -90, offsetY: 0 },
      { color: "rgb(184, 162, 86)", sizeW: 38, sizeH: 30, offsetX: 85, offsetY: -1 },
      { color: "rgb(166, 126, 36)", sizeW: 50, sizeH: 24, offsetX: 35, offsetY: 1 },
      { color: "rgb(176, 148, 61)", sizeW: 40, sizeH: 22, offsetX: -35, offsetY: 0 },
      { color: "rgb(155, 112, 25)", sizeW: 35, sizeH: 28, offsetX: 110, offsetY: 1 },
      { color: "rgb(184, 155, 72)", sizeW: 30, sizeH: 30, offsetX: -110, offsetY: -1 }
    ]
  }
};
function K3(r, i, u) {
  return W3[r][i ? "dark" : "light"].map((c) => {
    const d = c.offsetX === 0 ? "" : c.offsetX > 0 ? ` + ${c.offsetX}px` : ` - ${Math.abs(c.offsetX)}px`, f = c.offsetY === 0 ? "" : c.offsetY > 0 ? ` + ${c.offsetY}px` : ` - ${Math.abs(c.offsetY)}px`;
    return `radial-gradient(ellipse calc(${c.sizeW}px * var(--beam-w-${u})) calc(${c.sizeH}px * var(--beam-h-${u})) at calc(var(--beam-x-${u}) * 100%${d}) calc(100%${f}), ${c.color}, transparent)`;
  }).join(`,
       `);
}
const J3 = {
  colorful: [
    { color: "rgba(255, 50, 100, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(40, 180, 220, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(50, 200, 80, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(180, 40, 240, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(255, 160, 30, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(100, 70, 255, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(40, 140, 255, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(240, 50, 180, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(30, 185, 170, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  mono: [
    { color: "rgba(200, 200, 200, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(170, 170, 170, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(155, 155, 155, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(185, 185, 185, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(165, 165, 165, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(180, 180, 180, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(160, 160, 160, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(175, 175, 175, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(190, 190, 190, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  ocean: [
    { color: "rgba(100, 80, 220, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(60, 120, 255, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(80, 100, 200, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(130, 70, 255, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(70, 130, 255, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(120, 80, 255, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(90, 110, 230, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(110, 90, 240, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(140, 100, 255, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  sunset: [
    { color: "rgba(255, 100, 60, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(255, 180, 50, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(255, 140, 70, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(255, 80, 80, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(255, 200, 60, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(255, 120, 50, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(255, 160, 80, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(255, 90, 60, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(255, 70, 70, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  forest: [
    { color: "rgba(46, 160, 90,, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(30, 190, 120,, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(70, 180, 70,, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(20, 150, 130,, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(90, 200, 80,, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(40, 170, 110,, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(120, 210, 70,, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(35, 145, 100,, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(60, 195, 140,, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  candy: [
    { color: "rgba(240, 70, 170,, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(255, 90, 140,, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(215, 60, 200,, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(255, 110, 180,, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(200, 80, 240,, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(250, 60, 150,, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(230, 120, 220,, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(245, 85, 165,, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(210, 70, 230,, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  ice: [
    { color: "rgba(90, 200, 240,, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(60, 175, 230,, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(130, 220, 250,, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(70, 190, 215,, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(110, 210, 255,, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(50, 165, 220,, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(150, 230, 250,, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(85, 195, 235,, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(65, 180, 245,, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ],
  gold: [
    { color: "rgba(240, 190, 60,, 0.48)", sizeW: 33, sizeH: 30, offsetX: 0, offsetY: 0 },
    { color: "rgba(255, 210, 90,, 0.42)", sizeW: 24, sizeH: 26, offsetX: 39, offsetY: -3 },
    { color: "rgba(225, 165, 40,, 0.48)", sizeW: 27, sizeH: 24, offsetX: -36, offsetY: 0 },
    { color: "rgba(250, 200, 70,, 0.42)", sizeW: 23, sizeH: 28, offsetX: -54, offsetY: -2 },
    { color: "rgba(255, 225, 120,, 0.50)", sizeW: 24, sizeH: 24, offsetX: 51, offsetY: -1 },
    { color: "rgba(230, 175, 50,, 0.45)", sizeW: 30, sizeH: 20, offsetX: 21, offsetY: 0 },
    { color: "rgba(245, 205, 85,, 0.40)", sizeW: 25, sizeH: 18, offsetX: -21, offsetY: -2 },
    { color: "rgba(215, 155, 35,, 0.45)", sizeW: 21, sizeH: 24, offsetX: 66, offsetY: 0 },
    { color: "rgba(255, 215, 100,, 0.52)", sizeW: 18, sizeH: 26, offsetX: -66, offsetY: -1 }
  ]
};
function F3(r, i) {
  return J3[r].map((u) => {
    const c = u.offsetX === 0 ? "" : u.offsetX > 0 ? ` + ${u.offsetX}px` : ` - ${Math.abs(u.offsetX)}px`, d = u.offsetY === 0 ? "" : ` - ${Math.abs(u.offsetY)}px`;
    return `radial-gradient(ellipse calc(${u.sizeW}px * var(--beam-w-${i})) calc(${u.sizeH}px * var(--beam-h-${i})) at calc(var(--beam-x-${i}) * 100%${c}) calc(100%${d}), ${u.color}, transparent)`;
  }).join(`,
    `);
}
const I3 = {
  colorful: {
    dark: {
      spikes: [
        { color1: "rgb(100, 70, 255)", color2: "rgba(100, 70, 255, 1)" },
        // 36%
        { color1: "rgba(255, 170, 40, 0.59)", color2: "rgba(255, 170, 40, 0.29)" },
        // 50%
        { color1: "rgb(50, 200, 100)", color2: "rgba(50, 200, 100, 1)" },
        // 64%
        { color1: "rgba(200, 50, 240, 0.91)", color2: "rgba(200, 50, 240, 0.45)" },
        // 78%
        { color1: "rgb(40, 140, 255)", color2: "rgba(40, 140, 255, 1)" }
        // 92%
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(80, 50, 200)", color2: "rgba(80, 50, 200, 0.8)" },
        // 36%
        { color1: "rgba(210, 130, 0, 0.7)", color2: "rgba(210, 130, 0, 0.46)" },
        // 50%
        { color1: "rgb(30, 160, 70)", color2: "rgba(30, 160, 70, 0.82)" },
        // 64%
        { color1: "rgb(160, 30, 190)", color2: "rgba(160, 30, 190, 0.7)" },
        // 78%
        { color1: "rgb(30, 100, 200)", color2: "rgba(30, 100, 200, 0.78)" }
        // 92%
      ]
    }
  },
  mono: {
    dark: {
      spikes: [
        { color1: "rgb(200, 200, 200)", color2: "rgba(200, 200, 200, 1)" },
        { color1: "rgba(180, 180, 180, 0.59)", color2: "rgba(180, 180, 180, 0.29)" },
        { color1: "rgb(190, 190, 190)", color2: "rgba(190, 190, 190, 1)" },
        { color1: "rgba(170, 170, 170, 0.91)", color2: "rgba(170, 170, 170, 0.45)" },
        { color1: "rgb(185, 185, 185)", color2: "rgba(185, 185, 185, 1)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(80, 80, 80)", color2: "rgba(80, 80, 80, 0.8)" },
        { color1: "rgba(100, 100, 100, 0.7)", color2: "rgba(100, 100, 100, 0.46)" },
        { color1: "rgb(70, 70, 70)", color2: "rgba(70, 70, 70, 0.82)" },
        { color1: "rgb(90, 90, 90)", color2: "rgba(90, 90, 90, 0.7)" },
        { color1: "rgb(85, 85, 85)", color2: "rgba(85, 85, 85, 0.78)" }
      ]
    }
  },
  ocean: {
    dark: {
      spikes: [
        { color1: "rgb(100, 80, 255)", color2: "rgb(100, 80, 255)" },
        { color1: "rgba(80, 130, 220, 0.59)", color2: "rgba(80, 130, 220, 0.29)" },
        { color1: "rgb(60, 100, 255)", color2: "rgb(60, 100, 255)" },
        { color1: "rgba(90, 120, 200, 0.91)", color2: "rgba(90, 120, 200, 0.45)" },
        { color1: "rgb(120, 90, 255)", color2: "rgb(120, 90, 255)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(50, 40, 180)", color2: "rgba(50, 40, 180, 0.8)" },
        { color1: "rgba(40, 80, 200, 0.7)", color2: "rgba(40, 80, 200, 0.46)" },
        { color1: "rgb(30, 50, 190)", color2: "rgba(30, 50, 190, 0.82)" },
        { color1: "rgb(60, 90, 180)", color2: "rgba(60, 90, 180, 0.7)" },
        { color1: "rgb(70, 60, 200)", color2: "rgba(70, 60, 200, 0.78)" }
      ]
    }
  },
  sunset: {
    dark: {
      spikes: [
        { color1: "rgb(255, 100, 80)", color2: "rgb(255, 100, 80)" },
        { color1: "rgba(255, 150, 80, 0.59)", color2: "rgba(255, 150, 80, 0.29)" },
        { color1: "rgb(255, 80, 60)", color2: "rgb(255, 80, 60)" },
        { color1: "rgba(255, 120, 50, 0.91)", color2: "rgba(255, 120, 50, 0.45)" },
        { color1: "rgb(255, 140, 70)", color2: "rgb(255, 140, 70)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(200, 60, 30)", color2: "rgba(200, 60, 30, 0.8)" },
        { color1: "rgba(220, 100, 20, 0.7)", color2: "rgba(220, 100, 20, 0.46)" },
        { color1: "rgb(180, 40, 20)", color2: "rgba(180, 40, 20, 0.82)" },
        { color1: "rgb(210, 80, 10)", color2: "rgba(210, 80, 10, 0.7)" },
        { color1: "rgb(190, 70, 30)", color2: "rgba(190, 70, 30, 0.78)" }
      ]
    }
  },
  forest: {
    dark: {
      spikes: [
        { color1: "rgb(46, 160, 90)", color2: "rgb(30, 190, 120)" },
        { color1: "rgba(70, 180, 70,, 0.59)", color2: "rgba(20, 150, 130,, 0.29)" },
        { color1: "rgb(90, 200, 80)", color2: "rgb(40, 170, 110)" },
        { color1: "rgba(120, 210, 70,, 0.91)", color2: "rgba(35, 145, 100,, 0.45)" },
        { color1: "rgb(60, 195, 140)", color2: "rgb(46, 160, 90)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(33, 115, 65)", color2: "rgba(22, 137, 86,, 0.8)" },
        { color1: "rgba(50, 130, 50,, 0.7)", color2: "rgba(14, 108, 94,, 0.46)" },
        { color1: "rgb(65, 144, 58)", color2: "rgba(29, 122, 79,, 0.82)" },
        { color1: "rgb(86, 151, 50)", color2: "rgba(25, 104, 72,, 0.7)" },
        { color1: "rgb(43, 140, 101)", color2: "rgba(33, 115, 65,, 0.78)" }
      ]
    }
  },
  candy: {
    dark: {
      spikes: [
        { color1: "rgb(240, 70, 170)", color2: "rgb(255, 90, 140)" },
        { color1: "rgba(215, 60, 200,, 0.59)", color2: "rgba(255, 110, 180,, 0.29)" },
        { color1: "rgb(200, 80, 240)", color2: "rgb(250, 60, 150)" },
        { color1: "rgba(230, 120, 220,, 0.91)", color2: "rgba(245, 85, 165,, 0.45)" },
        { color1: "rgb(210, 70, 230)", color2: "rgb(240, 70, 170)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(173, 50, 122)", color2: "rgba(184, 65, 101,, 0.8)" },
        { color1: "rgba(155, 43, 144,, 0.7)", color2: "rgba(184, 79, 130,, 0.46)" },
        { color1: "rgb(144, 58, 173)", color2: "rgba(180, 43, 108,, 0.82)" },
        { color1: "rgb(166, 86, 158)", color2: "rgba(176, 61, 119,, 0.7)" },
        { color1: "rgb(151, 50, 166)", color2: "rgba(173, 50, 122,, 0.78)" }
      ]
    }
  },
  ice: {
    dark: {
      spikes: [
        { color1: "rgb(90, 200, 240)", color2: "rgb(60, 175, 230)" },
        { color1: "rgba(130, 220, 250,, 0.59)", color2: "rgba(70, 190, 215,, 0.29)" },
        { color1: "rgb(110, 210, 255)", color2: "rgb(50, 165, 220)" },
        { color1: "rgba(150, 230, 250,, 0.91)", color2: "rgba(85, 195, 235,, 0.45)" },
        { color1: "rgb(65, 180, 245)", color2: "rgb(90, 200, 240)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(65, 144, 173)", color2: "rgba(43, 126, 166,, 0.8)" },
        { color1: "rgba(94, 158, 180,, 0.7)", color2: "rgba(50, 137, 155,, 0.46)" },
        { color1: "rgb(79, 151, 184)", color2: "rgba(36, 119, 158,, 0.82)" },
        { color1: "rgb(108, 166, 180)", color2: "rgba(61, 140, 169,, 0.7)" },
        { color1: "rgb(47, 130, 176)", color2: "rgba(65, 144, 173,, 0.78)" }
      ]
    }
  },
  gold: {
    dark: {
      spikes: [
        { color1: "rgb(240, 190, 60)", color2: "rgb(255, 210, 90)" },
        { color1: "rgba(225, 165, 40,, 0.59)", color2: "rgba(250, 200, 70,, 0.29)" },
        { color1: "rgb(255, 225, 120)", color2: "rgb(230, 175, 50)" },
        { color1: "rgba(245, 205, 85,, 0.91)", color2: "rgba(215, 155, 35,, 0.45)" },
        { color1: "rgb(255, 215, 100)", color2: "rgb(240, 190, 60)" }
      ]
    },
    light: {
      spikes: [
        { color1: "rgb(173, 137, 43)", color2: "rgba(184, 151, 65,, 0.8)" },
        { color1: "rgba(162, 119, 29,, 0.7)", color2: "rgba(180, 144, 50,, 0.46)" },
        { color1: "rgb(184, 162, 86)", color2: "rgba(166, 126, 36,, 0.82)" },
        { color1: "rgb(176, 148, 61)", color2: "rgba(155, 112, 25,, 0.7)" },
        { color1: "rgb(184, 155, 72)", color2: "rgba(173, 137, 43,, 0.78)" }
      ]
    }
  }
};
function du(r, i) {
  const u = r.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*[\d.]+\s*\)$/);
  if (u) return `rgba(${u[1]}, ${u[2]}, ${u[3]}, ${i})`;
  const c = r.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  return c ? `rgba(${c[1]}, ${c[2]}, ${c[3]}, ${i})` : r;
}
function Xn(r, i) {
  const u = r.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  if (u) return `rgba(${u[1]}, ${u[2]}, ${u[3]}, ${(parseFloat(u[4]) * i).toFixed(2)})`;
  const c = r.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  return c ? `rgba(${c[1]}, ${c[2]}, ${c[3]}, ${i.toFixed(2)})` : r;
}
function P3(r, i, u) {
  const c = Q3(r, i), d = I3[r][i ? "dark" : "light"], f = r === "mono", h = f ? 0.14 : 1, p = f ? Xn(c.primary, 0.14) : c.primary, g = f ? Xn(c.primary, 0.09) : c.primary, z = f ? Xn(c.secondary, 0.12) : c.secondary, y = f ? du(c.secondary, 0.06) : du(c.secondary, 0.49), m = d.spikes.map(
    (K) => f ? { color1: Xn(K.color1, h), color2: Xn(K.color2, h * 0.7) } : K
  ), v = f ? "12px" : "0.8px", S = f ? "14px" : "2px", w = f ? "12px" : "1.2px", X = f ? "10px" : "0.6px", $ = f ? "42px" : "92px", U = f ? "38px" : "72px", G = f ? "40px" : "85px", Q = f ? "32px" : "60px", j = f ? "12px" : "1px", q = f ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)", W = f ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.9)", _ = f ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.5)", E = f ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.3)", L = f ? "rgba(255, 255, 255, 0.06)" : "rgba(255, 255, 255, 0.12)", k = f ? "rgba(255, 255, 255, 0.015)" : "rgba(255, 255, 255, 0.03)";
  if (i)
    return `radial-gradient(ellipse calc(${v} * var(--beam-spike-${u}) * var(--beam-spike-mul, 1)) calc(${$} * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${p}, ${g} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${u}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${z}, ${y} 50%, transparent 95%),
       radial-gradient(ellipse calc(${S} * (2 - var(--beam-spike-${u})) * var(--beam-spike-mul, 1)) calc(${U} * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${m[0].color1}, ${m[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${u}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${m[1].color1}, ${m[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${w} * (2 - var(--beam-spike2-${u})) * var(--beam-spike-mul, 1)) calc(${G} * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${m[2].color1}, ${m[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${u}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${m[3].color1}, ${m[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${X} * (2 - var(--beam-spike-${u})) * var(--beam-spike-mul, 1)) calc(${Q} * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${m[4].color1}, ${m[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(21px * var(--beam-spike-${u})) calc(15px * var(--beam-spike2-${u})) at calc(var(--beam-x-${u}) * 100%) calc(100% + 1px), ${q} 0%, ${W} 20%, ${_} 50%, transparent 100%),
       radial-gradient(ellipse calc(42px * var(--beam-w-${u})) calc(40px * var(--beam-h-${u})) at calc(var(--beam-x-${u}) * 100%) 100%, ${E} 0%, ${L} 25%, ${k} 55%, transparent 80%)`;
  {
    const K = f ? Xn(c.primary, 0.11) : du(c.primary, 0.85), V = f ? Xn(c.secondary, 0.09) : du(c.secondary, 0.7);
    return `radial-gradient(ellipse calc(${v} * var(--beam-spike-${u}) * var(--beam-spike-mul, 1)) calc(${$} * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 8% calc(100% - 2px), ${p}, ${K} 30%, transparent 88%),
       radial-gradient(ellipse calc(10px * var(--beam-spike2-${u}) * var(--beam-spike-mul, 1)) calc(35px * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 22% calc(100% - 4px), ${z}, ${V} 50%, transparent 95%),
       radial-gradient(ellipse calc(${S} * (2 - var(--beam-spike-${u})) * var(--beam-spike-mul, 1)) calc(${U} * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 36% calc(100% - 3px), ${m[0].color1}, ${m[0].color2} 40%, transparent 90%),
       radial-gradient(ellipse calc(14px * var(--beam-spike2-${u}) * var(--beam-spike-mul, 1)) calc(28px * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 50% calc(100% - 2px), ${m[1].color1}, ${m[1].color2} 55%, transparent 96%),
       radial-gradient(ellipse calc(${w} * (2 - var(--beam-spike2-${u})) * var(--beam-spike-mul, 1)) calc(${G} * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 64% calc(100% - 4px), ${m[2].color1}, ${m[2].color2} 35%, transparent 89%),
       radial-gradient(ellipse calc(7px * var(--beam-spike-${u}) * var(--beam-spike-mul, 1)) calc(45px * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 78% calc(100% - 2px), ${m[3].color1}, ${m[3].color2} 48%, transparent 94%),
       radial-gradient(ellipse calc(${j} * (2 - var(--beam-spike-${u})) * var(--beam-spike-mul, 1)) calc(${Q} * var(--beam-h-${u}) * var(--beam-spike-mul, 1)) at 92% calc(100% - 3px), ${m[4].color1}, ${m[4].color2} 42%, transparent 91%),
       radial-gradient(ellipse calc(50px * var(--beam-w-${u})) calc(32px * var(--beam-h-${u})) at calc(var(--beam-x-${u}) * 100%) calc(100%), rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.18) 30%, rgba(0, 0, 0, 0.03) 60%, transparent 85%)`;
  }
}
const Nb = [
  { region: 1, quad: "tl" },
  { region: 2, quad: "tl" },
  { region: 3, quad: "bl" },
  { region: 1, quad: "bl" },
  { region: 2, quad: "br" },
  { region: 3, quad: "br" },
  { region: 1, quad: "tr" },
  { region: 2, quad: "tr" },
  { region: 3, quad: "tr" }
], tv = [
  [65, 35],
  [55, 30],
  [35, 65],
  [15, 30],
  [173, 28],
  [80, 22],
  [69, 28],
  [22, 38],
  [47, 44]
], ev = [
  { ci: 0, region: 1, quad: "tl", w: 84, h: 48 },
  { ci: 1, region: 2, quad: "tl", w: 72, h: 42 },
  { ci: 2, region: 3, quad: "bl", w: 48, h: 84 },
  { ci: 4, region: 2, quad: "br", w: 216, h: 38 },
  { ci: 5, region: 3, quad: "br", w: 102, h: 31 },
  { ci: 6, region: 1, quad: "tr", w: 89, h: 38 },
  { ci: 8, region: 3, quad: "tr", w: 62, h: 58 }
], Qh = [
  { ci: 0, region: 1, quad: "tl", w: 80, h: 19, x: "27%", y: "0%" },
  { ci: 6, region: 2, quad: "tr", w: 74, h: 11, x: "73%", y: "-1%" },
  { ci: 7, region: 3, quad: "tr", w: 15, h: 44, x: "100%", y: "33%" },
  { ci: 8, region: 1, quad: "br", w: 19, h: 38, x: "101%", y: "72%" },
  { ci: 4, region: 2, quad: "br", w: 84, h: 13, x: "67%", y: "100%" },
  { ci: 1, region: 3, quad: "bl", w: 60, h: 21, x: "24%", y: "101%" },
  { ci: 2, region: 1, quad: "bl", w: 17, h: 40, x: "0%", y: "60%" },
  { ci: 3, region: 2, quad: "tl", w: 13, h: 32, x: "-1%", y: "28%" }
], av = [
  { ci: 0, region: 1, quad: "tl", w: 110, h: 30, x: "27%", y: "3%" },
  { ci: 6, region: 2, quad: "tr", w: 100, h: 20, x: "73%", y: "1%" },
  { ci: 7, region: 3, quad: "tr", w: 26, h: 62, x: "100%", y: "33%" },
  { ci: 8, region: 1, quad: "br", w: 30, h: 56, x: "101%", y: "72%" },
  { ci: 4, region: 2, quad: "br", w: 120, h: 22, x: "67%", y: "99%" },
  { ci: 1, region: 3, quad: "bl", w: 88, h: 32, x: "24%", y: "99%" },
  { ci: 2, region: 1, quad: "bl", w: 28, h: 58, x: "0%", y: "60%" }
];
function lv(r, i, u) {
  const c = r.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  return `rgba(${c ? `${c[1]}, ${c[2]}, ${c[3]}` : "255, 255, 255"}, var(--bop-${i}-${u}))`;
}
function If(r, i, u, c, d, f, h, p) {
  return `radial-gradient(ellipse calc(${i}px * var(--bw${c}-${p}) * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${u}px * var(--bh${c}-${p}) * var(--bgh-${p}) * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at calc(${f} + var(--bx${c}-${p})) calc(${h} + var(--by${c}-${p})), ${lv(r, d, p)}, transparent)`;
}
function nv(r, i) {
  return Fn[r].border.map((u, c) => {
    const { region: d, quad: f } = Nb[c], [h, p] = u.pos.split(" "), [g, z] = u.size.split(" ").map(parseFloat);
    return If(u.color, g, z, d, f, h, p, i);
  }).join(`,
    `);
}
function iv(r, i, u) {
  const c = Fn[r].border.map((p, g) => {
    const { region: z, quad: y } = Nb[g], [m, v] = p.pos.split(" "), [S, w] = tv[g];
    return If(p.color, S, w, z, y, m, v, i);
  }), d = u ? "255, 255, 255" : "0, 0, 0", f = u ? 0.18 : 0.08, h = [
    ["0%", "0%", "tl"],
    ["100%", "0%", "tr"],
    ["0%", "100%", "bl"],
    ["100%", "100%", "br"]
  ].map(
    ([p, g, z]) => `radial-gradient(ellipse 60px 60px at ${p} ${g}, rgba(${d}, calc(${f} * var(--bop-${z}-${i}))), transparent 70%)`
  );
  return [...c, ...h].join(`,
    `);
}
function Wh(r, i, u) {
  const c = Fn[i].border;
  return r.map((d) => {
    const f = c[d.ci], [h, p] = f.pos.split(" ");
    return If(f.color, d.w, d.h, d.region, d.quad, d.x ?? h, d.y ?? p, u);
  }).join(`,
    `);
}
function Yb(r, i, u) {
  const c = Fn[i].border, d = +u.toFixed(3);
  return r.map((f) => {
    const h = c[f.ci], [p, g] = h.pos.split(" "), z = f.x ?? p, y = f.y ?? g, m = h.color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/), v = m ? `${m[1]}, ${m[2]}, ${m[3]}` : "255, 255, 255";
    return `radial-gradient(ellipse calc(${f.w}px * var(--pulse-glow-sx, 1) * var(--pulse-glow-boost, 1)) calc(${f.h}px * var(--pulse-glow-sy, 1) * var(--pulse-glow-boost, 1)) at ${z} ${y}, rgba(${v}, ${d}), transparent)`;
  }).join(`,
    `);
}
function Er(r) {
  return `
[data-beam="${r}"][data-paused],
[data-beam="${r}"][data-paused]::after,
[data-beam="${r}"][data-paused]::before,
[data-beam="${r}"][data-paused] [data-beam-bloom] {
  animation-play-state: paused !important;
}`;
}
function _b(r) {
  const i = ["bw1", "bh1", "bw2", "bh2", "bw3", "bh3", "bgh", "bop-tl", "bop-tr", "bop-bl", "bop-br"], u = ["bx1", "by1", "bx2", "by2", "bx3", "by3"], c = i.map(
    (f) => `@property --${f}-${r} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}`
  ).join(`

`), d = u.map(
    (f) => `@property --${f}-${r} {
  syntax: "<length>";
  initial-value: 0px;
  inherits: true;
}`
  ).join(`

`);
  return `${c}

${d}

@property --beam-opacity-${r} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-hue-${r} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}`;
}
function Pf(r, i, u) {
  const c = i === "dark", d = u / 2.3;
  return r === "pulse-inner" ? {
    sp: 0.28,
    dr: c ? 33 : 40,
    op: c ? 0.48 : 0.45,
    gh: c ? 0.34 : 0.22,
    bs: (c ? 1.9 : 2.6) * d,
    ss: (c ? 2.6 : 4.6) * d,
    ghs: (c ? 2.4 : 5.5) * d,
    // Full hue revolution period (seconds) — colors continuously cycle.
    huePeriod: 16
  } : {
    sp: c ? 0.28 : 0.36,
    dr: c ? 14 : 19,
    op: c ? 0.46 : 0,
    gh: c ? 0.16 : 0.58,
    bs: (c ? 2.3 : 3.7) * d,
    ss: (c ? 6.4 : 4.6) * d,
    ghs: (c ? 2.4 : 3.8) * d,
    // Full hue revolution period (seconds) — colors continuously cycle.
    huePeriod: 14
  };
}
function ov(r, i) {
  const { sp: u, dr: c, op: d, gh: f, bs: h, ss: p, ghs: g } = i;
  return [
    { prop: `--bw1-${r}`, a: 1 - u, b: 1 + u * 1.1, period: p * 0.9, delay: 0, unit: "" },
    { prop: `--bh1-${r}`, a: 1 + u * 0.9, b: 1 - u * 0.85, period: p * 1.26, delay: 0, unit: "" },
    { prop: `--bx1-${r}`, a: -c, b: c * 0.9, period: h * 1.6, delay: 0, unit: "px" },
    { prop: `--by1-${r}`, a: c * 0.55, b: -c * 0.7, period: h * 1.6, delay: 0, unit: "px" },
    { prop: `--bw2-${r}`, a: 1 + u, b: 1 - u * 0.85, period: p * 1.1, delay: 0, unit: "" },
    { prop: `--bh2-${r}`, a: 1 - u * 0.8, b: 1 + u * 1.05, period: p * 0.81, delay: 0, unit: "" },
    { prop: `--bx2-${r}`, a: c * 0.8, b: -c * 0.9, period: h * 1.88, delay: 0, unit: "px" },
    { prop: `--by2-${r}`, a: -c, b: c * 0.65, period: h * 1.88, delay: 0, unit: "px" },
    { prop: `--bw3-${r}`, a: 1 - u * 0.6, b: 1 + u * 1.15, period: p * 0.98, delay: 0, unit: "" },
    { prop: `--bh3-${r}`, a: 1 + u * 0.75, b: 1 - u, period: p * 1.4, delay: 0, unit: "" },
    { prop: `--bx3-${r}`, a: -c * 0.6, b: c, period: h * 1.45, delay: 0, unit: "px" },
    { prop: `--by3-${r}`, a: -c * 0.85, b: c * 0.45, period: h * 1.45, delay: 0, unit: "px" },
    { prop: `--bgh-${r}`, a: 1 - f, b: 1 + f, period: g, delay: 0, unit: "" },
    { prop: `--bop-tl-${r}`, a: 1 - d, b: 1, period: h, delay: 0, unit: "" },
    { prop: `--bop-tr-${r}`, a: 1 - d, b: 1, period: h * 1.32, delay: h * 0.28, unit: "" },
    { prop: `--bop-bl-${r}`, a: 1 - d, b: 1, period: h * 0.84, delay: h * 0.55, unit: "" },
    { prop: `--bop-br-${r}`, a: 1 - d, b: 1, period: h * 1.58, delay: h * 0.83, unit: "" }
  ];
}
function rv(r, i, u, c, d, f) {
  if (r !== "pulse-inner" && r !== "pulse-outside") return null;
  const h = Pf(r, i, u);
  return {
    oscillators: ov(f, h),
    // Pulse colors continuously rotate a full hue circle so the palette is never
    // pinned to fixed edges (no more "always red top-right / green left").
    hue: d ? null : { prop: `--beam-hue-${f}`, range: 360, period: h.huePeriod, continuous: !0 }
  };
}
function Nu(r, i, u) {
  return `  animation: ${i}-${r} ${u}s ease forwards;`;
}
function rn(r, i = 1) {
  return Math.max(0.5, Math.round(r * i * 100) / 100);
}
function uv(r) {
  const { size: i } = r;
  return i === "line" ? hv(r) : i === "sm" ? cv(r) : i === "pulse-inner" ? fv(r) : i === "pulse-outside" ? dv(r) : sv(r);
}
function cv(r) {
  const {
    id: i,
    borderRadius: u,
    borderWidth: c,
    duration: d,
    strokeOpacity: f,
    innerOpacity: h,
    bloomOpacity: p,
    innerShadow: g,
    colorVariant: z,
    staticColors: y,
    brightness: m,
    saturation: v,
    hueRange: S,
    theme: w,
    glowSize: X = 1
  } = r, $ = Math.max(0, u - c), U = z === "mono" ? 0.5 : 1, G = f * U, Q = h * U, j = p * U, q = y ? "" : `animation: beam-hue-shift-${i} 12s ease-in-out infinite;`, W = y ? "" : `
@keyframes beam-hue-shift-${i} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${S}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${S}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${S}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
}`, _ = w === "dark", E = _ ? `conic-gradient(
        from var(--beam-angle-${i}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )` : `conic-gradient(
        from var(--beam-angle-${i}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`, L = k3(z), k = G3(z), K = _ ? `conic-gradient(
        from var(--beam-angle-${i}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )` : `conic-gradient(
        from var(--beam-angle-${i}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`, V = `conic-gradient(
    from var(--beam-angle-${i}),
    transparent 0%, transparent 22%,
    rgba(255, 255, 255, 0.12) 28%, rgba(255, 255, 255, 0.4) 36%,
    white 46%, white 82%,
    rgba(255, 255, 255, 0.4) 88%, rgba(255, 255, 255, 0.12) 94%,
    transparent 97%, transparent 100%
  )`;
  return `
@property --beam-angle-${i} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${i} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${i}"] {
  position: relative;
  border-radius: ${u}px;
  overflow: hidden;
}

[data-beam="${i}"][data-active] {
  animation:
    beam-spin-${i} ${d}s linear infinite,
    beam-fade-in-${i} 0.6s ease forwards;
}

[data-beam="${i}"][data-fading] {
  animation:
    beam-spin-${i} ${d}s linear infinite,
    beam-fade-out-${i} 0.5s ease forwards;
}

[data-beam="${i}"][data-active]::after,
[data-beam="${i}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  padding: ${c}px;
  clip-path: inset(0 round ${u}px);
  background: ${E},${L};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${i}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${i}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${i}) * ${G.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${q}
}

[data-beam="${i}"][data-active]::before,
[data-beam="${i}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  clip-path: inset(0 round ${u}px);
  background: ${k};
  box-shadow: inset 0 0 5px 1px ${g};
  -webkit-mask-image: ${V};
  -webkit-mask-composite: source-over;
  mask-image: ${V};
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${i}) * ${Q.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${q}
}

[data-beam="${i}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  clip-path: inset(0 round ${u}px);
  background: ${K};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${c}px;
  filter: blur(${rn(8, X)}px) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${i}"][data-active] [data-beam-bloom],
[data-beam="${i}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${i}) * ${j.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${i} {
  to { --beam-angle-${i}: 360deg; }
}

@keyframes beam-fade-in-${i} {
  to { --beam-opacity-${i}: 1; }
}

@keyframes beam-fade-out-${i} {
  from { --beam-opacity-${i}: 1; }
  to { --beam-opacity-${i}: 0; }
}
${W}
${Er(i)}
`;
}
function sv(r) {
  const {
    id: i,
    borderRadius: u,
    borderWidth: c,
    duration: d,
    strokeOpacity: f,
    innerOpacity: h,
    bloomOpacity: p,
    innerShadow: g,
    colorVariant: z,
    staticColors: y,
    brightness: m,
    saturation: v,
    hueRange: S,
    theme: w,
    glowSize: X = 1
  } = r, $ = Math.max(0, u - c), U = z === "mono" ? 0.5 : 1, G = f * U, Q = h * U, j = p * U, q = y ? "" : `animation: beam-hue-shift-${i} 12s ease-in-out infinite;`, W = y ? "" : `
@keyframes beam-hue-shift-${i} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${S}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${S}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${S}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
}`, _ = w === "dark", E = _ ? `conic-gradient(
        from var(--beam-angle-${i}),
        transparent 0%, transparent 54%,
        rgba(255, 255, 255, 0.1) 57%,
        rgba(255, 255, 255, 0.3) 60%,
        rgba(255, 255, 255, 0.6) 63%,
        rgba(255, 255, 255, 0.75) 66%,
        rgba(255, 255, 255, 0.6) 69%,
        rgba(255, 255, 255, 0.3) 72%,
        rgba(255, 255, 255, 0.1) 75%,
        transparent 78%, transparent 100%
      )` : `conic-gradient(
        from var(--beam-angle-${i}),
        transparent 0%, transparent 54%,
        rgba(0, 0, 0, 0.08) 57%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.4) 63%,
        rgba(0, 0, 0, 0.55) 66%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.2) 72%,
        rgba(0, 0, 0, 0.08) 75%,
        transparent 78%, transparent 100%
      )`, L = V3(z), k = Z3(z), K = _ ? `conic-gradient(
        from var(--beam-angle-${i}),
        transparent 0%, transparent 58%,
        rgba(255, 255, 255, 0.03) 62%,
        rgba(255, 255, 255, 0.08) 65%,
        rgba(255, 255, 255, 0.2) 67%,
        rgba(255, 255, 255, 0.45) 69%,
        rgba(255, 255, 255, 0.85) 70%,
        rgba(255, 255, 255, 0.85) 70.5%,
        rgba(255, 255, 255, 0.45) 71.5%,
        rgba(255, 255, 255, 0.2) 73%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.03) 78%,
        transparent 82%
      )` : `conic-gradient(
        from var(--beam-angle-${i}),
        transparent 0%, transparent 58%,
        rgba(0, 0, 0, 0.02) 62%,
        rgba(0, 0, 0, 0.08) 65%,
        rgba(0, 0, 0, 0.2) 67%,
        rgba(0, 0, 0, 0.4) 69%,
        rgba(0, 0, 0, 0.6) 70%,
        rgba(0, 0, 0, 0.6) 70.5%,
        rgba(0, 0, 0, 0.4) 71.5%,
        rgba(0, 0, 0, 0.2) 73%,
        rgba(0, 0, 0, 0.08) 75%,
        rgba(0, 0, 0, 0.02) 78%,
        transparent 82%
      )`;
  return `
@property --beam-angle-${i} {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: true;
}

@property --beam-opacity-${i} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${i}"] {
  position: relative;
  border-radius: ${u}px;
  overflow: hidden;
}

[data-beam="${i}"][data-active] {
  animation:
    beam-spin-${i} ${d}s linear infinite,
    beam-fade-in-${i} 0.6s ease forwards;
}

[data-beam="${i}"][data-fading] {
  animation:
    beam-spin-${i} ${d}s linear infinite,
    beam-fade-out-${i} 0.5s ease forwards;
}

[data-beam="${i}"][data-active]::after,
[data-beam="${i}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  padding: ${c}px;
  clip-path: inset(0 round ${u}px);
  background: ${E},${L};
  -webkit-mask:
    conic-gradient(
      from var(--beam-angle-${i}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    conic-gradient(
      from var(--beam-angle-${i}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${i}) * ${G.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${q}
}

[data-beam="${i}"][data-active]::before,
[data-beam="${i}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  background: ${k};
  box-shadow: inset 0 0 9px 1px ${g};
  -webkit-mask-image:
    conic-gradient(
      from var(--beam-angle-${i}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    conic-gradient(
      from var(--beam-angle-${i}),
      transparent 0%, transparent 30%,
      rgba(255, 255, 255, 0.1) 36%, rgba(255, 255, 255, 0.35) 44%,
      white 52%, white 80%,
      rgba(255, 255, 255, 0.35) 86%, rgba(255, 255, 255, 0.1) 92%,
      transparent 95%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${i}) * ${Q.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${u}px);
  ${q}
}

[data-beam="${i}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  clip-path: inset(0 round ${u}px);
  background: ${K};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${c}px;
  filter: blur(${rn(8, X)}px) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)});
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${i}"][data-active] [data-beam-bloom],
[data-beam="${i}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${i}) * ${j.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
}

@keyframes beam-spin-${i} {
  to { --beam-angle-${i}: 360deg; }
}

@keyframes beam-fade-in-${i} {
  to { --beam-opacity-${i}: 1; }
}

@keyframes beam-fade-out-${i} {
  from { --beam-opacity-${i}: 1; }
  to { --beam-opacity-${i}: 0; }
}
${W}
${Er(i)}
`;
}
function fv(r) {
  const {
    id: i,
    borderRadius: u,
    borderWidth: c,
    duration: d,
    strokeOpacity: f,
    innerOpacity: h,
    bloomOpacity: p,
    colorVariant: g,
    staticColors: z,
    brightness: y,
    saturation: m,
    hueRange: v,
    theme: S,
    glowSize: w = 1
  } = r, X = S === "dark", $ = g === "mono" ? 0.5 : 1, U = (f * $).toFixed(2), G = (h * $).toFixed(2), Q = (p * $).toFixed(2), { op: j } = Pf("pulse-inner", S, d), q = rn(8, w), W = y.toFixed(2), _ = m.toFixed(2), E = z ? `filter: brightness(${W}) saturate(${_});` : `filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${i}))) brightness(${W}) saturate(${_});`, L = z ? `filter: blur(${q}px) brightness(${W}) saturate(${_});` : `filter: blur(${q}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${i}))) brightness(${W}) saturate(${_});`, k = nv(g, i), K = iv(g, i, X), V = Yb(ev, g, 1 - j * 0.5);
  return `
${_b(i)}

[data-beam="${i}"] {
  position: relative;
  border-radius: ${u}px;
  overflow: hidden;
  isolation: isolate;
}

[data-beam="${i}"][data-active] {
${Nu(i, "beam-fade-in", 0.6)}
}

[data-beam="${i}"][data-fading] {
${Nu(i, "beam-fade-out", 0.5)}
}

[data-beam="${i}"][data-active]::after,
[data-beam="${i}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  padding: ${c}px;
  clip-path: inset(0 round ${u}px);
  background: ${k};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${i}) * ${U} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${E}
}

[data-beam="${i}"][data-active]::before,
[data-beam="${i}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  clip-path: inset(0 round ${u}px);
  background: ${K};
  -webkit-mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-over;
  mask-image:
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: add;
  pointer-events: none;
  z-index: 1;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${i}) * ${G} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${E}
}

[data-beam="${i}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  clip-path: inset(0 round ${u}px);
  background: ${V};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: ${c}px;
  pointer-events: none;
  z-index: 3;
  will-change: opacity;
  opacity: 0;
}

[data-beam="${i}"][data-active] [data-beam-bloom],
[data-beam="${i}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${i}) * ${Q} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${L}
}

@keyframes beam-fade-in-${i} { to { --beam-opacity-${i}: 1; } }
@keyframes beam-fade-out-${i} { from { --beam-opacity-${i}: 1; } to { --beam-opacity-${i}: 0; } }
${Er(i)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${i}"][data-active],
  [data-beam="${i}"][data-fading],
  [data-beam="${i}"][data-active]::after,
  [data-beam="${i}"][data-fading]::after,
  [data-beam="${i}"][data-active]::before,
  [data-beam="${i}"][data-fading]::before,
  [data-beam="${i}"][data-active] [data-beam-bloom],
  [data-beam="${i}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`;
}
function dv(r) {
  const {
    id: i,
    borderRadius: u,
    duration: c,
    strokeOpacity: d,
    innerOpacity: f,
    bloomOpacity: h,
    colorVariant: p,
    staticColors: g,
    brightness: z,
    saturation: y,
    hueRange: m,
    theme: v,
    hairlineOpacity: S = 0,
    glowSize: w = 1
  } = r, X = v === "dark", $ = p === "mono" ? 0.5 : 1, U = (d * $).toFixed(2), G = (f * $).toFixed(2), Q = (h * $).toFixed(2), j = X ? "70, 70, 70" : "0, 0, 0", q = S.toFixed(2), W = `linear-gradient(rgba(${j}, ${q}), rgba(${j}, ${q}))`, { op: _ } = Pf("pulse-outside", v, c), E = 0.95, L = 0.9, k = rn(X ? 3 : 6, w), K = rn(X ? 22.5 : 15, w), V = z.toFixed(2), rt = y.toFixed(2), nt = g ? `filter: brightness(${V}) saturate(${rt});` : `filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${i}))) brightness(${V}) saturate(${rt});`, it = `brightness(var(--beam-glow-brightness, ${V})) saturate(var(--beam-glow-saturate, ${rt}))`, R = g ? `filter: blur(var(--beam-core-blur, ${k}px)) ${it};` : `filter: blur(var(--beam-core-blur, ${k}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${i}))) ${it};`, et = g ? `filter: blur(var(--beam-bloom-blur, ${K}px)) ${it};` : `filter: blur(var(--beam-bloom-blur, ${K}px)) hue-rotate(calc(var(--beam-hue-base, 0deg) + var(--beam-hue-${i}))) ${it};`, Z = Wh(Qh, p, i), ot = Wh(Qh, p, i), F = Yb(av, p, 1 - _ * 0.5), ct = S > 0 ? `${Z},
    ${W}` : Z;
  return `
${_b(i)}

[data-beam="${i}"] {
  position: relative;
  border-radius: ${u}px;
  overflow: visible;
  isolation: isolate;
}

[data-beam="${i}"][data-active] {
${Nu(i, "beam-fade-in", 0.6)}
}

[data-beam="${i}"][data-fading] {
${Nu(i, "beam-fade-out", 0.5)}
}
${S > 0 ? `
/* Idle hairline — painted above the (opaque) child in the inner 1px edge ring so
   it overlaps a standard inset component border exactly. */
[data-beam="${i}"]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  padding: 1px;
  clip-path: inset(0 round ${u}px);
  background: ${W};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
}
` : ""}
[data-beam="${i}"][data-active]::after,
[data-beam="${i}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  padding: 1px;
  clip-path: inset(0 round ${u}px);
  background: ${ct};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  z-index: 2;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${i}) * ${U} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${nt}
}

[data-beam="${i}"][data-active]::before,
[data-beam="${i}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: -10px;
  z-index: -1;
  border-radius: ${u + 10}px;
  background: ${ot};
  transform: scale(${E}, ${L});
  pointer-events: none;
  will-change: opacity, filter;
  opacity: calc(var(--beam-opacity-${i}) * ${G} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  ${R}
}

[data-beam="${i}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: -30px;
  z-index: -1;
  border-radius: ${u + 30}px;
  background: ${F};
  transform: scale(${E}, ${L});
  pointer-events: none;
  will-change: transform;
  opacity: 0;
}

[data-beam="${i}"][data-active] [data-beam-bloom],
[data-beam="${i}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${i}) * ${Q} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${et}
}

@keyframes beam-fade-in-${i} { to { --beam-opacity-${i}: 1; } }
@keyframes beam-fade-out-${i} { from { --beam-opacity-${i}: 1; } to { --beam-opacity-${i}: 0; } }
${Er(i)}

@media (prefers-reduced-motion: reduce) {
  [data-beam="${i}"][data-active],
  [data-beam="${i}"][data-fading],
  [data-beam="${i}"][data-active]::after,
  [data-beam="${i}"][data-fading]::after,
  [data-beam="${i}"][data-active]::before,
  [data-beam="${i}"][data-fading]::before,
  [data-beam="${i}"][data-active] [data-beam-bloom],
  [data-beam="${i}"][data-fading] [data-beam-bloom] {
    animation: none !important;
  }
}
`;
}
function hv(r) {
  const {
    id: i,
    borderRadius: u,
    borderWidth: c,
    duration: d,
    strokeOpacity: f,
    innerOpacity: h,
    bloomOpacity: p,
    innerShadow: g,
    colorVariant: z,
    staticColors: y,
    brightness: m,
    saturation: v,
    hueRange: S,
    theme: w,
    glowSize: X = 1
  } = r, $ = Math.max(0, u - c), U = w === "dark", G = f, Q = h, j = p, q = y ? "" : `animation: beam-hue-shift-${i} 12s ease-in-out infinite;`, W = y ? "" : `animation: beam-hue-shift-bloom-${i} 8s ease-in-out infinite;`, _ = y ? "" : `
@keyframes beam-hue-shift-${i} {
  0% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${S}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
  50% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) + ${S}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
  100% { filter: hue-rotate(calc(var(--beam-hue-base, 0deg) - ${S}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
}

@keyframes beam-hue-shift-bloom-${i} {
  0% { filter: blur(${rn(8, X)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${S + 10}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
  50% { filter: blur(${rn(8, X)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) + ${S + 10}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
  100% { filter: blur(${rn(8, X)}px) hue-rotate(calc(var(--beam-hue-base, 0deg) - ${S + 10}deg)) brightness(${m.toFixed(2)}) saturate(${v.toFixed(2)}); }
}`, E = U ? `radial-gradient(
        ellipse calc(24px * var(--beam-w-${i})) calc(28px * var(--beam-h-${i})) at calc(var(--beam-x-${i}) * 100%) calc(100% + 2px),
        rgba(255, 255, 255, 0.38) 0%,
        rgba(255, 255, 255, 0.12) 30%,
        transparent 65%
      )` : `radial-gradient(
        ellipse calc(35px * var(--beam-w-${i})) calc(28px * var(--beam-h-${i})) at calc(var(--beam-x-${i}) * 100%) calc(100% + 2px),
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.25) 35%,
        transparent 70%
      )`, L = K3(z, U, i), k = F3(z, i), K = P3(z, U, i), V = z === "mono" ? "filter: blur(6px);" : "";
  return `
@property --beam-x-${i} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

@property --beam-w-${i} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-h-${i} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike-${i} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-spike2-${i} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-edge-${i} {
  syntax: "<number>";
  initial-value: 1;
  inherits: true;
}

@property --beam-opacity-${i} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-beam="${i}"] {
  position: relative;
  border-radius: ${u}px;
  overflow: hidden;
}

[data-beam="${i}"][data-active] {
  animation:
    beam-travel-${i} ${d}s linear infinite,
    beam-edge-fade-${i} ${d}s linear infinite,
    beam-breathe-${i} ${(d * 1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${i} ${(d * 1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${i} ${(d * 1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-in-${i} 0.6s ease forwards;
}

[data-beam="${i}"][data-fading] {
  animation:
    beam-travel-${i} ${d}s linear infinite,
    beam-edge-fade-${i} ${d}s linear infinite,
    beam-breathe-${i} ${(d * 1.3).toFixed(1)}s ease-in-out infinite,
    beam-spike-${i} ${(d * 1.33).toFixed(1)}s ease-in-out infinite,
    beam-spike2-${i} ${(d * 1.7).toFixed(1)}s ease-in-out infinite,
    beam-fade-out-${i} 0.5s ease forwards;
}

[data-beam="${i}"][data-active]::after,
[data-beam="${i}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  padding: ${c}px;
  clip-path: inset(0 round ${u}px);
  background: ${E}, ${L};
  -webkit-mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${i})) calc(60px * var(--beam-h-${i})) at calc(var(--beam-x-${i}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${i})) calc(60px * var(--beam-h-${i})) at calc(var(--beam-x-${i}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  z-index: 2;
  opacity: calc(var(--beam-opacity-${i}) * var(--beam-edge-${i}) * ${G.toFixed(2)} * var(--beam-stroke-opacity, 1) * var(--beam-strength, 1));
  ${q}
}

[data-beam="${i}"][data-active]::before,
[data-beam="${i}"][data-fading]::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${u}px;
  background: ${k};
  box-shadow: inset 0 0 9px 1px ${g};
  -webkit-mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${i})) calc(60px * var(--beam-h-${i})) at calc(var(--beam-x-${i}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    radial-gradient(
      ellipse calc(78px * var(--beam-w-${i})) calc(60px * var(--beam-h-${i})) at calc(var(--beam-x-${i}) * 100%) 100%,
      white 0%, rgba(255, 255, 255, 0.5) 45%, transparent 100%
    ),
    linear-gradient(white, transparent 28px, transparent calc(100% - 28px), white),
    linear-gradient(to right, white, transparent 28px, transparent calc(100% - 28px), white);
  mask-composite: intersect, add;
  pointer-events: none;
  z-index: 1;
  opacity: calc(var(--beam-opacity-${i}) * var(--beam-edge-${i}) * ${Q.toFixed(2)} * var(--beam-inner-opacity, 1) * var(--beam-strength, 1));
  clip-path: inset(0 round ${u}px);
  ${q}
}

[data-beam="${i}"] [data-beam-bloom] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${$}px;
  clip-path: inset(0 round ${u}px);
  padding: 0;
  -webkit-mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${i})) calc(110px * var(--beam-h-${i})) at calc(var(--beam-x-${i}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  -webkit-mask-composite: source-over;
  mask: radial-gradient(
    ellipse calc(84px * var(--beam-w-${i})) calc(110px * var(--beam-h-${i})) at calc(var(--beam-x-${i}) * 100%) 100%,
    white 0%, rgba(255, 255, 255, 0.5) 35%, transparent 100%
  );
  mask-composite: add;
  background: ${K};
  ${V}
  pointer-events: none;
  z-index: 3;
  opacity: 0;
}

[data-beam="${i}"][data-active] [data-beam-bloom],
[data-beam="${i}"][data-fading] [data-beam-bloom] {
  display: block;
  opacity: calc(var(--beam-opacity-${i}) * var(--beam-edge-${i}) * ${j.toFixed(2)} * var(--beam-bloom-opacity, 1) * var(--beam-strength, 1));
  ${W}
}

@keyframes beam-travel-${i} {
  0%   { --beam-x-${i}: 0.06;  --beam-w-${i}: 0.5; }
  10%  { --beam-x-${i}: 0.15;  --beam-w-${i}: 0.8; }
  20%  { --beam-x-${i}: 0.25;  --beam-w-${i}: 1.1; }
  30%  { --beam-x-${i}: 0.35;  --beam-w-${i}: 1.3; }
  40%  { --beam-x-${i}: 0.44;  --beam-w-${i}: 1.45; }
  50%  { --beam-x-${i}: 0.5;   --beam-w-${i}: 1.5; }
  60%  { --beam-x-${i}: 0.56;  --beam-w-${i}: 1.45; }
  70%  { --beam-x-${i}: 0.65;  --beam-w-${i}: 1.3; }
  80%  { --beam-x-${i}: 0.75;  --beam-w-${i}: 1.1; }
  90%  { --beam-x-${i}: 0.85;  --beam-w-${i}: 0.8; }
  100% { --beam-x-${i}: 0.94;  --beam-w-${i}: 0.5; }
}

@keyframes beam-edge-fade-${i} {
  0%    { --beam-edge-${i}: 0; }
  12.5% { --beam-edge-${i}: 0; }
  32.5% { --beam-edge-${i}: 1; }
  67.5% { --beam-edge-${i}: 1; }
  87.5% { --beam-edge-${i}: 0; }
  100%  { --beam-edge-${i}: 0; }
}

@keyframes beam-breathe-${i} {
  0%, 100% { --beam-h-${i}: 0.8; }
  25%      { --beam-h-${i}: 1.25; }
  55%      { --beam-h-${i}: 0.85; }
  80%      { --beam-h-${i}: 1.3; }
}

@keyframes beam-spike-${i} {
  0%   { --beam-spike-${i}: 0.8; }
  25%  { --beam-spike-${i}: 1.3; }
  50%  { --beam-spike-${i}: 0.9; }
  75%  { --beam-spike-${i}: 1.4; }
  100% { --beam-spike-${i}: 0.8; }
}

@keyframes beam-spike2-${i} {
  0%   { --beam-spike2-${i}: 1.2; }
  25%  { --beam-spike2-${i}: 0.7; }
  50%  { --beam-spike2-${i}: 1.4; }
  75%  { --beam-spike2-${i}: 0.8; }
  100% { --beam-spike2-${i}: 1.2; }
}

@keyframes beam-fade-in-${i} {
  to { --beam-opacity-${i}: 1; }
}

@keyframes beam-fade-out-${i} {
  from { --beam-opacity-${i}: 1; }
  to { --beam-opacity-${i}: 0; }
}
${_}
${Er(i)}
`;
}
const Yu = /* @__PURE__ */ new Set();
let lo = null, Xf = 0;
const bv = 1e3 / 30 - 2, gv = Math.PI * 2;
function Kh(r) {
  return (1 - Math.cos(gv * r)) / 2;
}
function Db(r) {
  if (lo = requestAnimationFrame(Db), r - Xf < bv) return;
  Xf = r;
  const i = r / 1e3;
  Yu.forEach(({ el: u, config: c }) => {
    for (const d of c.oscillators) {
      const f = (i - d.delay) / d.period, h = d.a + (d.b - d.a) * Kh(f);
      u.style.setProperty(
        d.prop,
        d.unit === "px" ? `${h.toFixed(2)}px` : h.toFixed(4)
      );
    }
    if (c.hue) {
      const { prop: d, range: f, period: h, continuous: p } = c.hue, g = p ? i / h % 1 * f : -f + 2 * f * Kh(i / h);
      u.style.setProperty(d, `${g.toFixed(2)}deg`);
    }
  });
}
function mv() {
  lo == null && (Xf = 0, lo = requestAnimationFrame(Db));
}
function pv() {
  Yu.size === 0 && lo != null && (cancelAnimationFrame(lo), lo = null);
}
function vv(r, i) {
  const u = { el: r, config: i };
  return Yu.add(u), mv(), () => {
    Yu.delete(u), pv();
  };
}
function yv() {
  const [r, i] = gt.useState(() => typeof window > "u" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  return gt.useEffect(() => {
    if (typeof window > "u") return;
    const u = window.matchMedia("(prefers-color-scheme: dark)"), c = (d) => {
      i(d.matches ? "dark" : "light");
    };
    return u.addEventListener("change", c), () => u.removeEventListener("change", c);
  }, []), r;
}
function xv(r, i) {
  return r === "auto" ? i : r;
}
const Rb = gt.forwardRef(
  function({
    children: r,
    size: i = "md",
    colorVariant: u = "colorful",
    theme: c = "dark",
    staticColors: d = !1,
    duration: f,
    active: h = !0,
    borderRadius: p,
    brightness: g,
    saturation: z,
    hueRange: y = 30,
    glowSize: m = 1,
    strength: v = 1,
    className: S,
    style: w,
    css: X,
    onActivate: $,
    onDeactivate: U,
    onAnimationEnd: G,
    ...Q
  }, j) {
    const q = gt.useId().replace(/:/g, "-"), W = yv(), _ = gt.useRef(null), [E, L] = gt.useState(h), [k, K] = gt.useState(!1), [V, rt] = gt.useState(!0), [nt, it] = gt.useState(null), [R, et] = gt.useState({ x: 1, y: 1 });
    gt.useEffect(() => {
      if (p != null) return;
      const ht = _.current;
      if (!ht) return;
      const yt = () => {
        const $t = ht.firstElementChild;
        if (!$t) return;
        const wt = getComputedStyle($t), pt = parseFloat(wt.borderTopLeftRadius);
        !isNaN(pt) && pt > 0 && it(pt);
      };
      yt();
      const Mt = new MutationObserver(yt);
      return Mt.observe(ht, { childList: !0, subtree: !1 }), () => Mt.disconnect();
    }, [p, r]), gt.useEffect(() => {
      h && !E && !k ? L(!0) : !h && E && !k && K(!0);
    }, [h, E, k]), gt.useEffect(() => {
      const ht = _.current;
      if (!ht || typeof IntersectionObserver > "u") return;
      const yt = new IntersectionObserver(
        (Mt) => {
          for (const $t of Mt) rt($t.isIntersecting);
        },
        // Start animating slightly before the element scrolls into view.
        { rootMargin: "256px" }
      );
      return yt.observe(ht), () => yt.disconnect();
    }, []), gt.useEffect(() => {
      if (i !== "pulse-outside") {
        et({ x: 1, y: 1 });
        return;
      }
      const ht = _.current;
      if (!ht) return;
      const yt = 350, Mt = 140, $t = 0.35, wt = 4, pt = (Ht) => Math.max($t, Math.min(wt, Ht)), Dt = () => {
        const Ht = ht.firstElementChild;
        if (!Ht) return;
        const Jt = Ht.getBoundingClientRect();
        if (!Jt.width || !Jt.height) return;
        const Vt = +pt(Jt.width / yt).toFixed(3), oe = +pt(Jt.height / Mt).toFixed(3);
        et((re) => re.x === Vt && re.y === oe ? re : { x: Vt, y: oe });
      };
      if (Dt(), typeof ResizeObserver > "u") return;
      const Gt = ht.firstElementChild;
      if (!Gt) return;
      const Et = new ResizeObserver(Dt);
      return Et.observe(Gt), () => Et.disconnect();
    }, [i, r]);
    const Z = gt.useCallback(
      (ht) => {
        const yt = ht.animationName;
        yt.includes("fade-out") ? (L(!1), K(!1), U?.()) : yt.includes("fade-in") && $?.(), G?.(ht);
      },
      [$, U, G]
    ), ot = xv(c, W), F = j3[i][ot], ct = B3[i], ft = i === "pulse-inner" || i === "pulse-outside", bt = p ?? nt ?? ct.borderRadius, M = f ?? (i === "line" ? 3.1 : ft ? 2.3 : 1.96), B = z ?? F.saturation, ut = g ?? F.brightness ?? 1.3, Y = i === "line" ? Math.min(y, 13) : y, lt = u === "mono" ? !0 : d, st = gt.useMemo(
      () => uv({
        id: q,
        borderRadius: bt,
        borderWidth: ct.borderWidth,
        duration: M,
        strokeOpacity: F.strokeOpacity,
        innerOpacity: F.innerOpacity,
        bloomOpacity: F.bloomOpacity,
        innerShadow: F.innerShadow,
        size: i,
        colorVariant: u,
        staticColors: lt,
        brightness: ut,
        saturation: B,
        hueRange: Y,
        theme: ot,
        hairlineOpacity: F.hairlineOpacity,
        glowSize: m
      }),
      [
        q,
        bt,
        ct.borderWidth,
        M,
        F.strokeOpacity,
        F.innerOpacity,
        F.bloomOpacity,
        F.innerShadow,
        F.hairlineOpacity,
        i,
        u,
        lt,
        ut,
        B,
        Y,
        m,
        ot
      ]
    ), tt = gt.useMemo(
      () => ft ? rv(i, ot, M, Y, lt, q) : null,
      [ft, i, ot, M, Y, lt, q]
    );
    gt.useEffect(() => {
      var ht;
      if (!tt || !(E || k) || !V) return;
      const yt = _.current;
      if (yt && !(typeof window < "u" && (ht = window.matchMedia) != null && ht.call(window, "(prefers-reduced-motion: reduce)").matches))
        return vv(yt, tt);
    }, [tt, E, k, V]);
    const J = gt.useCallback(
      (ht) => {
        _.current = ht, typeof j == "function" ? j(ht) : j && (j.current = ht);
      },
      [j]
    ), at = {
      ...w ?? {},
      "--beam-strength": Math.max(0, Math.min(1, v)),
      ...i === "pulse-outside" ? { "--pulse-glow-sx": R.x, "--pulse-glow-sy": R.y } : {}
    };
    return /* @__PURE__ */ Tt.jsxs(Tt.Fragment, { children: [
      /* @__PURE__ */ Tt.jsx("style", { children: X ? `${st}
${X.split("{id}").join(q)}` : st }),
      /* @__PURE__ */ Tt.jsxs(
        "div",
        {
          ...Q,
          ref: J,
          "data-beam": q,
          "data-active": E && !k ? "" : void 0,
          "data-fading": k ? "" : void 0,
          "data-paused": E && !k && !V ? "" : void 0,
          className: S,
          style: at,
          onAnimationEnd: Z,
          children: [
            r,
            /* @__PURE__ */ Tt.jsx("div", { "data-beam-bloom": !0 })
          ]
        }
      )
    ] });
  }
);
function Tf(r, i, u) {
  return r + (i - r) * u;
}
function Xb(r) {
  return r - Math.floor(r);
}
function wf(r, i) {
  const u = Math.floor(r), c = Math.floor(i);
  let d = r - u, f = i - c;
  d = d * d * (3 - 2 * d), f = f * f * (3 - 2 * f);
  const h = Ca(u, c), p = Ca(u + 1, c), g = Ca(u, c + 1), z = Ca(u + 1, c + 1);
  return h + (p - h) * d + (g - h) * f + (h - p - g + z) * d * f;
}
function Ca(r, i) {
  const u = Math.sin(r * 12.9898 + i * 78.233) * 43758.5453;
  return u - Math.floor(u);
}
function t1(r, i) {
  const u = Math.PI * (3 - Math.sqrt(5)), c = 1 - 2 * (r + 0.5) / i, d = Math.sqrt(1 - c * c), f = r * u;
  return [d * Math.cos(f), c, d * Math.sin(f)];
}
function zv(r, i) {
  return Math.atan2(Math.sin(r - i), Math.cos(r - i));
}
function In(r, i, u, c, d) {
  const f = Math.sin(i), h = Math.cos(i), p = Math.sin(r), g = Math.cos(r);
  return (z, y, m) => {
    const v = z * g + m * p, S = -z * p + m * g, w = y * h - S * f, X = y * f + S * h;
    return [u + v * d, c - w * d, X];
  };
}
function Ub(r, i, u, c) {
  if (!c) {
    const f = Math.round((u ? 1 - r : r) * 255);
    return `rgba(${f},${f},${f},${i})`;
  }
  const d = (f) => Math.round(u ? f * (1 - r) : f + (255 - f) * r);
  return `rgba(${d(c.r)},${d(c.g)},${d(c.b)},${i})`;
}
function Mv(r, i, u, c = 0.3, d) {
  for (const f of i) {
    const h = f.a ?? 1, p = Math.min(1, Math.max(0, f.white));
    r.fillStyle = Ub(p, h, u, d), r.beginPath(), r.arc(f.x, f.y, f.r, 0, Math.PI * 2), r.fill();
  }
}
function Sv(r, i, u, c) {
  for (const d of i) {
    const f = d.a ?? 1, h = Math.min(1, Math.max(0, d.white));
    r.strokeStyle = Ub(h, f, u, c), r.lineWidth = d.w, r.beginPath(), r.moveTo(d.x1, d.y1), r.lineTo(d.x2, d.y2), r.stroke();
  }
}
function cn(r, i, u = 0.3) {
  const c = [];
  for (const d of r)
    (d.a ?? 1) < 0.02 || (d.r = Math.max(u, d.r), c.push(d));
  return c.sort((d, f) => d.z - f.z), { dots: c, lines: i.filter((d) => (d.a ?? 1) >= 0.02) };
}
function qb(r, i, u, c) {
  i.lines.length && Sv(r, i.lines, u, c), Mv(r, i.dots, u, 0.3, c);
}
function Pn(r, i) {
  return (r / 300) ** i;
}
const $v = [
  ["latRings", "lonDensity"],
  ["rings", "lonDensity"],
  ["lanes", "segs"]
], Tv = ["orbitN", "ghostN", "nodeN", "strandN", "signals"], wv = ["iconD"], Cv = [
  "rBase",
  "rDepth",
  "rActive",
  "rDot",
  "ghostR",
  "partR",
  "partRDepth",
  "nodeR",
  "nodeRDepth"
];
function Lb(r, i) {
  const u = { ...r }, c = /* @__PURE__ */ new Set(), d = Math.sqrt(i);
  for (const [f, h] of $v) {
    const p = u[f], g = u[h];
    p != null && g != null && !c.has(f) && !c.has(h) && (u[f] = Math.max(2, Math.round(p * d)), u[h] = Math.max(2, Math.round(g * d)), c.add(f), c.add(h));
  }
  for (const f of Tv) {
    const h = u[f];
    h != null && h !== 0 && !c.has(f) && (u[f] = Math.max(1, Math.round(h * i)));
  }
  for (const f of wv) {
    const h = u[f];
    h != null && (u[f] = Math.max(0.02, h * i));
  }
  return u;
}
function Bb(r, i) {
  const u = { ...r };
  for (const c of Cv) {
    const d = u[c];
    d != null && (u[c] = d * i);
  }
  return u.rSizeMul = (u.rSizeMul ?? 1) * i, u;
}
const Ev = {
  globe: {
    latRings: 17,
    lonDensity: 44,
    rBase: 0.6,
    rDepth: 1.7,
    rBoost: 1,
    inkFar: 0.62,
    inkSpan: 0.54,
    rsPow: 0.6,
    rMin: 0.3
  },
  orbits: {
    orbitN: 12,
    ghostN: 40,
    ghostR: 0.9,
    ghostA: 0.5,
    particles: 3,
    partR: 1.2,
    partRDepth: 1.6,
    rsPow: 0.6,
    rMin: 0.3
  },
  rubik: {
    latRings: 15,
    lonDensity: 40,
    moveCount: 14,
    rBase: 0.6,
    rDepth: 1.7,
    rActive: 0.3,
    inkFar: 0.62,
    inkSpan: 0.54,
    rsPow: 0.6,
    rMin: 0.3
  },
  wave: {
    rings: 15,
    lonDensity: 40,
    rBase: 0.6,
    rDepth: 1.7,
    rsPow: 0.6,
    rMin: 0.3
  },
  web: {
    nodeN: 30,
    thr: 0.72,
    signals: 5,
    nodeR: 1.4,
    nodeRDepth: 1.8,
    lineW: 0.8,
    rsPow: 0.6,
    rMin: 0.3
  },
  braid: {
    strandN: 52,
    turns: 3,
    ghostN: 150,
    rBase: 1.2,
    rDepth: 1.8,
    rsPow: 0.6,
    rMin: 0.3
  },
  ribbon: {
    lanes: 5,
    segs: 88,
    ghostN: 150,
    rBase: 1.1,
    rDepth: 1.7,
    rsPow: 0.6,
    rMin: 0.3
  },
  // ring shares ribbon's painter; faceOn cancels the camera tilt and moves
  // the undulation onto the radius, and there is no ghost sphere behind it
  ring: {
    lanes: 5,
    segs: 88,
    ghostN: 0,
    faceOn: 1,
    rBase: 1.1,
    rDepth: 1.7,
    rsPow: 0.6,
    rMin: 0.3
  },
  morph: {
    rDot: 0.021,
    iconD: 1,
    rMin: 0.25
  }
}, Av = (r, i, u) => {
  const c = r / 2, d = r / 2, f = r / 2 * 0.76, h = In(i * 0.4, 0.3, c, d, 1), p = Pn(r, u.rsPow ?? 0.6), g = [], z = u.ghostN ?? 150;
  for (let v = 0; v < z; v++) {
    const S = t1(v, z), [w, X, $] = h(S[0] * f, S[1] * f, S[2] * f), U = ($ / f + 1) / 2;
    g.push({ x: w, y: X, z: $, r: 0.8 * p, white: 0.78, a: 0.1 + 0.22 * U });
  }
  const y = u.strandN ?? 52, m = u.turns ?? 3;
  for (let v = 0; v < 3; v++) {
    const S = v / 3 * 2 * Math.PI;
    for (let w = 0; w < y; w++) {
      const X = (Xb(w / y + i * 0.045) * 2 - 1) * 0.96, $ = Math.sqrt(Math.max(0, 1 - X * X)), U = Math.min(1, (1 - Math.abs(X)) / 0.1), G = X * Math.PI * m + S, Q = 1 + 0.075 * Math.sin(X * Math.PI * m * 2 + S * 2 + i * 0.8), j = $ * f * Q, [q, W, _] = h(Math.cos(G) * j, X * f * Q, Math.sin(G) * j), E = (_ / f + 1) / 2;
      g.push({
        x: q,
        y: W,
        z: _,
        r: ((u.rBase ?? 1.2) + (u.rDepth ?? 1.8) * E) * p,
        white: 0.55 - 0.45 * E,
        a: U * (0.45 + 0.55 * E)
      });
    }
  }
  return cn(g, [], u.rMin);
};
function Ov(r, i, u, c) {
  const d = 2 * i * u + c, f = r % d, h = new Array(i).fill(0);
  let p = -1;
  if (f < 2 * i * u) {
    const g = Math.floor(f / u), z = (f - g * u) / u, m = 1 - (1 - Math.min(1, z / 0.7)) ** 3;
    if (g < i) {
      for (let v = 0; v < g; v++) h[v] = 1;
      h[g] = m, p = g;
    } else {
      const v = 2 * i - 1 - g;
      for (let S = 0; S < v; S++) h[S] = 1;
      h[v] = 1 - m, p = v;
    }
  }
  return { amount: h, active: p };
}
function Hv(r, i, u) {
  let [c, d, f] = r, h = !1;
  for (let p = 0; p < i.length; p++) {
    if (u.amount[p] <= 0) continue;
    const g = i[p], z = g.axis === 0 ? c : g.axis === 1 ? d : f;
    if (z < g.lo || z >= g.hi) continue;
    p === u.active && (h = !0);
    const y = g.ang * u.amount[p], m = Math.cos(y), v = Math.sin(y);
    if (g.axis === 0) {
      const S = d * m - f * v;
      f = d * v + f * m, d = S;
    } else if (g.axis === 1) {
      const S = c * m + f * v;
      f = -c * v + f * m, c = S;
    } else {
      const S = c * m - d * v;
      d = c * v + d * m, c = S;
    }
  }
  return [c, d, f, h];
}
function Nv(r) {
  const i = [];
  for (let u = 0; u < r; u++) {
    const c = Math.min(2, Math.floor(Ca(u, 2.3) * 3)), d = -1 + 0.5 * Math.min(3, Math.floor(Ca(u, 5.9) * 4)), f = Ca(u, 7.7) < 0.5 ? 1 : -1;
    i.push({ axis: c, lo: d, hi: d + 0.5, ang: f * Math.PI / 2 });
  }
  return i;
}
const Yv = (r, i, u) => {
  const d = r / 2, f = r / 2, h = r / 2 * 0.82, p = 0.4 + 0.06 * Math.sin(i * 0.35), g = In(i * 0.5, p, d, f, h), z = i * (0.5 + (1.7 - 0.5) * (u.scanMul ?? 1)), y = Pn(r, u.rsPow ?? 0.6), m = u.dimBase ?? 1, v = [], S = u.latRings ?? 17, w = u.lonDensity ?? 44;
  for (let X = 0; X <= S; X++) {
    const $ = -Math.PI / 2 + X / S * Math.PI, U = Math.cos($), G = Math.sin($), Q = Math.max(1, Math.round(Math.abs(U) * w));
    for (let j = 0; j < Q; j++) {
      const q = j / Q * 2 * Math.PI, [W, _, E] = g(U * Math.cos(q), G, U * Math.sin(q)), L = (E + 1) / 2, k = zv(q + i * 0.5, z), K = Math.exp(-(k * k) / 0.18) * Math.max(0, E);
      v.push({
        x: W,
        y: _,
        z: E,
        r: ((u.rBase ?? 0.6) + (u.rDepth ?? 1.7) * L + (u.rBoost ?? 1) * K) * y,
        white: (u.inkFar ?? 0.62) - (u.inkSpan ?? 0.54) * L,
        // dimBase < 1 fades un-scanned dots so the meridian reads clearly
        a: m + (1 - m) * Math.min(1, K)
      });
    }
  }
  return cn(v, [], u.rMin);
}, _v = (r, i, u) => {
  const c = r / 2, d = r / 2, f = r / 2 * 0.82, h = In(i * 0.55, 0.35 + 0.1 * Math.sin(i * 0.9), c, d, f), p = Pn(r, u.rsPow ?? 0.6), g = u.moveCount ?? 14, z = Nv(g), y = Ov(i, g, 0.42, 1.2), m = [], v = u.latRings ?? 15, S = u.lonDensity ?? 40;
  for (let w = 0; w <= v; w++) {
    const X = -Math.PI / 2 + w / v * Math.PI, $ = Math.cos(X), U = Math.sin(X), G = Math.max(1, Math.round(Math.abs($) * S));
    for (let Q = 0; Q < G; Q++) {
      const j = Q / G * 2 * Math.PI, [q, W, _, E] = Hv([$ * Math.cos(j), U, $ * Math.sin(j)], z, y), [L, k, K] = h(q, W, _), V = (K + 1) / 2;
      m.push({
        x: L,
        y: k,
        z: K,
        r: ((u.rBase ?? 0.6) + (u.rDepth ?? 1.7) * V + (E ? u.rActive ?? 0.3 : 0)) * p,
        white: (u.inkFar ?? 0.62) - (u.inkSpan ?? 0.54) * V - (E ? 0.14 : 0)
      });
    }
  }
  return cn(m, [], u.rMin);
}, Dv = (r, i, u) => {
  const c = r / 2, d = r / 2, f = r / 2 * 0.874, h = In(i * 0.18, 0.38, c, d, 1), p = Pn(r, u.rsPow ?? 0.6), g = [], z = u.rings ?? 15, y = u.lonDensity ?? 40;
  for (let m = 0; m <= z; m++) {
    const v = -Math.PI / 2 + m / z * Math.PI, S = Math.cos(v), w = Math.sin(v), X = 0.62 * Math.sin(i * 2.1 - m * 0.52) + 0.38 * Math.sin(i * 1.27 + m * 0.83), $ = f * (0.88 + 0.105 * X), U = Math.max(1, Math.round(Math.abs(S) * y));
    for (let G = 0; G < U; G++) {
      const Q = G / U * 2 * Math.PI, [j, q, W] = h(S * Math.cos(Q) * $, w * $, S * Math.sin(Q) * $), _ = (W / f + 1) / 2, E = Math.max(0, X);
      g.push({
        x: j,
        y: q,
        z: W,
        r: ((u.rBase ?? 0.6) + (u.rDepth ?? 1.7) * _) * (1 + 0.4 * E) * p,
        white: 0.66 - 0.56 * _ - 0.1 * E
      });
    }
  }
  return cn(g, [], u.rMin);
};
function Rv(r) {
  return r * r * (3 - 2 * r);
}
function jb(r) {
  const i = r.length, u = [];
  let c = 0;
  for (let d = 0; d < i; d++) {
    const f = r[d], h = r[(d + 1) % i], p = Math.hypot(h[0] - f[0], h[1] - f[1]);
    u.push(p), c += p;
  }
  return (d) => {
    let f = d * c, h = 0;
    for (; f > u[h] && h < i - 1; )
      f -= u[h], h++;
    const p = r[h], g = r[(h + 1) % i], z = u[h] ? Math.min(1, f / u[h]) : 0;
    return [p[0] + (g[0] - p[0]) * z, p[1] + (g[1] - p[1]) * z];
  };
}
const Xv = (r) => {
  const i = -Math.PI / 2 + r * 2 * Math.PI;
  return [Math.cos(i) * 0.24, Math.sin(i) * 0.24];
}, Uv = jb([
  [0, -0.26],
  [0.24, 0.16],
  [-0.24, 0.16]
]), qv = jb([
  [0, -0.2],
  [0.2, -0.2],
  [0.2, 0.2],
  [-0.2, 0.2],
  [-0.2, -0.2]
]), Cf = [Xv, Uv, qv];
function Lv(r) {
  return Math.max(6, Math.round(34 * r));
}
const Uf = 1.4, kb = 0.9, hu = Uf + kb, Bv = (r, i, u) => {
  const c = Cf.length, d = i % (hu * c), f = u.shape != null && u.shape >= 0 && u.shape < c ? Math.floor(u.shape) : -1, h = f >= 0 ? f : Math.floor(d / hu), p = f >= 0 ? i % hu : d - h * hu, g = f >= 0 ? 0 : p > Uf ? Rv((p - Uf) / kb) : 0, z = u.spread ?? 1, y = Cf[h], m = f >= 0 ? y : Cf[(h + 1) % c], v = 160, S = [];
  for (let _ = 0; _ < v; _++) {
    const E = _ / v, L = y(E), k = m(E);
    S.push([(L[0] + (k[0] - L[0]) * g) * z, (L[1] + (k[1] - L[1]) * g) * z]);
  }
  const w = [];
  let X = 0;
  for (let _ = 0; _ < v; _++) {
    const E = S[_], L = S[(_ + 1) % v], k = Math.hypot(L[0] - E[0], L[1] - E[1]);
    w.push(k), X += k;
  }
  const $ = Lv(u.iconD ?? 1), U = (u.rDot ?? 0.021) * 1.35 * z, G = 1 + 0.02 * Math.sin(p * 3.1), Q = [], j = r / 2;
  let q = 0, W = 0;
  for (let _ = 0; _ < $; _++) {
    const E = _ / $ * X;
    for (; W + w[q] < E && q < v - 1; )
      W += w[q], q++;
    const L = S[q], k = S[(q + 1) % v], K = w[q] ? Math.min(1, (E - W) / w[q]) : 0, V = (L[0] + (k[0] - L[0]) * K) * G, rt = (L[1] + (k[1] - L[1]) * K) * G;
    Q.push({
      x: j + V * r,
      y: j + rt * r,
      z: 0,
      r: Math.max(0.35, U * r),
      white: 0.1
    });
  }
  return cn(Q, [], u.rMin);
}, jv = (r, i, u) => {
  const c = r / 2, d = r / 2, f = r / 2 * 0.82, h = In(i * 0.12, 0.3, c, d, 1), p = Pn(r, u.rsPow ?? 0.6), g = [], z = u.orbitN ?? 12, y = u.ghostN ?? 40, m = u.particles ?? 3;
  for (let v = 0; v < z; v++) {
    const S = Ca(v, 1.7), w = Ca(v, 5.2), X = Ca(v, 8.9), $ = f * (0.45 + 0.52 * S), U = S * 2 * Math.PI, G = Math.acos(2 * w - 1), Q = Math.sin(G) * Math.cos(U), j = Math.cos(G), q = Math.sin(G) * Math.sin(U);
    let W = -j, _ = Q;
    const E = 0, L = Math.max(1e-6, Math.sqrt(W * W + _ * _));
    W /= L, _ /= L;
    const k = j * E - q * _, K = q * W - Q * E, V = Q * _ - j * W, rt = (0.25 + 0.55 * X) * (X > 0.5 ? 1 : -1);
    for (let nt = 0; nt < y; nt++) {
      const it = nt / y * 2 * Math.PI, [R, et, Z] = h(
        (W * Math.cos(it) + k * Math.sin(it)) * $,
        (_ * Math.cos(it) + K * Math.sin(it)) * $,
        (E * Math.cos(it) + V * Math.sin(it)) * $
      ), ot = (Z / $ + 1) / 2;
      g.push({
        x: R,
        y: et,
        z: Z,
        r: (u.ghostR ?? 0.9) * p,
        white: 0.72,
        a: (u.ghostA ?? 0.5) * (0.4 + 0.6 * ot)
      });
    }
    for (let nt = 0; nt < m; nt++) {
      const it = i * rt + nt / m * 2 * Math.PI + w * 6, [R, et, Z] = h(
        (W * Math.cos(it) + k * Math.sin(it)) * $,
        (_ * Math.cos(it) + K * Math.sin(it)) * $,
        (E * Math.cos(it) + V * Math.sin(it)) * $
      ), ot = (Z / $ + 1) / 2;
      g.push({
        x: R,
        y: et,
        z: Z,
        r: ((u.partR ?? 1.2) + (u.partRDepth ?? 1.6) * ot) * p,
        white: 0.3 - 0.22 * ot
      });
    }
  }
  return cn(g, [], u.rMin);
}, Jh = (r, i, u) => {
  const c = r / 2, d = r / 2, f = r / 2 * 0.78, h = u.spin ?? 1, p = 0.3, g = In(i * 0.1 * h, p, c, d, 1), z = Pn(r, u.rsPow ?? 0.6), y = [], m = u.ghostN ?? 150;
  for (let V = 0; V < m; V++) {
    const rt = t1(V, m), [nt, it, R] = g(rt[0] * f, rt[1] * f, rt[2] * f), et = (R / f + 1) / 2;
    y.push({ x: nt, y: it, z: R, r: 0.8 * z, white: 0.78, a: 0.1 + 0.22 * et });
  }
  const v = i * 0.24 * h, S = u.faceOn ? -p : 0.55 + 0.3 * Math.sin(i * 0.18) * h, w = Math.cos(v), X = 0, $ = Math.sin(v), U = -$ * Math.sin(S), G = Math.cos(S), Q = w * Math.sin(S), j = X * Q - $ * G, q = $ * U - w * Q, W = w * G - X * U, _ = 0.23 * (u.wobMul ?? 1), E = u.faceOn ? f / (1 + 0.85 * _) : f, L = u.lanes ?? 5, k = u.segs ?? 88, K = Math.max(1, Math.round(L * (u.bandMul ?? 1)));
  for (let V = 0; V < K; V++) {
    const rt = (V - (K - 1) / 2) * 0.075, nt = Math.abs(V - (K - 1) / 2) / Math.max(1, (K - 1) / 2);
    for (let it = 0; it < k; it++) {
      const R = it / k * 2 * Math.PI, et = (0.16 * Math.sin(R * 3 - i * 1.7 + V * 0.22) + 0.07 * Math.sin(R * 5 + i * 1.1)) * (u.wobMul ?? 1), Z = u.faceOn ? 1 + et : 1, ot = u.faceOn ? rt : rt + et, F = w * Math.cos(R) + U * Math.sin(R) + j * ot, ct = X * Math.cos(R) + G * Math.sin(R) + q * ot, ft = $ * Math.cos(R) + Q * Math.sin(R) + W * ot, bt = Math.sqrt(F * F + ct * ct + ft * ft), M = E * Z, [B, ut, Y] = g(F / bt * M, ct / bt * M, ft / bt * M), lt = (Y / f + 1) / 2;
      y.push({
        x: B,
        y: ut,
        z: Y,
        r: ((u.rBase ?? 1.1) + (u.rDepth ?? 1.7) * lt) * (1 - 0.25 * nt) * z,
        white: 0.52 - 0.44 * lt + 0.18 * nt,
        a: 0.4 + 0.6 * lt
      });
    }
  }
  return cn(y, [], u.rMin);
}, kv = (r, i, u) => {
  const c = r / 2, d = r / 2, f = r / 2 * 0.8 * (u.spread ?? 1), h = In(i * 0.12, 0.32, c, d, f), p = Pn(r, u.rsPow ?? 0.6), g = u.nodeN ?? 30, z = u.thr ?? 0.72, y = u.nodeR ?? 1.4, m = u.nodeRDepth ?? 1.8, v = [];
  for (let $ = 0; $ < g; $++) {
    const U = t1($, g), G = U[0] + 0.3 * (wf($ * 0.31 + 9, i * 0.24) - 0.5) * 2, Q = U[1] + 0.3 * (wf($ * 0.53 + 27, i * 0.21) - 0.5) * 2, j = U[2] + 0.3 * (wf($ * 0.77 + 55, i * 0.27) - 0.5) * 2, q = Math.sqrt(G * G + Q * Q + j * j);
    v.push([G / q, Q / q, j / q]);
  }
  const S = [], w = [];
  for (let $ = 0; $ < g; $++)
    for (let U = $ + 1; U < g; U++) {
      const G = v[$][0] - v[U][0], Q = v[$][1] - v[U][1], j = v[$][2] - v[U][2], q = Math.sqrt(G * G + Q * Q + j * j);
      if (q >= z) continue;
      const [W, _, E] = h(v[$][0], v[$][1], v[$][2]), [L, k, K] = h(v[U][0], v[U][1], v[U][2]), V = ((E + K) / 2 + 1) / 2;
      S.push({
        x1: W,
        y1: _,
        x2: L,
        y2: k,
        white: 0.42,
        a: (1 - q / z) * (0.3 + 0.55 * V),
        w: Math.max(0.6, (u.lineW ?? 0.8) * p)
      });
    }
  for (let $ = 0; $ < g; $++) {
    const [U, G, Q] = h(v[$][0], v[$][1], v[$][2]), j = (Q + 1) / 2, q = 1 + 0.25 * Math.sin(i * 1.4 + $ * 2.7);
    w.push({
      x: U,
      y: G,
      z: Q,
      r: (y + m * j) * q * p,
      white: 0.55 - 0.45 * j
    });
  }
  const X = u.signals ?? 5;
  for (let $ = 0; $ < X; $++) {
    const U = Math.floor(i * 0.55 + $ * 7.31), G = Math.floor(Ca(U, $ * 3.1 + 1.7) * g), Q = Math.floor(Ca(U, $ * 5.7 + 4.2) * g);
    if (G === Q) continue;
    const j = Xb(i * 0.55 + $ * 7.31), q = Tf(v[G][0], v[Q][0], j), W = Tf(v[G][1], v[Q][1], j), _ = Tf(v[G][2], v[Q][2], j), E = Math.max(1e-6, Math.sqrt(q * q + W * W + _ * _)), [L, k, K] = h(q / E, W / E, _ / E), V = (K + 1) / 2;
    w.push({
      x: L,
      y: k,
      z: K,
      r: (y * 1.5 + m * V) * p,
      white: 0.05,
      a: 0.5 + 0.5 * V
    });
  }
  return cn(w, S, u.rMin);
}, Gb = {
  orbits: jv,
  globe: Yv,
  rubik: _v,
  wave: Dv,
  web: kv,
  braid: Av,
  ribbon: Jh,
  // ring shares ribbon's geometry — the `faceOn` profile flag switches it
  ring: Jh,
  morph: Bv
};
Object.fromEntries(
  Object.entries(Gb).map(([r, i]) => [
    r,
    (u, c, d, f, h) => qb(u, i(c, d, h), f)
  ])
);
const Gv = {
  working: "orbits",
  searching: "globe",
  solving: "rubik",
  listening: "wave",
  connecting: "web",
  weaving: "braid",
  composing: "ribbon",
  breathing: "ring",
  shaping: "morph"
}, Vv = {
  orbits: {
    64: { speed: 1.885, count: 1, size: 1 },
    32: { speed: 2.9072, count: 0.4251, size: 1.6849 },
    20: { speed: 3.9, count: 0.238, size: 2.4 }
  },
  globe: {
    64: { speed: 2.015, count: 0.42, size: 1.15, extra: { scanMul: 4.08, dimBase: 0.45 } },
    32: { speed: 2.3803, count: 0.1839, size: 1.4769, extra: { scanMul: 4.2301, dimBase: 0.45 } },
    20: { speed: 2.665, count: 0.105, size: 1.75, extra: { scanMul: 4.335, dimBase: 0.45 } }
  },
  rubik: {
    64: { speed: 1.82, count: 0.35, size: 1.05 },
    32: { speed: 1.8964, count: 0.1537, size: 1.4951 },
    20: { speed: 1.95, count: 0.088, size: 1.9 }
  },
  wave: {
    64: { speed: 4.388, count: 0.341, size: 1 },
    32: { speed: 4.1512, count: 0.169, size: 1.3232 },
    20: { speed: 3.998, count: 0.105, size: 1.6 }
  },
  web: {
    64: { speed: 3.315, count: 1.35, size: 0.95 },
    32: { speed: 5.0104, count: 0.4942, size: 1.2571 },
    20: { speed: 6.63, count: 0.25, size: 1.52 }
  },
  braid: {
    64: { speed: 1.625, count: 0.5, size: 1 },
    32: { speed: 2.2234, count: 0.2056, size: 1.2011 },
    20: { speed: 2.75, count: 0.1125, size: 1.36 }
  },
  ribbon: {
    64: { speed: 2.34, count: 0.25, size: 0.85, extra: { spin: 0, bandMul: 3.9, wobMul: 1 } },
    32: { speed: 2.7776, count: 0.0969, size: 0.9766, extra: { spin: 0, bandMul: 4.49, wobMul: 1 } },
    20: { speed: 3.12, count: 0.051, size: 1.073, extra: { spin: 0, bandMul: 4.94, wobMul: 1 } }
  },
  ring: {
    64: { speed: 3.24, count: 0.25, size: 0.956, extra: { spin: 0, bandMul: 3.627, wobMul: 0.368 } },
    32: { speed: 3.5517, count: 0.0678, size: 1.31, extra: { spin: 0, bandMul: 3.8265, wobMul: 0.4751 } },
    20: { speed: 3.78, count: 0.028, size: 1.622, extra: { spin: 0, bandMul: 3.968, wobMul: 0.565 } }
  },
  morph: {
    64: { speed: 2.405, count: 0.702, size: 0.395, extra: { spread: 1.45 } },
    32: { speed: 2.2057, count: 0.5937, size: 0.6916, extra: { spread: 1.45 } },
    20: { speed: 2.08, count: 0.53, size: 1.011, extra: { spread: 1.45 } }
  }
}, Fh = /* @__PURE__ */ new Map();
function Zv(r, i) {
  const u = `${r}-${i}`, c = Fh.get(u);
  if (c) return c;
  const d = Gv[r], f = Vv[d][i];
  let h = { ...Ev[d] };
  f.count !== 1 && (h = Lb(h, f.count)), f.size !== 1 && (h = Bb(h, f.size)), f.extra && (h = { ...h, ...f.extra });
  const p = { mode: d, speed: f.speed, opts: h };
  return Fh.set(u, p), p;
}
function Qv(r) {
  let i = r;
  for (; i; ) {
    const u = i.getAttribute("data-theme");
    if (u === "dark") return !0;
    if (u === "light") return !1;
    if (i.classList.contains("dark")) return !0;
    if (i.classList.contains("light")) return !1;
    i = i.parentElement;
  }
  return null;
}
function Wv() {
  return typeof matchMedia > "u" || matchMedia("(prefers-color-scheme: dark)").matches;
}
function Kv(r, i) {
  const [u, c] = gt.useState(!0);
  return gt.useEffect(() => {
    if (r === "dark") {
      c(!0);
      return;
    }
    if (r === "light") {
      c(!1);
      return;
    }
    const d = () => {
      const g = Qv(i.current);
      c(g ?? Wv());
    };
    d();
    const f = typeof matchMedia < "u" ? matchMedia("(prefers-color-scheme: dark)") : null, h = () => d();
    f?.addEventListener("change", h);
    let p = null;
    return typeof MutationObserver < "u" && i.current && (p = new MutationObserver(d), p.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class", "data-theme"],
      subtree: !0
    })), () => {
      f?.removeEventListener("change", h), p?.disconnect();
    };
  }, [r, i]), u;
}
function Jv() {
  const [r, i] = gt.useState(!1);
  return gt.useEffect(() => {
    if (typeof matchMedia > "u") return;
    const u = matchMedia("(prefers-reduced-motion: reduce)");
    i(u.matches);
    const c = (d) => i(d.matches);
    return u.addEventListener("change", c), () => u.removeEventListener("change", c);
  }, []), r;
}
const Ta = Object.freeze({
  reach: 160,
  strength: 11,
  deform: 19,
  taper: 1.95,
  curve: 2.8,
  falloff: 24,
  smoothing: 0.3,
  handover: 0.6,
  squash: 1.2,
  blur: 1,
  fadeMs: 180
});
let qa = null, Kn = null, no = null, Ih = 0, Vb = 0, zr = !1, qf = "", Lf = 0;
function Fv(r) {
  if (r === qa || (qa = r, Kn = null, no = null, zr = !1, Lf = 0, Vb = typeof window < "u" && window.devicePixelRatio || 1, Jn(), !r || typeof Image > "u")) return;
  const i = new Image();
  i.decoding = "async", i.onload = () => {
    qa === r && (Kn = i, Xu());
  }, i.src = r.src;
}
const Pi = /* @__PURE__ */ new Set();
let oo = !1, un = 0, Bf = 0, Ua = Number.NaN, Gn = Number.NaN, jf = 0, kf = 0, ln = 0, sa = null, Tu = !0, Mr = !1;
function Iv(r, i = !0) {
  const u = i === !0 ? {} : i;
  u.sprite && Fv(u.sprite);
  const c = {
    el: r,
    opts: {
      reach: Math.max(1, u.reach ?? Ta.reach),
      strength: Math.max(0, Math.min(64, u.strength ?? Ta.strength)),
      deform: Math.max(0, Math.min(32, u.deform ?? Ta.deform)),
      taper: Math.max(1, Math.min(4, u.taper ?? Ta.taper)),
      curve: Math.max(1, Math.min(4, u.curve ?? Ta.curve)),
      falloff: Math.max(2, Math.min(200, u.falloff ?? Ta.falloff)),
      smoothing: Ph(u.smoothing ?? Ta.smoothing),
      handover: Ph(u.handover ?? Ta.handover),
      squash: Math.max(0, Math.min(3, u.squash ?? Ta.squash)),
      blur: Math.max(0, Math.min(24, u.blur ?? Ta.blur)),
      fadeMs: Math.max(1, u.fadeMs ?? Ta.fadeMs)
    }
  };
  return Pi.add(c), e4(), Xu(), () => {
    Pi.delete(c), sa === c && (sa = null), Pi.size === 0 && queueMicrotask(() => {
      Pi.size === 0 && a4();
    });
  };
}
const Ph = (r) => Math.max(0, Math.min(1, r)), wu = (r) => r.opts, xr = (r) => typeof window.matchMedia == "function" && window.matchMedia(r).matches;
function Pv() {
  if (zr) return qf || "disabled by a fail-safe";
  if (!qa) return "no pointer sprite set";
  if (!Kn) return "pointer sprite still loading";
  if (xr("(prefers-reduced-motion: reduce)")) return "prefers-reduced-motion is on";
  if (xr("(forced-colors: active)")) return "forced colours are active";
  if (!xr("(pointer: fine)") || !xr("(hover: hover)")) return "no fine pointer";
  if ((window.devicePixelRatio || 1) !== Vb) return "display scale changed since the sprite was set — reload";
  const r = window.visualViewport;
  return r && Math.abs(r.scale - 1) > 1e-3 ? "page is zoomed" : null;
}
function t4() {
  return Pv() === null;
}
function e4() {
  oo || Pi.size === 0 || typeof document > "u" || xr("(pointer: fine)") && (oo = !0, document.addEventListener("pointermove", Zb, { passive: !0 }), document.addEventListener("pointerleave", on), document.addEventListener("pointercancel", on), document.addEventListener("keydown", Qb, { passive: !0 }), document.addEventListener("visibilitychange", on), window.addEventListener("blur", on));
}
function a4() {
  oo && (oo = !1, document.removeEventListener("pointermove", Zb), document.removeEventListener("pointerleave", on), document.removeEventListener("pointercancel", on), document.removeEventListener("keydown", Qb), document.removeEventListener("visibilitychange", on), window.removeEventListener("blur", on), un !== 0 && (cancelAnimationFrame(un), un = 0), sa = null, ln = 0, Jn(), al && (al.remove(), al = null, zl = null, _u = null), Zn && (Zn.remove(), Zn = null));
}
function Zb(r) {
  Tu = r.pointerType === "mouse" || r.pointerType === "", Mr = !1, e1++, Ua = jf = r.clientX, Gn = kf = r.clientY, Cr && (Cr = !1, Sr(), $r = 0, Tr = 0, Vn = to = Number.NaN), Xu();
}
function Qb() {
  Mr = !0, Jn();
}
function on() {
  Ua = Gn = Number.NaN, Xu();
}
function Xu() {
  !oo || un !== 0 || (Bf = performance.now(), un = requestAnimationFrame(Zf));
}
let al = null, zl = null, _u = null, ro = !1;
const Wn = "thinking-orb-gravity-hide";
let Zn = null, wr = !1;
const tb = /* @__PURE__ */ new WeakMap();
let e1 = 0, a1 = -1, Gf = 0, Wb = -1;
function l4() {
  if (al) return !0;
  const r = document.createElement("div");
  r.className = "thinking-orb-gravity-cursor", r.setAttribute("aria-hidden", "true"), r.style.cssText = "position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;display:none";
  const i = document.createElement("canvas");
  i.style.display = "block", r.appendChild(i), document.body.appendChild(r);
  const u = i.getContext("2d");
  return u ? (al = r, zl = i, _u = u, Vf = 0, !0) : (r.remove(), !1);
}
function n4() {
  Zn || (Zn = document.createElement("style"), Zn.textContent = `html.${Wn}, html.${Wn} * { cursor: none !important; }`, document.head.appendChild(Zn));
}
function i4(r) {
  const i = tb.get(r);
  if (i) return i;
  const u = document.documentElement, c = u.classList.contains(Wn);
  c && u.classList.remove(Wn);
  const d = getComputedStyle(r).cursor;
  return c && u.classList.add(Wn), tb.set(r, d), d;
}
function eb(r, i) {
  const u = document.elementFromPoint(r, i);
  if (!u) return !1;
  const c = i4(u);
  return c !== "auto" && c !== "default" ? (l1(), !1) : (wr || (n4(), document.documentElement.classList.add(Wn), wr = !0, a1 = e1, Wb = Gf), !0);
}
function l1() {
  wr && (document.documentElement.classList.remove(Wn), wr = !1, a1 = -1);
}
function Sr() {
  al && ro && (al.style.display = "none", ro = !1);
}
const o4 = 500;
let ab = Number.NEGATIVE_INFINITY, Cr = !1;
function Jn() {
  Cr = !1, l1(), Sr(), $r = 0, Tr = 0, Vn = to = Number.NaN;
}
const Qn = { cx: 0, cy: 0, r: 0 };
let $r = 0, Tr = 0, Vn = Number.NaN, to = Number.NaN;
const Un = 48, lb = 10;
let Fi = null, Ef = null, qn = null, Ln = null, eo = null, Vf = 0, nb = 0, ib = 0;
function r4(r) {
  if (!Kn || !qa) return null;
  const i = document.createElement("canvas");
  i.width = Math.ceil(qa.width * r), i.height = Math.ceil(qa.height * r);
  const u = i.getContext("2d", { willReadFrequently: !0 });
  return u ? (u.scale(r, r), u.drawImage(Kn, 0, 0, qa.width, qa.height), u.getImageData(0, 0, i.width, i.height)) : null;
}
function u4(r, i, u, c, d, f, h) {
  if (!no || !eo) return;
  const p = eo.width, g = eo.height, z = no, y = z.width, m = z.height, v = z.data, S = eo.data;
  S.fill(0);
  const w = Math.max(1, Math.hypot(y, m)), X = f - c, $ = h - d, U = Math.hypot(X, $) || 1, G = X / U, Q = $ / U, j = Math.max(0, Math.floor(u + Math.min(0, r * G) - 3)), q = Math.min(p, Math.ceil(u + y + Math.max(0, r * G) + 3)), W = Math.max(0, Math.floor(u + Math.min(0, r * Q) - 3)), _ = Math.min(g, Math.ceil(u + m + Math.max(0, r * Q) + 3));
  for (let E = W; E < _; E++)
    for (let L = j; L < q; L++) {
      const k = (E * p + L) * 4;
      let K = L - u, V = E - u;
      if (r > 0.01) {
        let ct = L, ft = E, bt = 0, M = 0, B = 0, ut = 1;
        for (let st = 0; st < 7; st++) {
          const tt = Math.hypot(ct - c, ft - d) / w;
          bt = r * Math.pow(Math.min(1, tt), i), M = f - ct, B = h - ft, ut = Math.hypot(M, B) || 1, ct += (L - bt * M / ut - ct) * 0.5, ft += (E - bt * B / ut - ft) * 0.5;
        }
        const Y = ct + bt * M / ut - L, lt = ft + bt * B / ut - E;
        if (Y * Y + lt * lt > 2.25) {
          S[k] = S[k + 1] = S[k + 2] = S[k + 3] = 0;
          continue;
        }
        K = ct - u, V = ft - u;
      }
      const rt = Math.floor(K), nt = Math.floor(V);
      if (rt < -1 || nt < -1 || rt >= y || nt >= m) {
        S[k] = S[k + 1] = S[k + 2] = S[k + 3] = 0;
        continue;
      }
      const it = K - rt, R = V - nt;
      let et = 0, Z = 0, ot = 0, F = 0;
      for (let ct = 0; ct < 4; ct++) {
        const ft = rt + (ct & 1), bt = nt + (ct >> 1);
        if (ft < 0 || bt < 0 || ft >= y || bt >= m) continue;
        const M = (ct & 1 ? it : 1 - it) * (ct >> 1 ? R : 1 - R), B = (bt * y + ft) * 4, ut = M * v[B + 3];
        et += v[B] * ut, Z += v[B + 1] * ut, ot += v[B + 2] * ut, F += ut;
      }
      F > 0 ? (S[k] = et / F, S[k + 1] = Z / F, S[k + 2] = ot / F, S[k + 3] = F) : S[k] = S[k + 1] = S[k + 2] = S[k + 3] = 0;
    }
}
function ob(r, i, u) {
  if (!_u || !zl || !al || !qa || !Kn) return;
  const c = qa, d = wu(r), f = Math.min(3, window.devicePixelRatio || 1);
  if (Fi || (Fi = document.createElement("canvas"), Ef = Fi.getContext("2d")), qn || (qn = document.createElement("canvas"), Ln = qn.getContext("2d")), !Ef || !Ln || ((!no || Ih !== f) && (no = r4(f), Ih = f), !no)) return;
  if (f !== Vf || c.width !== nb || c.height !== ib) {
    Vf = f, nb = c.width, ib = c.height;
    const R = Math.ceil((c.width + 2 * Un) * f), et = Math.ceil((c.height + 2 * Un) * f);
    zl.width = Fi.width = qn.width = R, zl.height = Fi.height = qn.height = et, zl.style.width = `${c.width + 2 * Un}px`, zl.style.height = `${c.height + 2 * Un}px`, eo = Ln.createImageData(R, et);
  }
  const h = zl.width, p = zl.height, g = Math.pow(i, d.curve), z = 1 - Math.exp(-u / (0.012 + d.smoothing * 0.14));
  $r += (d.strength * g - $r) * z, Tr += (d.deform * g - Tr) * z;
  let y = $r * f, m = Tr * f;
  if (Number.isNaN(Vn))
    Vn = Qn.cx, to = Qn.cy;
  else {
    const R = 1 - Math.exp(-u / (0.05 + d.handover * 0.6));
    Vn += (Qn.cx - Vn) * R, to += (Qn.cy - to) * R;
  }
  const v = Un * f, S = v + c.hotX * f, w = v + c.hotY * f, X = S + (Vn - jf) * f, $ = w + (to - kf) * f, U = Math.hypot(X - S, $ - w) || 1, G = (X - S) / U, Q = ($ - w) / U, j = d.falloff * f;
  if (d.squash > 0) {
    const R = Math.hypot(c.width * 0.5 - c.hotX, c.height - c.hotY) || 1, et = (c.width * 0.5 - c.hotX) / R, Z = (c.height - c.hotY) / R, ot = Math.max(0, -(G * et + Q * Z)), F = 1 + d.squash * ot;
    y *= F, m *= F;
  }
  const q = Math.ceil(Math.max(m, 1)) + 4, W = Math.floor(Math.min(v, v + G * y) - q), _ = Math.floor(Math.min(v, v + Q * y) - q), E = Math.ceil(Math.max(v, v + G * y) + c.width * f + q), L = Math.ceil(Math.max(v, v + Q * y) + c.height * f + q), k = Math.max(0, W), K = Math.max(0, _), V = Math.min(h, E) - k, rt = Math.min(p, L) - K;
  m > 0.01 ? (u4(m, d.taper, v, S, w, X, $), Ln.putImageData(eo, 0, 0, k, K, V, rt)) : (Ln.setTransform(1, 0, 0, 1, 0, 0), Ln.clearRect(0, 0, h, p), Ln.drawImage(Kn, v, v, c.width * f, c.height * f));
  const nt = _u, it = Ef;
  if (nt.setTransform(1, 0, 0, 1, 0, 0), nt.clearRect(0, 0, h, p), nt.globalAlpha = 1, nt.globalCompositeOperation = "source-over", nt.drawImage(qn, 0, 0), y > 0.5) {
    const R = v + c.width * f * 0.42, et = v + c.height * f * 0.5, Z = j / 2, ot = it.createLinearGradient(R - G * Z, et - Q * Z, R + G * Z, et + Q * Z);
    ot.addColorStop(0, "rgba(0,0,0,0)"), ot.addColorStop(1, "rgba(0,0,0,1)");
    for (let F = lb; F >= 1; F--) {
      const ct = F / lb;
      it.setTransform(1, 0, 0, 1, 0, 0), it.globalCompositeOperation = "source-over", it.globalAlpha = 1, it.clearRect(k, K, V, rt), it.drawImage(qn, k, K, V, rt, k + G * y * ct, K + Q * y * ct, V, rt), it.globalCompositeOperation = "destination-in", it.fillStyle = ot, it.fillRect(k, K, V, rt), nt.globalCompositeOperation = "destination-over", nt.globalAlpha = Math.pow(1 - ct, 1.6) * 0.9, d.blur > 0 && (nt.filter = `blur(${(d.blur * Math.sqrt(ct) * f).toFixed(2)}px)`), nt.drawImage(Fi, k, K, V, rt, k, K, V, rt);
    }
    nt.filter = "none", nt.globalAlpha = 1, nt.globalCompositeOperation = "source-over";
  }
  al.style.transform = `translate3d(${(jf - c.hotX - Un).toFixed(2)}px,${(kf - c.hotY - Un).toFixed(2)}px,0)`, ro || (al.style.display = "", ro = !0);
}
function Zf(r) {
  if (un = 0, !oo) return;
  const i = performance.now();
  try {
    c4(r);
  } catch (c) {
    zr = !0, qf = `disabled after an error (${c instanceof Error ? c.message : String(c)})`, Jn(), sa = null, typeof console < "u" && console.warn("thinking-orbs: gravity disabled after error", c);
    return;
  }
  const u = performance.now() - i;
  u > 12 ? ++Lf >= 30 && !zr && (zr = !0, qf = `disabled after slow frames (~${Math.round(u)}ms each)`, Jn()) : Lf = 0;
}
function c4(r) {
  const i = Math.min(0.05, Math.max(1e-3, (r - Bf) / 1e3));
  Bf = r, Gf++;
  let u = null, c = 0;
  if (!Number.isNaN(Ua) && t4()) {
    let p = Number.POSITIVE_INFINITY;
    for (const g of Pi) {
      if (!g.el.isConnected) continue;
      const z = g.el.getBoundingClientRect();
      if (z.width <= 0) continue;
      const y = z.left + z.width / 2, m = z.top + z.height / 2, v = Math.min(z.width, z.height) / 2, S = wu(g).reach;
      if (Ua < y - v - S || Ua > y + v + S || Gn < m - v - S || Gn > m + v + S) continue;
      const w = Math.hypot(Ua - y, Gn - m) - v;
      w <= S && w < p && (p = w, u = g, Qn.cx = y, Qn.cy = m, Qn.r = v);
    }
    if (u) {
      const g = 1 - Math.max(0, p) / wu(u).reach;
      c = g * g * (3 - 2 * g), ab = r;
    }
  }
  const d = sa ?? u, f = d ? wu(d).fadeMs : Ta.fadeMs, h = 1 - Math.exp(-(i * 1e3) / (f / 3));
  if (ln += (c - ln) * h, u && u !== sa && (sa = u), !u && ln < 2e-3) {
    if (ln = 0, sa && wr && !Cr && Tu && !Mr && !Number.isNaN(Ua)) {
      if (r - ab < o4) {
        eb(Ua, Gn) ? ob(sa, 0, i) : Sr(), un = requestAnimationFrame(Zf);
        return;
      }
      if (ro) {
        l1(), Cr = !0, sa = null;
        return;
      }
    }
    sa = null, Jn();
    return;
  }
  sa && (ln > 2e-3 && Tu && !Mr && !Number.isNaN(Ua) && l4() && eb(Ua, Gn) ? a1 === e1 && Gf - Wb < 2 && !ro ? Sr() : ob(sa, ln, i) : ln > 2e-3 && !Number.isNaN(Ua) && Tu && !Mr ? Sr() : Jn(), un = requestAnimationFrame(Zf));
}
function s4(r) {
  if (!r) return;
  const i = r.trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (i) {
    let c = i[1];
    c.length === 3 && (c = c.replace(/./g, (f) => f + f));
    const d = parseInt(c, 16);
    return { r: d >> 16 & 255, g: d >> 8 & 255, b: d & 255 };
  }
  const u = r.trim().match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  if (u) return { r: Number(u[1]), g: Number(u[2]), b: Number(u[3]) };
}
const f4 = {
  working: "Working…",
  searching: "Searching…",
  solving: "Solving…",
  listening: "Listening…",
  connecting: "Connecting…",
  weaving: "Weaving…",
  composing: "Composing…",
  breathing: "Thinking…",
  shaping: "Shaping…"
};
function Kb({
  state: r = "working",
  size: i = 64,
  theme: u = "auto",
  speed: c = 1,
  paused: d = !1,
  color: f,
  dots: h = 1,
  dotSize: p = 1,
  opts: g,
  frame: z,
  gravity: y,
  style: m,
  "aria-label": v,
  ...S
}) {
  const w = gt.useRef(null), X = g ? JSON.stringify(g) : "", $ = Kv(u, w), U = y ? JSON.stringify(y) : "";
  gt.useEffect(() => {
    const Q = w.current;
    if (!(!Q || !y))
      return Iv(Q, y === !0 ? !0 : y);
  }, [U]);
  const G = Jv();
  return gt.useEffect(() => {
    const Q = w.current;
    if (!Q) return;
    const j = Math.min(2, typeof devicePixelRatio < "u" && devicePixelRatio || 1);
    Q.width = Math.round(i * j), Q.height = Math.round(i * j);
    const q = Q.getContext("2d");
    if (!q) return;
    const { mode: W, speed: _, opts: E } = Zv(r, i);
    let L = h !== 1 ? Lb(E, Math.max(0.1, h)) : E;
    p !== 1 && (L = Bb(L, Math.max(0.1, p))), g && (L = { ...L, ...g });
    const k = z ?? Gb[W], K = s4(f), V = _ * c, rt = (ft) => {
      q.setTransform(j, 0, 0, j, 0, 0), q.clearRect(0, 0, i, i), qb(q, k(i, ft, L), $, K);
    };
    if (G) {
      rt(0.6);
      return;
    }
    let nt = 0, it = !1;
    const R = () => {
      rt(performance.now() / 1e3 * V), it && (nt = requestAnimationFrame(R));
    }, et = () => {
      it || d || (it = !0, nt = requestAnimationFrame(R));
    }, Z = () => {
      it = !1, cancelAnimationFrame(nt);
    };
    rt(performance.now() / 1e3 * V);
    let ot = !0;
    const F = typeof IntersectionObserver < "u" ? new IntersectionObserver(([ft]) => {
      ot = ft.isIntersecting, ot && document.visibilityState !== "hidden" ? et() : Z();
    }) : null;
    F?.observe(Q);
    const ct = () => {
      document.visibilityState === "hidden" ? Z() : ot && et();
    };
    return document.addEventListener("visibilitychange", ct), F || et(), () => {
      Z(), F?.disconnect(), document.removeEventListener("visibilitychange", ct);
    };
  }, [r, i, $, c, d, G, f, h, p, X, z]), /* @__PURE__ */ Tt.jsx(
    "canvas",
    {
      ref: w,
      role: "img",
      "aria-label": v ?? f4[r],
      style: { width: i, height: i, display: "block", ...m },
      ...S
    }
  );
}
function Jb(r) {
  const i = r.trim(), u = i.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (u) {
    const d = u[1].length === 3 ? u[1].split("").map((f) => f + f).join("") : u[1];
    return [parseInt(d.slice(0, 2), 16), parseInt(d.slice(2, 4), 16), parseInt(d.slice(4, 6), 16)];
  }
  const c = i.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)/i);
  return c ? [Math.round(+c[1]), Math.round(+c[2]), Math.round(+c[3])] : null;
}
function d4(r) {
  const i = Jb(r);
  return i ? `rgb(${i[0]}, ${i[1]}, ${i[2]})` : null;
}
function bu(r) {
  const i = Jb(r);
  return i ? `${i[0]}, ${i[1]}, ${i[2]}` : null;
}
const h4 = {
  dark: {
    strokeOpacity: 1.16,
    innerOpacity: 0.47,
    bloomOpacity: 0.89,
    innerShadow: "rgba(255, 255, 255, 0.1)",
    saturation: 1.2,
    brightness: 1.1
  },
  // Light sits on a white surface: the deep light palettes at far higher
  // opacity than the dark preset's pastels need, a touch less saturation
  // and no brightness lift (which would wash them toward white).
  light: {
    strokeOpacity: 1.2,
    innerOpacity: 0.85,
    bloomOpacity: 0.5,
    innerShadow: "rgba(0, 0, 0, 0.08)",
    saturation: 1.6,
    brightness: 0.95,
    // A wider, quicker hue drift on white, nudged 5° warmer.
    hueRange: 40,
    hueDuration: 8.5,
    hueBase: 5,
    // Tuned in the Studio on the chat input.
    strength: 0.8,
    bandStrength: 1.7
  }
}, uo = [
  { x: 0, w: 74, h: 46, band: 0 },
  { x: -36, w: 54, h: 40, band: 1 },
  { x: 36, w: 54, h: 40, band: 1 },
  { x: -72, w: 48, h: 32, band: 2 },
  { x: 72, w: 48, h: 32, band: 2 },
  { x: -108, w: 42, h: 26, band: 1 },
  { x: 108, w: 42, h: 26, band: 1 }
], b4 = 36, g4 = b4 * uo.length, m4 = {
  colorful: {
    dark: [
      "rgb(255, 70, 120)",
      "rgb(60, 190, 255)",
      "rgb(175, 70, 255)",
      "rgb(60, 220, 130)",
      "rgb(255, 150, 40)",
      "rgb(90, 100, 255)",
      "rgb(40, 200, 190)"
    ],
    // Candy on white: pinks, sky, lavender, mint, peach, periwinkle,
    // aqua — pastel bodies that the light preset's saturation lifts.
    // Candy on white: gold, sky, violet, rose, peach, periwinkle, aqua —
    // tuned in the Studio; the light preset's saturation lifts them.
    light: [
      "rgb(255, 201, 21)",
      "rgb(126, 196, 255)",
      "rgb(180, 40, 230)",
      "rgb(235, 100, 160)",
      "rgb(255, 176, 122)",
      "rgb(154, 160, 255)",
      "rgb(127, 217, 238)"
    ]
  },
  mono: {
    dark: [
      "rgb(215, 215, 215)",
      "rgb(180, 180, 180)",
      "rgb(190, 190, 190)",
      "rgb(160, 160, 160)",
      "rgb(170, 170, 170)",
      "rgb(150, 150, 150)",
      "rgb(155, 155, 155)"
    ],
    light: [
      "rgb(60, 60, 60)",
      "rgb(90, 90, 90)",
      "rgb(85, 85, 85)",
      "rgb(110, 110, 110)",
      "rgb(105, 105, 105)",
      "rgb(125, 125, 125)",
      "rgb(120, 120, 120)"
    ]
  },
  ocean: {
    dark: [
      "rgb(80, 140, 255)",
      "rgb(40, 200, 230)",
      "rgb(120, 90, 255)",
      "rgb(30, 170, 210)",
      "rgb(160, 80, 240)",
      "rgb(60, 110, 255)",
      "rgb(40, 190, 180)"
    ],
    light: [
      "rgb(40, 100, 240)",
      "rgb(20, 160, 200)",
      "rgb(90, 60, 230)",
      "rgb(20, 130, 180)",
      "rgb(130, 50, 220)",
      "rgb(40, 80, 230)",
      "rgb(20, 150, 150)"
    ]
  },
  sunset: {
    dark: [
      "rgb(255, 110, 60)",
      "rgb(255, 180, 40)",
      "rgb(255, 60, 90)",
      "rgb(255, 210, 80)",
      "rgb(240, 70, 140)",
      "rgb(255, 140, 50)",
      "rgb(230, 50, 110)"
    ],
    light: [
      "rgb(235, 80, 30)",
      "rgb(230, 150, 10)",
      "rgb(230, 30, 70)",
      "rgb(225, 175, 30)",
      "rgb(215, 40, 110)",
      "rgb(235, 110, 20)",
      "rgb(205, 30, 90)"
    ]
  },
  forest: {
    dark: [
      "rgb(70, 220, 120)",
      "rgb(40, 200, 180)",
      "rgb(140, 230, 80)",
      "rgb(30, 170, 140)",
      "rgb(190, 235, 70)",
      "rgb(50, 190, 110)",
      "rgb(30, 150, 120)"
    ],
    light: [
      "rgb(30, 170, 80)",
      "rgb(20, 150, 130)",
      "rgb(90, 180, 30)",
      "rgb(20, 130, 100)",
      "rgb(130, 180, 20)",
      "rgb(30, 150, 80)",
      "rgb(20, 120, 90)"
    ]
  },
  candy: {
    dark: [
      "rgb(255, 90, 170)",
      "rgb(255, 120, 220)",
      "rgb(210, 80, 255)",
      "rgb(255, 150, 190)",
      "rgb(180, 110, 255)",
      "rgb(255, 70, 140)",
      "rgb(230, 100, 240)"
    ],
    light: [
      "rgb(235, 40, 140)",
      "rgb(230, 70, 190)",
      "rgb(180, 40, 230)",
      "rgb(235, 100, 160)",
      "rgb(150, 70, 230)",
      "rgb(230, 30, 110)",
      "rgb(200, 60, 210)"
    ]
  },
  ice: {
    dark: [
      "rgb(150, 230, 255)",
      "rgb(90, 200, 255)",
      "rgb(190, 240, 255)",
      "rgb(120, 190, 255)",
      "rgb(160, 220, 250)",
      "rgb(80, 170, 255)",
      "rgb(200, 235, 255)"
    ],
    light: [
      "rgb(30, 160, 220)",
      "rgb(20, 130, 210)",
      "rgb(60, 180, 230)",
      "rgb(40, 120, 220)",
      "rgb(50, 160, 220)",
      "rgb(20, 110, 220)",
      "rgb(70, 170, 230)"
    ]
  },
  gold: {
    dark: [
      "rgb(255, 200, 70)",
      "rgb(255, 170, 40)",
      "rgb(255, 220, 110)",
      "rgb(240, 150, 30)",
      "rgb(255, 235, 140)",
      "rgb(230, 160, 40)",
      "rgb(250, 210, 90)"
    ],
    light: [
      "rgb(200, 140, 10)",
      "rgb(190, 120, 0)",
      "rgb(210, 160, 30)",
      "rgb(180, 110, 0)",
      "rgb(205, 170, 40)",
      "rgb(175, 115, 5)",
      "rgb(195, 150, 20)"
    ]
  }
};
function p4(r, i) {
  const u = r.match(/^rgb\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
  return u ? `rgba(${u[1]}, ${u[2]}, ${u[3]}, ${i.toFixed(2)})` : r;
}
function Af(r, i = 1) {
  return Math.max(0.5, Math.round(r * i * 100) / 100);
}
function v4(r, i) {
  return `calc(50% + (var(--vb-cx-${i}) + var(--vb-x${r}-${i})) * var(--vb-w-${i}) * var(--vb-z-${i}, 1))`;
}
function Of({ id: r, colors: i, alpha: u, sw: c, sh: d, y: f, fade: h, count: p }) {
  return (p ? uo.slice(0, p) : uo).map((g, z) => {
    const y = u >= 1 ? i[z % i.length] : p4(i[z % i.length], u), m = `calc(${Math.round(g.w * c)}px * var(--vb-w-${r}) * var(--vb-z-${r}, 1))`, v = `calc(${Math.round(g.h * d)}px * var(--vb-h-${r}) * var(--vb-l${z}-${r}) * var(--vb-z-${r}, 1))`, S = `calc(100% + (${f}px + var(--vb-y${z}-${r})) * var(--vb-z-${r}, 1))`;
    return `radial-gradient(ellipse ${m} ${v} at ${v4(z, r)} ${S}, ${y} 0%, transparent ${h}%)`;
  }).join(`,
    `);
}
function y4(r) {
  const {
    id: i,
    borderRadius: u,
    borderWidth: c,
    strokeOpacity: d,
    innerOpacity: f,
    bloomOpacity: h,
    innerShadow: p,
    colorVariant: g,
    colors: z,
    brightness: y,
    saturation: m,
    theme: v,
    hueBase: S = 0,
    glowSize: w = 1,
    glowWidth: X = 1,
    glowHeight: $ = 1,
    strokeScale: U = 1,
    innerScale: G = 1,
    innerHeight: Q = 1,
    bloomScale: j = 1,
    bloomHeight: q = 1,
    coreSize: W = 1,
    coreLight: _ = 0,
    coreLightWidth: E = 1,
    coreLightHeight: L = 1,
    rangeWidth: k = 1,
    rangeHeight: K = 1,
    softness: V = 1,
    distortion: rt = !1,
    scale: nt = 1
  } = r, it = Math.round(28 * nt * 10) / 10, R = Math.round(9 * nt * 10) / 10, et = Math.max(0, u - c), Z = Math.round(Math.max(40, Math.min(95, 70 * V))), ot = (Nt) => X * Nt, F = (Nt) => $ * Nt, ct = (Nt) => Math.round(Nt * 10) / 10, ft = `var(--vb-z-${i}, 1)`, bt = (Nt) => `calc(${ct(Nt)}px * ${ft})`, M = v === "dark", B = m4[g][M ? "dark" : "light"].map((Nt, Zt) => {
    const Qt = z?.[Zt];
    return Qt && d4(Qt) || Nt;
  }), ut = g === "mono" ? 0.6 : 1, Y = (d * ut).toFixed(2), lt = (f * ut).toFixed(2), st = (h * ut).toFixed(2), tt = y.toFixed(2), J = m.toFixed(2), at = `hue-rotate(calc(var(--voice-hue-base, ${S}deg) + var(--vb-hue-${i})))`, ht = rt ? ` url(#vb-distort-${i})` : "", yt = `filter: ${at} brightness(${tt}) saturate(${J});`, Mt = `filter: ${at} brightness(${tt}) saturate(${J})${ht};`, $t = `filter: blur(${bt(Af(10, w))}) ${at} brightness(${tt}) saturate(${J});`, wt = `filter: blur(${bt(Af(10, w))}) ${at} brightness(${tt}) saturate(${J})${ht};`, pt = `calc(50% + var(--vb-cx-${i}) * var(--vb-w-${i}) * ${ft})`, Dt = `calc(100% + (2px + var(--vb-cy-${i})) * ${ft})`, Gt = M ? `radial-gradient(ellipse calc(${ct(30 * W)}px * var(--vb-w-${i}) * ${ft}) calc(${ct(30 * W)}px * var(--vb-h-${i}) * ${ft}) at ${pt} ${Dt}, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.14) 30%, transparent 65%)` : `radial-gradient(ellipse calc(${ct(40 * W)}px * var(--vb-w-${i}) * ${ft}) calc(${ct(30 * W)}px * var(--vb-h-${i}) * ${ft}) at ${pt} ${Dt}, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.22) 35%, transparent 70%)`, Et = Of({ id: i, colors: B, alpha: 1, sw: ot(U), sh: F(U), y: 2, fade: Z }), Ht = Of({ id: i, colors: B, alpha: 0.46, sw: ot(0.9 * G), sh: F(0.9 * G * Q), y: 0, fade: Z }), Jt = Of({ id: i, colors: B, alpha: M ? 0.9 : 0.7, sw: ot(1.15 * j), sh: F(1.5 * j * q), y: 0, fade: Math.min(95, Z + 2) }), Vt = (Nt, Zt, Qt, ne = 0) => `radial-gradient(ellipse calc(${ct(Nt * k)}px * var(--vb-w-${i}) * var(--vb-mw-${i}) * ${ft}) calc((${ct(Zt * K)}px * var(--vb-h-${i}) + var(--vb-bh-${i})) * ${ft}) at ${pt} calc(100% + var(--vb-cy-${i}) * ${ft}), white 0%, rgba(255, 255, 255, 0.5) ${Qt}%${ne > 0 ? `, rgba(255, 255, 255, ${ne}) 85%` : ""}, transparent 100%)`, oe = (Nt, Zt) => `opacity: calc(var(--vb-opacity-${i}, 1) * var(--vb-glow-${i}) * ${Zt} * var(--voice-${Nt}-opacity, 1) * var(--voice-strength, 1));`, re = (Nt, Zt, Qt, ne) => `${Nt} {
  ${Zt}
  position: absolute;
  inset: 0;
  border-radius: ${bt(u)};
  background: ${Ht};
  box-shadow: inset 0 0 ${bt(R)} 1px ${p};
  -webkit-mask-image:
    ${Vt(170, 64, 45, 0.3)},
    linear-gradient(white, transparent ${bt(it)}, transparent calc(100% - ${it}px * ${ft}), white),
    linear-gradient(to right, white, transparent ${bt(it)}, transparent calc(100% - ${it}px * ${ft}), white);
  -webkit-mask-composite: source-in, source-over;
  mask-image:
    ${Vt(170, 64, 45, 0.3)},
    linear-gradient(white, transparent ${bt(it)}, transparent calc(100% - ${it}px * ${ft}), white),
    linear-gradient(to right, white, transparent ${bt(it)}, transparent calc(100% - ${it}px * ${ft}), white);
  mask-composite: intersect, add;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 1;
  ${Qt}
  ${oe("inner", lt)}
  ${ne}
}`;
  return `
@property --vb-opacity-${i} {
  syntax: "<number>";
  initial-value: 0;
  inherits: true;
}

[data-voice-beam="${i}"] {
  position: relative;
  border-radius: ${u}px;
  overflow: hidden;
  --vb-h-${i}: 0.8;
  --vb-w-${i}: 1;
${uo.map((Nt, Zt) => `  --vb-x${Zt}-${i}: ${Nt.x}px;
  --vb-l${Zt}-${i}: 1;
  --vb-y${Zt}-${i}: 0px;`).join(`
`)}
  --vb-glow-${i}: 0.4;
  --vb-z-${i}: 1;
  --vb-cx-${i}: 0px;
  --vb-cy-${i}: 0px;
  --vb-bh-${i}: 0px;
  --vb-bendA-${i}: 0;
  --vb-mw-${i}: 1;
  --vb-hue-${i}: 0deg;
  --vb-level-${i}: 0;
}

[data-voice-beam="${i}"][data-active] {
  animation: vb-fade-in-${i} 0.6s ease forwards;
}

[data-voice-beam="${i}"][data-fading] {
  animation: vb-fade-out-${i} 0.5s ease forwards;
}

/* Stroke — the colours painted into the 1px edge ring, masked to the centred ellipse. */
[data-voice-beam="${i}"][data-active]::after,
[data-voice-beam="${i}"][data-fading]::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: ${bt(et)};
  padding: ${bt(c)};
  clip-path: inset(0 round ${bt(u)});
  background:
    ${Gt},
    ${Et};
  -webkit-mask:
    ${Vt(170, 64, 45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: source-in, xor;
  mask:
    ${Vt(170, 64, 45)},
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask-composite: intersect, exclude;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 2;
  ${oe("stroke", Y)}
  ${yt}
}

/* Inner glow — soft light inside the element, faded off at the corners.
   With distortion on, this copy is clipped to ABOVE the band line (the
   polygon the driver writes each frame) and a mirror layer below carries
   the displacement filter, so only the glow under the line warps. */
${re(`[data-voice-beam="${i}"][data-active]::before,
[data-voice-beam="${i}"][data-fading]::before`, 'content: "";', rt ? `clip-path: var(--vb-clip-above-${i}, inset(0 round ${u}px));` : `clip-path: inset(0 round ${u}px);`, yt)}
${rt ? re(`[data-voice-beam="${i}"][data-active] [data-voice-beam-warp="inner"],
[data-voice-beam="${i}"][data-fading] [data-voice-beam-warp="inner"]`, "display: block;", `clip-path: var(--vb-clip-below-${i}, inset(0 round ${u}px));`, Mt) : ""}

/* Bloom — the blurred halo, tallest of the three, above the content. */
[data-voice-beam="${i}"] [data-voice-beam-bloom],
[data-voice-beam="${i}"] [data-voice-beam-warp] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${bt(et)};
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  opacity: 0;
}

[data-voice-beam="${i}"] [data-voice-beam-bloom],
[data-voice-beam="${i}"] [data-voice-beam-warp="bloom"] {
  -webkit-mask: ${Vt(200, 130, 35)};
  mask: ${Vt(200, 130, 35)};
  background: ${Jt};
  z-index: 3;
}

[data-voice-beam="${i}"][data-active] [data-voice-beam-bloom],
[data-voice-beam="${i}"][data-fading] [data-voice-beam-bloom] {
  display: block;
  clip-path: ${rt ? `var(--vb-clip-above-${i}, inset(0 round ${u}px))` : `inset(0 round ${u}px)`};
  ${oe("bloom", st)}
  ${$t}
}
${rt ? `
[data-voice-beam="${i}"][data-active] [data-voice-beam-warp="bloom"],
[data-voice-beam="${i}"][data-fading] [data-voice-beam-warp="bloom"] {
  display: block;
  clip-path: var(--vb-clip-below-${i}, inset(0 round ${u}px));
  ${oe("bloom", st)}
  ${wt}
}

/* Processing drops the distortion: the driver marks the wrapper once the
   warp has faded out, the warp layers leave the paint and the base layers
   give up their split at the band line. */
[data-voice-beam="${i}"][data-voice-warp="off"]::before,
[data-voice-beam="${i}"][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${u}px);
}

[data-voice-beam="${i}"][data-voice-warp="off"] [data-voice-beam-warp] {
  display: none;
}` : ""}

/* Epicentre — a soft white wash at the source, under the band line (the
   driver's clip; unclipped when no line is drawn), sitting above every
   glow layer and the band's halo so the centre reads lighter than the
   band (same z as the band canvases, painted after them). Sized by the voice like the
   other layers; off unless \`coreLight\` is set (the light theme sets it).
   Up to 1 it is the wash's opacity; past 1 the solid white core widens
   too, for a centre that stays lighter than a strong band. It follows the
   glow's presence but not \`strength\`, which would only dim it. */
${_ > 0 ? (() => {
    const Nt = Math.max(0, Math.min(2, _ - 1)), Zt = Math.min(1, Nt), Qt = Math.max(0, Nt - 1), ne = 1 + 0.3 * Nt, fa = ct(45 * Zt + 27 * Qt), La = ct(40 + 25 * Zt + 15 * Qt), Yt = Math.min(1, 0.55 + 0.35 * Zt + 0.1 * Qt).toFixed(2), Lt = ct(72 + 14 * Zt + 8 * Qt);
    return `[data-voice-beam="${i}"] [data-voice-beam-core] {
  display: none;
  position: absolute;
  inset: 0;
  border-radius: ${bt(et)};
  overflow: hidden;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  /* The blur sits on this wrapper and the band-line clip on the child,
     so the cut edge is blurred too rather than left hard. */
  filter: blur(${bt(Af(8, w))});
  z-index: 4;
}

[data-voice-beam="${i}"] [data-voice-beam-core] > div {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse calc(${ct(120 * E * ne * nt)}px * var(--vb-w-${i}) * ${ft}) calc((${ct(70 * L * ne * nt)}px * var(--vb-h-${i}) + var(--vb-bh-${i})) * ${ft}) at ${pt} calc(100% + var(--vb-cy-${i}) * ${ft}), white 0%, white ${fa}%, rgba(255, 255, 255, ${Yt}) ${La}%, transparent ${Lt}%);
  clip-path: var(--vb-clip-below-${i}, none);
}

[data-voice-beam="${i}"][data-active] [data-voice-beam-core],
[data-voice-beam="${i}"][data-fading] [data-voice-beam-core] {
  display: block;
  opacity: calc(var(--vb-opacity-${i}, 1) * min(1, var(--vb-glow-${i}) * ${Math.min(1, _).toFixed(2)} * ${(1.6 + 1.4 * Nt).toFixed(2)}) * var(--voice-core-light-opacity, 1));
}
`;
  })() : ""}
/* Band — the canvas the driver draws the bend's contour on: an organic
   bell with chromatic fringes. Fades with the root, follows the strength
   and turns with the hue drift like the other layers. */
[data-voice-beam="${i}"] [data-voice-beam-band],
[data-voice-beam="${i}"] [data-voice-beam-band-halo] {
  display: none;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  /* Its own compositing layer: WebKit otherwise re-rasterizes the
     filtered layer into the parent every frame on the CPU (a phone-sized
     host runs at a sixth of the frame rate without this). */
  will-change: transform;
  z-index: 4;
}

[data-voice-beam="${i}"][data-active] [data-voice-beam-band],
[data-voice-beam="${i}"][data-fading] [data-voice-beam-band],
[data-voice-beam="${i}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${i}"][data-fading] [data-voice-beam-band-halo] {
  display: block;
  opacity: calc(var(--vb-opacity-${i}, 1) * var(--voice-band-opacity, 1) * var(--voice-strength, 1));
  /* The blur vars are 0 where the canvas blurs its own strokes; where the
     2D context has no filter (WebKit) the driver sets them and the layers
     are blurred here instead — the ridge on the band canvas, its wider
     halo on the canvas beneath. */
  filter: blur(var(--vb-band-blur-${i}, 0px)) ${at} brightness(${tt}) saturate(${J});
}

[data-voice-beam="${i}"][data-active] [data-voice-beam-band-halo],
[data-voice-beam="${i}"][data-fading] [data-voice-beam-band-halo] {
  filter: blur(var(--vb-band-halo-blur-${i}, 0px)) ${at} brightness(${tt}) saturate(${J});
}

/* Resolution. The soft layers — inner light and its warp mirror, bloom and
   its mirror, the epicentre — are rastered at half size and scaled back
   up by the compositor: the box is halved, every length inside rides the
   layer's factor \`--vb-z\` at 0.5 (the driver also writes the band-line
   clips at half scale), and the will-change transform is rastered
   pre-scale where the engine does that (Chromium, Safari 18). For blurred
   gradients that is the same picture at a quarter of the raster and
   filter work, which is what a phone at 3x runs out of. The 1px stroke
   stays full-res on every screen: at half size it is half a CSS pixel,
   which a 3x phone rasters into a faint smear instead of the hairline,
   and the layer is cheap (no blur). The component sets
   \`data-voice-halfres\`. */
[data-voice-beam="${i}"][data-voice-halfres]::before,
[data-voice-beam="${i}"][data-voice-halfres] [data-voice-beam-warp],
[data-voice-beam="${i}"][data-voice-halfres] [data-voice-beam-bloom],
[data-voice-beam="${i}"][data-voice-halfres] [data-voice-beam-core] {
  --vb-z-${i}: 0.5;
  inset: auto;
  left: 0;
  top: 0;
  width: 50%;
  height: 50%;
  transform: translateZ(0) scale(2);
  transform-origin: 0 0;
}
${rt ? `[data-voice-beam="${i}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${i}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${i}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${i}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: var(--vb-clip-above-z-${i}, inset(0 round ${bt(u)}));
}
[data-voice-beam="${i}"][data-voice-halfres][data-active] [data-voice-beam-warp],
[data-voice-beam="${i}"][data-voice-halfres][data-fading] [data-voice-beam-warp] {
  clip-path: var(--vb-clip-below-z-${i}, inset(0 round ${bt(u)}));
}
/* Processing (warp off): the mirrors are gone, so the base layers paint
   the whole box again — this must outweigh the split above. */
[data-voice-beam="${i}"][data-voice-halfres][data-voice-warp="off"]::before,
[data-voice-beam="${i}"][data-voice-halfres][data-voice-warp="off"] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${bt(u)});
}` : `[data-voice-beam="${i}"][data-voice-halfres][data-active]::before,
[data-voice-beam="${i}"][data-voice-halfres][data-fading]::before,
[data-voice-beam="${i}"][data-voice-halfres][data-active] [data-voice-beam-bloom],
[data-voice-beam="${i}"][data-voice-halfres][data-fading] [data-voice-beam-bloom] {
  clip-path: inset(0 round ${bt(u)});
}`}
[data-voice-beam="${i}"][data-voice-halfres] [data-voice-beam-core] > div {
  clip-path: var(--vb-clip-below-z-${i}, none);
}
@keyframes vb-fade-in-${i} {
  to { --vb-opacity-${i}: 1; }
}

@keyframes vb-fade-out-${i} {
  from { --vb-opacity-${i}: 1; }
  to { --vb-opacity-${i}: 0; }
}

[data-voice-beam="${i}"][data-paused],
[data-voice-beam="${i}"][data-paused]::after,
[data-voice-beam="${i}"][data-paused]::before,
[data-voice-beam="${i}"][data-paused] [data-voice-beam-bloom] {
  animation-play-state: paused !important;
}
`;
}
let yr = null;
function x4() {
  if (typeof window > "u") return null;
  const r = window;
  return r.AudioContext ?? r.webkitAudioContext ?? null;
}
function z4() {
  const r = x4();
  return r ? (yr || (yr = new r()), yr.state === "suspended" && yr.resume().catch(() => {
  }), yr) : null;
}
const Hf = /* @__PURE__ */ new WeakMap();
function M4(r) {
  const i = z4();
  if (!i || r.getAudioTracks().length === 0) return null;
  let u = Hf.get(r);
  u || (u = { node: i.createMediaStreamSource(r), refs: 0 }, Hf.set(r, u)), u.refs += 1;
  const c = i.createAnalyser();
  c.fftSize = 1024, c.smoothingTimeConstant = 0.5, u.node.connect(c);
  let d = !1;
  return {
    analyser: c,
    release: () => {
      if (!d) {
        d = !0;
        try {
          u.node.disconnect(c);
        } catch {
        }
        if (u.refs -= 1, u.refs <= 0) {
          try {
            u.node.disconnect();
          } catch {
          }
          Hf.delete(r);
        }
      }
    }
  };
}
const rb = /* @__PURE__ */ new WeakMap();
function S4(r) {
  let i = rb.get(r);
  return i || (i = { level: 0, bands: [0, 0, 0], phase: 0, scanA: 0, scanT: 0, t: 0, lastTs: 0, warp: 1 }, rb.set(r, i)), i;
}
const Du = /* @__PURE__ */ new Set();
let io = null, Qf = 0;
const $4 = 1e3 / 60 - 2, T4 = 22, w4 = 500, C4 = 4e3;
let Cu = 0, Nf = !1, gu = !1, Ii = 0, ub = 0;
const Fb = Math.PI * 2, E4 = 5, A4 = 1.7, O4 = [
  [80, 300],
  [300, 2e3],
  [2e3, 6e3]
];
function Ib(r) {
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function H4(r, i) {
  const u = i / 2;
  return ((r + u) % i + i) % i - u;
}
function N4(r, i) {
  const u = r / (i / 2 + 4);
  return Math.max(0, 1 - u * u);
}
function cb(r, i) {
  if (r <= i) return 0;
  const u = (r - i) / Math.max(1e-3, 1 - i);
  return Ib((1 - Math.exp(-3 * u)) / (1 - Math.exp(-3)));
}
function mu(r, i, u, c, d) {
  const f = i > r ? c : d, h = 1 - Math.exp(-u / Math.max(1e-3, f));
  return r + (i - r) * h;
}
const Y4 = 2, _4 = 0.06, D4 = 0.35, R4 = 0.03, X4 = !(typeof navigator < "u" && /AppleWebKit/.test(navigator.userAgent) && !/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent)), sb = 0.05, U4 = 6, q4 = 12, L4 = 0.1, fb = 0.1, B4 = 170, j4 = 64, db = 56;
function k4(r, i, u, c) {
  const d = r < 0 ? 1 - c : 1 + c, f = Math.max(0.05, u * d), h = Math.exp(-Math.pow(Math.abs(r) / f, i)), p = Math.exp(-Math.pow(1 / f, i));
  return Math.max(0, (h - p) / (1 - p));
}
function G4(r, i, u, c, d) {
  if (u <= 0 || i <= 0) return 0;
  const f = i * Math.max(0, Math.min(0.98, c));
  if (r <= f) return 0;
  const h = Math.min(1, (r - f) / Math.max(1, i - f));
  return u * Math.pow(h, Math.max(0.5, d));
}
function Pb(r, i, u) {
  return Math.max(0, Math.min(r, i / 2, u / 2));
}
function Wf(r, i, u, c = 0) {
  if (u <= 0) return 0;
  const d = Math.min(r, i - r) - c;
  if (d >= u) return 0;
  if (d <= 0) return u;
  const f = u - d;
  return u - Math.sqrt(Math.max(0, u * u - f * f));
}
function V4(r, i, u, c) {
  const d = u / 2 + i.cx * i.w, f = B4 * r.rangeWidth * i.w * i.mw, h = c * 0.82 * Math.min(1, r.scale), p = Math.min(h, (j4 * r.rangeHeight * i.h + i.lift) * r.bandPosition), g = c - r.bandOffset, z = Math.min(1, i.corner * 4), y = r.bandTail * (1 - z * z * (3 - 2 * z)), m = y > 1e-3, v = m ? r.bandTailOverflow : 0, S = m ? -v : d - f, w = m ? u + v : d + f, X = [];
  for (let $ = 0; $ <= db; $++) {
    const U = S + (w - S) * $ / db, G = Math.max(-1, Math.min(1, (U - d) / Math.max(1, f))), Q = (U < d ? d : u - d) + v, j = k4(G, r.bandCurve, r.bandSpread, r.bandSkew) + G4(Math.abs(U - d), Q, y, r.bandTailPosition, r.bandTailCurve), q = i.corner > 0 ? Wf(U, u, Pb(r.radius, u, c)) * i.corner : 0;
    X.push([U, g - p * j - q]);
  }
  return X;
}
function Z4(r, i, u, c, d) {
  for (const [f, h] of [["", 1], ["-z", 0.5]]) {
    const p = (m) => (m * h).toFixed(1) + "px", g = u.map(([m, v]) => `${p(m)} ${p(v)}`), z = `polygon(0 ${p(d)}, ${g.join(", ")}, ${p(c)} ${p(d)})`, y = `polygon(0 0, ${p(c)} 0, ${p(c)} ${p(d)}, ${g.slice().reverse().join(", ")}, 0 ${p(d)})`;
    r.style.setProperty(`--vb-clip-below${f}-${i}`, z), r.style.setProperty(`--vb-clip-above${f}-${i}`, y);
  }
}
function Q4(r, i, u) {
  let c = u;
  for (let p = 0; p < i.length; p++) i[p][1] < c && (c = i[p][1]);
  const d = Math.max(0, Math.min(0.9, Math.floor((c - U4) / u / sb) * sb));
  if (d === r.filterTop) return;
  r.filterTop = d;
  const f = 1 + Math.max(L4, q4 / u), h = r.filter;
  h.setAttribute("x", `${-fb * 100}%`), h.setAttribute("width", `${(1 + 2 * fb) * 100}%`), h.setAttribute("y", `${(d * 100).toFixed(0)}%`), h.setAttribute("height", `${((f - d) * 100).toFixed(1)}%`);
}
function W4(r, i, u) {
  const { canvas: c, ctx: d, el: f, config: h } = r;
  if (!c || !d) return;
  const p = f.clientWidth, g = f.clientHeight;
  if (!p || !g) return;
  const z = Math.min(Y4, typeof window < "u" && window.devicePixelRatio || 1), y = Math.round(p * z), m = Math.round(g * z);
  (c.width !== y || c.height !== m) && (c.width = y, c.height = m), d.setTransform(z, 0, 0, z, 0, 0), d.clearRect(0, 0, p, g);
  const v = r.haloCanvas, S = r.haloCtx;
  v && S && ((v.width !== y || v.height !== m) && (v.width = y, v.height = m), S.setTransform(z, 0, 0, z, 0, 0), S.clearRect(0, 0, p, g));
  const w = Math.min(1, 0.6 * h.bandStrength * i.strength);
  if (w < 5e-3 || h.bandWidth <= 0) return;
  const X = h.theme === "dark", $ = h.bandWidth * (1 + 0.35 * i.level), U = h.bandAberration * (0.35 + 0.65 * i.level), G = (4 + 12 * U) * h.scale, Q = 4 * U * h.scale, j = (Z, ot) => {
    d.beginPath(), d.moveTo(u[0][0] + Z, u[0][1] + ot);
    for (let F = 1; F < u.length; F++) d.lineTo(u[F][0] + Z, u[F][1] + ot);
  }, q = { r: h.bandColors.above, g: h.bandColors.mid, c: h.bandColors.core, b: h.bandColors.below }, W = (X ? 0.42 : 0.4) * w, _ = 14 * $, E = 3.5 * h.bandWidth / 2, L = E * z, k = typeof d.filter == "string", K = k ? "0px" : `${E.toFixed(2)}px`;
  r.cssBlur !== K && (f.style.setProperty(`--vb-band-blur-${h.id}`, K), f.style.setProperty(`--vb-band-halo-blur-${h.id}`, k ? "0px" : `${(E * 3).toFixed(2)}px`), r.cssBlur = K);
  const V = [
    [1, 0.16],
    [0.72, 0.2],
    [0.46, 0.26],
    [0.22, 0.34]
  ], rt = [
    { rgb: q.r, a: 1, ox: Q, oy: -G },
    { rgb: q.g, a: 0.55, ox: Q * 0.35, oy: -G * 0.35 },
    { rgb: q.b, a: 1, ox: -Q, oy: G },
    { rgb: q.c, a: 0.9, ox: 0, oy: 0 }
  ];
  d.lineCap = "round", d.lineJoin = "round", d.globalCompositeOperation = "source-over";
  const nt = u[0][0], it = u[u.length - 1][0], R = (Z, ot) => {
    const F = d.createLinearGradient(nt, 0, it, 0), ct = h.bandTail > 0 ? 0.015 : 0.18;
    return F.addColorStop(0, `rgba(${Z}, 0)`), F.addColorStop(ct, `rgba(${Z}, ${ot.toFixed(3)})`), F.addColorStop(1 - ct, `rgba(${Z}, ${ot.toFixed(3)})`), F.addColorStop(1, `rgba(${Z}, 0)`), F;
  }, et = !k && S ? S : d;
  k && (d.filter = `blur(${(L * 3).toFixed(1)}px)`), et.lineCap = "round", et.lineJoin = "round", et.strokeStyle = R(q.c, W * 0.3), et.lineWidth = _ * 2.2, et.beginPath(), et.moveTo(u[0][0], u[0][1]);
  for (let Z = 1; Z < u.length; Z++) et.lineTo(u[Z][0], u[Z][1]);
  et.stroke(), k && (d.filter = `blur(${L.toFixed(1)}px)`);
  for (const Z of rt)
    for (const [ot, F] of V)
      d.strokeStyle = R(Z.rgb, W * Z.a * F), d.lineWidth = Math.max(0.6, _ * ot), j(Z.ox, Z.oy), d.stroke();
  k && (d.filter = "none"), d.globalCompositeOperation = "source-over";
}
function K4(r) {
  return (1 - Math.cos(Fb * r)) / 2;
}
function J4(r, i) {
  const u = r.analyser, c = r.time, d = r.freq;
  u.getFloatTimeDomainData(c);
  let f = 0;
  for (let p = 0; p < c.length; p++) f += c[p] * c[p];
  i.level = Math.sqrt(f / c.length) * E4 * r.config.sensitivity, u.getByteFrequencyData(d);
  const h = u.context.sampleRate / u.fftSize;
  for (let p = 0; p < 3; p++) {
    const [g, z] = O4[p], y = Math.max(0, Math.floor(g / h)), m = Math.min(d.length - 1, Math.ceil(z / h));
    let v = 0;
    for (let w = y; w <= m; w++) v += d[w];
    const S = m >= y ? v / (m - y + 1) / 255 : 0;
    i.bands[p] = S * A4 * r.config.sensitivity;
  }
}
const Bn = { level: 0, bands: [0, 0, 0] };
function tg(r) {
  io = requestAnimationFrame(tg);
  const i = Cu ? r - Cu : 0;
  if (Cu = r, Nf) {
    if (gu = !gu, gu) return;
    r >= ub && (Nf = !1, Ii = 0);
  } else i > T4 ? Ii ? r - Ii > w4 && (Nf = !0, gu = !1, ub = r + C4) : Ii = r : Ii = 0;
  r - Qf < $4 || (Qf = r, Du.forEach((u) => {
    var c;
    const { el: d, config: f, source: h, s: p } = u, g = f.paused;
    if (g && u.paintedConfig === f) return;
    const z = g ? 0 : p.lastTs ? Math.min(0.05, (r - p.lastTs) / 1e3) : 1 / 60;
    p.lastTs = r, p.t += z;
    const y = p.t;
    if (!g) if (u.analyser)
      J4(u, Bn);
    else {
      const tt = h.getLevel ? Ib(h.getLevel()) : 0;
      Bn.level = tt, Bn.bands[0] = tt, Bn.bands[1] = tt * (0.72 + 0.28 * Math.sin(y * 9.1)), Bn.bands[2] = tt * (0.6 + 0.4 * Math.sin(y * 13.7 + 2));
    }
    const m = cb(Bn.level, f.threshold);
    p.level = mu(p.level, m, z, f.attack, f.release);
    for (let tt = 0; tt < 3; tt++) {
      const J = cb(Bn.bands[tt], f.threshold * 0.6);
      p.bands[tt] = mu(p.bands[tt], J, z, f.attack, f.release * 1.15);
    }
    const v = g4 * f.lobeSpacing;
    f.processing && p.scanA < 1e-3 && p.scanT === 0 && (p.scanT = Math.max(0.05, f.processingDuration) / 2);
    const S = Math.max(0.05, f.processingEase);
    p.scanA = mu(p.scanA, f.processing ? 1 : 0, z, S * 0.9, S * 0.8), f.processing ? p.scanT += z : p.scanA < 1e-3 && (p.scanT = 0);
    const w = p.scanA * p.scanA * (3 - 2 * p.scanA), X = d.clientWidth, $ = d.clientHeight, U = v / 2 * f.processingTravel, G = p.scanT / Math.max(0.05, f.processingDuration), Q = Math.floor(G), j = G - Q, q = Math.max(1, f.processingCurve), W = j < 0.5 ? 0.5 * Math.pow(2 * j, q) : 1 - 0.5 * Math.pow(2 - 2 * j, q), _ = f.reducedMotion ? 0 : Q % 2 === 0 ? 2 * W - 1 : 1 - 2 * W, E = w * U * _, L = 1 - w * 0.6, k = 1 - w * 0.45, K = 1 + w * 0.3 * (1 - _ * _), V = f.reducedMotion ? 0.5 : 0.5 + 0.5 * Math.sin(Fb * y / f.breatheDuration), rt = p.level + (1 - p.level) * f.idle * V, nt = Math.max(0, Math.min(1, (w - 0.25) / 0.75)), it = nt * nt * (3 - 2 * nt), R = Math.max(rt, f.processingLevel * it), et = 0.15 + 0.85 * R, Z = 0.5 + f.reach * R, ot = (0.85 + f.spread * R) * K;
    f.flow !== 0 && !f.reducedMotion && (p.phase = ((p.phase + f.flow * R * z) % v + v) % v), d.style.setProperty(`--vb-level-${f.id}`, p.level.toFixed(3)), d.style.setProperty(`--vb-cx-${f.id}`, `${E.toFixed(1)}px`), d.style.setProperty(`--vb-mw-${f.id}`, k.toFixed(3));
    const F = f.bend * R;
    d.style.setProperty(`--vb-bh-${f.id}`, `${Math.max(0, F).toFixed(1)}px`);
    const ct = f.bend > 0 ? Math.min(1, F / f.bend) : 0;
    d.style.setProperty(`--vb-bendA-${f.id}`, ct.toFixed(3));
    const ft = { cx: E, w: ot, h: Z, mw: k, lift: F, strength: ct, level: p.level, corner: w }, bt = X / 2 + E * ot, M = 30 * f.scale * ot, B = Pb(f.radius, X, $), ut = w * f.cornerFollow;
    d.style.setProperty(`--vb-cy-${f.id}`, `${(-Wf(bt, X, B, M * 1.4) * ut).toFixed(1)}px`), p.warp = mu(p.warp, f.processing ? 0 : 1, z, D4, _4);
    const Y = p.warp, lt = u.displace != null && Y < R4;
    if (lt !== u.warpOff && (u.warpOff = lt, lt ? d.setAttribute("data-voice-warp", "off") : d.removeAttribute("data-voice-warp")), X && $ && (u.ctx || u.displace)) {
      const tt = V4(f, ft, X, $);
      (u.displace && !lt || f.coreLight > 0) && Z4(d, f.id, tt, X, $), u.filter && !lt && X4 && Q4(u, tt, $), u.ctx && W4(u, ft, tt);
    }
    if (u.displace && !lt) {
      const tt = f.reducedMotion ? 0 : f.distortion * 120 * f.scale * (0.15 + 0.85 * R) * Y;
      u.displace.scale.baseVal = tt, u.noiseShift && (u.noiseShift.dx.baseVal = 8 * f.scale * Math.sin(y * 0.9), u.noiseShift.dy.baseVal = 4 * f.scale * Math.sin(y * 0.6 + 1.3));
    }
    d.style.setProperty(`--vb-glow-${f.id}`, et.toFixed(3)), d.style.setProperty(`--vb-h-${f.id}`, Z.toFixed(3)), d.style.setProperty(`--vb-w-${f.id}`, ot.toFixed(3));
    for (let tt = 0; tt < uo.length; tt++) {
      const J = uo[tt], at = H4(J.x * f.lobeSpacing + p.phase, v), ht = f.bands ? 0.6 + 0.7 * p.bands[J.band] : 1;
      d.style.setProperty(`--vb-x${tt}-${f.id}`, `${(at * L).toFixed(1)}px`), d.style.setProperty(`--vb-l${tt}-${f.id}`, (ht * N4(at, v)).toFixed(3));
      const yt = X / 2 + (E + at * L) * ot;
      d.style.setProperty(`--vb-y${tt}-${f.id}`, `${(-Wf(yt, X, B, M) * ut).toFixed(1)}px`);
    }
    const st = f.staticColors || f.reducedMotion || f.hueRange === 0 ? 0 : -f.hueRange + 2 * f.hueRange * K4(y / f.hueDuration);
    d.style.setProperty(`--vb-hue-${f.id}`, `${st.toFixed(2)}deg`), (c = u.onLevel) == null || c.call(u, p.level), u.paintedConfig = f;
  }));
}
function F4() {
  io == null && (Qf = 0, Cu = 0, Ii = 0, io = requestAnimationFrame(tg));
}
function I4() {
  Du.size === 0 && io != null && (cancelAnimationFrame(io), io = null);
}
function P4(r, i, u, c) {
  const d = {
    el: r,
    config: i,
    source: u,
    onLevel: c,
    analyser: null,
    releaseAnalyser: null,
    time: null,
    freq: null,
    canvas: null,
    ctx: null,
    haloCanvas: null,
    haloCtx: null,
    displace: null,
    noiseShift: null,
    filter: null,
    filterTop: -1,
    s: S4(r),
    paintedConfig: null,
    cssBlur: null,
    // Match the mark a previous registration may have left on the element.
    warpOff: r.hasAttribute("data-voice-warp")
  };
  i.distortion > 0 && (d.displace = r.querySelector(":scope > svg feDisplacementMap"), d.noiseShift = r.querySelector(":scope > svg feOffset"), d.filter = r.querySelector(":scope > svg filter"));
  const f = r.querySelector(":scope > [data-voice-beam-band]");
  if (f) {
    d.canvas = f, d.ctx = f.getContext("2d");
    const h = r.querySelector(":scope > [data-voice-beam-band-halo]");
    h && (d.haloCanvas = h, d.haloCtx = h.getContext("2d"));
  }
  if (d.s.lastTs = 0, u.stream) {
    const h = M4(u.stream);
    h && (d.analyser = h.analyser, d.releaseAnalyser = h.release, d.time = new Float32Array(h.analyser.fftSize), d.freq = new Uint8Array(h.analyser.frequencyBinCount));
  }
  return Du.add(d), F4(), () => {
    var h;
    Du.delete(d), (h = d.releaseAnalyser) == null || h.call(d), I4();
  };
}
const t6 = {
  scale: 1,
  glowSize: 1,
  processingDuration: 1.1,
  processingLevel: 0.55,
  processingTravel: 1.55,
  processingCurve: 2.1,
  cornerFollow: 0.45,
  strokeOpacity: 1,
  innerOpacity: 1,
  bloomOpacity: 1,
  idle: 0.18,
  reach: 1.2,
  spread: 1.05,
  flow: 48,
  bend: 60,
  bandStrength: 1.55,
  bandWidth: 2.15,
  bandPosition: 0.35,
  bandCurve: 1.75,
  bandSpread: 0.87,
  bandSkew: 0.12,
  bandOffset: -27,
  bandTail: 0.59,
  bandTailPosition: 0.67,
  bandTailCurve: 2.4,
  bandTailOverflow: 15,
  bandAberration: 0.89,
  distortion: 0.62,
  distortionDetail: 2.3,
  glowWidth: 0.65,
  glowHeight: 1.25,
  lobeSpacing: 0.85,
  rangeWidth: 0.75,
  rangeHeight: 1,
  softness: 1.07,
  coreSize: 1,
  coreLight: 0,
  coreLightWidth: 1,
  coreLightHeight: 1,
  strokeScale: 1,
  innerScale: 1,
  innerHeight: 1,
  bloomScale: 1,
  bloomHeight: 1
}, e6 = {
  default: {},
  pill: {
    scale: 0.45,
    glowSize: 0.95,
    strokeOpacity: 1.2,
    innerOpacity: 0.85,
    reach: 1.35,
    spread: 1.1,
    flow: 0,
    bend: 23,
    bandStrength: 1.55,
    bandWidth: 1.85,
    bandCurve: 1.95,
    bandSpread: 0.38,
    bandOffset: -16,
    bandTail: 0,
    processingTravel: 2,
    cornerFollow: 0,
    distortion: 0.45,
    distortionDetail: 3,
    glowWidth: 0.65,
    glowHeight: 0.95,
    lobeSpacing: 0.45,
    rangeWidth: 0.8,
    rangeHeight: 0.7,
    softness: 0.88,
    coreSize: 0.25,
    strokeScale: 1.25,
    innerScale: 0.95,
    bloomScale: 1.05,
    bloomHeight: 2.25
  },
  mobile: {
    scale: 1.25,
    spread: 0.45,
    reach: 3,
    flow: 60,
    bend: 70,
    bandWidth: 2.4,
    bandCurve: 1.55,
    bandSpread: 0.9,
    bandOffset: -50,
    bandTail: 0.62,
    bandTailPosition: 0.42,
    bandTailCurve: 2.7,
    bandTailOverflow: 22,
    processingDuration: 1.05,
    processingLevel: 0.35,
    processingTravel: 1,
    cornerFollow: 0.4,
    bandStrength: 1.8,
    distortionDetail: 2,
    glowWidth: 1.15,
    glowHeight: 2.1,
    lobeSpacing: 1.35,
    rangeWidth: 1.25,
    rangeHeight: 1.2,
    softness: 1.1
  }
}, a6 = {
  // The chat input sits on a dark card, so it runs a touch brighter than
  // the theme's 1.1 (light keeps the theme's own, see below).
  default: { brightness: 1.15 },
  pill: { brightness: 1.35, saturation: 1.5 },
  // The phone screen is large and the glow sits far from the content, so
  // it carries full strength on either theme (light otherwise dims to 0.8)
  // and, on dark, a brighter and richer glow than the theme's 1.1 / 1.2.
  mobile: { strength: 1, brightness: 1.2, saturation: 1.5 }
}, l6 = {
  default: {},
  pill: {},
  mobile: { strength: 1 }
};
function n6(r = "default", i = "dark") {
  return (i === "light" ? l6[r] : void 0) ?? a6[r];
}
const i6 = {
  // The band on white, whatever the dark strengths: 1.7 for the chat
  // input and the phone, 2 for the pill.
  default: { bandStrength: 1.7 },
  pill: { bandStrength: 2 },
  mobile: { bandStrength: 1.7 }
};
function o6(r = "default", i = "dark") {
  const u = e6[r], c = {};
  return i === "light" && (u.reach === void 0 && (c.reach = 1.8), u.spread === void 0 && (c.spread = 0.8), u.coreLight === void 0 && (c.coreLight = 1.8)), { ...t6, ...c, ...u, ...i === "light" ? i6[r] : void 0 };
}
const pu = {
  dark: { core: "255, 255, 255", above: "255, 70, 80", mid: "90, 255, 150", below: "80, 140, 255" },
  light: { core: "197, 139, 255", above: "255, 122, 182", mid: "126, 196, 255", below: "45, 255, 171" }
}, r6 = 1, u6 = 16, c6 = 6e4, hb = typeof navigator < "u" && /AppleWebKit/.test(navigator.userAgent) && !/Chrome\/|Chromium\/|Edg\/|OPR\//.test(navigator.userAgent), s6 = (() => {
  if (typeof document > "u") return !0;
  const r = document.createElement("canvas").getContext("2d");
  return !!r && typeof r.filter == "string";
})();
function f6() {
  const [r, i] = gt.useState(() => typeof window > "u" || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  return gt.useEffect(() => {
    if (typeof window > "u") return;
    const u = window.matchMedia("(prefers-color-scheme: dark)"), c = (d) => i(d.matches ? "dark" : "light");
    return u.addEventListener("change", c), () => u.removeEventListener("change", c);
  }, []), r;
}
function d6() {
  const [r, i] = gt.useState(() => typeof window > "u" || !window.matchMedia ? !1 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  return gt.useEffect(() => {
    if (typeof window > "u" || !window.matchMedia) return;
    const u = window.matchMedia("(prefers-reduced-motion: reduce)"), c = (d) => i(d.matches);
    return u.addEventListener("change", c), () => u.removeEventListener("change", c);
  }, []), r;
}
function h6(r, i) {
  return r === "auto" ? i : r;
}
const eg = gt.forwardRef(
  function({
    children: r,
    type: i = "default",
    scale: u,
    stream: c = null,
    level: d = 0,
    sensitivity: f = 3.1,
    threshold: h = 0.015,
    attack: p = 0.325,
    release: g = 0.86,
    idle: z,
    breatheDuration: y = 5.2,
    reach: m,
    spread: v,
    bands: S = !0,
    flow: w,
    processing: X = !1,
    processingDuration: $,
    processingLevel: U,
    processingTravel: G,
    processingCurve: Q,
    cornerFollow: j,
    processingEase: q = 0.6,
    colorVariant: W = "colorful",
    colors: _,
    bandColors: E,
    theme: L = "dark",
    staticColors: k = !1,
    hueRange: K,
    hueDuration: V,
    active: rt = !0,
    paused: nt = !1,
    borderRadius: it,
    brightness: R,
    saturation: et,
    glowSize: Z,
    strokeOpacity: ot,
    innerOpacity: F,
    bloomOpacity: ct,
    bend: ft,
    bandStrength: bt,
    bandWidth: M,
    bandPosition: B,
    bandCurve: ut,
    bandSpread: Y,
    bandSkew: lt,
    bandOffset: st,
    bandTail: tt,
    bandTailPosition: J,
    bandTailCurve: at,
    bandTailOverflow: ht,
    bandAberration: yt,
    distortion: Mt,
    distortionDetail: $t,
    glowWidth: wt,
    glowHeight: pt,
    lobeSpacing: Dt,
    rangeWidth: Gt,
    rangeHeight: Et,
    softness: Ht,
    coreSize: Jt,
    coreLight: Vt,
    coreLightWidth: oe,
    coreLightHeight: re,
    strokeScale: Nt,
    innerScale: Zt,
    innerHeight: Qt,
    bloomScale: ne,
    bloomHeight: fa,
    strength: La,
    className: Yt,
    style: Lt,
    css: kt,
    onLevel: se,
    onActivate: ge,
    onDeactivate: da,
    onAnimationEnd: de,
    ...$l
  }, ha) {
    const Ee = gt.useId().replace(/:/g, "-"), ba = f6(), Ne = h6(L, ba), sn = _ ? _.join("|") : "", ti = E ? [E.core, E.above, E.mid, E.below].join("|") : "", zt = o6(i, Ne), ie = Math.max(0.05, u ?? zt.scale), Le = Z ?? zt.glowSize, Ea = ot ?? zt.strokeOpacity, Be = F ?? zt.innerOpacity, Ar = ct ?? zt.bloomOpacity, Or = $ ?? zt.processingDuration, Hr = U ?? zt.processingLevel, fn = G ?? zt.processingTravel, dn = Q ?? zt.processingCurve, hn = j ?? zt.cornerFollow, Ba = z ?? zt.idle, bn = m ?? zt.reach, Tl = v ?? zt.spread, co = (w ?? zt.flow) * ie, Nr = (ft ?? zt.bend) * ie, so = bt ?? zt.bandStrength, ei = (M ?? zt.bandWidth) * ie, wl = B ?? zt.bandPosition, Yr = ut ?? zt.bandCurve, fo = Y ?? zt.bandSpread, ho = lt ?? zt.bandSkew, bo = (st ?? zt.bandOffset) * ie, ai = tt ?? zt.bandTail, li = J ?? zt.bandTailPosition, go = at ?? zt.bandTailCurve, mo = (ht ?? zt.bandTailOverflow) * ie, ga = yt ?? zt.bandAberration, $e = Mt ?? zt.distortion, Ye = ($t ?? zt.distortionDetail) / ie, ll = (wt ?? zt.glowWidth) * ie, po = (pt ?? zt.glowHeight) * ie, _r = (Dt ?? zt.lobeSpacing) * ie, ni = (Gt ?? zt.rangeWidth) * ie, gn = (Et ?? zt.rangeHeight) * ie, Cl = Ht ?? zt.softness, mn = (Jt ?? zt.coreSize) * ie, ja = Math.max(0, Math.min(3, Vt ?? zt.coreLight)), ka = oe ?? zt.coreLightWidth, nl = re ?? zt.coreLightHeight, El = Nt ?? zt.strokeScale, il = Zt ?? zt.innerScale, me = Qt ?? zt.innerHeight, vo = ne ?? zt.bloomScale, yo = fa ?? zt.bloomHeight, xo = d6(), ea = gt.useRef(null), [We, Dr] = gt.useState(rt), [Aa, zo] = gt.useState(!1), [Mo, Bt] = gt.useState(!0), [Rr, ii] = gt.useState(null), [oi, Oa] = gt.useState(0);
    gt.useEffect(() => {
      if (!hb) return;
      const ue = ea.current;
      if (!ue) return;
      const pe = () => Oa(ue.clientWidth * ue.clientHeight);
      if (pe(), typeof ResizeObserver > "u") return;
      const ma = new ResizeObserver(pe);
      return ma.observe(ue), () => ma.disconnect();
    }, []);
    const ye = hb && oi > c6 ? 0 : $e;
    gt.useEffect(() => {
      if (it != null) return;
      const ue = ea.current;
      if (!ue) return;
      const pe = () => {
        const si = ue.firstElementChild;
        if (!si) return;
        const fi = getComputedStyle(si), Ke = parseFloat(fi.borderTopLeftRadius);
        !isNaN(Ke) && Ke > 0 && ii(Ke);
      };
      pe();
      const ma = new MutationObserver(pe);
      return ma.observe(ue, { childList: !0, subtree: !1 }), () => ma.disconnect();
    }, [it, r]), gt.useEffect(() => {
      rt && !We && !Aa ? Dr(!0) : !rt && We && !Aa && zo(!0);
    }, [rt, We, Aa]), gt.useEffect(() => {
      const ue = ea.current;
      if (!ue || typeof IntersectionObserver > "u") return;
      const pe = new IntersectionObserver(
        (ma) => {
          for (const si of ma) Bt(si.isIntersecting);
        },
        { rootMargin: "256px" }
      );
      return pe.observe(ue), () => pe.disconnect();
    }, []);
    const Xr = gt.useCallback(
      (ue) => {
        const pe = ue.animationName;
        pe.includes("fade-out") ? (Dr(!1), zo(!1), da?.()) : pe.includes("fade-in") && ge?.(), de?.(ue);
      },
      [ge, da, de]
    ), aa = h4[Ne], Al = it ?? Rr ?? u6, ri = n6(i, Ne), Uu = La ?? ri.strength ?? aa.strength ?? 1, ke = K ?? aa.hueRange ?? 24, ui = V ?? aa.hueDuration ?? 12, So = R ?? ri.brightness ?? aa.brightness, ci = et ?? ri.saturation ?? aa.saturation, ol = gt.useMemo(
      () => y4({
        id: Ee,
        borderRadius: Al,
        borderWidth: r6,
        strokeOpacity: aa.strokeOpacity * Ea,
        innerOpacity: aa.innerOpacity * Be,
        bloomOpacity: aa.bloomOpacity * Ar,
        innerShadow: aa.innerShadow,
        colorVariant: W,
        colors: _,
        brightness: So,
        saturation: ci,
        theme: Ne,
        hueBase: aa.hueBase ?? 0,
        glowSize: Le * ie,
        glowWidth: ll,
        glowHeight: po,
        strokeScale: El,
        innerScale: il,
        innerHeight: me,
        bloomScale: vo,
        bloomHeight: yo,
        coreSize: mn,
        coreLight: ja,
        coreLightWidth: ka,
        coreLightHeight: nl,
        rangeWidth: ni,
        rangeHeight: gn,
        softness: Cl,
        distortion: ye > 0,
        scale: ie
      }),
      [
        Ee,
        Al,
        aa,
        W,
        sn,
        So,
        ci,
        Ne,
        zt,
        Le,
        Ea,
        Be,
        Ar,
        ie,
        ll,
        po,
        El,
        il,
        me,
        vo,
        yo,
        mn,
        ja,
        ka,
        nl,
        ni,
        gn,
        Cl,
        ye > 0
      ]
    ), $o = gt.useMemo(
      () => ({
        id: Ee,
        sensitivity: Math.max(0, f),
        threshold: Math.max(0, Math.min(0.95, h)),
        attack: Math.max(0, p),
        release: Math.max(0, g),
        idle: Math.max(0, Math.min(1, Ba)),
        breatheDuration: Math.max(0.2, y),
        reach: Math.max(0, bn),
        spread: Math.max(0, Tl),
        bands: S,
        flow: co,
        lobeSpacing: Math.max(0.1, _r),
        bend: Math.max(0, Nr),
        bandStrength: Math.max(0, so),
        bandWidth: Math.max(0, ei),
        bandPosition: Math.max(0, wl),
        bandCurve: Math.max(0.3, Yr),
        bandSpread: Math.max(0.05, fo),
        bandSkew: Math.max(-0.9, Math.min(0.9, ho)),
        bandOffset: bo,
        bandTail: Math.max(0, Math.min(1.5, ai)),
        bandTailPosition: Math.max(0, Math.min(0.98, li)),
        bandTailCurve: Math.max(0.5, go),
        bandTailOverflow: Math.max(0, mo),
        bandAberration: Math.max(0, Math.min(1, ga)),
        rangeWidth: ni,
        rangeHeight: gn,
        theme: Ne,
        bandColors: {
          core: E?.core && bu(E.core) || pu[Ne].core,
          above: E?.above && bu(E.above) || pu[Ne].above,
          mid: E?.mid && bu(E.mid) || pu[Ne].mid,
          below: E?.below && bu(E.below) || pu[Ne].below
        },
        distortion: Math.max(0, Math.min(1, ye)),
        coreLight: ja,
        scale: ie,
        radius: Al,
        processing: X,
        processingDuration: Math.max(0.05, Or),
        processingLevel: Math.max(0, Math.min(1, Hr)),
        processingEase: Math.max(0.05, q),
        processingTravel: Math.max(0, fn),
        processingCurve: Math.max(1, dn),
        cornerFollow: Math.max(0, Math.min(1, hn)),
        hueRange: Math.max(0, ke),
        hueDuration: Math.max(0.5, ui),
        staticColors: W === "mono" ? !0 : k,
        reducedMotion: xo,
        paused: nt
      }),
      [
        Ee,
        f,
        h,
        p,
        g,
        Ba,
        y,
        bn,
        Tl,
        S,
        co,
        _r,
        Nr,
        so,
        ei,
        wl,
        Yr,
        fo,
        ho,
        bo,
        ai,
        li,
        go,
        mo,
        ga,
        ni,
        gn,
        Ne,
        ti,
        ye,
        ja,
        ie,
        Al,
        X,
        Or,
        Hr,
        q,
        fn,
        dn,
        hn,
        ke,
        ui,
        k,
        W,
        xo,
        nt
      ]
    ), To = gt.useRef(d);
    To.current = d;
    const Ga = gt.useRef(se);
    Ga.current = se, gt.useEffect(() => {
      if (!(We || Aa) || !Mo) return;
      const ue = ea.current;
      return ue ? P4(ue, $o, { stream: c, getLevel: () => {
        const pe = To.current;
        return typeof pe == "function" ? pe() : pe;
      } }, (pe) => {
        var ma;
        return (ma = Ga.current) == null ? void 0 : ma.call(Ga, pe);
      }) : void 0;
    }, [$o, c, We, Aa, Mo]);
    const qu = gt.useCallback(
      (ue) => {
        ea.current = ue, typeof ha == "function" ? ha(ue) : ha && (ha.current = ue);
      },
      [ha]
    ), Ur = {
      ...Lt ?? {},
      "--voice-strength": Math.max(0, Math.min(1, Uu))
    };
    return /* @__PURE__ */ Tt.jsxs(Tt.Fragment, { children: [
      /* @__PURE__ */ Tt.jsx("style", { children: kt ? `${ol}
${kt.split("{id}").join(Ee)}` : ol }),
      /* @__PURE__ */ Tt.jsxs(
        "div",
        {
          ...$l,
          ref: qu,
          "data-voice-beam": Ee,
          "data-voice-type": i,
          "data-voice-halfres": "",
          "data-active": We && !Aa ? "" : void 0,
          "data-fading": Aa ? "" : void 0,
          "data-paused": We && !Aa && (!Mo || nt) ? "" : void 0,
          "data-listening": c ? "" : void 0,
          "data-processing": X ? "" : void 0,
          className: Yt,
          style: Ur,
          onAnimationEnd: Xr,
          children: [
            r,
            /* @__PURE__ */ Tt.jsx("div", { "data-voice-beam-bloom": !0 }),
            ye > 0 && /* @__PURE__ */ Tt.jsxs(Tt.Fragment, { children: [
              /* @__PURE__ */ Tt.jsx("div", { "data-voice-beam-warp": "inner" }),
              /* @__PURE__ */ Tt.jsx("div", { "data-voice-beam-warp": "bloom" })
            ] }),
            !s6 && /* @__PURE__ */ Tt.jsx("canvas", { "data-voice-beam-band-halo": !0, "aria-hidden": "true" }),
            /* @__PURE__ */ Tt.jsx("canvas", { "data-voice-beam-band": !0, "aria-hidden": "true" }),
            ja > 0 && /* @__PURE__ */ Tt.jsx("div", { "data-voice-beam-core": !0, children: /* @__PURE__ */ Tt.jsx("div", {}) }),
            ye > 0 && /* The distortion filter: drifting fractal noise, its green
            channel pinned to 0.5 so only x displaces, driven per frame by
            the driver (scale and offset), which also narrows the region
            to the strip under the band line once it runs — the full box
            here is only the first frame. Zero-sized, so it takes no room. */
            /* @__PURE__ */ Tt.jsx("svg", { "aria-hidden": "true", width: "0", height: "0", style: { position: "absolute", pointerEvents: "none" }, children: /* @__PURE__ */ Tt.jsxs(
              "filter",
              {
                id: `vb-distort-${Ee}`,
                x: "-20%",
                y: "-20%",
                width: "140%",
                height: "140%",
                colorInterpolationFilters: "sRGB",
                children: [
                  /* @__PURE__ */ Tt.jsx(
                    "feTurbulence",
                    {
                      type: "fractalNoise",
                      baseFrequency: `${(0.012 * Ye).toFixed(4)} ${(0.05 * Ye).toFixed(4)}`,
                      numOctaves: 2,
                      seed: 7,
                      result: "noise"
                    }
                  ),
                  /* @__PURE__ */ Tt.jsx("feOffset", { in: "noise", dx: "0", dy: "0", result: "moved" }),
                  /* @__PURE__ */ Tt.jsx(
                    "feColorMatrix",
                    {
                      in: "moved",
                      type: "matrix",
                      values: "1 0 0 0 0  0 0 0 0 0.5  0 0 0 0 0  0 0 0 0 1",
                      result: "map"
                    }
                  ),
                  /* @__PURE__ */ Tt.jsx("feDisplacementMap", { in: "SourceGraphic", in2: "map", scale: 0, xChannelSelector: "R", yChannelSelector: "G" })
                ]
              }
            ) })
          ]
        }
      )
    ] });
  }
), b6 = Jf.lazy(() => import("./assistant-effects-lab-BYjDKAGV.js"));
function g6({ assistantState: r, voiceState: i, reduced: u }) {
  const [c, d] = gt.useState(!1), f = document.getElementById("kalki-composer-effects-root");
  if (gt.useEffect(() => {
    const z = document.querySelector(".composer");
    if (!z) return;
    const y = () => d(!0), m = () => window.setTimeout(() => {
      d(z.contains(document.activeElement));
    }, 0);
    return z.addEventListener("focusin", y), z.addEventListener("focusout", m), () => {
      z.removeEventListener("focusin", y), z.removeEventListener("focusout", m);
    };
  }, []), !f) return null;
  const h = r === "solving", p = (c || h || i.active) && !u, g = i.active ? i.listening ? 0.72 : 0.34 : h ? 0.2 : 0;
  return Eu.createPortal(/* @__PURE__ */ Tt.jsxs(Tt.Fragment, { children: [
    /* @__PURE__ */ Tt.jsx(
      Rb,
      {
        className: "kalki-composer-border-beam",
        size: "md",
        colorVariant: "ocean",
        theme: "dark",
        strength: p ? 0.86 : 0.3,
        active: p,
        style: { position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" },
        children: /* @__PURE__ */ Tt.jsx("span", { className: "kalki-composer-beam-proxy" })
      }
    ),
    /* @__PURE__ */ Tt.jsx(
      eg,
      {
        className: "kalki-composer-voice-beam",
        type: "default",
        theme: "dark",
        level: g,
        processing: h,
        paused: !p,
        style: { position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" },
        children: /* @__PURE__ */ Tt.jsx("span", { className: "kalki-composer-voice-proxy" })
      }
    )
  ] }), f);
}
function m6({ assistantState: r, voiceState: i, reduced: u }) {
  const c = document.getElementById("kalki-avatar-root"), d = document.getElementById("kalki-thinking-root"), f = r === "solving", h = f ? "solving" : i.listening ? "listening" : "working", p = f || i.active ? "working" : "default";
  return /* @__PURE__ */ Tt.jsxs(Tt.Fragment, { children: [
    c && Eu.createPortal(
      /* @__PURE__ */ Tt.jsx(Ob, { type: "ghost", face: "eyes", state: p, size: 36, seed: 0.37, theme: "dark", "aria-label": `KALKI assistant avatar, ${p}` }),
      c
    ),
    d && Eu.createPortal(
      f || i.active ? /* @__PURE__ */ Tt.jsxs("div", { className: "kalki-thinking-indicator", role: "status", "aria-live": "polite", children: [
        /* @__PURE__ */ Tt.jsx(Kb, { state: h, size: 20, theme: "dark", speed: 0.95 }),
        /* @__PURE__ */ Tt.jsx("span", { children: f ? "KALKI is thinking…" : i.listening ? "KALKI is listening…" : "KALKI voice mode is active" })
      ] }) : null,
      d
    ),
    /* @__PURE__ */ Tt.jsx(g6, { assistantState: r, voiceState: i, reduced: u })
  ] });
}
function p6() {
  const r = Xp(), [i, u] = gt.useState(() => window.kalkiAssistantState || "idle"), [c, d] = gt.useState(() => window.kalkiVoiceState || { active: !1, listening: !1, message: "" }), [f, h] = gt.useState(() => {
    const p = document.getElementById("kalki-effects-panel");
    return !!(p && !p.hidden);
  });
  return gt.useEffect(() => {
    const p = (y) => u(y.detail?.state || "idle"), g = (y) => d(y.detail || { active: !1, listening: !1, message: "" }), z = () => {
      const y = document.getElementById("kalki-effects-panel");
      h(!!(y && !y.hidden));
    };
    return window.addEventListener("kalki:assistant-state", p), window.addEventListener("kalki:voice-state", g), window.addEventListener("kalki:surface-change", z), () => {
      window.removeEventListener("kalki:assistant-state", p), window.removeEventListener("kalki:voice-state", g), window.removeEventListener("kalki:surface-change", z);
    };
  }, []), /* @__PURE__ */ Tt.jsxs(Tt.Fragment, { children: [
    /* @__PURE__ */ Tt.jsx(m6, { assistantState: i, voiceState: c, reduced: r }),
    f && /* @__PURE__ */ Tt.jsx(Jf.Suspense, { fallback: /* @__PURE__ */ Tt.jsx("div", { className: "kalki-effects-loading", role: "status", children: "Loading KALKI visual effects…" }), children: /* @__PURE__ */ Tt.jsx(b6, { assistantState: i, voiceState: c, ThinkingOrb: Kb, BorderBeam: Rb, VoiceBeam: eg, BotAvatar: Ob }) })
  ] });
}
let vu = null;
function v6() {
  const r = document.getElementById("kalki-effects-react-root");
  return r ? (vu || (vu = Eu.createRoot(r)), vu.render(/* @__PURE__ */ Tt.jsx(Jf.StrictMode, { children: /* @__PURE__ */ Tt.jsx(p6, {}) })), document.body.classList.add("kalki-effects-ready"), vu) : null;
}
export {
  Bp as a,
  Tt as j,
  v6 as m,
  gt as r,
  Xp as u
};
