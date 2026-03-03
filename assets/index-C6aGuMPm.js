var K5 = Object.defineProperty;
var $5 = (r, c, u) =>
  c in r
    ? K5(r, c, { enumerable: !0, configurable: !0, writable: !0, value: u })
    : (r[c] = u);
var o0 = (r, c, u) => $5(r, typeof c != 'symbol' ? c + '' : c, u);
(function () {
  const c = document.createElement('link').relList;
  if (c && c.supports && c.supports('modulepreload')) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) o(d);
  new MutationObserver((d) => {
    for (const g of d)
      if (g.type === 'childList')
        for (const v of g.addedNodes)
          v.tagName === 'LINK' && v.rel === 'modulepreload' && o(v);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(d) {
    const g = {};
    return (
      d.integrity && (g.integrity = d.integrity),
      d.referrerPolicy && (g.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === 'use-credentials'
        ? (g.credentials = 'include')
        : d.crossOrigin === 'anonymous'
          ? (g.credentials = 'omit')
          : (g.credentials = 'same-origin'),
      g
    );
  }
  function o(d) {
    if (d.ep) return;
    d.ep = !0;
    const g = u(d);
    fetch(d.href, g);
  }
})();
var Di =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function C0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default')
    ? r.default
    : r;
}
var Dg = { exports: {} },
  s0 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var By;
function Z5() {
  if (By) return s0;
  By = 1;
  var r = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.fragment');
  function u(o, d, g) {
    var v = null;
    if (
      (g !== void 0 && (v = '' + g),
      d.key !== void 0 && (v = '' + d.key),
      'key' in d)
    ) {
      g = {};
      for (var y in d) y !== 'key' && (g[y] = d[y]);
    } else g = d;
    return (
      (d = g.ref),
      { $$typeof: r, type: o, key: v, ref: d !== void 0 ? d : null, props: g }
    );
  }
  return ((s0.Fragment = c), (s0.jsx = u), (s0.jsxs = u), s0);
}
var Hy;
function Q5() {
  return (Hy || ((Hy = 1), (Dg.exports = Z5())), Dg.exports);
}
var R = Q5(),
  qg = { exports: {} },
  h0 = {},
  Lg = { exports: {} },
  Bg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Uy;
function V5() {
  return (
    Uy ||
      ((Uy = 1),
      (function (r) {
        function c(J, ne) {
          var se = J.length;
          J.push(ne);
          e: for (; 0 < se; ) {
            var nt = (se - 1) >>> 1,
              at = J[nt];
            if (0 < d(at, ne)) ((J[nt] = ne), (J[se] = at), (se = nt));
            else break e;
          }
        }
        function u(J) {
          return J.length === 0 ? null : J[0];
        }
        function o(J) {
          if (J.length === 0) return null;
          var ne = J[0],
            se = J.pop();
          if (se !== ne) {
            J[0] = se;
            e: for (var nt = 0, at = J.length, z = at >>> 1; nt < z; ) {
              var ie = 2 * (nt + 1) - 1,
                he = J[ie],
                me = ie + 1,
                Me = J[me];
              if (0 > d(he, se))
                me < at && 0 > d(Me, he)
                  ? ((J[nt] = Me), (J[me] = se), (nt = me))
                  : ((J[nt] = he), (J[ie] = se), (nt = ie));
              else if (me < at && 0 > d(Me, se))
                ((J[nt] = Me), (J[me] = se), (nt = me));
              else break e;
            }
          }
          return ne;
        }
        function d(J, ne) {
          var se = J.sortIndex - ne.sortIndex;
          return se !== 0 ? se : J.id - ne.id;
        }
        if (
          ((r.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var g = performance;
          r.unstable_now = function () {
            return g.now();
          };
        } else {
          var v = Date,
            y = v.now();
          r.unstable_now = function () {
            return v.now() - y;
          };
        }
        var _ = [],
          S = [],
          E = 1,
          T = null,
          q = 3,
          B = !1,
          N = !1,
          X = !1,
          Q = !1,
          I = typeof setTimeout == 'function' ? setTimeout : null,
          $ = typeof clearTimeout == 'function' ? clearTimeout : null,
          ue = typeof setImmediate < 'u' ? setImmediate : null;
        function V(J) {
          for (var ne = u(S); ne !== null; ) {
            if (ne.callback === null) o(S);
            else if (ne.startTime <= J)
              (o(S), (ne.sortIndex = ne.expirationTime), c(_, ne));
            else break;
            ne = u(S);
          }
        }
        function fe(J) {
          if (((X = !1), V(J), !N))
            if (u(_) !== null) ((N = !0), W || ((W = !0), Ue()));
            else {
              var ne = u(S);
              ne !== null && ct(fe, ne.startTime - J);
            }
        }
        var W = !1,
          k = -1,
          pe = 5,
          Se = -1;
        function Ce() {
          return Q ? !0 : !(r.unstable_now() - Se < pe);
        }
        function oe() {
          if (((Q = !1), W)) {
            var J = r.unstable_now();
            Se = J;
            var ne = !0;
            try {
              e: {
                ((N = !1), X && ((X = !1), $(k), (k = -1)), (B = !0));
                var se = q;
                try {
                  t: {
                    for (
                      V(J), T = u(_);
                      T !== null && !(T.expirationTime > J && Ce());
                    ) {
                      var nt = T.callback;
                      if (typeof nt == 'function') {
                        ((T.callback = null), (q = T.priorityLevel));
                        var at = nt(T.expirationTime <= J);
                        if (((J = r.unstable_now()), typeof at == 'function')) {
                          ((T.callback = at), V(J), (ne = !0));
                          break t;
                        }
                        (T === u(_) && o(_), V(J));
                      } else o(_);
                      T = u(_);
                    }
                    if (T !== null) ne = !0;
                    else {
                      var z = u(S);
                      (z !== null && ct(fe, z.startTime - J), (ne = !1));
                    }
                  }
                  break e;
                } finally {
                  ((T = null), (q = se), (B = !1));
                }
                ne = void 0;
              }
            } finally {
              ne ? Ue() : (W = !1);
            }
          }
        }
        var Ue;
        if (typeof ue == 'function')
          Ue = function () {
            ue(oe);
          };
        else if (typeof MessageChannel < 'u') {
          var Ae = new MessageChannel(),
            ut = Ae.port2;
          ((Ae.port1.onmessage = oe),
            (Ue = function () {
              ut.postMessage(null);
            }));
        } else
          Ue = function () {
            I(oe, 0);
          };
        function ct(J, ne) {
          k = I(function () {
            J(r.unstable_now());
          }, ne);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (J) {
            J.callback = null;
          }),
          (r.unstable_forceFrameRate = function (J) {
            0 > J || 125 < J
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (pe = 0 < J ? Math.floor(1e3 / J) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return q;
          }),
          (r.unstable_next = function (J) {
            switch (q) {
              case 1:
              case 2:
              case 3:
                var ne = 3;
                break;
              default:
                ne = q;
            }
            var se = q;
            q = ne;
            try {
              return J();
            } finally {
              q = se;
            }
          }),
          (r.unstable_requestPaint = function () {
            Q = !0;
          }),
          (r.unstable_runWithPriority = function (J, ne) {
            switch (J) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                J = 3;
            }
            var se = q;
            q = J;
            try {
              return ne();
            } finally {
              q = se;
            }
          }),
          (r.unstable_scheduleCallback = function (J, ne, se) {
            var nt = r.unstable_now();
            switch (
              (typeof se == 'object' && se !== null
                ? ((se = se.delay),
                  (se = typeof se == 'number' && 0 < se ? nt + se : nt))
                : (se = nt),
              J)
            ) {
              case 1:
                var at = -1;
                break;
              case 2:
                at = 250;
                break;
              case 5:
                at = 1073741823;
                break;
              case 4:
                at = 1e4;
                break;
              default:
                at = 5e3;
            }
            return (
              (at = se + at),
              (J = {
                id: E++,
                callback: ne,
                priorityLevel: J,
                startTime: se,
                expirationTime: at,
                sortIndex: -1,
              }),
              se > nt
                ? ((J.sortIndex = se),
                  c(S, J),
                  u(_) === null &&
                    J === u(S) &&
                    (X ? ($(k), (k = -1)) : (X = !0), ct(fe, se - nt)))
                : ((J.sortIndex = at),
                  c(_, J),
                  N || B || ((N = !0), W || ((W = !0), Ue()))),
              J
            );
          }),
          (r.unstable_shouldYield = Ce),
          (r.unstable_wrapCallback = function (J) {
            var ne = q;
            return function () {
              var se = q;
              q = ne;
              try {
                return J.apply(this, arguments);
              } finally {
                q = se;
              }
            };
          }));
      })(Bg)),
    Bg
  );
}
var Ny;
function I5() {
  return (Ny || ((Ny = 1), (Lg.exports = V5())), Lg.exports);
}
var Hg = { exports: {} },
  Be = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gy;
function J5() {
  if (Gy) return Be;
  Gy = 1;
  var r = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    g = Symbol.for('react.consumer'),
    v = Symbol.for('react.context'),
    y = Symbol.for('react.forward_ref'),
    _ = Symbol.for('react.suspense'),
    S = Symbol.for('react.memo'),
    E = Symbol.for('react.lazy'),
    T = Symbol.for('react.activity'),
    q = Symbol.iterator;
  function B(z) {
    return z === null || typeof z != 'object'
      ? null
      : ((z = (q && z[q]) || z['@@iterator']),
        typeof z == 'function' ? z : null);
  }
  var N = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    X = Object.assign,
    Q = {};
  function I(z, ie, he) {
    ((this.props = z),
      (this.context = ie),
      (this.refs = Q),
      (this.updater = he || N));
  }
  ((I.prototype.isReactComponent = {}),
    (I.prototype.setState = function (z, ie) {
      if (typeof z != 'object' && typeof z != 'function' && z != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, z, ie, 'setState');
    }),
    (I.prototype.forceUpdate = function (z) {
      this.updater.enqueueForceUpdate(this, z, 'forceUpdate');
    }));
  function $() {}
  $.prototype = I.prototype;
  function ue(z, ie, he) {
    ((this.props = z),
      (this.context = ie),
      (this.refs = Q),
      (this.updater = he || N));
  }
  var V = (ue.prototype = new $());
  ((V.constructor = ue), X(V, I.prototype), (V.isPureReactComponent = !0));
  var fe = Array.isArray;
  function W() {}
  var k = { H: null, A: null, T: null, S: null },
    pe = Object.prototype.hasOwnProperty;
  function Se(z, ie, he) {
    var me = he.ref;
    return {
      $$typeof: r,
      type: z,
      key: ie,
      ref: me !== void 0 ? me : null,
      props: he,
    };
  }
  function Ce(z, ie) {
    return Se(z.type, ie, z.props);
  }
  function oe(z) {
    return typeof z == 'object' && z !== null && z.$$typeof === r;
  }
  function Ue(z) {
    var ie = { '=': '=0', ':': '=2' };
    return (
      '$' +
      z.replace(/[=:]/g, function (he) {
        return ie[he];
      })
    );
  }
  var Ae = /\/+/g;
  function ut(z, ie) {
    return typeof z == 'object' && z !== null && z.key != null
      ? Ue('' + z.key)
      : ie.toString(36);
  }
  function ct(z) {
    switch (z.status) {
      case 'fulfilled':
        return z.value;
      case 'rejected':
        throw z.reason;
      default:
        switch (
          (typeof z.status == 'string'
            ? z.then(W, W)
            : ((z.status = 'pending'),
              z.then(
                function (ie) {
                  z.status === 'pending' &&
                    ((z.status = 'fulfilled'), (z.value = ie));
                },
                function (ie) {
                  z.status === 'pending' &&
                    ((z.status = 'rejected'), (z.reason = ie));
                },
              )),
          z.status)
        ) {
          case 'fulfilled':
            return z.value;
          case 'rejected':
            throw z.reason;
        }
    }
    throw z;
  }
  function J(z, ie, he, me, Me) {
    var Ne = typeof z;
    (Ne === 'undefined' || Ne === 'boolean') && (z = null);
    var rt = !1;
    if (z === null) rt = !0;
    else
      switch (Ne) {
        case 'bigint':
        case 'string':
        case 'number':
          rt = !0;
          break;
        case 'object':
          switch (z.$$typeof) {
            case r:
            case c:
              rt = !0;
              break;
            case E:
              return ((rt = z._init), J(rt(z._payload), ie, he, me, Me));
          }
      }
    if (rt)
      return (
        (Me = Me(z)),
        (rt = me === '' ? '.' + ut(z, 0) : me),
        fe(Me)
          ? ((he = ''),
            rt != null && (he = rt.replace(Ae, '$&/') + '/'),
            J(Me, ie, he, '', function (Hi) {
              return Hi;
            }))
          : Me != null &&
            (oe(Me) &&
              (Me = Ce(
                Me,
                he +
                  (Me.key == null || (z && z.key === Me.key)
                    ? ''
                    : ('' + Me.key).replace(Ae, '$&/') + '/') +
                  rt,
              )),
            ie.push(Me)),
        1
      );
    rt = 0;
    var Ft = me === '' ? '.' : me + ':';
    if (fe(z))
      for (var _t = 0; _t < z.length; _t++)
        ((me = z[_t]), (Ne = Ft + ut(me, _t)), (rt += J(me, ie, he, Ne, Me)));
    else if (((_t = B(z)), typeof _t == 'function'))
      for (z = _t.call(z), _t = 0; !(me = z.next()).done; )
        ((me = me.value),
          (Ne = Ft + ut(me, _t++)),
          (rt += J(me, ie, he, Ne, Me)));
    else if (Ne === 'object') {
      if (typeof z.then == 'function') return J(ct(z), ie, he, me, Me);
      throw (
        (ie = String(z)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (ie === '[object Object]'
              ? 'object with keys {' + Object.keys(z).join(', ') + '}'
              : ie) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return rt;
  }
  function ne(z, ie, he) {
    if (z == null) return z;
    var me = [],
      Me = 0;
    return (
      J(z, me, '', '', function (Ne) {
        return ie.call(he, Ne, Me++);
      }),
      me
    );
  }
  function se(z) {
    if (z._status === -1) {
      var ie = z._result;
      ((ie = ie()),
        ie.then(
          function (he) {
            (z._status === 0 || z._status === -1) &&
              ((z._status = 1), (z._result = he));
          },
          function (he) {
            (z._status === 0 || z._status === -1) &&
              ((z._status = 2), (z._result = he));
          },
        ),
        z._status === -1 && ((z._status = 0), (z._result = ie)));
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var nt =
      typeof reportError == 'function'
        ? reportError
        : function (z) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var ie = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof z == 'object' &&
                  z !== null &&
                  typeof z.message == 'string'
                    ? String(z.message)
                    : String(z),
                error: z,
              });
              if (!window.dispatchEvent(ie)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', z);
              return;
            }
            console.error(z);
          },
    at = {
      map: ne,
      forEach: function (z, ie, he) {
        ne(
          z,
          function () {
            ie.apply(this, arguments);
          },
          he,
        );
      },
      count: function (z) {
        var ie = 0;
        return (
          ne(z, function () {
            ie++;
          }),
          ie
        );
      },
      toArray: function (z) {
        return (
          ne(z, function (ie) {
            return ie;
          }) || []
        );
      },
      only: function (z) {
        if (!oe(z))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return z;
      },
    };
  return (
    (Be.Activity = T),
    (Be.Children = at),
    (Be.Component = I),
    (Be.Fragment = u),
    (Be.Profiler = d),
    (Be.PureComponent = ue),
    (Be.StrictMode = o),
    (Be.Suspense = _),
    (Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k),
    (Be.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (z) {
        return k.H.useMemoCache(z);
      },
    }),
    (Be.cache = function (z) {
      return function () {
        return z.apply(null, arguments);
      };
    }),
    (Be.cacheSignal = function () {
      return null;
    }),
    (Be.cloneElement = function (z, ie, he) {
      if (z == null)
        throw Error(
          'The argument must be a React element, but you passed ' + z + '.',
        );
      var me = X({}, z.props),
        Me = z.key;
      if (ie != null)
        for (Ne in (ie.key !== void 0 && (Me = '' + ie.key), ie))
          !pe.call(ie, Ne) ||
            Ne === 'key' ||
            Ne === '__self' ||
            Ne === '__source' ||
            (Ne === 'ref' && ie.ref === void 0) ||
            (me[Ne] = ie[Ne]);
      var Ne = arguments.length - 2;
      if (Ne === 1) me.children = he;
      else if (1 < Ne) {
        for (var rt = Array(Ne), Ft = 0; Ft < Ne; Ft++)
          rt[Ft] = arguments[Ft + 2];
        me.children = rt;
      }
      return Se(z.type, Me, me);
    }),
    (Be.createContext = function (z) {
      return (
        (z = {
          $$typeof: v,
          _currentValue: z,
          _currentValue2: z,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (z.Provider = z),
        (z.Consumer = { $$typeof: g, _context: z }),
        z
      );
    }),
    (Be.createElement = function (z, ie, he) {
      var me,
        Me = {},
        Ne = null;
      if (ie != null)
        for (me in (ie.key !== void 0 && (Ne = '' + ie.key), ie))
          pe.call(ie, me) &&
            me !== 'key' &&
            me !== '__self' &&
            me !== '__source' &&
            (Me[me] = ie[me]);
      var rt = arguments.length - 2;
      if (rt === 1) Me.children = he;
      else if (1 < rt) {
        for (var Ft = Array(rt), _t = 0; _t < rt; _t++)
          Ft[_t] = arguments[_t + 2];
        Me.children = Ft;
      }
      if (z && z.defaultProps)
        for (me in ((rt = z.defaultProps), rt))
          Me[me] === void 0 && (Me[me] = rt[me]);
      return Se(z, Ne, Me);
    }),
    (Be.createRef = function () {
      return { current: null };
    }),
    (Be.forwardRef = function (z) {
      return { $$typeof: y, render: z };
    }),
    (Be.isValidElement = oe),
    (Be.lazy = function (z) {
      return { $$typeof: E, _payload: { _status: -1, _result: z }, _init: se };
    }),
    (Be.memo = function (z, ie) {
      return { $$typeof: S, type: z, compare: ie === void 0 ? null : ie };
    }),
    (Be.startTransition = function (z) {
      var ie = k.T,
        he = {};
      k.T = he;
      try {
        var me = z(),
          Me = k.S;
        (Me !== null && Me(he, me),
          typeof me == 'object' &&
            me !== null &&
            typeof me.then == 'function' &&
            me.then(W, nt));
      } catch (Ne) {
        nt(Ne);
      } finally {
        (ie !== null && he.types !== null && (ie.types = he.types), (k.T = ie));
      }
    }),
    (Be.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh();
    }),
    (Be.use = function (z) {
      return k.H.use(z);
    }),
    (Be.useActionState = function (z, ie, he) {
      return k.H.useActionState(z, ie, he);
    }),
    (Be.useCallback = function (z, ie) {
      return k.H.useCallback(z, ie);
    }),
    (Be.useContext = function (z) {
      return k.H.useContext(z);
    }),
    (Be.useDebugValue = function () {}),
    (Be.useDeferredValue = function (z, ie) {
      return k.H.useDeferredValue(z, ie);
    }),
    (Be.useEffect = function (z, ie) {
      return k.H.useEffect(z, ie);
    }),
    (Be.useEffectEvent = function (z) {
      return k.H.useEffectEvent(z);
    }),
    (Be.useId = function () {
      return k.H.useId();
    }),
    (Be.useImperativeHandle = function (z, ie, he) {
      return k.H.useImperativeHandle(z, ie, he);
    }),
    (Be.useInsertionEffect = function (z, ie) {
      return k.H.useInsertionEffect(z, ie);
    }),
    (Be.useLayoutEffect = function (z, ie) {
      return k.H.useLayoutEffect(z, ie);
    }),
    (Be.useMemo = function (z, ie) {
      return k.H.useMemo(z, ie);
    }),
    (Be.useOptimistic = function (z, ie) {
      return k.H.useOptimistic(z, ie);
    }),
    (Be.useReducer = function (z, ie, he) {
      return k.H.useReducer(z, ie, he);
    }),
    (Be.useRef = function (z) {
      return k.H.useRef(z);
    }),
    (Be.useState = function (z) {
      return k.H.useState(z);
    }),
    (Be.useSyncExternalStore = function (z, ie, he) {
      return k.H.useSyncExternalStore(z, ie, he);
    }),
    (Be.useTransition = function () {
      return k.H.useTransition();
    }),
    (Be.version = '19.2.4'),
    Be
  );
}
var ky;
function cy() {
  return (ky || ((ky = 1), (Hg.exports = J5())), Hg.exports);
}
var Ug = { exports: {} },
  zn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yy;
function W5() {
  if (Yy) return zn;
  Yy = 1;
  var r = cy();
  function c(_) {
    var S = 'https://react.dev/errors/' + _;
    if (1 < arguments.length) {
      S += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var E = 2; E < arguments.length; E++)
        S += '&args[]=' + encodeURIComponent(arguments[E]);
    }
    return (
      'Minified React error #' +
      _ +
      '; visit ' +
      S +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function u() {}
  var o = {
      d: {
        f: u,
        r: function () {
          throw Error(c(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for('react.portal');
  function g(_, S, E) {
    var T =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: T == null ? null : '' + T,
      children: _,
      containerInfo: S,
      implementation: E,
    };
  }
  var v = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(_, S) {
    if (_ === 'font') return '';
    if (typeof S == 'string') return S === 'use-credentials' ? S : '';
  }
  return (
    (zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (zn.createPortal = function (_, S) {
      var E =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S || (S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11))
        throw Error(c(299));
      return g(_, S, null, E);
    }),
    (zn.flushSync = function (_) {
      var S = v.T,
        E = o.p;
      try {
        if (((v.T = null), (o.p = 2), _)) return _();
      } finally {
        ((v.T = S), (o.p = E), o.d.f());
      }
    }),
    (zn.preconnect = function (_, S) {
      typeof _ == 'string' &&
        (S
          ? ((S = S.crossOrigin),
            (S =
              typeof S == 'string'
                ? S === 'use-credentials'
                  ? S
                  : ''
                : void 0))
          : (S = null),
        o.d.C(_, S));
    }),
    (zn.prefetchDNS = function (_) {
      typeof _ == 'string' && o.d.D(_);
    }),
    (zn.preinit = function (_, S) {
      if (typeof _ == 'string' && S && typeof S.as == 'string') {
        var E = S.as,
          T = y(E, S.crossOrigin),
          q = typeof S.integrity == 'string' ? S.integrity : void 0,
          B = typeof S.fetchPriority == 'string' ? S.fetchPriority : void 0;
        E === 'style'
          ? o.d.S(_, typeof S.precedence == 'string' ? S.precedence : void 0, {
              crossOrigin: T,
              integrity: q,
              fetchPriority: B,
            })
          : E === 'script' &&
            o.d.X(_, {
              crossOrigin: T,
              integrity: q,
              fetchPriority: B,
              nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
            });
      }
    }),
    (zn.preinitModule = function (_, S) {
      if (typeof _ == 'string')
        if (typeof S == 'object' && S !== null) {
          if (S.as == null || S.as === 'script') {
            var E = y(S.as, S.crossOrigin);
            o.d.M(_, {
              crossOrigin: E,
              integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
              nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
            });
          }
        } else S == null && o.d.M(_);
    }),
    (zn.preload = function (_, S) {
      if (
        typeof _ == 'string' &&
        typeof S == 'object' &&
        S !== null &&
        typeof S.as == 'string'
      ) {
        var E = S.as,
          T = y(E, S.crossOrigin);
        o.d.L(_, E, {
          crossOrigin: T,
          integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
          nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
          type: typeof S.type == 'string' ? S.type : void 0,
          fetchPriority:
            typeof S.fetchPriority == 'string' ? S.fetchPriority : void 0,
          referrerPolicy:
            typeof S.referrerPolicy == 'string' ? S.referrerPolicy : void 0,
          imageSrcSet:
            typeof S.imageSrcSet == 'string' ? S.imageSrcSet : void 0,
          imageSizes: typeof S.imageSizes == 'string' ? S.imageSizes : void 0,
          media: typeof S.media == 'string' ? S.media : void 0,
        });
      }
    }),
    (zn.preloadModule = function (_, S) {
      if (typeof _ == 'string')
        if (S) {
          var E = y(S.as, S.crossOrigin);
          o.d.m(_, {
            as: typeof S.as == 'string' && S.as !== 'script' ? S.as : void 0,
            crossOrigin: E,
            integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
          });
        } else o.d.m(_);
    }),
    (zn.requestFormReset = function (_) {
      o.d.r(_);
    }),
    (zn.unstable_batchedUpdates = function (_, S) {
      return _(S);
    }),
    (zn.useFormState = function (_, S, E) {
      return v.H.useFormState(_, S, E);
    }),
    (zn.useFormStatus = function () {
      return v.H.useHostTransitionStatus();
    }),
    (zn.version = '19.2.4'),
    zn
  );
}
var Fy;
function M8() {
  if (Fy) return Ug.exports;
  Fy = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (c) {
        console.error(c);
      }
  }
  return (r(), (Ug.exports = W5()), Ug.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xy;
function P5() {
  if (Xy) return h0;
  Xy = 1;
  var r = I5(),
    c = cy(),
    u = M8();
  function o(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function d(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function g(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function v(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function _(e) {
    if (g(e) !== e) throw Error(o(188));
  }
  function S(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = g(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var f = n.return;
      if (f === null) break;
      var h = f.alternate;
      if (h === null) {
        if (((l = f.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (f.child === h.child) {
        for (h = f.child; h; ) {
          if (h === n) return (_(f), e);
          if (h === l) return (_(f), t);
          h = h.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) ((n = f), (l = h));
      else {
        for (var m = !1, x = f.child; x; ) {
          if (x === n) {
            ((m = !0), (n = f), (l = h));
            break;
          }
          if (x === l) {
            ((m = !0), (l = f), (n = h));
            break;
          }
          x = x.sibling;
        }
        if (!m) {
          for (x = h.child; x; ) {
            if (x === n) {
              ((m = !0), (n = h), (l = f));
              break;
            }
            if (x === l) {
              ((m = !0), (l = h), (n = f));
              break;
            }
            x = x.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function E(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = E(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var T = Object.assign,
    q = Symbol.for('react.element'),
    B = Symbol.for('react.transitional.element'),
    N = Symbol.for('react.portal'),
    X = Symbol.for('react.fragment'),
    Q = Symbol.for('react.strict_mode'),
    I = Symbol.for('react.profiler'),
    $ = Symbol.for('react.consumer'),
    ue = Symbol.for('react.context'),
    V = Symbol.for('react.forward_ref'),
    fe = Symbol.for('react.suspense'),
    W = Symbol.for('react.suspense_list'),
    k = Symbol.for('react.memo'),
    pe = Symbol.for('react.lazy'),
    Se = Symbol.for('react.activity'),
    Ce = Symbol.for('react.memo_cache_sentinel'),
    oe = Symbol.iterator;
  function Ue(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (oe && e[oe]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var Ae = Symbol.for('react.client.reference');
  function ut(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === Ae ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case X:
        return 'Fragment';
      case I:
        return 'Profiler';
      case Q:
        return 'StrictMode';
      case fe:
        return 'Suspense';
      case W:
        return 'SuspenseList';
      case Se:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case N:
          return 'Portal';
        case ue:
          return e.displayName || 'Context';
        case $:
          return (e._context.displayName || 'Context') + '.Consumer';
        case V:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case k:
          return (
            (t = e.displayName || null),
            t !== null ? t : ut(e.type) || 'Memo'
          );
        case pe:
          ((t = e._payload), (e = e._init));
          try {
            return ut(e(t));
          } catch {}
      }
    return null;
  }
  var ct = Array.isArray,
    J = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ne = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    se = { pending: !1, data: null, method: null, action: null },
    nt = [],
    at = -1;
  function z(e) {
    return { current: e };
  }
  function ie(e) {
    0 > at || ((e.current = nt[at]), (nt[at] = null), at--);
  }
  function he(e, t) {
    (at++, (nt[at] = e.current), (e.current = t));
  }
  var me = z(null),
    Me = z(null),
    Ne = z(null),
    rt = z(null);
  function Ft(e, t) {
    switch ((he(Ne, t), he(Me, e), he(me, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Wu(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Wu(t)), (e = On(t, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (ie(me), he(me, e));
  }
  function _t() {
    (ie(me), ie(Me), ie(Ne));
  }
  function Hi(e) {
    e.memoizedState !== null && he(rt, e);
    var t = me.current,
      n = On(t, e.type);
    t !== n && (he(Me, e), he(me, n));
  }
  function el(e) {
    (Me.current === e && (ie(me), ie(Me)),
      rt.current === e && (ie(rt), (Oi._currentValue = se)));
  }
  var ql, ao;
  function Wt(e) {
    if (ql === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((ql = (t && t[1]) || ''),
          (ao =
            -1 <
            n.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      ql +
      e +
      ao
    );
  }
  var tl = !1;
  function ro(e, t) {
    if (!e || tl) return '';
    tl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var ae = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(ae.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(ae, []);
                } catch (Z) {
                  var F = Z;
                }
                Reflect.construct(e, [], ae);
              } else {
                try {
                  ae.call();
                } catch (Z) {
                  F = Z;
                }
                e.call(ae.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                F = Z;
              }
              (ae = e()) &&
                typeof ae.catch == 'function' &&
                ae.catch(function () {});
            }
          } catch (Z) {
            if (Z && F && typeof Z.stack == 'string') return [Z.stack, F.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var f = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        'name',
      );
      f &&
        f.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var h = l.DetermineComponentFrameRoot(),
        m = h[0],
        x = h[1];
      if (m && x) {
        var O = m.split(`
`),
          Y = x.split(`
`);
        for (
          f = l = 0;
          l < O.length && !O[l].includes('DetermineComponentFrameRoot');
        )
          l++;
        for (; f < Y.length && !Y[f].includes('DetermineComponentFrameRoot'); )
          f++;
        if (l === O.length || f === Y.length)
          for (
            l = O.length - 1, f = Y.length - 1;
            1 <= l && 0 <= f && O[l] !== Y[f];
          )
            f--;
        for (; 1 <= l && 0 <= f; l--, f--)
          if (O[l] !== Y[f]) {
            if (l !== 1 || f !== 1)
              do
                if ((l--, f--, 0 > f || O[l] !== Y[f])) {
                  var ee =
                    `
` + O[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      ee.includes('<anonymous>') &&
                      (ee = ee.replace('<anonymous>', e.displayName)),
                    ee
                  );
                }
              while (1 <= l && 0 <= f);
            break;
          }
      }
    } finally {
      ((tl = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? Wt(n) : '';
  }
  function Za(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Wt(e.type);
      case 16:
        return Wt('Lazy');
      case 13:
        return e.child !== t && t !== null
          ? Wt('Suspense Fallback')
          : Wt('Suspense');
      case 19:
        return Wt('SuspenseList');
      case 0:
      case 15:
        return ro(e.type, !1);
      case 11:
        return ro(e.type.render, !1);
      case 1:
        return ro(e.type, !0);
      case 31:
        return Wt('Activity');
      default:
        return '';
    }
  }
  function lo(e) {
    try {
      var t = '',
        n = null;
      do ((t += Za(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var io = Object.prototype.hasOwnProperty,
    nl = r.unstable_scheduleCallback,
    Dn = r.unstable_cancelCallback,
    Ui = r.unstable_shouldYield,
    ic = r.unstable_requestPaint,
    qn = r.unstable_now,
    Ni = r.unstable_getCurrentPriorityLevel,
    M0 = r.unstable_ImmediatePriority,
    Ll = r.unstable_UserBlockingPriority,
    Qa = r.unstable_NormalPriority,
    uo = r.unstable_LowPriority,
    uc = r.unstable_IdlePriority,
    co = r.log,
    fo = r.unstable_setDisableYieldValue,
    al = null,
    sn = null;
  function La(e) {
    if (
      (typeof co == 'function' && fo(e),
      sn && typeof sn.setStrictMode == 'function')
    )
      try {
        sn.setStrictMode(al, e);
      } catch {}
  }
  var hn = Math.clz32 ? Math.clz32 : Rd,
    oo = Math.log,
    Ad = Math.LN2;
  function Rd(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((oo(e) / Ad) | 0)) | 0);
  }
  var cc = 256,
    Gi = 262144,
    ki = 4194304;
  function rl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
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
        return e;
    }
  }
  function fc(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var f = 0,
      h = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var x = l & 134217727;
    return (
      x !== 0
        ? ((l = x & ~h),
          l !== 0
            ? (f = rl(l))
            : ((m &= x),
              m !== 0
                ? (f = rl(m))
                : n || ((n = x & ~e), n !== 0 && (f = rl(n)))))
        : ((x = l & ~h),
          x !== 0
            ? (f = rl(x))
            : m !== 0
              ? (f = rl(m))
              : n || ((n = l & ~e), n !== 0 && (f = rl(n)))),
      f === 0
        ? 0
        : t !== 0 &&
            t !== f &&
            (t & h) === 0 &&
            ((h = f & -f),
            (n = t & -t),
            h >= n || (h === 32 && (n & 4194048) !== 0))
          ? t
          : f
    );
  }
  function Yi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Td(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
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
        return t + 5e3;
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
    var e = ki;
    return ((ki <<= 1), (ki & 62914560) === 0 && (ki = 4194304), e);
  }
  function ho(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Fi(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Ed(e, t, n, l, f, h) {
    var m = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var x = e.entanglements,
      O = e.expirationTimes,
      Y = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var ee = 31 - hn(n),
        ae = 1 << ee;
      ((x[ee] = 0), (O[ee] = -1));
      var F = Y[ee];
      if (F !== null)
        for (Y[ee] = null, ee = 0; ee < F.length; ee++) {
          var Z = F[ee];
          Z !== null && (Z.lane &= -536870913);
        }
      n &= ~ae;
    }
    (l !== 0 && oc(e, l, 0),
      h !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(m & ~t)));
  }
  function oc(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - hn(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function z0(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - hn(n),
        f = 1 << l;
      ((f & t) | (e[l] & t) && (e[l] |= t), (n &= ~f));
    }
  }
  function sc(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : go(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function go(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function vo(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function j0() {
    var e = ne.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : F1(e.type));
  }
  function D0(e, t) {
    var n = ne.p;
    try {
      return ((ne.p = e), t());
    } finally {
      ne.p = n;
    }
  }
  var _r = Math.random().toString(36).slice(2),
    Pt = '__reactFiber$' + _r,
    mn = '__reactProps$' + _r,
    Bl = '__reactContainer$' + _r,
    hc = '__reactEvents$' + _r,
    wd = '__reactListeners$' + _r,
    Od = '__reactHandles$' + _r,
    q0 = '__reactResources$' + _r,
    Xi = '__reactMarker$' + _r;
  function po(e) {
    (delete e[Pt], delete e[mn], delete e[hc], delete e[wd], delete e[Od]);
  }
  function Hl(e) {
    var t = e[Pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Bl] || n[Pt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = T1(e); e !== null; ) {
            if ((n = e[Pt])) return n;
            e = T1(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Va(e) {
    if ((e = e[Pt] || e[Bl])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function Ki(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Ia(e) {
    var t = e[q0];
    return (
      t ||
        (t = e[q0] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Qt(e) {
    e[Xi] = !0;
  }
  var L0 = new Set(),
    B0 = {};
  function Sr(e, t) {
    (ll(e, t), ll(e + 'Capture', t));
  }
  function ll(e, t) {
    for (B0[e] = t, e = 0; e < t.length; e++) L0.add(t[e]);
  }
  var H0 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    U0 = {},
    N0 = {};
  function Md(e) {
    return io.call(N0, e)
      ? !0
      : io.call(U0, e)
        ? !1
        : H0.test(e)
          ? (N0[e] = !0)
          : ((U0[e] = !0), !1);
  }
  function dc(e, t, n) {
    if (Md(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + n);
      }
  }
  function $i(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + n);
    }
  }
  function Ba(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, '' + l);
    }
  }
  function Ln(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function gc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function zd(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var f = l.get,
        h = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (m) {
            ((n = '' + m), h.call(this, m));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (m) {
            n = '' + m;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function vc(e) {
    if (!e._valueTracker) {
      var t = gc(e) ? 'checked' : 'value';
      e._valueTracker = zd(e, t, '' + e[t]);
    }
  }
  function Zi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = gc(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Qi(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var jd = /[\n"\\]/g;
  function Bn(e) {
    return e.replace(jd, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function pc(e, t, n, l, f, h, m, x) {
    ((e.name = ''),
      m != null &&
      typeof m != 'function' &&
      typeof m != 'symbol' &&
      typeof m != 'boolean'
        ? (e.type = m)
        : e.removeAttribute('type'),
      t != null
        ? m === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + Ln(t))
          : e.value !== '' + Ln(t) && (e.value = '' + Ln(t))
        : (m !== 'submit' && m !== 'reset') || e.removeAttribute('value'),
      t != null
        ? mo(e, m, Ln(t))
        : n != null
          ? mo(e, m, Ln(n))
          : l != null && e.removeAttribute('value'),
      f == null && h != null && (e.defaultChecked = !!h),
      f != null &&
        (e.checked = f && typeof f != 'function' && typeof f != 'symbol'),
      x != null &&
      typeof x != 'function' &&
      typeof x != 'symbol' &&
      typeof x != 'boolean'
        ? (e.name = '' + Ln(x))
        : e.removeAttribute('name'));
  }
  function mc(e, t, n, l, f, h, m, x) {
    if (
      (h != null &&
        typeof h != 'function' &&
        typeof h != 'symbol' &&
        typeof h != 'boolean' &&
        (e.type = h),
      t != null || n != null)
    ) {
      if (!((h !== 'submit' && h !== 'reset') || t != null)) {
        vc(e);
        return;
      }
      ((n = n != null ? '' + Ln(n) : ''),
        (t = t != null ? '' + Ln(t) : n),
        x || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? f),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = x ? e.checked : !!l),
      (e.defaultChecked = !!l),
      m != null &&
        typeof m != 'function' &&
        typeof m != 'symbol' &&
        typeof m != 'boolean' &&
        (e.name = m),
      vc(e));
  }
  function mo(e, t, n) {
    (t === 'number' && Qi(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function il(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var f = 0; f < n.length; f++) t['$' + n[f]] = !0;
      for (n = 0; n < e.length; n++)
        ((f = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== f && (e[n].selected = f),
          f && l && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Ln(n), t = null, f = 0; f < e.length; f++) {
        if (e[f].value === n) {
          ((e[f].selected = !0), l && (e[f].defaultSelected = !0));
          return;
        }
        t !== null || e[f].disabled || (t = e[f]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function yc(e, t, n) {
    if (
      t != null &&
      ((t = '' + Ln(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Ln(n) : '';
  }
  function bc(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (ct(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = Ln(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l),
      vc(e));
  }
  function ba(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var G0 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function yo(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || G0.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function k0(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(o(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var f in t)
        ((l = t[f]), t.hasOwnProperty(f) && n[f] !== l && yo(e, f, l));
    } else for (var h in t) t.hasOwnProperty(h) && yo(e, h, t[h]);
  }
  function _c(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Y0 = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    F0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vi(e) {
    return F0.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Ja() {}
  var bo = null;
  function _o(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ul = null,
    Ul = null;
  function X0(e) {
    var t = Va(e);
    if (t && (e = t.stateNode)) {
      var n = e[mn] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (pc(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Bn('' + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var f = l[mn] || null;
                if (!f) throw Error(o(90));
                pc(
                  l,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((l = n[t]), l.form === e.form && Zi(l));
          }
          break e;
        case 'textarea':
          yc(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && il(e, !!n.multiple, t, !1));
      }
    }
  }
  var So = !1;
  function K0(e, t, n) {
    if (So) return e(t, n);
    So = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((So = !1),
        (ul !== null || Ul !== null) &&
          (Af(), ul && ((t = ul), (e = Ul), (Ul = ul = null), X0(t), e)))
      )
        for (t = 0; t < e.length; t++) X0(e[t]);
    }
  }
  function cl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[mn] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(o(231, t, typeof n));
    return n;
  }
  var Wa = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    xo = !1;
  if (Wa)
    try {
      var Ii = {};
      (Object.defineProperty(Ii, 'passive', {
        get: function () {
          xo = !0;
        },
      }),
        window.addEventListener('test', Ii, Ii),
        window.removeEventListener('test', Ii, Ii));
    } catch {
      xo = !1;
    }
  var xr = null,
    Co = null,
    dt = null;
  function mt() {
    if (dt) return dt;
    var e,
      t = Co,
      n = t.length,
      l,
      f = 'value' in xr ? xr.value : xr.textContent,
      h = f.length;
    for (e = 0; e < n && t[e] === f[e]; e++);
    var m = n - e;
    for (l = 1; l <= m && t[n - l] === f[h - l]; l++);
    return (dt = f.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Sc(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function xc() {
    return !0;
  }
  function $0() {
    return !1;
  }
  function yn(e) {
    function t(n, l, f, h, m) {
      ((this._reactName = n),
        (this._targetInst = f),
        (this.type = l),
        (this.nativeEvent = h),
        (this.target = m),
        (this.currentTarget = null));
      for (var x in e)
        e.hasOwnProperty(x) && ((n = e[x]), (this[x] = n ? n(h) : h[x]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? xc
          : $0),
        (this.isPropagationStopped = $0),
        this
      );
    }
    return (
      T(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = xc));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = xc));
        },
        persist: function () {},
        isPersistent: xc,
      }),
      t
    );
  }
  var fl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Cc = yn(fl),
    Nl = T({}, fl, { view: 0, detail: 0 }),
    Dd = yn(Nl),
    Xt,
    Ji,
    _a,
    Wi = T({}, Nl, {
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
      getModifierState: Pi,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== _a &&
              (_a && e.type === 'mousemove'
                ? ((Xt = e.screenX - _a.screenX), (Ji = e.screenY - _a.screenY))
                : (Ji = Xt = 0),
              (_a = e)),
            Xt);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Ji;
      },
    }),
    Ac = yn(Wi),
    aa = T({}, Wi, { dataTransfer: 0 }),
    Z0 = yn(aa),
    Q0 = T({}, Nl, { relatedTarget: 0 }),
    Rc = yn(Q0),
    V0 = T({}, fl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    I0 = yn(V0),
    J0 = T({}, fl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Hn = yn(J0),
    qd = T({}, fl, { data: 0 }),
    Un = yn(qd),
    Ld = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    W0 = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Cr = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Tc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Cr[e])
        ? !!t[e]
        : !1;
  }
  function Pi() {
    return Tc;
  }
  var Ct = T({}, Nl, {
      key: function (e) {
        if (e.key) {
          var t = Ld[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Sc(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? W0[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Pi,
      charCode: function (e) {
        return e.type === 'keypress' ? Sc(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Sc(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Ar = yn(Ct),
    Ao = T({}, Wi, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    P0 = yn(Ao),
    Ro = T({}, Nl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Pi,
    }),
    Bd = yn(Ro),
    Hd = T({}, fl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ud = yn(Hd),
    eh = T({}, Wi, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ec = yn(eh),
    Gl = T({}, fl, { newState: 0, oldState: 0 }),
    Nd = yn(Gl),
    th = [9, 13, 27, 32],
    wc = Wa && 'CompositionEvent' in window,
    ol = null;
  Wa && 'documentMode' in document && (ol = document.documentMode);
  var To = Wa && 'TextEvent' in window && !ol,
    Eo = Wa && (!wc || (ol && 8 < ol && 11 >= ol)),
    nh = ' ',
    Oc = !1;
  function Mc(e, t) {
    switch (e) {
      case 'keyup':
        return th.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function ah(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var sl = !1;
  function Nn(e, t) {
    switch (e) {
      case 'compositionend':
        return ah(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Oc = !0), nh);
      case 'textInput':
        return ((e = t.data), e === nh && Oc ? null : e);
      default:
        return null;
    }
  }
  function wo(e, t) {
    if (sl)
      return e === 'compositionend' || (!wc && Mc(e, t))
        ? ((e = mt()), (dt = Co = xr = null), (sl = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Eo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var eu = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
    week: !0,
  };
  function Oo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!eu[e.type] : t === 'textarea';
  }
  function Mo(e, t, n, l) {
    (ul ? (Ul ? Ul.push(l) : (Ul = [l])) : (ul = l),
      (t = Qu(t, 'onChange')),
      0 < t.length &&
        ((n = new Cc('onChange', 'change', null, n, l)),
        e.push({ event: n, listeners: t })));
  }
  var tu = null,
    nu = null;
  function Gd(e) {
    m1(e, 0);
  }
  function zc(e) {
    var t = Ki(e);
    if (Zi(t)) return e;
  }
  function rh(e, t) {
    if (e === 'change') return t;
  }
  var hl = !1;
  if (Wa) {
    var zo;
    if (Wa) {
      var jo = 'oninput' in document;
      if (!jo) {
        var jc = document.createElement('div');
        (jc.setAttribute('oninput', 'return;'),
          (jo = typeof jc.oninput == 'function'));
      }
      zo = jo;
    } else zo = !1;
    hl = zo && (!document.documentMode || 9 < document.documentMode);
  }
  function Do() {
    tu && (tu.detachEvent('onpropertychange', Pa), (nu = tu = null));
  }
  function Pa(e) {
    if (e.propertyName === 'value' && zc(nu)) {
      var t = [];
      (Mo(t, nu, e, _o(e)), K0(Gd, t));
    }
  }
  function Dc(e, t, n) {
    e === 'focusin'
      ? (Do(), (tu = t), (nu = n), tu.attachEvent('onpropertychange', Pa))
      : e === 'focusout' && Do();
  }
  function kd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return zc(nu);
  }
  function Yd(e, t) {
    if (e === 'click') return zc(t);
  }
  function Fd(e, t) {
    if (e === 'input' || e === 'change') return zc(t);
  }
  function kl(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var wt = typeof Object.is == 'function' ? Object.is : kl;
  function Yl(e, t) {
    if (wt(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var f = n[l];
      if (!io.call(t, f) || !wt(e[f], t[f])) return !1;
    }
    return !0;
  }
  function lh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ih(e, t) {
    var n = lh(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = lh(n);
    }
  }
  function uh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? uh(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function ch(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Qi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Qi(e.document);
    }
    return t;
  }
  function qo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var Fl = Wa && 'documentMode' in document && 11 >= document.documentMode,
    L = null,
    P = null,
    K = null,
    ge = !1;
  function ze(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ge ||
      L == null ||
      L !== Qi(l) ||
      ((l = L),
      'selectionStart' in l && qo(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (K && Yl(K, l)) ||
        ((K = l),
        (l = Qu(P, 'onSelect')),
        0 < l.length &&
          ((t = new Cc('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = L))));
  }
  function Ye(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var At = {
      animationend: Ye('Animation', 'AnimationEnd'),
      animationiteration: Ye('Animation', 'AnimationIteration'),
      animationstart: Ye('Animation', 'AnimationStart'),
      transitionrun: Ye('Transition', 'TransitionRun'),
      transitionstart: Ye('Transition', 'TransitionStart'),
      transitioncancel: Ye('Transition', 'TransitionCancel'),
      transitionend: Ye('Transition', 'TransitionEnd'),
    },
    ft = {},
    qc = {};
  Wa &&
    ((qc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete At.animationend.animation,
      delete At.animationiteration.animation,
      delete At.animationstart.animation),
    'TransitionEvent' in window || delete At.transitionend.transition);
  function dl(e) {
    if (ft[e]) return ft[e];
    if (!At[e]) return e;
    var t = At[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in qc) return (ft[e] = t[n]);
    return e;
  }
  var Gn = dl('animationend'),
    au = dl('animationiteration'),
    fh = dl('animationstart'),
    Xl = dl('transitionrun'),
    Lc = dl('transitionstart'),
    Bc = dl('transitioncancel'),
    We = dl('transitionend'),
    oh = new Map(),
    Hc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Hc.push('scrollEnd');
  function bn(e, t) {
    (oh.set(e, t), Sr(t, [e]));
  }
  var Uc =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == 'object' &&
                  e !== null &&
                  typeof e.message == 'string'
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', e);
              return;
            }
            console.error(e);
          },
    ra = [],
    Kl = 0,
    $l = 0;
  function Sa() {
    for (var e = Kl, t = ($l = Kl = 0); t < e; ) {
      var n = ra[t];
      ra[t++] = null;
      var l = ra[t];
      ra[t++] = null;
      var f = ra[t];
      ra[t++] = null;
      var h = ra[t];
      if (((ra[t++] = null), l !== null && f !== null)) {
        var m = l.pending;
        (m === null ? (f.next = f) : ((f.next = m.next), (m.next = f)),
          (l.pending = f));
      }
      h !== 0 && Lo(n, f, h);
    }
  }
  function gl(e, t, n, l) {
    ((ra[Kl++] = e),
      (ra[Kl++] = t),
      (ra[Kl++] = n),
      (ra[Kl++] = l),
      ($l |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Nc(e, t, n, l) {
    return (gl(e, t, n, l), ru(e));
  }
  function Ha(e, t) {
    return (gl(e, null, null, t), ru(e));
  }
  function Lo(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var f = !1, h = e.return; h !== null; )
      ((h.childLanes |= n),
        (l = h.alternate),
        l !== null && (l.childLanes |= n),
        h.tag === 22 &&
          ((e = h.stateNode), e === null || e._visibility & 1 || (f = !0)),
        (e = h),
        (h = h.return));
    return e.tag === 3
      ? ((h = e.stateNode),
        f &&
          t !== null &&
          ((f = 31 - hn(n)),
          (e = h.hiddenUpdates),
          (l = e[f]),
          l === null ? (e[f] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        h)
      : null;
  }
  function ru(e) {
    if (50 < ku) throw ((ku = 0), (qs = null), Error(o(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var er = {};
  function sh(e, t, n, l) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function en(e, t, n, l) {
    return new sh(e, t, n, l);
  }
  function tr(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function la(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = en(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function hh(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Gc(e, t, n, l, f, h) {
    var m = 0;
    if (((l = e), typeof e == 'function')) tr(e) && (m = 1);
    else if (typeof e == 'string')
      m = Ag(e, n, me.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case Se:
          return (
            (e = en(31, n, t, f)),
            (e.elementType = Se),
            (e.lanes = h),
            e
          );
        case X:
          return vl(n.children, f, h, t);
        case Q:
          ((m = 8), (f |= 24));
          break;
        case I:
          return (
            (e = en(12, n, t, f | 2)),
            (e.elementType = I),
            (e.lanes = h),
            e
          );
        case fe:
          return (
            (e = en(13, n, t, f)),
            (e.elementType = fe),
            (e.lanes = h),
            e
          );
        case W:
          return ((e = en(19, n, t, f)), (e.elementType = W), (e.lanes = h), e);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case ue:
                m = 10;
                break e;
              case $:
                m = 9;
                break e;
              case V:
                m = 11;
                break e;
              case k:
                m = 14;
                break e;
              case pe:
                ((m = 16), (l = null));
                break e;
            }
          ((m = 29),
            (n = Error(o(130, e === null ? 'null' : typeof e, ''))),
            (l = null));
      }
    return (
      (t = en(m, n, t, f)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = h),
      t
    );
  }
  function vl(e, t, n, l) {
    return ((e = en(7, e, l, t)), (e.lanes = n), e);
  }
  function Zl(e, t, n) {
    return ((e = en(6, e, null, t)), (e.lanes = n), e);
  }
  function lu(e) {
    var t = en(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function iu(e, t, n) {
    return (
      (t = en(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var dh = new WeakMap();
  function kn(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = dh.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: lo(t) }), dh.set(e, t), t);
    }
    return { value: e, source: t, stack: lo(t) };
  }
  var Ql = [],
    Vl = 0,
    jt = null,
    Nt = 0,
    ia = [],
    ua = 0,
    nr = null,
    Ua = 1,
    ca = '';
  function Yn(e, t) {
    ((Ql[Vl++] = Nt), (Ql[Vl++] = jt), (jt = e), (Nt = t));
  }
  function kc(e, t, n) {
    ((ia[ua++] = Ua), (ia[ua++] = ca), (ia[ua++] = nr), (nr = e));
    var l = Ua;
    e = ca;
    var f = 32 - hn(l) - 1;
    ((l &= ~(1 << f)), (n += 1));
    var h = 32 - hn(t) + f;
    if (30 < h) {
      var m = f - (f % 5);
      ((h = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (f -= m),
        (Ua = (1 << (32 - hn(t) + f)) | (n << f) | l),
        (ca = h + e));
    } else ((Ua = (1 << h) | (n << f) | l), (ca = e));
  }
  function Rr(e) {
    e.return !== null && (Yn(e, 1), kc(e, 1, 0));
  }
  function pl(e) {
    for (; e === jt; )
      ((jt = Ql[--Vl]), (Ql[Vl] = null), (Nt = Ql[--Vl]), (Ql[Vl] = null));
    for (; e === nr; )
      ((nr = ia[--ua]),
        (ia[ua] = null),
        (ca = ia[--ua]),
        (ia[ua] = null),
        (Ua = ia[--ua]),
        (ia[ua] = null));
  }
  function Il(e, t) {
    ((ia[ua++] = Ua),
      (ia[ua++] = ca),
      (ia[ua++] = nr),
      (Ua = t.id),
      (ca = t.overflow),
      (nr = e));
  }
  var Gt = null,
    lt = null,
    Ze = !1,
    Tr = null,
    fa = !1,
    Bo = Error(o(519));
  function Er(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? 'text'
          : 'HTML',
        '',
      ),
    );
    throw (Or(kn(t, e)), Bo);
  }
  function uu(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[Pt] = e), (t[mn] = l), n)) {
      case 'dialog':
        (Xe('cancel', t), Xe('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Xe('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Zu.length; n++) Xe(Zu[n], t);
        break;
      case 'source':
        Xe('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Xe('error', t), Xe('load', t));
        break;
      case 'details':
        Xe('toggle', t);
        break;
      case 'input':
        (Xe('invalid', t),
          mc(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case 'select':
        Xe('invalid', t);
        break;
      case 'textarea':
        (Xe('invalid', t), bc(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      _1(t.textContent, n)
        ? (l.popover != null && (Xe('beforetoggle', t), Xe('toggle', t)),
          l.onScroll != null && Xe('scroll', t),
          l.onScrollEnd != null && Xe('scrollend', t),
          l.onClick != null && (t.onclick = Ja),
          (t = !0))
        : (t = !1),
      t || Er(e, !0));
  }
  function Jl(e) {
    for (Gt = e.return; Gt; )
      switch (Gt.tag) {
        case 5:
        case 31:
        case 13:
          fa = !1;
          return;
        case 27:
        case 3:
          fa = !0;
          return;
        default:
          Gt = Gt.return;
      }
  }
  function ml(e) {
    if (e !== Gt) return !1;
    if (!Ze) return (Jl(e), (Ze = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== 'form' && n !== 'button') || Kr(e.type, e.memoizedProps))),
        (n = !n)),
      n && lt && Er(e),
      Jl(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      lt = R1(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      lt = R1(e);
    } else
      t === 27
        ? ((t = lt), Ee(e.type) ? ((e = e0), (e0 = null), (lt = e)) : (lt = t))
        : (lt = Gt ? pa(e.stateNode.nextSibling) : null);
    return !0;
  }
  function C() {
    ((lt = Gt = null), (Ze = !1));
  }
  function wr() {
    var e = Tr;
    return (
      e !== null &&
        (Tn === null ? (Tn = e) : Tn.push.apply(Tn, e), (Tr = null)),
      e
    );
  }
  function Or(e) {
    Tr === null ? (Tr = [e]) : Tr.push(e);
  }
  var _n = z(null),
    De = null,
    ar = null;
  function Mr(e, t, n) {
    (he(_n, t._currentValue), (t._currentValue = n));
  }
  function rr(e) {
    ((e._currentValue = _n.current), ie(_n));
  }
  function lr(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Ho(e, t, n, l) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var h = f.dependencies;
      if (h !== null) {
        var m = f.child;
        h = h.firstContext;
        e: for (; h !== null; ) {
          var x = h;
          h = f;
          for (var O = 0; O < t.length; O++)
            if (x.context === t[O]) {
              ((h.lanes |= n),
                (x = h.alternate),
                x !== null && (x.lanes |= n),
                lr(h.return, n, e),
                l || (m = null));
              break e;
            }
          h = x.next;
        }
      } else if (f.tag === 18) {
        if (((m = f.return), m === null)) throw Error(o(341));
        ((m.lanes |= n),
          (h = m.alternate),
          h !== null && (h.lanes |= n),
          lr(m, n, e),
          (m = null));
      } else m = f.child;
      if (m !== null) m.return = f;
      else
        for (m = f; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (((f = m.sibling), f !== null)) {
            ((f.return = m.return), (m = f));
            break;
          }
          m = m.return;
        }
      f = m;
    }
  }
  function Wl(e, t, n, l) {
    e = null;
    for (var f = t, h = !1; f !== null; ) {
      if (!h) {
        if ((f.flags & 524288) !== 0) h = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var m = f.alternate;
        if (m === null) throw Error(o(387));
        if (((m = m.memoizedProps), m !== null)) {
          var x = f.type;
          wt(f.pendingProps.value, m.value) ||
            (e !== null ? e.push(x) : (e = [x]));
        }
      } else if (f === rt.current) {
        if (((m = f.alternate), m === null)) throw Error(o(387));
        m.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (e !== null ? e.push(Oi) : (e = [Oi]));
      }
      f = f.return;
    }
    (e !== null && Ho(t, e, n, l), (t.flags |= 262144));
  }
  function Yc(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!wt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function yl(e) {
    ((De = e),
      (ar = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function tn(e) {
    return gh(De, e);
  }
  function oa(e, t) {
    return (De === null && yl(e), gh(e, t));
  }
  function gh(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), ar === null)) {
      if (e === null) throw Error(o(308));
      ((ar = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else ar = ar.next = t;
    return n;
  }
  var Xd =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    Kd = r.unstable_scheduleCallback,
    $d = r.unstable_NormalPriority,
    kt = {
      $$typeof: ue,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function xa() {
    return { controller: new Xd(), data: new Map(), refCount: 0 };
  }
  function cu(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Kd($d, function () {
          e.controller.abort();
        }));
  }
  var fu = null,
    Uo = 0,
    Pl = 0,
    ei = null;
  function bl(e, t) {
    if (fu === null) {
      var n = (fu = []);
      ((Uo = 0),
        (Pl = Jn()),
        (ei = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (Uo++, t.then(vh, vh), t);
  }
  function vh() {
    if (--Uo === 0 && fu !== null) {
      ei !== null && (ei.status = 'fulfilled');
      var e = fu;
      ((fu = null), (Pl = 0), (ei = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Zd(e, t) {
    var n = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (f) {
          n.push(f);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = t));
          for (var f = 0; f < n.length; f++) (0, n[f])(t);
        },
        function (f) {
          for (l.status = 'rejected', l.reason = f, f = 0; f < n.length; f++)
            (0, n[f])(void 0);
        },
      ),
      l
    );
  }
  var sa = J.S;
  J.S = function (e, t) {
    ((Ph = qn()),
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        bl(e, t),
      sa !== null && sa(e, t));
  };
  var _l = z(null);
  function No() {
    var e = _l.current;
    return e !== null ? e : bt.pooledCache;
  }
  function Fc(e, t) {
    t === null ? he(_l, _l.current) : he(_l, t.pool);
  }
  function ph() {
    var e = No();
    return e === null ? null : { parent: kt._currentValue, pool: e };
  }
  var ti = Error(o(460)),
    Xc = Error(o(474)),
    ou = Error(o(542)),
    Kc = { then: function () {} };
  function mh(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function $c(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(Ja, Ja), (t = n)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Go(e), e);
      default:
        if (typeof t.status == 'string') t.then(Ja, Ja);
        else {
          if (((e = bt), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var f = t;
                  ((f.status = 'fulfilled'), (f.value = l));
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var f = t;
                  ((f.status = 'rejected'), (f.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), Go(e), e);
        }
        throw ((Na = t), ti);
    }
  }
  function Ca(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function'
        ? ((Na = n), ti)
        : n;
    }
  }
  var Na = null;
  function yh() {
    if (Na === null) throw Error(o(459));
    var e = Na;
    return ((Na = null), e);
  }
  function Go(e) {
    if (e === ti || e === ou) throw Error(o(483));
  }
  var ni = null,
    Fn = 0;
  function ai(e) {
    var t = Fn;
    return ((Fn += 1), ni === null && (ni = []), $c(ni, e, t));
  }
  function Aa(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function dn(e, t) {
    throw t.$$typeof === q
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e,
          ),
        ));
  }
  function bh(e) {
    function t(H, j) {
      if (e) {
        var G = H.deletions;
        G === null ? ((H.deletions = [j]), (H.flags |= 16)) : G.push(j);
      }
    }
    function n(H, j) {
      if (!e) return null;
      for (; j !== null; ) (t(H, j), (j = j.sibling));
      return null;
    }
    function l(H) {
      for (var j = new Map(); H !== null; )
        (H.key !== null ? j.set(H.key, H) : j.set(H.index, H), (H = H.sibling));
      return j;
    }
    function f(H, j) {
      return ((H = la(H, j)), (H.index = 0), (H.sibling = null), H);
    }
    function h(H, j, G) {
      return (
        (H.index = G),
        e
          ? ((G = H.alternate),
            G !== null
              ? ((G = G.index), G < j ? ((H.flags |= 67108866), j) : G)
              : ((H.flags |= 67108866), j))
          : ((H.flags |= 1048576), j)
      );
    }
    function m(H) {
      return (e && H.alternate === null && (H.flags |= 67108866), H);
    }
    function x(H, j, G, te) {
      return j === null || j.tag !== 6
        ? ((j = Zl(G, H.mode, te)), (j.return = H), j)
        : ((j = f(j, G)), (j.return = H), j);
    }
    function O(H, j, G, te) {
      var xe = G.type;
      return xe === X
        ? ee(H, j, G.props.children, te, G.key)
        : j !== null &&
            (j.elementType === xe ||
              (typeof xe == 'object' &&
                xe !== null &&
                xe.$$typeof === pe &&
                Ca(xe) === j.type))
          ? ((j = f(j, G.props)), Aa(j, G), (j.return = H), j)
          : ((j = Gc(G.type, G.key, G.props, null, H.mode, te)),
            Aa(j, G),
            (j.return = H),
            j);
    }
    function Y(H, j, G, te) {
      return j === null ||
        j.tag !== 4 ||
        j.stateNode.containerInfo !== G.containerInfo ||
        j.stateNode.implementation !== G.implementation
        ? ((j = iu(G, H.mode, te)), (j.return = H), j)
        : ((j = f(j, G.children || [])), (j.return = H), j);
    }
    function ee(H, j, G, te, xe) {
      return j === null || j.tag !== 7
        ? ((j = vl(G, H.mode, te, xe)), (j.return = H), j)
        : ((j = f(j, G)), (j.return = H), j);
    }
    function ae(H, j, G) {
      if (
        (typeof j == 'string' && j !== '') ||
        typeof j == 'number' ||
        typeof j == 'bigint'
      )
        return ((j = Zl('' + j, H.mode, G)), (j.return = H), j);
      if (typeof j == 'object' && j !== null) {
        switch (j.$$typeof) {
          case B:
            return (
              (G = Gc(j.type, j.key, j.props, null, H.mode, G)),
              Aa(G, j),
              (G.return = H),
              G
            );
          case N:
            return ((j = iu(j, H.mode, G)), (j.return = H), j);
          case pe:
            return ((j = Ca(j)), ae(H, j, G));
        }
        if (ct(j) || Ue(j))
          return ((j = vl(j, H.mode, G, null)), (j.return = H), j);
        if (typeof j.then == 'function') return ae(H, ai(j), G);
        if (j.$$typeof === ue) return ae(H, oa(H, j), G);
        dn(H, j);
      }
      return null;
    }
    function F(H, j, G, te) {
      var xe = j !== null ? j.key : null;
      if (
        (typeof G == 'string' && G !== '') ||
        typeof G == 'number' ||
        typeof G == 'bigint'
      )
        return xe !== null ? null : x(H, j, '' + G, te);
      if (typeof G == 'object' && G !== null) {
        switch (G.$$typeof) {
          case B:
            return G.key === xe ? O(H, j, G, te) : null;
          case N:
            return G.key === xe ? Y(H, j, G, te) : null;
          case pe:
            return ((G = Ca(G)), F(H, j, G, te));
        }
        if (ct(G) || Ue(G)) return xe !== null ? null : ee(H, j, G, te, null);
        if (typeof G.then == 'function') return F(H, j, ai(G), te);
        if (G.$$typeof === ue) return F(H, j, oa(H, G), te);
        dn(H, G);
      }
      return null;
    }
    function Z(H, j, G, te, xe) {
      if (
        (typeof te == 'string' && te !== '') ||
        typeof te == 'number' ||
        typeof te == 'bigint'
      )
        return ((H = H.get(G) || null), x(j, H, '' + te, xe));
      if (typeof te == 'object' && te !== null) {
        switch (te.$$typeof) {
          case B:
            return (
              (H = H.get(te.key === null ? G : te.key) || null),
              O(j, H, te, xe)
            );
          case N:
            return (
              (H = H.get(te.key === null ? G : te.key) || null),
              Y(j, H, te, xe)
            );
          case pe:
            return ((te = Ca(te)), Z(H, j, G, te, xe));
        }
        if (ct(te) || Ue(te))
          return ((H = H.get(G) || null), ee(j, H, te, xe, null));
        if (typeof te.then == 'function') return Z(H, j, G, ai(te), xe);
        if (te.$$typeof === ue) return Z(H, j, G, oa(j, te), xe);
        dn(j, te);
      }
      return null;
    }
    function ve(H, j, G, te) {
      for (
        var xe = null, Ie = null, ye = j, He = (j = 0), $e = null;
        ye !== null && He < G.length;
        He++
      ) {
        ye.index > He ? (($e = ye), (ye = null)) : ($e = ye.sibling);
        var Je = F(H, ye, G[He], te);
        if (Je === null) {
          ye === null && (ye = $e);
          break;
        }
        (e && ye && Je.alternate === null && t(H, ye),
          (j = h(Je, j, He)),
          Ie === null ? (xe = Je) : (Ie.sibling = Je),
          (Ie = Je),
          (ye = $e));
      }
      if (He === G.length) return (n(H, ye), Ze && Yn(H, He), xe);
      if (ye === null) {
        for (; He < G.length; He++)
          ((ye = ae(H, G[He], te)),
            ye !== null &&
              ((j = h(ye, j, He)),
              Ie === null ? (xe = ye) : (Ie.sibling = ye),
              (Ie = ye)));
        return (Ze && Yn(H, He), xe);
      }
      for (ye = l(ye); He < G.length; He++)
        (($e = Z(ye, H, He, G[He], te)),
          $e !== null &&
            (e &&
              $e.alternate !== null &&
              ye.delete($e.key === null ? He : $e.key),
            (j = h($e, j, He)),
            Ie === null ? (xe = $e) : (Ie.sibling = $e),
            (Ie = $e)));
      return (
        e &&
          ye.forEach(function (Jr) {
            return t(H, Jr);
          }),
        Ze && Yn(H, He),
        xe
      );
    }
    function Te(H, j, G, te) {
      if (G == null) throw Error(o(151));
      for (
        var xe = null,
          Ie = null,
          ye = j,
          He = (j = 0),
          $e = null,
          Je = G.next();
        ye !== null && !Je.done;
        He++, Je = G.next()
      ) {
        ye.index > He ? (($e = ye), (ye = null)) : ($e = ye.sibling);
        var Jr = F(H, ye, Je.value, te);
        if (Jr === null) {
          ye === null && (ye = $e);
          break;
        }
        (e && ye && Jr.alternate === null && t(H, ye),
          (j = h(Jr, j, He)),
          Ie === null ? (xe = Jr) : (Ie.sibling = Jr),
          (Ie = Jr),
          (ye = $e));
      }
      if (Je.done) return (n(H, ye), Ze && Yn(H, He), xe);
      if (ye === null) {
        for (; !Je.done; He++, Je = G.next())
          ((Je = ae(H, Je.value, te)),
            Je !== null &&
              ((j = h(Je, j, He)),
              Ie === null ? (xe = Je) : (Ie.sibling = Je),
              (Ie = Je)));
        return (Ze && Yn(H, He), xe);
      }
      for (ye = l(ye); !Je.done; He++, Je = G.next())
        ((Je = Z(ye, H, He, Je.value, te)),
          Je !== null &&
            (e &&
              Je.alternate !== null &&
              ye.delete(Je.key === null ? He : Je.key),
            (j = h(Je, j, He)),
            Ie === null ? (xe = Je) : (Ie.sibling = Je),
            (Ie = Je)));
      return (
        e &&
          ye.forEach(function (jg) {
            return t(H, jg);
          }),
        Ze && Yn(H, He),
        xe
      );
    }
    function pt(H, j, G, te) {
      if (
        (typeof G == 'object' &&
          G !== null &&
          G.type === X &&
          G.key === null &&
          (G = G.props.children),
        typeof G == 'object' && G !== null)
      ) {
        switch (G.$$typeof) {
          case B:
            e: {
              for (var xe = G.key; j !== null; ) {
                if (j.key === xe) {
                  if (((xe = G.type), xe === X)) {
                    if (j.tag === 7) {
                      (n(H, j.sibling),
                        (te = f(j, G.props.children)),
                        (te.return = H),
                        (H = te));
                      break e;
                    }
                  } else if (
                    j.elementType === xe ||
                    (typeof xe == 'object' &&
                      xe !== null &&
                      xe.$$typeof === pe &&
                      Ca(xe) === j.type)
                  ) {
                    (n(H, j.sibling),
                      (te = f(j, G.props)),
                      Aa(te, G),
                      (te.return = H),
                      (H = te));
                    break e;
                  }
                  n(H, j);
                  break;
                } else t(H, j);
                j = j.sibling;
              }
              G.type === X
                ? ((te = vl(G.props.children, H.mode, te, G.key)),
                  (te.return = H),
                  (H = te))
                : ((te = Gc(G.type, G.key, G.props, null, H.mode, te)),
                  Aa(te, G),
                  (te.return = H),
                  (H = te));
            }
            return m(H);
          case N:
            e: {
              for (xe = G.key; j !== null; ) {
                if (j.key === xe)
                  if (
                    j.tag === 4 &&
                    j.stateNode.containerInfo === G.containerInfo &&
                    j.stateNode.implementation === G.implementation
                  ) {
                    (n(H, j.sibling),
                      (te = f(j, G.children || [])),
                      (te.return = H),
                      (H = te));
                    break e;
                  } else {
                    n(H, j);
                    break;
                  }
                else t(H, j);
                j = j.sibling;
              }
              ((te = iu(G, H.mode, te)), (te.return = H), (H = te));
            }
            return m(H);
          case pe:
            return ((G = Ca(G)), pt(H, j, G, te));
        }
        if (ct(G)) return ve(H, j, G, te);
        if (Ue(G)) {
          if (((xe = Ue(G)), typeof xe != 'function')) throw Error(o(150));
          return ((G = xe.call(G)), Te(H, j, G, te));
        }
        if (typeof G.then == 'function') return pt(H, j, ai(G), te);
        if (G.$$typeof === ue) return pt(H, j, oa(H, G), te);
        dn(H, G);
      }
      return (typeof G == 'string' && G !== '') ||
        typeof G == 'number' ||
        typeof G == 'bigint'
        ? ((G = '' + G),
          j !== null && j.tag === 6
            ? (n(H, j.sibling), (te = f(j, G)), (te.return = H), (H = te))
            : (n(H, j), (te = Zl(G, H.mode, te)), (te.return = H), (H = te)),
          m(H))
        : n(H, j);
    }
    return function (H, j, G, te) {
      try {
        Fn = 0;
        var xe = pt(H, j, G, te);
        return ((ni = null), xe);
      } catch (ye) {
        if (ye === ti || ye === ou) throw ye;
        var Ie = en(29, ye, null, H.mode);
        return ((Ie.lanes = te), (Ie.return = H), Ie);
      } finally {
      }
    };
  }
  var zr = bh(!0),
    ko = bh(!1),
    ha = !1;
  function Ga(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Zc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function jr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ra(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (Pe & 2) !== 0)) {
      var f = l.pending;
      return (
        f === null ? (t.next = t) : ((t.next = f.next), (f.next = t)),
        (l.pending = t),
        (t = ru(e)),
        Lo(e, null, n),
        t
      );
    }
    return (gl(e, l, t, n), ru(e));
  }
  function su(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), z0(e, n));
    }
  }
  function Qc(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var f = null,
        h = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var m = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (h === null ? (f = h = m) : (h = h.next = m), (n = n.next));
        } while (n !== null);
        h === null ? (f = h = t) : (h = h.next = t);
      } else f = h = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: h,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Kt = !1;
  function Sl() {
    if (Kt) {
      var e = ei;
      if (e !== null) throw e;
    }
  }
  function ri(e, t, n, l) {
    Kt = !1;
    var f = e.updateQueue;
    ha = !1;
    var h = f.firstBaseUpdate,
      m = f.lastBaseUpdate,
      x = f.shared.pending;
    if (x !== null) {
      f.shared.pending = null;
      var O = x,
        Y = O.next;
      ((O.next = null), m === null ? (h = Y) : (m.next = Y), (m = O));
      var ee = e.alternate;
      ee !== null &&
        ((ee = ee.updateQueue),
        (x = ee.lastBaseUpdate),
        x !== m &&
          (x === null ? (ee.firstBaseUpdate = Y) : (x.next = Y),
          (ee.lastBaseUpdate = O)));
    }
    if (h !== null) {
      var ae = f.baseState;
      ((m = 0), (ee = Y = O = null), (x = h));
      do {
        var F = x.lane & -536870913,
          Z = F !== x.lane;
        if (Z ? (Ke & F) === F : (l & F) === F) {
          (F !== 0 && F === Pl && (Kt = !0),
            ee !== null &&
              (ee = ee.next =
                {
                  lane: 0,
                  tag: x.tag,
                  payload: x.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var ve = e,
              Te = x;
            F = t;
            var pt = n;
            switch (Te.tag) {
              case 1:
                if (((ve = Te.payload), typeof ve == 'function')) {
                  ae = ve.call(pt, ae, F);
                  break e;
                }
                ae = ve;
                break e;
              case 3:
                ve.flags = (ve.flags & -65537) | 128;
              case 0:
                if (
                  ((ve = Te.payload),
                  (F = typeof ve == 'function' ? ve.call(pt, ae, F) : ve),
                  F == null)
                )
                  break e;
                ae = T({}, ae, F);
                break e;
              case 2:
                ha = !0;
            }
          }
          ((F = x.callback),
            F !== null &&
              ((e.flags |= 64),
              Z && (e.flags |= 8192),
              (Z = f.callbacks),
              Z === null ? (f.callbacks = [F]) : Z.push(F)));
        } else
          ((Z = {
            lane: F,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null,
          }),
            ee === null ? ((Y = ee = Z), (O = ae)) : (ee = ee.next = Z),
            (m |= F));
        if (((x = x.next), x === null)) {
          if (((x = f.shared.pending), x === null)) break;
          ((Z = x),
            (x = Z.next),
            (Z.next = null),
            (f.lastBaseUpdate = Z),
            (f.shared.pending = null));
        }
      } while (!0);
      (ee === null && (O = ae),
        (f.baseState = O),
        (f.firstBaseUpdate = Y),
        (f.lastBaseUpdate = ee),
        h === null && (f.shared.lanes = 0),
        (Gr |= m),
        (e.lanes = m),
        (e.memoizedState = ae));
    }
  }
  function Ta(e, t) {
    if (typeof e != 'function') throw Error(o(191, e));
    e.call(t);
  }
  function Vc(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Ta(n[e], t);
  }
  var ir = z(null),
    ka = z(0);
  function Yo(e, t) {
    ((e = ja), he(ka, e), he(ir, t), (ja = e | t.baseLanes));
  }
  function nn() {
    (he(ka, ja), he(ir, ir.current));
  }
  function hu() {
    ((ja = ka.current), ie(ir), ie(ka));
  }
  var Xn = z(null),
    da = null;
  function Dr(e) {
    var t = e.alternate;
    (he(Bt, Bt.current & 1),
      he(Xn, e),
      da === null &&
        (t === null || ir.current !== null || t.memoizedState !== null) &&
        (da = e));
  }
  function du(e) {
    (he(Bt, Bt.current), he(Xn, e), da === null && (da = e));
  }
  function _h(e) {
    e.tag === 22
      ? (he(Bt, Bt.current), he(Xn, e), da === null && (da = e))
      : ga();
  }
  function ga() {
    (he(Bt, Bt.current), he(Xn, Xn.current));
  }
  function Sn(e) {
    (ie(Xn), da === e && (da = null), ie(Bt));
  }
  var Bt = z(0);
  function Ic(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || qf(n) || Ci(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === 'forwards' ||
          t.memoizedProps.revealOrder === 'backwards' ||
          t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          t.memoizedProps.revealOrder === 'together')
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Kn = 0,
    qe = null,
    gt = null,
    Dt = null,
    gu = !1,
    li = !1,
    xl = !1,
    Jc = 0,
    ii = 0,
    qr = null,
    Qd = 0;
  function Rt() {
    throw Error(o(321));
  }
  function Wc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!wt(e[n], t[n])) return !1;
    return !0;
  }
  function Pc(e, t, n, l, f, h) {
    return (
      (Kn = h),
      (qe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (J.H = e === null || e.memoizedState === null ? zh : ff),
      (xl = !1),
      (h = n(l, f)),
      (xl = !1),
      li && (h = vu(t, n, l, f)),
      Fo(e),
      h
    );
  }
  function Fo(e) {
    J.H = Br;
    var t = gt !== null && gt.next !== null;
    if (((Kn = 0), (Dt = gt = qe = null), (gu = !1), (ii = 0), (qr = null), t))
      throw Error(o(300));
    e === null ||
      Ot ||
      ((e = e.dependencies), e !== null && Yc(e) && (Ot = !0));
  }
  function vu(e, t, n, l) {
    qe = e;
    var f = 0;
    do {
      if ((li && (qr = null), (ii = 0), (li = !1), 25 <= f))
        throw Error(o(301));
      if (((f += 1), (Dt = gt = null), e.updateQueue != null)) {
        var h = e.updateQueue;
        ((h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0));
      }
      ((J.H = Cu), (h = t(n, l)));
    } while (li);
    return h;
  }
  function Vd() {
    var e = J.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ci(t) : t),
      (e = e.useState()[0]),
      (gt !== null ? gt.memoizedState : null) !== e && (qe.flags |= 1024),
      t
    );
  }
  function ef() {
    var e = Jc !== 0;
    return ((Jc = 0), e);
  }
  function tf(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Xo(e) {
    if (gu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      gu = !1;
    }
    ((Kn = 0), (Dt = gt = qe = null), (li = !1), (ii = Jc = 0), (qr = null));
  }
  function un() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Dt === null ? (qe.memoizedState = Dt = e) : (Dt = Dt.next = e), Dt);
  }
  function Ht() {
    if (gt === null) {
      var e = qe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = gt.next;
    var t = Dt === null ? qe.memoizedState : Dt.next;
    if (t !== null) ((Dt = t), (gt = e));
    else {
      if (e === null)
        throw qe.alternate === null ? Error(o(467)) : Error(o(310));
      ((gt = e),
        (e = {
          memoizedState: gt.memoizedState,
          baseState: gt.baseState,
          baseQueue: gt.baseQueue,
          queue: gt.queue,
          next: null,
        }),
        Dt === null ? (qe.memoizedState = Dt = e) : (Dt = Dt.next = e));
    }
    return Dt;
  }
  function ui() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ci(e) {
    var t = ii;
    return (
      (ii += 1),
      qr === null && (qr = []),
      (e = $c(qr, e, t)),
      (t = qe),
      (Dt === null ? t.memoizedState : Dt.next) === null &&
        ((t = t.alternate),
        (J.H = t === null || t.memoizedState === null ? zh : ff)),
      e
    );
  }
  function fi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ci(e);
      if (e.$$typeof === ue) return tn(e);
    }
    throw Error(o(438, String(e)));
  }
  function Ko(e) {
    var t = null,
      n = qe.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = qe.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = ui()), (qe.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = Ce;
    return (t.index++, n);
  }
  function Ea(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Le(e) {
    var t = Ht();
    return $o(t, gt, e);
  }
  function $o(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var f = e.baseQueue,
      h = l.pending;
    if (h !== null) {
      if (f !== null) {
        var m = f.next;
        ((f.next = h.next), (h.next = m));
      }
      ((t.baseQueue = f = h), (l.pending = null));
    }
    if (((h = e.baseState), f === null)) e.memoizedState = h;
    else {
      t = f.next;
      var x = (m = null),
        O = null,
        Y = t,
        ee = !1;
      do {
        var ae = Y.lane & -536870913;
        if (ae !== Y.lane ? (Ke & ae) === ae : (Kn & ae) === ae) {
          var F = Y.revertLane;
          if (F === 0)
            (O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: Y.action,
                  hasEagerState: Y.hasEagerState,
                  eagerState: Y.eagerState,
                  next: null,
                }),
              ae === Pl && (ee = !0));
          else if ((Kn & F) === F) {
            ((Y = Y.next), F === Pl && (ee = !0));
            continue;
          } else
            ((ae = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null,
            }),
              O === null ? ((x = O = ae), (m = h)) : (O = O.next = ae),
              (qe.lanes |= F),
              (Gr |= F));
          ((ae = Y.action),
            xl && n(h, ae),
            (h = Y.hasEagerState ? Y.eagerState : n(h, ae)));
        } else
          ((F = {
            lane: ae,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null,
          }),
            O === null ? ((x = O = F), (m = h)) : (O = O.next = F),
            (qe.lanes |= ae),
            (Gr |= ae));
        Y = Y.next;
      } while (Y !== null && Y !== t);
      if (
        (O === null ? (m = h) : (O.next = x),
        !wt(h, e.memoizedState) && ((Ot = !0), ee && ((n = ei), n !== null)))
      )
        throw n;
      ((e.memoizedState = h),
        (e.baseState = m),
        (e.baseQueue = O),
        (l.lastRenderedState = h));
    }
    return (f === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Zo(e) {
    var t = Ht(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      f = n.pending,
      h = t.memoizedState;
    if (f !== null) {
      n.pending = null;
      var m = (f = f.next);
      do ((h = e(h, m.action)), (m = m.next));
      while (m !== f);
      (wt(h, t.memoizedState) || (Ot = !0),
        (t.memoizedState = h),
        t.baseQueue === null && (t.baseState = h),
        (n.lastRenderedState = h));
    }
    return [h, l];
  }
  function oi(e, t, n) {
    var l = qe,
      f = Ht(),
      h = Ze;
    if (h) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var m = !wt((gt || f).memoizedState, n);
    if (
      (m && ((f.memoizedState = n), (Ot = !0)),
      (f = f.queue),
      bu(xh.bind(null, l, f, e), [e]),
      f.getSnapshot !== t || m || (Dt !== null && Dt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Zn(9, { destroy: void 0 }, Sh.bind(null, l, f, n, t), null),
        bt === null)
      )
        throw Error(o(349));
      h || (Kn & 127) !== 0 || Qo(l, t, n);
    }
    return n;
  }
  function Qo(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = qe.updateQueue),
      t === null
        ? ((t = ui()), (qe.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Sh(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), $n(t) && Ch(e));
  }
  function xh(e, t, n) {
    return n(function () {
      $n(t) && Ch(e);
    });
  }
  function $n(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !wt(e, n);
    } catch {
      return !0;
    }
  }
  function Ch(e) {
    var t = Ha(e, 2);
    t !== null && En(t, e, 2);
  }
  function si(e) {
    var t = un();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), xl)) {
        La(!0);
        try {
          n();
        } finally {
          La(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: e,
      }),
      t
    );
  }
  function nf(e, t, n, l) {
    return ((e.baseState = n), $o(e, gt, typeof l == 'function' ? l : Ea));
  }
  function Ah(e, t, n, l, f) {
    if (Su(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var h = {
        payload: f,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          h.listeners.push(m);
        },
      };
      (J.T !== null ? n(!0) : (h.isTransition = !1),
        l(h),
        (n = t.pending),
        n === null
          ? ((h.next = t.pending = h), Vo(t, h))
          : ((h.next = n.next), (t.pending = n.next = h)));
    }
  }
  function Vo(e, t) {
    var n = t.action,
      l = t.payload,
      f = e.state;
    if (t.isTransition) {
      var h = J.T,
        m = {};
      J.T = m;
      try {
        var x = n(f, l),
          O = J.S;
        (O !== null && O(m, x), xn(e, t, x));
      } catch (Y) {
        pu(e, t, Y);
      } finally {
        (h !== null && m.types !== null && (h.types = m.types), (J.T = h));
      }
    } else
      try {
        ((h = n(f, l)), xn(e, t, h));
      } catch (Y) {
        pu(e, t, Y);
      }
  }
  function xn(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            ur(e, t, l);
          },
          function (l) {
            return pu(e, t, l);
          },
        )
      : ur(e, t, n);
  }
  function ur(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Io(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Vo(e, n))));
  }
  function pu(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = n), Io(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Io(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function mu(e, t) {
    return t;
  }
  function Jo(e, t) {
    if (Ze) {
      var n = bt.formState;
      if (n !== null) {
        e: {
          var l = qe;
          if (Ze) {
            if (lt) {
              t: {
                for (var f = lt, h = fa; f.nodeType !== 8; ) {
                  if (!h) {
                    f = null;
                    break t;
                  }
                  if (((f = pa(f.nextSibling)), f === null)) {
                    f = null;
                    break t;
                  }
                }
                ((h = f.data), (f = h === 'F!' || h === 'F' ? f : null));
              }
              if (f) {
                ((lt = pa(f.nextSibling)), (l = f.data === 'F!'));
                break e;
              }
            }
            Er(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = un()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mu,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = cs.bind(null, qe, l)),
      (l.dispatch = n),
      (l = si(!1)),
      (h = di.bind(null, qe, !1, l.queue)),
      (l = un()),
      (f = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = f),
      (n = Ah.bind(null, qe, f, h, n)),
      (f.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function af(e) {
    var t = Ht();
    return Wo(t, gt, e);
  }
  function Wo(e, t, n) {
    if (
      ((t = $o(e, t, mu)[0]),
      (e = Le(Ea)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = ci(t);
      } catch (m) {
        throw m === ti ? ou : m;
      }
    else l = t;
    t = Ht();
    var f = t.queue,
      h = f.dispatch;
    return (
      n !== t.memoizedState &&
        ((qe.flags |= 2048),
        Zn(9, { destroy: void 0 }, Po.bind(null, f, n), null)),
      [l, h, e]
    );
  }
  function Po(e, t) {
    e.action = t;
  }
  function rf(e) {
    var t = Ht(),
      n = gt;
    if (n !== null) return Wo(t, n, e);
    (Ht(), (t = t.memoizedState), (n = Ht()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function Zn(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = qe.updateQueue),
      t === null && ((t = ui()), (qe.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Rh() {
    return Ht().memoizedState;
  }
  function wa(e, t, n, l) {
    var f = un();
    ((qe.flags |= e),
      (f.memoizedState = Zn(
        1 | t,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l,
      )));
  }
  function yu(e, t, n, l) {
    var f = Ht();
    l = l === void 0 ? null : l;
    var h = f.memoizedState.inst;
    gt !== null && l !== null && Wc(l, gt.memoizedState.deps)
      ? (f.memoizedState = Zn(t, h, n, l))
      : ((qe.flags |= e), (f.memoizedState = Zn(1 | t, h, n, l)));
  }
  function es(e, t) {
    wa(8390656, 8, e, t);
  }
  function bu(e, t) {
    yu(2048, 8, e, t);
  }
  function Id(e) {
    qe.flags |= 4;
    var t = qe.updateQueue;
    if (t === null) ((t = ui()), (qe.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Th(e) {
    var t = Ht().memoizedState;
    return (
      Id({ ref: t, nextImpl: e }),
      function () {
        if ((Pe & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Eh(e, t) {
    return yu(4, 2, e, t);
  }
  function ts(e, t) {
    return yu(4, 4, e, t);
  }
  function ns(e, t) {
    if (typeof t == 'function') {
      e = e();
      var n = t(e);
      return function () {
        typeof n == 'function' ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function wh(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), yu(4, 4, ns.bind(null, t, e), n));
  }
  function lf() {}
  function as(e, t) {
    var n = Ht();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Wc(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function gn(e, t) {
    var n = Ht();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Wc(t, l[1])) return l[0];
    if (((l = e()), xl)) {
      La(!0);
      try {
        e();
      } finally {
        La(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function va(e, t, n) {
    return n === void 0 || ((Kn & 1073741824) !== 0 && (Ke & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = t1()), (qe.lanes |= e), (Gr |= e), n);
  }
  function Oh(e, t, n, l) {
    return wt(n, t)
      ? n
      : ir.current !== null
        ? ((e = va(e, n, l)), wt(e, t) || (Ot = !0), e)
        : (Kn & 42) === 0 || ((Kn & 1073741824) !== 0 && (Ke & 261930) === 0)
          ? ((Ot = !0), (e.memoizedState = n))
          : ((e = t1()), (qe.lanes |= e), (Gr |= e), t);
  }
  function Mh(e, t, n, l, f) {
    var h = ne.p;
    ne.p = h !== 0 && 8 > h ? h : 8;
    var m = J.T,
      x = {};
    ((J.T = x), di(e, !1, t, n));
    try {
      var O = f(),
        Y = J.S;
      if (
        (Y !== null && Y(x, O),
        O !== null && typeof O == 'object' && typeof O.then == 'function')
      ) {
        var ee = Zd(O, l);
        hi(e, t, ee, In(e));
      } else hi(e, t, l, In(e));
    } catch (ae) {
      hi(e, t, { then: function () {}, status: 'rejected', reason: ae }, In());
    } finally {
      ((ne.p = h),
        m !== null && x.types !== null && (m.types = x.types),
        (J.T = m));
    }
  }
  function uf() {}
  function Lr(e, t, n, l) {
    if (e.tag !== 5) throw Error(o(476));
    var f = rs(e).queue;
    Mh(
      e,
      f,
      t,
      se,
      n === null
        ? uf
        : function () {
            return (ls(e), n(l));
          },
    );
  }
  function rs(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: se,
      baseState: se,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ea,
        lastRenderedState: se,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ea,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function ls(e) {
    var t = rs(e);
    (t.next === null && (t = e.alternate.memoizedState),
      hi(e, t.next.queue, {}, In()));
  }
  function is() {
    return tn(Oi);
  }
  function us() {
    return Ht().memoizedState;
  }
  function Cl() {
    return Ht().memoizedState;
  }
  function _u(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = In();
          e = jr(n);
          var l = Ra(t, e, n);
          (l !== null && (En(l, t, n), su(l, t, n)),
            (t = { cache: xa() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Jd(e, t, n) {
    var l = In();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Su(e)
        ? xu(t, n)
        : ((n = Nc(e, t, n, l)), n !== null && (En(n, e, l), cf(n, t, l))));
  }
  function cs(e, t, n) {
    var l = In();
    hi(e, t, n, l);
  }
  function hi(e, t, n, l) {
    var f = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Su(e)) xu(t, f);
    else {
      var h = e.alternate;
      if (
        e.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = t.lastRenderedReducer), h !== null)
      )
        try {
          var m = t.lastRenderedState,
            x = h(m, n);
          if (((f.hasEagerState = !0), (f.eagerState = x), wt(x, m)))
            return (gl(e, t, f, 0), bt === null && Sa(), !1);
        } catch {
        } finally {
        }
      if (((n = Nc(e, t, f, l)), n !== null))
        return (En(n, e, l), cf(n, t, l), !0);
    }
    return !1;
  }
  function di(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Jn(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Su(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = Nc(e, n, l, 2)), t !== null && En(t, e, 2));
  }
  function Su(e) {
    var t = e.alternate;
    return e === qe || (t !== null && t === qe);
  }
  function xu(e, t) {
    li = gu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function cf(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), z0(e, n));
    }
  }
  var Br = {
    readContext: tn,
    use: fi,
    useCallback: Rt,
    useContext: Rt,
    useEffect: Rt,
    useImperativeHandle: Rt,
    useLayoutEffect: Rt,
    useInsertionEffect: Rt,
    useMemo: Rt,
    useReducer: Rt,
    useRef: Rt,
    useState: Rt,
    useDebugValue: Rt,
    useDeferredValue: Rt,
    useTransition: Rt,
    useSyncExternalStore: Rt,
    useId: Rt,
    useHostTransitionStatus: Rt,
    useFormState: Rt,
    useActionState: Rt,
    useOptimistic: Rt,
    useMemoCache: Rt,
    useCacheRefresh: Rt,
  };
  Br.useEffectEvent = Rt;
  var zh = {
      readContext: tn,
      use: fi,
      useCallback: function (e, t) {
        return ((un().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: tn,
      useEffect: es,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          wa(4194308, 4, ns.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return wa(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        wa(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = un();
        t = t === void 0 ? null : t;
        var l = e();
        if (xl) {
          La(!0);
          try {
            e();
          } finally {
            La(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = un();
        if (n !== void 0) {
          var f = n(t);
          if (xl) {
            La(!0);
            try {
              n(t);
            } finally {
              La(!1);
            }
          }
        } else f = t;
        return (
          (l.memoizedState = l.baseState = f),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: f,
          }),
          (l.queue = e),
          (e = e.dispatch = Jd.bind(null, qe, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = un();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = si(e);
        var t = e.queue,
          n = cs.bind(null, qe, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: lf,
      useDeferredValue: function (e, t) {
        var n = un();
        return va(n, e, t);
      },
      useTransition: function () {
        var e = si(!1);
        return (
          (e = Mh.bind(null, qe, e.queue, !0, !1)),
          (un().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = qe,
          f = un();
        if (Ze) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), bt === null)) throw Error(o(349));
          (Ke & 127) !== 0 || Qo(l, t, n);
        }
        f.memoizedState = n;
        var h = { value: n, getSnapshot: t };
        return (
          (f.queue = h),
          es(xh.bind(null, l, h, e), [e]),
          (l.flags |= 2048),
          Zn(9, { destroy: void 0 }, Sh.bind(null, l, h, n, t), null),
          n
        );
      },
      useId: function () {
        var e = un(),
          t = bt.identifierPrefix;
        if (Ze) {
          var n = ca,
            l = Ua;
          ((n = (l & ~(1 << (32 - hn(l) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = Jc++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = Qd++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: is,
      useFormState: Jo,
      useActionState: Jo,
      useOptimistic: function (e) {
        var t = un();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = di.bind(null, qe, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Ko,
      useCacheRefresh: function () {
        return (un().memoizedState = _u.bind(null, qe));
      },
      useEffectEvent: function (e) {
        var t = un(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((Pe & 2) !== 0) throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ff = {
      readContext: tn,
      use: fi,
      useCallback: as,
      useContext: tn,
      useEffect: bu,
      useImperativeHandle: wh,
      useInsertionEffect: Eh,
      useLayoutEffect: ts,
      useMemo: gn,
      useReducer: Le,
      useRef: Rh,
      useState: function () {
        return Le(Ea);
      },
      useDebugValue: lf,
      useDeferredValue: function (e, t) {
        var n = Ht();
        return Oh(n, gt.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Le(Ea)[0],
          t = Ht().memoizedState;
        return [typeof e == 'boolean' ? e : ci(e), t];
      },
      useSyncExternalStore: oi,
      useId: us,
      useHostTransitionStatus: is,
      useFormState: af,
      useActionState: af,
      useOptimistic: function (e, t) {
        var n = Ht();
        return nf(n, gt, e, t);
      },
      useMemoCache: Ko,
      useCacheRefresh: Cl,
    };
  ff.useEffectEvent = Th;
  var Cu = {
    readContext: tn,
    use: fi,
    useCallback: as,
    useContext: tn,
    useEffect: bu,
    useImperativeHandle: wh,
    useInsertionEffect: Eh,
    useLayoutEffect: ts,
    useMemo: gn,
    useReducer: Zo,
    useRef: Rh,
    useState: function () {
      return Zo(Ea);
    },
    useDebugValue: lf,
    useDeferredValue: function (e, t) {
      var n = Ht();
      return gt === null ? va(n, e, t) : Oh(n, gt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Zo(Ea)[0],
        t = Ht().memoizedState;
      return [typeof e == 'boolean' ? e : ci(e), t];
    },
    useSyncExternalStore: oi,
    useId: us,
    useHostTransitionStatus: is,
    useFormState: rf,
    useActionState: rf,
    useOptimistic: function (e, t) {
      var n = Ht();
      return gt !== null
        ? nf(n, gt, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Ko,
    useCacheRefresh: Cl,
  };
  Cu.useEffectEvent = Th;
  function of(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : T({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Au = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = In(),
        f = jr(l);
      ((f.payload = t),
        n != null && (f.callback = n),
        (t = Ra(e, f, l)),
        t !== null && (En(t, e, l), su(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = In(),
        f = jr(l);
      ((f.tag = 1),
        (f.payload = t),
        n != null && (f.callback = n),
        (t = Ra(e, f, l)),
        t !== null && (En(t, e, l), su(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = In(),
        l = jr(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ra(e, l, n)),
        t !== null && (En(t, e, n), su(t, e, n)));
    },
  };
  function jh(e, t, n, l, f, h, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, h, m)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Yl(n, l) || !Yl(f, h)
          : !0
    );
  }
  function fs(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Au.enqueueReplaceState(t, t.state, null));
  }
  function vn(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = T({}, n));
      for (var f in e) n[f] === void 0 && (n[f] = e[f]);
    }
    return n;
  }
  function os(e) {
    Uc(e);
  }
  function ss(e) {
    console.error(e);
  }
  function Dh(e) {
    Uc(e);
  }
  function Ru(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function qh(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function hs(e, t, n) {
    return (
      (n = jr(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Ru(e, t);
      }),
      n
    );
  }
  function Ya(e) {
    return ((e = jr(e)), (e.tag = 3), e);
  }
  function sf(e, t, n, l) {
    var f = n.type.getDerivedStateFromError;
    if (typeof f == 'function') {
      var h = l.value;
      ((e.payload = function () {
        return f(h);
      }),
        (e.callback = function () {
          qh(t, n, l);
        }));
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == 'function' &&
      (e.callback = function () {
        (qh(t, n, l),
          typeof f != 'function' &&
            (kr === null ? (kr = new Set([this])) : kr.add(this)));
        var x = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: x !== null ? x : '',
        });
      });
  }
  function ds(e, t, n, l, f) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == 'object' && typeof l.then == 'function')
    ) {
      if (
        ((t = n.alternate),
        t !== null && Wl(t, n, f, !0),
        (n = Xn.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              da === null ? Rf() : n.alternate === null && Mt === 0 && (Mt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = f),
              l === Kc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  Ys(e, l, f)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Kc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Ys(e, l, f)),
              !1
            );
        }
        throw Error(o(435, n.tag));
      }
      return (Ys(e, l, f), Rf(), !1);
    }
    if (Ze)
      return (
        (t = Xn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = f),
            l !== Bo && ((e = Error(o(422), { cause: l })), Or(kn(e, n))))
          : (l !== Bo && ((t = Error(o(423), { cause: l })), Or(kn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (f &= -f),
            (e.lanes |= f),
            (l = kn(l, n)),
            (f = hs(e.stateNode, l, f)),
            Qc(e, f),
            Mt !== 4 && (Mt = 2)),
        !1
      );
    var h = Error(o(520), { cause: l });
    if (
      ((h = kn(h, n)),
      Nu === null ? (Nu = [h]) : Nu.push(h),
      Mt !== 4 && (Mt = 2),
      t === null)
    )
      return !0;
    ((l = kn(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = f & -f),
            (n.lanes |= e),
            (e = hs(n.stateNode, l, e)),
            Qc(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (h = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (h !== null &&
                  typeof h.componentDidCatch == 'function' &&
                  (kr === null || !kr.has(h)))))
          )
            return (
              (n.flags |= 65536),
              (f &= -f),
              (n.lanes |= f),
              (f = Ya(f)),
              sf(f, e, n, l),
              Qc(n, f),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Tu = Error(o(461)),
    Ot = !1;
  function qt(e, t, n, l) {
    t.child = e === null ? ko(t, null, n, l) : zr(t, e.child, n, l);
  }
  function Re(e, t, n, l, f) {
    n = n.render;
    var h = t.ref;
    if ('ref' in l) {
      var m = {};
      for (var x in l) x !== 'ref' && (m[x] = l[x]);
    } else m = l;
    return (
      yl(t),
      (l = Pc(e, t, n, m, h, f)),
      (x = ef()),
      e !== null && !Ot
        ? (tf(e, t, f), Fa(e, t, f))
        : (Ze && x && Rr(t), (t.flags |= 1), qt(e, t, l, f), t.child)
    );
  }
  function Eu(e, t, n, l, f) {
    if (e === null) {
      var h = n.type;
      return typeof h == 'function' &&
        !tr(h) &&
        h.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = h), hf(e, t, h, l, f))
        : ((e = Gc(n.type, null, l, t, t.mode, f)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((h = e.child), !mf(e, f))) {
      var m = h.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Yl), n(m, l) && e.ref === t.ref)
      )
        return Fa(e, t, f);
    }
    return (
      (t.flags |= 1),
      (e = la(h, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function hf(e, t, n, l, f) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (Yl(h, l) && e.ref === t.ref)
        if (((Ot = !1), (t.pendingProps = l = h), mf(e, f)))
          (e.flags & 131072) !== 0 && (Ot = !0);
        else return ((t.lanes = e.lanes), Fa(e, t, f));
    }
    return vf(e, t, n, l, f);
  }
  function Hr(e, t, n, l) {
    var f = l.children,
      h = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((h = h !== null ? h.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, f = 0; l !== null; )
            ((f = f | l.lanes | l.childLanes), (l = l.sibling));
          l = f & ~h;
        } else ((l = 0), (t.child = null));
        return df(e, t, h, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Fc(t, h !== null ? h.cachePool : null),
          h !== null ? Yo(t, h) : nn(),
          _h(t));
      else
        return (
          (l = t.lanes = 536870912),
          df(e, t, h !== null ? h.baseLanes | n : n, n, l)
        );
    } else
      h !== null
        ? (Fc(t, h.cachePool), Yo(t, h), ga(), (t.memoizedState = null))
        : (e !== null && Fc(t, null), nn(), ga());
    return (qt(e, t, f, n), t.child);
  }
  function wu(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function df(e, t, n, l, f) {
    var h = No();
    return (
      (h = h === null ? null : { parent: kt._currentValue, pool: h }),
      (t.memoizedState = { baseLanes: n, cachePool: h }),
      e !== null && Fc(t, null),
      nn(),
      _h(t),
      e !== null && Wl(e, t, l, !0),
      (t.childLanes = f),
      null
    );
  }
  function Ou(e, t) {
    return (
      (t = pf({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function an(e, t, n) {
    return (
      zr(t, e.child, null, n),
      (e = Ou(t, t.pendingProps)),
      (e.flags |= 2),
      Sn(t),
      (t.memoizedState = null),
      e
    );
  }
  function Wd(e, t, n) {
    var l = t.pendingProps,
      f = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Ze) {
        if (l.mode === 'hidden')
          return ((e = Ou(t, l)), (t.lanes = 536870912), wu(null, e));
        if (
          (du(t),
          (e = lt)
            ? ((e = A1(e, fa)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: nr !== null ? { id: Ua, overflow: ca } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = lu(e)),
                (n.return = t),
                (t.child = n),
                (Gt = t),
                (lt = null)))
            : (e = null),
          e === null)
        )
          throw Er(t);
        return ((t.lanes = 536870912), null);
      }
      return Ou(t, l);
    }
    var h = e.memoizedState;
    if (h !== null) {
      var m = h.dehydrated;
      if ((du(t), f))
        if (t.flags & 256) ((t.flags &= -257), (t = an(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (Ot || Wl(e, t, n, !1), (f = (n & e.childLanes) !== 0), Ot || f)
      ) {
        if (
          ((l = bt),
          l !== null && ((m = sc(l, n)), m !== 0 && m !== h.retryLane))
        )
          throw ((h.retryLane = m), Ha(e, m), En(l, e, m), Tu);
        (Rf(), (t = an(e, t, n)));
      } else
        ((e = h.treeContext),
          (lt = pa(m.nextSibling)),
          (Gt = t),
          (Ze = !0),
          (Tr = null),
          (fa = !1),
          e !== null && Il(t, e),
          (t = Ou(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = la(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function gf(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function vf(e, t, n, l, f) {
    return (
      yl(t),
      (n = Pc(e, t, n, l, void 0, f)),
      (l = ef()),
      e !== null && !Ot
        ? (tf(e, t, f), Fa(e, t, f))
        : (Ze && l && Rr(t), (t.flags |= 1), qt(e, t, n, f), t.child)
    );
  }
  function Lh(e, t, n, l, f, h) {
    return (
      yl(t),
      (t.updateQueue = null),
      (n = vu(t, l, n, f)),
      Fo(e),
      (l = ef()),
      e !== null && !Ot
        ? (tf(e, t, h), Fa(e, t, h))
        : (Ze && l && Rr(t), (t.flags |= 1), qt(e, t, n, h), t.child)
    );
  }
  function gs(e, t, n, l, f) {
    if ((yl(t), t.stateNode === null)) {
      var h = er,
        m = n.contextType;
      (typeof m == 'object' && m !== null && (h = tn(m)),
        (h = new n(l, h)),
        (t.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = Au),
        (t.stateNode = h),
        (h._reactInternals = t),
        (h = t.stateNode),
        (h.props = l),
        (h.state = t.memoizedState),
        (h.refs = {}),
        Ga(t),
        (m = n.contextType),
        (h.context = typeof m == 'object' && m !== null ? tn(m) : er),
        (h.state = t.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == 'function' && (of(t, n, m, l), (h.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof h.getSnapshotBeforeUpdate == 'function' ||
          (typeof h.UNSAFE_componentWillMount != 'function' &&
            typeof h.componentWillMount != 'function') ||
          ((m = h.state),
          typeof h.componentWillMount == 'function' && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == 'function' &&
            h.UNSAFE_componentWillMount(),
          m !== h.state && Au.enqueueReplaceState(h, h.state, null),
          ri(t, l, h, f),
          Sl(),
          (h.state = t.memoizedState)),
        typeof h.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      h = t.stateNode;
      var x = t.memoizedProps,
        O = vn(n, x);
      h.props = O;
      var Y = h.context,
        ee = n.contextType;
      ((m = er), typeof ee == 'object' && ee !== null && (m = tn(ee)));
      var ae = n.getDerivedStateFromProps;
      ((ee =
        typeof ae == 'function' ||
        typeof h.getSnapshotBeforeUpdate == 'function'),
        (x = t.pendingProps !== x),
        ee ||
          (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof h.componentWillReceiveProps != 'function') ||
          ((x || Y !== m) && fs(t, h, l, m)),
        (ha = !1));
      var F = t.memoizedState;
      ((h.state = F),
        ri(t, l, h, f),
        Sl(),
        (Y = t.memoizedState),
        x || F !== Y || ha
          ? (typeof ae == 'function' &&
              (of(t, n, ae, l), (Y = t.memoizedState)),
            (O = ha || jh(t, n, O, l, F, Y, m))
              ? (ee ||
                  (typeof h.UNSAFE_componentWillMount != 'function' &&
                    typeof h.componentWillMount != 'function') ||
                  (typeof h.componentWillMount == 'function' &&
                    h.componentWillMount(),
                  typeof h.UNSAFE_componentWillMount == 'function' &&
                    h.UNSAFE_componentWillMount()),
                typeof h.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof h.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = Y)),
            (h.props = l),
            (h.state = Y),
            (h.context = m),
            (l = O))
          : (typeof h.componentDidMount == 'function' && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((h = t.stateNode),
        Zc(e, t),
        (m = t.memoizedProps),
        (ee = vn(n, m)),
        (h.props = ee),
        (ae = t.pendingProps),
        (F = h.context),
        (Y = n.contextType),
        (O = er),
        typeof Y == 'object' && Y !== null && (O = tn(Y)),
        (x = n.getDerivedStateFromProps),
        (Y =
          typeof x == 'function' ||
          typeof h.getSnapshotBeforeUpdate == 'function') ||
          (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof h.componentWillReceiveProps != 'function') ||
          ((m !== ae || F !== O) && fs(t, h, l, O)),
        (ha = !1),
        (F = t.memoizedState),
        (h.state = F),
        ri(t, l, h, f),
        Sl());
      var Z = t.memoizedState;
      m !== ae ||
      F !== Z ||
      ha ||
      (e !== null && e.dependencies !== null && Yc(e.dependencies))
        ? (typeof x == 'function' && (of(t, n, x, l), (Z = t.memoizedState)),
          (ee =
            ha ||
            jh(t, n, ee, l, F, Z, O) ||
            (e !== null && e.dependencies !== null && Yc(e.dependencies)))
            ? (Y ||
                (typeof h.UNSAFE_componentWillUpdate != 'function' &&
                  typeof h.componentWillUpdate != 'function') ||
                (typeof h.componentWillUpdate == 'function' &&
                  h.componentWillUpdate(l, Z, O),
                typeof h.UNSAFE_componentWillUpdate == 'function' &&
                  h.UNSAFE_componentWillUpdate(l, Z, O)),
              typeof h.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof h.componentDidUpdate != 'function' ||
                (m === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != 'function' ||
                (m === e.memoizedProps && F === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = Z)),
          (h.props = l),
          (h.state = Z),
          (h.context = O),
          (l = ee))
        : (typeof h.componentDidUpdate != 'function' ||
            (m === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != 'function' ||
            (m === e.memoizedProps && F === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (h = l),
      gf(e, t),
      (l = (t.flags & 128) !== 0),
      h || l
        ? ((h = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != 'function'
              ? null
              : h.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = zr(t, e.child, null, f)),
              (t.child = zr(t, null, n, f)))
            : qt(e, t, n, f),
          (t.memoizedState = h.state),
          (e = t.child))
        : (e = Fa(e, t, f)),
      e
    );
  }
  function Bh(e, t, n, l) {
    return (C(), (t.flags |= 256), qt(e, t, n, l), t.child);
  }
  var vs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ps(e) {
    return { baseLanes: e, cachePool: ph() };
  }
  function Oa(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Vn), e);
  }
  function cn(e, t, n) {
    var l = t.pendingProps,
      f = !1,
      h = (t.flags & 128) !== 0,
      m;
    if (
      ((m = h) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (Bt.current & 2) !== 0),
      m && ((f = !0), (t.flags &= -129)),
      (m = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Ze) {
        if (
          (f ? Dr(t) : ga(),
          (e = lt)
            ? ((e = A1(e, fa)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: nr !== null ? { id: Ua, overflow: ca } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = lu(e)),
                (n.return = t),
                (t.child = n),
                (Gt = t),
                (lt = null)))
            : (e = null),
          e === null)
        )
          throw Er(t);
        return (Ci(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var x = l.children;
      return (
        (l = l.fallback),
        f
          ? (ga(),
            (f = t.mode),
            (x = pf({ mode: 'hidden', children: x }, f)),
            (l = vl(l, f, n, null)),
            (x.return = t),
            (l.return = t),
            (x.sibling = l),
            (t.child = x),
            (l = t.child),
            (l.memoizedState = ps(n)),
            (l.childLanes = Oa(e, m, n)),
            (t.memoizedState = vs),
            wu(null, l))
          : (Dr(t), Mu(t, x))
      );
    }
    var O = e.memoizedState;
    if (O !== null && ((x = O.dehydrated), x !== null)) {
      if (h)
        t.flags & 256
          ? (Dr(t), (t.flags &= -257), (t = zu(e, t, n)))
          : t.memoizedState !== null
            ? (ga(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ga(),
              (x = l.fallback),
              (f = t.mode),
              (l = pf({ mode: 'visible', children: l.children }, f)),
              (x = vl(x, f, n, null)),
              (x.flags |= 2),
              (l.return = t),
              (x.return = t),
              (l.sibling = x),
              (t.child = l),
              zr(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = ps(n)),
              (l.childLanes = Oa(e, m, n)),
              (t.memoizedState = vs),
              (t = wu(null, l)));
      else if ((Dr(t), Ci(x))) {
        if (((m = x.nextSibling && x.nextSibling.dataset), m)) var Y = m.dgst;
        ((m = Y),
          (l = Error(o(419))),
          (l.stack = ''),
          (l.digest = m),
          Or({ value: l, source: null, stack: null }),
          (t = zu(e, t, n)));
      } else if (
        (Ot || Wl(e, t, n, !1), (m = (n & e.childLanes) !== 0), Ot || m)
      ) {
        if (
          ((m = bt),
          m !== null && ((l = sc(m, n)), l !== 0 && l !== O.retryLane))
        )
          throw ((O.retryLane = l), Ha(e, l), En(m, e, l), Tu);
        (qf(x) || Rf(), (t = zu(e, t, n)));
      } else
        qf(x)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = O.treeContext),
            (lt = pa(x.nextSibling)),
            (Gt = t),
            (Ze = !0),
            (Tr = null),
            (fa = !1),
            e !== null && Il(t, e),
            (t = Mu(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return f
      ? (ga(),
        (x = l.fallback),
        (f = t.mode),
        (O = e.child),
        (Y = O.sibling),
        (l = la(O, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = O.subtreeFlags & 65011712),
        Y !== null ? (x = la(Y, x)) : ((x = vl(x, f, n, null)), (x.flags |= 2)),
        (x.return = t),
        (l.return = t),
        (l.sibling = x),
        (t.child = l),
        wu(null, l),
        (l = t.child),
        (x = e.child.memoizedState),
        x === null
          ? (x = ps(n))
          : ((f = x.cachePool),
            f !== null
              ? ((O = kt._currentValue),
                (f = f.parent !== O ? { parent: O, pool: O } : f))
              : (f = ph()),
            (x = { baseLanes: x.baseLanes | n, cachePool: f })),
        (l.memoizedState = x),
        (l.childLanes = Oa(e, m, n)),
        (t.memoizedState = vs),
        wu(e.child, l))
      : (Dr(t),
        (n = e.child),
        (e = n.sibling),
        (n = la(n, { mode: 'visible', children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((m = t.deletions),
          m === null ? ((t.deletions = [e]), (t.flags |= 16)) : m.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function Mu(e, t) {
    return (
      (t = pf({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function pf(e, t) {
    return ((e = en(22, e, null, t)), (e.lanes = 0), e);
  }
  function zu(e, t, n) {
    return (
      zr(t, e.child, null, n),
      (e = Mu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Hh(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), lr(e.return, t, n));
  }
  function ms(e, t, n, l, f, h) {
    var m = e.memoizedState;
    m === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: f,
          treeForkCount: h,
        })
      : ((m.isBackwards = t),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = l),
        (m.tail = n),
        (m.tailMode = f),
        (m.treeForkCount = h));
  }
  function gi(e, t, n) {
    var l = t.pendingProps,
      f = l.revealOrder,
      h = l.tail;
    l = l.children;
    var m = Bt.current,
      x = (m & 2) !== 0;
    if (
      (x ? ((m = (m & 1) | 2), (t.flags |= 128)) : (m &= 1),
      he(Bt, m),
      qt(e, t, l, n),
      (l = Ze ? Nt : 0),
      !x && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Hh(e, n, t);
        else if (e.tag === 19) Hh(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (f) {
      case 'forwards':
        for (n = t.child, f = null; n !== null; )
          ((e = n.alternate),
            e !== null && Ic(e) === null && (f = n),
            (n = n.sibling));
        ((n = f),
          n === null
            ? ((f = t.child), (t.child = null))
            : ((f = n.sibling), (n.sibling = null)),
          ms(t, !1, f, n, h, l));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, f = t.child, t.child = null; f !== null; ) {
          if (((e = f.alternate), e !== null && Ic(e) === null)) {
            t.child = f;
            break;
          }
          ((e = f.sibling), (f.sibling = n), (n = f), (f = e));
        }
        ms(t, !0, n, null, h, l);
        break;
      case 'together':
        ms(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Fa(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Gr |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Wl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = la(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = la(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function mf(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Yc(e)));
  }
  function Pd(e, t, n) {
    switch (t.tag) {
      case 3:
        (Ft(t, t.stateNode.containerInfo),
          Mr(t, kt, e.memoizedState.cache),
          C());
        break;
      case 27:
      case 5:
        Hi(t);
        break;
      case 4:
        Ft(t, t.stateNode.containerInfo);
        break;
      case 10:
        Mr(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), du(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (Dr(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? cn(e, t, n)
              : (Dr(t), (e = Fa(e, t, n)), e !== null ? e.sibling : null);
        Dr(t);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Wl(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          f)
        ) {
          if (l) return gi(e, t, n);
          t.flags |= 128;
        }
        if (
          ((f = t.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          he(Bt, Bt.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Hr(e, t, n, t.pendingProps));
      case 24:
        Mr(t, kt, e.memoizedState.cache);
    }
    return Fa(e, t, n);
  }
  function Uh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Ot = !0;
      else {
        if (!mf(e, n) && (t.flags & 128) === 0) return ((Ot = !1), Pd(e, t, n));
        Ot = (e.flags & 131072) !== 0;
      }
    else ((Ot = !1), Ze && (t.flags & 1048576) !== 0 && kc(t, Nt, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = Ca(t.elementType)), (t.type = e), typeof e == 'function'))
            tr(e)
              ? ((l = vn(e, l)), (t.tag = 1), (t = gs(null, t, e, l, n)))
              : ((t.tag = 0), (t = vf(null, t, e, l, n)));
          else {
            if (e != null) {
              var f = e.$$typeof;
              if (f === V) {
                ((t.tag = 11), (t = Re(null, t, e, l, n)));
                break e;
              } else if (f === k) {
                ((t.tag = 14), (t = Eu(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = ut(e) || e), Error(o(306, t, '')));
          }
        }
        return t;
      case 0:
        return vf(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (f = vn(l, t.pendingProps)), gs(e, t, l, f, n));
      case 3:
        e: {
          if ((Ft(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          l = t.pendingProps;
          var h = t.memoizedState;
          ((f = h.element), Zc(e, t), ri(t, l, null, n));
          var m = t.memoizedState;
          if (
            ((l = m.cache),
            Mr(t, kt, l),
            l !== h.cache && Ho(t, [kt], n, !0),
            Sl(),
            (l = m.element),
            h.isDehydrated)
          )
            if (
              ((h = { element: l, isDehydrated: !1, cache: m.cache }),
              (t.updateQueue.baseState = h),
              (t.memoizedState = h),
              t.flags & 256)
            ) {
              t = Bh(e, t, l, n);
              break e;
            } else if (l !== f) {
              ((f = kn(Error(o(424)), t)), Or(f), (t = Bh(e, t, l, n)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                lt = pa(e.firstChild),
                  Gt = t,
                  Ze = !0,
                  Tr = null,
                  fa = !0,
                  n = ko(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((C(), l === f)) {
              t = Fa(e, t, n);
              break e;
            }
            qt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          gf(e, t),
          e === null
            ? (n = M1(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Ze ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Ju(Ne.current).createElement(n)),
                (l[Pt] = t),
                (l[mn] = e),
                rn(l, n, e),
                Qt(l),
                (t.stateNode = l))
            : (t.memoizedState = M1(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Hi(t),
          e === null &&
            Ze &&
            ((l = t.stateNode = E1(t.type, t.pendingProps, Ne.current)),
            (Gt = t),
            (fa = !0),
            (f = lt),
            Ee(t.type) ? ((e0 = f), (lt = pa(l.firstChild))) : (lt = f)),
          qt(e, t, t.pendingProps.children, n),
          gf(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Ze &&
            ((f = l = lt) &&
              ((l = vg(l, t.type, t.pendingProps, fa)),
              l !== null
                ? ((t.stateNode = l),
                  (Gt = t),
                  (lt = pa(l.firstChild)),
                  (fa = !1),
                  (f = !0))
                : (f = !1)),
            f || Er(t)),
          Hi(t),
          (f = t.type),
          (h = t.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (l = h.children),
          Kr(f, h) ? (l = null) : m !== null && Kr(f, m) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((f = Pc(e, t, Vd, null, null, n)), (Oi._currentValue = f)),
          gf(e, t),
          qt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Ze &&
            ((e = n = lt) &&
              ((n = it(n, t.pendingProps, fa)),
              n !== null
                ? ((t.stateNode = n), (Gt = t), (lt = null), (e = !0))
                : (e = !1)),
            e || Er(t)),
          null
        );
      case 13:
        return cn(e, t, n);
      case 4:
        return (
          Ft(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = zr(t, null, l, n)) : qt(e, t, l, n),
          t.child
        );
      case 11:
        return Re(e, t, t.type, t.pendingProps, n);
      case 7:
        return (qt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (qt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (qt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          Mr(t, t.type, l.value),
          qt(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (f = t.type._context),
          (l = t.pendingProps.children),
          yl(t),
          (f = tn(f)),
          (l = l(f)),
          (t.flags |= 1),
          qt(e, t, l, n),
          t.child
        );
      case 14:
        return Eu(e, t, t.type, t.pendingProps, n);
      case 15:
        return hf(e, t, t.type, t.pendingProps, n);
      case 19:
        return gi(e, t, n);
      case 31:
        return Wd(e, t, n);
      case 22:
        return Hr(e, t, n, t.pendingProps);
      case 24:
        return (
          yl(t),
          (l = tn(kt)),
          e === null
            ? ((f = No()),
              f === null &&
                ((f = bt),
                (h = xa()),
                (f.pooledCache = h),
                h.refCount++,
                h !== null && (f.pooledCacheLanes |= n),
                (f = h)),
              (t.memoizedState = { parent: l, cache: f }),
              Ga(t),
              Mr(t, kt, f))
            : ((e.lanes & n) !== 0 && (Zc(e, t), ri(t, null, null, n), Sl()),
              (f = e.memoizedState),
              (h = t.memoizedState),
              f.parent !== l
                ? ((f = { parent: l, cache: l }),
                  (t.memoizedState = f),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = f),
                  Mr(t, kt, l))
                : ((l = h.cache),
                  Mr(t, kt, l),
                  l !== f.cache && Ho(t, [kt], n, !0))),
          qt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function cr(e) {
    e.flags |= 4;
  }
  function ys(e, t, n, l, f) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (f & 335544128) === f))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Yu()) e.flags |= 8192;
        else throw ((Na = Kc), Xc);
    } else e.flags &= -16777217;
  }
  function bs(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !L1(t)))
      if (Yu()) e.flags |= 8192;
      else throw ((Na = Kc), Xc);
  }
  function ju(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? so() : 536870912), (e.lanes |= t), (yi |= t)));
  }
  function Du(e, t) {
    if (!Ze)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function yt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var f = e.child; f !== null; )
        ((n |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags & 65011712),
          (l |= f.flags & 65011712),
          (f.return = e),
          (f = f.sibling));
    else
      for (f = e.child; f !== null; )
        ((n |= f.lanes | f.childLanes),
          (l |= f.subtreeFlags),
          (l |= f.flags),
          (f.return = e),
          (f = f.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function Nh(e, t, n) {
    var l = t.pendingProps;
    switch ((pl(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (yt(t), null);
      case 1:
        return (yt(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          rr(kt),
          _t(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (ml(t)
              ? cr(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), wr())),
          yt(t),
          null
        );
      case 26:
        var f = t.type,
          h = t.memoizedState;
        return (
          e === null
            ? (cr(t),
              h !== null ? (yt(t), bs(t, h)) : (yt(t), ys(t, f, null, l, n)))
            : h
              ? h !== e.memoizedState
                ? (cr(t), yt(t), bs(t, h))
                : (yt(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && cr(t),
                yt(t),
                ys(t, f, e, l, n)),
          null
        );
      case 27:
        if (
          (el(t),
          (n = Ne.current),
          (f = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && cr(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (yt(t), null);
          }
          ((e = me.current),
            ml(t) ? uu(t) : ((e = E1(f, l, n)), (t.stateNode = e), cr(t)));
        }
        return (yt(t), null);
      case 5:
        if ((el(t), (f = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && cr(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (yt(t), null);
          }
          if (((h = me.current), ml(t))) uu(t);
          else {
            var m = Ju(Ne.current);
            switch (h) {
              case 1:
                h = m.createElementNS('http://www.w3.org/2000/svg', f);
                break;
              case 2:
                h = m.createElementNS('http://www.w3.org/1998/Math/MathML', f);
                break;
              default:
                switch (f) {
                  case 'svg':
                    h = m.createElementNS('http://www.w3.org/2000/svg', f);
                    break;
                  case 'math':
                    h = m.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      f,
                    );
                    break;
                  case 'script':
                    ((h = m.createElement('div')),
                      (h.innerHTML = '<script><\/script>'),
                      (h = h.removeChild(h.firstChild)));
                    break;
                  case 'select':
                    ((h =
                      typeof l.is == 'string'
                        ? m.createElement('select', { is: l.is })
                        : m.createElement('select')),
                      l.multiple
                        ? (h.multiple = !0)
                        : l.size && (h.size = l.size));
                    break;
                  default:
                    h =
                      typeof l.is == 'string'
                        ? m.createElement(f, { is: l.is })
                        : m.createElement(f);
                }
            }
            ((h[Pt] = t), (h[mn] = l));
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6) h.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                ((m.child.return = m), (m = m.child));
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t) break e;
                m = m.return;
              }
              ((m.sibling.return = m.return), (m = m.sibling));
            }
            t.stateNode = h;
            e: switch ((rn(h, f, l), f)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                l = !!l.autoFocus;
                break e;
              case 'img':
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && cr(t);
          }
        }
        return (
          yt(t),
          ys(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && cr(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(o(166));
          if (((e = Ne.current), ml(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (f = Gt),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  l = f.memoizedProps;
              }
            ((e[Pt] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                _1(e.nodeValue, n)
              )),
              e || Er(t, !0));
          } else
            ((e = Ju(e).createTextNode(l)), (e[Pt] = t), (t.stateNode = e));
        }
        return (yt(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = ml(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(557));
              e[Pt] = t;
            } else
              (C(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (yt(t), (e = !1));
          } else
            ((n = wr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Sn(t), t) : (Sn(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (yt(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((f = ml(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!f) throw Error(o(318));
              if (
                ((f = t.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(o(317));
              f[Pt] = t;
            } else
              (C(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (yt(t), (f = !1));
          } else
            ((f = wr()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = f),
              (f = !0));
          if (!f) return t.flags & 256 ? (Sn(t), t) : (Sn(t), null);
        }
        return (
          Sn(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (f = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (f = l.alternate.memoizedState.cachePool.pool),
                (h = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (h = l.memoizedState.cachePool.pool),
                h !== f && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              ju(t, t.updateQueue),
              yt(t),
              null)
        );
      case 4:
        return (_t(), e === null && Zs(t.stateNode.containerInfo), yt(t), null);
      case 10:
        return (rr(t.type), yt(t), null);
      case 19:
        if ((ie(Bt), (l = t.memoizedState), l === null)) return (yt(t), null);
        if (((f = (t.flags & 128) !== 0), (h = l.rendering), h === null))
          if (f) Du(l, !1);
          else {
            if (Mt !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((h = Ic(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      Du(l, !1),
                      e = h.updateQueue,
                      t.updateQueue = e,
                      ju(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (hh(n, e), (n = n.sibling));
                  return (
                    he(Bt, (Bt.current & 1) | 2),
                    Ze && Yn(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              qn() > Tl &&
              ((t.flags |= 128), (f = !0), Du(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!f)
            if (((e = Ic(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (f = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                ju(t, e),
                Du(l, !0),
                l.tail === null &&
                  l.tailMode === 'hidden' &&
                  !h.alternate &&
                  !Ze)
              )
                return (yt(t), null);
            } else
              2 * qn() - l.renderingStartTime > Tl &&
                n !== 536870912 &&
                ((t.flags |= 128), (f = !0), Du(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((h.sibling = t.child), (t.child = h))
            : ((e = l.last),
              e !== null ? (e.sibling = h) : (t.child = h),
              (l.last = h));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = qn()),
            (e.sibling = null),
            (n = Bt.current),
            he(Bt, f ? (n & 1) | 2 : n & 1),
            Ze && Yn(t, l.treeForkCount),
            e)
          : (yt(t), null);
      case 22:
      case 23:
        return (
          Sn(t),
          hu(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : yt(t),
          (n = t.updateQueue),
          n !== null && ju(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && ie(_l),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          rr(kt),
          yt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function qu(e, t) {
    switch ((pl(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          rr(kt),
          _t(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (el(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Sn(t), t.alternate === null)) throw Error(o(340));
          C();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Sn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          C();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (ie(Bt), null);
      case 4:
        return (_t(), null);
      case 10:
        return (rr(t.type), null);
      case 22:
      case 23:
        return (
          Sn(t),
          hu(),
          e !== null && ie(_l),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (rr(kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yf(e, t) {
    switch ((pl(t), t.tag)) {
      case 3:
        (rr(kt), _t());
        break;
      case 26:
      case 27:
      case 5:
        el(t);
        break;
      case 4:
        _t();
        break;
      case 31:
        t.memoizedState !== null && Sn(t);
        break;
      case 13:
        Sn(t);
        break;
      case 19:
        ie(Bt);
        break;
      case 10:
        rr(t.type);
        break;
      case 22:
      case 23:
        (Sn(t), hu(), e !== null && ie(_l));
        break;
      case 24:
        rr(kt);
    }
  }
  function vi(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var f = l.next;
        n = f;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var h = n.create,
              m = n.inst;
            ((l = h()), (m.destroy = l));
          }
          n = n.next;
        } while (n !== f);
      }
    } catch (x) {
      st(t, t.return, x);
    }
  }
  function fr(e, t, n) {
    try {
      var l = t.updateQueue,
        f = l !== null ? l.lastEffect : null;
      if (f !== null) {
        var h = f.next;
        l = h;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst,
              x = m.destroy;
            if (x !== void 0) {
              ((m.destroy = void 0), (f = t));
              var O = n,
                Y = x;
              try {
                Y();
              } catch (ee) {
                st(f, O, ee);
              }
            }
          }
          l = l.next;
        } while (l !== h);
      }
    } catch (ee) {
      st(t, t.return, ee);
    }
  }
  function Lu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Vc(t, n);
      } catch (l) {
        st(e, e.return, l);
      }
    }
  }
  function _s(e, t, n) {
    ((n.props = vn(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      st(e, t, l);
    }
  }
  function Cn(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == 'function' ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (f) {
      st(e, t, f);
    }
  }
  function fn(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (f) {
          st(e, t, f);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (f) {
          st(e, t, f);
        }
      else n.current = null;
  }
  function Gh(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && l.focus();
          break e;
        case 'img':
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (f) {
      st(e, e.return, f);
    }
  }
  function bf(e, t, n) {
    try {
      var l = e.stateNode;
      (hg(l, e.type, n, t), (l[mn] = t));
    } catch (f) {
      st(e, e.return, f);
    }
  }
  function kh(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Ee(e.type)) ||
      e.tag === 4
    );
  }
  function Ss(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || kh(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Ee(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xs(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === 'HTML'
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === 'HTML'
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Ja)));
    else if (
      l !== 4 &&
      (l === 27 && Ee(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (xs(e, t, n), e = e.sibling; e !== null; )
        (xs(e, t, n), (e = e.sibling));
  }
  function _f(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && Ee(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (_f(e, t, n), e = e.sibling; e !== null; )
        (_f(e, t, n), (e = e.sibling));
  }
  function Yh(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, f = t.attributes; f.length; )
        t.removeAttributeNode(f[0]);
      (rn(t, l, n), (t[Pt] = e), (t[mn] = n));
    } catch (h) {
      st(e, e.return, h);
    }
  }
  var or = !1,
    Yt = !1,
    Cs = !1,
    Fh = typeof WeakSet == 'function' ? WeakSet : Set,
    Vt = null;
  function eg(e, t) {
    if (((e = e.containerInfo), (Iu = kf), (e = ch(e)), qo(e))) {
      if ('selectionStart' in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var f = l.anchorOffset,
              h = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, h.nodeType);
            } catch {
              n = null;
              break e;
            }
            var m = 0,
              x = -1,
              O = -1,
              Y = 0,
              ee = 0,
              ae = e,
              F = null;
            t: for (;;) {
              for (
                var Z;
                ae !== n || (f !== 0 && ae.nodeType !== 3) || (x = m + f),
                  ae !== h || (l !== 0 && ae.nodeType !== 3) || (O = m + l),
                  ae.nodeType === 3 && (m += ae.nodeValue.length),
                  (Z = ae.firstChild) !== null;
              )
                ((F = ae), (ae = Z));
              for (;;) {
                if (ae === e) break t;
                if (
                  (F === n && ++Y === f && (x = m),
                  F === h && ++ee === l && (O = m),
                  (Z = ae.nextSibling) !== null)
                )
                  break;
                ((ae = F), (F = ae.parentNode));
              }
              ae = Z;
            }
            n = x === -1 || O === -1 ? null : { start: x, end: O };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Js = { focusedElem: e, selectionRange: n }, kf = !1, Vt = t;
      Vt !== null;
    )
      if (
        ((t = Vt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (Vt = e));
      else
        for (; Vt !== null; ) {
          switch (((t = Vt), (h = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((f = e[n]), (f.ref.impl = f.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && h !== null) {
                ((e = void 0),
                  (n = t),
                  (f = h.memoizedProps),
                  (h = h.memoizedState),
                  (l = n.stateNode));
                try {
                  var ve = vn(n.type, f);
                  ((e = l.getSnapshotBeforeUpdate(ve, h)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (Te) {
                  st(n, n.return, Te);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Df(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Df(e);
                      break;
                    default:
                      e.textContent = '';
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
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (Vt = e));
            break;
          }
          Vt = t.return;
        }
  }
  function As(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (hr(e, n), l & 4 && vi(5, n));
        break;
      case 1:
        if ((hr(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              st(n, n.return, m);
            }
          else {
            var f = vn(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(f, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              st(n, n.return, m);
            }
          }
        (l & 64 && Lu(n), l & 512 && Cn(n, n.return));
        break;
      case 3:
        if ((hr(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Vc(e, t);
          } catch (m) {
            st(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Yh(n);
      case 26:
      case 5:
        (hr(e, n), t === null && l & 4 && Gh(n), l & 512 && Cn(n, n.return));
        break;
      case 12:
        hr(e, n);
        break;
      case 31:
        (hr(e, n), l & 4 && Ts(e, n));
        break;
      case 13:
        (hr(e, n),
          l & 4 && Kh(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = wf.bind(null, n)), pg(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || or), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || Yt), (f = or));
          var h = Yt;
          ((or = l),
            (Yt = t) && !h ? Xa(e, n, (n.subtreeFlags & 8772) !== 0) : hr(e, n),
            (or = f),
            (Yt = h));
        }
        break;
      case 30:
        break;
      default:
        hr(e, n);
    }
  }
  function Rs(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Rs(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && po(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var St = null,
    An = !1;
  function sr(e, t, n) {
    for (n = n.child; n !== null; ) (Xh(e, t, n), (n = n.sibling));
  }
  function Xh(e, t, n) {
    if (sn && typeof sn.onCommitFiberUnmount == 'function')
      try {
        sn.onCommitFiberUnmount(al, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Yt || fn(n, t),
          sr(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Yt || fn(n, t);
        var l = St,
          f = An;
        (Ee(n.type) && ((St = n.stateNode), (An = !1)),
          sr(e, t, n),
          Pu(n.stateNode),
          (St = l),
          (An = f));
        break;
      case 5:
        Yt || fn(n, t);
      case 6:
        if (
          ((l = St),
          (f = An),
          (St = null),
          sr(e, t, n),
          (St = l),
          (An = f),
          St !== null)
        )
          if (An)
            try {
              (St.nodeType === 9
                ? St.body
                : St.nodeName === 'HTML'
                  ? St.ownerDocument.body
                  : St
              ).removeChild(n.stateNode);
            } catch (h) {
              st(n, t, h);
            }
          else
            try {
              St.removeChild(n.stateNode);
            } catch (h) {
              st(n, t, h);
            }
        break;
      case 18:
        St !== null &&
          (An
            ? ((e = St),
              Ps(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              zi(e))
            : Ps(St, n.stateNode));
        break;
      case 4:
        ((l = St),
          (f = An),
          (St = n.stateNode.containerInfo),
          (An = !0),
          sr(e, t, n),
          (St = l),
          (An = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (fr(2, n, t), Yt || fr(4, n, t), sr(e, t, n));
        break;
      case 1:
        (Yt ||
          (fn(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == 'function' && _s(n, t, l)),
          sr(e, t, n));
        break;
      case 21:
        sr(e, t, n);
        break;
      case 22:
        ((Yt = (l = Yt) || n.memoizedState !== null), sr(e, t, n), (Yt = l));
        break;
      default:
        sr(e, t, n);
    }
  }
  function Ts(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        zi(e);
      } catch (n) {
        st(t, t.return, n);
      }
    }
  }
  function Kh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        zi(e);
      } catch (n) {
        st(t, t.return, n);
      }
  }
  function tg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Fh()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Fh()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Sf(e, t) {
    var n = tg(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var f = cg.bind(null, e, l);
        l.then(f, f);
      }
    });
  }
  function Rn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var f = n[l],
          h = e,
          m = t,
          x = m;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Ee(x.type)) {
                ((St = x.stateNode), (An = !1));
                break e;
              }
              break;
            case 5:
              ((St = x.stateNode), (An = !1));
              break e;
            case 3:
            case 4:
              ((St = x.stateNode.containerInfo), (An = !0));
              break e;
          }
          x = x.return;
        }
        if (St === null) throw Error(o(160));
        (Xh(h, m, f),
          (St = null),
          (An = !1),
          (h = f.alternate),
          h !== null && (h.return = null),
          (f.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) ($h(t, e), (t = t.sibling));
  }
  var Ma = null;
  function $h(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Rn(t, e),
          xt(e),
          l & 4 && (fr(3, e, e.return), vi(3, e), fr(5, e, e.return)));
        break;
      case 1:
        (Rn(t, e),
          xt(e),
          l & 512 && (Yt || n === null || fn(n, n.return)),
          l & 64 &&
            or &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var f = Ma;
        if (
          (Rn(t, e),
          xt(e),
          l & 512 && (Yt || n === null || fn(n, n.return)),
          l & 4)
        ) {
          var h = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (n = e.memoizedProps),
                    (f = f.ownerDocument || f));
                  t: switch (l) {
                    case 'title':
                      ((h = f.getElementsByTagName('title')[0]),
                        (!h ||
                          h[Xi] ||
                          h[Pt] ||
                          h.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          h.hasAttribute('itemprop')) &&
                          ((h = f.createElement(l)),
                          f.head.insertBefore(
                            h,
                            f.querySelector('head > title'),
                          )),
                        rn(h, l, n),
                        (h[Pt] = e),
                        Qt(h),
                        (l = h));
                      break e;
                    case 'link':
                      var m = D1('link', 'href', f).get(l + (n.href || ''));
                      if (m) {
                        for (var x = 0; x < m.length; x++)
                          if (
                            ((h = m[x]),
                            h.getAttribute('href') ===
                              (n.href == null || n.href === ''
                                ? null
                                : n.href) &&
                              h.getAttribute('rel') ===
                                (n.rel == null ? null : n.rel) &&
                              h.getAttribute('title') ===
                                (n.title == null ? null : n.title) &&
                              h.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            m.splice(x, 1);
                            break t;
                          }
                      }
                      ((h = f.createElement(l)),
                        rn(h, l, n),
                        f.head.appendChild(h));
                      break;
                    case 'meta':
                      if (
                        (m = D1('meta', 'content', f).get(
                          l + (n.content || ''),
                        ))
                      ) {
                        for (x = 0; x < m.length; x++)
                          if (
                            ((h = m[x]),
                            h.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              h.getAttribute('name') ===
                                (n.name == null ? null : n.name) &&
                              h.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              h.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              h.getAttribute('charset') ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            m.splice(x, 1);
                            break t;
                          }
                      }
                      ((h = f.createElement(l)),
                        rn(h, l, n),
                        f.head.appendChild(h));
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  ((h[Pt] = e), Qt(h), (l = h));
                }
                e.stateNode = l;
              } else q1(f, e.type, e.stateNode);
            else e.stateNode = j1(f, l, e.memoizedProps);
          else
            h !== l
              ? (h === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : h.count--,
                l === null
                  ? q1(f, e.type, e.stateNode)
                  : j1(f, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                bf(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Rn(t, e),
          xt(e),
          l & 512 && (Yt || n === null || fn(n, n.return)),
          n !== null && l & 4 && bf(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Rn(t, e),
          xt(e),
          l & 512 && (Yt || n === null || fn(n, n.return)),
          e.flags & 32)
        ) {
          f = e.stateNode;
          try {
            ba(f, '');
          } catch (ve) {
            st(e, e.return, ve);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((f = e.memoizedProps), bf(e, f, n !== null ? n.memoizedProps : f)),
          l & 1024 && (Cs = !0));
        break;
      case 6:
        if ((Rn(t, e), xt(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (ve) {
            st(e, e.return, ve);
          }
        }
        break;
      case 3:
        if (
          ((ec = null),
          (f = Ma),
          (Ma = Lf(t.containerInfo)),
          Rn(t, e),
          (Ma = f),
          xt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            zi(t.containerInfo);
          } catch (ve) {
            st(e, e.return, ve);
          }
        Cs && ((Cs = !1), Zh(e));
        break;
      case 4:
        ((l = Ma),
          (Ma = Lf(e.stateNode.containerInfo)),
          Rn(t, e),
          xt(e),
          (Ma = l));
        break;
      case 12:
        (Rn(t, e), xt(e));
        break;
      case 31:
        (Rn(t, e),
          xt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Sf(e, l))));
        break;
      case 13:
        (Rn(t, e),
          xt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Gu = qn()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Sf(e, l))));
        break;
      case 22:
        f = e.memoizedState !== null;
        var O = n !== null && n.memoizedState !== null,
          Y = or,
          ee = Yt;
        if (
          ((or = Y || f),
          (Yt = ee || O),
          Rn(t, e),
          (Yt = ee),
          (or = Y),
          xt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = f ? t._visibility & -2 : t._visibility | 1,
              f && (n === null || O || or || Yt || Al(e)),
              n = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                O = n = t;
                try {
                  if (((h = O.stateNode), f))
                    ((m = h.style),
                      typeof m.setProperty == 'function'
                        ? m.setProperty('display', 'none', 'important')
                        : (m.display = 'none'));
                  else {
                    x = O.stateNode;
                    var ae = O.memoizedProps.style,
                      F =
                        ae != null && ae.hasOwnProperty('display')
                          ? ae.display
                          : null;
                    x.style.display =
                      F == null || typeof F == 'boolean' ? '' : ('' + F).trim();
                  }
                } catch (ve) {
                  st(O, O.return, ve);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                O = t;
                try {
                  O.stateNode.nodeValue = f ? '' : O.memoizedProps;
                } catch (ve) {
                  st(O, O.return, ve);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                O = t;
                try {
                  var Z = O.stateNode;
                  f ? Pn(Z, !0) : Pn(O.stateNode, !1);
                } catch (ve) {
                  st(O, O.return, ve);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), Sf(e, n))));
        break;
      case 19:
        (Rn(t, e),
          xt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), Sf(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Rn(t, e), xt(e));
    }
  }
  function xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (kh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var f = n.stateNode,
              h = Ss(e);
            _f(e, h, f);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (ba(m, ''), (n.flags &= -33));
            var x = Ss(e);
            _f(e, x, m);
            break;
          case 3:
          case 4:
            var O = n.stateNode.containerInfo,
              Y = Ss(e);
            xs(e, Y, O);
            break;
          default:
            throw Error(o(161));
        }
      } catch (ee) {
        st(e, e.return, ee);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Zh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Zh(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function hr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (As(e, t.alternate, t), (t = t.sibling));
  }
  function Al(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (fr(4, t, t.return), Al(t));
          break;
        case 1:
          fn(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && _s(t, t.return, n),
            Al(t));
          break;
        case 27:
          Pu(t.stateNode);
        case 26:
        case 5:
          (fn(t, t.return), Al(t));
          break;
        case 22:
          t.memoizedState === null && Al(t);
          break;
        case 30:
          Al(t);
          break;
        default:
          Al(t);
      }
      e = e.sibling;
    }
  }
  function Xa(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        f = e,
        h = t,
        m = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          (Xa(f, h, n), vi(4, h));
          break;
        case 1:
          if (
            (Xa(f, h, n),
            (l = h),
            (f = l.stateNode),
            typeof f.componentDidMount == 'function')
          )
            try {
              f.componentDidMount();
            } catch (Y) {
              st(l, l.return, Y);
            }
          if (((l = h), (f = l.updateQueue), f !== null)) {
            var x = l.stateNode;
            try {
              var O = f.shared.hiddenCallbacks;
              if (O !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < O.length; f++)
                  Ta(O[f], x);
            } catch (Y) {
              st(l, l.return, Y);
            }
          }
          (n && m & 64 && Lu(h), Cn(h, h.return));
          break;
        case 27:
          Yh(h);
        case 26:
        case 5:
          (Xa(f, h, n), n && l === null && m & 4 && Gh(h), Cn(h, h.return));
          break;
        case 12:
          Xa(f, h, n);
          break;
        case 31:
          (Xa(f, h, n), n && m & 4 && Ts(f, h));
          break;
        case 13:
          (Xa(f, h, n), n && m & 4 && Kh(f, h));
          break;
        case 22:
          (h.memoizedState === null && Xa(f, h, n), Cn(h, h.return));
          break;
        case 30:
          break;
        default:
          Xa(f, h, n);
      }
      t = t.sibling;
    }
  }
  function Es(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && cu(n)));
  }
  function ws(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && cu(e)));
  }
  function za(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Qh(e, t, n, l), (t = t.sibling));
  }
  function Qh(e, t, n, l) {
    var f = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (za(e, t, n, l), f & 2048 && vi(9, t));
        break;
      case 1:
        za(e, t, n, l);
        break;
      case 3:
        (za(e, t, n, l),
          f & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && cu(e))));
        break;
      case 12:
        if (f & 2048) {
          (za(e, t, n, l), (e = t.stateNode));
          try {
            var h = t.memoizedProps,
              m = h.id,
              x = h.onPostCommit;
            typeof x == 'function' &&
              x(
                m,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0,
              );
          } catch (O) {
            st(t, t.return, O);
          }
        } else za(e, t, n, l);
        break;
      case 31:
        za(e, t, n, l);
        break;
      case 13:
        za(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((h = t.stateNode),
          (m = t.alternate),
          t.memoizedState !== null
            ? h._visibility & 2
              ? za(e, t, n, l)
              : Bu(e, t)
            : h._visibility & 2
              ? za(e, t, n, l)
              : ((h._visibility |= 2),
                Ur(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          f & 2048 && Es(m, t));
        break;
      case 24:
        (za(e, t, n, l), f & 2048 && ws(t.alternate, t));
        break;
      default:
        za(e, t, n, l);
    }
  }
  function Ur(e, t, n, l, f) {
    for (
      f = f && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var h = e,
        m = t,
        x = n,
        O = l,
        Y = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (Ur(h, m, x, O, f), vi(8, m));
          break;
        case 23:
          break;
        case 22:
          var ee = m.stateNode;
          (m.memoizedState !== null
            ? ee._visibility & 2
              ? Ur(h, m, x, O, f)
              : Bu(h, m)
            : ((ee._visibility |= 2), Ur(h, m, x, O, f)),
            f && Y & 2048 && Es(m.alternate, m));
          break;
        case 24:
          (Ur(h, m, x, O, f), f && Y & 2048 && ws(m.alternate, m));
          break;
        default:
          Ur(h, m, x, O, f);
      }
      t = t.sibling;
    }
  }
  function Bu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          f = l.flags;
        switch (l.tag) {
          case 22:
            (Bu(n, l), f & 2048 && Es(l.alternate, l));
            break;
          case 24:
            (Bu(n, l), f & 2048 && ws(l.alternate, l));
            break;
          default:
            Bu(n, l);
        }
        t = t.sibling;
      }
  }
  var Hu = 8192;
  function pi(e, t, n) {
    if (e.subtreeFlags & Hu)
      for (e = e.child; e !== null; ) (Vh(e, t, n), (e = e.sibling));
  }
  function Vh(e, t, n) {
    switch (e.tag) {
      case 26:
        (pi(e, t, n),
          e.flags & Hu &&
            e.memoizedState !== null &&
            wi(n, Ma, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        pi(e, t, n);
        break;
      case 3:
      case 4:
        var l = Ma;
        ((Ma = Lf(e.stateNode.containerInfo)), pi(e, t, n), (Ma = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Hu), (Hu = 16777216), pi(e, t, n), (Hu = l))
            : pi(e, t, n));
        break;
      default:
        pi(e, t, n);
    }
  }
  function Ih(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function Uu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Vt = l), Wh(l, e));
        }
      Ih(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Jh(e), (e = e.sibling));
  }
  function Jh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Uu(e), e.flags & 2048 && fr(9, e, e.return));
        break;
      case 3:
        Uu(e);
        break;
      case 12:
        Uu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), xf(e))
          : Uu(e);
        break;
      default:
        Uu(e);
    }
  }
  function xf(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Vt = l), Wh(l, e));
        }
      Ih(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (fr(8, t, t.return), xf(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), xf(t)));
          break;
        default:
          xf(t);
      }
      e = e.sibling;
    }
  }
  function Wh(e, t) {
    for (; Vt !== null; ) {
      var n = Vt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          fr(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          cu(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Vt = l));
      else
        e: for (n = e; Vt !== null; ) {
          l = Vt;
          var f = l.sibling,
            h = l.return;
          if ((Rs(l), l === n)) {
            Vt = null;
            break e;
          }
          if (f !== null) {
            ((f.return = h), (Vt = f));
            break e;
          }
          Vt = h;
        }
    }
  }
  var ng = {
      getCacheForType: function (e) {
        var t = tn(kt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return tn(kt).controller.signal;
      },
    },
    ag = typeof WeakMap == 'function' ? WeakMap : Map,
    Pe = 0,
    bt = null,
    Fe = null,
    Ke = 0,
    ot = 0,
    Qn = null,
    Nr = !1,
    mi = !1,
    Os = !1,
    ja = 0,
    Mt = 0,
    Gr = 0,
    Rl = 0,
    Ms = 0,
    Vn = 0,
    yi = 0,
    Nu = null,
    Tn = null,
    zs = !1,
    Gu = 0,
    Ph = 0,
    Tl = 1 / 0,
    Cf = null,
    kr = null,
    $t = 0,
    Yr = null,
    bi = null,
    dr = 0,
    js = 0,
    Ds = null,
    e1 = null,
    ku = 0,
    qs = null;
  function In() {
    return (Pe & 2) !== 0 && Ke !== 0 ? Ke & -Ke : J.T !== null ? Jn() : j0();
  }
  function t1() {
    if (Vn === 0)
      if ((Ke & 536870912) === 0 || Ze) {
        var e = Gi;
        ((Gi <<= 1), (Gi & 3932160) === 0 && (Gi = 262144), (Vn = e));
      } else Vn = 536870912;
    return ((e = Xn.current), e !== null && (e.flags |= 32), Vn);
  }
  function En(e, t, n) {
    (((e === bt && (ot === 2 || ot === 9)) || e.cancelPendingCommit !== null) &&
      (_i(e, 0), gr(e, Ke, Vn, !1)),
      Fi(e, n),
      ((Pe & 2) === 0 || e !== bt) &&
        (e === bt &&
          ((Pe & 2) === 0 && (Rl |= n), Mt === 4 && gr(e, Ke, Vn, !1)),
        Ka(e)));
  }
  function n1(e, t, n) {
    if ((Pe & 6) !== 0) throw Error(o(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Yi(e, t),
      f = l ? lg(e, t) : Bs(e, t, !0),
      h = l;
    do {
      if (f === 0) {
        mi && !l && gr(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), h && !r1(n))) {
          ((f = Bs(e, t, !1)), (h = !1));
          continue;
        }
        if (f === 2) {
          if (((h = t), e.errorRecoveryDisabledLanes & h)) var m = 0;
          else
            ((m = e.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0));
          if (m !== 0) {
            t = m;
            e: {
              var x = e;
              f = Nu;
              var O = x.current.memoizedState.isDehydrated;
              if ((O && (_i(x, m).flags |= 256), (m = Bs(x, m, !1)), m !== 2)) {
                if (Os && !O) {
                  ((x.errorRecoveryDisabledLanes |= h), (Rl |= h), (f = 4));
                  break e;
                }
                ((h = Tn),
                  (Tn = f),
                  h !== null &&
                    (Tn === null ? (Tn = h) : Tn.push.apply(Tn, h)));
              }
              f = m;
            }
            if (((h = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (_i(e, 0), gr(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (h = f), h)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              gr(l, t, Vn, !Nr);
              break e;
            case 2:
              Tn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((f = Gu + 300 - qn()), 10 < f)) {
            if ((gr(l, t, Vn, !Nr), fc(l, 0, !0) !== 0)) break e;
            ((dr = t),
              (l.timeoutHandle = S1(
                a1.bind(
                  null,
                  l,
                  n,
                  Tn,
                  Cf,
                  zs,
                  t,
                  Vn,
                  Rl,
                  yi,
                  Nr,
                  h,
                  'Throttled',
                  -0,
                  0,
                ),
                f,
              )));
            break e;
          }
          a1(l, n, Tn, Cf, zs, t, Vn, Rl, yi, Nr, h, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ka(e);
  }
  function a1(e, t, n, l, f, h, m, x, O, Y, ee, ae, F, Z) {
    if (
      ((e.timeoutHandle = -1),
      (ae = t.subtreeFlags),
      ae & 8192 || (ae & 16785408) === 16785408)
    ) {
      ((ae = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ja,
      }),
        Vh(t, h, ae));
      var ve =
        (h & 62914560) === h ? Gu - qn() : (h & 4194048) === h ? Ph - qn() : 0;
      if (((ve = Rg(ae, ve)), ve !== null)) {
        ((dr = h),
          (e.cancelPendingCommit = ve(
            o1.bind(null, e, t, h, n, l, f, m, x, O, ee, ae, null, F, Z),
          )),
          gr(e, h, m, !Y));
        return;
      }
    }
    o1(e, t, h, n, l, f, m, x, O);
  }
  function r1(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var f = n[l],
            h = f.getSnapshot;
          f = f.value;
          try {
            if (!wt(h(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function gr(e, t, n, l) {
    ((t &= ~Ms),
      (t &= ~Rl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var f = t; 0 < f; ) {
      var h = 31 - hn(f),
        m = 1 << h;
      ((l[h] = -1), (f &= ~m));
    }
    n !== 0 && oc(e, n, t);
  }
  function Af() {
    return (Pe & 6) === 0 ? ($u(0), !1) : !0;
  }
  function Ls() {
    if (Fe !== null) {
      if (ot === 0) var e = Fe.return;
      else ((e = Fe), (ar = De = null), Xo(e), (ni = null), (Fn = 0), (e = Fe));
      for (; e !== null; ) (yf(e.alternate, e), (e = e.return));
      Fe = null;
    }
  }
  function _i(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), gg(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (dr = 0),
      Ls(),
      (bt = e),
      (Fe = n = la(e.current, null)),
      (Ke = t),
      (ot = 0),
      (Qn = null),
      (Nr = !1),
      (mi = Yi(e, t)),
      (Os = !1),
      (yi = Vn = Ms = Rl = Gr = Mt = 0),
      (Tn = Nu = null),
      (zs = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var f = 31 - hn(l),
          h = 1 << f;
        ((t |= e[f]), (l &= ~h));
      }
    return ((ja = t), Sa(), n);
  }
  function l1(e, t) {
    ((qe = null),
      (J.H = Br),
      t === ti || t === ou
        ? ((t = yh()), (ot = 3))
        : t === Xc
          ? ((t = yh()), (ot = 4))
          : (ot =
              t === Tu
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (Qn = t),
      Fe === null && ((Mt = 1), Ru(e, kn(t, e.current))));
  }
  function Yu() {
    var e = Xn.current;
    return e === null
      ? !0
      : (Ke & 4194048) === Ke
        ? da === null
        : (Ke & 62914560) === Ke || (Ke & 536870912) !== 0
          ? e === da
          : !1;
  }
  function i1() {
    var e = J.H;
    return ((J.H = Br), e === null ? Br : e);
  }
  function u1() {
    var e = J.A;
    return ((J.A = ng), e);
  }
  function Rf() {
    ((Mt = 4),
      Nr || ((Ke & 4194048) !== Ke && Xn.current !== null) || (mi = !0),
      ((Gr & 134217727) === 0 && (Rl & 134217727) === 0) ||
        bt === null ||
        gr(bt, Ke, Vn, !1));
  }
  function Bs(e, t, n) {
    var l = Pe;
    Pe |= 2;
    var f = i1(),
      h = u1();
    ((bt !== e || Ke !== t) && ((Cf = null), _i(e, t)), (t = !1));
    var m = Mt;
    e: do
      try {
        if (ot !== 0 && Fe !== null) {
          var x = Fe,
            O = Qn;
          switch (ot) {
            case 8:
              (Ls(), (m = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Xn.current === null && (t = !0);
              var Y = ot;
              if (((ot = 0), (Qn = null), Si(e, x, O, Y), n && mi)) {
                m = 0;
                break e;
              }
              break;
            default:
              ((Y = ot), (ot = 0), (Qn = null), Si(e, x, O, Y));
          }
        }
        (rg(), (m = Mt));
        break;
      } catch (ee) {
        l1(e, ee);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (ar = De = null),
      (Pe = l),
      (J.H = f),
      (J.A = h),
      Fe === null && ((bt = null), (Ke = 0), Sa()),
      m
    );
  }
  function rg() {
    for (; Fe !== null; ) c1(Fe);
  }
  function lg(e, t) {
    var n = Pe;
    Pe |= 2;
    var l = i1(),
      f = u1();
    bt !== e || Ke !== t
      ? ((Cf = null), (Tl = qn() + 500), _i(e, t))
      : (mi = Yi(e, t));
    e: do
      try {
        if (ot !== 0 && Fe !== null) {
          t = Fe;
          var h = Qn;
          t: switch (ot) {
            case 1:
              ((ot = 0), (Qn = null), Si(e, t, h, 1));
              break;
            case 2:
            case 9:
              if (mh(h)) {
                ((ot = 0), (Qn = null), f1(t));
                break;
              }
              ((t = function () {
                ((ot !== 2 && ot !== 9) || bt !== e || (ot = 7), Ka(e));
              }),
                h.then(t, t));
              break e;
            case 3:
              ot = 7;
              break e;
            case 4:
              ot = 5;
              break e;
            case 7:
              mh(h)
                ? ((ot = 0), (Qn = null), f1(t))
                : ((ot = 0), (Qn = null), Si(e, t, h, 7));
              break;
            case 5:
              var m = null;
              switch (Fe.tag) {
                case 26:
                  m = Fe.memoizedState;
                case 5:
                case 27:
                  var x = Fe;
                  if (m ? L1(m) : x.stateNode.complete) {
                    ((ot = 0), (Qn = null));
                    var O = x.sibling;
                    if (O !== null) Fe = O;
                    else {
                      var Y = x.return;
                      Y !== null ? ((Fe = Y), Tf(Y)) : (Fe = null);
                    }
                    break t;
                  }
              }
              ((ot = 0), (Qn = null), Si(e, t, h, 5));
              break;
            case 6:
              ((ot = 0), (Qn = null), Si(e, t, h, 6));
              break;
            case 8:
              (Ls(), (Mt = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        ig();
        break;
      } catch (ee) {
        l1(e, ee);
      }
    while (!0);
    return (
      (ar = De = null),
      (J.H = l),
      (J.A = f),
      (Pe = n),
      Fe !== null ? 0 : ((bt = null), (Ke = 0), Sa(), Mt)
    );
  }
  function ig() {
    for (; Fe !== null && !Ui(); ) c1(Fe);
  }
  function c1(e) {
    var t = Uh(e.alternate, e, ja);
    ((e.memoizedProps = e.pendingProps), t === null ? Tf(e) : (Fe = t));
  }
  function f1(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Lh(n, t, t.pendingProps, t.type, void 0, Ke);
        break;
      case 11:
        t = Lh(n, t, t.pendingProps, t.type.render, t.ref, Ke);
        break;
      case 5:
        Xo(t);
      default:
        (yf(n, t), (t = Fe = hh(t, ja)), (t = Uh(n, t, ja)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Tf(e) : (Fe = t));
  }
  function Si(e, t, n, l) {
    ((ar = De = null), Xo(t), (ni = null), (Fn = 0));
    var f = t.return;
    try {
      if (ds(e, f, t, n, Ke)) {
        ((Mt = 1), Ru(e, kn(n, e.current)), (Fe = null));
        return;
      }
    } catch (h) {
      if (f !== null) throw ((Fe = f), h);
      ((Mt = 1), Ru(e, kn(n, e.current)), (Fe = null));
      return;
    }
    t.flags & 32768
      ? (Ze || l === 1
          ? (e = !0)
          : mi || (Ke & 536870912) !== 0
            ? (e = !1)
            : ((Nr = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Xn.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Fu(t, e))
      : Tf(t);
  }
  function Tf(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Fu(t, Nr);
        return;
      }
      e = t.return;
      var n = Nh(t.alternate, t, ja);
      if (n !== null) {
        Fe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Fe = t;
        return;
      }
      Fe = t = e;
    } while (t !== null);
    Mt === 0 && (Mt = 5);
  }
  function Fu(e, t) {
    do {
      var n = qu(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Fe = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Fe = e;
        return;
      }
      Fe = e = n;
    } while (e !== null);
    ((Mt = 6), (Fe = null));
  }
  function o1(e, t, n, l, f, h, m, x, O) {
    e.cancelPendingCommit = null;
    do Xu();
    while ($t !== 0);
    if ((Pe & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((h = t.lanes | t.childLanes),
        (h |= $l),
        Ed(e, n, h, m, x, O),
        e === bt && ((Fe = bt = null), (Ke = 0)),
        (bi = t),
        (Yr = e),
        (dr = n),
        (js = h),
        (Ds = f),
        (e1 = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            fg(Qa, function () {
              return (Gs(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = J.T), (J.T = null), (f = ne.p), (ne.p = 2), (m = Pe), (Pe |= 4));
        try {
          eg(e, t, n);
        } finally {
          ((Pe = m), (ne.p = f), (J.T = l));
        }
      }
      (($t = 1), Hs(), Us(), Ef());
    }
  }
  function Hs() {
    if ($t === 1) {
      $t = 0;
      var e = Yr,
        t = bi,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = J.T), (J.T = null));
        var l = ne.p;
        ne.p = 2;
        var f = Pe;
        Pe |= 4;
        try {
          $h(t, e);
          var h = Js,
            m = ch(e.containerInfo),
            x = h.focusedElem,
            O = h.selectionRange;
          if (
            m !== x &&
            x &&
            x.ownerDocument &&
            uh(x.ownerDocument.documentElement, x)
          ) {
            if (O !== null && qo(x)) {
              var Y = O.start,
                ee = O.end;
              if ((ee === void 0 && (ee = Y), 'selectionStart' in x))
                ((x.selectionStart = Y),
                  (x.selectionEnd = Math.min(ee, x.value.length)));
              else {
                var ae = x.ownerDocument || document,
                  F = (ae && ae.defaultView) || window;
                if (F.getSelection) {
                  var Z = F.getSelection(),
                    ve = x.textContent.length,
                    Te = Math.min(O.start, ve),
                    pt = O.end === void 0 ? Te : Math.min(O.end, ve);
                  !Z.extend && Te > pt && ((m = pt), (pt = Te), (Te = m));
                  var H = ih(x, Te),
                    j = ih(x, pt);
                  if (
                    H &&
                    j &&
                    (Z.rangeCount !== 1 ||
                      Z.anchorNode !== H.node ||
                      Z.anchorOffset !== H.offset ||
                      Z.focusNode !== j.node ||
                      Z.focusOffset !== j.offset)
                  ) {
                    var G = ae.createRange();
                    (G.setStart(H.node, H.offset),
                      Z.removeAllRanges(),
                      Te > pt
                        ? (Z.addRange(G), Z.extend(j.node, j.offset))
                        : (G.setEnd(j.node, j.offset), Z.addRange(G)));
                  }
                }
              }
            }
            for (ae = [], Z = x; (Z = Z.parentNode); )
              Z.nodeType === 1 &&
                ae.push({ element: Z, left: Z.scrollLeft, top: Z.scrollTop });
            for (
              typeof x.focus == 'function' && x.focus(), x = 0;
              x < ae.length;
              x++
            ) {
              var te = ae[x];
              ((te.element.scrollLeft = te.left),
                (te.element.scrollTop = te.top));
            }
          }
          ((kf = !!Iu), (Js = Iu = null));
        } finally {
          ((Pe = f), (ne.p = l), (J.T = n));
        }
      }
      ((e.current = t), ($t = 2));
    }
  }
  function Us() {
    if ($t === 2) {
      $t = 0;
      var e = Yr,
        t = bi,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = J.T), (J.T = null));
        var l = ne.p;
        ne.p = 2;
        var f = Pe;
        Pe |= 4;
        try {
          As(e, t.alternate, t);
        } finally {
          ((Pe = f), (ne.p = l), (J.T = n));
        }
      }
      $t = 3;
    }
  }
  function Ef() {
    if ($t === 4 || $t === 3) {
      (($t = 0), ic());
      var e = Yr,
        t = bi,
        n = dr,
        l = e1;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? ($t = 5)
        : (($t = 0), (bi = Yr = null), Ns(e, e.pendingLanes));
      var f = e.pendingLanes;
      if (
        (f === 0 && (kr = null),
        vo(n),
        (t = t.stateNode),
        sn && typeof sn.onCommitFiberRoot == 'function')
      )
        try {
          sn.onCommitFiberRoot(al, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = J.T), (f = ne.p), (ne.p = 2), (J.T = null));
        try {
          for (var h = e.onRecoverableError, m = 0; m < l.length; m++) {
            var x = l[m];
            h(x.value, { componentStack: x.stack });
          }
        } finally {
          ((J.T = t), (ne.p = f));
        }
      }
      ((dr & 3) !== 0 && Xu(),
        Ka(e),
        (f = e.pendingLanes),
        (n & 261930) !== 0 && (f & 42) !== 0
          ? e === qs
            ? ku++
            : ((ku = 0), (qs = e))
          : (ku = 0),
        $u(0));
    }
  }
  function Ns(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), cu(t)));
  }
  function Xu() {
    return (Hs(), Us(), Ef(), Gs());
  }
  function Gs() {
    if ($t !== 5) return !1;
    var e = Yr,
      t = js;
    js = 0;
    var n = vo(dr),
      l = J.T,
      f = ne.p;
    try {
      ((ne.p = 32 > n ? 32 : n), (J.T = null), (n = Ds), (Ds = null));
      var h = Yr,
        m = dr;
      if ((($t = 0), (bi = Yr = null), (dr = 0), (Pe & 6) !== 0))
        throw Error(o(331));
      var x = Pe;
      if (
        ((Pe |= 4),
        Jh(h.current),
        Qh(h, h.current, m, n),
        (Pe = x),
        $u(0, !1),
        sn && typeof sn.onPostCommitFiberRoot == 'function')
      )
        try {
          sn.onPostCommitFiberRoot(al, h);
        } catch {}
      return !0;
    } finally {
      ((ne.p = f), (J.T = l), Ns(e, t));
    }
  }
  function ks(e, t, n) {
    ((t = kn(n, t)),
      (t = hs(e.stateNode, t, 2)),
      (e = Ra(e, t, 2)),
      e !== null && (Fi(e, 2), Ka(e)));
  }
  function st(e, t, n) {
    if (e.tag === 3) ks(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          ks(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' &&
              (kr === null || !kr.has(l)))
          ) {
            ((e = kn(n, e)),
              (n = Ya(2)),
              (l = Ra(t, n, 2)),
              l !== null && (sf(n, l, t, e), Fi(l, 2), Ka(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ys(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new ag();
      var f = new Set();
      l.set(t, f);
    } else ((f = l.get(t)), f === void 0 && ((f = new Set()), l.set(t, f)));
    f.has(n) ||
      ((Os = !0), f.add(n), (e = ug.bind(null, e, t, n)), t.then(e, e));
  }
  function ug(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      bt === e &&
        (Ke & n) === n &&
        (Mt === 4 || (Mt === 3 && (Ke & 62914560) === Ke && 300 > qn() - Gu)
          ? (Pe & 2) === 0 && _i(e, 0)
          : (Ms |= n),
        yi === Ke && (yi = 0)),
      Ka(e));
  }
  function Ku(e, t) {
    (t === 0 && (t = so()), (e = Ha(e, t)), e !== null && (Fi(e, t), Ka(e)));
  }
  function wf(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ku(e, n));
  }
  function cg(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          f = e.memoizedState;
        f !== null && (n = f.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (l !== null && l.delete(t), Ku(e, n));
  }
  function fg(e, t) {
    return nl(e, t);
  }
  var xi = null,
    El = null,
    Fs = !1,
    Of = !1,
    Xs = !1,
    Fr = 0;
  function Ka(e) {
    (e !== El &&
      e.next === null &&
      (El === null ? (xi = El = e) : (El = El.next = e)),
      (Of = !0),
      Fs || ((Fs = !0), sg()));
  }
  function $u(e, t) {
    if (!Xs && Of) {
      Xs = !0;
      do
        for (var n = !1, l = xi; l !== null; ) {
          if (e !== 0) {
            var f = l.pendingLanes;
            if (f === 0) var h = 0;
            else {
              var m = l.suspendedLanes,
                x = l.pingedLanes;
              ((h = (1 << (31 - hn(42 | e) + 1)) - 1),
                (h &= f & ~(m & ~x)),
                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0));
            }
            h !== 0 && ((n = !0), g1(l, h));
          } else
            ((h = Ke),
              (h = fc(
                l,
                l === bt ? h : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (h & 3) === 0 || Yi(l, h) || ((n = !0), g1(l, h)));
          l = l.next;
        }
      while (n);
      Xs = !1;
    }
  }
  function og() {
    s1();
  }
  function s1() {
    Of = Fs = !1;
    var e = 0;
    Fr !== 0 && dg() && (e = Fr);
    for (var t = qn(), n = null, l = xi; l !== null; ) {
      var f = l.next,
        h = h1(l, t);
      (h === 0
        ? ((l.next = null),
          n === null ? (xi = f) : (n.next = f),
          f === null && (El = n))
        : ((n = l), (e !== 0 || (h & 3) !== 0) && (Of = !0)),
        (l = f));
    }
    (($t !== 0 && $t !== 5) || $u(e), Fr !== 0 && (Fr = 0));
  }
  function h1(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        f = e.expirationTimes,
        h = e.pendingLanes & -62914561;
      0 < h;
    ) {
      var m = 31 - hn(h),
        x = 1 << m,
        O = f[m];
      (O === -1
        ? ((x & n) === 0 || (x & l) !== 0) && (f[m] = Td(x, t))
        : O <= t && (e.expiredLanes |= x),
        (h &= ~x));
    }
    if (
      ((t = bt),
      (n = Ke),
      (n = fc(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (ot === 2 || ot === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Dn(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Yi(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Dn(l), vo(n))) {
        case 2:
        case 8:
          n = Ll;
          break;
        case 32:
          n = Qa;
          break;
        case 268435456:
          n = uc;
          break;
        default:
          n = Qa;
      }
      return (
        (l = d1.bind(null, e)),
        (n = nl(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Dn(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function d1(e, t) {
    if ($t !== 0 && $t !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Xu() && e.callbackNode !== n) return null;
    var l = Ke;
    return (
      (l = fc(
        e,
        e === bt ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (n1(e, l, t),
          h1(e, qn()),
          e.callbackNode != null && e.callbackNode === n
            ? d1.bind(null, e)
            : null)
    );
  }
  function g1(e, t) {
    if (Xu()) return null;
    n1(e, t, !0);
  }
  function sg() {
    C1(function () {
      (Pe & 6) !== 0 ? nl(M0, og) : s1();
    });
  }
  function Jn() {
    if (Fr === 0) {
      var e = Pl;
      (e === 0 && ((e = cc), (cc <<= 1), (cc & 261888) === 0 && (cc = 256)),
        (Fr = e));
    }
    return Fr;
  }
  function v1(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Vi('' + e);
  }
  function p1(e, t) {
    var n = t.ownerDocument.createElement('input');
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute('form', e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function wl(e, t, n, l, f) {
    if (t === 'submit' && n && n.stateNode === f) {
      var h = v1((f[mn] || null).action),
        m = l.submitter;
      m &&
        ((t = (t = m[mn] || null)
          ? v1(t.formAction)
          : m.getAttribute('formAction')),
        t !== null && ((h = t), (m = null)));
      var x = new Cc('action', 'action', null, l, f);
      e.push({
        event: x,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Fr !== 0) {
                  var O = m ? p1(f, m) : new FormData(f);
                  Lr(
                    n,
                    { pending: !0, data: O, method: f.method, action: h },
                    null,
                    O,
                  );
                }
              } else
                typeof h == 'function' &&
                  (x.preventDefault(),
                  (O = m ? p1(f, m) : new FormData(f)),
                  Lr(
                    n,
                    { pending: !0, data: O, method: f.method, action: h },
                    h,
                    O,
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var je = 0; je < Hc.length; je++) {
    var Ks = Hc[je],
      wn = Ks.toLowerCase(),
      Ut = Ks[0].toUpperCase() + Ks.slice(1);
    bn(wn, 'on' + Ut);
  }
  (bn(Gn, 'onAnimationEnd'),
    bn(au, 'onAnimationIteration'),
    bn(fh, 'onAnimationStart'),
    bn('dblclick', 'onDoubleClick'),
    bn('focusin', 'onFocus'),
    bn('focusout', 'onBlur'),
    bn(Xl, 'onTransitionRun'),
    bn(Lc, 'onTransitionStart'),
    bn(Bc, 'onTransitionCancel'),
    bn(We, 'onTransitionEnd'),
    ll('onMouseEnter', ['mouseout', 'mouseover']),
    ll('onMouseLeave', ['mouseout', 'mouseover']),
    ll('onPointerEnter', ['pointerout', 'pointerover']),
    ll('onPointerLeave', ['pointerout', 'pointerover']),
    Sr(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Sr(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Sr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Sr(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Sr(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Sr(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var Zu =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Xr = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(Zu),
    );
  function m1(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        f = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var x = l[m],
              O = x.instance,
              Y = x.currentTarget;
            if (((x = x.listener), O !== h && f.isPropagationStopped()))
              break e;
            ((h = x), (f.currentTarget = Y));
            try {
              h(f);
            } catch (ee) {
              Uc(ee);
            }
            ((f.currentTarget = null), (h = O));
          }
        else
          for (m = 0; m < l.length; m++) {
            if (
              ((x = l[m]),
              (O = x.instance),
              (Y = x.currentTarget),
              (x = x.listener),
              O !== h && f.isPropagationStopped())
            )
              break e;
            ((h = x), (f.currentTarget = Y));
            try {
              h(f);
            } catch (ee) {
              Uc(ee);
            }
            ((f.currentTarget = null), (h = O));
          }
      }
    }
  }
  function Xe(e, t) {
    var n = t[hc];
    n === void 0 && (n = t[hc] = new Set());
    var l = e + '__bubble';
    n.has(l) || (zf(t, e, 2, !1), n.add(l));
  }
  function $s(e, t, n) {
    var l = 0;
    (t && (l |= 4), zf(n, e, l, t));
  }
  var Mf = '_reactListening' + Math.random().toString(36).slice(2);
  function Zs(e) {
    if (!e[Mf]) {
      ((e[Mf] = !0),
        L0.forEach(function (n) {
          n !== 'selectionchange' && (Xr.has(n) || $s(n, !1, e), $s(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Mf] || ((t[Mf] = !0), $s('selectionchange', !1, t));
    }
  }
  function zf(e, t, n, l) {
    switch (F1(t)) {
      case 2:
        var f = Eg;
        break;
      case 8:
        f = wg;
        break;
      default:
        f = l0;
    }
    ((n = f.bind(null, t, n, e)),
      (f = void 0),
      !xo ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (f = !0),
      l
        ? f !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: f })
          : e.addEventListener(t, n, !0)
        : f !== void 0
          ? e.addEventListener(t, n, { passive: f })
          : e.addEventListener(t, n, !1));
  }
  function Qs(e, t, n, l, f) {
    var h = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var x = l.stateNode.containerInfo;
          if (x === f) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var O = m.tag;
              if ((O === 3 || O === 4) && m.stateNode.containerInfo === f)
                return;
              m = m.return;
            }
          for (; x !== null; ) {
            if (((m = Hl(x)), m === null)) return;
            if (((O = m.tag), O === 5 || O === 6 || O === 26 || O === 27)) {
              l = h = m;
              continue e;
            }
            x = x.parentNode;
          }
        }
        l = l.return;
      }
    K0(function () {
      var Y = h,
        ee = _o(n),
        ae = [];
      e: {
        var F = oh.get(e);
        if (F !== void 0) {
          var Z = Cc,
            ve = e;
          switch (e) {
            case 'keypress':
              if (Sc(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              Z = Ar;
              break;
            case 'focusin':
              ((ve = 'focus'), (Z = Rc));
              break;
            case 'focusout':
              ((ve = 'blur'), (Z = Rc));
              break;
            case 'beforeblur':
            case 'afterblur':
              Z = Rc;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              Z = Ac;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Z = Z0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Z = Bd;
              break;
            case Gn:
            case au:
            case fh:
              Z = I0;
              break;
            case We:
              Z = Ud;
              break;
            case 'scroll':
            case 'scrollend':
              Z = Dd;
              break;
            case 'wheel':
              Z = Ec;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Z = Hn;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Z = P0;
              break;
            case 'toggle':
            case 'beforetoggle':
              Z = Nd;
          }
          var Te = (t & 4) !== 0,
            pt = !Te && (e === 'scroll' || e === 'scrollend'),
            H = Te ? (F !== null ? F + 'Capture' : null) : F;
          Te = [];
          for (var j = Y, G; j !== null; ) {
            var te = j;
            if (
              ((G = te.stateNode),
              (te = te.tag),
              (te !== 5 && te !== 26 && te !== 27) ||
                G === null ||
                H === null ||
                ((te = cl(j, H)), te != null && Te.push(Wn(j, te, G))),
              pt)
            )
              break;
            j = j.return;
          }
          0 < Te.length &&
            ((F = new Z(F, ve, null, n, ee)),
            ae.push({ event: F, listeners: Te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((F = e === 'mouseover' || e === 'pointerover'),
            (Z = e === 'mouseout' || e === 'pointerout'),
            F &&
              n !== bo &&
              (ve = n.relatedTarget || n.fromElement) &&
              (Hl(ve) || ve[Bl]))
          )
            break e;
          if (
            (Z || F) &&
            ((F =
              ee.window === ee
                ? ee
                : (F = ee.ownerDocument)
                  ? F.defaultView || F.parentWindow
                  : window),
            Z
              ? ((ve = n.relatedTarget || n.toElement),
                (Z = Y),
                (ve = ve ? Hl(ve) : null),
                ve !== null &&
                  ((pt = g(ve)),
                  (Te = ve.tag),
                  ve !== pt || (Te !== 5 && Te !== 27 && Te !== 6)) &&
                  (ve = null))
              : ((Z = null), (ve = Y)),
            Z !== ve)
          ) {
            if (
              ((Te = Ac),
              (te = 'onMouseLeave'),
              (H = 'onMouseEnter'),
              (j = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Te = P0),
                (te = 'onPointerLeave'),
                (H = 'onPointerEnter'),
                (j = 'pointer')),
              (pt = Z == null ? F : Ki(Z)),
              (G = ve == null ? F : Ki(ve)),
              (F = new Te(te, j + 'leave', Z, n, ee)),
              (F.target = pt),
              (F.relatedTarget = G),
              (te = null),
              Hl(ee) === Y &&
                ((Te = new Te(H, j + 'enter', ve, n, ee)),
                (Te.target = G),
                (Te.relatedTarget = pt),
                (te = Te)),
              (pt = te),
              Z && ve)
            )
              t: {
                for (Te = jf, H = Z, j = ve, G = 0, te = H; te; te = Te(te))
                  G++;
                te = 0;
                for (var xe = j; xe; xe = Te(xe)) te++;
                for (; 0 < G - te; ) ((H = Te(H)), G--);
                for (; 0 < te - G; ) ((j = Te(j)), te--);
                for (; G--; ) {
                  if (H === j || (j !== null && H === j.alternate)) {
                    Te = H;
                    break t;
                  }
                  ((H = Te(H)), (j = Te(j)));
                }
                Te = null;
              }
            else Te = null;
            (Z !== null && Tt(ae, F, Z, Te, !1),
              ve !== null && pt !== null && Tt(ae, pt, ve, Te, !0));
          }
        }
        e: {
          if (
            ((F = Y ? Ki(Y) : window),
            (Z = F.nodeName && F.nodeName.toLowerCase()),
            Z === 'select' || (Z === 'input' && F.type === 'file'))
          )
            var Ie = rh;
          else if (Oo(F))
            if (hl) Ie = Fd;
            else {
              Ie = kd;
              var ye = Dc;
            }
          else
            ((Z = F.nodeName),
              !Z ||
              Z.toLowerCase() !== 'input' ||
              (F.type !== 'checkbox' && F.type !== 'radio')
                ? Y && _c(Y.elementType) && (Ie = rh)
                : (Ie = Yd));
          if (Ie && (Ie = Ie(e, Y))) {
            Mo(ae, Ie, n, ee);
            break e;
          }
          (ye && ye(e, F, Y),
            e === 'focusout' &&
              Y &&
              F.type === 'number' &&
              Y.memoizedProps.value != null &&
              mo(F, 'number', F.value));
        }
        switch (((ye = Y ? Ki(Y) : window), e)) {
          case 'focusin':
            (Oo(ye) || ye.contentEditable === 'true') &&
              ((L = ye), (P = Y), (K = null));
            break;
          case 'focusout':
            K = P = L = null;
            break;
          case 'mousedown':
            ge = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((ge = !1), ze(ae, n, ee));
            break;
          case 'selectionchange':
            if (Fl) break;
          case 'keydown':
          case 'keyup':
            ze(ae, n, ee);
        }
        var He;
        if (wc)
          e: {
            switch (e) {
              case 'compositionstart':
                var $e = 'onCompositionStart';
                break e;
              case 'compositionend':
                $e = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                $e = 'onCompositionUpdate';
                break e;
            }
            $e = void 0;
          }
        else
          sl
            ? Mc(e, n) && ($e = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              ($e = 'onCompositionStart');
        ($e &&
          (Eo &&
            n.locale !== 'ko' &&
            (sl || $e !== 'onCompositionStart'
              ? $e === 'onCompositionEnd' && sl && (He = mt())
              : ((xr = ee),
                (Co = 'value' in xr ? xr.value : xr.textContent),
                (sl = !0))),
          (ye = Qu(Y, $e)),
          0 < ye.length &&
            (($e = new Un($e, e, null, n, ee)),
            ae.push({ event: $e, listeners: ye }),
            He
              ? ($e.data = He)
              : ((He = ah(n)), He !== null && ($e.data = He)))),
          (He = To ? Nn(e, n) : wo(e, n)) &&
            (($e = Qu(Y, 'onBeforeInput')),
            0 < $e.length &&
              ((ye = new Un('onBeforeInput', 'beforeinput', null, n, ee)),
              ae.push({ event: ye, listeners: $e }),
              (ye.data = He))),
          wl(ae, e, Y, n, ee));
      }
      m1(ae, t);
    });
  }
  function Wn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Qu(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var f = e,
        h = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          h === null ||
          ((f = cl(e, n)),
          f != null && l.unshift(Wn(e, f, h)),
          (f = cl(e, t)),
          f != null && l.push(Wn(e, f, h))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function jf(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Tt(e, t, n, l, f) {
    for (var h = t._reactName, m = []; n !== null && n !== l; ) {
      var x = n,
        O = x.alternate,
        Y = x.stateNode;
      if (((x = x.tag), O !== null && O === l)) break;
      ((x !== 5 && x !== 26 && x !== 27) ||
        Y === null ||
        ((O = Y),
        f
          ? ((Y = cl(n, h)), Y != null && m.unshift(Wn(n, Y, O)))
          : f || ((Y = cl(n, h)), Y != null && m.push(Wn(n, Y, O)))),
        (n = n.return));
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Lt = /\r\n?/g,
    y1 = /\u0000|\uFFFD/g;
  function b1(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Lt,
        `
`,
      )
      .replace(y1, '');
  }
  function _1(e, t) {
    return ((t = b1(t)), b1(e) === t);
  }
  function vt(e, t, n, l, f, h) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || ba(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') &&
            t !== 'body' &&
            ba(e, '' + l);
        break;
      case 'className':
        $i(e, 'class', l);
        break;
      case 'tabIndex':
        $i(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        $i(e, n, l);
        break;
      case 'style':
        k0(e, l, h);
        break;
      case 'data':
        if (t !== 'object') {
          $i(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || n !== 'href')) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == 'function' ||
          typeof l == 'symbol' ||
          typeof l == 'boolean'
        ) {
          e.removeAttribute(n);
          break;
        }
        ((l = Vi('' + l)), e.setAttribute(n, l));
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof h == 'function' &&
            (n === 'formAction'
              ? (t !== 'input' && vt(e, t, 'name', f.name, f, null),
                vt(e, t, 'formEncType', f.formEncType, f, null),
                vt(e, t, 'formMethod', f.formMethod, f, null),
                vt(e, t, 'formTarget', f.formTarget, f, null))
              : (vt(e, t, 'encType', f.encType, f, null),
                vt(e, t, 'method', f.method, f, null),
                vt(e, t, 'target', f.target, f, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((l = Vi('' + l)), e.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (e.onclick = Ja);
        break;
      case 'onScroll':
        l != null && Xe('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Xe('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(o(61));
          if (((n = l.__html), n != null)) {
            if (f.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          l == null ||
          typeof l == 'function' ||
          typeof l == 'boolean' ||
          typeof l == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((n = Vi('' + l)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '' + l)
          : e.removeAttribute(n);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '')
          : e.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(n, '')
          : l !== !1 &&
              l != null &&
              typeof l != 'function' &&
              typeof l != 'symbol'
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null &&
        typeof l != 'function' &&
        typeof l != 'symbol' &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case 'popover':
        (Xe('beforetoggle', e), Xe('toggle', e), dc(e, 'popover', l));
        break;
      case 'xlinkActuate':
        Ba(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Ba(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Ba(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Ba(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Ba(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Ba(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Ba(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Ba(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Ba(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        dc(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== 'o' && n[0] !== 'O') ||
          (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Y0.get(n) || n), dc(e, n, l));
    }
  }
  function Vs(e, t, n, l, f, h) {
    switch (n) {
      case 'style':
        k0(e, l, h);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(o(61));
          if (((n = l.__html), n != null)) {
            if (f.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? ba(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && ba(e, '' + l);
        break;
      case 'onScroll':
        l != null && Xe('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Xe('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = Ja);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!B0.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((f = n.endsWith('Capture')),
              (t = n.slice(2, f ? n.length - 7 : void 0)),
              (h = e[mn] || null),
              (h = h != null ? h[n] : null),
              typeof h == 'function' && e.removeEventListener(t, h, f),
              typeof l == 'function')
            ) {
              (typeof h != 'function' &&
                h !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, f));
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
                ? e.setAttribute(n, '')
                : dc(e, n, l);
          }
    }
  }
  function rn(e, t, n) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (Xe('error', e), Xe('load', e));
        var l = !1,
          f = !1,
          h;
        for (h in n)
          if (n.hasOwnProperty(h)) {
            var m = n[h];
            if (m != null)
              switch (h) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  f = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(o(137, t));
                default:
                  vt(e, t, h, m, n, null);
              }
          }
        (f && vt(e, t, 'srcSet', n.srcSet, n, null),
          l && vt(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        Xe('invalid', e);
        var x = (h = m = f = null),
          O = null,
          Y = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var ee = n[l];
            if (ee != null)
              switch (l) {
                case 'name':
                  f = ee;
                  break;
                case 'type':
                  m = ee;
                  break;
                case 'checked':
                  O = ee;
                  break;
                case 'defaultChecked':
                  Y = ee;
                  break;
                case 'value':
                  h = ee;
                  break;
                case 'defaultValue':
                  x = ee;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (ee != null) throw Error(o(137, t));
                  break;
                default:
                  vt(e, t, l, ee, n, null);
              }
          }
        mc(e, h, x, O, Y, m, f, !1);
        return;
      case 'select':
        (Xe('invalid', e), (l = m = h = null));
        for (f in n)
          if (n.hasOwnProperty(f) && ((x = n[f]), x != null))
            switch (f) {
              case 'value':
                h = x;
                break;
              case 'defaultValue':
                m = x;
                break;
              case 'multiple':
                l = x;
              default:
                vt(e, t, f, x, n, null);
            }
        ((t = h),
          (n = m),
          (e.multiple = !!l),
          t != null ? il(e, !!l, t, !1) : n != null && il(e, !!l, n, !0));
        return;
      case 'textarea':
        (Xe('invalid', e), (h = f = l = null));
        for (m in n)
          if (n.hasOwnProperty(m) && ((x = n[m]), x != null))
            switch (m) {
              case 'value':
                l = x;
                break;
              case 'defaultValue':
                f = x;
                break;
              case 'children':
                h = x;
                break;
              case 'dangerouslySetInnerHTML':
                if (x != null) throw Error(o(91));
                break;
              default:
                vt(e, t, m, x, n, null);
            }
        bc(e, l, f, h);
        return;
      case 'option':
        for (O in n)
          if (n.hasOwnProperty(O) && ((l = n[O]), l != null))
            switch (O) {
              case 'selected':
                e.selected =
                  l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                vt(e, t, O, l, n, null);
            }
        return;
      case 'dialog':
        (Xe('beforetoggle', e),
          Xe('toggle', e),
          Xe('cancel', e),
          Xe('close', e));
        break;
      case 'iframe':
      case 'object':
        Xe('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Zu.length; l++) Xe(Zu[l], e);
        break;
      case 'image':
        (Xe('error', e), Xe('load', e));
        break;
      case 'details':
        Xe('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Xe('error', e), Xe('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (Y in n)
          if (n.hasOwnProperty(Y) && ((l = n[Y]), l != null))
            switch (Y) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(o(137, t));
              default:
                vt(e, t, Y, l, n, null);
            }
        return;
      default:
        if (_c(t)) {
          for (ee in n)
            n.hasOwnProperty(ee) &&
              ((l = n[ee]), l !== void 0 && Vs(e, t, ee, l, n, void 0));
          return;
        }
    }
    for (x in n)
      n.hasOwnProperty(x) && ((l = n[x]), l != null && vt(e, t, x, l, n, null));
  }
  function hg(e, t, n, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var f = null,
          h = null,
          m = null,
          x = null,
          O = null,
          Y = null,
          ee = null;
        for (Z in n) {
          var ae = n[Z];
          if (n.hasOwnProperty(Z) && ae != null)
            switch (Z) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                O = ae;
              default:
                l.hasOwnProperty(Z) || vt(e, t, Z, null, l, ae);
            }
        }
        for (var F in l) {
          var Z = l[F];
          if (((ae = n[F]), l.hasOwnProperty(F) && (Z != null || ae != null)))
            switch (F) {
              case 'type':
                h = Z;
                break;
              case 'name':
                f = Z;
                break;
              case 'checked':
                Y = Z;
                break;
              case 'defaultChecked':
                ee = Z;
                break;
              case 'value':
                m = Z;
                break;
              case 'defaultValue':
                x = Z;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(o(137, t));
                break;
              default:
                Z !== ae && vt(e, t, F, Z, l, ae);
            }
        }
        pc(e, m, x, O, Y, ee, h, f);
        return;
      case 'select':
        Z = m = x = F = null;
        for (h in n)
          if (((O = n[h]), n.hasOwnProperty(h) && O != null))
            switch (h) {
              case 'value':
                break;
              case 'multiple':
                Z = O;
              default:
                l.hasOwnProperty(h) || vt(e, t, h, null, l, O);
            }
        for (f in l)
          if (
            ((h = l[f]),
            (O = n[f]),
            l.hasOwnProperty(f) && (h != null || O != null))
          )
            switch (f) {
              case 'value':
                F = h;
                break;
              case 'defaultValue':
                x = h;
                break;
              case 'multiple':
                m = h;
              default:
                h !== O && vt(e, t, f, h, l, O);
            }
        ((t = x),
          (n = m),
          (l = Z),
          F != null
            ? il(e, !!n, F, !1)
            : !!l != !!n &&
              (t != null ? il(e, !!n, t, !0) : il(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        Z = F = null;
        for (x in n)
          if (
            ((f = n[x]),
            n.hasOwnProperty(x) && f != null && !l.hasOwnProperty(x))
          )
            switch (x) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                vt(e, t, x, null, l, f);
            }
        for (m in l)
          if (
            ((f = l[m]),
            (h = n[m]),
            l.hasOwnProperty(m) && (f != null || h != null))
          )
            switch (m) {
              case 'value':
                F = f;
                break;
              case 'defaultValue':
                Z = f;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (f != null) throw Error(o(91));
                break;
              default:
                f !== h && vt(e, t, m, f, l, h);
            }
        yc(e, F, Z);
        return;
      case 'option':
        for (var ve in n)
          if (
            ((F = n[ve]),
            n.hasOwnProperty(ve) && F != null && !l.hasOwnProperty(ve))
          )
            switch (ve) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                vt(e, t, ve, null, l, F);
            }
        for (O in l)
          if (
            ((F = l[O]),
            (Z = n[O]),
            l.hasOwnProperty(O) && F !== Z && (F != null || Z != null))
          )
            switch (O) {
              case 'selected':
                e.selected =
                  F && typeof F != 'function' && typeof F != 'symbol';
                break;
              default:
                vt(e, t, O, F, l, Z);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var Te in n)
          ((F = n[Te]),
            n.hasOwnProperty(Te) &&
              F != null &&
              !l.hasOwnProperty(Te) &&
              vt(e, t, Te, null, l, F));
        for (Y in l)
          if (
            ((F = l[Y]),
            (Z = n[Y]),
            l.hasOwnProperty(Y) && F !== Z && (F != null || Z != null))
          )
            switch (Y) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (F != null) throw Error(o(137, t));
                break;
              default:
                vt(e, t, Y, F, l, Z);
            }
        return;
      default:
        if (_c(t)) {
          for (var pt in n)
            ((F = n[pt]),
              n.hasOwnProperty(pt) &&
                F !== void 0 &&
                !l.hasOwnProperty(pt) &&
                Vs(e, t, pt, void 0, l, F));
          for (ee in l)
            ((F = l[ee]),
              (Z = n[ee]),
              !l.hasOwnProperty(ee) ||
                F === Z ||
                (F === void 0 && Z === void 0) ||
                Vs(e, t, ee, F, l, Z));
          return;
        }
    }
    for (var H in n)
      ((F = n[H]),
        n.hasOwnProperty(H) &&
          F != null &&
          !l.hasOwnProperty(H) &&
          vt(e, t, H, null, l, F));
    for (ae in l)
      ((F = l[ae]),
        (Z = n[ae]),
        !l.hasOwnProperty(ae) ||
          F === Z ||
          (F == null && Z == null) ||
          vt(e, t, ae, F, l, Z));
  }
  function Is(e) {
    switch (e) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0;
      default:
        return !1;
    }
  }
  function Vu() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), l = 0;
        l < n.length;
        l++
      ) {
        var f = n[l],
          h = f.transferSize,
          m = f.initiatorType,
          x = f.duration;
        if (h && x && Is(m)) {
          for (m = 0, x = f.responseEnd, l += 1; l < n.length; l++) {
            var O = n[l],
              Y = O.startTime;
            if (Y > x) break;
            var ee = O.transferSize,
              ae = O.initiatorType;
            ee &&
              Is(ae) &&
              ((O = O.responseEnd),
              (m += ee * (O < x ? 1 : (x - Y) / (O - Y))));
          }
          if ((--l, (t += (8 * (h + m)) / (f.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var Iu = null,
    Js = null;
  function Ju(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Wu(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function On(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Kr(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ws = null;
  function dg() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === Ws
        ? !1
        : ((Ws = e), !0)
      : ((Ws = null), !1);
  }
  var S1 = typeof setTimeout == 'function' ? setTimeout : void 0,
    gg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    x1 = typeof Promise == 'function' ? Promise : void 0,
    C1 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof x1 < 'u'
          ? function (e) {
              return x1.resolve(null).then(e).catch(vr);
            }
          : S1;
  function vr(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ee(e) {
    return e === 'head';
  }
  function Ps(e, t) {
    var n = t,
      l = 0;
    do {
      var f = n.nextSibling;
      if ((e.removeChild(n), f && f.nodeType === 8))
        if (((n = f.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (e.removeChild(f), zi(t));
            return;
          }
          l--;
        } else if (
          n === '$' ||
          n === '$?' ||
          n === '$~' ||
          n === '$!' ||
          n === '&'
        )
          l++;
        else if (n === 'html') Pu(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), Pu(n));
          for (var h = n.firstChild; h; ) {
            var m = h.nextSibling,
              x = h.nodeName;
            (h[Xi] ||
              x === 'SCRIPT' ||
              x === 'STYLE' ||
              (x === 'LINK' && h.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(h),
              (h = m));
          }
        } else n === 'body' && Pu(e.ownerDocument.body);
      n = f;
    } while (n);
    zi(t);
  }
  function Pn(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = 'none'))
            : ((n.style.display = n._stashedDisplay || ''),
              n.getAttribute('style') === '' && n.removeAttribute('style'))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ''))
              : (n.nodeValue = n._stashedText || '')),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === '/$')) {
          if (e === 0) break;
          e--;
        } else (n !== '$' && n !== '$?' && n !== '$~' && n !== '$!') || e++;
      n = l;
    } while (n);
  }
  function Df(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Df(n), po(n));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (n.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(n);
    }
  }
  function vg(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var f = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Xi])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((h = e.getAttribute('rel')),
                h === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                h !== f.rel ||
                e.getAttribute('href') !==
                  (f.href == null || f.href === '' ? null : f.href) ||
                e.getAttribute('crossorigin') !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                e.getAttribute('title') !== (f.title == null ? null : f.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((h = e.getAttribute('src')),
                (h !== (f.src == null ? null : f.src) ||
                  e.getAttribute('type') !== (f.type == null ? null : f.type) ||
                  e.getAttribute('crossorigin') !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  h &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var h = f.name == null ? null : '' + f.name;
        if (f.type === 'hidden' && e.getAttribute('name') === h) return e;
      } else return e;
      if (((e = pa(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function it(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !n) ||
        ((e = pa(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function A1(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !t) ||
        ((e = pa(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function qf(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Ci(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function pg(e, t) {
    var n = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = t;
    else if (e.data !== '$?' || n.readyState !== 'loading') t();
    else {
      var l = function () {
        (t(), n.removeEventListener('DOMContentLoaded', l));
      };
      (n.addEventListener('DOMContentLoaded', l), (e._reactRetry = l));
    }
  }
  function pa(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' ||
            t === '$!' ||
            t === '$?' ||
            t === '$~' ||
            t === '&' ||
            t === 'F!' ||
            t === 'F')
        )
          break;
        if (t === '/$' || t === '/&') return null;
      }
    }
    return e;
  }
  var e0 = null;
  function R1(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return pa(e.nextSibling);
          t--;
        } else
          (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function T1(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?' || n === '$~' || n === '&') {
          if (t === 0) return e;
          t--;
        } else (n !== '/$' && n !== '/&') || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function E1(e, t, n) {
    switch (((t = Ju(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Pu(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    po(e);
  }
  var ma = new Map(),
    w1 = new Set();
  function Lf(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var pr = ne.d;
  ne.d = { f: mg, r: yg, D: t0, C: bg, L: _g, m: Sg, X: Mn, S: It, M: xg };
  function mg() {
    var e = pr.f(),
      t = Af();
    return e || t;
  }
  function yg(e) {
    var t = Va(e);
    t !== null && t.tag === 5 && t.type === 'form' ? ls(t) : pr.r(e);
  }
  var $r = typeof document > 'u' ? null : document;
  function O1(e, t, n) {
    var l = $r;
    if (l && typeof t == 'string' && t) {
      var f = Bn(t);
      ((f = 'link[rel="' + e + '"][href="' + f + '"]'),
        typeof n == 'string' && (f += '[crossorigin="' + n + '"]'),
        w1.has(f) ||
          (w1.add(f),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(f) === null &&
            ((t = l.createElement('link')),
            rn(t, 'link', e),
            Qt(t),
            l.head.appendChild(t))));
    }
  }
  function t0(e) {
    (pr.D(e), O1('dns-prefetch', e, null));
  }
  function bg(e, t) {
    (pr.C(e, t), O1('preconnect', e, t));
  }
  function _g(e, t, n) {
    pr.L(e, t, n);
    var l = $r;
    if (l && e && t) {
      var f = 'link[rel="preload"][as="' + Bn(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((f += '[imagesrcset="' + Bn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' &&
            (f += '[imagesizes="' + Bn(n.imageSizes) + '"]'))
        : (f += '[href="' + Bn(e) + '"]');
      var h = f;
      switch (t) {
        case 'style':
          h = Ai(e);
          break;
        case 'script':
          h = Ti(e);
      }
      ma.has(h) ||
        ((e = T(
          {
            rel: 'preload',
            href: t === 'image' && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        ma.set(h, e),
        l.querySelector(f) !== null ||
          (t === 'style' && l.querySelector(Ri(h))) ||
          (t === 'script' && l.querySelector(Ei(h))) ||
          ((t = l.createElement('link')),
          rn(t, 'link', e),
          Qt(t),
          l.head.appendChild(t)));
    }
  }
  function Sg(e, t) {
    pr.m(e, t);
    var n = $r;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        f =
          'link[rel="modulepreload"][as="' + Bn(l) + '"][href="' + Bn(e) + '"]',
        h = f;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          h = Ti(e);
      }
      if (
        !ma.has(h) &&
        ((e = T({ rel: 'modulepreload', href: e }, t)),
        ma.set(h, e),
        n.querySelector(f) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(Ei(h))) return;
        }
        ((l = n.createElement('link')),
          rn(l, 'link', e),
          Qt(l),
          n.head.appendChild(l));
      }
    }
  }
  function It(e, t, n) {
    pr.S(e, t, n);
    var l = $r;
    if (l && e) {
      var f = Ia(l).hoistableStyles,
        h = Ai(e);
      t = t || 'default';
      var m = f.get(h);
      if (!m) {
        var x = { loading: 0, preload: null };
        if ((m = l.querySelector(Ri(h)))) x.loading = 5;
        else {
          ((e = T({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = ma.get(h)) && n0(e, n));
          var O = (m = l.createElement('link'));
          (Qt(O),
            rn(O, 'link', e),
            (O._p = new Promise(function (Y, ee) {
              ((O.onload = Y), (O.onerror = ee));
            })),
            O.addEventListener('load', function () {
              x.loading |= 1;
            }),
            O.addEventListener('error', function () {
              x.loading |= 2;
            }),
            (x.loading |= 4),
            Bf(m, t, l));
        }
        ((m = { type: 'stylesheet', instance: m, count: 1, state: x }),
          f.set(h, m));
      }
    }
  }
  function Mn(e, t) {
    pr.X(e, t);
    var n = $r;
    if (n && e) {
      var l = Ia(n).hoistableScripts,
        f = Ti(e),
        h = l.get(f);
      h ||
        ((h = n.querySelector(Ei(f))),
        h ||
          ((e = T({ src: e, async: !0 }, t)),
          (t = ma.get(f)) && Hf(e, t),
          (h = n.createElement('script')),
          Qt(h),
          rn(h, 'link', e),
          n.head.appendChild(h)),
        (h = { type: 'script', instance: h, count: 1, state: null }),
        l.set(f, h));
    }
  }
  function xg(e, t) {
    pr.M(e, t);
    var n = $r;
    if (n && e) {
      var l = Ia(n).hoistableScripts,
        f = Ti(e),
        h = l.get(f);
      h ||
        ((h = n.querySelector(Ei(f))),
        h ||
          ((e = T({ src: e, async: !0, type: 'module' }, t)),
          (t = ma.get(f)) && Hf(e, t),
          (h = n.createElement('script')),
          Qt(h),
          rn(h, 'link', e),
          n.head.appendChild(h)),
        (h = { type: 'script', instance: h, count: 1, state: null }),
        l.set(f, h));
    }
  }
  function M1(e, t, n, l) {
    var f = (f = Ne.current) ? Lf(f) : null;
    if (!f) throw Error(o(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Ai(n.href)),
            (n = Ia(f).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: 'style', instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          n.rel === 'stylesheet' &&
          typeof n.href == 'string' &&
          typeof n.precedence == 'string'
        ) {
          e = Ai(n.href);
          var h = Ia(f).hoistableStyles,
            m = h.get(e);
          if (
            (m ||
              ((f = f.ownerDocument || f),
              (m = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              h.set(e, m),
              (h = f.querySelector(Ri(e))) &&
                !h._p &&
                ((m.instance = h), (m.state.loading = 5)),
              ma.has(e) ||
                ((n = {
                  rel: 'preload',
                  as: 'style',
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                ma.set(e, n),
                h || Cg(f, e, n, m.state))),
            t && l === null)
          )
            throw Error(o(528, ''));
          return m;
        }
        if (t && l !== null) throw Error(o(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = Ti(n)),
              (n = Ia(f).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function Ai(e) {
    return 'href="' + Bn(e) + '"';
  }
  function Ri(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function z1(e) {
    return T({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Cg(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = 1)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        rn(t, 'link', n),
        Qt(t),
        e.head.appendChild(t));
  }
  function Ti(e) {
    return '[src="' + Bn(e) + '"]';
  }
  function Ei(e) {
    return 'script[async]' + e;
  }
  function j1(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Bn(n.href) + '"]');
          if (l) return ((t.instance = l), Qt(l), l);
          var f = T({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Qt(l),
            rn(l, 'style', f),
            Bf(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          f = Ai(n.href);
          var h = e.querySelector(Ri(f));
          if (h) return ((t.state.loading |= 4), (t.instance = h), Qt(h), h);
          ((l = z1(n)),
            (f = ma.get(f)) && n0(l, f),
            (h = (e.ownerDocument || e).createElement('link')),
            Qt(h));
          var m = h;
          return (
            (m._p = new Promise(function (x, O) {
              ((m.onload = x), (m.onerror = O));
            })),
            rn(h, 'link', l),
            (t.state.loading |= 4),
            Bf(h, n.precedence, e),
            (t.instance = h)
          );
        case 'script':
          return (
            (h = Ti(n.src)),
            (f = e.querySelector(Ei(h)))
              ? ((t.instance = f), Qt(f), f)
              : ((l = n),
                (f = ma.get(h)) && ((l = T({}, n)), Hf(l, f)),
                (e = e.ownerDocument || e),
                (f = e.createElement('script')),
                Qt(f),
                rn(f, 'link', l),
                e.head.appendChild(f),
                (t.instance = f))
          );
        case 'void':
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), Bf(l, n.precedence, e));
    return t.instance;
  }
  function Bf(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        f = l.length ? l[l.length - 1] : null,
        h = f,
        m = 0;
      m < l.length;
      m++
    ) {
      var x = l[m];
      if (x.dataset.precedence === t) h = x;
      else if (h !== f) break;
    }
    h
      ? h.parentNode.insertBefore(e, h.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function n0(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Hf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ec = null;
  function D1(e, t, n) {
    if (ec === null) {
      var l = new Map(),
        f = (ec = new Map());
      f.set(n, l);
    } else ((f = ec), (l = f.get(n)), l || ((l = new Map()), f.set(n, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), f = 0;
      f < n.length;
      f++
    ) {
      var h = n[f];
      if (
        !(
          h[Xi] ||
          h[Pt] ||
          (e === 'link' && h.getAttribute('rel') === 'stylesheet')
        ) &&
        h.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var m = h.getAttribute(t) || '';
        m = e + m;
        var x = l.get(m);
        x ? x.push(h) : l.set(m, [h]);
      }
    }
    return l;
  }
  function q1(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === 'title' ? e.querySelector('head > title') : null,
      ));
  }
  function Ag(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled),
              typeof t.precedence == 'string' && e == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function L1(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function wi(e, t, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var f = Ai(l.href),
          h = t.querySelector(Ri(f));
        if (h) {
          ((t = h._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Uf.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = h),
            Qt(h));
          return;
        }
        ((h = t.ownerDocument || t),
          (l = z1(l)),
          (f = ma.get(f)) && n0(l, f),
          (h = h.createElement('link')),
          Qt(h));
        var m = h;
        ((m._p = new Promise(function (x, O) {
          ((m.onload = x), (m.onerror = O));
        })),
          rn(h, 'link', l),
          (n.instance = h));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Uf.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var a0 = 0;
  function Rg(e, t) {
    return (
      e.stylesheets && e.count === 0 && Gf(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Gf(e, e.stylesheets), e.unsuspend)) {
                var h = e.unsuspend;
                ((e.unsuspend = null), h());
              }
            }, 6e4 + t);
            0 < e.imgBytes && a0 === 0 && (a0 = 62500 * Vu());
            var f = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Gf(e, e.stylesheets), e.unsuspend))
                ) {
                  var h = e.unsuspend;
                  ((e.unsuspend = null), h());
                }
              },
              (e.imgBytes > a0 ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(f));
              }
            );
          }
        : null
    );
  }
  function Uf() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Gf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Nf = null;
  function Gf(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Nf = new Map()),
        t.forEach(B1, e),
        (Nf = null),
        Uf.call(e)));
  }
  function B1(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Nf.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), Nf.set(e, n));
        for (
          var f = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            h = 0;
          h < f.length;
          h++
        ) {
          var m = f[h];
          (m.nodeName === 'LINK' || m.getAttribute('media') !== 'not all') &&
            (n.set(m.dataset.precedence, m), (l = m));
        }
        l && n.set(null, l);
      }
      ((f = t.instance),
        (m = f.getAttribute('data-precedence')),
        (h = n.get(m) || l),
        h === l && n.set(null, f),
        n.set(m, f),
        this.count++,
        (l = Uf.bind(this)),
        f.addEventListener('load', l),
        f.addEventListener('error', l),
        h
          ? h.parentNode.insertBefore(f, h.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(f, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Oi = {
    $$typeof: ue,
    Provider: null,
    Consumer: null,
    _currentValue: se,
    _currentValue2: se,
    _threadCount: 0,
  };
  function Tg(e, t, n, l, f, h, m, x, O) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ho(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ho(0)),
      (this.hiddenUpdates = ho(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = f),
      (this.onCaughtError = h),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = O),
      (this.incompleteTransitions = new Map()));
  }
  function H1(e, t, n, l, f, h, m, x, O, Y, ee, ae) {
    return (
      (e = new Tg(e, t, n, m, O, Y, ee, ae, x)),
      (t = 1),
      h === !0 && (t |= 24),
      (h = en(3, null, null, t)),
      (e.current = h),
      (h.stateNode = e),
      (t = xa()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (h.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Ga(h),
      e
    );
  }
  function U1(e) {
    return e ? ((e = er), e) : er;
  }
  function N1(e, t, n, l, f, h) {
    ((f = U1(f)),
      l.context === null ? (l.context = f) : (l.pendingContext = f),
      (l = jr(t)),
      (l.payload = { element: n }),
      (h = h === void 0 ? null : h),
      h !== null && (l.callback = h),
      (n = Ra(e, l, t)),
      n !== null && (En(n, e, t), su(n, e, t)));
  }
  function G1(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function r0(e, t) {
    (G1(e, t), (e = e.alternate) && G1(e, t));
  }
  function k1(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ha(e, 67108864);
      (t !== null && En(t, e, 67108864), r0(e, 67108864));
    }
  }
  function Y1(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = In();
      t = go(t);
      var n = Ha(e, t);
      (n !== null && En(n, e, t), r0(e, t));
    }
  }
  var kf = !0;
  function Eg(e, t, n, l) {
    var f = J.T;
    J.T = null;
    var h = ne.p;
    try {
      ((ne.p = 2), l0(e, t, n, l));
    } finally {
      ((ne.p = h), (J.T = f));
    }
  }
  function wg(e, t, n, l) {
    var f = J.T;
    J.T = null;
    var h = ne.p;
    try {
      ((ne.p = 8), l0(e, t, n, l));
    } finally {
      ((ne.p = h), (J.T = f));
    }
  }
  function l0(e, t, n, l) {
    if (kf) {
      var f = i0(l);
      if (f === null) (Qs(e, t, l, Yf, n), X1(e, l));
      else if (K1(f, e, t, n, l)) l.stopPropagation();
      else if ((X1(e, l), t & 4 && -1 < Og.indexOf(e))) {
        for (; f !== null; ) {
          var h = Va(f);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var m = rl(h.pendingLanes);
                  if (m !== 0) {
                    var x = h;
                    for (x.pendingLanes |= 2, x.entangledLanes |= 2; m; ) {
                      var O = 1 << (31 - hn(m));
                      ((x.entanglements[1] |= O), (m &= ~O));
                    }
                    (Ka(h), (Pe & 6) === 0 && ((Tl = qn() + 500), $u(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((x = Ha(h, 2)), x !== null && En(x, h, 2), Af(), r0(h, 2));
            }
          if (((h = i0(l)), h === null && Qs(e, t, l, Yf, n), h === f)) break;
          f = h;
        }
        f !== null && l.stopPropagation();
      } else Qs(e, t, l, null, n);
    }
  }
  function i0(e) {
    return ((e = _o(e)), u0(e));
  }
  var Yf = null;
  function u0(e) {
    if (((Yf = null), (e = Hl(e)), e !== null)) {
      var t = g(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = v(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = y(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Yf = e), null);
  }
  function F1(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (Ni()) {
          case M0:
            return 2;
          case Ll:
            return 8;
          case Qa:
          case uo:
            return 32;
          case uc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var c0 = !1,
    Zr = null,
    Qr = null,
    Vr = null,
    tc = new Map(),
    nc = new Map(),
    Ir = [],
    Og =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function X1(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Zr = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Qr = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Vr = null;
        break;
      case 'pointerover':
      case 'pointerout':
        tc.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        nc.delete(t.pointerId);
    }
  }
  function Ol(e, t, n, l, f, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: h,
          targetContainers: [f],
        }),
        t !== null && ((t = Va(t)), t !== null && k1(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        f !== null && t.indexOf(f) === -1 && t.push(f),
        e);
  }
  function K1(e, t, n, l, f) {
    switch (t) {
      case 'focusin':
        return ((Zr = Ol(Zr, e, t, n, l, f)), !0);
      case 'dragenter':
        return ((Qr = Ol(Qr, e, t, n, l, f)), !0);
      case 'mouseover':
        return ((Vr = Ol(Vr, e, t, n, l, f)), !0);
      case 'pointerover':
        var h = f.pointerId;
        return (tc.set(h, Ol(tc.get(h) || null, e, t, n, l, f)), !0);
      case 'gotpointercapture':
        return (
          (h = f.pointerId),
          nc.set(h, Ol(nc.get(h) || null, e, t, n, l, f)),
          !0
        );
    }
    return !1;
  }
  function f0(e) {
    var t = Hl(e.target);
    if (t !== null) {
      var n = g(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = v(n)), t !== null)) {
            ((e.blockedOn = t),
              D0(e.priority, function () {
                Y1(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = y(n)), t !== null)) {
            ((e.blockedOn = t),
              D0(e.priority, function () {
                Y1(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ff(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = i0(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((bo = l), n.target.dispatchEvent(l), (bo = null));
      } else return ((t = Va(n)), t !== null && k1(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function $1(e, t, n) {
    Ff(e) && n.delete(t);
  }
  function Mg() {
    ((c0 = !1),
      Zr !== null && Ff(Zr) && (Zr = null),
      Qr !== null && Ff(Qr) && (Qr = null),
      Vr !== null && Ff(Vr) && (Vr = null),
      tc.forEach($1),
      nc.forEach($1));
  }
  function Mi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      c0 ||
        ((c0 = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, Mg)));
  }
  var Xf = null;
  function Z1(e) {
    Xf !== e &&
      ((Xf = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        Xf === e && (Xf = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            f = e[t + 2];
          if (typeof l != 'function') {
            if (u0(l || n) === null) continue;
            break;
          }
          var h = Va(n);
          h !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Lr(h, { pending: !0, data: f, method: n.method, action: l }, l, f));
        }
      }));
  }
  function zi(e) {
    function t(O) {
      return Mi(O, e);
    }
    (Zr !== null && Mi(Zr, e),
      Qr !== null && Mi(Qr, e),
      Vr !== null && Mi(Vr, e),
      tc.forEach(t),
      nc.forEach(t));
    for (var n = 0; n < Ir.length; n++) {
      var l = Ir[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Ir.length && ((n = Ir[0]), n.blockedOn === null); )
      (f0(n), n.blockedOn === null && Ir.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var f = n[l],
          h = n[l + 1],
          m = f[mn] || null;
        if (typeof h == 'function') m || Z1(n);
        else if (m) {
          var x = null;
          if (h && h.hasAttribute('formAction')) {
            if (((f = h), (m = h[mn] || null))) x = m.formAction;
            else if (u0(f) !== null) continue;
          } else x = m.action;
          (typeof x == 'function' ? (n[l + 1] = x) : (n.splice(l, 3), (l -= 3)),
            Z1(n));
        }
      }
  }
  function pn() {
    function e(h) {
      h.canIntercept &&
        h.info === 'react-transition' &&
        h.intercept({
          handler: function () {
            return new Promise(function (m) {
              return (f = m);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (f !== null && (f(), (f = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var h = navigation.currentEntry;
        h &&
          h.url != null &&
          navigation.navigate(h.url, {
            state: h.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var l = !1,
        f = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            f !== null && (f(), (f = null)));
        }
      );
    }
  }
  function ac(e) {
    this._internalRoot = e;
  }
  ((Kf.prototype.render = ac.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var n = t.current,
        l = In();
      N1(n, l, e, t, null, null);
    }),
    (Kf.prototype.unmount = ac.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (N1(e.current, 2, null, e, null, null), Af(), (t[Bl] = null));
        }
      }));
  function Kf(e) {
    this._internalRoot = e;
  }
  Kf.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = j0();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ir.length && t !== 0 && t < Ir[n].priority; n++);
      (Ir.splice(n, 0, e), n === 0 && f0(e));
    }
  };
  var Q1 = c.version;
  if (Q1 !== '19.2.4') throw Error(o(527, Q1, '19.2.4'));
  ne.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(o(188))
        : ((e = Object.keys(e).join(',')), Error(o(268, e)));
    return (
      (e = S(t)),
      (e = e !== null ? E(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var zg = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: J,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var $f = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$f.isDisabled && $f.supportsFiber)
      try {
        ((al = $f.inject(zg)), (sn = $f));
      } catch {}
  }
  return (
    (h0.createRoot = function (e, t) {
      if (!d(e)) throw Error(o(299));
      var n = !1,
        l = '',
        f = os,
        h = ss,
        m = Dh;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (f = t.onUncaughtError),
          t.onCaughtError !== void 0 && (h = t.onCaughtError),
          t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        (t = H1(e, 1, !1, null, null, n, l, null, f, h, m, pn)),
        (e[Bl] = t.current),
        Zs(e),
        new ac(t)
      );
    }),
    (h0.hydrateRoot = function (e, t, n) {
      if (!d(e)) throw Error(o(299));
      var l = !1,
        f = '',
        h = os,
        m = ss,
        x = Dh,
        O = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (f = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (h = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (x = n.onRecoverableError),
          n.formState !== void 0 && (O = n.formState)),
        (t = H1(e, 1, !0, t, n ?? null, l, f, O, h, m, x, pn)),
        (t.context = U1(null)),
        (n = t.current),
        (l = In()),
        (l = go(l)),
        (f = jr(l)),
        (f.callback = null),
        Ra(n, f, l),
        (n = l),
        (t.current.lanes = n),
        Fi(t, n),
        Ka(t),
        (e[Bl] = t.current),
        Zs(e),
        new Kf(t)
      );
    }),
    (h0.version = '19.2.4'),
    h0
  );
}
var Ky;
function eS() {
  if (Ky) return qg.exports;
  Ky = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (c) {
        console.error(c);
      }
  }
  return (r(), (qg.exports = P5()), qg.exports);
}
var tS = eS();
const z8 = Object.freeze({
    zIndex: { tooltip: 10, selectItems: 50 },
    transitions: { default: 'all 0.2s linear' },
    padding: { small: 5, big: 12, medium: 8 },
    textSize: { small: 0.5, medium: 0.9, big: 1.2 },
    media: {
      smallDevices: '(max-height: 701px)',
      otherDevices: '(min-height: 702px)',
    },
  }),
  nS = Object.freeze({
    color: {
      type: 'HSLA',
      hue: 0,
      saturation: 0,
      lightness: 100,
      alpha: 1,
      raw: 'hsla(0, 0%, 100%, 1)',
    },
    highlight: {
      type: 'HSLA',
      hue: 0,
      saturation: 0,
      lightness: 90.2,
      alpha: 1,
      raw: 'hsla(0, 0%, 90.2%, 1)',
    },
    text: {
      type: 'HSLA',
      hue: 0,
      saturation: 0,
      lightness: 20,
      alpha: 1,
      raw: 'hsla(0, 0%, 20%, 1)',
    },
    shadow: {
      type: 'HSLA',
      hue: 0,
      saturation: 0,
      lightness: 0.78,
      alpha: 0.4,
      raw: 'hsla(0, 0%, 0.78%, 0.4)',
    },
    ...z8,
  });
var D = cy();
const aS = (r, c) => {
  const u = { ...r };
  for (const o of c) delete u[o];
  return u;
};
var zt = '-ms-',
  y0 = '-moz-',
  ht = '-webkit-',
  j8 = 'comm',
  fy = 'rule',
  oy = 'decl',
  rS = '@import',
  lS = '@namespace',
  D8 = '@keyframes',
  iS = '@layer',
  q8 = Math.abs,
  sy = String.fromCharCode,
  ry = Object.assign;
function uS(r, c) {
  return ln(r, 0) ^ 45
    ? (((((((c << 2) ^ ln(r, 0)) << 2) ^ ln(r, 1)) << 2) ^ ln(r, 2)) << 2) ^
        ln(r, 3)
    : 0;
}
function L8(r) {
  return r.trim();
}
function zl(r, c) {
  return (r = c.exec(r)) ? r[0] : r;
}
function ke(r, c, u) {
  return r.replace(c, u);
}
function I1(r, c, u) {
  return r.indexOf(c, u);
}
function ln(r, c) {
  return r.charCodeAt(c) | 0;
}
function rc(r, c, u) {
  return r.slice(c, u);
}
function yr(r) {
  return r.length;
}
function B8(r) {
  return r.length;
}
function g0(r, c) {
  return (c.push(r), r);
}
function cS(r, c) {
  return r.map(c).join('');
}
function $y(r, c) {
  return r.filter(function (u) {
    return !zl(u, c);
  });
}
var rd = 1,
  If = 1,
  H8 = 0,
  $a = 0,
  Jt = 0,
  Pf = '';
function ld(r, c, u, o, d, g, v, y) {
  return {
    value: r,
    root: c,
    parent: u,
    type: o,
    props: d,
    children: g,
    line: rd,
    column: If,
    length: v,
    return: '',
    siblings: y,
  };
}
function ji(r, c) {
  return ry(
    ld('', null, null, '', null, null, 0, r.siblings),
    r,
    { length: -r.length },
    c,
  );
}
function Zf(r) {
  for (; r.root; ) r = ji(r.root, { children: [r] });
  g0(r, r.siblings);
}
function fS() {
  return Jt;
}
function oS() {
  return (
    (Jt = $a > 0 ? ln(Pf, --$a) : 0),
    If--,
    Jt === 10 && ((If = 1), rd--),
    Jt
  );
}
function br() {
  return (
    (Jt = $a < H8 ? ln(Pf, $a++) : 0),
    If++,
    Jt === 10 && ((If = 1), rd++),
    Jt
  );
}
function qi() {
  return ln(Pf, $a);
}
function J1() {
  return $a;
}
function id(r, c) {
  return rc(Pf, r, c);
}
function _0(r) {
  switch (r) {
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
function sS(r) {
  return ((rd = If = 1), (H8 = yr((Pf = r))), ($a = 0), []);
}
function hS(r) {
  return ((Pf = ''), r);
}
function Ng(r) {
  return L8(id($a - 1, ly(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function dS(r) {
  for (; (Jt = qi()) && Jt < 33; ) br();
  return _0(r) > 2 || _0(Jt) > 3 ? '' : ' ';
}
function gS(r, c) {
  for (
    ;
    --c &&
    br() &&
    !(Jt < 48 || Jt > 102 || (Jt > 57 && Jt < 65) || (Jt > 70 && Jt < 97));
  );
  return id(r, J1() + (c < 6 && qi() == 32 && br() == 32));
}
function ly(r) {
  for (; br(); )
    switch (Jt) {
      case r:
        return $a;
      case 34:
      case 39:
        r !== 34 && r !== 39 && ly(Jt);
        break;
      case 40:
        r === 41 && ly(r);
        break;
      case 92:
        br();
        break;
    }
  return $a;
}
function vS(r, c) {
  for (; br() && r + Jt !== 57 && !(r + Jt === 84 && qi() === 47); );
  return '/*' + id(c, $a - 1) + '*' + sy(r === 47 ? r : br());
}
function pS(r) {
  for (; !_0(qi()); ) br();
  return id(r, $a);
}
function Zy(r) {
  return hS(W1('', null, null, null, [''], (r = sS(r)), 0, [0], r));
}
function W1(r, c, u, o, d, g, v, y, _) {
  for (
    var S = 0,
      E = 0,
      T = v,
      q = 0,
      B = 0,
      N = 0,
      X = 1,
      Q = 1,
      I = 1,
      $ = 0,
      ue = '',
      V = d,
      fe = g,
      W = o,
      k = ue;
    Q;
  )
    switch (((N = $), ($ = br()))) {
      case 40:
        if (N != 108 && ln(k, T - 1) == 58) {
          I1((k += ke(Ng($), '&', '&\f')), '&\f', q8(S ? y[S - 1] : 0)) != -1 &&
            (I = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += Ng($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += dS(N);
        break;
      case 92:
        k += gS(J1() - 1, 7);
        continue;
      case 47:
        switch (qi()) {
          case 42:
          case 47:
            (g0(mS(vS(br(), J1()), c, u, _), _),
              (_0(N || 1) == 5 || _0(qi() || 1) == 5) &&
                yr(k) &&
                rc(k, -1, void 0) !== ' ' &&
                (k += ' '));
            break;
          default:
            k += '/';
        }
        break;
      case 123 * X:
        y[S++] = yr(k) * I;
      case 125 * X:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            Q = 0;
          case 59 + E:
            (I == -1 && (k = ke(k, /\f/g, '')),
              B > 0 &&
                (yr(k) - T || (X === 0 && N === 47)) &&
                g0(
                  B > 32
                    ? Vy(k + ';', o, u, T - 1, _)
                    : Vy(ke(k, ' ', '') + ';', o, u, T - 2, _),
                  _,
                ));
            break;
          case 59:
            k += ';';
          default:
            if (
              (g0(
                (W = Qy(k, c, u, S, E, d, y, ue, (V = []), (fe = []), T, g)),
                g,
              ),
              $ === 123)
            )
              if (E === 0) W1(k, c, W, W, V, g, T, y, fe);
              else {
                switch (q) {
                  case 99:
                    if (ln(k, 3) === 110) break;
                  case 108:
                    if (ln(k, 2) === 97) break;
                  default:
                    E = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                E
                  ? W1(
                      r,
                      W,
                      W,
                      o &&
                        g0(Qy(r, W, W, 0, 0, d, y, ue, d, (V = []), T, fe), fe),
                      d,
                      fe,
                      T,
                      y,
                      o ? V : fe,
                    )
                  : W1(k, W, W, W, [''], fe, 0, y, fe);
              }
        }
        ((S = E = B = 0), (X = I = 1), (ue = k = ''), (T = v));
        break;
      case 58:
        ((T = 1 + yr(k)), (B = N));
      default:
        if (X < 1) {
          if ($ == 123) --X;
          else if ($ == 125 && X++ == 0 && oS() == 125) continue;
        }
        switch (((k += sy($)), $ * X)) {
          case 38:
            I = E > 0 ? 1 : ((k += '\f'), -1);
            break;
          case 44:
            ((y[S++] = (yr(k) - 1) * I), (I = 1));
            break;
          case 64:
            (qi() === 45 && (k += Ng(br())),
              (q = qi()),
              (E = T = yr((ue = k += pS(J1())))),
              $++);
            break;
          case 45:
            N === 45 && yr(k) == 2 && (X = 0);
        }
    }
  return g;
}
function Qy(r, c, u, o, d, g, v, y, _, S, E, T) {
  for (
    var q = d - 1, B = d === 0 ? g : [''], N = B8(B), X = 0, Q = 0, I = 0;
    X < o;
    ++X
  )
    for (var $ = 0, ue = rc(r, q + 1, (q = q8((Q = v[X])))), V = r; $ < N; ++$)
      (V = L8(Q > 0 ? B[$] + ' ' + ue : ke(ue, /&\f/g, B[$]))) && (_[I++] = V);
  return ld(r, c, u, d === 0 ? fy : y, _, S, E, T);
}
function mS(r, c, u, o) {
  return ld(r, c, u, j8, sy(fS()), rc(r, 2, -2), 0, o);
}
function Vy(r, c, u, o, d) {
  return ld(r, c, u, oy, rc(r, 0, o), rc(r, o + 1, -1), o, d);
}
function U8(r, c, u) {
  switch (uS(r, c)) {
    case 5103:
      return ht + 'print-' + r + r;
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
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
      return ht + r + r;
    case 4855:
      return (
        ht +
        r
          .replace('add', 'source-over')
          .replace('substract', 'source-out')
          .replace('intersect', 'source-in')
          .replace('exclude', 'xor') +
        r
      );
    case 4789:
      return y0 + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ht + r + y0 + r + zt + r + r;
    case 5936:
      switch (ln(r, c + 11)) {
        case 114:
          return ht + r + zt + ke(r, /[svh]\w+-[tblr]{2}/, 'tb') + r;
        case 108:
          return ht + r + zt + ke(r, /[svh]\w+-[tblr]{2}/, 'tb-rl') + r;
        case 45:
          return ht + r + zt + ke(r, /[svh]\w+-[tblr]{2}/, 'lr') + r;
      }
    case 6828:
    case 4268:
    case 2903:
      return ht + r + zt + r + r;
    case 6165:
      return ht + r + zt + 'flex-' + r + r;
    case 5187:
      return (
        ht + r + ke(r, /(\w+).+(:[^]+)/, ht + 'box-$1$2' + zt + 'flex-$1$2') + r
      );
    case 5443:
      return (
        ht +
        r +
        zt +
        'flex-item-' +
        ke(r, /flex-|-self/g, '') +
        (zl(r, /flex-|baseline/)
          ? ''
          : zt + 'grid-row-' + ke(r, /flex-|-self/g, '')) +
        r
      );
    case 4675:
      return (
        ht +
        r +
        zt +
        'flex-line-pack' +
        ke(r, /align-content|flex-|-self/g, '') +
        r
      );
    case 5548:
      return ht + r + zt + ke(r, 'shrink', 'negative') + r;
    case 5292:
      return ht + r + zt + ke(r, 'basis', 'preferred-size') + r;
    case 6060:
      return (
        ht +
        'box-' +
        ke(r, '-grow', '') +
        ht +
        r +
        zt +
        ke(r, 'grow', 'positive') +
        r
      );
    case 4554:
      return ht + ke(r, /([^-])(transform)/g, '$1' + ht + '$2') + r;
    case 6187:
      return (
        ke(
          ke(ke(r, /(zoom-|grab)/, ht + '$1'), /(image-set)/, ht + '$1'),
          r,
          '',
        ) + r
      );
    case 5495:
    case 3959:
      return ke(r, /(image-set\([^]*)/, ht + '$1$`$1');
    case 4968:
      return (
        ke(
          ke(r, /(.+:)(flex-)?(.*)/, ht + 'box-pack:$3' + zt + 'flex-pack:$3'),
          /space-between/,
          'justify',
        ) +
        ht +
        r +
        r
      );
    case 4200:
      if (!zl(r, /flex-|baseline/))
        return zt + 'grid-column-align' + rc(r, c) + r;
      break;
    case 2592:
    case 3360:
      return zt + ke(r, 'template-', '') + r;
    case 4384:
    case 3616:
      return u &&
        u.some(function (o, d) {
          return ((c = d), zl(o.props, /grid-\w+-end/));
        })
        ? ~I1(r + (u = u[c].value), 'span', 0)
          ? r
          : zt +
            ke(r, '-start', '') +
            r +
            zt +
            'grid-row-span:' +
            (~I1(u, 'span', 0) ? zl(u, /\d+/) : +zl(u, /\d+/) - +zl(r, /\d+/)) +
            ';'
        : zt + ke(r, '-start', '') + r;
    case 4896:
    case 4128:
      return u &&
        u.some(function (o) {
          return zl(o.props, /grid-\w+-start/);
        })
        ? r
        : zt + ke(ke(r, '-end', '-span'), 'span ', '') + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ke(r, /(.+)-inline(.+)/, ht + '$1$2') + r;
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
      if (yr(r) - 1 - c > 6)
        switch (ln(r, c + 1)) {
          case 109:
            if (ln(r, c + 4) !== 45) break;
          case 102:
            return (
              ke(
                r,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  ht +
                  '$2-$3$1' +
                  y0 +
                  (ln(r, c + 3) == 108 ? '$3' : '$2-$3'),
              ) + r
            );
          case 115:
            return ~I1(r, 'stretch', 0)
              ? U8(ke(r, 'stretch', 'fill-available'), c, u) + r
              : r;
        }
      break;
    case 5152:
    case 5920:
      return ke(
        r,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (o, d, g, v, y, _, S) {
          return (
            zt +
            d +
            ':' +
            g +
            S +
            (v ? zt + d + '-span:' + (y ? _ : +_ - +g) + S : '') +
            r
          );
        },
      );
    case 4949:
      if (ln(r, c + 6) === 121) return ke(r, ':', ':' + ht) + r;
      break;
    case 6444:
      switch (ln(r, ln(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            ke(
              r,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                ht +
                (ln(r, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                ht +
                '$2$3$1' +
                zt +
                '$2box$3',
            ) + r
          );
        case 100:
          return ke(r, ':', ':' + zt) + r;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return ke(r, 'scroll-', 'scroll-snap-') + r;
  }
  return r;
}
function S0(r, c) {
  for (var u = '', o = 0; o < r.length; o++) u += c(r[o], o, r, c) || '';
  return u;
}
function Iy(r, c, u, o) {
  switch (r.type) {
    case iS:
      if (r.children.length) break;
    case rS:
    case lS:
    case oy:
      return (r.return = r.return || r.value);
    case j8:
      return '';
    case D8:
      return (r.return = r.value + '{' + S0(r.children, o) + '}');
    case fy:
      if (!yr((r.value = r.props.join(',')))) return '';
  }
  return yr((u = S0(r.children, o)))
    ? (r.return = r.value + '{' + u + '}')
    : '';
}
function Jy(r) {
  var c = B8(r);
  return function (u, o, d, g) {
    for (var v = '', y = 0; y < c; y++) v += r[y](u, o, d, g) || '';
    return v;
  };
}
function Wy(r, c, u, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case oy:
        r.return = U8(r.value, r.length, u);
        return;
      case D8:
        return S0([ji(r, { value: ke(r.value, '@', '@' + ht) })], o);
      case fy:
        if (r.length)
          return cS((u = r.props), function (d) {
            switch (zl(d, (o = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                (Zf(ji(r, { props: [ke(d, /:(read-\w+)/, ':' + y0 + '$1')] })),
                  Zf(ji(r, { props: [d] })),
                  ry(r, { props: $y(u, o) }));
                break;
              case '::placeholder':
                (Zf(
                  ji(r, {
                    props: [ke(d, /:(plac\w+)/, ':' + ht + 'input-$1')],
                  }),
                ),
                  Zf(ji(r, { props: [ke(d, /:(plac\w+)/, ':' + y0 + '$1')] })),
                  Zf(ji(r, { props: [ke(d, /:(plac\w+)/, zt + 'input-$1')] })),
                  Zf(ji(r, { props: [d] })),
                  ry(r, { props: $y(u, o) }));
                break;
            }
            return '';
          });
    }
}
var ta;
let hy =
  ((ta = class {
    constructor() {
      o0(this, '_sheet');
      o0(this, 'css', []);
      this._sheet = ta.initialize();
    }
    static initialize() {
      const c = document.createElement('style');
      if ((document.head.appendChild(c), !c.sheet))
        throw new Error('It could not get sheet!');
      return c.sheet;
    }
    translateObjecToCss(c, u) {
      return u
        ? `${c}{${Object.entries(u)
            .map(([o, d]) =>
              d !== void 0
                ? `${o.replace(/[A-Z]/g, (g) => '-' + g.toLowerCase())}:${d}; `
                : '',
            )
            .join('')}}`
        : '';
    }
    translateAnimationToCss(c) {
      return Object.keys(c)
        .map(
          (u) =>
            `${u} { ${Object.entries(c[u])
              .map(
                ([o, d]) =>
                  `${o} { ${Object.entries(d)
                    .map(([g, v]) => `${g}:${v};`)
                    .join('')} } `,
              )
              .join('')} }`,
        )
        .join('');
    }
    splitRootAndPseudo(c, u, o) {
      if (!u) throw new Error('You need to have a className to execute it!');
      const d = Object.keys(c).filter((y) => y.indexOf(ta.PSEUDO_KEY) === 0),
        g = d.map((y) => ({
          selector: `.${u}${y.replace(ta.PSEUDO_KEY, '')}`,
          styles: c[y],
          media: o,
        })),
        v = aS(c, [...d]);
      return Object.keys(v).length > 0
        ? [{ selector: `.${u}`, styles: v, media: o }, ...g]
        : g;
    }
    splitWithIntoCssClasses(c, u) {
      const {
        root: o,
        media: d,
        globals: g,
        animations: v,
      } = Object.keys(c).reduce(
        (y, _) =>
          _.indexOf(ta.MEDIA_KEY) === -1 &&
          _.indexOf(ta.PSEUDO_KEY) === -1 &&
          typeof c[_] == 'object'
            ? { ...y, globals: [...y.globals, { selector: _, styles: c[_] }] }
            : _.indexOf(ta.MEDIA_KEY) === 0 &&
                _.toLowerCase().includes('keyframes')
              ? { ...y, animations: { ...y.animations, [_]: c[_] } }
              : _.indexOf(ta.MEDIA_KEY) === 0
                ? {
                    ...y,
                    media: {
                      ...y.media,
                      [_]: [
                        ...(y.media[_] || []),
                        ...this.splitRootAndPseudo(c[_], u, _),
                      ],
                    },
                  }
                : { ...y, root: { ...y.root, [_]: c[_] } },
        { root: {}, animations: {}, media: {}, globals: [] },
      );
      return {
        globals: g,
        root: Object.keys(o).length > 0 ? this.splitRootAndPseudo(o, u) : [],
        media: d,
        animations: v,
      };
    }
    apply(c, u) {
      const {
          root: o,
          media: d,
          globals: g,
          animations: v,
        } = this.splitWithIntoCssClasses(c, u),
        y = g
          .map((N) => this.translateObjecToCss(N.selector, N.styles))
          .join(' '),
        _ = Object.keys(d)
          .map(
            (N) =>
              `${N} { ${d[N].map((X) =>
                this.translateObjecToCss(X.selector, X.styles),
              )
                .join('')
                .trim()} }`,
          )
          .join(' '),
        S = this.translateAnimationToCss(v),
        E = o
          .map((N) => this.translateObjecToCss(N.selector, N.styles))
          .join('')
          .trim(),
        T = S0(Zy(`@media all { ${y} ${E} ${S} }`), Jy([Wy, Iy])),
        q = S0(Zy(`@media all { ${_}  }`), Jy([Wy, Iy])),
        B = `${T}${q}`;
      this.itsAlreadyInserted(B) ||
        (this.css.push(B), this.insert(T), this.insert(q));
    }
    insert(c) {
      c &&
        (this._sheet || (this._sheet = ta.initialize()),
        this._sheet.insertRule(c, this._sheet.cssRules.length));
    }
    itsAlreadyInserted(c) {
      return this.css.includes(c);
    }
    delete() {
      var c, u;
      ((this.css = []),
        this._sheet &&
          ((u = (c = this._sheet) == null ? void 0 : c.ownerNode) == null ||
            u.remove(),
          (this._sheet = void 0)));
    }
  }),
  o0(ta, 'PSEUDO_KEY', '&'),
  o0(ta, 'MEDIA_KEY', '@'),
  ta);
const N8 = D.createContext({
    getContext: (r) => ({}),
    theme: {},
    updateTheme: (r) => {},
  }),
  Wr = () => {
    const r = D.useContext(N8);
    if (!r) throw new Error('You should initialize a PieceProvider!');
    return r;
  };
var V1 =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function yS(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default')
    ? r.default
    : r;
}
var Py = { exports: {} },
  d0 = {},
  e3;
function bS() {
  if (e3) return d0;
  e3 = 1;
  var r = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.fragment');
  function u(o, d, g) {
    var v = null;
    if (
      (g !== void 0 && (v = '' + g),
      d.key !== void 0 && (v = '' + d.key),
      'key' in d)
    ) {
      g = {};
      for (var y in d) y !== 'key' && (g[y] = d[y]);
    } else g = d;
    return (
      (d = g.ref),
      { $$typeof: r, type: o, key: v, ref: d !== void 0 ? d : null, props: g }
    );
  }
  return ((d0.Fragment = c), (d0.jsx = u), (d0.jsxs = u), d0);
}
var t3;
function _S() {
  return (t3 || ((t3 = 1), (Py.exports = bS())), Py.exports);
}
var Jf = _S(),
  Gg,
  n3;
function SS() {
  if (n3) return Gg;
  n3 = 1;
  function r() {
    ((this.__data__ = []), (this.size = 0));
  }
  return ((Gg = r), Gg);
}
var kg, a3;
function G8() {
  if (a3) return kg;
  a3 = 1;
  function r(c, u) {
    return c === u || (c !== c && u !== u);
  }
  return ((kg = r), kg);
}
var Yg, r3;
function ud() {
  if (r3) return Yg;
  r3 = 1;
  var r = G8();
  function c(u, o) {
    for (var d = u.length; d--; ) if (r(u[d][0], o)) return d;
    return -1;
  }
  return ((Yg = c), Yg);
}
var Fg, l3;
function xS() {
  if (l3) return Fg;
  l3 = 1;
  var r = ud(),
    c = Array.prototype,
    u = c.splice;
  function o(d) {
    var g = this.__data__,
      v = r(g, d);
    if (v < 0) return !1;
    var y = g.length - 1;
    return (v == y ? g.pop() : u.call(g, v, 1), --this.size, !0);
  }
  return ((Fg = o), Fg);
}
var Xg, i3;
function CS() {
  if (i3) return Xg;
  i3 = 1;
  var r = ud();
  function c(u) {
    var o = this.__data__,
      d = r(o, u);
    return d < 0 ? void 0 : o[d][1];
  }
  return ((Xg = c), Xg);
}
var Kg, u3;
function AS() {
  if (u3) return Kg;
  u3 = 1;
  var r = ud();
  function c(u) {
    return r(this.__data__, u) > -1;
  }
  return ((Kg = c), Kg);
}
var $g, c3;
function RS() {
  if (c3) return $g;
  c3 = 1;
  var r = ud();
  function c(u, o) {
    var d = this.__data__,
      g = r(d, u);
    return (g < 0 ? (++this.size, d.push([u, o])) : (d[g][1] = o), this);
  }
  return (($g = c), $g);
}
var Zg, f3;
function cd() {
  if (f3) return Zg;
  f3 = 1;
  var r = SS(),
    c = xS(),
    u = CS(),
    o = AS(),
    d = RS();
  function g(v) {
    var y = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++y < _; ) {
      var S = v[y];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (Zg = g),
    Zg
  );
}
var Qg, o3;
function TS() {
  if (o3) return Qg;
  o3 = 1;
  var r = cd();
  function c() {
    ((this.__data__ = new r()), (this.size = 0));
  }
  return ((Qg = c), Qg);
}
var Vg, s3;
function ES() {
  if (s3) return Vg;
  s3 = 1;
  function r(c) {
    var u = this.__data__,
      o = u.delete(c);
    return ((this.size = u.size), o);
  }
  return ((Vg = r), Vg);
}
var Ig, h3;
function wS() {
  if (h3) return Ig;
  h3 = 1;
  function r(c) {
    return this.__data__.get(c);
  }
  return ((Ig = r), Ig);
}
var Jg, d3;
function OS() {
  if (d3) return Jg;
  d3 = 1;
  function r(c) {
    return this.__data__.has(c);
  }
  return ((Jg = r), Jg);
}
var Wg, g3;
function k8() {
  if (g3) return Wg;
  g3 = 1;
  var r = typeof V1 == 'object' && V1 && V1.Object === Object && V1;
  return ((Wg = r), Wg);
}
var Pg, v3;
function jl() {
  if (v3) return Pg;
  v3 = 1;
  var r = k8(),
    c = typeof self == 'object' && self && self.Object === Object && self,
    u = r || c || Function('return this')();
  return ((Pg = u), Pg);
}
var ev, p3;
function dy() {
  if (p3) return ev;
  p3 = 1;
  var r = jl(),
    c = r.Symbol;
  return ((ev = c), ev);
}
var tv, m3;
function MS() {
  if (m3) return tv;
  m3 = 1;
  var r = dy(),
    c = Object.prototype,
    u = c.hasOwnProperty,
    o = c.toString,
    d = r ? r.toStringTag : void 0;
  function g(v) {
    var y = u.call(v, d),
      _ = v[d];
    try {
      v[d] = void 0;
      var S = !0;
    } catch {}
    var E = o.call(v);
    return (S && (y ? (v[d] = _) : delete v[d]), E);
  }
  return ((tv = g), tv);
}
var nv, y3;
function zS() {
  if (y3) return nv;
  y3 = 1;
  var r = Object.prototype,
    c = r.toString;
  function u(o) {
    return c.call(o);
  }
  return ((nv = u), nv);
}
var av, b3;
function fd() {
  if (b3) return av;
  b3 = 1;
  var r = dy(),
    c = MS(),
    u = zS(),
    o = '[object Null]',
    d = '[object Undefined]',
    g = r ? r.toStringTag : void 0;
  function v(y) {
    return y == null
      ? y === void 0
        ? d
        : o
      : g && g in Object(y)
        ? c(y)
        : u(y);
  }
  return ((av = v), av);
}
var rv, _3;
function Y8() {
  if (_3) return rv;
  _3 = 1;
  function r(c) {
    var u = typeof c;
    return c != null && (u == 'object' || u == 'function');
  }
  return ((rv = r), rv);
}
var lv, S3;
function F8() {
  if (S3) return lv;
  S3 = 1;
  var r = fd(),
    c = Y8(),
    u = '[object AsyncFunction]',
    o = '[object Function]',
    d = '[object GeneratorFunction]',
    g = '[object Proxy]';
  function v(y) {
    if (!c(y)) return !1;
    var _ = r(y);
    return _ == o || _ == d || _ == u || _ == g;
  }
  return ((lv = v), lv);
}
var iv, x3;
function jS() {
  if (x3) return iv;
  x3 = 1;
  var r = jl(),
    c = r['__core-js_shared__'];
  return ((iv = c), iv);
}
var uv, C3;
function DS() {
  if (C3) return uv;
  C3 = 1;
  var r = jS(),
    c = (function () {
      var o = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
      return o ? 'Symbol(src)_1.' + o : '';
    })();
  function u(o) {
    return !!c && c in o;
  }
  return ((uv = u), uv);
}
var cv, A3;
function X8() {
  if (A3) return cv;
  A3 = 1;
  var r = Function.prototype,
    c = r.toString;
  function u(o) {
    if (o != null) {
      try {
        return c.call(o);
      } catch {}
      try {
        return o + '';
      } catch {}
    }
    return '';
  }
  return ((cv = u), cv);
}
var fv, R3;
function qS() {
  if (R3) return fv;
  R3 = 1;
  var r = F8(),
    c = DS(),
    u = Y8(),
    o = X8(),
    d = /[\\^$.*+?()[\]{}|]/g,
    g = /^\[object .+?Constructor\]$/,
    v = Function.prototype,
    y = Object.prototype,
    _ = v.toString,
    S = y.hasOwnProperty,
    E = RegExp(
      '^' +
        _.call(S)
          .replace(d, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function T(q) {
    if (!u(q) || c(q)) return !1;
    var B = r(q) ? E : g;
    return B.test(o(q));
  }
  return ((fv = T), fv);
}
var ov, T3;
function LS() {
  if (T3) return ov;
  T3 = 1;
  function r(c, u) {
    return c == null ? void 0 : c[u];
  }
  return ((ov = r), ov);
}
var sv, E3;
function eo() {
  if (E3) return sv;
  E3 = 1;
  var r = qS(),
    c = LS();
  function u(o, d) {
    var g = c(o, d);
    return r(g) ? g : void 0;
  }
  return ((sv = u), sv);
}
var hv, w3;
function gy() {
  if (w3) return hv;
  w3 = 1;
  var r = eo(),
    c = jl(),
    u = r(c, 'Map');
  return ((hv = u), hv);
}
var dv, O3;
function od() {
  if (O3) return dv;
  O3 = 1;
  var r = eo(),
    c = r(Object, 'create');
  return ((dv = c), dv);
}
var gv, M3;
function BS() {
  if (M3) return gv;
  M3 = 1;
  var r = od();
  function c() {
    ((this.__data__ = r ? r(null) : {}), (this.size = 0));
  }
  return ((gv = c), gv);
}
var vv, z3;
function HS() {
  if (z3) return vv;
  z3 = 1;
  function r(c) {
    var u = this.has(c) && delete this.__data__[c];
    return ((this.size -= u ? 1 : 0), u);
  }
  return ((vv = r), vv);
}
var pv, j3;
function US() {
  if (j3) return pv;
  j3 = 1;
  var r = od(),
    c = '__lodash_hash_undefined__',
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g) {
    var v = this.__data__;
    if (r) {
      var y = v[g];
      return y === c ? void 0 : y;
    }
    return o.call(v, g) ? v[g] : void 0;
  }
  return ((pv = d), pv);
}
var mv, D3;
function NS() {
  if (D3) return mv;
  D3 = 1;
  var r = od(),
    c = Object.prototype,
    u = c.hasOwnProperty;
  function o(d) {
    var g = this.__data__;
    return r ? g[d] !== void 0 : u.call(g, d);
  }
  return ((mv = o), mv);
}
var yv, q3;
function GS() {
  if (q3) return yv;
  q3 = 1;
  var r = od(),
    c = '__lodash_hash_undefined__';
  function u(o, d) {
    var g = this.__data__;
    return (
      (this.size += this.has(o) ? 0 : 1),
      (g[o] = r && d === void 0 ? c : d),
      this
    );
  }
  return ((yv = u), yv);
}
var bv, L3;
function kS() {
  if (L3) return bv;
  L3 = 1;
  var r = BS(),
    c = HS(),
    u = US(),
    o = NS(),
    d = GS();
  function g(v) {
    var y = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++y < _; ) {
      var S = v[y];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (bv = g),
    bv
  );
}
var _v, B3;
function YS() {
  if (B3) return _v;
  B3 = 1;
  var r = kS(),
    c = cd(),
    u = gy();
  function o() {
    ((this.size = 0),
      (this.__data__ = {
        hash: new r(),
        map: new (u || c)(),
        string: new r(),
      }));
  }
  return ((_v = o), _v);
}
var Sv, H3;
function FS() {
  if (H3) return Sv;
  H3 = 1;
  function r(c) {
    var u = typeof c;
    return u == 'string' || u == 'number' || u == 'symbol' || u == 'boolean'
      ? c !== '__proto__'
      : c === null;
  }
  return ((Sv = r), Sv);
}
var xv, U3;
function sd() {
  if (U3) return xv;
  U3 = 1;
  var r = FS();
  function c(u, o) {
    var d = u.__data__;
    return r(o) ? d[typeof o == 'string' ? 'string' : 'hash'] : d.map;
  }
  return ((xv = c), xv);
}
var Cv, N3;
function XS() {
  if (N3) return Cv;
  N3 = 1;
  var r = sd();
  function c(u) {
    var o = r(this, u).delete(u);
    return ((this.size -= o ? 1 : 0), o);
  }
  return ((Cv = c), Cv);
}
var Av, G3;
function KS() {
  if (G3) return Av;
  G3 = 1;
  var r = sd();
  function c(u) {
    return r(this, u).get(u);
  }
  return ((Av = c), Av);
}
var Rv, k3;
function $S() {
  if (k3) return Rv;
  k3 = 1;
  var r = sd();
  function c(u) {
    return r(this, u).has(u);
  }
  return ((Rv = c), Rv);
}
var Tv, Y3;
function ZS() {
  if (Y3) return Tv;
  Y3 = 1;
  var r = sd();
  function c(u, o) {
    var d = r(this, u),
      g = d.size;
    return (d.set(u, o), (this.size += d.size == g ? 0 : 1), this);
  }
  return ((Tv = c), Tv);
}
var Ev, F3;
function K8() {
  if (F3) return Ev;
  F3 = 1;
  var r = YS(),
    c = XS(),
    u = KS(),
    o = $S(),
    d = ZS();
  function g(v) {
    var y = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++y < _; ) {
      var S = v[y];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (Ev = g),
    Ev
  );
}
var wv, X3;
function QS() {
  if (X3) return wv;
  X3 = 1;
  var r = cd(),
    c = gy(),
    u = K8(),
    o = 200;
  function d(g, v) {
    var y = this.__data__;
    if (y instanceof r) {
      var _ = y.__data__;
      if (!c || _.length < o - 1)
        return (_.push([g, v]), (this.size = ++y.size), this);
      y = this.__data__ = new u(_);
    }
    return (y.set(g, v), (this.size = y.size), this);
  }
  return ((wv = d), wv);
}
var Ov, K3;
function VS() {
  if (K3) return Ov;
  K3 = 1;
  var r = cd(),
    c = TS(),
    u = ES(),
    o = wS(),
    d = OS(),
    g = QS();
  function v(y) {
    var _ = (this.__data__ = new r(y));
    this.size = _.size;
  }
  return (
    (v.prototype.clear = c),
    (v.prototype.delete = u),
    (v.prototype.get = o),
    (v.prototype.has = d),
    (v.prototype.set = g),
    (Ov = v),
    Ov
  );
}
var Mv, $3;
function IS() {
  if ($3) return Mv;
  $3 = 1;
  var r = '__lodash_hash_undefined__';
  function c(u) {
    return (this.__data__.set(u, r), this);
  }
  return ((Mv = c), Mv);
}
var zv, Z3;
function JS() {
  if (Z3) return zv;
  Z3 = 1;
  function r(c) {
    return this.__data__.has(c);
  }
  return ((zv = r), zv);
}
var jv, Q3;
function WS() {
  if (Q3) return jv;
  Q3 = 1;
  var r = K8(),
    c = IS(),
    u = JS();
  function o(d) {
    var g = -1,
      v = d == null ? 0 : d.length;
    for (this.__data__ = new r(); ++g < v; ) this.add(d[g]);
  }
  return (
    (o.prototype.add = o.prototype.push = c),
    (o.prototype.has = u),
    (jv = o),
    jv
  );
}
var Dv, V3;
function PS() {
  if (V3) return Dv;
  V3 = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length; ++o < d; )
      if (u(c[o], o, c)) return !0;
    return !1;
  }
  return ((Dv = r), Dv);
}
var qv, I3;
function e6() {
  if (I3) return qv;
  I3 = 1;
  function r(c, u) {
    return c.has(u);
  }
  return ((qv = r), qv);
}
var Lv, J3;
function $8() {
  if (J3) return Lv;
  J3 = 1;
  var r = WS(),
    c = PS(),
    u = e6(),
    o = 1,
    d = 2;
  function g(v, y, _, S, E, T) {
    var q = _ & o,
      B = v.length,
      N = y.length;
    if (B != N && !(q && N > B)) return !1;
    var X = T.get(v),
      Q = T.get(y);
    if (X && Q) return X == y && Q == v;
    var I = -1,
      $ = !0,
      ue = _ & d ? new r() : void 0;
    for (T.set(v, y), T.set(y, v); ++I < B; ) {
      var V = v[I],
        fe = y[I];
      if (S) var W = q ? S(fe, V, I, y, v, T) : S(V, fe, I, v, y, T);
      if (W !== void 0) {
        if (W) continue;
        $ = !1;
        break;
      }
      if (ue) {
        if (
          !c(y, function (k, pe) {
            if (!u(ue, pe) && (V === k || E(V, k, _, S, T))) return ue.push(pe);
          })
        ) {
          $ = !1;
          break;
        }
      } else if (!(V === fe || E(V, fe, _, S, T))) {
        $ = !1;
        break;
      }
    }
    return (T.delete(v), T.delete(y), $);
  }
  return ((Lv = g), Lv);
}
var Bv, W3;
function t6() {
  if (W3) return Bv;
  W3 = 1;
  var r = jl(),
    c = r.Uint8Array;
  return ((Bv = c), Bv);
}
var Hv, P3;
function n6() {
  if (P3) return Hv;
  P3 = 1;
  function r(c) {
    var u = -1,
      o = Array(c.size);
    return (
      c.forEach(function (d, g) {
        o[++u] = [g, d];
      }),
      o
    );
  }
  return ((Hv = r), Hv);
}
var Uv, eb;
function a6() {
  if (eb) return Uv;
  eb = 1;
  function r(c) {
    var u = -1,
      o = Array(c.size);
    return (
      c.forEach(function (d) {
        o[++u] = d;
      }),
      o
    );
  }
  return ((Uv = r), Uv);
}
var Nv, tb;
function r6() {
  if (tb) return Nv;
  tb = 1;
  var r = dy(),
    c = t6(),
    u = G8(),
    o = $8(),
    d = n6(),
    g = a6(),
    v = 1,
    y = 2,
    _ = '[object Boolean]',
    S = '[object Date]',
    E = '[object Error]',
    T = '[object Map]',
    q = '[object Number]',
    B = '[object RegExp]',
    N = '[object Set]',
    X = '[object String]',
    Q = '[object Symbol]',
    I = '[object ArrayBuffer]',
    $ = '[object DataView]',
    ue = r ? r.prototype : void 0,
    V = ue ? ue.valueOf : void 0;
  function fe(W, k, pe, Se, Ce, oe, Ue) {
    switch (pe) {
      case $:
        if (W.byteLength != k.byteLength || W.byteOffset != k.byteOffset)
          return !1;
        ((W = W.buffer), (k = k.buffer));
      case I:
        return !(W.byteLength != k.byteLength || !oe(new c(W), new c(k)));
      case _:
      case S:
      case q:
        return u(+W, +k);
      case E:
        return W.name == k.name && W.message == k.message;
      case B:
      case X:
        return W == k + '';
      case T:
        var Ae = d;
      case N:
        var ut = Se & v;
        if ((Ae || (Ae = g), W.size != k.size && !ut)) return !1;
        var ct = Ue.get(W);
        if (ct) return ct == k;
        ((Se |= y), Ue.set(W, k));
        var J = o(Ae(W), Ae(k), Se, Ce, oe, Ue);
        return (Ue.delete(W), J);
      case Q:
        if (V) return V.call(W) == V.call(k);
    }
    return !1;
  }
  return ((Nv = fe), Nv);
}
var Gv, nb;
function l6() {
  if (nb) return Gv;
  nb = 1;
  function r(c, u) {
    for (var o = -1, d = u.length, g = c.length; ++o < d; ) c[g + o] = u[o];
    return c;
  }
  return ((Gv = r), Gv);
}
var kv, ab;
function vy() {
  if (ab) return kv;
  ab = 1;
  var r = Array.isArray;
  return ((kv = r), kv);
}
var Yv, rb;
function i6() {
  if (rb) return Yv;
  rb = 1;
  var r = l6(),
    c = vy();
  function u(o, d, g) {
    var v = d(o);
    return c(o) ? v : r(v, g(o));
  }
  return ((Yv = u), Yv);
}
var Fv, lb;
function u6() {
  if (lb) return Fv;
  lb = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length, g = 0, v = []; ++o < d; ) {
      var y = c[o];
      u(y, o, c) && (v[g++] = y);
    }
    return v;
  }
  return ((Fv = r), Fv);
}
var Xv, ib;
function c6() {
  if (ib) return Xv;
  ib = 1;
  function r() {
    return [];
  }
  return ((Xv = r), Xv);
}
var Kv, ub;
function f6() {
  if (ub) return Kv;
  ub = 1;
  var r = u6(),
    c = c6(),
    u = Object.prototype,
    o = u.propertyIsEnumerable,
    d = Object.getOwnPropertySymbols,
    g = d
      ? function (v) {
          return v == null
            ? []
            : ((v = Object(v)),
              r(d(v), function (y) {
                return o.call(v, y);
              }));
        }
      : c;
  return ((Kv = g), Kv);
}
var $v, cb;
function o6() {
  if (cb) return $v;
  cb = 1;
  function r(c, u) {
    for (var o = -1, d = Array(c); ++o < c; ) d[o] = u(o);
    return d;
  }
  return (($v = r), $v);
}
var Zv, fb;
function hd() {
  if (fb) return Zv;
  fb = 1;
  function r(c) {
    return c != null && typeof c == 'object';
  }
  return ((Zv = r), Zv);
}
var Qv, ob;
function s6() {
  if (ob) return Qv;
  ob = 1;
  var r = fd(),
    c = hd(),
    u = '[object Arguments]';
  function o(d) {
    return c(d) && r(d) == u;
  }
  return ((Qv = o), Qv);
}
var Vv, sb;
function h6() {
  if (sb) return Vv;
  sb = 1;
  var r = s6(),
    c = hd(),
    u = Object.prototype,
    o = u.hasOwnProperty,
    d = u.propertyIsEnumerable,
    g = r(
      (function () {
        return arguments;
      })(),
    )
      ? r
      : function (v) {
          return c(v) && o.call(v, 'callee') && !d.call(v, 'callee');
        };
  return ((Vv = g), Vv);
}
var P1 = { exports: {} },
  Iv,
  hb;
function d6() {
  if (hb) return Iv;
  hb = 1;
  function r() {
    return !1;
  }
  return ((Iv = r), Iv);
}
P1.exports;
var db;
function Z8() {
  return (
    db ||
      ((db = 1),
      (function (r, c) {
        var u = jl(),
          o = d6(),
          d = c && !c.nodeType && c,
          g = d && !0 && r && !r.nodeType && r,
          v = g && g.exports === d,
          y = v ? u.Buffer : void 0,
          _ = y ? y.isBuffer : void 0,
          S = _ || o;
        r.exports = S;
      })(P1, P1.exports)),
    P1.exports
  );
}
var Jv, gb;
function g6() {
  if (gb) return Jv;
  gb = 1;
  var r = 9007199254740991,
    c = /^(?:0|[1-9]\d*)$/;
  function u(o, d) {
    var g = typeof o;
    return (
      (d = d ?? r),
      !!d &&
        (g == 'number' || (g != 'symbol' && c.test(o))) &&
        o > -1 &&
        o % 1 == 0 &&
        o < d
    );
  }
  return ((Jv = u), Jv);
}
var Wv, vb;
function Q8() {
  if (vb) return Wv;
  vb = 1;
  var r = 9007199254740991;
  function c(u) {
    return typeof u == 'number' && u > -1 && u % 1 == 0 && u <= r;
  }
  return ((Wv = c), Wv);
}
var Pv, pb;
function v6() {
  if (pb) return Pv;
  pb = 1;
  var r = fd(),
    c = Q8(),
    u = hd(),
    o = '[object Arguments]',
    d = '[object Array]',
    g = '[object Boolean]',
    v = '[object Date]',
    y = '[object Error]',
    _ = '[object Function]',
    S = '[object Map]',
    E = '[object Number]',
    T = '[object Object]',
    q = '[object RegExp]',
    B = '[object Set]',
    N = '[object String]',
    X = '[object WeakMap]',
    Q = '[object ArrayBuffer]',
    I = '[object DataView]',
    $ = '[object Float32Array]',
    ue = '[object Float64Array]',
    V = '[object Int8Array]',
    fe = '[object Int16Array]',
    W = '[object Int32Array]',
    k = '[object Uint8Array]',
    pe = '[object Uint8ClampedArray]',
    Se = '[object Uint16Array]',
    Ce = '[object Uint32Array]',
    oe = {};
  ((oe[$] =
    oe[ue] =
    oe[V] =
    oe[fe] =
    oe[W] =
    oe[k] =
    oe[pe] =
    oe[Se] =
    oe[Ce] =
      !0),
    (oe[o] =
      oe[d] =
      oe[Q] =
      oe[g] =
      oe[I] =
      oe[v] =
      oe[y] =
      oe[_] =
      oe[S] =
      oe[E] =
      oe[T] =
      oe[q] =
      oe[B] =
      oe[N] =
      oe[X] =
        !1));
  function Ue(Ae) {
    return u(Ae) && c(Ae.length) && !!oe[r(Ae)];
  }
  return ((Pv = Ue), Pv);
}
var e2, mb;
function p6() {
  if (mb) return e2;
  mb = 1;
  function r(c) {
    return function (u) {
      return c(u);
    };
  }
  return ((e2 = r), e2);
}
var ed = { exports: {} };
ed.exports;
var yb;
function m6() {
  return (
    yb ||
      ((yb = 1),
      (function (r, c) {
        var u = k8(),
          o = c && !c.nodeType && c,
          d = o && !0 && r && !r.nodeType && r,
          g = d && d.exports === o,
          v = g && u.process,
          y = (function () {
            try {
              var _ = d && d.require && d.require('util').types;
              return _ || (v && v.binding && v.binding('util'));
            } catch {}
          })();
        r.exports = y;
      })(ed, ed.exports)),
    ed.exports
  );
}
var t2, bb;
function V8() {
  if (bb) return t2;
  bb = 1;
  var r = v6(),
    c = p6(),
    u = m6(),
    o = u && u.isTypedArray,
    d = o ? c(o) : r;
  return ((t2 = d), t2);
}
var n2, _b;
function y6() {
  if (_b) return n2;
  _b = 1;
  var r = o6(),
    c = h6(),
    u = vy(),
    o = Z8(),
    d = g6(),
    g = V8(),
    v = Object.prototype,
    y = v.hasOwnProperty;
  function _(S, E) {
    var T = u(S),
      q = !T && c(S),
      B = !T && !q && o(S),
      N = !T && !q && !B && g(S),
      X = T || q || B || N,
      Q = X ? r(S.length, String) : [],
      I = Q.length;
    for (var $ in S)
      (E || y.call(S, $)) &&
        !(
          X &&
          ($ == 'length' ||
            (B && ($ == 'offset' || $ == 'parent')) ||
            (N && ($ == 'buffer' || $ == 'byteLength' || $ == 'byteOffset')) ||
            d($, I))
        ) &&
        Q.push($);
    return Q;
  }
  return ((n2 = _), n2);
}
var a2, Sb;
function b6() {
  if (Sb) return a2;
  Sb = 1;
  var r = Object.prototype;
  function c(u) {
    var o = u && u.constructor,
      d = (typeof o == 'function' && o.prototype) || r;
    return u === d;
  }
  return ((a2 = c), a2);
}
var r2, xb;
function _6() {
  if (xb) return r2;
  xb = 1;
  function r(c, u) {
    return function (o) {
      return c(u(o));
    };
  }
  return ((r2 = r), r2);
}
var l2, Cb;
function S6() {
  if (Cb) return l2;
  Cb = 1;
  var r = _6(),
    c = r(Object.keys, Object);
  return ((l2 = c), l2);
}
var i2, Ab;
function x6() {
  if (Ab) return i2;
  Ab = 1;
  var r = b6(),
    c = S6(),
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g) {
    if (!r(g)) return c(g);
    var v = [];
    for (var y in Object(g)) o.call(g, y) && y != 'constructor' && v.push(y);
    return v;
  }
  return ((i2 = d), i2);
}
var u2, Rb;
function C6() {
  if (Rb) return u2;
  Rb = 1;
  var r = F8(),
    c = Q8();
  function u(o) {
    return o != null && c(o.length) && !r(o);
  }
  return ((u2 = u), u2);
}
var c2, Tb;
function A6() {
  if (Tb) return c2;
  Tb = 1;
  var r = y6(),
    c = x6(),
    u = C6();
  function o(d) {
    return u(d) ? r(d) : c(d);
  }
  return ((c2 = o), c2);
}
var f2, Eb;
function R6() {
  if (Eb) return f2;
  Eb = 1;
  var r = i6(),
    c = f6(),
    u = A6();
  function o(d) {
    return r(d, u, c);
  }
  return ((f2 = o), f2);
}
var o2, wb;
function T6() {
  if (wb) return o2;
  wb = 1;
  var r = R6(),
    c = 1,
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g, v, y, _, S, E) {
    var T = y & c,
      q = r(g),
      B = q.length,
      N = r(v),
      X = N.length;
    if (B != X && !T) return !1;
    for (var Q = B; Q--; ) {
      var I = q[Q];
      if (!(T ? I in v : o.call(v, I))) return !1;
    }
    var $ = E.get(g),
      ue = E.get(v);
    if ($ && ue) return $ == v && ue == g;
    var V = !0;
    (E.set(g, v), E.set(v, g));
    for (var fe = T; ++Q < B; ) {
      I = q[Q];
      var W = g[I],
        k = v[I];
      if (_) var pe = T ? _(k, W, I, v, g, E) : _(W, k, I, g, v, E);
      if (!(pe === void 0 ? W === k || S(W, k, y, _, E) : pe)) {
        V = !1;
        break;
      }
      fe || (fe = I == 'constructor');
    }
    if (V && !fe) {
      var Se = g.constructor,
        Ce = v.constructor;
      Se != Ce &&
        'constructor' in g &&
        'constructor' in v &&
        !(
          typeof Se == 'function' &&
          Se instanceof Se &&
          typeof Ce == 'function' &&
          Ce instanceof Ce
        ) &&
        (V = !1);
    }
    return (E.delete(g), E.delete(v), V);
  }
  return ((o2 = d), o2);
}
var s2, Ob;
function E6() {
  if (Ob) return s2;
  Ob = 1;
  var r = eo(),
    c = jl(),
    u = r(c, 'DataView');
  return ((s2 = u), s2);
}
var h2, Mb;
function w6() {
  if (Mb) return h2;
  Mb = 1;
  var r = eo(),
    c = jl(),
    u = r(c, 'Promise');
  return ((h2 = u), h2);
}
var d2, zb;
function O6() {
  if (zb) return d2;
  zb = 1;
  var r = eo(),
    c = jl(),
    u = r(c, 'Set');
  return ((d2 = u), d2);
}
var g2, jb;
function M6() {
  if (jb) return g2;
  jb = 1;
  var r = eo(),
    c = jl(),
    u = r(c, 'WeakMap');
  return ((g2 = u), g2);
}
var v2, Db;
function z6() {
  if (Db) return v2;
  Db = 1;
  var r = E6(),
    c = gy(),
    u = w6(),
    o = O6(),
    d = M6(),
    g = fd(),
    v = X8(),
    y = '[object Map]',
    _ = '[object Object]',
    S = '[object Promise]',
    E = '[object Set]',
    T = '[object WeakMap]',
    q = '[object DataView]',
    B = v(r),
    N = v(c),
    X = v(u),
    Q = v(o),
    I = v(d),
    $ = g;
  return (
    ((r && $(new r(new ArrayBuffer(1))) != q) ||
      (c && $(new c()) != y) ||
      (u && $(u.resolve()) != S) ||
      (o && $(new o()) != E) ||
      (d && $(new d()) != T)) &&
      ($ = function (ue) {
        var V = g(ue),
          fe = V == _ ? ue.constructor : void 0,
          W = fe ? v(fe) : '';
        if (W)
          switch (W) {
            case B:
              return q;
            case N:
              return y;
            case X:
              return S;
            case Q:
              return E;
            case I:
              return T;
          }
        return V;
      }),
    (v2 = $),
    v2
  );
}
var p2, qb;
function j6() {
  if (qb) return p2;
  qb = 1;
  var r = VS(),
    c = $8(),
    u = r6(),
    o = T6(),
    d = z6(),
    g = vy(),
    v = Z8(),
    y = V8(),
    _ = 1,
    S = '[object Arguments]',
    E = '[object Array]',
    T = '[object Object]',
    q = Object.prototype,
    B = q.hasOwnProperty;
  function N(X, Q, I, $, ue, V) {
    var fe = g(X),
      W = g(Q),
      k = fe ? E : d(X),
      pe = W ? E : d(Q);
    ((k = k == S ? T : k), (pe = pe == S ? T : pe));
    var Se = k == T,
      Ce = pe == T,
      oe = k == pe;
    if (oe && v(X)) {
      if (!v(Q)) return !1;
      ((fe = !0), (Se = !1));
    }
    if (oe && !Se)
      return (
        V || (V = new r()),
        fe || y(X) ? c(X, Q, I, $, ue, V) : u(X, Q, k, I, $, ue, V)
      );
    if (!(I & _)) {
      var Ue = Se && B.call(X, '__wrapped__'),
        Ae = Ce && B.call(Q, '__wrapped__');
      if (Ue || Ae) {
        var ut = Ue ? X.value() : X,
          ct = Ae ? Q.value() : Q;
        return (V || (V = new r()), ue(ut, ct, I, $, V));
      }
    }
    return oe ? (V || (V = new r()), o(X, Q, I, $, ue, V)) : !1;
  }
  return ((p2 = N), p2);
}
var m2, Lb;
function D6() {
  if (Lb) return m2;
  Lb = 1;
  var r = j6(),
    c = hd();
  function u(o, d, g, v, y) {
    return o === d
      ? !0
      : o == null || d == null || (!c(o) && !c(d))
        ? o !== o && d !== d
        : r(o, d, g, v, u, y);
  }
  return ((m2 = u), m2);
}
var y2, Bb;
function q6() {
  if (Bb) return y2;
  Bb = 1;
  var r = D6();
  function c(u, o) {
    return r(u, o);
  }
  return ((y2 = c), y2);
}
var L6 = q6();
const Li = yS(L6),
  B6 = (r) => {
    const [c, u] = D.useState(r.theme || {}),
      o = D.useCallback((v) => {
        u((y) => (Li(y, v) ? y : v));
      }, []),
      d = D.useCallback(
        (v) => {
          const y = r.patterns.filter((E) =>
              typeof E.applyOn == 'function'
                ? E.applyOn(v, c)
                : E.applyOn === v.as || E.applyOn === 'all',
            ),
            _ = y.reduce(
              (E, T) => ({
                ...E,
                ...(typeof T.defaults == 'function'
                  ? T.defaults(c)
                  : T.defaults || {}),
              }),
              {},
            ),
            S = y.reduce(
              (E, T) => ({
                ...E,
                ...(typeof T.style == 'function' ? T.style(c) : T.style),
              }),
              {},
            );
          return {
            className: `${v.kind}-${v.id}-context`,
            defaults: _,
            style: S,
          };
        },
        [r.patterns, c],
      ),
      g = D.useMemo(
        () => ({ theme: c, updateTheme: o, getContext: d }),
        [c, d, o],
      );
    return Jf.jsx(N8.Provider, { value: g, children: r.children });
  },
  H6 = D.memo(B6, Li),
  U6 = (r) => {
    const { theme: c } = Wr(),
      u = D.useMemo(() => new hy(), []);
    return (
      D.useInsertionEffect(
        () => (
          u.apply(
            Array.isArray(r.value)
              ? r.value.reduce(
                  (o, d) => ({
                    ...o,
                    ...(typeof d == 'function' ? d(c).animation : d.animation),
                  }),
                  {},
                )
              : typeof r.value == 'function'
                ? r.value(c).animation
                : r.value.animation,
          ),
          () => {
            u.delete();
          }
        ),
        [r.value, c],
      ),
      {}
    );
  },
  N6 = (r) => (U6(r), r.children);
D.memo(N6, Li);
const G6 = (...r) => r.join(' ').trim(),
  I8 = (r, ...c) => {
    const u = { ...r };
    for (const o of c)
      for (const d in o) {
        const g = o[d],
          v = u[d];
        typeof v == 'object' &&
        Array.isArray(v) === !1 &&
        typeof g == 'object' &&
        Array.isArray(g) === !1
          ? (u[d] = { ...v, ...g })
          : v === void 0 && (u[d] = g);
      }
    return u;
  },
  k6 = [
    'as',
    'kind',
    'aria',
    'withStyle',
    'direction',
    'alignContent',
    'justifyContent',
    'justifyItems',
    'alignItems',
    'display',
    'contentColumns',
    'contentRows',
    'atColumn',
    'atRow',
    'fontSize',
    'flex',
    'gap',
    'textColor',
    'backgroundColor',
    'background',
    'margin',
    'padding',
    'containerType',
    'containerName',
    'position',
    'cursor',
    'all',
    'transform',
    'top',
    'left',
    'bottom',
    'right',
    'fontWeight',
    'textTransform',
    'textDecoration',
    'justifySelf',
    'alignSelf',
    'touchAction',
  ],
  Y6 = (r, c) => [
    { enabled: r.flex !== void 0, name: 'flex', value: r.flex },
    {
      enabled: r.contentColumns !== void 0,
      name: 'gridTemplateColumns',
      value:
        typeof r.contentColumns == 'number'
          ? `repeat(${r.contentColumns}, 1fr)`
          : r.contentColumns,
    },
    {
      enabled: r.contentRows !== void 0,
      name: 'gridTemplateRows',
      value:
        typeof r.contentRows == 'number'
          ? `repeat(${r.contentRows}, 1fr)`
          : r.contentRows,
    },
    {
      enabled: r.atColumn !== void 0,
      name: 'gridColumn',
      value:
        typeof r.atColumn == 'number'
          ? `${r.atColumn} / ${r.atColumn + 1}`
          : r.atColumn,
    },
    {
      enabled: r.atRow !== void 0,
      name: 'gridRow',
      value:
        typeof r.atRow == 'number' ? `${r.atRow} / ${r.atRow + 1}` : r.atRow,
    },
    { enabled: r.height !== void 0, name: 'height', value: r.height },
    { enabled: r.width !== void 0, name: 'width', value: r.width },
    { enabled: r.display !== void 0, name: 'display', value: r.display },
    {
      enabled: r.direction !== void 0,
      name: 'flexDirection',
      value: r.direction,
    },
    {
      enabled: r.alignContent !== void 0,
      name: 'alignContent',
      value: r.alignContent,
    },
    {
      enabled: r.justifyContent !== void 0,
      name: 'justifyContent',
      value: r.justifyContent,
    },
    {
      enabled: r.alignItems !== void 0,
      name: 'alignItems',
      value: r.alignItems,
    },
    {
      enabled: r.justifyItems !== void 0,
      name: 'justifyItems',
      value: r.justifyItems,
    },
    {
      enabled: r.fontSize !== void 0,
      name: 'fontSize',
      value: typeof r.fontSize == 'function' ? r.fontSize(c) : r.fontSize,
    },
    { enabled: r.gap !== void 0, name: 'gap', value: r.gap },
    {
      enabled: r.textColor !== void 0,
      name: 'color',
      value: typeof r.textColor == 'function' ? r.textColor(c) : r.textColor,
    },
    {
      enabled: r.background !== void 0,
      name: 'background',
      value: typeof r.background == 'function' ? r.background(c) : r.background,
    },
    {
      enabled: r.backgroundColor !== void 0,
      name: 'backgroundColor',
      value:
        typeof r.backgroundColor == 'function'
          ? r.backgroundColor(c)
          : r.backgroundColor,
    },
    {
      enabled: r.margin !== void 0,
      name: 'margin',
      value: typeof r.margin == 'function' ? r.margin(c) : r.margin,
    },
    {
      enabled: r.padding !== void 0,
      name: 'padding',
      value: typeof r.padding == 'function' ? r.padding(c) : r.padding,
    },
    { enabled: r.cursor !== void 0, name: 'cursor', value: r.cursor },
    {
      enabled: r.containerType !== void 0,
      name: 'containerType',
      value: r.containerType,
    },
    {
      enabled: r.containerName !== void 0,
      name: 'containerName',
      value: r.containerName,
    },
    { enabled: r.all !== void 0, name: 'all', value: r.all },
    { enabled: r.position !== void 0, name: 'position', value: r.position },
    { enabled: r.transform !== void 0, name: 'transform', value: r.transform },
    { enabled: r.top !== void 0, name: 'top', value: r.top },
    { enabled: r.bottom !== void 0, name: 'bottom', value: r.bottom },
    { enabled: r.left !== void 0, name: 'left', value: r.left },
    { enabled: r.right !== void 0, name: 'right', value: r.right },
    {
      enabled: r.fontWeight !== void 0,
      name: 'fontWeight',
      value: r.fontWeight,
    },
    {
      enabled: r.textTransform !== void 0,
      name: 'textTransform',
      value: r.textTransform,
    },
    {
      enabled: r.textDecoration !== void 0,
      name: 'textDecoration',
      value: r.textDecoration,
    },
    {
      enabled: r.justifySelf !== void 0,
      name: 'justifySelf',
      value: r.justifySelf,
    },
    { enabled: r.alignSelf !== void 0, name: 'alignSelf', value: r.alignSelf },
    {
      enabled: r.touchAction !== void 0,
      name: 'touchAction',
      value: r.touchAction,
    },
  ],
  td = {
    pickComponentProps: (r) => {
      const c = { ...r };
      for (const u of k6) delete c[u];
      return { ...c, ...r.aria };
    },
    pickComponentStyle: (r, c) => {
      if (c)
        return typeof c == 'function'
          ? td.pickComponentStyle(r, c(r))
          : Array.isArray(c)
            ? c.reduce(
                (u, o) => ({ ...u, ...(typeof o == 'function' ? o(r) : o) }),
                {},
              )
            : c;
    },
    loadPositionProps: (r, c, u) => {
      const o = Y6(r, u),
        d = o.some((v) => v.enabled),
        g = o.reduce(
          (v, y) => ({ ...v, ...(y.enabled ? { [y.name]: y.value } : {}) }),
          {},
        );
      return !c && d === !1 ? void 0 : { ...c, ...g };
    },
  },
  py = (r) => {
    const { getContext: c, theme: u } = Wr(),
      o = D.useMemo(() => new hy(), []),
      d = D.useId(),
      g = D.useMemo(() => r.kind || 'piece', [r.kind]),
      v = D.useMemo(() => r.id || d, [r.id, d]),
      y = D.useMemo(() => `${g}-${v}`, [g, v]),
      _ = D.useMemo(
        () => ({ ...r, kind: g, id: v, className: G6(r.className, y) }),
        [r, g, v, y],
      ),
      S = D.useMemo(() => c(_), [c, _]),
      E = D.useMemo(
        () => td.loadPositionProps(_, td.pickComponentStyle(u, _.withStyle), u),
        [_, u],
      ),
      T = D.useMemo(
        () => I8({ className: `${_.className} ${S.className}` }, S.defaults, _),
        [S.defaults, S.className, _],
      ),
      q = D.useMemo(() => td.pickComponentProps(T), [T]),
      B = T.as || 'div';
    return (
      D.useInsertionEffect(
        function () {
          return (
            S.style && o.apply(S.style, S.className),
            E && o.apply(E, y),
            () => {
              o.delete();
            }
          );
        },
        [o, S.style, S.className, E, y, E],
      ),
      { element: Jf.jsx(B, { ...q }) }
    );
  };
function F6(r) {
  return py(r).element;
}
const be = D.memo(F6, Li),
  Hb = (r, c, u, o, d, g, v, y) => ({
    scrollBehavior: c,
    overflowX: d ? 'auto' : 'hidden',
    overflowY: g ? 'auto' : 'hidden',
    flexDirection: g ? 'column' : 'row',
    ...(v ? { scrollSnapType: v } : {}),
    minHeight: 0,
    boxSizing: 'content-box',
    transition: 'all 0.3s ease-in-out',
    display: 'flex',
    flex: '1 1 100%',
    scrollbarWidth: r,
    WebkitOverflowScrolling: 'touch',
    touchAction: y || (g ? 'pan-y' : 'pan-x'),
    scrollbarColor: `${o} ${u}`,
    [`@supports not (scrollbar-width: ${r})`]: {
      '&::-webkit-scrollbar': { width: '8px' },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: u,
        border: `1px solid ${u}`,
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: `inset 0 0 0 ${r}px ${o}`,
        backgroundColor: o,
      },
    },
  }),
  X6 = (r) => {
    const { theme: c, getContext: u } = Wr(),
      o = D.useRef(null),
      d = D.useMemo(() => u(r), [r, u]),
      {
        scrollSnap: g,
        primary: v,
        highlight: y,
        horizontal: _,
        vertical: S,
        behavior: E,
        withStyle: T,
        size: q,
        touchAction: B,
        ...N
      } = I8(r, d.defaults),
      X = D.useMemo(
        () =>
          Array.isArray(T)
            ? T.reduce(
                (Q, I) => ({ ...Q, ...(typeof I == 'function' ? I(c) : I) }),
                Hb(
                  q,
                  E,
                  typeof v == 'function' ? v(c) : v,
                  typeof y == 'function' ? y(c) : y,
                  _,
                  S,
                  g,
                  B,
                ),
              )
            : {
                ...(T !== void 0 && typeof T == 'function' ? T(c) : T),
                ...Hb(
                  q,
                  E,
                  typeof v == 'function' ? v(c) : v,
                  typeof y == 'function' ? y(c) : y,
                  _,
                  S,
                  g,
                  B,
                ),
              },
        [T, c, q, E, v, y, _, S, g, B],
      );
    return py({ ...N, ref: o, kind: r.kind || 'scrollable', withStyle: X });
  },
  K6 = (r) => X6(r).element,
  Vf = D.memo(K6, Li),
  $6 = (r) => {
    const { theme: c } = Wr(),
      { id: u, fontSize: o, fontFamily: d, containerId: g } = r,
      v = D.useMemo(() => new hy(), []),
      y = D.useId();
    return (
      D.useInsertionEffect(
        () => (
          v.apply({
            'html,body': {
              margin: 0,
              padding: 0,
              border: 0,
              fontSize: o,
              fontWeight: 400,
              fontStyle: 'normal',
              fontFamily: d,
              fontOpticalSizing: 'auto',
              overflow: r.overflow ? 'auto' : 'hidden',
            },
            [`html,body,#${g}`]: { height: '100dvh', width: '100dvw' },
            '*::before, *::after': { boxSizing: 'border-box' },
            ...(Array.isArray(r.globalStyle)
              ? r.globalStyle.reduce(
                  (_, S) => ({ ..._, ...(typeof S == 'function' ? S(c) : S) }),
                  {},
                )
              : typeof r.globalStyle == 'function'
                ? r.globalStyle(c)
                : r.globalStyle),
          }),
          () => {
            v.delete();
          }
        ),
        [v, c],
      ),
      { id: u || y }
    );
  },
  Z6 = (r) => {
    const { id: c } = $6(r);
    return Jf.jsx(be, {
      id: c,
      as: 'main',
      kind: 'screen',
      children: r.children,
    });
  },
  Q6 = D.memo(Z6, Li),
  V6 = (r, c) =>
    Object.entries(r).reduce(
      (u, [o, d]) =>
        c.includes(o)
          ? { ...u, known: { ...u.known, [o]: d } }
          : { ...u, unknown: { ...u.unknown, [o]: d } },
      { known: {}, unknown: {} },
    ),
  I6 = ({
    keyframes: r,
    withStyle: c,
    animateAs: u,
    query: o,
    removeFromHtml: d,
    onActivate: g,
  }) => {
    const [v, y] = D.useState(!1),
      { theme: _ } = Wr(),
      S = D.useMemo(
        () => ({
          ...(r == null ? void 0 : r.animation),
          ...(Array.isArray(c)
            ? c.reduce(
                (q, B) => ({ ...q, ...(typeof B == 'function' ? B(_) : B) }),
                {},
              )
            : typeof c == 'function'
              ? c(_)
              : c),
          animation: u,
          [`@media not ${typeof o == 'function' ? o(_) : o}`]: {
            display: 'none',
            pointerEvents: 'none',
          },
        }),
        [c, _, o, r, u],
      ),
      E = D.useCallback(
        (q) => {
          q.matches && g && (y((B) => !B), g());
        },
        [g],
      ),
      T =
        (window.matchMedia(`(${typeof o == 'function' ? o(_) : o})`).matches ===
          !1 &&
          d) ||
        !1;
    return (
      D.useEffect(
        function () {
          const q = window.matchMedia(`(${typeof o == 'function' ? o(_) : o})`);
          return (
            q.addEventListener('change', E),
            () => {
              q.removeEventListener('change', E);
            }
          );
        },
        [E, _, o],
      ),
      { style: S, shouldRemoveComponent: T }
    );
  },
  J6 = (r) => {
    const { style: c, shouldRemoveComponent: u } = I6(r);
    return Jf.jsx(be, {
      kind: 'media',
      as: 'section',
      withStyle: c,
      children: u === !1 ? r.children : null,
    });
  },
  J8 = D.memo(J6, Li),
  W6 = (r) => {
    const { as: c, children: u, kind: o, ...d } = r;
    return py({ ...d, kind: o || 'text', as: c, children: u });
  };
function A0(r, c = {}) {
  return function (u) {
    const o = [
        'containerRef',
        'direction',
        'alignContent',
        'justifyContent',
        'alignItems',
        'justifytItems',
        'display',
        'contentColumns',
        'contentRows',
        'atColumn',
        'atRow',
        'flex',
        'height',
        'width',
        'margin',
        'padding',
        'cursor',
        'withStyle',
      ],
      { known: d, unknown: g } = V6(u, o),
      { injectContainerProps: v, ...y } = c,
      _ = { ...y, ...d };
    return Jf.jsx(be, {
      kind: 'aligment-container',
      display: 'flex',
      flex: _.flex || '1 1 auto',
      ..._,
      children: Jf.jsx(r, {
        ...g,
        ...(v ? y : {}),
        children: g == null ? void 0 : g.children,
      }),
    });
  };
}
const P6 = (r) => W6(r).element,
  my = D.memo(A0(P6, { withStyle: { display: 'flex', flex: '1 1 auto' } }), Li),
  e9 = {
    applyOn: (r) => r.kind === 'contents',
    style: {
      display: 'contents',
      background: 'transparent',
      position: 'relative',
    },
  },
  t9 = {
    applyOn: (r) => r.kind === 'input',
    style: {
      flex: '1 0 auto',
      width: '100%',
      height: '100%',
      display: 'flex',
      fontSize: '1rem',
      boxShadow: 'none',
      outline: 'none',
      border: '1px solid transparent',
      padding: '10px 0',
      paddingLeft: '10px',
      borderRadius: '5px',
      appearance: 'none',
      '&::-webkit-outer-spin-button': { margin: 0, appearance: 'none' },
      '&::-webkit-inner-spin-button': { margin: 0, appearance: 'none' },
    },
  },
  n9 = {
    applyOn: (r) => r.kind === 'media',
    style: { display: 'flex', flex: 1, userSelect: 'none' },
  },
  a9 = {
    applyOn: (r) => r.kind === 'piece',
    style: { display: 'flex', flex: '1 1 auto', userSelect: 'none' },
  },
  r9 = {
    applyOn: 'all',
    style: {
      margin: 0,
      padding: 0,
      border: 0,
      fontSize: '100%',
      fontWeight: '400',
      fontStyle: 'normal',
      boxSizing: 'border-box',
      fontOpticalSizing: 'auto',
      listStyle: 'none',
      quotes: 'none',
      userSelect: 'none',
      overflow: 'hidden',
    },
  },
  l9 = {
    applyOn: (r) => r.kind === 'screen',
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
      width: '100%',
      height: '100%',
      position: 'relative',
    },
  },
  i9 = {
    applyOn: (r) => r.kind === 'scrollable',
    defaults: {
      primary: 'var(--color)',
      highlight: 'var(--highlight)',
      size: 'thin',
      behavior: 'instant',
    },
    style: {
      '--color': 'rgb(220, 220, 220)',
      '--highlight': 'rgba(25, 25, 25, 0.1)',
    },
  },
  u9 = [r9, a9, l9, n9, t9, e9, i9],
  c9 = (r, ...c) => [...r, ...c],
  f9 = c9(
    u9,
    {
      applyOn: (r) => r.kind === 'scrollable',
      style: (r) => ({
        '--color': r.color.raw,
        '--highlight': r.highlight.raw,
      }),
    },
    { applyOn: 'all', style: { transition: 'all 0.3s linear' } },
  ),
  o9 = (r) => {
    const { theme: c } = Wr(),
      u = D.useMemo(
        () => ({
          color: r.color || c.color.raw,
          text: r.text || c.text.raw,
          highlight: r.highlight || c.highlight.raw,
        }),
        [r.color, r.text, c.color.raw, c.text.raw, c.highlight.raw],
      ),
      o = D.useMemo(
        () => ({
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flex: `0 0 ${r.noPadding ? r.size : (r.size || 0) + 10}px`,
          padding: r.noPadding ? void 0 : '10px',
          background: u.color,
          color: u.text,
          fontSize: `${Math.round(r.size * 0.7)}px`,
          borderRadius: r.round ? '50%' : void 0,
          aspectRatio: '1 / 1',
          outline: 'none',
          boxSizing: 'border-box',
          '&:hover': { background: u.highlight },
        }),
        [u],
      );
    return { current: u, theme: c, styles: o };
  },
  s9 = (r) => {
    const { styles: c } = o9(r);
    return R.jsx(be, {
      as: 'button',
      withStyle: c,
      onClick: r.onClick,
      children: r.children,
    });
  },
  jn = A0(s9, { flex: '0 0 auto' }),
  nd = (r) =>
    R.jsxs('svg', {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      role: 'img',
      'aria-label': 'Copy icon',
      children: [
        R.jsx('rect', {
          x: '8',
          y: '7',
          width: '10',
          height: '12',
          rx: '3',
          stroke: 'currentColor',
          strokeWidth: 1.8,
        }),
        R.jsx('rect', {
          x: '5',
          y: '4',
          width: '10',
          height: '12',
          rx: '3',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          opacity: '0.6',
        }),
      ],
    }),
  h9 = (r) =>
    R.jsxs('svg', {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      role: 'img',
      'aria-label': 'Export icon',
      children: [
        R.jsx('path', {
          d: 'M12 3v10',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
        }),
        R.jsx('path', {
          d: 'M8.5 6.5L12 3l3.5 3.5',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        R.jsx('rect', {
          x: '5',
          y: '13',
          width: '14',
          height: '8',
          rx: '2.5',
          stroke: 'currentColor',
          strokeWidth: 1.8,
        }),
      ],
    }),
  R0 = (r) =>
    R.jsx('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      width: '1em',
      height: '1em',
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      children: R.jsx('path', { d: 'M6 6 L18 18 M18 6 L6 18' }),
    }),
  W8 = (r) =>
    R.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      x: '0px',
      y: '0px',
      width: '1em',
      height: '1em',
      viewBox: '0 0 50 50',
      children: R.jsx('path', {
        fill: 'currentColor',
        d: 'M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z',
      }),
    }),
  yy = (r) =>
    R.jsx('svg', {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: R.jsx('path', {
        d: 'M14.5 5L8.5 12L14.5 19',
        stroke: 'currentColor',
        strokeWidth: '2.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }),
  d9 = (r) =>
    R.jsx('svg', {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: R.jsx('path', {
        d: 'M9.5 5L15.5 12L9.5 19',
        stroke: 'currentColor',
        strokeWidth: '2.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }),
  P8 = (r) =>
    R.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: R.jsx('polyline', { points: '6 9 12 15 18 9' }),
    }),
  g9 = (r) =>
    R.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: R.jsx('polyline', { points: '18 15 12 9 6 15' }),
    }),
  v9 = (r) =>
    R.jsx('svg', {
      xmlns: 'http://www.w3.org',
      viewBox: '0 0 24 24',
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      children: R.jsx('path', {
        d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      }),
    }),
  p9 = (r) =>
    R.jsxs('svg', {
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
      xmlnsXlink: 'http://www.w3.org/1999/xlink',
      x: '0px',
      y: '0px',
      viewBox: '0 0 480 480',
      width: '1em',
      height: '1em',
      enableBackground: 'new 0 0 480 480',
      xmlSpace: 'preserve',
      children: [
        R.jsxs('g', {
          children: [
            R.jsx('g', {
              children: R.jsx('circle', {
                fill: '#FFD100',
                cx: '240',
                cy: '240',
                r: '240',
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FF9500',
                d: `M240,480c66.274,0,126.274-26.863,169.706-70.294L70.294,70.294C26.863,113.726,0,173.726,0,240
			C0,372.548,107.452,480,240,480z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M240.102,228c-32.617,0-60.18-17.586-60.18-38.398c0-20.816,27.563-38.402,60.18-38.402
			c32.625,0,60.188,17.586,60.188,38.402c0,6.629,5.375,12,12,12s12-5.371,12-12c0-31.958-30.876-57.52-72.188-61.726V112
			c0-6.629-5.375-12-12-12s-12,5.371-12,12v15.876c-41.304,4.207-72.18,29.768-72.18,61.725c0,34.988,36.977,62.398,84.18,62.398
			c32.625,0,60.188,17.586,60.188,38.402c0,20.813-27.563,38.398-60.188,38.398c-32.617,0-60.18-17.586-60.18-38.398
			c0-6.629-5.375-12-12-12s-12,5.371-12,12c0,31.953,30.875,57.515,72.18,61.721V368c0,6.629,5.375,12,12,12s12-5.371,12-12v-15.876
			c41.311-4.206,72.188-29.768,72.188-61.722C324.289,255.41,287.313,228,240.102,228z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M232.156,408c0-4.402,3.602-8,8-8l0,0c4.398,0,8,3.598,8,8l0,0c0,4.398-3.602,8-8,8l0,0
			C235.758,416,232.156,412.398,232.156,408z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M215.117,414.238c-4.32-0.641-7.359-4.641-6.719-9.039l0,0c0.563-4.402,4.641-7.359,8.961-6.801
			h0.078c4.32,0.641,7.359,4.719,6.719,9.039l0,0c-0.555,4-4,6.883-7.836,6.883l0,0C215.922,414.32,215.516,414.32,215.117,414.238z
			`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M256.156,407.438c-0.641-4.398,2.398-8.398,6.805-9.039v-0.078c4.32-0.563,8.398,2.477,9.039,6.797
			l0,0c0.641,4.402-2.398,8.48-6.805,9.121l0,0c-0.398,0-0.719,0.082-1.117,0.082l0,0
			C260.156,414.32,256.719,411.438,256.156,407.438z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M190.641,408.957c-4.242-1.199-6.719-5.68-5.445-9.918l0,0c1.203-4.242,5.68-6.641,9.922-5.441l0,0
			c4.242,1.281,6.641,5.68,5.438,9.922l0,0c-1.039,3.52-4.234,5.758-7.758,5.758l0,0
			C192.078,409.277,191.359,409.199,190.641,408.957z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M279.758,403.438c-1.203-4.238,1.203-8.641,5.438-9.918l0,0c4.242-1.281,8.727,1.199,9.922,5.438
			l0,0c1.281,4.242-1.117,8.641-5.359,9.922l0,0c-0.797,0.238-1.516,0.32-2.32,0.32l0,0
			C284,409.199,280.797,406.957,279.758,403.438z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M167.039,400.238c-4-1.84-5.758-6.559-3.922-10.641l0,0c1.844-4,6.563-5.758,10.563-3.918l0,0
			c4,1.84,5.836,6.559,4,10.559l0,0c-1.359,2.961-4.242,4.719-7.281,4.719l0,0C169.281,400.957,168.156,400.719,167.039,400.238z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M302.641,396.16c-1.844-4-0.086-8.801,3.914-10.641l0,0c4-1.84,8.805-0.082,10.641,3.918l0,0
			c1.844,4.082,0.086,8.801-3.914,10.641l0,0c-1.125,0.48-2.242,0.719-3.359,0.719l0,0C306.875,400.797,304,399.039,302.641,396.16z
			`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M145.039,388.238c-3.758-2.398-4.797-7.359-2.398-11.121l0,0c2.32-3.68,7.281-4.797,11.039-2.398
			l0,0c3.68,2.398,4.797,7.359,2.398,11.039l0,0c-1.523,2.402-4.156,3.68-6.719,3.68l0,0
			C147.836,389.438,146.32,389.039,145.039,388.238z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M324.156,385.68c-2.398-3.762-1.281-8.723,2.398-11.121l0,0c3.688-2.398,8.641-1.359,11.047,2.398
			l0,0c2.398,3.68,1.359,8.641-2.32,11.043l0,0l0,0l0,0c-1.359,0.879-2.883,1.277-4.406,1.277l0,0
			C328.242,389.277,325.68,388,324.156,385.68z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M124.875,373.199c-3.273-2.961-3.68-8-0.797-11.281l0,0c2.883-3.359,8-3.758,11.281-0.879l0,0
			c3.359,2.879,3.758,8,0.797,11.281l0,0c-1.516,1.84-3.758,2.797-6,2.797l0,0C128.32,375.117,126.398,374.48,124.875,373.199z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M344,372.16c-2.883-3.363-2.484-8.402,0.797-11.281l0,0c3.359-2.879,8.398-2.559,11.281,0.801l0,0
			c2.883,3.359,2.563,8.398-0.797,11.277l0,0c-1.523,1.281-3.359,2-5.203,2l0,0C347.836,374.879,345.602,374,344,372.16z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M107.117,355.438c-2.875-3.359-2.477-8.398,0.805-11.277l0,0c3.359-2.883,8.398-2.563,11.273,0.797
			l0,0c2.961,3.363,2.563,8.402-0.719,11.281l0,0c-1.516,1.281-3.438,2-5.281,2l0,0
			C110.961,358.238,108.719,357.277,107.117,355.438z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M361.758,356c-3.359-2.883-3.68-7.922-0.797-11.281l0,0c2.875-3.359,7.914-3.68,11.281-0.801l0,0
			c3.359,2.879,3.68,7.922,0.797,11.281l0,0c-1.602,1.84-3.844,2.801-6.078,2.801l0,0C365.117,358,363.281,357.359,361.758,356z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M92.078,335.359c-2.398-3.68-1.359-8.641,2.398-11.039l0,0c3.68-2.402,8.641-1.281,11.039,2.398
			l0,0c2.406,3.68,1.281,8.641-2.398,11.039l0,0c-1.359,0.879-2.797,1.281-4.32,1.281l0,0
			C96.156,339.039,93.602,337.758,92.078,335.359z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M377.039,337.52c-3.68-2.402-4.797-7.359-2.398-11.039l0,0c2.398-3.762,7.359-4.801,11.039-2.402
			l0,0c3.758,2.402,4.797,7.359,2.398,11.039l0,0c-1.523,2.402-4.078,3.68-6.719,3.68l0,0
			C379.836,338.797,378.398,338.398,377.039,337.52z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M80,313.438c-1.844-4.078-0.078-8.801,3.922-10.641l0,0c4-1.84,8.797-0.078,10.633,3.922l0,0
			c1.844,4,0.086,8.801-3.914,10.641l0,0c-1.125,0.48-2.242,0.719-3.359,0.719l0,0C84.242,318.078,81.359,316.32,80,313.438z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M389.516,317.039c-4-1.84-5.758-6.559-3.914-10.559l0,0c1.836-4.082,6.555-5.844,10.555-4l0,0
			c4,1.84,5.844,6.637,4,10.637l0,0c-1.359,2.961-4.234,4.641-7.281,4.641l0,0C391.758,317.758,390.641,317.52,389.516,317.039z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M71.195,289.918c-1.273-4.238,1.125-8.719,5.359-9.918l0,0c4.242-1.281,8.727,1.117,9.922,5.359
			l0,0c1.281,4.238-1.117,8.719-5.359,9.918l0,0c-0.797,0.242-1.516,0.32-2.242,0.32l0,0
			C75.359,295.598,72.242,293.359,71.195,289.918z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M398.961,295.039c-4.242-1.281-6.641-5.762-5.445-10l0,0c1.281-4.242,5.766-6.641,10-5.441l0,0
			c4.242,1.281,6.641,5.68,5.445,9.922l0,0c-1.039,3.52-4.242,5.758-7.766,5.758l0,0
			C400.477,295.277,399.758,295.199,398.961,295.039z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M65.836,265.359c-0.641-4.32,2.406-8.402,6.719-9.039l0,0c4.406-0.641,8.484,2.398,9.125,6.797l0,0
			c0.641,4.32-2.398,8.402-6.805,9.043l0,0c-0.398,0.078-0.797,0.078-1.117,0.078l0,0C69.836,272.238,66.398,269.359,65.836,265.359
			z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M405.195,271.84c-4.398-0.641-7.438-4.723-6.797-9.043l0,0c0.641-4.398,4.641-7.438,9.039-6.797
			l0,0c4.398,0.637,7.359,4.637,6.805,9.039l0,0c-0.563,4-4,6.879-7.922,6.879l0,0C405.922,271.918,405.602,271.84,405.195,271.84z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M64,240.32c0-4.402,3.516-8,8-8l0,0c4.398,0,8,3.598,8,8l0,0c0,4.398-3.602,8-8,8l0,0
			C67.602,248.32,64,244.797,64,240.32z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M400,240c0-0.082,0-0.082,0-0.16l0,0c0-0.16,0-0.32,0-0.48l0,0c0-4.48,3.516-8,7.922-8.082l0,0
			c4.477,0,8,3.602,8.078,8l0,0c0,0.16,0,0.242,0,0.402l0,0c0,0.078,0,0.238,0,0.32l0,0c0,4.398-3.602,8-8,8l0,0
			C403.602,248,400,244.398,400,240z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('polygon', {
                fill: '#FFFFFF',
                points:
                  '416,239.277 416,239.277 416,239.277 416,239.277 416,239.277 		',
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M72.477,224.398c-4.32-0.641-7.359-4.719-6.797-9.039l0,0c0.641-4.402,4.641-7.441,9.039-6.801l0,0
			c4.398,0.559,7.438,4.641,6.797,8.961l0,0c-0.555,4-3.914,6.961-7.836,6.961l0,0C73.281,224.48,72.875,224.398,72.477,224.398z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M398.32,216.559c-0.641-4.32,2.398-8.398,6.719-9.039l0,0c4.398-0.641,8.477,2.398,9.117,6.719l0,0
			c0.641,4.398-2.398,8.48-6.797,9.121l0,0c-0.398,0-0.805,0.078-1.203,0.078l0,0C402.32,223.438,398.875,220.559,398.32,216.559z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M76.398,200.719c-4.242-1.281-6.641-5.68-5.438-9.922l0,0c1.281-4.238,5.68-6.719,9.914-5.438l0,0
			c4.242,1.199,6.641,5.68,5.445,9.918l0,0c-0.961,3.441-4.242,5.762-7.68,5.762l0,0C77.922,201.039,77.117,200.957,76.398,200.719z
			`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M393.359,194.32L393.359,194.32c-1.281-4.242,1.195-8.723,5.438-9.922l0,0
			c4.242-1.281,8.641,1.121,9.922,5.359l0,0l0,0l0,0c1.281,4.242-1.203,8.641-5.359,9.922l0,0c-0.805,0.238-1.523,0.32-2.32,0.32
			l0,0C397.602,200,394.398,197.758,393.359,194.32z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M83.68,177.84c-4.078-1.84-5.844-6.563-4-10.641l0,0l0,0l0,0c1.836-4,6.563-5.762,10.641-3.922l0,0
			c4,1.84,5.758,6.563,3.922,10.563l0,0c-1.281,2.957-4.242,4.719-7.281,4.719l0,0C85.836,178.559,84.719,178.32,83.68,177.84z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M385.281,172.957c-1.844-4-0.086-8.797,3.914-10.637l0,0c4.086-1.84,8.805-0.082,10.641,3.918l0,0
			c1.844,4,0.086,8.801-3.914,10.641l0,0c-1.047,0.48-2.242,0.719-3.367,0.719l0,0C389.516,177.598,386.641,175.918,385.281,172.957
			z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M94.156,156.238c-3.758-2.398-4.875-7.359-2.477-11.039l0,0c2.398-3.762,7.359-4.801,11.039-2.48
			l0,0c3.758,2.398,4.797,7.359,2.477,11.121l0,0c-1.516,2.32-4.156,3.68-6.797,3.68l0,0
			C96.961,157.52,95.438,157.039,94.156,156.238z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M374.32,153.039c-2.398-3.762-1.359-8.719,2.32-11.121l0,0c3.758-2.398,8.641-1.281,11.117,2.402
			l0,0c2.398,3.68,1.281,8.637-2.398,11.039l0,0c-1.359,0.879-2.883,1.277-4.32,1.277l0,0
			C378.398,156.637,375.836,155.359,374.32,153.039z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M107.516,136.32c-3.359-2.883-3.68-7.922-0.797-11.281l0,0c2.883-3.359,7.922-3.68,11.281-0.801
			l0,0c3.359,2.879,3.68,7.922,0.797,11.281l0,0c-1.602,1.84-3.758,2.719-6,2.719l0,0
			C110.875,138.238,109.039,137.598,107.516,136.32z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M360.555,134.797c-2.875-3.359-2.555-8.398,0.727-11.277l0,0c3.359-2.883,8.398-2.563,11.273,0.801
			l0,0c2.961,3.277,2.641,8.316-0.719,11.199l0,0c-1.516,1.359-3.359,2-5.281,2l0,0C364.32,137.52,362.156,136.637,360.555,134.797z
			`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M123.602,118.559c-2.883-3.359-2.563-8.398,0.797-11.281l0,0l0,0l0,0
			c3.359-2.957,8.398-2.559,11.281,0.801l0,0c2.875,3.281,2.563,8.32-0.805,11.281l0,0c-1.438,1.277-3.359,1.918-5.195,1.918l0,0
			C127.438,121.277,125.195,120.32,123.602,118.559z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M344.32,118.719c-3.359-2.879-3.68-7.922-0.805-11.281l0,0c2.883-3.359,7.922-3.758,11.281-0.879
			l0,0l0,0l0,0c3.359,2.879,3.68,8,0.805,11.281l0,0c-1.523,1.84-3.766,2.797-6,2.797l0,0
			C347.758,120.637,345.836,120,344.32,118.719z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M142.078,103.277c-2.398-3.758-1.359-8.719,2.398-11.117l0,0c3.68-2.402,8.641-1.363,11.039,2.398
			l0,0c2.406,3.68,1.281,8.641-2.398,11.039l0,0c-1.281,0.883-2.797,1.281-4.32,1.281l0,0
			C146.156,106.879,143.602,105.598,142.078,103.277z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M326.078,105.117c-3.758-2.398-4.883-7.359-2.477-11.117l0,0c2.398-3.68,7.359-4.801,11.039-2.402
			l0,0c3.758,2.402,4.797,7.359,2.477,11.039l0,0c-1.516,2.402-4.156,3.684-6.797,3.684l0,0
			C328.875,106.32,327.359,105.918,326.078,105.117z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M162.477,90.719c-1.836-4.082-0.078-8.801,3.922-10.641l0,0c4-1.84,8.797-0.078,10.641,3.922l0,0
			c1.836,4,0.078,8.719-3.922,10.637l0,0c-1.117,0.48-2.242,0.723-3.359,0.723l0,0C166.719,95.359,163.836,93.598,162.477,90.719z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M306,94.238c-4-1.84-5.844-6.641-4-10.641l0,0c1.836-4,6.555-5.84,10.641-4l0,0l0,0l0,0
			c4,1.84,5.758,6.563,3.914,10.641l0,0c-1.359,2.961-4.234,4.641-7.273,4.641l0,0C308.156,94.879,307.039,94.719,306,94.238z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M184.477,81.199c-1.195-4.242,1.203-8.719,5.445-10l0,0c4.234-1.199,8.633,1.199,9.914,5.438l0,0
			c1.281,4.242-1.117,8.641-5.359,9.922l0,0c-0.797,0.238-1.516,0.32-2.32,0.32l0,0C188.719,86.879,185.516,84.637,184.477,81.199z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M284.555,86.32L284.555,86.32c-4.234-1.281-6.633-5.684-5.438-9.922l0,0
			c1.203-4.238,5.68-6.719,9.922-5.441l0,0c4.242,1.203,6.641,5.602,5.438,9.84l0,0c-1.039,3.523-4.156,5.84-7.68,5.84l0,0
			C286.078,86.637,285.359,86.48,284.555,86.32z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M207.68,74.879c-0.641-4.32,2.398-8.398,6.797-9.039l0,0c0,0,0,0-0.078,0l0,0
			c4.398-0.641,8.477,2.398,9.117,6.797l0,0c0.641,4.32-2.398,8.402-6.797,9.043l0,0c-0.398,0.078-0.719,0.078-1.117,0.078l0,0
			C211.68,81.758,208.242,78.879,207.68,74.879z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M262.242,81.52L262.242,81.52c-4.32-0.563-7.445-4.641-6.805-9.039l0,0
			c0.641-4.32,4.641-7.363,9.039-6.801l0,0l0,0l0,0c4.398,0.641,7.445,4.641,6.805,9.039l0,0c-0.563,4-4,6.879-7.922,6.879l0,0
			C263.039,81.598,262.641,81.598,262.242,81.52z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFFFFF',
                d: `M231.438,72c0-4.402,3.602-8,8-8l0,0c4.398,0,8,3.52,8.078,8l0,0c0,4.398-3.594,8-8,8l0,0
			C235.039,80,231.516,76.48,231.438,72z`,
              }),
            }),
            R.jsx('g', {
              children: R.jsx('g', {
                children: R.jsx('path', {
                  fill: '#FFFFFF',
                  d: `M240,448c-114.695,0-208-93.309-208-208S125.305,32,240,32s208,93.309,208,208
				S354.695,448,240,448z M240,48C134.133,48,48,134.133,48,240s86.133,192,192,192s192-86.133,192-192S345.867,48,240,48z`,
                }),
              }),
            }),
            R.jsx('g', {
              children: R.jsx('path', {
                fill: '#FFD100',
                d: `M240,448c57.347,0,109.347-23.327,147.01-60.99L375.7,375.7C340.934,410.467,292.934,432,240,432
			c-105.867,0-192-86.133-192-192c0-52.934,21.533-100.934,56.3-135.7L92.99,92.99C55.327,130.654,32,182.654,32,240
			C32,354.691,125.305,448,240,448z`,
              }),
            }),
            R.jsxs('g', {
              children: [
                R.jsx('g', {
                  children: R.jsx('path', {
                    fill: '#FFD100',
                    d: `M252.102,368v-15.876c29.095-2.962,52.957-16.542,64.559-35.463l-17.917-17.917
				c-6.163,16.958-30.496,30.057-58.643,30.057c-32.617,0-60.18-17.586-60.18-38.398c0-6.629-5.375-12-12-12s-12,5.371-12,12
				c0,31.953,30.875,57.515,72.18,61.721V368c0,6.629,5.375,12,12,12S252.102,374.629,252.102,368z`,
                  }),
                }),
                R.jsx('g', {
                  children: R.jsx('path', {
                    fill: '#FFD100',
                    d: `M163.474,163.474c-4.82,7.911-7.552,16.73-7.552,26.128c0,34.988,36.977,62.398,84.18,62.398
				c4.396,0,8.688,0.343,12.845,0.947l-25.936-25.936c-26.568-3.936-47.089-19.458-47.089-37.41c0-2.805,0.538-5.543,1.484-8.196
				L163.474,163.474z`,
                  }),
                }),
              ],
            }),
          ],
        }),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
        R.jsx('g', {}),
      ],
    }),
  m9 = (r) => {
    const { theme: c } = Wr(),
      [u, o] = D.useState('hidden'),
      d = D.useRef(null),
      g = D.useMemo(
        () => r.options.findIndex(($) => $.id === r.value.id),
        [r.value, r.options],
      ),
      v = D.useMemo(
        () => ({
          color: r.color || c.color.raw,
          text: r.text || c.text.raw,
          highlight: r.highlight || c.highlight.raw,
        }),
        [
          r.color,
          r.text,
          r.highlight,
          c.color.raw,
          c.text.raw,
          c.highlight.raw,
        ],
      ),
      y = D.useMemo(
        () => ({
          containerType: 'inline-size',
          containerName: 'select',
          cursor: 'pointer',
          flex: '1 1 100%',
          background: v.color,
          color: v.text,
          transition: 'background 0.3s linear',
          '&:hover': { background: v.highlight },
        }),
        [v],
      ),
      _ = D.useMemo(
        () => ({
          textAlign: 'center',
          margin: '8px',
          fontWeight: 'bold',
          color: v.text,
          flex: '1 1 auto',
          alignItems: 'center',
          fontSize: '0.7rem',
          transition: 'none',
          textTransform: r.uppercase ? 'uppercase' : 'none',
          '@container select (max-width: 300px)': { fontSize: '0.6rem' },
        }),
        [v.text, r.uppercase],
      ),
      S = D.useCallback(
        ($) => ({
          visibility: u === 'visible' ? 'visible' : 'hidden',
          zIndex: $.zIndex.selectItems,
          gap: '5px',
          flexDirection: 'column',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          background: v.color,
          color: v.text,
          transition: 'none',
        }),
        [u, v.color, v.text],
      ),
      E = D.useCallback(
        ($) => ({
          cursor: 'pointer',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '0 0 50px',
          fontSize: '0.75rem',
          padding: `${$.padding.medium}px`,
          color: v.text,
          transition: 'none',
          '&:hover': { background: v.highlight },
        }),
        [v.highlight, v.text],
      ),
      T = D.useCallback(
        ($) => {
          ($.stopPropagation(),
            r.onChange(r.options[g <= 0 ? r.options.length - 1 : g - 1]));
        },
        [r.options, r.onChange, g],
      ),
      q = D.useCallback(
        ($) => {
          ($ == null || $.stopPropagation(),
            r.onChange(r.options[g >= r.options.length - 1 ? 0 : g + 1]));
        },
        [r.options, r.onChange, g],
      ),
      B = D.useCallback(
        ($) => (ue) => {
          (ue.stopPropagation(), r.onChange($), o('hidden'));
        },
        [r.onChange],
      ),
      N = D.useCallback(($) => {
        ($.stopPropagation(), o('visible'));
      }, []),
      X = D.useCallback(($) => {
        ($.stopPropagation(), o('hidden'));
      }, []),
      Q = D.useCallback(() => {
        u === 'hidden' ? o('visible') : q();
      }, [u, q]),
      I = D.useCallback(
        ($) => {
          const V = { ArrowDown: Q, ArrowLeft: T, ArrowRight: q, Enter: X }[
            $.key
          ];
          V && V();
        },
        [Q, T, q, X],
      );
    return (
      D.useEffect(
        function () {
          const ue = d.current;
          if (ue !== null)
            return (
              ue.addEventListener('keydown', I),
              () => {
                ue.removeEventListener('keydown', I);
              }
            );
        },
        [Q, T, q, X],
      ),
      {
        current: v,
        theme: c,
        containerRef: d,
        setPreviousValue: T,
        setNextValue: q,
        openSelect: N,
        closeSelect: X,
        selectVisibility: u,
        onOptionSelect: B,
        currentValueIndex: g,
        containerStyle: y,
        textStyle: _,
        listStyle: S,
        optionStyle: E,
      }
    );
  },
  b0 = (r) => {
    var q;
    const {
      current: c,
      containerStyle: u,
      textStyle: o,
      listStyle: d,
      optionStyle: g,
      containerRef: v,
      setNextValue: y,
      setPreviousValue: _,
      openSelect: S,
      closeSelect: E,
      onOptionSelect: T,
    } = m9(r);
    return R.jsxs(be, {
      tabIndex: 0,
      ref: v,
      onClick: S,
      withStyle: u,
      children: [
        r.directionals &&
          R.jsx(jn, {
            color: 'inherit',
            text: c.text,
            highlight: c.color,
            round: !1,
            onClick: _,
            size: 24,
            children: R.jsx(yy, {}),
          }),
        R.jsx(my, {
          as: 'span',
          withStyle: o,
          children: ((q = r.value) == null ? void 0 : q.display) || r.label,
        }),
        R.jsx(jn, {
          color: 'inherit',
          text: c.text,
          highlight: c.color,
          round: !1,
          onClick: S,
          size: 24,
          children: R.jsx(P8, {}),
        }),
        r.directionals &&
          R.jsx(jn, {
            color: 'inherit',
            text: c.text,
            highlight: c.color,
            round: !1,
            onClick: y,
            size: 24,
            children: R.jsx(d9, {}),
          }),
        R.jsxs(be, {
          as: 'ul',
          withStyle: d,
          children: [
            R.jsx(
              be,
              { as: 'li', withStyle: g, onClick: E, children: R.jsx(R0, {}) },
              'close',
            ),
            R.jsx(Vf, {
              vertical: !0,
              primary: c.color,
              highlight: c.highlight,
              behavior: 'smooth',
              gap: '20px',
              children: r.options.map((B) =>
                R.jsx(
                  be,
                  {
                    as: 'li',
                    withStyle: g,
                    onClick: T(B),
                    children: B.display,
                  },
                  B.id,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  };
function y9(...r) {
  return (c) => r.reduce((u, o) => o(u), c);
}
function b9() {
  return `id${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}
const _9 = (r, c, u) => (r < c ? c : r > u ? u : r),
  S9 = (r, c = 0) => {
    const u = +`1${'0'.repeat(c)}`;
    return c <= 0 ? Math.round(r) : Math.round(r * u) / u;
  };
class on {
  static line() {
    return `
::: >>> `;
  }
  static obj(c, ...u) {
    c && u.lenght > 0 && console.dir(u);
  }
  static info(c, u, o) {
    const d = u
        .split(
          `
`,
        )
        .map((v) => `${on.line()}${v}`.padEnd(200, ' ')),
      g = [
        `ℹ️ ${on.line()}[${c}]`.padEnd(200),
        ...d,
        `${on.line()}at: ${on.getDate()}`.padEnd(200),
      ].join('');
    o &&
      console.log(
        `%c ${g}`,
        'font-size: 13px; font-weight: bold; color: #222; background: lightblue; padding: 2px 6px;',
      );
  }
  static warn(c, u, o) {
    const d = u
        .split(
          `
`,
        )
        .map((v) => `${on.line()}${v}`.padEnd(200, ' ')),
      g = [
        `⚠️ ${on.line()}[${c}]`.padEnd(200),
        ...d,
        `${on.line()}at: ${on.getDate()}`.padEnd(200),
      ].join('');
    o &&
      console.log(
        `%c ${g}`,
        'font-size: 13px; font-weight: bold; color: #222; background: darkyellow; padding: 2px 6px;',
      );
  }
  static error(c, u, o) {
    const d = u
        .split(
          `
`,
        )
        .map((v) => `${on.line()}${v}`.padEnd(200, ' ')),
      g = [
        `‼️ ${on.line()}[${c}]`.padEnd(200),
        ...d,
        `${on.line()}at: ${on.getDate()}`.padEnd(200),
      ].join('');
    o &&
      console.log(
        `%c ${g}`,
        'font-family: monospace; font-size: 13px; font-weight: bold; color: #222; background: lightred; padding: 2px 6px;',
      );
  }
  static custom(c, u, o, d = '#CCC', g = '#333') {
    const v = u
        .split(
          `
`,
        )
        .map((_) => `${on.line()}${_}`.padEnd(200, ' ')),
      y = [
        `${on.line()}[${c}]`.padEnd(200),
        ...v,
        `${on.line()}at: ${on.getDate()}`.padEnd(200),
      ].join('');
    o &&
      console.log(
        `%c${y}`,
        `font-family: monospace; width: 100%; font-size: 13px; font-weight: bold; color: ${g}; background: ${d}; padding: 2px 0`,
      );
  }
  static getDate() {
    const c = new Date(),
      u = String(c.getDate()).padStart(2, '0'),
      o = String(c.getMonth() + 1).padStart(2, '0'),
      d = String(c.getHours()).padStart(2, '0'),
      g = String(c.getMinutes()).padStart(2, '0');
    return `${u}/${o} ${d}:${g}`;
  }
}
var b2, Ub;
function e5() {
  if (Ub) return b2;
  Ub = 1;
  var r = typeof Di == 'object' && Di && Di.Object === Object && Di;
  return ((b2 = r), b2);
}
var _2, Nb;
function Pr() {
  if (Nb) return _2;
  Nb = 1;
  var r = e5(),
    c = typeof self == 'object' && self && self.Object === Object && self,
    u = r || c || Function('return this')();
  return ((_2 = u), _2);
}
var S2, Gb;
function dd() {
  if (Gb) return S2;
  Gb = 1;
  var r = Pr(),
    c = r.Symbol;
  return ((S2 = c), S2);
}
var x2, kb;
function x9() {
  if (kb) return x2;
  kb = 1;
  var r = dd(),
    c = Object.prototype,
    u = c.hasOwnProperty,
    o = c.toString,
    d = r ? r.toStringTag : void 0;
  function g(v) {
    var y = u.call(v, d),
      _ = v[d];
    try {
      v[d] = void 0;
      var S = !0;
    } catch {}
    var E = o.call(v);
    return (S && (y ? (v[d] = _) : delete v[d]), E);
  }
  return ((x2 = g), x2);
}
var C2, Yb;
function C9() {
  if (Yb) return C2;
  Yb = 1;
  var r = Object.prototype,
    c = r.toString;
  function u(o) {
    return c.call(o);
  }
  return ((C2 = u), C2);
}
var A2, Fb;
function to() {
  if (Fb) return A2;
  Fb = 1;
  var r = dd(),
    c = x9(),
    u = C9(),
    o = '[object Null]',
    d = '[object Undefined]',
    g = r ? r.toStringTag : void 0;
  function v(y) {
    return y == null
      ? y === void 0
        ? d
        : o
      : g && g in Object(y)
        ? c(y)
        : u(y);
  }
  return ((A2 = v), A2);
}
var R2, Xb;
function Dl() {
  if (Xb) return R2;
  Xb = 1;
  function r(c) {
    var u = typeof c;
    return c != null && (u == 'object' || u == 'function');
  }
  return ((R2 = r), R2);
}
var T2, Kb;
function t5() {
  if (Kb) return T2;
  Kb = 1;
  var r = to(),
    c = Dl(),
    u = '[object AsyncFunction]',
    o = '[object Function]',
    d = '[object GeneratorFunction]',
    g = '[object Proxy]';
  function v(y) {
    if (!c(y)) return !1;
    var _ = r(y);
    return _ == o || _ == d || _ == u || _ == g;
  }
  return ((T2 = v), T2);
}
var E2, $b;
function A9() {
  if ($b) return E2;
  $b = 1;
  var r = Pr(),
    c = r['__core-js_shared__'];
  return ((E2 = c), E2);
}
var w2, Zb;
function R9() {
  if (Zb) return w2;
  Zb = 1;
  var r = A9(),
    c = (function () {
      var o = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
      return o ? 'Symbol(src)_1.' + o : '';
    })();
  function u(o) {
    return !!c && c in o;
  }
  return ((w2 = u), w2);
}
var O2, Qb;
function n5() {
  if (Qb) return O2;
  Qb = 1;
  var r = Function.prototype,
    c = r.toString;
  function u(o) {
    if (o != null) {
      try {
        return c.call(o);
      } catch {}
      try {
        return o + '';
      } catch {}
    }
    return '';
  }
  return ((O2 = u), O2);
}
var M2, Vb;
function T9() {
  if (Vb) return M2;
  Vb = 1;
  var r = t5(),
    c = R9(),
    u = Dl(),
    o = n5(),
    d = /[\\^$.*+?()[\]{}|]/g,
    g = /^\[object .+?Constructor\]$/,
    v = Function.prototype,
    y = Object.prototype,
    _ = v.toString,
    S = y.hasOwnProperty,
    E = RegExp(
      '^' +
        _.call(S)
          .replace(d, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function T(q) {
    if (!u(q) || c(q)) return !1;
    var B = r(q) ? E : g;
    return B.test(o(q));
  }
  return ((M2 = T), M2);
}
var z2, Ib;
function E9() {
  if (Ib) return z2;
  Ib = 1;
  function r(c, u) {
    return c == null ? void 0 : c[u];
  }
  return ((z2 = r), z2);
}
var j2, Jb;
function lc() {
  if (Jb) return j2;
  Jb = 1;
  var r = T9(),
    c = E9();
  function u(o, d) {
    var g = c(o, d);
    return r(g) ? g : void 0;
  }
  return ((j2 = u), j2);
}
var D2, Wb;
function a5() {
  if (Wb) return D2;
  Wb = 1;
  var r = lc(),
    c = (function () {
      try {
        var u = r(Object, 'defineProperty');
        return (u({}, '', {}), u);
      } catch {}
    })();
  return ((D2 = c), D2);
}
var q2, Pb;
function r5() {
  if (Pb) return q2;
  Pb = 1;
  var r = a5();
  function c(u, o, d) {
    o == '__proto__' && r
      ? r(u, o, { configurable: !0, enumerable: !0, value: d, writable: !0 })
      : (u[o] = d);
  }
  return ((q2 = c), q2);
}
var L2, e_;
function gd() {
  if (e_) return L2;
  e_ = 1;
  function r(c, u) {
    return c === u || (c !== c && u !== u);
  }
  return ((L2 = r), L2);
}
var B2, t_;
function by() {
  if (t_) return B2;
  t_ = 1;
  var r = r5(),
    c = gd(),
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g, v, y) {
    var _ = g[v];
    (!(o.call(g, v) && c(_, y)) || (y === void 0 && !(v in g))) && r(g, v, y);
  }
  return ((B2 = d), B2);
}
var H2, n_;
function w9() {
  if (n_) return H2;
  n_ = 1;
  var r = by(),
    c = r5();
  function u(o, d, g, v) {
    var y = !g;
    g || (g = {});
    for (var _ = -1, S = d.length; ++_ < S; ) {
      var E = d[_],
        T = v ? v(g[E], o[E], E, g, o) : void 0;
      (T === void 0 && (T = o[E]), y ? c(g, E, T) : r(g, E, T));
    }
    return g;
  }
  return ((H2 = u), H2);
}
var U2, a_;
function _y() {
  if (a_) return U2;
  a_ = 1;
  function r(c) {
    return c;
  }
  return ((U2 = r), U2);
}
var N2, r_;
function O9() {
  if (r_) return N2;
  r_ = 1;
  function r(c, u, o) {
    switch (o.length) {
      case 0:
        return c.call(u);
      case 1:
        return c.call(u, o[0]);
      case 2:
        return c.call(u, o[0], o[1]);
      case 3:
        return c.call(u, o[0], o[1], o[2]);
    }
    return c.apply(u, o);
  }
  return ((N2 = r), N2);
}
var G2, l_;
function M9() {
  if (l_) return G2;
  l_ = 1;
  var r = O9(),
    c = Math.max;
  function u(o, d, g) {
    return (
      (d = c(d === void 0 ? o.length - 1 : d, 0)),
      function () {
        for (
          var v = arguments, y = -1, _ = c(v.length - d, 0), S = Array(_);
          ++y < _;
        )
          S[y] = v[d + y];
        y = -1;
        for (var E = Array(d + 1); ++y < d; ) E[y] = v[y];
        return ((E[d] = g(S)), r(o, this, E));
      }
    );
  }
  return ((G2 = u), G2);
}
var k2, i_;
function z9() {
  if (i_) return k2;
  i_ = 1;
  function r(c) {
    return function () {
      return c;
    };
  }
  return ((k2 = r), k2);
}
var Y2, u_;
function j9() {
  if (u_) return Y2;
  u_ = 1;
  var r = z9(),
    c = a5(),
    u = _y(),
    o = c
      ? function (d, g) {
          return c(d, 'toString', {
            configurable: !0,
            enumerable: !1,
            value: r(g),
            writable: !0,
          });
        }
      : u;
  return ((Y2 = o), Y2);
}
var F2, c_;
function D9() {
  if (c_) return F2;
  c_ = 1;
  var r = 800,
    c = 16,
    u = Date.now;
  function o(d) {
    var g = 0,
      v = 0;
    return function () {
      var y = u(),
        _ = c - (y - v);
      if (((v = y), _ > 0)) {
        if (++g >= r) return arguments[0];
      } else g = 0;
      return d.apply(void 0, arguments);
    };
  }
  return ((F2 = o), F2);
}
var X2, f_;
function q9() {
  if (f_) return X2;
  f_ = 1;
  var r = j9(),
    c = D9(),
    u = c(r);
  return ((X2 = u), X2);
}
var K2, o_;
function L9() {
  if (o_) return K2;
  o_ = 1;
  var r = _y(),
    c = M9(),
    u = q9();
  function o(d, g) {
    return u(c(d, g, r), d + '');
  }
  return ((K2 = o), K2);
}
var $2, s_;
function Sy() {
  if (s_) return $2;
  s_ = 1;
  var r = 9007199254740991;
  function c(u) {
    return typeof u == 'number' && u > -1 && u % 1 == 0 && u <= r;
  }
  return (($2 = c), $2);
}
var Z2, h_;
function vd() {
  if (h_) return Z2;
  h_ = 1;
  var r = t5(),
    c = Sy();
  function u(o) {
    return o != null && c(o.length) && !r(o);
  }
  return ((Z2 = u), Z2);
}
var Q2, d_;
function pd() {
  if (d_) return Q2;
  d_ = 1;
  var r = 9007199254740991,
    c = /^(?:0|[1-9]\d*)$/;
  function u(o, d) {
    var g = typeof o;
    return (
      (d = d ?? r),
      !!d &&
        (g == 'number' || (g != 'symbol' && c.test(o))) &&
        o > -1 &&
        o % 1 == 0 &&
        o < d
    );
  }
  return ((Q2 = u), Q2);
}
var V2, g_;
function B9() {
  if (g_) return V2;
  g_ = 1;
  var r = gd(),
    c = vd(),
    u = pd(),
    o = Dl();
  function d(g, v, y) {
    if (!o(y)) return !1;
    var _ = typeof v;
    return (_ == 'number' ? c(y) && u(v, y.length) : _ == 'string' && v in y)
      ? r(y[v], g)
      : !1;
  }
  return ((V2 = d), V2);
}
var I2, v_;
function H9() {
  if (v_) return I2;
  v_ = 1;
  var r = L9(),
    c = B9();
  function u(o) {
    return r(function (d, g) {
      var v = -1,
        y = g.length,
        _ = y > 1 ? g[y - 1] : void 0,
        S = y > 2 ? g[2] : void 0;
      for (
        _ = o.length > 3 && typeof _ == 'function' ? (y--, _) : void 0,
          S && c(g[0], g[1], S) && ((_ = y < 3 ? void 0 : _), (y = 1)),
          d = Object(d);
        ++v < y;
      ) {
        var E = g[v];
        E && o(d, E, v, _);
      }
      return d;
    });
  }
  return ((I2 = u), I2);
}
var J2, p_;
function xy() {
  if (p_) return J2;
  p_ = 1;
  var r = Object.prototype;
  function c(u) {
    var o = u && u.constructor,
      d = (typeof o == 'function' && o.prototype) || r;
    return u === d;
  }
  return ((J2 = c), J2);
}
var W2, m_;
function U9() {
  if (m_) return W2;
  m_ = 1;
  function r(c, u) {
    for (var o = -1, d = Array(c); ++o < c; ) d[o] = u(o);
    return d;
  }
  return ((W2 = r), W2);
}
var P2, y_;
function no() {
  if (y_) return P2;
  y_ = 1;
  function r(c) {
    return c != null && typeof c == 'object';
  }
  return ((P2 = r), P2);
}
var ep, b_;
function N9() {
  if (b_) return ep;
  b_ = 1;
  var r = to(),
    c = no(),
    u = '[object Arguments]';
  function o(d) {
    return c(d) && r(d) == u;
  }
  return ((ep = o), ep);
}
var tp, __;
function l5() {
  if (__) return tp;
  __ = 1;
  var r = N9(),
    c = no(),
    u = Object.prototype,
    o = u.hasOwnProperty,
    d = u.propertyIsEnumerable,
    g = r(
      (function () {
        return arguments;
      })(),
    )
      ? r
      : function (v) {
          return c(v) && o.call(v, 'callee') && !d.call(v, 'callee');
        };
  return ((tp = g), tp);
}
var np, S_;
function Bi() {
  if (S_) return np;
  S_ = 1;
  var r = Array.isArray;
  return ((np = r), np);
}
var v0 = { exports: {} },
  ap,
  x_;
function G9() {
  if (x_) return ap;
  x_ = 1;
  function r() {
    return !1;
  }
  return ((ap = r), ap);
}
v0.exports;
var C_;
function i5() {
  return (
    C_ ||
      ((C_ = 1),
      (function (r, c) {
        var u = Pr(),
          o = G9(),
          d = c && !c.nodeType && c,
          g = d && !0 && r && !r.nodeType && r,
          v = g && g.exports === d,
          y = v ? u.Buffer : void 0,
          _ = y ? y.isBuffer : void 0,
          S = _ || o;
        r.exports = S;
      })(v0, v0.exports)),
    v0.exports
  );
}
var rp, A_;
function k9() {
  if (A_) return rp;
  A_ = 1;
  var r = to(),
    c = Sy(),
    u = no(),
    o = '[object Arguments]',
    d = '[object Array]',
    g = '[object Boolean]',
    v = '[object Date]',
    y = '[object Error]',
    _ = '[object Function]',
    S = '[object Map]',
    E = '[object Number]',
    T = '[object Object]',
    q = '[object RegExp]',
    B = '[object Set]',
    N = '[object String]',
    X = '[object WeakMap]',
    Q = '[object ArrayBuffer]',
    I = '[object DataView]',
    $ = '[object Float32Array]',
    ue = '[object Float64Array]',
    V = '[object Int8Array]',
    fe = '[object Int16Array]',
    W = '[object Int32Array]',
    k = '[object Uint8Array]',
    pe = '[object Uint8ClampedArray]',
    Se = '[object Uint16Array]',
    Ce = '[object Uint32Array]',
    oe = {};
  ((oe[$] =
    oe[ue] =
    oe[V] =
    oe[fe] =
    oe[W] =
    oe[k] =
    oe[pe] =
    oe[Se] =
    oe[Ce] =
      !0),
    (oe[o] =
      oe[d] =
      oe[Q] =
      oe[g] =
      oe[I] =
      oe[v] =
      oe[y] =
      oe[_] =
      oe[S] =
      oe[E] =
      oe[T] =
      oe[q] =
      oe[B] =
      oe[N] =
      oe[X] =
        !1));
  function Ue(Ae) {
    return u(Ae) && c(Ae.length) && !!oe[r(Ae)];
  }
  return ((rp = Ue), rp);
}
var lp, R_;
function Y9() {
  if (R_) return lp;
  R_ = 1;
  function r(c) {
    return function (u) {
      return c(u);
    };
  }
  return ((lp = r), lp);
}
var p0 = { exports: {} };
p0.exports;
var T_;
function F9() {
  return (
    T_ ||
      ((T_ = 1),
      (function (r, c) {
        var u = e5(),
          o = c && !c.nodeType && c,
          d = o && !0 && r && !r.nodeType && r,
          g = d && d.exports === o,
          v = g && u.process,
          y = (function () {
            try {
              var _ = d && d.require && d.require('util').types;
              return _ || (v && v.binding && v.binding('util'));
            } catch {}
          })();
        r.exports = y;
      })(p0, p0.exports)),
    p0.exports
  );
}
var ip, E_;
function u5() {
  if (E_) return ip;
  E_ = 1;
  var r = k9(),
    c = Y9(),
    u = F9(),
    o = u && u.isTypedArray,
    d = o ? c(o) : r;
  return ((ip = d), ip);
}
var up, w_;
function c5() {
  if (w_) return up;
  w_ = 1;
  var r = U9(),
    c = l5(),
    u = Bi(),
    o = i5(),
    d = pd(),
    g = u5(),
    v = Object.prototype,
    y = v.hasOwnProperty;
  function _(S, E) {
    var T = u(S),
      q = !T && c(S),
      B = !T && !q && o(S),
      N = !T && !q && !B && g(S),
      X = T || q || B || N,
      Q = X ? r(S.length, String) : [],
      I = Q.length;
    for (var $ in S)
      (E || y.call(S, $)) &&
        !(
          X &&
          ($ == 'length' ||
            (B && ($ == 'offset' || $ == 'parent')) ||
            (N && ($ == 'buffer' || $ == 'byteLength' || $ == 'byteOffset')) ||
            d($, I))
        ) &&
        Q.push($);
    return Q;
  }
  return ((up = _), up);
}
var cp, O_;
function f5() {
  if (O_) return cp;
  O_ = 1;
  function r(c, u) {
    return function (o) {
      return c(u(o));
    };
  }
  return ((cp = r), cp);
}
var fp, M_;
function X9() {
  if (M_) return fp;
  M_ = 1;
  var r = f5(),
    c = r(Object.keys, Object);
  return ((fp = c), fp);
}
var op, z_;
function K9() {
  if (z_) return op;
  z_ = 1;
  var r = xy(),
    c = X9(),
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g) {
    if (!r(g)) return c(g);
    var v = [];
    for (var y in Object(g)) o.call(g, y) && y != 'constructor' && v.push(y);
    return v;
  }
  return ((op = d), op);
}
var sp, j_;
function Cy() {
  if (j_) return sp;
  j_ = 1;
  var r = c5(),
    c = K9(),
    u = vd();
  function o(d) {
    return u(d) ? r(d) : c(d);
  }
  return ((sp = o), sp);
}
var hp, D_;
function $9() {
  if (D_) return hp;
  D_ = 1;
  var r = by(),
    c = w9(),
    u = H9(),
    o = vd(),
    d = xy(),
    g = Cy(),
    v = Object.prototype,
    y = v.hasOwnProperty,
    _ = u(function (S, E) {
      if (d(E) || o(E)) {
        c(E, g(E), S);
        return;
      }
      for (var T in E) y.call(E, T) && r(S, T, E[T]);
    });
  return ((hp = _), hp);
}
var Z9 = $9();
const Q9 = C0(Z9);
var dp, q_;
function V9() {
  if (q_) return dp;
  q_ = 1;
  function r() {
    ((this.__data__ = []), (this.size = 0));
  }
  return ((dp = r), dp);
}
var gp, L_;
function md() {
  if (L_) return gp;
  L_ = 1;
  var r = gd();
  function c(u, o) {
    for (var d = u.length; d--; ) if (r(u[d][0], o)) return d;
    return -1;
  }
  return ((gp = c), gp);
}
var vp, B_;
function I9() {
  if (B_) return vp;
  B_ = 1;
  var r = md(),
    c = Array.prototype,
    u = c.splice;
  function o(d) {
    var g = this.__data__,
      v = r(g, d);
    if (v < 0) return !1;
    var y = g.length - 1;
    return (v == y ? g.pop() : u.call(g, v, 1), --this.size, !0);
  }
  return ((vp = o), vp);
}
var pp, H_;
function J9() {
  if (H_) return pp;
  H_ = 1;
  var r = md();
  function c(u) {
    var o = this.__data__,
      d = r(o, u);
    return d < 0 ? void 0 : o[d][1];
  }
  return ((pp = c), pp);
}
var mp, U_;
function W9() {
  if (U_) return mp;
  U_ = 1;
  var r = md();
  function c(u) {
    return r(this.__data__, u) > -1;
  }
  return ((mp = c), mp);
}
var yp, N_;
function P9() {
  if (N_) return yp;
  N_ = 1;
  var r = md();
  function c(u, o) {
    var d = this.__data__,
      g = r(d, u);
    return (g < 0 ? (++this.size, d.push([u, o])) : (d[g][1] = o), this);
  }
  return ((yp = c), yp);
}
var bp, G_;
function yd() {
  if (G_) return bp;
  G_ = 1;
  var r = V9(),
    c = I9(),
    u = J9(),
    o = W9(),
    d = P9();
  function g(v) {
    var y = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++y < _; ) {
      var S = v[y];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (bp = g),
    bp
  );
}
var _p, k_;
function e7() {
  if (k_) return _p;
  k_ = 1;
  var r = yd();
  function c() {
    ((this.__data__ = new r()), (this.size = 0));
  }
  return ((_p = c), _p);
}
var Sp, Y_;
function t7() {
  if (Y_) return Sp;
  Y_ = 1;
  function r(c) {
    var u = this.__data__,
      o = u.delete(c);
    return ((this.size = u.size), o);
  }
  return ((Sp = r), Sp);
}
var xp, F_;
function n7() {
  if (F_) return xp;
  F_ = 1;
  function r(c) {
    return this.__data__.get(c);
  }
  return ((xp = r), xp);
}
var Cp, X_;
function a7() {
  if (X_) return Cp;
  X_ = 1;
  function r(c) {
    return this.__data__.has(c);
  }
  return ((Cp = r), Cp);
}
var Ap, K_;
function Ay() {
  if (K_) return Ap;
  K_ = 1;
  var r = lc(),
    c = Pr(),
    u = r(c, 'Map');
  return ((Ap = u), Ap);
}
var Rp, $_;
function bd() {
  if ($_) return Rp;
  $_ = 1;
  var r = lc(),
    c = r(Object, 'create');
  return ((Rp = c), Rp);
}
var Tp, Z_;
function r7() {
  if (Z_) return Tp;
  Z_ = 1;
  var r = bd();
  function c() {
    ((this.__data__ = r ? r(null) : {}), (this.size = 0));
  }
  return ((Tp = c), Tp);
}
var Ep, Q_;
function l7() {
  if (Q_) return Ep;
  Q_ = 1;
  function r(c) {
    var u = this.has(c) && delete this.__data__[c];
    return ((this.size -= u ? 1 : 0), u);
  }
  return ((Ep = r), Ep);
}
var wp, V_;
function i7() {
  if (V_) return wp;
  V_ = 1;
  var r = bd(),
    c = '__lodash_hash_undefined__',
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g) {
    var v = this.__data__;
    if (r) {
      var y = v[g];
      return y === c ? void 0 : y;
    }
    return o.call(v, g) ? v[g] : void 0;
  }
  return ((wp = d), wp);
}
var Op, I_;
function u7() {
  if (I_) return Op;
  I_ = 1;
  var r = bd(),
    c = Object.prototype,
    u = c.hasOwnProperty;
  function o(d) {
    var g = this.__data__;
    return r ? g[d] !== void 0 : u.call(g, d);
  }
  return ((Op = o), Op);
}
var Mp, J_;
function c7() {
  if (J_) return Mp;
  J_ = 1;
  var r = bd(),
    c = '__lodash_hash_undefined__';
  function u(o, d) {
    var g = this.__data__;
    return (
      (this.size += this.has(o) ? 0 : 1),
      (g[o] = r && d === void 0 ? c : d),
      this
    );
  }
  return ((Mp = u), Mp);
}
var zp, W_;
function f7() {
  if (W_) return zp;
  W_ = 1;
  var r = r7(),
    c = l7(),
    u = i7(),
    o = u7(),
    d = c7();
  function g(v) {
    var y = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++y < _; ) {
      var S = v[y];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (zp = g),
    zp
  );
}
var jp, P_;
function o7() {
  if (P_) return jp;
  P_ = 1;
  var r = f7(),
    c = yd(),
    u = Ay();
  function o() {
    ((this.size = 0),
      (this.__data__ = {
        hash: new r(),
        map: new (u || c)(),
        string: new r(),
      }));
  }
  return ((jp = o), jp);
}
var Dp, e4;
function s7() {
  if (e4) return Dp;
  e4 = 1;
  function r(c) {
    var u = typeof c;
    return u == 'string' || u == 'number' || u == 'symbol' || u == 'boolean'
      ? c !== '__proto__'
      : c === null;
  }
  return ((Dp = r), Dp);
}
var qp, t4;
function _d() {
  if (t4) return qp;
  t4 = 1;
  var r = s7();
  function c(u, o) {
    var d = u.__data__;
    return r(o) ? d[typeof o == 'string' ? 'string' : 'hash'] : d.map;
  }
  return ((qp = c), qp);
}
var Lp, n4;
function h7() {
  if (n4) return Lp;
  n4 = 1;
  var r = _d();
  function c(u) {
    var o = r(this, u).delete(u);
    return ((this.size -= o ? 1 : 0), o);
  }
  return ((Lp = c), Lp);
}
var Bp, a4;
function d7() {
  if (a4) return Bp;
  a4 = 1;
  var r = _d();
  function c(u) {
    return r(this, u).get(u);
  }
  return ((Bp = c), Bp);
}
var Hp, r4;
function g7() {
  if (r4) return Hp;
  r4 = 1;
  var r = _d();
  function c(u) {
    return r(this, u).has(u);
  }
  return ((Hp = c), Hp);
}
var Up, l4;
function v7() {
  if (l4) return Up;
  l4 = 1;
  var r = _d();
  function c(u, o) {
    var d = r(this, u),
      g = d.size;
    return (d.set(u, o), (this.size += d.size == g ? 0 : 1), this);
  }
  return ((Up = c), Up);
}
var Np, i4;
function Ry() {
  if (i4) return Np;
  i4 = 1;
  var r = o7(),
    c = h7(),
    u = d7(),
    o = g7(),
    d = v7();
  function g(v) {
    var y = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++y < _; ) {
      var S = v[y];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (Np = g),
    Np
  );
}
var Gp, u4;
function p7() {
  if (u4) return Gp;
  u4 = 1;
  var r = yd(),
    c = Ay(),
    u = Ry(),
    o = 200;
  function d(g, v) {
    var y = this.__data__;
    if (y instanceof r) {
      var _ = y.__data__;
      if (!c || _.length < o - 1)
        return (_.push([g, v]), (this.size = ++y.size), this);
      y = this.__data__ = new u(_);
    }
    return (y.set(g, v), (this.size = y.size), this);
  }
  return ((Gp = d), Gp);
}
var kp, c4;
function o5() {
  if (c4) return kp;
  c4 = 1;
  var r = yd(),
    c = e7(),
    u = t7(),
    o = n7(),
    d = a7(),
    g = p7();
  function v(y) {
    var _ = (this.__data__ = new r(y));
    this.size = _.size;
  }
  return (
    (v.prototype.clear = c),
    (v.prototype.delete = u),
    (v.prototype.get = o),
    (v.prototype.has = d),
    (v.prototype.set = g),
    (kp = v),
    kp
  );
}
var Yp, f4;
function m7() {
  if (f4) return Yp;
  f4 = 1;
  var r = '__lodash_hash_undefined__';
  function c(u) {
    return (this.__data__.set(u, r), this);
  }
  return ((Yp = c), Yp);
}
var Fp, o4;
function y7() {
  if (o4) return Fp;
  o4 = 1;
  function r(c) {
    return this.__data__.has(c);
  }
  return ((Fp = r), Fp);
}
var Xp, s4;
function b7() {
  if (s4) return Xp;
  s4 = 1;
  var r = Ry(),
    c = m7(),
    u = y7();
  function o(d) {
    var g = -1,
      v = d == null ? 0 : d.length;
    for (this.__data__ = new r(); ++g < v; ) this.add(d[g]);
  }
  return (
    (o.prototype.add = o.prototype.push = c),
    (o.prototype.has = u),
    (Xp = o),
    Xp
  );
}
var Kp, h4;
function _7() {
  if (h4) return Kp;
  h4 = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length; ++o < d; )
      if (u(c[o], o, c)) return !0;
    return !1;
  }
  return ((Kp = r), Kp);
}
var $p, d4;
function S7() {
  if (d4) return $p;
  d4 = 1;
  function r(c, u) {
    return c.has(u);
  }
  return (($p = r), $p);
}
var Zp, g4;
function s5() {
  if (g4) return Zp;
  g4 = 1;
  var r = b7(),
    c = _7(),
    u = S7(),
    o = 1,
    d = 2;
  function g(v, y, _, S, E, T) {
    var q = _ & o,
      B = v.length,
      N = y.length;
    if (B != N && !(q && N > B)) return !1;
    var X = T.get(v),
      Q = T.get(y);
    if (X && Q) return X == y && Q == v;
    var I = -1,
      $ = !0,
      ue = _ & d ? new r() : void 0;
    for (T.set(v, y), T.set(y, v); ++I < B; ) {
      var V = v[I],
        fe = y[I];
      if (S) var W = q ? S(fe, V, I, y, v, T) : S(V, fe, I, v, y, T);
      if (W !== void 0) {
        if (W) continue;
        $ = !1;
        break;
      }
      if (ue) {
        if (
          !c(y, function (k, pe) {
            if (!u(ue, pe) && (V === k || E(V, k, _, S, T))) return ue.push(pe);
          })
        ) {
          $ = !1;
          break;
        }
      } else if (!(V === fe || E(V, fe, _, S, T))) {
        $ = !1;
        break;
      }
    }
    return (T.delete(v), T.delete(y), $);
  }
  return ((Zp = g), Zp);
}
var Qp, v4;
function x7() {
  if (v4) return Qp;
  v4 = 1;
  var r = Pr(),
    c = r.Uint8Array;
  return ((Qp = c), Qp);
}
var Vp, p4;
function C7() {
  if (p4) return Vp;
  p4 = 1;
  function r(c) {
    var u = -1,
      o = Array(c.size);
    return (
      c.forEach(function (d, g) {
        o[++u] = [g, d];
      }),
      o
    );
  }
  return ((Vp = r), Vp);
}
var Ip, m4;
function A7() {
  if (m4) return Ip;
  m4 = 1;
  function r(c) {
    var u = -1,
      o = Array(c.size);
    return (
      c.forEach(function (d) {
        o[++u] = d;
      }),
      o
    );
  }
  return ((Ip = r), Ip);
}
var Jp, y4;
function R7() {
  if (y4) return Jp;
  y4 = 1;
  var r = dd(),
    c = x7(),
    u = gd(),
    o = s5(),
    d = C7(),
    g = A7(),
    v = 1,
    y = 2,
    _ = '[object Boolean]',
    S = '[object Date]',
    E = '[object Error]',
    T = '[object Map]',
    q = '[object Number]',
    B = '[object RegExp]',
    N = '[object Set]',
    X = '[object String]',
    Q = '[object Symbol]',
    I = '[object ArrayBuffer]',
    $ = '[object DataView]',
    ue = r ? r.prototype : void 0,
    V = ue ? ue.valueOf : void 0;
  function fe(W, k, pe, Se, Ce, oe, Ue) {
    switch (pe) {
      case $:
        if (W.byteLength != k.byteLength || W.byteOffset != k.byteOffset)
          return !1;
        ((W = W.buffer), (k = k.buffer));
      case I:
        return !(W.byteLength != k.byteLength || !oe(new c(W), new c(k)));
      case _:
      case S:
      case q:
        return u(+W, +k);
      case E:
        return W.name == k.name && W.message == k.message;
      case B:
      case X:
        return W == k + '';
      case T:
        var Ae = d;
      case N:
        var ut = Se & v;
        if ((Ae || (Ae = g), W.size != k.size && !ut)) return !1;
        var ct = Ue.get(W);
        if (ct) return ct == k;
        ((Se |= y), Ue.set(W, k));
        var J = o(Ae(W), Ae(k), Se, Ce, oe, Ue);
        return (Ue.delete(W), J);
      case Q:
        if (V) return V.call(W) == V.call(k);
    }
    return !1;
  }
  return ((Jp = fe), Jp);
}
var Wp, b4;
function h5() {
  if (b4) return Wp;
  b4 = 1;
  function r(c, u) {
    for (var o = -1, d = u.length, g = c.length; ++o < d; ) c[g + o] = u[o];
    return c;
  }
  return ((Wp = r), Wp);
}
var Pp, _4;
function d5() {
  if (_4) return Pp;
  _4 = 1;
  var r = h5(),
    c = Bi();
  function u(o, d, g) {
    var v = d(o);
    return c(o) ? v : r(v, g(o));
  }
  return ((Pp = u), Pp);
}
var em, S4;
function T7() {
  if (S4) return em;
  S4 = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length, g = 0, v = []; ++o < d; ) {
      var y = c[o];
      u(y, o, c) && (v[g++] = y);
    }
    return v;
  }
  return ((em = r), em);
}
var tm, x4;
function g5() {
  if (x4) return tm;
  x4 = 1;
  function r() {
    return [];
  }
  return ((tm = r), tm);
}
var nm, C4;
function v5() {
  if (C4) return nm;
  C4 = 1;
  var r = T7(),
    c = g5(),
    u = Object.prototype,
    o = u.propertyIsEnumerable,
    d = Object.getOwnPropertySymbols,
    g = d
      ? function (v) {
          return v == null
            ? []
            : ((v = Object(v)),
              r(d(v), function (y) {
                return o.call(v, y);
              }));
        }
      : c;
  return ((nm = g), nm);
}
var am, A4;
function E7() {
  if (A4) return am;
  A4 = 1;
  var r = d5(),
    c = v5(),
    u = Cy();
  function o(d) {
    return r(d, u, c);
  }
  return ((am = o), am);
}
var rm, R4;
function w7() {
  if (R4) return rm;
  R4 = 1;
  var r = E7(),
    c = 1,
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g, v, y, _, S, E) {
    var T = y & c,
      q = r(g),
      B = q.length,
      N = r(v),
      X = N.length;
    if (B != X && !T) return !1;
    for (var Q = B; Q--; ) {
      var I = q[Q];
      if (!(T ? I in v : o.call(v, I))) return !1;
    }
    var $ = E.get(g),
      ue = E.get(v);
    if ($ && ue) return $ == v && ue == g;
    var V = !0;
    (E.set(g, v), E.set(v, g));
    for (var fe = T; ++Q < B; ) {
      I = q[Q];
      var W = g[I],
        k = v[I];
      if (_) var pe = T ? _(k, W, I, v, g, E) : _(W, k, I, g, v, E);
      if (!(pe === void 0 ? W === k || S(W, k, y, _, E) : pe)) {
        V = !1;
        break;
      }
      fe || (fe = I == 'constructor');
    }
    if (V && !fe) {
      var Se = g.constructor,
        Ce = v.constructor;
      Se != Ce &&
        'constructor' in g &&
        'constructor' in v &&
        !(
          typeof Se == 'function' &&
          Se instanceof Se &&
          typeof Ce == 'function' &&
          Ce instanceof Ce
        ) &&
        (V = !1);
    }
    return (E.delete(g), E.delete(v), V);
  }
  return ((rm = d), rm);
}
var lm, T4;
function O7() {
  if (T4) return lm;
  T4 = 1;
  var r = lc(),
    c = Pr(),
    u = r(c, 'DataView');
  return ((lm = u), lm);
}
var im, E4;
function M7() {
  if (E4) return im;
  E4 = 1;
  var r = lc(),
    c = Pr(),
    u = r(c, 'Promise');
  return ((im = u), im);
}
var um, w4;
function z7() {
  if (w4) return um;
  w4 = 1;
  var r = lc(),
    c = Pr(),
    u = r(c, 'Set');
  return ((um = u), um);
}
var cm, O4;
function j7() {
  if (O4) return cm;
  O4 = 1;
  var r = lc(),
    c = Pr(),
    u = r(c, 'WeakMap');
  return ((cm = u), cm);
}
var fm, M4;
function D7() {
  if (M4) return fm;
  M4 = 1;
  var r = O7(),
    c = Ay(),
    u = M7(),
    o = z7(),
    d = j7(),
    g = to(),
    v = n5(),
    y = '[object Map]',
    _ = '[object Object]',
    S = '[object Promise]',
    E = '[object Set]',
    T = '[object WeakMap]',
    q = '[object DataView]',
    B = v(r),
    N = v(c),
    X = v(u),
    Q = v(o),
    I = v(d),
    $ = g;
  return (
    ((r && $(new r(new ArrayBuffer(1))) != q) ||
      (c && $(new c()) != y) ||
      (u && $(u.resolve()) != S) ||
      (o && $(new o()) != E) ||
      (d && $(new d()) != T)) &&
      ($ = function (ue) {
        var V = g(ue),
          fe = V == _ ? ue.constructor : void 0,
          W = fe ? v(fe) : '';
        if (W)
          switch (W) {
            case B:
              return q;
            case N:
              return y;
            case X:
              return S;
            case Q:
              return E;
            case I:
              return T;
          }
        return V;
      }),
    (fm = $),
    fm
  );
}
var om, z4;
function q7() {
  if (z4) return om;
  z4 = 1;
  var r = o5(),
    c = s5(),
    u = R7(),
    o = w7(),
    d = D7(),
    g = Bi(),
    v = i5(),
    y = u5(),
    _ = 1,
    S = '[object Arguments]',
    E = '[object Array]',
    T = '[object Object]',
    q = Object.prototype,
    B = q.hasOwnProperty;
  function N(X, Q, I, $, ue, V) {
    var fe = g(X),
      W = g(Q),
      k = fe ? E : d(X),
      pe = W ? E : d(Q);
    ((k = k == S ? T : k), (pe = pe == S ? T : pe));
    var Se = k == T,
      Ce = pe == T,
      oe = k == pe;
    if (oe && v(X)) {
      if (!v(Q)) return !1;
      ((fe = !0), (Se = !1));
    }
    if (oe && !Se)
      return (
        V || (V = new r()),
        fe || y(X) ? c(X, Q, I, $, ue, V) : u(X, Q, k, I, $, ue, V)
      );
    if (!(I & _)) {
      var Ue = Se && B.call(X, '__wrapped__'),
        Ae = Ce && B.call(Q, '__wrapped__');
      if (Ue || Ae) {
        var ut = Ue ? X.value() : X,
          ct = Ae ? Q.value() : Q;
        return (V || (V = new r()), ue(ut, ct, I, $, V));
      }
    }
    return oe ? (V || (V = new r()), o(X, Q, I, $, ue, V)) : !1;
  }
  return ((om = N), om);
}
var sm, j4;
function p5() {
  if (j4) return sm;
  j4 = 1;
  var r = q7(),
    c = no();
  function u(o, d, g, v, y) {
    return o === d
      ? !0
      : o == null || d == null || (!c(o) && !c(d))
        ? o !== o && d !== d
        : r(o, d, g, v, u, y);
  }
  return ((sm = u), sm);
}
var hm, D4;
function L7() {
  if (D4) return hm;
  D4 = 1;
  var r = o5(),
    c = p5(),
    u = 1,
    o = 2;
  function d(g, v, y, _) {
    var S = y.length,
      E = S,
      T = !_;
    if (g == null) return !E;
    for (g = Object(g); S--; ) {
      var q = y[S];
      if (T && q[2] ? q[1] !== g[q[0]] : !(q[0] in g)) return !1;
    }
    for (; ++S < E; ) {
      q = y[S];
      var B = q[0],
        N = g[B],
        X = q[1];
      if (T && q[2]) {
        if (N === void 0 && !(B in g)) return !1;
      } else {
        var Q = new r();
        if (_) var I = _(N, X, B, g, v, Q);
        if (!(I === void 0 ? c(X, N, u | o, _, Q) : I)) return !1;
      }
    }
    return !0;
  }
  return ((hm = d), hm);
}
var dm, q4;
function m5() {
  if (q4) return dm;
  q4 = 1;
  var r = Dl();
  function c(u) {
    return u === u && !r(u);
  }
  return ((dm = c), dm);
}
var gm, L4;
function B7() {
  if (L4) return gm;
  L4 = 1;
  var r = m5(),
    c = Cy();
  function u(o) {
    for (var d = c(o), g = d.length; g--; ) {
      var v = d[g],
        y = o[v];
      d[g] = [v, y, r(y)];
    }
    return d;
  }
  return ((gm = u), gm);
}
var vm, B4;
function y5() {
  if (B4) return vm;
  B4 = 1;
  function r(c, u) {
    return function (o) {
      return o == null ? !1 : o[c] === u && (u !== void 0 || c in Object(o));
    };
  }
  return ((vm = r), vm);
}
var pm, H4;
function H7() {
  if (H4) return pm;
  H4 = 1;
  var r = L7(),
    c = B7(),
    u = y5();
  function o(d) {
    var g = c(d);
    return g.length == 1 && g[0][2]
      ? u(g[0][0], g[0][1])
      : function (v) {
          return v === d || r(v, d, g);
        };
  }
  return ((pm = o), pm);
}
var mm, U4;
function Sd() {
  if (U4) return mm;
  U4 = 1;
  var r = to(),
    c = no(),
    u = '[object Symbol]';
  function o(d) {
    return typeof d == 'symbol' || (c(d) && r(d) == u);
  }
  return ((mm = o), mm);
}
var ym, N4;
function Ty() {
  if (N4) return ym;
  N4 = 1;
  var r = Bi(),
    c = Sd(),
    u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    o = /^\w*$/;
  function d(g, v) {
    if (r(g)) return !1;
    var y = typeof g;
    return y == 'number' || y == 'symbol' || y == 'boolean' || g == null || c(g)
      ? !0
      : o.test(g) || !u.test(g) || (v != null && g in Object(v));
  }
  return ((ym = d), ym);
}
var bm, G4;
function U7() {
  if (G4) return bm;
  G4 = 1;
  var r = Ry(),
    c = 'Expected a function';
  function u(o, d) {
    if (typeof o != 'function' || (d != null && typeof d != 'function'))
      throw new TypeError(c);
    var g = function () {
      var v = arguments,
        y = d ? d.apply(this, v) : v[0],
        _ = g.cache;
      if (_.has(y)) return _.get(y);
      var S = o.apply(this, v);
      return ((g.cache = _.set(y, S) || _), S);
    };
    return ((g.cache = new (u.Cache || r)()), g);
  }
  return ((u.Cache = r), (bm = u), bm);
}
var _m, k4;
function N7() {
  if (k4) return _m;
  k4 = 1;
  var r = U7(),
    c = 500;
  function u(o) {
    var d = r(o, function (v) {
        return (g.size === c && g.clear(), v);
      }),
      g = d.cache;
    return d;
  }
  return ((_m = u), _m);
}
var Sm, Y4;
function G7() {
  if (Y4) return Sm;
  Y4 = 1;
  var r = N7(),
    c =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    u = /\\(\\)?/g,
    o = r(function (d) {
      var g = [];
      return (
        d.charCodeAt(0) === 46 && g.push(''),
        d.replace(c, function (v, y, _, S) {
          g.push(_ ? S.replace(u, '$1') : y || v);
        }),
        g
      );
    });
  return ((Sm = o), Sm);
}
var xm, F4;
function b5() {
  if (F4) return xm;
  F4 = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length, g = Array(d); ++o < d; )
      g[o] = u(c[o], o, c);
    return g;
  }
  return ((xm = r), xm);
}
var Cm, X4;
function k7() {
  if (X4) return Cm;
  X4 = 1;
  var r = dd(),
    c = b5(),
    u = Bi(),
    o = Sd(),
    d = r ? r.prototype : void 0,
    g = d ? d.toString : void 0;
  function v(y) {
    if (typeof y == 'string') return y;
    if (u(y)) return c(y, v) + '';
    if (o(y)) return g ? g.call(y) : '';
    var _ = y + '';
    return _ == '0' && 1 / y == -1 / 0 ? '-0' : _;
  }
  return ((Cm = v), Cm);
}
var Am, K4;
function Y7() {
  if (K4) return Am;
  K4 = 1;
  var r = k7();
  function c(u) {
    return u == null ? '' : r(u);
  }
  return ((Am = c), Am);
}
var Rm, $4;
function xd() {
  if ($4) return Rm;
  $4 = 1;
  var r = Bi(),
    c = Ty(),
    u = G7(),
    o = Y7();
  function d(g, v) {
    return r(g) ? g : c(g, v) ? [g] : u(o(g));
  }
  return ((Rm = d), Rm);
}
var Tm, Z4;
function T0() {
  if (Z4) return Tm;
  Z4 = 1;
  var r = Sd();
  function c(u) {
    if (typeof u == 'string' || r(u)) return u;
    var o = u + '';
    return o == '0' && 1 / u == -1 / 0 ? '-0' : o;
  }
  return ((Tm = c), Tm);
}
var Em, Q4;
function Ey() {
  if (Q4) return Em;
  Q4 = 1;
  var r = xd(),
    c = T0();
  function u(o, d) {
    d = r(d, o);
    for (var g = 0, v = d.length; o != null && g < v; ) o = o[c(d[g++])];
    return g && g == v ? o : void 0;
  }
  return ((Em = u), Em);
}
var wm, V4;
function F7() {
  if (V4) return wm;
  V4 = 1;
  var r = Ey();
  function c(u, o, d) {
    var g = u == null ? void 0 : r(u, o);
    return g === void 0 ? d : g;
  }
  return ((wm = c), wm);
}
var Om, I4;
function X7() {
  if (I4) return Om;
  I4 = 1;
  function r(c, u) {
    return c != null && u in Object(c);
  }
  return ((Om = r), Om);
}
var Mm, J4;
function K7() {
  if (J4) return Mm;
  J4 = 1;
  var r = xd(),
    c = l5(),
    u = Bi(),
    o = pd(),
    d = Sy(),
    g = T0();
  function v(y, _, S) {
    _ = r(_, y);
    for (var E = -1, T = _.length, q = !1; ++E < T; ) {
      var B = g(_[E]);
      if (!(q = y != null && S(y, B))) break;
      y = y[B];
    }
    return q || ++E != T
      ? q
      : ((T = y == null ? 0 : y.length),
        !!T && d(T) && o(B, T) && (u(y) || c(y)));
  }
  return ((Mm = v), Mm);
}
var zm, W4;
function $7() {
  if (W4) return zm;
  W4 = 1;
  var r = X7(),
    c = K7();
  function u(o, d) {
    return o != null && c(o, d, r);
  }
  return ((zm = u), zm);
}
var jm, P4;
function Z7() {
  if (P4) return jm;
  P4 = 1;
  var r = p5(),
    c = F7(),
    u = $7(),
    o = Ty(),
    d = m5(),
    g = y5(),
    v = T0(),
    y = 1,
    _ = 2;
  function S(E, T) {
    return o(E) && d(T)
      ? g(v(E), T)
      : function (q) {
          var B = c(q, E);
          return B === void 0 && B === T ? u(q, E) : r(T, B, y | _);
        };
  }
  return ((jm = S), jm);
}
var Dm, e8;
function Q7() {
  if (e8) return Dm;
  e8 = 1;
  function r(c) {
    return function (u) {
      return u == null ? void 0 : u[c];
    };
  }
  return ((Dm = r), Dm);
}
var qm, t8;
function V7() {
  if (t8) return qm;
  t8 = 1;
  var r = Ey();
  function c(u) {
    return function (o) {
      return r(o, u);
    };
  }
  return ((qm = c), qm);
}
var Lm, n8;
function I7() {
  if (n8) return Lm;
  n8 = 1;
  var r = Q7(),
    c = V7(),
    u = Ty(),
    o = T0();
  function d(g) {
    return u(g) ? r(o(g)) : c(g);
  }
  return ((Lm = d), Lm);
}
var Bm, a8;
function _5() {
  if (a8) return Bm;
  a8 = 1;
  var r = H7(),
    c = Z7(),
    u = _y(),
    o = Bi(),
    d = I7();
  function g(v) {
    return typeof v == 'function'
      ? v
      : v == null
        ? u
        : typeof v == 'object'
          ? o(v)
            ? c(v[0], v[1])
            : r(v)
          : d(v);
  }
  return ((Bm = g), Bm);
}
var Hm, r8;
function J7() {
  if (r8) return Hm;
  r8 = 1;
  var r = 'Expected a function';
  function c(u) {
    if (typeof u != 'function') throw new TypeError(r);
    return function () {
      var o = arguments;
      switch (o.length) {
        case 0:
          return !u.call(this);
        case 1:
          return !u.call(this, o[0]);
        case 2:
          return !u.call(this, o[0], o[1]);
        case 3:
          return !u.call(this, o[0], o[1], o[2]);
      }
      return !u.apply(this, o);
    };
  }
  return ((Hm = c), Hm);
}
var Um, l8;
function W7() {
  if (l8) return Um;
  l8 = 1;
  var r = by(),
    c = xd(),
    u = pd(),
    o = Dl(),
    d = T0();
  function g(v, y, _, S) {
    if (!o(v)) return v;
    y = c(y, v);
    for (var E = -1, T = y.length, q = T - 1, B = v; B != null && ++E < T; ) {
      var N = d(y[E]),
        X = _;
      if (N === '__proto__' || N === 'constructor' || N === 'prototype')
        return v;
      if (E != q) {
        var Q = B[N];
        ((X = S ? S(Q, N, B) : void 0),
          X === void 0 && (X = o(Q) ? Q : u(y[E + 1]) ? [] : {}));
      }
      (r(B, N, X), (B = B[N]));
    }
    return v;
  }
  return ((Um = g), Um);
}
var Nm, i8;
function P7() {
  if (i8) return Nm;
  i8 = 1;
  var r = Ey(),
    c = W7(),
    u = xd();
  function o(d, g, v) {
    for (var y = -1, _ = g.length, S = {}; ++y < _; ) {
      var E = g[y],
        T = r(d, E);
      v(T, E) && c(S, u(E, d), T);
    }
    return S;
  }
  return ((Nm = o), Nm);
}
var Gm, u8;
function ex() {
  if (u8) return Gm;
  u8 = 1;
  var r = f5(),
    c = r(Object.getPrototypeOf, Object);
  return ((Gm = c), Gm);
}
var km, c8;
function tx() {
  if (c8) return km;
  c8 = 1;
  var r = h5(),
    c = ex(),
    u = v5(),
    o = g5(),
    d = Object.getOwnPropertySymbols,
    g = d
      ? function (v) {
          for (var y = []; v; ) (r(y, u(v)), (v = c(v)));
          return y;
        }
      : o;
  return ((km = g), km);
}
var Ym, f8;
function nx() {
  if (f8) return Ym;
  f8 = 1;
  function r(c) {
    var u = [];
    if (c != null) for (var o in Object(c)) u.push(o);
    return u;
  }
  return ((Ym = r), Ym);
}
var Fm, o8;
function ax() {
  if (o8) return Fm;
  o8 = 1;
  var r = Dl(),
    c = xy(),
    u = nx(),
    o = Object.prototype,
    d = o.hasOwnProperty;
  function g(v) {
    if (!r(v)) return u(v);
    var y = c(v),
      _ = [];
    for (var S in v) (S == 'constructor' && (y || !d.call(v, S))) || _.push(S);
    return _;
  }
  return ((Fm = g), Fm);
}
var Xm, s8;
function rx() {
  if (s8) return Xm;
  s8 = 1;
  var r = c5(),
    c = ax(),
    u = vd();
  function o(d) {
    return u(d) ? r(d, !0) : c(d);
  }
  return ((Xm = o), Xm);
}
var Km, h8;
function lx() {
  if (h8) return Km;
  h8 = 1;
  var r = d5(),
    c = tx(),
    u = rx();
  function o(d) {
    return r(d, u, c);
  }
  return ((Km = o), Km);
}
var $m, d8;
function ix() {
  if (d8) return $m;
  d8 = 1;
  var r = b5(),
    c = _5(),
    u = P7(),
    o = lx();
  function d(g, v) {
    if (g == null) return {};
    var y = r(o(g), function (_) {
      return [_];
    });
    return (
      (v = c(v)),
      u(g, y, function (_, S) {
        return v(_, S[0]);
      })
    );
  }
  return (($m = d), $m);
}
var Zm, g8;
function ux() {
  if (g8) return Zm;
  g8 = 1;
  var r = _5(),
    c = J7(),
    u = ix();
  function o(d, g) {
    return u(d, c(r(g)));
  }
  return ((Zm = o), Zm);
}
var cx = ux();
const fx = C0(cx);
var Qm, v8;
function ox() {
  if (v8) return Qm;
  v8 = 1;
  var r = to(),
    c = no(),
    u = '[object Number]';
  function o(d) {
    return typeof d == 'number' || (c(d) && r(d) == u);
  }
  return ((Qm = o), Qm);
}
var Vm, p8;
function sx() {
  if (p8) return Vm;
  p8 = 1;
  var r = ox();
  function c(u) {
    return r(u) && u != +u;
  }
  return ((Vm = c), Vm);
}
var hx = sx();
const dx = C0(hx);
var Im, m8;
function gx() {
  if (m8) return Im;
  m8 = 1;
  function r(c) {
    return c == null;
  }
  return ((Im = r), Im);
}
var vx = gx();
const px = C0(vx);
var Jm, y8;
function mx() {
  if (y8) return Jm;
  y8 = 1;
  var r = Pr(),
    c = function () {
      return r.Date.now();
    };
  return ((Jm = c), Jm);
}
var Wm, b8;
function yx() {
  if (b8) return Wm;
  b8 = 1;
  var r = /\s/;
  function c(u) {
    for (var o = u.length; o-- && r.test(u.charAt(o)); );
    return o;
  }
  return ((Wm = c), Wm);
}
var Pm, _8;
function bx() {
  if (_8) return Pm;
  _8 = 1;
  var r = yx(),
    c = /^\s+/;
  function u(o) {
    return o && o.slice(0, r(o) + 1).replace(c, '');
  }
  return ((Pm = u), Pm);
}
var ey, S8;
function _x() {
  if (S8) return ey;
  S8 = 1;
  var r = bx(),
    c = Dl(),
    u = Sd(),
    o = NaN,
    d = /^[-+]0x[0-9a-f]+$/i,
    g = /^0b[01]+$/i,
    v = /^0o[0-7]+$/i,
    y = parseInt;
  function _(S) {
    if (typeof S == 'number') return S;
    if (u(S)) return o;
    if (c(S)) {
      var E = typeof S.valueOf == 'function' ? S.valueOf() : S;
      S = c(E) ? E + '' : E;
    }
    if (typeof S != 'string') return S === 0 ? S : +S;
    S = r(S);
    var T = g.test(S);
    return T || v.test(S) ? y(S.slice(2), T ? 2 : 8) : d.test(S) ? o : +S;
  }
  return ((ey = _), ey);
}
var ty, x8;
function Sx() {
  if (x8) return ty;
  x8 = 1;
  var r = Dl(),
    c = mx(),
    u = _x(),
    o = 'Expected a function',
    d = Math.max,
    g = Math.min;
  function v(y, _, S) {
    var E,
      T,
      q,
      B,
      N,
      X,
      Q = 0,
      I = !1,
      $ = !1,
      ue = !0;
    if (typeof y != 'function') throw new TypeError(o);
    ((_ = u(_) || 0),
      r(S) &&
        ((I = !!S.leading),
        ($ = 'maxWait' in S),
        (q = $ ? d(u(S.maxWait) || 0, _) : q),
        (ue = 'trailing' in S ? !!S.trailing : ue)));
    function V(Ae) {
      var ut = E,
        ct = T;
      return ((E = T = void 0), (Q = Ae), (B = y.apply(ct, ut)), B);
    }
    function fe(Ae) {
      return ((Q = Ae), (N = setTimeout(pe, _)), I ? V(Ae) : B);
    }
    function W(Ae) {
      var ut = Ae - X,
        ct = Ae - Q,
        J = _ - ut;
      return $ ? g(J, q - ct) : J;
    }
    function k(Ae) {
      var ut = Ae - X,
        ct = Ae - Q;
      return X === void 0 || ut >= _ || ut < 0 || ($ && ct >= q);
    }
    function pe() {
      var Ae = c();
      if (k(Ae)) return Se(Ae);
      N = setTimeout(pe, W(Ae));
    }
    function Se(Ae) {
      return ((N = void 0), ue && E ? V(Ae) : ((E = T = void 0), B));
    }
    function Ce() {
      (N !== void 0 && clearTimeout(N), (Q = 0), (E = X = T = N = void 0));
    }
    function oe() {
      return N === void 0 ? B : Se(c());
    }
    function Ue() {
      var Ae = c(),
        ut = k(Ae);
      if (((E = arguments), (T = this), (X = Ae), ut)) {
        if (N === void 0) return fe(X);
        if ($) return (clearTimeout(N), (N = setTimeout(pe, _)), V(X));
      }
      return (N === void 0 && (N = setTimeout(pe, _)), B);
    }
    return ((Ue.cancel = Ce), (Ue.flush = oe), Ue);
  }
  return ((ty = v), ty);
}
var ny, C8;
function xx() {
  if (C8) return ny;
  C8 = 1;
  var r = Sx(),
    c = Dl(),
    u = 'Expected a function';
  function o(d, g, v) {
    var y = !0,
      _ = !0;
    if (typeof d != 'function') throw new TypeError(u);
    return (
      c(v) &&
        ((y = 'leading' in v ? !!v.leading : y),
        (_ = 'trailing' in v ? !!v.trailing : _)),
      r(d, g, { leading: y, maxWait: g, trailing: _ })
    );
  }
  return ((ny = o), ny);
}
var Cx = xx();
const Ax = C0(Cx),
  Rx = () => navigator.clipboard.readText().catch((r) => (console.log(r), ''));
function Tx(r, c, u) {
  const o = ((r.hue - 180) * Math.PI) / 180,
    d = (r.saturation / 100) * u;
  return { x: c.x + d * Math.cos(o), y: c.y + d * Math.sin(o) };
}
function Ex() {
  const r = navigator.userAgent;
  return /Edg/i.test(r)
    ? 'edge'
    : /OPR|Opera/i.test(r)
      ? 'opera'
      : /CriOS/i.test(r)
        ? 'chrome-ios'
        : /FxiOS/i.test(r)
          ? 'firefox-ios'
          : /Chrome/i.test(r)
            ? 'chrome'
            : /Firefox/i.test(r)
              ? 'firefox'
              : /Safari/i.test(r)
                ? 'safari'
                : 'unknown';
}
const tt = {
    Logs: on,
    flow: y9,
    newId: b9,
    getBetweenRange: _9,
    round: S9,
    isNaN: dx,
    isNil: px,
    omitBy: fx,
    throttle: Ax,
    assign: Q9,
    readClipboard: Rx,
    hslToCoordinates: Tx,
    getBrowser: Ex,
  },
  wx = (r) => {
    const c = D.useRef(null),
      u = D.useRef(null),
      o = D.useMemo(() => tt.newId(), []),
      d = D.useMemo(() => tt.newId(), []),
      g = D.useCallback(
        () => ({
          flex: '1 0 auto',
          flexDirection: 'column',
          height: '100%',
          touchAction: 'none',
          width: '100%',
          minWidth: `${r.minWidth}px`,
          margin: r.margin ? r.margin : 'unset',
        }),
        [r.minWidth, r.margin],
      ),
      v = D.useCallback(
        (S) => ({
          flex: '1 0 auto',
          pointerEvents: 'none',
          touchAction: 'none',
          fontSize: `${S.textSize.small}rem`,
          userSelect: 'none',
          border: '1px solid transparent',
          textAlign: r.labelAlign ? r.labelAlign : 'center',
          borderRight: 'none',
          borderRadius: '3px',
          fontWeight: 'bold',
          cursor: 'default',
          padding: `${S.padding.small}px 0px`,
          paddingLeft: '5px',
          background: r.highlight ? r.highlight : S.highlight.raw,
          color: r.text || S.text.raw,
          ...(r.disableLeftRadius
            ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
            : {}),
          ...(r.disableRightRadius
            ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
            : {}),
          '&:focus': { outline: 'none', boxShadow: 'none' },
        }),
        [r.highlight, r.disableLeftRadius, r.disableRightRadius, r.labelAlign],
      ),
      y = D.useCallback(
        (S) => ({
          flex: '1 1 auto',
          width: '100%',
          fontSize: `${S.textSize.small}rem`,
          fontWeight: 'bold',
          background: 'transparent',
          touchAction: 'none',
          textAlign: r.textAlign ? r.textAlign : 'center',
          boxShadow: 'none',
          outline: 'none',
          border: '1px solid transparent',
          borderLeft: 'none',
          padding: `${S.padding.small}px 0px`,
          paddingLeft: '5px',
          borderRadius: '3px',
          color: r.text || S.text.raw,
          ...(r.disableLeftRadius
            ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
            : {}),
          ...(r.disableRightRadius
            ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
            : {}),
          appearance: 'none',
          '-webkit-appearance': 'none',
          '-moz-appearence': 'none',
          '&:disabled': {
            background: `${r.color} !important`,
            cursor: 'default',
          },
          '&::-webkit-outer-spin-button': {
            margin: 0,
            appearance: 'none',
            '-webkit-appearance': 'none',
          },
          '&::-webkit-inner-spin-button': {
            margin: 0,
            appearance: 'none',
            '-webkit-appearance': 'none',
          },
          '&:-internal-autofill-selected': {
            background: r.highlight ? r.highlight : S.highlight.raw,
          },
          '&:hover': {
            background: r.highlight ? r.highlight : S.highlight.raw,
          },
          '&:focus': {
            background: r.highlight ? r.highlight : S.highlight.raw,
            outline: 'none',
            boxShadow: 'none',
          },
          '&:focus-visible': {
            background: r.highlight ? r.highlight : S.highlight.raw,
            outline: 'none',
            boxShadow: 'none',
          },
          '&:active': {
            background: r.highlight ? r.highlight : S.highlight.raw,
          },
        }),
        [r.highlight, r.disableLeftRadius, r.disableRightRadius, r.textAlign],
      ),
      _ = D.useCallback(
        (S) => {
          r.onChange &&
            r.onChange(
              S.target.value.length === 0
                ? void 0
                : r.type === 'number'
                  ? +(S.target.value || 0)
                  : S.target.value || '',
            );
        },
        [r],
      );
    return (
      D.useEffect(function () {
        const E = c.current,
          T = u.current;
        if (E === null || T === null) return;
        const q = (B) => {
          (B.preventDefault(), T.blur(), E.blur());
        };
        return (
          T.addEventListener('wheel', q, { passive: !1 }),
          E.addEventListener('wheel', q, { passive: !1 }),
          () => {
            (T.removeEventListener('wheel', q),
              E.removeEventListener('wheel', q));
          }
        );
      }, []),
      {
        id: d,
        labelId: o,
        labelRef: c,
        inputRef: u,
        props: r,
        onChange: _,
        labelStyle: v,
        inputStyle: y,
        containerStyle: g,
      }
    );
  },
  ya = A0((r) => {
    const {
      onChange: c,
      id: u,
      labelId: o,
      labelStyle: d,
      inputStyle: g,
      containerStyle: v,
      inputRef: y,
      labelRef: _,
    } = wx(r);
    return R.jsxs(be, {
      withStyle: v,
      children: [
        r.label &&
          R.jsx(be, {
            ref: _,
            id: o,
            as: 'input',
            aria: { 'aria-label': 'Label' },
            type: 'text',
            value: r.label,
            autoComplete: 'off',
            disabled: !0,
            withStyle: d,
          }),
        R.jsxs(be, {
          children: [
            R.jsx(be, {
              ref: y,
              as: 'input',
              id: u,
              type: r.type,
              value: r.value === void 0 || r.value === null ? '' : r.value,
              autoComplete: 'off',
              autoCorrect: 'off',
              min: r.min,
              max: r.max,
              aria: { 'aria-label': 'Value' },
              onChange: c,
              withStyle: g,
              disabled: r.disabled,
            }),
            r.children && R.jsx(be, { children: r.children }),
          ],
        }),
      ],
    });
  }),
  S5 = (r) => (typeof r == 'string' ? { type: 'HEX', raw: r } : r),
  wy = (r) => {
    const c =
      '#' +
      (16777216 + (r.red << 16) + (r.green << 8) + r.blue)
        .toString(16)
        .slice(1)
        .toUpperCase();
    return S5(c);
  },
  Cd = (r) => {
    const c = (
        (r.raw || '').length <= 4
          ? r.raw
              .split('')
              .map((_) => _ + _)
              .join('')
              .replace('#', '')
          : r.raw
      ).replace('#', ''),
      u = c.length >= 7,
      o = parseInt(c.slice(0, 2), 16),
      d = parseInt(c.slice(2, 4), 16),
      g = parseInt(c.slice(4, 6), 16),
      v = tt.round(parseInt(c.slice(6, 8) || '', 16) / 255, 1),
      y = `rgba(${o}, ${d}, ${g}, ${v})`;
    return {
      type: 'RGBA',
      red: o,
      green: d,
      blue: g,
      raw: y,
      alpha: u ? v : 1,
    };
  },
  Oy = (r) => {
    const c = Cd(r),
      u = `rgb(${c.red}, ${c.green}, ${c.blue})`;
    return { type: 'RGB', red: c.red, green: c.green, blue: c.blue, raw: u };
  },
  Ox = (r, c, u, o, d) => {
    let g = 0;
    if (c !== 0)
      switch (r) {
        case u:
          g = (((o - d) / c) % 6) * 60;
          break;
        case o:
          g = ((d - u) / c + 2) * 60;
          break;
        case d:
          g = ((u - o) / c + 4) * 60;
          break;
      }
    return g < 0 ? Math.round((g += 360)) : Math.round(g);
  },
  Mx = ({ red: r, green: c, blue: u }) => {
    const o = r / 255,
      d = c / 255,
      g = u / 255;
    return {
      type: 'RGB',
      red: o,
      green: d,
      blue: g,
      raw: `rgb(${o}, ${d}, ${g})`,
    };
  },
  E0 = (r) => {
    const { red: c, green: u, blue: o } = Mx(r),
      d = Math.max(c, u, o),
      g = Math.min(c, u, o),
      v = d - g,
      y = Ox(d, v, c, u, o),
      _ = tt.round(((d + g) / 2) * 100, 2),
      S =
        v === 0
          ? 0
          : tt.round((v / (1 - Math.abs(2 * (_ / 100) - 1))) * 100, 2),
      E = `hsl(${y}, ${S}%, ${_}%)`;
    return { type: 'HSL', hue: y, saturation: S, lightness: _, raw: E };
  },
  x5 = (r) => E0(Oy(r)),
  My = (r) => E0({ ...r }),
  zy = (r) => {
    const c = My(r),
      u = r.alpha > 1 ? r.alpha / 100 : r.alpha,
      o = `hsla(${c.hue}, ${c.saturation}%, ${c.lightness}%, ${u})`;
    return {
      type: 'HSLA',
      hue: c.hue,
      saturation: c.saturation,
      lightness: c.lightness,
      alpha: u,
      raw: o,
    };
  },
  C5 = (r) => zy(Cd(r)),
  A5 = (r) => ({
    type: 'RGBA',
    red: r.red,
    green: r.green,
    blue: r.blue,
    raw: `rgba(${r.red}, ${r.green}, ${r.blue}, 1)`,
    alpha: 1,
  }),
  R5 = (r) => {
    const c = E0(r);
    return {
      type: 'HSLA',
      hue: c.hue,
      saturation: c.saturation,
      lightness: c.lightness,
      alpha: 1,
      raw: `hsla(${c.hue}, ${c.saturation}%, ${c.lightness}%, 1)`,
    };
  },
  jy = (r) => {
    const c =
        '#' +
        (16777216 + (r.red << 16) + (r.green << 8) + r.blue)
          .toString(16)
          .slice(1)
          .toUpperCase(),
      u = Math.round(255 * r.alpha)
        .toString(16)
        .slice(-2)
        .padStart(2, '0')
        .toUpperCase();
    return { type: 'HEX', raw: `${c}${u}` };
  },
  T5 = (r) => ({
    type: 'RGB',
    red: r.red,
    green: r.green,
    blue: r.blue,
    raw: `rgb(${r.red}, ${r.green}, ${r.blue})`,
  }),
  zx = (r, c, u, o) => {
    const {
      red: d,
      green: g,
      blue: v,
    } = 0 <= r && r < 60
      ? { red: c, green: u, blue: 0 }
      : 60 <= r && r < 120
        ? { red: u, green: c, blue: 0 }
        : 120 <= r && r < 180
          ? { red: 0, green: c, blue: u }
          : 180 <= r && r < 240
            ? { red: 0, green: u, blue: c }
            : 240 <= r && r < 300
              ? { red: u, green: 0, blue: c }
              : 300 <= r && r < 360
                ? { red: c, green: 0, blue: u }
                : { red: 0, green: 0, blue: 0 };
    return {
      red: tt.round((d + o) * 255, 0),
      green: tt.round((g + o) * 255, 0),
      blue: tt.round((v + o) * 255, 0),
    };
  },
  w0 = (r) => {
    const c = r.saturation / 100,
      u = r.lightness / 100,
      o = (1 - Math.abs(2 * u - 1)) * c,
      d = r.hue,
      g = o * (1 - Math.abs(((d / 60) % 2) - 1)),
      v = u - o / 2,
      { red: y, green: _, blue: S } = zx(d, o, g, v);
    return {
      type: 'RGB',
      red: y,
      green: _,
      blue: S,
      raw: `rgb(${y}, ${_}, ${S})`,
    };
  },
  E5 = (r) => wy(w0(r)),
  w5 = (r) => {
    const c = w0(r),
      u = `rgba(${c.red}, ${c.green}, ${c.blue}, 1)`;
    return { ...c, type: 'RGBA', raw: u, alpha: 1 };
  },
  O5 = (r) => {
    const c = `hsla(${r.hue}, ${r.saturation}%, ${r.lightness}%, 1)`;
    return {
      type: 'HSLA',
      hue: r.hue,
      saturation: r.saturation,
      lightness: r.lightness,
      alpha: 1,
      raw: c,
    };
  },
  Dy = (r) => w0(r),
  qy = (r) => {
    const c = Dy(r),
      u = r.alpha > 1 ? r.alpha / 100 : r.alpha,
      o = `rgba(${c.red}, ${c.green}, ${c.blue}, ${u})`;
    return {
      type: 'RGBA',
      red: c.red,
      green: c.green,
      blue: c.blue,
      alpha: u,
      raw: o,
    };
  },
  M5 = (r) => jy(qy(r)),
  z5 = (r) => {
    const c = `hsl(${r.hue}, ${r.saturation}%, ${r.lightness}%)`;
    return {
      type: 'HSL',
      hue: r.hue,
      saturation: r.saturation,
      lightness: r.lightness,
      raw: c,
    };
  },
  jx = {
    HEX: { HEX: (r) => r, RGB: Oy, RGBA: Cd, HSL: x5, HSLA: C5 },
    RGB: { HEX: wy, RGB: (r) => r, RGBA: A5, HSL: E0, HSLA: R5 },
    RGBA: { HEX: jy, RGB: T5, RGBA: (r) => r, HSL: My, HSLA: zy },
    HSL: { HEX: E5, RGB: w0, RGBA: w5, HSL: (r) => r, HSLA: O5 },
    HSLA: { HEX: M5, RGB: Dy, RGBA: qy, HSL: z5, HSLA: (r) => r },
  },
  Wf = (r, c) => jx[r.type][c](r),
  ad = () => ({ type: 'INVALID', raw: null }),
  Dx = (r) => {
    if (!r || r.length <= 3) return ad();
    const c = [',', ' '],
      u = r.toLowerCase(),
      o = /^#?([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/.test(r),
      d =
        u.includes('rgb') ||
        u.includes('rgba') ||
        c.flatMap((_) => u.split(_)).some((_) => _.includes('%') === !1) === !1,
      g =
        u.includes('hsl') ||
        c.flatMap((_) => u.split(_)).some((_) => _.includes('%'));
    if (o === !1 && d === !1 && g === !1) return ad();
    const v = u
      .replace('#', '')
      .replace('rgba', '')
      .replace('rgb', '')
      .replace('hsl', '')
      .replace('hsla', '')
      .replace('(', '')
      .replace(')', '');
    if (o) return { type: 'HEX', raw: `#${v.toUpperCase()}` };
    const y = c
      .map((_) => v.split(_))
      .filter((_) => _.length > 1)[0]
      .map((_) => +_.replace(/[^0-9.]+/g, ''));
    if (d) {
      const [_, S, E, T] = y,
        q = T !== void 0,
        B = _ || 0,
        N = S || 0,
        X = E || 0,
        Q = T || 1;
      return {
        type: q ? 'RGBA' : 'RGB',
        red: B,
        green: N,
        blue: X,
        ...(q
          ? { alpha: Q, raw: `rgba(${B}, ${N}, ${X}, ${Q})` }
          : { raw: `rgb(${B}, ${N}, ${X})` }),
      };
    } else {
      const [_, S, E, T] = y,
        q = T !== void 0,
        B = _ || 0,
        N = S || 0,
        X = E || 0,
        Q = T || 1;
      return {
        type: q ? 'HSLA' : 'HSL',
        hue: B,
        saturation: N,
        lightness: X,
        ...(q
          ? { alpha: Q, raw: `hsla(${B}, ${N}%, ${X}%, ${Q})` }
          : { raw: `hsl(${B}, ${N}%,  ${X}%)` }),
      };
    }
  },
  qx = (r) => {
    const c = r.total > 0.5,
      u = (v) =>
        c
          ? tt.getBetweenRange(Math.round(v * 55), 0, 55)
          : tt.getBetweenRange(Math.round(v * 225), 225, 245),
      o = u(r.red),
      d = u(r.green),
      g = u(r.blue);
    return {
      type: 'RGBA',
      red: o,
      green: d,
      blue: g,
      alpha: 1,
      raw: `rgba(${o}, ${d}, ${g}, 1)`,
    };
  },
  Lx = (r, c, u) => {
    const o = c.total > 0.5,
      d = Wf(r, 'RGBA'),
      g = o ? d.red * 0.6 : d.red * 0.8,
      v = o ? d.green * 0.6 : d.green * 0.8,
      y = o ? d.blue * 0.6 : d.blue * 0.8;
    return Wf(
      {
        type: 'RGBA',
        red: g,
        green: v,
        blue: y,
        alpha: d.alpha,
        raw: `rgba(${g}, ${v}, ${y}, ${d.alpha})`,
      },
      u,
    );
  },
  Bx = (r, c, u) => {
    const o = c.total > 0.5,
      d = Wf(r, 'RGBA'),
      g = o ? d.red * 0.85 : d.red * 0.6,
      v = o ? d.green * 0.85 : d.green * 0.6,
      y = o ? d.blue * 0.85 : d.blue * 0.6;
    return Wf(
      {
        type: 'RGBA',
        red: g,
        green: v,
        blue: y,
        alpha: 0.2,
        raw: `rgba(${g}, ${v}, ${y}, 0.2)`,
      },
      u,
    );
  },
  Hx = (r) => {
    const c = r.raw
      ? r.raw
      : `hsl(${r.hue}, ${r.saturation}%, ${r.lightness}%)`;
    return {
      type: 'HSL',
      hue: r.hue,
      lightness: r.lightness,
      saturation: r.saturation,
      raw: c,
    };
  },
  Ux = (r, c, u) => {
    const o = `hsl(${r}, ${c}%, ${u}%)`;
    return { type: 'HSL', hue: r, lightness: u, saturation: c, raw: o };
  },
  Nx = (r) => {
    const [c, u, o] = r.split(',').map((d) => +d.replace(/\D+/g, ''));
    return {
      type: 'HSL',
      hue: c,
      saturation: u,
      lightness: o,
      raw: `hsl(${c}, ${u}%, ${o}%)`,
    };
  },
  Gx = (...r) =>
    typeof r[0] == 'object'
      ? Hx(r[0])
      : typeof r[0] == 'string'
        ? Nx(r[0])
        : Ux(r[0] || 0, r[1] || 0, r[2] || 0),
  kx = (r) => {
    const c = r.alpha > 1 ? r.alpha / 100 : r.alpha,
      u = r.raw
        ? r.str
        : `hsla(${r.hue}, ${r.saturation}%, ${r.lightness}%, ${c})`;
    return {
      type: 'HSLA',
      hue: r.hue,
      saturation: r.saturation,
      lightness: r.lightness,
      alpha: c,
      raw: u,
    };
  },
  Yx = (r, c, u, o) => {
    const d = o > 1 ? o / 100 : o,
      g = `hsla(${r}, ${c}%, ${u}%, ${d})`;
    return {
      type: 'HSLA',
      hue: r,
      saturation: c,
      lightness: u,
      alpha: d,
      raw: g,
    };
  },
  Fx = (r) => {
    const [c, u, o, d] = r.split(',').map((v) => +v.replace(/\D+/g, '')),
      g = d > 1 ? d / 100 : d;
    return {
      type: 'HSLA',
      hue: c,
      saturation: u,
      lightness: o,
      alpha: g,
      raw: `hsla(${c}, ${u}%, ${o}%, ${g})`,
    };
  },
  Xx = (...r) =>
    typeof r[0] == 'object'
      ? kx(r[0])
      : typeof r == 'string'
        ? Fx(r[0])
        : Yx(r[0] || 0, r[1] || 0, r[2] || 0, r[3] || 1),
  Kx = (r) => {
    const c = r.raw ? r.raw : `rgb(${r.red}, ${r.green}, ${r.blue})`;
    return { ...r, type: 'RGB', raw: c };
  },
  $x = (r, c, u) => {
    const o = `rgb(${r}, ${c}, ${u})`;
    return { type: 'RGB', red: r, green: c, blue: u, raw: o };
  },
  Zx = (r) => {
    const [c, u, o] = r.split(',').map((d) => +d.replace(/\D+/g, ''));
    return {
      type: 'RGB',
      red: c || 0,
      green: u || 0,
      blue: o || 0,
      raw: `rgb(${c || 0}, ${u || 0}, ${o || 0})`,
    };
  },
  Qx = (...r) =>
    typeof r[0] == 'object'
      ? Kx(r[0])
      : typeof r[0] == 'string'
        ? Zx(r[0])
        : $x(r[0] || 0, r[1] || 0, r[2] || 0),
  Vx = (r) => {
    const c = r.alpha > 1 ? r.alpha / 100 : r.alpha,
      u = r.raw ? r.raw : `rgba(${r.red}, ${r.green}, ${r.blue}, ${c})`;
    return { ...r, type: 'RGBA', alpha: c, raw: u };
  },
  Ix = (r, c, u, o) => {
    const d = o > 1 ? o / 100 : o,
      g = `rgba(${r}, ${c}, ${u}, ${d})`;
    return { type: 'RGBA', red: r, green: c, blue: u, alpha: d, raw: g };
  },
  Jx = (r) => {
    const [c, u, o, d] = r.split(', ').map((v) => +v.replace(/\D+/g, '')),
      g = d > 1 ? d / 100 : d || 1;
    return {
      type: 'RGBA',
      red: c || 0,
      green: u || 0,
      blue: o || 0,
      alpha: g,
      raw: `rgba(${c || 0}, ${u || 0}, ${o || 0}, ${g})`,
    };
  },
  Wx = (...r) =>
    typeof r[0] == 'object'
      ? Vx(r[0])
      : typeof r[0] == 'string'
        ? Jx(r[0])
        : Ix(r[0] || 0, r[1] || 0, r[2] || 0, r[3]),
  Px = (r, c) => (u, o) => r[o.type]({ prevState: u, props: c }, o.value),
  eC = (r, c) => {
    const u = tt.assign(
      {},
      r,
      tt.omitBy(c, (o) => tt.isNil(o) || tt.isNaN(o)),
    );
    return {
      HSL: (o) => `hsl(${o.hue}, ${o.saturation}%, ${o.lightness}%)`,
      HSLA: (o) =>
        `hsla(${o.hue}, ${o.saturation}%, ${o.lightness}%, ${o.alpha})`,
      RGB: (o) => `rgb(${o.red}, ${o.green}, ${o.blue})`,
      RGBA: (o) => `rgba(${o.red}, ${o.green}, ${o.blue}, ${o.alpha})`,
      HEX: (o) => o.raw,
    }[r.type](u);
  },
  tC = (r, c, u) => {
    const o = r.createShader(c);
    if (o === null) throw new Error('This browser is not supported!');
    if (
      (r.shaderSource(o, u),
      r.compileShader(o),
      r.getShaderParameter(o, r.COMPILE_STATUS))
    )
      return o;
    {
      const d = r.getShaderInfoLog(o);
      throw (r.deleteShader(o), new Error(`Make Shader::: ${d}`));
    }
  },
  nC = (r, c) => {
    const u = r.createFramebuffer();
    return (
      r.bindFramebuffer(r.FRAMEBUFFER, u),
      c &&
        r.framebufferTexture2D(
          r.FRAMEBUFFER,
          r.COLOR_ATTACHMENT0,
          r.TEXTURE_2D,
          c,
          0,
        ),
      u
    );
  },
  aC = (r, c, u) => {
    const o = r.createProgram();
    if (
      (r.attachShader(o, c),
      r.attachShader(o, u),
      r.linkProgram(o),
      r.getProgramParameter(o, r.LINK_STATUS))
    )
      return o;
    {
      const d = r.getProgramInfoLog(o);
      throw (r.deleteProgram(o), new Error(`Wheel: ${d}`));
    }
  },
  rC = (r, c) => {
    const u = r.createTexture();
    return (
      r.bindTexture(r.TEXTURE_2D, u),
      r.texImage2D(
        r.TEXTURE_2D,
        0,
        r.RGBA,
        c,
        c,
        0,
        r.RGBA,
        r.UNSIGNED_BYTE,
        null,
      ),
      r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST),
      r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST),
      r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
      r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
      u
    );
  },
  lC = (r) => {
    const c = Wf(r, 'RGBA'),
      u = (v) => {
        const y = v / 255;
        return y <= 0.03928 ? y / 12.92 : Math.pow((y + 0.055) / 1.055, 2.4);
      },
      o = u(c.red) * 0.2126,
      d = u(c.green) * 0.7152,
      g = u(c.blue) * 0.0722;
    return { red: o, green: d, blue: g, total: o + d + g };
  },
  et = {
    makeReducer: Px,
    makeHexFromRgb: wy,
    makeRgbFromHex: Oy,
    makeRgbaFromHex: Cd,
    makeHslFromHex: x5,
    makeHslaFromHex: C5,
    makeRgbaFromRgb: A5,
    makeHslFromRgb: E0,
    makeHslaFromRgb: R5,
    makeHexFromRgba: jy,
    makeRgbFromRgba: T5,
    makeHslFromRgba: My,
    makeHslaFromRgba: zy,
    makeRgbFromHsl: w0,
    makeHexFromHsl: E5,
    makeRgbaFromHsl: w5,
    makeHslaFromHsl: O5,
    makeRgbFromHsla: Dy,
    makeRgbaFromHsla: qy,
    makeHexFromHsla: M5,
    makeHslFromHsla: z5,
    makeCurrentColorTo: Wf,
    makeColorFromString: Dx,
    makeInvalidColor: ad,
    makeLuminance: lC,
    makeCssColorString: eC,
    makeTextColorFromLuminance: qx,
    makeHex: S5,
    makeHSL: Gx,
    makeHSLA: Xx,
    makeRgb: Qx,
    makeRgba: Wx,
    makeShader: tC,
    makeFrameBuffer: nC,
    makeGlslProgram: aC,
    makeTexture2D: rC,
    makeHighlightFromLuminance: Lx,
    makeShadowFromLuminance: Bx,
  },
  na = {
    getInputOrColor: (r, c, u) => {
      const o = et.makeColorFromString(r),
        d = {
          ifInputIsAColor: (g) => (
            o.type !== 'INVALID' && g(et.makeCurrentColorTo(o, c)),
            d
          ),
          ifInputIsAValue: (g) => {
            const v =
              u === 'string'
                ? (r || '').replace('#', '')
                : +(r || '').replace(/[^0-9.]+/g, '') || 0;
            return (o.type === 'INVALID' && g(v), d);
          },
        };
      return d;
    },
    updateColorObject(r, c) {
      return tt.assign(
        {},
        r,
        tt.omitBy(c, (u) => tt.isNil(u) || tt.isNaN(u)),
      );
    },
  },
  iC = (r) => {
    var _;
    const c = D.useMemo(
        () => [
          'rgba(0, 0, 0, 0.4)',
          'rgba(51, 51, 51, 0.4)',
          'rgba(102, 102, 102, 0.4)',
          'rgba(153, 153, 153, 0.4)',
          'rgba(204, 204, 204, 0.4)',
          'rgba(255, 255, 255, 0.4)',
        ],
        [],
      ),
      u = D.useMemo(
        () => ({
          flexDirection: 'column',
          gap: '10px',
          height: '100%',
          justifyContent: 'center',
        }),
        [],
      ),
      o = D.useCallback(
        (S) => ({
          display: 'block',
          alignSelf: 'flex-end',
          fontSize: `${S.textSize.small}rem`,
          fontWeight: 'bold',
          padding: `${S.padding.big}px`,
          textAlign: 'center',
          borderRadius: '5px',
          userSelect: 'none',
          transition: S.transitions.default,
          animation: '$textTyping 0.3s step-start',
          color: r.text ? r.text : S.text.raw,
        }),
        [],
      ),
      d = (((_ = r.hex) == null ? void 0 : _.raw) || '').replace('#', ''),
      g =
        d.length >= 8 ? tt.round(parseInt(d.substring(6, 8), 16) / 255, 1) : 1,
      v = D.useCallback(
        (S) =>
          na
            .getInputOrColor(S, 'HEX', 'string')
            .ifInputIsAColor((E) => {
              r.onChange && r.onChange(E);
            })
            .ifInputIsAValue((E) => {
              r.onChange && r.onChange({ type: 'HEX', raw: `#${E}` });
            }),
        [r],
      ),
      y = D.useCallback(
        (S) => {
          const E = Math.round(S * 255)
            .toString(16)
            .slice(-2)
            .padStart(2, '0')
            .toUpperCase();
          r.onChange &&
            r.onChange({
              type: 'HEX',
              raw: `#${d.length >= 8 ? d.substring(0, 6) + E : d + E}`,
            });
        },
        [d, r],
      );
    return {
      markerStyle: o,
      containerStyle: u,
      gradient: c,
      value: d,
      onChange: v,
      alpha: g,
      onAlphaChange: y,
    };
  },
  uC = (r) => {
    const {
      gradient: c,
      value: u,
      alpha: o,
      containerStyle: d,
      markerStyle: g,
      onChange: v,
      onAlphaChange: y,
    } = iC(r);
    return R.jsxs(be, {
      withStyle: d,
      children: [
        R.jsxs(be, {
          flex: '0 0 45px',
          children: [
            R.jsx(be, {
              flex: '0 0 35px',
              withStyle: g,
              children: R.jsx('b', { children: '#' }),
            }),
            R.jsx(ya, {
              type: 'text',
              label: 'HEX',
              value: u,
              text: r.text,
              highlight: r.highlight,
              color: `#${u}`,
              onChange: v,
              textAlign: 'left',
              disableLeftRadius: !0,
              disableRightRadius: !0,
            }),
          ],
        }),
        R.jsx(be, {
          flex: '0 0 15px',
          children: R.jsx(O0, {
            max: 1,
            min: 0,
            step: 0.1,
            deg: 90,
            direction: 'horizontal',
            colors: c,
            value: o,
            onChange: y,
          }),
        }),
      ],
    });
  },
  cC = ({ hasAlpha: r, value: c, onChange: u }) => {
    const o = D.useMemo(
        () => [
          'rgba(0, 0, 0, 0.4)',
          'rgba(51, 51, 51, 0.4)',
          'rgba(102, 102, 102, 0.4)',
          'rgba(153, 153, 153, 0.4)',
          'rgba(204, 204, 204, 0.4)',
          'rgba(255, 255, 255, 0.4)',
        ],
        [],
      ),
      d = D.useMemo(
        () => ({
          flexDirection: 'column',
          gap: '10px',
          height: '100%',
          justifyContent: 'center',
        }),
        [],
      ),
      g = D.useCallback(
        (S) =>
          na
            .getInputOrColor(S, r ? 'RGBA' : 'RGB', 'number')
            .ifInputIsAColor((E) => {
              u && u(E);
            })
            .ifInputIsAValue((E) => {
              u &&
                u(
                  na.updateColorObject(c, {
                    red: E,
                    raw: et.makeCssColorString(c, { red: E }),
                  }),
                );
            }),
        [u, r],
      ),
      v = D.useCallback(
        (S) =>
          na
            .getInputOrColor(S, r ? 'RGBA' : 'RGB', 'number')
            .ifInputIsAColor((E) => {
              u && u(E);
            })
            .ifInputIsAValue((E) => {
              u &&
                u(
                  na.updateColorObject(c, {
                    green: E,
                    raw: et.makeCssColorString(c, { green: E }),
                  }),
                );
            }),
        [u, r],
      ),
      y = D.useCallback(
        (S) =>
          na
            .getInputOrColor(S, r ? 'RGBA' : 'RGB', 'number')
            .ifInputIsAColor((E) => {
              u && u(E);
            })
            .ifInputIsAValue((E) => {
              u &&
                u(
                  na.updateColorObject(c, {
                    blue: E,
                    raw: et.makeCssColorString(c, { blue: E }),
                  }),
                );
            }),
        [u, r],
      ),
      _ = D.useCallback(
        (S) => {
          u &&
            r &&
            u(
              na.updateColorObject(c, {
                alpha: S,
                raw: et.makeCssColorString(c, { alpha: S }),
              }),
            );
        },
        [u, r],
      );
    return {
      hasAlpha: r,
      gradient: o,
      containerStyle: d,
      red: (c == null ? void 0 : c.red) || 0,
      green: (c == null ? void 0 : c.green) || 0,
      blue: (c == null ? void 0 : c.blue) || 0,
      alpha: c.alpha === void 0 ? 1 : c.alpha,
      onRedChange: g,
      onGreenChange: v,
      onBlueChange: y,
      onAlphaChange: _,
    };
  },
  A8 = (r) => {
    const {
      red: c,
      green: u,
      blue: o,
      alpha: d,
      gradient: g,
      containerStyle: v,
      onAlphaChange: y,
      onRedChange: _,
      onGreenChange: S,
      onBlueChange: E,
    } = cC(r);
    return R.jsxs(be, {
      withStyle: v,
      children: [
        R.jsxs(be, {
          flex: '0 0 45px',
          children: [
            R.jsx(
              ya,
              {
                type: 'text',
                label: 'RED',
                value: c,
                text: r.text,
                onChange: _,
                highlight: r.highlight,
                disableRightRadius: !0,
                disableLeftRadius: !0,
                min: 0,
                max: 255,
              },
              'red',
            ),
            R.jsx(
              ya,
              {
                type: 'text',
                label: 'GREEN',
                value: u,
                text: r.text,
                onChange: S,
                highlight: r.highlight,
                disableLeftRadius: !0,
                disableRightRadius: !0,
                min: 0,
                max: 255,
              },
              'green',
            ),
            R.jsx(
              ya,
              {
                type: 'text',
                label: 'BLUE',
                value: o,
                text: r.text,
                onChange: E,
                highlight: r.highlight,
                disableRightRadius: !0,
                disableLeftRadius: !0,
                min: 0,
                max: 255,
              },
              'blue',
            ),
          ],
        }),
        r.hasAlpha &&
          R.jsx(be, {
            flex: '0 0 15px',
            children: R.jsx(O0, {
              max: 1,
              min: 0,
              step: 0.1,
              deg: 90,
              direction: 'horizontal',
              colors: g,
              value: d,
              onChange: y,
            }),
          }),
      ],
    });
  },
  fC = (r) => {
    var y, _, S, E, T, q, B, N, X;
    const c = D.useMemo(
        () => [
          'rgba(0, 0, 0, 0.4)',
          'rgba(51, 51, 51, 0.4)',
          'rgba(102, 102, 102, 0.4)',
          'rgba(153, 153, 153, 0.4)',
          'rgba(204, 204, 204, 0.4)',
          'rgba(255, 255, 255, 0.4)',
        ],
        [],
      ),
      u = D.useMemo(
        () => ({
          flexDirection: 'column',
          gap: '10px',
          height: '100%',
          justifyContent: 'center',
        }),
        [],
      ),
      o = D.useCallback(
        (Q) =>
          na
            .getInputOrColor(Q, r.hasAlpha ? 'HSLA' : 'HSL', 'number')
            .ifInputIsAColor((I) => {
              r.onChange && r.onChange(I);
            })
            .ifInputIsAValue((I) => {
              r.onChange &&
                r.onChange(
                  na.updateColorObject(r.value, {
                    hue: I,
                    raw: et.makeCssColorString(r.value, { hue: I }),
                  }),
                );
            }),
        [r],
      ),
      d = D.useCallback(
        (Q) =>
          na
            .getInputOrColor(Q, r.hasAlpha ? 'HSLA' : 'HSL', 'number')
            .ifInputIsAColor((I) => {
              r.onChange && r.onChange(I);
            })
            .ifInputIsAValue((I) => {
              r.onChange &&
                r.onChange(
                  na.updateColorObject(r.value, {
                    saturation: I,
                    raw: et.makeCssColorString(r.value, { saturation: I }),
                  }),
                );
            }),
        [r],
      ),
      g = D.useCallback(
        (Q) =>
          na
            .getInputOrColor(Q, r.hasAlpha ? 'HSLA' : 'HSL', 'number')
            .ifInputIsAColor((I) => {
              r.onChange && r.onChange(I);
            })
            .ifInputIsAValue((I) => {
              r.onChange &&
                r.onChange(
                  na.updateColorObject(r.value, {
                    lightness: I,
                    raw: et.makeCssColorString(r.value, { lightness: I }),
                  }),
                );
            }),
        [r],
      ),
      v = D.useCallback(
        (Q) => {
          r.onChange &&
            r.onChange(
              na.updateColorObject(r.value, {
                alpha: Q,
                raw: et.makeCssColorString(r.value, { alpha: Q }),
              }),
            );
        },
        [r],
      );
    return {
      hasAlpha: r.hasAlpha,
      currentColor: r.hasAlpha
        ? `hsla(${((y = r.value) == null ? void 0 : y.hue) || 0}, ${((_ = r.value) == null ? void 0 : _.saturation) || 0}%, ${((S = r.value) == null ? void 0 : S.lightness) || 0}%, ${r.value.alpha})`
        : `hsl(${((E = r.value) == null ? void 0 : E.hue) || 0}, ${((T = r.value) == null ? void 0 : T.saturation) || 0}%, ${((q = r.value) == null ? void 0 : q.lightness) || 0}%)`,
      hue: ((B = r.value) == null ? void 0 : B.hue) || 0,
      saturation: ((N = r.value) == null ? void 0 : N.saturation) || 0,
      lightness: ((X = r.value) == null ? void 0 : X.lightness) || 0,
      alpha: r.value.alpha === void 0 ? 1 : r.value.alpha,
      onHueChange: o,
      onSaturationChange: d,
      onLightnessChange: g,
      onAlphaChange: v,
      gradient: c,
      containerStyle: u,
    };
  },
  R8 = (r) => {
    const {
      hue: c,
      saturation: u,
      lightness: o,
      alpha: d,
      gradient: g,
      containerStyle: v,
      onHueChange: y,
      onSaturationChange: _,
      onLightnessChange: S,
      onAlphaChange: E,
      currentColor: T,
    } = fC(r);
    return R.jsxs(be, {
      withStyle: v,
      children: [
        R.jsxs(be, {
          flex: '0 0 45px',
          children: [
            R.jsx(ya, {
              type: 'text',
              label: 'HUE',
              value: c,
              text: r.text,
              highlight: r.highlight,
              color: T,
              onChange: y,
              disableLeftRadius: !0,
              disableRightRadius: !0,
              min: 0,
              max: 360,
            }),
            R.jsx(ya, {
              type: 'text',
              label: 'Chroma',
              value: u,
              text: r.text,
              highlight: r.highlight,
              color: T,
              onChange: _,
              disableLeftRadius: !0,
              disableRightRadius: !0,
              min: 0,
              max: 100,
            }),
            R.jsx(ya, {
              type: 'text',
              label: 'Tone',
              value: o,
              text: r.text,
              highlight: r.highlight,
              color: T,
              onChange: S,
              disableLeftRadius: !0,
              disableRightRadius: !0,
              min: 0,
              max: 100,
            }),
          ],
        }),
        r.hasAlpha &&
          R.jsx(be, {
            flex: '0 0 15px',
            children: R.jsx(O0, {
              max: 1,
              min: 0,
              step: 0.1,
              deg: 90,
              direction: 'horizontal',
              colors: g,
              value: d,
              onChange: E,
            }),
          }),
      ],
    });
  },
  oC = ({ value: r, type: c, onChange: u, highlight: o, text: d }) => {
    D.useEffect(
      function () {
        (r == null ? void 0 : r.type) !== c && u(et.makeCurrentColorTo(r, c));
      },
      [c, u, r],
    );
    const g = D.useCallback(
        (S) => {
          u(S);
        },
        [u],
      ),
      v = D.useCallback(
        (S) => {
          u(S);
        },
        [u],
      ),
      y = D.useCallback(
        (S) => {
          u(S);
        },
        [u],
      );
    return {
      input: D.useMemo(
        () =>
          ({
            HEX: R.jsx(
              uC,
              { hex: r, onChange: g, text: d, highlight: o },
              'hex',
            ),
            RGB: R.jsx(
              A8,
              { value: r, onChange: v, hasAlpha: !1, text: d, highlight: o },
              'rgb',
            ),
            RGBA: R.jsx(
              A8,
              { value: r, onChange: v, hasAlpha: !0, text: d, highlight: o },
              'rgba',
            ),
            HSL: R.jsx(
              R8,
              { value: r, onChange: y, hasAlpha: !1, text: d, highlight: o },
              'hsl',
            ),
            HSLA: R.jsx(
              R8,
              { value: r, onChange: y, hasAlpha: !0, text: d, highlight: o },
              'hsl',
            ),
          })[c],
        [r, d, o, g, v, y],
      ),
      value: r,
      onHexInputChange: g,
      onRgbInputChange: v,
      onHslInputChange: y,
    };
  },
  sC = A0((r) => oC(r).input),
  hC = `#version 300 es

precision highp float;

layout(location = 0) in vec4 a_position;
  
void main() {
    gl_Position = a_position;
}`,
  dC = `#version 300 es

precision highp float;
precision highp int;

uniform vec2 u_resolution;
uniform float u_darkness;
out vec4 paint;

vec3 hslToRgb(vec3 hsl) {
    vec3 rgb = clamp(
        abs(mod(hsl.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0,
        0.0,
        1.0
    ); 

    return hsl.z + hsl.y * (rgb - 0.5) * (1.0 - abs(2.0 * hsl.z - 1.0));
}

void main() {
    vec2 position = (gl_FragCoord.xy / u_resolution) * 2.0 - 1.0;
    position.x *= u_resolution.x / u_resolution.y;
    float radius = length(position);
    float angle = atan(position.y, position.x);
    float hue = angle / 6.28318530718 + 0.5;
    float saturation = radius;
    vec3 rgb = hslToRgb(vec3(hue, saturation, u_darkness));
    float circle = 1.0;
    float smoothing = 0.01;
    float mask = 1.0 - smoothstep(circle - smoothing, circle + smoothing, radius);
    paint = mix(vec4(0.0, 0.0, 0.0, 0.0), vec4(rgb, 1.0), mask);
}`,
  gC = `#version 300 es

precision highp float;
precision highp sampler2D;

uniform vec2 u_pickers[#PICKERS_LENGTH];
uniform int u_pickers_count;
uniform vec2 u_resolution;
uniform sampler2D u_previous;
uniform int u_picker_selected_index;
uniform bool u_free_move;


out vec4 paint;

struct Picker {
    vec4 overlay;
    float border;
    float opacity;
};

Picker newPicker(vec4 overlay, float border) {
    Picker picker;

    picker.overlay = overlay;
    picker.border = border;
    picker.opacity = 0.35;

    return picker;
}

float drawPizza(float border, float projection, vec2 location, vec2 center) {
    float PICKER_CIRCLE = 8.0;
    float PICKER_BORDER = 3.0;

    if (projection < 0.0) {
        float pickerRadius = dot(location, location);
        float inner = (PICKER_CIRCLE - PICKER_BORDER) * (PICKER_CIRCLE - PICKER_BORDER);
        float outer = (PICKER_CIRCLE + PICKER_BORDER) * (PICKER_CIRCLE + PICKER_BORDER);
        float current = smoothstep(inner, inner + (PICKER_BORDER * 0.3), pickerRadius) -
                smoothstep(outer - (PICKER_BORDER * 0.3), outer, pickerRadius);


        return max(border, current);
    } else {
        vec2 direction = normalize(center);
        float d = length(center);
        float projection = dot(location, direction);
        float projClamped = clamp(projection, 0.0, d);
        float side = length(location - projClamped * direction);
        float t = projClamped / d;
        float invT = 1.0 - t;
        float maxRadius = PICKER_CIRCLE + PICKER_BORDER;
        float radius = maxRadius * invT;
        float feather = PICKER_BORDER * 0.2;
        float coneMask = smoothstep(radius, radius - feather, side);
        float maskCentro = smoothstep(d, d - feather, projection);
        float stretchedRing = coneMask * maskCentro;
 
        return max(border, stretchedRing);
    }
}


float drawCircle(float currentBorder, vec2 location, vec2 center) {
    float pickerCircle = 2.8;
    float pickerBorder = 0.3;
    float pickerRadius = length(location);
    float inner = (pickerCircle - pickerBorder) * (pickerCircle - pickerBorder);
    float outer = (pickerCircle + pickerBorder) * (pickerCircle + pickerBorder);
    float currentCircle = smoothstep(inner, inner + (pickerBorder * 0.1), pickerRadius) - 
        smoothstep(outer - (pickerBorder * 0.1), outer, pickerRadius);

    return max(currentBorder, currentCircle);
}

Picker drawPicker(vec2 pixel, vec2 center) {
    float currentBorder = 0.0;
    vec4 baseOverlay = vec4(0.0, 0.0, 0.0, 1.0);

    for (int i = 0; i < u_pickers_count; i++)  {
        vec2 picker = u_pickers[i];
        vec2 location = pixel - picker;
        vec2 fromPixelToCenter = center - picker;
        float projection = dot(location, fromPixelToCenter);
        float selected = step(float(u_picker_selected_index) - 0.1, float(i)) * step(float(i), float(u_picker_selected_index) + 0.1);

        currentBorder = u_free_move ? drawCircle(currentBorder, location, fromPixelToCenter) : drawPizza(currentBorder, projection, location, fromPixelToCenter);
    }

    return newPicker(baseOverlay, currentBorder);
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 pixel = gl_FragCoord.xy;
    vec2 center = u_resolution * 0.5;
    Picker picker = drawPicker(pixel, center);

    paint = mix(
        texture(u_previous, uv), 
        picker.overlay, 
        picker.border * picker.opacity
    );
}
`,
  vC = {
    100: 0.9,
    200: 0.8,
    300: 0.7,
    400: 0.6,
    600: 0.42,
    700: 0.34,
    800: 0.26,
    900: 0.18,
  },
  pC = {
    100: 0.6,
    200: 0.75,
    300: 0.9,
    400: 0.95,
    600: 1.05,
    700: 1.07,
    800: 1.08,
    900: 1.1,
  },
  T8 = {
    type: 5,
    vertices: new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1]),
    first: 0,
    count: 4,
  },
  E8 = (r, c, u, o, d, g = [], v = void 0) => {
    const y = r.createBuffer();
    (r.enableVertexAttribArray(0),
      r.bindBuffer(r.ARRAY_BUFFER, y),
      r.vertexAttribPointer(0, 2, r.FLOAT, !1, 0, 0),
      r.useProgram(u),
      r.bindVertexArray(c),
      v && r.activeTexture(v));
    for (const E of g) r.bindTexture(r.TEXTURE_2D, E);
    const _ = Object.keys(d),
      S = _.reduce((E, T) => ({ ...E, [T]: r.getUniformLocation(u, T) }), {});
    for (const E of _) {
      const T = S[E],
        [q, B] = d[E];
      r[q](T, B);
    }
    (r.bufferData(r.ARRAY_BUFFER, o.vertices, r.STATIC_DRAW),
      r.drawArrays(o.type, o.first, o.count));
  },
  Et = {
    prepareGlslSrc: (r, c) => {
      var u;
      return r.replaceAll(
        '#PICKERS_LENGTH',
        (((u = c.pickers) == null ? void 0 : u.length) || 0).toString(),
      );
    },
    getCanvasContext: (r, c, u) => {
      if ('current' in r) {
        if (r.current === null) throw new Error('It could not get canvas');
        return Et.getCanvasContext(r.current, c, u);
      }
      const o = r.getContext(c, u);
      if (o === null) throw new Error('It could not get 2d context!');
      return { obj: r, context: o };
    },
    prepare: ({ canvas: r, cache: c, props: u, render2d: o, webGL: d }) => (
      (o.imageSmoothingEnabled = !0),
      (o.imageSmoothingQuality = 'high'),
      o.setTransform(1, 0, 0, 1, 0, 0),
      d.viewport(0, 0, u.computed.totalSize, u.computed.totalSize),
      d.getExtension('EXT_color_buffer_float'),
      d.pixelStorei(d.UNPACK_COLORSPACE_CONVERSION_WEBGL, !1),
      { props: u, canvas: r, cache: c, render2d: o, webGL: d }
    ),
    clear: (r) => (
      r.canvas.width !== r.props.computed.totalSize &&
        (r.canvas.width = r.props.computed.totalSize),
      r.canvas.height !== r.props.computed.totalSize &&
        (r.canvas.height = r.props.computed.totalSize),
      r.render2d.clearRect(
        0,
        0,
        r.props.computed.totalSize,
        r.props.computed.totalSize,
      ),
      r.webGL.clearColor(1, 1, 1, 1),
      r.webGL.clear(r.webGL.COLOR_BUFFER_BIT || r.webGL.DEPTH_BUFFER_BIT),
      r
    ),
    compile: (r) => {
      const c = et.makeShader(
          r.webGL,
          r.webGL.VERTEX_SHADER,
          Et.prepareGlslSrc(hC, r.props),
        ),
        u = et.makeGlslProgram(
          r.webGL,
          c,
          et.makeShader(
            r.webGL,
            r.webGL.FRAGMENT_SHADER,
            Et.prepareGlslSrc(dC, r.props),
          ),
        ),
        o = et.makeGlslProgram(
          r.webGL,
          c,
          et.makeShader(
            r.webGL,
            r.webGL.FRAGMENT_SHADER,
            Et.prepareGlslSrc(gC, r.props),
          ),
        ),
        d = r.webGL.createVertexArray();
      return (
        r.webGL.bindVertexArray(d),
        { ...r, vertex: c, wheel: u, pickers: o, vao: d }
      );
    },
    prepareTexture: (r) => {
      const c = et.makeTexture2D(r.webGL, r.props.computed.totalSize),
        u = et.makeFrameBuffer(r.webGL, c);
      return (
        E8(r.webGL, r.vao, r.wheel, T8, {
          u_resolution: [
            'uniform2fv',
            [r.props.computed.totalSize, r.props.computed.totalSize],
          ],
          u_darkness: ['uniform1f', r.props.darkness],
        }),
        { ...r, framebuffer: u, texture: c }
      );
    },
    fillColors: (r) => ({
      ...r,
      colors: r.props.pickers.map((c) => {
        const u = new Uint8Array(4);
        return (
          r.webGL.readPixels(
            c.x,
            c.y,
            1,
            1,
            r.webGL.RGBA,
            r.webGL.UNSIGNED_BYTE,
            u,
          ),
          {
            ...c,
            color: {
              type: 'RGBA',
              red: u[0],
              green: u[1],
              blue: u[2],
              alpha: u[3] / 255,
              raw: `rgba(${(u[0], u[1], u[2], u[3] / 255)})`,
            },
          }
        );
      }),
    }),
    draw: (r) => (
      r.webGL.bindFramebuffer(r.webGL.FRAMEBUFFER, null),
      E8(
        r.webGL,
        r.vao,
        r.pickers,
        T8,
        {
          u_previous: ['uniform1i', 0],
          u_pickers: ['uniform2fv', r.props.pickers.flatMap((c) => [c.x, c.y])],
          u_picker_selected_index: ['uniform1i', r.props.selectedIndex],
          u_resolution: [
            'uniform2fv',
            [r.props.computed.totalSize, r.props.computed.totalSize],
          ],
          u_pickers_count: ['uniform1i', r.props.pickers.length || 0],
          u_free_move: ['uniform1i', r.props.freeMove === !0 ? 1 : 0],
        },
        [r.texture],
        r.webGL.TEXTURE0,
      ),
      r
    ),
    bind: (r) => {
      const c = r.cache.transferToImageBitmap();
      return (r.render2d.drawImage(c, 0, 0), r);
    },
    getBackground: (r, c, u) => {
      const o = u.x,
        g = ((r.totalSize - u.y) * r.totalSize + o) * 4,
        v = c.data[g],
        y = c.data[g + 1],
        _ = c.data[g + 2];
      return {
        type: 'RGBA',
        red: v,
        green: y,
        blue: _,
        alpha: 1,
        raw: `rgba(${v}, ${y}, ${_}, 1)`,
      };
    },
    clampColor: (r, c = 0, u = 1) => Math.min(u, Math.max(c, r)) * 100,
    shade: (r, c, u) => {
      const o = r.hue,
        d = Et.clampColor(r.saturation * u),
        g = Et.clampColor(c);
      return {
        type: 'HSLA',
        hue: o,
        saturation: d,
        lightness: g,
        alpha: r.alpha || 1,
        raw: `hsla(${o}, ${d}%, ${g}%, ${r.alpha || 1})`,
      };
    },
    makeColorAccents: (r, c) =>
      ['900', '800', '700', '600', 'main', '400', '300', '200', '100'].reduce(
        (u, o) => {
          const d = o === 'main' ? r : Et.shade(r, vC[o], pC[o]),
            g = et.makeCurrentColorTo(d, 'RGBA'),
            v = et.makeLuminance(g),
            y = et.makeHighlightFromLuminance(g, v, 'RGBA'),
            _ = et.makeTextColorFromLuminance(v),
            S = et.makeShadowFromLuminance(g, v, 'RGBA');
          return { ...u, [o]: { color: g, highlight: y, text: _, shadow: S } };
        },
        { id: c, activeAccent: 'main', kind: 'RGBA', applyTo: 'color' },
      ),
    getWheelOutput: (r) =>
      r.colors.map((c) =>
        Et.makeColorAccents(et.makeCurrentColorTo(c.color, 'HSLA'), c.id),
      ),
    getMousePosition: (r, c) => {
      const u = r.getBoundingClientRect();
      return {
        x: Math.floor(c.clientX - u.left),
        y: Math.floor(u.height - (c.clientY - u.top)),
      };
    },
    clampPosition: (r, c) => {
      const u = r.radius,
        o = c.x - r.center.x,
        d = c.y - r.center.y,
        g = Math.sqrt(o * o + d * d),
        v = Math.atan2(d, o),
        y = r.radius - 12;
      return [
        g <= u
          ? { ...c }
          : {
              x: r.center.x + y * Math.cos(v),
              y: r.center.y + y * Math.sin(v),
            },
        v,
        g,
      ];
    },
    freeMove: (r, c, u, o) => {
      const [d] = Et.clampPosition(u, o),
        g = r.map(({ x: v, y }) => ({ x: v, y }));
      return r.map((v) =>
        v.id !== c
          ? v
          : g.includes(d)
            ? { ...v, x: d.x - 20, y: d.y - 20 }
            : { ...v, ...d },
      );
    },
    move: (r, c, u, o, d, g) => {
      const v = (o * Math.PI) / 180,
        [y, _, S] = Et.clampPosition(d, g);
      return r.map((E, T) => {
        if (E.id === c) return { ...E, ...y };
        const q = T - u,
          B = _ + q * v,
          N = Math.atan2(Math.sin(B), Math.cos(B)),
          [X] = Et.clampPosition(d, {
            x: d.center.x + S * Math.cos(N),
            y: d.center.y + S * Math.sin(N),
          });
        return { ...E, ...X };
      });
    },
    intersects: (r, c, u) => {
      const o = r.x - c.x,
        d = r.y - c.y;
      return o * o + d * d <= u * u;
    },
  },
  mC = tt.flow(
    Et.prepare,
    Et.clear,
    Et.compile,
    Et.prepareTexture,
    Et.fillColors,
    Et.draw,
    Et.bind,
  ),
  yC = { draw: mC },
  bC = (r) => {
    const c = D.useRef(null),
      u = D.useRef(!1),
      o = D.useRef(0),
      d = D.useRef(0),
      g = D.useRef(0),
      v = D.useMemo(
        () => new OffscreenCanvas(r.computed.totalSize, r.computed.totalSize),
        [r.computed.totalSize],
      ),
      y = D.useCallback((T, q, B, N, X, Q, I) => {
        if ((T.preventDefault(), T.stopPropagation(), N === -1)) return;
        const $ = c.current;
        if ($ === null) return;
        const ue = Et.getMousePosition($, T);
        I
          ? r.onPickersMove(Et.freeMove(q, B, Q, ue))
          : r.onPickersMove(Et.move(q, B, N, X, Q, ue));
      }, []),
      _ = D.useCallback(
        tt.throttle((T) => {
          (cancelAnimationFrame(o.current),
            (o.current = requestAnimationFrame(() =>
              y(
                T,
                r.pickers,
                r.selectedPicker,
                r.selectedIndex,
                r.distanceBetweenEachPicker,
                r.computed,
                r.freeMove,
              ),
            )));
        }, 16),
        [
          y,
          r.pickers,
          r.selectedPicker,
          r.selectedIndex,
          r.distanceBetweenEachPicker,
          r.computed,
          r.freeMove,
        ],
      ),
      S = D.useCallback(
        (T) => {
          (T.preventDefault(), T.stopPropagation());
          const q = c.current;
          (q !== null &&
            q.hasPointerCapture(T.pointerId) &&
            q.releasePointerCapture(T.pointerId),
            r.onSelectedPickerChange(-1, void 0));
        },
        [r.onSelectedPickerChange],
      ),
      E = D.useCallback(
        (T) => {
          var Q;
          (T.preventDefault(), T.stopPropagation());
          const q = c.current;
          if (q === null) return;
          q.setPointerCapture(T.pointerId);
          const B = Et.getMousePosition(q, T),
            N = r.pickers.findIndex((I) =>
              Et.intersects(B, I, r.computed.pickerRadius),
            ),
            X = (Q = r.pickers[N]) == null ? void 0 : Q.id;
          (r.onSelectedPickerChange(N, X),
            cancelAnimationFrame(g.current),
            (g.current = requestAnimationFrame(() =>
              y(
                T,
                r.pickers,
                X,
                N,
                r.distanceBetweenEachPicker,
                r.computed,
                r.freeMove,
              ),
            )));
        },
        [r.pickers, r.computed, _, y, r.distanceBetweenEachPicker, r.freeMove],
      );
    return (
      D.useEffect(
        function () {
          if (u.current) return;
          const q = c.current;
          if (q === null || r.computed.totalSize <= 0) return;
          const { context: B } = Et.getCanvasContext(q, '2d', {
              willReadFrequently: !0,
              premultipliedAlpha: !1,
            }),
            { context: N } = Et.getCanvasContext(v, 'webgl2', {
              preserveDrawingBuffer: !1,
              willReadFrequently: !0,
            });
          ((u.current = !0),
            cancelAnimationFrame(d.current),
            (d.current = requestAnimationFrame(async () => {
              const X = yC.draw({
                canvas: q,
                props: r,
                cache: v,
                render2d: B,
                webGL: N,
              });
              (r.onChange(Et.getWheelOutput(X)), (u.current = !1));
            })));
        },
        [r.computed, r.pickers, r.darkness, r.freeMove, r.onChange],
      ),
      D.useEffect(
        function () {
          const q = c.current;
          q !== null &&
            (r.selectedIndex !== -1
              ? (q.onpointermove = _)
              : (q.onpointermove = null));
        },
        [r.selectedIndex, _],
      ),
      { canvasRef: c, onPointerDown: E, onPointerUp: S, onPointerMove: _ }
    );
  },
  j5 = (r) => {
    const { canvasRef: c, onPointerDown: u, onPointerUp: o } = bC(r);
    return R.jsx(be, {
      position: 'relative',
      justifyContent: 'center',
      atRow: r.atRow,
      children: R.jsx(be, {
        ref: c,
        tabIndex: -1,
        as: 'canvas',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        onPointerDown: u,
        onPointerUp: o,
      }),
    });
  },
  _C = () => {
    const r = D.useCallback(({ width: v, height: y }) => {
        const _ = window.devicePixelRatio || 1,
          E = Math.min(v, y),
          T = Math.round(Math.round(E) * 0.7),
          q = T / 2,
          B = tt.round(T * 0.04),
          N = { x: T / 2, y: T / 2 };
        return { radius: q, pickerRadius: B, center: N, dpr: _, totalSize: T };
      }, []),
      c = D.useCallback(
        (v, y) => Array.from({ length: v }, (_, S) => (y === 360 ? 1 : S * y)),
        [],
      ),
      u = D.useCallback((v) => (v * Math.PI) / 180, []),
      o = D.useCallback((v, y, _) => {
        const S = Math.cos(_),
          E = Math.sin(_),
          T = S * (y.x - v.x) - E * (y.y - v.y) + v.x,
          q = E * (y.x - v.x) + S * (y.y - v.y) + v.y;
        return { x: T, y: q };
      }, []),
      d = D.useCallback(
        (v, y, _, S = void 0) => {
          const E = c(v, y),
            T = S || { x: _.center.x, y: _.center.y + _.radius / 3 };
          return E.map((q, B) => {
            const N = tt.newId();
            return B === 0
              ? { ...T, id: N }
              : { ...o(_.center, T, u(q)), id: N };
          });
        },
        [c, u, o],
      ),
      g = D.useCallback((v, y) => {
        if (y.length <= 0) return !0;
        const _ = [
          'main',
          '100',
          '200',
          '300',
          '400',
          '600',
          '700',
          '800',
          '900',
        ];
        return y
          .flatMap((E) =>
            _.flatMap((T) => [
              et.makeCurrentColorTo(E[T].color, v.type).raw.replace(/\s/g, ''),
              et
                .makeCurrentColorTo(E[T].highlight, v.type)
                .raw.replace(/\s/g, ''),
              et.makeCurrentColorTo(E[T].text, v.type).raw.replace(/\s/g, ''),
              et.makeCurrentColorTo(E[T].shadow, v.type).raw.replace(/\s/g, ''),
            ]),
          )
          .some((E) => E === v.raw.replace(/\s/g, ''));
      }, []);
    return { calculeSizes: r, makePickers: d, isColorPresent: g };
  },
  D5 = [
    { id: 'hex', display: 'HEX', value: 'HEX' },
    { id: 'hsl', display: 'HSL', value: 'HSL' },
    { id: 'hsla', display: 'HSLA', value: 'HSLA' },
    { id: 'rgb', display: 'RGB', value: 'RGB' },
    { id: 'rgba', display: 'RGBA', value: 'RGBA' },
  ],
  iy = [
    { id: 'main', display: 'Main', value: 'main' },
    { id: '100', display: '100', value: '100' },
    { id: '200', display: '200', value: '200' },
    { id: '300', display: '300', value: '300' },
    { id: '400', display: '400', value: '400' },
    { id: '600', display: '600', value: '600' },
    { id: '700', display: '700', value: '700' },
    { id: '800', display: '800', value: '800' },
    { id: '900', display: '900', value: '900' },
  ],
  uy = [
    { id: 'color', display: 'Color', value: 'color' },
    { id: 'highlight', display: 'Highlight', value: 'highlight' },
    { id: 'text', display: 'Text', value: 'text' },
    { id: 'shadow', display: 'Shadow', value: 'shadow' },
  ],
  SC = (r) => {
    var g, v;
    const c = D.useCallback(
        (y) => ({
          marginBottom: '8px',
          fontSize: `${y.textSize.small}rem`,
          gap: '10px',
          padding: `${y.padding.medium}px`,
          borderRadius: '10px',
          background: 'rgba(6, 6, 6, 0.8)',
          color: '#FFF',
          fontWeight: 'bold',
          textAlign: 'center',
          animation: 'slideDown 1s ease-out forwards',
          alignItems: 'center',
          position: 'relative',
          zIndex: y.zIndex.tooltip,
          '@keyframes slideDown': {
            from: { opacity: 0, transform: 'translateY(50%)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }),
        [],
      ),
      u = D.useMemo(
        () => ({
          height: '2px',
          background: '#FFF',
          position: 'absolute',
          border: 'none',
          outline: 'none',
          left: '5%',
          right: '5%',
          top: '92%',
          borderRadius: '10px',
          animation: `widthDecreasing ${r.data.timeout / 1e3}s ease-out forwards`,
          '@keyframes widthDecreasing': {
            from: { width: '100%', opacity: 1 },
            to: { width: '0%', opacity: 0.3 },
          },
        }),
        [r.data.timeout],
      ),
      o = D.useCallback(
        (y) => () => {
          r.onClose(y);
        },
        [],
      ),
      d = D.useCallback(() => {
        var y;
        ((y = r.data.options) != null && y.action && r.data.options.action(),
          r.onClose(r.data.id));
      }, [r.data.options, r.data]);
    return (
      D.useEffect(function () {
        if (!r.data.timeout) return;
        const _ = setTimeout(() => {
          r.onClose(r.data.id);
        }, r.data.timeout);
        return () => {
          clearTimeout(_);
        };
      }, []),
      R.jsxs(be, {
        withStyle: c,
        children: [
          R.jsx(jn, {
            size: 24,
            text: '#FFF',
            highlight: 'transparent',
            color: 'inherit',
            noPadding: !0,
            onClick: o(r.data.id),
            children: R.jsx(R0, {}),
          }),
          r.data.message,
          !!r.data.timeout && R.jsx(be, { withStyle: u }),
          ((g = r.data.options) == null ? void 0 : g.action) &&
            R.jsx(be, {
              as: 'button',
              textColor: '#FFF',
              background: 'transparent',
              fontSize: '0.58rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              cursor: 'pointer',
              onClick: d,
              children: (v = r.data.options) == null ? void 0 : v.actionName,
            }),
        ],
      })
    );
  },
  q5 = D.createContext({ info: (r) => {} }),
  L5 = () => D.useContext(q5),
  xC = (r) => {
    const [c, u] = D.useState([]),
      o = D.useCallback(
        (v) => ({
          flexDirection: 'column-reverse',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          position: 'fixed',
          bottom: 0,
          gap: '1px',
          zIndex: v.zIndex.tooltip,
        }),
        [],
      ),
      d = D.useCallback((v, y) => {
        u((_) => [
          ..._,
          {
            message: v,
            id: tt.newId(),
            timeout: y != null && y.permanent ? void 0 : r.timeout,
            options: y,
          },
        ]);
      }, []),
      g = D.useCallback((v) => {
        u((y) => y.filter((_) => _.id !== v));
      }, []);
    return R.jsxs(be, {
      kind: 'contents',
      children: [
        R.jsx(q5.Provider, { value: { info: d }, children: r.children }),
        R.jsx(be, {
          as: 'ul',
          role: 'list',
          withStyle: o,
          children: c.map((v) => R.jsx(SC, { data: v, onClose: g }, v.id)),
        }),
      ],
    });
  },
  CC = (r) => {
    const c = D.useRef(null),
      { info: u } = L5(),
      o = D.useMemo(
        () => r.theme[r.theme.activeAccent],
        [r.theme, r.theme.activeAccent],
      ),
      d = D.useMemo(
        () => ({
          containerType: 'inline-size',
          containerName: 'card',
          position: 'relative',
          cursor: 'pointer',
          flex: '1 0 250px',
          maxWidth: '500px',
          margin: '0 auto',
          background: o.color.raw,
          borderRadius: '15px',
          boxShadow: r.selected ? 'none' : `0px 0px 5px 5px ${o.shadow.raw}`,
          border: r.selected ? `5px solid ${o.shadow.raw}` : 'none',
          boxSizing: 'content-box',
        }),
        [o, r.selected],
      ),
      g = D.useMemo(
        () => ({
          '@container card (max-width: 399px)': { flexDirection: 'column' },
          '@container card (min-width: 400px)': {
            flexDirection: 'row',
            flexWrap: 'wrap',
          },
        }),
        [],
      ),
      v = D.useMemo(
        () => ({
          flex: '1 0 calc(100% - 50px)',
          height: '50px',
          width: '100%',
          boxSizing: 'content-box',
          '@container card (max-width: 399px)': {
            height: '35px',
            flex: '0 0 35px',
          },
        }),
        [],
      ),
      y = D.useCallback(
        (V) => ({
          padding: `${V.padding.small}px`,
          '@container card (max-width: 399px)': { alignItems: 'center' },
          '@container card (min-width: 400px)': {
            flex: '1 0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100% - 50px)',
          },
        }),
        [],
      ),
      _ = D.useMemo(
        () => ({
          background: o.highlight.raw,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '0 0 30px',
          padding: '25px',
          gap: '15px',
          '@container card (max-width: 399px)': {
            flexDirection: 'row',
            justifyContent: 'space-around',
          },
        }),
        [o],
      ),
      S = r.theme[r.theme.activeAccent][r.theme.applyTo],
      E = D.useMemo(
        () => uy.find((V) => V.value === r.theme.applyTo),
        [r.theme.applyTo],
      ),
      T = D.useMemo(
        () => D5.find((V) => V.value === r.theme.kind),
        [r.theme.kind],
      ),
      q = D.useMemo(
        () => iy.find((V) => V.value === r.theme.activeAccent),
        [r.theme.activeAccent],
      ),
      B = D.useCallback(
        (V) => {
          r.onChangeAccent(r.theme, V.value);
        },
        [r.onChangeAccent, r.theme],
      ),
      N = D.useCallback(
        (V) => {
          r.onChangeApplyOn(r.theme, V.value);
        },
        [r.theme],
      ),
      X = D.useCallback(
        (V) => {
          r.onChangeColorKind(r.theme, V.value);
        },
        [r.theme],
      ),
      Q = D.useCallback(
        (V) => {
          r.onColorChange(r.theme, V);
        },
        [r.theme],
      ),
      I = D.useCallback(async () => {
        try {
          (await navigator.clipboard.writeText(S.raw),
            u('It successfully copied to your clipboard 😉'));
        } catch (V) {
          console.error(V);
        }
      }, [S]),
      $ = D.useCallback(() => {
        const V = iy.map((Se) => Se.value),
          fe = uy.map((Se) => Se.value),
          W = Object.keys(r.theme).reduce(
            (Se, Ce) =>
              V.includes(Ce) === !1
                ? Se
                : {
                    ...Se,
                    [Ce]: fe.map((oe) => ({
                      [oe]: et.makeCurrentColorTo(
                        r.theme[Ce][oe],
                        r.theme.kind,
                      ),
                    })),
                  },
            {},
          ),
          k = new Blob([JSON.stringify(W)], { type: 'application/json' }),
          pe = URL.createObjectURL(k);
        (window.open(pe), URL.revokeObjectURL(pe));
      }, [r.theme]),
      ue = D.useCallback(() => {
        r.onSelect(r.theme);
      }, [r.onSelect, r.theme]);
    return (
      D.useEffect(function () {
        const fe = c.current;
        if (fe === null) return;
        const W = new IntersectionObserver(
          (k) => {
            for (const pe of k) pe.isIntersecting && r.onVisible();
          },
          { root: null, threshold: 0.75 },
        );
        return (
          W.observe(fe),
          () => {
            (W.unobserve(fe), W.disconnect());
          }
        );
      }, []),
      {
        containerRef: c,
        containerStyle: d,
        contentStyle: g,
        rowSelectsStyle: v,
        rowInputStyle: y,
        sideButtonsStyle: _,
        current: o,
        color: S,
        applyTo: E,
        colorAccent: q,
        kind: T,
        onChangeActiveAccent: B,
        onChangeApply: N,
        onChangeColorKind: X,
        onColorChange: Q,
        onCopy: I,
        onExport: $,
        onClick: ue,
      }
    );
  };
var B5 = M8();
const AC = (r) => {
    var I, $;
    const c = D.useRef(null),
      u = D.useRef(null),
      [o, d] = D.useState(!1),
      g = (I = c.current) == null ? void 0 : I.getBoundingClientRect(),
      v = ($ = u.current) == null ? void 0 : $.getBoundingClientRect(),
      y = (v == null ? void 0 : v.height) || 0,
      _ = (v == null ? void 0 : v.width) || 0,
      S = ((g == null ? void 0 : g.bottom) || 0) + window.scrollY,
      E = ((g == null ? void 0 : g.left) || 0) + window.scrollX,
      T = S + y > window.innerHeight + window.scrollY ? S - y : S,
      q = E + _ > window.innerWidth ? window.innerWidth - _ : E < 15 ? 15 : E,
      B = D.useMemo(() => ({ position: 'relative', zIndex: 0 }), []),
      N = D.useCallback(
        (ue) => ({
          display: o ? 'table' : 'none',
          opacity: o ? 1 : 0,
          pointerEvents: o ? 'auto' : 'none',
          zIndex: ue.zIndex.tooltip,
          height: o ? 'auto' : 0,
          width: o ? 'auto' : 0,
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: `${ue.textSize.small}rem`,
          background: 'rgba(6, 6, 6, 0.8)',
          filter: 'blur(0)',
          transform: 'translateZ(0)',
          padding: `${ue.padding.medium}px`,
          borderRadius: '5px',
          position: 'absolute',
          margin: '15px',
          whiteSpace: 'nowrap',
          transition: ue.transitions.default,
          top: `${T}px`,
          left: `${q}px`,
        }),
        [o, T, q],
      ),
      X = D.useCallback((ue) => {
        (ue.preventDefault(), d(!0));
      }, []),
      Q = D.useCallback((ue) => {
        (ue.preventDefault(), d(!1));
      }, []);
    return (
      D.useEffect(function () {
        const V = c.current;
        if (V !== null)
          return (
            V.addEventListener('mouseenter', X),
            V.addEventListener('mouseleave', Q),
            () => {
              (V.removeEventListener('mouseenter', X),
                V.removeEventListener('mouseleave', Q));
            }
          );
      }, []),
      {
        show: o,
        containerRef: c,
        tooltipRef: u,
        containerStyle: B,
        tooltipStyle: N,
      }
    );
  },
  w8 = (r) => {
    const {
      containerRef: c,
      tooltipRef: u,
      containerStyle: o,
      tooltipStyle: d,
    } = AC();
    return R.jsxs(be, {
      ref: c,
      withStyle: o,
      draggable: !1,
      flex: '0 0 auto',
      children: [
        B5.createPortal(
          R.jsx(be, {
            as: 'span',
            draggable: !1,
            ref: u,
            withStyle: d,
            children: r.description,
          }),
          document.getElementById('tooltip'),
        ),
        r.children,
      ],
    });
  },
  H5 = (r) => {
    const {
      containerRef: c,
      containerStyle: u,
      contentStyle: o,
      rowSelectsStyle: d,
      rowInputStyle: g,
      sideButtonsStyle: v,
      color: y,
      current: _,
      kind: S,
      colorAccent: E,
      applyTo: T,
      onChangeActiveAccent: q,
      onChangeApply: B,
      onChangeColorKind: N,
      onColorChange: X,
      onCopy: Q,
      onExport: I,
      onClick: $,
    } = CC(r);
    return R.jsx(be, {
      ref: c,
      onClick: $,
      as: 'article',
      withStyle: u,
      children: R.jsxs(be, {
        withStyle: o,
        children: [
          R.jsxs(be, {
            withStyle: o,
            children: [
              R.jsxs(be, {
                withStyle: d,
                children: [
                  R.jsx(b0, {
                    label: 'Apply on',
                    options: uy,
                    onChange: B,
                    value: T,
                    color: _.color.raw,
                    text: _.text.raw,
                    highlight: _.highlight.raw,
                    uppercase: !0,
                  }),
                  R.jsx(b0, {
                    label: 'Accent',
                    options: iy,
                    onChange: q,
                    value: E,
                    color: _.color.raw,
                    text: _.text.raw,
                    highlight: _.highlight.raw,
                    uppercase: !0,
                  }),
                  R.jsx(b0, {
                    label: 'Show as',
                    options: D5,
                    onChange: N,
                    value: S,
                    color: _.color.raw,
                    text: _.text.raw,
                    highlight: _.highlight.raw,
                    uppercase: !0,
                  }),
                ],
              }),
              R.jsx(be, {
                withStyle: g,
                children: R.jsx(sC, {
                  type: r.theme.kind,
                  value: y,
                  color: _.color.raw,
                  text: _.text.raw,
                  highlight: _.highlight.raw,
                  onChange: X,
                }),
              }),
            ],
          }),
          R.jsxs(be, {
            withStyle: v,
            children: [
              R.jsx('div', {}),
              R.jsx(w8, {
                description: 'Copy',
                children: R.jsx(jn, {
                  size: 22,
                  color: _.color.raw,
                  text: _.text.raw,
                  highlight: _.highlight.raw,
                  onClick: Q,
                  round: !0,
                  children: R.jsx(nd, {}),
                }),
              }),
              R.jsx(w8, {
                description: 'Export Schema',
                children: R.jsx(jn, {
                  size: 22,
                  color: _.color.raw,
                  text: _.text.raw,
                  highlight: _.highlight.raw,
                  onClick: I,
                  round: !0,
                  children: R.jsx(h9, {}),
                }),
              }),
              R.jsx('div', {}),
            ],
          }),
        ],
      }),
    });
  },
  RC = ({
    value: r,
    direction: c,
    color: u,
    max: o,
    min: d,
    step: g,
    deg: v,
    colors: y,
    text: _,
    onChange: S,
  }) => {
    const E = D.useRef(null),
      T = D.useRef(null),
      q = D.useMemo(() => `linear-gradient(${v}deg, ${y.join(',')})`, [v, y]),
      B = D.useMemo(() => o / g, [o, g]),
      N = D.useMemo(
        () =>
          Math.min(
            Math.max(tt.round((r / o) * 100 <= 10 ? -10 : (r / o) * 100), 5),
            95,
          ),
        [r, o],
      ),
      X = D.useMemo(
        () => ({
          height: '100%',
          width: '100%',
          flex: '1 1 auto',
          borderRadius: '8px',
          justifySelf: 'center',
          userSelect: 'none',
          background: q,
          border: '1px solid rgba(6, 6, 6, 0.5)',
          position: 'relative',
          touchAction: 'none',
          justifyContent: 'center',
          overflow: 'initial',
        }),
        [q],
      ),
      Q = D.useCallback(
        (V) => ({
          position: 'absolute',
          touchAction: 'none',
          userSelect: 'none',
          borderRadius: '5px',
          cursor: 'grab',
          width: c === 'horizontal' ? '28px' : '100%',
          height: c === 'horizontal' ? '100%' : '28px',
          fontWeight: 'bold',
          color: _ || V.text.raw,
          fontSize: '0.48rem',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          transform: 'translate(-50% -50%)',
          boxShadow: '0px 0px 20px 4px rgba(0,0,0,0.75)',
          left: c === 'horizontal' ? `${N}%` : null,
          top: c === 'vertical' ? `${N}%` : null,
          background: u || 'rgba(0, 0, 0, 0.6)',
        }),
        [c, u, N, _],
      ),
      I = D.useCallback(
        (V) => {
          const fe = E.current;
          if (fe === null) return;
          const W = fe.getBoundingClientRect(),
            k =
              c === 'horizontal'
                ? (V.clientX - W.left) / W.width
                : (V.clientY - W.top) / W.height;
          S(tt.round(Math.min(Math.max(k * o, d), o), 1));
        },
        [S, g, o, d],
      ),
      $ = D.useCallback((V) => {
        const fe = T.current,
          W = (k) => {
            (fe != null &&
              fe.hasPointerCapture(k.pointerId) &&
              (fe == null || fe.releasePointerCapture(k.pointerId)),
              window.removeEventListener('pointermove', V),
              window.removeEventListener('pointerup', W));
          };
        return W;
      }, []),
      ue = D.useCallback(
        (V) => (fe) => {
          fe.stopPropagation();
          const W = T.current;
          (W !== null && W.setPointerCapture(fe.pointerId),
            window.addEventListener('pointermove', V, { passive: !0 }),
            window.addEventListener('pointerup', $(V), { passive: !0 }));
        },
        [],
      );
    return {
      trackRef: E,
      handlerRef: T,
      totalSteps: B,
      gradient: q,
      move: N,
      onClick: ue,
      onExit: $,
      onMove: I,
      containerStyle: X,
      toggleStyle: Q,
    };
  },
  O0 = (r) => {
    const {
      containerStyle: c,
      toggleStyle: u,
      trackRef: o,
      handlerRef: d,
      onClick: g,
      onMove: v,
    } = RC(r);
    return R.jsx(be, {
      ref: o,
      as: 'div',
      draggable: !1,
      withStyle: c,
      children: R.jsx(be, {
        ref: d,
        draggable: !1,
        withStyle: u,
        onPointerDown: g(v),
        children: r.value,
      }),
    });
  },
  Qf = (r) => {
    const c = D.useMemo(
      () => ({
        height: '100%',
        width: '100%',
        flex: '0 0 100%',
        scrollSnapAlign: 'start',
        display: 'grid',
        gridTemplateRows: r.contentRows,
        gridTemplateColumns: r.contentColumns,
        alignItems: r.align,
        justifyContent: r.justify,
      }),
      [r.contentColumns, r.contentRows, r.align, r.justify],
    );
    return R.jsx(be, {
      ref: r.ref,
      as: 'section',
      withStyle: c,
      children: r.children,
    });
  },
  TC = (r) => {
    const c = D.useMemo(
        () => ({
          flex: '1 0 auto',
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center',
        }),
        [],
      ),
      u = D.useCallback(
        (d) => (g) => ({
          width: '6px',
          height: '6px',
          flex: '0 0 6px',
          borderRadius: '50%',
          opacity: 0.9,
          border: 'none',
          cursor: 'pointer',
          background: r.active === d ? g.text.raw : g.shadow.raw,
          boxShadow:
            r.active === d ? `0px 0px 3px 3px ${g.shadow.raw}` : 'none',
          transform: r.active === d ? 'scale(1.3)' : 'initial',
        }),
        [r.color, r.active],
      );
    return {
      dots: D.useMemo(() => Array.from({ length: r.total }), [r.total]),
      containerStyle: c,
      dotStyle: u,
    };
  },
  EC = A0(
    (r) => {
      const { dots: c, containerStyle: u, dotStyle: o } = TC(r);
      return R.jsx(be, {
        withStyle: u,
        children: c.map((d, g) => R.jsx(be, { withStyle: o(g) }, g)),
      });
    },
    { flex: '1 0 auto' },
  ),
  wC = (r) => {
    const { theme: c } = Wr();
    return (
      D.useEffect(() => {
        let u = document.querySelector("meta[name='theme-color']");
        return (
          u ||
            ((u = document.createElement('meta')),
            (u.name = 'theme-color'),
            document.head.appendChild(u)),
          (document.body.style.backgroundColor = c.color.raw),
          (document.documentElement.style.backgroundColor = c.color.raw),
          u.setAttribute('content', c.color.raw),
          () => {
            document.head.removeChild(u);
          }
        );
      }, [c]),
      {}
    );
  },
  OC = (r) => (wC(), r.children),
  x0 = [
    {
      display: 'Monochromatic',
      value: {
        type: 'monochromatic',
        pickers: 1,
        freeMove: !1,
        distanceBetweenEachOne: 10,
      },
      id: 'monochromatic',
    },
    {
      display: 'Complementary',
      value: {
        type: 'complementary',
        pickers: 2,
        freeMove: !1,
        distanceBetweenEachOne: 180,
      },
      id: 'complementary',
    },
    {
      display: 'Analogous',
      value: {
        type: 'analogous',
        pickers: 5,
        freeMove: !1,
        distanceBetweenEachOne: 30,
      },
      id: 'analogous',
    },
    {
      display: 'Triad',
      value: {
        type: 'triad',
        pickers: 3,
        freeMove: !1,
        distanceBetweenEachOne: 120,
      },
      id: 'triad',
    },
    {
      display: 'Tetradic',
      value: {
        type: 'tetradic',
        pickers: 4,
        freeMove: !1,
        distanceBetweenEachOne: 60,
      },
      id: 'tetradic',
    },
    {
      display: 'Square',
      value: {
        type: 'square',
        pickers: 4,
        freeMove: !1,
        distanceBetweenEachOne: 90,
      },
      id: 'square',
    },
    {
      display: 'Pentadic',
      value: {
        type: 'pentadic',
        pickers: 5,
        freeMove: !1,
        distanceBetweenEachOne: 72,
      },
      id: 'pentadic',
    },
    {
      display: 'Hexadic',
      value: {
        type: 'hexadic',
        pickers: 6,
        freeMove: !1,
        distanceBetweenEachOne: 60,
      },
      id: 'hexadic',
    },
    {
      display: 'Fullspectrum',
      value: {
        type: 'fullspectrum',
        pickers: 12,
        freeMove: !1,
        distanceBetweenEachOne: 30,
      },
      id: 'fullspectrum',
    },
    {
      display: 'Custom',
      value: {
        type: 'custom',
        pickers: 1,
        freeMove: !0,
        distanceBetweenEachOne: 10,
      },
      id: 'custom',
    },
  ],
  MC = (r) => {
    const { theme: c } = Wr();
    return B5.createPortal(
      R.jsxs(be, {
        as: 'aside',
        display: r.show ? 'flex' : 'none',
        position: 'absolute',
        width: '350px',
        height: '350px',
        top: 'calc(50% - 175px)',
        bottom: 'calc(50% - 175px)',
        left: 'calc(50% - 175px)',
        transform: 'translateY(calc(-50% - 175px), calc(-50% - 175px))',
        padding: '20px',
        direction: 'column',
        background: (u) => u.color.raw,
        withStyle: (u) => ({
          zIndex: 9999,
          borderRadius: '18px',
          border: `2px solid ${u.highlight.raw}`,
          boxShadow: `2px 1px 3px 3px ${u.shadow.raw}`,
          transition: 'all 0.3s ease-in-out',
          animation: 'fade_in 0.5s ease-in-out',
          '@keyframes fade_in': {
            from: { display: 'none', opacity: 0 },
            to: { display: 'flex', opacity: 1 },
          },
        }),
        children: [
          R.jsxs(be, {
            flex: '0 0 50px',
            alignItems: 'center',
            justifyContent: 'space-between',
            children: [
              R.jsxs(my, {
                as: 'span',
                flex: '1 0 auto',
                fontSize: '0.59rem',
                justifyContent: 'center',
                textColor: (u) => u.text.raw,
                children: [
                  R.jsx('b', { children: "I'm so thankful for your support" }),
                  ' ❤️',
                ],
              }),
              R.jsx(jn, {
                onClick: r.onClose,
                flex: '0 0 28px',
                text: c.text.raw,
                size: 28,
                textColor: c.text.raw,
                children: R.jsx(R0, {}),
              }),
            ],
          }),
          R.jsx(be, { flex: '1 1 auto', children: r.children }),
        ],
      }),
      document.body,
    );
  },
  U5 = (r) => {
    const [c, u] = D.useState(!1),
      o = D.useCallback(
        (v) => async () => {
          try {
            await navigator.clipboard.writeText(v);
          } catch (y) {
            console.error(y);
          }
        },
        [],
      ),
      d = D.useCallback(() => {
        u(!0);
      }, []),
      g = D.useCallback(() => {
        u(!1);
      }, []);
    return R.jsxs(D.Fragment, {
      children: [
        R.jsxs(be, {
          atRow: r.atRow,
          cursor: 'pointer',
          textColor: (v) => v.text.raw,
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          margin: '0 0 10px 0',
          children: [
            R.jsx(my, {
              as: 'a',
              href: 'https://www.linkedin.com/in/gustavolizze',
              target: '_blank',
              rel: 'noopener noreferrer',
              textColor: (v) => v.text.raw,
              background: 'transparent',
              fontSize: '0.65rem',
              textDecoration: 'none',
              flex: '0 0 auto',
              children: R.jsx('b', {
                children: 'Made with ❤️ by Gustavo Lizze',
              }),
            }),
            R.jsx(v9, {}),
            R.jsx(be, {
              fontSize: '25px',
              flex: '0 0 auto',
              cursor: 'pointer',
              onClick: d,
              children: R.jsx(p9, {}),
            }),
          ],
        }),
        R.jsx(MC, {
          show: c,
          onClose: g,
          children: R.jsxs(be, {
            direction: 'column',
            children: [
              R.jsx(be, {
                children: R.jsx(ya, {
                  type: 'text',
                  label: 'BTC',
                  value: 'bc1qrwpqy6vzfpjqm44j3d7m3flnqpdrzyfljfahhd',
                  disabled: !0,
                  children: R.jsx(jn, {
                    onClick: o('bc1qrwpqy6vzfpjqm44j3d7m3flnqpdrzyfljfahhd'),
                    size: 28,
                    children: R.jsx(nd, {}),
                  }),
                }),
              }),
              R.jsx(be, {
                children: R.jsx(ya, {
                  type: 'text',
                  label: 'ETH / ETC',
                  value: '0x750d562a0b87bb9aeebdf66fbe660ef4d98ad3c2',
                  disabled: !0,
                  children: R.jsx(jn, {
                    onClick: o('0x750d562a0b87bb9aeebdf66fbe660ef4d98ad3c2'),
                    size: 28,
                    children: R.jsx(nd, {}),
                  }),
                }),
              }),
              R.jsx(be, {
                children: R.jsx(ya, {
                  type: 'text',
                  label: 'LTC',
                  value: 'MSzZS62GZ4dWX687q5be53trk1EMQ5AFdj',
                  disabled: !0,
                  children: R.jsx(jn, {
                    onClick: o('MSzZS62GZ4dWX687q5be53trk1EMQ5AFdj'),
                    size: 28,
                    children: R.jsx(nd, {}),
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  zC = {
    changeMode: ({ prevState: r }, c) => ({
      ...r,
      mode: c,
      numberOfPickers: c.value.pickers,
      distanceBetweenEachPicker: c.value.distanceBetweenEachOne,
    }),
    settingsClick: ({ prevState: r }) => ({
      ...r,
      activeView: r.activeView === 'wheel' ? 'settings' : 'wheel',
    }),
    onPickersCountChange: ({ prevState: r }, c) => {
      const u = tt.getBetweenRange(c, 1, 12),
        o = 360 / u,
        d = tt.getBetweenRange(r.distanceBetweenEachPicker, 0, o);
      return {
        ...r,
        mode: x0.find((g) => g.id === 'custom'),
        numberOfPickers: u,
        distanceBetweenEachPicker: d,
      };
    },
    onSpaceBetweenPickersChange: ({ prevState: r }, c) => {
      const u = 360 / r.numberOfPickers,
        o = tt.getBetweenRange(c, 0, u);
      return {
        ...r,
        mode: x0.find((d) => d.id === 'custom'),
        distanceBetweenEachPicker: o,
      };
    },
    onDarknessChange: ({ prevState: r }, c) => ({ ...r, darkness: c }),
    onEmitWheelOutput: ({ prevState: r }, c) => ({
      ...r,
      themes: c,
      selectedWheelOutputId: c[0].id,
    }),
    onChangeWheelOutputAccent: (
      { prevState: r },
      { activeAccent: c, theme: u },
    ) => ({
      ...r,
      themes: r.themes.map((o) =>
        o.id === u.id ? { ...u, activeAccent: c } : o,
      ),
    }),
    onChangeWheelOutputApplyOn: (
      { prevState: r },
      { theme: c, applyOn: u },
    ) => ({
      ...r,
      themes: r.themes.map((o) => (o.id === c.id ? { ...c, applyTo: u } : o)),
    }),
    onChangeWheelOutputColorKind: ({ prevState: r }, { kind: c, theme: u }) => {
      const o = [
          '100',
          '200',
          '300',
          '400',
          'main',
          '600',
          '700',
          '800',
          '900',
        ],
        d = ['color', 'highlight', 'text', 'shadow'];
      return {
        ...r,
        themes: r.themes.map((g) =>
          g.id === u.id
            ? {
                ...u,
                ...o.reduce(
                  (v, y) => ({
                    ...v,
                    [y]: d.reduce(
                      (_, S) => ({
                        ..._,
                        [S]: et.makeCurrentColorTo(g[y][S], c),
                      }),
                      {},
                    ),
                  }),
                  {},
                ),
                kind: c,
              }
            : g,
        ),
      };
    },
    onChangeColor: ({ prevState: r }, { theme: c, color: u }) => ({
      ...r,
      themes: r.themes.map((o) =>
        o.id === c.id
          ? { ...c, [c.activeAccent]: { ...c[c.activeAccent], [c.applyTo]: u } }
          : o,
      ),
    }),
    selectedPickerChange: (
      { prevState: r },
      { selectedPickerIndex: c, selectedPickerId: u },
    ) => ({ ...r, selectedPickerId: u, selectedPickerIndex: c }),
    onPickersChange: ({ prevState: r }, { pickers: c, darkness: u }) => ({
      ...r,
      pickers: c || [],
      darkness: u || r.darkness,
    }),
    onSelectWheelOutput: ({ prevState: r }, c) => ({
      ...r,
      selectedWheelOutputId: c,
    }),
    setVisibleWheelColor: ({ prevState: r }, c) => ({
      ...r,
      visibleColorIndex: c,
    }),
    updatePickerCoordinate: (
      { prevState: r },
      { coordinate: c, darkness: u },
    ) => ({
      ...r,
      pickers: r.pickers.map((o, d) => (d === 0 ? { ...o, ...c } : o)),
      darkness: u,
    }),
  };
var m0 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var jC = m0.exports,
  O8;
function DC() {
  return (
    O8 ||
      ((O8 = 1),
      (function (r, c) {
        (function () {
          var u,
            o = '4.17.23',
            d = 200,
            g =
              'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
            v = 'Expected a function',
            y = 'Invalid `variable` option passed into `_.template`',
            _ = '__lodash_hash_undefined__',
            S = 500,
            E = '__lodash_placeholder__',
            T = 1,
            q = 2,
            B = 4,
            N = 1,
            X = 2,
            Q = 1,
            I = 2,
            $ = 4,
            ue = 8,
            V = 16,
            fe = 32,
            W = 64,
            k = 128,
            pe = 256,
            Se = 512,
            Ce = 30,
            oe = '...',
            Ue = 800,
            Ae = 16,
            ut = 1,
            ct = 2,
            J = 3,
            ne = 1 / 0,
            se = 9007199254740991,
            nt = 17976931348623157e292,
            at = NaN,
            z = 4294967295,
            ie = z - 1,
            he = z >>> 1,
            me = [
              ['ary', k],
              ['bind', Q],
              ['bindKey', I],
              ['curry', ue],
              ['curryRight', V],
              ['flip', Se],
              ['partial', fe],
              ['partialRight', W],
              ['rearg', pe],
            ],
            Me = '[object Arguments]',
            Ne = '[object Array]',
            rt = '[object AsyncFunction]',
            Ft = '[object Boolean]',
            _t = '[object Date]',
            Hi = '[object DOMException]',
            el = '[object Error]',
            ql = '[object Function]',
            ao = '[object GeneratorFunction]',
            Wt = '[object Map]',
            tl = '[object Number]',
            ro = '[object Null]',
            Za = '[object Object]',
            lo = '[object Promise]',
            io = '[object Proxy]',
            nl = '[object RegExp]',
            Dn = '[object Set]',
            Ui = '[object String]',
            ic = '[object Symbol]',
            qn = '[object Undefined]',
            Ni = '[object WeakMap]',
            M0 = '[object WeakSet]',
            Ll = '[object ArrayBuffer]',
            Qa = '[object DataView]',
            uo = '[object Float32Array]',
            uc = '[object Float64Array]',
            co = '[object Int8Array]',
            fo = '[object Int16Array]',
            al = '[object Int32Array]',
            sn = '[object Uint8Array]',
            La = '[object Uint8ClampedArray]',
            hn = '[object Uint16Array]',
            oo = '[object Uint32Array]',
            Ad = /\b__p \+= '';/g,
            Rd = /\b(__p \+=) '' \+/g,
            cc = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            Gi = /&(?:amp|lt|gt|quot|#39);/g,
            ki = /[&<>"']/g,
            rl = RegExp(Gi.source),
            fc = RegExp(ki.source),
            Yi = /<%-([\s\S]+?)%>/g,
            Td = /<%([\s\S]+?)%>/g,
            so = /<%=([\s\S]+?)%>/g,
            ho = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Fi = /^\w*$/,
            Ed =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            oc = /[\\^$.*+?()[\]{}|]/g,
            z0 = RegExp(oc.source),
            sc = /^\s+/,
            go = /\s/,
            vo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            j0 = /\{\n\/\* \[wrapped with (.+)\] \*/,
            D0 = /,? & /,
            _r = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            Pt = /[()=,{}\[\]\/\s]/,
            mn = /\\(\\)?/g,
            Bl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            hc = /\w*$/,
            wd = /^[-+]0x[0-9a-f]+$/i,
            Od = /^0b[01]+$/i,
            q0 = /^\[object .+?Constructor\]$/,
            Xi = /^0o[0-7]+$/i,
            po = /^(?:0|[1-9]\d*)$/,
            Hl = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Va = /($^)/,
            Ki = /['\n\r\u2028\u2029\\]/g,
            Ia = '\\ud800-\\udfff',
            Qt = '\\u0300-\\u036f',
            L0 = '\\ufe20-\\ufe2f',
            B0 = '\\u20d0-\\u20ff',
            Sr = Qt + L0 + B0,
            ll = '\\u2700-\\u27bf',
            H0 = 'a-z\\xdf-\\xf6\\xf8-\\xff',
            U0 = '\\xac\\xb1\\xd7\\xf7',
            N0 = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
            Md = '\\u2000-\\u206f',
            dc =
              ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
            $i = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
            Ba = '\\ufe0e\\ufe0f',
            Ln = U0 + N0 + Md + dc,
            gc = "['’]",
            zd = '[' + Ia + ']',
            vc = '[' + Ln + ']',
            Zi = '[' + Sr + ']',
            Qi = '\\d+',
            jd = '[' + ll + ']',
            Bn = '[' + H0 + ']',
            pc = '[^' + Ia + Ln + Qi + ll + H0 + $i + ']',
            mc = '\\ud83c[\\udffb-\\udfff]',
            mo = '(?:' + Zi + '|' + mc + ')',
            il = '[^' + Ia + ']',
            yc = '(?:\\ud83c[\\udde6-\\uddff]){2}',
            bc = '[\\ud800-\\udbff][\\udc00-\\udfff]',
            ba = '[' + $i + ']',
            G0 = '\\u200d',
            yo = '(?:' + Bn + '|' + pc + ')',
            k0 = '(?:' + ba + '|' + pc + ')',
            _c = '(?:' + gc + '(?:d|ll|m|re|s|t|ve))?',
            Y0 = '(?:' + gc + '(?:D|LL|M|RE|S|T|VE))?',
            F0 = mo + '?',
            Vi = '[' + Ba + ']?',
            Ja =
              '(?:' +
              G0 +
              '(?:' +
              [il, yc, bc].join('|') +
              ')' +
              Vi +
              F0 +
              ')*',
            bo = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            _o = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            ul = Vi + F0 + Ja,
            Ul = '(?:' + [jd, yc, bc].join('|') + ')' + ul,
            X0 = '(?:' + [il + Zi + '?', Zi, yc, bc, zd].join('|') + ')',
            So = RegExp(gc, 'g'),
            K0 = RegExp(Zi, 'g'),
            cl = RegExp(mc + '(?=' + mc + ')|' + X0 + ul, 'g'),
            Wa = RegExp(
              [
                ba +
                  '?' +
                  Bn +
                  '+' +
                  _c +
                  '(?=' +
                  [vc, ba, '$'].join('|') +
                  ')',
                k0 + '+' + Y0 + '(?=' + [vc, ba + yo, '$'].join('|') + ')',
                ba + '?' + yo + '+' + _c,
                ba + '+' + Y0,
                _o,
                bo,
                Qi,
                Ul,
              ].join('|'),
              'g',
            ),
            xo = RegExp('[' + G0 + Ia + Sr + Ba + ']'),
            Ii =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            xr = [
              'Array',
              'Buffer',
              'DataView',
              'Date',
              'Error',
              'Float32Array',
              'Float64Array',
              'Function',
              'Int8Array',
              'Int16Array',
              'Int32Array',
              'Map',
              'Math',
              'Object',
              'Promise',
              'RegExp',
              'Set',
              'String',
              'Symbol',
              'TypeError',
              'Uint8Array',
              'Uint8ClampedArray',
              'Uint16Array',
              'Uint32Array',
              'WeakMap',
              '_',
              'clearTimeout',
              'isFinite',
              'parseInt',
              'setTimeout',
            ],
            Co = -1,
            dt = {};
          ((dt[uo] =
            dt[uc] =
            dt[co] =
            dt[fo] =
            dt[al] =
            dt[sn] =
            dt[La] =
            dt[hn] =
            dt[oo] =
              !0),
            (dt[Me] =
              dt[Ne] =
              dt[Ll] =
              dt[Ft] =
              dt[Qa] =
              dt[_t] =
              dt[el] =
              dt[ql] =
              dt[Wt] =
              dt[tl] =
              dt[Za] =
              dt[nl] =
              dt[Dn] =
              dt[Ui] =
              dt[Ni] =
                !1));
          var mt = {};
          ((mt[Me] =
            mt[Ne] =
            mt[Ll] =
            mt[Qa] =
            mt[Ft] =
            mt[_t] =
            mt[uo] =
            mt[uc] =
            mt[co] =
            mt[fo] =
            mt[al] =
            mt[Wt] =
            mt[tl] =
            mt[Za] =
            mt[nl] =
            mt[Dn] =
            mt[Ui] =
            mt[ic] =
            mt[sn] =
            mt[La] =
            mt[hn] =
            mt[oo] =
              !0),
            (mt[el] = mt[ql] = mt[Ni] = !1));
          var Sc = {
              À: 'A',
              Á: 'A',
              Â: 'A',
              Ã: 'A',
              Ä: 'A',
              Å: 'A',
              à: 'a',
              á: 'a',
              â: 'a',
              ã: 'a',
              ä: 'a',
              å: 'a',
              Ç: 'C',
              ç: 'c',
              Ð: 'D',
              ð: 'd',
              È: 'E',
              É: 'E',
              Ê: 'E',
              Ë: 'E',
              è: 'e',
              é: 'e',
              ê: 'e',
              ë: 'e',
              Ì: 'I',
              Í: 'I',
              Î: 'I',
              Ï: 'I',
              ì: 'i',
              í: 'i',
              î: 'i',
              ï: 'i',
              Ñ: 'N',
              ñ: 'n',
              Ò: 'O',
              Ó: 'O',
              Ô: 'O',
              Õ: 'O',
              Ö: 'O',
              Ø: 'O',
              ò: 'o',
              ó: 'o',
              ô: 'o',
              õ: 'o',
              ö: 'o',
              ø: 'o',
              Ù: 'U',
              Ú: 'U',
              Û: 'U',
              Ü: 'U',
              ù: 'u',
              ú: 'u',
              û: 'u',
              ü: 'u',
              Ý: 'Y',
              ý: 'y',
              ÿ: 'y',
              Æ: 'Ae',
              æ: 'ae',
              Þ: 'Th',
              þ: 'th',
              ß: 'ss',
              Ā: 'A',
              Ă: 'A',
              Ą: 'A',
              ā: 'a',
              ă: 'a',
              ą: 'a',
              Ć: 'C',
              Ĉ: 'C',
              Ċ: 'C',
              Č: 'C',
              ć: 'c',
              ĉ: 'c',
              ċ: 'c',
              č: 'c',
              Ď: 'D',
              Đ: 'D',
              ď: 'd',
              đ: 'd',
              Ē: 'E',
              Ĕ: 'E',
              Ė: 'E',
              Ę: 'E',
              Ě: 'E',
              ē: 'e',
              ĕ: 'e',
              ė: 'e',
              ę: 'e',
              ě: 'e',
              Ĝ: 'G',
              Ğ: 'G',
              Ġ: 'G',
              Ģ: 'G',
              ĝ: 'g',
              ğ: 'g',
              ġ: 'g',
              ģ: 'g',
              Ĥ: 'H',
              Ħ: 'H',
              ĥ: 'h',
              ħ: 'h',
              Ĩ: 'I',
              Ī: 'I',
              Ĭ: 'I',
              Į: 'I',
              İ: 'I',
              ĩ: 'i',
              ī: 'i',
              ĭ: 'i',
              į: 'i',
              ı: 'i',
              Ĵ: 'J',
              ĵ: 'j',
              Ķ: 'K',
              ķ: 'k',
              ĸ: 'k',
              Ĺ: 'L',
              Ļ: 'L',
              Ľ: 'L',
              Ŀ: 'L',
              Ł: 'L',
              ĺ: 'l',
              ļ: 'l',
              ľ: 'l',
              ŀ: 'l',
              ł: 'l',
              Ń: 'N',
              Ņ: 'N',
              Ň: 'N',
              Ŋ: 'N',
              ń: 'n',
              ņ: 'n',
              ň: 'n',
              ŋ: 'n',
              Ō: 'O',
              Ŏ: 'O',
              Ő: 'O',
              ō: 'o',
              ŏ: 'o',
              ő: 'o',
              Ŕ: 'R',
              Ŗ: 'R',
              Ř: 'R',
              ŕ: 'r',
              ŗ: 'r',
              ř: 'r',
              Ś: 'S',
              Ŝ: 'S',
              Ş: 'S',
              Š: 'S',
              ś: 's',
              ŝ: 's',
              ş: 's',
              š: 's',
              Ţ: 'T',
              Ť: 'T',
              Ŧ: 'T',
              ţ: 't',
              ť: 't',
              ŧ: 't',
              Ũ: 'U',
              Ū: 'U',
              Ŭ: 'U',
              Ů: 'U',
              Ű: 'U',
              Ų: 'U',
              ũ: 'u',
              ū: 'u',
              ŭ: 'u',
              ů: 'u',
              ű: 'u',
              ų: 'u',
              Ŵ: 'W',
              ŵ: 'w',
              Ŷ: 'Y',
              ŷ: 'y',
              Ÿ: 'Y',
              Ź: 'Z',
              Ż: 'Z',
              Ž: 'Z',
              ź: 'z',
              ż: 'z',
              ž: 'z',
              Ĳ: 'IJ',
              ĳ: 'ij',
              Œ: 'Oe',
              œ: 'oe',
              ŉ: "'n",
              ſ: 's',
            },
            xc = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
            },
            $0 = {
              '&amp;': '&',
              '&lt;': '<',
              '&gt;': '>',
              '&quot;': '"',
              '&#39;': "'",
            },
            yn = {
              '\\': '\\',
              "'": "'",
              '\n': 'n',
              '\r': 'r',
              '\u2028': 'u2028',
              '\u2029': 'u2029',
            },
            fl = parseFloat,
            Cc = parseInt,
            Nl = typeof Di == 'object' && Di && Di.Object === Object && Di,
            Dd =
              typeof self == 'object' && self && self.Object === Object && self,
            Xt = Nl || Dd || Function('return this')(),
            Ji = c && !c.nodeType && c,
            _a = Ji && !0 && r && !r.nodeType && r,
            Wi = _a && _a.exports === Ji,
            Ac = Wi && Nl.process,
            aa = (function () {
              try {
                var L = _a && _a.require && _a.require('util').types;
                return L || (Ac && Ac.binding && Ac.binding('util'));
              } catch {}
            })(),
            Z0 = aa && aa.isArrayBuffer,
            Q0 = aa && aa.isDate,
            Rc = aa && aa.isMap,
            V0 = aa && aa.isRegExp,
            I0 = aa && aa.isSet,
            J0 = aa && aa.isTypedArray;
          function Hn(L, P, K) {
            switch (K.length) {
              case 0:
                return L.call(P);
              case 1:
                return L.call(P, K[0]);
              case 2:
                return L.call(P, K[0], K[1]);
              case 3:
                return L.call(P, K[0], K[1], K[2]);
            }
            return L.apply(P, K);
          }
          function qd(L, P, K, ge) {
            for (var ze = -1, Ye = L == null ? 0 : L.length; ++ze < Ye; ) {
              var At = L[ze];
              P(ge, At, K(At), L);
            }
            return ge;
          }
          function Un(L, P) {
            for (
              var K = -1, ge = L == null ? 0 : L.length;
              ++K < ge && P(L[K], K, L) !== !1;
            );
            return L;
          }
          function Ld(L, P) {
            for (
              var K = L == null ? 0 : L.length;
              K-- && P(L[K], K, L) !== !1;
            );
            return L;
          }
          function W0(L, P) {
            for (var K = -1, ge = L == null ? 0 : L.length; ++K < ge; )
              if (!P(L[K], K, L)) return !1;
            return !0;
          }
          function Cr(L, P) {
            for (
              var K = -1, ge = L == null ? 0 : L.length, ze = 0, Ye = [];
              ++K < ge;
            ) {
              var At = L[K];
              P(At, K, L) && (Ye[ze++] = At);
            }
            return Ye;
          }
          function Tc(L, P) {
            var K = L == null ? 0 : L.length;
            return !!K && Gl(L, P, 0) > -1;
          }
          function Pi(L, P, K) {
            for (var ge = -1, ze = L == null ? 0 : L.length; ++ge < ze; )
              if (K(P, L[ge])) return !0;
            return !1;
          }
          function Ct(L, P) {
            for (
              var K = -1, ge = L == null ? 0 : L.length, ze = Array(ge);
              ++K < ge;
            )
              ze[K] = P(L[K], K, L);
            return ze;
          }
          function Ar(L, P) {
            for (var K = -1, ge = P.length, ze = L.length; ++K < ge; )
              L[ze + K] = P[K];
            return L;
          }
          function Ao(L, P, K, ge) {
            var ze = -1,
              Ye = L == null ? 0 : L.length;
            for (ge && Ye && (K = L[++ze]); ++ze < Ye; ) K = P(K, L[ze], ze, L);
            return K;
          }
          function P0(L, P, K, ge) {
            var ze = L == null ? 0 : L.length;
            for (ge && ze && (K = L[--ze]); ze--; ) K = P(K, L[ze], ze, L);
            return K;
          }
          function Ro(L, P) {
            for (var K = -1, ge = L == null ? 0 : L.length; ++K < ge; )
              if (P(L[K], K, L)) return !0;
            return !1;
          }
          var Bd = ol('length');
          function Hd(L) {
            return L.split('');
          }
          function Ud(L) {
            return L.match(_r) || [];
          }
          function eh(L, P, K) {
            var ge;
            return (
              K(L, function (ze, Ye, At) {
                if (P(ze, Ye, At)) return ((ge = Ye), !1);
              }),
              ge
            );
          }
          function Ec(L, P, K, ge) {
            for (
              var ze = L.length, Ye = K + (ge ? 1 : -1);
              ge ? Ye-- : ++Ye < ze;
            )
              if (P(L[Ye], Ye, L)) return Ye;
            return -1;
          }
          function Gl(L, P, K) {
            return P === P ? Yd(L, P, K) : Ec(L, th, K);
          }
          function Nd(L, P, K, ge) {
            for (var ze = K - 1, Ye = L.length; ++ze < Ye; )
              if (ge(L[ze], P)) return ze;
            return -1;
          }
          function th(L) {
            return L !== L;
          }
          function wc(L, P) {
            var K = L == null ? 0 : L.length;
            return K ? Oc(L, P) / K : at;
          }
          function ol(L) {
            return function (P) {
              return P == null ? u : P[L];
            };
          }
          function To(L) {
            return function (P) {
              return L == null ? u : L[P];
            };
          }
          function Eo(L, P, K, ge, ze) {
            return (
              ze(L, function (Ye, At, ft) {
                K = ge ? ((ge = !1), Ye) : P(K, Ye, At, ft);
              }),
              K
            );
          }
          function nh(L, P) {
            var K = L.length;
            for (L.sort(P); K--; ) L[K] = L[K].value;
            return L;
          }
          function Oc(L, P) {
            for (var K, ge = -1, ze = L.length; ++ge < ze; ) {
              var Ye = P(L[ge]);
              Ye !== u && (K = K === u ? Ye : K + Ye);
            }
            return K;
          }
          function Mc(L, P) {
            for (var K = -1, ge = Array(L); ++K < L; ) ge[K] = P(K);
            return ge;
          }
          function ah(L, P) {
            return Ct(P, function (K) {
              return [K, L[K]];
            });
          }
          function sl(L) {
            return L && L.slice(0, Yl(L) + 1).replace(sc, '');
          }
          function Nn(L) {
            return function (P) {
              return L(P);
            };
          }
          function wo(L, P) {
            return Ct(P, function (K) {
              return L[K];
            });
          }
          function eu(L, P) {
            return L.has(P);
          }
          function Oo(L, P) {
            for (var K = -1, ge = L.length; ++K < ge && Gl(P, L[K], 0) > -1; );
            return K;
          }
          function Mo(L, P) {
            for (var K = L.length; K-- && Gl(P, L[K], 0) > -1; );
            return K;
          }
          function tu(L, P) {
            for (var K = L.length, ge = 0; K--; ) L[K] === P && ++ge;
            return ge;
          }
          var nu = To(Sc),
            Gd = To(xc);
          function zc(L) {
            return '\\' + yn[L];
          }
          function rh(L, P) {
            return L == null ? u : L[P];
          }
          function hl(L) {
            return xo.test(L);
          }
          function zo(L) {
            return Ii.test(L);
          }
          function jo(L) {
            for (var P, K = []; !(P = L.next()).done; ) K.push(P.value);
            return K;
          }
          function jc(L) {
            var P = -1,
              K = Array(L.size);
            return (
              L.forEach(function (ge, ze) {
                K[++P] = [ze, ge];
              }),
              K
            );
          }
          function Do(L, P) {
            return function (K) {
              return L(P(K));
            };
          }
          function Pa(L, P) {
            for (var K = -1, ge = L.length, ze = 0, Ye = []; ++K < ge; ) {
              var At = L[K];
              (At === P || At === E) && ((L[K] = E), (Ye[ze++] = K));
            }
            return Ye;
          }
          function Dc(L) {
            var P = -1,
              K = Array(L.size);
            return (
              L.forEach(function (ge) {
                K[++P] = ge;
              }),
              K
            );
          }
          function kd(L) {
            var P = -1,
              K = Array(L.size);
            return (
              L.forEach(function (ge) {
                K[++P] = [ge, ge];
              }),
              K
            );
          }
          function Yd(L, P, K) {
            for (var ge = K - 1, ze = L.length; ++ge < ze; )
              if (L[ge] === P) return ge;
            return -1;
          }
          function Fd(L, P, K) {
            for (var ge = K + 1; ge--; ) if (L[ge] === P) return ge;
            return ge;
          }
          function kl(L) {
            return hl(L) ? ih(L) : Bd(L);
          }
          function wt(L) {
            return hl(L) ? uh(L) : Hd(L);
          }
          function Yl(L) {
            for (var P = L.length; P-- && go.test(L.charAt(P)); );
            return P;
          }
          var lh = To($0);
          function ih(L) {
            for (var P = (cl.lastIndex = 0); cl.test(L); ) ++P;
            return P;
          }
          function uh(L) {
            return L.match(cl) || [];
          }
          function ch(L) {
            return L.match(Wa) || [];
          }
          var qo = function L(P) {
              P = P == null ? Xt : Fl.defaults(Xt.Object(), P, Fl.pick(Xt, xr));
              var K = P.Array,
                ge = P.Date,
                ze = P.Error,
                Ye = P.Function,
                At = P.Math,
                ft = P.Object,
                qc = P.RegExp,
                dl = P.String,
                Gn = P.TypeError,
                au = K.prototype,
                fh = Ye.prototype,
                Xl = ft.prototype,
                Lc = P['__core-js_shared__'],
                Bc = fh.toString,
                We = Xl.hasOwnProperty,
                oh = 0,
                Hc = (function () {
                  var a = /[^.]+$/.exec(
                    (Lc && Lc.keys && Lc.keys.IE_PROTO) || '',
                  );
                  return a ? 'Symbol(src)_1.' + a : '';
                })(),
                bn = Xl.toString,
                Uc = Bc.call(ft),
                ra = Xt._,
                Kl = qc(
                  '^' +
                    Bc.call(We)
                      .replace(oc, '\\$&')
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        '$1.*?',
                      ) +
                    '$',
                ),
                $l = Wi ? P.Buffer : u,
                Sa = P.Symbol,
                gl = P.Uint8Array,
                Nc = $l ? $l.allocUnsafe : u,
                Ha = Do(ft.getPrototypeOf, ft),
                Lo = ft.create,
                ru = Xl.propertyIsEnumerable,
                er = au.splice,
                sh = Sa ? Sa.isConcatSpreadable : u,
                en = Sa ? Sa.iterator : u,
                tr = Sa ? Sa.toStringTag : u,
                la = (function () {
                  try {
                    var a = Hr(ft, 'defineProperty');
                    return (a({}, '', {}), a);
                  } catch {}
                })(),
                hh = P.clearTimeout !== Xt.clearTimeout && P.clearTimeout,
                Gc = ge && ge.now !== Xt.Date.now && ge.now,
                vl = P.setTimeout !== Xt.setTimeout && P.setTimeout,
                Zl = At.ceil,
                lu = At.floor,
                iu = ft.getOwnPropertySymbols,
                dh = $l ? $l.isBuffer : u,
                kn = P.isFinite,
                Ql = au.join,
                Vl = Do(ft.keys, ft),
                jt = At.max,
                Nt = At.min,
                ia = ge.now,
                ua = P.parseInt,
                nr = At.random,
                Ua = au.reverse,
                ca = Hr(P, 'DataView'),
                Yn = Hr(P, 'Map'),
                kc = Hr(P, 'Promise'),
                Rr = Hr(P, 'Set'),
                pl = Hr(P, 'WeakMap'),
                Il = Hr(ft, 'create'),
                Gt = pl && new pl(),
                lt = {},
                Ze = fn(ca),
                Tr = fn(Yn),
                fa = fn(kc),
                Bo = fn(Rr),
                Er = fn(pl),
                uu = Sa ? Sa.prototype : u,
                Jl = uu ? uu.valueOf : u,
                ml = uu ? uu.toString : u;
              function C(a) {
                if (Lt(a) && !je(a) && !(a instanceof De)) {
                  if (a instanceof _n) return a;
                  if (We.call(a, '__wrapped__')) return bf(a);
                }
                return new _n(a);
              }
              var wr = (function () {
                function a() {}
                return function (i) {
                  if (!Tt(i)) return {};
                  if (Lo) return Lo(i);
                  a.prototype = i;
                  var s = new a();
                  return ((a.prototype = u), s);
                };
              })();
              function Or() {}
              function _n(a, i) {
                ((this.__wrapped__ = a),
                  (this.__actions__ = []),
                  (this.__chain__ = !!i),
                  (this.__index__ = 0),
                  (this.__values__ = u));
              }
              ((C.templateSettings = {
                escape: Yi,
                evaluate: Td,
                interpolate: so,
                variable: '',
                imports: { _: C },
              }),
                (C.prototype = Or.prototype),
                (C.prototype.constructor = C),
                (_n.prototype = wr(Or.prototype)),
                (_n.prototype.constructor = _n));
              function De(a) {
                ((this.__wrapped__ = a),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = z),
                  (this.__views__ = []));
              }
              function ar() {
                var a = new De(this.__wrapped__);
                return (
                  (a.__actions__ = gn(this.__actions__)),
                  (a.__dir__ = this.__dir__),
                  (a.__filtered__ = this.__filtered__),
                  (a.__iteratees__ = gn(this.__iteratees__)),
                  (a.__takeCount__ = this.__takeCount__),
                  (a.__views__ = gn(this.__views__)),
                  a
                );
              }
              function Mr() {
                if (this.__filtered__) {
                  var a = new De(this);
                  ((a.__dir__ = -1), (a.__filtered__ = !0));
                } else ((a = this.clone()), (a.__dir__ *= -1));
                return a;
              }
              function rr() {
                var a = this.__wrapped__.value(),
                  i = this.__dir__,
                  s = je(a),
                  p = i < 0,
                  b = s ? a.length : 0,
                  A = Wd(0, b, this.__views__),
                  w = A.start,
                  M = A.end,
                  U = M - w,
                  re = p ? M : w - 1,
                  le = this.__iteratees__,
                  ce = le.length,
                  de = 0,
                  _e = Nt(U, this.__takeCount__);
                if (!s || (!p && b == U && _e == U))
                  return Jo(a, this.__actions__);
                var we = [];
                e: for (; U-- && de < _e; ) {
                  re += i;
                  for (var Ge = -1, Oe = a[re]; ++Ge < ce; ) {
                    var Qe = le[Ge],
                      Ve = Qe.iteratee,
                      Da = Qe.type,
                      ea = Ve(Oe);
                    if (Da == ct) Oe = ea;
                    else if (!ea) {
                      if (Da == ut) continue e;
                      break e;
                    }
                  }
                  we[de++] = Oe;
                }
                return we;
              }
              ((De.prototype = wr(Or.prototype)),
                (De.prototype.constructor = De));
              function lr(a) {
                var i = -1,
                  s = a == null ? 0 : a.length;
                for (this.clear(); ++i < s; ) {
                  var p = a[i];
                  this.set(p[0], p[1]);
                }
              }
              function Ho() {
                ((this.__data__ = Il ? Il(null) : {}), (this.size = 0));
              }
              function Wl(a) {
                var i = this.has(a) && delete this.__data__[a];
                return ((this.size -= i ? 1 : 0), i);
              }
              function Yc(a) {
                var i = this.__data__;
                if (Il) {
                  var s = i[a];
                  return s === _ ? u : s;
                }
                return We.call(i, a) ? i[a] : u;
              }
              function yl(a) {
                var i = this.__data__;
                return Il ? i[a] !== u : We.call(i, a);
              }
              function tn(a, i) {
                var s = this.__data__;
                return (
                  (this.size += this.has(a) ? 0 : 1),
                  (s[a] = Il && i === u ? _ : i),
                  this
                );
              }
              ((lr.prototype.clear = Ho),
                (lr.prototype.delete = Wl),
                (lr.prototype.get = Yc),
                (lr.prototype.has = yl),
                (lr.prototype.set = tn));
              function oa(a) {
                var i = -1,
                  s = a == null ? 0 : a.length;
                for (this.clear(); ++i < s; ) {
                  var p = a[i];
                  this.set(p[0], p[1]);
                }
              }
              function gh() {
                ((this.__data__ = []), (this.size = 0));
              }
              function Xd(a) {
                var i = this.__data__,
                  s = Na(i, a);
                if (s < 0) return !1;
                var p = i.length - 1;
                return (s == p ? i.pop() : er.call(i, s, 1), --this.size, !0);
              }
              function Kd(a) {
                var i = this.__data__,
                  s = Na(i, a);
                return s < 0 ? u : i[s][1];
              }
              function $d(a) {
                return Na(this.__data__, a) > -1;
              }
              function kt(a, i) {
                var s = this.__data__,
                  p = Na(s, a);
                return (
                  p < 0 ? (++this.size, s.push([a, i])) : (s[p][1] = i),
                  this
                );
              }
              ((oa.prototype.clear = gh),
                (oa.prototype.delete = Xd),
                (oa.prototype.get = Kd),
                (oa.prototype.has = $d),
                (oa.prototype.set = kt));
              function xa(a) {
                var i = -1,
                  s = a == null ? 0 : a.length;
                for (this.clear(); ++i < s; ) {
                  var p = a[i];
                  this.set(p[0], p[1]);
                }
              }
              function cu() {
                ((this.size = 0),
                  (this.__data__ = {
                    hash: new lr(),
                    map: new (Yn || oa)(),
                    string: new lr(),
                  }));
              }
              function fu(a) {
                var i = Eu(this, a).delete(a);
                return ((this.size -= i ? 1 : 0), i);
              }
              function Uo(a) {
                return Eu(this, a).get(a);
              }
              function Pl(a) {
                return Eu(this, a).has(a);
              }
              function ei(a, i) {
                var s = Eu(this, a),
                  p = s.size;
                return (s.set(a, i), (this.size += s.size == p ? 0 : 1), this);
              }
              ((xa.prototype.clear = cu),
                (xa.prototype.delete = fu),
                (xa.prototype.get = Uo),
                (xa.prototype.has = Pl),
                (xa.prototype.set = ei));
              function bl(a) {
                var i = -1,
                  s = a == null ? 0 : a.length;
                for (this.__data__ = new xa(); ++i < s; ) this.add(a[i]);
              }
              function vh(a) {
                return (this.__data__.set(a, _), this);
              }
              function Zd(a) {
                return this.__data__.has(a);
              }
              ((bl.prototype.add = bl.prototype.push = vh),
                (bl.prototype.has = Zd));
              function sa(a) {
                var i = (this.__data__ = new oa(a));
                this.size = i.size;
              }
              function _l() {
                ((this.__data__ = new oa()), (this.size = 0));
              }
              function No(a) {
                var i = this.__data__,
                  s = i.delete(a);
                return ((this.size = i.size), s);
              }
              function Fc(a) {
                return this.__data__.get(a);
              }
              function ph(a) {
                return this.__data__.has(a);
              }
              function ti(a, i) {
                var s = this.__data__;
                if (s instanceof oa) {
                  var p = s.__data__;
                  if (!Yn || p.length < d - 1)
                    return (p.push([a, i]), (this.size = ++s.size), this);
                  s = this.__data__ = new xa(p);
                }
                return (s.set(a, i), (this.size = s.size), this);
              }
              ((sa.prototype.clear = _l),
                (sa.prototype.delete = No),
                (sa.prototype.get = Fc),
                (sa.prototype.has = ph),
                (sa.prototype.set = ti));
              function Xc(a, i) {
                var s = je(a),
                  p = !s && wl(a),
                  b = !s && !p && Xr(a),
                  A = !s && !p && !b && Kr(a),
                  w = s || p || b || A,
                  M = w ? Mc(a.length, dl) : [],
                  U = M.length;
                for (var re in a)
                  (i || We.call(a, re)) &&
                    !(
                      w &&
                      (re == 'length' ||
                        (b && (re == 'offset' || re == 'parent')) ||
                        (A &&
                          (re == 'buffer' ||
                            re == 'byteLength' ||
                            re == 'byteOffset')) ||
                        Oa(re, U))
                    ) &&
                    M.push(re);
                return M;
              }
              function ou(a) {
                var i = a.length;
                return i ? a[fi(0, i - 1)] : u;
              }
              function Kc(a, i) {
                return Lu(gn(a), Aa(i, 0, a.length));
              }
              function mh(a) {
                return Lu(gn(a));
              }
              function $c(a, i, s) {
                ((s !== u && !Jn(a[i], s)) || (s === u && !(i in a))) &&
                  Fn(a, i, s);
              }
              function Ca(a, i, s) {
                var p = a[i];
                (!(We.call(a, i) && Jn(p, s)) || (s === u && !(i in a))) &&
                  Fn(a, i, s);
              }
              function Na(a, i) {
                for (var s = a.length; s--; ) if (Jn(a[s][0], i)) return s;
                return -1;
              }
              function yh(a, i, s, p) {
                return (
                  Ga(a, function (b, A, w) {
                    i(p, b, s(b), w);
                  }),
                  p
                );
              }
              function Go(a, i) {
                return a && va(i, It(i), a);
              }
              function ni(a, i) {
                return a && va(i, Mn(i), a);
              }
              function Fn(a, i, s) {
                i == '__proto__' && la
                  ? la(a, i, {
                      configurable: !0,
                      enumerable: !0,
                      value: s,
                      writable: !0,
                    })
                  : (a[i] = s);
              }
              function ai(a, i) {
                for (
                  var s = -1, p = i.length, b = K(p), A = a == null;
                  ++s < p;
                )
                  b[s] = A ? u : $r(a, i[s]);
                return b;
              }
              function Aa(a, i, s) {
                return (
                  a === a &&
                    (s !== u && (a = a <= s ? a : s),
                    i !== u && (a = a >= i ? a : i)),
                  a
                );
              }
              function dn(a, i, s, p, b, A) {
                var w,
                  M = i & T,
                  U = i & q,
                  re = i & B;
                if ((s && (w = b ? s(a, p, b, A) : s(a)), w !== u)) return w;
                if (!Tt(a)) return a;
                var le = je(a);
                if (le) {
                  if (((w = Lh(a)), !M)) return gn(a, w);
                } else {
                  var ce = an(a),
                    de = ce == ql || ce == ao;
                  if (Xr(a)) return es(a, M);
                  if (ce == Za || ce == Me || (de && !b)) {
                    if (((w = U || de ? {} : gs(a)), !M))
                      return U ? Mh(a, ni(w, a)) : Oh(a, Go(w, a));
                  } else {
                    if (!mt[ce]) return b ? a : {};
                    w = Bh(a, ce, M);
                  }
                }
                A || (A = new sa());
                var _e = A.get(a);
                if (_e) return _e;
                (A.set(a, w),
                  Ju(a)
                    ? a.forEach(function (Oe) {
                        w.add(dn(Oe, i, s, Oe, a, A));
                      })
                    : y1(a) &&
                      a.forEach(function (Oe, Qe) {
                        w.set(Qe, dn(Oe, i, s, Qe, a, A));
                      }));
                var we = re ? (U ? ds : sf) : U ? Mn : It,
                  Ge = le ? u : we(a);
                return (
                  Un(Ge || a, function (Oe, Qe) {
                    (Ge && ((Qe = Oe), (Oe = a[Qe])),
                      Ca(w, Qe, dn(Oe, i, s, Qe, a, A)));
                  }),
                  w
                );
              }
              function bh(a) {
                var i = It(a);
                return function (s) {
                  return zr(s, a, i);
                };
              }
              function zr(a, i, s) {
                var p = s.length;
                if (a == null) return !p;
                for (a = ft(a); p--; ) {
                  var b = s[p],
                    A = i[b],
                    w = a[b];
                  if ((w === u && !(b in a)) || !A(w)) return !1;
                }
                return !0;
              }
              function ko(a, i, s) {
                if (typeof a != 'function') throw new Gn(v);
                return qu(function () {
                  a.apply(u, s);
                }, i);
              }
              function ha(a, i, s, p) {
                var b = -1,
                  A = Tc,
                  w = !0,
                  M = a.length,
                  U = [],
                  re = i.length;
                if (!M) return U;
                (s && (i = Ct(i, Nn(s))),
                  p
                    ? ((A = Pi), (w = !1))
                    : i.length >= d && ((A = eu), (w = !1), (i = new bl(i))));
                e: for (; ++b < M; ) {
                  var le = a[b],
                    ce = s == null ? le : s(le);
                  if (((le = p || le !== 0 ? le : 0), w && ce === ce)) {
                    for (var de = re; de--; ) if (i[de] === ce) continue e;
                    U.push(le);
                  } else A(i, ce, p) || U.push(le);
                }
                return U;
              }
              var Ga = rs(Ta),
                Zc = rs(Vc, !0);
              function jr(a, i) {
                var s = !0;
                return (
                  Ga(a, function (p, b, A) {
                    return ((s = !!i(p, b, A)), s);
                  }),
                  s
                );
              }
              function Ra(a, i, s) {
                for (var p = -1, b = a.length; ++p < b; ) {
                  var A = a[p],
                    w = i(A);
                  if (w != null && (M === u ? w === w && !On(w) : s(w, M)))
                    var M = w,
                      U = A;
                }
                return U;
              }
              function su(a, i, s, p) {
                var b = a.length;
                for (
                  s = Ee(s),
                    s < 0 && (s = -s > b ? 0 : b + s),
                    p = p === u || p > b ? b : Ee(p),
                    p < 0 && (p += b),
                    p = s > p ? 0 : Ps(p);
                  s < p;
                )
                  a[s++] = i;
                return a;
              }
              function Qc(a, i) {
                var s = [];
                return (
                  Ga(a, function (p, b, A) {
                    i(p, b, A) && s.push(p);
                  }),
                  s
                );
              }
              function Kt(a, i, s, p, b) {
                var A = -1,
                  w = a.length;
                for (s || (s = ps), b || (b = []); ++A < w; ) {
                  var M = a[A];
                  i > 0 && s(M)
                    ? i > 1
                      ? Kt(M, i - 1, s, p, b)
                      : Ar(b, M)
                    : p || (b[b.length] = M);
                }
                return b;
              }
              var Sl = ls(),
                ri = ls(!0);
              function Ta(a, i) {
                return a && Sl(a, i, It);
              }
              function Vc(a, i) {
                return a && ri(a, i, It);
              }
              function ir(a, i) {
                return Cr(i, function (s) {
                  return Wn(a[s]);
                });
              }
              function ka(a, i) {
                i = Zn(i, a);
                for (var s = 0, p = i.length; a != null && s < p; )
                  a = a[Cn(i[s++])];
                return s && s == p ? a : u;
              }
              function Yo(a, i, s) {
                var p = i(a);
                return je(a) ? p : Ar(p, s(a));
              }
              function nn(a) {
                return a == null
                  ? a === u
                    ? qn
                    : ro
                  : tr && tr in ft(a)
                    ? wu(a)
                    : ys(a);
              }
              function hu(a, i) {
                return a > i;
              }
              function Xn(a, i) {
                return a != null && We.call(a, i);
              }
              function da(a, i) {
                return a != null && i in ft(a);
              }
              function Dr(a, i, s) {
                return a >= Nt(i, s) && a < jt(i, s);
              }
              function du(a, i, s) {
                for (
                  var p = s ? Pi : Tc,
                    b = a[0].length,
                    A = a.length,
                    w = A,
                    M = K(A),
                    U = 1 / 0,
                    re = [];
                  w--;
                ) {
                  var le = a[w];
                  (w && i && (le = Ct(le, Nn(i))),
                    (U = Nt(le.length, U)),
                    (M[w] =
                      !s && (i || (b >= 120 && le.length >= 120))
                        ? new bl(w && le)
                        : u));
                }
                le = a[0];
                var ce = -1,
                  de = M[0];
                e: for (; ++ce < b && re.length < U; ) {
                  var _e = le[ce],
                    we = i ? i(_e) : _e;
                  if (
                    ((_e = s || _e !== 0 ? _e : 0),
                    !(de ? eu(de, we) : p(re, we, s)))
                  ) {
                    for (w = A; --w; ) {
                      var Ge = M[w];
                      if (!(Ge ? eu(Ge, we) : p(a[w], we, s))) continue e;
                    }
                    (de && de.push(we), re.push(_e));
                  }
                }
                return re;
              }
              function _h(a, i, s, p) {
                return (
                  Ta(a, function (b, A, w) {
                    i(p, s(b), A, w);
                  }),
                  p
                );
              }
              function ga(a, i, s) {
                ((i = Zn(i, a)), (a = ju(a, i)));
                var p = a == null ? a : a[Cn(xt(i))];
                return p == null ? u : Hn(p, a, s);
              }
              function Sn(a) {
                return Lt(a) && nn(a) == Me;
              }
              function Bt(a) {
                return Lt(a) && nn(a) == Ll;
              }
              function Ic(a) {
                return Lt(a) && nn(a) == _t;
              }
              function Kn(a, i, s, p, b) {
                return a === i
                  ? !0
                  : a == null || i == null || (!Lt(a) && !Lt(i))
                    ? a !== a && i !== i
                    : qe(a, i, s, p, Kn, b);
              }
              function qe(a, i, s, p, b, A) {
                var w = je(a),
                  M = je(i),
                  U = w ? Ne : an(a),
                  re = M ? Ne : an(i);
                ((U = U == Me ? Za : U), (re = re == Me ? Za : re));
                var le = U == Za,
                  ce = re == Za,
                  de = U == re;
                if (de && Xr(a)) {
                  if (!Xr(i)) return !1;
                  ((w = !0), (le = !1));
                }
                if (de && !le)
                  return (
                    A || (A = new sa()),
                    w || Kr(a) ? Ru(a, i, s, p, b, A) : qh(a, i, U, s, p, b, A)
                  );
                if (!(s & N)) {
                  var _e = le && We.call(a, '__wrapped__'),
                    we = ce && We.call(i, '__wrapped__');
                  if (_e || we) {
                    var Ge = _e ? a.value() : a,
                      Oe = we ? i.value() : i;
                    return (A || (A = new sa()), b(Ge, Oe, s, p, A));
                  }
                }
                return de ? (A || (A = new sa()), hs(a, i, s, p, b, A)) : !1;
              }
              function gt(a) {
                return Lt(a) && an(a) == Wt;
              }
              function Dt(a, i, s, p) {
                var b = s.length,
                  A = b,
                  w = !p;
                if (a == null) return !A;
                for (a = ft(a); b--; ) {
                  var M = s[b];
                  if (w && M[2] ? M[1] !== a[M[0]] : !(M[0] in a)) return !1;
                }
                for (; ++b < A; ) {
                  M = s[b];
                  var U = M[0],
                    re = a[U],
                    le = M[1];
                  if (w && M[2]) {
                    if (re === u && !(U in a)) return !1;
                  } else {
                    var ce = new sa();
                    if (p) var de = p(re, le, U, a, i, ce);
                    if (!(de === u ? Kn(le, re, N | X, p, ce) : de)) return !1;
                  }
                }
                return !0;
              }
              function gu(a) {
                if (!Tt(a) || Hh(a)) return !1;
                var i = Wn(a) ? Kl : q0;
                return i.test(fn(a));
              }
              function li(a) {
                return Lt(a) && nn(a) == nl;
              }
              function xl(a) {
                return Lt(a) && an(a) == Dn;
              }
              function Jc(a) {
                return Lt(a) && jf(a.length) && !!dt[nn(a)];
              }
              function ii(a) {
                return typeof a == 'function'
                  ? a
                  : a == null
                    ? pn
                    : typeof a == 'object'
                      ? je(a)
                        ? Fo(a[0], a[1])
                        : Pc(a)
                      : x(a);
              }
              function qr(a) {
                if (!gi(a)) return Vl(a);
                var i = [];
                for (var s in ft(a))
                  We.call(a, s) && s != 'constructor' && i.push(s);
                return i;
              }
              function Qd(a) {
                if (!Tt(a)) return cr(a);
                var i = gi(a),
                  s = [];
                for (var p in a)
                  (p == 'constructor' && (i || !We.call(a, p))) || s.push(p);
                return s;
              }
              function Rt(a, i) {
                return a < i;
              }
              function Wc(a, i) {
                var s = -1,
                  p = wn(a) ? K(a.length) : [];
                return (
                  Ga(a, function (b, A, w) {
                    p[++s] = i(b, A, w);
                  }),
                  p
                );
              }
              function Pc(a) {
                var i = hf(a);
                return i.length == 1 && i[0][2]
                  ? mf(i[0][0], i[0][1])
                  : function (s) {
                      return s === a || Dt(s, a, i);
                    };
              }
              function Fo(a, i) {
                return Mu(a) && Fa(i)
                  ? mf(Cn(a), i)
                  : function (s) {
                      var p = $r(s, a);
                      return p === u && p === i ? t0(s, a) : Kn(i, p, N | X);
                    };
              }
              function vu(a, i, s, p, b) {
                a !== i &&
                  Sl(
                    i,
                    function (A, w) {
                      if ((b || (b = new sa()), Tt(A)))
                        Vd(a, i, w, s, vu, p, b);
                      else {
                        var M = p ? p(yt(a, w), A, w + '', a, i, b) : u;
                        (M === u && (M = A), $c(a, w, M));
                      }
                    },
                    Mn,
                  );
              }
              function Vd(a, i, s, p, b, A, w) {
                var M = yt(a, s),
                  U = yt(i, s),
                  re = w.get(U);
                if (re) {
                  $c(a, s, re);
                  return;
                }
                var le = A ? A(M, U, s + '', a, i, w) : u,
                  ce = le === u;
                if (ce) {
                  var de = je(U),
                    _e = !de && Xr(U),
                    we = !de && !_e && Kr(U);
                  ((le = U),
                    de || _e || we
                      ? je(M)
                        ? (le = M)
                        : Ut(M)
                          ? (le = gn(M))
                          : _e
                            ? ((ce = !1), (le = es(U, !0)))
                            : we
                              ? ((ce = !1), (le = ts(U, !0)))
                              : (le = [])
                      : Vu(U) || wl(U)
                        ? ((le = M),
                          wl(M)
                            ? (le = Df(M))
                            : (!Tt(M) || Wn(M)) && (le = gs(U)))
                        : (ce = !1));
                }
                (ce && (w.set(U, le), b(le, U, p, A, w), w.delete(U)),
                  $c(a, s, le));
              }
              function ef(a, i) {
                var s = a.length;
                if (s) return ((i += i < 0 ? s : 0), Oa(i, s) ? a[i] : u);
              }
              function tf(a, i, s) {
                i.length
                  ? (i = Ct(i, function (A) {
                      return je(A)
                        ? function (w) {
                            return ka(w, A.length === 1 ? A[0] : A);
                          }
                        : A;
                    }))
                  : (i = [pn]);
                var p = -1;
                i = Ct(i, Nn(Re()));
                var b = Wc(a, function (A, w, M) {
                  var U = Ct(i, function (re) {
                    return re(A);
                  });
                  return { criteria: U, index: ++p, value: A };
                });
                return nh(b, function (A, w) {
                  return wh(A, w, s);
                });
              }
              function Xo(a, i) {
                return un(a, i, function (s, p) {
                  return t0(a, p);
                });
              }
              function un(a, i, s) {
                for (var p = -1, b = i.length, A = {}; ++p < b; ) {
                  var w = i[p],
                    M = ka(a, w);
                  s(M, w) && oi(A, Zn(w, a), M);
                }
                return A;
              }
              function Ht(a) {
                return function (i) {
                  return ka(i, a);
                };
              }
              function ui(a, i, s, p) {
                var b = p ? Nd : Gl,
                  A = -1,
                  w = i.length,
                  M = a;
                for (a === i && (i = gn(i)), s && (M = Ct(a, Nn(s))); ++A < w; )
                  for (
                    var U = 0, re = i[A], le = s ? s(re) : re;
                    (U = b(M, le, U, p)) > -1;
                  )
                    (M !== a && er.call(M, U, 1), er.call(a, U, 1));
                return a;
              }
              function ci(a, i) {
                for (var s = a ? i.length : 0, p = s - 1; s--; ) {
                  var b = i[s];
                  if (s == p || b !== A) {
                    var A = b;
                    Oa(b) ? er.call(a, b, 1) : pu(a, b);
                  }
                }
                return a;
              }
              function fi(a, i) {
                return a + lu(nr() * (i - a + 1));
              }
              function Ko(a, i, s, p) {
                for (
                  var b = -1, A = jt(Zl((i - a) / (s || 1)), 0), w = K(A);
                  A--;
                )
                  ((w[p ? A : ++b] = a), (a += s));
                return w;
              }
              function Ea(a, i) {
                var s = '';
                if (!a || i < 1 || i > se) return s;
                do (i % 2 && (s += a), (i = lu(i / 2)), i && (a += a));
                while (i);
                return s;
              }
              function Le(a, i) {
                return yf(bs(a, i, pn), a + '');
              }
              function $o(a) {
                return ou(wi(a));
              }
              function Zo(a, i) {
                var s = wi(a);
                return Lu(s, Aa(i, 0, s.length));
              }
              function oi(a, i, s, p) {
                if (!Tt(a)) return a;
                i = Zn(i, a);
                for (
                  var b = -1, A = i.length, w = A - 1, M = a;
                  M != null && ++b < A;
                ) {
                  var U = Cn(i[b]),
                    re = s;
                  if (
                    U === '__proto__' ||
                    U === 'constructor' ||
                    U === 'prototype'
                  )
                    return a;
                  if (b != w) {
                    var le = M[U];
                    ((re = p ? p(le, U, M) : u),
                      re === u && (re = Tt(le) ? le : Oa(i[b + 1]) ? [] : {}));
                  }
                  (Ca(M, U, re), (M = M[U]));
                }
                return a;
              }
              var Qo = Gt
                  ? function (a, i) {
                      return (Gt.set(a, i), a);
                    }
                  : pn,
                Sh = la
                  ? function (a, i) {
                      return la(a, 'toString', {
                        configurable: !0,
                        enumerable: !1,
                        value: Mi(i),
                        writable: !0,
                      });
                    }
                  : pn;
              function xh(a) {
                return Lu(wi(a));
              }
              function $n(a, i, s) {
                var p = -1,
                  b = a.length;
                (i < 0 && (i = -i > b ? 0 : b + i),
                  (s = s > b ? b : s),
                  s < 0 && (s += b),
                  (b = i > s ? 0 : (s - i) >>> 0),
                  (i >>>= 0));
                for (var A = K(b); ++p < b; ) A[p] = a[p + i];
                return A;
              }
              function Ch(a, i) {
                var s;
                return (
                  Ga(a, function (p, b, A) {
                    return ((s = i(p, b, A)), !s);
                  }),
                  !!s
                );
              }
              function si(a, i, s) {
                var p = 0,
                  b = a == null ? p : a.length;
                if (typeof i == 'number' && i === i && b <= he) {
                  for (; p < b; ) {
                    var A = (p + b) >>> 1,
                      w = a[A];
                    w !== null && !On(w) && (s ? w <= i : w < i)
                      ? (p = A + 1)
                      : (b = A);
                  }
                  return b;
                }
                return nf(a, i, pn, s);
              }
              function nf(a, i, s, p) {
                var b = 0,
                  A = a == null ? 0 : a.length;
                if (A === 0) return 0;
                i = s(i);
                for (
                  var w = i !== i, M = i === null, U = On(i), re = i === u;
                  b < A;
                ) {
                  var le = lu((b + A) / 2),
                    ce = s(a[le]),
                    de = ce !== u,
                    _e = ce === null,
                    we = ce === ce,
                    Ge = On(ce);
                  if (w) var Oe = p || we;
                  else
                    re
                      ? (Oe = we && (p || de))
                      : M
                        ? (Oe = we && de && (p || !_e))
                        : U
                          ? (Oe = we && de && !_e && (p || !Ge))
                          : _e || Ge
                            ? (Oe = !1)
                            : (Oe = p ? ce <= i : ce < i);
                  Oe ? (b = le + 1) : (A = le);
                }
                return Nt(A, ie);
              }
              function Ah(a, i) {
                for (var s = -1, p = a.length, b = 0, A = []; ++s < p; ) {
                  var w = a[s],
                    M = i ? i(w) : w;
                  if (!s || !Jn(M, U)) {
                    var U = M;
                    A[b++] = w === 0 ? 0 : w;
                  }
                }
                return A;
              }
              function Vo(a) {
                return typeof a == 'number' ? a : On(a) ? at : +a;
              }
              function xn(a) {
                if (typeof a == 'string') return a;
                if (je(a)) return Ct(a, xn) + '';
                if (On(a)) return ml ? ml.call(a) : '';
                var i = a + '';
                return i == '0' && 1 / a == -ne ? '-0' : i;
              }
              function ur(a, i, s) {
                var p = -1,
                  b = Tc,
                  A = a.length,
                  w = !0,
                  M = [],
                  U = M;
                if (s) ((w = !1), (b = Pi));
                else if (A >= d) {
                  var re = i ? null : jh(a);
                  if (re) return Dc(re);
                  ((w = !1), (b = eu), (U = new bl()));
                } else U = i ? [] : M;
                e: for (; ++p < A; ) {
                  var le = a[p],
                    ce = i ? i(le) : le;
                  if (((le = s || le !== 0 ? le : 0), w && ce === ce)) {
                    for (var de = U.length; de--; )
                      if (U[de] === ce) continue e;
                    (i && U.push(ce), M.push(le));
                  } else b(U, ce, s) || (U !== M && U.push(ce), M.push(le));
                }
                return M;
              }
              function pu(a, i) {
                i = Zn(i, a);
                var s = -1,
                  p = i.length;
                if (!p) return !0;
                for (
                  var b =
                    a == null ||
                    (typeof a != 'object' && typeof a != 'function');
                  ++s < p;
                ) {
                  var A = i[s];
                  if (typeof A == 'string') {
                    if (A === '__proto__' && !We.call(a, '__proto__'))
                      return !1;
                    if (
                      A === 'constructor' &&
                      s + 1 < p &&
                      typeof i[s + 1] == 'string' &&
                      i[s + 1] === 'prototype'
                    ) {
                      if (b && s === 0) continue;
                      return !1;
                    }
                  }
                }
                var w = ju(a, i);
                return w == null || delete w[Cn(xt(i))];
              }
              function Io(a, i, s, p) {
                return oi(a, i, s(ka(a, i)), p);
              }
              function mu(a, i, s, p) {
                for (
                  var b = a.length, A = p ? b : -1;
                  (p ? A-- : ++A < b) && i(a[A], A, a);
                );
                return s
                  ? $n(a, p ? 0 : A, p ? A + 1 : b)
                  : $n(a, p ? A + 1 : 0, p ? b : A);
              }
              function Jo(a, i) {
                var s = a;
                return (
                  s instanceof De && (s = s.value()),
                  Ao(
                    i,
                    function (p, b) {
                      return b.func.apply(b.thisArg, Ar([p], b.args));
                    },
                    s,
                  )
                );
              }
              function af(a, i, s) {
                var p = a.length;
                if (p < 2) return p ? ur(a[0]) : [];
                for (var b = -1, A = K(p); ++b < p; )
                  for (var w = a[b], M = -1; ++M < p; )
                    M != b && (A[b] = ha(A[b] || w, a[M], i, s));
                return ur(Kt(A, 1), i, s);
              }
              function Wo(a, i, s) {
                for (
                  var p = -1, b = a.length, A = i.length, w = {};
                  ++p < b;
                ) {
                  var M = p < A ? i[p] : u;
                  s(w, a[p], M);
                }
                return w;
              }
              function Po(a) {
                return Ut(a) ? a : [];
              }
              function rf(a) {
                return typeof a == 'function' ? a : pn;
              }
              function Zn(a, i) {
                return je(a) ? a : Mu(a, i) ? [a] : _s(it(a));
              }
              var Rh = Le;
              function wa(a, i, s) {
                var p = a.length;
                return ((s = s === u ? p : s), !i && s >= p ? a : $n(a, i, s));
              }
              var yu =
                hh ||
                function (a) {
                  return Xt.clearTimeout(a);
                };
              function es(a, i) {
                if (i) return a.slice();
                var s = a.length,
                  p = Nc ? Nc(s) : new a.constructor(s);
                return (a.copy(p), p);
              }
              function bu(a) {
                var i = new a.constructor(a.byteLength);
                return (new gl(i).set(new gl(a)), i);
              }
              function Id(a, i) {
                var s = i ? bu(a.buffer) : a.buffer;
                return new a.constructor(s, a.byteOffset, a.byteLength);
              }
              function Th(a) {
                var i = new a.constructor(a.source, hc.exec(a));
                return ((i.lastIndex = a.lastIndex), i);
              }
              function Eh(a) {
                return Jl ? ft(Jl.call(a)) : {};
              }
              function ts(a, i) {
                var s = i ? bu(a.buffer) : a.buffer;
                return new a.constructor(s, a.byteOffset, a.length);
              }
              function ns(a, i) {
                if (a !== i) {
                  var s = a !== u,
                    p = a === null,
                    b = a === a,
                    A = On(a),
                    w = i !== u,
                    M = i === null,
                    U = i === i,
                    re = On(i);
                  if (
                    (!M && !re && !A && a > i) ||
                    (A && w && U && !M && !re) ||
                    (p && w && U) ||
                    (!s && U) ||
                    !b
                  )
                    return 1;
                  if (
                    (!p && !A && !re && a < i) ||
                    (re && s && b && !p && !A) ||
                    (M && s && b) ||
                    (!w && b) ||
                    !U
                  )
                    return -1;
                }
                return 0;
              }
              function wh(a, i, s) {
                for (
                  var p = -1,
                    b = a.criteria,
                    A = i.criteria,
                    w = b.length,
                    M = s.length;
                  ++p < w;
                ) {
                  var U = ns(b[p], A[p]);
                  if (U) {
                    if (p >= M) return U;
                    var re = s[p];
                    return U * (re == 'desc' ? -1 : 1);
                  }
                }
                return a.index - i.index;
              }
              function lf(a, i, s, p) {
                for (
                  var b = -1,
                    A = a.length,
                    w = s.length,
                    M = -1,
                    U = i.length,
                    re = jt(A - w, 0),
                    le = K(U + re),
                    ce = !p;
                  ++M < U;
                )
                  le[M] = i[M];
                for (; ++b < w; ) (ce || b < A) && (le[s[b]] = a[b]);
                for (; re--; ) le[M++] = a[b++];
                return le;
              }
              function as(a, i, s, p) {
                for (
                  var b = -1,
                    A = a.length,
                    w = -1,
                    M = s.length,
                    U = -1,
                    re = i.length,
                    le = jt(A - M, 0),
                    ce = K(le + re),
                    de = !p;
                  ++b < le;
                )
                  ce[b] = a[b];
                for (var _e = b; ++U < re; ) ce[_e + U] = i[U];
                for (; ++w < M; ) (de || b < A) && (ce[_e + s[w]] = a[b++]);
                return ce;
              }
              function gn(a, i) {
                var s = -1,
                  p = a.length;
                for (i || (i = K(p)); ++s < p; ) i[s] = a[s];
                return i;
              }
              function va(a, i, s, p) {
                var b = !s;
                s || (s = {});
                for (var A = -1, w = i.length; ++A < w; ) {
                  var M = i[A],
                    U = p ? p(s[M], a[M], M, s, a) : u;
                  (U === u && (U = a[M]), b ? Fn(s, M, U) : Ca(s, M, U));
                }
                return s;
              }
              function Oh(a, i) {
                return va(a, df(a), i);
              }
              function Mh(a, i) {
                return va(a, Ou(a), i);
              }
              function uf(a, i) {
                return function (s, p) {
                  var b = je(s) ? qd : yh,
                    A = i ? i() : {};
                  return b(s, a, Re(p, 2), A);
                };
              }
              function Lr(a) {
                return Le(function (i, s) {
                  var p = -1,
                    b = s.length,
                    A = b > 1 ? s[b - 1] : u,
                    w = b > 2 ? s[2] : u;
                  for (
                    A = a.length > 3 && typeof A == 'function' ? (b--, A) : u,
                      w && cn(s[0], s[1], w) && ((A = b < 3 ? u : A), (b = 1)),
                      i = ft(i);
                    ++p < b;
                  ) {
                    var M = s[p];
                    M && a(i, M, p, A);
                  }
                  return i;
                });
              }
              function rs(a, i) {
                return function (s, p) {
                  if (s == null) return s;
                  if (!wn(s)) return a(s, p);
                  for (
                    var b = s.length, A = i ? b : -1, w = ft(s);
                    (i ? A-- : ++A < b) && p(w[A], A, w) !== !1;
                  );
                  return s;
                };
              }
              function ls(a) {
                return function (i, s, p) {
                  for (var b = -1, A = ft(i), w = p(i), M = w.length; M--; ) {
                    var U = w[a ? M : ++b];
                    if (s(A[U], U, A) === !1) break;
                  }
                  return i;
                };
              }
              function is(a, i, s) {
                var p = i & Q,
                  b = _u(a);
                function A() {
                  var w = this && this !== Xt && this instanceof A ? b : a;
                  return w.apply(p ? s : this, arguments);
                }
                return A;
              }
              function us(a) {
                return function (i) {
                  i = it(i);
                  var s = hl(i) ? wt(i) : u,
                    p = s ? s[0] : i.charAt(0),
                    b = s ? wa(s, 1).join('') : i.slice(1);
                  return p[a]() + b;
                };
              }
              function Cl(a) {
                return function (i) {
                  return Ao(K1(Oi(i).replace(So, '')), a, '');
                };
              }
              function _u(a) {
                return function () {
                  var i = arguments;
                  switch (i.length) {
                    case 0:
                      return new a();
                    case 1:
                      return new a(i[0]);
                    case 2:
                      return new a(i[0], i[1]);
                    case 3:
                      return new a(i[0], i[1], i[2]);
                    case 4:
                      return new a(i[0], i[1], i[2], i[3]);
                    case 5:
                      return new a(i[0], i[1], i[2], i[3], i[4]);
                    case 6:
                      return new a(i[0], i[1], i[2], i[3], i[4], i[5]);
                    case 7:
                      return new a(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
                  }
                  var s = wr(a.prototype),
                    p = a.apply(s, i);
                  return Tt(p) ? p : s;
                };
              }
              function Jd(a, i, s) {
                var p = _u(a);
                function b() {
                  for (
                    var A = arguments.length, w = K(A), M = A, U = qt(b);
                    M--;
                  )
                    w[M] = arguments[M];
                  var re =
                    A < 3 && w[0] !== U && w[A - 1] !== U ? [] : Pa(w, U);
                  if (((A -= re.length), A < s))
                    return of(a, i, di, b.placeholder, u, w, re, u, u, s - A);
                  var le = this && this !== Xt && this instanceof b ? p : a;
                  return Hn(le, this, w);
                }
                return b;
              }
              function cs(a) {
                return function (i, s, p) {
                  var b = ft(i);
                  if (!wn(i)) {
                    var A = Re(s, 3);
                    ((i = It(i)),
                      (s = function (M) {
                        return A(b[M], M, b);
                      }));
                  }
                  var w = a(i, s, p);
                  return w > -1 ? b[A ? i[w] : w] : u;
                };
              }
              function hi(a) {
                return Ya(function (i) {
                  var s = i.length,
                    p = s,
                    b = _n.prototype.thru;
                  for (a && i.reverse(); p--; ) {
                    var A = i[p];
                    if (typeof A != 'function') throw new Gn(v);
                    if (b && !w && Ot(A) == 'wrapper') var w = new _n([], !0);
                  }
                  for (p = w ? p : s; ++p < s; ) {
                    A = i[p];
                    var M = Ot(A),
                      U = M == 'wrapper' ? Tu(A) : u;
                    U &&
                    zu(U[0]) &&
                    U[1] == (k | ue | fe | pe) &&
                    !U[4].length &&
                    U[9] == 1
                      ? (w = w[Ot(U[0])].apply(w, U[3]))
                      : (w = A.length == 1 && zu(A) ? w[M]() : w.thru(A));
                  }
                  return function () {
                    var re = arguments,
                      le = re[0];
                    if (w && re.length == 1 && je(le))
                      return w.plant(le).value();
                    for (
                      var ce = 0, de = s ? i[ce].apply(this, re) : le;
                      ++ce < s;
                    )
                      de = i[ce].call(this, de);
                    return de;
                  };
                });
              }
              function di(a, i, s, p, b, A, w, M, U, re) {
                var le = i & k,
                  ce = i & Q,
                  de = i & I,
                  _e = i & (ue | V),
                  we = i & Se,
                  Ge = de ? u : _u(a);
                function Oe() {
                  for (var Qe = arguments.length, Ve = K(Qe), Da = Qe; Da--; )
                    Ve[Da] = arguments[Da];
                  if (_e)
                    var ea = qt(Oe),
                      qa = tu(Ve, ea);
                  if (
                    (p && (Ve = lf(Ve, p, b, _e)),
                    A && (Ve = as(Ve, A, w, _e)),
                    (Qe -= qa),
                    _e && Qe < re)
                  ) {
                    var Zt = Pa(Ve, ea);
                    return of(
                      a,
                      i,
                      di,
                      Oe.placeholder,
                      s,
                      Ve,
                      Zt,
                      M,
                      U,
                      re - Qe,
                    );
                  }
                  var mr = ce ? s : this,
                    Ml = de ? mr[a] : a;
                  return (
                    (Qe = Ve.length),
                    M ? (Ve = Du(Ve, M)) : we && Qe > 1 && Ve.reverse(),
                    le && U < Qe && (Ve.length = U),
                    this &&
                      this !== Xt &&
                      this instanceof Oe &&
                      (Ml = Ge || _u(Ml)),
                    Ml.apply(mr, Ve)
                  );
                }
                return Oe;
              }
              function Su(a, i) {
                return function (s, p) {
                  return _h(s, a, i(p), {});
                };
              }
              function xu(a, i) {
                return function (s, p) {
                  var b;
                  if (s === u && p === u) return i;
                  if ((s !== u && (b = s), p !== u)) {
                    if (b === u) return p;
                    (typeof s == 'string' || typeof p == 'string'
                      ? ((s = xn(s)), (p = xn(p)))
                      : ((s = Vo(s)), (p = Vo(p))),
                      (b = a(s, p)));
                  }
                  return b;
                };
              }
              function cf(a) {
                return Ya(function (i) {
                  return (
                    (i = Ct(i, Nn(Re()))),
                    Le(function (s) {
                      var p = this;
                      return a(i, function (b) {
                        return Hn(b, p, s);
                      });
                    })
                  );
                });
              }
              function Br(a, i) {
                i = i === u ? ' ' : xn(i);
                var s = i.length;
                if (s < 2) return s ? Ea(i, a) : i;
                var p = Ea(i, Zl(a / kl(i)));
                return hl(i) ? wa(wt(p), 0, a).join('') : p.slice(0, a);
              }
              function zh(a, i, s, p) {
                var b = i & Q,
                  A = _u(a);
                function w() {
                  for (
                    var M = -1,
                      U = arguments.length,
                      re = -1,
                      le = p.length,
                      ce = K(le + U),
                      de = this && this !== Xt && this instanceof w ? A : a;
                    ++re < le;
                  )
                    ce[re] = p[re];
                  for (; U--; ) ce[re++] = arguments[++M];
                  return Hn(de, b ? s : this, ce);
                }
                return w;
              }
              function ff(a) {
                return function (i, s, p) {
                  return (
                    p && typeof p != 'number' && cn(i, s, p) && (s = p = u),
                    (i = vr(i)),
                    s === u ? ((s = i), (i = 0)) : (s = vr(s)),
                    (p = p === u ? (i < s ? 1 : -1) : vr(p)),
                    Ko(i, s, p, a)
                  );
                };
              }
              function Cu(a) {
                return function (i, s) {
                  return (
                    (typeof i == 'string' && typeof s == 'string') ||
                      ((i = Pn(i)), (s = Pn(s))),
                    a(i, s)
                  );
                };
              }
              function of(a, i, s, p, b, A, w, M, U, re) {
                var le = i & ue,
                  ce = le ? w : u,
                  de = le ? u : w,
                  _e = le ? A : u,
                  we = le ? u : A;
                ((i |= le ? fe : W), (i &= ~(le ? W : fe)), i & $ || (i &= -4));
                var Ge = [a, i, b, _e, ce, we, de, M, U, re],
                  Oe = s.apply(u, Ge);
                return (
                  zu(a) && Nh(Oe, Ge),
                  (Oe.placeholder = p),
                  vi(Oe, a, i)
                );
              }
              function Au(a) {
                var i = At[a];
                return function (s, p) {
                  if (
                    ((s = Pn(s)),
                    (p = p == null ? 0 : Nt(Ee(p), 292)),
                    p && kn(s))
                  ) {
                    var b = (it(s) + 'e').split('e'),
                      A = i(b[0] + 'e' + (+b[1] + p));
                    return (
                      (b = (it(A) + 'e').split('e')),
                      +(b[0] + 'e' + (+b[1] - p))
                    );
                  }
                  return i(s);
                };
              }
              var jh =
                Rr && 1 / Dc(new Rr([, -0]))[1] == ne
                  ? function (a) {
                      return new Rr(a);
                    }
                  : n;
              function fs(a) {
                return function (i) {
                  var s = an(i);
                  return s == Wt ? jc(i) : s == Dn ? kd(i) : ah(i, a(i));
                };
              }
              function vn(a, i, s, p, b, A, w, M) {
                var U = i & I;
                if (!U && typeof a != 'function') throw new Gn(v);
                var re = p ? p.length : 0;
                if (
                  (re || ((i &= -97), (p = b = u)),
                  (w = w === u ? w : jt(Ee(w), 0)),
                  (M = M === u ? M : Ee(M)),
                  (re -= b ? b.length : 0),
                  i & W)
                ) {
                  var le = p,
                    ce = b;
                  p = b = u;
                }
                var de = U ? u : Tu(a),
                  _e = [a, i, s, p, b, le, ce, A, w, M];
                if (
                  (de && Uh(_e, de),
                  (a = _e[0]),
                  (i = _e[1]),
                  (s = _e[2]),
                  (p = _e[3]),
                  (b = _e[4]),
                  (M = _e[9] =
                    _e[9] === u ? (U ? 0 : a.length) : jt(_e[9] - re, 0)),
                  !M && i & (ue | V) && (i &= -25),
                  !i || i == Q)
                )
                  var we = is(a, i, s);
                else
                  i == ue || i == V
                    ? (we = Jd(a, i, M))
                    : (i == fe || i == (Q | fe)) && !b.length
                      ? (we = zh(a, i, s, p))
                      : (we = di.apply(u, _e));
                var Ge = de ? Qo : Nh;
                return vi(Ge(we, _e), a, i);
              }
              function os(a, i, s, p) {
                return a === u || (Jn(a, Xl[s]) && !We.call(p, s)) ? i : a;
              }
              function ss(a, i, s, p, b, A) {
                return (
                  Tt(a) &&
                    Tt(i) &&
                    (A.set(i, a), vu(a, i, u, ss, A), A.delete(i)),
                  a
                );
              }
              function Dh(a) {
                return Vu(a) ? u : a;
              }
              function Ru(a, i, s, p, b, A) {
                var w = s & N,
                  M = a.length,
                  U = i.length;
                if (M != U && !(w && U > M)) return !1;
                var re = A.get(a),
                  le = A.get(i);
                if (re && le) return re == i && le == a;
                var ce = -1,
                  de = !0,
                  _e = s & X ? new bl() : u;
                for (A.set(a, i), A.set(i, a); ++ce < M; ) {
                  var we = a[ce],
                    Ge = i[ce];
                  if (p)
                    var Oe = w
                      ? p(Ge, we, ce, i, a, A)
                      : p(we, Ge, ce, a, i, A);
                  if (Oe !== u) {
                    if (Oe) continue;
                    de = !1;
                    break;
                  }
                  if (_e) {
                    if (
                      !Ro(i, function (Qe, Ve) {
                        if (!eu(_e, Ve) && (we === Qe || b(we, Qe, s, p, A)))
                          return _e.push(Ve);
                      })
                    ) {
                      de = !1;
                      break;
                    }
                  } else if (!(we === Ge || b(we, Ge, s, p, A))) {
                    de = !1;
                    break;
                  }
                }
                return (A.delete(a), A.delete(i), de);
              }
              function qh(a, i, s, p, b, A, w) {
                switch (s) {
                  case Qa:
                    if (
                      a.byteLength != i.byteLength ||
                      a.byteOffset != i.byteOffset
                    )
                      return !1;
                    ((a = a.buffer), (i = i.buffer));
                  case Ll:
                    return !(
                      a.byteLength != i.byteLength || !A(new gl(a), new gl(i))
                    );
                  case Ft:
                  case _t:
                  case tl:
                    return Jn(+a, +i);
                  case el:
                    return a.name == i.name && a.message == i.message;
                  case nl:
                  case Ui:
                    return a == i + '';
                  case Wt:
                    var M = jc;
                  case Dn:
                    var U = p & N;
                    if ((M || (M = Dc), a.size != i.size && !U)) return !1;
                    var re = w.get(a);
                    if (re) return re == i;
                    ((p |= X), w.set(a, i));
                    var le = Ru(M(a), M(i), p, b, A, w);
                    return (w.delete(a), le);
                  case ic:
                    if (Jl) return Jl.call(a) == Jl.call(i);
                }
                return !1;
              }
              function hs(a, i, s, p, b, A) {
                var w = s & N,
                  M = sf(a),
                  U = M.length,
                  re = sf(i),
                  le = re.length;
                if (U != le && !w) return !1;
                for (var ce = U; ce--; ) {
                  var de = M[ce];
                  if (!(w ? de in i : We.call(i, de))) return !1;
                }
                var _e = A.get(a),
                  we = A.get(i);
                if (_e && we) return _e == i && we == a;
                var Ge = !0;
                (A.set(a, i), A.set(i, a));
                for (var Oe = w; ++ce < U; ) {
                  de = M[ce];
                  var Qe = a[de],
                    Ve = i[de];
                  if (p)
                    var Da = w
                      ? p(Ve, Qe, de, i, a, A)
                      : p(Qe, Ve, de, a, i, A);
                  if (!(Da === u ? Qe === Ve || b(Qe, Ve, s, p, A) : Da)) {
                    Ge = !1;
                    break;
                  }
                  Oe || (Oe = de == 'constructor');
                }
                if (Ge && !Oe) {
                  var ea = a.constructor,
                    qa = i.constructor;
                  ea != qa &&
                    'constructor' in a &&
                    'constructor' in i &&
                    !(
                      typeof ea == 'function' &&
                      ea instanceof ea &&
                      typeof qa == 'function' &&
                      qa instanceof qa
                    ) &&
                    (Ge = !1);
                }
                return (A.delete(a), A.delete(i), Ge);
              }
              function Ya(a) {
                return yf(bs(a, u, St), a + '');
              }
              function sf(a) {
                return Yo(a, It, df);
              }
              function ds(a) {
                return Yo(a, Mn, Ou);
              }
              var Tu = Gt
                ? function (a) {
                    return Gt.get(a);
                  }
                : n;
              function Ot(a) {
                for (
                  var i = a.name + '',
                    s = lt[i],
                    p = We.call(lt, i) ? s.length : 0;
                  p--;
                ) {
                  var b = s[p],
                    A = b.func;
                  if (A == null || A == a) return b.name;
                }
                return i;
              }
              function qt(a) {
                var i = We.call(C, 'placeholder') ? C : a;
                return i.placeholder;
              }
              function Re() {
                var a = C.iteratee || ac;
                return (
                  (a = a === ac ? ii : a),
                  arguments.length ? a(arguments[0], arguments[1]) : a
                );
              }
              function Eu(a, i) {
                var s = a.__data__;
                return pf(i)
                  ? s[typeof i == 'string' ? 'string' : 'hash']
                  : s.map;
              }
              function hf(a) {
                for (var i = It(a), s = i.length; s--; ) {
                  var p = i[s],
                    b = a[p];
                  i[s] = [p, b, Fa(b)];
                }
                return i;
              }
              function Hr(a, i) {
                var s = rh(a, i);
                return gu(s) ? s : u;
              }
              function wu(a) {
                var i = We.call(a, tr),
                  s = a[tr];
                try {
                  a[tr] = u;
                  var p = !0;
                } catch {}
                var b = bn.call(a);
                return (p && (i ? (a[tr] = s) : delete a[tr]), b);
              }
              var df = iu
                  ? function (a) {
                      return a == null
                        ? []
                        : ((a = ft(a)),
                          Cr(iu(a), function (i) {
                            return ru.call(a, i);
                          }));
                    }
                  : ae,
                Ou = iu
                  ? function (a) {
                      for (var i = []; a; ) (Ar(i, df(a)), (a = Ha(a)));
                      return i;
                    }
                  : ae,
                an = nn;
              ((ca && an(new ca(new ArrayBuffer(1))) != Qa) ||
                (Yn && an(new Yn()) != Wt) ||
                (kc && an(kc.resolve()) != lo) ||
                (Rr && an(new Rr()) != Dn) ||
                (pl && an(new pl()) != Ni)) &&
                (an = function (a) {
                  var i = nn(a),
                    s = i == Za ? a.constructor : u,
                    p = s ? fn(s) : '';
                  if (p)
                    switch (p) {
                      case Ze:
                        return Qa;
                      case Tr:
                        return Wt;
                      case fa:
                        return lo;
                      case Bo:
                        return Dn;
                      case Er:
                        return Ni;
                    }
                  return i;
                });
              function Wd(a, i, s) {
                for (var p = -1, b = s.length; ++p < b; ) {
                  var A = s[p],
                    w = A.size;
                  switch (A.type) {
                    case 'drop':
                      a += w;
                      break;
                    case 'dropRight':
                      i -= w;
                      break;
                    case 'take':
                      i = Nt(i, a + w);
                      break;
                    case 'takeRight':
                      a = jt(a, i - w);
                      break;
                  }
                }
                return { start: a, end: i };
              }
              function gf(a) {
                var i = a.match(j0);
                return i ? i[1].split(D0) : [];
              }
              function vf(a, i, s) {
                i = Zn(i, a);
                for (var p = -1, b = i.length, A = !1; ++p < b; ) {
                  var w = Cn(i[p]);
                  if (!(A = a != null && s(a, w))) break;
                  a = a[w];
                }
                return A || ++p != b
                  ? A
                  : ((b = a == null ? 0 : a.length),
                    !!b && jf(b) && Oa(w, b) && (je(a) || wl(a)));
              }
              function Lh(a) {
                var i = a.length,
                  s = new a.constructor(i);
                return (
                  i &&
                    typeof a[0] == 'string' &&
                    We.call(a, 'index') &&
                    ((s.index = a.index), (s.input = a.input)),
                  s
                );
              }
              function gs(a) {
                return typeof a.constructor == 'function' && !gi(a)
                  ? wr(Ha(a))
                  : {};
              }
              function Bh(a, i, s) {
                var p = a.constructor;
                switch (i) {
                  case Ll:
                    return bu(a);
                  case Ft:
                  case _t:
                    return new p(+a);
                  case Qa:
                    return Id(a, s);
                  case uo:
                  case uc:
                  case co:
                  case fo:
                  case al:
                  case sn:
                  case La:
                  case hn:
                  case oo:
                    return ts(a, s);
                  case Wt:
                    return new p();
                  case tl:
                  case Ui:
                    return new p(a);
                  case nl:
                    return Th(a);
                  case Dn:
                    return new p();
                  case ic:
                    return Eh(a);
                }
              }
              function vs(a, i) {
                var s = i.length;
                if (!s) return a;
                var p = s - 1;
                return (
                  (i[p] = (s > 1 ? '& ' : '') + i[p]),
                  (i = i.join(s > 2 ? ', ' : ' ')),
                  a.replace(
                    vo,
                    `{
/* [wrapped with ` +
                      i +
                      `] */
`,
                  )
                );
              }
              function ps(a) {
                return je(a) || wl(a) || !!(sh && a && a[sh]);
              }
              function Oa(a, i) {
                var s = typeof a;
                return (
                  (i = i ?? se),
                  !!i &&
                    (s == 'number' || (s != 'symbol' && po.test(a))) &&
                    a > -1 &&
                    a % 1 == 0 &&
                    a < i
                );
              }
              function cn(a, i, s) {
                if (!Tt(s)) return !1;
                var p = typeof i;
                return (
                  p == 'number'
                    ? wn(s) && Oa(i, s.length)
                    : p == 'string' && i in s
                )
                  ? Jn(s[i], a)
                  : !1;
              }
              function Mu(a, i) {
                if (je(a)) return !1;
                var s = typeof a;
                return s == 'number' ||
                  s == 'symbol' ||
                  s == 'boolean' ||
                  a == null ||
                  On(a)
                  ? !0
                  : Fi.test(a) || !ho.test(a) || (i != null && a in ft(i));
              }
              function pf(a) {
                var i = typeof a;
                return i == 'string' ||
                  i == 'number' ||
                  i == 'symbol' ||
                  i == 'boolean'
                  ? a !== '__proto__'
                  : a === null;
              }
              function zu(a) {
                var i = Ot(a),
                  s = C[i];
                if (typeof s != 'function' || !(i in De.prototype)) return !1;
                if (a === s) return !0;
                var p = Tu(s);
                return !!p && a === p[0];
              }
              function Hh(a) {
                return !!Hc && Hc in a;
              }
              var ms = Lc ? Wn : F;
              function gi(a) {
                var i = a && a.constructor,
                  s = (typeof i == 'function' && i.prototype) || Xl;
                return a === s;
              }
              function Fa(a) {
                return a === a && !Tt(a);
              }
              function mf(a, i) {
                return function (s) {
                  return s == null ? !1 : s[a] === i && (i !== u || a in ft(s));
                };
              }
              function Pd(a) {
                var i = Ku(a, function (p) {
                    return (s.size === S && s.clear(), p);
                  }),
                  s = i.cache;
                return i;
              }
              function Uh(a, i) {
                var s = a[1],
                  p = i[1],
                  b = s | p,
                  A = b < (Q | I | k),
                  w =
                    (p == k && s == ue) ||
                    (p == k && s == pe && a[7].length <= i[8]) ||
                    (p == (k | pe) && i[7].length <= i[8] && s == ue);
                if (!(A || w)) return a;
                p & Q && ((a[2] = i[2]), (b |= s & Q ? 0 : $));
                var M = i[3];
                if (M) {
                  var U = a[3];
                  ((a[3] = U ? lf(U, M, i[4]) : M),
                    (a[4] = U ? Pa(a[3], E) : i[4]));
                }
                return (
                  (M = i[5]),
                  M &&
                    ((U = a[5]),
                    (a[5] = U ? as(U, M, i[6]) : M),
                    (a[6] = U ? Pa(a[5], E) : i[6])),
                  (M = i[7]),
                  M && (a[7] = M),
                  p & k && (a[8] = a[8] == null ? i[8] : Nt(a[8], i[8])),
                  a[9] == null && (a[9] = i[9]),
                  (a[0] = i[0]),
                  (a[1] = b),
                  a
                );
              }
              function cr(a) {
                var i = [];
                if (a != null) for (var s in ft(a)) i.push(s);
                return i;
              }
              function ys(a) {
                return bn.call(a);
              }
              function bs(a, i, s) {
                return (
                  (i = jt(i === u ? a.length - 1 : i, 0)),
                  function () {
                    for (
                      var p = arguments,
                        b = -1,
                        A = jt(p.length - i, 0),
                        w = K(A);
                      ++b < A;
                    )
                      w[b] = p[i + b];
                    b = -1;
                    for (var M = K(i + 1); ++b < i; ) M[b] = p[b];
                    return ((M[i] = s(w)), Hn(a, this, M));
                  }
                );
              }
              function ju(a, i) {
                return i.length < 2 ? a : ka(a, $n(i, 0, -1));
              }
              function Du(a, i) {
                for (var s = a.length, p = Nt(i.length, s), b = gn(a); p--; ) {
                  var A = i[p];
                  a[p] = Oa(A, s) ? b[A] : u;
                }
                return a;
              }
              function yt(a, i) {
                if (
                  !(i === 'constructor' && typeof a[i] == 'function') &&
                  i != '__proto__'
                )
                  return a[i];
              }
              var Nh = fr(Qo),
                qu =
                  vl ||
                  function (a, i) {
                    return Xt.setTimeout(a, i);
                  },
                yf = fr(Sh);
              function vi(a, i, s) {
                var p = i + '';
                return yf(a, vs(p, Gh(gf(p), s)));
              }
              function fr(a) {
                var i = 0,
                  s = 0;
                return function () {
                  var p = ia(),
                    b = Ae - (p - s);
                  if (((s = p), b > 0)) {
                    if (++i >= Ue) return arguments[0];
                  } else i = 0;
                  return a.apply(u, arguments);
                };
              }
              function Lu(a, i) {
                var s = -1,
                  p = a.length,
                  b = p - 1;
                for (i = i === u ? p : i; ++s < i; ) {
                  var A = fi(s, b),
                    w = a[A];
                  ((a[A] = a[s]), (a[s] = w));
                }
                return ((a.length = i), a);
              }
              var _s = Pd(function (a) {
                var i = [];
                return (
                  a.charCodeAt(0) === 46 && i.push(''),
                  a.replace(Ed, function (s, p, b, A) {
                    i.push(b ? A.replace(mn, '$1') : p || s);
                  }),
                  i
                );
              });
              function Cn(a) {
                if (typeof a == 'string' || On(a)) return a;
                var i = a + '';
                return i == '0' && 1 / a == -ne ? '-0' : i;
              }
              function fn(a) {
                if (a != null) {
                  try {
                    return Bc.call(a);
                  } catch {}
                  try {
                    return a + '';
                  } catch {}
                }
                return '';
              }
              function Gh(a, i) {
                return (
                  Un(me, function (s) {
                    var p = '_.' + s[0];
                    i & s[1] && !Tc(a, p) && a.push(p);
                  }),
                  a.sort()
                );
              }
              function bf(a) {
                if (a instanceof De) return a.clone();
                var i = new _n(a.__wrapped__, a.__chain__);
                return (
                  (i.__actions__ = gn(a.__actions__)),
                  (i.__index__ = a.__index__),
                  (i.__values__ = a.__values__),
                  i
                );
              }
              function kh(a, i, s) {
                (s ? cn(a, i, s) : i === u) ? (i = 1) : (i = jt(Ee(i), 0));
                var p = a == null ? 0 : a.length;
                if (!p || i < 1) return [];
                for (var b = 0, A = 0, w = K(Zl(p / i)); b < p; )
                  w[A++] = $n(a, b, (b += i));
                return w;
              }
              function Ss(a) {
                for (
                  var i = -1, s = a == null ? 0 : a.length, p = 0, b = [];
                  ++i < s;
                ) {
                  var A = a[i];
                  A && (b[p++] = A);
                }
                return b;
              }
              function xs() {
                var a = arguments.length;
                if (!a) return [];
                for (var i = K(a - 1), s = arguments[0], p = a; p--; )
                  i[p - 1] = arguments[p];
                return Ar(je(s) ? gn(s) : [s], Kt(i, 1));
              }
              var _f = Le(function (a, i) {
                  return Ut(a) ? ha(a, Kt(i, 1, Ut, !0)) : [];
                }),
                Yh = Le(function (a, i) {
                  var s = xt(i);
                  return (
                    Ut(s) && (s = u),
                    Ut(a) ? ha(a, Kt(i, 1, Ut, !0), Re(s, 2)) : []
                  );
                }),
                or = Le(function (a, i) {
                  var s = xt(i);
                  return (
                    Ut(s) && (s = u),
                    Ut(a) ? ha(a, Kt(i, 1, Ut, !0), u, s) : []
                  );
                });
              function Yt(a, i, s) {
                var p = a == null ? 0 : a.length;
                return p
                  ? ((i = s || i === u ? 1 : Ee(i)), $n(a, i < 0 ? 0 : i, p))
                  : [];
              }
              function Cs(a, i, s) {
                var p = a == null ? 0 : a.length;
                return p
                  ? ((i = s || i === u ? 1 : Ee(i)),
                    (i = p - i),
                    $n(a, 0, i < 0 ? 0 : i))
                  : [];
              }
              function Fh(a, i) {
                return a && a.length ? mu(a, Re(i, 3), !0, !0) : [];
              }
              function Vt(a, i) {
                return a && a.length ? mu(a, Re(i, 3), !0) : [];
              }
              function eg(a, i, s, p) {
                var b = a == null ? 0 : a.length;
                return b
                  ? (s &&
                      typeof s != 'number' &&
                      cn(a, i, s) &&
                      ((s = 0), (p = b)),
                    su(a, i, s, p))
                  : [];
              }
              function As(a, i, s) {
                var p = a == null ? 0 : a.length;
                if (!p) return -1;
                var b = s == null ? 0 : Ee(s);
                return (b < 0 && (b = jt(p + b, 0)), Ec(a, Re(i, 3), b));
              }
              function Rs(a, i, s) {
                var p = a == null ? 0 : a.length;
                if (!p) return -1;
                var b = p - 1;
                return (
                  s !== u &&
                    ((b = Ee(s)), (b = s < 0 ? jt(p + b, 0) : Nt(b, p - 1))),
                  Ec(a, Re(i, 3), b, !0)
                );
              }
              function St(a) {
                var i = a == null ? 0 : a.length;
                return i ? Kt(a, 1) : [];
              }
              function An(a) {
                var i = a == null ? 0 : a.length;
                return i ? Kt(a, ne) : [];
              }
              function sr(a, i) {
                var s = a == null ? 0 : a.length;
                return s ? ((i = i === u ? 1 : Ee(i)), Kt(a, i)) : [];
              }
              function Xh(a) {
                for (
                  var i = -1, s = a == null ? 0 : a.length, p = {};
                  ++i < s;
                ) {
                  var b = a[i];
                  p[b[0]] = b[1];
                }
                return p;
              }
              function Ts(a) {
                return a && a.length ? a[0] : u;
              }
              function Kh(a, i, s) {
                var p = a == null ? 0 : a.length;
                if (!p) return -1;
                var b = s == null ? 0 : Ee(s);
                return (b < 0 && (b = jt(p + b, 0)), Gl(a, i, b));
              }
              function tg(a) {
                var i = a == null ? 0 : a.length;
                return i ? $n(a, 0, -1) : [];
              }
              var Sf = Le(function (a) {
                  var i = Ct(a, Po);
                  return i.length && i[0] === a[0] ? du(i) : [];
                }),
                Rn = Le(function (a) {
                  var i = xt(a),
                    s = Ct(a, Po);
                  return (
                    i === xt(s) ? (i = u) : s.pop(),
                    s.length && s[0] === a[0] ? du(s, Re(i, 2)) : []
                  );
                }),
                Ma = Le(function (a) {
                  var i = xt(a),
                    s = Ct(a, Po);
                  return (
                    (i = typeof i == 'function' ? i : u),
                    i && s.pop(),
                    s.length && s[0] === a[0] ? du(s, u, i) : []
                  );
                });
              function $h(a, i) {
                return a == null ? '' : Ql.call(a, i);
              }
              function xt(a) {
                var i = a == null ? 0 : a.length;
                return i ? a[i - 1] : u;
              }
              function Zh(a, i, s) {
                var p = a == null ? 0 : a.length;
                if (!p) return -1;
                var b = p;
                return (
                  s !== u &&
                    ((b = Ee(s)), (b = b < 0 ? jt(p + b, 0) : Nt(b, p - 1))),
                  i === i ? Fd(a, i, b) : Ec(a, th, b, !0)
                );
              }
              function hr(a, i) {
                return a && a.length ? ef(a, Ee(i)) : u;
              }
              var Al = Le(Xa);
              function Xa(a, i) {
                return a && a.length && i && i.length ? ui(a, i) : a;
              }
              function Es(a, i, s) {
                return a && a.length && i && i.length ? ui(a, i, Re(s, 2)) : a;
              }
              function ws(a, i, s) {
                return a && a.length && i && i.length ? ui(a, i, u, s) : a;
              }
              var za = Ya(function (a, i) {
                var s = a == null ? 0 : a.length,
                  p = ai(a, i);
                return (
                  ci(
                    a,
                    Ct(i, function (b) {
                      return Oa(b, s) ? +b : b;
                    }).sort(ns),
                  ),
                  p
                );
              });
              function Qh(a, i) {
                var s = [];
                if (!(a && a.length)) return s;
                var p = -1,
                  b = [],
                  A = a.length;
                for (i = Re(i, 3); ++p < A; ) {
                  var w = a[p];
                  i(w, p, a) && (s.push(w), b.push(p));
                }
                return (ci(a, b), s);
              }
              function Ur(a) {
                return a == null ? a : Ua.call(a);
              }
              function Bu(a, i, s) {
                var p = a == null ? 0 : a.length;
                return p
                  ? (s && typeof s != 'number' && cn(a, i, s)
                      ? ((i = 0), (s = p))
                      : ((i = i == null ? 0 : Ee(i)),
                        (s = s === u ? p : Ee(s))),
                    $n(a, i, s))
                  : [];
              }
              function Hu(a, i) {
                return si(a, i);
              }
              function pi(a, i, s) {
                return nf(a, i, Re(s, 2));
              }
              function Vh(a, i) {
                var s = a == null ? 0 : a.length;
                if (s) {
                  var p = si(a, i);
                  if (p < s && Jn(a[p], i)) return p;
                }
                return -1;
              }
              function Ih(a, i) {
                return si(a, i, !0);
              }
              function Uu(a, i, s) {
                return nf(a, i, Re(s, 2), !0);
              }
              function Jh(a, i) {
                var s = a == null ? 0 : a.length;
                if (s) {
                  var p = si(a, i, !0) - 1;
                  if (Jn(a[p], i)) return p;
                }
                return -1;
              }
              function xf(a) {
                return a && a.length ? Ah(a) : [];
              }
              function Wh(a, i) {
                return a && a.length ? Ah(a, Re(i, 2)) : [];
              }
              function ng(a) {
                var i = a == null ? 0 : a.length;
                return i ? $n(a, 1, i) : [];
              }
              function ag(a, i, s) {
                return a && a.length
                  ? ((i = s || i === u ? 1 : Ee(i)), $n(a, 0, i < 0 ? 0 : i))
                  : [];
              }
              function Pe(a, i, s) {
                var p = a == null ? 0 : a.length;
                return p
                  ? ((i = s || i === u ? 1 : Ee(i)),
                    (i = p - i),
                    $n(a, i < 0 ? 0 : i, p))
                  : [];
              }
              function bt(a, i) {
                return a && a.length ? mu(a, Re(i, 3), !1, !0) : [];
              }
              function Fe(a, i) {
                return a && a.length ? mu(a, Re(i, 3)) : [];
              }
              var Ke = Le(function (a) {
                  return ur(Kt(a, 1, Ut, !0));
                }),
                ot = Le(function (a) {
                  var i = xt(a);
                  return (Ut(i) && (i = u), ur(Kt(a, 1, Ut, !0), Re(i, 2)));
                }),
                Qn = Le(function (a) {
                  var i = xt(a);
                  return (
                    (i = typeof i == 'function' ? i : u),
                    ur(Kt(a, 1, Ut, !0), u, i)
                  );
                });
              function Nr(a) {
                return a && a.length ? ur(a) : [];
              }
              function mi(a, i) {
                return a && a.length ? ur(a, Re(i, 2)) : [];
              }
              function Os(a, i) {
                return (
                  (i = typeof i == 'function' ? i : u),
                  a && a.length ? ur(a, u, i) : []
                );
              }
              function ja(a) {
                if (!(a && a.length)) return [];
                var i = 0;
                return (
                  (a = Cr(a, function (s) {
                    if (Ut(s)) return ((i = jt(s.length, i)), !0);
                  })),
                  Mc(i, function (s) {
                    return Ct(a, ol(s));
                  })
                );
              }
              function Mt(a, i) {
                if (!(a && a.length)) return [];
                var s = ja(a);
                return i == null
                  ? s
                  : Ct(s, function (p) {
                      return Hn(i, u, p);
                    });
              }
              var Gr = Le(function (a, i) {
                  return Ut(a) ? ha(a, i) : [];
                }),
                Rl = Le(function (a) {
                  return af(Cr(a, Ut));
                }),
                Ms = Le(function (a) {
                  var i = xt(a);
                  return (Ut(i) && (i = u), af(Cr(a, Ut), Re(i, 2)));
                }),
                Vn = Le(function (a) {
                  var i = xt(a);
                  return (
                    (i = typeof i == 'function' ? i : u),
                    af(Cr(a, Ut), u, i)
                  );
                }),
                yi = Le(ja);
              function Nu(a, i) {
                return Wo(a || [], i || [], Ca);
              }
              function Tn(a, i) {
                return Wo(a || [], i || [], oi);
              }
              var zs = Le(function (a) {
                var i = a.length,
                  s = i > 1 ? a[i - 1] : u;
                return (
                  (s = typeof s == 'function' ? (a.pop(), s) : u),
                  Mt(a, s)
                );
              });
              function Gu(a) {
                var i = C(a);
                return ((i.__chain__ = !0), i);
              }
              function Ph(a, i) {
                return (i(a), a);
              }
              function Tl(a, i) {
                return i(a);
              }
              var Cf = Ya(function (a) {
                var i = a.length,
                  s = i ? a[0] : 0,
                  p = this.__wrapped__,
                  b = function (A) {
                    return ai(A, a);
                  };
                return i > 1 ||
                  this.__actions__.length ||
                  !(p instanceof De) ||
                  !Oa(s)
                  ? this.thru(b)
                  : ((p = p.slice(s, +s + (i ? 1 : 0))),
                    p.__actions__.push({ func: Tl, args: [b], thisArg: u }),
                    new _n(p, this.__chain__).thru(function (A) {
                      return (i && !A.length && A.push(u), A);
                    }));
              });
              function kr() {
                return Gu(this);
              }
              function $t() {
                return new _n(this.value(), this.__chain__);
              }
              function Yr() {
                this.__values__ === u && (this.__values__ = C1(this.value()));
                var a = this.__index__ >= this.__values__.length,
                  i = a ? u : this.__values__[this.__index__++];
                return { done: a, value: i };
              }
              function bi() {
                return this;
              }
              function dr(a) {
                for (var i, s = this; s instanceof Or; ) {
                  var p = bf(s);
                  ((p.__index__ = 0),
                    (p.__values__ = u),
                    i ? (b.__wrapped__ = p) : (i = p));
                  var b = p;
                  s = s.__wrapped__;
                }
                return ((b.__wrapped__ = a), i);
              }
              function js() {
                var a = this.__wrapped__;
                if (a instanceof De) {
                  var i = a;
                  return (
                    this.__actions__.length && (i = new De(this)),
                    (i = i.reverse()),
                    i.__actions__.push({ func: Tl, args: [Ur], thisArg: u }),
                    new _n(i, this.__chain__)
                  );
                }
                return this.thru(Ur);
              }
              function Ds() {
                return Jo(this.__wrapped__, this.__actions__);
              }
              var e1 = uf(function (a, i, s) {
                We.call(a, s) ? ++a[s] : Fn(a, s, 1);
              });
              function ku(a, i, s) {
                var p = je(a) ? W0 : jr;
                return (s && cn(a, i, s) && (i = u), p(a, Re(i, 3)));
              }
              function qs(a, i) {
                var s = je(a) ? Cr : Qc;
                return s(a, Re(i, 3));
              }
              var In = cs(As),
                t1 = cs(Rs);
              function En(a, i) {
                return Kt(Yu(a, i), 1);
              }
              function n1(a, i) {
                return Kt(Yu(a, i), ne);
              }
              function a1(a, i, s) {
                return ((s = s === u ? 1 : Ee(s)), Kt(Yu(a, i), s));
              }
              function r1(a, i) {
                var s = je(a) ? Un : Ga;
                return s(a, Re(i, 3));
              }
              function gr(a, i) {
                var s = je(a) ? Ld : Zc;
                return s(a, Re(i, 3));
              }
              var Af = uf(function (a, i, s) {
                We.call(a, s) ? a[s].push(i) : Fn(a, s, [i]);
              });
              function Ls(a, i, s, p) {
                ((a = wn(a) ? a : wi(a)), (s = s && !p ? Ee(s) : 0));
                var b = a.length;
                return (
                  s < 0 && (s = jt(b + s, 0)),
                  Wu(a)
                    ? s <= b && a.indexOf(i, s) > -1
                    : !!b && Gl(a, i, s) > -1
                );
              }
              var _i = Le(function (a, i, s) {
                  var p = -1,
                    b = typeof i == 'function',
                    A = wn(a) ? K(a.length) : [];
                  return (
                    Ga(a, function (w) {
                      A[++p] = b ? Hn(i, w, s) : ga(w, i, s);
                    }),
                    A
                  );
                }),
                l1 = uf(function (a, i, s) {
                  Fn(a, s, i);
                });
              function Yu(a, i) {
                var s = je(a) ? Ct : Wc;
                return s(a, Re(i, 3));
              }
              function i1(a, i, s, p) {
                return a == null
                  ? []
                  : (je(i) || (i = i == null ? [] : [i]),
                    (s = p ? u : s),
                    je(s) || (s = s == null ? [] : [s]),
                    tf(a, i, s));
              }
              var u1 = uf(
                function (a, i, s) {
                  a[s ? 0 : 1].push(i);
                },
                function () {
                  return [[], []];
                },
              );
              function Rf(a, i, s) {
                var p = je(a) ? Ao : Eo,
                  b = arguments.length < 3;
                return p(a, Re(i, 4), s, b, Ga);
              }
              function Bs(a, i, s) {
                var p = je(a) ? P0 : Eo,
                  b = arguments.length < 3;
                return p(a, Re(i, 4), s, b, Zc);
              }
              function rg(a, i) {
                var s = je(a) ? Cr : Qc;
                return s(a, wf(Re(i, 3)));
              }
              function lg(a) {
                var i = je(a) ? ou : $o;
                return i(a);
              }
              function ig(a, i, s) {
                (s ? cn(a, i, s) : i === u) ? (i = 1) : (i = Ee(i));
                var p = je(a) ? Kc : Zo;
                return p(a, i);
              }
              function c1(a) {
                var i = je(a) ? mh : xh;
                return i(a);
              }
              function f1(a) {
                if (a == null) return 0;
                if (wn(a)) return Wu(a) ? kl(a) : a.length;
                var i = an(a);
                return i == Wt || i == Dn ? a.size : qr(a).length;
              }
              function Si(a, i, s) {
                var p = je(a) ? Ro : Ch;
                return (s && cn(a, i, s) && (i = u), p(a, Re(i, 3)));
              }
              var Tf = Le(function (a, i) {
                  if (a == null) return [];
                  var s = i.length;
                  return (
                    s > 1 && cn(a, i[0], i[1])
                      ? (i = [])
                      : s > 2 && cn(i[0], i[1], i[2]) && (i = [i[0]]),
                    tf(a, Kt(i, 1), [])
                  );
                }),
                Fu =
                  Gc ||
                  function () {
                    return Xt.Date.now();
                  };
              function o1(a, i) {
                if (typeof i != 'function') throw new Gn(v);
                return (
                  (a = Ee(a)),
                  function () {
                    if (--a < 1) return i.apply(this, arguments);
                  }
                );
              }
              function Hs(a, i, s) {
                return (
                  (i = s ? u : i),
                  (i = a && i == null ? a.length : i),
                  vn(a, k, u, u, u, u, i)
                );
              }
              function Us(a, i) {
                var s;
                if (typeof i != 'function') throw new Gn(v);
                return (
                  (a = Ee(a)),
                  function () {
                    return (
                      --a > 0 && (s = i.apply(this, arguments)),
                      a <= 1 && (i = u),
                      s
                    );
                  }
                );
              }
              var Ef = Le(function (a, i, s) {
                  var p = Q;
                  if (s.length) {
                    var b = Pa(s, qt(Ef));
                    p |= fe;
                  }
                  return vn(a, p, i, s, b);
                }),
                Ns = Le(function (a, i, s) {
                  var p = Q | I;
                  if (s.length) {
                    var b = Pa(s, qt(Ns));
                    p |= fe;
                  }
                  return vn(i, p, a, s, b);
                });
              function Xu(a, i, s) {
                i = s ? u : i;
                var p = vn(a, ue, u, u, u, u, u, i);
                return ((p.placeholder = Xu.placeholder), p);
              }
              function Gs(a, i, s) {
                i = s ? u : i;
                var p = vn(a, V, u, u, u, u, u, i);
                return ((p.placeholder = Gs.placeholder), p);
              }
              function ks(a, i, s) {
                var p,
                  b,
                  A,
                  w,
                  M,
                  U,
                  re = 0,
                  le = !1,
                  ce = !1,
                  de = !0;
                if (typeof a != 'function') throw new Gn(v);
                ((i = Pn(i) || 0),
                  Tt(s) &&
                    ((le = !!s.leading),
                    (ce = 'maxWait' in s),
                    (A = ce ? jt(Pn(s.maxWait) || 0, i) : A),
                    (de = 'trailing' in s ? !!s.trailing : de)));
                function _e(Zt) {
                  var mr = p,
                    Ml = b;
                  return ((p = b = u), (re = Zt), (w = a.apply(Ml, mr)), w);
                }
                function we(Zt) {
                  return ((re = Zt), (M = qu(Qe, i)), le ? _e(Zt) : w);
                }
                function Ge(Zt) {
                  var mr = Zt - U,
                    Ml = Zt - re,
                    Ly = i - mr;
                  return ce ? Nt(Ly, A - Ml) : Ly;
                }
                function Oe(Zt) {
                  var mr = Zt - U,
                    Ml = Zt - re;
                  return U === u || mr >= i || mr < 0 || (ce && Ml >= A);
                }
                function Qe() {
                  var Zt = Fu();
                  if (Oe(Zt)) return Ve(Zt);
                  M = qu(Qe, Ge(Zt));
                }
                function Ve(Zt) {
                  return ((M = u), de && p ? _e(Zt) : ((p = b = u), w));
                }
                function Da() {
                  (M !== u && yu(M), (re = 0), (p = U = b = M = u));
                }
                function ea() {
                  return M === u ? w : Ve(Fu());
                }
                function qa() {
                  var Zt = Fu(),
                    mr = Oe(Zt);
                  if (((p = arguments), (b = this), (U = Zt), mr)) {
                    if (M === u) return we(U);
                    if (ce) return (yu(M), (M = qu(Qe, i)), _e(U));
                  }
                  return (M === u && (M = qu(Qe, i)), w);
                }
                return ((qa.cancel = Da), (qa.flush = ea), qa);
              }
              var st = Le(function (a, i) {
                  return ko(a, 1, i);
                }),
                Ys = Le(function (a, i, s) {
                  return ko(a, Pn(i) || 0, s);
                });
              function ug(a) {
                return vn(a, Se);
              }
              function Ku(a, i) {
                if (
                  typeof a != 'function' ||
                  (i != null && typeof i != 'function')
                )
                  throw new Gn(v);
                var s = function () {
                  var p = arguments,
                    b = i ? i.apply(this, p) : p[0],
                    A = s.cache;
                  if (A.has(b)) return A.get(b);
                  var w = a.apply(this, p);
                  return ((s.cache = A.set(b, w) || A), w);
                };
                return ((s.cache = new (Ku.Cache || xa)()), s);
              }
              Ku.Cache = xa;
              function wf(a) {
                if (typeof a != 'function') throw new Gn(v);
                return function () {
                  var i = arguments;
                  switch (i.length) {
                    case 0:
                      return !a.call(this);
                    case 1:
                      return !a.call(this, i[0]);
                    case 2:
                      return !a.call(this, i[0], i[1]);
                    case 3:
                      return !a.call(this, i[0], i[1], i[2]);
                  }
                  return !a.apply(this, i);
                };
              }
              function cg(a) {
                return Us(2, a);
              }
              var fg = Rh(function (a, i) {
                  i =
                    i.length == 1 && je(i[0])
                      ? Ct(i[0], Nn(Re()))
                      : Ct(Kt(i, 1), Nn(Re()));
                  var s = i.length;
                  return Le(function (p) {
                    for (var b = -1, A = Nt(p.length, s); ++b < A; )
                      p[b] = i[b].call(this, p[b]);
                    return Hn(a, this, p);
                  });
                }),
                xi = Le(function (a, i) {
                  var s = Pa(i, qt(xi));
                  return vn(a, fe, u, i, s);
                }),
                El = Le(function (a, i) {
                  var s = Pa(i, qt(El));
                  return vn(a, W, u, i, s);
                }),
                Fs = Ya(function (a, i) {
                  return vn(a, pe, u, u, u, i);
                });
              function Of(a, i) {
                if (typeof a != 'function') throw new Gn(v);
                return ((i = i === u ? i : Ee(i)), Le(a, i));
              }
              function Xs(a, i) {
                if (typeof a != 'function') throw new Gn(v);
                return (
                  (i = i == null ? 0 : jt(Ee(i), 0)),
                  Le(function (s) {
                    var p = s[i],
                      b = wa(s, 0, i);
                    return (p && Ar(b, p), Hn(a, this, b));
                  })
                );
              }
              function Fr(a, i, s) {
                var p = !0,
                  b = !0;
                if (typeof a != 'function') throw new Gn(v);
                return (
                  Tt(s) &&
                    ((p = 'leading' in s ? !!s.leading : p),
                    (b = 'trailing' in s ? !!s.trailing : b)),
                  ks(a, i, { leading: p, maxWait: i, trailing: b })
                );
              }
              function Ka(a) {
                return Hs(a, 1);
              }
              function $u(a, i) {
                return xi(rf(i), a);
              }
              function og() {
                if (!arguments.length) return [];
                var a = arguments[0];
                return je(a) ? a : [a];
              }
              function s1(a) {
                return dn(a, B);
              }
              function h1(a, i) {
                return ((i = typeof i == 'function' ? i : u), dn(a, B, i));
              }
              function d1(a) {
                return dn(a, T | B);
              }
              function g1(a, i) {
                return ((i = typeof i == 'function' ? i : u), dn(a, T | B, i));
              }
              function sg(a, i) {
                return i == null || zr(a, i, It(i));
              }
              function Jn(a, i) {
                return a === i || (a !== a && i !== i);
              }
              var v1 = Cu(hu),
                p1 = Cu(function (a, i) {
                  return a >= i;
                }),
                wl = Sn(
                  (function () {
                    return arguments;
                  })(),
                )
                  ? Sn
                  : function (a) {
                      return (
                        Lt(a) && We.call(a, 'callee') && !ru.call(a, 'callee')
                      );
                    },
                je = K.isArray,
                Ks = Z0 ? Nn(Z0) : Bt;
              function wn(a) {
                return a != null && jf(a.length) && !Wn(a);
              }
              function Ut(a) {
                return Lt(a) && wn(a);
              }
              function Zu(a) {
                return a === !0 || a === !1 || (Lt(a) && nn(a) == Ft);
              }
              var Xr = dh || F,
                m1 = Q0 ? Nn(Q0) : Ic;
              function Xe(a) {
                return Lt(a) && a.nodeType === 1 && !Vu(a);
              }
              function $s(a) {
                if (a == null) return !0;
                if (
                  wn(a) &&
                  (je(a) ||
                    typeof a == 'string' ||
                    typeof a.splice == 'function' ||
                    Xr(a) ||
                    Kr(a) ||
                    wl(a))
                )
                  return !a.length;
                var i = an(a);
                if (i == Wt || i == Dn) return !a.size;
                if (gi(a)) return !qr(a).length;
                for (var s in a) if (We.call(a, s)) return !1;
                return !0;
              }
              function Mf(a, i) {
                return Kn(a, i);
              }
              function Zs(a, i, s) {
                s = typeof s == 'function' ? s : u;
                var p = s ? s(a, i) : u;
                return p === u ? Kn(a, i, u, s) : !!p;
              }
              function zf(a) {
                if (!Lt(a)) return !1;
                var i = nn(a);
                return (
                  i == el ||
                  i == Hi ||
                  (typeof a.message == 'string' &&
                    typeof a.name == 'string' &&
                    !Vu(a))
                );
              }
              function Qs(a) {
                return typeof a == 'number' && kn(a);
              }
              function Wn(a) {
                if (!Tt(a)) return !1;
                var i = nn(a);
                return i == ql || i == ao || i == rt || i == io;
              }
              function Qu(a) {
                return typeof a == 'number' && a == Ee(a);
              }
              function jf(a) {
                return typeof a == 'number' && a > -1 && a % 1 == 0 && a <= se;
              }
              function Tt(a) {
                var i = typeof a;
                return a != null && (i == 'object' || i == 'function');
              }
              function Lt(a) {
                return a != null && typeof a == 'object';
              }
              var y1 = Rc ? Nn(Rc) : gt;
              function b1(a, i) {
                return a === i || Dt(a, i, hf(i));
              }
              function _1(a, i, s) {
                return (
                  (s = typeof s == 'function' ? s : u),
                  Dt(a, i, hf(i), s)
                );
              }
              function vt(a) {
                return Is(a) && a != +a;
              }
              function Vs(a) {
                if (ms(a)) throw new ze(g);
                return gu(a);
              }
              function rn(a) {
                return a === null;
              }
              function hg(a) {
                return a == null;
              }
              function Is(a) {
                return typeof a == 'number' || (Lt(a) && nn(a) == tl);
              }
              function Vu(a) {
                if (!Lt(a) || nn(a) != Za) return !1;
                var i = Ha(a);
                if (i === null) return !0;
                var s = We.call(i, 'constructor') && i.constructor;
                return (
                  typeof s == 'function' && s instanceof s && Bc.call(s) == Uc
                );
              }
              var Iu = V0 ? Nn(V0) : li;
              function Js(a) {
                return Qu(a) && a >= -se && a <= se;
              }
              var Ju = I0 ? Nn(I0) : xl;
              function Wu(a) {
                return typeof a == 'string' || (!je(a) && Lt(a) && nn(a) == Ui);
              }
              function On(a) {
                return typeof a == 'symbol' || (Lt(a) && nn(a) == ic);
              }
              var Kr = J0 ? Nn(J0) : Jc;
              function Ws(a) {
                return a === u;
              }
              function dg(a) {
                return Lt(a) && an(a) == Ni;
              }
              function S1(a) {
                return Lt(a) && nn(a) == M0;
              }
              var gg = Cu(Rt),
                x1 = Cu(function (a, i) {
                  return a <= i;
                });
              function C1(a) {
                if (!a) return [];
                if (wn(a)) return Wu(a) ? wt(a) : gn(a);
                if (en && a[en]) return jo(a[en]());
                var i = an(a),
                  s = i == Wt ? jc : i == Dn ? Dc : wi;
                return s(a);
              }
              function vr(a) {
                if (!a) return a === 0 ? a : 0;
                if (((a = Pn(a)), a === ne || a === -ne)) {
                  var i = a < 0 ? -1 : 1;
                  return i * nt;
                }
                return a === a ? a : 0;
              }
              function Ee(a) {
                var i = vr(a),
                  s = i % 1;
                return i === i ? (s ? i - s : i) : 0;
              }
              function Ps(a) {
                return a ? Aa(Ee(a), 0, z) : 0;
              }
              function Pn(a) {
                if (typeof a == 'number') return a;
                if (On(a)) return at;
                if (Tt(a)) {
                  var i = typeof a.valueOf == 'function' ? a.valueOf() : a;
                  a = Tt(i) ? i + '' : i;
                }
                if (typeof a != 'string') return a === 0 ? a : +a;
                a = sl(a);
                var s = Od.test(a);
                return s || Xi.test(a)
                  ? Cc(a.slice(2), s ? 2 : 8)
                  : wd.test(a)
                    ? at
                    : +a;
              }
              function Df(a) {
                return va(a, Mn(a));
              }
              function vg(a) {
                return a ? Aa(Ee(a), -se, se) : a === 0 ? a : 0;
              }
              function it(a) {
                return a == null ? '' : xn(a);
              }
              var A1 = Lr(function (a, i) {
                  if (gi(i) || wn(i)) {
                    va(i, It(i), a);
                    return;
                  }
                  for (var s in i) We.call(i, s) && Ca(a, s, i[s]);
                }),
                qf = Lr(function (a, i) {
                  va(i, Mn(i), a);
                }),
                Ci = Lr(function (a, i, s, p) {
                  va(i, Mn(i), a, p);
                }),
                pg = Lr(function (a, i, s, p) {
                  va(i, It(i), a, p);
                }),
                pa = Ya(ai);
              function e0(a, i) {
                var s = wr(a);
                return i == null ? s : Go(s, i);
              }
              var R1 = Le(function (a, i) {
                  a = ft(a);
                  var s = -1,
                    p = i.length,
                    b = p > 2 ? i[2] : u;
                  for (b && cn(i[0], i[1], b) && (p = 1); ++s < p; )
                    for (
                      var A = i[s], w = Mn(A), M = -1, U = w.length;
                      ++M < U;
                    ) {
                      var re = w[M],
                        le = a[re];
                      (le === u || (Jn(le, Xl[re]) && !We.call(a, re))) &&
                        (a[re] = A[re]);
                    }
                  return a;
                }),
                T1 = Le(function (a) {
                  return (a.push(u, ss), Hn(Ri, u, a));
                });
              function E1(a, i) {
                return eh(a, Re(i, 3), Ta);
              }
              function Pu(a, i) {
                return eh(a, Re(i, 3), Vc);
              }
              function ma(a, i) {
                return a == null ? a : Sl(a, Re(i, 3), Mn);
              }
              function w1(a, i) {
                return a == null ? a : ri(a, Re(i, 3), Mn);
              }
              function Lf(a, i) {
                return a && Ta(a, Re(i, 3));
              }
              function pr(a, i) {
                return a && Vc(a, Re(i, 3));
              }
              function mg(a) {
                return a == null ? [] : ir(a, It(a));
              }
              function yg(a) {
                return a == null ? [] : ir(a, Mn(a));
              }
              function $r(a, i, s) {
                var p = a == null ? u : ka(a, i);
                return p === u ? s : p;
              }
              function O1(a, i) {
                return a != null && vf(a, i, Xn);
              }
              function t0(a, i) {
                return a != null && vf(a, i, da);
              }
              var bg = Su(function (a, i, s) {
                  (i != null &&
                    typeof i.toString != 'function' &&
                    (i = bn.call(i)),
                    (a[i] = s));
                }, Mi(pn)),
                _g = Su(function (a, i, s) {
                  (i != null &&
                    typeof i.toString != 'function' &&
                    (i = bn.call(i)),
                    We.call(a, i) ? a[i].push(s) : (a[i] = [s]));
                }, Re),
                Sg = Le(ga);
              function It(a) {
                return wn(a) ? Xc(a) : qr(a);
              }
              function Mn(a) {
                return wn(a) ? Xc(a, !0) : Qd(a);
              }
              function xg(a, i) {
                var s = {};
                return (
                  (i = Re(i, 3)),
                  Ta(a, function (p, b, A) {
                    Fn(s, i(p, b, A), p);
                  }),
                  s
                );
              }
              function M1(a, i) {
                var s = {};
                return (
                  (i = Re(i, 3)),
                  Ta(a, function (p, b, A) {
                    Fn(s, b, i(p, b, A));
                  }),
                  s
                );
              }
              var Ai = Lr(function (a, i, s) {
                  vu(a, i, s);
                }),
                Ri = Lr(function (a, i, s, p) {
                  vu(a, i, s, p);
                }),
                z1 = Ya(function (a, i) {
                  var s = {};
                  if (a == null) return s;
                  var p = !1;
                  ((i = Ct(i, function (A) {
                    return ((A = Zn(A, a)), p || (p = A.length > 1), A);
                  })),
                    va(a, ds(a), s),
                    p && (s = dn(s, T | q | B, Dh)));
                  for (var b = i.length; b--; ) pu(s, i[b]);
                  return s;
                });
              function Cg(a, i) {
                return Ei(a, wf(Re(i)));
              }
              var Ti = Ya(function (a, i) {
                return a == null ? {} : Xo(a, i);
              });
              function Ei(a, i) {
                if (a == null) return {};
                var s = Ct(ds(a), function (p) {
                  return [p];
                });
                return (
                  (i = Re(i)),
                  un(a, s, function (p, b) {
                    return i(p, b[0]);
                  })
                );
              }
              function j1(a, i, s) {
                i = Zn(i, a);
                var p = -1,
                  b = i.length;
                for (b || ((b = 1), (a = u)); ++p < b; ) {
                  var A = a == null ? u : a[Cn(i[p])];
                  (A === u && ((p = b), (A = s)), (a = Wn(A) ? A.call(a) : A));
                }
                return a;
              }
              function Bf(a, i, s) {
                return a == null ? a : oi(a, i, s);
              }
              function n0(a, i, s, p) {
                return (
                  (p = typeof p == 'function' ? p : u),
                  a == null ? a : oi(a, i, s, p)
                );
              }
              var Hf = fs(It),
                ec = fs(Mn);
              function D1(a, i, s) {
                var p = je(a),
                  b = p || Xr(a) || Kr(a);
                if (((i = Re(i, 4)), s == null)) {
                  var A = a && a.constructor;
                  b
                    ? (s = p ? new A() : [])
                    : Tt(a)
                      ? (s = Wn(A) ? wr(Ha(a)) : {})
                      : (s = {});
                }
                return (
                  (b ? Un : Ta)(a, function (w, M, U) {
                    return i(s, w, M, U);
                  }),
                  s
                );
              }
              function q1(a, i) {
                return a == null ? !0 : pu(a, i);
              }
              function Ag(a, i, s) {
                return a == null ? a : Io(a, i, rf(s));
              }
              function L1(a, i, s, p) {
                return (
                  (p = typeof p == 'function' ? p : u),
                  a == null ? a : Io(a, i, rf(s), p)
                );
              }
              function wi(a) {
                return a == null ? [] : wo(a, It(a));
              }
              function a0(a) {
                return a == null ? [] : wo(a, Mn(a));
              }
              function Rg(a, i, s) {
                return (
                  s === u && ((s = i), (i = u)),
                  s !== u && ((s = Pn(s)), (s = s === s ? s : 0)),
                  i !== u && ((i = Pn(i)), (i = i === i ? i : 0)),
                  Aa(Pn(a), i, s)
                );
              }
              function Uf(a, i, s) {
                return (
                  (i = vr(i)),
                  s === u ? ((s = i), (i = 0)) : (s = vr(s)),
                  (a = Pn(a)),
                  Dr(a, i, s)
                );
              }
              function Nf(a, i, s) {
                if (
                  (s && typeof s != 'boolean' && cn(a, i, s) && (i = s = u),
                  s === u &&
                    (typeof i == 'boolean'
                      ? ((s = i), (i = u))
                      : typeof a == 'boolean' && ((s = a), (a = u))),
                  a === u && i === u
                    ? ((a = 0), (i = 1))
                    : ((a = vr(a)), i === u ? ((i = a), (a = 0)) : (i = vr(i))),
                  a > i)
                ) {
                  var p = a;
                  ((a = i), (i = p));
                }
                if (s || a % 1 || i % 1) {
                  var b = nr();
                  return Nt(
                    a + b * (i - a + fl('1e-' + ((b + '').length - 1))),
                    i,
                  );
                }
                return fi(a, i);
              }
              var Gf = Cl(function (a, i, s) {
                return ((i = i.toLowerCase()), a + (s ? B1(i) : i));
              });
              function B1(a) {
                return Ol(it(a).toLowerCase());
              }
              function Oi(a) {
                return ((a = it(a)), a && a.replace(Hl, nu).replace(K0, ''));
              }
              function Tg(a, i, s) {
                ((a = it(a)), (i = xn(i)));
                var p = a.length;
                s = s === u ? p : Aa(Ee(s), 0, p);
                var b = s;
                return ((s -= i.length), s >= 0 && a.slice(s, b) == i);
              }
              function H1(a) {
                return ((a = it(a)), a && fc.test(a) ? a.replace(ki, Gd) : a);
              }
              function U1(a) {
                return (
                  (a = it(a)),
                  a && z0.test(a) ? a.replace(oc, '\\$&') : a
                );
              }
              var N1 = Cl(function (a, i, s) {
                  return a + (s ? '-' : '') + i.toLowerCase();
                }),
                G1 = Cl(function (a, i, s) {
                  return a + (s ? ' ' : '') + i.toLowerCase();
                }),
                r0 = us('toLowerCase');
              function k1(a, i, s) {
                ((a = it(a)), (i = Ee(i)));
                var p = i ? kl(a) : 0;
                if (!i || p >= i) return a;
                var b = (i - p) / 2;
                return Br(lu(b), s) + a + Br(Zl(b), s);
              }
              function Y1(a, i, s) {
                ((a = it(a)), (i = Ee(i)));
                var p = i ? kl(a) : 0;
                return i && p < i ? a + Br(i - p, s) : a;
              }
              function kf(a, i, s) {
                ((a = it(a)), (i = Ee(i)));
                var p = i ? kl(a) : 0;
                return i && p < i ? Br(i - p, s) + a : a;
              }
              function Eg(a, i, s) {
                return (
                  s || i == null ? (i = 0) : i && (i = +i),
                  ua(it(a).replace(sc, ''), i || 0)
                );
              }
              function wg(a, i, s) {
                return (
                  (s ? cn(a, i, s) : i === u) ? (i = 1) : (i = Ee(i)),
                  Ea(it(a), i)
                );
              }
              function l0() {
                var a = arguments,
                  i = it(a[0]);
                return a.length < 3 ? i : i.replace(a[1], a[2]);
              }
              var i0 = Cl(function (a, i, s) {
                return a + (s ? '_' : '') + i.toLowerCase();
              });
              function Yf(a, i, s) {
                return (
                  s && typeof s != 'number' && cn(a, i, s) && (i = s = u),
                  (s = s === u ? z : s >>> 0),
                  s
                    ? ((a = it(a)),
                      a &&
                      (typeof i == 'string' || (i != null && !Iu(i))) &&
                      ((i = xn(i)), !i && hl(a))
                        ? wa(wt(a), 0, s)
                        : a.split(i, s))
                    : []
                );
              }
              var u0 = Cl(function (a, i, s) {
                return a + (s ? ' ' : '') + Ol(i);
              });
              function F1(a, i, s) {
                return (
                  (a = it(a)),
                  (s = s == null ? 0 : Aa(Ee(s), 0, a.length)),
                  (i = xn(i)),
                  a.slice(s, s + i.length) == i
                );
              }
              function c0(a, i, s) {
                var p = C.templateSettings;
                (s && cn(a, i, s) && (i = u),
                  (a = it(a)),
                  (i = Ci({}, i, p, os)));
                var b = Ci({}, i.imports, p.imports, os),
                  A = It(b),
                  w = wo(b, A),
                  M,
                  U,
                  re = 0,
                  le = i.interpolate || Va,
                  ce = "__p += '",
                  de = qc(
                    (i.escape || Va).source +
                      '|' +
                      le.source +
                      '|' +
                      (le === so ? Bl : Va).source +
                      '|' +
                      (i.evaluate || Va).source +
                      '|$',
                    'g',
                  ),
                  _e =
                    '//# sourceURL=' +
                    (We.call(i, 'sourceURL')
                      ? (i.sourceURL + '').replace(/\s/g, ' ')
                      : 'lodash.templateSources[' + ++Co + ']') +
                    `
`;
                (a.replace(de, function (Oe, Qe, Ve, Da, ea, qa) {
                  return (
                    Ve || (Ve = Da),
                    (ce += a.slice(re, qa).replace(Ki, zc)),
                    Qe &&
                      ((M = !0),
                      (ce +=
                        `' +
__e(` +
                        Qe +
                        `) +
'`)),
                    ea &&
                      ((U = !0),
                      (ce +=
                        `';
` +
                        ea +
                        `;
__p += '`)),
                    Ve &&
                      (ce +=
                        `' +
((__t = (` +
                        Ve +
                        `)) == null ? '' : __t) +
'`),
                    (re = qa + Oe.length),
                    Oe
                  );
                }),
                  (ce += `';
`));
                var we = We.call(i, 'variable') && i.variable;
                if (!we)
                  ce =
                    `with (obj) {
` +
                    ce +
                    `
}
`;
                else if (Pt.test(we)) throw new ze(y);
                ((ce = (U ? ce.replace(Ad, '') : ce)
                  .replace(Rd, '$1')
                  .replace(cc, '$1;')),
                  (ce =
                    'function(' +
                    (we || 'obj') +
                    `) {
` +
                    (we
                      ? ''
                      : `obj || (obj = {});
`) +
                    "var __t, __p = ''" +
                    (M ? ', __e = _.escape' : '') +
                    (U
                      ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                      : `;
`) +
                    ce +
                    `return __p
}`));
                var Ge = f0(function () {
                  return Ye(A, _e + 'return ' + ce).apply(u, w);
                });
                if (((Ge.source = ce), zf(Ge))) throw Ge;
                return Ge;
              }
              function Zr(a) {
                return it(a).toLowerCase();
              }
              function Qr(a) {
                return it(a).toUpperCase();
              }
              function Vr(a, i, s) {
                if (((a = it(a)), a && (s || i === u))) return sl(a);
                if (!a || !(i = xn(i))) return a;
                var p = wt(a),
                  b = wt(i),
                  A = Oo(p, b),
                  w = Mo(p, b) + 1;
                return wa(p, A, w).join('');
              }
              function tc(a, i, s) {
                if (((a = it(a)), a && (s || i === u)))
                  return a.slice(0, Yl(a) + 1);
                if (!a || !(i = xn(i))) return a;
                var p = wt(a),
                  b = Mo(p, wt(i)) + 1;
                return wa(p, 0, b).join('');
              }
              function nc(a, i, s) {
                if (((a = it(a)), a && (s || i === u)))
                  return a.replace(sc, '');
                if (!a || !(i = xn(i))) return a;
                var p = wt(a),
                  b = Oo(p, wt(i));
                return wa(p, b).join('');
              }
              function Ir(a, i) {
                var s = Ce,
                  p = oe;
                if (Tt(i)) {
                  var b = 'separator' in i ? i.separator : b;
                  ((s = 'length' in i ? Ee(i.length) : s),
                    (p = 'omission' in i ? xn(i.omission) : p));
                }
                a = it(a);
                var A = a.length;
                if (hl(a)) {
                  var w = wt(a);
                  A = w.length;
                }
                if (s >= A) return a;
                var M = s - kl(p);
                if (M < 1) return p;
                var U = w ? wa(w, 0, M).join('') : a.slice(0, M);
                if (b === u) return U + p;
                if ((w && (M += U.length - M), Iu(b))) {
                  if (a.slice(M).search(b)) {
                    var re,
                      le = U;
                    for (
                      b.global || (b = qc(b.source, it(hc.exec(b)) + 'g')),
                        b.lastIndex = 0;
                      (re = b.exec(le));
                    )
                      var ce = re.index;
                    U = U.slice(0, ce === u ? M : ce);
                  }
                } else if (a.indexOf(xn(b), M) != M) {
                  var de = U.lastIndexOf(b);
                  de > -1 && (U = U.slice(0, de));
                }
                return U + p;
              }
              function Og(a) {
                return ((a = it(a)), a && rl.test(a) ? a.replace(Gi, lh) : a);
              }
              var X1 = Cl(function (a, i, s) {
                  return a + (s ? ' ' : '') + i.toUpperCase();
                }),
                Ol = us('toUpperCase');
              function K1(a, i, s) {
                return (
                  (a = it(a)),
                  (i = s ? u : i),
                  i === u ? (zo(a) ? ch(a) : Ud(a)) : a.match(i) || []
                );
              }
              var f0 = Le(function (a, i) {
                  try {
                    return Hn(a, u, i);
                  } catch (s) {
                    return zf(s) ? s : new ze(s);
                  }
                }),
                Ff = Ya(function (a, i) {
                  return (
                    Un(i, function (s) {
                      ((s = Cn(s)), Fn(a, s, Ef(a[s], a)));
                    }),
                    a
                  );
                });
              function $1(a) {
                var i = a == null ? 0 : a.length,
                  s = Re();
                return (
                  (a = i
                    ? Ct(a, function (p) {
                        if (typeof p[1] != 'function') throw new Gn(v);
                        return [s(p[0]), p[1]];
                      })
                    : []),
                  Le(function (p) {
                    for (var b = -1; ++b < i; ) {
                      var A = a[b];
                      if (Hn(A[0], this, p)) return Hn(A[1], this, p);
                    }
                  })
                );
              }
              function Mg(a) {
                return bh(dn(a, T));
              }
              function Mi(a) {
                return function () {
                  return a;
                };
              }
              function Xf(a, i) {
                return a == null || a !== a ? i : a;
              }
              var Z1 = hi(),
                zi = hi(!0);
              function pn(a) {
                return a;
              }
              function ac(a) {
                return ii(typeof a == 'function' ? a : dn(a, T));
              }
              function Kf(a) {
                return Pc(dn(a, T));
              }
              function Q1(a, i) {
                return Fo(a, dn(i, T));
              }
              var zg = Le(function (a, i) {
                  return function (s) {
                    return ga(s, a, i);
                  };
                }),
                $f = Le(function (a, i) {
                  return function (s) {
                    return ga(a, s, i);
                  };
                });
              function e(a, i, s) {
                var p = It(i),
                  b = ir(i, p);
                s == null &&
                  !(Tt(i) && (b.length || !p.length)) &&
                  ((s = i), (i = a), (a = this), (b = ir(i, It(i))));
                var A = !(Tt(s) && 'chain' in s) || !!s.chain,
                  w = Wn(a);
                return (
                  Un(b, function (M) {
                    var U = i[M];
                    ((a[M] = U),
                      w &&
                        (a.prototype[M] = function () {
                          var re = this.__chain__;
                          if (A || re) {
                            var le = a(this.__wrapped__),
                              ce = (le.__actions__ = gn(this.__actions__));
                            return (
                              ce.push({ func: U, args: arguments, thisArg: a }),
                              (le.__chain__ = re),
                              le
                            );
                          }
                          return U.apply(a, Ar([this.value()], arguments));
                        }));
                  }),
                  a
                );
              }
              function t() {
                return (Xt._ === this && (Xt._ = ra), this);
              }
              function n() {}
              function l(a) {
                return (
                  (a = Ee(a)),
                  Le(function (i) {
                    return ef(i, a);
                  })
                );
              }
              var f = cf(Ct),
                h = cf(W0),
                m = cf(Ro);
              function x(a) {
                return Mu(a) ? ol(Cn(a)) : Ht(a);
              }
              function O(a) {
                return function (i) {
                  return a == null ? u : ka(a, i);
                };
              }
              var Y = ff(),
                ee = ff(!0);
              function ae() {
                return [];
              }
              function F() {
                return !1;
              }
              function Z() {
                return {};
              }
              function ve() {
                return '';
              }
              function Te() {
                return !0;
              }
              function pt(a, i) {
                if (((a = Ee(a)), a < 1 || a > se)) return [];
                var s = z,
                  p = Nt(a, z);
                ((i = Re(i)), (a -= z));
                for (var b = Mc(p, i); ++s < a; ) i(s);
                return b;
              }
              function H(a) {
                return je(a) ? Ct(a, Cn) : On(a) ? [a] : gn(_s(it(a)));
              }
              function j(a) {
                var i = ++oh;
                return it(a) + i;
              }
              var G = xu(function (a, i) {
                  return a + i;
                }, 0),
                te = Au('ceil'),
                xe = xu(function (a, i) {
                  return a / i;
                }, 1),
                Ie = Au('floor');
              function ye(a) {
                return a && a.length ? Ra(a, pn, hu) : u;
              }
              function He(a, i) {
                return a && a.length ? Ra(a, Re(i, 2), hu) : u;
              }
              function $e(a) {
                return wc(a, pn);
              }
              function Je(a, i) {
                return wc(a, Re(i, 2));
              }
              function Jr(a) {
                return a && a.length ? Ra(a, pn, Rt) : u;
              }
              function jg(a, i) {
                return a && a.length ? Ra(a, Re(i, 2), Rt) : u;
              }
              var G5 = xu(function (a, i) {
                  return a * i;
                }, 1),
                k5 = Au('round'),
                Y5 = xu(function (a, i) {
                  return a - i;
                }, 0);
              function F5(a) {
                return a && a.length ? Oc(a, pn) : 0;
              }
              function X5(a, i) {
                return a && a.length ? Oc(a, Re(i, 2)) : 0;
              }
              return (
                (C.after = o1),
                (C.ary = Hs),
                (C.assign = A1),
                (C.assignIn = qf),
                (C.assignInWith = Ci),
                (C.assignWith = pg),
                (C.at = pa),
                (C.before = Us),
                (C.bind = Ef),
                (C.bindAll = Ff),
                (C.bindKey = Ns),
                (C.castArray = og),
                (C.chain = Gu),
                (C.chunk = kh),
                (C.compact = Ss),
                (C.concat = xs),
                (C.cond = $1),
                (C.conforms = Mg),
                (C.constant = Mi),
                (C.countBy = e1),
                (C.create = e0),
                (C.curry = Xu),
                (C.curryRight = Gs),
                (C.debounce = ks),
                (C.defaults = R1),
                (C.defaultsDeep = T1),
                (C.defer = st),
                (C.delay = Ys),
                (C.difference = _f),
                (C.differenceBy = Yh),
                (C.differenceWith = or),
                (C.drop = Yt),
                (C.dropRight = Cs),
                (C.dropRightWhile = Fh),
                (C.dropWhile = Vt),
                (C.fill = eg),
                (C.filter = qs),
                (C.flatMap = En),
                (C.flatMapDeep = n1),
                (C.flatMapDepth = a1),
                (C.flatten = St),
                (C.flattenDeep = An),
                (C.flattenDepth = sr),
                (C.flip = ug),
                (C.flow = Z1),
                (C.flowRight = zi),
                (C.fromPairs = Xh),
                (C.functions = mg),
                (C.functionsIn = yg),
                (C.groupBy = Af),
                (C.initial = tg),
                (C.intersection = Sf),
                (C.intersectionBy = Rn),
                (C.intersectionWith = Ma),
                (C.invert = bg),
                (C.invertBy = _g),
                (C.invokeMap = _i),
                (C.iteratee = ac),
                (C.keyBy = l1),
                (C.keys = It),
                (C.keysIn = Mn),
                (C.map = Yu),
                (C.mapKeys = xg),
                (C.mapValues = M1),
                (C.matches = Kf),
                (C.matchesProperty = Q1),
                (C.memoize = Ku),
                (C.merge = Ai),
                (C.mergeWith = Ri),
                (C.method = zg),
                (C.methodOf = $f),
                (C.mixin = e),
                (C.negate = wf),
                (C.nthArg = l),
                (C.omit = z1),
                (C.omitBy = Cg),
                (C.once = cg),
                (C.orderBy = i1),
                (C.over = f),
                (C.overArgs = fg),
                (C.overEvery = h),
                (C.overSome = m),
                (C.partial = xi),
                (C.partialRight = El),
                (C.partition = u1),
                (C.pick = Ti),
                (C.pickBy = Ei),
                (C.property = x),
                (C.propertyOf = O),
                (C.pull = Al),
                (C.pullAll = Xa),
                (C.pullAllBy = Es),
                (C.pullAllWith = ws),
                (C.pullAt = za),
                (C.range = Y),
                (C.rangeRight = ee),
                (C.rearg = Fs),
                (C.reject = rg),
                (C.remove = Qh),
                (C.rest = Of),
                (C.reverse = Ur),
                (C.sampleSize = ig),
                (C.set = Bf),
                (C.setWith = n0),
                (C.shuffle = c1),
                (C.slice = Bu),
                (C.sortBy = Tf),
                (C.sortedUniq = xf),
                (C.sortedUniqBy = Wh),
                (C.split = Yf),
                (C.spread = Xs),
                (C.tail = ng),
                (C.take = ag),
                (C.takeRight = Pe),
                (C.takeRightWhile = bt),
                (C.takeWhile = Fe),
                (C.tap = Ph),
                (C.throttle = Fr),
                (C.thru = Tl),
                (C.toArray = C1),
                (C.toPairs = Hf),
                (C.toPairsIn = ec),
                (C.toPath = H),
                (C.toPlainObject = Df),
                (C.transform = D1),
                (C.unary = Ka),
                (C.union = Ke),
                (C.unionBy = ot),
                (C.unionWith = Qn),
                (C.uniq = Nr),
                (C.uniqBy = mi),
                (C.uniqWith = Os),
                (C.unset = q1),
                (C.unzip = ja),
                (C.unzipWith = Mt),
                (C.update = Ag),
                (C.updateWith = L1),
                (C.values = wi),
                (C.valuesIn = a0),
                (C.without = Gr),
                (C.words = K1),
                (C.wrap = $u),
                (C.xor = Rl),
                (C.xorBy = Ms),
                (C.xorWith = Vn),
                (C.zip = yi),
                (C.zipObject = Nu),
                (C.zipObjectDeep = Tn),
                (C.zipWith = zs),
                (C.entries = Hf),
                (C.entriesIn = ec),
                (C.extend = qf),
                (C.extendWith = Ci),
                e(C, C),
                (C.add = G),
                (C.attempt = f0),
                (C.camelCase = Gf),
                (C.capitalize = B1),
                (C.ceil = te),
                (C.clamp = Rg),
                (C.clone = s1),
                (C.cloneDeep = d1),
                (C.cloneDeepWith = g1),
                (C.cloneWith = h1),
                (C.conformsTo = sg),
                (C.deburr = Oi),
                (C.defaultTo = Xf),
                (C.divide = xe),
                (C.endsWith = Tg),
                (C.eq = Jn),
                (C.escape = H1),
                (C.escapeRegExp = U1),
                (C.every = ku),
                (C.find = In),
                (C.findIndex = As),
                (C.findKey = E1),
                (C.findLast = t1),
                (C.findLastIndex = Rs),
                (C.findLastKey = Pu),
                (C.floor = Ie),
                (C.forEach = r1),
                (C.forEachRight = gr),
                (C.forIn = ma),
                (C.forInRight = w1),
                (C.forOwn = Lf),
                (C.forOwnRight = pr),
                (C.get = $r),
                (C.gt = v1),
                (C.gte = p1),
                (C.has = O1),
                (C.hasIn = t0),
                (C.head = Ts),
                (C.identity = pn),
                (C.includes = Ls),
                (C.indexOf = Kh),
                (C.inRange = Uf),
                (C.invoke = Sg),
                (C.isArguments = wl),
                (C.isArray = je),
                (C.isArrayBuffer = Ks),
                (C.isArrayLike = wn),
                (C.isArrayLikeObject = Ut),
                (C.isBoolean = Zu),
                (C.isBuffer = Xr),
                (C.isDate = m1),
                (C.isElement = Xe),
                (C.isEmpty = $s),
                (C.isEqual = Mf),
                (C.isEqualWith = Zs),
                (C.isError = zf),
                (C.isFinite = Qs),
                (C.isFunction = Wn),
                (C.isInteger = Qu),
                (C.isLength = jf),
                (C.isMap = y1),
                (C.isMatch = b1),
                (C.isMatchWith = _1),
                (C.isNaN = vt),
                (C.isNative = Vs),
                (C.isNil = hg),
                (C.isNull = rn),
                (C.isNumber = Is),
                (C.isObject = Tt),
                (C.isObjectLike = Lt),
                (C.isPlainObject = Vu),
                (C.isRegExp = Iu),
                (C.isSafeInteger = Js),
                (C.isSet = Ju),
                (C.isString = Wu),
                (C.isSymbol = On),
                (C.isTypedArray = Kr),
                (C.isUndefined = Ws),
                (C.isWeakMap = dg),
                (C.isWeakSet = S1),
                (C.join = $h),
                (C.kebabCase = N1),
                (C.last = xt),
                (C.lastIndexOf = Zh),
                (C.lowerCase = G1),
                (C.lowerFirst = r0),
                (C.lt = gg),
                (C.lte = x1),
                (C.max = ye),
                (C.maxBy = He),
                (C.mean = $e),
                (C.meanBy = Je),
                (C.min = Jr),
                (C.minBy = jg),
                (C.stubArray = ae),
                (C.stubFalse = F),
                (C.stubObject = Z),
                (C.stubString = ve),
                (C.stubTrue = Te),
                (C.multiply = G5),
                (C.nth = hr),
                (C.noConflict = t),
                (C.noop = n),
                (C.now = Fu),
                (C.pad = k1),
                (C.padEnd = Y1),
                (C.padStart = kf),
                (C.parseInt = Eg),
                (C.random = Nf),
                (C.reduce = Rf),
                (C.reduceRight = Bs),
                (C.repeat = wg),
                (C.replace = l0),
                (C.result = j1),
                (C.round = k5),
                (C.runInContext = L),
                (C.sample = lg),
                (C.size = f1),
                (C.snakeCase = i0),
                (C.some = Si),
                (C.sortedIndex = Hu),
                (C.sortedIndexBy = pi),
                (C.sortedIndexOf = Vh),
                (C.sortedLastIndex = Ih),
                (C.sortedLastIndexBy = Uu),
                (C.sortedLastIndexOf = Jh),
                (C.startCase = u0),
                (C.startsWith = F1),
                (C.subtract = Y5),
                (C.sum = F5),
                (C.sumBy = X5),
                (C.template = c0),
                (C.times = pt),
                (C.toFinite = vr),
                (C.toInteger = Ee),
                (C.toLength = Ps),
                (C.toLower = Zr),
                (C.toNumber = Pn),
                (C.toSafeInteger = vg),
                (C.toString = it),
                (C.toUpper = Qr),
                (C.trim = Vr),
                (C.trimEnd = tc),
                (C.trimStart = nc),
                (C.truncate = Ir),
                (C.unescape = Og),
                (C.uniqueId = j),
                (C.upperCase = X1),
                (C.upperFirst = Ol),
                (C.each = r1),
                (C.eachRight = gr),
                (C.first = Ts),
                e(
                  C,
                  (function () {
                    var a = {};
                    return (
                      Ta(C, function (i, s) {
                        We.call(C.prototype, s) || (a[s] = i);
                      }),
                      a
                    );
                  })(),
                  { chain: !1 },
                ),
                (C.VERSION = o),
                Un(
                  [
                    'bind',
                    'bindKey',
                    'curry',
                    'curryRight',
                    'partial',
                    'partialRight',
                  ],
                  function (a) {
                    C[a].placeholder = C;
                  },
                ),
                Un(['drop', 'take'], function (a, i) {
                  ((De.prototype[a] = function (s) {
                    s = s === u ? 1 : jt(Ee(s), 0);
                    var p =
                      this.__filtered__ && !i ? new De(this) : this.clone();
                    return (
                      p.__filtered__
                        ? (p.__takeCount__ = Nt(s, p.__takeCount__))
                        : p.__views__.push({
                            size: Nt(s, z),
                            type: a + (p.__dir__ < 0 ? 'Right' : ''),
                          }),
                      p
                    );
                  }),
                    (De.prototype[a + 'Right'] = function (s) {
                      return this.reverse()[a](s).reverse();
                    }));
                }),
                Un(['filter', 'map', 'takeWhile'], function (a, i) {
                  var s = i + 1,
                    p = s == ut || s == J;
                  De.prototype[a] = function (b) {
                    var A = this.clone();
                    return (
                      A.__iteratees__.push({ iteratee: Re(b, 3), type: s }),
                      (A.__filtered__ = A.__filtered__ || p),
                      A
                    );
                  };
                }),
                Un(['head', 'last'], function (a, i) {
                  var s = 'take' + (i ? 'Right' : '');
                  De.prototype[a] = function () {
                    return this[s](1).value()[0];
                  };
                }),
                Un(['initial', 'tail'], function (a, i) {
                  var s = 'drop' + (i ? '' : 'Right');
                  De.prototype[a] = function () {
                    return this.__filtered__ ? new De(this) : this[s](1);
                  };
                }),
                (De.prototype.compact = function () {
                  return this.filter(pn);
                }),
                (De.prototype.find = function (a) {
                  return this.filter(a).head();
                }),
                (De.prototype.findLast = function (a) {
                  return this.reverse().find(a);
                }),
                (De.prototype.invokeMap = Le(function (a, i) {
                  return typeof a == 'function'
                    ? new De(this)
                    : this.map(function (s) {
                        return ga(s, a, i);
                      });
                })),
                (De.prototype.reject = function (a) {
                  return this.filter(wf(Re(a)));
                }),
                (De.prototype.slice = function (a, i) {
                  a = Ee(a);
                  var s = this;
                  return s.__filtered__ && (a > 0 || i < 0)
                    ? new De(s)
                    : (a < 0 ? (s = s.takeRight(-a)) : a && (s = s.drop(a)),
                      i !== u &&
                        ((i = Ee(i)),
                        (s = i < 0 ? s.dropRight(-i) : s.take(i - a))),
                      s);
                }),
                (De.prototype.takeRightWhile = function (a) {
                  return this.reverse().takeWhile(a).reverse();
                }),
                (De.prototype.toArray = function () {
                  return this.take(z);
                }),
                Ta(De.prototype, function (a, i) {
                  var s = /^(?:filter|find|map|reject)|While$/.test(i),
                    p = /^(?:head|last)$/.test(i),
                    b = C[p ? 'take' + (i == 'last' ? 'Right' : '') : i],
                    A = p || /^find/.test(i);
                  b &&
                    (C.prototype[i] = function () {
                      var w = this.__wrapped__,
                        M = p ? [1] : arguments,
                        U = w instanceof De,
                        re = M[0],
                        le = U || je(w),
                        ce = function (Qe) {
                          var Ve = b.apply(C, Ar([Qe], M));
                          return p && de ? Ve[0] : Ve;
                        };
                      le &&
                        s &&
                        typeof re == 'function' &&
                        re.length != 1 &&
                        (U = le = !1);
                      var de = this.__chain__,
                        _e = !!this.__actions__.length,
                        we = A && !de,
                        Ge = U && !_e;
                      if (!A && le) {
                        w = Ge ? w : new De(this);
                        var Oe = a.apply(w, M);
                        return (
                          Oe.__actions__.push({
                            func: Tl,
                            args: [ce],
                            thisArg: u,
                          }),
                          new _n(Oe, de)
                        );
                      }
                      return we && Ge
                        ? a.apply(this, M)
                        : ((Oe = this.thru(ce)),
                          we ? (p ? Oe.value()[0] : Oe.value()) : Oe);
                    });
                }),
                Un(
                  ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
                  function (a) {
                    var i = au[a],
                      s = /^(?:push|sort|unshift)$/.test(a) ? 'tap' : 'thru',
                      p = /^(?:pop|shift)$/.test(a);
                    C.prototype[a] = function () {
                      var b = arguments;
                      if (p && !this.__chain__) {
                        var A = this.value();
                        return i.apply(je(A) ? A : [], b);
                      }
                      return this[s](function (w) {
                        return i.apply(je(w) ? w : [], b);
                      });
                    };
                  },
                ),
                Ta(De.prototype, function (a, i) {
                  var s = C[i];
                  if (s) {
                    var p = s.name + '';
                    (We.call(lt, p) || (lt[p] = []),
                      lt[p].push({ name: i, func: s }));
                  }
                }),
                (lt[di(u, I).name] = [{ name: 'wrapper', func: u }]),
                (De.prototype.clone = ar),
                (De.prototype.reverse = Mr),
                (De.prototype.value = rr),
                (C.prototype.at = Cf),
                (C.prototype.chain = kr),
                (C.prototype.commit = $t),
                (C.prototype.next = Yr),
                (C.prototype.plant = dr),
                (C.prototype.reverse = js),
                (C.prototype.toJSON =
                  C.prototype.valueOf =
                  C.prototype.value =
                    Ds),
                (C.prototype.first = C.prototype.head),
                en && (C.prototype[en] = bi),
                C
              );
            },
            Fl = qo();
          _a ? (((_a.exports = Fl)._ = Fl), (Ji._ = Fl)) : (Xt._ = Fl);
        }).call(jC);
      })(m0, m0.exports)),
    m0.exports
  );
}
var ay = DC();
const qC = (r, c) => {
    const [u, o] = D.useState({ width: c.width, height: c.height });
    D.useLayoutEffect(
      function () {
        const v = r.current;
        if (v === null) return;
        const y = new ResizeObserver(
          ay.debounce((_) => {
            for (const S of _) {
              const { width: E, height: T } = S.contentRect;
              if (E <= 0 || T <= 0) return;
              const q = { width: E, height: T };
              o((B) => (ay.isEqual(B, q) ? B : q));
            }
          }, 10),
        );
        return (
          y.observe(v),
          () => {
            (y.unobserve(v), y.disconnect());
          }
        );
      },
      [r.current],
    );
    const d = D.useCallback(() => {
      const g = r.current;
      if (g === null) return;
      const { width: v, height: y } = g.getBoundingClientRect(),
        _ = { width: v, height: y };
      o((S) => (ay.isEqual(_, S) ? S : _));
    }, []);
    return { ...u, computeContainerSize: d };
  },
  LC = () => {
    const r = D.useRef(null),
      [c, u] = D.useState('');
    return (
      D.useEffect(() => {
        if (!navigator.clipboard || !navigator.clipboard.readText) {
          console.info('Clipboard not supported here.');
          return;
        }
        const o = (y) => {
            var S;
            const _ =
              (S = y.clipboardData) == null ? void 0 : S.getData('text');
            u(_);
          },
          d = () => {
            document.hasFocus() &&
              navigator.clipboard
                .readText()
                .then((y) => {
                  y !== r.current && ((r.current = y), u(y));
                })
                .catch((y) => {
                  console.error(y);
                });
          },
          g = tt.getBrowser();
        let v = 0;
        return (
          g === 'chrome' && (v = setInterval(d, 500)),
          window.addEventListener('paste', o),
          () => {
            (clearInterval(v), window.removeEventListener('paste', o));
          }
        );
      }, []),
      c
    );
  },
  N5 = () => {
    const { info: r } = L5(),
      c = D.useRef(''),
      u = D.useRef(null),
      o = D.useRef(null),
      d = D.useRef(null),
      g = D.useRef(null),
      v = LC(),
      y = x0.find((ne) => ne.id === 'monochromatic'),
      { width: _, height: S } = qC(u, { width: 250, height: 250 }),
      E = _C(),
      T = D.useMemo(
        () => E.calculeSizes({ width: _, height: S }),
        [_, S, E.calculeSizes],
      ),
      { updateTheme: q } = Wr(),
      [B, N] = D.useReducer(et.makeReducer(zC, {}), {
        selectedPickerIndex: -1,
        selectedPickerId: void 0,
        darkness: 0.5,
        mode: y,
        activeView: 'wheel',
        numberOfPickers: y.value.pickers,
        distanceBetweenEachPicker: y.value.distanceBetweenEachOne,
        pickers: E.makePickers(
          y.value.pickers,
          y.value.distanceBetweenEachOne,
          T,
        ),
        themes: [],
        visibleColorIndex: 0,
      }),
      X = D.useMemo(
        () => B.themes.find((ne) => ne.id === B.selectedWheelOutputId),
        [B.themes, B.selectedWheelOutputId],
      ),
      Q = D.useMemo(
        () =>
          X
            ? tt.assign(
                {},
                z8,
                X[(X == null ? void 0 : X.activeAccent) || 'main'],
              )
            : void 0,
        [X],
      ),
      I = D.useCallback(
        (ne) => () => {
          const se = ne.current;
          se !== null && se.scrollIntoView({ behavior: 'smooth' });
        },
        [],
      ),
      $ = D.useCallback((ne) => {
        N({ type: 'onEmitWheelOutput', value: ne });
      }, []),
      ue = D.useCallback(
        (ne) => {
          N({ type: 'changeMode', value: ne });
        },
        [T],
      ),
      V = D.useCallback(() => {
        N({ type: 'settingsClick', value: null });
      }, []),
      fe = D.useCallback((ne) => {
        N({ type: 'onPickersCountChange', value: ne });
      }, []),
      W = D.useCallback((ne) => {
        N({ type: 'onSpaceBetweenPickersChange', value: ne });
      }, []),
      k = D.useCallback((ne) => {
        N({ type: 'onDarknessChange', value: ne });
      }, []),
      pe = D.useCallback((ne, se) => {
        N({
          type: 'onChangeWheelOutputAccent',
          value: { theme: ne, activeAccent: se },
        });
      }, []),
      Se = D.useCallback((ne, se) => {
        N({
          type: 'onChangeWheelOutputApplyOn',
          value: { theme: ne, applyOn: se },
        });
      }, []),
      Ce = D.useCallback((ne, se) => {
        N({
          type: 'onChangeWheelOutputColorKind',
          value: { theme: ne, kind: se },
        });
      }, []),
      oe = D.useCallback((ne, se) => {
        N({ type: 'onChangeColor', value: { theme: ne, color: se } });
      }, []),
      Ue = D.useCallback((ne) => {
        N({ type: 'onSelectWheelOutput', value: ne.id });
      }, []),
      Ae = D.useCallback((ne, se) => {
        N({
          type: 'selectedPickerChange',
          value: { selectedPickerIndex: ne, selectedPickerId: se },
        });
      }, []),
      ut = D.useCallback((ne) => {
        N({ type: 'onPickersChange', value: { pickers: ne } });
      }, []),
      ct = D.useCallback(
        (ne) => () => {
          N({ type: 'setVisibleWheelColor', value: ne });
        },
        [],
      ),
      J = D.useCallback(
        (ne) => () => {
          const se = et.makeCurrentColorTo(ne, 'HSL'),
            nt = tt.hslToCoordinates(se, T.center, T.radius);
          N({
            type: 'onPickersChange',
            value: {
              pickers: E.makePickers(
                B.numberOfPickers,
                B.distanceBetweenEachPicker,
                T,
                nt,
              ),
              darkness: tt.round(se.lightness / 100, 1),
            },
          });
        },
        [T, E, B.numberOfPickers, B.distanceBetweenEachPicker],
      );
    return (
      D.useEffect(
        function () {
          N({
            type: 'onPickersChange',
            value: {
              pickers: E.makePickers(
                B.numberOfPickers,
                B.distanceBetweenEachPicker,
                T,
              ),
            },
          });
        },
        [B.numberOfPickers, B.distanceBetweenEachPicker, T],
      ),
      D.useEffect(
        function () {
          Q && q(Q);
        },
        [Q],
      ),
      D.useEffect(
        function () {
          const se = et.makeColorFromString(v);
          se.type !== 'INVALID' &&
            (E.isColorPresent(se, B.themes) ||
              (c.current !== se.raw &&
                ((c.current = se.raw),
                r(
                  'I found a color on your clipboard, Do you want to paste it ?',
                  { permanent: !0, action: J(se), actionName: 'Paste it!' },
                ))));
        },
        [v, r, B.themes, J],
      ),
      {
        settingsSection: g,
        colorsSection: d,
        wheelSection: o,
        wheelContainer: u,
        state: B,
        computed: T,
        onModeChange: ue,
        onSettingsClick: V,
        onPickerNumberChange: fe,
        onSpaceBetweenEachPickerChange: W,
        onDarknessChange: k,
        onEmitWheelOutput: $,
        onChangeWheelOutputAccent: pe,
        onChangeWheelOutputApplyOn: Se,
        onChangeWheelOutputColorKind: Ce,
        onChangeWheelOutputColor: oe,
        onSelectedPickerChange: Ae,
        onPickersMove: ut,
        onSelectWheelOutput: Ue,
        onVisibleWheelColorChange: ct,
        goTo: I,
      }
    );
  },
  BC = () => {
    const {
        wheelSection: r,
        state: c,
        onModeChange: u,
        settingsSection: o,
        goTo: d,
        onDarknessChange: g,
        wheelContainer: v,
        computed: y,
        onEmitWheelOutput: _,
        onSelectedPickerChange: S,
        onPickersMove: E,
        onPickerNumberChange: T,
        onSpaceBetweenEachPickerChange: q,
        onChangeWheelOutputAccent: B,
        onChangeWheelOutputColorKind: N,
        onChangeWheelOutputApplyOn: X,
        onChangeWheelOutputColor: Q,
        onSelectWheelOutput: I,
        onVisibleWheelColorChange: $,
      } = N5(),
      ue = D.useCallback((W) => W.media.otherDevices, []),
      V = D.useCallback((W) => ({ background: W.color.raw }), []),
      fe = D.useMemo(
        () => [
          'rgba(0, 0, 0, 0.4)',
          'rgba(51, 51, 51, 0.4)',
          'rgba(102, 102, 102, 0.4)',
          'rgba(153, 153, 153, 0.4)',
          'rgba(204, 204, 204, 0.4)',
          'rgba(255, 255, 255, 0.4)',
        ],
        [],
      );
    return R.jsx(J8, {
      query: ue,
      withStyle: V,
      removeFromHtml: !0,
      children: R.jsxs(Vf, {
        as: 'article',
        atRow: 1,
        horizontal: !0,
        scrollSnap: 'x mandatory',
        behavior: 'instant',
        touchAction: 'none',
        children: [
          R.jsxs(Qf, {
            ref: r,
            contentRows: '50px 50px calc(100% - 435px) 300px 35px',
            children: [
              R.jsxs(be, {
                atRow: 1,
                withStyle: (W) => ({
                  borderBottom: `1px solid ${W.highlight.raw}`,
                  boxSizing: 'content-box',
                }),
                children: [
                  R.jsx(b0, {
                    options: x0,
                    value: c.mode,
                    onChange: u,
                    directionals: !0,
                  }),
                  R.jsx(jn, {
                    size: 24,
                    onClick: d(o),
                    children:
                      c.activeView === 'wheel' ? R.jsx(W8, {}) : R.jsx(R0, {}),
                  }),
                ],
              }),
              R.jsx(be, {
                kind: 'column',
                direction: 'column',
                padding: '10px',
                atRow: 2,
                children: R.jsx(O0, {
                  direction: 'horizontal',
                  min: 0.1,
                  max: 1,
                  step: 0.1,
                  value: c.darkness,
                  onChange: g,
                  colors: fe,
                  deg: 90,
                  label: 'Darkness',
                }),
              }),
              R.jsx(be, {
                ref: v,
                atRow: 3,
                children: R.jsx(j5, {
                  pickers: c.pickers,
                  computed: y,
                  darkness: c.darkness,
                  selectedIndex: c.selectedPickerIndex,
                  selectedPicker: c.selectedPickerId,
                  distanceBetweenEachPicker: c.distanceBetweenEachPicker,
                  onChange: _,
                  onSelectedPickerChange: S,
                  onPickersMove: E,
                  freeMove: c.mode.value.freeMove,
                }),
              }),
              R.jsx(Vf, {
                atRow: 4,
                horizontal: !0,
                scrollSnap: 'x mandatory',
                margin: '0 0 10px 0',
                gap: '20px',
                padding: '0 15px',
                children: c.themes.map((W, k) =>
                  R.jsx(
                    H5,
                    {
                      theme: W,
                      onChangeAccent: B,
                      onChangeApplyOn: X,
                      onChangeColorKind: N,
                      onColorChange: Q,
                      onSelect: I,
                      onVisible: $(k),
                      selected: c.selectedWheelOutputId === W.id,
                    },
                    W.id,
                  ),
                ),
              }),
              R.jsx(U5, { atRow: 5 }),
            ],
          }),
          R.jsxs(Qf, {
            ref: o,
            contentRows: '50px 1fr',
            children: [
              R.jsx(jn, {
                size: 24,
                round: !0,
                onClick: d(r),
                children: R.jsx(yy, {}),
              }),
              R.jsxs(be, {
                atRow: 2,
                direction: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                children: [
                  R.jsx(ya, {
                    type: 'number',
                    label: 'Pickers',
                    value: c.numberOfPickers,
                    onChange: T,
                    disableLeftRadius: !0,
                    disableRightRadius: !0,
                    flex: '0 0 70px',
                    width: '90%',
                  }),
                  R.jsx(ya, {
                    type: 'number',
                    label: 'Space between each one',
                    value: c.distanceBetweenEachPicker,
                    onChange: q,
                    disableLeftRadius: !0,
                    disableRightRadius: !0,
                    flex: '0 0 70px',
                    width: '90%',
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  HC = () => {
    const {
        state: r,
        onModeChange: c,
        onDarknessChange: u,
        wheelContainer: o,
        wheelSection: d,
        colorsSection: g,
        settingsSection: v,
        computed: y,
        onEmitWheelOutput: _,
        onSelectedPickerChange: S,
        onPickersMove: E,
        onChangeWheelOutputAccent: T,
        onChangeWheelOutputApplyOn: q,
        onChangeWheelOutputColor: B,
        onChangeWheelOutputColorKind: N,
        onSelectWheelOutput: X,
        onPickerNumberChange: Q,
        onSpaceBetweenEachPickerChange: I,
        onVisibleWheelColorChange: $,
        goTo: ue,
      } = N5(),
      V = D.useCallback((Ce) => Ce.media.smallDevices, []),
      fe = D.useCallback((Ce) => ({ background: Ce.color.raw }), []),
      W = D.useCallback((Ce) => Ce.color.raw, []),
      k = D.useCallback((Ce) => Ce.highlight.raw, []),
      pe = D.useMemo(
        () => [
          'rgba(0, 0, 0, 0.4)',
          'rgba(51, 51, 51, 0.4)',
          'rgba(102, 102, 102, 0.4)',
          'rgba(153, 153, 153, 0.4)',
          'rgba(204, 204, 204, 0.4)',
          'rgba(255, 255, 255, 0.4)',
        ],
        [],
      ),
      Se = D.useMemo(
        () => ({
          flex: '1 0 auto',
          justifyContent: 'center',
          alignItems: 'start',
        }),
        [],
      );
    return R.jsx(J8, {
      query: V,
      withStyle: fe,
      removeFromHtml: !0,
      children: R.jsxs(Vf, {
        as: 'article',
        vertical: !0,
        scrollSnap: 'y mandatory',
        behavior: 'instant',
        highlight: k,
        primary: W,
        touchAction: 'none',
        children: [
          R.jsx(Qf, {
            children: R.jsxs(Vf, {
              horizontal: !0,
              scrollSnap: 'x mandatory',
              behavior: 'instant',
              highlight: k,
              primary: W,
              touchAction: 'none',
              children: [
                R.jsxs(Qf, {
                  ref: d,
                  contentRows: '55px 50px calc(100% - 155px) 50px',
                  children: [
                    R.jsxs(be, {
                      atRow: 1,
                      withStyle: (Ce) => ({
                        borderBottom: `1px solid ${Ce.highlight.raw}`,
                        boxSizing: 'content-box',
                      }),
                      children: [
                        R.jsx(b0, {
                          options: x0,
                          value: r.mode,
                          onChange: c,
                          directionals: !0,
                        }),
                        R.jsx(jn, {
                          size: 24,
                          onClick: ue(v),
                          children:
                            r.activeView === 'wheel'
                              ? R.jsx(W8, {})
                              : R.jsx(R0, {}),
                        }),
                      ],
                    }),
                    R.jsx(be, {
                      atRow: 2,
                      direction: 'column',
                      padding: '10px',
                      children: R.jsx(O0, {
                        direction: 'horizontal',
                        min: 0.1,
                        max: 1,
                        step: 0.1,
                        value: r.darkness,
                        onChange: u,
                        colors: pe,
                        deg: 90,
                        label: 'Darkness',
                      }),
                    }),
                    R.jsx(be, {
                      ref: o,
                      atRow: 3,
                      children: R.jsx(j5, {
                        pickers: r.pickers,
                        computed: y,
                        darkness: r.darkness,
                        selectedIndex: r.selectedPickerIndex,
                        selectedPicker: r.selectedPickerId,
                        distanceBetweenEachPicker: r.distanceBetweenEachPicker,
                        onChange: _,
                        onSelectedPickerChange: S,
                        onPickersMove: E,
                        freeMove: r.mode.value.freeMove,
                      }),
                    }),
                    R.jsx(be, {
                      atRow: 4,
                      withStyle: Se,
                      children: R.jsx(jn, {
                        size: 24,
                        round: !0,
                        onClick: ue(g),
                        children: R.jsx(P8, {}),
                      }),
                    }),
                  ],
                }),
                R.jsxs(Qf, {
                  ref: v,
                  contentRows: '60px 100px 100px',
                  children: [
                    R.jsx(jn, {
                      size: 24,
                      round: !0,
                      onClick: ue(d),
                      flex: '0 0 28px',
                      margin: '10px',
                      children: R.jsx(yy, {}),
                    }),
                    R.jsxs(be, {
                      flex: '1 1 100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      direction: 'column',
                      children: [
                        R.jsx(ya, {
                          type: 'number',
                          label: 'Pickers',
                          value: r.numberOfPickers,
                          onChange: Q,
                          disableLeftRadius: !0,
                          disableRightRadius: !0,
                          flex: '1 0 auto',
                          atRow: 2,
                          width: '90%',
                          justifySelf: 'center',
                        }),
                        R.jsx(ya, {
                          type: 'number',
                          label: 'Space between each one',
                          value: r.distanceBetweenEachPicker,
                          onChange: I,
                          disableLeftRadius: !0,
                          disableRightRadius: !0,
                          flex: '1 0 auto',
                          width: '90%',
                          justifySelf: 'center',
                          atRow: 3,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          R.jsxs(Qf, {
            ref: g,
            contentRows: '50px 1fr 50px 35px',
            children: [
              R.jsx(be, {
                atRow: 1,
                withStyle: Se,
                children: R.jsx(jn, {
                  size: 24,
                  round: !0,
                  onClick: ue(d),
                  children: R.jsx(g9, {}),
                }),
              }),
              R.jsx(Vf, {
                atRow: 2,
                horizontal: !0,
                scrollSnap: 'x mandatory',
                behavior: 'instant',
                highlight: (Ce) => Ce.highlight.raw,
                primary: (Ce) => Ce.color.raw,
                gap: '20px',
                padding: '0 15px',
                children: r.themes.map((Ce, oe) =>
                  R.jsx(
                    H5,
                    {
                      theme: Ce,
                      onChangeAccent: T,
                      onChangeApplyOn: q,
                      onChangeColorKind: N,
                      onColorChange: B,
                      onSelect: X,
                      onVisible: $(oe),
                      selected: r.selectedWheelOutputId === Ce.id,
                    },
                    Ce.id,
                  ),
                ),
              }),
              R.jsx(EC, {
                atRow: 3,
                total: r.themes.length,
                active: r.visibleColorIndex,
                justifyContent: 'center',
                alignItems: 'center',
              }),
              R.jsx(U5, { atRow: 4 }),
            ],
          }),
        ],
      }),
    });
  },
  UC = () => R.jsxs(D.Fragment, { children: [R.jsx(HC, {}), R.jsx(BC, {})] }),
  NC = () =>
    R.jsx(H6, {
      theme: nS,
      patterns: f9,
      children: R.jsx(xC, {
        timeout: 2e3,
        children: R.jsx(Q6, {
          containerId: 'root',
          fontSize: '16px',
          fontFamily: '"Mozilla Text", sans-serif',
          children: R.jsx(OC, { children: R.jsx(UC, {}) }),
        }),
      }),
    });
tS.createRoot(document.getElementById('root')).render(R.jsx(NC, {}));
