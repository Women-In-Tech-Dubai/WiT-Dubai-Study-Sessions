/**
 * Strings & arrays
 * Friday, April 10th
 * https://leetcode.com/problems/flip-string-to-monotone-increasing/
 */

/**
 * Flip String to Monotone Increasing
 *
 * A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0), followed by
 * some number of '1's (also possibly 0.)
 *
 * We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.
 *
 * Return the minimum number of flips to make S monotone increasing.
 *
 * Example 1:
 * Input: "00110"
 * Output: 1
 * Explanation: We flip the last digit to get 00111.
 *
 * Example 2:
 * Input: "010110"
 * Output: 2
 * Explanation: We flip to get 011111, or alternatively 000111.
 *
 * Example 3:
 * Input: "00011000"
 * Output: 2
 * Explanation: We flip to get 00000000.
 *
 * Notes:
 * 1. 1 <= S.length <= 20000
 * 2. S only consists of '0' and '1' characters.
 */

/**
* @param {string} S
* @return {number}
*/

var minFlipsMonoIncr = function (S) {
    let flipCount = 0; // potential candidates for flip
    let onesCount = 0;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '0' && onesCount === 0) {
            continue;
        }
        if (S[i] === '1') {
            onesCount++;
        } else {
            flipCount++; // zero encountered - potential candidate for flipping
        }

        flipCount = Math.min(flipCount, onesCount);
    }

    return flipCount;
};

console.log(minFlipsMonoIncr("00011000"));
