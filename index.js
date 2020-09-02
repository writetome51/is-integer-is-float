// if arg ends with .0 (i.e, 1.0), this returns true.

export const isInteger = Number.isInteger;


export function notInteger(arg) {
	return (!(isInteger(arg)));
}


// if arg ends with .0 (i.e, 1.0), this returns false.

export function isFloat(arg) {
	return (Number.isFinite(arg) && notInteger(arg));
}
