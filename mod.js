// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(r){return Math.abs(r)},n=Number.NEGATIVE_INFINITY,t=n;var u=function(r){return 0===r&&1/r===t};var e=function(r){return r!=r},a=Number.POSITIVE_INFINITY,f=u,i=e,I=n,N=a;var o=r,v=function(r,n){var t,u,e,a;if(2===(t=arguments.length))return i(r)||i(n)?NaN:r===I||n===I?I:r===n&&0===r?f(r)?r:n:r<n?r:n;for(u=N,a=0;a<t;a++){if(i(e=arguments[a])||e===I)return e;(e<u||e===u&&0===e&&f(e))&&(u=e)}return u},l=a;var c=function(r,n){var t,u,e;if(0===(t=arguments.length))return l;if(2===t)return v(o(r),o(n));for(u=[],e=0;e<t;e++)u.push(o(arguments[e]));return v.apply(null,u)};export{c as default};
//# sourceMappingURL=mod.js.map
