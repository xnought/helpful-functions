/**
 * Function that returns if the array is empty or not
 *
 * @param array given any type of array
 * @returns true or false answering the question -> isEmpty?
 *
 */
export declare const isEmpty: <T>(array: T[]) => boolean;
/**
 * Creates a deep copy of an array
 *
 * @param array given any type of array
 * @returns new copy of the array with value semantics
 *
 */
export declare const copyArray: <T>(array: T[]) => T[];
/**
 * Creates a deepCopy of the element passed in
 *
 * @param item any item that we want to value copy
 * @returns the same item but not with reference semantics
 *
 */
export declare const deepCopy: <T>(item: T) => T;
/**
 * 10 good colors that work together
 */
export declare let scheme1: string[];
/**
 * This prints the string with the colors in the console
 *
 * @param array of colors
 *
 */
export declare const logColors: (arrayOfColors: string[]) => void;
