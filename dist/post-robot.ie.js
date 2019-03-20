!function(root, factory) {
    "object" == typeof exports && "object" == typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define("postRobot", [], factory) : "object" == typeof exports ? exports.postRobot = factory() : root.postRobot = factory();
}("undefined" != typeof self ? self : this, function() {
    return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) return installedModules[moduleId].exports;
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: !1,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = !0;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports, name, getter) {
            __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
                configurable: !1,
                enumerable: !0,
                get: getter
            });
        };
        __webpack_require__.n = function(module) {
            var getter = module && module.__esModule ? function() {
                return module.default;
            } : function() {
                return module;
            };
            __webpack_require__.d(getter, "a", getter);
            return getter;
        };
        __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = "./src/index.js");
    }({
        "./node_modules/belter/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            function getUserAgent() {
                return window.navigator.mockUserAgent || window.navigator.userAgent;
            }
            function isDevice() {
                return !!getUserAgent().match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i);
            }
            function isWebView() {
                var userAgent = getUserAgent();
                return /(iPhone|iPod|iPad|Macintosh).*AppleWebKit(?!.*Safari)/i.test(userAgent) || /\bwv\b/.test(userAgent) || /Android.*Version\/(\d)\.(\d)/i.test(userAgent);
            }
            function isStandAlone() {
                return !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
            }
            function isFacebookWebView() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return -1 !== ua.indexOf("FBAN") || -1 !== ua.indexOf("FBAV");
            }
            function isFirefoxIOS() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return /FxiOS/i.test(ua);
            }
            function isEdgeIOS() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return /EdgiOS/i.test(ua);
            }
            function isOperaMini() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent()).indexOf("Opera Mini") > -1;
            }
            function isAndroid() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return /Android/.test(ua);
            }
            function isIos() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return /iPhone|iPod|iPad/.test(ua);
            }
            function isGoogleSearchApp() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return /\bGSA\b/.test(ua);
            }
            function isQQBrowser() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return /QQBrowser/.test(ua);
            }
            function isIosWebview() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return !!isIos(ua) && (!!isGoogleSearchApp(ua) || /.+AppleWebKit(?!.*Safari)/.test(ua));
            }
            function isAndroidWebview() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return !!isAndroid(ua) && /Version\/[\d.]+/.test(ua) && !isOperaMini(ua);
            }
            function device_isIE() {
                return !!window.document.documentMode || Boolean(window.navigator && window.navigator.userAgent && /Edge|MSIE|rv:11/i.test(window.navigator.userAgent));
            }
            function isIECompHeader() {
                var mHttp = window.document.querySelector('meta[http-equiv="X-UA-Compatible"]'), mContent = window.document.querySelector('meta[content="IE=edge"]');
                return !(!mHttp || !mContent);
            }
            function isElectron() {
                return !("undefined" == typeof process || !process.versions || !process.versions.electron);
            }
            function isIEIntranet() {
                if (window.document.documentMode) try {
                    var status = window.status;
                    window.status = "testIntranetMode";
                    if ("testIntranetMode" === window.status) {
                        window.status = status;
                        return !0;
                    }
                    return !1;
                } catch (err) {
                    return !1;
                }
                return !1;
            }
            function isMacOsCna() {
                var userAgent = getUserAgent();
                return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(userAgent);
            }
            function supportsPopups() {
                var ua = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : getUserAgent();
                return !(isIosWebview(ua) || isAndroidWebview(ua) || isOperaMini(ua) || isFirefoxIOS(ua) || isEdgeIOS(ua) || isFacebookWebView(ua) || isQQBrowser(ua) || isElectron() || isMacOsCna() || isStandAlone());
            }
            var src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), cross_domain_utils_src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), cross_domain_safe_weakmap_src = __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js"), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function base64encode(str) {
                if ("function" == typeof btoa) return btoa(str);
                if ("undefined" != typeof Buffer) return Buffer.from(str, "utf8").toString("base64");
                throw new Error("Can not find window.btoa or Buffer");
            }
            function base64decode(str) {
                if ("undefined" != typeof window && "function" == typeof window.atob) return window.atob(str);
                if ("undefined" != typeof Buffer) return Buffer.from(str, "base64").toString("utf8");
                throw new Error("Can not find window.atob or Buffer");
            }
            function uniqueID() {
                var chars = "0123456789abcdef";
                return "xxxxxxxxxx".replace(/./g, function() {
                    return chars.charAt(Math.floor(Math.random() * chars.length));
                }) + "_" + base64encode(new Date().toISOString().slice(11, 19).replace("T", ".")).replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
            }
            function getGlobal() {
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw new Error("No global found");
            }
            var objectIDs = void 0;
            function getObjectID(obj) {
                objectIDs = objectIDs || new cross_domain_safe_weakmap_src.a();
                if (null === obj || void 0 === obj || "object" !== (void 0 === obj ? "undefined" : _typeof(obj)) && "function" != typeof obj) throw new Error("Invalid object");
                var uid = objectIDs.get(obj);
                if (!uid) {
                    uid = (void 0 === obj ? "undefined" : _typeof(obj)) + ":" + uniqueID();
                    objectIDs.set(obj, uid);
                }
                return uid;
            }
            function serializeArgs(args) {
                try {
                    return JSON.stringify(Array.prototype.slice.call(args), function(subkey, val) {
                        return "function" == typeof val ? "memoize[" + getObjectID(val) + "]" : val;
                    });
                } catch (err) {
                    throw new Error("Arguments not serializable -- can not be used to memoize");
                }
            }
            function memoize(method) {
                var _this = this, options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, cacheMap = new cross_domain_safe_weakmap_src.a();
                function memoizedFunction() {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                    var cache = cacheMap.getOrSet(options.thisNamespace ? this : method, function() {
                        return {};
                    }), key = serializeArgs(args), cacheTime = options.time;
                    cache[key] && cacheTime && Date.now() - cache[key].time < cacheTime && delete cache[key];
                    if (cache[key]) return cache[key].value;
                    var time = Date.now(), value = method.apply(this, arguments);
                    cache[key] = {
                        time: time,
                        value: value
                    };
                    return cache[key].value;
                }
                memoizedFunction.reset = function() {
                    cacheMap.delete(options.thisNamespace ? _this : method);
                };
                options.name && (memoizedFunction.displayName = options.name + ":memoized");
                return memoizedFunction;
            }
            function memoizePromise(method) {
                var cache = {};
                function memoizedPromiseFunction() {
                    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                    var key = serializeArgs(args);
                    if (cache.hasOwnProperty(key)) return cache[key];
                    cache[key] = method.apply(this, arguments).finally(function() {
                        delete cache[key];
                    });
                    return cache[key];
                }
                memoizedPromiseFunction.reset = function() {
                    cache = {};
                };
                return memoizedPromiseFunction;
            }
            function promisify(method) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                function promisifiedFunction() {
                    return src.a.try(method, this, arguments);
                }
                options.name && (promisifiedFunction.displayName = options.name + ":promisified");
                return promisifiedFunction;
            }
            function inlineMemoize(method, logic) {
                var args = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [], cache = method.__inline_memoize_cache__ = method.__inline_memoize_cache__ || {}, key = serializeArgs(args);
                return cache.hasOwnProperty(key) ? cache[key] : cache[key] = logic.apply(void 0, args);
            }
            function noop() {}
            function once(method) {
                var called = !1;
                return function() {
                    if (!called) {
                        called = !0;
                        return method.apply(this, arguments);
                    }
                };
            }
            function hashStr(str) {
                for (var hash = 0, i = 0; i < str.length; i++) hash += str[i].charCodeAt(0) * Math.pow(i % 10 + 1, 5);
                return Math.floor(Math.pow(Math.sqrt(hash), 5));
            }
            function strHashStr(str) {
                for (var hash = "", i = 0; i < str.length; i++) {
                    var total = str[i].charCodeAt(0) * i;
                    str[i + 1] && (total += str[i + 1].charCodeAt(0) * (i - 1));
                    hash += String.fromCharCode(97 + Math.abs(total) % 26);
                }
                return hash;
            }
            function match(str, pattern) {
                var regmatch = str.match(pattern);
                if (regmatch) return regmatch[1];
            }
            function awaitKey(obj, key) {
                return new src.a(function(resolve) {
                    var value = obj[key];
                    if (value) return resolve(value);
                    delete obj[key];
                    Object.defineProperty(obj, key, {
                        configurable: !0,
                        set: function(item) {
                            (value = item) && resolve(value);
                        },
                        get: function() {
                            return value;
                        }
                    });
                });
            }
            function stringifyError(err) {
                var level = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                if (level >= 3) return "stringifyError stack overflow";
                try {
                    if (!err) return "<unknown error: " + Object.prototype.toString.call(err) + ">";
                    if ("string" == typeof err) return err;
                    if (err instanceof Error) {
                        var stack = err && err.stack, message = err && err.message;
                        if (stack && message) return -1 !== stack.indexOf(message) ? stack : message + "\n" + stack;
                        if (stack) return stack;
                        if (message) return message;
                    }
                    return "function" == typeof err.toString ? err.toString() : Object.prototype.toString.call(err);
                } catch (newErr) {
                    return "Error while stringifying error: " + stringifyError(newErr, level + 1);
                }
            }
            function stringifyErrorMessage(err) {
                var defaultMessage = "<unknown error: " + Object.prototype.toString.call(err) + ">";
                return err ? err instanceof Error ? err.message || defaultMessage : "string" == typeof err.message && err.message || defaultMessage : defaultMessage;
            }
            function stringify(item) {
                return "string" == typeof item ? item : item && "function" == typeof item.toString ? item.toString() : Object.prototype.toString.call(item);
            }
            function domainMatches(hostname, domain) {
                var index = (hostname = hostname.split("://")[1]).indexOf(domain);
                return -1 !== index && hostname.slice(index) === domain;
            }
            function patchMethod(obj, name, handler) {
                var original = obj[name];
                obj[name] = function() {
                    var _this2 = this, _arguments = arguments;
                    return handler({
                        context: this,
                        args: Array.prototype.slice.call(arguments),
                        original: original,
                        callOriginal: function() {
                            return original.apply(_this2, _arguments);
                        }
                    });
                };
            }
            function extend(obj, source) {
                if (!source) return obj;
                if (Object.assign) return Object.assign(obj, source);
                for (var key in source) source.hasOwnProperty(key) && (obj[key] = source[key]);
                return obj;
            }
            function values(obj) {
                var result = [];
                for (var key in obj) obj.hasOwnProperty(key) && result.push(obj[key]);
                return result;
            }
            function perc(pixels, percentage) {
                return Math.round(pixels * percentage / 100);
            }
            function min() {
                return Math.min.apply(Math, arguments);
            }
            function max() {
                return Math.max.apply(Math, arguments);
            }
            function regexMap(str, regexp, handler) {
                var results = [];
                str.replace(regexp, function(item) {
                    results.push(handler ? handler.apply(null, arguments) : item);
                });
                return results;
            }
            function svgToBase64(svg) {
                return "data:image/svg+xml;base64," + base64encode(svg);
            }
            function objFilter(obj) {
                var filter = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Boolean, result = {};
                for (var key in obj) obj.hasOwnProperty(key) && filter(obj[key], key) && (result[key] = obj[key]);
                return result;
            }
            function identity(item) {
                return item;
            }
            function regexTokenize(text, regexp) {
                var result = [];
                text.replace(regexp, function(token) {
                    result.push(token);
                    return "";
                });
                return result;
            }
            function promiseDebounce(method) {
                var delay = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50, promise = void 0, timeout = void 0;
                return function() {
                    timeout && clearTimeout(timeout);
                    var localPromise = promise = promise || new src.a();
                    timeout = setTimeout(function() {
                        promise = null;
                        timeout = null;
                        src.a.try(method).then(function(result) {
                            localPromise.resolve(result);
                        }, function(err) {
                            localPromise.reject(err);
                        });
                    }, delay);
                    return localPromise;
                };
            }
            function safeInterval(method, time) {
                var timeout = void 0;
                !function loop() {
                    timeout = setTimeout(function() {
                        method();
                        loop();
                    }, time);
                }();
                return {
                    cancel: function() {
                        clearTimeout(timeout);
                    }
                };
            }
            function isInteger(str) {
                return Boolean(str.match(/^[0-9]+$/));
            }
            function isFloat(str) {
                return Boolean(str.match(/^[0-9]+\.[0-9]+$/));
            }
            function serializePrimitive(value) {
                return value.toString();
            }
            function deserializePrimitive(value) {
                return "true" === value || "false" !== value && (isInteger(value) ? parseInt(value, 10) : isFloat(value) ? parseFloat(value) : value);
            }
            function dotify(obj) {
                var prefix = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", newobj = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                prefix = prefix ? prefix + "." : prefix;
                for (var key in obj) obj.hasOwnProperty(key) && void 0 !== obj[key] && null !== obj[key] && "function" != typeof obj[key] && (obj[key] && Array.isArray(obj[key]) && obj[key].length && obj[key].every(function(val) {
                    return "object" !== (void 0 === val ? "undefined" : _typeof(val));
                }) ? newobj["" + prefix + key + "[]"] = obj[key].join(",") : obj[key] && "object" === _typeof(obj[key]) ? newobj = dotify(obj[key], "" + prefix + key, newobj) : newobj["" + prefix + key] = serializePrimitive(obj[key]));
                return newobj;
            }
            function undotify(obj) {
                var result = {};
                for (var key in obj) if (obj.hasOwnProperty(key) && "string" == typeof obj[key]) {
                    var value = obj[key];
                    if (key.match(/^.+\[\]$/)) {
                        key = key.slice(0, key.length - 2);
                        value = value.split(",").map(deserializePrimitive);
                    } else value = deserializePrimitive(value);
                    for (var keyResult = result, parts = key.split("."), i = 0; i < parts.length; i++) {
                        var part = parts[i], isLast = i + 1 === parts.length, isIndex = !isLast && isInteger(parts[i + 1]);
                        isLast ? keyResult[part] = value : keyResult = keyResult[part] = keyResult[part] || (isIndex ? [] : {});
                    }
                }
                return result;
            }
            function eventEmitter() {
                var triggered = {}, handlers = {};
                return {
                    on: function(eventName, handler) {
                        var handlerList = handlers[eventName] = handlers[eventName] || [];
                        handlerList.push(handler);
                        var cancelled = !1;
                        return {
                            cancel: function() {
                                if (!cancelled) {
                                    cancelled = !0;
                                    handlerList.splice(handlerList.indexOf(handler), 1);
                                }
                            }
                        };
                    },
                    once: function(eventName, handler) {
                        var listener = this.on(eventName, function() {
                            listener.cancel();
                            handler();
                        });
                        return listener;
                    },
                    trigger: function(eventName) {
                        for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
                        var handlerList = handlers[eventName], promises = [];
                        if (handlerList) for (var _loop = function(_i2, _length2) {
                            var handler = handlerList[_i2];
                            promises.push(src.a.try(function() {
                                return handler.apply(void 0, args);
                            }));
                        }, _i2 = 0, _length2 = null == handlerList ? 0 : handlerList.length; _i2 < _length2; _i2++) _loop(_i2);
                        return src.a.all(promises).then(noop);
                    },
                    triggerOnce: function(eventName) {
                        if (triggered[eventName]) return src.a.resolve();
                        triggered[eventName] = !0;
                        for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) args[_key4 - 1] = arguments[_key4];
                        return this.trigger.apply(this, [ eventName ].concat(args));
                    }
                };
            }
            function camelToDasherize(string) {
                return string.replace(/([A-Z])/g, function(g) {
                    return "-" + g.toLowerCase();
                });
            }
            function dasherizeToCamel(string) {
                return string.replace(/-([a-z])/g, function(g) {
                    return g[1].toUpperCase();
                });
            }
            function capitalizeFirstLetter(string) {
                return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
            }
            function get(item, path, def) {
                if (!path) return def;
                for (var pathParts = path.split("."), i = 0; i < pathParts.length; i++) {
                    if ("object" !== (void 0 === item ? "undefined" : _typeof(item)) || null === item) return def;
                    item = item[pathParts[i]];
                }
                return void 0 === item ? def : item;
            }
            function safeTimeout(method, time) {
                var interval = safeInterval(function() {
                    if ((time -= 100) <= 0) {
                        interval.cancel();
                        method();
                    }
                }, 100);
            }
            function defineLazyProp(obj, key, getter) {
                if (Array.isArray(obj)) {
                    if ("number" != typeof key) throw new TypeError("Array key must be number");
                } else if ("object" === (void 0 === obj ? "undefined" : _typeof(obj)) && null !== obj && "string" != typeof key) throw new TypeError("Object key must be string");
                Object.defineProperty(obj, key, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        delete obj[key];
                        var value = getter();
                        obj[key] = value;
                        return value;
                    },
                    set: function(value) {
                        delete obj[key];
                        obj[key] = value;
                    }
                });
            }
            function isObject(item) {
                return "object" === (void 0 === item ? "undefined" : _typeof(item)) && null !== item;
            }
            function isObjectObject(obj) {
                return isObject(obj) && "[object Object]" === Object.prototype.toString.call(obj);
            }
            function isPlainObject(obj) {
                if (!isObjectObject(obj)) return !1;
                var constructor = obj.constructor;
                if ("function" != typeof constructor) return !1;
                var prototype = constructor.prototype;
                return !!isObjectObject(prototype) && !!prototype.hasOwnProperty("isPrototypeOf");
            }
            function replaceObject(item, replacer) {
                var fullKey = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if (Array.isArray(item)) {
                    for (var _length3 = item.length, result = [], _loop2 = function(i) {
                        defineLazyProp(result, i, function() {
                            var itemKey = fullKey ? fullKey + "." + i : "" + i, el = item[i], child = replacer(el, i, itemKey);
                            (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                            return child;
                        });
                    }, i = 0; i < _length3; i++) _loop2(i);
                    return result;
                }
                if (isPlainObject(item)) {
                    var _result = {}, _loop3 = function(key) {
                        if (!item.hasOwnProperty(key)) return "continue";
                        defineLazyProp(_result, key, function() {
                            var itemKey = fullKey ? fullKey + "." + key : "" + key, el = item[key], child = replacer(el, key, itemKey);
                            (isPlainObject(child) || Array.isArray(child)) && (child = replaceObject(child, replacer, itemKey));
                            return child;
                        });
                    };
                    for (var key in item) _loop3(key);
                    return _result;
                }
                throw new Error("Pass an object or array");
            }
            function copyProp(source, target, name, def) {
                if (source.hasOwnProperty(name)) {
                    var descriptor = Object.getOwnPropertyDescriptor(source, name);
                    Object.defineProperty(target, name, descriptor);
                } else target[name] = def;
            }
            function regex(pattern, string) {
                var start = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                "string" == typeof pattern && (pattern = new RegExp(pattern));
                var result = string.slice(start).match(pattern);
                if (result) {
                    var index = result.index, regmatch = result[0];
                    return {
                        text: regmatch,
                        groups: result.slice(1),
                        start: start + index,
                        end: start + index + regmatch.length,
                        length: regmatch.length,
                        replace: function(text) {
                            return regmatch ? "" + regmatch.slice(0, start + index) + text + regmatch.slice(index + regmatch.length) : "";
                        }
                    };
                }
            }
            function regexAll(pattern, string) {
                for (var matches = [], start = 0; ;) {
                    var regmatch = regex(pattern, string, start);
                    if (!regmatch) break;
                    matches.push(regmatch);
                    start = match.end;
                }
                return matches;
            }
            function isDefined(value) {
                return null !== value && void 0 !== value;
            }
            function cycle(method) {
                return src.a.try(method).then(function() {
                    return cycle(method);
                });
            }
            function debounce(method) {
                var time = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100, timeout = void 0;
                return function() {
                    var _this3 = this, _arguments2 = arguments;
                    clearTimeout(timeout);
                    timeout = setTimeout(function() {
                        return method.apply(_this3, _arguments2);
                    }, time);
                };
            }
            function isRegex(item) {
                return "[object RegExp]" === Object.prototype.toString.call(item);
            }
            var util_weakMapMemoize = function(method) {
                var weakmap = new cross_domain_safe_weakmap_src.a();
                return function(arg) {
                    var _this4 = this;
                    return weakmap.getOrSet(arg, function() {
                        return method.call(_this4, arg);
                    });
                };
            }, util_weakMapMemoizePromise = function(method) {
                var weakmap = new cross_domain_safe_weakmap_src.a();
                return function(arg) {
                    var _this5 = this;
                    return weakmap.getOrSet(arg, function() {
                        return method.call(_this5, arg).finally(function() {
                            weakmap.delete(arg);
                        });
                    });
                };
            };
            function getOrSet(obj, key, getter) {
                if (obj.hasOwnProperty(key)) return obj[key];
                var val = getter();
                obj[key] = val;
                return val;
            }
            function cleanup(obj) {
                var tasks = [], cleaned = !1;
                return {
                    set: function(name, item) {
                        if (!cleaned) {
                            obj[name] = item;
                            this.register(function() {
                                delete obj[name];
                            });
                        }
                        return item;
                    },
                    register: function(method) {
                        cleaned ? method() : tasks.push(once(method));
                    },
                    all: function() {
                        var results = [];
                        cleaned = !0;
                        for (;tasks.length; ) {
                            var task = tasks.pop();
                            results.push(task());
                        }
                        return src.a.all(results).then(noop);
                    }
                };
            }
            function tryCatch(fn) {
                var result = void 0, error = void 0;
                try {
                    result = fn();
                } catch (err) {
                    error = err;
                }
                return {
                    result: result,
                    error: error
                };
            }
            function removeFromArray(arr, item) {
                var index = arr.indexOf(item);
                -1 !== index && arr.splice(index, 1);
            }
            function assertExists(name, thing) {
                if (null === thing || void 0 === thing) throw new Error("Expected " + name + " to be present");
                return thing;
            }
            var KEY_CODES = {
                ENTER: 13
            }, dom__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            };
            function isDocumentReady() {
                return Boolean(document.body) && "complete" === document.readyState;
            }
            function urlEncode(str) {
                return str.replace(/\?/g, "%3F").replace(/&/g, "%26").replace(/#/g, "%23").replace(/\+/g, "%2B");
            }
            function waitForWindowReady() {
                return inlineMemoize(waitForWindowReady, function() {
                    return new src.a(function(resolve) {
                        isDocumentReady() && resolve();
                        window.addEventListener("load", function() {
                            return resolve();
                        });
                    });
                });
            }
            function waitForDocumentReady() {
                return inlineMemoize(waitForDocumentReady, function() {
                    return new src.a(function(resolve) {
                        if (isDocumentReady()) return resolve();
                        var interval = setInterval(function() {
                            if (isDocumentReady()) {
                                clearInterval(interval);
                                return resolve();
                            }
                        }, 10);
                    });
                });
            }
            function waitForDocumentBody() {
                return waitForDocumentReady().then(function() {
                    if (document.body) return document.body;
                    throw new Error("Document ready but document.body not present");
                });
            }
            function parseQuery(queryString) {
                return inlineMemoize(parseQuery, function() {
                    var params = {};
                    if (!queryString) return params;
                    if (-1 === queryString.indexOf("=")) return params;
                    for (var _i2 = 0, _queryString$split2 = queryString.split("&"), _length2 = null == _queryString$split2 ? 0 : _queryString$split2.length; _i2 < _length2; _i2++) {
                        var pair = _queryString$split2[_i2];
                        (pair = pair.split("="))[0] && pair[1] && (params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]));
                    }
                    return params;
                }, [ queryString ]);
            }
            function getQueryParam(name) {
                return parseQuery(window.location.search.slice(1))[name];
            }
            function urlWillRedirectPage(url) {
                return -1 === url.indexOf("#") || 0 !== url.indexOf("#") && url.split("#")[0] !== window.location.href.split("#")[0];
            }
            function formatQuery() {
                var obj = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Object.keys(obj).filter(function(key) {
                    return "string" == typeof obj[key];
                }).map(function(key) {
                    return urlEncode(key) + "=" + urlEncode(obj[key]);
                }).join("&");
            }
            function extendQuery(originalQuery) {
                var props = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return props && Object.keys(props).length ? formatQuery(_extends({}, parseQuery(originalQuery), props)) : originalQuery;
            }
            function extendUrl(url) {
                var originalHash, options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, query = options.query || {}, hash = options.hash || {}, originalUrl = void 0, _url$split = url.split("#");
                originalUrl = _url$split[0];
                originalHash = _url$split[1];
                var _originalUrl$split = originalUrl.split("?");
                originalUrl = _originalUrl$split[0];
                var queryString = extendQuery(_originalUrl$split[1], query), hashString = extendQuery(originalHash, hash);
                queryString && (originalUrl = originalUrl + "?" + queryString);
                hashString && (originalUrl = originalUrl + "#" + hashString);
                return originalUrl;
            }
            function redirect(url) {
                var win = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                return new src.a(function(resolve) {
                    win.location = url;
                    urlWillRedirectPage(url) || resolve();
                });
            }
            function hasMetaViewPort() {
                var meta = document.querySelector("meta[name=viewport]");
                return !(isDevice() && window.screen.width < 660 && !meta);
            }
            function isElementVisible(el) {
                return Boolean(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
            }
            function enablePerformance() {
                return inlineMemoize(enablePerformance, function() {
                    return Boolean(window.performance && performance.now && performance.timing && performance.timing.connectEnd && performance.timing.navigationStart && Math.abs(performance.now() - Date.now()) > 1e3 && performance.now() - (performance.timing.connectEnd - performance.timing.navigationStart) > 0);
                });
            }
            function getPageRenderTime() {
                return waitForDocumentReady().then(function() {
                    if (enablePerformance()) {
                        var timing = window.performance.timing;
                        return timing.connectEnd && timing.domInteractive ? timing.domInteractive - timing.connectEnd : void 0;
                    }
                });
            }
            function htmlEncode() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/\//g, "&#x2F;");
            }
            function isBrowser() {
                return "undefined" != typeof window;
            }
            function querySelectorAll(selector) {
                var doc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.document;
                return Array.prototype.slice.call(doc.querySelectorAll(selector));
            }
            function onClick(element, handler) {
                element.addEventListener("touchstart", noop);
                element.addEventListener("click", handler);
                element.addEventListener("keypress", function(event) {
                    if (event.keyCode === KEY_CODES.ENTER) return handler(event);
                });
            }
            function getScript(_ref) {
                var _ref$host = _ref.host, host = void 0 === _ref$host ? window.location.host : _ref$host, path = _ref.path;
                return inlineMemoize(getScript, function() {
                    for (var url = "" + host + path, scripts = Array.prototype.slice.call(document.getElementsByTagName("script")), _i4 = 0, _length4 = null == scripts ? 0 : scripts.length; _i4 < _length4; _i4++) {
                        var script = scripts[_i4];
                        if (script.src && script.src.replace(/^https?:\/\//, "").split("?")[0] === url) return script;
                    }
                }, [ path ]);
            }
            function isLocalStorageEnabled() {
                return inlineMemoize(isLocalStorageEnabled, function() {
                    try {
                        if ("undefined" == typeof window) return !1;
                        if (window.localStorage) {
                            var value = Math.random().toString();
                            window.localStorage.setItem("__test__localStorage__", value);
                            var result = window.localStorage.getItem("__test__localStorage__");
                            window.localStorage.removeItem("__test__localStorage__");
                            if (value === result) return !0;
                        }
                    } catch (err) {}
                    return !1;
                });
            }
            function getBrowserLocales() {
                var nav = window.navigator, locales = nav.languages ? Array.prototype.slice.apply(nav.languages) : [];
                nav.language && locales.push(nav.language);
                nav.userLanguage && locales.push(nav.userLanguage);
                return locales.map(function(locale) {
                    if (locale && locale.match(/^[a-z]{2}[-_][A-Z]{2}$/)) {
                        var _locale$split = locale.split(/[-_]/), _lang = _locale$split[0];
                        return {
                            country: _locale$split[1],
                            lang: _lang
                        };
                    }
                    return locale && locale.match(/^[a-z]{2}$/) ? {
                        lang: locale
                    } : null;
                }).filter(Boolean);
            }
            function appendChild(container, child) {
                container.appendChild(child);
            }
            function isElement(element) {
                return element instanceof window.Element || null !== element && "object" === (void 0 === element ? "undefined" : dom__typeof(element)) && 1 === element.nodeType && "object" === dom__typeof(element.style) && "object" === dom__typeof(element.ownerDocument);
            }
            function getElementSafe(id) {
                var doc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                return isElement(id) ? id : "string" == typeof id ? doc.querySelector(id) : void 0;
            }
            function getElement(id) {
                var element = getElementSafe(id, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document);
                if (element) return element;
                throw new Error("Can not find element: " + stringify(id));
            }
            function elementReady(id) {
                return new src.a(function(resolve, reject) {
                    var name = stringify(id), el = getElementSafe(id);
                    if (el) return resolve(el);
                    if (isDocumentReady()) return reject(new Error("Document is ready and element " + name + " does not exist"));
                    var interval = setInterval(function() {
                        if (el = getElementSafe(id)) {
                            clearInterval(interval);
                            return resolve(el);
                        }
                        if (isDocumentReady()) {
                            clearInterval(interval);
                            return reject(new Error("Document is ready and element " + name + " does not exist"));
                        }
                    }, 10);
                });
            }
            function PopupOpenError(message) {
                this.message = message;
            }
            PopupOpenError.prototype = Object.create(Error.prototype);
            function popup(url, options) {
                var _options = options = options || {}, width = _options.width, height = _options.height, top = 0, left = 0;
                width && (window.outerWidth ? left = Math.round((window.outerWidth - width) / 2) + window.screenX : window.screen.width && (left = Math.round((window.screen.width - width) / 2)));
                height && (window.outerHeight ? top = Math.round((window.outerHeight - height) / 2) + window.screenY : window.screen.height && (top = Math.round((window.screen.height - height) / 2)));
                var name = (options = _extends({
                    top: top,
                    left: left,
                    width: width,
                    height: height,
                    status: 1,
                    toolbar: 0,
                    menubar: 0,
                    resizable: 1,
                    scrollbars: 1
                }, options)).name || "";
                delete options.name;
                var params = Object.keys(options).map(function(key) {
                    if (options[key]) return key + "=" + stringify(options[key]);
                }).filter(Boolean).join(","), win = void 0;
                try {
                    win = window.open(url, name, params, !0);
                } catch (err) {
                    throw new PopupOpenError("Can not open popup window - " + (err.stack || err.message));
                }
                if (Object(cross_domain_utils_src.p)(win)) {
                    var err;
                    throw new PopupOpenError("Can not open popup window - blocked");
                }
                window.addEventListener("unload", function() {
                    return win.close();
                });
                return win;
            }
            function writeToWindow(win, html) {
                try {
                    win.document.open();
                    win.document.write(html);
                    win.document.close();
                } catch (err) {
                    try {
                        win.location = "javascript: document.open(); document.write(" + JSON.stringify(html) + "); document.close();";
                    } catch (err2) {}
                }
            }
            function writeElementToWindow(win, el) {
                var tag = el.tagName.toLowerCase();
                if ("html" !== tag) throw new Error("Expected element to be html, got " + tag);
                for (var documentElement = win.document.documentElement; documentElement.children && documentElement.children.length; ) documentElement.removeChild(documentElement.children[0]);
                for (;el.children.length; ) documentElement.appendChild(el.children[0]);
            }
            function setStyle(el, styleText) {
                var doc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.document;
                el.styleSheet ? el.styleSheet.cssText = styleText : el.appendChild(doc.createTextNode(styleText));
            }
            var awaitFrameLoadPromises = void 0;
            function awaitFrameLoad(frame) {
                if ((awaitFrameLoadPromises = awaitFrameLoadPromises || new cross_domain_safe_weakmap_src.a()).has(frame)) {
                    var _promise = awaitFrameLoadPromises.get(frame);
                    if (_promise) return _promise;
                }
                var promise = new src.a(function(resolve, reject) {
                    frame.addEventListener("load", function() {
                        Object(cross_domain_utils_src.q)(frame);
                        resolve(frame);
                    });
                    frame.addEventListener("error", function(err) {
                        frame.contentWindow ? resolve(frame) : reject(err);
                    });
                });
                awaitFrameLoadPromises.set(frame, promise);
                return promise;
            }
            function awaitFrameWindow(frame) {
                return awaitFrameLoad(frame).then(function(loadedFrame) {
                    if (!loadedFrame.contentWindow) throw new Error("Could not find window in iframe");
                    return loadedFrame.contentWindow;
                });
            }
            function createElement() {
                var tag = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div", options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, container = arguments[2];
                tag = tag.toLowerCase();
                var element = document.createElement(tag);
                options.style && extend(element.style, options.style);
                options.class && (element.className = options.class.join(" "));
                options.id && element.setAttribute("id", options.id);
                if (options.attributes) for (var _i6 = 0, _Object$keys2 = Object.keys(options.attributes), _length6 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i6 < _length6; _i6++) {
                    var key = _Object$keys2[_i6];
                    element.setAttribute(key, options.attributes[key]);
                }
                options.styleSheet && setStyle(element, options.styleSheet);
                container && appendChild(container, element);
                if (options.html) if ("iframe" === tag) {
                    if (!container || !element.contentWindow) throw new Error("Iframe html can not be written unless container provided and iframe in DOM");
                    writeToWindow(element.contentWindow, options.html);
                } else element.innerHTML = options.html;
                return element;
            }
            function iframe() {
                var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, container = arguments[1], attributes = options.attributes || {}, style = options.style || {}, frame = createElement("iframe", {
                    attributes: _extends({
                        allowTransparency: "true"
                    }, attributes),
                    style: _extends({
                        backgroundColor: "transparent",
                        border: "none"
                    }, style),
                    html: options.html,
                    class: options.class
                }), isIE = window.navigator.userAgent.match(/MSIE|Edge/i);
                frame.hasAttribute("id") || frame.setAttribute("id", uniqueID());
                awaitFrameLoad(frame);
                container && getElement(container).appendChild(frame);
                (options.url || isIE) && frame.setAttribute("src", options.url || "about:blank");
                return frame;
            }
            function addEventListener(obj, event, handler) {
                obj.addEventListener(event, handler);
                return {
                    cancel: function() {
                        obj.removeEventListener(event, handler);
                    }
                };
            }
            function bindEvents(element, eventNames, handler) {
                handler = once(handler);
                for (var _i8 = 0, _length8 = null == eventNames ? 0 : eventNames.length; _i8 < _length8; _i8++) {
                    var eventName = eventNames[_i8];
                    element.addEventListener(eventName, handler);
                }
                return {
                    cancel: once(function() {
                        for (var _i10 = 0, _length10 = null == eventNames ? 0 : eventNames.length; _i10 < _length10; _i10++) {
                            var _eventName = eventNames[_i10];
                            element.removeEventListener(_eventName, handler);
                        }
                    })
                };
            }
            var VENDOR_PREFIXES = [ "webkit", "moz", "ms", "o" ];
            function setVendorCSS(element, name, value) {
                element.style[name] = value;
                for (var capitalizedName = capitalizeFirstLetter(name), _i12 = 0, _length12 = null == VENDOR_PREFIXES ? 0 : VENDOR_PREFIXES.length; _i12 < _length12; _i12++) {
                    var prefix = VENDOR_PREFIXES[_i12];
                    element.style["" + prefix + capitalizedName] = value;
                }
            }
            var ANIMATION_START_EVENTS = [ "animationstart", "webkitAnimationStart", "oAnimationStart", "MSAnimationStart" ], ANIMATION_END_EVENTS = [ "animationend", "webkitAnimationEnd", "oAnimationEnd", "MSAnimationEnd" ];
            function animate(element, name, clean) {
                var timeout = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e3;
                return new src.a(function(resolve, reject) {
                    var el = getElement(element);
                    if (!el) return resolve();
                    var hasStarted = !1, startTimeout = void 0, endTimeout = void 0, startEvent = void 0, endEvent = void 0;
                    function cleanUp() {
                        clearTimeout(startTimeout);
                        clearTimeout(endTimeout);
                        startEvent.cancel();
                        endEvent.cancel();
                    }
                    startEvent = bindEvents(el, ANIMATION_START_EVENTS, function(event) {
                        if (event.target === el && event.animationName === name) {
                            clearTimeout(startTimeout);
                            event.stopPropagation();
                            startEvent.cancel();
                            hasStarted = !0;
                            endTimeout = setTimeout(function() {
                                cleanUp();
                                resolve();
                            }, timeout);
                        }
                    });
                    endEvent = bindEvents(el, ANIMATION_END_EVENTS, function(event) {
                        if (event.target === el && event.animationName === name) {
                            cleanUp();
                            return "string" == typeof event.animationName && event.animationName !== name ? reject("Expected animation name to be " + name + ", found " + event.animationName) : resolve();
                        }
                    });
                    setVendorCSS(el, "animationName", name);
                    startTimeout = setTimeout(function() {
                        if (!hasStarted) {
                            cleanUp();
                            return resolve();
                        }
                    }, 200);
                    clean && clean(cleanUp);
                });
            }
            var STYLE = {
                DISPLAY: {
                    NONE: "none",
                    BLOCK: "block"
                },
                VISIBILITY: {
                    VISIBLE: "visible",
                    HIDDEN: "hidden"
                },
                IMPORTANT: "important"
            };
            function makeElementVisible(element) {
                element.style.setProperty("visibility", "");
            }
            function makeElementInvisible(element) {
                element.style.setProperty("visibility", STYLE.VISIBILITY.HIDDEN, STYLE.IMPORTANT);
            }
            function showElement(element) {
                element.style.setProperty("display", "");
            }
            function hideElement(element) {
                element.style.setProperty("display", STYLE.DISPLAY.NONE, STYLE.IMPORTANT);
            }
            function destroyElement(element) {
                element && element.parentNode && element.parentNode.removeChild(element);
            }
            function showAndAnimate(element, name, clean) {
                var animation = animate(element, name, clean);
                showElement(element);
                return animation;
            }
            function animateAndHide(element, name, clean) {
                return animate(element, name, clean).then(function() {
                    hideElement(element);
                });
            }
            function addClass(element, name) {
                element.classList.add(name);
            }
            function removeClass(element, name) {
                element.classList.remove(name);
            }
            function isElementClosed(el) {
                return !el || !el.parentNode;
            }
            function watchElementForClose(element, handler) {
                handler = once(handler);
                var interval = void 0;
                isElementClosed(element) ? handler() : interval = safeInterval(function() {
                    if (isElementClosed(element)) {
                        interval.cancel();
                        handler();
                    }
                }, 50);
                return {
                    cancel: function() {
                        interval && interval.cancel();
                    }
                };
            }
            function fixScripts(el) {
                for (var doc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.document, _i14 = 0, _querySelectorAll2 = querySelectorAll("script", el), _length14 = null == _querySelectorAll2 ? 0 : _querySelectorAll2.length; _i14 < _length14; _i14++) {
                    var script = _querySelectorAll2[_i14], parentNode = script.parentNode;
                    if (parentNode) {
                        var newScript = doc.createElement("script");
                        newScript.text = script.textContent;
                        parentNode.replaceChild(newScript, script);
                    }
                }
            }
            function onResize(el, handler) {
                var _ref2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, _ref2$width = _ref2.width, width = void 0 === _ref2$width || _ref2$width, _ref2$height = _ref2.height, height = void 0 === _ref2$height || _ref2$height, _ref2$interval = _ref2.interval, interval = void 0 === _ref2$interval ? 100 : _ref2$interval, _ref2$win = _ref2.win, win = void 0 === _ref2$win ? window : _ref2$win, currentWidth = el.offsetWidth, currentHeight = el.offsetHeight;
                handler({
                    width: currentWidth,
                    height: currentHeight
                });
                var check = function() {
                    var newWidth = el.offsetWidth, newHeight = el.offsetHeight;
                    (width && newWidth !== currentWidth || height && newHeight !== currentHeight) && handler({
                        width: newWidth,
                        height: newHeight
                    });
                    currentWidth = newWidth;
                    currentHeight = newHeight;
                }, observer = void 0, timeout = void 0;
                if (void 0 !== win.ResizeObserver) (observer = new win.ResizeObserver(check)).observe(el); else if (void 0 !== win.MutationObserver) {
                    (observer = new win.MutationObserver(check)).observe(el, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !1
                    });
                    win.addEventListener("resize", check);
                } else !function loop() {
                    check();
                    timeout = setTimeout(loop, interval);
                }();
                return {
                    cancel: function() {
                        observer.disconnect();
                        window.removeEventListener("resize", check);
                        clearTimeout(timeout);
                    }
                };
            }
            var DEFAULT_SESSION_STORAGE = 12e5;
            function getStorage(_ref) {
                var name = _ref.name, _ref$lifetime = _ref.lifetime, lifetime = void 0 === _ref$lifetime ? DEFAULT_SESSION_STORAGE : _ref$lifetime;
                return inlineMemoize(getStorage, function() {
                    var STORAGE_KEY = "__" + name + "_storage__", accessedStorage = void 0;
                    function getState(handler) {
                        var localStorageEnabled = isLocalStorageEnabled(), storage = void 0;
                        accessedStorage && (storage = accessedStorage);
                        if (!storage && localStorageEnabled) {
                            var rawStorage = window.localStorage.getItem(STORAGE_KEY);
                            rawStorage && (storage = JSON.parse(rawStorage));
                        }
                        storage || (storage = getGlobal()[STORAGE_KEY]);
                        storage || (storage = {
                            id: uniqueID()
                        });
                        storage.id || (storage.id = uniqueID());
                        accessedStorage = storage;
                        var result = handler(storage);
                        localStorageEnabled ? window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage)) : getGlobal()[STORAGE_KEY] = storage;
                        accessedStorage = null;
                        return result;
                    }
                    function getSession(handler) {
                        return getState(function(storage) {
                            var session = storage.__session__, now = Date.now();
                            session && now - session.created > lifetime && (session = null);
                            session || (session = {
                                guid: uniqueID(),
                                created: now
                            });
                            storage.__session__ = session;
                            return handler(session);
                        });
                    }
                    return {
                        getState: getState,
                        getID: function() {
                            return getState(function(storage) {
                                return storage.id;
                            });
                        },
                        getSessionState: function(handler) {
                            return getSession(function(session) {
                                session.state = session.state || {};
                                return handler(session.state);
                            });
                        },
                        getSessionID: function() {
                            return getSession(function(session) {
                                return session.guid;
                            });
                        }
                    };
                }, [ {
                    name: name,
                    lifetime: lifetime
                } ]);
            }
            function getBelterExperimentStorage() {
                return getStorage({
                    name: "belter_experiment"
                });
            }
            function isEventUnique(name) {
                return getBelterExperimentStorage().getSessionState(function(state) {
                    state.loggedBeacons = state.loggedBeacons || [];
                    if (-1 === state.loggedBeacons.indexOf(name)) {
                        state.loggedBeacons.push(name);
                        return !0;
                    }
                    return !1;
                });
            }
            var THROTTLE_GROUP = {
                TEST: "test",
                CONTROL: "control",
                THROTTLE: "throttle"
            };
            function experiment(_ref) {
                var group, name = _ref.name, _ref$sample = _ref.sample, sample = void 0 === _ref$sample ? 50 : _ref$sample, _ref$logTreatment = _ref.logTreatment, logTreatment = void 0 === _ref$logTreatment ? noop : _ref$logTreatment, _ref$logCheckpoint = _ref.logCheckpoint, logCheckpoint = void 0 === _ref$logCheckpoint ? noop : _ref$logCheckpoint, throttle = function(name) {
                    return getBelterExperimentStorage().getState(function(state) {
                        state.throttlePercentiles = state.throttlePercentiles || {};
                        state.throttlePercentiles[name] = state.throttlePercentiles[name] || Math.floor(100 * Math.random());
                        return state.throttlePercentiles[name];
                    });
                }(name);
                group = throttle < sample ? THROTTLE_GROUP.TEST : sample >= 50 || sample <= throttle && throttle < 2 * sample ? THROTTLE_GROUP.CONTROL : THROTTLE_GROUP.THROTTLE;
                var treatment = name + "_" + group, started = !1, forced = !1;
                try {
                    window.localStorage && window.localStorage.getItem(name) && (forced = !0);
                } catch (err) {}
                return {
                    isEnabled: function() {
                        return group === THROTTLE_GROUP.TEST || forced;
                    },
                    isDisabled: function() {
                        return group !== THROTTLE_GROUP.TEST && !forced;
                    },
                    getTreatment: function() {
                        return treatment;
                    },
                    log: function(checkpoint) {
                        var payload = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!started) return this;
                        isEventUnique(name + "_" + treatment) && logTreatment({
                            name: name,
                            treatment: treatment
                        });
                        isEventUnique(name + "_" + treatment + "_" + checkpoint) && logCheckpoint({
                            name: name,
                            treatment: treatment,
                            checkpoint: checkpoint,
                            payload: payload
                        });
                        return this;
                    },
                    logStart: function() {
                        var payload = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        started = !0;
                        return this.log("start", payload);
                    },
                    logComplete: function() {
                        var payload = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return this.log("complete", payload);
                    }
                };
            }
            function getGlobalNameSpace(_ref) {
                var name = _ref.name, _ref$version = _ref.version, version = void 0 === _ref$version ? "latest" : _ref$version, global = getGlobal(), globalKey = "__" + name + "__" + version + "_global__", namespace = global[globalKey] = global[globalKey] || {};
                return {
                    get: function(key, defValue) {
                        defValue = defValue || {};
                        return namespace[key] = namespace[key] || defValue;
                    }
                };
            }
            var HEADERS = {
                CONTENT_TYPE: "content-type",
                ACCEPT: "accept"
            }, headerBuilders = [];
            function request(_ref) {
                var url = _ref.url, _ref$method = _ref.method, method = void 0 === _ref$method ? "get" : _ref$method, _ref$headers = _ref.headers, headers = void 0 === _ref$headers ? {} : _ref$headers, json = _ref.json, data = _ref.data, body = _ref.body, _ref$win = _ref.win, win = void 0 === _ref$win ? window : _ref$win, _ref$timeout = _ref.timeout, timeout = void 0 === _ref$timeout ? 0 : _ref$timeout;
                return new src.a(function(resolve, reject) {
                    if (json && data || json && body || data && json) throw new Error("Only options.json or options.data or options.body should be passed");
                    for (var normalizedHeaders = {}, _i4 = 0, _Object$keys2 = Object.keys(headers), _length4 = null == _Object$keys2 ? 0 : _Object$keys2.length; _i4 < _length4; _i4++) {
                        var _key2 = _Object$keys2[_i4];
                        normalizedHeaders[_key2.toLowerCase()] = headers[_key2];
                    }
                    json ? normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || "application/json" : (data || body) && (normalizedHeaders[HEADERS.CONTENT_TYPE] = normalizedHeaders[HEADERS.CONTENT_TYPE] || "application/x-www-form-urlencoded; charset=utf-8");
                    normalizedHeaders[HEADERS.ACCEPT] = normalizedHeaders[HEADERS.ACCEPT] || "application/json";
                    for (var _i6 = 0, _length6 = null == headerBuilders ? 0 : headerBuilders.length; _i6 < _length6; _i6++) for (var builtHeaders = (0, 
                    headerBuilders[_i6])(), _i8 = 0, _Object$keys4 = Object.keys(builtHeaders), _length8 = null == _Object$keys4 ? 0 : _Object$keys4.length; _i8 < _length8; _i8++) {
                        var _key3 = _Object$keys4[_i8];
                        normalizedHeaders[_key3.toLowerCase()] = builtHeaders[_key3];
                    }
                    var xhr = new win.XMLHttpRequest();
                    xhr.addEventListener("load", function() {
                        var responseHeaders = function() {
                            for (var result = {}, _i2 = 0, _rawHeaders$trim$spli2 = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().split("\n"), _length2 = null == _rawHeaders$trim$spli2 ? 0 : _rawHeaders$trim$spli2.length; _i2 < _length2; _i2++) {
                                var _line$split = _rawHeaders$trim$spli2[_i2].split(":"), _key = _line$split[0], values = _line$split.slice(1);
                                result[_key.toLowerCase()] = values.join(":").trim();
                            }
                            return result;
                        }(this.getAllResponseHeaders());
                        if (!this.status) return reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: no response status code."));
                        var contentType = responseHeaders["content-type"], isJSON = contentType && (0 === contentType.indexOf("application/json") || 0 === contentType.indexOf("text/json")), responseBody = this.responseText;
                        try {
                            responseBody = JSON.parse(responseBody);
                        } catch (err) {
                            if (isJSON) return reject(new Error("Invalid json: " + this.responseText + "."));
                        }
                        var res = {
                            status: this.status,
                            headers: responseHeaders,
                            body: responseBody
                        };
                        return resolve(res);
                    }, !1);
                    xhr.addEventListener("error", function(evt) {
                        reject(new Error("Request to " + method.toLowerCase() + " " + url + " failed: " + evt.toString() + "."));
                    }, !1);
                    xhr.open(method, url, !0);
                    for (var _key4 in normalizedHeaders) normalizedHeaders.hasOwnProperty(_key4) && xhr.setRequestHeader(_key4, normalizedHeaders[_key4]);
                    json ? body = JSON.stringify(json) : data && (body = Object.keys(data).map(function(key) {
                        return encodeURIComponent(key) + "=" + (data ? encodeURIComponent(data[key]) : "");
                    }).join("&"));
                    xhr.timeout = timeout;
                    xhr.ontimeout = function() {
                        reject(new Error("Request to " + method.toLowerCase() + " " + url + " has timed out"));
                    };
                    xhr.send(body);
                });
            }
            function addHeaderBuilder(method) {
                headerBuilders.push(method);
            }
            function memoized(target, name, descriptor) {
                descriptor.value = memoize(descriptor.value, {
                    name: name,
                    thisNamespace: !0
                });
            }
            function decorators_promise(target, name, descriptor) {
                descriptor.value = promisify(descriptor.value, {
                    name: name
                });
            }
            function isPerc(str) {
                return "string" == typeof str && /^[0-9]+%$/.test(str);
            }
            function isPx(str) {
                return "string" == typeof str && /^[0-9]+px$/.test(str);
            }
            function toNum(val) {
                if ("number" == typeof val) return val;
                var match = val.match(/^([0-9]+)(px|%)$/);
                if (!match) throw new Error("Could not match css value from " + val);
                return parseInt(match[1], 10);
            }
            function toPx(val) {
                return toNum(val) + "px";
            }
            function toCSS(val) {
                return "number" == typeof val ? toPx(val) : isPerc(val) ? val : toPx(val);
            }
            function percOf(num, perc) {
                return parseInt(num * toNum(perc) / 100, 10);
            }
            function normalizeDimension(dim, max) {
                if ("number" == typeof dim) return dim;
                if (isPerc(dim)) return percOf(max, dim);
                if (isPx(dim)) return toNum(dim);
                throw new Error("Can not normalize dimension: " + dim);
            }
            function wrapPromise(method) {
                var _ref$timeout = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).timeout, expected = [], promises = [], timer = setTimeout(function() {
                    expected && promises.push(src.a.asyncReject(new Error("Expected " + expected[0] + " to be called")));
                }, void 0 === _ref$timeout ? 5e3 : _ref$timeout), expect = function(name) {
                    var fn = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : noop;
                    expected.push(name);
                    return function() {
                        for (var _this = this, _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
                        removeFromArray(expected, name);
                        var _tryCatch = tryCatch(function() {
                            return fn.call.apply(fn, [ _this ].concat(args));
                        }), result = _tryCatch.result, error = _tryCatch.error;
                        if (error) {
                            promises.push(src.a.asyncReject(error));
                            throw error;
                        }
                        promises.push(src.a.resolve(result));
                        return result;
                    };
                }, avoid = function(name) {
                    var fn = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : noop;
                    return function() {
                        promises.push(src.a.asyncReject(new Error("Expected " + name + " to not be called")));
                        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
                        return fn.call.apply(fn, [ this ].concat(args));
                    };
                }, expectError = function(name) {
                    var fn = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : noop;
                    expected.push(name);
                    return function() {
                        for (var _this2 = this, _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) args[_key3] = arguments[_key3];
                        removeFromArray(expected, name);
                        var _tryCatch2 = tryCatch(function() {
                            return fn.call.apply(fn, [ _this2 ].concat(args));
                        }), result = _tryCatch2.result, error = _tryCatch2.error;
                        if (error) throw error;
                        promises.push(src.a.resolve(result).then(function() {
                            throw new Error("Expected " + name + " to throw an error");
                        }, noop));
                        return result;
                    };
                };
                promises.push(src.a.try(function() {
                    return method({
                        expect: expect,
                        avoid: avoid,
                        expectError: expectError,
                        error: avoid
                    });
                }));
                return function drain() {
                    return src.a.try(function() {
                        if (promises.length) return promises.pop();
                    }).then(function() {
                        return promises.length ? drain() : expected.length ? src.a.delay(10).then(drain) : void 0;
                    });
                }().then(function() {
                    clearTimeout(timer);
                });
            }
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getUserAgent;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isDevice;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isWebView;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isStandAlone;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isFacebookWebView;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isFirefoxIOS;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isEdgeIOS;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isOperaMini;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isAndroid;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isIos;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isGoogleSearchApp;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isQQBrowser;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isIosWebview;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isAndroidWebview;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return device_isIE;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isIECompHeader;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isElectron;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isIEIntranet;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isMacOsCna;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return supportsPopups;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isDocumentReady;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return urlEncode;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return waitForWindowReady;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return waitForDocumentReady;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return waitForDocumentBody;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return parseQuery;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getQueryParam;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return urlWillRedirectPage;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return formatQuery;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return extendQuery;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return extendUrl;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return redirect;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return hasMetaViewPort;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isElementVisible;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return enablePerformance;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getPageRenderTime;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return htmlEncode;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isBrowser;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return querySelectorAll;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return onClick;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getScript;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isLocalStorageEnabled;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getBrowserLocales;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return appendChild;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isElement;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getElementSafe;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getElement;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return elementReady;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return PopupOpenError;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return popup;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return writeToWindow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return writeElementToWindow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return setStyle;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return awaitFrameLoad;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return awaitFrameWindow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return createElement;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return iframe;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return addEventListener;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return bindEvents;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return setVendorCSS;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return animate;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return makeElementVisible;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return makeElementInvisible;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return showElement;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return hideElement;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return destroyElement;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return showAndAnimate;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return animateAndHide;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return addClass;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return removeClass;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isElementClosed;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return watchElementForClose;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return fixScripts;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return onResize;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return experiment;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getGlobalNameSpace;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getStorage;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return base64encode;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return base64decode;
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
                return uniqueID;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getGlobal;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getObjectID;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return memoize;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
                return memoizePromise;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return promisify;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return inlineMemoize;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
                return noop;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
                return once;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return hashStr;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return strHashStr;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return match;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return awaitKey;
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
                return stringifyError;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return stringifyErrorMessage;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return stringify;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return domainMatches;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return patchMethod;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return extend;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return values;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return perc;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return min;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return max;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return regexMap;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return svgToBase64;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return objFilter;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return identity;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return regexTokenize;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return promiseDebounce;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
                return safeInterval;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isInteger;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isFloat;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return serializePrimitive;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return deserializePrimitive;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return dotify;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return undotify;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return eventEmitter;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return camelToDasherize;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return dasherizeToCamel;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return capitalizeFirstLetter;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return get;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return safeTimeout;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return defineLazyProp;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isObject;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isObjectObject;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isPlainObject;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return replaceObject;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return copyProp;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return regex;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return regexAll;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isDefined;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return cycle;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return debounce;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
                return isRegex;
            });
            __webpack_require__.d(__webpack_exports__, "j", function() {
                return util_weakMapMemoize;
            });
            __webpack_require__.d(__webpack_exports__, "k", function() {
                return util_weakMapMemoizePromise;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
                return getOrSet;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return cleanup;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return tryCatch;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return removeFromArray;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return assertExists;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return request;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return addHeaderBuilder;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return !0;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return memoized;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return decorators_promise;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isPerc;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isPx;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return toNum;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return toPx;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return toCSS;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return percOf;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return normalizeDimension;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return wrapPromise;
            });
        },
        "./node_modules/cross-domain-safe-weakmap/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d({}, "WeakMap", function() {
                return weakmap_CrossDomainSafeWeakMap;
            });
            var src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js");
            function safeIndexOf(collection, item) {
                for (var i = 0; i < collection.length; i++) try {
                    if (collection[i] === item) return i;
                } catch (err) {}
                return -1;
            }
            var defineProperty = Object.defineProperty, counter = Date.now() % 1e9, weakmap_CrossDomainSafeWeakMap = function() {
                function CrossDomainSafeWeakMap() {
                    !function(instance, Constructor) {
                        if (!(instance instanceof CrossDomainSafeWeakMap)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    counter += 1;
                    this.name = "__weakmap_" + (1e9 * Math.random() >>> 0) + "__" + counter;
                    if (function() {
                        if ("undefined" == typeof WeakMap) return !1;
                        if (void 0 === Object.freeze) return !1;
                        try {
                            var testWeakMap = new WeakMap(), testKey = {};
                            Object.freeze(testKey);
                            testWeakMap.set(testKey, "__testvalue__");
                            return "__testvalue__" === testWeakMap.get(testKey);
                        } catch (err) {
                            return !1;
                        }
                    }()) try {
                        this.weakmap = new WeakMap();
                    } catch (err) {}
                    this.keys = [];
                    this.values = [];
                }
                CrossDomainSafeWeakMap.prototype._cleanupClosedWindows = function() {
                    for (var weakmap = this.weakmap, keys = this.keys, i = 0; i < keys.length; i++) {
                        var value = keys[i];
                        if (Object(src.o)(value) && Object(src.p)(value)) {
                            if (weakmap) try {
                                weakmap.delete(value);
                            } catch (err) {}
                            keys.splice(i, 1);
                            this.values.splice(i, 1);
                            i -= 1;
                        }
                    }
                };
                CrossDomainSafeWeakMap.prototype.isSafeToReadWrite = function(key) {
                    if (Object(src.o)(key)) return !1;
                    try {
                        key && key.self;
                        key && key[this.name];
                    } catch (err) {
                        return !1;
                    }
                    return !0;
                };
                CrossDomainSafeWeakMap.prototype.set = function(key, value) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.set(key, value);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) {
                        var name = this.name, entry = key[name];
                        entry && entry[0] === key ? entry[1] = value : defineProperty(key, name, {
                            value: [ key, value ],
                            writable: !0
                        });
                    } else {
                        this._cleanupClosedWindows();
                        var keys = this.keys, values = this.values, index = safeIndexOf(keys, key);
                        if (-1 === index) {
                            keys.push(key);
                            values.push(value);
                        } else values[index] = value;
                    }
                };
                CrossDomainSafeWeakMap.prototype.get = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return weakmap.get(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (!this.isSafeToReadWrite(key)) {
                        this._cleanupClosedWindows();
                        var index = safeIndexOf(this.keys, key);
                        if (-1 === index) return;
                        return this.values[index];
                    }
                    var entry = key[this.name];
                    if (entry && entry[0] === key) return entry[1];
                };
                CrossDomainSafeWeakMap.prototype.delete = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        weakmap.delete(key);
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) {
                        var entry = key[this.name];
                        entry && entry[0] === key && (entry[0] = entry[1] = void 0);
                    } else {
                        this._cleanupClosedWindows();
                        var keys = this.keys, index = safeIndexOf(keys, key);
                        if (-1 !== index) {
                            keys.splice(index, 1);
                            this.values.splice(index, 1);
                        }
                    }
                };
                CrossDomainSafeWeakMap.prototype.has = function(key) {
                    if (!key) throw new Error("WeakMap expected key");
                    var weakmap = this.weakmap;
                    if (weakmap) try {
                        if (weakmap.has(key)) return !0;
                    } catch (err) {
                        delete this.weakmap;
                    }
                    if (this.isSafeToReadWrite(key)) {
                        var entry = key[this.name];
                        return !(!entry || entry[0] !== key);
                    }
                    this._cleanupClosedWindows();
                    return -1 !== safeIndexOf(this.keys, key);
                };
                CrossDomainSafeWeakMap.prototype.getOrSet = function(key, getter) {
                    if (this.has(key)) return this.get(key);
                    var value = getter();
                    this.set(key, value);
                    return value;
                };
                return CrossDomainSafeWeakMap;
            }();
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return weakmap_CrossDomainSafeWeakMap;
            });
        },
        "./node_modules/cross-domain-utils/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            function isRegex(item) {
                return "[object RegExp]" === Object.prototype.toString.call(item);
            }
            var PROTOCOL = {
                MOCK: "mock:",
                FILE: "file:",
                ABOUT: "about:"
            }, WILDCARD = "*", WINDOW_TYPE = {
                IFRAME: "iframe",
                POPUP: "popup"
            }, IE_WIN_ACCESS_ERROR = "Call was rejected by callee.\r\n";
            function isFileProtocol() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).location.protocol === PROTOCOL.FILE;
            }
            function isAboutProtocol() {
                return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window).location.protocol === PROTOCOL.ABOUT;
            }
            function getParent(win) {
                if (win) try {
                    if (win.parent && win.parent !== win) return win.parent;
                } catch (err) {}
            }
            function getOpener(win) {
                if (win && !getParent(win)) try {
                    return win.opener;
                } catch (err) {}
            }
            function canReadFromWindow(win) {
                try {
                    win && win.location && win.location.href;
                    return !0;
                } catch (err) {}
                return !1;
            }
            function getActualDomain(win) {
                var location = (win = win || window).location;
                if (!location) throw new Error("Can not read window location");
                var protocol = location.protocol;
                if (!protocol) throw new Error("Can not read window protocol");
                if (protocol === PROTOCOL.FILE) return PROTOCOL.FILE + "//";
                if (protocol === PROTOCOL.ABOUT) {
                    var parent = getParent(win);
                    return parent && canReadFromWindow(parent) ? getActualDomain(parent) : PROTOCOL.ABOUT + "//";
                }
                var host = location.host;
                if (!host) throw new Error("Can not read window host");
                return protocol + "//" + host;
            }
            function getDomain(win) {
                var domain = getActualDomain(win = win || window);
                return domain && win.mockDomain && 0 === win.mockDomain.indexOf(PROTOCOL.MOCK) ? win.mockDomain : domain;
            }
            function isBlankDomain(win) {
                try {
                    if (!win.location.href) return !0;
                    if ("about:blank" === win.location.href) return !0;
                } catch (err) {}
                return !1;
            }
            function isActuallySameDomain(win) {
                try {
                    if (win === window) return !0;
                } catch (err) {}
                try {
                    var desc = Object.getOwnPropertyDescriptor(win, "location");
                    if (desc && !1 === desc.enumerable) return !1;
                } catch (err) {}
                try {
                    if (isAboutProtocol(win) && canReadFromWindow(win)) return !0;
                } catch (err) {}
                try {
                    if (getActualDomain(win) === getActualDomain(window)) return !0;
                } catch (err) {}
                return !1;
            }
            function isSameDomain(win) {
                if (!isActuallySameDomain(win)) return !1;
                try {
                    if (win === window) return !0;
                    if (isAboutProtocol(win) && canReadFromWindow(win)) return !0;
                    if (getDomain(window) === getDomain(win)) return !0;
                } catch (err) {}
                return !1;
            }
            function assertSameDomain(win) {
                if (!isSameDomain(win)) throw new Error("Expected window to be same domain");
                return win;
            }
            function getParents(win) {
                var result = [];
                try {
                    for (;win.parent !== win; ) {
                        result.push(win.parent);
                        win = win.parent;
                    }
                } catch (err) {}
                return result;
            }
            function isAncestorParent(parent, child) {
                if (!parent || !child) return !1;
                var childParent = getParent(child);
                return childParent ? childParent === parent : -1 !== getParents(child).indexOf(parent);
            }
            function getFrames(win) {
                var result = [], frames = void 0;
                try {
                    frames = win.frames;
                } catch (err) {
                    frames = win;
                }
                var len = void 0;
                try {
                    len = frames.length;
                } catch (err) {}
                if (0 === len) return result;
                if (len) {
                    for (var i = 0; i < len; i++) {
                        var frame = void 0;
                        try {
                            frame = frames[i];
                        } catch (err) {
                            continue;
                        }
                        result.push(frame);
                    }
                    return result;
                }
                for (var _i = 0; _i < 100; _i++) {
                    var _frame = void 0;
                    try {
                        _frame = frames[_i];
                    } catch (err) {
                        return result;
                    }
                    if (!_frame) return result;
                    result.push(_frame);
                }
                return result;
            }
            function getAllChildFrames(win) {
                for (var result = [], _i3 = 0, _getFrames2 = getFrames(win), _length2 = null == _getFrames2 ? 0 : _getFrames2.length; _i3 < _length2; _i3++) {
                    var frame = _getFrames2[_i3];
                    result.push(frame);
                    for (var _i5 = 0, _getAllChildFrames2 = getAllChildFrames(frame), _length4 = null == _getAllChildFrames2 ? 0 : _getAllChildFrames2.length; _i5 < _length4; _i5++) {
                        var childFrame = _getAllChildFrames2[_i5];
                        result.push(childFrame);
                    }
                }
                return result;
            }
            function getTop(win) {
                if (win) {
                    try {
                        if (win.top) return win.top;
                    } catch (err) {}
                    if (getParent(win) === win) return win;
                    try {
                        if (isAncestorParent(window, win) && window.top) return window.top;
                    } catch (err) {}
                    try {
                        if (isAncestorParent(win, window) && window.top) return window.top;
                    } catch (err) {}
                    for (var _i7 = 0, _getAllChildFrames4 = getAllChildFrames(win), _length6 = null == _getAllChildFrames4 ? 0 : _getAllChildFrames4.length; _i7 < _length6; _i7++) {
                        var frame = _getAllChildFrames4[_i7];
                        try {
                            if (frame.top) return frame.top;
                        } catch (err) {}
                        if (getParent(frame) === frame) return frame;
                    }
                }
            }
            function getNextOpener() {
                var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
                return getOpener(getTop(win) || win);
            }
            function getUltimateTop() {
                var opener = getNextOpener(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window);
                return opener ? getUltimateTop(opener) : top;
            }
            function getAllFramesInWindow(win) {
                var top = getTop(win);
                if (!top) throw new Error("Can not determine top window");
                return [].concat(getAllChildFrames(top), [ top ]);
            }
            function getAllWindows() {
                var win = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, frames = getAllFramesInWindow(win), opener = getNextOpener(win);
                return opener ? [].concat(getAllWindows(opener), frames) : frames;
            }
            function isTop(win) {
                return win === getTop(win);
            }
            function isFrameWindowClosed(frame) {
                if (!frame.contentWindow) return !0;
                if (!frame.parentNode) return !0;
                var doc = frame.ownerDocument;
                return !(!doc || !doc.documentElement || doc.documentElement.contains(frame));
            }
            var iframeWindows = [], iframeFrames = [];
            function isWindowClosed(win) {
                var allowMock = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    if (win === window) return !1;
                } catch (err) {
                    return !0;
                }
                try {
                    if (!win) return !0;
                } catch (err) {
                    return !0;
                }
                try {
                    if (win.closed) return !0;
                } catch (err) {
                    return !err || err.message !== IE_WIN_ACCESS_ERROR;
                }
                if (allowMock && isSameDomain(win)) try {
                    if (win.mockclosed) return !0;
                } catch (err) {}
                try {
                    if (!win.parent || !win.top) return !0;
                } catch (err) {}
                var iframeIndex = function(collection, item) {
                    for (var i = 0; i < collection.length; i++) try {
                        if (collection[i] === item) return i;
                    } catch (err) {}
                    return -1;
                }(iframeWindows, win);
                if (-1 !== iframeIndex) {
                    var frame = iframeFrames[iframeIndex];
                    if (frame && isFrameWindowClosed(frame)) return !0;
                }
                return !1;
            }
            function linkFrameWindow(frame) {
                !function() {
                    for (var i = 0; i < iframeWindows.length; i++) {
                        var closed = !1;
                        try {
                            closed = iframeWindows[i].closed;
                        } catch (err) {}
                        if (closed) {
                            iframeFrames.splice(i, 1);
                            iframeWindows.splice(i, 1);
                        }
                    }
                }();
                if (frame && frame.contentWindow) try {
                    iframeWindows.push(frame.contentWindow);
                    iframeFrames.push(frame);
                } catch (err) {}
            }
            function getUserAgent(win) {
                return (win = win || window).navigator.mockUserAgent || win.navigator.userAgent;
            }
            function getFrameByName(win, name) {
                for (var winFrames = getFrames(win), _i9 = 0, _length8 = null == winFrames ? 0 : winFrames.length; _i9 < _length8; _i9++) {
                    var childFrame = winFrames[_i9];
                    try {
                        if (isSameDomain(childFrame) && childFrame.name === name && -1 !== winFrames.indexOf(childFrame)) return childFrame;
                    } catch (err) {}
                }
                try {
                    if (-1 !== winFrames.indexOf(win.frames[name])) return win.frames[name];
                } catch (err) {}
                try {
                    if (-1 !== winFrames.indexOf(win[name])) return win[name];
                } catch (err) {}
            }
            function findChildFrameByName(win, name) {
                var frame = getFrameByName(win, name);
                if (frame) return frame;
                for (var _i11 = 0, _getFrames4 = getFrames(win), _length10 = null == _getFrames4 ? 0 : _getFrames4.length; _i11 < _length10; _i11++) {
                    var namedFrame = findChildFrameByName(_getFrames4[_i11], name);
                    if (namedFrame) return namedFrame;
                }
            }
            function findFrameByName(win, name) {
                var frame;
                return (frame = getFrameByName(win, name)) ? frame : findChildFrameByName(getTop(win) || win, name);
            }
            function isParent(win, frame) {
                var frameParent = getParent(frame);
                if (frameParent) return frameParent === win;
                for (var _i13 = 0, _getFrames6 = getFrames(win), _length12 = null == _getFrames6 ? 0 : _getFrames6.length; _i13 < _length12; _i13++) if (_getFrames6[_i13] === frame) return !0;
                return !1;
            }
            function isOpener(parent, child) {
                return parent === getOpener(child);
            }
            function getAncestor(win) {
                return getOpener(win = win || window) || getParent(win) || void 0;
            }
            function getAncestors(win) {
                for (var results = [], ancestor = win; ancestor; ) (ancestor = getAncestor(ancestor)) && results.push(ancestor);
                return results;
            }
            function isAncestor(parent, child) {
                var actualParent = getAncestor(child);
                if (actualParent) return actualParent === parent;
                if (child === parent) return !1;
                if (getTop(child) === child) return !1;
                for (var _i15 = 0, _getFrames8 = getFrames(parent), _length14 = null == _getFrames8 ? 0 : _getFrames8.length; _i15 < _length14; _i15++) if (_getFrames8[_i15] === child) return !0;
                return !1;
            }
            function isPopup() {
                return Boolean(getOpener(window));
            }
            function isIframe() {
                return Boolean(getParent(window));
            }
            function isFullpage() {
                return Boolean(!isIframe() && !isPopup());
            }
            function anyMatch(collection1, collection2) {
                for (var _i17 = 0, _length16 = null == collection1 ? 0 : collection1.length; _i17 < _length16; _i17++) for (var item1 = collection1[_i17], _i19 = 0, _length18 = null == collection2 ? 0 : collection2.length; _i19 < _length18; _i19++) if (item1 === collection2[_i19]) return !0;
                return !1;
            }
            function getDistanceFromTop() {
                for (var distance = 0, parent = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window; parent; ) (parent = getParent(parent)) && (distance += 1);
                return distance;
            }
            function getNthParent(win) {
                for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, parent = win, i = 0; i < n; i++) {
                    if (!parent) return;
                    parent = getParent(parent);
                }
                return parent;
            }
            function getNthParentFromTop(win) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return getNthParent(win, getDistanceFromTop(win) - n);
            }
            function isSameTopWindow(win1, win2) {
                var top1 = getTop(win1) || win1, top2 = getTop(win2) || win2;
                try {
                    if (top1 && top2) return top1 === top2;
                } catch (err) {}
                var allFrames1 = getAllFramesInWindow(win1), allFrames2 = getAllFramesInWindow(win2);
                if (anyMatch(allFrames1, allFrames2)) return !0;
                var opener1 = getOpener(top1), opener2 = getOpener(top2);
                return !(opener1 && anyMatch(getAllFramesInWindow(opener1), allFrames2) || (opener2 && anyMatch(getAllFramesInWindow(opener2), allFrames1), 
                1));
            }
            function matchDomain(pattern, origin) {
                if ("string" == typeof pattern) {
                    if ("string" == typeof origin) return pattern === WILDCARD || origin === pattern;
                    if (isRegex(origin)) return !1;
                    if (Array.isArray(origin)) return !1;
                }
                return isRegex(pattern) ? isRegex(origin) ? pattern.toString() === origin.toString() : !Array.isArray(origin) && Boolean(origin.match(pattern)) : !!Array.isArray(pattern) && (Array.isArray(origin) ? JSON.stringify(pattern) === JSON.stringify(origin) : !isRegex(origin) && pattern.some(function(subpattern) {
                    return matchDomain(subpattern, origin);
                }));
            }
            function stringifyDomainPattern(pattern) {
                return Array.isArray(pattern) ? "(" + pattern.join(" | ") + ")" : isRegex(pattern) ? "RegExp(" + pattern.toString() : pattern.toString();
            }
            function getDomainFromUrl(url) {
                return url.match(/^(https?|mock|file):\/\//) ? url.split("/").slice(0, 3).join("/") : getDomain();
            }
            function onCloseWindow(win, callback) {
                var delay = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3, maxtime = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0, timeout = void 0;
                !function check() {
                    if (isWindowClosed(win)) {
                        timeout && clearTimeout(timeout);
                        return callback();
                    }
                    if (maxtime <= 0) clearTimeout(timeout); else {
                        maxtime -= delay;
                        timeout = setTimeout(check, delay);
                    }
                }();
                return {
                    cancel: function() {
                        timeout && clearTimeout(timeout);
                    }
                };
            }
            function isWindow(obj) {
                try {
                    if (obj === window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if ("[object Window]" === Object.prototype.toString.call(obj)) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (window.Window && obj instanceof window.Window) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.self === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.parent === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    if (obj && obj.top === obj) return !0;
                } catch (err) {
                    if (err && err.message === IE_WIN_ACCESS_ERROR) return !0;
                }
                try {
                    obj && obj.__cross_domain_utils_window_check__;
                } catch (err) {
                    return !0;
                }
                return !1;
            }
            function isBrowser() {
                return "undefined" != typeof window && void 0 !== window.location;
            }
            function isCurrentDomain(domain) {
                return !!isBrowser() && getDomain() === domain;
            }
            function isMockDomain(domain) {
                return 0 === domain.indexOf(PROTOCOL.MOCK);
            }
            function normalizeMockUrl(url) {
                if (!isMockDomain(getDomainFromUrl(url))) return url;
                throw new Error("Mock urls not supported out of test mode");
            }
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isFileProtocol;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isAboutProtocol;
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
                return getParent;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
                return getOpener;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return canReadFromWindow;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
                return getActualDomain;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
                return getDomain;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isBlankDomain;
            });
            __webpack_require__.d(__webpack_exports__, "j", function() {
                return isActuallySameDomain;
            });
            __webpack_require__.d(__webpack_exports__, "m", function() {
                return isSameDomain;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return assertSameDomain;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getParents;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isAncestorParent;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getFrames;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getAllChildFrames;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getTop;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getNextOpener;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getUltimateTop;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getAllFramesInWindow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getAllWindows;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isTop;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isFrameWindowClosed;
            });
            __webpack_require__.d(__webpack_exports__, "p", function() {
                return isWindowClosed;
            });
            __webpack_require__.d(__webpack_exports__, "q", function() {
                return linkFrameWindow;
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
                return getUserAgent;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
                return getFrameByName;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return findChildFrameByName;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return findFrameByName;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isParent;
            });
            __webpack_require__.d(__webpack_exports__, "l", function() {
                return isOpener;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
                return getAncestor;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getAncestors;
            });
            __webpack_require__.d(__webpack_exports__, "k", function() {
                return isAncestor;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isPopup;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isIframe;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isFullpage;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getDistanceFromTop;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getNthParent;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return getNthParentFromTop;
            });
            __webpack_require__.d(__webpack_exports__, "n", function() {
                return isSameTopWindow;
            });
            __webpack_require__.d(__webpack_exports__, "r", function() {
                return matchDomain;
            });
            __webpack_require__.d(__webpack_exports__, "t", function() {
                return stringifyDomainPattern;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
                return getDomainFromUrl;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return onCloseWindow;
            });
            __webpack_require__.d(__webpack_exports__, "o", function() {
                return isWindow;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isBrowser;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isCurrentDomain;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return isMockDomain;
            });
            __webpack_require__.d(__webpack_exports__, "s", function() {
                return normalizeMockUrl;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return !0;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return PROTOCOL;
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return WILDCARD;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return WINDOW_TYPE;
            });
        },
        "./node_modules/zalgo-promise/src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            function utils_isPromise(item) {
                try {
                    if (!item) return !1;
                    if ("undefined" != typeof Promise && item instanceof Promise) return !0;
                    if ("undefined" != typeof window && window.Window && item instanceof window.Window) return !1;
                    if ("undefined" != typeof window && window.constructor && item instanceof window.constructor) return !1;
                    var _toString = {}.toString;
                    if (_toString) {
                        var name = _toString.call(item);
                        if ("[object Window]" === name || "[object global]" === name || "[object DOMWindow]" === name) return !1;
                    }
                    if ("function" == typeof item.then) return !0;
                } catch (err) {
                    return !1;
                }
                return !1;
            }
            var dispatchedErrors = [], possiblyUnhandledPromiseHandlers = [], activeCount = 0, flushPromise = void 0;
            function flushActive() {
                if (!activeCount && flushPromise) {
                    var promise = flushPromise;
                    flushPromise = null;
                    promise.resolve();
                }
            }
            function startActive() {
                activeCount += 1;
            }
            function endActive() {
                activeCount -= 1;
                flushActive();
            }
            var promise_ZalgoPromise = function() {
                function ZalgoPromise(handler) {
                    var _this = this;
                    !function(instance, Constructor) {
                        if (!(instance instanceof ZalgoPromise)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    this.resolved = !1;
                    this.rejected = !1;
                    this.errorHandled = !1;
                    this.handlers = [];
                    if (handler) {
                        var _result = void 0, _error = void 0, resolved = !1, rejected = !1, isAsync = !1;
                        startActive();
                        try {
                            handler(function(res) {
                                if (isAsync) _this.resolve(res); else {
                                    resolved = !0;
                                    _result = res;
                                }
                            }, function(err) {
                                if (isAsync) _this.reject(err); else {
                                    rejected = !0;
                                    _error = err;
                                }
                            });
                        } catch (err) {
                            endActive();
                            this.reject(err);
                            return;
                        }
                        endActive();
                        isAsync = !0;
                        resolved ? this.resolve(_result) : rejected && this.reject(_error);
                    }
                }
                ZalgoPromise.prototype.resolve = function(result) {
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(result)) throw new Error("Can not resolve promise with another promise");
                    this.resolved = !0;
                    this.value = result;
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.reject = function(error) {
                    var _this2 = this;
                    if (this.resolved || this.rejected) return this;
                    if (utils_isPromise(error)) throw new Error("Can not reject promise with another promise");
                    if (!error) {
                        var _err = error && "function" == typeof error.toString ? error.toString() : Object.prototype.toString.call(error);
                        error = new Error("Expected reject to be called with Error, got " + _err);
                    }
                    this.rejected = !0;
                    this.error = error;
                    this.errorHandled || setTimeout(function() {
                        _this2.errorHandled || function(err, promise) {
                            if (-1 === dispatchedErrors.indexOf(err)) {
                                dispatchedErrors.push(err);
                                setTimeout(function() {
                                    throw err;
                                }, 1);
                                for (var j = 0; j < possiblyUnhandledPromiseHandlers.length; j++) possiblyUnhandledPromiseHandlers[j](err, promise);
                            }
                        }(error, _this2);
                    }, 1);
                    this.dispatch();
                    return this;
                };
                ZalgoPromise.prototype.asyncReject = function(error) {
                    this.errorHandled = !0;
                    this.reject(error);
                    return this;
                };
                ZalgoPromise.prototype.dispatch = function() {
                    var _this3 = this, dispatching = this.dispatching, resolved = this.resolved, rejected = this.rejected, handlers = this.handlers;
                    if (!dispatching && (resolved || rejected)) {
                        this.dispatching = !0;
                        startActive();
                        for (var _loop = function(i) {
                            var _handlers$i = handlers[i], onSuccess = _handlers$i.onSuccess, onError = _handlers$i.onError, promise = _handlers$i.promise, result = void 0;
                            if (resolved) try {
                                result = onSuccess ? onSuccess(_this3.value) : _this3.value;
                            } catch (err) {
                                promise.reject(err);
                                return "continue";
                            } else if (rejected) {
                                if (!onError) {
                                    promise.reject(_this3.error);
                                    return "continue";
                                }
                                try {
                                    result = onError(_this3.error);
                                } catch (err) {
                                    promise.reject(err);
                                    return "continue";
                                }
                            }
                            if (result instanceof ZalgoPromise && (result.resolved || result.rejected)) {
                                result.resolved ? promise.resolve(result.value) : promise.reject(result.error);
                                result.errorHandled = !0;
                            } else utils_isPromise(result) ? result instanceof ZalgoPromise && (result.resolved || result.rejected) ? result.resolved ? promise.resolve(result.value) : promise.reject(result.error) : result.then(function(res) {
                                promise.resolve(res);
                            }, function(err) {
                                promise.reject(err);
                            }) : promise.resolve(result);
                        }, i = 0; i < handlers.length; i++) _loop(i);
                        handlers.length = 0;
                        this.dispatching = !1;
                        endActive();
                    }
                };
                ZalgoPromise.prototype.then = function(onSuccess, onError) {
                    if (onSuccess && "function" != typeof onSuccess && !onSuccess.call) throw new Error("Promise.then expected a function for success handler");
                    if (onError && "function" != typeof onError && !onError.call) throw new Error("Promise.then expected a function for error handler");
                    var promise = new ZalgoPromise();
                    this.handlers.push({
                        promise: promise,
                        onSuccess: onSuccess,
                        onError: onError
                    });
                    this.errorHandled = !0;
                    this.dispatch();
                    return promise;
                };
                ZalgoPromise.prototype.catch = function(onError) {
                    return this.then(void 0, onError);
                };
                ZalgoPromise.prototype.finally = function(onFinally) {
                    if (onFinally && "function" != typeof onFinally && !onFinally.call) throw new Error("Promise.finally expected a function");
                    return this.then(function(result) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            return result;
                        });
                    }, function(err) {
                        return ZalgoPromise.try(onFinally).then(function() {
                            throw err;
                        });
                    });
                };
                ZalgoPromise.prototype.timeout = function(time, err) {
                    var _this4 = this;
                    if (this.resolved || this.rejected) return this;
                    var timeout = setTimeout(function() {
                        _this4.resolved || _this4.rejected || _this4.reject(err || new Error("Promise timed out after " + time + "ms"));
                    }, time);
                    return this.then(function(result) {
                        clearTimeout(timeout);
                        return result;
                    });
                };
                ZalgoPromise.prototype.toPromise = function() {
                    if ("undefined" == typeof Promise) throw new TypeError("Could not find Promise");
                    return Promise.resolve(this);
                };
                ZalgoPromise.resolve = function(value) {
                    return value instanceof ZalgoPromise ? value : utils_isPromise(value) ? new ZalgoPromise(function(resolve, reject) {
                        return value.then(resolve, reject);
                    }) : new ZalgoPromise().resolve(value);
                };
                ZalgoPromise.reject = function(error) {
                    return new ZalgoPromise().reject(error);
                };
                ZalgoPromise.asyncReject = function(error) {
                    return new ZalgoPromise().asyncReject(error);
                };
                ZalgoPromise.all = function(promises) {
                    var promise = new ZalgoPromise(), count = promises.length, results = [];
                    if (!count) {
                        promise.resolve(results);
                        return promise;
                    }
                    for (var _loop2 = function(i) {
                        var prom = promises[i];
                        if (prom instanceof ZalgoPromise) {
                            if (prom.resolved) {
                                results[i] = prom.value;
                                count -= 1;
                                return "continue";
                            }
                        } else if (!utils_isPromise(prom)) {
                            results[i] = prom;
                            count -= 1;
                            return "continue";
                        }
                        ZalgoPromise.resolve(prom).then(function(result) {
                            results[i] = result;
                            0 == (count -= 1) && promise.resolve(results);
                        }, function(err) {
                            promise.reject(err);
                        });
                    }, i = 0; i < promises.length; i++) _loop2(i);
                    0 === count && promise.resolve(results);
                    return promise;
                };
                ZalgoPromise.hash = function(promises) {
                    var result = {};
                    return ZalgoPromise.all(Object.keys(promises).map(function(key) {
                        return ZalgoPromise.resolve(promises[key]).then(function(value) {
                            result[key] = value;
                        });
                    })).then(function() {
                        return result;
                    });
                };
                ZalgoPromise.map = function(items, method) {
                    return ZalgoPromise.all(items.map(method));
                };
                ZalgoPromise.onPossiblyUnhandledException = function(handler) {
                    return function(handler) {
                        possiblyUnhandledPromiseHandlers.push(handler);
                        return {
                            cancel: function() {
                                possiblyUnhandledPromiseHandlers.splice(possiblyUnhandledPromiseHandlers.indexOf(handler), 1);
                            }
                        };
                    }(handler);
                };
                ZalgoPromise.try = function(method, context, args) {
                    if (method && "function" != typeof method && !method.call) throw new Error("Promise.try expected a function");
                    var result = void 0;
                    startActive();
                    try {
                        result = method.apply(context, args || []);
                    } catch (err) {
                        endActive();
                        return ZalgoPromise.reject(err);
                    }
                    endActive();
                    return ZalgoPromise.resolve(result);
                };
                ZalgoPromise.delay = function(_delay) {
                    return new ZalgoPromise(function(resolve) {
                        setTimeout(resolve, _delay);
                    });
                };
                ZalgoPromise.isPromise = function(value) {
                    return !!(value && value instanceof ZalgoPromise) || utils_isPromise(value);
                };
                ZalgoPromise.flush = function() {
                    return function(Zalgo) {
                        var promise = flushPromise = flushPromise || new ZalgoPromise();
                        flushActive();
                        return promise;
                    }();
                };
                return ZalgoPromise;
            }();
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return promise_ZalgoPromise;
            });
        },
        "./src/bridge/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), cross_domain_utils_src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), belter_src = __webpack_require__("./node_modules/belter/src/index.js"), conf = __webpack_require__("./src/conf/index.js"), global = __webpack_require__("./src/global.js"), tunnelWindows = Object(global.b)("tunnelWindows");
            global.a.openTunnelToParent = function(_ref2) {
                var name = _ref2.name, source = _ref2.source, canary = _ref2.canary, sendMessage = _ref2.sendMessage, parentWindow = Object(cross_domain_utils_src.h)(window);
                if (!parentWindow) throw new Error("No parent window found to open tunnel to");
                var id = function(_ref) {
                    var name = _ref.name, source = _ref.source, canary = _ref.canary, sendMessage = _ref.sendMessage;
                    !function() {
                        for (var _i2 = 0, _tunnelWindows$keys2 = tunnelWindows.keys(), _length2 = null == _tunnelWindows$keys2 ? 0 : _tunnelWindows$keys2.length; _i2 < _length2; _i2++) {
                            var key = _tunnelWindows$keys2[_i2], tunnelWindow = tunnelWindows[key];
                            try {
                                Object(belter_src.e)(tunnelWindow.source);
                            } catch (err) {
                                tunnelWindows.del(key);
                                continue;
                            }
                            Object(cross_domain_utils_src.p)(tunnelWindow.source) && tunnelWindows.del(key);
                        }
                    }();
                    var id = Object(belter_src.i)();
                    tunnelWindows.set(id, {
                        name: name,
                        source: source,
                        canary: canary,
                        sendMessage: sendMessage
                    });
                    return id;
                }({
                    name: name,
                    source: source,
                    canary: canary,
                    sendMessage: sendMessage
                });
                return global.a.send(parentWindow, conf.d.OPEN_TUNNEL, {
                    name: name,
                    sendMessage: function() {
                        var tunnelWindow = tunnelWindows.get(id);
                        try {
                            Object(belter_src.e)(tunnelWindow && tunnelWindow.source);
                        } catch (err) {
                            tunnelWindows.del(id);
                            return;
                        }
                        if (tunnelWindow && tunnelWindow.source && !Object(cross_domain_utils_src.p)(tunnelWindow.source)) {
                            try {
                                tunnelWindow.canary();
                            } catch (err) {
                                return;
                            }
                            tunnelWindow.sendMessage.apply(this, arguments);
                        }
                    }
                }, {
                    domain: conf.i
                });
            };
            function needsBridgeForBrowser() {
                return !!Object(cross_domain_utils_src.i)(window).match(/MSIE|trident|edge\/12|edge\/13/i);
            }
            function needsBridgeForWin(win) {
                return !Object(cross_domain_utils_src.n)(window, win);
            }
            function needsBridgeForDomain(domain, win) {
                if (domain) {
                    if (Object(cross_domain_utils_src.d)() !== Object(cross_domain_utils_src.e)(domain)) return !0;
                } else if (win && !Object(cross_domain_utils_src.m)(win)) return !0;
                return !1;
            }
            function needsBridge(_ref) {
                var win = _ref.win, domain = _ref.domain;
                return !(!needsBridgeForBrowser() || domain && !needsBridgeForDomain(domain, win) || win && !needsBridgeForWin(win));
            }
            function getBridgeName(domain) {
                var sanitizedDomain = (domain = domain || Object(cross_domain_utils_src.e)(domain)).replace(/[^a-zA-Z0-9]+/g, "_");
                return conf.a + "_" + sanitizedDomain;
            }
            function isBridge() {
                return Boolean(window.name && window.name === getBridgeName(Object(cross_domain_utils_src.d)()));
            }
            var documentBodyReady = new src.a(function(resolve) {
                if (window.document && window.document.body) return resolve(window.document.body);
                var interval = setInterval(function() {
                    if (window.document && window.document.body) {
                        clearInterval(interval);
                        return resolve(window.document.body);
                    }
                }, 10);
            }), remoteWindows = Object(global.c)("remoteWindows");
            function registerRemoteWindow(win) {
                remoteWindows.getOrSet(win, function() {
                    return new src.a();
                });
            }
            function findRemoteWindow(win) {
                var remoteWin = remoteWindows.get(win);
                if (!remoteWin) throw new Error("Remote window not found");
                return remoteWin;
            }
            function registerRemoteSendMessage(win, domain, sendMessage) {
                findRemoteWindow(win).resolve(function(remoteWin, remoteDomain, message) {
                    if (remoteWin !== win) throw new Error("Remote window does not match window");
                    if (!Object(cross_domain_utils_src.r)(remoteDomain, domain)) throw new Error("Remote domain " + remoteDomain + " does not match domain " + domain);
                    sendMessage(message);
                });
            }
            function rejectRemoteSendMessage(win, err) {
                findRemoteWindow(win).reject(err).catch(belter_src.e);
            }
            function sendBridgeMessage(win, domain, message) {
                var messagingChild = Object(cross_domain_utils_src.l)(window, win), messagingParent = Object(cross_domain_utils_src.l)(win, window);
                if (!messagingChild && !messagingParent) throw new Error("Can only send messages to and from parent and popup windows");
                return findRemoteWindow(win).then(function(sendMessage) {
                    return sendMessage(win, domain, message);
                });
            }
            var awaitRemoteBridgeForWindow = Object(belter_src.j)(function(win) {
                return src.a.try(function() {
                    try {
                        var frame = Object(cross_domain_utils_src.f)(win, getBridgeName(Object(cross_domain_utils_src.d)()));
                        if (!frame) return;
                        return Object(cross_domain_utils_src.m)(frame) && frame[conf.j.POSTROBOT] ? frame : new src.a(function(resolve) {
                            var interval = void 0, timeout = void 0;
                            interval = setInterval(function() {
                                if (frame && Object(cross_domain_utils_src.m)(frame) && frame[conf.j.POSTROBOT]) {
                                    clearInterval(interval);
                                    clearTimeout(timeout);
                                    return resolve(frame);
                                }
                            }, 100);
                            timeout = setTimeout(function() {
                                clearInterval(interval);
                                return resolve();
                            }, 2e3);
                        });
                    } catch (err) {}
                });
            });
            function openTunnelToOpener() {
                return src.a.try(function() {
                    var opener = Object(cross_domain_utils_src.g)(window);
                    if (opener && needsBridge({
                        win: opener
                    })) {
                        registerRemoteWindow(opener);
                        return awaitRemoteBridgeForWindow(opener).then(function(bridge) {
                            return bridge ? window.name ? bridge[conf.j.POSTROBOT].openTunnelToParent({
                                name: window.name,
                                source: window,
                                canary: function() {},
                                sendMessage: function(message) {
                                    try {
                                        Object(belter_src.e)(window);
                                    } catch (err) {
                                        return;
                                    }
                                    if (window && !window.closed) try {
                                        global.a.receiveMessage({
                                            data: message,
                                            origin: this.origin,
                                            source: this.source
                                        });
                                    } catch (err) {
                                        src.a.reject(err);
                                    }
                                }
                            }).then(function(_ref) {
                                var source = _ref.source, origin = _ref.origin, data = _ref.data;
                                if (source !== opener) throw new Error("Source does not match opener");
                                registerRemoteSendMessage(source, origin, data.sendMessage);
                            }).catch(function(err) {
                                rejectRemoteSendMessage(opener, err);
                                throw err;
                            }) : rejectRemoteSendMessage(opener, new Error("Can not register with opener: window does not have a name")) : rejectRemoteSendMessage(opener, new Error("Can not register with opener: no bridge found in opener"));
                        });
                    }
                });
            }
            var lib = __webpack_require__("./src/lib/index.js"), bridges = Object(global.b)("bridges"), bridgeFrames = Object(global.b)("bridgeFrames"), popupWindowsByName = Object(global.b)("popupWindowsByName"), popupWindowsByWin = Object(global.c)("popupWindowsByWin");
            function hasBridge(url, domain) {
                return bridges.has(domain || Object(cross_domain_utils_src.e)(url));
            }
            function openBridge(url, domain) {
                domain = domain || Object(cross_domain_utils_src.e)(url);
                return bridges.getOrSet(domain, function() {
                    return src.a.try(function() {
                        if (Object(cross_domain_utils_src.d)() === domain) throw new Error("Can not open bridge on the same domain as current domain: " + domain);
                        var name = getBridgeName(domain);
                        if (Object(cross_domain_utils_src.f)(window, name)) throw new Error("Frame with name " + name + " already exists on page");
                        var iframe = function(name, url) {
                            var iframe = document.createElement("iframe");
                            iframe.setAttribute("name", name);
                            iframe.setAttribute("id", name);
                            iframe.setAttribute("style", "display: none; margin: 0; padding: 0; border: 0px none; overflow: hidden;");
                            iframe.setAttribute("frameborder", "0");
                            iframe.setAttribute("border", "0");
                            iframe.setAttribute("scrolling", "no");
                            iframe.setAttribute("allowTransparency", "true");
                            iframe.setAttribute("tabindex", "-1");
                            iframe.setAttribute("hidden", "true");
                            iframe.setAttribute("title", "");
                            iframe.setAttribute("role", "presentation");
                            iframe.src = url;
                            return iframe;
                        }(name, url);
                        bridgeFrames.set(domain, iframe);
                        return documentBodyReady.then(function(body) {
                            body.appendChild(iframe);
                            var bridge = iframe.contentWindow;
                            !function(source, domain) {
                                global.a.on(conf.d.OPEN_TUNNEL, {
                                    window: source,
                                    domain: domain
                                }, function(_ref) {
                                    var origin = _ref.origin, data = _ref.data;
                                    if (origin !== domain) throw new Error("Domain " + domain + " does not match origin " + origin);
                                    if (!data.name) throw new Error("Register window expected to be passed window name");
                                    if (!data.sendMessage) throw new Error("Register window expected to be passed sendMessage method");
                                    if (!popupWindowsByName.has(data.name)) throw new Error("Window with name " + data.name + " does not exist, or was not opened by this window");
                                    if (!popupWindowsByName.get(data.name).domain) throw new Error("We do not have a registered domain for window " + data.name);
                                    if (popupWindowsByName.get(data.name).domain !== origin) throw new Error("Message origin " + origin + " does not matched registered window origin " + popupWindowsByName.get(data.name).domain);
                                    registerRemoteSendMessage(popupWindowsByName.get(data.name).win, domain, data.sendMessage);
                                    return {
                                        sendMessage: function(message) {
                                            if (window && !window.closed) {
                                                var winDetails = popupWindowsByName.get(data.name);
                                                if (winDetails) try {
                                                    global.a.receiveMessage({
                                                        data: message,
                                                        origin: winDetails.domain,
                                                        source: winDetails.win
                                                    });
                                                } catch (err) {
                                                    src.a.reject(err);
                                                }
                                            }
                                        }
                                    };
                                });
                            }(bridge, domain);
                            return new src.a(function(resolve, reject) {
                                iframe.onload = resolve;
                                iframe.onerror = reject;
                            }).then(function() {
                                return Object(lib.a)(bridge, conf.b.BRIDGE_TIMEOUT, "Bridge " + url);
                            }).then(function() {
                                return bridge;
                            });
                        });
                    });
                });
            }
            function linkWindow(_ref2) {
                for (var win = _ref2.win, name = _ref2.name, domain = _ref2.domain, _i2 = 0, _popupWindowsByName$k2 = popupWindowsByName.keys(), _length2 = null == _popupWindowsByName$k2 ? 0 : _popupWindowsByName$k2.length; _i2 < _length2; _i2++) {
                    var winName = _popupWindowsByName$k2[_i2];
                    Object(cross_domain_utils_src.p)(popupWindowsByName.get(winName).win) && popupWindowsByName.del(winName);
                }
                var details = popupWindowsByWin.getOrSet(win, function() {
                    return name ? popupWindowsByName.getOrSet(name, function() {
                        return {
                            win: win,
                            name: name
                        };
                    }) : {
                        win: win
                    };
                });
                if (details.win && details.win !== win) throw new Error("Different window already linked for window: " + (name || "undefined"));
                if (name) {
                    if (details.name && details.name !== name) throw new Error("Different window already linked for name " + name + ": " + details.name);
                    details.name = name;
                    popupWindowsByName.set(name, details);
                }
                if (domain) {
                    details.domain = domain;
                    registerRemoteWindow(win);
                }
                popupWindowsByWin.set(win, details);
                return details;
            }
            function linkUrl(win, url) {
                linkWindow({
                    win: win,
                    domain: Object(cross_domain_utils_src.e)(url)
                });
            }
            var windowOpen = window.open;
            window.open = function(url, name, options, last) {
                var win = windowOpen.call(this, Object(cross_domain_utils_src.s)(url), name, options, last);
                if (!win) return win;
                linkWindow({
                    win: win,
                    name: name,
                    domain: url ? Object(cross_domain_utils_src.e)(url) : null
                });
                return win;
            };
            function destroyBridges() {
                for (var _i4 = 0, _bridgeFrames$keys2 = bridgeFrames.keys(), _length4 = null == _bridgeFrames$keys2 ? 0 : _bridgeFrames$keys2.length; _i4 < _length4; _i4++) {
                    var _domain = _bridgeFrames$keys2[_i4], frame = bridgeFrames.get(_domain);
                    frame && frame.parentNode && frame.parentNode.removeChild(frame);
                }
                bridgeFrames.reset();
                bridges.reset();
            }
            __webpack_require__.d(__webpack_exports__, "openTunnelToOpener", function() {
                return openTunnelToOpener;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForBrowser", function() {
                return needsBridgeForBrowser;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForWin", function() {
                return needsBridgeForWin;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForDomain", function() {
                return needsBridgeForDomain;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridge", function() {
                return needsBridge;
            });
            __webpack_require__.d(__webpack_exports__, "getBridgeName", function() {
                return getBridgeName;
            });
            __webpack_require__.d(__webpack_exports__, "isBridge", function() {
                return isBridge;
            });
            __webpack_require__.d(__webpack_exports__, "documentBodyReady", function() {
                return documentBodyReady;
            });
            __webpack_require__.d(__webpack_exports__, "registerRemoteWindow", function() {
                return registerRemoteWindow;
            });
            __webpack_require__.d(__webpack_exports__, "findRemoteWindow", function() {
                return findRemoteWindow;
            });
            __webpack_require__.d(__webpack_exports__, "registerRemoteSendMessage", function() {
                return registerRemoteSendMessage;
            });
            __webpack_require__.d(__webpack_exports__, "rejectRemoteSendMessage", function() {
                return rejectRemoteSendMessage;
            });
            __webpack_require__.d(__webpack_exports__, "sendBridgeMessage", function() {
                return sendBridgeMessage;
            });
            __webpack_require__.d(__webpack_exports__, "hasBridge", function() {
                return hasBridge;
            });
            __webpack_require__.d(__webpack_exports__, "openBridge", function() {
                return openBridge;
            });
            __webpack_require__.d(__webpack_exports__, "linkWindow", function() {
                return linkWindow;
            });
            __webpack_require__.d(__webpack_exports__, "linkUrl", function() {
                return linkUrl;
            });
            __webpack_require__.d(__webpack_exports__, "destroyBridges", function() {
                return destroyBridges;
            });
        },
        "./src/bridge/interface.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__("./src/bridge/index.js");
            __webpack_require__.d(__webpack_exports__, "openBridge", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.openBridge;
            });
            __webpack_require__.d(__webpack_exports__, "linkWindow", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.linkWindow;
            });
            __webpack_require__.d(__webpack_exports__, "linkUrl", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.linkUrl;
            });
            __webpack_require__.d(__webpack_exports__, "isBridge", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.isBridge;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridge", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.needsBridge;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForBrowser", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.needsBridgeForBrowser;
            });
            __webpack_require__.d(__webpack_exports__, "hasBridge", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.hasBridge;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForWin", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.needsBridgeForWin;
            });
            __webpack_require__.d(__webpack_exports__, "needsBridgeForDomain", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.needsBridgeForDomain;
            });
            __webpack_require__.d(__webpack_exports__, "openTunnelToOpener", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.openTunnelToOpener;
            });
            __webpack_require__.d(__webpack_exports__, "destroyBridges", function() {
                return __WEBPACK_IMPORTED_MODULE_0__index__.destroyBridges;
            });
        },
        "./src/conf/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var _ALLOWED_POST_MESSAGE, MESSAGE_TYPE = {
                REQUEST: "postrobot_message_request",
                RESPONSE: "postrobot_message_response",
                ACK: "postrobot_message_ack"
            }, MESSAGE_ACK = {
                SUCCESS: "success",
                ERROR: "error"
            }, MESSAGE_NAME = {
                METHOD: "postrobot_method",
                HELLO: "postrobot_hello",
                OPEN_TUNNEL: "postrobot_open_tunnel"
            }, WINDOW_PROP = {
                POSTROBOT: "__postRobot__quiq__"
            }, SEND_STRATEGY = {
                POST_MESSAGE: "postrobot_post_message",
                BRIDGE: "postrobot_bridge",
                GLOBAL: "postrobot_global"
            }, PROTOCOL = {
                MOCK: "mock:",
                FILE: "file:"
            }, SERIALIZATION_TYPE = {
                CROSS_DOMAIN_ZALGO_PROMISE: "cross_domain_zalgo_promise",
                CROSS_DOMAIN_FUNCTION: "cross_domain_function",
                CROSS_DOMAIN_WINDOW: "cross_domain_window"
            }, CONFIG = {
                BRIDGE_TIMEOUT: 5e3,
                CHILD_WINDOW_TIMEOUT: 5e3,
                ACK_TIMEOUT: 2e3,
                ACK_TIMEOUT_KNOWN: 1e4,
                RES_TIMEOUT: -1,
                ALLOWED_POST_MESSAGE_METHODS: (_ALLOWED_POST_MESSAGE = {}, _ALLOWED_POST_MESSAGE[SEND_STRATEGY.POST_MESSAGE] = !0, 
                _ALLOWED_POST_MESSAGE[SEND_STRATEGY.BRIDGE] = !0, _ALLOWED_POST_MESSAGE[SEND_STRATEGY.GLOBAL] = !0, 
                _ALLOWED_POST_MESSAGE)
            };
            __webpack_require__.d(__webpack_exports__, "b", function() {
                return CONFIG;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
                return MESSAGE_TYPE;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
                return MESSAGE_ACK;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
                return MESSAGE_NAME;
            });
            __webpack_require__.d(__webpack_exports__, "j", function() {
                return WINDOW_PROP;
            });
            __webpack_require__.d(__webpack_exports__, "g", function() {
                return SEND_STRATEGY;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
                return PROTOCOL;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return "__postrobot_bridge__";
            });
            __webpack_require__.d(__webpack_exports__, !1, function() {
                return "__postrobot_proxy__";
            });
            __webpack_require__.d(__webpack_exports__, "i", function() {
                return "*";
            });
            __webpack_require__.d(__webpack_exports__, "h", function() {
                return SERIALIZATION_TYPE;
            });
        },
        "./src/global.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return global;
            });
            __webpack_exports__.c = function(key) {
                var defStore = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : getObj;
                function getStore(win) {
                    return winStore.getOrSet(win, defStore);
                }
                return {
                    has: function(win) {
                        return getStore(win).hasOwnProperty(key);
                    },
                    get: function(win, defVal) {
                        var store = getStore(win);
                        return store.hasOwnProperty(key) ? store[key] : defVal;
                    },
                    set: function(win, val) {
                        getStore(win)[key] = val;
                        return val;
                    },
                    del: function(win) {
                        delete getStore(win)[key];
                    },
                    getOrSet: function(win, getter) {
                        var store = getStore(win);
                        if (store.hasOwnProperty(key)) return store[key];
                        var val = getter();
                        store[key] = val;
                        return val;
                    }
                };
            };
            __webpack_exports__.b = function(key) {
                var defStore = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : getObj, store = Object(__WEBPACK_IMPORTED_MODULE_2_belter_src__.b)(global, key, defStore);
                return {
                    has: function(storeKey) {
                        return store.hasOwnProperty(storeKey);
                    },
                    get: function(storeKey, defVal) {
                        return store.hasOwnProperty(storeKey) ? store[storeKey] : defVal;
                    },
                    set: function(storeKey, val) {
                        store[storeKey] = val;
                        return val;
                    },
                    del: function(storeKey) {
                        delete store[storeKey];
                    },
                    getOrSet: function(storeKey, getter) {
                        if (store.hasOwnProperty(storeKey)) return store[storeKey];
                        var val = getter();
                        store[storeKey] = val;
                        return val;
                    },
                    reset: function() {
                        store = defStore();
                    },
                    keys: function() {
                        return Object.keys(store);
                    }
                };
            };
            __webpack_require__("./node_modules/cross-domain-utils/src/index.js");
            var __WEBPACK_IMPORTED_MODULE_1_cross_domain_safe_weakmap_src__ = __webpack_require__("./node_modules/cross-domain-safe-weakmap/src/index.js"), __WEBPACK_IMPORTED_MODULE_2_belter_src__ = __webpack_require__("./node_modules/belter/src/index.js"), __WEBPACK_IMPORTED_MODULE_3__conf__ = __webpack_require__("./src/conf/index.js"), global = window[__WEBPACK_IMPORTED_MODULE_3__conf__.j.POSTROBOT] = window[__WEBPACK_IMPORTED_MODULE_3__conf__.j.POSTROBOT] || {}, winStore = global.windowStore = global.windowStore || new __WEBPACK_IMPORTED_MODULE_1_cross_domain_safe_weakmap_src__.a(), getObj = function() {
                return {};
            };
        },
        "./src/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", {
                value: !0
            });
            var interface_namespaceObject = {};
            __webpack_require__.d(interface_namespaceObject, "markWindowKnown", function() {
                return lib.e;
            });
            __webpack_require__.d(interface_namespaceObject, "serializeMessage", function() {
                return serializeMessage;
            });
            __webpack_require__.d(interface_namespaceObject, "deserializeMessage", function() {
                return deserializeMessage;
            });
            __webpack_require__.d(interface_namespaceObject, "ProxyWindow", function() {
                return window_ProxyWindow;
            });
            __webpack_require__.d(interface_namespaceObject, "cleanUpWindow", function() {
                return cleanUpWindow;
            });
            __webpack_require__.d(interface_namespaceObject, "Promise", function() {
                return zalgo_promise_src.a;
            });
            __webpack_require__.d(interface_namespaceObject, "bridge", function() {
                return bridge;
            });
            __webpack_require__.d(interface_namespaceObject, "parent", function() {
                return public_parent;
            });
            __webpack_require__.d(interface_namespaceObject, "send", function() {
                return _send;
            });
            __webpack_require__.d(interface_namespaceObject, "requestPromises", function() {
                return requestPromises;
            });
            __webpack_require__.d(interface_namespaceObject, "request", function() {
                return request;
            });
            __webpack_require__.d(interface_namespaceObject, "sendToParent", function() {
                return sendToParent;
            });
            __webpack_require__.d(interface_namespaceObject, "client", function() {
                return client;
            });
            __webpack_require__.d(interface_namespaceObject, "on", function() {
                return _on;
            });
            __webpack_require__.d(interface_namespaceObject, "listen", function() {
                return listen;
            });
            __webpack_require__.d(interface_namespaceObject, "once", function() {
                return once;
            });
            __webpack_require__.d(interface_namespaceObject, "listener", function() {
                return server_listener;
            });
            __webpack_require__.d(interface_namespaceObject, "CONFIG", function() {
                return conf.b;
            });
            __webpack_require__.d(interface_namespaceObject, "disable", function() {
                return disable;
            });
            var _SERIALIZER, lib = __webpack_require__("./src/lib/index.js"), src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), belter_src = __webpack_require__("./node_modules/belter/src/index.js"), conf = __webpack_require__("./src/conf/index.js"), TYPE = {
                FUNCTION: "function",
                ERROR: "error",
                PROMISE: "promise",
                REGEX: "regex",
                DATE: "date",
                ARRAY: "array",
                OBJECT: "object",
                STRING: "string",
                NUMBER: "number",
                BOOLEAN: "boolean",
                NULL: "null",
                UNDEFINED: "undefined"
            }, _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function isSerializedType(item) {
                return "object" === (void 0 === item ? "undefined" : _typeof(item)) && null !== item && "string" == typeof item.__type__;
            }
            function determineType(val) {
                return void 0 === val ? TYPE.UNDEFINED : null === val ? TYPE.NULL : Array.isArray(val) ? TYPE.ARRAY : "function" == typeof val ? TYPE.FUNCTION : "object" === (void 0 === val ? "undefined" : _typeof(val)) ? val instanceof Error ? TYPE.ERROR : "function" == typeof val.then ? TYPE.PROMISE : "[object RegExp]" === Object.prototype.toString.call(val) ? TYPE.REGEX : "[object Date]" === Object.prototype.toString.call(val) ? TYPE.DATE : TYPE.OBJECT : "string" == typeof val ? TYPE.STRING : "number" == typeof val ? TYPE.NUMBER : "boolean" == typeof val ? TYPE.BOOLEAN : void 0;
            }
            function serializeType(type, val) {
                return {
                    __type__: type,
                    __val__: val
                };
            }
            var _DESERIALIZER, SERIALIZER = ((_SERIALIZER = {})[TYPE.FUNCTION] = function() {}, 
            _SERIALIZER[TYPE.ERROR] = function(_ref) {
                var message = _ref.message, stack = _ref.stack, code = _ref.code;
                return serializeType(TYPE.ERROR, {
                    message: message,
                    stack: stack,
                    code: code
                });
            }, _SERIALIZER[TYPE.PROMISE] = function() {}, _SERIALIZER[TYPE.REGEX] = function(val) {
                return serializeType(TYPE.REGEX, val.source);
            }, _SERIALIZER[TYPE.DATE] = function(val) {
                return serializeType(TYPE.DATE, val.toJSON());
            }, _SERIALIZER[TYPE.ARRAY] = function(val) {
                return val;
            }, _SERIALIZER[TYPE.OBJECT] = function(val) {
                return val;
            }, _SERIALIZER[TYPE.STRING] = function(val) {
                return val;
            }, _SERIALIZER[TYPE.NUMBER] = function(val) {
                return val;
            }, _SERIALIZER[TYPE.BOOLEAN] = function(val) {
                return val;
            }, _SERIALIZER[TYPE.NULL] = function(val) {
                return val;
            }, _SERIALIZER), defaultSerializers = {}, DESERIALIZER = ((_DESERIALIZER = {})[TYPE.FUNCTION] = function() {
                throw new Error("Function serialization is not implemented; nothing to deserialize");
            }, _DESERIALIZER[TYPE.ERROR] = function(_ref2) {
                var message = _ref2.message, stack = _ref2.stack, code = _ref2.code, error = new Error(message);
                error.code = code;
                error.stack = stack + "\n\n" + error.stack;
                return error;
            }, _DESERIALIZER[TYPE.PROMISE] = function() {
                throw new Error("Promise serialization is not implemented; nothing to deserialize");
            }, _DESERIALIZER[TYPE.REGEX] = function(val) {
                return new RegExp(val);
            }, _DESERIALIZER[TYPE.DATE] = function(val) {
                return new Date(val);
            }, _DESERIALIZER[TYPE.ARRAY] = function(val) {
                return val;
            }, _DESERIALIZER[TYPE.OBJECT] = function(val) {
                return val;
            }, _DESERIALIZER[TYPE.STRING] = function(val) {
                return val;
            }, _DESERIALIZER[TYPE.NUMBER] = function(val) {
                return val;
            }, _DESERIALIZER[TYPE.BOOLEAN] = function(val) {
                return val;
            }, _DESERIALIZER[TYPE.NULL] = function(val) {
                return val;
            }, _DESERIALIZER), defaultDeserializers = {}, zalgo_promise_src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), global = __webpack_require__("./src/global.js"), winToProxyWindow = Object(global.c)("winToProxyWindow"), idToProxyWindow = Object(global.b)("idToProxyWindow");
            function cleanupProxyWindows() {
                for (var _i2 = 0, _idToProxyWindow$keys2 = idToProxyWindow.keys(), _length2 = null == _idToProxyWindow$keys2 ? 0 : _idToProxyWindow$keys2.length; _i2 < _length2; _i2++) {
                    var _id = _idToProxyWindow$keys2[_i2];
                    idToProxyWindow.get(_id).shouldClean() && idToProxyWindow.del(_id);
                }
            }
            var window_ProxyWindow = function() {
                function ProxyWindow(serializedWindow, actualWindow) {
                    !function(instance, Constructor) {
                        if (!(instance instanceof ProxyWindow)) throw new TypeError("Cannot call a class as a function");
                    }(this);
                    this.isProxyWindow = !0;
                    this.serializedWindow = serializedWindow;
                    this.actualWindowPromise = new zalgo_promise_src.a();
                    actualWindow && this.setWindow(actualWindow);
                    this.serializedWindow.getInstanceID = Object(belter_src.d)(this.serializedWindow.getInstanceID);
                }
                ProxyWindow.prototype.getType = function() {
                    return this.serializedWindow.type;
                };
                ProxyWindow.prototype.isPopup = function() {
                    return this.getType() === src.a.POPUP;
                };
                ProxyWindow.prototype.isIframe = function() {
                    return this.getType() === src.a.IFRAME;
                };
                ProxyWindow.prototype.setLocation = function(href) {
                    var _this = this;
                    return zalgo_promise_src.a.try(function() {
                        if (!_this.actualWindow) return _this.serializedWindow.setLocation(href);
                        _this.actualWindow.location = href;
                    }).then(function() {
                        return _this;
                    });
                };
                ProxyWindow.prototype.setName = function(name) {
                    var _this2 = this;
                    return zalgo_promise_src.a.try(function() {
                        if (!_this2.actualWindow) return _this2.serializedWindow.setName(name);
                        if (!Object(src.m)(_this2.actualWindow)) throw new Error("Can not set name for window on different domain");
                        _this2.actualWindow.name = name;
                        _this2.actualWindow.frameElement && _this2.actualWindow.frameElement.setAttribute("name", name);
                        (0, __webpack_require__("./src/bridge/index.js").linkWindow)({
                            win: _this2.actualWindow,
                            name: name
                        });
                    }).then(function() {
                        return _this2;
                    });
                };
                ProxyWindow.prototype.close = function() {
                    var _this3 = this;
                    return zalgo_promise_src.a.try(function() {
                        if (!_this3.actualWindow) return _this3.serializedWindow.close();
                        _this3.actualWindow.close();
                    }).then(function() {
                        return _this3;
                    });
                };
                ProxyWindow.prototype.focus = function() {
                    var _this4 = this;
                    return zalgo_promise_src.a.try(function() {
                        _this4.actualWindow && _this4.actualWindow.focus();
                        return _this4.serializedWindow.focus();
                    }).then(function() {
                        return _this4;
                    });
                };
                ProxyWindow.prototype.isClosed = function() {
                    var _this5 = this;
                    return zalgo_promise_src.a.try(function() {
                        return _this5.actualWindow ? Object(src.p)(_this5.actualWindow) : _this5.serializedWindow.isClosed();
                    });
                };
                ProxyWindow.prototype.setWindow = function(win) {
                    this.actualWindow = win;
                    this.actualWindowPromise.resolve(win);
                };
                ProxyWindow.prototype.matchWindow = function(win) {
                    var _this6 = this;
                    return zalgo_promise_src.a.try(function() {
                        return _this6.actualWindow ? win === _this6.actualWindow : zalgo_promise_src.a.all([ _this6.getInstanceID(), Object(lib.b)(win) ]).then(function(_ref) {
                            var match = _ref[0] === _ref[1];
                            match && _this6.setWindow(win);
                            return match;
                        });
                    });
                };
                ProxyWindow.prototype.unwrap = function() {
                    return this.actualWindow || this;
                };
                ProxyWindow.prototype.awaitWindow = function() {
                    return this.actualWindowPromise;
                };
                ProxyWindow.prototype.getInstanceID = function() {
                    return this.actualWindow ? Object(lib.b)(this.actualWindow) : this.serializedWindow.getInstanceID();
                };
                ProxyWindow.prototype.serialize = function() {
                    return this.serializedWindow;
                };
                ProxyWindow.prototype.shouldClean = function() {
                    return this.actualWindow && Object(src.p)(this.actualWindow);
                };
                ProxyWindow.unwrap = function(win) {
                    return ProxyWindow.isProxyWindow(win) ? win.unwrap() : win;
                };
                ProxyWindow.serialize = function(win) {
                    cleanupProxyWindows();
                    return ProxyWindow.toProxyWindow(win).serialize();
                };
                ProxyWindow.deserialize = function(serializedWindow) {
                    cleanupProxyWindows();
                    return idToProxyWindow.getOrSet(serializedWindow.id, function() {
                        return new ProxyWindow(serializedWindow);
                    });
                };
                ProxyWindow.isProxyWindow = function(obj) {
                    return Boolean(obj && obj.isProxyWindow);
                };
                ProxyWindow.toProxyWindow = function(win) {
                    cleanupProxyWindows();
                    return ProxyWindow.isProxyWindow(win) ? win : winToProxyWindow.getOrSet(win, function() {
                        var id = Object(belter_src.i)();
                        return idToProxyWindow.set(id, new ProxyWindow({
                            id: id,
                            type: Object(src.g)(win) ? src.a.POPUP : src.a.IFRAME,
                            getInstanceID: function() {
                                return Object(lib.b)(win);
                            },
                            close: function() {
                                return zalgo_promise_src.a.try(function() {
                                    win.close();
                                });
                            },
                            focus: function() {
                                return zalgo_promise_src.a.try(function() {
                                    win.focus();
                                });
                            },
                            isClosed: function() {
                                return zalgo_promise_src.a.try(function() {
                                    return Object(src.p)(win);
                                });
                            },
                            setLocation: function(href) {
                                return zalgo_promise_src.a.try(function() {
                                    if (Object(src.m)(win)) try {
                                        if (win.location && "function" == typeof win.location.replace) {
                                            win.location.replace(href);
                                            return;
                                        }
                                    } catch (err) {}
                                    win.location = href;
                                });
                            },
                            setName: function(name) {
                                return zalgo_promise_src.a.try(function() {
                                    (0, __webpack_require__("./src/bridge/index.js").linkWindow)({
                                        win: win,
                                        name: name
                                    });
                                    win.name = name;
                                });
                            }
                        }, win));
                    });
                };
                return ProxyWindow;
            }(), _extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, methodStore = Object(global.c)("methodStore"), proxyWindowMethods = Object(global.b)("proxyWindowMethods");
            global.a.listeningForFunctions = global.a.listeningForFunctions || !1;
            var listenForFunctionCalls = Object(belter_src.f)(function() {
                if (!global.a.listeningForFunctions) {
                    global.a.listeningForFunctions = !0;
                    global.a.on(conf.d.METHOD, {
                        origin: conf.i
                    }, function(_ref) {
                        var source = _ref.source, origin = _ref.origin, data = _ref.data, id = data.id, name = data.name;
                        return zalgo_promise_src.a.try(function() {
                            var meth = methodStore.getOrSet(source, function() {
                                return {};
                            })[data.id] || proxyWindowMethods.get(id);
                            if (!meth) throw new Error("Could not find method '" + data.name + "' with id: " + data.id + " in " + Object(src.d)(window));
                            var proxy = meth.proxy, domain = meth.domain, val = meth.val;
                            if (!Object(src.r)(domain, origin)) throw new Error("Method '" + data.name + "' domain " + JSON.stringify(meth.domain) + " does not match origin " + origin + " in " + Object(src.d)(window));
                            return proxy ? proxy.matchWindow(source).then(function(match) {
                                if (!match) throw new Error("Method call '" + data.name + "' failed - proxy window does not match source in " + Object(src.d)(window));
                                return val;
                            }) : val;
                        }).then(function(method) {
                            return method.apply({
                                source: source,
                                origin: origin,
                                data: data
                            }, data.args);
                        }).then(function(result) {
                            return {
                                result: result,
                                id: id,
                                name: name
                            };
                        });
                    });
                }
            });
            function function_serializeFunction(destination, domain, val, key) {
                listenForFunctionCalls();
                var id = Object(belter_src.i)();
                destination = window_ProxyWindow.unwrap(destination);
                if (window_ProxyWindow.isProxyWindow(destination)) {
                    proxyWindowMethods.set(id, {
                        proxy: destination,
                        domain: domain,
                        val: val
                    });
                    destination.awaitWindow().then(function(win) {
                        proxyWindowMethods.del(id);
                        methodStore.getOrSet(win, function() {
                            return {};
                        })[id] = {
                            domain: domain,
                            val: val
                        };
                    });
                } else methodStore.getOrSet(destination, function() {
                    return {};
                })[id] = {
                    domain: domain,
                    val: val
                };
                return serializeType(conf.h.CROSS_DOMAIN_FUNCTION, {
                    id: id,
                    name: val.name || key
                });
            }
            function serializeMessage(destination, domain, obj) {
                var _serialize;
                return function(obj) {
                    var serializers = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : defaultSerializers, result = JSON.stringify(obj, function(key) {
                        var val = this[key];
                        if (isSerializedType(this)) return val;
                        var type = determineType(val);
                        if (!type) return val;
                        var serializer = serializers[type] || SERIALIZER[type];
                        return serializer ? serializer(val, key) : val;
                    });
                    return void 0 === result ? TYPE.UNDEFINED : result;
                }(obj, ((_serialize = {})[TYPE.PROMISE] = function(val, key) {
                    return function(destination, domain, val, key) {
                        return serializeType(conf.h.CROSS_DOMAIN_ZALGO_PROMISE, {
                            then: function_serializeFunction(destination, domain, function(resolve, reject) {
                                return val.then(resolve, reject);
                            }, key)
                        });
                    }(destination, domain, val, key);
                }, _serialize[TYPE.FUNCTION] = function(val, key) {
                    return function_serializeFunction(destination, domain, val, key);
                }, _serialize[TYPE.OBJECT] = function(val) {
                    return Object(src.o)(val) || window_ProxyWindow.isProxyWindow(val) ? (win = val, 
                    serializeType(conf.h.CROSS_DOMAIN_WINDOW, window_ProxyWindow.serialize(win))) : val;
                    var win;
                }, _serialize));
            }
            function deserializeMessage(source, origin, message) {
                var _deserialize;
                return function(str) {
                    var deserializers = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : defaultDeserializers;
                    if (str !== TYPE.UNDEFINED) return JSON.parse(str, function(key, val) {
                        if (isSerializedType(this)) return val;
                        var type = void 0, value = void 0;
                        if (isSerializedType(val)) {
                            type = val.__type__;
                            value = val.__val__;
                        } else {
                            type = determineType(val);
                            value = val;
                        }
                        if (!type) return value;
                        var deserializer = deserializers[type] || DESERIALIZER[type];
                        return deserializer ? deserializer(value, key) : value;
                    });
                }(message, ((_deserialize = {})[conf.h.CROSS_DOMAIN_ZALGO_PROMISE] = function(serializedPromise) {
                    return then = serializedPromise.then, new zalgo_promise_src.a(then);
                    var then;
                }, _deserialize[conf.h.CROSS_DOMAIN_FUNCTION] = function(serializedFunction) {
                    return function(source, origin, _ref2) {
                        var id = _ref2.id, name = _ref2.name;
                        function innerWrapper(args) {
                            var opts = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return zalgo_promise_src.a.try(function() {
                                return window_ProxyWindow.isProxyWindow(source) ? source.awaitWindow() : source;
                            }).then(function(win) {
                                return global.a.send(win, conf.d.METHOD, {
                                    id: id,
                                    name: name,
                                    args: args
                                }, _extends({
                                    domain: origin
                                }, opts));
                            }).catch(function(err) {
                                throw err;
                            });
                        }
                        function crossDomainFunctionWrapper() {
                            return innerWrapper(Array.prototype.slice.call(arguments)).then(function(_ref3) {
                                return _ref3.data.result;
                            });
                        }
                        crossDomainFunctionWrapper.fireAndForget = function() {
                            return innerWrapper(Array.prototype.slice.call(arguments), {
                                fireAndForget: !0
                            });
                        };
                        crossDomainFunctionWrapper.__name__ = name;
                        crossDomainFunctionWrapper.__xdomain__ = !0;
                        crossDomainFunctionWrapper.origin = origin;
                        return crossDomainFunctionWrapper;
                    }(source, origin, serializedFunction);
                }, _deserialize[conf.h.CROSS_DOMAIN_WINDOW] = function(serializedWindow) {
                    return win = serializedWindow, window_ProxyWindow.deserialize(win);
                    var win;
                }, _deserialize));
            }
            var SEND_MESSAGE_STRATEGIES = {};
            SEND_MESSAGE_STRATEGIES[conf.g.POST_MESSAGE] = function(win, serializedMessage, domain) {
                (Array.isArray(domain) ? domain : "string" == typeof domain ? [ domain ] : [ conf.i ]).map(function(dom) {
                    if (0 === dom.indexOf(conf.f.MOCK)) {
                        if (window.location.protocol === conf.f.FILE) return conf.i;
                        if (!Object(src.j)(win)) throw new Error("Attempting to send messsage to mock domain " + dom + ", but window is actually cross-domain");
                        return Object(src.b)(win);
                    }
                    return 0 === dom.indexOf(conf.f.FILE) ? conf.i : dom;
                }).forEach(function(dom) {
                    return win.postMessage(serializedMessage, dom);
                });
            };
            var strategies__require = __webpack_require__("./src/bridge/index.js"), sendBridgeMessage = strategies__require.sendBridgeMessage, needsBridgeForBrowser = strategies__require.needsBridgeForBrowser, isBridge = strategies__require.isBridge;
            SEND_MESSAGE_STRATEGIES[conf.g.BRIDGE] = function(win, serializedMessage, domain) {
                if (needsBridgeForBrowser() || isBridge()) {
                    if (Object(src.m)(win)) throw new Error("Post message through bridge disabled between same domain windows");
                    if (!1 !== Object(src.n)(window, win)) throw new Error("Can only use bridge to communicate between two different windows, not between frames");
                    return sendBridgeMessage(win, domain, serializedMessage);
                }
            };
            SEND_MESSAGE_STRATEGIES[conf.g.GLOBAL] = function(win, serializedMessage) {
                if (Object(lib.f)()) {
                    if (!Object(src.m)(win)) throw new Error("Post message through global disabled between different domain windows");
                    if (!1 !== Object(src.n)(window, win)) throw new Error("Can only use global to communicate between two different windows, not between frames");
                    var foreignGlobal = win[conf.j.POSTROBOT];
                    if (!foreignGlobal) throw new Error("Can not find postRobot global on foreign window");
                    return foreignGlobal.receiveMessage({
                        source: window,
                        origin: Object(src.d)(),
                        data: serializedMessage
                    });
                }
            };
            var send__extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            };
            function sendMessage(win, domain, message) {
                return zalgo_promise_src.a.try(function() {
                    var _serializeMessage;
                    if (Object(src.p)(win)) throw new Error("Window is closed");
                    var serializedMessage = serializeMessage(win, domain, ((_serializeMessage = {})[conf.j.POSTROBOT] = send__extends({
                        id: Object(belter_src.i)()
                    }, message), _serializeMessage)), messages = [];
                    return zalgo_promise_src.a.map(Object.keys(SEND_MESSAGE_STRATEGIES), function(strategyName) {
                        return zalgo_promise_src.a.try(function() {
                            if (!conf.b.ALLOWED_POST_MESSAGE_METHODS[strategyName]) throw new Error("Strategy disallowed: " + strategyName);
                            return SEND_MESSAGE_STRATEGIES[strategyName](win, serializedMessage, domain);
                        }).then(function() {
                            messages.push(strategyName + ": success");
                            return !0;
                        }, function(err) {
                            messages.push(strategyName + ": " + Object(belter_src.h)(err) + "\n");
                            return !1;
                        });
                    }).then(function(results) {
                        var success = results.some(Boolean), status = message.type + " " + message.name + " " + (success ? "success" : "error") + ":\n  - " + messages.join("\n  - ") + "\n";
                        if (!success) throw new Error(status);
                    });
                });
            }
            var responseListeners = Object(global.b)("responseListeners"), requestListeners = Object(global.c)("requestListeners"), erroredResponseListeners = Object(global.b)("erroredResponseListeners");
            global.a.WINDOW_WILDCARD = global.a.WINDOW_WILDCARD || new function() {}();
            var _RECEIVE_MESSAGE_TYPE, __DOMAIN_REGEX__ = "__domain_regex__";
            function getResponseListener(hash) {
                return responseListeners.get(hash);
            }
            function deleteResponseListener(hash) {
                responseListeners.del(hash);
            }
            function isResponseListenerErrored(hash) {
                return erroredResponseListeners.has(hash);
            }
            function getRequestListener(_ref) {
                var name = _ref.name, win = _ref.win, domain = _ref.domain;
                win === conf.i && (win = null);
                domain === conf.i && (domain = null);
                if (!name) throw new Error("Name required to get request listener");
                for (var _i2 = 0, _ref3 = [ win, global.a.WINDOW_WILDCARD ], _length2 = null == _ref3 ? 0 : _ref3.length; _i2 < _length2; _i2++) {
                    var winQualifier = _ref3[_i2];
                    if (winQualifier) {
                        var nameListeners = requestListeners.get(winQualifier);
                        if (nameListeners) {
                            var domainListeners = nameListeners[name];
                            if (domainListeners) {
                                if (domain && "string" == typeof domain) {
                                    if (domainListeners[domain]) return domainListeners[domain];
                                    if (domainListeners[__DOMAIN_REGEX__]) for (var _i4 = 0, _domainListeners$__DO2 = domainListeners[__DOMAIN_REGEX__], _length4 = null == _domainListeners$__DO2 ? 0 : _domainListeners$__DO2.length; _i4 < _length4; _i4++) {
                                        var _ref5 = _domainListeners$__DO2[_i4], regex = _ref5.regex, listener = _ref5.listener;
                                        if (Object(src.r)(regex, domain)) return listener;
                                    }
                                }
                                if (domainListeners[conf.i]) return domainListeners[conf.i];
                            }
                        }
                    }
                }
            }
            var types__extends = Object.assign || function(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                }
                return target;
            }, RECEIVE_MESSAGE_TYPES = ((_RECEIVE_MESSAGE_TYPE = {})[conf.e.REQUEST] = function(source, origin, message) {
                var options = getRequestListener({
                    name: message.name,
                    win: source,
                    domain: origin
                });
                function sendResponse(type) {
                    var data = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return message.fireAndForget || Object(src.p)(source) ? zalgo_promise_src.a.resolve() : sendMessage(source, origin, types__extends({
                        type: type,
                        hash: message.hash,
                        name: message.name
                    }, data));
                }
                return zalgo_promise_src.a.all([ sendResponse(conf.e.ACK), zalgo_promise_src.a.try(function() {
                    if (!options) throw new Error("No handler found for post message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!Object(src.r)(options.domain, origin)) throw new Error("Request origin " + origin + " does not match domain " + options.domain.toString());
                    var data = message.data;
                    return options.handler({
                        source: source,
                        origin: origin,
                        data: data
                    });
                }).then(function(data) {
                    return sendResponse(conf.e.RESPONSE, {
                        ack: conf.c.SUCCESS,
                        data: data
                    });
                }, function(error) {
                    return sendResponse(conf.e.RESPONSE, {
                        ack: conf.c.ERROR,
                        error: error
                    });
                }) ]).then(belter_src.e).catch(function(err) {
                    if (options && options.handleError) return options.handleError(err);
                    throw err;
                });
            }, _RECEIVE_MESSAGE_TYPE[conf.e.ACK] = function(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message ack for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!Object(src.r)(options.domain, origin)) throw new Error("Ack origin " + origin + " does not match domain " + options.domain.toString());
                    options.ack = !0;
                }
            }, _RECEIVE_MESSAGE_TYPE[conf.e.RESPONSE] = function(source, origin, message) {
                if (!isResponseListenerErrored(message.hash)) {
                    var options = getResponseListener(message.hash);
                    if (!options) throw new Error("No handler found for post message response for message: " + message.name + " from " + origin + " in " + window.location.protocol + "//" + window.location.host + window.location.pathname);
                    if (!Object(src.r)(options.domain, origin)) throw new Error("Response origin " + origin + " does not match domain " + Object(src.t)(options.domain));
                    deleteResponseListener(message.hash);
                    if (message.ack === conf.c.ERROR) return options.respond(message.error, null);
                    if (message.ack === conf.c.SUCCESS) {
                        var data = message.data;
                        return options.respond(null, {
                            source: source,
                            origin: origin,
                            data: data
                        });
                    }
                }
            }, _RECEIVE_MESSAGE_TYPE), receive__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, receivedMessages = Object(global.b)("receivedMessages");
            function receiveMessage(event) {
                if (!window || window.closed) throw new Error("Message recieved in closed window");
                try {
                    if (!event.source) return;
                } catch (err) {
                    return;
                }
                var source = event.source, origin = event.origin, message = function(message, source, origin) {
                    var parsedMessage = void 0;
                    try {
                        parsedMessage = deserializeMessage(source, origin, message);
                    } catch (err) {
                        return;
                    }
                    if (parsedMessage && "object" === (void 0 === parsedMessage ? "undefined" : receive__typeof(parsedMessage)) && null !== parsedMessage && (parsedMessage = parsedMessage[conf.j.POSTROBOT]) && "object" === (void 0 === parsedMessage ? "undefined" : receive__typeof(parsedMessage)) && null !== parsedMessage && parsedMessage.type && "string" == typeof parsedMessage.type && RECEIVE_MESSAGE_TYPES[parsedMessage.type]) return parsedMessage;
                }(event.data, source, origin);
                if (message) {
                    Object(lib.e)(source);
                    if (!receivedMessages.has(message.id)) {
                        receivedMessages.set(message.id, !0);
                        Object(src.p)(source) && !message.fireAndForget || RECEIVE_MESSAGE_TYPES[message.type](source, origin, message);
                    }
                }
            }
            function messageListener(event) {
                try {
                    Object(belter_src.e)(event.source);
                } catch (err) {
                    return;
                }
                var messageEvent = {
                    source: event.source || event.sourceElement,
                    origin: event.origin || event.originalEvent && event.originalEvent.origin,
                    data: event.data
                };
                if (messageEvent.source) {
                    if (!messageEvent.origin) throw new Error("Post message did not have origin domain");
                    receiveMessage(messageEvent);
                }
            }
            global.a.receiveMessage = receiveMessage;
            var requestPromises = Object(global.c)("requestPromises");
            function request(options) {
                return zalgo_promise_src.a.try(function() {
                    if (!options.name) throw new Error("Expected options.name");
                    var name = options.name, targetWindow = void 0, domain = void 0;
                    if ("string" == typeof options.window) {
                        var el = document.getElementById(options.window);
                        if (!el) throw new Error("Expected options.window " + Object.prototype.toString.call(options.window) + " to be a valid element id");
                        if ("iframe" !== el.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(options.window) + " to be an iframe");
                        if (!el.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        targetWindow = el.contentWindow;
                    } else if (options.window instanceof HTMLIFrameElement) {
                        if ("iframe" !== options.window.tagName.toLowerCase()) throw new Error("Expected options.window " + Object.prototype.toString.call(options.window) + " to be an iframe");
                        if (options.window && !options.window.contentWindow) throw new Error("Iframe must have contentWindow.  Make sure it has a src attribute and is in the DOM.");
                        options.window && options.window.contentWindow && (targetWindow = options.window.contentWindow);
                    } else targetWindow = options.window;
                    if (!targetWindow) throw new Error("Expected options.window to be a window object, iframe, or iframe element id.");
                    var win = targetWindow;
                    domain = options.domain || conf.i;
                    var hash = options.name + "_" + Object(belter_src.i)();
                    if (Object(src.p)(win)) throw new Error("Target window is closed");
                    var hasResult = !1, reqPromises = requestPromises.getOrSet(win, function() {
                        return [];
                    }), requestPromise = zalgo_promise_src.a.try(function() {
                        if (Object(src.k)(window, win)) return Object(lib.a)(win, options.timeout || conf.b.CHILD_WINDOW_TIMEOUT);
                    }).then(function() {
                        var origin = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).domain;
                        if (Object(belter_src.c)(domain) && !origin) return Object(lib.g)(win);
                    }).then(function() {
                        var origin = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).domain;
                        if (Object(belter_src.c)(domain)) {
                            if (!Object(src.r)(domain, origin)) throw new Error("Remote window domain " + origin + " does not match regex: " + domain.toString());
                            domain = origin;
                        }
                        if ("string" != typeof domain && !Array.isArray(domain)) throw new TypeError("Expected domain to be a string or array");
                        var actualDomain = domain;
                        return new zalgo_promise_src.a(function(resolve, reject) {
                            var responseListener = void 0;
                            options.fireAndForget || function(hash, listener) {
                                responseListeners.set(hash, listener);
                            }(hash, responseListener = {
                                name: name,
                                window: win,
                                domain: actualDomain,
                                respond: function(err, result) {
                                    if (!err) {
                                        hasResult = !0;
                                        reqPromises.splice(reqPromises.indexOf(requestPromise, 1));
                                    }
                                    err ? reject(err) : resolve(result);
                                }
                            });
                            sendMessage(win, actualDomain, {
                                type: conf.e.REQUEST,
                                hash: hash,
                                name: name,
                                data: options.data,
                                fireAndForget: Boolean(options.fireAndForget)
                            }).catch(reject);
                            if (options.fireAndForget) return resolve();
                            var totalAckTimeout = Object(lib.d)(win) ? conf.b.ACK_TIMEOUT_KNOWN : conf.b.ACK_TIMEOUT, totalResTimeout = options.timeout || conf.b.RES_TIMEOUT, ackTimeout = totalAckTimeout, resTimeout = totalResTimeout, cycleTime = 100;
                            setTimeout(function cycle() {
                                if (!hasResult) {
                                    if (Object(src.p)(win)) return responseListener.ack ? reject(new Error("Window closed for " + name + " before response")) : reject(new Error("Window closed for " + name + " before ack"));
                                    ackTimeout = Math.max(ackTimeout - cycleTime, 0);
                                    -1 !== resTimeout && (resTimeout = Math.max(resTimeout - cycleTime, 0));
                                    if (responseListener.ack) {
                                        if (-1 === resTimeout) return;
                                        cycleTime = Math.min(resTimeout, 2e3);
                                    } else {
                                        if (0 === ackTimeout) return reject(new Error("No ack for postMessage " + name + " in " + Object(src.d)() + " in " + totalAckTimeout + "ms"));
                                        if (0 === resTimeout) return reject(new Error("No response for postMessage " + name + " in " + Object(src.d)() + " in " + totalResTimeout + "ms"));
                                    }
                                    setTimeout(cycle, cycleTime);
                                }
                            }, cycleTime);
                        });
                    });
                    requestPromise.catch(function() {
                        !function(hash) {
                            erroredResponseListeners.set(hash, !0);
                        }(hash);
                        deleteResponseListener(hash);
                    });
                    reqPromises.push(requestPromise);
                    return requestPromise;
                });
            }
            function _send(window, name, data, options) {
                (options = options || {}).window = window;
                options.name = name;
                options.data = data;
                return request(options);
            }
            function sendToParent(name, data, options) {
                var win = Object(src.c)();
                return win ? _send(win, name, data, options) : new zalgo_promise_src.a(function(resolve, reject) {
                    return reject(new Error("Window does not have a parent"));
                });
            }
            function client() {
                var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!options.window) throw new Error("Expected options.window");
                var win = options.window;
                return {
                    send: function(name, data) {
                        return _send(win, name, data, options);
                    }
                };
            }
            global.a.send = _send;
            var server__typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
            function listen(options) {
                if (!options.name) throw new Error("Expected options.name");
                if (!options.handler) throw new Error("Expected options.handler");
                var name = options.name, win = options.window, domain = options.domain, listenerOptions = {
                    handler: options.handler,
                    handleError: options.errorHandler || function(err) {
                        throw err;
                    },
                    window: win,
                    domain: domain || conf.i,
                    name: name
                }, requestListener = function addRequestListener(_ref6, listener) {
                    var name = _ref6.name, win = _ref6.win, domain = _ref6.domain;
                    if (!name || "string" != typeof name) throw new Error("Name required to add request listener");
                    if (Array.isArray(win)) {
                        for (var listenersCollection = [], _i6 = 0, _win2 = win, _length6 = null == _win2 ? 0 : _win2.length; _i6 < _length6; _i6++) {
                            var item = _win2[_i6];
                            listenersCollection.push(addRequestListener({
                                name: name,
                                domain: domain,
                                win: item
                            }, listener));
                        }
                        return {
                            cancel: function() {
                                for (var _i8 = 0, _length8 = null == listenersCollection ? 0 : listenersCollection.length; _i8 < _length8; _i8++) listenersCollection[_i8].cancel();
                            }
                        };
                    }
                    if (Array.isArray(domain)) {
                        for (var _listenersCollection = [], _i10 = 0, _domain2 = domain, _length10 = null == _domain2 ? 0 : _domain2.length; _i10 < _length10; _i10++) {
                            var _item = _domain2[_i10];
                            _listenersCollection.push(addRequestListener({
                                name: name,
                                win: win,
                                domain: _item
                            }, listener));
                        }
                        return {
                            cancel: function() {
                                for (var _i12 = 0, _length12 = null == _listenersCollection ? 0 : _listenersCollection.length; _i12 < _length12; _i12++) _listenersCollection[_i12].cancel();
                            }
                        };
                    }
                    var existingListener = getRequestListener({
                        name: name,
                        win: win,
                        domain: domain
                    });
                    win && win !== conf.i || (win = global.a.WINDOW_WILDCARD);
                    domain = domain || conf.i;
                    if (existingListener) throw win && domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString() + " for " + (win === global.a.WINDOW_WILDCARD ? "wildcard" : "specified") + " window") : win ? new Error("Request listener already exists for " + name + " for " + (win === global.a.WINDOW_WILDCARD ? "wildcard" : "specified") + " window") : domain ? new Error("Request listener already exists for " + name + " on domain " + domain.toString()) : new Error("Request listener already exists for " + name);
                    var nameListeners = requestListeners.getOrSet(win, function() {
                        return {};
                    }), domainListeners = Object(belter_src.b)(nameListeners, name, function() {
                        return {};
                    }), strDomain = domain.toString(), regexListeners = void 0, regexListener = void 0;
                    if (Object(belter_src.c)(domain)) {
                        regexListeners = Object(belter_src.b)(domainListeners, __DOMAIN_REGEX__, function() {
                            return [];
                        });
                        regexListener = {
                            regex: domain,
                            listener: listener
                        };
                        regexListeners.push(regexListener);
                    } else domainListeners[strDomain] = listener;
                    return {
                        cancel: function() {
                            delete domainListeners[strDomain];
                            if (regexListener) {
                                regexListeners.splice(regexListeners.indexOf(regexListener, 1));
                                regexListeners.length || delete domainListeners[__DOMAIN_REGEX__];
                            }
                            Object.keys(domainListeners).length || delete nameListeners[name];
                            win && !Object.keys(nameListeners).length && requestListeners.del(win);
                        }
                    };
                }({
                    name: name,
                    win: win,
                    domain: domain
                }, listenerOptions);
                if (options.once) {
                    var _handler = listenerOptions.handler;
                    listenerOptions.handler = Object(belter_src.f)(function() {
                        requestListener.cancel();
                        return _handler.apply(this, arguments);
                    });
                }
                if (listenerOptions.window && options.errorOnClose) var interval = Object(belter_src.g)(function() {
                    if (win && "object" === (void 0 === win ? "undefined" : server__typeof(win)) && Object(src.p)(win)) {
                        interval.cancel();
                        listenerOptions.handleError(new Error("Post message target window is closed"));
                    }
                }, 50);
                return {
                    cancel: function() {
                        requestListener.cancel();
                    }
                };
            }
            function _on(name, options, handler) {
                if ("function" == typeof options) {
                    handler = options;
                    options = {};
                }
                (options = options || {}).name = name;
                options.handler = handler || options.handler;
                return listen(options);
            }
            function once(name) {
                var options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, handler = arguments[2];
                if ("function" == typeof options) {
                    handler = options;
                    options = {};
                }
                options = options || {};
                handler = handler || options.handler;
                var errorHandler = options.errorHandler, promise = new zalgo_promise_src.a(function(resolve, reject) {
                    (options = options || {}).name = name;
                    options.once = !0;
                    options.handler = function(event) {
                        resolve(event);
                        if (handler) return handler(event);
                    };
                    options.errorHandler = function(err) {
                        reject(err);
                        if (errorHandler) return errorHandler(err);
                    };
                }), onceListener = listen(options);
                promise.cancel = onceListener.cancel;
                return promise;
            }
            function server_listener() {
                var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return {
                    on: function(name, handler) {
                        return _on(name, options, handler);
                    }
                };
            }
            global.a.on = _on;
            function disable() {
                delete window[conf.j.POSTROBOT];
                window.removeEventListener("message", messageListener);
            }
            var public_parent = Object(src.c)();
            function cleanUpWindow(win) {
                for (var _i2 = 0, _requestPromises$get2 = requestPromises.get(win, []), _length2 = null == _requestPromises$get2 ? 0 : _requestPromises$get2.length; _i2 < _length2; _i2++) _requestPromises$get2[_i2].reject(new Error("Window cleaned up before response")).catch(belter_src.e);
            }
            var bridge = __webpack_require__("./src/bridge/interface.js");
            if (!global.a.initialized) {
                global.a.initialized = !0;
                Object(belter_src.a)(window, "message", messageListener);
                bridge && bridge.openTunnelToOpener();
                Object(lib.c)();
            }
            __webpack_require__.d(__webpack_exports__, "markWindowKnown", function() {
                return lib.e;
            });
            __webpack_require__.d(__webpack_exports__, "serializeMessage", function() {
                return serializeMessage;
            });
            __webpack_require__.d(__webpack_exports__, "deserializeMessage", function() {
                return deserializeMessage;
            });
            __webpack_require__.d(__webpack_exports__, "ProxyWindow", function() {
                return window_ProxyWindow;
            });
            __webpack_require__.d(__webpack_exports__, "cleanUpWindow", function() {
                return cleanUpWindow;
            });
            __webpack_require__.d(__webpack_exports__, "Promise", function() {
                return zalgo_promise_src.a;
            });
            __webpack_require__.d(__webpack_exports__, "bridge", function() {
                return bridge;
            });
            __webpack_require__.d(__webpack_exports__, "parent", function() {
                return public_parent;
            });
            __webpack_require__.d(__webpack_exports__, "send", function() {
                return _send;
            });
            __webpack_require__.d(__webpack_exports__, "requestPromises", function() {
                return requestPromises;
            });
            __webpack_require__.d(__webpack_exports__, "request", function() {
                return request;
            });
            __webpack_require__.d(__webpack_exports__, "sendToParent", function() {
                return sendToParent;
            });
            __webpack_require__.d(__webpack_exports__, "client", function() {
                return client;
            });
            __webpack_require__.d(__webpack_exports__, "on", function() {
                return _on;
            });
            __webpack_require__.d(__webpack_exports__, "listen", function() {
                return listen;
            });
            __webpack_require__.d(__webpack_exports__, "once", function() {
                return once;
            });
            __webpack_require__.d(__webpack_exports__, "listener", function() {
                return server_listener;
            });
            __webpack_require__.d(__webpack_exports__, "CONFIG", function() {
                return conf.b;
            });
            __webpack_require__.d(__webpack_exports__, "disable", function() {
                return disable;
            });
            __webpack_exports__.default = interface_namespaceObject;
        },
        "./src/lib/index.js": function(module, __webpack_exports__, __webpack_require__) {
            "use strict";
            var src = __webpack_require__("./node_modules/cross-domain-utils/src/index.js"), zalgo_promise_src = __webpack_require__("./node_modules/zalgo-promise/src/index.js"), belter_src = __webpack_require__("./node_modules/belter/src/index.js"), conf = __webpack_require__("./src/conf/index.js"), global = __webpack_require__("./src/global.js");
            global.a.instanceID = global.a.instanceID || Object(belter_src.i)();
            var helloPromises = Object(global.c)("helloPromises");
            function getHelloPromise(win) {
                return helloPromises.getOrSet(win, function() {
                    return new zalgo_promise_src.a();
                });
            }
            var listenForHello = Object(belter_src.f)(function() {
                global.a.on(conf.d.HELLO, {
                    domain: conf.i
                }, function(_ref) {
                    var source = _ref.source, origin = _ref.origin;
                    getHelloPromise(source).resolve({
                        win: source,
                        domain: origin
                    });
                    return {
                        instanceID: global.a.instanceID
                    };
                });
            });
            function sayHello(win) {
                return global.a.send(win, conf.d.HELLO, {
                    instanceID: global.a.instanceID
                }, {
                    domain: conf.i,
                    timeout: -1
                }).then(function(_ref2) {
                    var origin = _ref2.origin, instanceID = _ref2.data.instanceID;
                    getHelloPromise(win).resolve({
                        win: win,
                        domain: origin
                    });
                    return {
                        win: win,
                        domain: origin,
                        instanceID: instanceID
                    };
                });
            }
            var getWindowInstanceID = Object(belter_src.k)(function(win) {
                return sayHello(win).then(function(_ref3) {
                    return _ref3.instanceID;
                });
            });
            function initHello() {
                listenForHello();
                var parent = Object(src.c)();
                parent && sayHello(parent).catch(belter_src.e);
            }
            function awaitWindowHello(win) {
                var timeout = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3, name = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Window", promise = getHelloPromise(win);
                -1 !== timeout && (promise = promise.timeout(timeout, new Error(name + " did not load after " + timeout + "ms")));
                return promise;
            }
            function needsGlobalMessagingForBrowser() {
                return !!Object(src.i)(window).match(/MSIE|rv:11|trident|edge\/12|edge\/13/i);
            }
            var knownWindows = Object(global.c)("knownWindows");
            function markWindowKnown(win) {
                knownWindows.set(win, !0);
            }
            function isWindowKnown(win) {
                return knownWindows.get(win, !1);
            }
            __webpack_require__.d(__webpack_exports__, "g", function() {
                return sayHello;
            });
            __webpack_require__.d(__webpack_exports__, "b", function() {
                return getWindowInstanceID;
            });
            __webpack_require__.d(__webpack_exports__, "c", function() {
                return initHello;
            });
            __webpack_require__.d(__webpack_exports__, "a", function() {
                return awaitWindowHello;
            });
            __webpack_require__.d(__webpack_exports__, "f", function() {
                return needsGlobalMessagingForBrowser;
            });
            __webpack_require__.d(__webpack_exports__, "e", function() {
                return markWindowKnown;
            });
            __webpack_require__.d(__webpack_exports__, "d", function() {
                return isWindowKnown;
            });
        }
    });
});
//# sourceMappingURL=post-robot.ie.js.map