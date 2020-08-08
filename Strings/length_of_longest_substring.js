/**
 * Strings & arrays
 * Wednesday, April 1st
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

/**
* Given a string, find the length of the longest substring without repeating characters.
*
* Input: "abcabcbb"
* Output: 3
* Explanation: The answer is "abc", with the length of 3.
*
* Input: "bbbbb"
* Output: 1
* Explanation: The answer is "b", with the length of 1.
*
* Input: "pwwkew"
* Output: 3
* Explanation: The answer is "wke", with the length of 3.
* Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length == 0 || s.length == 1) {
        return s.length;
    }
    let maxLength = 0;
    let i = 0;
    let j = i;
    let substring = "";

    while (i < s.length && j < s.length) {
        if (substring.indexOf(s[j]) === -1) {
            substring += s[j];
            j++;
        } else {
            if (substring.length > maxLength) {
                maxLength = substring.length;
            }
            i++;
            j = i;
            substring = "";
        }
    }

    return substring.length > maxLength ? substring.length : maxLength;
}
