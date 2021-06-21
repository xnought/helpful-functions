"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logColors = exports.scheme1 = exports.deepCopy = exports.copyArray = exports.isEmpty = void 0;
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
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
/**
 * Creates a deepCopy of the element passed in
 *
 * @param item any item that we want to value copy
 * @returns the same item but not with reference semantics
 *
 */
const deepCopy = (item) => {
    return lodash_clonedeep_1.default(item);
};
exports.deepCopy = deepCopy;
/**
 * 10 good colors that work together
 */
exports.scheme1 = [
    "#001219",
    "#005f73",
    "#0a9396",
    "#94d2bd",
    "#e9d8a6",
    "#ee9b00",
    "#ca6702",
    "#bb3e03",
    "#ae2012",
    "#9b2226",
];
/**
 * This prints the string with the colors in the console
 *
 * @param array of colors
 *
 */
const logColors = (arrayOfColors) => {
    arrayOfColors.forEach((color) => {
        console.log(`%c ${color}`, `color: ${color}`);
    });
};
exports.logColors = logColors;
// const main = () => {
// };
// main();
//# sourceMappingURL=index.js.map