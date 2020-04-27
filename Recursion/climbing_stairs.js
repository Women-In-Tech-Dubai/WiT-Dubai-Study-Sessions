/**
 * Recursion
 * Sunday, April 26th
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

 // 1. Base Cases: currentStep == N, currentStep > N
 // 2. Recursive sequence: determine the total number of ways at each step

 /**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return helper(0, n);
};

var helper = function(currentStep, top) {
    if(currentStep === top) {
        return 1;
    }
    if (currentStep > top) {
        return 0;
    }
    return helper(currentStep + 1, top) + helper(currentStep + 2, top);
}

console.log(climbStairs(5))

/**
 * Intuition: the sequence for the number of ways resembles the fibonacci sequences
 * @param {number} N 
 */
var climbStairsIterative = function (N) {
    var memo = [];
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 2;

    for(let i = 3; i <= N; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }

    return memo[N];
}
