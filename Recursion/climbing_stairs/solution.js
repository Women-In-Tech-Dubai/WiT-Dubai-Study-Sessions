/**
 * Recursion
 * Sunday, August 9th
 * https://leetcode.com/problems/climbing-stairs/
 */

/**
 *
 * You are climbing a stair case. It takes n steps to reach to the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top
 *
 * Note: Given n will be a positive integer.
 *
 * Input: 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Input: 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 * Input: 4
 * Output: 5
 * Explanation: There are five ways to climb to the top.
 * 1. 1 step + 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps + 1 step
 * 3. 2 steps + 1 step + 1 step
 * 4. 1 step + 1 step + 2 steps
 * 5. 2 steps + 2 steps
 */
/**
 * Base case: 
 * 1. n == 1 return 1;
 * 2. n == 2 return 2;
 */

 /**
  * Recursive sequence
  * helper(n - 1) + helper(n - 2)
  */

 /**
 * @param {number} n
 * @return {number}
 */
// [1, 2, 3, 5, 8....]
var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    }
    if (n == 2) {
        return 2;
    }
    return climbStairs(n - 1) + climbStairs(n - 2);
};

console.log(climbStairs(3));