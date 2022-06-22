/**
 * This module is for testing eslint rules so we have examples
 * to look at.
 *
*/

// demo of the sort imports rules
// incorrect all
import * as bAll from 'b.js';
import * as aAll from 'a.js';

// correct all
import * as aaAll from 'a.js';
import * as bbAll from 'b.js';

// incorrect multiple
import {zed, rat, girl} from 'baboon2000.js';

// correct multiple
import {girl2, rat2, zed2} from 'baboon2000.js';

// incorrect single
import {default1} from 'defaulter';
import aDefault1 from 'adefaulter';

// correct single
import aDefault2 from 'adefaulter';
import {default2} from 'defaulter';

// imports with no members must go last
import 'no-members';
import * as baboon1 from 'baboon-lib-1';

// imports with no members must go last
import * as baboon2 from 'baboon-lib-1';
import 'no-members';

/*
 * import * as all goes first
 * import {multiple, members} goes second
 * import singleMember goes third
 * import {singleMember} goes third
 * import 'no-members' goes last
 */
import * as baboon3 from 'babbon-lib-3';
import {multi1, multi2, multi3} from 'multi-x-3';
import single3 from 'has-default-export';
import {single4} from 'has-single-named-export';
import 'no-export';

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
