/**
 * This module is for testing eslint rules so we have examples
 * to look at.
 *
*/

/* eslint no-unused-vars: 0 */

/* eslint no-implicit-coercion: 2 */
const num = 1;
const numString = `${num}`;
const implictConvert = `` + num;

const justtemplate = `foo`;

/* eslint no-useless-concat: 2 */

const noConcat = 'a' + 'b';

/* eslint no-invalid-regexp: 2 */

const r = new RegExp('\\');

const a = {foo: null};

if(a.foo = 'x') {

}

/* eslint no-dupe-else-if: 2 */
const n = 5;

if(n === 1) {
} else if(n === 2) {
} else if(n === 3) {
} else if(n === 2) {
} else if(n === 5) {
}

const color = 'foo';
if('red' === color) {

}

if(color === 'red') {

}

// this will throw an eslint error
typeof color === 'strnig';
// this will not throw an eslint error
typeof color === 'string';

// no-loss-of-precision: "error"
const precisionTest = {
  noError: 10,
  error: 9999999999999999,
  hexError: 0x2386F26FC0FFFF
};

// OK
const jsonProps = {};
jsonProps.bar = 1;
// this is common when dealing with bedrock configs
// and this does **not** produce an error
jsonProps['some-baz'] = 8;

// error
jsonProps['bar'] = 2;

// error
jsonProps['snake_case'] = 5;

// does not error if prop contains @
jsonProps['@context'] = 'did:context:foo';
