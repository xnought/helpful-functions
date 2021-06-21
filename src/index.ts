import cloneDeep from "lodash.clonedeep";

/**
 * Function that returns if the array is empty or not
 *
 * @param array given any type of array
 * @returns true or false answering the question -> isEmpty?
 *
 */
export const isEmpty = <T>(array: T[]): boolean => !(array.length > 0);

/**
 * Creates a deepCopy of the element passed in
 *
 * @param item any item that we want to value copy
 * @returns the same item but not with reference semantics
 *
 */
export const deepCopy = <T>(item: T): T => cloneDeep(item);

/**
 * Getter function to fetch json data from given path
 *
 * @param src the filepath or url path to the json data
 * @returns json response
 *
 */
export const get = async (src: string, config: object = {}): Promise<JSON> => {
	const response = await fetch(src, config);
	const json = await response.json();
	return json;
};

/**
 * Creates Post request and returns the response
 *
 * @param src the url path or file path
 * @param payload the body request data wanting to be sent
 * @param config any other settings that can be added to the fetch js api
 * @returns json response
 *
 */
export const post = async (
	src: string,
	payload: object,
	config: object = {}
): Promise<JSON> => {
	const response = await fetch(src, {
		...config,
		method: "POST",
		body: JSON.stringify(payload),
	});
	const json = await response.json();
	return json;
};

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

// const main = () => {
// };
// main();
