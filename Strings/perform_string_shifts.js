/**
 * Strings & arrays
 * Friday, April 17th
 * https://leetcode.com/explore/challenge/card/30-day-leetcoding-challenge/529/week-2/3299/
 */

/**
 * You are given a string s containing lowercase English letters, and a matrix shift, where shift[i] = [direction, amount]:
 *  -> direction can be 0 (for left shift) or 1 (for right shift).
 *  -> amount is the amount by which string s is to be shifted.
 * A left shift by 1 means remove the first character of s and append it to the end.
 *
 * Similarly, a right shift by 1 means remove the last character of s and add it to the beginning. Return the final string after all operations.
 *
 * Example 1:
 * Input: s = "abc", shift = [[0,1],[1,2]]
 * Output: "cab"
 * Explanation:
 *  [0,1] means shift to left by 1. "abc" -> "bca"
 *  [1,2] means shift to right by 2. "bca" -> "cab"
 *
 * Example 2:
 * Input: s = "abcdefg", shift = [[1,1],[1,1],[0,2],[1,3]]
 * Output: "efgabcd"
 * Explanation:
 * [1,1] means shift to right by 1. "abcdefg" -> "gabcdef"
 * [1,1] means shift to right by 1. "gabcdef" -> "fgabcde"
 * [0,2] means shift to left by 2. "fgabcde" -> "abcdefg"
 * [1,3] means shift to right by 3. "abcdefg" -> "efgabcd"
 *
 * Constraints:
 * 1 <= s.length <= 100
 * s only contains lower case English letters.
 * 1 <= shift.length <= 100
 * shift[i].length == 2
 * 0 <= shift[i][0] <= 1 // Direction (0 or 1)
 * 0 <= shift[i][1] <= 100 // Amount (0 - 100)
 */

/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */
var stringShift = function (s, shift) {
    let shiftedS = s;
    for (let i = 0; i < shift.length; i++) {
        switch (shift[i][0]) {
            case 0:
                for (let j = 1; j <= shift[i][1]; j++) {
                    shiftedS = shiftedS.substring(1, shiftedS.length) + shiftedS.substring(0, 1);
                }
                break;
            case 1:
                for (let j = 1; j <= shift[i][1]; j++) {
                    shiftedS = shiftedS.substring(shiftedS.length - 1, shiftedS.length) + shiftedS.substring(0, shiftedS.length - 1);
                }
                break;
            default:
                break;
        }
    }
    return shiftedS;
};
