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


// base cases - out of bounds
// recursive sequence - mark as seen, call helper() again with top, left, bottom, right
// helper

/**
 * @param {character[][]} grid
 * @return {number}
*/

package number_of_islands

func numIslands(grid [][]int) {
	var nI int
	for i := 0; i <= len(grid); i++ {
		for j := 0; j <= len(grid[i]); j++ {
			// if it's land, call isIsland to check if it's an island or not
			if grid[i][j] == 1 {
				if isIsland(grid, i, j) == true {
					nI = nI + 1
				}
			}
			// if it's an island, keep count of it
		}
	}
}

// return isIsland or not isIsland
func isIsland(grid [][]int, row, clm int) bool {
	if row > len(grid) || row < 0 || clm > len(grid[0]) || clm < 0 {
		return false
	}

	//mark the cell as seen

	isIsland(grid, row+1, clm) // check top cell
	isIsland(grid, row-1, clm) // check bottom cell
	isIsland(grid, row, clm-1) // check left cell
	isIsland(grid, row, clm+1) // check right cell

	// top, left, bottom, right
	// if grid[row+1][clm] == 0 && grid[row][clm-1] == 0 && grid[row-1][clm] == 0 && grid[row][clm+1] == 0 {
	// 	return true
	// }
}
