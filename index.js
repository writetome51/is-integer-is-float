"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isFintNum_1 = require("@writetome51/is-finite-number");


// if arg ends with .0 (i.e, 1.0), this returns true.

function isInteger(arg) {
    return ( isFintNum_1.isFiniteNumber(arg) && Number.isInteger(arg)); // no errors.
}
exports.isInteger = isInteger;


function notInteger(arg) {
    return (!(isInteger(arg)));
}
exports.notInteger = notInteger;


// if arg ends with .0 (i.e, 1.0), this returns false.

function isFloat(arg) {
    return ( isFintNum_1.isFiniteNumber(arg) && notInteger(arg));
}
exports.isFloat = isFloat;
