/**
 * stringIsEmpty
 * @date 4/22/2023 - 8:08:16 AM
 * @param {string} value
 * @returns {boolean} Returns true if the string is empty {""}, and false otherwise.
 * @example stringIsEmpty(""); // true
 * @example stringIsEmpty("Hello"); // false
 */
export default function stringIsEmpty(value: string): value is "" {
    return value.length === 0;
}
