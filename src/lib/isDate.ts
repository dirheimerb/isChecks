
/**
 * isDate
 * @date 4/22/2023 - 8:33:02 AM
 * @export isDate
 * @param {*} value
 * @returns {value is Date} This function takes an input value of any type and returns true if the input is a date (instance of Date), and false otherwise. The function is concise and directly returns the result of the instanceof check, which is the recommended approach in this case.
 * @description This function takes an input value of any type and returns true if the input is a date (instance of Date), and false otherwise. The function is concise and directly returns the result of the instanceof check, which is the recommended approach in this case.
 * @example
 * isDate(new Date()); // true
 * isDate('2019-01-01'); // false
 */
export default function isDate(value: any): value is Date {
  return value instanceof Date;
}