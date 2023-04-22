/**
 * isRegEx
 * @date 4/22/2023 - 8:32:06 AM
 *
 * @export
 * @param {*} value
 * @returns {value is RegExp}
 * This function takes an input value of any type and returns true if the input is a regular expression (instance of RegExp), and false otherwise.
 * The function is concise and directly returns the result of the instanceof check, which is the recommended approach in this case.
 */
export default function isRegEx(value: any): value is RegExp {
  return value instanceof RegExp;
}