"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheme1 = exports.logColors = exports.post = exports.get = exports.deepCopy = exports.isEmpty = void 0;
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const node_fetch_1 = __importDefault(require("node-fetch"));
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
 * Creates a deepCopy of the element passed in
 *
 * @param item any item that we want to value copy
 * @returns the same item but not with reference semantics
 *
 */
const deepCopy = (item) => lodash_clonedeep_1.default(item);
exports.deepCopy = deepCopy;
/**
 * Getter function to fetch json data from given path
 *
 * @param src the filepath or url path to the json data
 * @returns json response
 *
 */
const get = async (src, config) => {
    const response = await node_fetch_1.default(src, config);
    const json = await response.json();
    return json;
};
exports.get = get;
/**
 * Creates Post request and returns the response
 *
 * @param src the url path or file path
 * @param payload the body request data wanting to be sent
 * @param config any other settings that can be added to the fetch js api
 * @returns json response
 *
 */
const post = async (src, payload, config) => {
    const response = await node_fetch_1.default(src, {
        ...config,
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const json = await response.json();
    return json;
};
exports.post = post;
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
// const main = async () => {
// };
// main();
//# sourceMappingURL=index.js.map