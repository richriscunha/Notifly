'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.Notifly = factory();
})(undefined, function () {
    'use strict';

    var _handlers = {};

    var Notifly = function () {
        function Notifly() {
            _classCallCheck(this, Notifly);
        }

        _createClass(Notifly, null, [{
            key: 'subscribe',
            value: function subscribe(topic, handler) {
                if (!_handlers.hasOwnProperty(topic)) _handlers[topic] = [];
                var _index = _handlers[topic].push(handler) - 1;
                return {
                    unsubscribe: function unsubscribe() {
                        _handlers[topic].splice(_index, 1);
                    }
                };
            }
        }, {
            key: 'notify',
            value: function notify(topic, data) {
                var handlers = _handlers[topic];
                handlers.forEach(function (callback) {
                    callback(data);
                });
            }
        }]);

        return Notifly;
    }();

    return Notifly;
});