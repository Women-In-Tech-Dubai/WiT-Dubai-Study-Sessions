/**
 * Strings & arrays
 * https://leetcode.com/problems/rotate-image/
 */

/**
 * https://leetcode.com/problems/rotate-image/
 *
 * You are given an n x n 2D matrix representing an image.
 *
 * Rotate the image by 90 degrees (clockwise).
 *
 * Note: You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT 
 * allocate another 2D matrix and do the rotation.
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
    const n = matrix.length;

    // Transpose matrix which results in an anticlockwise rotation
    // Important: j starts at i 
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Use two pointer approach to swap values in each row
    // The index to swap with in every iteration is determined by: last index - j => (n - 1 - j)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < (n / 2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][n - 1 - j];
            matrix[i][n - 1 - j] = temp;
        }
    }
};