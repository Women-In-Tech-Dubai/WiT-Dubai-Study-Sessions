/**
 * Recursion, DP
 * https://leetcode.com/problems/fibonacci-number/
 */

/**
 *  Fibonacci Number
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. 
 * That is,
 * F(0) = 0,   F(1) = 1
 * F(N) = F(N - 1) + F(N - 2), for N > 1.
 * Given N, calculate F(N).
 *
 * Input: 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 * Input: 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 * Input: 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 */

/**
* @param {number} :)
* @return {number}
*/
// 0 1 1 2 3 5 ...
// Big O (2^n)
var fib = function (N) {
    if (N < 2) {
        return N;
    }
    return fib(N - 1) + fib(N - 2);
};

// Method 1: Memoization
// Big O(N)
var memo = [];
var fibMemo = function (N) {
    if (N < 2) {
        return N;
    }
    if (memo[N]) {
        return memo[N];
    }

    memo[N] = fib(N - 1) + fib(N - 2);
    return memo[N];
};

// Method 2: Tabulation
// Big O(N)
var fibTabulation = function (N) {
    var dp = new Array(N);
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[N];
};

// console.log(fib(99999));
console.log(fibMemo(99999));
// console.log(fibTabulation(99999));