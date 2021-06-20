"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
/**
 * Function that returns if the array is empty or not
 *
 * @param array given any type of array
 * @returns true or false answering the question -> isEmpty?
 */
const isEmpty = (array) => !(array.length > 0);
exports.isEmpty = isEmpty;
