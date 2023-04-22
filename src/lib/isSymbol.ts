// @eslint-no-explicit-any

/**
 * isSymbol
 * @date 4/22/2023 - 8:34:25 AM
 * @export
 * @param {*} value
 * @returns {value is symbol} This function takes an input value of any type and returns true if the input is a symbol (typeof symbol), and false otherwise. The function is concise and directly returns the result of the typeof check, which is the recommended approach in this case.
 * @description This function takes an input value of any type and returns true if the input is a symbol (typeof symbol), and false otherwise. The function is concise and directly returns the result of the typeof check, which is the recommended approach in this case.
 * @example
 * isSymbol(Symbol.iterator); // true
 * isSymbol('abc'); // false
 * isSymbol(123); // false
 */
export default function isSymbol(value: any): value is symbol {
  return typeof value === 'symbol';
}
