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

/**
 * 10 good colors that work together
 */
export let scheme1 = [
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
export const logColors = (arrayOfColors: string[]): void => {
	arrayOfColors.forEach((color) => {
		console.log(`%c ${color}`, `color: ${color}`);
	});
};

// const main = () => {
// };
// main();
