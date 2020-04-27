/**
 * Recursion
 * Sunday, April 26th
 * https://leetcode.com/problems/fibonacci-number/

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

// Big O = O(2^n)
var fib = function (N) {
    if (N <= 1) {
        // O(1)
        return N;
    }
    return fib(N-1) + fib(N-2);
};

/**
 * Memoization = storing values that have already been computed - Maria De Kewl :)
 * Big O with memoization: O(N)
 */
let memo = {}; // Hash map/table to cache computations
var fibM = function (N) {
    if (N <= 1) {
        return N;
    }
    if (memo[N]) {
        return memo[N];
    }
    let result = fib(N-1) + fib(N-2);
    memo[N] = result;
    return result;
};
