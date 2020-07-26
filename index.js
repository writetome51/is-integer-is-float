import { isFiniteNumber } from '@writetome51/is-finite-number';


// if arg ends with .0 (i.e, 1.0), this returns true.

export function isInteger(arg) {
    return ( isFiniteNumber(arg) && Number.isInteger(arg)); // no errors.
}


export function notInteger(arg) {
    return (!(isInteger(arg)));
}


// if arg ends with .0 (i.e, 1.0), this returns false.

export function isFloat(arg) {
    return ( isFiniteNumber(arg) && notInteger(arg));
}
