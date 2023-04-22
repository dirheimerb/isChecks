/**
 * isObject
 * @date 4/22/2023 - 8:12:50 AM
 * @export isObject
 * @param {*} value
 * @returns {boolean} Returns true if the value is an object, and false otherwise.
 * @example isObject({}); // true
 * @example isObject(null); // false
 * @example isObject("Hello"); // false
 */
export default function isObject(value: any): value is Object {
  const objectCheck = typeof value === "object" && value !== null;
  console.log("Object Check: ", objectCheck);
  return objectCheck;
}