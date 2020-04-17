/**
 * https://leetcode.com/problems/longest-common-prefix/
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 */

/**
* @param {string[]} strs
* @return {string}
*/

var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return "";
    }
    let currStr = strs[0];
    let strFlow = "";
    for (let i = 0; i < currStr.length; i++) {
        let flag = true;
        for (let j = 0; j < strs.length; j++) {
            if (currStr[i] !== strs[j][i]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            strFlow += currStr[i];
        } else {
            break;
        }
    }
    return strFlow;
};