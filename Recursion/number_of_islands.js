/**
 * Recursion
 * Sunday, May 3rd
 * https://leetcode.com/problems/number-of-islands/
 */

/**
 * Number of Islands
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally
 * or vertically. You may assume all four edges of the grid are all surrounded by water.
 *
 * Example 1:
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * Output: 1
 *
 * Example 2:
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * Output: 3
 */
/*

arr[i-1][j]
arr[i+1][j]
arr[i][j-1]
arr[i][j+1]
*/
// Base case: boundary check + water
// Recursive relation: top cell, right cell, bottom cell, left cell

let maxRows = 0;
let maxCols = 0;

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    let counter = 0;
    maxRows = grid.length;
    if (maxRows === 0) return 0;
    maxCols = grid[0].length;
    for (let i = 0; i < maxRows; i++) {
        for (let j = 0; j < maxCols; j++) {
            if (grid[i][j] === '1') {
                helper(grid, i, j);
                counter++;
            }
        }
    }
    return counter;
}

const helper = (grid, row, col) => {
    // boundary check
    if (row >= maxRows || col >= maxCols || row < 0 || col < 0 || grid[row][col] === '0')
        return;

    // mark the current as seen
    grid[row][col] = '0';

    helper(grid, row - 1, col);
    helper(grid, row + 1, col);
    helper(grid, row, col - 1);
    helper(grid, row, col + 1);
}

console.log(numIslands([["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]));
// console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));