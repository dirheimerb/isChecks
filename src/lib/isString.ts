/**
 * isString
 * @date 4/22/2023 - 8:01:57 AM
 * @category String, Type Check, Utility, Validation
 * @param {*} value
 * The parameter value should have a type of any since it can be any type, and we are checking if it is a string.
 * The typeof operator should be used to check the type of value, and it should be compared to the string "string".
 * @returns {boolean}
 * This function will now take an input value of any type and return true if the input is a string, and false otherwise. It also logs the result of the check to the console.
 * @example isString(9); // false
 * @example isString("Hello"); // true
 */
export default function isString(value: any): boolean {
    const stringCheck = typeof value === "string";
        console.log("String Check: ", stringCheck);
    return stringCheck;
}