/**
 * 
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 
 * Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"
 
Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

babad
ba
bab
baba
babad

a
ab 
aba
abad

b
ba
bad

elevel
levele

Brute force:
1. Find every substring
2. Check if each susbtring is a palindrome
3. Track the longest palindrome we've found so far

Psuedocode:
for each i char in s
  for each next j char in s
     substring = s.substr(i, j)
     if (isPalindrome AND substring.length > longestPalindrome.length)
        longestPalindrome = substring


return s.reverse() == s
        
return longestPalindrome

 */

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    var longestPalindrome = "";
    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j <= s.length; j++) {
            var portion = s.slice(i,j);
            console.log(portion)
            if(isPalindrome(portion) && portion.length > longestPalindrome.length) {
                longestPalindrome = portion;
            }
        }
    }
    return longestPalindrome;
};

var isPalindrome = function(s) {
    return s.split("").reverse().join("") == s;
};

console.log("result ", longestPalindrome("abcdbbfcba"))