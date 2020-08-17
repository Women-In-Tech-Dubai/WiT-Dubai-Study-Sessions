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
var isPalindrome = function(s) {
    if(s.length <= 1 ){
        return true;
    }
    if(s[0] === s[s.length -1]) {
        let temp =  s.slice(1, s.length-1);
        return isPalindrome(temp);
    }
    return false;
};

console.log(isPalindrome("racecar"));