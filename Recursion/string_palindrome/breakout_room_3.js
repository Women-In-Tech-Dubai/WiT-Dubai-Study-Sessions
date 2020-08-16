/**
 * Recursion
 * Sunday, August 16th
 * https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/pc/challenge-is-a-string-a-palindrome
 */

/**
 * Valid palindrome
 *
 * Given a string, determine if it is a palindrome
 *
 * Input: "race a car"
 * Output: false
 *
 * Example 2:
 * Input: "rotor"
 * Output: true
 *
 *
 */
/*

/**
 * @param {string} s
 * @return {boolean}
 */
// Base cases:
// str.length == 0
// Recursive relation:
// reverse()
var isPalindrome = function(s) {
    if (s.length == 0) {
        return false;
    }
    if (s.length == 1) {
        return true;
    }
    s = s.replace(' ', '');
    return helper(s, 0, s.length - 1)
};

// abba
// abcba

// "abcba", 0, 4
// O(n/2) => O(n)
function helper(string, i, j) {
    if (i >= j) {
        return true;
    } 
    if (string[i] !== string[j]) {
        return false;
    } 
    return helper(string, i+1, j-1)
}

console.log(isPalindrome("abb a"));