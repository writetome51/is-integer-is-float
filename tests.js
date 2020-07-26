import {isInteger, isFloat} from './index.js';


if (isInteger(1)) console.log('test 1 passed');
else console.log('test 1 FAILED');

if (isInteger(10000000098765432120000001100000000)) console.log('test 2 passed');
else console.log('test 2 FAILED');

if (isInteger(0)) console.log('test 3 passed');
else console.log('test 3 FAILED');

if (isInteger(-1)) console.log('test 4 passed');
else console.log('test 4 FAILED');

if (isInteger(Infinity)) console.log('test 5 FAILED');
else console.log('test 5 passed');

if (isInteger(NaN)) console.log('test 6 FAILED');
else console.log('test 6 passed');

if (isInteger('1')) console.log('test 7 FAILED');
else console.log('test 7 passed');

if (isInteger(1.01)) console.log('test 8 FAILED');
else console.log('test 8 passed');

if (isInteger(true)) console.log('test 9 FAILED');
else console.log('test 9 passed');

if (isInteger([])) console.log('test 10 FAILED');
else console.log('test 10 passed');

if (isInteger({})) console.log('test 11 FAILED');
else console.log('test 11 passed');


if (isFloat(1.01)) console.log('test 12 passed');
else console.log('test 12 FAILED');

if (isFloat(1.00000000001)) console.log('test 13 passed');
else console.log('test 13 FAILED');

if (isFloat(-1.00000000001)) console.log('test 13A passed');
else console.log('test 13A FAILED');

if (isFloat(Infinity)) console.log('test 14 FAILED');
else console.log('test 14 passed');

if (isFloat(NaN)) console.log('test 15 FAILED');
else console.log('test 15 passed');

if (isFloat('1')) console.log('test 16 FAILED');
else console.log('test 16 passed');
