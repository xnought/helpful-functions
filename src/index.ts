/**
 * Function that returns if the array is empty or not
 *
 * @param array given any type of array
 * @returns true or false answering the question -> isEmpty?
 *
 */
export const isEmpty = <T>(array: T[]): boolean => !(array.length > 0);

/**
 * Creates a deep copy of an array
 *
 * @param array given any type of array
 * @returns new copy of the array with value semantics
 *
 */
export const copyArray = <T>(array: T[]): T[] =>
	JSON.parse(JSON.stringify(array));

// const main = () => {
// };
// main();
