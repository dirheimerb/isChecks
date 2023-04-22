/**
 * isNull
 * @date 4/22/2023 - 8:10:59 AM
 * @param {*} value
 * @returns {value is null} Returns true if the value is null, and false otherwise.
 * @example isNull(null); // true
 * @example isNull("Hello"); // false
 * @example isNull(9); // false
 */
export default function isNull(value: any): value is null {
  return value === null;
}