/**
 * isBoolean
 * @date 4/22/2023 - 8:15:12 AM
 * @export isBoolean
 * @param {*} value
 * @returns {boolean} Returns true if the value is a boolean, and false otherwise.
 * @example isBoolean(true); // true
 * @example isBoolean("Hello"); // false
 */
export default function isBoolean(value: any): value is boolean {
  const booleanCheck = typeof value === "boolean";
  console.log("Boolean Check: ", booleanCheck);
  if (booleanCheck === true) {
    return true;
  } else {
    return false;
  }
}