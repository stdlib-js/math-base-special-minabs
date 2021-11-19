<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# minabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the minimum absolute value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-minabs
```

</section>

<section class="usage">

## Usage

```javascript
var minabs = require( '@stdlib/math-base-special-minabs' );
```

#### minabs( \[x\[, y\[, ...args]]] )

Returns the minimum absolute value.

```javascript
var v = minabs( -4.2, 3.14 );
// returns 3.14

v = minabs( +0.0, -0.0 );
// returns +0.0

v = minabs( 4.2, 3.14, -1.0, 6.8 );
// returns 1.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = minabs( 4.2, NaN );
// returns NaN

v = minabs( NaN, 3.14 );
// returns NaN
```

If not provided any arguments, the function returns `+infinity`.

```javascript
var v = minabs();
// returns Infinity
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest lower bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum, and thus, `minabs() = +infinity`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var minabs = require( '@stdlib/math-base-special-minabs' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = ( randu()*1000.0 ) - 500.0;
    y = ( randu()*1000.0 ) - 500.0;
    v = minabs( x, y );
    console.log( 'minabs(%d,%d) = %d', x, y, v );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/maxabs`][@stdlib/math/base/special/maxabs]</span><span class="delimiter">: </span><span class="description">return the maximum absolute value.</span>
-   <span class="package-name">[`@stdlib/math/base/special/min`][@stdlib/math/base/special/min]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-minabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-minabs

[test-image]: https://github.com/stdlib-js/math-base-special-minabs/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-base-special-minabs/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-minabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-minabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-minabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-minabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-minabs/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/maxabs]: https://github.com/stdlib-js/math-base-special-maxabs

[@stdlib/math/base/special/min]: https://github.com/stdlib-js/math-base-special-min

<!-- </related-links> -->

</section>

<!-- /.links -->
