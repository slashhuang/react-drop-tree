'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _testLess = require('./test.less');

var _testLess2 = _interopRequireDefault(_testLess);

var Test = (function () {
    function Test() {
        _classCallCheck(this, Test);
    }

    Test.prototype.show = function show() {
        alert('alert');
    };

    return Test;
})();