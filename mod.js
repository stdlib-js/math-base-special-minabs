// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return Math.abs(r)},n=Number.NEGATIVE_INFINITY,t=n;var u=function(r){return 0===r&&1/r===t};var e=function(r){return r!=r},a=Number.POSITIVE_INFINITY,f=u,i=e,I=n,N=a;var o=function(r,n){var t,u,e,a;if(2===(t=arguments.length))return i(r)||i(n)?NaN:r===I||n===I?I:r===n&&0===r?f(r)?r:n:r<n?r:n;for(u=N,a=0;a<t;a++){if(i(e=arguments[a])||e===I)return e;(e<u||e===u&&0===e&&f(e))&&(u=e)}return u};function l(n,t){var u,e,f;if(0===(u=arguments.length))return a;if(2===u)return o(r(n),r(t));for(e=[],f=0;f<u;f++)e.push(r(arguments[f]));return o.apply(null,e)}export{l as default};
//# sourceMappingURL=mod.js.map
