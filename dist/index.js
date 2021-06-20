"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.copyArray = exports.isEmpty = void 0;
/**
 * Function that returns if the array is empty or not
 *
 * @param array given any type of array
 * @returns true or false answering the question -> isEmpty?
 *
 */
const isEmpty = (array) => !(array.length > 0);
exports.isEmpty = isEmpty;
/**
 * Creates a deep copy of an array
 *
 * @param array given any type of array
 * @returns new copy of the array with value semantics
 *
 */
const copyArray = (array) => JSON.parse(JSON.stringify(array));
exports.copyArray = copyArray;
//# sourceMappingURL=index.js.map