/**
 * Recursion
 * Wednesday, April 29th
 * https://leetcode.com/problems/reverse-string/
 */

/**
 *
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 *
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 *
 * You may assume all the characters consist of printable ascii characters.
 *
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 *
 * Input: ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 */

 /**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    return helper(s, s.length, 0, s.length - 1);
};

function helper(str, length, i, j){
    if (i >= j)
        return str;
    else {
        var temp = str[i];
        str[i]= str[j];
        str[j]=temp;
        return helper(str, length, ++i,--j);
    }
}

console.log(reverseString(["h","e","l","l","o"]));
console.log(reverseString(["H","a","n","n","a","h"]));
