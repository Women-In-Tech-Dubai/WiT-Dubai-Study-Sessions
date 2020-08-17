/**
 * Recursion
 * Sunday, August 16th
 * https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/pc/challenge-is-a-string-a-palindrome
 */

/**
 * Valid palindrome
 *
 * Given a string, determine if it is a palindrome, including LETTERS/NUMBERS ONLY
 * Assuming empty strings are a valid palindrome
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

 // base case -  there is zero or one character left or if the letters dont match
 // recursive sequence - call helper() with the smaller string

var isPalindrome = function(s) {

    if (s.length <= 1) {
        return true;
    }

    if (s.length === 2) {
        return s[0] === s[1];
    }

    if (s[0] !== s[s.length - 1]) {
        return false;
    }

    return isPalindrome(s.substring(1, s.length - 2));
};

console.log(isPalindrome(""));