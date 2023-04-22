/**
 * isUndefined
 * @date 4/22/2023 - 8:24:34 AM
 * @export isUndefined
 * @param {*} value - The value to check.
 * This function takes an input value of any type and returns true if the input is undefined, and false otherwise. It also logs the result of the check to the console.
 * Returns true if the value is undefined, and false otherwise.
 * @returns {value is undefined} 
 * @example isUndefined(undefined); // true
 * @example isUndefined("Hello"); // false
 */
export default function isUndefined(value: any): value is undefined {
  const undefinedCheck = value === undefined;
  console.log("Undefined Check: ", undefinedCheck);
  return undefinedCheck;
}