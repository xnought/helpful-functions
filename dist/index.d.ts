/**
 * Function that returns if the array is empty or not
 *
 * @param array given any type of array
 * @returns true or false answering the question -> isEmpty?
 *
 */
export declare const isEmpty: <T>(array: T[]) => boolean;
/**
 * Creates a deepCopy of the element passed in
 *
 * @param item any item that we want to value copy
 * @returns the same item but not with reference semantics
 *
 */
export declare const deepCopy: <T>(item: T) => T;
/**
 * Getter function to fetch json data from given path
 *
 * @param src the filepath or url path to the json data
 * @returns json response
 *
 */
export declare const get: (src: string, config?: object) => Promise<JSON>;
/**
 * Creates Post request and returns the response
 *
 * @param src the url path or file path
 * @param payload the body request data wanting to be sent
 * @param config any other settings that can be added to the fetch js api
 * @returns json response
 *
 */
export declare const post: (src: string, payload: object, config?: object) => Promise<JSON>;
/**
 * This prints the string with the colors in the console
 *
 * @param array of colors
 *
 */
export declare const logColors: (arrayOfColors: string[]) => void;
/**
 * 10 good colors that work together
 */
export declare let scheme1: string[];
