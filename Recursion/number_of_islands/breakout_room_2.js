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
const numIslands = (grid) => {
    let numberOfIslands = 0;
    const rows = grid.length;
    if(rows > 0) {
        const columns = grid[0].length;
        for(var x = 0; x < rows; x++) {
            for(var y = 0; y < columns; y++) {
                if(grid[x][y] === '1') {
                    helper(grid, x, y, columns, rows)
                    numberOfIslands++;
                }
            }
        }
        return numberOfIslands;
    } else {
        return numberOfIslands;
    }
}

const helper = (grid, x, y, columns, rows) => {
    //something
   if(x < 0 || y < 0 || x >= rows || y  >= columns || grid[x][y] !== '1' ) {
        return false;
    }

    grid[x][y] = '2'; // we're marking as visited

    helper(grid, x, y+1, columns, rows) //down
    helper(grid, x, y-1, columns, rows) //up
    helper(grid, x+1, y, columns, rows) //right
    helper(grid, x-1, y, columns, rows) //left
}
