/** @license Apache-2.0 */

'use strict';

/**
* Constructor for performing a reduction on two input ndarrays.
*
* @module @stdlib/ndarray-base-binary-reduce-strided1d-dispatch
*
* @example
* var base = require( '@stdlib/blas-base-ndarray-gdot' );
* var dtypes = require( '@stdlib/ndarray-dtypes' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var BinaryStrided1dDispatch = require( '@stdlib/ndarray-base-binary-reduce-strided1d-dispatch' );
*
* var idt = dtypes( 'real_and_generic' );
* var odt = idt;
* var policies = {
*     'output': 'promoted',
*     'casting': 'promoted'
* };
*
* var table = {
*     'default': base
* };
* var dot = new BinaryStrided1dDispatch( table, [ idt, idt ], odt, policies );
*
* var xbuf = [ 4.0, 2.0, -3.0, 5.0, -1.0 ];
* var x = new ndarray( 'generic', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
*
* var ybuf = [ 2.0, 6.0, -1.0, -4.0, 8.0 ];
* var y = new ndarray( 'generic', ybuf, [ ybuf.length ], [ 1 ], 0, 'row-major' );
*
* var z = dot.apply( x, y );
* // returns <ndarray>[ -5.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
