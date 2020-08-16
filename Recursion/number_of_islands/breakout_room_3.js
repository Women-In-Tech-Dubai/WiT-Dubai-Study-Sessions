/**
 * Recursion
 * Sunday, August 16th
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

/**
 * @param {character[][]} grid
 * @return {number}
 */

 // Base cases:
 // 1. out of bounds => row < 0 || col < 0 || row >= grid[0].length || col >= grid.length
 // 2. visited cell => grid[row][col] === 0

 // Recursive relation
 // top cell: row - 1, col
 // right cell: row, col + 1
 // bottom cell: row + 1, col
 // left cell: row, col - 1

const numIslands = (grid) => {
    if (!grid.length || grid[0].length === 0) {
        return 0;
    }
    let maxRows = grid.length;
    let maxCols = grid[0].length;
    let count = 0;
     
    for(let i=0; i<maxRows; i++){
        for(let j=0; j<maxCols; j++){
            if (grid[i][j] === 1) {
               isIsland(grid, i, j);
               ++count;
            }
        }
    }
    return count;
}

var isIsland = function(grid, row, col) {

    // base cases
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length || grid[row][col] === 0){
        return;
    }

    // Mark cell as seen/visited
    grid[row][col] = 0;

    // Check all adjacent cells
    isIsland(grid, row-1, col);
    isIsland(grid, row+1, col);
    isIsland(grid, row, col-1);
    isIsland(grid, row, col+1);
}

console.log(numIslands([
    [1,1,0,0,0],
    [0,0,0,0,1],
    [0,0,1,0,0],
    [1,1,0,0,0]
]));
