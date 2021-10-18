/*
    https://leetcode.com/problems/happy-number/

    Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.
    Return true if n is a happy number, and false if not.

    Example 1:
    Input: n = 19
    Output: true
    Explanation:
    1^2 + 9^2 = 82
    8^2 + 2^2 = 68
    6^2 + 8^2 = 100
    1^2 + 0^2 + 0^2 = 1


    Example 2:
    Input: n = 2
    Output: false
    
    Constraints:
    1 <= n <= 2^31 - 1

    "1935"
    ["1", "9", "3", "5"]
    - Split n into array of character digits
    - Loop through character array, and sum += digit ^ 2
    - if (sum === 1) => return true
    - if (sum < 10) => return false
    
*/
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
    let sum = 0;
    let num = n.toString().split('');

    let previous = {};

    while (true){
        for(i = 0; i< num.length; i++){
            sum += Math.pow(parseInt(num[i]), 2);
        }

        
        console.log(sum);
        if(sum === 1) { return true;}
        if (previous[sum]) {return false;}
        previous[sum] = true;
        num = sum.toString().split(''); 
        sum = 0;
   }
};
