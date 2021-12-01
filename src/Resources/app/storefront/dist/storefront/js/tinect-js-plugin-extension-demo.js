(window.webpackJsonp = window.webpackJsonp || []).push([["tinect-js-plugin-extension-demo"], {
    "69tF": function (e, t, o) {
        "use strict";
        o.r(t);
        var n = o("IGih"), i = o("prSB");

        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function u(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function c(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function s(e, t) {
            return !t || "object" !== r(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function a(e, t, o) {
            return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, o) {
                var n = function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e));) ;
                    return e
                }(e, t);
                if (n) {
                    var i = Object.getOwnPropertyDescriptor(n, t);
                    return i.get ? i.get.call(o) : i.value
                }
            })(e, t, o || e)
        }

        function f(e) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function l(e, t) {
            return (l = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var p = function (e) {
            function t() {
                return u(this, t), s(this, f(t).apply(this, arguments))
            }

            var o, n, r;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && l(e, t)
            }(t, e), o = t, (n = [{
                key: "init", value: function () {
                    i.a.setItem(this.options.cookieName, ""), a(f(t.prototype), "init", this).call(this)
                }
            }]) && c(o.prototype, n), r && c(o, r), t
        }(n.a);
        window.PluginManager.override("CookiePermission", p, "[data-cookie-permission]")
    }, IGih: function (e, t, o) {
        "use strict";
        o.d(t, "a", (function () {
            return d
        }));
        var n = o("FGIj"), i = o("prSB"), r = o("nhVY"), u = o("41MI");

        function c(e) {
            return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function a(e, t) {
            for (var o = 0; o < t.length; o++) {
                var n = t[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function f(e, t) {
            return !t || "object" !== c(t) && "function" != typeof t ? function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }

        function l(e) {
            return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            })(e)
        }

        function p(e, t) {
            return (p = Object.setPrototypeOf || function (e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        var y, h, b, d = function (e) {
            function t() {
                return s(this, t), f(this, l(t).apply(this, arguments))
            }

            var o, n, c;
            return function (e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }(t, e), o = t, (n = [{
                key: "init", value: function () {
                    this._button = this.el.querySelector(this.options.buttonSelector), this._isPreferenceSet() || (this._setBodyPadding(), this._registerEvents())
                }
            }, {
                key: "_isPreferenceSet", value: function () {
                    return !!i.a.getItem(this.options.cookieName) || (this._showCookieBar(), !1)
                }
            }, {
                key: "_showCookieBar", value: function () {
                    this.el.style.display = "block", this.$emitter.publish("showCookieBar")
                }
            }, {
                key: "_hideCookieBar", value: function () {
                    this.el.style.display = "none", this.$emitter.publish("hideCookieBar")
                }
            }, {
                key: "_registerEvents", value: function () {
                    if (this._button) {
                        var e = u.a.isTouchDevice() ? "touchstart" : "click";
                        this._button.addEventListener(e, this._handleDenyButton.bind(this))
                    }
                    window.addEventListener("resize", r.a.debounce(this._setBodyPadding.bind(this), this.options.resizeDebounceTime), {
                        capture: !0,
                        passive: !0
                    })
                }
            }, {
                key: "_handleDenyButton", value: function () {
                    var e = this.options, t = e.cookieExpiration, o = e.cookieName;
                    this._hideCookieBar(), this._removeBodyPadding(), i.a.setItem(o, "1", t), this.$emitter.publish("onClickDenyButton")
                }
            }, {
                key: "_calculateCookieBarHeight", value: function () {
                    return this.el.offsetHeight
                }
            }, {
                key: "_setBodyPadding", value: function () {
                    document.body.style.paddingBottom = this._calculateCookieBarHeight() + "px", this.$emitter.publish("setBodyPadding")
                }
            }, {
                key: "_removeBodyPadding", value: function () {
                    document.body.style.paddingBottom = "0", this.$emitter.publish("removeBodyPadding")
                }
            }]) && a(o.prototype, n), c && a(o, c), t
        }(n.a);
        b = {
            cookieExpiration: 30,
            cookieName: "cookie-preference",
            buttonSelector: ".js-cookie-permission-button",
            resizeDebounceTime: 200
        }, (h = "options") in (y = d) ? Object.defineProperty(y, h, {
            value: b,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : y[h] = b
    }
}, [["69tF", "runtime", "vendor-node", "vendor-shared"]]]);