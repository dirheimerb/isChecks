/**
 * isArray
 * @date 4/22/2023 - 8:13:28 AM
 * @export isArray
 * @param {*} value
 * @returns {boolean} Returns true if the value is an array, and false otherwise.
 * @example isArray([]); // true
 * @example isArray("Hello"); // false
 */
export default function isArray(value: any): value is Array<any> {
  const arrayCheck = Array.isArray(value);
  console.log("Array Check: ", arrayCheck);
  return arrayCheck;
}