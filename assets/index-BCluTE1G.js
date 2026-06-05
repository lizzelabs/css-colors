var X5 = Object.defineProperty;
var K5 = (r, c, u) =>
  c in r
    ? X5(r, c, { enumerable: !0, configurable: !0, writable: !0, value: u })
    : (r[c] = u);
var h0 = (r, c, u) => K5(r, typeof c != 'symbol' ? c + '' : c, u);
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
var qi =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function w0(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default')
    ? r.default
    : r;
}
var qg = { exports: {} },
  d0 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hp;
function Q5() {
  if (Hp) return d0;
  Hp = 1;
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
      for (var p in d) p !== 'key' && (g[p] = d[p]);
    } else g = d;
    return (
      (d = g.ref),
      { $$typeof: r, type: o, key: v, ref: d !== void 0 ? d : null, props: g }
    );
  }
  return ((d0.Fragment = c), (d0.jsx = u), (d0.jsxs = u), d0);
}
var Up;
function Z5() {
  return (Up || ((Up = 1), (qg.exports = Q5())), qg.exports);
}
var x = Z5(),
  Lg = { exports: {} },
  g0 = {},
  Bg = { exports: {} },
  Hg = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kp;
function V5() {
  return (
    kp ||
      ((kp = 1),
      (function (r) {
        function c(W, he) {
          var _e = W.length;
          W.push(he);
          e: for (; 0 < _e; ) {
            var Be = (_e - 1) >>> 1,
              Ze = W[Be];
            if (0 < d(Ze, he)) ((W[Be] = he), (W[_e] = Ze), (_e = Be));
            else break e;
          }
        }
        function u(W) {
          return W.length === 0 ? null : W[0];
        }
        function o(W) {
          if (W.length === 0) return null;
          var he = W[0],
            _e = W.pop();
          if (_e !== he) {
            W[0] = _e;
            e: for (var Be = 0, Ze = W.length, D = Ze >>> 1; Be < D; ) {
              var Y = 2 * (Be + 1) - 1,
                fe = W[Y],
                me = Y + 1,
                ze = W[me];
              if (0 > d(fe, _e))
                me < Ze && 0 > d(ze, fe)
                  ? ((W[Be] = ze), (W[me] = _e), (Be = me))
                  : ((W[Be] = fe), (W[Y] = _e), (Be = Y));
              else if (me < Ze && 0 > d(ze, _e))
                ((W[Be] = ze), (W[me] = _e), (Be = me));
              else break e;
            }
          }
          return he;
        }
        function d(W, he) {
          var _e = W.sortIndex - he.sortIndex;
          return _e !== 0 ? _e : W.id - he.id;
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
            p = v.now();
          r.unstable_now = function () {
            return v.now() - p;
          };
        }
        var _ = [],
          S = [],
          T = 1,
          w = null,
          z = 3,
          U = !1,
          K = !1,
          N = !1,
          $ = !1,
          J = typeof setTimeout == 'function' ? setTimeout : null,
          te = typeof clearTimeout == 'function' ? clearTimeout : null,
          F = typeof setImmediate < 'u' ? setImmediate : null;
        function I(W) {
          for (var he = u(S); he !== null; ) {
            if (he.callback === null) o(S);
            else if (he.startTime <= W)
              (o(S), (he.sortIndex = he.expirationTime), c(_, he));
            else break;
            he = u(S);
          }
        }
        function oe(W) {
          if (((N = !1), I(W), !K))
            if (u(_) !== null) ((K = !0), re || ((re = !0), Le()));
            else {
              var he = u(S);
              he !== null && tt(oe, he.startTime - W);
            }
        }
        var re = !1,
          V = -1,
          ce = 5,
          Ae = -1;
        function Re() {
          return $ ? !0 : !(r.unstable_now() - Ae < ce);
        }
        function se() {
          if ((($ = !1), re)) {
            var W = r.unstable_now();
            Ae = W;
            var he = !0;
            try {
              e: {
                ((K = !1), N && ((N = !1), te(V), (V = -1)), (U = !0));
                var _e = z;
                try {
                  t: {
                    for (
                      I(W), w = u(_);
                      w !== null && !(w.expirationTime > W && Re());
                    ) {
                      var Be = w.callback;
                      if (typeof Be == 'function') {
                        ((w.callback = null), (z = w.priorityLevel));
                        var Ze = Be(w.expirationTime <= W);
                        if (((W = r.unstable_now()), typeof Ze == 'function')) {
                          ((w.callback = Ze), I(W), (he = !0));
                          break t;
                        }
                        (w === u(_) && o(_), I(W));
                      } else o(_);
                      w = u(_);
                    }
                    if (w !== null) he = !0;
                    else {
                      var D = u(S);
                      (D !== null && tt(oe, D.startTime - W), (he = !1));
                    }
                  }
                  break e;
                } finally {
                  ((w = null), (z = _e), (U = !1));
                }
                he = void 0;
              }
            } finally {
              he ? Le() : (re = !1);
            }
          }
        }
        var Le;
        if (typeof F == 'function')
          Le = function () {
            F(se);
          };
        else if (typeof MessageChannel < 'u') {
          var xe = new MessageChannel(),
            et = xe.port2;
          ((xe.port1.onmessage = se),
            (Le = function () {
              et.postMessage(null);
            }));
        } else
          Le = function () {
            J(se, 0);
          };
        function tt(W, he) {
          V = J(function () {
            W(r.unstable_now());
          }, he);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (W) {
            W.callback = null;
          }),
          (r.unstable_forceFrameRate = function (W) {
            0 > W || 125 < W
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (ce = 0 < W ? Math.floor(1e3 / W) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return z;
          }),
          (r.unstable_next = function (W) {
            switch (z) {
              case 1:
              case 2:
              case 3:
                var he = 3;
                break;
              default:
                he = z;
            }
            var _e = z;
            z = he;
            try {
              return W();
            } finally {
              z = _e;
            }
          }),
          (r.unstable_requestPaint = function () {
            $ = !0;
          }),
          (r.unstable_runWithPriority = function (W, he) {
            switch (W) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                W = 3;
            }
            var _e = z;
            z = W;
            try {
              return he();
            } finally {
              z = _e;
            }
          }),
          (r.unstable_scheduleCallback = function (W, he, _e) {
            var Be = r.unstable_now();
            switch (
              (typeof _e == 'object' && _e !== null
                ? ((_e = _e.delay),
                  (_e = typeof _e == 'number' && 0 < _e ? Be + _e : Be))
                : (_e = Be),
              W)
            ) {
              case 1:
                var Ze = -1;
                break;
              case 2:
                Ze = 250;
                break;
              case 5:
                Ze = 1073741823;
                break;
              case 4:
                Ze = 1e4;
                break;
              default:
                Ze = 5e3;
            }
            return (
              (Ze = _e + Ze),
              (W = {
                id: T++,
                callback: he,
                priorityLevel: W,
                startTime: _e,
                expirationTime: Ze,
                sortIndex: -1,
              }),
              _e > Be
                ? ((W.sortIndex = _e),
                  c(S, W),
                  u(_) === null &&
                    W === u(S) &&
                    (N ? (te(V), (V = -1)) : (N = !0), tt(oe, _e - Be)))
                : ((W.sortIndex = Ze),
                  c(_, W),
                  K || U || ((K = !0), re || ((re = !0), Le()))),
              W
            );
          }),
          (r.unstable_shouldYield = Re),
          (r.unstable_wrapCallback = function (W) {
            var he = z;
            return function () {
              var _e = z;
              z = he;
              try {
                return W.apply(this, arguments);
              } finally {
                z = _e;
              }
            };
          }));
      })(Hg)),
    Hg
  );
}
var Np;
function I5() {
  return (Np || ((Np = 1), (Bg.exports = V5())), Bg.exports);
}
var Ug = { exports: {} },
  Ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gp;
function J5() {
  if (Gp) return Ne;
  Gp = 1;
  var r = Symbol.for('react.transitional.element'),
    c = Symbol.for('react.portal'),
    u = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    g = Symbol.for('react.consumer'),
    v = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    _ = Symbol.for('react.suspense'),
    S = Symbol.for('react.memo'),
    T = Symbol.for('react.lazy'),
    w = Symbol.for('react.activity'),
    z = Symbol.iterator;
  function U(D) {
    return D === null || typeof D != 'object'
      ? null
      : ((D = (z && D[z]) || D['@@iterator']),
        typeof D == 'function' ? D : null);
  }
  var K = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    N = Object.assign,
    $ = {};
  function J(D, Y, fe) {
    ((this.props = D),
      (this.context = Y),
      (this.refs = $),
      (this.updater = fe || K));
  }
  ((J.prototype.isReactComponent = {}),
    (J.prototype.setState = function (D, Y) {
      if (typeof D != 'object' && typeof D != 'function' && D != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, D, Y, 'setState');
    }),
    (J.prototype.forceUpdate = function (D) {
      this.updater.enqueueForceUpdate(this, D, 'forceUpdate');
    }));
  function te() {}
  te.prototype = J.prototype;
  function F(D, Y, fe) {
    ((this.props = D),
      (this.context = Y),
      (this.refs = $),
      (this.updater = fe || K));
  }
  var I = (F.prototype = new te());
  ((I.constructor = F), N(I, J.prototype), (I.isPureReactComponent = !0));
  var oe = Array.isArray;
  function re() {}
  var V = { H: null, A: null, T: null, S: null },
    ce = Object.prototype.hasOwnProperty;
  function Ae(D, Y, fe) {
    var me = fe.ref;
    return {
      $$typeof: r,
      type: D,
      key: Y,
      ref: me !== void 0 ? me : null,
      props: fe,
    };
  }
  function Re(D, Y) {
    return Ae(D.type, Y, D.props);
  }
  function se(D) {
    return typeof D == 'object' && D !== null && D.$$typeof === r;
  }
  function Le(D) {
    var Y = { '=': '=0', ':': '=2' };
    return (
      '$' +
      D.replace(/[=:]/g, function (fe) {
        return Y[fe];
      })
    );
  }
  var xe = /\/+/g;
  function et(D, Y) {
    return typeof D == 'object' && D !== null && D.key != null
      ? Le('' + D.key)
      : Y.toString(36);
  }
  function tt(D) {
    switch (D.status) {
      case 'fulfilled':
        return D.value;
      case 'rejected':
        throw D.reason;
      default:
        switch (
          (typeof D.status == 'string'
            ? D.then(re, re)
            : ((D.status = 'pending'),
              D.then(
                function (Y) {
                  D.status === 'pending' &&
                    ((D.status = 'fulfilled'), (D.value = Y));
                },
                function (Y) {
                  D.status === 'pending' &&
                    ((D.status = 'rejected'), (D.reason = Y));
                },
              )),
          D.status)
        ) {
          case 'fulfilled':
            return D.value;
          case 'rejected':
            throw D.reason;
        }
    }
    throw D;
  }
  function W(D, Y, fe, me, ze) {
    var Fe = typeof D;
    (Fe === 'undefined' || Fe === 'boolean') && (D = null);
    var it = !1;
    if (D === null) it = !0;
    else
      switch (Fe) {
        case 'bigint':
        case 'string':
        case 'number':
          it = !0;
          break;
        case 'object':
          switch (D.$$typeof) {
            case r:
            case c:
              it = !0;
              break;
            case T:
              return ((it = D._init), W(it(D._payload), Y, fe, me, ze));
          }
      }
    if (it)
      return (
        (ze = ze(D)),
        (it = me === '' ? '.' + et(D, 0) : me),
        oe(ze)
          ? ((fe = ''),
            it != null && (fe = it.replace(xe, '$&/') + '/'),
            W(ze, Y, fe, '', function (Ui) {
              return Ui;
            }))
          : ze != null &&
            (se(ze) &&
              (ze = Re(
                ze,
                fe +
                  (ze.key == null || (D && D.key === ze.key)
                    ? ''
                    : ('' + ze.key).replace(xe, '$&/') + '/') +
                  it,
              )),
            Y.push(ze)),
        1
      );
    it = 0;
    var $t = me === '' ? '.' : me + ':';
    if (oe(D))
      for (var _t = 0; _t < D.length; _t++)
        ((me = D[_t]), (Fe = $t + et(me, _t)), (it += W(me, Y, fe, Fe, ze)));
    else if (((_t = U(D)), typeof _t == 'function'))
      for (D = _t.call(D), _t = 0; !(me = D.next()).done; )
        ((me = me.value),
          (Fe = $t + et(me, _t++)),
          (it += W(me, Y, fe, Fe, ze)));
    else if (Fe === 'object') {
      if (typeof D.then == 'function') return W(tt(D), Y, fe, me, ze);
      throw (
        (Y = String(D)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (Y === '[object Object]'
              ? 'object with keys {' + Object.keys(D).join(', ') + '}'
              : Y) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return it;
  }
  function he(D, Y, fe) {
    if (D == null) return D;
    var me = [],
      ze = 0;
    return (
      W(D, me, '', '', function (Fe) {
        return Y.call(fe, Fe, ze++);
      }),
      me
    );
  }
  function _e(D) {
    if (D._status === -1) {
      var Y = D._result;
      ((Y = Y()),
        Y.then(
          function (fe) {
            (D._status === 0 || D._status === -1) &&
              ((D._status = 1), (D._result = fe));
          },
          function (fe) {
            (D._status === 0 || D._status === -1) &&
              ((D._status = 2), (D._result = fe));
          },
        ),
        D._status === -1 && ((D._status = 0), (D._result = Y)));
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var Be =
      typeof reportError == 'function'
        ? reportError
        : function (D) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var Y = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof D == 'object' &&
                  D !== null &&
                  typeof D.message == 'string'
                    ? String(D.message)
                    : String(D),
                error: D,
              });
              if (!window.dispatchEvent(Y)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', D);
              return;
            }
            console.error(D);
          },
    Ze = {
      map: he,
      forEach: function (D, Y, fe) {
        he(
          D,
          function () {
            Y.apply(this, arguments);
          },
          fe,
        );
      },
      count: function (D) {
        var Y = 0;
        return (
          he(D, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (D) {
        return (
          he(D, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (D) {
        if (!se(D))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return D;
      },
    };
  return (
    (Ne.Activity = w),
    (Ne.Children = Ze),
    (Ne.Component = J),
    (Ne.Fragment = u),
    (Ne.Profiler = d),
    (Ne.PureComponent = F),
    (Ne.StrictMode = o),
    (Ne.Suspense = _),
    (Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V),
    (Ne.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (D) {
        return V.H.useMemoCache(D);
      },
    }),
    (Ne.cache = function (D) {
      return function () {
        return D.apply(null, arguments);
      };
    }),
    (Ne.cacheSignal = function () {
      return null;
    }),
    (Ne.cloneElement = function (D, Y, fe) {
      if (D == null)
        throw Error(
          'The argument must be a React element, but you passed ' + D + '.',
        );
      var me = N({}, D.props),
        ze = D.key;
      if (Y != null)
        for (Fe in (Y.key !== void 0 && (ze = '' + Y.key), Y))
          !ce.call(Y, Fe) ||
            Fe === 'key' ||
            Fe === '__self' ||
            Fe === '__source' ||
            (Fe === 'ref' && Y.ref === void 0) ||
            (me[Fe] = Y[Fe]);
      var Fe = arguments.length - 2;
      if (Fe === 1) me.children = fe;
      else if (1 < Fe) {
        for (var it = Array(Fe), $t = 0; $t < Fe; $t++)
          it[$t] = arguments[$t + 2];
        me.children = it;
      }
      return Ae(D.type, ze, me);
    }),
    (Ne.createContext = function (D) {
      return (
        (D = {
          $$typeof: v,
          _currentValue: D,
          _currentValue2: D,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (D.Provider = D),
        (D.Consumer = { $$typeof: g, _context: D }),
        D
      );
    }),
    (Ne.createElement = function (D, Y, fe) {
      var me,
        ze = {},
        Fe = null;
      if (Y != null)
        for (me in (Y.key !== void 0 && (Fe = '' + Y.key), Y))
          ce.call(Y, me) &&
            me !== 'key' &&
            me !== '__self' &&
            me !== '__source' &&
            (ze[me] = Y[me]);
      var it = arguments.length - 2;
      if (it === 1) ze.children = fe;
      else if (1 < it) {
        for (var $t = Array(it), _t = 0; _t < it; _t++)
          $t[_t] = arguments[_t + 2];
        ze.children = $t;
      }
      if (D && D.defaultProps)
        for (me in ((it = D.defaultProps), it))
          ze[me] === void 0 && (ze[me] = it[me]);
      return Ae(D, Fe, ze);
    }),
    (Ne.createRef = function () {
      return { current: null };
    }),
    (Ne.forwardRef = function (D) {
      return { $$typeof: p, render: D };
    }),
    (Ne.isValidElement = se),
    (Ne.lazy = function (D) {
      return { $$typeof: T, _payload: { _status: -1, _result: D }, _init: _e };
    }),
    (Ne.memo = function (D, Y) {
      return { $$typeof: S, type: D, compare: Y === void 0 ? null : Y };
    }),
    (Ne.startTransition = function (D) {
      var Y = V.T,
        fe = {};
      V.T = fe;
      try {
        var me = D(),
          ze = V.S;
        (ze !== null && ze(fe, me),
          typeof me == 'object' &&
            me !== null &&
            typeof me.then == 'function' &&
            me.then(re, Be));
      } catch (Fe) {
        Be(Fe);
      } finally {
        (Y !== null && fe.types !== null && (Y.types = fe.types), (V.T = Y));
      }
    }),
    (Ne.unstable_useCacheRefresh = function () {
      return V.H.useCacheRefresh();
    }),
    (Ne.use = function (D) {
      return V.H.use(D);
    }),
    (Ne.useActionState = function (D, Y, fe) {
      return V.H.useActionState(D, Y, fe);
    }),
    (Ne.useCallback = function (D, Y) {
      return V.H.useCallback(D, Y);
    }),
    (Ne.useContext = function (D) {
      return V.H.useContext(D);
    }),
    (Ne.useDebugValue = function () {}),
    (Ne.useDeferredValue = function (D, Y) {
      return V.H.useDeferredValue(D, Y);
    }),
    (Ne.useEffect = function (D, Y) {
      return V.H.useEffect(D, Y);
    }),
    (Ne.useEffectEvent = function (D) {
      return V.H.useEffectEvent(D);
    }),
    (Ne.useId = function () {
      return V.H.useId();
    }),
    (Ne.useImperativeHandle = function (D, Y, fe) {
      return V.H.useImperativeHandle(D, Y, fe);
    }),
    (Ne.useInsertionEffect = function (D, Y) {
      return V.H.useInsertionEffect(D, Y);
    }),
    (Ne.useLayoutEffect = function (D, Y) {
      return V.H.useLayoutEffect(D, Y);
    }),
    (Ne.useMemo = function (D, Y) {
      return V.H.useMemo(D, Y);
    }),
    (Ne.useOptimistic = function (D, Y) {
      return V.H.useOptimistic(D, Y);
    }),
    (Ne.useReducer = function (D, Y, fe) {
      return V.H.useReducer(D, Y, fe);
    }),
    (Ne.useRef = function (D) {
      return V.H.useRef(D);
    }),
    (Ne.useState = function (D) {
      return V.H.useState(D);
    }),
    (Ne.useSyncExternalStore = function (D, Y, fe) {
      return V.H.useSyncExternalStore(D, Y, fe);
    }),
    (Ne.useTransition = function () {
      return V.H.useTransition();
    }),
    (Ne.version = '19.2.4'),
    Ne
  );
}
var Fp;
function sp() {
  return (Fp || ((Fp = 1), (Ug.exports = J5())), Ug.exports);
}
var kg = { exports: {} },
  Dn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p;
function W5() {
  if ($p) return Dn;
  $p = 1;
  var r = sp();
  function c(_) {
    var S = 'https://react.dev/errors/' + _;
    if (1 < arguments.length) {
      S += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++)
        S += '&args[]=' + encodeURIComponent(arguments[T]);
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
  function g(_, S, T) {
    var w =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: w == null ? null : '' + w,
      children: _,
      containerInfo: S,
      implementation: T,
    };
  }
  var v = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(_, S) {
    if (_ === 'font') return '';
    if (typeof S == 'string') return S === 'use-credentials' ? S : '';
  }
  return (
    (Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Dn.createPortal = function (_, S) {
      var T =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S || (S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11))
        throw Error(c(299));
      return g(_, S, null, T);
    }),
    (Dn.flushSync = function (_) {
      var S = v.T,
        T = o.p;
      try {
        if (((v.T = null), (o.p = 2), _)) return _();
      } finally {
        ((v.T = S), (o.p = T), o.d.f());
      }
    }),
    (Dn.preconnect = function (_, S) {
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
    (Dn.prefetchDNS = function (_) {
      typeof _ == 'string' && o.d.D(_);
    }),
    (Dn.preinit = function (_, S) {
      if (typeof _ == 'string' && S && typeof S.as == 'string') {
        var T = S.as,
          w = p(T, S.crossOrigin),
          z = typeof S.integrity == 'string' ? S.integrity : void 0,
          U = typeof S.fetchPriority == 'string' ? S.fetchPriority : void 0;
        T === 'style'
          ? o.d.S(_, typeof S.precedence == 'string' ? S.precedence : void 0, {
              crossOrigin: w,
              integrity: z,
              fetchPriority: U,
            })
          : T === 'script' &&
            o.d.X(_, {
              crossOrigin: w,
              integrity: z,
              fetchPriority: U,
              nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
            });
      }
    }),
    (Dn.preinitModule = function (_, S) {
      if (typeof _ == 'string')
        if (typeof S == 'object' && S !== null) {
          if (S.as == null || S.as === 'script') {
            var T = p(S.as, S.crossOrigin);
            o.d.M(_, {
              crossOrigin: T,
              integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
              nonce: typeof S.nonce == 'string' ? S.nonce : void 0,
            });
          }
        } else S == null && o.d.M(_);
    }),
    (Dn.preload = function (_, S) {
      if (
        typeof _ == 'string' &&
        typeof S == 'object' &&
        S !== null &&
        typeof S.as == 'string'
      ) {
        var T = S.as,
          w = p(T, S.crossOrigin);
        o.d.L(_, T, {
          crossOrigin: w,
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
    (Dn.preloadModule = function (_, S) {
      if (typeof _ == 'string')
        if (S) {
          var T = p(S.as, S.crossOrigin);
          o.d.m(_, {
            as: typeof S.as == 'string' && S.as !== 'script' ? S.as : void 0,
            crossOrigin: T,
            integrity: typeof S.integrity == 'string' ? S.integrity : void 0,
          });
        } else o.d.m(_);
    }),
    (Dn.requestFormReset = function (_) {
      o.d.r(_);
    }),
    (Dn.unstable_batchedUpdates = function (_, S) {
      return _(S);
    }),
    (Dn.useFormState = function (_, S, T) {
      return v.H.useFormState(_, S, T);
    }),
    (Dn.useFormStatus = function () {
      return v.H.useHostTransitionStatus();
    }),
    (Dn.version = '19.2.4'),
    Dn
  );
}
var Yp;
function M8() {
  if (Yp) return kg.exports;
  Yp = 1;
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
  return (r(), (kg.exports = W5()), kg.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xp;
function P5() {
  if (Xp) return g0;
  Xp = 1;
  var r = I5(),
    c = sp(),
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
  function p(e) {
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
        for (var m = !1, C = f.child; C; ) {
          if (C === n) {
            ((m = !0), (n = f), (l = h));
            break;
          }
          if (C === l) {
            ((m = !0), (l = f), (n = h));
            break;
          }
          C = C.sibling;
        }
        if (!m) {
          for (C = h.child; C; ) {
            if (C === n) {
              ((m = !0), (n = h), (l = f));
              break;
            }
            if (C === l) {
              ((m = !0), (l = h), (n = f));
              break;
            }
            C = C.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function T(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = T(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var w = Object.assign,
    z = Symbol.for('react.element'),
    U = Symbol.for('react.transitional.element'),
    K = Symbol.for('react.portal'),
    N = Symbol.for('react.fragment'),
    $ = Symbol.for('react.strict_mode'),
    J = Symbol.for('react.profiler'),
    te = Symbol.for('react.consumer'),
    F = Symbol.for('react.context'),
    I = Symbol.for('react.forward_ref'),
    oe = Symbol.for('react.suspense'),
    re = Symbol.for('react.suspense_list'),
    V = Symbol.for('react.memo'),
    ce = Symbol.for('react.lazy'),
    Ae = Symbol.for('react.activity'),
    Re = Symbol.for('react.memo_cache_sentinel'),
    se = Symbol.iterator;
  function Le(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (se && e[se]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var xe = Symbol.for('react.client.reference');
  function et(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === xe ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case N:
        return 'Fragment';
      case J:
        return 'Profiler';
      case $:
        return 'StrictMode';
      case oe:
        return 'Suspense';
      case re:
        return 'SuspenseList';
      case Ae:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case K:
          return 'Portal';
        case F:
          return e.displayName || 'Context';
        case te:
          return (e._context.displayName || 'Context') + '.Consumer';
        case I:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case V:
          return (
            (t = e.displayName || null),
            t !== null ? t : et(e.type) || 'Memo'
          );
        case ce:
          ((t = e._payload), (e = e._init));
          try {
            return et(e(t));
          } catch {}
      }
    return null;
  }
  var tt = Array.isArray,
    W = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    he = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    _e = { pending: !1, data: null, method: null, action: null },
    Be = [],
    Ze = -1;
  function D(e) {
    return { current: e };
  }
  function Y(e) {
    0 > Ze || ((e.current = Be[Ze]), (Be[Ze] = null), Ze--);
  }
  function fe(e, t) {
    (Ze++, (Be[Ze] = e.current), (e.current = t));
  }
  var me = D(null),
    ze = D(null),
    Fe = D(null),
    it = D(null);
  function $t(e, t) {
    switch ((fe(Fe, t), fe(ze, e), fe(me, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Pu(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Pu(t)), (e = zn(t, e)));
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
    (Y(me), fe(me, e));
  }
  function _t() {
    (Y(me), Y(ze), Y(Fe));
  }
  function Ui(e) {
    e.memoizedState !== null && fe(it, e);
    var t = me.current,
      n = zn(t, e.type);
    t !== n && (fe(ze, e), fe(me, n));
  }
  function tl(e) {
    (ze.current === e && (Y(me), Y(ze)),
      it.current === e && (Y(it), (Mi._currentValue = _e)));
  }
  var Ll, lo;
  function Wt(e) {
    if (Ll === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ll = (t && t[1]) || ''),
          (lo =
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
      Ll +
      e +
      lo
    );
  }
  var nl = !1;
  function io(e, t) {
    if (!e || nl) return '';
    nl = !0;
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
                  var X = Z;
                }
                Reflect.construct(e, [], ae);
              } else {
                try {
                  ae.call();
                } catch (Z) {
                  X = Z;
                }
                e.call(ae.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Z) {
                X = Z;
              }
              (ae = e()) &&
                typeof ae.catch == 'function' &&
                ae.catch(function () {});
            }
          } catch (Z) {
            if (Z && X && typeof Z.stack == 'string') return [Z.stack, X.stack];
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
        C = h[1];
      if (m && C) {
        var O = m.split(`
`),
          G = C.split(`
`);
        for (
          f = l = 0;
          l < O.length && !O[l].includes('DetermineComponentFrameRoot');
        )
          l++;
        for (; f < G.length && !G[f].includes('DetermineComponentFrameRoot'); )
          f++;
        if (l === O.length || f === G.length)
          for (
            l = O.length - 1, f = G.length - 1;
            1 <= l && 0 <= f && O[l] !== G[f];
          )
            f--;
        for (; 1 <= l && 0 <= f; l--, f--)
          if (O[l] !== G[f]) {
            if (l !== 1 || f !== 1)
              do
                if ((l--, f--, 0 > f || O[l] !== G[f])) {
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
      ((nl = !1), (Error.prepareStackTrace = n));
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
        return io(e.type, !1);
      case 11:
        return io(e.type.render, !1);
      case 1:
        return io(e.type, !0);
      case 31:
        return Wt('Activity');
      default:
        return '';
    }
  }
  function uo(e) {
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
  var co = Object.prototype.hasOwnProperty,
    al = r.unstable_scheduleCallback,
    qn = r.unstable_cancelCallback,
    ki = r.unstable_shouldYield,
    uc = r.unstable_requestPaint,
    Ln = r.unstable_now,
    Ni = r.unstable_getCurrentPriorityLevel,
    j0 = r.unstable_ImmediatePriority,
    Bl = r.unstable_UserBlockingPriority,
    Va = r.unstable_NormalPriority,
    fo = r.unstable_LowPriority,
    cc = r.unstable_IdlePriority,
    oo = r.log,
    so = r.unstable_setDisableYieldValue,
    rl = null,
    hn = null;
  function La(e) {
    if (
      (typeof oo == 'function' && so(e),
      hn && typeof hn.setStrictMode == 'function')
    )
      try {
        hn.setStrictMode(rl, e);
      } catch {}
  }
  var dn = Math.clz32 ? Math.clz32 : wd,
    ho = Math.log,
    Rd = Math.LN2;
  function wd(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((ho(e) / Rd) | 0)) | 0);
  }
  var fc = 256,
    Gi = 262144,
    Fi = 4194304;
  function ll(e) {
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
  function oc(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var f = 0,
      h = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var C = l & 134217727;
    return (
      C !== 0
        ? ((l = C & ~h),
          l !== 0
            ? (f = ll(l))
            : ((m &= C),
              m !== 0
                ? (f = ll(m))
                : n || ((n = C & ~e), n !== 0 && (f = ll(n)))))
        : ((C = l & ~h),
          C !== 0
            ? (f = ll(C))
            : m !== 0
              ? (f = ll(m))
              : n || ((n = l & ~e), n !== 0 && (f = ll(n)))),
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
  function $i(e, t) {
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
  function go() {
    var e = Fi;
    return ((Fi <<= 1), (Fi & 62914560) === 0 && (Fi = 4194304), e);
  }
  function vo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Yi(e, t) {
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
    var C = e.entanglements,
      O = e.expirationTimes,
      G = e.hiddenUpdates;
    for (n = m & ~n; 0 < n; ) {
      var ee = 31 - dn(n),
        ae = 1 << ee;
      ((C[ee] = 0), (O[ee] = -1));
      var X = G[ee];
      if (X !== null)
        for (G[ee] = null, ee = 0; ee < X.length; ee++) {
          var Z = X[ee];
          Z !== null && (Z.lane &= -536870913);
        }
      n &= ~ae;
    }
    (l !== 0 && sc(e, l, 0),
      h !== 0 && f === 0 && e.tag !== 0 && (e.suspendedLanes |= h & ~(m & ~t)));
  }
  function sc(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - dn(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function D0(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - dn(n),
        f = 1 << l;
      ((f & t) | (e[l] & t) && (e[l] |= t), (n &= ~f));
    }
  }
  function hc(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : yo(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function yo(e) {
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
  function mo(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function q0() {
    var e = he.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : X1(e.type));
  }
  function L0(e, t) {
    var n = he.p;
    try {
      return ((he.p = e), t());
    } finally {
      he.p = n;
    }
  }
  var Sr = Math.random().toString(36).slice(2),
    Pt = '__reactFiber$' + Sr,
    bn = '__reactProps$' + Sr,
    Hl = '__reactContainer$' + Sr,
    dc = '__reactEvents$' + Sr,
    Od = '__reactListeners$' + Sr,
    Md = '__reactHandles$' + Sr,
    B0 = '__reactResources$' + Sr,
    Xi = '__reactMarker$' + Sr;
  function po(e) {
    (delete e[Pt], delete e[bn], delete e[dc], delete e[Od], delete e[Md]);
  }
  function Ul(e) {
    var t = e[Pt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Hl] || n[Pt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = E1(e); e !== null; ) {
            if ((n = e[Pt])) return n;
            e = E1(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Ia(e) {
    if ((e = e[Pt] || e[Hl])) {
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
  function Ja(e) {
    var t = e[B0];
    return (
      t ||
        (t = e[B0] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Zt(e) {
    e[Xi] = !0;
  }
  var H0 = new Set(),
    U0 = {};
  function xr(e, t) {
    (il(e, t), il(e + 'Capture', t));
  }
  function il(e, t) {
    for (U0[e] = t, e = 0; e < t.length; e++) H0.add(t[e]);
  }
  var k0 = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    N0 = {},
    G0 = {};
  function zd(e) {
    return co.call(G0, e)
      ? !0
      : co.call(N0, e)
        ? !1
        : k0.test(e)
          ? (G0[e] = !0)
          : ((N0[e] = !0), !1);
  }
  function gc(e, t, n) {
    if (zd(t))
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
  function Qi(e, t, n) {
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
  function Bn(e) {
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
  function vc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function jd(e, t, n) {
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
  function yc(e) {
    if (!e._valueTracker) {
      var t = vc(e) ? 'checked' : 'value';
      e._valueTracker = jd(e, t, '' + e[t]);
    }
  }
  function Zi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = vc(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Vi(e) {
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
  var Dd = /[\n"\\]/g;
  function Hn(e) {
    return e.replace(Dd, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function mc(e, t, n, l, f, h, m, C) {
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
            (e.value = '' + Bn(t))
          : e.value !== '' + Bn(t) && (e.value = '' + Bn(t))
        : (m !== 'submit' && m !== 'reset') || e.removeAttribute('value'),
      t != null
        ? bo(e, m, Bn(t))
        : n != null
          ? bo(e, m, Bn(n))
          : l != null && e.removeAttribute('value'),
      f == null && h != null && (e.defaultChecked = !!h),
      f != null &&
        (e.checked = f && typeof f != 'function' && typeof f != 'symbol'),
      C != null &&
      typeof C != 'function' &&
      typeof C != 'symbol' &&
      typeof C != 'boolean'
        ? (e.name = '' + Bn(C))
        : e.removeAttribute('name'));
  }
  function pc(e, t, n, l, f, h, m, C) {
    if (
      (h != null &&
        typeof h != 'function' &&
        typeof h != 'symbol' &&
        typeof h != 'boolean' &&
        (e.type = h),
      t != null || n != null)
    ) {
      if (!((h !== 'submit' && h !== 'reset') || t != null)) {
        yc(e);
        return;
      }
      ((n = n != null ? '' + Bn(n) : ''),
        (t = t != null ? '' + Bn(t) : n),
        C || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? f),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = C ? e.checked : !!l),
      (e.defaultChecked = !!l),
      m != null &&
        typeof m != 'function' &&
        typeof m != 'symbol' &&
        typeof m != 'boolean' &&
        (e.name = m),
      yc(e));
  }
  function bo(e, t, n) {
    (t === 'number' && Vi(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function ul(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var f = 0; f < n.length; f++) t['$' + n[f]] = !0;
      for (n = 0; n < e.length; n++)
        ((f = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== f && (e[n].selected = f),
          f && l && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Bn(n), t = null, f = 0; f < e.length; f++) {
        if (e[f].value === n) {
          ((e[f].selected = !0), l && (e[f].defaultSelected = !0));
          return;
        }
        t !== null || e[f].disabled || (t = e[f]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function bc(e, t, n) {
    if (
      t != null &&
      ((t = '' + Bn(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Bn(n) : '';
  }
  function _c(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (tt(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = Bn(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l),
      yc(e));
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
  var F0 = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function _o(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || F0.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function $0(e, t, n) {
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
        ((l = t[f]), t.hasOwnProperty(f) && n[f] !== l && _o(e, f, l));
    } else for (var h in t) t.hasOwnProperty(h) && _o(e, h, t[h]);
  }
  function Sc(e) {
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
    X0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ii(e) {
    return X0.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Wa() {}
  var So = null;
  function xo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var cl = null,
    kl = null;
  function K0(e) {
    var t = Ia(e);
    if (t && (e = t.stateNode)) {
      var n = e[bn] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (mc(
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
                'input[name="' + Hn('' + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var f = l[bn] || null;
                if (!f) throw Error(o(90));
                mc(
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
          bc(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && ul(e, !!n.multiple, t, !1));
      }
    }
  }
  var Co = !1;
  function Q0(e, t, n) {
    if (Co) return e(t, n);
    Co = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((Co = !1),
        (cl !== null || kl !== null) &&
          (Rf(), cl && ((t = cl), (e = kl), (kl = cl = null), K0(t), e)))
      )
        for (t = 0; t < e.length; t++) K0(e[t]);
    }
  }
  function fl(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[bn] || null;
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
  var Pa = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Ao = !1;
  if (Pa)
    try {
      var Ji = {};
      (Object.defineProperty(Ji, 'passive', {
        get: function () {
          Ao = !0;
        },
      }),
        window.addEventListener('test', Ji, Ji),
        window.removeEventListener('test', Ji, Ji));
    } catch {
      Ao = !1;
    }
  var Cr = null,
    Ro = null,
    dt = null;
  function mt() {
    if (dt) return dt;
    var e,
      t = Ro,
      n = t.length,
      l,
      f = 'value' in Cr ? Cr.value : Cr.textContent,
      h = f.length;
    for (e = 0; e < n && t[e] === f[e]; e++);
    var m = n - e;
    for (l = 1; l <= m && t[n - l] === f[h - l]; l++);
    return (dt = f.slice(e, 1 < l ? 1 - l : void 0));
  }
  function xc(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Cc() {
    return !0;
  }
  function Z0() {
    return !1;
  }
  function _n(e) {
    function t(n, l, f, h, m) {
      ((this._reactName = n),
        (this._targetInst = f),
        (this.type = l),
        (this.nativeEvent = h),
        (this.target = m),
        (this.currentTarget = null));
      for (var C in e)
        e.hasOwnProperty(C) && ((n = e[C]), (this[C] = n ? n(h) : h[C]));
      return (
        (this.isDefaultPrevented = (
          h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1
        )
          ? Cc
          : Z0),
        (this.isPropagationStopped = Z0),
        this
      );
    }
    return (
      w(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Cc));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Cc));
        },
        persist: function () {},
        isPersistent: Cc,
      }),
      t
    );
  }
  var ol = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ac = _n(ol),
    Nl = w({}, ol, { view: 0, detail: 0 }),
    qd = _n(Nl),
    Yt,
    Wi,
    _a,
    Pi = w({}, Nl, {
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
      getModifierState: eu,
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
                ? ((Yt = e.screenX - _a.screenX), (Wi = e.screenY - _a.screenY))
                : (Wi = Yt = 0),
              (_a = e)),
            Yt);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Wi;
      },
    }),
    Rc = _n(Pi),
    aa = w({}, Pi, { dataTransfer: 0 }),
    V0 = _n(aa),
    I0 = w({}, Nl, { relatedTarget: 0 }),
    wc = _n(I0),
    J0 = w({}, ol, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    W0 = _n(J0),
    P0 = w({}, ol, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Un = _n(P0),
    Ld = w({}, ol, { data: 0 }),
    kn = _n(Ld),
    Bd = {
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
    eh = {
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
    Ar = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Tc(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ar[e])
        ? !!t[e]
        : !1;
  }
  function eu() {
    return Tc;
  }
  var Ct = w({}, Nl, {
      key: function (e) {
        if (e.key) {
          var t = Bd[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = xc(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? eh[e.keyCode] || 'Unidentified'
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
      getModifierState: eu,
      charCode: function (e) {
        return e.type === 'keypress' ? xc(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? xc(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    Rr = _n(Ct),
    wo = w({}, Pi, {
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
    th = _n(wo),
    To = w({}, Nl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: eu,
    }),
    Hd = _n(To),
    Ud = w({}, ol, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kd = _n(Ud),
    nh = w({}, Pi, {
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
    Ec = _n(nh),
    Gl = w({}, ol, { newState: 0, oldState: 0 }),
    Nd = _n(Gl),
    ah = [9, 13, 27, 32],
    Oc = Pa && 'CompositionEvent' in window,
    sl = null;
  Pa && 'documentMode' in document && (sl = document.documentMode);
  var Eo = Pa && 'TextEvent' in window && !sl,
    Oo = Pa && (!Oc || (sl && 8 < sl && 11 >= sl)),
    rh = ' ',
    Mc = !1;
  function zc(e, t) {
    switch (e) {
      case 'keyup':
        return ah.indexOf(t.keyCode) !== -1;
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
  function lh(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var hl = !1;
  function Nn(e, t) {
    switch (e) {
      case 'compositionend':
        return lh(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Mc = !0), rh);
      case 'textInput':
        return ((e = t.data), e === rh && Mc ? null : e);
      default:
        return null;
    }
  }
  function Mo(e, t) {
    if (hl)
      return e === 'compositionend' || (!Oc && zc(e, t))
        ? ((e = mt()), (dt = Ro = Cr = null), (hl = !1), e)
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
        return Oo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var tu = {
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
  function zo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!tu[e.type] : t === 'textarea';
  }
  function jo(e, t, n, l) {
    (cl ? (kl ? kl.push(l) : (kl = [l])) : (cl = l),
      (t = Vu(t, 'onChange')),
      0 < t.length &&
        ((n = new Ac('onChange', 'change', null, n, l)),
        e.push({ event: n, listeners: t })));
  }
  var nu = null,
    au = null;
  function Gd(e) {
    b1(e, 0);
  }
  function jc(e) {
    var t = Ki(e);
    if (Zi(t)) return e;
  }
  function ih(e, t) {
    if (e === 'change') return t;
  }
  var dl = !1;
  if (Pa) {
    var Do;
    if (Pa) {
      var qo = 'oninput' in document;
      if (!qo) {
        var Dc = document.createElement('div');
        (Dc.setAttribute('oninput', 'return;'),
          (qo = typeof Dc.oninput == 'function'));
      }
      Do = qo;
    } else Do = !1;
    dl = Do && (!document.documentMode || 9 < document.documentMode);
  }
  function Lo() {
    nu && (nu.detachEvent('onpropertychange', er), (au = nu = null));
  }
  function er(e) {
    if (e.propertyName === 'value' && jc(au)) {
      var t = [];
      (jo(t, au, e, xo(e)), Q0(Gd, t));
    }
  }
  function qc(e, t, n) {
    e === 'focusin'
      ? (Lo(), (nu = t), (au = n), nu.attachEvent('onpropertychange', er))
      : e === 'focusout' && Lo();
  }
  function Fd(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return jc(au);
  }
  function $d(e, t) {
    if (e === 'click') return jc(t);
  }
  function Yd(e, t) {
    if (e === 'input' || e === 'change') return jc(t);
  }
  function Fl(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Tt = typeof Object.is == 'function' ? Object.is : Fl;
  function $l(e, t) {
    if (Tt(e, t)) return !0;
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
      if (!co.call(t, f) || !Tt(e[f], t[f])) return !1;
    }
    return !0;
  }
  function uh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ch(e, t) {
    var n = uh(e);
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
      n = uh(n);
    }
  }
  function fh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? fh(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function oh(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Vi(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Vi(e.document);
    }
    return t;
  }
  function Bo(e) {
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
  var Yl = Pa && 'documentMode' in document && 11 >= document.documentMode,
    L = null,
    P = null,
    Q = null,
    ve = !1;
  function De(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ve ||
      L == null ||
      L !== Vi(l) ||
      ((l = L),
      'selectionStart' in l && Bo(l)
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
      (Q && $l(Q, l)) ||
        ((Q = l),
        (l = Vu(P, 'onSelect')),
        0 < l.length &&
          ((t = new Ac('onSelect', 'select', null, t, n)),
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
    Lc = {};
  Pa &&
    ((Lc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete At.animationend.animation,
      delete At.animationiteration.animation,
      delete At.animationstart.animation),
    'TransitionEvent' in window || delete At.transitionend.transition);
  function gl(e) {
    if (ft[e]) return ft[e];
    if (!At[e]) return e;
    var t = At[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Lc) return (ft[e] = t[n]);
    return e;
  }
  var Gn = gl('animationend'),
    ru = gl('animationiteration'),
    sh = gl('animationstart'),
    Xl = gl('transitionrun'),
    Bc = gl('transitionstart'),
    Hc = gl('transitioncancel'),
    rt = gl('transitionend'),
    hh = new Map(),
    Uc =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Uc.push('scrollEnd');
  function Sn(e, t) {
    (hh.set(e, t), xr(t, [e]));
  }
  var kc =
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
    Ql = 0;
  function Sa() {
    for (var e = Kl, t = (Ql = Kl = 0); t < e; ) {
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
      h !== 0 && Ho(n, f, h);
    }
  }
  function vl(e, t, n, l) {
    ((ra[Kl++] = e),
      (ra[Kl++] = t),
      (ra[Kl++] = n),
      (ra[Kl++] = l),
      (Ql |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function Nc(e, t, n, l) {
    return (vl(e, t, n, l), lu(e));
  }
  function Ha(e, t) {
    return (vl(e, null, null, t), lu(e));
  }
  function Ho(e, t, n) {
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
          ((f = 31 - dn(n)),
          (e = h.hiddenUpdates),
          (l = e[f]),
          l === null ? (e[f] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        h)
      : null;
  }
  function lu(e) {
    if (50 < Fu) throw ((Fu = 0), (Bs = null), Error(o(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var tr = {};
  function dh(e, t, n, l) {
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
    return new dh(e, t, n, l);
  }
  function nr(e) {
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
  function gh(e, t) {
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
    if (((l = e), typeof e == 'function')) nr(e) && (m = 1);
    else if (typeof e == 'string')
      m = Rg(e, n, me.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case Ae:
          return (
            (e = en(31, n, t, f)),
            (e.elementType = Ae),
            (e.lanes = h),
            e
          );
        case N:
          return yl(n.children, f, h, t);
        case $:
          ((m = 8), (f |= 24));
          break;
        case J:
          return (
            (e = en(12, n, t, f | 2)),
            (e.elementType = J),
            (e.lanes = h),
            e
          );
        case oe:
          return (
            (e = en(13, n, t, f)),
            (e.elementType = oe),
            (e.lanes = h),
            e
          );
        case re:
          return (
            (e = en(19, n, t, f)),
            (e.elementType = re),
            (e.lanes = h),
            e
          );
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case F:
                m = 10;
                break e;
              case te:
                m = 9;
                break e;
              case I:
                m = 11;
                break e;
              case V:
                m = 14;
                break e;
              case ce:
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
  function yl(e, t, n, l) {
    return ((e = en(7, e, l, t)), (e.lanes = n), e);
  }
  function Zl(e, t, n) {
    return ((e = en(6, e, null, t)), (e.lanes = n), e);
  }
  function iu(e) {
    var t = en(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function uu(e, t, n) {
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
  var vh = new WeakMap();
  function Fn(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = vh.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: uo(t) }), vh.set(e, t), t);
    }
    return { value: e, source: t, stack: uo(t) };
  }
  var Vl = [],
    Il = 0,
    zt = null,
    Ut = 0,
    ia = [],
    ua = 0,
    ar = null,
    Ua = 1,
    ca = '';
  function $n(e, t) {
    ((Vl[Il++] = Ut), (Vl[Il++] = zt), (zt = e), (Ut = t));
  }
  function Fc(e, t, n) {
    ((ia[ua++] = Ua), (ia[ua++] = ca), (ia[ua++] = ar), (ar = e));
    var l = Ua;
    e = ca;
    var f = 32 - dn(l) - 1;
    ((l &= ~(1 << f)), (n += 1));
    var h = 32 - dn(t) + f;
    if (30 < h) {
      var m = f - (f % 5);
      ((h = (l & ((1 << m) - 1)).toString(32)),
        (l >>= m),
        (f -= m),
        (Ua = (1 << (32 - dn(t) + f)) | (n << f) | l),
        (ca = h + e));
    } else ((Ua = (1 << h) | (n << f) | l), (ca = e));
  }
  function wr(e) {
    e.return !== null && ($n(e, 1), Fc(e, 1, 0));
  }
  function ml(e) {
    for (; e === zt; )
      ((zt = Vl[--Il]), (Vl[Il] = null), (Ut = Vl[--Il]), (Vl[Il] = null));
    for (; e === ar; )
      ((ar = ia[--ua]),
        (ia[ua] = null),
        (ca = ia[--ua]),
        (ia[ua] = null),
        (Ua = ia[--ua]),
        (ia[ua] = null));
  }
  function Jl(e, t) {
    ((ia[ua++] = Ua),
      (ia[ua++] = ca),
      (ia[ua++] = ar),
      (Ua = t.id),
      (ca = t.overflow),
      (ar = e));
  }
  var kt = null,
    ut = null,
    Je = !1,
    Tr = null,
    fa = !1,
    Uo = Error(o(519));
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
    throw (Mr(Fn(t, e)), Uo);
  }
  function cu(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[Pt] = e), (t[bn] = l), n)) {
      case 'dialog':
        (Ke('cancel', t), Ke('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        Ke('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < Zu.length; n++) Ke(Zu[n], t);
        break;
      case 'source':
        Ke('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (Ke('error', t), Ke('load', t));
        break;
      case 'details':
        Ke('toggle', t);
        break;
      case 'input':
        (Ke('invalid', t),
          pc(
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
        Ke('invalid', t);
        break;
      case 'textarea':
        (Ke('invalid', t), _c(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      x1(t.textContent, n)
        ? (l.popover != null && (Ke('beforetoggle', t), Ke('toggle', t)),
          l.onScroll != null && Ke('scroll', t),
          l.onScrollEnd != null && Ke('scrollend', t),
          l.onClick != null && (t.onclick = Wa),
          (t = !0))
        : (t = !1),
      t || Er(e, !0));
  }
  function Wl(e) {
    for (kt = e.return; kt; )
      switch (kt.tag) {
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
          kt = kt.return;
      }
  }
  function pl(e) {
    if (e !== kt) return !1;
    if (!Je) return (Wl(e), (Je = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== 'form' && n !== 'button') || Kr(e.type, e.memoizedProps))),
        (n = !n)),
      n && ut && Er(e),
      Wl(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      ut = T1(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      ut = T1(e);
    } else
      t === 27
        ? ((t = ut), Ee(e.type) ? ((e = n0), (n0 = null), (ut = e)) : (ut = t))
        : (ut = kt ? ya(e.stateNode.nextSibling) : null);
    return !0;
  }
  function A() {
    ((ut = kt = null), (Je = !1));
  }
  function Or() {
    var e = Tr;
    return (
      e !== null &&
        (En === null ? (En = e) : En.push.apply(En, e), (Tr = null)),
      e
    );
  }
  function Mr(e) {
    Tr === null ? (Tr = [e]) : Tr.push(e);
  }
  var xn = D(null),
    He = null,
    rr = null;
  function zr(e, t, n) {
    (fe(xn, t._currentValue), (t._currentValue = n));
  }
  function lr(e) {
    ((e._currentValue = xn.current), Y(xn));
  }
  function ir(e, t, n) {
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
  function ko(e, t, n, l) {
    var f = e.child;
    for (f !== null && (f.return = e); f !== null; ) {
      var h = f.dependencies;
      if (h !== null) {
        var m = f.child;
        h = h.firstContext;
        e: for (; h !== null; ) {
          var C = h;
          h = f;
          for (var O = 0; O < t.length; O++)
            if (C.context === t[O]) {
              ((h.lanes |= n),
                (C = h.alternate),
                C !== null && (C.lanes |= n),
                ir(h.return, n, e),
                l || (m = null));
              break e;
            }
          h = C.next;
        }
      } else if (f.tag === 18) {
        if (((m = f.return), m === null)) throw Error(o(341));
        ((m.lanes |= n),
          (h = m.alternate),
          h !== null && (h.lanes |= n),
          ir(m, n, e),
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
  function Pl(e, t, n, l) {
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
          var C = f.type;
          Tt(f.pendingProps.value, m.value) ||
            (e !== null ? e.push(C) : (e = [C]));
        }
      } else if (f === it.current) {
        if (((m = f.alternate), m === null)) throw Error(o(387));
        m.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (e !== null ? e.push(Mi) : (e = [Mi]));
      }
      f = f.return;
    }
    (e !== null && ko(t, e, n, l), (t.flags |= 262144));
  }
  function $c(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Tt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function bl(e) {
    ((He = e),
      (rr = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function tn(e) {
    return yh(He, e);
  }
  function oa(e, t) {
    return (He === null && bl(e), yh(e, t));
  }
  function yh(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), rr === null)) {
      if (e === null) throw Error(o(308));
      ((rr = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else rr = rr.next = t;
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
    Qd = r.unstable_NormalPriority,
    Nt = {
      $$typeof: F,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function xa() {
    return { controller: new Xd(), data: new Map(), refCount: 0 };
  }
  function fu(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Kd(Qd, function () {
          e.controller.abort();
        }));
  }
  var ou = null,
    No = 0,
    ei = 0,
    ti = null;
  function _l(e, t) {
    if (ou === null) {
      var n = (ou = []);
      ((No = 0),
        (ei = Wn()),
        (ti = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (No++, t.then(mh, mh), t);
  }
  function mh() {
    if (--No === 0 && ou !== null) {
      ti !== null && (ti.status = 'fulfilled');
      var e = ou;
      ((ou = null), (ei = 0), (ti = null));
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
  var sa = W.S;
  W.S = function (e, t) {
    ((t1 = Ln()),
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        _l(e, t),
      sa !== null && sa(e, t));
  };
  var Sl = D(null);
  function Go() {
    var e = Sl.current;
    return e !== null ? e : bt.pooledCache;
  }
  function Yc(e, t) {
    t === null ? fe(Sl, Sl.current) : fe(Sl, t.pool);
  }
  function ph() {
    var e = Go();
    return e === null ? null : { parent: Nt._currentValue, pool: e };
  }
  var ni = Error(o(460)),
    Xc = Error(o(474)),
    su = Error(o(542)),
    Kc = { then: function () {} };
  function bh(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Qc(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(Wa, Wa), (t = n)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), Fo(e), e);
      default:
        if (typeof t.status == 'string') t.then(Wa, Wa);
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
            throw ((e = t.reason), Fo(e), e);
        }
        throw ((ka = t), ni);
    }
  }
  function Ca(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function'
        ? ((ka = n), ni)
        : n;
    }
  }
  var ka = null;
  function _h() {
    if (ka === null) throw Error(o(459));
    var e = ka;
    return ((ka = null), e);
  }
  function Fo(e) {
    if (e === ni || e === su) throw Error(o(483));
  }
  var ai = null,
    Yn = 0;
  function ri(e) {
    var t = Yn;
    return ((Yn += 1), ai === null && (ai = []), Qc(ai, e, t));
  }
  function Aa(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function gn(e, t) {
    throw t.$$typeof === z
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
  function Sh(e) {
    function t(B, q) {
      if (e) {
        var k = B.deletions;
        k === null ? ((B.deletions = [q]), (B.flags |= 16)) : k.push(q);
      }
    }
    function n(B, q) {
      if (!e) return null;
      for (; q !== null; ) (t(B, q), (q = q.sibling));
      return null;
    }
    function l(B) {
      for (var q = new Map(); B !== null; )
        (B.key !== null ? q.set(B.key, B) : q.set(B.index, B), (B = B.sibling));
      return q;
    }
    function f(B, q) {
      return ((B = la(B, q)), (B.index = 0), (B.sibling = null), B);
    }
    function h(B, q, k) {
      return (
        (B.index = k),
        e
          ? ((k = B.alternate),
            k !== null
              ? ((k = k.index), k < q ? ((B.flags |= 67108866), q) : k)
              : ((B.flags |= 67108866), q))
          : ((B.flags |= 1048576), q)
      );
    }
    function m(B) {
      return (e && B.alternate === null && (B.flags |= 67108866), B);
    }
    function C(B, q, k, ne) {
      return q === null || q.tag !== 6
        ? ((q = Zl(k, B.mode, ne)), (q.return = B), q)
        : ((q = f(q, k)), (q.return = B), q);
    }
    function O(B, q, k, ne) {
      var Ce = k.type;
      return Ce === N
        ? ee(B, q, k.props.children, ne, k.key)
        : q !== null &&
            (q.elementType === Ce ||
              (typeof Ce == 'object' &&
                Ce !== null &&
                Ce.$$typeof === ce &&
                Ca(Ce) === q.type))
          ? ((q = f(q, k.props)), Aa(q, k), (q.return = B), q)
          : ((q = Gc(k.type, k.key, k.props, null, B.mode, ne)),
            Aa(q, k),
            (q.return = B),
            q);
    }
    function G(B, q, k, ne) {
      return q === null ||
        q.tag !== 4 ||
        q.stateNode.containerInfo !== k.containerInfo ||
        q.stateNode.implementation !== k.implementation
        ? ((q = uu(k, B.mode, ne)), (q.return = B), q)
        : ((q = f(q, k.children || [])), (q.return = B), q);
    }
    function ee(B, q, k, ne, Ce) {
      return q === null || q.tag !== 7
        ? ((q = yl(k, B.mode, ne, Ce)), (q.return = B), q)
        : ((q = f(q, k)), (q.return = B), q);
    }
    function ae(B, q, k) {
      if (
        (typeof q == 'string' && q !== '') ||
        typeof q == 'number' ||
        typeof q == 'bigint'
      )
        return ((q = Zl('' + q, B.mode, k)), (q.return = B), q);
      if (typeof q == 'object' && q !== null) {
        switch (q.$$typeof) {
          case U:
            return (
              (k = Gc(q.type, q.key, q.props, null, B.mode, k)),
              Aa(k, q),
              (k.return = B),
              k
            );
          case K:
            return ((q = uu(q, B.mode, k)), (q.return = B), q);
          case ce:
            return ((q = Ca(q)), ae(B, q, k));
        }
        if (tt(q) || Le(q))
          return ((q = yl(q, B.mode, k, null)), (q.return = B), q);
        if (typeof q.then == 'function') return ae(B, ri(q), k);
        if (q.$$typeof === F) return ae(B, oa(B, q), k);
        gn(B, q);
      }
      return null;
    }
    function X(B, q, k, ne) {
      var Ce = q !== null ? q.key : null;
      if (
        (typeof k == 'string' && k !== '') ||
        typeof k == 'number' ||
        typeof k == 'bigint'
      )
        return Ce !== null ? null : C(B, q, '' + k, ne);
      if (typeof k == 'object' && k !== null) {
        switch (k.$$typeof) {
          case U:
            return k.key === Ce ? O(B, q, k, ne) : null;
          case K:
            return k.key === Ce ? G(B, q, k, ne) : null;
          case ce:
            return ((k = Ca(k)), X(B, q, k, ne));
        }
        if (tt(k) || Le(k)) return Ce !== null ? null : ee(B, q, k, ne, null);
        if (typeof k.then == 'function') return X(B, q, ri(k), ne);
        if (k.$$typeof === F) return X(B, q, oa(B, k), ne);
        gn(B, k);
      }
      return null;
    }
    function Z(B, q, k, ne, Ce) {
      if (
        (typeof ne == 'string' && ne !== '') ||
        typeof ne == 'number' ||
        typeof ne == 'bigint'
      )
        return ((B = B.get(k) || null), C(q, B, '' + ne, Ce));
      if (typeof ne == 'object' && ne !== null) {
        switch (ne.$$typeof) {
          case U:
            return (
              (B = B.get(ne.key === null ? k : ne.key) || null),
              O(q, B, ne, Ce)
            );
          case K:
            return (
              (B = B.get(ne.key === null ? k : ne.key) || null),
              G(q, B, ne, Ce)
            );
          case ce:
            return ((ne = Ca(ne)), Z(B, q, k, ne, Ce));
        }
        if (tt(ne) || Le(ne))
          return ((B = B.get(k) || null), ee(q, B, ne, Ce, null));
        if (typeof ne.then == 'function') return Z(B, q, k, ri(ne), Ce);
        if (ne.$$typeof === F) return Z(B, q, k, oa(q, ne), Ce);
        gn(q, ne);
      }
      return null;
    }
    function pe(B, q, k, ne) {
      for (
        var Ce = null, nt = null, be = q, Ge = (q = 0), Ie = null;
        be !== null && Ge < k.length;
        Ge++
      ) {
        be.index > Ge ? ((Ie = be), (be = null)) : (Ie = be.sibling);
        var at = X(B, be, k[Ge], ne);
        if (at === null) {
          be === null && (be = Ie);
          break;
        }
        (e && be && at.alternate === null && t(B, be),
          (q = h(at, q, Ge)),
          nt === null ? (Ce = at) : (nt.sibling = at),
          (nt = at),
          (be = Ie));
      }
      if (Ge === k.length) return (n(B, be), Je && $n(B, Ge), Ce);
      if (be === null) {
        for (; Ge < k.length; Ge++)
          ((be = ae(B, k[Ge], ne)),
            be !== null &&
              ((q = h(be, q, Ge)),
              nt === null ? (Ce = be) : (nt.sibling = be),
              (nt = be)));
        return (Je && $n(B, Ge), Ce);
      }
      for (be = l(be); Ge < k.length; Ge++)
        ((Ie = Z(be, B, Ge, k[Ge], ne)),
          Ie !== null &&
            (e &&
              Ie.alternate !== null &&
              be.delete(Ie.key === null ? Ge : Ie.key),
            (q = h(Ie, q, Ge)),
            nt === null ? (Ce = Ie) : (nt.sibling = Ie),
            (nt = Ie)));
      return (
        e &&
          be.forEach(function (Wr) {
            return t(B, Wr);
          }),
        Je && $n(B, Ge),
        Ce
      );
    }
    function Te(B, q, k, ne) {
      if (k == null) throw Error(o(151));
      for (
        var Ce = null,
          nt = null,
          be = q,
          Ge = (q = 0),
          Ie = null,
          at = k.next();
        be !== null && !at.done;
        Ge++, at = k.next()
      ) {
        be.index > Ge ? ((Ie = be), (be = null)) : (Ie = be.sibling);
        var Wr = X(B, be, at.value, ne);
        if (Wr === null) {
          be === null && (be = Ie);
          break;
        }
        (e && be && Wr.alternate === null && t(B, be),
          (q = h(Wr, q, Ge)),
          nt === null ? (Ce = Wr) : (nt.sibling = Wr),
          (nt = Wr),
          (be = Ie));
      }
      if (at.done) return (n(B, be), Je && $n(B, Ge), Ce);
      if (be === null) {
        for (; !at.done; Ge++, at = k.next())
          ((at = ae(B, at.value, ne)),
            at !== null &&
              ((q = h(at, q, Ge)),
              nt === null ? (Ce = at) : (nt.sibling = at),
              (nt = at)));
        return (Je && $n(B, Ge), Ce);
      }
      for (be = l(be); !at.done; Ge++, at = k.next())
        ((at = Z(be, B, Ge, at.value, ne)),
          at !== null &&
            (e &&
              at.alternate !== null &&
              be.delete(at.key === null ? Ge : at.key),
            (q = h(at, q, Ge)),
            nt === null ? (Ce = at) : (nt.sibling = at),
            (nt = at)));
      return (
        e &&
          be.forEach(function (Dg) {
            return t(B, Dg);
          }),
        Je && $n(B, Ge),
        Ce
      );
    }
    function yt(B, q, k, ne) {
      if (
        (typeof k == 'object' &&
          k !== null &&
          k.type === N &&
          k.key === null &&
          (k = k.props.children),
        typeof k == 'object' && k !== null)
      ) {
        switch (k.$$typeof) {
          case U:
            e: {
              for (var Ce = k.key; q !== null; ) {
                if (q.key === Ce) {
                  if (((Ce = k.type), Ce === N)) {
                    if (q.tag === 7) {
                      (n(B, q.sibling),
                        (ne = f(q, k.props.children)),
                        (ne.return = B),
                        (B = ne));
                      break e;
                    }
                  } else if (
                    q.elementType === Ce ||
                    (typeof Ce == 'object' &&
                      Ce !== null &&
                      Ce.$$typeof === ce &&
                      Ca(Ce) === q.type)
                  ) {
                    (n(B, q.sibling),
                      (ne = f(q, k.props)),
                      Aa(ne, k),
                      (ne.return = B),
                      (B = ne));
                    break e;
                  }
                  n(B, q);
                  break;
                } else t(B, q);
                q = q.sibling;
              }
              k.type === N
                ? ((ne = yl(k.props.children, B.mode, ne, k.key)),
                  (ne.return = B),
                  (B = ne))
                : ((ne = Gc(k.type, k.key, k.props, null, B.mode, ne)),
                  Aa(ne, k),
                  (ne.return = B),
                  (B = ne));
            }
            return m(B);
          case K:
            e: {
              for (Ce = k.key; q !== null; ) {
                if (q.key === Ce)
                  if (
                    q.tag === 4 &&
                    q.stateNode.containerInfo === k.containerInfo &&
                    q.stateNode.implementation === k.implementation
                  ) {
                    (n(B, q.sibling),
                      (ne = f(q, k.children || [])),
                      (ne.return = B),
                      (B = ne));
                    break e;
                  } else {
                    n(B, q);
                    break;
                  }
                else t(B, q);
                q = q.sibling;
              }
              ((ne = uu(k, B.mode, ne)), (ne.return = B), (B = ne));
            }
            return m(B);
          case ce:
            return ((k = Ca(k)), yt(B, q, k, ne));
        }
        if (tt(k)) return pe(B, q, k, ne);
        if (Le(k)) {
          if (((Ce = Le(k)), typeof Ce != 'function')) throw Error(o(150));
          return ((k = Ce.call(k)), Te(B, q, k, ne));
        }
        if (typeof k.then == 'function') return yt(B, q, ri(k), ne);
        if (k.$$typeof === F) return yt(B, q, oa(B, k), ne);
        gn(B, k);
      }
      return (typeof k == 'string' && k !== '') ||
        typeof k == 'number' ||
        typeof k == 'bigint'
        ? ((k = '' + k),
          q !== null && q.tag === 6
            ? (n(B, q.sibling), (ne = f(q, k)), (ne.return = B), (B = ne))
            : (n(B, q), (ne = Zl(k, B.mode, ne)), (ne.return = B), (B = ne)),
          m(B))
        : n(B, q);
    }
    return function (B, q, k, ne) {
      try {
        Yn = 0;
        var Ce = yt(B, q, k, ne);
        return ((ai = null), Ce);
      } catch (be) {
        if (be === ni || be === su) throw be;
        var nt = en(29, be, null, B.mode);
        return ((nt.lanes = ne), (nt.return = B), nt);
      } finally {
      }
    };
  }
  var jr = Sh(!0),
    $o = Sh(!1),
    ha = !1;
  function Na(e) {
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
  function Dr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ra(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (lt & 2) !== 0)) {
      var f = l.pending;
      return (
        f === null ? (t.next = t) : ((t.next = f.next), (f.next = t)),
        (l.pending = t),
        (t = lu(e)),
        Ho(e, null, n),
        t
      );
    }
    return (vl(e, l, t, n), lu(e));
  }
  function hu(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), D0(e, n));
    }
  }
  function Vc(e, t) {
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
  var Xt = !1;
  function xl() {
    if (Xt) {
      var e = ti;
      if (e !== null) throw e;
    }
  }
  function li(e, t, n, l) {
    Xt = !1;
    var f = e.updateQueue;
    ha = !1;
    var h = f.firstBaseUpdate,
      m = f.lastBaseUpdate,
      C = f.shared.pending;
    if (C !== null) {
      f.shared.pending = null;
      var O = C,
        G = O.next;
      ((O.next = null), m === null ? (h = G) : (m.next = G), (m = O));
      var ee = e.alternate;
      ee !== null &&
        ((ee = ee.updateQueue),
        (C = ee.lastBaseUpdate),
        C !== m &&
          (C === null ? (ee.firstBaseUpdate = G) : (C.next = G),
          (ee.lastBaseUpdate = O)));
    }
    if (h !== null) {
      var ae = f.baseState;
      ((m = 0), (ee = G = O = null), (C = h));
      do {
        var X = C.lane & -536870913,
          Z = X !== C.lane;
        if (Z ? (Ve & X) === X : (l & X) === X) {
          (X !== 0 && X === ei && (Xt = !0),
            ee !== null &&
              (ee = ee.next =
                {
                  lane: 0,
                  tag: C.tag,
                  payload: C.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var pe = e,
              Te = C;
            X = t;
            var yt = n;
            switch (Te.tag) {
              case 1:
                if (((pe = Te.payload), typeof pe == 'function')) {
                  ae = pe.call(yt, ae, X);
                  break e;
                }
                ae = pe;
                break e;
              case 3:
                pe.flags = (pe.flags & -65537) | 128;
              case 0:
                if (
                  ((pe = Te.payload),
                  (X = typeof pe == 'function' ? pe.call(yt, ae, X) : pe),
                  X == null)
                )
                  break e;
                ae = w({}, ae, X);
                break e;
              case 2:
                ha = !0;
            }
          }
          ((X = C.callback),
            X !== null &&
              ((e.flags |= 64),
              Z && (e.flags |= 8192),
              (Z = f.callbacks),
              Z === null ? (f.callbacks = [X]) : Z.push(X)));
        } else
          ((Z = {
            lane: X,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null,
          }),
            ee === null ? ((G = ee = Z), (O = ae)) : (ee = ee.next = Z),
            (m |= X));
        if (((C = C.next), C === null)) {
          if (((C = f.shared.pending), C === null)) break;
          ((Z = C),
            (C = Z.next),
            (Z.next = null),
            (f.lastBaseUpdate = Z),
            (f.shared.pending = null));
        }
      } while (!0);
      (ee === null && (O = ae),
        (f.baseState = O),
        (f.firstBaseUpdate = G),
        (f.lastBaseUpdate = ee),
        h === null && (f.shared.lanes = 0),
        (Gr |= m),
        (e.lanes = m),
        (e.memoizedState = ae));
    }
  }
  function wa(e, t) {
    if (typeof e != 'function') throw Error(o(191, e));
    e.call(t);
  }
  function Ic(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) wa(n[e], t);
  }
  var ur = D(null),
    Ga = D(0);
  function Yo(e, t) {
    ((e = ja), fe(Ga, e), fe(ur, t), (ja = e | t.baseLanes));
  }
  function nn() {
    (fe(Ga, ja), fe(ur, ur.current));
  }
  function du() {
    ((ja = Ga.current), Y(ur), Y(Ga));
  }
  var Xn = D(null),
    da = null;
  function qr(e) {
    var t = e.alternate;
    (fe(Lt, Lt.current & 1),
      fe(Xn, e),
      da === null &&
        (t === null || ur.current !== null || t.memoizedState !== null) &&
        (da = e));
  }
  function gu(e) {
    (fe(Lt, Lt.current), fe(Xn, e), da === null && (da = e));
  }
  function xh(e) {
    e.tag === 22
      ? (fe(Lt, Lt.current), fe(Xn, e), da === null && (da = e))
      : ga();
  }
  function ga() {
    (fe(Lt, Lt.current), fe(Xn, Xn.current));
  }
  function Cn(e) {
    (Y(Xn), da === e && (da = null), Y(Lt));
  }
  var Lt = D(0);
  function Jc(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Lf(n) || Ai(n)))
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
    Ue = null,
    gt = null,
    jt = null,
    vu = !1,
    ii = !1,
    Cl = !1,
    Wc = 0,
    ui = 0,
    Lr = null,
    Vd = 0;
  function Rt() {
    throw Error(o(321));
  }
  function Pc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Tt(e[n], t[n])) return !1;
    return !0;
  }
  function ef(e, t, n, l, f, h) {
    return (
      (Kn = h),
      (Ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (W.H = e === null || e.memoizedState === null ? Dh : of),
      (Cl = !1),
      (h = n(l, f)),
      (Cl = !1),
      ii && (h = yu(t, n, l, f)),
      Xo(e),
      h
    );
  }
  function Xo(e) {
    W.H = Hr;
    var t = gt !== null && gt.next !== null;
    if (((Kn = 0), (jt = gt = Ue = null), (vu = !1), (ui = 0), (Lr = null), t))
      throw Error(o(300));
    e === null ||
      Et ||
      ((e = e.dependencies), e !== null && $c(e) && (Et = !0));
  }
  function yu(e, t, n, l) {
    Ue = e;
    var f = 0;
    do {
      if ((ii && (Lr = null), (ui = 0), (ii = !1), 25 <= f))
        throw Error(o(301));
      if (((f += 1), (jt = gt = null), e.updateQueue != null)) {
        var h = e.updateQueue;
        ((h.lastEffect = null),
          (h.events = null),
          (h.stores = null),
          h.memoCache != null && (h.memoCache.index = 0));
      }
      ((W.H = Au), (h = t(n, l)));
    } while (ii);
    return h;
  }
  function Id() {
    var e = W.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? fi(t) : t),
      (e = e.useState()[0]),
      (gt !== null ? gt.memoizedState : null) !== e && (Ue.flags |= 1024),
      t
    );
  }
  function tf() {
    var e = Wc !== 0;
    return ((Wc = 0), e);
  }
  function nf(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Ko(e) {
    if (vu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      vu = !1;
    }
    ((Kn = 0), (jt = gt = Ue = null), (ii = !1), (ui = Wc = 0), (Lr = null));
  }
  function cn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (jt === null ? (Ue.memoizedState = jt = e) : (jt = jt.next = e), jt);
  }
  function Bt() {
    if (gt === null) {
      var e = Ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = gt.next;
    var t = jt === null ? Ue.memoizedState : jt.next;
    if (t !== null) ((jt = t), (gt = e));
    else {
      if (e === null)
        throw Ue.alternate === null ? Error(o(467)) : Error(o(310));
      ((gt = e),
        (e = {
          memoizedState: gt.memoizedState,
          baseState: gt.baseState,
          baseQueue: gt.baseQueue,
          queue: gt.queue,
          next: null,
        }),
        jt === null ? (Ue.memoizedState = jt = e) : (jt = jt.next = e));
    }
    return jt;
  }
  function ci() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function fi(e) {
    var t = ui;
    return (
      (ui += 1),
      Lr === null && (Lr = []),
      (e = Qc(Lr, e, t)),
      (t = Ue),
      (jt === null ? t.memoizedState : jt.next) === null &&
        ((t = t.alternate),
        (W.H = t === null || t.memoizedState === null ? Dh : of)),
      e
    );
  }
  function oi(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return fi(e);
      if (e.$$typeof === F) return tn(e);
    }
    throw Error(o(438, String(e)));
  }
  function Qo(e) {
    var t = null,
      n = Ue.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = Ue.alternate;
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
      n === null && ((n = ci()), (Ue.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = Re;
    return (t.index++, n);
  }
  function Ta(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function ke(e) {
    var t = Bt();
    return Zo(t, gt, e);
  }
  function Zo(e, t, n) {
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
      var C = (m = null),
        O = null,
        G = t,
        ee = !1;
      do {
        var ae = G.lane & -536870913;
        if (ae !== G.lane ? (Ve & ae) === ae : (Kn & ae) === ae) {
          var X = G.revertLane;
          if (X === 0)
            (O !== null &&
              (O = O.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: G.action,
                  hasEagerState: G.hasEagerState,
                  eagerState: G.eagerState,
                  next: null,
                }),
              ae === ei && (ee = !0));
          else if ((Kn & X) === X) {
            ((G = G.next), X === ei && (ee = !0));
            continue;
          } else
            ((ae = {
              lane: 0,
              revertLane: G.revertLane,
              gesture: null,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null,
            }),
              O === null ? ((C = O = ae), (m = h)) : (O = O.next = ae),
              (Ue.lanes |= X),
              (Gr |= X));
          ((ae = G.action),
            Cl && n(h, ae),
            (h = G.hasEagerState ? G.eagerState : n(h, ae)));
        } else
          ((X = {
            lane: ae,
            revertLane: G.revertLane,
            gesture: G.gesture,
            action: G.action,
            hasEagerState: G.hasEagerState,
            eagerState: G.eagerState,
            next: null,
          }),
            O === null ? ((C = O = X), (m = h)) : (O = O.next = X),
            (Ue.lanes |= ae),
            (Gr |= ae));
        G = G.next;
      } while (G !== null && G !== t);
      if (
        (O === null ? (m = h) : (O.next = C),
        !Tt(h, e.memoizedState) && ((Et = !0), ee && ((n = ti), n !== null)))
      )
        throw n;
      ((e.memoizedState = h),
        (e.baseState = m),
        (e.baseQueue = O),
        (l.lastRenderedState = h));
    }
    return (f === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Vo(e) {
    var t = Bt(),
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
      (Tt(h, t.memoizedState) || (Et = !0),
        (t.memoizedState = h),
        t.baseQueue === null && (t.baseState = h),
        (n.lastRenderedState = h));
    }
    return [h, l];
  }
  function si(e, t, n) {
    var l = Ue,
      f = Bt(),
      h = Je;
    if (h) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var m = !Tt((gt || f).memoizedState, n);
    if (
      (m && ((f.memoizedState = n), (Et = !0)),
      (f = f.queue),
      _u(Ah.bind(null, l, f, e), [e]),
      f.getSnapshot !== t || m || (jt !== null && jt.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        Zn(9, { destroy: void 0 }, Ch.bind(null, l, f, n, t), null),
        bt === null)
      )
        throw Error(o(349));
      h || (Kn & 127) !== 0 || Io(l, t, n);
    }
    return n;
  }
  function Io(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ue.updateQueue),
      t === null
        ? ((t = ci()), (Ue.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Ch(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), Qn(t) && Rh(e));
  }
  function Ah(e, t, n) {
    return n(function () {
      Qn(t) && Rh(e);
    });
  }
  function Qn(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Tt(e, n);
    } catch {
      return !0;
    }
  }
  function Rh(e) {
    var t = Ha(e, 2);
    t !== null && On(t, e, 2);
  }
  function hi(e) {
    var t = cn();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Cl)) {
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
        lastRenderedReducer: Ta,
        lastRenderedState: e,
      }),
      t
    );
  }
  function af(e, t, n, l) {
    return ((e.baseState = n), Zo(e, gt, typeof l == 'function' ? l : Ta));
  }
  function wh(e, t, n, l, f) {
    if (xu(e)) throw Error(o(485));
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
      (W.T !== null ? n(!0) : (h.isTransition = !1),
        l(h),
        (n = t.pending),
        n === null
          ? ((h.next = t.pending = h), Jo(t, h))
          : ((h.next = n.next), (t.pending = n.next = h)));
    }
  }
  function Jo(e, t) {
    var n = t.action,
      l = t.payload,
      f = e.state;
    if (t.isTransition) {
      var h = W.T,
        m = {};
      W.T = m;
      try {
        var C = n(f, l),
          O = W.S;
        (O !== null && O(m, C), An(e, t, C));
      } catch (G) {
        mu(e, t, G);
      } finally {
        (h !== null && m.types !== null && (h.types = m.types), (W.T = h));
      }
    } else
      try {
        ((h = n(f, l)), An(e, t, h));
      } catch (G) {
        mu(e, t, G);
      }
  }
  function An(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            cr(e, t, l);
          },
          function (l) {
            return mu(e, t, l);
          },
        )
      : cr(e, t, n);
  }
  function cr(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Wo(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Jo(e, n))));
  }
  function mu(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = n), Wo(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Wo(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function pu(e, t) {
    return t;
  }
  function Po(e, t) {
    if (Je) {
      var n = bt.formState;
      if (n !== null) {
        e: {
          var l = Ue;
          if (Je) {
            if (ut) {
              t: {
                for (var f = ut, h = fa; f.nodeType !== 8; ) {
                  if (!h) {
                    f = null;
                    break t;
                  }
                  if (((f = ya(f.nextSibling)), f === null)) {
                    f = null;
                    break t;
                  }
                }
                ((h = f.data), (f = h === 'F!' || h === 'F' ? f : null));
              }
              if (f) {
                ((ut = ya(f.nextSibling)), (l = f.data === 'F!'));
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
      (n = cn()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pu,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = os.bind(null, Ue, l)),
      (l.dispatch = n),
      (l = hi(!1)),
      (h = gi.bind(null, Ue, !1, l.queue)),
      (l = cn()),
      (f = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = f),
      (n = wh.bind(null, Ue, f, h, n)),
      (f.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function rf(e) {
    var t = Bt();
    return es(t, gt, e);
  }
  function es(e, t, n) {
    if (
      ((t = Zo(e, t, pu)[0]),
      (e = ke(Ta)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = fi(t);
      } catch (m) {
        throw m === ni ? su : m;
      }
    else l = t;
    t = Bt();
    var f = t.queue,
      h = f.dispatch;
    return (
      n !== t.memoizedState &&
        ((Ue.flags |= 2048),
        Zn(9, { destroy: void 0 }, ts.bind(null, f, n), null)),
      [l, h, e]
    );
  }
  function ts(e, t) {
    e.action = t;
  }
  function lf(e) {
    var t = Bt(),
      n = gt;
    if (n !== null) return es(t, n, e);
    (Bt(), (t = t.memoizedState), (n = Bt()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function Zn(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = Ue.updateQueue),
      t === null && ((t = ci()), (Ue.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Th() {
    return Bt().memoizedState;
  }
  function Ea(e, t, n, l) {
    var f = cn();
    ((Ue.flags |= e),
      (f.memoizedState = Zn(
        1 | t,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l,
      )));
  }
  function bu(e, t, n, l) {
    var f = Bt();
    l = l === void 0 ? null : l;
    var h = f.memoizedState.inst;
    gt !== null && l !== null && Pc(l, gt.memoizedState.deps)
      ? (f.memoizedState = Zn(t, h, n, l))
      : ((Ue.flags |= e), (f.memoizedState = Zn(1 | t, h, n, l)));
  }
  function ns(e, t) {
    Ea(8390656, 8, e, t);
  }
  function _u(e, t) {
    bu(2048, 8, e, t);
  }
  function Jd(e) {
    Ue.flags |= 4;
    var t = Ue.updateQueue;
    if (t === null) ((t = ci()), (Ue.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Eh(e) {
    var t = Bt().memoizedState;
    return (
      Jd({ ref: t, nextImpl: e }),
      function () {
        if ((lt & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Oh(e, t) {
    return bu(4, 2, e, t);
  }
  function as(e, t) {
    return bu(4, 4, e, t);
  }
  function rs(e, t) {
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
  function Mh(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), bu(4, 4, rs.bind(null, t, e), n));
  }
  function uf() {}
  function ls(e, t) {
    var n = Bt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Pc(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function vn(e, t) {
    var n = Bt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Pc(t, l[1])) return l[0];
    if (((l = e()), Cl)) {
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
    return n === void 0 || ((Kn & 1073741824) !== 0 && (Ve & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = a1()), (Ue.lanes |= e), (Gr |= e), n);
  }
  function zh(e, t, n, l) {
    return Tt(n, t)
      ? n
      : ur.current !== null
        ? ((e = va(e, n, l)), Tt(e, t) || (Et = !0), e)
        : (Kn & 42) === 0 || ((Kn & 1073741824) !== 0 && (Ve & 261930) === 0)
          ? ((Et = !0), (e.memoizedState = n))
          : ((e = a1()), (Ue.lanes |= e), (Gr |= e), t);
  }
  function jh(e, t, n, l, f) {
    var h = he.p;
    he.p = h !== 0 && 8 > h ? h : 8;
    var m = W.T,
      C = {};
    ((W.T = C), gi(e, !1, t, n));
    try {
      var O = f(),
        G = W.S;
      if (
        (G !== null && G(C, O),
        O !== null && typeof O == 'object' && typeof O.then == 'function')
      ) {
        var ee = Zd(O, l);
        di(e, t, ee, Jn(e));
      } else di(e, t, l, Jn(e));
    } catch (ae) {
      di(e, t, { then: function () {}, status: 'rejected', reason: ae }, Jn());
    } finally {
      ((he.p = h),
        m !== null && C.types !== null && (m.types = C.types),
        (W.T = m));
    }
  }
  function cf() {}
  function Br(e, t, n, l) {
    if (e.tag !== 5) throw Error(o(476));
    var f = is(e).queue;
    jh(
      e,
      f,
      t,
      _e,
      n === null
        ? cf
        : function () {
            return (us(e), n(l));
          },
    );
  }
  function is(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: _e,
      baseState: _e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ta,
        lastRenderedState: _e,
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
          lastRenderedReducer: Ta,
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
  function us(e) {
    var t = is(e);
    (t.next === null && (t = e.alternate.memoizedState),
      di(e, t.next.queue, {}, Jn()));
  }
  function cs() {
    return tn(Mi);
  }
  function fs() {
    return Bt().memoizedState;
  }
  function Al() {
    return Bt().memoizedState;
  }
  function Su(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Jn();
          e = Dr(n);
          var l = Ra(t, e, n);
          (l !== null && (On(l, t, n), hu(l, t, n)),
            (t = { cache: xa() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Wd(e, t, n) {
    var l = Jn();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      xu(e)
        ? Cu(t, n)
        : ((n = Nc(e, t, n, l)), n !== null && (On(n, e, l), ff(n, t, l))));
  }
  function os(e, t, n) {
    var l = Jn();
    di(e, t, n, l);
  }
  function di(e, t, n, l) {
    var f = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (xu(e)) Cu(t, f);
    else {
      var h = e.alternate;
      if (
        e.lanes === 0 &&
        (h === null || h.lanes === 0) &&
        ((h = t.lastRenderedReducer), h !== null)
      )
        try {
          var m = t.lastRenderedState,
            C = h(m, n);
          if (((f.hasEagerState = !0), (f.eagerState = C), Tt(C, m)))
            return (vl(e, t, f, 0), bt === null && Sa(), !1);
        } catch {
        } finally {
        }
      if (((n = Nc(e, t, f, l)), n !== null))
        return (On(n, e, l), ff(n, t, l), !0);
    }
    return !1;
  }
  function gi(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Wn(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      xu(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = Nc(e, n, l, 2)), t !== null && On(t, e, 2));
  }
  function xu(e) {
    var t = e.alternate;
    return e === Ue || (t !== null && t === Ue);
  }
  function Cu(e, t) {
    ii = vu = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function ff(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), D0(e, n));
    }
  }
  var Hr = {
    readContext: tn,
    use: oi,
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
  Hr.useEffectEvent = Rt;
  var Dh = {
      readContext: tn,
      use: oi,
      useCallback: function (e, t) {
        return ((cn().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: tn,
      useEffect: ns,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          Ea(4194308, 4, rs.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return Ea(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Ea(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = cn();
        t = t === void 0 ? null : t;
        var l = e();
        if (Cl) {
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
        var l = cn();
        if (n !== void 0) {
          var f = n(t);
          if (Cl) {
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
          (e = e.dispatch = Wd.bind(null, Ue, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = cn();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = hi(e);
        var t = e.queue,
          n = os.bind(null, Ue, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: uf,
      useDeferredValue: function (e, t) {
        var n = cn();
        return va(n, e, t);
      },
      useTransition: function () {
        var e = hi(!1);
        return (
          (e = jh.bind(null, Ue, e.queue, !0, !1)),
          (cn().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = Ue,
          f = cn();
        if (Je) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), bt === null)) throw Error(o(349));
          (Ve & 127) !== 0 || Io(l, t, n);
        }
        f.memoizedState = n;
        var h = { value: n, getSnapshot: t };
        return (
          (f.queue = h),
          ns(Ah.bind(null, l, h, e), [e]),
          (l.flags |= 2048),
          Zn(9, { destroy: void 0 }, Ch.bind(null, l, h, n, t), null),
          n
        );
      },
      useId: function () {
        var e = cn(),
          t = bt.identifierPrefix;
        if (Je) {
          var n = ca,
            l = Ua;
          ((n = (l & ~(1 << (32 - dn(l) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = Wc++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = Vd++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: cs,
      useFormState: Po,
      useActionState: Po,
      useOptimistic: function (e) {
        var t = cn();
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
          (t = gi.bind(null, Ue, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Qo,
      useCacheRefresh: function () {
        return (cn().memoizedState = Su.bind(null, Ue));
      },
      useEffectEvent: function (e) {
        var t = cn(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((lt & 2) !== 0) throw Error(o(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    of = {
      readContext: tn,
      use: oi,
      useCallback: ls,
      useContext: tn,
      useEffect: _u,
      useImperativeHandle: Mh,
      useInsertionEffect: Oh,
      useLayoutEffect: as,
      useMemo: vn,
      useReducer: ke,
      useRef: Th,
      useState: function () {
        return ke(Ta);
      },
      useDebugValue: uf,
      useDeferredValue: function (e, t) {
        var n = Bt();
        return zh(n, gt.memoizedState, e, t);
      },
      useTransition: function () {
        var e = ke(Ta)[0],
          t = Bt().memoizedState;
        return [typeof e == 'boolean' ? e : fi(e), t];
      },
      useSyncExternalStore: si,
      useId: fs,
      useHostTransitionStatus: cs,
      useFormState: rf,
      useActionState: rf,
      useOptimistic: function (e, t) {
        var n = Bt();
        return af(n, gt, e, t);
      },
      useMemoCache: Qo,
      useCacheRefresh: Al,
    };
  of.useEffectEvent = Eh;
  var Au = {
    readContext: tn,
    use: oi,
    useCallback: ls,
    useContext: tn,
    useEffect: _u,
    useImperativeHandle: Mh,
    useInsertionEffect: Oh,
    useLayoutEffect: as,
    useMemo: vn,
    useReducer: Vo,
    useRef: Th,
    useState: function () {
      return Vo(Ta);
    },
    useDebugValue: uf,
    useDeferredValue: function (e, t) {
      var n = Bt();
      return gt === null ? va(n, e, t) : zh(n, gt.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Vo(Ta)[0],
        t = Bt().memoizedState;
      return [typeof e == 'boolean' ? e : fi(e), t];
    },
    useSyncExternalStore: si,
    useId: fs,
    useHostTransitionStatus: cs,
    useFormState: lf,
    useActionState: lf,
    useOptimistic: function (e, t) {
      var n = Bt();
      return gt !== null
        ? af(n, gt, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Qo,
    useCacheRefresh: Al,
  };
  Au.useEffectEvent = Eh;
  function sf(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : w({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ru = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = Jn(),
        f = Dr(l);
      ((f.payload = t),
        n != null && (f.callback = n),
        (t = Ra(e, f, l)),
        t !== null && (On(t, e, l), hu(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = Jn(),
        f = Dr(l);
      ((f.tag = 1),
        (f.payload = t),
        n != null && (f.callback = n),
        (t = Ra(e, f, l)),
        t !== null && (On(t, e, l), hu(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Jn(),
        l = Dr(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = Ra(e, l, n)),
        t !== null && (On(t, e, n), hu(t, e, n)));
    },
  };
  function qh(e, t, n, l, f, h, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, h, m)
        : t.prototype && t.prototype.isPureReactComponent
          ? !$l(n, l) || !$l(f, h)
          : !0
    );
  }
  function ss(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && Ru.enqueueReplaceState(t, t.state, null));
  }
  function yn(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = w({}, n));
      for (var f in e) n[f] === void 0 && (n[f] = e[f]);
    }
    return n;
  }
  function hs(e) {
    kc(e);
  }
  function ds(e) {
    console.error(e);
  }
  function Lh(e) {
    kc(e);
  }
  function wu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Bh(e, t, n) {
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
  function gs(e, t, n) {
    return (
      (n = Dr(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        wu(e, t);
      }),
      n
    );
  }
  function Fa(e) {
    return ((e = Dr(e)), (e.tag = 3), e);
  }
  function hf(e, t, n, l) {
    var f = n.type.getDerivedStateFromError;
    if (typeof f == 'function') {
      var h = l.value;
      ((e.payload = function () {
        return f(h);
      }),
        (e.callback = function () {
          Bh(t, n, l);
        }));
    }
    var m = n.stateNode;
    m !== null &&
      typeof m.componentDidCatch == 'function' &&
      (e.callback = function () {
        (Bh(t, n, l),
          typeof f != 'function' &&
            (Fr === null ? (Fr = new Set([this])) : Fr.add(this)));
        var C = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: C !== null ? C : '',
        });
      });
  }
  function vs(e, t, n, l, f) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == 'object' && typeof l.then == 'function')
    ) {
      if (
        ((t = n.alternate),
        t !== null && Pl(t, n, f, !0),
        (n = Xn.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              da === null ? wf() : n.alternate === null && Ot === 0 && (Ot = 3),
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
      return (Ys(e, l, f), wf(), !1);
    }
    if (Je)
      return (
        (t = Xn.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = f),
            l !== Uo && ((e = Error(o(422), { cause: l })), Mr(Fn(e, n))))
          : (l !== Uo && ((t = Error(o(423), { cause: l })), Mr(Fn(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (f &= -f),
            (e.lanes |= f),
            (l = Fn(l, n)),
            (f = gs(e.stateNode, l, f)),
            Vc(e, f),
            Ot !== 4 && (Ot = 2)),
        !1
      );
    var h = Error(o(520), { cause: l });
    if (
      ((h = Fn(h, n)),
      Nu === null ? (Nu = [h]) : Nu.push(h),
      Ot !== 4 && (Ot = 2),
      t === null)
    )
      return !0;
    ((l = Fn(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = f & -f),
            (n.lanes |= e),
            (e = gs(n.stateNode, l, e)),
            Vc(n, e),
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
                  (Fr === null || !Fr.has(h)))))
          )
            return (
              (n.flags |= 65536),
              (f &= -f),
              (n.lanes |= f),
              (f = Fa(f)),
              hf(f, e, n, l),
              Vc(n, f),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Tu = Error(o(461)),
    Et = !1;
  function Dt(e, t, n, l) {
    t.child = e === null ? $o(t, null, n, l) : jr(t, e.child, n, l);
  }
  function we(e, t, n, l, f) {
    n = n.render;
    var h = t.ref;
    if ('ref' in l) {
      var m = {};
      for (var C in l) C !== 'ref' && (m[C] = l[C]);
    } else m = l;
    return (
      bl(t),
      (l = ef(e, t, n, m, h, f)),
      (C = tf()),
      e !== null && !Et
        ? (nf(e, t, f), $a(e, t, f))
        : (Je && C && wr(t), (t.flags |= 1), Dt(e, t, l, f), t.child)
    );
  }
  function Eu(e, t, n, l, f) {
    if (e === null) {
      var h = n.type;
      return typeof h == 'function' &&
        !nr(h) &&
        h.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = h), df(e, t, h, l, f))
        : ((e = Gc(n.type, null, l, t, t.mode, f)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((h = e.child), !pf(e, f))) {
      var m = h.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : $l), n(m, l) && e.ref === t.ref)
      )
        return $a(e, t, f);
    }
    return (
      (t.flags |= 1),
      (e = la(h, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function df(e, t, n, l, f) {
    if (e !== null) {
      var h = e.memoizedProps;
      if ($l(h, l) && e.ref === t.ref)
        if (((Et = !1), (t.pendingProps = l = h), pf(e, f)))
          (e.flags & 131072) !== 0 && (Et = !0);
        else return ((t.lanes = e.lanes), $a(e, t, f));
    }
    return yf(e, t, n, l, f);
  }
  function Ur(e, t, n, l) {
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
        return gf(e, t, h, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Yc(t, h !== null ? h.cachePool : null),
          h !== null ? Yo(t, h) : nn(),
          xh(t));
      else
        return (
          (l = t.lanes = 536870912),
          gf(e, t, h !== null ? h.baseLanes | n : n, n, l)
        );
    } else
      h !== null
        ? (Yc(t, h.cachePool), Yo(t, h), ga(), (t.memoizedState = null))
        : (e !== null && Yc(t, null), nn(), ga());
    return (Dt(e, t, f, n), t.child);
  }
  function Ou(e, t) {
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
  function gf(e, t, n, l, f) {
    var h = Go();
    return (
      (h = h === null ? null : { parent: Nt._currentValue, pool: h }),
      (t.memoizedState = { baseLanes: n, cachePool: h }),
      e !== null && Yc(t, null),
      nn(),
      xh(t),
      e !== null && Pl(e, t, l, !0),
      (t.childLanes = f),
      null
    );
  }
  function Mu(e, t) {
    return (
      (t = mf({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function an(e, t, n) {
    return (
      jr(t, e.child, null, n),
      (e = Mu(t, t.pendingProps)),
      (e.flags |= 2),
      Cn(t),
      (t.memoizedState = null),
      e
    );
  }
  function Pd(e, t, n) {
    var l = t.pendingProps,
      f = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Je) {
        if (l.mode === 'hidden')
          return ((e = Mu(t, l)), (t.lanes = 536870912), Ou(null, e));
        if (
          (gu(t),
          (e = ut)
            ? ((e = w1(e, fa)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ar !== null ? { id: Ua, overflow: ca } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = iu(e)),
                (n.return = t),
                (t.child = n),
                (kt = t),
                (ut = null)))
            : (e = null),
          e === null)
        )
          throw Er(t);
        return ((t.lanes = 536870912), null);
      }
      return Mu(t, l);
    }
    var h = e.memoizedState;
    if (h !== null) {
      var m = h.dehydrated;
      if ((gu(t), f))
        if (t.flags & 256) ((t.flags &= -257), (t = an(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (Et || Pl(e, t, n, !1), (f = (n & e.childLanes) !== 0), Et || f)
      ) {
        if (
          ((l = bt),
          l !== null && ((m = hc(l, n)), m !== 0 && m !== h.retryLane))
        )
          throw ((h.retryLane = m), Ha(e, m), On(l, e, m), Tu);
        (wf(), (t = an(e, t, n)));
      } else
        ((e = h.treeContext),
          (ut = ya(m.nextSibling)),
          (kt = t),
          (Je = !0),
          (Tr = null),
          (fa = !1),
          e !== null && Jl(t, e),
          (t = Mu(t, l)),
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
  function vf(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function yf(e, t, n, l, f) {
    return (
      bl(t),
      (n = ef(e, t, n, l, void 0, f)),
      (l = tf()),
      e !== null && !Et
        ? (nf(e, t, f), $a(e, t, f))
        : (Je && l && wr(t), (t.flags |= 1), Dt(e, t, n, f), t.child)
    );
  }
  function Hh(e, t, n, l, f, h) {
    return (
      bl(t),
      (t.updateQueue = null),
      (n = yu(t, l, n, f)),
      Xo(e),
      (l = tf()),
      e !== null && !Et
        ? (nf(e, t, h), $a(e, t, h))
        : (Je && l && wr(t), (t.flags |= 1), Dt(e, t, n, h), t.child)
    );
  }
  function ys(e, t, n, l, f) {
    if ((bl(t), t.stateNode === null)) {
      var h = tr,
        m = n.contextType;
      (typeof m == 'object' && m !== null && (h = tn(m)),
        (h = new n(l, h)),
        (t.memoizedState =
          h.state !== null && h.state !== void 0 ? h.state : null),
        (h.updater = Ru),
        (t.stateNode = h),
        (h._reactInternals = t),
        (h = t.stateNode),
        (h.props = l),
        (h.state = t.memoizedState),
        (h.refs = {}),
        Na(t),
        (m = n.contextType),
        (h.context = typeof m == 'object' && m !== null ? tn(m) : tr),
        (h.state = t.memoizedState),
        (m = n.getDerivedStateFromProps),
        typeof m == 'function' && (sf(t, n, m, l), (h.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof h.getSnapshotBeforeUpdate == 'function' ||
          (typeof h.UNSAFE_componentWillMount != 'function' &&
            typeof h.componentWillMount != 'function') ||
          ((m = h.state),
          typeof h.componentWillMount == 'function' && h.componentWillMount(),
          typeof h.UNSAFE_componentWillMount == 'function' &&
            h.UNSAFE_componentWillMount(),
          m !== h.state && Ru.enqueueReplaceState(h, h.state, null),
          li(t, l, h, f),
          xl(),
          (h.state = t.memoizedState)),
        typeof h.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      h = t.stateNode;
      var C = t.memoizedProps,
        O = yn(n, C);
      h.props = O;
      var G = h.context,
        ee = n.contextType;
      ((m = tr), typeof ee == 'object' && ee !== null && (m = tn(ee)));
      var ae = n.getDerivedStateFromProps;
      ((ee =
        typeof ae == 'function' ||
        typeof h.getSnapshotBeforeUpdate == 'function'),
        (C = t.pendingProps !== C),
        ee ||
          (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof h.componentWillReceiveProps != 'function') ||
          ((C || G !== m) && ss(t, h, l, m)),
        (ha = !1));
      var X = t.memoizedState;
      ((h.state = X),
        li(t, l, h, f),
        xl(),
        (G = t.memoizedState),
        C || X !== G || ha
          ? (typeof ae == 'function' &&
              (sf(t, n, ae, l), (G = t.memoizedState)),
            (O = ha || qh(t, n, O, l, X, G, m))
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
                (t.memoizedState = G)),
            (h.props = l),
            (h.state = G),
            (h.context = m),
            (l = O))
          : (typeof h.componentDidMount == 'function' && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((h = t.stateNode),
        Zc(e, t),
        (m = t.memoizedProps),
        (ee = yn(n, m)),
        (h.props = ee),
        (ae = t.pendingProps),
        (X = h.context),
        (G = n.contextType),
        (O = tr),
        typeof G == 'object' && G !== null && (O = tn(G)),
        (C = n.getDerivedStateFromProps),
        (G =
          typeof C == 'function' ||
          typeof h.getSnapshotBeforeUpdate == 'function') ||
          (typeof h.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof h.componentWillReceiveProps != 'function') ||
          ((m !== ae || X !== O) && ss(t, h, l, O)),
        (ha = !1),
        (X = t.memoizedState),
        (h.state = X),
        li(t, l, h, f),
        xl());
      var Z = t.memoizedState;
      m !== ae ||
      X !== Z ||
      ha ||
      (e !== null && e.dependencies !== null && $c(e.dependencies))
        ? (typeof C == 'function' && (sf(t, n, C, l), (Z = t.memoizedState)),
          (ee =
            ha ||
            qh(t, n, ee, l, X, Z, O) ||
            (e !== null && e.dependencies !== null && $c(e.dependencies)))
            ? (G ||
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
                (m === e.memoizedProps && X === e.memoizedState) ||
                (t.flags |= 4),
              typeof h.getSnapshotBeforeUpdate != 'function' ||
                (m === e.memoizedProps && X === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = Z)),
          (h.props = l),
          (h.state = Z),
          (h.context = O),
          (l = ee))
        : (typeof h.componentDidUpdate != 'function' ||
            (m === e.memoizedProps && X === e.memoizedState) ||
            (t.flags |= 4),
          typeof h.getSnapshotBeforeUpdate != 'function' ||
            (m === e.memoizedProps && X === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (h = l),
      vf(e, t),
      (l = (t.flags & 128) !== 0),
      h || l
        ? ((h = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != 'function'
              ? null
              : h.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = jr(t, e.child, null, f)),
              (t.child = jr(t, null, n, f)))
            : Dt(e, t, n, f),
          (t.memoizedState = h.state),
          (e = t.child))
        : (e = $a(e, t, f)),
      e
    );
  }
  function Uh(e, t, n, l) {
    return (A(), (t.flags |= 256), Dt(e, t, n, l), t.child);
  }
  var ms = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ps(e) {
    return { baseLanes: e, cachePool: ph() };
  }
  function Oa(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= In), e);
  }
  function fn(e, t, n) {
    var l = t.pendingProps,
      f = !1,
      h = (t.flags & 128) !== 0,
      m;
    if (
      ((m = h) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (Lt.current & 2) !== 0),
      m && ((f = !0), (t.flags &= -129)),
      (m = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Je) {
        if (
          (f ? qr(t) : ga(),
          (e = ut)
            ? ((e = w1(e, fa)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: ar !== null ? { id: Ua, overflow: ca } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = iu(e)),
                (n.return = t),
                (t.child = n),
                (kt = t),
                (ut = null)))
            : (e = null),
          e === null)
        )
          throw Er(t);
        return (Ai(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var C = l.children;
      return (
        (l = l.fallback),
        f
          ? (ga(),
            (f = t.mode),
            (C = mf({ mode: 'hidden', children: C }, f)),
            (l = yl(l, f, n, null)),
            (C.return = t),
            (l.return = t),
            (C.sibling = l),
            (t.child = C),
            (l = t.child),
            (l.memoizedState = ps(n)),
            (l.childLanes = Oa(e, m, n)),
            (t.memoizedState = ms),
            Ou(null, l))
          : (qr(t), zu(t, C))
      );
    }
    var O = e.memoizedState;
    if (O !== null && ((C = O.dehydrated), C !== null)) {
      if (h)
        t.flags & 256
          ? (qr(t), (t.flags &= -257), (t = ju(e, t, n)))
          : t.memoizedState !== null
            ? (ga(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (ga(),
              (C = l.fallback),
              (f = t.mode),
              (l = mf({ mode: 'visible', children: l.children }, f)),
              (C = yl(C, f, n, null)),
              (C.flags |= 2),
              (l.return = t),
              (C.return = t),
              (l.sibling = C),
              (t.child = l),
              jr(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = ps(n)),
              (l.childLanes = Oa(e, m, n)),
              (t.memoizedState = ms),
              (t = Ou(null, l)));
      else if ((qr(t), Ai(C))) {
        if (((m = C.nextSibling && C.nextSibling.dataset), m)) var G = m.dgst;
        ((m = G),
          (l = Error(o(419))),
          (l.stack = ''),
          (l.digest = m),
          Mr({ value: l, source: null, stack: null }),
          (t = ju(e, t, n)));
      } else if (
        (Et || Pl(e, t, n, !1), (m = (n & e.childLanes) !== 0), Et || m)
      ) {
        if (
          ((m = bt),
          m !== null && ((l = hc(m, n)), l !== 0 && l !== O.retryLane))
        )
          throw ((O.retryLane = l), Ha(e, l), On(m, e, l), Tu);
        (Lf(C) || wf(), (t = ju(e, t, n)));
      } else
        Lf(C)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = O.treeContext),
            (ut = ya(C.nextSibling)),
            (kt = t),
            (Je = !0),
            (Tr = null),
            (fa = !1),
            e !== null && Jl(t, e),
            (t = zu(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return f
      ? (ga(),
        (C = l.fallback),
        (f = t.mode),
        (O = e.child),
        (G = O.sibling),
        (l = la(O, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = O.subtreeFlags & 65011712),
        G !== null ? (C = la(G, C)) : ((C = yl(C, f, n, null)), (C.flags |= 2)),
        (C.return = t),
        (l.return = t),
        (l.sibling = C),
        (t.child = l),
        Ou(null, l),
        (l = t.child),
        (C = e.child.memoizedState),
        C === null
          ? (C = ps(n))
          : ((f = C.cachePool),
            f !== null
              ? ((O = Nt._currentValue),
                (f = f.parent !== O ? { parent: O, pool: O } : f))
              : (f = ph()),
            (C = { baseLanes: C.baseLanes | n, cachePool: f })),
        (l.memoizedState = C),
        (l.childLanes = Oa(e, m, n)),
        (t.memoizedState = ms),
        Ou(e.child, l))
      : (qr(t),
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
  function zu(e, t) {
    return (
      (t = mf({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function mf(e, t) {
    return ((e = en(22, e, null, t)), (e.lanes = 0), e);
  }
  function ju(e, t, n) {
    return (
      jr(t, e.child, null, n),
      (e = zu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function kh(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), ir(e.return, t, n));
  }
  function bs(e, t, n, l, f, h) {
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
  function vi(e, t, n) {
    var l = t.pendingProps,
      f = l.revealOrder,
      h = l.tail;
    l = l.children;
    var m = Lt.current,
      C = (m & 2) !== 0;
    if (
      (C ? ((m = (m & 1) | 2), (t.flags |= 128)) : (m &= 1),
      fe(Lt, m),
      Dt(e, t, l, n),
      (l = Je ? Ut : 0),
      !C && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && kh(e, n, t);
        else if (e.tag === 19) kh(e, n, t);
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
            e !== null && Jc(e) === null && (f = n),
            (n = n.sibling));
        ((n = f),
          n === null
            ? ((f = t.child), (t.child = null))
            : ((f = n.sibling), (n.sibling = null)),
          bs(t, !1, f, n, h, l));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, f = t.child, t.child = null; f !== null; ) {
          if (((e = f.alternate), e !== null && Jc(e) === null)) {
            t.child = f;
            break;
          }
          ((e = f.sibling), (f.sibling = n), (n = f), (f = e));
        }
        bs(t, !0, n, null, h, l);
        break;
      case 'together':
        bs(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function $a(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Gr |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Pl(e, t, n, !1), (n & t.childLanes) === 0)) return null;
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
  function pf(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && $c(e)));
  }
  function eg(e, t, n) {
    switch (t.tag) {
      case 3:
        ($t(t, t.stateNode.containerInfo),
          zr(t, Nt, e.memoizedState.cache),
          A());
        break;
      case 27:
      case 5:
        Ui(t);
        break;
      case 4:
        $t(t, t.stateNode.containerInfo);
        break;
      case 10:
        zr(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), gu(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (qr(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? fn(e, t, n)
              : (qr(t), (e = $a(e, t, n)), e !== null ? e.sibling : null);
        qr(t);
        break;
      case 19:
        var f = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Pl(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          f)
        ) {
          if (l) return vi(e, t, n);
          t.flags |= 128;
        }
        if (
          ((f = t.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          fe(Lt, Lt.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Ur(e, t, n, t.pendingProps));
      case 24:
        zr(t, Nt, e.memoizedState.cache);
    }
    return $a(e, t, n);
  }
  function Nh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Et = !0;
      else {
        if (!pf(e, n) && (t.flags & 128) === 0) return ((Et = !1), eg(e, t, n));
        Et = (e.flags & 131072) !== 0;
      }
    else ((Et = !1), Je && (t.flags & 1048576) !== 0 && Fc(t, Ut, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = Ca(t.elementType)), (t.type = e), typeof e == 'function'))
            nr(e)
              ? ((l = yn(e, l)), (t.tag = 1), (t = ys(null, t, e, l, n)))
              : ((t.tag = 0), (t = yf(null, t, e, l, n)));
          else {
            if (e != null) {
              var f = e.$$typeof;
              if (f === I) {
                ((t.tag = 11), (t = we(null, t, e, l, n)));
                break e;
              } else if (f === V) {
                ((t.tag = 14), (t = Eu(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = et(e) || e), Error(o(306, t, '')));
          }
        }
        return t;
      case 0:
        return yf(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (f = yn(l, t.pendingProps)), ys(e, t, l, f, n));
      case 3:
        e: {
          if (($t(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          l = t.pendingProps;
          var h = t.memoizedState;
          ((f = h.element), Zc(e, t), li(t, l, null, n));
          var m = t.memoizedState;
          if (
            ((l = m.cache),
            zr(t, Nt, l),
            l !== h.cache && ko(t, [Nt], n, !0),
            xl(),
            (l = m.element),
            h.isDehydrated)
          )
            if (
              ((h = { element: l, isDehydrated: !1, cache: m.cache }),
              (t.updateQueue.baseState = h),
              (t.memoizedState = h),
              t.flags & 256)
            ) {
              t = Uh(e, t, l, n);
              break e;
            } else if (l !== f) {
              ((f = Fn(Error(o(424)), t)), Mr(f), (t = Uh(e, t, l, n)));
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
                ut = ya(e.firstChild),
                  kt = t,
                  Je = !0,
                  Tr = null,
                  fa = !0,
                  n = $o(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((A(), l === f)) {
              t = $a(e, t, n);
              break e;
            }
            Dt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          vf(e, t),
          e === null
            ? (n = j1(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Je ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Wu(Fe.current).createElement(n)),
                (l[Pt] = t),
                (l[bn] = e),
                rn(l, n, e),
                Zt(l),
                (t.stateNode = l))
            : (t.memoizedState = j1(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ui(t),
          e === null &&
            Je &&
            ((l = t.stateNode = O1(t.type, t.pendingProps, Fe.current)),
            (kt = t),
            (fa = !0),
            (f = ut),
            Ee(t.type) ? ((n0 = f), (ut = ya(l.firstChild))) : (ut = f)),
          Dt(e, t, t.pendingProps.children, n),
          vf(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Je &&
            ((f = l = ut) &&
              ((l = yg(l, t.type, t.pendingProps, fa)),
              l !== null
                ? ((t.stateNode = l),
                  (kt = t),
                  (ut = ya(l.firstChild)),
                  (fa = !1),
                  (f = !0))
                : (f = !1)),
            f || Er(t)),
          Ui(t),
          (f = t.type),
          (h = t.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (l = h.children),
          Kr(f, h) ? (l = null) : m !== null && Kr(f, m) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((f = ef(e, t, Id, null, null, n)), (Mi._currentValue = f)),
          vf(e, t),
          Dt(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Je &&
            ((e = n = ut) &&
              ((n = ct(n, t.pendingProps, fa)),
              n !== null
                ? ((t.stateNode = n), (kt = t), (ut = null), (e = !0))
                : (e = !1)),
            e || Er(t)),
          null
        );
      case 13:
        return fn(e, t, n);
      case 4:
        return (
          $t(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = jr(t, null, l, n)) : Dt(e, t, l, n),
          t.child
        );
      case 11:
        return we(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Dt(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Dt(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Dt(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          zr(t, t.type, l.value),
          Dt(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (f = t.type._context),
          (l = t.pendingProps.children),
          bl(t),
          (f = tn(f)),
          (l = l(f)),
          (t.flags |= 1),
          Dt(e, t, l, n),
          t.child
        );
      case 14:
        return Eu(e, t, t.type, t.pendingProps, n);
      case 15:
        return df(e, t, t.type, t.pendingProps, n);
      case 19:
        return vi(e, t, n);
      case 31:
        return Pd(e, t, n);
      case 22:
        return Ur(e, t, n, t.pendingProps);
      case 24:
        return (
          bl(t),
          (l = tn(Nt)),
          e === null
            ? ((f = Go()),
              f === null &&
                ((f = bt),
                (h = xa()),
                (f.pooledCache = h),
                h.refCount++,
                h !== null && (f.pooledCacheLanes |= n),
                (f = h)),
              (t.memoizedState = { parent: l, cache: f }),
              Na(t),
              zr(t, Nt, f))
            : ((e.lanes & n) !== 0 && (Zc(e, t), li(t, null, null, n), xl()),
              (f = e.memoizedState),
              (h = t.memoizedState),
              f.parent !== l
                ? ((f = { parent: l, cache: l }),
                  (t.memoizedState = f),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = f),
                  zr(t, Nt, l))
                : ((l = h.cache),
                  zr(t, Nt, l),
                  l !== f.cache && ko(t, [Nt], n, !0))),
          Dt(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function fr(e) {
    e.flags |= 4;
  }
  function _s(e, t, n, l, f) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (f & 335544128) === f))
        if (e.stateNode.complete) e.flags |= 8192;
        else if ($u()) e.flags |= 8192;
        else throw ((ka = Kc), Xc);
    } else e.flags &= -16777217;
  }
  function Ss(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !H1(t)))
      if ($u()) e.flags |= 8192;
      else throw ((ka = Kc), Xc);
  }
  function Du(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? go() : 536870912), (e.lanes |= t), (bi |= t)));
  }
  function qu(e, t) {
    if (!Je)
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
  function pt(e) {
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
  function Gh(e, t, n) {
    var l = t.pendingProps;
    switch ((ml(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (pt(t), null);
      case 1:
        return (pt(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          lr(Nt),
          _t(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (pl(t)
              ? fr(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Or())),
          pt(t),
          null
        );
      case 26:
        var f = t.type,
          h = t.memoizedState;
        return (
          e === null
            ? (fr(t),
              h !== null ? (pt(t), Ss(t, h)) : (pt(t), _s(t, f, null, l, n)))
            : h
              ? h !== e.memoizedState
                ? (fr(t), pt(t), Ss(t, h))
                : (pt(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && fr(t),
                pt(t),
                _s(t, f, e, l, n)),
          null
        );
      case 27:
        if (
          (tl(t),
          (n = Fe.current),
          (f = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && fr(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (pt(t), null);
          }
          ((e = me.current),
            pl(t) ? cu(t) : ((e = O1(f, l, n)), (t.stateNode = e), fr(t)));
        }
        return (pt(t), null);
      case 5:
        if ((tl(t), (f = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && fr(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return (pt(t), null);
          }
          if (((h = me.current), pl(t))) cu(t);
          else {
            var m = Wu(Fe.current);
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
            ((h[Pt] = t), (h[bn] = l));
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
            l && fr(t);
          }
        }
        return (
          pt(t),
          _s(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && fr(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(o(166));
          if (((e = Fe.current), pl(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (f = kt),
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
                x1(e.nodeValue, n)
              )),
              e || Er(t, !0));
          } else
            ((e = Wu(e).createTextNode(l)), (e[Pt] = t), (t.stateNode = e));
        }
        return (pt(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = pl(t)), n !== null)) {
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
              (A(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (pt(t), (e = !1));
          } else
            ((n = Or()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (Cn(t), t) : (Cn(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (pt(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((f = pl(t)), l !== null && l.dehydrated !== null)) {
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
              (A(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (pt(t), (f = !1));
          } else
            ((f = Or()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = f),
              (f = !0));
          if (!f) return t.flags & 256 ? (Cn(t), t) : (Cn(t), null);
        }
        return (
          Cn(t),
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
              Du(t, t.updateQueue),
              pt(t),
              null)
        );
      case 4:
        return (_t(), e === null && Vs(t.stateNode.containerInfo), pt(t), null);
      case 10:
        return (lr(t.type), pt(t), null);
      case 19:
        if ((Y(Lt), (l = t.memoizedState), l === null)) return (pt(t), null);
        if (((f = (t.flags & 128) !== 0), (h = l.rendering), h === null))
          if (f) qu(l, !1);
          else {
            if (Ot !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((h = Jc(e)), h !== null)) {
                  for (
                    t.flags |= 128,
                      qu(l, !1),
                      e = h.updateQueue,
                      t.updateQueue = e,
                      Du(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (gh(n, e), (n = n.sibling));
                  return (
                    fe(Lt, (Lt.current & 1) | 2),
                    Je && $n(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              Ln() > Tl &&
              ((t.flags |= 128), (f = !0), qu(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!f)
            if (((e = Jc(h)), e !== null)) {
              if (
                ((t.flags |= 128),
                (f = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Du(t, e),
                qu(l, !0),
                l.tail === null &&
                  l.tailMode === 'hidden' &&
                  !h.alternate &&
                  !Je)
              )
                return (pt(t), null);
            } else
              2 * Ln() - l.renderingStartTime > Tl &&
                n !== 536870912 &&
                ((t.flags |= 128), (f = !0), qu(l, !1), (t.lanes = 4194304));
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
            (l.renderingStartTime = Ln()),
            (e.sibling = null),
            (n = Lt.current),
            fe(Lt, f ? (n & 1) | 2 : n & 1),
            Je && $n(t, l.treeForkCount),
            e)
          : (pt(t), null);
      case 22:
      case 23:
        return (
          Cn(t),
          du(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (pt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : pt(t),
          (n = t.updateQueue),
          n !== null && Du(t, n.retryQueue),
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
          e !== null && Y(Sl),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          lr(Nt),
          pt(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Lu(e, t) {
    switch ((ml(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          lr(Nt),
          _t(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (tl(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Cn(t), t.alternate === null)) throw Error(o(340));
          A();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Cn(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          A();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Y(Lt), null);
      case 4:
        return (_t(), null);
      case 10:
        return (lr(t.type), null);
      case 22:
      case 23:
        return (
          Cn(t),
          du(),
          e !== null && Y(Sl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (lr(Nt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bf(e, t) {
    switch ((ml(t), t.tag)) {
      case 3:
        (lr(Nt), _t());
        break;
      case 26:
      case 27:
      case 5:
        tl(t);
        break;
      case 4:
        _t();
        break;
      case 31:
        t.memoizedState !== null && Cn(t);
        break;
      case 13:
        Cn(t);
        break;
      case 19:
        Y(Lt);
        break;
      case 10:
        lr(t.type);
        break;
      case 22:
      case 23:
        (Cn(t), du(), e !== null && Y(Sl));
        break;
      case 24:
        lr(Nt);
    }
  }
  function yi(e, t) {
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
    } catch (C) {
      st(t, t.return, C);
    }
  }
  function or(e, t, n) {
    try {
      var l = t.updateQueue,
        f = l !== null ? l.lastEffect : null;
      if (f !== null) {
        var h = f.next;
        l = h;
        do {
          if ((l.tag & e) === e) {
            var m = l.inst,
              C = m.destroy;
            if (C !== void 0) {
              ((m.destroy = void 0), (f = t));
              var O = n,
                G = C;
              try {
                G();
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
  function Bu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Ic(t, n);
      } catch (l) {
        st(e, e.return, l);
      }
    }
  }
  function xs(e, t, n) {
    ((n.props = yn(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      st(e, t, l);
    }
  }
  function Rn(e, t) {
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
  function on(e, t) {
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
  function Fh(e) {
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
  function _f(e, t, n) {
    try {
      var l = e.stateNode;
      (dg(l, e.type, n, t), (l[bn] = t));
    } catch (f) {
      st(e, e.return, f);
    }
  }
  function $h(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Ee(e.type)) ||
      e.tag === 4
    );
  }
  function Cs(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || $h(e.return)) return null;
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
  function As(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = Wa)));
    else if (
      l !== 4 &&
      (l === 27 && Ee(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (As(e, t, n), e = e.sibling; e !== null; )
        (As(e, t, n), (e = e.sibling));
  }
  function Sf(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && Ee(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (Sf(e, t, n), e = e.sibling; e !== null; )
        (Sf(e, t, n), (e = e.sibling));
  }
  function Yh(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, f = t.attributes; f.length; )
        t.removeAttributeNode(f[0]);
      (rn(t, l, n), (t[Pt] = e), (t[bn] = n));
    } catch (h) {
      st(e, e.return, h);
    }
  }
  var sr = !1,
    Gt = !1,
    Rs = !1,
    Xh = typeof WeakSet == 'function' ? WeakSet : Set,
    Vt = null;
  function tg(e, t) {
    if (((e = e.containerInfo), (Ju = Ff), (e = oh(e)), Bo(e))) {
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
              C = -1,
              O = -1,
              G = 0,
              ee = 0,
              ae = e,
              X = null;
            t: for (;;) {
              for (
                var Z;
                ae !== n || (f !== 0 && ae.nodeType !== 3) || (C = m + f),
                  ae !== h || (l !== 0 && ae.nodeType !== 3) || (O = m + l),
                  ae.nodeType === 3 && (m += ae.nodeValue.length),
                  (Z = ae.firstChild) !== null;
              )
                ((X = ae), (ae = Z));
              for (;;) {
                if (ae === e) break t;
                if (
                  (X === n && ++G === f && (C = m),
                  X === h && ++ee === l && (O = m),
                  (Z = ae.nextSibling) !== null)
                )
                  break;
                ((ae = X), (X = ae.parentNode));
              }
              ae = Z;
            }
            n = C === -1 || O === -1 ? null : { start: C, end: O };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Ps = { focusedElem: e, selectionRange: n }, Ff = !1, Vt = t;
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
                  var pe = yn(n.type, f);
                  ((e = l.getSnapshotBeforeUpdate(pe, h)),
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
                  qf(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      qf(e);
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
  function ws(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (dr(e, n), l & 4 && yi(5, n));
        break;
      case 1:
        if ((dr(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              st(n, n.return, m);
            }
          else {
            var f = yn(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(f, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              st(n, n.return, m);
            }
          }
        (l & 64 && Bu(n), l & 512 && Rn(n, n.return));
        break;
      case 3:
        if ((dr(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
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
            Ic(e, t);
          } catch (m) {
            st(n, n.return, m);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Yh(n);
      case 26:
      case 5:
        (dr(e, n), t === null && l & 4 && Fh(n), l & 512 && Rn(n, n.return));
        break;
      case 12:
        dr(e, n);
        break;
      case 31:
        (dr(e, n), l & 4 && Es(e, n));
        break;
      case 13:
        (dr(e, n),
          l & 4 && Qh(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = Of.bind(null, n)), mg(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || sr), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || Gt), (f = sr));
          var h = Gt;
          ((sr = l),
            (Gt = t) && !h ? Ya(e, n, (n.subtreeFlags & 8772) !== 0) : dr(e, n),
            (sr = f),
            (Gt = h));
        }
        break;
      case 30:
        break;
      default:
        dr(e, n);
    }
  }
  function Ts(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Ts(t)),
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
    wn = !1;
  function hr(e, t, n) {
    for (n = n.child; n !== null; ) (Kh(e, t, n), (n = n.sibling));
  }
  function Kh(e, t, n) {
    if (hn && typeof hn.onCommitFiberUnmount == 'function')
      try {
        hn.onCommitFiberUnmount(rl, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Gt || on(n, t),
          hr(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Gt || on(n, t);
        var l = St,
          f = wn;
        (Ee(n.type) && ((St = n.stateNode), (wn = !1)),
          hr(e, t, n),
          ec(n.stateNode),
          (St = l),
          (wn = f));
        break;
      case 5:
        Gt || on(n, t);
      case 6:
        if (
          ((l = St),
          (f = wn),
          (St = null),
          hr(e, t, n),
          (St = l),
          (wn = f),
          St !== null)
        )
          if (wn)
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
          (wn
            ? ((e = St),
              t0(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              ji(e))
            : t0(St, n.stateNode));
        break;
      case 4:
        ((l = St),
          (f = wn),
          (St = n.stateNode.containerInfo),
          (wn = !0),
          hr(e, t, n),
          (St = l),
          (wn = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (or(2, n, t), Gt || or(4, n, t), hr(e, t, n));
        break;
      case 1:
        (Gt ||
          (on(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == 'function' && xs(n, t, l)),
          hr(e, t, n));
        break;
      case 21:
        hr(e, t, n);
        break;
      case 22:
        ((Gt = (l = Gt) || n.memoizedState !== null), hr(e, t, n), (Gt = l));
        break;
      default:
        hr(e, t, n);
    }
  }
  function Es(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        ji(e);
      } catch (n) {
        st(t, t.return, n);
      }
    }
  }
  function Qh(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        ji(e);
      } catch (n) {
        st(t, t.return, n);
      }
  }
  function ng(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Xh()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Xh()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function xf(e, t) {
    var n = ng(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var f = fg.bind(null, e, l);
        l.then(f, f);
      }
    });
  }
  function Tn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var f = n[l],
          h = e,
          m = t,
          C = m;
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 27:
              if (Ee(C.type)) {
                ((St = C.stateNode), (wn = !1));
                break e;
              }
              break;
            case 5:
              ((St = C.stateNode), (wn = !1));
              break e;
            case 3:
            case 4:
              ((St = C.stateNode.containerInfo), (wn = !0));
              break e;
          }
          C = C.return;
        }
        if (St === null) throw Error(o(160));
        (Kh(h, m, f),
          (St = null),
          (wn = !1),
          (h = f.alternate),
          h !== null && (h.return = null),
          (f.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Zh(t, e), (t = t.sibling));
  }
  var Ma = null;
  function Zh(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Tn(t, e),
          xt(e),
          l & 4 && (or(3, e, e.return), yi(3, e), or(5, e, e.return)));
        break;
      case 1:
        (Tn(t, e),
          xt(e),
          l & 512 && (Gt || n === null || on(n, n.return)),
          l & 64 &&
            sr &&
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
          (Tn(t, e),
          xt(e),
          l & 512 && (Gt || n === null || on(n, n.return)),
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
                        Zt(h),
                        (l = h));
                      break e;
                    case 'link':
                      var m = L1('link', 'href', f).get(l + (n.href || ''));
                      if (m) {
                        for (var C = 0; C < m.length; C++)
                          if (
                            ((h = m[C]),
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
                            m.splice(C, 1);
                            break t;
                          }
                      }
                      ((h = f.createElement(l)),
                        rn(h, l, n),
                        f.head.appendChild(h));
                      break;
                    case 'meta':
                      if (
                        (m = L1('meta', 'content', f).get(
                          l + (n.content || ''),
                        ))
                      ) {
                        for (C = 0; C < m.length; C++)
                          if (
                            ((h = m[C]),
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
                            m.splice(C, 1);
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
                  ((h[Pt] = e), Zt(h), (l = h));
                }
                e.stateNode = l;
              } else B1(f, e.type, e.stateNode);
            else e.stateNode = q1(f, l, e.memoizedProps);
          else
            h !== l
              ? (h === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : h.count--,
                l === null
                  ? B1(f, e.type, e.stateNode)
                  : q1(f, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                _f(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Tn(t, e),
          xt(e),
          l & 512 && (Gt || n === null || on(n, n.return)),
          n !== null && l & 4 && _f(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Tn(t, e),
          xt(e),
          l & 512 && (Gt || n === null || on(n, n.return)),
          e.flags & 32)
        ) {
          f = e.stateNode;
          try {
            ba(f, '');
          } catch (pe) {
            st(e, e.return, pe);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((f = e.memoizedProps), _f(e, f, n !== null ? n.memoizedProps : f)),
          l & 1024 && (Rs = !0));
        break;
      case 6:
        if ((Tn(t, e), xt(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (pe) {
            st(e, e.return, pe);
          }
        }
        break;
      case 3:
        if (
          ((tc = null),
          (f = Ma),
          (Ma = Bf(t.containerInfo)),
          Tn(t, e),
          (Ma = f),
          xt(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            ji(t.containerInfo);
          } catch (pe) {
            st(e, e.return, pe);
          }
        Rs && ((Rs = !1), Vh(e));
        break;
      case 4:
        ((l = Ma),
          (Ma = Bf(e.stateNode.containerInfo)),
          Tn(t, e),
          xt(e),
          (Ma = l));
        break;
      case 12:
        (Tn(t, e), xt(e));
        break;
      case 31:
        (Tn(t, e),
          xt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), xf(e, l))));
        break;
      case 13:
        (Tn(t, e),
          xt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Gu = Ln()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), xf(e, l))));
        break;
      case 22:
        f = e.memoizedState !== null;
        var O = n !== null && n.memoizedState !== null,
          G = sr,
          ee = Gt;
        if (
          ((sr = G || f),
          (Gt = ee || O),
          Tn(t, e),
          (Gt = ee),
          (sr = G),
          xt(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = f ? t._visibility & -2 : t._visibility | 1,
              f && (n === null || O || sr || Gt || Rl(e)),
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
                    C = O.stateNode;
                    var ae = O.memoizedProps.style,
                      X =
                        ae != null && ae.hasOwnProperty('display')
                          ? ae.display
                          : null;
                    C.style.display =
                      X == null || typeof X == 'boolean' ? '' : ('' + X).trim();
                  }
                } catch (pe) {
                  st(O, O.return, pe);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                O = t;
                try {
                  O.stateNode.nodeValue = f ? '' : O.memoizedProps;
                } catch (pe) {
                  st(O, O.return, pe);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                O = t;
                try {
                  var Z = O.stateNode;
                  f ? ea(Z, !0) : ea(O.stateNode, !1);
                } catch (pe) {
                  st(O, O.return, pe);
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
            n !== null && ((l.retryQueue = null), xf(e, n))));
        break;
      case 19:
        (Tn(t, e),
          xt(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), xf(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Tn(t, e), xt(e));
    }
  }
  function xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if ($h(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var f = n.stateNode,
              h = Cs(e);
            Sf(e, h, f);
            break;
          case 5:
            var m = n.stateNode;
            n.flags & 32 && (ba(m, ''), (n.flags &= -33));
            var C = Cs(e);
            Sf(e, C, m);
            break;
          case 3:
          case 4:
            var O = n.stateNode.containerInfo,
              G = Cs(e);
            As(e, G, O);
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
  function Vh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Vh(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function dr(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (ws(e, t.alternate, t), (t = t.sibling));
  }
  function Rl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (or(4, t, t.return), Rl(t));
          break;
        case 1:
          on(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && xs(t, t.return, n),
            Rl(t));
          break;
        case 27:
          ec(t.stateNode);
        case 26:
        case 5:
          (on(t, t.return), Rl(t));
          break;
        case 22:
          t.memoizedState === null && Rl(t);
          break;
        case 30:
          Rl(t);
          break;
        default:
          Rl(t);
      }
      e = e.sibling;
    }
  }
  function Ya(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        f = e,
        h = t,
        m = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          (Ya(f, h, n), yi(4, h));
          break;
        case 1:
          if (
            (Ya(f, h, n),
            (l = h),
            (f = l.stateNode),
            typeof f.componentDidMount == 'function')
          )
            try {
              f.componentDidMount();
            } catch (G) {
              st(l, l.return, G);
            }
          if (((l = h), (f = l.updateQueue), f !== null)) {
            var C = l.stateNode;
            try {
              var O = f.shared.hiddenCallbacks;
              if (O !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < O.length; f++)
                  wa(O[f], C);
            } catch (G) {
              st(l, l.return, G);
            }
          }
          (n && m & 64 && Bu(h), Rn(h, h.return));
          break;
        case 27:
          Yh(h);
        case 26:
        case 5:
          (Ya(f, h, n), n && l === null && m & 4 && Fh(h), Rn(h, h.return));
          break;
        case 12:
          Ya(f, h, n);
          break;
        case 31:
          (Ya(f, h, n), n && m & 4 && Es(f, h));
          break;
        case 13:
          (Ya(f, h, n), n && m & 4 && Qh(f, h));
          break;
        case 22:
          (h.memoizedState === null && Ya(f, h, n), Rn(h, h.return));
          break;
        case 30:
          break;
        default:
          Ya(f, h, n);
      }
      t = t.sibling;
    }
  }
  function Os(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && fu(n)));
  }
  function Ms(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && fu(e)));
  }
  function za(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Ih(e, t, n, l), (t = t.sibling));
  }
  function Ih(e, t, n, l) {
    var f = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (za(e, t, n, l), f & 2048 && yi(9, t));
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
            t !== e && (t.refCount++, e != null && fu(e))));
        break;
      case 12:
        if (f & 2048) {
          (za(e, t, n, l), (e = t.stateNode));
          try {
            var h = t.memoizedProps,
              m = h.id,
              C = h.onPostCommit;
            typeof C == 'function' &&
              C(
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
              : Hu(e, t)
            : h._visibility & 2
              ? za(e, t, n, l)
              : ((h._visibility |= 2),
                kr(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          f & 2048 && Os(m, t));
        break;
      case 24:
        (za(e, t, n, l), f & 2048 && Ms(t.alternate, t));
        break;
      default:
        za(e, t, n, l);
    }
  }
  function kr(e, t, n, l, f) {
    for (
      f = f && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var h = e,
        m = t,
        C = n,
        O = l,
        G = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (kr(h, m, C, O, f), yi(8, m));
          break;
        case 23:
          break;
        case 22:
          var ee = m.stateNode;
          (m.memoizedState !== null
            ? ee._visibility & 2
              ? kr(h, m, C, O, f)
              : Hu(h, m)
            : ((ee._visibility |= 2), kr(h, m, C, O, f)),
            f && G & 2048 && Os(m.alternate, m));
          break;
        case 24:
          (kr(h, m, C, O, f), f && G & 2048 && Ms(m.alternate, m));
          break;
        default:
          kr(h, m, C, O, f);
      }
      t = t.sibling;
    }
  }
  function Hu(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          f = l.flags;
        switch (l.tag) {
          case 22:
            (Hu(n, l), f & 2048 && Os(l.alternate, l));
            break;
          case 24:
            (Hu(n, l), f & 2048 && Ms(l.alternate, l));
            break;
          default:
            Hu(n, l);
        }
        t = t.sibling;
      }
  }
  var Uu = 8192;
  function mi(e, t, n) {
    if (e.subtreeFlags & Uu)
      for (e = e.child; e !== null; ) (Jh(e, t, n), (e = e.sibling));
  }
  function Jh(e, t, n) {
    switch (e.tag) {
      case 26:
        (mi(e, t, n),
          e.flags & Uu &&
            e.memoizedState !== null &&
            Oi(n, Ma, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        mi(e, t, n);
        break;
      case 3:
      case 4:
        var l = Ma;
        ((Ma = Bf(e.stateNode.containerInfo)), mi(e, t, n), (Ma = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = Uu), (Uu = 16777216), mi(e, t, n), (Uu = l))
            : mi(e, t, n));
        break;
      default:
        mi(e, t, n);
    }
  }
  function Wh(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ku(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Vt = l), e1(l, e));
        }
      Wh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Ph(e), (e = e.sibling));
  }
  function Ph(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ku(e), e.flags & 2048 && or(9, e, e.return));
        break;
      case 3:
        ku(e);
        break;
      case 12:
        ku(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), Cf(e))
          : ku(e);
        break;
      default:
        ku(e);
    }
  }
  function Cf(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((Vt = l), e1(l, e));
        }
      Wh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (or(8, t, t.return), Cf(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Cf(t)));
          break;
        default:
          Cf(t);
      }
      e = e.sibling;
    }
  }
  function e1(e, t) {
    for (; Vt !== null; ) {
      var n = Vt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          or(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          fu(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (Vt = l));
      else
        e: for (n = e; Vt !== null; ) {
          l = Vt;
          var f = l.sibling,
            h = l.return;
          if ((Ts(l), l === n)) {
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
  var ag = {
      getCacheForType: function (e) {
        var t = tn(Nt),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return tn(Nt).controller.signal;
      },
    },
    rg = typeof WeakMap == 'function' ? WeakMap : Map,
    lt = 0,
    bt = null,
    Xe = null,
    Ve = 0,
    ot = 0,
    Vn = null,
    Nr = !1,
    pi = !1,
    zs = !1,
    ja = 0,
    Ot = 0,
    Gr = 0,
    wl = 0,
    js = 0,
    In = 0,
    bi = 0,
    Nu = null,
    En = null,
    Ds = !1,
    Gu = 0,
    t1 = 0,
    Tl = 1 / 0,
    Af = null,
    Fr = null,
    Kt = 0,
    $r = null,
    _i = null,
    gr = 0,
    qs = 0,
    Ls = null,
    n1 = null,
    Fu = 0,
    Bs = null;
  function Jn() {
    return (lt & 2) !== 0 && Ve !== 0 ? Ve & -Ve : W.T !== null ? Wn() : q0();
  }
  function a1() {
    if (In === 0)
      if ((Ve & 536870912) === 0 || Je) {
        var e = Gi;
        ((Gi <<= 1), (Gi & 3932160) === 0 && (Gi = 262144), (In = e));
      } else In = 536870912;
    return ((e = Xn.current), e !== null && (e.flags |= 32), In);
  }
  function On(e, t, n) {
    (((e === bt && (ot === 2 || ot === 9)) || e.cancelPendingCommit !== null) &&
      (Si(e, 0), vr(e, Ve, In, !1)),
      Yi(e, n),
      ((lt & 2) === 0 || e !== bt) &&
        (e === bt &&
          ((lt & 2) === 0 && (wl |= n), Ot === 4 && vr(e, Ve, In, !1)),
        Xa(e)));
  }
  function r1(e, t, n) {
    if ((lt & 6) !== 0) throw Error(o(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || $i(e, t),
      f = l ? ig(e, t) : Us(e, t, !0),
      h = l;
    do {
      if (f === 0) {
        pi && !l && vr(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), h && !i1(n))) {
          ((f = Us(e, t, !1)), (h = !1));
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
              var C = e;
              f = Nu;
              var O = C.current.memoizedState.isDehydrated;
              if ((O && (Si(C, m).flags |= 256), (m = Us(C, m, !1)), m !== 2)) {
                if (zs && !O) {
                  ((C.errorRecoveryDisabledLanes |= h), (wl |= h), (f = 4));
                  break e;
                }
                ((h = En),
                  (En = f),
                  h !== null &&
                    (En === null ? (En = h) : En.push.apply(En, h)));
              }
              f = m;
            }
            if (((h = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (Si(e, 0), vr(e, t, 0, !0));
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
              vr(l, t, In, !Nr);
              break e;
            case 2:
              En = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((f = Gu + 300 - Ln()), 10 < f)) {
            if ((vr(l, t, In, !Nr), oc(l, 0, !0) !== 0)) break e;
            ((gr = t),
              (l.timeoutHandle = C1(
                l1.bind(
                  null,
                  l,
                  n,
                  En,
                  Af,
                  Ds,
                  t,
                  In,
                  wl,
                  bi,
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
          l1(l, n, En, Af, Ds, t, In, wl, bi, Nr, h, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Xa(e);
  }
  function l1(e, t, n, l, f, h, m, C, O, G, ee, ae, X, Z) {
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
        unsuspend: Wa,
      }),
        Jh(t, h, ae));
      var pe =
        (h & 62914560) === h ? Gu - Ln() : (h & 4194048) === h ? t1 - Ln() : 0;
      if (((pe = wg(ae, pe)), pe !== null)) {
        ((gr = h),
          (e.cancelPendingCommit = pe(
            h1.bind(null, e, t, h, n, l, f, m, C, O, ee, ae, null, X, Z),
          )),
          vr(e, h, m, !G));
        return;
      }
    }
    h1(e, t, h, n, l, f, m, C, O);
  }
  function i1(e) {
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
            if (!Tt(h(), f)) return !1;
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
  function vr(e, t, n, l) {
    ((t &= ~js),
      (t &= ~wl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var f = t; 0 < f; ) {
      var h = 31 - dn(f),
        m = 1 << h;
      ((l[h] = -1), (f &= ~m));
    }
    n !== 0 && sc(e, n, t);
  }
  function Rf() {
    return (lt & 6) === 0 ? (Qu(0), !1) : !0;
  }
  function Hs() {
    if (Xe !== null) {
      if (ot === 0) var e = Xe.return;
      else ((e = Xe), (rr = He = null), Ko(e), (ai = null), (Yn = 0), (e = Xe));
      for (; e !== null; ) (bf(e.alternate, e), (e = e.return));
      Xe = null;
    }
  }
  function Si(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), vg(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (gr = 0),
      Hs(),
      (bt = e),
      (Xe = n = la(e.current, null)),
      (Ve = t),
      (ot = 0),
      (Vn = null),
      (Nr = !1),
      (pi = $i(e, t)),
      (zs = !1),
      (bi = In = js = wl = Gr = Ot = 0),
      (En = Nu = null),
      (Ds = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var f = 31 - dn(l),
          h = 1 << f;
        ((t |= e[f]), (l &= ~h));
      }
    return ((ja = t), Sa(), n);
  }
  function u1(e, t) {
    ((Ue = null),
      (W.H = Hr),
      t === ni || t === su
        ? ((t = _h()), (ot = 3))
        : t === Xc
          ? ((t = _h()), (ot = 4))
          : (ot =
              t === Tu
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (Vn = t),
      Xe === null && ((Ot = 1), wu(e, Fn(t, e.current))));
  }
  function $u() {
    var e = Xn.current;
    return e === null
      ? !0
      : (Ve & 4194048) === Ve
        ? da === null
        : (Ve & 62914560) === Ve || (Ve & 536870912) !== 0
          ? e === da
          : !1;
  }
  function c1() {
    var e = W.H;
    return ((W.H = Hr), e === null ? Hr : e);
  }
  function f1() {
    var e = W.A;
    return ((W.A = ag), e);
  }
  function wf() {
    ((Ot = 4),
      Nr || ((Ve & 4194048) !== Ve && Xn.current !== null) || (pi = !0),
      ((Gr & 134217727) === 0 && (wl & 134217727) === 0) ||
        bt === null ||
        vr(bt, Ve, In, !1));
  }
  function Us(e, t, n) {
    var l = lt;
    lt |= 2;
    var f = c1(),
      h = f1();
    ((bt !== e || Ve !== t) && ((Af = null), Si(e, t)), (t = !1));
    var m = Ot;
    e: do
      try {
        if (ot !== 0 && Xe !== null) {
          var C = Xe,
            O = Vn;
          switch (ot) {
            case 8:
              (Hs(), (m = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Xn.current === null && (t = !0);
              var G = ot;
              if (((ot = 0), (Vn = null), xi(e, C, O, G), n && pi)) {
                m = 0;
                break e;
              }
              break;
            default:
              ((G = ot), (ot = 0), (Vn = null), xi(e, C, O, G));
          }
        }
        (lg(), (m = Ot));
        break;
      } catch (ee) {
        u1(e, ee);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (rr = He = null),
      (lt = l),
      (W.H = f),
      (W.A = h),
      Xe === null && ((bt = null), (Ve = 0), Sa()),
      m
    );
  }
  function lg() {
    for (; Xe !== null; ) o1(Xe);
  }
  function ig(e, t) {
    var n = lt;
    lt |= 2;
    var l = c1(),
      f = f1();
    bt !== e || Ve !== t
      ? ((Af = null), (Tl = Ln() + 500), Si(e, t))
      : (pi = $i(e, t));
    e: do
      try {
        if (ot !== 0 && Xe !== null) {
          t = Xe;
          var h = Vn;
          t: switch (ot) {
            case 1:
              ((ot = 0), (Vn = null), xi(e, t, h, 1));
              break;
            case 2:
            case 9:
              if (bh(h)) {
                ((ot = 0), (Vn = null), s1(t));
                break;
              }
              ((t = function () {
                ((ot !== 2 && ot !== 9) || bt !== e || (ot = 7), Xa(e));
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
              bh(h)
                ? ((ot = 0), (Vn = null), s1(t))
                : ((ot = 0), (Vn = null), xi(e, t, h, 7));
              break;
            case 5:
              var m = null;
              switch (Xe.tag) {
                case 26:
                  m = Xe.memoizedState;
                case 5:
                case 27:
                  var C = Xe;
                  if (m ? H1(m) : C.stateNode.complete) {
                    ((ot = 0), (Vn = null));
                    var O = C.sibling;
                    if (O !== null) Xe = O;
                    else {
                      var G = C.return;
                      G !== null ? ((Xe = G), Tf(G)) : (Xe = null);
                    }
                    break t;
                  }
              }
              ((ot = 0), (Vn = null), xi(e, t, h, 5));
              break;
            case 6:
              ((ot = 0), (Vn = null), xi(e, t, h, 6));
              break;
            case 8:
              (Hs(), (Ot = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        ug();
        break;
      } catch (ee) {
        u1(e, ee);
      }
    while (!0);
    return (
      (rr = He = null),
      (W.H = l),
      (W.A = f),
      (lt = n),
      Xe !== null ? 0 : ((bt = null), (Ve = 0), Sa(), Ot)
    );
  }
  function ug() {
    for (; Xe !== null && !ki(); ) o1(Xe);
  }
  function o1(e) {
    var t = Nh(e.alternate, e, ja);
    ((e.memoizedProps = e.pendingProps), t === null ? Tf(e) : (Xe = t));
  }
  function s1(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Hh(n, t, t.pendingProps, t.type, void 0, Ve);
        break;
      case 11:
        t = Hh(n, t, t.pendingProps, t.type.render, t.ref, Ve);
        break;
      case 5:
        Ko(t);
      default:
        (bf(n, t), (t = Xe = gh(t, ja)), (t = Nh(n, t, ja)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Tf(e) : (Xe = t));
  }
  function xi(e, t, n, l) {
    ((rr = He = null), Ko(t), (ai = null), (Yn = 0));
    var f = t.return;
    try {
      if (vs(e, f, t, n, Ve)) {
        ((Ot = 1), wu(e, Fn(n, e.current)), (Xe = null));
        return;
      }
    } catch (h) {
      if (f !== null) throw ((Xe = f), h);
      ((Ot = 1), wu(e, Fn(n, e.current)), (Xe = null));
      return;
    }
    t.flags & 32768
      ? (Je || l === 1
          ? (e = !0)
          : pi || (Ve & 536870912) !== 0
            ? (e = !1)
            : ((Nr = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = Xn.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        Yu(t, e))
      : Tf(t);
  }
  function Tf(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Yu(t, Nr);
        return;
      }
      e = t.return;
      var n = Gh(t.alternate, t, ja);
      if (n !== null) {
        Xe = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Xe = t;
        return;
      }
      Xe = t = e;
    } while (t !== null);
    Ot === 0 && (Ot = 5);
  }
  function Yu(e, t) {
    do {
      var n = Lu(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Xe = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Xe = e;
        return;
      }
      Xe = e = n;
    } while (e !== null);
    ((Ot = 6), (Xe = null));
  }
  function h1(e, t, n, l, f, h, m, C, O) {
    e.cancelPendingCommit = null;
    do Xu();
    while (Kt !== 0);
    if ((lt & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((h = t.lanes | t.childLanes),
        (h |= Ql),
        Ed(e, n, h, m, C, O),
        e === bt && ((Xe = bt = null), (Ve = 0)),
        (_i = t),
        ($r = e),
        (gr = n),
        (qs = h),
        (Ls = f),
        (n1 = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            og(Va, function () {
              return (Fs(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = W.T), (W.T = null), (f = he.p), (he.p = 2), (m = lt), (lt |= 4));
        try {
          tg(e, t, n);
        } finally {
          ((lt = m), (he.p = f), (W.T = l));
        }
      }
      ((Kt = 1), ks(), Ns(), Ef());
    }
  }
  function ks() {
    if (Kt === 1) {
      Kt = 0;
      var e = $r,
        t = _i,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = W.T), (W.T = null));
        var l = he.p;
        he.p = 2;
        var f = lt;
        lt |= 4;
        try {
          Zh(t, e);
          var h = Ps,
            m = oh(e.containerInfo),
            C = h.focusedElem,
            O = h.selectionRange;
          if (
            m !== C &&
            C &&
            C.ownerDocument &&
            fh(C.ownerDocument.documentElement, C)
          ) {
            if (O !== null && Bo(C)) {
              var G = O.start,
                ee = O.end;
              if ((ee === void 0 && (ee = G), 'selectionStart' in C))
                ((C.selectionStart = G),
                  (C.selectionEnd = Math.min(ee, C.value.length)));
              else {
                var ae = C.ownerDocument || document,
                  X = (ae && ae.defaultView) || window;
                if (X.getSelection) {
                  var Z = X.getSelection(),
                    pe = C.textContent.length,
                    Te = Math.min(O.start, pe),
                    yt = O.end === void 0 ? Te : Math.min(O.end, pe);
                  !Z.extend && Te > yt && ((m = yt), (yt = Te), (Te = m));
                  var B = ch(C, Te),
                    q = ch(C, yt);
                  if (
                    B &&
                    q &&
                    (Z.rangeCount !== 1 ||
                      Z.anchorNode !== B.node ||
                      Z.anchorOffset !== B.offset ||
                      Z.focusNode !== q.node ||
                      Z.focusOffset !== q.offset)
                  ) {
                    var k = ae.createRange();
                    (k.setStart(B.node, B.offset),
                      Z.removeAllRanges(),
                      Te > yt
                        ? (Z.addRange(k), Z.extend(q.node, q.offset))
                        : (k.setEnd(q.node, q.offset), Z.addRange(k)));
                  }
                }
              }
            }
            for (ae = [], Z = C; (Z = Z.parentNode); )
              Z.nodeType === 1 &&
                ae.push({ element: Z, left: Z.scrollLeft, top: Z.scrollTop });
            for (
              typeof C.focus == 'function' && C.focus(), C = 0;
              C < ae.length;
              C++
            ) {
              var ne = ae[C];
              ((ne.element.scrollLeft = ne.left),
                (ne.element.scrollTop = ne.top));
            }
          }
          ((Ff = !!Ju), (Ps = Ju = null));
        } finally {
          ((lt = f), (he.p = l), (W.T = n));
        }
      }
      ((e.current = t), (Kt = 2));
    }
  }
  function Ns() {
    if (Kt === 2) {
      Kt = 0;
      var e = $r,
        t = _i,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = W.T), (W.T = null));
        var l = he.p;
        he.p = 2;
        var f = lt;
        lt |= 4;
        try {
          ws(e, t.alternate, t);
        } finally {
          ((lt = f), (he.p = l), (W.T = n));
        }
      }
      Kt = 3;
    }
  }
  function Ef() {
    if (Kt === 4 || Kt === 3) {
      ((Kt = 0), uc());
      var e = $r,
        t = _i,
        n = gr,
        l = n1;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Kt = 5)
        : ((Kt = 0), (_i = $r = null), Gs(e, e.pendingLanes));
      var f = e.pendingLanes;
      if (
        (f === 0 && (Fr = null),
        mo(n),
        (t = t.stateNode),
        hn && typeof hn.onCommitFiberRoot == 'function')
      )
        try {
          hn.onCommitFiberRoot(rl, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = W.T), (f = he.p), (he.p = 2), (W.T = null));
        try {
          for (var h = e.onRecoverableError, m = 0; m < l.length; m++) {
            var C = l[m];
            h(C.value, { componentStack: C.stack });
          }
        } finally {
          ((W.T = t), (he.p = f));
        }
      }
      ((gr & 3) !== 0 && Xu(),
        Xa(e),
        (f = e.pendingLanes),
        (n & 261930) !== 0 && (f & 42) !== 0
          ? e === Bs
            ? Fu++
            : ((Fu = 0), (Bs = e))
          : (Fu = 0),
        Qu(0));
    }
  }
  function Gs(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), fu(t)));
  }
  function Xu() {
    return (ks(), Ns(), Ef(), Fs());
  }
  function Fs() {
    if (Kt !== 5) return !1;
    var e = $r,
      t = qs;
    qs = 0;
    var n = mo(gr),
      l = W.T,
      f = he.p;
    try {
      ((he.p = 32 > n ? 32 : n), (W.T = null), (n = Ls), (Ls = null));
      var h = $r,
        m = gr;
      if (((Kt = 0), (_i = $r = null), (gr = 0), (lt & 6) !== 0))
        throw Error(o(331));
      var C = lt;
      if (
        ((lt |= 4),
        Ph(h.current),
        Ih(h, h.current, m, n),
        (lt = C),
        Qu(0, !1),
        hn && typeof hn.onPostCommitFiberRoot == 'function')
      )
        try {
          hn.onPostCommitFiberRoot(rl, h);
        } catch {}
      return !0;
    } finally {
      ((he.p = f), (W.T = l), Gs(e, t));
    }
  }
  function $s(e, t, n) {
    ((t = Fn(n, t)),
      (t = gs(e.stateNode, t, 2)),
      (e = Ra(e, t, 2)),
      e !== null && (Yi(e, 2), Xa(e)));
  }
  function st(e, t, n) {
    if (e.tag === 3) $s(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          $s(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' &&
              (Fr === null || !Fr.has(l)))
          ) {
            ((e = Fn(n, e)),
              (n = Fa(2)),
              (l = Ra(t, n, 2)),
              l !== null && (hf(n, l, t, e), Yi(l, 2), Xa(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ys(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new rg();
      var f = new Set();
      l.set(t, f);
    } else ((f = l.get(t)), f === void 0 && ((f = new Set()), l.set(t, f)));
    f.has(n) ||
      ((zs = !0), f.add(n), (e = cg.bind(null, e, t, n)), t.then(e, e));
  }
  function cg(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      bt === e &&
        (Ve & n) === n &&
        (Ot === 4 || (Ot === 3 && (Ve & 62914560) === Ve && 300 > Ln() - Gu)
          ? (lt & 2) === 0 && Si(e, 0)
          : (js |= n),
        bi === Ve && (bi = 0)),
      Xa(e));
  }
  function Ku(e, t) {
    (t === 0 && (t = go()), (e = Ha(e, t)), e !== null && (Yi(e, t), Xa(e)));
  }
  function Of(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ku(e, n));
  }
  function fg(e, t) {
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
  function og(e, t) {
    return al(e, t);
  }
  var Ci = null,
    El = null,
    Xs = !1,
    Mf = !1,
    Ks = !1,
    Yr = 0;
  function Xa(e) {
    (e !== El &&
      e.next === null &&
      (El === null ? (Ci = El = e) : (El = El.next = e)),
      (Mf = !0),
      Xs || ((Xs = !0), hg()));
  }
  function Qu(e, t) {
    if (!Ks && Mf) {
      Ks = !0;
      do
        for (var n = !1, l = Ci; l !== null; ) {
          if (e !== 0) {
            var f = l.pendingLanes;
            if (f === 0) var h = 0;
            else {
              var m = l.suspendedLanes,
                C = l.pingedLanes;
              ((h = (1 << (31 - dn(42 | e) + 1)) - 1),
                (h &= f & ~(m & ~C)),
                (h = h & 201326741 ? (h & 201326741) | 1 : h ? h | 2 : 0));
            }
            h !== 0 && ((n = !0), y1(l, h));
          } else
            ((h = Ve),
              (h = oc(
                l,
                l === bt ? h : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (h & 3) === 0 || $i(l, h) || ((n = !0), y1(l, h)));
          l = l.next;
        }
      while (n);
      Ks = !1;
    }
  }
  function sg() {
    d1();
  }
  function d1() {
    Mf = Xs = !1;
    var e = 0;
    Yr !== 0 && gg() && (e = Yr);
    for (var t = Ln(), n = null, l = Ci; l !== null; ) {
      var f = l.next,
        h = g1(l, t);
      (h === 0
        ? ((l.next = null),
          n === null ? (Ci = f) : (n.next = f),
          f === null && (El = n))
        : ((n = l), (e !== 0 || (h & 3) !== 0) && (Mf = !0)),
        (l = f));
    }
    ((Kt !== 0 && Kt !== 5) || Qu(e), Yr !== 0 && (Yr = 0));
  }
  function g1(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        f = e.expirationTimes,
        h = e.pendingLanes & -62914561;
      0 < h;
    ) {
      var m = 31 - dn(h),
        C = 1 << m,
        O = f[m];
      (O === -1
        ? ((C & n) === 0 || (C & l) !== 0) && (f[m] = Td(C, t))
        : O <= t && (e.expiredLanes |= C),
        (h &= ~C));
    }
    if (
      ((t = bt),
      (n = Ve),
      (n = oc(
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
        l !== null && l !== null && qn(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || $i(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && qn(l), mo(n))) {
        case 2:
        case 8:
          n = Bl;
          break;
        case 32:
          n = Va;
          break;
        case 268435456:
          n = cc;
          break;
        default:
          n = Va;
      }
      return (
        (l = v1.bind(null, e)),
        (n = al(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && qn(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function v1(e, t) {
    if (Kt !== 0 && Kt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Xu() && e.callbackNode !== n) return null;
    var l = Ve;
    return (
      (l = oc(
        e,
        e === bt ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (r1(e, l, t),
          g1(e, Ln()),
          e.callbackNode != null && e.callbackNode === n
            ? v1.bind(null, e)
            : null)
    );
  }
  function y1(e, t) {
    if (Xu()) return null;
    r1(e, t, !0);
  }
  function hg() {
    R1(function () {
      (lt & 6) !== 0 ? al(j0, sg) : d1();
    });
  }
  function Wn() {
    if (Yr === 0) {
      var e = ei;
      (e === 0 && ((e = fc), (fc <<= 1), (fc & 261888) === 0 && (fc = 256)),
        (Yr = e));
    }
    return Yr;
  }
  function m1(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Ii('' + e);
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
  function Ol(e, t, n, l, f) {
    if (t === 'submit' && n && n.stateNode === f) {
      var h = m1((f[bn] || null).action),
        m = l.submitter;
      m &&
        ((t = (t = m[bn] || null)
          ? m1(t.formAction)
          : m.getAttribute('formAction')),
        t !== null && ((h = t), (m = null)));
      var C = new Ac('action', 'action', null, l, f);
      e.push({
        event: C,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Yr !== 0) {
                  var O = m ? p1(f, m) : new FormData(f);
                  Br(
                    n,
                    { pending: !0, data: O, method: f.method, action: h },
                    null,
                    O,
                  );
                }
              } else
                typeof h == 'function' &&
                  (C.preventDefault(),
                  (O = m ? p1(f, m) : new FormData(f)),
                  Br(
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
  for (var qe = 0; qe < Uc.length; qe++) {
    var Qs = Uc[qe],
      Mn = Qs.toLowerCase(),
      Ht = Qs[0].toUpperCase() + Qs.slice(1);
    Sn(Mn, 'on' + Ht);
  }
  (Sn(Gn, 'onAnimationEnd'),
    Sn(ru, 'onAnimationIteration'),
    Sn(sh, 'onAnimationStart'),
    Sn('dblclick', 'onDoubleClick'),
    Sn('focusin', 'onFocus'),
    Sn('focusout', 'onBlur'),
    Sn(Xl, 'onTransitionRun'),
    Sn(Bc, 'onTransitionStart'),
    Sn(Hc, 'onTransitionCancel'),
    Sn(rt, 'onTransitionEnd'),
    il('onMouseEnter', ['mouseout', 'mouseover']),
    il('onMouseLeave', ['mouseout', 'mouseover']),
    il('onPointerEnter', ['pointerout', 'pointerover']),
    il('onPointerLeave', ['pointerout', 'pointerover']),
    xr(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    xr(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    xr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    xr(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    xr(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    xr(
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
  function b1(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        f = l.event;
      l = l.listeners;
      e: {
        var h = void 0;
        if (t)
          for (var m = l.length - 1; 0 <= m; m--) {
            var C = l[m],
              O = C.instance,
              G = C.currentTarget;
            if (((C = C.listener), O !== h && f.isPropagationStopped()))
              break e;
            ((h = C), (f.currentTarget = G));
            try {
              h(f);
            } catch (ee) {
              kc(ee);
            }
            ((f.currentTarget = null), (h = O));
          }
        else
          for (m = 0; m < l.length; m++) {
            if (
              ((C = l[m]),
              (O = C.instance),
              (G = C.currentTarget),
              (C = C.listener),
              O !== h && f.isPropagationStopped())
            )
              break e;
            ((h = C), (f.currentTarget = G));
            try {
              h(f);
            } catch (ee) {
              kc(ee);
            }
            ((f.currentTarget = null), (h = O));
          }
      }
    }
  }
  function Ke(e, t) {
    var n = t[dc];
    n === void 0 && (n = t[dc] = new Set());
    var l = e + '__bubble';
    n.has(l) || (jf(t, e, 2, !1), n.add(l));
  }
  function Zs(e, t, n) {
    var l = 0;
    (t && (l |= 4), jf(n, e, l, t));
  }
  var zf = '_reactListening' + Math.random().toString(36).slice(2);
  function Vs(e) {
    if (!e[zf]) {
      ((e[zf] = !0),
        H0.forEach(function (n) {
          n !== 'selectionchange' && (Xr.has(n) || Zs(n, !1, e), Zs(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zf] || ((t[zf] = !0), Zs('selectionchange', !1, t));
    }
  }
  function jf(e, t, n, l) {
    switch (X1(t)) {
      case 2:
        var f = Eg;
        break;
      case 8:
        f = Og;
        break;
      default:
        f = u0;
    }
    ((n = f.bind(null, t, n, e)),
      (f = void 0),
      !Ao ||
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
  function Is(e, t, n, l, f) {
    var h = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var m = l.tag;
        if (m === 3 || m === 4) {
          var C = l.stateNode.containerInfo;
          if (C === f) break;
          if (m === 4)
            for (m = l.return; m !== null; ) {
              var O = m.tag;
              if ((O === 3 || O === 4) && m.stateNode.containerInfo === f)
                return;
              m = m.return;
            }
          for (; C !== null; ) {
            if (((m = Ul(C)), m === null)) return;
            if (((O = m.tag), O === 5 || O === 6 || O === 26 || O === 27)) {
              l = h = m;
              continue e;
            }
            C = C.parentNode;
          }
        }
        l = l.return;
      }
    Q0(function () {
      var G = h,
        ee = xo(n),
        ae = [];
      e: {
        var X = hh.get(e);
        if (X !== void 0) {
          var Z = Ac,
            pe = e;
          switch (e) {
            case 'keypress':
              if (xc(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              Z = Rr;
              break;
            case 'focusin':
              ((pe = 'focus'), (Z = wc));
              break;
            case 'focusout':
              ((pe = 'blur'), (Z = wc));
              break;
            case 'beforeblur':
            case 'afterblur':
              Z = wc;
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
              Z = Rc;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              Z = V0;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              Z = Hd;
              break;
            case Gn:
            case ru:
            case sh:
              Z = W0;
              break;
            case rt:
              Z = kd;
              break;
            case 'scroll':
            case 'scrollend':
              Z = qd;
              break;
            case 'wheel':
              Z = Ec;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              Z = Un;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              Z = th;
              break;
            case 'toggle':
            case 'beforetoggle':
              Z = Nd;
          }
          var Te = (t & 4) !== 0,
            yt = !Te && (e === 'scroll' || e === 'scrollend'),
            B = Te ? (X !== null ? X + 'Capture' : null) : X;
          Te = [];
          for (var q = G, k; q !== null; ) {
            var ne = q;
            if (
              ((k = ne.stateNode),
              (ne = ne.tag),
              (ne !== 5 && ne !== 26 && ne !== 27) ||
                k === null ||
                B === null ||
                ((ne = fl(q, B)), ne != null && Te.push(Pn(q, ne, k))),
              yt)
            )
              break;
            q = q.return;
          }
          0 < Te.length &&
            ((X = new Z(X, pe, null, n, ee)),
            ae.push({ event: X, listeners: Te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((X = e === 'mouseover' || e === 'pointerover'),
            (Z = e === 'mouseout' || e === 'pointerout'),
            X &&
              n !== So &&
              (pe = n.relatedTarget || n.fromElement) &&
              (Ul(pe) || pe[Hl]))
          )
            break e;
          if (
            (Z || X) &&
            ((X =
              ee.window === ee
                ? ee
                : (X = ee.ownerDocument)
                  ? X.defaultView || X.parentWindow
                  : window),
            Z
              ? ((pe = n.relatedTarget || n.toElement),
                (Z = G),
                (pe = pe ? Ul(pe) : null),
                pe !== null &&
                  ((yt = g(pe)),
                  (Te = pe.tag),
                  pe !== yt || (Te !== 5 && Te !== 27 && Te !== 6)) &&
                  (pe = null))
              : ((Z = null), (pe = G)),
            Z !== pe)
          ) {
            if (
              ((Te = Rc),
              (ne = 'onMouseLeave'),
              (B = 'onMouseEnter'),
              (q = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((Te = th),
                (ne = 'onPointerLeave'),
                (B = 'onPointerEnter'),
                (q = 'pointer')),
              (yt = Z == null ? X : Ki(Z)),
              (k = pe == null ? X : Ki(pe)),
              (X = new Te(ne, q + 'leave', Z, n, ee)),
              (X.target = yt),
              (X.relatedTarget = k),
              (ne = null),
              Ul(ee) === G &&
                ((Te = new Te(B, q + 'enter', pe, n, ee)),
                (Te.target = k),
                (Te.relatedTarget = yt),
                (ne = Te)),
              (yt = ne),
              Z && pe)
            )
              t: {
                for (Te = Df, B = Z, q = pe, k = 0, ne = B; ne; ne = Te(ne))
                  k++;
                ne = 0;
                for (var Ce = q; Ce; Ce = Te(Ce)) ne++;
                for (; 0 < k - ne; ) ((B = Te(B)), k--);
                for (; 0 < ne - k; ) ((q = Te(q)), ne--);
                for (; k--; ) {
                  if (B === q || (q !== null && B === q.alternate)) {
                    Te = B;
                    break t;
                  }
                  ((B = Te(B)), (q = Te(q)));
                }
                Te = null;
              }
            else Te = null;
            (Z !== null && wt(ae, X, Z, Te, !1),
              pe !== null && yt !== null && wt(ae, yt, pe, Te, !0));
          }
        }
        e: {
          if (
            ((X = G ? Ki(G) : window),
            (Z = X.nodeName && X.nodeName.toLowerCase()),
            Z === 'select' || (Z === 'input' && X.type === 'file'))
          )
            var nt = ih;
          else if (zo(X))
            if (dl) nt = Yd;
            else {
              nt = Fd;
              var be = qc;
            }
          else
            ((Z = X.nodeName),
              !Z ||
              Z.toLowerCase() !== 'input' ||
              (X.type !== 'checkbox' && X.type !== 'radio')
                ? G && Sc(G.elementType) && (nt = ih)
                : (nt = $d));
          if (nt && (nt = nt(e, G))) {
            jo(ae, nt, n, ee);
            break e;
          }
          (be && be(e, X, G),
            e === 'focusout' &&
              G &&
              X.type === 'number' &&
              G.memoizedProps.value != null &&
              bo(X, 'number', X.value));
        }
        switch (((be = G ? Ki(G) : window), e)) {
          case 'focusin':
            (zo(be) || be.contentEditable === 'true') &&
              ((L = be), (P = G), (Q = null));
            break;
          case 'focusout':
            Q = P = L = null;
            break;
          case 'mousedown':
            ve = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((ve = !1), De(ae, n, ee));
            break;
          case 'selectionchange':
            if (Yl) break;
          case 'keydown':
          case 'keyup':
            De(ae, n, ee);
        }
        var Ge;
        if (Oc)
          e: {
            switch (e) {
              case 'compositionstart':
                var Ie = 'onCompositionStart';
                break e;
              case 'compositionend':
                Ie = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Ie = 'onCompositionUpdate';
                break e;
            }
            Ie = void 0;
          }
        else
          hl
            ? zc(e, n) && (Ie = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (Ie = 'onCompositionStart');
        (Ie &&
          (Oo &&
            n.locale !== 'ko' &&
            (hl || Ie !== 'onCompositionStart'
              ? Ie === 'onCompositionEnd' && hl && (Ge = mt())
              : ((Cr = ee),
                (Ro = 'value' in Cr ? Cr.value : Cr.textContent),
                (hl = !0))),
          (be = Vu(G, Ie)),
          0 < be.length &&
            ((Ie = new kn(Ie, e, null, n, ee)),
            ae.push({ event: Ie, listeners: be }),
            Ge
              ? (Ie.data = Ge)
              : ((Ge = lh(n)), Ge !== null && (Ie.data = Ge)))),
          (Ge = Eo ? Nn(e, n) : Mo(e, n)) &&
            ((Ie = Vu(G, 'onBeforeInput')),
            0 < Ie.length &&
              ((be = new kn('onBeforeInput', 'beforeinput', null, n, ee)),
              ae.push({ event: be, listeners: Ie }),
              (be.data = Ge))),
          Ol(ae, e, G, n, ee));
      }
      b1(ae, t);
    });
  }
  function Pn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Vu(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var f = e,
        h = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          h === null ||
          ((f = fl(e, n)),
          f != null && l.unshift(Pn(e, f, h)),
          (f = fl(e, t)),
          f != null && l.push(Pn(e, f, h))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Df(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function wt(e, t, n, l, f) {
    for (var h = t._reactName, m = []; n !== null && n !== l; ) {
      var C = n,
        O = C.alternate,
        G = C.stateNode;
      if (((C = C.tag), O !== null && O === l)) break;
      ((C !== 5 && C !== 26 && C !== 27) ||
        G === null ||
        ((O = G),
        f
          ? ((G = fl(n, h)), G != null && m.unshift(Pn(n, G, O)))
          : f || ((G = fl(n, h)), G != null && m.push(Pn(n, G, O)))),
        (n = n.return));
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var qt = /\r\n?/g,
    _1 = /\u0000|\uFFFD/g;
  function S1(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        qt,
        `
`,
      )
      .replace(_1, '');
  }
  function x1(e, t) {
    return ((t = S1(t)), S1(e) === t);
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
        Qi(e, 'class', l);
        break;
      case 'tabIndex':
        Qi(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Qi(e, n, l);
        break;
      case 'style':
        $0(e, l, h);
        break;
      case 'data':
        if (t !== 'object') {
          Qi(e, 'data', l);
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
        ((l = Ii('' + l)), e.setAttribute(n, l));
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
        ((l = Ii('' + l)), e.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (e.onclick = Wa);
        break;
      case 'onScroll':
        l != null && Ke('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Ke('scrollend', e);
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
        ((n = Ii('' + l)),
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
        (Ke('beforetoggle', e), Ke('toggle', e), gc(e, 'popover', l));
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
        gc(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== 'o' && n[0] !== 'O') ||
          (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Y0.get(n) || n), gc(e, n, l));
    }
  }
  function Js(e, t, n, l, f, h) {
    switch (n) {
      case 'style':
        $0(e, l, h);
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
        l != null && Ke('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && Ke('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = Wa);
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
        if (!U0.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((f = n.endsWith('Capture')),
              (t = n.slice(2, f ? n.length - 7 : void 0)),
              (h = e[bn] || null),
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
                : gc(e, n, l);
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
        (Ke('error', e), Ke('load', e));
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
        Ke('invalid', e);
        var C = (h = m = f = null),
          O = null,
          G = null;
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
                  G = ee;
                  break;
                case 'value':
                  h = ee;
                  break;
                case 'defaultValue':
                  C = ee;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (ee != null) throw Error(o(137, t));
                  break;
                default:
                  vt(e, t, l, ee, n, null);
              }
          }
        pc(e, h, C, O, G, m, f, !1);
        return;
      case 'select':
        (Ke('invalid', e), (l = m = h = null));
        for (f in n)
          if (n.hasOwnProperty(f) && ((C = n[f]), C != null))
            switch (f) {
              case 'value':
                h = C;
                break;
              case 'defaultValue':
                m = C;
                break;
              case 'multiple':
                l = C;
              default:
                vt(e, t, f, C, n, null);
            }
        ((t = h),
          (n = m),
          (e.multiple = !!l),
          t != null ? ul(e, !!l, t, !1) : n != null && ul(e, !!l, n, !0));
        return;
      case 'textarea':
        (Ke('invalid', e), (h = f = l = null));
        for (m in n)
          if (n.hasOwnProperty(m) && ((C = n[m]), C != null))
            switch (m) {
              case 'value':
                l = C;
                break;
              case 'defaultValue':
                f = C;
                break;
              case 'children':
                h = C;
                break;
              case 'dangerouslySetInnerHTML':
                if (C != null) throw Error(o(91));
                break;
              default:
                vt(e, t, m, C, n, null);
            }
        _c(e, l, f, h);
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
        (Ke('beforetoggle', e),
          Ke('toggle', e),
          Ke('cancel', e),
          Ke('close', e));
        break;
      case 'iframe':
      case 'object':
        Ke('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < Zu.length; l++) Ke(Zu[l], e);
        break;
      case 'image':
        (Ke('error', e), Ke('load', e));
        break;
      case 'details':
        Ke('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (Ke('error', e), Ke('load', e));
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
        for (G in n)
          if (n.hasOwnProperty(G) && ((l = n[G]), l != null))
            switch (G) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(o(137, t));
              default:
                vt(e, t, G, l, n, null);
            }
        return;
      default:
        if (Sc(t)) {
          for (ee in n)
            n.hasOwnProperty(ee) &&
              ((l = n[ee]), l !== void 0 && Js(e, t, ee, l, n, void 0));
          return;
        }
    }
    for (C in n)
      n.hasOwnProperty(C) && ((l = n[C]), l != null && vt(e, t, C, l, n, null));
  }
  function dg(e, t, n, l) {
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
          C = null,
          O = null,
          G = null,
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
        for (var X in l) {
          var Z = l[X];
          if (((ae = n[X]), l.hasOwnProperty(X) && (Z != null || ae != null)))
            switch (X) {
              case 'type':
                h = Z;
                break;
              case 'name':
                f = Z;
                break;
              case 'checked':
                G = Z;
                break;
              case 'defaultChecked':
                ee = Z;
                break;
              case 'value':
                m = Z;
                break;
              case 'defaultValue':
                C = Z;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (Z != null) throw Error(o(137, t));
                break;
              default:
                Z !== ae && vt(e, t, X, Z, l, ae);
            }
        }
        mc(e, m, C, O, G, ee, h, f);
        return;
      case 'select':
        Z = m = C = X = null;
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
                X = h;
                break;
              case 'defaultValue':
                C = h;
                break;
              case 'multiple':
                m = h;
              default:
                h !== O && vt(e, t, f, h, l, O);
            }
        ((t = C),
          (n = m),
          (l = Z),
          X != null
            ? ul(e, !!n, X, !1)
            : !!l != !!n &&
              (t != null ? ul(e, !!n, t, !0) : ul(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        Z = X = null;
        for (C in n)
          if (
            ((f = n[C]),
            n.hasOwnProperty(C) && f != null && !l.hasOwnProperty(C))
          )
            switch (C) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                vt(e, t, C, null, l, f);
            }
        for (m in l)
          if (
            ((f = l[m]),
            (h = n[m]),
            l.hasOwnProperty(m) && (f != null || h != null))
          )
            switch (m) {
              case 'value':
                X = f;
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
        bc(e, X, Z);
        return;
      case 'option':
        for (var pe in n)
          if (
            ((X = n[pe]),
            n.hasOwnProperty(pe) && X != null && !l.hasOwnProperty(pe))
          )
            switch (pe) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                vt(e, t, pe, null, l, X);
            }
        for (O in l)
          if (
            ((X = l[O]),
            (Z = n[O]),
            l.hasOwnProperty(O) && X !== Z && (X != null || Z != null))
          )
            switch (O) {
              case 'selected':
                e.selected =
                  X && typeof X != 'function' && typeof X != 'symbol';
                break;
              default:
                vt(e, t, O, X, l, Z);
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
          ((X = n[Te]),
            n.hasOwnProperty(Te) &&
              X != null &&
              !l.hasOwnProperty(Te) &&
              vt(e, t, Te, null, l, X));
        for (G in l)
          if (
            ((X = l[G]),
            (Z = n[G]),
            l.hasOwnProperty(G) && X !== Z && (X != null || Z != null))
          )
            switch (G) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (X != null) throw Error(o(137, t));
                break;
              default:
                vt(e, t, G, X, l, Z);
            }
        return;
      default:
        if (Sc(t)) {
          for (var yt in n)
            ((X = n[yt]),
              n.hasOwnProperty(yt) &&
                X !== void 0 &&
                !l.hasOwnProperty(yt) &&
                Js(e, t, yt, void 0, l, X));
          for (ee in l)
            ((X = l[ee]),
              (Z = n[ee]),
              !l.hasOwnProperty(ee) ||
                X === Z ||
                (X === void 0 && Z === void 0) ||
                Js(e, t, ee, X, l, Z));
          return;
        }
    }
    for (var B in n)
      ((X = n[B]),
        n.hasOwnProperty(B) &&
          X != null &&
          !l.hasOwnProperty(B) &&
          vt(e, t, B, null, l, X));
    for (ae in l)
      ((X = l[ae]),
        (Z = n[ae]),
        !l.hasOwnProperty(ae) ||
          X === Z ||
          (X == null && Z == null) ||
          vt(e, t, ae, X, l, Z));
  }
  function Ws(e) {
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
  function Iu() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), l = 0;
        l < n.length;
        l++
      ) {
        var f = n[l],
          h = f.transferSize,
          m = f.initiatorType,
          C = f.duration;
        if (h && C && Ws(m)) {
          for (m = 0, C = f.responseEnd, l += 1; l < n.length; l++) {
            var O = n[l],
              G = O.startTime;
            if (G > C) break;
            var ee = O.transferSize,
              ae = O.initiatorType;
            ee &&
              Ws(ae) &&
              ((O = O.responseEnd),
              (m += ee * (O < C ? 1 : (C - G) / (O - G))));
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
  var Ju = null,
    Ps = null;
  function Wu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Pu(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function zn(e, t) {
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
  var e0 = null;
  function gg() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === e0
        ? !1
        : ((e0 = e), !0)
      : ((e0 = null), !1);
  }
  var C1 = typeof setTimeout == 'function' ? setTimeout : void 0,
    vg = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    A1 = typeof Promise == 'function' ? Promise : void 0,
    R1 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof A1 < 'u'
          ? function (e) {
              return A1.resolve(null).then(e).catch(yr);
            }
          : C1;
  function yr(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ee(e) {
    return e === 'head';
  }
  function t0(e, t) {
    var n = t,
      l = 0;
    do {
      var f = n.nextSibling;
      if ((e.removeChild(n), f && f.nodeType === 8))
        if (((n = f.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (e.removeChild(f), ji(t));
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
        else if (n === 'html') ec(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), ec(n));
          for (var h = n.firstChild; h; ) {
            var m = h.nextSibling,
              C = h.nodeName;
            (h[Xi] ||
              C === 'SCRIPT' ||
              C === 'STYLE' ||
              (C === 'LINK' && h.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(h),
              (h = m));
          }
        } else n === 'body' && ec(e.ownerDocument.body);
      n = f;
    } while (n);
    ji(t);
  }
  function ea(e, t) {
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
  function qf(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (qf(n), po(n));
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
  function yg(e, t, n, l) {
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
      if (((e = ya(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function ct(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !n) ||
        ((e = ya(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function w1(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !t) ||
        ((e = ya(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Lf(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Ai(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function mg(e, t) {
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
  function ya(e) {
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
  var n0 = null;
  function T1(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return ya(e.nextSibling);
          t--;
        } else
          (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function E1(e) {
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
  function O1(e, t, n) {
    switch (((t = Wu(n)), e)) {
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
  function ec(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    po(e);
  }
  var ma = new Map(),
    M1 = new Set();
  function Bf(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var mr = he.d;
  he.d = { f: pg, r: bg, D: a0, C: _g, L: Sg, m: xg, X: jn, S: It, M: Cg };
  function pg() {
    var e = mr.f(),
      t = Rf();
    return e || t;
  }
  function bg(e) {
    var t = Ia(e);
    t !== null && t.tag === 5 && t.type === 'form' ? us(t) : mr.r(e);
  }
  var Qr = typeof document > 'u' ? null : document;
  function z1(e, t, n) {
    var l = Qr;
    if (l && typeof t == 'string' && t) {
      var f = Hn(t);
      ((f = 'link[rel="' + e + '"][href="' + f + '"]'),
        typeof n == 'string' && (f += '[crossorigin="' + n + '"]'),
        M1.has(f) ||
          (M1.add(f),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(f) === null &&
            ((t = l.createElement('link')),
            rn(t, 'link', e),
            Zt(t),
            l.head.appendChild(t))));
    }
  }
  function a0(e) {
    (mr.D(e), z1('dns-prefetch', e, null));
  }
  function _g(e, t) {
    (mr.C(e, t), z1('preconnect', e, t));
  }
  function Sg(e, t, n) {
    mr.L(e, t, n);
    var l = Qr;
    if (l && e && t) {
      var f = 'link[rel="preload"][as="' + Hn(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((f += '[imagesrcset="' + Hn(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' &&
            (f += '[imagesizes="' + Hn(n.imageSizes) + '"]'))
        : (f += '[href="' + Hn(e) + '"]');
      var h = f;
      switch (t) {
        case 'style':
          h = Ri(e);
          break;
        case 'script':
          h = Ti(e);
      }
      ma.has(h) ||
        ((e = w(
          {
            rel: 'preload',
            href: t === 'image' && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        ma.set(h, e),
        l.querySelector(f) !== null ||
          (t === 'style' && l.querySelector(wi(h))) ||
          (t === 'script' && l.querySelector(Ei(h))) ||
          ((t = l.createElement('link')),
          rn(t, 'link', e),
          Zt(t),
          l.head.appendChild(t)));
    }
  }
  function xg(e, t) {
    mr.m(e, t);
    var n = Qr;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        f =
          'link[rel="modulepreload"][as="' + Hn(l) + '"][href="' + Hn(e) + '"]',
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
        ((e = w({ rel: 'modulepreload', href: e }, t)),
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
          Zt(l),
          n.head.appendChild(l));
      }
    }
  }
  function It(e, t, n) {
    mr.S(e, t, n);
    var l = Qr;
    if (l && e) {
      var f = Ja(l).hoistableStyles,
        h = Ri(e);
      t = t || 'default';
      var m = f.get(h);
      if (!m) {
        var C = { loading: 0, preload: null };
        if ((m = l.querySelector(wi(h)))) C.loading = 5;
        else {
          ((e = w({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = ma.get(h)) && r0(e, n));
          var O = (m = l.createElement('link'));
          (Zt(O),
            rn(O, 'link', e),
            (O._p = new Promise(function (G, ee) {
              ((O.onload = G), (O.onerror = ee));
            })),
            O.addEventListener('load', function () {
              C.loading |= 1;
            }),
            O.addEventListener('error', function () {
              C.loading |= 2;
            }),
            (C.loading |= 4),
            Hf(m, t, l));
        }
        ((m = { type: 'stylesheet', instance: m, count: 1, state: C }),
          f.set(h, m));
      }
    }
  }
  function jn(e, t) {
    mr.X(e, t);
    var n = Qr;
    if (n && e) {
      var l = Ja(n).hoistableScripts,
        f = Ti(e),
        h = l.get(f);
      h ||
        ((h = n.querySelector(Ei(f))),
        h ||
          ((e = w({ src: e, async: !0 }, t)),
          (t = ma.get(f)) && Uf(e, t),
          (h = n.createElement('script')),
          Zt(h),
          rn(h, 'link', e),
          n.head.appendChild(h)),
        (h = { type: 'script', instance: h, count: 1, state: null }),
        l.set(f, h));
    }
  }
  function Cg(e, t) {
    mr.M(e, t);
    var n = Qr;
    if (n && e) {
      var l = Ja(n).hoistableScripts,
        f = Ti(e),
        h = l.get(f);
      h ||
        ((h = n.querySelector(Ei(f))),
        h ||
          ((e = w({ src: e, async: !0, type: 'module' }, t)),
          (t = ma.get(f)) && Uf(e, t),
          (h = n.createElement('script')),
          Zt(h),
          rn(h, 'link', e),
          n.head.appendChild(h)),
        (h = { type: 'script', instance: h, count: 1, state: null }),
        l.set(f, h));
    }
  }
  function j1(e, t, n, l) {
    var f = (f = Fe.current) ? Bf(f) : null;
    if (!f) throw Error(o(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = Ri(n.href)),
            (n = Ja(f).hoistableStyles),
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
          e = Ri(n.href);
          var h = Ja(f).hoistableStyles,
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
              (h = f.querySelector(wi(e))) &&
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
                h || Ag(f, e, n, m.state))),
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
              (n = Ja(f).hoistableScripts),
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
  function Ri(e) {
    return 'href="' + Hn(e) + '"';
  }
  function wi(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function D1(e) {
    return w({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Ag(e, t, n, l) {
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
        Zt(t),
        e.head.appendChild(t));
  }
  function Ti(e) {
    return '[src="' + Hn(e) + '"]';
  }
  function Ei(e) {
    return 'script[async]' + e;
  }
  function q1(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + Hn(n.href) + '"]');
          if (l) return ((t.instance = l), Zt(l), l);
          var f = w({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Zt(l),
            rn(l, 'style', f),
            Hf(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          f = Ri(n.href);
          var h = e.querySelector(wi(f));
          if (h) return ((t.state.loading |= 4), (t.instance = h), Zt(h), h);
          ((l = D1(n)),
            (f = ma.get(f)) && r0(l, f),
            (h = (e.ownerDocument || e).createElement('link')),
            Zt(h));
          var m = h;
          return (
            (m._p = new Promise(function (C, O) {
              ((m.onload = C), (m.onerror = O));
            })),
            rn(h, 'link', l),
            (t.state.loading |= 4),
            Hf(h, n.precedence, e),
            (t.instance = h)
          );
        case 'script':
          return (
            (h = Ti(n.src)),
            (f = e.querySelector(Ei(h)))
              ? ((t.instance = f), Zt(f), f)
              : ((l = n),
                (f = ma.get(h)) && ((l = w({}, n)), Uf(l, f)),
                (e = e.ownerDocument || e),
                (f = e.createElement('script')),
                Zt(f),
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
        ((l = t.instance), (t.state.loading |= 4), Hf(l, n.precedence, e));
    return t.instance;
  }
  function Hf(e, t, n) {
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
      var C = l[m];
      if (C.dataset.precedence === t) h = C;
      else if (h !== f) break;
    }
    h
      ? h.parentNode.insertBefore(e, h.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function r0(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Uf(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var tc = null;
  function L1(e, t, n) {
    if (tc === null) {
      var l = new Map(),
        f = (tc = new Map());
      f.set(n, l);
    } else ((f = tc), (l = f.get(n)), l || ((l = new Map()), f.set(n, l)));
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
        var C = l.get(m);
        C ? C.push(h) : l.set(m, [h]);
      }
    }
    return l;
  }
  function B1(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === 'title' ? e.querySelector('head > title') : null,
      ));
  }
  function Rg(e, t, n) {
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
  function H1(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function Oi(e, t, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var f = Ri(l.href),
          h = t.querySelector(wi(f));
        if (h) {
          ((t = h._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = kf.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = h),
            Zt(h));
          return;
        }
        ((h = t.ownerDocument || t),
          (l = D1(l)),
          (f = ma.get(f)) && r0(l, f),
          (h = h.createElement('link')),
          Zt(h));
        var m = h;
        ((m._p = new Promise(function (C, O) {
          ((m.onload = C), (m.onerror = O));
        })),
          rn(h, 'link', l),
          (n.instance = h));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = kf.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var l0 = 0;
  function wg(e, t) {
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
            0 < e.imgBytes && l0 === 0 && (l0 = 62500 * Iu());
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
              (e.imgBytes > l0 ? 50 : 800) + t,
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
  function kf() {
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
        t.forEach(U1, e),
        (Nf = null),
        kf.call(e)));
  }
  function U1(e, t) {
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
        (l = kf.bind(this)),
        f.addEventListener('load', l),
        f.addEventListener('error', l),
        h
          ? h.parentNode.insertBefore(f, h.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(f, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var Mi = {
    $$typeof: F,
    Provider: null,
    Consumer: null,
    _currentValue: _e,
    _currentValue2: _e,
    _threadCount: 0,
  };
  function Tg(e, t, n, l, f, h, m, C, O) {
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
      (this.expirationTimes = vo(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = vo(0)),
      (this.hiddenUpdates = vo(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = f),
      (this.onCaughtError = h),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = O),
      (this.incompleteTransitions = new Map()));
  }
  function k1(e, t, n, l, f, h, m, C, O, G, ee, ae) {
    return (
      (e = new Tg(e, t, n, m, O, G, ee, ae, C)),
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
      Na(h),
      e
    );
  }
  function N1(e) {
    return e ? ((e = tr), e) : tr;
  }
  function G1(e, t, n, l, f, h) {
    ((f = N1(f)),
      l.context === null ? (l.context = f) : (l.pendingContext = f),
      (l = Dr(t)),
      (l.payload = { element: n }),
      (h = h === void 0 ? null : h),
      h !== null && (l.callback = h),
      (n = Ra(e, l, t)),
      n !== null && (On(n, e, t), hu(n, e, t)));
  }
  function F1(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function i0(e, t) {
    (F1(e, t), (e = e.alternate) && F1(e, t));
  }
  function $1(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ha(e, 67108864);
      (t !== null && On(t, e, 67108864), i0(e, 67108864));
    }
  }
  function Y1(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Jn();
      t = yo(t);
      var n = Ha(e, t);
      (n !== null && On(n, e, t), i0(e, t));
    }
  }
  var Ff = !0;
  function Eg(e, t, n, l) {
    var f = W.T;
    W.T = null;
    var h = he.p;
    try {
      ((he.p = 2), u0(e, t, n, l));
    } finally {
      ((he.p = h), (W.T = f));
    }
  }
  function Og(e, t, n, l) {
    var f = W.T;
    W.T = null;
    var h = he.p;
    try {
      ((he.p = 8), u0(e, t, n, l));
    } finally {
      ((he.p = h), (W.T = f));
    }
  }
  function u0(e, t, n, l) {
    if (Ff) {
      var f = c0(l);
      if (f === null) (Is(e, t, l, $f, n), K1(e, l));
      else if (Q1(f, e, t, n, l)) l.stopPropagation();
      else if ((K1(e, l), t & 4 && -1 < Mg.indexOf(e))) {
        for (; f !== null; ) {
          var h = Ia(f);
          if (h !== null)
            switch (h.tag) {
              case 3:
                if (((h = h.stateNode), h.current.memoizedState.isDehydrated)) {
                  var m = ll(h.pendingLanes);
                  if (m !== 0) {
                    var C = h;
                    for (C.pendingLanes |= 2, C.entangledLanes |= 2; m; ) {
                      var O = 1 << (31 - dn(m));
                      ((C.entanglements[1] |= O), (m &= ~O));
                    }
                    (Xa(h), (lt & 6) === 0 && ((Tl = Ln() + 500), Qu(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((C = Ha(h, 2)), C !== null && On(C, h, 2), Rf(), i0(h, 2));
            }
          if (((h = c0(l)), h === null && Is(e, t, l, $f, n), h === f)) break;
          f = h;
        }
        f !== null && l.stopPropagation();
      } else Is(e, t, l, null, n);
    }
  }
  function c0(e) {
    return ((e = xo(e)), f0(e));
  }
  var $f = null;
  function f0(e) {
    if ((($f = null), (e = Ul(e)), e !== null)) {
      var t = g(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = v(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (($f = e), null);
  }
  function X1(e) {
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
          case j0:
            return 2;
          case Bl:
            return 8;
          case Va:
          case fo:
            return 32;
          case cc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var o0 = !1,
    Zr = null,
    Vr = null,
    Ir = null,
    nc = new Map(),
    ac = new Map(),
    Jr = [],
    Mg =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function K1(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        Zr = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Vr = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Ir = null;
        break;
      case 'pointerover':
      case 'pointerout':
        nc.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        ac.delete(t.pointerId);
    }
  }
  function Ml(e, t, n, l, f, h) {
    return e === null || e.nativeEvent !== h
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: h,
          targetContainers: [f],
        }),
        t !== null && ((t = Ia(t)), t !== null && $1(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        f !== null && t.indexOf(f) === -1 && t.push(f),
        e);
  }
  function Q1(e, t, n, l, f) {
    switch (t) {
      case 'focusin':
        return ((Zr = Ml(Zr, e, t, n, l, f)), !0);
      case 'dragenter':
        return ((Vr = Ml(Vr, e, t, n, l, f)), !0);
      case 'mouseover':
        return ((Ir = Ml(Ir, e, t, n, l, f)), !0);
      case 'pointerover':
        var h = f.pointerId;
        return (nc.set(h, Ml(nc.get(h) || null, e, t, n, l, f)), !0);
      case 'gotpointercapture':
        return (
          (h = f.pointerId),
          ac.set(h, Ml(ac.get(h) || null, e, t, n, l, f)),
          !0
        );
    }
    return !1;
  }
  function s0(e) {
    var t = Ul(e.target);
    if (t !== null) {
      var n = g(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = v(n)), t !== null)) {
            ((e.blockedOn = t),
              L0(e.priority, function () {
                Y1(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = p(n)), t !== null)) {
            ((e.blockedOn = t),
              L0(e.priority, function () {
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
  function Yf(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = c0(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((So = l), n.target.dispatchEvent(l), (So = null));
      } else return ((t = Ia(n)), t !== null && $1(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Z1(e, t, n) {
    Yf(e) && n.delete(t);
  }
  function zg() {
    ((o0 = !1),
      Zr !== null && Yf(Zr) && (Zr = null),
      Vr !== null && Yf(Vr) && (Vr = null),
      Ir !== null && Yf(Ir) && (Ir = null),
      nc.forEach(Z1),
      ac.forEach(Z1));
  }
  function zi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      o0 ||
        ((o0 = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, zg)));
  }
  var Xf = null;
  function V1(e) {
    Xf !== e &&
      ((Xf = e),
      r.unstable_scheduleCallback(r.unstable_NormalPriority, function () {
        Xf === e && (Xf = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            f = e[t + 2];
          if (typeof l != 'function') {
            if (f0(l || n) === null) continue;
            break;
          }
          var h = Ia(n);
          h !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Br(h, { pending: !0, data: f, method: n.method, action: l }, l, f));
        }
      }));
  }
  function ji(e) {
    function t(O) {
      return zi(O, e);
    }
    (Zr !== null && zi(Zr, e),
      Vr !== null && zi(Vr, e),
      Ir !== null && zi(Ir, e),
      nc.forEach(t),
      ac.forEach(t));
    for (var n = 0; n < Jr.length; n++) {
      var l = Jr[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Jr.length && ((n = Jr[0]), n.blockedOn === null); )
      (s0(n), n.blockedOn === null && Jr.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var f = n[l],
          h = n[l + 1],
          m = f[bn] || null;
        if (typeof h == 'function') m || V1(n);
        else if (m) {
          var C = null;
          if (h && h.hasAttribute('formAction')) {
            if (((f = h), (m = h[bn] || null))) C = m.formAction;
            else if (f0(f) !== null) continue;
          } else C = m.action;
          (typeof C == 'function' ? (n[l + 1] = C) : (n.splice(l, 3), (l -= 3)),
            V1(n));
        }
      }
  }
  function mn() {
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
  function rc(e) {
    this._internalRoot = e;
  }
  ((Kf.prototype.render = rc.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var n = t.current,
        l = Jn();
      G1(n, l, e, t, null, null);
    }),
    (Kf.prototype.unmount = rc.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (G1(e.current, 2, null, e, null, null), Rf(), (t[Hl] = null));
        }
      }));
  function Kf(e) {
    this._internalRoot = e;
  }
  Kf.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = q0();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Jr.length && t !== 0 && t < Jr[n].priority; n++);
      (Jr.splice(n, 0, e), n === 0 && s0(e));
    }
  };
  var I1 = c.version;
  if (I1 !== '19.2.4') throw Error(o(527, I1, '19.2.4'));
  he.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(o(188))
        : ((e = Object.keys(e).join(',')), Error(o(268, e)));
    return (
      (e = S(t)),
      (e = e !== null ? T(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var jg = {
    bundleType: 0,
    version: '19.2.4',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: W,
    reconcilerVersion: '19.2.4',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Qf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qf.isDisabled && Qf.supportsFiber)
      try {
        ((rl = Qf.inject(jg)), (hn = Qf));
      } catch {}
  }
  return (
    (g0.createRoot = function (e, t) {
      if (!d(e)) throw Error(o(299));
      var n = !1,
        l = '',
        f = hs,
        h = ds,
        m = Lh;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (f = t.onUncaughtError),
          t.onCaughtError !== void 0 && (h = t.onCaughtError),
          t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        (t = k1(e, 1, !1, null, null, n, l, null, f, h, m, mn)),
        (e[Hl] = t.current),
        Vs(e),
        new rc(t)
      );
    }),
    (g0.hydrateRoot = function (e, t, n) {
      if (!d(e)) throw Error(o(299));
      var l = !1,
        f = '',
        h = hs,
        m = ds,
        C = Lh,
        O = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (f = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (h = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (C = n.onRecoverableError),
          n.formState !== void 0 && (O = n.formState)),
        (t = k1(e, 1, !0, t, n ?? null, l, f, O, h, m, C, mn)),
        (t.context = N1(null)),
        (n = t.current),
        (l = Jn()),
        (l = yo(l)),
        (f = Dr(l)),
        (f.callback = null),
        Ra(n, f, l),
        (n = l),
        (t.current.lanes = n),
        Yi(t, n),
        Xa(t),
        (e[Hl] = t.current),
        Vs(e),
        new Kf(t)
      );
    }),
    (g0.version = '19.2.4'),
    g0
  );
}
var Kp;
function eS() {
  if (Kp) return Lg.exports;
  Kp = 1;
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
  return (r(), (Lg.exports = P5()), Lg.exports);
}
var tS = eS();
const z8 = Object.freeze({
    pallete: 'primary',
    zIndex: { tooltip: 10, selectItems: 50 },
    transitions: { default: 'all 0.2s linear' },
    padding: { small: 5, big: 12, medium: 8 },
    textSize: { small: 0.5, medium: 0.9, big: 1.2 },
    media: {
      smallDevices: '(max-height: 701px)',
      otherDevices: '(min-height: 702px)',
    },
    getCurrentPallete() {
      return this.pallete === 'light'
        ? {
            color: this.lightScreen,
            text: this.lightScreenText,
            highlight: this.lightGrey,
            contrast: this.color,
            shadow: this.shadow,
          }
        : this.pallete === 'dark'
          ? {
              color: this.darkScreen,
              text: this.darkScreenText,
              highlight: this.darkGrey,
              contrast: this.color,
              shadow: this.shadow,
            }
          : {
              color: this.color,
              text: this.text,
              highlight: this.highlight,
              contrast: this.highlight,
              shadow: this.shadow,
            };
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
var M = sp();
const aS = (r, c) => {
  const u = { ...r };
  for (const o of c) delete u[o];
  return u;
};
var Mt = '-ms-',
  _0 = '-moz-',
  ht = '-webkit-',
  j8 = 'comm',
  hp = 'rule',
  dp = 'decl',
  rS = '@import',
  lS = '@namespace',
  D8 = '@keyframes',
  iS = '@layer',
  uS = Math.abs,
  S0 = String.fromCharCode,
  cp = Object.assign;
function cS(r, c) {
  return ln(r, 0) ^ 45
    ? (((((((c << 2) ^ ln(r, 0)) << 2) ^ ln(r, 1)) << 2) ^ ln(r, 2)) << 2) ^
        ln(r, 3)
    : 0;
}
function q8(r) {
  return r.trim();
}
function jl(r, c) {
  return (r = c.exec(r)) ? r[0] : r;
}
function Qe(r, c, u) {
  return r.replace(c, u);
}
function Ng(r, c) {
  return r.indexOf(c);
}
function ln(r, c) {
  return r.charCodeAt(c) | 0;
}
function lc(r, c, u) {
  return r.slice(c, u);
}
function br(r) {
  return r.length;
}
function L8(r) {
  return r.length;
}
function y0(r, c) {
  return (c.push(r), r);
}
function fS(r, c) {
  return r.map(c).join('');
}
function Qp(r, c) {
  return r.filter(function (u) {
    return !jl(u, c);
  });
}
var ld = 1,
  Wf = 1,
  B8 = 0,
  Qa = 0,
  Jt = 0,
  eo = '';
function id(r, c, u, o, d, g, v, p) {
  return {
    value: r,
    root: c,
    parent: u,
    type: o,
    props: d,
    children: g,
    line: ld,
    column: Wf,
    length: v,
    return: '',
    siblings: p,
  };
}
function Di(r, c) {
  return cp(
    id('', null, null, '', null, null, 0, r.siblings),
    r,
    { length: -r.length },
    c,
  );
}
function Zf(r) {
  for (; r.root; ) r = Di(r.root, { children: [r] });
  y0(r, r.siblings);
}
function oS() {
  return Jt;
}
function sS() {
  return (
    (Jt = Qa > 0 ? ln(eo, --Qa) : 0),
    Wf--,
    Jt === 10 && ((Wf = 1), ld--),
    Jt
  );
}
function _r() {
  return (
    (Jt = Qa < B8 ? ln(eo, Qa++) : 0),
    Wf++,
    Jt === 10 && ((Wf = 1), ld++),
    Jt
  );
}
function Li() {
  return ln(eo, Qa);
}
function W1() {
  return Qa;
}
function ud(r, c) {
  return lc(eo, r, c);
}
function C0(r) {
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
function hS(r) {
  return ((ld = Wf = 1), (B8 = br((eo = r))), (Qa = 0), []);
}
function dS(r) {
  return ((eo = ''), r);
}
function Gg(r) {
  return q8(ud(Qa - 1, fp(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function gS(r) {
  for (; (Jt = Li()) && Jt < 33; ) _r();
  return C0(r) > 2 || C0(Jt) > 3 ? '' : ' ';
}
function vS(r, c) {
  for (
    ;
    --c &&
    _r() &&
    !(Jt < 48 || Jt > 102 || (Jt > 57 && Jt < 65) || (Jt > 70 && Jt < 97));
  );
  return ud(r, W1() + (c < 6 && Li() == 32 && _r() == 32));
}
function fp(r) {
  for (; _r(); )
    switch (Jt) {
      case r:
        return Qa;
      case 34:
      case 39:
        r !== 34 && r !== 39 && fp(Jt);
        break;
      case 40:
        r === 41 && fp(r);
        break;
      case 92:
        _r();
        break;
    }
  return Qa;
}
function yS(r, c) {
  for (; _r() && r + Jt !== 57 && !(r + Jt === 84 && Li() === 47); );
  return '/*' + ud(c, Qa - 1) + '*' + S0(r === 47 ? r : _r());
}
function mS(r) {
  for (; !C0(Li()); ) _r();
  return ud(r, Qa);
}
function Zp(r) {
  return dS(P1('', null, null, null, [''], (r = hS(r)), 0, [0], r));
}
function P1(r, c, u, o, d, g, v, p, _) {
  for (
    var S = 0,
      T = 0,
      w = v,
      z = 0,
      U = 0,
      K = 0,
      N = 1,
      $ = 1,
      J = 1,
      te = 0,
      F = 0,
      I = '',
      oe = d,
      re = g,
      V = o,
      ce = I;
    $;
  )
    switch (((K = F), (F = _r()))) {
      case 40:
        K != 108 && ln(ce, w - 1) == 58 ? (te++, (ce += '(')) : (ce += Gg(F));
        break;
      case 41:
        (te--, (ce += ')'));
        break;
      case 34:
      case 39:
      case 91:
        ce += Gg(F);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        if (te > 0) {
          ce += S0(F);
          break;
        }
        ce += gS(K);
        break;
      case 92:
        ce += vS(W1() - 1, 7);
        continue;
      case 47:
        switch (Li()) {
          case 42:
          case 47:
            (y0(pS(yS(_r(), W1()), c, u, _), _),
              (C0(K || 1) == 5 || C0(Li() || 1) == 5) &&
                br(ce) &&
                lc(ce, -1, void 0) !== ' ' &&
                (ce += ' '));
            break;
          default:
            ce += '/';
        }
        break;
      case 123 * N:
        p[S++] = br(ce) * J;
      case 125 * N:
      case 59:
      case 0:
        if (te > 0 && F) {
          ce += S0(F);
          break;
        }
        switch (F) {
          case 0:
          case 125:
            $ = 0;
          case 59 + T:
            (J == -1 && (ce = Qe(ce, /\f/g, '')),
              U > 0 &&
                (br(ce) - w || N === 0) &&
                y0(
                  U > 32
                    ? Ip(ce + ';', o, u, w - 1, _)
                    : Ip(Qe(ce, ' ', '') + ';', o, u, w - 2, _),
                  _,
                ));
            break;
          case 59:
            ce += ';';
          default:
            if (
              (y0(
                (V = Vp(ce, c, u, S, T, d, p, I, (oe = []), (re = []), w, g)),
                g,
              ),
              F === 123)
            )
              if (T === 0) P1(ce, c, V, V, oe, g, w, p, re);
              else {
                switch (z) {
                  case 99:
                    if (ln(ce, 3) === 110) break;
                  case 108:
                    if (ln(ce, 2) === 97) break;
                  default:
                    T = 0;
                  case 100:
                  case 109:
                  case 115:
                }
                T
                  ? P1(
                      r,
                      V,
                      V,
                      o &&
                        y0(Vp(r, V, V, 0, 0, d, p, I, d, (oe = []), w, re), re),
                      d,
                      re,
                      w,
                      p,
                      o ? oe : re,
                    )
                  : P1(ce, V, V, V, [''], re, 0, p, re);
              }
        }
        ((S = T = U = 0), (N = J = 1), (I = ce = ''), (w = v));
        break;
      case 58:
        ((w = 1 + br(ce)), (U = K));
      default:
        if (N < 1) {
          if (F == 123) --N;
          else if (F == 125 && N++ == 0 && sS() == 125) continue;
        }
        switch (((ce += S0(F)), F * N)) {
          case 38:
            J = T > 0 ? 1 : ((ce += '\f'), -1);
            break;
          case 44:
            if (te > 0) break;
            ((p[S++] = (br(ce) - 1) * J), (J = 1));
            break;
          case 64:
            (Li() === 45 && (ce += Gg(_r())),
              (z = Li()),
              (T = w = br((I = ce += mS(W1())))),
              F++);
            break;
          case 45:
            K === 45 && br(ce) == 2 && (N = 0);
        }
    }
  return g;
}
function Vp(r, c, u, o, d, g, v, p, _, S, T, w) {
  for (
    var z = d - 1, U = d === 0 ? g : [''], K = L8(U), N = 0, $ = 0, J = 0;
    N < o;
    ++N
  )
    for (
      var te = 0, F = lc(r, z + 1, (z = uS(($ = v[N])))), I = r;
      te < K;
      ++te
    )
      (I = q8($ > 0 ? U[te] + ' ' + F : Qe(F, /&\f/g, U[te]))) && (_[J++] = I);
  return id(r, c, u, d === 0 ? hp : p, _, S, T, w);
}
function pS(r, c, u, o) {
  return id(r, c, u, j8, S0(oS()), lc(r, 2, -2), 0, o);
}
function Ip(r, c, u, o, d) {
  return id(r, c, u, dp, lc(r, 0, o), lc(r, o + 1, -1), o, d);
}
function H8(r, c, u) {
  switch (cS(r, c)) {
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
      return _0 + r + r;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ht + r + _0 + r + Mt + r + r;
    case 5936:
      switch (ln(r, c + 11)) {
        case 114:
          return ht + r + Mt + Qe(r, /[svh]\w+-[tblr]{2}/, 'tb') + r;
        case 108:
          return ht + r + Mt + Qe(r, /[svh]\w+-[tblr]{2}/, 'tb-rl') + r;
        case 45:
          return ht + r + Mt + Qe(r, /[svh]\w+-[tblr]{2}/, 'lr') + r;
      }
    case 6828:
    case 4268:
    case 2903:
      return ht + r + Mt + r + r;
    case 6165:
      return ht + r + Mt + 'flex-' + r + r;
    case 5187:
      return (
        ht + r + Qe(r, /(\w+).+(:[^]+)/, ht + 'box-$1$2' + Mt + 'flex-$1$2') + r
      );
    case 5443:
      return (
        ht +
        r +
        Mt +
        'flex-item-' +
        Qe(r, /flex-|-self/g, '') +
        (jl(r, /flex-|baseline/)
          ? ''
          : Mt + 'grid-row-' + Qe(r, /flex-|-self/g, '')) +
        r
      );
    case 4675:
      return (
        ht +
        r +
        Mt +
        'flex-line-pack' +
        Qe(r, /align-content|flex-|-self/g, '') +
        r
      );
    case 5548:
      return ht + r + Mt + Qe(r, 'shrink', 'negative') + r;
    case 5292:
      return ht + r + Mt + Qe(r, 'basis', 'preferred-size') + r;
    case 6060:
      return (
        ht +
        'box-' +
        Qe(r, '-grow', '') +
        ht +
        r +
        Mt +
        Qe(r, 'grow', 'positive') +
        r
      );
    case 4554:
      return ht + Qe(r, /([^-])(transform)/g, '$1' + ht + '$2') + r;
    case 6187:
      return (
        Qe(
          Qe(Qe(r, /(zoom-|grab)/, ht + '$1'), /(image-set)/, ht + '$1'),
          r,
          '',
        ) + r
      );
    case 5495:
    case 3959:
      return Qe(r, /(image-set\([^]*)/, ht + '$1$`$1');
    case 4968:
      return (
        Qe(
          Qe(r, /(.+:)(flex-)?(.*)/, ht + 'box-pack:$3' + Mt + 'flex-pack:$3'),
          /space-between/,
          'justify',
        ) +
        ht +
        r +
        r
      );
    case 4200:
      if (!jl(r, /flex-|baseline/))
        return Mt + 'grid-column-align' + lc(r, c) + r;
      break;
    case 2592:
    case 3360:
      return Mt + Qe(r, 'template-', '') + r;
    case 4384:
    case 3616:
      return u &&
        u.some(function (o, d) {
          return ((c = d), jl(o.props, /grid-\w+-end/));
        })
        ? ~Ng(r + (u = u[c].value), 'span')
          ? r
          : Mt +
            Qe(r, '-start', '') +
            r +
            Mt +
            'grid-row-span:' +
            (~Ng(u, 'span') ? jl(u, /\d+/) : +jl(u, /\d+/) - +jl(r, /\d+/)) +
            ';'
        : Mt + Qe(r, '-start', '') + r;
    case 4896:
    case 4128:
      return u &&
        u.some(function (o) {
          return jl(o.props, /grid-\w+-start/);
        })
        ? r
        : Mt + Qe(Qe(r, '-end', '-span'), 'span ', '') + r;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Qe(r, /(.+)-inline(.+)/, ht + '$1$2') + r;
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
      if (br(r) - 1 - c > 6)
        switch (ln(r, c + 1)) {
          case 109:
            if (ln(r, c + 4) !== 45) break;
          case 102:
            return (
              Qe(
                r,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  ht +
                  '$2-$3$1' +
                  _0 +
                  (ln(r, c + 3) == 108 ? '$3' : '$2-$3'),
              ) + r
            );
          case 115:
            return ~Ng(r, 'stretch')
              ? H8(Qe(r, 'stretch', 'fill-available'), c, u) + r
              : r;
        }
      break;
    case 5152:
    case 5920:
      return Qe(
        r,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (o, d, g, v, p, _, S) {
          return (
            Mt +
            d +
            ':' +
            g +
            S +
            (v ? Mt + d + '-span:' + (p ? _ : +_ - +g) + S : '') +
            r
          );
        },
      );
    case 4949:
      if (ln(r, c + 6) === 121) return Qe(r, ':', ':' + ht) + r;
      break;
    case 6444:
      switch (ln(r, ln(r, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            Qe(
              r,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              '$1' +
                ht +
                (ln(r, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                ht +
                '$2$3$1' +
                Mt +
                '$2box$3',
            ) + r
          );
        case 100:
          return Qe(r, ':', ':' + Mt) + r;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Qe(r, 'scroll-', 'scroll-snap-') + r;
  }
  return r;
}
function A0(r, c) {
  for (var u = '', o = 0; o < r.length; o++) u += c(r[o], o, r, c) || '';
  return u;
}
function Jp(r, c, u, o) {
  switch (r.type) {
    case iS:
      if (r.children.length) break;
    case rS:
    case lS:
    case dp:
      return (r.return = r.return || r.value);
    case j8:
      return '';
    case D8:
      return (r.return = r.value + '{' + A0(r.children, o) + '}');
    case hp:
      if (!br((r.value = r.props.join(',')))) return '';
  }
  return br((u = A0(r.children, o)))
    ? (r.return = r.value + '{' + u + '}')
    : '';
}
function Wp(r) {
  var c = L8(r);
  return function (u, o, d, g) {
    for (var v = '', p = 0; p < c; p++) v += r[p](u, o, d, g) || '';
    return v;
  };
}
function Pp(r, c, u, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case dp:
        r.return = H8(r.value, r.length, u);
        return;
      case D8:
        return A0([Di(r, { value: Qe(r.value, '@', '@' + ht) })], o);
      case hp:
        if (r.length)
          return fS((u = r.props), function (d) {
            switch (jl(d, (o = /(::plac\w+|:read-\w+)/))) {
              case ':read-only':
              case ':read-write':
                (Zf(Di(r, { props: [Qe(d, /:(read-\w+)/, ':' + _0 + '$1')] })),
                  Zf(Di(r, { props: [d] })),
                  cp(r, { props: Qp(u, o) }));
                break;
              case '::placeholder':
                (Zf(
                  Di(r, {
                    props: [Qe(d, /:(plac\w+)/, ':' + ht + 'input-$1')],
                  }),
                ),
                  Zf(Di(r, { props: [Qe(d, /:(plac\w+)/, ':' + _0 + '$1')] })),
                  Zf(Di(r, { props: [Qe(d, /:(plac\w+)/, Mt + 'input-$1')] })),
                  Zf(Di(r, { props: [d] })),
                  cp(r, { props: Qp(u, o) }));
                break;
            }
            return '';
          });
    }
}
const Ka = class Ka {
  constructor() {
    h0(this, '_sheet');
    h0(this, 'css', []);
    this._sheet = Ka.initialize();
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
  splitClasses(c, u, o) {
    if (!u) throw new Error('You need to have a className to execute it!');
    const d = Object.keys(c).filter((p) => p.indexOf(Ka.PSEUDO_KEY) === 0),
      g = d.map((p) => ({
        selector: `.${u}${p.replace(Ka.PSEUDO_KEY, '')}`,
        styles: c[p],
        media: o,
      })),
      v = aS(c, [...d]);
    return Object.keys(v).length > 0
      ? [{ selector: `.${u}`, styles: v }, ...g]
      : g;
  }
  splitRules(c, u) {
    const {
      root: o,
      media: d,
      globals: g,
      animations: v,
    } = Object.keys(c).reduce(
      (p, _) =>
        _.indexOf(Ka.MEDIA_KEY) === -1 &&
        _.indexOf(Ka.PSEUDO_KEY) === -1 &&
        typeof c[_] == 'object'
          ? { ...p, globals: [...p.globals, { selector: _, styles: c[_] }] }
          : _.indexOf(Ka.MEDIA_KEY) === 0 &&
              _.toLowerCase().includes('keyframes')
            ? { ...p, animations: { ...p.animations, [_]: c[_] } }
            : _.indexOf(Ka.MEDIA_KEY) === 0
              ? {
                  ...p,
                  media: {
                    ...p.media,
                    [_]: [
                      ...(p.media[_] || []),
                      ...this.splitClasses(c[_], u, _),
                    ],
                  },
                }
              : { ...p, root: { ...p.root, [_]: c[_] } },
      { root: {}, animations: {}, media: {}, globals: [] },
    );
    return {
      globals: g,
      root: [...(u ? this.splitClasses(o, u) : [])],
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
      } = this.splitRules(c, u),
      p = g
        .map((K) => this.translateObjecToCss(K.selector, K.styles))
        .join(' '),
      _ = Object.keys(d)
        .map(
          (K) =>
            `${K} { ${d[K].map((N) =>
              this.translateObjecToCss(N.selector, N.styles),
            )
              .join('')
              .trim()} }`,
        )
        .join(' '),
      S = this.translateAnimationToCss(v),
      T = o
        .map((K) => this.translateObjecToCss(K.selector, K.styles))
        .join('')
        .trim(),
      w = A0(Zp(`@media all { ${p} ${T} ${S} }`), Wp([Pp, Jp])),
      z = A0(Zp(`@media all { ${_}  }`), Wp([Pp, Jp])),
      U = `${w}${z}`;
    this.itsAlreadyInserted(U) ||
      (this.css.push(U), this.insert(w), this.insert(z));
  }
  insert(c) {
    c &&
      (this._sheet || (this._sheet = Ka.initialize()),
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
};
(h0(Ka, 'PSEUDO_KEY', '&'), h0(Ka, 'MEDIA_KEY', '@'));
let R0 = Ka;
const U8 = M.createContext({
    getContext: (r) => ({}),
    theme: {},
    updateTheme: (r) => {},
  }),
  Pr = () => {
    const r = M.useContext(U8);
    if (!r) throw new Error('You should initialize a PieceProvider!');
    return r;
  };
var J1 =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function bS(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, 'default')
    ? r.default
    : r;
}
var e3 = { exports: {} },
  v0 = {},
  t3;
function _S() {
  if (t3) return v0;
  t3 = 1;
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
      for (var p in d) p !== 'key' && (g[p] = d[p]);
    } else g = d;
    return (
      (d = g.ref),
      { $$typeof: r, type: o, key: v, ref: d !== void 0 ? d : null, props: g }
    );
  }
  return ((v0.Fragment = c), (v0.jsx = u), (v0.jsxs = u), v0);
}
var n3;
function SS() {
  return (n3 || ((n3 = 1), (e3.exports = _S())), e3.exports);
}
var Pf = SS(),
  Fg,
  a3;
function xS() {
  if (a3) return Fg;
  a3 = 1;
  function r() {
    ((this.__data__ = []), (this.size = 0));
  }
  return ((Fg = r), Fg);
}
var $g, r3;
function k8() {
  if (r3) return $g;
  r3 = 1;
  function r(c, u) {
    return c === u || (c !== c && u !== u);
  }
  return (($g = r), $g);
}
var Yg, l3;
function cd() {
  if (l3) return Yg;
  l3 = 1;
  var r = k8();
  function c(u, o) {
    for (var d = u.length; d--; ) if (r(u[d][0], o)) return d;
    return -1;
  }
  return ((Yg = c), Yg);
}
var Xg, i3;
function CS() {
  if (i3) return Xg;
  i3 = 1;
  var r = cd(),
    c = Array.prototype,
    u = c.splice;
  function o(d) {
    var g = this.__data__,
      v = r(g, d);
    if (v < 0) return !1;
    var p = g.length - 1;
    return (v == p ? g.pop() : u.call(g, v, 1), --this.size, !0);
  }
  return ((Xg = o), Xg);
}
var Kg, u3;
function AS() {
  if (u3) return Kg;
  u3 = 1;
  var r = cd();
  function c(u) {
    var o = this.__data__,
      d = r(o, u);
    return d < 0 ? void 0 : o[d][1];
  }
  return ((Kg = c), Kg);
}
var Qg, c3;
function RS() {
  if (c3) return Qg;
  c3 = 1;
  var r = cd();
  function c(u) {
    return r(this.__data__, u) > -1;
  }
  return ((Qg = c), Qg);
}
var Zg, f3;
function wS() {
  if (f3) return Zg;
  f3 = 1;
  var r = cd();
  function c(u, o) {
    var d = this.__data__,
      g = r(d, u);
    return (g < 0 ? (++this.size, d.push([u, o])) : (d[g][1] = o), this);
  }
  return ((Zg = c), Zg);
}
var Vg, o3;
function fd() {
  if (o3) return Vg;
  o3 = 1;
  var r = xS(),
    c = CS(),
    u = AS(),
    o = RS(),
    d = wS();
  function g(v) {
    var p = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++p < _; ) {
      var S = v[p];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (Vg = g),
    Vg
  );
}
var Ig, s3;
function TS() {
  if (s3) return Ig;
  s3 = 1;
  var r = fd();
  function c() {
    ((this.__data__ = new r()), (this.size = 0));
  }
  return ((Ig = c), Ig);
}
var Jg, h3;
function ES() {
  if (h3) return Jg;
  h3 = 1;
  function r(c) {
    var u = this.__data__,
      o = u.delete(c);
    return ((this.size = u.size), o);
  }
  return ((Jg = r), Jg);
}
var Wg, d3;
function OS() {
  if (d3) return Wg;
  d3 = 1;
  function r(c) {
    return this.__data__.get(c);
  }
  return ((Wg = r), Wg);
}
var Pg, g3;
function MS() {
  if (g3) return Pg;
  g3 = 1;
  function r(c) {
    return this.__data__.has(c);
  }
  return ((Pg = r), Pg);
}
var ev, v3;
function N8() {
  if (v3) return ev;
  v3 = 1;
  var r = typeof J1 == 'object' && J1 && J1.Object === Object && J1;
  return ((ev = r), ev);
}
var tv, y3;
function Dl() {
  if (y3) return tv;
  y3 = 1;
  var r = N8(),
    c = typeof self == 'object' && self && self.Object === Object && self,
    u = r || c || Function('return this')();
  return ((tv = u), tv);
}
var nv, m3;
function gp() {
  if (m3) return nv;
  m3 = 1;
  var r = Dl(),
    c = r.Symbol;
  return ((nv = c), nv);
}
var av, p3;
function zS() {
  if (p3) return av;
  p3 = 1;
  var r = gp(),
    c = Object.prototype,
    u = c.hasOwnProperty,
    o = c.toString,
    d = r ? r.toStringTag : void 0;
  function g(v) {
    var p = u.call(v, d),
      _ = v[d];
    try {
      v[d] = void 0;
      var S = !0;
    } catch {}
    var T = o.call(v);
    return (S && (p ? (v[d] = _) : delete v[d]), T);
  }
  return ((av = g), av);
}
var rv, b3;
function jS() {
  if (b3) return rv;
  b3 = 1;
  var r = Object.prototype,
    c = r.toString;
  function u(o) {
    return c.call(o);
  }
  return ((rv = u), rv);
}
var lv, _3;
function od() {
  if (_3) return lv;
  _3 = 1;
  var r = gp(),
    c = zS(),
    u = jS(),
    o = '[object Null]',
    d = '[object Undefined]',
    g = r ? r.toStringTag : void 0;
  function v(p) {
    return p == null
      ? p === void 0
        ? d
        : o
      : g && g in Object(p)
        ? c(p)
        : u(p);
  }
  return ((lv = v), lv);
}
var iv, S3;
function G8() {
  if (S3) return iv;
  S3 = 1;
  function r(c) {
    var u = typeof c;
    return c != null && (u == 'object' || u == 'function');
  }
  return ((iv = r), iv);
}
var uv, x3;
function F8() {
  if (x3) return uv;
  x3 = 1;
  var r = od(),
    c = G8(),
    u = '[object AsyncFunction]',
    o = '[object Function]',
    d = '[object GeneratorFunction]',
    g = '[object Proxy]';
  function v(p) {
    if (!c(p)) return !1;
    var _ = r(p);
    return _ == o || _ == d || _ == u || _ == g;
  }
  return ((uv = v), uv);
}
var cv, C3;
function DS() {
  if (C3) return cv;
  C3 = 1;
  var r = Dl(),
    c = r['__core-js_shared__'];
  return ((cv = c), cv);
}
var fv, A3;
function qS() {
  if (A3) return fv;
  A3 = 1;
  var r = DS(),
    c = (function () {
      var o = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
      return o ? 'Symbol(src)_1.' + o : '';
    })();
  function u(o) {
    return !!c && c in o;
  }
  return ((fv = u), fv);
}
var ov, R3;
function $8() {
  if (R3) return ov;
  R3 = 1;
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
  return ((ov = u), ov);
}
var sv, w3;
function LS() {
  if (w3) return sv;
  w3 = 1;
  var r = F8(),
    c = qS(),
    u = G8(),
    o = $8(),
    d = /[\\^$.*+?()[\]{}|]/g,
    g = /^\[object .+?Constructor\]$/,
    v = Function.prototype,
    p = Object.prototype,
    _ = v.toString,
    S = p.hasOwnProperty,
    T = RegExp(
      '^' +
        _.call(S)
          .replace(d, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function w(z) {
    if (!u(z) || c(z)) return !1;
    var U = r(z) ? T : g;
    return U.test(o(z));
  }
  return ((sv = w), sv);
}
var hv, T3;
function BS() {
  if (T3) return hv;
  T3 = 1;
  function r(c, u) {
    return c == null ? void 0 : c[u];
  }
  return ((hv = r), hv);
}
var dv, E3;
function to() {
  if (E3) return dv;
  E3 = 1;
  var r = LS(),
    c = BS();
  function u(o, d) {
    var g = c(o, d);
    return r(g) ? g : void 0;
  }
  return ((dv = u), dv);
}
var gv, O3;
function vp() {
  if (O3) return gv;
  O3 = 1;
  var r = to(),
    c = Dl(),
    u = r(c, 'Map');
  return ((gv = u), gv);
}
var vv, M3;
function sd() {
  if (M3) return vv;
  M3 = 1;
  var r = to(),
    c = r(Object, 'create');
  return ((vv = c), vv);
}
var yv, z3;
function HS() {
  if (z3) return yv;
  z3 = 1;
  var r = sd();
  function c() {
    ((this.__data__ = r ? r(null) : {}), (this.size = 0));
  }
  return ((yv = c), yv);
}
var mv, j3;
function US() {
  if (j3) return mv;
  j3 = 1;
  function r(c) {
    var u = this.has(c) && delete this.__data__[c];
    return ((this.size -= u ? 1 : 0), u);
  }
  return ((mv = r), mv);
}
var pv, D3;
function kS() {
  if (D3) return pv;
  D3 = 1;
  var r = sd(),
    c = '__lodash_hash_undefined__',
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g) {
    var v = this.__data__;
    if (r) {
      var p = v[g];
      return p === c ? void 0 : p;
    }
    return o.call(v, g) ? v[g] : void 0;
  }
  return ((pv = d), pv);
}
var bv, q3;
function NS() {
  if (q3) return bv;
  q3 = 1;
  var r = sd(),
    c = Object.prototype,
    u = c.hasOwnProperty;
  function o(d) {
    var g = this.__data__;
    return r ? g[d] !== void 0 : u.call(g, d);
  }
  return ((bv = o), bv);
}
var _v, L3;
function GS() {
  if (L3) return _v;
  L3 = 1;
  var r = sd(),
    c = '__lodash_hash_undefined__';
  function u(o, d) {
    var g = this.__data__;
    return (
      (this.size += this.has(o) ? 0 : 1),
      (g[o] = r && d === void 0 ? c : d),
      this
    );
  }
  return ((_v = u), _v);
}
var Sv, B3;
function FS() {
  if (B3) return Sv;
  B3 = 1;
  var r = HS(),
    c = US(),
    u = kS(),
    o = NS(),
    d = GS();
  function g(v) {
    var p = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++p < _; ) {
      var S = v[p];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (Sv = g),
    Sv
  );
}
var xv, H3;
function $S() {
  if (H3) return xv;
  H3 = 1;
  var r = FS(),
    c = fd(),
    u = vp();
  function o() {
    ((this.size = 0),
      (this.__data__ = {
        hash: new r(),
        map: new (u || c)(),
        string: new r(),
      }));
  }
  return ((xv = o), xv);
}
var Cv, U3;
function YS() {
  if (U3) return Cv;
  U3 = 1;
  function r(c) {
    var u = typeof c;
    return u == 'string' || u == 'number' || u == 'symbol' || u == 'boolean'
      ? c !== '__proto__'
      : c === null;
  }
  return ((Cv = r), Cv);
}
var Av, k3;
function hd() {
  if (k3) return Av;
  k3 = 1;
  var r = YS();
  function c(u, o) {
    var d = u.__data__;
    return r(o) ? d[typeof o == 'string' ? 'string' : 'hash'] : d.map;
  }
  return ((Av = c), Av);
}
var Rv, N3;
function XS() {
  if (N3) return Rv;
  N3 = 1;
  var r = hd();
  function c(u) {
    var o = r(this, u).delete(u);
    return ((this.size -= o ? 1 : 0), o);
  }
  return ((Rv = c), Rv);
}
var wv, G3;
function KS() {
  if (G3) return wv;
  G3 = 1;
  var r = hd();
  function c(u) {
    return r(this, u).get(u);
  }
  return ((wv = c), wv);
}
var Tv, F3;
function QS() {
  if (F3) return Tv;
  F3 = 1;
  var r = hd();
  function c(u) {
    return r(this, u).has(u);
  }
  return ((Tv = c), Tv);
}
var Ev, $3;
function ZS() {
  if ($3) return Ev;
  $3 = 1;
  var r = hd();
  function c(u, o) {
    var d = r(this, u),
      g = d.size;
    return (d.set(u, o), (this.size += d.size == g ? 0 : 1), this);
  }
  return ((Ev = c), Ev);
}
var Ov, Y3;
function Y8() {
  if (Y3) return Ov;
  Y3 = 1;
  var r = $S(),
    c = XS(),
    u = KS(),
    o = QS(),
    d = ZS();
  function g(v) {
    var p = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++p < _; ) {
      var S = v[p];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (Ov = g),
    Ov
  );
}
var Mv, X3;
function VS() {
  if (X3) return Mv;
  X3 = 1;
  var r = fd(),
    c = vp(),
    u = Y8(),
    o = 200;
  function d(g, v) {
    var p = this.__data__;
    if (p instanceof r) {
      var _ = p.__data__;
      if (!c || _.length < o - 1)
        return (_.push([g, v]), (this.size = ++p.size), this);
      p = this.__data__ = new u(_);
    }
    return (p.set(g, v), (this.size = p.size), this);
  }
  return ((Mv = d), Mv);
}
var zv, K3;
function IS() {
  if (K3) return zv;
  K3 = 1;
  var r = fd(),
    c = TS(),
    u = ES(),
    o = OS(),
    d = MS(),
    g = VS();
  function v(p) {
    var _ = (this.__data__ = new r(p));
    this.size = _.size;
  }
  return (
    (v.prototype.clear = c),
    (v.prototype.delete = u),
    (v.prototype.get = o),
    (v.prototype.has = d),
    (v.prototype.set = g),
    (zv = v),
    zv
  );
}
var jv, Q3;
function JS() {
  if (Q3) return jv;
  Q3 = 1;
  var r = '__lodash_hash_undefined__';
  function c(u) {
    return (this.__data__.set(u, r), this);
  }
  return ((jv = c), jv);
}
var Dv, Z3;
function WS() {
  if (Z3) return Dv;
  Z3 = 1;
  function r(c) {
    return this.__data__.has(c);
  }
  return ((Dv = r), Dv);
}
var qv, V3;
function PS() {
  if (V3) return qv;
  V3 = 1;
  var r = Y8(),
    c = JS(),
    u = WS();
  function o(d) {
    var g = -1,
      v = d == null ? 0 : d.length;
    for (this.__data__ = new r(); ++g < v; ) this.add(d[g]);
  }
  return (
    (o.prototype.add = o.prototype.push = c),
    (o.prototype.has = u),
    (qv = o),
    qv
  );
}
var Lv, I3;
function e6() {
  if (I3) return Lv;
  I3 = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length; ++o < d; )
      if (u(c[o], o, c)) return !0;
    return !1;
  }
  return ((Lv = r), Lv);
}
var Bv, J3;
function t6() {
  if (J3) return Bv;
  J3 = 1;
  function r(c, u) {
    return c.has(u);
  }
  return ((Bv = r), Bv);
}
var Hv, W3;
function X8() {
  if (W3) return Hv;
  W3 = 1;
  var r = PS(),
    c = e6(),
    u = t6(),
    o = 1,
    d = 2;
  function g(v, p, _, S, T, w) {
    var z = _ & o,
      U = v.length,
      K = p.length;
    if (U != K && !(z && K > U)) return !1;
    var N = w.get(v),
      $ = w.get(p);
    if (N && $) return N == p && $ == v;
    var J = -1,
      te = !0,
      F = _ & d ? new r() : void 0;
    for (w.set(v, p), w.set(p, v); ++J < U; ) {
      var I = v[J],
        oe = p[J];
      if (S) var re = z ? S(oe, I, J, p, v, w) : S(I, oe, J, v, p, w);
      if (re !== void 0) {
        if (re) continue;
        te = !1;
        break;
      }
      if (F) {
        if (
          !c(p, function (V, ce) {
            if (!u(F, ce) && (I === V || T(I, V, _, S, w))) return F.push(ce);
          })
        ) {
          te = !1;
          break;
        }
      } else if (!(I === oe || T(I, oe, _, S, w))) {
        te = !1;
        break;
      }
    }
    return (w.delete(v), w.delete(p), te);
  }
  return ((Hv = g), Hv);
}
var Uv, P3;
function n6() {
  if (P3) return Uv;
  P3 = 1;
  var r = Dl(),
    c = r.Uint8Array;
  return ((Uv = c), Uv);
}
var kv, eb;
function a6() {
  if (eb) return kv;
  eb = 1;
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
  return ((kv = r), kv);
}
var Nv, tb;
function r6() {
  if (tb) return Nv;
  tb = 1;
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
  return ((Nv = r), Nv);
}
var Gv, nb;
function l6() {
  if (nb) return Gv;
  nb = 1;
  var r = gp(),
    c = n6(),
    u = k8(),
    o = X8(),
    d = a6(),
    g = r6(),
    v = 1,
    p = 2,
    _ = '[object Boolean]',
    S = '[object Date]',
    T = '[object Error]',
    w = '[object Map]',
    z = '[object Number]',
    U = '[object RegExp]',
    K = '[object Set]',
    N = '[object String]',
    $ = '[object Symbol]',
    J = '[object ArrayBuffer]',
    te = '[object DataView]',
    F = r ? r.prototype : void 0,
    I = F ? F.valueOf : void 0;
  function oe(re, V, ce, Ae, Re, se, Le) {
    switch (ce) {
      case te:
        if (re.byteLength != V.byteLength || re.byteOffset != V.byteOffset)
          return !1;
        ((re = re.buffer), (V = V.buffer));
      case J:
        return !(re.byteLength != V.byteLength || !se(new c(re), new c(V)));
      case _:
      case S:
      case z:
        return u(+re, +V);
      case T:
        return re.name == V.name && re.message == V.message;
      case U:
      case N:
        return re == V + '';
      case w:
        var xe = d;
      case K:
        var et = Ae & v;
        if ((xe || (xe = g), re.size != V.size && !et)) return !1;
        var tt = Le.get(re);
        if (tt) return tt == V;
        ((Ae |= p), Le.set(re, V));
        var W = o(xe(re), xe(V), Ae, Re, se, Le);
        return (Le.delete(re), W);
      case $:
        if (I) return I.call(re) == I.call(V);
    }
    return !1;
  }
  return ((Gv = oe), Gv);
}
var Fv, ab;
function i6() {
  if (ab) return Fv;
  ab = 1;
  function r(c, u) {
    for (var o = -1, d = u.length, g = c.length; ++o < d; ) c[g + o] = u[o];
    return c;
  }
  return ((Fv = r), Fv);
}
var $v, rb;
function yp() {
  if (rb) return $v;
  rb = 1;
  var r = Array.isArray;
  return (($v = r), $v);
}
var Yv, lb;
function u6() {
  if (lb) return Yv;
  lb = 1;
  var r = i6(),
    c = yp();
  function u(o, d, g) {
    var v = d(o);
    return c(o) ? v : r(v, g(o));
  }
  return ((Yv = u), Yv);
}
var Xv, ib;
function c6() {
  if (ib) return Xv;
  ib = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length, g = 0, v = []; ++o < d; ) {
      var p = c[o];
      u(p, o, c) && (v[g++] = p);
    }
    return v;
  }
  return ((Xv = r), Xv);
}
var Kv, ub;
function f6() {
  if (ub) return Kv;
  ub = 1;
  function r() {
    return [];
  }
  return ((Kv = r), Kv);
}
var Qv, cb;
function o6() {
  if (cb) return Qv;
  cb = 1;
  var r = c6(),
    c = f6(),
    u = Object.prototype,
    o = u.propertyIsEnumerable,
    d = Object.getOwnPropertySymbols,
    g = d
      ? function (v) {
          return v == null
            ? []
            : ((v = Object(v)),
              r(d(v), function (p) {
                return o.call(v, p);
              }));
        }
      : c;
  return ((Qv = g), Qv);
}
var Zv, fb;
function s6() {
  if (fb) return Zv;
  fb = 1;
  function r(c, u) {
    for (var o = -1, d = Array(c); ++o < c; ) d[o] = u(o);
    return d;
  }
  return ((Zv = r), Zv);
}
var Vv, ob;
function dd() {
  if (ob) return Vv;
  ob = 1;
  function r(c) {
    return c != null && typeof c == 'object';
  }
  return ((Vv = r), Vv);
}
var Iv, sb;
function h6() {
  if (sb) return Iv;
  sb = 1;
  var r = od(),
    c = dd(),
    u = '[object Arguments]';
  function o(d) {
    return c(d) && r(d) == u;
  }
  return ((Iv = o), Iv);
}
var Jv, hb;
function d6() {
  if (hb) return Jv;
  hb = 1;
  var r = h6(),
    c = dd(),
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
  return ((Jv = g), Jv);
}
var ed = { exports: {} },
  Wv,
  db;
function g6() {
  if (db) return Wv;
  db = 1;
  function r() {
    return !1;
  }
  return ((Wv = r), Wv);
}
ed.exports;
var gb;
function K8() {
  return (
    gb ||
      ((gb = 1),
      (function (r, c) {
        var u = Dl(),
          o = g6(),
          d = c && !c.nodeType && c,
          g = d && !0 && r && !r.nodeType && r,
          v = g && g.exports === d,
          p = v ? u.Buffer : void 0,
          _ = p ? p.isBuffer : void 0,
          S = _ || o;
        r.exports = S;
      })(ed, ed.exports)),
    ed.exports
  );
}
var Pv, vb;
function v6() {
  if (vb) return Pv;
  vb = 1;
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
  return ((Pv = u), Pv);
}
var e2, yb;
function Q8() {
  if (yb) return e2;
  yb = 1;
  var r = 9007199254740991;
  function c(u) {
    return typeof u == 'number' && u > -1 && u % 1 == 0 && u <= r;
  }
  return ((e2 = c), e2);
}
var t2, mb;
function y6() {
  if (mb) return t2;
  mb = 1;
  var r = od(),
    c = Q8(),
    u = dd(),
    o = '[object Arguments]',
    d = '[object Array]',
    g = '[object Boolean]',
    v = '[object Date]',
    p = '[object Error]',
    _ = '[object Function]',
    S = '[object Map]',
    T = '[object Number]',
    w = '[object Object]',
    z = '[object RegExp]',
    U = '[object Set]',
    K = '[object String]',
    N = '[object WeakMap]',
    $ = '[object ArrayBuffer]',
    J = '[object DataView]',
    te = '[object Float32Array]',
    F = '[object Float64Array]',
    I = '[object Int8Array]',
    oe = '[object Int16Array]',
    re = '[object Int32Array]',
    V = '[object Uint8Array]',
    ce = '[object Uint8ClampedArray]',
    Ae = '[object Uint16Array]',
    Re = '[object Uint32Array]',
    se = {};
  ((se[te] =
    se[F] =
    se[I] =
    se[oe] =
    se[re] =
    se[V] =
    se[ce] =
    se[Ae] =
    se[Re] =
      !0),
    (se[o] =
      se[d] =
      se[$] =
      se[g] =
      se[J] =
      se[v] =
      se[p] =
      se[_] =
      se[S] =
      se[T] =
      se[w] =
      se[z] =
      se[U] =
      se[K] =
      se[N] =
        !1));
  function Le(xe) {
    return u(xe) && c(xe.length) && !!se[r(xe)];
  }
  return ((t2 = Le), t2);
}
var n2, pb;
function m6() {
  if (pb) return n2;
  pb = 1;
  function r(c) {
    return function (u) {
      return c(u);
    };
  }
  return ((n2 = r), n2);
}
var td = { exports: {} };
td.exports;
var bb;
function p6() {
  return (
    bb ||
      ((bb = 1),
      (function (r, c) {
        var u = N8(),
          o = c && !c.nodeType && c,
          d = o && !0 && r && !r.nodeType && r,
          g = d && d.exports === o,
          v = g && u.process,
          p = (function () {
            try {
              var _ = d && d.require && d.require('util').types;
              return _ || (v && v.binding && v.binding('util'));
            } catch {}
          })();
        r.exports = p;
      })(td, td.exports)),
    td.exports
  );
}
var a2, _b;
function Z8() {
  if (_b) return a2;
  _b = 1;
  var r = y6(),
    c = m6(),
    u = p6(),
    o = u && u.isTypedArray,
    d = o ? c(o) : r;
  return ((a2 = d), a2);
}
var r2, Sb;
function b6() {
  if (Sb) return r2;
  Sb = 1;
  var r = s6(),
    c = d6(),
    u = yp(),
    o = K8(),
    d = v6(),
    g = Z8(),
    v = Object.prototype,
    p = v.hasOwnProperty;
  function _(S, T) {
    var w = u(S),
      z = !w && c(S),
      U = !w && !z && o(S),
      K = !w && !z && !U && g(S),
      N = w || z || U || K,
      $ = N ? r(S.length, String) : [],
      J = $.length;
    for (var te in S)
      (T || p.call(S, te)) &&
        !(
          N &&
          (te == 'length' ||
            (U && (te == 'offset' || te == 'parent')) ||
            (K &&
              (te == 'buffer' || te == 'byteLength' || te == 'byteOffset')) ||
            d(te, J))
        ) &&
        $.push(te);
    return $;
  }
  return ((r2 = _), r2);
}
var l2, xb;
function _6() {
  if (xb) return l2;
  xb = 1;
  var r = Object.prototype;
  function c(u) {
    var o = u && u.constructor,
      d = (typeof o == 'function' && o.prototype) || r;
    return u === d;
  }
  return ((l2 = c), l2);
}
var i2, Cb;
function S6() {
  if (Cb) return i2;
  Cb = 1;
  function r(c, u) {
    return function (o) {
      return c(u(o));
    };
  }
  return ((i2 = r), i2);
}
var u2, Ab;
function x6() {
  if (Ab) return u2;
  Ab = 1;
  var r = S6(),
    c = r(Object.keys, Object);
  return ((u2 = c), u2);
}
var c2, Rb;
function C6() {
  if (Rb) return c2;
  Rb = 1;
  var r = _6(),
    c = x6(),
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g) {
    if (!r(g)) return c(g);
    var v = [];
    for (var p in Object(g)) o.call(g, p) && p != 'constructor' && v.push(p);
    return v;
  }
  return ((c2 = d), c2);
}
var f2, wb;
function A6() {
  if (wb) return f2;
  wb = 1;
  var r = F8(),
    c = Q8();
  function u(o) {
    return o != null && c(o.length) && !r(o);
  }
  return ((f2 = u), f2);
}
var o2, Tb;
function R6() {
  if (Tb) return o2;
  Tb = 1;
  var r = b6(),
    c = C6(),
    u = A6();
  function o(d) {
    return u(d) ? r(d) : c(d);
  }
  return ((o2 = o), o2);
}
var s2, Eb;
function w6() {
  if (Eb) return s2;
  Eb = 1;
  var r = u6(),
    c = o6(),
    u = R6();
  function o(d) {
    return r(d, u, c);
  }
  return ((s2 = o), s2);
}
var h2, Ob;
function T6() {
  if (Ob) return h2;
  Ob = 1;
  var r = w6(),
    c = 1,
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g, v, p, _, S, T) {
    var w = p & c,
      z = r(g),
      U = z.length,
      K = r(v),
      N = K.length;
    if (U != N && !w) return !1;
    for (var $ = U; $--; ) {
      var J = z[$];
      if (!(w ? J in v : o.call(v, J))) return !1;
    }
    var te = T.get(g),
      F = T.get(v);
    if (te && F) return te == v && F == g;
    var I = !0;
    (T.set(g, v), T.set(v, g));
    for (var oe = w; ++$ < U; ) {
      J = z[$];
      var re = g[J],
        V = v[J];
      if (_) var ce = w ? _(V, re, J, v, g, T) : _(re, V, J, g, v, T);
      if (!(ce === void 0 ? re === V || S(re, V, p, _, T) : ce)) {
        I = !1;
        break;
      }
      oe || (oe = J == 'constructor');
    }
    if (I && !oe) {
      var Ae = g.constructor,
        Re = v.constructor;
      Ae != Re &&
        'constructor' in g &&
        'constructor' in v &&
        !(
          typeof Ae == 'function' &&
          Ae instanceof Ae &&
          typeof Re == 'function' &&
          Re instanceof Re
        ) &&
        (I = !1);
    }
    return (T.delete(g), T.delete(v), I);
  }
  return ((h2 = d), h2);
}
var d2, Mb;
function E6() {
  if (Mb) return d2;
  Mb = 1;
  var r = to(),
    c = Dl(),
    u = r(c, 'DataView');
  return ((d2 = u), d2);
}
var g2, zb;
function O6() {
  if (zb) return g2;
  zb = 1;
  var r = to(),
    c = Dl(),
    u = r(c, 'Promise');
  return ((g2 = u), g2);
}
var v2, jb;
function M6() {
  if (jb) return v2;
  jb = 1;
  var r = to(),
    c = Dl(),
    u = r(c, 'Set');
  return ((v2 = u), v2);
}
var y2, Db;
function z6() {
  if (Db) return y2;
  Db = 1;
  var r = to(),
    c = Dl(),
    u = r(c, 'WeakMap');
  return ((y2 = u), y2);
}
var m2, qb;
function j6() {
  if (qb) return m2;
  qb = 1;
  var r = E6(),
    c = vp(),
    u = O6(),
    o = M6(),
    d = z6(),
    g = od(),
    v = $8(),
    p = '[object Map]',
    _ = '[object Object]',
    S = '[object Promise]',
    T = '[object Set]',
    w = '[object WeakMap]',
    z = '[object DataView]',
    U = v(r),
    K = v(c),
    N = v(u),
    $ = v(o),
    J = v(d),
    te = g;
  return (
    ((r && te(new r(new ArrayBuffer(1))) != z) ||
      (c && te(new c()) != p) ||
      (u && te(u.resolve()) != S) ||
      (o && te(new o()) != T) ||
      (d && te(new d()) != w)) &&
      (te = function (F) {
        var I = g(F),
          oe = I == _ ? F.constructor : void 0,
          re = oe ? v(oe) : '';
        if (re)
          switch (re) {
            case U:
              return z;
            case K:
              return p;
            case N:
              return S;
            case $:
              return T;
            case J:
              return w;
          }
        return I;
      }),
    (m2 = te),
    m2
  );
}
var p2, Lb;
function D6() {
  if (Lb) return p2;
  Lb = 1;
  var r = IS(),
    c = X8(),
    u = l6(),
    o = T6(),
    d = j6(),
    g = yp(),
    v = K8(),
    p = Z8(),
    _ = 1,
    S = '[object Arguments]',
    T = '[object Array]',
    w = '[object Object]',
    z = Object.prototype,
    U = z.hasOwnProperty;
  function K(N, $, J, te, F, I) {
    var oe = g(N),
      re = g($),
      V = oe ? T : d(N),
      ce = re ? T : d($);
    ((V = V == S ? w : V), (ce = ce == S ? w : ce));
    var Ae = V == w,
      Re = ce == w,
      se = V == ce;
    if (se && v(N)) {
      if (!v($)) return !1;
      ((oe = !0), (Ae = !1));
    }
    if (se && !Ae)
      return (
        I || (I = new r()),
        oe || p(N) ? c(N, $, J, te, F, I) : u(N, $, V, J, te, F, I)
      );
    if (!(J & _)) {
      var Le = Ae && U.call(N, '__wrapped__'),
        xe = Re && U.call($, '__wrapped__');
      if (Le || xe) {
        var et = Le ? N.value() : N,
          tt = xe ? $.value() : $;
        return (I || (I = new r()), F(et, tt, J, te, I));
      }
    }
    return se ? (I || (I = new r()), o(N, $, J, te, F, I)) : !1;
  }
  return ((p2 = K), p2);
}
var b2, Bb;
function q6() {
  if (Bb) return b2;
  Bb = 1;
  var r = D6(),
    c = dd();
  function u(o, d, g, v, p) {
    return o === d
      ? !0
      : o == null || d == null || (!c(o) && !c(d))
        ? o !== o && d !== d
        : r(o, d, g, v, u, p);
  }
  return ((b2 = u), b2);
}
var _2, Hb;
function L6() {
  if (Hb) return _2;
  Hb = 1;
  var r = q6();
  function c(u, o) {
    return r(u, o);
  }
  return ((_2 = c), _2);
}
var B6 = L6();
const Bi = bS(B6),
  H6 = (r) => {
    const c = M.useMemo(
        () => new Intl.Collator('en', { sensitivity: 'base' }),
        [],
      ),
      [u, o] = M.useState(r.theme || {}),
      d = M.useCallback((p) => {
        o((_) => (Bi(_, p) ? _ : p));
      }, []),
      g = M.useCallback(
        (p) => {
          const _ = r.patterns
              .filter((w) =>
                typeof w.applyOn == 'function'
                  ? w.applyOn(p, u)
                  : w.applyOn === p.as || w.applyOn === 'all',
              )
              .sort(
                (w, z) =>
                  (w.order || 0) -
                  (z.order || 0) +
                  c.compare(
                    w.applyOn.toString().replace(/[^a-zA-Z0-9]/g, ''),
                    z.applyOn.toString().replace(/[^a-zA-Z0-9]/g, ''),
                  ),
              ),
            S = _.reduce(
              (w, z) => ({
                ...w,
                ...(typeof z.defaults == 'function'
                  ? z.defaults({ ...p, theme: u })
                  : z.defaults || {}),
              }),
              {},
            ),
            T = _.reduce(
              (w, z) => ({
                ...w,
                ...(typeof z.style == 'function'
                  ? z.style({ ...p, ...S, theme: u })
                  : z.style),
              }),
              {},
            );
          return {
            className: `${p.kind}-${p.id}-context`,
            defaults: S,
            style: T,
          };
        },
        [r.patterns, u, c],
      ),
      v = M.useMemo(
        () => ({ theme: u, updateTheme: d, getContext: g }),
        [u, g, d],
      );
    return Pf.jsx(U8.Provider, { value: v, children: r.children });
  },
  U6 = M.memo(H6, Bi),
  k6 = (r) => {
    const { theme: c } = Pr(),
      u = M.useMemo(() => new R0(), []);
    return (
      M.useInsertionEffect(
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
  N6 = (r) => (k6(r), r.children);
M.memo(N6, Bi);
const G6 = (...r) => r.join(' ').trim(),
  F6 = (r, ...c) => {
    const u = { ...r };
    for (const o of c)
      for (const d in o) {
        const g = o[d],
          v = u[d];
        typeof v == 'object' &&
        Array.isArray(v) === !1 &&
        typeof g == 'object' &&
        Array.isArray(g) === !1
          ? (u[d] = { ...g, ...v })
          : v === void 0 && (u[d] = g);
      }
    return u;
  },
  V8 = [
    'flex',
    'atColumn',
    'atRow',
    'contentColumns',
    'contentRows',
    'gridColumn',
    'gridRow',
    'height',
    'width',
    'display',
    'flexDirection',
    'alignContent',
    'justifyContent',
    'alignItems',
    'justifyItems',
    'fontSize',
    'gap',
    'color',
    'background',
    'backgroundColor',
    'margin',
    'marginLeft',
    'marginRight',
    'marginTop',
    'marginBottom',
    'padding',
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
    'cursor',
    'containerType',
    'containerName',
    'all',
    'position',
    'transform',
    'top',
    'bottom',
    'left',
    'right',
    'fontWeight',
    'textTransform',
    'textDecoration',
    'justifySelf',
    'alignSelf',
    'touchAction',
    'transition',
    'borderRadius',
    'borderTopLeftRadius',
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderTopRightRadius',
    'outline',
    'border',
    'borderLeft',
    'borderRight',
    'borderBottom',
    'borderTop',
    'textColor',
    'direction',
    'textShadow',
  ],
  $6 = ['as', 'kind', 'aria', 'withStyle', 'additionalProperties', ...V8],
  Ub = {
    atColumn: 'gridColumn',
    atRow: 'gridRow',
    contentColumns: 'gridTemplateColumns',
    contentRows: 'gridTemplateRows',
    direction: 'flexDirection',
    textColor: 'color',
    radius: 'borderRadius',
    bottomLeftRadius: 'borderBottomLeftRadius',
    bottomRightRadius: 'borderBottomRightRadius',
    topLeftRadius: 'borderTopLeftRadius',
    topRightRadius: 'borderTopRightRadius',
  },
  S2 = {
    contentColumns: (r, c) => (typeof c == 'number' ? `repeat(${c}, 1fr)` : c),
    contentRows: (r, c) => (typeof c == 'number' ? `repeat(${c}, 1fr)` : c),
    atColumn: (r, c) => (typeof c == 'number' ? `${c} / ${c + 1}` : c),
    atRow: (r, c) => (typeof c == 'number' ? `${c} / ${c + 1}` : c),
    all: (r, c) => (typeof c == 'function' ? c(r) : c),
    undefined: (r, c) => (typeof c == 'function' ? c(r) : c),
  },
  nd = {
    pickComponentProps: (r) => {
      const c = [...$6, ...(r.additionalProperties || [])];
      return {
        ...Object.keys(r).reduce(
          (u, o) => (c.includes(o) ? u : { ...u, [o]: r[o] }),
          {},
        ),
        ...r.aria,
      };
    },
    pickComponentStyle: (r, c) => {
      if (c)
        return typeof c == 'function'
          ? nd.pickComponentStyle(r, c(r))
          : Array.isArray(c)
            ? c.reduce(
                (u, o) => ({ ...u, ...(typeof o == 'function' ? o(r) : o) }),
                {},
              )
            : c;
    },
    loadProperties: (r, c, ...u) => {
      const o = V8.reduce(
          (g, v) =>
            c[v] === void 0
              ? g
              : {
                  ...g,
                  [Ub[v] !== void 0 ? Ub[v] : v]:
                    S2[v] !== void 0 ? S2[v](r, c[v]) : S2.all(r, c[v]),
                },
          {},
        ),
        d = (u || []).reduce((g, v) => ({ ...g, ...v }), {});
      return Object.keys(d).length > 0 || Object.keys(o).length > 0
        ? { ...d, ...o }
        : void 0;
    },
  },
  mp = (r) => {
    const { getContext: c, theme: u } = Pr(),
      o = M.useMemo(() => new R0(), []),
      d = M.useId(),
      g = M.useMemo(() => r.kind || 'piece', [r.kind]),
      v = M.useMemo(() => r.id || d, [r.id, d]),
      p = M.useMemo(() => `${g}-${v}`, [g, v]),
      _ = M.useMemo(
        () => ({ ...r, kind: g, id: v, className: G6(r.className, p) }),
        [r, g, v, p],
      ),
      S = M.useMemo(() => c(_), [c, _]),
      T = M.useMemo(() => F6(_, S.defaults), [S.defaults, _]),
      w = M.useMemo(
        () =>
          nd.loadProperties(
            u,
            T,
            S.style,
            nd.pickComponentStyle(u, T.withStyle),
          ),
        [T, S.style, u],
      ),
      z = M.useMemo(() => nd.pickComponentProps(T), [T]),
      U = T.as || 'div';
    return (
      M.useInsertionEffect(
        function () {
          return (
            w && o.apply(w, p),
            () => {
              o.delete();
            }
          );
        },
        [o, w, p, w],
      ),
      { element: Pf.jsx(U, { ...z }) }
    );
  };
function Y6(r) {
  return mp(r).element;
}
const ge = M.memo(Y6, Bi),
  X6 = (r) => {
    const c = M.useRef(null);
    return mp({
      ...r,
      ref: c,
      kind: r.kind || 'scrollable',
      additionalProperties: [
        'horizontal',
        'vertical',
        'size',
        'behavior',
        'scrollSnap',
        'primary',
        'highlight',
      ],
    });
  },
  K6 = (r) => X6(r).element,
  If = M.memo(K6, Bi),
  Q6 = (r) => {
    const { theme: c } = Pr(),
      { id: u, fontSize: o, fontFamily: d, containerId: g } = r,
      v = M.useMemo(() => new R0(), []),
      p = M.useId();
    return (
      M.useInsertionEffect(
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
      { id: u || p }
    );
  },
  Z6 = (r) => {
    const { id: c } = Q6(r);
    return Pf.jsx(ge, {
      id: c,
      as: 'main',
      kind: 'screen',
      children: r.children,
    });
  },
  V6 = M.memo(Z6, Bi),
  I6 = (r, c) =>
    Object.entries(r).reduce(
      (u, [o, d]) =>
        c.includes(o)
          ? { ...u, known: { ...u.known, [o]: d } }
          : { ...u, unknown: { ...u.unknown, [o]: d } },
      { known: {}, unknown: {} },
    ),
  J6 = ({
    keyframes: r,
    withStyle: c,
    animateAs: u,
    query: o,
    removeFromHtml: d,
    onActivate: g,
  }) => {
    const [v, p] = M.useState(!1),
      { theme: _ } = Pr(),
      S = M.useMemo(
        () => ({
          ...(r == null ? void 0 : r.animation),
          ...(Array.isArray(c)
            ? c.reduce(
                (z, U) => ({ ...z, ...(typeof U == 'function' ? U(_) : U) }),
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
      T = M.useCallback(
        (z) => {
          z.matches && g && (p((U) => !U), g());
        },
        [g],
      ),
      w =
        (window.matchMedia(`(${typeof o == 'function' ? o(_) : o})`).matches ===
          !1 &&
          d) ||
        !1;
    return (
      M.useEffect(
        function () {
          const z = window.matchMedia(`(${typeof o == 'function' ? o(_) : o})`);
          return (
            z.addEventListener('change', T),
            () => {
              z.removeEventListener('change', T);
            }
          );
        },
        [T, _, o],
      ),
      { style: S, shouldRemoveComponent: w }
    );
  },
  W6 = (r) => {
    const { style: c, shouldRemoveComponent: u } = J6(r);
    return Pf.jsx(ge, {
      kind: 'media',
      as: 'section',
      withStyle: c,
      children: u === !1 ? r.children : null,
    });
  },
  I8 = M.memo(W6, Bi),
  P6 = (r) => {
    const { as: c, children: u, kind: o, ...d } = r;
    return mp({ ...d, kind: o || 'text', as: c, children: u });
  };
function T0(r, c = {}) {
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
      { known: d, unknown: g } = I6(u, o),
      { injectContainerProps: v, ...p } = c,
      _ = { ...p, ...d };
    return Pf.jsx(ge, {
      kind: 'aligment-container',
      display: 'flex',
      flex: _.flex || '1 1 auto',
      ..._,
      children: Pf.jsx(r, {
        ...g,
        ...(v ? p : {}),
        children: g == null ? void 0 : g.children,
      }),
    });
  };
}
const e9 = (r) => P6(r).element,
  pp = M.memo(T0(e9, { withStyle: { display: 'flex', flex: '1 1 auto' } }), Bi),
  t9 = {
    applyOn: (r) => r.kind === 'media',
    order: 0,
    style: { display: 'flex', flex: 1, userSelect: 'none' },
  },
  n9 = {
    applyOn: (r) => r.kind === 'piece',
    order: 0,
    style: { display: 'flex', flex: '1 1 auto', userSelect: 'none' },
  },
  a9 = {
    applyOn: 'all',
    order: 0,
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
  r9 = {
    applyOn: (r) => r.kind === 'screen',
    order: 0,
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridTemplateRows: '1fr',
      width: '100%',
      height: '100%',
      position: 'relative',
    },
  },
  l9 = {
    applyOn: (r) => r.kind === 'scrollable',
    order: 0,
    defaults: {
      primary: 'var(--primary)',
      highlight: 'var(--highlight)',
      size: 'thin',
      behavior: 'instant',
    },
    style: ({
      behavior: r,
      horizontal: c,
      vertical: u,
      scrollSnap: o,
      size: d,
      touchAction: g,
      highlight: v,
      primary: p,
      scrollMode: _,
    }) => ({
      '--primary': 'rgb(220, 220, 220)',
      '--highlight': 'rgba(25, 25, 25, 0.1)',
      scrollBehavior: r,
      overflowX: c ? _ || 'auto' : 'hidden',
      overflowY: u ? _ || 'auto' : 'hidden',
      flexDirection: u ? 'column' : 'row',
      ...(o ? { scrollSnapType: o } : {}),
      minHeight: 0,
      boxSizing: 'content-box',
      transition: 'all 0.3s ease-in-out',
      display: 'flex',
      flex: '1 1 100%',
      scrollbarWidth: d,
      WebkitOverflowScrolling: 'touch',
      touchAction: g || (u ? 'pan-y' : 'pan-x'),
      scrollbarColor: `${v} ${p}`,
      [`@supports not (scrollbar-width: ${d})`]: {
        '&::-webkit-scrollbar': { width: '8px' },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: p,
          border: `1px solid ${p}`,
        },
        '&::-webkit-scrollbar-track': {
          boxShadow: `inset 0 0 0 ${d}px ${v}`,
          backgroundColor: v,
        },
      },
    }),
  },
  i9 = {
    applyOn: (r) => r.kind === 'container',
    order: 0,
    style: { display: 'grid', flex: '1 1 auto', userSelect: 'none' },
  },
  u9 = [a9, i9, n9, r9, t9, l9],
  c9 = (r, ...c) => [...r, ...c],
  f9 = c9(
    u9,
    {
      applyOn: (r) => r.kind === 'scrollable',
      style: ({ theme: r }) => ({
        '--primary': r.getCurrentPallete().color.raw,
        '--highlight': r.getCurrentPallete().highlight.raw,
      }),
      order: 0,
    },
    { applyOn: 'all', style: { transition: 'all 0.3s linear' }, order: 0 },
    {
      applyOn: (r) => r.kind === 'contents',
      order: 0,
      style: {
        display: 'contents',
        background: 'transparent',
        position: 'relative',
      },
    },
    {
      applyOn: (r) => r.kind === 'input',
      order: 0,
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
  ),
  J8 = (r) => (typeof r == 'string' ? { type: 'HEX', raw: r } : r),
  bp = (r) => {
    const c =
      '#' +
      (16777216 + (r.red << 16) + (r.green << 8) + r.blue)
        .toString(16)
        .slice(1)
        .toUpperCase();
    return J8(c);
  };
function o9(...r) {
  return (c) => r.reduce((u, o) => o(u), c);
}
function s9() {
  return `id${Math.random().toString(36).slice(2, 10)}-${Date.now()}`;
}
const h9 = (r, c, u) => (r < c ? c : r > u ? u : r),
  d9 = (r, c = 0) => {
    const u = +`1${'0'.repeat(c)}`;
    return c <= 0 ? Math.round(r) : Math.round(r * u) / u;
  };
class sn {
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
        .map((v) => `${sn.line()}${v}`.padEnd(200, ' ')),
      g = [
        `ℹ️ ${sn.line()}[${c}]`.padEnd(200),
        ...d,
        `${sn.line()}at: ${sn.getDate()}`.padEnd(200),
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
        .map((v) => `${sn.line()}${v}`.padEnd(200, ' ')),
      g = [
        `⚠️ ${sn.line()}[${c}]`.padEnd(200),
        ...d,
        `${sn.line()}at: ${sn.getDate()}`.padEnd(200),
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
        .map((v) => `${sn.line()}${v}`.padEnd(200, ' ')),
      g = [
        `‼️ ${sn.line()}[${c}]`.padEnd(200),
        ...d,
        `${sn.line()}at: ${sn.getDate()}`.padEnd(200),
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
        .map((_) => `${sn.line()}${_}`.padEnd(200, ' ')),
      p = [
        `${sn.line()}[${c}]`.padEnd(200),
        ...v,
        `${sn.line()}at: ${sn.getDate()}`.padEnd(200),
      ].join('');
    o &&
      console.log(
        `%c${p}`,
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
var x2, kb;
function W8() {
  if (kb) return x2;
  kb = 1;
  var r = typeof qi == 'object' && qi && qi.Object === Object && qi;
  return ((x2 = r), x2);
}
var C2, Nb;
function el() {
  if (Nb) return C2;
  Nb = 1;
  var r = W8(),
    c = typeof self == 'object' && self && self.Object === Object && self,
    u = r || c || Function('return this')();
  return ((C2 = u), C2);
}
var A2, Gb;
function gd() {
  if (Gb) return A2;
  Gb = 1;
  var r = el(),
    c = r.Symbol;
  return ((A2 = c), A2);
}
var R2, Fb;
function g9() {
  if (Fb) return R2;
  Fb = 1;
  var r = gd(),
    c = Object.prototype,
    u = c.hasOwnProperty,
    o = c.toString,
    d = r ? r.toStringTag : void 0;
  function g(v) {
    var p = u.call(v, d),
      _ = v[d];
    try {
      v[d] = void 0;
      var S = !0;
    } catch {}
    var T = o.call(v);
    return (S && (p ? (v[d] = _) : delete v[d]), T);
  }
  return ((R2 = g), R2);
}
var w2, $b;
function v9() {
  if ($b) return w2;
  $b = 1;
  var r = Object.prototype,
    c = r.toString;
  function u(o) {
    return c.call(o);
  }
  return ((w2 = u), w2);
}
var T2, Yb;
function no() {
  if (Yb) return T2;
  Yb = 1;
  var r = gd(),
    c = g9(),
    u = v9(),
    o = '[object Null]',
    d = '[object Undefined]',
    g = r ? r.toStringTag : void 0;
  function v(p) {
    return p == null
      ? p === void 0
        ? d
        : o
      : g && g in Object(p)
        ? c(p)
        : u(p);
  }
  return ((T2 = v), T2);
}
var E2, Xb;
function ql() {
  if (Xb) return E2;
  Xb = 1;
  function r(c) {
    var u = typeof c;
    return c != null && (u == 'object' || u == 'function');
  }
  return ((E2 = r), E2);
}
var O2, Kb;
function P8() {
  if (Kb) return O2;
  Kb = 1;
  var r = no(),
    c = ql(),
    u = '[object AsyncFunction]',
    o = '[object Function]',
    d = '[object GeneratorFunction]',
    g = '[object Proxy]';
  function v(p) {
    if (!c(p)) return !1;
    var _ = r(p);
    return _ == o || _ == d || _ == u || _ == g;
  }
  return ((O2 = v), O2);
}
var M2, Qb;
function y9() {
  if (Qb) return M2;
  Qb = 1;
  var r = el(),
    c = r['__core-js_shared__'];
  return ((M2 = c), M2);
}
var z2, Zb;
function m9() {
  if (Zb) return z2;
  Zb = 1;
  var r = y9(),
    c = (function () {
      var o = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
      return o ? 'Symbol(src)_1.' + o : '';
    })();
  function u(o) {
    return !!c && c in o;
  }
  return ((z2 = u), z2);
}
var j2, Vb;
function e5() {
  if (Vb) return j2;
  Vb = 1;
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
  return ((j2 = u), j2);
}
var D2, Ib;
function p9() {
  if (Ib) return D2;
  Ib = 1;
  var r = P8(),
    c = m9(),
    u = ql(),
    o = e5(),
    d = /[\\^$.*+?()[\]{}|]/g,
    g = /^\[object .+?Constructor\]$/,
    v = Function.prototype,
    p = Object.prototype,
    _ = v.toString,
    S = p.hasOwnProperty,
    T = RegExp(
      '^' +
        _.call(S)
          .replace(d, '\\$&')
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            '$1.*?',
          ) +
        '$',
    );
  function w(z) {
    if (!u(z) || c(z)) return !1;
    var U = r(z) ? T : g;
    return U.test(o(z));
  }
  return ((D2 = w), D2);
}
var q2, Jb;
function b9() {
  if (Jb) return q2;
  Jb = 1;
  function r(c, u) {
    return c == null ? void 0 : c[u];
  }
  return ((q2 = r), q2);
}
var L2, Wb;
function ic() {
  if (Wb) return L2;
  Wb = 1;
  var r = p9(),
    c = b9();
  function u(o, d) {
    var g = c(o, d);
    return r(g) ? g : void 0;
  }
  return ((L2 = u), L2);
}
var B2, Pb;
function t5() {
  if (Pb) return B2;
  Pb = 1;
  var r = ic(),
    c = (function () {
      try {
        var u = r(Object, 'defineProperty');
        return (u({}, '', {}), u);
      } catch {}
    })();
  return ((B2 = c), B2);
}
var H2, e_;
function n5() {
  if (e_) return H2;
  e_ = 1;
  var r = t5();
  function c(u, o, d) {
    o == '__proto__' && r
      ? r(u, o, { configurable: !0, enumerable: !0, value: d, writable: !0 })
      : (u[o] = d);
  }
  return ((H2 = c), H2);
}
var U2, t_;
function vd() {
  if (t_) return U2;
  t_ = 1;
  function r(c, u) {
    return c === u || (c !== c && u !== u);
  }
  return ((U2 = r), U2);
}
var k2, n_;
function _p() {
  if (n_) return k2;
  n_ = 1;
  var r = n5(),
    c = vd(),
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g, v, p) {
    var _ = g[v];
    (!(o.call(g, v) && c(_, p)) || (p === void 0 && !(v in g))) && r(g, v, p);
  }
  return ((k2 = d), k2);
}
var N2, a_;
function _9() {
  if (a_) return N2;
  a_ = 1;
  var r = _p(),
    c = n5();
  function u(o, d, g, v) {
    var p = !g;
    g || (g = {});
    for (var _ = -1, S = d.length; ++_ < S; ) {
      var T = d[_],
        w = v ? v(g[T], o[T], T, g, o) : void 0;
      (w === void 0 && (w = o[T]), p ? c(g, T, w) : r(g, T, w));
    }
    return g;
  }
  return ((N2 = u), N2);
}
var G2, r_;
function Sp() {
  if (r_) return G2;
  r_ = 1;
  function r(c) {
    return c;
  }
  return ((G2 = r), G2);
}
var F2, l_;
function S9() {
  if (l_) return F2;
  l_ = 1;
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
  return ((F2 = r), F2);
}
var $2, i_;
function x9() {
  if (i_) return $2;
  i_ = 1;
  var r = S9(),
    c = Math.max;
  function u(o, d, g) {
    return (
      (d = c(d === void 0 ? o.length - 1 : d, 0)),
      function () {
        for (
          var v = arguments, p = -1, _ = c(v.length - d, 0), S = Array(_);
          ++p < _;
        )
          S[p] = v[d + p];
        p = -1;
        for (var T = Array(d + 1); ++p < d; ) T[p] = v[p];
        return ((T[d] = g(S)), r(o, this, T));
      }
    );
  }
  return (($2 = u), $2);
}
var Y2, u_;
function C9() {
  if (u_) return Y2;
  u_ = 1;
  function r(c) {
    return function () {
      return c;
    };
  }
  return ((Y2 = r), Y2);
}
var X2, c_;
function A9() {
  if (c_) return X2;
  c_ = 1;
  var r = C9(),
    c = t5(),
    u = Sp(),
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
  return ((X2 = o), X2);
}
var K2, f_;
function R9() {
  if (f_) return K2;
  f_ = 1;
  var r = 800,
    c = 16,
    u = Date.now;
  function o(d) {
    var g = 0,
      v = 0;
    return function () {
      var p = u(),
        _ = c - (p - v);
      if (((v = p), _ > 0)) {
        if (++g >= r) return arguments[0];
      } else g = 0;
      return d.apply(void 0, arguments);
    };
  }
  return ((K2 = o), K2);
}
var Q2, o_;
function w9() {
  if (o_) return Q2;
  o_ = 1;
  var r = A9(),
    c = R9(),
    u = c(r);
  return ((Q2 = u), Q2);
}
var Z2, s_;
function T9() {
  if (s_) return Z2;
  s_ = 1;
  var r = Sp(),
    c = x9(),
    u = w9();
  function o(d, g) {
    return u(c(d, g, r), d + '');
  }
  return ((Z2 = o), Z2);
}
var V2, h_;
function xp() {
  if (h_) return V2;
  h_ = 1;
  var r = 9007199254740991;
  function c(u) {
    return typeof u == 'number' && u > -1 && u % 1 == 0 && u <= r;
  }
  return ((V2 = c), V2);
}
var I2, d_;
function yd() {
  if (d_) return I2;
  d_ = 1;
  var r = P8(),
    c = xp();
  function u(o) {
    return o != null && c(o.length) && !r(o);
  }
  return ((I2 = u), I2);
}
var J2, g_;
function md() {
  if (g_) return J2;
  g_ = 1;
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
  return ((J2 = u), J2);
}
var W2, v_;
function E9() {
  if (v_) return W2;
  v_ = 1;
  var r = vd(),
    c = yd(),
    u = md(),
    o = ql();
  function d(g, v, p) {
    if (!o(p)) return !1;
    var _ = typeof v;
    return (_ == 'number' ? c(p) && u(v, p.length) : _ == 'string' && v in p)
      ? r(p[v], g)
      : !1;
  }
  return ((W2 = d), W2);
}
var P2, y_;
function O9() {
  if (y_) return P2;
  y_ = 1;
  var r = T9(),
    c = E9();
  function u(o) {
    return r(function (d, g) {
      var v = -1,
        p = g.length,
        _ = p > 1 ? g[p - 1] : void 0,
        S = p > 2 ? g[2] : void 0;
      for (
        _ = o.length > 3 && typeof _ == 'function' ? (p--, _) : void 0,
          S && c(g[0], g[1], S) && ((_ = p < 3 ? void 0 : _), (p = 1)),
          d = Object(d);
        ++v < p;
      ) {
        var T = g[v];
        T && o(d, T, v, _);
      }
      return d;
    });
  }
  return ((P2 = u), P2);
}
var ey, m_;
function Cp() {
  if (m_) return ey;
  m_ = 1;
  var r = Object.prototype;
  function c(u) {
    var o = u && u.constructor,
      d = (typeof o == 'function' && o.prototype) || r;
    return u === d;
  }
  return ((ey = c), ey);
}
var ty, p_;
function M9() {
  if (p_) return ty;
  p_ = 1;
  function r(c, u) {
    for (var o = -1, d = Array(c); ++o < c; ) d[o] = u(o);
    return d;
  }
  return ((ty = r), ty);
}
var ny, b_;
function ao() {
  if (b_) return ny;
  b_ = 1;
  function r(c) {
    return c != null && typeof c == 'object';
  }
  return ((ny = r), ny);
}
var ay, __;
function z9() {
  if (__) return ay;
  __ = 1;
  var r = no(),
    c = ao(),
    u = '[object Arguments]';
  function o(d) {
    return c(d) && r(d) == u;
  }
  return ((ay = o), ay);
}
var ry, S_;
function a5() {
  if (S_) return ry;
  S_ = 1;
  var r = z9(),
    c = ao(),
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
  return ((ry = g), ry);
}
var ly, x_;
function Hi() {
  if (x_) return ly;
  x_ = 1;
  var r = Array.isArray;
  return ((ly = r), ly);
}
var m0 = { exports: {} },
  iy,
  C_;
function j9() {
  if (C_) return iy;
  C_ = 1;
  function r() {
    return !1;
  }
  return ((iy = r), iy);
}
m0.exports;
var A_;
function r5() {
  return (
    A_ ||
      ((A_ = 1),
      (function (r, c) {
        var u = el(),
          o = j9(),
          d = c && !c.nodeType && c,
          g = d && !0 && r && !r.nodeType && r,
          v = g && g.exports === d,
          p = v ? u.Buffer : void 0,
          _ = p ? p.isBuffer : void 0,
          S = _ || o;
        r.exports = S;
      })(m0, m0.exports)),
    m0.exports
  );
}
var uy, R_;
function D9() {
  if (R_) return uy;
  R_ = 1;
  var r = no(),
    c = xp(),
    u = ao(),
    o = '[object Arguments]',
    d = '[object Array]',
    g = '[object Boolean]',
    v = '[object Date]',
    p = '[object Error]',
    _ = '[object Function]',
    S = '[object Map]',
    T = '[object Number]',
    w = '[object Object]',
    z = '[object RegExp]',
    U = '[object Set]',
    K = '[object String]',
    N = '[object WeakMap]',
    $ = '[object ArrayBuffer]',
    J = '[object DataView]',
    te = '[object Float32Array]',
    F = '[object Float64Array]',
    I = '[object Int8Array]',
    oe = '[object Int16Array]',
    re = '[object Int32Array]',
    V = '[object Uint8Array]',
    ce = '[object Uint8ClampedArray]',
    Ae = '[object Uint16Array]',
    Re = '[object Uint32Array]',
    se = {};
  ((se[te] =
    se[F] =
    se[I] =
    se[oe] =
    se[re] =
    se[V] =
    se[ce] =
    se[Ae] =
    se[Re] =
      !0),
    (se[o] =
      se[d] =
      se[$] =
      se[g] =
      se[J] =
      se[v] =
      se[p] =
      se[_] =
      se[S] =
      se[T] =
      se[w] =
      se[z] =
      se[U] =
      se[K] =
      se[N] =
        !1));
  function Le(xe) {
    return u(xe) && c(xe.length) && !!se[r(xe)];
  }
  return ((uy = Le), uy);
}
var cy, w_;
function q9() {
  if (w_) return cy;
  w_ = 1;
  function r(c) {
    return function (u) {
      return c(u);
    };
  }
  return ((cy = r), cy);
}
var p0 = { exports: {} };
p0.exports;
var T_;
function L9() {
  return (
    T_ ||
      ((T_ = 1),
      (function (r, c) {
        var u = W8(),
          o = c && !c.nodeType && c,
          d = o && !0 && r && !r.nodeType && r,
          g = d && d.exports === o,
          v = g && u.process,
          p = (function () {
            try {
              var _ = d && d.require && d.require('util').types;
              return _ || (v && v.binding && v.binding('util'));
            } catch {}
          })();
        r.exports = p;
      })(p0, p0.exports)),
    p0.exports
  );
}
var fy, E_;
function l5() {
  if (E_) return fy;
  E_ = 1;
  var r = D9(),
    c = q9(),
    u = L9(),
    o = u && u.isTypedArray,
    d = o ? c(o) : r;
  return ((fy = d), fy);
}
var oy, O_;
function i5() {
  if (O_) return oy;
  O_ = 1;
  var r = M9(),
    c = a5(),
    u = Hi(),
    o = r5(),
    d = md(),
    g = l5(),
    v = Object.prototype,
    p = v.hasOwnProperty;
  function _(S, T) {
    var w = u(S),
      z = !w && c(S),
      U = !w && !z && o(S),
      K = !w && !z && !U && g(S),
      N = w || z || U || K,
      $ = N ? r(S.length, String) : [],
      J = $.length;
    for (var te in S)
      (T || p.call(S, te)) &&
        !(
          N &&
          (te == 'length' ||
            (U && (te == 'offset' || te == 'parent')) ||
            (K &&
              (te == 'buffer' || te == 'byteLength' || te == 'byteOffset')) ||
            d(te, J))
        ) &&
        $.push(te);
    return $;
  }
  return ((oy = _), oy);
}
var sy, M_;
function u5() {
  if (M_) return sy;
  M_ = 1;
  function r(c, u) {
    return function (o) {
      return c(u(o));
    };
  }
  return ((sy = r), sy);
}
var hy, z_;
function B9() {
  if (z_) return hy;
  z_ = 1;
  var r = u5(),
    c = r(Object.keys, Object);
  return ((hy = c), hy);
}
var dy, j_;
function H9() {
  if (j_) return dy;
  j_ = 1;
  var r = Cp(),
    c = B9(),
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g) {
    if (!r(g)) return c(g);
    var v = [];
    for (var p in Object(g)) o.call(g, p) && p != 'constructor' && v.push(p);
    return v;
  }
  return ((dy = d), dy);
}
var gy, D_;
function Ap() {
  if (D_) return gy;
  D_ = 1;
  var r = i5(),
    c = H9(),
    u = yd();
  function o(d) {
    return u(d) ? r(d) : c(d);
  }
  return ((gy = o), gy);
}
var vy, q_;
function U9() {
  if (q_) return vy;
  q_ = 1;
  var r = _p(),
    c = _9(),
    u = O9(),
    o = yd(),
    d = Cp(),
    g = Ap(),
    v = Object.prototype,
    p = v.hasOwnProperty,
    _ = u(function (S, T) {
      if (d(T) || o(T)) {
        c(T, g(T), S);
        return;
      }
      for (var w in T) p.call(T, w) && r(S, w, T[w]);
    });
  return ((vy = _), vy);
}
var k9 = U9();
const N9 = w0(k9);
var yy, L_;
function G9() {
  if (L_) return yy;
  L_ = 1;
  function r() {
    ((this.__data__ = []), (this.size = 0));
  }
  return ((yy = r), yy);
}
var my, B_;
function pd() {
  if (B_) return my;
  B_ = 1;
  var r = vd();
  function c(u, o) {
    for (var d = u.length; d--; ) if (r(u[d][0], o)) return d;
    return -1;
  }
  return ((my = c), my);
}
var py, H_;
function F9() {
  if (H_) return py;
  H_ = 1;
  var r = pd(),
    c = Array.prototype,
    u = c.splice;
  function o(d) {
    var g = this.__data__,
      v = r(g, d);
    if (v < 0) return !1;
    var p = g.length - 1;
    return (v == p ? g.pop() : u.call(g, v, 1), --this.size, !0);
  }
  return ((py = o), py);
}
var by, U_;
function $9() {
  if (U_) return by;
  U_ = 1;
  var r = pd();
  function c(u) {
    var o = this.__data__,
      d = r(o, u);
    return d < 0 ? void 0 : o[d][1];
  }
  return ((by = c), by);
}
var _y, k_;
function Y9() {
  if (k_) return _y;
  k_ = 1;
  var r = pd();
  function c(u) {
    return r(this.__data__, u) > -1;
  }
  return ((_y = c), _y);
}
var Sy, N_;
function X9() {
  if (N_) return Sy;
  N_ = 1;
  var r = pd();
  function c(u, o) {
    var d = this.__data__,
      g = r(d, u);
    return (g < 0 ? (++this.size, d.push([u, o])) : (d[g][1] = o), this);
  }
  return ((Sy = c), Sy);
}
var xy, G_;
function bd() {
  if (G_) return xy;
  G_ = 1;
  var r = G9(),
    c = F9(),
    u = $9(),
    o = Y9(),
    d = X9();
  function g(v) {
    var p = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++p < _; ) {
      var S = v[p];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (xy = g),
    xy
  );
}
var Cy, F_;
function K9() {
  if (F_) return Cy;
  F_ = 1;
  var r = bd();
  function c() {
    ((this.__data__ = new r()), (this.size = 0));
  }
  return ((Cy = c), Cy);
}
var Ay, $_;
function Q9() {
  if ($_) return Ay;
  $_ = 1;
  function r(c) {
    var u = this.__data__,
      o = u.delete(c);
    return ((this.size = u.size), o);
  }
  return ((Ay = r), Ay);
}
var Ry, Y_;
function Z9() {
  if (Y_) return Ry;
  Y_ = 1;
  function r(c) {
    return this.__data__.get(c);
  }
  return ((Ry = r), Ry);
}
var wy, X_;
function V9() {
  if (X_) return wy;
  X_ = 1;
  function r(c) {
    return this.__data__.has(c);
  }
  return ((wy = r), wy);
}
var Ty, K_;
function Rp() {
  if (K_) return Ty;
  K_ = 1;
  var r = ic(),
    c = el(),
    u = r(c, 'Map');
  return ((Ty = u), Ty);
}
var Ey, Q_;
function _d() {
  if (Q_) return Ey;
  Q_ = 1;
  var r = ic(),
    c = r(Object, 'create');
  return ((Ey = c), Ey);
}
var Oy, Z_;
function I9() {
  if (Z_) return Oy;
  Z_ = 1;
  var r = _d();
  function c() {
    ((this.__data__ = r ? r(null) : {}), (this.size = 0));
  }
  return ((Oy = c), Oy);
}
var My, V_;
function J9() {
  if (V_) return My;
  V_ = 1;
  function r(c) {
    var u = this.has(c) && delete this.__data__[c];
    return ((this.size -= u ? 1 : 0), u);
  }
  return ((My = r), My);
}
var zy, I_;
function W9() {
  if (I_) return zy;
  I_ = 1;
  var r = _d(),
    c = '__lodash_hash_undefined__',
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g) {
    var v = this.__data__;
    if (r) {
      var p = v[g];
      return p === c ? void 0 : p;
    }
    return o.call(v, g) ? v[g] : void 0;
  }
  return ((zy = d), zy);
}
var jy, J_;
function P9() {
  if (J_) return jy;
  J_ = 1;
  var r = _d(),
    c = Object.prototype,
    u = c.hasOwnProperty;
  function o(d) {
    var g = this.__data__;
    return r ? g[d] !== void 0 : u.call(g, d);
  }
  return ((jy = o), jy);
}
var Dy, W_;
function ex() {
  if (W_) return Dy;
  W_ = 1;
  var r = _d(),
    c = '__lodash_hash_undefined__';
  function u(o, d) {
    var g = this.__data__;
    return (
      (this.size += this.has(o) ? 0 : 1),
      (g[o] = r && d === void 0 ? c : d),
      this
    );
  }
  return ((Dy = u), Dy);
}
var qy, P_;
function tx() {
  if (P_) return qy;
  P_ = 1;
  var r = I9(),
    c = J9(),
    u = W9(),
    o = P9(),
    d = ex();
  function g(v) {
    var p = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++p < _; ) {
      var S = v[p];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (qy = g),
    qy
  );
}
var Ly, e4;
function nx() {
  if (e4) return Ly;
  e4 = 1;
  var r = tx(),
    c = bd(),
    u = Rp();
  function o() {
    ((this.size = 0),
      (this.__data__ = {
        hash: new r(),
        map: new (u || c)(),
        string: new r(),
      }));
  }
  return ((Ly = o), Ly);
}
var By, t4;
function ax() {
  if (t4) return By;
  t4 = 1;
  function r(c) {
    var u = typeof c;
    return u == 'string' || u == 'number' || u == 'symbol' || u == 'boolean'
      ? c !== '__proto__'
      : c === null;
  }
  return ((By = r), By);
}
var Hy, n4;
function Sd() {
  if (n4) return Hy;
  n4 = 1;
  var r = ax();
  function c(u, o) {
    var d = u.__data__;
    return r(o) ? d[typeof o == 'string' ? 'string' : 'hash'] : d.map;
  }
  return ((Hy = c), Hy);
}
var Uy, a4;
function rx() {
  if (a4) return Uy;
  a4 = 1;
  var r = Sd();
  function c(u) {
    var o = r(this, u).delete(u);
    return ((this.size -= o ? 1 : 0), o);
  }
  return ((Uy = c), Uy);
}
var ky, r4;
function lx() {
  if (r4) return ky;
  r4 = 1;
  var r = Sd();
  function c(u) {
    return r(this, u).get(u);
  }
  return ((ky = c), ky);
}
var Ny, l4;
function ix() {
  if (l4) return Ny;
  l4 = 1;
  var r = Sd();
  function c(u) {
    return r(this, u).has(u);
  }
  return ((Ny = c), Ny);
}
var Gy, i4;
function ux() {
  if (i4) return Gy;
  i4 = 1;
  var r = Sd();
  function c(u, o) {
    var d = r(this, u),
      g = d.size;
    return (d.set(u, o), (this.size += d.size == g ? 0 : 1), this);
  }
  return ((Gy = c), Gy);
}
var Fy, u4;
function wp() {
  if (u4) return Fy;
  u4 = 1;
  var r = nx(),
    c = rx(),
    u = lx(),
    o = ix(),
    d = ux();
  function g(v) {
    var p = -1,
      _ = v == null ? 0 : v.length;
    for (this.clear(); ++p < _; ) {
      var S = v[p];
      this.set(S[0], S[1]);
    }
  }
  return (
    (g.prototype.clear = r),
    (g.prototype.delete = c),
    (g.prototype.get = u),
    (g.prototype.has = o),
    (g.prototype.set = d),
    (Fy = g),
    Fy
  );
}
var $y, c4;
function cx() {
  if (c4) return $y;
  c4 = 1;
  var r = bd(),
    c = Rp(),
    u = wp(),
    o = 200;
  function d(g, v) {
    var p = this.__data__;
    if (p instanceof r) {
      var _ = p.__data__;
      if (!c || _.length < o - 1)
        return (_.push([g, v]), (this.size = ++p.size), this);
      p = this.__data__ = new u(_);
    }
    return (p.set(g, v), (this.size = p.size), this);
  }
  return (($y = d), $y);
}
var Yy, f4;
function c5() {
  if (f4) return Yy;
  f4 = 1;
  var r = bd(),
    c = K9(),
    u = Q9(),
    o = Z9(),
    d = V9(),
    g = cx();
  function v(p) {
    var _ = (this.__data__ = new r(p));
    this.size = _.size;
  }
  return (
    (v.prototype.clear = c),
    (v.prototype.delete = u),
    (v.prototype.get = o),
    (v.prototype.has = d),
    (v.prototype.set = g),
    (Yy = v),
    Yy
  );
}
var Xy, o4;
function fx() {
  if (o4) return Xy;
  o4 = 1;
  var r = '__lodash_hash_undefined__';
  function c(u) {
    return (this.__data__.set(u, r), this);
  }
  return ((Xy = c), Xy);
}
var Ky, s4;
function ox() {
  if (s4) return Ky;
  s4 = 1;
  function r(c) {
    return this.__data__.has(c);
  }
  return ((Ky = r), Ky);
}
var Qy, h4;
function sx() {
  if (h4) return Qy;
  h4 = 1;
  var r = wp(),
    c = fx(),
    u = ox();
  function o(d) {
    var g = -1,
      v = d == null ? 0 : d.length;
    for (this.__data__ = new r(); ++g < v; ) this.add(d[g]);
  }
  return (
    (o.prototype.add = o.prototype.push = c),
    (o.prototype.has = u),
    (Qy = o),
    Qy
  );
}
var Zy, d4;
function hx() {
  if (d4) return Zy;
  d4 = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length; ++o < d; )
      if (u(c[o], o, c)) return !0;
    return !1;
  }
  return ((Zy = r), Zy);
}
var Vy, g4;
function dx() {
  if (g4) return Vy;
  g4 = 1;
  function r(c, u) {
    return c.has(u);
  }
  return ((Vy = r), Vy);
}
var Iy, v4;
function f5() {
  if (v4) return Iy;
  v4 = 1;
  var r = sx(),
    c = hx(),
    u = dx(),
    o = 1,
    d = 2;
  function g(v, p, _, S, T, w) {
    var z = _ & o,
      U = v.length,
      K = p.length;
    if (U != K && !(z && K > U)) return !1;
    var N = w.get(v),
      $ = w.get(p);
    if (N && $) return N == p && $ == v;
    var J = -1,
      te = !0,
      F = _ & d ? new r() : void 0;
    for (w.set(v, p), w.set(p, v); ++J < U; ) {
      var I = v[J],
        oe = p[J];
      if (S) var re = z ? S(oe, I, J, p, v, w) : S(I, oe, J, v, p, w);
      if (re !== void 0) {
        if (re) continue;
        te = !1;
        break;
      }
      if (F) {
        if (
          !c(p, function (V, ce) {
            if (!u(F, ce) && (I === V || T(I, V, _, S, w))) return F.push(ce);
          })
        ) {
          te = !1;
          break;
        }
      } else if (!(I === oe || T(I, oe, _, S, w))) {
        te = !1;
        break;
      }
    }
    return (w.delete(v), w.delete(p), te);
  }
  return ((Iy = g), Iy);
}
var Jy, y4;
function gx() {
  if (y4) return Jy;
  y4 = 1;
  var r = el(),
    c = r.Uint8Array;
  return ((Jy = c), Jy);
}
var Wy, m4;
function vx() {
  if (m4) return Wy;
  m4 = 1;
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
  return ((Wy = r), Wy);
}
var Py, p4;
function yx() {
  if (p4) return Py;
  p4 = 1;
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
  return ((Py = r), Py);
}
var em, b4;
function mx() {
  if (b4) return em;
  b4 = 1;
  var r = gd(),
    c = gx(),
    u = vd(),
    o = f5(),
    d = vx(),
    g = yx(),
    v = 1,
    p = 2,
    _ = '[object Boolean]',
    S = '[object Date]',
    T = '[object Error]',
    w = '[object Map]',
    z = '[object Number]',
    U = '[object RegExp]',
    K = '[object Set]',
    N = '[object String]',
    $ = '[object Symbol]',
    J = '[object ArrayBuffer]',
    te = '[object DataView]',
    F = r ? r.prototype : void 0,
    I = F ? F.valueOf : void 0;
  function oe(re, V, ce, Ae, Re, se, Le) {
    switch (ce) {
      case te:
        if (re.byteLength != V.byteLength || re.byteOffset != V.byteOffset)
          return !1;
        ((re = re.buffer), (V = V.buffer));
      case J:
        return !(re.byteLength != V.byteLength || !se(new c(re), new c(V)));
      case _:
      case S:
      case z:
        return u(+re, +V);
      case T:
        return re.name == V.name && re.message == V.message;
      case U:
      case N:
        return re == V + '';
      case w:
        var xe = d;
      case K:
        var et = Ae & v;
        if ((xe || (xe = g), re.size != V.size && !et)) return !1;
        var tt = Le.get(re);
        if (tt) return tt == V;
        ((Ae |= p), Le.set(re, V));
        var W = o(xe(re), xe(V), Ae, Re, se, Le);
        return (Le.delete(re), W);
      case $:
        if (I) return I.call(re) == I.call(V);
    }
    return !1;
  }
  return ((em = oe), em);
}
var tm, _4;
function o5() {
  if (_4) return tm;
  _4 = 1;
  function r(c, u) {
    for (var o = -1, d = u.length, g = c.length; ++o < d; ) c[g + o] = u[o];
    return c;
  }
  return ((tm = r), tm);
}
var nm, S4;
function s5() {
  if (S4) return nm;
  S4 = 1;
  var r = o5(),
    c = Hi();
  function u(o, d, g) {
    var v = d(o);
    return c(o) ? v : r(v, g(o));
  }
  return ((nm = u), nm);
}
var am, x4;
function px() {
  if (x4) return am;
  x4 = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length, g = 0, v = []; ++o < d; ) {
      var p = c[o];
      u(p, o, c) && (v[g++] = p);
    }
    return v;
  }
  return ((am = r), am);
}
var rm, C4;
function h5() {
  if (C4) return rm;
  C4 = 1;
  function r() {
    return [];
  }
  return ((rm = r), rm);
}
var lm, A4;
function d5() {
  if (A4) return lm;
  A4 = 1;
  var r = px(),
    c = h5(),
    u = Object.prototype,
    o = u.propertyIsEnumerable,
    d = Object.getOwnPropertySymbols,
    g = d
      ? function (v) {
          return v == null
            ? []
            : ((v = Object(v)),
              r(d(v), function (p) {
                return o.call(v, p);
              }));
        }
      : c;
  return ((lm = g), lm);
}
var im, R4;
function bx() {
  if (R4) return im;
  R4 = 1;
  var r = s5(),
    c = d5(),
    u = Ap();
  function o(d) {
    return r(d, u, c);
  }
  return ((im = o), im);
}
var um, w4;
function _x() {
  if (w4) return um;
  w4 = 1;
  var r = bx(),
    c = 1,
    u = Object.prototype,
    o = u.hasOwnProperty;
  function d(g, v, p, _, S, T) {
    var w = p & c,
      z = r(g),
      U = z.length,
      K = r(v),
      N = K.length;
    if (U != N && !w) return !1;
    for (var $ = U; $--; ) {
      var J = z[$];
      if (!(w ? J in v : o.call(v, J))) return !1;
    }
    var te = T.get(g),
      F = T.get(v);
    if (te && F) return te == v && F == g;
    var I = !0;
    (T.set(g, v), T.set(v, g));
    for (var oe = w; ++$ < U; ) {
      J = z[$];
      var re = g[J],
        V = v[J];
      if (_) var ce = w ? _(V, re, J, v, g, T) : _(re, V, J, g, v, T);
      if (!(ce === void 0 ? re === V || S(re, V, p, _, T) : ce)) {
        I = !1;
        break;
      }
      oe || (oe = J == 'constructor');
    }
    if (I && !oe) {
      var Ae = g.constructor,
        Re = v.constructor;
      Ae != Re &&
        'constructor' in g &&
        'constructor' in v &&
        !(
          typeof Ae == 'function' &&
          Ae instanceof Ae &&
          typeof Re == 'function' &&
          Re instanceof Re
        ) &&
        (I = !1);
    }
    return (T.delete(g), T.delete(v), I);
  }
  return ((um = d), um);
}
var cm, T4;
function Sx() {
  if (T4) return cm;
  T4 = 1;
  var r = ic(),
    c = el(),
    u = r(c, 'DataView');
  return ((cm = u), cm);
}
var fm, E4;
function xx() {
  if (E4) return fm;
  E4 = 1;
  var r = ic(),
    c = el(),
    u = r(c, 'Promise');
  return ((fm = u), fm);
}
var om, O4;
function Cx() {
  if (O4) return om;
  O4 = 1;
  var r = ic(),
    c = el(),
    u = r(c, 'Set');
  return ((om = u), om);
}
var sm, M4;
function Ax() {
  if (M4) return sm;
  M4 = 1;
  var r = ic(),
    c = el(),
    u = r(c, 'WeakMap');
  return ((sm = u), sm);
}
var hm, z4;
function Rx() {
  if (z4) return hm;
  z4 = 1;
  var r = Sx(),
    c = Rp(),
    u = xx(),
    o = Cx(),
    d = Ax(),
    g = no(),
    v = e5(),
    p = '[object Map]',
    _ = '[object Object]',
    S = '[object Promise]',
    T = '[object Set]',
    w = '[object WeakMap]',
    z = '[object DataView]',
    U = v(r),
    K = v(c),
    N = v(u),
    $ = v(o),
    J = v(d),
    te = g;
  return (
    ((r && te(new r(new ArrayBuffer(1))) != z) ||
      (c && te(new c()) != p) ||
      (u && te(u.resolve()) != S) ||
      (o && te(new o()) != T) ||
      (d && te(new d()) != w)) &&
      (te = function (F) {
        var I = g(F),
          oe = I == _ ? F.constructor : void 0,
          re = oe ? v(oe) : '';
        if (re)
          switch (re) {
            case U:
              return z;
            case K:
              return p;
            case N:
              return S;
            case $:
              return T;
            case J:
              return w;
          }
        return I;
      }),
    (hm = te),
    hm
  );
}
var dm, j4;
function wx() {
  if (j4) return dm;
  j4 = 1;
  var r = c5(),
    c = f5(),
    u = mx(),
    o = _x(),
    d = Rx(),
    g = Hi(),
    v = r5(),
    p = l5(),
    _ = 1,
    S = '[object Arguments]',
    T = '[object Array]',
    w = '[object Object]',
    z = Object.prototype,
    U = z.hasOwnProperty;
  function K(N, $, J, te, F, I) {
    var oe = g(N),
      re = g($),
      V = oe ? T : d(N),
      ce = re ? T : d($);
    ((V = V == S ? w : V), (ce = ce == S ? w : ce));
    var Ae = V == w,
      Re = ce == w,
      se = V == ce;
    if (se && v(N)) {
      if (!v($)) return !1;
      ((oe = !0), (Ae = !1));
    }
    if (se && !Ae)
      return (
        I || (I = new r()),
        oe || p(N) ? c(N, $, J, te, F, I) : u(N, $, V, J, te, F, I)
      );
    if (!(J & _)) {
      var Le = Ae && U.call(N, '__wrapped__'),
        xe = Re && U.call($, '__wrapped__');
      if (Le || xe) {
        var et = Le ? N.value() : N,
          tt = xe ? $.value() : $;
        return (I || (I = new r()), F(et, tt, J, te, I));
      }
    }
    return se ? (I || (I = new r()), o(N, $, J, te, F, I)) : !1;
  }
  return ((dm = K), dm);
}
var gm, D4;
function g5() {
  if (D4) return gm;
  D4 = 1;
  var r = wx(),
    c = ao();
  function u(o, d, g, v, p) {
    return o === d
      ? !0
      : o == null || d == null || (!c(o) && !c(d))
        ? o !== o && d !== d
        : r(o, d, g, v, u, p);
  }
  return ((gm = u), gm);
}
var vm, q4;
function Tx() {
  if (q4) return vm;
  q4 = 1;
  var r = c5(),
    c = g5(),
    u = 1,
    o = 2;
  function d(g, v, p, _) {
    var S = p.length,
      T = S,
      w = !_;
    if (g == null) return !T;
    for (g = Object(g); S--; ) {
      var z = p[S];
      if (w && z[2] ? z[1] !== g[z[0]] : !(z[0] in g)) return !1;
    }
    for (; ++S < T; ) {
      z = p[S];
      var U = z[0],
        K = g[U],
        N = z[1];
      if (w && z[2]) {
        if (K === void 0 && !(U in g)) return !1;
      } else {
        var $ = new r();
        if (_) var J = _(K, N, U, g, v, $);
        if (!(J === void 0 ? c(N, K, u | o, _, $) : J)) return !1;
      }
    }
    return !0;
  }
  return ((vm = d), vm);
}
var ym, L4;
function v5() {
  if (L4) return ym;
  L4 = 1;
  var r = ql();
  function c(u) {
    return u === u && !r(u);
  }
  return ((ym = c), ym);
}
var mm, B4;
function Ex() {
  if (B4) return mm;
  B4 = 1;
  var r = v5(),
    c = Ap();
  function u(o) {
    for (var d = c(o), g = d.length; g--; ) {
      var v = d[g],
        p = o[v];
      d[g] = [v, p, r(p)];
    }
    return d;
  }
  return ((mm = u), mm);
}
var pm, H4;
function y5() {
  if (H4) return pm;
  H4 = 1;
  function r(c, u) {
    return function (o) {
      return o == null ? !1 : o[c] === u && (u !== void 0 || c in Object(o));
    };
  }
  return ((pm = r), pm);
}
var bm, U4;
function Ox() {
  if (U4) return bm;
  U4 = 1;
  var r = Tx(),
    c = Ex(),
    u = y5();
  function o(d) {
    var g = c(d);
    return g.length == 1 && g[0][2]
      ? u(g[0][0], g[0][1])
      : function (v) {
          return v === d || r(v, d, g);
        };
  }
  return ((bm = o), bm);
}
var _m, k4;
function xd() {
  if (k4) return _m;
  k4 = 1;
  var r = no(),
    c = ao(),
    u = '[object Symbol]';
  function o(d) {
    return typeof d == 'symbol' || (c(d) && r(d) == u);
  }
  return ((_m = o), _m);
}
var Sm, N4;
function Tp() {
  if (N4) return Sm;
  N4 = 1;
  var r = Hi(),
    c = xd(),
    u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    o = /^\w*$/;
  function d(g, v) {
    if (r(g)) return !1;
    var p = typeof g;
    return p == 'number' || p == 'symbol' || p == 'boolean' || g == null || c(g)
      ? !0
      : o.test(g) || !u.test(g) || (v != null && g in Object(v));
  }
  return ((Sm = d), Sm);
}
var xm, G4;
function Mx() {
  if (G4) return xm;
  G4 = 1;
  var r = wp(),
    c = 'Expected a function';
  function u(o, d) {
    if (typeof o != 'function' || (d != null && typeof d != 'function'))
      throw new TypeError(c);
    var g = function () {
      var v = arguments,
        p = d ? d.apply(this, v) : v[0],
        _ = g.cache;
      if (_.has(p)) return _.get(p);
      var S = o.apply(this, v);
      return ((g.cache = _.set(p, S) || _), S);
    };
    return ((g.cache = new (u.Cache || r)()), g);
  }
  return ((u.Cache = r), (xm = u), xm);
}
var Cm, F4;
function zx() {
  if (F4) return Cm;
  F4 = 1;
  var r = Mx(),
    c = 500;
  function u(o) {
    var d = r(o, function (v) {
        return (g.size === c && g.clear(), v);
      }),
      g = d.cache;
    return d;
  }
  return ((Cm = u), Cm);
}
var Am, $4;
function jx() {
  if ($4) return Am;
  $4 = 1;
  var r = zx(),
    c =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    u = /\\(\\)?/g,
    o = r(function (d) {
      var g = [];
      return (
        d.charCodeAt(0) === 46 && g.push(''),
        d.replace(c, function (v, p, _, S) {
          g.push(_ ? S.replace(u, '$1') : p || v);
        }),
        g
      );
    });
  return ((Am = o), Am);
}
var Rm, Y4;
function m5() {
  if (Y4) return Rm;
  Y4 = 1;
  function r(c, u) {
    for (var o = -1, d = c == null ? 0 : c.length, g = Array(d); ++o < d; )
      g[o] = u(c[o], o, c);
    return g;
  }
  return ((Rm = r), Rm);
}
var wm, X4;
function Dx() {
  if (X4) return wm;
  X4 = 1;
  var r = gd(),
    c = m5(),
    u = Hi(),
    o = xd(),
    d = r ? r.prototype : void 0,
    g = d ? d.toString : void 0;
  function v(p) {
    if (typeof p == 'string') return p;
    if (u(p)) return c(p, v) + '';
    if (o(p)) return g ? g.call(p) : '';
    var _ = p + '';
    return _ == '0' && 1 / p == -1 / 0 ? '-0' : _;
  }
  return ((wm = v), wm);
}
var Tm, K4;
function qx() {
  if (K4) return Tm;
  K4 = 1;
  var r = Dx();
  function c(u) {
    return u == null ? '' : r(u);
  }
  return ((Tm = c), Tm);
}
var Em, Q4;
function Cd() {
  if (Q4) return Em;
  Q4 = 1;
  var r = Hi(),
    c = Tp(),
    u = jx(),
    o = qx();
  function d(g, v) {
    return r(g) ? g : c(g, v) ? [g] : u(o(g));
  }
  return ((Em = d), Em);
}
var Om, Z4;
function E0() {
  if (Z4) return Om;
  Z4 = 1;
  var r = xd();
  function c(u) {
    if (typeof u == 'string' || r(u)) return u;
    var o = u + '';
    return o == '0' && 1 / u == -1 / 0 ? '-0' : o;
  }
  return ((Om = c), Om);
}
var Mm, V4;
function Ep() {
  if (V4) return Mm;
  V4 = 1;
  var r = Cd(),
    c = E0();
  function u(o, d) {
    d = r(d, o);
    for (var g = 0, v = d.length; o != null && g < v; ) o = o[c(d[g++])];
    return g && g == v ? o : void 0;
  }
  return ((Mm = u), Mm);
}
var zm, I4;
function Lx() {
  if (I4) return zm;
  I4 = 1;
  var r = Ep();
  function c(u, o, d) {
    var g = u == null ? void 0 : r(u, o);
    return g === void 0 ? d : g;
  }
  return ((zm = c), zm);
}
var jm, J4;
function Bx() {
  if (J4) return jm;
  J4 = 1;
  function r(c, u) {
    return c != null && u in Object(c);
  }
  return ((jm = r), jm);
}
var Dm, W4;
function Hx() {
  if (W4) return Dm;
  W4 = 1;
  var r = Cd(),
    c = a5(),
    u = Hi(),
    o = md(),
    d = xp(),
    g = E0();
  function v(p, _, S) {
    _ = r(_, p);
    for (var T = -1, w = _.length, z = !1; ++T < w; ) {
      var U = g(_[T]);
      if (!(z = p != null && S(p, U))) break;
      p = p[U];
    }
    return z || ++T != w
      ? z
      : ((w = p == null ? 0 : p.length),
        !!w && d(w) && o(U, w) && (u(p) || c(p)));
  }
  return ((Dm = v), Dm);
}
var qm, P4;
function Ux() {
  if (P4) return qm;
  P4 = 1;
  var r = Bx(),
    c = Hx();
  function u(o, d) {
    return o != null && c(o, d, r);
  }
  return ((qm = u), qm);
}
var Lm, e8;
function kx() {
  if (e8) return Lm;
  e8 = 1;
  var r = g5(),
    c = Lx(),
    u = Ux(),
    o = Tp(),
    d = v5(),
    g = y5(),
    v = E0(),
    p = 1,
    _ = 2;
  function S(T, w) {
    return o(T) && d(w)
      ? g(v(T), w)
      : function (z) {
          var U = c(z, T);
          return U === void 0 && U === w ? u(z, T) : r(w, U, p | _);
        };
  }
  return ((Lm = S), Lm);
}
var Bm, t8;
function Nx() {
  if (t8) return Bm;
  t8 = 1;
  function r(c) {
    return function (u) {
      return u == null ? void 0 : u[c];
    };
  }
  return ((Bm = r), Bm);
}
var Hm, n8;
function Gx() {
  if (n8) return Hm;
  n8 = 1;
  var r = Ep();
  function c(u) {
    return function (o) {
      return r(o, u);
    };
  }
  return ((Hm = c), Hm);
}
var Um, a8;
function Fx() {
  if (a8) return Um;
  a8 = 1;
  var r = Nx(),
    c = Gx(),
    u = Tp(),
    o = E0();
  function d(g) {
    return u(g) ? r(o(g)) : c(g);
  }
  return ((Um = d), Um);
}
var km, r8;
function p5() {
  if (r8) return km;
  r8 = 1;
  var r = Ox(),
    c = kx(),
    u = Sp(),
    o = Hi(),
    d = Fx();
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
  return ((km = g), km);
}
var Nm, l8;
function $x() {
  if (l8) return Nm;
  l8 = 1;
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
  return ((Nm = c), Nm);
}
var Gm, i8;
function Yx() {
  if (i8) return Gm;
  i8 = 1;
  var r = _p(),
    c = Cd(),
    u = md(),
    o = ql(),
    d = E0();
  function g(v, p, _, S) {
    if (!o(v)) return v;
    p = c(p, v);
    for (var T = -1, w = p.length, z = w - 1, U = v; U != null && ++T < w; ) {
      var K = d(p[T]),
        N = _;
      if (K === '__proto__' || K === 'constructor' || K === 'prototype')
        return v;
      if (T != z) {
        var $ = U[K];
        ((N = S ? S($, K, U) : void 0),
          N === void 0 && (N = o($) ? $ : u(p[T + 1]) ? [] : {}));
      }
      (r(U, K, N), (U = U[K]));
    }
    return v;
  }
  return ((Gm = g), Gm);
}
var Fm, u8;
function Xx() {
  if (u8) return Fm;
  u8 = 1;
  var r = Ep(),
    c = Yx(),
    u = Cd();
  function o(d, g, v) {
    for (var p = -1, _ = g.length, S = {}; ++p < _; ) {
      var T = g[p],
        w = r(d, T);
      v(w, T) && c(S, u(T, d), w);
    }
    return S;
  }
  return ((Fm = o), Fm);
}
var $m, c8;
function Kx() {
  if (c8) return $m;
  c8 = 1;
  var r = u5(),
    c = r(Object.getPrototypeOf, Object);
  return (($m = c), $m);
}
var Ym, f8;
function Qx() {
  if (f8) return Ym;
  f8 = 1;
  var r = o5(),
    c = Kx(),
    u = d5(),
    o = h5(),
    d = Object.getOwnPropertySymbols,
    g = d
      ? function (v) {
          for (var p = []; v; ) (r(p, u(v)), (v = c(v)));
          return p;
        }
      : o;
  return ((Ym = g), Ym);
}
var Xm, o8;
function Zx() {
  if (o8) return Xm;
  o8 = 1;
  function r(c) {
    var u = [];
    if (c != null) for (var o in Object(c)) u.push(o);
    return u;
  }
  return ((Xm = r), Xm);
}
var Km, s8;
function Vx() {
  if (s8) return Km;
  s8 = 1;
  var r = ql(),
    c = Cp(),
    u = Zx(),
    o = Object.prototype,
    d = o.hasOwnProperty;
  function g(v) {
    if (!r(v)) return u(v);
    var p = c(v),
      _ = [];
    for (var S in v) (S == 'constructor' && (p || !d.call(v, S))) || _.push(S);
    return _;
  }
  return ((Km = g), Km);
}
var Qm, h8;
function Ix() {
  if (h8) return Qm;
  h8 = 1;
  var r = i5(),
    c = Vx(),
    u = yd();
  function o(d) {
    return u(d) ? r(d, !0) : c(d);
  }
  return ((Qm = o), Qm);
}
var Zm, d8;
function Jx() {
  if (d8) return Zm;
  d8 = 1;
  var r = s5(),
    c = Qx(),
    u = Ix();
  function o(d) {
    return r(d, u, c);
  }
  return ((Zm = o), Zm);
}
var Vm, g8;
function Wx() {
  if (g8) return Vm;
  g8 = 1;
  var r = m5(),
    c = p5(),
    u = Xx(),
    o = Jx();
  function d(g, v) {
    if (g == null) return {};
    var p = r(o(g), function (_) {
      return [_];
    });
    return (
      (v = c(v)),
      u(g, p, function (_, S) {
        return v(_, S[0]);
      })
    );
  }
  return ((Vm = d), Vm);
}
var Im, v8;
function Px() {
  if (v8) return Im;
  v8 = 1;
  var r = p5(),
    c = $x(),
    u = Wx();
  function o(d, g) {
    return u(d, c(r(g)));
  }
  return ((Im = o), Im);
}
var e7 = Px();
const t7 = w0(e7);
var Jm, y8;
function n7() {
  if (y8) return Jm;
  y8 = 1;
  var r = no(),
    c = ao(),
    u = '[object Number]';
  function o(d) {
    return typeof d == 'number' || (c(d) && r(d) == u);
  }
  return ((Jm = o), Jm);
}
var Wm, m8;
function a7() {
  if (m8) return Wm;
  m8 = 1;
  var r = n7();
  function c(u) {
    return r(u) && u != +u;
  }
  return ((Wm = c), Wm);
}
var r7 = a7();
const l7 = w0(r7);
var Pm, p8;
function i7() {
  if (p8) return Pm;
  p8 = 1;
  function r(c) {
    return c == null;
  }
  return ((Pm = r), Pm);
}
var u7 = i7();
const c7 = w0(u7);
var ep, b8;
function f7() {
  if (b8) return ep;
  b8 = 1;
  var r = el(),
    c = function () {
      return r.Date.now();
    };
  return ((ep = c), ep);
}
var tp, _8;
function o7() {
  if (_8) return tp;
  _8 = 1;
  var r = /\s/;
  function c(u) {
    for (var o = u.length; o-- && r.test(u.charAt(o)); );
    return o;
  }
  return ((tp = c), tp);
}
var np, S8;
function s7() {
  if (S8) return np;
  S8 = 1;
  var r = o7(),
    c = /^\s+/;
  function u(o) {
    return o && o.slice(0, r(o) + 1).replace(c, '');
  }
  return ((np = u), np);
}
var ap, x8;
function h7() {
  if (x8) return ap;
  x8 = 1;
  var r = s7(),
    c = ql(),
    u = xd(),
    o = NaN,
    d = /^[-+]0x[0-9a-f]+$/i,
    g = /^0b[01]+$/i,
    v = /^0o[0-7]+$/i,
    p = parseInt;
  function _(S) {
    if (typeof S == 'number') return S;
    if (u(S)) return o;
    if (c(S)) {
      var T = typeof S.valueOf == 'function' ? S.valueOf() : S;
      S = c(T) ? T + '' : T;
    }
    if (typeof S != 'string') return S === 0 ? S : +S;
    S = r(S);
    var w = g.test(S);
    return w || v.test(S) ? p(S.slice(2), w ? 2 : 8) : d.test(S) ? o : +S;
  }
  return ((ap = _), ap);
}
var rp, C8;
function d7() {
  if (C8) return rp;
  C8 = 1;
  var r = ql(),
    c = f7(),
    u = h7(),
    o = 'Expected a function',
    d = Math.max,
    g = Math.min;
  function v(p, _, S) {
    var T,
      w,
      z,
      U,
      K,
      N,
      $ = 0,
      J = !1,
      te = !1,
      F = !0;
    if (typeof p != 'function') throw new TypeError(o);
    ((_ = u(_) || 0),
      r(S) &&
        ((J = !!S.leading),
        (te = 'maxWait' in S),
        (z = te ? d(u(S.maxWait) || 0, _) : z),
        (F = 'trailing' in S ? !!S.trailing : F)));
    function I(xe) {
      var et = T,
        tt = w;
      return ((T = w = void 0), ($ = xe), (U = p.apply(tt, et)), U);
    }
    function oe(xe) {
      return (($ = xe), (K = setTimeout(ce, _)), J ? I(xe) : U);
    }
    function re(xe) {
      var et = xe - N,
        tt = xe - $,
        W = _ - et;
      return te ? g(W, z - tt) : W;
    }
    function V(xe) {
      var et = xe - N,
        tt = xe - $;
      return N === void 0 || et >= _ || et < 0 || (te && tt >= z);
    }
    function ce() {
      var xe = c();
      if (V(xe)) return Ae(xe);
      K = setTimeout(ce, re(xe));
    }
    function Ae(xe) {
      return ((K = void 0), F && T ? I(xe) : ((T = w = void 0), U));
    }
    function Re() {
      (K !== void 0 && clearTimeout(K), ($ = 0), (T = N = w = K = void 0));
    }
    function se() {
      return K === void 0 ? U : Ae(c());
    }
    function Le() {
      var xe = c(),
        et = V(xe);
      if (((T = arguments), (w = this), (N = xe), et)) {
        if (K === void 0) return oe(N);
        if (te) return (clearTimeout(K), (K = setTimeout(ce, _)), I(N));
      }
      return (K === void 0 && (K = setTimeout(ce, _)), U);
    }
    return ((Le.cancel = Re), (Le.flush = se), Le);
  }
  return ((rp = v), rp);
}
var lp, A8;
function g7() {
  if (A8) return lp;
  A8 = 1;
  var r = d7(),
    c = ql(),
    u = 'Expected a function';
  function o(d, g, v) {
    var p = !0,
      _ = !0;
    if (typeof d != 'function') throw new TypeError(u);
    return (
      c(v) &&
        ((p = 'leading' in v ? !!v.leading : p),
        (_ = 'trailing' in v ? !!v.trailing : _)),
      r(d, g, { leading: p, maxWait: g, trailing: _ })
    );
  }
  return ((lp = o), lp);
}
var v7 = g7();
const y7 = w0(v7),
  m7 = () => navigator.clipboard.readText().catch((r) => (console.log(r), ''));
function p7(r, c, u) {
  const o = ((r.hue - 180) * Math.PI) / 180,
    d = (r.saturation / 100) * u;
  return { x: c.x + d * Math.cos(o), y: c.y + d * Math.sin(o) };
}
function b7() {
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
const ye = {
    Logs: sn,
    flow: o9,
    newId: s9,
    getBetweenRange: h9,
    round: d9,
    isNaN: l7,
    isNil: c7,
    omitBy: t7,
    throttle: y7,
    assign: N9,
    readClipboard: m7,
    hslToCoordinates: p7,
    getBrowser: b7,
  },
  Ad = (r) => {
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
      v = ye.round(parseInt(c.slice(6, 8) || '', 16) / 255, 1),
      p = `rgba(${o}, ${d}, ${g}, ${v})`;
    return {
      type: 'RGBA',
      red: o,
      green: d,
      blue: g,
      raw: p,
      alpha: u ? v : 1,
    };
  },
  Op = (r) => {
    const c = Ad(r),
      u = `rgb(${c.red}, ${c.green}, ${c.blue})`;
    return { type: 'RGB', red: c.red, green: c.green, blue: c.blue, raw: u };
  },
  _7 = (r, c, u, o, d) => {
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
  S7 = ({ red: r, green: c, blue: u }) => {
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
  O0 = (r) => {
    const { red: c, green: u, blue: o } = S7(r),
      d = Math.max(c, u, o),
      g = Math.min(c, u, o),
      v = d - g,
      p = ye.round(_7(d, v, c, u, o), 2),
      _ = ye.round(((d + g) / 2) * 100, 2),
      S =
        v === 0
          ? 0
          : ye.round((v / (1 - Math.abs(2 * (_ / 100) - 1))) * 100, 2),
      T = `hsl(${p}, ${S}%, ${_}%)`;
    return { type: 'HSL', hue: p, saturation: S, lightness: _, raw: T };
  },
  b5 = (r) => O0(Op(r)),
  Mp = (r) => O0({ ...r }),
  zp = (r) => {
    const c = Mp(r),
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
  _5 = (r) => zp(Ad(r)),
  S5 = (r) => ({
    type: 'RGBA',
    red: r.red,
    green: r.green,
    blue: r.blue,
    raw: `rgba(${r.red}, ${r.green}, ${r.blue}, 1)`,
    alpha: 1,
  }),
  x5 = (r) => {
    const c = O0(r);
    return {
      type: 'HSLA',
      hue: c.hue,
      saturation: c.saturation,
      lightness: c.lightness,
      alpha: 1,
      raw: `hsla(${c.hue}, ${c.saturation}%, ${c.lightness}%, 1)`,
    };
  },
  jp = (r) => {
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
  C5 = (r) => ({
    type: 'RGB',
    red: r.red,
    green: r.green,
    blue: r.blue,
    raw: `rgb(${r.red}, ${r.green}, ${r.blue})`,
  }),
  x7 = (r, c, u, o) => {
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
      red: ye.round((d + o) * 255, 0),
      green: ye.round((g + o) * 255, 0),
      blue: ye.round((v + o) * 255, 0),
    };
  },
  M0 = (r) => {
    const c = r.saturation / 100,
      u = r.lightness / 100,
      o = (1 - Math.abs(2 * u - 1)) * c,
      d = r.hue,
      g = o * (1 - Math.abs(((d / 60) % 2) - 1)),
      v = u - o / 2,
      { red: p, green: _, blue: S } = x7(d, o, g, v);
    return {
      type: 'RGB',
      red: p,
      green: _,
      blue: S,
      raw: `rgb(${p}, ${_}, ${S})`,
    };
  },
  A5 = (r) => bp(M0(r)),
  R5 = (r) => {
    const c = M0(r),
      u = `rgba(${c.red}, ${c.green}, ${c.blue}, 1)`;
    return { ...c, type: 'RGBA', raw: u, alpha: 1 };
  },
  w5 = (r) => {
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
  Dp = (r) => M0(r),
  qp = (r) => {
    const c = Dp(r),
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
  T5 = (r) => jp(qp(r)),
  E5 = (r) => {
    const c = `hsl(${r.hue}, ${r.saturation}%, ${r.lightness}%)`;
    return {
      type: 'HSL',
      hue: r.hue,
      saturation: r.saturation,
      lightness: r.lightness,
      raw: c,
    };
  },
  C7 = {
    HEX: { HEX: (r) => r, RGB: Op, RGBA: Ad, HSL: b5, HSLA: _5 },
    RGB: { HEX: bp, RGB: (r) => r, RGBA: S5, HSL: O0, HSLA: x5 },
    RGBA: { HEX: jp, RGB: C5, RGBA: (r) => r, HSL: Mp, HSLA: zp },
    HSL: { HEX: A5, RGB: M0, RGBA: R5, HSL: (r) => r, HSLA: w5 },
    HSLA: { HEX: T5, RGB: Dp, RGBA: qp, HSL: E5, HSLA: (r) => r },
  },
  pn = (r, c) => C7[r.type][c](r),
  ad = () => ({ type: 'INVALID', raw: null }),
  A7 = (r) => {
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
    const p = c
      .map((_) => v.split(_))
      .filter((_) => _.length > 1)[0]
      .map((_) => +_.replace(/[^0-9.]+/g, ''));
    if (d) {
      const [_, S, T, w] = p,
        z = w !== void 0,
        U = _ || 0,
        K = S || 0,
        N = T || 0,
        $ = w || 1;
      return {
        type: z ? 'RGBA' : 'RGB',
        red: U,
        green: K,
        blue: N,
        ...(z
          ? { alpha: $, raw: `rgba(${U}, ${K}, ${N}, ${$})` }
          : { raw: `rgb(${U}, ${K}, ${N})` }),
      };
    } else {
      const [_, S, T, w] = p,
        z = w !== void 0,
        U = _ || 0,
        K = S || 0,
        N = T || 0,
        $ = w || 1;
      return {
        type: z ? 'HSLA' : 'HSL',
        hue: U,
        saturation: K,
        lightness: N,
        ...(z
          ? { alpha: $, raw: `hsla(${U}, ${K}%, ${N}%, ${$})` }
          : { raw: `hsl(${U}, ${K}%,  ${N}%)` }),
      };
    }
  },
  R7 = (r) => {
    const c = r.total > 0.5,
      u = (v) =>
        c
          ? ye.getBetweenRange(Math.round(v * 55), 0, 55)
          : ye.getBetweenRange(Math.round(v * 225), 225, 245),
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
  w7 = (r, c, u) => {
    const o = c.total > 0.5,
      d = pn(r, 'RGBA'),
      g = ye.round(o ? d.red * 0.6 : d.red * 0.8),
      v = ye.round(o ? d.green * 0.6 : d.green * 0.8),
      p = ye.round(o ? d.blue * 0.6 : d.blue * 0.8);
    return pn(
      {
        type: 'RGBA',
        red: g,
        green: v,
        blue: p,
        alpha: d.alpha,
        raw: `rgba(${g}, ${v}, ${p}, ${d.alpha})`,
      },
      u,
    );
  },
  T7 = (r, c, u) => {
    const o = c.total > 0.5,
      d = pn(r, 'RGBA'),
      g = o ? d.red * 0.85 : d.red * 0.6,
      v = o ? d.green * 0.85 : d.green * 0.6,
      p = o ? d.blue * 0.85 : d.blue * 0.6;
    return pn(
      {
        type: 'RGBA',
        red: g,
        green: v,
        blue: p,
        alpha: 0.2,
        raw: `rgba(${g}, ${v}, ${p}, 0.2)`,
      },
      u,
    );
  },
  E7 = (r) => {
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
  O7 = (r, c, u) => {
    const o = `hsl(${r}, ${c}%, ${u}%)`;
    return { type: 'HSL', hue: r, lightness: u, saturation: c, raw: o };
  },
  M7 = (r) => {
    const [c, u, o] = r.split(',').map((d) => +d.replace(/\D+/g, ''));
    return {
      type: 'HSL',
      hue: c,
      saturation: u,
      lightness: o,
      raw: `hsl(${c}, ${u}%, ${o}%)`,
    };
  },
  z7 = (...r) =>
    typeof r[0] == 'object'
      ? E7(r[0])
      : typeof r[0] == 'string'
        ? M7(r[0])
        : O7(r[0] || 0, r[1] || 0, r[2] || 0),
  j7 = (r) => {
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
  D7 = (r, c, u, o) => {
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
  q7 = (r) => {
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
  L7 = (...r) =>
    typeof r[0] == 'object'
      ? j7(r[0])
      : typeof r == 'string'
        ? q7(r[0])
        : D7(r[0] || 0, r[1] || 0, r[2] || 0, r[3] || 1),
  B7 = (r) => {
    const c = r.raw ? r.raw : `rgb(${r.red}, ${r.green}, ${r.blue})`;
    return { ...r, type: 'RGB', raw: c };
  },
  H7 = (r, c, u) => {
    const o = `rgb(${r}, ${c}, ${u})`;
    return { type: 'RGB', red: r, green: c, blue: u, raw: o };
  },
  U7 = (r) => {
    const [c, u, o] = r.split(',').map((d) => +d.replace(/\D+/g, ''));
    return {
      type: 'RGB',
      red: c || 0,
      green: u || 0,
      blue: o || 0,
      raw: `rgb(${c || 0}, ${u || 0}, ${o || 0})`,
    };
  },
  k7 = (...r) =>
    typeof r[0] == 'object'
      ? B7(r[0])
      : typeof r[0] == 'string'
        ? U7(r[0])
        : H7(r[0] || 0, r[1] || 0, r[2] || 0),
  N7 = (r) => {
    const c = r.alpha > 1 ? r.alpha / 100 : r.alpha,
      u = r.raw ? r.raw : `rgba(${r.red}, ${r.green}, ${r.blue}, ${c})`;
    return { ...r, type: 'RGBA', alpha: c, raw: u };
  },
  G7 = (r, c, u, o) => {
    const d = o > 1 ? o / 100 : o,
      g = `rgba(${r}, ${c}, ${u}, ${d})`;
    return { type: 'RGBA', red: r, green: c, blue: u, alpha: d, raw: g };
  },
  F7 = (r) => {
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
  $7 = (...r) =>
    typeof r[0] == 'object'
      ? N7(r[0])
      : typeof r[0] == 'string'
        ? F7(r[0])
        : G7(r[0] || 0, r[1] || 0, r[2] || 0, r[3]),
  Y7 = (r, c) => (u, o) => r[o.type]({ prevState: u, props: c }, o.value),
  X7 = (r, c) => {
    const u = ye.assign(
      {},
      r,
      ye.omitBy(c, (o) => ye.isNil(o) || ye.isNaN(o)),
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
  K7 = (r, c, u) => {
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
  Q7 = (r, c) => {
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
  Z7 = (r, c, u) => {
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
  V7 = (r, c) => {
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
  I7 = (r) => {
    const c = pn(r, 'RGBA'),
      u = (v) => {
        const p = v / 255;
        return p <= 0.03928 ? p / 12.92 : Math.pow((p + 0.055) / 1.055, 2.4);
      },
      o = u(c.red) * 0.2126,
      d = u(c.green) * 0.7152,
      g = u(c.blue) * 0.0722;
    return { red: o, green: d, blue: g, total: o + d + g };
  },
  J7 = (r, c) => {
    const u = pn(r, 'RGB'),
      d = c.total > 0.5 ? 0.2 : 0.3,
      g = Math.max(u.red, u.green, u.blue),
      v = ye.getBetweenRange(g + 30, 30, 255),
      p = v * 0.5,
      _ = ye.round(ye.getBetweenRange(u.green * d, 0, p)),
      S = ye.round(ye.getBetweenRange(u.blue * d, 0, p));
    return {
      type: 'RGB',
      red: v,
      green: _,
      blue: S,
      raw: `rgb(${v}, ${_}, ${S})`,
    };
  },
  W7 = (r, c) => {
    const u = pn(r, 'RGB'),
      d = c.total > 0.5 ? 0.5 : 0.3,
      g = ye.getBetweenRange(Math.max(u.red, u.green, u.blue) - 35, 35, 255),
      v = g * 0.5,
      p = ye.round(ye.getBetweenRange(g * d, 0, v)),
      _ = ye.round(ye.getBetweenRange(g * d, 0, v));
    return {
      type: 'RGB',
      red: p,
      green: g,
      blue: _,
      raw: `rgb(${p}, ${g}, ${_})`,
    };
  },
  P7 = (r, c) => {
    const u = c.total > 0.5,
      o = pn(r, 'RGB'),
      d = Math.max(o.red, o.green, o.blue),
      g = ye.getBetweenRange(d + 50, 50, 255),
      v = ye.round(u ? g * 0.7 : g * 0.4),
      p = ye.round(u ? g * 0.4 : g * 0.15);
    return {
      type: 'RGB',
      red: g,
      green: v,
      blue: p,
      raw: `rgb(${g}, ${v}, ${p})`,
    };
  },
  eC = (r) => {
    const c = pn(r, 'RGB'),
      u = Math.max(c.red, c.green, c.blue),
      o = ye.getBetweenRange(u + 90, 90, 255),
      d = o * 0.5,
      g = ye.round(ye.getBetweenRange(o * 0.42, 0, d)),
      v = ye.round(ye.getBetweenRange(o * 0.76, 0, d));
    return {
      type: 'RGB',
      red: g,
      green: v,
      blue: o,
      raw: `rgb(${g}, ${v}, ${o})`,
    };
  },
  tC = (r) => {
    const c = pn(r, 'RGBA'),
      u = ye.round(c.red * 0.1 + 75 * 0.9),
      o = ye.round(c.green * 0.1 + 75 * 0.9),
      d = ye.round(c.blue * 0.1 + 75 * 0.9),
      g = c.alpha,
      v = `rgba(${u}, ${o}, ${d}, ${g})`;
    return { type: 'RGBA', red: u, green: o, blue: d, alpha: g, raw: v };
  },
  nC = (r) => {
    const c = pn(r, 'RGBA'),
      u = ye.round(c.red * 0.01 + 245 * 0.99),
      o = ye.round(c.green * 0.01 + 245 * 0.99),
      d = ye.round(c.blue * 0.01 + 245 * 0.99),
      g = c.alpha,
      v = `rgba(${u}, ${o}, ${d}, ${g})`;
    return { type: 'RGBA', red: u, green: o, blue: d, alpha: g, raw: v };
  },
  aC = (r, c) => {
    const u = r.red * 255,
      o = r.green * 255,
      d = r.blue * 255,
      g = `rgba(${u}, ${o}, ${d}, ${c})`;
    return { type: 'RGBA', red: u, green: o, blue: d, alpha: c, raw: g };
  },
  rC = (r, c, u, o, d) => {
    const g = pn(r, 'RGBA'),
      v = ye.round(g.red * c),
      p = ye.round(g.green * u),
      _ = ye.round(g.blue * o),
      S = g.alpha * d,
      T = `rgba(${v}, ${p}, ${_}, ${S})`;
    return { type: 'RGBA', red: v, green: p, blue: _, alpha: S, raw: T };
  },
  lC = (r) => {
    const c = { RGB: 'RGBA', HSL: 'HSLA' };
    return c[r] === void 0 ? r : c[r];
  },
  iC = (r, c) => {
    const u = pn(r, 'RGBA');
    return pn(
      { ...u, alpha: c, raw: `rgba(${u.red}, ${u.green}, ${u.blue}, ${c})` },
      lC(r.type),
    );
  },
  uC = (r) => {
    const c = pn(r, 'RGBA'),
      u = ye.round(c.red * 0.299),
      o = ye.round(c.green * 0.587),
      d = ye.round(c.blue * 0.114),
      g = u + o + d,
      v = ye.round(g * 0.15 + 255 * 0.8);
    return {
      ...c,
      red: v,
      green: v,
      blue: v,
      alpha: c.alpha,
      raw: `rgba(${v}, ${v}, ${v}, ${c.alpha})`,
    };
  },
  cC = (r) => {
    const c = pn(r, 'RGBA'),
      u = ye.round(c.red * 0.299),
      o = ye.round(c.green * 0.587),
      d = ye.round(c.blue * 0.114);
    return {
      ...c,
      red: u,
      green: o,
      blue: d,
      alpha: c.alpha,
      raw: `rgba(${u}, ${o}, ${d}, ${c.alpha})`,
    };
  },
  je = {
    makeReducer: Y7,
    makeHexFromRgb: bp,
    makeRgbFromHex: Op,
    makeRgbaFromHex: Ad,
    makeHslFromHex: b5,
    makeHslaFromHex: _5,
    makeRgbaFromRgb: S5,
    makeHslFromRgb: O0,
    makeHslaFromRgb: x5,
    makeHexFromRgba: jp,
    makeRgbFromRgba: C5,
    makeHslFromRgba: Mp,
    makeHslaFromRgba: zp,
    makeRgbFromHsl: M0,
    makeHexFromHsl: A5,
    makeRgbaFromHsl: R5,
    makeHslaFromHsl: w5,
    makeRgbFromHsla: Dp,
    makeRgbaFromHsla: qp,
    makeHexFromHsla: T5,
    makeHslFromHsla: E5,
    makeCurrentColorTo: pn,
    makeColorFromString: A7,
    makeInvalidColor: ad,
    makeLuminance: I7,
    makeCssColorString: X7,
    makeTextColorFromLuminance: R7,
    makeRgbaFromLuminance: aC,
    makeHex: J8,
    makeHSL: z7,
    makeHSLA: L7,
    makeRgb: k7,
    makeRgba: $7,
    makeShader: K7,
    makeFrameBuffer: Q7,
    makeGlslProgram: Z7,
    makeTexture2D: V7,
    makeHighlightFromLuminance: w7,
    makeShadowFromLuminance: T7,
    makeErrorColor: J7,
    makeInfoColor: eC,
    makeWarningColor: P7,
    makeSuccessColor: W7,
    makeBlackColor: tC,
    makeWhiteColor: nC,
    takeFromColor: rC,
    changeOpacity: iC,
    makeLightGreyFromColor: uC,
    makeDarkGreyFromColor: cC,
  },
  R8 = (r, c, u) => ({
    common: {
      background: r.raw,
      text: c.raw,
      black: u.darkScreen.raw,
      white: u.lightScreen.raw,
    },
    text: {
      primary: { color: c.raw, disabled: je.changeOpacity(c, 0.38).raw },
      secondary: {
        color: u.text.raw,
        disabled: je.changeOpacity(u.text, 0.38).raw,
      },
    },
    grey: {
      dark: {
        color: u.darkGrey.raw,
        disabled: je.changeOpacity(u.darkGrey, 0.38).raw,
      },
      light: {
        color: u.lightGrey.raw,
        disabled: je.changeOpacity(u.lightGrey, 0.38).raw,
      },
    },
    disabled: u.disabled.raw,
    shadow: u.shadow.raw,
    color: u.color.raw,
    accent: u.highlight.raw,
    success: u.success.raw,
    info: u.info.raw,
    warning: u.warning.raw,
    error: u.error.raw,
  }),
  fC = (r) => ({
    dark: R8(r.darkScreen, r.darkScreenText, r),
    light: R8(r.lightScreen, r.lightScreenText, r),
  }),
  oC = (r) => {
    const { theme: c } = Pr(),
      u = M.useMemo(() => c.getCurrentPallete(), [c]),
      o = M.useMemo(
        () => ({
          color: r.color || u.color.raw,
          text: r.text || u.text.raw,
          highlight: r.highlight || u.highlight.raw,
        }),
        [r.color, r.text, u.color.raw, u.text.raw, u.highlight.raw],
      ),
      d = M.useMemo(
        () => ({
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flex: `0 0 ${(r.size || 0) + 10}px`,
          background: o.color,
          color: o.text,
          fontSize: `${Math.round(r.size * 0.7)}px`,
          borderRadius: r.round ? '50%' : void 0,
          aspectRatio: '1 / 1',
          outline: 'none',
          boxSizing: 'border-box',
          '&:hover': { background: o.highlight },
        }),
        [o],
      );
    return { current: o, theme: c, styles: d };
  },
  sC = (r) => {
    const { styles: c } = oC(r);
    return x.jsx(ge, {
      as: 'button',
      withStyle: c,
      onClick: r.onClick,
      children: r.children,
    });
  },
  un = T0(sC, { flex: '0 0 auto' }),
  rd = (r) =>
    x.jsxs('svg', {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      role: 'img',
      'aria-label': 'Copy icon',
      children: [
        x.jsx('rect', {
          x: '8',
          y: '7',
          width: '10',
          height: '12',
          rx: '3',
          stroke: 'currentColor',
          strokeWidth: 1.8,
        }),
        x.jsx('rect', {
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
  hC = (r) =>
    x.jsxs('svg', {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      role: 'img',
      'aria-label': 'Export icon',
      children: [
        x.jsx('path', {
          d: 'M12 3v10',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
        }),
        x.jsx('path', {
          d: 'M8.5 6.5L12 3l3.5 3.5',
          stroke: 'currentColor',
          strokeWidth: 1.8,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        x.jsx('rect', {
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
  ro = (r) =>
    x.jsx('svg', {
      viewBox: '0 0 24 24',
      fill: 'none',
      width: '1em',
      height: '1em',
      stroke: 'currentColor',
      strokeWidth: 1.8,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': 'true',
      children: x.jsx('path', { d: 'M6 6 L18 18 M18 6 L6 18' }),
    }),
  O5 = (r) =>
    x.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      x: '0px',
      y: '0px',
      width: '1em',
      height: '1em',
      viewBox: '0 0 50 50',
      children: x.jsx('path', {
        fill: 'currentColor',
        d: 'M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z',
      }),
    }),
  Lp = (r) =>
    x.jsx('svg', {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: x.jsx('path', {
        d: 'M14.5 5L8.5 12L14.5 19',
        stroke: 'currentColor',
        strokeWidth: '2.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }),
  dC = (r) =>
    x.jsx('svg', {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: x.jsx('path', {
        d: 'M9.5 5L15.5 12L9.5 19',
        stroke: 'currentColor',
        strokeWidth: '2.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }),
  M5 = (r) =>
    x.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: x.jsx('polyline', { points: '6 9 12 15 18 9' }),
    }),
  gC = (r) =>
    x.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: x.jsx('polyline', { points: '18 15 12 9 6 15' }),
    }),
  vC = (r) =>
    x.jsx('svg', {
      xmlns: 'http://www.w3.org',
      viewBox: '0 0 24 24',
      width: '1em',
      height: '1em',
      fill: 'currentColor',
      children: x.jsx('path', {
        d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
      }),
    }),
  yC = (r) =>
    x.jsxs('svg', {
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
        x.jsxs('g', {
          children: [
            x.jsx('g', {
              children: x.jsx('circle', {
                fill: '#FFD100',
                cx: '240',
                cy: '240',
                r: '240',
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FF9500',
                d: `M240,480c66.274,0,126.274-26.863,169.706-70.294L70.294,70.294C26.863,113.726,0,173.726,0,240
			C0,372.548,107.452,480,240,480z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M240.102,228c-32.617,0-60.18-17.586-60.18-38.398c0-20.816,27.563-38.402,60.18-38.402
			c32.625,0,60.188,17.586,60.188,38.402c0,6.629,5.375,12,12,12s12-5.371,12-12c0-31.958-30.876-57.52-72.188-61.726V112
			c0-6.629-5.375-12-12-12s-12,5.371-12,12v15.876c-41.304,4.207-72.18,29.768-72.18,61.725c0,34.988,36.977,62.398,84.18,62.398
			c32.625,0,60.188,17.586,60.188,38.402c0,20.813-27.563,38.398-60.188,38.398c-32.617,0-60.18-17.586-60.18-38.398
			c0-6.629-5.375-12-12-12s-12,5.371-12,12c0,31.953,30.875,57.515,72.18,61.721V368c0,6.629,5.375,12,12,12s12-5.371,12-12v-15.876
			c41.311-4.206,72.188-29.768,72.188-61.722C324.289,255.41,287.313,228,240.102,228z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M232.156,408c0-4.402,3.602-8,8-8l0,0c4.398,0,8,3.598,8,8l0,0c0,4.398-3.602,8-8,8l0,0
			C235.758,416,232.156,412.398,232.156,408z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M215.117,414.238c-4.32-0.641-7.359-4.641-6.719-9.039l0,0c0.563-4.402,4.641-7.359,8.961-6.801
			h0.078c4.32,0.641,7.359,4.719,6.719,9.039l0,0c-0.555,4-4,6.883-7.836,6.883l0,0C215.922,414.32,215.516,414.32,215.117,414.238z
			`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M256.156,407.438c-0.641-4.398,2.398-8.398,6.805-9.039v-0.078c4.32-0.563,8.398,2.477,9.039,6.797
			l0,0c0.641,4.402-2.398,8.48-6.805,9.121l0,0c-0.398,0-0.719,0.082-1.117,0.082l0,0
			C260.156,414.32,256.719,411.438,256.156,407.438z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M190.641,408.957c-4.242-1.199-6.719-5.68-5.445-9.918l0,0c1.203-4.242,5.68-6.641,9.922-5.441l0,0
			c4.242,1.281,6.641,5.68,5.438,9.922l0,0c-1.039,3.52-4.234,5.758-7.758,5.758l0,0
			C192.078,409.277,191.359,409.199,190.641,408.957z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M279.758,403.438c-1.203-4.238,1.203-8.641,5.438-9.918l0,0c4.242-1.281,8.727,1.199,9.922,5.438
			l0,0c1.281,4.242-1.117,8.641-5.359,9.922l0,0c-0.797,0.238-1.516,0.32-2.32,0.32l0,0
			C284,409.199,280.797,406.957,279.758,403.438z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M167.039,400.238c-4-1.84-5.758-6.559-3.922-10.641l0,0c1.844-4,6.563-5.758,10.563-3.918l0,0
			c4,1.84,5.836,6.559,4,10.559l0,0c-1.359,2.961-4.242,4.719-7.281,4.719l0,0C169.281,400.957,168.156,400.719,167.039,400.238z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M302.641,396.16c-1.844-4-0.086-8.801,3.914-10.641l0,0c4-1.84,8.805-0.082,10.641,3.918l0,0
			c1.844,4.082,0.086,8.801-3.914,10.641l0,0c-1.125,0.48-2.242,0.719-3.359,0.719l0,0C306.875,400.797,304,399.039,302.641,396.16z
			`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M145.039,388.238c-3.758-2.398-4.797-7.359-2.398-11.121l0,0c2.32-3.68,7.281-4.797,11.039-2.398
			l0,0c3.68,2.398,4.797,7.359,2.398,11.039l0,0c-1.523,2.402-4.156,3.68-6.719,3.68l0,0
			C147.836,389.438,146.32,389.039,145.039,388.238z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M324.156,385.68c-2.398-3.762-1.281-8.723,2.398-11.121l0,0c3.688-2.398,8.641-1.359,11.047,2.398
			l0,0c2.398,3.68,1.359,8.641-2.32,11.043l0,0l0,0l0,0c-1.359,0.879-2.883,1.277-4.406,1.277l0,0
			C328.242,389.277,325.68,388,324.156,385.68z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M124.875,373.199c-3.273-2.961-3.68-8-0.797-11.281l0,0c2.883-3.359,8-3.758,11.281-0.879l0,0
			c3.359,2.879,3.758,8,0.797,11.281l0,0c-1.516,1.84-3.758,2.797-6,2.797l0,0C128.32,375.117,126.398,374.48,124.875,373.199z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M344,372.16c-2.883-3.363-2.484-8.402,0.797-11.281l0,0c3.359-2.879,8.398-2.559,11.281,0.801l0,0
			c2.883,3.359,2.563,8.398-0.797,11.277l0,0c-1.523,1.281-3.359,2-5.203,2l0,0C347.836,374.879,345.602,374,344,372.16z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M107.117,355.438c-2.875-3.359-2.477-8.398,0.805-11.277l0,0c3.359-2.883,8.398-2.563,11.273,0.797
			l0,0c2.961,3.363,2.563,8.402-0.719,11.281l0,0c-1.516,1.281-3.438,2-5.281,2l0,0
			C110.961,358.238,108.719,357.277,107.117,355.438z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M361.758,356c-3.359-2.883-3.68-7.922-0.797-11.281l0,0c2.875-3.359,7.914-3.68,11.281-0.801l0,0
			c3.359,2.879,3.68,7.922,0.797,11.281l0,0c-1.602,1.84-3.844,2.801-6.078,2.801l0,0C365.117,358,363.281,357.359,361.758,356z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M92.078,335.359c-2.398-3.68-1.359-8.641,2.398-11.039l0,0c3.68-2.402,8.641-1.281,11.039,2.398
			l0,0c2.406,3.68,1.281,8.641-2.398,11.039l0,0c-1.359,0.879-2.797,1.281-4.32,1.281l0,0
			C96.156,339.039,93.602,337.758,92.078,335.359z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M377.039,337.52c-3.68-2.402-4.797-7.359-2.398-11.039l0,0c2.398-3.762,7.359-4.801,11.039-2.402
			l0,0c3.758,2.402,4.797,7.359,2.398,11.039l0,0c-1.523,2.402-4.078,3.68-6.719,3.68l0,0
			C379.836,338.797,378.398,338.398,377.039,337.52z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M80,313.438c-1.844-4.078-0.078-8.801,3.922-10.641l0,0c4-1.84,8.797-0.078,10.633,3.922l0,0
			c1.844,4,0.086,8.801-3.914,10.641l0,0c-1.125,0.48-2.242,0.719-3.359,0.719l0,0C84.242,318.078,81.359,316.32,80,313.438z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M389.516,317.039c-4-1.84-5.758-6.559-3.914-10.559l0,0c1.836-4.082,6.555-5.844,10.555-4l0,0
			c4,1.84,5.844,6.637,4,10.637l0,0c-1.359,2.961-4.234,4.641-7.281,4.641l0,0C391.758,317.758,390.641,317.52,389.516,317.039z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M71.195,289.918c-1.273-4.238,1.125-8.719,5.359-9.918l0,0c4.242-1.281,8.727,1.117,9.922,5.359
			l0,0c1.281,4.238-1.117,8.719-5.359,9.918l0,0c-0.797,0.242-1.516,0.32-2.242,0.32l0,0
			C75.359,295.598,72.242,293.359,71.195,289.918z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M398.961,295.039c-4.242-1.281-6.641-5.762-5.445-10l0,0c1.281-4.242,5.766-6.641,10-5.441l0,0
			c4.242,1.281,6.641,5.68,5.445,9.922l0,0c-1.039,3.52-4.242,5.758-7.766,5.758l0,0
			C400.477,295.277,399.758,295.199,398.961,295.039z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M65.836,265.359c-0.641-4.32,2.406-8.402,6.719-9.039l0,0c4.406-0.641,8.484,2.398,9.125,6.797l0,0
			c0.641,4.32-2.398,8.402-6.805,9.043l0,0c-0.398,0.078-0.797,0.078-1.117,0.078l0,0C69.836,272.238,66.398,269.359,65.836,265.359
			z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M405.195,271.84c-4.398-0.641-7.438-4.723-6.797-9.043l0,0c0.641-4.398,4.641-7.438,9.039-6.797
			l0,0c4.398,0.637,7.359,4.637,6.805,9.039l0,0c-0.563,4-4,6.879-7.922,6.879l0,0C405.922,271.918,405.602,271.84,405.195,271.84z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M64,240.32c0-4.402,3.516-8,8-8l0,0c4.398,0,8,3.598,8,8l0,0c0,4.398-3.602,8-8,8l0,0
			C67.602,248.32,64,244.797,64,240.32z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M400,240c0-0.082,0-0.082,0-0.16l0,0c0-0.16,0-0.32,0-0.48l0,0c0-4.48,3.516-8,7.922-8.082l0,0
			c4.477,0,8,3.602,8.078,8l0,0c0,0.16,0,0.242,0,0.402l0,0c0,0.078,0,0.238,0,0.32l0,0c0,4.398-3.602,8-8,8l0,0
			C403.602,248,400,244.398,400,240z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('polygon', {
                fill: '#FFFFFF',
                points:
                  '416,239.277 416,239.277 416,239.277 416,239.277 416,239.277 		',
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M72.477,224.398c-4.32-0.641-7.359-4.719-6.797-9.039l0,0c0.641-4.402,4.641-7.441,9.039-6.801l0,0
			c4.398,0.559,7.438,4.641,6.797,8.961l0,0c-0.555,4-3.914,6.961-7.836,6.961l0,0C73.281,224.48,72.875,224.398,72.477,224.398z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M398.32,216.559c-0.641-4.32,2.398-8.398,6.719-9.039l0,0c4.398-0.641,8.477,2.398,9.117,6.719l0,0
			c0.641,4.398-2.398,8.48-6.797,9.121l0,0c-0.398,0-0.805,0.078-1.203,0.078l0,0C402.32,223.438,398.875,220.559,398.32,216.559z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M76.398,200.719c-4.242-1.281-6.641-5.68-5.438-9.922l0,0c1.281-4.238,5.68-6.719,9.914-5.438l0,0
			c4.242,1.199,6.641,5.68,5.445,9.918l0,0c-0.961,3.441-4.242,5.762-7.68,5.762l0,0C77.922,201.039,77.117,200.957,76.398,200.719z
			`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M393.359,194.32L393.359,194.32c-1.281-4.242,1.195-8.723,5.438-9.922l0,0
			c4.242-1.281,8.641,1.121,9.922,5.359l0,0l0,0l0,0c1.281,4.242-1.203,8.641-5.359,9.922l0,0c-0.805,0.238-1.523,0.32-2.32,0.32
			l0,0C397.602,200,394.398,197.758,393.359,194.32z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M83.68,177.84c-4.078-1.84-5.844-6.563-4-10.641l0,0l0,0l0,0c1.836-4,6.563-5.762,10.641-3.922l0,0
			c4,1.84,5.758,6.563,3.922,10.563l0,0c-1.281,2.957-4.242,4.719-7.281,4.719l0,0C85.836,178.559,84.719,178.32,83.68,177.84z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M385.281,172.957c-1.844-4-0.086-8.797,3.914-10.637l0,0c4.086-1.84,8.805-0.082,10.641,3.918l0,0
			c1.844,4,0.086,8.801-3.914,10.641l0,0c-1.047,0.48-2.242,0.719-3.367,0.719l0,0C389.516,177.598,386.641,175.918,385.281,172.957
			z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M94.156,156.238c-3.758-2.398-4.875-7.359-2.477-11.039l0,0c2.398-3.762,7.359-4.801,11.039-2.48
			l0,0c3.758,2.398,4.797,7.359,2.477,11.121l0,0c-1.516,2.32-4.156,3.68-6.797,3.68l0,0
			C96.961,157.52,95.438,157.039,94.156,156.238z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M374.32,153.039c-2.398-3.762-1.359-8.719,2.32-11.121l0,0c3.758-2.398,8.641-1.281,11.117,2.402
			l0,0c2.398,3.68,1.281,8.637-2.398,11.039l0,0c-1.359,0.879-2.883,1.277-4.32,1.277l0,0
			C378.398,156.637,375.836,155.359,374.32,153.039z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M107.516,136.32c-3.359-2.883-3.68-7.922-0.797-11.281l0,0c2.883-3.359,7.922-3.68,11.281-0.801
			l0,0c3.359,2.879,3.68,7.922,0.797,11.281l0,0c-1.602,1.84-3.758,2.719-6,2.719l0,0
			C110.875,138.238,109.039,137.598,107.516,136.32z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M360.555,134.797c-2.875-3.359-2.555-8.398,0.727-11.277l0,0c3.359-2.883,8.398-2.563,11.273,0.801
			l0,0c2.961,3.277,2.641,8.316-0.719,11.199l0,0c-1.516,1.359-3.359,2-5.281,2l0,0C364.32,137.52,362.156,136.637,360.555,134.797z
			`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M123.602,118.559c-2.883-3.359-2.563-8.398,0.797-11.281l0,0l0,0l0,0
			c3.359-2.957,8.398-2.559,11.281,0.801l0,0c2.875,3.281,2.563,8.32-0.805,11.281l0,0c-1.438,1.277-3.359,1.918-5.195,1.918l0,0
			C127.438,121.277,125.195,120.32,123.602,118.559z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M344.32,118.719c-3.359-2.879-3.68-7.922-0.805-11.281l0,0c2.883-3.359,7.922-3.758,11.281-0.879
			l0,0l0,0l0,0c3.359,2.879,3.68,8,0.805,11.281l0,0c-1.523,1.84-3.766,2.797-6,2.797l0,0
			C347.758,120.637,345.836,120,344.32,118.719z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M142.078,103.277c-2.398-3.758-1.359-8.719,2.398-11.117l0,0c3.68-2.402,8.641-1.363,11.039,2.398
			l0,0c2.406,3.68,1.281,8.641-2.398,11.039l0,0c-1.281,0.883-2.797,1.281-4.32,1.281l0,0
			C146.156,106.879,143.602,105.598,142.078,103.277z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M326.078,105.117c-3.758-2.398-4.883-7.359-2.477-11.117l0,0c2.398-3.68,7.359-4.801,11.039-2.402
			l0,0c3.758,2.402,4.797,7.359,2.477,11.039l0,0c-1.516,2.402-4.156,3.684-6.797,3.684l0,0
			C328.875,106.32,327.359,105.918,326.078,105.117z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M162.477,90.719c-1.836-4.082-0.078-8.801,3.922-10.641l0,0c4-1.84,8.797-0.078,10.641,3.922l0,0
			c1.836,4,0.078,8.719-3.922,10.637l0,0c-1.117,0.48-2.242,0.723-3.359,0.723l0,0C166.719,95.359,163.836,93.598,162.477,90.719z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M306,94.238c-4-1.84-5.844-6.641-4-10.641l0,0c1.836-4,6.555-5.84,10.641-4l0,0l0,0l0,0
			c4,1.84,5.758,6.563,3.914,10.641l0,0c-1.359,2.961-4.234,4.641-7.273,4.641l0,0C308.156,94.879,307.039,94.719,306,94.238z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M184.477,81.199c-1.195-4.242,1.203-8.719,5.445-10l0,0c4.234-1.199,8.633,1.199,9.914,5.438l0,0
			c1.281,4.242-1.117,8.641-5.359,9.922l0,0c-0.797,0.238-1.516,0.32-2.32,0.32l0,0C188.719,86.879,185.516,84.637,184.477,81.199z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M284.555,86.32L284.555,86.32c-4.234-1.281-6.633-5.684-5.438-9.922l0,0
			c1.203-4.238,5.68-6.719,9.922-5.441l0,0c4.242,1.203,6.641,5.602,5.438,9.84l0,0c-1.039,3.523-4.156,5.84-7.68,5.84l0,0
			C286.078,86.637,285.359,86.48,284.555,86.32z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M207.68,74.879c-0.641-4.32,2.398-8.398,6.797-9.039l0,0c0,0,0,0-0.078,0l0,0
			c4.398-0.641,8.477,2.398,9.117,6.797l0,0c0.641,4.32-2.398,8.402-6.797,9.043l0,0c-0.398,0.078-0.719,0.078-1.117,0.078l0,0
			C211.68,81.758,208.242,78.879,207.68,74.879z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M262.242,81.52L262.242,81.52c-4.32-0.563-7.445-4.641-6.805-9.039l0,0
			c0.641-4.32,4.641-7.363,9.039-6.801l0,0l0,0l0,0c4.398,0.641,7.445,4.641,6.805,9.039l0,0c-0.563,4-4,6.879-7.922,6.879l0,0
			C263.039,81.598,262.641,81.598,262.242,81.52z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFFFFF',
                d: `M231.438,72c0-4.402,3.602-8,8-8l0,0c4.398,0,8,3.52,8.078,8l0,0c0,4.398-3.594,8-8,8l0,0
			C235.039,80,231.516,76.48,231.438,72z`,
              }),
            }),
            x.jsx('g', {
              children: x.jsx('g', {
                children: x.jsx('path', {
                  fill: '#FFFFFF',
                  d: `M240,448c-114.695,0-208-93.309-208-208S125.305,32,240,32s208,93.309,208,208
				S354.695,448,240,448z M240,48C134.133,48,48,134.133,48,240s86.133,192,192,192s192-86.133,192-192S345.867,48,240,48z`,
                }),
              }),
            }),
            x.jsx('g', {
              children: x.jsx('path', {
                fill: '#FFD100',
                d: `M240,448c57.347,0,109.347-23.327,147.01-60.99L375.7,375.7C340.934,410.467,292.934,432,240,432
			c-105.867,0-192-86.133-192-192c0-52.934,21.533-100.934,56.3-135.7L92.99,92.99C55.327,130.654,32,182.654,32,240
			C32,354.691,125.305,448,240,448z`,
              }),
            }),
            x.jsxs('g', {
              children: [
                x.jsx('g', {
                  children: x.jsx('path', {
                    fill: '#FFD100',
                    d: `M252.102,368v-15.876c29.095-2.962,52.957-16.542,64.559-35.463l-17.917-17.917
				c-6.163,16.958-30.496,30.057-58.643,30.057c-32.617,0-60.18-17.586-60.18-38.398c0-6.629-5.375-12-12-12s-12,5.371-12,12
				c0,31.953,30.875,57.515,72.18,61.721V368c0,6.629,5.375,12,12,12S252.102,374.629,252.102,368z`,
                  }),
                }),
                x.jsx('g', {
                  children: x.jsx('path', {
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
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
        x.jsx('g', {}),
      ],
    }),
  mC = (r) =>
    x.jsx('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: x.jsx('path', {
        d: 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z',
      }),
    }),
  pC = (r) =>
    x.jsxs('svg', {
      xmlns: 'http://www.w3.org/2000/svg',
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '2',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      children: [
        x.jsx('circle', { cx: '12', cy: '12', r: '4' }),
        x.jsx('line', { x1: '12', y1: '1', x2: '12', y2: '4' }),
        x.jsx('line', { x1: '12', y1: '20', x2: '12', y2: '23' }),
        x.jsx('line', { x1: '1', y1: '12', x2: '4', y2: '12' }),
        x.jsx('line', { x1: '20', y1: '12', x2: '23', y2: '12' }),
        x.jsx('line', { x1: '4.22', y1: '4.22', x2: '6.34', y2: '6.34' }),
        x.jsx('line', { x1: '17.66', y1: '17.66', x2: '19.78', y2: '19.78' }),
        x.jsx('line', { x1: '4.22', y1: '19.78', x2: '6.34', y2: '17.66' }),
        x.jsx('line', { x1: '17.66', y1: '6.34', x2: '19.78', y2: '4.22' }),
      ],
    }),
  bC = (r) =>
    x.jsxs('svg', {
      width: '1em',
      height: '1em',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        x.jsx('path', {
          d: 'M8.5 7.5L4.5 11.5L8.5 15.5',
          stroke: 'currentColor',
          strokeWidth: '1.75',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        x.jsx('path', {
          d: 'M5 11.5H14C17.314 11.5 20 14.186 20 17.5',
          stroke: 'currentColor',
          strokeWidth: '1.75',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      ],
    }),
  _C = (r) => {
    const { theme: c } = Pr(),
      [u, o] = M.useState('hidden'),
      d = M.useRef(null),
      g = M.useMemo(
        () => r.options.findIndex((F) => F.id === r.value.id),
        [r.value, r.options],
      ),
      v = M.useMemo(() => c.getCurrentPallete(), [c]),
      p = M.useMemo(
        () => ({
          color: r.color || v.color.raw,
          text: r.text || v.text.raw,
          highlight: r.highlight || v.highlight.raw,
        }),
        [
          r.color,
          r.text,
          r.highlight,
          v.color.raw,
          v.text.raw,
          v.highlight.raw,
        ],
      ),
      _ = M.useMemo(
        () => ({
          containerType: 'inline-size',
          containerName: 'select',
          cursor: 'pointer',
          flex: '1 1 100%',
          background: p.color,
          color: p.text,
          transition: 'background 0.3s linear',
          '&:hover': { background: p.highlight },
        }),
        [p],
      ),
      S = M.useMemo(
        () => ({
          textAlign: 'center',
          margin: '8px',
          fontWeight: 'bold',
          color: p.text,
          flex: '1 1 auto',
          alignItems: 'center',
          fontSize: '0.7rem',
          transition: 'none',
          textTransform: r.uppercase ? 'uppercase' : 'none',
          '@container select (max-width: 300px)': { fontSize: '0.6rem' },
        }),
        [p.text, r.uppercase],
      ),
      T = M.useCallback(
        (F) => ({
          visibility: u === 'visible' ? 'visible' : 'hidden',
          zIndex: F.zIndex.selectItems,
          gap: '5px',
          flexDirection: 'column',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: '100%',
          background: p.color,
          color: p.text,
          transition: 'none',
        }),
        [u, p.color, p.text],
      ),
      w = M.useCallback(
        (F) => ({
          cursor: 'pointer',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flex: '0 0 50px',
          fontSize: '0.75rem',
          padding: `${F.padding.medium}px`,
          color: p.text,
          transition: 'none',
          '&:hover': { background: p.highlight },
        }),
        [p.highlight, p.text],
      ),
      z = M.useCallback(
        (F) => {
          (F.stopPropagation(),
            r.onChange(r.options[g <= 0 ? r.options.length - 1 : g - 1]));
        },
        [r.options, r.onChange, g],
      ),
      U = M.useCallback(
        (F) => {
          (F == null || F.stopPropagation(),
            r.onChange(r.options[g >= r.options.length - 1 ? 0 : g + 1]));
        },
        [r.options, r.onChange, g],
      ),
      K = M.useCallback(
        (F) => (I) => {
          (I.stopPropagation(), r.onChange(F), o('hidden'));
        },
        [r.onChange],
      ),
      N = M.useCallback((F) => {
        (F.stopPropagation(), o('visible'));
      }, []),
      $ = M.useCallback((F) => {
        (F.stopPropagation(), o('hidden'));
      }, []),
      J = M.useCallback(() => {
        u === 'hidden' ? o('visible') : U();
      }, [u, U]),
      te = M.useCallback(
        (F) => {
          const oe = { ArrowDown: J, ArrowLeft: z, ArrowRight: U, Enter: $ }[
            F.key
          ];
          oe && oe();
        },
        [J, z, U, $],
      );
    return (
      M.useEffect(
        function () {
          const I = d.current;
          if (I !== null)
            return (
              I.addEventListener('keydown', te),
              () => {
                I.removeEventListener('keydown', te);
              }
            );
        },
        [J, z, U, $],
      ),
      {
        current: p,
        theme: c,
        containerRef: d,
        setPreviousValue: z,
        setNextValue: U,
        openSelect: N,
        closeSelect: $,
        selectVisibility: u,
        onOptionSelect: K,
        currentValueIndex: g,
        containerStyle: _,
        textStyle: S,
        listStyle: T,
        optionStyle: w,
      }
    );
  },
  x0 = (r) => {
    var z;
    const {
      current: c,
      containerStyle: u,
      textStyle: o,
      listStyle: d,
      optionStyle: g,
      containerRef: v,
      setNextValue: p,
      setPreviousValue: _,
      openSelect: S,
      closeSelect: T,
      onOptionSelect: w,
    } = _C(r);
    return x.jsxs(ge, {
      tabIndex: 0,
      ref: v,
      onClick: S,
      withStyle: u,
      children: [
        r.directionals &&
          x.jsx(un, {
            color: 'inherit',
            text: c.text,
            highlight: c.color,
            round: !1,
            onClick: _,
            size: 24,
            children: x.jsx(Lp, {}),
          }),
        x.jsx(pp, {
          as: 'span',
          withStyle: o,
          justifyContent: r.textAligment,
          children: ((z = r.value) == null ? void 0 : z.display) || r.label,
        }),
        x.jsx(un, {
          color: 'inherit',
          text: c.text,
          highlight: c.color,
          round: !1,
          onClick: S,
          size: 24,
          children: x.jsx(M5, {}),
        }),
        r.directionals &&
          x.jsx(un, {
            color: 'inherit',
            text: c.text,
            highlight: c.color,
            round: !1,
            onClick: p,
            size: 24,
            children: x.jsx(dC, {}),
          }),
        x.jsxs(ge, {
          as: 'ul',
          withStyle: d,
          children: [
            x.jsx(
              ge,
              { as: 'li', withStyle: g, onClick: T, children: x.jsx(ro, {}) },
              'close',
            ),
            x.jsx(If, {
              vertical: !0,
              primary: c.color,
              highlight: c.highlight,
              behavior: 'smooth',
              gap: '20px',
              transition: 'none',
              children: r.options.map((U) =>
                x.jsx(
                  ge,
                  {
                    as: 'li',
                    withStyle: g,
                    onClick: w(U),
                    children: U.display,
                  },
                  U.id,
                ),
              ),
            }),
          ],
        }),
      ],
    });
  },
  SC = (r) => {
    const { theme: c } = Pr(),
      u = M.useRef(null),
      o = M.useRef(null),
      d = M.useMemo(() => ye.newId(), []),
      g = M.useMemo(() => ye.newId(), []),
      v = M.useMemo(() => c.getCurrentPallete(), []),
      p = M.useCallback(
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
      _ = M.useCallback(
        (w) => ({
          flex: '1 0 auto',
          pointerEvents: 'none',
          touchAction: 'none',
          fontSize: `${w.textSize.small}rem`,
          userSelect: 'none',
          border: '1px solid transparent',
          textAlign: r.labelAlign ? r.labelAlign : 'center',
          borderRight: 'none',
          borderRadius: '3px',
          fontWeight: 'bold',
          cursor: 'default',
          padding: `${w.padding.small}px 0px`,
          paddingLeft: '5px',
          background: r.highlight ? r.highlight : v.contrast.raw,
          color: r.text || v.text.raw,
          ...(r.disableLeftRadius
            ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }
            : {}),
          ...(r.disableRightRadius
            ? { borderTopRightRadius: 0, borderBottomRightRadius: 0 }
            : {}),
          '&:focus': { outline: 'none', boxShadow: 'none' },
        }),
        [
          r.highlight,
          r.disableLeftRadius,
          r.disableRightRadius,
          r.labelAlign,
          v,
        ],
      ),
      S = M.useCallback(
        (w) => ({
          flex: '1 1 auto',
          width: '100%',
          fontSize: `${w.textSize.small}rem`,
          fontWeight: 'bold',
          background: 'transparent',
          touchAction: 'manipulation',
          textAlign: r.textAlign ? r.textAlign : 'center',
          boxShadow: 'none',
          outline: 'none',
          border: '1px solid transparent',
          borderLeft: 'none',
          padding: `${w.padding.small}px 0px`,
          paddingLeft: '5px',
          borderRadius: '3px',
          color: r.text || v.text.raw,
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
            background: `${r.color || v.shadow} !important`,
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
            background: r.highlight ? r.highlight : v.highlight.raw,
          },
          '&:hover': {
            background: r.highlight ? r.highlight : v.highlight.raw,
          },
          '&:focus': {
            background: r.highlight ? r.highlight : v.highlight.raw,
            outline: 'none',
            boxShadow: 'none',
          },
          '&:focus-visible': {
            background: r.highlight ? r.highlight : v.highlight.raw,
            outline: 'none',
            boxShadow: 'none',
          },
          '&:active': {
            background: r.highlight ? r.highlight : v.highlight.raw,
          },
        }),
        [
          r.highlight,
          r.disableLeftRadius,
          r.disableRightRadius,
          r.textAlign,
          v.text.raw,
          v.highlight.raw,
          v.contrast.raw,
          v.shadow.raw,
        ],
      ),
      T = M.useCallback(
        (w) => {
          r.onChange &&
            r.onChange(
              w.target.value.length === 0
                ? void 0
                : r.type === 'number'
                  ? +(w.target.value || 0)
                  : w.target.value || '',
            );
        },
        [r],
      );
    return (
      M.useEffect(function () {
        const z = u.current,
          U = o.current;
        if (z === null || U === null) return;
        const K = (N) => {
          (N.preventDefault(), U.blur(), z.blur());
        };
        return (
          U.addEventListener('wheel', K, { passive: !1 }),
          z.addEventListener('wheel', K, { passive: !1 }),
          () => {
            (U.removeEventListener('wheel', K),
              z.removeEventListener('wheel', K));
          }
        );
      }, []),
      {
        id: g,
        labelId: d,
        labelRef: u,
        inputRef: o,
        props: r,
        onChange: T,
        labelStyle: _,
        inputStyle: S,
        containerStyle: p,
      }
    );
  },
  pa = T0((r) => {
    const {
      onChange: c,
      id: u,
      labelId: o,
      labelStyle: d,
      inputStyle: g,
      containerStyle: v,
      inputRef: p,
      labelRef: _,
    } = SC(r);
    return x.jsxs(ge, {
      withStyle: v,
      children: [
        r.label &&
          x.jsx(ge, {
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
        x.jsxs(ge, {
          children: [
            x.jsx(ge, {
              ref: p,
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
            r.children && x.jsx(ge, { children: r.children }),
          ],
        }),
      ],
    });
  }),
  na = {
    getInputOrColor: (r, c, u) => {
      const o = je.makeColorFromString(r),
        d = {
          ifInputIsAColor: (g) => (
            o.type !== 'INVALID' && g(je.makeCurrentColorTo(o, c)),
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
      return ye.assign(
        {},
        r,
        ye.omitBy(c, (u) => ye.isNil(u) || ye.isNaN(u)),
      );
    },
  },
  xC = (r) => {
    var _;
    const c = M.useMemo(
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
      u = M.useMemo(
        () => ({
          flexDirection: 'column',
          gap: '10px',
          height: '100%',
          justifyContent: 'center',
        }),
        [],
      ),
      o = M.useCallback(
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
        d.length >= 8 ? ye.round(parseInt(d.substring(6, 8), 16) / 255, 1) : 1,
      v = M.useCallback(
        (S) =>
          na
            .getInputOrColor(S, 'HEX', 'string')
            .ifInputIsAColor((T) => {
              r.onChange && r.onChange(T);
            })
            .ifInputIsAValue((T) => {
              r.onChange && r.onChange({ type: 'HEX', raw: `#${T}` });
            }),
        [r],
      ),
      p = M.useCallback(
        (S) => {
          const T = Math.round(S * 255)
            .toString(16)
            .slice(-2)
            .padStart(2, '0')
            .toUpperCase();
          r.onChange &&
            r.onChange({
              type: 'HEX',
              raw: `#${d.length >= 8 ? d.substring(0, 6) + T : d + T}`,
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
      onAlphaChange: p,
    };
  },
  CC = (r) => {
    const {
      gradient: c,
      value: u,
      alpha: o,
      containerStyle: d,
      markerStyle: g,
      onChange: v,
      onAlphaChange: p,
    } = xC(r);
    return x.jsxs(ge, {
      withStyle: d,
      children: [
        x.jsxs(ge, {
          flex: '0 0 45px',
          children: [
            x.jsx(ge, {
              flex: '0 0 35px',
              withStyle: g,
              children: x.jsx('b', { children: '#' }),
            }),
            x.jsx(pa, {
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
        x.jsx(ge, {
          flex: '0 0 15px',
          padding: '0 50px',
          children: x.jsx(z0, {
            max: 1,
            min: 0,
            step: 0.1,
            deg: 90,
            direction: 'horizontal',
            colors: c,
            value: o,
            onChange: p,
          }),
        }),
      ],
    });
  },
  AC = ({ hasAlpha: r, value: c, onChange: u }) => {
    const o = M.useMemo(
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
      d = M.useMemo(
        () => ({
          flexDirection: 'column',
          gap: '10px',
          height: '100%',
          justifyContent: 'center',
        }),
        [],
      ),
      g = M.useCallback(
        (S) =>
          na
            .getInputOrColor(S, r ? 'RGBA' : 'RGB', 'number')
            .ifInputIsAColor((T) => {
              u && u(T);
            })
            .ifInputIsAValue((T) => {
              u &&
                u(
                  na.updateColorObject(c, {
                    red: T,
                    raw: je.makeCssColorString(c, { red: T }),
                  }),
                );
            }),
        [u, r],
      ),
      v = M.useCallback(
        (S) =>
          na
            .getInputOrColor(S, r ? 'RGBA' : 'RGB', 'number')
            .ifInputIsAColor((T) => {
              u && u(T);
            })
            .ifInputIsAValue((T) => {
              u &&
                u(
                  na.updateColorObject(c, {
                    green: T,
                    raw: je.makeCssColorString(c, { green: T }),
                  }),
                );
            }),
        [u, r],
      ),
      p = M.useCallback(
        (S) =>
          na
            .getInputOrColor(S, r ? 'RGBA' : 'RGB', 'number')
            .ifInputIsAColor((T) => {
              u && u(T);
            })
            .ifInputIsAValue((T) => {
              u &&
                u(
                  na.updateColorObject(c, {
                    blue: T,
                    raw: je.makeCssColorString(c, { blue: T }),
                  }),
                );
            }),
        [u, r],
      ),
      _ = M.useCallback(
        (S) => {
          u &&
            r &&
            u(
              na.updateColorObject(c, {
                alpha: S,
                raw: je.makeCssColorString(c, { alpha: S }),
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
      onBlueChange: p,
      onAlphaChange: _,
    };
  },
  RC = (r) => {
    const {
      red: c,
      green: u,
      blue: o,
      alpha: d,
      gradient: g,
      containerStyle: v,
      onAlphaChange: p,
      onRedChange: _,
      onGreenChange: S,
      onBlueChange: T,
    } = AC(r);
    return x.jsxs(ge, {
      withStyle: v,
      children: [
        x.jsxs(ge, {
          flex: '0 0 45px',
          children: [
            x.jsx(
              pa,
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
            x.jsx(
              pa,
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
            x.jsx(
              pa,
              {
                type: 'text',
                label: 'BLUE',
                value: o,
                text: r.text,
                onChange: T,
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
          x.jsx(ge, {
            flex: '0 0 15px',
            padding: '0 50px',
            children: x.jsx(z0, {
              max: 1,
              min: 0,
              step: 0.1,
              deg: 90,
              direction: 'horizontal',
              colors: g,
              value: d,
              onChange: p,
            }),
          }),
      ],
    });
  },
  wC = (r) => {
    var p, _, S, T, w, z, U, K, N;
    const c = M.useMemo(
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
      u = M.useMemo(
        () => ({
          flexDirection: 'column',
          gap: '10px',
          height: '100%',
          justifyContent: 'center',
        }),
        [],
      ),
      o = M.useCallback(
        ($) =>
          na
            .getInputOrColor($, r.hasAlpha ? 'HSLA' : 'HSL', 'number')
            .ifInputIsAColor((J) => {
              r.onChange && r.onChange(J);
            })
            .ifInputIsAValue((J) => {
              r.onChange &&
                r.onChange(
                  na.updateColorObject(r.value, {
                    hue: J,
                    raw: je.makeCssColorString(r.value, { hue: J }),
                  }),
                );
            }),
        [r],
      ),
      d = M.useCallback(
        ($) =>
          na
            .getInputOrColor($, r.hasAlpha ? 'HSLA' : 'HSL', 'number')
            .ifInputIsAColor((J) => {
              r.onChange && r.onChange(J);
            })
            .ifInputIsAValue((J) => {
              r.onChange &&
                r.onChange(
                  na.updateColorObject(r.value, {
                    saturation: J,
                    raw: je.makeCssColorString(r.value, { saturation: J }),
                  }),
                );
            }),
        [r],
      ),
      g = M.useCallback(
        ($) =>
          na
            .getInputOrColor($, r.hasAlpha ? 'HSLA' : 'HSL', 'number')
            .ifInputIsAColor((J) => {
              r.onChange && r.onChange(J);
            })
            .ifInputIsAValue((J) => {
              r.onChange &&
                r.onChange(
                  na.updateColorObject(r.value, {
                    lightness: J,
                    raw: je.makeCssColorString(r.value, { lightness: J }),
                  }),
                );
            }),
        [r],
      ),
      v = M.useCallback(
        ($) => {
          r.onChange &&
            r.onChange(
              na.updateColorObject(r.value, {
                alpha: $,
                raw: je.makeCssColorString(r.value, { alpha: $ }),
              }),
            );
        },
        [r],
      );
    return {
      hasAlpha: r.hasAlpha,
      currentColor: r.hasAlpha
        ? `hsla(${((p = r.value) == null ? void 0 : p.hue) || 0}, ${((_ = r.value) == null ? void 0 : _.saturation) || 0}%, ${((S = r.value) == null ? void 0 : S.lightness) || 0}%, ${r.value.alpha})`
        : `hsl(${((T = r.value) == null ? void 0 : T.hue) || 0}, ${((w = r.value) == null ? void 0 : w.saturation) || 0}%, ${((z = r.value) == null ? void 0 : z.lightness) || 0}%)`,
      hue: ((U = r.value) == null ? void 0 : U.hue) || 0,
      saturation: ((K = r.value) == null ? void 0 : K.saturation) || 0,
      lightness: ((N = r.value) == null ? void 0 : N.lightness) || 0,
      alpha: r.value.alpha === void 0 ? 1 : r.value.alpha,
      onHueChange: o,
      onSaturationChange: d,
      onLightnessChange: g,
      onAlphaChange: v,
      gradient: c,
      containerStyle: u,
    };
  },
  TC = (r) => {
    const {
      hue: c,
      saturation: u,
      lightness: o,
      alpha: d,
      gradient: g,
      containerStyle: v,
      onHueChange: p,
      onSaturationChange: _,
      onLightnessChange: S,
      onAlphaChange: T,
      currentColor: w,
    } = wC(r);
    return x.jsxs(ge, {
      withStyle: v,
      children: [
        x.jsxs(ge, {
          flex: '0 0 45px',
          children: [
            x.jsx(pa, {
              type: 'text',
              label: 'HUE',
              value: c,
              text: r.text,
              highlight: r.highlight,
              color: w,
              onChange: p,
              disableLeftRadius: !0,
              disableRightRadius: !0,
              min: 0,
              max: 360,
            }),
            x.jsx(pa, {
              type: 'text',
              label: 'Chroma',
              value: u,
              text: r.text,
              highlight: r.highlight,
              color: w,
              onChange: _,
              disableLeftRadius: !0,
              disableRightRadius: !0,
              min: 0,
              max: 100,
            }),
            x.jsx(pa, {
              type: 'text',
              label: 'Tone',
              value: o,
              text: r.text,
              highlight: r.highlight,
              color: w,
              onChange: S,
              disableLeftRadius: !0,
              disableRightRadius: !0,
              min: 0,
              max: 100,
            }),
          ],
        }),
        r.hasAlpha &&
          x.jsx(ge, {
            flex: '0 0 15px',
            padding: '0 50px',
            children: x.jsx(z0, {
              max: 1,
              min: 0,
              step: 0.1,
              deg: 90,
              direction: 'horizontal',
              colors: g,
              value: d,
              onChange: T,
            }),
          }),
      ],
    });
  },
  EC = ({ value: r, type: c, onChange: u }) => {
    M.useEffect(
      function () {
        (r == null ? void 0 : r.type) !== c && u(je.makeCurrentColorTo(r, c));
      },
      [c, u, r],
    );
    const o = M.useCallback(
        (v) => {
          u(v);
        },
        [u],
      ),
      d = M.useCallback(
        (v) => {
          u(v);
        },
        [u],
      ),
      g = M.useCallback(
        (v) => {
          u(v);
        },
        [u],
      );
    return {
      value: r,
      onHexInputChange: o,
      onRgbInputChange: d,
      onHslInputChange: g,
    };
  },
  OC = T0((r) => {
    const {
      value: c,
      onHexInputChange: u,
      onRgbInputChange: o,
      onHslInputChange: d,
    } = EC(r);
    return x.jsxs(M.Fragment, {
      children: [
        r.type === 'HEX' &&
          x.jsx(
            CC,
            { hex: c, onChange: u, text: r.text, highlight: r.highlight },
            'hex',
          ),
        (r.type === 'RGB' || r.type === 'RGBA') &&
          x.jsx(
            RC,
            {
              value: c,
              onChange: o,
              hasAlpha: r.type === 'RGBA',
              text: r.text,
              highlight: r.highlight,
            },
            'rgb',
          ),
        (r.type === 'HSL' || r.type === 'HSLA') &&
          x.jsx(
            TC,
            {
              value: c,
              onChange: d,
              hasAlpha: r.type === 'HSLA',
              text: r.text,
              highlight: r.highlight,
            },
            'hsl',
          ),
      ],
    });
  }),
  MC = `#version 300 es

precision highp float;

layout(location = 0) in vec4 a_position;
  
void main() {
    gl_Position = a_position;
}`,
  zC = `#version 300 es

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
  jC = `#version 300 es

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
  w8 = {
    type: 5,
    vertices: new Float32Array([-1, 1, 1, 1, -1, -1, 1, -1]),
    first: 0,
    count: 4,
  },
  T8 = (r, c, u, o, d, g = [], v = void 0) => {
    const p = r.createBuffer();
    (r.enableVertexAttribArray(0),
      r.bindBuffer(r.ARRAY_BUFFER, p),
      r.vertexAttribPointer(0, 2, r.FLOAT, !1, 0, 0),
      r.useProgram(u),
      r.bindVertexArray(c),
      v && r.activeTexture(v));
    for (const T of g) r.bindTexture(r.TEXTURE_2D, T);
    const _ = Object.keys(d),
      S = _.reduce((T, w) => ({ ...T, [w]: r.getUniformLocation(u, w) }), {});
    for (const T of _) {
      const w = S[T],
        [z, U] = d[T];
      r[z](w, U);
    }
    (r.bufferData(r.ARRAY_BUFFER, o.vertices, r.STATIC_DRAW),
      r.drawArrays(o.type, o.first, o.count));
  },
  Ft = {
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
        return Ft.getCanvasContext(r.current, c, u);
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
      const c = je.makeShader(
          r.webGL,
          r.webGL.VERTEX_SHADER,
          Ft.prepareGlslSrc(MC, r.props),
        ),
        u = je.makeGlslProgram(
          r.webGL,
          c,
          je.makeShader(
            r.webGL,
            r.webGL.FRAGMENT_SHADER,
            Ft.prepareGlslSrc(zC, r.props),
          ),
        ),
        o = je.makeGlslProgram(
          r.webGL,
          c,
          je.makeShader(
            r.webGL,
            r.webGL.FRAGMENT_SHADER,
            Ft.prepareGlslSrc(jC, r.props),
          ),
        ),
        d = r.webGL.createVertexArray();
      return (
        r.webGL.bindVertexArray(d),
        { ...r, vertex: c, wheel: u, pickers: o, vao: d }
      );
    },
    prepareTexture: (r) => {
      const c = je.makeTexture2D(r.webGL, r.props.computed.totalSize),
        u = je.makeFrameBuffer(r.webGL, c);
      return (
        T8(r.webGL, r.vao, r.wheel, w8, {
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
        r.webGL.readPixels(
          c.x,
          c.y,
          1,
          1,
          r.webGL.RGBA,
          r.webGL.UNSIGNED_BYTE,
          u,
        );
        const o = u[3] / 255;
        return {
          ...c,
          color: {
            type: 'RGBA',
            red: u[0],
            green: u[1],
            blue: u[2],
            alpha: o,
            raw: `rgba(${u[0]}, ${u[1]}, ${u[2]}, ${o})`,
          },
        };
      }),
    }),
    draw: (r) => (
      r.webGL.bindFramebuffer(r.webGL.FRAMEBUFFER, null),
      T8(
        r.webGL,
        r.vao,
        r.pickers,
        w8,
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
        p = c.data[g + 1],
        _ = c.data[g + 2];
      return {
        type: 'RGBA',
        red: v,
        green: p,
        blue: _,
        alpha: 1,
        raw: `rgba(${v}, ${p}, ${_}, 1)`,
      };
    },
    getWheelOutput: (r) =>
      r.colors.map(({ color: c, id: u }) => ({ id: u, color: c })),
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
        p = r.radius - 12;
      return [
        g <= u
          ? { ...c }
          : {
              x: r.center.x + p * Math.cos(v),
              y: r.center.y + p * Math.sin(v),
            },
        v,
        g,
      ];
    },
    freeMove: (r, c, u, o) => {
      const [d] = Ft.clampPosition(u, o),
        g = r.map(({ x: v, y: p }) => ({ x: v, y: p }));
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
        [p, _, S] = Ft.clampPosition(d, g);
      return r.map((T, w) => {
        if (T.id === c) return { ...T, ...p };
        const z = w - u,
          U = _ + z * v,
          K = Math.atan2(Math.sin(U), Math.cos(U)),
          [N] = Ft.clampPosition(d, {
            x: d.center.x + S * Math.cos(K),
            y: d.center.y + S * Math.sin(K),
          });
        return { ...T, ...N };
      });
    },
    intersects: (r, c, u) => {
      const o = r.x - c.x,
        d = r.y - c.y;
      return o * o + d * d <= u * u;
    },
  },
  DC = ye.flow(
    Ft.prepare,
    Ft.clear,
    Ft.compile,
    Ft.prepareTexture,
    Ft.fillColors,
    Ft.draw,
    Ft.bind,
  ),
  qC = { draw: DC },
  LC = (r) => {
    const c = M.useRef(null),
      u = M.useRef(!1),
      o = M.useRef(0),
      d = M.useRef(0),
      g = M.useRef(0),
      v = M.useMemo(
        () => new OffscreenCanvas(r.computed.totalSize, r.computed.totalSize),
        [r.computed.totalSize],
      ),
      p = M.useCallback((w, z, U, K, N, $, J) => {
        if ((w.preventDefault(), w.stopPropagation(), K === -1)) return;
        const te = c.current;
        if (te === null) return;
        const F = Ft.getMousePosition(te, w);
        J
          ? r.onPickersMove(Ft.freeMove(z, U, $, F))
          : r.onPickersMove(Ft.move(z, U, K, N, $, F));
      }, []),
      _ = M.useCallback(
        ye.throttle((w) => {
          (cancelAnimationFrame(o.current),
            (o.current = requestAnimationFrame(() =>
              p(
                w,
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
          p,
          r.pickers,
          r.selectedPicker,
          r.selectedIndex,
          r.distanceBetweenEachPicker,
          r.computed,
          r.freeMove,
        ],
      ),
      S = M.useCallback(
        (w) => {
          (w.preventDefault(), w.stopPropagation());
          const z = c.current;
          (z !== null &&
            z.hasPointerCapture(w.pointerId) &&
            z.releasePointerCapture(w.pointerId),
            r.onSelectedPickerChange(-1, void 0));
        },
        [r.onSelectedPickerChange],
      ),
      T = M.useCallback(
        (w) => {
          var $;
          (w.preventDefault(), w.stopPropagation());
          const z = c.current;
          if (z === null) return;
          z.setPointerCapture(w.pointerId);
          const U = Ft.getMousePosition(z, w),
            K = r.pickers.findIndex((J) =>
              Ft.intersects(U, J, r.computed.pickerRadius),
            ),
            N = ($ = r.pickers[K]) == null ? void 0 : $.id;
          (r.onSelectedPickerChange(K, N),
            cancelAnimationFrame(g.current),
            (g.current = requestAnimationFrame(() =>
              p(
                w,
                r.pickers,
                N,
                K,
                r.distanceBetweenEachPicker,
                r.computed,
                r.freeMove,
              ),
            )));
        },
        [r.pickers, r.computed, _, p, r.distanceBetweenEachPicker, r.freeMove],
      );
    return (
      M.useEffect(
        function () {
          if (u.current) return;
          const z = c.current;
          if (z === null || r.computed.totalSize <= 0) return;
          const { context: U } = Ft.getCanvasContext(z, '2d', {
              willReadFrequently: !0,
              premultipliedAlpha: !1,
            }),
            { context: K } = Ft.getCanvasContext(v, 'webgl2', {
              preserveDrawingBuffer: !1,
              willReadFrequently: !0,
            });
          ((u.current = !0),
            cancelAnimationFrame(d.current),
            (d.current = requestAnimationFrame(async () => {
              const N = qC.draw({
                canvas: z,
                props: r,
                cache: v,
                render2d: U,
                webGL: K,
              });
              (r.onChange(Ft.getWheelOutput(N)), (u.current = !1));
            })));
        },
        [r.computed, r.pickers, r.darkness, r.freeMove, r.onChange],
      ),
      M.useEffect(
        function () {
          const z = c.current;
          z !== null &&
            (r.selectedIndex !== -1
              ? (z.onpointermove = _)
              : (z.onpointermove = null));
        },
        [r.selectedIndex, _],
      ),
      { canvasRef: c, onPointerDown: T, onPointerUp: S, onPointerMove: _ }
    );
  },
  z5 = (r) => {
    const { canvasRef: c, onPointerDown: u, onPointerUp: o } = LC(r);
    return x.jsx(ge, {
      position: 'relative',
      justifyContent: 'center',
      atRow: r.atRow,
      children: x.jsx(ge, {
        ref: c,
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
  BC = () => {
    const r = M.useCallback(({ width: v, height: p }) => {
        const _ = window.devicePixelRatio || 1,
          T = Math.min(v, p),
          w = Math.round(Math.round(T) * 0.7),
          z = w / 2,
          U = ye.round(w * 0.04),
          K = { x: w / 2, y: w / 2 };
        return { radius: z, pickerRadius: U, center: K, dpr: _, totalSize: w };
      }, []),
      c = M.useCallback(
        (v, p) => Array.from({ length: v }, (_, S) => (p === 360 ? 1 : S * p)),
        [],
      ),
      u = M.useCallback((v) => (v * Math.PI) / 180, []),
      o = M.useCallback((v, p, _) => {
        const S = Math.cos(_),
          T = Math.sin(_),
          w = S * (p.x - v.x) - T * (p.y - v.y) + v.x,
          z = T * (p.x - v.x) + S * (p.y - v.y) + v.y;
        return { x: w, y: z };
      }, []),
      d = M.useCallback(
        (v, p, _, S = void 0) => {
          const T = c(v, p),
            w = S || { x: _.center.x, y: _.center.y + _.radius / 3 };
          return T.map((z, U) => {
            const K = ye.newId();
            return U === 0
              ? { ...w, id: K }
              : { ...o(_.center, w, u(z)), id: K };
          });
        },
        [c, u, o],
      ),
      g = M.useCallback((v, p) => {
        if (p.length <= 0) return !0;
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
        return p
          .flatMap((T) =>
            _.flatMap((w) => [
              je.makeCurrentColorTo(T[w].color, v.type).raw.replace(/\s/g, ''),
              je
                .makeCurrentColorTo(T[w].highlight, v.type)
                .raw.replace(/\s/g, ''),
              je.makeCurrentColorTo(T[w].text, v.type).raw.replace(/\s/g, ''),
              je.makeCurrentColorTo(T[w].shadow, v.type).raw.replace(/\s/g, ''),
            ]),
          )
          .some((T) => T === v.raw.replace(/\s/g, ''));
      }, []);
    return { calculeSizes: r, makePickers: d, isColorPresent: g };
  },
  j5 = [
    { id: 'hex', display: 'HEX', value: 'HEX' },
    { id: 'hsl', display: 'HSL', value: 'HSL' },
    { id: 'hsla', display: 'HSLA', value: 'HSLA' },
    { id: 'rgb', display: 'RGB', value: 'RGB' },
    { id: 'rgba', display: 'RGBA', value: 'RGBA' },
  ],
  D5 = [
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
  q5 = [
    { id: 'color', display: 'Color', value: 'color' },
    { id: 'highlight', display: 'Highlight', value: 'highlight' },
    { id: 'text', display: 'Primary Text', value: 'text' },
    { id: 'disabled', display: 'Disabled', value: 'disabled' },
    { id: 'shadow', display: 'Shadow', value: 'shadow' },
    { id: 'darkScreen', display: 'Black', value: 'darkScreen' },
    { id: 'darkScreenText', display: 'Black Text', value: 'darkScreenText' },
    { id: 'lightScreen', display: 'White', value: 'lightScreen' },
    { id: 'lightScreenText', display: 'White Text', value: 'lightScreenText' },
    { id: 'success', display: 'Success', value: 'success' },
    { id: 'warning', display: 'Warning', value: 'warning' },
    { id: 'info', display: 'Info', value: 'info' },
    { id: 'error', display: 'Error', value: 'error' },
  ],
  HC = (r) => {
    var g, v;
    const c = M.useCallback(
        (p) => ({
          marginBottom: '8px',
          fontSize: `${p.textSize.small}rem`,
          gap: '10px',
          padding: `${p.padding.medium}px`,
          borderRadius: '10px',
          background: 'rgba(6, 6, 6, 0.8)',
          color: '#FFF',
          fontWeight: 'bold',
          textAlign: 'center',
          animation: 'slideDown 1s ease-out forwards',
          alignItems: 'center',
          position: 'relative',
          zIndex: p.zIndex.tooltip,
          '@keyframes slideDown': {
            from: { opacity: 0, transform: 'translateY(50%)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }),
        [],
      ),
      u = M.useMemo(
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
      o = M.useCallback(
        (p) => () => {
          r.onClose(p);
        },
        [],
      ),
      d = M.useCallback(() => {
        var p;
        ((p = r.data.options) != null && p.action && r.data.options.action(),
          r.onClose(r.data.id));
      }, [r.data.options, r.data]);
    return (
      M.useEffect(function () {
        if (!r.data.timeout) return;
        const _ = setTimeout(() => {
          r.onClose(r.data.id);
        }, r.data.timeout);
        return () => {
          clearTimeout(_);
        };
      }, []),
      x.jsxs(ge, {
        withStyle: c,
        children: [
          x.jsx(un, {
            size: 24,
            text: '#FFF',
            highlight: 'transparent',
            color: 'inherit',
            noPadding: !0,
            onClick: o(r.data.id),
            children: x.jsx(ro, {}),
          }),
          r.data.message,
          !!r.data.timeout && x.jsx(ge, { withStyle: u }),
          ((g = r.data.options) == null ? void 0 : g.action) &&
            x.jsx(ge, {
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
  L5 = M.createContext({ info: (r) => {} }),
  B5 = () => M.useContext(L5),
  UC = (r) => {
    const [c, u] = M.useState([]),
      o = M.useCallback(
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
      d = M.useCallback((v, p) => {
        u((_) => [
          ..._,
          {
            message: v,
            id: ye.newId(),
            timeout: p != null && p.permanent ? void 0 : r.timeout,
            options: p,
          },
        ]);
      }, []),
      g = M.useCallback((v) => {
        u((p) => p.filter((_) => _.id !== v));
      }, []);
    return x.jsxs(ge, {
      kind: 'contents',
      children: [
        x.jsx(L5.Provider, { value: { info: d }, children: r.children }),
        x.jsx(ge, {
          as: 'ul',
          role: 'list',
          withStyle: o,
          children: c.map((v) => x.jsx(HC, { data: v, onClose: g }, v.id)),
        }),
      ],
    });
  },
  kC = (r) => {
    const c = M.useRef(null),
      u = M.useRef(null),
      [o, d] = M.useState(r.theme[r.theme.activeAccent].default),
      { info: g } = B5(),
      v = r.theme[r.theme.activeAccent][r.theme.applyTo],
      p = M.useMemo(
        () => q5.find((F) => F.value === r.theme.applyTo),
        [r.theme.applyTo],
      ),
      _ = M.useMemo(
        () => j5.find((F) => F.value === r.theme.kind),
        [r.theme.kind],
      ),
      S = M.useMemo(
        () => D5.find((F) => F.value === r.theme.activeAccent),
        [r.theme.activeAccent],
      ),
      T = M.useCallback(
        (F) => {
          r.onChangeAccent(r.theme, F.value);
        },
        [r.onChangeAccent, r.theme],
      ),
      w = M.useCallback(
        (F) => {
          r.onChangeApplyOn(r.theme, F.value);
        },
        [r.theme],
      ),
      z = M.useCallback(
        (F) => {
          r.onChangeColorKind(r.theme, F.value);
        },
        [r.theme],
      ),
      U = M.useCallback(
        (F) => {
          r.onColorChange(r.theme, F);
        },
        [r.theme],
      ),
      K = M.useCallback(async () => {
        try {
          (await navigator.clipboard.writeText(v.raw),
            g('It successfully copied to your clipboard 😉'));
        } catch (F) {
          console.error(F);
        }
      }, [v]),
      N = M.useCallback(() => {
        const F = fC(r.theme[r.theme.activeAccent]),
          I = new Blob([JSON.stringify(F)], { type: 'application/json' }),
          oe = URL.createObjectURL(I);
        (window.open(oe), URL.revokeObjectURL(oe));
      }, [r.theme]),
      $ = M.useCallback(() => {
        r.onSelect(r.theme);
      }, [r.onSelect, r.theme]),
      J = M.useCallback(() => {
        d((F) => (F === 'dark' ? 'light' : 'dark'));
      }, []),
      te = M.useCallback(() => {
        r.onDelete(r.theme);
      }, [r.onDelete, r.theme]);
    return (
      M.useEffect(
        function () {
          const I = u.current.innerHTML;
          I !== r.theme.title &&
            r.onChangeTitle &&
            r.onChangeTitle({ ...r.theme, title: I });
        },
        [u, r.theme.title],
      ),
      M.useEffect(function () {
        const I = c.current;
        if (I === null) return;
        const oe = new IntersectionObserver(
          (re) => {
            for (const V of re) V.isIntersecting && r.onVisible();
          },
          { root: null, threshold: 0.75 },
        );
        return (
          oe.observe(I),
          () => {
            (oe.unobserve(I), oe.disconnect());
          }
        );
      }, []),
      {
        titleRef: u,
        containerRef: c,
        color: v,
        applyTo: p,
        colorAccent: S,
        kind: _,
        mode: o,
        onChangeActiveAccent: T,
        onChangeApply: w,
        onChangeColorKind: z,
        onColorChange: U,
        onCopy: K,
        onExport: N,
        onClick: $,
        onModeChange: J,
        onDelete: te,
      }
    );
  };
var H5 = M8();
const NC = (r) => {
    var J, te;
    const c = M.useRef(null),
      u = M.useRef(null),
      [o, d] = M.useState(!1),
      g = (J = c.current) == null ? void 0 : J.getBoundingClientRect(),
      v = (te = u.current) == null ? void 0 : te.getBoundingClientRect(),
      p = (v == null ? void 0 : v.height) || 0,
      _ = (v == null ? void 0 : v.width) || 0,
      S = ((g == null ? void 0 : g.bottom) || 0) + window.scrollY,
      T = ((g == null ? void 0 : g.left) || 0) + window.scrollX,
      w = S + p > window.innerHeight + window.scrollY ? S - p : S,
      z = T + _ > window.innerWidth ? window.innerWidth - _ : T < 15 ? 15 : T,
      U = M.useMemo(() => ({ position: 'relative', zIndex: 0 }), []),
      K = M.useCallback(
        (F) => ({
          display: o ? 'table' : 'none',
          opacity: o ? 1 : 0,
          pointerEvents: o ? 'auto' : 'none',
          zIndex: F.zIndex.tooltip,
          height: o ? 'auto' : 0,
          width: o ? 'auto' : 0,
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: `${F.textSize.small}rem`,
          background: 'rgba(6, 6, 6, 0.8)',
          filter: 'blur(0)',
          transform: 'translateZ(0)',
          padding: `${F.padding.medium}px`,
          borderRadius: '5px',
          position: 'absolute',
          margin: '15px',
          whiteSpace: 'nowrap',
          transition: F.transitions.default,
          top: `${w}px`,
          left: `${z}px`,
        }),
        [o, w, z],
      ),
      N = M.useCallback((F) => {
        (F.preventDefault(), d(!0));
      }, []),
      $ = M.useCallback((F) => {
        (F.preventDefault(), d(!1));
      }, []);
    return (
      M.useEffect(function () {
        const I = c.current;
        if (I !== null)
          return (
            I.addEventListener('mouseenter', N),
            I.addEventListener('mouseleave', $),
            () => {
              (I.removeEventListener('mouseenter', N),
                I.removeEventListener('mouseleave', $));
            }
          );
      }, []),
      {
        show: o,
        containerRef: c,
        tooltipRef: u,
        containerStyle: U,
        tooltipStyle: K,
      }
    );
  },
  E8 = (r) => {
    const {
      containerRef: c,
      tooltipRef: u,
      containerStyle: o,
      tooltipStyle: d,
    } = NC();
    return x.jsxs(ge, {
      ref: c,
      withStyle: o,
      draggable: !1,
      flex: '0 0 auto',
      children: [
        H5.createPortal(
          x.jsx(ge, {
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
  GC = (r, { mode: c }) => {
    const u = M.useMemo(
        () => ({
          ...r.theme[r.theme.activeAccent],
          background: {
            color: r.theme[r.theme.activeAccent][`${c}Screen`],
            text: r.theme[r.theme.activeAccent][`${c}ScreenText`],
          },
        }),
        [r.theme, r.theme.activeAccent, c],
      ),
      o = M.useMemo(
        () => ({
          containerType: 'inline-size',
          containerName: 'card',
          position: 'relative',
          flexDirection: 'column',
          cursor: 'pointer',
          background: u.background.color.raw,
          color: u.background.text.raw,
          flex: '1 0 250px',
          maxWidth: '500px',
          margin: '0 auto',
          borderRadius: '15px',
          boxShadow: r.selected
            ? 'none'
            : '8px 8px 13px 0px rgba(0, 0, 0, 0.2)',
          border: r.selected ? `5px solid ${u.highlight.raw}` : 'none',
          boxSizing: 'content-box',
        }),
        [u, r.selected],
      ),
      d = M.useMemo(
        () => ({ background: u.color.raw, flexDirection: 'column' }),
        [u],
      ),
      g = M.useMemo(
        () => ({
          width: '100%',
          flexDirection: 'row',
          '@container card (max-width: 399px)': { flexDirection: 'column' },
          '@container card (min-width: 400px)': {},
        }),
        [],
      ),
      v = M.useCallback(
        (U) => ({
          padding: `${U.padding.small}px`,
          '@container card (max-width: 399px)': { alignItems: 'center' },
          '@container card (min-width: 400px)': {
            flex: '1 0 auto',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }),
        [],
      ),
      p = M.useMemo(
        () => ({
          background: u.highlight.raw,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          flex: '0 0 50px',
          gap: '10px',
        }),
        [u],
      ),
      _ = M.useMemo(
        () => ({
          fontSize: '0.7rem',
          padding: '5px',
          fontWeight: 'bold',
          alignItems: 'center',
          justifyContent: 'center',
        }),
        [],
      ),
      S = M.useMemo(
        () => [_, { background: u.success.raw, color: u.text.raw }],
        [_],
      ),
      T = M.useMemo(
        () => [_, { background: u.warning.raw, color: u.text.raw }],
        [_],
      ),
      w = M.useMemo(
        () => [_, { background: u.info.raw, color: u.text.raw }],
        [_],
      ),
      z = M.useMemo(
        () => [_, { background: u.error.raw, color: u.text.raw }],
        [_],
      );
    return {
      current: u,
      containerStyle: o,
      contentStyle: d,
      rowSelectsStyle: g,
      rowInputStyle: v,
      sideButtonsStyle: p,
      successStyle: S,
      warningStyle: T,
      infoStyle: w,
      errorStyle: z,
    };
  },
  op = (r) => {
    const c = kC(r),
      u = GC(r, c);
    return x.jsxs(ge, {
      ref: c.containerRef,
      onClick: c.onClick,
      as: 'article',
      withStyle: u.containerStyle,
      children: [
        x.jsxs(ge, {
          withStyle: { flex: '0 0 35px' },
          children: [
            x.jsx(ge, {
              ref: c.titleRef,
              alignItems: 'center',
              justifyContent: 'start',
              textColor:
                c.mode === 'light'
                  ? u.current.darkGrey.raw
                  : u.current.lightGrey.raw,
              fontSize: '0.65rem',
              fontWeight: 'bold',
              paddingLeft: '10px',
              cursor: 'text',
              withStyle: { outline: 'none' },
              contentEditable: !0,
              suppressContentEditableWarning: !0,
              children: r.theme.title,
            }),
            x.jsx(un, {
              size: 30,
              color: u.current.background.color.raw,
              text:
                c.mode === 'light'
                  ? u.current.darkGrey.raw
                  : u.current.lightGrey.raw,
              highlight:
                c.mode === 'light'
                  ? u.current.lightGrey.raw
                  : u.current.darkGrey.raw,
              onClick: c.onModeChange,
              round: !1,
              children: c.mode === 'dark' ? x.jsx(pC, {}) : x.jsx(mC, {}),
            }),
            x.jsx(un, {
              size: 30,
              color: u.current.background.color.raw,
              text:
                c.mode === 'light'
                  ? u.current.darkGrey.raw
                  : u.current.lightGrey.raw,
              highlight:
                c.mode === 'light'
                  ? u.current.lightGrey.raw
                  : u.current.darkGrey.raw,
              onClick: c.onDelete,
              round: !1,
              children: x.jsx(ro, {}),
            }),
          ],
        }),
        x.jsx(ge, {
          withStyle: u.contentStyle,
          children: x.jsxs(ge, {
            withStyle: { flexWrap: 'wrap' },
            children: [
              x.jsxs(ge, {
                withStyle: u.rowSelectsStyle,
                children: [
                  x.jsx(x0, {
                    label: 'Apply on',
                    options: q5,
                    onChange: c.onChangeApply,
                    value: c.applyTo,
                    color: u.current.color.raw,
                    text: u.current.text.raw,
                    highlight: u.current.highlight.raw,
                    textAligment: 'center',
                    uppercase: !0,
                  }),
                  x.jsx(x0, {
                    label: 'Accent',
                    options: D5,
                    onChange: c.onChangeActiveAccent,
                    value: c.colorAccent,
                    color: u.current.color.raw,
                    text: u.current.text.raw,
                    highlight: u.current.highlight.raw,
                    textAligment: 'center',
                    uppercase: !0,
                  }),
                  x.jsx(x0, {
                    label: 'Show as',
                    options: j5,
                    onChange: c.onChangeColorKind,
                    value: c.kind,
                    color: u.current.color.raw,
                    text: u.current.text.raw,
                    highlight: u.current.highlight.raw,
                    textAligment: 'center',
                    uppercase: !0,
                  }),
                ],
              }),
              x.jsx(ge, {
                withStyle: u.rowInputStyle,
                children: x.jsx(OC, {
                  type: r.theme.kind,
                  value: c.color,
                  color: u.current.color.raw,
                  text: u.current.text.raw,
                  highlight: u.current.disabled.raw,
                  onChange: c.onColorChange,
                }),
              }),
            ],
          }),
        }),
        x.jsxs(ge, {
          flex: '0 0 30px',
          children: [
            x.jsx(ge, { withStyle: u.successStyle, children: 'Success' }),
            x.jsx(ge, { withStyle: u.warningStyle, children: 'Warning' }),
            x.jsx(ge, { withStyle: u.infoStyle, children: 'Info' }),
            x.jsx(ge, { withStyle: u.errorStyle, children: 'Error' }),
          ],
        }),
        x.jsxs(ge, {
          withStyle: u.sideButtonsStyle,
          children: [
            x.jsx('div', {}),
            x.jsx(E8, {
              description: 'Copy',
              children: x.jsx(un, {
                size: 26,
                color: u.current.color.raw,
                text: u.current.text.raw,
                highlight: u.current.highlight.raw,
                onClick: c.onCopy,
                round: !0,
                children: x.jsx(rd, {}),
              }),
            }),
            x.jsx(E8, {
              description: 'Export Schema',
              children: x.jsx(un, {
                size: 26,
                color: u.current.color.raw,
                text: u.current.text.raw,
                highlight: u.current.highlight.raw,
                onClick: c.onExport,
                round: !0,
                children: x.jsx(hC, {}),
              }),
            }),
            x.jsx('div', {}),
          ],
        }),
      ],
    });
  },
  FC = ({
    value: r,
    direction: c,
    color: u,
    max: o,
    min: d,
    step: g,
    deg: v,
    colors: p,
    text: _,
    onChange: S,
  }) => {
    const T = M.useRef(null),
      w = M.useRef(null),
      z = M.useMemo(() => `linear-gradient(${v}deg, ${p.join(',')})`, [v, p]),
      U = M.useMemo(() => o / g, [o, g]),
      K = M.useMemo(
        () =>
          Math.min(
            Math.max(ye.round((r / o) * 100 <= 10 ? -10 : (r / o) * 100), 5),
            95,
          ),
        [r, o],
      ),
      N = M.useMemo(
        () => ({
          height: '100%',
          width: '100%',
          flex: '1 1 auto',
          borderRadius: '8px',
          justifySelf: 'center',
          userSelect: 'none',
          background: z,
          border: '1px solid rgba(6, 6, 6, 0.5)',
          position: 'relative',
          touchAction: 'none',
          justifyContent: 'center',
          overflow: 'initial',
        }),
        [z],
      ),
      $ = M.useCallback(
        (I) => ({
          position: 'absolute',
          touchAction: 'none',
          userSelect: 'none',
          borderRadius: '5px',
          cursor: 'grab',
          width: c === 'horizontal' ? '28px' : '100%',
          height: c === 'horizontal' ? '100%' : '28px',
          fontWeight: 'bold',
          color: '#FFF',
          fontSize: '0.48rem',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          transform: 'translate(-50% -50%)',
          left: c === 'horizontal' ? `${K}%` : null,
          top: c === 'vertical' ? `${K}%` : null,
          background: u || 'rgba(0, 0, 0, 0.7)',
        }),
        [c, u, K, _],
      ),
      J = M.useCallback(
        (I) => {
          const oe = T.current;
          if (oe === null) return;
          const re = oe.getBoundingClientRect(),
            V =
              c === 'horizontal'
                ? (I.clientX - re.left) / re.width
                : (I.clientY - re.top) / re.height;
          S(ye.round(Math.min(Math.max(V * o, d), o), 1));
        },
        [S, g, o, d],
      ),
      te = M.useCallback((I) => {
        const oe = w.current,
          re = (V) => {
            (oe != null &&
              oe.hasPointerCapture(V.pointerId) &&
              (oe == null || oe.releasePointerCapture(V.pointerId)),
              window.removeEventListener('pointermove', I),
              window.removeEventListener('pointerup', re));
          };
        return re;
      }, []),
      F = M.useCallback(
        (I) => (oe) => {
          oe.stopPropagation();
          const re = w.current;
          (re !== null && re.setPointerCapture(oe.pointerId),
            window.addEventListener('pointermove', I, { passive: !0 }),
            window.addEventListener('pointerup', te(I), { passive: !0 }));
        },
        [],
      );
    return {
      trackRef: T,
      handlerRef: w,
      totalSteps: U,
      gradient: z,
      move: K,
      onClick: F,
      onExit: te,
      onMove: J,
      containerStyle: N,
      toggleStyle: $,
    };
  },
  z0 = (r) => {
    const {
      containerStyle: c,
      toggleStyle: u,
      trackRef: o,
      handlerRef: d,
      onClick: g,
      onMove: v,
    } = FC(r);
    return x.jsx(ge, {
      ref: o,
      as: 'div',
      draggable: !1,
      withStyle: c,
      children: x.jsx(ge, {
        ref: d,
        draggable: !1,
        withStyle: u,
        onPointerDown: g(v),
        children: r.value,
      }),
    });
  },
  Vf = (r) => {
    const c = M.useMemo(
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
    return x.jsx(ge, {
      ref: r.ref,
      as: 'section',
      withStyle: c,
      children: r.children,
    });
  },
  $C = (r) => {
    const c = M.useMemo(
        () => ({
          flex: '1 0 auto',
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          alignItems: 'center',
        }),
        [],
      ),
      u = M.useCallback(
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
      dots: M.useMemo(() => Array.from({ length: r.total }), [r.total]),
      containerStyle: c,
      dotStyle: u,
    };
  },
  YC = T0(
    (r) => {
      const { dots: c, containerStyle: u, dotStyle: o } = $C(r);
      return x.jsx(ge, {
        withStyle: u,
        children: c.map((d, g) => x.jsx(ge, { withStyle: o(g) }, g)),
      });
    },
    { flex: '1 0 auto' },
  ),
  XC = (r) => {
    const { theme: c } = Pr();
    return (
      M.useEffect(() => {
        let u = document.querySelector("meta[name='theme-color']");
        return (
          u ||
            ((u = document.createElement('meta')),
            (u.name = 'theme-color'),
            document.head.appendChild(u)),
          (document.body.style.transition = c.transitions.default),
          (document.body.style.backgroundColor =
            c.getCurrentPallete().color.raw),
          (document.documentElement.style.backgroundColor =
            c.getCurrentPallete().color.raw),
          u.setAttribute('content', c.getCurrentPallete().color.raw),
          () => {
            document.head.removeChild(u);
          }
        );
      }, [c]),
      {}
    );
  },
  KC = (r) => (XC(), r.children),
  QC = (r) => ({
    container: M.useCallback(
      (u) => ({
        alignItems: 'center',
        justifyContent: 'center',
        background: r.color,
        fontWeight: r.active ? 'bold' : '500',
        padding: '8px',
        fontSize: '0.72rem',
        cursor: 'pointer',
        color: r.text,
        '&:hover': { background: r.active ? r.color : r.highlight },
      }),
      [r.active, r.color, r.highlight],
    ),
  }),
  ip = (r) => {
    const { container: c } = QC(r);
    return x.jsx(ge, { withStyle: c, onClick: r.onClick, children: r.label });
  },
  Jf = [
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
  ZC = (r) => {
    const { theme: c } = Pr();
    return H5.createPortal(
      x.jsxs(ge, {
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
        background: (u) => u.getCurrentPallete().color.raw,
        withStyle: (u) => ({
          zIndex: 9999,
          borderRadius: '18px',
          border: `2px solid ${u.getCurrentPallete().highlight.raw}`,
          boxShadow: `2px 1px 3px 3px ${u.getCurrentPallete().shadow.raw}`,
          transition: 'all 0.3s ease-in-out',
          animation: 'fade_in 0.5s ease-in-out',
          '@keyframes fade_in': {
            from: { display: 'none', opacity: 0 },
            to: { display: 'flex', opacity: 1 },
          },
        }),
        children: [
          x.jsxs(ge, {
            flex: '0 0 50px',
            alignItems: 'center',
            justifyContent: 'space-between',
            children: [
              x.jsxs(pp, {
                as: 'span',
                flex: '1 0 auto',
                fontSize: '0.59rem',
                justifyContent: 'center',
                textColor: (u) => u.getCurrentPallete().text.raw,
                children: [
                  x.jsx('b', { children: "I'm thankful for your support" }),
                  ' ❤️',
                ],
              }),
              x.jsx(un, {
                onClick: r.onClose,
                flex: '0 0 28px',
                text: c.text.raw,
                size: 28,
                textColor: c.text.raw,
                children: x.jsx(ro, {}),
              }),
            ],
          }),
          x.jsx(ge, { flex: '1 1 auto', children: r.children }),
        ],
      }),
      document.body,
    );
  },
  U5 = (r) => {
    const [c, u] = M.useState(!1),
      o = M.useCallback(
        (v) => async () => {
          try {
            await navigator.clipboard.writeText(v);
          } catch (p) {
            console.error(p);
          }
        },
        [],
      ),
      d = M.useCallback(() => {
        u(!0);
      }, []),
      g = M.useCallback(() => {
        u(!1);
      }, []);
    return x.jsxs(M.Fragment, {
      children: [
        x.jsxs(ge, {
          atRow: r.atRow,
          cursor: 'pointer',
          textColor: (v) => v.text.raw,
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          margin: '0 0 10px 0',
          children: [
            x.jsx(pp, {
              as: 'a',
              href: 'https://www.linkedin.com/in/gustavolizze',
              target: '_blank',
              rel: 'noopener noreferrer',
              textColor: (v) => v.text.raw,
              background: 'transparent',
              fontSize: '0.65rem',
              textDecoration: 'none',
              flex: '0 0 auto',
              children: x.jsx('b', {
                children: 'Made with ❤️ by Gustavo Lizze',
              }),
            }),
            x.jsx(vC, {}),
            x.jsx(ge, {
              fontSize: '25px',
              flex: '0 0 auto',
              cursor: 'pointer',
              onClick: d,
              children: x.jsx(yC, {}),
            }),
          ],
        }),
        x.jsx(ZC, {
          show: c,
          onClose: g,
          children: x.jsxs(ge, {
            direction: 'column',
            children: [
              x.jsx(ge, {
                children: x.jsx(pa, {
                  type: 'text',
                  label: 'BTC',
                  value: 'bc1qrwpqy6vzfpjqm44j3d7m3flnqpdrzyfljfahhd',
                  disabled: !0,
                  children: x.jsx(un, {
                    onClick: o('bc1qrwpqy6vzfpjqm44j3d7m3flnqpdrzyfljfahhd'),
                    size: 28,
                    children: x.jsx(rd, {}),
                  }),
                }),
              }),
              x.jsx(ge, {
                children: x.jsx(pa, {
                  type: 'text',
                  label: 'ETH / ETC',
                  value: '0x750d562a0b87bb9aeebdf66fbe660ef4d98ad3c2',
                  disabled: !0,
                  children: x.jsx(un, {
                    onClick: o('0x750d562a0b87bb9aeebdf66fbe660ef4d98ad3c2'),
                    size: 28,
                    children: x.jsx(rd, {}),
                  }),
                }),
              }),
              x.jsx(ge, {
                children: x.jsx(pa, {
                  type: 'text',
                  label: 'LTC',
                  value: 'MSzZS62GZ4dWX687q5be53trk1EMQ5AFdj',
                  disabled: !0,
                  children: x.jsx(un, {
                    onClick: o('MSzZS62GZ4dWX687q5be53trk1EMQ5AFdj'),
                    size: 28,
                    children: x.jsx(rd, {}),
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  VC = {
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
      const u = ye.getBetweenRange(c, 1, 12),
        o = 360 / u,
        d = ye.getBetweenRange(r.distanceBetweenEachPicker, 0, o);
      return {
        ...r,
        mode: Jf.find((g) => g.id === 'custom'),
        numberOfPickers: u,
        distanceBetweenEachPicker: d,
      };
    },
    onSpaceBetweenPickersChange: ({ prevState: r }, c) => {
      const u = 360 / r.numberOfPickers,
        o = ye.getBetweenRange(c, 0, u);
      return {
        ...r,
        mode: Jf.find((d) => d.id === 'custom'),
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
                  (v, p) => ({
                    ...v,
                    [p]: d.reduce(
                      (_, S) => ({
                        ..._,
                        [S]: je.makeCurrentColorTo(g[p][S], c),
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
    setClipboard: ({ prevState: r }, c) => ({ ...r, clipboard: [c] }),
    updateTheme: ({ prevState: r }, c) => ({
      ...r,
      themes: r.themes.map((u) => (c.id === u.id ? c : u)),
    }),
    deleteTheme: ({ prevState: r }, c) =>
      r.themes.length <= 1
        ? r
        : {
            ...r,
            themes: r.themes.filter((u) => u.id !== c.id),
            pickers: r.pickers.filter((u) => u.id !== c.id),
            mode: Jf.find((u) => u.id === 'custom'),
          },
    updatePallete: ({ prevState: r }, c) => ({ ...r, pallete: c }),
  },
  IC = {
    100: 0.9,
    200: 0.8,
    300: 0.7,
    400: 0.6,
    600: 0.42,
    700: 0.34,
    800: 0.26,
    900: 0.18,
  },
  JC = {
    100: 0.6,
    200: 0.75,
    300: 0.9,
    400: 0.95,
    600: 1.05,
    700: 1.07,
    800: 1.08,
    900: 1.1,
  };
var b0 = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ var WC = b0.exports,
  O8;
function PC() {
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
            p = 'Invalid `variable` option passed into `_.template`',
            _ = '__lodash_hash_undefined__',
            S = 500,
            T = '__lodash_placeholder__',
            w = 1,
            z = 2,
            U = 4,
            K = 1,
            N = 2,
            $ = 1,
            J = 2,
            te = 4,
            F = 8,
            I = 16,
            oe = 32,
            re = 64,
            V = 128,
            ce = 256,
            Ae = 512,
            Re = 30,
            se = '...',
            Le = 800,
            xe = 16,
            et = 1,
            tt = 2,
            W = 3,
            he = 1 / 0,
            _e = 9007199254740991,
            Be = 17976931348623157e292,
            Ze = NaN,
            D = 4294967295,
            Y = D - 1,
            fe = D >>> 1,
            me = [
              ['ary', V],
              ['bind', $],
              ['bindKey', J],
              ['curry', F],
              ['curryRight', I],
              ['flip', Ae],
              ['partial', oe],
              ['partialRight', re],
              ['rearg', ce],
            ],
            ze = '[object Arguments]',
            Fe = '[object Array]',
            it = '[object AsyncFunction]',
            $t = '[object Boolean]',
            _t = '[object Date]',
            Ui = '[object DOMException]',
            tl = '[object Error]',
            Ll = '[object Function]',
            lo = '[object GeneratorFunction]',
            Wt = '[object Map]',
            nl = '[object Number]',
            io = '[object Null]',
            Za = '[object Object]',
            uo = '[object Promise]',
            co = '[object Proxy]',
            al = '[object RegExp]',
            qn = '[object Set]',
            ki = '[object String]',
            uc = '[object Symbol]',
            Ln = '[object Undefined]',
            Ni = '[object WeakMap]',
            j0 = '[object WeakSet]',
            Bl = '[object ArrayBuffer]',
            Va = '[object DataView]',
            fo = '[object Float32Array]',
            cc = '[object Float64Array]',
            oo = '[object Int8Array]',
            so = '[object Int16Array]',
            rl = '[object Int32Array]',
            hn = '[object Uint8Array]',
            La = '[object Uint8ClampedArray]',
            dn = '[object Uint16Array]',
            ho = '[object Uint32Array]',
            Rd = /\b__p \+= '';/g,
            wd = /\b(__p \+=) '' \+/g,
            fc = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            Gi = /&(?:amp|lt|gt|quot|#39);/g,
            Fi = /[&<>"']/g,
            ll = RegExp(Gi.source),
            oc = RegExp(Fi.source),
            $i = /<%-([\s\S]+?)%>/g,
            Td = /<%([\s\S]+?)%>/g,
            go = /<%=([\s\S]+?)%>/g,
            vo = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            Yi = /^\w*$/,
            Ed =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            sc = /[\\^$.*+?()[\]{}|]/g,
            D0 = RegExp(sc.source),
            hc = /^\s+/,
            yo = /\s/,
            mo = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            q0 = /\{\n\/\* \[wrapped with (.+)\] \*/,
            L0 = /,? & /,
            Sr = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            Pt = /[()=,{}\[\]\/\s]/,
            bn = /\\(\\)?/g,
            Hl = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            dc = /\w*$/,
            Od = /^[-+]0x[0-9a-f]+$/i,
            Md = /^0b[01]+$/i,
            B0 = /^\[object .+?Constructor\]$/,
            Xi = /^0o[0-7]+$/i,
            po = /^(?:0|[1-9]\d*)$/,
            Ul = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Ia = /($^)/,
            Ki = /['\n\r\u2028\u2029\\]/g,
            Ja = '\\ud800-\\udfff',
            Zt = '\\u0300-\\u036f',
            H0 = '\\ufe20-\\ufe2f',
            U0 = '\\u20d0-\\u20ff',
            xr = Zt + H0 + U0,
            il = '\\u2700-\\u27bf',
            k0 = 'a-z\\xdf-\\xf6\\xf8-\\xff',
            N0 = '\\xac\\xb1\\xd7\\xf7',
            G0 = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
            zd = '\\u2000-\\u206f',
            gc =
              ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
            Qi = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
            Ba = '\\ufe0e\\ufe0f',
            Bn = N0 + G0 + zd + gc,
            vc = "['’]",
            jd = '[' + Ja + ']',
            yc = '[' + Bn + ']',
            Zi = '[' + xr + ']',
            Vi = '\\d+',
            Dd = '[' + il + ']',
            Hn = '[' + k0 + ']',
            mc = '[^' + Ja + Bn + Vi + il + k0 + Qi + ']',
            pc = '\\ud83c[\\udffb-\\udfff]',
            bo = '(?:' + Zi + '|' + pc + ')',
            ul = '[^' + Ja + ']',
            bc = '(?:\\ud83c[\\udde6-\\uddff]){2}',
            _c = '[\\ud800-\\udbff][\\udc00-\\udfff]',
            ba = '[' + Qi + ']',
            F0 = '\\u200d',
            _o = '(?:' + Hn + '|' + mc + ')',
            $0 = '(?:' + ba + '|' + mc + ')',
            Sc = '(?:' + vc + '(?:d|ll|m|re|s|t|ve))?',
            Y0 = '(?:' + vc + '(?:D|LL|M|RE|S|T|VE))?',
            X0 = bo + '?',
            Ii = '[' + Ba + ']?',
            Wa =
              '(?:' +
              F0 +
              '(?:' +
              [ul, bc, _c].join('|') +
              ')' +
              Ii +
              X0 +
              ')*',
            So = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
            xo = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
            cl = Ii + X0 + Wa,
            kl = '(?:' + [Dd, bc, _c].join('|') + ')' + cl,
            K0 = '(?:' + [ul + Zi + '?', Zi, bc, _c, jd].join('|') + ')',
            Co = RegExp(vc, 'g'),
            Q0 = RegExp(Zi, 'g'),
            fl = RegExp(pc + '(?=' + pc + ')|' + K0 + cl, 'g'),
            Pa = RegExp(
              [
                ba +
                  '?' +
                  Hn +
                  '+' +
                  Sc +
                  '(?=' +
                  [yc, ba, '$'].join('|') +
                  ')',
                $0 + '+' + Y0 + '(?=' + [yc, ba + _o, '$'].join('|') + ')',
                ba + '?' + _o + '+' + Sc,
                ba + '+' + Y0,
                xo,
                So,
                Vi,
                kl,
              ].join('|'),
              'g',
            ),
            Ao = RegExp('[' + F0 + Ja + xr + Ba + ']'),
            Ji =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Cr = [
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
            Ro = -1,
            dt = {};
          ((dt[fo] =
            dt[cc] =
            dt[oo] =
            dt[so] =
            dt[rl] =
            dt[hn] =
            dt[La] =
            dt[dn] =
            dt[ho] =
              !0),
            (dt[ze] =
              dt[Fe] =
              dt[Bl] =
              dt[$t] =
              dt[Va] =
              dt[_t] =
              dt[tl] =
              dt[Ll] =
              dt[Wt] =
              dt[nl] =
              dt[Za] =
              dt[al] =
              dt[qn] =
              dt[ki] =
              dt[Ni] =
                !1));
          var mt = {};
          ((mt[ze] =
            mt[Fe] =
            mt[Bl] =
            mt[Va] =
            mt[$t] =
            mt[_t] =
            mt[fo] =
            mt[cc] =
            mt[oo] =
            mt[so] =
            mt[rl] =
            mt[Wt] =
            mt[nl] =
            mt[Za] =
            mt[al] =
            mt[qn] =
            mt[ki] =
            mt[uc] =
            mt[hn] =
            mt[La] =
            mt[dn] =
            mt[ho] =
              !0),
            (mt[tl] = mt[Ll] = mt[Ni] = !1));
          var xc = {
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
            Cc = {
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
            },
            Z0 = {
              '&amp;': '&',
              '&lt;': '<',
              '&gt;': '>',
              '&quot;': '"',
              '&#39;': "'",
            },
            _n = {
              '\\': '\\',
              "'": "'",
              '\n': 'n',
              '\r': 'r',
              '\u2028': 'u2028',
              '\u2029': 'u2029',
            },
            ol = parseFloat,
            Ac = parseInt,
            Nl = typeof qi == 'object' && qi && qi.Object === Object && qi,
            qd =
              typeof self == 'object' && self && self.Object === Object && self,
            Yt = Nl || qd || Function('return this')(),
            Wi = c && !c.nodeType && c,
            _a = Wi && !0 && r && !r.nodeType && r,
            Pi = _a && _a.exports === Wi,
            Rc = Pi && Nl.process,
            aa = (function () {
              try {
                var L = _a && _a.require && _a.require('util').types;
                return L || (Rc && Rc.binding && Rc.binding('util'));
              } catch {}
            })(),
            V0 = aa && aa.isArrayBuffer,
            I0 = aa && aa.isDate,
            wc = aa && aa.isMap,
            J0 = aa && aa.isRegExp,
            W0 = aa && aa.isSet,
            P0 = aa && aa.isTypedArray;
          function Un(L, P, Q) {
            switch (Q.length) {
              case 0:
                return L.call(P);
              case 1:
                return L.call(P, Q[0]);
              case 2:
                return L.call(P, Q[0], Q[1]);
              case 3:
                return L.call(P, Q[0], Q[1], Q[2]);
            }
            return L.apply(P, Q);
          }
          function Ld(L, P, Q, ve) {
            for (var De = -1, Ye = L == null ? 0 : L.length; ++De < Ye; ) {
              var At = L[De];
              P(ve, At, Q(At), L);
            }
            return ve;
          }
          function kn(L, P) {
            for (
              var Q = -1, ve = L == null ? 0 : L.length;
              ++Q < ve && P(L[Q], Q, L) !== !1;
            );
            return L;
          }
          function Bd(L, P) {
            for (
              var Q = L == null ? 0 : L.length;
              Q-- && P(L[Q], Q, L) !== !1;
            );
            return L;
          }
          function eh(L, P) {
            for (var Q = -1, ve = L == null ? 0 : L.length; ++Q < ve; )
              if (!P(L[Q], Q, L)) return !1;
            return !0;
          }
          function Ar(L, P) {
            for (
              var Q = -1, ve = L == null ? 0 : L.length, De = 0, Ye = [];
              ++Q < ve;
            ) {
              var At = L[Q];
              P(At, Q, L) && (Ye[De++] = At);
            }
            return Ye;
          }
          function Tc(L, P) {
            var Q = L == null ? 0 : L.length;
            return !!Q && Gl(L, P, 0) > -1;
          }
          function eu(L, P, Q) {
            for (var ve = -1, De = L == null ? 0 : L.length; ++ve < De; )
              if (Q(P, L[ve])) return !0;
            return !1;
          }
          function Ct(L, P) {
            for (
              var Q = -1, ve = L == null ? 0 : L.length, De = Array(ve);
              ++Q < ve;
            )
              De[Q] = P(L[Q], Q, L);
            return De;
          }
          function Rr(L, P) {
            for (var Q = -1, ve = P.length, De = L.length; ++Q < ve; )
              L[De + Q] = P[Q];
            return L;
          }
          function wo(L, P, Q, ve) {
            var De = -1,
              Ye = L == null ? 0 : L.length;
            for (ve && Ye && (Q = L[++De]); ++De < Ye; ) Q = P(Q, L[De], De, L);
            return Q;
          }
          function th(L, P, Q, ve) {
            var De = L == null ? 0 : L.length;
            for (ve && De && (Q = L[--De]); De--; ) Q = P(Q, L[De], De, L);
            return Q;
          }
          function To(L, P) {
            for (var Q = -1, ve = L == null ? 0 : L.length; ++Q < ve; )
              if (P(L[Q], Q, L)) return !0;
            return !1;
          }
          var Hd = sl('length');
          function Ud(L) {
            return L.split('');
          }
          function kd(L) {
            return L.match(Sr) || [];
          }
          function nh(L, P, Q) {
            var ve;
            return (
              Q(L, function (De, Ye, At) {
                if (P(De, Ye, At)) return ((ve = Ye), !1);
              }),
              ve
            );
          }
          function Ec(L, P, Q, ve) {
            for (
              var De = L.length, Ye = Q + (ve ? 1 : -1);
              ve ? Ye-- : ++Ye < De;
            )
              if (P(L[Ye], Ye, L)) return Ye;
            return -1;
          }
          function Gl(L, P, Q) {
            return P === P ? $d(L, P, Q) : Ec(L, ah, Q);
          }
          function Nd(L, P, Q, ve) {
            for (var De = Q - 1, Ye = L.length; ++De < Ye; )
              if (ve(L[De], P)) return De;
            return -1;
          }
          function ah(L) {
            return L !== L;
          }
          function Oc(L, P) {
            var Q = L == null ? 0 : L.length;
            return Q ? Mc(L, P) / Q : Ze;
          }
          function sl(L) {
            return function (P) {
              return P == null ? u : P[L];
            };
          }
          function Eo(L) {
            return function (P) {
              return L == null ? u : L[P];
            };
          }
          function Oo(L, P, Q, ve, De) {
            return (
              De(L, function (Ye, At, ft) {
                Q = ve ? ((ve = !1), Ye) : P(Q, Ye, At, ft);
              }),
              Q
            );
          }
          function rh(L, P) {
            var Q = L.length;
            for (L.sort(P); Q--; ) L[Q] = L[Q].value;
            return L;
          }
          function Mc(L, P) {
            for (var Q, ve = -1, De = L.length; ++ve < De; ) {
              var Ye = P(L[ve]);
              Ye !== u && (Q = Q === u ? Ye : Q + Ye);
            }
            return Q;
          }
          function zc(L, P) {
            for (var Q = -1, ve = Array(L); ++Q < L; ) ve[Q] = P(Q);
            return ve;
          }
          function lh(L, P) {
            return Ct(P, function (Q) {
              return [Q, L[Q]];
            });
          }
          function hl(L) {
            return L && L.slice(0, $l(L) + 1).replace(hc, '');
          }
          function Nn(L) {
            return function (P) {
              return L(P);
            };
          }
          function Mo(L, P) {
            return Ct(P, function (Q) {
              return L[Q];
            });
          }
          function tu(L, P) {
            return L.has(P);
          }
          function zo(L, P) {
            for (var Q = -1, ve = L.length; ++Q < ve && Gl(P, L[Q], 0) > -1; );
            return Q;
          }
          function jo(L, P) {
            for (var Q = L.length; Q-- && Gl(P, L[Q], 0) > -1; );
            return Q;
          }
          function nu(L, P) {
            for (var Q = L.length, ve = 0; Q--; ) L[Q] === P && ++ve;
            return ve;
          }
          var au = Eo(xc),
            Gd = Eo(Cc);
          function jc(L) {
            return '\\' + _n[L];
          }
          function ih(L, P) {
            return L == null ? u : L[P];
          }
          function dl(L) {
            return Ao.test(L);
          }
          function Do(L) {
            return Ji.test(L);
          }
          function qo(L) {
            for (var P, Q = []; !(P = L.next()).done; ) Q.push(P.value);
            return Q;
          }
          function Dc(L) {
            var P = -1,
              Q = Array(L.size);
            return (
              L.forEach(function (ve, De) {
                Q[++P] = [De, ve];
              }),
              Q
            );
          }
          function Lo(L, P) {
            return function (Q) {
              return L(P(Q));
            };
          }
          function er(L, P) {
            for (var Q = -1, ve = L.length, De = 0, Ye = []; ++Q < ve; ) {
              var At = L[Q];
              (At === P || At === T) && ((L[Q] = T), (Ye[De++] = Q));
            }
            return Ye;
          }
          function qc(L) {
            var P = -1,
              Q = Array(L.size);
            return (
              L.forEach(function (ve) {
                Q[++P] = ve;
              }),
              Q
            );
          }
          function Fd(L) {
            var P = -1,
              Q = Array(L.size);
            return (
              L.forEach(function (ve) {
                Q[++P] = [ve, ve];
              }),
              Q
            );
          }
          function $d(L, P, Q) {
            for (var ve = Q - 1, De = L.length; ++ve < De; )
              if (L[ve] === P) return ve;
            return -1;
          }
          function Yd(L, P, Q) {
            for (var ve = Q + 1; ve--; ) if (L[ve] === P) return ve;
            return ve;
          }
          function Fl(L) {
            return dl(L) ? ch(L) : Hd(L);
          }
          function Tt(L) {
            return dl(L) ? fh(L) : Ud(L);
          }
          function $l(L) {
            for (var P = L.length; P-- && yo.test(L.charAt(P)); );
            return P;
          }
          var uh = Eo(Z0);
          function ch(L) {
            for (var P = (fl.lastIndex = 0); fl.test(L); ) ++P;
            return P;
          }
          function fh(L) {
            return L.match(fl) || [];
          }
          function oh(L) {
            return L.match(Pa) || [];
          }
          var Bo = function L(P) {
              P = P == null ? Yt : Yl.defaults(Yt.Object(), P, Yl.pick(Yt, Cr));
              var Q = P.Array,
                ve = P.Date,
                De = P.Error,
                Ye = P.Function,
                At = P.Math,
                ft = P.Object,
                Lc = P.RegExp,
                gl = P.String,
                Gn = P.TypeError,
                ru = Q.prototype,
                sh = Ye.prototype,
                Xl = ft.prototype,
                Bc = P['__core-js_shared__'],
                Hc = sh.toString,
                rt = Xl.hasOwnProperty,
                hh = 0,
                Uc = (function () {
                  var a = /[^.]+$/.exec(
                    (Bc && Bc.keys && Bc.keys.IE_PROTO) || '',
                  );
                  return a ? 'Symbol(src)_1.' + a : '';
                })(),
                Sn = Xl.toString,
                kc = Hc.call(ft),
                ra = Yt._,
                Kl = Lc(
                  '^' +
                    Hc.call(rt)
                      .replace(sc, '\\$&')
                      .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        '$1.*?',
                      ) +
                    '$',
                ),
                Ql = Pi ? P.Buffer : u,
                Sa = P.Symbol,
                vl = P.Uint8Array,
                Nc = Ql ? Ql.allocUnsafe : u,
                Ha = Lo(ft.getPrototypeOf, ft),
                Ho = ft.create,
                lu = Xl.propertyIsEnumerable,
                tr = ru.splice,
                dh = Sa ? Sa.isConcatSpreadable : u,
                en = Sa ? Sa.iterator : u,
                nr = Sa ? Sa.toStringTag : u,
                la = (function () {
                  try {
                    var a = Ur(ft, 'defineProperty');
                    return (a({}, '', {}), a);
                  } catch {}
                })(),
                gh = P.clearTimeout !== Yt.clearTimeout && P.clearTimeout,
                Gc = ve && ve.now !== Yt.Date.now && ve.now,
                yl = P.setTimeout !== Yt.setTimeout && P.setTimeout,
                Zl = At.ceil,
                iu = At.floor,
                uu = ft.getOwnPropertySymbols,
                vh = Ql ? Ql.isBuffer : u,
                Fn = P.isFinite,
                Vl = ru.join,
                Il = Lo(ft.keys, ft),
                zt = At.max,
                Ut = At.min,
                ia = ve.now,
                ua = P.parseInt,
                ar = At.random,
                Ua = ru.reverse,
                ca = Ur(P, 'DataView'),
                $n = Ur(P, 'Map'),
                Fc = Ur(P, 'Promise'),
                wr = Ur(P, 'Set'),
                ml = Ur(P, 'WeakMap'),
                Jl = Ur(ft, 'create'),
                kt = ml && new ml(),
                ut = {},
                Je = on(ca),
                Tr = on($n),
                fa = on(Fc),
                Uo = on(wr),
                Er = on(ml),
                cu = Sa ? Sa.prototype : u,
                Wl = cu ? cu.valueOf : u,
                pl = cu ? cu.toString : u;
              function A(a) {
                if (qt(a) && !qe(a) && !(a instanceof He)) {
                  if (a instanceof xn) return a;
                  if (rt.call(a, '__wrapped__')) return _f(a);
                }
                return new xn(a);
              }
              var Or = (function () {
                function a() {}
                return function (i) {
                  if (!wt(i)) return {};
                  if (Ho) return Ho(i);
                  a.prototype = i;
                  var s = new a();
                  return ((a.prototype = u), s);
                };
              })();
              function Mr() {}
              function xn(a, i) {
                ((this.__wrapped__ = a),
                  (this.__actions__ = []),
                  (this.__chain__ = !!i),
                  (this.__index__ = 0),
                  (this.__values__ = u));
              }
              ((A.templateSettings = {
                escape: $i,
                evaluate: Td,
                interpolate: go,
                variable: '',
                imports: { _: A },
              }),
                (A.prototype = Mr.prototype),
                (A.prototype.constructor = A),
                (xn.prototype = Or(Mr.prototype)),
                (xn.prototype.constructor = xn));
              function He(a) {
                ((this.__wrapped__ = a),
                  (this.__actions__ = []),
                  (this.__dir__ = 1),
                  (this.__filtered__ = !1),
                  (this.__iteratees__ = []),
                  (this.__takeCount__ = D),
                  (this.__views__ = []));
              }
              function rr() {
                var a = new He(this.__wrapped__);
                return (
                  (a.__actions__ = vn(this.__actions__)),
                  (a.__dir__ = this.__dir__),
                  (a.__filtered__ = this.__filtered__),
                  (a.__iteratees__ = vn(this.__iteratees__)),
                  (a.__takeCount__ = this.__takeCount__),
                  (a.__views__ = vn(this.__views__)),
                  a
                );
              }
              function zr() {
                if (this.__filtered__) {
                  var a = new He(this);
                  ((a.__dir__ = -1), (a.__filtered__ = !0));
                } else ((a = this.clone()), (a.__dir__ *= -1));
                return a;
              }
              function lr() {
                var a = this.__wrapped__.value(),
                  i = this.__dir__,
                  s = qe(a),
                  y = i < 0,
                  b = s ? a.length : 0,
                  R = Pd(0, b, this.__views__),
                  E = R.start,
                  j = R.end,
                  H = j - E,
                  le = y ? j : E - 1,
                  ie = this.__iteratees__,
                  ue = ie.length,
                  de = 0,
                  Se = Ut(H, this.__takeCount__);
                if (!s || (!y && b == H && Se == H))
                  return Po(a, this.__actions__);
                var Oe = [];
                e: for (; H-- && de < Se; ) {
                  le += i;
                  for (var $e = -1, Me = a[le]; ++$e < ue; ) {
                    var We = ie[$e],
                      Pe = We.iteratee,
                      Da = We.type,
                      ta = Pe(Me);
                    if (Da == tt) Me = ta;
                    else if (!ta) {
                      if (Da == et) continue e;
                      break e;
                    }
                  }
                  Oe[de++] = Me;
                }
                return Oe;
              }
              ((He.prototype = Or(Mr.prototype)),
                (He.prototype.constructor = He));
              function ir(a) {
                var i = -1,
                  s = a == null ? 0 : a.length;
                for (this.clear(); ++i < s; ) {
                  var y = a[i];
                  this.set(y[0], y[1]);
                }
              }
              function ko() {
                ((this.__data__ = Jl ? Jl(null) : {}), (this.size = 0));
              }
              function Pl(a) {
                var i = this.has(a) && delete this.__data__[a];
                return ((this.size -= i ? 1 : 0), i);
              }
              function $c(a) {
                var i = this.__data__;
                if (Jl) {
                  var s = i[a];
                  return s === _ ? u : s;
                }
                return rt.call(i, a) ? i[a] : u;
              }
              function bl(a) {
                var i = this.__data__;
                return Jl ? i[a] !== u : rt.call(i, a);
              }
              function tn(a, i) {
                var s = this.__data__;
                return (
                  (this.size += this.has(a) ? 0 : 1),
                  (s[a] = Jl && i === u ? _ : i),
                  this
                );
              }
              ((ir.prototype.clear = ko),
                (ir.prototype.delete = Pl),
                (ir.prototype.get = $c),
                (ir.prototype.has = bl),
                (ir.prototype.set = tn));
              function oa(a) {
                var i = -1,
                  s = a == null ? 0 : a.length;
                for (this.clear(); ++i < s; ) {
                  var y = a[i];
                  this.set(y[0], y[1]);
                }
              }
              function yh() {
                ((this.__data__ = []), (this.size = 0));
              }
              function Xd(a) {
                var i = this.__data__,
                  s = ka(i, a);
                if (s < 0) return !1;
                var y = i.length - 1;
                return (s == y ? i.pop() : tr.call(i, s, 1), --this.size, !0);
              }
              function Kd(a) {
                var i = this.__data__,
                  s = ka(i, a);
                return s < 0 ? u : i[s][1];
              }
              function Qd(a) {
                return ka(this.__data__, a) > -1;
              }
              function Nt(a, i) {
                var s = this.__data__,
                  y = ka(s, a);
                return (
                  y < 0 ? (++this.size, s.push([a, i])) : (s[y][1] = i),
                  this
                );
              }
              ((oa.prototype.clear = yh),
                (oa.prototype.delete = Xd),
                (oa.prototype.get = Kd),
                (oa.prototype.has = Qd),
                (oa.prototype.set = Nt));
              function xa(a) {
                var i = -1,
                  s = a == null ? 0 : a.length;
                for (this.clear(); ++i < s; ) {
                  var y = a[i];
                  this.set(y[0], y[1]);
                }
              }
              function fu() {
                ((this.size = 0),
                  (this.__data__ = {
                    hash: new ir(),
                    map: new ($n || oa)(),
                    string: new ir(),
                  }));
              }
              function ou(a) {
                var i = Eu(this, a).delete(a);
                return ((this.size -= i ? 1 : 0), i);
              }
              function No(a) {
                return Eu(this, a).get(a);
              }
              function ei(a) {
                return Eu(this, a).has(a);
              }
              function ti(a, i) {
                var s = Eu(this, a),
                  y = s.size;
                return (s.set(a, i), (this.size += s.size == y ? 0 : 1), this);
              }
              ((xa.prototype.clear = fu),
                (xa.prototype.delete = ou),
                (xa.prototype.get = No),
                (xa.prototype.has = ei),
                (xa.prototype.set = ti));
              function _l(a) {
                var i = -1,
                  s = a == null ? 0 : a.length;
                for (this.__data__ = new xa(); ++i < s; ) this.add(a[i]);
              }
              function mh(a) {
                return (this.__data__.set(a, _), this);
              }
              function Zd(a) {
                return this.__data__.has(a);
              }
              ((_l.prototype.add = _l.prototype.push = mh),
                (_l.prototype.has = Zd));
              function sa(a) {
                var i = (this.__data__ = new oa(a));
                this.size = i.size;
              }
              function Sl() {
                ((this.__data__ = new oa()), (this.size = 0));
              }
              function Go(a) {
                var i = this.__data__,
                  s = i.delete(a);
                return ((this.size = i.size), s);
              }
              function Yc(a) {
                return this.__data__.get(a);
              }
              function ph(a) {
                return this.__data__.has(a);
              }
              function ni(a, i) {
                var s = this.__data__;
                if (s instanceof oa) {
                  var y = s.__data__;
                  if (!$n || y.length < d - 1)
                    return (y.push([a, i]), (this.size = ++s.size), this);
                  s = this.__data__ = new xa(y);
                }
                return (s.set(a, i), (this.size = s.size), this);
              }
              ((sa.prototype.clear = Sl),
                (sa.prototype.delete = Go),
                (sa.prototype.get = Yc),
                (sa.prototype.has = ph),
                (sa.prototype.set = ni));
              function Xc(a, i) {
                var s = qe(a),
                  y = !s && Ol(a),
                  b = !s && !y && Xr(a),
                  R = !s && !y && !b && Kr(a),
                  E = s || y || b || R,
                  j = E ? zc(a.length, gl) : [],
                  H = j.length;
                for (var le in a)
                  (i || rt.call(a, le)) &&
                    !(
                      E &&
                      (le == 'length' ||
                        (b && (le == 'offset' || le == 'parent')) ||
                        (R &&
                          (le == 'buffer' ||
                            le == 'byteLength' ||
                            le == 'byteOffset')) ||
                        Oa(le, H))
                    ) &&
                    j.push(le);
                return j;
              }
              function su(a) {
                var i = a.length;
                return i ? a[oi(0, i - 1)] : u;
              }
              function Kc(a, i) {
                return Bu(vn(a), Aa(i, 0, a.length));
              }
              function bh(a) {
                return Bu(vn(a));
              }
              function Qc(a, i, s) {
                ((s !== u && !Wn(a[i], s)) || (s === u && !(i in a))) &&
                  Yn(a, i, s);
              }
              function Ca(a, i, s) {
                var y = a[i];
                (!(rt.call(a, i) && Wn(y, s)) || (s === u && !(i in a))) &&
                  Yn(a, i, s);
              }
              function ka(a, i) {
                for (var s = a.length; s--; ) if (Wn(a[s][0], i)) return s;
                return -1;
              }
              function _h(a, i, s, y) {
                return (
                  Na(a, function (b, R, E) {
                    i(y, b, s(b), E);
                  }),
                  y
                );
              }
              function Fo(a, i) {
                return a && va(i, It(i), a);
              }
              function ai(a, i) {
                return a && va(i, jn(i), a);
              }
              function Yn(a, i, s) {
                i == '__proto__' && la
                  ? la(a, i, {
                      configurable: !0,
                      enumerable: !0,
                      value: s,
                      writable: !0,
                    })
                  : (a[i] = s);
              }
              function ri(a, i) {
                for (
                  var s = -1, y = i.length, b = Q(y), R = a == null;
                  ++s < y;
                )
                  b[s] = R ? u : Qr(a, i[s]);
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
              function gn(a, i, s, y, b, R) {
                var E,
                  j = i & w,
                  H = i & z,
                  le = i & U;
                if ((s && (E = b ? s(a, y, b, R) : s(a)), E !== u)) return E;
                if (!wt(a)) return a;
                var ie = qe(a);
                if (ie) {
                  if (((E = Hh(a)), !j)) return vn(a, E);
                } else {
                  var ue = an(a),
                    de = ue == Ll || ue == lo;
                  if (Xr(a)) return ns(a, j);
                  if (ue == Za || ue == ze || (de && !b)) {
                    if (((E = H || de ? {} : ys(a)), !j))
                      return H ? jh(a, ai(E, a)) : zh(a, Fo(E, a));
                  } else {
                    if (!mt[ue]) return b ? a : {};
                    E = Uh(a, ue, j);
                  }
                }
                R || (R = new sa());
                var Se = R.get(a);
                if (Se) return Se;
                (R.set(a, E),
                  Wu(a)
                    ? a.forEach(function (Me) {
                        E.add(gn(Me, i, s, Me, a, R));
                      })
                    : _1(a) &&
                      a.forEach(function (Me, We) {
                        E.set(We, gn(Me, i, s, We, a, R));
                      }));
                var Oe = le ? (H ? vs : hf) : H ? jn : It,
                  $e = ie ? u : Oe(a);
                return (
                  kn($e || a, function (Me, We) {
                    ($e && ((We = Me), (Me = a[We])),
                      Ca(E, We, gn(Me, i, s, We, a, R)));
                  }),
                  E
                );
              }
              function Sh(a) {
                var i = It(a);
                return function (s) {
                  return jr(s, a, i);
                };
              }
              function jr(a, i, s) {
                var y = s.length;
                if (a == null) return !y;
                for (a = ft(a); y--; ) {
                  var b = s[y],
                    R = i[b],
                    E = a[b];
                  if ((E === u && !(b in a)) || !R(E)) return !1;
                }
                return !0;
              }
              function $o(a, i, s) {
                if (typeof a != 'function') throw new Gn(v);
                return Lu(function () {
                  a.apply(u, s);
                }, i);
              }
              function ha(a, i, s, y) {
                var b = -1,
                  R = Tc,
                  E = !0,
                  j = a.length,
                  H = [],
                  le = i.length;
                if (!j) return H;
                (s && (i = Ct(i, Nn(s))),
                  y
                    ? ((R = eu), (E = !1))
                    : i.length >= d && ((R = tu), (E = !1), (i = new _l(i))));
                e: for (; ++b < j; ) {
                  var ie = a[b],
                    ue = s == null ? ie : s(ie);
                  if (((ie = y || ie !== 0 ? ie : 0), E && ue === ue)) {
                    for (var de = le; de--; ) if (i[de] === ue) continue e;
                    H.push(ie);
                  } else R(i, ue, y) || H.push(ie);
                }
                return H;
              }
              var Na = is(wa),
                Zc = is(Ic, !0);
              function Dr(a, i) {
                var s = !0;
                return (
                  Na(a, function (y, b, R) {
                    return ((s = !!i(y, b, R)), s);
                  }),
                  s
                );
              }
              function Ra(a, i, s) {
                for (var y = -1, b = a.length; ++y < b; ) {
                  var R = a[y],
                    E = i(R);
                  if (E != null && (j === u ? E === E && !zn(E) : s(E, j)))
                    var j = E,
                      H = R;
                }
                return H;
              }
              function hu(a, i, s, y) {
                var b = a.length;
                for (
                  s = Ee(s),
                    s < 0 && (s = -s > b ? 0 : b + s),
                    y = y === u || y > b ? b : Ee(y),
                    y < 0 && (y += b),
                    y = s > y ? 0 : t0(y);
                  s < y;
                )
                  a[s++] = i;
                return a;
              }
              function Vc(a, i) {
                var s = [];
                return (
                  Na(a, function (y, b, R) {
                    i(y, b, R) && s.push(y);
                  }),
                  s
                );
              }
              function Xt(a, i, s, y, b) {
                var R = -1,
                  E = a.length;
                for (s || (s = ps), b || (b = []); ++R < E; ) {
                  var j = a[R];
                  i > 0 && s(j)
                    ? i > 1
                      ? Xt(j, i - 1, s, y, b)
                      : Rr(b, j)
                    : y || (b[b.length] = j);
                }
                return b;
              }
              var xl = us(),
                li = us(!0);
              function wa(a, i) {
                return a && xl(a, i, It);
              }
              function Ic(a, i) {
                return a && li(a, i, It);
              }
              function ur(a, i) {
                return Ar(i, function (s) {
                  return Pn(a[s]);
                });
              }
              function Ga(a, i) {
                i = Zn(i, a);
                for (var s = 0, y = i.length; a != null && s < y; )
                  a = a[Rn(i[s++])];
                return s && s == y ? a : u;
              }
              function Yo(a, i, s) {
                var y = i(a);
                return qe(a) ? y : Rr(y, s(a));
              }
              function nn(a) {
                return a == null
                  ? a === u
                    ? Ln
                    : io
                  : nr && nr in ft(a)
                    ? Ou(a)
                    : _s(a);
              }
              function du(a, i) {
                return a > i;
              }
              function Xn(a, i) {
                return a != null && rt.call(a, i);
              }
              function da(a, i) {
                return a != null && i in ft(a);
              }
              function qr(a, i, s) {
                return a >= Ut(i, s) && a < zt(i, s);
              }
              function gu(a, i, s) {
                for (
                  var y = s ? eu : Tc,
                    b = a[0].length,
                    R = a.length,
                    E = R,
                    j = Q(R),
                    H = 1 / 0,
                    le = [];
                  E--;
                ) {
                  var ie = a[E];
                  (E && i && (ie = Ct(ie, Nn(i))),
                    (H = Ut(ie.length, H)),
                    (j[E] =
                      !s && (i || (b >= 120 && ie.length >= 120))
                        ? new _l(E && ie)
                        : u));
                }
                ie = a[0];
                var ue = -1,
                  de = j[0];
                e: for (; ++ue < b && le.length < H; ) {
                  var Se = ie[ue],
                    Oe = i ? i(Se) : Se;
                  if (
                    ((Se = s || Se !== 0 ? Se : 0),
                    !(de ? tu(de, Oe) : y(le, Oe, s)))
                  ) {
                    for (E = R; --E; ) {
                      var $e = j[E];
                      if (!($e ? tu($e, Oe) : y(a[E], Oe, s))) continue e;
                    }
                    (de && de.push(Oe), le.push(Se));
                  }
                }
                return le;
              }
              function xh(a, i, s, y) {
                return (
                  wa(a, function (b, R, E) {
                    i(y, s(b), R, E);
                  }),
                  y
                );
              }
              function ga(a, i, s) {
                ((i = Zn(i, a)), (a = Du(a, i)));
                var y = a == null ? a : a[Rn(xt(i))];
                return y == null ? u : Un(y, a, s);
              }
              function Cn(a) {
                return qt(a) && nn(a) == ze;
              }
              function Lt(a) {
                return qt(a) && nn(a) == Bl;
              }
              function Jc(a) {
                return qt(a) && nn(a) == _t;
              }
              function Kn(a, i, s, y, b) {
                return a === i
                  ? !0
                  : a == null || i == null || (!qt(a) && !qt(i))
                    ? a !== a && i !== i
                    : Ue(a, i, s, y, Kn, b);
              }
              function Ue(a, i, s, y, b, R) {
                var E = qe(a),
                  j = qe(i),
                  H = E ? Fe : an(a),
                  le = j ? Fe : an(i);
                ((H = H == ze ? Za : H), (le = le == ze ? Za : le));
                var ie = H == Za,
                  ue = le == Za,
                  de = H == le;
                if (de && Xr(a)) {
                  if (!Xr(i)) return !1;
                  ((E = !0), (ie = !1));
                }
                if (de && !ie)
                  return (
                    R || (R = new sa()),
                    E || Kr(a) ? wu(a, i, s, y, b, R) : Bh(a, i, H, s, y, b, R)
                  );
                if (!(s & K)) {
                  var Se = ie && rt.call(a, '__wrapped__'),
                    Oe = ue && rt.call(i, '__wrapped__');
                  if (Se || Oe) {
                    var $e = Se ? a.value() : a,
                      Me = Oe ? i.value() : i;
                    return (R || (R = new sa()), b($e, Me, s, y, R));
                  }
                }
                return de ? (R || (R = new sa()), gs(a, i, s, y, b, R)) : !1;
              }
              function gt(a) {
                return qt(a) && an(a) == Wt;
              }
              function jt(a, i, s, y) {
                var b = s.length,
                  R = b,
                  E = !y;
                if (a == null) return !R;
                for (a = ft(a); b--; ) {
                  var j = s[b];
                  if (E && j[2] ? j[1] !== a[j[0]] : !(j[0] in a)) return !1;
                }
                for (; ++b < R; ) {
                  j = s[b];
                  var H = j[0],
                    le = a[H],
                    ie = j[1];
                  if (E && j[2]) {
                    if (le === u && !(H in a)) return !1;
                  } else {
                    var ue = new sa();
                    if (y) var de = y(le, ie, H, a, i, ue);
                    if (!(de === u ? Kn(ie, le, K | N, y, ue) : de)) return !1;
                  }
                }
                return !0;
              }
              function vu(a) {
                if (!wt(a) || kh(a)) return !1;
                var i = Pn(a) ? Kl : B0;
                return i.test(on(a));
              }
              function ii(a) {
                return qt(a) && nn(a) == al;
              }
              function Cl(a) {
                return qt(a) && an(a) == qn;
              }
              function Wc(a) {
                return qt(a) && Df(a.length) && !!dt[nn(a)];
              }
              function ui(a) {
                return typeof a == 'function'
                  ? a
                  : a == null
                    ? mn
                    : typeof a == 'object'
                      ? qe(a)
                        ? Xo(a[0], a[1])
                        : ef(a)
                      : C(a);
              }
              function Lr(a) {
                if (!vi(a)) return Il(a);
                var i = [];
                for (var s in ft(a))
                  rt.call(a, s) && s != 'constructor' && i.push(s);
                return i;
              }
              function Vd(a) {
                if (!wt(a)) return fr(a);
                var i = vi(a),
                  s = [];
                for (var y in a)
                  (y == 'constructor' && (i || !rt.call(a, y))) || s.push(y);
                return s;
              }
              function Rt(a, i) {
                return a < i;
              }
              function Pc(a, i) {
                var s = -1,
                  y = Mn(a) ? Q(a.length) : [];
                return (
                  Na(a, function (b, R, E) {
                    y[++s] = i(b, R, E);
                  }),
                  y
                );
              }
              function ef(a) {
                var i = df(a);
                return i.length == 1 && i[0][2]
                  ? pf(i[0][0], i[0][1])
                  : function (s) {
                      return s === a || jt(s, a, i);
                    };
              }
              function Xo(a, i) {
                return zu(a) && $a(i)
                  ? pf(Rn(a), i)
                  : function (s) {
                      var y = Qr(s, a);
                      return y === u && y === i ? a0(s, a) : Kn(i, y, K | N);
                    };
              }
              function yu(a, i, s, y, b) {
                a !== i &&
                  xl(
                    i,
                    function (R, E) {
                      if ((b || (b = new sa()), wt(R)))
                        Id(a, i, E, s, yu, y, b);
                      else {
                        var j = y ? y(pt(a, E), R, E + '', a, i, b) : u;
                        (j === u && (j = R), Qc(a, E, j));
                      }
                    },
                    jn,
                  );
              }
              function Id(a, i, s, y, b, R, E) {
                var j = pt(a, s),
                  H = pt(i, s),
                  le = E.get(H);
                if (le) {
                  Qc(a, s, le);
                  return;
                }
                var ie = R ? R(j, H, s + '', a, i, E) : u,
                  ue = ie === u;
                if (ue) {
                  var de = qe(H),
                    Se = !de && Xr(H),
                    Oe = !de && !Se && Kr(H);
                  ((ie = H),
                    de || Se || Oe
                      ? qe(j)
                        ? (ie = j)
                        : Ht(j)
                          ? (ie = vn(j))
                          : Se
                            ? ((ue = !1), (ie = ns(H, !0)))
                            : Oe
                              ? ((ue = !1), (ie = as(H, !0)))
                              : (ie = [])
                      : Iu(H) || Ol(H)
                        ? ((ie = j),
                          Ol(j)
                            ? (ie = qf(j))
                            : (!wt(j) || Pn(j)) && (ie = ys(H)))
                        : (ue = !1));
                }
                (ue && (E.set(H, ie), b(ie, H, y, R, E), E.delete(H)),
                  Qc(a, s, ie));
              }
              function tf(a, i) {
                var s = a.length;
                if (s) return ((i += i < 0 ? s : 0), Oa(i, s) ? a[i] : u);
              }
              function nf(a, i, s) {
                i.length
                  ? (i = Ct(i, function (R) {
                      return qe(R)
                        ? function (E) {
                            return Ga(E, R.length === 1 ? R[0] : R);
                          }
                        : R;
                    }))
                  : (i = [mn]);
                var y = -1;
                i = Ct(i, Nn(we()));
                var b = Pc(a, function (R, E, j) {
                  var H = Ct(i, function (le) {
                    return le(R);
                  });
                  return { criteria: H, index: ++y, value: R };
                });
                return rh(b, function (R, E) {
                  return Mh(R, E, s);
                });
              }
              function Ko(a, i) {
                return cn(a, i, function (s, y) {
                  return a0(a, y);
                });
              }
              function cn(a, i, s) {
                for (var y = -1, b = i.length, R = {}; ++y < b; ) {
                  var E = i[y],
                    j = Ga(a, E);
                  s(j, E) && si(R, Zn(E, a), j);
                }
                return R;
              }
              function Bt(a) {
                return function (i) {
                  return Ga(i, a);
                };
              }
              function ci(a, i, s, y) {
                var b = y ? Nd : Gl,
                  R = -1,
                  E = i.length,
                  j = a;
                for (a === i && (i = vn(i)), s && (j = Ct(a, Nn(s))); ++R < E; )
                  for (
                    var H = 0, le = i[R], ie = s ? s(le) : le;
                    (H = b(j, ie, H, y)) > -1;
                  )
                    (j !== a && tr.call(j, H, 1), tr.call(a, H, 1));
                return a;
              }
              function fi(a, i) {
                for (var s = a ? i.length : 0, y = s - 1; s--; ) {
                  var b = i[s];
                  if (s == y || b !== R) {
                    var R = b;
                    Oa(b) ? tr.call(a, b, 1) : mu(a, b);
                  }
                }
                return a;
              }
              function oi(a, i) {
                return a + iu(ar() * (i - a + 1));
              }
              function Qo(a, i, s, y) {
                for (
                  var b = -1, R = zt(Zl((i - a) / (s || 1)), 0), E = Q(R);
                  R--;
                )
                  ((E[y ? R : ++b] = a), (a += s));
                return E;
              }
              function Ta(a, i) {
                var s = '';
                if (!a || i < 1 || i > _e) return s;
                do (i % 2 && (s += a), (i = iu(i / 2)), i && (a += a));
                while (i);
                return s;
              }
              function ke(a, i) {
                return bf(Ss(a, i, mn), a + '');
              }
              function Zo(a) {
                return su(Oi(a));
              }
              function Vo(a, i) {
                var s = Oi(a);
                return Bu(s, Aa(i, 0, s.length));
              }
              function si(a, i, s, y) {
                if (!wt(a)) return a;
                i = Zn(i, a);
                for (
                  var b = -1, R = i.length, E = R - 1, j = a;
                  j != null && ++b < R;
                ) {
                  var H = Rn(i[b]),
                    le = s;
                  if (
                    H === '__proto__' ||
                    H === 'constructor' ||
                    H === 'prototype'
                  )
                    return a;
                  if (b != E) {
                    var ie = j[H];
                    ((le = y ? y(ie, H, j) : u),
                      le === u && (le = wt(ie) ? ie : Oa(i[b + 1]) ? [] : {}));
                  }
                  (Ca(j, H, le), (j = j[H]));
                }
                return a;
              }
              var Io = kt
                  ? function (a, i) {
                      return (kt.set(a, i), a);
                    }
                  : mn,
                Ch = la
                  ? function (a, i) {
                      return la(a, 'toString', {
                        configurable: !0,
                        enumerable: !1,
                        value: zi(i),
                        writable: !0,
                      });
                    }
                  : mn;
              function Ah(a) {
                return Bu(Oi(a));
              }
              function Qn(a, i, s) {
                var y = -1,
                  b = a.length;
                (i < 0 && (i = -i > b ? 0 : b + i),
                  (s = s > b ? b : s),
                  s < 0 && (s += b),
                  (b = i > s ? 0 : (s - i) >>> 0),
                  (i >>>= 0));
                for (var R = Q(b); ++y < b; ) R[y] = a[y + i];
                return R;
              }
              function Rh(a, i) {
                var s;
                return (
                  Na(a, function (y, b, R) {
                    return ((s = i(y, b, R)), !s);
                  }),
                  !!s
                );
              }
              function hi(a, i, s) {
                var y = 0,
                  b = a == null ? y : a.length;
                if (typeof i == 'number' && i === i && b <= fe) {
                  for (; y < b; ) {
                    var R = (y + b) >>> 1,
                      E = a[R];
                    E !== null && !zn(E) && (s ? E <= i : E < i)
                      ? (y = R + 1)
                      : (b = R);
                  }
                  return b;
                }
                return af(a, i, mn, s);
              }
              function af(a, i, s, y) {
                var b = 0,
                  R = a == null ? 0 : a.length;
                if (R === 0) return 0;
                i = s(i);
                for (
                  var E = i !== i, j = i === null, H = zn(i), le = i === u;
                  b < R;
                ) {
                  var ie = iu((b + R) / 2),
                    ue = s(a[ie]),
                    de = ue !== u,
                    Se = ue === null,
                    Oe = ue === ue,
                    $e = zn(ue);
                  if (E) var Me = y || Oe;
                  else
                    le
                      ? (Me = Oe && (y || de))
                      : j
                        ? (Me = Oe && de && (y || !Se))
                        : H
                          ? (Me = Oe && de && !Se && (y || !$e))
                          : Se || $e
                            ? (Me = !1)
                            : (Me = y ? ue <= i : ue < i);
                  Me ? (b = ie + 1) : (R = ie);
                }
                return Ut(R, Y);
              }
              function wh(a, i) {
                for (var s = -1, y = a.length, b = 0, R = []; ++s < y; ) {
                  var E = a[s],
                    j = i ? i(E) : E;
                  if (!s || !Wn(j, H)) {
                    var H = j;
                    R[b++] = E === 0 ? 0 : E;
                  }
                }
                return R;
              }
              function Jo(a) {
                return typeof a == 'number' ? a : zn(a) ? Ze : +a;
              }
              function An(a) {
                if (typeof a == 'string') return a;
                if (qe(a)) return Ct(a, An) + '';
                if (zn(a)) return pl ? pl.call(a) : '';
                var i = a + '';
                return i == '0' && 1 / a == -he ? '-0' : i;
              }
              function cr(a, i, s) {
                var y = -1,
                  b = Tc,
                  R = a.length,
                  E = !0,
                  j = [],
                  H = j;
                if (s) ((E = !1), (b = eu));
                else if (R >= d) {
                  var le = i ? null : qh(a);
                  if (le) return qc(le);
                  ((E = !1), (b = tu), (H = new _l()));
                } else H = i ? [] : j;
                e: for (; ++y < R; ) {
                  var ie = a[y],
                    ue = i ? i(ie) : ie;
                  if (((ie = s || ie !== 0 ? ie : 0), E && ue === ue)) {
                    for (var de = H.length; de--; )
                      if (H[de] === ue) continue e;
                    (i && H.push(ue), j.push(ie));
                  } else b(H, ue, s) || (H !== j && H.push(ue), j.push(ie));
                }
                return j;
              }
              function mu(a, i) {
                i = Zn(i, a);
                var s = -1,
                  y = i.length;
                if (!y) return !0;
                for (
                  var b =
                    a == null ||
                    (typeof a != 'object' && typeof a != 'function');
                  ++s < y;
                ) {
                  var R = i[s];
                  if (typeof R == 'string') {
                    if (R === '__proto__' && !rt.call(a, '__proto__'))
                      return !1;
                    if (
                      R === 'constructor' &&
                      s + 1 < y &&
                      typeof i[s + 1] == 'string' &&
                      i[s + 1] === 'prototype'
                    ) {
                      if (b && s === 0) continue;
                      return !1;
                    }
                  }
                }
                var E = Du(a, i);
                return E == null || delete E[Rn(xt(i))];
              }
              function Wo(a, i, s, y) {
                return si(a, i, s(Ga(a, i)), y);
              }
              function pu(a, i, s, y) {
                for (
                  var b = a.length, R = y ? b : -1;
                  (y ? R-- : ++R < b) && i(a[R], R, a);
                );
                return s
                  ? Qn(a, y ? 0 : R, y ? R + 1 : b)
                  : Qn(a, y ? R + 1 : 0, y ? b : R);
              }
              function Po(a, i) {
                var s = a;
                return (
                  s instanceof He && (s = s.value()),
                  wo(
                    i,
                    function (y, b) {
                      return b.func.apply(b.thisArg, Rr([y], b.args));
                    },
                    s,
                  )
                );
              }
              function rf(a, i, s) {
                var y = a.length;
                if (y < 2) return y ? cr(a[0]) : [];
                for (var b = -1, R = Q(y); ++b < y; )
                  for (var E = a[b], j = -1; ++j < y; )
                    j != b && (R[b] = ha(R[b] || E, a[j], i, s));
                return cr(Xt(R, 1), i, s);
              }
              function es(a, i, s) {
                for (
                  var y = -1, b = a.length, R = i.length, E = {};
                  ++y < b;
                ) {
                  var j = y < R ? i[y] : u;
                  s(E, a[y], j);
                }
                return E;
              }
              function ts(a) {
                return Ht(a) ? a : [];
              }
              function lf(a) {
                return typeof a == 'function' ? a : mn;
              }
              function Zn(a, i) {
                return qe(a) ? a : zu(a, i) ? [a] : xs(ct(a));
              }
              var Th = ke;
              function Ea(a, i, s) {
                var y = a.length;
                return ((s = s === u ? y : s), !i && s >= y ? a : Qn(a, i, s));
              }
              var bu =
                gh ||
                function (a) {
                  return Yt.clearTimeout(a);
                };
              function ns(a, i) {
                if (i) return a.slice();
                var s = a.length,
                  y = Nc ? Nc(s) : new a.constructor(s);
                return (a.copy(y), y);
              }
              function _u(a) {
                var i = new a.constructor(a.byteLength);
                return (new vl(i).set(new vl(a)), i);
              }
              function Jd(a, i) {
                var s = i ? _u(a.buffer) : a.buffer;
                return new a.constructor(s, a.byteOffset, a.byteLength);
              }
              function Eh(a) {
                var i = new a.constructor(a.source, dc.exec(a));
                return ((i.lastIndex = a.lastIndex), i);
              }
              function Oh(a) {
                return Wl ? ft(Wl.call(a)) : {};
              }
              function as(a, i) {
                var s = i ? _u(a.buffer) : a.buffer;
                return new a.constructor(s, a.byteOffset, a.length);
              }
              function rs(a, i) {
                if (a !== i) {
                  var s = a !== u,
                    y = a === null,
                    b = a === a,
                    R = zn(a),
                    E = i !== u,
                    j = i === null,
                    H = i === i,
                    le = zn(i);
                  if (
                    (!j && !le && !R && a > i) ||
                    (R && E && H && !j && !le) ||
                    (y && E && H) ||
                    (!s && H) ||
                    !b
                  )
                    return 1;
                  if (
                    (!y && !R && !le && a < i) ||
                    (le && s && b && !y && !R) ||
                    (j && s && b) ||
                    (!E && b) ||
                    !H
                  )
                    return -1;
                }
                return 0;
              }
              function Mh(a, i, s) {
                for (
                  var y = -1,
                    b = a.criteria,
                    R = i.criteria,
                    E = b.length,
                    j = s.length;
                  ++y < E;
                ) {
                  var H = rs(b[y], R[y]);
                  if (H) {
                    if (y >= j) return H;
                    var le = s[y];
                    return H * (le == 'desc' ? -1 : 1);
                  }
                }
                return a.index - i.index;
              }
              function uf(a, i, s, y) {
                for (
                  var b = -1,
                    R = a.length,
                    E = s.length,
                    j = -1,
                    H = i.length,
                    le = zt(R - E, 0),
                    ie = Q(H + le),
                    ue = !y;
                  ++j < H;
                )
                  ie[j] = i[j];
                for (; ++b < E; ) (ue || b < R) && (ie[s[b]] = a[b]);
                for (; le--; ) ie[j++] = a[b++];
                return ie;
              }
              function ls(a, i, s, y) {
                for (
                  var b = -1,
                    R = a.length,
                    E = -1,
                    j = s.length,
                    H = -1,
                    le = i.length,
                    ie = zt(R - j, 0),
                    ue = Q(ie + le),
                    de = !y;
                  ++b < ie;
                )
                  ue[b] = a[b];
                for (var Se = b; ++H < le; ) ue[Se + H] = i[H];
                for (; ++E < j; ) (de || b < R) && (ue[Se + s[E]] = a[b++]);
                return ue;
              }
              function vn(a, i) {
                var s = -1,
                  y = a.length;
                for (i || (i = Q(y)); ++s < y; ) i[s] = a[s];
                return i;
              }
              function va(a, i, s, y) {
                var b = !s;
                s || (s = {});
                for (var R = -1, E = i.length; ++R < E; ) {
                  var j = i[R],
                    H = y ? y(s[j], a[j], j, s, a) : u;
                  (H === u && (H = a[j]), b ? Yn(s, j, H) : Ca(s, j, H));
                }
                return s;
              }
              function zh(a, i) {
                return va(a, gf(a), i);
              }
              function jh(a, i) {
                return va(a, Mu(a), i);
              }
              function cf(a, i) {
                return function (s, y) {
                  var b = qe(s) ? Ld : _h,
                    R = i ? i() : {};
                  return b(s, a, we(y, 2), R);
                };
              }
              function Br(a) {
                return ke(function (i, s) {
                  var y = -1,
                    b = s.length,
                    R = b > 1 ? s[b - 1] : u,
                    E = b > 2 ? s[2] : u;
                  for (
                    R = a.length > 3 && typeof R == 'function' ? (b--, R) : u,
                      E && fn(s[0], s[1], E) && ((R = b < 3 ? u : R), (b = 1)),
                      i = ft(i);
                    ++y < b;
                  ) {
                    var j = s[y];
                    j && a(i, j, y, R);
                  }
                  return i;
                });
              }
              function is(a, i) {
                return function (s, y) {
                  if (s == null) return s;
                  if (!Mn(s)) return a(s, y);
                  for (
                    var b = s.length, R = i ? b : -1, E = ft(s);
                    (i ? R-- : ++R < b) && y(E[R], R, E) !== !1;
                  );
                  return s;
                };
              }
              function us(a) {
                return function (i, s, y) {
                  for (var b = -1, R = ft(i), E = y(i), j = E.length; j--; ) {
                    var H = E[a ? j : ++b];
                    if (s(R[H], H, R) === !1) break;
                  }
                  return i;
                };
              }
              function cs(a, i, s) {
                var y = i & $,
                  b = Su(a);
                function R() {
                  var E = this && this !== Yt && this instanceof R ? b : a;
                  return E.apply(y ? s : this, arguments);
                }
                return R;
              }
              function fs(a) {
                return function (i) {
                  i = ct(i);
                  var s = dl(i) ? Tt(i) : u,
                    y = s ? s[0] : i.charAt(0),
                    b = s ? Ea(s, 1).join('') : i.slice(1);
                  return y[a]() + b;
                };
              }
              function Al(a) {
                return function (i) {
                  return wo(Q1(Mi(i).replace(Co, '')), a, '');
                };
              }
              function Su(a) {
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
                  var s = Or(a.prototype),
                    y = a.apply(s, i);
                  return wt(y) ? y : s;
                };
              }
              function Wd(a, i, s) {
                var y = Su(a);
                function b() {
                  for (
                    var R = arguments.length, E = Q(R), j = R, H = Dt(b);
                    j--;
                  )
                    E[j] = arguments[j];
                  var le =
                    R < 3 && E[0] !== H && E[R - 1] !== H ? [] : er(E, H);
                  if (((R -= le.length), R < s))
                    return sf(a, i, gi, b.placeholder, u, E, le, u, u, s - R);
                  var ie = this && this !== Yt && this instanceof b ? y : a;
                  return Un(ie, this, E);
                }
                return b;
              }
              function os(a) {
                return function (i, s, y) {
                  var b = ft(i);
                  if (!Mn(i)) {
                    var R = we(s, 3);
                    ((i = It(i)),
                      (s = function (j) {
                        return R(b[j], j, b);
                      }));
                  }
                  var E = a(i, s, y);
                  return E > -1 ? b[R ? i[E] : E] : u;
                };
              }
              function di(a) {
                return Fa(function (i) {
                  var s = i.length,
                    y = s,
                    b = xn.prototype.thru;
                  for (a && i.reverse(); y--; ) {
                    var R = i[y];
                    if (typeof R != 'function') throw new Gn(v);
                    if (b && !E && Et(R) == 'wrapper') var E = new xn([], !0);
                  }
                  for (y = E ? y : s; ++y < s; ) {
                    R = i[y];
                    var j = Et(R),
                      H = j == 'wrapper' ? Tu(R) : u;
                    H &&
                    ju(H[0]) &&
                    H[1] == (V | F | oe | ce) &&
                    !H[4].length &&
                    H[9] == 1
                      ? (E = E[Et(H[0])].apply(E, H[3]))
                      : (E = R.length == 1 && ju(R) ? E[j]() : E.thru(R));
                  }
                  return function () {
                    var le = arguments,
                      ie = le[0];
                    if (E && le.length == 1 && qe(ie))
                      return E.plant(ie).value();
                    for (
                      var ue = 0, de = s ? i[ue].apply(this, le) : ie;
                      ++ue < s;
                    )
                      de = i[ue].call(this, de);
                    return de;
                  };
                });
              }
              function gi(a, i, s, y, b, R, E, j, H, le) {
                var ie = i & V,
                  ue = i & $,
                  de = i & J,
                  Se = i & (F | I),
                  Oe = i & Ae,
                  $e = de ? u : Su(a);
                function Me() {
                  for (var We = arguments.length, Pe = Q(We), Da = We; Da--; )
                    Pe[Da] = arguments[Da];
                  if (Se)
                    var ta = Dt(Me),
                      qa = nu(Pe, ta);
                  if (
                    (y && (Pe = uf(Pe, y, b, Se)),
                    R && (Pe = ls(Pe, R, E, Se)),
                    (We -= qa),
                    Se && We < le)
                  ) {
                    var Qt = er(Pe, ta);
                    return sf(
                      a,
                      i,
                      gi,
                      Me.placeholder,
                      s,
                      Pe,
                      Qt,
                      j,
                      H,
                      le - We,
                    );
                  }
                  var pr = ue ? s : this,
                    zl = de ? pr[a] : a;
                  return (
                    (We = Pe.length),
                    j ? (Pe = qu(Pe, j)) : Oe && We > 1 && Pe.reverse(),
                    ie && H < We && (Pe.length = H),
                    this &&
                      this !== Yt &&
                      this instanceof Me &&
                      (zl = $e || Su(zl)),
                    zl.apply(pr, Pe)
                  );
                }
                return Me;
              }
              function xu(a, i) {
                return function (s, y) {
                  return xh(s, a, i(y), {});
                };
              }
              function Cu(a, i) {
                return function (s, y) {
                  var b;
                  if (s === u && y === u) return i;
                  if ((s !== u && (b = s), y !== u)) {
                    if (b === u) return y;
                    (typeof s == 'string' || typeof y == 'string'
                      ? ((s = An(s)), (y = An(y)))
                      : ((s = Jo(s)), (y = Jo(y))),
                      (b = a(s, y)));
                  }
                  return b;
                };
              }
              function ff(a) {
                return Fa(function (i) {
                  return (
                    (i = Ct(i, Nn(we()))),
                    ke(function (s) {
                      var y = this;
                      return a(i, function (b) {
                        return Un(b, y, s);
                      });
                    })
                  );
                });
              }
              function Hr(a, i) {
                i = i === u ? ' ' : An(i);
                var s = i.length;
                if (s < 2) return s ? Ta(i, a) : i;
                var y = Ta(i, Zl(a / Fl(i)));
                return dl(i) ? Ea(Tt(y), 0, a).join('') : y.slice(0, a);
              }
              function Dh(a, i, s, y) {
                var b = i & $,
                  R = Su(a);
                function E() {
                  for (
                    var j = -1,
                      H = arguments.length,
                      le = -1,
                      ie = y.length,
                      ue = Q(ie + H),
                      de = this && this !== Yt && this instanceof E ? R : a;
                    ++le < ie;
                  )
                    ue[le] = y[le];
                  for (; H--; ) ue[le++] = arguments[++j];
                  return Un(de, b ? s : this, ue);
                }
                return E;
              }
              function of(a) {
                return function (i, s, y) {
                  return (
                    y && typeof y != 'number' && fn(i, s, y) && (s = y = u),
                    (i = yr(i)),
                    s === u ? ((s = i), (i = 0)) : (s = yr(s)),
                    (y = y === u ? (i < s ? 1 : -1) : yr(y)),
                    Qo(i, s, y, a)
                  );
                };
              }
              function Au(a) {
                return function (i, s) {
                  return (
                    (typeof i == 'string' && typeof s == 'string') ||
                      ((i = ea(i)), (s = ea(s))),
                    a(i, s)
                  );
                };
              }
              function sf(a, i, s, y, b, R, E, j, H, le) {
                var ie = i & F,
                  ue = ie ? E : u,
                  de = ie ? u : E,
                  Se = ie ? R : u,
                  Oe = ie ? u : R;
                ((i |= ie ? oe : re),
                  (i &= ~(ie ? re : oe)),
                  i & te || (i &= -4));
                var $e = [a, i, b, Se, ue, Oe, de, j, H, le],
                  Me = s.apply(u, $e);
                return (
                  ju(a) && Gh(Me, $e),
                  (Me.placeholder = y),
                  yi(Me, a, i)
                );
              }
              function Ru(a) {
                var i = At[a];
                return function (s, y) {
                  if (
                    ((s = ea(s)),
                    (y = y == null ? 0 : Ut(Ee(y), 292)),
                    y && Fn(s))
                  ) {
                    var b = (ct(s) + 'e').split('e'),
                      R = i(b[0] + 'e' + (+b[1] + y));
                    return (
                      (b = (ct(R) + 'e').split('e')),
                      +(b[0] + 'e' + (+b[1] - y))
                    );
                  }
                  return i(s);
                };
              }
              var qh =
                wr && 1 / qc(new wr([, -0]))[1] == he
                  ? function (a) {
                      return new wr(a);
                    }
                  : n;
              function ss(a) {
                return function (i) {
                  var s = an(i);
                  return s == Wt ? Dc(i) : s == qn ? Fd(i) : lh(i, a(i));
                };
              }
              function yn(a, i, s, y, b, R, E, j) {
                var H = i & J;
                if (!H && typeof a != 'function') throw new Gn(v);
                var le = y ? y.length : 0;
                if (
                  (le || ((i &= -97), (y = b = u)),
                  (E = E === u ? E : zt(Ee(E), 0)),
                  (j = j === u ? j : Ee(j)),
                  (le -= b ? b.length : 0),
                  i & re)
                ) {
                  var ie = y,
                    ue = b;
                  y = b = u;
                }
                var de = H ? u : Tu(a),
                  Se = [a, i, s, y, b, ie, ue, R, E, j];
                if (
                  (de && Nh(Se, de),
                  (a = Se[0]),
                  (i = Se[1]),
                  (s = Se[2]),
                  (y = Se[3]),
                  (b = Se[4]),
                  (j = Se[9] =
                    Se[9] === u ? (H ? 0 : a.length) : zt(Se[9] - le, 0)),
                  !j && i & (F | I) && (i &= -25),
                  !i || i == $)
                )
                  var Oe = cs(a, i, s);
                else
                  i == F || i == I
                    ? (Oe = Wd(a, i, j))
                    : (i == oe || i == ($ | oe)) && !b.length
                      ? (Oe = Dh(a, i, s, y))
                      : (Oe = gi.apply(u, Se));
                var $e = de ? Io : Gh;
                return yi($e(Oe, Se), a, i);
              }
              function hs(a, i, s, y) {
                return a === u || (Wn(a, Xl[s]) && !rt.call(y, s)) ? i : a;
              }
              function ds(a, i, s, y, b, R) {
                return (
                  wt(a) &&
                    wt(i) &&
                    (R.set(i, a), yu(a, i, u, ds, R), R.delete(i)),
                  a
                );
              }
              function Lh(a) {
                return Iu(a) ? u : a;
              }
              function wu(a, i, s, y, b, R) {
                var E = s & K,
                  j = a.length,
                  H = i.length;
                if (j != H && !(E && H > j)) return !1;
                var le = R.get(a),
                  ie = R.get(i);
                if (le && ie) return le == i && ie == a;
                var ue = -1,
                  de = !0,
                  Se = s & N ? new _l() : u;
                for (R.set(a, i), R.set(i, a); ++ue < j; ) {
                  var Oe = a[ue],
                    $e = i[ue];
                  if (y)
                    var Me = E
                      ? y($e, Oe, ue, i, a, R)
                      : y(Oe, $e, ue, a, i, R);
                  if (Me !== u) {
                    if (Me) continue;
                    de = !1;
                    break;
                  }
                  if (Se) {
                    if (
                      !To(i, function (We, Pe) {
                        if (!tu(Se, Pe) && (Oe === We || b(Oe, We, s, y, R)))
                          return Se.push(Pe);
                      })
                    ) {
                      de = !1;
                      break;
                    }
                  } else if (!(Oe === $e || b(Oe, $e, s, y, R))) {
                    de = !1;
                    break;
                  }
                }
                return (R.delete(a), R.delete(i), de);
              }
              function Bh(a, i, s, y, b, R, E) {
                switch (s) {
                  case Va:
                    if (
                      a.byteLength != i.byteLength ||
                      a.byteOffset != i.byteOffset
                    )
                      return !1;
                    ((a = a.buffer), (i = i.buffer));
                  case Bl:
                    return !(
                      a.byteLength != i.byteLength || !R(new vl(a), new vl(i))
                    );
                  case $t:
                  case _t:
                  case nl:
                    return Wn(+a, +i);
                  case tl:
                    return a.name == i.name && a.message == i.message;
                  case al:
                  case ki:
                    return a == i + '';
                  case Wt:
                    var j = Dc;
                  case qn:
                    var H = y & K;
                    if ((j || (j = qc), a.size != i.size && !H)) return !1;
                    var le = E.get(a);
                    if (le) return le == i;
                    ((y |= N), E.set(a, i));
                    var ie = wu(j(a), j(i), y, b, R, E);
                    return (E.delete(a), ie);
                  case uc:
                    if (Wl) return Wl.call(a) == Wl.call(i);
                }
                return !1;
              }
              function gs(a, i, s, y, b, R) {
                var E = s & K,
                  j = hf(a),
                  H = j.length,
                  le = hf(i),
                  ie = le.length;
                if (H != ie && !E) return !1;
                for (var ue = H; ue--; ) {
                  var de = j[ue];
                  if (!(E ? de in i : rt.call(i, de))) return !1;
                }
                var Se = R.get(a),
                  Oe = R.get(i);
                if (Se && Oe) return Se == i && Oe == a;
                var $e = !0;
                (R.set(a, i), R.set(i, a));
                for (var Me = E; ++ue < H; ) {
                  de = j[ue];
                  var We = a[de],
                    Pe = i[de];
                  if (y)
                    var Da = E
                      ? y(Pe, We, de, i, a, R)
                      : y(We, Pe, de, a, i, R);
                  if (!(Da === u ? We === Pe || b(We, Pe, s, y, R) : Da)) {
                    $e = !1;
                    break;
                  }
                  Me || (Me = de == 'constructor');
                }
                if ($e && !Me) {
                  var ta = a.constructor,
                    qa = i.constructor;
                  ta != qa &&
                    'constructor' in a &&
                    'constructor' in i &&
                    !(
                      typeof ta == 'function' &&
                      ta instanceof ta &&
                      typeof qa == 'function' &&
                      qa instanceof qa
                    ) &&
                    ($e = !1);
                }
                return (R.delete(a), R.delete(i), $e);
              }
              function Fa(a) {
                return bf(Ss(a, u, St), a + '');
              }
              function hf(a) {
                return Yo(a, It, gf);
              }
              function vs(a) {
                return Yo(a, jn, Mu);
              }
              var Tu = kt
                ? function (a) {
                    return kt.get(a);
                  }
                : n;
              function Et(a) {
                for (
                  var i = a.name + '',
                    s = ut[i],
                    y = rt.call(ut, i) ? s.length : 0;
                  y--;
                ) {
                  var b = s[y],
                    R = b.func;
                  if (R == null || R == a) return b.name;
                }
                return i;
              }
              function Dt(a) {
                var i = rt.call(A, 'placeholder') ? A : a;
                return i.placeholder;
              }
              function we() {
                var a = A.iteratee || rc;
                return (
                  (a = a === rc ? ui : a),
                  arguments.length ? a(arguments[0], arguments[1]) : a
                );
              }
              function Eu(a, i) {
                var s = a.__data__;
                return mf(i)
                  ? s[typeof i == 'string' ? 'string' : 'hash']
                  : s.map;
              }
              function df(a) {
                for (var i = It(a), s = i.length; s--; ) {
                  var y = i[s],
                    b = a[y];
                  i[s] = [y, b, $a(b)];
                }
                return i;
              }
              function Ur(a, i) {
                var s = ih(a, i);
                return vu(s) ? s : u;
              }
              function Ou(a) {
                var i = rt.call(a, nr),
                  s = a[nr];
                try {
                  a[nr] = u;
                  var y = !0;
                } catch {}
                var b = Sn.call(a);
                return (y && (i ? (a[nr] = s) : delete a[nr]), b);
              }
              var gf = uu
                  ? function (a) {
                      return a == null
                        ? []
                        : ((a = ft(a)),
                          Ar(uu(a), function (i) {
                            return lu.call(a, i);
                          }));
                    }
                  : ae,
                Mu = uu
                  ? function (a) {
                      for (var i = []; a; ) (Rr(i, gf(a)), (a = Ha(a)));
                      return i;
                    }
                  : ae,
                an = nn;
              ((ca && an(new ca(new ArrayBuffer(1))) != Va) ||
                ($n && an(new $n()) != Wt) ||
                (Fc && an(Fc.resolve()) != uo) ||
                (wr && an(new wr()) != qn) ||
                (ml && an(new ml()) != Ni)) &&
                (an = function (a) {
                  var i = nn(a),
                    s = i == Za ? a.constructor : u,
                    y = s ? on(s) : '';
                  if (y)
                    switch (y) {
                      case Je:
                        return Va;
                      case Tr:
                        return Wt;
                      case fa:
                        return uo;
                      case Uo:
                        return qn;
                      case Er:
                        return Ni;
                    }
                  return i;
                });
              function Pd(a, i, s) {
                for (var y = -1, b = s.length; ++y < b; ) {
                  var R = s[y],
                    E = R.size;
                  switch (R.type) {
                    case 'drop':
                      a += E;
                      break;
                    case 'dropRight':
                      i -= E;
                      break;
                    case 'take':
                      i = Ut(i, a + E);
                      break;
                    case 'takeRight':
                      a = zt(a, i - E);
                      break;
                  }
                }
                return { start: a, end: i };
              }
              function vf(a) {
                var i = a.match(q0);
                return i ? i[1].split(L0) : [];
              }
              function yf(a, i, s) {
                i = Zn(i, a);
                for (var y = -1, b = i.length, R = !1; ++y < b; ) {
                  var E = Rn(i[y]);
                  if (!(R = a != null && s(a, E))) break;
                  a = a[E];
                }
                return R || ++y != b
                  ? R
                  : ((b = a == null ? 0 : a.length),
                    !!b && Df(b) && Oa(E, b) && (qe(a) || Ol(a)));
              }
              function Hh(a) {
                var i = a.length,
                  s = new a.constructor(i);
                return (
                  i &&
                    typeof a[0] == 'string' &&
                    rt.call(a, 'index') &&
                    ((s.index = a.index), (s.input = a.input)),
                  s
                );
              }
              function ys(a) {
                return typeof a.constructor == 'function' && !vi(a)
                  ? Or(Ha(a))
                  : {};
              }
              function Uh(a, i, s) {
                var y = a.constructor;
                switch (i) {
                  case Bl:
                    return _u(a);
                  case $t:
                  case _t:
                    return new y(+a);
                  case Va:
                    return Jd(a, s);
                  case fo:
                  case cc:
                  case oo:
                  case so:
                  case rl:
                  case hn:
                  case La:
                  case dn:
                  case ho:
                    return as(a, s);
                  case Wt:
                    return new y();
                  case nl:
                  case ki:
                    return new y(a);
                  case al:
                    return Eh(a);
                  case qn:
                    return new y();
                  case uc:
                    return Oh(a);
                }
              }
              function ms(a, i) {
                var s = i.length;
                if (!s) return a;
                var y = s - 1;
                return (
                  (i[y] = (s > 1 ? '& ' : '') + i[y]),
                  (i = i.join(s > 2 ? ', ' : ' ')),
                  a.replace(
                    mo,
                    `{
/* [wrapped with ` +
                      i +
                      `] */
`,
                  )
                );
              }
              function ps(a) {
                return qe(a) || Ol(a) || !!(dh && a && a[dh]);
              }
              function Oa(a, i) {
                var s = typeof a;
                return (
                  (i = i ?? _e),
                  !!i &&
                    (s == 'number' || (s != 'symbol' && po.test(a))) &&
                    a > -1 &&
                    a % 1 == 0 &&
                    a < i
                );
              }
              function fn(a, i, s) {
                if (!wt(s)) return !1;
                var y = typeof i;
                return (
                  y == 'number'
                    ? Mn(s) && Oa(i, s.length)
                    : y == 'string' && i in s
                )
                  ? Wn(s[i], a)
                  : !1;
              }
              function zu(a, i) {
                if (qe(a)) return !1;
                var s = typeof a;
                return s == 'number' ||
                  s == 'symbol' ||
                  s == 'boolean' ||
                  a == null ||
                  zn(a)
                  ? !0
                  : Yi.test(a) || !vo.test(a) || (i != null && a in ft(i));
              }
              function mf(a) {
                var i = typeof a;
                return i == 'string' ||
                  i == 'number' ||
                  i == 'symbol' ||
                  i == 'boolean'
                  ? a !== '__proto__'
                  : a === null;
              }
              function ju(a) {
                var i = Et(a),
                  s = A[i];
                if (typeof s != 'function' || !(i in He.prototype)) return !1;
                if (a === s) return !0;
                var y = Tu(s);
                return !!y && a === y[0];
              }
              function kh(a) {
                return !!Uc && Uc in a;
              }
              var bs = Bc ? Pn : X;
              function vi(a) {
                var i = a && a.constructor,
                  s = (typeof i == 'function' && i.prototype) || Xl;
                return a === s;
              }
              function $a(a) {
                return a === a && !wt(a);
              }
              function pf(a, i) {
                return function (s) {
                  return s == null ? !1 : s[a] === i && (i !== u || a in ft(s));
                };
              }
              function eg(a) {
                var i = Ku(a, function (y) {
                    return (s.size === S && s.clear(), y);
                  }),
                  s = i.cache;
                return i;
              }
              function Nh(a, i) {
                var s = a[1],
                  y = i[1],
                  b = s | y,
                  R = b < ($ | J | V),
                  E =
                    (y == V && s == F) ||
                    (y == V && s == ce && a[7].length <= i[8]) ||
                    (y == (V | ce) && i[7].length <= i[8] && s == F);
                if (!(R || E)) return a;
                y & $ && ((a[2] = i[2]), (b |= s & $ ? 0 : te));
                var j = i[3];
                if (j) {
                  var H = a[3];
                  ((a[3] = H ? uf(H, j, i[4]) : j),
                    (a[4] = H ? er(a[3], T) : i[4]));
                }
                return (
                  (j = i[5]),
                  j &&
                    ((H = a[5]),
                    (a[5] = H ? ls(H, j, i[6]) : j),
                    (a[6] = H ? er(a[5], T) : i[6])),
                  (j = i[7]),
                  j && (a[7] = j),
                  y & V && (a[8] = a[8] == null ? i[8] : Ut(a[8], i[8])),
                  a[9] == null && (a[9] = i[9]),
                  (a[0] = i[0]),
                  (a[1] = b),
                  a
                );
              }
              function fr(a) {
                var i = [];
                if (a != null) for (var s in ft(a)) i.push(s);
                return i;
              }
              function _s(a) {
                return Sn.call(a);
              }
              function Ss(a, i, s) {
                return (
                  (i = zt(i === u ? a.length - 1 : i, 0)),
                  function () {
                    for (
                      var y = arguments,
                        b = -1,
                        R = zt(y.length - i, 0),
                        E = Q(R);
                      ++b < R;
                    )
                      E[b] = y[i + b];
                    b = -1;
                    for (var j = Q(i + 1); ++b < i; ) j[b] = y[b];
                    return ((j[i] = s(E)), Un(a, this, j));
                  }
                );
              }
              function Du(a, i) {
                return i.length < 2 ? a : Ga(a, Qn(i, 0, -1));
              }
              function qu(a, i) {
                for (var s = a.length, y = Ut(i.length, s), b = vn(a); y--; ) {
                  var R = i[y];
                  a[y] = Oa(R, s) ? b[R] : u;
                }
                return a;
              }
              function pt(a, i) {
                if (
                  !(i === 'constructor' && typeof a[i] == 'function') &&
                  i != '__proto__'
                )
                  return a[i];
              }
              var Gh = or(Io),
                Lu =
                  yl ||
                  function (a, i) {
                    return Yt.setTimeout(a, i);
                  },
                bf = or(Ch);
              function yi(a, i, s) {
                var y = i + '';
                return bf(a, ms(y, Fh(vf(y), s)));
              }
              function or(a) {
                var i = 0,
                  s = 0;
                return function () {
                  var y = ia(),
                    b = xe - (y - s);
                  if (((s = y), b > 0)) {
                    if (++i >= Le) return arguments[0];
                  } else i = 0;
                  return a.apply(u, arguments);
                };
              }
              function Bu(a, i) {
                var s = -1,
                  y = a.length,
                  b = y - 1;
                for (i = i === u ? y : i; ++s < i; ) {
                  var R = oi(s, b),
                    E = a[R];
                  ((a[R] = a[s]), (a[s] = E));
                }
                return ((a.length = i), a);
              }
              var xs = eg(function (a) {
                var i = [];
                return (
                  a.charCodeAt(0) === 46 && i.push(''),
                  a.replace(Ed, function (s, y, b, R) {
                    i.push(b ? R.replace(bn, '$1') : y || s);
                  }),
                  i
                );
              });
              function Rn(a) {
                if (typeof a == 'string' || zn(a)) return a;
                var i = a + '';
                return i == '0' && 1 / a == -he ? '-0' : i;
              }
              function on(a) {
                if (a != null) {
                  try {
                    return Hc.call(a);
                  } catch {}
                  try {
                    return a + '';
                  } catch {}
                }
                return '';
              }
              function Fh(a, i) {
                return (
                  kn(me, function (s) {
                    var y = '_.' + s[0];
                    i & s[1] && !Tc(a, y) && a.push(y);
                  }),
                  a.sort()
                );
              }
              function _f(a) {
                if (a instanceof He) return a.clone();
                var i = new xn(a.__wrapped__, a.__chain__);
                return (
                  (i.__actions__ = vn(a.__actions__)),
                  (i.__index__ = a.__index__),
                  (i.__values__ = a.__values__),
                  i
                );
              }
              function $h(a, i, s) {
                (s ? fn(a, i, s) : i === u) ? (i = 1) : (i = zt(Ee(i), 0));
                var y = a == null ? 0 : a.length;
                if (!y || i < 1) return [];
                for (var b = 0, R = 0, E = Q(Zl(y / i)); b < y; )
                  E[R++] = Qn(a, b, (b += i));
                return E;
              }
              function Cs(a) {
                for (
                  var i = -1, s = a == null ? 0 : a.length, y = 0, b = [];
                  ++i < s;
                ) {
                  var R = a[i];
                  R && (b[y++] = R);
                }
                return b;
              }
              function As() {
                var a = arguments.length;
                if (!a) return [];
                for (var i = Q(a - 1), s = arguments[0], y = a; y--; )
                  i[y - 1] = arguments[y];
                return Rr(qe(s) ? vn(s) : [s], Xt(i, 1));
              }
              var Sf = ke(function (a, i) {
                  return Ht(a) ? ha(a, Xt(i, 1, Ht, !0)) : [];
                }),
                Yh = ke(function (a, i) {
                  var s = xt(i);
                  return (
                    Ht(s) && (s = u),
                    Ht(a) ? ha(a, Xt(i, 1, Ht, !0), we(s, 2)) : []
                  );
                }),
                sr = ke(function (a, i) {
                  var s = xt(i);
                  return (
                    Ht(s) && (s = u),
                    Ht(a) ? ha(a, Xt(i, 1, Ht, !0), u, s) : []
                  );
                });
              function Gt(a, i, s) {
                var y = a == null ? 0 : a.length;
                return y
                  ? ((i = s || i === u ? 1 : Ee(i)), Qn(a, i < 0 ? 0 : i, y))
                  : [];
              }
              function Rs(a, i, s) {
                var y = a == null ? 0 : a.length;
                return y
                  ? ((i = s || i === u ? 1 : Ee(i)),
                    (i = y - i),
                    Qn(a, 0, i < 0 ? 0 : i))
                  : [];
              }
              function Xh(a, i) {
                return a && a.length ? pu(a, we(i, 3), !0, !0) : [];
              }
              function Vt(a, i) {
                return a && a.length ? pu(a, we(i, 3), !0) : [];
              }
              function tg(a, i, s, y) {
                var b = a == null ? 0 : a.length;
                return b
                  ? (s &&
                      typeof s != 'number' &&
                      fn(a, i, s) &&
                      ((s = 0), (y = b)),
                    hu(a, i, s, y))
                  : [];
              }
              function ws(a, i, s) {
                var y = a == null ? 0 : a.length;
                if (!y) return -1;
                var b = s == null ? 0 : Ee(s);
                return (b < 0 && (b = zt(y + b, 0)), Ec(a, we(i, 3), b));
              }
              function Ts(a, i, s) {
                var y = a == null ? 0 : a.length;
                if (!y) return -1;
                var b = y - 1;
                return (
                  s !== u &&
                    ((b = Ee(s)), (b = s < 0 ? zt(y + b, 0) : Ut(b, y - 1))),
                  Ec(a, we(i, 3), b, !0)
                );
              }
              function St(a) {
                var i = a == null ? 0 : a.length;
                return i ? Xt(a, 1) : [];
              }
              function wn(a) {
                var i = a == null ? 0 : a.length;
                return i ? Xt(a, he) : [];
              }
              function hr(a, i) {
                var s = a == null ? 0 : a.length;
                return s ? ((i = i === u ? 1 : Ee(i)), Xt(a, i)) : [];
              }
              function Kh(a) {
                for (
                  var i = -1, s = a == null ? 0 : a.length, y = {};
                  ++i < s;
                ) {
                  var b = a[i];
                  y[b[0]] = b[1];
                }
                return y;
              }
              function Es(a) {
                return a && a.length ? a[0] : u;
              }
              function Qh(a, i, s) {
                var y = a == null ? 0 : a.length;
                if (!y) return -1;
                var b = s == null ? 0 : Ee(s);
                return (b < 0 && (b = zt(y + b, 0)), Gl(a, i, b));
              }
              function ng(a) {
                var i = a == null ? 0 : a.length;
                return i ? Qn(a, 0, -1) : [];
              }
              var xf = ke(function (a) {
                  var i = Ct(a, ts);
                  return i.length && i[0] === a[0] ? gu(i) : [];
                }),
                Tn = ke(function (a) {
                  var i = xt(a),
                    s = Ct(a, ts);
                  return (
                    i === xt(s) ? (i = u) : s.pop(),
                    s.length && s[0] === a[0] ? gu(s, we(i, 2)) : []
                  );
                }),
                Ma = ke(function (a) {
                  var i = xt(a),
                    s = Ct(a, ts);
                  return (
                    (i = typeof i == 'function' ? i : u),
                    i && s.pop(),
                    s.length && s[0] === a[0] ? gu(s, u, i) : []
                  );
                });
              function Zh(a, i) {
                return a == null ? '' : Vl.call(a, i);
              }
              function xt(a) {
                var i = a == null ? 0 : a.length;
                return i ? a[i - 1] : u;
              }
              function Vh(a, i, s) {
                var y = a == null ? 0 : a.length;
                if (!y) return -1;
                var b = y;
                return (
                  s !== u &&
                    ((b = Ee(s)), (b = b < 0 ? zt(y + b, 0) : Ut(b, y - 1))),
                  i === i ? Yd(a, i, b) : Ec(a, ah, b, !0)
                );
              }
              function dr(a, i) {
                return a && a.length ? tf(a, Ee(i)) : u;
              }
              var Rl = ke(Ya);
              function Ya(a, i) {
                return a && a.length && i && i.length ? ci(a, i) : a;
              }
              function Os(a, i, s) {
                return a && a.length && i && i.length ? ci(a, i, we(s, 2)) : a;
              }
              function Ms(a, i, s) {
                return a && a.length && i && i.length ? ci(a, i, u, s) : a;
              }
              var za = Fa(function (a, i) {
                var s = a == null ? 0 : a.length,
                  y = ri(a, i);
                return (
                  fi(
                    a,
                    Ct(i, function (b) {
                      return Oa(b, s) ? +b : b;
                    }).sort(rs),
                  ),
                  y
                );
              });
              function Ih(a, i) {
                var s = [];
                if (!(a && a.length)) return s;
                var y = -1,
                  b = [],
                  R = a.length;
                for (i = we(i, 3); ++y < R; ) {
                  var E = a[y];
                  i(E, y, a) && (s.push(E), b.push(y));
                }
                return (fi(a, b), s);
              }
              function kr(a) {
                return a == null ? a : Ua.call(a);
              }
              function Hu(a, i, s) {
                var y = a == null ? 0 : a.length;
                return y
                  ? (s && typeof s != 'number' && fn(a, i, s)
                      ? ((i = 0), (s = y))
                      : ((i = i == null ? 0 : Ee(i)),
                        (s = s === u ? y : Ee(s))),
                    Qn(a, i, s))
                  : [];
              }
              function Uu(a, i) {
                return hi(a, i);
              }
              function mi(a, i, s) {
                return af(a, i, we(s, 2));
              }
              function Jh(a, i) {
                var s = a == null ? 0 : a.length;
                if (s) {
                  var y = hi(a, i);
                  if (y < s && Wn(a[y], i)) return y;
                }
                return -1;
              }
              function Wh(a, i) {
                return hi(a, i, !0);
              }
              function ku(a, i, s) {
                return af(a, i, we(s, 2), !0);
              }
              function Ph(a, i) {
                var s = a == null ? 0 : a.length;
                if (s) {
                  var y = hi(a, i, !0) - 1;
                  if (Wn(a[y], i)) return y;
                }
                return -1;
              }
              function Cf(a) {
                return a && a.length ? wh(a) : [];
              }
              function e1(a, i) {
                return a && a.length ? wh(a, we(i, 2)) : [];
              }
              function ag(a) {
                var i = a == null ? 0 : a.length;
                return i ? Qn(a, 1, i) : [];
              }
              function rg(a, i, s) {
                return a && a.length
                  ? ((i = s || i === u ? 1 : Ee(i)), Qn(a, 0, i < 0 ? 0 : i))
                  : [];
              }
              function lt(a, i, s) {
                var y = a == null ? 0 : a.length;
                return y
                  ? ((i = s || i === u ? 1 : Ee(i)),
                    (i = y - i),
                    Qn(a, i < 0 ? 0 : i, y))
                  : [];
              }
              function bt(a, i) {
                return a && a.length ? pu(a, we(i, 3), !1, !0) : [];
              }
              function Xe(a, i) {
                return a && a.length ? pu(a, we(i, 3)) : [];
              }
              var Ve = ke(function (a) {
                  return cr(Xt(a, 1, Ht, !0));
                }),
                ot = ke(function (a) {
                  var i = xt(a);
                  return (Ht(i) && (i = u), cr(Xt(a, 1, Ht, !0), we(i, 2)));
                }),
                Vn = ke(function (a) {
                  var i = xt(a);
                  return (
                    (i = typeof i == 'function' ? i : u),
                    cr(Xt(a, 1, Ht, !0), u, i)
                  );
                });
              function Nr(a) {
                return a && a.length ? cr(a) : [];
              }
              function pi(a, i) {
                return a && a.length ? cr(a, we(i, 2)) : [];
              }
              function zs(a, i) {
                return (
                  (i = typeof i == 'function' ? i : u),
                  a && a.length ? cr(a, u, i) : []
                );
              }
              function ja(a) {
                if (!(a && a.length)) return [];
                var i = 0;
                return (
                  (a = Ar(a, function (s) {
                    if (Ht(s)) return ((i = zt(s.length, i)), !0);
                  })),
                  zc(i, function (s) {
                    return Ct(a, sl(s));
                  })
                );
              }
              function Ot(a, i) {
                if (!(a && a.length)) return [];
                var s = ja(a);
                return i == null
                  ? s
                  : Ct(s, function (y) {
                      return Un(i, u, y);
                    });
              }
              var Gr = ke(function (a, i) {
                  return Ht(a) ? ha(a, i) : [];
                }),
                wl = ke(function (a) {
                  return rf(Ar(a, Ht));
                }),
                js = ke(function (a) {
                  var i = xt(a);
                  return (Ht(i) && (i = u), rf(Ar(a, Ht), we(i, 2)));
                }),
                In = ke(function (a) {
                  var i = xt(a);
                  return (
                    (i = typeof i == 'function' ? i : u),
                    rf(Ar(a, Ht), u, i)
                  );
                }),
                bi = ke(ja);
              function Nu(a, i) {
                return es(a || [], i || [], Ca);
              }
              function En(a, i) {
                return es(a || [], i || [], si);
              }
              var Ds = ke(function (a) {
                var i = a.length,
                  s = i > 1 ? a[i - 1] : u;
                return (
                  (s = typeof s == 'function' ? (a.pop(), s) : u),
                  Ot(a, s)
                );
              });
              function Gu(a) {
                var i = A(a);
                return ((i.__chain__ = !0), i);
              }
              function t1(a, i) {
                return (i(a), a);
              }
              function Tl(a, i) {
                return i(a);
              }
              var Af = Fa(function (a) {
                var i = a.length,
                  s = i ? a[0] : 0,
                  y = this.__wrapped__,
                  b = function (R) {
                    return ri(R, a);
                  };
                return i > 1 ||
                  this.__actions__.length ||
                  !(y instanceof He) ||
                  !Oa(s)
                  ? this.thru(b)
                  : ((y = y.slice(s, +s + (i ? 1 : 0))),
                    y.__actions__.push({ func: Tl, args: [b], thisArg: u }),
                    new xn(y, this.__chain__).thru(function (R) {
                      return (i && !R.length && R.push(u), R);
                    }));
              });
              function Fr() {
                return Gu(this);
              }
              function Kt() {
                return new xn(this.value(), this.__chain__);
              }
              function $r() {
                this.__values__ === u && (this.__values__ = R1(this.value()));
                var a = this.__index__ >= this.__values__.length,
                  i = a ? u : this.__values__[this.__index__++];
                return { done: a, value: i };
              }
              function _i() {
                return this;
              }
              function gr(a) {
                for (var i, s = this; s instanceof Mr; ) {
                  var y = _f(s);
                  ((y.__index__ = 0),
                    (y.__values__ = u),
                    i ? (b.__wrapped__ = y) : (i = y));
                  var b = y;
                  s = s.__wrapped__;
                }
                return ((b.__wrapped__ = a), i);
              }
              function qs() {
                var a = this.__wrapped__;
                if (a instanceof He) {
                  var i = a;
                  return (
                    this.__actions__.length && (i = new He(this)),
                    (i = i.reverse()),
                    i.__actions__.push({ func: Tl, args: [kr], thisArg: u }),
                    new xn(i, this.__chain__)
                  );
                }
                return this.thru(kr);
              }
              function Ls() {
                return Po(this.__wrapped__, this.__actions__);
              }
              var n1 = cf(function (a, i, s) {
                rt.call(a, s) ? ++a[s] : Yn(a, s, 1);
              });
              function Fu(a, i, s) {
                var y = qe(a) ? eh : Dr;
                return (s && fn(a, i, s) && (i = u), y(a, we(i, 3)));
              }
              function Bs(a, i) {
                var s = qe(a) ? Ar : Vc;
                return s(a, we(i, 3));
              }
              var Jn = os(ws),
                a1 = os(Ts);
              function On(a, i) {
                return Xt($u(a, i), 1);
              }
              function r1(a, i) {
                return Xt($u(a, i), he);
              }
              function l1(a, i, s) {
                return ((s = s === u ? 1 : Ee(s)), Xt($u(a, i), s));
              }
              function i1(a, i) {
                var s = qe(a) ? kn : Na;
                return s(a, we(i, 3));
              }
              function vr(a, i) {
                var s = qe(a) ? Bd : Zc;
                return s(a, we(i, 3));
              }
              var Rf = cf(function (a, i, s) {
                rt.call(a, s) ? a[s].push(i) : Yn(a, s, [i]);
              });
              function Hs(a, i, s, y) {
                ((a = Mn(a) ? a : Oi(a)), (s = s && !y ? Ee(s) : 0));
                var b = a.length;
                return (
                  s < 0 && (s = zt(b + s, 0)),
                  Pu(a)
                    ? s <= b && a.indexOf(i, s) > -1
                    : !!b && Gl(a, i, s) > -1
                );
              }
              var Si = ke(function (a, i, s) {
                  var y = -1,
                    b = typeof i == 'function',
                    R = Mn(a) ? Q(a.length) : [];
                  return (
                    Na(a, function (E) {
                      R[++y] = b ? Un(i, E, s) : ga(E, i, s);
                    }),
                    R
                  );
                }),
                u1 = cf(function (a, i, s) {
                  Yn(a, s, i);
                });
              function $u(a, i) {
                var s = qe(a) ? Ct : Pc;
                return s(a, we(i, 3));
              }
              function c1(a, i, s, y) {
                return a == null
                  ? []
                  : (qe(i) || (i = i == null ? [] : [i]),
                    (s = y ? u : s),
                    qe(s) || (s = s == null ? [] : [s]),
                    nf(a, i, s));
              }
              var f1 = cf(
                function (a, i, s) {
                  a[s ? 0 : 1].push(i);
                },
                function () {
                  return [[], []];
                },
              );
              function wf(a, i, s) {
                var y = qe(a) ? wo : Oo,
                  b = arguments.length < 3;
                return y(a, we(i, 4), s, b, Na);
              }
              function Us(a, i, s) {
                var y = qe(a) ? th : Oo,
                  b = arguments.length < 3;
                return y(a, we(i, 4), s, b, Zc);
              }
              function lg(a, i) {
                var s = qe(a) ? Ar : Vc;
                return s(a, Of(we(i, 3)));
              }
              function ig(a) {
                var i = qe(a) ? su : Zo;
                return i(a);
              }
              function ug(a, i, s) {
                (s ? fn(a, i, s) : i === u) ? (i = 1) : (i = Ee(i));
                var y = qe(a) ? Kc : Vo;
                return y(a, i);
              }
              function o1(a) {
                var i = qe(a) ? bh : Ah;
                return i(a);
              }
              function s1(a) {
                if (a == null) return 0;
                if (Mn(a)) return Pu(a) ? Fl(a) : a.length;
                var i = an(a);
                return i == Wt || i == qn ? a.size : Lr(a).length;
              }
              function xi(a, i, s) {
                var y = qe(a) ? To : Rh;
                return (s && fn(a, i, s) && (i = u), y(a, we(i, 3)));
              }
              var Tf = ke(function (a, i) {
                  if (a == null) return [];
                  var s = i.length;
                  return (
                    s > 1 && fn(a, i[0], i[1])
                      ? (i = [])
                      : s > 2 && fn(i[0], i[1], i[2]) && (i = [i[0]]),
                    nf(a, Xt(i, 1), [])
                  );
                }),
                Yu =
                  Gc ||
                  function () {
                    return Yt.Date.now();
                  };
              function h1(a, i) {
                if (typeof i != 'function') throw new Gn(v);
                return (
                  (a = Ee(a)),
                  function () {
                    if (--a < 1) return i.apply(this, arguments);
                  }
                );
              }
              function ks(a, i, s) {
                return (
                  (i = s ? u : i),
                  (i = a && i == null ? a.length : i),
                  yn(a, V, u, u, u, u, i)
                );
              }
              function Ns(a, i) {
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
              var Ef = ke(function (a, i, s) {
                  var y = $;
                  if (s.length) {
                    var b = er(s, Dt(Ef));
                    y |= oe;
                  }
                  return yn(a, y, i, s, b);
                }),
                Gs = ke(function (a, i, s) {
                  var y = $ | J;
                  if (s.length) {
                    var b = er(s, Dt(Gs));
                    y |= oe;
                  }
                  return yn(i, y, a, s, b);
                });
              function Xu(a, i, s) {
                i = s ? u : i;
                var y = yn(a, F, u, u, u, u, u, i);
                return ((y.placeholder = Xu.placeholder), y);
              }
              function Fs(a, i, s) {
                i = s ? u : i;
                var y = yn(a, I, u, u, u, u, u, i);
                return ((y.placeholder = Fs.placeholder), y);
              }
              function $s(a, i, s) {
                var y,
                  b,
                  R,
                  E,
                  j,
                  H,
                  le = 0,
                  ie = !1,
                  ue = !1,
                  de = !0;
                if (typeof a != 'function') throw new Gn(v);
                ((i = ea(i) || 0),
                  wt(s) &&
                    ((ie = !!s.leading),
                    (ue = 'maxWait' in s),
                    (R = ue ? zt(ea(s.maxWait) || 0, i) : R),
                    (de = 'trailing' in s ? !!s.trailing : de)));
                function Se(Qt) {
                  var pr = y,
                    zl = b;
                  return ((y = b = u), (le = Qt), (E = a.apply(zl, pr)), E);
                }
                function Oe(Qt) {
                  return ((le = Qt), (j = Lu(We, i)), ie ? Se(Qt) : E);
                }
                function $e(Qt) {
                  var pr = Qt - H,
                    zl = Qt - le,
                    Bp = i - pr;
                  return ue ? Ut(Bp, R - zl) : Bp;
                }
                function Me(Qt) {
                  var pr = Qt - H,
                    zl = Qt - le;
                  return H === u || pr >= i || pr < 0 || (ue && zl >= R);
                }
                function We() {
                  var Qt = Yu();
                  if (Me(Qt)) return Pe(Qt);
                  j = Lu(We, $e(Qt));
                }
                function Pe(Qt) {
                  return ((j = u), de && y ? Se(Qt) : ((y = b = u), E));
                }
                function Da() {
                  (j !== u && bu(j), (le = 0), (y = H = b = j = u));
                }
                function ta() {
                  return j === u ? E : Pe(Yu());
                }
                function qa() {
                  var Qt = Yu(),
                    pr = Me(Qt);
                  if (((y = arguments), (b = this), (H = Qt), pr)) {
                    if (j === u) return Oe(H);
                    if (ue) return (bu(j), (j = Lu(We, i)), Se(H));
                  }
                  return (j === u && (j = Lu(We, i)), E);
                }
                return ((qa.cancel = Da), (qa.flush = ta), qa);
              }
              var st = ke(function (a, i) {
                  return $o(a, 1, i);
                }),
                Ys = ke(function (a, i, s) {
                  return $o(a, ea(i) || 0, s);
                });
              function cg(a) {
                return yn(a, Ae);
              }
              function Ku(a, i) {
                if (
                  typeof a != 'function' ||
                  (i != null && typeof i != 'function')
                )
                  throw new Gn(v);
                var s = function () {
                  var y = arguments,
                    b = i ? i.apply(this, y) : y[0],
                    R = s.cache;
                  if (R.has(b)) return R.get(b);
                  var E = a.apply(this, y);
                  return ((s.cache = R.set(b, E) || R), E);
                };
                return ((s.cache = new (Ku.Cache || xa)()), s);
              }
              Ku.Cache = xa;
              function Of(a) {
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
              function fg(a) {
                return Ns(2, a);
              }
              var og = Th(function (a, i) {
                  i =
                    i.length == 1 && qe(i[0])
                      ? Ct(i[0], Nn(we()))
                      : Ct(Xt(i, 1), Nn(we()));
                  var s = i.length;
                  return ke(function (y) {
                    for (var b = -1, R = Ut(y.length, s); ++b < R; )
                      y[b] = i[b].call(this, y[b]);
                    return Un(a, this, y);
                  });
                }),
                Ci = ke(function (a, i) {
                  var s = er(i, Dt(Ci));
                  return yn(a, oe, u, i, s);
                }),
                El = ke(function (a, i) {
                  var s = er(i, Dt(El));
                  return yn(a, re, u, i, s);
                }),
                Xs = Fa(function (a, i) {
                  return yn(a, ce, u, u, u, i);
                });
              function Mf(a, i) {
                if (typeof a != 'function') throw new Gn(v);
                return ((i = i === u ? i : Ee(i)), ke(a, i));
              }
              function Ks(a, i) {
                if (typeof a != 'function') throw new Gn(v);
                return (
                  (i = i == null ? 0 : zt(Ee(i), 0)),
                  ke(function (s) {
                    var y = s[i],
                      b = Ea(s, 0, i);
                    return (y && Rr(b, y), Un(a, this, b));
                  })
                );
              }
              function Yr(a, i, s) {
                var y = !0,
                  b = !0;
                if (typeof a != 'function') throw new Gn(v);
                return (
                  wt(s) &&
                    ((y = 'leading' in s ? !!s.leading : y),
                    (b = 'trailing' in s ? !!s.trailing : b)),
                  $s(a, i, { leading: y, maxWait: i, trailing: b })
                );
              }
              function Xa(a) {
                return ks(a, 1);
              }
              function Qu(a, i) {
                return Ci(lf(i), a);
              }
              function sg() {
                if (!arguments.length) return [];
                var a = arguments[0];
                return qe(a) ? a : [a];
              }
              function d1(a) {
                return gn(a, U);
              }
              function g1(a, i) {
                return ((i = typeof i == 'function' ? i : u), gn(a, U, i));
              }
              function v1(a) {
                return gn(a, w | U);
              }
              function y1(a, i) {
                return ((i = typeof i == 'function' ? i : u), gn(a, w | U, i));
              }
              function hg(a, i) {
                return i == null || jr(a, i, It(i));
              }
              function Wn(a, i) {
                return a === i || (a !== a && i !== i);
              }
              var m1 = Au(du),
                p1 = Au(function (a, i) {
                  return a >= i;
                }),
                Ol = Cn(
                  (function () {
                    return arguments;
                  })(),
                )
                  ? Cn
                  : function (a) {
                      return (
                        qt(a) && rt.call(a, 'callee') && !lu.call(a, 'callee')
                      );
                    },
                qe = Q.isArray,
                Qs = V0 ? Nn(V0) : Lt;
              function Mn(a) {
                return a != null && Df(a.length) && !Pn(a);
              }
              function Ht(a) {
                return qt(a) && Mn(a);
              }
              function Zu(a) {
                return a === !0 || a === !1 || (qt(a) && nn(a) == $t);
              }
              var Xr = vh || X,
                b1 = I0 ? Nn(I0) : Jc;
              function Ke(a) {
                return qt(a) && a.nodeType === 1 && !Iu(a);
              }
              function Zs(a) {
                if (a == null) return !0;
                if (
                  Mn(a) &&
                  (qe(a) ||
                    typeof a == 'string' ||
                    typeof a.splice == 'function' ||
                    Xr(a) ||
                    Kr(a) ||
                    Ol(a))
                )
                  return !a.length;
                var i = an(a);
                if (i == Wt || i == qn) return !a.size;
                if (vi(a)) return !Lr(a).length;
                for (var s in a) if (rt.call(a, s)) return !1;
                return !0;
              }
              function zf(a, i) {
                return Kn(a, i);
              }
              function Vs(a, i, s) {
                s = typeof s == 'function' ? s : u;
                var y = s ? s(a, i) : u;
                return y === u ? Kn(a, i, u, s) : !!y;
              }
              function jf(a) {
                if (!qt(a)) return !1;
                var i = nn(a);
                return (
                  i == tl ||
                  i == Ui ||
                  (typeof a.message == 'string' &&
                    typeof a.name == 'string' &&
                    !Iu(a))
                );
              }
              function Is(a) {
                return typeof a == 'number' && Fn(a);
              }
              function Pn(a) {
                if (!wt(a)) return !1;
                var i = nn(a);
                return i == Ll || i == lo || i == it || i == co;
              }
              function Vu(a) {
                return typeof a == 'number' && a == Ee(a);
              }
              function Df(a) {
                return typeof a == 'number' && a > -1 && a % 1 == 0 && a <= _e;
              }
              function wt(a) {
                var i = typeof a;
                return a != null && (i == 'object' || i == 'function');
              }
              function qt(a) {
                return a != null && typeof a == 'object';
              }
              var _1 = wc ? Nn(wc) : gt;
              function S1(a, i) {
                return a === i || jt(a, i, df(i));
              }
              function x1(a, i, s) {
                return (
                  (s = typeof s == 'function' ? s : u),
                  jt(a, i, df(i), s)
                );
              }
              function vt(a) {
                return Ws(a) && a != +a;
              }
              function Js(a) {
                if (bs(a)) throw new De(g);
                return vu(a);
              }
              function rn(a) {
                return a === null;
              }
              function dg(a) {
                return a == null;
              }
              function Ws(a) {
                return typeof a == 'number' || (qt(a) && nn(a) == nl);
              }
              function Iu(a) {
                if (!qt(a) || nn(a) != Za) return !1;
                var i = Ha(a);
                if (i === null) return !0;
                var s = rt.call(i, 'constructor') && i.constructor;
                return (
                  typeof s == 'function' && s instanceof s && Hc.call(s) == kc
                );
              }
              var Ju = J0 ? Nn(J0) : ii;
              function Ps(a) {
                return Vu(a) && a >= -_e && a <= _e;
              }
              var Wu = W0 ? Nn(W0) : Cl;
              function Pu(a) {
                return typeof a == 'string' || (!qe(a) && qt(a) && nn(a) == ki);
              }
              function zn(a) {
                return typeof a == 'symbol' || (qt(a) && nn(a) == uc);
              }
              var Kr = P0 ? Nn(P0) : Wc;
              function e0(a) {
                return a === u;
              }
              function gg(a) {
                return qt(a) && an(a) == Ni;
              }
              function C1(a) {
                return qt(a) && nn(a) == j0;
              }
              var vg = Au(Rt),
                A1 = Au(function (a, i) {
                  return a <= i;
                });
              function R1(a) {
                if (!a) return [];
                if (Mn(a)) return Pu(a) ? Tt(a) : vn(a);
                if (en && a[en]) return qo(a[en]());
                var i = an(a),
                  s = i == Wt ? Dc : i == qn ? qc : Oi;
                return s(a);
              }
              function yr(a) {
                if (!a) return a === 0 ? a : 0;
                if (((a = ea(a)), a === he || a === -he)) {
                  var i = a < 0 ? -1 : 1;
                  return i * Be;
                }
                return a === a ? a : 0;
              }
              function Ee(a) {
                var i = yr(a),
                  s = i % 1;
                return i === i ? (s ? i - s : i) : 0;
              }
              function t0(a) {
                return a ? Aa(Ee(a), 0, D) : 0;
              }
              function ea(a) {
                if (typeof a == 'number') return a;
                if (zn(a)) return Ze;
                if (wt(a)) {
                  var i = typeof a.valueOf == 'function' ? a.valueOf() : a;
                  a = wt(i) ? i + '' : i;
                }
                if (typeof a != 'string') return a === 0 ? a : +a;
                a = hl(a);
                var s = Md.test(a);
                return s || Xi.test(a)
                  ? Ac(a.slice(2), s ? 2 : 8)
                  : Od.test(a)
                    ? Ze
                    : +a;
              }
              function qf(a) {
                return va(a, jn(a));
              }
              function yg(a) {
                return a ? Aa(Ee(a), -_e, _e) : a === 0 ? a : 0;
              }
              function ct(a) {
                return a == null ? '' : An(a);
              }
              var w1 = Br(function (a, i) {
                  if (vi(i) || Mn(i)) {
                    va(i, It(i), a);
                    return;
                  }
                  for (var s in i) rt.call(i, s) && Ca(a, s, i[s]);
                }),
                Lf = Br(function (a, i) {
                  va(i, jn(i), a);
                }),
                Ai = Br(function (a, i, s, y) {
                  va(i, jn(i), a, y);
                }),
                mg = Br(function (a, i, s, y) {
                  va(i, It(i), a, y);
                }),
                ya = Fa(ri);
              function n0(a, i) {
                var s = Or(a);
                return i == null ? s : Fo(s, i);
              }
              var T1 = ke(function (a, i) {
                  a = ft(a);
                  var s = -1,
                    y = i.length,
                    b = y > 2 ? i[2] : u;
                  for (b && fn(i[0], i[1], b) && (y = 1); ++s < y; )
                    for (
                      var R = i[s], E = jn(R), j = -1, H = E.length;
                      ++j < H;
                    ) {
                      var le = E[j],
                        ie = a[le];
                      (ie === u || (Wn(ie, Xl[le]) && !rt.call(a, le))) &&
                        (a[le] = R[le]);
                    }
                  return a;
                }),
                E1 = ke(function (a) {
                  return (a.push(u, ds), Un(wi, u, a));
                });
              function O1(a, i) {
                return nh(a, we(i, 3), wa);
              }
              function ec(a, i) {
                return nh(a, we(i, 3), Ic);
              }
              function ma(a, i) {
                return a == null ? a : xl(a, we(i, 3), jn);
              }
              function M1(a, i) {
                return a == null ? a : li(a, we(i, 3), jn);
              }
              function Bf(a, i) {
                return a && wa(a, we(i, 3));
              }
              function mr(a, i) {
                return a && Ic(a, we(i, 3));
              }
              function pg(a) {
                return a == null ? [] : ur(a, It(a));
              }
              function bg(a) {
                return a == null ? [] : ur(a, jn(a));
              }
              function Qr(a, i, s) {
                var y = a == null ? u : Ga(a, i);
                return y === u ? s : y;
              }
              function z1(a, i) {
                return a != null && yf(a, i, Xn);
              }
              function a0(a, i) {
                return a != null && yf(a, i, da);
              }
              var _g = xu(function (a, i, s) {
                  (i != null &&
                    typeof i.toString != 'function' &&
                    (i = Sn.call(i)),
                    (a[i] = s));
                }, zi(mn)),
                Sg = xu(function (a, i, s) {
                  (i != null &&
                    typeof i.toString != 'function' &&
                    (i = Sn.call(i)),
                    rt.call(a, i) ? a[i].push(s) : (a[i] = [s]));
                }, we),
                xg = ke(ga);
              function It(a) {
                return Mn(a) ? Xc(a) : Lr(a);
              }
              function jn(a) {
                return Mn(a) ? Xc(a, !0) : Vd(a);
              }
              function Cg(a, i) {
                var s = {};
                return (
                  (i = we(i, 3)),
                  wa(a, function (y, b, R) {
                    Yn(s, i(y, b, R), y);
                  }),
                  s
                );
              }
              function j1(a, i) {
                var s = {};
                return (
                  (i = we(i, 3)),
                  wa(a, function (y, b, R) {
                    Yn(s, b, i(y, b, R));
                  }),
                  s
                );
              }
              var Ri = Br(function (a, i, s) {
                  yu(a, i, s);
                }),
                wi = Br(function (a, i, s, y) {
                  yu(a, i, s, y);
                }),
                D1 = Fa(function (a, i) {
                  var s = {};
                  if (a == null) return s;
                  var y = !1;
                  ((i = Ct(i, function (R) {
                    return ((R = Zn(R, a)), y || (y = R.length > 1), R);
                  })),
                    va(a, vs(a), s),
                    y && (s = gn(s, w | z | U, Lh)));
                  for (var b = i.length; b--; ) mu(s, i[b]);
                  return s;
                });
              function Ag(a, i) {
                return Ei(a, Of(we(i)));
              }
              var Ti = Fa(function (a, i) {
                return a == null ? {} : Ko(a, i);
              });
              function Ei(a, i) {
                if (a == null) return {};
                var s = Ct(vs(a), function (y) {
                  return [y];
                });
                return (
                  (i = we(i)),
                  cn(a, s, function (y, b) {
                    return i(y, b[0]);
                  })
                );
              }
              function q1(a, i, s) {
                i = Zn(i, a);
                var y = -1,
                  b = i.length;
                for (b || ((b = 1), (a = u)); ++y < b; ) {
                  var R = a == null ? u : a[Rn(i[y])];
                  (R === u && ((y = b), (R = s)), (a = Pn(R) ? R.call(a) : R));
                }
                return a;
              }
              function Hf(a, i, s) {
                return a == null ? a : si(a, i, s);
              }
              function r0(a, i, s, y) {
                return (
                  (y = typeof y == 'function' ? y : u),
                  a == null ? a : si(a, i, s, y)
                );
              }
              var Uf = ss(It),
                tc = ss(jn);
              function L1(a, i, s) {
                var y = qe(a),
                  b = y || Xr(a) || Kr(a);
                if (((i = we(i, 4)), s == null)) {
                  var R = a && a.constructor;
                  b
                    ? (s = y ? new R() : [])
                    : wt(a)
                      ? (s = Pn(R) ? Or(Ha(a)) : {})
                      : (s = {});
                }
                return (
                  (b ? kn : wa)(a, function (E, j, H) {
                    return i(s, E, j, H);
                  }),
                  s
                );
              }
              function B1(a, i) {
                return a == null ? !0 : mu(a, i);
              }
              function Rg(a, i, s) {
                return a == null ? a : Wo(a, i, lf(s));
              }
              function H1(a, i, s, y) {
                return (
                  (y = typeof y == 'function' ? y : u),
                  a == null ? a : Wo(a, i, lf(s), y)
                );
              }
              function Oi(a) {
                return a == null ? [] : Mo(a, It(a));
              }
              function l0(a) {
                return a == null ? [] : Mo(a, jn(a));
              }
              function wg(a, i, s) {
                return (
                  s === u && ((s = i), (i = u)),
                  s !== u && ((s = ea(s)), (s = s === s ? s : 0)),
                  i !== u && ((i = ea(i)), (i = i === i ? i : 0)),
                  Aa(ea(a), i, s)
                );
              }
              function kf(a, i, s) {
                return (
                  (i = yr(i)),
                  s === u ? ((s = i), (i = 0)) : (s = yr(s)),
                  (a = ea(a)),
                  qr(a, i, s)
                );
              }
              function Nf(a, i, s) {
                if (
                  (s && typeof s != 'boolean' && fn(a, i, s) && (i = s = u),
                  s === u &&
                    (typeof i == 'boolean'
                      ? ((s = i), (i = u))
                      : typeof a == 'boolean' && ((s = a), (a = u))),
                  a === u && i === u
                    ? ((a = 0), (i = 1))
                    : ((a = yr(a)), i === u ? ((i = a), (a = 0)) : (i = yr(i))),
                  a > i)
                ) {
                  var y = a;
                  ((a = i), (i = y));
                }
                if (s || a % 1 || i % 1) {
                  var b = ar();
                  return Ut(
                    a + b * (i - a + ol('1e-' + ((b + '').length - 1))),
                    i,
                  );
                }
                return oi(a, i);
              }
              var Gf = Al(function (a, i, s) {
                return ((i = i.toLowerCase()), a + (s ? U1(i) : i));
              });
              function U1(a) {
                return Ml(ct(a).toLowerCase());
              }
              function Mi(a) {
                return ((a = ct(a)), a && a.replace(Ul, au).replace(Q0, ''));
              }
              function Tg(a, i, s) {
                ((a = ct(a)), (i = An(i)));
                var y = a.length;
                s = s === u ? y : Aa(Ee(s), 0, y);
                var b = s;
                return ((s -= i.length), s >= 0 && a.slice(s, b) == i);
              }
              function k1(a) {
                return ((a = ct(a)), a && oc.test(a) ? a.replace(Fi, Gd) : a);
              }
              function N1(a) {
                return (
                  (a = ct(a)),
                  a && D0.test(a) ? a.replace(sc, '\\$&') : a
                );
              }
              var G1 = Al(function (a, i, s) {
                  return a + (s ? '-' : '') + i.toLowerCase();
                }),
                F1 = Al(function (a, i, s) {
                  return a + (s ? ' ' : '') + i.toLowerCase();
                }),
                i0 = fs('toLowerCase');
              function $1(a, i, s) {
                ((a = ct(a)), (i = Ee(i)));
                var y = i ? Fl(a) : 0;
                if (!i || y >= i) return a;
                var b = (i - y) / 2;
                return Hr(iu(b), s) + a + Hr(Zl(b), s);
              }
              function Y1(a, i, s) {
                ((a = ct(a)), (i = Ee(i)));
                var y = i ? Fl(a) : 0;
                return i && y < i ? a + Hr(i - y, s) : a;
              }
              function Ff(a, i, s) {
                ((a = ct(a)), (i = Ee(i)));
                var y = i ? Fl(a) : 0;
                return i && y < i ? Hr(i - y, s) + a : a;
              }
              function Eg(a, i, s) {
                return (
                  s || i == null ? (i = 0) : i && (i = +i),
                  ua(ct(a).replace(hc, ''), i || 0)
                );
              }
              function Og(a, i, s) {
                return (
                  (s ? fn(a, i, s) : i === u) ? (i = 1) : (i = Ee(i)),
                  Ta(ct(a), i)
                );
              }
              function u0() {
                var a = arguments,
                  i = ct(a[0]);
                return a.length < 3 ? i : i.replace(a[1], a[2]);
              }
              var c0 = Al(function (a, i, s) {
                return a + (s ? '_' : '') + i.toLowerCase();
              });
              function $f(a, i, s) {
                return (
                  s && typeof s != 'number' && fn(a, i, s) && (i = s = u),
                  (s = s === u ? D : s >>> 0),
                  s
                    ? ((a = ct(a)),
                      a &&
                      (typeof i == 'string' || (i != null && !Ju(i))) &&
                      ((i = An(i)), !i && dl(a))
                        ? Ea(Tt(a), 0, s)
                        : a.split(i, s))
                    : []
                );
              }
              var f0 = Al(function (a, i, s) {
                return a + (s ? ' ' : '') + Ml(i);
              });
              function X1(a, i, s) {
                return (
                  (a = ct(a)),
                  (s = s == null ? 0 : Aa(Ee(s), 0, a.length)),
                  (i = An(i)),
                  a.slice(s, s + i.length) == i
                );
              }
              function o0(a, i, s) {
                var y = A.templateSettings;
                (s && fn(a, i, s) && (i = u),
                  (a = ct(a)),
                  (i = Ai({}, i, y, hs)));
                var b = Ai({}, i.imports, y.imports, hs),
                  R = It(b),
                  E = Mo(b, R),
                  j,
                  H,
                  le = 0,
                  ie = i.interpolate || Ia,
                  ue = "__p += '",
                  de = Lc(
                    (i.escape || Ia).source +
                      '|' +
                      ie.source +
                      '|' +
                      (ie === go ? Hl : Ia).source +
                      '|' +
                      (i.evaluate || Ia).source +
                      '|$',
                    'g',
                  ),
                  Se =
                    '//# sourceURL=' +
                    (rt.call(i, 'sourceURL')
                      ? (i.sourceURL + '').replace(/\s/g, ' ')
                      : 'lodash.templateSources[' + ++Ro + ']') +
                    `
`;
                (a.replace(de, function (Me, We, Pe, Da, ta, qa) {
                  return (
                    Pe || (Pe = Da),
                    (ue += a.slice(le, qa).replace(Ki, jc)),
                    We &&
                      ((j = !0),
                      (ue +=
                        `' +
__e(` +
                        We +
                        `) +
'`)),
                    ta &&
                      ((H = !0),
                      (ue +=
                        `';
` +
                        ta +
                        `;
__p += '`)),
                    Pe &&
                      (ue +=
                        `' +
((__t = (` +
                        Pe +
                        `)) == null ? '' : __t) +
'`),
                    (le = qa + Me.length),
                    Me
                  );
                }),
                  (ue += `';
`));
                var Oe = rt.call(i, 'variable') && i.variable;
                if (!Oe)
                  ue =
                    `with (obj) {
` +
                    ue +
                    `
}
`;
                else if (Pt.test(Oe)) throw new De(p);
                ((ue = (H ? ue.replace(Rd, '') : ue)
                  .replace(wd, '$1')
                  .replace(fc, '$1;')),
                  (ue =
                    'function(' +
                    (Oe || 'obj') +
                    `) {
` +
                    (Oe
                      ? ''
                      : `obj || (obj = {});
`) +
                    "var __t, __p = ''" +
                    (j ? ', __e = _.escape' : '') +
                    (H
                      ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                      : `;
`) +
                    ue +
                    `return __p
}`));
                var $e = s0(function () {
                  return Ye(R, Se + 'return ' + ue).apply(u, E);
                });
                if ((($e.source = ue), jf($e))) throw $e;
                return $e;
              }
              function Zr(a) {
                return ct(a).toLowerCase();
              }
              function Vr(a) {
                return ct(a).toUpperCase();
              }
              function Ir(a, i, s) {
                if (((a = ct(a)), a && (s || i === u))) return hl(a);
                if (!a || !(i = An(i))) return a;
                var y = Tt(a),
                  b = Tt(i),
                  R = zo(y, b),
                  E = jo(y, b) + 1;
                return Ea(y, R, E).join('');
              }
              function nc(a, i, s) {
                if (((a = ct(a)), a && (s || i === u)))
                  return a.slice(0, $l(a) + 1);
                if (!a || !(i = An(i))) return a;
                var y = Tt(a),
                  b = jo(y, Tt(i)) + 1;
                return Ea(y, 0, b).join('');
              }
              function ac(a, i, s) {
                if (((a = ct(a)), a && (s || i === u)))
                  return a.replace(hc, '');
                if (!a || !(i = An(i))) return a;
                var y = Tt(a),
                  b = zo(y, Tt(i));
                return Ea(y, b).join('');
              }
              function Jr(a, i) {
                var s = Re,
                  y = se;
                if (wt(i)) {
                  var b = 'separator' in i ? i.separator : b;
                  ((s = 'length' in i ? Ee(i.length) : s),
                    (y = 'omission' in i ? An(i.omission) : y));
                }
                a = ct(a);
                var R = a.length;
                if (dl(a)) {
                  var E = Tt(a);
                  R = E.length;
                }
                if (s >= R) return a;
                var j = s - Fl(y);
                if (j < 1) return y;
                var H = E ? Ea(E, 0, j).join('') : a.slice(0, j);
                if (b === u) return H + y;
                if ((E && (j += H.length - j), Ju(b))) {
                  if (a.slice(j).search(b)) {
                    var le,
                      ie = H;
                    for (
                      b.global || (b = Lc(b.source, ct(dc.exec(b)) + 'g')),
                        b.lastIndex = 0;
                      (le = b.exec(ie));
                    )
                      var ue = le.index;
                    H = H.slice(0, ue === u ? j : ue);
                  }
                } else if (a.indexOf(An(b), j) != j) {
                  var de = H.lastIndexOf(b);
                  de > -1 && (H = H.slice(0, de));
                }
                return H + y;
              }
              function Mg(a) {
                return ((a = ct(a)), a && ll.test(a) ? a.replace(Gi, uh) : a);
              }
              var K1 = Al(function (a, i, s) {
                  return a + (s ? ' ' : '') + i.toUpperCase();
                }),
                Ml = fs('toUpperCase');
              function Q1(a, i, s) {
                return (
                  (a = ct(a)),
                  (i = s ? u : i),
                  i === u ? (Do(a) ? oh(a) : kd(a)) : a.match(i) || []
                );
              }
              var s0 = ke(function (a, i) {
                  try {
                    return Un(a, u, i);
                  } catch (s) {
                    return jf(s) ? s : new De(s);
                  }
                }),
                Yf = Fa(function (a, i) {
                  return (
                    kn(i, function (s) {
                      ((s = Rn(s)), Yn(a, s, Ef(a[s], a)));
                    }),
                    a
                  );
                });
              function Z1(a) {
                var i = a == null ? 0 : a.length,
                  s = we();
                return (
                  (a = i
                    ? Ct(a, function (y) {
                        if (typeof y[1] != 'function') throw new Gn(v);
                        return [s(y[0]), y[1]];
                      })
                    : []),
                  ke(function (y) {
                    for (var b = -1; ++b < i; ) {
                      var R = a[b];
                      if (Un(R[0], this, y)) return Un(R[1], this, y);
                    }
                  })
                );
              }
              function zg(a) {
                return Sh(gn(a, w));
              }
              function zi(a) {
                return function () {
                  return a;
                };
              }
              function Xf(a, i) {
                return a == null || a !== a ? i : a;
              }
              var V1 = di(),
                ji = di(!0);
              function mn(a) {
                return a;
              }
              function rc(a) {
                return ui(typeof a == 'function' ? a : gn(a, w));
              }
              function Kf(a) {
                return ef(gn(a, w));
              }
              function I1(a, i) {
                return Xo(a, gn(i, w));
              }
              var jg = ke(function (a, i) {
                  return function (s) {
                    return ga(s, a, i);
                  };
                }),
                Qf = ke(function (a, i) {
                  return function (s) {
                    return ga(a, s, i);
                  };
                });
              function e(a, i, s) {
                var y = It(i),
                  b = ur(i, y);
                s == null &&
                  !(wt(i) && (b.length || !y.length)) &&
                  ((s = i), (i = a), (a = this), (b = ur(i, It(i))));
                var R = !(wt(s) && 'chain' in s) || !!s.chain,
                  E = Pn(a);
                return (
                  kn(b, function (j) {
                    var H = i[j];
                    ((a[j] = H),
                      E &&
                        (a.prototype[j] = function () {
                          var le = this.__chain__;
                          if (R || le) {
                            var ie = a(this.__wrapped__),
                              ue = (ie.__actions__ = vn(this.__actions__));
                            return (
                              ue.push({ func: H, args: arguments, thisArg: a }),
                              (ie.__chain__ = le),
                              ie
                            );
                          }
                          return H.apply(a, Rr([this.value()], arguments));
                        }));
                  }),
                  a
                );
              }
              function t() {
                return (Yt._ === this && (Yt._ = ra), this);
              }
              function n() {}
              function l(a) {
                return (
                  (a = Ee(a)),
                  ke(function (i) {
                    return tf(i, a);
                  })
                );
              }
              var f = ff(Ct),
                h = ff(eh),
                m = ff(To);
              function C(a) {
                return zu(a) ? sl(Rn(a)) : Bt(a);
              }
              function O(a) {
                return function (i) {
                  return a == null ? u : Ga(a, i);
                };
              }
              var G = of(),
                ee = of(!0);
              function ae() {
                return [];
              }
              function X() {
                return !1;
              }
              function Z() {
                return {};
              }
              function pe() {
                return '';
              }
              function Te() {
                return !0;
              }
              function yt(a, i) {
                if (((a = Ee(a)), a < 1 || a > _e)) return [];
                var s = D,
                  y = Ut(a, D);
                ((i = we(i)), (a -= D));
                for (var b = zc(y, i); ++s < a; ) i(s);
                return b;
              }
              function B(a) {
                return qe(a) ? Ct(a, Rn) : zn(a) ? [a] : vn(xs(ct(a)));
              }
              function q(a) {
                var i = ++hh;
                return ct(a) + i;
              }
              var k = Cu(function (a, i) {
                  return a + i;
                }, 0),
                ne = Ru('ceil'),
                Ce = Cu(function (a, i) {
                  return a / i;
                }, 1),
                nt = Ru('floor');
              function be(a) {
                return a && a.length ? Ra(a, mn, du) : u;
              }
              function Ge(a, i) {
                return a && a.length ? Ra(a, we(i, 2), du) : u;
              }
              function Ie(a) {
                return Oc(a, mn);
              }
              function at(a, i) {
                return Oc(a, we(i, 2));
              }
              function Wr(a) {
                return a && a.length ? Ra(a, mn, Rt) : u;
              }
              function Dg(a, i) {
                return a && a.length ? Ra(a, we(i, 2), Rt) : u;
              }
              var N5 = Cu(function (a, i) {
                  return a * i;
                }, 1),
                G5 = Ru('round'),
                F5 = Cu(function (a, i) {
                  return a - i;
                }, 0);
              function $5(a) {
                return a && a.length ? Mc(a, mn) : 0;
              }
              function Y5(a, i) {
                return a && a.length ? Mc(a, we(i, 2)) : 0;
              }
              return (
                (A.after = h1),
                (A.ary = ks),
                (A.assign = w1),
                (A.assignIn = Lf),
                (A.assignInWith = Ai),
                (A.assignWith = mg),
                (A.at = ya),
                (A.before = Ns),
                (A.bind = Ef),
                (A.bindAll = Yf),
                (A.bindKey = Gs),
                (A.castArray = sg),
                (A.chain = Gu),
                (A.chunk = $h),
                (A.compact = Cs),
                (A.concat = As),
                (A.cond = Z1),
                (A.conforms = zg),
                (A.constant = zi),
                (A.countBy = n1),
                (A.create = n0),
                (A.curry = Xu),
                (A.curryRight = Fs),
                (A.debounce = $s),
                (A.defaults = T1),
                (A.defaultsDeep = E1),
                (A.defer = st),
                (A.delay = Ys),
                (A.difference = Sf),
                (A.differenceBy = Yh),
                (A.differenceWith = sr),
                (A.drop = Gt),
                (A.dropRight = Rs),
                (A.dropRightWhile = Xh),
                (A.dropWhile = Vt),
                (A.fill = tg),
                (A.filter = Bs),
                (A.flatMap = On),
                (A.flatMapDeep = r1),
                (A.flatMapDepth = l1),
                (A.flatten = St),
                (A.flattenDeep = wn),
                (A.flattenDepth = hr),
                (A.flip = cg),
                (A.flow = V1),
                (A.flowRight = ji),
                (A.fromPairs = Kh),
                (A.functions = pg),
                (A.functionsIn = bg),
                (A.groupBy = Rf),
                (A.initial = ng),
                (A.intersection = xf),
                (A.intersectionBy = Tn),
                (A.intersectionWith = Ma),
                (A.invert = _g),
                (A.invertBy = Sg),
                (A.invokeMap = Si),
                (A.iteratee = rc),
                (A.keyBy = u1),
                (A.keys = It),
                (A.keysIn = jn),
                (A.map = $u),
                (A.mapKeys = Cg),
                (A.mapValues = j1),
                (A.matches = Kf),
                (A.matchesProperty = I1),
                (A.memoize = Ku),
                (A.merge = Ri),
                (A.mergeWith = wi),
                (A.method = jg),
                (A.methodOf = Qf),
                (A.mixin = e),
                (A.negate = Of),
                (A.nthArg = l),
                (A.omit = D1),
                (A.omitBy = Ag),
                (A.once = fg),
                (A.orderBy = c1),
                (A.over = f),
                (A.overArgs = og),
                (A.overEvery = h),
                (A.overSome = m),
                (A.partial = Ci),
                (A.partialRight = El),
                (A.partition = f1),
                (A.pick = Ti),
                (A.pickBy = Ei),
                (A.property = C),
                (A.propertyOf = O),
                (A.pull = Rl),
                (A.pullAll = Ya),
                (A.pullAllBy = Os),
                (A.pullAllWith = Ms),
                (A.pullAt = za),
                (A.range = G),
                (A.rangeRight = ee),
                (A.rearg = Xs),
                (A.reject = lg),
                (A.remove = Ih),
                (A.rest = Mf),
                (A.reverse = kr),
                (A.sampleSize = ug),
                (A.set = Hf),
                (A.setWith = r0),
                (A.shuffle = o1),
                (A.slice = Hu),
                (A.sortBy = Tf),
                (A.sortedUniq = Cf),
                (A.sortedUniqBy = e1),
                (A.split = $f),
                (A.spread = Ks),
                (A.tail = ag),
                (A.take = rg),
                (A.takeRight = lt),
                (A.takeRightWhile = bt),
                (A.takeWhile = Xe),
                (A.tap = t1),
                (A.throttle = Yr),
                (A.thru = Tl),
                (A.toArray = R1),
                (A.toPairs = Uf),
                (A.toPairsIn = tc),
                (A.toPath = B),
                (A.toPlainObject = qf),
                (A.transform = L1),
                (A.unary = Xa),
                (A.union = Ve),
                (A.unionBy = ot),
                (A.unionWith = Vn),
                (A.uniq = Nr),
                (A.uniqBy = pi),
                (A.uniqWith = zs),
                (A.unset = B1),
                (A.unzip = ja),
                (A.unzipWith = Ot),
                (A.update = Rg),
                (A.updateWith = H1),
                (A.values = Oi),
                (A.valuesIn = l0),
                (A.without = Gr),
                (A.words = Q1),
                (A.wrap = Qu),
                (A.xor = wl),
                (A.xorBy = js),
                (A.xorWith = In),
                (A.zip = bi),
                (A.zipObject = Nu),
                (A.zipObjectDeep = En),
                (A.zipWith = Ds),
                (A.entries = Uf),
                (A.entriesIn = tc),
                (A.extend = Lf),
                (A.extendWith = Ai),
                e(A, A),
                (A.add = k),
                (A.attempt = s0),
                (A.camelCase = Gf),
                (A.capitalize = U1),
                (A.ceil = ne),
                (A.clamp = wg),
                (A.clone = d1),
                (A.cloneDeep = v1),
                (A.cloneDeepWith = y1),
                (A.cloneWith = g1),
                (A.conformsTo = hg),
                (A.deburr = Mi),
                (A.defaultTo = Xf),
                (A.divide = Ce),
                (A.endsWith = Tg),
                (A.eq = Wn),
                (A.escape = k1),
                (A.escapeRegExp = N1),
                (A.every = Fu),
                (A.find = Jn),
                (A.findIndex = ws),
                (A.findKey = O1),
                (A.findLast = a1),
                (A.findLastIndex = Ts),
                (A.findLastKey = ec),
                (A.floor = nt),
                (A.forEach = i1),
                (A.forEachRight = vr),
                (A.forIn = ma),
                (A.forInRight = M1),
                (A.forOwn = Bf),
                (A.forOwnRight = mr),
                (A.get = Qr),
                (A.gt = m1),
                (A.gte = p1),
                (A.has = z1),
                (A.hasIn = a0),
                (A.head = Es),
                (A.identity = mn),
                (A.includes = Hs),
                (A.indexOf = Qh),
                (A.inRange = kf),
                (A.invoke = xg),
                (A.isArguments = Ol),
                (A.isArray = qe),
                (A.isArrayBuffer = Qs),
                (A.isArrayLike = Mn),
                (A.isArrayLikeObject = Ht),
                (A.isBoolean = Zu),
                (A.isBuffer = Xr),
                (A.isDate = b1),
                (A.isElement = Ke),
                (A.isEmpty = Zs),
                (A.isEqual = zf),
                (A.isEqualWith = Vs),
                (A.isError = jf),
                (A.isFinite = Is),
                (A.isFunction = Pn),
                (A.isInteger = Vu),
                (A.isLength = Df),
                (A.isMap = _1),
                (A.isMatch = S1),
                (A.isMatchWith = x1),
                (A.isNaN = vt),
                (A.isNative = Js),
                (A.isNil = dg),
                (A.isNull = rn),
                (A.isNumber = Ws),
                (A.isObject = wt),
                (A.isObjectLike = qt),
                (A.isPlainObject = Iu),
                (A.isRegExp = Ju),
                (A.isSafeInteger = Ps),
                (A.isSet = Wu),
                (A.isString = Pu),
                (A.isSymbol = zn),
                (A.isTypedArray = Kr),
                (A.isUndefined = e0),
                (A.isWeakMap = gg),
                (A.isWeakSet = C1),
                (A.join = Zh),
                (A.kebabCase = G1),
                (A.last = xt),
                (A.lastIndexOf = Vh),
                (A.lowerCase = F1),
                (A.lowerFirst = i0),
                (A.lt = vg),
                (A.lte = A1),
                (A.max = be),
                (A.maxBy = Ge),
                (A.mean = Ie),
                (A.meanBy = at),
                (A.min = Wr),
                (A.minBy = Dg),
                (A.stubArray = ae),
                (A.stubFalse = X),
                (A.stubObject = Z),
                (A.stubString = pe),
                (A.stubTrue = Te),
                (A.multiply = N5),
                (A.nth = dr),
                (A.noConflict = t),
                (A.noop = n),
                (A.now = Yu),
                (A.pad = $1),
                (A.padEnd = Y1),
                (A.padStart = Ff),
                (A.parseInt = Eg),
                (A.random = Nf),
                (A.reduce = wf),
                (A.reduceRight = Us),
                (A.repeat = Og),
                (A.replace = u0),
                (A.result = q1),
                (A.round = G5),
                (A.runInContext = L),
                (A.sample = ig),
                (A.size = s1),
                (A.snakeCase = c0),
                (A.some = xi),
                (A.sortedIndex = Uu),
                (A.sortedIndexBy = mi),
                (A.sortedIndexOf = Jh),
                (A.sortedLastIndex = Wh),
                (A.sortedLastIndexBy = ku),
                (A.sortedLastIndexOf = Ph),
                (A.startCase = f0),
                (A.startsWith = X1),
                (A.subtract = F5),
                (A.sum = $5),
                (A.sumBy = Y5),
                (A.template = o0),
                (A.times = yt),
                (A.toFinite = yr),
                (A.toInteger = Ee),
                (A.toLength = t0),
                (A.toLower = Zr),
                (A.toNumber = ea),
                (A.toSafeInteger = yg),
                (A.toString = ct),
                (A.toUpper = Vr),
                (A.trim = Ir),
                (A.trimEnd = nc),
                (A.trimStart = ac),
                (A.truncate = Jr),
                (A.unescape = Mg),
                (A.uniqueId = q),
                (A.upperCase = K1),
                (A.upperFirst = Ml),
                (A.each = i1),
                (A.eachRight = vr),
                (A.first = Es),
                e(
                  A,
                  (function () {
                    var a = {};
                    return (
                      wa(A, function (i, s) {
                        rt.call(A.prototype, s) || (a[s] = i);
                      }),
                      a
                    );
                  })(),
                  { chain: !1 },
                ),
                (A.VERSION = o),
                kn(
                  [
                    'bind',
                    'bindKey',
                    'curry',
                    'curryRight',
                    'partial',
                    'partialRight',
                  ],
                  function (a) {
                    A[a].placeholder = A;
                  },
                ),
                kn(['drop', 'take'], function (a, i) {
                  ((He.prototype[a] = function (s) {
                    s = s === u ? 1 : zt(Ee(s), 0);
                    var y =
                      this.__filtered__ && !i ? new He(this) : this.clone();
                    return (
                      y.__filtered__
                        ? (y.__takeCount__ = Ut(s, y.__takeCount__))
                        : y.__views__.push({
                            size: Ut(s, D),
                            type: a + (y.__dir__ < 0 ? 'Right' : ''),
                          }),
                      y
                    );
                  }),
                    (He.prototype[a + 'Right'] = function (s) {
                      return this.reverse()[a](s).reverse();
                    }));
                }),
                kn(['filter', 'map', 'takeWhile'], function (a, i) {
                  var s = i + 1,
                    y = s == et || s == W;
                  He.prototype[a] = function (b) {
                    var R = this.clone();
                    return (
                      R.__iteratees__.push({ iteratee: we(b, 3), type: s }),
                      (R.__filtered__ = R.__filtered__ || y),
                      R
                    );
                  };
                }),
                kn(['head', 'last'], function (a, i) {
                  var s = 'take' + (i ? 'Right' : '');
                  He.prototype[a] = function () {
                    return this[s](1).value()[0];
                  };
                }),
                kn(['initial', 'tail'], function (a, i) {
                  var s = 'drop' + (i ? '' : 'Right');
                  He.prototype[a] = function () {
                    return this.__filtered__ ? new He(this) : this[s](1);
                  };
                }),
                (He.prototype.compact = function () {
                  return this.filter(mn);
                }),
                (He.prototype.find = function (a) {
                  return this.filter(a).head();
                }),
                (He.prototype.findLast = function (a) {
                  return this.reverse().find(a);
                }),
                (He.prototype.invokeMap = ke(function (a, i) {
                  return typeof a == 'function'
                    ? new He(this)
                    : this.map(function (s) {
                        return ga(s, a, i);
                      });
                })),
                (He.prototype.reject = function (a) {
                  return this.filter(Of(we(a)));
                }),
                (He.prototype.slice = function (a, i) {
                  a = Ee(a);
                  var s = this;
                  return s.__filtered__ && (a > 0 || i < 0)
                    ? new He(s)
                    : (a < 0 ? (s = s.takeRight(-a)) : a && (s = s.drop(a)),
                      i !== u &&
                        ((i = Ee(i)),
                        (s = i < 0 ? s.dropRight(-i) : s.take(i - a))),
                      s);
                }),
                (He.prototype.takeRightWhile = function (a) {
                  return this.reverse().takeWhile(a).reverse();
                }),
                (He.prototype.toArray = function () {
                  return this.take(D);
                }),
                wa(He.prototype, function (a, i) {
                  var s = /^(?:filter|find|map|reject)|While$/.test(i),
                    y = /^(?:head|last)$/.test(i),
                    b = A[y ? 'take' + (i == 'last' ? 'Right' : '') : i],
                    R = y || /^find/.test(i);
                  b &&
                    (A.prototype[i] = function () {
                      var E = this.__wrapped__,
                        j = y ? [1] : arguments,
                        H = E instanceof He,
                        le = j[0],
                        ie = H || qe(E),
                        ue = function (We) {
                          var Pe = b.apply(A, Rr([We], j));
                          return y && de ? Pe[0] : Pe;
                        };
                      ie &&
                        s &&
                        typeof le == 'function' &&
                        le.length != 1 &&
                        (H = ie = !1);
                      var de = this.__chain__,
                        Se = !!this.__actions__.length,
                        Oe = R && !de,
                        $e = H && !Se;
                      if (!R && ie) {
                        E = $e ? E : new He(this);
                        var Me = a.apply(E, j);
                        return (
                          Me.__actions__.push({
                            func: Tl,
                            args: [ue],
                            thisArg: u,
                          }),
                          new xn(Me, de)
                        );
                      }
                      return Oe && $e
                        ? a.apply(this, j)
                        : ((Me = this.thru(ue)),
                          Oe ? (y ? Me.value()[0] : Me.value()) : Me);
                    });
                }),
                kn(
                  ['pop', 'push', 'shift', 'sort', 'splice', 'unshift'],
                  function (a) {
                    var i = ru[a],
                      s = /^(?:push|sort|unshift)$/.test(a) ? 'tap' : 'thru',
                      y = /^(?:pop|shift)$/.test(a);
                    A.prototype[a] = function () {
                      var b = arguments;
                      if (y && !this.__chain__) {
                        var R = this.value();
                        return i.apply(qe(R) ? R : [], b);
                      }
                      return this[s](function (E) {
                        return i.apply(qe(E) ? E : [], b);
                      });
                    };
                  },
                ),
                wa(He.prototype, function (a, i) {
                  var s = A[i];
                  if (s) {
                    var y = s.name + '';
                    (rt.call(ut, y) || (ut[y] = []),
                      ut[y].push({ name: i, func: s }));
                  }
                }),
                (ut[gi(u, J).name] = [{ name: 'wrapper', func: u }]),
                (He.prototype.clone = rr),
                (He.prototype.reverse = zr),
                (He.prototype.value = lr),
                (A.prototype.at = Af),
                (A.prototype.chain = Fr),
                (A.prototype.commit = Kt),
                (A.prototype.next = $r),
                (A.prototype.plant = gr),
                (A.prototype.reverse = qs),
                (A.prototype.toJSON =
                  A.prototype.valueOf =
                  A.prototype.value =
                    Ls),
                (A.prototype.first = A.prototype.head),
                en && (A.prototype[en] = _i),
                A
              );
            },
            Yl = Bo();
          _a ? (((_a.exports = Yl)._ = Yl), (Wi._ = Yl)) : (Yt._ = Yl);
        }).call(WC);
      })(b0, b0.exports)),
    b0.exports
  );
}
var up = PC();
const eA = (r, c) => {
    const [u, o] = M.useState({ width: c.width, height: c.height });
    M.useLayoutEffect(
      function () {
        const v = r.current;
        if (v === null) return;
        const p = new ResizeObserver(
          up.debounce((_) => {
            for (const S of _) {
              const { width: T, height: w } = S.contentRect;
              if (T <= 0 || w <= 0) return;
              const z = { width: T, height: w };
              o((U) => (up.isEqual(U, z) ? U : z));
            }
          }, 10),
        );
        return (
          p.observe(v),
          () => {
            (p.unobserve(v), p.disconnect());
          }
        );
      },
      [r.current],
    );
    const d = M.useCallback(() => {
      const g = r.current;
      if (g === null) return;
      const { width: v, height: p } = g.getBoundingClientRect(),
        _ = { width: v, height: p };
      o((S) => (up.isEqual(_, S) ? S : _));
    }, []);
    return { ...u, computeContainerSize: d };
  },
  tA = () => {
    const r = M.useRef(null),
      [c, u] = M.useState('');
    return (
      M.useEffect(function () {
        const d = (g) => {
          (g.preventDefault(), u(g.clipboardData.getData('text')));
        };
        return (
          document.addEventListener('paste', d),
          () => {
            document.removeEventListener('paste', d);
          }
        );
      }, []),
      M.useEffect(function () {
        if (ye.getBrowser() !== 'chrome') return;
        const g = async () => {
          try {
            if (document.hasFocus() === !1) return;
            (clearInterval(r.current),
              (r.current = setInterval(async () => {
                const v = await navigator.clipboard.readText();
                u((p) => (p !== v ? v : p));
              }, 500)));
          } catch {
            console.warn(
              'Auto-paste blocked on focus. This is expected in some browsers',
            );
          }
        };
        return (
          window.addEventListener('focus', g),
          () => {
            window.removeEventListener('focus', g);
          }
        );
      }, []),
      c
    );
  },
  nA = () => {
    const r = M.useCallback(
        (d, g = 0, v = 1) => Math.min(v, Math.max(g, d)) * 100,
        [],
      ),
      c = M.useCallback(
        (d, g, v) => {
          const p = d.hue,
            _ = r(d.saturation * v),
            S = r(g);
          return {
            type: 'HSLA',
            hue: p,
            saturation: _,
            lightness: S,
            alpha: d.alpha,
            raw: `hsla(${p}, ${_}%, ${S}%, ${d.alpha})`,
          };
        },
        [r],
      ),
      u = M.useCallback(
        (d) =>
          [
            'Primary',
            'Secondary',
            'Tertiary',
            'Quaternary',
            'Quinary',
            'Senary',
            'Septenary',
            'Octonary',
            'Novenary',
            'Denary',
            'Undenary',
            'Duodenary',
          ][d] || `${d}th`,
        [],
      ),
      o = M.useCallback(
        (d, g) => {
          const v = je.makeCurrentColorTo(d.color, 'HSLA');
          return [
            '900',
            '800',
            '700',
            '600',
            'main',
            '400',
            '300',
            '200',
            '100',
          ].reduce(
            (p, _) => {
              const S = _ === 'main' ? v : c(v, IC[_], JC[_]),
                T = je.makeCurrentColorTo(S, 'RGBA'),
                w = je.makeLuminance(T),
                z = je.makeHighlightFromLuminance(T, w, 'RGBA'),
                U = je.makeTextColorFromLuminance(w),
                K = je.makeWarningColor(T, w),
                N = je.makeSuccessColor(T, w),
                $ = je.makeInfoColor(T),
                J = je.makeErrorColor(T, w),
                te = je.takeFromColor(T, 0.7, 0.7, 0.7, 0.6),
                F = je.makeWhiteColor(T),
                I = je.makeBlackColor(T),
                oe = je.makeTextColorFromLuminance(je.makeLuminance(I)),
                re = je.makeTextColorFromLuminance(je.makeLuminance(F)),
                V = je.makeLightGreyFromColor(T),
                ce = je.makeDarkGreyFromColor(T),
                Ae = je.makeRgbaFromLuminance(w, 0.2);
              return {
                ...p,
                [_]: {
                  color: T,
                  highlight: z,
                  text: U,
                  shadow: te,
                  warning: K,
                  success: N,
                  info: $,
                  error: J,
                  darkScreen: I,
                  lightScreen: F,
                  darkScreenText: oe,
                  lightScreenText: re,
                  disabled: Ae,
                  lightGrey: V,
                  darkGrey: ce,
                  default: 'dark',
                },
              };
            },
            {
              title: typeof g == 'string' ? g : u(g),
              id: d.id,
              activeAccent: 'main',
              kind: 'RGBA',
              applyTo: 'color',
            },
          );
        },
        [u],
      );
    return { clampColor: r, shade: c, makeColorAccents: o };
  },
  k5 = () => {
    const { info: r } = B5(),
      c = M.useRef(''),
      u = M.useRef(null),
      o = M.useRef(null),
      d = M.useRef(null),
      g = M.useRef(null),
      v = tA(),
      p = Jf.find((Y) => Y.id === 'monochromatic'),
      { width: _, height: S } = eA(u, { width: 250, height: 250 }),
      T = BC(),
      w = nA(),
      z = M.useMemo(
        () => T.calculeSizes({ width: _, height: S }),
        [_, S, T.calculeSizes],
      ),
      { updateTheme: U, theme: K } = Pr(),
      [N, $] = M.useReducer(je.makeReducer(VC, {}), {
        pallete: 'primary',
        selectedPickerIndex: -1,
        selectedPickerId: void 0,
        darkness: 0.5,
        mode: p,
        activeView: 'wheel',
        numberOfPickers: p.value.pickers,
        distanceBetweenEachPicker: p.value.distanceBetweenEachOne,
        pickers: T.makePickers(
          p.value.pickers,
          p.value.distanceBetweenEachOne,
          z,
        ),
        themes: [],
        visibleColorIndex: 0,
      }),
      J = M.useMemo(
        () => N.themes.find((Y) => Y.id === N.selectedWheelOutputId),
        [N.themes, N.selectedWheelOutputId],
      ),
      te = M.useMemo(
        () =>
          J
            ? ye.assign(
                {},
                z8,
                J[(J == null ? void 0 : J.activeAccent) || 'main'],
                { pallete: N.pallete },
              )
            : void 0,
        [J, N.pallete],
      ),
      F = M.useCallback(
        (Y) => () => {
          const fe = Y.current;
          fe !== null && fe.scrollIntoView({ behavior: 'smooth' });
        },
        [],
      ),
      I = M.useCallback((Y) => {
        $({
          type: 'onEmitWheelOutput',
          value: Y.map((fe, me) => w.makeColorAccents(fe, me)),
        });
      }, []),
      oe = M.useCallback(
        (Y) => {
          $({ type: 'changeMode', value: Y });
        },
        [z],
      ),
      re = M.useCallback(() => {
        $({ type: 'settingsClick', value: null });
      }, []),
      V = M.useCallback((Y) => {
        $({ type: 'onPickersCountChange', value: Y });
      }, []),
      ce = M.useCallback((Y) => {
        $({ type: 'onSpaceBetweenPickersChange', value: Y });
      }, []),
      Ae = M.useCallback((Y) => {
        $({ type: 'onDarknessChange', value: Y });
      }, []),
      Re = M.useCallback((Y, fe) => {
        $({
          type: 'onChangeWheelOutputAccent',
          value: { theme: Y, activeAccent: fe },
        });
      }, []),
      se = M.useCallback((Y, fe) => {
        $({
          type: 'onChangeWheelOutputApplyOn',
          value: { theme: Y, applyOn: fe },
        });
      }, []),
      Le = M.useCallback((Y, fe) => {
        $({
          type: 'onChangeWheelOutputColorKind',
          value: { theme: Y, kind: fe },
        });
      }, []),
      xe = M.useCallback((Y, fe) => {
        $({ type: 'onChangeColor', value: { theme: Y, color: fe } });
      }, []),
      et = M.useCallback((Y) => {
        $({ type: 'onSelectWheelOutput', value: Y.id });
      }, []),
      tt = M.useCallback((Y, fe) => {
        $({
          type: 'selectedPickerChange',
          value: { selectedPickerIndex: Y, selectedPickerId: fe },
        });
      }, []),
      W = M.useCallback((Y) => {
        $({ type: 'onPickersChange', value: { pickers: Y } });
      }, []),
      he = M.useCallback(
        (Y) => () => {
          $({ type: 'setVisibleWheelColor', value: Y });
        },
        [],
      ),
      _e = M.useCallback(
        (Y) => {
          if (N.themes.length <= 1) {
            r('You cannot delete the unique theme!');
            return;
          }
          $({ type: 'deleteTheme', value: Y });
        },
        [N.themes, r],
      ),
      Be = M.useCallback((Y) => {
        $({ type: 'updateTheme', value: Y });
      }, []),
      Ze = M.useCallback(
        (Y) => () => {
          $({ type: 'updatePallete', value: Y });
        },
        [],
      ),
      D = M.useCallback(
        (Y) => () => {
          const fe = je.makeCurrentColorTo(Y, 'HSL'),
            me = ye.hslToCoordinates(fe, z.center, z.radius);
          $({
            type: 'onPickersChange',
            value: {
              pickers: T.makePickers(
                N.numberOfPickers,
                N.distanceBetweenEachPicker,
                z,
                me,
              ),
              darkness: ye.round(fe.lightness / 100, 1),
            },
          });
        },
        [z, T, N.numberOfPickers, N.distanceBetweenEachPicker],
      );
    return (
      M.useEffect(
        function () {
          $({
            type: 'onPickersChange',
            value: {
              pickers: T.makePickers(
                N.numberOfPickers,
                N.distanceBetweenEachPicker,
                z,
              ),
            },
          });
        },
        [N.numberOfPickers, N.distanceBetweenEachPicker, z],
      ),
      M.useEffect(
        function () {
          te && U(te);
        },
        [te],
      ),
      M.useEffect(
        function () {
          if (!v) return;
          const fe = je.makeColorFromString(v);
          fe.type !== 'INVALID' &&
            (T.isColorPresent(fe, N.themes) ||
              (c.current !== fe.raw &&
                ((c.current = fe.raw),
                $({
                  type: 'setClipboard',
                  value: w.makeColorAccents(
                    { color: fe, id: 'clipboard' },
                    'Clipboard',
                  ),
                }))));
        },
        [v, r, N.themes, D],
      ),
      {
        selectedTheme: te || K,
        settingsSection: g,
        colorsSection: d,
        wheelSection: o,
        wheelContainer: u,
        state: N,
        computed: z,
        onModeChange: oe,
        onSettingsClick: re,
        onPickerNumberChange: V,
        onSelectPallete: Ze,
        onSpaceBetweenEachPickerChange: ce,
        onDarknessChange: Ae,
        onEmitWheelOutput: I,
        onChangeWheelOutputAccent: Re,
        onChangeWheelOutputApplyOn: se,
        onChangeWheelOutputColorKind: Le,
        onChangeWheelOutputColor: xe,
        onSelectedPickerChange: tt,
        onPickersMove: W,
        onSelectWheelOutput: et,
        onVisibleWheelColorChange: he,
        onChangeThemeTitle: Be,
        onDeleteTheme: _e,
        goTo: F,
      }
    );
  },
  aA = ({
    settingsSection: r,
    wheelSection: c,
    goTo: u,
    state: o,
    onSpaceBetweenEachPickerChange: d,
    onPickerNumberChange: g,
  }) =>
    x.jsxs(Vf, {
      ref: r,
      contentRows: '60px 100px 100px',
      children: [
        x.jsx(un, {
          size: 24,
          round: !0,
          onClick: u(c),
          flex: '0 0 28px',
          margin: '10px',
          children: x.jsx(Lp, {}),
        }),
        x.jsxs(ge, {
          flex: '1 1 100%',
          justifyContent: 'center',
          alignItems: 'center',
          direction: 'column',
          children: [
            x.jsx(pa, {
              type: 'number',
              label: 'Pickers',
              value: o.numberOfPickers,
              onChange: g,
              disableLeftRadius: !0,
              disableRightRadius: !0,
              flex: '1 0 auto',
              atRow: 2,
              width: '90%',
              justifySelf: 'center',
            }),
            x.jsx(pa, {
              type: 'number',
              label: 'Space between each one',
              value: o.distanceBetweenEachPicker,
              onChange: d,
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
  rA = () => {
    var Re, se, Le, xe, et, tt, W, he, _e;
    const {
        wheelSection: r,
        state: c,
        onModeChange: u,
        settingsSection: o,
        goTo: d,
        onDarknessChange: g,
        wheelContainer: v,
        computed: p,
        selectedTheme: _,
        onEmitWheelOutput: S,
        onSelectedPickerChange: T,
        onPickersMove: w,
        onPickerNumberChange: z,
        onSpaceBetweenEachPickerChange: U,
        onChangeWheelOutputAccent: K,
        onChangeWheelOutputColorKind: N,
        onChangeWheelOutputApplyOn: $,
        onChangeWheelOutputColor: J,
        onSelectWheelOutput: te,
        onVisibleWheelColorChange: F,
        onSelectPallete: I,
        onChangeThemeTitle: oe,
        onDeleteTheme: re,
      } = k5(),
      V = M.useCallback((Be) => Be.media.otherDevices, []),
      ce = M.useCallback(
        (Be) => ({ background: Be.getCurrentPallete().color.raw }),
        [],
      ),
      Ae = M.useMemo(
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
    return x.jsx(I8, {
      query: V,
      withStyle: ce,
      removeFromHtml: !0,
      children: x.jsxs(If, {
        as: 'article',
        atRow: 1,
        horizontal: !0,
        scrollSnap: 'x mandatory',
        behavior: 'instant',
        touchAction: 'none',
        children: [
          x.jsxs(Vf, {
            ref: r,
            contentRows: '30px 50px 50px 30px calc(100% - 545px) 350px 35px',
            children: [
              x.jsxs(ge, {
                atRow: 1,
                children: [
                  x.jsx(ip, {
                    label: 'Primary Pallete',
                    text: (Re = _.text) == null ? void 0 : Re.raw,
                    color: (se = _.color) == null ? void 0 : se.raw,
                    highlight: (Le = _.highlight) == null ? void 0 : Le.raw,
                    active: c.pallete === 'primary',
                    onClick: I('primary'),
                  }),
                  x.jsx(ip, {
                    label: 'Light Pallete',
                    text: (xe = _.lightScreenText) == null ? void 0 : xe.raw,
                    color: (et = _.lightScreen) == null ? void 0 : et.raw,
                    highlight: (tt = _.lightGrey) == null ? void 0 : tt.raw,
                    active: c.pallete === 'light',
                    onClick: I('light'),
                  }),
                  x.jsx(ip, {
                    label: 'Dark Pallete',
                    text: (W = _.darkScreenText) == null ? void 0 : W.raw,
                    color: (he = _.darkScreen) == null ? void 0 : he.raw,
                    highlight: (_e = _.darkGrey) == null ? void 0 : _e.raw,
                    active: c.pallete === 'dark',
                    onClick: I('dark'),
                  }),
                ],
              }),
              x.jsxs(ge, {
                atRow: 2,
                borderBottom: (Be) => `1px solid ${Be.highlight.raw}`,
                children: [
                  x.jsx(x0, {
                    options: Jf,
                    value: c.mode,
                    onChange: u,
                    directionals: !0,
                  }),
                  x.jsx(un, {
                    size: 24,
                    onClick: d(o),
                    children:
                      c.activeView === 'wheel' ? x.jsx(O5, {}) : x.jsx(ro, {}),
                  }),
                ],
              }),
              x.jsx(ge, {
                kind: 'column',
                direction: 'column',
                padding: '10px',
                atRow: 3,
                children: x.jsx(z0, {
                  direction: 'horizontal',
                  min: 0.1,
                  max: 1,
                  step: 0.1,
                  value: c.darkness,
                  onChange: g,
                  colors: Ae,
                  deg: 90,
                  label: 'Darkness',
                }),
              }),
              x.jsxs(ge, {
                atRow: 4,
                padding: '10px',
                children: [
                  x.jsx(ge, { justifyContent: 'start' }),
                  x.jsx(ge, {
                    alignItems: 'center',
                    justifyContent: 'end',
                    children: x.jsx(un, {
                      size: 20,
                      round: !1,
                      children: x.jsx(bC, {}),
                    }),
                  }),
                ],
              }),
              x.jsx(ge, {
                ref: v,
                atRow: 5,
                children: x.jsx(z5, {
                  pickers: c.pickers,
                  computed: p,
                  darkness: c.darkness,
                  selectedIndex: c.selectedPickerIndex,
                  selectedPicker: c.selectedPickerId,
                  distanceBetweenEachPicker: c.distanceBetweenEachPicker,
                  onChange: S,
                  onSelectedPickerChange: T,
                  onPickersMove: w,
                  freeMove: c.mode.value.freeMove,
                }),
              }),
              x.jsxs(If, {
                atRow: 6,
                horizontal: !0,
                scrollSnap: 'x mandatory',
                gap: '20px',
                padding: '10px',
                scrollMode: 'auto',
                children: [
                  c.clipboard &&
                    c.clipboard.map((Be, Ze) =>
                      x.jsx(
                        op,
                        {
                          theme: Be,
                          onChangeAccent: () => {},
                          onChangeApplyOn: () => {},
                          onChangeColorKind: () => {},
                          onColorChange: () => {},
                          onSelect: () => {},
                          onVisible: () => {},
                          onChangeTitle: () => {},
                          onDelete: () => {},
                        },
                        Ze,
                      ),
                    ),
                  c.themes.map((Be, Ze) =>
                    x.jsx(
                      op,
                      {
                        theme: Be,
                        onChangeAccent: K,
                        onChangeApplyOn: $,
                        onChangeColorKind: N,
                        onColorChange: J,
                        onSelect: te,
                        onVisible: F(Ze),
                        onChangeTitle: oe,
                        onDelete: re,
                        selected: c.selectedWheelOutputId === Be.id,
                      },
                      Be.id,
                    ),
                  ),
                ],
              }),
              x.jsx(U5, { atRow: 7 }),
            ],
          }),
          x.jsx(aA, {
            settingsSection: o,
            wheelSection: r,
            goTo: d,
            state: c,
            onSpaceBetweenEachPickerChange: U,
            onPickerNumberChange: z,
          }),
        ],
      }),
    });
  },
  lA = () => {
    const {
        state: r,
        onModeChange: c,
        onDarknessChange: u,
        wheelContainer: o,
        wheelSection: d,
        colorsSection: g,
        settingsSection: v,
        computed: p,
        onEmitWheelOutput: _,
        onSelectedPickerChange: S,
        onPickersMove: T,
        onChangeWheelOutputAccent: w,
        onChangeWheelOutputApplyOn: z,
        onChangeWheelOutputColor: U,
        onChangeWheelOutputColorKind: K,
        onSelectWheelOutput: N,
        onPickerNumberChange: $,
        onSpaceBetweenEachPickerChange: J,
        onVisibleWheelColorChange: te,
        goTo: F,
      } = k5(),
      I = M.useCallback((Re) => Re.media.smallDevices, []),
      oe = M.useCallback(
        (Re) => ({ background: Re.getCurrentPallete().color.raw }),
        [],
      ),
      re = M.useCallback((Re) => Re.getCurrentPallete().color.raw, []),
      V = M.useCallback((Re) => Re.getCurrentPallete().highlight.raw, []),
      ce = M.useMemo(
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
      Ae = M.useMemo(
        () => ({
          flex: '1 0 auto',
          justifyContent: 'center',
          alignItems: 'start',
        }),
        [],
      );
    return x.jsx(I8, {
      query: I,
      withStyle: oe,
      removeFromHtml: !0,
      children: x.jsxs(If, {
        as: 'article',
        vertical: !0,
        scrollSnap: 'y mandatory',
        behavior: 'instant',
        highlight: V,
        primary: re,
        touchAction: 'none',
        children: [
          x.jsx(Vf, {
            children: x.jsxs(If, {
              horizontal: !0,
              scrollSnap: 'x mandatory',
              behavior: 'instant',
              highlight: V,
              primary: re,
              touchAction: 'none',
              children: [
                x.jsxs(Vf, {
                  ref: d,
                  contentRows: '55px 50px calc(100% - 155px) 50px',
                  children: [
                    x.jsxs(ge, {
                      atRow: 1,
                      borderBottom: (Re) => `1px solid ${Re.highlight.raw}`,
                      children: [
                        x.jsx(x0, {
                          options: Jf,
                          value: r.mode,
                          onChange: c,
                          directionals: !0,
                        }),
                        x.jsx(un, {
                          size: 24,
                          onClick: F(v),
                          children:
                            r.activeView === 'wheel'
                              ? x.jsx(O5, {})
                              : x.jsx(ro, {}),
                        }),
                      ],
                    }),
                    x.jsx(ge, {
                      atRow: 2,
                      direction: 'column',
                      padding: '10px',
                      children: x.jsx(z0, {
                        direction: 'horizontal',
                        min: 0.1,
                        max: 1,
                        step: 0.1,
                        value: r.darkness,
                        onChange: u,
                        colors: ce,
                        deg: 90,
                        label: 'Darkness',
                      }),
                    }),
                    x.jsx(ge, {
                      ref: o,
                      atRow: 3,
                      children: x.jsx(z5, {
                        pickers: r.pickers,
                        computed: p,
                        darkness: r.darkness,
                        selectedIndex: r.selectedPickerIndex,
                        selectedPicker: r.selectedPickerId,
                        distanceBetweenEachPicker: r.distanceBetweenEachPicker,
                        onChange: _,
                        onSelectedPickerChange: S,
                        onPickersMove: T,
                        freeMove: r.mode.value.freeMove,
                      }),
                    }),
                    x.jsx(ge, {
                      atRow: 4,
                      withStyle: Ae,
                      children: x.jsx(un, {
                        size: 24,
                        round: !0,
                        onClick: F(g),
                        children: x.jsx(M5, {}),
                      }),
                    }),
                  ],
                }),
                x.jsxs(Vf, {
                  ref: v,
                  contentRows: '60px 100px 100px',
                  children: [
                    x.jsx(un, {
                      size: 24,
                      round: !0,
                      onClick: F(d),
                      flex: '0 0 28px',
                      margin: '10px',
                      children: x.jsx(Lp, {}),
                    }),
                    x.jsxs(ge, {
                      flex: '1 1 100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      direction: 'column',
                      children: [
                        x.jsx(pa, {
                          type: 'number',
                          label: 'Pickers',
                          value: r.numberOfPickers,
                          onChange: $,
                          disableLeftRadius: !0,
                          disableRightRadius: !0,
                          flex: '1 0 auto',
                          atRow: 2,
                          width: '90%',
                          justifySelf: 'center',
                        }),
                        x.jsx(pa, {
                          type: 'number',
                          label: 'Space between each one',
                          value: r.distanceBetweenEachPicker,
                          onChange: J,
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
          x.jsxs(Vf, {
            ref: g,
            contentRows: '50px 1fr 50px 35px',
            children: [
              x.jsx(ge, {
                atRow: 1,
                withStyle: Ae,
                children: x.jsx(un, {
                  size: 24,
                  round: !0,
                  onClick: F(d),
                  children: x.jsx(gC, {}),
                }),
              }),
              x.jsx(If, {
                atRow: 2,
                horizontal: !0,
                scrollSnap: 'x mandatory',
                behavior: 'instant',
                highlight: (Re) => Re.highlight.raw,
                primary: (Re) => Re.getCurrentPallete().color.raw,
                gap: '20px',
                padding: '0 15px',
                children: r.themes.map((Re, se) =>
                  x.jsx(
                    op,
                    {
                      theme: Re,
                      onChangeAccent: w,
                      onChangeApplyOn: z,
                      onChangeColorKind: K,
                      onColorChange: U,
                      onSelect: N,
                      onVisible: te(se),
                      selected: r.selectedWheelOutputId === Re.id,
                      onDelete: () => {},
                      onChangeTitle: () => {},
                    },
                    Re.id,
                  ),
                ),
              }),
              x.jsx(YC, {
                atRow: 3,
                total: r.themes.length,
                active: r.visibleColorIndex,
                justifyContent: 'center',
                alignItems: 'center',
              }),
              x.jsx(U5, { atRow: 4 }),
            ],
          }),
        ],
      }),
    });
  },
  iA = () => x.jsxs(M.Fragment, { children: [x.jsx(lA, {}), x.jsx(rA, {})] }),
  uA = () =>
    x.jsx(U6, {
      theme: nS,
      patterns: f9,
      children: x.jsx(UC, {
        timeout: 2e3,
        children: x.jsx(V6, {
          containerId: 'root',
          fontSize: '16px',
          fontFamily: '"Mozilla Text", sans-serif',
          children: x.jsx(KC, { children: x.jsx(iA, {}) }),
        }),
      }),
    });
tS.createRoot(document.getElementById('root')).render(x.jsx(uA, {}));
