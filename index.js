// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";function e(e){return Math.abs(e)}var n=Number.NEGATIVE_INFINITY;function t(e){return 0===e&&1/e===n}function r(e){return e!=e}var u=Number.POSITIVE_INFINITY;return function(f,i){return function(e,f){var i,o,a,d;if(2===(i=arguments.length))return r(e)||r(f)?NaN:e===n||f===n?n:e===f&&0===e?t(e)?e:f:e<f?e:f;for(o=u,d=0;d<i;d++){if(r(a=arguments[d])||a===n)return a;(a<o||a===o&&0===a&&t(a))&&(o=a)}return o}(e(f),e(i))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).minabs=n();
//# sourceMappingURL=index.js.map
