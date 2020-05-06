/**
 * Recursion
 * Wednesday, May 6th
 * https://leetcode.com/problems/unique-paths/
 */

/**
 *
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 *
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 *
 * How many possible unique paths are there?
 *
 * Example 1:
 * Input: m = 3, n = 2
 * Output: 3
 * Explanation:
 * From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
 * 1. Right -> Right -> Down
 * 2. Right -> Down -> Right
 * 3. Down -> Right -> Right
 *
 * Example 2:
 * Input: m = 7, n = 3
 * Output: 28
 *
 * Constraints:
 * - 1 <= m, n <= 100
 * - It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.
 */
/**
 * @param {number} cols
 * @param {number} rows
 * @return {number}
 */

// Base cases: a. boundary check b. when bottom-right cell reached
// Recursive relation: process right cell, process bottom cell

// let paths = 0;

var uniquePaths = function (cols, rows) {
    let memo = [[]];
    return helper(cols - 1, rows - 1, 0, 0, memo);
};
/**
 * cols = 3, rows = 2
 *
 *   0 1 2
 * 0 x - -
 * 1 - - x
 * target = grid[1][2]
 *
 *                 (0,0)
 *       (0,1)               (1, 0)
 * (0, 2)      (1,1)      (1,2)    (2,0)
 *         (2, 1) (1,2)
 */
const helper = (targetCol, targetRow, col, row, memo) => {

    if (col > targetCol || row > targetRow) {
        return 0;
    }

    if (col === targetCol && row === targetRow) {
        return 1;
    }

    if (memo[row] && memo[row][col]) {
        return memo[row][col];
    }

    if (!memo[row]) {
        memo[row] = [];
    }
    memo[row][col] = helper(targetCol, targetRow, col + 1, row, memo) + helper(targetCol, targetRow, col, row + 1, memo);
    return memo[row][col];
}

console.log(uniquePaths(51, 9))