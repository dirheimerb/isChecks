/**
 * isNumber
 * @date 4/22/2023 - 8:12:00 AM
 * @export isNumber
 * @param {*} value
 * @returns {boolean} Returns true if the value is a number, and false otherwise.
 * @example isNumber(9); // true
 * @example isNumber("Hello"); // false
 */
export default function isNumber(value: any): value is number {
  const numberCheck = typeof value === "number";
    console.log("Number Check: ", numberCheck);
  return numberCheck;
};