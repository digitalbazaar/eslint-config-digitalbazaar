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

typeof color === 'strnig';