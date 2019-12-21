/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a, b) {
  function cy(a) {
    return f.isWindow(a)
      ? a
      : a.nodeType === 9
      ? a.defaultView || a.parentWindow
      : !1;
  }
  function cu(a) {
    if (!cj[a]) {
      var b = c.body,
        d = f('<' + a + '>').appendTo(b),
        e = d.css('display');
      d.remove();
      if (e === 'none' || e === '') {
        ck ||
          ((ck = c.createElement('iframe')),
          (ck.frameBorder = ck.width = ck.height = 0)),
          b.appendChild(ck);
        if (!cl || !ck.createElement)
          (cl = (ck.contentWindow || ck.contentDocument).document),
            cl.write(
              (f.support.boxModel ? '<!doctype html>' : '') + '<html><body>'
            ),
            cl.close();
        (d = cl.createElement(a)),
          cl.body.appendChild(d),
          (e = f.css(d, 'display')),
          b.removeChild(ck);
      }
      cj[a] = e;
    }
    return cj[a];
  }
  function ct(a, b) {
    var c = {};
    f.each(cp.concat.apply([], cp.slice(0, b)), function() {
      c[this] = a;
    });
    return c;
  }
  function cs() {
    cq = b;
  }
  function cr() {
    setTimeout(cs, 0);
    return (cq = f.now());
  }
  function ci() {
    try {
      return new a.ActiveXObject('Microsoft.XMLHTTP');
    } catch (b) {}
  }
  function ch() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function cb(a, c) {
    a.dataFilter && (c = a.dataFilter(c, a.dataType));
    var d = a.dataTypes,
      e = {},
      g,
      h,
      i = d.length,
      j,
      k = d[0],
      l,
      m,
      n,
      o,
      p;
    for (g = 1; g < i; g++) {
      if (g === 1)
        for (h in a.converters)
          typeof h == 'string' && (e[h.toLowerCase()] = a.converters[h]);
      (l = k), (k = d[g]);
      if (k === '*') k = l;
      else if (l !== '*' && l !== k) {
        (m = l + ' ' + k), (n = e[m] || e['* ' + k]);
        if (!n) {
          p = b;
          for (o in e) {
            j = o.split(' ');
            if (j[0] === l || j[0] === '*') {
              p = e[j[1] + ' ' + k];
              if (p) {
                (o = e[o]), o === !0 ? (n = p) : p === !0 && (n = o);
                break;
              }
            }
          }
        }
        !n && !p && f.error('No conversion from ' + m.replace(' ', ' to ')),
          n !== !0 && (c = n ? n(c) : p(o(c)));
      }
    }
    return c;
  }
  function ca(a, c, d) {
    var e = a.contents,
      f = a.dataTypes,
      g = a.responseFields,
      h,
      i,
      j,
      k;
    for (i in g) i in d && (c[g[i]] = d[i]);
    while (f[0] === '*')
      f.shift(),
        h === b && (h = a.mimeType || c.getResponseHeader('content-type'));
    if (h)
      for (i in e)
        if (e[i] && e[i].test(h)) {
          f.unshift(i);
          break;
        }
    if (f[0] in d) j = f[0];
    else {
      for (i in d) {
        if (!f[0] || a.converters[i + ' ' + f[0]]) {
          j = i;
          break;
        }
        k || (k = i);
      }
      j = j || k;
    }
    if (j) {
      j !== f[0] && f.unshift(j);
      return d[j];
    }
  }
  function b_(a, b, c, d) {
    if (f.isArray(b))
      f.each(b, function(b, e) {
        c || bD.test(a)
          ? d(a, e)
          : b_(a + '[' + (typeof e == 'object' ? b : '') + ']', e, c, d);
      });
    else if (!c && f.type(b) === 'object')
      for (var e in b) b_(a + '[' + e + ']', b[e], c, d);
    else d(a, b);
  }
  function b$(a, c) {
    var d,
      e,
      g = f.ajaxSettings.flatOptions || {};
    for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
    e && f.extend(!0, a, e);
  }
  function bZ(a, c, d, e, f, g) {
    (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
    var h = a[f],
      i = 0,
      j = h ? h.length : 0,
      k = a === bS,
      l;
    for (; i < j && (k || !l); i++)
      (l = h[i](c, d, e)),
        typeof l == 'string' &&
          (!k || g[l]
            ? (l = b)
            : (c.dataTypes.unshift(l), (l = bZ(a, c, d, e, l, g))));
    (k || !l) && !g['*'] && (l = bZ(a, c, d, e, '*', g));
    return l;
  }
  function bY(a) {
    return function(b, c) {
      typeof b != 'string' && ((c = b), (b = '*'));
      if (f.isFunction(c)) {
        var d = b.toLowerCase().split(bO),
          e = 0,
          g = d.length,
          h,
          i,
          j;
        for (; e < g; e++)
          (h = d[e]),
            (j = /^\+/.test(h)),
            j && (h = h.substr(1) || '*'),
            (i = a[h] = a[h] || []),
            i[j ? 'unshift' : 'push'](c);
      }
    };
  }
  function bB(a, b, c) {
    var d = b === 'width' ? a.offsetWidth : a.offsetHeight,
      e = b === 'width' ? 1 : 0,
      g = 4;
    if (d > 0) {
      if (c !== 'border')
        for (; e < g; e += 2)
          c || (d -= parseFloat(f.css(a, 'padding' + bx[e])) || 0),
            c === 'margin'
              ? (d += parseFloat(f.css(a, c + bx[e])) || 0)
              : (d -= parseFloat(f.css(a, 'border' + bx[e] + 'Width')) || 0);
      return d + 'px';
    }
    d = by(a, b);
    if (d < 0 || d == null) d = a.style[b];
    if (bt.test(d)) return d;
    d = parseFloat(d) || 0;
    if (c)
      for (; e < g; e += 2)
        (d += parseFloat(f.css(a, 'padding' + bx[e])) || 0),
          c !== 'padding' &&
            (d += parseFloat(f.css(a, 'border' + bx[e] + 'Width')) || 0),
          c === 'margin' && (d += parseFloat(f.css(a, c + bx[e])) || 0);
    return d + 'px';
  }
  function bo(a) {
    var b = c.createElement('div');
    bh.appendChild(b), (b.innerHTML = a.outerHTML);
    return b.firstChild;
  }
  function bn(a) {
    var b = (a.nodeName || '').toLowerCase();
    b === 'input'
      ? bm(a)
      : b !== 'script' &&
        typeof a.getElementsByTagName != 'undefined' &&
        f.grep(a.getElementsByTagName('input'), bm);
  }
  function bm(a) {
    if (a.type === 'checkbox' || a.type === 'radio')
      a.defaultChecked = a.checked;
  }
  function bl(a) {
    return typeof a.getElementsByTagName != 'undefined'
      ? a.getElementsByTagName('*')
      : typeof a.querySelectorAll != 'undefined'
      ? a.querySelectorAll('*')
      : [];
  }
  function bk(a, b) {
    var c;
    b.nodeType === 1 &&
      (b.clearAttributes && b.clearAttributes(),
      b.mergeAttributes && b.mergeAttributes(a),
      (c = b.nodeName.toLowerCase()),
      c === 'object'
        ? (b.outerHTML = a.outerHTML)
        : c !== 'input' || (a.type !== 'checkbox' && a.type !== 'radio')
        ? c === 'option'
          ? (b.selected = a.defaultSelected)
          : c === 'input' || c === 'textarea'
          ? (b.defaultValue = a.defaultValue)
          : c === 'script' && b.text !== a.text && (b.text = a.text)
        : (a.checked && (b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value)),
      b.removeAttribute(f.expando),
      b.removeAttribute('_submit_attached'),
      b.removeAttribute('_change_attached'));
  }
  function bj(a, b) {
    if (b.nodeType === 1 && !!f.hasData(a)) {
      var c,
        d,
        e,
        g = f._data(a),
        h = f._data(b, g),
        i = g.events;
      if (i) {
        delete h.handle, (h.events = {});
        for (c in i)
          for (d = 0, e = i[c].length; d < e; d++) f.event.add(b, c, i[c][d]);
      }
      h.data && (h.data = f.extend({}, h.data));
    }
  }
  function bi(a, b) {
    return f.nodeName(a, 'table')
      ? a.getElementsByTagName('tbody')[0] ||
          a.appendChild(a.ownerDocument.createElement('tbody'))
      : a;
  }
  function U(a) {
    var b = V.split('|'),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  function T(a, b, c) {
    b = b || 0;
    if (f.isFunction(b))
      return f.grep(a, function(a, d) {
        var e = !!b.call(a, d, a);
        return e === c;
      });
    if (b.nodeType)
      return f.grep(a, function(a, d) {
        return (a === b) === c;
      });
    if (typeof b == 'string') {
      var d = f.grep(a, function(a) {
        return a.nodeType === 1;
      });
      if (O.test(b)) return f.filter(b, d, !c);
      b = f.filter(b, d);
    }
    return f.grep(a, function(a, d) {
      return f.inArray(a, b) >= 0 === c;
    });
  }
  function S(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11;
  }
  function K() {
    return !0;
  }
  function J() {
    return !1;
  }
  function n(a, b, c) {
    var d = b + 'defer',
      e = b + 'queue',
      g = b + 'mark',
      h = f._data(a, d);
    h &&
      (c === 'queue' || !f._data(a, e)) &&
      (c === 'mark' || !f._data(a, g)) &&
      setTimeout(function() {
        !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire());
      }, 0);
  }
  function m(a) {
    for (var b in a) {
      if (b === 'data' && f.isEmptyObject(a[b])) continue;
      if (b !== 'toJSON') return !1;
    }
    return !0;
  }
  function l(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = 'data-' + c.replace(k, '-$1').toLowerCase();
      d = a.getAttribute(e);
      if (typeof d == 'string') {
        try {
          d =
            d === 'true'
              ? !0
              : d === 'false'
              ? !1
              : d === 'null'
              ? null
              : f.isNumeric(d)
              ? +d
              : j.test(d)
              ? f.parseJSON(d)
              : d;
        } catch (g) {}
        f.data(a, c, d);
      } else d = b;
    }
    return d;
  }
  function h(a) {
    var b = (g[a] = {}),
      c,
      d;
    a = a.split(/\s+/);
    for (c = 0, d = a.length; c < d; c++) b[a[c]] = !0;
    return b;
  }
  var c = a.document,
    d = a.navigator,
    e = a.location,
    f = (function() {
      function J() {
        if (!e.isReady) {
          try {
            c.documentElement.doScroll('left');
          } catch (a) {
            setTimeout(J, 1);
            return;
          }
          e.ready();
        }
      }
      var e = function(a, b) {
          return new e.fn.init(a, b, h);
        },
        f = a.jQuery,
        g = a.$,
        h,
        i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        j = /\S/,
        k = /^\s+/,
        l = /\s+$/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = /-([a-z]|[0-9])/gi,
        w = /^-ms-/,
        x = function(a, b) {
          return (b + '').toUpperCase();
        },
        y = d.userAgent,
        z,
        A,
        B,
        C = Object.prototype.toString,
        D = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        F = Array.prototype.slice,
        G = String.prototype.trim,
        H = Array.prototype.indexOf,
        I = {};
      (e.fn = e.prototype = {
        constructor: e,
        init: function(a, d, f) {
          var g, h, j, k;
          if (!a) return this;
          if (a.nodeType) {
            (this.context = this[0] = a), (this.length = 1);
            return this;
          }
          if (a === 'body' && !d && c.body) {
            (this.context = c),
              (this[0] = c.body),
              (this.selector = a),
              (this.length = 1);
            return this;
          }
          if (typeof a == 'string') {
            a.charAt(0) !== '<' ||
            a.charAt(a.length - 1) !== '>' ||
            a.length < 3
              ? (g = i.exec(a))
              : (g = [null, a, null]);
            if (g && (g[1] || !d)) {
              if (g[1]) {
                (d = d instanceof e ? d[0] : d),
                  (k = d ? d.ownerDocument || d : c),
                  (j = m.exec(a)),
                  j
                    ? e.isPlainObject(d)
                      ? ((a = [c.createElement(j[1])]),
                        e.fn.attr.call(a, d, !0))
                      : (a = [k.createElement(j[1])])
                    : ((j = e.buildFragment([g[1]], [k])),
                      (a = (j.cacheable ? e.clone(j.fragment) : j.fragment)
                        .childNodes));
                return e.merge(this, a);
              }
              h = c.getElementById(g[2]);
              if (h && h.parentNode) {
                if (h.id !== g[2]) return f.find(a);
                (this.length = 1), (this[0] = h);
              }
              (this.context = c), (this.selector = a);
              return this;
            }
            return !d || d.jquery
              ? (d || f).find(a)
              : this.constructor(d).find(a);
          }
          if (e.isFunction(a)) return f.ready(a);
          a.selector !== b &&
            ((this.selector = a.selector), (this.context = a.context));
          return e.makeArray(a, this);
        },
        selector: '',
        jquery: '1.7.2',
        length: 0,
        size: function() {
          return this.length;
        },
        toArray: function() {
          return F.call(this, 0);
        },
        get: function(a) {
          return a == null
            ? this.toArray()
            : a < 0
            ? this[this.length + a]
            : this[a];
        },
        pushStack: function(a, b, c) {
          var d = this.constructor();
          e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
            (d.prevObject = this),
            (d.context = this.context),
            b === 'find'
              ? (d.selector = this.selector + (this.selector ? ' ' : '') + c)
              : b && (d.selector = this.selector + '.' + b + '(' + c + ')');
          return d;
        },
        each: function(a, b) {
          return e.each(this, a, b);
        },
        ready: function(a) {
          e.bindReady(), A.add(a);
          return this;
        },
        eq: function(a) {
          a = +a;
          return a === -1 ? this.slice(a) : this.slice(a, a + 1);
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        slice: function() {
          return this.pushStack(
            F.apply(this, arguments),
            'slice',
            F.call(arguments).join(',')
          );
        },
        map: function(a) {
          return this.pushStack(
            e.map(this, function(b, c) {
              return a.call(b, c, b);
            })
          );
        },
        end: function() {
          return this.prevObject || this.constructor(null);
        },
        push: E,
        sort: [].sort,
        splice: [].splice,
      }),
        (e.fn.init.prototype = e.fn),
        (e.extend = e.fn.extend = function() {
          var a,
            c,
            d,
            f,
            g,
            h,
            i = arguments[0] || {},
            j = 1,
            k = arguments.length,
            l = !1;
          typeof i == 'boolean' && ((l = i), (i = arguments[1] || {}), (j = 2)),
            typeof i != 'object' && !e.isFunction(i) && (i = {}),
            k === j && ((i = this), --j);
          for (; j < k; j++)
            if ((a = arguments[j]) != null)
              for (c in a) {
                (d = i[c]), (f = a[c]);
                if (i === f) continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f)))
                  ? (g
                      ? ((g = !1), (h = d && e.isArray(d) ? d : []))
                      : (h = d && e.isPlainObject(d) ? d : {}),
                    (i[c] = e.extend(l, h, f)))
                  : f !== b && (i[c] = f);
              }
          return i;
        }),
        e.extend({
          noConflict: function(b) {
            a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
            return e;
          },
          isReady: !1,
          readyWait: 1,
          holdReady: function(a) {
            a ? e.readyWait++ : e.ready(!0);
          },
          ready: function(a) {
            if ((a === !0 && !--e.readyWait) || (a !== !0 && !e.isReady)) {
              if (!c.body) return setTimeout(e.ready, 1);
              e.isReady = !0;
              if (a !== !0 && --e.readyWait > 0) return;
              A.fireWith(c, [e]),
                e.fn.trigger &&
                  e(c)
                    .trigger('ready')
                    .off('ready');
            }
          },
          bindReady: function() {
            if (!A) {
              A = e.Callbacks('once memory');
              if (c.readyState === 'complete') return setTimeout(e.ready, 1);
              if (c.addEventListener)
                c.addEventListener('DOMContentLoaded', B, !1),
                  a.addEventListener('load', e.ready, !1);
              else if (c.attachEvent) {
                c.attachEvent('onreadystatechange', B),
                  a.attachEvent('onload', e.ready);
                var b = !1;
                try {
                  b = a.frameElement == null;
                } catch (d) {}
                c.documentElement.doScroll && b && J();
              }
            }
          },
          isFunction: function(a) {
            return e.type(a) === 'function';
          },
          isArray:
            Array.isArray ||
            function(a) {
              return e.type(a) === 'array';
            },
          isWindow: function(a) {
            return a != null && a == a.window;
          },
          isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
          },
          type: function(a) {
            return a == null ? String(a) : I[C.call(a)] || 'object';
          },
          isPlainObject: function(a) {
            if (!a || e.type(a) !== 'object' || a.nodeType || e.isWindow(a))
              return !1;
            try {
              if (
                a.constructor &&
                !D.call(a, 'constructor') &&
                !D.call(a.constructor.prototype, 'isPrototypeOf')
              )
                return !1;
            } catch (c) {
              return !1;
            }
            var d;
            for (d in a);
            return d === b || D.call(a, d);
          },
          isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0;
          },
          error: function(a) {
            throw new Error(a);
          },
          parseJSON: function(b) {
            if (typeof b != 'string' || !b) return null;
            b = e.trim(b);
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
            if (
              n.test(
                b
                  .replace(o, '@')
                  .replace(p, ']')
                  .replace(q, '')
              )
            )
              return new Function('return ' + b)();
            e.error('Invalid JSON: ' + b);
          },
          parseXML: function(c) {
            if (typeof c != 'string' || !c) return null;
            var d, f;
            try {
              a.DOMParser
                ? ((f = new DOMParser()),
                  (d = f.parseFromString(c, 'text/xml')))
                : ((d = new ActiveXObject('Microsoft.XMLDOM')),
                  (d.async = 'false'),
                  d.loadXML(c));
            } catch (g) {
              d = b;
            }
            (!d ||
              !d.documentElement ||
              d.getElementsByTagName('parsererror').length) &&
              e.error('Invalid XML: ' + c);
            return d;
          },
          noop: function() {},
          globalEval: function(b) {
            b &&
              j.test(b) &&
              (a.execScript ||
                function(b) {
                  a.eval.call(a, b);
                })(b);
          },
          camelCase: function(a) {
            return a.replace(w, 'ms-').replace(v, x);
          },
          nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
          },
          each: function(a, c, d) {
            var f,
              g = 0,
              h = a.length,
              i = h === b || e.isFunction(a);
            if (d) {
              if (i) {
                for (f in a) if (c.apply(a[f], d) === !1) break;
              } else for (; g < h; ) if (c.apply(a[g++], d) === !1) break;
            } else if (i) {
              for (f in a) if (c.call(a[f], f, a[f]) === !1) break;
            } else for (; g < h; ) if (c.call(a[g], g, a[g++]) === !1) break;
            return a;
          },
          trim: G
            ? function(a) {
                return a == null ? '' : G.call(a);
              }
            : function(a) {
                return a == null ? '' : (a + '').replace(k, '').replace(l, '');
              },
          makeArray: function(a, b) {
            var c = b || [];
            if (a != null) {
              var d = e.type(a);
              a.length == null ||
              d === 'string' ||
              d === 'function' ||
              d === 'regexp' ||
              e.isWindow(a)
                ? E.call(c, a)
                : e.merge(c, a);
            }
            return c;
          },
          inArray: function(a, b, c) {
            var d;
            if (b) {
              if (H) return H.call(b, a, c);
              (d = b.length), (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0);
              for (; c < d; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
          },
          merge: function(a, c) {
            var d = a.length,
              e = 0;
            if (typeof c.length == 'number')
              for (var f = c.length; e < f; e++) a[d++] = c[e];
            else while (c[e] !== b) a[d++] = c[e++];
            a.length = d;
            return a;
          },
          grep: function(a, b, c) {
            var d = [],
              e;
            c = !!c;
            for (var f = 0, g = a.length; f < g; f++)
              (e = !!b(a[f], f)), c !== e && d.push(a[f]);
            return d;
          },
          map: function(a, c, d) {
            var f,
              g,
              h = [],
              i = 0,
              j = a.length,
              k =
                a instanceof e ||
                (j !== b &&
                  typeof j == 'number' &&
                  ((j > 0 && a[0] && a[j - 1]) || j === 0 || e.isArray(a)));
            if (k)
              for (; i < j; i++)
                (f = c(a[i], i, d)), f != null && (h[h.length] = f);
            else
              for (g in a) (f = c(a[g], g, d)), f != null && (h[h.length] = f);
            return h.concat.apply([], h);
          },
          guid: 1,
          proxy: function(a, c) {
            if (typeof c == 'string') {
              var d = a[c];
              (c = a), (a = d);
            }
            if (!e.isFunction(a)) return b;
            var f = F.call(arguments, 2),
              g = function() {
                return a.apply(c, f.concat(F.call(arguments)));
              };
            g.guid = a.guid = a.guid || g.guid || e.guid++;
            return g;
          },
          access: function(a, c, d, f, g, h, i) {
            var j,
              k = d == null,
              l = 0,
              m = a.length;
            if (d && typeof d == 'object') {
              for (l in d) e.access(a, c, l, d[l], 1, h, f);
              g = 1;
            } else if (f !== b) {
              (j = i === b && e.isFunction(f)),
                k &&
                  (j
                    ? ((j = c),
                      (c = function(a, b, c) {
                        return j.call(e(a), c);
                      }))
                    : (c.call(a, f), (c = null)));
              if (c)
                for (; l < m; l++)
                  c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
              g = 1;
            }
            return g ? a : k ? c.call(a) : m ? c(a[0], d) : h;
          },
          now: function() {
            return new Date().getTime();
          },
          uaMatch: function(a) {
            a = a.toLowerCase();
            var b =
              r.exec(a) ||
              s.exec(a) ||
              t.exec(a) ||
              (a.indexOf('compatible') < 0 && u.exec(a)) ||
              [];
            return { browser: b[1] || '', version: b[2] || '0' };
          },
          sub: function() {
            function a(b, c) {
              return new a.fn.init(b, c);
            }
            e.extend(!0, a, this),
              (a.superclass = this),
              (a.fn = a.prototype = this()),
              (a.fn.constructor = a),
              (a.sub = this.sub),
              (a.fn.init = function(d, f) {
                f && f instanceof e && !(f instanceof a) && (f = a(f));
                return e.fn.init.call(this, d, f, b);
              }),
              (a.fn.init.prototype = a.fn);
            var b = a(c);
            return a;
          },
          browser: {},
        }),
        e.each(
          'Boolean Number String Function Array Date RegExp Object'.split(' '),
          function(a, b) {
            I['[object ' + b + ']'] = b.toLowerCase();
          }
        ),
        (z = e.uaMatch(y)),
        z.browser &&
          ((e.browser[z.browser] = !0), (e.browser.version = z.version)),
        e.browser.webkit && (e.browser.safari = !0),
        j.test(' ') && ((k = /^[\s\xA0]+/), (l = /[\s\xA0]+$/)),
        (h = e(c)),
        c.addEventListener
          ? (B = function() {
              c.removeEventListener('DOMContentLoaded', B, !1), e.ready();
            })
          : c.attachEvent &&
            (B = function() {
              c.readyState === 'complete' &&
                (c.detachEvent('onreadystatechange', B), e.ready());
            });
      return e;
    })(),
    g = {};
  f.Callbacks = function(a) {
    a = a ? g[a] || h(a) : {};
    var c = [],
      d = [],
      e,
      i,
      j,
      k,
      l,
      m,
      n = function(b) {
        var d, e, g, h, i;
        for (d = 0, e = b.length; d < e; d++)
          (g = b[d]),
            (h = f.type(g)),
            h === 'array'
              ? n(g)
              : h === 'function' && (!a.unique || !p.has(g)) && c.push(g);
      },
      o = function(b, f) {
        (f = f || []),
          (e = !a.memory || [b, f]),
          (i = !0),
          (j = !0),
          (m = k || 0),
          (k = 0),
          (l = c.length);
        for (; c && m < l; m++)
          if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
            e = !0;
            break;
          }
        (j = !1),
          c &&
            (a.once
              ? e === !0
                ? p.disable()
                : (c = [])
              : d && d.length && ((e = d.shift()), p.fireWith(e[0], e[1])));
      },
      p = {
        add: function() {
          if (c) {
            var a = c.length;
            n(arguments),
              j ? (l = c.length) : e && e !== !0 && ((k = a), o(e[0], e[1]));
          }
          return this;
        },
        remove: function() {
          if (c) {
            var b = arguments,
              d = 0,
              e = b.length;
            for (; d < e; d++)
              for (var f = 0; f < c.length; f++)
                if (b[d] === c[f]) {
                  j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                  if (a.unique) break;
                }
          }
          return this;
        },
        has: function(a) {
          if (c) {
            var b = 0,
              d = c.length;
            for (; b < d; b++) if (a === c[b]) return !0;
          }
          return !1;
        },
        empty: function() {
          c = [];
          return this;
        },
        disable: function() {
          c = d = e = b;
          return this;
        },
        disabled: function() {
          return !c;
        },
        lock: function() {
          (d = b), (!e || e === !0) && p.disable();
          return this;
        },
        locked: function() {
          return !d;
        },
        fireWith: function(b, c) {
          d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
          return this;
        },
        fire: function() {
          p.fireWith(this, arguments);
          return this;
        },
        fired: function() {
          return !!i;
        },
      };
    return p;
  };
  var i = [].slice;
  f.extend({
    Deferred: function(a) {
      var b = f.Callbacks('once memory'),
        c = f.Callbacks('once memory'),
        d = f.Callbacks('memory'),
        e = 'pending',
        g = { resolve: b, reject: c, notify: d },
        h = {
          done: b.add,
          fail: c.add,
          progress: d.add,
          state: function() {
            return e;
          },
          isResolved: b.fired,
          isRejected: c.fired,
          then: function(a, b, c) {
            i.done(a)
              .fail(b)
              .progress(c);
            return this;
          },
          always: function() {
            i.done.apply(i, arguments).fail.apply(i, arguments);
            return this;
          },
          pipe: function(a, b, c) {
            return f
              .Deferred(function(d) {
                f.each(
                  {
                    done: [a, 'resolve'],
                    fail: [b, 'reject'],
                    progress: [c, 'notify'],
                  },
                  function(a, b) {
                    var c = b[0],
                      e = b[1],
                      g;
                    f.isFunction(c)
                      ? i[a](function() {
                          (g = c.apply(this, arguments)),
                            g && f.isFunction(g.promise)
                              ? g.promise().then(d.resolve, d.reject, d.notify)
                              : d[e + 'With'](this === i ? d : this, [g]);
                        })
                      : i[a](d[e]);
                  }
                );
              })
              .promise();
          },
          promise: function(a) {
            if (a == null) a = h;
            else for (var b in h) a[b] = h[b];
            return a;
          },
        },
        i = h.promise({}),
        j;
      for (j in g) (i[j] = g[j].fire), (i[j + 'With'] = g[j].fireWith);
      i
        .done(
          function() {
            e = 'resolved';
          },
          c.disable,
          d.lock
        )
        .fail(
          function() {
            e = 'rejected';
          },
          b.disable,
          d.lock
        ),
        a && a.call(i, i);
      return i;
    },
    when: function(a) {
      function m(a) {
        return function(b) {
          (e[a] = arguments.length > 1 ? i.call(arguments, 0) : b),
            j.notifyWith(k, e);
        };
      }
      function l(a) {
        return function(c) {
          (b[a] = arguments.length > 1 ? i.call(arguments, 0) : c),
            --g || j.resolveWith(j, b);
        };
      }
      var b = i.call(arguments, 0),
        c = 0,
        d = b.length,
        e = Array(d),
        g = d,
        h = d,
        j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
        k = j.promise();
      if (d > 1) {
        for (; c < d; c++)
          b[c] && b[c].promise && f.isFunction(b[c].promise)
            ? b[c].promise().then(l(c), j.reject, m(c))
            : --g;
        g || j.resolveWith(j, b);
      } else j !== a && j.resolveWith(j, d ? [a] : []);
      return k;
    },
  }),
    (f.support = (function() {
      var b,
        d,
        e,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p = c.createElement('div'),
        q = c.documentElement;
      p.setAttribute('className', 't'),
        (p.innerHTML =
          "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>"),
        (d = p.getElementsByTagName('*')),
        (e = p.getElementsByTagName('a')[0]);
      if (!d || !d.length || !e) return {};
      (g = c.createElement('select')),
        (h = g.appendChild(c.createElement('option'))),
        (i = p.getElementsByTagName('input')[0]),
        (b = {
          leadingWhitespace: p.firstChild.nodeType === 3,
          tbody: !p.getElementsByTagName('tbody').length,
          htmlSerialize: !!p.getElementsByTagName('link').length,
          style: /top/.test(e.getAttribute('style')),
          hrefNormalized: e.getAttribute('href') === '/a',
          opacity: /^0.55/.test(e.style.opacity),
          cssFloat: !!e.style.cssFloat,
          checkOn: i.value === 'on',
          optSelected: h.selected,
          getSetAttribute: p.className !== 't',
          enctype: !!c.createElement('form').enctype,
          html5Clone:
            c.createElement('nav').cloneNode(!0).outerHTML !== '<:nav></:nav>',
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          pixelMargin: !0,
        }),
        (f.boxModel = b.boxModel = c.compatMode === 'CSS1Compat'),
        (i.checked = !0),
        (b.noCloneChecked = i.cloneNode(!0).checked),
        (g.disabled = !0),
        (b.optDisabled = !h.disabled);
      try {
        delete p.test;
      } catch (r) {
        b.deleteExpando = !1;
      }
      !p.addEventListener &&
        p.attachEvent &&
        p.fireEvent &&
        (p.attachEvent('onclick', function() {
          b.noCloneEvent = !1;
        }),
        p.cloneNode(!0).fireEvent('onclick')),
        (i = c.createElement('input')),
        (i.value = 't'),
        i.setAttribute('type', 'radio'),
        (b.radioValue = i.value === 't'),
        i.setAttribute('checked', 'checked'),
        i.setAttribute('name', 't'),
        p.appendChild(i),
        (j = c.createDocumentFragment()),
        j.appendChild(p.lastChild),
        (b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = i.checked),
        j.removeChild(i),
        j.appendChild(p);
      if (p.attachEvent)
        for (n in { submit: 1, change: 1, focusin: 1 })
          (m = 'on' + n),
            (o = m in p),
            o ||
              (p.setAttribute(m, 'return;'), (o = typeof p[m] == 'function')),
            (b[n + 'Bubbles'] = o);
      j.removeChild(p),
        (j = g = h = p = i = null),
        f(function() {
          var d,
            e,
            g,
            h,
            i,
            j,
            l,
            m,
            n,
            q,
            r,
            s,
            t,
            u = c.getElementsByTagName('body')[0];
          !u ||
            ((m = 1),
            (t = 'padding:0;margin:0;border:'),
            (r = 'position:absolute;top:0;left:0;width:1px;height:1px;'),
            (s = t + '0;visibility:hidden;'),
            (n = "style='" + r + t + '5px solid #000;'),
            (q =
              '<div ' +
              n +
              "display:block;'><div style='" +
              t +
              "0;display:block;overflow:hidden;'></div></div>" +
              '<table ' +
              n +
              "' cellpadding='0' cellspacing='0'>" +
              '<tr><td></td></tr></table>'),
            (d = c.createElement('div')),
            (d.style.cssText =
              s +
              'width:0;height:0;position:static;top:0;margin-top:' +
              m +
              'px'),
            u.insertBefore(d, u.firstChild),
            (p = c.createElement('div')),
            d.appendChild(p),
            (p.innerHTML =
              "<table><tr><td style='" +
              t +
              "0;display:none'></td><td>t</td></tr></table>"),
            (k = p.getElementsByTagName('td')),
            (o = k[0].offsetHeight === 0),
            (k[0].style.display = ''),
            (k[1].style.display = 'none'),
            (b.reliableHiddenOffsets = o && k[0].offsetHeight === 0),
            a.getComputedStyle &&
              ((p.innerHTML = ''),
              (l = c.createElement('div')),
              (l.style.width = '0'),
              (l.style.marginRight = '0'),
              (p.style.width = '2px'),
              p.appendChild(l),
              (b.reliableMarginRight =
                (parseInt(
                  (a.getComputedStyle(l, null) || { marginRight: 0 })
                    .marginRight,
                  10
                ) || 0) === 0)),
            typeof p.style.zoom != 'undefined' &&
              ((p.innerHTML = ''),
              (p.style.width = p.style.padding = '1px'),
              (p.style.border = 0),
              (p.style.overflow = 'hidden'),
              (p.style.display = 'inline'),
              (p.style.zoom = 1),
              (b.inlineBlockNeedsLayout = p.offsetWidth === 3),
              (p.style.display = 'block'),
              (p.style.overflow = 'visible'),
              (p.innerHTML = "<div style='width:5px;'></div>"),
              (b.shrinkWrapBlocks = p.offsetWidth !== 3)),
            (p.style.cssText = r + s),
            (p.innerHTML = q),
            (e = p.firstChild),
            (g = e.firstChild),
            (i = e.nextSibling.firstChild.firstChild),
            (j = {
              doesNotAddBorder: g.offsetTop !== 5,
              doesAddBorderForTableAndCells: i.offsetTop === 5,
            }),
            (g.style.position = 'fixed'),
            (g.style.top = '20px'),
            (j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15),
            (g.style.position = g.style.top = ''),
            (e.style.overflow = 'hidden'),
            (e.style.position = 'relative'),
            (j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5),
            (j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m),
            a.getComputedStyle &&
              ((p.style.marginTop = '1%'),
              (b.pixelMargin =
                (a.getComputedStyle(p, null) || { marginTop: 0 }).marginTop !==
                '1%')),
            typeof d.style.zoom != 'undefined' && (d.style.zoom = 1),
            u.removeChild(d),
            (l = p = d = null),
            f.extend(b, j));
        });
      return b;
    })());
  var j = /^(?:\{.*\}|\[.*\])$/,
    k = /([A-Z])/g;
  f.extend({
    cache: {},
    uuid: 0,
    expando: 'jQuery' + (f.fn.jquery + Math.random()).replace(/\D/g, ''),
    noData: {
      embed: !0,
      object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
      applet: !0,
    },
    hasData: function(a) {
      a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
      return !!a && !m(a);
    },
    data: function(a, c, d, e) {
      if (!!f.acceptData(a)) {
        var g,
          h,
          i,
          j = f.expando,
          k = typeof c == 'string',
          l = a.nodeType,
          m = l ? f.cache : a,
          n = l ? a[j] : a[j] && j,
          o = c === 'events';
        if ((!n || !m[n] || (!o && !e && !m[n].data)) && k && d === b) return;
        n || (l ? (a[j] = n = ++f.uuid) : (n = j)),
          m[n] || ((m[n] = {}), l || (m[n].toJSON = f.noop));
        if (typeof c == 'object' || typeof c == 'function')
          e ? (m[n] = f.extend(m[n], c)) : (m[n].data = f.extend(m[n].data, c));
        (g = h = m[n]),
          e || (h.data || (h.data = {}), (h = h.data)),
          d !== b && (h[f.camelCase(c)] = d);
        if (o && !h[c]) return g.events;
        k ? ((i = h[c]), i == null && (i = h[f.camelCase(c)])) : (i = h);
        return i;
      }
    },
    removeData: function(a, b, c) {
      if (!!f.acceptData(a)) {
        var d,
          e,
          g,
          h = f.expando,
          i = a.nodeType,
          j = i ? f.cache : a,
          k = i ? a[h] : h;
        if (!j[k]) return;
        if (b) {
          d = c ? j[k] : j[k].data;
          if (d) {
            f.isArray(b) ||
              (b in d
                ? (b = [b])
                : ((b = f.camelCase(b)),
                  b in d ? (b = [b]) : (b = b.split(' '))));
            for (e = 0, g = b.length; e < g; e++) delete d[b[e]];
            if (!(c ? m : f.isEmptyObject)(d)) return;
          }
        }
        if (!c) {
          delete j[k].data;
          if (!m(j[k])) return;
        }
        f.support.deleteExpando || !j.setInterval ? delete j[k] : (j[k] = null),
          i &&
            (f.support.deleteExpando
              ? delete a[h]
              : a.removeAttribute
              ? a.removeAttribute(h)
              : (a[h] = null));
      }
    },
    _data: function(a, b, c) {
      return f.data(a, b, c, !0);
    },
    acceptData: function(a) {
      if (a.nodeName) {
        var b = f.noData[a.nodeName.toLowerCase()];
        if (b) return b !== !0 && a.getAttribute('classid') === b;
      }
      return !0;
    },
  }),
    f.fn.extend({
      data: function(a, c) {
        var d,
          e,
          g,
          h,
          i,
          j = this[0],
          k = 0,
          m = null;
        if (a === b) {
          if (this.length) {
            m = f.data(j);
            if (j.nodeType === 1 && !f._data(j, 'parsedAttrs')) {
              g = j.attributes;
              for (i = g.length; k < i; k++)
                (h = g[k].name),
                  h.indexOf('data-') === 0 &&
                    ((h = f.camelCase(h.substring(5))), l(j, h, m[h]));
              f._data(j, 'parsedAttrs', !0);
            }
          }
          return m;
        }
        if (typeof a == 'object')
          return this.each(function() {
            f.data(this, a);
          });
        (d = a.split('.', 2)),
          (d[1] = d[1] ? '.' + d[1] : ''),
          (e = d[1] + '!');
        return f.access(
          this,
          function(c) {
            if (c === b) {
              (m = this.triggerHandler('getData' + e, [d[0]])),
                m === b && j && ((m = f.data(j, a)), (m = l(j, a, m)));
              return m === b && d[1] ? this.data(d[0]) : m;
            }
            (d[1] = c),
              this.each(function() {
                var b = f(this);
                b.triggerHandler('setData' + e, d),
                  f.data(this, a, c),
                  b.triggerHandler('changeData' + e, d);
              });
          },
          null,
          c,
          arguments.length > 1,
          null,
          !1
        );
      },
      removeData: function(a) {
        return this.each(function() {
          f.removeData(this, a);
        });
      },
    }),
    f.extend({
      _mark: function(a, b) {
        a &&
          ((b = (b || 'fx') + 'mark'), f._data(a, b, (f._data(a, b) || 0) + 1));
      },
      _unmark: function(a, b, c) {
        a !== !0 && ((c = b), (b = a), (a = !1));
        if (b) {
          c = c || 'fx';
          var d = c + 'mark',
            e = a ? 0 : (f._data(b, d) || 1) - 1;
          e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, 'mark'));
        }
      },
      queue: function(a, b, c) {
        var d;
        if (a) {
          (b = (b || 'fx') + 'queue'),
            (d = f._data(a, b)),
            c &&
              (!d || f.isArray(c)
                ? (d = f._data(a, b, f.makeArray(c)))
                : d.push(c));
          return d || [];
        }
      },
      dequeue: function(a, b) {
        b = b || 'fx';
        var c = f.queue(a, b),
          d = c.shift(),
          e = {};
        d === 'inprogress' && (d = c.shift()),
          d &&
            (b === 'fx' && c.unshift('inprogress'),
            f._data(a, b + '.run', e),
            d.call(
              a,
              function() {
                f.dequeue(a, b);
              },
              e
            )),
          c.length ||
            (f.removeData(a, b + 'queue ' + b + '.run', !0), n(a, b, 'queue'));
      },
    }),
    f.fn.extend({
      queue: function(a, c) {
        var d = 2;
        typeof a != 'string' && ((c = a), (a = 'fx'), d--);
        if (arguments.length < d) return f.queue(this[0], a);
        return c === b
          ? this
          : this.each(function() {
              var b = f.queue(this, a, c);
              a === 'fx' && b[0] !== 'inprogress' && f.dequeue(this, a);
            });
      },
      dequeue: function(a) {
        return this.each(function() {
          f.dequeue(this, a);
        });
      },
      delay: function(a, b) {
        (a = f.fx ? f.fx.speeds[a] || a : a), (b = b || 'fx');
        return this.queue(b, function(b, c) {
          var d = setTimeout(b, a);
          c.stop = function() {
            clearTimeout(d);
          };
        });
      },
      clearQueue: function(a) {
        return this.queue(a || 'fx', []);
      },
      promise: function(a, c) {
        function m() {
          --h || d.resolveWith(e, [e]);
        }
        typeof a != 'string' && ((c = a), (a = b)), (a = a || 'fx');
        var d = f.Deferred(),
          e = this,
          g = e.length,
          h = 1,
          i = a + 'defer',
          j = a + 'queue',
          k = a + 'mark',
          l;
        while (g--)
          if (
            (l =
              f.data(e[g], i, b, !0) ||
              ((f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) &&
                f.data(e[g], i, f.Callbacks('once memory'), !0)))
          )
            h++, l.add(m);
        m();
        return d.promise(c);
      },
    });
  var o = /[\n\t\r]/g,
    p = /\s+/,
    q = /\r/g,
    r = /^(?:button|input)$/i,
    s = /^(?:button|input|object|select|textarea)$/i,
    t = /^a(?:rea)?$/i,
    u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    v = f.support.getSetAttribute,
    w,
    x,
    y;
  f.fn.extend({
    attr: function(a, b) {
      return f.access(this, f.attr, a, b, arguments.length > 1);
    },
    removeAttr: function(a) {
      return this.each(function() {
        f.removeAttr(this, a);
      });
    },
    prop: function(a, b) {
      return f.access(this, f.prop, a, b, arguments.length > 1);
    },
    removeProp: function(a) {
      a = f.propFix[a] || a;
      return this.each(function() {
        try {
          (this[a] = b), delete this[a];
        } catch (c) {}
      });
    },
    addClass: function(a) {
      var b, c, d, e, g, h, i;
      if (f.isFunction(a))
        return this.each(function(b) {
          f(this).addClass(a.call(this, b, this.className));
        });
      if (a && typeof a == 'string') {
        b = a.split(p);
        for (c = 0, d = this.length; c < d; c++) {
          e = this[c];
          if (e.nodeType === 1)
            if (!e.className && b.length === 1) e.className = a;
            else {
              g = ' ' + e.className + ' ';
              for (h = 0, i = b.length; h < i; h++)
                ~g.indexOf(' ' + b[h] + ' ') || (g += b[h] + ' ');
              e.className = f.trim(g);
            }
        }
      }
      return this;
    },
    removeClass: function(a) {
      var c, d, e, g, h, i, j;
      if (f.isFunction(a))
        return this.each(function(b) {
          f(this).removeClass(a.call(this, b, this.className));
        });
      if ((a && typeof a == 'string') || a === b) {
        c = (a || '').split(p);
        for (d = 0, e = this.length; d < e; d++) {
          g = this[d];
          if (g.nodeType === 1 && g.className)
            if (a) {
              h = (' ' + g.className + ' ').replace(o, ' ');
              for (i = 0, j = c.length; i < j; i++)
                h = h.replace(' ' + c[i] + ' ', ' ');
              g.className = f.trim(h);
            } else g.className = '';
        }
      }
      return this;
    },
    toggleClass: function(a, b) {
      var c = typeof a,
        d = typeof b == 'boolean';
      if (f.isFunction(a))
        return this.each(function(c) {
          f(this).toggleClass(a.call(this, c, this.className, b), b);
        });
      return this.each(function() {
        if (c === 'string') {
          var e,
            g = 0,
            h = f(this),
            i = b,
            j = a.split(p);
          while ((e = j[g++]))
            (i = d ? i : !h.hasClass(e)), h[i ? 'addClass' : 'removeClass'](e);
        } else if (c === 'undefined' || c === 'boolean') this.className && f._data(this, '__className__', this.className), (this.className = this.className || a === !1 ? '' : f._data(this, '__className__') || '');
      });
    },
    hasClass: function(a) {
      var b = ' ' + a + ' ',
        c = 0,
        d = this.length;
      for (; c < d; c++)
        if (
          this[c].nodeType === 1 &&
          (' ' + this[c].className + ' ').replace(o, ' ').indexOf(b) > -1
        )
          return !0;
      return !1;
    },
    val: function(a) {
      var c,
        d,
        e,
        g = this[0];
      {
        if (!!arguments.length) {
          e = f.isFunction(a);
          return this.each(function(d) {
            var g = f(this),
              h;
            if (this.nodeType === 1) {
              e ? (h = a.call(this, d, g.val())) : (h = a),
                h == null
                  ? (h = '')
                  : typeof h == 'number'
                  ? (h += '')
                  : f.isArray(h) &&
                    (h = f.map(h, function(a) {
                      return a == null ? '' : a + '';
                    })),
                (c =
                  f.valHooks[this.type] ||
                  f.valHooks[this.nodeName.toLowerCase()]);
              if (!c || !('set' in c) || c.set(this, h, 'value') === b)
                this.value = h;
            }
          });
        }
        if (g) {
          c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
          if (c && 'get' in c && (d = c.get(g, 'value')) !== b) return d;
          d = g.value;
          return typeof d == 'string' ? d.replace(q, '') : d == null ? '' : d;
        }
      }
    },
  }),
    f.extend({
      valHooks: {
        option: {
          get: function(a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text;
          },
        },
        select: {
          get: function(a) {
            var b,
              c,
              d,
              e,
              g = a.selectedIndex,
              h = [],
              i = a.options,
              j = a.type === 'select-one';
            if (g < 0) return null;
            (c = j ? g : 0), (d = j ? g + 1 : i.length);
            for (; c < d; c++) {
              e = i[c];
              if (
                e.selected &&
                (f.support.optDisabled
                  ? !e.disabled
                  : e.getAttribute('disabled') === null) &&
                (!e.parentNode.disabled ||
                  !f.nodeName(e.parentNode, 'optgroup'))
              ) {
                b = f(e).val();
                if (j) return b;
                h.push(b);
              }
            }
            if (j && !h.length && i.length) return f(i[g]).val();
            return h;
          },
          set: function(a, b) {
            var c = f.makeArray(b);
            f(a)
              .find('option')
              .each(function() {
                this.selected = f.inArray(f(this).val(), c) >= 0;
              }),
              c.length || (a.selectedIndex = -1);
            return c;
          },
        },
      },
      attrFn: {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
      },
      attr: function(a, c, d, e) {
        var g,
          h,
          i,
          j = a.nodeType;
        if (!!a && j !== 3 && j !== 8 && j !== 2) {
          if (e && c in f.attrFn) return f(a)[c](d);
          if (typeof a.getAttribute == 'undefined') return f.prop(a, c, d);
          (i = j !== 1 || !f.isXMLDoc(a)),
            i &&
              ((c = c.toLowerCase()),
              (h = f.attrHooks[c] || (u.test(c) ? x : w)));
          if (d !== b) {
            if (d === null) {
              f.removeAttr(a, c);
              return;
            }
            if (h && 'set' in h && i && (g = h.set(a, d, c)) !== b) return g;
            a.setAttribute(c, '' + d);
            return d;
          }
          if (h && 'get' in h && i && (g = h.get(a, c)) !== null) return g;
          g = a.getAttribute(c);
          return g === null ? b : g;
        }
      },
      removeAttr: function(a, b) {
        var c,
          d,
          e,
          g,
          h,
          i = 0;
        if (b && a.nodeType === 1) {
          (d = b.toLowerCase().split(p)), (g = d.length);
          for (; i < g; i++)
            (e = d[i]),
              e &&
                ((c = f.propFix[e] || e),
                (h = u.test(e)),
                h || f.attr(a, e, ''),
                a.removeAttribute(v ? e : c),
                h && c in a && (a[c] = !1));
        }
      },
      attrHooks: {
        type: {
          set: function(a, b) {
            if (r.test(a.nodeName) && a.parentNode)
              f.error("type property can't be changed");
            else if (
              !f.support.radioValue &&
              b === 'radio' &&
              f.nodeName(a, 'input')
            ) {
              var c = a.value;
              a.setAttribute('type', b), c && (a.value = c);
              return b;
            }
          },
        },
        value: {
          get: function(a, b) {
            if (w && f.nodeName(a, 'button')) return w.get(a, b);
            return b in a ? a.value : null;
          },
          set: function(a, b, c) {
            if (w && f.nodeName(a, 'button')) return w.set(a, b, c);
            a.value = b;
          },
        },
      },
      propFix: {
        tabindex: 'tabIndex',
        readonly: 'readOnly',
        for: 'htmlFor',
        class: 'className',
        maxlength: 'maxLength',
        cellspacing: 'cellSpacing',
        cellpadding: 'cellPadding',
        rowspan: 'rowSpan',
        colspan: 'colSpan',
        usemap: 'useMap',
        frameborder: 'frameBorder',
        contenteditable: 'contentEditable',
      },
      prop: function(a, c, d) {
        var e,
          g,
          h,
          i = a.nodeType;
        if (!!a && i !== 3 && i !== 8 && i !== 2) {
          (h = i !== 1 || !f.isXMLDoc(a)),
            h && ((c = f.propFix[c] || c), (g = f.propHooks[c]));
          return d !== b
            ? g && 'set' in g && (e = g.set(a, d, c)) !== b
              ? e
              : (a[c] = d)
            : g && 'get' in g && (e = g.get(a, c)) !== null
            ? e
            : a[c];
        }
      },
      propHooks: {
        tabIndex: {
          get: function(a) {
            var c = a.getAttributeNode('tabindex');
            return c && c.specified
              ? parseInt(c.value, 10)
              : s.test(a.nodeName) || (t.test(a.nodeName) && a.href)
              ? 0
              : b;
          },
        },
      },
    }),
    (f.attrHooks.tabindex = f.propHooks.tabIndex),
    (x = {
      get: function(a, c) {
        var d,
          e = f.prop(a, c);
        return e === !0 ||
          (typeof e != 'boolean' &&
            (d = a.getAttributeNode(c)) &&
            d.nodeValue !== !1)
          ? c.toLowerCase()
          : b;
      },
      set: function(a, b, c) {
        var d;
        b === !1
          ? f.removeAttr(a, c)
          : ((d = f.propFix[c] || c),
            d in a && (a[d] = !0),
            a.setAttribute(c, c.toLowerCase()));
        return c;
      },
    }),
    v ||
      ((y = { name: !0, id: !0, coords: !0 }),
      (w = f.valHooks.button = {
        get: function(a, c) {
          var d;
          d = a.getAttributeNode(c);
          return d && (y[c] ? d.nodeValue !== '' : d.specified)
            ? d.nodeValue
            : b;
        },
        set: function(a, b, d) {
          var e = a.getAttributeNode(d);
          e || ((e = c.createAttribute(d)), a.setAttributeNode(e));
          return (e.nodeValue = b + '');
        },
      }),
      (f.attrHooks.tabindex.set = w.set),
      f.each(['width', 'height'], function(a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
          set: function(a, c) {
            if (c === '') {
              a.setAttribute(b, 'auto');
              return c;
            }
          },
        });
      }),
      (f.attrHooks.contenteditable = {
        get: w.get,
        set: function(a, b, c) {
          b === '' && (b = 'false'), w.set(a, b, c);
        },
      })),
    f.support.hrefNormalized ||
      f.each(['href', 'src', 'width', 'height'], function(a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
          get: function(a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d;
          },
        });
      }),
    f.support.style ||
      (f.attrHooks.style = {
        get: function(a) {
          return a.style.cssText.toLowerCase() || b;
        },
        set: function(a, b) {
          return (a.style.cssText = '' + b);
        },
      }),
    f.support.optSelected ||
      (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function(a) {
          var b = a.parentNode;
          b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
          return null;
        },
      })),
    f.support.enctype || (f.propFix.enctype = 'encoding'),
    f.support.checkOn ||
      f.each(['radio', 'checkbox'], function() {
        f.valHooks[this] = {
          get: function(a) {
            return a.getAttribute('value') === null ? 'on' : a.value;
          },
        };
      }),
    f.each(['radio', 'checkbox'], function() {
      f.valHooks[this] = f.extend(f.valHooks[this], {
        set: function(a, b) {
          if (f.isArray(b)) return (a.checked = f.inArray(f(a).val(), b) >= 0);
        },
      });
    });
  var z = /^(?:textarea|input|select)$/i,
    A = /^([^\.]*)?(?:\.(.+))?$/,
    B = /(?:^|\s)hover(\.\S+)?\b/,
    C = /^key/,
    D = /^(?:mouse|contextmenu)|click/,
    E = /^(?:focusinfocus|focusoutblur)$/,
    F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    G = function(a) {
      var b = F.exec(a);
      b &&
        ((b[1] = (b[1] || '').toLowerCase()),
        (b[3] = b[3] && new RegExp('(?:^|\\s)' + b[3] + '(?:\\s|$)')));
      return b;
    },
    H = function(a, b) {
      var c = a.attributes || {};
      return (
        (!b[1] || a.nodeName.toLowerCase() === b[1]) &&
        (!b[2] || (c.id || {}).value === b[2]) &&
        (!b[3] || b[3].test((c['class'] || {}).value))
      );
    },
    I = function(a) {
      return f.event.special.hover
        ? a
        : a.replace(B, 'mouseenter$1 mouseleave$1');
    };
  (f.event = {
    add: function(a, c, d, e, g) {
      var h, i, j, k, l, m, n, o, p, q, r, s;
      if (
        !(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))
      ) {
        d.handler && ((p = d), (d = p.handler), (g = p.selector)),
          d.guid || (d.guid = f.guid++),
          (j = h.events),
          j || (h.events = j = {}),
          (i = h.handle),
          i ||
            ((h.handle = i = function(a) {
              return typeof f != 'undefined' &&
                (!a || f.event.triggered !== a.type)
                ? f.event.dispatch.apply(i.elem, arguments)
                : b;
            }),
            (i.elem = a)),
          (c = f.trim(I(c)).split(' '));
        for (k = 0; k < c.length; k++) {
          (l = A.exec(c[k]) || []),
            (m = l[1]),
            (n = (l[2] || '').split('.').sort()),
            (s = f.event.special[m] || {}),
            (m = (g ? s.delegateType : s.bindType) || m),
            (s = f.event.special[m] || {}),
            (o = f.extend(
              {
                type: m,
                origType: l[1],
                data: e,
                handler: d,
                guid: d.guid,
                selector: g,
                quick: g && G(g),
                namespace: n.join('.'),
              },
              p
            )),
            (r = j[m]);
          if (!r) {
            (r = j[m] = []), (r.delegateCount = 0);
            if (!s.setup || s.setup.call(a, e, n, i) === !1)
              a.addEventListener
                ? a.addEventListener(m, i, !1)
                : a.attachEvent && a.attachEvent('on' + m, i);
          }
          s.add &&
            (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)),
            g ? r.splice(r.delegateCount++, 0, o) : r.push(o),
            (f.event.global[m] = !0);
        }
        a = null;
      }
    },
    global: {},
    remove: function(a, b, c, d, e) {
      var g = f.hasData(a) && f._data(a),
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s;
      if (!!g && !!(o = g.events)) {
        b = f.trim(I(b || '')).split(' ');
        for (h = 0; h < b.length; h++) {
          (i = A.exec(b[h]) || []), (j = k = i[1]), (l = i[2]);
          if (!j) {
            for (j in o) f.event.remove(a, j + b[h], c, d, !0);
            continue;
          }
          (p = f.event.special[j] || {}),
            (j = (d ? p.delegateType : p.bindType) || j),
            (r = o[j] || []),
            (m = r.length),
            (l = l
              ? new RegExp(
                  '(^|\\.)' +
                    l
                      .split('.')
                      .sort()
                      .join('\\.(?:.*\\.)?') +
                    '(\\.|$)'
                )
              : null);
          for (n = 0; n < r.length; n++)
            (s = r[n]),
              (e || k === s.origType) &&
                (!c || c.guid === s.guid) &&
                (!l || l.test(s.namespace)) &&
                (!d || d === s.selector || (d === '**' && s.selector)) &&
                (r.splice(n--, 1),
                s.selector && r.delegateCount--,
                p.remove && p.remove.call(a, s));
          r.length === 0 &&
            m !== r.length &&
            ((!p.teardown || p.teardown.call(a, l) === !1) &&
              f.removeEvent(a, j, g.handle),
            delete o[j]);
        }
        f.isEmptyObject(o) &&
          ((q = g.handle),
          q && (q.elem = null),
          f.removeData(a, ['events', 'handle'], !0));
      }
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function(c, d, e, g) {
      if (!e || (e.nodeType !== 3 && e.nodeType !== 8)) {
        var h = c.type || c,
          i = [],
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s;
        if (E.test(h + f.event.triggered)) return;
        h.indexOf('!') >= 0 && ((h = h.slice(0, -1)), (k = !0)),
          h.indexOf('.') >= 0 &&
            ((i = h.split('.')), (h = i.shift()), i.sort());
        if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
        (c =
          typeof c == 'object'
            ? c[f.expando]
              ? c
              : new f.Event(h, c)
            : new f.Event(h)),
          (c.type = h),
          (c.isTrigger = !0),
          (c.exclusive = k),
          (c.namespace = i.join('.')),
          (c.namespace_re = c.namespace
            ? new RegExp('(^|\\.)' + i.join('\\.(?:.*\\.)?') + '(\\.|$)')
            : null),
          (o = h.indexOf(':') < 0 ? 'on' + h : '');
        if (!e) {
          j = f.cache;
          for (l in j)
            j[l].events &&
              j[l].events[h] &&
              f.event.trigger(c, d, j[l].handle.elem, !0);
          return;
        }
        (c.result = b),
          c.target || (c.target = e),
          (d = d != null ? f.makeArray(d) : []),
          d.unshift(c),
          (p = f.event.special[h] || {});
        if (p.trigger && p.trigger.apply(e, d) === !1) return;
        r = [[e, p.bindType || h]];
        if (!g && !p.noBubble && !f.isWindow(e)) {
          (s = p.delegateType || h),
            (m = E.test(s + h) ? e : e.parentNode),
            (n = null);
          for (; m; m = m.parentNode) r.push([m, s]), (n = m);
          n &&
            n === e.ownerDocument &&
            r.push([n.defaultView || n.parentWindow || a, s]);
        }
        for (l = 0; l < r.length && !c.isPropagationStopped(); l++)
          (m = r[l][0]),
            (c.type = r[l][1]),
            (q = (f._data(m, 'events') || {})[c.type] && f._data(m, 'handle')),
            q && q.apply(m, d),
            (q = o && m[o]),
            q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
        (c.type = h),
          !g &&
            !c.isDefaultPrevented() &&
            (!p._default || p._default.apply(e.ownerDocument, d) === !1) &&
            (h !== 'click' || !f.nodeName(e, 'a')) &&
            f.acceptData(e) &&
            o &&
            e[h] &&
            ((h !== 'focus' && h !== 'blur') || c.target.offsetWidth !== 0) &&
            !f.isWindow(e) &&
            ((n = e[o]),
            n && (e[o] = null),
            (f.event.triggered = h),
            e[h](),
            (f.event.triggered = b),
            n && (e[o] = n));
        return c.result;
      }
    },
    dispatch: function(c) {
      c = f.event.fix(c || a.event);
      var d = (f._data(this, 'events') || {})[c.type] || [],
        e = d.delegateCount,
        g = [].slice.call(arguments, 0),
        h = !c.exclusive && !c.namespace,
        i = f.event.special[c.type] || {},
        j = [],
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u;
      (g[0] = c), (c.delegateTarget = this);
      if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
        if (e && (!c.button || c.type !== 'click')) {
          (n = f(this)), (n.context = this.ownerDocument || this);
          for (m = c.target; m != this; m = m.parentNode || this)
            if (m.disabled !== !0) {
              (p = {}), (r = []), (n[0] = m);
              for (k = 0; k < e; k++)
                (s = d[k]),
                  (t = s.selector),
                  p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)),
                  p[t] && r.push(s);
              r.length && j.push({ elem: m, matches: r });
            }
        }
        d.length > e && j.push({ elem: this, matches: d.slice(e) });
        for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
          (q = j[k]), (c.currentTarget = q.elem);
          for (
            l = 0;
            l < q.matches.length && !c.isImmediatePropagationStopped();
            l++
          ) {
            s = q.matches[l];
            if (
              h ||
              (!c.namespace && !s.namespace) ||
              (c.namespace_re && c.namespace_re.test(s.namespace))
            )
              (c.data = s.data),
                (c.handleObj = s),
                (o = (
                  (f.event.special[s.origType] || {}).handle || s.handler
                ).apply(q.elem, g)),
                o !== b &&
                  ((c.result = o),
                  o === !1 && (c.preventDefault(), c.stopPropagation()));
          }
        }
        i.postDispatch && i.postDispatch.call(this, c);
        return c.result;
      }
    },
    props: 'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
      ' '
    ),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function(a, b) {
        a.which == null &&
          (a.which = b.charCode != null ? b.charCode : b.keyCode);
        return a;
      },
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
        ' '
      ),
      filter: function(a, d) {
        var e,
          f,
          g,
          h = d.button,
          i = d.fromElement;
        a.pageX == null &&
          d.clientX != null &&
          ((e = a.target.ownerDocument || c),
          (f = e.documentElement),
          (g = e.body),
          (a.pageX =
            d.clientX +
            ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
            ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
          (a.pageY =
            d.clientY +
            ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
            ((f && f.clientTop) || (g && g.clientTop) || 0))),
          !a.relatedTarget &&
            i &&
            (a.relatedTarget = i === a.target ? d.toElement : i),
          !a.which &&
            h !== b &&
            (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
        return a;
      },
    },
    fix: function(a) {
      if (a[f.expando]) return a;
      var d,
        e,
        g = a,
        h = f.event.fixHooks[a.type] || {},
        i = h.props ? this.props.concat(h.props) : this.props;
      a = f.Event(g);
      for (d = i.length; d; ) (e = i[--d]), (a[e] = g[e]);
      a.target || (a.target = g.srcElement || c),
        a.target.nodeType === 3 && (a.target = a.target.parentNode),
        a.metaKey === b && (a.metaKey = a.ctrlKey);
      return h.filter ? h.filter(a, g) : a;
    },
    special: {
      ready: { setup: f.bindReady },
      load: { noBubble: !0 },
      focus: { delegateType: 'focusin' },
      blur: { delegateType: 'focusout' },
      beforeunload: {
        setup: function(a, b, c) {
          f.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function(a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function(a, b, c, d) {
      var e = f.extend(new f.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (f.event.handle = f.event.dispatch),
    (f.removeEvent = c.removeEventListener
      ? function(a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function(a, b, c) {
          a.detachEvent && a.detachEvent('on' + b, c);
        }),
    (f.Event = function(a, b) {
      if (!(this instanceof f.Event)) return new f.Event(a, b);
      a && a.type
        ? ((this.originalEvent = a),
          (this.type = a.type),
          (this.isDefaultPrevented =
            a.defaultPrevented ||
            a.returnValue === !1 ||
            (a.getPreventDefault && a.getPreventDefault())
              ? K
              : J))
        : (this.type = a),
        b && f.extend(this, b),
        (this.timeStamp = (a && a.timeStamp) || f.now()),
        (this[f.expando] = !0);
    }),
    (f.Event.prototype = {
      preventDefault: function() {
        this.isDefaultPrevented = K;
        var a = this.originalEvent;
        !a || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1));
      },
      stopPropagation: function() {
        this.isPropagationStopped = K;
        var a = this.originalEvent;
        !a || (a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0));
      },
      stopImmediatePropagation: function() {
        (this.isImmediatePropagationStopped = K), this.stopPropagation();
      },
      isDefaultPrevented: J,
      isPropagationStopped: J,
      isImmediatePropagationStopped: J,
    }),
    f.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function(a, b) {
      f.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var c = this,
            d = a.relatedTarget,
            e = a.handleObj,
            g = e.selector,
            h;
          if (!d || (d !== c && !f.contains(c, d)))
            (a.type = e.origType),
              (h = e.handler.apply(this, arguments)),
              (a.type = b);
          return h;
        },
      };
    }),
    f.support.submitBubbles ||
      (f.event.special.submit = {
        setup: function() {
          if (f.nodeName(this, 'form')) return !1;
          f.event.add(this, 'click._submit keypress._submit', function(a) {
            var c = a.target,
              d =
                f.nodeName(c, 'input') || f.nodeName(c, 'button') ? c.form : b;
            d &&
              !d._submit_attached &&
              (f.event.add(d, 'submit._submit', function(a) {
                a._submit_bubble = !0;
              }),
              (d._submit_attached = !0));
          });
        },
        postDispatch: function(a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              f.event.simulate('submit', this.parentNode, a, !0));
        },
        teardown: function() {
          if (f.nodeName(this, 'form')) return !1;
          f.event.remove(this, '._submit');
        },
      }),
    f.support.changeBubbles ||
      (f.event.special.change = {
        setup: function() {
          if (z.test(this.nodeName)) {
            if (this.type === 'checkbox' || this.type === 'radio')
              f.event.add(this, 'propertychange._change', function(a) {
                a.originalEvent.propertyName === 'checked' &&
                  (this._just_changed = !0);
              }),
                f.event.add(this, 'click._change', function(a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    ((this._just_changed = !1),
                    f.event.simulate('change', this, a, !0));
                });
            return !1;
          }
          f.event.add(this, 'beforeactivate._change', function(a) {
            var b = a.target;
            z.test(b.nodeName) &&
              !b._change_attached &&
              (f.event.add(b, 'change._change', function(a) {
                this.parentNode &&
                  !a.isSimulated &&
                  !a.isTrigger &&
                  f.event.simulate('change', this.parentNode, a, !0);
              }),
              (b._change_attached = !0));
          });
        },
        handle: function(a) {
          var b = a.target;
          if (
            this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            (b.type !== 'radio' && b.type !== 'checkbox')
          )
            return a.handleObj.handler.apply(this, arguments);
        },
        teardown: function() {
          f.event.remove(this, '._change');
          return z.test(this.nodeName);
        },
      }),
    f.support.focusinBubbles ||
      f.each({ focus: 'focusin', blur: 'focusout' }, function(a, b) {
        var d = 0,
          e = function(a) {
            f.event.simulate(b, a.target, f.event.fix(a), !0);
          };
        f.event.special[b] = {
          setup: function() {
            d++ === 0 && c.addEventListener(a, e, !0);
          },
          teardown: function() {
            --d === 0 && c.removeEventListener(a, e, !0);
          },
        };
      }),
    f.fn.extend({
      on: function(a, c, d, e, g) {
        var h, i;
        if (typeof a == 'object') {
          typeof c != 'string' && ((d = d || c), (c = b));
          for (i in a) this.on(i, c, d, a[i], g);
          return this;
        }
        d == null && e == null
          ? ((e = c), (d = c = b))
          : e == null &&
            (typeof c == 'string'
              ? ((e = d), (d = b))
              : ((e = d), (d = c), (c = b)));
        if (e === !1) e = J;
        else if (!e) return this;
        g === 1 &&
          ((h = e),
          (e = function(a) {
            f().off(a);
            return h.apply(this, arguments);
          }),
          (e.guid = h.guid || (h.guid = f.guid++)));
        return this.each(function() {
          f.event.add(this, a, e, d, c);
        });
      },
      one: function(a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function(a, c, d) {
        if (a && a.preventDefault && a.handleObj) {
          var e = a.handleObj;
          f(a.delegateTarget).off(
            e.namespace ? e.origType + '.' + e.namespace : e.origType,
            e.selector,
            e.handler
          );
          return this;
        }
        if (typeof a == 'object') {
          for (var g in a) this.off(g, c, a[g]);
          return this;
        }
        if (c === !1 || typeof c == 'function') (d = c), (c = b);
        d === !1 && (d = J);
        return this.each(function() {
          f.event.remove(this, a, d, c);
        });
      },
      bind: function(a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function(a, b) {
        return this.off(a, null, b);
      },
      live: function(a, b, c) {
        f(this.context).on(a, this.selector, b, c);
        return this;
      },
      die: function(a, b) {
        f(this.context).off(a, this.selector || '**', b);
        return this;
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function(a, b, c) {
        return arguments.length == 1 ? this.off(a, '**') : this.off(b, a, c);
      },
      trigger: function(a, b) {
        return this.each(function() {
          f.event.trigger(a, b, this);
        });
      },
      triggerHandler: function(a, b) {
        if (this[0]) return f.event.trigger(a, b, this[0], !0);
      },
      toggle: function(a) {
        var b = arguments,
          c = a.guid || f.guid++,
          d = 0,
          e = function(c) {
            var e = (f._data(this, 'lastToggle' + a.guid) || 0) % d;
            f._data(this, 'lastToggle' + a.guid, e + 1), c.preventDefault();
            return b[e].apply(this, arguments) || !1;
          };
        e.guid = c;
        while (d < b.length) b[d++].guid = c;
        return this.click(e);
      },
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    f.each(
      'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
        ' '
      ),
      function(a, b) {
        (f.fn[b] = function(a, c) {
          c == null && ((c = a), (a = null));
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        }),
          f.attrFn && (f.attrFn[b] = !0),
          C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks),
          D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks);
      }
    ),
    (function() {
      function x(a, b, c, e, f, g) {
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h];
          if (j) {
            var k = !1;
            j = j[a];
            while (j) {
              if (j[d] === c) {
                k = e[j.sizset];
                break;
              }
              if (j.nodeType === 1) {
                g || ((j[d] = c), (j.sizset = h));
                if (typeof b != 'string') {
                  if (j === b) {
                    k = !0;
                    break;
                  }
                } else if (m.filter(b, [j]).length > 0) {
                  k = j;
                  break;
                }
              }
              j = j[a];
            }
            e[h] = k;
          }
        }
      }
      function w(a, b, c, e, f, g) {
        for (var h = 0, i = e.length; h < i; h++) {
          var j = e[h];
          if (j) {
            var k = !1;
            j = j[a];
            while (j) {
              if (j[d] === c) {
                k = e[j.sizset];
                break;
              }
              j.nodeType === 1 && !g && ((j[d] = c), (j.sizset = h));
              if (j.nodeName.toLowerCase() === b) {
                k = j;
                break;
              }
              j = j[a];
            }
            e[h] = k;
          }
        }
      }
      var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        d = 'sizcache' + (Math.random() + '').replace('.', ''),
        e = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        k = /\r\n/g,
        l = /\W/;
      [0, 0].sort(function() {
        i = !1;
        return 0;
      });
      var m = function(b, d, e, f) {
        (e = e || []), (d = d || c);
        var h = d;
        if (d.nodeType !== 1 && d.nodeType !== 9) return [];
        if (!b || typeof b != 'string') return e;
        var i,
          j,
          k,
          l,
          n,
          q,
          r,
          t,
          u = !0,
          v = m.isXML(d),
          w = [],
          x = b;
        do {
          a.exec(''), (i = a.exec(x));
          if (i) {
            (x = i[3]), w.push(i[1]);
            if (i[2]) {
              l = i[3];
              break;
            }
          }
        } while (i);
        if (w.length > 1 && p.exec(b))
          if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);
          else {
            j = o.relative[w[0]] ? [d] : m(w.shift(), d);
            while (w.length)
              (b = w.shift()),
                o.relative[b] && (b += w.shift()),
                (j = y(b, j, f));
          }
        else {
          !f &&
            w.length > 1 &&
            d.nodeType === 9 &&
            !v &&
            o.match.ID.test(w[0]) &&
            !o.match.ID.test(w[w.length - 1]) &&
            ((n = m.find(w.shift(), d, v)),
            (d = n.expr ? m.filter(n.expr, n.set)[0] : n.set[0]));
          if (d) {
            (n = f
              ? { expr: w.pop(), set: s(f) }
              : m.find(
                  w.pop(),
                  w.length === 1 &&
                    (w[0] === '~' || w[0] === '+') &&
                    d.parentNode
                    ? d.parentNode
                    : d,
                  v
                )),
              (j = n.expr ? m.filter(n.expr, n.set) : n.set),
              w.length > 0 ? (k = s(j)) : (u = !1);
            while (w.length)
              (q = w.pop()),
                (r = q),
                o.relative[q] ? (r = w.pop()) : (q = ''),
                r == null && (r = d),
                o.relative[q](k, r, v);
          } else k = w = [];
        }
        k || (k = j), k || m.error(q || b);
        if (g.call(k) === '[object Array]')
          if (!u) e.push.apply(e, k);
          else if (d && d.nodeType === 1)
            for (t = 0; k[t] != null; t++)
              k[t] &&
                (k[t] === !0 || (k[t].nodeType === 1 && m.contains(d, k[t]))) &&
                e.push(j[t]);
          else
            for (t = 0; k[t] != null; t++)
              k[t] && k[t].nodeType === 1 && e.push(j[t]);
        else s(k, e);
        l && (m(l, h, e, f), m.uniqueSort(e));
        return e;
      };
      (m.uniqueSort = function(a) {
        if (u) {
          (h = i), a.sort(u);
          if (h)
            for (var b = 1; b < a.length; b++)
              a[b] === a[b - 1] && a.splice(b--, 1);
        }
        return a;
      }),
        (m.matches = function(a, b) {
          return m(a, null, null, b);
        }),
        (m.matchesSelector = function(a, b) {
          return m(b, null, null, [a]).length > 0;
        }),
        (m.find = function(a, b, c) {
          var d, e, f, g, h, i;
          if (!a) return [];
          for (e = 0, f = o.order.length; e < f; e++) {
            h = o.order[e];
            if ((g = o.leftMatch[h].exec(a))) {
              (i = g[1]), g.splice(1, 1);
              if (i.substr(i.length - 1) !== '\\') {
                (g[1] = (g[1] || '').replace(j, '')), (d = o.find[h](g, b, c));
                if (d != null) {
                  a = a.replace(o.match[h], '');
                  break;
                }
              }
            }
          }
          d ||
            (d =
              typeof b.getElementsByTagName != 'undefined'
                ? b.getElementsByTagName('*')
                : []);
          return { set: d, expr: a };
        }),
        (m.filter = function(a, c, d, e) {
          var f,
            g,
            h,
            i,
            j,
            k,
            l,
            n,
            p,
            q = a,
            r = [],
            s = c,
            t = c && c[0] && m.isXML(c[0]);
          while (a && c.length) {
            for (h in o.filter)
              if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                (k = o.filter[h]), (l = f[1]), (g = !1), f.splice(1, 1);
                if (l.substr(l.length - 1) === '\\') continue;
                s === r && (r = []);
                if (o.preFilter[h]) {
                  f = o.preFilter[h](f, s, d, r, e, t);
                  if (!f) g = i = !0;
                  else if (f === !0) continue;
                }
                if (f)
                  for (n = 0; (j = s[n]) != null; n++)
                    j &&
                      ((i = k(j, f, n, s)),
                      (p = e ^ i),
                      d && i != null
                        ? p
                          ? (g = !0)
                          : (s[n] = !1)
                        : p && (r.push(j), (g = !0)));
                if (i !== b) {
                  d || (s = r), (a = a.replace(o.match[h], ''));
                  if (!g) return [];
                  break;
                }
              }
            if (a === q)
              if (g == null) m.error(a);
              else break;
            q = a;
          }
          return s;
        }),
        (m.error = function(a) {
          throw new Error('Syntax error, unrecognized expression: ' + a);
        });
      var n = (m.getText = function(a) {
          var b,
            c,
            d = a.nodeType,
            e = '';
          if (d) {
            if (d === 1 || d === 9 || d === 11) {
              if (typeof a.textContent == 'string') return a.textContent;
              if (typeof a.innerText == 'string')
                return a.innerText.replace(k, '');
              for (a = a.firstChild; a; a = a.nextSibling) e += n(a);
            } else if (d === 3 || d === 4) return a.nodeValue;
          } else for (b = 0; (c = a[b]); b++) c.nodeType !== 8 && (e += n(c));
          return e;
        }),
        o = (m.selectors = {
          order: ['ID', 'NAME', 'TAG'],
          match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
          },
          leftMatch: {},
          attrMap: { class: 'className', for: 'htmlFor' },
          attrHandle: {
            href: function(a) {
              return a.getAttribute('href');
            },
            type: function(a) {
              return a.getAttribute('type');
            },
          },
          relative: {
            '+': function(a, b) {
              var c = typeof b == 'string',
                d = c && !l.test(b),
                e = c && !d;
              d && (b = b.toLowerCase());
              for (var f = 0, g = a.length, h; f < g; f++)
                if ((h = a[f])) {
                  while ((h = h.previousSibling) && h.nodeType !== 1);
                  a[f] =
                    e || (h && h.nodeName.toLowerCase() === b)
                      ? h || !1
                      : h === b;
                }
              e && m.filter(b, a, !0);
            },
            '>': function(a, b) {
              var c,
                d = typeof b == 'string',
                e = 0,
                f = a.length;
              if (d && !l.test(b)) {
                b = b.toLowerCase();
                for (; e < f; e++) {
                  c = a[e];
                  if (c) {
                    var g = c.parentNode;
                    a[e] = g.nodeName.toLowerCase() === b ? g : !1;
                  }
                }
              } else {
                for (; e < f; e++)
                  (c = a[e]),
                    c && (a[e] = d ? c.parentNode : c.parentNode === b);
                d && m.filter(b, a, !0);
              }
            },
            '': function(a, b, c) {
              var d,
                f = e++,
                g = x;
              typeof b == 'string' &&
                !l.test(b) &&
                ((b = b.toLowerCase()), (d = b), (g = w)),
                g('parentNode', b, f, a, d, c);
            },
            '~': function(a, b, c) {
              var d,
                f = e++,
                g = x;
              typeof b == 'string' &&
                !l.test(b) &&
                ((b = b.toLowerCase()), (d = b), (g = w)),
                g('previousSibling', b, f, a, d, c);
            },
          },
          find: {
            ID: function(a, b, c) {
              if (typeof b.getElementById != 'undefined' && !c) {
                var d = b.getElementById(a[1]);
                return d && d.parentNode ? [d] : [];
              }
            },
            NAME: function(a, b) {
              if (typeof b.getElementsByName != 'undefined') {
                var c = [],
                  d = b.getElementsByName(a[1]);
                for (var e = 0, f = d.length; e < f; e++)
                  d[e].getAttribute('name') === a[1] && c.push(d[e]);
                return c.length === 0 ? null : c;
              }
            },
            TAG: function(a, b) {
              if (typeof b.getElementsByTagName != 'undefined')
                return b.getElementsByTagName(a[1]);
            },
          },
          preFilter: {
            CLASS: function(a, b, c, d, e, f) {
              a = ' ' + a[1].replace(j, '') + ' ';
              if (f) return a;
              for (var g = 0, h; (h = b[g]) != null; g++)
                h &&
                  (e ^
                  (h.className &&
                    (' ' + h.className + ' ')
                      .replace(/[\t\n\r]/g, ' ')
                      .indexOf(a) >= 0)
                    ? c || d.push(h)
                    : c && (b[g] = !1));
              return !1;
            },
            ID: function(a) {
              return a[1].replace(j, '');
            },
            TAG: function(a, b) {
              return a[1].replace(j, '').toLowerCase();
            },
            CHILD: function(a) {
              if (a[1] === 'nth') {
                a[2] || m.error(a[0]), (a[2] = a[2].replace(/^\+|\s*/g, ''));
                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                  (a[2] === 'even' && '2n') ||
                    (a[2] === 'odd' && '2n+1') ||
                    (!/\D/.test(a[2]) && '0n+' + a[2]) ||
                    a[2]
                );
                (a[2] = b[1] + (b[2] || 1) - 0), (a[3] = b[3] - 0);
              } else a[2] && m.error(a[0]);
              a[0] = e++;
              return a;
            },
            ATTR: function(a, b, c, d, e, f) {
              var g = (a[1] = a[1].replace(j, ''));
              !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                (a[4] = (a[4] || a[5] || '').replace(j, '')),
                a[2] === '~=' && (a[4] = ' ' + a[4] + ' ');
              return a;
            },
            PSEUDO: function(b, c, d, e, f) {
              if (b[1] === 'not')
                if ((a.exec(b[3]) || '').length > 1 || /^\w/.test(b[3]))
                  b[3] = m(b[3], null, null, c);
                else {
                  var g = m.filter(b[3], c, d, !0 ^ f);
                  d || e.push.apply(e, g);
                  return !1;
                }
              else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0]))
                return !0;
              return b;
            },
            POS: function(a) {
              a.unshift(!0);
              return a;
            },
          },
          filters: {
            enabled: function(a) {
              return a.disabled === !1 && a.type !== 'hidden';
            },
            disabled: function(a) {
              return a.disabled === !0;
            },
            checked: function(a) {
              return a.checked === !0;
            },
            selected: function(a) {
              a.parentNode && a.parentNode.selectedIndex;
              return a.selected === !0;
            },
            parent: function(a) {
              return !!a.firstChild;
            },
            empty: function(a) {
              return !a.firstChild;
            },
            has: function(a, b, c) {
              return !!m(c[3], a).length;
            },
            header: function(a) {
              return /h\d/i.test(a.nodeName);
            },
            text: function(a) {
              var b = a.getAttribute('type'),
                c = a.type;
              return (
                a.nodeName.toLowerCase() === 'input' &&
                'text' === c &&
                (b === c || b === null)
              );
            },
            radio: function(a) {
              return a.nodeName.toLowerCase() === 'input' && 'radio' === a.type;
            },
            checkbox: function(a) {
              return (
                a.nodeName.toLowerCase() === 'input' && 'checkbox' === a.type
              );
            },
            file: function(a) {
              return a.nodeName.toLowerCase() === 'input' && 'file' === a.type;
            },
            password: function(a) {
              return (
                a.nodeName.toLowerCase() === 'input' && 'password' === a.type
              );
            },
            submit: function(a) {
              var b = a.nodeName.toLowerCase();
              return (b === 'input' || b === 'button') && 'submit' === a.type;
            },
            image: function(a) {
              return a.nodeName.toLowerCase() === 'input' && 'image' === a.type;
            },
            reset: function(a) {
              var b = a.nodeName.toLowerCase();
              return (b === 'input' || b === 'button') && 'reset' === a.type;
            },
            button: function(a) {
              var b = a.nodeName.toLowerCase();
              return (b === 'input' && 'button' === a.type) || b === 'button';
            },
            input: function(a) {
              return /input|select|textarea|button/i.test(a.nodeName);
            },
            focus: function(a) {
              return a === a.ownerDocument.activeElement;
            },
          },
          setFilters: {
            first: function(a, b) {
              return b === 0;
            },
            last: function(a, b, c, d) {
              return b === d.length - 1;
            },
            even: function(a, b) {
              return b % 2 === 0;
            },
            odd: function(a, b) {
              return b % 2 === 1;
            },
            lt: function(a, b, c) {
              return b < c[3] - 0;
            },
            gt: function(a, b, c) {
              return b > c[3] - 0;
            },
            nth: function(a, b, c) {
              return c[3] - 0 === b;
            },
            eq: function(a, b, c) {
              return c[3] - 0 === b;
            },
          },
          filter: {
            PSEUDO: function(a, b, c, d) {
              var e = b[1],
                f = o.filters[e];
              if (f) return f(a, c, b, d);
              if (e === 'contains')
                return (
                  (a.textContent || a.innerText || n([a]) || '').indexOf(
                    b[3]
                  ) >= 0
                );
              if (e === 'not') {
                var g = b[3];
                for (var h = 0, i = g.length; h < i; h++)
                  if (g[h] === a) return !1;
                return !0;
              }
              m.error(e);
            },
            CHILD: function(a, b) {
              var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = b[1],
                l = a;
              switch (k) {
                case 'only':
                case 'first':
                  while ((l = l.previousSibling))
                    if (l.nodeType === 1) return !1;
                  if (k === 'first') return !0;
                  l = a;
                case 'last':
                  while ((l = l.nextSibling)) if (l.nodeType === 1) return !1;
                  return !0;
                case 'nth':
                  (c = b[2]), (e = b[3]);
                  if (c === 1 && e === 0) return !0;
                  (f = b[0]), (g = a.parentNode);
                  if (g && (g[d] !== f || !a.nodeIndex)) {
                    i = 0;
                    for (l = g.firstChild; l; l = l.nextSibling)
                      l.nodeType === 1 && (l.nodeIndex = ++i);
                    g[d] = f;
                  }
                  j = a.nodeIndex - e;
                  return c === 0 ? j === 0 : j % c === 0 && j / c >= 0;
              }
            },
            ID: function(a, b) {
              return a.nodeType === 1 && a.getAttribute('id') === b;
            },
            TAG: function(a, b) {
              return (
                (b === '*' && a.nodeType === 1) ||
                (!!a.nodeName && a.nodeName.toLowerCase() === b)
              );
            },
            CLASS: function(a, b) {
              return (
                (' ' + (a.className || a.getAttribute('class')) + ' ').indexOf(
                  b
                ) > -1
              );
            },
            ATTR: function(a, b) {
              var c = b[1],
                d = m.attr
                  ? m.attr(a, c)
                  : o.attrHandle[c]
                  ? o.attrHandle[c](a)
                  : a[c] != null
                  ? a[c]
                  : a.getAttribute(c),
                e = d + '',
                f = b[2],
                g = b[4];
              return d == null
                ? f === '!='
                : !f && m.attr
                ? d != null
                : f === '='
                ? e === g
                : f === '*='
                ? e.indexOf(g) >= 0
                : f === '~='
                ? (' ' + e + ' ').indexOf(g) >= 0
                : g
                ? f === '!='
                  ? e !== g
                  : f === '^='
                  ? e.indexOf(g) === 0
                  : f === '$='
                  ? e.substr(e.length - g.length) === g
                  : f === '|='
                  ? e === g || e.substr(0, g.length + 1) === g + '-'
                  : !1
                : e && d !== !1;
            },
            POS: function(a, b, c, d) {
              var e = b[2],
                f = o.setFilters[e];
              if (f) return f(a, c, b, d);
            },
          },
        }),
        p = o.match.POS,
        q = function(a, b) {
          return '\\' + (b - 0 + 1);
        };
      for (var r in o.match)
        (o.match[r] = new RegExp(
          o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source
        )),
          (o.leftMatch[r] = new RegExp(
            /(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q)
          ));
      o.match.globalPOS = p;
      var s = function(a, b) {
        a = Array.prototype.slice.call(a, 0);
        if (b) {
          b.push.apply(b, a);
          return b;
        }
        return a;
      };
      try {
        Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType;
      } catch (t) {
        s = function(a, b) {
          var c = 0,
            d = b || [];
          if (g.call(a) === '[object Array]') Array.prototype.push.apply(d, a);
          else if (typeof a.length == 'number')
            for (var e = a.length; c < e; c++) d.push(a[c]);
          else for (; a[c]; c++) d.push(a[c]);
          return d;
        };
      }
      var u, v;
      c.documentElement.compareDocumentPosition
        ? (u = function(a, b) {
            if (a === b) {
              h = !0;
              return 0;
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition)
              return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1;
          })
        : ((u = function(a, b) {
            if (a === b) {
              h = !0;
              return 0;
            }
            if (a.sourceIndex && b.sourceIndex)
              return a.sourceIndex - b.sourceIndex;
            var c,
              d,
              e = [],
              f = [],
              g = a.parentNode,
              i = b.parentNode,
              j = g;
            if (g === i) return v(a, b);
            if (!g) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), (j = j.parentNode);
            j = i;
            while (j) f.unshift(j), (j = j.parentNode);
            (c = e.length), (d = f.length);
            for (var k = 0; k < c && k < d; k++)
              if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1);
          }),
          (v = function(a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
              if (d === b) return -1;
              d = d.nextSibling;
            }
            return 1;
          })),
        (function() {
          var a = c.createElement('div'),
            d = 'script' + new Date().getTime(),
            e = c.documentElement;
          (a.innerHTML = "<a name='" + d + "'/>"),
            e.insertBefore(a, e.firstChild),
            c.getElementById(d) &&
              ((o.find.ID = function(a, c, d) {
                if (typeof c.getElementById != 'undefined' && !d) {
                  var e = c.getElementById(a[1]);
                  return e
                    ? e.id === a[1] ||
                      (typeof e.getAttributeNode != 'undefined' &&
                        e.getAttributeNode('id').nodeValue === a[1])
                      ? [e]
                      : b
                    : [];
                }
              }),
              (o.filter.ID = function(a, b) {
                var c =
                  typeof a.getAttributeNode != 'undefined' &&
                  a.getAttributeNode('id');
                return a.nodeType === 1 && c && c.nodeValue === b;
              })),
            e.removeChild(a),
            (e = a = null);
        })(),
        (function() {
          var a = c.createElement('div');
          a.appendChild(c.createComment('')),
            a.getElementsByTagName('*').length > 0 &&
              (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === '*') {
                  var d = [];
                  for (var e = 0; c[e]; e++)
                    c[e].nodeType === 1 && d.push(c[e]);
                  c = d;
                }
                return c;
              }),
            (a.innerHTML = "<a href='#'></a>"),
            a.firstChild &&
              typeof a.firstChild.getAttribute != 'undefined' &&
              a.firstChild.getAttribute('href') !== '#' &&
              (o.attrHandle.href = function(a) {
                return a.getAttribute('href', 2);
              }),
            (a = null);
        })(),
        c.querySelectorAll &&
          (function() {
            var a = m,
              b = c.createElement('div'),
              d = '__sizzle__';
            b.innerHTML = "<p class='TEST'></p>";
            if (
              !b.querySelectorAll ||
              b.querySelectorAll('.TEST').length !== 0
            ) {
              m = function(b, e, f, g) {
                e = e || c;
                if (!g && !m.isXML(e)) {
                  var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                  if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                    if (h[1]) return s(e.getElementsByTagName(b), f);
                    if (h[2] && o.find.CLASS && e.getElementsByClassName)
                      return s(e.getElementsByClassName(h[2]), f);
                  }
                  if (e.nodeType === 9) {
                    if (b === 'body' && e.body) return s([e.body], f);
                    if (h && h[3]) {
                      var i = e.getElementById(h[3]);
                      if (!i || !i.parentNode) return s([], f);
                      if (i.id === h[3]) return s([i], f);
                    }
                    try {
                      return s(e.querySelectorAll(b), f);
                    } catch (j) {}
                  } else if (
                    e.nodeType === 1 &&
                    e.nodeName.toLowerCase() !== 'object'
                  ) {
                    var k = e,
                      l = e.getAttribute('id'),
                      n = l || d,
                      p = e.parentNode,
                      q = /^\s*[+~]/.test(b);
                    l ? (n = n.replace(/'/g, '\\$&')) : e.setAttribute('id', n),
                      q && p && (e = e.parentNode);
                    try {
                      if (!q || p)
                        return s(
                          e.querySelectorAll("[id='" + n + "'] " + b),
                          f
                        );
                    } catch (r) {
                    } finally {
                      l || k.removeAttribute('id');
                    }
                  }
                }
                return a(b, e, f, g);
              };
              for (var e in a) m[e] = a[e];
              b = null;
            }
          })(),
        (function() {
          var a = c.documentElement,
            b =
              a.matchesSelector ||
              a.mozMatchesSelector ||
              a.webkitMatchesSelector ||
              a.msMatchesSelector;
          if (b) {
            var d = !b.call(c.createElement('div'), 'div'),
              e = !1;
            try {
              b.call(c.documentElement, "[test!='']:sizzle");
            } catch (f) {
              e = !0;
            }
            m.matchesSelector = function(a, c) {
              c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
              if (!m.isXML(a))
                try {
                  if (e || (!o.match.PSEUDO.test(c) && !/!=/.test(c))) {
                    var f = b.call(a, c);
                    if (f || !d || (a.document && a.document.nodeType !== 11))
                      return f;
                  }
                } catch (g) {}
              return m(c, null, null, [a]).length > 0;
            };
          }
        })(),
        (function() {
          var a = c.createElement('div');
          a.innerHTML = "<div class='test e'></div><div class='test'></div>";
          if (
            !!a.getElementsByClassName &&
            a.getElementsByClassName('e').length !== 0
          ) {
            a.lastChild.className = 'e';
            if (a.getElementsByClassName('e').length === 1) return;
            o.order.splice(1, 0, 'CLASS'),
              (o.find.CLASS = function(a, b, c) {
                if (typeof b.getElementsByClassName != 'undefined' && !c)
                  return b.getElementsByClassName(a[1]);
              }),
              (a = null);
          }
        })(),
        c.documentElement.contains
          ? (m.contains = function(a, b) {
              return a !== b && (a.contains ? a.contains(b) : !0);
            })
          : c.documentElement.compareDocumentPosition
          ? (m.contains = function(a, b) {
              return !!(a.compareDocumentPosition(b) & 16);
            })
          : (m.contains = function() {
              return !1;
            }),
        (m.isXML = function(a) {
          var b = (a ? a.ownerDocument || a : 0).documentElement;
          return b ? b.nodeName !== 'HTML' : !1;
        });
      var y = function(a, b, c) {
        var d,
          e = [],
          f = '',
          g = b.nodeType ? [b] : b;
        while ((d = o.match.PSEUDO.exec(a)))
          (f += d[0]), (a = a.replace(o.match.PSEUDO, ''));
        a = o.relative[a] ? a + '*' : a;
        for (var h = 0, i = g.length; h < i; h++) m(a, g[h], e, c);
        return m.filter(f, e);
      };
      (m.attr = f.attr),
        (m.selectors.attrMap = {}),
        (f.find = m),
        (f.expr = m.selectors),
        (f.expr[':'] = f.expr.filters),
        (f.unique = m.uniqueSort),
        (f.text = m.getText),
        (f.isXMLDoc = m.isXML),
        (f.contains = m.contains);
    })();
  var L = /Until$/,
    M = /^(?:parents|prevUntil|prevAll)/,
    N = /,/,
    O = /^.[^:#\[\.,]*$/,
    P = Array.prototype.slice,
    Q = f.expr.match.globalPOS,
    R = { children: !0, contents: !0, next: !0, prev: !0 };
  f.fn.extend({
    find: function(a) {
      var b = this,
        c,
        d;
      if (typeof a != 'string')
        return f(a).filter(function() {
          for (c = 0, d = b.length; c < d; c++)
            if (f.contains(b[c], this)) return !0;
        });
      var e = this.pushStack('', 'find', a),
        g,
        h,
        i;
      for (c = 0, d = this.length; c < d; c++) {
        (g = e.length), f.find(a, this[c], e);
        if (c > 0)
          for (h = g; h < e.length; h++)
            for (i = 0; i < g; i++)
              if (e[i] === e[h]) {
                e.splice(h--, 1);
                break;
              }
      }
      return e;
    },
    has: function(a) {
      var b = f(a);
      return this.filter(function() {
        for (var a = 0, c = b.length; a < c; a++)
          if (f.contains(this, b[a])) return !0;
      });
    },
    not: function(a) {
      return this.pushStack(T(this, a, !1), 'not', a);
    },
    filter: function(a) {
      return this.pushStack(T(this, a, !0), 'filter', a);
    },
    is: function(a) {
      return (
        !!a &&
        (typeof a == 'string'
          ? Q.test(a)
            ? f(a, this.context).index(this[0]) >= 0
            : f.filter(a, this).length > 0
          : this.filter(a).length > 0)
      );
    },
    closest: function(a, b) {
      var c = [],
        d,
        e,
        g = this[0];
      if (f.isArray(a)) {
        var h = 1;
        while (g && g.ownerDocument && g !== b) {
          for (d = 0; d < a.length; d++)
            f(g).is(a[d]) && c.push({ selector: a[d], elem: g, level: h });
          (g = g.parentNode), h++;
        }
        return c;
      }
      var i = Q.test(a) || typeof a != 'string' ? f(a, b || this.context) : 0;
      for (d = 0, e = this.length; d < e; d++) {
        g = this[d];
        while (g) {
          if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
            c.push(g);
            break;
          }
          g = g.parentNode;
          if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break;
        }
      }
      c = c.length > 1 ? f.unique(c) : c;
      return this.pushStack(c, 'closest', a);
    },
    index: function(a) {
      if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
      if (typeof a == 'string') return f.inArray(this[0], f(a));
      return f.inArray(a.jquery ? a[0] : a, this);
    },
    add: function(a, b) {
      var c =
          typeof a == 'string'
            ? f(a, b)
            : f.makeArray(a && a.nodeType ? [a] : a),
        d = f.merge(this.get(), c);
      return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d));
    },
    andSelf: function() {
      return this.add(this.prevObject);
    },
  }),
    f.each(
      {
        parent: function(a) {
          var b = a.parentNode;
          return b && b.nodeType !== 11 ? b : null;
        },
        parents: function(a) {
          return f.dir(a, 'parentNode');
        },
        parentsUntil: function(a, b, c) {
          return f.dir(a, 'parentNode', c);
        },
        next: function(a) {
          return f.nth(a, 2, 'nextSibling');
        },
        prev: function(a) {
          return f.nth(a, 2, 'previousSibling');
        },
        nextAll: function(a) {
          return f.dir(a, 'nextSibling');
        },
        prevAll: function(a) {
          return f.dir(a, 'previousSibling');
        },
        nextUntil: function(a, b, c) {
          return f.dir(a, 'nextSibling', c);
        },
        prevUntil: function(a, b, c) {
          return f.dir(a, 'previousSibling', c);
        },
        siblings: function(a) {
          return f.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
          return f.sibling(a.firstChild);
        },
        contents: function(a) {
          return f.nodeName(a, 'iframe')
            ? a.contentDocument || a.contentWindow.document
            : f.makeArray(a.childNodes);
        },
      },
      function(a, b) {
        f.fn[a] = function(c, d) {
          var e = f.map(this, b, c);
          L.test(a) || (d = c),
            d && typeof d == 'string' && (e = f.filter(d, e)),
            (e = this.length > 1 && !R[a] ? f.unique(e) : e),
            (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
          return this.pushStack(e, a, P.call(arguments).join(','));
        };
      }
    ),
    f.extend({
      filter: function(a, b, c) {
        c && (a = ':not(' + a + ')');
        return b.length === 1
          ? f.find.matchesSelector(b[0], a)
            ? [b[0]]
            : []
          : f.find.matches(a, b);
      },
      dir: function(a, c, d) {
        var e = [],
          g = a[c];
        while (
          g &&
          g.nodeType !== 9 &&
          (d === b || g.nodeType !== 1 || !f(g).is(d))
        )
          g.nodeType === 1 && e.push(g), (g = g[c]);
        return e;
      },
      nth: function(a, b, c, d) {
        b = b || 1;
        var e = 0;
        for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
        return a;
      },
      sibling: function(a, b) {
        var c = [];
        for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
        return c;
      },
    });
  var V =
      'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
    W = / jQuery\d+="(?:\d+|null)"/g,
    X = /^\s+/,
    Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Z = /<([\w:]+)/,
    $ = /<tbody/i,
    _ = /<|&#?\w+;/,
    ba = /<(?:script|style)/i,
    bb = /<(?:script|object|embed|option|style)/i,
    bc = new RegExp('<(?:' + V + ')[\\s/>]', 'i'),
    bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
    be = /\/(java|ecma)script/i,
    bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
    bg = {
      option: [1, "<select multiple='multiple'>", '</select>'],
      legend: [1, '<fieldset>', '</fieldset>'],
      thead: [1, '<table>', '</table>'],
      tr: [2, '<table><tbody>', '</tbody></table>'],
      td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
      col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
      area: [1, '<map>', '</map>'],
      _default: [0, '', ''],
    },
    bh = U(c);
  (bg.optgroup = bg.option),
    (bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead),
    (bg.th = bg.td),
    f.support.htmlSerialize || (bg._default = [1, 'div<div>', '</div>']),
    f.fn.extend({
      text: function(a) {
        return f.access(
          this,
          function(a) {
            return a === b
              ? f.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || c).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      wrapAll: function(a) {
        if (f.isFunction(a))
          return this.each(function(b) {
            f(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = f(a, this[0].ownerDocument)
            .eq(0)
            .clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function() {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function(a) {
        if (f.isFunction(a))
          return this.each(function(b) {
            f(this).wrapInner(a.call(this, b));
          });
        return this.each(function() {
          var b = f(this),
            c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a);
        });
      },
      wrap: function(a) {
        var b = f.isFunction(a);
        return this.each(function(c) {
          f(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function() {
        return this.parent()
          .each(function() {
            f.nodeName(this, 'body') || f(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function() {
        return this.domManip(arguments, !0, function(a) {
          this.nodeType === 1 && this.appendChild(a);
        });
      },
      prepend: function() {
        return this.domManip(arguments, !0, function(a) {
          this.nodeType === 1 && this.insertBefore(a, this.firstChild);
        });
      },
      before: function() {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function(a) {
            this.parentNode.insertBefore(a, this);
          });
        if (arguments.length) {
          var a = f.clean(arguments);
          a.push.apply(a, this.toArray());
          return this.pushStack(a, 'before', arguments);
        }
      },
      after: function() {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function(a) {
            this.parentNode.insertBefore(a, this.nextSibling);
          });
        if (arguments.length) {
          var a = this.pushStack(this, 'after', arguments);
          a.push.apply(a, f.clean(arguments));
          return a;
        }
      },
      remove: function(a, b) {
        for (var c = 0, d; (d = this[c]) != null; c++)
          if (!a || f.filter(a, [d]).length)
            !b &&
              d.nodeType === 1 &&
              (f.cleanData(d.getElementsByTagName('*')), f.cleanData([d])),
              d.parentNode && d.parentNode.removeChild(d);
        return this;
      },
      empty: function() {
        for (var a = 0, b; (b = this[a]) != null; a++) {
          b.nodeType === 1 && f.cleanData(b.getElementsByTagName('*'));
          while (b.firstChild) b.removeChild(b.firstChild);
        }
        return this;
      },
      clone: function(a, b) {
        (a = a == null ? !1 : a), (b = b == null ? a : b);
        return this.map(function() {
          return f.clone(this, a, b);
        });
      },
      html: function(a) {
        return f.access(
          this,
          function(a) {
            var c = this[0] || {},
              d = 0,
              e = this.length;
            if (a === b)
              return c.nodeType === 1 ? c.innerHTML.replace(W, '') : null;
            if (
              typeof a == 'string' &&
              !ba.test(a) &&
              (f.support.leadingWhitespace || !X.test(a)) &&
              !bg[(Z.exec(a) || ['', ''])[1].toLowerCase()]
            ) {
              a = a.replace(Y, '<$1></$2>');
              try {
                for (; d < e; d++)
                  (c = this[d] || {}),
                    c.nodeType === 1 &&
                      (f.cleanData(c.getElementsByTagName('*')),
                      (c.innerHTML = a));
                c = 0;
              } catch (g) {}
            }
            c && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function(a) {
        if (this[0] && this[0].parentNode) {
          if (f.isFunction(a))
            return this.each(function(b) {
              var c = f(this),
                d = c.html();
              c.replaceWith(a.call(this, b, d));
            });
          typeof a != 'string' && (a = f(a).detach());
          return this.each(function() {
            var b = this.nextSibling,
              c = this.parentNode;
            f(this).remove(), b ? f(b).before(a) : f(c).append(a);
          });
        }
        return this.length
          ? this.pushStack(f(f.isFunction(a) ? a() : a), 'replaceWith', a)
          : this;
      },
      detach: function(a) {
        return this.remove(a, !0);
      },
      domManip: function(a, c, d) {
        var e,
          g,
          h,
          i,
          j = a[0],
          k = [];
        if (
          !f.support.checkClone &&
          arguments.length === 3 &&
          typeof j == 'string' &&
          bd.test(j)
        )
          return this.each(function() {
            f(this).domManip(a, c, d, !0);
          });
        if (f.isFunction(j))
          return this.each(function(e) {
            var g = f(this);
            (a[0] = j.call(this, e, c ? g.html() : b)), g.domManip(a, c, d);
          });
        if (this[0]) {
          (i = j && j.parentNode),
            f.support.parentNode &&
            i &&
            i.nodeType === 11 &&
            i.childNodes.length === this.length
              ? (e = { fragment: i })
              : (e = f.buildFragment(a, this, k)),
            (h = e.fragment),
            h.childNodes.length === 1
              ? (g = h = h.firstChild)
              : (g = h.firstChild);
          if (g) {
            c = c && f.nodeName(g, 'tr');
            for (var l = 0, m = this.length, n = m - 1; l < m; l++)
              d.call(
                c ? bi(this[l], g) : this[l],
                e.cacheable || (m > 1 && l < n) ? f.clone(h, !0, !0) : h
              );
          }
          k.length &&
            f.each(k, function(a, b) {
              b.src
                ? f.ajax({
                    type: 'GET',
                    global: !1,
                    url: b.src,
                    async: !1,
                    dataType: 'script',
                  })
                : f.globalEval(
                    (b.text || b.textContent || b.innerHTML || '').replace(
                      bf,
                      '/*$0*/'
                    )
                  ),
                b.parentNode && b.parentNode.removeChild(b);
            });
        }
        return this;
      },
    }),
    (f.buildFragment = function(a, b, d) {
      var e,
        g,
        h,
        i,
        j = a[0];
      b && b[0] && (i = b[0].ownerDocument || b[0]),
        i.createDocumentFragment || (i = c),
        a.length === 1 &&
          typeof j == 'string' &&
          j.length < 512 &&
          i === c &&
          j.charAt(0) === '<' &&
          !bb.test(j) &&
          (f.support.checkClone || !bd.test(j)) &&
          (f.support.html5Clone || !bc.test(j)) &&
          ((g = !0), (h = f.fragments[j]), h && h !== 1 && (e = h)),
        e || ((e = i.createDocumentFragment()), f.clean(a, i, e, d)),
        g && (f.fragments[j] = h ? e : 1);
      return { fragment: e, cacheable: g };
    }),
    (f.fragments = {}),
    f.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function(a, b) {
        f.fn[a] = function(c) {
          var d = [],
            e = f(c),
            g = this.length === 1 && this[0].parentNode;
          if (
            g &&
            g.nodeType === 11 &&
            g.childNodes.length === 1 &&
            e.length === 1
          ) {
            e[b](this[0]);
            return this;
          }
          for (var h = 0, i = e.length; h < i; h++) {
            var j = (h > 0 ? this.clone(!0) : this).get();
            f(e[h])[b](j), (d = d.concat(j));
          }
          return this.pushStack(d, a, e.selector);
        };
      }
    ),
    f.extend({
      clone: function(a, b, c) {
        var d,
          e,
          g,
          h =
            f.support.html5Clone ||
            f.isXMLDoc(a) ||
            !bc.test('<' + a.nodeName + '>')
              ? a.cloneNode(!0)
              : bo(a);
        if (
          (!f.support.noCloneEvent || !f.support.noCloneChecked) &&
          (a.nodeType === 1 || a.nodeType === 11) &&
          !f.isXMLDoc(a)
        ) {
          bk(a, h), (d = bl(a)), (e = bl(h));
          for (g = 0; d[g]; ++g) e[g] && bk(d[g], e[g]);
        }
        if (b) {
          bj(a, h);
          if (c) {
            (d = bl(a)), (e = bl(h));
            for (g = 0; d[g]; ++g) bj(d[g], e[g]);
          }
        }
        d = e = null;
        return h;
      },
      clean: function(a, b, d, e) {
        var g,
          h,
          i,
          j = [];
        (b = b || c),
          typeof b.createElement == 'undefined' &&
            (b = b.ownerDocument || (b[0] && b[0].ownerDocument) || c);
        for (var k = 0, l; (l = a[k]) != null; k++) {
          typeof l == 'number' && (l += '');
          if (!l) continue;
          if (typeof l == 'string')
            if (!_.test(l)) l = b.createTextNode(l);
            else {
              l = l.replace(Y, '<$1></$2>');
              var m = (Z.exec(l) || ['', ''])[1].toLowerCase(),
                n = bg[m] || bg._default,
                o = n[0],
                p = b.createElement('div'),
                q = bh.childNodes,
                r;
              b === c ? bh.appendChild(p) : U(b).appendChild(p),
                (p.innerHTML = n[1] + l + n[2]);
              while (o--) p = p.lastChild;
              if (!f.support.tbody) {
                var s = $.test(l),
                  t =
                    m === 'table' && !s
                      ? p.firstChild && p.firstChild.childNodes
                      : n[1] === '<table>' && !s
                      ? p.childNodes
                      : [];
                for (i = t.length - 1; i >= 0; --i)
                  f.nodeName(t[i], 'tbody') &&
                    !t[i].childNodes.length &&
                    t[i].parentNode.removeChild(t[i]);
              }
              !f.support.leadingWhitespace &&
                X.test(l) &&
                p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild),
                (l = p.childNodes),
                p &&
                  (p.parentNode.removeChild(p),
                  q.length > 0 &&
                    ((r = q[q.length - 1]),
                    r && r.parentNode && r.parentNode.removeChild(r)));
            }
          var u;
          if (!f.support.appendChecked)
            if (l[0] && typeof (u = l.length) == 'number')
              for (i = 0; i < u; i++) bn(l[i]);
            else bn(l);
          l.nodeType ? j.push(l) : (j = f.merge(j, l));
        }
        if (d) {
          g = function(a) {
            return !a.type || be.test(a.type);
          };
          for (k = 0; j[k]; k++) {
            h = j[k];
            if (e && f.nodeName(h, 'script') && (!h.type || be.test(h.type)))
              e.push(h.parentNode ? h.parentNode.removeChild(h) : h);
            else {
              if (h.nodeType === 1) {
                var v = f.grep(h.getElementsByTagName('script'), g);
                j.splice.apply(j, [k + 1, 0].concat(v));
              }
              d.appendChild(h);
            }
          }
        }
        return j;
      },
      cleanData: function(a) {
        var b,
          c,
          d = f.cache,
          e = f.event.special,
          g = f.support.deleteExpando;
        for (var h = 0, i; (i = a[h]) != null; h++) {
          if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
          c = i[f.expando];
          if (c) {
            b = d[c];
            if (b && b.events) {
              for (var j in b.events)
                e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
              b.handle && (b.handle.elem = null);
            }
            g
              ? delete i[f.expando]
              : i.removeAttribute && i.removeAttribute(f.expando),
              delete d[c];
          }
        }
      },
    });
  var bp = /alpha\([^)]*\)/i,
    bq = /opacity=([^)]*)/,
    br = /([A-Z]|^ms)/g,
    bs = /^[\-+]?(?:\d*\.)?\d+$/i,
    bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
    bu = /^([\-+])=([\-+.\de]+)/,
    bv = /^margin/,
    bw = { position: 'absolute', visibility: 'hidden', display: 'block' },
    bx = ['Top', 'Right', 'Bottom', 'Left'],
    by,
    bz,
    bA;
  (f.fn.css = function(a, c) {
    return f.access(
      this,
      function(a, c, d) {
        return d !== b ? f.style(a, c, d) : f.css(a, c);
      },
      a,
      c,
      arguments.length > 1
    );
  }),
    f.extend({
      cssHooks: {
        opacity: {
          get: function(a, b) {
            if (b) {
              var c = by(a, 'opacity');
              return c === '' ? '1' : c;
            }
            return a.style.opacity;
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: f.support.cssFloat ? 'cssFloat' : 'styleFloat' },
      style: function(a, c, d, e) {
        if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
          var g,
            h,
            i = f.camelCase(c),
            j = a.style,
            k = f.cssHooks[i];
          c = f.cssProps[i] || i;
          if (d === b) {
            if (k && 'get' in k && (g = k.get(a, !1, e)) !== b) return g;
            return j[c];
          }
          (h = typeof d),
            h === 'string' &&
              (g = bu.exec(d)) &&
              ((d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c))),
              (h = 'number'));
          if (d == null || (h === 'number' && isNaN(d))) return;
          h === 'number' && !f.cssNumber[i] && (d += 'px');
          if (!k || !('set' in k) || (d = k.set(a, d)) !== b)
            try {
              j[c] = d;
            } catch (l) {}
        }
      },
      css: function(a, c, d) {
        var e, g;
        (c = f.camelCase(c)),
          (g = f.cssHooks[c]),
          (c = f.cssProps[c] || c),
          c === 'cssFloat' && (c = 'float');
        if (g && 'get' in g && (e = g.get(a, !0, d)) !== b) return e;
        if (by) return by(a, c);
      },
      swap: function(a, b, c) {
        var d = {},
          e,
          f;
        for (f in b) (d[f] = a.style[f]), (a.style[f] = b[f]);
        e = c.call(a);
        for (f in b) a.style[f] = d[f];
        return e;
      },
    }),
    (f.curCSS = f.css),
    c.defaultView &&
      c.defaultView.getComputedStyle &&
      (bz = function(a, b) {
        var c,
          d,
          e,
          g,
          h = a.style;
        (b = b.replace(br, '-$1').toLowerCase()),
          (d = a.ownerDocument.defaultView) &&
            (e = d.getComputedStyle(a, null)) &&
            ((c = e.getPropertyValue(b)),
            c === '' &&
              !f.contains(a.ownerDocument.documentElement, a) &&
              (c = f.style(a, b))),
          !f.support.pixelMargin &&
            e &&
            bv.test(b) &&
            bt.test(c) &&
            ((g = h.width), (h.width = c), (c = e.width), (h.width = g));
        return c;
      }),
    c.documentElement.currentStyle &&
      (bA = function(a, b) {
        var c,
          d,
          e,
          f = a.currentStyle && a.currentStyle[b],
          g = a.style;
        f == null && g && (e = g[b]) && (f = e),
          bt.test(f) &&
            ((c = g.left),
            (d = a.runtimeStyle && a.runtimeStyle.left),
            d && (a.runtimeStyle.left = a.currentStyle.left),
            (g.left = b === 'fontSize' ? '1em' : f),
            (f = g.pixelLeft + 'px'),
            (g.left = c),
            d && (a.runtimeStyle.left = d));
        return f === '' ? 'auto' : f;
      }),
    (by = bz || bA),
    f.each(['height', 'width'], function(a, b) {
      f.cssHooks[b] = {
        get: function(a, c, d) {
          if (c)
            return a.offsetWidth !== 0
              ? bB(a, b, d)
              : f.swap(a, bw, function() {
                  return bB(a, b, d);
                });
        },
        set: function(a, b) {
          return bs.test(b) ? b + 'px' : b;
        },
      };
    }),
    f.support.opacity ||
      (f.cssHooks.opacity = {
        get: function(a, b) {
          return bq.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ''
          )
            ? parseFloat(RegExp.$1) / 100 + ''
            : b
            ? '1'
            : '';
        },
        set: function(a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = f.isNumeric(b) ? 'alpha(opacity=' + b * 100 + ')' : '',
            g = (d && d.filter) || c.filter || '';
          c.zoom = 1;
          if (b >= 1 && f.trim(g.replace(bp, '')) === '') {
            c.removeAttribute('filter');
            if (d && !d.filter) return;
          }
          c.filter = bp.test(g) ? g.replace(bp, e) : g + ' ' + e;
        },
      }),
    f(function() {
      f.support.reliableMarginRight ||
        (f.cssHooks.marginRight = {
          get: function(a, b) {
            return f.swap(a, { display: 'inline-block' }, function() {
              return b ? by(a, 'margin-right') : a.style.marginRight;
            });
          },
        });
    }),
    f.expr &&
      f.expr.filters &&
      ((f.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
          c = a.offsetHeight;
        return (
          (b === 0 && c === 0) ||
          (!f.support.reliableHiddenOffsets &&
            ((a.style && a.style.display) || f.css(a, 'display')) === 'none')
        );
      }),
      (f.expr.filters.visible = function(a) {
        return !f.expr.filters.hidden(a);
      })),
    f.each({ margin: '', padding: '', border: 'Width' }, function(a, b) {
      f.cssHooks[a + b] = {
        expand: function(c) {
          var d,
            e = typeof c == 'string' ? c.split(' ') : [c],
            f = {};
          for (d = 0; d < 4; d++) f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
          return f;
        },
      };
    });
  var bC = /%20/g,
    bD = /\[\]$/,
    bE = /\r?\n/g,
    bF = /#.*$/,
    bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    bJ = /^(?:GET|HEAD)$/,
    bK = /^\/\//,
    bL = /\?/,
    bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    bN = /^(?:select|textarea)/i,
    bO = /\s+/,
    bP = /([?&])_=[^&]*/,
    bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    bR = f.fn.load,
    bS = {},
    bT = {},
    bU,
    bV,
    bW = ['*/'] + ['*'];
  try {
    bU = e.href;
  } catch (bX) {
    (bU = c.createElement('a')), (bU.href = ''), (bU = bU.href);
  }
  (bV = bQ.exec(bU.toLowerCase()) || []),
    f.fn.extend({
      load: function(a, c, d) {
        if (typeof a != 'string' && bR) return bR.apply(this, arguments);
        if (!this.length) return this;
        var e = a.indexOf(' ');
        if (e >= 0) {
          var g = a.slice(e, a.length);
          a = a.slice(0, e);
        }
        var h = 'GET';
        c &&
          (f.isFunction(c)
            ? ((d = c), (c = b))
            : typeof c == 'object' &&
              ((c = f.param(c, f.ajaxSettings.traditional)), (h = 'POST')));
        var i = this;
        f.ajax({
          url: a,
          type: h,
          dataType: 'html',
          data: c,
          complete: function(a, b, c) {
            (c = a.responseText),
              a.isResolved() &&
                (a.done(function(a) {
                  c = a;
                }),
                i.html(
                  g
                    ? f('<div>')
                        .append(c.replace(bM, ''))
                        .find(g)
                    : c
                )),
              d && i.each(d, [c, b, a]);
          },
        });
        return this;
      },
      serialize: function() {
        return f.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          return this.elements ? f.makeArray(this.elements) : this;
        })
          .filter(function() {
            return (
              this.name &&
              !this.disabled &&
              (this.checked || bN.test(this.nodeName) || bH.test(this.type))
            );
          })
          .map(function(a, b) {
            var c = f(this).val();
            return c == null
              ? null
              : f.isArray(c)
              ? f.map(c, function(a, c) {
                  return { name: b.name, value: a.replace(bE, '\r\n') };
                })
              : { name: b.name, value: c.replace(bE, '\r\n') };
          })
          .get();
      },
    }),
    f.each(
      'ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(
        ' '
      ),
      function(a, b) {
        f.fn[b] = function(a) {
          return this.on(b, a);
        };
      }
    ),
    f.each(['get', 'post'], function(a, c) {
      f[c] = function(a, d, e, g) {
        f.isFunction(d) && ((g = g || e), (e = d), (d = b));
        return f.ajax({ type: c, url: a, data: d, success: e, dataType: g });
      };
    }),
    f.extend({
      getScript: function(a, c) {
        return f.get(a, b, c, 'script');
      },
      getJSON: function(a, b, c) {
        return f.get(a, b, c, 'json');
      },
      ajaxSetup: function(a, b) {
        b ? b$(a, f.ajaxSettings) : ((b = a), (a = f.ajaxSettings)), b$(a, b);
        return a;
      },
      ajaxSettings: {
        url: bU,
        isLocal: bI.test(bV[1]),
        global: !0,
        type: 'GET',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: !0,
        async: !0,
        accepts: {
          xml: 'application/xml, text/xml',
          html: 'text/html',
          text: 'text/plain',
          json: 'application/json, text/javascript',
          '*': bW,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: 'responseXML', text: 'responseText' },
        converters: {
          '* text': a.String,
          'text html': !0,
          'text json': f.parseJSON,
          'text xml': f.parseXML,
        },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: bY(bS),
      ajaxTransport: bY(bT),
      ajax: function(a, c) {
        function w(a, c, l, m) {
          if (s !== 2) {
            (s = 2),
              q && clearTimeout(q),
              (p = b),
              (n = m || ''),
              (v.readyState = a > 0 ? 4 : 0);
            var o,
              r,
              u,
              w = c,
              x = l ? ca(d, v, l) : b,
              y,
              z;
            if ((a >= 200 && a < 300) || a === 304) {
              if (d.ifModified) {
                if ((y = v.getResponseHeader('Last-Modified')))
                  f.lastModified[k] = y;
                if ((z = v.getResponseHeader('Etag'))) f.etag[k] = z;
              }
              if (a === 304) (w = 'notmodified'), (o = !0);
              else
                try {
                  (r = cb(d, x)), (w = 'success'), (o = !0);
                } catch (A) {
                  (w = 'parsererror'), (u = A);
                }
            } else {
              u = w;
              if (!w || a) (w = 'error'), a < 0 && (a = 0);
            }
            (v.status = a),
              (v.statusText = '' + (c || w)),
              o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]),
              v.statusCode(j),
              (j = b),
              t &&
                g.trigger('ajax' + (o ? 'Success' : 'Error'), [
                  v,
                  d,
                  o ? r : u,
                ]),
              i.fireWith(e, [v, w]),
              t &&
                (g.trigger('ajaxComplete', [v, d]),
                --f.active || f.event.trigger('ajaxStop'));
          }
        }
        typeof a == 'object' && ((c = a), (a = b)), (c = c || {});
        var d = f.ajaxSetup({}, c),
          e = d.context || d,
          g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
          h = f.Deferred(),
          i = f.Callbacks('once memory'),
          j = d.statusCode || {},
          k,
          l = {},
          m = {},
          n,
          o,
          p,
          q,
          r,
          s = 0,
          t,
          u,
          v = {
            readyState: 0,
            setRequestHeader: function(a, b) {
              if (!s) {
                var c = a.toLowerCase();
                (a = m[c] = m[c] || a), (l[a] = b);
              }
              return this;
            },
            getAllResponseHeaders: function() {
              return s === 2 ? n : null;
            },
            getResponseHeader: function(a) {
              var c;
              if (s === 2) {
                if (!o) {
                  o = {};
                  while ((c = bG.exec(n))) o[c[1].toLowerCase()] = c[2];
                }
                c = o[a.toLowerCase()];
              }
              return c === b ? null : c;
            },
            overrideMimeType: function(a) {
              s || (d.mimeType = a);
              return this;
            },
            abort: function(a) {
              (a = a || 'abort'), p && p.abort(a), w(0, a);
              return this;
            },
          };
        h.promise(v),
          (v.success = v.done),
          (v.error = v.fail),
          (v.complete = i.add),
          (v.statusCode = function(a) {
            if (a) {
              var b;
              if (s < 2) for (b in a) j[b] = [j[b], a[b]];
              else (b = a[v.status]), v.then(b, b);
            }
            return this;
          }),
          (d.url = ((a || d.url) + '')
            .replace(bF, '')
            .replace(bK, bV[1] + '//')),
          (d.dataTypes = f
            .trim(d.dataType || '*')
            .toLowerCase()
            .split(bO)),
          d.crossDomain == null &&
            ((r = bQ.exec(d.url.toLowerCase())),
            (d.crossDomain = !(
              !r ||
              (r[1] == bV[1] &&
                r[2] == bV[2] &&
                (r[3] || (r[1] === 'http:' ? 80 : 443)) ==
                  (bV[3] || (bV[1] === 'http:' ? 80 : 443)))
            ))),
          d.data &&
            d.processData &&
            typeof d.data != 'string' &&
            (d.data = f.param(d.data, d.traditional)),
          bZ(bS, d, c, v);
        if (s === 2) return !1;
        (t = d.global),
          (d.type = d.type.toUpperCase()),
          (d.hasContent = !bJ.test(d.type)),
          t && f.active++ === 0 && f.event.trigger('ajaxStart');
        if (!d.hasContent) {
          d.data &&
            ((d.url += (bL.test(d.url) ? '&' : '?') + d.data), delete d.data),
            (k = d.url);
          if (d.cache === !1) {
            var x = f.now(),
              y = d.url.replace(bP, '$1_=' + x);
            d.url =
              y + (y === d.url ? (bL.test(d.url) ? '&' : '?') + '_=' + x : '');
          }
        }
        ((d.data && d.hasContent && d.contentType !== !1) || c.contentType) &&
          v.setRequestHeader('Content-Type', d.contentType),
          d.ifModified &&
            ((k = k || d.url),
            f.lastModified[k] &&
              v.setRequestHeader('If-Modified-Since', f.lastModified[k]),
            f.etag[k] && v.setRequestHeader('If-None-Match', f.etag[k])),
          v.setRequestHeader(
            'Accept',
            d.dataTypes[0] && d.accepts[d.dataTypes[0]]
              ? d.accepts[d.dataTypes[0]] +
                  (d.dataTypes[0] !== '*' ? ', ' + bW + '; q=0.01' : '')
              : d.accepts['*']
          );
        for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
        if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
          v.abort();
          return !1;
        }
        for (u in { success: 1, error: 1, complete: 1 }) v[u](d[u]);
        p = bZ(bT, d, c, v);
        if (!p) w(-1, 'No Transport');
        else {
          (v.readyState = 1),
            t && g.trigger('ajaxSend', [v, d]),
            d.async &&
              d.timeout > 0 &&
              (q = setTimeout(function() {
                v.abort('timeout');
              }, d.timeout));
          try {
            (s = 1), p.send(l, w);
          } catch (z) {
            if (s < 2) w(-1, z);
            else throw z;
          }
        }
        return v;
      },
      param: function(a, c) {
        var d = [],
          e = function(a, b) {
            (b = f.isFunction(b) ? b() : b),
              (d[d.length] =
                encodeURIComponent(a) + '=' + encodeURIComponent(b));
          };
        c === b && (c = f.ajaxSettings.traditional);
        if (f.isArray(a) || (a.jquery && !f.isPlainObject(a)))
          f.each(a, function() {
            e(this.name, this.value);
          });
        else for (var g in a) b_(g, a[g], c, e);
        return d.join('&').replace(bC, '+');
      },
    }),
    f.extend({ active: 0, lastModified: {}, etag: {} });
  var cc = f.now(),
    cd = /(\=)\?(&|$)|\?\?/i;
  f.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function() {
      return f.expando + '_' + cc++;
    },
  }),
    f.ajaxPrefilter('json jsonp', function(b, c, d) {
      var e =
        typeof b.data == 'string' &&
        /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
      if (
        b.dataTypes[0] === 'jsonp' ||
        (b.jsonp !== !1 && (cd.test(b.url) || (e && cd.test(b.data))))
      ) {
        var g,
          h = (b.jsonpCallback = f.isFunction(b.jsonpCallback)
            ? b.jsonpCallback()
            : b.jsonpCallback),
          i = a[h],
          j = b.url,
          k = b.data,
          l = '$1' + h + '$2';
        b.jsonp !== !1 &&
          ((j = j.replace(cd, l)),
          b.url === j &&
            (e && (k = k.replace(cd, l)),
            b.data === k &&
              (j += (/\?/.test(j) ? '&' : '?') + b.jsonp + '=' + h))),
          (b.url = j),
          (b.data = k),
          (a[h] = function(a) {
            g = [a];
          }),
          d.always(function() {
            (a[h] = i), g && f.isFunction(i) && a[h](g[0]);
          }),
          (b.converters['script json'] = function() {
            g || f.error(h + ' was not called');
            return g[0];
          }),
          (b.dataTypes[0] = 'json');
        return 'script';
      }
    }),
    f.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        'text script': function(a) {
          f.globalEval(a);
          return a;
        },
      },
    }),
    f.ajaxPrefilter('script', function(a) {
      a.cache === b && (a.cache = !1),
        a.crossDomain && ((a.type = 'GET'), (a.global = !1));
    }),
    f.ajaxTransport('script', function(a) {
      if (a.crossDomain) {
        var d,
          e = c.head || c.getElementsByTagName('head')[0] || c.documentElement;
        return {
          send: function(f, g) {
            (d = c.createElement('script')),
              (d.async = 'async'),
              a.scriptCharset && (d.charset = a.scriptCharset),
              (d.src = a.url),
              (d.onload = d.onreadystatechange = function(a, c) {
                if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                  (d.onload = d.onreadystatechange = null),
                    e && d.parentNode && e.removeChild(d),
                    (d = b),
                    c || g(200, 'success');
              }),
              e.insertBefore(d, e.firstChild);
          },
          abort: function() {
            d && d.onload(0, 1);
          },
        };
      }
    });
  var ce = a.ActiveXObject
      ? function() {
          for (var a in cg) cg[a](0, 1);
        }
      : !1,
    cf = 0,
    cg;
  (f.ajaxSettings.xhr = a.ActiveXObject
    ? function() {
        return (!this.isLocal && ch()) || ci();
      }
    : ch),
    (function(a) {
      f.extend(f.support, { ajax: !!a, cors: !!a && 'withCredentials' in a });
    })(f.ajaxSettings.xhr()),
    f.support.ajax &&
      f.ajaxTransport(function(c) {
        if (!c.crossDomain || f.support.cors) {
          var d;
          return {
            send: function(e, g) {
              var h = c.xhr(),
                i,
                j;
              c.username
                ? h.open(c.type, c.url, c.async, c.username, c.password)
                : h.open(c.type, c.url, c.async);
              if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
              c.mimeType &&
                h.overrideMimeType &&
                h.overrideMimeType(c.mimeType),
                !c.crossDomain &&
                  !e['X-Requested-With'] &&
                  (e['X-Requested-With'] = 'XMLHttpRequest');
              try {
                for (j in e) h.setRequestHeader(j, e[j]);
              } catch (k) {}
              h.send((c.hasContent && c.data) || null),
                (d = function(a, e) {
                  var j, k, l, m, n;
                  try {
                    if (d && (e || h.readyState === 4)) {
                      (d = b),
                        i &&
                          ((h.onreadystatechange = f.noop), ce && delete cg[i]);
                      if (e) h.readyState !== 4 && h.abort();
                      else {
                        (j = h.status),
                          (l = h.getAllResponseHeaders()),
                          (m = {}),
                          (n = h.responseXML),
                          n && n.documentElement && (m.xml = n);
                        try {
                          m.text = h.responseText;
                        } catch (a) {}
                        try {
                          k = h.statusText;
                        } catch (o) {
                          k = '';
                        }
                        !j && c.isLocal && !c.crossDomain
                          ? (j = m.text ? 200 : 404)
                          : j === 1223 && (j = 204);
                      }
                    }
                  } catch (p) {
                    e || g(-1, p);
                  }
                  m && g(j, k, m, l);
                }),
                !c.async || h.readyState === 4
                  ? d()
                  : ((i = ++cf),
                    ce && (cg || ((cg = {}), f(a).unload(ce)), (cg[i] = d)),
                    (h.onreadystatechange = d));
            },
            abort: function() {
              d && d(0, 1);
            },
          };
        }
      });
  var cj = {},
    ck,
    cl,
    cm = /^(?:toggle|show|hide)$/,
    cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    co,
    cp = [
      ['height', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'],
      ['width', 'marginLeft', 'marginRight', 'paddingLeft', 'paddingRight'],
      ['opacity'],
    ],
    cq;
  f.fn.extend({
    show: function(a, b, c) {
      var d, e;
      if (a || a === 0) return this.animate(ct('show', 3), a, b, c);
      for (var g = 0, h = this.length; g < h; g++)
        (d = this[g]),
          d.style &&
            ((e = d.style.display),
            !f._data(d, 'olddisplay') &&
              e === 'none' &&
              (e = d.style.display = ''),
            ((e === '' && f.css(d, 'display') === 'none') ||
              !f.contains(d.ownerDocument.documentElement, d)) &&
              f._data(d, 'olddisplay', cu(d.nodeName)));
      for (g = 0; g < h; g++) {
        d = this[g];
        if (d.style) {
          e = d.style.display;
          if (e === '' || e === 'none')
            d.style.display = f._data(d, 'olddisplay') || '';
        }
      }
      return this;
    },
    hide: function(a, b, c) {
      if (a || a === 0) return this.animate(ct('hide', 3), a, b, c);
      var d,
        e,
        g = 0,
        h = this.length;
      for (; g < h; g++)
        (d = this[g]),
          d.style &&
            ((e = f.css(d, 'display')),
            e !== 'none' &&
              !f._data(d, 'olddisplay') &&
              f._data(d, 'olddisplay', e));
      for (g = 0; g < h; g++) this[g].style && (this[g].style.display = 'none');
      return this;
    },
    _toggle: f.fn.toggle,
    toggle: function(a, b, c) {
      var d = typeof a == 'boolean';
      f.isFunction(a) && f.isFunction(b)
        ? this._toggle.apply(this, arguments)
        : a == null || d
        ? this.each(function() {
            var b = d ? a : f(this).is(':hidden');
            f(this)[b ? 'show' : 'hide']();
          })
        : this.animate(ct('toggle', 3), a, b, c);
      return this;
    },
    fadeTo: function(a, b, c, d) {
      return this.filter(':hidden')
        .css('opacity', 0)
        .show()
        .end()
        .animate({ opacity: b }, a, c, d);
    },
    animate: function(a, b, c, d) {
      function g() {
        e.queue === !1 && f._mark(this);
        var b = f.extend({}, e),
          c = this.nodeType === 1,
          d = c && f(this).is(':hidden'),
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q;
        b.animatedProperties = {};
        for (i in a) {
          (g = f.camelCase(i)), i !== g && ((a[g] = a[i]), delete a[i]);
          if ((k = f.cssHooks[g]) && 'expand' in k) {
            (l = k.expand(a[g])), delete a[g];
            for (i in l) i in a || (a[i] = l[i]);
          }
        }
        for (g in a) {
          (h = a[g]),
            f.isArray(h)
              ? ((b.animatedProperties[g] = h[1]), (h = a[g] = h[0]))
              : (b.animatedProperties[g] =
                  (b.specialEasing && b.specialEasing[g]) ||
                  b.easing ||
                  'swing');
          if ((h === 'hide' && d) || (h === 'show' && !d))
            return b.complete.call(this);
          c &&
            (g === 'height' || g === 'width') &&
            ((b.overflow = [
              this.style.overflow,
              this.style.overflowX,
              this.style.overflowY,
            ]),
            f.css(this, 'display') === 'inline' &&
              f.css(this, 'float') === 'none' &&
              (!f.support.inlineBlockNeedsLayout ||
              cu(this.nodeName) === 'inline'
                ? (this.style.display = 'inline-block')
                : (this.style.zoom = 1)));
        }
        b.overflow != null && (this.style.overflow = 'hidden');
        for (i in a)
          (j = new f.fx(this, b, i)),
            (h = a[i]),
            cm.test(h)
              ? ((q =
                  f._data(this, 'toggle' + i) ||
                  (h === 'toggle' ? (d ? 'show' : 'hide') : 0)),
                q
                  ? (f._data(
                      this,
                      'toggle' + i,
                      q === 'show' ? 'hide' : 'show'
                    ),
                    j[q]())
                  : j[h]())
              : ((m = cn.exec(h)),
                (n = j.cur()),
                m
                  ? ((o = parseFloat(m[2])),
                    (p = m[3] || (f.cssNumber[i] ? '' : 'px')),
                    p !== 'px' &&
                      (f.style(this, i, (o || 1) + p),
                      (n = ((o || 1) / j.cur()) * n),
                      f.style(this, i, n + p)),
                    m[1] && (o = (m[1] === '-=' ? -1 : 1) * o + n),
                    j.custom(n, o, p))
                  : j.custom(n, h, ''));
        return !0;
      }
      var e = f.speed(b, c, d);
      if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
      a = f.extend({}, a);
      return e.queue === !1 ? this.each(g) : this.queue(e.queue, g);
    },
    stop: function(a, c, d) {
      typeof a != 'string' && ((d = c), (c = a), (a = b)),
        c && a !== !1 && this.queue(a || 'fx', []);
      return this.each(function() {
        function h(a, b, c) {
          var e = b[c];
          f.removeData(a, c, !0), e.stop(d);
        }
        var b,
          c = !1,
          e = f.timers,
          g = f._data(this);
        d || f._unmark(!0, this);
        if (a == null)
          for (b in g)
            g[b] &&
              g[b].stop &&
              b.indexOf('.run') === b.length - 4 &&
              h(this, g, b);
        else g[(b = a + '.run')] && g[b].stop && h(this, g, b);
        for (b = e.length; b--; )
          e[b].elem === this &&
            (a == null || e[b].queue === a) &&
            (d ? e[b](!0) : e[b].saveState(), (c = !0), e.splice(b, 1));
        (!d || !c) && f.dequeue(this, a);
      });
    },
  }),
    f.each(
      {
        slideDown: ct('show', 1),
        slideUp: ct('hide', 1),
        slideToggle: ct('toggle', 1),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function(a, b) {
        f.fn[a] = function(a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    f.extend({
      speed: function(a, b, c) {
        var d =
          a && typeof a == 'object'
            ? f.extend({}, a)
            : {
                complete: c || (!c && b) || (f.isFunction(a) && a),
                duration: a,
                easing: (c && b) || (b && !f.isFunction(b) && b),
              };
        d.duration = f.fx.off
          ? 0
          : typeof d.duration == 'number'
          ? d.duration
          : d.duration in f.fx.speeds
          ? f.fx.speeds[d.duration]
          : f.fx.speeds._default;
        if (d.queue == null || d.queue === !0) d.queue = 'fx';
        (d.old = d.complete),
          (d.complete = function(a) {
            f.isFunction(d.old) && d.old.call(this),
              d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this);
          });
        return d;
      },
      easing: {
        linear: function(a) {
          return a;
        },
        swing: function(a) {
          return -Math.cos(a * Math.PI) / 2 + 0.5;
        },
      },
      timers: [],
      fx: function(a, b, c) {
        (this.options = b),
          (this.elem = a),
          (this.prop = c),
          (b.orig = b.orig || {});
      },
    }),
    (f.fx.prototype = {
      update: function() {
        this.options.step && this.options.step.call(this.elem, this.now, this),
          (f.fx.step[this.prop] || f.fx.step._default)(this);
      },
      cur: function() {
        if (
          this.elem[this.prop] != null &&
          (!this.elem.style || this.elem.style[this.prop] == null)
        )
          return this.elem[this.prop];
        var a,
          b = f.css(this.elem, this.prop);
        return isNaN((a = parseFloat(b))) ? (!b || b === 'auto' ? 0 : b) : a;
      },
      custom: function(a, c, d) {
        function h(a) {
          return e.step(a);
        }
        var e = this,
          g = f.fx;
        (this.startTime = cq || cr()),
          (this.end = c),
          (this.now = this.start = a),
          (this.pos = this.state = 0),
          (this.unit = d || this.unit || (f.cssNumber[this.prop] ? '' : 'px')),
          (h.queue = this.options.queue),
          (h.elem = this.elem),
          (h.saveState = function() {
            f._data(e.elem, 'fxshow' + e.prop) === b &&
              (e.options.hide
                ? f._data(e.elem, 'fxshow' + e.prop, e.start)
                : e.options.show && f._data(e.elem, 'fxshow' + e.prop, e.end));
          }),
          h() &&
            f.timers.push(h) &&
            !co &&
            (co = setInterval(g.tick, g.interval));
      },
      show: function() {
        var a = f._data(this.elem, 'fxshow' + this.prop);
        (this.options.orig[this.prop] = a || f.style(this.elem, this.prop)),
          (this.options.show = !0),
          a !== b
            ? this.custom(this.cur(), a)
            : this.custom(
                this.prop === 'width' || this.prop === 'height' ? 1 : 0,
                this.cur()
              ),
          f(this.elem).show();
      },
      hide: function() {
        (this.options.orig[this.prop] =
          f._data(this.elem, 'fxshow' + this.prop) ||
          f.style(this.elem, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0);
      },
      step: function(a) {
        var b,
          c,
          d,
          e = cq || cr(),
          g = !0,
          h = this.elem,
          i = this.options;
        if (a || e >= i.duration + this.startTime) {
          (this.now = this.end),
            (this.pos = this.state = 1),
            this.update(),
            (i.animatedProperties[this.prop] = !0);
          for (b in i.animatedProperties)
            i.animatedProperties[b] !== !0 && (g = !1);
          if (g) {
            i.overflow != null &&
              !f.support.shrinkWrapBlocks &&
              f.each(['', 'X', 'Y'], function(a, b) {
                h.style['overflow' + b] = i.overflow[a];
              }),
              i.hide && f(h).hide();
            if (i.hide || i.show)
              for (b in i.animatedProperties)
                f.style(h, b, i.orig[b]),
                  f.removeData(h, 'fxshow' + b, !0),
                  f.removeData(h, 'toggle' + b, !0);
            (d = i.complete), d && ((i.complete = !1), d.call(h));
          }
          return !1;
        }
        i.duration == Infinity
          ? (this.now = e)
          : ((c = e - this.startTime),
            (this.state = c / i.duration),
            (this.pos = f.easing[i.animatedProperties[this.prop]](
              this.state,
              c,
              0,
              1,
              i.duration
            )),
            (this.now = this.start + (this.end - this.start) * this.pos)),
          this.update();
        return !0;
      },
    }),
    f.extend(f.fx, {
      tick: function() {
        var a,
          b = f.timers,
          c = 0;
        for (; c < b.length; c++)
          (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
        b.length || f.fx.stop();
      },
      interval: 13,
      stop: function() {
        clearInterval(co), (co = null);
      },
      speeds: { slow: 600, fast: 200, _default: 400 },
      step: {
        opacity: function(a) {
          f.style(a.elem, 'opacity', a.now);
        },
        _default: function(a) {
          a.elem.style && a.elem.style[a.prop] != null
            ? (a.elem.style[a.prop] = a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    f.each(cp.concat.apply([], cp), function(a, b) {
      b.indexOf('margin') &&
        (f.fx.step[b] = function(a) {
          f.style(a.elem, b, Math.max(0, a.now) + a.unit);
        });
    }),
    f.expr &&
      f.expr.filters &&
      (f.expr.filters.animated = function(a) {
        return f.grep(f.timers, function(b) {
          return a === b.elem;
        }).length;
      });
  var cv,
    cw = /^t(?:able|d|h)$/i,
    cx = /^(?:body|html)$/i;
  'getBoundingClientRect' in c.documentElement
    ? (cv = function(a, b, c, d) {
        try {
          d = a.getBoundingClientRect();
        } catch (e) {}
        if (!d || !f.contains(c, a))
          return d ? { top: d.top, left: d.left } : { top: 0, left: 0 };
        var g = b.body,
          h = cy(b),
          i = c.clientTop || g.clientTop || 0,
          j = c.clientLeft || g.clientLeft || 0,
          k =
            h.pageYOffset || (f.support.boxModel && c.scrollTop) || g.scrollTop,
          l =
            h.pageXOffset ||
            (f.support.boxModel && c.scrollLeft) ||
            g.scrollLeft,
          m = d.top + k - i,
          n = d.left + l - j;
        return { top: m, left: n };
      })
    : (cv = function(a, b, c) {
        var d,
          e = a.offsetParent,
          g = a,
          h = b.body,
          i = b.defaultView,
          j = i ? i.getComputedStyle(a, null) : a.currentStyle,
          k = a.offsetTop,
          l = a.offsetLeft;
        while ((a = a.parentNode) && a !== h && a !== c) {
          if (f.support.fixedPosition && j.position === 'fixed') break;
          (d = i ? i.getComputedStyle(a, null) : a.currentStyle),
            (k -= a.scrollTop),
            (l -= a.scrollLeft),
            a === e &&
              ((k += a.offsetTop),
              (l += a.offsetLeft),
              f.support.doesNotAddBorder &&
                (!f.support.doesAddBorderForTableAndCells ||
                  !cw.test(a.nodeName)) &&
                ((k += parseFloat(d.borderTopWidth) || 0),
                (l += parseFloat(d.borderLeftWidth) || 0)),
              (g = e),
              (e = a.offsetParent)),
            f.support.subtractsBorderForOverflowNotVisible &&
              d.overflow !== 'visible' &&
              ((k += parseFloat(d.borderTopWidth) || 0),
              (l += parseFloat(d.borderLeftWidth) || 0)),
            (j = d);
        }
        if (j.position === 'relative' || j.position === 'static')
          (k += h.offsetTop), (l += h.offsetLeft);
        f.support.fixedPosition &&
          j.position === 'fixed' &&
          ((k += Math.max(c.scrollTop, h.scrollTop)),
          (l += Math.max(c.scrollLeft, h.scrollLeft)));
        return { top: k, left: l };
      }),
    (f.fn.offset = function(a) {
      if (arguments.length)
        return a === b
          ? this
          : this.each(function(b) {
              f.offset.setOffset(this, a, b);
            });
      var c = this[0],
        d = c && c.ownerDocument;
      if (!d) return null;
      if (c === d.body) return f.offset.bodyOffset(c);
      return cv(c, d, d.documentElement);
    }),
    (f.offset = {
      bodyOffset: function(a) {
        var b = a.offsetTop,
          c = a.offsetLeft;
        f.support.doesNotIncludeMarginInBodyOffset &&
          ((b += parseFloat(f.css(a, 'marginTop')) || 0),
          (c += parseFloat(f.css(a, 'marginLeft')) || 0));
        return { top: b, left: c };
      },
      setOffset: function(a, b, c) {
        var d = f.css(a, 'position');
        d === 'static' && (a.style.position = 'relative');
        var e = f(a),
          g = e.offset(),
          h = f.css(a, 'top'),
          i = f.css(a, 'left'),
          j =
            (d === 'absolute' || d === 'fixed') &&
            f.inArray('auto', [h, i]) > -1,
          k = {},
          l = {},
          m,
          n;
        j
          ? ((l = e.position()), (m = l.top), (n = l.left))
          : ((m = parseFloat(h) || 0), (n = parseFloat(i) || 0)),
          f.isFunction(b) && (b = b.call(a, c, g)),
          b.top != null && (k.top = b.top - g.top + m),
          b.left != null && (k.left = b.left - g.left + n),
          'using' in b ? b.using.call(a, k) : e.css(k);
      },
    }),
    f.fn.extend({
      position: function() {
        if (!this[0]) return null;
        var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = cx.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
        (c.top -= parseFloat(f.css(a, 'marginTop')) || 0),
          (c.left -= parseFloat(f.css(a, 'marginLeft')) || 0),
          (d.top += parseFloat(f.css(b[0], 'borderTopWidth')) || 0),
          (d.left += parseFloat(f.css(b[0], 'borderLeftWidth')) || 0);
        return { top: c.top - d.top, left: c.left - d.left };
      },
      offsetParent: function() {
        return this.map(function() {
          var a = this.offsetParent || c.body;
          while (a && !cx.test(a.nodeName) && f.css(a, 'position') === 'static')
            a = a.offsetParent;
          return a;
        });
      },
    }),
    f.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function(
      a,
      c
    ) {
      var d = /Y/.test(c);
      f.fn[a] = function(e) {
        return f.access(
          this,
          function(a, e, g) {
            var h = cy(a);
            if (g === b)
              return h
                ? c in h
                  ? h[c]
                  : (f.support.boxModel && h.document.documentElement[e]) ||
                    h.document.body[e]
                : a[e];
            h
              ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop())
              : (a[e] = g);
          },
          a,
          e,
          arguments.length,
          null
        );
      };
    }),
    f.each({ Height: 'height', Width: 'width' }, function(a, c) {
      var d = 'client' + a,
        e = 'scroll' + a,
        g = 'offset' + a;
      (f.fn['inner' + a] = function() {
        var a = this[0];
        return a
          ? a.style
            ? parseFloat(f.css(a, c, 'padding'))
            : this[c]()
          : null;
      }),
        (f.fn['outer' + a] = function(a) {
          var b = this[0];
          return b
            ? b.style
              ? parseFloat(f.css(b, c, a ? 'margin' : 'border'))
              : this[c]()
            : null;
        }),
        (f.fn[c] = function(a) {
          return f.access(
            this,
            function(a, c, h) {
              var i, j, k, l;
              if (f.isWindow(a)) {
                (i = a.document), (j = i.documentElement[d]);
                return (f.support.boxModel && j) || (i.body && i.body[d]) || j;
              }
              if (a.nodeType === 9) {
                i = a.documentElement;
                if (i[d] >= i[e]) return i[d];
                return Math.max(a.body[e], i[e], a.body[g], i[g]);
              }
              if (h === b) {
                (k = f.css(a, c)), (l = parseFloat(k));
                return f.isNumeric(l) ? l : k;
              }
              f(a).css(c, h);
            },
            c,
            a,
            arguments.length,
            null
          );
        });
    }),
    (a.jQuery = a.$ = f),
    typeof define == 'function' &&
      define.amd &&
      define.amd.jQuery &&
      define('jquery', [], function() {
        return f;
      });
})(window);
// JavaScript Document

var include_super,
  foreigner,
  backpacker,
  HELP,
  SFSS,
  mature,
  withhold,
  otherLevies,
  PAYG,
  income,
  deductions,
  medicare,
  medicarePAYG,
  grossIncome,
  grossIncomeAnnual,
  taxableIncome,
  taxableIncomePAYG,
  tax,
  taxPAYG_Weekly,
  taxPAYG_Fortnightly,
  taxPAYG_Monthly,
  yearIndex = 0;

var dayF = 1 / 365;
var weekF = 1 / 52;
var fortnightF = 1 / 26;
var monthF = 1 / 12;

var prorata = false;
var prorataValue = 250 / 260;

$(document).ready(function() {
  // Publift sticky ad
  // var stickydiv = $('#home_rhs_1');
  //    var stickyPosition = stickydiv.position();
  //    $(window).scroll(function() {
  //          var scrollBarPosition = $(window).scrollTop();
  //          if (scrollBarPosition >= stickyPosition.top) {
  //              stickydiv.css({
  //                  'position': 'fixed',
  //                  'top': 5
  //              })

  //          } else {
  //              stickydiv.css({
  //                  'position': 'relative',
  //                  'top': 0
  //              })
  //          }
  //     })

  setTimeout(init(), 500);

  $('.tooltip').tooltipster({
    theme: 'tooltipster-paycalc',
    offsetY: '-5',
    animation: 'fall',
  });
});

function init() {
  var years = '';
  var yearSelect = document.getElementById('taxYearSelect');

  //clear();

  $('#paycycleSelectDays').hide();
  $('#paycycleHoursWeek').hide();
  $('#paycycleDPY').hide();
  $('#paycycleDPW').hide();
  $('#paycycleHPD').hide();
  $('#paycycleHPW').hide();
  $('#paycycleWPY').hide();

  //Build year select options based on taxData file
  for (i = 0; i < taxData.length; i++) {
    var data = taxData[i].year;
    var from = (data - 1).toString();
    var to = data.toString().slice(-2);
    var text = from + '-' + to;
    var selected = taxData[i].current == 'true';
    yearSelect.options[i] = new Option(text, data, selected);
    if (taxData[i].current == 'true') {
      yearIndex = i;
    }
  }

  yearSelect.options.selectedIndex = yearIndex;

  $('#taxYearSelect').bind('change', function() {
    yearIndex = yearSelect.options.selectedIndex;
    document.getElementById('superInput').value = defaultSuper();
    checkBackpackerTaxOption();
    calculate();
  });

  $('#paycycle').bind('change', function() {
    var cycle = $('#paycycle').val();
    updateInputOptions(cycle);
  });

  if (!checkPermalink()) {
    //getCookies();
  }

  $('.inputContainer').change(function() {
    validate();
    calculate();
  });

  $('#superInput').value = defaultSuper();
  $('#paycycle').trigger('change');
  $('#taxYearSelect').trigger('change');

  validate();
  calculate();
}

function updateInputOptions(type) {
  if (type == 'daily') {
    $('#paycycleDPY').show();
    $('#paycycleDPW').show();

    $('#paycycleHPD').hide();
    $('#paycycleHPW').hide();
    $('#paycycleWPY').hide();

    $('.witholding').hide();
  } else if (type == 'hourly_week') {
    $('#paycycleHPW').show();
    $('#paycycleWPY').show();

    $('#paycycleDPY').hide();
    $('#paycycleDPW').hide();
    $('#paycycleHPD').hide();
    $('.witholding').hide();
  } else if (type == 'hourly_day') {
    $('#paycycleHPW').hide();
    $('#paycycleWPY').hide();

    $('#paycycleDPY').show();
    $('#paycycleDPW').show();
    $('#paycycleHPD').show();
    $('.witholding').hide();
  } else {
    $('#paycycleDPY').hide();
    $('#paycycleDPW').hide();
    $('#paycycleHPD').hide();
    $('#paycycleHPW').hide();
    $('#paycycleWPY').hide();
    $('.witholding').show();
  }

  $('.witholding').show();
}

//Retrieve cookies and assign them to UI
function getCookies() {
  var cookieValue = getCookie('income');
  if (cookieValue) document.getElementById('income').value = cookieValue;

  cookieValue = getCookie('superannuation');
  if (cookieValue != undefined)
    $("input[name='superannuation']")[0].checked = isBoolean(cookieValue);

  cookieValue = getCookie('foreigner');
  if (cookieValue != undefined)
    $("input[name='foreigner']")[0].checked = isBoolean(cookieValue);

  cookieValue = getCookie('taxfree');
  if (cookieValue != undefined)
    $("input[name='taxfree']")[0].checked = isBoolean(cookieValue);

  cookieValue = getCookie('HELP');
  if (cookieValue != undefined)
    $("input[name='HELP']")[0].checked = isBoolean(cookieValue);

  cookieValue = getCookie('SFSS');
  if (cookieValue != undefined)
    $("input[name='SFSS']")[0].checked = isBoolean(cookieValue);

  cookieValue = getCookie('withhold');
  if (cookieValue != undefined)
    $("input[name='withhold']")[0].checked = isBoolean(cookieValue);

  cookieValue = getCookie('dpy');
  if (cookieValue != undefined) $('#dpy').val(cookieValue);

  cookieValue = getCookie('dpw');
  if (cookieValue != undefined) $('#dpw').val(cookieValue);

  cookieValue = getCookie('hpd');
  if (cookieValue != undefined) $('#hpd').val(cookieValue);

  cookieValue = getCookie('hpw');
  if (cookieValue != undefined) $('#hpw').val(cookieValue);

  cookieValue = getCookie('wpy');
  if (cookieValue != undefined) $('#wpy').val(cookieValue);

  cookieValue = getCookie('cycle');
  if (cookieValue != undefined) {
    setSelection(document.getElementById('paycycle'), cookieValue);
    updateInputOptions(cookieValue);
    $('#paycycle').trigger('change');
  }
}

//Commit Inputs to Browser Cookie
function setCookies() {
  var salary = parseFloat($('#income').val());
  setCookie('income', salary, 365);
  setCookie('superannuation', include_super, 365);
  setCookie('foreigner', foreigner, 365);
  setCookie('taxfree', noTaxfree, 365);
  setCookie('HELP', HELP, 365);
  setCookie('SFSS', SFSS, 365);
  setCookie('withhold', withhold, 365);
  setCookie('cycle', $('#paycycle').attr('value'), 365);
  setCookie('dpy', $('#dpy').attr('value'), 365);
  setCookie('dpw', $('#dpw').attr('value'), 365);
  setCookie('hpd', $('#hpd').attr('value'), 365);
  setCookie('hpw', $('#hpw').attr('value'), 365);
  setCookie('wpy', $('#wpy').attr('value'), 365);
}

function checkBackpackerTaxOption() {
  if (taxData[yearIndex].taxBackpacker != undefined) {
    $('.backpacker').show();
    $('.backpacker input').attr('checked', false);
  } else {
    $('.backpacker').hide();
    $('.backpacker input').attr('checked', false);
  }
}

function calculate() {
  updatePermalink();

  include_super = $("input[name='superannuation']").is(':checked');
  foreigner = $("input[name='foreigner']").is(':checked');
  backpacker = $("input[name='backpacker']").is(':checked');
  noTaxfree = $("input[name='taxfree']").is(':checked');
  HELP = $("input[name='HELP']").is(':checked');
  SFSS = $("input[name='SFSS']").is(':checked');
  mature = false; //$('input[name="Mature"]').is(':checked');
  withhold = $('input[name="withhold"]').is(':checked');

  if (foreigner || backpacker) {
    if (foreigner) {
      $('.taxfree input').prop('disabled', true);
      $('.backpacker input').prop('disabled', true);

      $('.taxfree input').attr('checked', false);
      $('.backpacker input').attr('checked', false);
    }
    if (backpacker) {
      $('.hecsOption input').prop('disabled', true);
      $('.sfssOption input').prop('disabled', true);
      $('.taxfree input').prop('disabled', true);
      $('.foreigner input').prop('disabled', true);

      $('.hecsOption input').attr('checked', false);
      $('.sfssOption input').attr('checked', false);
      $('.taxfree input').attr('checked', false);
      $('.foreigner input').attr('checked', false);
    }
  } else {
    $('.hecsOption input').prop('disabled', false);
    $('.sfssOption input').prop('disabled', false);
    $('.taxfree input').prop('disabled', false);
    $('.foreigner input').prop('disabled', false);
    $('.backpacker input').prop('disabled', false);
  }

  var superNameElement = document.getElementById('super_txt');
  if (!include_super) {
    superNameElement.innerHTML = 'Superannuation *';
  } else {
    superNameElement.innerHTML = 'Superannuation';
  }

  var taxYear = document.getElementById('taxYearSelect')[yearIndex].value;
  document.getElementById('tableTitle').innerHTML =
    taxYear - 1 + ' - ' + taxYear;

  var contractor = false;
  var cycle = $('#paycycle').val();
  if (cycle == 'daily' || cycle == 'hourly_week' || cycle == 'hourly_day')
    contractor = true;

  //if(contractor){
  //withhold = false;
  //}
  setCookies();

  // using ATO formula
  PAYG = hasPAYG();
  incomeData = getIncome();

  income = incomeData.income; // income WRT PAYG
  annualIncome = incomeData.annualIncome; // income WRT annual

  deductions = getDeductions();
  medicare = 0;
  medicarePAYG = 0;

  var division293 = getDivision293(annualIncome);
  var superannuation = 0;
  var superannuationPAYG = 0;

  if (include_super) {
    superannuation = getSuperannuation(annualIncome, true);
    superannuationPAYG = getSuperannuation(income, true);
    income -= getSuperannuation(income, true);
    annualIncome -= superannuation;
  } else {
    superannuation = getSuperannuation(annualIncome, false);
    superannuationPAYG = getSuperannuation(income, false);
  }

  grossIncome = income;
  grossIncomeAnnual = annualIncome;
  taxableIncome = grossIncomeAnnual - deductions;
  taxableIncomePAYG = income;

  tax = 0;

  taxPAYG_Weekly = 0;
  taxPAYG_Fortnightly = 0;
  taxPAYG_Monthly = 0;
  var paygPragma = '';

  // annual tax
  if (backpacker == true) {
    // base tax rate on monthly rate
    tax = getBackpackerIncomeTax(taxableIncome);
  } else if (foreigner == true) {
    tax = getForeignerIncomeTax(taxableIncome);
  } else if (noTaxfree) {
    tax = getIncomeTaxNoFreeThreshold(taxableIncome);
  } else {
    tax = getIncomeTax(taxableIncome);
  }
  tax = Math.round(tax);

  // PAYG tax
  if (PAYG) {
    if (backpacker == true) {
      taxPAYG_Weekly = getPAYGBackpacker(taxableIncomePAYG * weekF, 'weekly');
      taxPAYG_Monthly = getPAYGBackpacker(
        taxableIncomePAYG * monthF,
        'monthly'
      );
    } else if (foreigner == true) {
      taxPAYG_Weekly = getPAYGForeign(taxableIncomePAYG * weekF, 'weekly');
      taxPAYG_Monthly = getPAYGForeign(taxableIncomePAYG * monthF, 'monthly');
    } else if (noTaxfree == true) {
      taxPAYG_Weekly = getPAYGNoTaxFree(taxableIncomePAYG * weekF, 'weekly');
      taxPAYG_Monthly = getPAYGNoTaxFree(taxableIncomePAYG * monthF, 'monthly');
    } else {
      taxPAYG_Weekly = getPAYG(taxableIncomePAYG * weekF, 'weekly');
      taxPAYG_Monthly = getPAYG(taxableIncomePAYG * monthF, 'monthly');
    }
    //taxPAYG_Fortnightly = Math.round(taxPAYG_Weekly*2);
    //taxPAYG_Monthly = Math.round((taxPAYG_Weekly/weekF)*monthF);
    taxPAYG_Fortnightly = taxPAYG_Weekly * 2;
  } else {
    if (backpacker == true) {
      taxPAYG_Weekly = getBackpackerIncomeTax(taxableIncomePAYG) * weekF;
    } else if (foreigner == true) {
      taxPAYG_Weekly = getForeignerIncomeTax(taxableIncomePAYG) * weekF;
    } else if (noTaxfree) {
      taxPAYG_Weekly = getIncomeTaxNoFreeThreshold(taxableIncomePAYG) * weekF;
    } else {
      taxPAYG_Weekly = getIncomeTax(taxableIncomePAYG) * weekF;
    }
    //taxPAYG_Fortnightly = Math.round(taxPAYG_Weekly*2);
    //taxPAYG_Monthly = Math.round((taxPAYG_Weekly/weekF)*monthF);
    taxPAYG_Fortnightly = taxPAYG_Weekly * 2;
    taxPAYG_Monthly = (taxPAYG_Weekly / weekF) * monthF;
  }

  //other taxes
  var other_HECS = 0;
  var other_SFSS = 0;
  var other = 0;
  var other_PAYG = 0;
  var nonDeductableOther = 0; //Other taxes that aren't part of income tax - this is only used to reverse engineer the ATO PAYG values

  var combined_student_loan = Number(taxYear) >= 2020;
  if (noTaxfree) {
    if (combined_student_loan) {
      // only apply once
      other_HECS = getHELP_noTaxFree(taxableIncome, HELP || SFSS);
      other_PAYG += getHELP_noTaxFree(taxableIncome, HELP || SFSS, true);
    } else {
      other_HECS = getHELP_noTaxFree(taxableIncome, HELP);
      other_SFSS = getSFSS_noTaxFree(taxableIncome, SFSS);

      other_PAYG += getHELP_noTaxFree(taxableIncome, HELP, true);
      other_PAYG += getSFSS_noTaxFree(taxableIncome, SFSS, true);
    }
  } else {
    if (combined_student_loan) {
      // apply once only
      other_HECS = getHELP(taxableIncome, HELP || SFSS);
      other_PAYG += getHELP(taxableIncome, HELP || SFSS);
    } else {
      other_HECS = getHELP(taxableIncome, HELP);
      other_SFSS = getSFSS(taxableIncome, SFSS);

      other_PAYG += getHELP(taxableIncome, HELP);
      other_PAYG += getSFSS(taxableIncome, SFSS);
    }
  }

  other += other_HECS;
  other += other_SFSS;

  nonDeductableOther = other;

  otherLevies = getOther(taxableIncome);

  other += otherLevies;
  other_PAYG += otherLevies;

  medicare = getMedicare(taxableIncome);
  medicareSurcharge = getMedicareSurcharge(taxableIncome);
  medicarePAYG = getMedicare(taxableIncomePAYG);

  if (foreigner || backpacker) {
    medicare = 0;
    medicarePAYG = 0;
  }

  // NORMALISE TAX TABLE DATA
  if (PAYG) {
    // this needs to be taken from the taxPAYG value as the ATO tax tables include it
    // also includes levies
    taxPAYG_Weekly -= medicarePAYG * weekF + otherLevies * weekF;
    taxPAYG_Fortnightly -= medicarePAYG * fortnightF + otherLevies * fortnightF;
    taxPAYG_Monthly -= medicarePAYG * monthF + otherLevies * monthF;
  }

  // rounding
  // other = Math.round(other);
  // other_PAYG = Math.round(other_PAYG);
  // medicare = Math.round(medicare);

  offsets = 0;

  var lito = getLITO(taxableIncome);
  var lamito = getLAMITO(taxableIncome);
  var mito = getMITO(taxableIncome);
  var mawto = 0;
  if (mature) {
    mawto = getMAWTO(taxableIncome);
  }

  /* Check LAMITO

        console.log("-------LAMITO--------")
        for(var i = 0; i< 130000; i+= 1000){
            console.log( i, getLAMITO(i));
        }
        console.log("---------------")
        */

  // LITO offsets weighted by pay schedule
  var offsetsPAYG_week = 0;
  var offsetsPAYG_fortnight = 0;
  var offsetsPAYG_month = 0;

  if (foreigner == false && noTaxfree == false && backpacker == false) {
    offsets = lito + mawto + mito + lamito;
    offsets *= -1;
    if (withhold) {
      offsetsPAYG_week = getLITOPAYG(offsets, taxPAYG_Monthly * 12, 0) * weekF;
      offsetsPAYG_fortnight =
        getLITOPAYG(offsets, taxPAYG_Monthly * 12, 1) * fortnightF;
      offsetsPAYG_month =
        getLITOPAYG(offsets, taxPAYG_Monthly * 12, 2) * monthF;
    }
  }

  if (tax + offsets < 0) {
    // matwo is maxed out
    offsets = -1 * tax;
  }

  /*
        // use ready reconer style LITO roudings
        if(PAYG){
            offsetsPAYG_week = Math.floor(offsetsPAYG_week);
            offsetsPAYG_fortnight = Math.floor(offsetsPAYG_fortnight);
            offsetsPAYG_month = Math.floor(offsetsPAYG_month);

        }*/

  // calculate gross Tax

  grossTax = Math.round(tax + other + offsets + medicare);

  grossTaxPAYG_weekly = Math.round(
    taxPAYG_Weekly +
      other_PAYG * weekF +
      offsetsPAYG_week +
      medicarePAYG * weekF
  );
  grossTaxPAYG_fortnightly = Math.round(
    taxPAYG_Fortnightly +
      other_PAYG * fortnightF +
      offsetsPAYG_fortnight +
      medicarePAYG * fortnightF
  );
  grossTaxPAYG_monthly = Math.round(
    taxPAYG_Monthly +
      other_PAYG * monthF +
      offsetsPAYG_month +
      medicarePAYG * monthF
  );

  // net income
  net = grossIncomeAnnual - grossTax; //- superannuation
  netPAYG_week = taxableIncomePAYG * weekF - grossTaxPAYG_weekly;
  netPAYG_fortnightly =
    taxableIncomePAYG * fortnightF - grossTaxPAYG_fortnightly;
  netPAYG_monthly = taxableIncomePAYG * monthF - grossTaxPAYG_monthly;

  if (prorata) {
    // which prorata bracket
    var type = $('#prorata_type').value;
    var value = $('#prorata_val').value;

    if (type == 'Days') {
      net = taxableIncomePAYG * weekF * value;
    } else if (type == 'Weeks') {
      net = netWeekly * value;
    } else if (type == 'Months') {
      net = netMonthly * value;
    }
  }

  $('#net_weekly').text(formatPrice(netPAYG_week, false));
  $('#net_fortnightly').text(formatPrice(netPAYG_fortnightly, false));
  $('#net_monthly').text(formatPrice(netPAYG_monthly, false));
  $('#net_annually').text(formatPrice(net, false));

  $('#gross_weekly').text(formatPrice(grossIncome * weekF, false));
  $('#gross_fortnightly').text(formatPrice(grossIncome * fortnightF, false));
  $('#gross_monthly').text(formatPrice(grossIncome * monthF, false));
  $('#gross_annually').text(formatPrice(grossIncomeAnnual, false));

  if (include_super) {
    $('#super_weekly').text(formatPrice(superannuationPAYG * weekF, true));
    $('#super_fortnightly').text(
      formatPrice(superannuationPAYG * fortnightF, true)
    );
    $('#super_monthly').text(formatPrice(superannuationPAYG * monthF, true));
    $('#super_annually').text(formatPrice(superannuation, true));
  } else {
    $('#super_weekly').text(
      '[' + formatPrice(superannuationPAYG * weekF, false) + ']'
    );
    $('#super_fortnightly').text(
      '[' + formatPrice(superannuationPAYG * fortnightF, false) + ']'
    );
    $('#super_monthly').text(
      '[' + formatPrice(superannuationPAYG * monthF, false) + ']'
    );
    $('#super_annually').text('[' + formatPrice(superannuation, false) + ']');
  }

  //Total Taxes
  $('#tax_gross_weekly').text(formatPrice(grossTaxPAYG_weekly), true);
  $('#tax_gross_fortnightly').text(formatPrice(grossTaxPAYG_fortnightly, true));
  $('#tax_gross_monthly').text(formatPrice(grossTaxPAYG_monthly, true));
  $('#tax_gross_annually').text(formatPrice(grossTax, true));

  //Income Tax
  $('#tax_weekly').text(formatPrice(taxPAYG_Weekly, true) + paygPragma);
  $('#tax_fortnightly').text(
    formatPrice(taxPAYG_Fortnightly, true) + paygPragma
  );
  $('#tax_monthly').text(formatPrice(taxPAYG_Monthly, true) + paygPragma);
  $('#tax_annually').text(formatPrice(tax, true));

  $('#medicare_weekly').text(formatPrice(medicarePAYG * weekF, true));
  $('#medicare_fortnightly').text(formatPrice(medicarePAYG * fortnightF, true));
  $('#medicare_monthly').text(formatPrice(medicarePAYG * monthF, true));
  $('#medicare_annually').text(formatPrice(medicare, true));

  //Other taxes & Levies
  $('#other_weekly').text(formatPrice(other_PAYG * weekF, true));
  $('#other_fortnightly').text(formatPrice(other_PAYG * fortnightF, true));
  $('#other_monthly').text(formatPrice(other_PAYG * monthF, true));
  $('#other_annually').text(formatPrice(other, true));

  // Tax Offsets
  if (withhold) {
    $('#offsets_weekly').text(formatPrice(offsetsPAYG_week, false));
    $('#offsets_fortnightly').text(formatPrice(offsetsPAYG_fortnight, false));
    $('#offsets_monthly').text(formatPrice(offsetsPAYG_month, false));
  } else {
    $('#offsets_weekly').text(' - ');
    $('#offsets_fortnightly').text(' - ');
    $('#offsets_monthly').text(' - ');
  }
  $('#offsets_annually').text(formatPrice(offsets, false));

  if (isSuperCap(grossIncomeAnnual)) {
    var t = $('#super_weekly').text();
    $('#super_weekly').text(t + '**');

    t = $('#super_fortnightly').text();
    $('#super_fortnightly').text(t + '**');

    t = $('#super_monthly').text();
    $('#super_monthly').text(t + '**');

    t = $('#super_annually').text();
    $('#super_annually').text(t + '**');
    //$("#super_weekly").addClass("supercap");
    //$("#super_fortnightly").addClass("supercap");
    //$("#super_monthly").addClass("supercap");
    //$("#super_annually").addClass("supercap");
  }

  var footnotes = '<p>';

  if (!include_super) {
    footnotes +=
      '* This amount is paid by your employer into your superannuation fund.</br>';
  }

  if (isSuperCap(grossIncomeAnnual)) {
    footnotes +=
      '** Your income is above the maximum base limit for employer superannation contributions. This means that your employer can limit your super contributions based on earnings upto ' +
      formatPrice(getSuperCap()) +
      " per annum. Refer to <span class='supercap'><a href='https://www.ato.gov.au/rates/key-superannuation-rates-and-thresholds/?page=25'>Maximum super contribution base</a></span></br>";
  }

  //getSuperCap
  if (foreigner || backpacker) {
    footnotes +=
      '<sup>1</sup> Since you are a non-resident you are not liable for the Medicare levy.<br />';
  } else {
    if (Math.round(medicare) == 0) {
      footnotes += '<sup>1</sup> You have no Medicare to pay.<br />';
    } else {
      footnotes +=
        '<sup>1</sup> You have a Medicare levy of ' +
        formatPrice(medicare) +
        '. ';
      footnotes +=
        'The calculation on the Medicare levy assumes you are single with no dependants.<br />';
    }
  }
  if (medicareSurcharge > 0) {
    footnotes +=
      'In addition, if you do not have a private health fund you will be liable for an additional Medicare surcharge of ' +
      formatPrice(medicareSurcharge) +
      ' . ';
    footnotes +=
      'The calculation on the Medicare levy assumes you are single with no dependants.<br />';
  }

  // other levys and taxes
  footnotes += '<sup>2</sup> ';
  var footnotesOther = false;

  if (other_HECS > 0) {
    footnotes += 'You have a HELP/TSL liability of ' + formatPrice(other_HECS);
    footnotesOther = true;
  }

  if (other_SFSS > 0) {
    if (footnotesOther == true) {
      footnotes += ', a Student loan repayment of ' + formatPrice(other_SFSS);
    } else {
      footnotes +=
        'You have a Student loan repayment of ' + formatPrice(other_SFSS);
    }
    footnotesOther = true;
  }

  if (otherLevies) {
    if (footnotesOther == true) {
      footnotes +=
        ', and there are additional levies of ' +
        formatPrice(otherLevies) +
        ' for the ' +
        getLevyNames();
    } else {
      footnotes +=
        'There are additional levies of ' +
        formatPrice(otherLevies) +
        ' for the ' +
        getLevyNames();
    }
    footnotesOther = true;
  }

  if (footnotesOther == false) {
    footnotes += 'There are not other additional levies.<br/>';
  } else {
    footnotes += '.<br/>';
  }

  if (foreigner || backpacker) {
    footnotes +=
      '<sup>3</sup> As a non-resident you cannot claim the Low Income Tax offset.<br/>';
  } else {
    if (offsets == 0) {
      footnotes +=
        '<sup>3</sup> You may be entitled to other offsets such as the Low Income Tax Offset.</br>';
    } else {
      footnotes += '<sup>3</sup> You are entitled to ';
      if (lito > 0) {
        footnotes += formatPrice(lito) + ' Low Income Tax Offset. ';
      }
      if (mawto > 0) {
        footnotes += formatPrice(mawto) + ' Mature Age Worker Tax Offset. ';
      }
      if (lamito > 0) {
        footnotes +=
          formatPrice(lamito) + ' Low And Middle Income Tax Offset. ';
      }
    }
  }

  if (division293 > 0) {
    footnotes +=
      '<sup>*</sup>You may be liable for the Division 293 Superannuation surcharge of up to ' +
      formatPrice(division293) +
      '<br/>';
  }

  footnotes += '<br>This calculator is an estimate.';

  //$("#footnotes").html("<p>hello these are the footnotes</p>");
  footnotes += '</p>';
  $('#footnotes').html(footnotes);
}

var taxData = [
  // {
  //   "year": "2012","current":"false",
  //   "tax": {
  // 	  "incremental":1,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":6000, 	"type":"percent", "nearest":1, "value":0},
  // 	  {"from":6001, 	"to":37000, 	"type":"percent", "nearest":1, "value":15},
  // 	  {"from":37001, 	"to":80000, 	"type":"percent", "nearest":1, "value":30},
  // 	  {"from":80001, 	"to":180000, 	"type":"percent", "nearest":1, "value":37},
  // 	  {"from":180001, 	"to":0, 		"type":"percent", "nearest":1, "value":45}]
  //   },
  //   "taxNoFreeThreshold": {
  // 	  "incremental":1,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":37000, 	"type":"percent", "nearest":1, "value":15},
  // 	  {"from":37000, 	"to":80000, 	"type":"percent", "nearest":1, "value":30},
  // 	  {"from":80000, 	"to":180000, 	"type":"percent", "nearest":1, "value":37},
  // 	  {"from":180000, 	"to":0, 		"type":"percent", "nearest":1, "value":45}]
  //   },

  //   "taxNonResident": {
  // 	  "incremental":1,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":80000, 	"type":"percent", "nearest":1, "value":30},
  // 	  {"from":80000, 	"to":180000, 	"type":"percent", "nearest":1, "value":37},
  // 	  {"from":180000, 	"to":0, 		"type":"percent", "nearest":1, "value":45}]
  //   },
  //   "lito":{
  // 	  "incremental":1,
  // 	  "paygLoading":0.7,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":29999, 	"type":"fixed", 	"nearest":1, "value":"-1500"},
  // 	  {"from":29999, 	"to":67500, 	"type":"percent", 	"nearest":1, "value":4}
  // 	  ]
  //   },

  //   "lito":{
  // 	  "incremental":0,
  // 	  "paygLoading":1.0,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":29999, 	"type":"fixed", 	"nearest":1, "value":"1500"},
  //     {"from":29999, 	"to":67500, 	"type":"rate", 	"nearest":1, "start":1500, "end":0, "value":-4},
  //     {"from":67500, 	"to":0, 	"type":"fixed", 	"nearest":1, "value":0}
  // 	  ]
  //   },

  //   "mawto":{
  // 	  "incremental":0,
  // 	  "paygLoading":1.0,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":0, 	"type":"fixed", 	"nearest":1, "value":0}
  // 	  ]
  //   },
  //   "medicare":{
  // 	  "incremental":1,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":19404, 	"type":"percent", 	"nearest":1, "value":0},
  // 	  {"from":19404, 	"to":22828, 	"type":"percent", 	"nearest":1, "value":10.0},
  // 	  {"from":22828, 	"to":0, 		"type":"percent", 	"nearest":1, "value":1.5, "incremental":"false"}
  // 	  ]
  //   },
  //   "medicareSurcharge":{
  // 	  "incremental":0,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":70000, 	"type":"percent", 	"nearest":1, "value":0},
  // 	  {"from":70000, 	"to":0, 		"type":"percent", 	"nearest":1, "value":1.25}
  // 	  ]
  //   },
  //   "superannuation":{
  // 	  "incremental":0,
  // 	  "cap":16651.60,
  // 	  "cap_50":50000,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":0, 	"type":"percent", 	"nearest":1, "value":9}
  // 	  ]
  //   },
  //   "division293":{
  // 	  "incremental":1,
  // 	  "brackets":[
  //       {"from":0, 		"to":300000, 	"type":"percent", 	"nearest":1, "value":0.0},
  //       {"from":300000, 		"to":0, 	"type":"percent", 	"nearest":1, "value":15.0}
  // 	  ]
  //   },
  //   "other":[{
  // 		  "name":"Flood Levy",
  // 		  "incremental":1,
  // 		  "brackets":[
  // 		  {"from":0, 		"to":50000, 	"type":"fixed", 	"nearest":1, "value":0},
  // 		  {"from":50000, 	"to":1000000, 	"type":"percent", 	"nearest":1, "value":0.5},
  // 		  {"from":100000, 	"to":0, 		"type":"percent", 	"nearest":1, "value":1.0}
  // 		  ]
  // 	}
  //   ],
  //   "help":{
  // 	  "incremental":0,
  // 	  "brackets":[
  // 		{"from":0, 		"to":47196, 	"type":"fixed", 	"nearest":1, 	"value":0},
  // 		{"from":47196, 	"to":52572, 	"type":"percent", 	"nearest":1, 	"value":4},
  // 		{"from":52572, 	"to":57947, 	"type":"percent", 	"nearest":1, 	"value":4.5},
  // 		{"from":57947, 	"to":60993, 	"type":"percent", 	"nearest":1, 	"value":5},
  // 		{"from":60993, 	"to":65563, 	"type":"percent", 	"nearest":1, 	"value":5.5},
  // 		{"from":65563, 	"to":71006, 	"type":"percent", 	"nearest":1, 	"value":6},
  // 		{"from":71006, 	"to":74743, 	"type":"percent", 	"nearest":1, 	"value":6.5},
  // 		{"from":74743, 	"to":82253, 	"type":"percent", 	"nearest":1,	"value":7},
  // 		{"from":82253, 	"to":87649, 	"type":"percent", 	"nearest":1, 	"value":7.5},
  // 		{"from":87649, 	"to":0, 		"type":"percent", 	"nearest":1, 	"value":8}
  // 	  ]
  //   },
  //   "sfss":{
  // 	  "incremental":0,
  // 	  "brackets":[
  // 	  {"from":0, 		"to":47196, 	"type":"fixed", 	"nearest":1, 	"value":0},
  // 	  {"from":47196, 	"to":57947, 	"type":"percent", 	"nearest":1, 	"value":2},
  // 	  {"from":57947, 	"to":82253, 	"type":"percent", 	"nearest":1, 	"value":3},
  // 	  {"from":82253, 	"to":0, 		"type":"percent", 	"nearest":1, 	"value":4}
  // 	  ]
  //   }
  // },

  {
    year: '2013',
    current: 'false',
    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },

    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },
    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [
        {
          from: 0,
          to: 10000,
          type: 'percent',
          nearest: 1,
          value: -5,
          incremental: 'false',
        },
        {
          from: 10000,
          to: 53000,
          type: 'fixed',
          nearest: 1,
          value: -500,
          incremental: 'true',
        },
        {
          from: 53000,
          to: 63000,
          type: 'percent',
          nearest: 1,
          value: 5,
          incremental: 'true',
        },
        {
          from: 63000,
          to: 0,
          type: 'fixed',
          nearest: 1,
          value: 0,
          incremental: 'false',
        },
      ],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 20541, type: 'percent', nearest: 1, value: 0 },
        { from: 20541, to: 24167, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 24167,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 1.5,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 84000, type: 'percent', nearest: 1, value: 0 },
        { from: 84000, to: 97000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 97000, to: 130000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 130000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [],
    superannuation: {
      incremental: 0,
      cap: 183000,
      cap_50: 25000,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9 }],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 49096, type: 'fixed', nearest: 1, value: 0 },
        { from: 49096, to: 54688, type: 'percent', nearest: 1, value: 4 },
        { from: 54688, to: 60279, type: 'percent', nearest: 1, value: 4.5 },
        { from: 60279, to: 63448, type: 'percent', nearest: 1, value: 5 },
        { from: 63448, to: 68202, type: 'percent', nearest: 1, value: 5.5 },
        { from: 68202, to: 73864, type: 'percent', nearest: 1, value: 6 },
        { from: 73864, to: 77751, type: 'percent', nearest: 1, value: 6.5 },
        { from: 77751, to: 85564, type: 'percent', nearest: 1, value: 7 },
        { from: 85564, to: 91177, type: 'percent', nearest: 1, value: 7.5 },
        { from: 91177, to: 0, type: 'percent', nearest: 1, value: 8 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 49096, type: 'fixed', nearest: 1, value: 0 },
        { from: 49096, to: 60279, type: 'percent', nearest: 1, value: 2 },
        { from: 60279, to: 85564, type: 'percent', nearest: 1, value: 3 },
        { from: 85564, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },
  {
    year: '2014',
    current: 'false',
    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
      payg: [
        { income: 355, a: 0, b: 0 },
        { income: 395, a: 0.19, b: 67.4635 },
        { income: 464, a: 0.29, b: 106.9673 },
        { income: 711, a: 0.205, b: 67.4636 },
        { income: 1282, a: 0.3427, b: 165.4424 },
        { income: 1538, a: 0.34, b: 161.9809 },
        { income: 3461, a: 0.385, b: 231.2116 },
        { income: 0, a: 0.465, b: 508.1347 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 45, a: 0.19, b: 0.19 },
        { income: 361, a: 0.2216, b: 1.4232 },
        { income: 932, a: 0.3427, b: 45.2055 },
        { income: 1188, a: 0.34, b: 42.689 },
        { income: 3111, a: 0.385, b: 96.1698 },
        { income: 0, a: 0.465, b: 345.0928 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 1538, a: 0.325, b: 0.325 },
        { income: 3461, a: 0.37, b: 69.2308 },
        { income: 0, a: 0.45, b: 346.1538 },
      ],
    },
    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },
    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [
        {
          from: 0,
          to: 10000,
          type: 'percent',
          nearest: 1,
          value: -5,
          incremental: 'false',
        },
        {
          from: 10000,
          to: 53000,
          type: 'fixed',
          nearest: 1,
          value: -500,
          incremental: 'true',
        },
        {
          from: 53000,
          to: 63000,
          type: 'percent',
          nearest: 1,
          value: 5,
          incremental: 'true',
        },
        {
          from: 63000,
          to: 0,
          type: 'fixed',
          nearest: 1,
          value: 0,
          incremental: 'false',
        },
      ],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 20541, type: 'percent', nearest: 1, value: 0 },
        { from: 20542, to: 24167, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 24168,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 1.5,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 88000, type: 'percent', nearest: 1, value: 0 },
        { from: 88000, to: 102000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 102000, to: 136000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 136000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [],
    superannuation: {
      incremental: 0,
      cap: 192160,
      cap_50: 35000,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.25 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 300000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 300000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 51309, type: 'fixed', nearest: 1, value: 0 },
        { from: 51309, to: 57153, type: 'percent', nearest: 1, value: 4 },
        { from: 57153, to: 62997, type: 'percent', nearest: 1, value: 4.5 },
        { from: 62997, to: 66308, type: 'percent', nearest: 1, value: 5 },
        { from: 66308, to: 71277, type: 'percent', nearest: 1, value: 5.5 },
        { from: 71277, to: 77194, type: 'percent', nearest: 1, value: 6 },
        { from: 77194, to: 81256, type: 'percent', nearest: 1, value: 6.5 },
        { from: 81256, to: 89421, type: 'percent', nearest: 1, value: 7 },
        { from: 89421, to: 95287, type: 'percent', nearest: 1, value: 7.5 },
        { from: 95287, to: 0, type: 'percent', nearest: 1, value: 8 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 49096, type: 'fixed', nearest: 1, value: 0 },
        { from: 49096, to: 60279, type: 'percent', nearest: 1, value: 2 },
        { from: 60279, to: 85564, type: 'percent', nearest: 1, value: 3 },
        { from: 85564, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },
  {
    year: '2015',
    current: 'false',
    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 355, a: 0, b: 0 },
        { income: 395, a: 0.19, b: 67.4635 },
        { income: 464, a: 0.29, b: 106.9673 },
        { income: 711, a: 0.21, b: 67.4642 },
        { income: 1282, a: 0.3477, b: 165.4431 },
        { income: 1538, a: 0.345, b: 161.9815 },
        { income: 3461, a: 0.39, b: 231.2123 },
        { income: 0, a: 0.49, b: 577.3662 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 45, a: 0.19, b: 0.19 },
        { income: 361, a: 0.2321, b: 1.8961 },
        { income: 932, a: 0.3477, b: 43.69 },
        { income: 1188, a: 0.345, b: 41.1734 },
        { income: 3111, a: 0.39, b: 94.6542 },
        { income: 0, a: 0.49, b: 405.808 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 1538, a: 0.325, b: 0.325 },
        { income: 3461, a: 0.37, b: 69.2308 },
        { income: 0, a: 0.45, b: 346.1538 },
      ],
    },
    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },
    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 20896, type: 'percent', nearest: 1, value: 0 },
        { from: 20896, to: 26120, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 26120,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [
      {
        name: 'Temporary Budget Repair levy',
        incremental: 1,
        brackets: [
          { from: 0, to: 180000, type: 'percent', nearest: 1, value: 0 },
          { from: 180000, to: 0, type: 'percent', nearest: 1, value: 2.0 },
        ],
      },
    ],
    superannuation: {
      incremental: 0,
      cap: 197720,
      cap_max: 30000,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 300000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 300000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 53345, type: 'fixed', nearest: 1, value: 0 },
        { from: 53345, to: 59421, type: 'percent', nearest: 1, value: 4 },
        { from: 59421, to: 65497, type: 'percent', nearest: 1, value: 4.5 },
        { from: 65497, to: 68939, type: 'percent', nearest: 1, value: 5 },
        { from: 68939, to: 74105, type: 'percent', nearest: 1, value: 5.5 },
        { from: 74105, to: 80257, type: 'percent', nearest: 1, value: 6 },
        { from: 80257, to: 84481, type: 'percent', nearest: 1, value: 6.5 },
        { from: 84481, to: 92970, type: 'percent', nearest: 1, value: 7 },
        { from: 92970, to: 99069, type: 'percent', nearest: 1, value: 7.5 },
        { from: 99069, to: 0, type: 'percent', nearest: 1, value: 8 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 53345, type: 'fixed', nearest: 1, value: 0 },
        { from: 53345, to: 65497, type: 'percent', nearest: 1, value: 2 },
        { from: 65497, to: 92970, type: 'percent', nearest: 1, value: 3 },
        { from: 92970, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },
  {
    year: '2016',
    current: 'false',
    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 355, a: 0, b: 0 },
        { income: 395, a: 0.19, b: 67.4635 },
        { income: 464, a: 0.29, b: 106.9673 },
        { income: 711, a: 0.21, b: 67.4642 },
        { income: 1282, a: 0.3477, b: 165.4431 },
        { income: 1538, a: 0.345, b: 161.9815 },
        { income: 3461, a: 0.39, b: 231.2123 },
        { income: 0, a: 0.49, b: 577.3662 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
      payg: [
        { income: 45, a: 0.19, b: 0.19 },
        { income: 361, a: 0.2321, b: 1.8961 },
        { income: 932, a: 0.3477, b: 43.69 },
        { income: 1188, a: 0.345, b: 41.1734 },
        { income: 3111, a: 0.39, b: 94.6542 },
        { income: 0, a: 0.49, b: 405.808 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 80000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 80000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 1538, a: 0.325, b: 0.325 },
        { income: 3461, a: 0.37, b: 69.2308 },
        { income: 0, a: 0.47, b: 415.3846 },
      ],
    },
    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },
    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 21335, type: 'percent', nearest: 1, value: 0 },
        { from: 21335, to: 26668, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 26668,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [
      {
        name: 'Temporary Budget Repair levy',
        incremental: 1,
        brackets: [
          { from: 0, to: 180000, type: 'percent', nearest: 1, value: 0 },
          { from: 180000, to: 0, type: 'percent', nearest: 1, value: 2.0 },
        ],
      },
    ],
    superannuation: {
      incremental: 0,
      cap: 203240,
      cap_50: 35000,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 300000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 300000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 54126, type: 'fixed', nearest: 1, value: 0 },
        { from: 54126, to: 60293, type: 'percent', nearest: 1, value: 4 },
        { from: 60293, to: 66457, type: 'percent', nearest: 1, value: 4.5 },
        { from: 66457, to: 69950, type: 'percent', nearest: 1, value: 5 },
        { from: 69950, to: 75191, type: 'percent', nearest: 1, value: 5.5 },
        { from: 75191, to: 81433, type: 'percent', nearest: 1, value: 6 },
        { from: 81433, to: 85719, type: 'percent', nearest: 1, value: 6.5 },
        { from: 85719, to: 94332, type: 'percent', nearest: 1, value: 7 },
        { from: 94332, to: 100520, type: 'percent', nearest: 1, value: 7.5 },
        { from: 100520, to: 0, type: 'percent', nearest: 1, value: 8 },
      ],
    },
    help_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 35926, type: 'fixed', nearest: 1, value: 0 },
        { from: 35926, to: 42093, type: 'percent', nearest: 1, value: 4 },
        { from: 42093, to: 48257, type: 'percent', nearest: 1, value: 4.5 },
        { from: 48257, to: 51750, type: 'percent', nearest: 1, value: 5 },
        { from: 51750, to: 56991, type: 'percent', nearest: 1, value: 5.5 },
        { from: 56991, to: 63233, type: 'percent', nearest: 1, value: 6 },
        { from: 63233, to: 67519, type: 'percent', nearest: 1, value: 6.5 },
        { from: 67519, to: 76132, type: 'percent', nearest: 1, value: 7 },
        { from: 76132, to: 82320, type: 'percent', nearest: 1, value: 7.5 },
        { from: 82320, to: 0, type: 'percent', nearest: 1, value: 8 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 54126, type: 'fixed', nearest: 1, value: 0 },
        { from: 54126, to: 66456, type: 'percent', nearest: 1, value: 2 },
        { from: 66456, to: 94331, type: 'percent', nearest: 1, value: 3 },
        { from: 94331, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
    sfss_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 35926, type: 'fixed', nearest: 1, value: 0 },
        { from: 35926, to: 48257, type: 'percent', nearest: 1, value: 2 },
        { from: 48257, to: 76132, type: 'percent', nearest: 1, value: 3 },
        { from: 76132, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },

  {
    year: '2017',
    current: 'false',

    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 87000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 87000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 355, a: 0, b: 0 },
        { income: 410, a: 0.19, b: 67.4635 },
        { income: 512, a: 0.29, b: 108.4923 },
        { income: 711, a: 0.21, b: 67.4646 },
        { income: 1282, a: 0.3477, b: 165.4435 },
        { income: 1673, a: 0.345, b: 161.9819 },
        { income: 3461, a: 0.39, b: 237.2704 },
        { income: 0, a: 0.49, b: 583.4242 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 87000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 87000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
      payg: [
        { income: 60, a: 0.19, b: 0.19 },
        { income: 361, a: 0.2332, b: 2.6045 },
        { income: 932, a: 0.3477, b: 44.0006 },
        { income: 1323, a: 0.345, b: 41.4841 },
        { income: 3111, a: 0.39, b: 101.0225 },
        { income: 0, a: 0.49, b: 412.1764 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 87000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 87000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 1673, a: 0.325, b: 0.325 },
        { income: 3461, a: 0.37, b: 75.2885 },
        { income: 0, a: 0.47, b: 421.4423 },
      ],
    },
    taxBackpacker: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 15 },
        { from: 37000, to: 87000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 87000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },
    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 21335, type: 'percent', nearest: 1, value: 0 },
        { from: 21335, to: 26668, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 26668,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [
      {
        name: 'Temporary Budget Repair levy',
        incremental: 1,
        brackets: [
          { from: 0, to: 180000, type: 'percent', nearest: 1, value: 0 },
          { from: 180000, to: 0, type: 'percent', nearest: 1, value: 2.0 },
        ],
      },
    ],
    superannuation: {
      incremental: 0,
      cap: 206480,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 250000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 250000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 54869, type: 'fixed', nearest: 1, value: 0 },
        { from: 54869, to: 61120, type: 'percent', nearest: 1, value: 4 },
        { from: 61120, to: 67369, type: 'percent', nearest: 1, value: 4.5 },
        { from: 67369, to: 70910, type: 'percent', nearest: 1, value: 5 },
        { from: 70910, to: 76223, type: 'percent', nearest: 1, value: 5.5 },
        { from: 76223, to: 82551, type: 'percent', nearest: 1, value: 6 },
        { from: 82551, to: 86895, type: 'percent', nearest: 1, value: 6.5 },
        { from: 86895, to: 95627, type: 'percent', nearest: 1, value: 7 },
        { from: 95627, to: 101900, type: 'percent', nearest: 1, value: 7.5 },
        { from: 101900, to: 0, type: 'percent', nearest: 1, value: 8 },
      ],
    },
    help_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 36669, type: 'fixed', nearest: 1, value: 0 },
        { from: 36669, to: 42920, type: 'percent', nearest: 1, value: 4 },
        { from: 42920, to: 49169, type: 'percent', nearest: 1, value: 4.5 },
        { from: 49169, to: 52710, type: 'percent', nearest: 1, value: 5 },
        { from: 52710, to: 58023, type: 'percent', nearest: 1, value: 5.5 },
        { from: 58023, to: 64351, type: 'percent', nearest: 1, value: 6 },
        { from: 64351, to: 68695, type: 'percent', nearest: 1, value: 6.5 },
        { from: 68695, to: 77427, type: 'percent', nearest: 1, value: 7 },
        { from: 77427, to: 83700, type: 'percent', nearest: 1, value: 7.5 },
        { from: 83700, to: 0, type: 'percent', nearest: 1, value: 8 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 54869, type: 'fixed', nearest: 1, value: 0 },
        { from: 54869, to: 67368, type: 'percent', nearest: 1, value: 2 },
        { from: 67368, to: 95626, type: 'percent', nearest: 1, value: 3 },
        { from: 95626, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
    sfss_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 36669, type: 'fixed', nearest: 1, value: 0 },
        { from: 36669, to: 49169, type: 'percent', nearest: 1, value: 2 },
        { from: 49169, to: 77427, type: 'percent', nearest: 1, value: 3 },
        { from: 77427, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },

  {
    year: '2018',
    current: 'false',

    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 87000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 87000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 355, a: 0.0, b: 0.0 },
        { income: 416, a: 0.19, b: 67.4635 },
        { income: 520, a: 0.29, b: 109.1077 },
        { income: 711, a: 0.21, b: 67.4646 },
        { income: 1282, a: 0.3477, b: 165.4435 },
        { income: 1673, a: 0.345, b: 161.9819 },
        { income: 3461, a: 0.39, b: 237.2704 },
        { income: 0, a: 0.47, b: 514.1935 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 87000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 87000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
      payg: [
        { income: 66, a: 0.19, b: 0.19 },
        { income: 361, a: 0.2337, b: 2.9035 },
        { income: 932, a: 0.3477, b: 44.1189 },
        { income: 1323, a: 0.345, b: 41.6024 },
        { income: 3111, a: 0.39, b: 101.1408 },
        { income: 0, a: 0.47, b: 350.0639 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 87000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 87000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 1673, a: 0.325, b: 0.325 },
        { income: 3461, a: 0.37, b: 75.2885 },
        { income: 0, a: 0.45, b: 352.2115 },
      ],
    },
    taxBackpacker: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 15 },
        { from: 37000, to: 87000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 87000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },
    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 21980, type: 'percent', nearest: 1, value: 0 },
        { from: 21980, to: 27475, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 27475,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [],
    superannuation: {
      incremental: 0,
      cap: 211040,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 250000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 250000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 55873, type: 'fixed', nearest: 1, value: 0 },
        { from: 55873, to: 62238, type: 'percent', nearest: 1, value: 4 },
        { from: 62238, to: 68602, type: 'percent', nearest: 1, value: 4.5 },
        { from: 68602, to: 72207, type: 'percent', nearest: 1, value: 5.0 },
        { from: 72207, to: 77618, type: 'percent', nearest: 1, value: 5.5 },
        { from: 77618, to: 84062, type: 'percent', nearest: 1, value: 6.0 },
        { from: 84062, to: 88486, type: 'percent', nearest: 1, value: 6.5 },
        { from: 88486, to: 97377, type: 'percent', nearest: 1, value: 7.0 },
        { from: 97377, to: 103765, type: 'percent', nearest: 1, value: 7.5 },
        { from: 103765, to: 0, type: 'percent', nearest: 1, value: 8.0 },
      ],
    },
    help_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 36674, type: 'fixed', nearest: 1, value: 0 },
        { from: 36674, to: 44038, type: 'percent', nearest: 1, value: 4 },
        { from: 44038, to: 50402, type: 'percent', nearest: 1, value: 4.5 },
        { from: 50402, to: 54007, type: 'percent', nearest: 1, value: 5 },
        { from: 54007, to: 59418, type: 'percent', nearest: 1, value: 5.5 },
        { from: 59418, to: 65862, type: 'percent', nearest: 1, value: 6 },
        { from: 65862, to: 70286, type: 'percent', nearest: 1, value: 6.5 },
        { from: 70286, to: 79177, type: 'percent', nearest: 1, value: 7 },
        { from: 79177, to: 85565, type: 'percent', nearest: 1, value: 7.5 },
        { from: 85565, to: 0, type: 'percent', nearest: 1, value: 8 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 55874, type: 'fixed', nearest: 1, value: 0 },
        { from: 55874, to: 68602, type: 'percent', nearest: 1, value: 2 },
        { from: 68602, to: 97377, type: 'percent', nearest: 1, value: 3 },
        { from: 97377, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
    sfss_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 37674, type: 'fixed', nearest: 1, value: 0 },
        { from: 37674, to: 50402, type: 'percent', nearest: 1, value: 2 },
        { from: 50402, to: 79177, type: 'percent', nearest: 1, value: 3 },
        { from: 79177, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },

  {
    year: '2019',
    current: 'false',

    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 355, a: 0.0, b: 0.0 },
        { income: 422, a: 0.19, b: 67.4635 },
        { income: 528, a: 0.29, b: 109.7327 },
        { income: 711, a: 0.21, b: 67.4635 },
        { income: 1282, a: 0.3477, b: 165.4423 },
        { income: 1730, a: 0.345, b: 161.9808 },
        { income: 3461, a: 0.39, b: 239.8654 },
        { income: 0, a: 0.47, b: 516.7885 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 72, a: 0.19, b: 0.19 },
        { income: 361, a: 0.2342, b: 3.213 },
        { income: 932, a: 0.3477, b: 44.2476 },
        { income: 1380, a: 0.345, b: 41.7311 },
        { income: 3111, a: 0.39, b: 103.8657 },
        { income: 0, a: 0.47, b: 352.7888 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 1730, a: 0.325, b: 0.325 },
        { income: 3461, a: 0.37, b: 77.8846 },
        { income: 0, a: 0.45, b: 354.8077 },
      ],
    },
    taxBackpacker: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 15 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },

    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    lamito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: 255 },
        {
          from: 37000,
          to: 48000,
          type: 'rate',
          nearest: 1,
          start: 255,
          end: 1080,
          value: 7.5,
        },
        { from: 48000, to: 90000, type: 'fixed', nearest: 1, value: 1080 },
        {
          from: 90000,
          to: 126000,
          type: 'rate',
          nearest: 1,
          start: 1080,
          end: 0,
          value: -3.0,
        },
        { from: 126000, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 22398, type: 'percent', nearest: 1, value: 0 },
        { from: 22398, to: 27997, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 27997,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [],
    superannuation: {
      incremental: 0,
      cap: 216120,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 250000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 250000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 51957, type: 'fixed', nearest: 1, value: 0 },
        { from: 51957, to: 57729, type: 'percent', nearest: 1, value: 2.0 },
        { from: 57729, to: 64306, type: 'percent', nearest: 1, value: 4.0 },
        { from: 64306, to: 70881, type: 'percent', nearest: 1, value: 4.5 },
        { from: 70881, to: 74607, type: 'percent', nearest: 1, value: 5.0 },
        { from: 74607, to: 80197, type: 'percent', nearest: 1, value: 5.5 },
        { from: 80197, to: 86855, type: 'percent', nearest: 1, value: 6.0 },
        { from: 86855, to: 91425, type: 'percent', nearest: 1, value: 6.5 },
        { from: 91425, to: 100613, type: 'percent', nearest: 1, value: 7.0 },
        { from: 100613, to: 107213, type: 'percent', nearest: 1, value: 7.5 },
        { from: 107213, to: 0, type: 'percent', nearest: 1, value: 8.0 },
      ],
    },
    help_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 33757, type: 'fixed', nearest: 1, value: 0 },
        { from: 33757, to: 39529, type: 'percent', nearest: 1, value: 2.0 },
        { from: 39529, to: 46106, type: 'percent', nearest: 1, value: 4.0 },
        { from: 46106, to: 52681, type: 'percent', nearest: 1, value: 4.5 },
        { from: 52681, to: 56407, type: 'percent', nearest: 1, value: 5.0 },
        { from: 56407, to: 61997, type: 'percent', nearest: 1, value: 5.5 },
        { from: 61997, to: 68655, type: 'percent', nearest: 1, value: 6.0 },
        { from: 68655, to: 73225, type: 'percent', nearest: 1, value: 6.5 },
        { from: 73225, to: 82413, type: 'percent', nearest: 1, value: 7.0 },
        { from: 82413, to: 89013, type: 'percent', nearest: 1, value: 7.5 },
        { from: 89013, to: 0, type: 'percent', nearest: 1, value: 8.0 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 51957, type: 'fixed', nearest: 1, value: 0 },
        { from: 51958, to: 64306, type: 'percent', nearest: 1, value: 2 },
        { from: 64306, to: 91425, type: 'percent', nearest: 1, value: 3 },
        { from: 91425, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
    sfss_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 33757, type: 'fixed', nearest: 1, value: 0 },
        { from: 33757, to: 46106, type: 'percent', nearest: 1, value: 2 },
        { from: 46106, to: 72225, type: 'percent', nearest: 1, value: 3 },
        { from: 72225, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },

  {
    year: '2020',
    current: 'true',

    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 355, a: 0.0, b: 0.0 },
        { income: 422, a: 0.19, b: 67.4635 },
        { income: 528, a: 0.29, b: 109.7327 },
        { income: 711, a: 0.21, b: 67.4635 },
        { income: 1282, a: 0.3477, b: 165.4423 },
        { income: 1730, a: 0.345, b: 161.9808 },
        { income: 3461, a: 0.39, b: 239.8654 },
        { income: 0, a: 0.47, b: 516.7885 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 72, a: 0.19, b: 0.19 },
        { income: 361, a: 0.2342, b: 3.213 },
        { income: 932, a: 0.3477, b: 44.2476 },
        { income: 1380, a: 0.345, b: 41.7311 },
        { income: 3111, a: 0.39, b: 103.8657 },
        { income: 0, a: 0.47, b: 352.7888 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 1730, a: 0.325, b: 0.325 },
        { income: 3461, a: 0.37, b: 77.8846 },
        { income: 0, a: 0.45, b: 354.8077 },
      ],
    },
    taxBackpacker: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 15 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },

    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    lamito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: 255 },
        {
          from: 37000,
          to: 48000,
          type: 'rate',
          nearest: 1,
          start: 255,
          end: 1080,
          value: 7.5,
        },
        { from: 48000, to: 90000, type: 'fixed', nearest: 1, value: 1080 },
        {
          from: 90000,
          to: 126000,
          type: 'rate',
          nearest: 1,
          start: 1080,
          end: 0,
          value: -3.0,
        },
        { from: 126000, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 22398, type: 'percent', nearest: 1, value: 0 },
        { from: 22398, to: 27997, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 27997,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [],
    superannuation: {
      incremental: 0,
      cap: 221080,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 250000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 250000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 45881, type: 'fixed', nearest: 1, value: 0 },
        { from: 45881, to: 52974, type: 'percent', nearest: 1, value: 1.0 },
        { from: 52974, to: 56152, type: 'percent', nearest: 1, value: 2.0 },
        { from: 56152, to: 59522, type: 'percent', nearest: 1, value: 2.5 },
        { from: 59522, to: 63093, type: 'percent', nearest: 1, value: 3.0 },
        { from: 63093, to: 66878, type: 'percent', nearest: 1, value: 3.5 },
        { from: 66878, to: 70891, type: 'percent', nearest: 1, value: 4.0 },
        { from: 70891, to: 75145, type: 'percent', nearest: 1, value: 4.5 },
        { from: 75145, to: 79653, type: 'percent', nearest: 1, value: 5.0 },
        { from: 79653, to: 84433, type: 'percent', nearest: 1, value: 5.5 },
        { from: 84433, to: 89499, type: 'percent', nearest: 1, value: 6.0 },
        { from: 89499, to: 94869, type: 'percent', nearest: 1, value: 6.5 },
        { from: 94869, to: 100561, type: 'percent', nearest: 1, value: 7.0 },
        { from: 100561, to: 106594, type: 'percent', nearest: 1, value: 7.5 },
        { from: 106594, to: 112990, type: 'percent', nearest: 1, value: 8.0 },
        { from: 112990, to: 119770, type: 'percent', nearest: 1, value: 8.5 },
        { from: 119770, to: 126956, type: 'percent', nearest: 1, value: 9.0 },
        { from: 126956, to: 134573, type: 'percent', nearest: 1, value: 9.5 },
        { from: 134573, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },

    help_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 27680, type: 'fixed', nearest: 1, value: 0 },
        { from: 27680, to: 34774, type: 'percent', nearest: 1, value: 1.0 },
        { from: 34774, to: 37952, type: 'percent', nearest: 1, value: 2.0 },
        { from: 37952, to: 41322, type: 'percent', nearest: 1, value: 2.5 },
        { from: 41322, to: 44893, type: 'percent', nearest: 1, value: 3.0 },
        { from: 44893, to: 48678, type: 'percent', nearest: 1, value: 3.5 },
        { from: 48678, to: 52691, type: 'percent', nearest: 1, value: 4.0 },
        { from: 52691, to: 56945, type: 'percent', nearest: 1, value: 4.5 },
        { from: 56945, to: 61453, type: 'percent', nearest: 1, value: 5.0 },
        { from: 61453, to: 66233, type: 'percent', nearest: 1, value: 5.5 },
        { from: 66233, to: 71299, type: 'percent', nearest: 1, value: 6.0 },
        { from: 71299, to: 76669, type: 'percent', nearest: 1, value: 6.5 },
        { from: 76669, to: 82361, type: 'percent', nearest: 1, value: 7.0 },
        { from: 82361, to: 88394, type: 'percent', nearest: 1, value: 7.5 },
        { from: 88394, to: 94790, type: 'percent', nearest: 1, value: 8.0 },
        { from: 94790, to: 101570, type: 'percent', nearest: 1, value: 8.5 },
        { from: 101570, to: 108756, type: 'percent', nearest: 1, value: 9.0 },
        { from: 108756, to: 116373, type: 'percent', nearest: 1, value: 9.5 },
        { from: 116373, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 45881, type: 'fixed', nearest: 1, value: 0 },
        { from: 45881, to: 52974, type: 'percent', nearest: 1, value: 1.0 },
        { from: 52974, to: 56152, type: 'percent', nearest: 1, value: 2.0 },
        { from: 56152, to: 59522, type: 'percent', nearest: 1, value: 2.5 },
        { from: 59522, to: 63093, type: 'percent', nearest: 1, value: 3.0 },
        { from: 63093, to: 66878, type: 'percent', nearest: 1, value: 3.5 },
        { from: 66878, to: 70891, type: 'percent', nearest: 1, value: 4.0 },
        { from: 70891, to: 75145, type: 'percent', nearest: 1, value: 4.5 },
        { from: 75145, to: 79653, type: 'percent', nearest: 1, value: 5.0 },
        { from: 79653, to: 84433, type: 'percent', nearest: 1, value: 5.5 },
        { from: 84433, to: 89499, type: 'percent', nearest: 1, value: 6.0 },
        { from: 89499, to: 94869, type: 'percent', nearest: 1, value: 6.5 },
        { from: 94869, to: 100561, type: 'percent', nearest: 1, value: 7.0 },
        { from: 100561, to: 106594, type: 'percent', nearest: 1, value: 7.5 },
        { from: 106594, to: 112990, type: 'percent', nearest: 1, value: 8.0 },
        { from: 112990, to: 119770, type: 'percent', nearest: 1, value: 8.5 },
        { from: 119770, to: 126956, type: 'percent', nearest: 1, value: 9.0 },
        { from: 126956, to: 134573, type: 'percent', nearest: 1, value: 9.5 },
        { from: 134573, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    sfss_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 27680, type: 'fixed', nearest: 1, value: 0 },
        { from: 27680, to: 34774, type: 'percent', nearest: 1, value: 1.0 },
        { from: 34774, to: 37952, type: 'percent', nearest: 1, value: 2.0 },
        { from: 37952, to: 41322, type: 'percent', nearest: 1, value: 2.5 },
        { from: 41322, to: 44893, type: 'percent', nearest: 1, value: 3.0 },
        { from: 44893, to: 48678, type: 'percent', nearest: 1, value: 3.5 },
        { from: 48678, to: 52691, type: 'percent', nearest: 1, value: 4.0 },
        { from: 52691, to: 56945, type: 'percent', nearest: 1, value: 4.5 },
        { from: 56945, to: 61453, type: 'percent', nearest: 1, value: 5.0 },
        { from: 61453, to: 66233, type: 'percent', nearest: 1, value: 5.5 },
        { from: 66233, to: 71299, type: 'percent', nearest: 1, value: 6.0 },
        { from: 71299, to: 76669, type: 'percent', nearest: 1, value: 6.5 },
        { from: 76669, to: 82361, type: 'percent', nearest: 1, value: 7.0 },
        { from: 82361, to: 88394, type: 'percent', nearest: 1, value: 7.5 },
        { from: 88394, to: 94790, type: 'percent', nearest: 1, value: 8.0 },
        { from: 94790, to: 101570, type: 'percent', nearest: 1, value: 8.5 },
        { from: 101570, to: 108756, type: 'percent', nearest: 1, value: 9.0 },
        { from: 108756, to: 116373, type: 'percent', nearest: 1, value: 9.5 },
        { from: 116373, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
  },

  {
    year: '2021',
    current: 'false',

    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 355, a: 0.0, b: 0.0 },
        { income: 422, a: 0.19, b: 67.4635 },
        { income: 528, a: 0.29, b: 109.7327 },
        { income: 711, a: 0.21, b: 67.4635 },
        { income: 1282, a: 0.3477, b: 165.4423 },
        { income: 1730, a: 0.345, b: 161.9808 },
        { income: 3461, a: 0.39, b: 239.8654 },
        { income: 0, a: 0.47, b: 516.7885 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 72, a: 0.19, b: 0.19 },
        { income: 361, a: 0.2342, b: 3.213 },
        { income: 932, a: 0.3477, b: 44.2476 },
        { income: 1380, a: 0.345, b: 41.7311 },
        { income: 3111, a: 0.39, b: 103.8657 },
        { income: 0, a: 0.47, b: 352.7888 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 1730, a: 0.325, b: 0.325 },
        { income: 3461, a: 0.37, b: 77.8846 },
        { income: 0, a: 0.45, b: 354.8077 },
      ],
    },
    taxBackpacker: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 15 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },

    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    lamito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: 255 },
        {
          from: 37000,
          to: 48000,
          type: 'rate',
          nearest: 1,
          start: 255,
          end: 1080,
          value: 7.5,
        },
        { from: 48000, to: 90000, type: 'fixed', nearest: 1, value: 1080 },
        {
          from: 90000,
          to: 126000,
          type: 'rate',
          nearest: 1,
          start: 1080,
          end: 0,
          value: -3.0,
        },
        { from: 126000, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 22398, type: 'percent', nearest: 1, value: 0 },
        { from: 22398, to: 27997, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 27997,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [],
    superannuation: {
      incremental: 0,
      cap: 221080,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 250000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 250000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 45880, type: 'fixed', nearest: 1, value: 0 },
        { from: 45880, to: 52974, type: 'percent', nearest: 1, value: 1.0 },
        { from: 52974, to: 56152, type: 'percent', nearest: 1, value: 2.0 },
        { from: 56152, to: 59522, type: 'percent', nearest: 1, value: 2.5 },
        { from: 59522, to: 63093, type: 'percent', nearest: 1, value: 3.0 },
        { from: 63093, to: 66878, type: 'percent', nearest: 1, value: 3.5 },
        { from: 66878, to: 70891, type: 'percent', nearest: 1, value: 4.0 },
        { from: 70891, to: 75145, type: 'percent', nearest: 1, value: 4.5 },
        { from: 75145, to: 79653, type: 'percent', nearest: 1, value: 5.0 },
        { from: 79653, to: 84433, type: 'percent', nearest: 1, value: 5.5 },
        { from: 84433, to: 89499, type: 'percent', nearest: 1, value: 6.0 },
        { from: 89499, to: 94869, type: 'percent', nearest: 1, value: 6.5 },
        { from: 94869, to: 100561, type: 'percent', nearest: 1, value: 7.0 },
        { from: 100561, to: 106594, type: 'percent', nearest: 1, value: 7.5 },
        { from: 106594, to: 112990, type: 'percent', nearest: 1, value: 8.0 },
        { from: 112990, to: 119770, type: 'percent', nearest: 1, value: 8.5 },
        { from: 119770, to: 126956, type: 'percent', nearest: 1, value: 9.0 },
        { from: 126956, to: 134573, type: 'percent', nearest: 1, value: 9.5 },
        { from: 134573, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    help_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 27680, type: 'fixed', nearest: 1, value: 0 },
        { from: 27680, to: 34774, type: 'percent', nearest: 1, value: 1.0 },
        { from: 34774, to: 37952, type: 'percent', nearest: 1, value: 2.0 },
        { from: 37952, to: 41322, type: 'percent', nearest: 1, value: 2.5 },
        { from: 41322, to: 44893, type: 'percent', nearest: 1, value: 3.0 },
        { from: 44893, to: 48678, type: 'percent', nearest: 1, value: 3.5 },
        { from: 48678, to: 52691, type: 'percent', nearest: 1, value: 4.0 },
        { from: 52691, to: 56945, type: 'percent', nearest: 1, value: 4.5 },
        { from: 56945, to: 61453, type: 'percent', nearest: 1, value: 5.0 },
        { from: 61453, to: 66233, type: 'percent', nearest: 1, value: 5.5 },
        { from: 66233, to: 71299, type: 'percent', nearest: 1, value: 6.0 },
        { from: 71299, to: 76669, type: 'percent', nearest: 1, value: 6.5 },
        { from: 76669, to: 82361, type: 'percent', nearest: 1, value: 7.0 },
        { from: 82361, to: 88394, type: 'percent', nearest: 1, value: 7.5 },
        { from: 88394, to: 94790, type: 'percent', nearest: 1, value: 8.0 },
        { from: 94790, to: 101570, type: 'percent', nearest: 1, value: 8.5 },
        { from: 101570, to: 108756, type: 'percent', nearest: 1, value: 9.0 },
        { from: 108756, to: 116373, type: 'percent', nearest: 1, value: 9.5 },
        { from: 116373, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 51957, type: 'fixed', nearest: 1, value: 0 },
        { from: 51958, to: 64306, type: 'percent', nearest: 1, value: 2 },
        { from: 64306, to: 91425, type: 'percent', nearest: 1, value: 3 },
        { from: 91425, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
    sfss_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 33757, type: 'fixed', nearest: 1, value: 0 },
        { from: 33757, to: 46106, type: 'percent', nearest: 1, value: 2 },
        { from: 46106, to: 72225, type: 'percent', nearest: 1, value: 3 },
        { from: 72225, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },

  {
    year: '2022',
    current: 'false',

    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 355, a: 0.0, b: 0.0 },
        { income: 422, a: 0.19, b: 67.4635 },
        { income: 528, a: 0.29, b: 109.7327 },
        { income: 711, a: 0.21, b: 67.4635 },
        { income: 1282, a: 0.3477, b: 165.4423 },
        { income: 1730, a: 0.345, b: 161.9808 },
        { income: 3461, a: 0.39, b: 239.8654 },
        { income: 0, a: 0.47, b: 516.7885 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 19 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 72, a: 0.19, b: 0.19 },
        { income: 361, a: 0.2342, b: 3.213 },
        { income: 932, a: 0.3477, b: 44.2476 },
        { income: 1380, a: 0.345, b: 41.7311 },
        { income: 3111, a: 0.39, b: 103.8657 },
        { income: 0, a: 0.47, b: 352.7888 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],

      payg: [
        { income: 1730, a: 0.325, b: 0.325 },
        { income: 3461, a: 0.37, b: 77.8846 },
        { income: 0, a: 0.45, b: 354.8077 },
      ],
    },
    taxBackpacker: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 15 },
        { from: 37000, to: 90000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 90000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },

    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '445' },
        {
          from: 37000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 445,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    lamito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: 255 },
        {
          from: 37000,
          to: 48000,
          type: 'rate',
          nearest: 1,
          start: 255,
          end: 1080,
          value: 7.5,
        },
        { from: 48000, to: 90000, type: 'fixed', nearest: 1, value: 1080 },
        {
          from: 90000,
          to: 126000,
          type: 'rate',
          nearest: 1,
          start: 1080,
          end: 0,
          value: -3.0,
        },
        { from: 126000, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 22398, type: 'percent', nearest: 1, value: 0 },
        { from: 22398, to: 27997, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 27997,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [],
    superannuation: {
      incremental: 0,
      cap: 221080,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 250000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 250000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 45880, type: 'fixed', nearest: 1, value: 0 },
        { from: 45880, to: 52974, type: 'percent', nearest: 1, value: 1.0 },
        { from: 52974, to: 56152, type: 'percent', nearest: 1, value: 2.0 },
        { from: 56152, to: 59522, type: 'percent', nearest: 1, value: 2.5 },
        { from: 59522, to: 63093, type: 'percent', nearest: 1, value: 3.0 },
        { from: 63093, to: 66878, type: 'percent', nearest: 1, value: 3.5 },
        { from: 66878, to: 70891, type: 'percent', nearest: 1, value: 4.0 },
        { from: 70891, to: 75145, type: 'percent', nearest: 1, value: 4.5 },
        { from: 75145, to: 79653, type: 'percent', nearest: 1, value: 5.0 },
        { from: 79653, to: 84433, type: 'percent', nearest: 1, value: 5.5 },
        { from: 84433, to: 89499, type: 'percent', nearest: 1, value: 6.0 },
        { from: 89499, to: 94869, type: 'percent', nearest: 1, value: 6.5 },
        { from: 94869, to: 100561, type: 'percent', nearest: 1, value: 7.0 },
        { from: 100561, to: 106594, type: 'percent', nearest: 1, value: 7.5 },
        { from: 106594, to: 112990, type: 'percent', nearest: 1, value: 8.0 },
        { from: 112990, to: 119770, type: 'percent', nearest: 1, value: 8.5 },
        { from: 119770, to: 126956, type: 'percent', nearest: 1, value: 9.0 },
        { from: 126956, to: 134573, type: 'percent', nearest: 1, value: 9.5 },
        { from: 134573, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    help_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 27680, type: 'fixed', nearest: 1, value: 0 },
        { from: 27680, to: 34774, type: 'percent', nearest: 1, value: 1.0 },
        { from: 34774, to: 37952, type: 'percent', nearest: 1, value: 2.0 },
        { from: 37952, to: 41322, type: 'percent', nearest: 1, value: 2.5 },
        { from: 41322, to: 44893, type: 'percent', nearest: 1, value: 3.0 },
        { from: 44893, to: 48678, type: 'percent', nearest: 1, value: 3.5 },
        { from: 48678, to: 52691, type: 'percent', nearest: 1, value: 4.0 },
        { from: 52691, to: 56945, type: 'percent', nearest: 1, value: 4.5 },
        { from: 56945, to: 61453, type: 'percent', nearest: 1, value: 5.0 },
        { from: 61453, to: 66233, type: 'percent', nearest: 1, value: 5.5 },
        { from: 66233, to: 71299, type: 'percent', nearest: 1, value: 6.0 },
        { from: 71299, to: 76669, type: 'percent', nearest: 1, value: 6.5 },
        { from: 76669, to: 82361, type: 'percent', nearest: 1, value: 7.0 },
        { from: 82361, to: 88394, type: 'percent', nearest: 1, value: 7.5 },
        { from: 88394, to: 94790, type: 'percent', nearest: 1, value: 8.0 },
        { from: 94790, to: 101570, type: 'percent', nearest: 1, value: 8.5 },
        { from: 101570, to: 108756, type: 'percent', nearest: 1, value: 9.0 },
        { from: 108756, to: 116373, type: 'percent', nearest: 1, value: 9.5 },
        { from: 116373, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 51957, type: 'fixed', nearest: 1, value: 0 },
        { from: 51958, to: 64306, type: 'percent', nearest: 1, value: 2 },
        { from: 64306, to: 91425, type: 'percent', nearest: 1, value: 3 },
        { from: 91425, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
    sfss_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 33757, type: 'fixed', nearest: 1, value: 0 },
        { from: 33757, to: 46106, type: 'percent', nearest: 1, value: 2 },
        { from: 46106, to: 72225, type: 'percent', nearest: 1, value: 3 },
        { from: 72225, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },

  {
    year: '2023',
    current: 'false',

    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 41000, type: 'percent', nearest: 1, value: 19 },
        { from: 41000, to: 120000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 120000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 41000, type: 'percent', nearest: 1, value: 19 },
        { from: 41000, to: 120000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 120000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 120000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 120000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    taxBackpacker: {
      incremental: 1,
      brackets: [
        { from: 0, to: 41000, type: 'percent', nearest: 1, value: 15 },
        { from: 41000, to: 120000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 120000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },

    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '645' },
        {
          from: 37000,
          to: 41000,
          type: 'rate',
          nearest: 1,
          start: 645,
          end: 0,
          value: -6.5,
        },
        {
          from: 41000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 385,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 22398, type: 'percent', nearest: 1, value: 0 },
        { from: 22398, to: 27997, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 27997,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },
    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [],
    superannuation: {
      incremental: 0,
      cap: 221080,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },

    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 250000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 250000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 45880, type: 'fixed', nearest: 1, value: 0 },
        { from: 45880, to: 52974, type: 'percent', nearest: 1, value: 1.0 },
        { from: 52974, to: 56152, type: 'percent', nearest: 1, value: 2.0 },
        { from: 56152, to: 59522, type: 'percent', nearest: 1, value: 2.5 },
        { from: 59522, to: 63093, type: 'percent', nearest: 1, value: 3.0 },
        { from: 63093, to: 66878, type: 'percent', nearest: 1, value: 3.5 },
        { from: 66878, to: 70891, type: 'percent', nearest: 1, value: 4.0 },
        { from: 70891, to: 75145, type: 'percent', nearest: 1, value: 4.5 },
        { from: 75145, to: 79653, type: 'percent', nearest: 1, value: 5.0 },
        { from: 79653, to: 84433, type: 'percent', nearest: 1, value: 5.5 },
        { from: 84433, to: 89499, type: 'percent', nearest: 1, value: 6.0 },
        { from: 89499, to: 94869, type: 'percent', nearest: 1, value: 6.5 },
        { from: 94869, to: 100561, type: 'percent', nearest: 1, value: 7.0 },
        { from: 100561, to: 106594, type: 'percent', nearest: 1, value: 7.5 },
        { from: 106594, to: 112990, type: 'percent', nearest: 1, value: 8.0 },
        { from: 112990, to: 119770, type: 'percent', nearest: 1, value: 8.5 },
        { from: 119770, to: 126956, type: 'percent', nearest: 1, value: 9.0 },
        { from: 126956, to: 134573, type: 'percent', nearest: 1, value: 9.5 },
        { from: 134573, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    help_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 27680, type: 'fixed', nearest: 1, value: 0 },
        { from: 27680, to: 34774, type: 'percent', nearest: 1, value: 1.0 },
        { from: 34774, to: 37952, type: 'percent', nearest: 1, value: 2.0 },
        { from: 37952, to: 41322, type: 'percent', nearest: 1, value: 2.5 },
        { from: 41322, to: 44893, type: 'percent', nearest: 1, value: 3.0 },
        { from: 44893, to: 48678, type: 'percent', nearest: 1, value: 3.5 },
        { from: 48678, to: 52691, type: 'percent', nearest: 1, value: 4.0 },
        { from: 52691, to: 56945, type: 'percent', nearest: 1, value: 4.5 },
        { from: 56945, to: 61453, type: 'percent', nearest: 1, value: 5.0 },
        { from: 61453, to: 66233, type: 'percent', nearest: 1, value: 5.5 },
        { from: 66233, to: 71299, type: 'percent', nearest: 1, value: 6.0 },
        { from: 71299, to: 76669, type: 'percent', nearest: 1, value: 6.5 },
        { from: 76669, to: 82361, type: 'percent', nearest: 1, value: 7.0 },
        { from: 82361, to: 88394, type: 'percent', nearest: 1, value: 7.5 },
        { from: 88394, to: 94790, type: 'percent', nearest: 1, value: 8.0 },
        { from: 94790, to: 101570, type: 'percent', nearest: 1, value: 8.5 },
        { from: 101570, to: 108756, type: 'percent', nearest: 1, value: 9.0 },
        { from: 108756, to: 116373, type: 'percent', nearest: 1, value: 9.5 },
        { from: 116373, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 51957, type: 'fixed', nearest: 1, value: 0 },
        { from: 51958, to: 64306, type: 'percent', nearest: 1, value: 2 },
        { from: 64306, to: 91425, type: 'percent', nearest: 1, value: 3 },
        { from: 91425, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
    sfss_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 33757, type: 'fixed', nearest: 1, value: 0 },
        { from: 33757, to: 46106, type: 'percent', nearest: 1, value: 2 },
        { from: 46106, to: 72225, type: 'percent', nearest: 1, value: 3 },
        { from: 72225, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },

  {
    year: '2024',
    current: 'false',

    tax: {
      incremental: 1,
      brackets: [
        { from: 0, to: 18200, type: 'percent', nearest: 1, value: 0 },
        { from: 18200, to: 41000, type: 'percent', nearest: 1, value: 19 },
        { from: 41000, to: 200000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 200000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    taxNoFreeThreshold: {
      incremental: 1,
      brackets: [
        { from: 0, to: 41000, type: 'percent', nearest: 1, value: 19 },
        { from: 41000, to: 200000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 200000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    taxNonResident: {
      incremental: 1,
      brackets: [
        { from: 0, to: 200000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 200000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },
    taxBackpacker: {
      incremental: 1,
      brackets: [
        { from: 0, to: 37000, type: 'percent', nearest: 1, value: 15 },
        { from: 37000, to: 200000, type: 'percent', nearest: 1, value: 32.5 },
        { from: 200000, to: 180000, type: 'percent', nearest: 1, value: 37 },
        { from: 180000, to: 0, type: 'percent', nearest: 1, value: 45 },
      ],
    },

    lito: {
      incremental: 0,
      paygLoading: 1.0,
      brackets: [
        { from: 0, to: 37000, type: 'fixed', nearest: 1, value: '645' },
        {
          from: 37000,
          to: 41000,
          type: 'rate',
          nearest: 1,
          start: 645,
          end: 0,
          value: -6.5,
        },
        {
          from: 41000,
          to: 66667,
          type: 'rate',
          nearest: 1,
          start: 385,
          end: 0,
          value: -1.5,
        },
        { from: 66667, to: 0, type: 'fixed', nearest: 1, value: 0 },
      ],
    },

    mawto: {
      incremental: 1,
      paygLoading: 1.0,
      brackets: [{ from: 0, to: 0, type: 'fixed', nearest: 1, value: 0 }],
    },
    medicare: {
      incremental: 1,
      brackets: [
        { from: 0, to: 22398, type: 'percent', nearest: 1, value: 0 },
        { from: 22398, to: 27997, type: 'percent', nearest: 1, value: 10.0 },
        {
          from: 27997,
          to: 0,
          type: 'percent',
          nearest: 1,
          value: 2.0,
          incremental: 'false',
        },
      ],
    },

    medicareSurcharge: {
      incremental: 0,
      brackets: [
        { from: 0, to: 90000, type: 'percent', nearest: 1, value: 0 },
        { from: 90000, to: 105000, type: 'percent', nearest: 1, value: 1.0 },
        { from: 105000, to: 140000, type: 'percent', nearest: 1, value: 1.25 },
        { from: 140000, to: 0, type: 'percent', nearest: 1, value: 1.5 },
      ],
    },
    other: [],
    superannuation: {
      incremental: 0,
      cap: 221080,
      brackets: [{ from: 0, to: 0, type: 'percent', nearest: 1, value: 9.5 }],
    },
    division293: {
      incremental: 1,
      brackets: [
        { from: 0, to: 250000, type: 'percent', nearest: 1, value: 0.0 },
        { from: 250000, to: 0, type: 'percent', nearest: 1, value: 15.0 },
      ],
    },
    help: {
      incremental: 0,
      brackets: [
        { from: 0, to: 45880, type: 'fixed', nearest: 1, value: 0 },
        { from: 45880, to: 52974, type: 'percent', nearest: 1, value: 1.0 },
        { from: 52974, to: 56152, type: 'percent', nearest: 1, value: 2.0 },
        { from: 56152, to: 59522, type: 'percent', nearest: 1, value: 2.5 },
        { from: 59522, to: 63093, type: 'percent', nearest: 1, value: 3.0 },
        { from: 63093, to: 66878, type: 'percent', nearest: 1, value: 3.5 },
        { from: 66878, to: 70891, type: 'percent', nearest: 1, value: 4.0 },
        { from: 70891, to: 75145, type: 'percent', nearest: 1, value: 4.5 },
        { from: 75145, to: 79653, type: 'percent', nearest: 1, value: 5.0 },
        { from: 79653, to: 84433, type: 'percent', nearest: 1, value: 5.5 },
        { from: 84433, to: 89499, type: 'percent', nearest: 1, value: 6.0 },
        { from: 89499, to: 94869, type: 'percent', nearest: 1, value: 6.5 },
        { from: 94869, to: 100561, type: 'percent', nearest: 1, value: 7.0 },
        { from: 100561, to: 106594, type: 'percent', nearest: 1, value: 7.5 },
        { from: 106594, to: 112990, type: 'percent', nearest: 1, value: 8.0 },
        { from: 112990, to: 119770, type: 'percent', nearest: 1, value: 8.5 },
        { from: 119770, to: 126956, type: 'percent', nearest: 1, value: 9.0 },
        { from: 126956, to: 134573, type: 'percent', nearest: 1, value: 9.5 },
        { from: 134573, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    help_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 27680, type: 'fixed', nearest: 1, value: 0 },
        { from: 27680, to: 34774, type: 'percent', nearest: 1, value: 1.0 },
        { from: 34774, to: 37952, type: 'percent', nearest: 1, value: 2.0 },
        { from: 37952, to: 41322, type: 'percent', nearest: 1, value: 2.5 },
        { from: 41322, to: 44893, type: 'percent', nearest: 1, value: 3.0 },
        { from: 44893, to: 48678, type: 'percent', nearest: 1, value: 3.5 },
        { from: 48678, to: 52691, type: 'percent', nearest: 1, value: 4.0 },
        { from: 52691, to: 56945, type: 'percent', nearest: 1, value: 4.5 },
        { from: 56945, to: 61453, type: 'percent', nearest: 1, value: 5.0 },
        { from: 61453, to: 66233, type: 'percent', nearest: 1, value: 5.5 },
        { from: 66233, to: 71299, type: 'percent', nearest: 1, value: 6.0 },
        { from: 71299, to: 76669, type: 'percent', nearest: 1, value: 6.5 },
        { from: 76669, to: 82361, type: 'percent', nearest: 1, value: 7.0 },
        { from: 82361, to: 88394, type: 'percent', nearest: 1, value: 7.5 },
        { from: 88394, to: 94790, type: 'percent', nearest: 1, value: 8.0 },
        { from: 94790, to: 101570, type: 'percent', nearest: 1, value: 8.5 },
        { from: 101570, to: 108756, type: 'percent', nearest: 1, value: 9.0 },
        { from: 108756, to: 116373, type: 'percent', nearest: 1, value: 9.5 },
        { from: 116373, to: 0, type: 'percent', nearest: 1, value: 10.0 },
      ],
    },
    sfss: {
      incremental: 0,
      brackets: [
        { from: 0, to: 51957, type: 'fixed', nearest: 1, value: 0 },
        { from: 51958, to: 64306, type: 'percent', nearest: 1, value: 2 },
        { from: 64306, to: 91425, type: 'percent', nearest: 1, value: 3 },
        { from: 91425, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
    sfss_noTaxFree: {
      incremental: 0,
      brackets: [
        { from: 0, to: 33757, type: 'fixed', nearest: 1, value: 0 },
        { from: 33757, to: 46106, type: 'percent', nearest: 1, value: 2 },
        { from: 46106, to: 72225, type: 'percent', nearest: 1, value: 3 },
        { from: 72225, to: 0, type: 'percent', nearest: 1, value: 4 },
      ],
    },
  },
];

// JavaScript Document

function validate() {
  if (!isDecimal($('#income').val())) $('#income').val(0);
  if (!isDecimal($('#dpy').val())) $('#dpy').val(250);
  if (!isDecimal($('#dpw').val())) $('#dpw').val(5);
  if (!isDecimal($('#hpd').val())) $('#hpd').val(8);
  if (!isDecimal($('#hpw').val())) $('#hpw').val(40);
  if (!isDecimal($('#wpy').val())) $('#wpy').val(50);

  if ($('#income').val() == '') $('#income').val(0);
  if ($('#dpy').val() == '') $('#dpy').val(250);
  if ($('#dpw').val() == '') $('#dpw').val(5);
  if ($('#hpd').val() == '') $('#hpd').val(8);
  if ($('#hpw').val() == '') $('#hpw').val(40);
  if ($('#wpy').val() == '') $('#wpy').val(52);
}

function isDecimal(n) {
  if (n - n == 0) return true;
  return false;
}

function isBoolean(value) {
  var bool = false;
  if (value != undefined) {
    if (value == 'true') bool = true;
  }
  return bool;
}

function setSelection(element, value) {
  if (value != undefined && element != undefined) {
    if (element.options) {
      for (i = 0; i < element.options.length; i++) {
        if (element.options[i].value == value) {
          element.options.selectedIndex = i;
          break;
        }
      }
    }
  }
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return '';
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + '; ' + expires;
}

function clear() {
  $('#gross_weekly').text(formatPrice(0));
  $('#gross_fortnightly').text(formatPrice(0));
  $('#gross_monthly').text(formatPrice(0));
  $('#gross_annually').text(formatPrice(0));

  $('#super_weekly').text(formatPrice(0));
  $('#super_fortnightly').text(formatPrice(0));
  $('#super_monthly').text(formatPrice(0));
  $('#super_annually').text(formatPrice(0));

  $('#tax_weekly').text(formatPrice(0));
  $('#tax_fortnightly').text(formatPrice(0));
  $('#tax_monthly').text(formatPrice(0));
  $('#tax_annually').text(formatPrice(0));

  $('#other_weekly').text(formatPrice(0));
  $('#other_fortnightly').text(formatPrice(0));
  $('#other_monthly').text(formatPrice(0));
  $('#other_annually').text(formatPrice(0));

  $('#offsets_weekly').text(formatPrice(0));
  $('#offsets_fortnightly').text(formatPrice(0));
  $('#offsets_monthly').text(formatPrice(0));
  $('#offsets_annually').text(formatPrice(0));

  $('#ayers_weekly').text(formatPrice(0));
  $('#ayers_fortnightly').text(formatPrice(0));
  $('#ayers_monthly').text(formatPrice(0));
  $('#ayers_annually').text(formatPrice(0));

  $('#net_weekly').text(formatPrice(0));
  $('#net_fortnightly').text(formatPrice(0));
  $('#net_monthly').text(formatPrice(0));
  $('#net_annually').text(formatPrice(0));
}

function formatPrice(price, negative, brackets) {
  if (negative && price != 0) {
    return '$' + price.formatMoney(2, '.', ',') + '';
  }

  if (price >= 0 && !negative) {
    price = '$' + price.formatMoney(2, '.', ',');
  } else if (price == 0) {
    price = '$' + (-1 * price).formatMoney(2, '.', ',');
  } else {
    price = '-$' + (-1 * price).formatMoney(2, '.', ',');
  }

  if (brackets != undefined) {
    price = '(' + price + ')';
  }

  return price;
}

function getIncome() {
  var income = parseFloat($('#income').val());
  var day2Year = 365;
  var week2Year = 52;
  var fortnight2Year = 26;
  var month2Y = 12;
  var annualIncome = income;

  switch ($('#paycycle').attr('value')) {
    case 'annually':
      break;
    case 'monthly':
      annualIncome = income = income * month2Y;
      break;
    case 'fortnightly':
      annualIncome = income = income * fortnight2Year;
      break;
    case 'weekly':
      annualIncome = income = income * week2Year;
      break;
    case 'daily':
      // discard prorata

      annualIncome = income * parseFloat($('#dpy').val());
      income = income * parseFloat($('#dpw').val()) * week2Year;
      break;
    case 'hourly_week':
      annualIncome =
        income * parseFloat($('#hpw').val()) * parseFloat($('#wpy').val());
      income = income * parseFloat($('#hpw').val()) * week2Year;
      break;
    case 'hourly_day':
      annualIncome =
        income * parseFloat($('#hpd').val()) * parseFloat($('#dpy').val());
      income =
        income *
        parseFloat($('#hpd').val()) *
        parseFloat($('#dpw').val()) *
        week2Year;
      break;
    default:
      break;
  }

  return { income: income, annualIncome: annualIncome };
}

function hasPAYG() {
  var a = taxData[yearIndex].tax.payg != undefined;
  var b = taxData[yearIndex].taxNonResident.payg != undefined;
  var c = taxData[yearIndex].taxNoFreeThreshold.payg != undefined;
  return a && b && c;
}

function getPAYG(taxableComponent, cycle) {
  if (cycle == undefined) cycle = 'weekly';
  return calculatePAYG(taxableComponent, taxData[yearIndex].tax.payg, cycle);
}

function getPAYGForeign(taxableComponent, cycle) {
  if (cycle == undefined) cycle = 'weekly';
  return calculatePAYG(
    taxableComponent,
    taxData[yearIndex].taxNonResident.payg,
    cycle
  );
}

function getPAYGNoTaxFree(taxableComponent, cycle) {
  if (cycle == undefined) cycle = 'weekly';
  return calculatePAYG(
    taxableComponent,
    taxData[yearIndex].taxNoFreeThreshold.payg,
    cycle
  );
}

function getPAYGBackpacker(taxableComponent, cycle) {
  if (cycle == undefined) cycle = 'weekly';

  if (taxData[yearIndex].taxBackpacker.payg != undefined) {
    // use payg calculations
    return calculatePAYG(
      taxableComponent,
      taxData[yearIndex].taxBackpacker.payg,
      cycle
    );
  } else {
    if (cycle == 'weekly') {
      return getBackpackerIncomeTax(taxableComponent); //*weekF;
    } else {
      return getBackpackerIncomeTax(taxableComponent); //*monthF;
    }
  }
}

function getIncomeTax(taxableComponent) {
  var bracket = taxData[yearIndex].tax.brackets;
  var inc = taxData[yearIndex].tax.incremental;
  var tax = calculateBracket(taxableComponent, bracket, inc);
  return tax;
}

function getIncomeTaxNoFreeThreshold(taxableComponent) {
  var bracket = taxData[yearIndex].taxNoFreeThreshold.brackets;
  var inc = taxData[yearIndex].taxNoFreeThreshold.incremental;
  var tax = calculateBracket(taxableComponent, bracket, inc);
  return tax;
}

function getForeignerIncomeTax(taxableComponent) {
  var bracket = taxData[yearIndex].taxNonResident.brackets;
  var inc = taxData[yearIndex].taxNonResident.incremental;
  var tax = calculateBracket(taxableComponent, bracket, inc);
  return tax;
}

function getBackpackerIncomeTax(taxableComponent) {
  var bracket = taxData[yearIndex].taxBackpacker.brackets;
  var inc = taxData[yearIndex].taxBackpacker.incremental;
  var tax = calculateBracket(taxableComponent, bracket, inc);
  return tax;
}

function defaultSuper() {
  var bracket = taxData[yearIndex].superannuation.brackets;
  return bracket[0].value;
}

function overSuperBase(incomeComponent) {
  var cap = taxData[yearIndex].superannuation.cap
    ? taxData[yearIndex].superannuation.cap
    : Number.MAX_VALUE;
  return incomeComponent > cap;
}

function getSuperannuation(incomeComponent, subtractive) {
  var bracket = taxData[yearIndex].superannuation.brackets;
  var overridesuper = document.getElementById('superInput').value;
  // this is not great
  var customBracket = [
    { from: 0, to: 0, type: 'percent', nearest: 1, value: overridesuper },
  ];

  var inc = taxData[yearIndex].superannuation.incremental;
  var cap = taxData[yearIndex].superannuation.cap
    ? taxData[yearIndex].superannuation.cap
    : 0;
  var cap = 0;
  //var income = Math.min(cap, incomeComponent);
  //var superannuation = calculateBracket(income, customBracket, inc, subtractive, 0);

  var superannuation = calculateBracket(
    incomeComponent,
    customBracket,
    inc,
    subtractive,
    cap
  );

  return superannuation;
}

function getDivision293(incomeComponent) {
  var bracket = taxData[yearIndex].division293.brackets;
  var inc = taxData[yearIndex].division293.incremental;
  var division293 = calculateBracket(incomeComponent, bracket, inc, false);
  return division293;
}

function isSuperCap(amount) {
  var cap = taxData[yearIndex].superannuation.cap;
  return amount >= cap;
}

function getSuperCap() {
  return taxData[yearIndex].superannuation.cap;
}

function getHELP(taxableComponent, include, rounding) {
  if (!include) return 0;
  var bracket = taxData[yearIndex].help.brackets;
  var inc = taxData[yearIndex].help.incremental;
  var help = 0;
  if (rounding) {
    help = calculateBracketATORounding(taxableComponent, bracket, inc);
  } else {
    help = calculateBracket(taxableComponent, bracket, inc);
  }
  return help;
}

function getHELP_noTaxFree(taxableComponent, include, rounding) {
  if (!include) return 0;
  var help = 0;
  if (taxData[yearIndex].help_noTaxFree) {
    var bracket = taxData[yearIndex].help_noTaxFree.brackets;
    var inc = taxData[yearIndex].help_noTaxFree.incremental;
    if (rounding) {
      help = calculateBracketATORounding(taxableComponent, bracket, inc);
    } else {
      help = calculateBracket(taxableComponent, bracket, inc);
    }
  } else {
    help = getHELP(taxableComponent, include, rounding);
  }
  return help;
}

function getSFSS(taxableComponent, include, rounding) {
  if (!include) return 0;
  var bracket = taxData[yearIndex].sfss.brackets;
  var inc = taxData[yearIndex].sfss.incremental;
  var sfss = 0;
  if (rounding) {
    sfss = calculateBracketATORounding(taxableComponent, bracket, inc);
  } else {
    sfss = calculateBracket(taxableComponent, bracket, inc);
  }
  return sfss;
}

function getSFSS_noTaxFree(taxableComponent, include, rounding) {
  if (!include) return 0;
  var sfss = 0;
  if (taxData[yearIndex].sfss_noTaxFree) {
    var bracket = taxData[yearIndex].sfss_noTaxFree.brackets;
    var inc = taxData[yearIndex].sfss_noTaxFree.incremental;
    if (rounding) {
      sfss = calculateBracketATORounding(taxableComponent, bracket, inc);
    } else {
      sfss = calculateBracket(taxableComponent, bracket, inc);
    }
  } else {
    sfss = getSFSS(taxableComponent, include, rounding);
  }
  return sfss;
}

function getMedicare(taxableComponent) {
  var bracket = taxData[yearIndex].medicare.brackets;
  var inc = taxData[yearIndex].medicare.incremental;
  //function calculateBracket(v, b, incremental, subtractive, cap, debug){
  var medicare = calculateBracket(taxableComponent, bracket, inc, false, 0);
  return medicare;
}

function getMedicareSurcharge(taxableComponent) {
  var bracket = taxData[yearIndex].medicareSurcharge.brackets;
  var inc = taxData[yearIndex].medicareSurcharge.incremental;
  var medicare_surcharge = calculateBracket(
    taxableComponent,
    bracket,
    inc,
    false
  );
  return medicare_surcharge;
}

function getLITO(taxableComponent) {
  var offset = 0;
  if (taxData[yearIndex].lito) {
    var bracket = taxData[yearIndex].lito.brackets;
    var inc = taxData[yearIndex].lito.incremental;
    offset = calculateBracket(taxableComponent, bracket, inc, false);
    //if(offset<0) offset = 0;
    //if((incomeTax - offset) < 0) { offset = 1*incomeTax} // offset cannot be less than incomeTax
    //offset  = offset > 0 ? -1*offset : 0;
  }
  return offset;
}

function getLAMITO(taxableComponent) {
  // does it apply?
  var offset = 0;
  if (taxData[yearIndex].lamito) {
    var bracket = taxData[yearIndex].lamito.brackets;
    var inc = taxData[yearIndex].lamito.incremental;
    //function calculateBracket(v, b, incremental, subtractive, cap, debug){
    offset = calculateBracket(taxableComponent, bracket, inc, false);
    //if(offset<0) offset = 0;
    //if((incomeTax - offset) < 0) { offset = 1*incomeTax} // offset cannot be less than incomeTax
    //offset  = offset > 0 ? -1*offset : 0;
  }
  return offset;
}

function getMITO(incomeTax) {
  //console.log("getMITO:", incomeTax, yearIndex, taxData[yearIndex].mito);
  if (taxData[yearIndex].mito) {
    var bracket = taxData[yearIndex].mito.brackets;
    var inc = taxData[yearIndex].mito.incremental;
    offset = -1 * calculateBracket(taxableIncome, bracket, inc, false);
    if (offset > 0) offset = 0;
    if (incomeTax + offset < 0) {
      offset = -1 * incomeTax;
    } // offset cannot be less than incomeTax
    return offset;
  }
  return 0;
}

function getMAWTO(incomeTax) {
  var bracket = taxData[yearIndex].mawto.brackets;
  var inc = taxData[yearIndex].mawto.incremental;

  offset = calculateBracket(taxableIncome, bracket, inc, false, 0, false);
  if (offset > 0) offset = 0;
  if (incomeTax + offset < 0) {
    offset = -1 * incomeTax;
  } // offset cannot be less than incomeTax
  return offset;
}

function getOther(incomeTax) {
  var offset = 0;
  for (var i = 0; i < taxData[yearIndex].other.length; i++) {
    var bracket = taxData[yearIndex].other[i].brackets;
    var inc = taxData[yearIndex].other[i].incremental;
    offset += calculateBracket(incomeTax, bracket, inc, false);
  }
  return offset;
}

function getLevyNames() {
  var names = '';
  var count = taxData[yearIndex].other.length;
  for (var i = 0; i < count; i++) {
    names += taxData[yearIndex].other[i].name;
    if (i < count - 1) {
      names += ' and ';
    }
  }
  return names;
}
//scale = [weekly, fortnightly, monthly]
function getLITOPAYG(offset, tax, schedule) {
  var lit = offset;
  if (Array.isArray(taxData[yearIndex].lito.paygLoading)) {
    lito = offset * taxData[yearIndex].lito.paygLoading[schedule];
  } else {
    lito = offset * taxData[yearIndex].lito.paygLoading;
  }

  if (lito > 0) lito = 0;
  if (tax + lito < 0) {
    lito = -1 * tax;
  } // offset cannot be less than incomeTax

  return lito;
}

function getLAFHA() {
  var lafha = 0;

  switch ($('#lafhaSelect').attr('value')) {
    case 'annually':
      lafha = parseFloat($('#lafha').val());
      break;
    case 'monthly':
      lafha = parseFloat($('#lafha').val()) * 12;
      break;
    case 'fortnightly':
      lafha = parseFloat($('#lafha').val()) * 26;
      break;
    case 'weekly':
      lafha = parseFloat($('#lafha').val()) * 52;
      break;
    case 'daily':
      lafha =
        parseFloat($('#lafha').val()) *
        52 *
        parseFloat($('#lafhaDays').attr('value'));
      break;
    default:
      break;
  }

  return lafha;
}

function getDeductions() {
  var deductions = 0;
  if ($('#deductions').val()) {
    deductions = parseFloat($('#deductions').val());
  }
  return deductions;
}

function getAyersFee(income) {
  // percentage of salary before tax
  var ayers = income * (parseFloat($('#ayersFee').attr('value')) / 100);
  return ayers;
}

function calculatePAYG(income, paygBrackets, cycle) {
  // ATO have some craze rounding where values > 0.159 are rounded uo!
  var paygIncome;
  switch (cycle) {
    case 'monthly':
      // "if the result is an amount ending in 33 cents, add one cent"
      var cents = Math.round(100 * (income - Math.floor(income)));
      if (cents == 33) income += 0.01;
      paygIncome = Math.floor((income * 3) / 13);
      paygIncome += 0.99;
      break;
    case 'fortnighty':
      paygIncome = income / 2;
      paygIncome = Math.floor(income);
      paygIncome += 0.99;
      break;
    case 'weekly':
    default:
      paygIncome = Math.floor(income);
      paygIncome += 0.99;
      break;
  }

  var a = 0;
  var b = 0;
  // find bracket
  for (var i = 0; i < paygBrackets.length; i++) {
    if (paygIncome < paygBrackets[i].income || paygBrackets[i].income == 0) {
      a = paygBrackets[i].a;
      b = paygBrackets[i].b;
      break;
    }
  }

  var tax = paygIncome * a - b;
  tax = Math.round(tax);

  /*
        //rounding dramas!!
        // Somthing wierd happened in 2016 when the threshold changed
        if(paygIncome >= paygBrackets[paygBrackets.length - 2].income){
            //if in the upper most bracket round
            tax = Math.round(tax);
        }else{
            //crazy rounding!! round up if > 0.159  for 2017 tax
            if(taxData[yearIndex].year >= 2017){
                tax = paygIncome*a - b;
                var cents = Math.round( 1000 * ( tax - Math.floor(tax) ) );
                //if(cents >= 159) { //weird provisional rounding threshold!!
                if(cents >= 500) {
                    tax = Math.ceil(tax);
                }else{
                    tax = Math.round(tax);
                }
            }else{
                tax = Math.round(tax);
            }

        }
        //console.log(income, paygIncome, a, b, tax);
        */

  //convert back to cycle
  switch (cycle) {
    case 'monthly':
      tax = (tax * 13) / 3;
      break;
    case 'fortnighty':
      tax = tax * 2;
      break;
    default:
      break;
  }

  return tax;
}

/*
    function calculateBracketX(v, b, incremental, subtractive, cap, debug){
            var r = 0;
            var inc = (incremental == 1)? true : false;
            // v for value
            // b for brackets
            for(var i = 0; i< b.length; i++){
                // for each of the brackets
                var from = Number(b[i].from) || 0;
                var to = Number(b[i].to) || 0;
                var nearest = Number(b[i].nearest) || 1;
                var val = Number(b[i].value)|| 0;
                var bracketAmount;
                if(debug) console.log(" ");
                if(debug) console.log("bracket: from:" + from + " to: " + to + " amount: "  + val + " bracket value: " + v);

                // individual brackets can have a 'incremental' override
                if(b[i].incremental != undefined){
                    // this bracket has an incremental override (medicare)
                    if(debug) console.log("incremental bracket! ");
                    inc = (b[i].incremental == 1 || b[i].incremental == "true")? true : false;
                }

                if(v >= from){
                    if(debug) console.log("checking bracket... " + b[i].type + " :"  + i + " :" + to + " :" + from + " : " + val);
                    if(b[i].type == "fixed"){

                        r += val;
                        if(debug) console.log("add fixed.. ", val);
                    }else{
                        if(v < to || to == 0){
                            if(debug) console.log("part bracket... ");
                            // part bracket
                            // if the brackets are incremental take the percentage from the individual bracket
                            // otherwise take a percentage from the total value
                            if(inc){
                                if(debug) console.log("include bracket... ");
                                bracketAmount = (Math.ceil((v - from)/nearest))*nearest;
                                if(debug) console.log("include bracket... " + bracketAmount + " cap: " + cap);
                                if(bracketAmount> cap && cap>0) bracketAmount = cap;
                                r += ((bracketAmount)/100)*val;
                                if(debug) console.log("include bracket... = " + r);
                            }else{
                                if(debug) console.log("include calculation against bracket amount... " + v + " of "  + val);
                                r = ((v)/100)*val;
                                if(debug) console.log("include bracket... = " + r);
                                if(subtractive){r /= (1 + (val/100));}
                                if(r> cap && cap>0) r = cap;
                                if(debug) console.log("include bracket... cap " + cap + " => " + r);
                                return r;
                            }
                        }else{
                            // full bracket - take an incrementat percentage if it is an incremental bracket
                            if(inc){

                                bracketAmount = (Math.ceil((to - from)/nearest))*nearest;
                                if(bracketAmount> cap && cap>0) bracketAmount = cap;
                                r += ((bracketAmount)/100)*val;
                                if(r> cap && cap>0) r = cap;
                                if(subtractive){r /= (1 + (val/100));}
                                if(debug) console.log("add full bracket... ", r);
                            }else{
                                if(debug) console.log("-skip-");
                            }
                        }
                    }
                }else{
                    break;
                }
            }
            return r;
        }
    */

function calculateBracket(v, b, incremental, subtractive, cap, debug) {
  // round to the nearest cent
  return calculateBracketWithRounding(
    v,
    b,
    incremental,
    subtractive,
    cap,
    debug,
    0.01
  );
}

function calculateBracketATORounding(
  v,
  b,
  incremental,
  subtractive,
  cap,
  debug
) {
  // round to the nearest week
  return calculateBracketWithRounding(
    v,
    b,
    incremental,
    subtractive,
    cap,
    debug,
    0.52
  );
}

function calculateBracketWithRounding(
  v,
  b,
  incremental,
  subtractive,
  cap,
  debug,
  rounding
) {
  if (debug) console.log('ROUNDING: ', b.length, debug);
  var r = 0;
  var inc = incremental == 1 ? true : false;

  var rounding = rounding || 0.01;
  // v for value
  // b for brackets
  for (var i = 0; i < b.length; i++) {
    // for each of the brackets
    var from = Number(b[i].from) || 0;
    var to = Number(b[i].to) || 0;
    var nearest = Number(b[i].nearest) || 1;
    var val = Number(b[i].value) || 0;
    var start = Number(b[i].start) || 0;
    var end = Number(b[i].end) || 0;
    var bracketAmount;
    var type = b[i].type;

    if (debug) console.log(' ');
    if (debug)
      console.log(
        'bracket: from:' +
          from +
          ' to: ' +
          to +
          ' amount: ' +
          val +
          ' bracket value: ' +
          v
      );

    if (b[i].incremental != undefined) {
      // this bracket has an incremental override (medicare)
      if (debug) console.log('incremental bracket! ');
      inc = b[i].incremental == 1 || b[i].incremental == 'true' ? true : false;
    }

    // trigger on active bracket
    if (v >= from) {
      if (debug)
        console.log(
          'Active bracket... ' +
            b[i].type +
            ' :' +
            i +
            ' :' +
            to +
            ' :' +
            from +
            ' : ' +
            val
        );

      // part bracket > from and < to, otherwise it is complete bracket
      var partBracket = v < to || to == 0;

      // calculate the value within this bracket (check cap)
      if (partBracket) {
        bracketAmount = Math.ceil((v - from) / nearest) * nearest;
      } else {
        bracketAmount = Math.ceil((to - from) / nearest) * nearest;
      }

      // if not incremental only concern is the final brackets
      if (!inc && !partBracket) continue;

      switch (type) {
        case 'fixed':
          r = inc ? r + val : val; // add value of fixed component
          if (debug) console.log('fixed bracket: ', r);
          break;

        case 'rate':
          var rateValue = start + (bracketAmount * val) / 100;
          if (rateValue > end && val > 0) rateValue == end; // upper limit on improving rate
          if (rateValue < end && val < 0) rateValue == end; // lower limit on decending rate
          r = inc ? r + rateValue : rateValue;
          if (debug) console.log('rate bracket: ', r);
          break;

        case 'percent':
          if (partBracket) {
            if (debug) console.log('part bracket: ', partBracket);

            // part bracket
            // if the brackets are incremental take the percentage from the individual bracket
            // otherwise take a percentage from the total value
            if (inc) {
              if (debug) console.log('include bracket... ');
              // apply cap - (superannuation)
              if (bracketAmount > cap && cap > 0) bracketAmount = cap;
              if (debug)
                console.log(
                  'include bracket... ' + bracketAmount + ' cap: ' + cap
                );
              // ATO rounding
              var percentValue =
                rounding * Math.round((bracketAmount * (val / 100)) / rounding);
              // subtractive? cap?
              r += percentValue;
              if (debug) console.log('include bracket... = ' + r);
            } else {
              // take the full amount not just the partial bracket value
              var percentValue =
                rounding * Math.round((v * (val / 100)) / rounding);
              // this is a superannuation option
              if (subtractive) {
                percentValue /= 1 + val / 100;
              }

              // check cap (superannuation)
              if (percentValue > cap && cap > 0) {
                percentValue = cap;
              }

              r = percentValue;
              if (debug) console.log('Bracket amount (non inc) ' + r);
            }
          } else {
            if (debug) console.log('Full bracket: ', partBracket);
            if (inc) {
              if (bracketAmount > cap && cap > 0) bracketAmount = cap;
              var percentValue =
                rounding * Math.round((bracketAmount * (val / 100)) / rounding);

              if (r > cap && cap > 0) r = cap;
              if (subtractive) {
                r /= 1 + val / 100;
              }
              r += percentValue;
              if (debug)
                console.log(
                  'add full bracket... bracketAmount: ',
                  bracketAmount,
                  percentValue
                );
              if (debug) console.log('add full bracket... ', r);
            }
          }
          break;
      }
    }
  }
  return Math.round(r * 100) / 100;
}

/*
    if(b[i].type == "fixed"){

        r += val;
        if(debug) alert("fixed.. ");
    }else{
        if(debug) alert("percentage bracket... ");
        if(v < to || to == 0){
            if(debug) alert("part bracket... ");
            // part bracket
            // if the brackets are incremental take the percentage from the individual bracket
            // otherwise take a percentage from the total value
            if(inc){
                if(debug) alert("include bracket... ");
                bracketAmount = (Math.ceil((v - from)/nearest))*nearest;
                if(debug) alert("include bracket... " + bracketAmount + " cap: " + cap);
                if(bracketAmount> cap && cap>0) bracketAmount = cap;
                //r += ((bracketAmount)/100)*val;
                // weekly rounding
                r += 52*Math.round( ((bracketAmount/100)/52) *val);
                if(debug) alert("include bracket... = " + r);
            }else{
                if(debug) alert("include calculation against bracket amount... " + v + " of "  + val);
                //r = ((v)/100)*val;
                r = 52*Math.round(((v/100)/52)*val);
                if(debug) alert("include bracket... = " + r);
                if(subtractive){r /= (1 + (val/100));}
                if(r> cap && cap>0) r = cap;
                if(debug) alert("include bracket... cap " + cap + " => " + r);
                return r;
            }
        }else{
            if(debug) alert("full bracket... ");
            // full bracket - take an incrementat percentage if it is an incremental bracket
            if(inc){
                if(debug) alert("add bracket... ");
                bracketAmount = (Math.ceil((to - from)/nearest))*nearest;
                if(bracketAmount> cap && cap>0) bracketAmount = cap;
                //r += ((bracketAmount)/100)*val;
                r += 52*Math.round( ((bracketAmount/100)/52) *val);
                if(r> cap && cap>0) r = cap;
                if(subtractive){r /= (1 + (val/100));}
            }
        }
    }
    */

function checkPermalink() {
  var hash = document.location.hash.substr(1);

  if (hash.length !== 0) {
    var components = hash.split('|');
    if (components.length >= 5) {
      $('#income').val(components[0]);
      $('#paycycle')[0].selectedIndex = components[1];

      var taxYear = components[2];
      for (i = 0; i < taxData.length; i++) {
        var data = taxData[i].year;
        if (taxData[i].year == taxYear) {
          $('#taxYearSelect')[0].selectedIndex = i;
        }
      }

      $('#superInput').val(components[3]);

      var paycycleInputs = components[4].split(',');
      if (paycycleInputs.length >= 5) {
        $('#dpw').val(paycycleInputs[0]);
        $('#dpy').val(paycycleInputs[1]);
        $('#hpd').val(paycycleInputs[2]);
        $('#hpw').val(paycycleInputs[3]);
        $('#wpy').val(paycycleInputs[4]);
      }

      var attributes = components[5].split('');
      if (attributes.length >= 6) {
        $("input[name='superannuation']")[0].checked =
          attributes[0] == '1' ? true : false;
        $("input[name='foreigner']")[0].checked =
          attributes[1] == '1' ? true : false;
        $("input[name='taxfree']")[0].checked =
          attributes[2] == '1' ? true : false;
        $("input[name='HELP']")[0].checked =
          attributes[3] == '1' ? true : false;
        $("input[name='SFSS']")[0].checked =
          attributes[4] == '1' ? true : false;
        $("input[name='withhold']")[0].checked =
          attributes[5] == '1' ? true : false;
      }
    }
    // clear hash
    //window.location.hash = "";
    return true;
  }

  return false;
}

function updatePermalink() {
  //income|paycycle|taxYear|super|[inputs]|[options]
  var link = '#';
  link += $('#income').val() + '|';
  link += $('#paycycle')[0].selectedIndex + '|';
  link += $('#taxYearSelect').val() + '|';
  link += $('#superInput').val() + '|';

  link += $('#dpw').val() + ',';
  link += $('#dpy').val() + ',';
  link += $('#hpd').val() + ',';
  link += $('#hpw').val() + ',';
  link += $('#wpy').val() + '|';

  var attributes = '';
  attributes += $("input[name='superannuation']").is(':checked') ? '1' : '0';
  attributes += $("input[name='foreigner']").is(':checked') ? '1' : '0';
  attributes += $("input[name='taxfree']").is(':checked') ? '1' : '0';
  attributes += $("input[name='HELP']").is(':checked') ? '1' : '0';
  attributes += $("input[name='SFSS']").is(':checked') ? '1' : '0';
  attributes += $('input[name="withhold"]').is(':checked') ? '1' : '0';

  link += attributes;
  //window.location.hash = link;

  $('#permalink')[0].href = link;
}

Number.prototype.formatMoney = function(c, d, t) {
  var n = this,
    c = isNaN((c = Math.abs(c))) ? 2 : c,
    d = d == undefined ? ',' : d,
    t = t == undefined ? '.' : t,
    s = n < 0 ? '-' : '',
    i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '',
    j = (j = i.length) > 3 ? j % 3 : 0;
  return (
    s +
    (j ? i.substr(0, j) + t : '') +
    i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
    (c
      ? d +
        Math.abs(n - i)
          .toFixed(c)
          .slice(2)
      : '')
  );
};

/* Tooltipster v3.3.0 */ (function(e, t, n) {
  function s(t, n) {
    this.bodyOverflowX;
    this.callbacks = { hide: [], show: [] };
    this.checkInterval = null;
    this.Content;
    this.$el = e(t);
    this.$elProxy;
    this.elProxyPosition;
    this.enabled = true;
    this.options = e.extend({}, i, n);
    this.mouseIsOverProxy = false;
    this.namespace = 'tooltipster-' + Math.round(Math.random() * 1e5);
    this.Status = 'hidden';
    this.timerHide = null;
    this.timerShow = null;
    this.$tooltip;
    this.options.iconTheme = this.options.iconTheme.replace('.', '');
    this.options.theme = this.options.theme.replace('.', '');
    this._init();
  }
  function o(t, n) {
    var r = true;
    e.each(t, function(e, i) {
      if (typeof n[e] === 'undefined' || t[e] !== n[e]) {
        r = false;
        return false;
      }
    });
    return r;
  }
  function f() {
    return !a && u;
  }
  function l() {
    var e = n.body || n.documentElement,
      t = e.style,
      r = 'transition';
    if (typeof t[r] == 'string') {
      return true;
    }
    (v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms']),
      (r = r.charAt(0).toUpperCase() + r.substr(1));
    for (var i = 0; i < v.length; i++) {
      if (typeof t[v[i] + r] == 'string') {
        return true;
      }
    }
    return false;
  }
  var r = 'tooltipster',
    i = {
      animation: 'fade',
      arrow: true,
      arrowColor: '',
      autoClose: true,
      content: null,
      contentAsHTML: false,
      contentCloning: true,
      debug: true,
      delay: 200,
      minWidth: 0,
      maxWidth: null,
      functionInit: function(e, t) {},
      functionBefore: function(e, t) {
        t();
      },
      functionReady: function(e, t) {},
      functionAfter: function(e) {},
      hideOnClick: false,
      icon: '(?)',
      iconCloning: true,
      iconDesktop: false,
      iconTouch: false,
      iconTheme: 'tooltipster-icon',
      interactive: false,
      interactiveTolerance: 350,
      multiple: false,
      offsetX: 0,
      offsetY: 0,
      onlyOne: false,
      position: 'top',
      positionTracker: false,
      positionTrackerCallback: function(e) {
        if (this.option('trigger') == 'hover' && this.option('autoClose')) {
          this.hide();
        }
      },
      restoration: 'current',
      speed: 350,
      timer: 0,
      theme: 'tooltipster-default',
      touchDevices: true,
      trigger: 'hover',
      updateAnimation: true,
    };
  s.prototype = {
    _init: function() {
      var t = this;
      if (n.querySelector) {
        var r = null;
        if (t.$el.data('tooltipster-initialTitle') === undefined) {
          r = t.$el.attr('title');
          if (r === undefined) r = null;
          t.$el.data('tooltipster-initialTitle', r);
        }
        if (t.options.content !== null) {
          t._content_set(t.options.content);
        } else {
          t._content_set(r);
        }
        var i = t.options.functionInit.call(t.$el, t.$el, t.Content);
        if (typeof i !== 'undefined') t._content_set(i);
        t.$el.removeAttr('title').addClass('tooltipstered');
        if ((!u && t.options.iconDesktop) || (u && t.options.iconTouch)) {
          if (typeof t.options.icon === 'string') {
            t.$elProxy = e('<span class="' + t.options.iconTheme + '"></span>');
            t.$elProxy.text(t.options.icon);
          } else {
            if (t.options.iconCloning) t.$elProxy = t.options.icon.clone(true);
            else t.$elProxy = t.options.icon;
          }
          t.$elProxy.insertAfter(t.$el);
        } else {
          t.$elProxy = t.$el;
        }
        if (t.options.trigger == 'hover') {
          t.$elProxy
            .on('mouseenter.' + t.namespace, function() {
              if (!f() || t.options.touchDevices) {
                t.mouseIsOverProxy = true;
                t._show();
              }
            })
            .on('mouseleave.' + t.namespace, function() {
              if (!f() || t.options.touchDevices) {
                t.mouseIsOverProxy = false;
              }
            });
          if (u && t.options.touchDevices) {
            t.$elProxy.on('touchstart.' + t.namespace, function() {
              t._showNow();
            });
          }
        } else if (t.options.trigger == 'click') {
          t.$elProxy.on('click.' + t.namespace, function() {
            if (!f() || t.options.touchDevices) {
              t._show();
            }
          });
        }
      }
    },
    _show: function() {
      var e = this;
      if (e.Status != 'shown' && e.Status != 'appearing') {
        if (e.options.delay) {
          e.timerShow = setTimeout(function() {
            if (
              e.options.trigger == 'click' ||
              (e.options.trigger == 'hover' && e.mouseIsOverProxy)
            ) {
              e._showNow();
            }
          }, e.options.delay);
        } else e._showNow();
      }
    },
    _showNow: function(n) {
      var r = this;
      r.options.functionBefore.call(r.$el, r.$el, function() {
        if (r.enabled && r.Content !== null) {
          if (n) r.callbacks.show.push(n);
          r.callbacks.hide = [];
          clearTimeout(r.timerShow);
          r.timerShow = null;
          clearTimeout(r.timerHide);
          r.timerHide = null;
          if (r.options.onlyOne) {
            e('.tooltipstered')
              .not(r.$el)
              .each(function(t, n) {
                var r = e(n),
                  i = r.data('tooltipster-ns');
                e.each(i, function(e, t) {
                  var n = r.data(t),
                    i = n.status(),
                    s = n.option('autoClose');
                  if (i !== 'hidden' && i !== 'disappearing' && s) {
                    n.hide();
                  }
                });
              });
          }
          var i = function() {
            r.Status = 'shown';
            e.each(r.callbacks.show, function(e, t) {
              t.call(r.$el);
            });
            r.callbacks.show = [];
          };
          if (r.Status !== 'hidden') {
            var s = 0;
            if (r.Status === 'disappearing') {
              r.Status = 'appearing';
              if (l()) {
                r.$tooltip
                  .clearQueue()
                  .removeClass('tooltipster-dying')
                  .addClass('tooltipster-' + r.options.animation + '-show');
                if (r.options.speed > 0) r.$tooltip.delay(r.options.speed);
                r.$tooltip.queue(i);
              } else {
                r.$tooltip.stop().fadeIn(i);
              }
            } else if (r.Status === 'shown') {
              i();
            }
          } else {
            r.Status = 'appearing';
            var s = r.options.speed;
            r.bodyOverflowX = e('body').css('overflow-x');
            e('body').css('overflow-x', 'hidden');
            var o = 'tooltipster-' + r.options.animation,
              a =
                '-webkit-transition-duration: ' +
                r.options.speed +
                'ms; -webkit-animation-duration: ' +
                r.options.speed +
                'ms; -moz-transition-duration: ' +
                r.options.speed +
                'ms; -moz-animation-duration: ' +
                r.options.speed +
                'ms; -o-transition-duration: ' +
                r.options.speed +
                'ms; -o-animation-duration: ' +
                r.options.speed +
                'ms; -ms-transition-duration: ' +
                r.options.speed +
                'ms; -ms-animation-duration: ' +
                r.options.speed +
                'ms; transition-duration: ' +
                r.options.speed +
                'ms; animation-duration: ' +
                r.options.speed +
                'ms;',
              f = r.options.minWidth
                ? 'min-width:' + Math.round(r.options.minWidth) + 'px;'
                : '',
              c = r.options.maxWidth
                ? 'max-width:' + Math.round(r.options.maxWidth) + 'px;'
                : '',
              h = r.options.interactive ? 'pointer-events: auto;' : '';
            r.$tooltip = e(
              '<div class="tooltipster-base ' +
                r.options.theme +
                '" style="' +
                f +
                ' ' +
                c +
                ' ' +
                h +
                ' ' +
                a +
                '"><div class="tooltipster-content"></div></div>'
            );
            if (l()) r.$tooltip.addClass(o);
            r._content_insert();
            r.$tooltip.appendTo('body');
            r.reposition();
            r.options.functionReady.call(r.$el, r.$el, r.$tooltip);
            if (l()) {
              r.$tooltip.addClass(o + '-show');
              if (r.options.speed > 0) r.$tooltip.delay(r.options.speed);
              r.$tooltip.queue(i);
            } else {
              r.$tooltip.css('display', 'none').fadeIn(r.options.speed, i);
            }
            r._interval_set();
            e(t).on(
              'scroll.' + r.namespace + ' resize.' + r.namespace,
              function() {
                r.reposition();
              }
            );
            if (r.options.autoClose) {
              e('body').off('.' + r.namespace);
              if (r.options.trigger == 'hover') {
                if (u) {
                  setTimeout(function() {
                    e('body').on('touchstart.' + r.namespace, function() {
                      r.hide();
                    });
                  }, 0);
                }
                if (r.options.interactive) {
                  if (u) {
                    r.$tooltip.on('touchstart.' + r.namespace, function(e) {
                      e.stopPropagation();
                    });
                  }
                  var p = null;
                  r.$elProxy
                    .add(r.$tooltip)
                    .on('mouseleave.' + r.namespace + '-autoClose', function() {
                      clearTimeout(p);
                      p = setTimeout(function() {
                        r.hide();
                      }, r.options.interactiveTolerance);
                    })
                    .on('mouseenter.' + r.namespace + '-autoClose', function() {
                      clearTimeout(p);
                    });
                } else {
                  r.$elProxy.on(
                    'mouseleave.' + r.namespace + '-autoClose',
                    function() {
                      r.hide();
                    }
                  );
                }
                if (r.options.hideOnClick) {
                  r.$elProxy.on(
                    'click.' + r.namespace + '-autoClose',
                    function() {
                      r.hide();
                    }
                  );
                }
              } else if (r.options.trigger == 'click') {
                setTimeout(function() {
                  e('body').on(
                    'click.' + r.namespace + ' touchstart.' + r.namespace,
                    function() {
                      r.hide();
                    }
                  );
                }, 0);
                if (r.options.interactive) {
                  r.$tooltip.on(
                    'click.' + r.namespace + ' touchstart.' + r.namespace,
                    function(e) {
                      e.stopPropagation();
                    }
                  );
                }
              }
            }
          }
          if (r.options.timer > 0) {
            r.timerHide = setTimeout(function() {
              r.timerHide = null;
              r.hide();
            }, r.options.timer + s);
          }
        }
      });
    },
    _interval_set: function() {
      var t = this;
      t.checkInterval = setInterval(function() {
        if (
          e('body').find(t.$el).length === 0 ||
          e('body').find(t.$elProxy).length === 0 ||
          t.Status == 'hidden' ||
          e('body').find(t.$tooltip).length === 0
        ) {
          if (t.Status == 'shown' || t.Status == 'appearing') t.hide();
          t._interval_cancel();
        } else {
          if (t.options.positionTracker) {
            var n = t._repositionInfo(t.$elProxy),
              r = false;
            if (o(n.dimension, t.elProxyPosition.dimension)) {
              if (t.$elProxy.css('position') === 'fixed') {
                if (o(n.position, t.elProxyPosition.position)) r = true;
              } else {
                if (o(n.offset, t.elProxyPosition.offset)) r = true;
              }
            }
            if (!r) {
              t.reposition();
              t.options.positionTrackerCallback.call(t, t.$el);
            }
          }
        }
      }, 200);
    },
    _interval_cancel: function() {
      clearInterval(this.checkInterval);
      this.checkInterval = null;
    },
    _content_set: function(e) {
      if (typeof e === 'object' && e !== null && this.options.contentCloning) {
        e = e.clone(true);
      }
      this.Content = e;
    },
    _content_insert: function() {
      var e = this,
        t = this.$tooltip.find('.tooltipster-content');
      if (typeof e.Content === 'string' && !e.options.contentAsHTML) {
        t.text(e.Content);
      } else {
        t.empty().append(e.Content);
      }
    },
    _update: function(e) {
      var t = this;
      t._content_set(e);
      if (t.Content !== null) {
        if (t.Status !== 'hidden') {
          t._content_insert();
          t.reposition();
          if (t.options.updateAnimation) {
            if (l()) {
              t.$tooltip
                .css({
                  width: '',
                  '-webkit-transition':
                    'all ' +
                    t.options.speed +
                    'ms, width 0ms, height 0ms, left 0ms, top 0ms',
                  '-moz-transition':
                    'all ' +
                    t.options.speed +
                    'ms, width 0ms, height 0ms, left 0ms, top 0ms',
                  '-o-transition':
                    'all ' +
                    t.options.speed +
                    'ms, width 0ms, height 0ms, left 0ms, top 0ms',
                  '-ms-transition':
                    'all ' +
                    t.options.speed +
                    'ms, width 0ms, height 0ms, left 0ms, top 0ms',
                  transition:
                    'all ' +
                    t.options.speed +
                    'ms, width 0ms, height 0ms, left 0ms, top 0ms',
                })
                .addClass('tooltipster-content-changing');
              setTimeout(function() {
                if (t.Status != 'hidden') {
                  t.$tooltip.removeClass('tooltipster-content-changing');
                  setTimeout(function() {
                    if (t.Status !== 'hidden') {
                      t.$tooltip.css({
                        '-webkit-transition': t.options.speed + 'ms',
                        '-moz-transition': t.options.speed + 'ms',
                        '-o-transition': t.options.speed + 'ms',
                        '-ms-transition': t.options.speed + 'ms',
                        transition: t.options.speed + 'ms',
                      });
                    }
                  }, t.options.speed);
                }
              }, t.options.speed);
            } else {
              t.$tooltip.fadeTo(t.options.speed, 0.5, function() {
                if (t.Status != 'hidden') {
                  t.$tooltip.fadeTo(t.options.speed, 1);
                }
              });
            }
          }
        }
      } else {
        t.hide();
      }
    },
    _repositionInfo: function(e) {
      return {
        dimension: { height: e.outerHeight(false), width: e.outerWidth(false) },
        offset: e.offset(),
        position: {
          left: parseInt(e.css('left')),
          top: parseInt(e.css('top')),
        },
      };
    },
    hide: function(n) {
      var r = this;
      if (n) r.callbacks.hide.push(n);
      r.callbacks.show = [];
      clearTimeout(r.timerShow);
      r.timerShow = null;
      clearTimeout(r.timerHide);
      r.timerHide = null;
      var i = function() {
        e.each(r.callbacks.hide, function(e, t) {
          t.call(r.$el);
        });
        r.callbacks.hide = [];
      };
      if (r.Status == 'shown' || r.Status == 'appearing') {
        r.Status = 'disappearing';
        var s = function() {
          r.Status = 'hidden';
          if (typeof r.Content == 'object' && r.Content !== null) {
            r.Content.detach();
          }
          r.$tooltip.remove();
          r.$tooltip = null;
          e(t).off('.' + r.namespace);
          e('body')
            .off('.' + r.namespace)
            .css('overflow-x', r.bodyOverflowX);
          e('body').off('.' + r.namespace);
          r.$elProxy.off('.' + r.namespace + '-autoClose');
          r.options.functionAfter.call(r.$el, r.$el);
          i();
        };
        if (l()) {
          r.$tooltip
            .clearQueue()
            .removeClass('tooltipster-' + r.options.animation + '-show')
            .addClass('tooltipster-dying');
          if (r.options.speed > 0) r.$tooltip.delay(r.options.speed);
          r.$tooltip.queue(s);
        } else {
          r.$tooltip.stop().fadeOut(r.options.speed, s);
        }
      } else if (r.Status == 'hidden') {
        i();
      }
      return r;
    },
    show: function(e) {
      this._showNow(e);
      return this;
    },
    update: function(e) {
      return this.content(e);
    },
    content: function(e) {
      if (typeof e === 'undefined') {
        return this.Content;
      } else {
        this._update(e);
        return this;
      }
    },
    reposition: function() {
      var n = this;
      if (e('body').find(n.$tooltip).length !== 0) {
        n.$tooltip.css('width', '');
        n.elProxyPosition = n._repositionInfo(n.$elProxy);
        var r = null,
          i = e(t).width(),
          s = n.elProxyPosition,
          o = n.$tooltip.outerWidth(false),
          u = n.$tooltip.innerWidth() + 1,
          a = n.$tooltip.outerHeight(false);
        if (n.$elProxy.is('area')) {
          var f = n.$elProxy.attr('shape'),
            l = n.$elProxy.parent().attr('name'),
            c = e('img[usemap="#' + l + '"]'),
            h = c.offset().left,
            p = c.offset().top,
            d =
              n.$elProxy.attr('coords') !== undefined
                ? n.$elProxy.attr('coords').split(',')
                : undefined;
          if (f == 'circle') {
            var v = parseInt(d[0]),
              m = parseInt(d[1]),
              g = parseInt(d[2]);
            s.dimension.height = g * 2;
            s.dimension.width = g * 2;
            s.offset.top = p + m - g;
            s.offset.left = h + v - g;
          } else if (f == 'rect') {
            var v = parseInt(d[0]),
              m = parseInt(d[1]),
              y = parseInt(d[2]),
              b = parseInt(d[3]);
            s.dimension.height = b - m;
            s.dimension.width = y - v;
            s.offset.top = p + m;
            s.offset.left = h + v;
          } else if (f == 'poly') {
            var w = [],
              E = [],
              S = 0,
              x = 0,
              T = 0,
              N = 0,
              C = 'even';
            for (var k = 0; k < d.length; k++) {
              var L = parseInt(d[k]);
              if (C == 'even') {
                if (L > T) {
                  T = L;
                  if (k === 0) {
                    S = T;
                  }
                }
                if (L < S) {
                  S = L;
                }
                C = 'odd';
              } else {
                if (L > N) {
                  N = L;
                  if (k == 1) {
                    x = N;
                  }
                }
                if (L < x) {
                  x = L;
                }
                C = 'even';
              }
            }
            s.dimension.height = N - x;
            s.dimension.width = T - S;
            s.offset.top = p + x;
            s.offset.left = h + S;
          } else {
            s.dimension.height = c.outerHeight(false);
            s.dimension.width = c.outerWidth(false);
            s.offset.top = p;
            s.offset.left = h;
          }
        }
        var A = 0,
          O = 0,
          M = 0,
          _ = parseInt(n.options.offsetY),
          D = parseInt(n.options.offsetX),
          P = n.options.position;
        function H() {
          var n = e(t).scrollLeft();
          if (A - n < 0) {
            r = A - n;
            A = n;
          }
          if (A + o - n > i) {
            r = A - (i + n - o);
            A = i + n - o;
          }
        }
        function B(n, r) {
          if (
            s.offset.top - e(t).scrollTop() - a - _ - 12 < 0 &&
            r.indexOf('top') > -1
          ) {
            P = n;
          }
          if (
            s.offset.top + s.dimension.height + a + 12 + _ >
              e(t).scrollTop() + e(t).height() &&
            r.indexOf('bottom') > -1
          ) {
            P = n;
            M = s.offset.top - a - _ - 12;
          }
        }
        if (P == 'top') {
          var j = s.offset.left + o - (s.offset.left + s.dimension.width);
          A = s.offset.left + D - j / 2;
          M = s.offset.top - a - _ - 12;
          H();
          B('bottom', 'top');
        }
        if (P == 'top-left') {
          A = s.offset.left + D;
          M = s.offset.top - a - _ - 12;
          H();
          B('bottom-left', 'top-left');
        }
        if (P == 'top-right') {
          A = s.offset.left + s.dimension.width + D - o;
          M = s.offset.top - a - _ - 12;
          H();
          B('bottom-right', 'top-right');
        }
        if (P == 'bottom') {
          var j = s.offset.left + o - (s.offset.left + s.dimension.width);
          A = s.offset.left - j / 2 + D;
          M = s.offset.top + s.dimension.height + _ + 12;
          H();
          B('top', 'bottom');
        }
        if (P == 'bottom-left') {
          A = s.offset.left + D;
          M = s.offset.top + s.dimension.height + _ + 12;
          H();
          B('top-left', 'bottom-left');
        }
        if (P == 'bottom-right') {
          A = s.offset.left + s.dimension.width + D - o;
          M = s.offset.top + s.dimension.height + _ + 12;
          H();
          B('top-right', 'bottom-right');
        }
        if (P == 'left') {
          A = s.offset.left - D - o - 12;
          O = s.offset.left + D + s.dimension.width + 12;
          var F = s.offset.top + a - (s.offset.top + s.dimension.height);
          M = s.offset.top - F / 2 - _;
          if (A < 0 && O + o > i) {
            var I = parseFloat(n.$tooltip.css('border-width')) * 2,
              q = o + A - I;
            n.$tooltip.css('width', q + 'px');
            a = n.$tooltip.outerHeight(false);
            A = s.offset.left - D - q - 12 - I;
            F = s.offset.top + a - (s.offset.top + s.dimension.height);
            M = s.offset.top - F / 2 - _;
          } else if (A < 0) {
            A = s.offset.left + D + s.dimension.width + 12;
            r = 'left';
          }
        }
        if (P == 'right') {
          A = s.offset.left + D + s.dimension.width + 12;
          O = s.offset.left - D - o - 12;
          var F = s.offset.top + a - (s.offset.top + s.dimension.height);
          M = s.offset.top - F / 2 - _;
          if (A + o > i && O < 0) {
            var I = parseFloat(n.$tooltip.css('border-width')) * 2,
              q = i - A - I;
            n.$tooltip.css('width', q + 'px');
            a = n.$tooltip.outerHeight(false);
            F = s.offset.top + a - (s.offset.top + s.dimension.height);
            M = s.offset.top - F / 2 - _;
          } else if (A + o > i) {
            A = s.offset.left - D - o - 12;
            r = 'right';
          }
        }
        if (n.options.arrow) {
          var R = 'tooltipster-arrow-' + P;
          if (n.options.arrowColor.length < 1) {
            var U = n.$tooltip.css('background-color');
          } else {
            var U = n.options.arrowColor;
          }
          if (!r) {
            r = '';
          } else if (r == 'left') {
            R = 'tooltipster-arrow-right';
            r = '';
          } else if (r == 'right') {
            R = 'tooltipster-arrow-left';
            r = '';
          } else {
            r = 'left:' + Math.round(r) + 'px;';
          }
          if (P == 'top' || P == 'top-left' || P == 'top-right') {
            var z = parseFloat(n.$tooltip.css('border-bottom-width')),
              W = n.$tooltip.css('border-bottom-color');
          } else if (
            P == 'bottom' ||
            P == 'bottom-left' ||
            P == 'bottom-right'
          ) {
            var z = parseFloat(n.$tooltip.css('border-top-width')),
              W = n.$tooltip.css('border-top-color');
          } else if (P == 'left') {
            var z = parseFloat(n.$tooltip.css('border-right-width')),
              W = n.$tooltip.css('border-right-color');
          } else if (P == 'right') {
            var z = parseFloat(n.$tooltip.css('border-left-width')),
              W = n.$tooltip.css('border-left-color');
          } else {
            var z = parseFloat(n.$tooltip.css('border-bottom-width')),
              W = n.$tooltip.css('border-bottom-color');
          }
          if (z > 1) {
            z++;
          }
          var X = '';
          if (z !== 0) {
            var V = '',
              J = 'border-color: ' + W + ';';
            if (R.indexOf('bottom') !== -1) {
              V = 'margin-top: -' + Math.round(z) + 'px;';
            } else if (R.indexOf('top') !== -1) {
              V = 'margin-bottom: -' + Math.round(z) + 'px;';
            } else if (R.indexOf('left') !== -1) {
              V = 'margin-right: -' + Math.round(z) + 'px;';
            } else if (R.indexOf('right') !== -1) {
              V = 'margin-left: -' + Math.round(z) + 'px;';
            }
            X =
              '<span class="tooltipster-arrow-border" style="' +
              V +
              ' ' +
              J +
              ';"></span>';
          }
          n.$tooltip.find('.tooltipster-arrow').remove();
          var K =
            '<div class="' +
            R +
            ' tooltipster-arrow" style="' +
            r +
            '">' +
            X +
            '<span style="border-color:' +
            U +
            ';"></span></div>';
          n.$tooltip.append(K);
        }
        n.$tooltip.css({
          top: Math.round(M) + 'px',
          left: Math.round(A) + 'px',
        });
      }
      return n;
    },
    enable: function() {
      this.enabled = true;
      return this;
    },
    disable: function() {
      this.hide();
      this.enabled = false;
      return this;
    },
    destroy: function() {
      var t = this;
      t.hide();
      if (t.$el[0] !== t.$elProxy[0]) {
        t.$elProxy.remove();
      }
      t.$el.removeData(t.namespace).off('.' + t.namespace);
      var n = t.$el.data('tooltipster-ns');
      if (n.length === 1) {
        var r = null;
        if (t.options.restoration === 'previous') {
          r = t.$el.data('tooltipster-initialTitle');
        } else if (t.options.restoration === 'current') {
          r =
            typeof t.Content === 'string'
              ? t.Content
              : e('<div></div>')
                  .append(t.Content)
                  .html();
        }
        if (r) {
          t.$el.attr('title', r);
        }
        t.$el
          .removeClass('tooltipstered')
          .removeData('tooltipster-ns')
          .removeData('tooltipster-initialTitle');
      } else {
        n = e.grep(n, function(e, n) {
          return e !== t.namespace;
        });
        t.$el.data('tooltipster-ns', n);
      }
      return t;
    },
    elementIcon: function() {
      return this.$el[0] !== this.$elProxy[0] ? this.$elProxy[0] : undefined;
    },
    elementTooltip: function() {
      return this.$tooltip ? this.$tooltip[0] : undefined;
    },
    option: function(e, t) {
      if (typeof t == 'undefined') return this.options[e];
      else {
        this.options[e] = t;
        return this;
      }
    },
    status: function() {
      return this.Status;
    },
  };
  e.fn[r] = function() {
    var t = arguments;
    if (this.length === 0) {
      if (typeof t[0] === 'string') {
        var n = true;
        switch (t[0]) {
          case 'setDefaults':
            e.extend(i, t[1]);
            break;
          default:
            n = false;
            break;
        }
        if (n) return true;
        else return this;
      } else {
        return this;
      }
    } else {
      if (typeof t[0] === 'string') {
        var r = '#*$~&';
        this.each(function() {
          var n = e(this).data('tooltipster-ns'),
            i = n ? e(this).data(n[0]) : null;
          if (i) {
            if (typeof i[t[0]] === 'function') {
              var s = i[t[0]](t[1], t[2]);
            } else {
              throw new Error('Unknown method .tooltipster("' + t[0] + '")');
            }
            if (s !== i) {
              r = s;
              return false;
            }
          } else {
            throw new Error(
              'You called Tooltipster\'s "' +
                t[0] +
                '" method on an uninitialized element'
            );
          }
        });
        return r !== '#*$~&' ? r : this;
      } else {
        var o = [],
          u = t[0] && typeof t[0].multiple !== 'undefined',
          a = (u && t[0].multiple) || (!u && i.multiple),
          f = t[0] && typeof t[0].debug !== 'undefined',
          l = (f && t[0].debug) || (!f && i.debug);
        this.each(function() {
          var n = false,
            r = e(this).data('tooltipster-ns'),
            i = null;
          if (!r) {
            n = true;
          } else if (a) {
            n = true;
          } else if (l) {
            console.log(
              'Tooltipster: one or more tooltips are already attached to this element: ignoring. Use the "multiple" option to attach more tooltips.'
            );
          }
          if (n) {
            i = new s(this, t[0]);
            if (!r) r = [];
            r.push(i.namespace);
            e(this).data('tooltipster-ns', r);
            e(this).data(i.namespace, i);
          }
          o.push(i);
        });
        if (a) return o;
        else return this;
      }
    }
  };
  var u = !!('ontouchstart' in t);
  var a = false;
  e('body').one('mousemove', function() {
    a = true;
  });
})(jQuery, window, document);
