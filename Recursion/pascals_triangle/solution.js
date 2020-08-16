/**
 * Recursion
 * Sunday, August 9th
 * https://leetcode.com/problems/pascals-triangle/
 */

/**
 *
 * Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly above it.
 *
 *               1
 *            1     1
 *         1     2    1
 *      1     3     3   1
 *    1    4     6    4    1
 * 1    5    10    10    5    1
 *
 *
 * Example:
 * Input: 5
 * Output:
 * [
 *  [1],
 *  [1,1],
 *  [1,2,1],
 *  [1,3,3,1],
 *  [1,4,6,4,1]
 * ]
 * 
 */


/**
 * @param {number} numRows
 * @return {number[][]}
 */

 // base cases
 // 1. row < 0 || col < 0 return 0;
 // 2. row === 0 && col === 0 return 1;

// Recursive relation
// pascalNum = triangle[row - 1][col] + triangle[row - 1][col - 1];

var generate = function(numRows) {
    let triangle = [];
    for(let i = 0; i < numRows; i++) {
        let row = [];
        for(let j = 0; j < numRows; j++) {
            let generatedNum = helper(i, j);
            if (generatedNum > 0) {
                row.push(generatedNum);
            }
        }
        triangle.push(row);
    }
    return triangle;
};


var helper = function (row, col) {
    if (row < 0 || col < 0) {
        return 0;
    }
    if (row === 0 && col === 0) {
        return 1;
    }

    return helper(row - 1, col) + helper(row - 1, col - 1);
}

console.log(generate(5));

