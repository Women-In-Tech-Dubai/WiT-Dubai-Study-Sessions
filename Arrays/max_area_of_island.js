/**
 * https://leetcode.com/problems/max-area-of-island/
 * 
 * You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
[
 [0,0,1,0,0,0,0,1,0,0,0,0,0]
 [0,0,0,0,0,0,0,1,1,1,0,0,0]
 [0,1,1,0,1,0,0,0,0,0,0,0,0]
 [0,1,0,0,1,1,0,0,1,0,1,0,0]
 [0,1,0,0,1,1,0,0,1,1,1,0,0]
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]
]
*/

// IM HEREEEE  welcome  :D XD
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;
    for(var row = 0; row < grid.length; row++) {
        for(column = 0; column < grid[row].length; column++) {
            if (grid[row][column] == 1) {
                maxArea = Math.max(maxArea, calculateArea(row, column, grid));
            }
        }
    }
    return maxArea;
};

const calculateArea = function (row, col, grid) {
    // Base conditions
    // 1. Within boundaries of grid
    if (row >= grid.length || row < 0 || col < 0 || col >= grid[0].length) {
        return 0;
    }

    // 2. If water cell
    if (grid[row][col] == 0) {
        return 0;
    }

    // Found a land cell, calculate area
    grid[row][col] = 0;
    return 1 + calculateArea(row + 1, col, grid) + calculateArea(row - 1, col, grid) + calculateArea(row, col - 1, grid) + calculateArea(row, col + 1, grid);
}